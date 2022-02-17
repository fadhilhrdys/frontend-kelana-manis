import axios from 'axios';

const state = {
    allMenu: [],
    detailMenu: '',
};
const getters = {
    // get data pancota
    pannacotta(state) {
        return state.allMenu.filter((pc) => pc.categories == "pannacotta");
    },
    // get data mililiter
    mililiter(state) {
        return state.allMenu.filter((ml) => ml.categories == "mililiter");
    },
    // get data liter
    liter(state) {
        return state.allMenu.filter((l) => l.categories == "liter");
    },
    detailMenu(state) {
        return state.detailMenu;
    }
};
const mutations = {
    SET_MENU: (state, payload) => {
        state.allMenu = payload;
    },
    SET_DETAIL_MENU: (state, payload) => {
        state.detailMenu = payload;
    }
};
const actions = {
    getDetailMenu(context, payload) {
        let data = context.state.allMenu;
        let select = '';
        // cari data mana yang idnya sama dengan payload id
        for (let a = 0; a < data.length; a++) {
            if (data[a].id == payload.id) {
                select = data[a];
            }
        }
        // jika select tidak kosong
        if (select != '') {
            context.commit('SET_DETAIL_MENU', select);
        }
    },
    async getMenu(context) {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/menus');
            context.commit('SET_MENU', res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}