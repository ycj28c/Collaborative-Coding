var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  //引入的时候似乎不需要后缀
  Task = require('./api/models/todoListModel'),
  //这个bodyParser是什么？是nodejs解析用的中间件，总之加上就是了
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// 解析 application/json
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);

//////////////////////测试用//////////////////////
// API路由配置
// =============================================================================
// var router = express.Router();              // 获得express router对象
// // 用get动词访问 http://localhost:3000/api
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

// 注册路由
// 所有的路由会加上“／api”前缀
// app.use('/api', router);
//////////////////////End Of测试用//////////////////////

// 启动server
// =============================================================================
//开始监听端口
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
