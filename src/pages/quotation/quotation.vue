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
    <div class="chart" ref="line" @touchmove="showAxis"></div>
    <div class="chart-bar" ref="bar" @touchmove="showAxis"></div>
  </div>
</template>

<script>

import eCharts from 'echarts'
import timeSharing from './time-sharing-chart'
import moment from 'moment'

export default {
  data () {
    return {
      lineChart: null,
      barChart: null
    }
  },
  computed: {},
  mounted () {
    this.$nextTick(() => {
      this.lineChart = timeSharing('line', this.$refs.line)
      this.barChart = timeSharing('bar', this.$refs.bar)
      this.lineChart.group = 'group1'
      this.barChart.group = 'group1'
      eCharts.connect('group1')
    })
  },
  attached () {},
  methods: {
    showAxis(e) {
      console.log(2222);
      this.lineChart.dispatchAction({
        type: 'showTip',
        // x: '50%',
        // y: 40,
        position: ['50%', 40]
        // seriesIndex: 2
      })
    }
  },
  components: {}
}
</script>
