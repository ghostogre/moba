const express = require('express')
const Category = require('../../models/Category')
module.exports = app => {
  const router = express.Router()
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.boy)
    res.send(model)
  })
  app.use('/admin/api', router)
}
