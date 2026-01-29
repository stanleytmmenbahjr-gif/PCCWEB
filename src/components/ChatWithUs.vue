<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 space-y-12">

      <!-- Section Header -->
      <div class="text-center">
        <h2 class="text-3xl font-black uppercase text-gray-800 mb-4">Chat With Us Online</h2>
        <div class="h-1 w-24 bg-red-600 mx-auto mb-6 pd-50px"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Connect with our team instantly through any of the platforms below. Choose a chat channel and start the conversation!
        </p>
      </div>

      <!-- Horizontal Scrollable Chat Options -->
      <div class="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <!-- Chat Option 1 -->
        <div class="flex-shrink-0 w-72 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow snap-start">
          <div class="relative h-48 bg-green-500 flex items-center justify-center">
            <!-- Image placeholder -->
          </div>
          <div class="p-6 text-center space-y-3">
            <h3 class="text-xl font-bold text-gray-800">WhatsApp</h3>
            <p class="text-gray-600 text-sm">Chat with our team directly via WhatsApp.</p>
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              class="inline-block mt-2 px-6 py-2 bg-green-500 text-white rounded-md font-bold hover:bg-green-600 transition-colors"
            >Start Chat</a>
          </div>
        </div>

        <!-- Chat Option 2 -->
        <div class="flex-shrink-0 w-72 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow snap-start">
          <div class="relative h-48 bg-blue-600 flex items-center justify-center">
            <!-- Image placeholder -->
          </div>
          <div class="p-6 text-center space-y-3">
            <h3 class="text-xl font-bold text-gray-800">Messenger</h3>
            <p class="text-gray-600 text-sm">Reach us via Facebook Messenger instantly.</p>
            <a
              href="https://m.me/Paynesville City Church"
              target="_blank"
              class="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors"
            >Start Chat</a>
          </div>
        </div>

        <!-- Chat Option 3 -->
        <div class="flex-shrink-0 w-72 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow snap-start">
          <div class="relative h-48 bg-red-600 flex items-center justify-center">
            <!-- Image placeholder -->
          </div>
          <div class="p-6 text-center space-y-3">
            <h3 class="text-xl font-bold text-gray-800">Live Chat (Tawk.to)</h3>
            <p class="text-gray-600 text-sm">Use our website live chat for immediate assistance.</p>
            <a
              href="#"
              @click.prevent="openTawk"
              class="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-700 transition-colors"
            >Start Chat</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const openTawk = () => {
  if (window.Tawk_API) {
    window.Tawk_API.toggle();
  } else {
    alert('Tawk.to chat not loaded yet.');
  }
}
</script>

<style scoped>
/* Smooth horizontal scroll snapping */
.snap-x { scroll-snap-type: x mandatory; }
.snap-start { scroll-snap-align: start; }

/* Hide default scrollbar */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* Optional hover fade for images */
img { transition: transform 0.5s ease; }
</style>
