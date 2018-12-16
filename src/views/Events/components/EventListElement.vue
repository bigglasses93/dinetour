<template>
  <v-card
    width="500" 
    hover
    :to="`/events/${event.id}`"
  >
    <v-img :src="event.image" max-height="200" align-center>    
      
    </v-img>
    
    <v-card-text v-text="event.name" class="headline"></v-card-text>
    <v-card-title>
      {{event.date}}{{" "}}{{event.time}}
      <v-spacer></v-spacer>
      Location: {{event.place}}
    </v-card-title> 
    
  </v-card>
  
</template>

<script>
export default {
  name: "EventListElement",
  props: {
    event: Object
  },
  computed: {
    eventImage() {
      return this.event.image ? this.event.image : "/blank-profile.png";
    }
  }
};
</script>

<style scoped lang="scss">
</style>
