var express = require('express');
var router  = express.Router();
var dom = require('./initDom.js');

router.get('/',function(req, res){
    var oldPwd = req.query["password"];
    if(oldPwd != undefined)
    {
        GetEncryptPassword(res, oldPwd)
    }
    else
        res.send('can shu cuo wu');
});
module.exports = router;


function GetEncryptPassword(response, oldPwd)
{
    try     
    {
        dom.KISSY.use("kg/rsa/2.0.1/index",function (S,e)
        {
            try     
            {
                var rsa = new e;
                var pbk = dom.$("#J_PBK").val();
                // var pbk = "9a39c3fefeadf3d194850ef3a1d707dfa7bec0609a60bfcc7fe4ce2c615908b9599c8911e800aff684f804413324dc6d9f982f437e95ad60327d221a00a2575324263477e4f6a15e3b56a315e0434266e092b2dd5a496d109cb15875256c73a2f0237c5332de28388693c643c8764f137e28e8220437f05b7659f58c4df94685";
                var exponent = "10001";
                rsa.setPublic(pbk, exponent);
                var a = rsa.encrypt(oldPwd);
                var resultJson = '{ IsSuccess:true, EncryptPassword:"'+ a + '" }';
                response.send(resultJson);
                console.log(resultJson);
            }
            catch (e2)
            {
                console.log(e2);
            }
        });
     }
     catch (e1)
     {
        console.log(e);
     }
}