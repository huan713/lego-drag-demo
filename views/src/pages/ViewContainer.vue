<template>
  <div class="lego-view" v-html="data"></div>
</template>

<script>
export default {
  name: 'ViewContainer',
  props: {
    data: String
  }
}
</script>

<style lang="less">
.lego-view {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
