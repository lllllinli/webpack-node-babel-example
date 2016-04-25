var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

// todo 多個輸出

module.exports = {
	target:  "web",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: false,
	entry:   ["../src/client/client"],
	output:  {
		path:          path.join(__dirname, "../static"),
		filename:      "client.js",
		chunkFilename: "[name].[id].js"
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("client.css"),
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
	],
	module:  {
		loaders: [
			{
				test: /\.json$/,
				loaders: ["json"]
			},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss', 'sass')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url?limit=8192'
      },
      {
        test : /\.(woff|woff2|ttf|eot)$/,
        loader: 'url'
      }
		],
		postLoaders: [
			{test: /\.js$/, loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"], exclude: /node_modules/}
		],
		noParse: /\.min\.js/
	},
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
		fs:        'empty'
	}
};
