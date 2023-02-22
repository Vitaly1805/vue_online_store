<template>
  <div 
    class="v-mini-search">
    <VMiniSearchItem
      v-for="product in products"
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
    },
    products: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters(['CATALOG'])
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if(!event.target.closest('.v-mini-search')) {
        this.$emit('clearSearch')
      }
    })
  }
}

</script>

<style lang="scss">
.v-mini-search {
  background: #fff;
  box-shadow: 0px -1px 8px 5px rgba(34, 60, 80, 0.2);
  overflow-y: auto;
  width: 320px;
  max-height: 220px;
  position: absolute;
  top: 49px;
  left: 0;
}

</style>  