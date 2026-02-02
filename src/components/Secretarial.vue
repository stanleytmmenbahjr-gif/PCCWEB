<template>
  <div id="SecretarialMinistry" class="bg-white text-gray-900 font-sans">
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative h-[450px] md:h-[600px] bg-gray-600">
        <img :src="heroImg" class="absolute inset-0 w-full h-full object-cover opacity-60"/>
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>
        <div class="relative z-10 text-center px-6 md:px-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2">
          <h1 class="text-5xl md:text-6xl font-black uppercase text-white">
            Secretariat Ministry
          </h1>
          <div class="h-1 w-24 bg-red-600 mx-auto mt-4 mb-4"></div>
          <p class="text-lg text-gray-200 leading-relaxed">
            Organizing, Coordinating, and Serving the Church Effectively
          </p>
        </div>
      </section>

      <!-- ABOUT / VISION & MISSION -->
      <section class="max-w-6xl mx-auto px-6 py-16 text-gray-800 space-y-10">

        <div>
          <h2 class="text-3xl font-black uppercase mb-3">About the Ministry</h2>
          <p class="text-lg leading-relaxed">
            The Secretariat Ministry ensures smooth administration, organization, and communication across all church departments. 
            Our team supports the Pastorate, ministries, and the congregation by coordinating schedules, events, and documentation.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-2xl font-bold uppercase mb-3">Vision</h3>
            <p class="text-lg leading-relaxed">
              To provide efficient and effective secretarial support that strengthens the church's operations and ministries.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold uppercase mb-3">Mission</h3>
            <p class="text-lg leading-relaxed">
              To coordinate, document, and communicate with excellence, ensuring smooth administration and support for all church programs.
            </p>
          </div>
        </div>

      </section>

      <!-- OBJECTIVES / CORE ROLES -->
      <section class="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg shadow-md text-gray-800">
        <h3 class="text-2xl font-black uppercase mb-6 text-center">Core Roles</h3>
        <ul class="list-disc list-inside space-y-3 text-lg">
          <li>Maintain records, correspondence, and documentation.</li>
          <li>Coordinate meetings, events, and church programs.</li>
          <li>Ensure smooth communication between church leadership and members.</li>
          <li>Support all ministries with organizational and administrative tasks.</li>
        </ul>
      </section>

      <!-- LEADERSHIP CARDS -->
      <section class="max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-lg shadow-lg">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-black uppercase">Secretariat Team</h2>
          <div class="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div v-for="(leader, idx) in leaders" :key="idx" class="group">
            <div class="relative">
              <img :src="leader.image"
                   class="w-full h-64 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <h3 class="mt-4 text-lg font-bold uppercase">{{ leader.name }}</h3>
            <p class="text-red-600 uppercase tracking-wide">{{ leader.role }}</p>
            <p class="mt-2 text-gray-700 text-sm leading-relaxed">{{ leader.bio }}</p>
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
const heroImg = new URL('../assets/leader/leader-3.jpg', import.meta.url).href

// Secretarial leaders (4)
const leaders = [
  {
    name: 'Elder. Gontorwon Karbeah',
    role: 'District Secretary',
    bio: 'Leads the secretarial team and oversees all administrative operations.',
    image: new URL('../assets/leader/leader-3.jpg', import.meta.url).href
  },
   {
    name: 'Decon. Edwin S. Liclon',
    role: 'District Finacial Secretary',
    bio: 'Oversees all finacial operations of the church.',
    image: new URL('../assets/leader/leader-4..jpg', import.meta.url).href
  },
  
  {
    name: 'Elijah S. Tingban',
    role: 'Member',
    image: new URL('../assets/pentsos/leader-2.jpg', import.meta.url).href
  },
  {
    name: 'Aaron Zelee Dunnar',
    role: 'Member',
    image: new URL('../assets/youth/learder4.jpg', import.meta.url).href 
  }
]
</script>

<style scoped>
#SecretarialMinistry {
  scroll-margin-top: 5rem;
}
</style>
