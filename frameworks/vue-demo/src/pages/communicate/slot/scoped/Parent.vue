<script lang="ts" setup>
import Child from './Child.vue'
</script>

<script lang="ts">
export default {
  name: 'Parent'
}
</script>

<template>
  <div class="parent">
    <p>@/pages/communicate/slot/scoped/Parent.vue</p>
    <div class="content">
      <Child>
        <template v-slot="params">
          <p>unordered list</p>
          <ul>
            <!-- <span>{{ params }}</span> -->
            <li v-for="fun in params.funs" :key="fun.id"> {{ fun.name }}</li>
          </ul>
        </template>
      </Child>

      <Child>
        <template v-slot="params">
          <p>ordered list</p>
          <ol>
            <li v-for="fun in params.funs" :key="fun.id"> {{ fun.name }}</li>
          </ol>
        </template>
      </Child>

      <Child>
        <template v-slot="{funs}"> <!-- destruct -->
          <p>paragraphs</p>
          <p v-for="fun in funs" :key="fun.id"> {{ fun.name }}</p>
        </template>
      </Child>
    </div>
  </div>
</template>

<style scoped>
.parent {
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

p {
  text-align: center;
}
</style>