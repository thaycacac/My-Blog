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
            imageUrl: obj[key].imageUrl,
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
      // imageUrl: payload.imageUrl,
      description: payload.description,
      date: payload.date,
      creatorId: 'thaycacac'
    }
    let imageUrl
    let key
    firebase.database().ref('meetups').push(meetup)
      .then((data) => {
        const key = data.key
        // commit('createMeetup', {
        //   ...meetup,
        //   id: key
        // })
        return key
      })
      .then(key => {
        const fileName = payload.image.name
        const ext = fileName.slice(fileName.lastIndexOf('.'))
        return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
      })
      .then(fileData => {
        imageUrl = fileData.metadata.downloadURLs[0] //error
        console.log(this.imageUrl)
        return firebase.database().ref('meetups').child('key').update({imageUrl: imageUrl})
      })
      .then(() => {
        commit('createMeetup', {
          ...meetup,
          imageUrl: imageUrl,
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
  },
  autoSignin ({commit}, payload) {
    commit('setUser', {id: payload.uid, registeredMeetups: []})
  },
  logout ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
  }
}
