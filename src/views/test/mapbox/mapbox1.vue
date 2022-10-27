<template>
  <section class="glmap_wrap">
    <tab ref="tabRef" class="map_tab f-fl" :tabList="tabListData"  @checkTab="checkTab" v-if="tabListData.length !== 0" />

    <div id='glMap' class="glMap_cont" style='width: 100%; height: 100%;'></div>
  </section>
</template>

<script>
// map-core
import * as mapUtils from './mapUtils'

import {
  pointData0, 
  pointData1, pointData2, 
  pointData3, pointData3sh, pointData3js,
  pointData4, pointData4js, pointData4xj, pointData4jx,
  pointData5, pointData5gx,
  pointData6, pointData6sc, pointData6gx,
  pointData7
} from './mapData/pointData'

import Tab from './Tab'

export default {
  name: "mapbox1",

  components: {
    Tab
  },

  data() {
    return {
      glMap: null,
      tabListData: ['浙江0', '浙江', '上海', '江苏', '新疆', '广西', '四川', '江西'],
      mainPopupData: {
        mpdt0: 'xxx',
      }, 
      type0Data: {
        type0dt1: 'xxxx',
        type0dt2: 'xxxx',
        type0table: {
          columns: ['指标', '数据'],
          type0tbData: [
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: '123',
                unit: '万'
              }
            },
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: '456',
                unit: '万'
              }
            },
          ]
        }
      },
      tabCurrent: '浙江0'
    }
  },

  computed: {
    mainPopup() {
      return `<section class="popupp_wrap main_popupp">
                <ul>
                  <li>${this.mainPopupData.mpdt0}</li>
                </ul>
              </section>`
    },
    // type0气泡
    type0Popup() {
      /**
       * table
       */
      let tbThStr = '' 
      let tbTbdStr = '' 
      this.type0Data.type0table.columns.forEach(item=> {
        tbThStr += `<th>${item}</th>`
      })
      this.type0Data.type0table.type0tbData.forEach(item=> {
        tbTbdStr += `<tr>
          <td>${item.cszhtdCol1}</td> 
          <td>${typeof item.cszhtdCol2 === 'object' ? '<span>'+ item.cszhtdCol2.num +'</span>' + item.cszhtdCol2.unit : item.cszhtdCol2}</td> 
        </tr>`
      })

      return `<section class="popupp_wrap gaosushiyou_popupp">
                <ul>
                  <li>名称：${this.type0Data.type0dt1}</li>
                  <li>简介：${this.type0Data.type0dt2}</li>
                </ul>
                <table>
                  <thead>
                    <tr>
                      ${tbThStr}
                    </tr>
                  </thead>
                  <tbody>
                      ${tbTbdStr}
                  </tbody>
                </table>
              </section>`
    },  
  },

  methods: {
    /**
     * tools
     */
    // 点击选项卡
    checkTab(val) {
      // console.log(val)

      this.tabCurrent = val

      this.initMap()
    },

    /**
     * map init
     */
    // 重置地图
    resetMap(next) {
      this.removeAllMarker()

      if(this.glMap) {
        this.glMap.remove()
      }

      if(next) {
        next()
      }
    },
    // 初始化地图
    initMapConfig(next) {
      this.resetMap(()=> {
        next()

        // console.log('开始打点')
        mapUtils.setMapConfig(this.glMap)  // 地图配置
        this.glmapEvent()  // 绑定事件
      })
    },

    /**
     * map tools
     */
    // 移除所有标注
    removeAllMarker() {
      // console.log("移除所有标注")

      // 清除气泡
      this.removePopup()

      // 清除标注
      let markerList = document.querySelectorAll('.map_marker')
      // console.log(markerList)
      if(markerList.length !== 0) {
        let markerParentNode = markerList[0].parentNode

        markerList.forEach(item=> {
          // console.log(item)
          markerParentNode.removeChild(item)
        })
      }
    },
    // 移除气泡
    removePopup() {
      let mapNode = document.querySelector('#glMap')
      // console.log(mapNode)

      let popupNode = document.querySelectorAll('.maplibregl-popup')
      if(popupNode.length !== 0) {
        mapNode.removeChild(popupNode[0])
      }
    },

    /**
     * map core
     */
    // 绑定点击事件
    glmapEvent() {
      /* // 监听地图缩放事件
      this.glMap.on('moveend', e => {
      });
      // 移入地图
      this.glMap.on('mouseover', e => {
      }); */

      // 地图点击事件
      this.glMap.on('click', e => {
        this.clickMap(e.lngLat)
      });

      // reload
      this.glMap.on('load', () => {
        this.$nextTick(()=> {
          this.getImgMarker()  // 设置图片标注
        })
      });
    },
    // 点击地图
    clickMap(lngLat) {
      console.log(lngLat)
    },
    
    /**
     * 配置标注
     * @param {*} lonlat 经纬度  [120.5, 30]
     * @param {*} mapPopup  气泡
     * @param {*} markerClass  标注样式
     */
    setMarkerConfig(lonlat, mapPopup, markerClass, isTab=false, item) {
      // console.log()
      let popup = mapUtils.setPopupCommon(this.glMap, lonlat, mapPopup)  // 气泡

      let el = document.createElement('div');
      el.className = `map_marker ${markerClass}`;

      // 设置标注
      mapUtils.setMarkerCommon(el, lonlat, popup, this.glMap)
    },
    // 判断标注
    checkMapMarker(item, label, popup, node) {
      if(node) {
        if(item.business_type.search(label) === 0) {
          this.setMarkerConfig([item.longitude, item.latitude], popup, node)
        }
      } else {
        node = popup
        popup = label
        
        this.setMarkerConfig([item.longitude, item.latitude], popup, node)
      }
    },
    // 设置图片标注
    getImgMarker() {
      console.log(
        // pointData0, 
        // pointData1, pointData2, 
        // pointData3, pointData3sh, pointData3js,
        // pointData4, pointData4js, pointData4xj, pointData4jx,
        // pointData5, pointData5gx,
        // pointData6, pointData6sc, pointData6gx,
        // pointData7
      )
      /* this.mapDataList.forEach(item=> {
        switch(item.newcompany_id) {
          case '3':
            this.setType0Marker(item)  // type0标注
            break
          default:
            this.setMainMarker(item)  // 首页
        }
      }) */
    },
    // 配置地图标注
    setMainMarker(item) {
      this.mainPopupData = {
        mpdt0: item.xxx,
      }
      mapUtils.setPopupCommon(this.glMap, lonlat, this.mainPopup)  // 浙江气泡
    },
    // type0标注
    setType0Marker(item) {
      // console.log(item.shop_name, item.adress)

      this.type0Data = {
        type0dt1: item.x1,
        type0dt2: item.x2,
        type0table: {
          columns: ['指标', '数据'],
          type0tbData: [
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: item.x3,
                unit: '万'
              }
            },
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: item.x4,
                unit: '万'
              }
            },
          ]
        }
      }

      this.checkMapMarker(item, '肯德基', this.type0Popup, 'map6_mksty1')
    },

    /**
     * map render
     */
    // 初始化首页浙江
    initZheJiangIndex() {
      this.glMap = mapUtils.zhejiangMapIndex()
      // 定制geojson并渲染
      mapUtils.renderGeoToZheJiangIndex(this.glMap, textContent=> {
        // 为字符串时为区域
        // this.$emit('getMapAreaData', textContent)
      })  
    },
    // 初始化浙江
    initZheJiang() {
      this.glMap = mapUtils.zhejiangMap()
      mapUtils.renderGeoToZheJiang(this.glMap)
    },
    // 初始化上海
    initShangHai() {
      this.glMap = mapUtils.shanghaiMap()
      mapUtils.renderGeoToShangHai(this.glMap)
    },
    // 初始化江苏
    initJiangSu() {
      this.glMap = mapUtils.jiangsuMap()
      mapUtils.renderGeoToJiangSu(this.glMap)
    },
    // 初始化新疆
    initXingJiang() {
      this.glMap = mapUtils.xinjiangMap()
      mapUtils.renderGeoToXingJiang(this.glMap)
    },
    // 初始化广西
    initGuangXi() {
      this.glMap = mapUtils.guangxiMap()
      mapUtils.renderGeoToGuangXi(this.glMap)
    },
    // 初始化四川
    initSichuan() {
      this.glMap = mapUtils.sichuanMap()
      mapUtils.renderGeoToSichuan(this.glMap)
    },
    // 初始化江西
    initJiangxi() {
      this.glMap = mapUtils.jiangxiMap()
      mapUtils.renderGeoToJiangXi(this.glMap)
    },

    /**
     * 业务
     */
    // 设置地图
    initMap() {
      this.initMapConfig(()=> {
        switch(this.tabCurrent) {
          case '浙江0':
          this.initZheJiangIndex()  // 初始化首页浙江
          break
          case '浙江':
          case '省内':
            this.initZheJiang()  // 初始化子公司浙江
            break
          case '上海':
            this.initShangHai()
            break
          case '江苏':
            this.initJiangSu()
            break
          case '新疆':
            this.initXingJiang()
            break
          case '广西':
            this.initGuangXi()
            break
          case '四川':
            this.initSichuan()
            break
          case '江西':
            this.initJiangxi()
            break
          default:
            this.initZheJiang()
        }
      })
    },
  },

  created() {
    this.$nextTick(()=> {
      this.initMap()
    })
  },

  destroyed() {
    if(this.glMap) {
      this.glMap.remove()
    }
  },
}
</script>

