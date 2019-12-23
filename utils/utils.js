/**
 * @desc 该js主要存一些常用的工具方法
 * @author xzh19971005@163.com
 * */

/**
 * @desc 日期格式化
 * @param {all} date
 * @patam {String} format
 */
export function dateFormat(date = new Date(), format = 'yyyy-MM-dd'){
    let d = new Date(date);
    if(d.toString() === 'Invalid Date'){
        if(typeof date === 'string'){
            d = new Date(date.replace(/-/g,'/')); //避免ios日期格式bug
        }
        else{
            console.error('请输入合法的日期');
        }
    }

    let year = d.getFullYear(),
        month = d.getMonth() + 1,
        day = d.getDate(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        second = d.getSeconds()

    return format.replace('yyyy/g',year)
        .replace('MM/g',addZero(month))
        .replace('dd/g',addZero(day))
        .replace('hh/g',addZero(hour))
        .replace('mm/g',addZero(minute))
        .replace('ss/g',addZero(second))
    function addZero(number){
        return number <= 10 ? `0${number}` : number;
    }
}

/**
 * @desc 数组去重
 * @param {array} arr
 */
export function uniqueArr(arr){
    let result = [];
    arr.forEach(item => {
        if(result.indexOf(item) === -1){
            result.push(item);
        }
    })
    return result;
}

/**
 * @desc 数组乱序
 * @param {array} arr
 */
export function randomArr(arr){
    return arr.sort(() => Math.random() > 0.5 ? 1 : -1);
}
/**
 * @desc 求出数组元素的最大值
 * @param {array} arr
 */
export function  getArrMax(arr) {
    return Math.max.apply(null, arr);
}
/**
 * @desc 求出数组元素的最小值
 * @param {array} arr
 */
export function getArrMin(arr) {
    return Math.min.apply(null, arr);
}
/**
 * @desc 从数组中随机获取元素
 * @param {array} arr
 */
export function getItemRandom(arr){
    return arr[ ~~(Math.random() * arr.length) ];
}
/**
 * @desc 获取url参数
 * @param {string} url
 */
export function getURLParams(url){
    let param = {};
    location.search.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2);
    return param;
}
/**
 * @desc 反转字符串
 * @param {string} str
 */
export function reverseStr(str){
    return str.split('').reverse().join('');
}

/**
 * @desc 统计字符串出现次数
 * @param {string} str
 * @param {string} char
 */
export function computeCharInStr(str, char){
    return str.split(char).length -1;
}

/**
 * @desc 去除前后空格
 * @param {string} str
 */
export function trim(str){
    return str.replace(/^\s+|\s+$/,"");
}

/**
 * @desc 驼峰转下划线
 * @param {string} str
 * @param {string} char
 */
export function strToUnderline(str,char = '_'){
    return str.replace(/([A-Z])/g,`${char}$1`).toLowerCase();
}


/**
 * @desc 去除前后空格
 * @param {string} str
 */
export function underlineToStr(str){
    return str.replace(/_(\w?)/g, (all,letter) => letter.toUpperCase());
}
export default {
    dateFormat,
    uniqueArr,
    randomArr,
    getArrMax,
    getArrMin,
    getItemRandom,
    getURLParams,
    reverseStr,
    trim,
    computeCharInStr,
    strToUnderline,
    underlineToStr,
}
