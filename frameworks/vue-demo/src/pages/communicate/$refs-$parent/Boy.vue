<script lang="ts" setup>
import {ref} from "vue";

let computer = ref('Lenovo');
let age = ref(5);

defineExpose({computer, age});
</script>

<script lang="ts">
export default {
  name: 'Boy'
}
</script>

<template>
  <div class="boy">
    <p>@/pages/communicate/$refs-$parent/Boy.vue</p>
    <p>computer: {{ computer }}</p>
    <p>age: {{ age }}</p>
  </div>
</template>

<style scoped>
.boy {
  margin-top: 20px;
  background-color: lightcyan;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>