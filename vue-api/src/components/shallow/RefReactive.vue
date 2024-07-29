<script lang="ts">
export default {
  name: 'RefReactive'
}
</script>

<script lang="ts" setup>
import { shallowRef, shallowReactive } from 'vue'

let sum = shallowRef(0)

let people = shallowRef({ // -> level 1
  name: 'Tom', // -> level 2
  age: 1
})

let car = shallowReactive({
  brand: 'Mazda', // -> level 1
  options: {
    color: 'black', // -> level 2
    engine: 'V8'
  }
})

function changeSum() { // succeed
  sum.value += 1
}

function changeAge() { // fail
  people.value.age += 1
}

function changeName() { // fail
  people.value.name += '!'
}

function changePeople() { // succeed
  people.value = people.value.name == 'Tom' ? { name: 'Jerry', age: 0 } : { name: 'Tom', age: 0 }
}

function changeBrand() { // succeed
  car.brand = car.brand == 'Mazda' ? 'Toyota' : 'Mazda'
}

function changeColor() { // fail
  car.options.color = car.options.color == 'black' ? 'white' : 'black'
}

function changeEngine() { // fail
  car.options.engine = car.options.engine == 'V8' ? 'JVM' : 'V8'
}

// function changeCar() { car = Object.assign(car, {}) }
</script>

<template>
  <div class="refReactive">
    <p>shallowRef, shallowReactive</p>
    <p>sum: {{ sum }}</p>
    <p>name: {{ people.name }}</p>
    <p>age: {{ people.age }}</p>
    <p>car: {{ car }}</p>
    <button @click="changeSum">sum++</button>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
    <button @click="changePeople">change people</button>
    <button @click="changeBrand">change brand</button>
    <button @click="changeColor">change color</button>
    <button @click="changeEngine">change engine</button>
  </div>
</template>

<style scoped>
button {
  margin-right: 5px;
}
</style>