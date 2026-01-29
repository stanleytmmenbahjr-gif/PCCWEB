<template>
  <div id="NationalAreaHeads" class="bg-white text-gray-900 font-sans">
    <!-- Navbar -->
    <NavBar />

    <main class="pt-32 pb-24">

      <!-- PAGE TITLE -->
      <section class="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 class="text-4xl md:text-5xl font-black uppercase">
          National & Area Leadership
        </h1>
        <div class="h-1 w-24 bg-red-600 mx-auto mt-4"></div>
        <p class="max-w-3xl mx-auto mt-6 text-lg text-gray-700 leading-relaxed">
          Providing spiritual oversight, vision, and leadership for the Church of Pentecost in Liberia,
          from the national level to the Monrovia Area.
        </p>
      </section>

      <!-- NATIONAL HEAD & WIFE -->
      <section class="max-w-6xl mx-auto px-6 mb-16">
        <div class="bg-white border rounded-xl shadow-md">
          <div class="relative bg-gray-100 flex items-center justify-center min-h-[14rem] md:min-h-[20rem]">
            <img
              :src="nationalHead.image"
              :alt="nationalHead.name"
              loading="lazy"
              class="max-w-full max-h-full object-contain object-center md:object-cover md:w-full md:h-full"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
          <div class="p-8 text-center">
            <h3 class="text-2xl font-black uppercase text-gray-900">
              {{ nationalHead.name }}
            </h3>
            <p class="text-red-600 font-semibold uppercase tracking-wide text-sm mt-2">
              {{ nationalHead.role }}
            </p>
            <p class="mt-6 text-gray-700 text-base leading-relaxed">
              {{ nationalHead.bio }}
            </p>
            <p class="mt-4 text-gray-700 text-base leading-relaxed">
              Apostle Aaron Trokon and Mama Florence Kutatie Nimely Bueh provide visionary leadership for the Church
              of Pentecost Liberia. Together, they oversee national programs, mentor district leaders, and ensure that
              all church ministries reflect biblical principles, spiritual growth, and community impact. They
              exemplify Christ-centered leadership, fostering excellence, accountability, and unity across the nation.
            </p>
          </div>
        </div>
      </section>

      <!-- AREA HEAD -->
      <section class="max-w-3xl mx-auto px-6">
        <div class="bg-white border rounded-xl shadow-md">
          <div class="relative bg-gray-100 flex items-center justify-center min-h-[12rem] md:min-h-[16rem]">
            <img
              :src="areaHead.image"
              :alt="areaHead.name"
              loading="lazy"
              class="max-w-full max-h-full object-contain object-center md:object-cover md:w-full md:h-full"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-xl font-black uppercase text-gray-900">
              {{ areaHead.name }}
            </h3>
            <p class="text-red-600 font-semibold uppercase tracking-wide text-sm mt-1">
              {{ areaHead.role }}
            </p>
            <p class="mt-4 text-gray-700 text-sm leading-relaxed">
              {{ areaHead.bio }}
            </p>
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

// National Head & Wife
const nationalHead = {
  name: 'Apostle Aaron Trokon & Mama Florence Kutatie Nimely Bueh',
  role: 'National Head – Church of Pentecost Liberia',
  bio: 'Provides overall spiritual oversight and leadership for the Church of Pentecost in Liberia.',
  image: new URL('../assets/Media/National-Head.png', import.meta.url).href
}

// Area Head
const areaHead = {
  name: 'Pst. Isaac P. Dioh',
  role: 'Monrovia Area Head',
  bio: 'Leads and supervises all church activities, growth, and ministry development in the Monrovia Area.',
  image: new URL('../assets/Media/Area-Head.jpg', import.meta.url).href
}
</script>
<style scoped>
#NationalAreaHeads {
  scroll-margin-top: 5rem;
}
</style>
