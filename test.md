
### 电子签名

### 日期控件
活动日期限定，只允许选择活动期间的日期

### 图片压缩

js_invoke

## 通过接口返回字段的值动态渲染页面的时候，不要忽略字段值为空的情况
```js
else{
  alert('不妨报个错');
  continue;
}
```

tap点透事件
click

## json不支持undefined
如果给json每一项key值传入undfined，json会自动删除这个key值

## mui上拉加载方法会导致click时间失效
动态绑定tap  先off再on

## mui.confirm 给按钮绑定事件在一些设备下会失效


### base64
```js
var str = "闪之轨迹3";

window.btoa(window.encodeURIComponent(str))
//"Q2hpbmElRUYlQkMlOEMlRTQlQjglQUQlRTUlOUIlQkQ="
window.decodeURIComponent(window.atob('Q2hpbmElRUYlQkMlOEMlRTQlQjglQUQlRTUlOUIlQkQ='))
//"闪之轨迹3"
```

### input checkbox在iOS下的虚线边框问题
加实线边框盖住他

### 圆形img与height为1px div线对齐
子绝父相

### jade
!!! 5
html(lang="en")
  head
    title= pageTitle
    :javascript
      | if (foo) {
      |    bar()
      | }
  body
    h1 Jade - node template engine
    #container
      - if (youAreUsingJade)
         You are amazing
      - else
         Get on it!
         Get on it!
         Get on it!
         Get on it!
					


<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Jade</title>
    <script type="text/javascript">
      //<![CDATA[
      if (foo) {
      	bar()
      }
      //]]>
    </script>
  </head>
  <body>
    <h1>Jade - node template engine</h1>
    <div id="container">
      <p>You are amazing</p>
    </div>
  </body>
</html>
