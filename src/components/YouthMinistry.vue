<template>
  <div id="YouthMinistry" class="bg-white text-gray-900 font-sans">
    <NavBar />

    <main class="pt-32">

      <!-- HERO SLIDER -->
      <section class="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px]">
        <!-- Slides -->
        <transition-group name="fade">
          <div
            v-for="(slide, index) in heroSlides"
            v-show="currentSlide === index"
            :key="index"
            class="absolute inset-0"
          >
            <img :src="slide" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/55"></div>
          </div>
        </transition-group>

        <!-- Content -->
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center text-center z-10">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
            Youth Ministry
          </h1>
          <div class="h-1 w-16 sm:w-20 md:w-24 bg-red-600 mt-3 sm:mt-4 md:mt-4 mb-4 sm:mb-6"></div>
          <p class="max-w-2xl text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2">
            Raising a generation rooted in Christ, bold in faith, and equipped to impact the world.
          </p>
        </div>

        <!-- Navigation Buttons -->
        <button @click="prevSlide"
          class="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-2 sm:p-3 rounded-full transition z-20 text-lg sm:text-2xl">
          ‹
        </button>

        <button @click="nextSlide"
          class="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-2 sm:p-3 rounded-full transition z-20 text-lg sm:text-2xl">
          ›
        </button>

        <!-- Dots -->
        <div class="absolute bottom-4 sm:bottom-6 md:bottom-8 w-full flex justify-center gap-2 sm:gap-3 z-20">
          <span
            v-for="(slide, index) in heroSlides"
            :key="index"
            @click="currentSlide = index"
            class="w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition"
            :class="currentSlide === index ? 'bg-red-600' : 'bg-white/50'"
          ></span>
        </div>
      </section>

      <!-- MISSION & VISION -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Our Vision</h2>
          <div class="h-1 w-12 sm:w-16 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
            To raise a generation of young people who are spiritually strong, culturally aware, and globally impactful in faith and service.
          </p>
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Our Mission</h2>
          <div class="h-1 w-12 sm:w-16 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
            To disciple, empower, and equip youths through biblical teachings, leadership development, and purposeful engagement in church and society.
          </p>
        </div>
      </section>

      <!-- LEADERSHIP -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
        <div class="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase">Youth Leadership</h2>
          <div class="h-1 w-16 sm:w-20 md:w-24 bg-red-600 mt-3 sm:mt-4 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div
            v-for="(leader, index) in leaders"
            :key="index"
            class="group relative overflow-hidden rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer transition"
            tabindex="0"
            @click="toggleCardActive"
            @keydown.enter="toggleCardActive"
          >
            <img :src="leader.image"
              class="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105 group-active:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <div class="absolute bottom-0 w-full p-3 sm:p-4 text-center">
              <h3 class="text-base sm:text-lg font-bold uppercase text-white">{{ leader.name }}</h3>
              <p class="text-xs sm:text-sm text-red-600 uppercase">{{ leader.role }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- YOUTH NEWS -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <div class="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase">Youth Ministry News</h2>
          <div class="h-1 w-16 sm:w-20 bg-red-600 mt-3 sm:mt-4 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <article
            v-for="(news, index) in newsItems"
            :key="index"
            class="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl focus:shadow-2xl active:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all cursor-pointer"
            tabindex="0"
            @click="toggleCardActive"
            @keydown.enter="toggleCardActive"
          >
            <div class="relative overflow-hidden">
              <img :src="news.image"
                class="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110 group-active:scale-110" />
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition flex items-center justify-center">
                <span class="text-white border border-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm uppercase tracking-wider">
                  Read More
                </span>
              </div>
            </div>

            <div class="p-4 sm:p-6">
              <span class="text-xs font-semibold text-gray-500">{{ news.date }}</span>
              <h3 class="mt-2 font-bold text-base sm:text-lg text-gray-900 group-hover:text-red-600 group-focus:text-red-600 group-active:text-red-600 transition-colors line-clamp-2">
                {{ news.title }}
              </h3>
            </div>
          </article>
        </div>
      </section>

    </main>

    <FloatingChat />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import FloatingChat from './FloatingChat.vue'

const heroSlides = [
  new URL('../assets/youth/backgroun1.JPG', import.meta.url).href,
  new URL('../assets/youth/background2.JPG', import.meta.url).href,
  new URL('../assets/youth/background3.JPG', import.meta.url).href,
  new URL('../assets/youth/background4.jpg', import.meta.url).href,
  new URL('../assets/youth/bacground5.JPG', import.meta.url).href,
  new URL('../assets/youth/background6.JPG', import.meta.url).href,
  new URL('../assets/youth/background7.jpg', import.meta.url).href,
  new URL('../assets/youth/background8.JPG', import.meta.url).href,
  new URL('../assets/youth/background9.jpg', import.meta.url).href
]

const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})
onUnmounted(() => clearInterval(interval))

const leaders = [
  { name: 'Decon Samuel Assah', role: 'Youth Leader', image: new URL('../assets/youth/learder1.jpg', import.meta.url).href },
  { name: 'Sis. Garmai Sarngio', role: 'Assistant', image: new URL('../assets/youth/learder2.jpg', import.meta.url).href },
  { name: 'Bro. Jerry', role: 'Secretary', image: new URL('../assets/youth/learder3.jpg', import.meta.url).href },
  { name: 'Aaron Zelee Dunar', role: 'Coordinator', image: new URL('../assets/youth/learder4.jpg', import.meta.url).href }
]

const newsItems = [
  { date: 'Dec 25, 2025', title: 'Christmas Youth Camp 2025', image: new URL('../assets/youth/CYC1.jpg', import.meta.url).href },
  { date: 'Dec 25, 2025', title: 'Christmas Youth Camp 2025', image: new URL('../assets/youth/CYC2.jpg', import.meta.url).href },
  { date: 'Dec 27, 2025', title: 'Trip To The Guinea', image: new URL('../assets/youth/Trip-to-Guinea.JPG', import.meta.url).href },
  { date: 'Dec 28, 2025', title: 'Guinea Adventure Continues', image: new URL('../assets/youth/Trip-to-Guinea2.JPG', import.meta.url).href }
]

const toggleCardActive = (e) => {
  e.currentTarget.classList.toggle('active')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
