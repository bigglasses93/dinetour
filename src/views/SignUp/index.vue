<template>
  <div>
      <v-content>
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex xs12 sm8 md4>
              <v-card dark color="black">
                <v-card-text><h2>Create your own account</h2></v-card-text>
              </v-card>

            <v-flex>
                <v-text-field
                  v-model="email"
                  :rules="[rules.email]"
                  label="E-mail"
                ></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field type="password" v-model="password" label="Password">
              </v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field type="password" v-model="confirm_password"
                label="Confirm Password"
                :rules="[rules.passwordMatch]">
              </v-text-field>
            </v-flex>

            <v-flex>
              <v-checkbox
                v-model="agree"
                label="I agree with the terms and conditions."
              ></v-checkbox>
            </v-flex>             

            <v-flex>
              <v-btn v-on:click="signUp">Sign Up</v-btn>
            </v-flex>
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
    var this_ref = this;
    return {
      email: "",
      password: "",
      confirm_password: "",
      agree: false,
      rules: {
        passwordMatch: function() {
          return (
            this_ref.password == this_ref.confirm_password ||
            "Password does not match."
          );
        },
        email: function(value) {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    signUp: function() {
      if (this.agree && this.password == this.confirm_password) {
        var this_ref = this;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            alert("Create account: ", this_ref.email);
            console.log(user);
            this_ref.$router.push("/");
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
