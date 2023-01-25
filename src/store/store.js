import { createStore } from 'vuex'
import products from './modules/products/products'
import cart from './modules/cart/cart'

export const store = createStore({
	modules: {
		products,
    cart
	}
})
