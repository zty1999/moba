module.exports = options => {
    return async(req,res,next) => {//处理函数，中间件，当请求地址时，先使用这个处理函数来处理
        const modelName = require('inflection').classify(req.params.resource)
        // const Model = require(`../../models/${modelName}`)
        //const Model后面访问不到所以要使用req.Model表示给请求对象上挂载一个属性Model,因此设置完这个中间键后，上面接口中的Model就不用一个个加上去，并且Model改为req.Model
        req.Model = require(`../models/${modelName}`)
        next()//next（）表示处理下一个函数
    }
}