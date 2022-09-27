(function(){"use strict";var t={7033:function(t,e,n){var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],a={name:"App"},s=a,c=n(1001),l=n(3453),u=n.n(l),d=n(7524),h=n(1009),f=(0,c.Z)(s,i,o,!1,null,null,null),p=f.exports;u()(f,{VApp:d.Z,VMain:h.Z});var v=n(8345),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex flex-wrap justify-space-around"},[this.$vuetify.theme.dark?n("div",{staticClass:"hide",staticStyle:{"box-shadow":"inset 0 0 0 100vh rgba(0, 0, 0, 0.6)"}}):n("div",{staticClass:"hide"}),t._l(t.routes,(function(e,r){return[0!==r&&"*"!==e.path&&"/404"!==e.path?n("v-card",{key:r,staticClass:"pa-2 mt-8",attrs:{height:"65px",width:"calc(30%)"}},[n("router-link",{attrs:{to:e.path}},[n("button",{staticStyle:{width:"100%",height:"100%"}},[n("v-icon",[t._v(" "+t._s(e.icon||"😅")+" ")]),n("br"),t._v(" "+t._s(e.text||e.name)+" ")],1)])],1):t._e()]}))],2),n("v-bottom-navigation",{staticStyle:{position:"fixed",left:"0",bottom:"0"},attrs:{absolute:"",horizontal:""}},[n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[t._v("Recents")]),n("v-icon",[t._v("mdi-history")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[t._v("Favorites")]),n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""},on:{click:function(e){return t.toggleMode()}}},[n("span",[t._v(t._s(this.$vuetify.theme.dark?"黑暗主题":"浅色主题"))]),n("v-icon",[t._v("mdi-theme-light-dark")])],1)],1)],1)},y=[],g={name:"HomeView",components:{},data:()=>({routes:J,selectedItem:1}),methods:{csl(...t){console.log(...t)},toggleMode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},initDarkMode(){let t=window.matchMedia("(prefers-color-scheme: dark)");t.matches?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1;let e=t=>{let e=t.matches;this.$vuetify.theme.dark=!!e};"function"===typeof t.addEventListener?t.addEventListener("change",e):"function"===typeof t.addListener&&t.addListener(e)}},mounted(){this.initDarkMode()}},b=g,k=n(6506),_=n(3432),w=n(1981),x=n(6428),$=(0,c.Z)(b,m,y,!1,null,null,null),C=$.exports;u()($,{VBottomNavigation:k.Z,VBtn:_.Z,VCard:w.Z,VIcon:x.Z});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollbar-hidden"},[n("div",{staticStyle:{height:"50vh"},style:t.flag?t.styleBlue:t.styleRed}),n("div",{staticStyle:{height:"50vh"},style:t.flag?t.styleRed:t.styleBlue})])},S=[],j={name:"PoliceLight",data(){return{flag:!0,style:"background-color: green;",styleBlue:"background-color: blue;",styleRed:"background-color: red;",timer:null}},mounted(){this.timer=setInterval((()=>{this.flag=!this.flag}),200)},beforeDestroy(){clearInterval(this.timer)}},E=j,O=(0,c.Z)(E,Z,S,!1,null,null,null),M=O.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("今天吃什么？")]),r("img",{attrs:{src:n(1014),alt:"今天吃什么逻辑图","mobile-breakpoint":"100%"}})])}],P={},A=P,B=(0,c.Z)(A,T,V,!1,null,null,null),I=B.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"99vh"}},[t.isCopyed?n("div",{staticClass:"infoarea"},[t._v("  copyed!  ")]):t._e(),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("h1",[t._v("色色语气转换👅")]),n("v-spacer"),n("v-btn",{on:{click:t.randomInput}},[t._v("随机🎲")]),n("v-btn",{attrs:{color:"pink"},on:{click:function(e){t.i+=" ",t.i.slice(0,-1)}}},[t._v("瑟瑟❤")])],1),n("div",{staticStyle:{height:"calc(92%)"}},[n("div",{staticClass:"inputarea mb-2"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.i,expression:"i"}],staticClass:"area1",staticStyle:{display:"true"},style:this.$vuetify.theme.dark?"color: rgba(252, 252, 252, 0.999);":"",attrs:{placeholder:"用〇〇在这里输入💗",type:"text",autofocus:""},domProps:{value:t.i},on:{input:function(e){e.target.composing||(t.i=e.target.value)}}})]),n("div",{staticClass:"inputarea"},[n("div",{ref:"myinput",staticClass:"area2",style:this.$vuetify.theme.dark?"color: rgba(252, 252, 252, 0.888);":"",on:{click:t.copy}},[t._v(t._s(t.o?t.o:"这里...这里要...要出来了!"))])])])])},N=[],R=(n(6699),n(9669)),D=n.n(R);const F=async()=>{try{const t=await D().get("https://v1.hitokoto.cn/");return 200===t.status?t.data:{error:`不是200错了 fuck! ${t}`}}catch(t){return{error:`报错了 fuck! ${data}`}}};var q={get:F},z={data(){return{i:"",o:"",isCopyed:!1}},methods:{copy(){this.$refs.myinput.focus(),document.execCommand("copy"),navigator.clipboard.writeText(this.o),this.isCopyed=!0,setTimeout((()=>{this.isCopyed=!1}),2500)},sese(t,e=.5){const n=[",",".",";","，","。","；"],r=new Intl.Segmenter("cn",{granularity:"word"}),i=r.segment(t),o=Array.from(i).map((t=>t.segment));return o.map((t=>Math.random()>e?t:n.includes(t)?"……":"!"===t||"！"===t?"❤":Math.random()>.5?t[0]+"……"+t:Math.random()<.5?"〇".repeat(t.length):`……${t}`)).join("")},async randomInput(){this.i="";await q.get().then((t=>{const{hitokoto:e,from:n,from_who:r,creator:i}=t;this.i=`${e} -- ${n||""} ${r||""}${i?"by":""}${i||""}`}))}},watch:{i:{handler(){this.o=this.sese(this.i)},immediate:!0}}},H=z,W=n(3631),X=(0,c.Z)(H,L,N,!1,null,"1dd39af0",null),G=X.exports;u()(X,{VBtn:_.Z,VSpacer:W.Z}),r.Z.use(v.Z);const J=[{path:"/",name:"home",component:C},{path:"/policelight",name:"policelight",text:"假警灯",icon:"🚨",component:M},{path:"/eatwhat",name:"今天吃什么？",icon:"mdi-room-service",component:I},{path:"/sese",name:"色色语气转换",icon:"🥵",component:G},{path:"/404",name:"404",component:()=>n.e(596).then(n.bind(n,1917))},{path:"*",name:"sb404",redirect:"/404"}],K=new v.Z({routes:J});var Q=n(1910);r.Z.use(Q.Z);var U=new Q.Z({});r.Z.config.productionTip=!1,new r.Z({router:K,vuetify:U,render:t=>t(p)}).$mount("#app")},1014:function(t,e,n){t.exports=n.p+"img/WX20220818-234021.00195e60.png"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/404.60d6b2d8.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="hahawode:";n.l=function(r,i,o,a){if(t[r])t[r].push(i);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[i];var h=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(r);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkhahawode"]=self["webpackChunkhahawode"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7033)}));r=n.O(r)})();
//# sourceMappingURL=app.32e35b44.js.map