var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(
      __dirname,
      'example/example.jsx'
  ),
  output: {
    filename: 'example/example.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
