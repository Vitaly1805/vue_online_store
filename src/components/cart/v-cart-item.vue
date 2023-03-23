<template lang="">
  <div class="v-cart-item">
    <img :src=" require(`../../assets/img/${product.miniImg}`) " alt="" class="v-cart-item__img">
    <div class="v-cart-item__name">
      {{product.name}}
    </div>
    <div class="v-cart-item__price">
      {{product.price}} руб.
    </div>
    <vQuantityProduct
        :product="product"
        :quantity="product.quantity"
        @setQuantity="setQuantity"
    />
    <div class="v-cart-item__sum">
      {{SUM_PRODUCT(index)}} руб.
    </div>
    <div class="v-cart-item__delete" @click="DELETE_PRODUCT_FROM_CART(index)">
      Удалить
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import vQuantityProduct from '../quantity-product/v-quantity-product.vue'

export default {
  name: 'v-cart-item',
  components: {
      vQuantityProduct
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  computed: {
      ...mapGetters([
        'CART',
        'SUM_PRODUCT'
      ])
    },
  methods: {
    ...mapMutations([
        'DELETE_PRODUCT_FROM_CART',
        'SET_QUANTITY'
    ]),
    setQuantity(quantity) {
      this.SET_QUANTITY({product: this.product, quantity})
    },
    setQuantityToInput(event) {
      if(!event.target.value || event.target.value === '0') {
        event.target.value = 1
      }
    }
  }
}
</script>
<style lang="scss">
.v-cart-item {
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 1fr);
  align-items: center;
  height: 150px;
  border-top: 1px solid #cdcdcd;

  &:last-child {
    border-bottom: 1px solid #cdcdcd;
  }

  &__img {
    width: 100px;
    max-height: 140px;
  }

  &__name {
    text-align: start;
  }
  
  &__delete {
    cursor: pointer;
  }
}

</style>