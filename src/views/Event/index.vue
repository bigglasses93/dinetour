<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <event-detail :eventId="eventId"></event-detail>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import EventDetail from "./components/EventDetail.vue";

export default {
  name: "Event",
  props: ["eventId"],
  components: {
    EventDetail
  }
};
</script>
