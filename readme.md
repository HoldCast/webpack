# webpack基本配置和热部署方法

### 一、遵循AMD规范 commonJS;
### 二、将js css(less/sass) img ES6自动打包成浏览器可识别js文件
### 三、适用于spa项目应用

[git地址](https://github.com/HoldCast/webpack)
<!-- ![](图片链接地址) -->

#### 配置方法：


1.npm install webpack -g //全局安装webpack

2.npm init //当前目录下，创建配置项

3.安装其他依赖项
    npm install --save-dev webpack jquery  url-loader json-loader style-loader css-loader less-loader node-sass sass-loader extract-text-webpack-plugin babel-loader babel-core babel-preset-env postcss-loader autoprefixer html-webpack-plugin

4.webpack app/main.js public/webpack.js //（此命令可以手动生成js文件）

5.webpack //配置webpack.config.js(必须安装全局webpack。否则要选择路径)

6.package.js 配置 ：
"scripts": {
    "start" : "webpack",  //运行时输入 start (star相当于关键字,其他字符只能用下面的方法)
    "go": "webpack",      //运行时输入 npm run go
}

7.{
      test: /\.css/,
      loaders: "style-loader!css-loader"  //注意 从右往左执行,使用"!"链接多个loader
  }
  
8.实时刷新服务器环境安装: npm install webpack-dev-server -g


    其他：
    webpack //生产环境
    webpack -p //生产环境(压缩)
    webpack -w //自动监听
    webpack -d //开启(source maps)调试
    webpack -wpd

    //修改默认配置文件名(极其不推荐)
    若不用webpack.config.js,运行时: webpack --config 文件名.js

    //babel 以及预设模块
    //引入文件模块
    npm install extract-text-webpack-plugin --save-dev

    导出模块: export default {}
    引入模块: import 名字 from


## 官方文档
### [https://doc.webpack-china.org/](https://doc.webpack-china.org/)

## webpack 优秀文章
### [https://github.com/webpack-china/awesome-webpack-cn](https://github.com/webpack-china/awesome-webpack-cn)
