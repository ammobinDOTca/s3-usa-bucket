(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{277:function(e,t,r){e.exports=r.p+"img/TEST_SIDE.370db50.png"},278:function(e,t,r){e.exports=r.p+"img/TEST_TOP.899a3ad.png"},279:function(e,t,r){},281:function(e,t,r){"use strict";r(279)},282:function(e,t,r){"use strict";r(136);var n=r(52),o=r(77),c=r(75),l=r(76),d=r(53),v=r(11),f=(r(40),r(28),r(95),r(42));r(94);function m(e,t){var n=t.LANG,o=(t.itemType,t.subType,"/".concat(n,"/sponsorship"));return"LANG"===e||"index"===e?{img:r(277),href:o}:{img:r(278),href:o}}var h=r(21),y=r.n(h);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},w=function(e){Object(c.a)(r,e);var t=O(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).config=m(e.$route.name,e.$route.params),e}return Object(o.a)(r,[{key:"href",get:function(){return this.config.href}},{key:"img",get:function(){return this.config.img}},{key:"linkToSponsorPage",get:function(){return this.config.href.startsWith("ammobin.us")}},{key:"trackClick",value:function(){if(!window.navigator.doNotTrack){var e="https://ammobin.us/api/track-sponsor-click",data={href:window.location.href,target:this.href,ua:navigator.userAgent};navigator.sendBeacon?navigator.sendBeacon(e,JSON.stringify(data)):y.a.post(e,data)}}}]),r}(f.c);_([Object(f.b)()],w.prototype,"homePage",void 0);var j=w=_([Object(f.a)({})],w),k=(r(281),r(51)),component=Object(k.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.linkToSponsorPage?r("nuxt-link",{staticClass:"center",attrs:{to:e.href}},[r("img",{staticClass:"pure-u-1",attrs:{src:e.img,alt:"sponsored ad",decoding:"async",loading:"lazy",height:"60"}})]):r("a",{staticClass:"center",attrs:{href:e.href,rel:"sponsored",target:"_blank"},on:{click:e.trackClick}},[r("img",{class:{"pure-u-1":!0,sponsor:!e.homePage,homePageSponsor:e.homePage},attrs:{src:e.img,crossorigin:"anonymous",alt:"sponsored ad",decoding:"async",loading:"lazy",height:e.homePage?600:60}})])}),[],!1,null,null,null);t.a=component.exports},289:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));r(94);var n=["ammo","centerfire","rimfire","shotgun"],o=[].concat(n,["reloading","powder","shot","case","primer"])},295:function(e,t,r){"use strict";(function(e){r(136),r(55),r(33),r(44),r(37),r(65);var n=r(32),o=r(283),c=r(52),l=r(77),d=r(75),v=r(76),f=r(53),m=r(11),h=(r(40),r(94),r(41),r(63),r(64),r(191),r(42)),y=r(289),O=r(308);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(v.a)(this,r)}}var k=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},C=function(t){Object(d.a)(v,t);var n=j(v);function v(){var e;return Object(c.a)(this,v),(e=n.apply(this,arguments)).showFilters=!0,e.provinces=[null,"AB","BC","MB","NB","NS","NL","NT","NU","ON","PE","QC","SK","YT"],e.defaultImg=r(192),e.brands=[null].concat(Object(o.a)(O.brands.map((function(e){return e[0]})).sort()),["UNKNOWN"]),e}return Object(l.a)(v,[{key:"isAmmoType",get:function(){return y.a.includes(this.itemType)}},{key:"itemClicked",value:function(link,e){if(!window.navigator.doNotTrack){var t=JSON.stringify({link:link,index:e,href:window.location.href,query:{itemType:this.itemType,subType:this.subType,page:this.page,pageSize:this.pageSize,province:this.province,vendor:this.vendor,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,brand:this.brand},itemType:this.itemType,subType:this.subType,page:this.page,record:w({subType:this.subType,itemType:this.itemType},this.rows[e])});navigator.sendBeacon?navigator.sendBeacon("https://ammobin.us/api/track-click",t):this.$axios.post("https://ammobin.us/api/track-click",t)}}},{key:"sortBy",value:function(e){var t;t=e===this.sortField&&"DES"===this.sortOrder?"ASC":"DES",this.$emit("update:sortOrder",t),this.$emit("update:sortField",e)}},{key:"updateBrand",value:function(e){this.$emit("update:brand",e)}},{key:"updatePage",value:function(t){this.$emit("update:page",t),e((function(){return window.scroll(0,0)}))}},{key:"updatePageSize",value:function(e){this.$emit("update:pageSize",parseInt(e))}},{key:"updateProvince",value:function(e){this.$emit("update:province",e||null)}},{key:"updateVendor",value:function(e){this.$emit("update:vendor",e)}},{key:"updateQuery",value:function(e){this.$emit("update:query",e)}},{key:"toggleFilters",value:function(){this.showFilters=!this.showFilters}}]),v}(h.c);k([Object(h.b)()],C.prototype,"rows",void 0),k([Object(h.b)()],C.prototype,"pages",void 0),k([Object(h.b)()],C.prototype,"itemType",void 0),k([Object(h.b)()],C.prototype,"vendors",void 0),k([Object(h.b)()],C.prototype,"loading",void 0),k([Object(h.b)()],C.prototype,"page",void 0),k([Object(h.b)()],C.prototype,"subType",void 0),k([Object(h.b)()],C.prototype,"pageSize",void 0),k([Object(h.b)()],C.prototype,"province",void 0),k([Object(h.b)()],C.prototype,"vendor",void 0),k([Object(h.b)()],C.prototype,"query",void 0),k([Object(h.b)()],C.prototype,"sortField",void 0),k([Object(h.b)()],C.prototype,"sortOrder",void 0),k([Object(h.b)()],C.prototype,"brand",void 0),C=k([Object(h.a)({mounted:function(){this.showFilters=window.outerWidth>=759}})],C),t.a=C}).call(this,r(138).setImmediate)},299:function(e,t,r){},300:function(e,t,r){},316:function(e,t,r){"use strict";r(299)},317:function(e,t,r){"use strict";r(300)},318:function(e,t,r){"use strict";r.r(t);r(136);var n=r(24),o=r(52),c=r(77),l=r(75),d=r(76),v=r(53),f=r(8),m=r(11),h=(r(54),r(40),r(63),r(64),r(14),r(26),r(29),r(94),r(295).a),y=(r(316),r(51)),O=Object(y.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("div",{staticClass:"pure-form pure-form-stacked"},[r("div",{staticClass:"pure-g"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-3",attrs:{id:"search"}},[r("label",{attrs:{for:"query"}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),r("input",{staticClass:"pure-input-1",attrs:{id:"query",placeholder:"ie: Barnaul, surplus, 00 Buck",disabled:e.loading},domProps:{value:e.query},on:{change:function(t){return e.updateQuery(t.target.value)}}})]),e._v(" "),r("div",{staticClass:"pure-u-1 show-on-mobile"},[r("div",{staticClass:"active pure-button button-xsmall",on:{click:function(t){return e.toggleFilters()}}},[e._v("\n          "+e._s(e.$t(e.showFilters?"table.hideFilters":"table.showFilters"))+"\n          "),r("span",{staticClass:"arrow",class:{DES:!e.showFilters,ASC:e.showFilters}})])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilters,expression:"showFilters"}],staticClass:"pure-u-1 pure-u-md-2-3"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-4"},[r("label",{attrs:{for:"province"}},[e._v(e._s(e.$t("table.province")))]),e._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"province",disabled:e.loading},domProps:{value:e.province},on:{change:function(t){return e.updateProvince(t.target.value)}}},e._l(e.provinces,(function(t){return r("option",{key:t},[e._v(e._s(t))])})),0)]),e._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",{attrs:{for:"vendor"}},[e._v(e._s(e.$t("table.vendor")))]),e._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"vendor",disabled:e.loading},domProps:{value:e.vendor},on:{change:function(t){return e.updateVendor(t.target.value)}}},e._l(e.vendors,(function(t){return r("option",{key:t},[e._v(e._s(t))])})),0)]),e._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3 capitalize"},[r("label",{attrs:{for:"brand"}},[e._v(e._s(e.$t("table.brand")))]),e._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"brand",disabled:e.loading},domProps:{value:e.brand},on:{change:function(t){return e.updateBrand(t.target.value)}}},e._l(e.brands,(function(t){return r("option",{key:t,staticClass:"capitalize"},[e._v("\n              "+e._s(t)+"\n            ")])})),0)])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.pages>0,expression:"pages > 0"}],staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",[e._v(e._s(e.$t("table.page")))]),e._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page<=1||e.loading},on:{click:function(t){return e.updatePage(1)}}},[e._v("\n          |<<\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page<=1||e.loading},on:{click:function(t){return e.updatePage(e.page-1)}}},[e._v("\n          <\n        ")]),e._v("\n        "+e._s(e.page)+" "+e._s(e.$t("table.of"))+" "+e._s(e.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page>=e.pages||e.loading},on:{click:function(t){return e.updatePage(e.page+1)}}},[e._v("\n          >\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page>=e.pages||e.loading},on:{click:function(t){return e.updatePage(e.pages)}}},[e._v("\n          >>|\n        ")])])])]),e._v(" "),r("div",{staticClass:"pure-g row"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-1"}),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"name"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("name")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.name"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"price"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("price")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.price"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"unitCost"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("unitCost")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.unitCost"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"link"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("link")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.link"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!(e.loading||e.rows&&0!==e.rows.length),expression:"!loading && (!rows || rows.length === 0)"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[e._v(e._s(e.$t("table.noResult")))])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[e._v(e._s(e.$t("default.loading"))+"...")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.rows,(function(t,n){return r("div",{key:t.link+n,staticClass:"pure-g row fix-row item"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1 pure-u-1"},[r("img",{directives:[{name:"img-fallback",rawName:"v-img-fallback",value:e.defaultImg,expression:"defaultImg"}],staticClass:"pure-img img-cell",attrs:{src:t.img||e.defaultImg,alt:t.name,loading:"lazy",referrerpolicy:"origin",decoding:"async",importance:"low"}})]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1 capitalize"},[e._v("\n        "+e._s(t.name)+"\n      ")]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("div",[e._v("$"+e._s(t.price.toFixed(2)))])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[t.unitCost?r("div",[e._v("$"+e._s(t.unitCost.toFixed(2)))]):r("div",{attrs:{if:"!row.minUnitCost"}},[e._v("N/A")])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("a",{attrs:{href:t.link,target:"_blank",rel:"nofollow noopener"},on:{click:function(r){return e.itemClicked(t.link,n)}}},[e._v(e._s(e.$t("table.buyFrom"))+" "+e._s(t.vendor))])])])})),0),e._v(" "),r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.pages>0,expression:"pages > 0"}],staticClass:"pure-u-lg-1-2 pure-u-1"},[r("div",[e._v(e._s(e.$t("table.page")))]),e._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===e.page||e.loading},on:{click:function(t){return e.updatePage(1)}}},[e._v("\n          |<<\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===e.page||e.loading},on:{click:function(t){return e.updatePage(e.page-1)}}},[e._v("\n          <\n        ")]),e._v("\n        "+e._s(e.page)+" "+e._s(e.$t("table.of"))+" "+e._s(e.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page===e.pages||e.loading},on:{click:function(t){return e.updatePage(e.page+1)}}},[e._v("\n          >\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page===e.pages||e.loading},on:{click:function(t){return e.updatePage(e.pages)}}},[e._v("\n          >>|\n        ")])])])])])}),[],!1,null,null,null).exports,_=r(282),w=r(78),j=r(289),k=(r(280),r(42));function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(v.a)(e);if(t){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var T=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c};function F(e,t){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,l,d,v,f,m,h,y,O,_,w,j,k,C,T,F,x,$,P,R;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x=function(s){return s?'"'+s+'"':"null"},n=r.itemType,o=r.subType,c=r.page,l=void 0===c?1:c,d=r.pageSize,v=void 0===d?25:d,f=r.brand,m=void 0===f?null:f,h=r.province,y=void 0===h?null:h,O=r.vendor,_=void 0===O?null:O,w=r.query,j=void 0===w?null:w,k=r.sortField,C=void 0===k?"unitCost":k,T=r.sortOrder,F=void 0===T?"ASC":T,e.next=4,t.get("https://ammobin.us/api/graphql",{params:{query:"{\nitemsFlatListings(\n page: ".concat(l,"\n itemType: ").concat(n,'\n subType: "').concat(o,'"\n brand:').concat(x(m),"\n province:").concat(y,"\n vendor:").concat(x(_),"\n query:").concat(x(j),"\n sortField:").concat(C,"\n sortOrder:").concat(F,"\n) {\n pages\n items {\n  name\n  brand\n  img\n  price\n  link\n  unitCost\n  vendor\n  }\n }\n}"),opName:"getItemsFlatListings",variables:{itemType:n,subType:o,page:l,pageSize:v,brand:m,province:y,vendor:_,query:j,sortField:C,sortOrder:F}}});case 4:return $=e.sent,P=$.data.data,R=P.itemsFlatListings,P.errors,e.abrupt("return",R);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e){Object(l.a)(n,e);var t,r=C(n);function n(){var e;return Object(o.a)(this,n),(e=r.apply(this,arguments)).error=null,e.itemsFlatListings=null,e.loading=!1,e.page=1,e.province=null,e.pageSize=25,e.vendor=null,e.query=null,e.sortOrder="ASC",e.sortField="unitCost",e.brand=null,e}return Object(c.a)(n,[{key:"area",get:function(){return this.province||Object(w.a)()}},{key:"isAmmoType",get:function(){return j.a.includes(this.itemType)}},{key:"subType",get:function(){return this.$route.params.subType}},{key:"itemType",get:function(){return this.$route.params.itemType}},{key:"onQueryChange",value:(t=Object(f.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.$nuxt.$loading.start(),e.prev=1,this.loading=!0,e.next=5,F(this.$axios,this);case 5:this.itemsFlatListings=e.sent,this.page>this.itemsFlatListings.pages&&(this.page=this.itemsFlatListings.pages||1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),this.error=e.t0;case 12:this.loading=!1,this.$nuxt.$loading.finish();case 14:case"end":return e.stop()}}),e,this,[[1,9]])}))),function(e){return t.apply(this,arguments)})}]),n}(k.c);T([Object(k.d)("page"),Object(k.d)("province"),Object(k.d)("pageSize"),Object(k.d)("vendor"),Object(k.d)("query"),Object(k.d)("sortOrder"),Object(k.d)("sortField"),Object(k.d)("brand")],$.prototype,"onQueryChange",null);var P=$=T([Object(k.a)({validate:function(e){var t=e.params;return j.b.includes(t.itemType)},asyncData:function(e){return Object(f.a)(regeneratorRuntime.mark((function t(){var r,o,c,l,d,v,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,o=e.route.params,c=o.itemType,l=o.subType,t.next=3,Promise.all([F(r,{itemType:c,subType:l}),r.get("https://ammobin.us/api/graphql",{params:{query:"{vendors{name}}",opName:"vendors"}}).then((function(e){return e.data.data.vendors}))]);case 3:return d=t.sent,v=Object(n.a)(d,2),f=v[0],m=v[1],t.abrupt("return",{vendors:m,itemsFlatListings:f});case 8:case"end":return t.stop()}}),t)})))()},components:{FlatList:O,Sponsorship:_.a},head:function(){var e=this,link=[],t="".concat("https://ammobin.us","/").concat(this.$i18n.locale,"/").concat(e.itemType,"/").concat(e.subType);e.page>1&&link.push({rel:"prev",href:Object(w.c)(t,e.page-1,e.subType)}),e.itemsFlatListings&&e.itemsFlatListings.pages>e.page&&link.push({rel:"next",href:Object(w.c)(t,e.page+1,e.subType)});var area=e.area,r=e.subType;return{title:this.$t("subType.title",{area:area,subType:r})+" | ".concat("ammobin.us"),meta:[{hid:"description",name:"description",content:this.$t("subType.description",{area:area,subType:r})}],link:link}}})],$),R=(r(317),Object(y.a)(P,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.isAmmoType?e._e():r("div",[e._v(e._s(e.$t("default.betaWarning")))]),e._v(" "),r("h1",[e._v(e._s(e.$t("subType.title",{area:e.area,subType:e.subType})))]),e._v(" "),r("div",{staticClass:"pure-g row"},[r("sponsorship")],1),e._v(" "),r("flat-list",{directives:[{name:"show",rawName:"v-show",value:!e.error,expression:"!error"}],attrs:{rows:e.itemsFlatListings?e.itemsFlatListings.items:[],pages:e.itemsFlatListings?e.itemsFlatListings.pages:0,"item-type":e.itemType,subType:e.subType,vendors:[null].concat((e.vendors||[]).map((function(i){return i.name}))),loading:!e.itemsFlatListings||e.loading,page:e.page,pageSize:e.pageSize,province:e.province,vendor:e.vendor,query:e.query,sortField:e.sortField,sortOrder:e.sortOrder,brand:e.brand},on:{"update:page":function(t){e.page=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:province":function(t){e.province=t},"update:vendor":function(t){e.vendor=t},"update:query":function(t){e.query=t},"update:sortField":function(t){e.sortField=t},"update:sort-field":function(t){e.sortField=t},"update:sortOrder":function(t){e.sortOrder=t},"update:sort-order":function(t){e.sortOrder=t},"update:brand":function(t){e.brand=t}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v("ERROR "+e._s(e.error))])],1)}),[],!1,null,"1871f703",null));t.default=R.exports}}]);