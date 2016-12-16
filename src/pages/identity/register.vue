<style lang="scss" scoped>
</style>

<template lang="html">
  <div class="page">
    <id-header></id-header>
    <router-view></router-view>
  </div>
</template>

<script>

import idHeader from './id-header'

export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    idHeader
  },
  name: 'register'
}
</script>
