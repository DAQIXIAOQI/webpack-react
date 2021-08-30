const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { resolve, distPath, cwd } = require('./util');

module.exports = {
    target: 'web',
    entry: {
        'index': path.resolve(cwd, 'src/page-index/index.tsx'),
    },
    output: {
        path: distPath,
        assetModuleFilename: 'static/asset/[name].[contenthash:8][ext]',
        environment: {
            // arrowFunction: false,
            const: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]',
                            },
                        },
                    }
                ],
            },
        ],
    },
    resolve,
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
