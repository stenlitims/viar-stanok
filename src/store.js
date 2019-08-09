import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
//import parser from 'fast-xml-parser'
//import he from 'he'

const domin = document.location.host == "localhost:8080" ? 'http://viar.loc/' : '';


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    data: [],
    conect: true,
    id: null,
    pass: 'BIGboss',
    path: 'web_tablo/034.xml',
    date: null,
    list: [],
    groups: [],
    timeAdmin: 200000,
    timeUser: 200000,
    nav: {}
  },
  mutations: {
    getData(state, payload) {
      state.data = payload;
    },
    getDate(state, payload) {
      state.date = payload;
    },
    getList(state, payload) {
      let groups = [];
      payload.forEach(o => {
        if (!groups.includes(o.group)) {
          groups.push(o.group);
        }
      });
      // console.log(groups);
      state.groups = groups;
      state.list = payload;
    },
    getSettingss(state, payload) {
      if (payload.pass) {
        state.pass = payload.pass;
      }
      if (payload.timeAdmin) {
        state.timeAdmin = payload.timeAdmin;
      }
      if (payload.timeUser) {
        state.timeUser = payload.timeUser;
      }
      //  console.log(payload);
    },
    setId(state, payload) {
      state.id = payload;
    }
  },
  actions: {

    getSettingss({
      commit,
      state
    }) {
      axios.get(domin + 'api.php?get=settings')
        .then((response) => {
          commit('getSettingss', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    },

    getDate({
      commit,
      state
    }) {
      axios.get(domin + 'api.php?get=date')
        .then((response) => {
          commit('getDate', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    },

    getList({
      commit,
      state
    }) {
      axios.get(domin + 'api.php?get=list')
        .then((response) => {
          commit('getList', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    },

    getData({
      commit,
      state
    }) {
      axios.get(domin + 'api.php?get=data')

        .then((response) => {

          if (response.status != 200) {
            state.conect = false;
            return;
          }
          state.conect = true;
          commit('getData', response.data);

        })
        .catch(function (error) {
          state.conect = false;
          console.log(error);
        });

    },
  }
})