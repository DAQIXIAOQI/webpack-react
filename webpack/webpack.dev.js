const { merge } = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base');

const webpackDevConfig = {};

module.exports = merge(webpackBaseConfig, webpackDevConfig);
