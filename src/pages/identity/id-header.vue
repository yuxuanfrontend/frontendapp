<style lang="scss" scoped>
  @import "../../styles/px2rem.scss";
  @import "../../styles/colors.scss";

  .header {
    height: px2rem(315);
    background-image: url(../../assets/images/login-stripe.png),url(../../assets/images/login-header.png);
    background-position: 0 px2rem(210), bottom left;
    background-repeat: no-repeat;
    background-size: 100%;

    &-content {
      text-align: center;
      padding-top: px2rem(70);
    }

    &-title {
      color: $color-white;
      font-weight: bold;
    }
  }
</style>

<template lang="html">
  <header class="header">
    <div class="header-content">
      <div class="header-icon"><img src="../../assets/icons/shangwen-icon.png" alt=""></div>
      <div class="header-title">引力钱币</div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>
