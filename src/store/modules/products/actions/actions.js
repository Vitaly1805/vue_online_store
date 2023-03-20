import axios from 'axios'

export default {
  FETCH_PRODUCTS: (context) => {
    axios.get('http://localhost:3000/products')
      .then(({data}) => {
        context.commit('SET_PRODUCTS', data)
      })
  }
}