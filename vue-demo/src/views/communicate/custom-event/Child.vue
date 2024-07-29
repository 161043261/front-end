<script lang="ts" setup>
import { onMounted, ref } from 'vue'

let onMountedToy = ref('OptimusPrime')
let clickToy = ref('Bumblebee')

// declare 'pass-toy' custom event
const emit = defineEmits(['pass-toy'])

onMounted(() => {
  setTimeout(() => {
    emit('pass-toy', onMountedToy.value/* args */) // trigger 'pass-toy' custom event
  }, 1000)
})
</script>

<script lang="ts">
export default {
  name: 'Child'
}
</script>

<template>
  <div class="child">
    <p>@/views/communicate/custom-event/Child.vue</p>
    <p>onMountedToy: {{ onMountedToy }}</p>
    <p>clickToy: {{ clickToy }}</p>
    <!-- click to trigger 'pass-toy' custom event -->
    <button @click="emit('pass-toy', clickToy)">pass toy to parent</button>
    <!-- toy.value.toUpperCase() is unnecessary -->
  </div>
</template>

<style scoped>
.child {
  margin-top: 10px;
  background-color: lightcyan;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>