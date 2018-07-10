# z-bug
a collection of bugs from developing

1. 广告屏蔽插件
诸如UC，QQ，360等浏览器会内置一些屏蔽广告的插件，过滤规则下类似ad,adv,adver等命名的静态文件或者接口可能会加载失败。

2. 原生select下拉框设置滚动条

注意包裹select标签的父元素不要设置高度，然后通过onFocus时间动态给select设置size属性，
其内部option元素通过onClick事件动态去除其父元素select的size属性，并绑定blur事件
设置selected属性为""
注意this的应用

3. overflow hover z-index
如果父元素overflow属性设置为hidden或者scroll时，其子元素使用定位后设置z-index属性达不到预期的效果

4. 日期选择插件限制可选择范围

5. 取消保存
情景：在开发产品模板上传文件之类的功能时，每新上传成功一个文件就要通过接口进行入库操作，当我想取消已上传的文件时，需要调用删除功能接口。
定义两个数组
```js
var arr1 = [];//用来存放模板修改之前已存在的文件标识
var arr2 = [];//用来存放模板修改后全部的文件标识
```
给保存按钮绑定事件，先从arr2中移除所有arr1中的元素，然后遍历arr2,取出arr2剩余的每一项文件标识，调用删除功能的接口

6. table表格th,td宽度百分比布局
单元格文本内容悬浮展示(非title)，富文本内容展示 overflow:scroll
后台返回的是html代码段，前端展示用innerHTML、JQ .html()

7. pagecontrol.js

8. input type="file" 调用系统相机

如何获取拍到的照片
```js
$('.openCamera').on('change', function() {
		this_=this;
		var num = $(this).attr('id');
      var $c = document.querySelectorAll('.openCamera')[num];//上传出发按钮
      var file = $c.files[0];//获取file对象单张
      var reader = new FileReader();//创建filereader对象
          reader.readAsDataURL(file);//转换数据
          reader.onload = function(e){//加载ok时触发的事件
          	$(this_).parent().parent().append('<div id="" style="background: url('+e.target.result+') center center ;background-size:cover;" class="subset photo" data-PicUrl="'+e.target.result+'"><img src="../../img/delete.png" class="delete_pic"/></div>');
          	
          	magnifyPic(); //图片放大缩小c
			deletePhoto(); //删除本张照片
    	 };
	})
```

9. xml节点获取

10. touch事件兼容问题
touchstart:     //手指放到屏幕上时触发

touchmove:      //手指在屏幕上滑动式触发

touchend:    //手指离开屏幕时触发

touchcancel:     //系统取消touch事件的时候触发，这个好像比较少用

 

每个触摸事件被触发后，会生成一个event对象，event对象里额外包括以下三个触摸列表

touches:     //当前屏幕上所有手指的列表

targetTouches:      //当前dom元素上手指的列表，尽量使用这个代替touches

changedTouches:     //涉及当前事件的手指的列表，尽量使用这个代替touches

这些列表里的每次触摸由touch对象组成，touch对象里包含着触摸信息，主要属性如下：

clientX / clientY:      //触摸点相对浏览器窗口的位置

pageX / pageY:       //触摸点相对于页面的位置

screenX  /  screenY:    //触摸点相对于屏幕的位置

identifier:        //touch对象的ID

target:       //当前的DOM元素

 

注意：

手指在滑动整个屏幕时，会影响浏览器的行为，比如滚动和缩放。所以在调用touch事件时，要注意禁止缩放和滚动。

1.禁止缩放

通过meta元标签来设置。

<meta name="viewport" content="target-densitydpi=320,width=640,user-scalable=no">

2.禁止滚动

preventDefault是阻止默认行为，touch事件的默认行为就是滚动。

event.preventDefault();

## input的placeholder属性在ios中样式不居中的问题
```css
input::-webkit-input-placeholder{}
```
设置行高



## sessionStorage
sessionStorage和localStorage做为HTML5新特性，被广泛应用于客户端缓存技术。不过这个有个误区，两者虽然对存储的内容大小没有限制，但是存入的东西都被转换成了字符串，也就是说无法存入数组或者对象，就算存入了也会被转化为字符串。

## android fixed定位在页面底部的dom元素在键盘弹出时，会被顶上去
```js
var h = window.body.scrollHeight;
window.resize=function(){
   if(window.body.scrollHeight<h){
   	do somethings
   }else{
   	do other things
   }
}
```

使用mui.trigger()方法可以动态触发特定DOM元素上的事件。

.trigger( element , event , data )

element：Type: Element，触发事件的DOM元素

