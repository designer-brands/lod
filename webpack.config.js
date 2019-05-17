const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "lod.js",
		library: "lod"
	},
	module: {
		rules: [{
			test: /.js$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		}]
	},
	plugins: [
		new CleanWebpackPlugin()
	]
};