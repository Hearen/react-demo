module.exports = {
    entry: "./src/entry.jsx",
    output: {
        path: __dirname+'/build',
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },  
            {   
                 test: /\.jsx?$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     'presets': [
                         'es2015',
                         'react',
                         'stage-2'
                     ]
                 }
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "eslint-loader"
            },
            {
                test: /\.html$/,   
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8003
    }
};
