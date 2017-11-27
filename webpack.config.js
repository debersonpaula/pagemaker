var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    context: __dirname,
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
            { test: /\.hbs$/, loader: "handlebars-loader",
                query: {
                    helperDirs: [__dirname + "/src/lib/hbs"]
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.hbs',
            data: {
                username: 'Jack'
            }
        }),
    ]
};
  
module.exports = webpackConfig;