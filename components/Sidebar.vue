<template>
  <aside class="fixed left-0 top-0 w-1/5 h-screen flex items-center">
    <!-- Glowing border shell -->
    <div class="relative p-[2px] rounded-2xl glowing-border">
      <!-- Inner card with your info -->
      <div class="bg-[#111827] rounded-2xl p-8 text-white shadow-lg">
        <div class="flex flex-col items-center text-center">
          <img
            src="https://mcusercontent.com/f2f8f3acd26a96e38ec184680/images/7f3e7375-5fa6-3712-3a73-46efcb7b0a23.jpg"
            alt="Profile"
            class="rounded-lg w-full aspect-square object-cover mb-4"
          />
          <h2 class="text-5xl font-bold leading-tight">Arifur Rahaman</h2>
          <div class="bg-[#0f172a] rounded-md p-2 mt-2 text-sm text-white text-center space-y-1">
          <p class="text-base text-gray-300 flex items-center justify-center gap-1 font-medium">
  Available for Work <span class="text-green-500 text-sm">●</span>
</p>

          <p class="text-sm font-bold text-white">
          Freelance <span class="typed-role text-blue-400 text-base"></span>
          </p>

          </div>
          <div class="bg-[#0f172a] rounded-md p-2 mt-2 text-sm text-white text-center space-y-1">
          <p>Phone: +8801925466746</p>
          <p>Email: arif01925@gmail.com</p>
          </div>


          <div class="flex justify-center space-x-4 my-4">
          <a href="https://wa.me/8801925466746" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
          <i class="fab fa-whatsapp"></i>
          </a>
          <a href="https://facebook.com/arif01925" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
          <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/arif01925in" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
          <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/arif01925/" target="_blank" class="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 text-white">
          <i class="fab fa-linkedin"></i>
          </a>
          </div>

          <button class="w-full py-2 bg-blue-600 rounded hover:bg-blue-700 font-semibold">
            Download My CV
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { onMounted } from 'vue'
import Typed from 'typed.js'

onMounted(() => {
  const options = {
    strings: ['Graphic Designer', 'UGC Creator', 'Virtual Assistant', 'AI Tools Expert'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  }

  new Typed('.typed-role', options)
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Glowing animated border */
.glowing-border {
  background: linear-gradient(270deg, #00f0ff, #ff00e0, #00f0ff);
  background-size: 600% 600%;
  animation: border-glow 8s ease infinite;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
}

/* Animate background gradient */
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

