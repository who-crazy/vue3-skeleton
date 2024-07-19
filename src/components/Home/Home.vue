<script setup lang="ts">
import { onMounted, ref} from 'vue';
import { Search } from '@element-plus/icons-vue'
import Header from '@/components/Layout/Header/Header.vue'
import Floor from '@/components/Layout/Floor/Floor.vue'
// import SvgIcon from "@/components/Icons/SvgIcon.vue";
// import Setting from "@/components/Setting/Setting.vue";
import { useSearchStore } from '@/store/modules/search'

const searchStore = useSearchStore()

const keyword = ref('')
//search
const search = () => {
  if (keyword.value.length > 0) {
    let searchLink = searchStore.defaultEngine.link.replace('{%s}', keyword.value);
    window.open(searchLink, '_blank')
  }
}

// const setDialog = ref(false)
// const setEngineShow = () => {
//   setDialog.value = !setDialog.value
// }

const activeName = ref('搜索')
const clickEngine = (item:any) => {
  searchStore.defaultEngine.logo =  item.logo
  searchStore.defaultEngine.title =  item.title
  searchStore.defaultEngine.link =  item.link
}
onMounted(() => {
  searchStore.searchEngineList()
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
          <el-popover placement="bottom-start" width="600" popper-class="search-engine-choose mt-2 ml-[-12px]" trigger="click" :show-arrow="false" :hide-after="0">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane :label="item.title" :name="item.title" v-for="(item, index) in searchStore.list" :key='index'>
                  <div class="grid grid-cols-4 grid-auto-rows w-full ">
                    <div class="pt-1 pb-1 pl-0 pr-2 hover:cursor-pointer rounded-sm"  v-for="(_item, _index) in item.list" :key="_index" @click="clickEngine(_item)">
                      <div class="flex w-full items-center">
                        <el-image  :src="_item.logo" fit="cover" class="w-4 h-4 mr-1"/>
                        <el-text class="w-20 truncate">{{ _item.title }}</el-text>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
              <!-- <el-button type="primary" class='mt-3 w-full' @click="setEngineShow">自定义</el-button> -->

            <template #reference>
                <!-- <SvgIcon name="baidu" style="width: 25px; height: 25px; cursor: pointer;"></SvgIcon> -->
                <el-image :src="searchStore.defaultEngine.logo" style="width: 25px; height: 25px; cursor: pointer;"></el-image>
            </template>
          </el-popover>
          
          <input type="text" class="outline-none h-12 bg-[rgba(255,255,255,0)] w-[85%] ml-3 mr-3" v-model="keyword" @keyup.enter="search">
          <!-- <el-icon size="large"><Search /></el-icon> -->
          <Search class="w-6 h-6 cursor-pointer" @click="search"/>
          <!-- <el-button type="primary" round size="">搜 索</el-button> -->
        </div>
      </div>
    </div>
    <!-- box -->
    <div>
      
    </div>
    <!-- floor -->
    <Floor/>

    <!-- set dialog -->
    <!-- <el-dialog v-model="setDialog" title="设置"  class="set-engine-show-dialog">
      <template #footer>
        <Setting/>
      </template>
    </el-dialog> -->

  </div>
</template>

<style scoped>
.search-input{
  @apply w-[600px] rounded-md flex items-center border-[1px] border-[#dfe1e5] shadow-[0_0_5px_rgba(32,33,36,.28)] border-transparent bg-white
}
:deep(.set-engine-show-dialog){
  @apply w-[800px] rounded-md h-[500px]
}
.el-button+.el-button{
  @apply ml-0
}
</style>

