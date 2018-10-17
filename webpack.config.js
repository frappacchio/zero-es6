const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  watch: true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

    /* path: path.resolve(__dirname, 'umd'),
    filename: 'zero.js',
    libraryTarget: 'umd',
    library: 'zero',
    umdNamedDefine: true,
    globalObject: 'this', */

  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
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
};
