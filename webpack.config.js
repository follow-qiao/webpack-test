//webpack 基于node运行环境
const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const webpack = require('webpack')
module.exports={
  mode: 'production',
  entry:'./src/app.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.js'
  },
  devServer:{
    open:true,
    hot:true, //热加载
  },
  plugins:[
    new htmlWebpackPlugin({
      // filename:'main.html', //默认是index.html，文件重命名
      template:path.resolve(__dirname,'public/template.html'),
    }),
    new webpack.HotModuleReplacementPlugin(), //热加载
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
        test:/\.less$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true,  //css模块化，默认是fasle,
              //path:文件夹名，name:文件名，local:定义的class名
              localIdentName:'[path][name]_[local]_[hash:base64:8]'
            }
          },
          "less-loader" 
        ],
        exclude:[//排除不需要模块化的文件
          path.resolve(__dirname,'node_modules'),
          path.resolve(__dirname,'node_modules'),
        ]
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader'],
        include:[//不需要模块化的文件
          path.resolve(__dirname,'node_modules'),
          path.resolve(__dirname,'node_modules'),
        ]
      },
      {
        test:/\.(jpg|png|gif|jpeg)/,
        use:[{
          loader:'url-loader',
          options:{
            //小于base64处理，避免不必要的请求，大于则发起请求并做打包处理
            limit:10000
          }
        }]
      }
    ]
  }
}
/**less模块化
 * less和less-loader
 * sass模块化
 * sass-loader和node-sass
 */