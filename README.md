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
