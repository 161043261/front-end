<script lang="ts">
export default {
  name: 'Cats'
}
</script>

<script lang="ts" setup>
import {reactive} from "vue";
import useCat from "@/hooks/useCat";
import axios from "axios";
import {nanoid} from "nanoid";

let textList = reactive([
  {id: '1', title: 'Express => https://expressjs.com/'},
  {id: '2', title: 'React => https://react.dev/'},
  {id: '3', title: 'Vue => https://vuejs.org/'}
])
const {catList, addCat} = useCat();

async function addText() {
  let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
  let cat = {id: nanoid(), title: data[0].url as string}
  console.log(cat);
  textList.unshift(cat)
}
</script>

<template>
  <div class="cats">
    <ul>
      <li v-for="text in textList" :key="text.id">{{ text }}</li>
    </ul>
    <button @click="addText">add Text</button>
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
