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

          <v-flex xs2>
            <v-text-field
              v-model="image"
              label="Post photo url here"
              prepend-icon="image"
            ></v-text-field>
          </v-flex>

          <v-layout>
            <v-flex xs4>
              <v-date-picker v-model="date" ></v-date-picker>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs4>
              <v-time-picker v-model="time" landscape></v-time-picker>
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
    host: "Qk0rBoVPw9RFZwurRwap5W6A7AV2",
    hostemail: "",
    image: "",
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
          host: firebase.auth().currentUser.uid,
          hostemail: firebase.auth().currentUser.email,
          image: this.image,
          name: this.name,
          numberofpeople: this.numberofpeople,
          place: this.place,
          description: this.description
        };
        var newevent = database.ref("events").push(formData);
        
        //console.log(newevent.key);
        alert("Created event successfuly.");
        this.$router.push("/events");
      }
    }
  }
};
</script>

<style lang="scss">
</style>
