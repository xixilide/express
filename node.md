# express的知识
### node.js

```js
var express = require('express')
//相当于import
app.get('/',function (req,res) {
  res.send('hello express')
})
//代码用来接收请求
app.get('/xx',function (req,res){
  res.send('hello xiaoyan')
})
//监听端口
app.listen(3000)
```
http小知识：get/post请求（常用的）

### 返回html页面
```js
app.get('/',function (req,res) {
  var page="<html>"+
          "<body>"+
            "<h1>index.html</h1>"+
            "</body>"+
            "</html>"
            res.send(page)

})
```
 参数(parameter)作为path来传入后台，这样，可以实现前台传参

 ```js
 app.get('/:name',function (req,res) {
   var username = req.params.name
   var page = "<html>"+
             "<body>"+
               "<h1>"+
               username+"的购物车"+
               "</h1>"+
               "</body>"+
             "</html>"
  res.send(page)
 })
 ```
### curl 模拟请求
  在后台写curl命令：
```
curl --request GET localhost:3000/xiaoyan
```
（如何通过表单提交来获取数据？课下查资料）
