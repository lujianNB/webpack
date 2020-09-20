/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: webpack(配置项)
 * @Date: 2020-09-14 22:45:51
 * @LastEditTime: 2020-09-20 23:59:49
 */
"use strict"


const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { options } = require('less')
module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(), // 我们要在 build 之前把它们全清空，这真是 clean-webpack-plugin 发挥的作用。
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.((c|le|sc)ss)|styl$/,
                use: ['style-loader', 'css-loader', "postcss-loader", 'less-loader', 'sass-loader', 'stylus-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',
                        name: '[name].[ext]',
                        limit: 10 * 1024
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name:'[name]-[hash:5].min.[ext]'
                    }
                }
            }
        ]
    }
}