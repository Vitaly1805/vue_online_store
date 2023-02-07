<template>
  <div class="v-mini-search-item">
    {{ product.name }}
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
.v-mini-results-search-item {
  color: #fff;
}

</style>  