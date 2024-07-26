// correspond to ../components/pinia/Url.vue
import {defineStore} from 'pinia';
import axios from "axios";
import {nanoid} from "nanoid";

export const useUrlStore = defineStore('url', {
    actions: {
        async addUrl() {
            let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
            let cat = {id: nanoid(), title: data[0].url as string}
            this.urlList.unshift(cat)
        }
    },
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