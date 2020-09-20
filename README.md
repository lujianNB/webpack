# webpack
## webpack环境搭建

## 1.npm init

## 2.安装webpack和webpack-cli
### npm i webpack webpack-cli -D
### "use strict"
### 
### 
### const path = require('path')
### module.exports = {
###     mode: 'development',
###     entry: {
###         main: path.join(__dirname, 'src/index.js')
###     },
###     output: {
###         filename: '[name].js',
###         path: path.join(__dirname, 'dist')
###     }
### }

## 3.安装clean-webpack-plugin自动清理构建目录
### npm i clean-webpack-plugin -D
### 在webpack.config.js中
### const { CleanWebpackPlugin } = require('clean-webpack-plugin')
### plugins: [
###     new CleanWebpackPlugin()
### ]

## 4.安装html-webpack-plugin构建html模版页面(这里网上推荐html-webpack-plugin-for-multihtml可以解决多页面热部署慢的问题，但是会报错,只需要开启multihtmlCache: true    // 解决多页热部署的关键，详细属性介绍请看https://www.npmjs.com/package/html-webpack-plugin)
### npm i html-webpack-plugin -D
### 在webpack.config.js中
### const HtmlWebpackPlugin = require('html-webpack-plugin')
### plugins: [
###     new CleanWebpackPlugin()
###     new HtmlWebpackPlugin({
###     "template": path.join(__dirname, './src/index.html')
### })
### ]

## 5.添加css解析
### npm i -D style-loader css-loader less less-loader node-sass sass-loader stylus stylus-loader
### 在webpack.config.js中配置
### module: {
###     rules: [
###         {
###             test: /\.((le|c|sc)ss)|styl$/,
###             use: [
###                 "style-loader", // 生成style插入head
###                 "css-loader", // 合并所有css，让他模块话
###                 "less-loader",
###                 "sass-loader",
###                 "stylus-loader"
###             ] // 这里注意执行顺序是自下而上，自右而左。
###         }
###     ]
### }

## 6.安装postcss postcss-loader autoprefixer自动添加样式前缀
### npm i -D postcss postcss-loader autoprefixer
### 在webpack.config.js中添加postcss-loader(注意放在css-loader后面，放在stylus-loader会出错)
### 新建.postcssrc.js或者postcss.config.js或者直接写在package.json中
### module.export = {
###     "plugins": [
###         require('autoprefixer')
###     ]
### }
### 然后添加浏览器版本信息，在package.json中添加
### "browserslist": [
###     "> 1%",
###     "last 2 verions",
###     "not ie <= 8"
### ]

## 7.安装babel兼容es6语法
### npm i -D @babel/core @babel/preset-env babel-loader
### webpack.config.js中添加
### {
###     test: /\.js$/
###     exclude: /node_modules/,
###     use: "babel-loader"
### }
### 新建.babelrc
### {
###     "presets": [
###         "@babel/preset-env"
###     ]
### }

## 8.按需引入polyfill兼容代码(像es11新语法)
### npm i -D core-js@2 @babel/runtime @babel/runtime-corejs2 @babel/plugin-transform-runtime
### 在.babelrc中添加
### {
###     "presets": [
###         [
###             "@babel/preset-env",
###             {
###                 "corejs": 2,
###                 "useBuiltIns": "usage"
###             }
###         ]
###     ],
###     "plugins": [
###         "@babel/plugin-transform-runtime"
###     ]
### }
## 9.安装file-loader,url-loader处理图片和字体问题
### 在webpack.config.js中添加
### module: {
###     rules: [
###         {
###             test: /\.(jpg|png|svg|jpeg|gif)$/,
###             use: {
###                 loader: 'url-loader',
###                 options: {
###                     outputPath: 'images/',
###                     name: '[name].[ext]',
###                     limit: 10 * 1024
###                 }
###             }
###         },
###         {
###             test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
###             use: {
###                 loader: 'url-loader',
###                 options: {
###                     limit: 10000,
###                     name:'[name]-[hash:5].min.[ext]'
###                 }
###             }
###         }
###     ]
### }