<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="info">
                    Explore Meetups
                </v-btn>
            </v-flex>
             <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/new" class="info">
                    Organize Meetup
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel >
                    <v-carousel-item
                    v-for="meetup in meetups" 
                    :src="meetup.imagerUrl" 
                    :key="meetup.id">
                    <div class="title">
                        {{ meetup.title }}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>        
    </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      meetups: [
        {
          imagerUrl:
            'https://drscdn.500px.org/photo/114054571/q%3D80_m%3D2000_k%3D1/v2?webp=true&sig=4e544a7414ab90d0c1b2b2525bb28e36347f9829a1c74e2b3dcf5a4cd271d25f',
          id: '1',
          title: 'Meetup in hanoi'
        },
        {
          imagerUrl: 'http://www.tkvacation.com/img/1502118395sai_gon.jpg',
          id: '2',
          title: 'Meetup in ho chi minh'
        }
      ]
    }
  }
}
</script>

<style scoped>
    .title{
        position: absolute;
        margin: auto;
        bottom: 55px;
        color: white;
    }
</style>
