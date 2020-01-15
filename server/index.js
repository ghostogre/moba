const express = require('express')

const app = express()

app.set('secret', 'i23u123') // 设置到app

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads')) // 静态文件托管

require('./plugins/db')(app)
require('./routers/admin')(app)

app.listen(3000, () => {
  console.log('listening on port 3000')
})
