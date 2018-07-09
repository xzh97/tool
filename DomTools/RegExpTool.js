
function RegExpTool(){

}
RegExpTool.prototype = {
    //去除所有空字符
    RegTrimStr:function(str){
        return str.replace(/\s/g, "");
    },

    //判断主流浏览器类型
    checkBrowserType:function(){
        var regIE = /msie [\d.]+/gi;
        var regFirefox = /firefox\/[\d.]+/gi;
        var regChrome = /chrome\/[\d.]+/gi;

        var userAgent = navigator.userAgent;
        if (userAgent.indexOf('Chrome') != -1) {
            alert(userAgent.match(regChrome));
        } else if (userAgent.indexOf('Firefox') != -1) {
            alert(userAgent.match(regFirefox));
        } else if (userAgent.indexOf('MSIE') != -1
            && navigator.userAgent.indexOf('MSIE') != -1
            && navigator.userAgent.indexOf('Opera') == -1) {
            alert(userAgent.match(regIE));
        }
    },

    //检测是否全部是中文
    checkChinese: function(str){
        var reg = /^[\u4E00-\u9FA5]+$/;
        if (!reg.test(str)) {
            alert("不全是中文");
        }else{
            alert("全是中文");
        }
    },

    //验证QQ号码是否合法
    checkQQNum:function(str){
        var reg = /^[1-9][0-9]{4,}/;
        if (!reg.test(str)) {
            alert("QQ号不合法");
        } else {
            alert("QQ号合法");
        }
    },

    //验证手机号
    checkPhoneNum:function(str){
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (!reg.test(str)) {
            alert("手机号不合法");
        } else {
            alert("手机号合法");
        }
    },

    //验证email邮箱是否合法
    checkEMail:function(str){
        var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!reg.test(str)) {
            alert("邮箱不合法");
        } else {
            alert("邮箱合法");
        }
    },

    //验证账号是否合法  (6-18位大小写字母,数字,下划线,首字母必须为大小写字母)
    checkAccount: function (str) {
        var reg = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/;
        if (!reg.test(str)) {
            alert("账号不合法");
        } else {
            alert("账号合法");
        }
    },

    //验证密码是否合法  （最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符）
    checkPwd: function (str) {
        var reg = /^[a-zA-Z]\w{5,17}$/;
        if (!reg.test(str)) {
            alert("密码不合法");
        } else {
            alert("密码合法");
        }
    },
    //检测合法身份证号码
    checkChineseId: function (str) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!reg.test(str)) {
            alert("身份证不合法");
        } else {
            alert("身份证合法");
        }
    },
    //检测是否是合法的URL
    checkURLisLegal: function (str) {
        //var reg = /^[A-Za-z]+:/ / [A - Za - z0 - 9 - _] +\\.[A-Za - z0 - 9 - _ %&\?\/.=]+$/;
        if (!reg.test(str)) {
            alert("密码不合法");
        } else {
            alert("密码合法");
        }
    },
}