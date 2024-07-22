<script lang="ts" setup>
import DefineProp from './components/DefineProp.vue';
import AsComputed from './components/Computed.vue'; // alias
import AsReactive from './components/Reactive.vue';
import AsRef from './components/Ref.vue';
import AsSetup from './components/Setup.vue';
import TagRef from './components/TagRef.vue';
import AsToRefs from "./components/ToRefs.vue";
import WatchEffect from './components/watch/WatchEffect.vue';
import WatchGetter from './components/watch/WatchGetter.vue';
import WatchReactiveObject from './components/watch/WatchReactiveObject.vue';
import WatchRefObject from './components/watch/WatchRefObject.vue';
import WatchRefPrimaryValue from './components/watch/WatchRefPrimaryValue.vue';
import {type CatList} from '@/types';
import {reactive, ref} from 'vue';

let componentTagRef = ref();

function componentTagRefLog() {
  console.log(componentTagRef);
}

let catList: CatList = reactive<CatList>(
    [{id: 0, name: 'Susan', age: 1},
      {id: 1, name: 'Sam', age: 2},
      {id: 2, name: 'Tomcat', age: 3, optional: 250}]);
console.log(catList);
</script>

<template>
  <div class="app">
    <h1>Hello Vue3</h1>
    <AsSetup/>
    <AsReactive/>
    <AsRef/>
    <AsToRefs/>
    <AsComputed/>
    <WatchRefPrimaryValue/>
    <WatchRefObject/>
    <WatchReactiveObject/>
    <WatchGetter/>
    <WatchEffect/>
    <TagRef ref="componentTagRef"/>
    <button @click="componentTagRefLog">componentTagRefLog</button>
    <!-- Component Cat -->
    <!-- <Cat :args="['data', 'passed', 'from', 'parent']" v-bind:cats="catList"/> -->
    <DefineProp v-bind:cats="catList"/>
  </div>
</template>

<style>
* {
  font-family: 'Iosevka SS12', monospace;
}

.app {
  background-color: lightyellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
