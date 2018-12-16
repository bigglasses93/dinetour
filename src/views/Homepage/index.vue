<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column justify-center>

      <v-carousel>
        <router-link v-for="event in events" :key="event.id" :to="`/events/${event.id}`">
        <v-carousel-item
          :src="event.image"
          :v-text="event.name"
        ></v-carousel-item>
        </router-link>
      </v-carousel>

      <v-flex>
        <div class="flex display-3">Share Table with Japanese People</div>
        <div class="flex title">Enjoy food and meet new people in a Japanese house</div>
      </v-flex>

    <v-flex xs12 sm6 >
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="event in events.slice(0, 6)"
              :key="event.id"
              xs4
              d-flex
            >          
              <v-card flat tile class="d-flex">
                <v-img

                  :src="event.image"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

      <div class="text-xs-center">
         <v-btn to="events"
            flat
            class="blue lighten-2 mt-5"
            dark
            large
        >Click To Explore More
        </v-btn>
      </div>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">local_dining</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Original Flavors</div>
                    </v-card-title>
                    <v-card-text>
                       Restaurants are attractive, but did you expect opportunity to eat in real Japanese people's table? We provide food that is real Japanese
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">local_play</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Explore local life</div>
                    </v-card-title>
                    <v-card-text>
                      Are you tired with being like a visitors? We offer you the oppoortunity to be really immersive in local culture.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">people</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Engage people worldwide</div>
                    </v-card-title>
                    <v-card-text>
                      Not only the local, you will meet people from all over the world. Have a better journey experience in Japan!
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>

        <v-btn to="/ContactUs" flat
          class="white lighten"
          large
          href="/pre-made-themes"
        > Contact Us if you have question
        </v-btn>


        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      events: "events/ALL_EVENTS"
    })
  },
  created() {
    console.log("ok");
    this.fetchEvents();
  },
  methods: {
    ...mapActions({
      fetchEvents: "events/FETCH_EVENTS"
    })
  }
};
</script>


<style scoped lang="scss">
</style>
