<script lang="ts">
export default {
  name: "WatchReactiveObject"
}
</script>

<script setup lang="ts">
import { reactive, watch } from 'vue';
let person = reactive({
  name: 'steve jobs', // tim cook
  age: 0
})

function changeName() {
  person.name += '!';
}

function changeAge() {
  person.age += 1;
}

function changePerson() {
  Object.assign(person, {
    name: person.name.startsWith("s") ? "tim cook" : "steve jobs", // new object
    age: 0
  });
}

// watch(source, callback, options);
watch(person, (newValue, oldValue) => {
  console.log(oldValue === newValue); // are oldValue and newValue the same object?
}, {
  deep: true, // default true
  immediate: true, // default false
})
</script>

<template>
  <div class="watchReactiveObject">
    <h1>watch reactive(object)</h1>
    <h2>name = {{ person.name }}</h2>
    <h2>age = {{ person.age }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
    <button @click="changePerson">change person</button>
  </div>
</template>

<style scoped>
.watchReactiveObject {
  background-color: lightskyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>