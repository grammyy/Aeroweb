function AddEvent(html_element, event_name, event_function)
{
	if(html_element.attachEvent) html_element.attachEvent("on" + event_name, function() {event_function.call(html_element);});
	else if(html_element.addEventListener) html_element.addEventListener(event_name, event_function, false);
}
var book = function(err){
    switch(err.toString().split(" ")[0]){
        case "SecurityError:":
            exec("inspect",["DOM SecurityError: You may be offline! Browsers by default block remote IFrame editing."])
            break;
    }
}
AddEvent(window,'keydown',function(e){
    exec("inspect",[e.ctrlKey+" "+e.keyCode])
    switch(e.keyCode){
        case e.ctrlKey && 70:
            e.preventDefault();
            exec("resize",size+=1); if(size==3){exec("resize",0)}
            break; 
        case e.ctrlKey && 88:
            e.preventDefault();
            execute.click()
            break;
        case e.ctrlKey && 81:
            e.preventDefault();
            exec("inspect",["Launch window keybind not finished : ERR <<"])
            break; 
        case e.shiftKey && 49:
            e.preventDefault();
            exec("resize",0)
            break; 
        case e.shiftKey && 50:
            e.preventDefault();
            exec("resize",1)
            break; 
        case e.shiftKey && 51:
            e.preventDefault();
            exec("resize",2)
            break; 
    }
});
//var cookie = function(func,payload){
//    switch(func){
//
//    }
//}

//temp storing function to just get the website going, custom function coming soon
! function(e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var t = window.Cookies,
            o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t, o
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) n[o] = t[o]
        }
        return n
    }

    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function t(o) {
        function r() {}

        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof(i = e({
                    path: "/"
                }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {}
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }

        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("="),
                        u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u), t) try {
                            u = JSON.parse(u)
                        } catch (e) {}
                        if (r[a] = u, e === a) break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = i, r.get = function(e) {
            return c(e, !1)
        }, r.getJSON = function(e) {
            return c(e, !0)
        }, r.remove = function(n, t) {
            i(n, "", e(t, {
                expires: -1
            }))
        }, r.defaults = {}, r.withConverter = t, r
    }(function() {})
});