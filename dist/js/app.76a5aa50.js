(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)r=o[l],s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a49ca":"37b7259f"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=s[t]=[e,i]});e.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t),a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}s[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1104:function(t,e,n){"use strict";var i=n("b556"),s=n.n(i);s.a},"1bb4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""==t.data.stopped?n("v-container",{staticClass:"equipment",attrs:{fluid:"","fill-height":""}},[n("div",{staticClass:"name-st"},[t._v("\n      "+t._s(t.data.name)+"\n      "),n("small",[t._v("("+t._s(t.data.article)+")")])]),n("div",{staticClass:"list-nums"},[n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("План на зміну")]),n("div",{staticClass:"n"},[t._v(t._s(t.data.norm))])]),n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("норма на даний час")]),n("div",{staticClass:"n"},[t._v(t._s(t.data.norma_currently))])]),n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("Виконано")]),n("div",{staticClass:"n"},[t.data.current_output?n("span",[t._v(t._s(t.data.current_output))]):n("span",[t._v("0")])])]),n("div",{staticClass:"item"},[n("div",{staticClass:"t"},[t._v("Взято в роботу")]),n("div",{staticClass:"n"},[t.data.quantity_on_performer?n("span",[t._v(t._s(t.data.quantity_on_performer))]):n("span",[t._v("0")])])]),n("div",{staticClass:"item done"},[n("div",{staticClass:"t"},[n("span",{staticStyle:{color:"red"}},[t._v("Не виконано")]),t._v(" /\n          "),n("span",{staticStyle:{color:"#32bf32"}},[t._v("Виконано")])]),n("div",{staticClass:"n",class:{"color-red":t.done>0}},[t._v(t._s(Math.abs(t.done)))])])])]):t._e(),t.data.current_output||t.data.norm?t._e():n("v-container",{staticClass:"equipment equipment-off",attrs:{fluid:"","fill-height":""}},[t.data.name?n("div",{staticClass:"name-st"},[t._v("\n      "+t._s(t.data.name)+"\n      "),n("small",[t._v("("+t._s(t.data.article)+")")])]):t._e(),t.data.name?n("div",[n("h1",[t._v("ВИХІДНИЙ!")]),t.weekend?n("Countdown",{attrs:{deadline:t.weekend}}):t._e(),n("img",{attrs:{src:"img/otpusk.jpg",alt:""}})],1):n("h1",[t._v("Помилка 404")])]),t.data.stopped?n("v-container",{staticClass:"equipment-stop",attrs:{fluid:"","fill-height":""}},[n("div",{staticClass:"name-st"},[t._v("\n      "+t._s(t.data.name)+"\n      "),n("small",[t._v("("+t._s(t.data.article)+")")])]),n("div",{staticClass:"text-xs-center"},[n("h1",{staticClass:"text-xs-center",staticStyle:{"text-align":"center"}},[t._v("Зупинка")]),t.timeer?n("Countdown",{attrs:{deadline:t.timeer}}):t._e()],1)]):t._e(),t.$route.params.id?n("v-fab-transition",[n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",bottom:"",right:"",absolute:"",to:"/"}},[n("v-icon",[t._v("home")])],1)],1):t._e()],1)},s=[],a=(n("a481"),n("28a5"),n("7514"),n("75fc")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"vuejs-countdown"},[t.days>0?n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),n("p",{staticClass:"text"},[t._v(t._s(t.declension(t.days,["день","дня","днів"])))])]):t._e(),t.hours>0?n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),n("p",{staticClass:"text"},[t._v(t._s(t.declension(t.hours,["година","години","годин"])))])]):t._e(),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),n("p",{staticClass:"text"},[t._v("хв.")])]),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),n("p",{staticClass:"text"},[t._v("сек.")])])])},o=[],c=(n("6b54"),n("84b4"),null),u={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){this.bl()},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.now-this.date,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(c))},deadline:function(){this.bl()}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{bl:function(){var t=this;this.$store.dispatch("getDate").then(function(){if(!t.deadline&&!t.end)throw new Error("Missing props 'deadline' or 'end'");var e=t.deadline?t.deadline:t.end;if(t.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!t.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");t.now=t.$store.state.date,t.diff=t.now-t.date,c=setInterval(function(){t.now=t.now+1},1e3)})},declension:function(t,e){var n,i=t%100;return i>=5&&i<=20?n=e["2"]:(i%=10,n=1==i?e["0"]:i>=2&&i<=4?e["1"]:e["2"]),n}},destroyed:function(){clearInterval(c)}},l=u,d=(n("b351"),n("2877")),f=Object(d["a"])(l,r,o,!1,null,null,null),p=f.exports,v={components:{Countdown:p},data:function(){return{intervalData:null}},beforeDestroy:function(){clearInterval(this.intervalData)},created:function(){var t=this;this.$store.dispatch("getData"),this.intervalData=setInterval(function(){t.$store.dispatch("getData")},this.$store.state.timeUser)},computed:{mId:function(){var t=this.$store.state.id;return this.$route.params.id&&(t=this.$route.params.id),t},data:function(){var t=this,e=Object(a["a"])(this.$store.state.data);if(e=e.find(function(e){return e.id==t.mId}),e)return e;var n=this.$store.state.list.find(function(e){return e.id==t.mId});return n||{}},timeer:function(){if(!this.data.stopped)return!1;var t=this.data.stopped.split("-"),e=t[0].replace(".",":"),n=t[1].split(".");return e+" "+n[1]+" "+n[0]+", "+n[2]},weekend:function(){var t=this,e=this.$store.state.weekend.find(function(e){return e.id==t.mId});if(!e)return!1;var n=e.time.split("-"),i=n[0].replace(".",":"),s=n[1].split(".");return i+" "+s[1]+" "+s[0]+", "+s[2]},done:function(){var t=this.ToNum(this.data.current_output),e=this.ToNum(this.data.norma_currently),n=e-t;return n.toFixed(2)}},methods:{}},h=v,m=(n("1104"),Object(d["a"])(h,i,s,!1,null,null,null));e["a"]=m.exports},"21bb":function(t,e,n){"use strict";var i=n("bcc9"),s=n.n(i);s.a},"42ce":function(t,e,n){},5338:function(t,e,n){"use strict";var i=n("f9cc"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-snackbar",{attrs:{color:"red darken-2",timeout:0},model:{value:!t.$store.state.conect,callback:function(e){t.$set(!t.$store.state,"conect",e)},expression:"!$store.state.conect"}},[t._v("\n      Немає зєднання!\n      "),n("v-btn",{attrs:{color:"white",text:""},on:{click:t.conect}},[t._v("Підключити")])],1),n("v-content",[n("router-view")],1)],1)],1)},a=[],r={methods:{conect:function(){this.$store.dispatch("getData")}},created:function(){this.$store.dispatch("getDate"),this.$store.dispatch("getList"),this.$store.dispatch("getSettingss")}},o=r,c=n("2877"),u=Object(c["a"])(o,s,a,!1,null,null,null),l=u.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null==t.$store.state.id?n("Login"):t._e(),t.$store.state.id!=t.$store.state.pass&&null!=t.$store.state.id?n("Equipment"):t._e(),t.$store.state.id==t.$store.state.pass?n("v-container",{staticClass:"main-page",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:"",xl12:""}},[n("v-toolbar",{attrs:{color:"primary","align-center":"","justify-center":"",dark:""}},[n("v-toolbar-title",[t._v("Віяр - Станки")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"mr-5"},[n("v-btn",{attrs:{text:""},on:{click:function(e){t.typeList="grafic"}}},[t._v("Графік")]),n("v-btn",{attrs:{text:""},on:{click:function(e){t.typeList="list"}}},[t._v("Список")])],1),n("v-text-field",{attrs:{"solo-inverted":"",flat:"","hide-details":"",label:"Пошук","prepend-inner-icon":"search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),"grafic"==t.typeList?n("div",{staticClass:"grafic-list"},t._l(t.list,function(e,i){return n("div",{key:i},[n("div",{staticClass:"gr-item",on:{click:function(e){return t.$set(t.nav,"s"+i,!t.nav["s"+i])}}},[n("div",{staticClass:"name"},[n("v-btn",{attrs:{icon:"",ripple:""}},[t.nav["s"+i]?n("v-icon",[t._v("arrow_drop_up")]):n("v-icon",[t._v("arrow_drop_down")])],1),n("div",{staticClass:"t-in"},[t._v("\n                  "+t._s(e.name)+"\n                  "),n("br"),n("small",[t._v("\n                    (\n                    "),n("span",{staticClass:"count",class:{gr:e.count==e.group.length}},[t._v(t._s(e.count))]),t._v("\n                    із "+t._s(e.group.length)+" )\n                  ")])])],1),n("div",{staticClass:"norma_currently"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"t"},[t._v(t._s(t.Number_format(e.norma_currently)))])]),n("div",{staticClass:"current_output"},[n("div",{staticClass:"bg",class:{green:t.proc(e)>=100},style:{width:t.proc(e)+"%"}}),n("div",{staticClass:"t"},[e.current_output?n("span",[t._v(t._s(t.Number_format(e.current_output)))]):n("span",[t._v("0")])])])]),t.nav["s"+i]?n("table",[n("tr",[n("th",[t._v("Назва")]),n("th",[t._v("Норма")]),n("th",[t._v("Виконано")])]),t._l(e.group,function(e,i){return n("tr",{key:i,staticClass:"item",class:{stop:""!=e.stopped&&e.stopped,"no-data":!e.norma_currently}},[n("td",[n("router-link",{attrs:{to:"equipment/"+e.id}},[n("div",{staticClass:"name"},[n("v-icon",[t._v("arrow_forward")]),t._v("\n                      "+t._s(e.name)+"\n                      "),n("small",[t._v("("+t._s(e.article)+")")])],1)])],1),n("td",[e.norma_currently?n("div",{staticClass:"norma_currently"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"t"},[t._v(t._s(t.Number_format(e.norma_currently)))])]):t._e()]),""!=e.stopped&&e.stopped?n("td",[n("CountdownMin",{attrs:{deadline:t.timeer(e.stopped)}})],1):n("td",[e.current_output?n("div",{staticClass:"current_output"},[n("div",{staticClass:"bg",class:{green:t.proc(e)>=100},style:{width:t.proc(e)+"%"}}),n("div",{staticClass:"t"},[e.current_output?n("span",[t._v(t._s(t.Number_format(e.current_output)))]):n("span",[t._v("0")])])]):t._e(),e.weekend?n("CountdownMin",{attrs:{deadline:t.timeer(e.weekend)}}):t._e()],1)])})],2):t._e()])}),0):n("v-list",{staticClass:"d-list"},[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.data,function(e,i){return n("v-list-item",{key:i,class:{stop:""!=e.stopped},attrs:{to:"equipment/"+e.id}},[n("v-list-item-icon",[n("v-icon",[t._v("arrow_forward")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                  "+t._s(e.name)+"\n                  "),n("small",[t._v("("+t._s(e.article)+")")])])],1)],1)}),1)],1)],1)],1)],1):t._e()],1)},p=[],v=(n("a481"),n("28a5"),n("7514"),n("ac6a"),n("7f7f"),n("6762"),n("2fdb"),n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"login",attrs:{id:"inspire"}},[n("v-container",{staticClass:"loginOverlay",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{flex:"","align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:"","elevation-6":""}},[n("v-toolbar",{staticClass:"pt-3 pb-3 login-header"},[n("img",{attrs:{src:"logo.svg"}})]),n("v-card",[n("v-card-text",{staticClass:"pt-4"},[n("div",[n("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{label:"Номер обладнання",height:"60",outlined:"",rules:t.Rules,required:""},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),t.error?n("v-alert",{attrs:{type:"error"}},[t._v("Обладнання не знайдено !")]):t._e(),n("v-layout",{staticClass:"mt-2",attrs:{"justify-center":""}},[n("v-btn",{class:{"blue darken-2 white--text":t.valid,disabled:!t.valid},attrs:{large:""},on:{click:t.submit}},[t._v("Вхід")])],1)],1)],1)])],1)],1)],1)],1)],1)}),h=[],m={data:function(){return{valid:!1,e1:!1,Rules:[function(t){return!!t||"Поле обов'язкове"}],login:"",error:!1}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){if(this.login==this.$store.state.pass)return void this.$store.commit("setId",this.login);var e=this.$store.state.list.filter(function(e){return e.article==t.login});e.length?(console.log(e),this.$store.commit("setId",e[0].id)):(this.error=!0,setTimeout(function(){t.error=!1},3e3))}},clear:function(){this.$refs.form.reset()}}},_=m,g=(n("5338"),Object(c["a"])(_,v,h,!1,null,null,null)),b=g.exports,w=n("1bb4"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-countdown"},[t.days>0?n("span",[n("b",[t._v(t._s(t._f("twoDigits")(t.days)))]),t._v(" "+t._s(t.declension(t.days,["день","дня","днів"]))+" ")]):t._e(),t.hours?n("span",[n("b",[t._v(t._s(t._f("twoDigits")(t.hours)))]),t._v("  "+t._s(t.declension(t.hours,["година","години","годин"])))]):t._e(),n("span",[t._v(t._s(t._f("twoDigits")(t.minutes))+" : "+t._s(t._f("twoDigits")(t.seconds))+" ")])])},C=[],$=(n("6b54"),n("84b4"),null),k={name:"MinCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){this.bl()},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.now-this.date,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval($))},deadline:function(){this.bl()}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{bl:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var e=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");this.now=this.$store.state.date,this.diff=this.now-this.date,$=setInterval(function(){t.now=t.now+1},1e3)},declension:function(t,e){var n,i=t%100;return i>=5&&i<=20?n=e["2"]:(i%=10,n=1==i?e["0"]:i>=2&&i<=4?e["1"]:e["2"]),n}},destroyed:function(){clearInterval($)}},x=k,D=(n("80c2"),Object(c["a"])(x,y,C,!1,null,null,null)),j=D.exports,M=n("9b22"),S=n.n(M),I=n("9675"),q=n.n(I),E={components:{Login:b,Equipment:w["a"],CountdownMin:j},name:"home",data:function(){return{search:null,typeList:"grafic",intervalData:null,intervalWeekend:null}},computed:{nav:function(){return this.$store.state.nav},data:function(){var t=this,e=this.$store.state.data;return this.search&&(e=e.filter(function(e){return e.article.toLowerCase().includes(t.search.toLowerCase())||e.name.toLowerCase().includes(t.search.toLowerCase())})),e},list:function(){var t=this,e=this.$store.state.groups,n=q()(this.$store.state.list),i=this.$store.state.data,s=this.$store.state.weekend,a=[];return this.search&&(n=n.filter(function(e){return e.article.toLowerCase().includes(t.search.toLowerCase())||e.name.toLowerCase().includes(t.search.toLowerCase())})),e.forEach(function(e){var r=n.filter(function(t){return t.group==e}),o=0,c=0,u=0,l=0,d=0;r=S()(r,["name"]),r.forEach(function(e){var n=i.find(function(t){return t.id==e.id});if(n)e.change=n.change,e.current_output=t.ToNum(n.current_output),e.norm=t.ToNum(n.norm),e.norma_currently=t.ToNum(n.norma_currently),e.quantity_on_performer=t.ToNum(n.quantity_on_performer),e.stopped=n.stopped,o+=e.current_output,c+=e.norm,u+=e.norma_currently,l+=e.quantity_on_performer,d++;else{var a=s.find(function(t){return t.id==e.id});a&&(e.weekend=a.time)}});var f={name:e,group:r,quantity_on_performer:l,current_output:o,norm:c,norma_currently:u,count:d};a.push(f)}),a}},methods:{timeer:function(t){if(!t)return!1;var e=t.split("-"),n=e[0].replace(".",":"),i=e[1].split(".");return n+" "+i[1]+" "+i[0]+", "+i[2]},proc:function(t){var e=t.norma_currently;"string"==typeof e&&(e=e.replace(",","."),e=e.replace(" ",""));var n=t.current_output;"string"==typeof n&&(n=n.replace(",","."),n=n.replace(" ",""));var i=e/100;return n/i}},mounted:function(){var t=this;setTimeout(function(){var e=t.$store.state.data.filter(function(e){return e.id==t.$store.state.id});e.length||t.$store.state.pass==t.$store.state.id||t.$store.commit("setId",null)},2e3)},beforeDestroy:function(){clearInterval(this.intervalData),clearInterval(this.intervalWeekend)},created:function(){var t=this;this.$store.dispatch("getData"),this.$store.dispatch("getWeekend"),this.intervalData=setInterval(function(){t.$store.dispatch("getData")},this.$store.state.timeAdmin),this.intervalWeekend=setInterval(function(){t.$store.dispatch("getWeekend"),t.$store.dispatch("getDate")},5e3)}},L=E,O=(n("21bb"),Object(c["a"])(L,f,p,!1,null,null,null)),T=O.exports;i["default"].use(d["a"]);var N=new d["a"]({routes:[{path:"/",name:"home",component:T},{path:"/equipment/:id",name:"equipment",component:function(){return n.e("chunk-2d0a49ca").then(n.bind(null,"06d2"))}}]}),W=n("2f62"),A=n("bc3a"),P=n.n(A),F=n("0e44"),B="localhost:8080"==document.location.host?"http://viar.loc/":"";i["default"].use(W["a"]);var U=new W["a"].Store({plugins:[Object(F["a"])()],state:{data:[],conect:!0,id:null,pass:"BIGboss",path:"web_tablo/034.xml",date:null,list:[],weekend:[],groups:[],timeAdmin:2e5,timeUser:2e5,timeWeekend:2e5,nav:{}},mutations:{getData:function(t,e){t.data=e},getDate:function(t,e){t.date=e},getWeekend:function(t,e){t.weekend=e},getList:function(t,e){var n=[];e.forEach(function(t){n.includes(t.group)||n.push(t.group)}),t.groups=n,t.list=e},getSettingss:function(t,e){e.pass&&(t.pass=e.pass),e.timeAdmin&&(t.timeAdmin=e.timeAdmin),e.timeUser&&(t.timeUser=e.timeUser),e.timeWeekend&&(t.timeWeekend=e.timeWeekend)},setId:function(t,e){t.id=e}},actions:{getSettingss:function(t){var e=t.commit;t.state;P.a.get(B+"api.php?get=settings").then(function(t){e("getSettingss",t.data)}).catch(function(t){console.log(t)})},getDate:function(t){var e=t.commit;t.state;P.a.get(B+"api.php?get=date").then(function(t){e("getDate",t.data)}).catch(function(t){console.log(t)})},getWeekend:function(t){var e=t.commit;t.state;P.a.get(B+"api.php?get=weekend").then(function(t){e("getWeekend",t.data)}).catch(function(t){console.log(t)})},getList:function(t){var e=t.commit;t.state;P.a.get(B+"api.php?get=list").then(function(t){e("getList",t.data)}).catch(function(t){console.log(t)})},getData:function(t){var e=t.commit,n=t.state;P.a.get(B+"api.php?get=data").then(function(t){200==t.status?(n.conect=!0,e("getData",t.data)):n.conect=!1}).catch(function(t){n.conect=!1,console.log(t)})}}}),J=n("9483");Object(J["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var R=n("ce5b"),G=n.n(R),z={methods:{ToNum:function(t){return"string"==typeof t&&(t=t.replace(",","."),t=t.replace(" ","")),+t},Number_format:function(t,e,n,i){t=(t+"").replace(/[^0-9+\-Ee.]/g,"");var s=isFinite(+t)?+t:0,a=isFinite(+e)?Math.abs(e):0,r="undefined"===typeof i?" ":i,o="undefined"===typeof n?".":n,c="",u=function(t,e){var n=Math.pow(10,e);return""+(Math.round(t*n)/n).toFixed(e)};return c=(a?u(s,a):""+Math.round(s)).split("."),c[0].length>3&&(c[0]=c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,r)),(c[1]||"").length<a&&(c[1]=c[1]||"",c[1]+=new Array(a-c[1].length+1).join("0")),c.join(o)}},computed:{}};n("bf40"),n("d1e7");i["default"].config.productionTip=!1,i["default"].mixin(z),i["default"].use(G.a),new i["default"]({router:N,store:U,vuetify:new G.a,render:function(t){return t(l)}}).$mount("#app")},"80c2":function(t,e,n){"use strict";var i=n("b090"),s=n.n(i);s.a},b090:function(t,e,n){},b351:function(t,e,n){"use strict";var i=n("42ce"),s=n.n(i);s.a},b556:function(t,e,n){},bcc9:function(t,e,n){},f9cc:function(t,e,n){}});
//# sourceMappingURL=app.76a5aa50.js.map