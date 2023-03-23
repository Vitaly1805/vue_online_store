<template>
  <div class="v-header">
    <div class="v-header__body _container">
      <p
        @click="resetCatalog">
        <router-link to="/">
          <img src="../../assets/img/logo.png" alt="" class="v-header__logo">
        </router-link>
      </p>
      <router-link to="/">
        <div class="v-header__products">
        <div class="v-header__burger">
          <span></span>
        </div>
        <div class="v-header__title">
          все товары
        </div>
        <span class="v-header__arrow"></span>
      </div>  
      </router-link>
      <VSearch
        :isReset="isReset"
      />
      <div class="v-header__cart" @click="showMiniCart">
        <div class="v-header__cart-status">
          Корзина: {{ QUANTITY_CART }} товар
        </div>
        <vMiniCart 
          :class="{ active: isActive }" 
          @hiddenMiniCart="hiddenMiniCart"
        />
      </div>
    </div>
  </div>
</template>

<script>

import vMiniCart from '../cart/v-mini-cart.vue'
import VSearch from '../search/v-search.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "v-header",
  data() {
    return {
      isActive: false,
      isReset: false
    }
  },
  components: {
    vMiniCart,
    VSearch
  },
  computed: {
    ...mapGetters([
      'CART',
      'QUANTITY_CART',
      'CATALOG',
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_CATALOG'
    ]),
    hiddenMiniCart() {
      this.isActive = false
    },
    showMiniCart() {
      this.isActive = true
    },
    resetCatalog() {
      this.SET_CATALOG(this.PRODUCTS)
      this.isReset = true

      setTimeout(() => {
        this.isReset = false 
      });
    }
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if(!event.target.closest('.v-header__cart')) {
        this.isActive = false
      }
    })
  }
}

</script>

<style lang="scss">
.v-header {
  height: $heightHeader;
  background: #000;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    p {
      a {
        height: 100%;
        display: block;
      }
    }
  }

  &__logo {
    padding: 0 30px 0 0;
  }

  &__products {
    height: 50px;
    border-right: 1px solid #cdcdcd;
    border-left: 1px solid #cdcdcd;
    display: flex;
    align-items: center;
    padding: 0 5px;
  }

  &__burger {
    height: 16px;
    width: 16px;
    position: relative;

    span {
      top: 7px;
    }

    span,
    &::before,
    &::after {
      position: absolute;
      height: 2px;
      width: 100%;
      background: #fff;
      left: 0;
    }

    &::before,
    &::after {
      content: '';
    }

    &::before {
      top: 1px;
    }

    &::after {
      bottom: 1px;
    }
  }

  &__title {
    color: #fff;
    font-size: 1.1em;
    white-space: nowrap;
    text-transform: uppercase;
    margin: 0 10px;
  }

  &__arrow {
    margin: 0 7px 0 0;
    height: 10px;
    width: 10px;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      height: 2px;
      width: 100%;
      background: #fff;
    }

    &::before,
    &::after {
      content: '';
    }

    &::before {
      top: 5px;
      left: 0;
      transform: rotate(45deg);
    }

    &::after {
      top: 5px;
      left: 6px;
      transform: rotate(135deg);
    }
  }

  &__cart {
    height: 100%;
    cursor: pointer;
    color: #fff;
    white-space: nowrap;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    position: relative;
  }

  &__cart-icon {
  }

  &__cart-status {
    
  }
}

</style>