import eCharts from 'echarts'
import moment from 'moment'
import _ from 'lodash'

import lineOption from './line-option'
import barOption from './bar-option'


// let drawLineChart = function(el) {
//   let chart = null
//
//   let data = lineRandomData().values,
//   xData = lineRandomData().xTime,
//   minData = _.min(data),
//   maxData = _.max(data)
//
//   minData = Math.floor(minData)
//   maxData = Math.floor(maxData)
//   console.log(minData, maxData);
//
//   chart = eCharts.init(el)
//   chart.setOption({
//     tooltip: {
//       trigger: 'axis',
//       showContent: false,
//       // triggerOn: 'click'
//     },
//     grid: [
//       {
//         left: '20',
//         right: '2%',
//         height: '60%'
//       },
//       {
//         left: '20',
//         right: '2%',
//         top: '75%',
//         height: '20%'
//       }
//     ],
//     xAxis: [
//       {
//         axisTick: {
//           show: false,
//         },
//         type: 'category',
//         min: 'dataMin',
//         max: 'dataMax',
//         data: xData,
//         // splitNumber: 5,
//         // interval: moment('30', 'mm') - moment('00', 'mm'),
//         axisLabel: {
//           show: false,
//           interval: 59,
//           // formatter(value, index) {
//           //   return moment(value).format('HH:mm')
//           // }
//         },
//         splitLine: {
//           show: true,
//           lineStyle: {
//             type: 'dashed'
//           }
//         }
//       },
//       {
//         axisTick: {
//           show: false,
//         },
//         gridIndex: 1,
//         type: 'category',
//         min: 'dataMin',
//         max: 'dataMax',
//         data: xData,
//         // splitNumber: 5,
//         // interval: moment('30', 'mm') - moment('00', 'mm'),
//         axisLabel: {
//           interval: 59,
//           formatter(value, index) {
//             return moment(value).format('HH:mm')
//           }
//         },
//         splitLine: {
//           show: true,
//           lineStyle: {
//             type: 'dashed'
//           }
//         }
//       }
//     ],
//     yAxis: [
//       {
//         axisLabel: {
//           inside: true
//         },
//         axisTick: {
//           show: false,
//         },
//         // splitNumber: 1,
//         min: minData - 10,
//         max: maxData + 10,
//         interval: (maxData - minData + 20) / 2,
//         splitLine: {
//           lineStyle: {
//             type: 'dashed',
//           }
//         },
//         data: [{textStyle: {baseline: 'bottom'}},{textStyle: {baseline: 'bottom'}},{textStyle: {baseline: 'top'}}],
//         // minInterval: 1,
//         // boundaryGap: ['10%', '10%'],
//         type: 'value'
//       },
//       {
//         splitLine: {
//           show: false
//         },
//         axisTick: {
//           show: false,
//         },
//         axisLabel: {
//           show: false,
//           // inside: true
//         },
//         min: 0,
//         max: maxData + 50,
//         // interval: (maxData - minData) / 2,
//         type: 'value',
//         gridIndex: 1,
//       }
//     ],
//     series: [
//       {
//         name: '价格',
//         type: 'line',
//         showSymbol: false,
//         hoverAnimation: false,
//         itemStyle: {
//           normal: {
//             color: '#008fdb'
//           }
//         },
//         data: data
//       },
//       {
//         type: 'bar',
//         xAxisIndex: 1,
//         yAxisIndex: 1,
//         // hoverAnimation: false,
//         data: data
//       }
//     ]
//   })
//
//   // chart.on('mousemove', (params) => {
//   //   console.log(params.componentType);
//   // })
//   //
//   // eCharts.connect([chart])
//
//   return chart
// }

let drawLineChart = function(type, el) {
  let chart = null

  chart = eCharts.init(el)
  if (type === 'line') {
    chart.setOption(lineOption)
  } else if (type === 'bar') {
    chart.setOption(barOption)
  }

  // chart.on('mousemove', (params) => {
  //   console.log(params.componentType);
  // })
  //
  // eCharts.connect([chart])

  return chart
}

module.exports = drawLineChart;
