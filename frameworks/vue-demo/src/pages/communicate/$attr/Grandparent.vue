<script lang="ts" setup>
import {ref} from 'vue'
import Parent from './Parent.vue';

let a = ref(1);
let b = ref(2);
let c = ref(3);
let d = ref(4);

function addA(delta: number) {
  a.value += delta;
}
</script>

<script lang="ts">
export default {
  name: 'Grandparent',
}
</script>

<template>
  <div class="grandparent">
    <p>@/pages/communicate/$attr/Grandparent.vue</p>
    <p>a={{ a }} b={{ b }} c={{ c }} d={{ d }}</p>
    <!-- v-bind="{x:100,y:1-00}" is equivalent to :x=100 :y=100 -->
    <Parent :a="a" :b="b" :c="c" :d="d" :addA="addA" v-bind="{x:100,y:200}"/>
  </div>
</template>

<style scoped>
.grandparent {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
}
</style>