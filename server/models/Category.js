const mongoose = require('mongoose')
const schema = new mongoose.Schema({//传递模型的字段
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
    //父级分类字段，类型为特殊类型，不能为string，mongoose.SchemaTypes.ObjectId表示是mongoose数据库里的ObjectId，ref表示关联的模型
    
    
})
schema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
})
  schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories',
    justOne: false,
    ref: 'Article'
  })

module.exports = mongoose.model('Category',schema)
//这里导出的是一个mongoose的模型，哪里需要就在哪里引用

// const Product = mongoose.model('Product',new mongoose.Schema({
//     title: String,
// }))//定义一个模型
