<script lang="ts" setup>
import { ref } from 'vue'
import Parent from './Parent.vue'

let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)

function addA(delta: number) {
  a.value += delta
}
</script>

<script lang="ts">
export default {
  name: 'Grandparent'
}
</script>

<template>
  <div class="grandparent">
    <p>@/views/communicate/$attr/Grandparent.vue</p>
    <p>a={{ a }} b={{ b }} c={{ c }} d={{ d }}</p>
    <!-- v-bind="{x:5,y:6}" is equivalent to :x=5 :y=6 -->
    <Parent :a="a" :addA="addA" :b="b" :c="c" :d="d" v-bind="{x:5,y:6}" />
  </div>
</template>

<style scoped>
.grandparent {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
}
</style>