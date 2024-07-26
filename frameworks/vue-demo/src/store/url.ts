// correspond to ../components/pinia/Url.vue
import {defineStore} from 'pinia';
import axios from "axios";
import {nanoid} from "nanoid";
import {reactive} from "vue";

export const _useUrlStore = defineStore('url', {
    actions: {
        async addUrl() {
            let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
            let cat = {id: nanoid(), title: data[0].url as string}
            this.urlList.unshift(cat)
        }
    },
    state() {
        return {
            // JSON.parse(null) = null; null || [] = [];
            urlList: JSON.parse(localStorage.getItem('urlList') as string) || []
        }
    }
});

export const useUrlStore = defineStore('url', () => {
    const urlList = reactive(JSON.parse(localStorage.getItem('urlList') as string) || [])

    async function addUrl() {
        let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
        let cat = {id: nanoid(), title: data[0].url as string}
        urlList.unshift(cat)
    }

    return {urlList, addUrl}
});