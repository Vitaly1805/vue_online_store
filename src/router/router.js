import { createRouter, createWebHashHistory } from 'vue-router'
import vCatalog from '../components/catalog/v-catolog.vue'
import vCart from '../components/cart/v-cart.vue'

const routes = [
  { path: '/', name: 'catalog', component: vCatalog },
  { path: '/cart', name: 'cart', component: vCart }
]

export let router = createRouter({
  history: createWebHashHistory(),
  routes
})