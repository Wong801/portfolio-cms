<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutNavbar from './components/LayoutNavbar.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import { onMounted } from 'vue';
import { useUserStore } from '../../stores/user';

const userStore = useUserStore()

onMounted(async () => {
  await userStore.getProfile()
})
</script>

<template>
  <LayoutNavbar />
  <RouterView />
  <LayoutFooter />
</template>
