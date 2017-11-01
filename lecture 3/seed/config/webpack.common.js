const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers           = require('./helpers');
const path              = require("path");
const loaders           = require('./loaders');

function dirPath(concatPath) {
	return path.join(__dirname, concatPath);
}

module.exports = {
	entry: {
		'app'      : './src/main.ts',
		'polyfills': './src/polyfills.ts'
	},

	output: {
		path    : helpers.root('dist'),
		filename: '[name].js'
	},

	resolve: {
		extensions: [".js", ".ts", ".html", ".css"],
		modules   : [
			dirPath("/src"),
			"node_modules"
		]
	},

	module: {
		rules: loaders
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name     : "vendor",
			minChunks: Infinity
		})
	]
};