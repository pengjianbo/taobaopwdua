/* v1.0.14,1.0.15,1 2016-04-22 10:44:54 */
!function ()
{
    function cond()
    {
        // return Math.random()
    }
    function chkQuerySet()
    {
        // var e,
        // t = window[QUERY_KEY];
        // return isNaN(t) ? (e = location.href.split(QUERY_KEY + '=') [1], t = parseFloat(e), void (isNaN(t) || (GREY_RATIO = t)))  : void (GREY_RATIO = t)
    }
    var GREY_RATIO = 1,
    QUERY_KEY = 'aq-nc-grey-ratio',
    STABLE_ACTION = function ()
    {
    },
    NEW_ACTION = function ()
    {
        !function e(t, a, n)
        {
            function o(r, c)
            {
                if (!a[r])
                {
                    if (!t[r])
                    {
                        var s = 'function' == typeof require && require;
                        if (!c && s) return s(r, !0);
                        if (i) return i(r, !0);
                        throw new Error('Cannot find module \'' + r + '\'')
                    }
                    var l = a[r] = {
                        exports: {
                        }
                    };
                    t[r][0].call(l.exports, function (e)
                    {
                        var a = t[r][1][e];
                        return o(a ? a : e)
                    }, l, l.exports, e, t, a, n)
                }
                return a[r].exports
            }
            for (var i = 'function' == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
            return o
        }({
            1: [
                function (e, t, a)
                {
                    !function ()
                    {
                        var t = window,
                        a = document,
                        n = '_nc_initialized';
                        if (!t[n])
                        {
                            t[n] = 1;
                            var o = e('./v').v;
                            e('./pclib/onerror');
                            var i = {
                            },
                            r = {
                            },
                            c = {
                                // has_pointman: t.pointman && '19' == pointman._z,
                                // render_to: '',
                                // el_render_to: null,
                                // v: o
                            };
                            t.UA_Opt = t.UA_Opt || {
                            };
                            var s = {
                            },
                            l = e('./pclib/noCaptcha').makeNoCaptcha(r, s, c, i);
                            l.v = o,
                            r.init = function (e)
                            {
                                // if (e.cssUrl) if (a.createStyleSheet) a.createStyleSheet(e.cssUrl);
                                // else {
                                // var t = a.createElement('link');
                                // t.type = 'text/css',
                                // t.rel = 'stylesheet',
                                // t.href = c.has_pointman ? pointman.addHourStamp(e.cssUrl)  : e.cssUrl;
                                // var n = a.getElementsByTagName('script') [0];
                                // n.parentNode.insertBefore(t, n)
                                // }
                            },
                            r.on = function (e, t)
                            {
                                // i[e] = i[e] || [],
                                // i[e].push(t)
                            },
                            c.has_pointman && (r.noCaptcha = l, pointman.define('nc', function ()
                            {
                                // return r
                            })),
                            t.noCaptcha = l
                        }
                    }()
                },
                {
                    './pclib/noCaptcha': 12,
                    './pclib/onerror': 13,
                    './v': 20
                }
            ],
            2: [
                function (e, t, a)
                {
                    // 'use strict';
                    // function n(e) {
                    // var t,
                    // a = '',
                    // n = _.getElementById('umFlash');
                    // if (n && !a) try {
                    // t = n.getCookie(e) || '',
                    // a = t
                    // } catch (o) {
                    // }
                    // try {
                    // g.localStorage && !a && (t = localStorage[e] || '', a = t)
                    // } catch (o) {
                    // }
                    // if (g.navigator.cookieEnabled && !a) {
                    // var i = _.cookie.indexOf(e + '=');
                    // if ( - 1 != i) {
                    // i += e.length + 1;
                    // var r = _.cookie.indexOf(';', i);
                    // - 1 == r && (r = _.cookie.length),
                    // t = decodeURIComponent(_.cookie.substring(i, r)) || '',
                    // a = t
                    // }
                    // }
                    // return a
                    // }
                    // function o(e, t, a) {
                    // a = a || 7;
                    // var n = new Date;
                    // n.setTime(n.getTime() + 86400000 * a),
                    // _.cookie = [
                    // encodeURIComponent(e),
                    // '=',
                    // encodeURIComponent('' + t),
                    // ';expires=',
                    // n.toGMTString()
                    // ].join('')
                    // }
                    // function i() {
                    // var e = n(h);
                    // return e || (e = f + r(11), o(h, e, 3650)),
                    // e
                    // }
                    // function r(e) {
                    // for (var t = ''; t.length < e; ) t += Math.random().toString().substr(2);
                    // return t.substring(t.length - e)
                    // }
                    // function c() {
                    // var e = g._sec_module = g._sec_module || {
                    // };
                    // if (d = e.token) return d;
                    // var t = i();
                    // return d = t + f + r(3),
                    // e.token = d,
                    // d
                    // }
                    // function s() {
                    // if (u) return u;
                    // var e = '_umdata';
                    // try {
                    // g.localStorage && (u = localStorage.getItem(e))
                    // } catch (t) {
                    // }
                    // return u ? u : (u = n(e), u || '')
                    // }
                    // function l() {
                    // return p ? p : p = s() || c()
                    // }
                    // var d,
                    // u,
                    // p,
                    // g = window,
                    // _ = document,
                    // h = '_uab_collina',
                    // f = g.pointman && pointman._now ? pointman._now : (new Date).getTime();
                    // a.getSecToken = c,
                    // a.getNCToken = l
                },
                {
                }
            ],
            3: [
                function (e, t, a)
                {
                    function n(e, t)
                    {
                        this.id = function (e)
                        {
                            // return 0 == e.indexOf('#') ? i.getElementById(e.slice(1))  : i.getElementById(e)
                        },
                        this.tag = function (e)
                        {
                            // var t = e.split(' ');
                            // return this.id(t[0]).getElementsByTagName(t[1])
                        },
                        this.toggle = function (e)
                        {
                            // var t = this.id(e);
                            // 'none' == t.style.display || '' === t.style.display ? t.style.display = 'block' : t.style.display = 'none'
                        },
                        this.clone = function (e)
                        {
                            // var t,
                            // a,
                            // n = e;
                            // if (e && ((a = e instanceof Array) || e instanceof Object)) {
                            // n = a ? [
                            // ] : {
                            // };
                            // for (t in e) e.hasOwnProperty(t) && (n[t] = this.clone(e[t]))
                            // }
                            // return n
                        },
                        this.extend = function (e, t, a)
                        {
                            // var n,
                            // o;
                            // if (t instanceof Array) for (n = 0, o = t.length; o > n; n++) this.extend(e, t[n], a);
                            // for (n in t) n in e && t.hasOwnProperty(n) && (e[n] = t[n]);
                            // return e
                        },
                        this.objUpdate = function (e, t)
                        {
                            var a;
                            for (a in t) t.hasOwnProperty(a) && (e[a] = t[a])
                        },
                        this.loadjs = function (e, t)
                        {
                            function a()
                            {
                                clearTimeout(r),
                                o || (o = 1, t())
                            }
                            var n = i.createElement('script');
                            n.type = 'text/javascript';
                            var o;
                            n.onreadystatechange = function ()
                            {
                                ('loaded' == n.readyState || 'complete' == n.readyState) && (n.onreadystatechange = null, a())
                            },
                            n.onload = a,
                            n.onerror = function ()
                            {
                                t('err')
                            },
                            n.src = e;
                            var r = setTimeout(function ()
                            {
                                n.onerror()
                            }, 5000),
                            c = i.getElementsByTagName('script')[0];
                            c.parentNode.insertBefore(n, c)
                        },
                        this.jsonp = function (a)
                        {
                            // var n = 0;
                            // a.time = e.timeout || 3000;
                            // var r;
                            // if (a = a || {
                            // }, !a.url || !a.callback) throw new Error('参数不合法');
                            // var c = ('jsonp_' + Math.random()).replace('.', ''),
                            // s = i.getElementsByTagName('script') [0],
                            // l = '';
                            // a.data ? (a.data[a.callback] = c, l += t(a.data))  : l += a.callback + '=' + c;
                            // var d = i.createElement('script');
                            // s.parentNode.insertBefore(d, s),
                            // o[c] = function (e) {
                            // try {
                            // d.parentNode && d.parentNode.removeChild(d)
                            // } catch (t) {
                            // }
                            // clearInterval(r),
                            // o[c] = null,
                            // a.success && a.success(e)
                            // },
                            // d.src = a.url + ( - 1 == a.url.indexOf('?') ? '?' : '&') + l,
                            // a.time && (r = setInterval(function () {
                            // n++;
                            // var t;
                            // if (n >= e.times) {
                            // o[c] = function () {
                            // },
                            // clearInterval(r);
                            // try {
                            // d.parentNode && d.parentNode.removeChild(d)
                            // } catch (s) {
                            // }
                            // a.fail(1)
                            // } else try {
                            // d.parentNode && d.parentNode.removeChild(d),
                            // d = i.createElement('script'),
                            // t = i.getElementsByTagName('script') [0],
                            // t.parentNode.insertBefore(d, t),
                            // d.src = a.url + ( - 1 == a.url.indexOf('?') ? '?' : '&') + l + '&t=' + Math.random()
                            // } catch (s) {
                            // }
                            // }, a.time))
                        },
                        this.obj2str = function (e)
                        {
                            // var t,
                            // a = [
                            // ],
                            // n = arguments.callee;
                            // if ('string' == typeof e) return '"' + e.replace(/(['"\\])/g, '\\$1').replace(/(\n)/g, '\\n').replace(/(\r)/g, '\\r').replace(/(\t)/g, '\\t') + '"';
                            // if ('undefined' == typeof e) return 'undefined';
                            // if ('object' == typeof e) {
                            // if (null === e) return 'null';
                            // if (e.sort) {
                            // for (t = 0; t < e.length; t++) a.push(n(e[t]));
                            // a = '[' + a.join() + ']'
                            // } else {
                            // for (t in e) e.hasOwnProperty(t) && a.push('"' + t + '":' + n(e[t]));
                            // a = '{' + a.join() + '}'
                            // }
                            // return a
                            // }
                            // return e.toString()
                        },
                        this.addHandler = function (e, t, a)
                        {
                            // e.addEventListener ? e.addEventListener(t, a, !1)  : e.attachEvent && e.attachEvent('on' + t, a)
                        },
                        this.removeEvt = function (e, t, a)
                        {
                            // e.removeEventListener ? e.removeEventListener(t, a, !1)  : e.detachEvent && e.detachEvent('on' + t, a)
                        }
                    }
                    var o = window,
                    i = document;
                    a.BaseFun = n
                },
                {
                }
            ],
            4: [
                function (e, t, a)
                {
                    function n()
                    {
                        'use strict';
                        var e = 1,
                        t = navigator && navigator.userAgent || '',
                        a = /Firefox\/([\d.]*)/.test(t),
                        n = -1 !== t.indexOf('Windows'),
                        c = (new Date).getTime(),
                        s = (new Date).getTime(),
                        l = i.head || i.getElementsByTagName('head')[0] || i.documentElement,
                        d = function (e)
                        {
                            // return i.getElementById(e)
                        },
                        u = {
                            // 'default': 4,
                            // number: 6,
                            // '150_40': 4,
                            // login_wan3: 4,
                            // login_wan10: 6
                        },
                        p = function (e)
                        {
                            // this.lang = e.lang,
                            // this.config = {
                            // apiserver: e.apiserver || '//pin2.aliyun.com',
                            // type: e.type || 'default',
                            // codeLength: e.checkCodeLength || u[e.type || 'default'],
                            // identity: e.identity || '',
                            // sessionid: e.sessionid || '',
                            // element: e.element || null
                            // },
                            // this.tipText = {
                            // };
                            // var t,
                            // a = r[e.lang] || r.en;
                            // for (t in a) a.hasOwnProperty(t) && (this.tipText[t] = e[t] || a[t]);
                            // this.service = {
                            // imgURL: '{apiserver}/get_img?sessionid={sessionid}&identity={identity}&type={type}',
                            // checkImgURL: '{apiserver}/check_img?sessionid={sessionid}&identity={identity}&type={type}',
                            // audioURL: '{apiserver}/get_audio?identity={identity}&sessionid={sessionid}',
                            // checkAudioURL: '{apiserver}/check_audio?sessionid={sessionid}&identity={identity}'
                            // },
                            // this.cache = {
                            // codeType: 'img',
                            // oldCode: null,
                            // lastCheckCode: '',
                            // checkedCode: null,
                            // checkState: 'notstart',
                            // audio: null,
                            // audioPlayer: null,
                            // callback: null
                            // }
                        };
                        return p.prototype = {
                            render: function ()
                            {
                                // var e = this,
                                // t = e.config;
                                // if (!t.element) return !1;
                                // '[object String]' == Object.prototype.toString.call(t.element) && (t.element = d(t.element));
                                // for (var a in this.service) if (this.service.hasOwnProperty(a)) {
                                // var n = this.service[a];
                                // n = n.replace('{apiserver}', t.apiserver).replace('{identity}', t.identity).replace('{sessionid}', t.sessionid).replace('{type}', t.type),
                                // this.service[a] = n
                                // }
                                // return e.renderCode(),
                                // this
                            },
                            renderCode: function ()
                            {
                                // function e() {
                                // var e = c || d('omeo-code-key');
                                // e.value = e.value.replace(/[^\w\d]/g, '')
                                // }
                                // var t = this,
                                // a = t.tipText,
                                // n = t.config,
                                // o = i.createElement('div'),
                                // r = n.element;
                                // o.className = 'omeo-box',
                                // o.innerHTML = '<div class="omeo-code omeo-img-active" id="omeo-code"><div class="omeo-code-img"><img id="omeo-code-imgwrap" data-action="refreshImg" src="' + t.service.imgURL + '" onmousedown="return false;"/><a data-action="refreshImg" href="javascript:;" onmousedown="return false;" title="' + a.refresh + '" class="omeo-code-refresh"></a><a data-action="switchToAudio" href="javascript:;" onmousedown="return false;" title="' + a.audioText + '" class="omeo-switch"></a></div><div class="omeo-code-audio"><div class="omeo-code-audiobox omeo-code-audiobox-playing"><a data-action="replayAudio" href="javascript:;">' + a.clickPlay + '</a><span id="omeo-audio-process"></span><b>' + a.audioTips + '</b></div><a id="omeo-refresh-audio" data-action="refreshAudio" href="javascript:;" onmousedown="return false;" title="' + a.refresh + '" class="omeo-code-refresh"></a><a data-action="switchToImg" href="javascript:;" onmousedown="return false;" title="' + a.imgText + '" class="omeo-switch"></a></div></div><div class="omeo-code-echo"><input id="omeo-code-key" type="text" name="code" maxlength="6" placeholder="' + a.placeholder + '" /><span class="omeo-code-state" id="omeo-code-state"></span></div><img id="_voice_close" src="//g.alicdn.com/sd/ncpc/images/voice_close.png" onclick="document.getElementById(\'_voicebtn\').click()" />',
                                // r.appendChild(o);
                                // var c = d('omeo-code-key');
                                // r.addEventListener ? (r.addEventListener('click', function (e) {
                                // t.triggerEvent(e)
                                // }, !1), d('omeo-code-imgwrap').addEventListener('error', function () {
                                // t.log({
                                // e: 'IMGERROR'
                                // }),
                                // 'img' == t.cache.codeType && t.refreshCode()
                                // }, !1), c.addEventListener('blur', function () {
                                // e(),
                                // t.validateCode({
                                // code: d('omeo-code-key').value.replace(/^\s|\s$/g, '')
                                // })
                                // }, !1), c.addEventListener('keyup', function () {
                                // e(),
                                // t.listenerCodeType(this.value.replace(/^\s|\s$/g, ''))
                                // }, !1), c.addEventListener('paste', function (e) {
                                // e.preventDefault()
                                // }, !0))  : (r.attachEvent('onclick', function (e) {
                                // return t.triggerEvent(e),
                                // !1
                                // }), d('omeo-code-imgwrap').attachEvent('onerror', function () {
                                // t.log({
                                // e: 'IMGERROR'
                                // }),
                                // 'img' == t.cache.codeType && t.refreshCode()
                                // }), c.attachEvent('onblur', function () {
                                // e(),
                                // t.validateCode({
                                // code: d('omeo-code-key').value.replace(/^\s|\s$/g, '')
                                // })
                                // }), c.attachEvent('onkeyup', function () {
                                // e(),
                                // t.listenerCodeType(d('omeo-code-key').value.replace(/^\s|\s$/g, ''))
                                // }), c.attachEvent('onpaste', function () {
                                // return !1
                                // }))
                            },
                            listenerCodeType: function (e)
                            {
                                // this.cache.oldCode && this.cache.oldCode.length !== this.config.codeLength || 1 !== e.length || (s = (new Date).getTime()),
                                // this.cache.oldCode = e,
                                // e.length == this.config.codeLength && this.validateCode({
                                // code: e
                                // })
                            },
                            triggerEvent: function (e)
                            {
                                // var t = e.target || e.srcElement,
                                // a = t.getAttribute('data-action');
                                // try {
                                // d('omeo-code-key').focus()
                                // } catch (e) {
                                // }
                                // 'refreshAudio' === a && this.refreshCode(),
                                // 'switchToAudio' === a && (this.cache.codeType = 'audio', this.switchCode({
                                // type: 'audio'
                                // })),
                                // 'replayAudio' == a && this.playAudio()
                            },
                            resetPlayer: function (e)
                            {
                                // var t = d('omeo-audio-process');
                                // t.style.width = 0,
                                // 'playing' == e.state ? t.parentNode.className = 'omeo-code-audiobox omeo-code-audiobox-playing' : t.parentNode.className = 'omeo-code-audiobox'
                            },
                            refreshCode: function ()
                            {
                                // var e = d('omeo-code-state');
                                // e.className = 'omeo-code-state',
                                // e.innerHTML = '',
                                // o.__progtid && clearInterval(o.__progtid),
                                // d('omeo-code-key').value = '',
                                // this.resetPlayer({
                                // state: 'playing'
                                // }),
                                // this.playAudio(),
                                // c = s = (new Date).getTime()
                            },
                            switchCode: function (e)
                            {
                                // 'img' == e.type ? (this.stopAudio(), d('omeo-code').className = 'omeo-code omeo-img-active')  : (d('omeo-code').className = 'omeo-code omeo-audio-active', this.resetPlayer({
                                // state: 'playing'
                                // }), !this.audioSupport || a || (d('omeo-refresh-audio').style.display = ''), this.playAudio()),
                                // this.cache.checkState = 'notstart',
                                // this.cache.checkedCode = null;
                                // var t;
                                // t = d('omeo-code-state'),
                                // t.className = 'omeo-code-state',
                                // t.innerHTML = '',
                                // t = d('omeo-code-key'),
                                // t.value = '',
                                // t.focus(),
                                // this.cache.oldCode && this.refreshCode(),
                                // c = s = (new Date).getTime()
                            },
                            playErrAudio: function ()
                            {
                                // var e = '//g.alicdn.com/sd/ncpc/images/',
                                // t = e + 'error.wav',
                                // a = e + 'error_en.mp3',
                                // n = 'cn' == this.lang || 'zh_CN' == this.lang;
                                // this.playAudio(n ? t : a)
                            },
                            playAudio: function (t)
                            {
                                // t || (t = this.service.audioURL + (this.service.audioURL.indexOf('?') >= 0 ? '&t=' : '?t=') + (new Date).getTime()),
                                // this.stopAudio();
                                // var a;
                                // a = t.indexOf('.mp3') > - 1 ? 'audio/mpeg' : 'audio/x-wav';
                                // var r;
                                // if (this.audioSupport) this.cache.audio = new Audio,
                                // r = i.createElement('source'),
                                // r.type = a,
                                // r.src = t,
                                // this.cache.audio.appendChild(r),
                                // this.cache.audio.load(),
                                // this.cache.audio.play(),
                                // this.bindAudioProgress();
                                // else if (this.isIE) {
                                // var c = i.createElement('bgsound');
                                // c.setAttribute('id', 'omeo-bgsound-audio' + e),
                                // c.setAttribute('autostart', 'true'),
                                // c.setAttribute('src', t),
                                // l.appendChild(c),
                                // this.cache.audioPlayer = d('omeo-bgsound-audio' + e),
                                // this.resetPlayer({
                                // state: 'playing'
                                // });
                                // var s = 0,
                                // u = this;
                                // o.__progtid && clearInterval(o.__progtid),
                                // o.__progtid = setInterval(function () {
                                // s += 10,
                                // s > 100 && (s = 100),
                                // u.updateProgress(s),
                                // s >= 100 && clearInterval(o.__progtid)
                                // }, 1000)
                                // } else l.appendChild('<embed src="' + t + '" id="omeo-flash-audio' + e + '" ' + (n ? 'type="application/x-mplayer2"' : 'type="' + a + '"') + ' autostart hidden />'),
                                // this.cache.audioPlayer = d('omeo-flash-audio' + e),
                                // this.updateProgress('NOPROGRESS')
                            },
                            bindAudioProgress: function ()
                            {
                                // var e = this,
                                // t = e.cache;
                                // t.audio.addEventListener('timeupdate', function () {
                                // !a || this.duration && this.duration !== 1 / 0 ? e.updateProgress(parseInt(100 * this.currentTime / this.duration))  : e.updateProgress(100)
                                // }, t.audio),
                                // t.audio.addEventListener('ended', function () {
                                // e.updateProgress(100)
                                // }, t.audio)
                            },
                            updateProgress: function (e)
                            {
                                // switch (e) {
                                // case - 1:
                                // break;
                                // case 100:
                                // this.resetPlayer({
                                // state: 'end'
                                // });
                                // break;
                                // case 'NOPROGRESS':
                                // this.resetPlayer({
                                // state: 'end'
                                // });
                                // break;
                                // default:
                                // d('omeo-audio-process').style.width = e + '%'
                                // }
                            },
                            stopAudio: function ()
                            {
                                // var e = this.cache;
                                // this.audioSupport ? e.audio && e.audio.pause()  : e.audioPlayer && (e.audioPlayer.src = '', e.audioPlayer.parentNode.removeChild(this.cache.audioPlayer), e.audioPlayer = null)
                            },
                            replayAudio: function ()
                            {
                                // this.audioSupport && this.cache.audio && (this.resetPlayer({
                                // state: 'playing'
                                // }), this.cache.audio.currentTime = 0, this.cache.audio.pause(), this.cache.audio.play())
                            },
                            loadResource: function (e, t)
                            {
                                // var a = null;
                                // /\.css/g.test(e) ? (i.createStyleSheet && i.createStyleSheet(e), a = i.createElement('link'), a.rel = 'stylesheet', a.href = e)  : (a = i.createElement('script'), a.src = e),
                                // 'onload' in a ? a.onload = function () {
                                // t && t()
                                // }
                                // : a.onreadystatechange = function () {
                                // /loaded|complete/.test(a.readyState) && t && t()
                                // },
                                // l.appendChild(a)
                            },
                            isIE: function ()
                            {
                                // return !!/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(t)
                            }(),
                            audioSupport: function ()
                            {
                                // try {
                                // return 'Audio' in o && (new Audio).canPlayType('audio/x-wav')
                                // } catch (e) {
                                // return !1
                                // }
                            }(),
                            validateCode: function (t)
                            {
                                // var a = this,
                                // n = d('omeo-code-state'),
                                // i = 'omeocode' + e + ( + new Date).toString().substr( - 6, 6),
                                // r = a.service.checkAudioURL;
                                // return a.cache.checkedCode && a.cache.checkedCode === a.cache.oldCode ? !1 : a.cache.lastCheckCode == t.code ? !1 : (a.cache.lastCheckCode = t.code, a.cache.checkedCode = null, 'checking' == a.cache.checkState ? !1 : (a.cache.checkState = 'checking', void (/^[a-z0-9]{4,6}$/gi.test(t.code) ? (r += '&code=' + t.code + '&callback=' + i, o[i] = function (e) {
                                // var o = {
                                // };
                                // if ('SUCCESS.' == e.message) {
                                // a.cache.checkedCode = t.code,
                                // n.className = 'omeo-code-state omeo-code-state-success',
                                // n.innerHTML = '',
                                // a.cache.checkState = 'success',
                                // o = {
                                // message: 'success'
                                // };
                                // var i = (new Date).getTime();
                                // a.log({
                                // t1: i - s,
                                // t2: i - c,
                                // s: e && 'SUCCESS.' === e.message,
                                // t: a.cache.codeType
                                // })
                                // }
                                // 'ERROR.' == e.message && (n.className = 'omeo-code-state omeo-code-state-error', n.innerHTML = a.tipText.codeError, setTimeout(function () {
                                // var e = d('omeo-code-state');
                                // e.className = '',
                                // e.innerHTML = '',
                                // d('omeo-code-key').value = ''
                                // }, 3000), a.cache.checkState = 'codeError', o = {
                                // message: 'error'
                                // }, d('omeo-code-key').select(), 'true' == e.refresh && a.refreshCode()),
                                // a.cache.callback && a.cache.callback(o)
                                // }, a.loadResource(r))  : (a.cache.checkState = 'codeError', n.className = 'omeo-code-state omeo-code-state-error', n.innerHTML = '验证码错误，请重新输入', a.playErrAudio(), setTimeout(function () {
                                // var e = d('omeo-code-state');
                                // e.className = '',
                                // e.innerHTML = '',
                                // e = d('omeo-code-key'),
                                // e.value = '',
                                // e.focus(),
                                // a.resetPlayer({
                                // state: 'playing'
                                // }),
                                // a.playAudio()
                                // }, 5000)))))
                            },
                            check: function (e)
                            {
                                // 'success' == this.cache.checkState && e && e({
                                // message: 'success'
                                // }),
                                // 'codeError' == this.cache.checkState && e && e({
                                // message: 'error'
                                // }),
                                // this.cache.callback = e
                            },
                            log: function ()
                            {
                            }
                        },
                        p
                    }
                    var o = window,
                    i = document,
                    r = e('./language-checkcode').language;
                    a.init = n
                },
                {
                    './language-checkcode': 10
                }
            ],
            5: [
                function (e, t, a)
                {
                    // 'use strict';
                    // function n() {
                    // var e = r.createElement('style');
                    // e.appendChild(r.createTextNode(''));
                    // var t = r.getElementsByTagName('script'),
                    // a = t[t.length - 1];
                    // return a.parentNode.insertBefore(e, a),
                    // e.sheet
                    // }
                    // function o(e, t, a, n) {
                    // 'number' != typeof n && (n = 1),
                    // 'insertRule' in e ? e.insertRule(t + '{' + a + '}', n)  : 'addRule' in e && e.addRule(t, a, n)
                    // }
                    // function i(e) {
                    // var t = r.createElement('style');
                    // t.type = 'text/css',
                    // t.className = 'nc-style',
                    // t.styleSheet ? t.styleSheet.cssText = e : (t.innerHTML = e, t.appendChild(r.createTextNode(e)));
                    // var a = r.getElementsByTagName('script'),
                    // n = a[a.length - 1];
                    // n.parentNode.insertBefore(t, n)
                    // }
                    // var r = document;
                    // t.exports = {
                    // createSheet: n,
                    // addCSSRule: o,
                    // insertCSS: i
                    // }
                },
                {
                }
            ],
            6: [
                function (e, t, a)
                {
                    // var n = e('../lib/tk'),
                    // o = {
                    // renderTo: '',
                    // isEnabled: !0,
                    // foreign: 0,
                    // cssUrl: !1,
                    // uaUrl: '',
                    // appkey: '',
                    // trans: {
                    // },
                    // token: n.getNCToken(),
                    // elementID: '',
                    // audio: !1,
                    // timeout: 3000,
                    // times: 1,
                    // is_Opt: 0,
                    // language: 'cn',
                    // umidServer: 'h',
                    // scene: '',
                    // is_tbLogin: 0,
                    // tb_errMsg: '',
                    // glog: 0.05,
                    // callback: function () {
                    // },
                    // error: function () {
                    // },
                    // verifycallback: function () {
                    // }
                    // };
                    // a.default_opt = o
                },
                {
                    // '../lib/tk': 2
                }
            ],
            7: [
                function (e, t, a)
                {
                    // 'use strict';
                    // t.exports = {
                    // init: 'init',
                    // ready: 'ready',
                    // slide_start: 'slide_start',
                    // slide_end: 'slide_end',
                    // before_code: 'before_code',
                    // after_code: 'after_code',
                    // error300: 'error300',
                    // fail: 'fail',
                    // success: 'success'
                    // }
                },
                {
                }
            ],
            8: [
                function (e, t, a)
                {
                    // 'use strict';
                    // function n(e, t, a) {
                    // var n = o.obj2param({
                    // appkey: encodeURIComponent(e),
                    // token: encodeURIComponent(t),
                    // flag: a
                    // });
                    // o.send(i + '?cache=' + Math.random() + '&gmkey=evt&gokey=' + encodeURIComponent(n))
                    // }
                    // var o = e('./util'),
                    // i = '//gm.mmstat.com/aq.1.1.3';
                    // a.log = n
                },
                {
                    './util': 19
                }
            ],
            9: [
                function (e, t, a)
                {
                    // function n(e, t, a, n) {
                    // var i;
                    // for (i in n) n.hasOwnProperty(i) && (a[i] = n[i]);
                    // var c = a[t];
                    // if (c) {
                    // e.opt.language = t;
                    // var l,
                    // d = e.opt.renderTo;
                    // d && (l = r.getElementById(d)) && (s.addClass(l, 'nc-lang-' + t), o(l, c))
                    // }
                    // }
                    // function o(e, t) {
                    // var a,
                    // n,
                    // o,
                    // i,
                    // r = e.getElementsByTagName('*'),
                    // c = 'data-nc-lang';
                    // for (a = 0; a < r.length; a++) n = r[a],
                    // o = n.getAttribute(c),
                    // o && (i = t[o]) && i && !function (e, t) {
                    // setTimeout(function () {
                    // e.innerHTML = t.replace(/^\s*<span[^>]*?>|<\/span>\s*$/g, '')
                    // }, 1)
                    // }(n, i)
                    // }
                    // function i(e, t, a) {
                    // window.nc_ex_lang = function (o) {
                    // n(e, t, a, o)
                    // };
                    // var o = 'script',
                    // i = r.createElement(o);
                    // i.charset = 'utf-8',
                    // i.src = c;
                    // var s = r.getElementsByTagName(o) [0];
                    // s.parentNode.insertBefore(i, s)
                    // }
                    // var r = document,
                    // c = '//g.alicdn.com/sd/ncpc/lang-ex.js?t=' + Math.floor((new Date).getTime() / 84600000),
                    // s = e('./util');
                    // a.loadExLang = i
                },
                {
                    // './util': 19
                }
            ],
            10: [
                function (e, t, a)
                {
                    // var n = {
                    // cn: {
                    // placeholder: '请输入验证码',
                    // audioText: '获取语音验证码',
                    // imgText: '获取图片验证码',
                    // refresh: '重新获取验证码',
                    // codeError: '验证码错误，即将播放下一段',
                    // clickPlay: '点击播放语音',
                    // audioTips: '请仔细收听'
                    // },
                    // en: {
                    // placeholder: 'enter the code',
                    // audioText: 'retrieve pass code from the audio',
                    // imgText: 'retrieve pass code from the image',
                    // refresh: 'retrieve pass code again',
                    // codeError: 'Incorrect pass code, please try again',
                    // clickPlay: 'click to play the audio',
                    // audioTips: 'please listen carefully'
                    // }
                    // };
                    // a.language = n
                },
                {
                }
            ],
            11: [
                function (e, t, a)
                {
                    function n(e, t)
                    {
                        // var a,
                        // n,
                        // i = t ? {
                        // }
                        // : e;
                        // for (a in e) e.hasOwnProperty(a) && (n = e[a], 'string' == typeof n && (n = [
                        // n
                        // ]), i[a] = '<span class="nc-lang-cnt" data-nc-lang="' + a + '">' + o(p[a], n) + '</span>');
                        // return i
                    }
                    function o(e, t)
                    {
                        // return (e + '').replace(/\\?\{\s*([^{}\s]+)\s*\}/g, function (e, a) {
                        // return '\\' === e.charAt(0) ? e.slice(1)  : t[a] || ''
                        // })
                    }
                    function i(e, t)
                    {
                        // var a,
                        // o = g[e] = g[e] || {
                        // };
                        // t = n(t, !0);
                        // for (a in t) t.hasOwnProperty(a) && (o[a] = t[a])
                    }
                    var r,
                    // c = 'javascript:__nc.reset()',
                    // s = 'http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN',
                    // l = 'http://survey.taobao.com/survey/40BtED_K?token=%TOKEN',
                    // d = 'http://survey.taobao.com/survey/Q0dcgfAv?token=%TOKEN',
                    // u = '{0}',
                    // p = {
                        // _startTEXT: u,
                        // _yesTEXT: '<b>{0}</b>',
                        // _noTEXT: u,
                        // _errorTEXT: u,
                        // _errorClickTEXT: u,
                        // _errorLOADING: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                        // _errorTooMuch: '{0}<a target="_blank" href="{1}">{2}</a>',
                        // _errorTooMuchClick: '{0}<a target="_blank" href="{1}">{2}</a>',
                        // _Loading: '<b>{0}</b>',
                        // _errorServer: u,
                        // _error300: '{0}<a href="{1}">{2}</a>{3}',
                        // _errorNetwork: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                        // _infoTEXT: u,
                        // _submit: u,
                        // _learning: u,
                        // _closeHelp: u,
                        // _slideToVerify: u,
                        // _notVerified: u,
                        // _captcha: u,
                        // _OK: u,
                        // _sthWrong: u,
                        // _reload: u,
                        // _feedback: u
                    // },
                    g = {
                        cn: {
                            // _startTEXT: '请按住滑块，拖动到最右边',
                            // _yesTEXT: '验证通过',
                            // _noTEXT: '请在下方输入验证码',
                            // _errorTEXT: '验证码输入错误，请重新输入',
                            // _errorClickTEXT: '验证码点击错误，请重试',
                            // _errorLOADING: [
                            // '加载失败，请',
                            // c,
                            // '点击刷新',
                            // '，或',
                            // s,
                            // '提交反馈'
                            // ],
                            // _errorTooMuch: [
                            // '输入错误，请重新输入，或',
                            // s,
                            // '提交反馈'
                            // ],
                            // _errorTooMuchClick: [
                            // '点击错误，请重新输入，或',
                            // s,
                            // '提交反馈'
                            // ],
                            // _Loading: '加载中',
                            // _errorServer: '服务器错误或者超时',
                            // _error300: [
                            // '哎呀，出错了，点击',
                            // c,
                            // '刷新',
                            // '再来一次'
                            // ],
                            // _errorNetwork: [
                            // '网络不给力，请',
                            // c,
                            // '点击刷新',
                            // '，或',
                            // s,
                            // '提交反馈'
                            // ],
                            // _infoTEXT: '',
                            // _submit: '提交',
                            // _learning: '了解新功能',
                            // _closeHelp: '关闭帮助',
                            // _slideToVerify: '向右滑动验证',
                            // _notVerified: '验证未通过',
                            // _captcha: '验证码',
                            // _OK: '确定',
                            // _sthWrong: '非常抱歉，这出错了...',
                            // _reload: '刷新',
                            // _feedback: '反馈'
                        },
                        tw: {
                            // _startTEXT: '請按住滑塊，拖動到最右邊',
                            // _yesTEXT: '驗證通過',
                            // _noTEXT: '請在下方輸入驗證碼',
                            // _errorTEXT: '驗證碼輸入錯誤，請重新輸入',
                            // _errorClickTEXT: '驗證碼點擊錯誤，請重試',
                            // _errorLOADING: [
                            // '加載失敗，請',
                            // c,
                            // '點擊刷新',
                            // '，或',
                            // s,
                            // '提交反饋'
                            // ],
                            // _errorTooMuch: [
                            // '輸入錯誤，請重新輸入，或',
                            // l,
                            // '提交反饋'
                            // ],
                            // _errorTooMuchClick: [
                            // '點擊錯誤，請重新輸入，或',
                            // l,
                            // '提交反饋'
                            // ],
                            // _Loading: '加載中',
                            // _errorServer: '服務器錯誤或者超時',
                            // _error300: [
                            // '哎呀，出錯了，點擊',
                            // c,
                            // '刷新',
                            // '再來壹次'
                            // ],
                            // _errorNetwork: [
                            // '網絡不給力，請',
                            // c,
                            // '點擊刷新',
                            // '，或',
                            // l,
                            // '提交反饋'
                            // ],
                            // _infoTEXT: '',
                            // _submit: '提交',
                            // _learning: '了解新功能',
                            // _closeHelp: '关闭帮助',
                            // _slideToVerify: '向右滑動驗證',
                            // _notVerified: '驗證未通過',
                            // _captcha: '驗證碼',
                            // _OK: '確定',
                            // _sthWrong: '非常抱歉，這出錯了...',
                            // _reload: '刷新',
                            // _feedback: '反饋'
                        },
                        en: {
                            // _startTEXT: 'Please slide to verify',
                            // _yesTEXT: 'Verified',
                            // _noTEXT: 'Please input verification code',
                            // _errorTEXT: 'Please try again',
                            // _errorClickTEXT: 'Please try again',
                            // _errorLOADING: [
                            // 'Loading failed, ',
                            // c,
                            // 'refresh',
                            // ' or ',
                            // d,
                            // 'provide feedback'
                            // ],
                            // _errorTooMuch: [
                            // 'Please try again or ',
                            // d,
                            // 'provide feedback'
                            // ],
                            // _errorTooMuchClick: [
                            // 'Please try again or ',
                            // d,
                            // 'provide feedback'
                            // ],
                            // _errorServer: 'Server Error',
                            // _Loading: 'Loading',
                            // _error300: [
                            // 'Oops... something\'s wrong. Please ',
                            // c,
                            // 'refresh',
                            // ' and try again.'
                            // ],
                            // _errorNetwork: [
                            // 'Net Err. Please ',
                            // c,
                            // 'refresh',
                            // ', or ',
                            // d,
                            // 'feedback'
                            // ],
                            // _infoTEXT: '',
                            // _submit: 'Submit',
                            // _learning: 'help',
                            // _closeHelp: 'Close',
                            // _slideToVerify: 'slide to verify',
                            // _notVerified: 'Not Verified',
                            // _captcha: 'Captcha',
                            // _OK: 'OK',
                            // _sthWrong: 'Sorry, something wrong....',
                            // _reload: 'Reload',
                            // _feedback: 'Feedback'
                        }
                    };
                    for (r in g) g.hasOwnProperty(r) && n(g[r]);
                    g.zh_CN = g.cn,
                    g.zh_TW = g.tw,
                    g.en_US = g.en,
                    a.language = g,
                    a.upLang = i
                },
                {
                }
            ],
            12: [
                function (require, module, exports)
                {
                    function report(e)
                    {
                        // win.console && void 0;
                        // var t = '//gm.mmstat.com/jstracker.2',
                        // a = util.obj2param({
                        // type: '9',
                        // id: 'jstracker',
                        // v: '1',
                        // nick: '',
                        // islogin: '',
                        // msg: e,
                        // file: '',
                        // ua: '',
                        // line: '',
                        // scrolltop: '',
                        // screen: '',
                        // t: + new Date
                        // });
                        // util.send(t + '?' + a)
                    }
                    function makeNoCaptcha(module_nc, opt, inn_vars, nc_events)
                    {
                        function showError(e)
                        {
                            // var t;
                            // t = e ? language[opt.language]._errorNetwork : language[opt.language]._errorLOADING,
                            // t = t.replace('%TOKEN', opt.token),
                            // _.id(opt.renderTo).innerHTML = '<div class="errloading">' + t + '</div>',
                            // inn_vars.el_render_to && util.removeClass(inn_vars.el_render_to, 'show-click-captcha')
                        }
                        function getOffset(e)
                        {
                            // var t = e.target;
                            // void 0 === t.offsetLeft && (t = t.parentNode);
                            // var a = getPageCoord(t),
                            // n = {
                            // x: win.pageXOffset + e.clientX,
                            // y: win.pageYOffset + e.clientY
                            // };
                            // return {
                            // offsetX: n.x - a.x,
                            // offsetY: n.y - a.y
                            // }
                        }
                        function getPageCoord(e)
                        {
                            // for (var t = {
                            // x: 0,
                            // y: 0
                            // }; e; ) t.x += e.offsetLeft,
                            // t.y += e.offsetTop,
                            // e = e.offsetParent;
                            // return t
                        }
                        function onNCEvent(e)
                        {
                            // var t = {
                            // };
                            // t[event_names.init] = 1,
                            // t[event_names.ready] = 1,
                            // t[event_names.slide_start] = 1,
                            // t[event_names.slide_end] = 1,
                            // t[event_names.fail] = 1;
                            // var a = opt.glog;
                            // 'boolean' != typeof _b_glog && (_b_glog = a && 'number' == typeof a && Math.random() < a),
                            // _b_glog && t[e] && glog.log(opt.appkey, opt.token, e);
                            // var n = nc_events[e];
                            // if (n && n.length) {
                            // var o,
                            // i = [
                            // ];
                            // for (o = 1; o < arguments.length; o++) i.push(arguments[o]);
                            // for (o = 0; o < n.length; o++) n[o].apply(null, i)
                            // }
                        }
                        function NoCaptcha()
                        {
                        }
                        var _ = new BaseFun(opt, util.obj2param),
                        showHelp = makeShowHelp(opt, _),
                        Scale = makeScale(opt, _, inn_vars, onNCEvent);
                        return NoCaptcha.prototype = {
                            init: function (e)
                            {
                                win.__nc = this,
                                module_nc.nc = this,
                                this.on = module_nc.on;
                                var t = 'en';
                                e.foreign && (default_opt.language = t),
                                _.objUpdate(opt, default_opt),
                                _.objUpdate(opt, e),
                                this.opt = opt,
                                language[opt.language] || (loadExLang(this, opt.language, language), opt.language = t),
                                inn_vars.render_to = opt.renderTo,
                                inn_vars.render_to && (inn_vars.el_render_to = _.id(inn_vars.render_to)),
                                inn_vars.el_render_to && util.addClass(inn_vars.el_render_to, 'nc-container'),
                                this.updateWidth(opt.customWidth),
                                opt.is_tbLogin && (tb_login = require('./tb_login')),
                                ajaxURL = URL_MAP[opt.foreign] || URL_MAP[0],
                                ajaxURL.uab_Url = opt.uaUrl || ajaxURL.uab_Url;
                                var a;
                                opt.renderTo && opt.appkey && opt.token && (a = _.id(opt.renderTo), a && (a.innerHTML = '<div id="nocaptcha"><div id="_n1t_loading" class="nc_scale"><div id="_bg" class=" " style="width: 0;"></div><div id="_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + '</div></div></div>'), 'undefined' == typeof win.acjs ? this.inituab() : (UA_Opt.LogVal = '_n', this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ':' + opt.token, UA_Opt.reload && UA_Opt.reload()), this.afterUA()),
                                onNCEvent(event_names.init)
                            },
                            updateWidth: function (e, t)
                            {
                                // if (e) {
                                // var a,
                                // n,
                                // o = typeof e;
                                // 'number' == o ? a = e : n = 'string' == o ? _.id(e)  : e,
                                // n && (a = n.offsetWidth),
                                // a && (this.c_width = a, this.__is_c_width_setted = 1, this.try2setWidth('_n1t'), this.updateCSS(a, t))
                                // }
                            },
                            updateCSS: function (e, t)
                            {
                                // var a = util.isIEX(6),
                                // n = util.isIEX(7),
                                // o = a || n ? ' !important' : '';
                                // css.insertCSS((t ? '' : '.nc-container .nc_scale,.nc-container.tb-login .nc_scale{width:' + e + 'px}\n') + ['.nc-container #imgCaptcha',
                                // '.nc-container #clickCaptcha'].join(',') + '{width:' + (e - 2) + 'px' + o + ';}\n' + ['.nc-container.tb-login #imgCaptcha',
                                // '.nc-container.tb-login #clickCaptcha'].join(',') + '{width:' + e + 'px' + o + ';}\n' + ['.nc-container.tb-login #imgCaptcha .captcha-error',
                                // '.nc-container.tb-login #clickCaptcha .captcha-error'].join(',') + '{width:' + (e - 8) + 'px' + o + ';}\n.nc-container.tb-login .errloading, .nc-container .errloading {width:' + (e - 10) + 'px;}')
                            },
                            try2setWidth: function (e, t)
                            {
                                // 'string' == typeof e && (e = _.id(e)),
                                // t = t || this.c_width || (inn_vars.el_render_to ? inn_vars.el_render_to.offsetWidth : 0),
                                // t && e && e.style && (e.style.width = t + 'px')
                            },
                            inituab: function ()
                            {
                                UA_Opt.LogVal = '_n',
                                this.initUaParam(),
                                UA_Opt.Token = (new Date).getTime() + ':' + opt.token,
                                _.loadjs(util.addHourStamp(ajaxURL.uab_Url), function ()
                                {
                                    try
                                    {
                                        UA_Opt.reload()
                                    } catch (e)
                                    {
                                        report('uab die')
                                    }
                                })
                            },
                            initUaParam: function ()
                            {
                                function e(e, t)
                                {
                                    UA_Opt[e] = 'undefined' != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
                                }
                                opt.is_Opt ? (e('MPInterval', 4), e('MaxMCLog', 12), e('MaxKSLog', 14), e('MaxMPLog', 5), e('MaxFocusLog', 6), e('SendInterval', 5), e('SendMethod', 8), e('GPInterval', 50), e('MaxGPLog', 1), e('MaxTCLog', 12), e('Flag', 882894)) : (UA_Opt.SendInterval = 5, UA_Opt.SendMethod = 8, UA_Opt.MaxMCLog = 12, UA_Opt.MaxKSLog = 14, UA_Opt.MaxMPLog = 5, UA_Opt.MaxGPLog = 1, UA_Opt.MaxTCLog = 12, UA_Opt.GPInterval = 50, UA_Opt.MPInterval = 4, UA_Opt.MaxFocusLog = 6, UA_Opt.isSendError = 1, UA_Opt.Flag = 882894)
                            },
                            afterUA: function ()
                            {
                                // 'undefined' == typeof umx ? this.initUM()  : this.afterUM()
                            },
                            initUM: function ()
                            {
                                // var e = this;
                                // _.loadjs(ajaxURL.umid_Url, function (t) {
                                // try {
                                // if (t) {
                                // if (--default_opt.times > 0) return void setTimeout(function () {
                                // e.initUM()
                                // }, 500);
                                // report('initUM')
                                // }
                                // var a = document.getElementById('_umfp'),
                                // n = (new Date).getTime();
                                // umx.init({
                                // timeout: opt.timeout,
                                // timestamp: n,
                                // token: opt.token,
                                // serviceUrl: ajaxURL.umid_serUrl,
                                // appName: opt.appkey,
                                // containers: {
                                // flash: a,
                                // dcp: a
                                // }
                                // })
                                // } catch (o) {
                                // report('umx die')
                                // }
                                // e.afterUM()
                                // })
                            },
                            afterUM: function ()
                            {
                                // function e() {
                                // (umx.getStatus() && win.__acjs || a++ > 50) && (t.reload(), clearInterval(n))
                                // }
                                // if (!win.__nc_afterUM) {
                                // win.__nc_afterUM = !0;
                                // var t = this;
                                // if ('undefined' == typeof umx) return report('afterUM'),
                                // void t.reload();
                                // var a = 0,
                                // n = setInterval(e, 100);
                                // e(),
                                // onNCEvent(event_names.ready)
                                // }
                            },
                            __reload_voicebtn: function ()
                            {
                                // var e,
                                // t = _.id('_voicebtn');
                                // t.onclick = function () {
                                // var t = _.id('_nc_voice');
                                // return _.id('imgCaptcha').style.display = 'none',
                                // e ? (e = !1, t.style.display = 'none', void (objCheckCode && objCheckCode.stopAudio()))  : (e = !0, t.style.display = 'block', objCheckCode && (objCheckCode.resetPlayer({
                                // state: 'end'
                                // }), objCheckCode.switchCode({
                                // type: 'audio'
                                // })), void _.jsonp({
                                // url: ajaxURL.analyze,
                                // callback: 'callback',
                                // data: {
                                // a: opt.appkey,
                                // t: opt.token,
                                // n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : '') || '',
                                // _a: 'audio',
                                // p: '{}',
                                // lang: opt.language,
                                // v: inn_vars.v
                                // },
                                // success: function (a) {
                                // if (e) {
                                // var n = a.result;
                                // n && (objCheckCode || (objCheckCode = new clsCheckCode({
                                // type: '150_40',
                                // identity: 'REGISTER',
                                // sessionid: n.csessionid,
                                // element: t,
                                // codeType: 'audio',
                                // lang: opt.language
                                // }), objCheckCode.check(function (e) {
                                // 'success' != e.message && (objCheckCode.playErrAudio(), setTimeout(function () {
                                // _.id('omeo-refresh-audio').click()
                                // }, 5000)),
                                // 'success' == e.message && _.jsonp({
                                // url: ajaxURL.checkcode,
                                // callback: 'callback',
                                // data: {
                                // csessionid: n.csessionid,
                                // checkcode: function () {
                                // var e = {
                                // };
                                // return e.code = objCheckCode.cache.lastCheckCode,
                                // _.obj2str(e)
                                // }(),
                                // a: opt.appkey,
                                // t: opt.token,
                                // n: win._n || '',
                                // p: '{}',
                                // r: Math.random(),
                                // lang: opt.language,
                                // v: inn_vars.v
                                // },
                                // success: function (e) {
                                // if (e.success) if (100 == e.result.code) __nc.userCallback(objCheckCode.config.sessionid, e.result.value, e.result.sig);
                                // else if (900 == e.result.code) {
                                // UA_Opt.reload && UA_Opt.reload();
                                // var t = _.id('_captcha_text'),
                                // a = language[opt.language]._errorClickTEXT;
                                // ++gErrTimes > MAX_ERR_TIME && (a = language[opt.language]._errorTooMuch.replace('%TOKEN', opt.token)),
                                // t.innerHTML = a,
                                // t.style.visibility = 'visible'
                                // } else (300 == e.result.code || 69634 == e.result.code) && (report('block'), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + '</div>', onNCEvent(event_names.error300));
                                // else __nc.errorCallback()
                                // },
                                // fail: function (e) {
                                // __nc.errorCallback(e)
                                // }
                                // })
                                // }), objCheckCode.render(), objCheckCode.switchCode({
                                // type: 'audio'
                                // })))
                                // }
                                // },
                                // fail: function () {
                                // e && report('audio fail')
                                // }
                                // }))
                                // }
                            },
                            reload: function ()
                            {
                                // var e = _.id(opt.renderTo);
                                // e && (e.innerHTML = tpl),
                                // opt.audio && (_.id('_voicebtn').style.display = 'block'),
                                // tb_login && tb_login.init(inn_vars.render_to, inn_vars.el_render_to, opt.customFloatHeight),
                                // this.__reload_voicebtn();
                                // var t = _.id('_helpbtn');
                                // t && (navigator.userAgent.indexOf('MSIE 6.0') >= 0 && (t.style.display = 'none'), t.innerHTML = language[opt.language]._learning, t.onclick = function () {
                                // setTimeout(showHelp, 100)
                                // }),
                                // TEXTELEM = _.tag(scale_bar + ' div') [1],
                                // inn_vars.TEXTELEM = TEXTELEM,
                                // opt.isEnabled && new Scale(scale_btn, scale_bar, this)
                            },
                            reset: function ()
                            {
                                // win.__nc_afterUM = !1,
                                // win.UA_Opt && (UA_Opt.Token = (new Date).getTime() + ':' + opt.token),
                                // opt.renderTo && opt.appkey && opt.token && (_.id(opt.renderTo).innerHTML = '<div id="nocaptcha"><div id="_n1t_loading" class="nc_scale"><div id="_bg" class=" " style="width: 0;"></div><div id="_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + '</div></div></div>', 'undefined' == typeof win.acjs ? this.loaduab()  : (UA_Opt.LogVal = '_n', this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ':' + opt.token, UA_Opt.reload && UA_Opt.reload()), this.afterUA())
                            },
                            show: function ()
                            {
                                // inn_vars.el_render_to && (inn_vars.el_render_to.style.display = 'block', tb_login && tb_login.adjustPosition(opt.customFloatHeight), __nc.is_show = !0)
                            },
                            hide: function ()
                            {
                                // inn_vars.el_render_to && (inn_vars.el_render_to.style.display = 'none', __nc.is_show = !1)
                            },
                            loaduab: function ()
                            {
                                // UA_Opt.LogVal = '_n',
                                // this.initUaParam(),
                                // UA_Opt.Token = (new Date).getTime() + ':' + opt.token,
                                // _.loadjs(util.addHourStamp(ajaxURL.uab_Url), function (e) {
                                // e && report('loaduab'),
                                // UA_Opt.reload && UA_Opt.reload()
                                // })
                            },
                            enabled: function ()
                            {
                                // return new Scale(scale_btn, scale_bar, this)
                            },
                            errorCallback: function (e)
                            {
                                // var t = _.id(scale_bar),
                                // a = this,
                                // n = t.getElementsByTagName('span'),
                                // o = t.getElementsByTagName('div');
                                // if (onNCEvent(event_names.fail), 0 !== n.length && 0 !== o.length) {
                                // var i = n[0],
                                // r = o[0];
                                // showError(e),
                                // util.addClass(r, 'orange'),
                                // util.addClass(i, 'reload'),
                                // _.addHandler(t, 'click', function () {
                                // UA_Opt.Token = (new Date).getTime() + ':' + opt.token,
                                // UA_Opt.reload && UA_Opt.reload(),
                                // a.reload(),
                                // _.removeEvt(t, 'click')
                                // }),
                                // e && opt.error && opt.error(language[opt.language]._errorServer)
                                // }
                            },
                            onScaleReady: function (elem)
                            {
                                // var trans = opt.trans || {
                                // };
                                // 'string' == typeof trans && (trans = eval('0,' + trans));
                                // for (var arr = opt.elementID || [], i = 0; i < arr.length; i++) {
                                // var id = arr[i],
                                // el = doc.getElementById(id);
                                // el && (trans[id] = el.value)
                                // }
                                // var me = this;
                                // TEXTELEM.innerHTML = language[opt.language]._Loading,
                                // util.addClass(TEXTELEM, 'scale_text2'),
                                // _.jsonp({
                                // url: ajaxURL.analyze,
                                // callback: 'callback',
                                // data: {
                                // a: opt.appkey,
                                // t: opt.token,
                                // n: win[UA_Opt.LogVal || '_n'] || '',
                                // p: _.obj2str(trans),
                                // scene: opt.scene || (inn_vars.has_pointman ? pointman.config.common.scene : '') || '',
                                // asyn: 0,
                                // lang: opt.language,
                                // v: inn_vars.v
                                // },
                                // success: function (e) {
                                // me.onScaleReadyCallback(e, elem)
                                // },
                                // fail: function (e) {
                                // report('onScaleReady'),
                                // me.errorCallback(e)
                                // }
                                // })
                            },
                            onScaleReadyCallback: function (e, t)
                            {
                                // if (e.success) {
                                // var a = e.result,
                                // n = a.code;
                                // 0 === n ? (_.id(scale_btn).className = 'btnok', TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(t.btn.parentNode, 'nc_err'), this.userCallback(a.csessionid, 'pass', a.value))  : (UA_Opt.reload && (UA_Opt.Token = (new Date).getTime() + ':' + opt.token, UA_Opt.reload && UA_Opt.reload()), util.addClass(t.btn, 'btnok2'), util.addClass(t.btn.parentNode, 'nc_err'), t.bar = _.tag(scale_bar + ' div') [0], TEXTELEM.innerHTML = language[opt.language]._Loading, 'function' == typeof opt.verifycallback && 300 != n && opt.verifycallback(a), 100 == n ? this.onScale100(a.csessionid, a.value)  : 200 == n ? this.onScale200(a.csessionid, a.value)  : (300 == n || 69634 == n) && (report('block'), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + '</div>', onNCEvent(event_names.error300)))
                                // } else this.errorCallback()
                            },
                            onScale100: function (e, t, a)
                            {
                                // var n = arguments.callee,
                                // o = a || this,
                                // i = _.tag('clickCaptcha div');
                                // n.caller == this.onScaleReadyCallback && _.addHandler(_.id('_btn_2'), 'click', function () {
                                // n.call(o, e, t)
                                // });
                                // var r,
                                // c = setTimeout(function () {
                                // c = - 1,
                                // r || (showError(!0), report('captcha timeout'))
                                // }, 5000);
                                // onNCEvent(event_names.before_code),
                                // _.jsonp({
                                // url: ajaxURL.get_captcha,
                                // callback: 'callback',
                                // data: {
                                // sessionid: e,
                                // identity: opt.appkey,
                                // style: t,
                                // lang: opt.language,
                                // v: inn_vars.v
                                // },
                                // success: function (a) {
                                // if (a.questiontext && (a.questiontext = a.questiontext.replace(/<span[^>]+?>/g, '<i>'), a.questiontext = a.questiontext.replace(/<\/span[^>]*?>/g, '</i>')), r = !0, - 1 != c) {
                                // if (clearTimeout(c), !a.tag) return report('no tag'),
                                // void showError(!0);
                                // var s = _.id('clickCaptcha');
                                // s && (s.style.display = 'block', o.__is_c_width_setted || o.updateWidth(_.id('_n1t'), 1)),
                                // a.imgurl = a.imgurl.replace('pin.aliyun.com', 'pin2.aliyun.com'),
                                // inn_vars.el_render_to && util.addClass(inn_vars.el_render_to, 'show-click-captcha');
                                // var l = a.imgurl.split('?') [1].split('=') [1],
                                // d = a.questiontext.split(a.tag[0]),
                                // u = d.shift();
                                // _.id('_scale_text') && ( - 1 == a.questiontext.indexOf('<i>') ? _.id('_scale_text').innerHTML = u + '<i>“' + a.tag[0] + '”</i>' + d.join(a.tag[0])  : _.id('_scale_text').innerHTML = a.questiontext),
                                // tb_login && tb_login.getInform(_.id('clickCaptcha'), module_nc.nc),
                                // i[1].innerHTML = '<img src="' + a.imgurl + '" >';
                                // var p,
                                // g = i[1].getElementsByTagName('img') [0];
                                // g.onload = function () {
                                // p = !0,
                                // - 1 != h && clearTimeout(h)
                                // },
                                // g.onerror = function () {
                                // report('captcha onerror'),
                                // showError()
                                // };
                                // var h = setTimeout(function () {
                                // h = - 1,
                                // p || (showError(!0), report('captcha timeout'))
                                // }, 5000);
                                // _.addHandler(g, 'click', function (a) {
                                // TEXTELEM.innerHTML = language[opt.language]._Loading,
                                // _.jsonp({
                                // url: ajaxURL.checkcode,
                                // callback: 'callback',
                                // data: {
                                // csessionid: e,
                                // checkcode: function () {
                                // var e = {
                                // };
                                // return e.imgid = l,
                                // e.w = g.width.toString(),
                                // e.h = g.height.toString(),
                                // e.x = void 0 === a.offsetX ? getOffset(a).offsetX : a.offsetX,
                                // e.y = void 0 === a.offsetY ? getOffset(a).offsetY : a.offsetY,
                                // e.x = parseInt(e.x).toString(),
                                // e.y = parseInt(e.y).toString(),
                                // _.obj2str(e)
                                // }(),
                                // a: opt.appkey,
                                // t: opt.token,
                                // n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : '') || '',
                                // p: '{}',
                                // r: Math.random(),
                                // lang: opt.language,
                                // v: inn_vars.v
                                // },
                                // success: function (a) {
                                // var i = _.id(scale_btn);
                                // if (a.success) if (100 == a.result.code) i.className = 'btnok',
                                // _.tag(scale_bar + ' div') [0].className = '',
                                // TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                // util.removeClass(i.parentNode, 'nc_err'),
                                // _.toggle('clickCaptcha'),
                                // inn_vars.el_render_to && util.removeClass(inn_vars.el_render_to, 'show-click-captcha'),
                                // o.userCallback && o.userCallback(e, t, a.result.sig);
                                // else if (900 == a.result.code) {
                                // UA_Opt.reload && UA_Opt.reload(),
                                // n(e, t, o);
                                // var r = _.id('_captcha_text'),
                                // c = language[opt.language]._errorClickTEXT;
                                // ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuchClick.replace('%TOKEN', opt.token)),
                                // r.innerHTML = c,
                                // r.style.visibility = 'visible'
                                // } else (300 == a.result.code || 69634 == a.result.code) && (report('block'), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + '</div>', onNCEvent(event_names.error300));
                                // else o.errorCallback()
                                // },
                                // fail: function (e) {
                                // o.errorCallback(e)
                                // }
                                // })
                                // }),
                                // onNCEvent(event_names.after_code)
                                // }
                                // },
                                // fail: function () {
                                // _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._errorLOADING + '</div>',
                                // o.errorCallback(!0)
                                // }
                                // })
                            },
                            onScale200: function (e, t)
                            {
                                // function a() {
                                // var a = _.tag('imgCaptcha input') [0].value;
                                // a && _.jsonp({
                                // url: ajaxURL.checkcode,
                                // callback: 'callback',
                                // data: {
                                // csessionid: e,
                                // checkcode: function () {
                                // var e = {
                                // };
                                // return e.code = a,
                                // _.obj2str(e)
                                // }(),
                                // a: opt.appkey,
                                // t: opt.token,
                                // n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : '') || '',
                                // p: '{}',
                                // lang: opt.language,
                                // v: inn_vars.v
                                // },
                                // success: function (a) {
                                // if (a.success) {
                                // var n = _.id(scale_btn),
                                // r = _.tag('imgCaptcha div') [2];
                                // if (100 == a.result.code) n.className = 'btnok',
                                // _.tag(scale_bar + ' div') [0].className = '',
                                // TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                // util.removeClass(n.parentNode, 'nc_err'),
                                // r.style.borderTopColor = '#e5e5e5',
                                // _.toggle('imgCaptcha'),
                                // i.userCallback.call(this, e, t, a.result.sig);
                                // else if (900 == a.result.code) {
                                // UA_Opt.reload && UA_Opt.reload(),
                                // o.call(i, e, t);
                                // var c = language[opt.language]._errorTEXT;
                                // ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuch.replace('%TOKEN', opt.token));
                                // var s = _.id('_captcha_img_text');
                                // s.innerHTML = c,
                                // s.style.display = 'block',
                                // r.style.borderTopColor = 'red'
                                // } else (300 == a.result.code || 69634 == a.result.code) && (report('block'), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + '</div>', onNCEvent(event_names.error300))
                                // } else i.errorCallback()
                                // },
                                // fail: function (e) {
                                // i.errorCallback(e)
                                // }
                                // })
                                // }
                                // onNCEvent(event_names.before_code);
                                // var n = _.id('imgCaptcha');
                                // n && (n.style.display = 'block', this.__is_c_width_setted || this.updateWidth(_.id('_n1t'), 1));
                                // var o = arguments.callee,
                                // i = this,
                                // r = _.tag('imgCaptcha div'),
                                // c = ajaxURL.get_img + '?type=' + t + '&identity=' + opt.appkey + '&sessionid=' + e + '&r=' + Math.random();
                                // r[1].innerHTML = '<img src="' + c + '" >';
                                // var s = r[1].getElementsByTagName('img') [0];
                                // _.addHandler(s, 'click', function () {
                                // o.call(i, e, t)
                                // }),
                                // TEXTELEM.innerHTML = language[opt.language]._noTEXT,
                                // tb_login && tb_login.getInform(_.id('imgCaptcha'), module_nc.nc),
                                // _.id('scale_submit').innerHTML = language[opt.language]._submit;
                                // var l;
                                // arguments.callee.caller === this.onScaleReadyCallback && (_.addHandler(_.id('scale_submit'), 'click', a), _.addHandler(_.id('_btn_2'), 'click', function () {
                                // o.call(this, e, t)
                                // }), l = _.id('imgCaptcha'), l && (l = l.getElementsByTagName('input') [0]) && _.addHandler(l, 'keydown', function (e) {
                                // return e = e || window.event,
                                // 13 == e.keyCode || 13 == e.which ? (a(), e.preventDefault ? e.preventDefault()  : window.event.returnValue = !1, !1)  : void 0
                                // })),
                                // onNCEvent(event_names.after_code)
                            },
                            userCallback: function (e, t, a)
                            {
                                // var n = {
                                // csessionid: e || null,
                                // value: t || null,
                                // sig: a || null,
                                // token: opt.token || ''
                                // };
                                // opt.callback.call(this, n),
                                // onNCEvent(event_names.success, n)
                            },
                            upLang: function (e, t)
                            {
                                // return upLang(e, t)
                            }
                        },
                        NoCaptcha
                    }
                    var win = window,
                    doc = document,
                    tb_login,
                    util = require('./util'),
                    URL_MAP = require('./url_map').URL_MAP,
                    language = require('./language-core').language,
                    upLang = require('./language-core').upLang,
                    loadExLang = require('./lang_util').loadExLang,
                    tpl = require('./tpl').tpl,
                    m_checkcode = require('./checkcode'),
                    clsCheckCode = m_checkcode.init(),
                    makeShowHelp = require('./show_help').makeShowHelp,
                    makeScale = require('./scale').makeScale,
                    default_opt = require('./default_opt').default_opt,
                    BaseFun = require('./base_fn').BaseFun,
                    css = require('./css'),
                    glog = require('./glog'),
                    objCheckCode,
                    MAX_ERR_TIME = 3,
                    gErrTimes = 0,
                    scale_btn = '_n1z',
                    scale_bar = '_n1t',
                    TEXTELEM,
                    ajaxURL,
                    _b_glog,
                    event_names = require('./event_name');
                    exports.makeNoCaptcha = makeNoCaptcha
                },
                {
                    './base_fn': 3,
                    './checkcode': 4,
                    './css': 5,
                    './default_opt': 6,
                    './event_name': 7,
                    './glog': 8,
                    './lang_util': 9,
                    './language-core': 11,
                    './scale': 14,
                    './show_help': 15,
                    './tb_login': 16,
                    './tpl': 17,
                    './url_map': 18,
                    './util': 19
                }
            ],
            13: [
                function (e, t, a)
                {
                    // function n(e) {
                    // var t;
                    // e && (t = e.filename + '') && (t = t.split('?') [0], t.match(/(\/ncpc\/nc\.js$)|(\/uab\.js$)|(umscript.*\/um\.js$)/) && (i.console && void 0, o()))
                    // }
                    // function o(e) {
                    // 'function' == typeof ncDowngrade ? (ncDowngrade(), e && i.__nc && i.__nc.show())  : e || setTimeout(function () {
                    // o(1)
                    // }, 100)
                    // }
                    // var i = window;
                    // i.addEventListener ? i.addEventListener('error', n, !0)  : i.attachEvent && i.attachEvent('onerror', n)
                },
                {
                }
            ],
            14: [
                function (e, t, a)
                {
                    function n()
                    {
                        // var e = navigator.userAgent;
                        // return /Firefox|MSIE/.test(e) ? !1 : !0
                    }
                    function o(e, t, a, o)
                    {
                        function d(t, o, i)
                        {
                            // a.TEXTELEM && (a.TEXTELEM.innerHTML = s[e.language]._startTEXT, n() && c.addClass(a.TEXTELEM, 'slidetounlock')),
                            // this.btn = r.getElementById(t),
                            // this.bar = r.getElementById(o),
                            // this.txt = r.getElementById('_scale_text'),
                            // this.step = this.bar.getElementsByTagName('DIV') [0],
                            // this.init(i)
                        }
                        return d.prototype = {
                            init: function (e)
                            {
                                function a(a)
                                {
                                    function i()
                                    {
                                        // s.btn.onmousedown = null,
                                        // s.txt.onmousedown = null,
                                        // t.removeEvt(d, 'mousemove', r),
                                        // t.removeEvt(d, 'mouseup', g),
                                        // t.removeEvt(d, 'touchmove', h),
                                        // t.removeEvt(d, 'touchend', _),
                                        // t.removeEvt(s.btn, 'touchstart', n),
                                        // t.removeEvt(s.txt, 'touchstart', n);
                                        // var a = {
                                        // };
                                        // a.btn = s.btn,
                                        // a.bar = s.bar.childNodes[1],
                                        // e.onScaleReady(a),
                                        // o(l.slide_end)
                                    }
                                    function r(e)
                                    {
                                        // f || (o(l.slide_start), f = !0);
                                        // var t = (e || u.event).clientX,
                                        // a = p.min(y, p.max( - 2, b + (t - m)));
                                        // s.btn.style.left = a + 'px',
                                        // s.ondrag(p.round(100 * p.max(0, a / y)), a);
                                        // var n = T + s.bar.offsetWidth;
                                        // if (t >= n && (y > a || y > t - b)) return void g.call(this);
                                        // var r = c.getClientRect(s.btn).left;
                                        // (a == y || t - r - v == y) && i()
                                    }
                                    function g()
                                    {
                                        // var e = parseInt(s.btn.style.left);
                                        // y > e && (c.addClass(s.btn, 'button_move'), c.addClass(t.id('_bg'), 'bg_move'), s.btn.style.left = '0px', s.ondrag(0, 0), setTimeout(function () {
                                        // c.removeClass(s.btn, 'button_move'),
                                        // c.removeClass(t.id('_bg'), 'bg_move')
                                        // }, 500)),
                                        // t.removeEvt(this, 'touchmove', h),
                                        // t.removeEvt(d, 'touchmove', h),
                                        // t.removeEvt(d, 'mousemove', r),
                                        // t.removeEvt(d, 'mouseup', g)
                                    }
                                    function _(e)
                                    {
                                        // g.call(this, e.touches[0])
                                    }
                                    function h(e)
                                    {
                                        // e.preventDefault(),
                                        // r.call(this, e.touches[0])
                                    }
                                    // var f = !1,
                                    // m = (a || u.event).clientX,
                                    // v = s.btn.offsetWidth,
                                    // y = s.bar.offsetWidth - v,
                                    // b = s.btn.offsetLeft,
                                    // T = c.getClientRect(s.bar).left;
                                    // t.addHandler(d, 'mousemove', r),
                                    // t.addHandler(d, 'mouseup', g),
                                    // t.addHandler(d, 'touchmove', h),
                                    // t.addHandler(d, 'touchend', _)
                                }
                                function n(e)
                                {
                                    // e.preventDefault(),
                                    // a.call(this, e.touches[0])
                                }
                                // var s = this,
                                // d = r,
                                // u = i,
                                // p = Math;
                                // s.btn.onmousedown = a,
                                // s.txt.onmousedown = a,
                                // t.addHandler(s.btn, 'touchstart', n),
                                // t.addHandler(s.txt, 'touchstart', n),
                                // s.bar.onselectstart = function () {
                                // return !1
                                // }
                            },
                            ondrag: function (e, t)
                            {
                                // this.step.style.width = Math.max(0, t) + 'px'
                            },
                            text: function ()
                            {
                            }
                        },
                        d
                    }
                    var i = window,
                    r = document,
                    c = e('./util'),
                    s = e('./language-core').language,
                    l = e('./event_name');
                    a.makeScale = o
                },
                {
                    './event_name': 7,
                    './language-core': 11,
                    './util': 19
                }
            ],
            15: [
                function (e, t, a)
                {
                    function n(e, t)
                    {
                        function a()
                        {
                            // r || (r = n()),
                            // r()
                        }
                        function n()
                        {
                            function a()
                            {
                                // var e = o.createElement('div');
                                // return e.innerHTML = r,
                                // e.firstChild
                            }
                            function n()
                            {
                                // function a() {
                                // var t = 0,
                                // a = 260,
                                // n = setInterval(function () {
                                // t += 5,
                                // t > a ? (u.innerHTML = i[e.language]._Loading, t > a + 100 && (u.innerHTML = i[e.language]._yesTEXT, clearInterval(n), setTimeout(function () {
                                // p.click()
                                // }, 2000)))  : (g.style.left = s + 20 + t + 'px', d.style.left = t + 'px', u.style.width = t + 'px')
                                // }, 16)
                                // }
                                // u.innerHTML = '',
                                // c.style.display = 'block';
                                // var n = t.id(e.renderTo),
                                // r = n.getBoundingClientRect(),
                                // s = r.left,
                                // _ = r.top + 20 + o.body.scrollTop;
                                // l.style.left = s + 'px',
                                // l.style.top = _ + 'px',
                                // d.style.left = s - 10 + 'px',
                                // g.style.left = s + 20 + 'px',
                                // g.style.top = _ + 20 + 'px',
                                // p.style.left = s + 200 + 'px',
                                // p.style.top = _ + 90 + 'px',
                                // a()
                            }
                            // var r = '<div id="nc_help"><div class="mask"></div><div id="_slide_box" class="nc_scale"><div id="_slide_button"></div><div id="_slide_text" class="scale_text"></div><div id="_slide_bg"></div></div><div id="_btn_close"></div><div id="_hand"></div>',
                            // c = a(r);
                            // o.body.appendChild(c),
                            // c.style.display = 'none',
                            // c.style.width = o.body.scrollWidth + 'px',
                            // c.style.height = o.body.scrollHeight + 'px';
                            // var s = t.id('_slide_text');
                            // s.innerHTML = i[e.language]._startTEXT;
                            // var l = t.id('_slide_box'),
                            // d = t.id('_slide_button'),
                            // u = t.id('_slide_bg'),
                            // p = t.id('_btn_close'),
                            // g = t.id('_hand');
                            // return p.innerHTML = i[e.language]._closeHelp,
                            // p.onclick = function () {
                            // c.style.display = 'none'
                            // },
                            // n
                        }
                        // var r;
                        // return a
                    }
                    var o = document,
                    i = e('./language-core').language;
                    a.makeShowHelp = n
                },
                {
                    './language-core': 11
                }
            ],
            16: [
                function (e, t, a)
                {
                    function n(e)
                    {
                        // return h.getElementById(e)
                    }
                    function o(e)
                    {
                        // if (!e) return 0;
                        // for (var t = e.offsetTop, a = e.offsetParent; a; ) t += a.offsetTop,
                        // a = a.offsetParent;
                        // return t
                    }
                    function i(e, t)
                    {
                        // var a,
                        // n,
                        // o,
                        // i = e.getElementsByTagName('div');
                        // for (a = 0; a < i.length; a++) if (n = i[a], o = n.className, o && o.indexOf(t) > - 1) return n;
                        // return null
                    }
                    function r(e)
                    {
                        // var t = n('_scale_text'),
                        // a = i(e, 'captcha-error');
                        // a || (a = h.createElement('div'), a.className = 'captcha-error login-msg error', e.appendChild(a)),
                        // a.innerHTML = [
                        // '<i class=\'nc-iconfont\'>&#xe601;</i>',
                        // '<p class=\'error\'>',
                        // t.innerHTML,
                        // '</p>'
                        // ].join('')
                    }
                    function c(e, t)
                    {
                        // var a = e.className;
                        // a.match(new RegExp('(^|\\s)' + t + '(\\s|$)')) || (e.className = (e.className + ' ' + t).replace(/^\s+|\s+$/g, ''))
                    }
                    function s()
                    {
                        // var e = 0,
                        // t = n('J_Message');
                        // return t && (e = t.offsetHeight),
                        // e
                    }
                    function l()
                    {
                        // s() > 0 && _ && c(_, 'nc-tm-min-fix')
                    }
                    function d(e)
                    {
                        // if (_) {
                        // var t;
                        // m && (t = n('_btn_1')) && (t.style.position = 'absolute', t.style.top = '77px', t.style.right = '0');
                        // var a = _.className || '',
                        // i = 'tb-login';
                        // - 1 == a.indexOf(i) && (_.className = (a + ' ' + i).replace(/^\s+|\s+$/g, '')),
                        // _.className.match(/\bnc-old-login\b/) && (p = !0);
                        // var r;
                        // if (r = n('J_LoginBox') || n('J_Login') || f.getElementsByClassName('nc-outer-box') [0]) {
                        // var c = p ? 0 : 2,
                        // d = o(_),
                        // u = arguments.callee;
                        // if (0 >= d) {
                        // if (u._count > 100) return;
                        // return u._count = (u._count || 0) + 1,
                        // void setTimeout(u, 100)
                        // }
                        // var g,
                        // h,
                        // v = o(r) - d,
                        // y = r.getBoundingClientRect();
                        // 'number' == typeof e ? (g = e, h = 1)  : g = y.height ? y.height : y.bottom - y.top;
                        // var b,
                        // T;
                        // T = n('imgCaptcha'),
                        // T && (T.style.top = v + c + 'px', b = g - c - 66, h && (b -= 13), h || 0 !== s() || (T.style.minHeight = '290px', b -= 10), T.style.height = b + 'px', h && (T.style.minHeight = 0)),
                        // T = n('clickCaptcha'),
                        // T && (T.style.top = v + c + 'px', p ? (l(), b = g + 30, 255 > b && (b = 255), T.style.height = b + 'px')  : (l(), b = g - c - 30, h && (b -= 8), T.style.height = b + 'px'), h && (T.style.minHeight = 0))
                        // }
                        // }
                    }
                    function u(e, t, a)
                    {
                        // g = e,
                        // _ = t,
                        // d(a)
                    }
                    // var p,
                    // g,
                    // _,
                    // h = document,
                    // f = e('./util'),
                    // m = f.isIEX(6);
                    // a.init = u,
                    // a.adjustPosition = d,
                    // a.getInform = r
                },
                {
                    // './util': 19
                }
            ],
            17: [
                function (e, t, a)
                {
                    // var n = '<div id="_n1t" class="nc_scale"><div id="_bg"></div><span id="_n1z"></span><div id="_scale_text" class="scale_text"></div><div id="clickCaptcha"><div class="clickCaptcha_text"><b id="_captcha_text"></b><img id="_btn_2" src="//g.alicdn.com/sd/ncpc/images/btn2.png"></div><div class="clickCaptcha_img"></div><div class="clickCaptcha_btn"></div></div><div id="imgCaptcha"><div class="imgCaptcha_text"><input type="text" style="ime-mode:inactive"></div><div class="imgCaptcha_img" id="_imgCaptcha_img"></div><img id="_btn_1" src="//g.alicdn.com/sd/ncpc/images/btn2.png" onclick="document.getElementById(\'_imgCaptcha_img\').children[0].click()"><div class="imgCaptcha_btn"><div id="_captcha_img_text"></div><div id="scale_submit"></div></div></div><img id="_voicebtn" style="display:none" src="//g.alicdn.com/sd/ncpc/images/voice.png"><b id="_helpbtn"></b></div><div id="_nc_voice"></div>';
                    // a.tpl = n
                },
                {
                }
            ],
            18: [
                function (e, t, a)
                {
                    var n = {
                        0: {
                            analyze: '//cf.aliyun.com/nocaptcha/analyze.jsonp',
                            get_captcha: '//pin2.aliyun.com/get_captcha/ver3',
                            get_img: '//pin2.aliyun.com/get_img',
                            checkcode: '//cf.aliyun.com/captcha/checkcode.jsonp',
                            umid_Url: '//g.alicdn.com/security/umscript/3.2.1/um.js1',
                            uab_Url: '/scripts/uac.js',
                            umid_serUrl: 'https://ynuf.alipay.com/service/um.json'
                        },
                        1: {
                            analyze: '//cfus.aliyun.com/nocaptcha/analyze.jsonp',
                            get_captcha: '//captcha.alibaba.com/get_captcha/ver3',
                            get_img: '//captcha.alibaba.com/get_img',
                            checkcode: '//cfus.aliyun.com/captcha/checkcode.jsonp',
                            umid_Url: '//g.alicdn.com/security/umscript/3.2.1/um.js1',
                            uab_Url: '//aeu.alicdn.com/js/uab.js',
                            umid_serUrl: 'https://us.ynuf.alipay.com/service/um.json'
                        },
                        2: {
                            analyze: '//cfun.aliyun.com/nocaptcha/analyze.jsonp',
                            get_captcha: '//pin2.aliyun.com/get_captcha/ver3',
                            get_img: '//pin2.aliyun.com/get_img',
                            checkcode: '//cfun.aliyun.com/captcha/checkcode.jsonp',
                            umid_Url: '//g.alicdn.com/security/umscript/3.2.1/um.js1',
                            uab_Url: '//aeu.alicdn.com/js/uab.js',
                            umid_serUrl: 'https://ynuf.alipay.com/service/um.json'
                        }
                    };
                    a.URL_MAP = n
                },
                {
                }
            ],
            19: [
                function (e, t, a)
                {
                    function n(e)
                    {
                        // return ((e || '') + Math.random()).replace('.', '')
                    }
                    function o(e, t)
                    {
                        // var a = e.className || '';
                        // a.match(new RegExp('(^|\\s)' + t + '(\\s|$)')) || (e.className = (a + ' ' + t).replace(/^\s+|\s+$/g, ''))
                    }
                    function i(e, t)
                    {
                        // var a = e.className || '',
                        // n = a.replace(new RegExp('(^|\\s)' + t + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
                        // n != a && (e.className = n)
                    }
                    function r(e, t, a)
                    {
                        // if (h.getElementsByClassName) return h.getElementsByClassName(e);
                        // t = t || h,
                        // a = a || '*';
                        // var n = [
                        // ],
                        // o = '*' === a && t.all ? t.all : t.getElementsByTagName(a),
                        // i = o.length;
                        // e = e.replace(/\-/g, '\\-');
                        // for (var r = new RegExp('(^|\\s)' + e + '(\\s|$)'); --i >= 0; ) r.test(o[i].className) && n.push(o[i]);
                        // return n
                    }
                    function c(e, t, a)
                    {
                        // a = a || 7;
                        // var n = new Date;
                        // n.setTime(n.getTime() + 86400000 * a),
                        // document.cookie = [
                        // encodeURIComponent(e),
                        // '=',
                        // encodeURIComponent('' + t),
                        // ';expires=',
                        // n.toGMTString()
                        // ].join('')
                    }
                    function s(e)
                    {
                        // var t = window,
                        // a = n('_nc_r_'),
                        // o = t[a] = new Image;
                        // o.onload = o.onerror = function () {
                        // t[a] = null
                        // },
                        // o.src = e
                    }
                    function l(e)
                    {
                        // var t = [
                        // ];
                        // for (var a in e) e.hasOwnProperty(a) && t.push(encodeURIComponent(a) + '=' + encodeURIComponent(e[a]));
                        // return t.join('&')
                    }
                    function d(e, t)
                    {
                        var a = Math.floor((new Date).getTime() / (3600000 * (t || 2))),
                        n = -1 === e.indexOf('?') ? '?' : '&';
                        return e + n + '_t=' + a
                    }
                    function u(e)
                    {
                        // if (e in f) return f[e];
                        // var t = h.createElement('b');
                        // return t.innerHTML = '<!--[if IE ' + e + ']><i></i><![endif]-->',
                        // f[e] = 1 === t.getElementsByTagName('i').length
                    }
                    function p(e)
                    {
                        // for (var t = e.offsetLeft, a = e.offsetParent; null !== a; ) t += a.offsetLeft,
                        // a = a.offsetParent;
                        // return t
                    }
                    function g(e)
                    {
                        // for (var t = e.offsetTop, a = e.offsetParent; null !== a; ) t += a.offsetTop,
                        // a = a.offsetParent;
                        // return t
                    }
                    function _(e)
                    {
                        // var t = h.documentElement.scrollTop,
                        // a = h.documentElement.scrollLeft;
                        // if (e.getBoundingClientRect) {
                        // var n = e.getBoundingClientRect();
                        // return {
                        // left: n.left - a,
                        // right: n.right - a,
                        // top: n.top - t,
                        // bottom: n.bottom - t
                        // }
                        // }
                        // var o = p(e),
                        // i = g(e);
                        // return {
                        // left: o,
                        // right: o + e.offsetWidth,
                        // top: i,
                        // bottom: i + e.offsetHeight
                        // }
                    }
                    // var h = document,
                    // f = {
                    // };
                    t.exports = {
                        rndId: n,
                        addClass: o,
                        removeClass: i,
                        getElementsByClassName: r,
                        send: s,
                        obj2param: l,
                        isIEX: u,
                        addHourStamp: d,
                        setCookie: c,
                        getClientRect: _
                    }
                },
                {
                }
            ],
            20: [
                function (e, t, a)
                {
                    // a.v = 12
                },
                {
                }
            ]
        },
            {
            },
            [
                1
            ])
    };
    //chkQuerySet(),
    cond() > GREY_RATIO ? STABLE_ACTION() : NEW_ACTION()
}();
