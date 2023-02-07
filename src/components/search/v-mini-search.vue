<template>
  <div class="v-mini-search">
    <VMiniSearchItem
      v-for="product in CATALOG"
      :key=product.id
      :product=product
    />
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import VMiniSearchItem from './v-mini-search-item.vue';

export default {
  name: "v-mini-search",
  components: {
    VMiniSearchItem
  },
  props: {
    value: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    ...mapGetters(['CATALOG'])
  }
}

</script>

<style lang="scss">
.v-mini-search {
  background: red;
  width: 320px;
  height: 100px;
  position: absolute;
  top: 49px;
  left: 0;
}

</style>  