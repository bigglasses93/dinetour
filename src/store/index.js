import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import events from "./modules/events";
import shared from "./modules/shared";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    events,
    shared
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
