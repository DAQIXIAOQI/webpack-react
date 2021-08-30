const { merge } = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base');

const webpackDevConfig = {
    mode: 'development',
    output: {
        filename: '[name].js',
    },
};

module.exports = merge(webpackBaseConfig, webpackDevConfig);
