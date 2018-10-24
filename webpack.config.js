const merge = require('webpack-merge');
const yargs = require('yargs');
const path = require('path');
const webpackDev = require('./webpack.dev');
const webpackProd = require('./webpack.prod');

const PRODUCTION = !!(yargs.argv.production);
const CONFIG = !PRODUCTION ? webpackDev : webpackProd;

module.exports = merge(CONFIG, {
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-classes'],
          },
        },
      },
    ],
  },

  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
