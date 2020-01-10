const mongoose = require('mongoose')
module.exports = app => {
  mongoose.connect('mongodb://127.0.0.1:27017/moba', {
    useNewUrlParser: true
  })
}
