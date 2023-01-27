<template>
    <div class="v-catalog">
			<div class="v-catalog__body _container">
				<div class="v-catalog__title _title">
					Каталог
				</div> 
        <div class="v-catalog__view">
          <vSelect 
            :options="sortOptions"  
            :selected="selectedSortOption"
            @selectOption="selectSortOption"
          />
          <vSlider/>
        </div>
				<div class="v-catalog__list">
					<vCatalogItem
						v-for="product in products"
						:key="product.id"
						:product="product"
            @addProductToCart="addProductToCart"
					/>
				</div>
			</div>
    </div>
</template>
<script>

import vCatalogItem from './v-catalog-item.vue';
import vSelect from '../select/v-select.vue'
import vSlider from '../slider/v-slider.vue'
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem,
        vSelect,
        vSlider
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
          value: '0'
        },
        products: []
      }
    },
    methods: {
      ...mapActions([
        'FETCH_PRODUCTS',
        'ADD_PRODUCT_TO_CART'
      ]),
      addProductToCart(product) {
        this.ADD_PRODUCT_TO_CART(product)
      },
      selectSortOption(index) {
        if (this.selectedSortOption !== this.sortOptions[index]) {
          this.selectedSortOption = this.sortOptions[index]
          this.selectedSortOption.sort()
        }
      },
      sortProductsByStart() {
        this.products = this.PRODUCTS.slice(0)
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
      }
    },
    computed: {
      ...mapGetters(["PRODUCTS"])
    },
    created() {
      this.FETCH_PRODUCTS()
        .then(() => this.sortProductsByStart())
    }
}
</script>

<style lang="scss">
.v-catalog {
	&__list {
		display: grid;
    grid-template-columns: repeat(3, 1fr);
		padding: 20px 0;
	}

  &__title {
    margin: 20px 0 0 0;
  }

  &__view {
    display: flex;
    justify-content: space-between;
  }
}

.slider {
  /* overwrite slider styles */
  width: 200px;
}
</style>