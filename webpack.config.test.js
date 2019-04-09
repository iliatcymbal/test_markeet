const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'prod')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },

            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },
};
