<template lang="">
  <div class="v-cart-item">
    <img :src=" require(`../assets/img/${product.img}`) " alt="" class="v-cart-item__img">
    <div class="v-cart-item__name">
      {{product.name}}
    </div>
    <div class="v-cart-item__price">
      {{product.price}} руб.
    </div>
    <div class="v-cart-item__block-quantity">
      <div class="v-cart-item__quantity-minus" 
        @click="incQuntityProduct"  
      ></div>
      <input type="text" class="v-cart-item__quantity" :value="product.quantity">
      <div class="v-cart-item__quantity-plus"></div>
      <span></span>
    </div>
    <div class="v-cart-item__sum">
      53000 руб.
    </div>
    <div class="v-cart-item__delete" @click="deleteProductFromCart">
      Удалить
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-cart-item',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      quantity: this.product.quantity
    }
  },
  methods: {
    deleteProductFromCart() {
      this.$emit('deleteProductFromCart')
    },
    incQuntityProduct() {
      this.quantity++
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
}

</style>