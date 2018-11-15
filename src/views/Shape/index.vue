
<template>
  <div>
    <h3> all the shape</h3>
    <div class="cont">
      <div v-loading="lineLoad" id="line"/>
      <div v-loading="barLoad" id="bar"/>
      <div id="pie"/>
      <!-- <div id="scatter"></div> -->
      <div id="heatMap"/>
      <div id="sunburst"/>
      <div id="Funnel"/>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line
import { getDomById } from "@/utils";
import {
  hours,
  days,
  hData,
  sunColor,
  sunBgColor,
  sunStyle,
  sunData
  // eslint-disable-next-line
} from "./json";
var heatData = hData.map(function(item) {
  return [item[1], item[0], item[2] || '-']
})
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line') // line
require('echarts/lib/chart/bar') // bar
require('echarts/lib/chart/pie') // pie
require('echarts/lib/chart/scatter') // scatter
require('echarts/lib/chart/heatmap') // heatmap
require('echarts/lib/chart/sunburst') // sunburst
require('echarts/lib/chart/Funnel') // sunburst
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

for (var j = 0; j < sunData.length; ++j) {
  var level1 = sunData[j].children
  for (var i = 0; i < level1.length; ++i) {
    var block = level1[i].children
    var bookScore = []
    var bookScoreId
    for (var star = 0; star < block.length; ++star) {
      var style = (function(name) {
        switch (name) {
          case '5☆':
            bookScoreId = 0
            return sunStyle.star5
          case '4☆':
            bookScoreId = 1
            return sunStyle.star4
          case '3☆':
            bookScoreId = 2
            return sunStyle.star3
          case '2☆':
            bookScoreId = 3
            return sunStyle.star2
        }
      })(block[star].name)

      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      }

      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        }
        block[star].children.forEach(function(book) {
          book.value = 1
          book.itemStyle = style

          book.label = {
            color: style.color
          }

          var value = 1
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5
          }

          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value
          } else {
            bookScore[bookScoreId] = {
              color: sunColor[bookScoreId],
              value: value
            }
          }
        })
      }
    }

    level1[i].itemStyle = {
      color: sunData[j].itemStyle.color
    }
  }
}
export default {
  name: 'ShapeAll',
  data() {
    return {
      lineLoad: true,
      line: {
        title: {
          text: 'Step Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Step Start', 'Step Middle', 'Step End']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: []
          },
          {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: []
          },
          {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: []
          }
        ]
      },
      barLoad: true,
      bar: {
        title: {
          text: 'Step Bar'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['利润', '支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        series: [
          {
            name: '利润',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data: [200, 170, 240, 244, 200, 220, 210]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data: [320, 302, 341, 374, 390, 450, 420]
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'left'
              }
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      },
      pie: {
        title: {
          text: 'Step Pie'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: [
            '直达',
            '营销广告',
            '搜索引擎',
            '邮件营销',
            '联盟广告',
            '视频广告',
            '百度',
            '谷歌',
            '必应',
            '其他'
          ]
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直达', selected: true },
              { value: 679, name: '营销广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 335, name: '直达' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1048, name: '百度' },
              { value: 251, name: '谷歌' },
              { value: 147, name: '必应' },
              { value: 102, name: '其他' }
            ]
          }
        ]
      },
      scatter: {
        title: {
          text: 'Punch Card of Github',
          link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
        },
        legend: {
          data: ['Punch Card'],
          left: 'right'
        },
        polar: {},
        tooltip: {
          formatter: function(params) {
            return (
              params.value[2] +
              ' commits in ' +
              hours[params.value[1]] +
              ' of ' +
              days[params.value[0]]
            )
          }
        },
        angleAxis: {
          type: 'category',
          data: hours,
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#999',
              type: 'dashed'
            }
          },
          axisLine: {
            show: false
          }
        },
        radiusAxis: {
          type: 'category',
          data: days,
          axisLine: {
            show: false
          },
          axisLabel: {
            rotate: 45
          }
        },
        series: [
          {
            name: 'Punch Card',
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: function(val) {
              return val[2] * 2
            },
            data: hData,
            animationDelay: function(idx) {
              return idx * 5
            }
          }
        ]
      },
      heatMap: {
        title: {
          text: 'Step heatMap'
        },
        tooltip: {
          position: 'top'
        },
        animation: false,
        grid: {
          height: '50%',
          y: '10%'
        },
        xAxis: {
          type: 'category',
          data: hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%'
        },
        series: [
          {
            name: 'Punch Card',
            type: 'heatmap',
            data: heatData,
            label: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      sunburst: {
        backgroundColor: sunBgColor,
        color: sunColor,
        series: [
          {
            type: 'sunburst',
            center: ['50%', '48%'],
            data: sunData,
            sort: function(a, b) {
              if (a.depth === 1) {
                return b.getValue() - a.getValue()
              } else {
                return a.dataIndex - b.dataIndex
              }
            },
            label: {
              rotate: 'radial',
              color: sunBgColor
            },
            itemStyle: {
              borderColor: sunBgColor,
              borderWidth: 2
            },
            levels: [
              {},
              {
                r0: 0,
                r: 40,
                label: {
                  rotate: 0
                }
              },
              {
                r0: 40,
                r: 105
              },
              {
                r0: 115,
                r: 140,
                itemStyle: {
                  shadowBlur: 2,
                  shadowColor: sunColor[2],
                  color: 'transparent'
                },
                label: {
                  rotate: 'tangential',
                  fontSize: 10,
                  color: sunColor[0]
                }
              },
              {
                r0: 140,
                r: 145,
                itemStyle: {
                  shadowBlur: 80,
                  shadowColor: sunColor[0]
                },
                label: {
                  position: 'outside',
                  textShadowBlur: 5,
                  textShadowColor: '#333'
                },
                downplay: {
                  label: {
                    opacity: 0.5
                  }
                }
              }
            ]
          }
        ]
      },
      Funnel: {
        title: {
          text: '漏斗图',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ['展现', '点击', '访问', '咨询', '订单']
        },
        calculable: true,
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            // x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: [
              { value: 60, name: '访问' },
              { value: 40, name: '咨询' },
              { value: 20, name: '订单' },
              { value: 80, name: '点击' },
              { value: 100, name: '展现' }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    const line = echarts.init(getDomById('line'))
    const bar = echarts.init(getDomById('bar'))
    const pie = echarts.init(getDomById('pie'))
    const heatMap = echarts.init(getDomById('heatMap'))
    const sunburst = echarts.init(getDomById('sunburst'))
    const Funnel = echarts.init(getDomById('Funnel'))
    // const scatter = echarts.init(getDomById('scatter'))
    this.getShapeData().then(res => {
      setTimeout(() => {
        console.log(res)
        this.lineLoad = false
        res.line.forEach((item, index) => {
          this.line.series[index].data = item
          this.bar.series[index].data = item
        })
        line.setOption(this.line)
        this.barLoad = false
        bar.setOption(this.bar)
      }, 3000)
    })
    // 绘制图表
    // line.setOption(this.line)

    pie.setOption(this.pie)
    heatMap.setOption(this.heatMap)
    sunburst.setOption(this.sunburst)
    Funnel.setOption(this.Funnel)
    // scatter.setOption(this.scatter)
    window.onresize = () => {
      line.resize()
      bar.resize()
      pie.resize()
      heatMap.resize()
      sunburst.resize()
      // eslint-disable-next-line
    };
  },
  methods: {
    getShapeData() {
      return this.$store.dispatch('getShapeData')
    }
  }
}
</script>

<style lang='less' scoped>
.cont {
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 100%;
    height: 400px;
  }
}
// #bar {
//   width: 300px;
//   height: 300px;
//   // height: 300px;
//   // background: blue;
// }
// #pie {
//   width: 100%;
//   height: 300px;
//   // height: 500px;
// }
</style>
