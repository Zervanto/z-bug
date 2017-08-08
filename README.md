# z-bug
a collection of bugs from developing

### 收集前端开发所遇到坑


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
