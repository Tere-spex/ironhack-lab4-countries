import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => {
    return { 
        name: 'Michael',
        lastName: 'Araya',
        password: '1234',
    }
  },
  actions: {
    userInfo() {
      this.userName + this.lastName;
    },
  },
})