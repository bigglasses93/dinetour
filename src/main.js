import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "vuetify/dist/vuetify.min.css";
import { convertDateToString } from "@/filters/date-filter";
import firebase from "firebase";

  var config = {
    apiKey: "AIzaSyD5Vt4l1NtzSWhPRHn362bUr1pcFnOo5WE",
    authDomain: "project1-bd116.firebaseapp.com",
    databaseURL: "https://project1-bd116.firebaseio.com",
    projectId: "project1-bd116",
    storageBucket: "project1-bd116.appspot.com",
    messagingSenderId: "70340394481"
  };
  firebase.initializeApp(config);


Vue.use(Vuetify);
Vue.filter("date", convertDateToString);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


