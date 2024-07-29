<script setup lang="ts">
import { ref } from 'vue'

import useCustomRefMsg from '@/hooks/useCustomRefMsg'

let refMsg = ref('Hello World')
let { customRefMsg } = useCustomRefMsg('Hello World', 3000)
</script>

<script lang="ts">
export default {
  name: 'CustomRef'
}
</script>

<template>
  <div class="customRef">
    <p>Immediate Response : {{ refMsg }}</p>
    <p>Delayed Response for 3s: {{ customRefMsg }}</p>
    <input type="text" v-model="refMsg">
    <input type="text" v-model="customRefMsg">
  </div>
</template>

<style scoped>

</style>

<style>
* {
  font-family: Iosevka SS12, monospace;
}
</style>
