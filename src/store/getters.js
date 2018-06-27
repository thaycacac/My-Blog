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
    return getters.loaderMeetups.slice(0, 5)
  }
}
