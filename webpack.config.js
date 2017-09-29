const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    //本地服务器
    devServer: {
        contentBase: "./",          //本地服务器所加载的页面所在的目录
        historyApiFallback: false,  //依赖HTML5 history API,如果设置为true,所有的页面跳转指向index.html
        inline: true                //实时刷新
    },
    //多个入口文件
    entry: {
        //vendor: ["jquery", "other-lib"],
        //main: './entry.js',
        index:'./public/js/index.js',
        //list:'./public/js/list.js'
        //...多个页面的入口
    },
    output: {
        filename: '[name].bundle.js',
        //path: __dirname + '/src/dist',
        path: path.resolve(__dirname, 'build'), //将参数__dirname位置的字符,解析到一个绝对路径(build)里。
        publicPath: '/assets/',
        //publicPath: 'http://localhost:8080/build',
        //path: path.resolve(__dirname, 'build'), filename: '[name].bundle.js', publicPath: './build/'
    },
    module: {
        rules: [
            {
                test: /.(jpg|png|gif|svg)$/,
                use: ['url-loader?limit=8192&name=./[name].[ext]']
            },/*解析图片*/
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
            /*{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },*/
            //style!css
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                })
            },
            /*{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }*/
        ]
    },
    plugins: [
        //提取公共部分 CommonsChunkPlugin('common')
        new webpack.optimize.CommonsChunkPlugin({
            //name: "vendor",
            name: "common",
            //filename: "vendor.js"
            // (给 chunk 一个不同的名字)

            // minChunks: 3, // (模块必须被3个 入口chunk 共享)

            // 随着 entrie chunk 越来越多，
            // 这个配置保证没其它的模块会打包进 vendor chunk
        }),
        extractSass,
        new webpack.optimize.UglifyJsPlugin(), //压缩代码
    ]
};
