import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  build:{
    target: 'modules',
    outDir:'dist',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'ZZTOOL',
      formats: ["es", "umd", "cjs"],
      // the proper extensions will be added
      fileName: 'zzcpt',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format:{
        comments:false
      }
    },

  }
  
})
