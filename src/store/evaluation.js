export default {
  namespaced: true,
  state: {
    evaluationSelect: null,
    seccionSelect: null,
  },

  getters: {
    evaluationSelect(state) {
      return state.evaluationSelect;
    },
    seccionSelect(state) {
      return state.seccionSelect;
    },
  },

  mutations: {
    SET_EVALUATIONSELECT(state, data) {
      state.evaluationSelect = data;
    },
    SET_SECCIONSELECT(state, data) {
      state.seccionSelect = data;
    },
  },

  actions: {
    changeEvaluationSelect(context, data) {
      context.commit("SET_EVALUATIONSELECT", data);
    },
    changeSeccionSelect(context, data) {
      context.commit("SET_SECCIONSELECT", data);
    },
  },
};
