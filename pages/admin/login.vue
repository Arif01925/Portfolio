<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Admin Login</h2>
      <form @submit.prevent="handleLogin">
        <input
          v-model="email"
          type="email"
          placeholder="Username"
          class="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full mb-4 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          class="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
        >
          Login
        </button>
      </form>
      <p v-if="error" class="mt-4 text-red-600 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = () => {
  if (email.value === 'admin@chefk.com' && password.value === 'admin123') {
    localStorage.setItem('isAdmin', true)
    router.push('/admin/dashboard')
  } else {
    error.value = 'Invalid email or password'
  }
}
</script>
