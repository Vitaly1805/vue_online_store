<template lang="">
  <router-link class="v-catalog-item__route" :to="`/product/${product.id}`">
    <div class="v-mini-cart-item">
      <img :src=" require(`../../assets/img/${product.miniImg}`) " alt="" class="v-mini-cart-item__img">
      <div class="v-mini-cart-item__info">
        <div class="v-mini-cart-item__name">
          {{product.name}}
        </div>
        <div class="v-mini-cart-item__quantity">
          Количество: {{product.quantity}}
        </div>
        <div class="v-mini-cart-item__price">
          Цена: {{product.price}} руб.
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'v-mini-cart-item',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
.v-mini-cart-item {
  display: flex;
  padding: 10px;
  height: 90px;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background: #f5f5f5;
  }

  &__img {
    width: 60px;
    max-height: 70px;
    margin: 0 10px 0 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: .7em;
  }

  &__name {
    font-size: 1.1em;
    margin: 0 0 5px 0;
    white-space: normal;
    text-align: start;
    line-height: 120%;
  }

  &__price {
    
  }

  &__quantity {
    margin: 0 0 5px 0;
  }

  &__delete {
    cursor: pointer;
  }
}

</style>