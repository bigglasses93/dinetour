<template>
  <v-card
    hover
    width="200px"
    :to="`/events/${event.id}`"
  >
    <v-img
        src="https://i.pinimg.com/564x/2d/b2/e6/2db2e61f7d7d8837b5a0a2d6085befed.jpg"
    ></v-img>

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
