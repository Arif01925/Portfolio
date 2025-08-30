<template>
  <div v-if="showPopup" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div class="bg-white w-full max-w-3xl md:flex rounded-md overflow-hidden shadow-xl relative">
      
      <!-- Close Button -->
      <button @click="closePopup" class="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black">
        &times;
      </button>

      <!-- Left: Image -->
      <div class="hidden md:block w-1/2">
        <img
          src="/images/newsletter-popup/banner.jpg"
          alt="Newsletter"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Right: Content -->
      <div class="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 class="text-lg font-bold mb-2">NEWSLETTER</h2>
        <p class="text-sm text-gray-700 mb-4">
          Get 15% off your first purchase! Plus, be the first to know about sales,
          new product launches and exclusive offers!
        </p>

        <input
          type="email"
          placeholder="YOUR EMAIL ADDRESS"
          class="border border-gray-300 rounded px-4 py-2 mb-4 w-full text-sm focus:outline-none"
        />
        <button class="bg-black text-white py-2 rounded w-full hover:bg-gray-900 text-sm font-semibold">
          SUBSCRIBE
        </button>

        <div class="flex items-center mt-4">
          <input
            type="checkbox"
            id="dontShow"
            v-model="dontShowAgain"
            class="mr-2"
          />
          <label for="dontShow" class="text-xs text-gray-600">DON'T SHOW THIS POPUP AGAIN</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPopup = ref(false)
const dontShowAgain = ref(false)

const closePopup = () => {
  showPopup.value = false
  if (dontShowAgain.value) {
    localStorage.setItem('hideNewsletterPopup', 'true')
  }
}

onMounted(() => {
  const hasHidden = localStorage.getItem('hideNewsletterPopup')
  if (!hasHidden) {
    setTimeout(() => {
      showPopup.value = true
    }, 2000) // show popup after 2s
  }
})
</script>
