<template>
  <div class="text-white">
    <!-- Posts Grid -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(post, idx) in posts" :key="post.id" :class="'bg-[#0b0b0b] rounded-xl p-4 border border-[#1f1f1f] shadow-md animate-on-scroll'" :data-index="idx">
          <div class="relative overflow-hidden rounded-lg mb-4">
                  <img :src="post.thumbnail || post.image || '/images/tmp/default.jpg'" :alt="post.title" class="w-full h-48 object-cover rounded-lg" />
                  <div class="absolute top-3 left-3 bg-[#111111cc] text-xs text-gray-200 rounded-full px-3 py-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M19 3v4M4 7h16M6 21h12a2 2 0 002-2V7H4v12a2 2 0 002 2z"/></svg>
                    <span v-if="post.author">{{ post.author }}</span>
                    <span v-if="post.author" class="text-gray-400">•</span>
                    <span>{{ post.date }}</span>
                  </div>
                </div>

          <h2 class="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">{{ post.title }}</h2>
          <p class="text-sm text-gray-400 mb-4">{{ post.excerpt }}</p>

          <div class="flex items-center justify-between">
            <a :href="`/frontend/blog/${post.slug || post.id}`" class="text-xs text-gray-300 hover:text-blue-600">READ MORE ›</a>
            <div class="flex items-center gap-3 text-gray-400 text-xs">
              <span class="px-2 py-1 border border-[#222] rounded">{{ post.category }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination placeholder -->
      <div class="mt-12 flex justify-center animate-on-scroll" data-index="10">
        <nav class="flex items-center gap-3 text-sm text-gray-400">
          <button class="px-3 py-2 bg-[#0b0b0b] border border-[#1f1f1f] rounded">Prev</button>
          <button class="px-3 py-2 bg-[#0b0b0b] border border-[#1f1f1f] rounded">1</button>
          <button class="px-3 py-2 bg-[#0b0b0b] border border-[#1f1f1f] rounded">2</button>
          <button class="px-3 py-2 bg-[#0b0b0b] border border-[#1f1f1f] rounded">Next</button>
        </nav>
      </div>
  </section>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

// Fetch blog posts from the server API (SSR-friendly)
const { data: posts, error } = await useFetch('/api/blogs', { default: () => [] })

if (error.value) {
  // Fallback to empty array if fetch fails
  console.error('Failed to load posts', error.value)
}

definePageMeta({
  alias: ['/blog'],
  layout: 'default'
})
</script>

