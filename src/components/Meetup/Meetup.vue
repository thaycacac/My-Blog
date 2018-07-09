<template>
    <div class="card">
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
        <p class="subtitle is-6">@Admin</p>
      </div>
    </div>
    <div class="content">
      {{ meetup.description }}
      <br>
      <time>{{ meetup.date }}</time>
      <hr>
      <router-link to="/">
            <button class="button is-primary">
                Register
            </button>
        </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
