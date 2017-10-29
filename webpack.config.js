const { join, resolve } = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const root = resolve(__dirname)
const src = join(root, 'src')
const app = join(root, 'src/app.js')

const webpackConfig = {
	context: root,
	entry: {
		app: [
			'babel-polyfill',
			app
		]
	},
	output: { filename: 'bundle.js' },
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', include: [src] },
			{ test: /\.css$/, include: [src], use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'postcss-loader', options: { plugins: [autoprefixer] } }
			] }
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = webpackConfig