<script lang="ts">
import Person from './components/Person.vue';
import Car from './components/Car.vue';
import Game from './components/Game.vue';
import People from "@/components/People.vue";

export default {
  name: 'App',
  components: {People, Person, Car, Game} // register components
}
</script>

<template>
  <div class="app">
    <h1>Hello World</h1>
    <Person/> <!-- a div, class = "person" -->
    <Car/>
    <Game/>
    <People/>
  </div>
</template>

<style>
* {
  font-family: Iosevka SS04, monospace;
}

.app {
  background-color: lightyellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
