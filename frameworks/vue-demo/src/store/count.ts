// correspond to ../components/pinia/Count.vue
import {defineStore} from 'pinia';

export const useCountStore = defineStore('count', {
    // action functions
    actions: {
        addSum(delta: number) {
            this.sum += delta;
        }
    },
    state() {
        return {
            sum: 0,
            n: 0
        }
    }
});
