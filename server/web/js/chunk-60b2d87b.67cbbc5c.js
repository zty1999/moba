(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60b2d87b"],{"0929":function(t,e,n){t.exports=n.p+"img/home-swiper3.756f51bb.jpeg"},"352e":function(t,e,n){"use strict";var i=n("68d1"),s=n.n(i);s.a},4413:function(t,e,n){},"4fd2":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",r="week",a="month",o="quarter",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},l={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,a),s=e-i<0,r=t.clone().add(n+(s?-1:1),a);return Number(-(n+(e-i)/(s?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:u,w:r,d:s,h:i,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",m={};m[p]=d;var $=function(t){return t instanceof y},w=function(t,e,n){var i;if(!t)return p;if("string"==typeof t)m[t]&&(i=t),e&&(m[t]=e,i=t);else{var s=t.name;m[s]=t,i=s}return n||(p=i),i},g=function(t,e,n){if($(t))return t.clone();var i=e?"string"==typeof e?{format:e,pl:n}:e:{};return i.date=t,new y(i)},v=l;v.l=w,v.i=$,v.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function h(t){this.$L=this.$L||w(t.locale,null,!0),this.parse(t)}var l=h.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(c);if(i)return n?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return g(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<g(t)},l.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},l.year=function(t){return this.$g(t,"$y",u)},l.month=function(t){return this.$g(t,"$M",a)},l.day=function(t){return this.$g(t,"$W",s)},l.date=function(t){return this.$g(t,"$D","date")},l.hour=function(t){return this.$g(t,"$H",i)},l.minute=function(t){return this.$g(t,"$m",n)},l.second=function(t){return this.$g(t,"$s",e)},l.millisecond=function(e){return this.$g(e,"$ms",t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,o){var c=this,f=!!v.u(o)||o,h=v.p(t),l=function(t,e){var n=v.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(s)},d=function(t,e){return v.w(c.toDate()[t].apply(c.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,m=this.$M,$=this.$D,w="set"+(this.$u?"UTC":"");switch(h){case u:return f?l(1,0):l(31,11);case a:return f?l(1,m):l(0,m+1);case r:var g=this.$locale().weekStart||0,y=(p<g?p+7:p)-g;return l(f?$-y:$+(6-y),m);case s:case"date":return d(w+"Hours",0);case i:return d(w+"Minutes",1);case n:return d(w+"Seconds",2);case e:return d(w+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(r,o){var c,f=v.p(r),h="set"+(this.$u?"UTC":""),l=(c={},c[s]=h+"Date",c.date=h+"Date",c[a]=h+"Month",c[u]=h+"FullYear",c[i]=h+"Hours",c[n]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[f],d=f===s?this.$D+(o-this.$W):o;if(f===a||f===u){var p=this.clone().set("date",1);p.$d[l](d),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else l&&this.$d[l](d);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[v.p(t)]()},l.add=function(t,o){var c,f=this;t=Number(t);var h=v.p(o),l=function(e){var n=g(f);return v.w(n.date(n.date()+Math.round(e*t)),f)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===s)return l(1);if(h===r)return l(7);var d=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,p=this.$d.getTime()+t*d;return v.w(p,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=v.z(this),s=this.$locale(),r=this.$H,a=this.$m,o=this.$M,u=s.weekdays,c=s.months,h=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].substr(0,r)},l=function(t){return v.s(r%12||12,t,"0")},d=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:h(s.monthsShort,o,c,3),MMMM:c[o]||c(this,n),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(s.weekdaysMin,this.$W,u,2),ddd:h(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:v.s(r,2,"0"),h:l(1),hh:l(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:i};return n.replace(f,(function(t,e){return e||p[t]||i.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,f){var h,l=v.p(c),d=g(t),p=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,$=v.m(this,d);return $=(h={},h[u]=$/12,h[a]=$,h[o]=$/3,h[r]=(m-p)/6048e5,h[s]=(m-p)/864e5,h[i]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[l]||m,f?$:v.a($)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return m[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=w(t,e,!0),n},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h}();return g.prototype=y.prototype,g.extend=function(t,e){return t(e,y,g),g},g.locale=w,g.isDayjs=$,g.unix=function(t){return g(1e3*t)},g.en=m[p],g.Ls=m,g}))},"68d1":function(t,e,n){},7062:function(t,e,n){t.exports=n.p+"img/home-swiper2.cd7e56a1.jpeg"},"752b":function(t,e,n){t.exports=n.p+"img/home-swiper1.83af633e.jpeg"},b3d7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("home-swiper"),n("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-dark-1"},[n("div",{staticClass:"d-flex flex-wrap"},t._l(10,(function(e){return n("div",{key:e,staticClass:"nav-items mb-3"},[n("i",{staticClass:"sprite sprite-news mt-2"}),n("div",{staticClass:"pt-1 fs-sm"},[t._v("爆料站")])])})),0),t._m(0)]),n("m-list-card",{attrs:{icon:"icon-cc-menu-circle",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var i=e.category;return t._l(i.newsList,(function(e,i){return n("router-link",{key:i,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[n("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),n("span",{staticClass:"px-2"},[t._v("|")]),n("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),n("span",{staticClass:"text-grey-1 fs=sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),n("m-list-card",{attrs:{icon:"icon-card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var i=e.category;return[n("div",{staticClass:"hero-items d-flex flex-wrap"},t._l(i.heroList,(function(e,i){return n("router-link",{key:i,staticClass:"p-2 text-center hero-item",attrs:{tag:"div",to:"/heroes/"+e._id}},[n("img",{staticClass:"w-100",attrs:{src:e.avatar}}),n("div",{},[t._v(t._s(e.name))])])})),1)]}}])}),n("m-list-card",{attrs:{icon:"icon-card-hero",title:"精彩视频",categories:t.heroCats}})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light py-2 fs-sm"},[n("i",{staticClass:"sprite sprite-arrow mx-1"}),n("span",[t._v("收起")])])}],r=(n("96cf"),n("89ba")),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper"},[i("swiper",{ref:"mySwiper",staticClass:"swiper-container",attrs:{options:t.swiperOption}},[i("swiper-slide",[i("img",{staticClass:"w-100",attrs:{src:n("752b"),alt:""}})]),i("swiper-slide",[i("img",{staticClass:"w-100",attrs:{src:n("7062"),alt:""}})]),i("swiper-slide",[i("img",{staticClass:"w-100",attrs:{src:n("0929"),alt:""}})]),i("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},o=[],u=n("7212"),c={name:"carrousel",components:{swiper:u["swiper"],swiperSlide:u["swiperSlide"]},data:function(){return{swiperOption:{notNextTick:!0,loop:!0,autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:800,direction:"horizontal",swiperSlides:[1,2,3],pagination:{el:".pagination-home",clickable:!0}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){window.console.log("this is current swiper instance object",this.swiper),this.swiper.slideTo(3,1e3,!0)}},f=c,h=(n("bf33"),n("2877")),l=Object(h["a"])(f,a,o,!1,null,null,null),d=l.exports,p=n("4fd2"),m=n.n(p),$={components:{HomeSwiper:d},filters:{date:function(t){return m()(t).format("MM/DD")}},data:function(){return{newsCats:[],heroCats:[]}},computed:{},created:function(){this.fetchNewsCats(),this.fetchHeroCats()},mounted:function(){},methods:{fetchNewsCats:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request.get("news/list");case 2:e=t.sent,this.newsCats=e.data,window.console.log(e.data);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchHeroCats:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request.get("heroes/list");case 2:e=t.sent,this.heroCats=e.data,window.console.log(e.data);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},w=$,g=(n("352e"),Object(h["a"])(w,i,s,!1,null,null,null));e["default"]=g.exports},bf33:function(t,e,n){"use strict";var i=n("4413"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-60b2d87b.67cbbc5c.js.map