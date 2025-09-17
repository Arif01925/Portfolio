<template>
  <div class="bg-[#070607] text-white">
    <!-- Hero -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold">Blog Details</h1>
        <nav class="text-sm text-gray-400 mt-2">Home <span class="text-pink-400">/ Blog Details</span></nav>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main content -->
      <article class="lg:col-span-2 bg-transparent">
        <img :src="post.thumbnail || '/images/tmp/default.jpg'" alt="" class="w-full rounded-lg mb-6 object-cover h-72" />

        <div class="text-gray-400 mb-3">By {{ post.author || 'Admin' }} • {{ post.category }} • {{ post.date }}</div>
        <h2 class="text-3xl font-semibold mb-4">{{ post.title }}</h2>

        <div class="prose prose-invert max-w-none text-gray-300 mb-6" v-html="post.content"></div>

        <!-- Comments (static placeholder) -->
        <div class="mt-8">
          <h3 class="text-xl font-semibold mb-4">Comments (3)</h3>
          <div class="space-y-6">
            <div class="flex gap-4">
              <img src="/images/profile.jpg" class="w-12 h-12 rounded-full" />
              <div>
                <div class="font-semibold">Stanio Iainto</div>
                <div class="text-sm text-gray-400">September 16, 2023</div>
                <p class="mt-2 text-gray-300">Ishfed fact that a reader will be distrol acted biol the. Ishfed fact that a reader will be distrol acted laoreet.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <img src="/images/profile.jpg" class="w-12 h-12 rounded-full" />
              <div>
                <div class="font-semibold">Court Henry</div>
                <div class="text-sm text-gray-400">September 16, 2023</div>
                <p class="mt-2 text-gray-300">Ishfed fact that a reader will be distrol acted biol the. Ishfed fact that a reader will be distrol acted laoreet.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Leave a comment -->
        <div class="mt-8 p-6 bg-[#0b0b0b] rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Leave A Comment</h3>
          <form @submit.prevent="submitComment" class="space-y-4">
            <input v-model="comment.name" type="text" placeholder="Name" class="w-full p-3 rounded bg-[#0a0a0a] border border-[#222]" />
            <input v-model="comment.email" type="email" placeholder="Email" class="w-full p-3 rounded bg-[#0a0a0a] border border-[#222]" />
            <textarea v-model="comment.message" placeholder="Message" rows="4" class="w-full p-3 rounded bg-[#0a0a0a] border border-[#222]"></textarea>
            <button class="px-6 py-3 bg-pink-500 rounded text-white">Submit Now</button>
          </form>
        </div>
      </article>

      <!-- Sidebar -->
      <aside class="space-y-6">
        <div class="p-4 bg-[#0b0b0b] rounded-lg">
          <input placeholder="Type here" class="w-full p-3 rounded bg-[#0a0a0a] border border-[#222]" />
        </div>

        <div class="p-4 bg-[#0b0b0b] rounded-lg">
          <h4 class="font-semibold mb-3">Recent Post</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li v-for="r in recent" :key="r.id">{{ r.title }}</li>
          </ul>
        </div>

        <div class="p-4 bg-[#0b0b0b] rounded-lg">
          <h4 class="font-semibold mb-3">About Me</h4>
          <div class="flex gap-3 items-center">
            <img src="/images/profile.jpg" class="w-12 h-12 rounded-full" />
            <div>
              <div class="font-semibold">Fatima Arafy</div>
              <div class="text-sm text-gray-400">UI/UX Designer</div>
            </div>
          </div>
        </div>

        <div class="p-4 bg-[#0b0b0b] rounded-lg">
          <h4 class="font-semibold mb-3">Tags</h4>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-[#111] rounded text-sm">Design</span>
            <span class="px-3 py-1 bg-[#111] rounded text-sm">UI/UX</span>
            <span class="px-3 py-1 bg-[#111] rounded text-sm">Portfolio</span>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useFetch } from '#app'

const route = useRoute()
const slug = route.params.slug

const { data: post, error } = await useFetch(`/api/blogs/${slug}`)
const { data: recent } = await useFetch('/api/blogs', { default: () => [] })

const comment = reactive({ name: '', email: '', message: '' })

function submitComment() {
  // placeholder - you can wire this up to server later
  alert('Thanks for your comment (demo)')
  comment.name = comment.email = comment.message = ''
}
</script>
