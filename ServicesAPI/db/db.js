// 导入mysql模块
const mysql = require('mysql');
// 连接数据库
let db = mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'admin1314',
  database:'mydb01'
});
// 导入数据库操作模块
module.exports=db;