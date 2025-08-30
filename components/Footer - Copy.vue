<template>
  <footer class="px-4 py-10">
    <!-- Glowing border wrapper -->
    <div class="relative p-[2px] glowing-border rounded-2xl">
      <!-- Inner footer content -->
      <div class="bg-[#111827] rounded-2xl p-6 text-white">
        <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo + Description -->
          <div>
            <img src="/logo.png" alt="Chef K Logo" class="w-[75%] mb-4" />
            <p class="text-sm">
              <b>Chef K Products</b> uses only the freshest ingredients from nature.
              Enjoy our sorrel, ginger, turmeric drinks, and jams. 
              <p>Just the way we brew it!</p>
            </p>
          </div>

          <!-- Help -->
          <div>
            <h3 class="font-bold mb-3">HELP</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">How to Track</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3 class="font-bold mb-3">COMPANY</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Store Locations</a></li>
              <li><a href="#">Testimonial</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h3 class="font-bold mb-3">NEWSLETTER</h3>
            <p class="text-sm mb-4">
              Sign up to get the latest updates, discounts, and product launches.
            </p>
            <div class="flex mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                class="w-full px-3 py-2 rounded-l-md text-black focus:outline-none"
              />
              <button class="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-green-700">
                Subscribe
              </button>
            </div>

            <!-- Social Icons -->
            <div class="flex space-x-4 mt-2">
              <a href="#" class="bg-blue-600 rounded-full p-2 transition-transform duration-300 hover:rotate-180">
                <img src="/icons/facebook.svg" alt="Facebook" class="h-5 w-5 invert" />
              </a>
              <a href="#" class="bg-blue-600 rounded-full p-2 transition-transform duration-300 hover:rotate-180">
                <img src="/icons/tiktok.svg" alt="TikTok" class="h-5 w-5 invert" />
              </a>
              <a href="#" class="bg-blue-600 rounded-full p-2 transition-transform duration-300 hover:rotate-180">
                <img src="/icons/instagram.svg" alt="Instagram" class="h-5 w-5 invert" />
              </a>
              <a href="#" class="bg-blue-600 rounded-full p-2 transition-transform duration-300 hover:rotate-180">
                <img src="/icons/linkedin.svg" alt="LinkedIn" class="h-5 w-5 invert" />
              </a>
              <a href="#" class="bg-blue-600 rounded-full p-2 transition-transform duration-300 hover:rotate-180">
                <img src="/icons/pinterest.svg" alt="Pinterest" class="h-5 w-5 invert" />
              </a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-700 mt-10 pt-6 text-sm">
          <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {{ currentYear }} Arifur Rahaman. All rights reserved.</p>
            <img
              src="/images/payment method we accept.png"
              alt="Payment Methods"
              class="h-8"
            />
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
