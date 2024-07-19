<script setup lang="ts">
import { ref } from 'vue'
import SearchEngine from "@/components/Setting/SearchEngine/SearchEngine.vue";
import Global from "@/components/Setting/Global/Global.vue";
// import { Edit, Delete } from '@element-plus/icons-vue'
const activeName = ref('first')
defineExpose({
  
})
</script>

<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    tab-position="left"
  >
    <!-- <el-tab-pane label="风格" name="first">风格</el-tab-pane> -->
    <el-tab-pane label="搜索引擎" name="first">
      <SearchEngine />
    </el-tab-pane>
    <!-- <el-tab-pane label="分类管理" name="second"></el-tab-pane> -->
    <el-tab-pane label="全局设置" name="third">
      <Global />
    </el-tab-pane>
    <el-tab-pane label="关于" name="fourth">关于</el-tab-pane>
  </el-tabs>
</template>

<style scoped>
</style>