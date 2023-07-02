<script setup lang="ts">
import BurgerButton from '../icons/BurgerButton.vue'

interface MenuProps {
  showMenu: boolean
}

withDefaults(defineProps<MenuProps>(), {
  showMenu: true
})

const emit = defineEmits(['toggleMenu'])
</script>

<template>
  <div class="sidebar transition-width duration-300" :class="showMenu ? 'sidebar--open' : 'sidebar--closed'">
    <div class="sidebar__header">
      <span></span>
      <h1 v-show="showMenu" class="text-2xl font-bold justify-self-center">Menu</h1>
      <BurgerButton @click="emit('toggleMenu')" />
    </div>
    <div class="sidebar__container">
      
    </div>
  </div>
</template>

<style>
</style>
