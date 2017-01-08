const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index')
  ],
  output: {
    path: __dirname,
    filanem: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    alias: {
      'rxjs-store-logger': path.join(__dirname, '..', 'src')
    },
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};
