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
        title: 'Ho Chi Minh',
        location: 'ho chi minh',
        id: 'hcm',
        image: '/static/hcm.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ',
        date: '2018-06-27'
      },
      {
        title: 'Ha Noi',
        location: 'ha noi',
        id: 'hn',
        image: '/static/hn.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ',
        date: '2018-06-26'
      },
      {
        title: 'Da Nang',
        location: 'da nang',
        id: 'dn',
        image: '/static/dn.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ',
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
