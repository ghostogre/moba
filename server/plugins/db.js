const mongoose = require('mongoose')
module.exports = app => {
  // 数据库起任何名字都可以会自动创建
  mongoose.connect('mongodb://127.0.0.1:27017/moba?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(res => {
    console.log('success')
  }).catch(error => {
    console.log('failure')
  })
}
