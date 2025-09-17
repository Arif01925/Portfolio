<template>
  <section class="py-16 px-6 md:px-20">
    <h2 class="text-white text-3xl font-semibold text-center mb-10 animate-on-scroll" data-index="0">My Work</h2>

    <!-- Filter Buttons -->
  <div class="flex flex-wrap gap-4 justify-center mb-12 animate-on-scroll" data-index="1">
      <button
  @click="selectedCategory = 'All'"
  :class="[
    'px-4 py-2 rounded border-2 transition duration-300',
    selectedCategory === 'All'
      ? 'border-transparent animate-outline-glow text-white'
      : 'border-white text-white'
  ]"
>
  All
</button>

<button
  v-for="cat in categories"
  :key="cat"
  @click="selectedCategory = cat"
  :class="[
    'px-4 py-2 rounded border-2 transition duration-300',
    selectedCategory === cat
      ? 'border-transparent animate-outline-glow text-white'
      : 'border-white text-white'
  ]"
>
  {{ cat }}
</button>


    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div
        v-for="(project, idx) in filteredProjects"
        :key="project.id"
        :class="['group bg-[#0d1117] p-4 rounded-xl hover:bg-[#1a1f2e] transition duration-300 animate-on-scroll', {'in-view': false}]"
        :data-index="idx + 2"
      >
        <NuxtLink :to="`/frontend/projects/${project.id}`" class="block overflow-hidden rounded-lg mb-3">
        <img
        :src="project.thumbnail"
        :alt="project.title"
        class="w-full h-48 object-cover rounded-lg"
        />
        </NuxtLink>

        <div class="flex items-center justify-between mt-4">
          <NuxtLink :to="`/frontend/projects/${project.id}`" class="block">
          <h2 class="text-white font-semibold text-md hover:underline mb-1">
          {{ project.title }}
          </h2>
          </NuxtLink>
          
          <NuxtLink
            :to="`/frontend/projects/${project.id}`"
            class="opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <div
              class="w-7 h-7 rounded-full border border-white flex items-center justify-center"
            >
              <Icon icon="mdi:arrow-top-right" class="text-white text-sm" />
            </div>
          </NuxtLink>
        </div>

        <p class="text-sm text-blue-400 mt-1">
          Category: {{ project.type }}
        </p>
        <p class="text-sm text-gray-400">
          {{ project.description.slice(0, 70) }}{{ project.description.length > 70 ? '...' : '' }}
        </p>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useFetch } from '#app'

const projects = ref([])
const selectedCategory = ref('All')
const categories = ref([])

const fetchProjects = async () => {
  const res = await fetch('/api/projects')
  const data = await res.json()
  projects.value = data

  // Get unique categories
  categories.value = [...new Set(data.map(p => p.type))]
}

onMounted(() => {
  fetchProjects()
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects.value
  return projects.value.filter(p => p.type === selectedCategory.value)
})

definePageMeta({
  alias: ['/work'],
  layout: 'default'
})
</script>
<style scoped>
@keyframes outline-glow {
  0% {
    border-image: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)) 1;
  }
  50% {
    border-image: linear-gradient(90deg, rgba(255,0,255,0.5), rgba(0,255,255,0.5)) 1;
  }
  100% {
    border-image: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)) 1;
  }
}

.animate-outline-glow {
  border-image-slice: 1;
  border-width: 2px;
  border-style: solid;
  border-image-source: linear-gradient(90deg, rgba(255,255,255,0.5), rgba(0,255,255,0.5));
  animation: outline-glow 2s infinite ease-in-out;
}
</style>

