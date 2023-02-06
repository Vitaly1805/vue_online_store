<template>
    <div class="v-catalog-item">
      <div class="v-catalog-item__img-block" @click="toggleModal">
        <img class="v-catalog-item__img" :src=" require(`../../assets/img/${product.img}`) " alt=""> 
      </div>
      <div class="v-catalog-item__info">
        <p 
          class="v-catalog-item__title"
          @click="toggleModal" 
        >{{product.name}}
        </p>
        <p class="v-catalog-item__price">{{product.price}}</p>
      </div>
      <button class="v-catalog-item__button _btn" @click="addProductToCart">Добавить</button>
      <vCardProduct
        v-if="isShow"
        :product="product"
        :index="index"
        @closeModal="toggleModal" 
      />
    </div>
</template>

<script>

import vCardProduct from './v-card-product.vue';

export default {
    name: "v-catalog-item",
    components: {
      vCardProduct
    },
    data() {
      return {
        isShow: false
      }
    },
		props: {
			product: {
				type: Object,
				default() {
					return {}
				}
			},
      index: {
        type: Number,
        default() {
          return 0
        }
      }
		},
    methods: {
      addProductToCart() {
        this.$emit('addProductToCart', this.product)
      },
      toggleModal() {
        document.body.classList.toggle('lock')
        this.isShow = !this.isShow
      }
    }
}
</script>
<style lang="scss">
    .v-catalog-item {
      height: 380px;
			background: #fff;
			padding: 20px;
			margin: 0 20px 20px 0;	
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      transition: box-shadow .5s ease-out;

      &:hover {
        box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
      }

			&:nth-child(3n) {
				margin: 0;
			}

			&__img {
				width: 100%;
        height: 200px;
        object-fit: contain;
			}

      &__img-block {
        cursor: pointer;
        width: 100%;
      }

      &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__title {
        margin: 10px 0;
        font-size: .9em;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      &__price {
        font-weight: 600;
        font-size: 18px;
        position: relative;
        display: inline-block;
        margin: 0 15px 20px 0;

        &::before {
          content: '\20BD';
          position: absolute;
          right: -15px;
        }
      }
    }
</style>