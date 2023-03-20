<template lang="">
  <div v-if="product.id" class="v-product">
    <div class="v-product__body _container">
      <div class="v-product__title _title">
        {{ product.name }}
      </div>
      <div class="v-product__main">
        <img :src=" require(`../../assets/img/${product.bigImg}`) " alt="" class="v-product__img">
        <div class="v-product__info">
          <div class="v-product__manufacturer">
            Производитель: {{ product.manufacturer }}
          </div>
          <div class="v-product__article">
            Артикул: {{ product.id }}
          </div>
          <div class="v-product__amount">
            Количество:
            <vQuantityProduct />
          </div>
          <div class="v-product__payment">
            <div class="v-product__price">
              {{ product.price }}
            </div>
            <button class="v-product__button _btn">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vQuantityProduct from '@/components/quantity-product/v-quantity-product.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: "v-product",
  data() {
    return {
      product: {
        id: 0
      }
    }
  },
  components: {
    vQuantityProduct
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {
    setProduct() {
      this.product = this.PRODUCTS.filter(product => product.id == this.$route.params.id)[0]
    },
    ...mapActions([
      'FETCH_PRODUCTS'
    ]),
    ...mapMutations([
      'SET_CATALOG'
    ])
  },
  created() {
    setTimeout(() =>  {
      this.setProduct()
    })
  },
  watch: {
    $route() {
      this.setProduct()
    }
  }
}
</script>
<style lang="scss">
.v-product {

  &__main {
    display: flex;
    gap: 50px;
  }

  &__info {
    padding: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 20px;
  }

  &__img {

  }
}

</style>