<template>
    <div class="v-main-wrapper">
        <vHeader />
        <keep-alive>
          <router-view></router-view>
        </keep-alive> 
				<input type="text" v-model="title">
    </div>
</template>

<script>
import vHeader from './v-header.vue'

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