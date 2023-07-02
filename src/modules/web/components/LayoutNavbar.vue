<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="navbar">
    <h1 class="py-6 text-2xl font-bold">Portfolio</h1>
    <ul class="navbar__content">
      <RouterLink to="/" class="py-6 px-8">Profile</RouterLink>
      <RouterLink to="/skills" class="py-6 px-8">Skills</RouterLink>
      <RouterLink to="/experiences" class="py-6 px-8">Work Experiences</RouterLink>
      <RouterLink to="/projects" class="py-6 px-8">Projects</RouterLink>
    </ul>
  </nav>
</template>