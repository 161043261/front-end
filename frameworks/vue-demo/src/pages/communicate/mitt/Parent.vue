<script lang="ts">
export default {
  name: 'Parent'
}
</script>

<script lang="ts" setup>
import Boy from './Boy.vue';
import Girl from './Girl.vue';
</script>

<template>
  <div class="parent">
    <p>Boy -- toy -> Girl</p>
    <Boy/>
    <Girl/>
  </div>
</template>

<style scoped>
.parent {
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
}

.parent button {
  margin-left: 5px;
}
</style>