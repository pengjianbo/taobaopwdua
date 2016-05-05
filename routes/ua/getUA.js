var jsdom = require("jsdom");
var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function (req, res) {
  getDomUa(req, res);
});

router.get('/initPageForUA', function (req, res) {
  var token = req.query["token"];
  var behaviorTraceId = req.query["behaviorTraceId"];
  res.send(`
  <script type="text/javascript" charset="utf-8" src="../scripts/nc.js?t=2016043012">
  </script>
  <script>
    var UA_Opt = {};
        UA_Opt.ExTarget = ['TPL_password_1', 'TPL_password_2', 'J_Pwd1', 'J_PwdV'];
        UA_Opt.FormId = "J_Form";
        function initNC() {
          var nc = new noCaptcha();
          var opt = {
            renderTo: "nocaptcha",
            appkey: "CF_APP_TBLogin_PC",
            token: "`+ token + `",
            elementID: ["TPL_username_1"],
            trans: { "behaviorTraceId": "`+ behaviorTraceId + `" },
            is_Opt: 1,
            language: "cn",
            isEnabled: true,

            customWidth: 'J_StaticForm',
            customFloatHeight: 420,

            times: 3,
            error: function (s) {
              window.console && console.log("error");
              window.console && console.log(s);
            },
            is_tbLogin: true
          };
          nc.init(opt);
        }
        initNC();
  </script>`);
})

module.exports = router;


function getDomUa(req, res) {
  var token = req.query["token"];
  var behaviorTraceId = req.query["behaviorTraceId"];
  if (token == "" || token == undefined)
    token = "84601b05aecb5e972f28657decd543846f6190db";
  if (behaviorTraceId == "" || behaviorTraceId == undefined)
    behaviorTraceId = "47dccb7f99fcf793c60ae0431f6265cd";

  var url = "http://localhost:8000/getUA/initPageForUA" + "?token=" + token + "&behaviorTraceId=" + behaviorTraceId;

  jsdom.env(
    {
      url: url,
      scripts: [
        //  "https://code.jquery.com/jquery-1.11.3.js" // jquery
      ],
      features:
      {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"],
        SkipExternalResources: false
      },
      done: function (err, window, kissy) {
        //var $ = window.$;
        // console.log("dom is done");


        // ua �첽���ɣ��޷�ֱ�ӻ�ȡ������1.5s����
        setTimeout(function () {
          console.log(window._n);
          res.send(window._n);
        }, 100);

      }
    });
}









