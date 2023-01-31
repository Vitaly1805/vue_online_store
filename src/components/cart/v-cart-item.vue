<template lang="">
  <div class="v-cart-item">
    <img :src=" require(`../../assets/img/${product.img}`) " alt="" class="v-cart-item__img">
    <div class="v-cart-item__name">
      {{product.name}}
    </div>
    <div class="v-cart-item__price">
      {{product.price}} руб.
    </div>
    <div class="v-cart-item__block-quantity">
      <div class="v-cart-item__quantity-decrement" 
        @click="DECREMENT_QUANTITY_PRODUCT(index)"  
      ></div>
      <input type="number" class="v-cart-item__quantity" 
        :value="product.quantity"
        @input="setQuantity"
        @blur="setQuantityToInput"
        >
      <div class="v-cart-item__quantity-increment"
        @click="INCREMENT_QUANTITY_PRODUCT(index)"  
      ></div>
      <span></span>
    </div>
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

export default {
  name: 'v-cart-item',
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
        'INCREMENT_QUANTITY_PRODUCT',
        'DECREMENT_QUANTITY_PRODUCT',
        'SET_QUANTITY_PRODUCT'
    ]),
    setQuantity(event) {
      let quantity = +event.target.value
      this.SET_QUANTITY_PRODUCT({quantity, index: this.index})
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

  &__sum {

  }

  &__price {
  }

  &__block-quantity {
    position: relative;
    z-index: 2;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    width: 150px;
    display: flex;
    justify-content: center;
    padding: 1px;

    div {
      width: 20px;
      cursor: pointer;
    }

    span {
      left: 5px;
    }

    &::before,
    &::after {
      content: '';
      right: 5px;
    }

    &::before,
    &::after,
    span {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 2px;
      width: 10px;
      background: #000;
    }

    &::after {
      height: 1.5px;
      transform: translateY(-50%) rotate(90deg);
    }
  }

  &__quantity {
    padding: 5px;
    width: 100%;
    text-align: center;
  }

  &__delete {
    cursor: pointer;
  }

  &__quantity-decrement,
  &__quantity-increment {
    z-index: 3;
  }
}

</style>