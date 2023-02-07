export default {
  SET_CATALOG (state, products) {
    state.catalog = products
  },
  SORT_CATALOG_BY_CHEAP(state) {
    state.catalog.sort((a, b) => {
      return a.price - b.price
    })
  },
  SORT_CATALOG_BY_EXPANSIVE(state) {
    state.catalog.sort((a, b) => {
      return b.price - a.price
    })
  }
}