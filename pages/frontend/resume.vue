<template>
  <section class="max-w-6xl mx-auto px-4 py-10 space-y-10">
    <!-- Founder Bio -->
    <div class="bg-white border-2 border-green-400 rounded-xl p-6 md:flex items-center gap-6">
      <img
        src="/about-founder.jpg"
        alt="Karen Alexis Williams"
        class="w-32 h-32 rounded-full border-4 border-yellow-500 object-cover"
      />
      <div class="mt-4 md:mt-0">
        <h2 class="font-bold text-lg">Karen Alexis Williams is the Founder and President of Chef K Product.</h2>
        <p class="mt-2 text-gray-700 text-sm">
          Join us in spreading the love for unique, healthy Mr. Williams’ roots from the parish of Trelawny, Jamaica West Indies.
          The fifth of eleven children of an extremely poor family in the countryside. While he was a go-getter, entering the halls of the local school Home Coming Queen (1982–1986), and the Parish Agricultural Farm Queen (1987).
          She was also the founder of the Trelawny Environmental Protection Association (TEPA). Mrs. Williams also worked for the local sugar and rum manufacturer (Hampden Estates Ltd) as an administrative staff. Before she left Jamaica, she also ran a carwash, restaurant, and bar.
        </p>
        <button class="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Continue Reading
        </button>
      </div>
    </div>

    <!-- Mission Statement -->
    <div class="bg-white border rounded-xl p-6 flex flex-col-reverse md:flex-row items-center gap-6">
      <div class="flex-1">
        <h2 class="font-bold text-lg mb-2">Chef K Product: Mission Statement</h2>
        <p class="text-sm text-gray-700">
          Chef K’s mission is to tackle the changes and expectations of the consumers in the food and beverage industry, by creating a Safe, Gluten-Free, Non-GMO, Halal and Tasty product. And by establishing a dominant Market share in the health and wellness food and beverage industry using natural ingredients. We live the Slogan: “Just the way we brew it.” originally grown and applying innovative manufacturing techniques to extract all nutrients to aide in the prevention of future illnesses. Not to treat, but to prevent in the future. Chef K is introducing recipes of natural drinks from the earth. We are FDA register, BBBs, and Halal.
        </p>
      </div>
      <img src="/about/chef-logo.png" alt="Chef Logo" class="w-24 h-24 rounded-full border-2 border-yellow-500" />
    </div>

    <!-- Vision Statement -->
    <div class="bg-white border-2 border-green-400 rounded-xl p-6">
      <h2 class="font-bold text-lg mb-2">Chef K Product: Our Vision</h2>
      <p class="text-sm text-gray-700">
        Our vision is to create a product line of foods and beverages for customers who are now eating and drinking to take care of a specific type of problem they may have now or want to prevent in the future.
      </p>
    </div>

    <!-- Team Members -->
    <div class="bg-white border rounded-xl p-6 text-center">
      <h2 class="text-xl font-bold mb-2">MEET OUR TEAM MEMBERS</h2>
      <p class="text-sm text-gray-600 mb-6">Explore the whole collection of open-source web components and elements built with Tailwind.</p>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Member 1 -->
        <div class="bg-white border rounded-lg p-4 shadow text-center">
          <img src="/about/karen.jpg" alt="Karen Williams" class="w-20 h-20 mx-auto rounded-full mb-2" />
          <h3 class="font-semibold">Karen Williams</h3>
          <p class="text-sm text-gray-500 mb-1">Founder and President</p>
          <p class="text-xs text-green-700 mb-2">"Drink to your health from the earth." 🌱</p>
          <div class="flex justify-center gap-3 text-green-600 text-sm">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>

        <!-- Member 2 -->
        <div class="bg-white border rounded-lg p-4 shadow text-center">
          <img src="/about/alejandra.jpg" alt="Alejandra Psinh" class="w-20 h-20 mx-auto rounded-full mb-2" />
          <h3 class="font-semibold">Alejandra Psinh</h3>
          <p class="text-sm text-gray-500 mb-1">VP</p>
          <p class="text-xs text-green-700 mb-2">"Most young people are very much healthier from eating from plant base."</p>
          <div class="flex justify-center gap-3 text-green-600 text-sm">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>

        <!-- Member 3 -->
        <div class="bg-white border rounded-lg p-4 shadow text-center">
          <img src="/about/phillip.jpg" alt="Phillip Fraser" class="w-20 h-20 mx-auto rounded-full mb-2" />
          <h3 class="font-semibold">Phillip Fraser</h3>
          <p class="text-sm text-gray-500 mb-1">Operations Manager</p>
          <p class="text-xs text-green-700 mb-2">"Just the way we brew it, with professionalism and love." ❤️</p>
          <div class="flex justify-center gap-3 text-green-600 text-sm">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  alias: ['/about'],
  layout: 'default'
})
</script>
