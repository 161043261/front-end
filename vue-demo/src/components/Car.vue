<script lang="ts">
export default {
  name: 'Car',
}
</script>

<script lang="ts" setup>
import { reactive } from "vue";

// let car = {brand: "Toyota", price: 10};
let car = reactive<{ brand: string, price: number }>({ brand: "Toyota", price: 10 });

// primaryValue => ref(primaryValue) => RefImpl { value: primaryValue }
// object       => ref(object)       => RefImpl { value: Proxy(Object) object }
// object       => reactive(object)  => Proxy(Object) object

function altPrice() {
  car.price = Math.floor(Math.random() * 10);
  console.log(car);
}

function altFirstGame() {
  games[0].name = (games[0].name == "Honkai Impact") ? "Zenless Zone Zero" : "Honkai Impact";
}

let games = reactive<{ id: number, name: string }[]>(
  [{ id: 1, name: 'Honkai Impact' }, { id: 2, name: 'Genshin Impact' }, { id: 3, name: 'Honkai: Star Rail' }]);
</script>

<template>
  <div class="car">
    <h1>ref and reactive</h1>
    <h2>brand={{ car.brand }} price={{ car.price }}w</h2>
    <button @click="altPrice">alter price</button>
    <hr> <!-- horizontal row -->
    <h2>Game List</h2>
    <ul> <!-- unordered list -->
      <!-- go
           for key, game := range games { ... } -->
      <li v-for="game in games" v-bind:key="game.id">{{ game.name }}</li> <!-- list item -->
    </ul>
    <button @click="altFirstGame">alter 1st game</button>
  </div>
</template>

<style scoped>
.car {
  background-color: lightgreen;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
