require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: (origin, cb) => {
  if (!CORS_ORIGIN) return cb(null, true)
  const allowed = CORS_ORIGIN.split(',').map(s => s.trim()).filter(Boolean)
  if (!origin) return cb(null, true) // allow server-to-server
  cb(allowed.includes(origin) ? null : new Error('CORS not allowed'), allowed.includes(origin))
}}));
app.use(express.json());

// Mail transport setup: prefer SendGrid if SENDGRID_API_KEY is set, otherwise SMTP via nodemailer.
let sendVia = null;
let smtpTransport = null;
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sendVia = 'sendgrid';
  console.log('Configured to send mail via SendGrid');
} else if (process.env.SMTP_HOST && process.env.SMTP_PORT) {
  smtpTransport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
  });
  smtpTransport.verify().then(() => console.log('SMTP transporter ready')).catch(err => console.warn('SMTP verify failed', err && err.message));
  sendVia = 'smtp';
} else if (process.env.NODE_ENV !== 'production') {
  // Development fallback: create Ethereal test account so devs can preview emails locally
  nodemailer.createTestAccount().then(acct => {
    smtpTransport = nodemailer.createTransport({
      host: acct.smtp.host,
      port: acct.smtp.port,
      secure: acct.smtp.secure,
      auth: { user: acct.user, pass: acct.pass }
    });
    sendVia = 'ethereal';
    console.log('No real mail transport configured — using Ethereal test account for local email previews.');
  }).catch(e => {
    console.warn('Ethereal test account creation failed', e && e.message || e);
  });
} else {
  console.warn('No mail transport configured. Set SENDGRID_API_KEY or SMTP_* env vars. Emails will fail.');
}

const TO_EMAIL = (process.env.TO_EMAIL || 'pccliberia2025@gmail.com').split(',').map(s => s.trim()).filter(Boolean);
const FROM_EMAIL = process.env.FROM_EMAIL || process.env.SMTP_USER || 'no-reply@example.com';

function formatMeta(req) {
  const ip = req.headers['x-forwarded-for'] || req.ip || '';
  const ua = req.headers['user-agent'] || '';
  return `\n\n---\nSender IP: ${ip}\nUser-Agent: ${ua}`;
}

async function sendMail({ subject, text, html }) {
  if (sendVia === 'sendgrid') {
    const msg = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject,
      text,
      html
    };
    return sgMail.send(msg);
  }
  if ((sendVia === 'smtp' || sendVia === 'ethereal') && smtpTransport) {
    const info = await smtpTransport.sendMail({ to: TO_EMAIL.join(','), from: FROM_EMAIL, subject, text, html });
    // If using Ethereal, log a preview URL
    try {
      const preview = nodemailer.getTestMessageUrl(info);
      if (preview) console.log('Ethereal preview URL:', preview);
    } catch (e) { /* ignore */ }
    return info;
  }
  throw new Error('No mail transport configured');
}

app.post('/api/join-us', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    const payload = { name, email, phone, message };
    const bodyText = `Join Us submission\n\nName: ${name || ''}\nEmail: ${email || ''}\nPhone: ${phone || ''}\nMessage: ${message || ''}${formatMeta(req)}`;
    const bodyHtml = `<h3>Join Us submission</h3><ul><li><strong>Name:</strong> ${name || ''}</li><li><strong>Email:</strong> ${email || ''}</li><li><strong>Phone:</strong> ${phone || ''}</li><li><strong>Message:</strong> ${message || ''}</li></ul><pre>${formatMeta(req)}</pre>`;
    await sendMail({ subject: `Join Us: ${name || 'New submission'}`, text: bodyText, html: bodyHtml });
    res.json({ success: true });
  } catch (err) {
    console.error('join-us send error', err && err.message || err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.post('/api/contact-us', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    const bodyText = `Contact Us submission\n\nName: ${name || ''}\nEmail: ${email || ''}\nSubject: ${subject || ''}\nMessage: ${message || ''}${formatMeta(req)}`;
    const bodyHtml = `<h3>Contact Us submission</h3><ul><li><strong>Name:</strong> ${name || ''}</li><li><strong>Email:</strong> ${email || ''}</li><li><strong>Subject:</strong> ${subject || ''}</li><li><strong>Message:</strong> ${message || ''}</li></ul><pre>${formatMeta(req)}</pre>`;
    await sendMail({ subject: `Contact Us: ${subject || 'New message'}`, text: bodyText, html: bodyHtml });
    res.json({ success: true });
  } catch (err) {
    console.error('contact-us send error', err && err.message || err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true, mailer: sendVia || null }));

app.use((err, req, res, next) => {
  console.error('Unhandled error', err && err.stack || err);
  res.status(500).json({ error: 'server error' });
});

// Global error handlers to make server failures visible in logs and avoid silent exits
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception', err && err.stack || err);
});
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection', reason && reason.stack || reason);
});

app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
  console.log('Mailer:', sendVia || 'none');
  // If using Ethereal, warn that preview URLs will be logged per-message
  if (sendVia === 'ethereal') console.log('Ethereal is active — preview URLs will appear in logs for each sent message.');
});
