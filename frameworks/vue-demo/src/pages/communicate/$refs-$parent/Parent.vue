<script lang="ts" setup>
import Boy from "./Boy.vue";
import Girl from "./Girl.vue";
import {ref} from "vue";

let car = ref("Mercedes Benz");
let girl = ref();
let boy = ref();

function changeToy() {
  // console.log(girl.value);
  girl.value.toy = "Bumblebee";
}

function changeComputer() {
  boy.value.computer = "Apple";
}
</script>

<script lang="ts">
export default {
  name: 'Parent'
}
</script>

<template>
  <div class="parent">
    <p>@/pages/communicate/$refs-$parent/Parent.vue</p>
    <p>$refs: parent -> child; $parent: child -> parent;</p>
    <p>car: {{ car }}</p>
    <button v-on:click="changeToy">change girl's toy</button>
    <button @click="changeComputer">change boy's computer</button>
    <Girl ref="girl"/>
    <Boy ref="boy"/>
  </div>
</template>

<style scoped>
.parent {
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
}

.parent button {
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
