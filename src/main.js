import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueCarousel from 'vue-carousel'
import Vuex from 'vuex'
import store from './store'
import * as firebase from 'firebase'
import jsCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.js'
import cssCalendar from 'bulma-extensions/bulma-calendar/dist/css/bulma-calendar.min.css'
import AlertCmp from './components/Share/Alert.vue'

Vue.use(VueCarousel)
Vue.use(Buefy)
Vue.use(Vuex)
// Vue.use(bulmaCalendar)
Vue.component('app-alert', AlertCmp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  jsCalendar,
  cssCalendar,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAioBouGf_jNnem5_8wAm1Hp0MQwNPBDMU',
      authDomain: 'vuejs-http-f93b6.firebaseapp.com',
      databaseURL: 'https://vuejs-http-f93b6.firebaseio.com',
      projectId: 'vuejs-http-f93b6',
      storageBucket: 'vuejs-http-f93b6.appspot.com',
      messagingSenderId: '279849162428'
    })
  }
})
