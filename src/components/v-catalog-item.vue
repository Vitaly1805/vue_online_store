<template>
    <div class="v-catalog-item">
			<img class="v-catalog-item__img" :src=" require(`../assets/img/${product.img}`) " alt=""> 
			<p>{{product.name}}</p>
			<p>Price: {{product.price}}</p>
			<button @click="sendDataToParent">Bue</button>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
		props: {
			product: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			sendDataToParent() {
				this.$emit('sendDataToParent', this.product.id)
			}
		}
}
</script>
<style lang="scss">
    .v-catalog-item {
			width: calc(100% / 4 - 15px);
			background: #cdcdcd;
			padding: $padding;
			margin: 0 20px 0 0;	

			&:nth-child(4n) {
				margin: 0;
			}

			&__img {
				width: 100%;
			}
    }
</style>