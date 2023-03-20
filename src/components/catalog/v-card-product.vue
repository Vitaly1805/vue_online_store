<template>
  <div 
    class="v-card-product"
    @click="closeModal">
    <div class="v-card-product__body">
      <div class="v-card-product__content">
        <div class="v-card-product__close">
          <span></span>
        </div>
        <img :src=" require(`../../assets/img/${product.miniImg}`) " alt="" class="v-card-product__img">
        <div class="v-card-product__block">
          <div class="v-card-product__title">
            {{ product.name }}
          </div>
          <div class="v-card-product__list">
            <div class="v-card-product__item">
              Производитель: {{ product.manufacturer }}
            </div>
            <div class="v-card-product__item">
              Артикул: {{ product.id }}
            </div>
            <div class="v-card-product__item">
              Цена: {{ product.price }} руб.
            </div>
            <div class="v-card-product__item">
              Количество:     
              <vQuantityProduct
                :product="product"
                :quantity="quantity"
                @setQuantity="setQuantity"
              />
            </div>
          </div>
          <button class="v-card-product__button _btn" @click="addProductToCart(); closeModal($event)">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import vQuantityProduct from '../quantity-product/v-quantity-product.vue'

export default {
  name: 'v-card-product',
  components: {
    vQuantityProduct
  },
  data() {
    return {
        quantity: 1
    }
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
  methods: {
    ...mapMutations(['SET_CART']),
    addProductToCart() {
      this.SET_CART({product: this.product, quantity: this.quantity})
    },
    setQuantity(quantity) {
      this.quantity = quantity
    },
    closeModal(event) {
      const elem = event.target
      const isBack = elem.classList.contains('v-card-product__body')
      const isClose = elem.closest('.v-card-product__close')
      const isEsc = event.code === 'Escape'
      const isAdd = elem.classList.contains('v-card-product__button')

      if(isBack || isClose || isEsc || isAdd) {
          this.$emit('closeModal')
      }
    }
  },
  mounted() {
    window.addEventListener('keyup', this.closeModal)
  }
}

</script>

<style lang="scss">
.v-card-product {
  z-index: 30;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  text-align: left;
  background: rgba(0, 0, 0, .7);
  display: flex;
  align-items: center;
  justify-content: center;

  &__body {
      position: relative;
      width: 100%;
      height: 100%;
  }

  &__content {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      padding: 20px 50px;
      min-height: 400px;
      max-height: 90%;
      min-width: 600px;
      max-width: 90%;
      background: #fff;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
  }

  &__title {
      font-size: 1.2em;
      margin: 0 0 20px 0;
  }

  &__block {
      width: 60%;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  &__img {
      object-fit: cover;
      height: 250px;
  }

  &__item {
      margin: 0 0 10px 0;

      div {
          margin: 5px 0 0 0;
      }
  }

  &__close {
      cursor: pointer;
      position: absolute;
      right: -10px;
      top: 7px;

      span {
          position: relative;

          &::before,
          &::after {
              content: '';
              position: absolute;
              background: #fff;
              border-radius: 5px;
              height: 6px;
              width: 25px;
          }

          &::before {
              transform: rotate(45deg);
          }

          &::after {
              transform: rotate(-45deg);
          }
      }
  }
}
</style>