const express = require('express')
// 路由开启history模式
const history = require('connect-history-api-fallback')

const app = express()

app.set('secret', 'i23u123') // 设置到app

app.use(require('cors')())
app.use(express.json())
app.use(history())
app.use('/uploads', express.static(__dirname + '/uploads')) // 静态文件托管
// app.use('/admin', history(), express.static(__dirname + '/admin')) // admin编译后静态文件托管
// app.use('/', history(), express.static(__dirname + '/web')) // web编译后静态文件托管
app.use('/', async (req, res, next) => {
  if (req.url.startsWith('/admin')) {
    res.sendFile('./admin/index.html')
  } else {
    res.sendFile('./web/index.html')
  }
})

require('./plugins/db')(app)
require('./routers/admin')(app)
require('./routers/web')(app)

app.listen(3000, () => {
  console.log('listening on port 3000')
})
