var express = require('express');
var app = express();
var path = require('path');

// ����·��
var tbpwd = require('./routes/password/getPassword');
var tbua = require('./routes/ua/getUA');

// /** �������*/
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

// ʹ��express ���ʾ�̬�ļ�
app.use(express.static(path.join(__dirname, 'public')));

// ָ��·��
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
