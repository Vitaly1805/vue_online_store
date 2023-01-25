import axios from 'axios'

export default {
  FETCH_PRODUCTS: async (context) => {
    let {data} = await axios.get('http://localhost:3000/products')
    context.commit('SET_PRODUCTS', data)
  }
}