<template>
  <footer class="px-4 py-10">
    <!-- Glowing border wrapper -->
    <div class="relative p-[2px] glowing-border rounded-2xl">
      <!-- Inner content -->
      <div class="bg-[#111827] rounded-2xl px-4 md:px-6 py-10 text-white">
        <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-6">

          <!-- About Me -->
          <div class="md:pr-6">
            <h3 class="font-bold text-lg mb-4">About Me</h3>
            <p class="text-sm leading-relaxed">
              I'm Arifur Rahaman — a passionate creative focused on design,
              digital content, and AI tools. I enjoy transforming ideas into visual experiences that resonate.
            </p>
          </div>

          <!-- Connect With Me -->
          <div class="md:px-6">
            <h3 class="font-bold text-lg mb-4">Connect With Me</h3>
            <p class="text-sm mb-4">Follow me on social platforms:</p>
            <div class="flex space-x-4">
              <a href="https://facebook.com/arif01925" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/arif01925/" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/arif01925in" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/arif01925/" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
                <i class="fab fa-pinterest"></i>
              </a>
              <a href="https://wa.me/8801925466746" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <!-- Stay in Touch -->
          <div class="md:pl-6">
            <h3 class="font-bold text-lg mb-4">Stay in Touch</h3>
            <p class="text-sm mb-4">
              Get notified about my latest projects, collaborations, and creative updates.
            </p>
            <div class="flex mb-2">
              <input
                type="email"
                placeholder="Your Email Address"
                class="w-full px-3 py-2 rounded-l-md text-black focus:outline-none"
              />
              <button class="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-green-700 text-white">
                Subscribe
              </button>
            </div>
            </div>

        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-700 mt-10 pt-6 text-sm">
          <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-6">
            <p>© {{ currentYear }} Arifur Rahaman. Crafted with passion and pixels.</p>
            <p class="text-xs text-gray-400">Also Available for Creating Apps or Website with 💡 creativity</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.glowing-border {
  background: linear-gradient(270deg, #00f0ff, #ff00e0, #00f0ff);
  background-size: 600% 600%;
  animation: border-glow 8s ease infinite;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
}

@keyframes border-glow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
