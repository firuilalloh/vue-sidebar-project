<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <i class="fixed bottom-0 text-red-600 text-9xl right-5 bi bi-youtube"></i>
    <i class="fixed mt-4 ml-4 text-2xl text-white animate-bounce bi bi-box-seam"></i>
    <div class="flex justify-end h-screen p-3 bg-gradient-to-r from-indigo-500 to-indigo-300">
        <div class="">
          <router-link class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300" to="/">home</router-link>
          <router-link class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300" to="/team">team</router-link>
          <router-link class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300" to="/project">project</router-link>
          <router-link class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300" to="/about">about</router-link>
          <button class="p-2 ml-5 mr-16 font-semibold text-white uppercase duration-300 bg-indigo-500 rounded-full hover:scale-110 hover:bg-indigo-700 hover:transition">get started</button>
        </div>
    </div>
  </header>
  <!-- <RouterView /> -->
</template>
