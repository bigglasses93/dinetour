<template>
    <v-content>
      <v-container>
          <v-img          
          :src="currentEvent.image"   
          max-height="300"
        >           
        </v-img>
        <v-layout row wrap align-center>
          <v-flex>
            <div class="text-xs-center">
                
              <!-- <v-avatar size="300">
                  
                <img
                  
                  src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg"
                >
              </v-avatar> -->
              <div class="headline"><span style="font-weight:bold">{{ currentEvent.name }}</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">{{ currentEvent.datetime }}</div>
              <div class="content text-xs-left grey--text pt-1 pb-3">{{ currentEvent.description }}</div>
              <v-layout justify-space-between>
                <v-btn outline :to="`/apply-event/${eventId}`" color="indigo">Apply Now!</v-btn>
                <v-btn outline color="indigo">Add to favorite</v-btn>
                <!-- <a href="javascript:;" class="body-2">Home</a>
                <a href="javascript:;" class="body-2">About</a>
                <a href="javascript:;" class="body-2">Github</a>
                <a href="javascript:;" class="body-2">Other</a> -->
              </v-layout>
              <v-spacer></v-spacer>
              <div class="headline text-xs-left"><span style="font-weight:medium">See also</span></div>
            </div>
          </v-flex>

          <v-flex>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="post.imgUrl"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ post.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ post.content }}
                </v-card-text>
                <v-card-actions>
                  <v-btn flat icon color="pink">
                    <v-icon medium>favorite</v-icon>
                  </v-btn>
                
                  <v-btn flat icon color="indigo">
                    <v-icon medium>star</v-icon>
                  </v-btn>
                  <v-btn falt icon color="dark-orange">
                    <v-icon medium>thumb_up</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EventDetail",
  props: {
    eventId: {
      required: true,
      type: String
    }
  },

  computed: {
    ...mapGetters({
      event: "events/EVENT"
    }),
    currentEvent() {
      return this.event(this.eventId);
    }
  },
  created() {
    this.fetchEvent(this.eventId);
  },
  methods: {
    ...mapActions({
      fetchEvent: "events/FETCH_EVENT"
    })
  },
  data () {
    return {
      title: 'Explore other events',
      posts: [
        {
          title: 'Healthy ingredients',
          content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
          imgUrl: 'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'
        },
        {
          title: 'Oishi Sushi',
          content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
          imgUrl: 'https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg'
        },
        {
          title: 'Dango lover',
          content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
          imgUrl: 'https://muza-chan.net/aj/poze-weblog4/dango-big.jpg'
        }
      ]
  }
 }
}</script>

<style lang="scss">
.content {
    white-space: pre-wrap;
}
</style>

