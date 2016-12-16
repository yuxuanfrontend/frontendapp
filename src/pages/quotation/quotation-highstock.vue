<style lang="scss" scoped>
@import "../../styles/px2rem.scss";
@import "../../styles/colors.scss";

.chart {
  width: px2rem(450);
  height: px2rem(600);
}
.chart-bar {
  width: px2rem(450);
  height: px2rem(300);
}
</style>

<template lang="html">
  <div class="page">
    <p>时间:{{chartSelectedData.time}} 价格:{{chartSelectedData.price}} 成交:{{chartSelectedData.quality}}</p>
    <div class="chart" ref="line"></div>
    <div class="chart-bar" ref="bar"></div>
    <button @click="addMouseOver">add mouseOver</button>
  </div>
</template>

<script>

import moment from 'moment'

import ajax from 'superagent'

import {drawLineChart} from './drawHighstockChart'

export default {
  data () {
    return {
      lineChart: {},
      data: [],
      yesterdayClose: 475,
      chartSelectedData: {
        time: '',
        price: '',
        quality: ''
      }
    }
  },
  computed: {},
  mounted () {
    this.$nextTick(() => {
      this.getLineChartData(() => {
        this.lineChart = drawLineChart(this.$refs.line, this.data, this.yesterdayClose)
      })
    })
  },
  attached () {},
  methods: {
    getLineChartData(callback) {
      let params = {
        symbol: 6006003,
        interval: '1m',
        startTime: new Date().setHours(9, 30, 0, 0),
        endTime: new Date().setHours(15, 0, 0, 0)
      }

      ajax.post('http://dev-oauth.yinli99.com/api/bijie/market/text')
      .set('X-MBX-APIKEY', 'nVH9hZaZgtUZ77orAukwx2mivFCcDxMb3tCq')
      .set('Content-Type', 'application/json')
      .send(`https://www.yinli99.com/mktdata/klines?symbol=${params.symbol}&interval=${params.interval}&startTime=${params.startTime}&endTime=${params.endTime}`)
      .then((res) => {
        this.data = JSON.parse(res.text).map((item) => {
          return [item[0], Number(item[4]), Number(item[5])]
        })
        callback && callback()
      })
    },

    addMouseOver() {
      let series = this.lineChart.series[0]
      let _this = this

      series.update({
        point: {
          events: {
            mouseOver() {
              _this.chartSelectedData.time = moment(this.x).format('H:mm')
              _this.chartSelectedData.price = this.y
              // _this.chartSelectedData.quality = this.y
              // console.log(this.y);
            }
          }
        }
      })
    }
  },
  components: {}
}
</script>
