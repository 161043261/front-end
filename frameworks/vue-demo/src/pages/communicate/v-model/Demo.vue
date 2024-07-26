<script lang="ts" setup>
import {ref} from 'vue';
import CustomInput from './CustomInput.vue';

let username = ref('root');
let password = ref('1024');
</script>

<script lang="ts">
export default {
  name: 'Parent'
}
</script>

<template>
  <div class="parent">
    <p>@/pages/communicate/v-model/Parent.vue</p>
    <p>username: {{ username }}</p>
    <p>password: {{ password }}</p>
    <p>v-model: ts <-> dom 2-way binding
      <input v-model="username" type="text"></p>
    <p>v-bind: ts -> dom 1-way binding
      <!--
      v-on:                           is equivalent to    @
      v-on:event-name="expression"    is equivalent to    @event-name="expression"
      -->
      <input v-bind:value="password" v-on:input="password = (<HTMLInputElement>$event.target).value"/></p>
    <hr>

    <!-- implement 2-way binding on CustomInput -->
    <CustomInput v-model="username"/> <!-- 2-way binding -->
    <!-- defineProps(['modelValue']) -->
    <!-- defineEmits(['update:modelValue']) -->
    <CustomInput v-bind:modelValue="password" v-on:update:modelValue="password = $event"/> <!-- 2-way binding -->
  </div>
</template>

<style scoped>
.parent {
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
}
</style>