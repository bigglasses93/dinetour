<template>
<v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-flex>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                >
              </v-avatar>
              <div class="headline"><span style="font-weight:bold">Kentaro</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">Lorem ipsum dolor sit amet</div>
              <v-layout justify-space-between>
                <!-- <v-btn outline color="black">Information</v-btn> -->
                <v-dialog v-model="dialog" persistent max-width="600px">
                <v-btn outline slot="activator" color="black" dark>Information</v-btn>
                <v-card>
                    <v-card-title>
                    <span class="headline" style="font-weight:bold">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                            <v-text-field label="Legal first name*" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field
                            label="Legal last name*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field label="Email*" required></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests"
                            multiple
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field label="Self-Introduction*" required></v-text-field>
                        </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                <v-btn outline color="black">Events</v-btn>
                <v-btn outline color="black">Calendar</v-btn>
                <v-btn outline color="black">Other</v-btn>
                <!-- <a href="javascript:;" class="body-2">Information</a>
                <a href="javascript:;" class="body-2">Events</a>
                <a href="javascript:;" class="body-2">Calendar</a>
                <a href="javascript:;" class="body-2">Other</a> -->
              </v-layout>

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
                  <v-btn icon class="red--text">
                    <v-icon medium>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon medium>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>fa-facebook</v-icon>
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
  export default {
    data () {
      
      return {
        dialog: false,
        title: 'Your Logo',
        posts: [
          {
            title: 'Fusce ullamcorper tellus',
            content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
          },
          {
            title: 'Donec vitae suscipit lectus, a luctus diam.',
            content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
          },
          {
            title: 'Vestibulum condimentum quam',
            content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
          }
        ]
      }
    }
  }
 </script>
