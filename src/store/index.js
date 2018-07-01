import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaderMeetups: [
      {
        title: 'Ha Noi',
        location: 'ha noi',
        id: 'hn',
        image: '/static/hn.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ',
        date: '2018-06-26'
      }
    ],
    user: null,
    loading: false,
    error: {
      message: ''
    }
  },
  getters,
  mutations,
  actions
})
