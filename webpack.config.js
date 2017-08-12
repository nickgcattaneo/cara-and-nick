const path = require('path')
const webpack = require('webpack')

const root = path.resolve(__dirname)
const src = path.join(root, 'src')
const app = path.join(root, 'src/app.js')

const webpackConfig = {
	context: root,
	entry: app,
	output: { filename: 'bundle.js' },
	plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = webpackConfig