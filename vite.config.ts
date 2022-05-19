import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import pkg from './package.json'
const scssCode = fs.readFileSync('./src/styles/mixin.scss', 'utf-8')



// https://vitejs.dev/config/
export default defineConfig({
  base: '/obs-web-widgets/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build:{
    target: 'modules',
      outDir: './dist/', //指定输出路径
      assetsDir: './static', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      sourcemap:  false,
      terserOptions: {
        compress: {
            //生产环境时移除console
            drop_console: true,
            drop_debugger: true,
        },
      },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    cors: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssCode,
        charset: false
      }
    }
  },
})
