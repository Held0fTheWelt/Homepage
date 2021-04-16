/*
 * This hash helps exerslide to determine whether the file needs to be updated
 * or not. Please don't remove it.
 * @exerslide-file-hash deleted
 */

'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const exerslide = require('exerslide');
const exerslideConfig = require('./exerslide.config');
const path = require('path');
const webpack = require('webpack');

const PROD = process.env.NODE_ENV === 'production';

const plugins = [
  new webpack.DefinePlugin({
    '__DEV__': !PROD,
    'process.env.NODE_ENV':
    JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
  new ExtractTextPlugin('[name].css'),
  new HTMLWebpackPlugin({
    hash: true,
    template: './index.html',
    chunksSortMode: function(a,b) {
      // styles.css should always come last so that it can overwrite app specfic
      // rules
      if (a.names[0] === 'styles') {
        return 1;
      }
      if (b.names[0] === 'styles') {
        return -1;
      }
      return a.names[0].localeCompare(b.names[0]);
    },
  }),
];

if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false,
    },
  }));
}

module.exports = {
 
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      // By default this loader is only applied to the index.html file, not to
      // HTML slides
      {
        test: /index\.html$/,
        loader: 'html',
        exclude: /slides\//,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules\/(?!exerslide\b)/,
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-0'),
          ],
          plugins: [
            require.resolve('babel-plugin-transform-runtime'),
          ],
        },
      },
      {
        test: /\.(json|rar)$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?importLoaders=1!autoprefixer?{"browsers": "> 1%"}'
        ),
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader?name=[name]-[sha512:hash:base64:7].[ext]',
      },
      // This is required for font-awesome's font files
      {
        test: /\.(svg|ttf|woff2?|eot)(\?.*)?$/,
        loader: 'file-loader?name=[name]-[sha512:hash:base64:7].[ext]',
      },
      // For video
      {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader?name=[name]-[sha512:hash:base64:7].[ext]&mimetype=video/mp4',
      },
    ],
  },
  plugins: plugins,
  htmlLoader: {
    attrs: ['video:src','source:src','img:src', 'link:href', 'script:src'],// For video
  },  
};