(function(e){function n(n){for(var o,d,t=n[0],i=n[1],g=n[2],c=0,p=[];c<t.length;c++)d=t[c],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&p.push(r[d][0]),r[d]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(n);while(p.length)p.shift()();return s.push.apply(s,g||[]),a()}function a(){for(var e,n=0;n<s.length;n++){for(var a=s[n],o=!0,t=1;t<a.length;t++){var i=a[t];0!==r[i]&&(o=!1)}o&&(s.splice(n--,1),e=d(d.s=a[0]))}return e}var o={},r={index:0},s=[];function d(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var n=[],a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,o){a=r[e]=[n,o]}));n.push(a[2]=o);var s,t=document.createElement("script");t.charset="utf-8",t.timeout=120,d.nc&&t.setAttribute("nonce",d.nc),t.src=function(e){return d.p+"static/js/"+({"pages-about-about":"pages-about-about","pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6":"pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6","pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180":"pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180","pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13":"pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13","pages-addAddress-addAddress":"pages-addAddress-addAddress","pages-addComment-addComment":"pages-addComment-addComment","pages-confirm-confirm~pages-person-person":"pages-confirm-confirm~pages-person-person","pages-person-person":"pages-person-person","pages-login-login":"pages-login-login","pages-orderComment-orderComment":"pages-orderComment-orderComment","pages-register-register":"pages-register-register","pages-confirm-confirm":"pages-confirm-confirm","pages-address-address":"pages-address-address","pages-business-business":"pages-business-business","pages-collect-collect":"pages-collect-collect","pages-comment-comment":"pages-comment-comment","pages-detail-detail":"pages-detail-detail","pages-index-index":"pages-index-index","pages-me-me":"pages-me-me","pages-orders-orders":"pages-orders-orders","pages-agreement-agreement":"pages-agreement-agreement","pages-orderItems-orderItems":"pages-orderItems-orderItems"}[e]||e)+"."+{"pages-about-about":"d7f274fe","pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6":"dfa8fa71","pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180":"ce09cd93","pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13":"6a37e724","pages-addAddress-addAddress":"84ee05b4","pages-addComment-addComment":"2939a9d1","pages-confirm-confirm~pages-person-person":"4a3e9ddc","pages-person-person":"acb002bc","pages-login-login":"93f3787f","pages-orderComment-orderComment":"dc656527","pages-register-register":"01987b6b","pages-confirm-confirm":"dc4f0912","pages-address-address":"13cdb365","pages-business-business":"1badbbdd","pages-collect-collect":"94809ac3","pages-comment-comment":"ef344a89","pages-detail-detail":"8b17b1c4","pages-index-index":"29f9a950","pages-me-me":"30e2b112","pages-orders-orders":"aa155719","pages-agreement-agreement":"7c5c4c21","pages-orderItems-orderItems":"1e0167e1"}[e]+".js"}(e);var i=new Error;s=function(n){t.onerror=t.onload=null,clearTimeout(g);var a=r[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}r[e]=void 0}};var g=setTimeout((function(){s({type:"timeout",target:t})}),12e4);t.onerror=t.onload=s,document.head.appendChild(t)}return Promise.all(n)},d.m=e,d.c=o,d.d=function(e,n,a){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(a,o,function(n){return e[n]}.bind(null,o));return a},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var t=window["webpackJsonp"]=window["webpackJsonp"]||[],i=t.push.bind(t);t.push=n,t=t.slice();for(var g=0;g<t.length;g++)n(t[g]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("8e87")},"00da":function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={dev:{baseUrl:"http://localhost:9090"},prod:{baseUrl:"http://106.54.221.16:9092"}};n.default=o},"1b34":function(e,n,a){"use strict";a.r(n);var o=a("d58a"),r=a.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(n,e,(function(){return o[e]}))}(s);n["default"]=r.a},"2b73":function(e,n,a){"use strict";var o=a("e775"),r=a.n(o);r.a},"403e":function(e,n,a){"use strict";(function(e){var n=a("4ea4").default;a("13d5"),a("d3b7"),a("ddb0"),a("ac1f"),a("5319");var o=n(a("e143")),r={keys:function(){return[]}};e["____56BF893____"]=!0,delete e["____56BF893____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"考拉外卖",navigationBarBackgroundColor:"#ffd100",backgroundColor:"#F8F8F8"},tabBar:{selectedColor:"#ffd100",color:"#666",list:[{pagePath:"pages/index/index",text:"首页",iconPath:"static/icons/home.png",selectedIconPath:"static/icons/home-active.png",redDot:!1,badge:""},{pagePath:"pages/orders/orders",text:"订单",iconPath:"static/icons/orders.png",selectedIconPath:"static/icons/orders-active.png",redDot:!1,badge:""},{pagePath:"pages/me/me",text:"我的",iconPath:"static/icons/me.png",selectedIconPath:"static/icons/me-active.png",redDot:!1,badge:""}],backgroundColor:"",borderStyle:"black"}},e.__uniConfig.compilerVersion="3.8.12",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__56BF893",e.__uniConfig.appName="uniapp",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=r.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=r(n);return Object.assign(e[a]||(e[a]={}),o.common||o),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,o.default.component("pages-index-index",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-index-index")]).then(function(){return e(a("ed30"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-login-login",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13"),a.e("pages-login-login")]).then(function(){return e(a("e789"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-register-register",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13"),a.e("pages-register-register")]).then(function(){return e(a("67b5"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-detail-detail",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-detail-detail")]).then(function(){return e(a("6eb4"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-confirm-confirm",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180"),a.e("pages-confirm-confirm~pages-person-person"),a.e("pages-confirm-confirm")]).then(function(){return e(a("12ba"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-address-address",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-address-address")]).then(function(){return e(a("2130"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-addAddress-addAddress",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13"),a.e("pages-addAddress-addAddress")]).then(function(){return e(a("efc0"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-orderComment-orderComment",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13"),a.e("pages-orderComment-orderComment")]).then(function(){return e(a("63a2"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-orders-orders",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-orders-orders")]).then(function(){return e(a("61d4"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-me-me",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-me-me")]).then(function(){return e(a("6f25"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-orderItems-orderItems",(function(e){var n={component:a.e("pages-orderItems-orderItems").then(function(){return e(a("b5e0"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-collect-collect",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-collect-collect")]).then(function(){return e(a("65b2"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-person-person",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13"),a.e("pages-confirm-confirm~pages-person-person"),a.e("pages-person-person")]).then(function(){return e(a("4fec"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-business-business",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-business-business")]).then(function(){return e(a("421d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-about-about",(function(e){var n={component:a.e("pages-about-about").then(function(){return e(a("b25b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-agreement-agreement",(function(e){var n={component:a.e("pages-agreement-agreement").then(function(){return e(a("b5b6"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-addComment-addComment",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-confirm-confirm~pages-login-login~page~161f3180"),a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-login-login~pages-orderComment-orderCo~3e0b5e13"),a.e("pages-addComment-addComment")]).then(function(){return e(a("634e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-comment-comment",(function(e){var n={component:Promise.all([a.e("pages-addAddress-addAddress~pages-addComment-addComment~pages-address-address~pages-business-busines~bd970bc6"),a.e("pages-comment-comment")]).then(function(){return e(a("3d42"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登 录",enablePullDownRefresh:!1})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/register/register",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"注 册",enablePullDownRefresh:!1})},[e("pages-register-register",{slot:"page"})])}},meta:{name:"pages-register-register",isNVue:!1,maxWidth:0,pagePath:"pages/register/register",windowTop:44}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"点 餐",enablePullDownRefresh:!1})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,maxWidth:0,pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/confirm/confirm",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"确认订单",enablePullDownRefresh:!1})},[e("pages-confirm-confirm",{slot:"page"})])}},meta:{name:"pages-confirm-confirm",isNVue:!1,maxWidth:0,pagePath:"pages/confirm/confirm",windowTop:44}},{path:"/pages/address/address",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"收货地址",enablePullDownRefresh:!1})},[e("pages-address-address",{slot:"page"})])}},meta:{name:"pages-address-address",isNVue:!1,maxWidth:0,pagePath:"pages/address/address",windowTop:44}},{path:"/pages/addAddress/addAddress",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"提交收货地址",enablePullDownRefresh:!1})},[e("pages-addAddress-addAddress",{slot:"page"})])}},meta:{name:"pages-addAddress-addAddress",isNVue:!1,maxWidth:0,pagePath:"pages/addAddress/addAddress",windowTop:44}},{path:"/pages/orderComment/orderComment",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"订单备注",enablePullDownRefresh:!1})},[e("pages-orderComment-orderComment",{slot:"page"})])}},meta:{name:"pages-orderComment-orderComment",isNVue:!1,maxWidth:0,pagePath:"pages/orderComment/orderComment",windowTop:44}},{path:"/pages/orders/orders",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"我的订单",enablePullDownRefresh:!1})},[e("pages-orders-orders",{slot:"page"})])}},meta:{id:2,name:"pages-orders-orders",isNVue:!1,maxWidth:0,pagePath:"pages/orders/orders",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/me/me",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"我 的",enablePullDownRefresh:!1})},[e("pages-me-me",{slot:"page"})])}},meta:{id:3,name:"pages-me-me",isNVue:!1,maxWidth:0,pagePath:"pages/me/me",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/orderItems/orderItems",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"订单详情",enablePullDownRefresh:!1})},[e("pages-orderItems-orderItems",{slot:"page"})])}},meta:{name:"pages-orderItems-orderItems",isNVue:!1,maxWidth:0,pagePath:"pages/orderItems/orderItems",windowTop:44}},{path:"/pages/collect/collect",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"我的收藏",enablePullDownRefresh:!1})},[e("pages-collect-collect",{slot:"page"})])}},meta:{name:"pages-collect-collect",isNVue:!1,maxWidth:0,pagePath:"pages/collect/collect",windowTop:44}},{path:"/pages/person/person",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"个人信息",enablePullDownRefresh:!1})},[e("pages-person-person",{slot:"page"})])}},meta:{name:"pages-person-person",isNVue:!1,maxWidth:0,pagePath:"pages/person/person",windowTop:44}},{path:"/pages/business/business",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"商家列表",enablePullDownRefresh:!1})},[e("pages-business-business",{slot:"page"})])}},meta:{name:"pages-business-business",isNVue:!1,maxWidth:0,pagePath:"pages/business/business",windowTop:44}},{path:"/pages/about/about",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"关于我们",enablePullDownRefresh:!1})},[e("pages-about-about",{slot:"page"})])}},meta:{name:"pages-about-about",isNVue:!1,maxWidth:0,pagePath:"pages/about/about",windowTop:44}},{path:"/pages/agreement/agreement",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"用户协议",enablePullDownRefresh:!1})},[e("pages-agreement-agreement",{slot:"page"})])}},meta:{name:"pages-agreement-agreement",isNVue:!1,maxWidth:0,pagePath:"pages/agreement/agreement",windowTop:44}},{path:"/pages/addComment/addComment",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"提交评价",enablePullDownRefresh:!1})},[e("pages-addComment-addComment",{slot:"page"})])}},meta:{name:"pages-addComment-addComment",isNVue:!1,maxWidth:0,pagePath:"pages/addComment/addComment",windowTop:44}},{path:"/pages/comment/comment",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-comment-comment",{slot:"page"})])}},meta:{name:"pages-comment-comment",isNVue:!1,maxWidth:0,pagePath:"pages/comment/comment",windowTop:44}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))},4059:function(e,n,a){var o=a("24fb");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},"5c75":function(e,n,a){"use strict";a("7a82");var o=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("d3b7");var r=o(a("00da")),s=r.default.prod.baseUrl,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,a){var o;uni.request({url:s+e.url||"",method:e.method||"GET",data:e.data||{},header:e.header||{"Content-Type":"application/json",token:null===(o=uni.getStorageSync("xm-user"))||void 0===o?void 0:o.token}}).then((function(e){var a=e.data;"401"===a.code&&uni.navigateTo({url:"/pages/login/login"}),n(a)})).catch((function(e){a(e)}))}))},t={request:d,get:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="GET",a.data=n,a.url=e,d(a)},post:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="POST",a.data=n,a.url=e,d(a)},put:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="PUT",a.data=n,a.url=e,d(a)},del:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="DELETE",a.data=n,a.url=e,d(a)}};n.default=t},"690b":function(e,n,a){var o=a("7037").default;a("d3b7"),uni.addInterceptor({returnValue:function(e){return!e||"object"!==o(e)&&"function"!==typeof e||"function"!==typeof e.then?e:new Promise((function(n,a){e.then((function(e){return e[0]?a(e[0]):n(e[1])}))}))}})},"8e87":function(e,n,a){"use strict";var o=a("4ea4").default,r=o(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("403e"),a("1c31");var s=o(a("9ecb")),d=o(a("e143"));a("690b"),a("e2a7");var t=o(a("5c75")),i=o(a("00da"));d.default.prototype.$request=t.default,d.default.prototype.$baseUrl=i.default.prod.baseUrl,d.default.config.productionTip=!1,s.default.mpType="app";var g=new d.default((0,r.default)({},s.default));g.$mount()},"9ecb":function(e,n,a){"use strict";a.r(n);var o=a("b2ee"),r=a("1b34");for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(n,e,(function(){return r[e]}))}(s);a("2b73");var d=a("f0c5"),t=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=t.exports},b020:function(e,n,a){var o=a("24fb");n=o(!1),n.push([e.i,"*{box-sizing:border-box}uni-page-body{background-color:#fafafa;min-height:100vh;font-size:%?24?%;color:#333}body.?%PAGE?%{background-color:#fafafa}.box{background-color:#fff;padding:10px;border-radius:%?10?%;box-shadow:0 %?4?% %?20?% rgba(0,0,0,.1)}.mini-btn{padding:0 %?4?%;border:1px solid #999;border-radius:%?5?%;font-size:%?24?%}.small-btn{padding:%?5?% %?20?%;border-radius:%?5?%;font-size:%?24?%;background-color:#1e90ff;color:#fff}.lineEllipsis{word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;\r\n\t/* 超出几行省略 */overflow:hidden}",""]),e.exports=n},b2ee:function(e,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){}));var o=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},r=[]},d58a:function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={globalData:{},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},e2a7:function(e,n,a){var o=a("b020");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("4f06").default;r("0f181bf0",o,!0,{sourceMap:!1,shadowMode:!1})},e775:function(e,n,a){var o=a("4059");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("4f06").default;r("24f5dac6",o,!0,{sourceMap:!1,shadowMode:!1})}});