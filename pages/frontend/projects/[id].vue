<template>
  <div class="min-h-screen bg-[#0B1120] text-white py-10 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- Title & Date -->
      <div class="flex flex-wrap justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">{{ project.title }}</h1>
        <p class="text-gray-400 text-sm">Date: {{ project.date }}</p>
      </div>

      <!-- Thumbnail -->
      <div class="w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 shadow-lg">
      <img
      v-if="project.thumbnail"
      :src="project.thumbnail"
      alt="Project Thumbnail"
      class="w-full h-full object-cover"
      />
      </div>


      <!-- Description -->
      <p class="text-gray-300 text-base leading-relaxed mb-10 whitespace-pre-line">
        {{ project.description }}
      </p>

      <!-- Gallery Heading -->
      <h2 class="text-xl font-semibold mb-4">Project Gallery</h2>

      <!-- 2x2 Image Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="(img, index) in project.images"
          :key="index"
          class="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
          @click="openLightbox(index)"
        >
          <img
            :src="img"
            alt="Gallery Image"
            class="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <!-- Back Link -->
      <div class="mt-10">
        <NuxtLink to="/frontend/work" class="text-blue-400 hover:underline text-sm inline-block">
          ← Back to Work
        </NuxtLink>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
    >
      <button
        class="absolute top-5 right-5 text-white text-3xl"
        @click="closeLightbox"
      >×</button>

      <!-- Previous -->
      <button
        class="absolute left-5 text-white text-2xl"
        @click.stop="prevImage"
      >‹</button>

      <!-- Image -->
      <img
        :src="project.images[activeImage]"
        class="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
      />

      <!-- Next -->
      <button
        class="absolute right-5 text-white text-2xl"
        @click.stop="nextImage"
      >›</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const project = ref({})
const showLightbox = ref(false)
const activeImage = ref(0)

const fetchProject = async () => {
  const res = await fetch(`/api/projects/${route.params.id}`)
  const data = await res.json()
  project.value = data
}

const openLightbox = (index) => {
  activeImage.value = index
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
}

const prevImage = () => {
  activeImage.value = (activeImage.value - 1 + project.value.images.length) % project.value.images.length
}

const nextImage = () => {
  activeImage.value = (activeImage.value + 1) % project.value.images.length
}

onMounted(fetchProject)
</script>
