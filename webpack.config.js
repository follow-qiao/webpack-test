//webpack 基于node运行环境
const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const webpack = require('webpack')
const cleanWebpackPlugin=require('clean-webpack-plugin')
module.exports={
  mode: 'production',
  entry:'./src/app.js',
  output:{
    path:path.resolve(__dirname,'dist/assets'),
    filename:'assets/js/main.js',
    publicPath:'/'  //所有资源的基础路径
  },
  devServer:{ //先查找内存资源，在找本地资源
    open:true,
    hot:true, //热加载
    contentBase:'./src/common',
    publicPath:'/'  //服务器打包的资源路径,默认是/
  },
  plugins:[
    new htmlWebpackPlugin({
      filename:'main.html', //默认是index.html，文件重命名
      template:path.resolve(__dirname,'public/template.html'),
    }),
    new webpack.HotModuleReplacementPlugin(), //热加载
    new cleanWebpackPlugin(['dist'])
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
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              moudles:true,
              localIdentName:'[path][name]_[local]_[hash:base64:8]'
            }
          }
        ],
        exclude:[
          path.resolve(__dirname,'node_modules'),
          path.resolve(__dirname,'common'),
        ]
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
        ],
        include:[
          path.resolve(__dirname,'node_modules'),
          path.resolve(__dirname,'common'),
        ]
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
          path.resolve(__dirname,'common'),
        ]
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader'],
        include:[//不需要模块化的文件
          path.resolve(__dirname,'node_modules '),
          path.resolve(__dirname,'common'),
        ]
      },
      {
        test:/\.(jpg|png|gif|jpeg)$/,
        use:[{
          loader:'url-loader',
          options:{
            //小于base64处理，避免不必要的请求，大于则发起请求并做打包处理
            limit:10000,
            name:'assets/img/[name]_[hash:base64:8]'
          }
        }]
      },
      {
        test:/\.(ttf|eot|woff|woff2|svg)$/,
        use:[{
          loader:'file-loader',
          options:{
            name:'assets/fonts/[name]_[hash:base64:8].[ext]' 
          }
        }]
      }
    ]
  }
}
/**配置文件名字
 *output；public所有资源的基础路径
 *devserver:public服务器打包的资源路径;contentBase:本地资源路径
 */