/* eslint-env node */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(s?)css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
