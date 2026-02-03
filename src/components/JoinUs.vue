<template>
  <section class="max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-xl shadow-md">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-black uppercase text-gray-900">
        Join Paynesville City Church
      </h2>
      <div class="h-1 w-24 bg-red-600 mx-auto mt-4"></div>
      <p class="max-w-3xl mx-auto mt-6 text-lg text-gray-700 leading-relaxed">
        We are delighted to welcome you to the family of God. Kindly fill out the form below
        to become a member of Paynesville City Church under the Church of Pentecost Liberia.
      </p>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm space-y-6">
      <!-- Full Name -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
        <input v-model="form.fullName" type="text" placeholder="Enter your full name" required
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
      </div>

      <!-- Phone & Email -->
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input v-model="form.phone" type="tel" placeholder="e.g. +231 xxx xxx xxx" required
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address (Optional)</label>
          <input v-model="form.email" type="email" placeholder="example@email.com"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
      </div>

      <!-- Gender & Marital Status -->
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
          <select v-model="form.gender" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Marital Status</label>
          <select v-model="form.maritalStatus" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Select status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
          </select>
        </div>
      </div>

      <!-- Address -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Residential Address</label>
        <input v-model="form.address" type="text" placeholder="Your current address"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
      </div>

      <!-- Born Again -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Are you born again?</label>
        <select v-model="form.bornAgain" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="">Select option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <!-- Ministry Interest -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Ministry / Department of Interest</label>
        <select v-model="form.ministry" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="">Select ministry</option>
          <option>Choir / Music Ministry</option>
          <option>Youth Ministry</option>
          <option>Women's Ministry</option>
          <option>Men's Ministry</option>
          <option>Children Ministry</option>
          <option>Ushering</option>
          <option>Media / Technical</option>
        </select>
      </div>

      <!-- Optional message -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Additional Message (Optional)</label>
        <textarea v-model="form.message" rows="4" placeholder="Any additional info"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
      </div>

      <!-- Submit -->
      <div class="text-center pt-6">
        <button :disabled="isSubmitting" type="submit" class="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide transition-all">
          <span v-if="!isSubmitting">Submit Membership Form</span>
          <span v-else>Sending…</span>
        </button>
      </div>

      <p v-if="status" :class="{'text-green-600': status === 'success', 'text-red-600': status === 'error'}" class="mt-4">
        {{ message }}
      </p>

    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  gender: '',
  maritalStatus: '',
  address: '',
  bornAgain: '',
  ministry: '',
  message: ''
})
const status = ref('')
const message = ref('')
const isSubmitting = ref(false)

async function handleSubmit() {
  status.value = ''
  message.value = ''
  isSubmitting.value = true
  try {
    const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000'
    const payload = {
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      // Include the other form details inside the message so the email contains full context
      message: `Gender: ${form.gender || ''}\nMarital status: ${form.maritalStatus || ''}\nAddress: ${form.address || ''}\nBorn again: ${form.bornAgain || ''}\nMinistry: ${form.ministry || ''}\n\n${form.message || ''}`
    }

    const res = await fetch(`${API_BASE}/api/join-us`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      const body = await res.json().catch(() => null)
      throw new Error((body && body.error) || 'Submit failed')
    }

    status.value = 'success'
    message.value = 'Thank you — your membership request was received.'
    Object.keys(form).forEach(k => form[k] = '')
  } catch (err) {
    status.value = 'error'
    message.value = 'Failed to send message. Please try again.'
    console.error('Submit error:', err)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.max-w-4xl { max-width: 48rem; }
</style>