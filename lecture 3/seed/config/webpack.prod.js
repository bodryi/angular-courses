const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const plugins = require('./plugins');

module.exports = webpackMerge(commonConfig, {
	devtool: 'eval',

	plugins: plugins
});