module.exports = {
    entry: {
        //main: './entry.js',
        pageOne: './src/pageOne/entry.js',
        //pageTwo: './src/pageTwo/entry.js',
        //pageThree: './src/pageThree/entry.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/src/dist'
    },
    module: {
        rules: [
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
            //style!css
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    }
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
