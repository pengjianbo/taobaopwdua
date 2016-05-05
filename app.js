var express = require('express');
var app = express();
var path = require('path');

// 处理js
var tbpwd = require('./routes/password/getPassword');
var tbua = require('./routes/ua/getUA');

// /** 允许跨域*/
// app.all('*',function (req, res, next) 
// {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     if (req.method == 'OPTIONS') {
//       res.send(200);
//     }
//     else {
//       next();
//     }
// });

// 使用express 访问静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 指定路由
app.use('/getPassword', tbpwd);
app.use('/getUA', tbua);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(8000, function () {
    console.log('app listen 8000');
});
