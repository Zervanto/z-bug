## Data URI scheme
Data URI scheme是在RFC2397中定义的，目的是将一些小的数据，直接嵌入到网页中，从而不用再从外部文件载入。

```html
<img src = "data:image/png;base64,　base64String"/>
```

- data表示取得数据的协定名称
- image/png 是数据类型名称
- base64 是数据的编码方法
- 逗号后面就是这个image/png文件base64编码后的数据

　　
## 目前，Data URI scheme支持的类型有：
- data:,文本数据
- data:text/plain,文本数据
- data:text/html,HTML代码
- data:text/html;base64,base64编码的HTML代码
- data:text/css,CSS代码
- data:text/css;base64,base64编码的CSS代码
- data:text/javascript,Javascript代码
- data:text/javascript;base64,base64编码的Javascript代码
- data:image/gif;base64,base64编码的gif图片数据
- data:image/png;base64,base64编码的png图片数据
- data:image/jpeg;base64,base64编码的jpeg图片数据
- data:image/x-icon;base64,base64编码的icon图片数据

　　base64简单地说，它把一些 8-bit 数据翻译成标准 ASCII 字符
  网上有很多免费的base64 编码和解码的工具，在PHP中可以用函数base64_encode() 进行编码，如echo base64_encode(file_get_contents(‘wg.png’));
目前，IE8、Firfox、Chrome、Opera浏览器都支持这种小文件嵌入。

## 使用base64的优点
- 把图像文件的内容直接写在了HTML 文件中，节省了一个HTTP 请求。

## 使用base64的缺点
- 根据 base64 的编码原理，大小比原文件大小大 1/3
- 尽管图片请求少了，但是 HTML 文件本身尺寸会变大，会影响首屏加载
- 代码看起来会有点丑，大量编码字符（当然也可以通过构建工具动态插入）
- base64 无法缓存，要缓存只能缓存包含 base64 的文件，比如 HTML 或者 CSS，这相比直接缓存图片要弱很多
- IE 8 以下不支持 data url，IE 8 开始支持 data url，却有大小限制，32k（未测试）。

## 使用情景
通过构建工具动态插入
webpack ：url-loader 可以自动根据文件大小决定要不要做成内联 base64 
