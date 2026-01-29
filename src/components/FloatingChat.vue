<template>
  <!-- Floating Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="isOpen = true"
      class="flex items-center gap-2 bg-green-500 hover:bg-green-600
             text-white px-5 py-3 rounded-full shadow-lg
             transition transform hover:scale-105"
    >
      <i class="fab fa-whatsapp text-xl"></i>
      Chat with our representatives
    </button>
  </div>

  <!-- Modal -->
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  >
    <div class="bg-white w-96 rounded-2xl shadow-xl p-6 relative">

      <!-- Close Button -->
      <button
        @click="isOpen = false"
        class="absolute top-3 right-3 w-9 h-9 rounded-full
               bg-gray-100 hover:bg-red-500 hover:text-white
               flex items-center justify-center transition"
      >
        ✕
      </button>

      <!-- Header -->
      <h2 class="text-xl font-bold text-center mb-2">
        Chat with Our Representatives
      </h2>
      <p class="text-sm text-gray-500 text-center mb-5">
        Select who you want to talk to
      </p>

      <!-- Representatives -->
      <div class="space-y-3">
        <a
          v-for="rep in reps"
          :key="rep.name"
          :href="rep.link"
          target="_blank"
          class="flex items-center justify-between
                 bg-gray-100 hover:bg-green-100
                 px-4 py-3 rounded-xl
                 transition transform hover:scale-[1.02]"
        >
          <span class="font-medium">{{ rep.name }}</span>
          <span class="text-green-600 text-sm">Chat →</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const reps = [
  { name: 'Media Team', link: 'https://wa.me/231776548981' },
  { name: 'Pastoral Care', link: 'https://wa.me/231777443429' },
  { name: 'Youth Ministry', link: 'https://wa.me/231XXXXXXXX' },
  { name: 'Admin Office', link: 'https://wa.me/231776442472' }
]
</script>
