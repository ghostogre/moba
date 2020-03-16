const ENV = process.env.NODE_ENV || 'development'
const compressionWebpackPlugin = require('compression-webpack-plugin')
// const PrerenderSpaPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSpaPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: path.join(__dirname, '../server/web'), // 编译输出文件夹
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
      // 服务器配置预加载
      // config.plugins.push(new PrerenderSpaPlugin({
      //   staticDir: path.join(__dirname, '../server/web'),
      //   routes: ['/', '/articles/:id', '/hero/:id'], // Required - Routes to render
      //   renderer: new Renderer({
      //     headless: true, // 无头浏览器
      //     renderAfterTime: 10000,
      //     ignoreJSErrors: true
      //   })
      // }))
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
