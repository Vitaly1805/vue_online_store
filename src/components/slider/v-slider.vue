<template>
  <VueSlider 
    v-model="value"
    :interval="10" 
    :width="200"
  />
</template>

<script>
import VueSlider from 'vue-3-slider-component'
import { ref } from 'vue'

export default {
  components: {
    VueSlider
  },
  // data () {
  //   return {
  //     value: [0,100]
  //   }
  // }
  setup() {
    const value = ref([0, 100])
    const width = 100
    const marks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    return { value, marks, width}
  },
}
</script>