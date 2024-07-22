<script lang="ts">
export default {
  name: "WatchRefPrimaryValue",
}
</script>

<script setup lang="ts">
import {ref, watch} from 'vue';

let sum = ref(0);

function changeSum() {
  (sum.value)++;
}

const stopWatching = watch(sum, (newValue, oldValue) => {
  console.log(oldValue, '->', newValue);
  if (newValue > 10) {
    stopWatching();
  }
})
</script>

<template>
  <div class="watchRefPrimaryValue">
    <h1>watch ref(primaryValue)</h1>
    <h2>sum = {{ sum }}</h2>
    <button @click="changeSum">sum++</button>
  </div>
</template>

<style scoped>
.watchRefPrimaryValue {
  background-color: lightsalmon;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>