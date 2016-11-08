var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(
      __dirname,
      'example/example.jsx'
  ),
  output: {
    path: path.resolve(__dirname, 'example'),
    filename: 'example.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      },
      {
        test: /\.(s?)css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader?browsers=last 2 versions'
        )
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../dist/styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
