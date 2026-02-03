import { run as sendSamples } from './send-samples.js'

const API_BASE = process.env.API_BASE || process.env.VITE_API_BASE || 'http://localhost:3000'

async function waitForHealth(timeout = 20000) {
  const deadline = Date.now() + timeout
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${API_BASE}/api/health`)
      if (res.ok) {
        console.log('Health OK:', await res.json())
        return true
      }
    } catch (e) {
      // server not ready yet
    }
    await new Promise(r => setTimeout(r, 500))
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
