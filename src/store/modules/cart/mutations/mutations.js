export default {
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
  SET_QUANTITY(state, data) {
    if(state.cart.includes(data.product)) {
      const index = state.cart.indexOf(data.product)
      state.cart[index].quantity = data.quantity
    }
  }
}