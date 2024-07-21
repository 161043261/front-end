<script lang="ts" setup>
import {reactive, toRef, type ToRef, type ToRefs, toRefs} from "vue";

let people = reactive<{ username: string, age: number }>({
  username: "James Gosling", age: 0 // people.username and people.age are reactive
})

// destruct assignment
// let {username, age} = people; // username and age are NOT reactive
let {username, age}: ToRefs<{ username: string; age: number; }> = toRefs(people); // username and age are reactive
console.log(toRefs(people));

let refAge: ToRef<number> = toRef(people, 'age');
console.log(refAge);

function changeName() {
  // people.username += '~';
  username.value = username.value + '!';
}

function changeAge() {
  // people.age += 1;
  age.value += 1;
}
</script>

<script lang="ts">
export default {
  name: "ToRefs"
}
</script>

<template>
  <div class="people">
    <h2>username: people.username={{ people.username }}, username={{ username }}</h2>
    <h2>age: people.age={{ people.age }}, age={{ age }}, refAge={{ refAge }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
  </div>

</template>

<style scoped>
.people {
  background-color: orange;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>