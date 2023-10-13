(function(){"use strict";var e={1439:function(e,t,n){var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},i=[],a={name:"App"},u=a,c=n(1001),s=n(3453),l=n.n(s),d=n(7524),f=n(1009),h=(0,c.Z)(u,o,i,!1,null,null,null),p=h.exports;l()(h,{VApp:d.Z,VMain:f.Z});var m=n(8345),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex flex-wrap justify-space-around"},[e.$vuetify.theme.dark?n("div",{staticClass:"hide",staticStyle:{"box-shadow":"inset 0 0 0 100vh rgba(0, 0, 0, 0.6)"}}):n("div",{staticClass:"hide"}),e._l(e.routes.filter((function(e){return!1!==e.isShowIcon})),(function(t,r){return[0!==r&&"*"!==t.path&&"/404"!==t.path?n("v-card",{key:r,staticClass:"pa-2 mt-8",attrs:{height:"65px",width:"calc(30%)"}},[n("router-link",{attrs:{to:t.path}},[n("button",{staticStyle:{width:"100%",height:"100%"}},[n("v-icon",[e._v(" "+e._s(t.icon||"😅")+" ")]),n("br"),e._v(" "+e._s(t.text||t.name)+" ")],1)])],1):e._e()]}))],2),n("v-bottom-navigation",{staticStyle:{position:"fixed",left:"0",bottom:"0"},attrs:{absolute:"",horizontal:""}},[n("v-btn",{attrs:{color:"deep-purple accent-4",text:"",href:"https://github.com/miloweimo"}},[n("span",[e._v("Github")]),n("v-icon",[e._v("mdi-github")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:"",href:"https://miloweimo.github.io"}},[n("span",[e._v("Home")]),n("v-icon",[e._v("mdi-home")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""},on:{click:function(t){return e.toggleMode()}}},[n("span",[e._v(e._s(e.$vuetify.theme.dark?"黑暗主题":"浅色主题"))]),n("v-icon",[e._v("mdi-theme-light-dark")])],1)],1)],1)},b=[],g={name:"HomeView",components:{},data:()=>({routes:Z,selectedItem:1}),computed:{isDark(){return this.$vuetify.theme.dark}},watch:{isDark(e){window.localStorage.isDark=e}},mounted(){this.initDarkMode()},methods:{csl(...e){console.log(...e)},toggleMode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},initDarkMode(){let e=window.matchMedia("(prefers-color-scheme: dark)");e.matches?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1;let t=e=>{let t=e.matches;this.$vuetify.theme.dark=!!t};"function"===typeof e.addEventListener?e.addEventListener("change",t):"function"===typeof e.addListener&&e.addListener(t)}}},y=g,w=n(6506),k=n(3432),_=n(1981),C=n(6428),x=(0,c.Z)(y,v,b,!1,null,null,null),E=x.exports;l()(x,{VBottomNavigation:w.Z,VBtn:k.Z,VCard:_.Z,VIcon:C.Z}),r.Z.use(m.Z);const Z=[{path:"/",name:"home",component:E},{path:"/about",name:"about",isShowIcon:!1,component:()=>n.e(443).then(n.bind(n,9030))},{path:"/policelight",name:"policelight",text:"假警灯",icon:"🚨",component:()=>n.e(815).then(n.bind(n,3156))},{path:"/sese",name:"语气转换",icon:"🥵",component:()=>n.e(368).then(n.bind(n,4610))},{path:"/draw",name:"小白板",icon:"🎨",component:()=>n.e(0).then(n.bind(n,6176))},{path:"/mirror",name:"镜子",icon:"🪞",component:()=>n.e(816).then(n.bind(n,6458))},{path:"/404",name:"404",component:()=>n.e(596).then(n.bind(n,1917))},{path:"*",name:"sb404",redirect:"/404"}],O=new m.Z({routes:Z});O.beforeEach(((e,t,n)=>{window.document.title=e.name?e.name:"Home",n()}));var S=n(1910);r.Z.use(S.Z);var j=new S.Z({});r.Z.config.productionTip=!1,new r.Z({router:O,vuetify:j,render:e=>e(p)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{0:"draw",368:"sese",443:"about",596:"404",815:"policelight",816:"Mirror"}[e]+"."+{0:"f03fe7ca",368:"662ff3fc",443:"99a408ee",596:"60d6b2d8",815:"de25d1c1",816:"fafb411c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{368:"sese",815:"policelight",816:"Mirror"}[e]+"."+{368:"67d06c52",815:"16b5d4c2",816:"64f4db80"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="hahawode:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={368:1,815:1,816:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkhahawode"]=self["webpackChunkhahawode"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1439)}));r=n.O(r)})();
//# sourceMappingURL=app.03d5e1bf.js.map