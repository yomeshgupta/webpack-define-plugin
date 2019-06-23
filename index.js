const Promise = require('bluebird');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));
const webpack = require('webpack');

const CONFIG_PATH = './src/configs/config-1.json';

function init() {
	return fs
		.readFileAsync(CONFIG_PATH, { encoding: 'utf8' })
		.then(content => {
			return new Promise((resolve, reject) => {
				let config = void 0;

				try {
					config = JSON.parse(content);
				} catch (err) {
					reject(err);
				}

				if (!config || !Object.keys(config).length) return reject('Empty Config Found');

				const compiler = webpack({
					mode: 'production',
					entry: path.join(__dirname, 'src', 'index.js'),
					output: {
						path: path.join(__dirname, 'dist'),
						filename: 'bundle.js'
					},
					module: {
						rules: [
							{
								test: /.jsx?$/,
								loader: 'babel-loader',
								exclude: /node_modules/
							}
						]
					},
					plugins: [new webpack.DefinePlugin({ ...config })]
				});
				new webpack.ProgressPlugin().apply(compiler);
				compiler.run(err => {
					return err ? reject(err) : resolve();
				});
			});
		})
		.then(() => console.log('Bundle written successfully'))
		.catch(err => console.log(`Error while creating webpack bundle and err is ${err}`));
}

init();
