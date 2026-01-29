<template>
  <div id="ChildernMinistry" class="min-h-screen bg-[#d6d7d2] font-sans">
    <NavBar />

    <main class="pt-32">
      <!-- HERO -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
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

      <!-- VISION & MISSION -->
      <section class="border-y border-gray-300 py-12 sm:py-16 md:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          <div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#333]">Our Vision</h2>
            <div class="h-1 w-12 bg-red-600 my-4 sm:my-6"></div>
            <p class="italic text-[#444] text-base sm:text-lg">
              "To become a global Pentecostal church that is culturally relevant."
            </p>
          </div>

          <div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#333]">Our Mission</h2>
            <div class="h-1 w-12 bg-red-600 my-4 sm:my-6"></div>
            <p class="italic text-[#444] text-base sm:text-lg">
              "To establish responsible and self-sustaining churches."
            </p>
          </div>
        </div>
      </section>

      <!-- LEADERSHIP (REDUCED SIZE) -->
      <section class="bg-[#e1e2dd] py-20 border-y border-gray-300">
        <div class="max-w-7xl mx-auto px-6">
          <h2 class="text-3xl font-black uppercase text-[#333] mb-12">
            Children Ministry Leadership
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(leader, index) in leaders"
              :key="index"
              class="bg-white shadow-md hover:shadow-xl transition-all duration-500 border-b-4 border-red-600"
            >
              <div class="aspect-[4/5] overflow-hidden">
                <img
                  :src="leader.image"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div class="p-4 text-center">
                <h3 class="text-sm font-extrabold uppercase text-[#333]">
                  {{ leader.name }}
                </h3>
                <p class="text-xs text-red-600 font-bold mt-1 uppercase tracking-wider">
                  {{ leader.role }}
                </p>
                <p class="text-xs text-[#555] mt-3 leading-relaxed">
                  {{ leader.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CHILDREN NEWS -->
      <section class="max-w-7xl mx-auto px-6 py-20">
        <div class="flex items-center mb-12 border-b-2 border-gray-400 pb-4">
          <h2 class="text-2xl font-black uppercase text-[#333]">
            | Children Ministry >>>
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <article v-for="(news, index) in newsItems" :key="index">
            <img :src="news.image" class="w-full aspect-[4/3] object-cover shadow-md" />
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

const currentSlide = ref(0)

const slides = [
  { img1: img30, img2: img30 },
  { img1: img19, img2: img19 },
  { img1: img23, img2: img23 },
  { img1: img22, img2: img22 }
]

let timer
onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})
onUnmounted(() => clearInterval(timer))

const leaders = [
  { name: 'Leader One', role: 'Ministry Head', bio: 'Oversees the ministry.', image: img11 },
  { name: 'Leader Two', role: 'Assistant', bio: 'Supports teaching.', image: img12 },
  { name: 'Leader Three', role: 'Supervisor', bio: 'Ensures doctrine.', image: img27 },
  { name: 'Leader Four', role: 'Activities', bio: 'Coordinates events.', image: img28 }
]

const newsItems = [
  { image: img12 },
  { image: img27 },
  { image: img28 },
  { image: img30 }
]
</script>

<style scoped>
h1 {
  font-family: 'Arial Black', sans-serif;
}
#ChildernMinistry {
  scroll-margin-top: 5rem;
}
</style>
