<template>
  <div class="v-filter-manufacturer">
    <vCheckbox
      v-for="manufacturer in MANUFACTURERS"
      :key="manufacturer.id"
      :id="manufacturer.id"
      :value="manufacturer.name"
      :label="manufacturer.name"
      @SendFl="changeManufacturers"
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
    data() {
      return {
        manufacturers: []
      }
    },
    methods: {
      ...mapActions(['FETCH_MANUFACTURERS']),
      changeManufacturers(data) {
        if(data.fl) {
          this.manufacturers.push(data.value)
        } else if(this.manufacturers.includes(data.value)) {
          const index = this.manufacturers.indexOf()
          this.manufacturers.splice(index, 1);
        }

        this.$emit('changeManufacturers', this.manufacturers)
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