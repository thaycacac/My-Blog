export default {
  createMeetup (state, meetup) {
    state.loaderMeetups.push(meetup)
  },
  setUser (state, payload) {
    state.user = payload
  }
}
