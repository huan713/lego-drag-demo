<template>
  <div class="editor">
    <editor-components
      @move="move"
      @drag-end="dragEnd"
    ></editor-components>
    <div class="editor-view" ref="viewWrap">
      <div class="editor-view-mask"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
      ></div>
      <iframe ref="view" src="http://localhost:4100/"></iframe>
    </div>
  </div>
</template>

<script>
import EditorComponents from './EditorComponents'

export default {
  name: 'Editor',
  components: { EditorComponents },
  data () {
    return {
      isInMask: false,
      viewX: 0,
      viewY: 0
    }
  },
  mounted () {
    ({ x: this.viewX, y: this.viewY } = this.$refs.viewWrap.getBoundingClientRect())
  },
  methods: {
    move (e, component) {
      if (this.isInMask) {
        const params = {
          component,
          event: 'move',
          position: {
            x: e.offsetX,
            y: e.offsetY
          }
        }
        this.$refs.view.contentWindow.postMessage(JSON.stringify(params), '*')
      }
    },
    dragEnd (e, component) {
      if (this.isInMask) {
        const params = {
          component,
          event: 'drag-end',
          position: {
            x: e.offsetX,
            y: e.offsetY
          }
        }
        this.$refs.view.contentWindow.postMessage(JSON.stringify(params), '*')
      }
    },
    mouseenter () {
      this.isInMask = true
    },
    mouseleave () {
      this.isInMask = false
    }
  }
}
</script>

<style lang="less">

.editor {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.editor-view {
  flex: 1 auto;
  overflow: hidden;
  position: relative;

  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
}

.editor-view-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>

