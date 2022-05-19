import { createStore } from "vuex";
import { UserModule } from "./UserModule";
export default createStore({
  //Store user data in the store
  state: {},

  //? mutations fuctions directly affect or change the state
  mutations: {},

  //? Whereas actions are functions that are called throughout the application that call mutations
  actions: {},

  //Modularizing store
  modules: {
    User: UserModule,
  },
});
