const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], // 类别可以是多个
  scores: { 
    diffcult: {
      type: Number
    },
    skills: {
      type: Number
    },
    attack: {
      type: Number
    },
    survive: {
      type: Number
    }
  }, // 子集, 对象的数据
  skills: [{
    icon: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    tips: {
      type: String
    }
  }],
  // 出装
  items1: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  // 逆风
  items2: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  usageTips: {
    type: String
  }, // 使用技巧
  battleTips: {
    type: String
  },
  teamTips: {
    type: String
  }, // 团战技巧
  partners: [
    {
      hero: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'hero'
      },
      description: {
        type: String
      }
    }
  ], // 最佳搭档
})

module.exports = mongoose.model('Hero', schema)
