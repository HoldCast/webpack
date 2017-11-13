//实际配置可参考官方文档或下面的文档
//http://www.css88.com/doc/webpack/
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //插件模块
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //多个入口文件
    entry: {
        //vendor: ["jquery", "other-lib"],
        //main: './entry.js',
        index:'./app/main.js',
        //list:'./public/js/list.js'
        //...多个页面的入口
    },
    output: {
        filename: '[name].bundle.js',
        //path: __dirname + '/src/dist',
        path: path.resolve(__dirname, 'assets'), //__dirname:项目根目录;path.resolve:将参数__dirname位置的字符,解析到一个绝对路径(assets)里。
        //publicPath: 'http://localhost:8080/build',
        //path: path.resolve(__dirname, 'build'), filename: '[name].bundle.js', publicPath: './build/'
    },
    module: {
        rules: [
            //解析图片
            {
                test: /.(jpg|png|gif|svg)$/,
                use: ['url-loader?limit=8192&name=./[name].[ext]']
            },
            //babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],   //所有模式
                        //plugins: ['transform-runtime']
                    }
                }
            },
            //css
            /*{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },*/
            //style!css
            //解析成外部文件格式
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            //sass解析为css文件，less同理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            //直接解析sass
            /*{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }*/
        ]
    },
    /*postcss:[
        require('autoprefixer')    //postcss插件依赖autoprefixer
    ],*/
    //插件
    plugins: [
        //提取公共部分 CommonsChunkPlugin('common')
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            //filename: "vendor.js"
            // (给 chunk 一个不同的名字)
            // minChunks: 3, // (模块必须被3个 入口chunk 共享)
            // 随着 entrie chunk 越来越多，
            // 这个配置保证没其它的模块会打包进 vendor chunk
            //..
        }),
        //解析成css文件
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: process.env.NODE_ENV === "development"
        }),
        //new webpack.optimize.UglifyJsPlugin(), //热部署不能使用 压缩代码
        new webpack.BannerPlugin('holdcast 出品！'), //版权声明
        new htmlWebpackPlugin({
            template: __dirname + '/app/index.html'    //通过这个模板生成index.html
        })
    ],
    //配置本地服务器
    devServer: {
        contentBase: "./assets",          //本地服务器所加载的页面所在的目录
        historyApiFallback: false,  //依赖HTML5 history API,如果设置为true,所有的页面跳转指向index.html
        inline: true                //实时刷新
    }
};
