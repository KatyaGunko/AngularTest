var BowerWebpackPlugin = require("bower-webpack-plugin");


module.exports = {
    context: __dirname + '/public',
    entry: "./app.js",
    output: {
        path: __dirname + '/public/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [new BowerWebpackPlugin()]
};