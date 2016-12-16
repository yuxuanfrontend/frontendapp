<style lang="scss">
</style>

<template lang="html">
  <div class="page">
    <router-view></router-view>
    <div class="toolbar">
      <div class="toolbar__item" v-for="toolbarItem in toolbarItems">
        <img :src="toolbarItem.src" alt="">
        <span>{{toolbarItem.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import quotation from '../assets/icons/quotation.png'
import quotationActive from '../assets/icons/quotation-active.png'
import applyGoods from '../assets/icons/applyGoods.png'
import applyGoodsActive from '../assets/icons/applyGoods-active.png'
import transfer from '../assets/icons/transfer.png'
import transferActive from '../assets/icons/transfer-active.png'
import personal from '../assets/icons/personal.png'
import personalActive from '../assets/icons/personal-active.png'

export default {
  data () {
    return {
      toolbarItems: [
        {
          src: quotation,
          text: '行情'
        },
        {
          src: applyGoods,
          text: '申购'
        },
        {
          src: transfer,
          text: '转让'
        },
        {
          src: personal,
          text: '我的'
        }
      ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {},
  name: 'view'
}
</script>
