<template>
  <div id="DistrictPresbytery" class="bg-white text-gray-900 font-sans">
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
            District Presbytery
          </h1>
          <div class="h-1 w-24 bg-red-600 mx-auto my-4"></div>
          <p class="text-lg text-gray-200 leading-relaxed">
            The highest coordinating and policy-making body at the district level, entrusted with spiritual governance and oversight of the area. :contentReference[oaicite:0]{index=0}
          </p>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="max-w-6xl mx-auto px-6 py-16 text-gray-800 space-y-6">
        <h2 class="text-3xl font-black uppercase mb-4">About the District Presbytery</h2>
        <p class="text-lg leading-relaxed">
          The District Presbytery coordinates, administers, and provides leadership over all churches in the district. It works closely with ministry leaders, pastors, deacons, and committees to implement church policies and programmes locally. :contentReference[oaicite:1]{index=1}
        </p>
        <p class="text-lg leading-relaxed">
          The Presbytery ensures that doctrine, worship, and community engagement are carried out with excellence, and that governance at the district level aligns with the vision and mission of the wider Church body.
        </p>
      </section>

      <!-- FUNCTIONS -->
      <section class="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-lg shadow-md">
        <h3 class="text-2xl font-black uppercase text-center mb-6">Functions & Responsibilities</h3>
        <ul class="list-disc list-inside space-y-3 text-lg text-gray-800">
          <li>Provide spiritual oversight and governance for all worship centres in the district.</li>
          <li>Coordinate ministry programmes and leadership development for pastors and ministry leaders.</li>
          <li>Monitor and implement church policies, directives, and governance decisions.</li>
          <li>Facilitate training, retreats, and capacity building for district stakeholders.</li>
        </ul>
      </section>

      <!-- PRESBYTERY MEMBERS -->
      <section class="max-w-7xl mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-black uppercase">Presbytery Members</h2>
          <div class="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div
            v-for="(member, idx) in members"
            :key="idx"
            class="group bg-white border rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div class="relative h-40 w-40 mx-auto mb-4">
              <img
                :src="member.image"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 class="text-xl font-bold uppercase text-gray-900">
              {{ member.name }}
            </h3>
            <p class="text-red-600 uppercase tracking-wide mb-2">
              {{ member.role }}
            </p>
            <p class="text-gray-800 text-sm leading-relaxed">{{ member.bio }}</p>
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

// Hero background (you can replace with your own district image)
const heroImg = new URL('../assets/presbytery/hero.jpg', import.meta.url).href

// District presbytery members
const members = [
  {
    name: 'Rev. John Doe',
    role: 'District Chairman',
    bio: 'Leads the district presbytery and provides spiritual direction.',
    image: new URL('../assets/presbytery/member1.jpg', import.meta.url).href
  },
  {
    name: 'Rev. Jane Smith',
    role: 'Secretary',
    bio: 'Coordinates meetings, records, and communication processes.',
    image: new URL('../assets/presbytery/member2.jpg', import.meta.url).href
  },
  {
    name: 'Elder Michael Brown',
    role: 'Treasurer',
    bio: 'Oversees financial reporting and district stewardship.',
    image: new URL('../assets/presbytery/member3.jpg', import.meta.url).href
  },
  {
    name: 'Pastor Mary Johnson',
    role: 'Ministry Coordinator',
    bio: 'Works with ministry heads on programme delivery and development.',
    image: new URL('../assets/presbytery/member4.jpg', import.meta.url).href
  },
  {
    name: 'Elder Alex Mensah',
    role: 'Worship Director',
    bio: 'Oversees worship planning and music direction for the district.',
    image: new URL('../assets/presbytery/member5.jpg', import.meta.url).href
  },
  {
    name: 'Deaconess Grace Osei',
    role: 'Women’s Ministry Rep.',
    bio: 'Represents women’s ministry leadership on the presbytery.',
    image: new URL('../assets/presbytery/member6.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
#DistrictPresbytery {
  scroll-margin-top: 5rem;
}
</style>
