<template>
  <div class="editor-components">

    <components-group
      label="容器"
      :components="list1"
      @move="(e, component) => $emit('move', e, component)"
      @drag-end="(e) => $emit('drag-end', e)"
    ></components-group>

    <components-group
      label="表单"
      :components="list2"
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
      list1: [
        { name: 'container DIV容器', component: 'div-container' }
      ],
      list2: [
        { name: 'input 输入框', component: 'el-input' },
        { name: 'select 选择框', component: 'el-select' }
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

