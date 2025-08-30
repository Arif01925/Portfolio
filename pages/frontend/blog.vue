<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <h1 class="text-2xl font-bold mb-4">BE A PARTNER WITH US</h1>

    <p class="mb-4">
      <strong>Be a Partner with Chef K Product</strong><br />
      Join us in spreading the love for unique, healthy beverage products. Partner with Chef K Product to offer exceptional, natural drinks to your customers. Our products are known for their quality and health-conscious choices.
    </p>

    <p class="mb-4"><strong>Partner with Us:</strong></p>
    <ul class="list-disc list-inside mb-6 space-y-1">
      <li><strong>Retailers and Distributors:</strong> Expand your product portfolio with our unique beverages.</li>
      <li><strong>Food Service Providers:</strong> Elevate your menu with our distinctive flavors.</li>
      <li><strong>Collaborations:</strong> Let’s create something extraordinary together.</li>
    </ul>

    <form class="bg-gray-100 p-6 rounded-lg shadow space-y-4">
      <div class="grid md:grid-cols-2 gap-4">
        <input type="text" placeholder="Enter Full Name" class="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Enter Email Address" class="w-full border px-4 py-2 rounded" />
        <input type="tel" placeholder="Enter Phone" class="w-full border px-4 py-2 rounded" />
      </div>

      <!-- Dynamic Country & State -->
      <div class="grid md:grid-cols-2 gap-4">
        <select v-model="selectedCountry" class="w-full border px-4 py-2 rounded">
          <option disabled value="">Choose a country</option>
          <option v-for="country in countryList" :key="country.name" :value="country.name">
            {{ country.name }}
          </option>
        </select>

        <select v-model="selectedState" class="w-full border px-4 py-2 rounded" :disabled="!selectedCountry">
          <option disabled value="">Select a State</option>
          <option v-for="state in filteredStates" :key="state.name" :value="state.name">
            {{ state.name }}
          </option>
        </select>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <input type="text" placeholder="Enter Zip Code" class="w-full border px-4 py-2 rounded" />
        <input type="text" placeholder="Enter City" class="w-full border px-4 py-2 rounded" />
      </div>

      <textarea rows="3" placeholder="Enter Address" class="w-full border px-4 py-2 rounded"></textarea>

      <div class="grid md:grid-cols-2 gap-4">
        <select class="w-full border px-4 py-2 rounded">
          <option disabled selected>How did you hear about us?</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Search Engine</option>
          <option>Referral</option>
        </select>

        <select class="w-full border px-4 py-2 rounded">
          <option disabled selected>Choose Business Type</option>
          <option>Retailer</option>
          <option>Distributor</option>
          <option>Food Service</option>
        </select>
      </div>

      <textarea rows="4" placeholder="Enter Provide Your Business Proposal" class="w-full border px-4 py-2 rounded"></textarea>

      <div class="text-center pt-4">
        <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import countriesData from '~/assets/data/countries.json'

definePageMeta({
  alias: ['/partner'],
  layout: 'default'
})

const selectedCountry = ref('')
const selectedState = ref('')
const countryList = ref([])
const stateMap = ref({})

// Load country list and map states
onMounted(() => {
  countryList.value = countriesData

  // Convert states to lookup by country name
  countriesData.forEach(country => {
    stateMap.value[country.name] = country.states || []
  })
})

const filteredStates = computed(() => {
  return stateMap.value[selectedCountry.value] || []
})
</script>
