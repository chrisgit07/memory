import Vue from 'vue';
import Vuex from 'vuex';

import { player } from './player.module';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
   player,
  }
});
