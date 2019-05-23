var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var proxy = require('http-proxy-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//修改静态文件的指向地址
app.use(express.static(path.join(__dirname, 'public/fenxiang-paper-machine-h5')));
//修改静态文件的指向地址
app.use(express.static(path.join(__dirname, 'public/admin')));
//修改静态文件的指向地址
app.use(express.static(path.join(__dirname, 'public/webapp')));
//接口代理
// Add middleware for http proxying
// const apiProxy = proxy('/', { target: 'http://192.168.2.24:8762',changeOrigin: true });//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
// app.use('/', apiProxy);//api子目录下的都是用代理
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

/*开始任务*/
const Spider = require('./spider/index.js');
console.log(Spider)
Spider.startTask()
module.exports = app;
