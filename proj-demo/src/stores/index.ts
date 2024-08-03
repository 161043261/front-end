import { defineStore } from 'pinia'
import { computed, type ComputedRef, ref } from 'vue'

// Option API
export const _useTokenStore = defineStore('token', {
  state() { // method
    return { token: sessionStorage.getItem('token') || '' }
  },

  getters: { // methods
    jwtString(state) {
      console.log('get jwtString')
      return state.token
    }
  },

  actions: { // methods
    setToken(newToken: string) {
      this.token = newToken
    },

    removeToken() {
      this.token = ''
    }
  }
})

// Composition API
export const useTokenStore = defineStore('token', () => {

  // ********** state **********
  const token = ref(sessionStorage.getItem('token') || '')

  // ********** getters (redundant) **********
  const jwtString: ComputedRef<string> = computed(() => {
    console.log('get jwtString')
    return token.value
  })

  // ********** actions (setters) **********
  function setToken(newToken: string) {
    token.value = newToken
  }

  function removeToken() {
    token.value = ''
  }

  return { token, jwtString, setToken, removeToken }
}, { persist: true }) // options
