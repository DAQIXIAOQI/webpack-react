const webpack = require('webpack');

const webpackConfig = require('../webpack/webpack.dev');

const compiler = webpack(webpackConfig);

compiler.run();
