<template>
  <div id="WomensMinistry" class="bg-white text-gray-900 font-sans">
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
        <img :src="heroImg" class="absolute inset-0 w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
            Women's Ministry
          </h1>
          <div class="h-1 w-16 sm:w-20 md:w-24 bg-red-600 mt-3 sm:mt-4 mb-3 sm:mb-4"></div>
          <p class="max-w-2xl text-white/80 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Empowering women for service, leadership, and impact in church and society.
          </p>
        </div>
      </section>

      <!-- MISSION & VISION -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-gray-800">
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Our Vision</h2>
          <div class="h-1 w-12 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-base sm:text-lg leading-relaxed">
            To raise Spirit-filled women that are culturally relevant in vibrant evangelism, discipleship and holistic ministry.
          </p>
        </div>
        
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Our Mission</h2>
          <div class="h-1 w-12 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-base sm:text-lg leading-relaxed">
            We exist to establish responsible and self-sustaining churches filled with committed, Spirit-filled women of character, who will impact their communities.
          </p>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="max-w-6xl mx-auto px-6 pb-24 text-gray-800">
        <h3 class="text-2xl font-bold uppercase mb-4">About the Women’s Ministry</h3>
        <p class="text-lg leading-relaxed space-y-4">
          Besides a core function of praying for the Church, the Women’s Ministry, which embraces all the womenfolk, is responsible for home management training to the women. It meets on Tuesdays.
          <br/>
          The Women’s Ministry organises retreats, seminars, workshops, lectures and symposia on marriage enrichment, wives' responsibilities at home, child welfare, education, business management and techniques. It also carries out evangelism, and counselling  in the church and in society.
          <br/>
       
        </p>
      </section>

      <!-- WOMEN'S MINISTRY NEWS -->
      <!-- <section class="max-w-6xl mx-auto px-6 py-20">
        <div class="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase">Women's Ministry News</h2>
          <div class="h-1 w-16 sm:w-20 bg-red-600 mt-3 sm:mt-4 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <article
            v-for="(news, i) in newsItems"
            :key="i"
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img :src="news.image" class="w-full h-40 sm:h-48 object-cover"/>
            <div class="p-4 sm:p-6">
              <span class="text-xs font-semibold text-gray-500">{{ news.date }}</span>
              <h3 class="mt-2 font-bold text-base sm:text-lg text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
                {{ news.title }}
              </h3>
            </div>
          </article>
        </div>
      </section> -->

      <!-- LEADERS -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 rounded-lg shadow-lg">
        <div class="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase">Meet Our Leaders</h2>
          <div class="h-1 w-16 sm:w-20 bg-red-600 mt-3 sm:mt-4 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 text-gray-800">
          <div
            v-for="(leader, idx) in leaders"
            :key="idx"
            class="flex flex-col md:flex-row gap-4 sm:gap-6"
          >
            <img
              :src="leader.image"
              class="w-full md:w-40 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div>
              <h3 class="text-lg sm:text-xl font-bold uppercase">{{ leader.name }}</h3>
              <p class="text-xs sm:text-sm text-red-600 uppercase tracking-wide">{{ leader.role }}</p>
              <p class="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">{{ leader.bio }}</p>
            </div>
          </div>
        </div>
      </section>

    </main>

    <FloatingChat />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import FloatingChat from './FloatingChat.vue'

// Hero image
const heroImg = new URL('../assets/women/hero.jpg', import.meta.url).href


// Leadership data from the real page
const leaders = [
  {
    name: 'Deaconess Mia Sackor',
    role: 'Women Leaders',
    image: new URL('../assets/leader/leader-7.jpg', import.meta.url).href
  },
  {
    name: 'Madam Rita George',
    role: 'Assistant Women Leaders', 
    image: new URL('../assets/leader/rita.jpg', import.meta.url).href
  },
  {
    name: 'Deconess Victoria ',
    role: 'Secretary', 
    image: new URL('../assets/women/leader2.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
#WomensMinistry {
  scroll-margin-top: 5rem;
}
</style>
