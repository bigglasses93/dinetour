<template>
  <div>
      <v-content>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <h1>Sign Up</h1>

              <v-text-field v-model="name" placeholder="name">
              </v-text-field>

              <v-text-field v-model="email" placeholder="email">
              </v-text-field>


              <v-text-field type="password" v-model="password" placeholder="password">
              </v-text-field>

              <v-text-field type="confirm password" placeholder="confirm password">
              </v-text-field>


              <v-checkbox
              label="I agree with the terms and conditions."
              ></v-checkbox>               

              <v-btn v-on:click="signUp">Sign Up</v-btn> 
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignUp",
  data() {
      return {
        email: null,
        password: null
      }
  },
  methods: {
    signUp: function () {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then(user => {
    alert('Create account: ', this.email);
    console.log(user);
    })
    .catch(error => {
    alert(error.message);
    });
    }
  }
};
</script>
