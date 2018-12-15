<template>
  <v-layout justify-center v-if="currentEvent">
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
        <v-card>
          <v-card-text class="black--text display-1 pt-3">
            {{ currentEvent.name }}
          </v-card-text>                  
          <!-- <v-card-title class="display-1 pl-5 pt-5" align-center></v-card-title> -->
         <v-card-text >
                    {{ currentEvent.datetime }}
         </v-card-text>
        </v-card>

        <v-card-title></v-card-title>
        <v-container
          fluid
          fill-height
          pa-2       
        >
          <v-layout>             
            <v-card width = "500" height = "200" class="black--text display-5 pt-2">Event Description</v-card>  
            <v-spacer></v-spacer>
            <!-- <v-card class="black--text display-1 pt-2">Register now!</v-card> -->
            <v-btn large >Apply for it now</v-btn>
            

            
          </v-layout>
        </v-container>
        
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
