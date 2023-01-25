export default {
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
}