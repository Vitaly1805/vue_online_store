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
    },
    INCREMENT_QUANTITY_PRODUCT (state, index) {
      state.cart[index].quantity++
    },
    DECREMENT_QUANTITY_PRODUCT(state, index) {
      let product = state.cart[index]

      if(product.quantity > 1) {
        product.quantity--
      } else {
        product.quantity = 1
      }
    },
    SET_QUANTITY_PRODUCT (state, info) {
      let quantity = info.quantity
      let product = state.cart[info.index]

      if(quantity > 0) {
        product.quantity = info.quantity
      } else {
        product.quantity = 1
      }
    },
  },
	actions: {
		ADD_PRODUCT_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_PRODUCT_FROM_CART({commit}, index) {
      commit('DELETE_PRODUCT_FROM_CART', index)
    },
    INCREMENT_QUANTITY_PRODUCT({commit}, index) {
      commit('INCREMENT_QUANTITY_PRODUCT', index)
    },
    DECREMENT_QUANTITY_PRODUCT({commit}, index) {
      commit('DECREMENT_QUANTITY_PRODUCT', index)
    },
    SET_QUANTITY_PRODUCT({commit}, info) {
      commit('SET_QUANTITY_PRODUCT', info)
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
    },
    SUM_PRODUCT: state => index => {
      let product = state.cart[index]
      return product.quantity * product.price
    }
	}
}