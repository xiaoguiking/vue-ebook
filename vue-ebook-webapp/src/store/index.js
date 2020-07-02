import Vue from "vue";
import Vuex from "vuex";
import book from "./modules/book";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   test: 1,
  // },
  // mutations: {
  //   SET_TEST: (state, newTest) => {
  //     state.test = newTest;
  //   },
  // },
  // actions: {
  //   setTest: ({ commit, state }, newTest) => {
  //     console.log(state.test, newTest);
  //     return commit("SET_TEST", newTest);
  //   },
  // },
  modules: {
    book
  },
  getters
});
