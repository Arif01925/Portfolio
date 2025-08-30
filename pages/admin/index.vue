<script setup>
definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <div>
    <div class="mb-6">
      <h2 class="text-2xl font-bold">Good Morning, Arifur 👋</h2>
      <p class="text-gray-600">Here's what’s happening in your portfolio today.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded shadow">
        <h3 class="font-semibold text-lg mb-2">Total Projects</h3>
        <p class="text-3xl font-bold text-blue-600">18</p>
      </div>

      <div class="bg-white p-6 rounded shadow">
        <h3 class="font-semibold text-lg mb-2">Unread Messages</h3>
        <p class="text-3xl font-bold text-green-600">5</p>
      </div>

      <div class="bg-white p-6 rounded shadow">
        <h3 class="font-semibold text-lg mb-2">Resume Uploaded</h3>
        <p class="text-3xl font-bold text-purple-600">Yes</p>
      </div>

      <div class="bg-white p-6 rounded shadow">
        <h3 class="font-semibold text-lg mb-2">Blog Posts</h3>
        <p class="text-3xl font-bold text-pink-600">12</p>
      </div>
    </div>

    <div class="flex justify-end mb-6">
      <NuxtLink to="/admin/projects/create" class="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
        + Add New Project
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded shadow">
        <h3 class="font-semibold text-lg mb-4">Recent Projects</h3>
        <ul class="space-y-2 text-sm text-gray-700">
          <li>✔ Product Branding Video</li>
          <li>✔ Chef K UGC Reel</li>
          <li>✔ Poster Design for Organic Drinks</li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded shadow">
        <h3 class="font-semibold text-lg mb-4">Recent Messages</h3>
        <ul class="space-y-2 text-sm text-gray-700">
          <li>📧 "Loved your latest design!"</li>
          <li>📧 "Interested in a UGC collaboration."</li>
          <li>📧 "Can you send your resume?"</li>
        </ul>
      </div>
    </div>
  </div>
</template>
