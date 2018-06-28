<template>
    <div>
    <form @submit.prevent="register()">
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" :class="{ 'is-success': emailValid }" type="text" placeholder="Email input" v-model="email">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success" v-if="emailValid">This email is available</p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" :class="[passwordValid ? 'is-success' : 'is-dadanger']" type="password" placeholder="Password input" v-model="password">
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-success" v-if="passwordValid">This password is available</p>
        <div class="help is-danger" v-else>
            <ul id="list">
                <li>Contain at least 8 characters</li>
                <li>Contain at least 1 number</li>
                <li>Contain at least 1 lowercase character (a-z)</li>
                <li>Contain at least 1 uppercase character (A-Z)</li>
                <li>Contains only 0-9a-zA-Z</li>
            </ul>  
        </div>
      </div>
      <div class="field">
        <label class="label">Confirm Password</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" :class="{ 'is-success': passwordConfirm }" type="password" placeholder="Password input again" v-model="confirm">
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success" v-show="passwordConfirm">Match password</p>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" :disabled="!allowRegister">Register</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
      </form>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirm: ''
    }
  },
  computed: {
    emailValid () {
      return /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
    },
    passwordValid () {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(this.password)
    },
    passwordConfirm () {
      return this.password === this.confirm &&
      this.confirm !== ''
    },
    allowRegister () {
      return this.emailValid && this.passwordValid && this.passwordConfirm
    },
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('signUp', {email: this.email, password: this.password})
    }
  }
}
</script>
<style scoped>
    #list{
        list-style-type: disc;
        padding-left: 25px;
    }
</style>