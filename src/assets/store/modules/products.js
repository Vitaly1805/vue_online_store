import axios from 'axios'

export default {
	state:{
		products: []
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  },
	actions: {
		FETCH_PRODUCTS: async (context) => {
			let {data} = await axios.get('http://localhost:3000/products')
			context.commit('SET_PRODUCTS', data)
		}
	},
	getters: {
		PRODUCTS: state => {
			return state.products
		}
	}
}