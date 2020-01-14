const express = require('express')
const multer = require('multer') // 上传文件数据处理
const inflection = require('inflection') // 处理类名单复数的包
// const Category = require('../../models/Category')
module.exports = app => {
  const router = express.Router({
    mergeParams: true // 合并url参数，不然子路由获取不到resource
  })
  // CURD通用接口
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.get('/', async (req, res) => { // 其实这里省略了next，因为是最后一个了
    // parent特殊处理
    // const items = await req.Model.find().populate('parent').limit(10) // populate关联查出来，变成一个对象
    let queryOptions = {}
    if (req.Model.modelName === 'Category') { // 条件判断特殊处理
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10) // populate关联查出来，变成一个对象
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  // 转化成通用接口
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    // 中间件
    const modelName = inflection.classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)

  const upload = multer({
    dest: __dirname + '/../../uploads'
  }) // 中间件处理文件数据
  app.post(
    '/admin/api/upload', 
    upload.single('file'), // 字段名叫file看前端传的字段名，single表示单个文件
    async (req, res) => {
      const file = req.file
      file.url = `http://localhost:3000/uploads/${file.filename}`
      res.send(file)
    }
  )
}
