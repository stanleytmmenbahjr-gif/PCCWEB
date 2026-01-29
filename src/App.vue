<template>
  <div class="font-sans antialiased">
    <!-- NavBar -->
    <NavBar />
    <FloatingChat />

    <!-- Route outlet -->
    <router-view />

    <!-- Optional Footer placeholder -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FloatingChat from "./components/FloatingChat.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FloatingChat,
  },
  // routing handled by vue-router
};

</script>

<style>
/* Optional global styles */
body {
  scroll-behavior: smooth;
}
</style>
