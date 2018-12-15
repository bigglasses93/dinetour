const shared = {
  namespaced: true,
  state: {
    loading: false,
    loggedIn: false
  },
  getters: {
    LOADING(state) {
      return state.loading;
    },
    LOGGEDIN(state) {
      return state.loggedIn;
    }
  },
  actions: {
    SET_LOADING({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
    SET_LOGGEDIN({ commit }, login_status) {
      commit("SET_LOGGEDIN", login_status);
    }
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_LOGGEDIN(state, login_status) {
      state.loggedIn = login_status;
    }
  }
};

export default shared;
