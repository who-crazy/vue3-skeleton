<script setup lang="ts">
import { onMounted, ref} from 'vue';
import { Search } from '@element-plus/icons-vue'
import Header from '@/components/Layout/Header/Header.vue'
import Floor from '@/components/Layout/Floor/Floor.vue'
import SvgIcon from "@/components/Icons/SvgIcon.vue";

const keyword = ref('')
const search = () => {
  if (keyword.value.length > 0) {
    //badiu
    window.open('https://www.baidu.com/s?wd=' + keyword.value, '_blank')
  }
}
const setEngine = () => {
  
}

onMounted(() => {

})
</script>

<template>
  <div class="grid grid-rows-[8vh_40vh_44vh_8vh]">
    <!-- header -->
    <div class="">
      <Header/>
    </div>
    <!-- content -->
    <div class="flex justify-center flex-col">
      <div class="flex justify-center">
        <div class="font-bold text-6xl">
          RanPage
        </div>
      </div>
      <!-- seatch box -->
      <div class="flex flex-col mt-10 items-center">
        <div class="search-input pl-3">
          <SvgIcon name="baidu" style="width: 25px; height: 25px;"></SvgIcon>
          <input type="text" class="outline-none h-12 bg-[rgba(255,255,255,0)] w-[85%] ml-3 mr-3" v-model="keyword">
          <!-- <el-icon size="large"><Search /></el-icon> -->
          <Search class="w-6 h-6 cursor-pointer" @click="search"/>
          <!-- <el-button type="primary" round size="">搜 索</el-button> -->
        </div>
        <div class="mt-3">
          <el-tag>百度</el-tag>
          <el-tag class="ml-3">搜狗</el-tag>
          <el-button class="ml-3" type="primary">{{ $t(`setting`) }}</el-button>
        </div>
      </div>
    </div>
    <!-- box -->
    <div>
      
    </div>
    <!-- floor -->
    <Floor/>
  </div>
</template>

<style scoped>
.search-input{
  @apply w-[600px] rounded-md flex items-center border-[1px] border-[#dfe1e5] shadow-[0_0_5px_rgba(32,33,36,.28)] border-transparent bg-white
}
</style>