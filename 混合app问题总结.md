
#H5与APP混合开发遇到的问题总结


##问题1：页面滚动条问题
问题描述
web页面在PC浏览器上浏览时有滚动条；但是，在移动端浏览器打开时，没有滚动条

解决方法
将页面的最外层(我一般在写页面时，会在body标签内写一个大容器，用于存放页面的内容)设置overflow:auto/scroll;并且不能设置height属性的值(height:100%也不行)

例子
```html
<body>
	<div style="overflow:scroll/auto;">
		//网页内容
	</div>
</body>
```

##问题2：touchstart 和 touchend 事件的使用
问题描述
引入touch.js文件，使用touchstart和touchend事件实现交互效果时，在部分手机出现事件触发失效的问题[例如：低版本的荣耀手机]

解决方法
方法1："removeEventListener"和"addEventListener"一起使用

方法2：添加e.preventDefault(); 阻止部分手机默认跳转

法3：Jquery的on实现事件绑定

说明：法1与法2都是原生JS使用addEventListener实现事件监听；并且dom元素使用touchstart和touchend事件时，需要结合事件绑定或者事件监听一起使用，否则js部分会抛出异常

代码
```js
//法一：
document.getElementById('list5').addEventListener('touchstart',callback, false);
document.getElementById('list5').removeEventListener('touchstart',callback, false);
document.getElementById('list5').addEventListener('touchend',callback, false);
document.getElementById('list5').removeEventListener('touchend',callback, false);

//法二：
document.getElementById('list5').addEventListener('touchstart',function(e){
	e.preventDefault();
}, false);

document.getElementById('list5').addEventListener('touchend',function(e){
	e.preventDefault();
}, false);
```

##问题3：长按闪退的问题
情景还原
有一个XXX列表页，长按列表页的列表项时(触摸到文字)，在低版本手机中会出现闪退的情况

解决方法
js部分：在事件触发时添加e.preventDefault();，用于阻止默认行为

css部分：添加禁止文本文本复制的代码

代码
```js
//js部分：
e.preventDefault();

//css部分：
-webkit-touch-callout: none; //解决闪退
//禁止复制
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;
```


##问题4: 移动端1px的问题
问题描述
由于不同的手机有不同的像素密度,css中的1px并不等于移动设备的1px。项目中使用js和rem做移动端的屏幕适配，所以产生0.5px的情况，导致低版本的手机展示不了0.5px的边框。

解决方法
使用css解决1px的问题，并且给需要设置成1px的dom元素直接写上：border-width:1px;

代码
```html
//HTML部分：
<div class='class1'></div>
```

```css
//css部分：
.class1{
	border: 1px solid #ccc;
}

//css部分
/*移动端正常展示1px的问题 start*/
%border-1px{
    display: block;
    position:absolute;
    left: 0;
    width: 100%;
    content: ' ';
}
.border-1px{
    position: relative;
    &::after{
        @extend %border-1px;
        bottom: 0;
        border-top: 1px solid #ccc;
    }
    &::before{
        @extend %border-1px;
        top: 0;
        border-bottom: 1px solid #ccc;
    }
}

@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
    .border-1px{
        &::after{
            -webkit-transform: scaleY(0.7);
            transform: scaleY(0.7);
        }
    }
}

@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
    .border-1px{
        &::after{
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
    }
}
/*移动端正常展示1px的问题 end*/
```

##问题5：js无法正确解析到url包含"="号的参数值
问题描述
项目中，由于数据请求的参数值是从url地址中获取的参数值，并且参数值包含"="号，导致无法正确解析到参数值(ps:js使用"="号分割url的参数)

解决方法
将url进行转码，再解码【本项目中，APP端提供转码后的url地址，前端使用geturlparams插件，获得url地址的参数值】

代码
```js
//解码"="号
dom.token = decodeURI($.query.get("token"));//插件
//获取无需解码的值
dom.msgid = $.query.get("msgid");
```
geturlparams插件地址
一个不错的获取url参数jquery插件

##问题6：原生js的事件监听和jquery的事件绑定在ios中失效
问题描述
使用事件监听或事件绑定时，由于父元素选择body或document元素，导致在ios中事件触发无效

解决方法
不使用body和document元素作为父级元素

问题7：ios中日期显示为NaN
问题描述
Date的日期格式，在ios中有兼容性问题，ios的日期会显示成：NaN

解决方法
解决方法：在ios中支持"2017/12/26 19:36:00"，而不支持"2017-12-26 19:36:00"格式，后面一种格式，在ios中显示Nan （Android中都可以显示正常）

代码
```js
var time = "2017-12-26 19:36:00";
time = time.replace(/\-/g, "/");//将时间格式的'-'转成'/'形式，兼容iOS
```

##问题8：click事件在ios中有问题
问题描述
click事件在ios点击触发时，会选中事件委托的父级元素模块【即：由于事件冒泡，并且父级有默认样式】，并且有一个透明层，例如

<ul>
	<li>列表项1</li>
	<li>列表项2</li>
	<li>列表项3</li>
</ul>
解析：例如ios用户点击"列表项1"时，父层的ul会有一个透明的样式

解决方法
添加e.stopPropagation(); //阻止冒泡

如果还是无法解决问题，可以修改成touch事件
