<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-green-600 font-medium mb-2">Contact Us</h2>
    <h1 class="text-3xl font-bold mb-10">GET IN TOUCH WITH US</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Left: Info -->
      <div class="space-y-8">
        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6 text-green-600"    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3            1.343-3 3 1.343 3 3 3z" /> <path stroke-linecap="round" stroke-linejoin="round"    d="M12 22s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />  </svg>
          </div>
          <div>
            <h3 class="font-semibold">Our Location</h3>
            <p>108 Edwin Ave, Waterburry, CT 06708</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6 text-green-600"  fill="none"   viewBox="0 0 24 24" stroke="currentColor"  stroke-width="1">  <path stroke-linecap="round" stroke-linejoin="round"    d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.5 4.5a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.5 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />  </svg>
          </div>
          <div>
            <h3 class="font-semibold">Phone Number</h3>
            <p>+8801925466746</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">  <path stroke-linecap="round" stroke-linejoin="round"     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> </svg>

          </div>
          <div>
            <h3 class="font-semibold">Email Address</h3>
            <p>arif01925@gmail.com</p>
          </div>
        </div>

      </div>

      <!-- Right: Contact Form -->
      <form class="bg-white shadow p-8 rounded-xl space-y-4">
        <input type="text" placeholder="Your Name" class="w-full border border-gray-300 px-4 py-2 rounded" />
        <input type="email" placeholder="Your Email" class="w-full border border-gray-300 px-4 py-2 rounded" />
        <input type="text" placeholder="Your Phone" class="w-full border border-gray-300 px-4 py-2 rounded" />
        <textarea placeholder="Your Message" rows="5" class="w-full border border-gray-300 px-4 py-2 rounded"></textarea>
        <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  alias: ['/contact'],
  layout: 'default'
})
</script>
