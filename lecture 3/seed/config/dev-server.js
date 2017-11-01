module.exports = {
	historyApiFallback: true,
	compress          : true,
	quiet             : false,
	noInfo            : false,
	headers           : {"X-Custom-Header" : "yes"},
	stats             : {colors: true},
	port              : 8080,
	inline            : false,
	hot               : true,
	watchOptions      : {
		poll: true
	}
};