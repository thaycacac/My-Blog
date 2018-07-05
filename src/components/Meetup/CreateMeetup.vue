<template>
    <section>
        <form @submit.prevent ="createMeetup()">
            <b-field label="Title">
                <b-input v-model="title"></b-input>
            </b-field>
            <b-field label="Location">
                <b-input v-model="location"></b-input>
            </b-field>
            <div class="field">
            <div class="file is-primary"><!--@click="onPickFile"-->
              <label class="file-label">
                <input class="file-input" 
                  type="file" 
                  name="resume" 
                  ref="fileInput" 
                  accept="image/*"
                  @change="onFilePicked">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                    Upload Image…
                  </span>
                </span>
              </label>
            </div>
          </div>
            <img :src="imageUrl">
            <input class="input" type="date" v-model="date">
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
      imageUrl: '',
      description: '',
      date: '',
      image: null
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.location !== '' &&
      this.description !== '' &&
      this.date !== ''
    }
  },
  methods: {
    createMeetup () {
      if (!this.image) {
        return
      }
      const meetupDate = {
        title: this.title,
        location: this.location,
        id: 'thaycacac',
        image: this.image,
        description: this.description,
        date: this.date,
        imageUrl: this.imageUrl
      }
      this.$store.dispatch('createMeetup', meetupDate)
      this.$router.push('/meetups')
    },
    // onPickFile () {
    //   this.$refs.fileInput.click()
    // },
    onFilePicked (event) {
      const files = event.target.files
      let fileName = files[0].name
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>