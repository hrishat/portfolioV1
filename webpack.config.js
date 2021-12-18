const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.js"),

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },

    devtool: "inline-source-map",
    // context: path.resolve(__dirname,"src"),

    devServer: {
        port: 8080,
        static: path.resolve(__dirname, "public"),
        historyApiFallback: true,
        compress: true
    },

    performance: {
        hints: false
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }

                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif|mp4|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]

    },

    externals: {
        jquery: "jQuery",
        Popper: "popper.js"
    }


};