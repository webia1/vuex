import Vue from 'vue';
import Vuex from 'vuex';

import vsprobase from './base';
import createPersist from 'vuex-localstorage';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vsprobase,
    plugins: [createPersist({
      namespace: 'vspro',
      initialState: {},
      // ONE DAY 
      expires: 1 * 24 * 60 * 60 * 1e3
    })],
  }
});

export default store;
