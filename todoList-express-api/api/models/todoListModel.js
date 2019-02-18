'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//将mongodb的Todos的tasks的当做model
var TaskSchema = new Schema({
  //定义TaskShema这个modal的数据结构，包含name，Created_date, status三个属性
  name: {
    type: String, //属性类型
    Required: 'Kindly enter the name of the task' //post的时候需要增加name字段才会存上
  },
  Created_date: {
    type: Date,
    default: Date.now //如果没有赋值，默认就是这个
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed'] //只能是enum中的1个
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
