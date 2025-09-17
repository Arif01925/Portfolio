<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Blog Posts</h1>

    <NuxtLink to="/admin/blog/create" class="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">
      + Add New Post
    </NuxtLink>

    <table class="w-full text-left border">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2">Sl</th>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Category</th>
          <th class="px-4 py-2">Date</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="post.id" class="border-t">
          <td class="px-4 py-2">{{ index + 1 }}</td>
          <td class="px-4 py-2">{{ post.title }}</td>
          <td class="px-4 py-2">{{ post.category }}</td>
          <td class="px-4 py-2">{{ post.date }}</td>
          <td class="px-4 py-2 space-x-2">
            <NuxtLink :to="`/admin/blog/edit?id=${post.id}`" class="text-blue-600 hover:underline">Edit</NuxtLink>
            <button @click="deletePost(post.id)" class="text-red-600 hover:underline">Delete</button>
          </td>
        </tr>
        <tr v-if="posts.length === 0">
          <td colspan="5" class="text-center text-gray-400 py-4">No posts found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'

const posts = ref([])
const toast = useToast()

const fetchPosts = async () => {
  try {
    const res = await fetch('/api/blogs')
    posts.value = await res.json()
  } catch (err) {
    console.error(err)
    toast.error('Failed to load posts')
  }
}

const deletePost = async (id) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this post?')
  if (!confirmDelete) return

  try {
    await $fetch('/api/blogs', { method: 'DELETE', body: { id } })
    toast.success('Post deleted')
    fetchPosts()
  } catch (err) {
    console.error(err)
    toast.error('Failed to delete post')
  }
}

onMounted(fetchPosts)
</script>
