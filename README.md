# webpack
webpack环境搭建
1.npm init
2.安装webpack和webpack-cli
npm i webpack webpack-cli -D
"use strict"


const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    }
}
3.安装clean-webpack-plugin自动清理构建目录
npm i clean-webpack-plugin -D
在webpack.config.js中
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
plugins: [
    new CleanWebpackPlugin()
]
4.安装html-webpack-plugin构建html模版页面(这里网上推荐html-webpack-plugin-for-multihtml可以解决多页面热部署慢的问题，但是会报错,只需要开启multihtmlCache: true    // 解决多页热部署的关键，详细属性介绍请看https://www.npmjs.com/package/html-webpack-plugin)
npm i html-webpack-plugin -D