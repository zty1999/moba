const mongoose = require('mongoose')
const schema = new mongoose.Schema({//传递模型的字段
    name: { type: String },
    icon: { type: String }  
})
module.exports = mongoose.model('Good',schema)
//这里导出的是一个mongoose的模型，哪里需要就在哪里引用

// const Product = mongoose.model('Product',new mongoose.Schema({
//     title: String,
// }))//定义一个模型
