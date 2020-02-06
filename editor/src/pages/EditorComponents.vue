<template>
  <div class="editor-components">

    <components-group
      v-for="(item, index) in list"
      :key="index"
      :label="item.label"
      :components="item.components"
      @move="(e, component) => $emit('move', e, component)"
      @drag-end="(e, component) => $emit('drag-end', e, component)"
    ></components-group>

  </div>
</template>

<script>
import ComponentsGroup from '@/components/ComponentsGroup'

export default {
  name: 'EditorComponents',

  components: { ComponentsGroup },

  data () {
    return {
      list: [
        {
          label: '容器',
          components: [
            { name: 'container DIV容器', component: 'div-container' }
          ]
        },
        {
          label: '表单',
          components: [
            { name: 'input 输入框', component: 'el-input' },
            { name: 'select 选择框', component: 'el-select' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">

.editor-components {
  width: 320px;
  padding: 16px;
  background-color: #e5e5e5;
}

</style>

