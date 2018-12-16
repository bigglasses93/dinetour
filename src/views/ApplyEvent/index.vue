<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column>

          <v-toolbar dark>
            <v-toolbar-title>Apply for An Event</v-toolbar-title>
          </v-toolbar>

          <v-flex xs12>
            <v-text-field
              label="Event Name"
              :value="currentEvent.name"
              readonly
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              label="Arriving Time"
              :value="currentEvent.date.toString() + ` ` + currentEvent.time.toString()"
              readonly
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              class="mt-0"
              hide-details
              single-line
              type="number"
              label="Number of People"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-textarea
              name="message"
              label="Message to Host"
            ></v-textarea>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              label="Cancel before"
              :value="currentEvent.date.toString() + ` ` + currentEvent.time.toString()"
              readonly
            ></v-text-field>
          </v-flex>

          <v-checkbox
            label="I understand that I have to cancel prior to the fore-mentioned time."
          ></v-checkbox>

          <v-flex xs12>
            <v-btn color="primary" @click="submit">Apply for the Event</v-btn>
          </v-flex>

        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ApplyEvent",

  props: {
    eventId: {
      required: true,
      type: String
    }
  },

  computed: {
    ...mapGetters({
      events: "events/EVENT"
    }),
    currentEvent() {
      return this.events(this.eventId);
    }
  },
  created() {
    if (!firebase.auth().currentUser) {
      this.$router.push("/signin");
    }
    this.fetchEvent(this.eventId);
  },
  methods: {
    ...mapActions({
      fetchEvent: "events/FETCH_EVENT"
    }),
    submit() {
      this.$router.push("/events/" + this.eventId.toString());
    }
  }
};
</script>
