const inflection = require('inflection') // 处理类名单复数的包
module.exports = options => async (req, res, next) => {
  // 中间件处理模块名称
  const modelName = inflection.classify(req.params.resource)
  req.Model = require(`../models/${modelName}`)
  next()
}
