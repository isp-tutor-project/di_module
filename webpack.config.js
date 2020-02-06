const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app-bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|jpg)$/, use: ['file-loader']}
        ]
    }
}