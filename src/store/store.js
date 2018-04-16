import Vue from 'vue';
import Vuex from 'vuex';

import vsprobase from './base';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vsprobase,
    plugins: [createPersistedState({ storage: window.sessionStorage })],
  }
});

export default store;
