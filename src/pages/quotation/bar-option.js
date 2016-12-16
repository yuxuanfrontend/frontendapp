import moment from 'moment'

import lineRandomData from './random-data'

let data = lineRandomData.values,
xData = lineRandomData.xTime,
minData = _.min(data),
maxData = _.max(data)

minData = Math.floor(minData)
maxData = Math.floor(maxData)

module.exports = {
  tooltip: {
    trigger: 'axis',
    showContent: false,
    // triggerOn: 'click'
  },
  grid: [
    {
      left: '20',
      right: '2%',
      top: '0%',
    },
  ],
  xAxis: [
    {
      axisTick: {
        show: false,
      },
      type: 'category',
      min: 'dataMin',
      max: 'dataMax',
      data: xData,
      // splitNumber: 5,
      // interval: moment('30', 'mm') - moment('00', 'mm'),
      axisLabel: {
        interval: 59,
        formatter(value, index) {
          return moment(value).format('HH:mm')
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      }
    }
  ],
  yAxis: [
    {
      splitLine: {
        show: false
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        // inside: true
      },
      min: 0,
      max: maxData + 50,
      // interval: (maxData - minData) / 2,
      type: 'value',
      // gridIndex: 1,
    }
  ],
  series: [
    {
      type: 'bar',
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      // hoverAnimation: false,
      data: data
    }
  ]
}
