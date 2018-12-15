<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-subheader class="mt-3 grey--text text--darken-1">LIST</v-subheader>
        <v-list-tile-content>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            Home
          </v-list-tile>
          <v-list-tile to="/users">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            Hosts
          </v-list-tile>

          <v-list-tile to="/events">
            <v-list-tile-action>
              <v-icon>event</v-icon>
            </v-list-tile-action>
            Events
          </v-list-tile>
          
          <v-list-tile to="/todo">
            <v-list-tile-action>
              <v-icon>list</v-icon>
            </v-list-tile-action>
            Todo
          </v-list-tile>
        </v-list-tile-content>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="black"
      dense
      fixed
      clipped-left
      dark=""
      app 
    > 
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center white--text">
        <span class="title">DineTour</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/Homepage">Homepage</v-btn>
          <v-btn flat to="/Contactus">Contactus</v-btn>
          <v-btn flat to="/signin" v-if="!loggedIn">Log In</v-btn>
          <v-btn flat to="/signup" v-if="!loggedIn">Sign Up</v-btn>
          <v-btn flat v-on:click="signout" v-if="loggedIn">Log Out</v-btn>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "HeaderToolBar",
  data: () => ({
    drawer: false,
    loggedIn: () => {
      return firebase.auth().currentUser;
    }
  }),
  props: {
    source: String
  },
  methods: {
    signout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out.");
          this.$router.push("/");
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
