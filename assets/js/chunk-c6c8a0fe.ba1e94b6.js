(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6c8a0fe"],{"3dc8":function(o,e,t){"use strict";t("a3c8")},a3c8:function(o,e,t){},d162:function(o,e,t){"use strict";t.r(e);var n=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("section",{staticClass:"main_cont amap-wrapper"},[t("div",{staticClass:"filter_wrap"},[t("el-button",{attrs:{type:"primary"},on:{click:o.resetMap}},[o._v("初始化")]),t("el-select",{attrs:{placeholder:"请选择城市"},on:{change:o.selectName},model:{value:o.selCityName,callback:function(e){o.selCityName=e},expression:"selCityName"}},o._l(o.cityArr,(function(o){return t("el-option",{key:o.value,attrs:{label:o.label,value:o.value}})})),1)],1),t("el-amap",{ref:"map",staticClass:"amap-box",attrs:{vid:"amap-vue",center:o.center,zoom:o.zoom,events:o.events}}),t("el-dialog",{attrs:{title:"提示",visible:o.dialogVisible,width:"30%"},on:{"update:visible":function(e){o.dialogVisible=e}}},[t("span",[o._v("这是一段信息")]),t("p",[o._v("城市名称："+o._s(o.cityName))]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){o.dialogVisible=!1,o.resetForm()}}},[o._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(e){o.dialogVisible=!1,o.saveForm()}}},[o._v("确 定")])],1)])],1)},i=[],a=(t("159b"),t("b0c0"),{name:"testmap5",data:function(){var o=this;return{center:[107.943579,30.131735],zoom:7,events:{init:function(e){window.amapview=e,o.getMapInfo(),o.getGeoJson()}},polygonInitColor:"#f00",polygonMarkerColor:"#00f",chongqingGeojson:{},dialogVisible:!1,cityName:"",cityArr:[],selCityName:""}},computed:{},methods:{getMapInfo:function(){var o=this;console.log("AMap",AMap),setTimeout((function(){console.log("amapview",window.amapview),window.amapview.on("click",(function(e){o.getPosition(e)})),window.amapview.on("moveend",(function(){o.logMapinfo()}))}),0)},logMapinfo:function(){console.log("当前级别",window.amapview.getZoom()),console.log("当前中心点",window.amapview.getCenter())},getPosition:function(o){console.log("您在 ["+o.lnglat.getLng()+","+o.lnglat.getLat()+"] 的位置点击了地图")},initGeojsonPolygon:function(){var o=window.amapview.getAllOverlays("polygon");window.amapview.remove(o)},resetMap:function(){window.amapview.setZoom("7"),window.amapview.setCenter([107.943579,30.131735]),this.initGeojsonPolygon(),this.setChongqinMap(this.chongqingGeojson)},initGeojsonLayer:function(o,e){return new AMap.GeoJSON({geoJSON:o,getPolygon:function(o,t){var n=AMap.GeometryUtil.ringArea(t[0]);return new AMap.Polygon({path:t,fillOpacity:1-Math.sqrt(n/8e9),fillColor:e,strokeColor:"#fff",strokeWeight:.6,strokeStyle:"solid",strokeOpacity:1})}})},setGeoJsonLayer:function(o,e,t,n){var i=this.initGeojsonLayer(o,e);i.setMap(window.amapview),i.eachOverlay((function(o){o.on(t,(function(e){n(e,o)}))}))},setChongqinMap:function(o){var e=this;this.setGeoJsonLayer(o,this.polygonInitColor,"click",(function(o,t){e.resetMap(),e.getGeoEvent(o,t,(function(o){e.getChonQingData(o)}))}))},geojsonEvent:function(o,e){o.on("mouseout",(function(e){console.log("鼠标移除事件"),o.hide()})),o.on("click",(function(){console.log("鼠标点击事件"),o.hide(),e()}))},getGeoEvent:function(o,e,t){var n=e.toGeoJSON();t(n);var i=this.initGeojsonLayer(n,this.polygonMarkerColor);i.setMap(window.amapview),this.geojsonEvent(i,(function(){}))},getGeoJson:function(){var o=this;this.axios.get("https://a.amap.com/jsapi_demos/static/geojson/chongqing.json").then((function(e){var t=e.data;new AMap.GeoJSON({geoJSON:t,getPolyline:function(o,e){return console.log("123",e),new AMap.Polyline({path:e,isOutline:!0,outlineColor:"#ffeeff",borderWeight:3,strokeColor:"#3366FF",strokeOpacity:1,strokeWeight:6,strokeStyle:"solid",strokeDasharray:[10,5],lineJoin:"round",lineCap:"round",zIndex:50})}});o.$message.success("geojson加载成功")})).catch({})},getcityArray:function(o){var e=this;o.features.forEach((function(o){e.cityArr.push({label:o.properties.name,value:o.properties.name})}))},getChonQingData:function(o){console.log("处理geojson业务流程"),this.dialogVisible=!0,"string"!==typeof o?o.properties.name?(this.cityName=o.properties.name,console.log("区县名称",o.properties.name)):console.log("区县名称",o.properties.Name):this.cityName=o},selectName:function(o){var e=this;this.resetMap();var t={};this.chongqingGeojson.features.forEach((function(n){var i=e.initGeojsonLayer(n,e.polygonMarkerColor);n.properties.name===o&&(t=i,e.geojsonEvent(i,(function(){console.log(n),e.getChonQingData(o)})))})),window.amapview.add(t)},resetForm:function(){console.log("reset"),this.selCityName=""},saveForm:function(){this.selCityName=this.cityName}},created:function(){},mounted:function(){}}),s=a,l=(t("3dc8"),t("2877")),r=Object(l["a"])(s,n,i,!1,null,"477d448c",null);e["default"]=r.exports}}]);