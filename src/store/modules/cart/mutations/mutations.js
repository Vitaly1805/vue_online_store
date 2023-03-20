export default {
  SET_CART (state, {product, quantity = 1}) {
    const index = state.cart.indexOf(product)

    if(index > -1) {
      state.cart[index].quantity += quantity
    } else {
      product.quantity = quantity
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