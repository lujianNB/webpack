/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: webpack(配置项)
 * @Date: 2020-09-14 22:45:51
 * @LastEditTime: 2020-09-15 01:18:13
 */
"use strict"


const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    ]
}