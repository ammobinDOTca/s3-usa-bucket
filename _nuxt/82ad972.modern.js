/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{220:function(e,t,r){e.exports=r.p+"img/TEST_SIDE.d5445df.png"},221:function(e,t,r){e.exports=r.p+"img/TEST_TOP.c4ebc36.png"},222:function(e,t,r){},223:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const template={dependencies:{"@nuxt/ufo":"^0.5.0","node-fetch":"^2.6.1",unfetch:"^4.2.0",vue:"^2.6.12","vue-client-only":"^2.0.0","vue-meta":"^2.4.0","vue-no-ssr":"^1.1.1","vue-router":"^3.4.9","vue-template-compiler":"^2.6.12",vuex:"^3.6.0"},dir:n(r(144)).default.join(e,"..","template"),files:["App.js","client.js","index.js","jsonp.js","router.js","router.scrollBehavior.js","routes.json","server.js","utils.js","empty.js","mixins/fetch.server.js","mixins/fetch.client.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};t.template=template}).call(this,"/")},224:function(e,t,r){"use strict";r(222)},225:function(e,t,r){"use strict";r(10),r(45),r(15);var n=r(24);var o=r(9),c=r.n(o),m=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},l=class extends n.c{constructor(){super(...arguments),this.config=function(e,t){var{LANG:n,itemType:o,subType:c}=t,m="/".concat(n,"/sponsorship");return"LANG"===e||"index"===e?{img:r(220),href:m}:{img:r(221),href:m}}(this.$route.name,this.$route.params)}get href(){return this.config.href}get img(){return this.config.img}get linkToSponsorPage(){return this.config.href.startsWith("ammobin.us")}trackClick(){if(!window.navigator.doNotTrack){var e="https://ammobin.us/api/track-sponsor-click",data={href:window.location.href,target:this.href,ua:navigator.userAgent};navigator.sendBeacon?navigator.sendBeacon(e,JSON.stringify(data)):c.a.post(e,data)}}};m([Object(n.b)()],l.prototype,"homePage",void 0);var h=l=m([Object(n.a)({})],l),w=(r(224),r(29)),component=Object(w.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.linkToSponsorPage?r("nuxt-link",{staticClass:"center",attrs:{to:e.href}},[r("img",{staticClass:"pure-u-1",attrs:{src:e.img,alt:"sponsored ad",decoding:"async",loading:"lazy",height:"60"}})]):r("a",{staticClass:"center",attrs:{href:e.href,rel:"sponsored",target:"_blank"},on:{click:e.trackClick}},[r("img",{class:{"pure-u-1":!0,sponsor:!e.homePage,homePageSponsor:e.homePage},attrs:{src:e.img,crossorigin:"anonymous",alt:"sponsored ad",decoding:"async",loading:"lazy",height:e.homePage?600:60}})])}),[],!1,null,null,null);t.a=component.exports},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));r(10),r(15);var n=["ammo","centerfire","rimfire","shotgun"],o=[...n,"reloading","powder","shot","case","primer"]},234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.centerFireCalibres=void 0,t.centerFireCalibres=[[".357 mag","357mag"],[".357 sig","357sig"],["5.56 nato","5.56","5.56x45",".223 remington","223","556 rem"],["7.62x25 tokarev","7.62x25","7.62mmtokarev"],[".38 special","38spl","38special"],["7.62 nato","7.62x51",".308 winchester","308win",".308"],[".45 acp","45acp","45auto"],[".45 gap","45g.a.p.","45gap"],["7mm remington magnum","7mmremingtonmag"],[".32 auto","32auto"],[".380 acp","380auto","9x17","380acp"],[".40 s&w","40s&w","40 sw"],["7.5x55mm swiss","7.5x55"],["9mm","9x19"],["7.62x54mmr","7.62x54"],["7.62x39mm","7.62x39","762x39"],["338 lapua magnum","8.6x70mm","8.58x70mm","338lapua"],[".338 winchester magnum","338winchestermagnum","338win"],["6.5mm creedmoor","6.5creedmoor","6.5cm"],["6mm creedmoor","6creedmoor"],[".460 s&w magnum",".460s&w"],[".500 s&w magnum","500s&wmag","12.7x41mmsr"],[".44 magnum","44remingtonmagnum","44mag","44remmag"],[".25-06 remington","25-06"],[".30 carbine","30carbine","7.62×33mm"],[".30-06 springfield","30-06sprg","30-06"],[".30-30 winchester","7.8x51r","30winchester","thirty-thirty","30-30","3030win"],[".303 british","303british","7.7x56mmr"],[".270 win","270win"],[".300 winchester short magnum","300wsm"],[".300 winchester magnum","300win","300wn"],["6.5x55mm","6.5x55"],[".240 Weatherby Magnum","240weatherby","240wby"],[".270 weatherby magnum","270wby","270weatherby"],[".300 weatherby magnum","300weatherby","300wby"],[".340 weatherby magnum","340wby","340weatherby"],[".30-378 weatherby magnum","30-378wby","30-378weatherby"],[".338-378 weatherby magnum","338-378wby",".338-378weatherby"],[".50 bmg","50bmg","50browningmachinegun","12.7x99mmnato","50browning"],[".300 aac blackout","300blk","7.62x35mm","300aac","300blackout"],["7.92x57mmmauser","8mmmauser","8x57"],["5.6x52mmr","5.6x52r","22savagehigh-power","22savage"],[".243 winchester","6x52mm","243win"],[".204 ruger","204ruger"],[".22-250 remington","22-250"],[".45 colt","45longcolt","45lc","11.48x33mmr","45colt"],["7mm-08 remington","7mm-08","7mmrem"],["fn 5.7x28mm","5.7x28mm"],["10mm auto","10mm","10x25mm"],["9.3x62mm","9.3x62"],[".444 marlin","444marlin"],[".454 casull","454casull"],["6.5x52mm carcano","6.5x52"],["7x57mm mauser","7x57","7mm"],[".32 winchester special","32ws","32winchesterspecial"],[".45-70","45-70"],[".50 AE","50ae","50action"],[".222 remington","222"],[".375 ruger","375ruger"],[".270 winchester short magnum","270winchestershortmagnum","270wsm"],["5.45x39"],["7.62x38mmr","7.62nagant"],["8x50mmr lebel","8x50","8mm"],[".455 webley","455webley","455eley","455colt"],["7.65x21mm","30luger","7.65mmluger"],[".416 Rigby","416Rigby","10.57x74"],["6.5 PRC","6.5prc"],[".38-55 winchester","38-55wcf"],[".44 russian","44s&wrussian","44russian"],[".44 s&w special","44special","44s&w"],[".44-40 winchester","44winchester","44wcf","44-40"],[".38 s&w","38s&w"],[".32 s&w long","32s&wlong"],[".32 s&w short","32s&wshort"],[".38 long colt","38longcolt"],[".38 short colt","38shortcolt"],[".41 long colt","41longcolt"],[".41 short colt","41shortcolt"],[".25 auto","25auto"],[".44 colt","44colt"],[".32-20 winchester","32-20"],[".38-40 winchester","38-40"],[".224 Valkyrie","224valkyrie"],[".17 Hornet","17hornet"],[".350 Legend","350legend"]]},235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rimfireCalibres=void 0,t.rimfireCalibres=[[".22 wmr","22wmr","22winchestermagnum","22magnum","22winmag","22mag","22wrf"],[".22 lr","22lr","22longrifle","longrifle","22"],[".17 hmr","17hmr","17hornadymagnumrimfire"],[".17 wsm","17wsm"]]},236:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shotgunGauges=void 0,t.shotgunGauges=[["10 ga","10g","10-g"],["12 ga","12g","12-g"],["14 ga","14g","14-g"],["16 ga","16g","16-g"],["20 ga","20g","20-g"],["28 ga","28g","28-g"],[".410 ga",".410g","410g","410"]]},240:function(e,t,r){},246:function(e,t,r){"use strict";r(240)},259:function(e,t,r){"use strict";r.r(t);r(145),r(34);var n=r(225),o=r(44),c=r(231),m=(r(223),r(24)),l=r(234),h=r(235),w=r(236),f=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},d=class extends m.c{get isAmmoType(){return c.a.includes(this.itemType)}get itemType(){return this.$route.params.itemType||this.$route.query.itemType||null}path(e){return"/".concat(this.$i18n.locale,"/").concat(this.itemType,"/").concat(e)}get subtypes(){switch(this.itemType){case"shotgun":return w.shotgunGauges.map(e=>e[0].toUpperCase()).sort();case"rimfire":return h.rimfireCalibres.map(e=>e[0].toUpperCase()).sort();case"centerfire":return l.centerFireCalibres.map(e=>e[0].toUpperCase()).sort();case"reloading":case"powder":case"shot":case"case":case"primer":return["powder","shot","case","primer"]}}},y=d=f([Object(m.a)({validate(e){var{params:t}=e;return c.b.includes(t.itemType)},head(){var link=[],e="https://".concat("ammobin.us","/").concat(this.$i18n.locale,"/").concat(this.itemType);this.page>1&&link.push({rel:"prev",href:Object(o.c)(e,this.page-1,this.subType)}),this.itemsListings&&this.itemsListings.pages>this.page&&link.push({rel:"next",href:Object(o.c)(e,this.page+1,this.subType)});var t=this.$t("default."+this.itemType);this.province||Object(o.a)();return{title:this.$t("itemTypes.title",{type:t}),meta:[{hid:"description",name:"description",content:this.$t("itemTypes.description",{type:t})}],link:link}},mounted(){this.$route.query&&this.$route.query.subType&&this.$router.push(this.$route.path+"/"+this.$route.query.subType)},components:{Sponsorship:n.a}})],d),x=(r(246),r(29)),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"capitalize"},[e._v("\n    "+e._s(e.$t("itemTypes.title",{type:e.$t("default."+e.itemType)}))+"\n  ")]),e._v(" "),r("div",{staticClass:"pure-g row"},[r("sponsorship")],1),e._v(" "),r("div",{staticClass:"pure-g row"},[e._l(e.subtypes,(function(t){return r("div",{key:t,staticClass:"pure-u-md-1-3 pure-u-1 margin-y capitalize"},[r("nuxt-link",{attrs:{to:e.path(t)}},[e._v(e._s(t))])],1)})),e._v(" "),r("div",{staticClass:"pure-u-md-1-3 pure-u-1 margin-y capitalize"},[r("nuxt-link",{attrs:{to:e.path("UNKNOWN")}},[e._v("UNKNOWN")])],1)],2)])}),[],!1,null,"475b1675",null);t.default=component.exports}}]);