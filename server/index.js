const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())

app.set('secret', 'i23u123') // 设置到app

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads')) // 静态文件托管
app.use('/admin/', express.static(__dirname + '/admin')) // admin编译后静态文件托管
app.use('/', express.static(__dirname + '/web')) // web编译后静态文件托管

require('./plugins/db')(app)
require('./routers/admin')(app)
require('./routers/web')(app)

app.listen(3000, () => {
  console.log('listening on port 3000')
})
