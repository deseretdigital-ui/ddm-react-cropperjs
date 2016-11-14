var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'example.jsx'),
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'example.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.(s?)css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader?browsers=last 2 versions'
        )
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
