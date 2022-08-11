<template>
  <nav class="flex justify-center bg-gray-300 text-gray-800 font-bold p-5 gap-5">
    <RouterLink :to="`/`">HOME</RouterLink>
    <RouterLink :to="`/countries`">COUNTRIES</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
</script>

<style scoped>
</style>
