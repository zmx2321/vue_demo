(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0045"],{"65d4":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"main_cont"},[l("h2",{staticStyle:{"margin-bottom":"50px"}},[e._v("test")]),l("count-up",{attrs:{count:123123}}),l("el-select",{attrs:{placeholder:"请选择"},on:{change:e.langChange},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("input",{attrs:{type:"text",placeholder:e.$t("message.hello")}}),e._v(" "+e._s(e.$t("message.hello"))+" "+e._s(e.$t("message.hello"))+" "),l("p",{domProps:{innerHTML:e._s(e.$t("message.hello"))}})],1)},n=[],o={name:"Test",data:function(){return{selectValue:"",options:[{value:"cn",label:"中文"},{value:"en",label:"English"}]}},methods:{langChange:function(e){var t=this;this.$confirm(this.$t("btn.down")).then((function(){localStorage.setItem("lang",e),t.$i18n.locale=e})).catch((function(){}))}},created:function(){console.log(this.$i18n.locale);var e=this;console.log(localStorage.lang),e.selectValue=void 0==localStorage.lang?"cn":localStorage.lang}},s=o,c=l("2877"),i=Object(c["a"])(s,a,n,!1,null,"6c9a5cf8",null);t["default"]=i.exports}}]);