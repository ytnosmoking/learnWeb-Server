<template>
  <div>
    this is tags
    <el-tag>标签一</el-tag>
    <el-tag type="success">标签二</el-tag>
    <el-tag type="info">标签三</el-tag>
    <el-tag type="warning">标签四</el-tag>
    <el-tag type="danger">标签五</el-tag>
    <hr>
    可移除tag <el-tag
      v-for="(tag,index) in tags"
      :key="tag.name"
      :type="tag.type"
      closable
      @close="closeTags(index)">
      {{ tag.name }}
    </el-tag>
  </div>
</template>
<script>
export default {
  name: 'TimeTags',
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  mounted() {},
  methods: {
    closeTags(index) {
      this.tags.splice(index, 1)
    }
  }
}
</script>
<style scoped>
</style>
