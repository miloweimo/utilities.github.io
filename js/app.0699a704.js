(function(){"use strict";var e={1824:function(e,t,n){var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},i=[],a={name:"App"},l=a,u=n(1001),c=n(3453),s=n.n(c),d=n(7524),f=n(1009),h=(0,u.Z)(l,o,i,!1,null,null,null),v=h.exports;s()(h,{VApp:d.Z,VMain:f.Z});var p=n(8345),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex flex-wrap justify-space-around"},[this.$vuetify.theme.dark?n("div",{staticClass:"hide",staticStyle:{"box-shadow":"inset 0 0 0 100vh rgba(0, 0, 0, 0.6)"}}):n("div",{staticClass:"hide"}),e._l(e.routes,(function(t,r){return[0!==r&&"*"!==t.path&&"/404"!==t.path?n("v-card",{key:r,staticClass:"pa-2 mt-8",attrs:{height:"65px",width:"calc(30%)"}},[n("router-link",{attrs:{to:t.path}},[n("button",{staticStyle:{width:"100%",height:"100%"}},[n("v-icon",[e._v(" "+e._s(t.icon||"😅")+" ")]),n("br"),e._v(" "+e._s(t.text||t.name)+" ")],1)])],1):e._e()]}))],2),n("v-bottom-navigation",{staticStyle:{position:"fixed",left:"0",bottom:"0"},attrs:{absolute:"",horizontal:""}},[n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[e._v("Recents")]),n("v-icon",[e._v("mdi-history")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[e._v("Favorites")]),n("v-icon",[e._v("mdi-heart")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""},on:{click:function(t){return e.toggleMode()}}},[n("span",[e._v(e._s(this.$vuetify.theme.dark?"黑暗主题":"浅色主题"))]),n("v-icon",[e._v("mdi-theme-light-dark")])],1)],1)],1)},g=[],b={name:"HomeView",components:{},data:()=>({routes:J,selectedItem:1}),methods:{csl(...e){console.log(...e)},toggleMode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},initDarkMode(){let e=window.matchMedia("(prefers-color-scheme: dark)");e.matches?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1;let t=e=>{let t=e.matches;this.$vuetify.theme.dark=!!t};"function"===typeof e.addEventListener?e.addEventListener("change",t):"function"===typeof e.addListener&&e.addListener(t)}},mounted(){this.initDarkMode()}},y=b,_=n(6506),k=n(3432),w=n(1981),x=n(6428),Z=(0,u.Z)(y,m,g,!1,null,null,null),E=Z.exports;s()(Z,{VBottomNavigation:_.Z,VBtn:k.Z,VCard:w.Z,VIcon:x.Z});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("H1",[e._v("Hello!!! @@@")])},C=[],O={},j=(0,u.Z)(O,$,C,!1,null,null,null),S=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scrollbar-hidden"},[n("div",{staticStyle:{height:"50vh"},style:e.flag?e.styleBlue:e.styleRed}),n("div",{staticStyle:{height:"50vh"},style:e.flag?e.styleRed:e.styleBlue})])},T=[],D={name:"PoliceLight",data(){return{flag:!0,style:"background-color: green;",styleBlue:"background-color: blue;",styleRed:"background-color: red;",timer:null}},mounted(){this.timer=setInterval((()=>{this.flag=!this.flag}),200)},beforeDestroy(){clearInterval(this.timer)}},L=D,P=(0,u.Z)(L,M,T,!1,null,null,null),V=P.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("ScanQRCode! "),n("div",[n("input",{attrs:{type:"file",name:"file",accept:"image/*",capture:""}}),n("button",[e._v("upload image")])])])}],N={name:"ScanQRCode"},R=N,H=(0,u.Z)(R,A,B,!1,null,null,null),q=H.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"min-height":"200px",height:"100vh","background-color":"aqua"}},[e._v("HelloWDNMD !!!")])},F=[],Q={name:"HelloWDNMD"},W=Q,z=(0,u.Z)(W,I,F,!1,null,null,null),G=z.exports;r.Z.use(p.Z);const J=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,9030))},{path:"/policelight",name:"policelight",text:"假警灯",icon:"🚨",component:V},{path:"/scanqrcode",name:"scanqrcode",text:"扫描二维码",icon:"mdi-data-matrix-scan",component:q},{path:"/wdnmd",name:"hellowdnmd",component:G},{path:"/hello",name:"hello",component:S},{path:"/404",name:"404",component:()=>n.e(596).then(n.bind(n,1917))},{path:"*",name:"sb404",redirect:"/404"}],K=new p.Z({routes:J});var U=n(1910);r.Z.use(U.Z);var X=new U.Z({});r.Z.config.productionTip=!1,new r.Z({router:K,vuetify:X,render:e=>e(v)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var l=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{443:"about",596:"404"}[e]+"."+{443:"3caa0f97",596:"3a48ec48"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="wdnmd:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var l,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),l=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],l=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var s=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkwdnmd"]=self["webpackChunkwdnmd"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1824)}));r=n.O(r)})();
//# sourceMappingURL=app.0699a704.js.map