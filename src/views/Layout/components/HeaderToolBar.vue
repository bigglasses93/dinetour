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
          
          <!--<v-list-tile to="/todo">
            <v-list-tile-action>
              <v-icon>list</v-icon>
            </v-list-tile-action>
            Todo
          </v-list-tile>-->
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
        <router-link to="/">
          <v-img contain width="120" class="title"
            :src="require(`../../../../public/logo-white.png`)"
          ></v-img>
        </router-link>
      </v-toolbar-title>

      <!-- <v-flex xs12 sm6 md4>
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex> -->


      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <!--<v-btn flat to="/Homepage">Homepage</v-btn>-->
          <v-btn flat to="/Contactus">Contact Us</v-btn>
          <v-btn flat to="/signin" v-if="!loggedIn">Log In</v-btn>
          <v-btn flat to="/signup" v-if="!loggedIn">Sign Up</v-btn>
          <v-btn flat to="/Profile" v-if="loggedIn">{{userEmail}}</v-btn>
          <v-btn flat to="/create-event" v-if="loggedIn">Create Event</v-btn>
          <v-btn flat v-on:click="signout" v-if="loggedIn">Log Out</v-btn>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>

    <v-btn class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right" fab dark color="black" @click="$vuetify.goTo(`#_top`, options)"><v-icon dark>keyboard_arrow_up</v-icon></v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: "HeaderToolBar",
  data: () => ({
    drawer: false,
    date: new Date().toISOString().substr(0, 10),
    menu: false
  }),
  props: {
    source: String
  },
  computed: {
    ...mapGetters({
      loggedIn: "shared/LOGGEDIN"
    }),
    userEmail() {
      if (this.loggedIn) {
        return firebase.auth().currentUser.email;
      } else {
        return "My Page";
      }
    },
    options() {
      return {
        duration: 500,
        offset: -1000,
        easing: "easeInOutCubic"
      };
    }
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
