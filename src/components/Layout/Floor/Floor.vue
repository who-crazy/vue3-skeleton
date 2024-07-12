<script setup lang="ts">
import { onMounted, ref} from 'vue';

const VITE_APP_WEBSITE = ref(import.meta.env.VITE_APP_WEBSITE || '')
const VITE_ICP = ref(import.meta.env.VITE_ICP || '')
onMounted(() => {

})
</script>

<template>
  <div class="flex">
    <el-text class="items-center">
      <el-link :href="VITE_APP_WEBSITE" target="_blank" :underline="false"> ©2024 RanBlogs</el-link> | 
      <el-link href="https://beian.miit.gov.cn/" target="_blank" :underline="false">{{ VITE_ICP }}</el-link> | 
      <el-link href="/about" target="_blank" :underline="false">关于本站</el-link>
    </el-text>
  </div>
</template>

<style scoped>
</style>