<script setup lang="ts">
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
defineExpose({
  
})
</script>

<template>
<div class="grid grid-rows-2 pl-1">
  <div class="flex flex-col items-start">
    <div class="mb-3">
      <el-button type="primary" link>+自定义添加</el-button>
      <el-text size="small">(上限24个)</el-text>
    </div>
    <div class="grid grid-auto-rows grid-cols-4 w-full">

      <!-- engine btn -->
      <div class="w-40 border rounded-md mr-3 mt-3 flex justify-between pt-2 pb-2 pl-3 pr-3" v-for="index in 24" :key="index">
        <div class="flex items-center">
          <el-image  src="https://www.baidu.com/favicon.ico" fit="cover" class="w-4 h-4 mr-1"/>
          <el-text>百度</el-text>
        </div>
        <div class="flex items-center">
          <el-divider direction="vertical" />
          <el-icon class="hover:text-[#337ecc] cursor-pointer"><Edit /></el-icon>
          <el-icon class="ml-1 hover:text-[#337ecc] cursor-pointer"><Delete /></el-icon>
        </div>
      </div>
      <!-- engine btn / -->
    </div>
    <!-- <el-divider />
    <div class="grid grid-cols-2 w-full">
      <div class="flex flex-col">
        <div class="flex">
          <el-text class="w-12">标题</el-text>
          <el-input class="ml-3"></el-input>
        </div>
        <div class="flex flex-cols mt-3">
          <el-text  class="w-12">链接</el-text>
          <el-input class="ml-3"></el-input>
        </div>
      </div>
      <div>
        <el-button>立即保存</el-button>
      </div>
    </div> -->
  </div>
</div>

<!--  -->
</template>

<style scoped>
</style>