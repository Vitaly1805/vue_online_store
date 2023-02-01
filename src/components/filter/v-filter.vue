<template>
  <div class="v-filter">
    <div class="v-filter__body">
      <vSliderPrice 
        @setRangePrice="setRangePrice"
        @filterProducts="filterProducts"
      />
      <vManufacturer
        @addManufacturer="addManufacturer"
      />
    </div>
  </div>
</template>
<script>

import vSliderPrice from './v-filter-price.vue'
import vManufacturer from './v-filter-manufacturer.vue'
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
      vSliderPrice,
      vManufacturer
    },
    data() {
      return {
        filterOptions: {},
        manufacturers: []
      }
    },
    methods: {
      filterProducts() {
        const filteredProducts = this.PRODUCTS.filter(product => {
          return product.price >= this.filterOptions.min &&
                 product.price <= this.filterOptions.max &&
                 this.isManufacturer(product)
        })

        this.$emit('setProducts', filteredProducts)
      },
      setRangePrice({min, max}) {
        this.filterOptions.min = min
        this.filterOptions.max = max
      },
      isManufacturer(product) {
        if(this.manufacturers.length > 0) {
          this.manufacturers.forEach(manufacturer => {
            if(manufacturer === product.manufacturer) {
              return true
            }
          })

          return false
        } 

        return true
      },
      addManufacturer(manufacturer) {
        this.manufacturers.push(manufacturer)
        this.filterProducts()
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

  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }

  &__button {
    margin: 20px auto 0 auto;
  }
}

</style>