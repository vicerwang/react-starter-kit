'use strict';

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: [
                'react-hot',
                'babel?{presets:["es2015","stage-0","react"],plugins:["transform-decorators-legacy","add-module-exports"]}'
            ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: [
                'react-hot',
                'style',
                'css'
            ],
            exclude: /node_modules/
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};
