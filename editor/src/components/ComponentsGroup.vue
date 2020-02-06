<template>
  <div class="components-group">
    <div class="components-group-title">
      <i
        class="components-group-expand-icon"
        :class="expand ? 'el-icon-minus' : 'el-icon-plus'"
        @click="toggleExpand"
      />
      <span>{{ label }}</span>
    </div>
    <div class="components-group-content" v-show="expand">
      <div
        class="component-item"
        v-for="(item, index) in components"
        :key="index"
        @mousedown="mousedownEvent($event, item.component)"
      >{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsGroup',
  props: {
    label: String,
    components: Array,
    defaultExpand: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      expand: true,
      movingComponent: ''
    }
  },
  mounted () {
    this.expand = this.defaultExpand
  },
  methods: {
    toggleExpand () {
      this.expand = !this.expand
    },
    mousedownEvent (e, component) {
      this.movingComponent = component
      window.addEventListener('mouseup', this.mouseupEvent)
      window.addEventListener('mousemove', this.mousemoveEvent)
    },
    mouseupEvent (e) {
      this.movingComponent = ''
      window.removeEventListener('mousemove', this.mousemoveEvent)
      window.removeEventListener('mouseup', this.mouseupEvent)
      this.$emit('drag-end', e)
    },
    mousemoveEvent (e) {
      this.$emit('move', e, this.movingComponent)
    }
  }
}
</script>

<style lang="less">
.components-group {
  margin-bottom: 16px;
  user-select: none;
}
.components-group-title {
  margin-bottom: 4px;
  color: #111;
}
.components-group-expand-icon {
  display: inline-block;
  margin-right: 8px;
  color: #111;
  cursor: pointer;
}
.components-group-content {
  color: #666;
}
</style>

