const express = require('express')
const Category = require('../../models/Category')
module.exports = app => {
  const router = express.Router()
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.get('/categories', async (req, res) => {
    const items = await Category.find().limit(10)
    res.send(items)
  })
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })
  app.use('/admin/api', router)
}
