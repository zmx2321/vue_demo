(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-459e94ea"],{"1fdf":function(n,o,t){"use strict";t("ac3b")},ac3b:function(n,o,t){},f14a:function(n,o,t){"use strict";t.r(o);var e=function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("merchant-map")},a=[],i=function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("section",{staticClass:"amap-wrapper"},[t("el-amap",{ref:"map",staticClass:"amap-box",attrs:{vid:"amap-vue",center:n.center,zoom:n.zoom,events:n.events}})],1)},r=[],s=t("c964"),c=(t("96cf"),t("99af"),t("b0c0"),t("159b"),t("d3b7"),t("25f0"),t("f04b")),l=t("cf05"),p=t.n(l),f={data:function(){var n=this;return{center:[120.273703,30.177084],zoom:13,events:{init:function(o){n.initMap(o)}},polygon:{},markers:[],polygonInfoData:{},markerInfoData:{},pointDataList:c["c"]}},computed:{markerInfoWindow:function(){return new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)})},polygonInfoWindow:function(){return new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)})},markerInfo:function(){return'\n        <div class="marker_info_window">\n          <p style="padding-top: 10px">'.concat(this.markerInfoData.positionStr,"</p>\n        </div>\n      ")},polygonInfo:function(){return'\n        <div class="marker_info_window">\n          <p style="padding-top: 10px">'.concat(this.polygonInfoData.name,"</p>\n          ").concat(this.polygonInfoData.name,"\n          ").concat(this.polygonInfoData.detail,"\n        </div>\n      ")}},methods:{initMap:function(n){var o=this;n.on("click",(function(t){o.getPosition(t,n)})),this.setMap(n),this.drawAllPolygon(n)},setMap:function(n){var o=this;n.on("zoomchange",(function(){var t=n.getZoom(),e=0===n.getAllOverlays("marker").length;e?(t<8||t>=18)&&n.setFitView():t<6&&o.drawAllPolygon(n)}))},getPosition:function(n,o){console.log("您在 ["+n.lnglat.getLng()+","+n.lnglat.getLat()+"] 的位置点击了地图"),console.log("当前地图的缩放级别为",o.getZoom())},openWindow:function(n,o,t){n.open(o,t)},closeWindow:function(n){n.close()},polygonConfig:function(n,o){return new AMap.Polygon({map:n,path:o,strokeColor:"#FF33FF",strokeOpacity:.2,strokeWeight:3,fillColor:"#1791fc",fillOpacity:.35})},drawAllPolygon:function(n){var o=this;n.clearMap();var t=[];c["b"].forEach((function(e){var a=o.polygonConfig(n,e.positionList);t.push(a),o.polygonEvent(n,e,a)})),n.add(t),n.setFitView()},polygonEvent:function(n,o,t){var e=this;t.on("mouseover",(function(t){e.polygonInfoData={name:o.name,detail:o.detail},e.polygonInfoWindow.setContent(e.polygonInfo),e.openWindow(e.polygonInfoWindow,n,t.lnglat)})),t.on("mouseout",(function(){e.closeWindow(e.polygonInfoWindow)})),t.on("click",(function(){console.log(e.polygonInfoData),e.setMarker(n)}))},setMarker:function(n){var o=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n.clearMap(),e=[],o.markers=[],o.pointDataList.forEach((function(n){""!==n.lngLat[0]&&""!==n.lngLat[1]&&e.push({lnglat:n.lngLat})})),a=new AMap.Icon({size:new AMap.Size(80,80),image:p.a,imageSize:new AMap.Size(40,40),imageOffset:new AMap.Pixel(5,8)}),i=0;i<e.length;i+=1)r=new AMap.Marker({position:e[i]["lnglat"],offset:new AMap.Pixel(-15,-15),clickable:!0,icon:a}),o.markers.push(r),r.setMap(n),n.setFitView(),o.setMarkerEvent(r,n);case 6:case"end":return t.stop()}}),t)})))()},setMarkerEvent:function(n,o){var t=this;AMap.event.addListener(n,"mouseover",(function(e){t.markerHoverEvent(e,o,n)})),AMap.event.addListener(n,"mouseout",(function(){t.closeWindow(t.markerInfoWindow)})),AMap.event.addListener(n,"click",(function(){t.markerEvent(n)}))},markerEvent:function(n){this.pointDataList.forEach((function(o){o.lngLat[0]===n.De.position.lng.toString()&&console.log(o,o.area)}))},markerHoverEvent:function(n,o,t){var e="";this.pointDataList.forEach((function(n){n.lngLat[0]===t.De.position.lng.toString()&&(e=n.area)})),this.markerInfoData={index:n.target.index,position:"[".concat(t.De.position.lng,", ").concat(t.De.position.lat,"]"),positionStr:e},this.markerInfoWindow.setContent(this.markerInfo),this.openWindow(this.markerInfoWindow,o,n.lnglat)}}},u=f,g=(t("1fdf"),t("2877")),d=Object(g["a"])(u,i,r,!1,null,"781d1393",null),m=d.exports,w={name:"ploymap1",components:{MerchantMap:m}},h=w,v=Object(g["a"])(h,e,a,!1,null,null,null);o["default"]=v.exports}}]);