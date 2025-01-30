const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: {
            type: "umd",
        },
        globalObject: "this",
        clean: true,
    },
    externals: [nodeExternals()], // Exclude react & react-dom
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // ✅ Handle both .js and .jsx
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            require.resolve("@babel/preset-env"),
                            require.resolve("@babel/preset-react"),
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    resolve: {
        extensions: [".js", ".jsx"],  // ✅ Ensure Webpack resolves .jsx files
    },
    mode: "production",
};
