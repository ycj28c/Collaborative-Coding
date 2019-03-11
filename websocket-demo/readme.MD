现在很流行的websocket的实现socket.io包括客户端和服务器端两部分。它不仅简化了接口，使得操作更容易，而且对于那些不支持WebSocket的浏览器，会自动降为Ajax连接，最大限度地保证了兼容性。它的目标是统一通信机制，使得所有浏览器和移动设备都可以进行实时通信。

安装websocket服务
-----------------
npm install ws
npm install node-uuid

express
socket.io
sockjs

启动server.js
-----------------
cd ch1
node server.js

引用
-----
[WebSocket 介绍(二)-WebSocket API](http://www.cnblogs.com/stoneniqiu/p/5373993.html)
[WebSocket 学习(三)--用nodejs搭建服务器](https://www.cnblogs.com/stoneniqiu/p/5402311.html)