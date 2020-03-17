(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hero"],{"16cc":function(t,s,a){"use strict";var i=a("4dd9"),e=a.n(i);e.a},"4dd9":function(t,s,a){},"83bd":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.model?i("div",{staticClass:"page-hero"},[i("div",{staticClass:"topbar bg-black py-2 px-3 flex-row ai-center"},[i("img",{attrs:{src:a("cf05"),height:"30",alt:""}}),t._m(0),i("router-link",{staticClass:"text-white",attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),i("div",{staticClass:"top",style:{backgroundImage:"url("+t.model.banner+")"}},[i("div",{staticClass:"info text-white p-3 flex-column h-100 jc-end"},[i("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),i("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),i("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),i("div",{staticClass:"flex-row jc-between ai-center"},[t.model.scores?i("div",{staticClass:"scores flex-row ai-center pt-2"},[i("span",[t._v("难度")]),i("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.diffcult))]),i("span",[t._v("技能")]),i("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),i("span",[t._v("攻击")]),i("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),i("span",[t._v("生存")]),i("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),i("router-link",{staticClass:"text-grey fs-sm",attrs:{tag:"span",to:"/"}},[t._v("皮肤: 2 >")])],1)])]),i("div",[t._m(1),i("swiper",[i("swiper-slide",[i("div",[i("div",[i("div",{staticClass:"p-3 bg-white border-bottom"},[i("div",{staticClass:"flex-row"},[i("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[i("i",{staticClass:"iconfont icon-video"}),t._v(" 英雄介绍视频 ")]),i("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[i("i",{staticClass:"iconfont icon-image"}),t._v(" 一图说英雄 ")])],1),i("div",{staticClass:"skills bg-white mt-4"},[i("div",{staticClass:"flex-row jc-around"},t._l(t.model.skills,(function(s,a){return i("img",{key:s.name,staticClass:"icon",class:{active:t.currentSkillIndex===a},attrs:{src:s.icon,alt:""},on:{click:function(s){t.currentSkillIndex=a}}})})),0),t.currentSkill?i("div",[i("div",{staticClass:"flex-row py-4"},[i("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),i("span",{staticClass:"text-grey-1 ml-4"},[t._v(" 冷却值："+t._s(t.currentSkill.delay)+" 消耗："+t._s(t.currentSkill.cost)+" ")])]),i("p",[t._v(t._s(t.currentSkill.description))]),i("div",{staticClass:"border-bottom"}),i("p",{staticClass:"text-grey-1 fs-sm"},[t._v("小提示："+t._s(t.currentSkill.tips))])]):t._e()])]),i("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu",title:"出装推荐"}},[i("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),i("div",{staticClass:"flex-row jc-around text-center mt-3"},t._l(t.model.items1,(function(s){return i("div",{key:s.name},[i("img",{key:s.icon,staticClass:"icon",attrs:{src:s.icon,alt:""}}),i("div",{staticClass:"fs-xs"},[t._v(t._s(s.name))])])})),0),i("div",{staticClass:"border-bottom mt-3"}),i("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),i("div",{staticClass:"flex-row jc-around text-center mt-3"},t._l(t.model.items2,(function(s){return i("div",{key:s.name},[i("img",{key:s.icon,staticClass:"icon",attrs:{src:s.icon,alt:""}}),i("div",{staticClass:"fs-xs"},[t._v(t._s(s.name))])])})),0)]),i("m-card",{attrs:{plain:"",icon:"menu",title:"使用技巧"}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),i("m-card",{attrs:{plain:"",icon:"menu",title:"对抗技巧"}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),i("m-card",{attrs:{plain:"",icon:"menu",title:"团战思路"}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),i("m-card",{attrs:{plain:"",icon:"menu",title:"英雄关系"}},[i("dl",[i("dt",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(s){return i("dd",{key:s._id,staticClass:"flex-row pt-3"},[i("img",{key:s._id,attrs:{src:s.hero.avatar,height:"50",alt:""}}),i("p",{staticClass:"flex-1 my-0 ml-3"},[t._v(t._s(s.description))])])}))],2)])],1)])]),i("swiper-slide",[i("div")])],1)],1)]):t._e()},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"px-3 bg-white"},[a("div",{staticClass:"nav flex-row py-2 jc-around border-bottom pt-3 pb-2"},[a("div",{staticClass:"nav-item active"},[a("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),a("div",{staticClass:"nav-item"},[a("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],l=(a("96cf"),a("1da1")),n={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model?this.model.skills[this.currentSkillIndex]:null}},created:function(){this.id&&this.fetch()},methods:{fetch:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/heroes/".concat(this.id));case 2:s=t.sent,this.model=s.data;case 4:case"end":return t.stop()}}),t,this)})));function s(){return t.apply(this,arguments)}return s}()}},c=n,r=(a("16cc"),a("2877")),o=Object(r["a"])(c,i,e,!1,null,"376a5618",null);s["default"]=o.exports}}]);