(function(){"use strict";var e={4190:function(e,t,n){var o=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},i=[],a={name:"App"},c=a,l=n(1001),u=n(3453),s=n.n(u),d=n(7524),f=n(1009),p=(0,l.Z)(c,r,i,!1,null,null,null),m=p.exports;s()(p,{VApp:d.Z,VMain:f.Z});var h=n(8345),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex flex-wrap justify-space-around"},[this.$vuetify.theme.dark?n("div",{staticClass:"hide",staticStyle:{"box-shadow":"inset 0 0 0 100vh rgba(0, 0, 0, 0.6)"}}):n("div",{staticClass:"hide"}),e._l(e.routes,(function(t,o){return[0!==o&&"*"!==t.path&&"/404"!==t.path?n("v-card",{key:o,staticClass:"pa-2 mt-8",attrs:{height:"65px",width:"calc(30%)"}},[n("router-link",{attrs:{to:t.path}},[n("button",{staticStyle:{width:"100%",height:"100%"}},[n("v-icon",[e._v(" "+e._s(t.icon||"😅")+" ")]),n("br"),e._v(" "+e._s(t.text||t.name)+" ")],1)])],1):e._e()]}))],2),n("v-bottom-navigation",{staticStyle:{position:"fixed",left:"0",bottom:"0"},attrs:{absolute:"",horizontal:""}},[n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[e._v("Recents")]),n("v-icon",[e._v("mdi-history")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[e._v("Favorites")]),n("v-icon",[e._v("mdi-heart")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""},on:{click:function(t){return e.toggleMode()}}},[n("span",[e._v(e._s(this.$vuetify.theme.dark?"黑暗主题":"浅色主题"))]),n("v-icon",[e._v("mdi-theme-light-dark")])],1)],1)],1)},g=[],b={name:"HomeView",components:{},data:()=>({routes:te,selectedItem:1}),methods:{csl(...e){console.log(...e)},toggleMode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},initDarkMode(){let e=window.matchMedia("(prefers-color-scheme: dark)");e.matches?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1;let t=e=>{let t=e.matches;this.$vuetify.theme.dark=!!t};"function"===typeof e.addEventListener?e.addEventListener("change",t):"function"===typeof e.addListener&&e.addListener(t)}},mounted(){this.initDarkMode()}},y=b,_=n(6506),k=n(3432),w=n(1981),x=n(6428),Z=(0,l.Z)(y,v,g,!1,null,null,null),E=Z.exports;s()(Z,{VBottomNavigation:_.Z,VBtn:k.Z,VCard:w.Z,VIcon:x.Z});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("H1",[e._v("Hello!!! @@@")])},C=[],O={},j=(0,l.Z)(O,$,C,!1,null,null,null),S=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scrollbar-hidden"},[n("div",{staticStyle:{height:"50vh"},style:e.flag?e.styleBlue:e.styleRed}),n("div",{staticStyle:{height:"50vh"},style:e.flag?e.styleRed:e.styleBlue})])},T=[],D={name:"PoliceLight",data(){return{flag:!0,style:"background-color: green;",styleBlue:"background-color: blue;",styleRed:"background-color: red;",timer:null}},mounted(){this.timer=setInterval((()=>{this.flag=!this.flag}),200)},beforeDestroy(){clearInterval(this.timer)}},L=D,P=(0,l.Z)(L,M,T,!1,null,null,null),V=P.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("ScanQRCode! "),n("div",[n("input",{attrs:{type:"file",name:"file",accept:"image/*",capture:""}}),n("button",[e._v("upload image")])])])}],N={name:"ScanQRCode"},R=N,H=(0,l.Z)(R,A,B,!1,null,null,null),q=H.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"min-height":"200px",height:"100vh","background-color":"aqua"}},[e._v("HelloWDNMD !!!")])},F=[],W={name:"HelloWDNMD"},Q=W,z=(0,l.Z)(Q,I,F,!1,null,null,null),X=z.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("今天吃什么？")]),o("img",{attrs:{src:n(1014),alt:"今天吃什么逻辑图","mobile-breakpoint":"100%"}})])}],K={},U=K,Y=(0,l.Z)(U,G,J,!1,null,null,null),ee=Y.exports;o.Z.use(h.Z);const te=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,9030))},{path:"/policelight",name:"policelight",text:"假警灯",icon:"🚨",component:V},{path:"/scanqrcode",name:"scanqrcode",text:"扫描二维码",icon:"mdi-data-matrix-scan",component:q},{path:"/wdnmd",name:"hellowdnmd",component:X},{path:"/hello",name:"hello",component:S},{path:"/eatwhat",name:"今天吃什么？",icon:"mdi-room-service",component:ee},{path:"/divine",name:"占卜",icon:"☯️🔮",component:S},{path:"/divine",name:"算命",icon:"🪙",component:S},{path:"/divine",name:"sese 语气转换",icon:"☯️🔮",component:S},{path:"/divine",name:"占字体特效转换",icon:"☯️🔮",component:S},{path:"/divine",name:"文档排版转换",icon:"☯️🔮",component:S},{path:"/divine",name:"音效",icon:"☯️🔮",component:S},{path:"/divine",name:"相机",icon:"☯️🔮",component:S},{path:"/404",name:"404",component:()=>n.e(596).then(n.bind(n,1917))},{path:"*",name:"sb404",redirect:"/404"}],ne=new h.Z({routes:te});var oe=n(1910);o.Z.use(oe.Z);var re=new oe.Z({});o.Z.config.productionTip=!1,new o.Z({router:ne,vuetify:re,render:e=>e(m)}).$mount("#app")},1014:function(e,t,n){e.exports=n.p+"img/WX20220818-234021.00195e60.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var c=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{443:"about",596:"404"}[e]+"."+{443:"3caa0f97",596:"3a48ec48"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="wdnmd:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),c=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var s=l(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkwdnmd"]=self["webpackChunkwdnmd"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4190)}));o=n.O(o)})();
//# sourceMappingURL=app.97cfc75f.js.map