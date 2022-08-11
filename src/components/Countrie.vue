<template>
  <section class="col-span-2 bg-gray-200 p-2">
    <div class="bg-white p-5">
      <h1 class="text-4xl text-gray-800">Countrie Details</h1>
      <h2>this is the countri {{id}}</h2>
      <div> 
        <p class="text-gray-800 text-2xl font-bold">{{name}}</p>
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
    </div>
  </section>
</template>

<script>
export default {
    name: "Countrie",
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