(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a49ca":"3b72d5d6"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t),i=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}s[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1104:function(t,e,n){"use strict";var a=n("b556"),s=n.n(a);s.a},"1bb4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""==t.data.stopped?n("v-container",{staticClass:"equipment",attrs:{fluid:"","fill-height":""}},[n("div",{staticClass:"name-st"},[t._v("\n      "+t._s(t.data.name)+"\n      "),n("small",[t._v("("+t._s(t.data.article)+")")])]),n("div",{staticClass:"list-nums"},[n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("План на зміну")]),n("div",{staticClass:"n"},[t._v(t._s(t.data.norm))])]),n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("норма на даний час")]),n("div",{staticClass:"n"},[t._v(t._s(t.data.norma_currently))])]),n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("Виконано")]),n("div",{staticClass:"n"},[t.data.current_output?n("span",[t._v(t._s(t.data.current_output))]):n("span",[t._v("0")])])]),n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("Взято в роботу")]),n("div",{staticClass:"n"},[t._v(t._s(t.data.quantity_on_performer))])]),n("div",{staticClass:"item done"},[n("div",{staticClass:"t"},[n("span",{staticStyle:{color:"red"}},[t._v("Не виконано")]),t._v(" /\n          "),n("span",{staticStyle:{color:"#32bf32"}},[t._v("Виконано")])]),n("div",{staticClass:"n",class:{"color-red":t.done>0}},[t._v(t._s(Math.abs(t.done)))])])])]):t._e(),t.data.stopped?n("v-container",{staticClass:"equipment-stop",attrs:{fluid:"","fill-height":""}},[n("div",{staticClass:"name-st"},[t._v("\n      "+t._s(t.data.name)+"\n      "),n("small",[t._v("("+t._s(t.data.article)+")")])]),n("div",{staticClass:"text-xs-center"},[n("h1",{staticClass:"text-xs-center",staticStyle:{"text-align":"center"}},[t._v("Зупинка")]),t.timeer?n("Countdown",{attrs:{deadline:t.timeer}}):t._e()],1)]):t._e(),t.$route.params.id?n("v-fab-transition",[n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",bottom:"",right:"",absolute:"",to:"/"}},[n("v-icon",[t._v("home")])],1)],1):t._e()],1)},s=[],i=(n("a481"),n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"vuejs-countdown"},[t.days>0?n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),n("p",{staticClass:"text"},[t._v(t._s(t.declension(t.days,["день","дня","днів"])))])]):t._e(),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),n("p",{staticClass:"text"},[t._v(t._s(t.declension(t.hours,["година","години","годин"])))])]),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),n("p",{staticClass:"text"},[t._v("хв.")])]),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),n("p",{staticClass:"text"},[t._v("сек.")])])])}),r=[],o=(n("6b54"),n("84b4"),null),c={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){this.bl()},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.now-this.date,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(o))},deadline:function(){this.bl()}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{bl:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var e=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");this.now=Math.trunc((new Date).getTime()/1e3),this.diff=this.now-this.date,o=setInterval(function(){t.now=Math.trunc((new Date).getTime()/1e3)},1e3)},declension:function(t,e){var n,a=t%100;return a>=5&&a<=20?n=e["2"]:(a%=10,n=1==a?e["0"]:a>=2&&a<=4?e["1"]:e["2"]),n}},destroyed:function(){clearInterval(o)}},l=c,u=(n("b351"),n("2877")),d=Object(u["a"])(l,i,r,!1,null,null,null),f=d.exports,v={components:{Countdown:f},created:function(){var t=this;this.$store.dispatch("getData"),setInterval(function(){t.$store.dispatch("getData")},2e5)},computed:{data:function(){var t=this.$store.state.data,e=this.$store.state.id;return this.$route.params.id&&(e=this.$route.params.id),t=t.filter(function(t){return t.id==e}),t.length?t[0]:{}},timeer:function(){if(!this.data.stopped)return!1;var t=this.data.stopped.split("-"),e=t[0].replace(".",":"),n=t[1].split(".");return e+" "+n[1]+" "+n[0]+", "+n[2]},done:function(){var t=this.data.current_output,e=this.data.norma_currently;"string"==typeof t&&(t=t.replace(",","."),t=t.replace(" ","")),"string"==typeof e&&(e=e.replace(",","."),e=e.replace(" ",""));var n=e-t;return n.toFixed(2)}},methods:{}},p=v,h=(n("1104"),Object(u["a"])(p,a,s,!1,null,null,null));e["a"]=h.exports},"21bb":function(t,e,n){"use strict";var a=n("bcc9"),s=n.n(a);s.a},"42ce":function(t,e,n){},5338:function(t,e,n){"use strict";var a=n("f9cc"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-snackbar",{attrs:{color:"red darken-2",timeout:0},model:{value:!t.$store.state.conect,callback:function(e){t.$set(!t.$store.state,"conect",e)},expression:"!$store.state.conect"}},[t._v("\n      Немає зєднання!\n      "),n("v-btn",{attrs:{color:"white",text:""},on:{click:t.conect}},[t._v("Підключити")])],1),n("v-content",[n("router-view")],1)],1)],1)},i=[],r={methods:{conect:function(){this.$store.dispatch("getData")}},created:function(){this.$store.dispatch("getSettingss")}},o=r,c=n("2877"),l=Object(c["a"])(o,s,i,!1,null,null,null),u=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null==t.$store.state.id?n("Login"):t._e(),t.$store.state.id!=t.$store.state.pass&&null!=t.$store.state.id?n("Equipment"):t._e(),t.$store.state.id==t.$store.state.pass?n("v-container",{staticClass:"main-page",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:"",xl12:""}},[n("v-toolbar",{attrs:{color:"primary","align-center":"","justify-center":"",dark:""}},[n("v-toolbar-title",[t._v("Віяр - Станки")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"mr-5"},[n("v-btn",{attrs:{text:""},on:{click:function(e){t.typeList="grafic"}}},[t._v("Графік")]),n("v-btn",{attrs:{text:""},on:{click:function(e){t.typeList="list"}}},[t._v("Список")])],1),n("v-text-field",{attrs:{"solo-inverted":"",flat:"","hide-details":"",label:"Пошук","prepend-inner-icon":"search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),"grafic"==t.typeList?n("div",{staticClass:"grafic-list"},[n("table",[n("tr",[n("th",[t._v("Назва")]),n("th",[t._v("Норма")]),n("th",[t._v("Виконано")])]),t._l(t.data,function(e,a){return n("tr",{key:a,staticClass:"item",class:{stop:""!=e.stopped}},[n("td",[n("router-link",{attrs:{to:"equipment/"+e.id}},[n("div",{staticClass:"name"},[n("v-icon",[t._v("arrow_forward")]),t._v("\n                    "+t._s(e.name)+"\n                    "),n("small",[t._v("("+t._s(e.article)+")")])],1)])],1),n("td",[n("div",{staticClass:"norma_currently"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"t"},[t._v(t._s(e.norma_currently))])])]),n("td",[n("div",{staticClass:"current_output"},[n("div",{staticClass:"bg",class:{green:t.proc(e)>=100},style:{width:t.proc(e)+"%"}}),n("div",{staticClass:"t"},[e.current_output?n("span",[t._v(t._s(e.current_output))]):n("span",[t._v("0")])])])])])})],2)]):n("v-list",{staticClass:"d-list"},[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.data,function(e,a){return n("v-list-item",{key:a,class:{stop:""!=e.stopped},attrs:{to:"equipment/"+e.id}},[n("v-list-item-icon",[n("v-icon",[t._v("arrow_forward")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                  "+t._s(e.name)+"\n                  "),n("small",[t._v("("+t._s(e.article)+")")])])],1)],1)}),1)],1)],1)],1)],1):t._e()],1)},v=[],p=(n("a481"),n("7f7f"),n("6762"),n("2fdb"),n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"login",attrs:{id:"inspire"}},[n("v-container",{staticClass:"loginOverlay",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{flex:"","align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:"","elevation-6":""}},[n("v-toolbar",{staticClass:"pt-3 pb-3 login-header"},[n("img",{attrs:{src:"logo.svg"}})]),n("v-card",[n("v-card-text",{staticClass:"pt-4"},[n("div",[n("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{label:"Номер обладнання",height:"60",outlined:"",rules:t.Rules,required:""},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),t.error?n("v-alert",{attrs:{type:"error"}},[t._v("Обладнання не знайдено !")]):t._e(),n("v-layout",{staticClass:"mt-2",attrs:{"justify-center":""}},[n("v-btn",{class:{"blue darken-2 white--text":t.valid,disabled:!t.valid},attrs:{large:""},on:{click:t.submit}},[t._v("Вхід")])],1)],1)],1)])],1)],1)],1)],1)],1)}),h=[],m={data:function(){return{valid:!1,e1:!1,Rules:[function(t){return!!t||"Поле обов'язкове"}],login:"",error:!1}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){if(this.login==this.$store.state.pass)return void this.$store.commit("setId",this.login);var e=this.$store.state.data.filter(function(e){return e.article==t.login});e.length?(console.log(e),this.$store.commit("setId",e[0].id)):(this.error=!0,setTimeout(function(){t.error=!1},3e3))}},clear:function(){this.$refs.form.reset()}}},g=m,_=(n("5338"),Object(c["a"])(g,p,h,!1,null,null,null)),b=_.exports,w=n("1bb4"),y=n("5118"),C={components:{Login:b,Equipment:w["a"]},name:"home",data:function(){return{search:null,typeList:"grafic"}},computed:{data:function(){var t=this,e=this.$store.state.data;return this.search&&(e=e.filter(function(e){return e.article.toLowerCase().includes(t.search.toLowerCase())||e.name.toLowerCase().includes(t.search.toLowerCase())})),e}},methods:{proc:function(t){var e=t.norma_currently;"string"==typeof e&&(e=e.replace(",","."),e=e.replace(" ",""));var n=t.current_output;"string"==typeof n&&(n=n.replace(",","."),n=n.replace(" ",""));var a=e/100;return n/a}},mounted:function(){var t=this;Object(y["setTimeout"])(function(){var e=t.$store.state.data.filter(function(e){return e.id==t.$store.state.id});e.length||t.$store.state.pass==t.$store.state.id||t.$store.commit("setId",null)},2e3)},created:function(){var t=this;this.$store.dispatch("getData"),setInterval(function(){t.$store.state.conect&&t.$store.dispatch("getData")},2e5)}},x=C,$=(n("21bb"),Object(c["a"])(x,f,v,!1,null,null,null)),k=$.exports;a["default"].use(d["a"]);var j=new d["a"]({routes:[{path:"/",name:"home",component:k},{path:"/equipment/:id",name:"equipment",component:function(){return n.e("chunk-2d0a49ca").then(n.bind(null,"06d2"))}}]}),D=n("2f62"),S=n("bc3a"),O=n.n(S),M=n("0e44"),q=n("7a51"),E=n.n(q),N=n("92d7"),P=n.n(N);a["default"].use(D["a"]);var T=new D["a"].Store({plugins:[Object(M["a"])()],state:{data:[],conect:!0,id:null,pass:"BIGboss",path:"web_tablo/034.xml"},mutations:{getData:function(t,e){t.data=e},getSettingss:function(t,e){e.pass&&(t.pass=e.pass),e.path&&(t.path=e.path)},setId:function(t,e){t.id=e}},actions:{getSettingss:function(t){var e=t.commit;t.state;O.a.get("/settings.json?v="+Date.now()).then(function(t){e("getSettingss",t.data)}).catch(function(t){console.log(t)})},getData:function(t){var e=t.commit,n=t.state;O.a.get(n.path+"?v="+Date.now()).then(function(t){if(200==t.status){n.conect=!0;var a=t.data,s={attributeNamePrefix:"",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!1,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,trimValues:!0,cdataTagName:"__cdata",cdataPositionChar:"\\c",localeRange:"",parseTrueNumberOnly:!1,attrValueProcessor:function(t){return P.a.decode(t,{isAttributeValue:!0})},tagValueProcessor:function(t){return P.a.decode(t)}};if(!0===E.a.validate(a)){var i=E.a.parse(a,s);e("getData",i.data.equipment)}else n.conect=!1}else n.conect=!1}).catch(function(t){n.conect=!1,console.log(t)})}}}),I=n("9483");Object(I["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var L=n("ce5b"),A=n.n(L);n("bf40"),n("d1e7");a["default"].config.productionTip=!1,a["default"].use(A.a),new a["default"]({router:j,store:T,vuetify:new A.a,render:function(t){return t(u)}}).$mount("#app")},b351:function(t,e,n){"use strict";var a=n("42ce"),s=n.n(a);s.a},b556:function(t,e,n){},bcc9:function(t,e,n){},f9cc:function(t,e,n){}});
//# sourceMappingURL=app.a5e69fc1.js.map