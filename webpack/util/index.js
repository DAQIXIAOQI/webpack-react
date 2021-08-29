const path = require('path');

const cwd = process.cwd();
const distPath = path.resolve(cwd, 'lib');

module.exports = {
    distPath,
};
