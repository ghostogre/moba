(function(t){function e(e){for(var a,n,c=e[0],l=e[1],o=e[2],u=0,f=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},n={app:0},r={app:0},i=[];function c(t){return l.p+"js/"+({article:"article",hero:"hero"}[t]||t)+"."+{article:"0f5af100",hero:"8abf8912"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s={article:1,hero:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var a="css/"+({article:"article",hero:"hero"}[t]||t)+"."+{article:"d933cb9b",hero:"2437a629"}[t]+".css",r=l.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var o=i[c],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===a||u===r))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){o=f[c],u=o.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],d.parentNode.removeChild(d),s(i)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){n[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=i);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var f=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,s[1](f)}r[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var f=0;f<o.length;f++)e(o[f]);var d=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"39a2":function(t,e,s){"use strict";var a=s("e8b7"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("8bbf"),n=s.n(a),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],c=s("2877"),l={},o=Object(c["a"])(l,r,i,!1,null,null,null),u=o.exports,f=(s("6418"),s("f5df1"),s("d3b7"),s("6389")),d=s.n(f),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"topbar bg-black py-2 px-3 flex-row ai-center"},[a("img",{attrs:{src:s("cf05"),height:"30",alt:""}}),t._m(0),a("button",{staticClass:"btn bg-primary text-white",on:{click:function(e){return t.$router.push("/slot")}}},[t._v("点击查看")])]),a("div",{staticClass:"pt-3 pb-2 bg-primary"},[a("div",{staticClass:"nav text-white pb-1 nav-inverse jc-around"},[a("div",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"span"}},[t._v("首页")])],1),a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"",tag:"span"}},[t._v("攻略中心")])],1),a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"",tag:"span"}},[t._v("首页")])],1)])]),a("router-view")],1)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("div",{staticClass:"text-white"},[t._v("本命英雄")]),s("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("快去查看你的本命英雄吧")])])}],m=(s("d650"),{}),b=Object(c["a"])(m,h,p,!1,null,"6b5e4c60",null),g=b.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.homeAds?s("swiper",{attrs:{options:t.swiperOtions}},[t._l(t.homeAds.items,(function(t){return s("swiper-slide",{key:t._id},[s("a",{attrs:{href:t.url}},[s("img",{staticClass:"w-100",attrs:{src:t.image,alt:""}})])])})),s("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),s("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-grey-1"},[s("ul",{staticClass:"flex-row flex-wrap ai-center"},t._l(t.guides,(function(e){return s("li",{key:e.iconName,staticClass:"nav-item mb-3"},[s("i",{class:["sprite","sprite-"+e.iconName]}),s("div",{staticClass:"py-2"},[t._v(t._s(e.title))])])})),0),t._m(0)]),s("m-list-card",{attrs:{title:"新闻资讯",icon:"menu",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return[s("ul",t._l(a.newsList,(function(e,a){return s("router-link",{key:a,staticClass:"py-2 fs-lg flex-row",attrs:{tag:"li",to:{name:"articles",params:{id:e._id}}}},[s("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-dark fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])})),1)]}}])}),s("m-list-card",{attrs:{title:"英雄列表",icon:"hero",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return[s("ul",{staticClass:"flex-row flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(a.heroList,(function(e){return s("router-link",{key:e._id,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"li",to:{name:"hero",params:{id:e._id}}}},[s("div",{staticClass:"heroAvatar"},[s("img",{staticClass:"heroAvatar__img",attrs:{src:e.avatar,alt:""}})]),s("div",[t._v(t._s(e.name))])])})),1)]}}])})],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 fs-sm"},[s("i",{staticClass:"sprite sprite-around mr-1"}),s("span",[t._v("收起")])])}],y=(s("96cf"),s("1da1")),x=s("c1df"),_=s.n(x),w={data:function(){return{swiperOtions:{pagination:{el:".swiper-pagination"}},guides:[{title:"爆料站",iconName:"news"},{title:"故事站",iconName:"story"},{title:"周边商场",iconName:"store"},{title:"体验服",iconName:"beta"},{title:"新人专区",iconName:"xrzq"},{title:"荣耀·传承",iconName:"whz"},{title:"模拟战资料库",iconName:"trz"},{title:"王者营地",iconName:"wzyd"},{title:"公众号",iconName:"wx"},{title:"版本介绍",iconName:"version"}],newsCats:[],heroCats:[],homeAds:null}},methods:{fetchNewsList:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/news/list");case 2:e=t.sent,this.newsCats=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchHeroList:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/heroes/list");case 2:e=t.sent,this.heroCats=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchAds:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/ads/home");case 2:e=t.sent,this.homeAds=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchNewsList(),this.fetchHeroList(),this.fetchAds()},filters:{date:function(t){return _()(t).format("MM/DD")}}},k=w,C=(s("95c4"),Object(c["a"])(k,j,v,!1,null,null,null)),O=C.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"slot-wrapper text-center flex-column ai-center"},[s("h3",[t._v("点击开始，查看你的本命英雄")]),s("section",{staticClass:"slot-machine"},[s("slot-machine",{attrs:{data:t.heroes,imgLabel:"avatar",matchResult:t.match,bg:"//game.gtimg.cn/images/yxzj/cp/a20161115tyf/flash_bg.jpg"},on:{start:t.requestResult}})],1)])},z=[],S=(s("ac1f"),s("466d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slot",style:{backgroundImage:"url("+t.bg+")"}},[s("div",{staticClass:"slot-list clearfix px-3 py-2"},[s("div",{ref:"slotWrapper",staticClass:"slot-listWrapper flex-row"},[s("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y1+"px)"}},t._l(t.scrollList,(function(e,a){return s("li",{key:e._id+a,staticClass:"slot-item bg-light text-center py-1"},[s("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0),s("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y2+"px)"}},t._l(t.scrollList,(function(e,a){return s("li",{key:e._id+a,staticClass:"slot-item bg-light text-center py-1"},[s("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0),s("ul",{staticClass:"slot-list__line flex-1 mr-1",style:{transform:"translateY(-"+t.y3+"px)"}},t._l(t.scrollList,(function(e,a){return s("li",{key:e._id+a,staticClass:"slot-item bg-light text-center py-1"},[s("img",{attrs:{src:e[t.imgLabel],alt:""}})])})),0)])]),s("button",{staticClass:"btn start-btn text-white bg-primary",on:{click:t.begin}},[t._v(t._s(t.btnText))])])}),L=[],N=(s("99af"),s("45fc"),s("a9e3"),s("2909")),A={name:"slotMachine",props:{bg:{type:String},btnText:{type:String,default:"点击开始"},data:{type:Array,default:function(){return[]}},imgLabel:{type:String,default:"img"},duration:{type:Number,default:200},matchResult:{type:Function,default:function(){}}},data:function(){return{y1:0,y2:0,y3:0,playDefaultCircle:6,height:0,timer1:null,timer2:null,timer3:null,resultIndex:-1,speed:.4,slowSpeed:.2}},computed:{scrollList:function(){return this.data.length>=2?[].concat(Object(N["a"])(this.data),[this.data[0]]):1===this.data.length?[this.data[0],this.data[0],this.data[0]]:[]},scrollEndDistance:function(){return-1!==this.resultIndex?this.resultIndex*this.height:this.scrollList.length*this.height}},mounted:function(){this.height=this.$refs.slotWrapper.offsetHeight},methods:{begin:function(){this.resultIndex=-1,this.$emit("start"),this.running()},running:function(){var t=this;this.scroll("y1");var e=setTimeout((function(){t.scroll("y2"),clearTimeout(e)}),this.duration),s=setTimeout((function(){t.scroll("y3"),clearTimeout(s)}),1.5*this.duration)},getResultIndex:function(){var t=this;this.data.some((function(e,s){return!!t.matchResult(e)&&(t.resultIndex=s,!0)}))},scroll:function(t){var e=this,s=0,a=!0,n=this.speed*this.height,r=this.slowSpeed*this.height,i=setInterval((function(){s<e.playDefaultCircle||-1===e.resultIndex?(e[t]+=n,e[t]>e.data.length*e.height&&(s++,e[t]=e[t]-e.data.length*e.height)):a?(e[t]+=r,e[t]>e.data.length*e.height&&(a=!1,e[t]=e[t]-e.data.length*e.height)):e[t]+r<e.scrollEndDistance?e[t]+=r:(e[t]=e.scrollEndDistance,clearInterval(i))}),80)}},watch:{matchResult:function(t){t&&this.getResultIndex()}}},R=A,$=(s("c4a4"),Object(c["a"])(R,S,L,!1,null,null,null)),I=$.exports,T={name:"slots",components:{SlotMachine:I},data:function(){return{heroes:[],match:function(){}}},created:function(){this.getHeroes()},methods:{getHeroes:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/heroes/list");case 2:e=t.sent,this.heroes=e.data?e.data[0].heroList:[];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requestResult:function(){var t=this;setTimeout((function(){var e=Math.floor((t.heroes.length-1)*Math.random()),s=t.heroes[e]._id;t.match=function(t){return t._id===s}}),3e3)}}},P=T,q=(s("39a2"),Object(c["a"])(P,E,z,!1,null,null,null)),D=q.exports;n.a.use(d.a);var M=[{path:"/",name:"main",component:g,children:[{path:"",name:"home",component:O},{path:"/articles/:id",name:"articles",component:function(){return s.e("article").then(s.bind(null,"a706"))},props:!0},{path:"/hero/:id",name:"hero",component:function(){return s.e("hero").then(s.bind(null,"83bd"))},props:!0}]},{path:"/slot",name:"slot",component:D}],H=new d.a({mode:"history",routes:M}),U=H,B=s("cebe"),V=s.n(B),F=V.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),W=F,Y=(s("a342"),s("7212")),G=s.n(Y),J=(s("dfa4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card p-3 bg-white mt-3"},[s("div",{staticClass:"card-header flex-row ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("i",{class:"sprite sprite-"+t.icon}),s("strong",{staticClass:"fs-xl flex-1 px-2"},[t._v(t._s(t.title))]),t.plain?t._e():s("i",{staticClass:"sprite sprite-more"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),K=[],Q={props:{title:{type:String,default:"",required:!0},icon:{type:String,default:"",required:!0},plain:{type:Boolean,default:!1}}},X=Q,Z=Object(c["a"])(X,J,K,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{title:t.title,icon:"menu"}},[s("ul",{staticClass:"nav flex-row jc-between"},t._l(t.categories,(function(e,a){return s("li",{key:a,staticClass:"nav-item",class:{active:t.activeIndex===a},on:{click:function(e){return t.$refs.list.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3",staticStyle:{"box-sizing":"border-box"}},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.activeIndex=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},st=[],at={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{activeIndex:0}}},nt=at,rt=Object(c["a"])(nt,et,st,!1,null,null,null),it=rt.exports;n.a.use(G.a),n.a.component("m-card",tt),n.a.component("m-list-card",it),n.a.config.productionTip=!1,n.a.prototype.$http=W,new n.a({router:U,render:function(t){return t(u)},mounted:function(){document.dispatchEvent(new Event("render-event"))}}).$mount("#app")},6389:function(t,e){t.exports=VueRouter},6418:function(t,e,s){},"66d4":function(t,e,s){},"79ba":function(t,e,s){},"8bbf":function(t,e){t.exports=Vue},"95c4":function(t,e,s){"use strict";var a=s("d26b"),n=s.n(a);n.a},a342:function(t,e,s){},c4a4:function(t,e,s){"use strict";var a=s("66d4"),n=s.n(a);n.a},cebe:function(t,e){t.exports=axios},cf05:function(t,e,s){t.exports=s.p+"img/logo.fc64bf07.png"},d26b:function(t,e,s){},d650:function(t,e,s){"use strict";var a=s("79ba"),n=s.n(a);n.a},e8b7:function(t,e,s){}});