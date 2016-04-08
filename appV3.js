var express = require('express');
var app = express();
var jsdom = require("jsdom");

initDom();
var $;
var kissy;
function initDom()
{
    jsdom.env(
    {
        url: "https://login.taobao.com/member/login.jhtml",
        scripts: ["http://localhost:10180/scripts/jquery-2.2.2.js" // jquery
            , "https://g.alicdn.com/kissy/k/1.4.4/seed-min.js" // kissy js
            , "https://g.alicdn.com/kg/??rsa/2.0.1/index-min.js?t=1358514278.js"], // �Ա��������js
        done: function (err, window)
        {
            try
            {
                console.log("dom is done");
                $ = window.$;
                kissy = window.KISSY;
            } catch (error) {
                console.log(error)
            }
        }
    });
}


app.get('/', function(req, res){
  var oldPwd = req.query["password"];
  if(oldPwd != undefined)
  {
     GetRsgPwd(res, oldPwd)
  }
  else
      res.send('can shu cuo wu');
});

app.listen(3000);



function GetRsgPwd(response, oldPwd)
{
    kissy.use("kg/rsa/2.0.1/index",function (S,e)
    {
        var rsa = new e;
        var pbk = $("#J_PBK").val();
        // var pbk = "9a39c3fefeadf3d194850ef3a1d707dfa7bec0609a60bfcc7fe4ce2c615908b9599c8911e800aff684f804413324dc6d9f982f437e95ad60327d221a00a2575324263477e4f6a15e3b56a315e0434266e092b2dd5a496d109cb15875256c73a2f0237c5332de28388693c643c8764f137e28e8220437f05b7659f58c4df94685";
        var exponent = "10001";
        rsa.setPublic(pbk, exponent);
        var a = rsa.encrypt(oldPwd);
        response.send(a);
        console.log(a);
    });
}