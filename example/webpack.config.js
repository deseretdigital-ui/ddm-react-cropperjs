/* eslint-env node */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'example.jsx'),
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'example.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.(s?)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ]
};
