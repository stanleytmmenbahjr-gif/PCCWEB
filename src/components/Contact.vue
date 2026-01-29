<template>
  <div id="ContactUs" class="bg-white text-gray-900 font-sans">
    <!-- Navbar -->
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative h-[300px] sm:h-[380px] md:h-[450px] bg-gray-900">
        <img
          :src="heroImg"
          class="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        <div class="relative z-10 text-center px-4 sm:px-6 md:px-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
            Contact Us
          </h1>
          <div class="h-1 w-16 sm:w-20 md:w-24 bg-red-600 mx-auto my-3 sm:my-4"></div>
          <p class="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-2">
            We'd love to hear from you — reach us through any of the channels below.
          </p>
        </div>
      </section>

      <!-- REACH US INFO -->
      <section class="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-gray-800 space-y-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-center mb-8 sm:mb-10">
          Reach Us Through
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-semibold uppercase">Address</h3>
            <p class="text-sm sm:text-base">Paynesville City, Duport Road</p>
            <p class="text-sm sm:text-base">Adjacent the Orange Tower, Monrovia, Liberia</p>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-semibold uppercase">Phone</h3>
            <p class="text-sm sm:text-base">+231 770 123 456</p>
            <p class="text-sm sm:text-base">+231 888 987 654</p>
            <p class="text-sm sm:text-base">Helpline: +231 777 333 222</p>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-semibold uppercase">Email & Socials</h3>
            <p class="break-all text-xs sm:text-sm">info@yourchurch.org</p>
            <div class="flex justify-center gap-3 sm:gap-4 text-lg sm:text-xl text-gray-600">
              <!-- Replace hrefs with your real URLs -->
              <a href="https://facebook.com/yourchurch" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition">📘</a>
              <a href="https://twitter.com/yourchurch" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition">🐦</a>
              <a href="https://youtube.com/yourchurch" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition">🎥</a>
              <a href="https://instagram.com/yourchurch" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition">📸</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT FORM -->
      <section class="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <form @submit.prevent="handleSubmit" class="space-y-6 bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md">

          <div>
            <label class="block text-gray-800 font-semibold mb-2 text-sm sm:text-base">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label class="block text-gray-800 font-semibold mb-2 text-sm sm:text-base">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              class="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label class="block text-gray-800 font-semibold mb-2 text-sm sm:text-base">Message</label>
            <textarea
              v-model="form.message"
              placeholder="Your message..."
              class="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none text-sm sm:text-base"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-all duration-300 text-sm sm:text-base w-full"
          >
            Send Message
          </button>

          <p v-if="successMessage" class="mt-4 text-green-600 font-semibold text-sm sm:text-base">
            {{ successMessage }}
          </p>
        </form>
      </section>

      <!-- GOOGLE MAP -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-6 sm:mb-8 text-center">Find Us On Map</h3>
        <div class="w-full h-48 sm:h-64 md:h-96 rounded-lg shadow-md overflow-hidden">
          <iframe
            class="w-full h-full"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.567890123!2d-10.780000!3d6.330000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123abc456def789!2sPaynesville%20City%2C%20Duport%20Road%20Adjacent%20to%20Orange%20Tower!5e0!3m2!1sen!2slr!4v1700000000000"
          ></iframe>
        </div>
      </section>

    </main>

    <!-- Floating Chat & Footer -->
    <FloatingChat />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import FloatingChat from './FloatingChat.vue'
import { ref } from 'vue'

// Hero background image
const heroImg = new URL('../assets/contact/hero.jpg', import.meta.url).href

// Form data
const form = ref({
  name: '',
  email: '',
  message: ''
})

const successMessage = ref('')

// Submit to backend API
const handleSubmit = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form.value, source: 'Contact' })
    })
    const data = await res.json()
    if (res.ok && data.success) {
      form.value = { name: '', email: '', message: '' }
      successMessage.value = 'Thank you! Your message has been sent.'
      setTimeout(() => { successMessage.value = '' }, 5000)
    } else {
      console.error('Submission failed', data)
      successMessage.value = 'Submission failed — please try again later.'
      setTimeout(() => { successMessage.value = '' }, 5000)
    }
  } catch (err) {
    console.error('Network error', err)
    successMessage.value = 'Network error — could not reach server.'
    setTimeout(() => { successMessage.value = '' }, 5000)
  }
}
</script>

<style scoped>
#ContactUs {
  scroll-margin-top: 5rem;
}
</style>
