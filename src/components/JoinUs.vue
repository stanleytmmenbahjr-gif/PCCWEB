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
        <input v-model="form.fullName"
          type="text"
          required
          placeholder="Enter your full name"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
      </div>

      <!-- Phone & Email -->
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input v-model="form.phone"
            type="tel"
            required
            placeholder="+231 xxx xxx xxx"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address (Optional)</label>
          <input v-model="form.email"
            type="email"
            placeholder="example@email.com"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
        </div>
      </div>

      <!-- Gender & Marital -->
      <div class="grid md:grid-cols-2 gap-6">

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
          <select v-model="form.gender"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">

            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>

          </select>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Marital Status</label>
          <select v-model="form.maritalStatus"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">

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
        <input v-model="form.address"
          type="text"
          placeholder="Your address"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
      </div>

      <!-- Born Again -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Are you born again?</label>

        <select v-model="form.bornAgain"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">

          <option value="">Select option</option>
          <option>Yes</option>
          <option>No</option>

        </select>
      </div>

      <!-- Ministry -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Ministry / Department</label>

        <select v-model="form.ministry"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">

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

      <!-- Message -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Additional Message</label>

        <textarea
          v-model="form.message"
          rows="4"
          placeholder="Any additional information"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
        </textarea>
      </div>

      <!-- Submit -->
      <div class="text-center pt-6">

        <button
          type="submit"
          :disabled="isSubmitting"
          class="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold uppercase">

          <span v-if="!isSubmitting">Submit Membership Form</span>
          <span v-else>Sending...</span>

        </button>

      </div>

      <!-- Status -->
      <p v-if="status"
         class="text-center mt-4"
         :class="{
           'text-green-600': status === 'success',
           'text-red-600': status === 'error'
         }">

        {{ responseMessage }}

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

  isSubmitting.value = true
  status.value = ''

  try {

    const data = new FormData()

    data.append("full_name", form.fullName)
    data.append("phone_number", form.phone)
    data.append("email", form.email)
    data.append("gender", form.gender)
    data.append("marital_status", form.maritalStatus)
    data.append("address", form.address)
    data.append("born_again", form.bornAgain)
    data.append("ministry", form.ministry)
    data.append("message", form.message)

    await fetch("https://ee.kobotoolbox.org/x/lWIkZaCL/submission", {
      method: "POST",
      body: data
    })

    status.value = "success"
    message.value = "Thank you. Your membership request has been received."

    Object.keys(form).forEach(k => form[k] = "")

  } catch (error) {

    status.value = "error"
    message.value = "Submission failed. Please try again."

  }

  isSubmitting.value = false
}
</script>
<style scoped>
.max-w-4xl {
  max-width: 48rem;
}
</style>