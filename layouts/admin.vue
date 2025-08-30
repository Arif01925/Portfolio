<script setup>
const showProjectsMenu = ref(false)
const route = useRoute()
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4 text-xl font-bold text-center border-b">Arif's Portfolio</div>
      <nav class="p-4 space-y-2">

        <!-- Dashboard -->
        <NuxtLink
          to="/admin"
          class="block px-4 py-2 rounded hover:bg-gray-100"
          :class="{ 'bg-gray-200 font-semibold': route.path === '/admin' }"
        >
          Dashboard
        </NuxtLink>

        <!-- Projects Dropdown -->
        <div>
          <button
            @click="showProjectsMenu = !showProjectsMenu"
            class="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
            :class="{ 'bg-gray-200 font-semibold': route.path.startsWith('/admin/projects') }"
          >
            Projects
          </button>
          <transition name="fade">
            <div v-if="showProjectsMenu" class="ml-4 mt-1 space-y-1">
              <NuxtLink
                to="/admin/projects"
                class="block px-4 py-2 text-sm rounded hover:bg-gray-100"
                :class="{ 'bg-gray-200 font-semibold': route.path === '/admin/projects' }"
              >
                Manage Projects
              </NuxtLink>
              <NuxtLink
                to="/admin/projects/types"
                class="block px-4 py-2 text-sm rounded hover:bg-gray-100"
                :class="{ 'bg-gray-200 font-semibold': route.path === '/admin/projects/types' }"
              >
                Manage Category
              </NuxtLink>
            </div>
          </transition>
        </div>

        <!-- Resume -->
        <NuxtLink
          to="/admin/resume"
          class="block px-4 py-2 rounded hover:bg-gray-100"
          :class="{ 'bg-gray-200 font-semibold': route.path === '/admin/resume' }"
        >
          Resume
        </NuxtLink>

        <!-- Messages -->
        <NuxtLink
          to="/admin/messages"
          class="block px-4 py-2 rounded hover:bg-gray-100"
          :class="{ 'bg-gray-200 font-semibold': route.path === '/admin/messages' }"
        >
          Messages
        </NuxtLink>

        <!-- Blog Posts -->
        <NuxtLink
          to="/admin/blog"
          class="block px-4 py-2 rounded hover:bg-gray-100"
          :class="{ 'bg-gray-200 font-semibold': route.path === '/admin/blog' }"
        >
          Blog Posts
        </NuxtLink>

        <!-- Settings -->
        <NuxtLink
          to="/admin/settings"
          class="block px-4 py-2 rounded hover:bg-gray-100"
          :class="{ 'bg-gray-200 font-semibold': route.path === '/admin/settings' }"
        >
          Settings
        </NuxtLink>

      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
