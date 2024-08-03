import { defineStore } from 'pinia'
import { computed, type ComputedRef, ref } from 'vue'

export const useTokenStore = defineStore('token', () => {

  // ********** state **********
  const stateToken = ref('')

  // ********** getters (redundant) **********
  const token: ComputedRef<string> = computed(() => {
    console.log('get stateToken', stateToken.value)
    return stateToken.value
  })

  // ********** actions (setters) **********
  function setToken(newToken: string) {
    stateToken.value = newToken
  }

  function removeToken() {
    stateToken.value = ''
  }

  return { stateToken, token, setToken, removeToken }
})
