<template>
    <div class="v-catalog">
			<div class="v-catalog__body">
				<div class="v-catalog__title">
					Catalog
				</div> 
				<div class="v-catalog__list">
					<vCatalogItem
						v-for="product in products"
						v-bind:key="product.id"
						v-bind:product="product"
						@sendDataToParent="printIdOfProduct"
					/>
				</div>
			</div>
    </div>
</template>
<script>
import vCatalogItem from './v-catalog-item.vue';

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem
    },
		data() {
			return {
				products: [
					{id: 1, name: "Text1", price: 222, img: 'bike-1.jpg'},
					{id: 2, name: "Text2", price: 111, img: 'bike-2.jpg'},
					{id: 3, name: "Text3", price: 333, img: 'bike-3.jpg'},
					{id: 4, name: "Text4", price: 444, img: 'bike-4.jpg'}
				]
			}
		},
		methods: {
			printIdOfProduct(data) {
				console.log(data)
			}
		}
}
</script>

<style lang="scss">
.v-catalog {
	&__body {
		
	}

	&__list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 20px;
	}
}
</style>