<script lang="ts" setup>
import {ref} from 'vue';
import Child from './Child.vue';

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
TODO
      v-bind:                         is equivalent to    :
      v-bind:propName="expression"    is equivalent to    :propName="expression"
      v-on:                           is equivalent to    @
      v-on:event-name="expression"    is equivalent to    @event-name="expression"
      -->

      <!--TODO 'v-bind:' or ':' implements 1-way binding -->
      <input v-bind:value="password" v-on:input="password = (<HTMLInputElement>$event.target).value"/></p>
    <hr>

    <!--TODO "v-model:' or '@' implements 2-way binding -->

    <!--
    alias 'modelValue', 'update:modelValue' to 'aliasName', 'update:aliasName'
    <Child v-model:aliasName="username"/>
    -->
    <Child v-model="username"/>
    <!-- defineProps(['modelValue']) -->
    <!-- defineEmits(['update:modelValue']) -->

    <!-- password: ./Parent.vue -> ./Child.vue -->
    <Child v-bind:modelValue="password"
           v-on:update:modelValue="password = $event"/>
    <!-- password: ./Parent.vue <- ./Child.vue -->
  </div>
</template>

<style scoped>
.parent {
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
}
</style>
