// correspond to ../components/pinia/Cat.vue
import {defineStore} from 'pinia';

export const useCatStore = defineStore('cats', {
    state() {
        return {
            urlList: [
                {id: '1', title: 'Express => https://expressjs.com/'},
                {id: '2', title: 'React => https://react.dev/'},
                {id: '3', title: 'Vue => https://vuejs.org/'}
            ]
        }
    }
});