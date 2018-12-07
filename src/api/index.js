/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '/api';
//const BASE = ''; //打包

export const reqMsite = () => ajax("/msite");
export const reqCategory = () => ajax("/classify");
export const reqShiWuArr = () => ajax("/shiwu");
export const reqNewData = () => ajax("/shiwu/new");
export const reqDaRen = () => ajax("/shiwu/daren");
export const reqHome = () => ajax("/shiwu/home");
