<template>
  <div>
    <section class="max-w-7xl mx-auto px-6 py-20 bg-white rounded-lg shadow-md text-center">
      <h2 class="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">
        Our Vision
      </h2>
      <div class="h-1 w-24 bg-red-600 mx-auto mb-8"></div>
      <p class="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        To intentionally attract people from all nationalities, workers, business men and women,
        while creating the right spiritual and socio-cultural atmosphere to nurture, maintain,
        and grow them. We envision a community of believers in Paynesville City Church who are
        spiritually empowered, culturally aware, and actively engaged in transforming their
        communities through Christ-centered impact.
      </p>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './Footer.vue'
// No extra logic needed for this static component
</script>

<style scoped>
/* Optional: subtle hover/fade effect if desired */
section:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease-in-out;
}
</style>
