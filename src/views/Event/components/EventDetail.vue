<template>
  <v-layout row v-if="currentEvent">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
            :src="currentEvent.image"
            height="300px"
        >
          <v-layout
              column
              fill-height
          >
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{ currentEvent.name }}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">datetime</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ currentEvent.datetime }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import firebase from "firebase";
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
