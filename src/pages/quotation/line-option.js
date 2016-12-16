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
    showContent: true,
    position: ['50%', 40],
    formatter(params) {
      return params[0].seriesName + params[0].value
    }
  },
  grid: [
    {
      left: '20',
      right: '20',
      top: '2%',
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
      axisLabel: {
        inside: true
      },
      axisTick: {
        show: false,
      },
      // splitNumber: 1,
      min: minData - 10,
      max: maxData + 10,
      interval: (maxData - minData + 20) / 2,
      splitLine: {
        lineStyle: {
          type: 'dashed',
        }
      },
      data: [{textStyle: {baseline: 'bottom'}},{textStyle: {baseline: 'bottom'}},{textStyle: {baseline: 'top'}}],
      // minInterval: 1,
      // boundaryGap: ['10%', '10%'],
      type: 'value'
    },
  ],
  series: [
    {
      name: '价格',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: '#008fdb'
        }
      },
      data: data
    },
  ]
}
