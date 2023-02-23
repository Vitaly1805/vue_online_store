<template lang="">
  <div class="v-product">
    <div class="v-product__body _container">
      <div class="v-product__title">
        {{ product.name }}
      </div>
      <img :src=" require(`../../assets/img/${product.img}`) " alt="" class="v-product__img">
      <div class="v-product__info">
        <div class="v-product__manufacturer">
          {{ product.manufacturer }}
        </div>
        <div class="v-product__article">
          {{ product.id }}
        </div>
        <vQuantityProduct />
        <div class="v-product__price">
          {{ product.price }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vQuantityProduct from '@/components/quantity-product/v-quantity-product.vue'
import { mapGetters } from 'vuex'

export default {
  name: "v-product",
  data() {
    return {
      product: {}
    }
  },
  components: {
    vQuantityProduct
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {
    filterProducts() {
      this.product = this.PRODUCTS.filter(product => product.id == this.$route.params.id)[0]
    }  
  },
  beforeMount() {
    this.filterProducts()
  },
  watch: {
    $route() {
      this.filterProducts()
    }
  }
}
</script>
<style lang="scss">
.v-product {
}

</style>