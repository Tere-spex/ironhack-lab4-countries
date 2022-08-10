<template>
  <section class="col-span-2 bg-blue-600 p-5 mr-24">
    <h1>Details</h1>
    <div> 
      <p class="text-gray-800 text-4xl font-bold">{{name}}</p>
      <p>Capital {{ capital }}</p>
      <p>Area {{area}}</p>
      <p>{{id}}</p>
      <div class="flex gap-5">
        <div><p>Borders</p></div>
        <div v-for="border in borders" :key="border">
          <p>{{border}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Details",
    props:{
        name: String,
        capital: String,
        area: String,
        id: String,
        border: Object,
    },

}
</script>

<style>

</style>