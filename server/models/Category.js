const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' } // 表示关联什么模型的id
})

module.exports = mongoose.model('Category', schema)
