export default {
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