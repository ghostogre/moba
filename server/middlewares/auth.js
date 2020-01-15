const adminUser = require('../models/AdminUser')
const jwt = require('jsonwebtoken')
const assert = require('http-assert')
module.exports = options => {
  return async (req, res, next) => {
    // 中间件校验token
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    const { id } = jwt.verify(token, req.app.get('secret')) // 解析出数据, req.app === app
    assert(id, 401, '请先登录')
    req.user = await adminUser.findById(id) // 挂载到req上可以给后面的函数使用
    assert(req.user, 401, '请先登录') // 401用户身份
    await next()
  }
}
