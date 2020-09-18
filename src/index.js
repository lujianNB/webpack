/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 入口文件
 * @Date: 2020-09-14 23:25:14
 * @LastEditTime: 2020-09-19 02:03:01
 */
import { hello } from './test.js'
import './style/index.css'
import './style/less.less'
import './style/sass.scss'
import './style/stylus.styl'
const arr = [1, 2, 3]
const obj = {
    a: 'a',
    b: 'b',
    c: 'c'
}
const bigInt = 123n
const newBigInt = 456n
console.log(bigInt + newBigInt)
console.log(Object.keys(obj))
console.log(obj.d?.a ?? 10)
arr.forEach(item => console.log(item))
document.querySelector('#app').innerHTML = hello()