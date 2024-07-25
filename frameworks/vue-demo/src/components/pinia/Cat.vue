<script lang="ts">
export default {
  name: 'Cat'
}
</script>

<script lang="ts" setup>
import {reactive} from "vue";
import useCat from "@/hooks/useCat";
import axios from "axios";
import {nanoid} from "nanoid";
import {useCatStore} from "@/store/cat";
//
// pinia
//
const catStore = useCatStore();
const {catList, addCat} = useCat();

async function addUrl() {
  let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
  let cat = {id: nanoid(), title: data[0].url as string}
  console.log(cat);
  // urlList.unshift(cat)
}
</script>

<template>
  <div class="cats">
    <ul>
      <li v-for="url in catStore.urlList" :key="url.id">{{ url }}</li>
    </ul>
    <button @click="addUrl">add url</button>
    <br>
    <img v-for="(cat, index) in catList" v-bind:key="index" v-bind:src="cat"/><br/>
    <button @click="addCat">add cat</button>
  </div>
</template>

<style scoped>
.cats {
  background-color: lightpink;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

img {
  height: 100px;
  margin-right: 10px;
}
</style>
