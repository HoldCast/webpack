const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //__dirname是nodejs的全局变量，只想项目根目录
    entry:__dirname + '/app/main.js',   //入口文件的位置
    output: {
        path: __dirname + '/public',    //打包后的文件放置的位置
        filename: 'webpack.js',         //打包后的文件名称
    },
    devtool: 'source-map',  //默认开启sourcemap
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css/,
                //loaders: "style-loader!css-loader!postcss-loader"  //从右往左执行
                loaders: "style-loader!css-loader"  //从右往左执行
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],   //所有模式
                        //plugins: ['transform-runtime']
                    }
                }

                /*use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],   //所有模式
                        //plugins: ['transform-runtime']
                    }
                }*/
            },
        ]
    },
    /*postcss:[
        require('autoprefixer')    //postcss插件依赖autoprefixer
    ],*/
    //插件使用
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   //热加载，hot:true,已经不起作用
        new webpack.BannerPlugin('holdcast 出品！'), //版权声明
        new htmlWebpackPlugin({
            template: __dirname + '/app/t1.html'    //通过这个模板生成index.html
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
    //本地服务器
    devServer: {
        contentBase: "./",    //监听改变的目录
        historyApiFallback: false,  //依赖HTML5 history API,如果设置为true,所有的页面跳转指向index.html.spa时使用
        inline: true,               //实时刷新
        //colors: true,               //终端颜色，通过插件才起作用
        //hot:true,                  //热加载
    }
};