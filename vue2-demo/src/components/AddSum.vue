<template>
  <div class="addSum">
    <h1>sum = {{ sum }}</h1>
    <button @click="add">sum++</button>
  </div>

</template>

<script>
export default {
  name: 'AddSum',
  data() {
    return {
      sum: 1
    }
  },
  methods: {
    add() {
      this.sum++;
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
  },

  created() {
    console.log('created');
  },

  beforeMount() {
    console.log('beforeMount');
  },

  mounted() {
    console.log('mounted');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
  },

  updated() {
    console.log('updated');
  },

  beforeDestroy() {
    console.log('beforeDestroy');
  },

  destroyed() {
    console.log('destroyed');
  }
}
</script>

<style scoped>
.addSum {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
