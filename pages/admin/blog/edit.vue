<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Edit Blog Post</h1>

    <form v-if="loaded" @submit.prevent="submitForm" enctype="multipart/form-data" class="space-y-4 max-w-2xl">
      <input type="text" v-model="title" class="form-input" placeholder="Title" required />
      <input type="text" v-model="excerpt" class="form-input" placeholder="Short excerpt" required />
      <textarea v-model="content" class="form-input" placeholder="Content" rows="8"></textarea>

      <input type="text" v-model="category" class="form-input" placeholder="Category" />
      <input type="date" v-model="date" class="form-input" />

      <div>
        <label class="block">Thumbnail Image (leave empty to keep existing)</label>
        <input type="file" @change="e => thumbnail = e.target.files[0]" accept="image/*" />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Update Post</button>
    </form>

    <div v-else class="text-gray-500">Loading...</div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const id = route.query.id
const title = ref('')
const excerpt = ref('')
const content = ref('')
const category = ref('')
const date = ref('')
const thumbnail = ref(null)
const loaded = ref(false)

const fetchPost = async () => {
  try {
    const res = await fetch(`/api/blogs?id=${id}`)
    const data = await res.json()
    if (!data) throw new Error('Not found')
    title.value = data.title || ''
    excerpt.value = data.excerpt || ''
    content.value = data.content || ''
    category.value = data.category || ''
    date.value = data.date || ''
    loaded.value = true
  } catch (err) {
    console.error(err)
    toast.error('Failed to load post')
  }
}

const submitForm = async () => {
  try {
    const formData = new FormData()
    formData.append('id', id)
    formData.append('title', title.value)
    formData.append('excerpt', excerpt.value)
    formData.append('content', content.value)
    formData.append('category', category.value)
    formData.append('date', date.value)
    if (thumbnail.value) formData.append('thumbnail', thumbnail.value)

    const res = await fetch('/api/blogs', { method: 'PUT', body: formData })
    if (!res.ok) throw new Error('Failed to update')

    toast.success('Post updated')
    router.push('/admin/blog')
  } catch (err) {
    console.error(err)
    toast.error('Failed to update post')
  }
}

onMounted(() => {
  if (!id) {
    toast.error('Invalid post id')
    return
  }
  fetchPost()
})
</script>

<style scoped>
.form-input { width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px }
</style>
