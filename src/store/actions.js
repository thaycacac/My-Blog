import * as firebase from 'firebase'
export default {
  loadMeetups ({commit}) {
    commit('setLoading', true)
    firebase.database().ref('meetups').once('value')
      .then((data) => {
        const meetups = []
        const obj = data.val()
        for (let key in obj) {
          meetups.push({
            id: key,
            title: obj[key].title,
            location: obj[key].location,
            image: obj[key].image,
            description: obj[key].description,
            data: obj[key].data
          })
        }
        commit('setLoading', false)
        commit('setLoadMeetups', meetups)
      })
      .catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
  },
  createMeetup ({commit}, payload) {
    const meetup = {
      title: payload.title,
      location: payload.location,
      image: payload.image,
      description: payload.description,
      date: payload.date
    }
    firebase.database().ref('meetups').push(meetup)
      .then((data) => {
        const key = data.key
        commit('createMeetup', {
          ...meetup,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  signUp ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
     .then(
       user => {
         commit('setLoading', false)
         const newUser = {
           id: user.uid,
           registeredMeetups: []
         }
         commit('setUser', newUser)
       }
     )
     .catch(
       error => {
         commit('setLoading', false)
         commit('setError', error)
         console.log(error)
       }
     )
  },
  login ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  clearError ({commit}) {
    commit('clearError')
  }
}
