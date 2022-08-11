<template>
  <div class="flex flex-col justify-center bg-purple-600">
    <h1 class="text-4xl font-extrabold text-gray-800">Home page</h1>
    <h2 class="mt-5 font-bold text-2xl">Bienvenido {{user.name}} {{user.lastName}}!</h2>
    {{user.userInfo()}}
  </div>
</template>

<script>
//datos obtenidos desde pinia store
import { useUsersStore } from '../store/users'
export default {
  setup() {
    const user =  useUsersStore();
    const userInfo = user.userInfo()
    return {user, userInfo}
  },
}
</script>

<style scoped>
  div{
    align-items: center;
    height: calc(100vh - 64px);
  }
</style>