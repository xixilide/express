var express = require('express')
var app = express()


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
app.get('/cheng',function (req,res){
  // res.send('hello cheng')
  console.log("cheng");
})
app.get('/xiaoyan',function (req,res){
  // res.send('hello cheng')
  console.log("xiaoyan");
})
app.listen(3000,function(){
  console.log("runing on port 3000...plz visit http://localhost:3000");
})
