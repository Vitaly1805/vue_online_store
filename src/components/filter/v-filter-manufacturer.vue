<template>
  <div class="v-filter-manufacturer">
    <vCheckbox
      v-for="manufacturer in MANUFACTURERS"
      :key="manufacturer.id"
      :id="manufacturer.id"
      :value="manufacturer.name"
      :label="manufacturer.name"
      @SendFl="filterProducts"
    />
  </div>
</template>
<script>

import vCheckbox from "../checkbox/v-checkbox.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'v-filter-manufacturer',
    components: {
      vCheckbox,
    },
    methods: {
      ...mapActions(['FETCH_MANUFACTURERS']),
      filterProducts(data) {
        if(data.fl) {
          this.$emit('addManufacturer', data.value)
        }
      }
    },
    computed: {
      ...mapGetters(['MANUFACTURERS']),
    },
    created() {
      this.FETCH_MANUFACTURERS()
    }
}
</script>

<style lang="scss">
.v-filter-manufacturer {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  margin: 0 0 0 10px;
}
</style>