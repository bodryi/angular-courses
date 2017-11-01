const OptimizeJsPlugin = require('optimize-js-plugin');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = [
	new OptimizeJsPlugin({
		sourceMap: false
	}),
	new webpack.optimize.UglifyJsPlugin({
		beautify: false,
		comments: false,
		mangle: {
			screw_ie8: true
		},
		compress: {
			screw_ie8: true,
			warnings: false,
			conditionals: true,
			unused: true,
			comparisons: true,
			sequences: true,
			dead_code: true,
			evaluate: true,
			if_return: true,
			join_vars: true,
			negate_iife: false
		}
	}),
	new webpack.DefinePlugin({
		'process.env': {
			'ENV': JSON.stringify(ENV)
		}
	}),
	new CompressionPlugin({
		asset: "[path].gz[query]",
		algorithm: "gzip",
		test: /\.js$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	})
];