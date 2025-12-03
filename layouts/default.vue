<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950">
    <!-- Header -->
    <header class="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white shadow-lg">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        
        <!-- Logo o título con GIF a la izquierda -->
        <h1 class="text-2xl font-bold flex items-center gap-2 drop-shadow-lg">
          <img :src="wizGif" alt="Painting wizard" class="w-32 h-30"/>
          Paint Like a Wiz
        </h1>

        <!-- Botones -->
        <nav class="space-x-4">
          <NuxtLink to="Canvas" class="btn bg-purple-200 text-purple-800 border-purple-300 hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 font-semibold">Draw here!</NuxtLink>
          <NuxtLink to="about" class="btn bg-purple-200 text-purple-800 border-purple-300 hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 font-semibold">About me</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="flex-grow p-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-gray-200 p-4 text-center shadow-lg">
      &copy; 2025 Paint Like a Wiz. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
const wizGif = '/Icon Wiz.gif'; 
</script>
