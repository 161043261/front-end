<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Article from './components/Article.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Article />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@font-face {
  font-family: 'Iosevka SS06';
  src: url('/IosevkaFixedSS06-Regular.woff2') format('woff2');
}

* {
  font-family: 'Iosevka SS06', monospace;
}
</style>
