const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' } // 表示关联什么模型的id
}, {
  toJSON: { virtuals: true } // toJson的时候能看到虚拟字段
})

// 虚拟属性
// 虚拟属性不会保存到数据库
// 定义虚拟字段, 本地键关联外键
// 比如根据categories查英雄
// 默认是不会输出的，需要使用lean或者toJSON，express默认会使用json
// 在express返回的时候需要设置toJSON，后端查看使用lean

// 获得子分类
schema.virtual('children', {
  localField: '_id', // 本地键
  foreignField: 'parent', // 外地健
  justOne: false, // 返回是不是单条
  ref: 'Category' // 字段来源
})

schema.virtual('newsList', {
  localField: '_id', // 本地键
  foreignField: 'categories', // 外地健
  justOne: false, // 返回是不是单条
  ref: 'Article' // 字段来源
})

module.exports = mongoose.model('Category', schema)