<style lang="less" scoped>
@import url('./less/marker');

@popupBg: rgba(12,38,77,0.7500);

.glmap_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #091f3f;

  .map_tab {
    position: absolute;
    left: 30px;
    top: 30px;
    z-index: 1;
  }

  .glMap_cont {
    background: #000;

    .title {
      color: #fff;
    }
  }

  // 地图样式
  ::v-deep .maplibregl-map {
    // 气泡
    .maplibregl-popup {
      max-width: 260px !important;

      &.maplibregl-popup-anchor-top {
        .maplibregl-popup-tip {
          border-bottom-color: @popupBg;
        }
      }
      &.maplibregl-popup-anchor-bottom {
        .maplibregl-popup-tip {
          border-top-color: @popupBg;
        }
      }
      &.maplibregl-popup-anchor-left {
        .maplibregl-popup-tip {
          border-right-color: @popupBg;
        }
      }
      &.maplibregl-popup-anchor-right {
        .maplibregl-popup-tip {
          border-left-color: @popupBg;
        }
      }

      .maplibregl-popup-content {
        width: 100%;
        padding-top: 12px;
        border-top: solid 2px #3395be;
        background: rgba(12,38,77,0.7500);

        &>button {
          display: none;
        }

        .popupp_wrap {
          dt,dd,li,span,b,td {
            font-size: 12px;
          }

          table {
            width: 100%;
            margin-top: 10px;

            thead, tbody {
              th, td {
                padding: 2px 8px;

                &:first-child {
                  text-align: left;
                }
                &:last-child {
                  text-align: right;
                }
              }
            }

            thead {
              margin-bottom: 5px;

              tr {
                th {
                  font-weight: bold;
                  color: #58B2FF;
                }
              }
            }
            tbody {
              tr {
                td {
                  span {
                    margin-right: 6px;
                    color: #58B2FF;
                  }
                }

                &:nth-child(odd) {
                  background: rgba(79,135,228,0.2000);;
                }
              }
            }
          }

          // 首页大屏
          &.main_popupp {
            ul {
              li {
                span {
                  color: #34FFF0;
                  margin-left: 0px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>