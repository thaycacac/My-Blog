export default {
  loadedMeetups: state => {
    return state.loaderMeetups.sort((meetupA, meetupB) => {
      return meetupA.date < meetupB.date
    })
  },
  loadedMeetup: state => {
    return meetupId => {
      return state.loaderMeetups.find(meetup => {
        return meetup.id === meetupId
      })
    }
  },
  featuredMeetups: (state, getters) => {
    return state.loaderMeetups.slice(0, 5)
  },
  user (state) {
    return state.user
  },
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  },
  checkError (state) {
    return state.error.message !== ''
  }
}
