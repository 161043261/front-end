import { defineStore } from 'pinia'
import { computed, type ComputedRef, type Ref, ref } from 'vue'
import type { Profile } from '@/types'

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

export const useProfileStore = defineStore('profile', () => {
  // state
  const profile: Ref<Profile> = ref({
    username: 'Administrator'
  })

  function setProfile(newProfile: Profile) {
    profile.value = newProfile
  }

  function removeProfile() {
  }

  return { profile, setProfile, removeProfile }
}, { persist: true })
