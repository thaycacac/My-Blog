<template>
    <section>
        <b-notification type="is-danger" @close="close()">
            <i class="fas fa-exclamation myIcon"></i>
            {{ text }}
        </b-notification>
    </section>
</template>
<script>
export default {
  props: ['text'],
  methods: {
    close () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
    .myIcon{
        margin-right: 10px;
    }
</style>
