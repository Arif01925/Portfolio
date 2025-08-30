<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Edit Project</h1>
    <form @submit.prevent="updateProject" enctype="multipart/form-data" class="space-y-4 max-w-md">
      <input type="text" v-model="title" class="form-input" placeholder="Title" required />
      <textarea v-model="description" class="form-input" placeholder="Description" required></textarea>

      <select v-model="type" class="form-input" required>
        <option value="">-- Select Type --</option>
        <option v-for="t in types" :key="t.id" :value="t.name">{{ t.name }}</option>
      </select>

      <input type="date" v-model="date" class="form-input" required />

      <div>
        <label class="block">Thumbnail Image</label>
        <input type="file" @change="e => thumbnail = e.target.files[0]" accept="image/*" />
      </div>

      <div>
        <label class="block">Project Images</label>
        <input type="file" multiple @change="e => images = Array.from(e.target.files)" accept="image/*" />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Update Project</button>
    </form>
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
const description = ref('')
const type = ref('')
const date = ref('')
const thumbnail = ref(null)
const images = ref([])

const types = ref([])

const fetchProject = async () => {
  const res = await fetch(`/api/projects/${route.query.id}`)
  const data = await res.json()

  title.value = data.title
  description.value = data.description
  type.value = data.type           // Now this will work, because types are already loaded
  date.value = data.date
}


const fetchTypes = async () => {
  const res = await fetch('/api/project-types')
  types.value = await res.json()
}


onMounted(async () => {
  await fetchTypes()        // Wait until types are loaded
  await fetchProject()      // Then load and assign project data
})


const updateProject = async () => {
  const formData = new FormData()
  formData.append('title', title.value)
  formData.append('description', description.value)
  formData.append('type', type.value)
  formData.append('date', date.value)
  formData.append('id', id)

  if (thumbnail.value) {
    formData.append('thumbnail', thumbnail.value)
  }

  images.value.forEach((img, i) => {
    formData.append('images[]', img)
  })

  const res = await fetch('/api/projects', {
    method: 'PUT',
    body: formData
  })

  const result = await res.json()
  if (res.ok) {
    toast.success('Project updated successfully')
    router.push('/admin/projects')
  } else {
    toast.error(result.message || 'Failed to update project')
  }
}
</script>

<style scoped>
.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}
</style>
