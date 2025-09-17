<template>
  <section class="max-w-6xl mx-auto px-4 py-10 space-y-10">

      <!-- Education + Experiences sections -->
      <div class="mt-10">
        <h2 class="text-3xl font-bold text-white mb-6 animate-on-scroll" data-index="0">Education</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="resume-card p-6 rounded-2xl animate-on-scroll" data-index="1">
            <h3 class="text-lg font-semibold text-white mb-2">Trainer Marketing</h3>
            <p class="text-blue-600 font-bold mb-3">2005-2009</p>
            <p class="text-gray-400">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
          </div>

          <div class="resume-card p-6 rounded-2xl animate-on-scroll" data-index="2">
            <h3 class="text-lg font-semibold text-white mb-2">Assistant Director</h3>
            <p class="text-blue-600 font-bold mb-3">2010-2014</p>
            <p class="text-gray-400">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs.</p>
          </div>

          <div class="resume-card p-6 rounded-2xl animate-on-scroll" data-index="3">
            <h3 class="text-lg font-semibold text-white mb-2">Design Assistant</h3>
            <p class="text-blue-600 font-bold mb-3">2008-2012</p>
            <p class="text-gray-400">I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.</p>
          </div>

          <div class="resume-card p-6 rounded-2xl animate-on-scroll" data-index="4">
            <h3 class="text-lg font-semibold text-white mb-2">Design Assistant</h3>
            <p class="text-blue-600 font-bold mb-3">2008-2012</p>
            <p class="text-gray-400">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs a personal.</p>
          </div>
        </div>
      </div>

      <div class="mt-12 md:flex items-start gap-8">
        <div class="md:w-1/2">
          <img src="https://mcusercontent.com/f2f8f3acd26a96e38ec184680/images/d4b41f09-7f3a-f4e9-90eb-89bd5672c91c.png" alt="Product bottle" class="w-full rounded-3xl object-cover shadow-lg animate-on-scroll" data-index="5" />
        </div>

        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold text-white mb-6 animate-on-scroll" data-index="6">Experiences</h2>

          <div class="space-y-8">
            <div class="experience-item animate-on-scroll" data-index="7">
              <span class="text-blue-600 uppercase text-sm font-semibold">experience</span>
              <h3 class="text-2xl font-bold text-white mt-2">Fatima Asrafy</h3>
              <p class="text-gray-400">UI/UX Designer</p>
              <p class="text-gray-500 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatur Duis aute irure</p>
            </div>

            <div class="experience-item animate-on-scroll" data-index="8">
              <span class="text-blue-600 uppercase text-sm font-semibold">experience</span>
              <h3 class="text-2xl font-bold text-white mt-2">Fatima Asrafy</h3>
              <p class="text-gray-400">UI/UX Designer</p>
              <p class="text-gray-500 mt-3">Interested in working together? Let's bring your ideas to life! Contact me, and let's start building something.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
</template>

<script setup>
definePageMeta({
  alias: ['/resume'],
  layout: 'default'
})
</script>

<style scoped>
.resume-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

.resume-card:hover {
  border-image-source: linear-gradient(90deg,#ff2d6f,#ff7aa2);
  border-image-slice: 1;
  box-shadow: 0 10px 30px rgba(255,45,111,0.06);
}

.experience-item .text-pink-400 {
  color: #ff2d6f;
}

.experience-item h3 {
  letter-spacing: -0.5px;
}

img.rounded-3xl {
  border-radius: 24px;
}
</style>
