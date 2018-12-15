import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "vuetify/dist/vuetify.min.css";
import { convertDateToString } from "@/filters/date-filter";
import firebase from "firebase";

// Firebase initialization
var config = {
  apiKey: "AIzaSyD5Vt4l1NtzSWhPRHn362bUr1pcFnOo5WE",
  authDomain: "project1-bd116.firebaseapp.com",
  databaseURL: "https://project1-bd116.firebaseio.com",
  projectId: "project1-bd116",
  storageBucket: "project1-bd116.appspot.com",
  messagingSenderId: "70340394481"
};
firebase.initializeApp(config);

// Vue configuration
Vue.use(Vuetify);
Vue.filter("date", convertDateToString);

Vue.config.productionTip = false;

// Use a global variable to detect changes
//window.g_loggedIn = false;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("Logged in");
    //console.log(user);
    store.commit("shared/SET_LOGGEDIN", true);
  } else {
    console.log("Logged out");
    store.commit("shared/SET_LOGGEDIN", false);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
