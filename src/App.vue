<template>
    <div class="container">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img src="../static/logo.png" alt="Logo app" width="100" height="30">
          </router-link>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/meetups" class="navbar-item">
              <span class="icon">
                <i class="fas fa-users"></i>
              </span>
              <span>
                View Tourist Destination
              </span>
            </router-link>
            <router-link to="/meetup/new" class="navbar-item">
              <span class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>
                Organize Destination
              </span>
            </router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control" v-if="userIsAuthenticated">
                  <router-link to="/profile" class="navbar-item">
                    <button class="button is-light">
                      <span class="icon">
                        <i class="fas fa-user"></i>
                      </span>
                      <span>
                        Profile
                      </span>
                    </button>
                  </router-link>
                </p>
                <p class="control" v-if="userIsAuthenticated" @click="logout()">
                  <router-link to="/" class="navbar-item is-primary">
                    <button class="button is-primary">
                      <span class="icon">
                        <i class="fas fa-sign-out-alt"></i>
                      </span>
                      <span>
                        Logout
                      </span>
                    </button>
                  </router-link>
                </p>
                <p class="control" v-if="!userIsAuthenticated">
                  <router-link to="/signup" class="navbar-item">
                    <button class="button is-light">
                      <span class="icon">
                        <i class="fas fa-user-plus"></i>
                      </span>
                      <span>
                        Sign Up
                      </span>
                    </button>
                  </router-link>
                </p>
                <p class="control" v-if="!userIsAuthenticated">
                  <router-link to="/signin" class="navbar-item is-primary">
                    <button class="button is-primary">
                      <span class="icon">
                        <i class="fas fa-sign-in-alt"></i>
                      </span>
                      <span>
                        Sign In
                      </span>
                    </button>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <router-view> </router-view>
    </div>
  </template>

<script>
export default {
  computed: {
    userIsAuthenticated () {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      )
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
</style>
