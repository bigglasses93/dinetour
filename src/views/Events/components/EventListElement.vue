<template>
  <v-card
    width="500" 
    hover
    :to="`/events/${event.id}`"
  >
    <v-img :src="event.image" max-height="200" align-center>    
      
    </v-img>
    
    <v-card-text v-text="event.name" class="headline"></v-card-text>
    <v-card-text v-text="event.datetime"></v-card-text>  
    
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
