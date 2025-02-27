# Vue3脚手架

> 基于Vite4.x + Vue3.x + ElementPlus + Typescript + TailwindCss

# 使用

安装`pnpm`, 为避免因为不同包管理器工具下载同一个依赖,可能版本不一样的问题,本项目强制使用`pnpm`
```
npm install pnpm -g
```

克隆
```
git clone --depth=1 https://github.com/taoran1401/tools-web.git
```

安装
```
# 进入项目
cd vue3-skeleton

# 复制配置文件
cp .env.example .env.development

# 安装
pnpm install
```

启动
```
pnpm dev
```

打包
```
pnpm build
```

# 内置

- elementplus/tailwindcss/pinia
- 登录注册组件
- 登录Token验证
- 简陋个人中心
- 404
- SEO
- 国际化
- [暗黑模式]

# 使用

## SvgIcon组件

功能：使用自定义svg文件

svg文件目录: `@/assets/icons/`

引入：
```js
import SvgIcon from "@/components/Icons/SvgIcon.vue";
```

使用`<SvgIcon name="svg文件名" style=""></SvgIcon>`； 示例：
```js
<el-icon style="width: 1.5rem; height: 1.5rem; color: red;">
  <SvgIcon name="zh_en"></SvgIcon>
</el-icon>
```

# 补充

播放器：https://codelife.cc/vue3-video-play/guide/install.html#props