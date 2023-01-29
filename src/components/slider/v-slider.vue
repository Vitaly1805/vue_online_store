<template>
  <VueSlider 
    v-model="valueSlider"
    :interval="interval"
    :min="min"
    :max="max"
    :processStyle="processStyle" 
    :width="width"
    tooltip="none"
    @change="changeValue"
  />
</template>

<script>
import VueSlider from 'vue-3-slider-component'

export default {
  components: {
    VueSlider
  },
  props: {
    value: {
      type: [Number, Array]
    },
    processStyle: {
      type: Object
    },
    interval: {
      type: Number
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    width: {
      type: [Number, String]
    }
  },
  computed: {
    valueSlider() {
      return this.value
    }
  },
  methods: {
    changeValue(value) {
      this.$emit('changeValue', value)
    }
  }
}
</script>