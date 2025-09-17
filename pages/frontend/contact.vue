
<template>
  <div class="text-white">
    <section class="max-w-6xl mx-auto px-6 py-12">
      <div class="border border-[#222] p-10 rounded-2xl mb-12 bg-[#181c2a]">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <!-- Left: Heading and contact info -->
          <div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-8">Get Ready To<br/>Create Great</h2>
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#23263a] border border-[#333]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
                </span>
                <div>
                  <div class="text-gray-300 text-sm">E-mail:</div>
                  <div class="text-white font-medium">arif01925@gmail.com</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#23263a] border border-[#333]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v6m0-6V5" /></svg>
                </span>
                <div>
                  <div class="text-gray-300 text-sm">Location:</div>
                  <div class="text-white font-medium">Delowara Villa, C&B Road, Barishal, Bangladesh.</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#23263a] border border-[#333]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v6m0-6V5" /></svg>
                </span>
                <div>
                  <div class="text-gray-300 text-sm">Contact:</div>
                  <div class="text-white font-medium">+88 0192 546 6746</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">GET IN TOUCH</h3>
            <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" class="p-4 rounded bg-[#181c2a] border border-[#333] text-white placeholder-gray-400" />
              <input type="text" placeholder="Phone Number" class="p-4 rounded bg-[#181c2a] border border-[#333] text-white placeholder-gray-400" />
              <input type="text" placeholder="Your Email" class="p-4 rounded bg-[#181c2a] border border-[#333] text-white placeholder-gray-400 md:col-span-2" />
              <input type="text" placeholder="Subject" class="p-4 rounded bg-[#181c2a] border border-[#333] text-white placeholder-gray-400 md:col-span-2" />
              <textarea placeholder="Your Message" class="col-span-1 md:col-span-2 p-4 rounded bg-[#181c2a] border border-[#333] text-white placeholder-gray-400" rows="5"></textarea>
              <div class="col-span-1 md:col-span-2">
                <button class="w-full bg-pink-500 text-white py-4 rounded-full font-semibold text-lg">Appointment Now →</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  alias: ['/contact'],
  layout: 'default'
})
</script>
