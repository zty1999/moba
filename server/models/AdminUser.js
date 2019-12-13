const mongoose = require('mongoose')
const schema = new mongoose.Schema({//传递模型的字段
  username: { type: String },
  password: { type: String, select: false,//select为false使编辑页面取不到密码
    set(val) {
    return  require('bcryptjs').hashSync(val,10)
    // 10是加密指数，越高越安全但耗时，一般在10-12比较合理
    } 
  }

})
module.exports = mongoose.model('AdminUser',schema)