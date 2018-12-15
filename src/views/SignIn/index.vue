<template>
  <div>
      <v-content>
        <v-container fill-height>   
          <v-layout justify-center align-center>
            <v-flex xs12 sm8 md4>
              <v-card dark color="black">
                <v-card-text><h2>Sign In</h2></v-card-text>
              </v-card>
              <v-text-field v-model="email" placeholder="email">
              </v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password">
              </v-text-field>
              <v-checkbox
                label="Remember Me"
                v-model="remember_me"
              ></v-checkbox> 
              <v-btn v-on:click="signin">SignIn</v-btn>
              <v-btn to="/signup" flat>Create Account</v-btn>
            </v-flex>
          </v-layout>
              
        </v-container>
      </v-content>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignIn",
  data() {
    return {
      email: null,
      password: null,
      remember_me: false
    };
  },
  methods: {
    signin: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("Success!");
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>
