<template>
  <div>
      <v-content>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-toolbar dark>
                <v-toolbar-title>Sign Up</v-toolbar-title>
              </v-toolbar>

              <!--
              <v-text-field v-model="name" label="name">
              </v-text-field>
              -->

              <v-text-field v-model="email" label="Email" :rules="[rules.email]">
              </v-text-field>


              <v-text-field type="password" v-model="password" label="Password">
              </v-text-field>

              <v-text-field type="password" v-model="confirm_password"
                label="Confirm Password"
                :rules="[rules.passwordMatch]">
              </v-text-field>


              <v-checkbox
                v-model="agree"
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
      password: null,
      confirm_password: null,
      agree: false,
      rules: {
        passwordMatch: () => {
          return (
            this.password == this.confirm_password || "Password does not match."
          );
        },
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || "Invalid e-mail."
        }
      }
    };
  },
  methods: {
    signUp: function() {
      if (this.agree && this.password == this.confirm_password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            alert("Create account: ", this.email);
            console.log(user);
            this.$router.push("/signin");
          })
          .catch(error => {
            alert(error.message);
          });
      } else {
        alert(
          "Please check if your password matches and if you agree our terms."
        );
      }
    }
  }
};
</script>
