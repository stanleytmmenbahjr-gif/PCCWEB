<template>
  <div id="ChildernMinistry" class="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
    <NavBar />

    <main class="pt-32">
      <!-- HERO -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-20 items-center">
        <div class="order-2 lg:order-1 space-y-6 sm:space-y-8">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-[#333] leading-tight uppercase tracking-tighter">
            Children's Ministry
          </h1>
          <div class="space-y-4 sm:space-y-6 text-[#444] text-base sm:text-lg leading-relaxed">
            <p>
              The Children's Ministry, which is the children's wing of the Church, meets on Sundays before the adult service.
            </p>
            <p>
              The Children's Ministry trains children along biblical precepts of balanced growth. This includes lessons on Salvation, Worship and Obedience.
            </p>
          </div>
        </div>
      </section>

      <!-- SLIDER -->
      <section class="relative w-full overflow-hidden bg-black group border-y-4 border-white">
        <div
          class="flex transition-transform duration-1000 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="min-w-full grid grid-cols-2 gap-[1px] sm:gap-[2px]"
          >
            <img :src="slide.img1" class="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover" />
            <img :src="slide.img2" class="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover" />
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-red-600 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/50 z-10 opacity-0 group-hover:opacity-100 transition-all text-lg sm:text-xl"
        >❮</button>

        <button
          @click="nextSlide"
          class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-red-600 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/50 z-10 opacity-0 group-hover:opacity-100 transition-all text-lg sm:text-xl"
        >❯</button>

        <div class="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 sm:gap-3 z-10">
          <button
            v-for="(_, index) in slides"
            :key="index"
            @click="goToSlide(index)"
            class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all"
            :class="currentSlide === index ? 'bg-red-600 scale-125' : 'bg-white/60'"
          />
        </div>
      </section>

      <!-- MISSION & VISION -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Our Vision</h2>
          <div class="h-1 w-12 sm:w-16 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
            To raise a generation of children who know Christ, live boldly for Him, and shine His love in their homes, schools, and communities.
          </p>
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Our Mission</h2>
          <div class="h-1 w-12 sm:w-16 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
            To equip children through Bible teaching, worship, character formation, and loving fellowship so they grow in faith and service.
          </p>
        </div>
      </section>

      <!-- LEADERSHIP -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
        <div class="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase">Children Ministry Leadership</h2>
          <div class="h-1 w-16 sm:w-20 md:w-24 bg-red-600 mt-3 sm:mt-4 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div
            v-for="(leader, index) in leaders"
            :key="index"
            class="group overflow-hidden rounded-3xl bg-base-100  border border-gray-200 shadow-lg transition hover:shadow-2xl"
          >
            <div class="aspect-[4/5] overflow-hidden">
              <img
                :src="leader.image"
                :alt="leader.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="p-5 text-center">
              <h3 class="text-lg sm:text-xl font-bold uppercase text-[#222]">{{ leader.name }}</h3>
              <p class="text-sm text-red-600 font-semibold mt-2 uppercase tracking-wider">{{ leader.role }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CHILDREN NEWS -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <div class="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase">Children Ministry</h2>
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
                  View Story
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

const img11 = new URL('../assets/childern/11.jpeg', import.meta.url).href
const img12 = new URL('../assets/childern/12.jpeg', import.meta.url).href
const img27 = new URL('../assets/childern/27.jpeg', import.meta.url).href
const img28 = new URL('../assets/childern/28.jpeg', import.meta.url).href
const img30 = new URL('../assets/childern/30.jpeg', import.meta.url).href
const img19 = new URL('../assets/childern/19.jpeg', import.meta.url).href
const img23 = new URL('../assets/childern/23.jpeg', import.meta.url).href
const img22 = new URL('../assets/childern/22.jpeg', import.meta.url).href
const leader1 = new URL('../assets/childern/leader1.JPG', import.meta.url).href
const leader2 = new URL('../assets/childern/leader2.jpg', import.meta.url).href
const leader3 = new URL('../assets/childern/leader3.png', import.meta.url).href

const currentSlide = ref(0)

const slides = [
  { img1: img30, img2: img30 },
  { img1: img19, img2: img19 },
  { img1: img23, img2: img23 },
  { img1: img22, img2: img22 }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

let timer
onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})
onUnmounted(() => clearInterval(timer))

const leaders = [
  { name: 'Wonwin Doyen', role: 'Ministry Head', image: leader1 },
  { name: 'Mrs. Princess Ansah', role: 'Assistant', image: leader2 },
  { name: 'Princess', role: 'Teacher', image: leader3 }
]

const newsItems = [
  { date: '', title: '', image: img12 },
  { date: '', title: '', image: img27 },
  { date: '', title: '', image: img28 },
  { date: '', title: '', image: img30 }
]
const toggleCardActive = (e) => {
  e.currentTarget.classList.toggle('active')
}
</script>

<style scoped>
h1 {
  font-family: 'Arial Black', sans-serif;
}
#ChildernMinistry {
  scroll-margin-top: 5rem;
}
</style>
