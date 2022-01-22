const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		main: "./src/main.js"
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "./bundle-[contenthash].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							url: false
						}
					}
				]
			},
			{
				test: /backgroundImages\.js$/,
				use: "val-loader"
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({template: "./src/index.html"}),
		new MiniCssExtractPlugin({filename: "style-[contenthash].css"}),
		new CopyWebpackPlugin({patterns: [{from: "static"}]})
	]
};
