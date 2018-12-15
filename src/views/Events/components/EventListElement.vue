<template>
  <v-card
    hover
    width="200px"
    :to="`/events/${event.id}`"
  >

    <v-card-actions>
      <v-icon>event</v-icon>
      <v-card-title v-text="event.name"></v-card-title>
    </v-card-actions>

    <v-card-actions>
      <v-icon>datetime</v-icon>
      <v-card-title v-text="event.datetime"></v-card-title>
    </v-card-actions>
    
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
