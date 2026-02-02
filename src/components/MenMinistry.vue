<template>
  <div id="MensMinistry" class="bg-white text-gray-900 font-sans">
    <NavBar />

    <main class="pt-20 sm:pt-24 md:pt-32">

      <!-- HERO -->
      <section class="relative overflow-hidden h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
        <img :src="heroImg" class="absolute inset-0 w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white">
            Men's Ministry
          </h1>
          <div class="h-1 w-16 sm:w-24 bg-red-600 mt-2 sm:mt-4 mb-2 sm:mb-4"></div>
          <p class="max-w-2xl text-white/80 text-xs sm:text-base md:text-lg leading-relaxed px-2">
            Equipping men for leadership, service, and spiritual maturity in church and society.
          </p>
        </div>
      </section>

      <!-- MISSION & VISION -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 text-gray-800">
        <div>
          <h2 class="text-2xl sm:text-3xl font-black uppercase mb-2 sm:mb-4">Our Vision</h2>
          <div class="h-1 w-12 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            To raise godly men who lead with integrity, serve with humility, and impact their families, communities, and nation.
          </p>
        </div>
        
        <div>
          <h2 class="text-2xl sm:text-3xl font-black uppercase mb-2 sm:mb-4">Our Mission</h2>
          <div class="h-1 w-12 bg-red-600 mb-4 sm:mb-6"></div>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            To disciple men in spiritual growth, leadership, character, and responsibility, preparing them to be pillars of faith and service. 
          </p>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20 md:pb-24 text-gray-800">
        <h3 class="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4">About the Men's Ministry</h3>
        <p class="text-xs sm:text-base md:text-lg leading-relaxed space-y-2 sm:space-y-4">
          The Men’s Ministry exists to mentor, disciple, and train men for effective service in church and society. It emphasizes spiritual growth, leadership, and accountability.
          <br/>
          The ministry organizes workshops, retreats, and seminars focusing on leadership, family life, community service, and personal development.
          <br/>
          Members are encouraged to take active roles in evangelism, mentorship, community projects, and other outreach programs.
        </p>
      </section>

      <!-- MEN'S MINISTRY NEWS
      <section class="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        <div class="text-center mb-6 sm:mb-10">
          <h2 class="text-2xl sm:text-3xl font-black uppercase">Men's Ministry News</h2>
          <div class="h-1 w-16 sm:w-20 bg-red-600 mt-3 sm:mt-4 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
          <article
            v-for="(news, i) in newsItems"
            :key="i"
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img :src="news.image" class="w-full h-32 sm:h-40 md:h-48 object-cover"/>
            <div class="p-3 sm:p-4 md:p-6">
              <span class="text-[10px] sm:text-xs font-semibold text-gray-500">{{ news.date }}</span>
              <h3 class="mt-1 sm:mt-2 font-bold text-sm sm:text-base md:text-lg text-gray-900 hover:text-red-600 transition-colors">
                {{ news.title }}
              </h3>
            </div>
            
          </article>
        </div>
      </section> -->

      <!-- LEADERS -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 bg-gray-50 rounded-lg shadow-lg">
        <div class="text-center mb-6 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl font-black uppercase">Meet Our Leaders</h2>
          <div class="h-1 w-16 sm:w-20 bg-red-600 mt-3 sm:mt-4 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 text-gray-800">
          <div
            v-for="(leader, idx) in leaders"
            :key="idx"
            class="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6"
          >
            <img
              :src="leader.image"
              class="w-full sm:w-32 md:w-40 h-32 sm:h-32 md:h-40 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div>
              <h3 class="text-lg sm:text-xl font-bold uppercase">{{ leader.name }}</h3>
              <p class="text-xs sm:text-sm text-red-600 uppercase tracking-wide">{{ leader.role }}</p>
              <p class="mt-2 sm:mt-4 text-xs sm:text-base leading-relaxed">{{ leader.bio }}</p>
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
const heroImg = new URL('../assets/leader/men-hero.jpg', import.meta.url).href

// Example news items


// Leadership data
const leaders = [
  {
    name: 'Elder Dave G. Borglers',
    role: 'Mens Leader',
    image: new URL('../assets/leader/leader-5.jpg', import.meta.url).href
  },
  {
    name: 'Mr. Fred Fallah',
    role: 'Assisant ',
    image: new URL('../assets/men/leader2.jpg', import.meta.url).href
  },

  {
    name: 'Mr. Saye ',
    role: 'Secretary',
    image: new URL('../assets/men/leader2.jpg', import.meta.url).href
  },

  
]
</script>

<style scoped>
#MensMinistry {
  scroll-margin-top: 5rem;
}
</style>
