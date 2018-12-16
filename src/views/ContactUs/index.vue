<template>
  <v-content>
    <v-form>
      <v-container justify-center>
        <v-flex>
            <v-text-field
              v-model="message"
              label="Enter Your Message"
              placeholder=""
              outline
              height="200"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              placeholder="Input Your Email Address"
              counter="25"
              required
              ></v-text-field>
             <v-btn @click="submit" color="primary">Submit</v-btn>
        </v-flex>                   

        <v-flex justify-center>
            <v-img
            height="20%"
            width="20%"
            :src="qr_url"
            v-if="qr_url"
            ></v-img>
        </v-flex>      
      </v-container>
    </v-form>
  </v-content>
</template>


<script>
// import axios from "axios";
import firebase from "firebase";

export default {
  data: () => ({
    email: "",
    message: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    qr_url: ""
  }),
  mounted: function() {
    // Auto fill user's email
    var user = firebase.auth().currentUser;
    if (user && user.email) {
      this.email = user.email;
    }

    // Get the QR code from the database
    var storage = firebase.storage();
    var this_ref = this;
    storage
      .ref("shared/qr-code.gif")
      .getDownloadURL()
      .then(function(url) {
        // console.log("URL fetched: ", url);
        this_ref.qr_url = url;
      })
      .catch(function(err) {
        alert(err);
      });
  },
  methods: {
    submit() {
      var database = firebase.database();
      if (database) {
        var formData = {
          email: this.email,
          message: this.message,
          responded: false,
          response: ""
        };
        database.ref("feedbacks").push(formData);
        alert("Your message has been delivered to the dumb developers.");
        this.$router.push("/");
      }
    }
  }
};
</script>


<style scoped lang="scss">
</style>
