export default {
  createMeetup (state, meetup) {
    state.loaderMeetups.push(meetup)
  },
  setUser (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state) {
    state.error.message = ''
  },
  setLoadMeetups (state, payload) {
    state.loaderMeetups = payload
  }
}
