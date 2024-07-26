<script lang="ts">
export default {
  name: 'Boy'
}
</script>

<script lang="ts" setup>

import emitter from "@/utils/emitter";

let toy: string = 'Optimus Prime'
</script>

<template>
  <div class="boy">
    <p>@/pages/communicate/mitt/Boy.vue</p>
    <p>toy: {{ toy }}</p>
    <button @click="emitter.emit('pass-toy', toy)">pass toy to girl</button>
  </div>
</template>

<style scoped>
.boy {
  margin-top: 50px;
  background-color: lightcyan;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}

.boy button {
  margin-right: 5px;
}
</style>