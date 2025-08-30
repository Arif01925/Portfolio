<template>
  <header class="sticky top-6 z-50 w-full flex justify-center">
    <nav class="flex items-center gap-2 px-6 py-2 bg-[#0f172a] rounded-[12px] border border-[#1e293b] shadow-md">
      <NuxtLink to="/frontend" class="header-link" :class="{ active: $route.path === '/frontend' }">About Me</NuxtLink>
      <NuxtLink to="/frontend/resume" class="header-link" :class="{ active: $route.path === '/frontend/resume' }">My Resume</NuxtLink>
      <NuxtLink to="/frontend/work" class="header-link" :class="{ active: $route.path === '/frontend/work' }">My Work</NuxtLink>
      <NuxtLink to="/frontend/blog" class="header-link" :class="{ active: $route.path === '/frontend/blog' }">My Blog</NuxtLink>
      <NuxtLink to="/frontend/contact" class="header-link" :class="{ active: $route.path === '/frontend/contact' }">My Contact</NuxtLink>
    </nav>
    
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.header-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.id;
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
</script>

<style scoped>
.header-link {
  @apply px-4 py-2 rounded-md text-sm text-white bg-[#1e293b] transition duration-300 border-b-2 border-transparent;
}

.header-link:hover {
  border-bottom: 2px solid #00f0ff;
  color: #00f0ff;
}

.header-link.active {
  border-bottom: 2px solid #00f0ff;
  color: #00f0ff;
}
</style>
