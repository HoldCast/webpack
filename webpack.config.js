const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonJS = new webpack.optimize.CommonsChunkPlugin('common'); //提取公共部分
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: false,//不跳转index
        inline: true//实时刷新
    },
    entry: {
        //main: './entry.js',
        index:'./public/js/index.js',
        //list:'./public/js/list.js'
        //...多个页面的入口
    },
    output: {
        filename: '[name].bundle.js',
        //path: __dirname + '/src/dist',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8080/build',
        //publicPath: './build/'
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
                        presets: ['env'],
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
        commonJS,
        extractSass,
        //new webpack.optimize.UglifyJsPlugin(), //压缩代码
    ]
    /*
     *
     * entry: {
     app: './src/app.js',
     search: './src/search.js'
     },
     output: {
     filename: '[name].js',
     path: __dirname + '/dist'
     }
     * */
};
