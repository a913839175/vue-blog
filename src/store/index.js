import Vue from 'vue';
import Vuex from 'vuex';
import load from './modules/load';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    load
  },
  getters
});

export default store