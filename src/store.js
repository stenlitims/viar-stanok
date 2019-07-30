import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import parser from 'fast-xml-parser'
import he from 'he'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    conect: true
  },
  mutations: {
    getData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    getData({
      commit,
      state
    }) {
      axios.get('/data.xml?v='+Date.now())
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
          }


        })
        .catch(function (error) {
          state.conect = false;
          console.log(error);
        });

    },
  }
})