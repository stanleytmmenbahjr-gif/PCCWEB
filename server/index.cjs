const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;
const dbPath = path.join(__dirname, 'data.sqlite');

// JWT auth setup
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'
const SALT_ROUNDS = 10

// SMTP / mail setup (optional). Set these env vars to enable outgoing mail:
// SMTP_HOST, SMTP_PORT, SMTP_SECURE ("true"/"false"), SMTP_USER, SMTP_PASS
const SMTP_HOST = process.env.SMTP_HOST || ''
const SMTP_PORT = process.env.SMTP_PORT || ''
const SMTP_SECURE = process.env.SMTP_SECURE === 'true'
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''
let mailer = null
if (SMTP_HOST && SMTP_PORT) {
  mailer = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined
  })
  // verify connection
  mailer.verify().then(() => console.log('SMTP transporter ready')).catch(err => console.warn('SMTP verify failed', err.message))
}

// Ensure users table exists and create initial admin user from env if needed
function ensureUsersTable(db) {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password_hash TEXT
  )`)

  const adminUser = process.env.ADMIN_USER
  const adminPass = process.env.ADMIN_PASS
  // Support multiple admin users via comma-separated env vars:
  // ADMIN_USERS="a@example.com,b@example.com" and ADMIN_PASSES="pass1,pass2"
  const adminUsers = (process.env.ADMIN_USERS || process.env.ADMIN_USER || '').split(',').map(s => s.trim()).filter(Boolean)
  const adminPasses = (process.env.ADMIN_PASSES || process.env.ADMIN_PASS || '').split(',').map(s => s.trim())
  adminUsers.forEach((username, i) => {
    const pass = adminPasses[i] || adminPasses[0] || ''
    if (!pass) {
      console.warn('No password provided for admin user', username)
      return
    }
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
      if (err) return console.error('User lookup error', err)
      if (!row) {
        bcrypt.hash(pass, SALT_ROUNDS).then(hash => {
          db.run('INSERT INTO users (username,password_hash) VALUES (?,?)', [username, hash], (err2) => {
            if (err2) console.error('Failed creating admin user', err2)
            else console.log('Created initial admin user:', username)
          })
        }).catch(e => console.error('Hash error', e))
      }
    })
  })
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || ''
  if (!header.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' })
  const token = header.slice(7)
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.user = payload
    next()
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Failed to open DB', err);
  else console.log('Opened database at', dbPath);
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    source TEXT,
    created_at TEXT
  )`);
  ensureUsersTable(db)
});

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post('/api/submit', (req, res) => {
  const { name, email, message, source } = req.body || {};
  const created_at = new Date().toISOString();
  const stmt = db.prepare('INSERT INTO submissions (name,email,message,source,created_at) VALUES (?,?,?,?,?)');
  stmt.run(name || null, email || null, message || null, source || 'unknown', created_at, function (err) {
    if (err) {
      console.error('Insert error', err);
      res.status(500).json({ error: 'db error' });
      return;
    }
    const insertedId = this.lastID
    res.json({ success: true, id: insertedId });

    // Send email notification if mailer is configured. Recipients come from ADMIN_RECIPIENTS env or default list.
    try {
      const recipients = (process.env.ADMIN_RECIPIENTS || 'pccliberia2025@gmail.com,stanleytmmenbahjr@gmail.com').split(',').map(s => s.trim()).filter(Boolean)
      if (mailer && recipients.length > 0) {
        const text = `New submission:\n\nName: ${name || ''}\nEmail: ${email || ''}\nMessage: ${message || ''}\nSource: ${source || 'unknown'}\nCreated: ${created_at}`
        const html = `<p><strong>New submission</strong></p><ul><li><strong>Name:</strong> ${name || ''}</li><li><strong>Email:</strong> ${email || ''}</li><li><strong>Message:</strong> ${message || ''}</li><li><strong>Source:</strong> ${source || 'unknown'}</li><li><strong>Created:</strong> ${created_at}</li></ul>`
        mailer.sendMail({
          from: process.env.FROM_EMAIL || SMTP_USER || 'no-reply@example.com',
          to: recipients.join(','),
          subject: `New submission #${insertedId}`,
          text,
          html
        }).then(info => console.log('Email sent', info.messageId)).catch(e => console.error('Email send failed', e.message))
      }
    } catch (e) {
      console.error('Notification error', e)
    }
  });
});

// Admin login — returns JWT
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {}
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' })
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) return res.status(500).json({ error: 'db error' })
    if (!row) return res.status(401).json({ error: 'Invalid credentials' })
    bcrypt.compare(password, row.password_hash).then(ok => {
      if (!ok) return res.status(401).json({ error: 'Invalid credentials' })
      const token = jwt.sign({ sub: row.id, username: row.username }, JWT_SECRET, { expiresIn: '12h' })
      res.json({ token })
    }).catch(e => res.status(500).json({ error: 'auth error' }))
  })
})

app.get('/api/submissions', requireAuth, (req, res) => {
  db.all('SELECT * FROM submissions ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('Select error', err);
      res.status(500).json({ error: 'db error' });
      return;
    }
    res.json(rows);
  });
});

// CSV export (protected)
app.get('/api/submissions/export', requireAuth, (req, res) => {
  db.all('SELECT * FROM submissions ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('Export error', err);
      res.status(500).json({ error: 'db error' });
      return;
    }
    const header = ['id','name','email','message','source','created_at']
    const csv = [header.join(',')]
    rows.forEach(r => {
      // naive CSV escaping
      const row = [r.id, r.name, r.email, r.message, r.source, r.created_at]
        .map(v => {
          if (v === null || v === undefined) return ''
          const s = String(v).replace(/"/g, '""')
          return '"' + s + '"'
        })
        .join(',')
      csv.push(row)
    })
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment; filename="submissions.csv"')
    res.send(csv.join('\n'))
  })
})

  // Delete submission (admin)
  app.delete('/api/submissions/:id', requireAuth, (req, res) => {
    const id = req.params.id
    db.run('DELETE FROM submissions WHERE id = ?', [id], function(err) {
      if (err) return res.status(500).json({ error: 'db error' })
      if (this.changes === 0) return res.status(404).json({ error: 'Not found' })
      res.json({ success: true })
    })
  })

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
