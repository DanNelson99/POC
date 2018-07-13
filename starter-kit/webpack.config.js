const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');



const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssExtractPlugin =  new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
})



module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: 'bundled.js'
      },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        // {
        //     test: /\.css$/,
        //     use: ["style-loader", "css-loader"]
        // },
        {
          test: /\.scss$/,
          use: [{
            loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              includePaths: ["absolute/path/a", "absolute/path/b"],
              sourceMap: true
            }
          }]
        }
      ]
    },
    plugins: [htmlPlugin,miniCssExtractPlugin]
  };