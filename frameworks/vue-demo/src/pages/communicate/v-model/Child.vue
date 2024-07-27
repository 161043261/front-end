<script lang="ts">
export default {
  name: 'Child'
}
</script>

<script lang="ts" setup>
defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);
console.log(emits);
</script>

<template>
  <p>@/pages/communicate/v-model/Child.vue</p>
  <p>
    <!--
TODO
    v-bind:                         is equivalent to    :
    v-bind:propName="expression"    is equivalent to    :propName="expression"
    v-on:                           is equivalent to    @
    v-on:event-name="expression"    is equivalent to    @event-name="expression"
    -->

    <!-- refer to ../custom-event -->
    <input type="text"
           v-bind:value="modelValue"
           @input="emits('update:modelValue', (<HTMLInputElement>$event.target).value)/* args */">
    <!-- trigger 'update:modelValue' event -->
  </p>
</template>

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, lightpink, white, lightblue);
  height: 30px;
  font-size: 20px;
  color: black;
}
</style>
