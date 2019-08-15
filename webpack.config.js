const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        'deepClone': './src/index.js',
        'deepClone.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'deepClone',
        libraryExport: 'default',
        libraryTarget: 'umd' 
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ // 遇见es6会进行转换
                include: /\.min\.js$/
            }),
        ]
    }
}