(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{"045d":function(t,e,n){var i=n("b6d4c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("0d1df692",i,!0,{sourceMap:!1,shadowMode:!1})},"2be4":function(t,e,n){"use strict";n.r(e);var i=n("35d4"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"35d4":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("2ca0");var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=i},"5ee1":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}},methods:{}}},"953e":function(t,e,n){"use strict";n.r(e);var i=n("5ee1"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"9e8f":function(t,e,n){"use strict";var i=n("045d"),r=n.n(i);r.a},b25b:function(t,e,n){"use strict";n.r(e);var i=n("dcf8"),r=n("953e");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var u=n("f0c5"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"c676ea5e",null,!1,i["a"],void 0);e["default"]=a.exports},b6d4c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},cab0:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},r=[]},d502:function(t,e,n){"use strict";n.r(e);var i=n("cab0"),r=n("2be4");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("9e8f");var u=n("f0c5"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"03b6d5de",null,!1,i["a"],void 0);e["default"]=a.exports},dcf8:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniLink:n("d502").default},r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticStyle:{padding:"20rpx"}},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticStyle:{"font-size":"40rpx","margin-bottom":"20rpx"}},[this._v("关于我们")]),e("v-uni-view",[e("v-uni-view",{staticStyle:{"margin-bottom":"20rpx","font-size":"30rpx"}},[this._v("项目训练营团队出品，如果需要详细的文档和手把手带撸视频讲解，请点击加入知识星球:")]),e("uni-link",{attrs:{color:"blue",href:"https://t.zsxq.com/13XD9LgLl",text:"https://t.zsxq.com/13XD9LgLl"}}),e("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[e("v-uni-image",{attrs:{mode:"widthFix",src:n("dd03")}})],1)],1)],1)],1)},o=[]},dd03:function(t,e,n){t.exports=n.p+"static/img/训练营.61f21e04.png"}}]);