<script setup lang="ts">
import { onMounted } from 'vue';
// import SvgIcon from "@/components/Icons/SvgIcon.vue";
import LanguageSwitch from "@/components/Kit/LanguageSwitch/LanguageSwitch.vue";
// import DarkSwitch from "@/components/Kit/DarkSwitch/DarkSwitch.vue";




onMounted(() => {

})
</script>

<template>
  <div class="flex h-8 items-center flex-row-reverse">
    <div class="mr-3 flex items-center text-white  pt-1 pb-1 pl-2 pr-2 rounded-md mt-6 bg-[rgba(0,0,0,0.6)]">
      <LanguageSwitch/>
    </div>
    <!-- <div class="mr-3">
      <DarkSwitch></DarkSwitch>
    </div> -->
  </div>
</template>

<style scoped>
</style>