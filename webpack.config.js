const path = require("path")

module.exports = {
    entry: path.join(__dirname, "js/app.js"),
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ],
            test: /\.(s)?css$/
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "js/"),
        historyApiFallback: true,
        watchOptions: {
            poll: true
        },
        watchContentBase: true,
        open: true,
        publicPath: "/scripts/"
    }
}