<script lang="ts">
export default {
  name: 'ParamChild'
}
</script>

<script lang="ts" setup>
// const route = useRoute();
// let {params} = toRefs(route);
defineProps(['id', 'title', 'content'])
</script>

<template>
  <ul class="news-list">
    <!-- <li>id: {{ params.id }}</li> -->
    <!-- <li>title: {{ params.title }}</li> -->
    <!-- <li>content: {{ params.content }}</li> -->

    <li>id: {{ id }}</li>
    <li>title: {{ title }}</li>
    <li>content: {{ content }}</li>
  </ul>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>