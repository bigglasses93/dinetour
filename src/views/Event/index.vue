<template>
  <v-content>
    <event-detail :eventId="eventId">
      </event-detail>
  </v-content>  
  
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
