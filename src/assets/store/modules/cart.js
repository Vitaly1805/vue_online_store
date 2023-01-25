export default {
	state:{
		cart: []
  },
  mutations: {
    SET_CART (state, product) {
      let isProductExists = false
      
      if(state.cart.length) {
        state.cart.forEach(item => {
          if(item.id === product.id) {
            item.quantity++
            isProductExists = true
          }
        })
      }

      if(!isProductExists) {
        product.quantity = 1
        state.cart.push(product)
      }
    },
    DELETE_PRODUCT_FROM_CART (state, index) {
      state.cart.splice(index, 1)
    }
  },
	actions: {
		ADD_PRODUCT_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_PRODUCT_FROM_CART({commit}, index) {
      commit('DELETE_PRODUCT_FROM_CART', index)
    }
	},
	getters: {
		CART(state) {
			return state.cart
		},
    SUM_CART(state) {
			return state.cart.reduce((acc, item) => {
        return (acc + item.price) * item.quantity
      }, 0)
		},
    QUANTITY_CART(state) {
      return state.cart.reduce((acc, item) => {
        return acc +  item.quantity
      }, 0)
    }
	}
}