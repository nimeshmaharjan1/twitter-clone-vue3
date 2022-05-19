//? User state module
export const UserModule = {
  namespaced: true,

  state: {
    user: null,
  },

  //? mutations fuctions directly affect or change the state
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },

  //? Whereas actions are functions that are called throughout the application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
