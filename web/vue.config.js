const ENV = process.env.NODE_ENV || 'development'
const compressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: __dirname + '/../server/web', // 编译输出文件夹
  configureWebpack: config => {
    // config就是webpack.config.js
    if (ENV === 'production') {
      config.plugins.push(new compressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html)$/,
        threshold: 10240,
        minRatio: 0.8
      }))
      // 不打包第三方包
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios'
      }
    }
  },
  productionSourceMap: false
} // 生成静态文件路径
