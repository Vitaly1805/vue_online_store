<template>
  <div class="v-filter">
    <div class="v-filter__body">
      <vSliderPrice 
        @setRangePrice="setRangePrice"
        @filterProducts="filterProducts"
      />
    </div>
  </div>
</template>
<script>

import vSliderPrice from './v-filter-price.vue'
import { mapGetters } from "vuex";

export default {
    name: 'v-filter',
    props: {
      products: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      vSliderPrice
    },
    data() {
      return {
        filterOptions: {}
      }
    },
    methods: {
      filterProducts() {
        const filteredProducts = this.PRODUCTS.filter(el => {
          return el.price >= this.filterOptions.min &&
                 el.price <= this.filterOptions.max
        })

        this.$emit('setProducts', filteredProducts)
      },
      setRangePrice({min, max}) {
        this.filterOptions.min = min
        this.filterOptions.max = max
      }
    },
    computed: {
      ...mapGetters(['PRODUCTS'])
    }
}
</script>

<style lang="scss">
.v-filter {
  padding: 10px 5px;
  width: 300px;
  border: 1px solid #cdcdcd;
  position: relative;

  &__button {
    margin: 20px auto 0 auto;
  }
}

</style>