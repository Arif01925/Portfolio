<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-green-600 font-medium mb-2">Contact Us</h2>
    <h1 class="text-3xl font-bold mb-10">GET IN TOUCH WITH US</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Left: Info -->
      <div class="space-y-8">
        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10l9-7 9 7v11a2 2 0 01-2 2h-2a2 2 0 01-2-2V12H9v9a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"/></svg>
          </div>
          <div>
            <h3 class="font-semibold">Our Location</h3>
            <p>108 Edwin Ave., <br />Waterburry, CT 06708</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5h2l3.6 7.59L5.25 17H19v2H5.25a1.25 1.25 0 01-1.2-1.6L6.6 10.4 4 5z"/></svg>
          </div>
          <div>
            <h3 class="font-semibold">Phone Number</h3>
            <p>+8801925466746</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 12H8m8 0l-3.5-3.5M16 12l-3.5 3.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h3 class="font-semibold">Email Address</h3>
            <p>arif01925@gmail.com</p>
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
