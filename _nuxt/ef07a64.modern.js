(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{229:function(e,t,r){e.exports=r.p+"img/TEST_SIDE.370db50.png"},230:function(e,t,r){e.exports=r.p+"img/TEST_TOP.899a3ad.png"},231:function(e,t,r){},233:function(e,t,r){"use strict";r(231)},234:function(e,t,r){"use strict";r(10),r(13),r(56);var n=r(31);var o=r(12),l=r.n(o),c=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},d=class extends n.c{constructor(){super(...arguments),this.config=function(e,t){var{LANG:n,itemType:o,subType:l}=t,c="/".concat(n,"/sponsorship");return"LANG"===e||"index"===e?{img:r(229),href:c}:{img:r(230),href:c}}(this.$route.name,this.$route.params)}get href(){return this.config.href}get img(){return this.config.img}get linkToSponsorPage(){return this.config.href.startsWith("ammobin.us")}trackClick(){if(!window.navigator.doNotTrack){var e="https://ammobin.us/api/track-sponsor-click",data={href:window.location.href,target:this.href,ua:navigator.userAgent};navigator.sendBeacon?navigator.sendBeacon(e,JSON.stringify(data)):l.a.post(e,data)}}};c([Object(n.b)()],d.prototype,"homePage",void 0);var v=d=c([Object(n.a)({})],d),m=(r(233),r(34)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.linkToSponsorPage?r("nuxt-link",{staticClass:"center",attrs:{to:e.href}},[r("img",{staticClass:"pure-u-1",attrs:{src:e.img,alt:"sponsored ad",decoding:"async",loading:"lazy",height:"60"}})]):r("a",{staticClass:"center",attrs:{href:e.href,rel:"sponsored",target:"_blank"},on:{click:e.trackClick}},[r("img",{class:{"pure-u-1":!0,sponsor:!e.homePage,homePageSponsor:e.homePage},attrs:{src:e.img,crossorigin:"anonymous",alt:"sponsored ad",decoding:"async",loading:"lazy",height:e.homePage?600:60}})])}),[],!1,null,null,null);t.a=component.exports},240:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));r(10),r(13);var n=["ammo","centerfire","rimfire","shotgun"],o=[...n,"reloading","powder","shot","case","primer"]},247:function(e,t,r){"use strict";(function(e){var n=r(23),o=(r(10),r(13),r(243),r(36),r(141),r(31)),l=r(240),c=r(257);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},h=class extends o.c{constructor(){super(...arguments),this.showFilters=!0,this.provinces=[null,"AB","BC","MB","NB","NS","NL","NT","NU","ON","PE","QC","SK","YT"],this.defaultImg=r(142),this.brands=[null,...c.brands.map((e=>e[0])).sort(),"UNKNOWN"]}get isAmmoType(){return l.a.includes(this.itemType)}itemClicked(link,e){if(!window.navigator.doNotTrack){var t=JSON.stringify({link:link,index:e,href:window.location.href,query:{itemType:this.itemType,subType:this.subType,page:this.page,pageSize:this.pageSize,province:this.province,vendor:this.vendor,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,brand:this.brand},itemType:this.itemType,subType:this.subType,page:this.page,record:v({subType:this.subType,itemType:this.itemType},this.rows[e])});navigator.sendBeacon?navigator.sendBeacon("https://ammobin.us/api/track-click",t):this.$axios.post("https://ammobin.us/api/track-click",t)}}sortBy(e){var t;t=e===this.sortField&&"DES"===this.sortOrder?"ASC":"DES",this.$emit("update:sortOrder",t),this.$emit("update:sortField",e)}updateBrand(e){this.$emit("update:brand",e)}updatePage(t){this.$emit("update:page",t),e((()=>window.scroll(0,0)))}updatePageSize(e){this.$emit("update:pageSize",parseInt(e))}updateProvince(e){this.$emit("update:province",e||null)}updateVendor(e){this.$emit("update:vendor",e)}updateQuery(e){this.$emit("update:query",e)}toggleFilters(){this.showFilters=!this.showFilters}};m([Object(o.b)()],h.prototype,"rows",void 0),m([Object(o.b)()],h.prototype,"pages",void 0),m([Object(o.b)()],h.prototype,"itemType",void 0),m([Object(o.b)()],h.prototype,"vendors",void 0),m([Object(o.b)()],h.prototype,"loading",void 0),m([Object(o.b)()],h.prototype,"page",void 0),m([Object(o.b)()],h.prototype,"subType",void 0),m([Object(o.b)()],h.prototype,"pageSize",void 0),m([Object(o.b)()],h.prototype,"province",void 0),m([Object(o.b)()],h.prototype,"vendor",void 0),m([Object(o.b)()],h.prototype,"query",void 0),m([Object(o.b)()],h.prototype,"sortField",void 0),m([Object(o.b)()],h.prototype,"sortOrder",void 0),m([Object(o.b)()],h.prototype,"brand",void 0),h=m([Object(o.a)({mounted:function(){this.showFilters=window.outerWidth>=759}})],h),t.a=h}).call(this,r(89).setImmediate)},251:function(e,t,r){},252:function(e,t,r){},265:function(e,t,r){"use strict";r(251)},266:function(e,t,r){"use strict";r(252)},267:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(10),r(13),r(36),r(17),r(247).a),l=(r(265),r(34)),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("div",{staticClass:"pure-form pure-form-stacked"},[r("div",{staticClass:"pure-g"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-3",attrs:{id:"search"}},[r("label",{attrs:{for:"query"}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),r("input",{staticClass:"pure-input-1",attrs:{id:"query",placeholder:"ie: Barnaul, surplus, 00 Buck",disabled:e.loading},domProps:{value:e.query},on:{change:function(t){return e.updateQuery(t.target.value)}}})]),e._v(" "),r("div",{staticClass:"pure-u-1 show-on-mobile"},[r("div",{staticClass:"active pure-button button-xsmall",on:{click:function(t){return e.toggleFilters()}}},[e._v("\n          "+e._s(e.$t(e.showFilters?"table.hideFilters":"table.showFilters"))+"\n          "),r("span",{staticClass:"arrow",class:{DES:!e.showFilters,ASC:e.showFilters}})])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilters,expression:"showFilters"}],staticClass:"pure-u-1 pure-u-md-2-3"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-4"},[r("label",{attrs:{for:"province"}},[e._v(e._s(e.$t("table.province")))]),e._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"province",disabled:e.loading},domProps:{value:e.province},on:{change:function(t){return e.updateProvince(t.target.value)}}},e._l(e.provinces,(function(t){return r("option",{key:t},[e._v(e._s(t))])})),0)]),e._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",{attrs:{for:"vendor"}},[e._v(e._s(e.$t("table.vendor")))]),e._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"vendor",disabled:e.loading},domProps:{value:e.vendor},on:{change:function(t){return e.updateVendor(t.target.value)}}},e._l(e.vendors,(function(t){return r("option",{key:t},[e._v(e._s(t))])})),0)]),e._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3 capitalize"},[r("label",{attrs:{for:"brand"}},[e._v(e._s(e.$t("table.brand")))]),e._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"brand",disabled:e.loading},domProps:{value:e.brand},on:{change:function(t){return e.updateBrand(t.target.value)}}},e._l(e.brands,(function(t){return r("option",{key:t,staticClass:"capitalize"},[e._v("\n              "+e._s(t)+"\n            ")])})),0)])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.pages>0,expression:"pages > 0"}],staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",[e._v(e._s(e.$t("table.page")))]),e._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page<=1||e.loading},on:{click:function(t){return e.updatePage(1)}}},[e._v("\n          |<<\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page<=1||e.loading},on:{click:function(t){return e.updatePage(e.page-1)}}},[e._v("\n          <\n        ")]),e._v("\n        "+e._s(e.page)+" "+e._s(e.$t("table.of"))+" "+e._s(e.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page>=e.pages||e.loading},on:{click:function(t){return e.updatePage(e.page+1)}}},[e._v("\n          >\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page>=e.pages||e.loading},on:{click:function(t){return e.updatePage(e.pages)}}},[e._v("\n          >>|\n        ")])])])]),e._v(" "),r("div",{staticClass:"pure-g row"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-1"}),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"name"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("name")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.name"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"price"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("price")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.price"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"unitCost"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("unitCost")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.unitCost"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"link"==e.sortField},attrs:{disabled:e.loading},on:{click:function(t){return e.sortBy("link")}}},[r("h4",[e._v("\n        "+e._s(e.$t("table.link"))+"\n        "),r("span",{staticClass:"arrow",class:e.sortOrder})])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!(e.loading||e.rows&&0!==e.rows.length),expression:"!loading && (!rows || rows.length === 0)"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[e._v(e._s(e.$t("table.noResult")))])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[e._v(e._s(e.$t("default.loading"))+"...")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.rows,(function(t,n){return r("div",{key:t.link+n,staticClass:"pure-g row fix-row item"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1 pure-u-1"},[r("img",{directives:[{name:"img-fallback",rawName:"v-img-fallback",value:e.defaultImg,expression:"defaultImg"}],staticClass:"pure-img img-cell",attrs:{src:t.img||e.defaultImg,alt:t.name,loading:"lazy",referrerpolicy:"origin",decoding:"async",importance:"low"}})]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1 capitalize"},[e._v("\n        "+e._s(t.name)+"\n      ")]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("div",[e._v("$"+e._s(t.price.toFixed(2)))])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[t.unitCost?r("div",[e._v("$"+e._s(t.unitCost.toFixed(2)))]):r("div",{attrs:{if:"!row.minUnitCost"}},[e._v("N/A")])]),e._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("a",{attrs:{href:t.link,target:"_blank",rel:"nofollow noopener"},on:{click:function(r){return e.itemClicked(t.link,n)}}},[e._v(e._s(e.$t("table.buyFrom"))+" "+e._s(t.vendor))])])])})),0),e._v(" "),r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.pages>0,expression:"pages > 0"}],staticClass:"pure-u-lg-1-2 pure-u-1"},[r("div",[e._v(e._s(e.$t("table.page")))]),e._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===e.page||e.loading},on:{click:function(t){return e.updatePage(1)}}},[e._v("\n          |<<\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===e.page||e.loading},on:{click:function(t){return e.updatePage(e.page-1)}}},[e._v("\n          <\n        ")]),e._v("\n        "+e._s(e.page)+" "+e._s(e.$t("table.of"))+" "+e._s(e.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page===e.pages||e.loading},on:{click:function(t){return e.updatePage(e.page+1)}}},[e._v("\n          >\n        ")]),e._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:e.page===e.pages||e.loading},on:{click:function(t){return e.updatePage(e.pages)}}},[e._v("\n          >>|\n        ")])])])])])}),[],!1,null,null,null).exports,d=r(234),v=r(45),m=r(240),h=(r(232),r(31)),f=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l};function y(e,t){return _.apply(this,arguments)}function _(){return(_=Object(n.a)((function*(e,t){var{itemType:r,subType:n,page:o=1,pageSize:l=25,brand:c=null,province:d=null,vendor:v=null,query:m=null,sortField:h="unitCost",sortOrder:f="ASC"}=t;function y(s){return s?'"'+s+'"':"null"}var _=yield e.get("https://ammobin.us/api/graphql",{params:{query:"{\nitemsFlatListings(\n page: ".concat(o,"\n itemType: ").concat(r,'\n subType: "').concat(n,'"\n brand:').concat(y(c),"\n province:").concat(d,"\n vendor:").concat(y(v),"\n query:").concat(y(m),"\n sortField:").concat(h,"\n sortOrder:").concat(f,"\n) {\n pages\n items {\n  name\n  brand\n  img\n  price\n  link\n  unitCost\n  vendor\n  }\n }\n}"),opName:"getItemsFlatListings",variables:{itemType:r,subType:n,page:o,pageSize:l,brand:c,province:d,vendor:v,query:m,sortField:h,sortOrder:f}}}),{data:{itemsFlatListings:w,errors:O}}=_.data;return w}))).apply(this,arguments)}var w=class extends h.c{constructor(){super(...arguments),this.error=null,this.itemsFlatListings=null,this.loading=!1,this.page=1,this.province=null,this.pageSize=25,this.vendor=null,this.query=null,this.sortOrder="ASC",this.sortField="unitCost",this.brand=null}get area(){return this.province||Object(v.a)()}get isAmmoType(){return m.a.includes(this.itemType)}get subType(){return this.$route.params.subType}get itemType(){return this.$route.params.itemType}onQueryChange(e){var t=this;return Object(n.a)((function*(){t.$nuxt.$loading.start();try{t.loading=!0,t.itemsFlatListings=yield y(t.$axios,t),t.page>t.itemsFlatListings.pages&&(t.page=t.itemsFlatListings.pages||1)}catch(e){t.error=e}t.loading=!1,t.$nuxt.$loading.finish()}))()}};f([Object(h.d)("page"),Object(h.d)("province"),Object(h.d)("pageSize"),Object(h.d)("vendor"),Object(h.d)("query"),Object(h.d)("sortOrder"),Object(h.d)("sortField"),Object(h.d)("brand")],w.prototype,"onQueryChange",null);var O=w=f([Object(h.a)({validate(e){var{params:t}=e;return m.b.includes(t.itemType)},asyncData:e=>Object(n.a)((function*(){var{$axios:t,route:{params:{itemType:r,subType:n}}}=e,[o,l]=yield Promise.all([y(t,{itemType:r,subType:n}),t.get("https://ammobin.us/api/graphql",{params:{query:"{vendors{name}}",opName:"vendors"}}).then((e=>e.data.data.vendors))]);return{vendors:l,itemsFlatListings:o}}))(),components:{FlatList:c,Sponsorship:d.a},head(){var e=this,link=[],t="".concat("https://ammobin.us","/").concat(this.$i18n.locale,"/").concat(e.itemType,"/").concat(e.subType);e.page>1&&link.push({rel:"prev",href:Object(v.c)(t,e.page-1,e.subType)}),e.itemsFlatListings&&e.itemsFlatListings.pages>e.page&&link.push({rel:"next",href:Object(v.c)(t,e.page+1,e.subType)});var area=e.area,r=e.subType;return{title:this.$t("subType.title",{area:area,subType:r})+" | ".concat("ammobin.us"),meta:[{hid:"description",name:"description",content:this.$t("subType.description",{area:area,subType:r})}],link:link}}})],w),C=(r(266),Object(l.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.isAmmoType?e._e():r("div",[e._v(e._s(e.$t("default.betaWarning")))]),e._v(" "),r("h1",[e._v(e._s(e.$t("subType.title",{area:e.area,subType:e.subType})))]),e._v(" "),r("div",{staticClass:"pure-g row"},[r("sponsorship")],1),e._v(" "),r("flat-list",{directives:[{name:"show",rawName:"v-show",value:!e.error,expression:"!error"}],attrs:{rows:e.itemsFlatListings?e.itemsFlatListings.items:[],pages:e.itemsFlatListings?e.itemsFlatListings.pages:0,"item-type":e.itemType,subType:e.subType,vendors:[null].concat((e.vendors||[]).map((function(i){return i.name}))),loading:!e.itemsFlatListings||e.loading,page:e.page,pageSize:e.pageSize,province:e.province,vendor:e.vendor,query:e.query,sortField:e.sortField,sortOrder:e.sortOrder,brand:e.brand},on:{"update:page":function(t){e.page=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:province":function(t){e.province=t},"update:vendor":function(t){e.vendor=t},"update:query":function(t){e.query=t},"update:sortField":function(t){e.sortField=t},"update:sort-field":function(t){e.sortField=t},"update:sortOrder":function(t){e.sortOrder=t},"update:sort-order":function(t){e.sortOrder=t},"update:brand":function(t){e.brand=t}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v("ERROR "+e._s(e.error))])],1)}),[],!1,null,"1871f703",null));t.default=C.exports}}]);