event：Type: String，事件名字，例如：‘tap‘、‘swipeleft‘

data：Type: Object，需要传递给事件的业务参数

示例

自动触发按钮的点击事件：

var btn = document.getElementById("submit");
//监听点击事件
btn.addEventListener("tap",function () {
  console.log("tap event trigger");
});
//触发submit按钮的点击事件
mui.trigger(btn,'tap');
  部分mui控件监听的事件无法通过mui.trigger触发，比如无法实现自动触发mui返回图标，实现关闭当前页面的功能，该部分逻辑正在优化中 
  
  
 ## 移动端 overflow：sroll 失效问题 
 
 
 ## meta标签
 ```html
<!-- 忽略IOS将页面中的数字识别为电话号码 -->
<meta name="format-detection" content="telephone=no" />
<!-- 忽略Android平台中对邮箱地址的识别 -->
<meta name="format-detection" content="email=no" />
```

## mui.confirm 不会想alert一样阻塞页面

 JS 提示框 alert()、confirm()、prompt()的三者的区别

使用消息框 使用警告、提示和确认 
可以使用警告、确认和提示消息框来获得用户的输入。这些消息框是 window 对象的接口方法。由于 window 对象位于对象层次的顶层，因此实际应用中不必使用这些消息框的全名（例如 "window.alert()"），不过采用全名是一个好注意，这样有助于您记住这些消息框属于哪个对象。 

警告消息框 （alert）
alert 方法有一个参数，即希望对用户显示的文本字符串。该字符串不是 HTML 格式。该消息框提供了一个“确定”按钮让用户关闭该消息框，并且该消息框是模式对话框，也就是说，用户必须先关闭该消息框然后才能继续进行操作。 
window.alert("欢迎！请按“确定”继续。"); 


确认消息框 （confirm）
使用确认消息框可向用户问一个“是-或-否”问题，并且用户可以选择单击“确定”按钮或者单击“取消”按钮。confirm 方法的返回值为 true 或 false。该消息框也是模式对话框：用户必须在响应该对话框（单击一个按钮）将其关闭后，才能进行下一步操作。 

var truthBeTold = window.confirm("单击“确定”继续。单击“取消”停止。"); 
if (truthBeTold) { 
window.alert("欢迎访问我们的 Web 页！"); 
} else window.alert("再见啦！"); 


提示消息框 （prompt）
提示消息框提供了一个文本字段，用户可以在此字段输入一个答案来响应您的提示。该消息框有一个“确定”按钮和一个“取消”按钮。如果您提供了一个辅助字符串参数，则提示消息框将在文本字段显示该辅助字符串作为默认响应。否则，默认文本为 "<undefined>"。 

与alert( ) 和 confirm( ) 方法类似，prompt 方法也将显示一个模式消息框。用户在继续操作之前必须先关闭该消息框 

var theResponse = window.prompt("欢迎？","请在此输入您的姓名。");

## mui上拉加载区域会导致click事件失效 
需要使用tap事件

## input 光标控制

## iOS下软键盘弹出会将整个页面顶上去
mui
1 设置弹出软键盘时自动改变webview的高度

```js
plus.webview.currentWebview().setStyle({
    softinputMode: "adjustResize"  // 弹出软键盘时自动改变webview的高度
});
```

2 增加样式

```css
html, body {
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
}

.mui-content {
    height: 100%;
    overflow: auto; 
}
```

content上必须要有height和overflow样式的控制，否则body上设置的overflow: hidden;会使所有content都无法滚动。


## input type=tel,number手机布局问题

## ios不支持 new Date("yyyy-mm-dd")格式转化
改为yyyy/mm/dd

## 微信内置浏览器 window.location.href跳转失效问题
缓存原因导致不跳转，在url后面加随机数可以解决。

## 清除微信缓存

meta标签 cache-control

js加随机数
```js
domument.write('<script src="xxx.js?v='+Math.random()+'"><\/script>')
```


## webpack4

## 阿里云部署项目

## ios android input框 placeholder disabled 字体颜色有差异
```css
input[disabled]{
 color:#ccc;
 -webkit-text-color:#ccc;
 opacity:0;
}
```

## android 使用input打开相机，不拍直接点返回，无法再次调用通相机。
webview的关系 5.0以上系统需要重写相机获取图片相关api

## iPhone X适配问题
定位 下拉框定位 无法定位到最底部
meta viewport-fit
全面屛手机图片自适应

## ios input拍照获取图片方向与androidn 不一致 会旋转90度

## ios 点击事件 有时会在下个页面触发

## 媒体查询通过屏幕高度适配

