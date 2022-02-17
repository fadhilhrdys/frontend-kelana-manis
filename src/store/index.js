import Vue from 'vue';
import Vuex from 'vuex';

import menu from './modules/menu';
import transaction from './modules/transaction';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    actions: {
    },
    modules: {
        menu: menu,
        transaction: transaction
    }
})