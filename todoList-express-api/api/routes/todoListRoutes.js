'use strict';
//app接收的就是express()
module.exports = function(app) {
  //用require相当于java里头new一个对象
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  //这里是get，post，delete，put api的例子
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
