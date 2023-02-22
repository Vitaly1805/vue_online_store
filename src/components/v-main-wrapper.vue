<template>
    <div class="v-main-wrapper">
        <vHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import vHeader from './header/v-header.vue'

export default {
    name: 'v-main-wrapper',
    components: {
      vHeader
    }
}
</script>

<style lang="scss">
.v-main-wrapper {
  padding: 65px 0 0 0;
}
</style>