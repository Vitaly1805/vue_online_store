<template>
    <div class="v-catalog">
        Catalog
        <vCatalogItem />
        <vCatalogItem />
    </div>
</template>
<script>
import vCatalogItem from './v-catalog-item.vue';

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem
    }
}
</script>
<style lang="">
    
</style>