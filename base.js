
//添加Cookie
var AddCookie = function (name, val, day) {
    var saveStr = JSON.stringify(val);
    if (!IsEmptyORNull(saveStr)) {
        $.cookie(name, saveStr, { expires: day });
    }
}

//设置Cookie
var SetCookie = function (name, val) {
    var saveStr = JSON.stringify(val);
    if (!IsEmptyORNull(saveStr)) {
        $.cookie(name, saveStr);
    }
}

//获取Cookie
var GetCookie = function (name) {
    var result = null;
    var value = $.cookie(name);
    if (!IsEmptyORNull(value)) {
        result = JSON.parse(value);
    }
    return result;
}

//清除Cookie
var ClearCookie = function (name) {
    $.cookie(name, null);
}

//是否PC端
var IsPC = function () {
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v].toLowerCase()) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

//判断是否微信中浏览
var IsWeChartBrowser = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
    //return true;
}
//是否安卓系统
var IsAndroidClient = function () {
    var u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
}
//是否IOS系统
var IsIOSClient = function () {
    var u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
}
//判断对象或字符串是否有效
var IsEmptyORNull = function (obj) {
    return obj == "" || obj == null || obj == undefined || obj<0;
}

//增则匹配结果
var RegexIsMach = function (content, regexFormat) {
    var regex = eval("/" + regexFormat + "/")
    return regex.test(content);
}

//替换所有指定字符串
String.prototype.ReplaceALL = function (targetStr, replaceStr) {
    return this.replace(new RegExp(targetStr, "gm"), replaceStr)
}

//获取文件名，不包含后缀
String.prototype.GetFileName = function () {
    var result = this;
    var index1 = this.lastIndexOf(".");
    if (index1 > -1) {
        result = this.substring(0, index1);
    }
    return result;
}

//获取后缀名
String.prototype.GetFileExtName = function () {
    var result = "";
    var index1 = this.lastIndexOf(".");
    var index2 = this.length;
    if (index1 > -1) {
        result = this.substring(index1, index2)
    }
    return result;
}

String.prototype.LTrim = function () {
    return this.replace(/(^s*)/g, "");
}

String.prototype.Rtrim = function () {
    return this.replace(/(s*$)/g, "");
}

String.prototype.Trim = function () {
    return this.replace(/(^s*)|(s*$)/g, "");
}

String.prototype.Left = function (len) {
    if (isNaN(len) || len == null) {
        len = this.length;
    }
    else {
        if (parseInt(len) < 0 || parseInt(len) > this.length) {
            len = this.length;
        }
    }
    return this.substr(0, len);
}

String.prototype.Right = function (len) {
    if (isNaN(len) || len == null) {
        len = this.length;
    }
    else {
        if (parseInt(len) < 0 || parseInt(len) > this.length) {
            len = this.length;
        }
    }
    return this.substring(this.length - len, this.length);
}

Date.prototype.FormatToString = function (formatType) {
    var year = "" + this.getFullYear(); //年
    var month = this.getMonth() + 1; //月
    month = month < 10 ? "0" + month : "" + month;
    var day = "" + this.getDate(); //日
    var hour = "" + this.getHours(); //时（24小时制）
    var minute = "" + this.getMinutes(); //分
    var second = "" + this.getSeconds(); //秒
    var millisecond = this.getMilliseconds(); //毫秒
    millisecond = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : "" + millisecond;
    var seperator1 = "-";
    var seperator2 = " ";
    var seperator3 = ".";
    var seperator4 = ":";
    var result = "";
    switch (formatType) {
        case "yyyy-MM-dd hh:mm:ss.fff":
            result = year + seperator1 + month + seperator1 + day + seperator2 + hour + seperator4 + minute + seperator4 + second + seperator3 + millisecond;
            break;
        case "yyyyMMddhhmmssfff":
            result = year + seperator1 + month + seperator1 + day + seperator1 + hour + seperator1 + minute + seperator1 + second + seperator1 + millisecond;
            result = result.ReplaceALL(seperator1, "");
            break;
        case "yyyyMMdd":
            result = year + seperator1 + month + seperator1 + day;
            result = result.ReplaceALL(seperator1, "");
            break;
    }
    return result;
};

//查找符合条件的结果集
Array.prototype.FindAll = function (condition) {
    return eval("this.filter(" + condition + ")");
}

//查找符合条件的第一个结果
Array.prototype.Find = function (condition) {
    var result = eval("this.filter(" + condition + ")");
    return result.length > 0 ? result[0] : null;
}

//删除指定条件的对象
Array.prototype.Remove = function (condition) {
    var result = this;
    var objList = eval("this.filter(" + condition + ")");
    $.each(objList, function (i, obj) {
        result.splice($.inArray(obj, result), 1);
    });
    return result;
}

//获取指定字符串的字节长度
String.prototype.GetBytesLength = function () {
    var length = 0;
    for (i = 0; i < this.length; i++) {
        iCode = this.charCodeAt(i);
        if ((iCode >= 0 && iCode <= 255) || (iCode >= 0xff61 && iCode <= 0xff9f)) {
            length += 1;
        } else {
            length += 2;
        }
    }
    return length;
}
