<template>
  <div class="border bg-gray-200 p-2 col-span-2" v-if="countries">
    <div class="flex flex-col justify-center content-center bg-white" v-for="countrie in countries" :key="countrie.alpha3Code">
    <!-- banderas -->
          <div v-for="flag in countriesflag.data" :key="flag.name"> 
            <div v-if="flag.name === countrie.name.common">
              <RouterLink :to="`/countries/countrie/${countrie.alpha3Code}`">
                <img class="w-28 mt-5" :src="flag.flag" :alt="flag.name"/>
              </RouterLink>
            </div>
          </div>
        <div class="p-5 m-2 flex flex-col justify-center items-center">
          <p class="text-gray-600 text-2xl uppercase font-bold">{{countrie.name.common}}</p>
         <div class="flex gap-32">
          <span>Capital</span>
          <p class="text-gray-600 text-md">{{countrie.capital[0]}}</p>
         </div>
         <hr width="75%">
         <div class="flex gap-32">
          <span>Area</span>
          <p class="text-gray-600 text-md">{{countrie.area}} km²</p>
         </div>
         <hr width="75%">
         <div class="flex gap-32">
          <div class="flex flex-col" v-if="countrie.borders">
            <div v-for="border in countrie.borders" :key="border" class="text-gray-600 text-md">
              <span>Borders</span>
              <p>{{border}}</p></div>
          </div>
         </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Countrie",
    data() {
        return {
            countries: null,
            countriesflag: null,//datos de otra api para obtener las banderas
            loading: false,
            error: "",
        };
    },
    computed:{
        countrieId(){
            return this.$route.params.countrieId;
        }
    },
    methods: {
      //DATOS COUNTRIES
      async getCountries() {
          this.loading = true; //2.Estado de loading para cuando los datos se estan cargando.
          try {
              const countries = await axios(`https://ih-countries-api.herokuapp.com/countries`);
              this.countries = countries.data;
              console.log(countries.data);
          }
          catch (error) {
              this.error = error;
          }
          finally {
              this.loading = false;
          }
      },
       //IMAGENES
      async getFlag() {
          this.loading = true; //2.Estado de loading para cuando los datos se estan cargando.
          try {
              const countriesflag = await axios("https://countriesnow.space/api/v0.1/countries/flag/images");
              this.countriesflag = countriesflag.data;
          }
          catch (error) {
              this.error = error;
          }
          finally {
              this.loading = false;
          }
      },
    },
    getId(url){
      return url;
    },
    mounted() {
        this.getCountries();
        this.getFlag()
    },
    watch: {
         countrieId(){
             this.getId()
         }
    }
}
</script>