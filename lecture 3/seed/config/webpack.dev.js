const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const devServer = require('./dev-server');

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',

	devServer: devServer
});