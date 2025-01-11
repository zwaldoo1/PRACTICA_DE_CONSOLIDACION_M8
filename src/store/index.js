import { createStore } from 'vuex';

export default createStore({
  state: {
    resorts: [],
  },
  mutations: {
    setResorts(state, resorts) {
      state.resorts = resorts;
    },
  },
  actions: {
    fetchResorts({ commit }) {
      fetch('/resorts.json')
        .then((response) => response.json())
        .then((data) => commit('setResorts', data));
    },
  },
  getters: {
    totalResorts: (state) => state.resorts.length,
  },
});