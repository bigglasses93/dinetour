import Vue from "vue";

const events = {
  namespaced: true,
  state: {
    events: {}
  },
  actions: {
    FETCH_EVENTS({ commit }) {
      // const response = api.fetchEvents();
      // commit("RECEIVE_EVENTS", response);
    },
    FETCH_EVENT({ commit }, eventId) {
      // const response = api.fetchEvent(eventId);
      // commit("RECEIVE_EVENT", response);
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
      events.forEach(event => {
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
