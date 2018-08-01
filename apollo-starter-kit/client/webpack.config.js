const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssExtractPlugin =  new MiniCssExtractPlugin({
  inject: false,
  hash: true,
  filename: "[name].css",
  chunkFilename: "[id].css"
})

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'style.css'
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
        {
          test: /\.(png|jpg|svg|pdf|gif)$/,
          loader: 'url-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader']
            })
        },
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
            loader: "postcss-loader"
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
    plugins: [htmlPlugin,miniCssExtractPlugin,extractTextPlugin],
    
  };