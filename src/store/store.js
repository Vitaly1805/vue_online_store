import { createStore } from 'vuex'
import products from './modules/products/products'
import cart from './modules/cart/cart'
import manufacturers from './modules/manufacturers/manufacturers'

export const store = createStore({
	modules: {
		products,
    cart,
    manufacturers
	}
})
