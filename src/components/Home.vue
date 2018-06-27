<template>
   <div>
    <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
        <slide>
        <img src="/static/hcm.jpg" alt="hcm">
        </slide>
        <slide>
        <img src="/static/hn.jpg" alt="hn">
        </slide>
  </carousel>
  <div class="columns has-text-centered">
  <div class="column ">
    <router-link to="/meetups">
        <button class="button is-primary is-outlined">EXPORE MEETUPS</button>
    </router-link>
  </div>
  <div class="column">
      <router-link to="/meetup/newf">
        <button class="button is-primary is-outlined">ORGANIZE MEETUP</button>
      </router-link>
  </div>
</div>
       
   </div>
</template>

<script>

</script>

<style scoped>
  
</style>
