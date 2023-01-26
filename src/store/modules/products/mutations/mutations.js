export default {
  SET_PRODUCTS(state, products) {
    state.products = products
    state.startProducts = products.slice(0)
  },
  SORT_PRODUCT_BY_CHEAP(state) {
    state.products.sort((a, b) => {
      return a.price - b.price
    })
  },
  SORT_PRODUCT_BY_EXPENSIVE(state) {
    state.products.sort((a, b) => {
      return b.price - a.price
    })
  },
  SORT_PRODUCT_BY_START(state) {
    state.products = state.startProducts.slice(0)
  }
}