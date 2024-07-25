<script lang="ts">
export default {
  name: "Computed"
}
</script>

<script lang="ts" setup>
import {computed, ref, type Ref} from 'vue';

let firstName: Ref<string> = ref<string>("ayaka");
let lastName: Ref<string> = ref<string>("kamisato");

// READONLY computed property
let readonlyFullName = computed(() => {
  return lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1) + ' ' +
      firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1);
});

// console.log(fullName); // ComputedRefImpl

// @Deprecated
function getReadonlyFullName() {
  return lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1) + ' ' +
      firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1);
}

// MUTABLE computed property
let fullName = computed({
  get() {
    return lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1) + ' ' +
        firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1);
  },
  set(arg) {
    [lastName.value, firstName.value] = arg.split(' ');
  }
})

function changeFullName() {
  fullName.value = "Yae Miko";
}
</script>

<template>
  <div class="computed">
    <h1>computed</h1>
    firstName: <input v-model="firstName" type="text"/><br>
    lastName: <input v-model="lastName" type="text"/><br>
    readonlyFullName: <span>{{ readonlyFullName }}</span><br>
    getReadonlyFullName() = <span>{{ getReadonlyFullName() }}</span><br>
    fullName: <span>{{ fullName }}</span><br>
    <button @click="changeFullName">reset fullName</button>
  </div>
</template>

<style scoped>
.computed {
  background-color: lightgreen;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  line-height: 40px;
}
</style>
