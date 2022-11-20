<template >
  <vMainWrapper />
  <p>Buy!</p>
  <vCart />
</template>

<script>
import vMainWrapper  from "./components/v-main-wrapper.vue";
import vCart from "./components/v-cart.vue";

export default {
  name: 'App',
  components: {
    vMainWrapper,
    vCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
