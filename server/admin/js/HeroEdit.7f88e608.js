(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HeroEdit"],{1774:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save(e)}}},[r("el-tabs",{attrs:{type:"border-card",value:"basic"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,headers:t.getAuthHeaders(),"on-success":function(e){t.$set(t.model,"avatar",e.url)}}},[t.model.avatar?r("img",{staticClass:"avatar",attrs:{src:t.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"Banner"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,headers:t.getAuthHeaders(),"on-success":function(e){t.$set(t.model,"banner",e.url)}}},[t.model.banner?r("img",{staticClass:"avatar",attrs:{src:t.model.banner}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.diffcult,callback:function(e){t.$set(t.model.scores,"diffcult",e)},expression:"model.scores.diffcult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.skills,callback:function(e){t.$set(t.model.scores,"skills",e)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.attack,callback:function(e){t.$set(t.model.scores,"attack",e)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.survive,callback:function(e){t.$set(t.model.scores,"survive",e)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:t.model.items1,callback:function(e){t.$set(t.model,"items1",e)},expression:"model.items1"}},t._l(t.items,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:t.model.items2,callback:function(e){t.$set(t.model,"items2",e)},expression:"model.items2"}},t._l(t.items,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.usageTips,callback:function(e){t.$set(t.model,"usageTips",e)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.battleTips,callback:function(e){t.$set(t.model,"battleTips",e)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.teamTips,callback:function(e){t.$set(t.model,"teamTips",e)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),t._v(" 添加技能")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.skills,(function(e,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,headers:t.getAuthHeaders(),"on-success":function(r){t.$set(e,"icon",r.url)}}},[e.icon?r("img",{staticClass:"avatar",attrs:{src:e.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:e.delay,callback:function(r){t.$set(e,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:e.cost,callback:function(r){t.$set(e,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(r){t.$set(e,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.tips,callback:function(r){t.$set(e,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.skills.splice(n,1)}}},[t._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),t._v(" 添加英雄")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.partners,(function(e,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"选择英雄"}},[r("el-select",{attrs:{filterable:""},model:{value:e.hero,callback:function(r){t.$set(e,"hero",r)},expression:"item.hero"}},t._l(t.heroes,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(r){t.$set(e,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.partners.splice(n,1)}}},[t._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"},attrs:{label:""}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={props:{id:{}},name:"HeroEdit",data:function(){return{model:{name:"",avatar:"",title:"",banner:"",scores:{diffcult:0},skills:[],partners:[]},categories:[],items:[],heroes:[]}},created:function(){this.fetchItems(),this.fetchCategories(),this.fetchHeroes(),this.id&&this.fetch()},methods:{save:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.id){t.next=5;break}return t.next=3,this.$http.put("/rest/heroes/".concat(this.id),this.model);case 3:t.next=7;break;case 5:return t.next=7,this.$http.post("/rest/heroes",this.model);case 7:this.$router.push("/heroes/list"),this.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetch:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/rest/heroes/".concat(this.id));case 2:e=t.sent,this.model=Object.assign({},this.model,e.data);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchCategories:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/rest/categories");case 2:e=t.sent,this.categories=e.data||[];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchItems:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/rest/items");case 2:e=t.sent,this.items=e.data||[];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchHeroes:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/rest/heroes");case 2:e=t.sent,200==e.status&&(this.heroes=e.data||[]);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},s=i,l=r("2877"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(t,e,r,n,a,o,i){try{var s=t[o](i),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,l,"next",t)}function l(t){n(i,a,o,s,l,"throw",t)}s(void 0)}))}}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=w;var m="suspendedStart",f="suspendedYield",p="executing",h="completed",d={},v={};v[i]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(R([])));b&&b!==n&&a.call(b,i)&&(v=b);var g=$.prototype=k.prototype=Object.create(v);_.prototype=g.constructor=$,$.constructor=_,$[l]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,$):(t.__proto__=$,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},u.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,r,n){var a=new E(w(t,e,r,n));return u.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(g),g[l]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=R,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function w(t,e,r,n){var a=e&&e.prototype instanceof k?e:k,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=O(t,r,i),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function $(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,o,i){var s=x(t[r],t,n);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(c).then((function(t){l.value=t,o(l)}),i)}i(s.arg)}var r;function n(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=n}function O(t,e,r){var n=m;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw o;return P()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=j(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===m)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=x(t,e,r);if("normal"===l.type){if(n=r.done?h:f,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function R(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}}]);
//# sourceMappingURL=HeroEdit.7f88e608.js.map