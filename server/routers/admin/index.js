const express = require('express')
const multer = require('multer') // 上传文件数据处理
// const Category = require('../../models/Category')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const adminUser = require('../../models/AdminUser')
const assert = require('http-assert') // 断言
// 校验登录中间件
const authMiddleware = require('../../middlewares/auth')()
// 模块加载中间件
const resourceMiddleware = require('../../middlewares/resource')()

module.exports = app => {
  const router = express.Router({
    mergeParams: true // 合并url参数，不然子路由获取不到resource
  })
  // CURD通用接口
  // 创建
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 修改更新
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  // 获取列表
  router.get('/', async (req, res) => { // 其实这里省略了next，因为是最后一个了
    // parent特殊处理
    // const items = await req.Model.find().populate('parent').limit(10) // populate关联查出来，变成一个对象
    let queryOptions = {}
    if (req.Model.modelName === 'Category') { // 条件判断特殊处理
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100) // populate关联查出来，变成一个对象
    res.send(items)
  })
  // 获取详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 转化成通用接口
  app.use(
    '/admin/api/rest/:resource',
    authMiddleware,
    resourceMiddleware, 
    router
  )

  const upload = multer({
    dest: __dirname + '/../../uploads'
  }) // 中间件处理文件数据
  app.post(
    '/admin/api/upload',
    authMiddleware,
    upload.single('file'), // 字段名叫file看前端传的字段名，single表示单个文件
    async (req, res) => {
      const file = req.file
      file.url = `http://localhost:3000/uploads/${file.filename}`
      res.send(file)
    }
  )

  app.use('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 根据用户名找到用户
    const user = await adminUser.findOne({ username }).select('+password') // 之前设置了select: false
    // if (!user) {
    //   return res.status(422).send({ // 我们这里422是用户提交有错
    //     message: '用户不存在'
    //   })
    // }
    // 使用断言
    assert(user, 422, '用户不存在')
    // 校验密码
    const isVaild = bcrypt.compareSync(password, user.password) // 比较明文和密文
    // if (!isVaild) {
    //   return res.status(422).send({
    //     message: '用户名或者密码错误'
    //   })
    // }
    assert(isVaild, 422, '用户名或者密码错误')
    // 返回token
    const token = jwt.sign({
      id: user._id
    }, app.get('secret')) // 第一个参数使用用户的信息生成，第二个参数为密钥
    // get这个和路由的get名称一样
    res.send({token})
  })

  // 错误处理中间件
  app.use(async (err, req, res, next) => {
    // 所有错误都捕获，有的错误没错误码，assert说白了是抛出一个错误
    res.status(err.statusCode || '500').send({
      message: err.message
    })
  })
}
