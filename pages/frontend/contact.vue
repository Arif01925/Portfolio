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
            <p>2266 5th Avenue, Suite 486<br />New York, NY 10037</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5h2l3.6 7.59L5.25 17H19v2H5.25a1.25 1.25 0 01-1.2-1.6L6.6 10.4 4 5z"/></svg>
          </div>
          <div>
            <h3 class="font-semibold">Phone Number</h3>
            <p>1-646-778-8396</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="bg-green-50 p-4 rounded">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 12H8m8 0l-3.5-3.5M16 12l-3.5 3.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h3 class="font-semibold">Email Address</h3>
            <p>chefkproduct.owner@gmail.com</p>
          </div>
        </div>

        <!-- Social Media Icons -->
        <div class="flex items-center gap-4 pt-6">
          <a href="https://facebook.com" target="_blank" title="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" class="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" title="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" class="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" title="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="https://pinterest.com" target="_blank" title="Pinterest">
            <img src="/icons/pinterest.svg" alt="Pinterest" class="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" title="TikTok">
            <img src="/icons/tiktok.svg" alt="TikTok" class="w-6 h-6 hover:scale-110 transition" />
          </a>
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
