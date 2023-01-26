import axios from 'axios'

export default {
  FETCH_PRODUCTS: async (context) => {
    let {data} = await axios.get('http://localhost:3000/products')
    context.commit('SET_PRODUCTS', data)
  },
  SORT_PRODUCT_BY_CHEAP(context) {
    context.commit('SORT_PRODUCT_BY_CHEAP')
  },
  SORT_PRODUCT_BY_EXPENSIVE(context) {
    context.commit('SORT_PRODUCT_BY_EXPENSIVE')
  },
  SORT_PRODUCT_BY_START(context) {
    context.commit('SORT_PRODUCT_BY_START')
  }
}