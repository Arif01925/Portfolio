<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Create Blog Post</h1>

    <form @submit.prevent="submitForm" enctype="multipart/form-data" class="space-y-4 max-w-2xl">
      <input type="text" v-model="title" class="form-input" placeholder="Title" required />
      <input type="text" v-model="excerpt" class="form-input" placeholder="Short excerpt" required />
      <textarea v-model="content" class="form-input" placeholder="Content" rows="8"></textarea>

      <input type="text" v-model="category" class="form-input" placeholder="Category" />
      <input type="date" v-model="date" class="form-input" />

      <div>
        <label class="block">Thumbnail Image</label>
        <input type="file" @change="e => thumbnail = e.target.files[0]" accept="image/*" />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Save Post</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const title = ref('')
const excerpt = ref('')
const content = ref('')
const category = ref('')
const date = ref('')
const thumbnail = ref(null)

const submitForm = async () => {
  try {
    const formData = new FormData()
    formData.append('title', title.value)
    formData.append('excerpt', excerpt.value)
    formData.append('content', content.value)
    formData.append('category', category.value)
    formData.append('date', date.value)
    if (thumbnail.value) formData.append('thumbnail', thumbnail.value)

    const res = await fetch('/api/blogs', { method: 'POST', body: formData })
    if (!res.ok) throw new Error('Failed to save')

    toast.success('Post saved successfully')
    // clear form
    title.value = excerpt.value = content.value = category.value = date.value = ''
    thumbnail.value = null
  } catch (err) {
    console.error(err)
    toast.error('Failed to save post')
  }
}
</script>

<style scoped>
.form-input { width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px }
</style>
