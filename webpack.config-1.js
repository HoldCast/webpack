/*传统方式*/

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app/main.js',   //入口文件的位置
    output: {
        path: __dirname + '/assets',    //打包后的文件放置的位置
        filename: 'webpack.js',         //打包后的文件名称
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css/,
                loaders: "style-loader!css-loader"  //从右往左执行
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],   //所有模式
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    },
    //插件使用
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   //热加载，hot:true,已经不起作用
        new webpack.BannerPlugin('holdcast 出品！'), //版权声明
        new htmlWebpackPlugin({
            template: __dirname + '/app/index.html'    //通过这个模板生成index.html
        })
        /*//提取公共部分 CommonsChunkPlugin('common')
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
         new webpack.optimize.UglifyJsPlugin(), //压缩代码*/
    ],
    //本地服务器 //webpack-dev-server --inline
    devServer: {
        contentBase: "./assets",    //监听改变的目录
        historyApiFallback: false,  //依赖HTML5 history API,如果设置为true,所有的页面跳转指向index.html.spa时使用
        inline: true                //实时刷新
    }
};