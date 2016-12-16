<style lang="css">
</style>

<template lang="html">
  <div class="vl-pulldown vl-pulldown__display"
  :class="{'vl-pulldown--loading': pullDownStatus === 1 || pullDownStatus === 2, 'vl-pulldown--cancel': pullDownStatus === 3}"
  ref="pullDown"
  id="pull-down">{{pullDown}}</div>
</template>

<script>
export default {
  data () {
    return {
      pullDownStatus: 0,
    }
  },
  computed: {
    pullDown() {
      switch (this.pullDownStatus) {
        case 0:
          return '下拉'
          break
        case 1:
          return '松手'
          break
        case 2:
          return '加载'
          break
        case 3:
          return '下拉'
          break
      }
    },
    myScroll() {
      return this.iscroll || {}
    }
  },
  props: {
    iscroll: {
      required: true
    },
    endEvent: {
      type: Function
    }
  },
  mounted () {
  },
  attached () {},
  methods: {
    scroll() {
      // 得到下拉块的高度
      let pullDownHeight = this.$refs.pullDown.offsetHeight

      // 下拉超过一定距离 进入状态1
      if (this.myScroll.y > pullDownHeight && (this.pullDownStatus === 0 || this.pullDownStatus === 3)) {

        this.pullDownStatus = 1
        this.myScroll.scrollTo(0, 0)
      }

      // 下拉少于一定距离 进入状态3
      if (this.myScroll.y < 0 && this.pullDownStatus === 1) {
        this.pullDownStatus = 3

        this.myScroll.scrollTo(0, pullDownHeight)
      }
    },

    scrollEnd() {
      // 放手滚动停止后 进入状态2
      if (this.pullDownStatus === 1) {
        this.pullDownStatus = 2
        this.endEvent && this.endEvent()

        if (!this.endEvent) {
          setTimeout(() => {
            this.pullDownStatus = 0
          }, 2000)
        }
      }

    }
  },
  components: {},
  watch: {
    // 因为iscroll初始化的缘故 必须监听改变 在初始化后才能使用
    iscroll(val) {
      if (typeof val === 'object') {
        val.on('scroll', this.scroll)
        val.on('scrollEnd', this.scrollEnd)
      }
    }
  }
}
</script>
