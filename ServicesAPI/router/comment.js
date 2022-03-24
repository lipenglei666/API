// 导入express模块
const express = require('express');
// 导入db模块操作数据库
const db = require('../db/db');
// 导入moment模块格式化时间
const moment = require('../node_modules/moment')
// 创建路由
let router = express.Router();

/**
 * 功能：查询所有图书
 */
router.get('/getAllComment', (req, res) => {
  let sql = `SELECT * FROM comment where status=0 order by time desc`;
  let data = db.query(sql, (err, results) => {
    if (err == null) {
      res.send({
        status: 200,
        msg: '评论列表获取成功',
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
router.post('/addComment', (req, res) => {
  let comment = req.body;
  let sql = `insert into comment(cname,content,time) values(?,?,?);`;
  db.query(sql, [comment.cname, comment.content,moment().format("YYYY-MM-DD hh:mm:ss")], (err, results) => {
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



// 导入路由
module.exports = router;
