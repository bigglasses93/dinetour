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
          
          <v-list-tile to="/signup">
            <v-list-tile-action>
              <v-icon>add</v-icon>
            </v-list-tile-action>
            Singup
          </v-list-tile>
          <v-list-tile to="/signin">
            <v-list-tile-action>
              <v-icon>input</v-icon>
            </v-list-tile-action>
            Singin
          </v-list-tile>
          <v-list-tile v-on:click="signout">
            <v-list-tile-action>
              <v-icon>clear</v-icon>
            </v-list-tile-action>
            Signout
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
      dark
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
          <v-btn flat>About</v-btn>
          <v-btn flat>Contacts</v-btn>
          <v-btn flat to="/signin">Login</v-btn>
          <v-btn flat to="/signup">Signup</v-btn>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "HeaderToolBar",
  data: () => ({
    drawer: false
  }),
  props: {
    source: String
  },
  methods: {
    signout: function(){
    }
  }
};
</script>

<style scoped lang="scss">
</style>
