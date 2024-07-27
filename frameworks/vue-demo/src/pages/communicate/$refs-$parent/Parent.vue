<script lang="ts" setup>

</script>

<script lang="ts">
export default {
  name: 'Parent'
}
</script>

<template>
  <div class="parent">
    <p>$refs: parent -> child</p>
    <p>$parent: child -> parent</p>
  </div>
</template>

<style scoped>
.parent {
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
}

.parent button {
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>