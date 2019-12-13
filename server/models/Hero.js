const mongoose = require('mongoose')
const schema = new mongoose.Schema({//传递模型的字段
    name: { type: String },
    avatar: { type: String },
    banner: { type: String },
    title: {type: String}, 
    // category: { type: mongoose.SchemaTypes.ObjectId,  ref: 'Category' } 这样表示关联一个分类
    categories: [{ type: mongoose.SchemaTypes.ObjectId,  ref: 'Category' } ],
    scores: {
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survive: { type: Number }
    },
    skills: [{
        icon: { type: String },
        name: { type: String },
        delay: { type: String },
        cost: { type: String },
        description: { type: String },
        tips: { type: String }
    }],
    goods1:  [{ type: mongoose.SchemaTypes.ObjectId,  ref: 'Good' }],
    goods2:  [{ type: mongoose.SchemaTypes.ObjectId,  ref: 'Good' }],
    usageTips: { type: String },
    battleTips: { type: String },
    teamTips: { type: String },
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId,  ref: 'Hero' },
        description: { type: String }
    }]
})
module.exports = mongoose.model('Hero',schema,'heroes')
//                             这里的第三个参数是模型在数据库中真正的名称，默认为首字母小写复数形式也可手动指定


