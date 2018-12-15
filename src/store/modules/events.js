import Vue from "vue";
import api from "@/api";

const events = {
  namespaced: true,
  state: {
    events: {}
  },
  actions: {
    FETCH_EVENTS({ commit }) {
      const response = api.fetchEvents();
      commit("RECEIVE_EVENTS", response);
    },
    FETCH_EVENT({ commit }, uid) {
      const response = api.fetchEvent(uid);
      commit("RECEIVE_EVENT", response);
    }
  },
  getters: {
    ALL_EVENTS(state) {
      return Object.values(state.events);
    },
    EVENT(state) {
      return id => state.events[Number(id)];
    }
  },
  mutations: {
    RECEIVE_EVENTS(state, events) {
      users.forEach(event => {
        if (event) {
          Vue.set(state.events, event.id, event);
        }
      });
    },
    RECEIVE_EVENT(state, event) {
      if (event) {
        Vue.set(state.events, event.id, event);
      }
    }
  }
};

export default events;
