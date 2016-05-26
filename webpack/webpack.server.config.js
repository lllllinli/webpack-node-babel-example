var webpack       = require("webpack");
var nodeExternals = require("webpack-node-externals");
var path          = require("path");
var fs            = require("fs");
var pkg           = require(path.join(__dirname, "..", "./package.json"));

var ENTRY_PATH = path.join(__dirname, "..", "./src/server/server" );
var OUTPUT_PATH = path.join(__dirname, "..", "/dist");

module.exports = {
	target:  "node",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: "source-map",
	entry: [ENTRY_PATH],
	output:  {
		path:          OUTPUT_PATH,
		filename:      "server.js"
	},
	plugins: [],
	module:  {
		loaders: [
			{
				test: /\.json$/, loaders: ["json"]
			},
			{
				test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
				loaders: ["file?context=static&name=/[path][name].[ext]"],
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"],
				exclude: /node_modules/
			}
		],
		postLoaders: [],
		noParse: /\.min\.js/
	},
	externals: [nodeExternals({
		whitelist: ["webpack/hot/poll?1000"]
	})],
	resolve: {
		modulesDirectories: [
			"src",
			"node_modules",
			"static"
		],
		extensions: ["", ".json", ".js"]
	},
	node:    {
		__dirname: true,
		fs:        "empty"
	}
};
