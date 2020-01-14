const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }] // 表示关联什么模型的id
})

module.exports = mongoose.model('Article', schema)
