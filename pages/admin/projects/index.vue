<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Projects</h1>

    <div v-if="successMessage" class="toast">{{ successMessage }}</div>

    <NuxtLink to="/admin/projects/create" class="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">
      + Add New Project
    </NuxtLink>

    <table class="w-full text-left border">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2">Sl</th>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Type</th>
          <th class="px-4 py-2">Date</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projects" :key="project.id" class="border-t">
          <td class="px-4 py-2">{{ index + 1 }}</td>
          <td class="px-4 py-2">{{ project.title }}</td>
          <td class="px-4 py-2">{{ project.type }}</td>
          <td class="px-4 py-2">{{ project.date }}</td>
          <td class="px-4 py-2 space-x-2">
            <NuxtLink :to="`/admin/projects/edit?id=${project.id}`" class="text-blue-600 hover:underline">Edit</NuxtLink>
            <button @click="deleteProject(project.id)" class="text-red-600 hover:underline">Delete</button>
          </td>
        </tr>
        <tr v-if="projects.length === 0">
          <td colspan="4" class="text-center text-gray-400 py-4">No projects found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'

const projects = ref([])
const successMessage = ref('')
const toast = useToast()

const fetchProjects = async () => {
  const res = await fetch('/api/projects')
  projects.value = await res.json()
}

const deleteProject = async (id) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this project?');
  if (!confirmDelete) return;

  try {
    await $fetch('/api/projects', {
      method: 'DELETE',
      body: { id },
    });
    toast.success('Project deleted');
    fetchProjects(); // refresh project list
  } catch (err) {
    toast.error('Failed to delete project');
    console.error(err);
  }
};



onMounted(fetchProjects)
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #e0fce0;
  color: #046c4e;
  padding: 10px 20px;
  border: 1px solid #34d399;
  border-radius: 6px;
  z-index: 1000;
}
</style>
