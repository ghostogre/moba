(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["slot"],{"39a2":function(t,e,r){"use strict";var n=r("e8b7"),i=r.n(n);i.a},"55ba":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"slot-wrapper text-center flex-column ai-center"},[r("h3",[t._v("点击开始，查看你的本命英雄")]),r("section",{staticClass:"slot-machine"},[r("slot-machine",{attrs:{data:t.heroes,imgLabel:"avatar",matchIndex:t.matchIndex,bg:"//game.gtimg.cn/images/yxzj/cp/a20161115tyf/flash_bg.jpg"},on:{start:t.requestResult}})],1)])},i=[],o=(r("96cf"),r("c964")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slot",style:{backgroundImage:"url("+t.bg+")"}},[r("div",{staticClass:"slot-list clearfix px-3 py-2"},[r("div",{ref:"slotWrapper",staticClass:"slot-listWrapper flex-row"},[r("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y1+"px)"}},t._l(t.scrollList,(function(e,n){return r("li",{key:e._id+n,staticClass:"slot-item bg-light text-center py-1"},[r("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0),r("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y2+"px)"}},t._l(t.scrollList,(function(e,n){return r("li",{key:e._id+n,staticClass:"slot-item bg-light text-center py-1"},[r("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0),r("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y3+"px)"}},t._l(t.scrollList,(function(e,n){return r("li",{key:e._id+n,staticClass:"slot-item bg-light text-center py-1"},[r("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0)])]),r("button",{staticClass:"btn start-btn text-white bg-primary",on:{click:t.begin}},[t._v(t._s(t.btnText))])])},s=[],c=(r("99af"),r("a9e3"),r("d0ff")),u={name:"slotMachine",props:{bg:{type:String},btnText:{type:String,default:"点击开始"},data:{type:Array,default:function(){return[]}},imgLabel:{type:String,default:"img"},duration:{type:Number,default:200},matchIndex:{type:Number,default:-1}},data:function(){return{y1:0,y2:0,y3:0,playDefaultCircle:6,height:0,speed:.1,slowSpeed:.05,isRunning:!1}},computed:{scrollList:function(){return this.data.length>=2?[].concat(Object(c["a"])(this.data),[this.data[0]]):1===this.data.length?[this.data[0],this.data[0],this.data[0]]:[]},scrollEndDistance:function(){return-1!==this.matchIndex?this.matchIndex*this.height:this.scrollList.length*this.height}},mounted:function(){this.height=this.$refs.slotWrapper.offsetHeight},methods:{begin:function(){this.isRunning||(this.isRunning=!0,this.$emit("start"),this.running())},running:function(){var t=this;this.scroll("y1");var e=setTimeout((function(){t.scroll("y2"),clearTimeout(e)}),this.duration),r=setTimeout((function(){t.scroll("y3"),clearTimeout(r)}),1.5*this.duration)},scroll:function(t){var e=this,r=0,n=!0,i=this.speed*this.height,o=this.slowSpeed*this.height,a=function a(){if(r<e.playDefaultCircle||-1===e.matchIndex){var s=e[t]+i;s>e.data.length*e.height?(r++,e[t]=s-e.data.length*e.height):e[t]=s,window.requestAnimationFrame(a)}else n?(e[t]+=o,e[t]>e.data.length*e.height&&(n=!1,e[t]=e[t]-e.data.length*e.height),window.requestAnimationFrame(a)):e[t]+o<e.scrollEndDistance?(e[t]+=o,window.requestAnimationFrame(a)):(e[t]=e.scrollEndDistance,e.isRunning=!1)};window.requestAnimationFrame(a)}}},l=u,h=(r("c4a4"),r("2877")),f=Object(h["a"])(l,a,s,!1,null,null,null),p=f.exports,d={name:"slots",components:{SlotMachine:p},data:function(){return{heroes:[],matchIndex:-1}},created:function(){this.getHeroes()},methods:{getHeroes:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/heroes/list");case 2:e=t.sent,this.heroes=e.data?e.data[0].heroList:[];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requestResult:function(){var t=this;setTimeout((function(){var e=Math.floor((t.heroes.length-1)*Math.random());t.matchIndex=e}),3e3)}}},g=d,y=(r("39a2"),Object(h["a"])(g,n,i,!1,null,null,null));e["default"]=y.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"66d4":function(t,e,r){},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(t,a),t}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new A(n||[]);return o._invoke=E(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function g(){}function y(){}function m(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==r&&n.call(x,o)&&(v=x);var b=m.prototype=g.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function r(i,o,a,s){var c=u(t[i],t,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=l;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return O()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=I(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=b.constructor=m,m.constructor=y,m[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),b[s]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),o=r("94ca"),a=r("6eeb"),s=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),h=r("d039"),f=r("7c73"),p=r("241c").f,d=r("06cf").f,g=r("9bf2").f,y=r("58a8").trim,m="Number",v=i[m],w=v.prototype,x=c(f(w))==m,b=function(t){var e,r,n,i,o,a,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=y(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=u.slice(2),a=o.length,s=0;s<a;s++)if(c=o.charCodeAt(s),c<48||c>i)return NaN;return parseInt(o,n)}return+u};if(o(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,L=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof L&&(x?h((function(){w.valueOf.call(r)})):c(r)!=m)?u(new v(b(e)),r,L):b(e)},E=n?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)s(v,_=E[I])&&!s(L,_)&&g(L,_,d(v,_));L.prototype=w,w.constructor=L,a(i,m,L)}},c4a4:function(t,e,r){"use strict";var n=r("66d4"),i=r.n(n);i.a},c964:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7"),r("e6cf");function n(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}},e8b7:function(t,e,r){}}]);