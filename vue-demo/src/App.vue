<script lang="ts">
import AsSetup from './components/Setup.vue'; // alias
import AsReactive from './components/Reactive.vue';
import AsRef from './components/Ref.vue';
import AsToRefs from "./components/ToRefs.vue";
import AsComputed from './components/Computed.vue';

export default {
  name: 'App',
  components: {AsToRefs, AsSetup, AsReactive, AsRef, AsComputed} // register components
}
</script>

<template>
  <div class="app">
    <h1>Hello Vue3 (One Piece)</h1>
    <AsSetup/>
    <AsReactive/>
    <AsRef/>
    <AsToRefs/>
    <AsComputed/>
  </div>
</template>

<style>
* {
  font-family: 'Iosevka SS04', monospace;
}

.app {
  background-color: lightyellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
