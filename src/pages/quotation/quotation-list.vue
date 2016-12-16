<style lang="scss" scoped>
@import "../../styles/px2rem.scss";
@import "../../styles/colors.scss";

.icon20 {
  width: px2rem(20);
  height: auto;
}

.icon-ml {
  margin-left: px2rem(10);
}

.quotation {
  background-color: $background-white;

  &__name {
    @include flex-start--col;
    flex: 1.6;
    text-align: left;

    &--title {
      @include flex-start;
    }
  }
  &__price {
    @include flex-center;
    flex: 1;
    color: $color-red;

    &--title {
      color: inherit;
    }
  }
  &__percent {
    @include flex-end;
    flex: 1;
    text-align: right;
  }
}

.quotation-list-title {
  @include flex-center;
  height: px2rem(88);
  background-color: $background-gray;
  padding: 0 px2rem(22);
}

.quotation-list-body {
  padding-bottom: px2rem(88+20);

  &__row {
    @include flex-center;

    height: px2rem(111);
    padding: 0 px2rem(22);
    border-bottom: 1px solid $border-gray;
  }

}

#wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  // top: 0;
  // left: 0;
  // padding-bottom: px2rem(66);
  overflow: hidden;
  box-sizing: border-box;
}
</style>

<template lang="html">
  <div class="page page--toolbar quotation">
    <div class="quotation-list-title">
      <div class="quotation__name quotation__name--title">
        <span>全部</span>
        <img src="../../assets/icons/down-gray.png" class="icon20 icon-ml">
      </div>
      <div class="quotation__price quotation__price--title" @click="sortPrice">
        <span>最新价</span>
        <img :src="priceSortSrc" class="icon20">
      </div>
      <div class="quotation__percent quotation__percent--title" @click="sortPercent">
        <span>涨跌幅</span>
        <img :src="percentSortSrc" class="icon20 icon-ml">
      </div>
    </div>
    <div id="wrapper">
      <div class="quotation-list-body">
        <pull-down :iscroll="myScroll" :endEvent="pullDown" ref="pullDown"></pull-down>
        <div class="quotation-list-body__row" v-for="(quotation, index) in quotationList" @tap="chooseList(index)">
          <div class="quotation__name">
            <span>{{quotation.name}}</span>
            <span>{{quotation.code}}</span>
          </div>
          <div class="quotation__price">{{quotation.price}}</div>
          <div class="quotation__percent">
            <div class="vl-btn vl-btn--inline vl-btn--confirm">{{quotation.percent}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import sortUp from '../../assets/icons/sort-top.png'
import sortDown from '../../assets/icons/sort-down.png'

import IScroll from 'iscroll/build/iscroll-probe'

import pullDown from '../../components/pull-down'

export default {
  data () {
    return {
      quotationList: [],

      priceSort: 0,
      percentSort: 0,

      myScroll: null,
      // pullDown: '下拉',
      // pullDownStatus: 0
    }
  },
  computed: {
    priceSortSrc() {
      return this.priceSort ? sortUp : sortDown
    },
    percentSortSrc() {
      return this.percentSort ? sortUp : sortDown
    }
  },
  mounted () {
    let arr
    for (let i = 0; i < 20; i++) {
      this.quotationList.push({
        name: '10猫1A金',
        code: '800001',
        price: '2403.36',
        percent: '+0.11%'
      })
    }
    this.$nextTick(() => {
      this.myScroll = new IScroll('#wrapper', {
        tap: true,
        scrollbars: true,
        shrinkScrollbars: 'clip',
        probeType: 2,
        bounceTime: 200
      })
    })
  },
  attached () {},
  methods: {
    sortPrice() {
      this.priceSort = this.priceSort ? 0 : 1
    },
    sortPercent() {
      this.percentSort = this.percentSort ? 0 : 1
    },
    chooseList(index) {
      console.log(222);
      this.$router.push('/quotation')
    },
    pullDown() {
      setTimeout(() => {
        this.$refs.pullDown.pullDownStatus = 0
      }, 2000)
    }
  },
  components: {
    pullDown
  },
  name: 'quotation-list'
}
</script>
