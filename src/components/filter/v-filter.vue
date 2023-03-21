<template>
  <div class="v-filter">
    <div class="v-filter__body">
      <div class="v-filter__title">
        Фильтры
      </div>
      <div class="v-filter__list">
        <div class="v-filter__item v-filter__item_active">
          <div 
            class="v-filter__subtitle"
            @click="toggleShowSpoiler">
            Цена (руб.)
          </div>
          <div class="v-filter__item-body"
            v-if="!isDisable">
            <vSliderPrice 
              @setRangePrice="setRangePrice"
              @filterProducts="filterProducts"
            />
          </div>
        </div>
        <div class="v-filter__item">
          <div 
            class="v-filter__subtitle"
            @click="toggleShowSpoiler">
            Производители
          </div>
          <div class="v-filter__item-body"
            v-if="!isDisable">
            <vManufacturer
              @changeManufacturers="changeManufacturers"
            />
          </div>
        </div>
      </div>
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
      },
      isDisable: {
        type: Boolean,
        default() {
          return false
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
        manufacturers: [],
        isShowSpoilers: [true, false]
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
        let $result = true

        if(this.manufacturers.length > 0) {
          $result = false

          this.manufacturers.forEach(manufacturer => {
            if(manufacturer === product.manufacturer) {
              $result = true
            }
          })
        } 

        return $result
      },
      changeManufacturers(manufacturers) {
        this.manufacturers = manufacturers
        this.filterProducts()
      },
      toggleShowSpoiler(event) {
        const item = event.target.closest('.v-filter__item')
        item.classList.toggle('v-filter__item_active')
      }
    },
    computed: {
      ...mapGetters(['PRODUCTS'])
    }
}
</script>

<style lang="scss">
.v-filter {
  margin: 10px 0 0 0;
  width: 300px;
  position: relative;

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__button {
    margin: 20px auto 0 auto;
  }

  &__list {
    border: 1px solid #cdcdcd;
  }

  &__item {
    &_active {
      .v-filter__subtitle {
        &::after {
          right: 9px;
          top: 50%;
        }

        &::before {
          top: 50%;
          transform: rotate(135deg);
        }
      }

      .v-filter__item-body {
        display: block;
      }
    }

    &-body {
      padding: 10px;
      display: none;
    }
  }

  &__subtitle {
    cursor: pointer;
    padding: 10px;
    font-size: .9em;
    text-align: left;
    border-top: 1px solid #cdcdcd; 
    border-bottom: 1px solid #cdcdcd; 
    position: relative;

    &::after,
    &::before {
      content: '';
      position: absolute;
      right: 5px;
      width: 6px;
      height: 2px;
      background: #000;
    }

    &::after {
      transform: rotate(45deg);
      top: calc(50% - 2px);
    }

    &::before {
      transform: rotate(-45deg);
      top: calc(50% + 2px);
    }
  }

  &__title {
    text-align: left;
    margin: 0 0 10px 0;
    font-weight: 600;
  }
}

</style>