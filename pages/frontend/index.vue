<script setup>
definePageMeta({
  layout: 'default',
  alias: ['/'] // this tells Nuxt to serve this page at /
})

</script>
<template>
  <section class="bg-[#0f172a] text-white min-h-screen px-6 py-12">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Boost Business Strategic Solutions with Us</h1>
      <p class="text-gray-300 max-w-3xl mx-auto">
        Hello! I’m Fatima, a passionate web developer, graphic designer, and data analyst...
      </p>
    </div>

    <!-- What I Do -->
    <section class="mt-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">What I Do?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Service Card Example -->
        <div class="bg-[#111827] p-6 rounded-xl border border-blue-500">
          <h3 class="font-bold text-lg mb-2">Ui/UX Design</h3>
          <p class="text-sm text-gray-400">Each one showcases my approach...</p>
        </div>
        <!-- Add the rest of your services here similarly -->
      </div>
    </section>

    <!-- Stats -->
    <section class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-5xl mx-auto">
      <div><h3 class="text-3xl font-bold">20k</h3><p class="text-sm text-gray-400">Our Project Complete</p></div>
      <div><h3 class="text-3xl font-bold">10k</h3><p class="text-sm text-gray-400">Our Natural Products</p></div>
      <div><h3 class="text-3xl font-bold">200+</h3><p class="text-sm text-gray-400">Clients Reviews</p></div>
      <div><h3 class="text-3xl font-bold">2k+</h3><p class="text-sm text-gray-400">Our Satisfied Client</p></div>
    </section>
  </section>
</template>
