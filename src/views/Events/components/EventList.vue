<template>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="event in events"
          :key="event.id"
        >
          <user-list-element :event="event"></user-list-element>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import EventListElement from "./EventListElement.vue";

export default {
  name: "EventList",
  components: {
    EventListElement
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
</style>
