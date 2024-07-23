<script lang="ts">
export default {
    name: 'LifeCycle'
}
</script>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
let sum = ref(0);
function add() {
    (sum.value)++;
}

// LifeCycle: beforeCreate & created => setup
onBeforeMount(() => console.log("onBeforeMount"));
onMounted(() => console.log("child mounted"));
onBeforeUpdate(() => console.log("onBeforeUpdate"));
onUpdated(() => console.log("onUpdated"));
onBeforeUnmount(() => { console.log("onBeforeUnmount") });
onUnmounted(() => { console.log("onUnmounted") });
 
</script>

<template>
    <div class="lifeCycle">
        <h1>sum = {{ sum }}</h1>
        <button @click="add">addSum</button>
    </div>
</template>

<style scoped>
.lifeCycle {
    background-color: lightpink;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>