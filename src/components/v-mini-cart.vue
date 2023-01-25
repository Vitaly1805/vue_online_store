<template lang="">
  <div class="v-mini-cart">
    <div class="v-mini-cart__list">
      <vMiniCartItem
        v-for="(item, index) in CART"
        :key="item.id"
        :product="item"
        @deleteProductFromCart="deleteProductFromCart(index)"
      />
    </div>
    <div class="v-mini-cart__bottom">
      <div class="v-mini-cart__sum">
        Итого: {{ SUM_CART }}
      </div>
      <div class="v-mini-cart__buttons">
        <router-link to="/cart">
          <button class="v-mini-cart__button _btn-mini">
            Корзина
          </button>  
        </router-link>
        <button class="v-mini-cart__button v-mini-cart__button_close _btn-mini" @click.stop="toggleActiveMiniCart">
            Закрыть
        </button>  
      </div>
    </div>
  </div>
</template>
<script>

import vMiniCartItem from './v-mini-cart-item.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'v-mini-cart',
  components: {
    vMiniCartItem
  },
  computed: {
    ...mapGetters([
      'CART',
      'SUM_CART'
    ]),
    sumPrice() {
      return this.CART.reduce((acc, el) => {
        return (acc + el.price) * el.quantity
      }, 0 )
    }
  },
  methods: {
    ...mapActions([
      'DELETE_PRODUCT_FROM_CART'
    ]),
    deleteProductFromCart(index) {
      this.DELETE_PRODUCT_FROM_CART(index)
    },
    toggleActiveMiniCart(event) {
      this.$emit('toggleActiveMiniCart', {target: event.target})
    }
  }
}
</script>
<style lang="scss">
.v-mini-cart {
  opacity: 0;
  visibility: hidden;
  transition: all .5s ease-in-out;
  cursor: auto;
  z-index: 2;
  color: #000;
  width: 300px;
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 0 0 5px 5px;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &__list {
    max-height: 270px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__bottom {
    background: #cdcdcd;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  &__sum {
    font-weight: 600;
    font-size: .8em;
    margin: 0 0 10px 0;
  }
}

</style>