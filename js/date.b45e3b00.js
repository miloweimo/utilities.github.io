(self["webpackChunkhahawode"]=self["webpackChunkhahawode"]||[]).push([[981],{7484:function(t){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",u="week",d="month",f="quarter",h="year",c="date",v="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},_={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,d),s=r-i<0,a=e.clone().add(n+(s?-1:1),d);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:d,y:h,w:u,d:o,D:c,h:a,m:s,s:i,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",$={};$[M]=Y;var D=function(t){return t instanceof b},p=function t(e,r,n){var i;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();$[s]&&(i=s),r&&($[s]=r,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;$[o]=e,i=o}return!n&&i&&(M=i),i||!n&&M},k=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new b(r)},w=_;w.l=p,w.i=D,w.w=function(t,e){return k(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function Y(t){this.$L=p(t.locale,null,!0),this.parse(t)}var y=Y.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===v)},y.isSame=function(t,e){var r=k(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return k(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<k(t)},y.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!w.u(e)||e,f=w.p(t),v=function(t,e){var i=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(o)},l=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,Y=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case h:return n?v(1,0):v(31,11);case d:return n?v(1,Y):v(0,Y+1);case u:var M=this.$locale().weekStart||0,$=(m<M?m+7:m)-M;return v(n?y-$:y+(6-$),Y);case o:case c:return l(_+"Hours",0);case a:return l(_+"Minutes",1);case s:return l(_+"Seconds",2);case i:return l(_+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,u=w.p(t),f="set"+(this.$u?"UTC":""),v=(r={},r[o]=f+"Date",r[c]=f+"Date",r[d]=f+"Month",r[h]=f+"FullYear",r[a]=f+"Hours",r[s]=f+"Minutes",r[i]=f+"Seconds",r[n]=f+"Milliseconds",r)[u],l=u===o?this.$D+(e-this.$W):e;if(u===d||u===h){var m=this.clone().set(c,1);m.$d[v](l),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else v&&this.$d[v](l);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(n,f){var c,v=this;n=Number(n);var l=w.p(f),m=function(t){var e=k(v);return w.w(e.date(e.date()+Math.round(t*n)),v)};if(l===d)return this.set(d,this.$M+n);if(l===h)return this.set(h,this.$y+n);if(l===o)return m(1);if(l===u)return m(7);var Y=(c={},c[s]=e,c[a]=r,c[i]=t,c)[l]||1,y=this.$d.getTime()+n*Y;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||v;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,d=r.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},h=function(t){return w.s(s%12||12,t,"0")},c=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:f(r.monthsShort,o,d,3),MMMM:f(d,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:f(r.weekdaysMin,this.$W,u,2),ddd:f(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:w.s(s,2,"0"),h:h(1),hh:h(2),a:c(s,a,!0),A:c(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(t,e){return e||l[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,c,v){var l,m=w.p(c),Y=k(n),y=(Y.utcOffset()-this.utcOffset())*e,_=this-Y,M=w.m(this,Y);return M=(l={},l[h]=M/12,l[d]=M,l[f]=M/3,l[u]=(_-y)/6048e5,l[o]=(_-y)/864e5,l[a]=_/r,l[s]=_/e,l[i]=_/t,l)[m]||_,v?M:w.a(M)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=p(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},Y}(),g=b.prototype;return k.prototype=g,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",d],["$y",h],["$D",c]].forEach((function(t){g[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),k.extend=function(t,e){return t.$i||(t(e,b,k),t.$i=!0),k},k.locale=p,k.isDayjs=D,k.unix=function(t){return k(1e3*t)},k.en=$[M],k.Ls=$,k.p={},k}))},9542:function(t){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t="day";return function(e,r,n){var i=function(e){return e.add(4-e.isoWeekday(),t)},s=r.prototype;s.isoWeekYear=function(){return i(this).year()},s.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),t);var r,s,a,o,u=i(this),d=(r=this.isoWeekYear(),s=this.$u,a=(s?n.utc:n)().year(r).startOf("year"),o=4-a.isoWeekday(),a.isoWeekday()>4&&(o+=7),a.add(o,t));return u.diff(d,"week")+1},s.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var a=s.startOf;s.startOf=function(t,e){var r=this.$utils(),n=!!r.u(e)||e;return"isoweek"===r.p(t)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):a.bind(this)(t,e)}}}))},5183:function(t){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t="week",e="year";return function(r,n,i){var s=n.prototype;s.week=function(r){if(void 0===r&&(r=null),null!==r)return this.add(7*(r-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var s=i(this).startOf(e).add(1,e).date(n),a=i(this).endOf(t);if(s.isBefore(a))return 1}var o=i(this).startOf(e).date(n).startOf(t).subtract(1,"millisecond"),u=this.diff(o,t,!0);return u<0?i(this).startOf("week").week():Math.ceil(u)},s.weeks=function(t){return void 0===t&&(t=null),this.week(t)}}}))},8706:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",[t._m(0),t._v(" 本地时间:"),r("code",[t._v(t._s(t.isodate))]),t._v("(isodate) "),r("hr"),r("b",[t._v("通过日期获得iso周")]),t._v(" 点击选择日期: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticStyle:{color:"red"},attrs:{type:"datetime-local",step:"1"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v("(date)"),r("br"),t._v(" *ISO周从星期一开始，周日结束"),r("br"),t._v(" *01 周的 ISO 8601 定义是公历年（即一月）的第一个星期四所在的一周"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_week_date"}},[t._v("wiki")]),r("br"),r("code",[t._v("dayjs(date).endOf('year').isoWeek()")]),t._v("("+t._s(typeof t.d().isoWeek())+")"),r("br"),r("code",[t._v("dayjs(date).isoWeek()")]),t._v("("+t._s(typeof t.d().isoWeek())+")"),r("br"),t._v(" 这年共"),r("code",[t._v(t._s(t.d(t.date).endOf("year").isoWeek()))]),t._v("周，当前第"),r("code",[t._v(t._s(t.d(t.date).isoWeek()))]),t._v("周"),r("br"),r("code",[t._v("d(date).isoWeekday(1).format('YYYY年MM月DD日')")]),t._v("("+t._s(typeof t.d(t.date).isoWeekday(1).format("YYYY年MM月DD日"))+")"),r("br"),t._v(" 当前周一日期 "),r("code",[t._v(t._s(t.d(t.date).isoWeekday(1).format("YYYY年MM月DD日")))]),r("br"),r("code",[t._v("d(date).isoWeekday(7).format('YYYYMMMDD')")]),t._v("("+t._s(typeof t.d(t.date).isoWeekday(7).format("YYYYMMMDD"))+")"),r("br"),t._v(" 当前周日日期 "),r("code",[t._v(t._s(t.d(t.date).isoWeekday(7).format("YYYYMMMDD")))]),r("br"),r("code",[t._v("d(date).startOf('month').format('YYYY年MM月DD日')")]),t._v("("+t._s(typeof t.d(t.date).startOf("month").format("YYYY年MM月DD日"))+") "),r("br"),r("code",[t._v("d(date).startOf('month').week()")]),t._v("("+t._s(typeof t.d(t.date).startOf("month").week())+") "),r("br"),t._v(" 这个月第一天是 "),r("code",[t._v(t._s(t.d(t.date).startOf("month").format("YYYY年MM月DD日")))]),t._v("，第"),r("code",[t._v(t._s(t.d(t.date).startOf("month").week()))]),t._v("周。 "),r("br"),r("hr"),r("b",[t._v("通过周数获得日期")]),t._v(" 点击选择周: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticStyle:{color:"red"},attrs:{type:"number"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}}),t._v("(year)年 第"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.weeknumber,expression:"weeknumber"}],staticStyle:{color:"red"},attrs:{type:"number"},domProps:{value:t.weeknumber},on:{input:function(e){e.target.composing||(t.weeknumber=e.target.value)}}}),t._v("(weeknumber)周的"),r("br"),r("code",[t._v("d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber - 1).format('YYYY-MM-DD')")]),t._v("(string)"),r("br"),t._v(" 上周日是"+t._s(t.d(String(t.year)+"-01-28","YYYY-MM-DD").isoWeekday(7).isoWeek(t.weeknumber-1).format("YYYY-MM-DD"))+" 这周一是"+t._s(t.d(String(t.year)+"-01-28","YYYY-MM-DD").isoWeekday(1).isoWeek(t.weeknumber).format("YYYY-MM-DD"))),r("br"),t._v(" 这周六是"+t._s(t.d(String(t.year)+"-01-28","YYYY-MM-DD").isoWeekday(-1).isoWeek(t.weeknumber).format("YYYY-MM-DD"))+" 这周日是"+t._s(t.d(String(t.year)+"-01-28","YYYY-MM-DD").isoWeekday(7).isoWeek(t.weeknumber).format("YYYY-MM-DD"))+" "),r("br"),r("a",{attrs:{href:"https://day.js.org/docs/zh-CN/plugin/iso-week"}},[t._v("isoWeek文档")]),r("hr"),r("b",[t._v("获取一个时间的开始")]),r("br"),r("code",[t._v("d().startOf('year')")]),t._v(t._s(typeof t.d().startOf("year"))),r("br"),r("code",[t._v("d().startOf('year').format('YYYYMMDD')")]),t._v(t._s(typeof t.d().startOf("year").format("YYYYMMDD"))),r("br"),t._v(" 今年一月1日上午00:00"),r("code",[t._v(t._s(t.d().startOf("year").format("YYYYMMDD")))]),r("br"),r("a",{attrs:{href:"https://day.js.org/docs/zh-CN/manipulate/start-of"}},[t._v("Start of Time文档")]),r("hr"),r("b",[t._v("其他参考")]),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_8601"}},[t._v("ISO 8601")])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("📅"),r("i",[t._v("dayjs demo")]),t._v("日期计算")])}],s=r(7484),a=r.n(s);const o=r(9542),u=r(5183);a().extend(o),a().extend(u);var d={name:"App",components:{},data(){return{d:a(),isodate:"",date:"2077-01-01",datenumber:0,weeknumber:40,year:-1}},mounted(){this.datenumber=Number(this.d().format("YYYYMMDD")),this.date=this.d().format().substring(0,19),this.isodate=this.d().format(),this.weeknumber=this.d(this.date).isoWeek(),this.year=Number(this.d().format("YYYY")),setInterval((()=>{this.isodate=this.d().format()}),1e3)}},f=d,h=r(1001),c=(0,h.Z)(f,n,i,!1,null,null,null),v=c.exports}}]);
//# sourceMappingURL=date.b45e3b00.js.map