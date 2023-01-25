<template lang="">
    <div class="v-cart">
      <div class="v-cart__body _container">
        <div class="v-cart__title _title">
					Корзина
				</div> 
        <div class="v-cart__list">
          <vCartItem
            v-for="(item, index) in CART"
            :key="item.id"
            :product="item"
            @deleteProductFromCart="deleteProductFromCart(index)"
          />
        </div>
        <div class="v-cart__result"
          v-if="SUM_CART">
          <div class="v-cart__subtitle">
            Итого: 
          </div>
          <div class="v-cart__sum">
            {{ SUM_CART }} руб.
          </div>
        </div>
        <div class="v-cart__empty"
          v-else>
          Ваша корзина пока не содержит товаров
        </div>
      </div>
    </div>
</template>
<script>

import vCartItem from './v-cart-item.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
      vCartItem
    },
    computed: {
      ...mapGetters([
        'CART',
        'SUM_CART'
      ])
    },
    methods: {
      ...mapActions([
        'DELETE_PRODUCT_FROM_CART'
      ]),
      deleteProductFromCart(index) {
        this.DELETE_PRODUCT_FROM_CART(index)
      }
    }
}
</script>
<style lang="scss">
.v-cart {

  &__body {
  }

  &__title {
    margin: 20px 0;
  }

  &__result {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #e1dfdf;
    padding: 20px;
    margin: 20px 0;
  }

  &__subtitle {
    font-weight: 600;
    font-size: 1.2em;
    margin: 0 20px 0 0;
  }

  &__sum {
    font-weight: 600;
    font-size: 1.4em;
  }

  &__empty {
    height: calc(100vh - #{$heightHeader} - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__list {
  }

  &_container {
  }

  &_title {
  }
}

</style>