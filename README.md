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

