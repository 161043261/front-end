<script lang="ts">
export default {
  name: "WatchRefObject",
}
</script>
<script setup lang="ts">
import {ref, watch} from 'vue';

let person = ref({
  name: 'steve jobs', // tim cook
  age: 0
})

function changeName() {
  person.value.name += '!';
}

function changeAge() {
  person.value.age += 1;
}

function changePerson() {
  person.value = {
    name: person.value.name.startsWith("s") ? "tim cook" : "steve jobs",
    age: 0
  }
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
  <div class="watchRefObject">
    <h1>watch ref(object)</h1>
    <h2>name = {{ person.name }}</h2>
    <h2>age = {{ person.age }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
    <button @click="changePerson">change person</button>
  </div>
</template>

<style scoped>
.watchRefObject {
  background-color: lightseagreen;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>