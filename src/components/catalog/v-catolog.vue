<template>
    <div class="v-catalog">
			<div class="v-catalog__body _container">
				<div class="v-catalog__title _title">
					Каталог
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
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem
    },
    methods: {
      ...mapActions([
        'FETCH_PRODUCTS',
        'ADD_PRODUCT_TO_CART'
      ]),
      addProductToCart(product) {
        this.ADD_PRODUCT_TO_CART(product)
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
}
</style>