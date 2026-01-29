<template>
  <div id="GalleryPage" class="bg-white text-gray-900 font-sans">
    <!-- Navbar -->
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px] bg-gray-900">
        <img :src="heroImg" class="absolute inset-0 w-full h-full object-cover opacity-60"/>
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        <div class="relative z-10 text-center px-4 sm:px-6 md:px-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white">
            {{ pageTitle }}
          </h1>
          <div class="h-1 w-20 sm:w-24 bg-red-600 mx-auto mt-3 sm:mt-4 mb-3 sm:mb-4"></div>
          <p class="text-xs sm:text-base md:text-lg text-gray-200 leading-relaxed">
            {{ pageSubtitle }}
          </p>
        </div>
      </section>

      <!-- LIGHTBOX GALLERY -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-24">
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <div v-for="(photo, index) in photos" :key="index" class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-40 sm:h-48 md:h-56">
            <img :src="photo" :alt="'Gallery image ' + (index + 1)" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
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

// Hero background
const heroImg = new URL('../assets/gallery/hero.jpg', import.meta.url).href

// Page details
const pageTitle = 'Gallery'
const pageSubtitle = 'Highlighting memorable moments from our church community.'

// Gallery photos
const photos = [
  new URL('../assets/childern/11.jpeg', import.meta.url).href,
  new URL('../assets/childern/12.jpeg', import.meta.url).href,
  new URL('../assets/childern/13.jpeg', import.meta.url).href,
  new URL('../assets/childern/14.jpeg', import.meta.url).href,
    new URL('../assets/youth/background6.JPG', import.meta.url).href,
  new URL('../assets/youth/background7.jpg', import.meta.url).href,
  new URL('../assets/youth/background8.JPG', import.meta.url).href,
  new URL('../assets/youth/background5.jpeg', import.meta.url).href,
  new URL('../assets/youth/CYC1.jpeg', import.meta.url).href,
  new URL('../assets/youth/Trip-to-Guinea.jpeg', import.meta.url).href,
  new URL('../assets/youth/background8.jpeg', import.meta.url).href,
  new URL('../assets/childern/19.jpeg', import.meta.url).href,
  new URL('../assets/childern/20.jpeg', import.meta.url).href,
  new URL('../assets/childern/21.jpeg', import.meta.url).href,
  new URL('../assets/childern/22.jpeg', import.meta.url).href,
  new URL('../assets/childern/23.jpeg', import.meta.url).href,
  new URL('../assets/childern/24.jpeg', import.meta.url).href,
  new URL('../assets/childern/25.jpeg', import.meta.url).href,
  new URL('../assets/childern/26.jpeg', import.meta.url).href,
    new URL('../assets/youth/backgroun1.JPG', import.meta.url).href,
  new URL('../assets/youth/background2.JPG', import.meta.url).href,
  new URL('../assets/youth/background3.JPG', import.meta.url).href,
  new URL('../assets/youth/background4.jpg', import.meta.url).href,
  new URL('../assets/youth/bacground5.JPG', import.meta.url).href,
    new URL('../assets/youth/background9.jpg', import.meta.url).href
]
</script>

<style scoped>
#GalleryPage {
  scroll-margin-top: 5rem;
}
</style>
