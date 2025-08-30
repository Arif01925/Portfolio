<template>
  <div class="min-h-screen flex bg-[#0f172a] text-white">
    <!-- Sidebar: 20% -->
    <div class="w-1/5">
      <Sidebar />
    </div>

    <!-- Right Content: 80% -->
<div class="w-4/5 flex flex-col min-h-screen pr-2">
  <Header />

  <main class="flex-1 px-4 md:px-6 py-6 pt-24">
    <NuxtPage />
  </main>

  <Footer />
  </div>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'
</script>
