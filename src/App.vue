<template >
  <vMainWrapper />
  <p>Buy!!!</p>
  <vCart />
	<div class="123"
		v-for="product in PRODUCTS"
		:key="product.id">
		{{product.name}}
	</div>
</template>

<script>
import vMainWrapper  from "./components/v-main-wrapper.vue";
import vCart from "./components/v-cart.vue";
import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    vMainWrapper,
    vCart
  },
	computed: mapGetters(["PRODUCTS"]),
	mounted() {
		return this.$store.dispatch('FETCH_PRODUCTS')
	},
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
