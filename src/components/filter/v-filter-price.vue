<template>
  <div class="v-filter-price">
    <div class="v-filter-price__slider-inputs"
      v-if="sliderOptions.maxValue"
    >
      <input 
        type="number" 
        class="v-filter-price__slider-input"
        @change="setPrice($event, 'minValue')"
        :value="sliderOptions.minValue"
      >
      <span>-</span>
      <input 
        type="number" 
        class="v-filter-price__slider-input"
        @change="setPrice($event, 'maxValue')"
        :value="sliderOptions.maxValue"
      >
    </div>
    <vSlider 
      v-if="sliderOptions.maxValue"
      :value="[sliderOptions.minValue, sliderOptions.maxValue]"
      :processStyle="sliderOptions.processStyle"
      :min="sliderOptions.min"
      :max="sliderOptions.max"
      :interval="sliderOptions.interval"
      :width="sliderOptions.width"
      @changeValue="changeValues"
      @dragEndValue="filterProducts"
    />
  </div>
</template>
<script>

import vSlider from '../slider/v-slider.vue'
import { mapGetters } from "vuex";

export default {
    name: 'v-filter-price',
    components: {
        vSlider
    },
    data() {
      return {
        sliderOptions: {
          interval: 1000,
          processStyle: {
            backgroundColor : 'black'
          },
          width: '95%'
        }
      }
    },
    methods: {
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

          this.$emit('setRangePrice', {min: this.sliderOptions.minValue, max: this.sliderOptions.maxValue})
        }
      },
      filterProducts() {
        this.$emit('filterProducts')
      },
      changeValues(values) {
        this.sliderOptions.minValue = values[0]
        this.sliderOptions.maxValue = values[1]
        
        this.$emit('setRangePrice', {min: this.sliderOptions.minValue, max: this.sliderOptions.maxValue})
      },
      setPrice(event, valueProperty) {
        const value = +event.target.value
        const max = this.sliderOptions.max
        const min = this.sliderOptions.min

        this.sliderOptions[valueProperty] = value > max ? max : value
        this.sliderOptions[valueProperty] = value < min ? min : this.sliderOptions[valueProperty]
        event.target.value = this.sliderOptions[valueProperty]
        this.$emit('setRangePrice', {min: this.sliderOptions.minValue, max: this.sliderOptions.maxValue})
        this.$emit('filterProducts')
      }
    },
    computed: {
      ...mapGetters(['PRODUCTS'])
    },
    mounted() {
      this.setSliderOptions()
    }
}
</script>

<style lang="scss">
.v-filter-price {
  display: flex;
  flex-direction: column;
  align-items: center;

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
}
</style>