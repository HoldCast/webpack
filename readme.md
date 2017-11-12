# commonJS AMD
# babel-loader(ES6) css(less/scss) img 

1.npm install webpack -g //全局安装webpack
2.npm init //当前目录下，创建配置项
3.npm install webpack --save-dev //安装本地依赖项
4.安装其他依赖项//
npm install --save-dev url-loader json-loader style-loader css-loader less-loader node-sass sass-loader extract-text-webpack-plugin babel-loader babel-core babel-preset-env postcss-loader autoprefixer html-webpack-plugin

5.webpack app/main.js public/webpack.js //（此命令可以手动生成js文件）

6.webpack //配置webpack.config.js(必须安装全局webpack。否则要选择路径)

7.package.js 配置 ：
"scripts": {
    "start" : "webpack",  //start 相当于var关键字，只能用start不能用其他名字
    "go": "webpack",      //运行时使用npm run go
    "test": "test"
},
9.{
      test: /\.css/,
      loaders: "style-loader!css-loader"  //从右往左执行 ！链接多个loader
  }
  
10.实时刷新服务器环境安装: npm install webpack-dev-server -g


其他：
webpack //生产环境
webpack -p //生产环境(压缩)
webpack -w //自动监听
webpack -d //开启(source maps)调试
webpack -wpd

//极其不推荐
若不用webpack.config.js
运行时: webpack --config 文件名

//babel 以及预设模块
npm install --save-dev babel-loader babel-core babel-preset-env
//引入文件模块
npm install extract-text-webpack-plugin --save-dev
npm install --save-dev extract-text-webpack-plugin babel-loader babel-core babel-preset-env css-loader style-loader sass-loader


导出模块: export default {}
引入模块: import 名字 from 模块名实时刷新: npm install webpack-dev-server -g
   