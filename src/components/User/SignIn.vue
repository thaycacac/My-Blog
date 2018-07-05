 <template>
    <div>
      <app-alert :text="error.message" v-show="checkError"></app-alert>
      <form @submit.prevent="login()">
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
            <input class="input" type="password" placeholder="Password input"
              v-model="password">
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Login
              <b-loading :is-full-page="isFullPage" :active.sync="loading" :can-cancel="true"></b-loading>
            </button>
            
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
      password: ''
    }
  },
  computed: {
    emailValid () {
      return /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    checkError () {
      return this.$store.getters.checkError
    },
    loading () {
      return this.$store.getters.loading
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
    login () {
      this.$store.dispatch('login', {email: this.email, password: this.password})
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