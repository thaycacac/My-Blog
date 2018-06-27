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
  }
}
