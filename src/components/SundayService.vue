<template>
  <section
  id="sunday-service"
  class="py-12 sm:py-20 md:py-24 font-sans
         bg-gradient-to-br from-[#001a3d] via-[#002D62] to-[#00152e]"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6">

      <!-- Header (UNCHANGED) -->
      <div class="text-center mb-8 sm:mb-16">
        <h4 class="text-[#E31E24] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
          Join Our Family
        </h4>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#fff] uppercase">
          Worship With Us
        </h2>
        <div class="w-20 h-1 bg-[#E31E24] mx-auto mt-4"></div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

        <!-- CARD 1 -->
        <div class="group relative h-64 sm:h-80 md:h-[520px] rounded-xl overflow-hidden shadow-xl">

          <!-- Image -->
          <img
            :src="sundayImg"
            alt="Sunday Service"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-[#002D62]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <!-- Content (YOUR TEXT) -->
          <div
            class="absolute inset-0 p-4 sm:p-8 md:p-10 flex flex-col justify-end
                   translate-y-10 group-hover:translate-y-0
                   opacity-0 group-hover:opacity-100
                   transition-all duration-500 text-white"
          >
            <div class="mb-4 sm:mb-6">
              <span class="inline-block bg-[#E31E24] text-[8px] sm:text-[10px] font-black px-2 sm:px-3 py-1 uppercase tracking-widest">
                Main Service
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-3 sm:mb-4">
              Sunday Service
            </h3>

            <p class="mb-6 sm:mb-8 leading-relaxed font-medium text-white/90 text-xs sm:text-sm md:text-base">
              Experience the power of Pentecost. Join us for a morning of vibrant worship,
              fervent prayer, and the unadulterated Word of God.
            </p>

            <div class="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div class="w-8 sm:w-10 h-8 sm:h-10 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke-width="2.5" stroke-linecap="round" />
                </svg>
              </div>
              <div>
                <p class="text-[8px] sm:text-[10px] uppercase font-bold text-white/60 leading-none">
                  Every Sunday
                </p>
                <p class="text-lg sm:text-xl font-black">
                  8:00 AM - 11:00 AM
                </p>
              </div>
            </div>

            <router-link
              to="/join"
              class="block text-center py-2 sm:py-4 bg-white text-[#002D62]
                     font-bold uppercase tracking-widest text-[9px] sm:text-[11px]
                     hover:bg-[#E31E24] hover:text-white transition-colors"
              aria-label="Visit Us Today — Join the Church"
            >
             Visit Us Today 
            </router-link>"
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="group relative h-64 sm:h-80 md:h-[520px] rounded-xl overflow-hidden shadow-xl">

          <img
            :src="sundayImg"
            alt="Weekly Service"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-[#002D62]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div
            class="absolute inset-0 p-4 sm:p-8 md:p-10 flex flex-col justify-end
                   translate-y-10 group-hover:translate-y-0
                   opacity-0 group-hover:opacity-100
                   transition-all duration-500 text-white"
          >
            <div class="mb-4 sm:mb-6">
              <span class="inline-block bg-[#002D62] text-[8px] sm:text-[10px] font-black px-2 sm:px-3 py-1 uppercase tracking-widest">
                Weekly Gatherings
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-3 sm:mb-4">
              Prayer & Teaching
            </h3>

            <p class="mb-6 sm:mb-8 leading-relaxed font-medium text-white/90 text-xs sm:text-sm md:text-base">
              Midweek spiritual empowerment to keep your fire burning. Engage in powerful
              intercession and deep-dive biblical studies with our church family.
            </p>

            <div class="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div class="w-8 sm:w-10 h-8 sm:h-10 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        stroke-width="2.5" stroke-linecap="round" />
                </svg>
              </div>
              <div>
                <p class="text-[8px] sm:text-[10px] uppercase font-bold text-white/60 leading-none">
                  Every Wednesday-Friday
                </p>
                <p class="text-lg sm:text-xl font-black">
                  6:00 PM Prompt
                </p>
              </div>
            </div>

            <router-link
              to="/join"
              class="block text-center py-2 sm:py-4 border-2 border-white
                     font-bold uppercase tracking-widest text-[9px] sm:text-[11px]
                     hover:bg-[#E31E24] hover:border-[#E31E24] transition-all"
              aria-label="Join Us — Join the Church"
            >
              Join Us 
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const sundayImg = new URL('../assets/Media/gallery1.jpg', import.meta.url).href
</script>
