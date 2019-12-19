/**
 * @desc 该js主要存一些常用的dom操作方法
 * @author xzh19971005@163.com
 * */

/**
 * @desc 给元素添加class
 * @param {Object} el
 * @param {string} className
 * */
export function addClass(el, className){
    if(el.classList){
        el.classList.add(className)
    }
    else{
        el.className += ` ${className}`
    }
}

/**
 * @desc 给元素添加class
 * @param {Object} el
 * @param {string} className
 * */
export function removeClass(el, className){
    if(el.classList){
        if(!dom.classList.contains(className)){
            console.warn(`该元素无此类名${className}!` )
        }
        else{
            dom.classList.remove(className);
        }
    }
    else{
        let classArr = el.className.split(' ');
        classArr = classArr.filter(item => item !== className);
        el.className = classArr.join(' ');
    }
}
/**
 * @desc 获取元素样式
 * @param {Object} el
 * @param {string} attr
 * */
export function getStyle(el, attr){
    if(!attr) console.error('请输入要获取的样式名')
    return el.currentStyle ? el.currentStyle[attr] : window.getComputedStyle(el,null)[attr];
}
/**
 * @param obj 传入对象
 * @param type 事件类型
 * @param fn 绑定方法
 * @param isCapture 是否在捕获阶段执行
 * */
export const addEvent = (obj,type,fn,isCapture = false) => {
    if (obj.addEventListener) {
        obj.addEventListener(type,fn,isCapture);
    }
    else if(obj.attachEvent) {
        obj.attachEvent(`on${type}`, fn);
    }
    else{
        obj[`on${type}`] = fn
    }
};
/**
 * @param obj 传入对象
 * @param type 事件类型
 * @param fn 绑定方法
 * @param isCapture 是否在捕获阶段执行
 * */
export const removeEvent = (obj,type,fn,isCapture = false) => {
    if (obj.removeEventListener) {
        obj.removeEventListener(type,fn,isCapture);
    }
    else {
        obj.dettachEvent(`on${type}`, fn);
    }
};
export default {
    addClass,
    removeClass,
    getStyle,
    addEvent,
    removeEvent
}