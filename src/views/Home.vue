<template>
  <main class="mt-20">
    <WelcomeHero />
    <SundayService />
    <WhatToExpect />
    <Footer />
  </main>
</template>

<script>
import WelcomeHero from '../components/WelcomeHero.vue'
import SundayService from '../components/SundayService.vue'
import WhatToExpect from '../components/WhatToExpect.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    WelcomeHero,
    SundayService,
    WhatToExpect,
    Footer
  }
}
</script>

<style scoped>
/* view-level styles if needed */
</style>
