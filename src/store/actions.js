import * as firebase from 'firebase'
export default {
  createMeetup ({commit}, payload) {
    const meetup = {
      title: payload.title,
      location: payload.location,
      image: payload.image,
      description: payload.description,
      id: payload.id,
      date: payload.date
    }
    commit('createMeetup', meetup)
  },
  signUp ({commit}, payload) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
     .then(
       user => {
         const newUser = {
           id: user.uid,
           registeredMeetups: []
         }
         commit('setUser', newUser)
       }
     )
     .catch(
       error => {
         console.log(error)
       }
     )
  },
  login ({commit}, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
  }
}
