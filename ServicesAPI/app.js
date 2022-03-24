// 导入express模块
const express = require('express');

// 导入path模块
const path = require('path')

// 导入body-parser模块
const bodyParser = require('body-parser');


// 导入cors
const cors = require('cors')

// 创建web服务
const app = express();

// 注册跨域中间件
app.use(cors())
// 托管静态资源
app.use(express.static(path.join(__dirname, './public')))

// 注册处理post请求数据中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// 导入图书管理路由 book.js
const books = require('./router/books');
// 导入评论管理路由 comment.js
const comment = require('./router/comment');
// 导入评论管理路由 news.js
const news = require('./router/news');
// 导入test路由 test.js
const test = require('./router/test');

/**
 * 图书管理模块
 */
app.use('/api/book', books)
/**
 * 评论管理表模块
 */
app.use('/api/comment', comment)
/**
* 新闻模块
*/
app.use('/api/news', news)
/**
* test模块
*/
app.use('/api/test', test)

/**
 * 异常处理
 */
app.use((err,req,res,next)=>{
  if(err) {
    res.send('网络繁忙，请稍后再试')
  }
})

// 启动服务
app.listen(8080)