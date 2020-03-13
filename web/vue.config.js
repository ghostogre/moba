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
      // 服务器配置gzip, 只是为了可以兼容这种格式, 可以读取这种格式, 压缩为gzip还是需要前端做的
      config.plugins.push(new compressionWebpackPlugin({
        algorithm: 'gzip', // 压缩方式默认是gzip
        test: /\.(js|css|html)$/,
        threshold: 10240, // 只处理大于此子节数的才处理
        minRatio: 0.8 // 压缩的比例
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
