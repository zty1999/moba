module.exports = app => {//接收一个app对象
	const express = require('express')
	const jwt = require('jsonwebtoken')
	const AdminUser =require('../../models/AdminUser')
	const assert = require('http-assert')
	const router = express.Router({
		mergeParams: true
		//由于是在app.use()里定义的参数resource，在router.post()里调用，所以要在这里表示合并url参数，否则获取不到参数

	})//express的子路由

	//const Category = require('../../models/Category')更改为post里的Model动态表示

	//资源创建的接口
	router.post('/', async (req,res) => {
		// const modelName = require('inflection').classify(req.params.resource)
		// const Model = require(`../../models/${modelName}`)
		// const Model = require(`../../models/${req.params.resource}`)
		//但是这里的resource是url里的路径categories（例子）要让它转换成模型Category
		const model = await req.Model.create(req.body)
		res.send(model)
	})
	
//登录校验中间件
const authMiddleware = 	require('../../middleware/authMiddleware')

	//资源在分类列表页面显示，并限制数量的接口
	router.get('/', authMiddleware(), async (req,res) => {
		// const modelName = require('inflection').classify(req.params.resource)
		//安装inflection包使用.classify方法将url路径名转换成类名（模型名）拼接出模型路径
		// const Model = require(`../../models/${req.params.resource}`)
		// const Model = require(`../../models/${modelName}`)
		// const items = await req.Model.find().populate('parent').limit(10)
		//.populate()表示在分类列表接口关联并取出parent字段，使该字段变成完整的可以查询的对象
		//并不是所有地方都需要关联查询上级，所以要条件选择是否查询parent，所以这个函数改为下面的函数
		const queryOptions = {}
		if(req.Model.modelName === 'Category') {
			queryOptions.populate = 'parent'
		}
		const items = await req.Model.find().setOptions(queryOptions).limit(100)
		res.send(items)   
	})

	//资源修改的接口
	router.get('/:id', async (req,res) => {
		// const modelName = require('inflection').classify(req.params.resource)
		// const Model = require(`../../models/${modelName}`)
		const model = await req.Model.findById(req.params.id)
		res.send(model)
	})

	//资源删除的接口
	router.delete('/:id', async (req,res) => {
		// const modelName = require('inflection').classify(req.params.resource)
		// const Model = require(`../../models/${modelName}`)
		await req.Model.findByIdAndDelete(req.params.id, req.body)
		res.send({
			success: true
		})
	})

	//资源详情的接口
	router.put('/:id', async (req,res) => {
		// const modelName = require('inflection').classify(req.params.resource)
		// const Model = require(`../../models/${modelName}`)
		const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
		res.send(model)
	})

//模型获取中间件
const resourceMiddleware = require('../../middleware/resourceMiddleware')
	
	app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(),router)
	//rest表示rest风格的接口
	//resource表示动态参数匹配请求的url里的路径名,动态请求url和模型


//文件上传接口
const multer = require('multer')
const upload = multer({ dest: __dirname + '/../../uploads' })//之前路径使用/../uploads 报错。图片不显示
//定义一个中间件upload等于multer，执行它，并传递给它一个传递的目标地址，dirname绝对地址
app.post('/admin/api/upload',authMiddleware(), upload.single('file'), async(req,res) => {
	//获取上传文件，由于express本身不能获取上传文件的内容，所以需要中间件专门处理上传数据，要安装包multer
	//upload.single表示接受的是单个文件的上传，同时加上字段名file，字段名可进行配置
	const file = req.file
	  // file.url = `http://localhost:3000/uploads/${file.filename}` //拼接出一个用来在前端显示静态文件的url
  file.url = `http://139.224.71.169/uploads/${file.filename}`//localhost3000本地上传，其他人电脑上显示不出来，所以改为线上地址
res.send(file)  
})

// 登录接口
app.post('/admin/api/login',async(req,res) => {
	// res.send('ok')
	const { username,password } = req.body//解构赋值  req.body表示客户端传来的所有数值

	//1.根据用户名找用户
	// const AdminUser =require('../../models/AdminUser')
	const user = await AdminUser.findOne({username}).select('+password')//由于模型中设置了select为false，所以这里用。select加上password
	// if (!user) {
	// 	return res.status(422).send({message: '用户不存在'})
	// }
	//安装http-assert可代替此判断
	assert(user, 422, '用户不存在')//确保用户存在，如果不存在，报422错误，报错message为用户不存在
	//但是http-assert是抛出异常直接报的错，这样就获取不到json的错，页面不会有错误弹出，所以要进行错误处理  错误处理函数在此登录接口下方
	
	//2.校验密码
	const  isValid = require('bcryptjs').compareSync(password, user.password)//使用.comparSync比较明文和密文是否匹配
	if(!isValid || '') {//如果密码不正确
		return res.status(422).send({message: '密码错误'})
	}
	// assert(isValid, 422, '密码错误')
	
	//3.返回token
	// const jwt = require('jsonwebtoken')
	const token = jwt.sign({id: user._id}, app.get('secret'))
	//sign 签名  用来生成一个token  
	//第二个值为密钥，该值中只有一个值时表示获取配置，有两个值则表示定义路由
	//获取配置需先在全局设定在index.js中设置app.set()
	res.send({token})
})

	//错误处理函数  中间件
	app.use(async (err,req,res,next) => {
		console.log(err)
		res.status(err.status).send({
			message:err.message
		})
	})

}