const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const args = require('yargs').argv;
const copyPlugin = require('copy-webpack-plugin');

const package = require('../package');
const isProduction = process.env.NODE_ENV === 'production';
const isStylesExternal = args.env && args.env.styles;

const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

const plugins = [
  new HTMLPlugin({
    title: package.name,
    template: './index.html',
    version: package.version
  }),

  new webpack.HotModuleReplacementPlugin(),

  new webpack.ProvidePlugin({
    connect: ['react-redux', 'connect'],
    React: 'react',
    Component: ['react', 'Component']
  }),

  new copyPlugin(images.map(ext => ({ from: `**/*/*.${ext}`, to: 'images/[name].[ext]' })))
];

if (isStylesExternal) {
  plugins.push(new CssPlugin({ filename: 'main.css' }));
}

module.exports = {
  entry: ['babel-polyfill', '../src/app.js'],
  context: path.resolve(__dirname, '../src'),
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  mode: isProduction ? 'production' : 'development',

  module: {
    rules: [
     /* {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-regenerator'
            ],
          }
        }
      },

      {
        test: /\.s?css$/,
        use: [
          isStylesExternal ? CssPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 500000
            }
          }
        ]
      }

    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  devtool: isProduction ? undefined : 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'prod'),
    publicPath: '/',
    port: 9005,
    hot: true,
    historyApiFallback: true,
  }
};
