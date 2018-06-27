<template>
  <div>
  <div class="card" v-for="meetup in meetups" :key="meetup.id">
    <div class="card-image">
      <figure class="image is-3by1">
        <img :src="meetup.image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ meetup.title }}</p>
          <p class="subtitle is-6">@{{ meetup.id }}</p>
        </div>
        <div class="media-right">
         <router-link :to="'/meetup/'+meetup.id">
              <button class="button is-primary" :to="meetup.id">
                  View Meetup
              </button>
         </router-link>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br>
        <time>{{ meetup.date }}</time>
      </div>
    </div>
    <hr>
  </div>
  </div>
</template>
<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
