module.exports = [
		{
			test: /\.ts/,
			use : [
				{
					loader : "ts-loader"
				},
				{
					loader: "angular2-template-loader"
				}
			]
		},
		{
			test  : /\.html/,
			loader: 'html-loader'
		},
		{
			test   : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader : "url-loader",
			options: {
				limit   : 1000000000000,
				mimetype: "application/font-woff"
			}
		},
		{
			test   : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader : 'url-loader',
			options: {
				limit   : 65000,
				mimetype: "image/svg+xml"
			}
		},
		{
			test   : /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/,
			loader : 'url-loader',
			options: {
				limit   : 65000,
				mimetype: "application/octet-stream"
			}
		},
		{
			test   : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader : 'url-loader',
			options: {
				limit   : 65000,
				mimetype: "application/vnd.ms-fontobject"
			}
		},
		{
			test   : /\.png$/,
			loader : 'url-loader',
			options: {
				mimetype: 'image/png'
			}
		},
		{
			test   : /\.css$/,
			exclude: /node_modules/,
			use    : [
				"to-string-loader",
				"css-loader"
			]
		}
	];