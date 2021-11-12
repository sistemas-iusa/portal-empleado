import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    role: null,
  },

  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
    role(state) {
      return state.role;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      let response = await axios.post("signin", credentials);
      return dispatch("attempt", response.data.token);
    },
    async attempt({ commit, state }, token) {
      console.log(token);
      if (token) {
        commit("SET_TOKEN", token);
      }
      if (!state.token) {
        return;
      }
      try {
        let response = await axios.get("info");
        commit("SET_USER", response.data.user);
        commit("SET_ROLE", response.data.role);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        commit("SET_ROLE", null);
      }
    },
    signOut({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
      commit("SET_ROLE", null);
    },
  },
};
