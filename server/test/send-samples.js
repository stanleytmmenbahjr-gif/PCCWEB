// Simple test script to POST sample payloads to the email endpoints
// Usage: node server/test/send-samples.js

const API_BASE = process.env.API_BASE || process.env.VITE_API_BASE || 'http://localhost:3000'

async function post(path, payload) {
  const url = `${API_BASE}${path}`
  console.log(`POST ${url}`)
  // Retry loop to tolerate server startup delays
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const text = await res.text()
      console.log(`STATUS: ${res.status}`)
      console.log('BODY:', text)
      return { ok: res.ok, status: res.status, body: text }
    } catch (err) {
      console.error(`Request failed (attempt ${attempt}):`, err && err.message || err)
      if (attempt < 5) {
        await new Promise(r => setTimeout(r, attempt * 500))
        continue
      }
      return { ok: false, error: String(err) }
    }
  }
}

async function run() {
  console.log('Sending join-us sample...')
  await post('/api/join-us', { name: 'Jane Test', email: 'jane.test@example.com', phone: '+231555000', message: 'I want to join (test)' })

  console.log('\nSending contact-us sample...')
  await post('/api/contact-us', { name: 'John Test', email: 'john.test@example.com', subject: 'Test message', message: 'Hello from test script' })

  console.log('\nDone. Check server logs for Ethereal preview URLs when running in development.')
}

export { run };

if (process.argv[1] && process.argv[1].endsWith('send-samples.js')) {
  run().catch(e => { console.error(e); process.exit(1) })
}
