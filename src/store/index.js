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
        image: '/static/hcm.jpg',
        id: 'hcm',
        title: 'Ho Chi Minh',
        date: '2018-06-27'
      },
      {
        image: '/static/hn.jpg',
        id: 'hn',
        title: 'Ha Noi',
        date: '2018-06-26'
      },
      {
        image: '/static/dn.jpg',
        id: 'dn',
        title: 'Da Nang',
        date: '2018-06-28'
      }
    ],
    user: [
      {
        id: '',
        name: '',
        registerMeetups: ''
      }
    ]
  },
  getters,
  mutations,
  actions
})
