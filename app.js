var jsdom = require("jsdom");
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    GetRsgPwd(response);
 }).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

function GetRsgPwd(response)
{
    jsdom.env({
        url: "https://login.taobao.com/member/login.jhtml",
        scripts: ["http://code.jquery.com/jquery.js" // jquery 
                , "https://g.alicdn.com/kissy/k/1.4.4/seed-min.js" // kissy js
                , "https://g.alicdn.com/kg/??rsa/2.0.1/index-min.js?t=1358514278.js"], // ??????????js
    done: function (err, window) {
        var $ = window.$;
        console.log("dom is done");
        
        // kissy config
        // var a = 'file:' === window.location.protocol || window.location.href.indexOf('local=1') >= 0,
        //     b = window.location.href.indexOf('daily.taobao.net') > 0;
        // window.location.protocol;
        // window.KISSY.config({
        //     combine: !a && !b,
        //     packages: [
        //         {
        //             name: 'kg',
        //             tag: '1358514278',
        //             path: '//g.alicdn.com/',
        //             charset: 'gbk'
        //         }
        //     ]
        // });
        
        window.KISSY.use("kg/rsa/2.0.1/index",function (S,e)
        {
            var rsa = new e;
            var pbk = $("#J_PBK").val();
            // var pbk = "9a39c3fefeadf3d194850ef3a1d707dfa7bec0609a60bfcc7fe4ce2c615908b9599c8911e800aff684f804413324dc6d9f982f437e95ad60327d221a00a2575324263477e4f6a15e3b56a315e0434266e092b2dd5a496d109cb15875256c73a2f0237c5332de28388693c643c8764f137e28e8220437f05b7659f58c4df94685";
            var exponent = "10001";
            rsa.setPublic(pbk, exponent);
            var a = rsa.encrypt("1qazXDR%^YHN");
            response.end(a);
            console.log(a);
        });
    }
    });
    
}



