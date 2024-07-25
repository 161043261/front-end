// correspond to ../components/pinia/Count.vue
import {defineStore} from 'pinia';

export const useCountStore = defineStore('count', {
    // action functions
    actions: {
        increment(deltaSum: number) {
            this.sum += deltaSum;
        }
    },
    state() {
        return {
            sum: 0,
            n: 0
        }
    }
});
