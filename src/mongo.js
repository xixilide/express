var mongoose = require('mongoose');
//导入mongoose

mongoose.connect('mongodb://localhost:27017/mondata');
//mongodb协议链接，连接数据库

var db = mongoose.connection;
//获得这个连接，存放到db中
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var kittySchema = mongoose.Schema({
    name: String
});
