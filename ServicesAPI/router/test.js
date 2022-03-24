// 导入express模块
const express = require('express');
// 导入path模块
const path = require('path')
// 创建路由
let router = express.Router();
// 导入formidable模块
const formidable = require('formidable');

/**
 * 功能：get请求
 */
router.get('/getAllGoods', (req, res) => {
  res.send({
    status: 200,
    msg: '成功获取商品列表',
    data: [{ name: 'iPhone13Pro', price: 9999 }, { name: 'HUAWEI Mate40', price: 10999 }, { name: '菠萝手机', price: 999 }, { name: '小辣椒', price: 980 }]
  })
});
/**
 * 功能：get请求
 */
router.get('/getUser', (req, res) => {
  let params = req.query;
  let data = [
    { name: '张三', age: 10, gender: '男' },
    { name: '李莉丝', age: 18, gender: '女' },
    { name: '张啦啦', age: 10, gender: '女' },
    { name: '张可可', age: 17, gender: '女' },
    { name: '李米米', age: 12, gender: '男' },
    { name: '张刚刚', age: 14, gender: '男' },
    { name: '李乐乐', age: 17, gender: '男' },
    { name: '张火火', age: 12, gender: '男' },
    { name: '李塔塔', age: 9, gender: '男' },
    { name: '张科科', age: 12, gender: '男' },
    { name: '李微微', age: 19, gender: '女' },
    { name: '张笑笑', age: 17, gender: '女' },
    { name: '李丹丹', age: 10, gender: '女' },
    { name: '张好好', age: 14, gender: '女' },
    { name: '李祥祥', age: 10, gender: '女' },
  ];
  data = data.filter((value) => {
    return value.name.includes(params.name) && value.gender == params.gender;
  })
  res.send({
    status: 200,
    msg: '成功获取用户列表',
    data: data
  })
});

/**
 * post请求
 */
router.post('/addUser', (req, res) => {
  console.log(req.body);
  console.log(req.params);
  
  res.send({
    status: 200,
    msg: '用户添加成功',
    data: req.body
  })
});

/**
 * post请求 FormData处理
 */
router.post('/addUser2', (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    res.send(fields);
  })
});

/**
 * 上传文件
 */
router.post('/upload', (req, res, next) => {

  // keepExtensions 保留上传文件的可扩展名称
  var form = new formidable.IncomingForm({ keepExtensions: true });
  // 设置文件上传路径
  form.uploadDir = path.join(__dirname, '../public/upload')
  // 设置文件上传的大小限制
  form.maxFileSize = 6 * 1024 * 1024 * 1024;
  // 解析表单数据
  form.parse(req, (err, fields, files) => {
    // 文件名路径
    const uploadUrl = files.fName.filepath.split('/public')[1];
    // 返回上传后的文件路径，实现预览
    res.send(uploadUrl);
  })

})


// 导入路由
module.exports = router;