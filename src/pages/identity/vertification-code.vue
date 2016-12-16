<style lang="scss">
</style>

<template lang="html">
  <div class="vl-btn vl-btn--vertification" :class="[{'vl-btn--disabled': countStatus}]" @click="startCount">{{showText}}</div>
</template>

<script>
export default {
  data () {
    return {
      initText: '获取验证码',
      totalSeconds: this.seconds,
      countStatus: 0,
      countInterval: null
    }
  },
  props: {
    seconds: {
      type: Number,
      default: 10
    }
  },
  computed: {
    showText() {
      return this.countStatus ? this.totalSeconds + 's' : this.initText
    }
  },
  ready () {},
  attached () {},
  methods: {
    startCount() {
      if (this.countStatus) {
        return
      }
      this.countStatus = 1
      this.countInterval = setInterval(() => {
        this.count()
      }, 1000)
    },
    count() {
      if (this.totalSeconds > 0) {
        this.totalSeconds--
      } else {
        this.totalSeconds = this.seconds
        clearInterval(this.countInterval)
        this.countStatus = 0
      }
    }
  },
  components: {}
}
</script>
