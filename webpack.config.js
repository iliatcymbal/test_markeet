const path= require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');

const package = require('./package');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {

    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'prod')
    },
    mode: isProduction ? 'production' : 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.s?css$/,
                use: [
                    /*{
                        loader: 'style-loader',
                        options: { attrs: { id: 'testme' }, singleton: true }
                    },*/
                    CssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },

    plugins: [
        new HTMLPlugin({
            title: package.name,
            template: './index.html',
            version: package.version
        }),

        new CssPlugin({ filename: 'main.css' })
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },

    devtool: isProduction ? undefined : 'source-map'
};
