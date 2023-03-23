<template lang="">
  <div class="v-mini-cart"
    v-if="CART.length">
      <div class="v-mini-cart__list"
        @click.stop="hiddenMiniCart">
      <vMiniCartItem
        v-for="item in CART"
        :key="item.id"
        :product="item"
      />
    </div>
    <div class="v-mini-cart__bottom">
      <div class="v-mini-cart__sum">
        Итого: {{ SUM_CART }}
      </div>
      <div class="v-mini-cart__buttons"
      
        >
        <router-link to="/cart">
          <button class="v-mini-cart__button _btn-mini" @click.stop="hiddenMiniCart">
            Корзина
          </button>  
        </router-link>
        <button class="v-mini-cart__button v-mini-cart__button_close _btn-mini" @click.stop="hiddenMiniCart">
            Закрыть
        </button>  
      </div>
    </div>
  </div>
</template>
<script>

import vMiniCartItem from './v-mini-cart-item.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'v-mini-cart',
  components: {
    vMiniCartItem
  },
  computed: {
    ...mapGetters([
      'CART',
      'SUM_CART'
    ])
  },
  methods: {
    hiddenMiniCart() {
      this.$emit('hiddenMiniCart')
    }
  }
}
</script>
<style lang="scss">
.v-mini-cart {
  opacity: 0;
  visibility: hidden;
  cursor: auto;
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