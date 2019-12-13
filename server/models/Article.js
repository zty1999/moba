const mongoose = require('mongoose')

const schema = new mongoose.Schema({//传递模型的字段
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    body: { type: String },
},{ 
    timestamps: true //时间戳
})
module.exports = mongoose.model('Article',schema)