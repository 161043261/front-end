<script lang="ts">
import AsSetup from './components/Setup.vue'; // alias
import AsReactive from './components/Reactive.vue';
import AsRef from './components/Ref.vue';
import AsToRefs from "./components/ToRefs.vue";
import AsComputed from './components/Computed.vue';
import WatchRefPrimaryValue from './components/watch/WatchRefPrimaryValue.vue';
import WatchRefObject from './components/watch/WatchRefObject.vue';
import WatchReactiveObject from './components/watch/WatchReactiveObject.vue'

export default {
  name: 'App',
  components: {
    AsToRefs, AsSetup, AsReactive, AsRef, AsComputed,
    WatchRefPrimaryValue, WatchRefObject, WatchReactiveObject
  } // register components
}
</script>

<template>
  <div class="app">
    <h1>Hello Vue3</h1>
    <AsSetup />
    <AsReactive />
    <AsRef />
    <AsToRefs />
    <AsComputed />
    <WatchRefPrimaryValue />
    <WatchRefObject />
    <WatchReactiveObject />
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
