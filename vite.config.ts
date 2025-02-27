import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import {viteMockServe} from 'vite-plugin-mock'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import {seoperender} from "./ssr.config";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  let env = loadEnv(mode, process.cwd())
  return {
    base: './',
    define: {  
      'process.env.NODE_ENV': JSON.stringify('production')  
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      //mock
      viteMockServe({
        localEnabled: env.VITE_IS_MOCK == 'true' ? command === 'serve' : false,
      }),
      seoperender()
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")  //相对路径别名配置， 使用@替代src
      }
    },
    server: {
      host: env.VITE_HOST,
      proxy: {
        [env.VITE_APP_BASE_API] : {
          target: env.VITE_SERVE,
          changeOrigin: true,
          // bypass(req, res, options) {
          //   const proxyUrl = new URL(options.rewrite(req.url) || '', (options.target) as string)?.href || ''
          //   req.headers['x-req-proxyUrl'] = proxyUrl;
          //   res.setHeader("x-res-proxyUrl", proxyUrl)
          // }
        },
        
      }
    }
  }
})
