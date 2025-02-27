<script setup lang="ts">
import { onMounted, ref} from 'vue';
import { Search } from '@element-plus/icons-vue'
import Header from '@/components/Layout/Header/Header.vue'
import Floor from '@/components/Layout/Floor/Floor.vue'
// import SvgIcon from "@/components/Icons/SvgIcon.vue";
// import Setting from "@/components/Setting/Setting.vue";
import { useSearchStore } from '@/store/modules/search'
import { useRouter } from 'vue-router';
const router = useRouter(); 

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

const goto = (path) => {
  router.push(path)
}

const activeName = ref('搜索')
const clickEngine = (item:any) => {
  searchStore.defaultEngine.logo =  item.logo
  searchStore.defaultEngine.title =  item.title
  searchStore.defaultEngine.link =  item.link
}

//选中标签
const chooseTag = () => {

}

//duration
const duration = ref('')
const durationOptions = [
  {
    value: '<2min',
    label: '<2min'
  },
  {
    value: '2~12min',
    label: '2~12min'
  },
  {
    value: '12~40min',
    label: '12~40min'
  },
  {
    value: '40~90min',
    label: '40~90min'
  },
  {
    value: '>90min',
    label: '>90min'
  }
]

//sort
const sort = ref('')
const sortOptions = [
  {
    value: 'latest',
    label: 'latest'
  },
  {
    value: 'hot',
    label: 'hot'
  },
  {
    value: 'duration',
    label: 'duration'
  },
]

//score
const score = ref(0)

const imgUrl = ref("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg");

onMounted(() => {
  searchStore.searchEngineList()
})
</script>

<template>
  <div class="grid grid-cols-[20%_80%]">
    <!-- left -->
    <div class="w-full border-r-2">
      <!-- score -->
      <div class="mt-5 mb-5 border-b-2 p-3">
        <div class="mr-3">score: <el-rate v-model="score" clearable /></div>
      </div>

      <!-- tags -->
      <div class="mb-3">
        <div class="mb-3">cate1</div>
        <div>
          <el-check-tag :checked="false" type="primary" @change="chooseTag">Tag 1</el-check-tag>
        </div>
      </div>

      <div class="mb-3">
        <div class="mb-3">cate1</div>
        <div>
          <el-check-tag :checked="false" type="primary" @change="chooseTag">Tag 1</el-check-tag>
        </div>
      </div>

      <div class="mb-3">
        <div class="mb-3">cate1</div>
        <div>
          <el-check-tag :checked="false" type="primary" @change="chooseTag">Tag 1</el-check-tag>
        </div>
      </div>
    </div>

    <!-- right -->
    <div class="w-full">
      <!-- search -->
      <div class="border-b-2 p-3 flex">
        <!-- duration -->
        <div class="flex mr-3">
          <div class="mr-2">duration:</div>
          <el-select
            v-model="duration"
            clearable
            placeholder="Duration"
            style="width: 100px"
          >
            <el-option
              v-for="item in durationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <!-- sort -->
        <div class="flex mr-2">
          <div class="mr-2">sort:</div>
          <el-select
            v-model="sort"
            clearable
            placeholder="Sort"
            style="width: 100px"
          >
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <!-- play list -->
        <el-button type="primary" class="mr-2">p-all</el-button>
        <el-button type="primary" class="mr-2">random</el-button>
      </div>
      <!-- list -->
      <div class="grid grid-cols-5">

        <div class="w-[200px] p-1 mt-8" v-for="n in 9" @click="goto()">
          <div>
            <el-image :src="imgUrl" style="width: 200px; height: 120px;" fit="contain"/>
          </div>
          <div>
            <div class="line-clamp-2">标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提标题提</div>
            <div class="flex justify-between">
              <div>S：1</div>
              <div>D：360min</div>
            </div>
          </div>
        </div>
        
      </div>

      <div class="mt-10 p-2">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
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

