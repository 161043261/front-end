<script lang="ts">
export default {
  name: 'Count'
}
</script>

<script lang="ts" setup>
import {useCountStore} from '@/store/count';

const countStore = useCountStore(); // countStore is a reactive object
console.log(countStore.sum/* recommend */, countStore.$state.sum);

// Method 2. update countStore (recommend)
countStore.$patch({sum: 1, n: 1}); // countStore.sum = 100; countStore.n = 1
countStore.increment(1); // Method 2. update countStore (deprecated)
function add() {
  countStore.sum += countStore.n; // Method 1. update countStore
}

function sub() {
  countStore.sum -= countStore.n;
}
</script>

<template>
  <div class="count">
    <h1>sum = {{ countStore.sum }}</h1>
    <select v-model.number="countStore.n">
      <option v-bind:value="1">1</option>
      <option v-bind:value="2">2</option>
      <option v-bind:value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<style scoped>
.count {
  background-color: lightblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
}
</style>