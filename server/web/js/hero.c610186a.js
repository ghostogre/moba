(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hero"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7"),r("e6cf");function n(t,e,r,n,i,a,s){try{var o=t[a](s),c=o.value}catch(l){return void r(l)}o.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var s=t.apply(e,r);function o(t){n(s,i,a,o,c,"next",t)}function c(t){n(s,i,a,o,c,"throw",t)}o(void 0)}))}}},"83bd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model?n("div",{staticClass:"page-hero"},[n("div",{staticClass:"topbar bg-black py-2 px-3 flex-row ai-center"},[n("img",{attrs:{src:r("cf05"),height:"30",alt:""}}),t._m(0),n("router-link",{staticClass:"text-white",attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),n("div",{staticClass:"top",style:{backgroundImage:"url("+t.model.banner+")"}},[n("div",{staticClass:"info text-white p-3 flex-column h-100 jc-end"},[n("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),n("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),n("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),n("div",{staticClass:"flex-row jc-between ai-center"},[t.model.scores?n("div",{staticClass:"scores flex-row ai-center pt-2"},[n("span",[t._v("难度")]),n("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.diffcult))]),n("span",[t._v("技能")]),n("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),n("span",[t._v("攻击")]),n("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),n("span",[t._v("生存")]),n("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),n("router-link",{staticClass:"text-grey fs-sm",attrs:{tag:"span",to:"/"}},[t._v("皮肤: 2 >")])],1)])]),n("div",[t._m(1),n("swiper",[n("swiper-slide",[n("div",[n("div",[n("div",{staticClass:"p-3 bg-white border-bottom"},[n("div",{staticClass:"flex-row"},[n("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[n("i",{staticClass:"iconfont icon-video"}),t._v(" 英雄介绍视频 ")]),n("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[n("i",{staticClass:"iconfont icon-image"}),t._v(" 一图说英雄 ")])],1),n("div",{staticClass:"skills bg-white mt-4"},[n("div",{staticClass:"flex-row jc-around"},t._l(t.model.skills,(function(e,r){return n("img",{key:e.name,staticClass:"icon",class:{active:t.currentSkillIndex===r},attrs:{src:e.icon,alt:""},on:{click:function(e){t.currentSkillIndex=r}}})})),0),t.currentSkill?n("div",[n("div",{staticClass:"flex-row py-4"},[n("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),n("span",{staticClass:"text-grey-1 ml-4"},[t._v(" 冷却值："+t._s(t.currentSkill.delay)+" 消耗："+t._s(t.currentSkill.cost)+" ")])]),n("p",[t._v(t._s(t.currentSkill.description))]),n("div",{staticClass:"border-bottom"}),n("p",{staticClass:"text-grey-1 fs-sm"},[t._v("小提示："+t._s(t.currentSkill.tips))])]):t._e()])]),n("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu",title:"出装推荐"}},[n("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),n("div",{staticClass:"flex-row jc-around text-center mt-3"},t._l(t.model.items1,(function(e){return n("div",{key:e.name},[n("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),n("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0),n("div",{staticClass:"border-bottom mt-3"}),n("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),n("div",{staticClass:"flex-row jc-around text-center mt-3"},t._l(t.model.items2,(function(e){return n("div",{key:e.name},[n("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),n("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0)]),n("m-card",{attrs:{plain:"",icon:"menu",title:"使用技巧"}},[n("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),n("m-card",{attrs:{plain:"",icon:"menu",title:"对抗技巧"}},[n("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),n("m-card",{attrs:{plain:"",icon:"menu",title:"团战思路"}},[n("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),n("m-card",{attrs:{plain:"",icon:"menu",title:"英雄关系"}},[n("dl",[n("dt",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return n("dd",{key:e._id,staticClass:"flex-row pt-3"},[n("img",{attrs:{src:e.hero.avatar,height:"50",alt:""}}),n("p",{staticClass:"flex-1 my-0 ml-3"},[t._v(t._s(e.description))])])}))],2)])],1)])]),n("swiper-slide",[n("div")])],1)],1)]):t._e()},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-2 flex-1"},[r("div",{staticClass:"text-white"},[t._v("王者荣耀")]),r("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-3 bg-white"},[r("div",{staticClass:"nav flex-row py-2 jc-around border-bottom pt-3 pb-2"},[r("div",{staticClass:"nav-item active"},[r("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),r("div",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],a=(r("96cf"),r("1da1")),s={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model?this.model.skills[this.currentSkillIndex]:null}},created:function(){this.fetch()},methods:{fetch:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/heroes/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},o=s,c=(r("9852"),r("2877")),l=Object(c["a"])(o,n,i,!1,null,"0ec5c514",null);e["default"]=l.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),s=new S(n||[]);return a._invoke=k(t,r,s),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u="suspendedStart",f="suspendedYield",h="executing",d="completed",v={};function p(){}function m(){}function y(){}var g={};g[a]=function(){return this};var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,a)&&(g=w);var x=y.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(r,i,a,s){var o=l(t[r],t,i);if("throw"!==o.type){var c=o.arg,u=c.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,s)}),(function(t){e("throw",t,a,s)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,s)}))}s(o.arg)}var r;function i(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=i}function k(t,e,r){var n=u;return function(i,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return P()}r.method=i,r.arg=a;while(1){var s=r.delegate;if(s){var o=L(s,r);if(o){if(o===v)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,y[o]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(C.prototype),C.prototype[s]=function(){return this},t.AsyncIterator=C,t.async=function(e,r,n,i){var a=new C(c(e,r,n,i));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),x[o]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return o.type="throw",o.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},9852:function(t,e,r){"use strict";var n=r("a461"),i=r.n(n);i.a},a461:function(t,e,r){}}]);