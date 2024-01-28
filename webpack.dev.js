const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: { filename: "main.js" },
    mode: "development",
    stats: {
        children: false,
        modules: false,
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devServer: {
        static: "./dist",
        port: 3001,
        hot: true,
        allowedHosts: "all",
        client: {
            logging: "info",
        },
    },
};
