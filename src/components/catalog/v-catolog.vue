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
        </div>
				<div class="v-catalog__list">
					<vCatalogItem
						v-for="product in PRODUCTS"
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
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem,
        vSelect
    },
    data() {
      return {
        sortOptions: [
          {name: 'Без сортировки', value: '0', sort: this.SORT_PRODUCT_BY_START},
          {name: 'Сначала дешевле', value: '1', sort: this.SORT_PRODUCT_BY_CHEAP},
          {name: 'Сначала дороже', value: '2', sort: this.SORT_PRODUCT_BY_EXPENSIVE}
        ],
        selectedSortOption: {
          name: 'Без сортировки', 
          value: '0'
        }
      }
    },
    methods: {
      ...mapActions([
        'FETCH_PRODUCTS',
        'ADD_PRODUCT_TO_CART',
        'SORT_PRODUCT_BY_CHEAP',
        'SORT_PRODUCT_BY_EXPENSIVE',
        'SORT_PRODUCT_BY_START'
      ]),
      addProductToCart(product) {
        this.ADD_PRODUCT_TO_CART(product)
      },
      selectSortOption(index) {
        if (this.selectedSortOption !== this.sortOptions[index]) {
          this.selectedSortOption = this.sortOptions[index]
          this.selectedSortOption.sort()
        }
      }
    },
    computed: {
      ...mapGetters(["PRODUCTS"])
    },
    created() {
      this.FETCH_PRODUCTS()
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
  }
}
</style>