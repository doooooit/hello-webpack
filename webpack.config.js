var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.resolve( __dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }]
    }
}