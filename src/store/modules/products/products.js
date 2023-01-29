import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

export default {
	state:{
		products: [],
		filteredProducts: []
  },
  mutations,
	actions,
	getters
}