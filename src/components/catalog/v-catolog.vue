<template>
  <div class="v-catalog">
    <div class="v-catalog__body _container">
      <div class="v-catalog__block">
        <vFilter
          v-if="PRODUCTS.length"
          :products="products"
          @setProducts="setProducts"
        />
      </div>
      <div class="v-catalog__block">
        <div class="v-catalog__title _title">
          Каталог
        </div> 
        <div class="v-catalog__view">
          <vSelect
            :options="sortOptions"
            :selected="selectedSortOption"
            @selectOption="selectSortOption"
          />
        </div>
        <div class="v-catalog__list">
          <vCatalogItem
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
            :index="index"
            @addProductToCart="addProductToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import vCatalogItem from './v-catalog-item.vue';
import vSelect from '../select/v-select.vue'
import vFilter from '../filter/v-filter.vue'
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem,
        vSelect,
        vFilter
    },
    data() {
      return {
        sortOptions: [
          {name: 'Без сортировки', value: '0', sort: this.sortProductsByStart},
          {name: 'Сначала дешевле', value: '1', sort: this.sortProductsByCheap},
          {name: 'Сначала дороже', value: '2', sort: this.sortProductsByExpensive}
        ],
        selectedSortOption: {
          name: 'Без сортировки', 
          value: '0',
          sort: this.sortProductsByStart
        },
        products: []
      }
    },
    methods: {
      ...mapActions([
        'FETCH_PRODUCTS'
      ]),
      ...mapMutations([
        'SET_CART'
      ]),
      addProductToCart(product) {
        this.SET_CART(product)
      },
      selectSortOption(index) {
        if (this.selectedSortOption !== this.sortOptions[index]) {
          this.selectedSortOption = this.sortOptions[index]
          this.selectedSortOption.sort()
        }
      },
      sortProductsByStart() {
        if(this.products.length > 0) {
          this.products = this.PRODUCTS.filter(el => this.products.includes(el))
        } else {
          this.products = this.PRODUCTS.slice(0)
        }
      },
      sortProductsByCheap() {
        this.products.sort((a, b) => {
          return a.price - b.price
        })
      },
      sortProductsByExpensive() {
        this.products.sort((a, b) => {
          return b.price - a.price
        })
      },
      setProducts(products) {
        this.products = products
        this.selectedSortOption.sort()
      }
    },
    computed: {
      ...mapGetters(["PRODUCTS"])
    },
    created() {
      this.FETCH_PRODUCTS()
        .then(() => {
          this.sortProductsByStart()
        })
    }
}
</script>

<style lang="scss">
.v-catalog {
  &__body {
    display: flex;
    gap: 0 20px;
    padding: 20px 0 0 0;
  }

	&__list {
		display: grid;
    grid-template-columns: repeat(3, 1fr);
		padding: 20px 0;
	}

  &__view {
    display: flex;
    justify-content: space-between;
  }
}
</style>