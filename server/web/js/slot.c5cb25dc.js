(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["slot"],{"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"39a2":function(t,e,r){"use strict";var n=r("e8b7"),i=r.n(n);i.a},"45fc":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").some,o=r("a640"),a=r("ae40"),c=o("some"),s=a("some");n({target:"Array",proto:!0,forced:!c||!s},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"466d":function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),o=r("50c4"),a=r("1d80"),c=r("8aa5"),s=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=i(t),u=String(this);if(!a.global)return s(a,u);var l=a.unicode;a.lastIndex=0;var f,h=[],p=0;while(null!==(f=s(a,u))){var d=String(f[0]);h[p]=d,""===d&&(a.lastIndex=c(u,o(a.lastIndex),l)),p++}return 0===p?null:h}]}))},"55ba":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"slot-wrapper text-center flex-column ai-center"},[r("h3",[t._v("点击开始，查看你的本命英雄")]),r("section",{staticClass:"slot-machine"},[r("slot-machine",{attrs:{data:t.heroes,imgLabel:"avatar",matchResult:t.match,bg:"//game.gtimg.cn/images/yxzj/cp/a20161115tyf/flash_bg.jpg"},on:{start:t.requestResult}})],1)])},i=[],o=(r("ac1f"),r("466d"),r("96cf"),r("c964")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slot",style:{backgroundImage:"url("+t.bg+")"}},[r("div",{staticClass:"slot-list clearfix px-3 py-2"},[r("div",{ref:"slotWrapper",staticClass:"slot-listWrapper flex-row"},[r("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y1+"px)"}},t._l(t.scrollList,(function(e,n){return r("li",{key:e._id+n,staticClass:"slot-item bg-light text-center py-1"},[r("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0),r("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y2+"px)"}},t._l(t.scrollList,(function(e,n){return r("li",{key:e._id+n,staticClass:"slot-item bg-light text-center py-1"},[r("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0),r("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y3+"px)"}},t._l(t.scrollList,(function(e,n){return r("li",{key:e._id+n,staticClass:"slot-item bg-light text-center py-1"},[r("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0)])]),r("button",{staticClass:"btn start-btn text-white bg-primary",on:{click:t.begin}},[t._v(t._s(t.btnText))])])},c=[],s=(r("99af"),r("45fc"),r("a9e3"),r("d0ff")),u={name:"slotMachine",props:{bg:{type:String},btnText:{type:String,default:"点击开始"},data:{type:Array,default:function(){return[]}},imgLabel:{type:String,default:"img"},duration:{type:Number,default:200},matchResult:{type:Function,default:function(){}}},data:function(){return{y1:0,y2:0,y3:0,playDefaultCircle:6,height:0,resultIndex:-1,speed:.1,slowSpeed:.05,isRunning:!1}},computed:{scrollList:function(){return this.data.length>=2?[].concat(Object(s["a"])(this.data),[this.data[0]]):1===this.data.length?[this.data[0],this.data[0],this.data[0]]:[]},scrollEndDistance:function(){return-1!==this.resultIndex?this.resultIndex*this.height:this.scrollList.length*this.height}},mounted:function(){this.height=this.$refs.slotWrapper.offsetHeight},methods:{begin:function(){this.isRunning||(this.isRunning=!0,this.resultIndex=-1,this.$emit("start"),this.running())},running:function(){var t=this;this.scroll("y1");var e=setTimeout((function(){t.scroll("y2"),clearTimeout(e)}),this.duration),r=setTimeout((function(){t.scroll("y3"),clearTimeout(r)}),1.5*this.duration)},getResultIndex:function(){var t=this;this.data.some((function(e,r){return!!t.matchResult(e)&&(t.resultIndex=r,!0)}))},scroll:function(t){var e=this,r=0,n=!0,i=this.speed*this.height,o=this.slowSpeed*this.height,a=function a(){if(r<e.playDefaultCircle||-1===e.resultIndex){var c=e[t]+i;c>e.data.length*e.height?(r++,e[t]=c-e.data.length*e.height):e[t]=c,window.requestAnimationFrame(a)}else n?(e[t]+=o,e[t]>e.data.length*e.height&&(n=!1,e[t]=e[t]-e.data.length*e.height),window.requestAnimationFrame(a)):e[t]+o<e.scrollEndDistance?(e[t]+=o,window.requestAnimationFrame(a)):(e[t]=e.scrollEndDistance,e.isRunning=!1)};window.requestAnimationFrame(a)}},watch:{matchResult:function(t){t&&this.getResultIndex()}}},l=u,f=(r("c4a4"),r("2877")),h=Object(f["a"])(l,a,c,!1,null,null,null),p=h.exports,d={name:"slots",components:{SlotMachine:p},data:function(){return{heroes:[],match:function(){}}},created:function(){this.getHeroes()},methods:{getHeroes:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/heroes/list");case 2:e=t.sent,this.heroes=e.data?e.data[0].heroList:[];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requestResult:function(){var t=this;setTimeout((function(){var e=Math.floor((t.heroes.length-1)*Math.random()),r=t.heroes[e]._id;t.match=function(t){return t._id===r}}),3e3)}}},g=d,v=(r("39a2"),Object(f["a"])(g,n,i,!1,null,null,null));e["default"]=v.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"66d4":function(t,e,r){},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(t,a),t}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,r,i,c,f=this,h=u&&f.sticky,p=n.call(f),d=f.source,g=0,v=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",v=" "+v,g++),r=new RegExp("^(?:"+d+")",p)),l&&(r=new RegExp("^"+d+"$(?!\\s)",p)),s&&(e=f.lastIndex),i=o.call(h?r:f,v),h?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new S(n||[]);return o._invoke=I(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function g(){}function v(){}function y(){}var m={};m[o]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(O([])));w&&w!==r&&n.call(w,o)&&(m=w);var b=y.prototype=g.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t,e){function r(i,o,a,c){var s=u(t[i],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function I(t,e,r){var n=l;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return T()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=b.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new _(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),o=r("94ca"),a=r("6eeb"),c=r("5135"),s=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),h=r("7c73"),p=r("241c").f,d=r("06cf").f,g=r("9bf2").f,v=r("58a8").trim,y="Number",m=i[y],x=m.prototype,w=s(h(x))==y,b=function(t){var e,r,n,i,o,a,c,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=u.slice(2),a=o.length,c=0;c<a;c++)if(s=o.charCodeAt(c),s<48||s>i)return NaN;return parseInt(o,n)}return+u};if(o(y,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var E,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(w?f((function(){x.valueOf.call(r)})):s(r)!=y)?u(new m(b(e)),r,_):b(e)},I=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;I.length>L;L++)c(m,E=I[L])&&!c(_,E)&&g(_,E,d(m,E));_.prototype=x,x.constructor=_,a(i,y,_)}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},c4a4:function(t,e,r){"use strict";var n=r("66d4"),i=r.n(n);i.a},c964:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7"),r("e6cf");function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),o=r("b622"),a=r("9263"),c=r("9112"),s=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,h){var p=o(t),d=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=d&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!d||!g||"replace"===t&&(!u||!l)||"split"===t&&!f){var v=/./[p],y=r(p,""[t],(function(t,e,r,n,i){return e.exec===a?d&&!i?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l}),m=y[0],x=y[1];n(String.prototype,t,m),n(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}h&&c(RegExp.prototype[p],"sham",!0)}},e8b7:function(t,e,r){}}]);