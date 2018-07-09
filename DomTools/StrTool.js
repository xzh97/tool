/*
 * @Author: xzh 
 * @Date: 2018-05-09 15:43:32 
 * @Last Modified by:   xzh 
 * @Last Modified time: 2018-05-09 15:43:32 
 */

function StrTool(){

}
StrTool.prototype = {

    //搜索子串出现的下标  返回array
    searchIndex:function( pStr,str ){
        var arr = [];
        index = pStr.indexOf(str1);
        while (index > -1) {
            arr.push(pos);
            index = pStr.indexOf(str1, index + 1);
        }
        return arr;
    },

    //将首字母改成大写  返回string
    firstWordToUpperCase:function(str){
        var arr = str.split(' ');
        var arr2 = [];
        var str3 = '';
        for (var i = 0; i < arr.length; i++) {
            var str1 = arr[i].substring(0, 1).toUpperCase();
            var str2 = arr[i].substring(1);
            arr2[i] = str1 + str2;
            
        }
        str3 = arr2.join(' ');
        return str3;
    },

    //提取url参数  返回json格式
    extractURLParams:function(url){
        var request = new Object();
        var name,
            value,
            num = 0;
        url = url.split('?')[1].split('&'); //把前面网页地址切掉，保留后面参数字符串
        for (var i = 0; i < url.length; i++) {
            num = url[i].indexOf('=');
            if (num > 0) {
                name = url[i].substring(0, num);
                value = url[i].substring(num + 1);
                request[name] = value;
            }
        }
        return request;
    },

    //去掉字符串首尾空格   返回string
    /* strTrim:function(str){
        var str1 = '';
        str = str.split(' ');
        for (var i = 0; i < str.length; i++) {
            if (str[i] != ' ') {
                str1 += str[i];
            }
        }
        return str1;
    }, */
    strTrim: function (str) {
        return str.replace(/\s/g, '');
    },

    //将字符串中 某个字符(例如:_) 后面的小写字母变大写   返回string
    toCamelStyle:function(str,charO){
        var str1 = '',
            str2 = '',
            str3 = '',
            arr = [];
        str = str.split(charO);
        for (var i = 0; i < str.length; i++) {
            if (i > 0) {
                str1 = str[i].substring(0, 1).toUpperCase();
                str2 = str[i].substring(1);
                arr[i] = str1 + str2;
            } else {
                arr[i] = str[i];
            }
        }
        str3 = arr.join('');
        return str3;
    },

    //删除字符串中所有的数字  返回string
    /* removeNum:function(str){
        var str1 = '';
        str = str.split('');
        for (var i = 0; i < str.length; i++) {
            if (str[i] >= 0 && str[i] <= 9) {
                str1 += '';
            } else {
                str1 += str[i];
            }
        }
        return str1;
    }, */
    removeNum: function (str) {
        return str.replace(/\d/g, '');
    },

    //反转字符串   返回string
    reverseStr:function(str){
        return str = str.split('').reverse().join('');
    },

    //统计字符串中各字符在字符串中出现的数量 编写函数 caculateExistNum   返回json
    /* caculateExistNum:function(str){
        var str1 = '';
        var obj = {};
        str1 = str.split('');
        for (var i = 0; i < str1.length; i++) {
            var count = 0;
            for (var j = 0; j < str1.length; j++) {
                if (str1[i] == str1[j]) {
                    count++;
                }
                obj[str1[i]] = count;
            }
        }
        return obj;
    }, */
    caculateExistNum: function (str) {
        var obj = {};
        for(var key in str){
            obj[str[key]] = (obj[str[key]] + 1 ) || 1;
        }
        return obj;
    }

}
