<script lang="ts">
export default {
  name: 'Url'
}
</script>

<script lang="ts" setup>
import {useUrlStore} from "@/store/url";
import {storeToRefs} from "pinia";
//
// pinia
//
const urlStore = useUrlStore();
const {urlList} = storeToRefs(urlStore);
urlStore.$subscribe((mutation, state) => {
  console.log(mutation, state);
  localStorage.setItem('urlList', JSON.stringify(state.urlList));
})
</script>

<template>
  <div class="cats">
    <ul>
      <li v-for="url in urlList" :key="url.id">{{ url }}</li>
    </ul>
    <button @click="urlStore.addUrl">add url</button>
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
