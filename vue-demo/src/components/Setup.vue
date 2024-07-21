<script lang="ts">
export default {
  name: 'Setup',
  beforeCreate() {
    console.log("before create");
  },
  // setup() { ...
  //     return { username, age, changeName, changeAge, showTel };
  //     // return () => { "Hello World"; }
  // }
}
</script>

<script lang="ts" setup>// setup sugar
import {type Ref, ref, type UnwrapRef} from 'vue';

console.log("setup");
// console.log(this); // undefined

// data
// let username = 'Default';
let username: Ref<UnwrapRef<string>> = ref('Tom');
// let age = 0;
let age: Ref<UnwrapRef<number>> = ref(0);
let tel: string = '911';

// functions
function changeName() {
  // username = new Date().toString();
  username.value = username.value == 'Tom' ? 'Jerry' : 'Tom';
  console.log("username =", username);
}

function changeAge() {
  // age++;
  (age.value)++;
  console.log("age =", age);
}

function showTel() {
  window.alert(tel);
}
</script>

<template>
  <div class="person">
    <h2>name: {{ username }}</h2>
    <h2>age: {{ age }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
    <button @click="showTel">alert tel</button>
  </div>
</template>

<style scoped>
.person {
  background-color: lightpink;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
