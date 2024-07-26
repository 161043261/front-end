// correspond to ../components/pinia/Cat.vue
import {defineStore} from 'pinia';
import axios from "axios";
import {nanoid} from "nanoid";
import {reactive} from "vue";

export const _useCatStore = defineStore('cat', {
    actions: {
        async addCat() {
            let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
            let cat = {id: nanoid(), title: data[0].cat as string}
            this.catList.unshift(cat)
        }
    },
    state() {
        return {
            // JSON.parse(null) = null; null || [] = [];
            catList: JSON.parse(localStorage.getItem('catList') as string) || []
        }
    }
});

export const useCatStore = defineStore('cat', () => {
    const catList = reactive(JSON.parse(localStorage.getItem('catList') as string) || [])

    async function addCat() {
        let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
        let cat = {id: nanoid(), title: data[0].cat as string}
        catList.unshift(cat)
    }

    return {catList, addCat}
});