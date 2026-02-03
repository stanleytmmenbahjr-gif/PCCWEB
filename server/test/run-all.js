import { run as sendSamples } from './send-samples.js'

const API_BASE = process.env.API_BASE || process.env.VITE_API_BASE || 'http://localhost:3000'

async function waitForHealth(timeout = 60000) {
  const deadline = Date.now() + timeout
  let attempt = 0
  while (Date.now() < deadline) {
    attempt++
    try {
      console.log(`Health check attempt #${attempt}`)
      const res = await fetch(`${API_BASE}/api/health`)
      if (res.ok) {
        const body = await res.json().catch(() => null)
        console.log('Health OK:', body)
        return true
      }
      console.log('Health returned non-OK status', res.status)
    } catch (e) {
      console.log(`Health check attempt #${attempt} failed: ${e && e.message || e}`)
    }
    await new Promise(r => setTimeout(r, 1000))
  }
  throw new Error('Health check failed: timeout')
}

async function main() {
  console.log('Waiting for server health...')
  await waitForHealth(20000)
  console.log('Running sample sends...')
  await sendSamples()
}

main().catch(e => { console.error(e); process.exit(1) })
