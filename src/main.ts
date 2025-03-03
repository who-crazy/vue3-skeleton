import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
//入口文件main.ts全局安装element-plus,element-plus默认支持语言英语设置为中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//vite-plugin-svg-icons
import 'virtual:svg-icons-register'
//router
import router from './router'
//styles
import './styles/tailwind.css'
//element-plus css
import 'element-plus/dist/index.css'
//pinia
import pinia from './store'
//default-passive-events
import 'default-passive-events'
//i18n
import i18n from './language'
//vue3-video-play
// import vue3videoPlay from 'vue3-video-play' // 引入组件
// import 'vue3-video-play/dist/style.css' // 引入css

const app = createApp(App)
//安装仓库
app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(i18n)
// app.use(vue3videoPlay)
app.mount('#app')
