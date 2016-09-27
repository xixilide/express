# express的知识


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
