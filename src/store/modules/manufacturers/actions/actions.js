import axios from 'axios'

export default {
  FETCH_MANUFACTURERS: async (context) => {
    let {data} = await axios.get('http://localhost:3000/manufacturers')
    context.commit('SET_MANUFACTURERS', data)
  }
}