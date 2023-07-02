<script setup lang="ts">
import { useUserStore } from '../../../stores/user'

const store = useUserStore()

const profile = store.user
</script>

<template>
  <div class="px-24 py-56">
    <div class="flex justify-between px-24">
      <div>
        <h1 class="text-3xl">Hi, I am <strong>{{ store.fullName }}</strong></h1>
        <div v-html="profile.desc" class="my-8"></div>
      </div>
      <img src="../assets/profile.jpeg" alt="profile" class="rounded-full h-96 w-96">
    </div>
  </div>
</template>