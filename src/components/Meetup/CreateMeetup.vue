<template>
    <section>
        <form @submit.prevent ="createMeetup()">
            <b-field label="Title">
                <b-input v-model="title"></b-input>
            </b-field>
            <b-field label="Location">
                <b-input v-model="location"></b-input>
            </b-field>
            <b-field label="Image URL">
                <b-input v-model="image"></b-input>
            </b-field>
            <img :src="image">
            <b-field label="Description">
                <b-input maxlength="200" type="textarea" v-model="description"></b-input>
            </b-field>
            <button type="submit" class="button is-success" :disabled="!formIsValid">
                Create Meetup
            </button>
        </form>
    </section>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      image: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.location !== '' &&
      this.image !== '' &&
      this.description !== ''
    }
  },
  methods: {
    createMeetup () {
      const meetupDate = {
        title: this.title,
        location: this.location,
        id: 'thaycacac',
        image: this.image,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupDate)
      this.$router.push('/meetups')
    }
  }
}
</script>