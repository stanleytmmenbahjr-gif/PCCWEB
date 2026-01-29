<template>
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Submissions (Admin)</h1>

    <div v-if="!authHeader">
      <p class="mb-4 text-gray-700">Enter admin credentials to view submissions.</p>
      <form @submit.prevent="login" class="max-w-sm space-y-3">
        <div>
          <label class="block text-sm font-semibold mb-1">Username</label>
          <input v-model="username" class="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Password</label>
          <input v-model="password" type="password" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="flex gap-2">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        </div>
        <p v-if="error" class="text-red-600">{{ error }}</p>
      </form>
    </div>

    <div v-else>
      <div class="flex items-center justify-between mb-4">
        <div>
          <button @click="logout" class="px-3 py-1 bg-gray-200 rounded">Logout</button>
        </div>
        <div>
          <a :href="exportUrl" class="px-3 py-1 bg-green-600 text-white rounded">Export CSV</a>
        </div>
      </div>

      <div v-if="loading">Loading…</div>
      <div v-else>
        <table class="w-full table-auto border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-2 text-left">ID</th>
              <th class="p-2 text-left">Name</th>
              <th class="p-2 text-left">Email</th>
              <th class="p-2 text-left">Message</th>
              <th class="p-2 text-left">Source</th>
              <th class="p-2 text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.id" class="border-t">
              <td class="p-2 align-top">{{ row.id }}</td>
              <td class="p-2 align-top">{{ row.name }}</td>
              <td class="p-2 align-top break-words">{{ row.email }}</td>
              <td class="p-2 align-top">{{ row.message }}</td>
              <td class="p-2 align-top">{{ row.source }}</td>
              <td class="p-2 align-top">{{ row.created_at }}</td>
            </tr>
          </tbody>
        </table>
        <p v-if="rows.length === 0" class="mt-4 text-gray-600">No submissions yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const rows = ref([])
const loading = ref(false)
const username = ref('')
const password = ref('')
const token = ref(localStorage.getItem('admin_token') || '')
const error = ref('')

async function load() {
  loading.value = true
  error.value = ''
  try {
    const headers = token.value ? { Authorization: 'Bearer ' + token.value } : {}
    const res = await fetch('http://localhost:3000/api/submissions', { headers })
    if (res.status === 401) {
      error.value = 'Unauthorized — check credentials'
      rows.value = []
      return
    }
    if (!res.ok) throw new Error('Fetch failed')
    rows.value = await res.json()
  } catch (err) {
    console.error('Failed to load submissions', err)
    error.value = 'Failed to load submissions'
    rows.value = []
  } finally {
    loading.value = false
  }
}

async function login() {
  error.value = ''
  try {
    const res = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    const data = await res.json()
    if (!res.ok) {
      error.value = data.error || 'Login failed'
      return
    }
    token.value = data.token
    localStorage.setItem('admin_token', token.value)
    username.value = ''
    password.value = ''
    await load()
  } catch (err) {
    console.error('Login error', err)
    error.value = 'Login failed'
  }
}

function logout() {
  token.value = ''
  localStorage.removeItem('admin_token')
  rows.value = []
}

async function exportCsv() {
  if (!token.value) return alert('Login first')
  try {
    const res = await fetch('http://localhost:3000/api/submissions/export', { headers: { Authorization: 'Bearer ' + token.value } })
    if (!res.ok) return alert('Export failed')
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'submissions.csv'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  } catch (e) {
    console.error('Export error', e)
    alert('Export failed')
  }
}

async function removeSubmission(id) {
  if (!token.value) return alert('Login first')
  if (!confirm('Delete submission #' + id + '?')) return
  try {
    const res = await fetch('http://localhost:3000/api/submissions/' + id, { method: 'DELETE', headers: { Authorization: 'Bearer ' + token.value } })
    if (!res.ok) return alert('Delete failed')
    await load()
  } catch (e) {
    console.error('Delete error', e)
    alert('Delete failed')
  }
}

onMounted(() => {
  if (token.value) load()
})
</script>

<style scoped>
table th, table td { border-bottom: 1px solid #e5e7eb; }
</style>
