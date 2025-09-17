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

  // Only update active state for anchor links (href starting with '#').
  // This prevents the scroll handler from removing the Vue/Nuxt-managed
  // active class for route links (e.g. /frontend/resume).
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.id;
      }
    });

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) {
        // skip non-anchor links (they are route links handled by Vue)
        return;
      }
      link.classList.remove('active');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
</script>

<style scoped>
.header-link {
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem;
  border-radius: 0.375rem; /* rounded-md */
  font-size: 0.875rem; /* text-sm */
  color: #ffffff; /* text-white */
  background-color: #1e293b;
  transition-property: color, border-color, background-color, box-shadow;
  transition-duration: 300ms;
  border-bottom-width: 2px;
  border-bottom-color: transparent;
}

.header-link:hover {
  /* show glow outline on hover */
  color: #00f0ff;
  border-bottom-color: transparent;
  /* apply full outline glow (copied from work page) */
  border-width: 2px;
  border-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, rgba(255,0,255,0.5), rgba(0,255,255,0.5));
  animation: header-outline-glow 2s infinite ease-in-out;
}

.header-link.active {
  /* same glow for active link */
  color: #00f0ff;
  border-bottom-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, rgba(255,0,255,0.5), rgba(0,255,255,0.5));
  animation: header-outline-glow 2s infinite ease-in-out;
}

@keyframes header-outline-glow {
  0% {
    border-image-source: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1));
  }
  50% {
    border-image-source: linear-gradient(90deg, rgba(255,0,255,0.5), rgba(0,255,255,0.5));
  }
  100% {
    border-image-source: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1));
  }
}
</style>
