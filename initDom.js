/**
 * Created by haoliang on 2016/4/8.
 */

var jsdom = require("jsdom");

jsdom.env(
{
    url: "https://login.taobao.com/member/login.jhtml",
    scripts: ["https://code.jquery.com/jquery-1.11.3.js" // jquery
        , "https://g.alicdn.com/kissy/k/1.4.4/seed-min.js" // kissy js
        , "https://g.alicdn.com/kg/??rsa/2.0.1/index-min.js?t=1358514278.js"], // �Ա��������js
    done: function (err, window)
    {
        try
        {
            console.log("dom is done");
            exports.$ = window.$;
            exports.KISSY = window.KISSY;
            
            // setTimeout(function(){
            //     console.log(window['_n']);
            // },5000);
        } catch (error) {
            console.log(error)
        }
    }
});
