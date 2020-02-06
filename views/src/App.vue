<template>
  <div id="app">
    <view-container></view-container>
  </div>
</template>

<script>
import ViewContainer from '@/pages/ViewContainer'

window.addEventListener('message', function (event) {
  console.log(`Received ${event.data} from ${event.origin}`)
})

export default {
  name: 'app',
  components: { ViewContainer }
}
</script>


<style lang="less">
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
}
</style>
