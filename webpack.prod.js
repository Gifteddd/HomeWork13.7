const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: { filename: "main.js" },
    mode: "production",
    stats: {
        children: false,
        modules: false,
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};
