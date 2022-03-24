// 导入express模块
const express = require('express');
// 导入db模块操作数据库
const db = require('../db/db');
// 创建路由
let router = express.Router();

let data = [
  { title:`油价调整信息：今天3月21号，调整后92、95、98号汽油价格`, imgSrc:`https://p3.toutiaoimg.com/tos-cn-i-qvj2lq49k0/75992393b26246b6839edfb2a5e362c3~tplv-tt-cs0:640:360.jpg?from=feed&_iz=31826`,author:`财经逍遥叹`,time:`2022-3-9 1:22:3`,ccount:`1988`},
  { title:`11年前，“宁坐宝马哭，不坐自行车笑”的女孩马诺，如今咋样了`, imgSrc:`https://p9.toutiaoimg.com/tos-cn-i-qvj2lq49k0/c8d92322b0b54b02be875caf08a9f8f4~tplv-tt-cs0:640:360.jpg?from=feed&_iz=31826`,author:`鬼谷子思维`,time:`2022-2-1 2:3:18`,ccount:`999`},
  { title:`好消息：3月31日，油价有望“大幅下调”`, imgSrc:`https://p3.toutiaoimg.com/tos-cn-i-qvj2lq49k0/e40533a2aa6849dfb0acca4745b03828~tplv-tt-cs0:640:360.jpg?from=feed&_iz=31826`,author:`财经逍遥叹`,time:`2020-12-12 12:45:22`,ccount:`88`},
  { title:`过了60岁，身体呈现断崖式衰老！切记：延缓衰老，注意4点很重要`, imgSrc:`https://p3.toutiaoimg.com/tos-cn-i-qvj2lq49k0/499cce6e45b94ec9adee6f0e46926049~tplv-tt-cs0:640:360.jpg?from=feed&_iz=31826`,author:`黄药师`,time:`2021-11-19 11:32:18`,ccount:`3`},

]

/**
 * 功能：查询所有图书
 */
 router.get('/getNews', (req, res) => {
  res.send({
    status:200,
    msg:'新闻列表获取成功',
    data:data
  })
});

// 导入路由
module.exports = router;