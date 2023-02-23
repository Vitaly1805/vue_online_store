import { createRouter, createWebHashHistory } from 'vue-router'
import vCatalog from '../pages/catalog/v-catolog.vue'
import vCart from '../pages/cart/v-cart.vue'
import vProduct from '../pages/product/v-product.vue'

const routes = [
  { path: '/', name: 'catalog', component: vCatalog },
  { path: '/cart', name: 'cart', component: vCart },
  { path: '/product', name: 'product', component: vProduct }
]

export let router = createRouter({
  history: createWebHashHistory(),
  routes
})