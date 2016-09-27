var express = require('express')
var app = express()


app.get('/',function (req,res) {
  // res.send('hello xiaoyan')
  console.log("xiaoyan");
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
