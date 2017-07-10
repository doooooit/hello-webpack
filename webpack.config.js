const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.resolve( __dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
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