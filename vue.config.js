module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/scss/_base.scss"`
      },
      scss: {
        additionalData: `@import "~@/assets/scss/_base.scss";`
      },
    },
  }
}
