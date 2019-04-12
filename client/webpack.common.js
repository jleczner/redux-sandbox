const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: "/node-modules/",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader","eslint-loader"]
			},
			{
				test: /\.(css|less)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: "file-loader",
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
	resolve: {
		alias: {
			app: path.resolve(__dirname, "src/app"),
			containers: path.resolve(__dirname, "src/containers"),
			components: path.resolve(__dirname, "src/components")
		},
		extensions: [".js"]
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	}
};