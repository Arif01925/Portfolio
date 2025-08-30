<script setup>
definePageMeta({
  layout: 'admin'
})

const types = ref([])
const newType = ref('')
const loading = ref(false)
const error = ref(null)
const flash = ref('')

// Show toast message
const showFlash = (message, duration = 3000) => {
  flash.value = message
  setTimeout(() => {
    flash.value = ''
  }, duration)
}

// Load all categories from JSON file
const loadTypes = async () => {
  try {
    loading.value = true
    const res = await $fetch('/api/project-types')
    types.value = res
  } catch (err) {
    error.value = 'Failed to load categories.'
  } finally {
    loading.value = false
  }
}

// Add new category
const addType = async () => {
  if (!newType.value.trim()) return
  await $fetch('/api/project-types', {
    method: 'POST',
    body: { name: newType.value.trim() }
  })
  newType.value = ''
  await loadTypes()
  showFlash('Category added successfully.')
}

// Delete a category
const deleteType = async (id) => {
  await $fetch('/api/project-types', {
    method: 'DELETE',
    body: { id }
  })
  await loadTypes()
  showFlash('Category deleted.')
}

onMounted(loadTypes)
</script>

<template>
  <div>
    <!-- Flash Toast -->
    <div v-if="flash" class="toast">
      {{ flash }}
    </div>

    <h2 class="text-2xl font-bold mb-6">Project Categories</h2>

    <div v-if="error" class="mb-4 text-red-600">{{ error }}</div>

    <!-- Add Form -->
    <div class="mb-6 flex gap-4 items-center">
      <input
        v-model="newType"
        type="text"
        placeholder="New category name"
        class="border rounded px-4 py-2 w-64"
      />
      <button
        @click="addType"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Category
      </button>
    </div>

    <!-- Category Table -->
    <div v-if="types.length" class="bg-white p-6 rounded shadow max-w-xl">
      <table class="w-full">
        <thead>
          <tr class="border-b text-left">
            <th class="py-2 w-12">#</th>
            <th class="py-2">Name</th>
            <th class="py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(type, index) in types"
            :key="type.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="py-2">{{ index + 1 }}</td>
            <td class="py-2">{{ type.name }}</td>
            <td class="py-2 text-right">
              <button
                class="text-sm text-red-600 hover:underline"
                @click="deleteType(type.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #34d399;
  padding: 12px 20px 16px;
  border-radius: 6px;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  min-width: 240px;
  animation: slideIn 0.4s ease;
}

.toast::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  background-color: #10b981;
  width: 100%;
  animation: progressShrink 3s linear forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes progressShrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>
