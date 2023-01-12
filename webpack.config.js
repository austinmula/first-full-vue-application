const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: { directory: path.join(__dirname, "dist") },
        port: 3001,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                exclude: /(node_modules)/,
                use: {
                    loader: "vue-loader",
                },
            },
            {
                test: /\.scss$/,
                use: [{ loader: "vue-style-loader" },
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                },
                { loader: "css-loader" },
                { loader: "sass-loader" },],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ],
    }
    ,
    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ], optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
};