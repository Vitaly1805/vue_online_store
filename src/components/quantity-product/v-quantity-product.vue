<template lang="">
    <div class="v-quantity-product">
        <div class="v-quantity-product__decrement" 
            @click="decQuantity"  
        ></div>
        <input type="number" class="v-quantity-product__input" 
            :value="locQuantity"
            @input="setQuantity"
            @blur="setQuantityToInput"
            >
        <div class="v-quantity-product__increment"
            @click="incQuantity"  
        ></div>
        <span></span>
    </div>
  </template>
  <script>
  import { mapMutations } from 'vuex';
  
  export default {
    name: 'v-quantity-product',
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      },
      quantity: {
        type: Number,
        default() {
          return 1
        }
      }
    },
    data() {
      return {
        locQuantity: 1
      }
    },
    methods: {
      ...mapMutations([
        'SET_QUANTITY_PRODUCT'
      ]),
      setQuantity(event) {
        const quantity = +event.target.value

        this.locQuantity = quantity > 0 ? quantity : 1
        this.$emit('setQuantity', this.locQuantity)
      },
      decQuantity() {
        this.locQuantity = this.quantity > 1 ? this.quantity - 1 : 1
        this.$emit('setQuantity', this.locQuantity)
      },
      incQuantity() {
        this.$emit('setQuantity', ++this.locQuantity)
      },
      setQuantityToInput(event) {
        if(!event.target.value || event.target.value === '0') {
          event.target.value = 1
        }
      }
    },
    mounted() {
      this.locQuantity = this.quantity
    }
  }
  </script>
  <style lang="scss">
  .v-quantity-product {
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
  
    &__input {
      padding: 5px;
      width: 100%;
      text-align: center;
    }
  
    &__decrement,
    &__increment {
      z-index: 3;
    }
  }
  
  </style>