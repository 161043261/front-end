<script lang="ts">
export default {
  name: 'Count'
}
</script>

<script lang="ts" setup>
import {ref} from "vue";

let sum = ref<number>(0);
let n = ref<number>(1);

function add() {
  sum.value += n.value;
}

function sub() {
  sum.value -= n.value;
}
</script>

<template>
  <div class="count">
    <h1>sum = {{ sum }}</h1>
    <select v-model.number="n">
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