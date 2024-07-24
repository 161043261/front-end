<script lang="ts">
export default {
  name: 'TagRef'
}
</script>

<script lang="ts" setup>
import {ref} from 'vue';

let htmlTagRef = ref(); // htmlTagRef -> <h1 ref="htmlTagRef">tag ref</h1>
function htmlTagRefLog() {
  console.log(htmlTagRef.value);
}

let a = ref(0);
let b = ref(1);
let c = ref(2);
defineExpose({a: a.value, b: b.value, c: c.value}); // user-defined expose
</script>

<template>
  <div class="tagRef">
    <h1 ref="htmlTagRef">tag ref</h1> <!-- htmlTagRef: scoped id -->
    <button @click="htmlTagRefLog">htmlTagRefLog</button>
  </div>
</template>

<style scoped>
/* scoped stylesheet */
.tagRef {
  background-color: lightgreen;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>