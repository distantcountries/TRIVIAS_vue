import Vue from 'vue';
import Vuex from 'vuex';

import {ChuckModule} from './ChuckModule';
import {TriviaModule} from './TriviaModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ChuckModule,
    TriviaModule
  }
});

