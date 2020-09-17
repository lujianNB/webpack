/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 入口文件
 * @Date: 2020-09-14 23:25:14
 * @LastEditTime: 2020-09-18 00:35:23
 */
import { hello } from './test.js'
import './style/index.css'
import './style/less.less'
import './style/sass.scss'
import './style/stylus.styl'
document.querySelector('#app').innerHTML = hello()