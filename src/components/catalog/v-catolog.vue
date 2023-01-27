<template>
  <div class="v-catalog">
    <div class="v-catalog__body _container">
      <div class="v-catalog__block">
        <div class="v-catalog__filter">
          <div class="v-catalog__slider">
            <div class="v-catalog__slider-inputs">
              <input 
                type="number" 
                class="v-catalog__slider-input"
                v-if="sliderOptions.maxValue"
                @change="setPrice($event, 'minValue')"
                :value="sliderOptions.minValue"
              >
              <span>-</span>
              <input 
                type="number" 
                class="v-catalog__slider-input"
                v-if="sliderOptions.maxValue"
                @change="setPrice($event, 'maxValue')"
                :value="sliderOptions.maxValue"
              >
            </div>
            <vSlider v-if="sliderOptions.maxValue"
              :value="[sliderOptions.minValue, sliderOptions.maxValue]"
              :processStyle="sliderOptions.processStyle"
              :min="sliderOptions.min"
              :max="sliderOptions.max"
              :interval="sliderOptions.interval"
              :width="sliderOptions.width"
              @changeValue="filterProducts"
            />
          </div>
        </div>
      </div>
      <div class="v-catalog__block">
        <div class="v-catalog__title _title">
          Каталог
        </div> 
        <div class="v-catalog__view">
          {{ this.sliderValue }}
          <vSelect
            :options="sortOptions"  
            :selected="selectedSortOption"
            @selectOption="selectSortOption"
          />
        </div>
        <div class="v-catalog__list">
          <vCatalogItem
            v-for="product in products"
            :key="product.id"
            :product="product"
            @addProductToCart="addProductToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import vCatalogItem from './v-catalog-item.vue';
import vSelect from '../select/v-select.vue'
import vSlider from '../slider/v-slider.vue'
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem,
        vSelect,
        vSlider
    },
    data() {
      return {
        sortOptions: [
          {name: 'Без сортировки', value: '0', sort: this.sortProductsByStart},
          {name: 'Сначала дешевле', value: '1', sort: this.sortProductsByCheap},
          {name: 'Сначала дороже', value: '2', sort: this.sortProductsByExpensive}
        ],
        selectedSortOption: {
          name: 'Без сортировки', 
          value: '0'
        },
        products: [],
        sliderOptions: {
          interval: 1000,
          processStyle: {
            backgroundColor : 'black'
          },
          width: '95%'
        },
        minPrice: 0,
        maxPrice: 0
      }
    },
    methods: {
      ...mapActions([
        'FETCH_PRODUCTS',
        'ADD_PRODUCT_TO_CART'
      ]),
      addProductToCart(product) {
        this.ADD_PRODUCT_TO_CART(product)
      },
      selectSortOption(index) {
        if (this.selectedSortOption !== this.sortOptions[index]) {
          this.selectedSortOption = this.sortOptions[index]
          this.selectedSortOption.sort()
        }
      },
      sortProductsByStart() {
        this.products = this.PRODUCTS.slice(0)
      },
      sortProductsByCheap() {
        this.products.sort((a, b) => {
          return a.price - b.price
        })
      },
      sortProductsByExpensive() {
        this.products.sort((a, b) => {
          return b.price - a.price
        })
      },
      setSliderOptions() {
        if(this.PRODUCTS.length > 0) {
          let min = this.PRODUCTS[0].price
          let max = this.PRODUCTS[0].price

          this.PRODUCTS.forEach(el => {
            min = el.price < min ? el.price : min
            max = el.price > max ? el.price : max
          })

          min = min - min % this.sliderOptions.interval
          max = (max + this.sliderOptions.interval) - max % this.sliderOptions.interval

          this.sliderOptions.min = min
          this.sliderOptions.minValue = min
          this.sliderOptions.max = max 
          this.sliderOptions.maxValue = max
        }
      },
      filterProducts(values) {
        this.sliderOptions.minValue = values[0]
        this.sliderOptions.maxValue = values[1]
        const min = values[0]
        const max = values[1]

        this.products = this.PRODUCTS.filter(el => el.price >= min && el.price <= max)
      },
      // setMinValue(event) {
      //   const value = event.target.value
      //   const min = this.sliderOptions.min
      //   const max = this.sliderOptions.max

      //   this.sliderOptions.minValue = value < min ? min : value
      //   this.sliderOptions.minValue = value > max ? max : this.sliderOptions.minValue 
      //   this.filterProducts([this.sliderOptions.minValue, this.sliderOptions.maxValue])
      // },
      // setMaxValue(event) {
      //   const value = event.target.value
      //   const max = this.sliderOptions.max
      //   const min = this.sliderOptions.min

      //   this.sliderOptions.maxValue = value > max ? max : value
      //   this.sliderOptions.maxValue = value < min ? min : this.sliderOptions.maxValue
      //   this.filterProducts([this.sliderOptions.minValue, this.sliderOptions.maxValue])
      // },
      setPrice(event, valueProperty) {
        console.log(event)
        const value = event.target.value
        const max = this.sliderOptions.max
        const min = this.sliderOptions.min

        this.sliderOptions[valueProperty] = value > max ? max : value
        this.sliderOptions[valueProperty] = value < min ? min : this.sliderOptions[valueProperty]
        this.filterProducts([this.sliderOptions.minValue, this.sliderOptions.maxValue])
      }
    },
    computed: {
      ...mapGetters(["PRODUCTS"])
    },
    created() {
      this.FETCH_PRODUCTS()
        .then(() => {
          this.sortProductsByStart()
          this.setSliderOptions()
        })
    }
}
</script>

<style lang="scss">
.v-catalog {
  &__body {
    display: flex;
    gap: 0 20px;
    padding: 20px 0 0 0;
  }

	&__list {
		display: grid;
    grid-template-columns: repeat(3, 1fr);
		padding: 20px 0;
	}

  &__view {
    display: flex;
    justify-content: space-between;
  }

  &__slider {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__slider-inputs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px 0;
  }

  &__slider-input {
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    padding: 5px;
    width: 100px;
  }

  &__filter {
    padding: 10px 5px;
    width: 300px;
    border: 1px solid #cdcdcd;
  }
}

.slider {
  /* overwrite slider styles */
  width: 200px;
}
</style>