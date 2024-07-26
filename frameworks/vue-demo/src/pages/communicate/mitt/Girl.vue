<script lang="ts">
export default {
  name: 'Girl'
}
</script>

<script lang="ts" setup>
import {onUnmounted, ref} from "vue";
import emitter from "@/utils/emitter";

let computer = ref("Lenovo");
let toy = ref('');
// bind 'pass-toy' event
emitter.on('pass-toy', (value: any) => {
  toy.value = value;
});
// unbind 'pass-toy' event
onUnmounted(() => {
  emitter.off('pass-toy');
});
</script>

<template>
  <div class="girl">
    <p>@/pages/communicate/mitt/Girl.vue</p>
    <p>computer: {{ computer }}</p>
    <p>toy passed from boy: {{ toy }}</p>
  </div>
</template>

<style scoped>
.girl {
  margin-top: 50px;
  background-color: lightgreen;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
