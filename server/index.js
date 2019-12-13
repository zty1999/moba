const express = require("express");//引用express并创建一个express实例

const app = express();//app是整个网站定义的一个对象，执行函数express会返回一个新的应用的实例app

//token密钥设置
app.set('secret','sdfohdaasdf');//值'sdfoh'应该被放入环境变量，而不是直接在代码中保存



// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/express-test',{useNewUrlParser: true})
//mongodb的数据可分离到单独的js文件夹中，

// Product.insertMany ([
//     {title: "产品1"},
//     {title: "产品2"},
//     {title: "产品3"},
// ])//往数据库插入多条数据  一般会写一个接口进行插入

// app.use(express.static('public'))//处理静态文件的托管，public文件夹下的所有静态文件可以直接被访问
// app.use('/static',express.static('public'))//访问路径中必须加上/static才能访问到

app.use(require('cors')());//执行后返回一个express可以用的中间键，允许跨域请求
app.use(express.json());//表示允许express处理提交过来的数据

//静态文件托管
app.use('/uploads',express.static(__dirname + '/uploads'));//表示uploads下面的文件都是静态文件，让uploads里的文件可以通过/uploads来访问
app.use('/admin',express.static(__dirname + '/admin'));//托管admin文件夹
app.use('/',express.static(__dirname + '/web'));//托管web文件到根路径


require('./routers/admin')(app);//引用并执行admin文件夹下index.js中的函数并把app传给该函数
require('./plugins/mongodb')(app);
require('./routers/web')(app);

app.listen(3000,() => {//监听3000端口
	console.log('http://localhost:3000')
});


// 接口设置
// app.get('/',function(req,res) {
//     // res.send('ok')
//     res.send([
//         {user: 'Johnny'}
//     ])
// })//当端口的根路径被请求时，服务端发送信息作为回复


// app.get('/products', async function(req,res) {
//     res.send(await Product.find())//用await的find方法查找该模型数据库中的所有记录
// })//await表示异步操作，一旦function里面有异步操作function前面就要加上async表示这是个异步函数

// app.get('/products', async function(req,res) {
//     const data = await Product.find().skip(1).limit(2)//skip表示跳过，limit表示限制数量,结合起来可以做分页
//     const data = await Product.find().where({
//         title: '产品2'
//     })//where表示查询条件
//     res.send(data)
// })

// app.get('/products', async function(req,res) {
// 	const data = await Product.find().skip(1).limit(2)//skip表示跳过，limit表示限制数量,结合起来可以做分页
// 	const data = await Product.find().sort({
// 			_id: -1//1表示正序，-1表示倒序
// 	})//sort表示排序
// 	res.send(data)
// })

//查询单条数据
// app.get('/products/:id', async function(req,res) {
// 	const data = await Product.findById(req.params.id)
// 	//req.pafams表示客户端传递过来url里面所有参数，
// 	//.id表示用:id获取到的参数，查出来的是数组而不再是对象
// 	res.send(data)
// })

//  //新增数据
// app.post('/products', async function(req,res) {//post请求浏览器里不能直接访问
// 	const data = req.body
// const product = await Product.create(data)
//  //req.body表示客户端发过来的所有数据
	// res.send(product)
// })


// 修改数据
// app.patch或者app.put   patch表示部分修改，put表示整个覆盖
// app.put('/products/:id',async function(req,res) {
// 	const product = await Product.findById(req.params.id)
// 	product.title = req.body.title
// 	await product.save()
// 	res.send(product)
// })


//删除数据
// app.delete('/products/:id',async function(req,res) {
// 	const product = await Product.findById(req.params.id)
// 	await product.remove()
// 	res.send({
// 		sucess: true
// 	})
// })