<script lang="ts">
import AsSetup from './components/Setup.vue';
import AsReactive from './components/Reactive.vue';
import AsRef from './components/Ref.vue';
import AsToRefs from "@/components/ToRefs.vue";

export default {
  name: 'App',
  components: {AsToRefs, AsSetup, AsReactive, AsRef} // register components
}
</script>

<template>
  <div class="app">
    <h1>Hello World</h1>
    <AsSetup/> <!--  div class="person" -->
    <AsReactive/> <!-- div class="car"-->
    <AsRef/> <!-- div class="game"-->
    <AsToRefs/> <!-- div class="people" -->
  </div>
</template>

<style>
* {
  font-family: Iosevka SS04, monospace;
}

.app {
  background-color: lightyellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
