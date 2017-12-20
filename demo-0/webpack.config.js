module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
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
