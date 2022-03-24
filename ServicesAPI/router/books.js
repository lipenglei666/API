// 导入express模块
const express = require('express');
// 导入db模块操作数据库
const db = require('../db/db');
// 创建路由
let router = express.Router();

/**
 * 功能：查询所有图书
 */
router.get('/getAllbooks', (req, res) => {
  let sql = `SELECT * FROM books where status=0`;
  let data = db.query(sql, (err, results) => {
    if (err == null) {
      res.send({
        status: 200,
        msg: '图书列表获取成功',
        data: results
      })
      return;
    }
    res.send({
      status: 500,
      msg: '请求超时，请稍后重试',
    })
  })
});

/**
 * 功能：添加新的图书
 */
router.post('/addBook', (req, res) => {
  let book = req.body;
  let sql = `insert into books(name,author,price) values(?,?,?);`;
  db.query(sql, [book.name, book.author, book.price], (err, results) => {
    if(err){
      res.send({
        status:500,
        success:false,
        msg:'添加失败'
      })
    }else if(results.affectedRows==1){
      res.send({
        status:200,
        success:true,
        msg:'添加成功'
      })
    }else {
      res.send({
        status:200,
        success:false,
        msg:'添加失败'
      })
    }
  })
});

/**
 * 功能：删除图书
 */
router.post('/delBook',(req,res)=>{
  let id = req.body.id;
  let sql = `update books set status=1 where id=?`;
  db.query(sql,id,(err,results)=>{
    if(err){
      res.send({
        status:500,
        success:false,
        msg:'删除失败'
      })
    }else if(results.affectedRows==1){
      res.send({
        status:200,
        success:true,
        msg:'删除成功'
      })
    }else {
      res.send({
        status:200,
        success:false,
        msg:'删除失败'
      })
    }
  })
})

// 导入路由
module.exports = router;
