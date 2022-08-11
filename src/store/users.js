import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => {
    return { 
        name: 'Michael',
        lastName: 'Araya',

    }
  },
  actions: {
    userInfo() {
      const fulname = this.name + " " + this.lastName;
      return fulname
    },
  },
})