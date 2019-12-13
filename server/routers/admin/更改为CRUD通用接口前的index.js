module.exports = app => {//接收一个app对象
	const express = require('express')
	const router = express.Router()//express的子路由
	const Category = require('../../models/Category')

	//数据创建的请求的接口
	router.post('/category', async (req,res) => {
		const model = await Category.create(req.body)
		res.send(model)
	})

	//数据在分类列表页面显示，并限制数量的数据请求的接口
	router.get('/category', async (req,res) => {
		const items = await Category.find().populate('parent').limit(10)
		//.populate()表示在分类列表接口关联并取出parent字段，是该字段变成完整的可以查询的对象
		res.send(items)
	})

	//数据修改的请求的接口
	router.get('/category/:id', async (req,res) => {
		const model = await Category.findById(req.params.id)
		res.send(model)
	})


	router.put('/category/:id', async (req,res) => {
		const model = await Category.findByIdAndUpdate(req.params.id, req.body)
		res.send(model)
	})
	router.delete('/category/:id', async (req,res) => {
		await Category.findByIdAndDelete(req.params.id, req.body)
		res.send({
			success: true
		})
	})
	app.use('/admin/api',router)
}



    // const file = req. files
 // console. log(file)
// file.url =、${serverURL}/upload/${fi1e[0].filename}^ ;
// fs.readFile(__dirname +`/../upload/${file[0].filename}`, (err, data) => {
//   if (err) return window.console.log(err);
//   // console. log(data)
//   fs. writeFile(__dirname + `/../upload/${file[0].originalname}`, data, (err, data) => {
//     if (!err) {
//       const URL =`${serverURL }/upload/${file[0]. originalname}`
//       //获取到链接后。删除上传过来的二进制文件
//       fs.unlink(__dirname + `/../upload/${file[0].filename}`,(err, data) => {
//         if (err) return console.log(err);
//       })
//       res. send(URL)
//     } else {
//       console.log(err)
//     }
//   })