/*
* Kendo UI Core v2015.1.408 (http://www.telerik.com/kendo-ui)
* Copyright 2015 Telerik AD. All rights reserved.
*
* The use of Kendo UI mobile widgets in Telerik AppBuilder is governed by the Telerik End User License Agreement for Telerik AppBuilder at
* http://www.telerik.com/license-agreement/appbuilder
*/
(function(f, define) {
    define([], f)
})(function() {
    !function(e, t, n) {
        function i() {}
        function o(e, t) {
            if (t)
                return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
            var n = e.charAt(0)
              , i = e.substring(1);
            return "=" === n ? "+(" + i + ")+" : ":" === n ? "+$kendoHtmlEncode(" + i + ")+" : ";" + e + ";$kendoOutput+="
        }
        function r(e, t, n) {
            return e += "",
            t = t || 2,
            n = t - e.length,
            n ? H[t].substring(0, n) + e : e
        }
        function a(e) {
            var t = e.css(gt.support.transitions.css + "box-shadow") || e.css("box-shadow")
              , n = t ? t.match(Tt) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0]
              , i = bt.max(+n[3], +(n[4] || 0));
            return {
                left: -n[1] + i,
                right: +n[1] + i,
                bottom: +n[2] + i
            }
        }
        function s(t, n) {
            var i, o, r, s, l, c, d, u, h = kt.browser, f = "rtl" == t.css("direction");
            return t.parent().hasClass("k-animation-container") ? (d = t.parent(".k-animation-container"),
            u = d[0].style,
            d.is(":hidden") && d.show(),
            i = Ct.test(u.width) || Ct.test(u.height),
            i || d.css({
                width: t.outerWidth(),
                height: t.outerHeight(),
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            })) : (o = a(t),
            r = t[0].style.width,
            s = t[0].style.height,
            l = Ct.test(r),
            c = Ct.test(s),
            h.opera && (o.left = o.right = o.bottom = 5),
            i = l || c,
            !l && (!n || n && r) && (r = t.outerWidth()),
            !c && (!n || n && s) && (s = t.outerHeight()),
            t.wrap(e("<div/>").addClass("k-animation-container").css({
                width: r,
                height: s,
                marginLeft: o.left * (f ? 1 : -1),
                paddingLeft: o.left,
                paddingRight: o.right,
                paddingBottom: o.bottom
            })),
            i && t.css({
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            })),
            h.msie && bt.floor(h.version) <= 7 && (t.css({
                zoom: 1
            }),
            t.children(".k-menu").width(t.width())),
            t.parent()
        }
        function l(e) {
            var t = 1
              , n = arguments.length;
            for (t = 1; n > t; t++)
                c(e, arguments[t]);
            return e
        }
        function c(e, t) {
            var n, i, o, r, a, s = gt.data.ObservableArray, l = gt.data.LazyObservableArray, d = gt.data.DataSource, u = gt.data.HierarchicalDataSource;
            for (n in t)
                i = t[n],
                o = typeof i,
                r = o === Et && null  !== i ? i.constructor : null ,
                r && r !== Array && r !== s && r !== l && r !== d && r !== u ? i instanceof Date ? e[n] = new Date(i.getTime()) : M(i.clone) ? e[n] = i.clone() : (a = e[n],
                e[n] = typeof a === Et ? a || {} : {},
                c(e[n], i)) : o !== zt && (e[n] = i);
            return e
        }
        function d(e, t, i) {
            for (var o in t)
                if (t.hasOwnProperty(o) && t[o].test(e))
                    return o;
            return i !== n ? i : e
        }
        function u(e) {
            return e.replace(/([a-z][A-Z])/g, function(e) {
                return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
            })
        }
        function h(e) {
            return e.replace(/\-(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        function f(t, n) {
            var i, o = {};
            return document.defaultView && document.defaultView.getComputedStyle ? (i = document.defaultView.getComputedStyle(t, ""),
            n && e.each(n, function(e, t) {
                o[t] = i.getPropertyValue(t)
            })) : (i = t.currentStyle,
            n && e.each(n, function(e, t) {
                o[t] = i[h(t)]
            })),
            gt.size(o) || (o = i),
            o
        }
        function p(e) {
            var t, n = 0;
            for (t in e)
                e.hasOwnProperty(t) && "toJSON" != t && n++;
            return n
        }
        function g(e, n, i) {
            n || (n = "offset");
            var o = e[n]();
            return kt.browser.msie && (kt.pointers || kt.msPointers) && !i && (o.top -= t.pageYOffset - document.documentElement.scrollTop,
            o.left -= t.pageXOffset - document.documentElement.scrollLeft),
            o
        }
        function m(e) {
            var t = {};
            return vt("string" == typeof e ? e.split(" ") : e, function(e) {
                t[e] = this
            }),
            t
        }
        function v(e) {
            return new gt.effects.Element(e)
        }
        function _(e, t, n, i) {
            return typeof e === Pt && (M(t) && (i = t,
            t = 400,
            n = !1),
            M(n) && (i = n,
            n = !1),
            typeof t === Bt && (n = t,
            t = 400),
            e = {
                effects: e,
                duration: t,
                reverse: n,
                complete: i
            }),
            mt({
                effects: {},
                duration: 400,
                reverse: !1,
                init: wt,
                teardown: wt,
                hide: !1
            }, e, {
                completeCallback: e.complete,
                complete: wt
            })
        }
        function y(t, n, i, o, r) {
            for (var a, s = 0, l = t.length; l > s; s++)
                a = e(t[s]),
                a.queue(function() {
                    U.promise(a, _(n, i, o, r))
                });
            return t
        }
        function w(e, t, n, i) {
            return t && (t = t.split(" "),
            vt(t, function(t, n) {
                e.toggleClass(n, i)
            })),
            e
        }
        function b(e) {
            return ("" + e).replace(W, "&amp;").replace(j, "&lt;").replace($, "&gt;").replace(G, "&quot;").replace(q, "&#39;")
        }
        function x(e, t) {
            var i;
            return 0 === t.indexOf("data") && (t = t.substring(4),
            t = t.charAt(0).toLowerCase() + t.substring(1)),
            t = t.replace(nt, "-$1"),
            i = e.getAttribute("data-" + gt.ns + t),
            null  === i ? i = n : "null" === i ? i = null  : "true" === i ? i = !0 : "false" === i ? i = !1 : Dt.test(i) ? i = parseFloat(i) : et.test(i) && !tt.test(i) && (i = Function("return (" + i + ")")()),
            i
        }
        function k(t, i) {
            var o, r, a = {};
            for (o in i)
                r = x(t, o),
                r !== n && (J.test(o) && (r = gt.template(e("#" + r).html())),
                a[o] = r);
            return a
        }
        function C(t, n) {
            return e.contains(t, n) ? -1 : 1
        }
        function S() {
            var t = e(this);
            return e.inArray(t.attr("data-" + gt.ns + "role"), ["slider", "rangeslider"]) > -1 || t.is(":visible")
        }
        function T(e, t) {
            var n = e.nodeName.toLowerCase();
            return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && D(e)
        }
        function D(t) {
            return !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility") || e.expr.filters.hidden(this)
            }).length
        }
        function A(e, t) {
            return new A.fn.init(e,t)
        }
        var P, M, E, I, B, z, L, F, R, O, N, H, V, U, W, j, G, q, $, Y, Q, X, K, Z, J, et, tt, nt, it, ot, rt, at, st, lt, ct, dt, ut, ht, ft, pt, gt = t.kendo = t.kendo || {
            cultures: {}
        }, mt = e.extend, vt = e.each, _t = e.isArray, yt = e.proxy, wt = e.noop, bt = Math, xt = t.JSON || {}, kt = {}, Ct = /%/, St = /\{(\d+)(:[^\}]+)?\}/g, Tt = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i, Dt = /^(\+|-?)\d+(\.?)\d*$/, At = "function", Pt = "string", Mt = "number", Et = "object", It = "null", Bt = "boolean", zt = "undefined", Lt = {}, Ft = {}, Rt = [].slice, Ot = t.Globalize;
        gt.version = "2015.1.408",
        i.extend = function(e) {
            var t, n, i = function() {}
            , o = this, r = e && e.init ? e.init : function() {
                o.apply(this, arguments)
            }
            ;
            i.prototype = o.prototype,
            n = r.fn = r.prototype = new i;
            for (t in e)
                n[t] = null  != e[t] && e[t].constructor === Object ? mt(!0, {}, i.prototype[t], e[t]) : e[t];
            return n.constructor = r,
            r.extend = o.extend,
            r
        }
        ,
        i.prototype._initOptions = function(e) {
            this.options = l({}, this.options, e)
        }
        ,
        M = gt.isFunction = function(e) {
            return "function" == typeof e
        }
        ,
        E = function() {
            this._defaultPrevented = !0
        }
        ,
        I = function() {
            return this._defaultPrevented === !0
        }
        ,
        B = i.extend({
            init: function() {
                this._events = {}
            },
            bind: function(e, t, i) {
                var o, r, a, s, l, c = this, d = typeof e === Pt ? [e] : e, u = typeof t === At;
                if (t === n) {
                    for (o in e)
                        c.bind(o, e[o]);
                    return c
                }
                for (o = 0,
                r = d.length; r > o; o++)
                    e = d[o],
                    s = u ? t : t[e],
                    s && (i && (a = s,
                    s = function() {
                        c.unbind(e, s),
                        a.apply(c, arguments)
                    }
                    ,
                    s.original = a),
                    l = c._events[e] = c._events[e] || [],
                    l.push(s));
                return c
            },
            one: function(e, t) {
                return this.bind(e, t, !0)
            },
            first: function(e, t) {
                var n, i, o, r, a = this, s = typeof e === Pt ? [e] : e, l = typeof t === At;
                for (n = 0,
                i = s.length; i > n; n++)
                    e = s[n],
                    o = l ? t : t[e],
                    o && (r = a._events[e] = a._events[e] || [],
                    r.unshift(o));
                return a
            },
            trigger: function(e, t) {
                var n, i, o = this, r = o._events[e];
                if (r) {
                    for (t = t || {},
                    t.sender = o,
                    t._defaultPrevented = !1,
                    t.preventDefault = E,
                    t.isDefaultPrevented = I,
                    r = r.slice(),
                    n = 0,
                    i = r.length; i > n; n++)
                        r[n].call(o, t);
                    return t._defaultPrevented === !0
                }
                return !1
            },
            unbind: function(e, t) {
                var i, o = this, r = o._events[e];
                if (e === n)
                    o._events = {};
                else if (r)
                    if (t)
                        for (i = r.length - 1; i >= 0; i--)
                            (r[i] === t || r[i].original === t) && r.splice(i, 1);
                    else
                        o._events[e] = [];
                return o
            }
        }),
        z = /^\w+/,
        L = /\$\{([^}]*)\}/g,
        F = /\\\}/g,
        R = /__CURLY__/g,
        O = /\\#/g,
        N = /__SHARP__/g,
        H = ["", "0", "00", "000", "0000"],
        P = {
            paramName: "data",
            useWithBlock: !0,
            render: function(e, t) {
                var n, i, o = "";
                for (n = 0,
                i = t.length; i > n; n++)
                    o += e(t[n]);
                return o
            },
            compile: function(e, t) {
                var n, i, r, a = mt({}, this, t), s = a.paramName, l = s.match(z)[0], c = a.useWithBlock, d = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
                if (M(e))
                    return e;
                for (d += c ? "with(" + s + "){" : "",
                d += "$kendoOutput=",
                i = e.replace(F, "__CURLY__").replace(L, "#=$kendoHtmlEncode($1)#").replace(R, "}").replace(O, "__SHARP__").split("#"),
                r = 0; i.length > r; r++)
                    d += o(i[r], r % 2 === 0);
                d += c ? ";}" : ";",
                d += "return $kendoOutput;",
                d = d.replace(N, "#");
                try {
                    return n = Function(l, d),
                    n._slotCount = Math.floor(i.length / 2),
                    n
                } catch (u) {
                    throw Error(gt.format("Invalid template:'{0}' Generated code:'{1}'", e, d))
                }
            }
        },
        function() {
            function e(e) {
                return a.lastIndex = 0,
                a.test(e) ? '"' + e.replace(a, function(e) {
                    var t = s[e];
                    return typeof t === Pt ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }
            function t(r, a) {
                var s, c, d, u, h, f, p = n, g = a[r];
                if (g && typeof g === Et && typeof g.toJSON === At && (g = g.toJSON(r)),
                typeof o === At && (g = o.call(a, r, g)),
                f = typeof g,
                f === Pt)
                    return e(g);
                if (f === Mt)
                    return isFinite(g) ? g + "" : It;
                if (f === Bt || f === It)
                    return g + "";
                if (f === Et) {
                    if (!g)
                        return It;
                    if (n += i,
                    h = [],
                    "[object Array]" === l.apply(g)) {
                        for (u = g.length,
                        s = 0; u > s; s++)
                            h[s] = t(s, g) || It;
                        return d = 0 === h.length ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + p + "]" : "[" + h.join(",") + "]",
                        n = p,
                        d
                    }
                    if (o && typeof o === Et)
                        for (u = o.length,
                        s = 0; u > s; s++)
                            typeof o[s] === Pt && (c = o[s],
                            d = t(c, g),
                            d && h.push(e(c) + (n ? ": " : ":") + d));
                    else
                        for (c in g)
                            Object.hasOwnProperty.call(g, c) && (d = t(c, g),
                            d && h.push(e(c) + (n ? ": " : ":") + d));
                    return d = 0 === h.length ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + p + "}" : "{" + h.join(",") + "}",
                    n = p,
                    d
                }
            }
            var n, i, o, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, l = {}.toString;
            typeof Date.prototype.toJSON !== At && (Date.prototype.toJSON = function() {
                var e = this;
                return isFinite(e.valueOf()) ? r(e.getUTCFullYear(), 4) + "-" + r(e.getUTCMonth() + 1) + "-" + r(e.getUTCDate()) + "T" + r(e.getUTCHours()) + ":" + r(e.getUTCMinutes()) + ":" + r(e.getUTCSeconds()) + "Z" : null 
            }
            ,
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            }
            ),
            typeof xt.stringify !== At && (xt.stringify = function(e, r, a) {
                var s;
                if (n = "",
                i = "",
                typeof a === Mt)
                    for (s = 0; a > s; s += 1)
                        i += " ";
                else
                    typeof a === Pt && (i = a);
                if (o = r,
                r && typeof r !== At && (typeof r !== Et || typeof r.length !== Mt))
                    throw Error("JSON.stringify");
                return t("", {
                    "": e
                })
            }
            )
        }(),
        function() {
            function t(e) {
                if (e) {
                    if (e.numberFormat)
                        return e;
                    if (typeof e === Pt) {
                        var t = gt.cultures;
                        return t[e] || t[e.split("-")[0]] || null 
                    }
                    return null 
                }
                return null 
            }
            function i(e) {
                return e && (e = t(e)),
                e || gt.cultures.current
            }
            function o(e) {
                e.groupSizes = e.groupSize,
                e.percent.groupSizes = e.percent.groupSize,
                e.currency.groupSizes = e.currency.groupSize
            }
            function a(e, t, o) {
                o = i(o);
                var a = o.calendars.standard
                  , s = a.days
                  , l = a.months;
                return t = a.patterns[t] || t,
                t.replace(d, function(t) {
                    var i, o, c;
                    return "d" === t ? o = e.getDate() : "dd" === t ? o = r(e.getDate()) : "ddd" === t ? o = s.namesAbbr[e.getDay()] : "dddd" === t ? o = s.names[e.getDay()] : "M" === t ? o = e.getMonth() + 1 : "MM" === t ? o = r(e.getMonth() + 1) : "MMM" === t ? o = l.namesAbbr[e.getMonth()] : "MMMM" === t ? o = l.names[e.getMonth()] : "yy" === t ? o = r(e.getFullYear() % 100) : "yyyy" === t ? o = r(e.getFullYear(), 4) : "h" === t ? o = e.getHours() % 12 || 12 : "hh" === t ? o = r(e.getHours() % 12 || 12) : "H" === t ? o = e.getHours() : "HH" === t ? o = r(e.getHours()) : "m" === t ? o = e.getMinutes() : "mm" === t ? o = r(e.getMinutes()) : "s" === t ? o = e.getSeconds() : "ss" === t ? o = r(e.getSeconds()) : "f" === t ? o = bt.floor(e.getMilliseconds() / 100) : "ff" === t ? (o = e.getMilliseconds(),
                    o > 99 && (o = bt.floor(o / 10)),
                    o = r(o)) : "fff" === t ? o = r(e.getMilliseconds(), 3) : "tt" === t ? o = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (i = e.getTimezoneOffset(),
                    c = 0 > i,
                    o = ("" + bt.abs(i / 60)).split(".")[0],
                    i = bt.abs(i) - 60 * o,
                    o = (c ? "+" : "-") + r(o),
                    o += ":" + r(i)) : ("zz" === t || "z" === t) && (o = e.getTimezoneOffset() / 60,
                    c = 0 > o,
                    o = ("" + bt.abs(o)).split(".")[0],
                    o = (c ? "+" : "-") + ("zz" === t ? r(o) : o)),
                    o !== n ? o : t.slice(1, t.length - 1)
                })
            }
            function s(e, t, o) {
                o = i(o);
                var r, a, s, c, d, w, b, x, k, C, S, T, D, A, P, M, E, I, B, z, L, F, R, O = o.numberFormat, N = O.groupSize[0], H = O[m], V = O[g], U = O.decimals, W = O.pattern[0], j = [], G = 0 > e, q = p, $ = p, Y = -1;
                if (e === n)
                    return p;
                if (!isFinite(e))
                    return e;
                if (!t)
                    return o.name.length ? e.toLocaleString() : "" + e;
                if (d = u.exec(t)) {
                    if (t = d[1].toLowerCase(),
                    a = "c" === t,
                    s = "p" === t,
                    (a || s) && (O = a ? O.currency : O.percent,
                    N = O.groupSize[0],
                    H = O[m],
                    V = O[g],
                    U = O.decimals,
                    r = O.symbol,
                    W = O.pattern[G ? 0 : 1]),
                    c = d[2],
                    c && (U = +c),
                    "e" === t)
                        return c ? e.toExponential(U) : e.toExponential();
                    if (s && (e *= 100),
                    e = l(e, U),
                    G = 0 > e,
                    e = e.split(g),
                    w = e[0],
                    b = e[1],
                    G && (w = w.substring(1)),
                    $ = w,
                    x = w.length,
                    x >= N)
                        for ($ = p,
                        C = 0; x > C; C++)
                            C > 0 && (x - C) % N === 0 && ($ += H),
                            $ += w.charAt(C);
                    if (b && ($ += V + b),
                    "n" === t && !G)
                        return $;
                    for (e = p,
                    C = 0,
                    S = W.length; S > C; C++)
                        T = W.charAt(C),
                        e += "n" === T ? $ : "$" === T || "%" === T ? r : T;
                    return e
                }
                if (G && (e = -e),
                (t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) && (t = t.replace(h, function(e) {
                    var t = e.charAt(0).replace("\\", "")
                      , n = e.slice(1).replace(t, "");
                    return j.push(n),
                    y
                })),
                t = t.split(";"),
                G && t[1])
                    t = t[1],
                    A = !0;
                else if (0 === e) {
                    if (t = t[2] || t[0],
                    -1 == t.indexOf(v) && -1 == t.indexOf(_))
                        return t
                } else
                    t = t[0];
                if (z = t.indexOf("%"),
                L = t.indexOf("$"),
                s = -1 != z,
                a = -1 != L,
                s && (e *= 100),
                a && "\\" === t[L - 1] && (t = t.split("\\").join(""),
                a = !1),
                (a || s) && (O = a ? O.currency : O.percent,
                N = O.groupSize[0],
                H = O[m],
                V = O[g],
                U = O.decimals,
                r = O.symbol),
                D = t.indexOf(m) > -1,
                D && (t = t.replace(f, p)),
                P = t.indexOf(g),
                S = t.length,
                -1 != P ? (b = ("" + e).split("e"),
                b = b[1] ? l(e, Math.abs(b[1])) : b[0],
                b = b.split(g)[1] || p,
                E = t.lastIndexOf(_) - P,
                M = t.lastIndexOf(v) - P,
                I = E > -1,
                B = M > -1,
                C = b.length,
                I || B || (t = t.substring(0, P) + t.substring(P + 1),
                S = t.length,
                P = -1,
                C = 0),
                I && E > M ? C = E : M > E && (B && C > M ? C = M : I && E > C && (C = E)),
                C > -1 && (e = l(e, C))) : e = l(e),
                M = t.indexOf(v),
                F = E = t.indexOf(_),
                Y = -1 == M && -1 != E ? E : -1 != M && -1 == E ? M : M > E ? E : M,
                M = t.lastIndexOf(v),
                E = t.lastIndexOf(_),
                R = -1 == M && -1 != E ? E : -1 != M && -1 == E ? M : M > E ? M : E,
                Y == S && (R = Y),
                -1 != Y) {
                    if ($ = ("" + e).split(g),
                    w = $[0],
                    b = $[1] || p,
                    x = w.length,
                    k = b.length,
                    G && -1 * e >= 0 && (G = !1),
                    D)
                        if (x === N && P - F > x)
                            w = H + w;
                        else if (x > N) {
                            for ($ = p,
                            C = 0; x > C; C++)
                                C > 0 && (x - C) % N === 0 && ($ += H),
                                $ += w.charAt(C);
                            w = $
                        }
                    for (e = t.substring(0, Y),
                    G && !A && (e += "-"),
                    C = Y; S > C; C++) {
                        if (T = t.charAt(C),
                        -1 == P) {
                            if (x > R - C) {
                                e += w;
                                break
                            }
                        } else if (-1 != E && C > E && (q = p),
                        x >= P - C && P - C > -1 && (e += w,
                        C = P),
                        P === C) {
                            e += (b ? V : p) + b,
                            C += R - P + 1;
                            continue
                        }
                        T === _ ? (e += T,
                        q = T) : T === v && (e += q)
                    }
                    if (R >= Y && (e += t.substring(R + 1)),
                    a || s) {
                        for ($ = p,
                        C = 0,
                        S = e.length; S > C; C++)
                            T = e.charAt(C),
                            $ += "$" === T || "%" === T ? r : T;
                        e = $
                    }
                    if (S = j.length)
                        for (C = 0; S > C; C++)
                            e = e.replace(y, j[C])
                }
                return e
            }
            var l, c, d = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g, u = /^(n|c|p|e)(\d*)$/i, h = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g, f = /\,/g, p = "", g = ".", m = ",", v = "#", _ = "0", y = "??", w = "en-US", b = {}.toString;
            gt.cultures["en-US"] = {
                name: w,
                numberFormat: {
                    pattern: ["-n"],
                    decimals: 2,
                    ",": ",",
                    ".": ".",
                    groupSize: [3],
                    percent: {
                        pattern: ["-n %", "n %"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "%"
                    },
                    currency: {
                        pattern: ["($n)", "$n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "$"
                    }
                },
                calendars: {
                    standard: {
                        days: {
                            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                        },
                        months: {
                            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        },
                        AM: ["AM", "am", "AM"],
                        PM: ["PM", "pm", "PM"],
                        patterns: {
                            d: "M/d/yyyy",
                            D: "dddd, MMMM dd, yyyy",
                            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                            g: "M/d/yyyy h:mm tt",
                            G: "M/d/yyyy h:mm:ss tt",
                            m: "MMMM dd",
                            M: "MMMM dd",
                            s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                            t: "h:mm tt",
                            T: "h:mm:ss tt",
                            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                            y: "MMMM, yyyy",
                            Y: "MMMM, yyyy"
                        },
                        "/": "/",
                        ":": ":",
                        firstDay: 0,
                        twoDigitYearMax: 2029
                    }
                }
            },
            gt.culture = function(e) {
                var i, r = gt.cultures;
                return e === n ? r.current : (i = t(e) || r[w],
                i.calendar = i.calendars.standard,
                r.current = i,
                Ot && !Ot.load && o(i.numberFormat),
                n)
            }
            ,
            gt.findCulture = t,
            gt.getCulture = i,
            gt.culture(w),
            l = function(e, t) {
                return t = t || 0,
                e = ("" + e).split("e"),
                e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))),
                e = ("" + e).split("e"),
                e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)),
                e.toFixed(t)
            }
            ,
            c = function(e, t, i) {
                if (t) {
                    if ("[object Date]" === b.call(e))
                        return a(e, t, i);
                    if (typeof e === Mt)
                        return s(e, t, i)
                }
                return e !== n ? e : ""
            }
            ,
            Ot && !Ot.load && (c = function(t, n, i) {
                return e.isPlainObject(i) && (i = i.name),
                Ot.format(t, n, i)
            }
            ),
            gt.format = function(e) {
                var t = arguments;
                return e.replace(St, function(e, n, i) {
                    var o = t[parseInt(n, 10) + 1];
                    return c(o, i ? i.substring(1) : "")
                })
            }
            ,
            gt._extractFormat = function(e) {
                return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)),
                e
            }
            ,
            gt._activeElement = function() {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.documentElement.activeElement
                }
            }
            ,
            gt._round = l,
            gt.toString = c
        }(),
        function() {
            function t(e, t, n) {
                return !(e >= t && n >= e)
            }
            function i(e) {
                return e.charAt(0)
            }
            function o(t) {
                return e.map(t, i)
            }
            function r(e, t) {
                t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
            }
            function a(e) {
                for (var t = 0, n = e.length, i = []; n > t; t++)
                    i[t] = (e[t] + "").toLowerCase();
                return i
            }
            function s(e) {
                var t, n = {};
                for (t in e)
                    n[t] = a(e[t]);
                return n
            }
            function l(e, i, a) {
                if (!e)
                    return null ;
                var l, c, d, u, p, g, m, _, y, w, b, x, k, C = function(e) {
                    for (var t = 0; i[F] === e; )
                        t++,
                        F++;
                    return t > 0 && (F -= 1),
                    t
                }
                , S = function(t) {
                    var n = v[t] || RegExp("^\\d{1," + t + "}")
                      , i = e.substr(R, t).match(n);
                    return i ? (i = i[0],
                    R += i.length,
                    parseInt(i, 10)) : null 
                }
                , T = function(t, n) {
                    for (var i, o, r, a = 0, s = t.length; s > a; a++)
                        if (i = t[a],
                        o = i.length,
                        r = e.substr(R, o),
                        n && (r = r.toLowerCase()),
                        r == i)
                            return R += o,
                            a + 1;
                    return null 
                }
                , D = function() {
                    var t = !1;
                    return e.charAt(R) === i[F] && (R++,
                    t = !0),
                    t
                }
                , A = a.calendars.standard, P = null , M = null , E = null , I = null , B = null , z = null , L = null , F = 0, R = 0, O = !1, N = new Date, H = A.twoDigitYearMax || 2029, V = N.getFullYear();
                for (i || (i = "d"),
                u = A.patterns[i],
                u && (i = u),
                i = i.split(""),
                d = i.length; d > F; F++)
                    if (l = i[F],
                    O)
                        "'" === l ? O = !1 : D();
                    else if ("d" === l) {
                        if (c = C("d"),
                        A._lowerDays || (A._lowerDays = s(A.days)),
                        E = 3 > c ? S(2) : T(A._lowerDays[3 == c ? "namesAbbr" : "names"], !0),
                        null  === E || t(E, 1, 31))
                            return null 
                    } else if ("M" === l) {
                        if (c = C("M"),
                        A._lowerMonths || (A._lowerMonths = s(A.months)),
                        M = 3 > c ? S(2) : T(A._lowerMonths[3 == c ? "namesAbbr" : "names"], !0),
                        null  === M || t(M, 1, 12))
                            return null ;
                        M -= 1
                    } else if ("y" === l) {
                        if (c = C("y"),
                        P = S(c),
                        null  === P)
                            return null ;
                        2 == c && ("string" == typeof H && (H = V + parseInt(H, 10)),
                        P = V - V % 100 + P,
                        P > H && (P -= 100))
                    } else if ("h" === l) {
                        if (C("h"),
                        I = S(2),
                        12 == I && (I = 0),
                        null  === I || t(I, 0, 11))
                            return null 
                    } else if ("H" === l) {
                        if (C("H"),
                        I = S(2),
                        null  === I || t(I, 0, 23))
                            return null 
                    } else if ("m" === l) {
                        if (C("m"),
                        B = S(2),
                        null  === B || t(B, 0, 59))
                            return null 
                    } else if ("s" === l) {
                        if (C("s"),
                        z = S(2),
                        null  === z || t(z, 0, 59))
                            return null 
                    } else if ("f" === l) {
                        if (c = C("f"),
                        k = e.substr(R, c).match(v[3]),
                        L = S(c),
                        null  !== L && (k = k[0].length,
                        3 > k && (L *= Math.pow(10, 3 - k)),
                        c > 3 && (L = parseInt(("" + L).substring(0, 3), 10))),
                        null  === L || t(L, 0, 999))
                            return null 
                    } else if ("t" === l) {
                        if (c = C("t"),
                        _ = A.AM,
                        y = A.PM,
                        1 === c && (_ = o(_),
                        y = o(y)),
                        p = T(y),
                        !p && !T(_))
                            return null 
                    } else if ("z" === l) {
                        if (g = !0,
                        c = C("z"),
                        "Z" === e.substr(R, 1)) {
                            D();
                            continue
                        }
                        if (m = e.substr(R, 6).match(c > 2 ? f : h),
                        !m)
                            return null ;
                        if (m = m[0].split(":"),
                        w = m[0],
                        b = m[1],
                        !b && w.length > 3 && (R = w.length - 2,
                        b = w.substring(R),
                        w = w.substring(0, R)),
                        w = parseInt(w, 10),
                        t(w, -12, 13))
                            return null ;
                        if (c > 2 && (b = parseInt(b, 10),
                        isNaN(b) || t(b, 0, 59)))
                            return null 
                    } else if ("'" === l)
                        O = !0,
                        D();
                    else if (!D())
                        return null ;
                return x = null  !== I || null  !== B || z || null ,
                null  === P && null  === M && null  === E && x ? (P = V,
                M = N.getMonth(),
                E = N.getDate()) : (null  === P && (P = V),
                null  === E && (E = 1)),
                p && 12 > I && (I += 12),
                g ? (w && (I += -w),
                b && (B += -b),
                e = new Date(Date.UTC(P, M, E, I, B, z, L))) : (e = new Date(P,M,E,I,B,z,L),
                r(e, I)),
                100 > P && e.setFullYear(P),
                e.getDate() !== E && g === n ? null  : e
            }
            function c(e) {
                var t = "-" === e.substr(0, 1) ? -1 : 1;
                return e = e.substring(1),
                e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10),
                t * e
            }
            var d = /\u00A0/g
              , u = /[eE][\-+]?[0-9]+/
              , h = /[+|\-]\d{1,2}/
              , f = /[+|\-]\d{1,2}:?\d{2}/
              , p = /^\/Date\((.*?)\)\/$/
              , g = /[+-]\d*/
              , m = ["G", "g", "d", "F", "D", "y", "m", "T", "t"]
              , v = {
                2: /^\d{1,2}/,
                3: /^\d{1,3}/,
                4: /^\d{4}/
            }
              , _ = {}.toString;
            gt.parseDate = function(e, t, n) {
                var i, o, r, a, s;
                if ("[object Date]" === _.call(e))
                    return e;
                if (i = 0,
                o = null ,
                e && 0 === e.indexOf("/D") && (o = p.exec(e)))
                    return o = o[1],
                    s = g.exec(o.substring(1)),
                    o = new Date(parseInt(o, 10)),
                    s && (s = c(s[0]),
                    o = gt.timezone.apply(o, 0),
                    o = gt.timezone.convert(o, 0, -1 * s)),
                    o;
                if (n = gt.getCulture(n),
                !t) {
                    for (t = [],
                    a = n.calendar.patterns,
                    r = m.length; r > i; i++)
                        t[i] = a[m[i]];
                    i = 0,
                    t = ["yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy/MM/dd", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fff", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"].concat(t)
                }
                for (t = _t(t) ? t : [t],
                r = t.length; r > i; i++)
                    if (o = l(e, t[i], n))
                        return o;
                return o
            }
            ,
            gt.parseInt = function(e, t) {
                var n = gt.parseFloat(e, t);
                return n && (n = 0 | n),
                n
            }
            ,
            gt.parseFloat = function(e, t, n) {
                if (!e && 0 !== e)
                    return null ;
                if (typeof e === Mt)
                    return e;
                e = "" + e,
                t = gt.getCulture(t);
                var i, o, r = t.numberFormat, a = r.percent, s = r.currency, l = s.symbol, c = a.symbol, h = e.indexOf("-");
                return u.test(e) ? (e = parseFloat(e.replace(r["."], ".")),
                isNaN(e) && (e = null ),
                e) : h > 0 ? null  : (h = h > -1,
                e.indexOf(l) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (r = s,
                i = r.pattern[0].replace("$", l).split("n"),
                e.indexOf(i[0]) > -1 && e.indexOf(i[1]) > -1 && (e = e.replace(i[0], "").replace(i[1], ""),
                h = !0)) : e.indexOf(c) > -1 && (o = !0,
                r = a,
                l = c),
                e = e.replace("-", "").replace(l, "").replace(d, " ").split(r[","].replace(d, " ")).join("").replace(r["."], "."),
                e = parseFloat(e),
                isNaN(e) ? e = null  : h && (e *= -1),
                e && o && (e /= 100),
                e)
            }
            ,
            Ot && !Ot.load && (gt.parseDate = function(e, t, n) {
                return "[object Date]" === _.call(e) ? e : Ot.parseDate(e, t, n)
            }
            ,
            gt.parseFloat = function(t, i) {
                return typeof t === Mt ? t : t === n || null  === t ? null  : (e.isPlainObject(i) && (i = i.name),
                t = Ot.parseFloat(t, i),
                isNaN(t) ? null  : t)
            }
            )
        }(),
        function() {
            var i, o, r, a, s, l, c;
            kt._scrollbar = n,
            kt.scrollbar = function(e) {
                if (isNaN(kt._scrollbar) || e) {
                    var t, n = document.createElement("div");
                    return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block",
                    n.innerHTML = "&nbsp;",
                    document.body.appendChild(n),
                    kt._scrollbar = t = n.offsetWidth - n.scrollWidth,
                    document.body.removeChild(n),
                    t
                }
                return kt._scrollbar
            }
            ,
            kt.isRtl = function(t) {
                return e(t).closest(".k-rtl").length > 0
            }
            ,
            i = document.createElement("table");
            try {
                i.innerHTML = "<tr><td></td></tr>",
                kt.tbodyInnerHtml = !0
            } catch (u) {
                kt.tbodyInnerHtml = !1
            }
            kt.touch = "ontouchstart" in t,
            kt.msPointers = t.MSPointerEvent,
            kt.pointers = t.PointerEvent,
            o = kt.transitions = !1,
            r = kt.transforms = !1,
            a = "HTMLElement" in t ? HTMLElement.prototype : [],
            kt.hasHW3D = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style,
            vt(["Moz", "webkit", "O", "ms"], function() {
                var e, t = "" + this, a = typeof i.style[t + "Transition"] === Pt;
                return a || typeof i.style[t + "Transform"] === Pt ? (e = t.toLowerCase(),
                r = {
                    css: "ms" != e ? "-" + e + "-" : "",
                    prefix: t,
                    event: "o" === e || "webkit" === e ? e : ""
                },
                a && (o = r,
                o.event = o.event ? o.event + "TransitionEnd" : "transitionend"),
                !1) : n
            }),
            i = null ,
            kt.transforms = r,
            kt.transitions = o,
            kt.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
            try {
                kt.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth,
                kt.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight
            } catch (u) {
                kt.screenWidth = t.screen.availWidth,
                kt.screenHeight = t.screen.availHeight
            }
            kt.detectOS = function(e) {
                var n, i, o = !1, r = [], a = !/mobile safari/i.test(e), s = {
                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                }, l = {
                    ios: /^i(phone|pad|pod)$/i,
                    android: /^android|fire$/i,
                    blackberry: /^blackberry|playbook/i,
                    windows: /windows/,
                    wp: /wp/,
                    flat: /sailfish|ffos|tizen/i,
                    meego: /meego/
                }, c = {
                    tablet: /playbook|ipad|fire/i
                }, u = {
                    omini: /Opera\sMini/i,
                    omobile: /Opera\sMobi/i,
                    firefox: /Firefox|Fennec/i,
                    mobilesafari: /version\/.*safari/i,
                    ie: /MSIE|Windows\sPhone/i,
                    chrome: /chrome|crios/i,
                    webkit: /webkit/i
                };
                for (i in s)
                    if (s.hasOwnProperty(i) && (r = e.match(s[i]))) {
                        if ("windows" == i && "plugins" in navigator)
                            return !1;
                        o = {},
                        o.device = i,
                        o.tablet = d(i, c, !1),
                        o.browser = d(e, u, "default"),
                        o.name = d(i, l),
                        o[o.name] = !0,
                        o.majorVersion = r[2],
                        o.minorVersion = r[3].replace("_", "."),
                        n = o.minorVersion.replace(".", "").substr(0, 2),
                        o.flatVersion = o.majorVersion + n + Array(3 - (3 > n.length ? n.length : 2)).join("0"),
                        o.cordova = typeof t.PhoneGap !== zt || typeof t.cordova !== zt,
                        o.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || o.cordova,
                        o.android && (1.5 > kt.devicePixelRatio && 400 > o.flatVersion || a) && (kt.screenWidth > 800 || kt.screenHeight > 800) && (o.tablet = i);
                        break
                    }
                return o
            }
            ,
            s = kt.mobileOS = kt.detectOS(navigator.userAgent),
            kt.wpDevicePixelRatio = s.wp ? screen.width / 320 : 0,
            kt.kineticScrollNeeded = s && (kt.touch || kt.msPointers || kt.pointers),
            kt.hasNativeScrolling = !1,
            (s.ios || s.android && s.majorVersion > 2 || s.wp) && (kt.hasNativeScrolling = s),
            kt.mouseAndTouchPresent = kt.touch && !(kt.mobileOS.ios || kt.mobileOS.android),
            kt.detectBrowser = function(e) {
                var t, n = !1, i = [], o = {
                    webkit: /(chrome)[ \/]([\w.]+)/i,
                    safari: /(webkit)[ \/]([\w.]+)/i,
                    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                };
                for (t in o)
                    if (o.hasOwnProperty(t) && (i = e.match(o[t]))) {
                        n = {},
                        n[t] = !0,
                        n[i[1].toLowerCase().split(" ")[0].split("/")[0]] = !0,
                        n.version = parseInt(document.documentMode || i[2], 10);
                        break
                    }
                return n
            }
            ,
            kt.browser = kt.detectBrowser(navigator.userAgent),
            kt.zoomLevel = function() {
                try {
                    return kt.touch ? document.documentElement.clientWidth / t.innerWidth : kt.browser.msie && kt.browser.version >= 10 ? (top || t).document.documentElement.offsetWidth / (top || t).innerWidth : 1
                } catch (e) {
                    return 1
                }
            }
            ,
            kt.cssBorderSpacing = n !== document.documentElement.style.borderSpacing && !(kt.browser.msie && 8 > kt.browser.version),
            function(t) {
                var n = ""
                  , i = e(document.documentElement)
                  , o = parseInt(t.version, 10);
                t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera && (n = "opera"),
                n && (n = "k-" + n + " k-" + n + o),
                kt.mobileOS && (n += " k-mobile"),
                i.addClass(n)
            }(kt.browser),
            kt.eventCapture = document.documentElement.addEventListener,
            l = document.createElement("input"),
            kt.placeholder = "placeholder" in l,
            kt.propertyChangeEvent = "onpropertychange" in l,
            kt.input = function() {
                for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, i = "test", o = {}, r = 0; n > r; r++)
                    e = t[r],
                    l.setAttribute("type", e),
                    l.value = i,
                    o[e.replace("-", "")] = "text" !== l.type && l.value !== i;
                return o
            }(),
            l.style.cssText = "float:left;",
            kt.cssFloat = !!l.style.cssFloat,
            l = null ,
            kt.stableSort = function() {
                var e, t = 513, n = [{
                    index: 0,
                    field: "b"
                }];
                for (e = 1; t > e; e++)
                    n.push({
                        index: e,
                        field: "a"
                    });
                return n.sort(function(e, t) {
                    return e.field > t.field ? 1 : t.field > e.field ? -1 : 0
                }),
                1 === n[0].index
            }(),
            kt.matchesSelector = a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.matchesSelector || a.matches || function(t) {
                for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), i = n.length; i--; )
                    if (n[i] == this)
                        return !0;
                return !1
            }
            ,
            kt.pushState = t.history && t.history.pushState,
            c = document.documentMode,
            kt.hashChange = "onhashchange" in t && !(kt.browser.msie && (!c || 8 >= c))
        }(),
        V = {
            left: {
                reverse: "right"
            },
            right: {
                reverse: "left"
            },
            down: {
                reverse: "up"
            },
            up: {
                reverse: "down"
            },
            top: {
                reverse: "bottom"
            },
            bottom: {
                reverse: "top"
            },
            "in": {
                reverse: "out"
            },
            out: {
                reverse: "in"
            }
        },
        U = {},
        e.extend(U, {
            enabled: !0,
            Element: function(t) {
                this.element = e(t)
            },
            promise: function(e, t) {
                e.is(":visible") || e.css({
                    display: e.data("olddisplay") || "block"
                }).css("display"),
                t.hide && e.data("olddisplay", e.css("display")).hide(),
                t.init && t.init(),
                t.completeCallback && t.completeCallback(e),
                e.dequeue()
            },
            disable: function() {
                this.enabled = !1,
                this.promise = this.promiseShim
            },
            enable: function() {
                this.enabled = !0,
                this.promise = this.animatedPromise
            }
        }),
        U.promiseShim = U.promise,
        "kendoAnimate" in e.fn || mt(e.fn, {
            kendoStop: function(e, t) {
                return this.stop(e, t)
            },
            kendoAnimate: function(e, t, n, i) {
                return y(this, e, t, n, i)
            },
            kendoAddClass: function(e, t) {
                return gt.toggleClass(this, e, t, !0)
            },
            kendoRemoveClass: function(e, t) {
                return gt.toggleClass(this, e, t, !1)
            },
            kendoToggleClass: function(e, t, n) {
                return gt.toggleClass(this, e, t, n)
            }
        }),
        W = /&/g,
        j = /</g,
        G = /"/g,
        q = /'/g,
        $ = />/g,
        Y = function(e) {
            return e.target
        }
        ,
        kt.touch && (Y = function(e) {
            var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null ;
            return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
        }
        ,
        vt(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(t, n) {
            e.fn[n] = function(e) {
                return this.bind(n, e)
            }
        })),
        kt.touch ? kt.mobileOS ? (kt.mousedown = "touchstart",
        kt.mouseup = "touchend",
        kt.mousemove = "touchmove",
        kt.mousecancel = "touchcancel",
        kt.click = "touchend",
        kt.resize = "orientationchange") : (kt.mousedown = "mousedown touchstart",
        kt.mouseup = "mouseup touchend",
        kt.mousemove = "mousemove touchmove",
        kt.mousecancel = "mouseleave touchcancel",
        kt.click = "click",
        kt.resize = "resize") : kt.pointers ? (kt.mousemove = "pointermove",
        kt.mousedown = "pointerdown",
        kt.mouseup = "pointerup",
        kt.mousecancel = "pointercancel",
        kt.click = "pointerup",
        kt.resize = "orientationchange resize") : kt.msPointers ? (kt.mousemove = "MSPointerMove",
        kt.mousedown = "MSPointerDown",
        kt.mouseup = "MSPointerUp",
        kt.mousecancel = "MSPointerCancel",
        kt.click = "MSPointerUp",
        kt.resize = "orientationchange resize") : (kt.mousemove = "mousemove",
        kt.mousedown = "mousedown",
        kt.mouseup = "mouseup",
        kt.mousecancel = "mouseleave",
        kt.click = "click",
        kt.resize = "resize"),
        Q = function(e, t) {
            var n, i, o, r, a = t || "d", s = 1;
            for (i = 0,
            o = e.length; o > i; i++)
                r = e[i],
                "" !== r && (n = r.indexOf("["),
                0 !== n && (-1 == n ? r = "." + r : (s++,
                r = "." + r.substring(0, n) + " || {})" + r.substring(n))),
                s++,
                a += r + (o - 1 > i ? " || {})" : ")"));
            return Array(s).join("(") + a
        }
        ,
        X = /^([a-z]+:)?\/\//i,
        mt(gt, {
            ui: gt.ui || {},
            fx: gt.fx || v,
            effects: gt.effects || U,
            mobile: gt.mobile || {},
            data: gt.data || {},
            dataviz: gt.dataviz || {},
            keys: {
                INSERT: 45,
                DELETE: 46,
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                END: 35,
                HOME: 36,
                SPACEBAR: 32,
                PAGEUP: 33,
                PAGEDOWN: 34,
                F2: 113,
                F10: 121,
                F12: 123,
                NUMPAD_PLUS: 107,
                NUMPAD_MINUS: 109,
                NUMPAD_DOT: 110
            },
            support: gt.support || kt,
            animate: gt.animate || y,
            ns: "",
            attr: function(e) {
                return "data-" + gt.ns + e
            },
            getShadows: a,
            wrap: s,
            deepExtend: l,
            getComputedStyles: f,
            size: p,
            toCamelCase: h,
            toHyphens: u,
            getOffset: gt.getOffset || g,
            parseEffects: gt.parseEffects || m,
            toggleClass: gt.toggleClass || w,
            directions: gt.directions || V,
            Observable: B,
            Class: i,
            Template: P,
            template: yt(P.compile, P),
            render: yt(P.render, P),
            stringify: yt(xt.stringify, xt),
            eventTarget: Y,
            htmlEncode: b,
            isLocalUrl: function(e) {
                return e && !X.test(e)
            },
            expr: function(e, t, n) {
                return e = e || "",
                typeof t == Pt && (n = t,
                t = !1),
                n = n || "d",
                e && "[" !== e.charAt(0) && (e = "." + e),
                e = t ? Q(e.split("."), n) : n + e
            },
            getter: function(e, t) {
                var n = e + t;
                return Lt[n] = Lt[n] || Function("d", "return " + gt.expr(e, t))
            },
            setter: function(e) {
                return Ft[e] = Ft[e] || Function("d,value", gt.expr(e) + "=value")
            },
            accessor: function(e) {
                return {
                    get: gt.getter(e),
                    set: gt.setter(e)
                }
            },
            guid: function() {
                var e, t, n = "";
                for (e = 0; 32 > e; e++)
                    t = 16 * bt.random() | 0,
                    (8 == e || 12 == e || 16 == e || 20 == e) && (n += "-"),
                    n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                return n
            },
            roleSelector: function(e) {
                return e.replace(/(\S+)/g, "[" + gt.attr("role") + "=$1],").slice(0, -1)
            },
            directiveSelector: function(e) {
                var t, n = e.split(" ");
                if (n)
                    for (t = 0; n.length > t; t++)
                        "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
                return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1)
            },
            triggeredByInput: function(e) {
                return /^(label|input|textarea|select)$/i.test(e.target.tagName)
            },
            logToConsole: function(e) {
                var i = t.console;
                !gt.suppressLog && n !== i && i.log && i.log(e)
            }
        }),
        K = B.extend({
            init: function(e, t) {
                var n, i = this;
                i.element = gt.jQuery(e).handler(i),
                i.angular("init", t),
                B.fn.init.call(i),
                n = t ? t.dataSource : null ,
                n && (t = mt({}, t, {
                    dataSource: {}
                })),
                t = i.options = mt(!0, {}, i.options, t),
                n && (t.dataSource = n),
                i.element.attr(gt.attr("role")) || i.element.attr(gt.attr("role"), (t.name || "").toLowerCase()),
                i.element.data("kendo" + t.prefix + t.name, i),
                i.bind(i.events, t)
            },
            events: [],
            options: {
                prefix: ""
            },
            _hasBindingTarget: function() {
                return !!this.element[0].kendoBindingTarget
            },
            _tabindex: function(e) {
                e = e || this.wrapper;
                var t = this.element
                  , n = "tabindex"
                  , i = e.attr(n) || t.attr(n);
                t.removeAttr(n),
                e.attr(n, isNaN(i) ? 0 : i)
            },
            setOptions: function(t) {
                this._setEvents(t),
                e.extend(this.options, t)
            },
            _setEvents: function(e) {
                for (var t, n = this, i = 0, o = n.events.length; o > i; i++)
                    t = n.events[i],
                    n.options[t] && e[t] && n.unbind(t, n.options[t]);
                n.bind(n.events, e)
            },
            resize: function(e) {
                var t = this.getSize()
                  , n = this._size;
                (e || !n || t.width !== n.width || t.height !== n.height) && (this._size = t,
                this._resize(t),
                this.trigger("resize", t))
            },
            getSize: function() {
                return gt.dimensions(this.element)
            },
            size: function(e) {
                return e ? (this.setSize(e),
                n) : this.getSize()
            },
            setSize: e.noop,
            _resize: e.noop,
            destroy: function() {
                var e = this;
                e.element.removeData("kendo" + e.options.prefix + e.options.name),
                e.element.removeData("handler"),
                e.unbind()
            },
            angular: function() {}
        }),
        Z = K.extend({
            dataItems: function() {
                return this.dataSource.flatView()
            },
            _angularItems: function(t) {
                var n = this;
                n.angular(t, function() {
                    return {
                        elements: n.items(),
                        data: e.map(n.dataItems(), function(e) {
                            return {
                                dataItem: e
                            }
                        })
                    }
                })
            }
        }),
        gt.dimensions = function(e, t) {
            var n = e[0];
            return t && e.css(t),
            {
                width: n.offsetWidth,
                height: n.offsetHeight
            }
        }
        ,
        gt.notify = wt,
        J = /template$/i,
        et = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/,
        tt = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/,
        nt = /([A-Z])/g,
        gt.initWidget = function(i, o, r) {
            var a, s, l, c, d, u, h, f, p, g, m, v, _;
            if (r ? r.roles && (r = r.roles) : r = gt.ui.roles,
            i = i.nodeType ? i : i[0],
            u = i.getAttribute("data-" + gt.ns + "role")) {
                p = -1 === u.indexOf("."),
                l = p ? r[u] : gt.getter(u)(t),
                m = e(i).data(),
                v = l ? "kendo" + l.fn.options.prefix + l.fn.options.name : "",
                g = p ? RegExp("^kendo.*" + u + "$", "i") : RegExp("^" + v + "$", "i");
                for (_ in m)
                    if (_.match(g)) {
                        if (_ !== v)
                            return m[_];
                        a = m[_]
                    }
                if (l) {
                    for (f = x(i, "dataSource"),
                    o = e.extend({}, k(i, l.fn.options), o),
                    f && (o.dataSource = typeof f === Pt ? gt.getter(f)(t) : f),
                    c = 0,
                    d = l.fn.events.length; d > c; c++)
                        s = l.fn.events[c],
                        h = x(i, s),
                        h !== n && (o[s] = gt.getter(h)(t));
                    return a ? e.isEmptyObject(o) || a.setOptions(o) : a = new l(i,o),
                    a
                }
            }
        }
        ,
        gt.rolesFromNamespaces = function(e) {
            var t, n, i = [];
            for (e[0] || (e = [gt.ui, gt.dataviz.ui]),
            t = 0,
            n = e.length; n > t; t++)
                i[t] = e[t].roles;
            return mt.apply(null , [{}].concat(i.reverse()))
        }
        ,
        gt.init = function(t) {
            var n = gt.rolesFromNamespaces(Rt.call(arguments, 1));
            e(t).find("[data-" + gt.ns + "role]").addBack().each(function() {
                gt.initWidget(this, {}, n)
            })
        }
        ,
        gt.destroy = function(t) {
            e(t).find("[data-" + gt.ns + "role]").addBack().each(function() {
                var t, n = e(this).data();
                for (t in n)
                    0 === t.indexOf("kendo") && typeof n[t].destroy === At && n[t].destroy()
            })
        }
        ,
        gt.resize = function(t, n) {
            var i, o = e(t).find("[data-" + gt.ns + "role]").addBack().filter(S);
            o.length && (i = e.makeArray(o),
            i.sort(C),
            e.each(i, function() {
                var t = gt.widgetInstance(e(this));
                t && t.resize(n)
            }))
        }
        ,
        gt.parseOptions = k,
        mt(gt.ui, {
            Widget: K,
            DataBoundWidget: Z,
            roles: {},
            progress: function(t, n) {
                var i, o, r, a, s = t.find(".k-loading-mask"), l = gt.support, c = l.browser;
                n ? s.length || (i = l.isRtl(t),
                o = i ? "right" : "left",
                a = t.scrollLeft(),
                r = c.webkit && i ? t[0].scrollWidth - t.width() - 2 * a : 0,
                s = e("<div class='k-loading-mask'><span class='k-loading-text'>Loading...</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(o, Math.abs(a) + r).prependTo(t)) : s && s.remove()
            },
            plugin: function(t, i, o) {
                var r, a = t.fn.options.name;
                i = i || gt.ui,
                o = o || "",
                i[a] = t,
                i.roles[a.toLowerCase()] = t,
                r = "getKendo" + o + a,
                a = "kendo" + o + a,
                e.fn[a] = function(i) {
                    var o, r = this;
                    return typeof i === Pt ? (o = Rt.call(arguments, 1),
                    this.each(function() {
                        var t, s, l = e.data(this, a);
                        if (!l)
                            throw Error(gt.format("Cannot call method '{0}' of {1} before it is initialized", i, a));
                        if (t = l[i],
                        typeof t !== At)
                            throw Error(gt.format("Cannot find method '{0}' of {1}", i, a));
                        return s = t.apply(l, o),
                        s !== n ? (r = s,
                        !1) : n
                    })) : this.each(function() {
                        new t(this,i)
                    }),
                    r
                }
                ,
                e.fn[a].widget = t,
                e.fn[r] = function() {
                    return this.data(a)
                }
            }
        }),
        it = {
            bind: function() {
                return this
            },
            nullObject: !0,
            options: {}
        },
        ot = K.extend({
            init: function(e, t) {
                K.fn.init.call(this, e, t),
                this.element.autoApplyNS(),
                this.wrapper = this.element,
                this.element.addClass("km-widget")
            },
            destroy: function() {
                K.fn.destroy.call(this),
                this.element.kendoDestroy()
            },
            options: {
                prefix: "Mobile"
            },
            events: [],
            view: function() {
                var e = this.element.closest(gt.roleSelector("view splitview modalview drawer"));
                return gt.widgetInstance(e, gt.mobile.ui) || it
            },
            viewHasNativeScrolling: function() {
                var e = this.view();
                return e && e.options.useNativeScrolling
            },
            container: function() {
                var e = this.element.closest(gt.roleSelector("view layout modalview drawer splitview"));
                return gt.widgetInstance(e.eq(0), gt.mobile.ui) || it
            }
        }),
        mt(gt.mobile, {
            init: function(e) {
                gt.init(e, gt.mobile.ui, gt.ui, gt.dataviz.ui)
            },
            appLevelNativeScrolling: function() {
                return gt.mobile.application && gt.mobile.application.options && gt.mobile.application.options.useNativeScrolling
            },
            roles: {},
            ui: {
                Widget: ot,
                DataBoundWidget: Z.extend(ot.prototype),
                roles: {},
                plugin: function(e) {
                    gt.ui.plugin(e, gt.mobile.ui, "Mobile")
                }
            }
        }),
        l(gt.dataviz, {
            init: function(e) {
                gt.init(e, gt.dataviz.ui)
            },
            ui: {
                roles: {},
                themes: {},
                views: [],
                plugin: function(e) {
                    gt.ui.plugin(e, gt.dataviz.ui)
                }
            },
            roles: {}
        }),
        gt.touchScroller = function(t, n) {
            return e(t).map(function(t, i) {
                return i = e(i),
                kt.kineticScrollNeeded && gt.mobile.ui.Scroller && !i.data("kendoMobileScroller") ? (i.kendoMobileScroller(n),
                i.data("kendoMobileScroller")) : !1
            })[0]
        }
        ,
        gt.preventDefault = function(e) {
            e.preventDefault()
        }
        ,
        gt.widgetInstance = function(e, n) {
            var i, o, r, a, s = e.data(gt.ns + "role"), l = [];
            if (s) {
                if ("content" === s && (s = "scroller"),
                n)
                    if (n[0])
                        for (i = 0,
                        o = n.length; o > i; i++)
                            l.push(n[i].roles[s]);
                    else
                        l.push(n.roles[s]);
                else
                    l = [gt.ui.roles[s], gt.dataviz.ui.roles[s], gt.mobile.ui.roles[s]];
                for (s.indexOf(".") >= 0 && (l = [gt.getter(s)(t)]),
                i = 0,
                o = l.length; o > i; i++)
                    if (r = l[i],
                    r && (a = e.data("kendo" + r.fn.options.prefix + r.fn.options.name)))
                        return a
            }
        }
        ,
        gt.onResize = function(n) {
            var i = n;
            return kt.mobileOS.android && (i = function() {
                setTimeout(n, 600)
            }
            ),
            e(t).on(kt.resize, i),
            i
        }
        ,
        gt.unbindResize = function(n) {
            e(t).off(kt.resize, n)
        }
        ,
        gt.attrValue = function(e, t) {
            return e.data(gt.ns + t)
        }
        ,
        gt.days = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        },
        e.extend(e.expr[":"], {
            kendoFocusable: function(t) {
                var n = e.attr(t, "tabindex");
                return T(t, !isNaN(n) && n > -1)
            }
        }),
        rt = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"],
        at = "label, input, [data-rel=external]",
        st = {
            setupMouseMute: function() {
                var t, n = 0, i = rt.length, o = document.documentElement;
                if (!st.mouseTrap && kt.eventCapture)
                    for (st.mouseTrap = !0,
                    st.bustClick = !1,
                    st.captureMouse = !1,
                    t = function(t) {
                        st.captureMouse && ("click" === t.type ? st.bustClick && !e(t.target).is(at) && (t.preventDefault(),
                        t.stopPropagation()) : t.stopPropagation())
                    }
                    ; i > n; n++)
                        o.addEventListener(rt[n], t, !0)
            },
            muteMouse: function(e) {
                st.captureMouse = !0,
                e.data.bustClick && (st.bustClick = !0),
                clearTimeout(st.mouseTrapTimeoutID)
            },
            unMuteMouse: function() {
                clearTimeout(st.mouseTrapTimeoutID),
                st.mouseTrapTimeoutID = setTimeout(function() {
                    st.captureMouse = !1,
                    st.bustClick = !1
                }, 400)
            }
        },
        lt = {
            down: "touchstart mousedown",
            move: "mousemove touchmove",
            up: "mouseup touchend touchcancel",
            cancel: "mouseleave touchcancel"
        },
        kt.touch && (kt.mobileOS.ios || kt.mobileOS.android) ? lt = {
            down: "touchstart",
            move: "touchmove",
            up: "touchend touchcancel",
            cancel: "touchcancel"
        } : kt.pointers ? lt = {
            down: "pointerdown",
            move: "pointermove",
            up: "pointerup",
            cancel: "pointercancel pointerleave"
        } : kt.msPointers && (lt = {
            down: "MSPointerDown",
            move: "MSPointerMove",
            up: "MSPointerUp",
            cancel: "MSPointerCancel MSPointerLeave"
        }),
        !kt.msPointers || "onmspointerenter" in t || e.each({
            MSPointerEnter: "MSPointerOver",
            MSPointerLeave: "MSPointerOut"
        }, function(t, n) {
            e.event.special[t] = {
                delegateType: n,
                bindType: n,
                handle: function(t) {
                    var i, o = this, r = t.relatedTarget, a = t.handleObj;
                    return (!r || r !== o && !e.contains(o, r)) && (t.type = a.origType,
                    i = a.handler.apply(this, arguments),
                    t.type = n),
                    i
                }
            }
        }),
        ct = function(e) {
            return lt[e] || e
        }
        ,
        dt = /([^ ]+)/g,
        gt.applyEventMap = function(e, t) {
            return e = e.replace(dt, ct),
            t && (e = e.replace(dt, "$1." + t)),
            e
        }
        ,
        ut = e.fn.on,
        mt(!0, A, e),
        A.fn = A.prototype = new e,
        A.fn.constructor = A,
        A.fn.init = function(t, n) {
            return n && n instanceof e && !(n instanceof A) && (n = A(n)),
            e.fn.init.call(this, t, n, ht)
        }
        ,
        A.fn.init.prototype = A.fn,
        ht = A(document),
        mt(A.fn, {
            handler: function(e) {
                return this.data("handler", e),
                this
            },
            autoApplyNS: function(e) {
                return this.data("kendoNS", e || gt.guid()),
                this
            },
            on: function() {
                var e, t, n, i, o, r, a = this, s = a.data("kendoNS");
                return 1 === arguments.length ? ut.call(a, arguments[0]) : (e = a,
                t = Rt.call(arguments),
                typeof t[t.length - 1] === zt && t.pop(),
                n = t[t.length - 1],
                i = gt.applyEventMap(t[0], s),
                kt.mouseAndTouchPresent && i.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (st.setupMouseMute(),
                o = 2 === t.length ? null  : t[1],
                r = i.indexOf("click") > -1 && i.indexOf("touchend") > -1,
                ut.call(this, {
                    touchstart: st.muteMouse,
                    touchend: st.unMuteMouse
                }, o, {
                    bustClick: r
                })),
                typeof n === Pt && (e = a.data("handler"),
                n = e[n],
                t[t.length - 1] = function(t) {
                    n.call(e, t)
                }
                ),
                t[0] = i,
                ut.apply(a, t),
                a)
            },
            kendoDestroy: function(e) {
                return e = e || this.data("kendoNS"),
                e && this.off("." + e),
                this
            }
        }),
        gt.jQuery = A,
        gt.eventMap = lt,
        gt.timezone = function() {
            function e(e, t) {
                var n, i, o, r = t[3], a = t[4], s = t[5], l = t[8];
                return l || (t[8] = l = {}),
                l[e] ? l[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, d[r] + 1, 1, s[0] - 24, s[1], s[2], 0)),
                i = u[a.substr(4, 3)],
                o = n.getUTCDay(),
                n.setUTCDate(n.getUTCDate() + i - o - (i > o ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, d[r], a.substr(5), s[0], s[1], s[2], 0)),
                i = u[a.substr(0, 3)],
                o = n.getUTCDay(),
                n.setUTCDate(n.getUTCDate() + i - o + (o > i ? 7 : 0))) : n = new Date(Date.UTC(e, d[r], a, s[0], s[1], s[2], 0)),
                l[e] = n)
            }
            function t(t, n, i) {
                var o, r, a, s;
                return (n = n[i]) ? (a = new Date(t).getUTCFullYear(),
                n = jQuery.grep(n, function(e) {
                    var t = e[0]
                      , n = e[1];
                    return a >= t && (n >= a || t == a && "only" == n || "max" == n)
                }),
                n.push(t),
                n.sort(function(t, n) {
                    return "number" != typeof t && (t = +e(a, t)),
                    "number" != typeof n && (n = +e(a, n)),
                    t - n
                }),
                s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1],
                isNaN(s) ? s : null ) : (o = i.split(":"),
                r = 0,
                o.length > 1 && (r = 60 * o[0] + +o[1]),
                [-1e6, "max", "-", "Jan", 1, [0, 0, 0], r, "-"])
            }
            function n(e, t, n) {
                var i, o, r, a = t[n];
                if ("string" == typeof a && (a = t[a]),
                !a)
                    throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
                for (i = a.length - 1; i >= 0 && (o = a[i][3],
                !(o && e > o)); i--)
                    ;
                if (r = a[i + 1],
                !r)
                    throw Error('Timezone "' + n + '" not found on ' + e + ".");
                return r
            }
            function i(e, i, o, r) {
                typeof e != Mt && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                var a = n(e, i, r);
                return {
                    zone: a,
                    rule: t(e, o, a[1])
                }
            }
            function o(e, t) {
                var n, o, r;
                return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = i(e, this.zones, this.rules, t),
                o = n.zone,
                r = n.rule,
                gt.parseFloat(r ? o[0] - r[6] : o[0]))
            }
            function r(e, t) {
                var n = i(e, this.zones, this.rules, t)
                  , o = n.zone
                  , r = n.rule
                  , a = o[2];
                return a.indexOf("/") >= 0 ? a.split("/")[r && +r[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", r && "-" != r[7] ? r[7] : "") : a
            }
            function a(e, t, n) {
                var i, o;
                return typeof t == Pt && (t = this.offset(e, t)),
                typeof n == Pt && (n = this.offset(e, n)),
                i = e.getTimezoneOffset(),
                e = new Date(e.getTime() + 6e4 * (t - n)),
                o = e.getTimezoneOffset(),
                new Date(e.getTime() + 6e4 * (o - i))
            }
            function s(e, t) {
                return this.convert(e, e.getTimezoneOffset(), t)
            }
            function l(e, t) {
                return this.convert(e, t, e.getTimezoneOffset())
            }
            function c(e) {
                return this.apply(new Date(e), "Etc/UTC")
            }
            var d = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            }
              , u = {
                Sun: 0,
                Mon: 1,
                Tue: 2,
                Wed: 3,
                Thu: 4,
                Fri: 5,
                Sat: 6
            };
            return {
                zones: {},
                rules: {},
                offset: o,
                convert: a,
                apply: s,
                remove: l,
                abbr: r,
                toLocalDate: c
            }
        }(),
        gt.date = function() {
            function e(e, t) {
                return 0 === t && 23 === e.getHours() ? (e.setHours(e.getHours() + 2),
                !0) : !1
            }
            function t(t, n, i) {
                var o = t.getHours();
                i = i || 1,
                n = (n - t.getDay() + 7 * i) % 7,
                t.setDate(t.getDate() + n),
                e(t, o)
            }
            function n(e, n, i) {
                return e = new Date(e),
                t(e, n, i),
                e
            }
            function i(e) {
                return new Date(e.getFullYear(),e.getMonth(),1)
            }
            function o(e) {
                var t = new Date(e.getFullYear(),e.getMonth() + 1,0)
                  , n = i(e)
                  , o = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                return o && t.setHours(n.getHours() + o / 60),
                t
            }
            function r(t) {
                return t = new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0),
                e(t, 0),
                t
            }
            function a(e) {
                return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
            }
            function s(e) {
                return e.getTime() - r(e)
            }
            function l(e, t, n) {
                var i, o = s(t), r = s(n);
                return e && o != r ? (t >= n && (n += m),
                i = s(e),
                o > i && (i += m),
                o > r && (r += m),
                i >= o && r >= i) : !0
            }
            function c(e, t, n) {
                var i, o = t.getTime(), r = n.getTime();
                return o >= r && (r += m),
                i = e.getTime(),
                i >= o && r >= i
            }
            function d(t, n) {
                var i = t.getHours();
                return t = new Date(t),
                u(t, n * m),
                e(t, i),
                t
            }
            function u(e, t, n) {
                var i, o = e.getTimezoneOffset();
                e.setTime(e.getTime() + t),
                n || (i = e.getTimezoneOffset() - o,
                e.setTime(e.getTime() + i * g))
            }
            function h() {
                return r(new Date)
            }
            function f(e) {
                return r(e).getTime() == h().getTime()
            }
            function p(e) {
                var t = new Date(1980,1,1,0,0,0);
                return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()),
                t
            }
            var g = 6e4
              , m = 864e5;
            return {
                adjustDST: e,
                dayOfWeek: n,
                setDayOfWeek: t,
                getDate: r,
                isInDateRange: c,
                isInTimeRange: l,
                isToday: f,
                nextDay: function(e) {
                    return d(e, 1)
                },
                previousDay: function(e) {
                    return d(e, -1)
                },
                toUtcTime: a,
                MS_PER_DAY: m,
                MS_PER_HOUR: 60 * g,
                MS_PER_MINUTE: g,
                setTime: u,
                addDays: d,
                today: h,
                toInvariantTime: p,
                firstDayOfMonth: i,
                lastDayOfMonth: o,
                getMilliseconds: s
            }
        }(),
        gt.stripWhitespace = function(e) {
            var t, n, i;
            if (document.createNodeIterator)
                for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function(t) {
                    return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                }, !1); t.nextNode(); )
                    t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
            else
                for (n = 0; e.childNodes.length > n; n++)
                    i = e.childNodes[n],
                    3 != i.nodeType || /\S/.test(i.nodeValue) || (e.removeChild(i),
                    n--),
                    1 == i.nodeType && gt.stripWhitespace(i)
        }
        ,
        ft = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        }
        ,
        gt.animationFrame = function(e) {
            ft.call(t, e)
        }
        ,
        pt = [],
        gt.queueAnimation = function(e) {
            pt[pt.length] = e,
            1 === pt.length && gt.runNextAnimation()
        }
        ,
        gt.runNextAnimation = function() {
            gt.animationFrame(function() {
                pt[0] && (pt.shift()(),
                pt[0] && gt.runNextAnimation())
            })
        }
        ,
        gt.parseQueryStringParams = function(e) {
            for (var t = e.split("?")[1] || "", n = {}, i = t.split(/&|=/), o = i.length, r = 0; o > r; r += 2)
                "" !== i[r] && (n[decodeURIComponent(i[r])] = decodeURIComponent(i[r + 1]));
            return n
        }
        ,
        gt.elementUnderCursor = function(e) {
            return document.elementFromPoint(e.x.client, e.y.client)
        }
        ,
        gt.wheelDeltaY = function(e) {
            var t, i = e.originalEvent, o = i.wheelDeltaY;
            return i.wheelDelta ? (o === n || o) && (t = i.wheelDelta) : i.detail && i.axis === i.VERTICAL_AXIS && (t = 10 * -i.detail),
            t
        }
        ,
        gt.throttle = function(e, t) {
            var i, o, r = 0;
            return !t || 0 >= t ? e : (o = function() {
                function o() {
                    e.apply(a, l),
                    r = +new Date
                }
                var a = this
                  , s = +new Date - r
                  , l = arguments;
                return r ? (i && clearTimeout(i),
                s > t ? o() : i = setTimeout(o, t - s),
                n) : o()
            }
            ,
            o.cancel = function() {
                clearTimeout(i)
            }
            ,
            o)
        }
        ,
        gt.caret = function(t, i, o) {
            var r, a, s, l, c = i !== n;
            if (o === n && (o = i),
            t[0] && (t = t[0]),
            !c || !t.disabled) {
                try {
                    t.selectionStart !== n ? c ? (t.focus(),
                    t.setSelectionRange(i, o)) : i = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(),
                    r = t.createTextRange(),
                    c ? (r.collapse(!0),
                    r.moveStart("character", i),
                    r.moveEnd("character", o - i),
                    r.select()) : (a = r.duplicate(),
                    r.moveToBookmark(document.selection.createRange().getBookmark()),
                    a.setEndPoint("EndToStart", r),
                    s = a.text.length,
                    l = s + r.text.length,
                    i = [s, l]))
                } catch (d) {
                    i = []
                }
                return i
            }
        }
        ,
        gt.compileMobileDirective = function(e, n) {
            var i = t.angular;
            return e.attr("data-" + gt.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")),
            i.element(e).injector().invoke(["$compile", function(t) {
                t(e)(n),
                /^\$(digest|apply)$/.test(n.$$phase) || n.$digest()
            }
            ]),
            gt.widgetInstance(e, gt.mobile.ui)
        }
        ,
        gt.antiForgeryTokens = function() {
            var t = {}
              , i = e("meta[name=csrf-token],meta[name=_csrf]").attr("content")
              , o = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
            return e("input[name^='__RequestVerificationToken']").each(function() {
                t[this.name] = this.value
            }),
            o !== n && i !== n && (t[o] = i),
            t
        }
        ,
        function() {
            function n(t, n, i, o) {
                var r, a, s = e("<form>").attr({
                    action: i,
                    method: "POST",
                    target: o
                }), l = gt.antiForgeryTokens();
                l.fileName = n,
                r = t.split(";base64,"),
                l.contentType = r[0].replace("data:", ""),
                l.base64 = r[1];
                for (a in l)
                    l.hasOwnProperty(a) && e("<input>").attr({
                        value: l[a],
                        name: a,
                        type: "hidden"
                    }).appendTo(s);
                s.appendTo("body").submit().remove()
            }
            function i(e, t) {
                var n, i, o, r, a, s = e;
                if ("string" == typeof e) {
                    for (n = e.split(";base64,"),
                    i = n[0],
                    o = atob(n[1]),
                    r = new Uint8Array(o.length),
                    a = 0; o.length > a; a++)
                        r[a] = o.charCodeAt(a);
                    s = new Blob([r.buffer],{
                        type: i
                    })
                }
                navigator.msSaveBlob(s, t)
            }
            function o(e, n) {
                t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)),
                r.download = n,
                r.href = e;
                var i = document.createEvent("MouseEvents");
                i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null ),
                r.dispatchEvent(i)
            }
            var r = document.createElement("a")
              , a = "download" in r;
            gt.saveAs = function(e) {
                var t = n;
                e.forceProxy || (a ? t = o : navigator.msSaveBlob && (t = i)),
                t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget)
            }
        }()
    }(jQuery, window),
    function(e, t) {
        function n(e) {
            return parseInt(e, 10)
        }
        function i(e, t) {
            return n(e.css(t))
        }
        function o(e) {
            var t, n = [];
            for (t in e)
                n.push(t);
            return n
        }
        function r(e) {
            for (var t in e)
                -1 != U.indexOf(t) && -1 == W.indexOf(t) && delete e[t];
            return e
        }
        function a(e, t) {
            var n, i, o, r, a = [], s = {};
            for (i in t)
                n = i.toLowerCase(),
                r = E && -1 != U.indexOf(n),
                !P.hasHW3D && r && -1 == W.indexOf(n) ? delete t[i] : (o = t[i],
                r ? a.push(i + "(" + o + ")") : s[i] = o);
            return a.length && (s[st] = a.join(" ")),
            s
        }
        function s(e, t) {
            var i, o, r;
            return E ? (i = e.css(st),
            i == Q ? "scale" == t ? 1 : 0 : (o = i.match(RegExp(t + "\\s*\\(([\\d\\w\\.]+)")),
            r = 0,
            o ? r = n(o[1]) : (o = i.match(F) || [0, 0, 0, 0, 0],
            t = t.toLowerCase(),
            O.test(t) ? r = parseFloat(o[3] / o[2]) : "translatey" == t ? r = parseFloat(o[4] / o[2]) : "scale" == t ? r = parseFloat(o[2]) : "rotate" == t && (r = parseFloat(Math.atan2(o[2], o[1])))),
            r)) : parseFloat(e.css(t))
        }
        function l(e) {
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
        function c(e, t) {
            var n = p.extend(t)
              , i = n.prototype.directions;
            S[l(e)] = n,
            S.Element.prototype[e] = function(e, t, i, o) {
                return new n(this.element,e,t,i,o)
            }
            ,
            T(i, function(t, i) {
                S.Element.prototype[e + l(i)] = function(e, t, o) {
                    return new n(this.element,i,e,t,o)
                }
            })
        }
        function d(e, n, i, o) {
            c(e, {
                directions: m,
                startValue: function(e) {
                    return this._startValue = e,
                    this
                },
                endValue: function(e) {
                    return this._endValue = e,
                    this
                },
                shouldHide: function() {
                    return this._shouldHide
                },
                prepare: function(e, r) {
                    var a, s, l = this, c = "out" === this._direction, d = l.element.data(n), u = !(isNaN(d) || d == i);
                    a = u ? d : t !== this._startValue ? this._startValue : c ? i : o,
                    s = t !== this._endValue ? this._endValue : c ? o : i,
                    this._reverse ? (e[n] = s,
                    r[n] = a) : (e[n] = a,
                    r[n] = s),
                    l._shouldHide = r[n] === o
                }
            })
        }
        function u(e, t) {
            var n = C.directions[t].vertical
              , i = e[n ? Z : K]() / 2 + "px";
            return _[t].replace("$size", i)
        }
        var h, f, p, g, m, v, _, y, w, b, x, k, C = window.kendo, S = C.effects, T = e.each, D = e.extend, A = e.proxy, P = C.support, M = P.browser, E = P.transforms, I = P.transitions, B = {
            scale: 0,
            scalex: 0,
            scaley: 0,
            scale3d: 0
        }, z = {
            translate: 0,
            translatex: 0,
            translatey: 0,
            translate3d: 0
        }, L = t !== document.documentElement.style.zoom && !E, F = /matrix3?d?\s*\(.*,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?/i, R = /^(-?[\d\.\-]+)?[\w\s]*,?\s*(-?[\d\.\-]+)?[\w\s]*/i, O = /translatex?$/i, N = /(zoom|fade|expand)(\w+)/, H = /(zoom|fade|expand)/, V = /[xy]$/i, U = ["perspective", "rotate", "rotatex", "rotatey", "rotatez", "rotate3d", "scale", "scalex", "scaley", "scalez", "scale3d", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "translatez", "translate3d", "matrix", "matrix3d"], W = ["rotate", "scale", "scalex", "scaley", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "matrix"], j = {
            rotate: "deg",
            scale: "",
            skew: "px",
            translate: "px"
        }, G = E.css, q = Math.round, $ = "", Y = "px", Q = "none", X = "auto", K = "width", Z = "height", J = "hidden", et = "origin", tt = "abortId", nt = "overflow", it = "translate", ot = "position", rt = "completeCallback", at = G + "transition", st = G + "transform", lt = G + "backface-visibility", ct = G + "perspective", dt = "1500px", ut = "perspective(" + dt + ")", ht = {
            left: {
                reverse: "right",
                property: "left",
                transition: "translatex",
                vertical: !1,
                modifier: -1
            },
            right: {
                reverse: "left",
                property: "left",
                transition: "translatex",
                vertical: !1,
                modifier: 1
            },
            down: {
                reverse: "up",
                property: "top",
                transition: "translatey",
                vertical: !0,
                modifier: 1
            },
            up: {
                reverse: "down",
                property: "top",
                transition: "translatey",
                vertical: !0,
                modifier: -1
            },
            top: {
                reverse: "bottom"
            },
            bottom: {
                reverse: "top"
            },
            "in": {
                reverse: "out",
                modifier: -1
            },
            out: {
                reverse: "in",
                modifier: 1
            },
            vertical: {
                reverse: "vertical"
            },
            horizontal: {
                reverse: "horizontal"
            }
        };
        C.directions = ht,
        D(e.fn, {
            kendoStop: function(e, t) {
                return I ? S.stopQueue(this, e || !1, t || !1) : this.stop(e, t)
            }
        }),
        E && !I && (T(W, function(n, i) {
            e.fn[i] = function(n) {
                if (t === n)
                    return s(this, i);
                var o = e(this)[0]
                  , r = i + "(" + n + j[i.replace(V, "")] + ")";
                return -1 == o.style.cssText.indexOf(st) ? e(this).css(st, r) : o.style.cssText = o.style.cssText.replace(RegExp(i + "\\(.*?\\)", "i"), r),
                this
            }
            ,
            e.fx.step[i] = function(t) {
                e(t.elem)[i](t.now)
            }
        }),
        h = e.fx.prototype.cur,
        e.fx.prototype.cur = function() {
            return -1 != W.indexOf(this.prop) ? parseFloat(e(this.elem)[this.prop]()) : h.apply(this, arguments)
        }
        ),
        C.toggleClass = function(e, t, n, i) {
            return t && (t = t.split(" "),
            I && (n = D({
                exclusive: "all",
                duration: 400,
                ease: "ease-out"
            }, n),
            e.css(at, n.exclusive + " " + n.duration + "ms " + n.ease),
            setTimeout(function() {
                e.css(at, "").css(Z)
            }, n.duration)),
            T(t, function(t, n) {
                e.toggleClass(n, i)
            })),
            e
        }
        ,
        C.parseEffects = function(e, t) {
            var n = {};
            return "string" == typeof e ? T(e.split(" "), function(e, i) {
                var o = !H.test(i)
                  , r = i.replace(N, function(e, t, n) {
                    return t + ":" + n.toLowerCase()
                })
                  , a = r.split(":")
                  , s = a[1]
                  , l = {};
                a.length > 1 && (l.direction = t && o ? ht[s].reverse : s),
                n[a[0]] = l
            }) : T(e, function(e) {
                var i = this.direction;
                i && t && !H.test(e) && (this.direction = ht[i].reverse),
                n[e] = this
            }),
            n
        }
        ,
        I && D(S, {
            transition: function(t, n, i) {
                var r, s, l, c, d = 0, u = t.data("keys") || [];
                i = D({
                    duration: 200,
                    ease: "ease-out",
                    complete: null ,
                    exclusive: "all"
                }, i),
                l = !1,
                c = function() {
                    l || (l = !0,
                    s && (clearTimeout(s),
                    s = null ),
                    t.removeData(tt).dequeue().css(at, "").css(at),
                    i.complete.call(t))
                }
                ,
                i.duration = e.fx ? e.fx.speeds[i.duration] || i.duration : i.duration,
                r = a(t, n),
                e.merge(u, o(r)),
                t.data("keys", e.unique(u)).height(),
                t.css(at, i.exclusive + " " + i.duration + "ms " + i.ease).css(at),
                t.css(r).css(st),
                I.event && (t.one(I.event, c),
                0 !== i.duration && (d = 500)),
                s = setTimeout(c, i.duration + d),
                t.data(tt, s),
                t.data(rt, c)
            },
            stopQueue: function(e, t, n) {
                var i, o = e.data("keys"), r = !n && o, a = e.data(rt);
                return r && (i = C.getComputedStyles(e[0], o)),
                a && a(),
                r && e.css(i),
                e.removeData("keys").stop(t)
            }
        }),
        f = C.Class.extend({
            init: function(e, t) {
                var n = this;
                n.element = e,
                n.effects = [],
                n.options = t,
                n.restore = []
            },
            run: function(t) {
                var n, i, o, s, l, c, d, u = this, h = t.length, f = u.element, p = u.options, g = e.Deferred(), m = {}, v = {};
                for (u.effects = t,
                g.then(e.proxy(u, "complete")),
                f.data("animating", !0),
                i = 0; h > i; i++)
                    for (n = t[i],
                    n.setReverse(p.reverse),
                    n.setOptions(p),
                    u.addRestoreProperties(n.restore),
                    n.prepare(m, v),
                    l = n.children(),
                    o = 0,
                    c = l.length; c > o; o++)
                        l[o].duration(p.duration).run();
                for (d in p.effects)
                    D(v, p.effects[d].properties);
                for (f.is(":visible") || D(m, {
                    display: f.data("olddisplay") || "block"
                }),
                E && !p.reset && (s = f.data("targetTransform"),
                s && (m = D(s, m))),
                m = a(f, m),
                E && !I && (m = r(m)),
                f.css(m).css(st),
                i = 0; h > i; i++)
                    t[i].setup();
                return p.init && p.init(),
                f.data("targetTransform", v),
                S.animate(f, v, D({}, p, {
                    complete: g.resolve
                })),
                g.promise()
            },
            stop: function() {
                e(this.element).kendoStop(!0, !0)
            },
            addRestoreProperties: function(e) {
                for (var t, n = this.element, i = 0, o = e.length; o > i; i++)
                    t = e[i],
                    this.restore.push(t),
                    n.data(t) || n.data(t, n.css(t))
            },
            restoreCallback: function() {
                var e, t, n, i = this.element;
                for (e = 0,
                t = this.restore.length; t > e; e++)
                    n = this.restore[e],
                    i.css(n, i.data(n))
            },
            complete: function() {
                var t = this
                  , n = 0
                  , i = t.element
                  , o = t.options
                  , r = t.effects
                  , a = r.length;
                for (i.removeData("animating").dequeue(),
                o.hide && i.data("olddisplay", i.css("display")).hide(),
                this.restoreCallback(),
                L && !E && setTimeout(e.proxy(this, "restoreCallback"), 0); a > n; n++)
                    r[n].teardown();
                o.completeCallback && o.completeCallback(i)
            }
        }),
        S.promise = function(e, t) {
            var n, i, o, r = [], a = new f(e,t), s = C.parseEffects(t.effects);
            t.effects = s;
            for (o in s)
                n = S[l(o)],
                n && (i = new n(e,s[o].direction),
                r.push(i));
            r[0] ? a.run(r) : (e.is(":visible") || e.css({
                display: e.data("olddisplay") || "block"
            }).css("display"),
            t.init && t.init(),
            e.dequeue(),
            a.complete())
        }
        ,
        D(S, {
            animate: function(n, o, a) {
                var s = a.transition !== !1;
                delete a.transition,
                I && "transition" in S && s ? S.transition(n, o, a) : E ? n.animate(r(o), {
                    queue: !1,
                    show: !1,
                    hide: !1,
                    duration: a.duration,
                    complete: a.complete
                }) : n.each(function() {
                    var n = e(this)
                      , r = {};
                    T(U, function(e, a) {
                        var s, l, c, d, u, h, f, p = o ? o[a] + " " : null ;
                        p && (l = o,
                        a in B && o[a] !== t ? (s = p.match(R),
                        E && D(l, {
                            scale: +s[0]
                        })) : a in z && o[a] !== t && (c = n.css(ot),
                        d = "absolute" == c || "fixed" == c,
                        n.data(it) || (d ? n.data(it, {
                            top: i(n, "top") || 0,
                            left: i(n, "left") || 0,
                            bottom: i(n, "bottom"),
                            right: i(n, "right")
                        }) : n.data(it, {
                            top: i(n, "marginTop") || 0,
                            left: i(n, "marginLeft") || 0
                        })),
                        u = n.data(it),
                        s = p.match(R),
                        s && (h = a == it + "y" ? 0 : +s[1],
                        f = a == it + "y" ? +s[1] : +s[2],
                        d ? (isNaN(u.right) ? isNaN(h) || D(l, {
                            left: u.left + h
                        }) : isNaN(h) || D(l, {
                            right: u.right - h
                        }),
                        isNaN(u.bottom) ? isNaN(f) || D(l, {
                            top: u.top + f
                        }) : isNaN(f) || D(l, {
                            bottom: u.bottom - f
                        })) : (isNaN(h) || D(l, {
                            marginLeft: u.left + h
                        }),
                        isNaN(f) || D(l, {
                            marginTop: u.top + f
                        })))),
                        !E && "scale" != a && a in l && delete l[a],
                        l && D(r, l))
                    }),
                    M.msie && delete r.scale,
                    n.animate(r, {
                        queue: !1,
                        show: !1,
                        hide: !1,
                        duration: a.duration,
                        complete: a.complete
                    })
                })
            }
        }),
        S.animatedPromise = S.promise,
        p = C.Class.extend({
            init: function(e, t) {
                var n = this;
                n.element = e,
                n._direction = t,
                n.options = {},
                n._additionalEffects = [],
                n.restore || (n.restore = [])
            },
            reverse: function() {
                return this._reverse = !0,
                this.run()
            },
            play: function() {
                return this._reverse = !1,
                this.run()
            },
            add: function(e) {
                return this._additionalEffects.push(e),
                this
            },
            direction: function(e) {
                return this._direction = e,
                this
            },
            duration: function(e) {
                return this._duration = e,
                this
            },
            compositeRun: function() {
                var e = this
                  , t = new f(e.element,{
                    reverse: e._reverse,
                    duration: e._duration
                })
                  , n = e._additionalEffects.concat([e]);
                return t.run(n)
            },
            run: function() {
                if (this._additionalEffects && this._additionalEffects[0])
                    return this.compositeRun();
                var t, n, i = this, o = i.element, s = 0, l = i.restore, c = l.length, d = e.Deferred(), u = {}, h = {}, f = i.children(), p = f.length;
                for (d.then(e.proxy(i, "_complete")),
                o.data("animating", !0),
                s = 0; c > s; s++)
                    t = l[s],
                    o.data(t) || o.data(t, o.css(t));
                for (s = 0; p > s; s++)
                    f[s].duration(i._duration).run();
                return i.prepare(u, h),
                o.is(":visible") || D(u, {
                    display: o.data("olddisplay") || "block"
                }),
                E && (n = o.data("targetTransform"),
                n && (u = D(n, u))),
                u = a(o, u),
                E && !I && (u = r(u)),
                o.css(u).css(st),
                i.setup(),
                o.data("targetTransform", h),
                S.animate(o, h, {
                    duration: i._duration,
                    complete: d.resolve
                }),
                d.promise()
            },
            stop: function() {
                var t = 0
                  , n = this.children()
                  , i = n.length;
                for (t = 0; i > t; t++)
                    n[t].stop();
                return e(this.element).kendoStop(!0, !0),
                this
            },
            restoreCallback: function() {
                var e, t, n, i = this.element;
                for (e = 0,
                t = this.restore.length; t > e; e++)
                    n = this.restore[e],
                    i.css(n, i.data(n))
            },
            _complete: function() {
                var t = this
                  , n = t.element;
                n.removeData("animating").dequeue(),
                t.restoreCallback(),
                t.shouldHide() && n.data("olddisplay", n.css("display")).hide(),
                L && !E && setTimeout(e.proxy(t, "restoreCallback"), 0),
                t.teardown()
            },
            setOptions: function(e) {
                D(!0, this.options, e)
            },
            children: function() {
                return []
            },
            shouldHide: e.noop,
            setup: e.noop,
            prepare: e.noop,
            teardown: e.noop,
            directions: [],
            setReverse: function(e) {
                return this._reverse = e,
                this
            }
        }),
        g = ["left", "right", "up", "down"],
        m = ["in", "out"],
        c("slideIn", {
            directions: g,
            divisor: function(e) {
                return this.options.divisor = e,
                this
            },
            prepare: function(e, t) {
                var n, i = this, o = i.element, r = ht[i._direction], a = -r.modifier * (r.vertical ? o.outerHeight() : o.outerWidth()), s = a / (i.options && i.options.divisor || 1) + Y, l = "0px";
                i._reverse && (n = e,
                e = t,
                t = n),
                E ? (e[r.transition] = s,
                t[r.transition] = l) : (e[r.property] = s,
                t[r.property] = l)
            }
        }),
        c("tile", {
            directions: g,
            init: function(e, t, n) {
                p.prototype.init.call(this, e, t),
                this.options = {
                    previous: n
                }
            },
            previousDivisor: function(e) {
                return this.options.previousDivisor = e,
                this
            },
            children: function() {
                var e = this
                  , t = e._reverse
                  , n = e.options.previous
                  , i = e.options.previousDivisor || 1
                  , o = e._direction
                  , r = [C.fx(e.element).slideIn(o).setReverse(t)];
                return n && r.push(C.fx(n).slideIn(ht[o].reverse).divisor(i).setReverse(!t)),
                r
            }
        }),
        d("fade", "opacity", 1, 0),
        d("zoom", "scale", 1, .01),
        c("slideMargin", {
            prepare: function(e, t) {
                var n, i = this, o = i.element, r = i.options, a = o.data(et), s = r.offset, l = i._reverse;
                l || null  !== a || o.data(et, parseFloat(o.css("margin-" + r.axis))),
                n = o.data(et) || 0,
                t["margin-" + r.axis] = l ? n : n + s
            }
        }),
        c("slideTo", {
            prepare: function(e, t) {
                var n = this
                  , i = n.element
                  , o = n.options
                  , r = o.offset.split(",")
                  , a = n._reverse;
                E ? (t.translatex = a ? 0 : r[0],
                t.translatey = a ? 0 : r[1]) : (t.left = a ? 0 : r[0],
                t.top = a ? 0 : r[1]),
                i.css("left")
            }
        }),
        c("expand", {
            directions: ["horizontal", "vertical"],
            restore: [nt],
            prepare: function(e, n) {
                var i = this
                  , o = i.element
                  , r = i.options
                  , a = i._reverse
                  , s = "vertical" === i._direction ? Z : K
                  , l = o[0].style[s]
                  , c = o.data(s)
                  , d = parseFloat(c || l)
                  , u = q(o.css(s, X)[s]());
                e.overflow = J,
                d = r && r.reset ? u || d : d || u,
                n[s] = (a ? 0 : d) + Y,
                e[s] = (a ? d : 0) + Y,
                c === t && o.data(s, l)
            },
            shouldHide: function() {
                return this._reverse
            },
            teardown: function() {
                var e = this
                  , t = e.element
                  , n = "vertical" === e._direction ? Z : K
                  , i = t.data(n);
                (i == X || i === $) && setTimeout(function() {
                    t.css(n, X).css(n)
                }, 0)
            }
        }),
        v = {
            position: "absolute",
            marginLeft: 0,
            marginTop: 0,
            scale: 1
        },
        c("transfer", {
            init: function(e, t) {
                this.element = e,
                this.options = {
                    target: t
                },
                this.restore = []
            },
            setup: function() {
                this.element.appendTo(document.body)
            },
            prepare: function(e, t) {
                var n = this
                  , i = n.element
                  , o = S.box(i)
                  , r = S.box(n.options.target)
                  , a = s(i, "scale")
                  , l = S.fillScale(r, o)
                  , c = S.transformOrigin(r, o);
                D(e, v),
                t.scale = 1,
                i.css(st, "scale(1)").css(st),
                i.css(st, "scale(" + a + ")"),
                e.top = o.top,
                e.left = o.left,
                e.transformOrigin = c.x + Y + " " + c.y + Y,
                n._reverse ? e.scale = l : t.scale = l
            }
        }),
        _ = {
            top: "rect(auto auto $size auto)",
            bottom: "rect($size auto auto auto)",
            left: "rect(auto $size auto auto)",
            right: "rect(auto auto auto $size)"
        },
        y = {
            top: {
                start: "rotatex(0deg)",
                end: "rotatex(180deg)"
            },
            bottom: {
                start: "rotatex(-180deg)",
                end: "rotatex(0deg)"
            },
            left: {
                start: "rotatey(0deg)",
                end: "rotatey(-180deg)"
            },
            right: {
                start: "rotatey(180deg)",
                end: "rotatey(0deg)"
            }
        },
        c("turningPage", {
            directions: g,
            init: function(e, t, n) {
                p.prototype.init.call(this, e, t),
                this._container = n
            },
            prepare: function(e, t) {
                var n = this
                  , i = n._reverse
                  , o = i ? ht[n._direction].reverse : n._direction
                  , r = y[o];
                e.zIndex = 1,
                n._clipInHalf && (e.clip = u(n._container, C.directions[o].reverse)),
                e[lt] = J,
                t[st] = ut + (i ? r.start : r.end),
                e[st] = ut + (i ? r.end : r.start)
            },
            setup: function() {
                this._container.append(this.element)
            },
            face: function(e) {
                return this._face = e,
                this
            },
            shouldHide: function() {
                var e = this
                  , t = e._reverse
                  , n = e._face;
                return t && !n || !t && n
            },
            clipInHalf: function(e) {
                return this._clipInHalf = e,
                this
            },
            temporary: function() {
                return this.element.addClass("temp-page"),
                this
            }
        }),
        c("staticPage", {
            directions: g,
            init: function(e, t, n) {
                p.prototype.init.call(this, e, t),
                this._container = n
            },
            restore: ["clip"],
            prepare: function(e, t) {
                var n = this
                  , i = n._reverse ? ht[n._direction].reverse : n._direction;
                e.clip = u(n._container, i),
                e.opacity = .999,
                t.opacity = 1
            },
            shouldHide: function() {
                var e = this
                  , t = e._reverse
                  , n = e._face;
                return t && !n || !t && n
            },
            face: function(e) {
                return this._face = e,
                this
            }
        }),
        c("pageturn", {
            directions: ["horizontal", "vertical"],
            init: function(e, t, n, i) {
                p.prototype.init.call(this, e, t),
                this.options = {},
                this.options.face = n,
                this.options.back = i
            },
            children: function() {
                var e, t = this, n = t.options, i = "horizontal" === t._direction ? "left" : "top", o = C.directions[i].reverse, r = t._reverse, a = n.face.clone(!0).removeAttr("id"), s = n.back.clone(!0).removeAttr("id"), l = t.element;
                return r && (e = i,
                i = o,
                o = e),
                [C.fx(n.face).staticPage(i, l).face(!0).setReverse(r), C.fx(n.back).staticPage(o, l).setReverse(r), C.fx(a).turningPage(i, l).face(!0).clipInHalf(!0).temporary().setReverse(r), C.fx(s).turningPage(o, l).clipInHalf(!0).temporary().setReverse(r)]
            },
            prepare: function(e, t) {
                e[ct] = dt,
                e.transformStyle = "preserve-3d",
                e.opacity = .999,
                t.opacity = 1
            },
            teardown: function() {
                this.element.find(".temp-page").remove()
            }
        }),
        c("flip", {
            directions: ["horizontal", "vertical"],
            init: function(e, t, n, i) {
                p.prototype.init.call(this, e, t),
                this.options = {},
                this.options.face = n,
                this.options.back = i
            },
            children: function() {
                var e, t = this, n = t.options, i = "horizontal" === t._direction ? "left" : "top", o = C.directions[i].reverse, r = t._reverse, a = t.element;
                return r && (e = i,
                i = o,
                o = e),
                [C.fx(n.face).turningPage(i, a).face(!0).setReverse(r), C.fx(n.back).turningPage(o, a).setReverse(r)]
            },
            prepare: function(e) {
                e[ct] = dt,
                e.transformStyle = "preserve-3d"
            }
        }),
        w = !P.mobileOS.android,
        b = ".km-touch-scrollbar, .km-actionsheet-wrapper",
        c("replace", {
            _before: e.noop,
            _after: e.noop,
            init: function(t, n, i) {
                p.prototype.init.call(this, t),
                this._previous = e(n),
                this._transitionClass = i
            },
            duration: function() {
                throw Error("The replace effect does not support duration setting; the effect duration may be customized through the transition class rule")
            },
            beforeTransition: function(e) {
                return this._before = e,
                this
            },
            afterTransition: function(e) {
                return this._after = e,
                this
            },
            _both: function() {
                return e().add(this._element).add(this._previous)
            },
            _containerClass: function() {
                var e = this._direction
                  , t = "k-fx k-fx-start k-fx-" + this._transitionClass;
                return e && (t += " k-fx-" + e),
                this._reverse && (t += " k-fx-reverse"),
                t
            },
            complete: function(t) {
                if (!(!this.deferred || t && e(t.target).is(b))) {
                    var n = this.container;
                    n.removeClass("k-fx-end").removeClass(this._containerClass()).off(I.event, this.completeProxy),
                    this._previous.hide().removeClass("k-fx-current"),
                    this.element.removeClass("k-fx-next"),
                    w && n.css(nt, ""),
                    this.isAbsolute || this._both().css(ot, ""),
                    this.deferred.resolve(),
                    delete this.deferred
                }
            },
            run: function() {
                if (this._additionalEffects && this._additionalEffects[0])
                    return this.compositeRun();
                var t, n = this, i = n.element, o = n._previous, r = i.parents().filter(o.parents()).first(), a = n._both(), s = e.Deferred(), l = i.css(ot);
                return r.length || (r = i.parent()),
                this.container = r,
                this.deferred = s,
                this.isAbsolute = "absolute" == l,
                this.isAbsolute || a.css(ot, "absolute"),
                w && (t = r.css(nt),
                r.css(nt, "hidden")),
                I ? (i.addClass("k-fx-hidden"),
                r.addClass(this._containerClass()),
                this.completeProxy = e.proxy(this, "complete"),
                r.on(I.event, this.completeProxy),
                C.animationFrame(function() {
                    i.removeClass("k-fx-hidden").addClass("k-fx-next"),
                    o.css("display", "").addClass("k-fx-current"),
                    n._before(o, i),
                    C.animationFrame(function() {
                        r.removeClass("k-fx-start").addClass("k-fx-end"),
                        n._after(o, i)
                    })
                })) : this.complete(),
                s.promise()
            },
            stop: function() {
                this.complete()
            }
        }),
        x = C.Class.extend({
            init: function() {
                var e = this;
                e._tickProxy = A(e._tick, e),
                e._started = !1
            },
            tick: e.noop,
            done: e.noop,
            onEnd: e.noop,
            onCancel: e.noop,
            start: function() {
                this.enabled() && (this.done() ? this.onEnd() : (this._started = !0,
                C.animationFrame(this._tickProxy)))
            },
            enabled: function() {
                return !0
            },
            cancel: function() {
                this._started = !1,
                this.onCancel()
            },
            _tick: function() {
                var e = this;
                e._started && (e.tick(),
                e.done() ? (e._started = !1,
                e.onEnd()) : C.animationFrame(e._tickProxy))
            }
        }),
        k = x.extend({
            init: function(e) {
                var t = this;
                D(t, e),
                x.fn.init.call(t)
            },
            done: function() {
                return this.timePassed() >= this.duration
            },
            timePassed: function() {
                return Math.min(this.duration, new Date - this.startDate)
            },
            moveTo: function(e) {
                var t = this
                  , n = t.movable;
                t.initial = n[t.axis],
                t.delta = e.location - t.initial,
                t.duration = "number" == typeof e.duration ? e.duration : 300,
                t.tick = t._easeProxy(e.ease),
                t.startDate = new Date,
                t.start()
            },
            _easeProxy: function(e) {
                var t = this;
                return function() {
                    t.movable.moveAxis(t.axis, e(t.timePassed(), t.initial, t.delta, t.duration))
                }
            }
        }),
        D(k, {
            easeOutExpo: function(e, t, n, i) {
                return e == i ? t + n : n * (-Math.pow(2, -10 * e / i) + 1) + t
            },
            easeOutBack: function(e, t, n, i, o) {
                return o = 1.70158,
                n * ((e = e / i - 1) * e * ((o + 1) * e + o) + 1) + t
            }
        }),
        S.Animation = x,
        S.Transition = k,
        S.createEffect = c,
        S.box = function(t) {
            t = e(t);
            var n = t.offset();
            return n.width = t.outerWidth(),
            n.height = t.outerHeight(),
            n
        }
        ,
        S.transformOrigin = function(e, t) {
            var n = (e.left - t.left) * t.width / (t.width - e.width)
              , i = (e.top - t.top) * t.height / (t.height - e.height);
            return {
                x: isNaN(n) ? 0 : n,
                y: isNaN(i) ? 0 : i
            }
        }
        ,
        S.fillScale = function(e, t) {
            return Math.min(e.width / t.width, e.height / t.height)
        }
        ,
        S.fitScale = function(e, t) {
            return Math.max(e.width / t.width, e.height / t.height)
        }
    }(window.kendo.jQuery),
    function(e, t) {
        function n(i, r) {
            var l, c, d, u, h, f, p, g, m = [], v = i.logic || "and", _ = i.filters;
            for (l = 0,
            c = _.length; c > l; l++)
                i = _[l],
                d = i.field,
                p = i.value,
                f = i.operator,
                i.filters ? i = n(i, r) : (g = i.ignoreCase,
                d = d.replace(/\./g, "/"),
                i = a[f],
                r && (i = s[f]),
                i && p !== t && (u = e.type(p),
                "string" === u ? (h = "'{1}'",
                p = p.replace(/'/g, "''"),
                g === !0 && (d = "tolower(" + d + ")")) : h = "date" === u ? r ? "{1:yyyy-MM-ddTHH:mm:ss+00:00}" : "datetime'{1:yyyy-MM-ddTHH:mm:ss}'" : "{1}",
                i.length > 3 ? "substringof" !== i ? h = "{0}({2}," + h + ")" : (h = "{0}(" + h + ",{2})",
                "doesnotcontain" === f && (r ? (h = "{0}({2},'{1}') eq -1",
                i = "indexof") : h += " eq false")) : h = "{2} {0} " + h,
                i = o.format(h, i, p, d))),
                m.push(i);
            return i = m.join(" " + v + " "),
            m.length > 1 && (i = "(" + i + ")"),
            i
        }
        function i(e) {
            for (var t in e)
                0 === t.indexOf("@odata") && delete e[t]
        }
        var o = window.kendo
          , r = e.extend
          , a = {
            eq: "eq",
            neq: "ne",
            gt: "gt",
            gte: "ge",
            lt: "lt",
            lte: "le",
            contains: "substringof",
            doesnotcontain: "substringof",
            endswith: "endswith",
            startswith: "startswith"
        }
          , s = r({}, a, {
            contains: "contains"
        })
          , l = {
            pageSize: e.noop,
            page: e.noop,
            filter: function(e, t, i) {
                t && (e.$filter = n(t, i))
            },
            sort: function(t, n) {
                var i = e.map(n, function(e) {
                    var t = e.field.replace(/\./g, "/");
                    return "desc" === e.dir && (t += " desc"),
                    t
                }).join(",");
                i && (t.$orderby = i)
            },
            skip: function(e, t) {
                t && (e.$skip = t)
            },
            take: function(e, t) {
                t && (e.$top = t)
            }
        }
          , c = {
            read: {
                dataType: "jsonp"
            }
        };
        r(!0, o.data, {
            schemas: {
                odata: {
                    type: "json",
                    data: function(e) {
                        return e.d.results || [e.d]
                    },
                    total: "d.__count"
                }
            },
            transports: {
                odata: {
                    read: {
                        cache: !0,
                        dataType: "jsonp",
                        jsonp: "$callback"
                    },
                    update: {
                        cache: !0,
                        dataType: "json",
                        contentType: "application/json",
                        type: "PUT"
                    },
                    create: {
                        cache: !0,
                        dataType: "json",
                        contentType: "application/json",
                        type: "POST"
                    },
                    destroy: {
                        cache: !0,
                        dataType: "json",
                        type: "DELETE"
                    },
                    parameterMap: function(e, t, n) {
                        var i, r, a, s;
                        if (e = e || {},
                        t = t || "read",
                        s = (this.options || c)[t],
                        s = s ? s.dataType : "json",
                        "read" === t) {
                            i = {
                                $inlinecount: "allpages"
                            },
                            "json" != s && (i.$format = "json");
                            for (a in e)
                                l[a] ? l[a](i, e[a], n) : i[a] = e[a]
                        } else {
                            if ("json" !== s)
                                throw Error("Only json dataType can be used for " + t + " operation.");
                            if ("destroy" !== t) {
                                for (a in e)
                                    r = e[a],
                                    "number" == typeof r && (e[a] = r + "");
                                i = o.stringify(e)
                            }
                        }
                        return i
                    }
                }
            }
        }),
        r(!0, o.data, {
            schemas: {
                "odata-v4": {
                    type: "json",
                    data: function(t) {
                        return t = e.extend({}, t),
                        i(t),
                        t.value ? t.value : [t]
                    },
                    total: function(e) {
                        return e["@odata.count"]
                    }
                }
            },
            transports: {
                "odata-v4": {
                    read: {
                        cache: !0,
                        dataType: "json"
                    },
                    update: {
                        cache: !0,
                        dataType: "json",
                        contentType: "application/json;IEEE754Compatible=true",
                        type: "PUT"
                    },
                    create: {
                        cache: !0,
                        dataType: "json",
                        contentType: "application/json;IEEE754Compatible=true",
                        type: "POST"
                    },
                    destroy: {
                        cache: !0,
                        dataType: "json",
                        type: "DELETE"
                    },
                    parameterMap: function(e, t) {
                        var n = o.data.transports.odata.parameterMap(e, t, !0);
                        return "read" == t && (n.$count = !0,
                        delete n.$inlinecount),
                        n
                    }
                }
            }
        })
    }(window.kendo.jQuery),
    function(e, t) {
        var n = window.kendo
          , i = e.isArray
          , o = e.isPlainObject
          , r = e.map
          , a = e.each
          , s = e.extend
          , l = n.getter
          , c = n.Class
          , d = c.extend({
            init: function(e) {
                var t, l, c, d, u = this, h = e.total, f = e.model, p = e.parse, g = e.errors, m = e.serialize, v = e.data;
                f && (o(f) && (t = e.modelBase || n.data.Model,
                f.fields && a(f.fields, function(e, t) {
                    t = o(t) && t.field ? s(t, {
                        field: u.getter(t.field)
                    }) : {
                        field: u.getter(t)
                    },
                    f.fields[e] = t
                }),
                l = f.id,
                l && (c = {},
                c[u.xpathToMember(l, !0)] = {
                    field: u.getter(l)
                },
                f.fields = s(c, f.fields),
                f.id = u.xpathToMember(l)),
                f = t.define(f)),
                u.model = f),
                h && ("string" == typeof h ? (h = u.getter(h),
                u.total = function(e) {
                    return parseInt(h(e), 10)
                }
                ) : "function" == typeof h && (u.total = h)),
                g && ("string" == typeof g ? (g = u.getter(g),
                u.errors = function(e) {
                    return g(e) || null 
                }
                ) : "function" == typeof g && (u.errors = g)),
                v && ("string" == typeof v ? (v = u.xpathToMember(v),
                u.data = function(e) {
                    var t, n = u.evaluate(e, v);
                    return n = i(n) ? n : [n],
                    u.model && f.fields ? (t = new u.model,
                    r(n, function(e) {
                        if (e) {
                            var n, i = {};
                            for (n in f.fields)
                                i[n] = t._parse(n, f.fields[n].field(e));
                            return i
                        }
                    })) : n
                }
                ) : "function" == typeof v && (u.data = v)),
                "function" == typeof p && (d = u.parse,
                u.parse = function(e) {
                    var t = p.call(u, e);
                    return d.call(u, t)
                }
                ),
                "function" == typeof m && (u.serialize = m)
            },
            total: function(e) {
                return this.data(e).length
            },
            errors: function(e) {
                return e ? e.errors : null 
            },
            serialize: function(e) {
                return e
            },
            parseDOM: function(e) {
                var n, o, r, a, s, l, c, d = {}, u = e.attributes, h = u.length;
                for (c = 0; h > c; c++)
                    l = u[c],
                    d["@" + l.nodeName] = l.nodeValue;
                for (o = e.firstChild; o; o = o.nextSibling)
                    r = o.nodeType,
                    3 === r || 4 === r ? d["#text"] = o.nodeValue : 1 === r && (n = this.parseDOM(o),
                    a = o.nodeName,
                    s = d[a],
                    i(s) ? s.push(n) : s = s !== t ? [s, n] : n,
                    d[a] = s);
                return d
            },
            evaluate: function(e, t) {
                for (var n, o, r, a, s, l = t.split("."); n = l.shift(); )
                    if (e = e[n],
                    i(e)) {
                        for (o = [],
                        t = l.join("."),
                        s = 0,
                        r = e.length; r > s; s++)
                            a = this.evaluate(e[s], t),
                            a = i(a) ? a : [a],
                            o.push.apply(o, a);
                        return o
                    }
                return e
            },
            parse: function(t) {
                var n, i, o = {};
                return n = t.documentElement || e.parseXML(t).documentElement,
                i = this.parseDOM(n),
                o[n.nodeName] = i,
                o
            },
            xpathToMember: function(e, t) {
                return e ? (e = e.replace(/^\//, "").replace(/\//g, "."),
                e.indexOf("@") >= 0 ? e.replace(/\.?(@.*)/, t ? "$1" : '["$1"]') : e.indexOf("text()") >= 0 ? e.replace(/(\.?text\(\))/, t ? "#text" : '["#text"]') : e) : ""
            },
            getter: function(e) {
                return l(this.xpathToMember(e), !0)
            }
        });
        e.extend(!0, n.data, {
            XmlDataReader: d,
            readers: {
                xml: d
            }
        })
    }(window.kendo.jQuery);
    var A = 0;
    !function(e, t) {
        function n(e, t, n, i) {
            return function(o) {
                var r, a = {};
                for (r in o)
                    a[r] = o[r];
                a.field = i ? n + "." + o.field : n,
                t == wt && e._notifyChange && e._notifyChange(a),
                e.trigger(t, a)
            }
        }
        function i(t, n) {
            if (t === n)
                return !0;
            var o, r = e.type(t), a = e.type(n);
            if (r !== a)
                return !1;
            if ("date" === r)
                return t.getTime() === n.getTime();
            if ("object" !== r && "array" !== r)
                return !1;
            for (o in t)
                if (!i(t[o], n[o]))
                    return !1;
            return !0
        }
        function o(e, t) {
            var n, i;
            for (i in e) {
                if (n = e[i],
                it(n) && n.field && n.field === t)
                    return n;
                if (n === t)
                    return n
            }
            return null 
        }
        function r(e) {
            this.data = e || []
        }
        function a(e, n) {
            if (e) {
                var i = typeof e === pt ? {
                    field: e,
                    dir: n
                } : e
                  , o = rt(i) ? i : i !== t ? [i] : [];
                return at(o, function(e) {
                    return !!e.dir
                })
            }
        }
        function s(e) {
            var t, n, i, o, r = e.filters;
            if (r)
                for (t = 0,
                n = r.length; n > t; t++)
                    i = r[t],
                    o = i.operator,
                    o && typeof o === pt && (i.operator = W[o.toLowerCase()] || o),
                    s(i)
        }
        function l(e) {
            return e && !ot(e) ? ((rt(e) || !e.filters) && (e = {
                logic: "and",
                filters: rt(e) ? e : [e]
            }),
            s(e),
            e) : t
        }
        function c(e) {
            return rt(e) ? e : [e]
        }
        function d(e, n) {
            var i = typeof e === pt ? {
                field: e,
                dir: n
            } : e
              , o = rt(i) ? i : i !== t ? [i] : [];
            return N(o, function(e) {
                return {
                    field: e.field,
                    dir: e.dir || "asc",
                    aggregates: e.aggregates
                }
            })
        }
        function u(e, t) {
            return e && e.getTime && t && t.getTime ? e.getTime() === t.getTime() : e === t
        }
        function h(e, t, n, i, o, r) {
            var a, s, l, c, d;
            for (t = t || [],
            c = t.length,
            a = 0; c > a; a++)
                s = t[a],
                l = s.aggregate,
                d = s.field,
                e[d] = e[d] || {},
                r[d] = r[d] || {},
                r[d][l] = r[d][l] || {},
                e[d][l] = j[l.toLowerCase()](e[d][l], n, dt.accessor(d), i, o, r[d][l])
        }
        function f(e) {
            return "number" == typeof e && !isNaN(e)
        }
        function p(e) {
            return e && e.getTime
        }
        function g(e) {
            var t, n = e.length, i = Array(n);
            for (t = 0; n > t; t++)
                i[t] = e[t].toJSON();
            return i
        }
        function m(e, t, n, i, o) {
            var r, a, s, l, c;
            for (l = 0,
            c = e.length; c > l; l++) {
                r = e[l];
                for (a in t)
                    s = o[a],
                    s && s !== a && (r[s] = t[a](r),
                    delete r[a])
            }
        }
        function v(e, t, n, i, o) {
            var r, a, s, l, c;
            for (l = 0,
            c = e.length; c > l; l++) {
                r = e[l];
                for (a in t)
                    r[a] = n._parse(a, t[a](r)),
                    s = o[a],
                    s && s !== a && delete r[s]
            }
        }
        function _(e, t, n, i, o) {
            var r, a, s, l;
            for (a = 0,
            l = e.length; l > a; a++)
                r = e[a],
                s = i[r.field],
                s && s != r.field && (r.field = s),
                r.value = n._parse(r.field, r.value),
                r.hasSubgroups ? _(r.items, t, n, i, o) : v(r.items, t, n, i, o)
        }
        function y(e, t, n, i, o, r) {
            return function(a) {
                return a = e(a),
                a && !ot(i) && ("[object Array]" === Nt.call(a) || a instanceof jt || (a = [a]),
                n(a, i, new t, o, r)),
                a || []
            }
        }
        function w(e, t, n, i) {
            for (var o, r, a, s = 0; t.length && i && (o = t[s],
            r = o.items,
            a = r.length,
            e && e.field === o.field && e.value === o.value ? (e.hasSubgroups && e.items.length ? w(e.items[e.items.length - 1], o.items, n, i) : (r = r.slice(n, n + i),
            e.items = e.items.concat(r)),
            t.splice(s--, 1)) : o.hasSubgroups && r.length ? (w(o, r, n, i),
            o.items.length || t.splice(s--, 1)) : (r = r.slice(n, n + i),
            o.items = r,
            o.items.length || t.splice(s--, 1)),
            0 === r.length ? n -= a : (n = 0,
            i -= r.length),
            !(++s >= t.length)); )
                ;
            t.length > s && t.splice(s, t.length - s)
        }
        function b(e) {
            var t, n, i, o, r, a = [];
            for (t = 0,
            n = e.length; n > t; t++)
                if (r = e.at(t),
                r.hasSubgroups)
                    a = a.concat(b(r.items));
                else
                    for (i = r.items,
                    o = 0; i.length > o; o++)
                        a.push(i.at(o));
            return a
        }
        function x(e, t) {
            var n, i, o;
            if (t)
                for (n = 0,
                i = e.length; i > n; n++)
                    o = e.at(n),
                    o.hasSubgroups ? x(o.items, t) : o.items = new Gt(o.items,t)
        }
        function k(e, t) {
            for (var n = 0, i = e.length; i > n; n++)
                if (e[n].hasSubgroups) {
                    if (k(e[n].items, t))
                        return !0
                } else if (t(e[n].items, e[n]))
                    return !0
        }
        function C(e, t, n, i) {
            for (var o = 0; e.length > o && e[o].data !== t && !S(e[o].data, n, i); o++)
                ;
        }
        function S(e, t, n) {
            for (var i = 0, o = e.length; o > i; i++) {
                if (e[i] && e[i].hasSubgroups)
                    return S(e[i].items, t, n);
                if (e[i] === t || e[i] === n)
                    return e[i] = n,
                    !0
            }
        }
        function T(e, n, i, o, r) {
            var a, s, l, c;
            for (a = 0,
            s = e.length; s > a; a++)
                if (l = e[a],
                l && !(l instanceof o))
                    if (l.hasSubgroups === t || r) {
                        for (c = 0; n.length > c; c++)
                            if (n[c] === l) {
                                e[a] = n.at(c),
                                C(i, n, l, e[a]);
                                break
                            }
                    } else
                        T(l.items, n, i, o, r)
        }
        function D(e, t) {
            var n, i, o;
            for (n = 0,
            i = e.length; i > n; n++)
                if (o = e.at(n),
                o.uid == t.uid)
                    return e.splice(n, 1),
                    o
        }
        function A(e, t) {
            var n, i, o, r;
            for (o = e.length - 1,
            r = 0; o >= r; o--)
                i = e[o],
                n = {
                    value: t.get(i.field),
                    field: i.field,
                    items: n ? [n] : [t],
                    hasSubgroups: !!n,
                    aggregates: {}
                };
            return n
        }
        function P(e, t) {
            return t ? E(e, function(e) {
                return e.uid ? e.uid == t.uid : e[t.idField] === t.id
            }) : -1
        }
        function M(e, t) {
            return t ? E(e, function(e) {
                return e.uid == t.uid
            }) : -1
        }
        function E(e, t) {
            var n, i;
            for (n = 0,
            i = e.length; i > n; n++)
                if (t(e[n]))
                    return n;
            return -1
        }
        function I(e, t) {
            var n, i;
            return e && !ot(e) ? (n = e[t],
            i = it(n) ? n.from || n.field || t : e[t] || t,
            ut(i) ? t : i) : t
        }
        function B(e, t) {
            var n, i, o, r = {};
            for (o in e)
                "filters" !== o && (r[o] = e[o]);
            if (e.filters)
                for (r.filters = [],
                n = 0,
                i = e.filters.length; i > n; n++)
                    r.filters[n] = B(e.filters[n], t);
            else
                r.field = I(t.fields, r.field);
            return r
        }
        function z(e, t) {
            var n, i, o, r, a, s = [];
            for (n = 0,
            i = e.length; i > n; n++) {
                o = {},
                r = e[n];
                for (a in r)
                    o[a] = r[a];
                o.field = I(t.fields, o.field),
                o.aggregates && rt(o.aggregates) && (o.aggregates = z(o.aggregates, t)),
                s.push(o)
            }
            return s
        }
        function L(t, n) {
            var i, o, r, a, s, l = e(t)[0].children, c = [], d = n[0], u = n[1];
            for (i = 0,
            o = l.length; o > i; i++)
                r = {},
                s = l[i],
                s.disabled || (r[d.field] = s.text,
                a = s.attributes.value,
                a = a && a.specified ? s.value : s.text,
                r[u.field] = a,
                c.push(r));
            return c
        }
        function F(t, n) {
            var i, o, r, a, s, l, c, d = e(t)[0].tBodies[0], u = d ? d.rows : [], h = n.length, f = [];
            for (i = 0,
            o = u.length; o > i; i++) {
                for (s = {},
                c = !0,
                a = u[i].cells,
                r = 0; h > r; r++)
                    l = a[r],
                    "th" !== l.nodeName.toLowerCase() && (c = !1,
                    s[n[r].field] = l.innerHTML);
                c || f.push(s)
            }
            return f
        }
        function R(e) {
            return function() {
                var t = this._data
                  , n = Q.fn[e].apply(this, Rt.call(arguments));
                return this._data != t && this._attachBubbleHandlers(),
                n
            }
        }
        function O(t, n) {
            function i(e, t) {
                return e.filter(t).add(e.find(t))
            }
            var o, r, a, s, l, c, d, u, h = e(t).children(), f = [], p = n[0].field, g = n[1] && n[1].field, m = n[2] && n[2].field, v = n[3] && n[3].field;
            for (o = 0,
            r = h.length; r > o; o++)
                a = {
                    _loaded: !0
                },
                s = h.eq(o),
                c = s[0].firstChild,
                u = s.children(),
                t = u.filter("ul"),
                u = u.filter(":not(ul)"),
                l = s.attr("data-id"),
                l && (a.id = l),
                c && (a[p] = 3 == c.nodeType ? c.nodeValue : u.text()),
                g && (a[g] = i(u, "a").attr("href")),
                v && (a[v] = i(u, "img").attr("src")),
                m && (d = i(u, ".k-sprite").prop("className"),
                a[m] = d && e.trim(d.replace("k-sprite", ""))),
                t.length && (a.items = O(t.eq(0), n)),
                "true" == s.attr("data-hasChildren") && (a.hasChildren = !0),
                f.push(a);
            return f
        }
        var N, H, V, U, W, j, G, q, $, Y, Q, X, K, Z, J, et, tt = e.extend, nt = e.proxy, it = e.isPlainObject, ot = e.isEmptyObject, rt = e.isArray, at = e.grep, st = e.ajax, lt = e.each, ct = e.noop, dt = window.kendo, ut = dt.isFunction, ht = dt.Observable, ft = dt.Class, pt = "string", gt = "function", mt = "create", vt = "read", _t = "update", yt = "destroy", wt = "change", bt = "sync", xt = "get", kt = "error", Ct = "requestStart", St = "progress", Tt = "requestEnd", Dt = [mt, vt, _t, yt], At = function(e) {
            return e
        }
        , Pt = dt.getter, Mt = dt.stringify, Et = Math, It = [].push, Bt = [].join, zt = [].pop, Lt = [].splice, Ft = [].shift, Rt = [].slice, Ot = [].unshift, Nt = {}.toString, Ht = dt.support.stableSort, Vt = /^\/Date\((.*?)\)\/$/, Ut = /(\r+|\n+)/g, Wt = /(?=['\\])/g, jt = ht.extend({
            init: function(e, t) {
                var n = this;
                n.type = t || qt,
                ht.fn.init.call(n),
                n.length = e.length,
                n.wrapAll(e, n)
            },
            at: function(e) {
                return this[e]
            },
            toJSON: function() {
                var e, t, n = this.length, i = Array(n);
                for (e = 0; n > e; e++)
                    t = this[e],
                    t instanceof qt && (t = t.toJSON()),
                    i[e] = t;
                return i
            },
            parent: ct,
            wrapAll: function(e, t) {
                var n, i, o = this, r = function() {
                    return o
                }
                ;
                for (t = t || [],
                n = 0,
                i = e.length; i > n; n++)
                    t[n] = o.wrap(e[n], r);
                return t
            },
            wrap: function(e, t) {
                var n, i = this;
                return null  !== e && "[object Object]" === Nt.call(e) && (n = e instanceof i.type || e instanceof Qt,
                n || (e = e instanceof qt ? e.toJSON() : e,
                e = new i.type(e)),
                e.parent = t,
                e.bind(wt, function(e) {
                    i.trigger(wt, {
                        field: e.field,
                        node: e.node,
                        index: e.index,
                        items: e.items || [this],
                        action: e.node ? e.action || "itemloaded" : "itemchange"
                    })
                })),
                e
            },
            push: function() {
                var e, t = this.length, n = this.wrapAll(arguments);
                return e = It.apply(this, n),
                this.trigger(wt, {
                    action: "add",
                    index: t,
                    items: n
                }),
                e
            },
            slice: Rt,
            sort: [].sort,
            join: Bt,
            pop: function() {
                var e = this.length
                  , t = zt.apply(this);
                return e && this.trigger(wt, {
                    action: "remove",
                    index: e - 1,
                    items: [t]
                }),
                t
            },
            splice: function(e, t, n) {
                var i, o, r, a = this.wrapAll(Rt.call(arguments, 2));
                if (i = Lt.apply(this, [e, t].concat(a)),
                i.length)
                    for (this.trigger(wt, {
                        action: "remove",
                        index: e,
                        items: i
                    }),
                    o = 0,
                    r = i.length; r > o; o++)
                        i[o] && i[o].children && i[o].unbind(wt);
                return n && this.trigger(wt, {
                    action: "add",
                    index: e,
                    items: a
                }),
                i
            },
            shift: function() {
                var e = this.length
                  , t = Ft.apply(this);
                return e && this.trigger(wt, {
                    action: "remove",
                    index: 0,
                    items: [t]
                }),
                t
            },
            unshift: function() {
                var e, t = this.wrapAll(arguments);
                return e = Ot.apply(this, t),
                this.trigger(wt, {
                    action: "add",
                    index: 0,
                    items: t
                }),
                e
            },
            indexOf: function(e) {
                var t, n, i = this;
                for (t = 0,
                n = i.length; n > t; t++)
                    if (i[t] === e)
                        return t;
                return -1
            },
            forEach: function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    e(this[t], t, this)
            },
            map: function(e) {
                for (var t = 0, n = [], i = this.length; i > t; t++)
                    n[t] = e(this[t], t, this);
                return n
            },
            filter: function(e) {
                for (var t, n = 0, i = [], o = this.length; o > n; n++)
                    t = this[n],
                    e(t, n, this) && (i[i.length] = t);
                return i
            },
            find: function(e) {
                for (var t, n = 0, i = this.length; i > n; n++)
                    if (t = this[n],
                    e(t, n, this))
                        return t
            },
            every: function(e) {
                for (var t, n = 0, i = this.length; i > n; n++)
                    if (t = this[n],
                    !e(t, n, this))
                        return !1;
                return !0
            },
            some: function(e) {
                for (var t, n = 0, i = this.length; i > n; n++)
                    if (t = this[n],
                    e(t, n, this))
                        return !0;
                return !1
            },
            remove: function(e) {
                var t = this.indexOf(e);
                -1 !== t && this.splice(t, 1)
            },
            empty: function() {
                this.splice(0, this.length)
            }
        }), Gt = jt.extend({
            init: function(e, t) {
                ht.fn.init.call(this),
                this.type = t || qt;
                for (var n = 0; e.length > n; n++)
                    this[n] = e[n];
                this.length = n,
                this._parent = nt(function() {
                    return this
                }, this)
            },
            at: function(e) {
                var t = this[e];
                return t instanceof this.type ? t.parent = this._parent : t = this[e] = this.wrap(t, this._parent),
                t
            }
        }), qt = ht.extend({
            init: function(e) {
                var t, n, i = this, o = function() {
                    return i
                }
                ;
                ht.fn.init.call(this);
                for (n in e)
                    t = e[n],
                    "object" == typeof t && t && !t.getTime && "_" != n.charAt(0) && (t = i.wrap(t, n, o)),
                    i[n] = t;
                i.uid = dt.guid()
            },
            shouldSerialize: function(e) {
                return this.hasOwnProperty(e) && "_events" !== e && typeof this[e] !== gt && "uid" !== e
            },
            forEach: function(e) {
                for (var t in this)
                    this.shouldSerialize(t) && e(this[t], t)
            },
            toJSON: function() {
                var e, t, n = {};
                for (t in this)
                    this.shouldSerialize(t) && (e = this[t],
                    (e instanceof qt || e instanceof jt) && (e = e.toJSON()),
                    n[t] = e);
                return n
            },
            get: function(e) {
                var t, n = this;
                return n.trigger(xt, {
                    field: e
                }),
                t = "this" === e ? n : dt.getter(e, !0)(n)
            },
            _set: function(e, t) {
                var n, i, o, r = this, a = e.indexOf(".") >= 0;
                if (a)
                    for (n = e.split("."),
                    i = ""; n.length > 1; ) {
                        if (i += n.shift(),
                        o = dt.getter(i, !0)(r),
                        o instanceof qt)
                            return o.set(n.join("."), t),
                            a;
                        i += "."
                    }
                return dt.setter(e)(r, t),
                a
            },
            set: function(e, t) {
                var n = this
                  , i = e.indexOf(".") >= 0
                  , o = dt.getter(e, !0)(n);
                o !== t && (n.trigger("set", {
                    field: e,
                    value: t
                }) || (i || (t = n.wrap(t, e, function() {
                    return n
                })),
                (!n._set(e, t) || e.indexOf("(") >= 0 || e.indexOf("[") >= 0) && n.trigger(wt, {
                    field: e
                })))
            },
            parent: ct,
            wrap: function(e, t, i) {
                var o, r, a = this, s = Nt.call(e);
                return null  == e || "[object Object]" !== s && "[object Array]" !== s || (o = e instanceof jt,
                r = e instanceof Q,
                "[object Object]" !== s || r || o ? ("[object Array]" === s || o || r) && (o || r || (e = new jt(e)),
                e.parent() != i() && e.bind(wt, n(a, wt, t, !1))) : (e instanceof qt || (e = new qt(e)),
                e.parent() != i() && (e.bind(xt, n(a, xt, t, !0)),
                e.bind(wt, n(a, wt, t, !0)))),
                e.parent = i),
                e
            }
        }), $t = {
            number: function(e) {
                return dt.parseFloat(e)
            },
            date: function(e) {
                return dt.parseDate(e)
            },
            "boolean": function(e) {
                return typeof e === pt ? "true" === e.toLowerCase() : null  != e ? !!e : e
            },
            string: function(e) {
                return null  != e ? e + "" : e
            },
            "default": function(e) {
                return e
            }
        }, Yt = {
            string: "",
            number: 0,
            date: new Date,
            "boolean": !1,
            "default": ""
        }, Qt = qt.extend({
            init: function(n) {
                var i, o, r = this;
                if ((!n || e.isEmptyObject(n)) && (n = e.extend({}, r.defaults, n),
                r._initializers))
                    for (i = 0; r._initializers.length > i; i++)
                        o = r._initializers[i],
                        n[o] = r.defaults[o]();
                qt.fn.init.call(r, n),
                r.dirty = !1,
                r.idField && (r.id = r.get(r.idField),
                r.id === t && (r.id = r._defaultId))
            },
            shouldSerialize: function(e) {
                return qt.fn.shouldSerialize.call(this, e) && "uid" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "_accessors" !== e
            },
            _parse: function(e, t) {
                var n, i = this, r = e, a = i.fields || {};
                return e = a[e],
                e || (e = o(a, r)),
                e && (n = e.parse,
                !n && e.type && (n = $t[e.type.toLowerCase()])),
                n ? n(t) : t
            },
            _notifyChange: function(e) {
                var t = e.action;
                ("add" == t || "remove" == t) && (this.dirty = !0)
            },
            editable: function(e) {
                return e = (this.fields || {})[e],
                e ? e.editable !== !1 : !0
            },
            set: function(e, t, n) {
                var o = this;
                o.editable(e) && (t = o._parse(e, t),
                i(t, o.get(e)) || (o.dirty = !0,
                qt.fn.set.call(o, e, t, n)))
            },
            accept: function(e) {
                var t, n, i = this, o = function() {
                    return i
                }
                ;
                for (t in e)
                    n = e[t],
                    "_" != t.charAt(0) && (n = i.wrap(e[t], t, o)),
                    i._set(t, n);
                i.idField && (i.id = i.get(i.idField)),
                i.dirty = !1
            },
            isNew: function() {
                return this.id === this._defaultId
            }
        });
        Qt.define = function(e, n) {
            n === t && (n = e,
            e = Qt);
            var i, o, r, a, s, l, c, d, u = tt({
                defaults: {}
            }, n), h = {}, f = u.id, p = [];
            if (f && (u.idField = f),
            u.id && delete u.id,
            f && (u.defaults[f] = u._defaultId = ""),
            "[object Array]" === Nt.call(u.fields)) {
                for (l = 0,
                c = u.fields.length; c > l; l++)
                    r = u.fields[l],
                    typeof r === pt ? h[r] = {} : r.field && (h[r.field] = r);
                u.fields = h
            }
            for (o in u.fields)
                r = u.fields[o],
                a = r.type || "default",
                s = null ,
                d = o,
                o = typeof r.field === pt ? r.field : o,
                r.nullable || (s = u.defaults[d !== o ? d : o] = r.defaultValue !== t ? r.defaultValue : Yt[a.toLowerCase()],
                "function" == typeof s && p.push(o)),
                n.id === o && (u._defaultId = s),
                u.defaults[d !== o ? d : o] = s,
                r.parse = r.parse || $t[a];
            return p.length > 0 && (u._initializers = p),
            i = e.extend(u),
            i.define = function(e) {
                return Qt.define(i, e)
            }
            ,
            u.fields && (i.fields = u.fields,
            i.idField = u.idField),
            i
        }
        ,
        H = {
            selector: function(e) {
                return ut(e) ? e : Pt(e)
            },
            compare: function(e) {
                var t = this.selector(e);
                return function(e, n) {
                    return e = t(e),
                    n = t(n),
                    null  == e && null  == n ? 0 : null  == e ? -1 : null  == n ? 1 : e.localeCompare ? e.localeCompare(n) : e > n ? 1 : n > e ? -1 : 0
                }
            },
            create: function(e) {
                var t = e.compare || this.compare(e.field);
                return "desc" == e.dir ? function(e, n) {
                    return t(n, e, !0)
                }
                 : t
            },
            combine: function(e) {
                return function(t, n) {
                    var i, o, r = e[0](t, n);
                    for (i = 1,
                    o = e.length; o > i; i++)
                        r = r || e[i](t, n);
                    return r
                }
            }
        },
        V = tt({}, H, {
            asc: function(e) {
                var t = this.selector(e);
                return function(e, n) {
                    var i = t(e)
                      , o = t(n);
                    return i && i.getTime && o && o.getTime && (i = i.getTime(),
                    o = o.getTime()),
                    i === o ? e.__position - n.__position : null  == i ? -1 : null  == o ? 1 : i.localeCompare ? i.localeCompare(o) : i > o ? 1 : -1
                }
            },
            desc: function(e) {
                var t = this.selector(e);
                return function(e, n) {
                    var i = t(e)
                      , o = t(n);
                    return i && i.getTime && o && o.getTime && (i = i.getTime(),
                    o = o.getTime()),
                    i === o ? e.__position - n.__position : null  == i ? 1 : null  == o ? -1 : o.localeCompare ? o.localeCompare(i) : o > i ? 1 : -1
                }
            },
            create: function(e) {
                return this[e.dir](e.field)
            }
        }),
        N = function(e, t) {
            var n, i = e.length, o = Array(i);
            for (n = 0; i > n; n++)
                o[n] = t(e[n], n, e);
            return o
        }
        ,
        U = function() {
            function e(e) {
                return e.replace(Wt, "\\").replace(Ut, "")
            }
            function t(t, n, i, o) {
                var r;
                return null  != i && (typeof i === pt && (i = e(i),
                r = Vt.exec(i),
                r ? i = new Date(+r[1]) : o ? (i = "'" + i.toLowerCase() + "'",
                n = "(" + n + " || '').toLowerCase()") : i = "'" + i + "'"),
                i.getTime && (n = "(" + n + "?" + n + ".getTime():" + n + ")",
                i = i.getTime())),
                n + " " + t + " " + i
            }
            return {
                quote: function(t) {
                    return t && t.getTime ? "new Date(" + t.getTime() + ")" : "string" == typeof t ? "'" + e(t) + "'" : "" + t
                },
                eq: function(e, n, i) {
                    return t("==", e, n, i)
                },
                neq: function(e, n, i) {
                    return t("!=", e, n, i)
                },
                gt: function(e, n, i) {
                    return t(">", e, n, i)
                },
                gte: function(e, n, i) {
                    return t(">=", e, n, i)
                },
                lt: function(e, n, i) {
                    return t("<", e, n, i)
                },
                lte: function(e, n, i) {
                    return t("<=", e, n, i)
                },
                startswith: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()",
                    n && (n = n.toLowerCase())),
                    n && (n = e(n)),
                    t + ".lastIndexOf('" + n + "', 0) == 0"
                },
                endswith: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()",
                    n && (n = n.toLowerCase())),
                    n && (n = e(n)),
                    t + ".indexOf('" + n + "', " + t + ".length - " + (n || "").length + ") >= 0"
                },
                contains: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()",
                    n && (n = n.toLowerCase())),
                    n && (n = e(n)),
                    t + ".indexOf('" + n + "') >= 0"
                },
                doesnotcontain: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()",
                    n && (n = n.toLowerCase())),
                    n && (n = e(n)),
                    t + ".indexOf('" + n + "') == -1"
                }
            }
        }(),
        r.filterExpr = function(e) {
            var n, i, o, a, s, l, c = [], d = {
                and: " && ",
                or: " || "
            }, u = [], h = [], f = e.filters;
            for (n = 0,
            i = f.length; i > n; n++)
                o = f[n],
                s = o.field,
                l = o.operator,
                o.filters ? (a = r.filterExpr(o),
                o = a.expression.replace(/__o\[(\d+)\]/g, function(e, t) {
                    return t = +t,
                    "__o[" + (h.length + t) + "]"
                }).replace(/__f\[(\d+)\]/g, function(e, t) {
                    return t = +t,
                    "__f[" + (u.length + t) + "]"
                }),
                h.push.apply(h, a.operators),
                u.push.apply(u, a.fields)) : (typeof s === gt ? (a = "__f[" + u.length + "](d)",
                u.push(s)) : a = dt.expr(s),
                typeof l === gt ? (o = "__o[" + h.length + "](" + a + ", " + U.quote(o.value) + ")",
                h.push(l)) : o = U[(l || "eq").toLowerCase()](a, o.value, o.ignoreCase !== t ? o.ignoreCase : !0)),
                c.push(o);
            return {
                expression: "(" + c.join(d[e.logic]) + ")",
                fields: u,
                operators: h
            }
        }
        ,
        W = {
            "==": "eq",
            equals: "eq",
            isequalto: "eq",
            equalto: "eq",
            equal: "eq",
            "!=": "neq",
            ne: "neq",
            notequals: "neq",
            isnotequalto: "neq",
            notequalto: "neq",
            notequal: "neq",
            "<": "lt",
            islessthan: "lt",
            lessthan: "lt",
            less: "lt",
            "<=": "lte",
            le: "lte",
            islessthanorequalto: "lte",
            lessthanequal: "lte",
            ">": "gt",
            isgreaterthan: "gt",
            greaterthan: "gt",
            greater: "gt",
            ">=": "gte",
            isgreaterthanorequalto: "gte",
            greaterthanequal: "gte",
            ge: "gte",
            notsubstringof: "doesnotcontain"
        },
        r.normalizeFilter = l,
        r.prototype = {
            toArray: function() {
                return this.data
            },
            range: function(e, t) {
                return new r(this.data.slice(e, e + t))
            },
            skip: function(e) {
                return new r(this.data.slice(e))
            },
            take: function(e) {
                return new r(this.data.slice(0, e))
            },
            select: function(e) {
                return new r(N(this.data, e))
            },
            order: function(e, t) {
                var n = {
                    dir: t
                };
                return e && (e.compare ? n.compare = e.compare : n.field = e),
                new r(this.data.slice(0).sort(H.create(n)))
            },
            orderBy: function(e) {
                return this.order(e, "asc")
            },
            orderByDescending: function(e) {
                return this.order(e, "desc")
            },
            sort: function(e, t, n) {
                var i, o, r = a(e, t), s = [];
                if (n = n || H,
                r.length) {
                    for (i = 0,
                    o = r.length; o > i; i++)
                        s.push(n.create(r[i]));
                    return this.orderBy({
                        compare: n.combine(s)
                    })
                }
                return this
            },
            filter: function(e) {
                var t, n, i, o, a, s, c, d, u = this.data, h = [];
                if (e = l(e),
                !e || 0 === e.filters.length)
                    return this;
                for (o = r.filterExpr(e),
                s = o.fields,
                c = o.operators,
                a = d = Function("d, __f, __o", "return " + o.expression),
                (s.length || c.length) && (d = function(e) {
                    return a(e, s, c)
                }
                ),
                t = 0,
                i = u.length; i > t; t++)
                    n = u[t],
                    d(n) && h.push(n);
                return new r(h)
            },
            group: function(e, t) {
                e = d(e || []),
                t = t || this.data;
                var n, i = this, o = new r(i.data);
                return e.length > 0 && (n = e[0],
                o = o.groupBy(n).select(function(i) {
                    var o = new r(t).filter([{
                        field: i.field,
                        operator: "eq",
                        value: i.value,
                        ignoreCase: !1
                    }]);
                    return {
                        field: i.field,
                        value: i.value,
                        items: e.length > 1 ? new r(i.items).group(e.slice(1), o.toArray()).toArray() : i.items,
                        hasSubgroups: e.length > 1,
                        aggregates: o.aggregate(n.aggregates)
                    }
                })),
                o
            },
            groupBy: function(e) {
                if (ot(e) || !this.data.length)
                    return new r([]);
                var t, n, i, o, a = e.field, s = this._sortForGrouping(a, e.dir || "asc"), l = dt.accessor(a), c = l.get(s[0], a), d = {
                    field: a,
                    value: c,
                    items: []
                }, h = [d];
                for (i = 0,
                o = s.length; o > i; i++)
                    t = s[i],
                    n = l.get(t, a),
                    u(c, n) || (c = n,
                    d = {
                        field: a,
                        value: c,
                        items: []
                    },
                    h.push(d)),
                    d.items.push(t);
                return new r(h)
            },
            _sortForGrouping: function(e, t) {
                var n, i, o = this.data;
                if (!Ht) {
                    for (n = 0,
                    i = o.length; i > n; n++)
                        o[n].__position = n;
                    for (o = new r(o).sort(e, t, V).toArray(),
                    n = 0,
                    i = o.length; i > n; n++)
                        delete o[n].__position;
                    return o
                }
                return this.sort(e, t).toArray()
            },
            aggregate: function(e) {
                var t, n, i = {}, o = {};
                if (e && e.length)
                    for (t = 0,
                    n = this.data.length; n > t; t++)
                        h(i, e, this.data[t], t, n, o);
                return i
            }
        },
        j = {
            sum: function(e, t, n) {
                var i = n.get(t);
                return f(e) ? f(i) && (e += i) : e = i,
                e
            },
            count: function(e) {
                return (e || 0) + 1
            },
            average: function(e, n, i, o, r, a) {
                var s = i.get(n);
                return a.count === t && (a.count = 0),
                f(e) ? f(s) && (e += s) : e = s,
                f(s) && a.count++,
                o == r - 1 && f(e) && (e /= a.count),
                e
            },
            max: function(e, t, n) {
                var i = n.get(t);
                return f(e) || p(e) || (e = i),
                i > e && (f(i) || p(i)) && (e = i),
                e
            },
            min: function(e, t, n) {
                var i = n.get(t);
                return f(e) || p(e) || (e = i),
                e > i && (f(i) || p(i)) && (e = i),
                e
            }
        },
        r.process = function(e, n) {
            n = n || {};
            var i, o = new r(e), s = n.group, l = d(s || []).concat(a(n.sort || [])), c = n.filterCallback, u = n.filter, h = n.skip, f = n.take;
            return u && (o = o.filter(u),
            c && (o = c(o)),
            i = o.toArray().length),
            l && (o = o.sort(l),
            s && (e = o.toArray())),
            h !== t && f !== t && (o = o.range(h, f)),
            s && (o = o.group(s, e)),
            {
                total: i,
                data: o.toArray()
            }
        }
        ,
        G = ft.extend({
            init: function(e) {
                this.data = e.data
            },
            read: function(e) {
                e.success(this.data)
            },
            update: function(e) {
                e.success(e.data)
            },
            create: function(e) {
                e.success(e.data)
            },
            destroy: function(e) {
                e.success(e.data)
            }
        }),
        q = ft.extend({
            init: function(e) {
                var t, n = this;
                e = n.options = tt({}, n.options, e),
                lt(Dt, function(t, n) {
                    typeof e[n] === pt && (e[n] = {
                        url: e[n]
                    })
                }),
                n.cache = e.cache ? $.create(e.cache) : {
                    find: ct,
                    add: ct
                },
                t = e.parameterMap,
                ut(e.push) && (n.push = e.push),
                n.push || (n.push = At),
                n.parameterMap = ut(t) ? t : function(e) {
                    var n = {};
                    return lt(e, function(e, i) {
                        e in t && (e = t[e],
                        it(e) && (i = e.value(i),
                        e = e.key)),
                        n[e] = i
                    }),
                    n
                }
            },
            options: {
                parameterMap: At
            },
            create: function(e) {
                return st(this.setup(e, mt))
            },
            read: function(n) {
                var i, o, r, a = this, s = a.cache;
                n = a.setup(n, vt),
                i = n.success || ct,
                o = n.error || ct,
                r = s.find(n.data),
                r !== t ? i(r) : (n.success = function(e) {
                    s.add(n.data, e),
                    i(e)
                }
                ,
                e.ajax(n))
            },
            update: function(e) {
                return st(this.setup(e, _t))
            },
            destroy: function(e) {
                return st(this.setup(e, yt))
            },
            setup: function(e, t) {
                e = e || {};
                var n, i = this, o = i.options[t], r = ut(o.data) ? o.data(e.data) : o.data;
                return e = tt(!0, {}, o, e),
                n = tt(!0, {}, r, e.data),
                e.data = i.parameterMap(n, t),
                ut(e.url) && (e.url = e.url(n)),
                e
            }
        }),
        $ = ft.extend({
            init: function() {
                this._store = {}
            },
            add: function(e, n) {
                e !== t && (this._store[Mt(e)] = n)
            },
            find: function(e) {
                return this._store[Mt(e)]
            },
            clear: function() {
                this._store = {}
            },
            remove: function(e) {
                delete this._store[Mt(e)]
            }
        }),
        $.create = function(e) {
            var t = {
                inmemory: function() {
                    return new $
                }
            };
            return it(e) && ut(e.find) ? e : e === !0 ? new $ : t[e]()
        }
        ,
        Y = ft.extend({
            init: function(e) {
                var t, n, i, o, r, a, s, l, c, d, u, h, f, p = this;
                e = e || {};
                for (t in e)
                    n = e[t],
                    p[t] = typeof n === pt ? Pt(n) : n;
                o = e.modelBase || Qt,
                it(p.model) && (p.model = i = o.define(p.model)),
                r = nt(p.data, p),
                p._dataAccessFunction = r,
                p.model && (a = nt(p.groups, p),
                s = nt(p.serialize, p),
                l = {},
                c = {},
                d = {},
                u = {},
                h = !1,
                i = p.model,
                i.fields && (lt(i.fields, function(e, t) {
                    var n;
                    f = e,
                    it(t) && t.field ? f = t.field : typeof t === pt && (f = t),
                    it(t) && t.from && (n = t.from),
                    h = h || n && n !== e || f !== e,
                    c[e] = Pt(n || f),
                    d[e] = Pt(e),
                    l[n || f] = e,
                    u[e] = n || f
                }),
                !e.serialize && h && (p.serialize = y(s, i, m, d, l, u))),
                p._dataAccessFunction = r,
                p.data = y(r, i, v, c, l, u),
                p.groups = y(a, i, _, c, l, u))
            },
            errors: function(e) {
                return e ? e.errors : null 
            },
            parse: At,
            data: At,
            total: function(e) {
                return e.length
            },
            groups: At,
            aggregates: function() {
                return {}
            },
            serialize: function(e) {
                return e
            }
        }),
        Q = ht.extend({
            init: function(e) {
                var n, i, o, r = this;
                e && (i = e.data),
                e = r.options = tt({}, r.options, e),
                r._map = {},
                r._prefetch = {},
                r._data = [],
                r._pristineData = [],
                r._ranges = [],
                r._view = [],
                r._pristineTotal = 0,
                r._destroyed = [],
                r._pageSize = e.pageSize,
                r._page = e.page || (e.pageSize ? 1 : t),
                r._sort = a(e.sort),
                r._filter = l(e.filter),
                r._group = d(e.group),
                r._aggregate = e.aggregate,
                r._total = e.total,
                r._shouldDetachObservableParents = !0,
                ht.fn.init.call(r),
                r.transport = X.create(e, i),
                ut(r.transport.push) && r.transport.push({
                    pushCreate: nt(r._pushCreate, r),
                    pushUpdate: nt(r._pushUpdate, r),
                    pushDestroy: nt(r._pushDestroy, r)
                }),
                null  != e.offlineStorage && ("string" == typeof e.offlineStorage ? (o = e.offlineStorage,
                r._storage = {
                    getItem: function() {
                        return JSON.parse(localStorage.getItem(o))
                    },
                    setItem: function(e) {
                        localStorage.setItem(o, Mt(e))
                    }
                }) : r._storage = e.offlineStorage),
                r.reader = new dt.data.readers[e.schema.type || "json"](e.schema),
                n = r.reader.model || {},
                r._detachObservableParents(),
                r._data = r._observe(r._data),
                r._online = !0,
                r.bind(["push", kt, wt, Ct, bt, Tt, St], e)
            },
            options: {
                data: null ,
                schema: {
                    modelBase: Qt
                },
                offlineStorage: null ,
                serverSorting: !1,
                serverPaging: !1,
                serverFiltering: !1,
                serverGrouping: !1,
                serverAggregates: !1,
                batch: !1
            },
            online: function(n) {
                return n !== t ? this._online != n && (this._online = n,
                n) ? this.sync() : e.Deferred().resolve().promise() : this._online
            },
            offlineData: function(e) {
                return null  == this.options.offlineStorage ? null  : e !== t ? this._storage.setItem(e) : this._storage.getItem() || {}
            },
            _isServerGrouped: function() {
                var e = this.group() || [];
                return this.options.serverGrouping && e.length
            },
            _pushCreate: function(e) {
                this._push(e, "pushCreate")
            },
            _pushUpdate: function(e) {
                this._push(e, "pushUpdate")
            },
            _pushDestroy: function(e) {
                this._push(e, "pushDestroy")
            },
            _push: function(e, t) {
                var n = this._readData(e);
                n || (n = e),
                this[t](n)
            },
            _flatData: function(e, t) {
                if (e) {
                    if (this._isServerGrouped())
                        return b(e);
                    if (!t)
                        for (var n = 0; e.length > n; n++)
                            e.at(n)
                }
                return e
            },
            parent: ct,
            get: function(e) {
                var t, n, i = this._flatData(this._data);
                for (t = 0,
                n = i.length; n > t; t++)
                    if (i[t].id == e)
                        return i[t]
            },
            getByUid: function(e) {
                var t, n, i = this._flatData(this._data);
                if (i)
                    for (t = 0,
                    n = i.length; n > t; t++)
                        if (i[t].uid == e)
                            return i[t]
            },
            indexOf: function(e) {
                return M(this._data, e)
            },
            at: function(e) {
                return this._data.at(e)
            },
            data: function(e) {
                var n, i = this;
                if (e === t) {
                    if (i._data)
                        for (n = 0; i._data.length > n; n++)
                            i._data.at(n);
                    return i._data
                }
                i._detachObservableParents(),
                i._data = this._observe(e),
                i._pristineData = e.slice(0),
                i._storeData(),
                i._ranges = [],
                i.trigger("reset"),
                i._addRange(i._data),
                i._total = i._data.length,
                i._pristineTotal = i._total,
                i._process(i._data)
            },
            view: function(e) {
                return e === t ? this._view : (this._view = this._observeView(e),
                t)
            },
            _observeView: function(e) {
                var t, n = this;
                return T(e, n._data, n._ranges, n.reader.model || qt, n._isServerGrouped()),
                t = new Gt(e,n.reader.model),
                t.parent = function() {
                    return n.parent()
                }
                ,
                t
            },
            flatView: function() {
                var e = this.group() || [];
                return e.length ? b(this._view) : this._view
            },
            add: function(e) {
                return this.insert(this._data.length, e)
            },
            _createNewModel: function(e) {
                return this.reader.model ? new this.reader.model(e) : e instanceof qt ? e : new qt(e)
            },
            insert: function(e, t) {
                return t || (t = e,
                e = 0),
                t instanceof Qt || (t = this._createNewModel(t)),
                this._isServerGrouped() ? this._data.splice(e, 0, A(this.group(), t)) : this._data.splice(e, 0, t),
                t
            },
            pushCreate: function(e) {
                var t, n, i, o, r, a;
                rt(e) || (e = [e]),
                t = [],
                n = this.options.autoSync,
                this.options.autoSync = !1;
                try {
                    for (i = 0; e.length > i; i++)
                        o = e[i],
                        r = this.add(o),
                        t.push(r),
                        a = r.toJSON(),
                        this._isServerGrouped() && (a = A(this.group(), a)),
                        this._pristineData.push(a)
                } finally {
                    this.options.autoSync = n
                }
                t.length && this.trigger("push", {
                    type: "create",
                    items: t
                })
            },
            pushUpdate: function(e) {
                var t, n, i, o, r;
                for (rt(e) || (e = [e]),
                t = [],
                n = 0; e.length > n; n++)
                    i = e[n],
                    o = this._createNewModel(i),
                    r = this.get(o.id),
                    r ? (t.push(r),
                    r.accept(i),
                    r.trigger(wt),
                    this._updatePristineForModel(r, i)) : this.pushCreate(i);
                t.length && this.trigger("push", {
                    type: "update",
                    items: t
                })
            },
            pushDestroy: function(e) {
                var t = this._removeItems(e);
                t.length && this.trigger("push", {
                    type: "destroy",
                    items: t
                })
            },
            _removeItems: function(e) {
                var t, n, i, o, r, a;
                rt(e) || (e = [e]),
                t = [],
                n = this.options.autoSync,
                this.options.autoSync = !1;
                try {
                    for (i = 0; e.length > i; i++)
                        o = e[i],
                        r = this._createNewModel(o),
                        a = !1,
                        this._eachItem(this._data, function(e) {
                            var n, i;
                            for (n = 0; e.length > n; n++)
                                if (i = e.at(n),
                                i.id === r.id) {
                                    t.push(i),
                                    e.splice(n, 1),
                                    a = !0;
                                    break
                                }
                        }),
                        a && (this._removePristineForModel(r),
                        this._destroyed.pop())
                } finally {
                    this.options.autoSync = n
                }
                return t
            },
            remove: function(e) {
                var n, i = this, o = i._isServerGrouped();
                return this._eachItem(i._data, function(r) {
                    return n = D(r, e),
                    n && o ? (n.isNew && n.isNew() || i._destroyed.push(n),
                    !0) : t
                }),
                this._removeModelFromRanges(e),
                this._updateRangesLength(),
                e
            },
            sync: function() {
                var t, n, i, o = this, r = [], a = [], s = o._destroyed, l = o._flatData(o._data), c = e.Deferred().resolve().promise();
                if (o.online()) {
                    if (!o.reader.model)
                        return c;
                    for (t = 0,
                    n = l.length; n > t; t++)
                        l[t].isNew() ? r.push(l[t]) : l[t].dirty && a.push(l[t]);
                    i = [],
                    i.push.apply(i, o._send("create", r)),
                    i.push.apply(i, o._send("update", a)),
                    i.push.apply(i, o._send("destroy", s)),
                    c = e.when.apply(null , i).then(function() {
                        var e, t;
                        for (e = 0,
                        t = arguments.length; t > e; e++)
                            o._accept(arguments[e]);
                        o._storeData(!0),
                        o._change({
                            action: "sync"
                        }),
                        o.trigger(bt)
                    })
                } else
                    o._storeData(!0),
                    o._change({
                        action: "sync"
                    });
                return c
            },
            cancelChanges: function(e) {
                var t = this;
                e instanceof dt.data.Model ? t._cancelModel(e) : (t._destroyed = [],
                t._detachObservableParents(),
                t._data = t._observe(t._pristineData),
                t.options.serverPaging && (t._total = t._pristineTotal),
                t._ranges = [],
                t._addRange(t._data),
                t._change())
            },
            hasChanges: function() {
                var e, t, n = this._data;
                if (this._destroyed.length)
                    return !0;
                for (e = 0,
                t = n.length; t > e; e++)
                    if (n[e].isNew && n[e].isNew() || n[e].dirty)
                        return !0;
                return !1
            },
            _accept: function(t) {
                var n, i = this, o = t.models, r = t.response, a = 0, s = i._isServerGrouped(), l = i._pristineData, c = t.type;
                if (i.trigger(Tt, {
                    response: r,
                    type: c
                }),
                r && !ot(r)) {
                    if (r = i.reader.parse(r),
                    i._handleCustomErrors(r))
                        return;
                    r = i.reader.data(r),
                    rt(r) || (r = [r])
                } else
                    r = e.map(o, function(e) {
                        return e.toJSON()
                    });
                for ("destroy" === c && (i._destroyed = []),
                a = 0,
                n = o.length; n > a; a++)
                    "destroy" !== c ? (o[a].accept(r[a]),
                    "create" === c ? l.push(s ? A(i.group(), o[a]) : r[a]) : "update" === c && i._updatePristineForModel(o[a], r[a])) : i._removePristineForModel(o[a])
            },
            _updatePristineForModel: function(e, t) {
                this._executeOnPristineForModel(e, function(e, n) {
                    dt.deepExtend(n[e], t)
                })
            },
            _executeOnPristineForModel: function(e, n) {
                this._eachPristineItem(function(i) {
                    var o = P(i, e);
                    return o > -1 ? (n(o, i),
                    !0) : t
                })
            },
            _removePristineForModel: function(e) {
                this._executeOnPristineForModel(e, function(e, t) {
                    t.splice(e, 1)
                })
            },
            _readData: function(e) {
                var t = this._isServerGrouped() ? this.reader.groups : this.reader.data;
                return t.call(this.reader, e)
            },
            _eachPristineItem: function(e) {
                this._eachItem(this._pristineData, e)
            },
            _eachItem: function(e, t) {
                e && e.length && (this._isServerGrouped() ? k(e, t) : t(e))
            },
            _pristineForModel: function(e) {
                var n, i, o = function(o) {
                    return i = P(o, e),
                    i > -1 ? (n = o[i],
                    !0) : t
                }
                ;
                return this._eachPristineItem(o),
                n
            },
            _cancelModel: function(e) {
                var t = this._pristineForModel(e);
                this._eachItem(this._data, function(n) {
                    var i = M(n, e);
                    i >= 0 && (!t || e.isNew() && !t.__state__ ? n.splice(i, 1) : n[i].accept(t))
                })
            },
            _promise: function(t, n, i) {
                var o = this;
                return e.Deferred(function(e) {
                    o.trigger(Ct, {
                        type: i
                    }),
                    o.transport[i].call(o.transport, tt({
                        success: function(t) {
                            e.resolve({
                                response: t,
                                models: n,
                                type: i
                            })
                        },
                        error: function(t, n, i) {
                            e.reject(t),
                            o.error(t, n, i)
                        }
                    }, t))
                }).promise()
            },
            _send: function(e, t) {
                var n, i, o = this, r = [], a = o.reader.serialize(g(t));
                if (o.options.batch)
                    t.length && r.push(o._promise({
                        data: {
                            models: a
                        }
                    }, t, e));
                else
                    for (n = 0,
                    i = t.length; i > n; n++)
                        r.push(o._promise({
                            data: a[n]
                        }, [t[n]], e));
                return r
            },
            read: function(t) {
                var n = this
                  , i = n._params(t)
                  , o = e.Deferred();
                return n._queueRequest(i, function() {
                    var e = n.trigger(Ct, {
                        type: "read"
                    });
                    e ? (n._dequeueRequest(),
                    o.resolve(e)) : (n.trigger(St),
                    n._ranges = [],
                    n.trigger("reset"),
                    n.online() ? n.transport.read({
                        data: i,
                        success: function(e) {
                            n.success(e),
                            o.resolve()
                        },
                        error: function() {
                            var e = Rt.call(arguments);
                            n.error.apply(n, e),
                            o.reject.apply(o, e)
                        }
                    }) : null  != n.options.offlineStorage && (n.success(n.offlineData()),
                    o.resolve()))
                }),
                o.promise()
            },
            _readAggregates: function(e) {
                return this.reader.aggregates(e)
            },
            success: function(e) {
                var n, i, o, r, a = this, s = a.options;
                if (a.trigger(Tt, {
                    response: e,
                    type: "read"
                }),
                a.online()) {
                    if (e = a.reader.parse(e),
                    a._handleCustomErrors(e))
                        return a._dequeueRequest(),
                        t;
                    a._total = a.reader.total(e),
                    a._aggregate && s.serverAggregates && (a._aggregateResult = a._readAggregates(e)),
                    e = a._readData(e)
                } else {
                    for (e = a._readData(e),
                    n = [],
                    i = 0; e.length > i; i++)
                        o = e[i],
                        r = o.__state__,
                        "destroy" == r ? this._destroyed.push(this._createNewModel(o)) : n.push(o);
                    e = n,
                    a._total = e.length
                }
                a._pristineTotal = a._total,
                a._pristineData = e.slice(0),
                a._detachObservableParents(),
                a._data = a._observe(e),
                null  != a.options.offlineStorage && a._eachItem(a._data, function(e) {
                    var t, n;
                    for (t = 0; e.length > t; t++)
                        n = e.at(t),
                        "update" == n.__state__ && (n.dirty = !0)
                }),
                a._storeData(),
                a._addRange(a._data),
                a._process(a._data),
                a._dequeueRequest()
            },
            _detachObservableParents: function() {
                if (this._data && this._shouldDetachObservableParents)
                    for (var e = 0; this._data.length > e; e++)
                        this._data[e].parent && (this._data[e].parent = ct)
            },
            _storeData: function(e) {
                function t(e) {
                    var n, i, o, s = [];
                    for (n = 0; e.length > n; n++)
                        i = e.at(n),
                        o = i.toJSON(),
                        r && i.items ? o.items = t(i.items) : (o.uid = i.uid,
                        a && (i.isNew() ? o.__state__ = "create" : i.dirty && (o.__state__ = "update"))),
                        s.push(o);
                    return s
                }
                var n, i, o, r = this._isServerGrouped(), a = this.reader.model;
                if (null  != this.options.offlineStorage) {
                    for (n = t(this._data),
                    i = 0; this._destroyed.length > i; i++)
                        o = this._destroyed[i].toJSON(),
                        o.__state__ = "destroy",
                        n.push(o);
                    this.offlineData(n),
                    e && (this._pristineData = n)
                }
            },
            _addRange: function(e) {
                var t = this
                  , n = t._skip || 0
                  , i = n + t._flatData(e, !0).length;
                t._ranges.push({
                    start: n,
                    end: i,
                    data: e
                }),
                t._ranges.sort(function(e, t) {
                    return e.start - t.start
                })
            },
            error: function(e, t, n) {
                this._dequeueRequest(),
                this.trigger(Tt, {}),
                this.trigger(kt, {
                    xhr: e,
                    status: t,
                    errorThrown: n
                })
            },
            _params: function(e) {
                var t = this
                  , n = tt({
                    take: t.take(),
                    skip: t.skip(),
                    page: t.page(),
                    pageSize: t.pageSize(),
                    sort: t._sort,
                    filter: t._filter,
                    group: t._group,
                    aggregate: t._aggregate
                }, e);
                return t.options.serverPaging || (delete n.take,
                delete n.skip,
                delete n.page,
                delete n.pageSize),
                t.options.serverGrouping ? t.reader.model && n.group && (n.group = z(n.group, t.reader.model)) : delete n.group,
                t.options.serverFiltering ? t.reader.model && n.filter && (n.filter = B(n.filter, t.reader.model)) : delete n.filter,
                t.options.serverSorting ? t.reader.model && n.sort && (n.sort = z(n.sort, t.reader.model)) : delete n.sort,
                t.options.serverAggregates ? t.reader.model && n.aggregate && (n.aggregate = z(n.aggregate, t.reader.model)) : delete n.aggregate,
                n
            },
            _queueRequest: function(e, n) {
                var i = this;
                i._requestInProgress ? i._pending = {
                    callback: nt(n, i),
                    options: e
                } : (i._requestInProgress = !0,
                i._pending = t,
                n())
            },
            _dequeueRequest: function() {
                var e = this;
                e._requestInProgress = !1,
                e._pending && e._queueRequest(e._pending.options, e._pending.callback)
            },
            _handleCustomErrors: function(e) {
                if (this.reader.errors) {
                    var t = this.reader.errors(e);
                    if (t)
                        return this.trigger(kt, {
                            xhr: null ,
                            status: "customerror",
                            errorThrown: "custom error",
                            errors: t
                        }),
                        !0
                }
                return !1
            },
            _observe: function(e) {
                var t, n = this, i = n.reader.model, o = !1;
                return n._shouldDetachObservableParents = !0,
                i && e.length && (o = !(e[0] instanceof i)),
                e instanceof jt ? (n._shouldDetachObservableParents = !1,
                o && (e.type = n.reader.model,
                e.wrapAll(e, e))) : (t = n.pageSize() && !n.options.serverPaging ? Gt : jt,
                e = new t(e,n.reader.model),
                e.parent = function() {
                    return n.parent()
                }
                ),
                n._isServerGrouped() && x(e, i),
                n._changeHandler && n._data && n._data instanceof jt ? n._data.unbind(wt, n._changeHandler) : n._changeHandler = nt(n._change, n),
                e.bind(wt, n._changeHandler)
            },
            _change: function(e) {
                var t, n, i, o = this, r = e ? e.action : "";
                if ("remove" === r)
                    for (t = 0,
                    n = e.items.length; n > t; t++)
                        e.items[t].isNew && e.items[t].isNew() || o._destroyed.push(e.items[t]);
                !o.options.autoSync || "add" !== r && "remove" !== r && "itemchange" !== r ? (i = parseInt(o._total, 10),
                f(o._total) || (i = parseInt(o._pristineTotal, 10)),
                "add" === r ? i += e.items.length : "remove" === r ? i -= e.items.length : "itemchange" === r || "sync" === r || o.options.serverPaging ? "sync" === r && (i = o._pristineTotal = parseInt(o._total, 10)) : i = o._pristineTotal,
                o._total = i,
                o._process(o._data, e)) : o.sync()
            },
            _calculateAggregates: function(e, t) {
                t = t || {};
                var n = new r(e)
                  , i = t.aggregate
                  , o = t.filter;
                return o && (n = n.filter(o)),
                n.aggregate(i)
            },
            _process: function(e, n) {
                var i, o = this, r = {};
                o.options.serverPaging !== !0 && (r.skip = o._skip,
                r.take = o._take || o._pageSize,
                r.skip === t && o._page !== t && o._pageSize !== t && (r.skip = (o._page - 1) * o._pageSize)),
                o.options.serverSorting !== !0 && (r.sort = o._sort),
                o.options.serverFiltering !== !0 && (r.filter = o._filter),
                o.options.serverGrouping !== !0 && (r.group = o._group),
                o.options.serverAggregates !== !0 && (r.aggregate = o._aggregate,
                o._aggregateResult = o._calculateAggregates(e, r)),
                i = o._queryProcess(e, r),
                o.view(i.data),
                i.total === t || o.options.serverFiltering || (o._total = i.total),
                n = n || {},
                n.items = n.items || o._view,
                o.trigger(wt, n)
            },
            _queryProcess: function(e, t) {
                return r.process(e, t)
            },
            _mergeState: function(e) {
                var n = this;
                return e !== t && (n._pageSize = e.pageSize,
                n._page = e.page,
                n._sort = e.sort,
                n._filter = e.filter,
                n._group = e.group,
                n._aggregate = e.aggregate,
                n._skip = e.skip,
                n._take = e.take,
                n._skip === t && (n._skip = n.skip(),
                e.skip = n.skip()),
                n._take === t && n._pageSize !== t && (n._take = n._pageSize,
                e.take = n._take),
                e.sort && (n._sort = e.sort = a(e.sort)),
                e.filter && (n._filter = e.filter = l(e.filter)),
                e.group && (n._group = e.group = d(e.group)),
                e.aggregate && (n._aggregate = e.aggregate = c(e.aggregate))),
                e
            },
            query: function(n) {
                var i, o, r = this.options.serverSorting || this.options.serverPaging || this.options.serverFiltering || this.options.serverGrouping || this.options.serverAggregates;
                return r || (this._data === t || 0 === this._data.length) && !this._destroyed.length ? this.read(this._mergeState(n)) : (o = this.trigger(Ct, {
                    type: "read"
                }),
                o || (this.trigger(St),
                i = this._queryProcess(this._data, this._mergeState(n)),
                this.options.serverFiltering || (this._total = i.total !== t ? i.total : this._data.length),
                this._aggregateResult = this._calculateAggregates(this._data, n),
                this.view(i.data),
                this.trigger(Tt, {
                    type: "read"
                }),
                this.trigger(wt, {
                    items: i.data
                })),
                e.Deferred().resolve(o).promise())
            },
            fetch: function(e) {
                var t = this
                  , n = function(n) {
                    n !== !0 && ut(e) && e.call(t)
                }
                ;
                return this._query().then(n)
            },
            _query: function(e) {
                var t = this;
                return t.query(tt({}, {
                    page: t.page(),
                    pageSize: t.pageSize(),
                    sort: t.sort(),
                    filter: t.filter(),
                    group: t.group(),
                    aggregate: t.aggregate()
                }, e))
            },
            next: function(e) {
                var n = this
                  , i = n.page()
                  , o = n.total();
                return e = e || {},
                !i || o && i + 1 > n.totalPages() ? t : (n._skip = i * n.take(),
                i += 1,
                e.page = i,
                n._query(e),
                i)
            },
            prev: function(e) {
                var n = this
                  , i = n.page();
                return e = e || {},
                i && 1 !== i ? (n._skip = n._skip - n.take(),
                i -= 1,
                e.page = i,
                n._query(e),
                i) : t
            },
            page: function(e) {
                var n, i = this;
                return e !== t ? (e = Et.max(Et.min(Et.max(e, 1), i.totalPages()), 1),
                i._query({
                    page: e
                }),
                t) : (n = i.skip(),
                n !== t ? Et.round((n || 0) / (i.take() || 1)) + 1 : t)
            },
            pageSize: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    pageSize: e,
                    page: 1
                }),
                t) : n.take()
            },
            sort: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    sort: e
                }),
                t) : n._sort
            },
            filter: function(e) {
                var n = this;
                return e === t ? n._filter : (n._query({
                    filter: e,
                    page: 1
                }),
                n.trigger("reset"),
                t)
            },
            group: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    group: e
                }),
                t) : n._group
            },
            total: function() {
                return parseInt(this._total || 0, 10)
            },
            aggregate: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    aggregate: e
                }),
                t) : n._aggregate
            },
            aggregates: function() {
                var e = this._aggregateResult;
                return ot(e) && (e = this._emptyAggregates(this.aggregate())),
                e
            },
            _emptyAggregates: function(e) {
                var t, n, i = {};
                if (!ot(e))
                    for (t = {},
                    rt(e) || (e = [e]),
                    n = 0; e.length > n; n++)
                        t[e[n].aggregate] = 0,
                        i[e[n].field] = t;
                return i
            },
            totalPages: function() {
                var e = this
                  , t = e.pageSize() || e.total();
                return Et.ceil((e.total() || 0) / t)
            },
            inRange: function(e, t) {
                var n = this
                  , i = Et.min(e + t, n.total());
                return !n.options.serverPaging && n._data.length > 0 ? !0 : n._findRange(e, i).length > 0
            },
            lastRange: function() {
                var e = this._ranges;
                return e[e.length - 1] || {
                    start: 0,
                    end: 0,
                    data: []
                }
            },
            firstItemUid: function() {
                var e = this._ranges;
                return e.length && e[0].data.length && e[0].data[0].uid
            },
            enableRequestsInProgress: function() {
                this._skipRequestsInProgress = !1
            },
            range: function(e, n) {
                var i, o, r, a, s, l, c, d;
                if (e = Et.min(e || 0, this.total()),
                i = this,
                o = Et.max(Et.floor(e / n), 0) * n,
                r = Et.min(o + n, i.total()),
                i._skipRequestsInProgress = !1,
                a = i._findRange(e, Et.min(e + n, i.total())),
                a.length) {
                    i._skipRequestsInProgress = !0,
                    i._pending = t,
                    i._skip = e > i.skip() ? Et.min(r, (i.totalPages() - 1) * i.take()) : o,
                    i._take = n,
                    s = i.options.serverPaging,
                    l = i.options.serverSorting,
                    c = i.options.serverFiltering,
                    d = i.options.serverAggregates;
                    try {
                        i.options.serverPaging = !0,
                        i._isServerGrouped() || i.group() && i.group().length || (i.options.serverSorting = !0),
                        i.options.serverFiltering = !0,
                        i.options.serverPaging = !0,
                        i.options.serverAggregates = !0,
                        s && (i._detachObservableParents(),
                        i._data = a = i._observe(a)),
                        i._process(a)
                    } finally {
                        i.options.serverPaging = s,
                        i.options.serverSorting = l,
                        i.options.serverFiltering = c,
                        i.options.serverAggregates = d
                    }
                } else
                    n !== t && (i._rangeExists(o, r) ? e > o && i.prefetch(r, n, function() {
                        i.range(e, n)
                    }) : i.prefetch(o, n, function() {
                        e > o && r < i.total() && !i._rangeExists(r, Et.min(r + n, i.total())) ? i.prefetch(r, n, function() {
                            i.range(e, n)
                        }) : i.range(e, n)
                    }))
            },
            _findRange: function(e, n) {
                var i, o, r, s, l, c, u, h, f, p, g, m, v = this, _ = v._ranges, y = [], w = v.options, b = w.serverSorting || w.serverPaging || w.serverFiltering || w.serverGrouping || w.serverAggregates;
                for (o = 0,
                g = _.length; g > o; o++)
                    if (i = _[o],
                    e >= i.start && i.end >= e) {
                        for (p = 0,
                        r = o; g > r; r++)
                            if (i = _[r],
                            f = v._flatData(i.data, !0),
                            f.length && e + p >= i.start && (c = i.data,
                            u = i.end,
                            b || (m = d(v.group() || []).concat(a(v.sort() || [])),
                            h = v._queryProcess(i.data, {
                                sort: m,
                                filter: v.filter()
                            }),
                            f = c = h.data,
                            h.total !== t && (u = h.total)),
                            s = 0,
                            e + p > i.start && (s = e + p - i.start),
                            l = f.length,
                            u > n && (l -= u - n),
                            p += l - s,
                            y = v._mergeGroups(y, c, s, l),
                            i.end >= n && p == n - e))
                                return y;
                        break
                    }
                return []
            },
            _mergeGroups: function(e, t, n, i) {
                if (this._isServerGrouped()) {
                    var o, r = t.toJSON();
                    return e.length && (o = e[e.length - 1]),
                    w(o, r, n, i),
                    e.concat(r)
                }
                return e.concat(t.slice(n, i))
            },
            skip: function() {
                var e = this;
                return e._skip === t ? e._page !== t ? (e._page - 1) * (e.take() || 1) : t : e._skip
            },
            take: function() {
                return this._take || this._pageSize
            },
            _prefetchSuccessHandler: function(e, t, n, i) {
                var o = this;
                return function(r) {
                    var a, s, l, c = !1, d = {
                        start: e,
                        end: t,
                        data: []
                    };
                    if (o._dequeueRequest(),
                    o.trigger(Tt, {
                        response: r,
                        type: "read"
                    }),
                    r = o.reader.parse(r),
                    l = o._readData(r),
                    l.length) {
                        for (a = 0,
                        s = o._ranges.length; s > a; a++)
                            if (o._ranges[a].start === e) {
                                c = !0,
                                d = o._ranges[a];
                                break
                            }
                        c || o._ranges.push(d)
                    }
                    d.data = o._observe(l),
                    d.end = d.start + o._flatData(d.data, !0).length,
                    o._ranges.sort(function(e, t) {
                        return e.start - t.start
                    }),
                    o._total = o.reader.total(r),
                    (i || !o._skipRequestsInProgress) && (n && l.length ? n() : o.trigger(wt, {}))
                }
            },
            prefetch: function(e, t, n) {
                var i = this
                  , o = Et.min(e + t, i.total())
                  , r = {
                    take: t,
                    skip: e,
                    page: e / t + 1,
                    pageSize: t,
                    sort: i._sort,
                    filter: i._filter,
                    group: i._group,
                    aggregate: i._aggregate
                };
                i._rangeExists(e, o) ? n && n() : (clearTimeout(i._timeout),
                i._timeout = setTimeout(function() {
                    i._queueRequest(r, function() {
                        i.trigger(Ct, {
                            type: "read"
                        }) ? i._dequeueRequest() : i.transport.read({
                            data: i._params(r),
                            success: i._prefetchSuccessHandler(e, o, n)
                        })
                    })
                }, 100))
            },
            _multiplePrefetch: function(e, t, n) {
                var i = this
                  , o = Et.min(e + t, i.total())
                  , r = {
                    take: t,
                    skip: e,
                    page: e / t + 1,
                    pageSize: t,
                    sort: i._sort,
                    filter: i._filter,
                    group: i._group,
                    aggregate: i._aggregate
                };
                i._rangeExists(e, o) ? n && n() : i.trigger(Ct, {
                    type: "read"
                }) || i.transport.read({
                    data: i._params(r),
                    success: i._prefetchSuccessHandler(e, o, n, !0)
                })
            },
            _rangeExists: function(e, t) {
                var n, i, o = this, r = o._ranges;
                for (n = 0,
                i = r.length; i > n; n++)
                    if (e >= r[n].start && r[n].end >= t)
                        return !0;
                return !1
            },
            _removeModelFromRanges: function(e) {
                var t, n, i, o, r;
                for (o = 0,
                r = this._ranges.length; r > o && (i = this._ranges[o],
                this._eachItem(i.data, function(i) {
                    t = D(i, e),
                    t && (n = !0)
                }),
                !n); o++)
                    ;
            },
            _updateRangesLength: function() {
                var e, t, n, i, o = 0;
                for (n = 0,
                i = this._ranges.length; i > n; n++)
                    e = this._ranges[n],
                    e.start = e.start - o,
                    t = this._flatData(e.data, !0).length,
                    o = e.end - t,
                    e.end = e.start + t
            }
        }),
        X = {},
        X.create = function(e, t) {
            var n, i = e.transport;
            return i ? (i.read = typeof i.read === pt ? {
                url: i.read
            } : i.read,
            e.type && (dt.data.transports = dt.data.transports || {},
            dt.data.schemas = dt.data.schemas || {},
            dt.data.transports[e.type] && !it(dt.data.transports[e.type]) ? n = new dt.data.transports[e.type](tt(i, {
                data: t
            })) : i = tt(!0, {}, dt.data.transports[e.type], i),
            e.schema = tt(!0, {}, dt.data.schemas[e.type], e.schema)),
            n || (n = ut(i.read) ? i : new q(i))) : n = new G({
                data: e.data || []
            }),
            n
        }
        ,
        Q.create = function(e) {
            (rt(e) || e instanceof jt) && (e = {
                data: e
            });
            var t, n, i, o = e || {}, r = o.data, a = o.fields, s = o.table, l = o.select, c = {};
            if (r || !a || o.transport || (s ? r = F(s, a) : l && (r = L(l, a))),
            dt.data.Model && a && (!o.schema || !o.schema.model)) {
                for (t = 0,
                n = a.length; n > t; t++)
                    i = a[t],
                    i.type && (c[i.field] = i);
                ot(c) || (o.schema = tt(!0, o.schema, {
                    model: {
                        fields: c
                    }
                }))
            }
            return o.data = r,
            s = null ,
            o.table = null ,
            o instanceof Q ? o : new Q(o)
        }
        ,
        K = Qt.define({
            idField: "id",
            init: function(e) {
                var t = this
                  , n = t.hasChildren || e && e.hasChildren
                  , i = "items"
                  , o = {};
                dt.data.Model.fn.init.call(t, e),
                typeof t.children === pt && (i = t.children),
                o = {
                    schema: {
                        data: i,
                        model: {
                            hasChildren: n,
                            id: t.idField,
                            fields: t.fields
                        }
                    }
                },
                typeof t.children !== pt && tt(o, t.children),
                o.data = e,
                n || (n = o.schema.data),
                typeof n === pt && (n = dt.getter(n)),
                ut(n) && (t.hasChildren = !!n.call(t, t)),
                t._childrenOptions = o,
                t.hasChildren && t._initChildren(),
                t._loaded = !(!e || !e[i] && !e._loaded)
            },
            _initChildren: function() {
                var e, t, n, i = this;
                i.children instanceof Z || (e = i.children = new Z(i._childrenOptions),
                t = e.transport,
                n = t.parameterMap,
                t.parameterMap = function(e, t) {
                    return e[i.idField || "id"] = i.id,
                    n && (e = n(e, t)),
                    e
                }
                ,
                e.parent = function() {
                    return i
                }
                ,
                e.bind(wt, function(e) {
                    e.node = e.node || i,
                    i.trigger(wt, e)
                }),
                e.bind(kt, function(e) {
                    var t = i.parent();
                    t && (e.node = e.node || i,
                    t.trigger(kt, e))
                }),
                i._updateChildrenField())
            },
            append: function(e) {
                this._initChildren(),
                this.loaded(!0),
                this.children.add(e)
            },
            hasChildren: !1,
            level: function() {
                for (var e = this.parentNode(), t = 0; e && e.parentNode; )
                    t++,
                    e = e.parentNode ? e.parentNode() : null ;
                return t
            },
            _updateChildrenField: function() {
                var e = this._childrenOptions.schema.data;
                this[e || "items"] = this.children.data()
            },
            _childrenLoaded: function() {
                this._loaded = !0,
                this._updateChildrenField()
            },
            load: function() {
                var n, i, o = {}, r = "_query";
                return this.hasChildren ? (this._initChildren(),
                n = this.children,
                o[this.idField || "id"] = this.id,
                this._loaded || (n._data = t,
                r = "read"),
                n.one(wt, nt(this._childrenLoaded, this)),
                i = n[r](o)) : this.loaded(!0),
                i || e.Deferred().resolve().promise()
            },
            parentNode: function() {
                var e = this.parent();
                return e.parent()
            },
            loaded: function(e) {
                return e === t ? this._loaded : (this._loaded = e,
                t)
            },
            shouldSerialize: function(e) {
                return Qt.fn.shouldSerialize.call(this, e) && "children" !== e && "_loaded" !== e && "hasChildren" !== e && "_childrenOptions" !== e
            }
        }),
        Z = Q.extend({
            init: function(e) {
                var t = K.define({
                    children: e
                });
                Q.fn.init.call(this, tt(!0, {}, {
                    schema: {
                        modelBase: t,
                        model: t
                    }
                }, e)),
                this._attachBubbleHandlers()
            },
            _attachBubbleHandlers: function() {
                var e = this;
                e._data.bind(kt, function(t) {
                    e.trigger(kt, t)
                })
            },
            remove: function(e) {
                var t, n = e.parentNode(), i = this;
                return n && n._initChildren && (i = n.children),
                t = Q.fn.remove.call(i, e),
                n && !i.data().length && (n.hasChildren = !1),
                t
            },
            success: R("success"),
            data: R("data"),
            insert: function(e, t) {
                var n = this.parent();
                return n && n._initChildren && (n.hasChildren = !0,
                n._initChildren()),
                Q.fn.insert.call(this, e, t)
            },
            _find: function(e, t) {
                var n, i, o, r, a;
                if (o = Q.fn[e].call(this, t))
                    return o;
                if (r = this._flatData(this._data))
                    for (n = 0,
                    i = r.length; i > n; n++)
                        if (a = r[n].children,
                        a instanceof Z && (o = a[e](t)))
                            return o
            },
            get: function(e) {
                return this._find("get", e)
            },
            getByUid: function(e) {
                return this._find("getByUid", e)
            }
        }),
        Z.create = function(e) {
            e = e && e.push ? {
                data: e
            } : e;
            var t = e || {}
              , n = t.data
              , i = t.fields
              , o = t.list;
            return n && n._dataSource ? n._dataSource : (n || !i || t.transport || o && (n = O(o, i)),
            t.data = n,
            t instanceof Z ? t : new Z(t))
        }
        ,
        J = dt.Observable.extend({
            init: function(e, t, n) {
                dt.Observable.fn.init.call(this),
                this._prefetching = !1,
                this.dataSource = e,
                this.prefetch = !n;
                var i = this;
                e.bind("change", function() {
                    i._change()
                }),
                e.bind("reset", function() {
                    i._reset()
                }),
                this._syncWithDataSource(),
                this.setViewSize(t)
            },
            setViewSize: function(e) {
                this.viewSize = e,
                this._recalculate()
            },
            at: function(e) {
                var n = this.pageSize
                  , i = !0;
                return e >= this.total() ? (this.trigger("endreached", {
                    index: e
                }),
                null ) : this.useRanges ? this.useRanges ? ((this.dataOffset > e || e >= this.skip + n) && (i = this.range(Math.floor(e / n) * n)),
                e === this.prefetchThreshold && this._prefetch(),
                e === this.midPageThreshold ? this.range(this.nextMidRange, !0) : e === this.nextPageThreshold ? this.range(this.nextFullRange) : e === this.pullBackThreshold && this.range(this.offset === this.skip ? this.previousMidRange : this.previousFullRange),
                i ? this.dataSource.at(e - this.dataOffset) : (this.trigger("endreached", {
                    index: e
                }),
                null )) : t : this.dataSource.view()[e]
            },
            indexOf: function(e) {
                return this.dataSource.data().indexOf(e) + this.dataOffset
            },
            total: function() {
                return parseInt(this.dataSource.total(), 10)
            },
            next: function() {
                var e = this
                  , t = e.pageSize
                  , n = e.skip - e.viewSize + t
                  , i = Et.max(Et.floor(n / t), 0) * t;
                this.offset = n,
                this.dataSource.prefetch(i, t, function() {
                    e._goToRange(n, !0)
                })
            },
            range: function(e, t) {
                if (this.offset === e)
                    return !0;
                var n = this
                  , i = this.pageSize
                  , o = Et.max(Et.floor(e / i), 0) * i
                  , r = this.dataSource;
                return t && (o += i),
                r.inRange(e, i) ? (this.offset = e,
                this._recalculate(),
                this._goToRange(e),
                !0) : this.prefetch ? (r.prefetch(o, i, function() {
                    n.offset = e,
                    n._recalculate(),
                    n._goToRange(e, !0)
                }),
                !1) : !0
            },
            syncDataSource: function() {
                var e = this.offset;
                this.offset = null ,
                this.range(e)
            },
            destroy: function() {
                this.unbind()
            },
            _prefetch: function() {
                var e = this
                  , t = this.pageSize
                  , n = this.skip + t
                  , i = this.dataSource;
                i.inRange(n, t) || this._prefetching || !this.prefetch || (this._prefetching = !0,
                this.trigger("prefetching", {
                    skip: n,
                    take: t
                }),
                i.prefetch(n, t, function() {
                    e._prefetching = !1,
                    e.trigger("prefetched", {
                        skip: n,
                        take: t
                    })
                }))
            },
            _goToRange: function(e, t) {
                this.offset === e && (this.dataOffset = e,
                this._expanding = t,
                this.dataSource.range(e, this.pageSize),
                this.dataSource.enableRequestsInProgress())
            },
            _reset: function() {
                this._syncPending = !0
            },
            _change: function() {
                var e = this.dataSource;
                this.length = this.useRanges ? e.lastRange().end : e.view().length,
                this._syncPending && (this._syncWithDataSource(),
                this._recalculate(),
                this._syncPending = !1,
                this.trigger("reset", {
                    offset: this.offset
                })),
                this.trigger("resize"),
                this._expanding && this.trigger("expand"),
                delete this._expanding
            },
            _syncWithDataSource: function() {
                var e = this.dataSource;
                this._firstItemUid = e.firstItemUid(),
                this.dataOffset = this.offset = e.skip() || 0,
                this.pageSize = e.pageSize(),
                this.useRanges = e.options.serverPaging
            },
            _recalculate: function() {
                var e = this.pageSize
                  , t = this.offset
                  , n = this.viewSize
                  , i = Math.ceil(t / e) * e;
                this.skip = i,
                this.midPageThreshold = i + e - 1,
                this.nextPageThreshold = i + n - 1,
                this.prefetchThreshold = i + Math.floor(e / 3 * 2),
                this.pullBackThreshold = this.offset - 1,
                this.nextMidRange = i + e - n,
                this.nextFullRange = i,
                this.previousMidRange = t - n,
                this.previousFullRange = i - e
            }
        }),
        et = dt.Observable.extend({
            init: function(e, t) {
                var n = this;
                dt.Observable.fn.init.call(n),
                this.dataSource = e,
                this.batchSize = t,
                this._total = 0,
                this.buffer = new J(e,3 * t),
                this.buffer.bind({
                    endreached: function(e) {
                        n.trigger("endreached", {
                            index: e.index
                        })
                    },
                    prefetching: function(e) {
                        n.trigger("prefetching", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    prefetched: function(e) {
                        n.trigger("prefetched", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    reset: function() {
                        n._total = 0,
                        n.trigger("reset")
                    },
                    resize: function() {
                        n._total = Math.ceil(this.length / n.batchSize),
                        n.trigger("resize", {
                            total: n.total(),
                            offset: this.offset
                        })
                    }
                })
            },
            syncDataSource: function() {
                this.buffer.syncDataSource()
            },
            at: function(e) {
                var t, n, i = this.buffer, o = e * this.batchSize, r = this.batchSize, a = [];
                for (i.offset > o && i.at(i.offset - 1),
                n = 0; r > n && (t = i.at(o + n),
                null  !== t); n++)
                    a.push(t);
                return a
            },
            total: function() {
                return this._total
            },
            destroy: function() {
                this.buffer.destroy(),
                this.unbind()
            }
        }),
        tt(!0, dt.data, {
            readers: {
                json: Y
            },
            Query: r,
            DataSource: Q,
            HierarchicalDataSource: Z,
            Node: K,
            ObservableObject: qt,
            ObservableArray: jt,
            LazyObservableArray: Gt,
            LocalTransport: G,
            RemoteTransport: q,
            Cache: $,
            DataReader: Y,
            Model: Qt,
            Buffer: J,
            BatchBuffer: et
        })
    }(window.kendo.jQuery),
    function(e) {
        var t = kendo.data.RemoteTransport.extend({
            init: function(e) {
                var t, n = e && e.signalr ? e.signalr : {}, i = n.promise;
                if (!i)
                    throw Error('The "promise" option must be set.');
                if ("function" != typeof i.done || "function" != typeof i.fail)
                    throw Error('The "promise" option must be a Promise.');
                if (this.promise = i,
                t = n.hub,
                !t)
                    throw Error('The "hub" option must be set.');
                if ("function" != typeof t.on || "function" != typeof t.invoke)
                    throw Error('The "hub" option is not a valid SignalR hub proxy.');
                this.hub = t,
                kendo.data.RemoteTransport.fn.init.call(this, e)
            },
            push: function(e) {
                var t = this.options.signalr.client || {};
                t.create && this.hub.on(t.create, e.pushCreate),
                t.update && this.hub.on(t.update, e.pushUpdate),
                t.destroy && this.hub.on(t.destroy, e.pushDestroy)
            },
            _crud: function(t, n) {
                var i, o, r = this.hub, a = this.options.signalr.server;
                if (!a || !a[n])
                    throw Error(kendo.format('The "server.{0}" option must be set.', n));
                i = [a[n]],
                o = this.parameterMap(t.data, n),
                e.isEmptyObject(o) || i.push(o),
                this.promise.done(function() {
                    r.invoke.apply(r, i).done(t.success).fail(t.error)
                })
            },
            read: function(e) {
                this._crud(e, "read")
            },
            create: function(e) {
                this._crud(e, "create")
            },
            update: function(e) {
                this._crud(e, "update")
            },
            destroy: function(e) {
                this._crud(e, "destroy")
            }
        });
        e.extend(!0, kendo.data, {
            transports: {
                signalr: t
            }
        })
    }(window.kendo.jQuery),
    function(e, t) {
        function n(t, n, i) {
            return v.extend({
                init: function(e, t, n) {
                    var i = this;
                    v.fn.init.call(i, e.element[0], t, n),
                    i.widget = e,
                    i._dataBinding = E(i.dataBinding, i),
                    i._dataBound = E(i.dataBound, i),
                    i._itemChange = E(i.itemChange, i)
                },
                itemChange: function(e) {
                    a(e.item[0], e.data, this._ns(e.ns), [e.data].concat(this.bindings[t]._parents()))
                },
                dataBinding: function(e) {
                    var t, n, i = this.widget, o = e.removedItems || i.items();
                    for (t = 0,
                    n = o.length; n > t; t++)
                        c(o[t])
                },
                _ns: function(t) {
                    t = t || C.ui;
                    var n = [C.ui, C.dataviz.ui, C.mobile.ui];
                    return n.splice(e.inArray(t, n), 1),
                    n.unshift(t),
                    C.rolesFromNamespaces(n)
                },
                dataBound: function(e) {
                    var i, o, r, s, l = this.widget, c = e.addedItems || l.items(), d = l[n], u = (d.group() || [],
                    C.data.HierarchicalDataSource);
                    if (!(u && d instanceof u) && c.length)
                        for (r = e.addedDataItems || d.flatView(),
                        s = this.bindings[t]._parents(),
                        i = 0,
                        o = r.length; o > i; i++)
                            a(c[i], r[i], this._ns(e.ns), [r[i]].concat(s))
                },
                refresh: function(e) {
                    var o, r = this, a = r.widget;
                    e = e || {},
                    e.action || (r.destroy(),
                    a.bind("dataBinding", r._dataBinding),
                    a.bind("dataBound", r._dataBound),
                    a.bind("itemChange", r._itemChange),
                    o = r.bindings[t].get(),
                    a[n] instanceof C.data.DataSource && a[n] != o && (o instanceof C.data.DataSource ? a[i](o) : o && o._dataSource ? a[i](o._dataSource) : a[n].data(o)))
                },
                destroy: function() {
                    var e = this.widget;
                    e.unbind("dataBinding", this._dataBinding),
                    e.unbind("dataBound", this._dataBound),
                    e.unbind("itemChange", this._itemChange)
                }
            })
        }
        function i(e, n) {
            var i = C.initWidget(e, {}, n);
            return i ? new b(i) : t
        }
        function o(e) {
            var t, n, i, r, a, s, l, c = {};
            for (l = e.match(x),
            t = 0,
            n = l.length; n > t; t++)
                i = l[t],
                r = i.indexOf(":"),
                a = i.substring(0, r),
                s = i.substring(r + 1),
                "{" == s.charAt(0) && (s = o(s)),
                c[a] = s;
            return c
        }
        function r(e, t, n) {
            var i, o = {};
            for (i in e)
                o[i] = new n(t,e[i]);
            return o
        }
        function a(e, t, n, s) {
            var c, d, u, h = e.getAttribute("data-" + C.ns + "role"), f = e.getAttribute("data-" + C.ns + "bind"), v = e.children, _ = [], y = !0, b = {};
            if (s = s || [t],
            (h || f) && l(e),
            h && (u = i(e, n)),
            f && (f = o(f.replace(k, "")),
            u || (b = C.parseOptions(e, {
                textField: "",
                valueField: "",
                template: "",
                valueUpdate: R,
                valuePrimitive: !1,
                autoBind: !0
            }),
            b.roles = n,
            u = new w(e,b)),
            u.source = t,
            d = r(f, s, p),
            b.template && (d.template = new m(s,"",b.template)),
            d.click && (f.events = f.events || {},
            f.events.click = f.click,
            d.click.destroy(),
            delete d.click),
            d.source && (y = !1),
            f.attr && (d.attr = r(f.attr, s, p)),
            f.style && (d.style = r(f.style, s, p)),
            f.events && (d.events = r(f.events, s, g)),
            u.bind(d)),
            u && (e.kendoBindingTarget = u),
            y && v) {
                for (c = 0; v.length > c; c++)
                    _[c] = v[c];
                for (c = 0; _.length > c; c++)
                    a(_[c], t, n, s)
            }
        }
        function s(t, n) {
            var i, o, r, s = C.rolesFromNamespaces([].slice.call(arguments, 2));
            for (n = C.observable(n),
            t = e(t),
            i = 0,
            o = t.length; o > i; i++)
                r = t[i],
                1 === r.nodeType && a(r, n, s)
        }
        function l(e) {
            var t = e.kendoBindingTarget;
            t && (t.destroy(),
            F ? delete e.kendoBindingTarget : e.removeAttribute ? e.removeAttribute("kendoBindingTarget") : e.kendoBindingTarget = null )
        }
        function c(e) {
            l(e),
            d(e)
        }
        function d(e) {
            var t, n, i = e.children;
            if (i)
                for (t = 0,
                n = i.length; n > t; t++)
                    c(i[t])
        }
        function u(t) {
            var n, i;
            for (t = e(t),
            n = 0,
            i = t.length; i > n; n++)
                c(t[n])
        }
        function h(e, t) {
            var n = e.element
              , i = n[0].kendoBindingTarget;
            i && s(n, i.source, t)
        }
        var f, p, g, m, v, _, y, w, b, x, k, C = window.kendo, S = C.Observable, T = C.data.ObservableObject, D = C.data.ObservableArray, A = {}.toString, P = {}, M = C.Class, E = e.proxy, I = "value", B = "source", z = "events", L = "checked", F = !0, R = "change";
        !function() {
            var e = document.createElement("a");
            e.innerText !== t ? f = "innerText" : e.textContent !== t && (f = "textContent");
            try {
                delete e.test
            } catch (n) {
                F = !1
            }
        }(),
        p = S.extend({
            init: function(e, t) {
                var n = this;
                S.fn.init.call(n),
                n.source = e[0],
                n.parents = e,
                n.path = t,
                n.dependencies = {},
                n.dependencies[t] = !0,
                n.observable = n.source instanceof S,
                n._access = function(e) {
                    n.dependencies[e.field] = !0
                }
                ,
                n.observable && (n._change = function(e) {
                    n.change(e)
                }
                ,
                n.source.bind(R, n._change))
            },
            _parents: function() {
                var t, n = this.parents, i = this.get();
                return i && "function" == typeof i.parent && (t = i.parent(),
                e.inArray(t, n) < 0 && (n = [t].concat(n))),
                n
            },
            change: function(e) {
                var t, n, i = e.field, o = this;
                if ("this" === o.path)
                    o.trigger(R, e);
                else
                    for (t in o.dependencies)
                        if (0 === t.indexOf(i) && (n = t.charAt(i.length),
                        !n || "." === n || "[" === n)) {
                            o.trigger(R, e);
                            break
                        }
            },
            start: function(e) {
                e.bind("get", this._access)
            },
            stop: function(e) {
                e.unbind("get", this._access)
            },
            get: function() {
                var e = this
                  , n = e.source
                  , i = 0
                  , o = e.path
                  , r = n;
                if (!e.observable)
                    return r;
                for (e.start(e.source),
                r = n.get(o); r === t && n; )
                    n = e.parents[++i],
                    n instanceof T && (r = n.get(o));
                if (r === t)
                    for (n = e.source; r === t && n; )
                        n = n.parent(),
                        n instanceof T && (r = n.get(o));
                return "function" == typeof r && (i = o.lastIndexOf("."),
                i > 0 && (n = n.get(o.substring(0, i))),
                e.start(n),
                r = n !== e.source ? r.call(n, e.source) : r.call(n),
                e.stop(n)),
                n && n !== e.source && (e.currentSource = n,
                n.unbind(R, e._change).bind(R, e._change)),
                e.stop(e.source),
                r
            },
            set: function(e) {
                var t = this.currentSource || this.source
                  , n = C.getter(this.path)(t);
                "function" == typeof n ? t !== this.source ? n.call(t, this.source, e) : n.call(t, e) : t.set(this.path, e)
            },
            destroy: function() {
                this.observable && (this.source.unbind(R, this._change),
                this.currentSource && this.currentSource.unbind(R, this._change)),
                this.unbind()
            }
        }),
        g = p.extend({
            get: function() {
                var e, t = this.source, n = this.path, i = 0;
                for (e = t.get(n); !e && t; )
                    t = this.parents[++i],
                    t instanceof T && (e = t.get(n));
                return E(e, t)
            }
        }),
        m = p.extend({
            init: function(e, t, n) {
                var i = this;
                p.fn.init.call(i, e, t),
                i.template = n
            },
            render: function(e) {
                var t;
                return this.start(this.source),
                t = C.render(this.template, e),
                this.stop(this.source),
                t
            }
        }),
        v = M.extend({
            init: function(e, t, n) {
                this.element = e,
                this.bindings = t,
                this.options = n
            },
            bind: function(e, t) {
                var n = this;
                e = t ? e[t] : e,
                e.bind(R, function(e) {
                    n.refresh(t || e)
                }),
                n.refresh(t)
            },
            destroy: function() {}
        }),
        _ = v.extend({
            dataType: function() {
                var e = this.element.getAttribute("data-type") || this.element.type || "text";
                return e.toLowerCase()
            },
            parsedValue: function() {
                return this._parseValue(this.element.value, this.dataType())
            },
            _parseValue: function(e, t) {
                return "date" == t ? e = C.parseDate(e, "yyyy-MM-dd") : "datetime-local" == t ? e = C.parseDate(e, ["yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm"]) : "number" == t ? e = C.parseFloat(e) : "boolean" == t && (e = e.toLowerCase(),
                e = null  !== C.parseFloat(e) ? !!C.parseFloat(e) : "true" === e.toLowerCase()),
                e
            }
        }),
        P.attr = v.extend({
            refresh: function(e) {
                this.element.setAttribute(e, this.bindings.attr[e].get())
            }
        }),
        P.style = v.extend({
            refresh: function(e) {
                this.element.style[e] = this.bindings.style[e].get() || ""
            }
        }),
        P.enabled = v.extend({
            refresh: function() {
                this.bindings.enabled.get() ? this.element.removeAttribute("disabled") : this.element.setAttribute("disabled", "disabled")
            }
        }),
        P.readonly = v.extend({
            refresh: function() {
                this.bindings.readonly.get() ? this.element.setAttribute("readonly", "readonly") : this.element.removeAttribute("readonly")
            }
        }),
        P.disabled = v.extend({
            refresh: function() {
                this.bindings.disabled.get() ? this.element.setAttribute("disabled", "disabled") : this.element.removeAttribute("disabled")
            }
        }),
        P.events = v.extend({
            init: function(e, t, n) {
                v.fn.init.call(this, e, t, n),
                this.handlers = {}
            },
            refresh: function(t) {
                var n = e(this.element)
                  , i = this.bindings.events[t]
                  , o = this.handlers[t];
                o && n.off(t, o),
                o = this.handlers[t] = i.get(),
                n.on(t, i.source, o)
            },
            destroy: function() {
                var t, n = e(this.element);
                for (t in this.handlers)
                    n.off(t, this.handlers[t])
            }
        }),
        P.text = v.extend({
            refresh: function() {
                var e = this.bindings.text.get();
                null  == e && (e = ""),
                this.element[f] = e
            }
        }),
        P.visible = v.extend({
            refresh: function() {
                this.element.style.display = this.bindings.visible.get() ? "" : "none"
            }
        }),
        P.invisible = v.extend({
            refresh: function() {
                this.element.style.display = this.bindings.invisible.get() ? "none" : ""
            }
        }),
        P.html = v.extend({
            refresh: function() {
                this.element.innerHTML = this.bindings.html.get()
            }
        }),
        P.value = _.extend({
            init: function(t, n, i) {
                _.fn.init.call(this, t, n, i),
                this._change = E(this.change, this),
                this.eventName = i.valueUpdate || R,
                e(this.element).on(this.eventName, this._change),
                this._initChange = !1
            },
            change: function() {
                this._initChange = this.eventName != R,
                this.bindings[I].set(this.parsedValue()),
                this._initChange = !1
            },
            refresh: function() {
                var e, t;
                this._initChange || (e = this.bindings[I].get(),
                null  == e && (e = ""),
                t = this.dataType(),
                "date" == t ? e = C.toString(e, "yyyy-MM-dd") : "datetime-local" == t && (e = C.toString(e, "yyyy-MM-ddTHH:mm:ss")),
                this.element.value = e),
                this._initChange = !1
            },
            destroy: function() {
                e(this.element).off(this.eventName, this._change)
            }
        }),
        P.source = v.extend({
            init: function(e, t, n) {
                v.fn.init.call(this, e, t, n);
                var i = this.bindings.source.get();
                i instanceof C.data.DataSource && n.autoBind !== !1 && i.fetch()
            },
            refresh: function(e) {
                var t = this
                  , n = t.bindings.source.get();
                n instanceof D || n instanceof C.data.DataSource ? (e = e || {},
                "add" == e.action ? t.add(e.index, e.items) : "remove" == e.action ? t.remove(e.index, e.items) : "itemchange" != e.action && t.render()) : t.render()
            },
            container: function() {
                var e = this.element;
                return "table" == e.nodeName.toLowerCase() && (e.tBodies[0] || e.appendChild(document.createElement("tbody")),
                e = e.tBodies[0]),
                e
            },
            template: function() {
                var e = this.options
                  , t = e.template
                  , n = this.container().nodeName.toLowerCase();
                return t || (t = "select" == n ? e.valueField || e.textField ? C.format('<option value="#:{0}#">#:{1}#</option>', e.valueField || e.textField, e.textField || e.valueField) : "<option>#:data#</option>" : "tbody" == n ? "<tr><td>#:data#</td></tr>" : "ul" == n || "ol" == n ? "<li>#:data#</li>" : "#:data#",
                t = C.template(t)),
                t
            },
            add: function(t, n) {
                var i, o, r, s, l = this.container(), c = l.cloneNode(!1), d = l.children[t];
                if (e(c).html(C.render(this.template(), n)),
                c.children.length)
                    for (i = this.bindings.source._parents(),
                    o = 0,
                    r = n.length; r > o; o++)
                        s = c.children[0],
                        l.insertBefore(s, d || null ),
                        a(s, n[o], this.options.roles, [n[o]].concat(i))
            },
            remove: function(e, t) {
                var n, i, o = this.container();
                for (n = 0; t.length > n; n++)
                    i = o.children[e],
                    c(i),
                    o.removeChild(i)
            },
            render: function() {
                var t, n, i, o = this.bindings.source.get(), r = this.container(), s = this.template();
                if (o instanceof C.data.DataSource && (o = o.view()),
                o instanceof D || "[object Array]" === A.call(o) || (o = [o]),
                this.bindings.template) {
                    if (d(r),
                    e(r).html(this.bindings.template.render(o)),
                    r.children.length)
                        for (t = this.bindings.source._parents(),
                        n = 0,
                        i = o.length; i > n; n++)
                            a(r.children[n], o[n], this.options.roles, [o[n]].concat(t))
                } else
                    e(r).html(C.render(s, o))
            }
        }),
        P.input = {
            checked: _.extend({
                init: function(t, n, i) {
                    _.fn.init.call(this, t, n, i),
                    this._change = E(this.change, this),
                    e(this.element).change(this._change)
                },
                change: function() {
                    var e, t, n, i = this.element, o = this.value();
                    if ("radio" == i.type)
                        o = this.parsedValue(),
                        this.bindings[L].set(o);
                    else if ("checkbox" == i.type)
                        if (e = this.bindings[L].get(),
                        e instanceof D) {
                            if (o = this.parsedValue(),
                            o instanceof Date) {
                                for (n = 0; e.length > n; n++)
                                    if (e[n] instanceof Date && +e[n] === +o) {
                                        t = n;
                                        break
                                    }
                            } else
                                t = e.indexOf(o);
                            t > -1 ? e.splice(t, 1) : e.push(o)
                        } else
                            this.bindings[L].set(o)
                },
                refresh: function() {
                    var e, t, n = this.bindings[L].get(), i = n, o = this.dataType(), r = this.element;
                    if ("checkbox" == r.type)
                        if (i instanceof D) {
                            if (e = -1,
                            n = this.parsedValue(),
                            n instanceof Date) {
                                for (t = 0; i.length > t; t++)
                                    if (i[t] instanceof Date && +i[t] === +n) {
                                        e = t;
                                        break
                                    }
                            } else
                                e = i.indexOf(n);
                            r.checked = e >= 0
                        } else
                            r.checked = i;
                    else
                        "radio" == r.type && null  != n && ("date" == o ? n = C.toString(n, "yyyy-MM-dd") : "datetime-local" == o && (n = C.toString(n, "yyyy-MM-ddTHH:mm:ss")),
                        r.value === "" + n && (r.checked = !0))
                },
                value: function() {
                    var e = this.element
                      , t = e.value;
                    return "checkbox" == e.type && (t = e.checked),
                    t
                },
                destroy: function() {
                    e(this.element).off(R, this._change)
                }
            })
        },
        P.select = {
            value: _.extend({
                init: function(t, n, i) {
                    _.fn.init.call(this, t, n, i),
                    this._change = E(this.change, this),
                    e(this.element).change(this._change)
                },
                parsedValue: function() {
                    var e, t, n, i, o = this.dataType(), r = [];
                    for (n = 0,
                    i = this.element.options.length; i > n; n++)
                        t = this.element.options[n],
                        t.selected && (e = t.attributes.value,
                        e = e && e.specified ? t.value : t.text,
                        r.push(this._parseValue(e, o)));
                    return r
                },
                change: function() {
                    var e, n, i, o, r, a, s = [], l = this.options.valueField || this.options.textField, c = this.options.valuePrimitive;
                    if (s = this.parsedValue(),
                    l)
                        for (e = this.bindings.source.get(),
                        e instanceof C.data.DataSource && (e = e.view()),
                        n = 0; s.length > n; n++)
                            for (o = 0,
                            r = e.length; r > o; o++)
                                if (a = c ? this._parseValue(s[n], this.dataType()) === e[o].get(l) : "" + this._parseValue(e[o].get(l), this.dataType()) === s[n]) {
                                    s[n] = e[o];
                                    break
                                }
                    i = this.bindings[I].get(),
                    i instanceof D ? i.splice.apply(i, [0, i.length].concat(s)) : this.bindings[I].set(c || !(i instanceof T || null  === i || i === t) && l ? s[0].get(l) : s[0])
                },
                refresh: function() {
                    var e, t, n, i = this.element, o = i.options, r = this.bindings[I].get(), a = r, s = this.options.valueField || this.options.textField, l = !1, c = this.dataType();
                    for (a instanceof D || (a = new D([r])),
                    i.selectedIndex = -1,
                    n = 0; a.length > n; n++)
                        for (r = a[n],
                        s && r instanceof T && (r = r.get(s)),
                        "date" == c ? r = C.toString(a[n], "yyyy-MM-dd") : "datetime-local" == c && (r = C.toString(a[n], "yyyy-MM-ddTHH:mm:ss")),
                        e = 0; o.length > e; e++)
                            t = o[e].value,
                            "" === t && "" !== r && (t = o[e].text),
                            null  != r && t == "" + r && (o[e].selected = !0,
                            l = !0)
                },
                destroy: function() {
                    e(this.element).off(R, this._change)
                }
            })
        },
        P.widget = {
            events: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e,
                    this.handlers = {}
                },
                refresh: function(e) {
                    var t = this.bindings.events[e]
                      , n = this.handlers[e];
                    n && this.widget.unbind(e, n),
                    n = t.get(),
                    this.handlers[e] = function(e) {
                        e.data = t.source,
                        n(e),
                        e.data === t.source && delete e.data
                    }
                    ,
                    this.widget.bind(e, this.handlers[e])
                },
                destroy: function() {
                    var e;
                    for (e in this.handlers)
                        this.widget.unbind(e, this.handlers[e])
                }
            }),
            checked: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e,
                    this._change = E(this.change, this),
                    this.widget.bind(R, this._change)
                },
                change: function() {
                    this.bindings[L].set(this.value())
                },
                refresh: function() {
                    this.widget.check(this.bindings[L].get() === !0)
                },
                value: function() {
                    var e = this.element
                      , t = e.value;
                    return ("on" == t || "off" == t) && (t = e.checked),
                    t
                },
                destroy: function() {
                    this.widget.unbind(R, this._change)
                }
            }),
            visible: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    var e = this.bindings.visible.get();
                    this.widget.wrapper[0].style.display = e ? "" : "none"
                }
            }),
            invisible: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    var e = this.bindings.invisible.get();
                    this.widget.wrapper[0].style.display = e ? "none" : ""
                }
            }),
            enabled: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    this.widget.enable && this.widget.enable(this.bindings.enabled.get())
                }
            }),
            disabled: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    this.widget.enable && this.widget.enable(!this.bindings.disabled.get())
                }
            }),
            source: n("source", "dataSource", "setDataSource"),
            value: v.extend({
                init: function(t, n, i) {
                    v.fn.init.call(this, t.element[0], n, i),
                    this.widget = t,
                    this._change = e.proxy(this.change, this),
                    this.widget.first(R, this._change);
                    var o = this.bindings.value.get();
                    this._valueIsObservableObject = !i.valuePrimitive && (null  == o || o instanceof T),
                    this._valueIsObservableArray = o instanceof D,
                    this._initChange = !1
                },
                change: function() {
                    var e, t, n, i, o, r, a, s = this.widget.value(), l = this.options.dataValueField || this.options.dataTextField, c = "[object Array]" === A.call(s), d = this._valueIsObservableObject, u = [];
                    if (this._initChange = !0,
                    l)
                        if (this.bindings.source && (a = this.bindings.source.get()),
                        "" === s && (d || this.options.valuePrimitive))
                            s = null ;
                        else {
                            for ((!a || a instanceof C.data.DataSource) && (a = this.widget.dataSource.view()),
                            c && (t = s.length,
                            u = s.slice(0)),
                            o = 0,
                            r = a.length; r > o; o++)
                                if (n = a[o],
                                i = n.get(l),
                                c) {
                                    for (e = 0; t > e; e++)
                                        if (i == u[e]) {
                                            u[e] = n;
                                            break
                                        }
                                } else if (i == s) {
                                    s = d ? n : i;
                                    break
                                }
                            u[0] && (s = this._valueIsObservableArray ? u : d || !l ? u[0] : u[0].get(l))
                        }
                    this.bindings.value.set(s),
                    this._initChange = !1
                },
                refresh: function() {
                    if (!this._initChange) {
                        var e, n = this.options.dataValueField || this.options.dataTextField, i = this.bindings.value.get(), o = 0, r = [];
                        if (i === t && (i = null ),
                        n)
                            if (i instanceof D) {
                                for (e = i.length; e > o; o++)
                                    r[o] = i[o].get(n);
                                i = r
                            } else
                                i instanceof T && (i = i.get(n));
                        this.widget.value(i)
                    }
                    this._initChange = !1
                },
                destroy: function() {
                    this.widget.unbind(R, this._change)
                }
            }),
            gantt: {
                dependencies: n("dependencies", "dependencies", "setDependenciesDataSource")
            },
            multiselect: {
                value: v.extend({
                    init: function(t, n, i) {
                        v.fn.init.call(this, t.element[0], n, i),
                        this.widget = t,
                        this._change = e.proxy(this.change, this),
                        this.widget.first(R, this._change),
                        this._initChange = !1
                    },
                    change: function() {
                        var e, n, i, o, r, a, s, l, c, d = this, u = d.bindings[I].get(), h = d.options.valuePrimitive, f = h ? d.widget.value() : d.widget.dataItems(), p = this.options.dataValueField || this.options.dataTextField;
                        if (f = f.slice(0),
                        d._initChange = !0,
                        u instanceof D) {
                            for (e = [],
                            n = f.length,
                            i = 0,
                            o = 0,
                            r = u[i],
                            a = !1; r !== t; ) {
                                for (c = !1,
                                o = 0; n > o; o++)
                                    if (h ? a = f[o] == r : (l = f[o],
                                    l = l.get ? l.get(p) : l,
                                    a = l == (r.get ? r.get(p) : r)),
                                    a) {
                                        f.splice(o, 1),
                                        n -= 1,
                                        c = !0;
                                        break
                                    }
                                c ? i += 1 : (e.push(r),
                                y(u, i, 1),
                                s = i),
                                r = u[i]
                            }
                            y(u, u.length, 0, f),
                            e.length && u.trigger("change", {
                                action: "remove",
                                items: e,
                                index: s
                            }),
                            f.length && u.trigger("change", {
                                action: "add",
                                items: f,
                                index: u.length - 1
                            })
                        } else
                            d.bindings[I].set(f);
                        d._initChange = !1
                    },
                    refresh: function() {
                        if (!this._initChange) {
                            var e, n, i = this.options.dataValueField || this.options.dataTextField, o = this.bindings.value.get(), r = 0, a = [];
                            if (o === t && (o = null ),
                            i)
                                if (o instanceof D) {
                                    for (e = o.length; e > r; r++)
                                        n = o[r],
                                        a[r] = n.get ? n.get(i) : n;
                                    o = a
                                } else
                                    o instanceof T && (o = o.get(i));
                            this.widget.value(o)
                        }
                    },
                    destroy: function() {
                        this.widget.unbind(R, this._change)
                    }
                })
            },
            scheduler: {
                source: n("source", "dataSource", "setDataSource").extend({
                    dataBound: function(e) {
                        var t, n, i, o, r = this.widget, s = e.addedItems || r.items();
                        if (s.length)
                            for (i = e.addedDataItems || r.dataItems(),
                            o = this.bindings.source._parents(),
                            t = 0,
                            n = i.length; n > t; t++)
                                a(s[t], i[t], this._ns(e.ns), [i[t]].concat(o))
                    }
                })
            }
        },
        y = function(e, t, n, i) {
            var o, r, a, s, l;
            if (i = i || [],
            n = n || 0,
            o = i.length,
            r = e.length,
            a = [].slice.call(e, t + n),
            s = a.length,
            o) {
                for (o = t + o,
                l = 0; o > t; t++)
                    e[t] = i[l],
                    l++;
                e.length = o
            } else if (n)
                for (e.length = t,
                n += t; n > t; )
                    delete e[--n];
            if (s) {
                for (s = t + s,
                l = 0; s > t; t++)
                    e[t] = a[l],
                    l++;
                e.length = s
            }
            for (t = e.length; r > t; )
                delete e[t],
                t++
        }
        ,
        w = M.extend({
            init: function(e, t) {
                this.target = e,
                this.options = t,
                this.toDestroy = []
            },
            bind: function(e) {
                var t, n, i, o, r, a = this instanceof b, s = this.binders();
                for (t in e)
                    t == I ? n = !0 : t == B ? i = !0 : t != z || a ? t == L ? r = !0 : this.applyBinding(t, e, s) : o = !0;
                i && this.applyBinding(B, e, s),
                n && this.applyBinding(I, e, s),
                r && this.applyBinding(L, e, s),
                o && !a && this.applyBinding(z, e, s)
            },
            binders: function() {
                return P[this.target.nodeName.toLowerCase()] || {}
            },
            applyBinding: function(e, t, n) {
                var i, o = n[e] || P[e], r = this.toDestroy, a = t[e];
                if (o)
                    if (o = new o(this.target,t,this.options),
                    r.push(o),
                    a instanceof p)
                        o.bind(a),
                        r.push(a);
                    else
                        for (i in a)
                            o.bind(a, i),
                            r.push(a[i]);
                else if ("template" !== e)
                    throw Error("The " + e + " binding is not supported by the " + this.target.nodeName.toLowerCase() + " element")
            },
            destroy: function() {
                var e, t, n = this.toDestroy;
                for (e = 0,
                t = n.length; t > e; e++)
                    n[e].destroy()
            }
        }),
        b = w.extend({
            binders: function() {
                return P.widget[this.target.options.name.toLowerCase()] || {}
            },
            applyBinding: function(e, t, n) {
                var i, o = n[e] || P.widget[e], r = this.toDestroy, a = t[e];
                if (!o)
                    throw Error("The " + e + " binding is not supported by the " + this.target.options.name + " widget");
                if (o = new o(this.target,t,this.target.options),
                r.push(o),
                a instanceof p)
                    o.bind(a),
                    r.push(a);
                else
                    for (i in a)
                        o.bind(a, i),
                        r.push(a[i])
            }
        }),
        x = /[A-Za-z0-9_\-]+:(\{([^}]*)\}|[^,}]+)/g,
        k = /\s/g,
        C.unbind = u,
        C.bind = s,
        C.data.binders = P,
        C.data.Binder = v,
        C.notify = h,
        C.observable = function(e) {
            return e instanceof T || (e = new T(e)),
            e
        }
        ,
        C.observableHierarchy = function(e) {
            function t(e) {
                var n, i;
                for (n = 0; e.length > n; n++)
                    e[n]._initChildren(),
                    i = e[n].children,
                    i.fetch(),
                    e[n].items = i.data(),
                    t(e[n].items)
            }
            var n = C.data.HierarchicalDataSource.create(e);
            return n.fetch(),
            t(n.data()),
            n._data._dataSource = n,
            n._data
        }
    }(window.kendo.jQuery),
    function(e) {
        function t(t) {
            var n, i = s.ui.validator.ruleResolvers || {}, o = {};
            for (n in i)
                e.extend(!0, o, i[n].resolve(t));
            return o
        }
        function n(e) {
            return e.replace(/&amp/g, "&amp;").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }
        function i(e) {
            return e = (e + "").split("."),
            e.length > 1 ? e[1].length : 0
        }
        function o(t) {
            return e(e.parseHTML ? e.parseHTML(t) : t)
        }
        function r(t, n) {
            var i, o, r, a, l = e();
            for (r = 0,
            a = t.length; a > r; r++)
                i = t[r],
                u.test(i.className) && (o = i.getAttribute(s.attr("for")),
                o === n && (l = l.add(i)));
            return l
        }
        var a, s = window.kendo, l = s.ui.Widget, c = ".kendoValidator", d = "k-invalid-msg", u = RegExp(d, "i"), h = "k-invalid", f = "k-valid", p = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, g = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, m = ":input:not(:button,[type=submit],[type=reset],[disabled],[readonly])", v = ":checkbox:not([disabled],[readonly])", _ = "[type=number],[type=range]", y = "blur", w = "name", b = "form", x = "novalidate", k = e.proxy, C = function(e, t) {
            return "string" == typeof t && (t = RegExp("^(?:" + t + ")$")),
            t.test(e)
        }
        , S = function(e, t, n) {
            var i = e.val();
            return e.filter(t).length && "" !== i ? C(i, n) : !0
        }
        , T = function(e, t) {
            return e.length ? null  != e[0].attributes[t] : !1
        }
        ;
        s.ui.validator || (s.ui.validator = {
            rules: {},
            messages: {}
        }),
        a = l.extend({
            init: function(n, i) {
                var o = this
                  , r = t(n)
                  , a = "[" + s.attr("validate") + "!=false]";
                i = i || {},
                i.rules = e.extend({}, s.ui.validator.rules, r.rules, i.rules),
                i.messages = e.extend({}, s.ui.validator.messages, r.messages, i.messages),
                l.fn.init.call(o, n, i),
                o._errorTemplate = s.template(o.options.errorTemplate),
                o.element.is(b) && o.element.attr(x, x),
                o._inputSelector = m + a,
                o._checkboxSelector = v + a,
                o._errors = {},
                o._attachEvents(),
                o._isValidated = !1
            },
            events: ["validate", "change"],
            options: {
                name: "Validator",
                errorTemplate: '<span class="k-widget k-tooltip k-tooltip-validation"><span class="k-icon k-warning"> </span> #=message#</span>',
                messages: {
                    required: "{0} is required",
                    pattern: "{0} is not valid",
                    min: "{0} should be greater than or equal to {1}",
                    max: "{0} should be smaller than or equal to {1}",
                    step: "{0} is not valid",
                    email: "{0} is not valid email",
                    url: "{0} is not valid URL",
                    date: "{0} is not valid date",
                    dateCompare: "End date should be greater than or equal to the start date"
                },
                rules: {
                    required: function(e) {
                        var t = e.filter("[type=checkbox]").length && !e.is(":checked")
                          , n = e.val();
                        return !(T(e, "required") && ("" === n || !n || t))
                    },
                    pattern: function(e) {
                        return e.filter("[type=text],[type=email],[type=url],[type=tel],[type=search],[type=password]").filter("[pattern]").length && "" !== e.val() ? C(e.val(), e.attr("pattern")) : !0
                    },
                    min: function(e) {
                        if (e.filter(_ + ",[" + s.attr("type") + "=number]").filter("[min]").length && "" !== e.val()) {
                            var t = parseFloat(e.attr("min")) || 0
                              , n = s.parseFloat(e.val());
                            return n >= t
                        }
                        return !0
                    },
                    max: function(e) {
                        if (e.filter(_ + ",[" + s.attr("type") + "=number]").filter("[max]").length && "" !== e.val()) {
                            var t = parseFloat(e.attr("max")) || 0
                              , n = s.parseFloat(e.val());
                            return t >= n
                        }
                        return !0
                    },
                    step: function(e) {
                        if (e.filter(_ + ",[" + s.attr("type") + "=number]").filter("[step]").length && "" !== e.val()) {
                            var t, n = parseFloat(e.attr("min")) || 0, o = parseFloat(e.attr("step")) || 1, r = parseFloat(e.val()), a = i(o);
                            return a ? (t = Math.pow(10, a),
                            Math.floor((r - n) * t) % (o * t) / Math.pow(100, a) === 0) : (r - n) % o === 0
                        }
                        return !0
                    },
                    email: function(e) {
                        return S(e, "[type=email],[" + s.attr("type") + "=email]", p)
                    },
                    url: function(e) {
                        return S(e, "[type=url],[" + s.attr("type") + "=url]", g)
                    },
                    date: function(e) {
                        return e.filter("[type^=date],[" + s.attr("type") + "=date]").length && "" !== e.val() ? null  !== s.parseDate(e.val(), e.attr(s.attr("format"))) : !0
                    }
                },
                validateOnBlur: !0
            },
            destroy: function() {
                l.fn.destroy.call(this),
                this.element.off(c)
            },
            value: function() {
                return this._isValidated ? 0 === this.errors().length : !1
            },
            _submit: function(e) {
                return this.validate() ? !0 : (e.stopPropagation(),
                e.stopImmediatePropagation(),
                e.preventDefault(),
                !1)
            },
            _checkElement: function(e) {
                var t = this.value();
                this.validateInput(e),
                this.value() !== t && this.trigger("change")
            },
            _attachEvents: function() {
                var t = this;
                t.element.is(b) && t.element.on("submit" + c, k(t._submit, t)),
                t.options.validateOnBlur && (t.element.is(m) ? (t.element.on(y + c, function() {
                    t._checkElement(t.element)
                }),
                t.element.is(v) && t.element.on("click" + c, function() {
                    t._checkElement(t.element)
                })) : (t.element.on(y + c, t._inputSelector, function() {
                    t._checkElement(e(this))
                }),
                t.element.on("click" + c, t._checkboxSelector, function() {
                    t._checkElement(e(this))
                })))
            },
            validate: function() {
                var e, t, n, i, o = !1, r = this.value();
                if (this._errors = {},
                this.element.is(m))
                    o = this.validateInput(this.element);
                else {
                    for (i = !1,
                    e = this.element.find(this._inputSelector),
                    t = 0,
                    n = e.length; n > t; t++)
                        this.validateInput(e.eq(t)) || (i = !0);
                    o = !i
                }
                return this.trigger("validate", {
                    valid: o
                }),
                r !== o && this.trigger("change"),
                o
            },
            validateInput: function(t) {
                var i, r, a, l, c, u, p, g, m, v;
                return t = e(t),
                this._isValidated = !0,
                i = this,
                r = i._errorTemplate,
                a = i._checkValidity(t),
                l = a.valid,
                c = "." + d,
                u = t.attr(w) || "",
                p = i._findMessageContainer(u).add(t.next(c).filter(function() {
                    var t = e(this);
                    return t.filter("[" + s.attr("for") + "]").length ? t.attr(s.attr("for")) === u : !0
                })).hide(),
                t.removeAttr("aria-invalid"),
                l ? delete i._errors[u] : (g = i._extractMessage(t, a.key),
                i._errors[u] = g,
                m = o(r({
                    message: n(g)
                })),
                v = p.attr("id"),
                i._decorateMessageContainer(m, u),
                v && m.attr("id", v),
                p.replaceWith(m).length || m.insertAfter(t),
                m.show(),
                t.attr("aria-invalid", !0)),
                t.toggleClass(h, !l),
                t.toggleClass(f, l),
                l
            },
            hideMessages: function() {
                var e = this
                  , t = "." + d
                  , n = e.element;
                n.is(m) ? n.next(t).hide() : n.find(t).hide()
            },
            _findMessageContainer: function(t) {
                var n, i, o, a = s.ui.validator.messageLocators, l = e();
                for (i = 0,
                o = this.element.length; o > i; i++)
                    l = l.add(r(this.element[i].getElementsByTagName("*"), t));
                for (n in a)
                    l = l.add(a[n].locate(this.element, t));
                return l
            },
            _decorateMessageContainer: function(e, t) {
                var n, i = s.ui.validator.messageLocators;
                e.addClass(d).attr(s.attr("for"), t || "");
                for (n in i)
                    i[n].decorate(e, t);
                e.attr("role", "alert")
            },
            _extractMessage: function(e, t) {
                var n = this
                  , i = n.options.messages[t]
                  , o = e.attr(w);
                return i = s.isFunction(i) ? i(e) : i,
                s.format(e.attr(s.attr(t + "-msg")) || e.attr("validationMessage") || e.attr("title") || i || "", o, e.attr(t))
            },
            _checkValidity: function(e) {
                var t, n = this.options.rules;
                for (t in n)
                    if (!n[t].call(this, e))
                        return {
                            valid: !1,
                            key: t
                        };
                return {
                    valid: !0
                }
            },
            errors: function() {
                var e, t = [], n = this._errors;
                for (e in n)
                    t.push(n[e]);
                return t
            }
        }),
        s.ui.plugin(a)
    }(window.kendo.jQuery),
    function(e, t) {
        function n(e, t) {
            if (!t)
                return e;
            e + "/" === t && (e = t);
            var n = RegExp("^" + t, "i");
            return n.test(e) || (e = t + "/" + e),
            f.protocol + "//" + (f.host + "/" + e).replace(/\/\/+/g, "/")
        }
        function i(e) {
            return e ? "#!" : "#"
        }
        function o(e) {
            var t = f.href;
            return "#!" === e && t.indexOf("#") > -1 && t.indexOf("#!") < 0 ? null  : t.split(e)[1] || ""
        }
        function r(e, t) {
            return 0 === t.indexOf(e) ? t.substr(e.length).replace(/\/\//g, "/") : t
        }
        function a(e) {
            return e.replace(/^(#)?/, "#")
        }
        function s(e) {
            return e.replace(/^(#(!)?)?/, "#!")
        }
        var l = window.kendo
          , c = "change"
          , d = "back"
          , u = "same"
          , h = l.support
          , f = window.location
          , p = window.history
          , g = 50
          , m = l.support.browser.msie
          , v = /^#*/
          , _ = window.document
          , y = l.Class.extend({
            back: function() {
                m ? setTimeout(function() {
                    p.back()
                }) : p.back()
            },
            forward: function() {
                m ? setTimeout(function() {
                    p.forward()
                }) : p.forward()
            },
            length: function() {
                return p.length
            },
            replaceLocation: function(e) {
                f.replace(e)
            }
        })
          , w = y.extend({
            init: function(e) {
                this.root = e
            },
            navigate: function(e) {
                p.pushState({}, _.title, n(e, this.root))
            },
            replace: function(e) {
                p.replaceState({}, _.title, n(e, this.root))
            },
            normalize: function(e) {
                return r(this.root, e)
            },
            current: function() {
                var e = f.pathname;
                return f.search && (e += f.search),
                r(this.root, e)
            },
            change: function(t) {
                e(window).bind("popstate.kendo", t)
            },
            stop: function() {
                e(window).unbind("popstate.kendo")
            },
            normalizeCurrent: function(e) {
                var t, r = e.root, a = f.pathname, s = o(i(e.hashBang));
                r === a + "/" && (t = r),
                r === a && s && (t = n(s.replace(v, ""), r)),
                t && p.pushState({}, _.title, t)
            }
        })
          , b = y.extend({
            init: function(e) {
                this._id = l.guid(),
                this.prefix = i(e),
                this.fix = e ? s : a
            },
            navigate: function(e) {
                f.hash = this.fix(e)
            },
            replace: function(e) {
                this.replaceLocation(this.fix(e))
            },
            normalize: function(e) {
                return e.indexOf(this.prefix) < 0 ? e : e.split(this.prefix)[1]
            },
            change: function(t) {
                h.hashChange ? e(window).on("hashchange." + this._id, t) : this._interval = setInterval(t, g)
            },
            stop: function() {
                e(window).off("hashchange." + this._id),
                clearInterval(this._interval)
            },
            current: function() {
                return o(this.prefix)
            },
            normalizeCurrent: function(e) {
                var t = f.pathname
                  , n = e.root;
                return e.pushState && n !== t ? (this.replaceLocation(n + this.prefix + r(n, t)),
                !0) : !1
            }
        })
          , x = l.Observable.extend({
            start: function(t) {
                if (t = t || {},
                this.bind([c, d, u], t),
                !this._started) {
                    this._started = !0,
                    t.root = t.root || "/";
                    var n, i = this.createAdapter(t);
                    i.normalizeCurrent(t) || (n = i.current(),
                    e.extend(this, {
                        adapter: i,
                        root: t.root,
                        historyLength: i.length(),
                        current: n,
                        locations: [n]
                    }),
                    i.change(e.proxy(this, "_checkUrl")))
                }
            },
            createAdapter: function(e) {
                return h.pushState && e.pushState ? new w(e.root) : new b(e.hashBang)
            },
            stop: function() {
                this._started && (this.adapter.stop(),
                this.unbind(c),
                this._started = !1)
            },
            change: function(e) {
                this.bind(c, e)
            },
            replace: function(e, t) {
                this._navigate(e, t, function(t) {
                    t.replace(e),
                    this.locations[this.locations.length - 1] = this.current
                })
            },
            navigate: function(e, n) {
                return "#:back" === e ? (this.backCalled = !0,
                this.adapter.back(),
                t) : (this._navigate(e, n, function(t) {
                    t.navigate(e),
                    this.locations.push(this.current)
                }),
                t)
            },
            _navigate: function(e, n, i) {
                var o = this.adapter;
                return e = o.normalize(e),
                this.current === e || this.current === decodeURIComponent(e) ? (this.trigger(u),
                t) : ((n || !this.trigger(c, {
                    url: e
                })) && (this.current = e,
                i.call(this, o),
                this.historyLength = o.length()),
                t)
            },
            _checkUrl: function() {
                var e = this.adapter
                  , n = e.current()
                  , i = e.length()
                  , o = this.historyLength === i
                  , r = n === this.locations[this.locations.length - 2] && o
                  , a = this.backCalled
                  , s = this.current;
                return null  === n || this.current === n || this.current === decodeURIComponent(n) ? !0 : (this.historyLength = i,
                this.backCalled = !1,
                this.current = n,
                r && this.trigger("back", {
                    url: s,
                    to: n
                }) ? (e.forward(),
                this.current = s,
                t) : this.trigger(c, {
                    url: n,
                    backButtonPressed: !a
                }) ? (r ? e.forward() : (e.back(),
                this.historyLength--),
                this.current = s,
                t) : (r ? this.locations.pop() : this.locations.push(n),
                t))
            }
        });
        l.History = x,
        l.History.HistoryAdapter = y,
        l.History.HashAdapter = b,
        l.History.PushStateAdapter = w,
        l.absoluteURL = n,
        l.history = new x
    }(window.kendo.jQuery),
    function() {
        function e(e, t) {
            return t ? e : "([^/]+)"
        }
        function t(t, n) {
            return RegExp("^" + t.replace(p, "\\$&").replace(u, "(?:$1)?").replace(h, e).replace(f, "(.*?)") + "$", n ? "i" : "")
        }
        function n(e) {
            return e.replace(/(\?.*)|(#.*)/g, "")
        }
        var i = window.kendo
          , o = i.history
          , r = i.Observable
          , a = "init"
          , s = "routeMissing"
          , l = "change"
          , c = "back"
          , d = "same"
          , u = /\((.*?)\)/g
          , h = /(\(\?)?:\w+/g
          , f = /\*\w+/g
          , p = /[\-{}\[\]+?.,\\\^$|#\s]/g
          , g = i.Class.extend({
            init: function(e, n, i) {
                e instanceof RegExp || (e = t(e, i)),
                this.route = e,
                this._callback = n
            },
            callback: function(e) {
                var t, o, r = 0, a = i.parseQueryStringParams(e);
                for (e = n(e),
                t = this.route.exec(e).slice(1),
                o = t.length; o > r; r++)
                    void 0 !== t[r] && (t[r] = decodeURIComponent(t[r]));
                t.push(a),
                this._callback.apply(null , t)
            },
            worksWith: function(e) {
                return this.route.test(n(e)) ? (this.callback(e),
                !0) : !1
            }
        })
          , m = r.extend({
            init: function(e) {
                e || (e = {}),
                r.fn.init.call(this),
                this.routes = [],
                this.pushState = e.pushState,
                this.hashBang = e.hashBang,
                this.root = e.root,
                this.ignoreCase = e.ignoreCase !== !1,
                this.bind([a, s, l, d], e)
            },
            destroy: function() {
                o.unbind(l, this._urlChangedProxy),
                o.unbind(d, this._sameProxy),
                o.unbind(c, this._backProxy),
                this.unbind()
            },
            start: function() {
                var e, t = this, n = function() {
                    t._same()
                }
                , i = function(e) {
                    t._back(e)
                }
                , r = function(e) {
                    t._urlChanged(e)
                }
                ;
                o.start({
                    same: n,
                    change: r,
                    back: i,
                    pushState: t.pushState,
                    hashBang: t.hashBang,
                    root: t.root
                }),
                e = {
                    url: o.current || "/",
                    preventDefault: $.noop
                },
                t.trigger(a, e) || t._urlChanged(e),
                this._urlChangedProxy = r,
                this._backProxy = i
            },
            route: function(e, t) {
                this.routes.push(new g(e,t,this.ignoreCase))
            },
            navigate: function(e, t) {
                i.history.navigate(e, t)
            },
            replace: function(e, t) {
                i.history.replace(e, t)
            },
            _back: function(e) {
                this.trigger(c, {
                    url: e.url,
                    to: e.to
                }) && e.preventDefault()
            },
            _same: function() {
                this.trigger(d)
            },
            _urlChanged: function(e) {
                var t, n, o, r, a = e.url;
                if (a || (a = "/"),
                this.trigger(l, {
                    url: e.url,
                    params: i.parseQueryStringParams(e.url),
                    backButtonPressed: e.backButtonPressed
                }))
                    return void e.preventDefault();
                for (t = 0,
                n = this.routes,
                r = n.length; r > t; t++)
                    if (o = n[t],
                    o.worksWith(a))
                        return;
                this.trigger(s, {
                    url: a,
                    params: i.parseQueryStringParams(a),
                    backButtonPressed: e.backButtonPressed
                }) && e.preventDefault()
            }
        });
        i.Router = m
    }(),
    function(e) {
        function t(e) {
            if (!e)
                return {};
            var t = e.match(v) || [];
            return {
                type: t[1],
                direction: t[3],
                reverse: "reverse" === t[5]
            }
        }
        var n = window.kendo
          , i = n.Observable
          , o = "SCRIPT"
          , r = "init"
          , a = "show"
          , s = "hide"
          , l = "transitionStart"
          , c = "transitionEnd"
          , d = "attach"
          , u = "detach"
          , h = /unrecognized expression/
          , f = i.extend({
            init: function(e, t) {
                var o = this;
                t = t || {},
                i.fn.init.call(o),
                o.content = e,
                o.id = n.guid(),
                o.tagName = t.tagName || "div",
                o.model = t.model,
                o._wrap = t.wrap !== !1,
                this._evalTemplate = t.evalTemplate || !1,
                o._fragments = {},
                o.bind([r, a, s, l, c], t)
            },
            render: function(t) {
                var i = this
                  , o = !i.element;
                return o && (i.element = i._createElement()),
                t && e(t).append(i.element),
                o && (n.bind(i.element, i.model),
                i.trigger(r)),
                t && (i._eachFragment(d),
                i.trigger(a)),
                i.element
            },
            clone: function() {
                return new p(this)
            },
            triggerBeforeShow: function() {
                return !0
            },
            triggerBeforeHide: function() {
                return !0
            },
            showStart: function() {
                this.element.css("display", "")
            },
            showEnd: function() {},
            hideEnd: function() {
                this.hide()
            },
            beforeTransition: function(e) {
                this.trigger(l, {
                    type: e
                })
            },
            afterTransition: function(e) {
                this.trigger(c, {
                    type: e
                })
            },
            hide: function() {
                this._eachFragment(u),
                this.element.detach(),
                this.trigger(s)
            },
            destroy: function() {
                var e = this.element;
                e && (n.unbind(e),
                n.destroy(e),
                e.remove())
            },
            fragments: function(t) {
                e.extend(this._fragments, t)
            },
            _eachFragment: function(e) {
                for (var t in this._fragments)
                    this._fragments[t][e](this, t)
            },
            _createElement: function() {
                var t, i, r, a = this, s = "<" + a.tagName + " />";
                try {
                    i = e(document.getElementById(a.content) || a.content),
                    i[0].tagName === o && (i = i.html())
                } catch (l) {
                    h.test(l.message) && (i = a.content)
                }
                return "string" == typeof i ? (i = i.replace(/^\s+|\s+$/g, ""),
                a._evalTemplate && (i = n.template(i)(a.model || {})),
                t = e(s).append(i),
                a._wrap || (t = t.contents())) : (t = i,
                a._evalTemplate && (r = e(n.template(e("<div />").append(t.clone(!0)).html())(a.model || {})),
                e.contains(document, t[0]) && t.replaceWith(r),
                t = r),
                a._wrap && (t = t.wrapAll(s).parent())),
                t
            }
        })
          , p = n.Class.extend({
            init: function(t) {
                e.extend(this, {
                    element: t.element.clone(!0),
                    transition: t.transition,
                    id: t.id
                }),
                t.element.parent().append(this.element)
            },
            hideEnd: function() {
                this.element.remove()
            },
            beforeTransition: e.noop,
            afterTransition: e.noop
        })
          , g = f.extend({
            init: function(e, t) {
                f.fn.init.call(this, e, t),
                this.containers = {}
            },
            container: function(e) {
                var t = this.containers[e];
                return t || (t = this._createContainer(e),
                this.containers[e] = t),
                t
            },
            showIn: function(e, t, n) {
                this.container(e).show(t, n)
            },
            _createContainer: function(e) {
                var t, n = this.render(), i = n.find(e);
                if (!i.length && n.is(e)) {
                    if (!n.is(e))
                        throw Error("can't find a container with the specified " + e + " selector");
                    i = n
                }
                return t = new _(i),
                t.bind("accepted", function(e) {
                    e.view.render(i)
                }),
                t
            }
        })
          , m = f.extend({
            attach: function(e, t) {
                e.element.find(t).replaceWith(this.render())
            },
            detach: function() {}
        })
          , v = /^(\w+)(:(\w+))?( (\w+))?$/
          , _ = i.extend({
            init: function(e) {
                i.fn.init.call(this),
                this.container = e,
                this.history = [],
                this.view = null ,
                this.running = !1
            },
            after: function() {
                this.running = !1,
                this.trigger("complete", {
                    view: this.view
                }),
                this.trigger("after")
            },
            end: function() {
                this.view.showEnd(),
                this.previous.hideEnd(),
                this.after()
            },
            show: function(e, i, o) {
                if (!e.triggerBeforeShow() || this.view && !this.view.triggerBeforeHide())
                    return this.trigger("after"),
                    !1;
                o = o || e.id;
                var r = this
                  , a = e === r.view ? e.clone() : r.view
                  , s = r.history
                  , l = s[s.length - 2] || {}
                  , c = l.id === o
                  , d = i || (c ? s[s.length - 1].transition : e.transition)
                  , u = t(d);
                return r.running && r.effect.stop(),
                "none" === d && (d = null ),
                r.trigger("accepted", {
                    view: e
                }),
                r.view = e,
                r.previous = a,
                r.running = !0,
                c ? s.pop() : s.push({
                    id: o,
                    transition: d
                }),
                a ? (d && n.effects.enabled ? (e.element.addClass("k-fx-hidden"),
                e.showStart(),
                c && !i && (u.reverse = !u.reverse),
                r.effect = n.fx(e.element).replace(a.element, u.type).beforeTransition(function() {
                    e.beforeTransition("show"),
                    a.beforeTransition("hide")
                }).afterTransition(function() {
                    e.afterTransition("show"),
                    a.afterTransition("hide")
                }).direction(u.direction).setReverse(u.reverse),
                r.effect.run().then(function() {
                    r.end()
                })) : (e.showStart(),
                r.end()),
                !0) : (e.showStart(),
                e.showEnd(),
                r.after(),
                !0)
            }
        });
        n.ViewContainer = _,
        n.Fragment = m,
        n.Layout = g,
        n.View = f,
        n.ViewClone = p
    }(window.kendo.jQuery),
    function(e) {
        function t(e, t) {
            var n = e.x.location
              , i = e.y.location
              , o = t.x.location
              , r = t.y.location
              , a = n - o
              , s = i - r;
            return {
                center: {
                    x: (n + o) / 2,
                    y: (i + r) / 2
                },
                distance: Math.sqrt(a * a + s * s)
            }
        }
        function n(e) {
            var t, n, i, o = [], a = e.originalEvent, s = e.currentTarget, l = 0;
            if (e.api)
                o.push({
                    id: 2,
                    event: e,
                    target: e.target,
                    currentTarget: e.target,
                    location: e,
                    type: "api"
                });
            else if (e.type.match(/touch/))
                for (n = a ? a.changedTouches : [],
                t = n.length; t > l; l++)
                    i = n[l],
                    o.push({
                        location: i,
                        event: e,
                        target: i.target,
                        currentTarget: s,
                        id: i.identifier,
                        type: "touch"
                    });
            else
                o.push(r.pointers || r.msPointers ? {
                    location: a,
                    event: e,
                    target: e.target,
                    currentTarget: s,
                    id: a.pointerId,
                    type: "pointer"
                } : {
                    id: 1,
                    event: e,
                    target: e.target,
                    currentTarget: s,
                    location: e,
                    type: "mouse"
                });
            return o
        }
        function i(e) {
            for (var t = o.eventMap.up.split(" "), n = 0, i = t.length; i > n; n++)
                e(t[n])
        }
        var o = window.kendo
          , r = o.support
          , a = window.document
          , s = o.Class
          , l = o.Observable
          , c = e.now
          , d = e.extend
          , u = r.mobileOS
          , h = u && u.android
          , f = 800
          , p = r.browser.msie ? 5 : 0
          , g = "press"
          , m = "hold"
          , v = "select"
          , _ = "start"
          , y = "move"
          , w = "end"
          , b = "cancel"
          , x = "tap"
          , k = "release"
          , C = "gesturestart"
          , S = "gesturechange"
          , T = "gestureend"
          , D = "gesturetap"
          , A = {
            api: 0,
            touch: 0,
            mouse: 9,
            pointer: 9
        }
          , P = !r.touch || r.mouseAndTouchPresent
          , M = s.extend({
            init: function(e, t) {
                var n = this;
                n.axis = e,
                n._updateLocationData(t),
                n.startLocation = n.location,
                n.velocity = n.delta = 0,
                n.timeStamp = c()
            },
            move: function(e) {
                var t = this
                  , n = e["page" + t.axis]
                  , i = c()
                  , o = i - t.timeStamp || 1;
                (n || !h) && (t.delta = n - t.location,
                t._updateLocationData(e),
                t.initialDelta = n - t.startLocation,
                t.velocity = t.delta / o,
                t.timeStamp = i)
            },
            _updateLocationData: function(e) {
                var t = this
                  , n = t.axis;
                t.location = e["page" + n],
                t.client = e["client" + n],
                t.screen = e["screen" + n]
            }
        })
          , E = s.extend({
            init: function(e, t, n) {
                d(this, {
                    x: new M("X",n.location),
                    y: new M("Y",n.location),
                    type: n.type,
                    threshold: e.threshold || A[n.type],
                    userEvents: e,
                    target: t,
                    currentTarget: n.currentTarget,
                    initialTouch: n.target,
                    id: n.id,
                    pressEvent: n,
                    _moved: !1,
                    _finished: !1
                })
            },
            press: function() {
                this._holdTimeout = setTimeout(e.proxy(this, "_hold"), this.userEvents.minHold),
                this._trigger(g, this.pressEvent)
            },
            _hold: function() {
                this._trigger(m, this.pressEvent)
            },
            move: function(e) {
                var t = this;
                if (!t._finished) {
                    if (t.x.move(e.location),
                    t.y.move(e.location),
                    !t._moved) {
                        if (t._withinIgnoreThreshold())
                            return;
                        if (I.current && I.current !== t.userEvents)
                            return t.dispose();
                        t._start(e)
                    }
                    t._finished || t._trigger(y, e)
                }
            },
            end: function(e) {
                var t = this;
                t.endTime = c(),
                t._finished || (t._finished = !0,
                t._trigger(k, e),
                t._moved ? t._trigger(w, e) : t._trigger(x, e),
                clearTimeout(t._holdTimeout),
                t.dispose())
            },
            dispose: function() {
                var t = this.userEvents
                  , n = t.touches;
                this._finished = !0,
                this.pressEvent = null ,
                clearTimeout(this._holdTimeout),
                n.splice(e.inArray(this, n), 1)
            },
            skip: function() {
                this.dispose()
            },
            cancel: function() {
                this.dispose()
            },
            isMoved: function() {
                return this._moved
            },
            _start: function(e) {
                clearTimeout(this._holdTimeout),
                this.startTime = c(),
                this._moved = !0,
                this._trigger(_, e)
            },
            _trigger: function(e, t) {
                var n = this
                  , i = t.event
                  , o = {
                    touch: n,
                    x: n.x,
                    y: n.y,
                    target: n.target,
                    event: i
                };
                n.userEvents.notify(e, o) && i.preventDefault()
            },
            _withinIgnoreThreshold: function() {
                var e = this.x.initialDelta
                  , t = this.y.initialDelta;
                return Math.sqrt(e * e + t * t) <= this.threshold
            }
        })
          , I = l.extend({
            init: function(t, n) {
                var s, c, u, h = this, A = o.guid();
                n = n || {},
                s = h.filter = n.filter,
                h.threshold = n.threshold || p,
                h.minHold = n.minHold || f,
                h.touches = [],
                h._maxTouches = n.multiTouch ? 2 : 1,
                h.allowSelection = n.allowSelection,
                h.captureUpIfMoved = n.captureUpIfMoved,
                h.eventNS = A,
                t = e(t).handler(h),
                l.fn.init.call(h),
                d(h, {
                    element: t,
                    surface: e(n.global && P ? a.documentElement : n.surface || t),
                    stopPropagation: n.stopPropagation,
                    pressed: !1
                }),
                h.surface.handler(h).on(o.applyEventMap("move", A), "_move").on(o.applyEventMap("up cancel", A), "_end"),
                t.on(o.applyEventMap("down", A), s, "_start"),
                (r.pointers || r.msPointers) && t.css("-ms-touch-action", "pinch-zoom double-tap-zoom"),
                n.preventDragEvent && t.on(o.applyEventMap("dragstart", A), o.preventDefault),
                t.on(o.applyEventMap("mousedown", A), s, {
                    root: t
                }, "_select"),
                h.captureUpIfMoved && r.eventCapture && (c = h.surface[0],
                u = e.proxy(h.preventIfMoving, h),
                i(function(e) {
                    c.addEventListener(e, u, !0)
                })),
                h.bind([g, m, x, _, y, w, k, b, C, S, T, D, v], n)
            },
            preventIfMoving: function(e) {
                this._isMoved() && e.preventDefault()
            },
            destroy: function() {
                var e, t = this;
                t._destroyed || (t._destroyed = !0,
                t.captureUpIfMoved && r.eventCapture && (e = t.surface[0],
                i(function(n) {
                    e.removeEventListener(n, t.preventIfMoving)
                })),
                t.element.kendoDestroy(t.eventNS),
                t.surface.kendoDestroy(t.eventNS),
                t.element.removeData("handler"),
                t.surface.removeData("handler"),
                t._disposeAll(),
                t.unbind(),
                delete t.surface,
                delete t.element,
                delete t.currentTarget)
            },
            capture: function() {
                I.current = this
            },
            cancel: function() {
                this._disposeAll(),
                this.trigger(b)
            },
            notify: function(e, n) {
                var i = this
                  , o = i.touches;
                if (this._isMultiTouch()) {
                    switch (e) {
                    case y:
                        e = S;
                        break;
                    case w:
                        e = T;
                        break;
                    case x:
                        e = D
                    }
                    d(n, {
                        touches: o
                    }, t(o[0], o[1]))
                }
                return this.trigger(e, d(n, {
                    type: e
                }))
            },
            press: function(e, t, n) {
                this._apiCall("_start", e, t, n)
            },
            move: function(e, t) {
                this._apiCall("_move", e, t)
            },
            end: function(e, t) {
                this._apiCall("_end", e, t)
            },
            _isMultiTouch: function() {
                return this.touches.length > 1
            },
            _maxTouchesReached: function() {
                return this.touches.length >= this._maxTouches
            },
            _disposeAll: function() {
                for (var e = this.touches; e.length > 0; )
                    e.pop().dispose()
            },
            _isMoved: function() {
                return e.grep(this.touches, function(e) {
                    return e.isMoved()
                }).length
            },
            _select: function(e) {
                (!this.allowSelection || this.trigger(v, {
                    event: e
                })) && e.preventDefault()
            },
            _start: function(t) {
                var i, o, r = this, a = 0, s = r.filter, l = n(t), c = l.length, d = t.which;
                if (!(d && d > 1 || r._maxTouchesReached()))
                    for (I.current = null ,
                    r.currentTarget = t.currentTarget,
                    r.stopPropagation && t.stopPropagation(); c > a && !r._maxTouchesReached(); a++)
                        o = l[a],
                        i = s ? e(o.currentTarget) : r.element,
                        i.length && (o = new E(r,i,o),
                        r.touches.push(o),
                        o.press(),
                        r._isMultiTouch() && r.notify("gesturestart", {}))
            },
            _move: function(e) {
                this._eachTouch("move", e)
            },
            _end: function(e) {
                this._eachTouch("end", e)
            },
            _eachTouch: function(e, t) {
                var i, o, r, a, s = this, l = {}, c = n(t), d = s.touches;
                for (i = 0; d.length > i; i++)
                    o = d[i],
                    l[o.id] = o;
                for (i = 0; c.length > i; i++)
                    r = c[i],
                    a = l[r.id],
                    a && a[e](r)
            },
            _apiCall: function(t, n, i, o) {
                this[t]({
                    api: !0,
                    pageX: n,
                    pageY: i,
                    clientX: n,
                    clientY: i,
                    target: e(o || this.element)[0],
                    stopPropagation: e.noop,
                    preventDefault: e.noop
                })
            }
        });
        I.defaultThreshold = function(e) {
            p = e
        }
        ,
        I.minHold = function(e) {
            f = e
        }
        ,
        o.getTouches = n,
        o.touchDelta = t,
        o.UserEvents = I
    }(window.kendo.jQuery),
    function(e, t) {
        function n(t, n) {
            try {
                return e.contains(t, n) || t == n
            } catch (i) {
                return !1
            }
        }
        function i(e, t) {
            return parseInt(e.css(t), 10) || 0
        }
        function o(e, t) {
            return Math.min(Math.max(e, t.min), t.max)
        }
        function r(e, t) {
            var n = k(e)
              , o = n.left + i(e, "borderLeftWidth") + i(e, "paddingLeft")
              , r = n.top + i(e, "borderTopWidth") + i(e, "paddingTop")
              , a = o + e.width() - t.outerWidth(!0)
              , s = r + e.height() - t.outerHeight(!0);
            return {
                x: {
                    min: o,
                    max: a
                },
                y: {
                    min: r,
                    max: s
                }
            }
        }
        function a(e, n, i) {
            for (var o, r, a = 0, s = n && n.length, l = i && i.length; e && e.parentNode; ) {
                for (a = 0; s > a; a++)
                    if (o = n[a],
                    o.element[0] === e)
                        return {
                            target: o,
                            targetElement: e
                        };
                for (a = 0; l > a; a++)
                    if (r = i[a],
                    g.matchesSelector.call(e, r.options.filter))
                        return {
                            target: r,
                            targetElement: e
                        };
                e = e.parentNode
            }
            return t
        }
        function s(e, t) {
            var n, i = t.options.group, o = e[i];
            if (_.fn.destroy.call(t),
            o.length > 1) {
                for (n = 0; o.length > n; n++)
                    if (o[n] == t) {
                        o.splice(n, 1);
                        break
                    }
            } else
                o.length = 0,
                delete e[i]
        }
        var l, c, d, u, h, f, p = window.kendo, g = p.support, m = window.document, v = p.Class, _ = p.ui.Widget, y = p.Observable, w = p.UserEvents, b = e.proxy, x = e.extend, k = p.getOffset, C = {}, S = {}, T = {}, D = p.elementUnderCursor, A = "keyup", P = "change", M = "dragstart", E = "hold", I = "drag", B = "dragend", z = "dragcancel", L = "hintDestroyed", F = "dragenter", R = "dragleave", O = "drop", N = y.extend({
            init: function(t, n) {
                var i = this
                  , o = t[0];
                i.capture = !1,
                o.addEventListener ? (e.each(p.eventMap.down.split(" "), function() {
                    o.addEventListener(this, b(i._press, i), !0)
                }),
                e.each(p.eventMap.up.split(" "), function() {
                    o.addEventListener(this, b(i._release, i), !0)
                })) : (e.each(p.eventMap.down.split(" "), function() {
                    o.attachEvent(this, b(i._press, i))
                }),
                e.each(p.eventMap.up.split(" "), function() {
                    o.attachEvent(this, b(i._release, i))
                })),
                y.fn.init.call(i),
                i.bind(["press", "release"], n || {})
            },
            captureNext: function() {
                this.capture = !0
            },
            cancelCapture: function() {
                this.capture = !1
            },
            _press: function(e) {
                var t = this;
                t.trigger("press"),
                t.capture && e.preventDefault()
            },
            _release: function(e) {
                var t = this;
                t.trigger("release"),
                t.capture && (e.preventDefault(),
                t.cancelCapture())
            }
        }), H = y.extend({
            init: function(t) {
                var n = this;
                y.fn.init.call(n),
                n.forcedEnabled = !1,
                e.extend(n, t),
                n.scale = 1,
                n.horizontal ? (n.measure = "offsetWidth",
                n.scrollSize = "scrollWidth",
                n.axis = "x") : (n.measure = "offsetHeight",
                n.scrollSize = "scrollHeight",
                n.axis = "y")
            },
            makeVirtual: function() {
                e.extend(this, {
                    virtual: !0,
                    forcedEnabled: !0,
                    _virtualMin: 0,
                    _virtualMax: 0
                })
            },
            virtualSize: function(e, t) {
                (this._virtualMin !== e || this._virtualMax !== t) && (this._virtualMin = e,
                this._virtualMax = t,
                this.update())
            },
            outOfBounds: function(e) {
                return e > this.max || this.min > e
            },
            forceEnabled: function() {
                this.forcedEnabled = !0
            },
            getSize: function() {
                return this.container[0][this.measure]
            },
            getTotal: function() {
                return this.element[0][this.scrollSize]
            },
            rescale: function(e) {
                this.scale = e
            },
            update: function(e) {
                var t = this
                  , n = t.virtual ? t._virtualMax : t.getTotal()
                  , i = n * t.scale
                  , o = t.getSize();
                (0 !== n || t.forcedEnabled) && (t.max = t.virtual ? -t._virtualMin : 0,
                t.size = o,
                t.total = i,
                t.min = Math.min(t.max, o - i),
                t.minScale = o / n,
                t.centerOffset = (i - o) / 2,
                t.enabled = t.forcedEnabled || i > o,
                e || t.trigger(P, t))
            }
        }), V = y.extend({
            init: function(e) {
                var t = this;
                y.fn.init.call(t),
                t.x = new H(x({
                    horizontal: !0
                }, e)),
                t.y = new H(x({
                    horizontal: !1
                }, e)),
                t.container = e.container,
                t.forcedMinScale = e.minScale,
                t.maxScale = e.maxScale || 100,
                t.bind(P, e)
            },
            rescale: function(e) {
                this.x.rescale(e),
                this.y.rescale(e),
                this.refresh()
            },
            centerCoordinates: function() {
                return {
                    x: Math.min(0, -this.x.centerOffset),
                    y: Math.min(0, -this.y.centerOffset)
                }
            },
            refresh: function() {
                var e = this;
                e.x.update(),
                e.y.update(),
                e.enabled = e.x.enabled || e.y.enabled,
                e.minScale = e.forcedMinScale || Math.min(e.x.minScale, e.y.minScale),
                e.fitScale = Math.max(e.x.minScale, e.y.minScale),
                e.trigger(P)
            }
        }), U = y.extend({
            init: function(e) {
                var t = this;
                x(t, e),
                y.fn.init.call(t)
            },
            outOfBounds: function() {
                return this.dimension.outOfBounds(this.movable[this.axis])
            },
            dragMove: function(e) {
                var t = this
                  , n = t.dimension
                  , i = t.axis
                  , o = t.movable
                  , r = o[i] + e;
                n.enabled && ((n.min > r && 0 > e || r > n.max && e > 0) && (e *= t.resistance),
                o.translateAxis(i, e),
                t.trigger(P, t))
            }
        }), W = v.extend({
            init: function(e) {
                var t, n, i, o, r = this;
                x(r, {
                    elastic: !0
                }, e),
                i = r.elastic ? .5 : 0,
                o = r.movable,
                r.x = t = new U({
                    axis: "x",
                    dimension: r.dimensions.x,
                    resistance: i,
                    movable: o
                }),
                r.y = n = new U({
                    axis: "y",
                    dimension: r.dimensions.y,
                    resistance: i,
                    movable: o
                }),
                r.userEvents.bind(["move", "end", "gesturestart", "gesturechange"], {
                    gesturestart: function(e) {
                        r.gesture = e,
                        r.offset = r.dimensions.container.offset()
                    },
                    gesturechange: function(e) {
                        var i, a, s, l = r.gesture, c = l.center, d = e.center, u = e.distance / l.distance, h = r.dimensions.minScale, f = r.dimensions.maxScale;
                        h >= o.scale && 1 > u && (u += .8 * (1 - u)),
                        o.scale * u >= f && (u = f / o.scale),
                        a = o.x + r.offset.left,
                        s = o.y + r.offset.top,
                        i = {
                            x: (a - c.x) * u + d.x - a,
                            y: (s - c.y) * u + d.y - s
                        },
                        o.scaleWith(u),
                        t.dragMove(i.x),
                        n.dragMove(i.y),
                        r.dimensions.rescale(o.scale),
                        r.gesture = e,
                        e.preventDefault()
                    },
                    move: function(e) {
                        e.event.target.tagName.match(/textarea|input/i) || (t.dimension.enabled || n.dimension.enabled ? (t.dragMove(e.x.delta),
                        n.dragMove(e.y.delta),
                        e.preventDefault()) : e.touch.skip())
                    },
                    end: function(e) {
                        e.preventDefault()
                    }
                })
            }
        }), j = g.transitions.prefix + "Transform";
        c = g.hasHW3D ? function(e, t, n) {
            return "translate3d(" + e + "px," + t + "px,0) scale(" + n + ")"
        }
         : function(e, t, n) {
            return "translate(" + e + "px," + t + "px) scale(" + n + ")"
        }
        ,
        d = y.extend({
            init: function(t) {
                var n = this;
                y.fn.init.call(n),
                n.element = e(t),
                n.element[0].style.webkitTransformOrigin = "left top",
                n.x = 0,
                n.y = 0,
                n.scale = 1,
                n._saveCoordinates(c(n.x, n.y, n.scale))
            },
            translateAxis: function(e, t) {
                this[e] += t,
                this.refresh()
            },
            scaleTo: function(e) {
                this.scale = e,
                this.refresh()
            },
            scaleWith: function(e) {
                this.scale *= e,
                this.refresh()
            },
            translate: function(e) {
                this.x += e.x,
                this.y += e.y,
                this.refresh()
            },
            moveAxis: function(e, t) {
                this[e] = t,
                this.refresh()
            },
            moveTo: function(e) {
                x(this, e),
                this.refresh()
            },
            refresh: function() {
                var e, t = this, n = t.x, i = t.y;
                t.round && (n = Math.round(n),
                i = Math.round(i)),
                e = c(n, i, t.scale),
                e != t.coordinates && (p.support.browser.msie && 10 > p.support.browser.version ? (t.element[0].style.position = "absolute",
                t.element[0].style.left = t.x + "px",
                t.element[0].style.top = t.y + "px") : t.element[0].style[j] = e,
                t._saveCoordinates(e),
                t.trigger(P))
            },
            _saveCoordinates: function(e) {
                this.coordinates = e
            }
        }),
        u = _.extend({
            init: function(e, t) {
                var n, i = this;
                _.fn.init.call(i, e, t),
                n = i.options.group,
                n in S ? S[n].push(i) : S[n] = [i]
            },
            events: [F, R, O],
            options: {
                name: "DropTarget",
                group: "default"
            },
            destroy: function() {
                s(S, this)
            },
            _trigger: function(e, n) {
                var i = this
                  , o = C[i.options.group];
                return o ? i.trigger(e, x({}, n.event, {
                    draggable: o,
                    dropTarget: n.dropTarget
                })) : t
            },
            _over: function(e) {
                this._trigger(F, e)
            },
            _out: function(e) {
                this._trigger(R, e)
            },
            _drop: function(e) {
                var t = this
                  , n = C[t.options.group];
                n && (n.dropped = !t._trigger(O, e))
            }
        }),
        u.destroyGroup = function(e) {
            var t, n = S[e] || T[e];
            if (n) {
                for (t = 0; n.length > t; t++)
                    _.fn.destroy.call(n[t]);
                n.length = 0,
                delete S[e],
                delete T[e]
            }
        }
        ,
        u._cache = S,
        h = u.extend({
            init: function(e, t) {
                var n, i = this;
                _.fn.init.call(i, e, t),
                n = i.options.group,
                n in T ? T[n].push(i) : T[n] = [i]
            },
            destroy: function() {
                s(T, this)
            },
            options: {
                name: "DropTargetArea",
                group: "default",
                filter: null 
            }
        }),
        f = _.extend({
            init: function(e, t) {
                var n = this;
                _.fn.init.call(n, e, t),
                n._activated = !1,
                n.userEvents = new w(n.element,{
                    global: !0,
                    allowSelection: !0,
                    filter: n.options.filter,
                    threshold: n.options.distance,
                    start: b(n._start, n),
                    hold: b(n._hold, n),
                    move: b(n._drag, n),
                    end: b(n._end, n),
                    cancel: b(n._cancel, n),
                    select: b(n._select, n)
                }),
                n._afterEndHandler = b(n._afterEnd, n),
                n._captureEscape = b(n._captureEscape, n)
            },
            events: [E, M, I, B, z, L],
            options: {
                name: "Draggable",
                distance: p.support.touch ? 0 : 5,
                group: "default",
                cursorOffset: null ,
                axis: null ,
                container: null ,
                filter: null ,
                ignore: null ,
                holdToDrag: !1,
                dropped: !1
            },
            cancelHold: function() {
                this._activated = !1
            },
            _captureEscape: function(e) {
                var t = this;
                e.keyCode === p.keys.ESC && (t._trigger(z, {
                    event: e
                }),
                t.userEvents.cancel())
            },
            _updateHint: function(t) {
                var n, i = this, r = i.options, a = i.boundaries, s = r.axis, l = i.options.cursorOffset;
                l ? n = {
                    left: t.x.location + l.left,
                    top: t.y.location + l.top
                } : (i.hintOffset.left += t.x.delta,
                i.hintOffset.top += t.y.delta,
                n = e.extend({}, i.hintOffset)),
                a && (n.top = o(n.top, a.y),
                n.left = o(n.left, a.x)),
                "x" === s ? delete n.top : "y" === s && delete n.left,
                i.hint.css(n)
            },
            _shouldIgnoreTarget: function(t) {
                var n = this.options.ignore;
                return n && e(t).is(n)
            },
            _select: function(e) {
                this._shouldIgnoreTarget(e.event.target) || e.preventDefault()
            },
            _start: function(n) {
                var i, o = this, a = o.options, s = a.container, l = a.hint;
                return this._shouldIgnoreTarget(n.touch.initialTouch) || a.holdToDrag && !o._activated ? (o.userEvents.cancel(),
                t) : (o.currentTarget = n.target,
                o.currentTargetOffset = k(o.currentTarget),
                l && (o.hint && o.hint.stop(!0, !0).remove(),
                o.hint = p.isFunction(l) ? e(l.call(o, o.currentTarget)) : l,
                i = k(o.currentTarget),
                o.hintOffset = i,
                o.hint.css({
                    position: "absolute",
                    zIndex: 2e4,
                    left: i.left,
                    top: i.top
                }).appendTo(m.body),
                o.angular("compile", function() {
                    o.hint.removeAttr("ng-repeat");
                    for (var t = e(n.target); !t.data("$$kendoScope") && t.length; )
                        t = t.parent();
                    return {
                        elements: o.hint.get(),
                        scopeFrom: t.data("$$kendoScope")
                    }
                })),
                C[a.group] = o,
                o.dropped = !1,
                s && (o.boundaries = r(s, o.hint)),
                o._trigger(M, n) && (o.userEvents.cancel(),
                o._afterEnd()),
                o.userEvents.capture(),
                e(m).on(A, o._captureEscape),
                t)
            },
            _hold: function(e) {
                this.currentTarget = e.target,
                this._trigger(E, e) ? this.userEvents.cancel() : this._activated = !0
            },
            _drag: function(n) {
                var i = this;
                n.preventDefault(),
                i._withDropTarget(n, function(i, o) {
                    if (!i)
                        return l && (l._trigger(R, x(n, {
                            dropTarget: e(l.targetElement)
                        })),
                        l = null ),
                        t;
                    if (l) {
                        if (o === l.targetElement)
                            return;
                        l._trigger(R, x(n, {
                            dropTarget: e(l.targetElement)
                        }))
                    }
                    i._trigger(F, x(n, {
                        dropTarget: e(o)
                    })),
                    l = x(i, {
                        targetElement: o
                    })
                }),
                i._trigger(I, x(n, {
                    dropTarget: l
                })),
                i.hint && i._updateHint(n)
            },
            _end: function(t) {
                var n = this;
                n._withDropTarget(t, function(n, i) {
                    n && (n._drop(x({}, t, {
                        dropTarget: e(i)
                    })),
                    l = null )
                }),
                n._trigger(B, t),
                n._cancel(t.event)
            },
            _cancel: function() {
                var e = this;
                e._activated = !1,
                e.hint && !e.dropped ? setTimeout(function() {
                    e.hint.stop(!0, !0).animate(e.currentTargetOffset, "fast", e._afterEndHandler)
                }, 0) : e._afterEnd()
            },
            _trigger: function(e, t) {
                var n = this;
                return n.trigger(e, x({}, t.event, {
                    x: t.x,
                    y: t.y,
                    currentTarget: n.currentTarget,
                    initialTarget: t.touch ? t.touch.initialTouch : null ,
                    dropTarget: t.dropTarget
                }))
            },
            _withDropTarget: function(e, t) {
                var i, o, r = this, s = r.options, l = S[s.group], c = T[s.group];
                (l && l.length || c && c.length) && (i = D(e),
                r.hint && n(r.hint[0], i) && (r.hint.hide(),
                i = D(e),
                i || (i = D(e)),
                r.hint.show()),
                o = a(i, l, c),
                o ? t(o.target, o.targetElement) : t())
            },
            destroy: function() {
                var e = this;
                _.fn.destroy.call(e),
                e._afterEnd(),
                e.userEvents.destroy(),
                e.currentTarget = null 
            },
            _afterEnd: function() {
                var t = this;
                t.hint && t.hint.remove(),
                delete C[t.options.group],
                t.trigger("destroy"),
                t.trigger(L),
                e(m).off(A, t._captureEscape)
            }
        }),
        p.ui.plugin(u),
        p.ui.plugin(h),
        p.ui.plugin(f),
        p.TapCapture = N,
        p.containerBoundaries = r,
        x(p.ui, {
            Pane: W,
            PaneDimensions: V,
            Movable: d
        })
    }(window.kendo.jQuery),
    function(e) {
        function t(t, n) {
            return t === n || e.contains(t, n)
        }
        var n = window.kendo
          , i = n.ui
          , o = i.Widget
          , r = n.support
          , a = n.getOffset
          , s = "open"
          , l = "close"
          , c = "deactivate"
          , d = "activate"
          , u = "center"
          , h = "left"
          , f = "right"
          , p = "top"
          , g = "bottom"
          , m = "absolute"
          , v = "hidden"
          , _ = "body"
          , y = "location"
          , w = "position"
          , b = "visible"
          , x = "effects"
          , k = "k-state-active"
          , C = "k-state-border"
          , S = /k-state-border-(\w+)/
          , T = ".k-picker-wrap, .k-dropdown-wrap, .k-link"
          , D = "down"
          , A = e(document.documentElement)
          , P = e(window)
          , M = "scroll"
          , E = "resize scroll"
          , I = r.transitions.css
          , B = I + "transform"
          , z = e.extend
          , L = ".kendoPopup"
          , F = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"]
          , R = o.extend({
            init: function(t, i) {
                var r, a = this;
                i = i || {},
                i.isRtl && (i.origin = i.origin || g + " " + f,
                i.position = i.position || p + " " + f),
                o.fn.init.call(a, t, i),
                t = a.element,
                i = a.options,
                a.collisions = i.collision ? i.collision.split(" ") : [],
                a.downEvent = n.applyEventMap(D, n.guid()),
                1 === a.collisions.length && a.collisions.push(a.collisions[0]),
                r = e(a.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])"),
                i.appendTo = e(e(i.appendTo)[0] || r[0] || _),
                a.element.hide().addClass("k-popup k-group k-reset").toggleClass("k-rtl", !!i.isRtl).css({
                    position: m
                }).appendTo(i.appendTo).on("mouseenter" + L, function() {
                    a._hovered = !0
                }).on("mouseleave" + L, function() {
                    a._hovered = !1
                }),
                a.wrapper = e(),
                i.animation === !1 && (i.animation = {
                    open: {
                        effects: {}
                    },
                    close: {
                        hide: !0,
                        effects: {}
                    }
                }),
                z(i.animation.open, {
                    complete: function() {
                        a.wrapper.css({
                            overflow: b
                        }),
                        a._activated = !0,
                        a._trigger(d)
                    }
                }),
                z(i.animation.close, {
                    complete: function() {
                        a._animationClose()
                    }
                }),
                a._mousedownProxy = function(e) {
                    a._mousedown(e)
                }
                ,
                a._resizeProxy = function(e) {
                    a._resize(e)
                }
                ,
                i.toggleTarget && e(i.toggleTarget).on(i.toggleEvent + L, e.proxy(a.toggle, a))
            },
            events: [s, d, l, c],
            options: {
                name: "Popup",
                toggleEvent: "click",
                origin: g + " " + h,
                position: p + " " + h,
                anchor: _,
                appendTo: null ,
                collision: "flip fit",
                viewport: window,
                copyAnchorStyles: !0,
                autosize: !1,
                modal: !1,
                adjustSize: {
                    width: 0,
                    height: 0
                },
                animation: {
                    open: {
                        effects: "slideIn:down",
                        transition: !0,
                        duration: 200
                    },
                    close: {
                        duration: 100,
                        hide: !0
                    }
                }
            },
            _animationClose: function() {
                var t, i, o, r, a = this, s = a.options;
                a.wrapper.hide(),
                t = a.wrapper.data(y),
                i = e(s.anchor),
                t && a.wrapper.css(t),
                s.anchor != _ && (o = ((i.attr("class") || "").match(S) || ["", "down"])[1],
                r = C + "-" + o,
                i.removeClass(r).children(T).removeClass(k).removeClass(r),
                a.element.removeClass(C + "-" + n.directions[o].reverse)),
                a._closing = !1,
                a._trigger(c)
            },
            destroy: function() {
                var t, i = this, r = i.options, a = i.element.off(L);
                o.fn.destroy.call(i),
                r.toggleTarget && e(r.toggleTarget).off(L),
                r.modal || (A.unbind(i.downEvent, i._mousedownProxy),
                i._scrollableParents().unbind(M, i._resizeProxy),
                P.unbind(E, i._resizeProxy)),
                n.destroy(i.element.children()),
                a.removeData(),
                r.appendTo[0] === document.body && (t = a.parent(".k-animation-container"),
                t[0] ? t.remove() : a.remove())
            },
            open: function(t, i) {
                var o, a, l, c = this, d = {
                    isFixed: !isNaN(parseInt(i, 10)),
                    x: t,
                    y: i
                }, u = c.element, h = c.options, f = "down", g = e(h.anchor), y = u[0] && u.hasClass("km-widget");
                if (!c.visible()) {
                    if (h.copyAnchorStyles && (y && "font-size" == F[0] && F.shift(),
                    u.css(n.getComputedStyles(g[0], F))),
                    u.data("animating") || c._trigger(s))
                        return;
                    c._activated = !1,
                    h.modal || (A.unbind(c.downEvent, c._mousedownProxy).bind(c.downEvent, c._mousedownProxy),
                    r.mobileOS.ios || r.mobileOS.android || (c._scrollableParents().unbind(M, c._resizeProxy).bind(M, c._resizeProxy),
                    P.unbind(E, c._resizeProxy).bind(E, c._resizeProxy))),
                    c.wrapper = a = n.wrap(u, h.autosize).css({
                        overflow: v,
                        display: "block",
                        position: m
                    }),
                    r.mobileOS.android && a.css(B, "translatez(0)"),
                    a.css(w),
                    e(h.appendTo)[0] == document.body && a.css(p, "-10000px"),
                    o = z(!0, {}, h.animation.open),
                    c.flipped = c._position(d),
                    o.effects = n.parseEffects(o.effects, c.flipped),
                    f = o.effects.slideIn ? o.effects.slideIn.direction : f,
                    h.anchor != _ && (l = C + "-" + f,
                    u.addClass(C + "-" + n.directions[f].reverse),
                    g.addClass(l).children(T).addClass(k).addClass(l)),
                    u.data(x, o.effects).kendoStop(!0).kendoAnimate(o)
                }
            },
            toggle: function() {
                var e = this;
                e[e.visible() ? l : s]()
            },
            visible: function() {
                return this.element.is(":" + b)
            },
            close: function(t) {
                var i, o, r, a, s = this, c = s.options;
                if (s.visible()) {
                    if (i = s.wrapper[0] ? s.wrapper : n.wrap(s.element).hide(),
                    s._closing || s._trigger(l))
                        return;
                    s.element.find(".k-popup").each(function() {
                        var n = e(this)
                          , i = n.data("kendoPopup");
                        i && i.close(t)
                    }),
                    A.unbind(s.downEvent, s._mousedownProxy),
                    s._scrollableParents().unbind(M, s._resizeProxy),
                    P.unbind(E, s._resizeProxy),
                    t ? o = {
                        hide: !0,
                        effects: {}
                    } : (o = z(!0, {}, c.animation.close),
                    r = s.element.data(x),
                    a = o.effects,
                    !a && !n.size(a) && r && n.size(r) && (o.effects = r,
                    o.reverse = !0),
                    s._closing = !0),
                    s.element.kendoStop(!0),
                    i.css({
                        overflow: v
                    }),
                    s.element.kendoAnimate(o)
                }
            },
            _trigger: function(e) {
                return this.trigger(e, {
                    type: e
                })
            },
            _resize: function(e) {
                var t = this;
                "resize" === e.type ? (clearTimeout(t._resizeTimeout),
                t._resizeTimeout = setTimeout(function() {
                    t._position(),
                    t._resizeTimeout = null 
                }, 50)) : (!t._hovered || t._activated && t.element.hasClass("k-list-container")) && t.close()
            },
            _mousedown: function(i) {
                var o = this
                  , r = o.element[0]
                  , a = o.options
                  , s = e(a.anchor)[0]
                  , l = a.toggleTarget
                  , c = n.eventTarget(i)
                  , d = e(c).closest(".k-popup")
                  , u = d.parent().parent(".km-shim").length;
                d = d[0],
                (u || !d || d === o.element[0]) && "popover" !== e(i.target).closest("a").data("rel") && (t(r, c) || t(s, c) || l && t(e(l)[0], c) || o.close())
            },
            _fit: function(e, t, n) {
                var i = 0;
                return e + t > n && (i = n - (e + t)),
                0 > e && (i = -e),
                i
            },
            _flip: function(e, t, n, i, o, r, a) {
                var s = 0;
                return a = a || t,
                r !== o && r !== u && o !== u && (e + a > i && (s += -(n + t)),
                0 > e + s && (s += n + t)),
                s
            },
            _scrollableParents: function() {
                return e(this.options.anchor).parentsUntil("body").filter(function(e, t) {
                    var i = n.getComputedStyles(t, ["overflow"]);
                    return "visible" != i.overflow
                })
            },
            _position: function(t) {
                var n, i, o, s, l, c, d, u, h, f, p = this, g = p.element.css(w, ""), v = p.wrapper, _ = p.options, b = e(_.viewport), x = b.offset(), k = e(_.anchor), C = _.origin.toLowerCase().split(" "), S = _.position.toLowerCase().split(" "), T = p.collisions, D = r.zoomLevel(), A = 10002, P = !!(b[0] == window && window.innerWidth && 1.02 >= D), M = 0, E = P ? window.innerWidth : b.width(), I = P ? window.innerHeight : b.height(), B = k.parents().filter(v.siblings());
                if (B[0])
                    if (i = Math.max(+B.css("zIndex"), 0))
                        A = i + 10;
                    else
                        for (n = k.parentsUntil(B),
                        o = n.length; o > M; M++)
                            i = +e(n[M]).css("zIndex"),
                            i && i > A && (A = i + 10);
                return v.css("zIndex", A),
                v.css(t && t.isFixed ? {
                    left: t.x,
                    top: t.y
                } : p._align(C, S)),
                s = a(v, w, k[0] === v.offsetParent()[0]),
                l = a(v),
                c = k.offsetParent().parent(".k-animation-container,.k-popup,.k-group"),
                c.length && (s = a(v, w, !0),
                l = a(v)),
                b[0] === window ? (l.top -= window.pageYOffset || document.documentElement.scrollTop || 0,
                l.left -= window.pageXOffset || document.documentElement.scrollLeft || 0) : (l.top -= x.top,
                l.left -= x.left),
                p.wrapper.data(y) || v.data(y, z({}, s)),
                d = z({}, l),
                u = z({}, s),
                h = _.adjustSize,
                "fit" === T[0] && (u.top += p._fit(d.top, v.outerHeight() + h.height, I / D)),
                "fit" === T[1] && (u.left += p._fit(d.left, v.outerWidth() + h.width, E / D)),
                f = z({}, u),
                "flip" === T[0] && (u.top += p._flip(d.top, g.outerHeight(), k.outerHeight(), I / D, C[0], S[0], v.outerHeight())),
                "flip" === T[1] && (u.left += p._flip(d.left, g.outerWidth(), k.outerWidth(), E / D, C[1], S[1], v.outerWidth())),
                g.css(w, m),
                v.css(u),
                u.left != f.left || u.top != f.top
            },
            _align: function(t, n) {
                var i, o = this, r = o.wrapper, s = e(o.options.anchor), l = t[0], c = t[1], d = n[0], h = n[1], p = a(s), m = e(o.options.appendTo), v = r.outerWidth(), _ = r.outerHeight(), y = s.outerWidth(), w = s.outerHeight(), b = p.top, x = p.left, k = Math.round;
                return m[0] != document.body && (i = a(m),
                b -= i.top,
                x -= i.left),
                l === g && (b += w),
                l === u && (b += k(w / 2)),
                d === g && (b -= _),
                d === u && (b -= k(_ / 2)),
                c === f && (x += y),
                c === u && (x += k(y / 2)),
                h === f && (x -= v),
                h === u && (x -= k(v / 2)),
                {
                    top: b,
                    left: x
                }
            }
        });
        i.plugin(R)
    }(window.kendo.jQuery),
    function(e) {
        var t = window.kendo
          , n = t.ui.Widget
          , i = e.proxy
          , o = Math.abs
          , r = 20
          , a = t.Class.extend({
            init: function(n, i, r) {
                r = e.extend({
                    minXDelta: 30,
                    maxYDelta: 20,
                    maxDuration: 1e3
                }, r),
                new t.UserEvents(n,{
                    surface: r.surface,
                    allowSelection: !0,
                    start: function(e) {
                        2 * o(e.x.velocity) >= o(e.y.velocity) && e.sender.capture()
                    },
                    move: function(e) {
                        var t = e.touch
                          , n = e.event.timeStamp - t.startTime
                          , a = t.x.initialDelta > 0 ? "right" : "left";
                        o(t.x.initialDelta) >= r.minXDelta && o(t.y.initialDelta) < r.maxYDelta && r.maxDuration > n && (i({
                            direction: a,
                            touch: t,
                            target: t.target
                        }),
                        t.cancel())
                    }
                })
            }
        })
          , s = n.extend({
            init: function(e, o) {
                function r(e) {
                    return function(t) {
                        s._triggerTouch(e, t)
                    }
                }
                function a(e) {
                    return function(t) {
                        s.trigger(e, {
                            touches: t.touches,
                            distance: t.distance,
                            center: t.center,
                            event: t.event
                        })
                    }
                }
                var s = this;
                n.fn.init.call(s, e, o),
                o = s.options,
                e = s.element,
                s.wrapper = e,
                s.events = new t.UserEvents(e,{
                    filter: o.filter,
                    surface: o.surface,
                    minHold: o.minHold,
                    multiTouch: o.multiTouch,
                    allowSelection: !0,
                    press: r("touchstart"),
                    hold: r("hold"),
                    tap: i(s, "_tap"),
                    gesturestart: a("gesturestart"),
                    gesturechange: a("gesturechange"),
                    gestureend: a("gestureend")
                }),
                o.enableSwipe ? (s.events.bind("start", i(s, "_swipestart")),
                s.events.bind("move", i(s, "_swipemove"))) : (s.events.bind("start", i(s, "_dragstart")),
                s.events.bind("move", r("drag")),
                s.events.bind("end", r("dragend"))),
                t.notify(s)
            },
            events: ["touchstart", "dragstart", "drag", "dragend", "tap", "doubletap", "hold", "swipe", "gesturestart", "gesturechange", "gestureend"],
            options: {
                name: "Touch",
                surface: null ,
                global: !1,
                multiTouch: !1,
                enableSwipe: !1,
                minXDelta: 30,
                maxYDelta: 20,
                maxDuration: 1e3,
                minHold: 800,
                doubleTapTimeout: 800
            },
            cancel: function() {
                this.events.cancel()
            },
            _triggerTouch: function(e, t) {
                this.trigger(e, {
                    touch: t.touch,
                    event: t.event
                }) && t.preventDefault()
            },
            _tap: function(e) {
                var n = this
                  , i = n.lastTap
                  , o = e.touch;
                i && n.options.doubleTapTimeout > o.endTime - i.endTime && t.touchDelta(o, i).distance < r ? (n._triggerTouch("doubletap", e),
                n.lastTap = null ) : (n._triggerTouch("tap", e),
                n.lastTap = o)
            },
            _dragstart: function(e) {
                this._triggerTouch("dragstart", e)
            },
            _swipestart: function(e) {
                2 * o(e.x.velocity) >= o(e.y.velocity) && e.sender.capture()
            },
            _swipemove: function(e) {
                var t = this
                  , n = t.options
                  , i = e.touch
                  , r = e.event.timeStamp - i.startTime
                  , a = i.x.initialDelta > 0 ? "right" : "left";
                o(i.x.initialDelta) >= n.minXDelta && o(i.y.initialDelta) < n.maxYDelta && n.maxDuration > r && (t.trigger("swipe", {
                    direction: a,
                    touch: e.touch
                }),
                i.cancel())
            }
        });
        window.jQuery.fn.kendoMobileSwipe = function(e, t) {
            this.each(function() {
                new a(this,e,t)
            })
        }
        ,
        t.ui.plugin(s)
    }(window.kendo.jQuery),
    function(e, t) {
        var n = window.kendo
          , i = n.mobile
          , o = n.effects
          , r = i.ui
          , a = e.proxy
          , s = e.extend
          , l = r.Widget
          , c = n.Class
          , d = n.ui.Movable
          , u = n.ui.Pane
          , h = n.ui.PaneDimensions
          , f = o.Transition
          , p = o.Animation
          , g = Math.abs
          , m = 500
          , v = .7
          , _ = .96
          , y = 10
          , w = 55
          , b = .5
          , x = 5
          , k = "km-scroller-release"
          , C = "km-scroller-refresh"
          , S = "pull"
          , T = "change"
          , D = "resize"
          , A = "scroll"
          , P = 2
          , M = p.extend({
            init: function(e) {
                var t = this;
                p.fn.init.call(t),
                s(t, e),
                t.userEvents.bind("gestureend", a(t.start, t)),
                t.tapCapture.bind("press", a(t.cancel, t))
            },
            enabled: function() {
                return this.dimensions.minScale > this.movable.scale
            },
            done: function() {
                return .01 > this.dimensions.minScale - this.movable.scale
            },
            tick: function() {
                var e = this.movable;
                e.scaleWith(1.1),
                this.dimensions.rescale(e.scale)
            },
            onEnd: function() {
                var e = this.movable;
                e.scaleTo(this.dimensions.minScale),
                this.dimensions.rescale(e.scale)
            }
        })
          , E = p.extend({
            init: function(e) {
                var t = this;
                p.fn.init.call(t),
                s(t, e, {
                    transition: new f({
                        axis: e.axis,
                        movable: e.movable,
                        onEnd: function() {
                            t._end()
                        }
                    })
                }),
                t.tapCapture.bind("press", function() {
                    t.cancel()
                }),
                t.userEvents.bind("end", a(t.start, t)),
                t.userEvents.bind("gestureend", a(t.start, t)),
                t.userEvents.bind("tap", a(t.onEnd, t))
            },
            onCancel: function() {
                this.transition.cancel()
            },
            freeze: function(e) {
                var t = this;
                t.cancel(),
                t._moveTo(e)
            },
            onEnd: function() {
                var e = this;
                e.paneAxis.outOfBounds() ? e._snapBack() : e._end()
            },
            done: function() {
                return g(this.velocity) < 1
            },
            start: function(e) {
                var t, n = this;
                n.dimension.enabled && (n.paneAxis.outOfBounds() ? n._snapBack() : (t = e.touch.id === P ? 0 : e.touch[n.axis].velocity,
                n.velocity = Math.max(Math.min(t * n.velocityMultiplier, w), -w),
                n.tapCapture.captureNext(),
                p.fn.start.call(n)))
            },
            tick: function() {
                var e = this
                  , t = e.dimension
                  , n = e.paneAxis.outOfBounds() ? b : e.friction
                  , i = e.velocity *= n
                  , o = e.movable[e.axis] + i;
                !e.elastic && t.outOfBounds(o) && (o = Math.max(Math.min(o, t.max), t.min),
                e.velocity = 0),
                e.movable.moveAxis(e.axis, o)
            },
            _end: function() {
                this.tapCapture.cancelCapture(),
                this.end()
            },
            _snapBack: function() {
                var e = this
                  , t = e.dimension
                  , n = e.movable[e.axis] > t.max ? t.max : t.min;
                e._moveTo(n)
            },
            _moveTo: function(e) {
                this.transition.moveTo({
                    location: e,
                    duration: m,
                    ease: f.easeOutExpo
                })
            }
        })
          , I = p.extend({
            init: function(e) {
                var t = this;
                n.effects.Animation.fn.init.call(this),
                s(t, e, {
                    origin: {},
                    destination: {},
                    offset: {}
                })
            },
            tick: function() {
                this._updateCoordinates(),
                this.moveTo(this.origin)
            },
            done: function() {
                return g(this.offset.y) < x && g(this.offset.x) < x
            },
            onEnd: function() {
                this.moveTo(this.destination),
                this.callback && this.callback.call()
            },
            setCoordinates: function(e, t) {
                this.offset = {},
                this.origin = e,
                this.destination = t
            },
            setCallback: function(e) {
                e && n.isFunction(e) ? this.callback = e : e = t
            },
            _updateCoordinates: function() {
                this.offset = {
                    x: (this.destination.x - this.origin.x) / 4,
                    y: (this.destination.y - this.origin.y) / 4
                },
                this.origin = {
                    y: this.origin.y + this.offset.y,
                    x: this.origin.x + this.offset.x
                }
            }
        })
          , B = c.extend({
            init: function(t) {
                var n = this
                  , i = "x" === t.axis
                  , o = e('<div class="km-touch-scrollbar km-' + (i ? "horizontal" : "vertical") + '-scrollbar" />');
                s(n, t, {
                    element: o,
                    elementSize: 0,
                    movable: new d(o),
                    scrollMovable: t.movable,
                    alwaysVisible: t.alwaysVisible,
                    size: i ? "width" : "height"
                }),
                n.scrollMovable.bind(T, a(n.refresh, n)),
                n.container.append(o),
                t.alwaysVisible && n.show()
            },
            refresh: function() {
                var e = this
                  , t = e.axis
                  , n = e.dimension
                  , i = n.size
                  , o = e.scrollMovable
                  , r = i / n.total
                  , a = Math.round(-o[t] * r)
                  , s = Math.round(i * r);
                r >= 1 ? this.element.css("display", "none") : this.element.css("display", ""),
                a + s > i ? s = i - a : 0 > a && (s += a,
                a = 0),
                e.elementSize != s && (e.element.css(e.size, s + "px"),
                e.elementSize = s),
                e.movable.moveAxis(t, a)
            },
            show: function() {
                this.element.css({
                    opacity: v,
                    visibility: "visible"
                })
            },
            hide: function() {
                this.alwaysVisible || this.element.css({
                    opacity: 0
                })
            }
        })
          , z = l.extend({
            init: function(i, o) {
                var r, c, f, p, m, v, _, y, w, b = this;
                return l.fn.init.call(b, i, o),
                i = b.element,
                (b._native = b.options.useNative && n.support.hasNativeScrolling) ? (i.addClass("km-native-scroller").prepend('<div class="km-scroll-header"/>'),
                s(b, {
                    scrollElement: i,
                    fixedContainer: i.children().first()
                }),
                t) : (i.css("overflow", "hidden").addClass("km-scroll-wrapper").wrapInner('<div class="km-scroll-container"/>').prepend('<div class="km-scroll-header"/>'),
                r = i.children().eq(1),
                c = new n.TapCapture(i),
                f = new d(r),
                p = new h({
                    element: r,
                    container: i,
                    forcedEnabled: b.options.zoom
                }),
                m = this.options.avoidScrolling,
                v = new n.UserEvents(i,{
                    allowSelection: !0,
                    preventDragEvent: !0,
                    captureUpIfMoved: !0,
                    multiTouch: b.options.zoom,
                    start: function(t) {
                        p.refresh();
                        var n = g(t.x.velocity)
                          , i = g(t.y.velocity)
                          , o = 2 * n >= i
                          , r = e.contains(b.fixedContainer[0], t.event.target)
                          , a = 2 * i >= n;
                        !r && !m(t) && b.enabled && (p.x.enabled && o || p.y.enabled && a) ? v.capture() : v.cancel()
                    }
                }),
                _ = new u({
                    movable: f,
                    dimensions: p,
                    userEvents: v,
                    elastic: b.options.elastic
                }),
                y = new M({
                    movable: f,
                    dimensions: p,
                    userEvents: v,
                    tapCapture: c
                }),
                w = new I({
                    moveTo: function(e) {
                        b.scrollTo(e.x, e.y)
                    }
                }),
                f.bind(T, function() {
                    b.scrollTop = -f.y,
                    b.scrollLeft = -f.x,
                    b.trigger(A, {
                        scrollTop: b.scrollTop,
                        scrollLeft: b.scrollLeft
                    })
                }),
                b.options.mousewheelScrolling && i.on("DOMMouseScroll mousewheel", a(this, "_wheelScroll")),
                s(b, {
                    movable: f,
                    dimensions: p,
                    zoomSnapBack: y,
                    animatedScroller: w,
                    userEvents: v,
                    pane: _,
                    tapCapture: c,
                    pulled: !1,
                    enabled: !0,
                    scrollElement: r,
                    scrollTop: 0,
                    scrollLeft: 0,
                    fixedContainer: i.children().first()
                }),
                b._initAxis("x"),
                b._initAxis("y"),
                b._wheelEnd = function() {
                    b._wheel = !1,
                    b.userEvents.end(0, b._wheelY)
                }
                ,
                p.refresh(),
                b.options.pullToRefresh && b._initPullToRefresh(),
                t)
            },
            _wheelScroll: function(e) {
                this._wheel || (this._wheel = !0,
                this._wheelY = 0,
                this.userEvents.press(0, this._wheelY)),
                clearTimeout(this._wheelTimeout),
                this._wheelTimeout = setTimeout(this._wheelEnd, 50);
                var t = n.wheelDeltaY(e);
                t && (this._wheelY += t,
                this.userEvents.move(0, this._wheelY)),
                e.preventDefault()
            },
            makeVirtual: function() {
                this.dimensions.y.makeVirtual()
            },
            virtualSize: function(e, t) {
                this.dimensions.y.virtualSize(e, t)
            },
            height: function() {
                return this.dimensions.y.size
            },
            scrollHeight: function() {
                return this.scrollElement[0].scrollHeight
            },
            scrollWidth: function() {
                return this.scrollElement[0].scrollWidth
            },
            options: {
                name: "Scroller",
                zoom: !1,
                pullOffset: 140,
                visibleScrollHints: !1,
                elastic: !0,
                useNative: !1,
                mousewheelScrolling: !0,
                avoidScrolling: function() {
                    return !1
                },
                pullToRefresh: !1,
                messages: {
                    pullTemplate: "Pull to refresh",
                    releaseTemplate: "Release to refresh",
                    refreshTemplate: "Refreshing"
                }
            },
            events: [S, A, D],
            _resize: function() {
                this._native || this.contentResized()
            },
            setOptions: function(e) {
                var t = this;
                l.fn.setOptions.call(t, e),
                e.pullToRefresh && t._initPullToRefresh()
            },
            reset: function() {
                this._native ? this.scrollElement.scrollTop(0) : (this.movable.moveTo({
                    x: 0,
                    y: 0
                }),
                this._scale(1))
            },
            contentResized: function() {
                this.dimensions.refresh(),
                this.pane.x.outOfBounds() && this.movable.moveAxis("x", this.dimensions.x.min),
                this.pane.y.outOfBounds() && this.movable.moveAxis("y", this.dimensions.y.min)
            },
            zoomOut: function() {
                var e = this.dimensions;
                e.refresh(),
                this._scale(e.fitScale),
                this.movable.moveTo(e.centerCoordinates())
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            scrollTo: function(e, t) {
                this._native ? (this.scrollElement.scrollLeft(g(e)),
                this.scrollElement.scrollTop(g(t))) : (this.dimensions.refresh(),
                this.movable.moveTo({
                    x: e,
                    y: t
                }))
            },
            animatedScrollTo: function(e, t, n) {
                var i, o;
                this._native ? this.scrollTo(e, t) : (i = {
                    x: this.movable.x,
                    y: this.movable.y
                },
                o = {
                    x: e,
                    y: t
                },
                this.animatedScroller.setCoordinates(i, o),
                this.animatedScroller.setCallback(n),
                this.animatedScroller.start())
            },
            pullHandled: function() {
                var e = this;
                e.refreshHint.removeClass(C),
                e.hintContainer.html(e.pullTemplate({})),
                e.yinertia.onEnd(),
                e.xinertia.onEnd(),
                e.userEvents.cancel()
            },
            destroy: function() {
                l.fn.destroy.call(this),
                this.userEvents && this.userEvents.destroy()
            },
            _scale: function(e) {
                this.dimensions.rescale(e),
                this.movable.scaleTo(e)
            },
            _initPullToRefresh: function() {
                var e = this;
                e.dimensions.y.forceEnabled(),
                e.pullTemplate = n.template(e.options.messages.pullTemplate),
                e.releaseTemplate = n.template(e.options.messages.releaseTemplate),
                e.refreshTemplate = n.template(e.options.messages.refreshTemplate),
                e.scrollElement.prepend('<span class="km-scroller-pull"><span class="km-icon"></span><span class="km-loading-left"></span><span class="km-loading-right"></span><span class="km-template">' + e.pullTemplate({}) + "</span></span>"),
                e.refreshHint = e.scrollElement.children().first(),
                e.hintContainer = e.refreshHint.children(".km-template"),
                e.pane.y.bind("change", a(e._paneChange, e)),
                e.userEvents.bind("end", a(e._dragEnd, e))
            },
            _dragEnd: function() {
                var e = this;
                e.pulled && (e.pulled = !1,
                e.refreshHint.removeClass(k).addClass(C),
                e.hintContainer.html(e.refreshTemplate({})),
                e.yinertia.freeze(e.options.pullOffset / 2),
                e.trigger("pull"))
            },
            _paneChange: function() {
                var e = this;
                e.movable.y / b > e.options.pullOffset ? e.pulled || (e.pulled = !0,
                e.refreshHint.removeClass(C).addClass(k),
                e.hintContainer.html(e.releaseTemplate({}))) : e.pulled && (e.pulled = !1,
                e.refreshHint.removeClass(k),
                e.hintContainer.html(e.pullTemplate({})))
            },
            _initAxis: function(e) {
                var t = this
                  , n = t.movable
                  , i = t.dimensions[e]
                  , o = t.tapCapture
                  , r = t.pane[e]
                  , a = new B({
                    axis: e,
                    movable: n,
                    dimension: i,
                    container: t.element,
                    alwaysVisible: t.options.visibleScrollHints
                });
                i.bind(T, function() {
                    a.refresh()
                }),
                r.bind(T, function() {
                    a.show()
                }),
                t[e + "inertia"] = new E({
                    axis: e,
                    paneAxis: r,
                    movable: n,
                    tapCapture: o,
                    userEvents: t.userEvents,
                    dimension: i,
                    elastic: t.options.elastic,
                    friction: t.options.friction || _,
                    velocityMultiplier: t.options.velocityMultiplier || y,
                    end: function() {
                        a.hide(),
                        t.trigger("scrollEnd", {
                            axis: e,
                            scrollTop: t.scrollTop,
                            scrollLeft: t.scrollLeft
                        })
                    }
                })
            }
        });
        r.plugin(z)
    }(window.kendo.jQuery),
    function(e, t) {
        function n(e) {
            var t, n, i = e.find(x("popover")), o = s.roles;
            for (t = 0,
            n = i.length; n > t; t++)
                r.initWidget(i[t], {}, o)
        }
        function i(e) {
            r.triggeredByInput(e) || e.preventDefault()
        }
        function o(t) {
            t.each(function() {
                r.initWidget(e(this), {}, s.roles)
            })
        }
        var r = window.kendo
          , a = r.mobile
          , s = a.ui
          , l = r.attr
          , c = s.Widget
          , d = r.ViewClone
          , u = "init"
          , h = '<div style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; z-index: 20000; display: none" />'
          , f = "beforeShow"
          , p = "show"
          , g = "afterShow"
          , m = "beforeHide"
          , v = "transitionEnd"
          , _ = "transitionStart"
          , y = "hide"
          , w = "destroy"
          , b = r.attrValue
          , x = r.roleSelector
          , k = r.directiveSelector
          , C = r.compileMobileDirective
          , S = c.extend({
            init: function(t, n) {
                c.fn.init.call(this, t, n),
                this.params = {},
                e.extend(this, n),
                this.transition = this.transition || this.defaultTransition,
                this._id(),
                this.options.$angular ? this._overlay() : (this._layout(),
                this._overlay(),
                this._scroller(),
                this._model())
            },
            events: [u, f, p, g, m, y, w, _, v],
            options: {
                name: "View",
                title: "",
                layout: null ,
                getLayout: e.noop,
                reload: !1,
                transition: "",
                defaultTransition: "",
                useNativeScrolling: !1,
                stretch: !1,
                zoom: !1,
                model: null ,
                modelScope: window,
                scroller: {},
                initWidgets: !0
            },
            enable: function(e) {
                t === e && (e = !0),
                e ? this.overlay.hide() : this.overlay.show()
            },
            destroy: function() {
                this.layout && this.layout.detach(this),
                this.trigger(w),
                c.fn.destroy.call(this),
                this.scroller && this.scroller.destroy(),
                this.options.$angular && this.element.scope().$destroy(),
                r.destroy(this.element)
            },
            purge: function() {
                this.destroy(),
                this.element.remove()
            },
            triggerBeforeShow: function() {
                return this.trigger(f, {
                    view: this
                }) ? !1 : !0
            },
            triggerBeforeHide: function() {
                return this.trigger(m, {
                    view: this
                }) ? !1 : !0
            },
            showStart: function() {
                var e = this.element;
                e.css("display", ""),
                this.inited ? this._invokeNgController() : (this.inited = !0,
                this.trigger(u, {
                    view: this
                })),
                this.layout && this.layout.attach(this),
                this._padIfNativeScrolling(),
                this.trigger(p, {
                    view: this
                }),
                r.resize(e)
            },
            showEnd: function() {
                this.trigger(g, {
                    view: this
                }),
                this._padIfNativeScrolling()
            },
            hideEnd: function() {
                var e = this;
                e.element.hide(),
                e.trigger(y, {
                    view: e
                }),
                e.layout && e.layout.trigger(y, {
                    view: e,
                    layout: e.layout
                })
            },
            beforeTransition: function(e) {
                this.trigger(_, {
                    type: e
                })
            },
            afterTransition: function(e) {
                this.trigger(v, {
                    type: e
                })
            },
            _padIfNativeScrolling: function() {
                if (a.appLevelNativeScrolling()) {
                    var e = r.support.mobileOS && r.support.mobileOS.android
                      , t = a.application.skin() || ""
                      , n = a.application.os.android || t.indexOf("android") > -1
                      , i = "flat" === t || t.indexOf("material") > -1
                      , o = !e && !n || i ? "header" : "footer"
                      , s = !e && !n || i ? "footer" : "header";
                    this.content.css({
                        paddingTop: this[o].height(),
                        paddingBottom: this[s].height()
                    })
                }
            },
            contentElement: function() {
                var e = this;
                return e.options.stretch ? e.content : e.scrollerContent
            },
            clone: function() {
                return new d(this)
            },
            _scroller: function() {
                var t = this;
                a.appLevelNativeScrolling() || (t.options.stretch ? t.content.addClass("km-stretched-view") : (t.content.kendoMobileScroller(e.extend(t.options.scroller, {
                    zoom: t.options.zoom,
                    useNative: t.options.useNativeScrolling
                })),
                t.scroller = t.content.data("kendoMobileScroller"),
                t.scrollerContent = t.scroller.scrollElement),
                r.support.kineticScrollNeeded && (e(t.element).on("touchmove", ".km-header", i),
                t.options.useNativeScrolling || e(t.element).on("touchmove", ".km-content", i)))
            },
            _model: function() {
                var e = this
                  , t = e.element
                  , i = e.options.model;
                "string" == typeof i && (i = r.getter(i)(e.options.modelScope)),
                e.model = i,
                n(t),
                e.element.css("display", ""),
                e.options.initWidgets && (i ? r.bind(t, i, s, r.ui, r.dataviz.ui) : a.init(t.children())),
                e.element.css("display", "none")
            },
            _id: function() {
                var e = this.element
                  , t = e.attr("id") || "";
                this.id = b(e, "url") || "#" + t,
                "#" == this.id && (this.id = r.guid(),
                e.attr("id", this.id))
            },
            _layout: function() {
                var e = x("content")
                  , t = this.element;
                t.addClass("km-view"),
                this.header = t.children(x("header")).addClass("km-header"),
                this.footer = t.children(x("footer")).addClass("km-footer"),
                t.children(e)[0] || t.wrapInner("<div " + l("role") + '="content"></div>'),
                this.content = t.children(x("content")).addClass("km-content"),
                this.element.prepend(this.header).append(this.footer),
                this.layout = this.options.getLayout(this.layout),
                this.layout && this.layout.setup(this)
            },
            _overlay: function() {
                this.overlay = e(h).appendTo(this.element)
            },
            _invokeNgController: function() {
                var t, n, i;
                this.options.$angular && (t = this.element.controller(),
                n = this.element.scope(),
                t && (i = e.proxy(this, "_callController", t, n),
                /^\$(digest|apply)$/.test(n.$$phase) ? i() : n.$apply(i)))
            },
            _callController: function(e, t) {
                this.element.injector().invoke(e.constructor, e, {
                    $scope: t
                })
            }
        })
          , T = c.extend({
            init: function(e, t) {
                c.fn.init.call(this, e, t),
                e = this.element,
                this.header = e.children(this._locate("header")).addClass("km-header"),
                this.footer = e.children(this._locate("footer")).addClass("km-footer"),
                this.elements = this.header.add(this.footer),
                n(e),
                this.options.$angular || r.mobile.init(this.element.children()),
                this.element.detach(),
                this.trigger(u, {
                    layout: this
                })
            },
            _locate: function(e) {
                return this.options.$angular ? k(e) : x(e)
            },
            options: {
                name: "Layout",
                id: null ,
                platform: null 
            },
            events: [u, p, y],
            setup: function(e) {
                e.header[0] || (e.header = this.header),
                e.footer[0] || (e.footer = this.footer)
            },
            detach: function(e) {
                var t = this;
                e.header === t.header && t.header[0] && e.element.prepend(t.header.detach()[0].cloneNode(!0)),
                e.footer === t.footer && t.footer.length && e.element.append(t.footer.detach()[0].cloneNode(!0))
            },
            attach: function(e) {
                var t = this
                  , n = t.currentView;
                n && t.detach(n),
                e.header === t.header && (t.header.detach(),
                e.element.children(x("header")).remove(),
                e.element.prepend(t.header)),
                e.footer === t.footer && (t.footer.detach(),
                e.element.children(x("footer")).remove(),
                e.element.append(t.footer)),
                t.trigger(p, {
                    layout: t,
                    view: e
                }),
                t.currentView = e
            }
        })
          , D = r.Observable
          , A = /<body[^>]*>(([\u000a\u000d\u2028\u2029]|.)*)<\/body>/i
          , P = "loadStart"
          , M = "loadComplete"
          , E = "showStart"
          , I = "sameViewRequested"
          , B = "viewShow"
          , z = "viewTypeDetermined"
          , L = "after"
          , F = D.extend({
            init: function(t) {
                var n, i, a, s, l = this;
                if (D.fn.init.call(l),
                e.extend(l, t),
                l.sandbox = e("<div />"),
                a = l.container,
                n = l._hideViews(a),
                l.rootView = n.first(),
                !l.rootView[0] && t.rootNeeded)
                    throw i = a[0] == r.mobile.application.element[0] ? 'Your kendo mobile application element does not contain any direct child elements with data-role="view" attribute set. Make sure that you instantiate the mobile application using the correct container.' : 'Your pane element does not contain any direct child elements with data-role="view" attribute set.',
                    Error(i);
                l.layouts = {},
                l.viewContainer = new r.ViewContainer(l.container),
                l.viewContainer.bind("accepted", function(e) {
                    e.view.params = l.params
                }),
                l.viewContainer.bind("complete", function(e) {
                    l.trigger(B, {
                        view: e.view
                    })
                }),
                l.viewContainer.bind(L, function() {
                    l.trigger(L)
                }),
                this.getLayoutProxy = e.proxy(this, "_getLayout"),
                l._setupLayouts(a),
                s = a.children(l._locate("modalview drawer")),
                l.$angular ? (l.$angular[0].viewOptions = {
                    defaultTransition: l.transition,
                    loader: l.loader,
                    container: l.container,
                    getLayout: l.getLayoutProxy
                },
                s.each(function(n, i) {
                    C(e(i), t.$angular[0])
                })) : o(s),
                this.bind(this.events, t)
            },
            events: [E, L, B, P, M, I, z],
            destroy: function() {
                r.destroy(this.container);
                for (var e in this.layouts)
                    this.layouts[e].destroy()
            },
            view: function() {
                return this.viewContainer.view
            },
            showView: function(e, t, n) {
                if (e = e.replace(RegExp("^" + this.remoteViewURLPrefix), ""),
                "" === e && this.remoteViewURLPrefix && (e = "/"),
                e.replace(/^#/, "") === this.url)
                    return this.trigger(I),
                    !1;
                this.trigger(E);
                var i = this
                  , o = function(n) {
                    return i.viewContainer.show(n, t, e)
                }
                  , a = i._findViewElement(e)
                  , s = r.widgetInstance(a);
                return i.url = e.replace(/^#/, ""),
                i.params = n,
                s && s.reload && (s.purge(),
                a = []),
                this.trigger(z, {
                    remote: 0 === a.length,
                    url: e
                }),
                a[0] ? (s || (s = i._createView(a)),
                o(s)) : (this.serverNavigation ? location.href = e : i._loadView(e, o),
                !0)
            },
            append: function(e, t) {
                var n, i, r, a = this.sandbox, s = (t || "").split("?")[0], c = this.container;
                return A.test(e) && (e = RegExp.$1),
                a[0].innerHTML = e,
                c.append(a.children("script, style")),
                n = this._hideViews(a),
                r = n.first(),
                r.length || (n = r = a.wrapInner("<div data-role=view />").children()),
                s && r.hide().attr(l("url"), s),
                this._setupLayouts(a),
                i = a.children(this._locate("modalview drawer")),
                c.append(a.children(this._locate("layout modalview drawer")).add(n)),
                o(i),
                this._createView(r)
            },
            _locate: function(e) {
                return this.$angular ? k(e) : x(e)
            },
            _findViewElement: function(e) {
                var t, n = e.split("?")[0];
                return n ? (t = this.container.children("[" + l("url") + "='" + n + "']"),
                t[0] || -1 !== n.indexOf("/") || (t = this.container.children("#" === n.charAt(0) ? n : "#" + n)),
                t) : this.rootView
            },
            _createView: function(e) {
                return this.$angular ? C(e, this.$angular[0]) : r.initWidget(e, {
                    defaultTransition: this.transition,
                    loader: this.loader,
                    container: this.container,
                    getLayout: this.getLayoutProxy,
                    modelScope: this.modelScope,
                    reload: b(e, "reload")
                }, s.roles)
            },
            _getLayout: function(e) {
                return "" === e ? null  : e ? this.layouts[e] : this.layouts[this.layout]
            },
            _loadView: function(t, n) {
                this._xhr && this._xhr.abort(),
                this.trigger(P),
                this._xhr = e.get(r.absoluteURL(t, this.remoteViewURLPrefix), "html").always(e.proxy(this, "_xhrComplete", n, t))
            },
            _xhrComplete: function(e, t, n) {
                var i = !0;
                if ("object" == typeof n && 0 === n.status) {
                    if (!(n.responseText && n.responseText.length > 0))
                        return;
                    i = !0,
                    n = n.responseText
                }
                this.trigger(M),
                i && e(this.append(n, t))
            },
            _hideViews: function(e) {
                return e.children(this._locate("view splitview")).hide()
            },
            _setupLayouts: function(t) {
                var n, i = this;
                t.children(i._locate("layout")).each(function() {
                    n = i.$angular ? C(e(this), i.$angular[0]) : r.initWidget(e(this), {}, s.roles);
                    var t = n.options.platform;
                    t && t !== a.application.os.name ? n.destroy() : i.layouts[n.options.id] = n
                })
            }
        });
        r.mobile.ViewEngine = F,
        s.plugin(S),
        s.plugin(T)
    }(window.kendo.jQuery),
    function(e) {
        var t = window.kendo
          , n = t.mobile.ui
          , i = n.Widget
          , o = e.map(t.eventMap, function(e) {
            return e
        }).join(" ").split(" ")
          , r = i.extend({
            init: function(t, n) {
                var o = this
                  , r = e('<div class="km-loader"><span class="km-loading km-spin"></span><span class="km-loading-left"></span><span class="km-loading-right"></span></div>');
                i.fn.init.call(o, r, n),
                o.container = t,
                o.captureEvents = !1,
                o._attachCapture(),
                r.append(o.options.loading).hide().appendTo(t)
            },
            options: {
                name: "Loader",
                loading: "<h1>Loading...</h1>",
                timeout: 100
            },
            show: function() {
                var e = this;
                clearTimeout(e._loading),
                e.options.loading !== !1 && (e.captureEvents = !0,
                e._loading = setTimeout(function() {
                    e.element.show()
                }, e.options.timeout))
            },
            hide: function() {
                this.captureEvents = !1,
                clearTimeout(this._loading),
                this.element.hide()
            },
            changeMessage: function(e) {
                this.options.loading = e,
                this.element.find(">h1").html(e)
            },
            transition: function() {
                this.captureEvents = !0,
                this.container.css("pointer-events", "none")
            },
            transitionDone: function() {
                this.captureEvents = !1,
                this.container.css("pointer-events", "")
            },
            _attachCapture: function() {
                function e(e) {
                    n.captureEvents && e.preventDefault()
                }
                var t, n = this;
                for (n.captureEvents = !1,
                t = 0; o.length > t; t++)
                    n.container[0].addEventListener(o[t], e, !0)
            }
        });
        n.plugin(r)
    }(window.kendo.jQuery),
    function(e, t) {
        var n = window.kendo
          , i = n.mobile
          , o = n.roleSelector
          , r = i.ui
          , a = r.Widget
          , s = i.ViewEngine
          , l = r.View
          , c = i.ui.Loader
          , d = "external"
          , u = "href"
          , h = "#!"
          , f = "navigate"
          , p = "viewShow"
          , g = "sameViewRequested"
          , m = n.support.mobileOS
          , v = m.ios && !m.appMode && m.flatVersion >= 700
          , _ = /popover|actionsheet|modalview|drawer/
          , y = "#:back"
          , w = n.attrValue
          , b = "button backbutton detailbutton listview-link"
          , x = "tab"
          , k = a.extend({
            init: function(e, t) {
                var i = this;
                a.fn.init.call(i, e, t),
                t = i.options,
                e = i.element,
                e.addClass("km-pane"),
                i.options.collapsible && e.addClass("km-collapsible-pane"),
                this.history = [],
                this.historyCallback = function(e, t, n) {
                    var o = i.transition;
                    return i.transition = null ,
                    v && n && (o = "none"),
                    i.viewEngine.showView(e, o, t)
                }
                ,
                this._historyNavigate = function(e) {
                    if (e === y) {
                        if (1 === i.history.length)
                            return;
                        i.history.pop(),
                        e = i.history[i.history.length - 1]
                    } else
                        i.history.push(e);
                    i.historyCallback(e, n.parseQueryStringParams(e))
                }
                ,
                this._historyReplace = function(e) {
                    var t = n.parseQueryStringParams(e);
                    i.history[i.history.length - 1] = e,
                    i.historyCallback(e, t)
                }
                ,
                i.loader = new c(e,{
                    loading: i.options.loading
                }),
                i.viewEngine = new s({
                    container: e,
                    transition: t.transition,
                    modelScope: t.modelScope,
                    rootNeeded: !t.initial,
                    serverNavigation: t.serverNavigation,
                    remoteViewURLPrefix: t.root || "",
                    layout: t.layout,
                    $angular: t.$angular,
                    loader: i.loader,
                    showStart: function() {
                        i.loader.transition(),
                        i.closeActiveDialogs()
                    },
                    after: function() {
                        i.loader.transitionDone()
                    },
                    viewShow: function(e) {
                        i.trigger(p, e)
                    },
                    loadStart: function() {
                        i.loader.show()
                    },
                    loadComplete: function() {
                        i.loader.hide()
                    },
                    sameViewRequested: function() {
                        i.trigger(g)
                    },
                    viewTypeDetermined: function(e) {
                        e.remote && i.options.serverNavigation || i.trigger(f, {
                            url: e.url
                        })
                    }
                }),
                this._setPortraitWidth(),
                n.onResize(function() {
                    i._setPortraitWidth()
                }),
                i._setupAppLinks()
            },
            closeActiveDialogs: function() {
                var t = this.element.find(o("actionsheet popover modalview")).filter(":visible");
                t.each(function() {
                    n.widgetInstance(e(this), r).close()
                })
            },
            navigateToInitial: function() {
                var e = this.options.initial;
                e && this.navigate(e)
            },
            options: {
                name: "Pane",
                portraitWidth: "",
                transition: "",
                layout: "",
                collapsible: !1,
                initial: null ,
                modelScope: window,
                loading: "<h1>Loading...</h1>"
            },
            events: [f, p, g],
            append: function(e) {
                return this.viewEngine.append(e)
            },
            destroy: function() {
                a.fn.destroy.call(this),
                this.viewEngine.destroy(),
                this.userEvents.destroy()
            },
            navigate: function(e, t) {
                e instanceof l && (e = e.id),
                this.transition = t,
                this._historyNavigate(e)
            },
            replace: function(e, t) {
                e instanceof l && (e = e.id),
                this.transition = t,
                this._historyReplace(e)
            },
            bindToRouter: function(e) {
                var t = this
                  , i = this.history
                  , o = this.viewEngine;
                e.bind("init", function(t) {
                    var r, a = t.url, s = e.pushState ? a : "/";
                    o.rootView.attr(n.attr("url"), s),
                    r = i.length,
                    "/" === a && r && (e.navigate(i[r - 1], !0),
                    t.preventDefault())
                }),
                e.bind("routeMissing", function(e) {
                    t.historyCallback(e.url, e.params, e.backButtonPressed) || e.preventDefault()
                }),
                e.bind("same", function() {
                    t.trigger(g)
                }),
                t._historyNavigate = function(t) {
                    e.navigate(t)
                }
                ,
                t._historyReplace = function(t) {
                    e.replace(t)
                }
            },
            hideLoading: function() {
                this.loader.hide()
            },
            showLoading: function() {
                this.loader.show()
            },
            changeLoadingMessage: function(e) {
                this.loader.changeMessage(e)
            },
            view: function() {
                return this.viewEngine.view()
            },
            _setPortraitWidth: function() {
                var e, t = this.options.portraitWidth;
                t && (e = n.mobile.application.element.is(".km-vertical") ? t : "auto",
                this.element.css("width", e))
            },
            _setupAppLinks: function() {
                var e = this;
                this.element.handler(this).on("down", o(x) + ",[data-navigate-on-press]", "_mouseup").on("click", o(x + " " + b), "_appLinkClick"),
                this.userEvents = new n.UserEvents(this.element,{
                    filter: o(b),
                    tap: function(t) {
                        t.event.currentTarget = t.touch.currentTarget,
                        e._mouseup(t.event)
                    }
                }),
                this.element.css("-ms-touch-action", "")
            },
            _appLinkClick: function(t) {
                var n = e(t.currentTarget).attr("href")
                  , i = n && "#" !== n[0] && this.options.serverNavigation;
                i || w(e(t.currentTarget), "rel") == d || t.preventDefault()
            },
            _mouseup: function(o) {
                if (!(o.which > 1 || o.isDefaultPrevented())) {
                    var a = this
                      , s = e(o.currentTarget)
                      , l = w(s, "transition")
                      , c = w(s, "rel") || ""
                      , f = w(s, "target")
                      , p = s.attr(u)
                      , g = v && 0 === s[0].offsetHeight
                      , m = p && "#" !== p[0] && this.options.serverNavigation;
                    g || m || c === d || t === p || p === h || (s.attr(u, h),
                    setTimeout(function() {
                        s.attr(u, p)
                    }),
                    c.match(_) ? (n.widgetInstance(e(p), r).openFor(s),
                    ("actionsheet" === c || "drawer" === c) && o.stopPropagation()) : ("_top" === f ? a = i.application.pane : f && (a = e("#" + f).data("kendoMobilePane")),
                    a.navigate(p, l)),
                    o.preventDefault())
                }
            }
        });
        k.wrap = function(e) {
            e.is(o("view")) || (e = e.wrap("<div data-" + n.ns + 'role="view" data-stretch="true"></div>').parent());
            var t = e.wrap('<div class="km-pane-wrapper"><div></div></div>').parent()
              , i = new k(t);
            return i.navigate(""),
            i
        }
        ,
        r.plugin(k)
    }(window.kendo.jQuery),
    function(e) {
        var t = window.kendo
          , n = t.mobile
          , i = n.ui
          , o = "hide"
          , r = "open"
          , a = "close"
          , s = '<div class="km-popup-wrapper" />'
          , l = '<div class="km-popup-arrow" />'
          , c = '<div class="km-popup-overlay" />'
          , d = "km-up km-down km-left km-right"
          , u = i.Widget
          , h = {
            down: {
                origin: "bottom center",
                position: "top center"
            },
            up: {
                origin: "top center",
                position: "bottom center"
            },
            left: {
                origin: "center left",
                position: "center right",
                collision: "fit flip"
            },
            right: {
                origin: "center right",
                position: "center left",
                collision: "fit flip"
            }
        }
          , f = {
            animation: {
                open: {
                    effects: "fade:in",
                    duration: 0
                },
                close: {
                    effects: "fade:out",
                    duration: 400
                }
            }
        }
          , p = {
            horizontal: {
                offset: "top",
                size: "height"
            },
            vertical: {
                offset: "left",
                size: "width"
            }
        }
          , g = {
            up: "down",
            down: "up",
            left: "right",
            right: "left"
        }
          , m = u.extend({
            init: function(n, i) {
                var r, a, d = this, g = n.closest(".km-modalview-wrapper"), m = n.closest(".km-root").children(".km-pane").first(), v = g[0] ? g : m;
                i.viewport ? m = i.viewport : m[0] || (m = window),
                i.container ? v = i.container : v[0] || (v = document.body),
                r = {
                    viewport: m,
                    copyAnchorStyles: !1,
                    autosize: !0,
                    open: function() {
                        d.overlay.show()
                    },
                    activate: e.proxy(d._activate, d),
                    deactivate: function() {
                        d.overlay.hide(),
                        d._apiCall || d.trigger(o),
                        d._apiCall = !1
                    }
                },
                u.fn.init.call(d, n, i),
                n = d.element,
                i = d.options,
                n.wrap(s).addClass("km-popup").show(),
                a = d.options.direction.match(/left|right/) ? "horizontal" : "vertical",
                d.dimensions = p[a],
                d.wrapper = n.parent().css({
                    width: i.width,
                    height: i.height
                }).addClass("km-popup-wrapper km-" + i.direction).hide(),
                d.arrow = e(l).prependTo(d.wrapper).hide(),
                d.overlay = e(c).appendTo(v).hide(),
                r.appendTo = d.overlay,
                i.className && d.overlay.addClass(i.className),
                d.popup = new t.ui.Popup(d.wrapper,e.extend(!0, r, f, h[i.direction]))
            },
            options: {
                name: "Popup",
                width: 240,
                height: "",
                direction: "down",
                container: null ,
                viewport: null 
            },
            events: [o],
            show: function(t) {
                this.popup.options.anchor = e(t),
                this.popup.open()
            },
            hide: function() {
                this._apiCall = !0,
                this.popup.close()
            },
            destroy: function() {
                u.fn.destroy.call(this),
                this.popup.destroy(),
                this.overlay.remove()
            },
            target: function() {
                return this.popup.options.anchor
            },
            _activate: function() {
                var t = this
                  , n = t.options.direction
                  , i = t.dimensions
                  , o = i.offset
                  , r = t.popup
                  , a = r.options.anchor
                  , s = e(a).offset()
                  , l = e(r.element).offset()
                  , c = r.flipped ? g[n] : n
                  , u = 2 * t.arrow[i.size]()
                  , h = t.element[i.size]() - t.arrow[i.size]()
                  , f = e(a)[i.size]()
                  , p = s[o] - l[o] + f / 2;
                u > p && (p = u),
                p > h && (p = h),
                t.wrapper.removeClass(d).addClass("km-" + c),
                t.arrow.css(o, p).show()
            }
        })
          , v = u.extend({
            init: function(n, o) {
                var r, s = this;
                s.initialOpen = !1,
                u.fn.init.call(s, n, o),
                r = e.extend({
                    className: "km-popover-root",
                    hide: function() {
                        s.trigger(a)
                    }
                }, this.options.popup),
                s.popup = new m(s.element,r),
                s.popup.overlay.on("move", function(e) {
                    e.target == s.popup.overlay[0] && e.preventDefault()
                }),
                s.pane = new i.Pane(s.element,e.extend(this.options.pane, {
                    $angular: this.options.$angular
                })),
                s.pane.navigateToInitial(),
                t.notify(s, i)
            },
            options: {
                name: "PopOver",
                popup: {},
                pane: {}
            },
            events: [r, a],
            open: function(e) {
                this.popup.show(e),
                this.initialOpen ? this.pane.view()._invokeNgController() : (this.pane.navigate(""),
                this.popup.popup._position(),
                this.initialOpen = !0)
            },
            openFor: function(e) {
                this.open(e),
                this.trigger(r, {
                    target: this.popup.target()
                })
            },
            close: function() {
                this.popup.hide()
            },
            destroy: function() {
                u.fn.destroy.call(this),
                this.pane.destroy(),
                this.popup.destroy(),
                t.destroy(this.element)
            }
        });
        i.plugin(m),
        i.plugin(v)
    }(window.kendo.jQuery),
    function(e, t) {
        var n = window.kendo
          , i = n.mobile.ui
          , o = n.ui.Popup
          , r = '<div class="km-shim"/>'
          , a = "hide"
          , s = i.Widget
          , l = s.extend({
            init: function(t, i) {
                var l = this
                  , c = n.mobile.application
                  , d = n.support.mobileOS
                  , u = c ? c.os.name : d ? d.name : "ios"
                  , h = "ios" === u || "wp" === u || (c ? c.os.skin : !1)
                  , f = "blackberry" === u
                  , p = i.align || (h ? "bottom center" : f ? "center right" : "center center")
                  , g = i.position || (h ? "bottom center" : f ? "center right" : "center center")
                  , m = i.effect || (h ? "slideIn:up" : f ? "slideIn:left" : "fade:in")
                  , v = e(r).handler(l).hide();
                s.fn.init.call(l, t, i),
                l.shim = v,
                t = l.element,
                i = l.options,
                i.className && l.shim.addClass(i.className),
                i.modal || l.shim.on("up", "_hide"),
                (c ? c.element : e(document.body)).append(v),
                l.popup = new o(l.element,{
                    anchor: v,
                    modal: !0,
                    appendTo: v,
                    origin: p,
                    position: g,
                    animation: {
                        open: {
                            effects: m,
                            duration: i.duration
                        },
                        close: {
                            duration: i.duration
                        }
                    },
                    close: function(e) {
                        var t = !1;
                        l._apiCall || (t = l.trigger(a)),
                        t && e.preventDefault(),
                        l._apiCall = !1
                    },
                    deactivate: function() {
                        v.hide()
                    },
                    open: function() {
                        v.show()
                    }
                }),
                n.notify(l)
            },
            events: [a],
            options: {
                name: "Shim",
                modal: !1,
                align: t,
                position: t,
                effect: t,
                duration: 200
            },
            show: function() {
                this.popup.open()
            },
            hide: function() {
                this._apiCall = !0,
                this.popup.close()
            },
            destroy: function() {
                s.fn.destroy.call(this),
                this.shim.kendoDestroy(),
                this.popup.destroy(),
                this.shim.remove()
            },
            _hide: function(t) {
                t && e.contains(this.shim.children().children(".k-popup")[0], t.target) || this.popup.close()
            }
        });
        i.plugin(l)
    }(window.kendo.jQuery),
    function(e) {
        var t = window.kendo
          , n = t.mobile.ui
          , i = n.Shim
          , o = n.Widget
          , r = "beforeOpen"
          , a = "open"
          , s = "close"
          , l = "init"
          , c = '<div class="km-modalview-wrapper" />'
          , d = n.View.extend({
            init: function(e, t) {
                var n = this;
                o.fn.init.call(n, e, t),
                n._id(),
                n._wrap(),
                n._shim(),
                this.options.$angular || (n._layout(),
                n._scroller(),
                n._model()),
                n.element.css("display", ""),
                n.trigger(l)
            },
            events: [l, r, a, s],
            options: {
                name: "ModalView",
                modal: !0,
                width: null ,
                height: null 
            },
            destroy: function() {
                o.fn.destroy.call(this),
                this.shim.destroy()
            },
            open: function(t) {
                var n = this;
                n.target = e(t),
                n.shim.show(),
                n._invokeNgController(),
                n.trigger("show", {
                    view: n
                })
            },
            openFor: function(e) {
                this.trigger(r, {
                    target: e
                }) || (this.open(e),
                this.trigger(a, {
                    target: e
                }))
            },
            close: function() {
                this.element.is(":visible") && !this.trigger(s) && this.shim.hide()
            },
            _wrap: function() {
                var e, t, n = this, i = n.element, o = n.options;
                e = i[0].style.width || "auto",
                t = i[0].style.height || "auto",
                i.addClass("km-modalview").wrap(c),
                n.wrapper = i.parent().css({
                    width: o.width || e || 300,
                    height: o.height || t || 300
                }).addClass("auto" == t ? " km-auto-height" : ""),
                i.css({
                    width: "",
                    height: ""
                })
            },
            _shim: function() {
                var e = this;
                e.shim = new i(e.wrapper,{
                    modal: e.options.modal,
                    position: "center center",
                    align: "center center",
                    effect: "fade:in",
                    className: "km-modalview-root",
                    hide: function(t) {
                        e.trigger(s) && t.preventDefault()
                    }
                })
            }
        });
        n.plugin(d)
    }(window.kendo.jQuery),
    function(e, t) {
        var n = window.kendo
          , i = n.mobile
          , o = n.support.mobileOS
          , r = n.effects.Transition
          , a = n.roleSelector
          , s = "x"
          , l = i.ui
          , c = !(o.ios && 7 == o.majorVersion && !o.appMode)
          , d = "beforeShow"
          , u = "init"
          , h = "show"
          , f = "hide"
          , p = "afterHide"
          , g = {
            enable: e.noop
        }
          , m = l.View.extend({
            init: function(t, o) {
                var r, s, l, d, h;
                if (e(t).parent().prepend(t),
                i.ui.Widget.fn.init.call(this, t, o),
                this.options.$angular || (this._layout(),
                this._scroller()),
                this._model(),
                r = this.element.closest(a("pane")).data("kendoMobilePane"))
                    this.pane = r,
                    this.pane.bind("viewShow", function(e) {
                        d._viewShow(e)
                    }),
                    this.pane.bind("sameViewRequested", function() {
                        d.hide()
                    }),
                    s = this.userEvents = new n.UserEvents(r.element,{
                        filter: a("view splitview"),
                        allowSelection: !0
                    });
                else {
                    if (this.currentView = g,
                    l = e(this.options.container),
                    !l)
                        throw Error("The drawer needs a container configuration option set.");
                    s = this.userEvents = new n.UserEvents(l,{
                        allowSelection: !0
                    }),
                    this._attachTransition(l)
                }
                d = this,
                h = function(e) {
                    d.visible && (d.hide(),
                    e.preventDefault())
                }
                ,
                this.options.swipeToOpen && c ? (s.bind("press", function() {
                    d.transition.cancel()
                }),
                s.bind("start", function(e) {
                    d._start(e)
                }),
                s.bind("move", function(e) {
                    d._update(e)
                }),
                s.bind("end", function(e) {
                    d._end(e)
                }),
                s.bind("tap", h)) : s.bind("press", h),
                this.leftPositioned = "left" === this.options.position,
                this.visible = !1,
                this.element.hide().addClass("km-drawer").addClass(this.leftPositioned ? "km-left-drawer" : "km-right-drawer"),
                this.trigger(u)
            },
            options: {
                name: "Drawer",
                position: "left",
                views: [],
                swipeToOpenViews: [],
                swipeToOpen: !0,
                title: "",
                container: null 
            },
            events: [d, f, p, u, h],
            show: function() {
                this._activate() && this._show()
            },
            hide: function() {
                this.currentView && (this.currentView.enable(),
                m.current = null ,
                this._moveViewTo(0),
                this.trigger(f, {
                    view: this
                }))
            },
            openFor: function() {
                this.visible ? this.hide() : this.show()
            },
            destroy: function() {
                l.View.fn.destroy.call(this),
                this.userEvents.destroy()
            },
            _activate: function() {
                if (this.visible)
                    return !0;
                var e = this._currentViewIncludedIn(this.options.views);
                return !e || this.trigger(d, {
                    view: this
                }) ? !1 : (this._setAsCurrent(),
                this.element.show(),
                this.trigger(h, {
                    view: this
                }),
                this._invokeNgController(),
                !0)
            },
            _currentViewIncludedIn: function(t) {
                if (!this.pane || !t.length)
                    return !0;
                var n = this.pane.view();
                return e.inArray(n.id.replace("#", ""), t) > -1 || e.inArray(n.element.attr("id"), t) > -1
            },
            _show: function() {
                this.currentView.enable(!1),
                this.visible = !0;
                var e = this.element.width();
                this.leftPositioned || (e = -e),
                this._moveViewTo(e)
            },
            _setAsCurrent: function() {
                m.last !== this && (m.last && m.last.element.hide(),
                this.element.show()),
                m.last = this,
                m.current = this
            },
            _moveViewTo: function(e) {
                this.userEvents.cancel(),
                this.transition.moveTo({
                    location: e,
                    duration: 400,
                    ease: r.easeOutExpo
                })
            },
            _viewShow: function(e) {
                return this.currentView && this.currentView.enable(),
                this.currentView === e.view ? (this.hide(),
                t) : (this.currentView = e.view,
                this._attachTransition(e.view.element),
                t)
            },
            _attachTransition: function(e) {
                var t = this
                  , i = this.movable
                  , o = i && i.x;
                this.transition && (this.transition.cancel(),
                this.movable.moveAxis("x", 0)),
                i = this.movable = new n.ui.Movable(e),
                this.transition = new r({
                    axis: s,
                    movable: this.movable,
                    onEnd: function() {
                        0 === i[s] && (e[0].style.cssText = "",
                        t.element.hide(),
                        t.trigger(p),
                        t.visible = !1)
                    }
                }),
                o && (e.addClass("k-fx-hidden"),
                n.animationFrame(function() {
                    e.removeClass("k-fx-hidden"),
                    t.movable.moveAxis(s, o),
                    t.hide()
                }))
            },
            _start: function(e) {
                var i, o, r, a, s, l = e.sender;
                return Math.abs(e.x.velocity) < Math.abs(e.y.velocity) || n.triggeredByInput(e.event) || !this._currentViewIncludedIn(this.options.swipeToOpenViews) ? (l.cancel(),
                t) : (i = this.leftPositioned,
                o = this.visible,
                r = i && o || !i && !m.current,
                a = !i && o || i && !m.current,
                s = 0 > e.x.velocity,
                (r && s || a && !s) && this._activate() ? (l.capture(),
                t) : (l.cancel(),
                t))
            },
            _update: function(e) {
                var t, n = this.movable, i = n.x + e.x.delta;
                t = this.leftPositioned ? Math.min(Math.max(0, i), this.element.width()) : Math.max(Math.min(0, i), -this.element.width()),
                this.movable.moveAxis(s, t),
                e.event.preventDefault(),
                e.event.stopPropagation()
            },
            _end: function(e) {
                var t, n = e.x.velocity, i = Math.abs(this.movable.x) > this.element.width() / 2, o = .8;
                t = this.leftPositioned ? n > -o && (n > o || i) : o > n && (-o > n || i),
                t ? this._show() : this.hide()
            }
        });
        l.plugin(m)
    }(window.kendo.jQuery),
    function(e) {
        var t = window.kendo
          , n = t.mobile.ui
          , i = n.Widget
          , o = "<div class='km-expanded-pane-shim' />"
          , r = n.View
          , a = r.extend({
            init: function(r, a) {
                var s, l, c = this;
                i.fn.init.call(c, r, a),
                r = c.element,
                e.extend(c, a),
                c._id(),
                c.options.$angular ? c._overlay() : (c._layout(),
                c._overlay()),
                c._style(),
                l = r.children(c._locate("modalview")),
                c.options.$angular ? l.each(function(n, i) {
                    t.compileMobileDirective(e(i), a.$angular[0])
                }) : t.mobile.init(l),
                c.panes = [],
                c._paramsHistory = [],
                c.options.$angular ? c.element.children(t.directiveSelector("pane")).each(function() {
                    s = t.compileMobileDirective(e(this), a.$angular[0]),
                    c.panes.push(s)
                }) : c.content.children(t.roleSelector("pane")).each(function() {
                    s = t.initWidget(this, {}, n.roles),
                    c.panes.push(s)
                }),
                c.expandedPaneShim = e(o).appendTo(c.element),
                c._shimUserEvents = new t.UserEvents(c.expandedPaneShim,{
                    tap: function() {
                        c.collapsePanes()
                    }
                })
            },
            _locate: function(e) {
                return this.options.$angular ? t.directiveSelector(e) : t.roleSelector(e)
            },
            options: {
                name: "SplitView",
                style: "horizontal"
            },
            expandPanes: function() {
                this.element.addClass("km-expanded-splitview")
            },
            collapsePanes: function() {
                this.element.removeClass("km-expanded-splitview")
            },
            _layout: function() {
                var e = this
                  , n = e.element;
                e.transition = t.attrValue(n, "transition"),
                t.mobile.ui.View.prototype._layout.call(this),
                t.mobile.init(this.header.add(this.footer)),
                e.element.addClass("km-splitview"),
                e.content.addClass("km-split-content")
            },
            _style: function() {
                var t, n = this.options.style, i = this.element;
                n && (t = n.split(" "),
                e.each(t, function() {
                    i.addClass("km-split-" + this)
                }))
            },
            showStart: function() {
                var t = this;
                t.element.css("display", ""),
                t.inited ? this._invokeNgController() : (t.inited = !0,
                e.each(t.panes, function() {
                    this.options.initial ? this.navigateToInitial() : this.navigate("")
                }),
                t.trigger("init", {
                    view: t
                })),
                t.trigger("show", {
                    view: t
                })
            }
        });
        n.plugin(a)
    }(window.kendo.jQuery),
    function(e, t) {
        function n(e, t) {
            var n = [];
            return p && n.push("km-on-" + p.name),
            n.push(e.skin ? "km-" + e.skin : "ios" == e.name && e.majorVersion > 6 ? "km-ios7" : "km-" + e.name),
            ("ios" == e.name && 7 > e.majorVersion || "ios" != e.name) && n.push("km-" + e.name + e.majorVersion),
            n.push("km-" + e.majorVersion),
            n.push("km-m" + (e.minorVersion ? e.minorVersion[0] : 0)),
            e.variant && (e.skin && e.skin === e.name || !e.skin || e.setDefaultPlatform === !1) && n.push("km-" + (e.skin ? e.skin : e.name) + "-" + e.variant),
            e.cordova && n.push("km-cordova"),
            n.push(e.appMode ? "km-app" : "km-web"),
            t && t.statusBarStyle && n.push("km-" + t.statusBarStyle + "-status-bar"),
            n.join(" ")
        }
        function i(t) {
            return "km-wp-" + (t.noVariantSet ? 0 === parseInt(e("<div style='background: Background' />").css("background-color").split(",")[1], 10) ? "dark" : "light" : t.variant + " km-wp-" + t.variant + "-force")
        }
        function o(e) {
            return p.wp ? "-kendo-landscape" == e.css("animation-name") : Math.abs(window.orientation) / 90 == 1
        }
        function r(e) {
            return o(e) ? w : m
        }
        function a(e) {
            e.parent().addBack().css("min-height", window.innerHeight)
        }
        function s() {
            e("meta[name=viewport]").remove(),
            L.append(x({
                height: ", width=device-width" + (o() ? ", height=" + window.innerHeight + "px" : d.mobileOS.flatVersion >= 600 && 700 > d.mobileOS.flatVersion ? ", height=" + window.innerWidth + "px" : ", height=device-height")
            }))
        }
        var l = window.kendo
          , c = l.mobile
          , d = l.support
          , u = c.ui.Widget
          , h = c.ui.Pane
          , f = "ios7"
          , p = d.mobileOS
          , g = "blackberry" == p.device && p.flatVersion >= 600 && 1e3 > p.flatVersion && p.appMode
          , m = "km-vertical"
          , v = "chrome" === p.browser
          , _ = p.ios && p.flatVersion >= 700 && 800 > p.flatVersion && (p.appMode || v)
          , y = Math.abs(window.orientation) / 90 == 1
          , w = "km-horizontal"
          , b = {
            ios7: {
                ios: !0,
                browser: "default",
                device: "iphone",
                flatVersion: "700",
                majorVersion: "7",
                minorVersion: "0.0",
                name: "ios",
                tablet: !1
            },
            ios: {
                ios: !0,
                browser: "default",
                device: "iphone",
                flatVersion: "612",
                majorVersion: "6",
                minorVersion: "1.2",
                name: "ios",
                tablet: !1
            },
            android: {
                android: !0,
                browser: "default",
                device: "android",
                flatVersion: "442",
                majorVersion: "4",
                minorVersion: "4.2",
                name: "android",
                tablet: !1
            },
            blackberry: {
                blackberry: !0,
                browser: "default",
                device: "blackberry",
                flatVersion: "710",
                majorVersion: "7",
                minorVersion: "1.0",
                name: "blackberry",
                tablet: !1
            },
            meego: {
                meego: !0,
                browser: "default",
                device: "meego",
                flatVersion: "850",
                majorVersion: "8",
                minorVersion: "5.0",
                name: "meego",
                tablet: !1
            },
            wp: {
                wp: !0,
                browser: "default",
                device: "wp",
                flatVersion: "800",
                majorVersion: "8",
                minorVersion: "0.0",
                name: "wp",
                tablet: !1
            }
        }
          , x = l.template('<meta content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no#=data.height#" name="viewport" />', {
            usedWithBlock: !1
        })
          , k = l.template('<meta name="apple-mobile-web-app-capable" content="#= data.webAppCapable === false ? \'no\' : \'yes\' #" /> <meta name="apple-mobile-web-app-status-bar-style" content="#=data.statusBarStyle#" /> <meta name="msapplication-tap-highlight" content="no" /> ', {
            usedWithBlock: !1
        })
          , C = l.template("<style>.km-view { clip: rect(0 #= data.width #px #= data.height #px 0); }</style>", {
            usedWithBlock: !1
        })
          , S = p.android && "chrome" != p.browser || p.blackberry
          , T = x({
            height: ""
        })
          , D = l.template('<link rel="apple-touch-icon' + (p.android ? "-precomposed" : "") + '" # if(data.size) { # sizes="#=data.size#" #}# href="#=data.icon#" />', {
            usedWithBlock: !1
        })
          , A = ("iphone" == p.device || "ipod" == p.device) && 7 > p.majorVersion
          , P = ("iphone" == p.device || "ipod" == p.device) && p.majorVersion >= 7
          , M = P ? "none" : null 
          , E = "mobilesafari" == p.browser ? 60 : 0
          , I = 20
          , B = e(window)
          , z = window.screen
          , L = e("head")
          , F = "init"
          , R = e.proxy
          , O = u.extend({
            init: function(t, n) {
                c.application = this,
                e(e.proxy(this, "bootstrap", t, n))
            },
            bootstrap: function(t, n) {
                var i, o, r;
                t = e(t),
                t[0] || (t = e(document.body)),
                u.fn.init.call(this, t, n),
                this.element.removeAttr("data-" + l.ns + "role"),
                this._setupPlatform(),
                this._attachMeta(),
                this._setupElementClass(),
                this._attachHideBarHandlers(),
                i = e.extend({}, this.options),
                delete i.name,
                o = this,
                r = function() {
                    o.pane = new h(o.element,i),
                    o.pane.navigateToInitial(),
                    o.options.updateDocumentTitle && o._setupDocumentTitle(),
                    o._startHistory(),
                    o.trigger(F)
                }
                ,
                this.options.$angular ? setTimeout(r) : r()
            },
            options: {
                name: "Application",
                hideAddressBar: !0,
                browserHistory: !0,
                historyTransition: M,
                modelScope: window,
                statusBarStyle: "black",
                transition: "",
                platform: null ,
                skin: null ,
                updateDocumentTitle: !0,
                useNativeScrolling: !1
            },
            events: [F],
            navigate: function(e, t) {
                this.pane.navigate(e, t)
            },
            replace: function(e, t) {
                this.pane.replace(e, t)
            },
            scroller: function() {
                return this.view().scroller
            },
            hideLoading: function() {
                if (!this.pane)
                    throw Error("The mobile application instance is not fully instantiated. Please consider activating loading in the application init event handler.");
                this.pane.hideLoading()
            },
            showLoading: function() {
                if (!this.pane)
                    throw Error("The mobile application instance is not fully instantiated. Please consider activating loading in the application init event handler.");
                this.pane.showLoading()
            },
            changeLoadingMessage: function(e) {
                if (!this.pane)
                    throw Error("The mobile application instance is not fully instantiated. Please consider changing the message in the application init event handler.");
                this.pane.changeLoadingMessage(e)
            },
            view: function() {
                return this.pane.view()
            },
            skin: function(e) {
                var t = this;
                return arguments.length ? (t.options.skin = e || "",
                t.element[0].className = "km-pane",
                t._setupPlatform(),
                t._setupElementClass(),
                t.options.skin) : t.options.skin
            },
            destroy: function() {
                u.fn.destroy.call(this),
                this.pane.destroy(),
                this.router.destroy()
            },
            _setupPlatform: function() {
                var t = this
                  , o = t.options.platform
                  , r = t.options.skin
                  , a = []
                  , s = p || b[f];
                o && (s.setDefaultPlatform = !0,
                "string" == typeof o ? (a = o.split("-"),
                s = e.extend({
                    variant: a[1]
                }, s, b[a[0]])) : s = o),
                r && (a = r.split("-"),
                p || (s.setDefaultPlatform = !1),
                s = e.extend({}, s, {
                    skin: a[0],
                    variant: a[1]
                })),
                s.variant || (s.noVariantSet = !0,
                s.variant = "dark"),
                t.os = s,
                t.osCssClass = n(t.os, t.options),
                "wp" == s.name && (t.refreshBackgroundColorProxy || (t.refreshBackgroundColorProxy = e.proxy(function() {
                    (t.os.variant && t.os.skin && t.os.skin === t.os.name || !t.os.skin) && t.element.removeClass("km-wp-dark km-wp-light km-wp-dark-force km-wp-light-force").addClass(i(t.os))
                }, t)),
                e(document).off("visibilitychange", t.refreshBackgroundColorProxy),
                e(document).off("resume", t.refreshBackgroundColorProxy),
                s.skin || (t.element.parent().css("overflow", "hidden"),
                e(document).on("visibilitychange", t.refreshBackgroundColorProxy),
                e(document).on("resume", t.refreshBackgroundColorProxy),
                t.refreshBackgroundColorProxy()))
            },
            _startHistory: function() {
                this.options.browserHistory ? (this.router = new l.Router({
                    pushState: this.options.pushState,
                    root: this.options.root,
                    hashBang: this.options.hashBang
                }),
                this.pane.bindToRouter(this.router),
                this.router.start()) : this.options.initial || this.pane.navigate("")
            },
            _resizeToScreenHeight: function() {
                var t, n = e("meta[name=apple-mobile-web-app-status-bar-style]").attr("content").match(/black-translucent|hidden/), i = this.element;
                t = v ? window.innerHeight : o(i) ? n ? y ? z.availWidth + I : z.availWidth : y ? z.availWidth : z.availWidth - I : n ? y ? z.availHeight : z.availHeight + I : y ? z.availHeight - I : z.availHeight,
                i.height(t)
            },
            _setupElementClass: function() {
                var t, n = this, i = n.element;
                i.parent().addClass("km-root km-" + (n.os.tablet ? "tablet" : "phone")),
                i.addClass(n.osCssClass + " " + r(i)),
                this.options.useNativeScrolling && i.parent().addClass("km-native-scrolling"),
                v && i.addClass("km-ios-chrome"),
                d.wpDevicePixelRatio && i.parent().css("font-size", d.wpDevicePixelRatio + "em"),
                g && s(),
                n.options.useNativeScrolling ? i.parent().addClass("km-native-scrolling") : S && (t = (screen.availWidth > screen.availHeight ? screen.availWidth : screen.availHeight) + 200,
                e(C({
                    width: t,
                    height: t
                })).appendTo(L)),
                _ && n._resizeToScreenHeight(),
                l.onResize(function() {
                    i.removeClass("km-horizontal km-vertical").addClass(r(i)),
                    n.options.useNativeScrolling && a(i),
                    _ && n._resizeToScreenHeight(),
                    g && s(),
                    l.resize(i)
                })
            },
            _clearExistingMeta: function() {
                L.find("meta").filter("[name|='apple-mobile-web-app'],[name|='msapplication-tap'],[name='viewport']").remove()
            },
            _attachMeta: function() {
                var e, t = this.options, n = t.icon;
                if (this._clearExistingMeta(),
                g || L.prepend(T),
                L.prepend(k(t)),
                n) {
                    "string" == typeof n && (n = {
                        "": n
                    });
                    for (e in n)
                        L.prepend(D({
                            icon: n[e],
                            size: e
                        }))
                }
                t.useNativeScrolling && a(this.element)
            },
            _attachHideBarHandlers: function() {
                var e = this
                  , t = R(e, "_hideBar");
                !d.mobileOS.appMode && e.options.hideAddressBar && A && !e.options.useNativeScrolling && (e._initialHeight = {},
                B.on("load", t),
                l.onResize(function() {
                    setTimeout(window.scrollTo, 0, 0, 1)
                }))
            },
            _setupDocumentTitle: function() {
                var e = this
                  , n = document.title;
                e.pane.bind("viewShow", function(e) {
                    var i = e.view.title;
                    document.title = i !== t ? i : n
                })
            },
            _hideBar: function() {
                var t = this
                  , n = t.element;
                n.height(l.support.transforms.css + "calc(100% + " + E + "px)"),
                e(window).trigger(l.support.resize)
            }
        });
        l.mobile.Application = O,
        l.ui.plugin(O, l.mobile, "Mobile")
    }(window.kendo.jQuery),
    function(e) {
        var t = window.kendo
          , n = t.support
          , i = t.mobile.ui
          , o = i.Shim
          , r = i.Popup
          , a = i.Widget
          , s = "open"
          , l = "close"
          , c = "command"
          , d = "li>a"
          , u = "actionsheetContext"
          , h = '<div class="km-actionsheet-wrapper" />'
          , f = t.template('<li class="km-actionsheet-cancel"><a href="\\#">#:cancel#</a></li>')
          , p = a.extend({
            init: function(s, l) {
                var c, u, p, g = this, m = n.mobileOS;
                a.fn.init.call(g, s, l),
                l = g.options,
                p = l.type,
                s = g.element,
                u = "auto" === p ? m && m.tablet : "tablet" === p,
                c = u ? r : o,
                l.cancelTemplate && (f = t.template(l.cancelTemplate)),
                s.addClass("km-actionsheet").append(f({
                    cancel: g.options.cancel
                })).wrap(h).on("up", d, "_click").on("click", d, t.preventDefault),
                g.view().bind("destroy", function() {
                    g.destroy()
                }),
                g.wrapper = s.parent().addClass(p ? " km-actionsheet-" + p : ""),
                g.shim = new c(g.wrapper,e.extend({
                    modal: m.ios && 7 > m.majorVersion,
                    className: "km-actionsheet-root"
                }, g.options.popup)),
                g._closeProxy = e.proxy(g, "_close"),
                g.shim.bind("hide", g._closeProxy),
                u && t.onResize(g._closeProxy),
                t.notify(g, i)
            },
            events: [s, l, c],
            options: {
                name: "ActionSheet",
                cancel: "Cancel",
                type: "auto",
                popup: {
                    height: "auto"
                }
            },
            open: function(t, n) {
                var i = this;
                i.target = e(t),
                i.context = n,
                i.shim.show(t)
            },
            close: function() {
                this.context = this.target = null ,
                this.shim.hide()
            },
            openFor: function(e) {
                var t = this
                  , n = e.data(u);
                t.open(e, n),
                t.trigger(s, {
                    target: e,
                    context: n
                })
            },
            destroy: function() {
                a.fn.destroy.call(this),
                t.unbindResize(this._closeProxy),
                this.shim.destroy()
            },
            _click: function(n) {
                var i, o, r, a;
                n.isDefaultPrevented() || (i = e(n.currentTarget),
                o = i.data("action"),
                o && (r = {
                    target: this.target,
                    context: this.context
                },
                a = this.options.$angular,
                a ? this.element.injector().get("$parse")(o)(a[0])(r) : t.getter(o)(window)(r)),
                this.trigger(c, {
                    target: this.target,
                    context: this.context,
                    currentTarget: i
                }),
                n.preventDefault(),
                this._close())
            },
            _close: function(e) {
                this.trigger(l) ? e.preventDefault() : this.close()
            }
        });
        i.plugin(p)
    }(window.kendo.jQuery),
    function(e, t) {
        function n(t, n, i) {
            e(n.target).closest(".km-button,.km-detail").toggleClass("km-state-active", i),
            d && t.deactivateTimeoutID && (clearTimeout(t.deactivateTimeoutID),
            t.deactivateTimeoutID = 0)
        }
        function i(t) {
            return e('<span class="km-badge">' + t + "</span>")
        }
        var o = window.kendo
          , r = o.mobile
          , a = r.ui
          , s = a.Widget
          , l = o.support
          , c = l.mobileOS
          , d = c.android && c.flatVersion >= 300
          , u = "click"
          , h = "disabled"
          , f = "km-state-disabled"
          , p = s.extend({
            init: function(e, t) {
                var i, r = this;
                s.fn.init.call(r, e, t),
                i = "up" === r.options.clickOn,
                r._wrap(),
                r._style(),
                i || r.element.attr("data-navigate-on-press", !0),
                r.options.enable = r.options.enable && !r.element.attr(h),
                r.enable(r.options.enable),
                r._userEvents = new o.UserEvents(r.element,{
                    press: function(e) {
                        r._activate(e)
                    },
                    release: function(e) {
                        n(r, e, !1)
                    }
                }),
                r._userEvents.bind(i ? "tap" : "press", function(e) {
                    r._release(e)
                }),
                d && r.element.on("move", function(e) {
                    r._timeoutDeactivate(e)
                })
            },
            destroy: function() {
                s.fn.destroy.call(this),
                this._userEvents.destroy()
            },
            events: [u],
            options: {
                name: "Button",
                icon: "",
                style: "",
                badge: "",
                clickOn: "up",
                enable: !0
            },
            badge: function(e) {
                var t = this.badgeElement = this.badgeElement || i(e).appendTo(this.element);
                return e || 0 === e ? (t.html(e),
                this) : e === !1 ? (t.empty().remove(),
                this.badgeElement = !1,
                this) : t.html()
            },
            enable: function(e) {
                var n = this.element;
                t === e && (e = !0),
                this.options.enable = e,
                e ? n.removeAttr(h) : n.attr(h, h),
                n.toggleClass(f, !e)
            },
            _timeoutDeactivate: function(e) {
                this.deactivateTimeoutID || (this.deactivateTimeoutID = setTimeout(n, 500, this, e, !1))
            },
            _activate: function(e) {
                var t = document.activeElement
                  , i = t ? t.nodeName : "";
                this.options.enable && (n(this, e, !0),
                ("INPUT" == i || "TEXTAREA" == i) && t.blur())
            },
            _release: function(n) {
                var i = this;
                if (!(n.which > 1))
                    return i.options.enable ? (i.trigger(u, {
                        target: e(n.target),
                        button: i.element
                    }) && n.preventDefault(),
                    t) : (n.preventDefault(),
                    t)
            },
            _style: function() {
                var t, n = this.options.style, i = this.element;
                n && (t = n.split(" "),
                e.each(t, function() {
                    i.addClass("km-" + this)
                }))
            },
            _wrap: function() {
                var t = this
                  , n = t.options.icon
                  , o = t.options.badge
                  , r = '<span class="km-icon km-' + n
                  , a = t.element.addClass("km-button")
                  , s = a.children("span:not(.km-icon)").addClass("km-text")
                  , l = a.find("img").addClass("km-image");
                !s[0] && a.html() && (s = a.wrapInner('<span class="km-text" />').children("span.km-text")),
                !l[0] && n && (s[0] || (r += " km-notext"),
                t.iconElement = a.prepend(e(r + '" />'))),
                (o || 0 === o) && (t.badgeElement = i(o).appendTo(a))
            }
        })
          , g = p.extend({
            options: {
                name: "BackButton",
                style: "back"
            },
            init: function(e, n) {
                var i = this;
                p.fn.init.call(i, e, n),
                t === i.element.attr("href") && i.element.attr("href", "#:back")
            }
        })
          , m = p.extend({
            options: {
                name: "DetailButton",
                style: ""
            },
            init: function(e, t) {
                p.fn.init.call(this, e, t)
            },
            _style: function() {
                var t, n = this.options.style + " detail", i = this.element;
                n && (t = n.split(" "),
                e.each(t, function() {
                    i.addClass("km-" + this)
                }))
            },
            _wrap: function() {
                var t = this
                  , n = t.options.icon
                  , i = '<span class="km-icon km-' + n
                  , o = t.element
                  , r = o.children("span")
                  , a = o.find("img").addClass("km-image");
                !a[0] && n && (r[0] || (i += " km-notext"),
                o.prepend(e(i + '" />')))
            }
        });
        a.plugin(p),
        a.plugin(g),
        a.plugin(m)
    }(window.kendo.jQuery),
    function(e, t) {
        function n(t) {
            return e('<span class="km-badge">' + t + "</span>")
        }
        var i = window.kendo
          , o = i.mobile.ui
          , r = o.Widget
          , a = "km-state-active"
          , s = "km-state-disabled"
          , l = "select"
          , c = "li:not(." + a + ")"
          , d = r.extend({
            init: function(e, t) {
                var n = this;
                r.fn.init.call(n, e, t),
                n.element.addClass("km-buttongroup").find("li").each(n._button),
                n.element.on(n.options.selectOn, c, "_select"),
                n._enable = !0,
                n.select(n.options.index),
                n.options.enable || (n._enable = !1,
                n.wrapper.addClass(s))
            },
            events: [l],
            options: {
                name: "ButtonGroup",
                selectOn: "down",
                index: -1,
                enable: !0
            },
            current: function() {
                return this.element.find("." + a)
            },
            select: function(n) {
                var i = this
                  , o = -1;
                n !== t && -1 !== n && i._enable && !e(n).is("." + s) && (i.current().removeClass(a),
                "number" == typeof n ? (o = n,
                n = e(i.element[0].children[n])) : n.nodeType && (n = e(n),
                o = n.index()),
                n.addClass(a),
                i.selectedIndex = o)
            },
            badge: function(t, i) {
                var o, r = this.element;
                return isNaN(t) || (t = r.children().get(t)),
                t = r.find(t),
                o = e(t.children(".km-badge")[0] || n(i).appendTo(t)),
                i || 0 === i ? (o.html(i),
                this) : i === !1 ? (o.empty().remove(),
                this) : o.html()
            },
            enable: function(e) {
                var n = this.wrapper;
                t === e && (e = !0),
                e ? n.removeClass(s) : n.addClass(s),
                this._enable = this.options.enable = e
            },
            _button: function() {
                var t = e(this).addClass("km-button")
                  , o = i.attrValue(t, "icon")
                  , r = i.attrValue(t, "badge")
                  , a = t.children("span")
                  , s = t.find("img").addClass("km-image");
                a[0] || (a = t.wrapInner("<span/>").children("span")),
                a.addClass("km-text"),
                !s[0] && o && t.prepend(e('<span class="km-icon km-' + o + '"/>')),
                (r || 0 === r) && n(r).appendTo(t)
            },
            _select: function(e) {
                e.which > 1 || e.isDefaultPrevented() || !this._enable || (this.select(e.currentTarget),
                this.trigger(l, {
                    index: this.selectedIndex
                }))
            }
        });
        o.plugin(d)
    }(window.kendo.jQuery),
    function(e) {
        var t = window.kendo
          , n = t.mobile.ui
          , i = n.Widget
          , o = "km-collapsible"
          , r = "km-collapsible-header"
          , a = "km-collapsible-content"
          , s = "km-collapsibleinset"
          , l = "<div data-role='collapsible-header' class='" + r + "'></div>"
          , c = "<div data-role='collapsible-content' class='" + a + "'></div>"
          , d = "km-collapsed"
          , u = "km-expanded"
          , h = "km-animated"
          , f = "left"
          , p = "expand"
          , g = "collapse"
          , m = i.extend({
            init: function(n, r) {
                var a = this
                  , l = e(n);
                i.fn.init.call(a, l, r),
                l.addClass(o),
                a._buildHeader(),
                a.content = l.children().not(a.header).wrapAll(c).parent(),
                a._userEvents = new t.UserEvents(a.header,{
                    tap: function() {
                        a.toggle()
                    }
                }),
                l.addClass(a.options.collapsed ? d : u),
                a.options.inset && l.addClass(s),
                a.options.animation ? (a.content.addClass(h),
                a.content.height(0),
                a.options.collapsed && a.content.hide()) : a.options.collapsed && a.content.hide()
            },
            events: [p, g],
            options: {
                name: "Collapsible",
                collapsed: !0,
                collapseIcon: "arrow-n",
                expandIcon: "arrow-s",
                iconPosition: f,
                animation: !0,
                inset: !1
            },
            destroy: function() {
                i.fn.destroy.call(this),
                this._userEvents.destroy()
            },
            expand: function(e) {
                var n = this.options.collapseIcon
                  , i = this.content
                  , o = t.support.mobileOS.ios;
                this.trigger(p) || (n && this.header.find(".km-icon").removeClass().addClass("km-icon km-" + n),
                this.element.removeClass(d).addClass(u),
                this.options.animation && !e ? (i.off("transitionend"),
                i.show(),
                o && i.removeClass(h),
                i.height(this._getContentHeight()),
                o && i.addClass(h),
                t.resize(i)) : i.show())
            },
            collapse: function(e) {
                var t = this.options.expandIcon
                  , n = this.content;
                this.trigger(g) || (t && this.header.find(".km-icon").removeClass().addClass("km-icon km-" + t),
                this.element.removeClass(u).addClass(d),
                this.options.animation && !e ? (n.one("transitionend", function() {
                    n.hide()
                }),
                n.height(0)) : n.hide())
            },
            toggle: function(e) {
                this.isCollapsed() ? this.expand(e) : this.collapse(e)
            },
            isCollapsed: function() {
                return this.element.hasClass(d)
            },
            resize: function() {
                !this.isCollapsed() && this.options.animation && this.content.height(this._getContentHeight())
            },
            _buildHeader: function() {
                var t = this.element.children(":header").wrapAll(l)
                  , n = e('<span class="km-icon"/>')
                  , i = this.options.collapsed ? this.options.expandIcon : this.options.collapseIcon
                  , o = this.options.iconPosition;
                i && (t.prepend(n),
                n.addClass("km-" + i)),
                this.header = t.parent(),
                this.header.addClass("km-icon-" + o)
            },
            _getContentHeight: function() {
                var e, t = this.content.attr("style");
                return this.content.css({
                    position: "absolute",
                    visibility: "hidden",
                    height: "auto"
                }),
                e = this.content.height(),
                this.content.attr("style", t ? t : ""),
                e
            }
        });
        n.plugin(m)
    }(window.kendo.jQuery),
    function(e, t) {
        function n() {
            return this.nodeType === v.TEXT_NODE && this.nodeValue.match(U)
        }
        function i(e, t) {
            t && !e[0].querySelector(".km-icon") && e.prepend('<span class="km-icon km-' + t + '"/>')
        }
        function o(e) {
            i(e, T(e, "icon")),
            i(e, T(e.children(C), "icon"))
        }
        function r(e) {
            var t = e.parent()
              , o = e.add(t.children(m.roleSelector("detailbutton")))
              , r = t.contents().not(o).not(n);
            r.length || (e.addClass("km-listview-link").attr(m.attr("role"), "listview-link"),
            i(e, T(t, "icon")),
            i(e, T(e, "icon")))
        }
        function a(e) {
            if (e[0].querySelector("input[type=checkbox],input[type=radio]")) {
                var t = e.parent();
                t.contents().not(e).not(function() {
                    return 3 == this.nodeType
                })[0] || (e.addClass("km-listview-label"),
                e.children("[type=checkbox],[type=radio]").addClass("km-widget km-icon km-check"))
            }
        }
        function s(t, n) {
            e(t).css("transform", "translate3d(0px, " + n + "px, 0px)")
        }
        var l, c, d, u, h, f, p, g, m = window.kendo, v = window.Node, _ = m.mobile, y = _.ui, w = m.data.DataSource, b = y.DataBoundWidget, x = ".km-list > li, > li:not(.km-group-container)", k = ".km-listview-link, .km-listview-label", C = "[" + m.attr("icon") + "]", S = e.proxy, T = m.attrValue, D = "km-group-title", A = "km-state-active", P = '<div class="' + D + '"><div class="km-text"></div></div>', M = m.template('<li><div class="' + D + '"><div class="km-text">#= this.headerTemplate(data) #</div></div><ul>#= kendo.render(this.template, data.items)#</ul></li>'), E = '<div class="km-listview-wrapper" />', I = m.template('<form class="km-filter-form"><div class="km-filter-wrap"><input type="search" placeholder="#=placeholder#"/><a href="\\#" class="km-filter-reset" title="Clear"><span class="km-icon km-clear"></span><span class="km-text">Clear</span></a></div></form>'), B = ".kendoMobileListView", z = "styled", L = "dataBound", F = "dataBinding", R = "itemChange", O = "click", N = "change", H = "progress", V = "function", U = /^\s+$/, W = /button/, j = m.Class.extend({
            init: function(e) {
                var t, n, i = e.scroller();
                i && (this.options = e.options,
                this.element = e.element,
                this.scroller = e.scroller(),
                this._shouldFixHeaders(),
                t = this,
                n = function() {
                    t._cacheHeaders()
                }
                ,
                e.bind("resize", n),
                e.bind(z, n),
                e.bind(L, n),
                i.bind("scroll", function(e) {
                    t._fixHeader(e)
                }))
            },
            _fixHeader: function(t) {
                if (this.fixedHeaders) {
                    var n, i, o, r = 0, a = this.scroller, s = this.headers, l = t.scrollTop;
                    do {
                        if (n = s[r++],
                        !n) {
                            o = e("<div />");
                            break
                        }
                        i = n.offset,
                        o = n.header
                    } while (i + 1 > l);this.currentHeader != r && (a.fixedContainer.html(o.clone()),
                    this.currentHeader = r)
                }
            },
            _shouldFixHeaders: function() {
                this.fixedHeaders = "group" === this.options.type && this.options.fixedHeaders
            },
            _cacheHeaders: function() {
                if (this._shouldFixHeaders(),
                this.fixedHeaders) {
                    var t = []
                      , n = this.scroller.scrollTop;
                    this.element.find("." + D).each(function(i, o) {
                        o = e(o),
                        t.unshift({
                            offset: o.position().top + n,
                            header: o
                        })
                    }),
                    this.headers = t,
                    this._fixHeader({
                        scrollTop: n
                    })
                }
            }
        }), G = function() {
            return {
                page: 1
            }
        }
        , q = m.Class.extend({
            init: function(e) {
                var t = this
                  , n = e.options
                  , i = e.scroller()
                  , o = n.pullParameters || G;
                this.listView = e,
                this.scroller = i,
                e.bind("_dataSource", function(e) {
                    t.setDataSource(e.dataSource)
                }),
                i.setOptions({
                    pullToRefresh: !0,
                    pull: function() {
                        t._pulled || (t._pulled = !0,
                        t.dataSource.read(o.call(e, t._first)))
                    },
                    messages: {
                        pullTemplate: n.messages.pullTemplate,
                        releaseTemplate: n.messages.releaseTemplate,
                        refreshTemplate: n.messages.refreshTemplate
                    }
                })
            },
            setDataSource: function(e) {
                var t = this;
                this._first = e.view()[0],
                this.dataSource = e,
                e.bind("change", function() {
                    t._change()
                }),
                e.bind("error", function() {
                    t._change()
                })
            },
            _change: function() {
                var e, t = this.scroller, n = this.dataSource;
                this._pulled && t.pullHandled(),
                (this._pulled || !this._first) && (e = n.view(),
                e[0] && (this._first = e[0])),
                this._pulled = !1
            }
        }), $ = m.Observable.extend({
            init: function(e) {
                var t = this;
                m.Observable.fn.init.call(t),
                t.buffer = e.buffer,
                t.height = e.height,
                t.item = e.item,
                t.items = [],
                t.footer = e.footer,
                t.buffer.bind("reset", function() {
                    t.refresh()
                })
            },
            refresh: function() {
                for (var e, t, n, i, o = this.buffer, r = this.items, a = !1; r.length; )
                    r.pop().destroy();
                for (this.offset = o.offset,
                e = this.item,
                i = 0; o.viewSize > i; i++) {
                    if (i === o.total()) {
                        a = !0;
                        break
                    }
                    n = e(this.content(this.offset + r.length)),
                    n.below(t),
                    t = n,
                    r.push(n)
                }
                this.itemCount = r.length,
                this.trigger("reset"),
                this._resize(),
                a && this.trigger("endReached")
            },
            totalHeight: function() {
                if (!this.items[0])
                    return 0;
                var e = this
                  , t = e.items
                  , n = t[0].top
                  , i = t[t.length - 1].bottom
                  , o = (i - n) / e.itemCount
                  , r = e.buffer.length - e.offset - e.itemCount;
                return (this.footer ? this.footer.height : 0) + i + r * o
            },
            batchUpdate: function(e) {
                var t, n, i = this.height(), o = this.items, r = this.offset;
                if (o[0]) {
                    if (this.lastDirection)
                        for (; o[o.length - 1].bottom > e + 2 * i && 0 !== this.offset; )
                            this.offset--,
                            t = o.pop(),
                            t.update(this.content(this.offset)),
                            t.above(o[0]),
                            o.unshift(t);
                    else
                        for (; e - i > o[0].top; ) {
                            if (n = this.offset + this.itemCount,
                            n === this.buffer.total()) {
                                this.trigger("endReached");
                                break
                            }
                            if (n === this.buffer.length)
                                break;
                            t = o.shift(),
                            t.update(this.content(this.offset + this.itemCount)),
                            t.below(o[o.length - 1]),
                            o.push(t),
                            this.offset++
                        }
                    r !== this.offset && this._resize()
                }
            },
            update: function(e) {
                var t, n, i, o, r = this, a = this.items, s = this.height(), l = this.itemCount, c = s / 2, d = (this.lastTop || 0) > e, u = e - c, h = e + s + c;
                a[0] && (this.lastTop = e,
                this.lastDirection = d,
                d ? a[0].top > u && a[a.length - 1].bottom > h + c && this.offset > 0 && (this.offset--,
                t = a.pop(),
                n = a[0],
                t.update(this.content(this.offset)),
                a.unshift(t),
                t.above(n),
                r._resize()) : h > a[a.length - 1].bottom && u - c > a[0].top && (o = this.offset + l,
                o === this.buffer.total() ? this.trigger("endReached") : o !== this.buffer.length && (t = a.shift(),
                i = a[a.length - 1],
                a.push(t),
                t.update(this.content(this.offset + this.itemCount)),
                r.offset++,
                t.below(i),
                r._resize())))
            },
            content: function(e) {
                return this.buffer.at(e)
            },
            destroy: function() {
                this.unbind()
            },
            _resize: function() {
                var e = this.items
                  , t = 0
                  , n = 0
                  , i = e[0]
                  , o = e[e.length - 1];
                i && (t = i.top,
                n = o.bottom),
                this.trigger("resize", {
                    top: t,
                    bottom: n
                }),
                this.footer && this.footer.below(o)
            }
        });
        m.mobile.ui.VirtualList = $,
        l = m.Class.extend({
            init: function(t, n) {
                var i = t.append([n], !0)[0]
                  , o = i.offsetHeight;
                e.extend(this, {
                    top: 0,
                    element: i,
                    listView: t,
                    height: o,
                    bottom: o
                })
            },
            update: function(e) {
                this.element = this.listView.setDataItem(this.element, e)
            },
            above: function(e) {
                e && (this.height = this.element.offsetHeight,
                this.top = e.top - this.height,
                this.bottom = e.top,
                s(this.element, this.top))
            },
            below: function(e) {
                e && (this.height = this.element.offsetHeight,
                this.top = e.bottom,
                this.bottom = this.top + this.height,
                s(this.element, this.top))
            },
            destroy: function() {
                m.destroy(this.element),
                e(this.element).remove()
            }
        }),
        c = '<div><span class="km-icon"></span><span class="km-loading-left"></span><span class="km-loading-right"></span></div>',
        d = m.Class.extend({
            init: function(t) {
                this.element = e('<li class="km-load-more km-scroller-refresh" style="display: none"></li>').appendTo(t.element),
                this._loadIcon = e(c).appendTo(this.element)
            },
            enable: function() {
                this.element.show(),
                this.height = this.element.outerHeight(!0)
            },
            disable: function() {
                this.element.hide(),
                this.height = 0
            },
            below: function(e) {
                e && (this.top = e.bottom,
                this.bottom = this.height + this.top,
                s(this.element, this.top))
            }
        }),
        u = d.extend({
            init: function(t, n) {
                this._loadIcon = e(c).hide(),
                this._loadButton = e('<a class="km-load">' + t.options.messages.loadMoreText + "</a>").hide(),
                this.element = e('<li class="km-load-more" style="display: none"></li>').append(this._loadIcon).append(this._loadButton).appendTo(t.element);
                var i = this;
                this._loadButton.kendoMobileButton().data("kendoMobileButton").bind("click", function() {
                    i._hideShowButton(),
                    n.next()
                }),
                n.bind("resize", function() {
                    i._showLoadButton()
                }),
                this.height = this.element.outerHeight(!0),
                this.disable()
            },
            _hideShowButton: function() {
                this._loadButton.hide(),
                this.element.addClass("km-scroller-refresh"),
                this._loadIcon.css("display", "block")
            },
            _showLoadButton: function() {
                this._loadButton.show(),
                this.element.removeClass("km-scroller-refresh"),
                this._loadIcon.hide()
            }
        }),
        h = m.Class.extend({
            init: function(e) {
                var t = this;
                this.chromeHeight = e.wrapper.children().not(e.element).outerHeight() || 0,
                this.listView = e,
                this.scroller = e.scroller(),
                this.options = e.options,
                e.bind("_dataSource", function(e) {
                    t.setDataSource(e.dataSource, e.empty)
                }),
                e.bind("resize", function() {
                    t.list.items.length && (t.scroller.reset(),
                    t.buffer.range(0),
                    t.list.refresh())
                }),
                this.scroller.makeVirtual(),
                this.scroller.bind("scroll", function(e) {
                    t.list.update(e.scrollTop)
                }),
                this.scroller.bind("scrollEnd", function(e) {
                    t.list.batchUpdate(e.scrollTop)
                })
            },
            destroy: function() {
                this.list.unbind(),
                this.buffer.unbind()
            },
            setDataSource: function(t, n) {
                var i, o, r, a, s = this, c = this.options, h = this.listView, f = h.scroller(), p = c.loadMore;
                if (this.dataSource = t,
                i = t.pageSize() || c.virtualViewSize,
                !i && !n)
                    throw Error("the DataSource does not have page size configured. Page Size setting is mandatory for the mobile listview virtual scrolling to work as expected.");
                this.buffer && this.buffer.destroy(),
                o = new m.data.Buffer(t,Math.floor(i / 2),p),
                r = p ? new u(h,o) : new d(h),
                this.list && this.list.destroy(),
                a = new $({
                    buffer: o,
                    footer: r,
                    item: function(e) {
                        return new l(h,e)
                    },
                    height: function() {
                        return f.height()
                    }
                }),
                a.bind("resize", function() {
                    s.updateScrollerSize(),
                    h.updateSize()
                }),
                a.bind("reset", function() {
                    s.footer.enable()
                }),
                a.bind("endReached", function() {
                    r.disable(),
                    s.updateScrollerSize()
                }),
                o.bind("expand", function() {
                    a.lastDirection = !1,
                    a.batchUpdate(f.scrollTop)
                }),
                e.extend(this, {
                    buffer: o,
                    scroller: f,
                    list: a,
                    footer: r
                })
            },
            updateScrollerSize: function() {
                this.scroller.virtualSize(0, this.list.totalHeight() + this.chromeHeight)
            },
            refresh: function() {
                this.list.refresh()
            },
            reset: function() {
                this.buffer.range(0),
                this.list.refresh()
            }
        }),
        f = m.Class.extend({
            init: function(e) {
                var t, n = this;
                this.listView = e,
                this.options = e.options,
                t = this,
                this._refreshHandler = function(e) {
                    t.refresh(e)
                }
                ,
                this._progressHandler = function() {
                    e.showLoading()
                }
                ,
                e.bind("_dataSource", function(e) {
                    n.setDataSource(e.dataSource)
                })
            },
            destroy: function() {
                this._unbindDataSource()
            },
            reset: function() {},
            refresh: function(e) {
                var n, i, o, r, a, s, l, c = e && e.action, d = e && e.items, u = this.listView, h = this.dataSource, f = this.options.appendOnRefresh, p = h.view(), g = h.group(), m = g && g[0];
                return "itemchange" !== c || u._hasBindingTarget() ? (a = "add" === c && !m || f && !u._filter,
                s = "remove" === c && !m,
                a ? i = [] : s && (i = u.findByDataItem(d)),
                u.trigger(F, {
                    action: c || "rebind",
                    items: d,
                    removedItems: i,
                    index: e && e.index
                }) ? (this._shouldShowLoading() && u.hideLoading(),
                t) : ("add" !== c || m ? "remove" !== c || m ? m ? u.replaceGrouped(p) : f && !u._filter ? (o = u.prepend(p),
                r = p) : u.replace(p) : (o = [],
                u.remove(d)) : (l = p.indexOf(d[0]),
                l > -1 && (o = u.insertAt(d, l),
                r = d)),
                this._shouldShowLoading() && u.hideLoading(),
                u.trigger(L, {
                    ns: y,
                    addedItems: o,
                    addedDataItems: r
                }),
                t)) : (n = u.findByDataItem(d)[0],
                n && u.setDataItem(n, d[0]),
                t)
            },
            setDataSource: function(e) {
                this.dataSource && this._unbindDataSource(),
                this.dataSource = e,
                e.bind(N, this._refreshHandler),
                this._shouldShowLoading() && this.dataSource.bind(H, this._progressHandler)
            },
            _unbindDataSource: function() {
                this.dataSource.unbind(N, this._refreshHandler).unbind(H, this._progressHandler)
            },
            _shouldShowLoading: function() {
                var e = this.options;
                return !e.pullToRefresh && !e.loadMore && !e.endlessScroll
            }
        }),
        p = m.Class.extend({
            init: function(t) {
                var n = this
                  , i = t.options.filterable
                  , o = "change paste"
                  , r = this;
                this.listView = t,
                this.options = i,
                t.element.before(I({
                    placeholder: i.placeholder || "Search..."
                })),
                i.autoFilter !== !1 && (o += " keyup"),
                this.element = t.wrapper.find(".km-search-form"),
                this.searchInput = t.wrapper.find("input[type=search]").closest("form").on("submit" + B, function(e) {
                    e.preventDefault()
                }).end().on("focus" + B, function() {
                    n._oldFilter = n.searchInput.val()
                }).on(o.split(" ").join(B + " ") + B, S(this._filterChange, this)),
                this.clearButton = t.wrapper.find(".km-filter-reset").on(O, S(this, "_clearFilter")).hide(),
                this._dataSourceChange = e.proxy(this._refreshInput, this),
                t.bind("_dataSource", function(e) {
                    e.dataSource.bind("change", r._dataSourceChange)
                })
            },
            _refreshInput: function() {
                var e = this.listView.dataSource.filter()
                  , t = this.listView._filter.searchInput;
                t.val(e && e.filters[0].field === this.listView.options.filterable.field ? e.filters[0].value : "")
            },
            _search: function(e) {
                this._filter = !0,
                this.clearButton[e ? "show" : "hide"](),
                this.listView.dataSource.filter(e)
            },
            _filterChange: function(e) {
                var t = this;
                "paste" == e.type && this.options.autoFilter !== !1 ? setTimeout(function() {
                    t._applyFilter()
                }, 1) : this._applyFilter()
            },
            _applyFilter: function() {
                var e = this.options
                  , t = this.searchInput.val()
                  , n = t.length ? {
                    field: e.field,
                    operator: e.operator || "startswith",
                    ignoreCase: e.ignoreCase,
                    value: t
                } : null ;
                t !== this._oldFilter && (this._oldFilter = t,
                this._search(n))
            },
            _clearFilter: function(e) {
                this.searchInput.val(""),
                this._search(null ),
                e.preventDefault()
            }
        }),
        g = b.extend({
            init: function(e, t) {
                var n = this;
                b.fn.init.call(this, e, t),
                e = this.element,
                t = this.options,
                t.scrollTreshold && (t.scrollThreshold = t.scrollTreshold),
                e.on("down", k, "_highlight").on("move up cancel", k, "_dim"),
                this._userEvents = new m.UserEvents(e,{
                    filter: x,
                    allowSelection: !0,
                    tap: function(e) {
                        n._click(e)
                    }
                }),
                e.css("-ms-touch-action", "auto"),
                e.wrap(E),
                this.wrapper = this.element.parent(),
                this._headerFixer = new j(this),
                this._itemsCache = {},
                this._templates(),
                this.virtual = t.endlessScroll || t.loadMore,
                this._style(),
                this.options.filterable && (this._filter = new p(this)),
                this._itemBinder = this.virtual ? new h(this) : new f(this),
                this.options.pullToRefresh && (this._pullToRefreshHandler = new q(this)),
                this.setDataSource(t.dataSource),
                this._enhanceItems(this.items()),
                m.notify(this, y)
            },
            events: [O, F, L, R],
            options: {
                name: "ListView",
                style: "",
                type: "flat",
                autoBind: !0,
                fixedHeaders: !1,
                template: "#:data#",
                headerTemplate: '<span class="km-text">#:value#</span>',
                appendOnRefresh: !1,
                loadMore: !1,
                endlessScroll: !1,
                scrollThreshold: 30,
                pullToRefresh: !1,
                messages: {
                    loadMoreText: "Press to load more",
                    pullTemplate: "Pull to refresh",
                    releaseTemplate: "Release to refresh",
                    refreshTemplate: "Refreshing"
                },
                pullOffset: 140,
                filterable: !1,
                virtualViewSize: null 
            },
            refresh: function() {
                this._itemBinder.refresh()
            },
            reset: function() {
                this._itemBinder.reset()
            },
            setDataSource: function(e) {
                var t = !e;
                this.dataSource = w.create(e),
                this.trigger("_dataSource", {
                    dataSource: this.dataSource,
                    empty: t
                }),
                this.options.autoBind && !t && (this.items().remove(),
                this.dataSource.fetch())
            },
            destroy: function() {
                b.fn.destroy.call(this),
                m.destroy(this.element),
                this._userEvents.destroy(),
                this._itemBinder && this._itemBinder.destroy(),
                this.element.unwrap(),
                delete this.element,
                delete this.wrapper,
                delete this._userEvents
            },
            items: function() {
                return "group" === this.options.type ? this.element.find(".km-list").children() : this.element.children().not(".km-load-more")
            },
            scroller: function() {
                return this._scrollerInstance || (this._scrollerInstance = this.element.closest(".km-scroll-wrapper").data("kendoMobileScroller")),
                this._scrollerInstance
            },
            showLoading: function() {
                var e = this.view();
                e && e.loader && e.loader.show()
            },
            hideLoading: function() {
                var e = this.view();
                e && e.loader && e.loader.hide()
            },
            insertAt: function(e, t, n) {
                var i = this;
                return i._renderItems(e, function(o) {
                    if (0 === t ? i.element.prepend(o) : -1 === t ? i.element.append(o) : i.items().eq(t - 1).after(o),
                    n)
                        for (var r = 0; o.length > r; r++)
                            i.trigger(R, {
                                item: o.eq(r),
                                data: e[r],
                                ns: y
                            })
                })
            },
            append: function(e, t) {
                return this.insertAt(e, -1, t)
            },
            prepend: function(e, t) {
                return this.insertAt(e, 0, t)
            },
            replace: function(e) {
                return this.options.type = "flat",
                this._angularItems("cleanup"),
                this.element.empty(),
                this._style(),
                this.insertAt(e, 0)
            },
            replaceGrouped: function(t) {
                this.options.type = "group",
                this._angularItems("cleanup"),
                this.element.empty();
                var n = e(m.render(this.groupTemplate, t));
                this._enhanceItems(n.children("ul").children("li")),
                this.element.append(n),
                _.init(n),
                this._style(),
                this._angularItems("compile")
            },
            remove: function(e) {
                var t = this.findByDataItem(e);
                this.angular("cleanup", function() {
                    return {
                        elements: t
                    }
                }),
                m.destroy(t),
                t.remove()
            },
            findByDataItem: function(e) {
                var t, n, i = [];
                for (t = 0,
                n = e.length; n > t; t++)
                    i[t] = "[data-" + m.ns + "uid=" + e[t].uid + "]";
                return this.element.find(i.join(","))
            },
            setDataItem: function(t, n) {
                var i = this
                  , o = function(o) {
                    var r = e(o[0]);
                    m.destroy(t),
                    e(t).replaceWith(r),
                    i.trigger(R, {
                        item: r,
                        data: n,
                        ns: y
                    })
                }
                ;
                return this._renderItems([n], o)[0]
            },
            updateSize: function() {
                this._size = this.getSize()
            },
            _renderItems: function(t, n) {
                var i = e(m.render(this.template, t));
                return this.angular("compile", function() {
                    return {
                        elements: i,
                        data: t.map(function(e) {
                            return {
                                dataItem: e
                            }
                        })
                    }
                }),
                n(i),
                _.init(i),
                this._enhanceItems(i),
                i
            },
            _dim: function(e) {
                this._toggle(e, !1)
            },
            _highlight: function(e) {
                this._toggle(e, !0)
            },
            _toggle: function(t, n) {
                if (!(t.which > 1)) {
                    var i = e(t.currentTarget)
                      , o = i.parent()
                      , r = T(i, "role") || ""
                      , a = !r.match(W)
                      , s = t.isDefaultPrevented();
                    a && o.toggleClass(A, n && !s)
                }
            },
            _templates: function() {
                var e = this.options.template
                  , t = this.options.headerTemplate
                  , n = ' data-uid="#=arguments[0].uid || ""#"'
                  , i = {}
                  , o = {};
                typeof e === V && (i.template = e,
                e = "#=this.template(data)#"),
                this.template = S(m.template("<li" + n + ">" + e + "</li>"), i),
                o.template = this.template,
                typeof t === V && (o._headerTemplate = t,
                t = "#=this._headerTemplate(data)#"),
                o.headerTemplate = m.template(t),
                this.groupTemplate = S(M, o)
            },
            _click: function(t) {
                if (!(t.event.which > 1 || t.event.isDefaultPrevented())) {
                    var n, i = t.target, o = e(t.event.target), r = o.closest(m.roleSelector("button", "detailbutton", "backbutton")), a = m.widgetInstance(r, y), s = i.attr(m.attr("uid"));
                    s && (n = this.dataSource.getByUid(s)),
                    this.trigger(O, {
                        target: o,
                        item: i,
                        dataItem: n,
                        button: a
                    }) && t.preventDefault()
                }
            },
            _styleGroups: function() {
                var t = this.element.children();
                t.children("ul").addClass("km-list"),
                t.each(function() {
                    var t = e(this)
                      , n = t.contents().first();
                    t.addClass("km-group-container"),
                    n.is("ul") || n.is("div." + D) || n.wrap(P)
                })
            },
            _style: function() {
                var e = this.options
                  , t = "group" === e.type
                  , n = this.element
                  , i = "inset" === e.style;
                n.addClass("km-listview").toggleClass("km-list", !t).toggleClass("km-virtual-list", this.virtual).toggleClass("km-listinset", !t && i).toggleClass("km-listgroup", t && !i).toggleClass("km-listgroupinset", t && i),
                n.parents(".km-listview")[0] || n.closest(".km-content").toggleClass("km-insetcontent", i),
                t && this._styleGroups(),
                this.trigger(z)
            },
            _enhanceItems: function(t) {
                t.each(function() {
                    var t, n = e(this), i = !1;
                    n.children().each(function() {
                        t = e(this),
                        t.is("a") ? (r(t),
                        i = !0) : t.is("label") && (a(t),
                        i = !0)
                    }),
                    i || o(n)
                })
            }
        }),
        y.plugin(g)
    }(window.kendo.jQuery),
    function(e, t) {
        function n(n, i) {
            var r = i.find("[" + o.attr("align") + "=" + n + "]");
            return r[0] ? e('<div class="km-' + n + 'item" />').append(r).prependTo(i) : t
        }
        function i(t) {
            var n = t.siblings()
              , i = !!t.children("ul")[0]
              , r = !!n[0] && "" === e.trim(t.text())
              , a = !(!o.mobile.application || !o.mobile.application.element.is(".km-android"));
            t.prevAll().toggleClass("km-absolute", i),
            t.toggleClass("km-show-title", r),
            t.toggleClass("km-fill-title", r && !e.trim(t.html())),
            t.toggleClass("km-no-title", i),
            t.toggleClass("km-hide-title", a && !n.children().is(":visible"))
        }
        var o = window.kendo
          , r = o.mobile
          , a = r.ui
          , s = a.Widget
          , l = s.extend({
            init: function(t, i) {
                var o = this;
                s.fn.init.call(o, t, i),
                t = o.element,
                o.container().bind("show", e.proxy(this, "refresh")),
                t.addClass("km-navbar").wrapInner(e('<div class="km-view-title km-show-title" />')),
                o.leftElement = n("left", t),
                o.rightElement = n("right", t),
                o.centerElement = t.find(".km-view-title")
            },
            options: {
                name: "NavBar"
            },
            title: function(e) {
                this.element.find(o.roleSelector("view-title")).text(e),
                i(this.centerElement)
            },
            refresh: function(e) {
                var t = e.view;
                t.options.title ? this.title(t.options.title) : i(this.centerElement)
            },
            destroy: function() {
                s.fn.destroy.call(this),
                o.destroy(this.element)
            }
        });
        a.plugin(l)
    }(window.kendo.jQuery),
    function(e, t) {
        var n, i, o, r, a, s, l, c, d = window.kendo, u = d.mobile, h = u.ui, f = e.proxy, p = d.effects.Transition, g = d.ui.Pane, m = d.ui.PaneDimensions, v = h.DataBoundWidget, _ = d.data.DataSource, y = d.data.Buffer, w = d.data.BatchBuffer, b = Math, x = b.abs, k = b.ceil, C = b.round, S = b.max, T = b.min, D = b.floor, A = "change", P = "changing", M = "refresh", E = "km-current-page", I = "km-virtual-page", B = "function", z = "itemChange", L = "cleanup", F = 3, R = -1, O = 0, N = 1, H = -1, V = 0, U = 1, W = d.Class.extend({
            init: function(t) {
                var n = this
                  , i = e("<ol class='km-pages'/>");
                t.element.append(i),
                this._changeProxy = f(n, "_change"),
                this._refreshProxy = f(n, "_refresh"),
                t.bind(A, this._changeProxy),
                t.bind(M, this._refreshProxy),
                e.extend(n, {
                    element: i,
                    scrollView: t
                })
            },
            items: function() {
                return this.element.children()
            },
            _refresh: function(e) {
                var t, n = "";
                for (t = 0; e.pageCount > t; t++)
                    n += "<li/>";
                this.element.html(n),
                this.items().eq(e.page).addClass(E)
            },
            _change: function(e) {
                this.items().removeClass(E).eq(e.page).addClass(E)
            },
            destroy: function() {
                this.scrollView.unbind(A, this._changeProxy),
                this.scrollView.unbind(M, this._refreshProxy),
                this.element.remove()
            }
        });
        d.mobile.ui.ScrollViewPager = W,
        n = "transitionEnd",
        i = "dragStart",
        o = "dragEnd",
        r = d.Observable.extend({
            init: function(t, r) {
                var a, s, l, c, u, h, f = this;
                d.Observable.fn.init.call(this),
                this.element = t,
                this.container = t.parent(),
                a = new d.ui.Movable(f.element),
                s = new p({
                    axis: "x",
                    movable: a,
                    onEnd: function() {
                        f.trigger(n)
                    }
                }),
                l = new d.UserEvents(t,{
                    start: function(e) {
                        2 * x(e.x.velocity) >= x(e.y.velocity) ? l.capture() : l.cancel(),
                        f.trigger(i, e),
                        s.cancel()
                    },
                    allowSelection: !0,
                    end: function(e) {
                        f.trigger(o, e)
                    }
                }),
                c = new m({
                    element: f.element,
                    container: f.container
                }),
                u = c.x,
                u.bind(A, function() {
                    f.trigger(A)
                }),
                h = new g({
                    dimensions: c,
                    userEvents: l,
                    movable: a,
                    elastic: !0
                }),
                e.extend(f, {
                    duration: r && r.duration || 1,
                    movable: a,
                    transition: s,
                    userEvents: l,
                    dimensions: c,
                    dimension: u,
                    pane: h
                }),
                this.bind([n, i, o, A], r)
            },
            size: function() {
                return {
                    width: this.dimensions.x.getSize(),
                    height: this.dimensions.y.getSize()
                }
            },
            total: function() {
                return this.dimension.getTotal()
            },
            offset: function() {
                return -this.movable.x
            },
            updateDimension: function() {
                this.dimension.update(!0)
            },
            refresh: function() {
                this.dimensions.refresh()
            },
            moveTo: function(e) {
                this.movable.moveAxis("x", -e)
            },
            transitionTo: function(e, t, n) {
                n ? this.moveTo(-e) : this.transition.moveTo({
                    location: e,
                    duration: this.duration,
                    ease: t
                })
            }
        }),
        d.mobile.ui.ScrollViewElasticPane = r,
        a = d.Observable.extend({
            init: function(e, t, n) {
                var i = this;
                d.Observable.fn.init.call(this),
                i.element = e,
                i.pane = t,
                i._getPages(),
                this.page = 0,
                this.pageSize = n.pageSize || 1,
                this.contentHeight = n.contentHeight,
                this.enablePager = n.enablePager
            },
            scrollTo: function(e, t) {
                this.page = e,
                this.pane.transitionTo(-e * this.pane.size().width, p.easeOutExpo, t)
            },
            paneMoved: function(e, t, n, i) {
                var o, r, a = this, s = a.pane, l = s.size().width * a.pageSize, c = C, d = t ? p.easeOutBack : p.easeOutExpo;
                e === H ? c = k : e === U && (c = D),
                r = c(s.offset() / l),
                o = S(a.minSnap, T(-r * l, a.maxSnap)),
                r != a.page && n && n({
                    currentPage: a.page,
                    nextPage: r
                }) && (o = -a.page * s.size().width),
                s.transitionTo(o, d, i)
            },
            updatePage: function() {
                var e = this.pane
                  , t = C(e.offset() / e.size().width);
                return t != this.page ? (this.page = t,
                !0) : !1
            },
            forcePageUpdate: function() {
                return this.updatePage()
            },
            resizeTo: function(e) {
                var t, n, i = this.pane, o = e.width;
                this.pageElements.width(o),
                "100%" === this.contentHeight && (t = this.element.parent().height(),
                this.enablePager === !0 && (n = this.element.parent().find("ol.km-pages"),
                n.length && (t -= n.outerHeight(!0))),
                this.element.css("height", t),
                this.pageElements.css("height", t)),
                i.updateDimension(),
                this._paged || (this.page = D(i.offset() / o)),
                this.scrollTo(this.page, !0),
                this.pageCount = k(i.total() / o),
                this.minSnap = -(this.pageCount - 1) * o,
                this.maxSnap = 0
            },
            _getPages: function() {
                this.pageElements = this.element.find(d.roleSelector("page")),
                this._paged = this.pageElements.length > 0
            }
        }),
        d.mobile.ui.ScrollViewContent = a,
        s = d.Observable.extend({
            init: function(e, t, n) {
                var i = this;
                d.Observable.fn.init.call(this),
                i.element = e,
                i.pane = t,
                i.options = n,
                i._templates(),
                i.page = n.page || 0,
                i.pages = [],
                i._initPages(),
                i.resizeTo(i.pane.size()),
                i.pane.dimension.forceEnabled()
            },
            setDataSource: function(e) {
                this.dataSource = _.create(e),
                this._buffer(),
                this._pendingPageRefresh = !1,
                this._pendingWidgetRefresh = !1
            },
            _viewShow: function() {
                var e = this;
                e._pendingWidgetRefresh && (setTimeout(function() {
                    e._resetPages()
                }, 0),
                e._pendingWidgetRefresh = !1)
            },
            _buffer: function() {
                var e = this.options.itemsPerPage;
                this.buffer && this.buffer.destroy(),
                this.buffer = e > 1 ? new w(this.dataSource,e) : new y(this.dataSource,3 * e),
                this._resizeProxy = f(this, "_onResize"),
                this._resetProxy = f(this, "_onReset"),
                this._endReachedProxy = f(this, "_onEndReached"),
                this.buffer.bind({
                    resize: this._resizeProxy,
                    reset: this._resetProxy,
                    endreached: this._endReachedProxy
                })
            },
            _templates: function() {
                var e = this.options.template
                  , t = this.options.emptyTemplate
                  , n = {}
                  , i = {};
                typeof e === B && (n.template = e,
                e = "#=this.template(data)#"),
                this.template = f(d.template(e), n),
                typeof t === B && (i.emptyTemplate = t,
                t = "#=this.emptyTemplate(data)#"),
                this.emptyTemplate = f(d.template(t), i)
            },
            _initPages: function() {
                var e, t, n = this.pages, i = this.element;
                for (t = 0; F > t; t++)
                    e = new l(i),
                    n.push(e);
                this.pane.updateDimension()
            },
            resizeTo: function(e) {
                var t, n, i, o = this.pages, r = this.pane;
                for (t = 0; o.length > t; t++)
                    o[t].setWidth(e.width);
                "auto" === this.options.contentHeight ? this.element.css("height", this.pages[1].element.height()) : "100%" === this.options.contentHeight && (n = this.element.parent().height(),
                this.options.enablePager === !0 && (i = this.element.parent().find("ol.km-pages"),
                i.length && (n -= i.outerHeight(!0))),
                this.element.css("height", n),
                o[0].element.css("height", n),
                o[1].element.css("height", n),
                o[2].element.css("height", n)),
                r.updateDimension(),
                this._repositionPages(),
                this.width = e.width
            },
            scrollTo: function(e) {
                var t, n = this.buffer;
                n.syncDataSource(),
                t = n.at(e),
                t && (this._updatePagesContent(e),
                this.page = e)
            },
            paneMoved: function(e, t, n, i) {
                var o, r = this, a = r.pane, s = a.size().width, l = a.offset(), c = Math.abs(l) >= s / 3, u = t ? d.effects.Transition.easeOutBack : d.effects.Transition.easeOutExpo, h = r.page + 2 > r.buffer.total(), f = 0;
                e === U ? 0 !== r.page && (f = -1) : e !== H || h ? l > 0 && c && !h ? f = 1 : 0 > l && c && 0 !== r.page && (f = -1) : f = 1,
                o = r.page,
                f && (o = f > 0 ? o + 1 : o - 1),
                n && n({
                    currentPage: r.page,
                    nextPage: o
                }) && (f = 0),
                0 === f ? r._cancelMove(u, i) : -1 === f ? r._moveBackward(i) : 1 === f && r._moveForward(i)
            },
            updatePage: function() {
                var e = this.pages;
                return 0 === this.pane.offset() ? !1 : (this.pane.offset() > 0 ? (e.push(this.pages.shift()),
                this.page++,
                this.setPageContent(e[2], this.page + 1)) : (e.unshift(this.pages.pop()),
                this.page--,
                this.setPageContent(e[0], this.page - 1)),
                this._repositionPages(),
                this._resetMovable(),
                !0)
            },
            forcePageUpdate: function() {
                var e = this.pane.offset()
                  , t = 3 * this.pane.size().width / 4;
                return x(e) > t ? this.updatePage() : !1
            },
            _resetMovable: function() {
                this.pane.moveTo(0)
            },
            _moveForward: function(e) {
                this.pane.transitionTo(-this.width, d.effects.Transition.easeOutExpo, e)
            },
            _moveBackward: function(e) {
                this.pane.transitionTo(this.width, d.effects.Transition.easeOutExpo, e)
            },
            _cancelMove: function(e, t) {
                this.pane.transitionTo(0, e, t)
            },
            _resetPages: function() {
                this.page = this.options.page || 0,
                this._updatePagesContent(this.page),
                this._repositionPages(),
                this.trigger("reset")
            },
            _onResize: function() {
                this.pageCount = k(this.dataSource.total() / this.options.itemsPerPage),
                this._pendingPageRefresh && (this._updatePagesContent(this.page),
                this._pendingPageRefresh = !1),
                this.trigger("resize")
            },
            _onReset: function() {
                this.pageCount = k(this.dataSource.total() / this.options.itemsPerPage),
                this._resetPages()
            },
            _onEndReached: function() {
                this._pendingPageRefresh = !0
            },
            _repositionPages: function() {
                var e = this.pages;
                e[0].position(R),
                e[1].position(O),
                e[2].position(N)
            },
            _updatePagesContent: function(e) {
                var t = this.pages
                  , n = e || 0;
                this.setPageContent(t[0], n - 1),
                this.setPageContent(t[1], n),
                this.setPageContent(t[2], n + 1)
            },
            setPageContent: function(t, n) {
                var i = this.buffer
                  , o = this.template
                  , r = this.emptyTemplate
                  , a = null ;
                n >= 0 && (a = i.at(n),
                e.isArray(a) && !a.length && (a = null )),
                this.trigger(L, {
                    item: t.element
                }),
                t.content(null  !== a ? o(a) : r({})),
                d.mobile.init(t.element),
                this.trigger(z, {
                    item: t.element,
                    data: a,
                    ns: d.mobile.ui
                })
            }
        }),
        d.mobile.ui.VirtualScrollViewContent = s,
        l = d.Class.extend({
            init: function(t) {
                this.element = e("<div class='" + I + "'></div>"),
                this.width = t.width(),
                this.element.width(this.width),
                t.append(this.element)
            },
            content: function(e) {
                this.element.html(e)
            },
            position: function(e) {
                this.element.css("transform", "translate3d(" + this.width * e + "px, 0, 0)")
            },
            setWidth: function(e) {
                this.width = e,
                this.element.width(e)
            }
        }),
        d.mobile.ui.VirtualPage = l,
        c = v.extend({
            init: function(e, t) {
                var n, i, o, l = this;
                v.fn.init.call(l, e, t),
                t = l.options,
                e = l.element,
                d.stripWhitespace(e[0]),
                e.wrapInner("<div/>").addClass("km-scrollview"),
                this.options.enablePager && (this.pager = new W(this)),
                l.inner = e.children().first(),
                l.page = 0,
                l.inner.css("height", t.contentHeight),
                l.pane = new r(l.inner,{
                    duration: this.options.duration,
                    transitionEnd: f(this, "_transitionEnd"),
                    dragStart: f(this, "_dragStart"),
                    dragEnd: f(this, "_dragEnd"),
                    change: f(this, M)
                }),
                l.bind("resize", function() {
                    l.pane.refresh()
                }),
                l.page = t.page,
                n = 0 === this.inner.children().length,
                i = n ? new s(l.inner,l.pane,t) : new a(l.inner,l.pane,t),
                i.page = l.page,
                i.bind("reset", function() {
                    l._syncWithContent(),
                    l.trigger(M, {
                        pageCount: i.pageCount,
                        page: i.page
                    })
                }),
                i.bind("resize", function() {
                    l.trigger(M, {
                        pageCount: i.pageCount,
                        page: i.page
                    })
                }),
                i.bind(z, function(e) {
                    l.trigger(z, e),
                    l.angular("compile", function() {
                        return {
                            elements: e.item,
                            data: [{
                                dataItem: e.data
                            }]
                        }
                    })
                }),
                i.bind(L, function(e) {
                    l.angular("cleanup", function() {
                        return {
                            elements: e.item
                        }
                    })
                }),
                l._content = i,
                l.setDataSource(t.dataSource),
                o = l.container(),
                o.nullObject ? (l.viewInit(),
                l.viewShow()) : o.bind("show", f(this, "viewShow")).bind("init", f(this, "viewInit"))
            },
            options: {
                name: "ScrollView",
                page: 0,
                duration: 400,
                velocityThreshold: .8,
                contentHeight: "auto",
                pageSize: 1,
                itemsPerPage: 1,
                bounceVelocityThreshold: 1.6,
                enablePager: !0,
                autoBind: !0,
                template: "",
                emptyTemplate: ""
            },
            events: [P, A, M],
            destroy: function() {
                v.fn.destroy.call(this),
                d.destroy(this.element)
            },
            viewInit: function() {
                this.options.autoBind && this._content.scrollTo(this._content.page, !0)
            },
            viewShow: function() {
                this.pane.refresh()
            },
            refresh: function() {
                var e = this._content;
                e.resizeTo(this.pane.size()),
                this.page = e.page,
                this.trigger(M, {
                    pageCount: e.pageCount,
                    page: e.page
                })
            },
            content: function(e) {
                this.element.children().first().html(e),
                this._content._getPages(),
                this.pane.refresh()
            },
            value: function(e) {
                var n = this.dataSource;
                return e ? (this.scrollTo(n.indexOf(e), !0),
                t) : n.at(this.page)
            },
            scrollTo: function(e, t) {
                this._content.scrollTo(e, t),
                this._syncWithContent()
            },
            prev: function() {
                var e = this
                  , n = e.page - 1;
                e._content instanceof s ? e._content.paneMoved(U, t, function(t) {
                    return e.trigger(P, t)
                }) : n > -1 && e.scrollTo(n)
            },
            next: function() {
                var e = this
                  , n = e.page + 1;
                e._content instanceof s ? e._content.paneMoved(H, t, function(t) {
                    return e.trigger(P, t)
                }) : e._content.pageCount > n && e.scrollTo(n)
            },
            setDataSource: function(e) {
                if (this._content instanceof s) {
                    var t = !e;
                    this.dataSource = _.create(e),
                    this._content.setDataSource(this.dataSource),
                    this.options.autoBind && !t && this.dataSource.fetch()
                }
            },
            items: function() {
                return this.element.find("." + I)
            },
            _syncWithContent: function() {
                var e, n, i = this._content.pages, o = this._content.buffer;
                this.page = this._content.page,
                e = o ? o.at(this.page) : t,
                e instanceof Array || (e = [e]),
                n = i ? i[1].element : t,
                this.trigger(A, {
                    page: this.page,
                    element: n,
                    data: e
                })
            },
            _dragStart: function() {
                this._content.forcePageUpdate() && this._syncWithContent()
            },
            _dragEnd: function(e) {
                var t = this
                  , n = e.x.velocity
                  , i = this.options.velocityThreshold
                  , o = V
                  , r = x(n) > this.options.bounceVelocityThreshold;
                n > i ? o = U : -i > n && (o = H),
                this._content.paneMoved(o, r, function(e) {
                    return t.trigger(P, e)
                })
            },
            _transitionEnd: function() {
                this._content.updatePage() && this._syncWithContent()
            }
        }),
        h.plugin(c)
    }(window.kendo.jQuery),
    function(e, t) {
        function n(e, t, n) {
            return Math.max(t, Math.min(n, e))
        }
        var i = window.kendo
          , o = i.mobile.ui
          , r = o.Widget
          , a = i.support
          , s = "change"
          , l = "km-switch-on"
          , c = "km-switch-off"
          , d = "margin-left"
          , u = "km-state-active"
          , h = "km-state-disabled"
          , f = "disabled"
          , p = a.transitions.css + "transform"
          , g = e.proxy
          , m = '<span class="km-switch km-widget">        <span class="km-switch-wrapper"><span class="km-switch-background"></span></span>         <span class="km-switch-container"><span class="km-switch-handle" >             <span class="km-switch-label-on">{0}</span>             <span class="km-switch-label-off">{1}</span>         </span>     </span>'
          , v = r.extend({
            init: function(t, n) {
                var o, a = this;
                r.fn.init.call(a, t, n),
                n = a.options,
                a.wrapper = e(i.format(m, n.onLabel, n.offLabel)),
                a.handle = a.wrapper.find(".km-switch-handle"),
                a.background = a.wrapper.find(".km-switch-background"),
                a.wrapper.insertBefore(a.element).prepend(a.element),
                a._drag(),
                a.origin = parseInt(a.background.css(d), 10),
                a.constrain = 0,
                a.snapPoint = 0,
                t = a.element[0],
                t.type = "checkbox",
                a._animateBackground = !0,
                o = a.options.checked,
                null  === o && (o = t.checked),
                a.check(o),
                a.options.enable = a.options.enable && !a.element.attr(f),
                a.enable(a.options.enable),
                a.refresh(),
                i.notify(a, i.mobile.ui)
            },
            refresh: function() {
                var e = this
                  , t = e.handle.outerWidth(!0);
                e.width = e.wrapper.width(),
                e.constrain = e.width - t,
                e.snapPoint = e.constrain / 2,
                "number" != typeof e.origin && (e.origin = parseInt(e.background.css(d), 10)),
                e.background.data("origin", e.origin),
                e.check(e.element[0].checked)
            },
            events: [s],
            options: {
                name: "Switch",
                onLabel: "on",
                offLabel: "off",
                checked: null ,
                enable: !0
            },
            check: function(e) {
                var n = this
                  , i = n.element[0];
                return e === t ? i.checked : (n._position(e ? n.constrain : 0),
                i.checked = e,
                n.wrapper.toggleClass(l, e).toggleClass(c, !e),
                t)
            },
            value: function() {
                return this.check.apply(this, arguments)
            },
            destroy: function() {
                r.fn.destroy.call(this),
                this.userEvents.destroy()
            },
            toggle: function() {
                var e = this;
                e.check(!e.element[0].checked)
            },
            enable: function(e) {
                var n = this.element
                  , i = this.wrapper;
                t === e && (e = !0),
                this.options.enable = e,
                e ? n.removeAttr(f) : n.attr(f, f),
                i.toggleClass(h, !e)
            },
            _resize: function() {
                this.refresh()
            },
            _move: function(e) {
                var t = this;
                e.preventDefault(),
                t._position(n(t.position + e.x.delta, 0, t.width - t.handle.outerWidth(!0)))
            },
            _position: function(e) {
                var t = this;
                t.position = e,
                t.handle.css(p, "translatex(" + e + "px)"),
                t._animateBackground && t.background.css(d, t.origin + e)
            },
            _start: function() {
                this.options.enable ? (this.userEvents.capture(),
                this.handle.addClass(u)) : this.userEvents.cancel()
            },
            _stop: function() {
                var e = this;
                e.handle.removeClass(u),
                e._toggle(e.position > e.snapPoint)
            },
            _toggle: function(e) {
                var t, n = this, o = n.handle, r = n.element[0], a = r.checked, d = i.mobile.application && i.mobile.application.os.wp ? 100 : 200;
                n.wrapper.toggleClass(l, e).toggleClass(c, !e),
                n.position = t = e * n.constrain,
                n._animateBackground && n.background.kendoStop(!0, !0).kendoAnimate({
                    effects: "slideMargin",
                    offset: t,
                    reset: !0,
                    reverse: !e,
                    axis: "left",
                    duration: d
                }),
                o.kendoStop(!0, !0).kendoAnimate({
                    effects: "slideTo",
                    duration: d,
                    offset: t + "px,0",
                    reset: !0,
                    complete: function() {
                        a !== e && (r.checked = e,
                        n.trigger(s, {
                            checked: e
                        }))
                    }
                })
            },
            _drag: function() {
                var e = this;
                e.userEvents = new i.UserEvents(e.wrapper,{
                    tap: function() {
                        e.options.enable && e._toggle(!e.element[0].checked)
                    },
                    start: g(e._start, e),
                    move: g(e._move, e),
                    end: g(e._stop, e)
                })
            }
        });
        o.plugin(v)
    }(window.kendo.jQuery),
    function(e) {
        function t(t) {
            return e('<span class="km-badge">' + t + "</span>")
        }
        var n = window.kendo
          , i = n.mobile.ui
          , o = i.Widget
          , r = "km-state-active"
          , a = "select"
          , s = o.extend({
            init: function(t, n) {
                var i = this;
                o.fn.init.call(i, t, n),
                i.container().bind("show", e.proxy(this, "refresh")),
                i.element.addClass("km-tabstrip").find("a").each(i._buildButton).eq(i.options.selectedIndex).addClass(r),
                i.element.on("down", "a", "_release")
            },
            events: [a],
            switchTo: function(t) {
                var n, i, o = this.element.find("a"), r = 0, a = o.length;
                if (!isNaN(t))
                    return this._setActiveItem(o.eq(t)),
                    !0;
                for (; a > r; r++)
                    if (n = o[r],
                    i = n.href.replace(/(\#.+)(\?.+)$/, "$1"),
                    -1 !== i.indexOf(t, i.length - t.length))
                        return this._setActiveItem(e(n)),
                        !0;
                return !1
            },
            switchByFullUrl: function(e) {
                var t;
                t = this.element.find("a[href$='" + e + "']"),
                this._setActiveItem(t)
            },
            clear: function() {
                this.currentItem().removeClass(r)
            },
            currentItem: function() {
                return this.element.children("." + r)
            },
            badge: function(n, i) {
                var o, r = this.element;
                return isNaN(n) || (n = r.children().get(n)),
                n = r.find(n),
                o = e(n.find(".km-badge")[0] || t(i).insertAfter(n.children(".km-icon"))),
                i || 0 === i ? (o.html(i),
                this) : i === !1 ? (o.empty().remove(),
                this) : o.html()
            },
            _release: function(t) {
                if (!(t.which > 1)) {
                    var n = this
                      , i = e(t.currentTarget);
                    i[0] !== n.currentItem()[0] && (n.trigger(a, {
                        item: i
                    }) ? t.preventDefault() : n._setActiveItem(i))
                }
            },
            _setActiveItem: function(e) {
                e[0] && (this.clear(),
                e.addClass(r))
            },
            _buildButton: function() {
                var i = e(this)
                  , o = n.attrValue(i, "icon")
                  , r = n.attrValue(i, "badge")
                  , a = i.find("img")
                  , s = e('<span class="km-icon"/>');
                i.addClass("km-button").attr(n.attr("role"), "tab").contents().not(a).wrapAll('<span class="km-text"/>'),
                a[0] ? a.addClass("km-image").prependTo(i) : (i.prepend(s),
                o && (s.addClass("km-" + o),
                (r || 0 === r) && t(r).insertAfter(s)))
            },
            refresh: function(e) {
                var t = e.view.element.attr(n.attr("url"));
                !this.switchTo(e.view.id) && t && this.switchTo(t)
            },
            options: {
                name: "TabStrip",
                selectedIndex: 0,
                enable: !0
            }
        });
        i.plugin(s)
    }(window.kendo.jQuery),
    function(e, t, n) {
        "use strict";
        function i(e) {
            var t = C;
            try {
                return C = function(e) {
                    return e()
                }
                ,
                e()
            } finally {
                C = t
            }
        }
        function o(e, i, o, r) {
            i[o] = t.copy(e.$eval(r)),
            i[o] === n && r.match(/^\w*$/) && T.warn(o + " attribute resolved to undefined. Maybe you meant to use a string literal like: '" + r + "'?")
        }
        function r(i, r, c, d, m, v) {
            function _() {
                var n, v, _, y, w, k, C, S, T, E, I, B, z;
                return c.kRebind && (n = e(e(r)[0].cloneNode(!0))),
                v = d.replace(/^kendo/, ""),
                _ = t.extend({}, c.defaultOptions, i.$eval(c.kOptions || c.options)),
                (y = e(r)[d]) ? (w = y.widget.prototype.options,
                k = y.widget.prototype.events,
                e.each(c, function(e, t) {
                    var n, r, a, s;
                    "source" !== e && "kDataSource" !== e && "kScopeField" !== e && (n = "data" + e.charAt(0).toUpperCase() + e.slice(1),
                    0 === e.indexOf("on") && (r = e.replace(/^on./, function(e) {
                        return e.charAt(2).toLowerCase()
                    }),
                    k.indexOf(r) > -1 && (_[r] = t)),
                    w.hasOwnProperty(n) ? o(i, _, n, t) : w.hasOwnProperty(e) && !M[e] ? o(i, _, e, t) : P[e] || (a = e.match(/^k(On)?([A-Z].*)/),
                    a && (s = a[2].charAt(0).toLowerCase() + a[2].slice(1),
                    a[1] && "kOnLabel" != e ? _[s] = t : ("kOnLabel" == e && (s = "onLabel"),
                    o(i, _, s, t)))))
                }),
                C = c.kDataSource || c.source,
                C && (_.dataSource = A(i, r, v, C)),
                _.$angular = [i],
                r.is("select") && !function(t) {
                    if (t.length > 0) {
                        var n = e(t[0]);
                        !/\S/.test(n.text()) && /^\?/.test(n.val()) && n.remove()
                    }
                }(r[0].options),
                S = y.call(r, D = _).data(d),
                l(S, i, c, d, m),
                i.$emit("kendoWidgetCreated", S),
                T = f(i, S),
                c.kRebind && g(S, i, r, n, c.kRebind, T, c),
                c.kNgDisabled && (E = c.kNgDisabled,
                I = i.$eval(E),
                I && S.enable(!I),
                a(S, i, r, E)),
                c.kNgReadonly && (B = c.kNgReadonly,
                z = i.$eval(B),
                z && S.readonly(z),
                s(S, i, r, B)),
                c.kNgModel && h(S, i, c.kNgModel),
                b && u(S, i, r, b, x),
                S && p(S, r),
                S) : (window.console.error("Could not find: " + d),
                null )
            }
            var y, w, b, x, k, S;
            if (!(r instanceof jQuery))
                throw Error("The Kendo UI directives require jQuery to be available before AngularJS. Please include jquery before angular in the document.");
            return y = c.kNgDelay,
            w = i.$eval(y),
            v = v || [],
            b = v[0],
            x = v[1],
            y && !w ? (k = i.$root || i,
            S = function() {
                var e = i.$watch(y, function(t, n) {
                    t !== n && (e(),
                    r.removeAttr(c.$attr.kNgDelay),
                    y = null ,
                    C(_))
                })
            }
            ,
            /^\$(digest|apply)$/.test(k.$$phase) ? S() : i.$apply(S),
            n) : _()
        }
        function a(e, t, i, o) {
            return kendo.ui.PanelBar && e instanceof kendo.ui.PanelBar || kendo.ui.Menu && e instanceof kendo.ui.Menu ? (T.warn("k-ng-disabled specified on a widget that does not have the enable() method: " + e.options.name),
            n) : (t.$apply(function() {
                t.$watch(o, function(t, n) {
                    t != n && e.enable(!t)
                })
            }),
            n)
        }
        function s(e, t, i, o) {
            return "function" != typeof e.readonly ? (T.warn("k-ng-readonly specified on a widget that does not have the readonly() method: " + e.options.name),
            n) : (t.$apply(function() {
                t.$watch(o, function(t, n) {
                    t != n && e.readonly(t)
                })
            }),
            n)
        }
        function l(e, t, n, i, o) {
            if (n[o]) {
                var r = k(n[o]).assign;
                if (!r)
                    throw Error(o + " attribute used but expression in it is not assignable: " + n[i]);
                r(t, e)
            }
        }
        function c(e) {
            return /checkbox|radio/i.test(e.attr("type")) ? e.prop("checked") : e.val()
        }
        function d(e) {
            return E.test(e[0].tagName)
        }
        function u(e, t, i, o, r) {
            var a, s, l, u;
            e.value && (a = d(i) ? function() {
                return c(i)
            }
             : function() {
                return e.value()
            }
            ,
            o.$render = function() {
                var t = o.$viewValue;
                t === n && (t = o.$modelValue),
                setTimeout(function() {
                    e && e.value(t)
                }, 0)
            }
            ,
            s = !1,
            d(i) && i.on("change", function() {
                s = !0
            }),
            l = function(e) {
                return function() {
                    var n;
                    s || (s = !1,
                    e && r && (n = r.$pristine),
                    o.$setViewValue(a()),
                    e && (o.$setPristine(),
                    n && r.$setPristine()),
                    _(t))
                }
            }
            ,
            e.first("change", l(!1)),
            e.first("dataBound", l(!0)),
            u = a(),
            u != o.$viewValue && (o.$isEmpty(o.$viewValue) ? null  != u && "" !== u && u != o.$viewValue && o.$setViewValue(u) : e.value(o.$viewValue)),
            o.$setPristine())
        }
        function h(e, t, i) {
            var o, r, a;
            return "function" != typeof e.value ? (T.warn("k-ng-model specified on a widget that does not have the value() method: " + e.options.name),
            n) : (o = k(i),
            r = o.assign,
            a = !1,
            e.$angular_setLogicValue(o(t)),
            t.$apply(function() {
                var o = function(t, i) {
                    t === n && (t = null ),
                    a || t !== i && e.$angular_setLogicValue(t)
                }
                ;
                kendo.ui.MultiSelect && e instanceof kendo.ui.MultiSelect ? t.$watchCollection(i, o) : t.$watch(i, o)
            }),
            e.first("change", function() {
                a = !0,
                t.$apply(function() {
                    r(t, e.$angular_getLogicValue())
                }),
                a = !1
            }),
            n)
        }
        function f(e, t) {
            var n = e.$on("$destroy", function() {
                n(),
                t && (t.element && (t = v(t.element),
                t && t.destroy()),
                t = null )
            });
            return n
        }
        function p(t, n) {
            function i() {
                a.disconnect()
            }
            function o() {
                a.observe(e(n)[0], {
                    attributes: !0
                })
            }
            var r, a;
            window.MutationObserver && t.wrapper && (r = [].slice.call(e(n)[0].classList),
            a = new MutationObserver(function(n) {
                i(),
                t && (n.forEach(function(n) {
                    var i, o = e(t.wrapper)[0];
                    switch (n.attributeName) {
                    case "class":
                        i = [].slice.call(n.target.classList),
                        i.forEach(function(e) {
                            r.indexOf(e) < 0 && (o.classList.add(e),
                            kendo.ui.ComboBox && t instanceof kendo.ui.ComboBox && t.input[0].classList.add(e))
                        }),
                        r.forEach(function(e) {
                            i.indexOf(e) < 0 && (o.classList.remove(e),
                            kendo.ui.ComboBox && t instanceof kendo.ui.ComboBox && t.input[0].classList.remove(e))
                        }),
                        r = i;
                        break;
                    case "disabled":
                        "function" == typeof t.enable && t.enable(!e(n.target).attr("disabled"));
                        break;
                    case "readonly":
                        "function" == typeof t.readonly && t.readonly(!!e(n.target).attr("readonly"))
                    }
                }),
                o())
            }
            ),
            o(),
            t.first("destroy", i))
        }
        function g(t, n, i, o, r, a, s) {
            var l = n.$watch(r, function(r, c) {
                var d, u, h, f;
                r !== c && (l(),
                d = F[t.options.name],
                d && d.forEach(function(t) {
                    var i = n.$eval(s["k" + t]);
                    i && o.append(e(i).attr(kendo.toHyphens("k" + t), ""))
                }),
                u = e(t.wrapper)[0],
                h = e(t.element)[0],
                f = i.injector().get("$compile"),
                t.destroy(),
                a && a(),
                t = null ,
                u && h && (u.parentNode.replaceChild(h, u),
                e(i).replaceWith(o)),
                f(o)(n))
            }, !0);
            _(n)
        }
        function m(e, n) {
            function i(e, t) {
                b.directive(e, ["directiveFactory", function(n) {
                    return n.create(t, e)
                }
                ])
            }
            var o, r, a, s, l = n ? "Mobile" : "";
            l += e.fn.options.name,
            o = l,
            r = "kendo" + l.charAt(0) + l.substr(1).toLowerCase(),
            l = "kendo" + l,
            a = l.replace(/([A-Z])/g, "-$1"),
            -1 == B.indexOf(l.replace("kendo", "")) && (s = l === r ? [l] : [l, r],
            t.forEach(s, function(e) {
                b.directive(e, function() {
                    return {
                        restrict: "E",
                        replace: !0,
                        template: function(e, t) {
                            var n = I[o] || "div"
                              , i = t.kScopeField;
                            return "<" + n + " " + a + (i ? '="' + i + '"' : "") + ">" + e.html() + "</" + n + ">"
                        }
                    }
                })
            })),
            z.indexOf(l.replace("kendo", "")) > -1 || (i(l, l),
            r != l && i(r, l))
        }
        function v(t) {
            return t = e(t),
            kendo.widgetInstance(t, kendo.ui) || kendo.widgetInstance(t, kendo.mobile.ui) || kendo.widgetInstance(t, kendo.dataviz.ui)
        }
        function _(e, t) {
            var n = e.$root || e
              , i = /^\$(digest|apply)$/.test(n.$$phase);
            t ? i ? t() : n.$apply(t) : i || n.$digest()
        }
        function y(t, n) {
            t.$destroy(),
            n && e(n).removeData("$scope").removeData("$$kendoScope").removeData("$isolateScope").removeData("$isolateScopeNoTemplate").removeClass("ng-scope")
        }
        function w(n, i, o) {
            var r, a, s;
            if (e.isArray(n))
                return t.forEach(n, function(e) {
                    w(e, i, o)
                });
            if ("string" == typeof n) {
                for (r = n.split("."),
                a = kendo; a && r.length > 0; )
                    a = a[r.shift()];
                if (!a)
                    return L.push([n, i, o]),
                    !1;
                n = a.prototype
            }
            return s = n[i],
            n[i] = function() {
                var e = this
                  , t = arguments;
                return o.apply({
                    self: e,
                    next: function() {
                        return s.apply(e, arguments.length > 0 ? arguments : t)
                    }
                }, t)
            }
            ,
            !0
        }
        var b, x, k, C, S, T, D, A, P, M, E, I, B, z, L, F;
        t && (b = t.module("kendo.directives", []),
        x = t.injector(["ng"]),
        k = x.get("$parse"),
        C = x.get("$timeout"),
        T = x.get("$log"),
        A = function() {
            var e = {
                TreeList: "TreeListDataSource",
                TreeView: "HierarchicalDataSource",
                Scheduler: "SchedulerDataSource",
                PanelBar: "$PLAIN",
                Menu: "$PLAIN",
                ContextMenu: "$PLAIN"
            }
              , t = function(e, t) {
                return "$PLAIN" == t ? e : kendo.data[t].create(e)
            }
            ;
            return function(n, i, o, r) {
                var a = e[o] || "DataSource"
                  , s = t(n.$eval(r), a);
                return n.$watch(r, function(e, n) {
                    var o, r;
                    e !== n && (o = t(e, a),
                    r = v(i),
                    r && "function" == typeof r.setDataSource && r.setDataSource(o))
                }),
                s
            }
        }(),
        P = {
            kDataSource: !0,
            kOptions: !0,
            kRebind: !0,
            kNgModel: !0,
            kNgDelay: !0
        },
        M = {
            name: !0,
            title: !0,
            style: !0
        },
        E = /^(input|select|textarea)$/i,
        b.factory("directiveFactory", ["$compile", function(t) {
            var n, i = 0, o = !1;
            return S = t,
            n = function(t, n) {
                return {
                    restrict: "AC",
                    require: ["?ngModel", "^?form"],
                    scope: !1,
                    controller: ["$scope", "$attrs", "$element", function(e, t) {
                        this.template = function(e, n) {
                            t[e] = kendo.stringify(n)
                        }
                    }
                    ],
                    link: function(a, s, l, c) {
                        var d = e(s)
                          , u = t.replace(/([A-Z])/g, "-$1")
                          , h = "hidden" !== d.css("visibility");
                        d.attr(u, d.attr("data-" + u)),
                        d[0].removeAttribute("data-" + u),
                        h && d.css("visibility", "hidden"),
                        ++i,
                        C(function() {
                            h && d.css("visibility", "");
                            var u = r(a, s, l, t, n, c);
                            u && (--i,
                            0 === i && (a.$emit("kendoRendered"),
                            o || (o = !0,
                            e("form").each(function() {
                                var t = e(this).controller("form");
                                t && t.$setPristine()
                            }))))
                        })
                    }
                }
            }
            ,
            {
                create: n
            }
        }
        ]),
        I = {
            Editor: "textarea",
            NumericTextBox: "input",
            DatePicker: "input",
            DateTimePicker: "input",
            TimePicker: "input",
            AutoComplete: "input",
            ColorPicker: "input",
            MaskedTextBox: "input",
            MultiSelect: "input",
            Upload: "input",
            Validator: "form",
            Button: "button",
            MobileButton: "a",
            MobileBackButton: "a",
            MobileDetailButton: "a",
            ListView: "ul",
            MobileListView: "ul",
            TreeView: "ul",
            Menu: "ul",
            ContextMenu: "ul",
            ActionSheet: "ul"
        },
        B = ["MobileView", "MobileLayout", "MobileSplitView", "MobilePane", "MobileModalView"],
        z = ["MobileApplication", "MobileView", "MobileModalView", "MobileLayout", "MobileActionSheet", "MobileDrawer", "MobileSplitView", "MobilePane", "MobileScrollView", "MobilePopOver"],
        t.forEach(["MobileNavBar", "MobileButton", "MobileBackButton", "MobileDetailButton", "MobileTabStrip", "MobileScrollView", "MobileScroller"], function(e) {
            z.push(e),
            e = "kendo" + e,
            b.directive(e, function() {
                return {
                    restrict: "A",
                    link: function(t, n, i) {
                        r(t, n, i, e, e)
                    }
                }
            })
        }),
        function() {
            function e(e) {
                return function(n) {
                    t.forEach(n, function(t) {
                        t.fn && t.fn.options && t.fn.options.name && /^[A-Z]/.test(t.fn.options.name) && m(t, e)
                    })
                }
            }
            t.forEach([kendo.ui, kendo.dataviz && kendo.dataviz.ui], e(!1)),
            t.forEach([kendo.mobile && kendo.mobile.ui], e(!0))
        }(),
        L = [],
        w(kendo.ui, "plugin", function(t, n, i) {
            this.next(),
            L = e.grep(L, function(e) {
                return !w.apply(null , e)
            }),
            m(t, "Mobile" == i)
        }),
        w(["ui.Widget", "mobile.ui.Widget"], "angular", function(o, r) {
            var a, s = this.self;
            return "init" == o ? (!r && D && (r = D),
            D = null ,
            r && r.$angular && (s.$angular_scope = r.$angular[0],
            s.$angular_init(s.element, r)),
            n) : (a = s.$angular_scope,
            a && i(function() {
                var i, l, c = r(), d = c.elements, u = c.data;
                if (d.length > 0)
                    switch (o) {
                    case "cleanup":
                        t.forEach(d, function(t) {
                            var n = e(t).data("$$kendoScope");
                            n && n !== a && n.$$kendoScope && y(n, t)
                        });
                        break;
                    case "compile":
                        i = s.element.injector(),
                        l = i ? i.get("$compile") : S,
                        t.forEach(d, function(t, i) {
                            var o, r;
                            c.scopeFrom ? o = c.scopeFrom : (r = u && u[i],
                            r !== n ? (o = e.extend(a.$new(), r),
                            o.$$kendoScope = !0) : o = a),
                            e(t).data("$$kendoScope", o),
                            l(t)(o)
                        }),
                        _(a)
                    }
            }),
            n)
        }),
        w("ui.Widget", "$angular_getLogicValue", function() {
            return this.self.value()
        }),
        w("ui.Widget", "$angular_setLogicValue", function(e) {
            this.self.value(e)
        }),
        w("ui.Select", "$angular_getLogicValue", function() {
            var e = this.self.dataItem();
            return e ? this.self.options.valuePrimitive ? e[this.self.options.dataValueField] : e.toJSON() : null 
        }),
        w("ui.Select", "$angular_setLogicValue", function(e) {
            var t = this.self
              , n = t.options
              , i = n.dataValueField;
            i && !n.valuePrimitive && (e = null  != e ? e[n.dataValueField || n.dataTextField] : null ),
            t.value(e)
        }),
        w("ui.MultiSelect", "$angular_getLogicValue", function() {
            var t = this.self.dataItems().slice(0)
              , n = this.self.options.dataValueField;
            return n && this.self.options.valuePrimitive && (t = e.map(t, function(e) {
                return e[n]
            })),
            t
        }),
        w("ui.MultiSelect", "$angular_setLogicValue", function(t) {
            null  == t && (t = []);
            var n = this.self
              , i = n.options.dataValueField;
            i && !n.options.valuePrimitive && (t = e.map(t, function(e) {
                return e[i]
            })),
            n.value(t)
        }),
        w("ui.AutoComplete", "$angular_getLogicValue", function() {
            var e, t, n, i, o, r = this.self.options, a = this.self.value().split(r.separator), s = r.valuePrimitive, l = this.self.dataSource.data(), c = [];
            for (e = 0,
            t = l.length; t > e; e++)
                for (n = l[e],
                i = r.dataTextField ? n[r.dataTextField] : n,
                o = 0; a.length > o; o++)
                    if (i === a[o]) {
                        c.push(s ? i : n.toJSON());
                        break
                    }
            return c
        }),
        w("ui.AutoComplete", "$angular_setLogicValue", function(t) {
            null  == t && (t = []);
            var n = this.self
              , i = n.options.dataTextField;
            i && !n.options.valuePrimitive && (t = e.map(t, function(e) {
                return e[i]
            })),
            n.value(t)
        }),
        w("ui.Widget", "$angular_init", function(t, n) {
            var i, o, r, a, s = this.self;
            if (n && !e.isArray(n))
                for (i = s.$angular_scope,
                o = s.events.length; --o >= 0; )
                    r = s.events[o],
                    a = n[r],
                    a && "string" == typeof a && (n[r] = s.$angular_makeEventHandler(r, i, a))
        }),
        w("ui.Widget", "$angular_makeEventHandler", function(e, t, n) {
            return n = k(n),
            function(e) {
                _(t, function() {
                    n(t, {
                        kendoEvent: e
                    })
                })
            }
        }),
        w(["ui.Grid", "ui.ListView", "ui.TreeView"], "$angular_makeEventHandler", function(e, n, i) {
            return "change" != e ? this.next() : (i = k(i),
            function(e) {
                var o, r, a, s, l, c, d, u, h, f = e.sender, p = f.options, g = {
                    kendoEvent: e
                };
                for (t.isString(p.selectable) && (o = -1 !== p.selectable.indexOf("cell"),
                r = -1 !== p.selectable.indexOf("multiple")),
                a = g.selected = this.select(),
                s = g.data = [],
                l = g.columns = [],
                d = 0; a.length > d; d++)
                    u = o ? a[d].parentNode : a[d],
                    h = f.dataItem(u),
                    o ? (t.element.inArray(h, s) < 0 && s.push(h),
                    c = t.element(a[d]).index(),
                    t.element.inArray(c, l) < 0 && l.push(c)) : s.push(h);
                r || (g.dataItem = g.data = s[0],
                g.selected = a[0]),
                _(n, function() {
                    i(n, g)
                })
            }
            )
        }),
        w("ui.Grid", "$angular_init", function(i, o) {
            if (this.next(),
            o.columns) {
                var r = e.extend({}, kendo.Template, o.templateSettings);
                t.forEach(o.columns, function(e) {
                    !e.field || e.template || e.format || e.values || e.encoded !== n && !e.encoded || (e.template = "<span ng-bind='" + kendo.expr(e.field, "dataItem") + "'>#: " + kendo.expr(e.field, r.paramName) + "#</span>")
                })
            }
        }),
        w("mobile.ui.ButtonGroup", "value", function(e) {
            var t = this.self;
            return null  != e && (t.select(t.element.children("li.km-button").eq(e)),
            t.trigger("change"),
            t.trigger("select", {
                index: t.selectedIndex
            })),
            t.selectedIndex
        }),
        w("mobile.ui.ButtonGroup", "_select", function() {
            this.next(),
            this.self.trigger("change")
        }),
        b.directive("kendoMobileApplication", function() {
            return {
                terminal: !0,
                link: function(e, t, n) {
                    r(e, t, n, "kendoMobileApplication", "kendoMobileApplication")
                }
            }
        }).directive("kendoMobileView", function() {
            return {
                scope: !0,
                link: {
                    pre: function(e, t, n) {
                        n.defaultOptions = e.viewOptions,
                        n._instance = r(e, t, n, "kendoMobileView", "kendoMobileView")
                    },
                    post: function(e, t, n) {
                        n._instance._layout(),
                        n._instance._scroller()
                    }
                }
            }
        }).directive("kendoMobileDrawer", function() {
            return {
                scope: !0,
                link: {
                    pre: function(e, t, n) {
                        n.defaultOptions = e.viewOptions,
                        n._instance = r(e, t, n, "kendoMobileDrawer", "kendoMobileDrawer")
                    },
                    post: function(e, t, n) {
                        n._instance._layout(),
                        n._instance._scroller()
                    }
                }
            }
        }).directive("kendoMobileModalView", function() {
            return {
                scope: !0,
                link: {
                    pre: function(e, t, n) {
                        n.defaultOptions = e.viewOptions,
                        n._instance = r(e, t, n, "kendoMobileModalView", "kendoMobileModalView")
                    },
                    post: function(e, t, n) {
                        n._instance._layout(),
                        n._instance._scroller()
                    }
                }
            }
        }).directive("kendoMobileSplitView", function() {
            return {
                terminal: !0,
                link: {
                    pre: function(e, t, n) {
                        n.defaultOptions = e.viewOptions,
                        n._instance = r(e, t, n, "kendoMobileSplitView", "kendoMobileSplitView")
                    },
                    post: function(e, t, n) {
                        n._instance._layout()
                    }
                }
            }
        }).directive("kendoMobilePane", function() {
            return {
                terminal: !0,
                link: {
                    pre: function(e, t, n) {
                        n.defaultOptions = e.viewOptions,
                        r(e, t, n, "kendoMobilePane", "kendoMobilePane")
                    }
                }
            }
        }).directive("kendoMobileLayout", function() {
            return {
                link: {
                    pre: function(e, t, n) {
                        r(e, t, n, "kendoMobileLayout", "kendoMobileLayout")
                    }
                }
            }
        }).directive("kendoMobileActionSheet", function() {
            return {
                restrict: "A",
                link: function(t, n, i) {
                    n.find("a[k-action]").each(function() {
                        e(this).attr("data-" + kendo.ns + "action", e(this).attr("k-action"))
                    }),
                    r(t, n, i, "kendoMobileActionSheet", "kendoMobileActionSheet")
                }
            }
        }).directive("kendoMobilePopOver", function() {
            return {
                terminal: !0,
                link: {
                    pre: function(e, t, n) {
                        n.defaultOptions = e.viewOptions,
                        r(e, t, n, "kendoMobilePopOver", "kendoMobilePopOver")
                    }
                }
            }
        }).directive("kendoViewTitle", function() {
            return {
                restrict: "E",
                replace: !0,
                template: function(e) {
                    return "<span data-" + kendo.ns + "role='view-title'>" + e.html() + "</span>"
                }
            }
        }).directive("kendoMobileHeader", function() {
            return {
                restrict: "E",
                link: function(e, t) {
                    t.addClass("km-header").attr("data-role", "header")
                }
            }
        }).directive("kendoMobileFooter", function() {
            return {
                restrict: "E",
                link: function(e, t) {
                    t.addClass("km-footer").attr("data-role", "footer")
                }
            }
        }).directive("kendoMobileScrollViewPage", function() {
            return {
                restrict: "E",
                replace: !0,
                template: function(e) {
                    return "<div data-" + kendo.ns + "role='page'>" + e.html() + "</div>"
                }
            }
        }),
        t.forEach(["align", "icon", "rel", "transition", "actionsheetContext"], function(e) {
            var t = "k" + e.slice(0, 1).toUpperCase() + e.slice(1);
            b.directive(t, function() {
                return {
                    restrict: "A",
                    priority: 2,
                    link: function(n, i, o) {
                        i.attr(kendo.attr(kendo.toHyphens(e)), n.$eval(o[t]))
                    }
                }
            })
        }),
        F = {
            TreeMap: ["Template"],
            MobileListView: ["HeaderTemplate", "Template"],
            MobileScrollView: ["EmptyTemplate", "Template"],
            Grid: ["AltRowTemplate", "DetailTemplate", "RowTemplate"],
            ListView: ["EditTemplate", "Template", "AltTemplate"],
            Pager: ["SelectTemplate", "LinkTemplate"],
            PivotGrid: ["ColumnHeaderTemplate", "DataCellTemplate", "RowHeaderTemplate"],
            Scheduler: ["AllDayEventTemplate", "DateHeaderTemplate", "EventTemplate", "MajorTimeHeaderTemplate", "MinorTimeHeaderTemplate"],
            TreeView: ["Template"],
            Validator: ["ErrorTemplate"]
        },
        function() {
            var e = {};
            t.forEach(F, function(n, i) {
                t.forEach(n, function(t) {
                    e[t] || (e[t] = []),
                    e[t].push("?^^kendo" + i)
                })
            }),
            t.forEach(e, function(e, t) {
                var n = "k" + t
                  , i = kendo.toHyphens(n);
                b.directive(n, function() {
                    return {
                        restrict: "A",
                        require: e,
                        terminal: !0,
                        compile: function(t, o) {
                            if ("" === o[n]) {
                                t.removeAttr(i);
                                var r = t[0].outerHTML;
                                return function(o, a, s, l) {
                                    for (var c; !c && l.length; )
                                        c = l.shift();
                                    c ? (c.template(n, r),
                                    t.remove()) : T.warn(i + " without a matching parent widget found. It can be one of the following: " + e.join(", "))
                                }
                            }
                        }
                    }
                })
            })
        }())
    }(window.kendo.jQuery, window.angular);
    return window.kendo
}, typeof define == "function" && define.amd ? define : function(_, f) {
    f()
}
);
