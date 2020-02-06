<template>
  <div id="app">
    <view-container
      :data="data"
    ></view-container>
  </div>
</template>

<script>
import ViewContainer from '@/pages/ViewContainer'



export default {
  name: 'app',
  components: { ViewContainer },
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    window.addEventListener('message', function (e) {
      if (e && e.data && typeof e.data === 'string') {
        try {
          const data = JSON.parse(e.data)
          const { component, position, event } = data
          if (event === 'move') {
            console.log(`正在拖动 ${component} 组件，当前位置 x:${position.x}, y:${position.y}。`)
          } else {
            this.data += `放置 ${component} 组件成功，拖动位置  x:${position.x}, y:${position.y}。<br>`
          }
        } catch (err) {
          console.error(err)
        }
      }
    }.bind(this))
  }
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
