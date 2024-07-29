// correspond to ../components/pinia/Count.vue
import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  // action functions
  actions: {
    addSum(delta: number) {
      this.sum += delta
    }
  },
  state() {
    return {
      sum: 0,
      n: 0
    }
  },
  getters: {
    big(state) {
      return 10 * state.sum
    },

    bigger(): number {
      return 100 * this.sum
    },

    biggest: state => 1000 * state.sum
  }
})
