<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const userStore = useUserStore()

const logout = async () => {
  await userStore.logout()
  return router.push({
      name: 'login'
  })
}

onMounted(async () => {
  await userStore.getProfile()
})
</script>

<template>
  <header class="header">
    <h4 class="text-xl">Welcome, <strong>{{ userStore.user.username }}</strong></h4>
    <button @click="logout" class="underline ml-4 text-md hover:font-bold">Logout</button>
  </header>
</template>