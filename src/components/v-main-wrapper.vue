<template>
    <div class="v-main-wrapper">
        <vHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import vHeader from './header/v-header.vue'
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: 'v-main-wrapper',
    components: {
      vHeader
    },
    methods: {
      ...mapActions([
        'FETCH_PRODUCTS'
      ]),
      ...mapMutations([
        'SET_CATALOG'
      ])
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ])
    },
    created() {
      this.FETCH_PRODUCTS()
        .then(() => {
            this.SET_CATALOG(this.PRODUCTS.slice(0))
        })
    }
}
</script>

<style lang="scss">
.v-main-wrapper {
  padding: 65px 0 0 0;
}
</style>