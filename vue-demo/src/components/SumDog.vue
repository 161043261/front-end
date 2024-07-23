<script lang="ts" setup name="SumDog">
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';
const { sum, addSum, bigSum } = useSum();
const { dogList, addDog } = useDog();
</script>

<template>
    <div class="hook">
        <h1>Hook: sum = {{ sum }}, 10*sum = {{ bigSum }}</h1>
        <button @click="addSum">add sum</button>
        <hr>
        <img v-for="(dog, index) in dogList" v-bind:src="dog" v-bind:key="index"><br>
        <button @click="addDog">add dog</button>
    </div>
</template>

<style lang="css" scoped>
.hook {
    background-color: lightblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

img {
    height: 100px;
    margin-right: 10px;
}
</style>
