/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  paths(paths) {
    paths.appIndexJs = path.resolve(__dirname, 'client/src/index.js');
    paths.appSrc = path.resolve(__dirname, 'client/src');
    paths.appPublic = path.resolve(__dirname, 'client/public');
    paths.appHtml = path.resolve(__dirname, 'client/public/index.html');
    return paths;
  },
};
