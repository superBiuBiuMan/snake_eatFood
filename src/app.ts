//兼容性处理
// import "@babel/polyfill"
//引入样式文件
import "./css/index.less"

import Control from "./js/Control";


new Control();




//  Getting a random integer between two values, inclusive
// function getRandomIntInclusive(min: number, max: number): number {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }