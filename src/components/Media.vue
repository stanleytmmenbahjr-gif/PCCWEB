<template>
  <div id="PentTV" class="bg-white text-gray-900 font-sans">
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative h-[350px] sm:h-[400px] md:h-[500px] bg-black">
        <img :src="heroImg" class="absolute inset-0 w-full h-full object-cover opacity-70"/>
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        <div class="relative z-10 text-center px-4 sm:px-6 md:px-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
            PAYNESVILLE CITY CHURCH MEDIA
          </h1>
          <div class="h-1 w-20 sm:w-24 bg-red-600 mx-auto mt-3 sm:mt-4 mb-3 sm:mb-4"></div>
          <p class="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-2 sm:px-0">
            A Christian digital television broadcaster committed to informing, educating, inspiring, and impacting lives with gospel-centered programming.
          </p>
        </div>
      </section>

      <!-- ABOUT / MISSION & VISION -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-gray-800 space-y-8 sm:space-y-10">

        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-2 sm:mb-3">About PCC MEDIA </h2>
          <p class="text-base sm:text-lg leading-relaxed">
            PCC MEDIA is a digital media team with the core purpose of spreading the gospel, discipleship, and holistic teaching through faith-filled content.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold uppercase mb-2 sm:mb-3">Vision</h3>
            <p class="text-base sm:text-lg leading-relaxed">
              To drive a new era of evangelism, discipleship, and holistic ministry via digital Media.
            </p>
          </div>

          <div>
            <h3 class="text-xl sm:text-2xl font-bold uppercase mb-2 sm:mb-3">Mission</h3>
            <p class="text-base sm:text-lg leading-relaxed">
              To inform, educate, entertain, inspire, and impact all through television and digital media broadcasts.
            </p>
          </div>
        </div>

      </section>

      <!-- OBJECTIVES -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gray-50 rounded-lg shadow-md text-gray-800">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-6 sm:mb-8 text-center">Objectives</h3>
        <ul class="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg pl-2 sm:pl-0">
          <li>To broadcast Christian content as a means of discipleship and evangelism.</li>
          <li>To saturate airwaves with quality programming that responds to the challenges of the youth.</li>
          <li>To inspire, educate, and transform communities through multimedia.</li>
        </ul>
      </section>

      <!-- MEDIA SHOWCARDS WITH HOVER PLAY -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-center mb-8 sm:mb-10 md:mb-12">Featured Programs & Shows</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div
            v-for="(media, idx) in mediaItems"
            :key="idx"
            class="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          >
            <img :src="media.image" class="w-full h-48 sm:h-56 md:h-64 object-cover"/>

            <!-- Overlay with Play Button -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
              <div class="text-white text-4xl md:text-5xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                
              </div>
            </div>

            <div class="p-4 sm:p-6 bg-white">
              <h3 class="text-base sm:text-lg font-bold text-gray-900">{{ media.title }}</h3>
              <p class="mt-2 text-xs sm:text-sm text-gray-600">{{ media.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- LEADERSHIP CARDS -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gray-50 rounded-lg shadow-lg">
        <div class="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase">PCC MEDIA LEADERSHIP</h2>
          <div class="h-1 w-16 sm:w-20 bg-red-600 mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center">
          <div v-for="(leader, idx) in leaders" :key="idx" class="group">
            <div class="relative">
              <img :src="leader.image"
                   class="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <h3 class="mt-3 sm:mt-4 text-base sm:text-lg font-bold uppercase">{{ leader.name }}</h3>
            <p class="text-red-600 uppercase tracking-wide text-xs sm:text-sm mt-1">{{ leader.role }}</p>
            <p class="mt-2 text-gray-700 text-xs sm:text-sm leading-relaxed px-1">{{ leader.bio }}</p>
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

// Hero background
const heroImg = new URL('../assets/Media/media-hero.jpg', import.meta.url).href

// Example featured media items
const mediaItems = [
  {
    title: 'Sermon showcase.',
    description: 'Christian-centered discussions and messages.',
    image: new URL('../assets/penttv/media1.jpg', import.meta.url).href
  },
  {
    title: 'Upcoming program',
    description: 'Daily updates and highlights from around the church.',
    image: new URL('../assets/penttv/media2.jpg', import.meta.url).href
  },
  {
    title: 'Youth Story ',
    description: 'Stories and segments from our youth viewers.',
    image: new URL('../assets/penttv/media3.jpg', import.meta.url).href
  }
]

// Leadership cards (4)
const leaders = [
  {
    name: 'Stanley T M Menbah Jr',
    role: 'Director',
    bio: 'Oversees and lead the team.',
    image: new URL('../assets/Media/leader-dir.jpg', import.meta.url).href
  },
   {
    name: 'Bro. Billison Saye Sunwabe Jr.',
    role: 'Assistant Director and Head of Editing',
    bio: 'Leads creativess and impactful media content.',
    image: new URL('../assets/Media/leader-ass.jpg', import.meta.url).href
  },
 
  {
    name: 'Bro. James Lee',
    role: 'Broadcast Director',
    bio: 'Manages day-to-day television and digital productions.',
    image: new URL('../assets/penttv/leader3.jpg', import.meta.url).href
  },
   {
    name: 'Bro. Myers Justice Wamah',
    role: 'Head of Content',
    bio: 'Leads development of creative and impactful media content.',
    image: new URL('../assets/Media/leader-con.jpg', import.meta.url).href
  },
  {
    name: 'Sis. LEES K DORLIAE',
    role: 'Secreatry',
    bio: 'keep Records, mines and dialy team schedule.',
    image: new URL('../assets/Media/leader-sec.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
#PentTV {
  scroll-margin-top: 5rem;
}
</style>
