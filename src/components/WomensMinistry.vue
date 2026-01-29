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
            To become a global Pentecostal church that is culturally relevant in vibrant evangelism, church planting, discipleship and holistic ministry.
          </p>
        </div>
        
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Our Mission</h2>
          <div class="h-1 w-12 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-base sm:text-lg leading-relaxed">
            We exist to establish responsible and self-sustaining churches filled with committed, Spirit-filled Christians of character, who will impact their communities.
          </p>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="max-w-6xl mx-auto px-6 pb-24 text-gray-800">
        <h3 class="text-2xl font-bold uppercase mb-4">About the Women’s Ministry</h3>
        <p class="text-lg leading-relaxed space-y-4">
          Besides a core function of praying for the Church, the Women’s Ministry, which embraces all the womenfolk, is responsible for giving employable and vocational skills, and training in home management to the women. It meets on Tuesdays. :contentReference[oaicite:4]{index=4}
          <br/>
          The Women’s Ministry organises retreats, seminars, workshops, lectures and symposia on marriage enrichment, wives' responsibilities at home, child welfare, education, business management and techniques. It also carries out evangelism, counselling and sponsorship activities to help the needy in the church and in society. :contentReference[oaicite:5]{index=5}
          <br/>
          Additionally, the ministry ministers to single mothers, orphans, widows, lady professionals, the aged, business women, and HIV/AIDS victims, and undertakes hospital and media evangelism, contributing to government poverty alleviation programmes. :contentReference[oaicite:6]{index=6}
        </p>
      </section>

      <!-- WOMEN'S MINISTRY NEWS -->
      <section class="max-w-6xl mx-auto px-6 py-20">
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
      </section>

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

// Example news items — replace with your own later
const newsItems = [
  {
    date: 'December 29, 2025',
    title: 'Women Bring Christmas Joy To New Life Orphanage',
    image: new URL('../assets/women/news1.jpg', import.meta.url).href
  },
  {
    date: 'December 29, 2025',
    title: 'Elmina Area Women’s Ministry Donates To Hospital',
    image: new URL('../assets/women/news2.jpg', import.meta.url).href
  },
  {
    date: 'October 28, 2025',
    title: 'Women’s Ministry Donates To Pentecost Vocational School',
    image: new URL('../assets/women/news3.jpg', import.meta.url).href
  }
]

// Leadership data from the real page
const leaders = [
  {
    name: 'Deaconess Philomina Mireku',
    role: 'Director',
    bio: 'Deaconess Philomina Mireku is the Nurse Manager in-charge of the Eastern Regional Hospital in Koforidua with over 33 years of dedicated service and pastoral ministry. :contentReference[oaicite:7]{index=7}',
    image: new URL('../assets/women/leader1.jpg', import.meta.url).href
  },
  {
    name: 'Deaconess Vivian Amfo',
    role: 'Deputy Director',
    bio: 'Deaconess Vivian Amfo holds a Bachelor’s Degree in Psychology and an MBA in Human Resources. She has served in leadership roles and ministry development. :contentReference[oaicite:8]{index=8}',
    image: new URL('../assets/women/leader2.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
#WomensMinistry {
  scroll-margin-top: 5rem;
}
</style>
