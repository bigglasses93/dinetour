<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <user-profile :eventId="eventId"></user-profile>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Event from "./components/Event.vue";

export default {
  name: "Event",
  props: ["eventId"],
  components: {
    Event
  }
};
</script>
