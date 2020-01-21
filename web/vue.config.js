module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: __dirname + '/../server/web' // 编译输出文件夹
} // 生成静态文件路径
