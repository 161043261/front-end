<script lang="ts" setup>
import {type CatList} from "@/types";
import {onMounted, reactive, ref} from "vue";
import DefineProp from "./components/DefineProp.vue";
import LifeCycle from "./components/LifeCycle.vue";
import AsReactive from "./components/Reactive.vue";
import AsRef from "./components/Ref.vue";
import AsSetup from "./components/Setup.vue";
import TagRef from "./components/TagRef.vue";
import WatchEffect from "./components/watch/WatchEffect.vue";
import WatchGetter from "./components/watch/WatchGetter.vue";
import WatchReactiveObject from "./components/watch/WatchReactiveObject.vue";
import WatchRefObject from "./components/watch/WatchRefObject.vue";
import WatchRefPrimaryValue from "./components/watch/WatchRefPrimaryValue.vue";

let componentTagRef = ref();

function componentTagRefLog() {
  console.log(componentTagRef);
}

let catList: CatList = reactive<CatList>([
  {id: 0, name: "Susan", age: 1},
  {id: 1, name: "Sam", age: 2},
  {id: 2, name: "Tomcat", age: 3, optional: 250},
]);
// console.log(catList);

let display = ref(true);

onMounted(() => {
  console.log("parent mounted");
});
</script>

<template>
  <div class="app">
    <AsSetup/>
    <AsReactive/>
    <AsRef/>
    <WatchRefPrimaryValue/>
    <WatchRefObject/>
    <WatchReactiveObject/>
    <WatchGetter/>
    <WatchEffect/>
    <TagRef ref="componentTagRef"/>
    <!-- See ./components/TagRef.vue:18 -->
    <button @click="componentTagRefLog">componentTagRefLog</button>
    <!-- Component Cat -->
    <!-- <DefineProp :args="['data', 'passed', 'from', 'parent']" v-bind:cats="catList"/> -->
    <DefineProp v-bind:cats="catList"/>
    <LifeCycle v-if="display"/>
    <!-- <SumDog /> -->
  </div>

  <h1 class="title">Route Test</h1>
  <div class="navigate">
    <RouterLink active-class="highlight" to="/computed">Computed</RouterLink>
    <RouterLink active-class="highlight" v-bind:to="{ path: '/torefs' }">ToRefs</RouterLink>
    <RouterLink active-class="highlight" v-bind:to="{ name: 'sumDogComponent' }">SumDog</RouterLink>
    <RouterLink active-class="highlight" to="/query">Query</RouterLink>
    <RouterLink active-class="highlight" to="/param">Param</RouterLink>
  </div>

  <div class="main-content">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import {RouterView, RouterLink} from "vue-router";
</script>

<style>
* {
  font-family: "Iosevka SS04", monospace;
}
</style>

<style scoped>
.app {
  background-color: lightyellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, lightyellow, lightblue);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}

.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: lightyellow;
  text-decoration: none;
  font-size: 20px;
}

.navigate a.highlight {
  background-color: lightyellow;
  font-weight: 800;
  text-shadow: 0 0 1px;
  font-family: "Iosevka SS04", "monosapce", monospace;
}

.main-content {
  margin: 30px auto 0;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>
