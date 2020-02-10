const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app-bundle.js"
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|jpg)$/, use: ['file-loader']}
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "development",
            DEBUG: true
        })
    ]
}