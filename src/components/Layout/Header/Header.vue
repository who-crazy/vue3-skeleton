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
    <div class="mr-3 flex items-center">
      <LanguageSwitch/>
    </div>
    <!-- <div class="mr-3">
      <DarkSwitch></DarkSwitch>
    </div> -->
  </div>
</template>

<style scoped>
</style>