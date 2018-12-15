<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column justify-center>

      <v-carousel>
        <router-link v-for="item in events" :key="item.id" :to="`/events/${item.id}`">
        <v-carousel-item
          :src="item.image"
          :v-text="item.name"
        ></v-carousel-item>
        </router-link>
      </v-carousel>

      <div class="text-xs-center">
        <!--<v-menu transition="Sign-in">
          <v-btn slot="activator" dark color="primary" to="/signin">Log in</v-btn>
        </v-menu>
        <v-menu transition="Sign-out">
          <v-btn slot="activator" dark color="secondary" flat to="/signup">Sign up</v-btn>
        </v-menu>-->

        <v-btn flat color="secondary" to="/events">See More...</v-btn>
      </div>
      
      <div class="flex display-3">Share Table with Japanese People</div>"
      <div class="flex title">Enjoy food and meet new people in a Japanese house</div>

    <v-flex xs12 sm6 >
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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




        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      items: [
        {
          src: "assets/party1.jpg"
        },
        {
          src:
            "https://www.sushicounter.com/files/58ed18a0127b9.image%20(5).jpg"
        },
        {
          src:
            "https://cdn.closeronline.co.uk/one/lifestyle-images/family_money/58a339de6f082ca4501f0525/childrens-birthday-party-1.jpg?quality=50&format=jpg"
        },
        {
          src:
            "https://files.tofugu.com/articles/japan/2015-02-19-nabe-hot-pot/nabe-making-party-at-table.jpg"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      events: "events/ALL_EVENTS"
    })
  },
  created() {
    // console.log("ok");
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
