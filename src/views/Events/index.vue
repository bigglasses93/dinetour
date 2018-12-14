<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <event-list :events="events"></event-list>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from "./components/EventList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Events",
  components: {
    EventList
  },
  computed: {
    ...mapGetters({
      events: "events/ALL_EVENTS"
    })
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    ...mapActions({
      fetchEvents: "events/FETCH_EVENTS"
    })
  }
};
</script>
