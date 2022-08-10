<template>
  <nav>
    <RouterLink class="link" :to="`/`">Home</RouterLink>
    <RouterLink class="link" :to="`/countries`">Countries</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
</script>

<style scoped>
nav{
  display: flex;
  justify-content: center;
  background-color: rgb(235, 235, 235);
  padding: 25px;
}
.link{
  color: rgb(114, 114, 114);
  text-decoration: none;
  font-weight: bold;
  margin: 25px;
}
</style>
