'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [ 'babel-polyfill', './src/index.jsx' ],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel?{presets:["es2015","stage-0","react"],plugins:["transform-decorators-legacy","add-module-exports"]}',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css'
            ),
            exclude: /node_modules/
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};
