<template>
  <div id="ContactUs" class="bg-white text-gray-900 font-sans">
    <!-- Navbar -->
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative h-[300px] sm:h-[380px] md:h-[450px] bg-gray-400">
        <img
          :src="heroImg"
          class="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/49 to-black/60"></div>
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
            <p class="text-sm sm:text-base">Paynesville City, Duport Road , Cowfield last Junction</p>
            <p class="text-sm sm:text-base">Adjacent the Orange Tower, Monrovia, Liberia</p>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-semibold uppercase">Phone</h3>
            <p class="text-sm sm:text-base">+231 776 548 981 </p>
            <p class="text-sm sm:text-base">+231 555 877 347</p>
            <p class="text-sm sm:text-base">Helpline: +231 777 443 429</p>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-semibold uppercase">Email & Socials</h3>
            <p class="break-all text-xs sm:text-sm">info@pccliberia2025@gmail.com</p>
            <div class="flex justify-center gap-3 sm:gap-4 text-lg sm:text-xl text-gray-600">
              <!-- Replace hrefs with your real URLs -->

               <a href="https://www.facebook.com/share/p/181uDkoYXA/" aria-label="Facebook" class="text-black hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadow-lg" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.5 3h-2.4v7A10 10 0 0 0 22 12Z"/>
          </svg>
        </a>
                  <a href="#" aria-label="TikTok" class="text-black hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadow-lg" viewBox="0 0 24 24">
            <path d="M16.5 1c.6 3.4 3 5.7 6.5 6v4.2c-2.1.1-4.1-.6-6-1.8v7.6a7.4 7.4 0 1 1-7.4-7.4c.3 0 .6 0 .9.1v4.3a3.1 3.1 0 1 0 3.1 3.1V1h3Z"/>
          </svg>
        </a>
               <a href="#" aria-label="YouTube" class="text-black hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadwo-lg" viewBox="0 0 24 24">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12Z"/>
          </svg>
        </a>
              <a href="#" aria-label="Instagram" class="text-black hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadow-lg" viewBox="0 0 24 24">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"/>
          </svg>
        </a>

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
          <p v-if="errorMessage" class="mt-4 text-red-600 font-semibold text-sm sm:text-base">
            {{ errorMessage }}
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
import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key from environment variables
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '')

// Hero background image
const heroImg = new URL('../assets/Media/hero.jpg', import.meta.url).href

// Form data
const form = ref({
  name: '',
  email: '',
  message: ''
})

const successMessage = ref('')
const errorMessage = ref('')

// Submit form and send email
const handleSubmit = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
      {
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'info@pccliberia2025@gmail.com',
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message
      }
    )
    
    if (result.status === 200) {
      form.value = { name: '', email: '', message: '' }
      successMessage.value = 'Thank you! Your message has been sent.'
      setTimeout(() => { successMessage.value = '' }, 5000)
    }
  } catch (err) {
    console.error('Email send failed', err)
    errorMessage.value = 'Failed to send message. Please try again later.'
    setTimeout(() => { errorMessage.value = '' }, 5000)
  }
}
</script>

<style scoped>
#ContactUs {
  scroll-margin-top: 5rem;
}
</style>
