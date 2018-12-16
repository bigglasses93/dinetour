<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column justify-center>

          <v-toolbar dark>
            <v-toolbar-title>Create Event</v-toolbar-title>
          </v-toolbar>

          <v-flex xs12 sm8 md4>
            <v-text-field v-model="name"
              label="Event Name"
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-text-field
              v-model="numberofpeople"
              class="mt-0"
              hide-details
              single-line
              type="number"
              label="Number of People"
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-text-field
              v-model="place"
              label="Location"
              prepend-icon="place"
            ></v-text-field>
          </v-flex>

          <v-layout row>
            <v-flex xs4>
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>
            <v-flex xs4>
              <v-time-picker v-model="time"></v-time-picker>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>

          <v-flex xs2>
            <v-textarea
              v-model="description"
              name="description"
              label="Description"
            ></v-textarea>
          </v-flex>

          <v-flex xs2>
            <v-btn color="primary" @click="submit">Create</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default{
  data: () => ({
    date: '2019-01-01',
    time: '00:00',
    // host: "",
    // image: "",
    name: "",
    numberofpeople: "",
    place: "",
    description: ""   
  }),

  methods: {
    submit() {
      var database = firebase.database();
      console.log("loaded firebase");
      if (database) {
        var formData = {
          date: this.date.toString(),
          time: this.time,
          // host: "",
          // image: this.image,
          name: this.name,
          numberofpeople: this.numberofpeople,
          place: this.place,
          description: this.description
        };
        database.ref("events").push(formData);
        alert("Created event successfuly.");
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss">
</style>
