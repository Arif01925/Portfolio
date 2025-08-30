export default defineNuxtConfig({
  css: ['vue-toastification/dist/index.css'],
  plugins: ['~/plugins/toast.client.ts'],
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
