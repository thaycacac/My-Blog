<template>
  <div>
  <div class="card" v-for="meetup in meetups" :key="meetup.id">
    <div class="card-image">
      <figure class="image is-3by1">
        <img :src="meetup.imageUrl" alt="Placeholder image">
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
          <p class="subtitle is-6">@Admin | {{ meetup.date }}</p>
          
        </div>
        <div class="media-right">
        <router-link :to="'/meetup/'+meetup.id">
              <button class="button is-primary" :to="meetup.id">
                  View {{ meetup.title }}
              </button>
        </router-link>
        </div>
      </div>
      <div class="content">
        <span style="display:block;text-overflow: ellipsis;width: 95%;overflow: hidden; white-space: nowrap;">
          {{ meetup.description }}
        </span>
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
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
