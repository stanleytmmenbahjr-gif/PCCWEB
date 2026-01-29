<template>
  <section id="WelcomeHero" class="relative h-screen w-full overflow-hidden">

    <!-- Video Background -->
    <video
      class="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 ease-in-out hover:scale-110"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="bgVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Gradient Overlay (darker for stronger contrast) -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-3 sm:px-6 text-white">

      <!-- Small Intro -->
      <p class="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-400 font-semibold drop-shadow-md">
        Welcome to the
      </p>

      <!-- Main Heading (upgraded styling; text unchanged) -->
      <h1
        class="group mt-3 sm:mt-4 text-3xl xs:text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[8rem] font-extrabold leading-tight tracking-tight cursor-default transition-transform duration-500 hover:-translate-y-1 drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
      >
        <span
          class="block transition-all duration-500
                 group-hover:tracking-widest
                 group-hover:text-yellow-400
                 text-white"
        >
          PAYNESVILLE
        </span>
        <span
          class="relative inline-block mt-1 sm:mt-2 text-yellow-400
                 after:absolute after:left-1/2 after:-translate-x-1/2
                 after:-bottom-2 after:h-1 after:w-0
                 after:bg-yellow-400 after:rounded-full
                 after:transition-all after:duration-500
                 group-hover:after:w-3/4"
        >
           CITY CHURCH 
        </span>
      </h1>

      <!-- Subheading -->
      <p class="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-md px-2 sm:px-0">
        A Single Assembly District of The Church of Pentecost, dedicated to Spirit-filled worship,
        life-changing fellowship, and transformational teaching for all ages.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center">
        <button
          class="px-6 sm:px-10 py-2 sm:py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-950 font-bold text-xs sm:text-base shadow-lg
                 hover:from-yellow-300 hover:to-orange-400 transition transform hover:-translate-y-1"
        >
          Join Us This Sunday
        </button>

        <button
          class="px-6 sm:px-10 py-2 sm:py-4 rounded-full border-2 border-white text-white font-semibold text-xs sm:text-base
                 hover:bg-white/10 hover:scale-105 transition"
        >
          Watch Live
        </button>
      </div>

      <!-- Social Media -->
      <div class="mt-8 sm:mt-12 md:mt-16 flex gap-4 sm:gap-6 md:gap-8 justify-center animate-fade-in">
        <a href="#" aria-label="Facebook" class="text-white hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadow-lg" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.5 3h-2.4v7A10 10 0 0 0 22 12Z"/>
          </svg>
        </a>
        <a href="#" aria-label="Instagram" class="text-white hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadow-lg" viewBox="0 0 24 24">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"/>
          </svg>
        </a>
        <a href="#" aria-label="YouTube" class="text-white hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadow-lg" viewBox="0 0 24 24">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12Z"/>
          </svg>
        </a>
        <a href="#" aria-label="TikTok" class="text-white hover:text-yellow-400 transition transform hover:-translate-y-1 hover:scale-110">
          <svg class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 fill-current drop-shadow-lg" viewBox="0 0 24 24">
            <path d="M16.5 1c.6 3.4 3 5.7 6.5 6v4.2c-2.1.1-4.1-.6-6-1.8v7.6a7.4 7.4 0 1 1-7.4-7.4c.3 0 .6 0 .9.1v4.3a3.1 3.1 0 1 0 3.1 3.1V1h3Z"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script>
const bgVideo = new URL('../assets/Media/bg video.mp4', import.meta.url).href

export default {
  name: 'WelcomeHero',
  data() {
    return { bgVideo }
  }
}
</script>
