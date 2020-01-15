const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// npm install --global --production windows-build-tools
// npm install -g node-gyp

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false, // 默认查不出密码，不然的话编辑的话会重复的散列密码
    set (val) {
      return bcrypt.hashSync(val, 10) // 第二个值越大越安全但是耗时越长
    }
  } // set自定义修改保存
})

module.exports = mongoose.model('AdminUser', schema)
