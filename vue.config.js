const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/style/style.scss";`
      },
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
})
