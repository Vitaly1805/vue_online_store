<template>
    <div class="v-search">
        <input 
            class="v-search__input" 
            type="text" 
            placeholder="Поиск"
            @keydown.enter.stop="searchProducts"
            @keydown.stop="searchMiniProducts"
            v-model="value"
        >
        <vMiniSearch
            :value="value"
            :products="miniProducts"
            @clearSearch="clearMiniSearch"
        />
    </div>
    </template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import vMiniSearch from './v-mini-search.vue'
import * as funcs from './../../assets/js/functions'

export default {
    name: "v-search",
    props: {
        isReset: {
            type: Boolean,
            default() {
                return false
            }
        }
    },  
    data() {
        return {
            value: '',
            miniProducts: []
        }
    },
    components: {
        vMiniSearch
    },
    methods: {
        ...mapMutations(['SET_CATALOG']),
        searchProducts(event) {
            let value = funcs.getPrepareSearchValue(event.target.value)
            event.target.blur()

            const products = this.filterProducts(value)

            this.SET_CATALOG(products)
        },
        searchMiniProducts(event) {
            setTimeout(() => {
                if(event.code !== 'Enter' && this.value.length > 3) {
                    let value = funcs.getPrepareSearchValue(event.target.value)
                    this.miniProducts = this.filterProducts(value).slice(0, 11)
                } else {
                    this.miniProducts = []
                }
            })
        },
        filterProducts(value) {
            return this.PRODUCTS.filter(product => product.name.toLowerCase().includes(value))
        },
        clearMiniSearch() {
            this.miniProducts = []
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CATALOG'
        ])
    },
    watch: {
        '$route.path'() {
            this.value = ''
        },
        isReset() {
            this.value = ''
        }
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