(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addAddress-addAddress"],{efc0:function(e,t,r){"use strict";r.r(t);var n=r("f04b"),a=r("fad7");for(var s in a)["default"].indexOf(s)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(s);var i=r("f0c5"),u=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,"77c2b80a",null,!1,n["a"],void 0);t["default"]=u.exports},f04b:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return n}));var n={uniForms:r("2f0c").default,uniFormsItem:r("a608").default,uniEasyinput:r("36a2").default},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticStyle:{padding:"20rpx"}},[r("v-uni-view",{staticClass:"box",staticStyle:{padding:"40rpx"}},[r("uni-forms",{ref:"formRef",attrs:{modelValue:e.form,rules:e.rules,"label-width":"160rpx","label-align":"right"}},[r("uni-forms-item",{attrs:{label:"收货地址",name:"address",required:!0}},[r("uni-easyinput",{attrs:{type:"text",placeholder:"请输入收货地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("uni-forms-item",{attrs:{label:"收货人",name:"user",required:!0}},[r("uni-easyinput",{attrs:{type:"text",placeholder:"请输入收货人"},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}})],1),r("uni-forms-item",{attrs:{label:"联系电话",name:"phone",required:!0}},[r("uni-easyinput",{attrs:{type:"text",placeholder:"请输入联系电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),r("v-uni-view",{staticStyle:{margin:"20rpx","text-align":"center"}},[r("v-uni-button",{attrs:{type:"primary",size:"mini",plain:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress()}}},[e._v("确定")])],1)],1)],1)},s=[]},f866:function(e,t,r){"use strict";r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{form:{},rules:{name:{rules:[{required:!0,errorMessage:"请填写收货地址"}]},user:{rules:[{required:!0,errorMessage:"请填写收货人"}]},phone:{rules:[{required:!0,errorMessage:"请填写联系电话"}]}}}},onLoad:function(e){var t=e.id;this.loadAddress(t)},methods:{loadAddress:function(e){var t=this;this.$request.get("/address/selectById/"+e).then((function(e){t.form=e.data||{}}))},addAddress:function(){var e=this;this.$refs.formRef.validate().then((function(t){e.$request.request({url:e.form.id?"/address/update":"/address/add",method:e.form.id?"PUT":"POST",data:e.form}).then((function(e){"200"===e.code?(uni.showToast({title:"操作成功"}),setTimeout((function(){uni.navigateBack({url:"/pages/address/address"})}),1e3)):uni.showToast({icon:"none",title:e.msg})}))})).catch((function(e){console.log("err",e)}))}}};t.default=n},fad7:function(e,t,r){"use strict";r.r(t);var n=r("f866"),a=r.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a}}]);