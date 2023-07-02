<script setup lang="ts">
import { ref, type Ref } from 'vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutSidebar from './LayoutSidebar.vue';

const showMenu: Ref<boolean> = ref(true)
</script>

<template>
  <div class="flex">
    <LayoutSidebar :show-menu="showMenu" @toggle-menu="showMenu = !showMenu" />
    <div class="w-full">
      <LayoutHeader />
      <div class="container px-8 py-6">
        <slot />
      </div>
    </div>
  </div>
</template>