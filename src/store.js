import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import parser from 'fast-xml-parser'
import he from 'he'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    data: [],
    conect: true,
    id: null,
    pass: 'BIGboss',
    path: 'web_tablo/034.xml',

  },
  mutations: {
    getData(state, payload) {
      state.data = payload;
    },
    getSettingss(state, payload) {
      if (payload.pass) {
        state.pass = payload.pass;
      }
      if (payload.path) {
        state.path = payload.path;
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
      axios.get('/settings.json?v=' + Date.now())
        .then((response) => {
          commit('getSettingss', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    },

    getData({
      commit,
      state
    }) {
      axios.get(state.path + '?v=' + Date.now())
        // axios.get('http://test.synergy.com.ua/assets/data.xml')
        .then((response) => {

          if (response.status != 200) {
            state.conect = false;
            return;
          }


          state.conect = true;

          let xmlData = response.data;

          let options = {
            attributeNamePrefix: "",
            attrNodeName: false, //default is 'false'
            textNodeName: "#text",
            ignoreAttributes: false,
            ignoreNameSpace: false,
            allowBooleanAttributes: false,
            parseNodeValue: true,
            parseAttributeValue: false,
            trimValues: true,
            cdataTagName: "__cdata", //default is 'false'
            cdataPositionChar: "\\c",
            localeRange: "", //To support non english character in tag/attribute values.
            parseTrueNumberOnly: false,
            attrValueProcessor: a => he.decode(a, {
              isAttributeValue: true
            }), //default is a=>a
            tagValueProcessor: a => he.decode(a) //default is a=>a
          };

          if (parser.validate(xmlData) === true) {
            let jsonObj = parser.parse(xmlData, options);
            //  console.log(jsonObj.data.equipment);
            commit('getData', jsonObj.data.equipment);
          } else {
            state.conect = false;
          }


        })
        .catch(function (error) {
          state.conect = false;
          console.log(error);
        });

    },
  }
})