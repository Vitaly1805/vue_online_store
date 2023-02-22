<template>
  <div class="v-mini-search-item">
    <div class="v-mini-search-item__body">
      <img :src=" require(`../../assets/img/${product.img}`) " alt="" class="v-mini-search-item__image">
      <div class="v-mini-search-item__block">
        <div class="v-mini-search-item__name">
          {{ product.name }}
        </div>
        <div class="v-mini-search-item__price">
          Цена: {{ product.price }} р.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-mini-search-item",
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
.v-mini-search-item {
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    background: #f5f5f5;
  }

  &__body {
    padding: 5px 10px;
    display: flex;
    gap: 10px;
  }

  &__image {
    object-fit: cover;
    width: 40px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
  }

  &__name {
    font-size: 14px;
  }

  &__price {
    font-size: 12px;
  }
}

</style>  