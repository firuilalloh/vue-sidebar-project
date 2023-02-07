<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <i class="fixed mt-4 ml-4 text-2xl text-white animate-bounce bi bi-box-seam"></i>
        <div class="flex justify-end h-screen pt-6 pr-10 bg-gradient-to-r from-indigo-500 to-indigo-300 font-montserrat">
            <div class="">
                <router-link
                    class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300 hover:underline decoration-2 underline-offset-4"
                    to="/">home</router-link>
                <router-link
                    class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300 hover:underline decoration-2 underline-offset-4"
                    to="/team">portfolio</router-link>
                <router-link
                    class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300 hover:underline decoration-2 underline-offset-4"
                    to="/project">project</router-link>
                <router-link
                    class="p-3 font-semibold text-white uppercase duration-300 hover:transition hover:text-sky-300 hover:underline decoration-2 underline-offset-4"
                    to="/about">contact us</router-link>
            </div>
        </div>
    </header>
</template>