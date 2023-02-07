<script setup>
import { RouterView } from 'vue-router';
import Navbar from './element/Navbar.vue'
</script>

<template>
  <header class="relative">
    <Navbar />
    <RouterView />
  </header>
</template>
