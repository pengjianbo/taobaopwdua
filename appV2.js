var jsdom = require("jsdom");
var express = require('express');
var app = express();

/** ‘ –ÌøÁ”Ú*/
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.get('/settoken', function(req, res){
      //res.send(html);
      //console.log(html);
      console.log(req.query["token"]);
      res.send('ok');
});
app.listen(3001);

var html;
jsdom.env({
    url: "https://login.taobao.com/member/login.jhtml",
    scripts: [
                    "http://code.jquery.com/jquery.js" // jquery 
                // , "https://g.alicdn.com/kissy/k/1.4.4/seed-min.js" // kissy js
                // , "https://g.alicdn.com/tb/login/0.5.11/js/login/nlogin.js?t=20151220"
                // , "https://g.alicdn.com/sd/ncpc/nc.js?t=2016040811" 
                // , "https://g.alicdn.com/alilog/mlog/aplus_v2.js" 
                // , "https://g.alicdn.com/pecdn/mlog/agp_heat.min.js?t=202789" 
                // , "https://af.alicdn.com/js/uac.js?_t=202789" 
                // , "https://g.alicdn.com/security/umscript/3.2.1/um.js" 
                // , "https://g.alicdn.com/tb/login/0.5.11/js/??client.js,atp.js?t=20130528" 
                // , "https://g.alicdn.com/sd/pointman/js/pt2.js?_=405579" 
                // , "https://g.alicdn.com/kissy/k/1.4.4/??node-min.js,dom/base-min.js,event/dom/base-min.js,event/base-min.js,event/dom/shake-min.js,event/dom/focusin-min.js,anim-min.js,anim/base-min.js,promise-min.js,anim/timer-min.js,anim/transition-min.js" 
                // , "https://g.alicdn.com/kissy/k/1.4.4/??event-min.js,event/custom-min.js" 
                // , "https://g.alicdn.com/security/umscript/3.2.2/um.js" 
                // , "https://af.alicdn.com/js/cj/61.js" 
                // , "https://g.alicdn.com/kissy/k/1.4.4/??io-min.js,cookie-min.js" 
                // , "https://g.alicdn.com/kg/??rsa/2.0.1/index-min.js?t=1358514278.js" // º”√‹ js
                // , "https://g.alicdn.com/kg/??slide/2.0.2/index-min.js?t=1358514278.js" 
                // , "https://g.alicdn.com/secdev/entry/index.js?t=202789" 
                // , "https://g.alicdn.com/sd/data_sufei/1.5.1/aplus/index.js" 
            ], 
    features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"],
        SkipExternalResources: false
    },
    done: function (err, window, kissy) {
        var $ = window.$;
        console.log("dom is done");
        
        // var UA_Opt = {};
        // UA_Opt.ExTarget = ['TPL_password_1','TPL_password_2','J_Pwd1','J_PwdV'];
        // UA_Opt.FormId = "J_Form";
        
        // var noCaptcha = window.noCaptcha;
        // var KISSY = window.KISSY;
        // function initNC() {
        //     var nc = new noCaptcha();
        //     var opt = {
        //         renderTo : "nocaptcha",
        //         appkey : "CF_APP_TBLogin_PC",
        //         token : $("#J_NcoToken").val(),
        //         elementID : [ "TPL_username_1" ],
        //         is_Opt : 1,
        //         language : "cn",
        //         isEnabled : true,
        //         customWidth: 'J_StaticForm',
        //         customFloatHeight: 420,
        //         times : 3,
        //         callback: function (data) {
        //             var S = KISSY;
        //             S.one("#J_NcoSig").val( data.sig);
        //             S.one("#J_NcoSessionid").val(data.csessionid);
        //         },
        //         error: function (s) {
        //             //window.console &amp;&amp; 
        //             console.log("error");
        //             //window.console &amp;&amp; 
        //             console.log(s);
        //         },
        //         is_tbLogin : true
        //     };
        //     nc.init(opt);
        // }
        // initNC();
            
        html = $('body').html();
        }
});




