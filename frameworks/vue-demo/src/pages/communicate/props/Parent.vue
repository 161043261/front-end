<script lang="ts">
export default {
  name: 'Child'
}
</script>

<script setup lang="ts">
import {ref} from 'vue';

let toyCar = ref('toyCar');
defineProps(['car', 'sendToy'])
</script>

<template>
<div class="child">
    <p>child component</p>
		<p>toy：{{ toyCar }}</p>
		<p>car：{{ car }}</p>
		<button @click="sendToy(toyCar)">send toy to parent</button>
  </div>
</template>

<style scoped>
.child{
		background-color: lightblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
