import { createStore } from 'vuex'
import products from './modules/products/products'
import cart from './modules/cart/cart'
import manufacturers from './modules/manufacturers/manufacturers'
import catalog from './modules/catalog/catalog'

export const store = createStore({
	modules: {
		products,
		cart,
		manufacturers,
		catalog
	}
})
