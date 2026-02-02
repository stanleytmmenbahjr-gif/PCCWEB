<template>
  <div id="PENTSOS" class="bg-white text-gray-900 font-sans">
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
        <div class="absolute inset-0 bg-gradient-to-b from-red-700 to-black opacity-90"></div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
            PENTSOS
          </h1>
          <div class="h-1 w-16 sm:w-20 md:w-24 bg-red-600 mt-3 sm:mt-4 mb-3 sm:mb-4"></div>
          <p class="max-w-3xl text-white/80 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Pentecost Social Services — fulfilling the social and charitable mission of the church.
          </p>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">About Us</h2>
        <div class="h-1 w-12 sm:w-16 bg-red-600 mb-4 sm:mb-6"></div>
        <p class="text-base sm:text-lg text-gray-800 leading-relaxed space-y-4">
          The Pentecost Social Services (PENTSOS) is a directorate of The Church of Pentecost established to fulfill the social and charitable mission of the church. Its core functions include the initiation, promotion, development and management of social services and projects of the church. It is a registered non‑governmental organization (NGO) and has existed for decades.</p>
      </section>

      <!-- MISSION & VISION -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-gray-800">
        <div>
          <h3 class="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-3 sm:mb-4">Our Mission</h3>
          <div class="h-1 w-12 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-base sm:text-lg leading-relaxed">
            PENTSOS is dedicated to witnessing the love of God to all persons via a holistic approach to enlarging human potential through social, economic, cultural and spiritual change in a sustainable manner.
          </p>
        </div>

        <div>
          <h3 class="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-3 sm:mb-4">Our Vision</h3>
          <div class="h-1 w-12 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-base sm:text-lg leading-relaxed">
            A church/society where the basic needs of vulnerable and marginalized persons are fully met.
          </p>
        </div>
      </section>

      <!-- CORE VALUES -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gray-50 rounded-lg shadow-lg text-gray-800">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4 text-center">Core Values</h3>
        <div class="h-1 w-12 sm:w-16 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center text-base sm:text-lg font-semibold">
          <li>Loving</li>
          <li>Equity</li>
          <li>Service</li>
          <li>Commitment</li>
          <li>Integrity</li>
        </ul>
      </section>

      <!-- MANDATE & FOCUS -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Mandate & Focus</h3>
        <div class="h-1 w-12 sm:w-16 bg-red-600 mb-4 sm:mb-6"></div>
        <p class="text-base sm:text-lg text-gray-800 leading-relaxed">
          PENTSOS seeks to improve the social and economic conditions of members of the church and individuals in vulnerable and marginalized communities, regardless of race, ethnicity or political affiliation, contributing to overall well‑being.
        </p>
      </section>

      <!-- PROGRAMME DOMAIN SUMMARY -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gray-50 rounded-lg shadow-lg text-gray-800">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Programme Domains</h3>
        <div class="h-1 w-12 sm:w-16 bg-red-600 mb-4 sm:mb-6"></div>
        <ul class="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg">
          <li>Development and Relief</li>
          <li>Pentecost Health Service Unit</li>
          <li>Pentecost Education Unit</li>
          <li>Pentecost Cooperative Mutual Support and Social Services Society (PENCO)</li>
        </ul>
      </section>

      <!-- LEADERSHIP -->
      <section class="max-w-7xl mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-black uppercase">Leadership</h2>
          <div class="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div v-for="(leader, idx) in leaders" :key="idx" class="group relative">
            <div class="relative">
              <img :src="leader.image" class="w-full h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <h3 class="mt-4 text-lg font-black uppercase">{{ leader.name }}</h3>
            <p class="text-red-600 uppercase tracking-wide">{{ leader.role }}</p>
            <p class="mt-2 text-gray-800 text-sm leading-relaxed">{{ leader.bio }}</p>
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

const heroImg = new URL('../assets/pentsos/hero.jpg', import.meta.url).href

const leaders = [
  {
    name: 'Ms. Lydia Amoslyn Matthews ',
    role: 'Directress',
    bio: 'Ms. Lydia Amosline Mathews is a development expert with extensive experience in social development, Education, and mentorship work.',
    image: new URL('../assets/pentsos/leader-1.jpg', import.meta.url).href
  },
  {
    name: 'Madam Dorylyn London',
    role: 'District Directress',
    bio: 'Madam Dorylyn London coordinates relief and educational programs for vulnerable communities.',
    image: new URL('../assets/pentsos/leader2.jpg', import.meta.url).href
  },
  {
    name: 'Bro. Eljah S. Tingban',
    role: 'Assistant',
    bio: 'Bro. Eljah S. Tingban oversees over program coodination and development initiatives, ensuring programs meet community needs.',
    image: new URL('../assets/pentsos/leader-2.jpg', import.meta.url).href
  },
  {
    name: 'Bro. Aaron Zelee Dunnar',
    role: 'Secretary',
    bio: 'Bro. Aaron Zelee Dunnar manages administrative and operational activities of PENTSOS, ensuring smooth execution of all projects.',
    image: new URL('../assets/youth/learder4.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
#PENTSOS {
  scroll-margin-top: 5rem;
}
</style>
