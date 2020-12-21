const TerserPlugin = require('terser-webpack-plugin')
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

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
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@lib', resolve('src/lib'))
      .set('@utils', resolve('src/utils'))
      .set('@store', resolve('src/store'))
      .set('@views', resolve('src/views'))
      .set('@assets', resolve('src/assets'))
      .set('@router', resolve('src/router'))
      .set('@components', resolve('src/components'))
  },
  configureWebpack: config => { // eslint-disable-line
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