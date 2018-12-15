<template>
  <div>
      <v-content>
        <v-container grid-list-xl text-xs-center>
          <v-layout column>
            <v-flex xs10 offset-xs1>
              <v-card dark color="black">
                <v-card-text><h1>Create your own account</h1></v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs10 offset-xs1>
                <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  label="E-mail"
                ></v-text-field>
            </v-flex>

            <v-flex xs10 offset-xs1>
              <v-text-field type="password" v-model="password" label="Password">
              </v-text-field>
            </v-flex>

            <v-flex xs10 offset-xs1>
              <v-text-field type="password" v-model="confirm_password"
                label="Confirm Password"
                :rules="[rules.passwordMatch]">
              </v-text-field>
            </v-flex>

            <v-flex xs10 offset-xs1>
              <v-checkbox
                v-model="agree"
                label="I agree with the terms and conditions."
              ></v-checkbox>
            </v-flex>             


            <v-flex xs10 offset-xs1>
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
          return pattern.test(value) || "Invalid e-mail.";
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
