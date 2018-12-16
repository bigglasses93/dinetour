<template>
  <v-layout width="900" justify-center v-if="currentEvent">
   <v-flex xs12 sm6>
    <v-container
          fluid
          grid-list-md          
        >
        <v-img          
          :src="currentEvent.image"   
          max-height="300"
        >             

        </v-img>
        <v-card class="black--text pl-5 pt-5 display-1 pl-5 pt-5">{{ currentEvent.name }}</v-card>
                  
          <!-- <v-card-title class="display-1 pl-5 pt-5" align-center></v-card-title> -->
          <v-card-title align-center>
                    <v-list-tile-title>{{ currentEvent.datetime }}</v-list-tile-title>
          </v-card-title>
        <!-- </v-card> -->

        <v-layout>
           <v-card>
            <v-card-text>
            <p class="text-left">Event Description</p><br>
            </v-card-text>
            <span class="text-left">Come and join us with this great event!</span><br>
            <span class="text-left">Register right now!</span>


            <v-btn large color="red">Apply for it now</v-btn>
           </v-card>
        </v-layout>
    </v-container>
   </v-flex>
  </v-layout>
</template>


<script>
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
  }
};
</script>

<style scoped lang="scss">
</style>
