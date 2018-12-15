<template>
  <v-layout width="900" justify-center v-if="currentEvent">
   <v-flex xs12 sm6>
    <v-container
          fluid
          grid-list-md          
        >

         <v-layout> 
                <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">datetime</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ currentEvent.datetime }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>
                </v-list>
         </v-layout>

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
