<template>
  <div class="v-catalog">
    <div class="v-catalog__body _container">
      <div class="v-catalog__block">
        <vFilter
          v-if="PRODUCTS.length"
          :products="products"
          @setProducts="setProducts"
          :isDisable="isMessage"
        />
      </div>
      <div class="v-catalog__block">
        <div class="v-catalog__title _title">
          Каталог
        </div> 
        <div class="v-catalog__view">
          <vSelect
            v-if="PRODUCTS.length"
            :options="sortOptions"
            :selected="selectedSortOption"
            @selectOption="selectSortOption"
            :isDisable="isMessage"
          />
        </div>
        <div class="v-catalog__list">
          <vCatalogItem
            v-for="(product, index) in CATALOG"
            :key="product.id"
            :product="product"
            :index="index"
          />
        </div>
        <div
            class="v-catalog__message"
            v-show="isMessage"
          >
            По вашему запросу ничего не найдено
          </div>
      </div>
    </div>
  </div>
</template>
<script>

import vCatalogItem from '../../components/catalog/v-catalog-item.vue';
import vSelect from '../../components/select/v-select.vue'
import vFilter from '../../components/filter/v-filter.vue'
import { mapGetters, mapMutations } from "vuex";

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
        products: [],
        isMessage: false
      }
    },
    methods: {
      ...mapMutations([
        'SET_CATALOG',
        'SORT_CATALOG_BY_CHEAP',
        'SORT_CATALOG_BY_EXPANSIVE',false
      ]),
      selectSortOption(index) {
        if (this.selectedSortOption !== this.sortOptions[index]) {
          this.selectedSortOption = this.sortOptions[index]
          this.selectedSortOption.sort()
        }
      },
      sortProductsByStart() {
        if(this.CATALOG.length > 0) {
          const products = this.PRODUCTS.filter(el => this.CATALOG.includes(el))
          
          this.SET_CATALOG(products)
          this.isMessage = false
        } else {
          this.isMessage = true
        }
      },
      sortProductsByCheap() {
        this.SORT_CATALOG_BY_CHEAP()
      },
      sortProductsByExpensive() {
        this.SORT_CATALOG_BY_EXPANSIVE()
      },
      setProducts(products) {
        this.SET_CATALOG(products)
        this.selectedSortOption.sort()
      }
    },
    computed: {
      ...mapGetters([
        "PRODUCTS",
        "CATALOG"
      ])
    },
    watch: {
      CATALOG : function (val) {
        this.isMessage = val.length ? false : true
      }
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

  &__message {
    font-size: 1.1em;
    font-weight: 600;
  }
}
</style>