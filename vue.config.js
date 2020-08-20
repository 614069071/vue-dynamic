const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  // publicPath: '', // 打包文件相对路径
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     pathRewrite: { '^/api': '' },
    //     secure: false
    //   }
    // }
  },
  lintOnSave: false,
  configureWebpack: config => {// eslint-disable-line
    if (process.env.NODE_ENV === 'production') {
      return {
        optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: false,
              terserOptions: {
                compress: {
                  drop_console: true
                }
              }
            })
          ]
        }
      }
    }
  }
}