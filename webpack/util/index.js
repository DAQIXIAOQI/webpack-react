const path = require('path');

const cwd = process.cwd();
const distPath = path.resolve(cwd, 'lib');

const resolve = {
    extensions: ['.tsx', '.ts', '.js'],
};

module.exports = {
    cwd,
    distPath,
    resolve,
};
