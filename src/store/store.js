import Vue from 'vue';
import Vuex from 'vuex';

import vsprobase from './base';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vsprobase,
  }
});

export default store;
