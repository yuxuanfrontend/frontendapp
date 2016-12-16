<style lang="scss" scoped>

</style>

<template lang="html">
  <div class="page">
    <id-header></id-header>
    <div class="identity-body">
      <div class="vl-cell vl-cell--sign">
        <div class="vl-cell__head">
          <img src="../../assets/icons/user.png" class="vl-icon">
        </div>
        <div class="vl-cell__body">
          <input type="text" class="vl-input" placeholder="ID/手机号">
        </div>
      </div>
      <div class="vl-cell vl-cell--sign">
        <div class="vl-cell__head">
          <img src="../../assets/icons/lock.png" class="vl-icon">
        </div>
        <div class="vl-cell__body">
          <input type="password" class="vl-input" placeholder="密码">
        </div>
      </div>
      <div class="vl-btn vl-btn--confirm identity-mt80" @click="login">登录</div>
      <div class="identity-body__tail"><span>忘记密码</span></div>
    </div>
  </div>
</template>

<script>

import idHeader from './id-header'

export default {
  data () {
    return {
      msg1: 'msg1',
      msg2: 'msg2'
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    login() {
      // alert('hello')
      this.$router.push('/register/step-1')
    }
  },
  components: {
    idHeader
  },
  name: 'login'
}
</script>
