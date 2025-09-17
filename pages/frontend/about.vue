<template>
  <div class="text-white">
    <!-- Hero -->
  <section class="bg-[url('/images/hero/slide1.png')] bg-cover bg-center py-20 animate-on-scroll" data-index="0">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold">About Me</h1>
        <nav class="text-sm text-gray-400 mt-3">Home <span class="text-pink-400">/ About Me</span></nav>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-12">
      <!-- Service cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f] text-center animate-on-scroll" data-index="1">
          <div class="text-pink-400 mb-4">🔧</div>
          <h4 class="font-semibold">Web Design</h4>
          <p class="text-sm text-gray-400">120 Projects</p>
        </div>

        <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f] text-center">
          <div class="text-pink-400 mb-4">⚙️</div>
          <h4 class="font-semibold">Ui/Ux Design</h4>
          <p class="text-sm text-gray-400">241 Projects</p>
        </div>

        <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f] text-center">
          <div class="text-pink-400 mb-4">💡</div>
          <h4 class="font-semibold">Web Research</h4>
          <p class="text-sm text-gray-400">240 Projects</p>
        </div>

        <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f] text-center">
          <div class="text-pink-400 mb-4">✉️</div>
          <h4 class="font-semibold">Marketing</h4>
          <p class="text-sm text-gray-400">331 Project</p>
        </div>
      </div>

      <!-- Skills -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-xl font-semibold mb-4 animate-on-scroll" data-index="5">Design Skill</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1"><span>PHOTOSHOP</span><span>100%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="100" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>

            <div>
              <div class="flex justify-between mb-1"><span>FIGMA</span><span>95%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="95" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>

            <div>
              <div class="flex justify-between mb-1"><span>ADOBE XD</span><span>60%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="60" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>

            <div>
              <div class="flex justify-between mb-1"><span>ADOBE ILLUSTRATOR</span><span>70%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="70" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-4 animate-on-scroll" data-index="9">Development Skill</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1"><span>PHOTOSHOP</span><span>100%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="100" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>

            <div>
              <div class="flex justify-between mb-1"><span>FIGMA</span><span>95%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="95" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>

            <div>
              <div class="flex justify-between mb-1"><span>ADOBE XD</span><span>60%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="60" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>

            <div>
              <div class="flex justify-between mb-1"><span>ADOBE ILLUSTRATOR</span><span>70%</span></div>
              <div class="bg-[#111] h-2 rounded-md"><div data-progress="70" class="progress-bar bg-pink-500 h-2 rounded-md w-0"></div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats & Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="md:col-span-2 bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f]">
          <h3 class="text-2xl font-bold mb-4">25 Years Of Experience</h3>
          <p class="text-gray-400">Business consulting consultants provide expert advice and guide the a businesses to help theme their performance efficiency.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="bg-[#0b0b0b] p-4 rounded-xl border border-[#1f1f1f] animate-on-scroll" data-index="6">
              <h4 class="font-semibold"><span class="stat-counter" data-target="20000">0</span>+</h4>
              <p class="text-sm text-gray-400">Our Project Complete</p>
            </div>
            <div class="bg-[#0b0b0b] p-4 rounded-xl border border-[#1f1f1f] animate-on-scroll" data-index="7">
              <h4 class="font-semibold"><span class="stat-counter" data-target="10000">0</span>+</h4>
              <p class="text-sm text-gray-400">Our Natural Products</p>
            </div>
            <div class="bg-[#0b0b0b] p-4 rounded-xl border border-[#1f1f1f] animate-on-scroll" data-index="8">
              <h4 class="font-semibold"><span class="stat-counter" data-target="200">0</span>+</h4>
              <p class="text-sm text-gray-400">Clients Reviews</p>
            </div>
            <div class="bg-[#0b0b0b] p-4 rounded-xl border border-[#1f1f1f] animate-on-scroll" data-index="9">
              <h4 class="font-semibold"><span class="stat-counter" data-target="1000">0</span>+</h4>
              <p class="text-sm text-gray-400">our Satisfied Clientd</p>
            </div>
          </div>
        </div>

        <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f]">
          <h4 class="font-semibold">Education</h4>
          <p class="text-sm text-gray-400">Trainer Marketing 2005-2009</p>
          <p class="text-sm text-gray-400 mt-2">Assistant Director 2010-2014</p>
          <p class="text-sm text-gray-400 mt-2">Design Assistant 2008-2012</p>
        </div>
      </div>

      <!-- Experiences + Pricing + Contact form -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 space-y-6">
          <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f]">
            <h4 class="font-semibold">Experience</h4>
            <div class="mt-4">
              <h5 class="font-semibold">Fatima Asrafy</h5>
              <p class="text-sm text-gray-400">UI/UX Designer</p>
              <p class="text-sm text-gray-400 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure</p>
            </div>
          </div>

          <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f]">
            <h4 class="font-semibold">Pricing Plans</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f] text-center">
                <h5 class="text-2xl font-bold mb-2">$ 5.00</h5>
                <p class="text-sm text-gray-400">Starter</p>
                <button class="mt-4 bg-blue-600 px-4 py-2 rounded">Get Started</button>
              </div>

              <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f] text-center">
                <h5 class="text-2xl font-bold mb-2">$ 230.00</h5>
                <p class="text-sm text-gray-400">Basic</p>
                <button class="mt-4 bg-blue-600 px-4 py-2 rounded">Get Started</button>
              </div>

              <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f] text-center">
                <h5 class="text-2xl font-bold mb-2">$ 45.00</h5>
                <p class="text-sm text-gray-400">Premium</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f]">
          <h4 class="font-semibold">Contact</h4>
          <form class="space-y-4 mt-4">
            <input type="text" placeholder="Your Name" class="w-full p-3 rounded bg-[#0b0b0b] border border-[#1f1f1f]" />
            <input type="text" placeholder="Phone Number" class="w-full p-3 rounded bg-[#0b0b0b] border border-[#1f1f1f]" />
            <input type="text" placeholder="Your Email" class="w-full p-3 rounded bg-[#0b0b0b] border border-[#1f1f1f]" />
            <input type="text" placeholder="Subject" class="w-full p-3 rounded bg-[#0b0b0b] border border-[#1f1f1f]" />
            <textarea placeholder="Your Message" class="w-full p-3 rounded bg-[#0b0b0b] border border-[#1f1f1f]" rows="4"></textarea>
            <button class="bg-blue-600 px-6 py-3 rounded w-full">Appointment Now</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Static about page — no script
</script>