<template>
  <AddSum v-if="show"/>
</template>

<script>
import AddSum from "@/components/AddSum.vue";

export default {
  name: 'App',
  components: {AddSum},
  comments: { AddSum },
  data() {
    return {
      show: true
    }
  }
}
</script>

<style></style>
