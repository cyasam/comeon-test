const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  devtool: 'eval-source-map',
  output: {
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader', 
            options: {
              keepQuery: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    proxy: {
      'api.comeon.test': 'http://localhost:3000'
    },
    contentBase: path.resolve(__dirname, 'dist'),
    port: 5665,
    historyApiFallback: true
  }
};

module.exports = merge(config, baseConfig);