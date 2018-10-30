//webpack 基于node运行环境
const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
  mode: 'production',
  entry:'./src/app.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.js'
  },
  devServer:{
    open:true,
    // hot:true
  },
  plugins:[
    new htmlWebpackPlugin({
      // filename:'main.html', //默认是index.html，文件重命名
      template:path.resolve(__dirname,'dist/template.html'),
    })
  ],
  module:{
    // loader处理模块的内容的
    rules:[
      {
        test:/\.js$/,
        use:[{
          loader:'babel-loader',
          options:{
            presets:['react']
          }
        }]
      },
      {
        test:/\.css/,
        use:['style-loader','css-loader'] //解析顺序重后往前
      },
      // {
      //   test:/\.(jpg|png|gif|jpeg)/,
      //   use:['file-loader']
      // },
      {
        test:/\.(jpg|png|gif|jpeg)/,
        use:[{
          loader:'url-loader',
          options:{
            limit:10000
          }
        }]
      }
    ]
  }
}