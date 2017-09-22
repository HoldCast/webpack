module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',  //默认开启sourcemap
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/ //排除目录
        }]
    }
};