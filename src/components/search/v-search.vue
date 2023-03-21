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
            this.value = event.target.value.trim().toLowerCase()
            event.target.blur()

            const products = this.filterProducts()

            this.SET_CATALOG(products)
        },
        searchMiniProducts(event) {
            setTimeout(() => {
                if(event.code !== 'Enter' && this.value.length > 3) {
                    this.miniProducts = this.filterProducts().slice(0, 11)
                } else {
                    this.miniProducts = []
                }
            })
        },
        filterProducts() {
            return this.PRODUCTS.filter(product => product.name.toLowerCase().includes(this.value))
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
        $props() {
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