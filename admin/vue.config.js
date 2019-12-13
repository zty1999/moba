module.exports = {
  outputDir: __dirname + '/../server/admin',//原本dist文件夹的内容输出到哪个文件夹
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'//生成之后的根地址，要放到的子文件夹名
    : '/'//开发环境下
}