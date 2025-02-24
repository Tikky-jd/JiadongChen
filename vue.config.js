const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const pxtorem = require('postcss-pxtorem')

module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  filenameHashing: true,
  runtimeCompiler: false,
  productionSourceMap: true,
  transpileDependencies: true,
  
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],

  },

  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            pxtorem({
              rootValue: 150,
              propList: ['*'],
              selectorBlackList: [/(^el-)/] // 过滤Element组件样式
            })
          ]
        }
      }
    }
  }
})