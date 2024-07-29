<script lang="ts" setup>
import Readonly from '@/components/shallow/Readonly.vue'
import RefReactive from '@/components/shallow/RefReactive.vue'
import CustomRef from '@/components/CustomRef.vue'
import ToRawMarkRaw from '@/components/ToRawMarkRaw.vue'
import TeleportComponent from '@/components/teleport/Parent.vue'
</script>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<template>
  <div class="app">
    <Readonly />
    <RefReactive />
    <CustomRef />
    <ToRawMarkRaw />
    <TeleportComponent />
  </div>
</template>

<style>
* {
  font-family: Iosevka SS06, monospace;
}
</style>
