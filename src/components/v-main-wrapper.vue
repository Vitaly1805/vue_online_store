<template>
    <div class="v-main-wrapper">
        <p>{{title}}</p>
        <vCatalog />
    </div>
</template>

<script>
import vCatalog from './v-catolog.vue'

export default {
    name: 'v-main-wrapper',
    data() {
        return {
            title: 'Hello niggers:)'
        }
    },
    components: {
        vCatalog
    }
}
</script>

<style>
body {
    /* background: red; */
}
</style>