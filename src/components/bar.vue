<template lang="html">
  <div>
    <p class="radius5">this is bar111</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
$aaa: #0f0;

.radius5 {
  display: flex;
  color: $aaa;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
