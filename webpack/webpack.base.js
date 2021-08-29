const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');

const { distPath } = require('./util');

module.exports = {
    target: 'web',
    entry: {

    },
    output: {
        path: distPath,
        assetModlueFilename: 'static/asset/[name].[contenthash:8][ext]',
        environment: {
            arrowFunction: false,
            const: false,
        },
    },
    module: {

    },
    resolve: {

    },
    plugins: [

    ],
};
