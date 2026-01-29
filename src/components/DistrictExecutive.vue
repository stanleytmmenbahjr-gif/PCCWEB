<template>
  <div id="DistrictExecutive" class="bg-white text-gray-900 font-sans">
    <!-- Navbar -->
    <NavBar />

    <main class="pt-32">

      <!-- HERO -->
      <section class="relative h-[450px] md:h-[600px] bg-gray-900">
        <img
          :src="heroImg"
          class="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        <div class="relative z-10 text-center px-6 md:px-0 max-w-4xl mx-auto top-1/2 -translate-y-1/2">
          <h1 class="text-5xl md:text-6xl font-black uppercase text-white">
            District Executive
          </h1>
          <div class="h-1 w-24 bg-red-600 mx-auto my-4"></div>
          <p class="text-lg text-gray-200 leading-relaxed">
            The District Executive provides strategic and operational leadership for the district, overseeing administrative, ministry, and program activities.
          </p>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="max-w-6xl mx-auto px-6 py-16 text-gray-800 space-y-6">
        <h2 class="text-3xl font-black uppercase mb-4">About the District Executive</h2>
        <p class="text-lg leading-relaxed">
          The District Executive team manages the day-to-day affairs of the district, implementing policies approved by the District Presbytery. They ensure smooth operations, effective communication, and leadership accountability within all ministries and committees.
        </p>
        <p class="text-lg leading-relaxed">
          This team works closely with the Presbytery, pastors, ministry heads, and community leaders to promote growth, outreach, and spiritual development across the district.
        </p>
      </section>

      <!-- FUNCTIONS -->
      <section class="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-lg shadow-md">
        <h3 class="text-2xl font-black uppercase text-center mb-6">Functions & Responsibilities</h3>
        <ul class="list-disc list-inside space-y-3 text-lg text-gray-800">
          <li>Execute district policies and directives from the Presbytery.</li>
          <li>Coordinate administrative, financial, and program operations.</li>
          <li>Support ministry leaders and pastors in achieving goals.</li>
          <li>Monitor progress, report outcomes, and ensure accountability.</li>
        </ul>
      </section>

      <!-- EXECUTIVE MEMBERS -->
      <section class="max-w-7xl mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-black uppercase">Executive Members</h2>
          <div class="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div
            v-for="(member, idx) in members"
            :key="idx"
            class="group bg-white border rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <div class="relative h-64 w-full bg-gray-100">
              <img
                :src="member.image"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="p-6">
            <h3 class="text-xl font-bold uppercase text-gray-900">
              {{ member.name }}
            </h3>
            <p class="text-red-600 uppercase tracking-wide mb-2">
              {{ member.role }}
            </p>
            <p class="text-gray-800 text-sm leading-relaxed">{{ member.bio }}</p>
            </div>
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

// Hero background image
const heroImg = new URL('../assets/executive/hero.jpg', import.meta.url).href

// Executive members (replace with actual leaders)
const members = [
  {
    name: 'Ovr. NEHWON SAYE SUAH',
    role: 'District Pastor',
    bio: 'Leads the district executive team and oversees all administrative operations.',
    image: new URL('../assets/leader/leader-1.jpg', import.meta.url).href
  },
   {
    name: 'Elder Daniel S. Toe',
    role: 'Presiding Elder & Evangelism Director',
    bio: 'Leads evangelism, outreach, and community engagement initiatives.',
    image: new URL('../assets/leader/leader-2.jpg', import.meta.url).href
  },
  {
    name: 'Elder Gontorwon Karbeah',
    role: 'Secretary',
    bio: 'Responsible for records, minutes, and communication across the district.',
    image: new URL('../assets/leader/leader-3.jpg', import.meta.url).href
  },
  {
    name: 'Deacon Edwin Lincoln',
    role: 'Financial Secretary ',
    bio: 'Manages financial operations and reporting for the district.',
    image: new URL('../assets/leader/leader-4.jpg', import.meta.url).href
  },
 
  {
    name: 'Elder Dave ',
    role: 'Men Leader',
    bio: 'Oversees district programs, events, and ministry activities.',
    image: new URL('../assets/executive/member4.jpg', import.meta.url).href
  },
   {
    name: 'Elder Daniel Nato ',
    role: 'Estate comettie chair',
    bio: 'Oversees district programs, events, and ministry activities.',
    image: new URL('../assets/executive/member4.jpg', import.meta.url).href
  },
  
  {
    name: 'Deaconess Mai Sackor',
    role: 'Women’s Ministry Rep',
    bio: 'Represents the women’s ministry leadership in executive decisions.',
    image: new URL('../assets/executive/member6.jpg', import.meta.url).href
  },
   {
    name: 'Deaconess Madie Sackie',
    role: 'Members',
    bio: 'Represents the women’s ministry leadership in executive decisions.',
    image: new URL('../assets/executive/member6.jpg', import.meta.url).href
  },
   {
    name: 'Deaconess Victoria',
    role: 'Members',
    bio: 'Represents the women’s ministry leadership in executive decisions.',
    image: new URL('../assets/executive/member6.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
#DistrictExecutive {
  scroll-margin-top: 5rem;
}
</style>
