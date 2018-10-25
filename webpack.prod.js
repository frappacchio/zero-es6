const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  watch: true,
  output: {
    libraryTarget: 'umd',
    library: 'zero',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  plugins: [
    new UglifyJsPlugin({
      extractComments: /^\**!|@preserve/,
      warningsFilter: src => src.split('node_modules\\classnames').length === 1,
    }),
  ],
};
