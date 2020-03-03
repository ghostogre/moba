module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/',
  outputDir: __dirname + '/../server/admin' // 编译输出文件夹
} // 生成静态文件路径
