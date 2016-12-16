<style lang="css">
</style>

<template lang="html">
  <div class="identity-body">
    <div class="vl-cell vl-cell--sign">
      <div class="vl-cell__head">
        <img src="../../assets/icons/phone.png" class="vl-icon">
      </div>
      <div class="vl-cell__body">
        <input type="number" class="vl-input" placeholder="输入手机号">
      </div>
    </div>
    <div class="vl-cell vl-cell--sign">
      <div class="vl-cell__head">
        <img src="../../assets/icons/lock.png" class="vl-icon">
      </div>
      <div class="vl-cell__body">
        <input type="text" class="vl-input" placeholder="验证码">
      </div>
      <div class="vl-cell__foot">
        <vertification-code :seconds="60"></vertification-code>
        <!-- <span>获取验证码</span> -->
      </div>
    </div>
    <div class="vl-btn vl-btn--confirm identity-mt80" @click="registerNext">下一步</div>
    <div class="identity-body__tail identity-body__tail--disabled"><span>点击下一步即表示同意《风险提示书》和《入市协议》</span></div>
  </div>
</template>

<script>

import vertificationCode from './vertification-code'

export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    registerNext() {
      this.$router.push('/register/step-2')
    }
  },
  components: {
    vertificationCode
  },
  name: 'register-step1'
}
</script>
