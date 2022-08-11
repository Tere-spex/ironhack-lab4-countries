<template>
  <div class="uppercase font-bold m-5">
    <h1 class="text-4xl font-extrabold text-gray-800">Countries</h1>
  </div>
  <div class="text-center" v-if="loading"> <!--3.Estado de loading para cuando los datos se estan cargando.-->
   <svg role="status" class="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
   </svg>
  </div>
  <div v-if="error" class="text-red-600">{{ error }}</div>
  <section class="grid grid-cols-3">
    <div class="bg-gray-200" v-if="countries">
      <div class="flex-col" v-for="countrie in countries" :key="countrie.alpha2Code">
        <div class="bg-white p-5 m-2">
          <p class="text-gray-600 text-md">
            <RouterLink :to="`/countries/countrie/${countrie.alpha2Code}`">
              <p>{{countrie.name.common}}</p>
            </RouterLink>
          </p>
          <!-- banderas -->
          <div v-for="flag in countriesflag.data" :key="flag.name"> 
            <div v-if="flag.name === countrie.name.common">
              <RouterLink :to="`/countries/countrie/${countrie.alpha2Code}`">
                <img class="w-28" :src="flag.flag" :alt="flag.name"/>
              </RouterLink>
              <!-- {{flag.name}} -->
            </div>
          </div>
        </div>
      </div>
    </div>
    
       <Countrie v-for="countrie in countries" :key="countrie.alpha2Code"
      :name="countrie.name.common"
      :capital="countrie.capital[0]"
      :area="countrie.area"
      :id="countrie.alpha2Code"
      :borders="countrie.borders"
    />
  </section>
</template>

<script>
import axios from "axios";
import Countrie from "../components/Countrie.vue";
export default {
    name: "Countries",
    components: { 
      Countrie, 
    },
    data() {
        return {
            countries: null,
            countriesflag: null,//datos de otra api para obtener las banderas
            loading: false,
            error: "",
        };
    },
    methods: {
        //DATOS COUNTRIES
        async getCountries() {
            this.loading = true; //2.Estado de loading para cuando los datos se estan cargando.
            try {
                const countries = await axios("https://ih-countries-api.herokuapp.com/countries/");
                this.countries = countries.data;
                // console.log(countries.data);
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
    mounted() {
        this.getCountries();
        this.getFlag();
    },
}
</script>

<style scoped>

</style>