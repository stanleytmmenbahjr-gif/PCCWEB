<template>
  <section
  id="what-to-expect"
  class="py-12 sm:py-20 md:py-24 font-sans
         bg-gradient-to-br from-[#001a3d] via-[#002D62] to-[#00152e]"
>

    <div class="max-w-7xl mx-auto px-4 sm:px-6">

      <div class="mb-8 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-extrabold text-white text-center">What To Expect</h2>
        <p class="mt-4 sm:mt-6 text-center max-w-3xl mx-auto text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Whether it’s your first time or your hundredth, you’ll find PCC is more than just a service — it’s an experience. Here’s
          what you can expect when you join us:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">

        <!-- Left: Image -->
        <div>
          <img :src="expectImg" alt="What to expect" class="w-full h-48 sm:h-64 md:h-96 object-cover rounded-3xl shadow-lg" />
        </div>

        <!-- Right: Pill Cards -->
        <div class="flex flex-col justify-start gap-3 sm:gap-4 md:gap-6">
          <div class="bg-white text-black rounded-full px-4 sm:px-6 py-2 sm:py-4 shadow-lg flex items-center gap-3 sm:gap-6">
            <div class="w-10 sm:w-12 h-10 sm:h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h1.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <div class="text-lg sm:text-2xl font-bold">Loving People</div>
          </div>

          <div class="bg-white text-black rounded-full px-4 sm:px-6 py-2 sm:py-4 shadow-lg flex items-center gap-3 sm:gap-6">
            <div class="w-10 sm:w-12 h-10 sm:h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V3h-2z"/></svg>
            </div>
            <div class="text-lg sm:text-2xl font-bold">Uplifting Worship</div>
          </div>

          <div class="bg-white text-black rounded-full px-4 sm:px-6 py-2 sm:py-4 shadow-lg flex items-center gap-3 sm:gap-6">
            <div class="w-10 sm:w-12 h-10 sm:h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 4h-3v6h-2V6H8l4-4zM6 18v2h12v-2H6z"/></svg>
            </div>
            <div class="text-lg sm:text-2xl font-bold">A Powerful Word</div>
          </div>

          <p class="mt-4 sm:mt-6 text-xs sm:text-base text-gray-400 italic">Come as you are. Belong. Be transformed.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
const expectImg = new URL('../assets/Media/what to expect.jpg', import.meta.url).href

export default {
  name: "WhatToExpect",
  data() {
    return { expectImg }
  }
};
</script>
