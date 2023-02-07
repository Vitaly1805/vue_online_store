<template>
    <div class="v-search">
        <input 
            class="v-search__input" 
            type="text" 
            placeholder="Поиск"
            @keydown.enter.stop="searchProducts"
            v-model="value"
        >
        <vMiniSearch
            :value="value"
        />
    </div>
    </template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import vMiniSearch from './v-mini-search.vue'

export default {
    name: "v-search",
    data() {
        return {
            value: ''
        }
    },
    components: {
        vMiniSearch
    },
    methods: {
        ...mapMutations(['SET_CATALOG']),
        searchProducts(event) {
            this.value = event.target.value.trim().toLowerCase()
            event.target.blur()
            event.target.value = ''

            const products = this.PRODUCTS.filter(product => {
                return product.name.toLowerCase().includes(this.value)
            })

            this.SET_CATALOG(products)
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CATALOG'
        ])
    }
}

</script>

<style lang="scss">
.v-search {
    width: 100%;
    margin: 0 10px;
    position: relative;

    &__input {
        width: 100%;
        padding: 8px 10px;
        border-radius: 20px;
        background: #cdcdcd;
        transition: all .5s ease-in-out;

        &:focus {
            background: #fff;
        }
    }
}

</style>  