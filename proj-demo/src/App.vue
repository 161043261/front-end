<script lang="ts" setup>
import LoginView from './views/LoginView.vue'
// import Article from '@/components/Article.vue'
</script>

<template>
  <header>
    <div class="wrapper">
       <LoginView />
       <!-- <Article /> -->
    </div>
  </header>
</template>

<style>
@font-face {
  font-family: 'Iosevka Aile';
  src: url('/IosevkaAile-Regular.woff2') format('woff2');
}

* {
  font-family: 'Iosevka Aile', monospace;
}
</style>
