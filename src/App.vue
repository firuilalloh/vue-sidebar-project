<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="w-full shadow-md bg-slate-100 wrapper fixed">
      <p class="p-3 w-72 bg-slate-300">INFINITY</p>
      </div>
    <div class="text-black w-72 pt-16 h-screen bg-slate-300">
        <h1 class="mx-2 p-3 rounded-md hover:bg-slate-100">Home</h1>
      </div>
  </header>
  <!-- <hr class="mt-14">
      <nav class="flex flex-col mx-5 mt-1 text-white">
        <RouterLink class=" hover:bg-slate-200 p-2 rounded-md mb-1" to="/">Home</RouterLink>
        <RouterLink class=" hover:bg-slate-200 p-2 rounded-md mb-1" to="/about">About</RouterLink>
      </nav> -->
  <!-- <RouterView /> -->
</template>
