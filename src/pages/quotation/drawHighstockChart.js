import highstock from 'highcharts/highstock'

// import data from './random-data'

import _ from 'lodash'
import moment from 'moment'

// let dealedData = _.zip(data.xTime, data.values)

function appendTimeData(data) {
  let startTime = moment(new Date().setHours(9, 30, 0, 0))
  let endTime = moment(new Date().setHours(15, 0, 0, 0))
  let middleClose = moment(new Date().setHours(11, 30, 0, 0))
  let middleOpen = moment(new Date().setHours(13, 0, 0, 0))
  let dataLastTime = moment(data[data.length - 1].x)

  while (dataLastTime < endTime) {
    dataLastTime.add(1, 'm')

    if (dataLastTime >= middleClose && dataLastTime < middleOpen) {
      dataLastTime = middleOpen
      data.push({
        x: dataLastTime.valueOf(),
      })
    } else {
      data.push({
        x: dataLastTime.valueOf(),
      })
    }
  }
}

function createColumnData(data, yesterdayClose) {
  let lastPrice = yesterdayClose, columnData = []
  let certainTime = moment(new Date().setHours(10, 57, 0, 0))

  let increaseColor = '#f24957',
  decreaseColor = '#1dbf60'

  _.each(data, (item) => {
    if (certainTime.valueOf() === item[0]) {
      // console.log(item[1]);
      // console.log(lastPrice);
    }
    columnData.push({
      x: item[0],
      y: item[2],
      color: item[1] >= lastPrice ? increaseColor : decreaseColor
    })
    lastPrice = item[1]
  })

  return columnData
}

export const drawLineChart = function(ele, data, yesterdayClose) {

  let lineChart

  let lineData = [], columnData = []
  _.each(data, (item) => {
    lineData.push({
      x: item[0],
      y: item[1]
    })
  })

  columnData = createColumnData(data, yesterdayClose)
  appendTimeData(lineData)
  appendTimeData(columnData)

  highstock.setOptions({

    global: {
      useUTC: false
    },

  })

  lineChart =  highstock.stockChart(ele, {

    // 禁掉不需要的组件
    credits: {
      enabled: false
    },
    tooltip: {
      // animation: false,
      enabled: false,
      // followTouchMove: false,
      // backgroundColor: 'white',
      // borderWidth: 0,
      // borderRadius: 0,
      // shadow: false,
      // padding: 0,
      // headerFormat: '',
      // positioner() {
      //   return {
      //     x: 10,
      //     y: 10
      //   }
      // }
    },
    navigator: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    rangeSelector: {
      enabled: false
    },
    exporting: {
      enabled: false
    },

    chart: {
      panning: false,
      pinchType: 'none',
      className: 'lineSeries',
    },

    // labels: {
    //   items: [{
    //     html: '<span>fdsafeafe</span>',
    //     style: {
    //       left: '50px',
    //       top: '50px'
    //     }
    //   }],
    //   style: {
    //     'color': '#ff0000'
    //   }
    // },

    plotOptions: {
      line: {
        states: {
          hover: false,   // hover的时候图线不高亮
        },
        marker: {
          states: {
            hover: {
              enabled: false,   // hover的时候点不高亮
            }
          }
        }
      }
    },

    // x轴设置
    xAxis: [
      {
        showFirstLabel: true,
        showLastLabel: true,
        startOnTick: true,
        // min: new Date().setHours(9, 30, 0, 0),
        // max: new Date().setHours(15, 0, 0, 0),
        endOnTick: true,
        crosshair: {
          width: 0,
          color: '#f00',
          zIndex: 100,
          snap: false
        },
        labels: {
          formatter() {
            return highstock.dateFormat('%H:%M ', this.value)
          }
        },
        tickPositioner() {
          let positions = []

          let min = this.dataMin
          let max = this.dataMax
          let startTime = min

          while(startTime <= max) {
            positions.push(startTime)
            if (startTime === min + 3600000 * 2) {
              startTime += 3600000 * 2 + 1800000
            } else {
              startTime += 3600000
            }
          }

          return positions
        }
      }
    ],

    // y轴设置
    yAxis: [
      {
        gridLineWidth: 0.5,
        opposite: false,
        tickAmount: 3,
        showFirstLabel: true,
        showLastLabel: true,
        lineWidth: 1,
        tickPositioner() {
          let extend = Math.max(Math.abs(yesterdayClose - this.dataMin), Math.abs(yesterdayClose - this.dataMax)),
          min = (yesterdayClose - extend * 1.1).toFixed(2),
          max = (yesterdayClose + extend * 1.1).toFixed(2)

          return [min, yesterdayClose, max]
        },

        labels: {
          align: 'left',
          x: 2,
          format: '{value}'
        },

        plotLines: [
          {
            value: yesterdayClose,
            width: 1,
            color: 'green',
            dashStyle: 'dash',
          }
        ],

        height: '60%',
      },
      {
        gridLineWidth: 0.5,
        opposite: true,
        tickAmount: 3,
        showFirstLabel: true,
        showLastLabel: true,
        lineWidth: 1,
        visible: true,
        // min: -100,
        // max: 100,

        labels: {
          align: 'right',
          x: -4,
          formatter() {
            return ((this.value - yesterdayClose) / yesterdayClose * 100).toFixed(2) + '%'
          }
        },
        tickPositioner() {
          let extend = Math.max(Math.abs(yesterdayClose - this.dataMin), Math.abs(yesterdayClose - this.dataMax))

          return [yesterdayClose - extend * 1.1, yesterdayClose, yesterdayClose + extend * 1.1]
        },

        height: '60%',
      },
      {
        labels: {
          align: 'left',
          x: 2,
          format: '{value}'
        },
        opposite: false,
        top: '65%',
        height: '35%',
        offset: 0,
        showFirstLabel: false,
        lineWidth: 1
      }
    ],

    series: [
      {
        name: 'value',
        data: lineData,
        yAxis: 0,
        tooltip: {
          valueDecimals: 2
        },
        dataGrouping: {
          enabled: false,
        },
        tooltip: {
          pointFormat: '<span>{point.y}</span>',
        },
        events: {
        },
        point: {
          events: {
          }
        }
      },
      {
        // compare: 'percent',
        name: 'AAPL Stock Price',
        data: lineData,
        onSeries: 'candlestick',
        color: 'transparent',
        yAxis: 1,
        tooltip: {
          valueDecimals: 2,
          enabled: false,
          pointFormat: '',
        },
        style: {
          fontSize: '0px',
          fontWeight: '0',
          textAlign: 'center'
        },
      },
      {
        type: 'column',
        name: '成交量',
        data: columnData,
        maxPointWidth: 1,
        tooltip: {
          valueDecimals: 2,
          enabled: false,
          pointFormat: '',
        },
        dataGrouping: {
          enabled: false,
          forced: true
        },
        color: '#00f',
        yAxis: 2
      }
    ]
  })

  document.querySelector('.lineSeries').addEventListener('touchmove', function(event) {
    console.log(event.touches[0].pageX);
  })

  return lineChart
}
