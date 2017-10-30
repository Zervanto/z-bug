
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

### jq ajax error
客户端发起请求，得到服务器端的相应是200，<正确拿到服务器响应的数据>没有问题.此时在判断进入success 对应的回调函数还是进入到error对应的回调函数之前，可能会校验一些东西：
      1. 返回的每条数据是否是dataType中定义的数据类型。如果有部分数据不是或者哪怕一条数据没有严格的按照dataType定义的类型，程序就会进入到error:function(){****}
      2. 请求的域和当前域是否是同一域，如果不是同一域也十分有可能进入error:function(){***}
      
### excel 导出json数据

### 正则校验外国人在中国永久居住证
15位 前三位为字母，后12为为数字

### vue动态列表渲染，父子组件通讯的问题 
