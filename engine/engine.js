window.onload = function () { 
    console.log("Aeroweb initized; https://github.com/BartenderWinery");
    console.log("Css classes are unoptimized");
    console.error("AeroRender is a sourced and edited project from Google's modelviewer. Use of this engine will be discontinued upon the creation of my own engine.")};
// output (628640b)
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t()
}(0, function() {
    "use strict";
    const e = null != navigator.xr && null != self.XRSession && null != self.XRDevice && null != self.XRDevice.prototype.supportsSession,
        t = e && self.XRSession.prototype.requestHitTest,
        i = null != document.documentElement && null != document.documentElement.requestFullscreen,
        n = null != self.ResizeObserver,
        r = t && i,
        a = ((() => {
            const e = navigator.userAgent || navigator.vendor || self.opera;
            let t = !1;
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
        })(), /iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream),
        o = (() => {
            const e = document.createElement("a");
            return Boolean(e.relList && e.relList.supports && e.relList.supports("ar"))
        })(),
        s = e => null !== e,
        c = e => e ? "" : null,
        h = (e, t) => t !== e && (t == t || e == e),
        l = {
            attribute: !0,
            type: String,
            reflect: !1,
            hasChanged: h
        },
        u = new Promise(e => e(!0)),
        p = 1,
        d = 4,
        f = 8;
    class m extends HTMLElement {
        constructor() {
            super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = u, this._changedProperties = new Map, this._reflectingProperties = void 0, this.initialize()
        }
        static get observedAttributes() {
            this._finalize();
            const e = [];
            for (const [t, i] of this._classProperties) {
                const n = this._attributeNameForProperty(t, i);
                void 0 !== n && (this._attributeToPropertyMap.set(n, t), e.push(n))
            }
            return e
        }
        static createProperty(e, t = l) {
            if (!this.hasOwnProperty("_classProperties")) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e))
            }
            if (this._classProperties.set(e, t), this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`;
            Object.defineProperty(this.prototype, e, {
                get() {
                    return this[i]
                },
                set(n) {
                    const r = this[e];
                    this[i] = n, this._requestPropertyUpdate(e, r, t)
                },
                configurable: !0,
                enumerable: !0
            })
        }
        static _finalize() {
            if (this.hasOwnProperty("_finalized") && this._finalized) return;
            const e = Object.getPrototypeOf(this);
            "function" == typeof e._finalize && e._finalize(), this._finalized = !0, this._attributeToPropertyMap = new Map;
            const t = this.properties,
                i = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
            for (const e of i) this.createProperty(e, t[e])
        }
        static _attributeNameForProperty(e, t) {
            const i = void 0 !== t && t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = h) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t && t.type;
            if (void 0 === i) return e;
            const n = i === Boolean ? s : "function" == typeof i ? i : i.fromAttribute;
            return n ? n(e) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t || void 0 === t.reflect) return;
            return (t.type === Boolean ? c : t.type && t.type.toAttribute || String)(e)
        }
        initialize() {
            this.renderRoot = this.createRenderRoot(), this._saveInstanceProperties()
        }
        _saveInstanceProperties() {
            for (const [e] of this.constructor._classProperties)
                if (this.hasOwnProperty(e)) {
                    const t = this[e];
                    delete this[e], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(e, t)
                }
        }
        _applyInstanceProperties() {
            for (const [e, t] of this._instanceProperties) this[e] = t;
            this._instanceProperties = void 0
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            this._updateState & p ? void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this) : this.requestUpdate()
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = l) {
            const n = this.constructor,
                r = n._propertyValueToAttribute(t, i);
            if (void 0 !== r) {
                const t = n._attributeNameForProperty(e, i);
                void 0 !== t && (this._updateState = this._updateState | f, null === r ? this.removeAttribute(t) : this.setAttribute(t, r), this._updateState = this._updateState & ~f)
            }
        }
        _attributeToProperty(e, t) {
            if (!(this._updateState & f)) {
                const i = this.constructor,
                    n = i._attributeToPropertyMap.get(e);
                if (void 0 !== n) {
                    const e = i._classProperties.get(n);
                    this[n] = i._propertyValueFromAttribute(t, e)
                }
            }
        }
        requestUpdate(e, t) {
            if (void 0 !== e) {
                const i = this.constructor._classProperties.get(e) || l;
                return this._requestPropertyUpdate(e, t, i)
            }
            return this._invalidate()
        }
        _requestPropertyUpdate(e, t, i) {
            return this.constructor._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 === i.reflect && (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i)), this._invalidate()) : this.updateComplete
        }
        async _invalidate() {
            if (!this._hasRequestedUpdate) {
                let e;
                this._updateState = this._updateState | d;
                const t = this._updatePromise;
                this._updatePromise = new Promise(t => e = t), await t, this._validate(), e(!this._hasRequestedUpdate)
            }
            return this.updateComplete
        }
        get _hasRequestedUpdate() {
            return this._updateState & d
        }
        _validate() {
            if (this._instanceProperties && this._applyInstanceProperties(), this.shouldUpdate(this._changedProperties)) {
                const e = this._changedProperties;
                this.update(e), this._markUpdated(), this._updateState & p || (this._updateState = this._updateState | p, this.firstUpdated(e)), this.updated(e)
            } else this._markUpdated()
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = this._updateState & ~d
        }
        get updateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            if (void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0) {
                for (const [e, t] of this._reflectingProperties) this._propertyToAttribute(e, this[e], t);
                this._reflectingProperties = void 0
            }
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    m._attributeToPropertyMap = new Map, m._finalized = !0, m._classProperties = new Map, m.properties = {};
    const g = document.createElement("template");
    g.innerHTML = '\n  <style>\n    :host {\n      display: block;\n      contain: strict;\n      width: 300px;\n      height: 150px;\n    }\n    .container {\n      position: relative;\n    }\n    .poster {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      background-size: cover;\n      opacity: 0;\n      transition: opacity 0.3s;\n    }\n\n    .poster.show {\n      opacity: 1;\n    }\n\n    .poster:not(.show) {\n      pointer-events: none;\n    }\n\n    .click-to-view {\n      display: none;\n      position: absolute;\n      z-index: 9999;\n      width: 100%;\n      margin: 0 auto;\n      bottom: 20px;\n      background-color: rgba(0, 0, 0, 0.2);\n      color: white;\n      font-size: 120%;\n    }\n    .click-to-view.show {\n      display: block;\n    }\n\n    a.enter-ar {\n      width: 40px;\n      height: 40px;\n      position: absolute;\n      display: block;\n      right: 10px;\n      top: 10px;\n      display: none;\n    }\n    a.enter-ar svg {\n      position: absolute;\n      top: calc(50% - 12px);\n      left: calc(50% - 12px);\n    }\n    a.enter-ar .disc {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      opacity: 0.6;\n      background-color: #fff;\n      box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.2);\n    }\n    canvas {\n      width: 100%;\n      height: 100%;\n      display: none;\n    }\n    canvas.show {\n      display: block;\n    }\n  </style>\n  <div class="container">\n    <a tabindex="2" class="enter-ar" href="#" aria-label="View this 3D model in augmented reality">\n      <div class="disc"></div>\n      \n<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<rect fill="none" width="24" height="24"/>\n<g>\n\t<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3\n\t\tl5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62\n\t\tl4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>\n\t<path d="M20.05,20.05H17v1.9h3.45c0.83,0,1.5-0.67,1.5-1.5V17h-1.9V20.05z"/>\n\t<path d="M3.95,17h-1.9v3.45c0,0.83,0.67,1.5,1.5,1.5H7v-1.9H3.95V17z"/>\n\t<path d="M3.95,3.95H7v-1.9H3.55c-0.83,0-1.5,0.67-1.5,1.5V7h1.9V3.95z"/>\n\t<path d="M17,2.05v1.9h3.05V7h1.9V3.55c0-0.83-0.67-1.5-1.5-1.5H17z"/>\n</g>\n</svg>\n\n    </a>\n    <div class="poster"></div>\n    <canvas tabindex="1" aria-label="A depiction of a 3D model"></canvas>\n  </div>\n  <slot></slot>\n';
    const v = e => {
        const t = document.createElement("template");
        return t.innerHTML = g.innerHTML, window.ShadyCSS && window.ShadyCSS.prepareTemplate(t, e), t
    };

    function y() {}
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }), void 0 === Math.sign && (Math.sign = function(e) {
        return e < 0 ? -1 : e > 0 ? 1 : +e
    }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && (Object.assign = function(e) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (null != n)
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }), Object.assign(y.prototype, {
        addEventListener: function(e, t) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t)
        },
        hasEventListener: function(e, t) {
            if (void 0 === this._listeners) return !1;
            var i = this._listeners;
            return void 0 !== i[e] && -1 !== i[e].indexOf(t)
        },
        removeEventListener: function(e, t) {
            if (void 0 !== this._listeners) {
                var i = this._listeners[e];
                if (void 0 !== i) {
                    var n = i.indexOf(t); - 1 !== n && i.splice(n, 1)
                }
            }
        },
        dispatchEvent: function(e) {
            if (void 0 !== this._listeners) {
                var t = this._listeners[e.type];
                if (void 0 !== t) {
                    e.target = this;
                    for (var i = t.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, e)
                }
            }
        }
    });
    var x, b, w, _, M, S, E, T, A, L, P, R, C = "1.1",
        O = 0,
        I = 1,
        D = 2,
        z = 0,
        N = 1,
        U = 2,
        B = 1,
        F = 2,
        G = 0,
        k = 1,
        H = 2,
        j = 0,
        V = 1,
        W = 2,
        q = 0,
        X = 1,
        Y = 2,
        Z = 3,
        J = 4,
        K = 5,
        Q = 100,
        $ = 101,
        ee = 102,
        te = 103,
        ie = 104,
        ne = 200,
        re = 201,
        ae = 202,
        oe = 203,
        se = 204,
        ce = 205,
        he = 206,
        le = 207,
        ue = 208,
        pe = 209,
        de = 210,
        fe = 0,
        me = 1,
        ge = 2,
        ve = 3,
        ye = 4,
        xe = 5,
        be = 6,
        we = 7,
        _e = 0,
        Me = 1,
        Se = 2,
        Ee = 0,
        Te = 1,
        Ae = 2,
        Le = 3,
        Pe = 4,
        Re = 5,
        Ce = 301,
        Oe = 302,
        Ie = 303,
        De = 304,
        ze = 305,
        Ne = 306,
        Ue = 307,
        Be = 1e3,
        Fe = 1001,
        Ge = 1002,
        ke = 1003,
        He = 1004,
        je = 1005,
        Ve = 1006,
        We = 1007,
        qe = 1008,
        Xe = 1009,
        Ye = 1010,
        Ze = 1011,
        Je = 1012,
        Ke = 1013,
        Qe = 1014,
        $e = 1015,
        et = 1016,
        tt = 1017,
        it = 1018,
        nt = 1019,
        rt = 1020,
        at = 1021,
        ot = 1022,
        st = 1023,
        ct = 1024,
        ht = 1025,
        lt = 1026,
        ut = 1027,
        pt = 1028,
        dt = 33776,
        ft = 33777,
        mt = 33778,
        gt = 33779,
        vt = 35840,
        yt = 35841,
        xt = 35842,
        bt = 35843,
        wt = 36196,
        _t = 37808,
        Mt = 37809,
        St = 37810,
        Et = 37811,
        Tt = 37812,
        At = 37813,
        Lt = 37814,
        Pt = 37815,
        Rt = 37816,
        Ct = 37817,
        Ot = 37818,
        It = 37819,
        Dt = 37820,
        zt = 37821,
        Nt = 2201,
        Ut = 2400,
        Bt = 0,
        Ft = 1,
        Gt = 2,
        kt = 3e3,
        Ht = 3001,
        jt = 3007,
        Vt = 3002,
        Wt = 3004,
        qt = 3005,
        Xt = 3006,
        Yt = 3200,
        Zt = 3201,
        Jt = 0,
        Kt = 1,
        Qt = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                for (var e = [], t = 0; t < 256; t++) e[t] = (t < 16 ? "0" : "") + t.toString(16);
                return function() {
                    var t = 4294967295 * Math.random() | 0,
                        i = 4294967295 * Math.random() | 0,
                        n = 4294967295 * Math.random() | 0,
                        r = 4294967295 * Math.random() | 0;
                    return (e[255 & t] + e[t >> 8 & 255] + e[t >> 16 & 255] + e[t >> 24 & 255] + "-" + e[255 & i] + e[i >> 8 & 255] + "-" + e[i >> 16 & 15 | 64] + e[i >> 24 & 255] + "-" + e[63 & n | 128] + e[n >> 8 & 255] + "-" + e[n >> 16 & 255] + e[n >> 24 & 255] + e[255 & r] + e[r >> 8 & 255] + e[r >> 16 & 255] + e[r >> 24 & 255]).toUpperCase()
                }
            }(),
            clamp: function(e, t, i) {
                return Math.max(t, Math.min(i, e))
            },
            euclideanModulo: function(e, t) {
                return (e % t + t) % t
            },
            mapLinear: function(e, t, i, n, r) {
                return n + (e - t) * (r - n) / (i - t)
            },
            lerp: function(e, t, i) {
                return (1 - i) * e + i * t
            },
            smoothstep: function(e, t, i) {
                return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * (3 - 2 * e)
            },
            smootherstep: function(e, t, i) {
                return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * e * (e * (6 * e - 15) + 10)
            },
            randInt: function(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            },
            randFloat: function(e, t) {
                return e + Math.random() * (t - e)
            },
            randFloatSpread: function(e) {
                return e * (.5 - Math.random())
            },
            degToRad: function(e) {
                return e * Qt.DEG2RAD
            },
            radToDeg: function(e) {
                return e * Qt.RAD2DEG
            },
            isPowerOfTwo: function(e) {
                return 0 == (e & e - 1) && 0 !== e
            },
            ceilPowerOfTwo: function(e) {
                return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
            },
            floorPowerOfTwo: function(e) {
                return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
            }
        };

    function $t(e, t) {
        this.x = e || 0, this.y = t || 0
    }

    function ei() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function ti(e, t, i, n) {
        this._x = e || 0, this._y = t || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
    }

    function ii(e, t, i) {
        this.x = e || 0, this.y = t || 0, this.z = i || 0
    }

    function ni() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    Object.defineProperties($t.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(e) {
                this.x = e
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(e) {
                this.y = e
            }
        }
    }), Object.assign($t.prototype, {
        isVector2: !0,
        set: function(e, t) {
            return this.x = e, this.y = t, this
        },
        setScalar: function(e) {
            return this.x = e, this.y = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this
        },
        multiply: function(e) {
            return this.x *= e.x, this.y *= e.y, this
        },
        multiplyScalar: function(e) {
            return this.x *= e, this.y *= e, this
        },
        divide: function(e) {
            return this.x /= e.x, this.y /= e.y, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        applyMatrix3: function(e) {
            var t = this.x,
                i = this.y,
                n = e.elements;
            return this.x = n[0] * t + n[3] * i + n[6], this.y = n[1] * t + n[4] * i + n[7], this
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
        },
        clampScalar: (x = new $t, b = new $t, function(e, t) {
            return x.set(e, e), b.set(t, t), this.clamp(x, b)
        }),
        clampLength: function(e, t) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y
        },
        cross: function(e) {
            return this.x * e.y - this.y * e.x
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            var e = Math.atan2(this.y, this.x);
            return e < 0 && (e += 2 * Math.PI), e
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x,
                i = this.y - e.y;
            return t * t + i * i
        },
        manhattanDistanceTo: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        },
        setLength: function(e) {
            return this.normalize().multiplyScalar(e)
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
        },
        fromBufferAttribute: function(e, t, i) {
            return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
        },
        rotateAround: function(e, t) {
            var i = Math.cos(t),
                n = Math.sin(t),
                r = this.x - e.x,
                a = this.y - e.y;
            return this.x = r * i - a * n + e.x, this.y = r * n + a * i + e.y, this
        }
    }), Object.assign(ei.prototype, {
        isMatrix4: !0,
        set: function(e, t, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = e, g[4] = t, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new ei).fromArray(this.elements)
        },
        copy: function(e) {
            var t = this.elements,
                i = e.elements;
            return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this
        },
        copyPosition: function(e) {
            var t = this.elements,
                i = e.elements;
            return t[12] = i[12], t[13] = i[13], t[14] = i[14], this
        },
        extractBasis: function(e, t, i) {
            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function(e, t, i) {
            return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: (L = new ii, function(e) {
            var t = this.elements,
                i = e.elements,
                n = 1 / L.setFromMatrixColumn(e, 0).length(),
                r = 1 / L.setFromMatrixColumn(e, 1).length(),
                a = 1 / L.setFromMatrixColumn(e, 2).length();
            return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }),
        makeRotationFromEuler: function(e) {
            e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var t = this.elements,
                i = e.x,
                n = e.y,
                r = e.z,
                a = Math.cos(i),
                o = Math.sin(i),
                s = Math.cos(n),
                c = Math.sin(n),
                h = Math.cos(r),
                l = Math.sin(r);
            if ("XYZ" === e.order) {
                var u = a * h,
                    p = a * l,
                    d = o * h,
                    f = o * l;
                t[0] = s * h, t[4] = -s * l, t[8] = c, t[1] = p + d * c, t[5] = u - f * c, t[9] = -o * s, t[2] = f - u * c, t[6] = d + p * c, t[10] = a * s
            } else if ("YXZ" === e.order) {
                var m = s * h,
                    g = s * l,
                    v = c * h,
                    y = c * l;
                t[0] = m + y * o, t[4] = v * o - g, t[8] = a * c, t[1] = a * l, t[5] = a * h, t[9] = -o, t[2] = g * o - v, t[6] = y + m * o, t[10] = a * s
            } else if ("ZXY" === e.order) {
                m = s * h, g = s * l, v = c * h, y = c * l;
                t[0] = m - y * o, t[4] = -a * l, t[8] = v + g * o, t[1] = g + v * o, t[5] = a * h, t[9] = y - m * o, t[2] = -a * c, t[6] = o, t[10] = a * s
            } else if ("ZYX" === e.order) {
                u = a * h, p = a * l, d = o * h, f = o * l;
                t[0] = s * h, t[4] = d * c - p, t[8] = u * c + f, t[1] = s * l, t[5] = f * c + u, t[9] = p * c - d, t[2] = -c, t[6] = o * s, t[10] = a * s
            } else if ("YZX" === e.order) {
                var x = a * s,
                    b = a * c,
                    w = o * s,
                    _ = o * c;
                t[0] = s * h, t[4] = _ - x * l, t[8] = w * l + b, t[1] = l, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = b * l + w, t[10] = x - _ * l
            } else if ("XZY" === e.order) {
                x = a * s, b = a * c, w = o * s, _ = o * c;
                t[0] = s * h, t[4] = -l, t[8] = c * h, t[1] = x * l + _, t[5] = a * h, t[9] = b * l - w, t[2] = w * l - b, t[6] = o * h, t[10] = _ * l + x
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        },
        makeRotationFromQuaternion: (T = new ii(0, 0, 0), A = new ii(1, 1, 1), function(e) {
            return this.compose(T, e, A)
        }),
        lookAt: (M = new ii, S = new ii, E = new ii, function(e, t, i) {
            var n = this.elements;
            return E.subVectors(e, t), 0 === E.lengthSq() && (E.z = 1), E.normalize(), M.crossVectors(i, E), 0 === M.lengthSq() && (1 === Math.abs(i.z) ? E.x += 1e-4 : E.z += 1e-4, E.normalize(), M.crossVectors(i, E)), M.normalize(), S.crossVectors(E, M), n[0] = M.x, n[4] = S.x, n[8] = E.x, n[1] = M.y, n[5] = S.y, n[9] = E.y, n[2] = M.z, n[6] = S.z, n[10] = E.z, this
        }),
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
        },
        premultiply: function(e) {
            return this.multiplyMatrices(e, this)
        },
        multiplyMatrices: function(e, t) {
            var i = e.elements,
                n = t.elements,
                r = this.elements,
                a = i[0],
                o = i[4],
                s = i[8],
                c = i[12],
                h = i[1],
                l = i[5],
                u = i[9],
                p = i[13],
                d = i[2],
                f = i[6],
                m = i[10],
                g = i[14],
                v = i[3],
                y = i[7],
                x = i[11],
                b = i[15],
                w = n[0],
                _ = n[4],
                M = n[8],
                S = n[12],
                E = n[1],
                T = n[5],
                A = n[9],
                L = n[13],
                P = n[2],
                R = n[6],
                C = n[10],
                O = n[14],
                I = n[3],
                D = n[7],
                z = n[11],
                N = n[15];
            return r[0] = a * w + o * E + s * P + c * I, r[4] = a * _ + o * T + s * R + c * D, r[8] = a * M + o * A + s * C + c * z, r[12] = a * S + o * L + s * O + c * N, r[1] = h * w + l * E + u * P + p * I, r[5] = h * _ + l * T + u * R + p * D, r[9] = h * M + l * A + u * C + p * z, r[13] = h * S + l * L + u * O + p * N, r[2] = d * w + f * E + m * P + g * I, r[6] = d * _ + f * T + m * R + g * D, r[10] = d * M + f * A + m * C + g * z, r[14] = d * S + f * L + m * O + g * N, r[3] = v * w + y * E + x * P + b * I, r[7] = v * _ + y * T + x * R + b * D, r[11] = v * M + y * A + x * C + b * z, r[15] = v * S + y * L + x * O + b * N, this
        },
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
        },
        applyToBufferAttribute: function() {
            var e = new ii;
            return function(t) {
                for (var i = 0, n = t.count; i < n; i++) e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.applyMatrix4(this), t.setXYZ(i, e.x, e.y, e.z);
                return t
            }
        }(),
        determinant: function() {
            var e = this.elements,
                t = e[0],
                i = e[4],
                n = e[8],
                r = e[12],
                a = e[1],
                o = e[5],
                s = e[9],
                c = e[13],
                h = e[2],
                l = e[6],
                u = e[10],
                p = e[14];
            return e[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + e[7] * (+t * s * p - t * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + e[11] * (+t * c * l - t * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + e[15] * (-n * o * h - t * s * l + t * o * u + n * a * l - i * a * u + i * s * h)
        },
        transpose: function() {
            var e, t = this.elements;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
        },
        setPosition: function(e) {
            var t = this.elements;
            return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
        },
        getInverse: function(e, t) {
            var i = this.elements,
                n = e.elements,
                r = n[0],
                a = n[1],
                o = n[2],
                s = n[3],
                c = n[4],
                h = n[5],
                l = n[6],
                u = n[7],
                p = n[8],
                d = n[9],
                f = n[10],
                m = n[11],
                g = n[12],
                v = n[13],
                y = n[14],
                x = n[15],
                b = d * y * u - v * f * u + v * l * m - h * y * m - d * l * x + h * f * x,
                w = g * f * u - p * y * u - g * l * m + c * y * m + p * l * x - c * f * x,
                _ = p * v * u - g * d * u + g * h * m - c * v * m - p * h * x + c * d * x,
                M = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y,
                S = r * b + a * w + o * _ + s * M;
            if (0 === S) {
                var E = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === t) throw new Error(E);
                return console.warn(E), this.identity()
            }
            var T = 1 / S;
            return i[0] = b * T, i[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * T, i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * T, i[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m) * T, i[4] = w * T, i[5] = (p * y * s - g * f * s + g * o * m - r * y * m - p * o * x + r * f * x) * T, i[6] = (g * l * s - c * y * s - g * o * u + r * y * u + c * o * x - r * l * x) * T, i[7] = (c * f * s - p * l * s + p * o * u - r * f * u - c * o * m + r * l * m) * T, i[8] = _ * T, i[9] = (g * d * s - p * v * s - g * a * m + r * v * m + p * a * x - r * d * x) * T, i[10] = (c * v * s - g * h * s + g * a * u - r * v * u - c * a * x + r * h * x) * T, i[11] = (p * h * s - c * d * s - p * a * u + r * d * u + c * a * m - r * h * m) * T, i[12] = M * T, i[13] = (p * v * o - g * d * o + g * a * f - r * v * f - p * a * y + r * d * y) * T, i[14] = (g * h * o - c * v * o - g * a * l + r * v * l + c * a * y - r * h * y) * T, i[15] = (c * d * o - p * h * o + p * a * l - r * d * l - c * a * f + r * h * f) * T, this
        },
        scale: function(e) {
            var t = this.elements,
                i = e.x,
                n = e.y,
                r = e.z;
            return t[0] *= i, t[4] *= n, t[8] *= r, t[1] *= i, t[5] *= n, t[9] *= r, t[2] *= i, t[6] *= n, t[10] *= r, t[3] *= i, t[7] *= n, t[11] *= r, this
        },
        getMaxScaleOnAxis: function() {
            var e = this.elements,
                t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, i, n))
        },
        makeTranslation: function(e, t, i) {
            return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
        },
        makeRotationX: function(e) {
            var t = Math.cos(e),
                i = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function(e) {
            var t = Math.cos(e),
                i = Math.sin(e);
            return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function(e) {
            var t = Math.cos(e),
                i = Math.sin(e);
            return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function(e, t) {
            var i = Math.cos(t),
                n = Math.sin(t),
                r = 1 - i,
                a = e.x,
                o = e.y,
                s = e.z,
                c = r * a,
                h = r * o;
            return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
        },
        makeScale: function(e, t, i) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        },
        makeShear: function(e, t, i) {
            return this.set(1, t, i, 0, e, 1, i, 0, e, t, 1, 0, 0, 0, 0, 1), this
        },
        compose: function(e, t, i) {
            var n = this.elements,
                r = t._x,
                a = t._y,
                o = t._z,
                s = t._w,
                c = r + r,
                h = a + a,
                l = o + o,
                u = r * c,
                p = r * h,
                d = r * l,
                f = a * h,
                m = a * l,
                g = o * l,
                v = s * c,
                y = s * h,
                x = s * l,
                b = i.x,
                w = i.y,
                _ = i.z;
            return n[0] = (1 - (f + g)) * b, n[1] = (p + x) * b, n[2] = (d - y) * b, n[3] = 0, n[4] = (p - x) * w, n[5] = (1 - (u + g)) * w, n[6] = (m + v) * w, n[7] = 0, n[8] = (d + y) * _, n[9] = (m - v) * _, n[10] = (1 - (u + f)) * _, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this
        },
        decompose: (w = new ii, _ = new ei, function(e, t, i) {
            var n = this.elements,
                r = w.set(n[0], n[1], n[2]).length(),
                a = w.set(n[4], n[5], n[6]).length(),
                o = w.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (r = -r), e.x = n[12], e.y = n[13], e.z = n[14], _.copy(this);
            var s = 1 / r,
                c = 1 / a,
                h = 1 / o;
            return _.elements[0] *= s, _.elements[1] *= s, _.elements[2] *= s, _.elements[4] *= c, _.elements[5] *= c, _.elements[6] *= c, _.elements[8] *= h, _.elements[9] *= h, _.elements[10] *= h, t.setFromRotationMatrix(_), i.x = r, i.y = a, i.z = o, this
        }),
        makePerspective: function(e, t, i, n, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements,
                s = 2 * r / (t - e),
                c = 2 * r / (i - n),
                h = (t + e) / (t - e),
                l = (i + n) / (i - n),
                u = -(a + r) / (a - r),
                p = -2 * a * r / (a - r);
            return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        },
        makeOrthographic: function(e, t, i, n, r, a) {
            var o = this.elements,
                s = 1 / (t - e),
                c = 1 / (i - n),
                h = 1 / (a - r),
                l = (t + e) * s,
                u = (i + n) * c,
                p = (a + r) * h;
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        },
        equals: function(e) {
            for (var t = this.elements, i = e.elements, n = 0; n < 16; n++)
                if (t[n] !== i[n]) return !1;
            return !0
        },
        fromArray: function(e, t) {
            void 0 === t && (t = 0);
            for (var i = 0; i < 16; i++) this.elements[i] = e[i + t];
            return this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
        }
    }), Object.assign(ti, {
        slerp: function(e, t, i, n) {
            return i.copy(e).slerp(t, n)
        },
        slerpFlat: function(e, t, i, n, r, a, o) {
            var s = i[n + 0],
                c = i[n + 1],
                h = i[n + 2],
                l = i[n + 3],
                u = r[a + 0],
                p = r[a + 1],
                d = r[a + 2],
                f = r[a + 3];
            if (l !== f || s !== u || c !== p || h !== d) {
                var m = 1 - o,
                    g = s * u + c * p + h * d + l * f,
                    v = g >= 0 ? 1 : -1,
                    y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y),
                        b = Math.atan2(x, g * v);
                    m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
                }
                var w = o * v;
                if (s = s * m + u * w, c = c * m + p * w, h = h * m + d * w, l = l * m + f * w, m === 1 - o) {
                    var _ = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                    s *= _, c *= _, h *= _, l *= _
                }
            }
            e[t] = s, e[t + 1] = c, e[t + 2] = h, e[t + 3] = l
        }
    }), Object.defineProperties(ti.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(e) {
                this._x = e, this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(e) {
                this._y = e, this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(e) {
                this._z = e, this.onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(e) {
                this._w = e, this.onChangeCallback()
            }
        }
    }), Object.assign(ti.prototype, {
        isQuaternion: !0,
        set: function(e, t, i, n) {
            return this._x = e, this._y = t, this._z = i, this._w = n, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
        },
        setFromEuler: function(e, t) {
            if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var i = e._x,
                n = e._y,
                r = e._z,
                a = e.order,
                o = Math.cos,
                s = Math.sin,
                c = o(i / 2),
                h = o(n / 2),
                l = o(r / 2),
                u = s(i / 2),
                p = s(n / 2),
                d = s(r / 2);
            return "XYZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "YXZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "ZXY" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "ZYX" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "YZX" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l - u * p * d) : "XZY" === a && (this._x = u * h * l - c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l + u * p * d), !1 !== t && this.onChangeCallback(), this
        },
        setFromAxisAngle: function(e, t) {
            var i = t / 2,
                n = Math.sin(i);
            return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(e) {
            var t, i = e.elements,
                n = i[0],
                r = i[4],
                a = i[8],
                o = i[1],
                s = i[5],
                c = i[9],
                h = i[2],
                l = i[6],
                u = i[10],
                p = n + s + u;
            return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (l - c) * t, this._y = (a - h) * t, this._z = (o - r) * t) : n > s && n > u ? (t = 2 * Math.sqrt(1 + n - s - u), this._w = (l - c) / t, this._x = .25 * t, this._y = (r + o) / t, this._z = (a + h) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - n - u), this._w = (a - h) / t, this._x = (r + o) / t, this._y = .25 * t, this._z = (c + l) / t) : (t = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / t, this._x = (a + h) / t, this._y = (c + l) / t, this._z = .25 * t), this.onChangeCallback(), this
        },
        setFromUnitVectors: function() {
            var e, t = new ii;
            return function(i, n) {
                return void 0 === t && (t = new ii), (e = i.dot(n) + 1) < 1e-6 ? (e = 0, Math.abs(i.x) > Math.abs(i.z) ? t.set(-i.y, i.x, 0) : t.set(0, -i.z, i.y)) : t.crossVectors(i, n), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize()
            }
        }(),
        angleTo: function(e) {
            return 2 * Math.acos(Math.abs(Qt.clamp(this.dot(e), -1, 1)))
        },
        rotateTowards: function(e, t) {
            var i = this.angleTo(e);
            if (0 === i) return this;
            var n = Math.min(1, t / i);
            return this.slerp(e, n), this
        },
        inverse: function() {
            return this.conjugate()
        },
        conjugate: function() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var e = this.length();
            return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
        },
        premultiply: function(e) {
            return this.multiplyQuaternions(e, this)
        },
        multiplyQuaternions: function(e, t) {
            var i = e._x,
                n = e._y,
                r = e._z,
                a = e._w,
                o = t._x,
                s = t._y,
                c = t._z,
                h = t._w;
            return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c, this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this.onChangeCallback(), this
        },
        slerp: function(e, t) {
            if (0 === t) return this;
            if (1 === t) return this.copy(e);
            var i = this._x,
                n = this._y,
                r = this._z,
                a = this._w,
                o = a * e._w + i * e._x + n * e._y + r * e._z;
            if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
            var s = 1 - o * o;
            if (s <= Number.EPSILON) {
                var c = 1 - t;
                return this._w = c * a + t * this._w, this._x = c * i + t * this._x, this._y = c * n + t * this._y, this._z = c * r + t * this._z, this.normalize()
            }
            var h = Math.sqrt(s),
                l = Math.atan2(h, o),
                u = Math.sin((1 - t) * l) / h,
                p = Math.sin(t * l) / h;
            return this._w = a * u + this._w * p, this._x = i * u + this._x * p, this._y = n * u + this._y * p, this._z = r * u + this._z * p, this.onChangeCallback(), this
        },
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
        },
        onChange: function(e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function() {}
    }), Object.assign(ii.prototype, {
        isVector3: !0,
        set: function(e, t, i) {
            return this.x = e, this.y = t, this.z = i, this
        },
        setScalar: function(e) {
            return this.x = e, this.y = e, this.z = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setZ: function(e) {
            return this.z = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this.z += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this.z -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
        },
        multiplyScalar: function(e) {
            return this.x *= e, this.y *= e, this.z *= e, this
        },
        multiplyVectors: function(e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
        },
        applyEuler: (P = new ti, function(e) {
            return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(P.setFromEuler(e))
        }),
        applyAxisAngle: function() {
            var e = new ti;
            return function(t, i) {
                return this.applyQuaternion(e.setFromAxisAngle(t, i))
            }
        }(),
        applyMatrix3: function(e) {
            var t = this.x,
                i = this.y,
                n = this.z,
                r = e.elements;
            return this.x = r[0] * t + r[3] * i + r[6] * n, this.y = r[1] * t + r[4] * i + r[7] * n, this.z = r[2] * t + r[5] * i + r[8] * n, this
        },
        applyMatrix4: function(e) {
            var t = this.x,
                i = this.y,
                n = this.z,
                r = e.elements,
                a = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * a, this
        },
        applyQuaternion: function(e) {
            var t = this.x,
                i = this.y,
                n = this.z,
                r = e.x,
                a = e.y,
                o = e.z,
                s = e.w,
                c = s * t + a * n - o * i,
                h = s * i + o * t - r * n,
                l = s * n + r * i - a * t,
                u = -r * t - a * i - o * n;
            return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this
        },
        project: function(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
        },
        unproject: function() {
            var e = new ei;
            return function(t) {
                return this.applyMatrix4(e.getInverse(t.projectionMatrix)).applyMatrix4(t.matrixWorld)
            }
        }(),
        transformDirection: function(e) {
            var t = this.x,
                i = this.y,
                n = this.z,
                r = e.elements;
            return this.x = r[0] * t + r[4] * i + r[8] * n, this.y = r[1] * t + r[5] * i + r[9] * n, this.z = r[2] * t + r[6] * i + r[10] * n, this.normalize()
        },
        divide: function(e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
        },
        clampScalar: function() {
            var e = new ii,
                t = new ii;
            return function(i, n) {
                return e.set(i, i, i), t.set(n, n, n), this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(e) {
            return this.normalize().multiplyScalar(e)
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        cross: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
        },
        crossVectors: function(e, t) {
            var i = e.x,
                n = e.y,
                r = e.z,
                a = t.x,
                o = t.y,
                s = t.z;
            return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
        },
        projectOnVector: function(e) {
            var t = e.dot(this) / e.lengthSq();
            return this.copy(e).multiplyScalar(t)
        },
        projectOnPlane: function() {
            var e = new ii;
            return function(t) {
                return e.copy(this).projectOnVector(t), this.sub(e)
            }
        }(),
        reflect: function() {
            var e = new ii;
            return function(t) {
                return this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
            }
        }(),
        angleTo: function(e) {
            var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
            return Math.acos(Qt.clamp(t, -1, 1))
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x,
                i = this.y - e.y,
                n = this.z - e.z;
            return t * t + i * i + n * n
        },
        manhattanDistanceTo: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        },
        setFromSpherical: function(e) {
            return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
        },
        setFromSphericalCoords: function(e, t, i) {
            var n = Math.sin(t) * e;
            return this.x = n * Math.sin(i), this.y = Math.cos(t) * e, this.z = n * Math.cos(i), this
        },
        setFromCylindrical: function(e) {
            return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
        },
        setFromCylindricalCoords: function(e, t, i) {
            return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this
        },
        setFromMatrixPosition: function(e) {
            var t = e.elements;
            return this.x = t[12], this.y = t[13], this.z = t[14], this
        },
        setFromMatrixScale: function(e) {
            var t = this.setFromMatrixColumn(e, 0).length(),
                i = this.setFromMatrixColumn(e, 1).length(),
                n = this.setFromMatrixColumn(e, 2).length();
            return this.x = t, this.y = i, this.z = n, this
        },
        setFromMatrixColumn: function(e, t) {
            return this.fromArray(e.elements, 4 * t)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
        },
        fromBufferAttribute: function(e, t, i) {
            return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
        }
    }), Object.assign(ni.prototype, {
        isMatrix3: !0,
        set: function(e, t, i, n, r, a, o, s, c) {
            var h = this.elements;
            return h[0] = e, h[1] = n, h[2] = o, h[3] = t, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(e) {
            var t = this.elements,
                i = e.elements;
            return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this
        },
        setFromMatrix4: function(e) {
            var t = e.elements;
            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
        },
        applyToBufferAttribute: function() {
            var e = new ii;
            return function(t) {
                for (var i = 0, n = t.count; i < n; i++) e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.applyMatrix3(this), t.setXYZ(i, e.x, e.y, e.z);
                return t
            }
        }(),
        multiply: function(e) {
            return this.multiplyMatrices(this, e)
        },
        premultiply: function(e) {
            return this.multiplyMatrices(e, this)
        },
        multiplyMatrices: function(e, t) {
            var i = e.elements,
                n = t.elements,
                r = this.elements,
                a = i[0],
                o = i[3],
                s = i[6],
                c = i[1],
                h = i[4],
                l = i[7],
                u = i[2],
                p = i[5],
                d = i[8],
                f = n[0],
                m = n[3],
                g = n[6],
                v = n[1],
                y = n[4],
                x = n[7],
                b = n[2],
                w = n[5],
                _ = n[8];
            return r[0] = a * f + o * v + s * b, r[3] = a * m + o * y + s * w, r[6] = a * g + o * x + s * _, r[1] = c * f + h * v + l * b, r[4] = c * m + h * y + l * w, r[7] = c * g + h * x + l * _, r[2] = u * f + p * v + d * b, r[5] = u * m + p * y + d * w, r[8] = u * g + p * x + d * _, this
        },
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
        },
        determinant: function() {
            var e = this.elements,
                t = e[0],
                i = e[1],
                n = e[2],
                r = e[3],
                a = e[4],
                o = e[5],
                s = e[6],
                c = e[7],
                h = e[8];
            return t * a * h - t * o * c - i * r * h + i * o * s + n * r * c - n * a * s
        },
        getInverse: function(e, t) {
            e && e.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var i = e.elements,
                n = this.elements,
                r = i[0],
                a = i[1],
                o = i[2],
                s = i[3],
                c = i[4],
                h = i[5],
                l = i[6],
                u = i[7],
                p = i[8],
                d = p * c - h * u,
                f = h * l - p * s,
                m = u * s - c * l,
                g = r * d + a * f + o * m;
            if (0 === g) {
                var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === t) throw new Error(v);
                return console.warn(v), this.identity()
            }
            var y = 1 / g;
            return n[0] = d * y, n[1] = (o * u - p * a) * y, n[2] = (h * a - o * c) * y, n[3] = f * y, n[4] = (p * r - o * l) * y, n[5] = (o * s - h * r) * y, n[6] = m * y, n[7] = (a * l - u * r) * y, n[8] = (c * r - a * s) * y, this
        },
        transpose: function() {
            var e, t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        },
        getNormalMatrix: function(e) {
            return this.setFromMatrix4(e).getInverse(this).transpose()
        },
        transposeIntoArray: function(e) {
            var t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
        },
        setUvTransform: function(e, t, i, n, r, a, o) {
            var s = Math.cos(r),
                c = Math.sin(r);
            this.set(i * s, i * c, -i * (s * a + c * o) + a + e, -n * c, n * s, -n * (-c * a + s * o) + o + t, 0, 0, 1)
        },
        scale: function(e, t) {
            var i = this.elements;
            return i[0] *= e, i[3] *= e, i[6] *= e, i[1] *= t, i[4] *= t, i[7] *= t, this
        },
        rotate: function(e) {
            var t = Math.cos(e),
                i = Math.sin(e),
                n = this.elements,
                r = n[0],
                a = n[3],
                o = n[6],
                s = n[1],
                c = n[4],
                h = n[7];
            return n[0] = t * r + i * s, n[3] = t * a + i * c, n[6] = t * o + i * h, n[1] = -i * r + t * s, n[4] = -i * a + t * c, n[7] = -i * o + t * h, this
        },
        translate: function(e, t) {
            var i = this.elements;
            return i[0] += e * i[2], i[3] += e * i[5], i[6] += e * i[8], i[1] += t * i[2], i[4] += t * i[5], i[7] += t * i[8], this
        },
        equals: function(e) {
            for (var t = this.elements, i = e.elements, n = 0; n < 9; n++)
                if (t[n] !== i[n]) return !1;
            return !0
        },
        fromArray: function(e, t) {
            void 0 === t && (t = 0);
            for (var i = 0; i < 9; i++) this.elements[i] = e[i + t];
            return this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e
        }
    });
    var ri, ai, oi, si, ci, hi = {
            getDataURL: function(e) {
                var t;
                if ("undefined" == typeof HTMLCanvasElement) return e.src;
                if (e instanceof HTMLCanvasElement) t = e;
                else {
                    void 0 === R && (R = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), R.width = e.width, R.height = e.height;
                    var i = R.getContext("2d");
                    e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), t = R
                }
                return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
            }
        },
        li = 0;

    function ui(e, t, i, n, r, a, o, s, c, h) {
        Object.defineProperty(this, "id", {
            value: li++
        }), this.uuid = Qt.generateUUID(), this.name = "", this.image = void 0 !== e ? e : ui.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : ui.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : Fe, this.wrapT = void 0 !== n ? n : Fe, this.magFilter = void 0 !== r ? r : Ve, this.minFilter = void 0 !== a ? a : qe, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : st, this.type = void 0 !== s ? s : Xe, this.offset = new $t(0, 0), this.repeat = new $t(1, 1), this.center = new $t(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ni, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : kt, this.version = 0, this.onUpdate = null
    }

    function pi(e, t, i, n) {
        this.x = e || 0, this.y = t || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
    }

    function di(e, t, i) {
        this.width = e, this.height = t, this.scissor = new pi(0, 0, e, t), this.scissorTest = !1, this.viewport = new pi(0, 0, e, t), i = i || {}, this.texture = new ui(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : Ve, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }

    function fi(e, t, i) {
        di.call(this, e, t, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    function mi(e, t, i, n, r, a, o, s, c, h, l, u) {
        ui.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
            data: e,
            width: t,
            height: i
        }, this.magFilter = void 0 !== c ? c : ke, this.minFilter = void 0 !== h ? h : ke, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function gi(e, t) {
        this.min = void 0 !== e ? e : new ii(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new ii(-1 / 0, -1 / 0, -1 / 0)
    }

    function vi(e, t) {
        this.center = void 0 !== e ? e : new ii, this.radius = void 0 !== t ? t : 0
    }

    function yi(e, t) {
        this.normal = void 0 !== e ? e : new ii(1, 0, 0), this.constant = void 0 !== t ? t : 0
    }

    function xi(e, t, i, n, r, a) {
        this.planes = [void 0 !== e ? e : new yi, void 0 !== t ? t : new yi, void 0 !== i ? i : new yi, void 0 !== n ? n : new yi, void 0 !== r ? r : new yi, void 0 !== a ? a : new yi]
    }
    ui.DEFAULT_IMAGE = void 0, ui.DEFAULT_MAPPING = 300, ui.prototype = Object.assign(Object.create(y.prototype), {
        constructor: ui,
        isTexture: !0,
        updateMatrix: function() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
        },
        toJSON: function(e) {
            var t = void 0 === e || "string" == typeof e;
            if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var n = this.image;
                if (void 0 === n.uuid && (n.uuid = Qt.generateUUID()), !t && void 0 === e.images[n.uuid]) {
                    var r;
                    if (Array.isArray(n)) {
                        r = [];
                        for (var a = 0, o = n.length; a < o; a++) r.push(hi.getDataURL(n[a]))
                    } else r = hi.getDataURL(n);
                    e.images[n.uuid] = {
                        uuid: n.uuid,
                        url: r
                    }
                }
                i.image = n.uuid
            }
            return t || (e.textures[this.uuid] = i), i
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(e) {
            if (300 !== this.mapping) return e;
            if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                case Be:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case Fe:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case Ge:
                    1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
            }
            if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                case Be:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case Fe:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case Ge:
                    1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
            }
            return this.flipY && (e.y = 1 - e.y), e
        }
    }), Object.defineProperty(ui.prototype, "needsUpdate", {
        set: function(e) {
            !0 === e && this.version++
        }
    }), Object.assign(pi.prototype, {
        isVector4: !0,
        set: function(e, t, i, n) {
            return this.x = e, this.y = t, this.z = i, this.w = n, this
        },
        setScalar: function(e) {
            return this.x = e, this.y = e, this.z = e, this.w = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setZ: function(e) {
            return this.z = e, this
        },
        setW: function(e) {
            return this.w = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
        },
        multiplyScalar: function(e) {
            return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
        },
        applyMatrix4: function(e) {
            var t = this.x,
                i = this.y,
                n = this.z,
                r = this.w,
                a = e.elements;
            return this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * r, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        setAxisAngleFromQuaternion: function(e) {
            this.w = 2 * Math.acos(e.w);
            var t = Math.sqrt(1 - e.w * e.w);
            return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
        },
        setAxisAngleFromRotationMatrix: function(e) {
            var t, i, n, r, a = e.elements,
                o = a[0],
                s = a[4],
                c = a[8],
                h = a[1],
                l = a[5],
                u = a[9],
                p = a[2],
                d = a[6],
                f = a[10];
            if (Math.abs(s - h) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
                if (Math.abs(s + h) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
                t = Math.PI;
                var m = (o + 1) / 2,
                    g = (l + 1) / 2,
                    v = (f + 1) / 2,
                    y = (s + h) / 4,
                    x = (c + p) / 4,
                    b = (u + d) / 4;
                return m > g && m > v ? m < .01 ? (i = 0, n = .707106781, r = .707106781) : (n = y / (i = Math.sqrt(m)), r = x / i) : g > v ? g < .01 ? (i = .707106781, n = 0, r = .707106781) : (i = y / (n = Math.sqrt(g)), r = b / n) : v < .01 ? (i = .707106781, n = .707106781, r = 0) : (i = x / (r = Math.sqrt(v)), n = b / r), this.set(i, n, r, t), this
            }
            var w = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (h - s) * (h - s));
            return Math.abs(w) < .001 && (w = 1), this.x = (d - u) / w, this.y = (c - p) / w, this.z = (h - s) / w, this.w = Math.acos((o + l + f - 1) / 2), this
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
        },
        clampScalar: function() {
            var e, t;
            return function(i, n) {
                return void 0 === e && (e = new pi, t = new pi), e.set(i, i, i, i), t.set(n, n, n, n), this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(e) {
            return this.normalize().multiplyScalar(e)
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
        },
        fromBufferAttribute: function(e, t, i) {
            return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
        }
    }), di.prototype = Object.assign(Object.create(y.prototype), {
        constructor: di,
        isWebGLRenderTarget: !0,
        setSize: function(e, t) {
            this.width === e && this.height === t || (this.width = e, this.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), fi.prototype = Object.create(di.prototype), fi.prototype.constructor = fi, fi.prototype.isWebGLRenderTargetCube = !0, mi.prototype = Object.create(ui.prototype), mi.prototype.constructor = mi, mi.prototype.isDataTexture = !0, Object.assign(gi.prototype, {
        isBox3: !0,
        set: function(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromArray: function(e) {
            for (var t = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.length; s < c; s += 3) {
                var h = e[s],
                    l = e[s + 1],
                    u = e[s + 2];
                h < t && (t = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(t, i, n), this.max.set(r, a, o), this
        },
        setFromBufferAttribute: function(e) {
            for (var t = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.count; s < c; s++) {
                var h = e.getX(s),
                    l = e.getY(s),
                    u = e.getZ(s);
                h < t && (t = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(t, i, n), this.max.set(r, a, o), this
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new ii;
            return function(t, i) {
                var n = e.copy(i).multiplyScalar(.5);
                return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
            }
        }(),
        setFromObject: function(e) {
            return this.makeEmpty(), this.expandByObject(e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(e) {
            return void 0 === e && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new ii), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(e) {
            return void 0 === e && (console.warn("THREE.Box3: .getSize() target is now required"), e = new ii), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e), this.max.max(e), this
        },
        expandByVector: function(e) {
            return this.min.sub(e), this.max.add(e), this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        expandByObject: function() {
            var e, t, i, n = new ii;

            function r(r) {
                var a = r.geometry;
                if (void 0 !== a)
                    if (a.isGeometry) {
                        var o = a.vertices;
                        for (t = 0, i = o.length; t < i; t++) n.copy(o[t]), n.applyMatrix4(r.matrixWorld), e.expandByPoint(n)
                    } else if (a.isBufferGeometry) {
                    var s = a.attributes.position;
                    if (void 0 !== s)
                        for (t = 0, i = s.count; t < i; t++) n.fromBufferAttribute(s, t).applyMatrix4(r.matrixWorld), e.expandByPoint(n)
                }
            }
            return function(t) {
                return e = this, t.updateMatrixWorld(!0), t.traverse(r), this
            }
        }(),
        containsPoint: function(e) {
            return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
        },
        getParameter: function(e, t) {
            return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new ii), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
        },
        intersectsSphere: (ai = new ii, function(e) {
            return this.clampPoint(e.center, ai), ai.distanceToSquared(e.center) <= e.radius * e.radius
        }),
        intersectsPlane: function(e) {
            var t, i;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant
        },
        intersectsTriangle: function() {
            var e = new ii,
                t = new ii,
                i = new ii,
                n = new ii,
                r = new ii,
                a = new ii,
                o = new ii,
                s = new ii,
                c = new ii,
                h = new ii;

            function l(n) {
                var r, a;
                for (r = 0, a = n.length - 3; r <= a; r += 3) {
                    o.fromArray(n, r);
                    var s = c.x * Math.abs(o.x) + c.y * Math.abs(o.y) + c.z * Math.abs(o.z),
                        h = e.dot(o),
                        l = t.dot(o),
                        u = i.dot(o);
                    if (Math.max(-Math.max(h, l, u), Math.min(h, l, u)) > s) return !1
                }
                return !0
            }
            return function(o) {
                if (this.isEmpty()) return !1;
                this.getCenter(s), c.subVectors(this.max, s), e.subVectors(o.a, s), t.subVectors(o.b, s), i.subVectors(o.c, s), n.subVectors(t, e), r.subVectors(i, t), a.subVectors(e, i);
                var u = [0, -n.z, n.y, 0, -r.z, r.y, 0, -a.z, a.y, n.z, 0, -n.x, r.z, 0, -r.x, a.z, 0, -a.x, -n.y, n.x, 0, -r.y, r.x, 0, -a.y, a.x, 0];
                return !!l(u) && (!!l(u = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (h.crossVectors(n, r), l(u = [h.x, h.y, h.z])))
            }
        }(),
        clampPoint: function(e, t) {
            return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new ii), t.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new ii;
            return function(t) {
                return e.copy(t).clamp(this.min, this.max).sub(t).length()
            }
        }(),
        getBoundingSphere: function() {
            var e = new ii;
            return function(t) {
                return void 0 === t && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), t = new vi), this.getCenter(t.center), t.radius = .5 * this.getSize(e).length(), t
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        },
        applyMatrix4: (ri = [new ii, new ii, new ii, new ii, new ii, new ii, new ii, new ii], function(e) {
            return this.isEmpty() ? this : (ri[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ri[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ri[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ri[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ri[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ri[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ri[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ri[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ri), this)
        }),
        translate: function(e) {
            return this.min.add(e), this.max.add(e), this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }), Object.assign(vi.prototype, {
        set: function(e, t) {
            return this.center.copy(e), this.radius = t, this
        },
        setFromPoints: (oi = new gi, function(e, t) {
            var i = this.center;
            void 0 !== t ? i.copy(t) : oi.setFromPoints(e).getCenter(i);
            for (var n = 0, r = 0, a = e.length; r < a; r++) n = Math.max(n, i.distanceToSquared(e[r]));
            return this.radius = Math.sqrt(n), this
        }),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.center.copy(e.center), this.radius = e.radius, this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(e) {
            return e.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(e) {
            var t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        },
        intersectsBox: function(e) {
            return e.intersectsSphere(this)
        },
        intersectsPlane: function(e) {
            return Math.abs(e.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(e, t) {
            var i = this.center.distanceToSquared(e);
            return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new ii), t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
        },
        getBoundingBox: function(e) {
            return void 0 === e && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new gi), e.set(this.center, this.center), e.expandByScalar(this.radius), e
        },
        applyMatrix4: function(e) {
            return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
        },
        translate: function(e) {
            return this.center.add(e), this
        },
        equals: function(e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
    }), Object.assign(yi.prototype, {
        set: function(e, t) {
            return this.normal.copy(e), this.constant = t, this
        },
        setComponents: function(e, t, i, n) {
            return this.normal.set(e, t, i), this.constant = n, this
        },
        setFromNormalAndCoplanarPoint: function(e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this
        },
        setFromCoplanarPoints: function() {
            var e = new ii,
                t = new ii;
            return function(i, n, r) {
                var a = e.subVectors(r, n).cross(t.subVectors(i, n)).normalize();
                return this.setFromNormalAndCoplanarPoint(a, i), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this
        },
        normalize: function() {
            var e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this
        },
        negate: function() {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function(e) {
            return this.normal.dot(e) + this.constant
        },
        distanceToSphere: function(e) {
            return this.distanceToPoint(e.center) - e.radius
        },
        projectPoint: function(e, t) {
            return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new ii), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
        },
        intersectLine: function() {
            var e = new ii;
            return function(t, i) {
                void 0 === i && (console.warn("THREE.Plane: .intersectLine() target is now required"), i = new ii);
                var n = t.delta(e),
                    r = this.normal.dot(n);
                if (0 === r) return 0 === this.distanceToPoint(t.start) ? i.copy(t.start) : void 0;
                var a = -(t.start.dot(this.normal) + this.constant) / r;
                return a < 0 || a > 1 ? void 0 : i.copy(n).multiplyScalar(a).add(t.start)
            }
        }(),
        intersectsLine: function(e) {
            var t = this.distanceToPoint(e.start),
                i = this.distanceToPoint(e.end);
            return t < 0 && i > 0 || i < 0 && t > 0
        },
        intersectsBox: function(e) {
            return e.intersectsPlane(this)
        },
        intersectsSphere: function(e) {
            return e.intersectsPlane(this)
        },
        coplanarPoint: function(e) {
            return void 0 === e && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new ii), e.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var e = new ii,
                t = new ni;
            return function(i, n) {
                var r = n || t.getNormalMatrix(i),
                    a = this.coplanarPoint(e).applyMatrix4(i),
                    o = this.normal.applyMatrix3(r).normalize();
                return this.constant = -a.dot(o), this
            }
        }(),
        translate: function(e) {
            return this.constant -= e.dot(this.normal), this
        },
        equals: function(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
    }), Object.assign(xi.prototype, {
        set: function(e, t, i, n, r, a) {
            var o = this.planes;
            return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            for (var t = this.planes, i = 0; i < 6; i++) t[i].copy(e.planes[i]);
            return this
        },
        setFromMatrix: function(e) {
            var t = this.planes,
                i = e.elements,
                n = i[0],
                r = i[1],
                a = i[2],
                o = i[3],
                s = i[4],
                c = i[5],
                h = i[6],
                l = i[7],
                u = i[8],
                p = i[9],
                d = i[10],
                f = i[11],
                m = i[12],
                g = i[13],
                v = i[14],
                y = i[15];
            return t[0].setComponents(o - n, l - s, f - u, y - m).normalize(), t[1].setComponents(o + n, l + s, f + u, y + m).normalize(), t[2].setComponents(o + r, l + c, f + p, y + g).normalize(), t[3].setComponents(o - r, l - c, f - p, y - g).normalize(), t[4].setComponents(o - a, l - h, f - d, y - v).normalize(), t[5].setComponents(o + a, l + h, f + d, y + v).normalize(), this
        },
        intersectsObject: (ci = new vi, function(e) {
            var t = e.geometry;
            return null === t.boundingSphere && t.computeBoundingSphere(), ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(ci)
        }),
        intersectsSprite: function() {
            var e = new vi;
            return function(t) {
                return e.center.set(0, 0, 0), e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
            }
        }(),
        intersectsSphere: function(e) {
            for (var t = this.planes, i = e.center, n = -e.radius, r = 0; r < 6; r++) {
                if (t[r].distanceToPoint(i) < n) return !1
            }
            return !0
        },
        intersectsBox: (si = new ii, function(e) {
            for (var t = this.planes, i = 0; i < 6; i++) {
                var n = t[i];
                if (si.x = n.normal.x > 0 ? e.max.x : e.min.x, si.y = n.normal.y > 0 ? e.max.y : e.min.y, si.z = n.normal.z > 0 ? e.max.z : e.min.z, n.distanceToPoint(si) < 0) return !1
            }
            return !0
        }),
        containsPoint: function(e) {
            for (var t = this.planes, i = 0; i < 6; i++)
                if (t[i].distanceToPoint(e) < 0) return !1;
            return !0
        }
    });
    var bi = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );",
        bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
        lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
        map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif",
        normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
    };

    function wi(e) {
        var t = {};
        for (var i in e)
            for (var n in t[i] = {}, e[i]) {
                var r = e[i][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? t[i][n] = r.clone() : Array.isArray(r) ? t[i][n] = r.slice() : t[i][n] = r
            }
        return t
    }

    function _i(e) {
        for (var t = {}, i = 0; i < e.length; i++) {
            var n = wi(e[i]);
            for (var r in n) t[r] = n[r]
        }
        return t
    }
    var Mi, Si, Ei, Ti = {
            clone: wi,
            merge: _i
        },
        Ai = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };

    function Li(e, t, i) {
        return void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i)
    }
    Object.assign(Li.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(e) {
            return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
        },
        setScalar: function(e) {
            return this.r = e, this.g = e, this.b = e, this
        },
        setHex: function(e) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
        },
        setRGB: function(e, t, i) {
            return this.r = e, this.g = t, this.b = i, this
        },
        setHSL: function() {
            function e(e, t, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            return function(t, i, n) {
                if (t = Qt.euclideanModulo(t, 1), i = Qt.clamp(i, 0, 1), n = Qt.clamp(n, 0, 1), 0 === i) this.r = this.g = this.b = n;
                else {
                    var r = n <= .5 ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    this.r = e(a, r, t + 1 / 3), this.g = e(a, r, t), this.b = e(a, r, t - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function(e) {
            function t(t) {
                void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                var n, r = i[1],
                    a = i[2];
                switch (r) {
                    case "rgb":
                    case "rgba":
                        if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, t(n[5]), this;
                        if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, t(n[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                            var o = parseFloat(n[1]) / 360,
                                s = parseInt(n[2], 10) / 100,
                                c = parseInt(n[3], 10) / 100;
                            return t(n[5]), this.setHSL(o, s, c)
                        }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                var h, l = (h = i[1]).length;
                if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
                if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
            }
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        },
        copyGammaToLinear: function(e, t) {
            return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
        },
        copyLinearToGamma: function(e, t) {
            void 0 === t && (t = 2);
            var i = t > 0 ? 1 / t : 1;
            return this.r = Math.pow(e.r, i), this.g = Math.pow(e.g, i), this.b = Math.pow(e.b, i), this
        },
        convertGammaToLinear: function(e) {
            return this.copyGammaToLinear(this, e), this
        },
        convertLinearToGamma: function(e) {
            return this.copyLinearToGamma(this, e), this
        },
        copySRGBToLinear: function() {
            function e(e) {
                return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
            }
            return function(t) {
                return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this
            }
        }(),
        copyLinearToSRGB: function() {
            function e(e) {
                return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
            }
            return function(t) {
                return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this
            }
        }(),
        convertSRGBToLinear: function() {
            return this.copySRGBToLinear(this), this
        },
        convertLinearToSRGB: function() {
            return this.copyLinearToSRGB(this), this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(e) {
            void 0 === e && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
                h: 0,
                s: 0,
                l: 0
            });
            var t, i, n = this.r,
                r = this.g,
                a = this.b,
                o = Math.max(n, r, a),
                s = Math.min(n, r, a),
                c = (s + o) / 2;
            if (s === o) t = 0, i = 0;
            else {
                var h = o - s;
                switch (i = c <= .5 ? h / (o + s) : h / (2 - o - s), o) {
                    case n:
                        t = (r - a) / h + (r < a ? 6 : 0);
                        break;
                    case r:
                        t = (a - n) / h + 2;
                        break;
                    case a:
                        t = (n - r) / h + 4
                }
                t /= 6
            }
            return e.h = t, e.s = i, e.l = c, e
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: (Ei = {}, function(e, t, i) {
            return this.getHSL(Ei), Ei.h += e, Ei.s += t, Ei.l += i, this.setHSL(Ei.h, Ei.s, Ei.l), this
        }),
        add: function(e) {
            return this.r += e.r, this.g += e.g, this.b += e.b, this
        },
        addColors: function(e, t) {
            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
        },
        addScalar: function(e) {
            return this.r += e, this.g += e, this.b += e, this
        },
        sub: function(e) {
            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
        },
        multiply: function(e) {
            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
        },
        multiplyScalar: function(e) {
            return this.r *= e, this.g *= e, this.b *= e, this
        },
        lerp: function(e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
        },
        lerpHSL: (Mi = {
            h: 0,
            s: 0,
            l: 0
        }, Si = {
            h: 0,
            s: 0,
            l: 0
        }, function(e, t) {
            this.getHSL(Mi), e.getHSL(Si);
            var i = Qt.lerp(Mi.h, Si.h, t),
                n = Qt.lerp(Mi.s, Si.s, t),
                r = Qt.lerp(Mi.l, Si.l, t);
            return this.setHSL(i, n, r), this
        }),
        equals: function(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    var Pi, Ri = {
            common: {
                diffuse: {
                    value: new Li(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new ni
                },
                alphaMap: {
                    value: null
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                },
                maxMipLevel: {
                    value: 0
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new $t(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new Li(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new Li(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new ni
                }
            },
            sprite: {
                diffuse: {
                    value: new Li(15658734)
                },
                opacity: {
                    value: 1
                },
                center: {
                    value: new $t(.5, .5)
                },
                rotation: {
                    value: 0
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new ni
                }
            }
        },
        Ci = {
            basic: {
                uniforms: _i([Ri.common, Ri.specularmap, Ri.envmap, Ri.aomap, Ri.lightmap, Ri.fog]),
                vertexShader: bi.meshbasic_vert,
                fragmentShader: bi.meshbasic_frag
            },
            lambert: {
                uniforms: _i([Ri.common, Ri.specularmap, Ri.envmap, Ri.aomap, Ri.lightmap, Ri.emissivemap, Ri.fog, Ri.lights, {
                    emissive: {
                        value: new Li(0)
                    }
                }]),
                vertexShader: bi.meshlambert_vert,
                fragmentShader: bi.meshlambert_frag
            },
            phong: {
                uniforms: _i([Ri.common, Ri.specularmap, Ri.envmap, Ri.aomap, Ri.lightmap, Ri.emissivemap, Ri.bumpmap, Ri.normalmap, Ri.displacementmap, Ri.gradientmap, Ri.fog, Ri.lights, {
                    emissive: {
                        value: new Li(0)
                    },
                    specular: {
                        value: new Li(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: bi.meshphong_vert,
                fragmentShader: bi.meshphong_frag
            },
            standard: {
                uniforms: _i([Ri.common, Ri.envmap, Ri.aomap, Ri.lightmap, Ri.emissivemap, Ri.bumpmap, Ri.normalmap, Ri.displacementmap, Ri.roughnessmap, Ri.metalnessmap, Ri.fog, Ri.lights, {
                    emissive: {
                        value: new Li(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: bi.meshphysical_vert,
                fragmentShader: bi.meshphysical_frag
            },
            matcap: {
                uniforms: _i([Ri.common, Ri.bumpmap, Ri.normalmap, Ri.displacementmap, Ri.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: bi.meshmatcap_vert,
                fragmentShader: bi.meshmatcap_frag
            },
            points: {
                uniforms: _i([Ri.points, Ri.fog]),
                vertexShader: bi.points_vert,
                fragmentShader: bi.points_frag
            },
            dashed: {
                uniforms: _i([Ri.common, Ri.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: bi.linedashed_vert,
                fragmentShader: bi.linedashed_frag
            },
            depth: {
                uniforms: _i([Ri.common, Ri.displacementmap]),
                vertexShader: bi.depth_vert,
                fragmentShader: bi.depth_frag
            },
            normal: {
                uniforms: _i([Ri.common, Ri.bumpmap, Ri.normalmap, Ri.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: bi.normal_vert,
                fragmentShader: bi.normal_frag
            },
            sprite: {
                uniforms: _i([Ri.sprite, Ri.fog]),
                vertexShader: bi.sprite_vert,
                fragmentShader: bi.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new ni
                    },
                    t2D: {
                        value: null
                    }
                },
                vertexShader: bi.background_vert,
                fragmentShader: bi.background_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: bi.cube_vert,
                fragmentShader: bi.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: bi.equirect_vert,
                fragmentShader: bi.equirect_frag
            },
            distanceRGBA: {
                uniforms: _i([Ri.common, Ri.displacementmap, {
                    referencePosition: {
                        value: new ii
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: bi.distanceRGBA_vert,
                fragmentShader: bi.distanceRGBA_frag
            },
            shadow: {
                uniforms: _i([Ri.lights, Ri.fog, {
                    color: {
                        value: new Li(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: bi.shadow_vert,
                fragmentShader: bi.shadow_frag
            }
        };

    function Oi() {
        var e = null,
            t = !1,
            i = null;

        function n(r, a) {
            !1 !== t && (i(r, a), e.requestAnimationFrame(n))
        }
        return {
            start: function() {
                !0 !== t && null !== i && (e.requestAnimationFrame(n), t = !0)
            },
            stop: function() {
                t = !1
            },
            setAnimationLoop: function(e) {
                i = e
            },
            setContext: function(t) {
                e = t
            }
        }
    }

    function Ii(e) {
        var t = new WeakMap;
        return {
            get: function(e) {
                return e.isInterleavedBufferAttribute && (e = e.data), t.get(e)
            },
            remove: function(i) {
                i.isInterleavedBufferAttribute && (i = i.data);
                var n = t.get(i);
                n && (e.deleteBuffer(n.buffer), t.delete(i))
            },
            update: function(i, n) {
                i.isInterleavedBufferAttribute && (i = i.data);
                var r = t.get(i);
                void 0 === r ? t.set(i, function(t, i) {
                    var n = t.array,
                        r = t.dynamic ? 35048 : 35044,
                        a = e.createBuffer();
                    e.bindBuffer(i, a), e.bufferData(i, n, r), t.onUploadCallback();
                    var o = 5126;
                    return n instanceof Float32Array ? o = 5126 : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? o = 5123 : n instanceof Int16Array ? o = 5122 : n instanceof Uint32Array ? o = 5125 : n instanceof Int32Array ? o = 5124 : n instanceof Int8Array ? o = 5120 : n instanceof Uint8Array && (o = 5121), {
                        buffer: a,
                        type: o,
                        bytesPerElement: n.BYTES_PER_ELEMENT,
                        version: t.version
                    }
                }(i, n)) : r.version < i.version && (function(t, i, n) {
                    var r = i.array,
                        a = i.updateRange;
                    e.bindBuffer(n, t), !1 === i.dynamic ? e.bufferData(n, r, 35044) : -1 === a.count ? e.bufferSubData(n, 0, r) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
                }(r.buffer, i, n), r.version = i.version)
            }
        }
    }

    function Di(e, t, i, n, r, a) {
        this.a = e, this.b = t, this.c = i, this.normal = n && n.isVector3 ? n : new ii, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new Li, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
    }

    function zi(e, t, i, n) {
        this._x = e || 0, this._y = t || 0, this._z = i || 0, this._order = n || zi.DefaultOrder
    }

    function Ni() {
        this.mask = 1
    }
    Ci.physical = {
        uniforms: _i([Ci.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: bi.meshphysical_vert,
        fragmentShader: bi.meshphysical_frag
    }, Object.assign(Di.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
            for (var t = 0, i = e.vertexNormals.length; t < i; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
            for (t = 0, i = e.vertexColors.length; t < i; t++) this.vertexColors[t] = e.vertexColors[t].clone();
            return this
        }
    }), zi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], zi.DefaultOrder = "XYZ", Object.defineProperties(zi.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(e) {
                this._x = e, this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(e) {
                this._y = e, this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(e) {
                this._z = e, this.onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(e) {
                this._order = e, this.onChangeCallback()
            }
        }
    }), Object.assign(zi.prototype, {
        isEuler: !0,
        set: function(e, t, i, n) {
            return this._x = e, this._y = t, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(e, t, i) {
            var n = Qt.clamp,
                r = e.elements,
                a = r[0],
                o = r[4],
                s = r[8],
                c = r[1],
                h = r[5],
                l = r[9],
                u = r[2],
                p = r[6],
                d = r[10];
            return "XYZ" === (t = t || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === t ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, !1 !== i && this.onChangeCallback(), this
        },
        setFromQuaternion: function() {
            var e = new ei;
            return function(t, i, n) {
                return e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, i, n)
            }
        }(),
        setFromVector3: function(e, t) {
            return this.set(e.x, e.y, e.z, t || this._order)
        },
        reorder: (Pi = new ti, function(e) {
            return Pi.setFromEuler(this), this.setFromQuaternion(Pi, e)
        }),
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        },
        fromArray: function(e) {
            return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
        },
        toVector3: function(e) {
            return e ? e.set(this._x, this._y, this._z) : new ii(this._x, this._y, this._z)
        },
        onChange: function(e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function() {}
    }), Object.assign(Ni.prototype, {
        set: function(e) {
            this.mask = 1 << e | 0
        },
        enable: function(e) {
            this.mask |= 1 << e | 0
        },
        toggle: function(e) {
            this.mask ^= 1 << e | 0
        },
        disable: function(e) {
            this.mask &= ~(1 << e | 0)
        },
        test: function(e) {
            return 0 != (this.mask & e.mask)
        }
    });
    var Ui, Bi, Fi = 0;

    function Gi() {
        Object.defineProperty(this, "id", {
            value: Fi++
        }), this.uuid = Qt.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Gi.DefaultUp.clone();
        var e = new ii,
            t = new zi,
            i = new ti,
            n = new ii(1, 1, 1);
        t.onChange(function() {
            i.setFromEuler(t, !1)
        }), i.onChange(function() {
            t.setFromQuaternion(i, void 0, !1)
        }), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            modelViewMatrix: {
                value: new ei
            },
            normalMatrix: {
                value: new ni
            }
        }), this.matrix = new ei, this.matrixWorld = new ei, this.matrixAutoUpdate = Gi.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Ni, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }
    Gi.DefaultUp = new ii(0, 1, 0), Gi.DefaultMatrixAutoUpdate = !0, Gi.prototype = Object.assign(Object.create(y.prototype), {
        constructor: Gi,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(e) {
            this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(e) {
            return this.quaternion.premultiply(e), this
        },
        setRotationFromAxisAngle: function(e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        },
        setRotationFromEuler: function(e) {
            this.quaternion.setFromEuler(e, !0)
        },
        setRotationFromMatrix: function(e) {
            this.quaternion.setFromRotationMatrix(e)
        },
        setRotationFromQuaternion: function(e) {
            this.quaternion.copy(e)
        },
        rotateOnAxis: (Bi = new ti, function(e, t) {
            return Bi.setFromAxisAngle(e, t), this.quaternion.multiply(Bi), this
        }),
        rotateOnWorldAxis: function() {
            var e = new ti;
            return function(t, i) {
                return e.setFromAxisAngle(t, i), this.quaternion.premultiply(e), this
            }
        }(),
        rotateX: function() {
            var e = new ii(1, 0, 0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateY: function() {
            var e = new ii(0, 1, 0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateZ: function() {
            var e = new ii(0, 0, 1);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        translateOnAxis: function() {
            var e = new ii;
            return function(t, i) {
                return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(i)), this
            }
        }(),
        translateX: function() {
            var e = new ii(1, 0, 0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateY: function() {
            var e = new ii(0, 1, 0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateZ: function() {
            var e = new ii(0, 0, 1);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        localToWorld: function(e) {
            return e.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: (Ui = new ei, function(e) {
            return e.applyMatrix4(Ui.getInverse(this.matrixWorld))
        }),
        lookAt: function() {
            var e = new ti,
                t = new ei,
                i = new ii,
                n = new ii;
            return function(r, a, o) {
                r.isVector3 ? i.copy(r) : i.set(r, a, o);
                var s = this.parent;
                this.updateWorldMatrix(!0, !1), n.setFromMatrixPosition(this.matrixWorld), this.isCamera ? t.lookAt(n, i, this.up) : t.lookAt(i, n, this.up), this.quaternion.setFromRotationMatrix(t), s && (t.extractRotation(s.matrixWorld), e.setFromRotationMatrix(t), this.quaternion.premultiply(e.inverse()))
            }
        }(),
        add: function(e) {
            if (arguments.length > 1) {
                for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
                type: "added"
            }), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
        },
        remove: function(e) {
            if (arguments.length > 1) {
                for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
                return this
            }
            var i = this.children.indexOf(e);
            return -1 !== i && (e.parent = null, e.dispatchEvent({
                type: "removed"
            }), this.children.splice(i, 1)), this
        },
        getObjectById: function(e) {
            return this.getObjectByProperty("id", e)
        },
        getObjectByName: function(e) {
            return this.getObjectByProperty("name", e)
        },
        getObjectByProperty: function(e, t) {
            if (this[e] === t) return this;
            for (var i = 0, n = this.children.length; i < n; i++) {
                var r = this.children[i].getObjectByProperty(e, t);
                if (void 0 !== r) return r
            }
        },
        getWorldPosition: function(e) {
            return void 0 === e && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new ii), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var e = new ii,
                t = new ii;
            return function(i) {
                return void 0 === i && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), i = new ti), this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, i, t), i
            }
        }(),
        getWorldScale: function() {
            var e = new ii,
                t = new ti;
            return function(i) {
                return void 0 === i && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), i = new ii), this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, i), i
            }
        }(),
        getWorldDirection: function(e) {
            void 0 === e && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new ii), this.updateMatrixWorld(!0);
            var t = this.matrixWorld.elements;
            return e.set(t[8], t[9], t[10]).normalize()
        },
        raycast: function() {},
        traverse: function(e) {
            e(this);
            for (var t = this.children, i = 0, n = t.length; i < n; i++) t[i].traverse(e)
        },
        traverseVisible: function(e) {
            if (!1 !== this.visible) {
                e(this);
                for (var t = this.children, i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e)
            }
        },
        traverseAncestors: function(e) {
            var t = this.parent;
            null !== t && (e(t), t.traverseAncestors(e))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
            for (var t = this.children, i = 0, n = t.length; i < n; i++) t[i].updateMatrixWorld(e)
        },
        updateWorldMatrix: function(e, t) {
            var i = this.parent;
            if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t)
                for (var n = this.children, r = 0, a = n.length; r < a; r++) n[r].updateWorldMatrix(!1, !0)
        },
        toJSON: function(e) {
            var t = void 0 === e || "string" == typeof e,
                i = {};
            t && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            }, i.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var n = {};

            function r(t, i) {
                return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)), i.uuid
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) {
                n.geometry = r(e.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var o = a.shapes;
                    if (Array.isArray(o))
                        for (var s = 0, c = o.length; s < c; s++) {
                            var h = o[s];
                            r(e.shapes, h)
                        } else r(e.shapes, o)
                }
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    var l = [];
                    for (s = 0, c = this.material.length; s < c; s++) l.push(r(e.materials, this.material[s]));
                    n.material = l
                } else n.material = r(e.materials, this.material);
            if (this.children.length > 0) {
                n.children = [];
                for (s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(e).object)
            }
            if (t) {
                var u = m(e.geometries),
                    p = m(e.materials),
                    d = m(e.textures),
                    f = m(e.images);
                o = m(e.shapes);
                u.length > 0 && (i.geometries = u), p.length > 0 && (i.materials = p), d.length > 0 && (i.textures = d), f.length > 0 && (i.images = f), o.length > 0 && (i.shapes = o)
            }
            return i.object = n, i;

            function m(e) {
                var t = [];
                for (var i in e) {
                    var n = e[i];
                    delete n.metadata, t.push(n)
                }
                return t
            }
        },
        clone: function(e) {
            return (new this.constructor).copy(this, e)
        },
        copy: function(e, t) {
            if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
                for (var i = 0; i < e.children.length; i++) {
                    var n = e.children[i];
                    this.add(n.clone())
                }
            return this
        }
    });
    var ki, Hi, ji = 0;

    function Vi() {
        Object.defineProperty(this, "id", {
            value: ji += 2
        }), this.uuid = Qt.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function Wi(e, t, i) {
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    function qi(e, t, i) {
        Wi.call(this, new Int8Array(e), t, i)
    }

    function Xi(e, t, i) {
        Wi.call(this, new Uint8Array(e), t, i)
    }

    function Yi(e, t, i) {
        Wi.call(this, new Uint8ClampedArray(e), t, i)
    }

    function Zi(e, t, i) {
        Wi.call(this, new Int16Array(e), t, i)
    }

    function Ji(e, t, i) {
        Wi.call(this, new Uint16Array(e), t, i)
    }

    function Ki(e, t, i) {
        Wi.call(this, new Int32Array(e), t, i)
    }

    function Qi(e, t, i) {
        Wi.call(this, new Uint32Array(e), t, i)
    }

    function $i(e, t, i) {
        Wi.call(this, new Float32Array(e), t, i)
    }

    function en(e, t, i) {
        Wi.call(this, new Float64Array(e), t, i)
    }

    function tn() {
        this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function nn(e) {
        if (0 === e.length) return -1 / 0;
        for (var t = e[0], i = 1, n = e.length; i < n; ++i) e[i] > t && (t = e[i]);
        return t
    }
    Vi.prototype = Object.assign(Object.create(y.prototype), {
        constructor: Vi,
        isGeometry: !0,
        applyMatrix: function(e) {
            for (var t = (new ni).getNormalMatrix(e), i = 0, n = this.vertices.length; i < n; i++) {
                this.vertices[i].applyMatrix4(e)
            }
            for (i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i];
                r.normal.applyMatrix3(t).normalize();
                for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(t).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        },
        rotateX: function() {
            var e = new ei;
            return function(t) {
                return e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(),
        rotateY: function() {
            var e = new ei;
            return function(t) {
                return e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(),
        rotateZ: function() {
            var e = new ei;
            return function(t) {
                return e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(),
        translate: function() {
            var e = new ei;
            return function(t, i, n) {
                return e.makeTranslation(t, i, n), this.applyMatrix(e), this
            }
        }(),
        scale: function() {
            var e = new ei;
            return function(t, i, n) {
                return e.makeScale(t, i, n), this.applyMatrix(e), this
            }
        }(),
        lookAt: (Hi = new Gi, function(e) {
            Hi.lookAt(e), Hi.updateMatrix(), this.applyMatrix(Hi.matrix)
        }),
        fromBufferGeometry: function(e) {
            var t = this,
                i = null !== e.index ? e.index.array : void 0,
                n = e.attributes,
                r = n.position.array,
                a = void 0 !== n.normal ? n.normal.array : void 0,
                o = void 0 !== n.color ? n.color.array : void 0,
                s = void 0 !== n.uv ? n.uv.array : void 0,
                c = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== c && (this.faceVertexUvs[1] = []);
            for (var h = 0, l = 0; h < r.length; h += 3, l += 2) t.vertices.push((new ii).fromArray(r, h)), void 0 !== o && t.colors.push((new Li).fromArray(o, h));

            function u(e, i, n, r) {
                var h = void 0 === o ? [] : [t.colors[e].clone(), t.colors[i].clone(), t.colors[n].clone()],
                    l = new Di(e, i, n, void 0 === a ? [] : [(new ii).fromArray(a, 3 * e), (new ii).fromArray(a, 3 * i), (new ii).fromArray(a, 3 * n)], h, r);
                t.faces.push(l), void 0 !== s && t.faceVertexUvs[0].push([(new $t).fromArray(s, 2 * e), (new $t).fromArray(s, 2 * i), (new $t).fromArray(s, 2 * n)]), void 0 !== c && t.faceVertexUvs[1].push([(new $t).fromArray(c, 2 * e), (new $t).fromArray(c, 2 * i), (new $t).fromArray(c, 2 * n)])
            }
            var p = e.groups;
            if (p.length > 0)
                for (h = 0; h < p.length; h++)
                    for (var d = p[h], f = d.start, m = (l = f, f + d.count); l < m; l += 3) void 0 !== i ? u(i[l], i[l + 1], i[l + 2], d.materialIndex) : u(l, l + 1, l + 2, d.materialIndex);
            else if (void 0 !== i)
                for (h = 0; h < i.length; h += 3) u(i[h], i[h + 1], i[h + 2]);
            else
                for (h = 0; h < r.length / 3; h += 3) u(h, h + 1, h + 2);
            return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
        },
        center: (ki = new ii, function() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(ki).negate(), this.translate(ki.x, ki.y, ki.z), this
        }),
        normalize: function() {
            this.computeBoundingSphere();
            var e = this.boundingSphere.center,
                t = this.boundingSphere.radius,
                i = 0 === t ? 1 : 1 / t,
                n = new ei;
            return n.set(i, 0, 0, -i * e.x, 0, i, 0, -i * e.y, 0, 0, i, -i * e.z, 0, 0, 0, 1), this.applyMatrix(n), this
        },
        computeFaceNormals: function() {
            for (var e = new ii, t = new ii, i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i],
                    a = this.vertices[r.a],
                    o = this.vertices[r.b],
                    s = this.vertices[r.c];
                e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), r.normal.copy(e)
            }
        },
        computeVertexNormals: function(e) {
            var t, i, n, r, a, o;
            for (void 0 === e && (e = !0), o = new Array(this.vertices.length), t = 0, i = this.vertices.length; t < i; t++) o[t] = new ii;
            if (e) {
                var s, c, h, l = new ii,
                    u = new ii;
                for (n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors(h, c), u.subVectors(s, c), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
            } else
                for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
            for (t = 0, i = this.vertices.length; t < i; t++) o[t].normalize();
            for (n = 0, r = this.faces.length; n < r; n++) {
                var p = (a = this.faces[n]).vertexNormals;
                3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var e, t, i;
            for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
                var n = (i = this.faces[e]).vertexNormals;
                3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var e, t, i, n, r;
            for (i = 0, n = this.faces.length; i < n; i++)
                for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), e = 0, t = r.vertexNormals.length; e < t; e++) r.__originalVertexNormals[e] ? r.__originalVertexNormals[e].copy(r.vertexNormals[e]) : r.__originalVertexNormals[e] = r.vertexNormals[e].clone();
            var a = new Vi;
            for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                    var o = this.morphNormals[e].faceNormals,
                        s = this.morphNormals[e].vertexNormals;
                    for (i = 0, n = this.faces.length; i < n; i++) c = new ii, h = {
                        a: new ii,
                        b: new ii,
                        c: new ii
                    }, o.push(c), s.push(h)
                }
                var c, h, l = this.morphNormals[e];
                for (a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], c = l.faceNormals[i], h = l.vertexNormals[i], c.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
            }
            for (i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new gi), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new vi), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(e, t, i) {
            if (e && e.isGeometry) {
                var n, r = this.vertices.length,
                    a = this.vertices,
                    o = e.vertices,
                    s = this.faces,
                    c = e.faces,
                    h = this.faceVertexUvs[0],
                    l = e.faceVertexUvs[0],
                    u = this.colors,
                    p = e.colors;
                void 0 === i && (i = 0), void 0 !== t && (n = (new ni).getNormalMatrix(t));
                for (var d = 0, f = o.length; d < f; d++) {
                    var m = o[d].clone();
                    void 0 !== t && m.applyMatrix4(t), a.push(m)
                }
                for (d = 0, f = p.length; d < f; d++) u.push(p[d].clone());
                for (d = 0, f = c.length; d < f; d++) {
                    var g, v, y, x = c[d],
                        b = x.vertexNormals,
                        w = x.vertexColors;
                    (g = new Di(x.a + r, x.b + r, x.c + r)).normal.copy(x.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize();
                    for (var _ = 0, M = b.length; _ < M; _++) v = b[_].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v);
                    g.color.copy(x.color);
                    for (_ = 0, M = w.length; _ < M; _++) y = w[_], g.vertexColors.push(y.clone());
                    g.materialIndex = x.materialIndex + i, s.push(g)
                }
                for (d = 0, f = l.length; d < f; d++) {
                    var S = l[d],
                        E = [];
                    if (void 0 !== S) {
                        for (_ = 0, M = S.length; _ < M; _++) E.push(S[_].clone());
                        h.push(E)
                    }
                }
            } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e)
        },
        mergeMesh: function(e) {
            e && e.isMesh ? (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e)
        },
        mergeVertices: function() {
            var e, t, i, n, r, a, o, s, c = {},
                h = [],
                l = [],
                u = Math.pow(10, 4);
            for (i = 0, n = this.vertices.length; i < n; i++) e = this.vertices[i], void 0 === c[t = Math.round(e.x * u) + "_" + Math.round(e.y * u) + "_" + Math.round(e.z * u)] ? (c[t] = i, h.push(this.vertices[i]), l[i] = h.length - 1) : l[i] = l[c[t]];
            var p = [];
            for (i = 0, n = this.faces.length; i < n; i++) {
                (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
                for (var d = 0; d < 3; d++)
                    if (a[d] === a[(d + 1) % 3]) {
                        p.push(i);
                        break
                    }
            }
            for (i = p.length - 1; i >= 0; i--) {
                var f = p[i];
                for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
            }
            var m = this.vertices.length - h.length;
            return this.vertices = h, m
        },
        setFromPoints: function(e) {
            this.vertices = [];
            for (var t = 0, i = e.length; t < i; t++) {
                var n = e[t];
                this.vertices.push(new ii(n.x, n.y, n.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            for (var e = this.faces, t = e.length, i = 0; i < t; i++) e[i]._id = i;
            e.sort(function(e, t) {
                return e.materialIndex - t.materialIndex
            });
            var n, r, a = this.faceVertexUvs[0],
                o = this.faceVertexUvs[1];
            a && a.length === t && (n = []), o && o.length === t && (r = []);
            for (i = 0; i < t; i++) {
                var s = e[i]._id;
                n && n.push(a[s]), r && r.push(o[s])
            }
            n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
        },
        toJSON: function() {
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
                var t = this.parameters;
                for (var i in t) void 0 !== t[i] && (e[i] = t[i]);
                return e
            }
            for (var n = [], r = 0; r < this.vertices.length; r++) {
                var a = this.vertices[r];
                n.push(a.x, a.y, a.z)
            }
            var o = [],
                s = [],
                c = {},
                h = [],
                l = {},
                u = [],
                p = {};
            for (r = 0; r < this.faces.length; r++) {
                var d = this.faces[r],
                    f = void 0 !== this.faceVertexUvs[0][r],
                    m = d.normal.length() > 0,
                    g = d.vertexNormals.length > 0,
                    v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                    y = d.vertexColors.length > 0,
                    x = 0;
                if (x = M(x, 0, 0), x = M(x, 1, !0), x = M(x, 2, !1), x = M(x, 3, f), x = M(x, 4, m), x = M(x, 5, g), x = M(x, 6, v), x = M(x, 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
                    var b = this.faceVertexUvs[0][r];
                    o.push(T(b[0]), T(b[1]), T(b[2]))
                }
                if (m && o.push(S(d.normal)), g) {
                    var w = d.vertexNormals;
                    o.push(S(w[0]), S(w[1]), S(w[2]))
                }
                if (v && o.push(E(d.color)), y) {
                    var _ = d.vertexColors;
                    o.push(E(_[0]), E(_[1]), E(_[2]))
                }
            }

            function M(e, t, i) {
                return i ? e | 1 << t : e & ~(1 << t)
            }

            function S(e) {
                var t = e.x.toString() + e.y.toString() + e.z.toString();
                return void 0 !== c[t] ? c[t] : (c[t] = s.length / 3, s.push(e.x, e.y, e.z), c[t])
            }

            function E(e) {
                var t = e.r.toString() + e.g.toString() + e.b.toString();
                return void 0 !== l[t] ? l[t] : (l[t] = h.length, h.push(e.getHex()), l[t])
            }

            function T(e) {
                var t = e.x.toString() + e.y.toString();
                return void 0 !== p[t] ? p[t] : (p[t] = u.length / 2, u.push(e.x, e.y), p[t])
            }
            return e.data = {}, e.data.vertices = n, e.data.normals = s, h.length > 0 && (e.data.colors = h), u.length > 0 && (e.data.uvs = [u]), e.data.faces = o, e
        },
        clone: function() {
            return (new Vi).copy(this)
        },
        copy: function(e) {
            var t, i, n, r, a, o;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
            var s = e.vertices;
            for (t = 0, i = s.length; t < i; t++) this.vertices.push(s[t].clone());
            var c = e.colors;
            for (t = 0, i = c.length; t < i; t++) this.colors.push(c[t].clone());
            var h = e.faces;
            for (t = 0, i = h.length; t < i; t++) this.faces.push(h[t].clone());
            for (t = 0, i = e.faceVertexUvs.length; t < i; t++) {
                var l = e.faceVertexUvs[t];
                for (void 0 === this.faceVertexUvs[t] && (this.faceVertexUvs[t] = []), n = 0, r = l.length; n < r; n++) {
                    var u = l[n],
                        p = [];
                    for (a = 0, o = u.length; a < o; a++) {
                        var d = u[a];
                        p.push(d.clone())
                    }
                    this.faceVertexUvs[t].push(p)
                }
            }
            var f = e.morphTargets;
            for (t = 0, i = f.length; t < i; t++) {
                var m = {};
                if (m.name = f[t].name, void 0 !== f[t].vertices)
                    for (m.vertices = [], n = 0, r = f[t].vertices.length; n < r; n++) m.vertices.push(f[t].vertices[n].clone());
                if (void 0 !== f[t].normals)
                    for (m.normals = [], n = 0, r = f[t].normals.length; n < r; n++) m.normals.push(f[t].normals[n].clone());
                this.morphTargets.push(m)
            }
            var g = e.morphNormals;
            for (t = 0, i = g.length; t < i; t++) {
                var v = {};
                if (void 0 !== g[t].vertexNormals)
                    for (v.vertexNormals = [], n = 0, r = g[t].vertexNormals.length; n < r; n++) {
                        var y = g[t].vertexNormals[n],
                            x = {};
                        x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
                    }
                if (void 0 !== g[t].faceNormals)
                    for (v.faceNormals = [], n = 0, r = g[t].faceNormals.length; n < r; n++) v.faceNormals.push(g[t].faceNormals[n].clone());
                this.morphNormals.push(v)
            }
            var b = e.skinWeights;
            for (t = 0, i = b.length; t < i; t++) this.skinWeights.push(b[t].clone());
            var w = e.skinIndices;
            for (t = 0, i = w.length; t < i; t++) this.skinIndices.push(w[t].clone());
            var _ = e.lineDistances;
            for (t = 0, i = _.length; t < i; t++) this.lineDistances.push(_[t]);
            var M = e.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var S = e.boundingSphere;
            return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Object.defineProperty(Wi.prototype, "needsUpdate", {
        set: function(e) {
            !0 === e && this.version++
        }
    }), Object.assign(Wi.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setArray: function(e) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== e ? e.length / this.itemSize : 0, this.array = e, this
        },
        setDynamic: function(e) {
            return this.dynamic = e, this
        },
        copy: function(e) {
            return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.dynamic = e.dynamic, this
        },
        copyAt: function(e, t, i) {
            e *= this.itemSize, i *= t.itemSize;
            for (var n = 0, r = this.itemSize; n < r; n++) this.array[e + n] = t.array[i + n];
            return this
        },
        copyArray: function(e) {
            return this.array.set(e), this
        },
        copyColorsArray: function(e) {
            for (var t = this.array, i = 0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new Li), t[i++] = a.r, t[i++] = a.g, t[i++] = a.b
            }
            return this
        },
        copyVector2sArray: function(e) {
            for (var t = this.array, i = 0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), a = new $t), t[i++] = a.x, t[i++] = a.y
            }
            return this
        },
        copyVector3sArray: function(e) {
            for (var t = this.array, i = 0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new ii), t[i++] = a.x, t[i++] = a.y, t[i++] = a.z
            }
            return this
        },
        copyVector4sArray: function(e) {
            for (var t = this.array, i = 0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new pi), t[i++] = a.x, t[i++] = a.y, t[i++] = a.z, t[i++] = a.w
            }
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        },
        getX: function(e) {
            return this.array[e * this.itemSize]
        },
        setX: function(e, t) {
            return this.array[e * this.itemSize] = t, this
        },
        getY: function(e) {
            return this.array[e * this.itemSize + 1]
        },
        setY: function(e, t) {
            return this.array[e * this.itemSize + 1] = t, this
        },
        getZ: function(e) {
            return this.array[e * this.itemSize + 2]
        },
        setZ: function(e, t) {
            return this.array[e * this.itemSize + 2] = t, this
        },
        getW: function(e) {
            return this.array[e * this.itemSize + 3]
        },
        setW: function(e, t) {
            return this.array[e * this.itemSize + 3] = t, this
        },
        setXY: function(e, t, i) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this
        },
        setXYZ: function(e, t, i, n) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this
        },
        setXYZW: function(e, t, i, n, r) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this.array[e + 3] = r, this
        },
        onUpload: function(e) {
            return this.onUploadCallback = e, this
        },
        clone: function() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
    }), qi.prototype = Object.create(Wi.prototype), qi.prototype.constructor = qi, Xi.prototype = Object.create(Wi.prototype), Xi.prototype.constructor = Xi, Yi.prototype = Object.create(Wi.prototype), Yi.prototype.constructor = Yi, Zi.prototype = Object.create(Wi.prototype), Zi.prototype.constructor = Zi, Ji.prototype = Object.create(Wi.prototype), Ji.prototype.constructor = Ji, Ki.prototype = Object.create(Wi.prototype), Ki.prototype.constructor = Ki, Qi.prototype = Object.create(Wi.prototype), Qi.prototype.constructor = Qi, $i.prototype = Object.create(Wi.prototype), $i.prototype.constructor = $i, en.prototype = Object.create(Wi.prototype), en.prototype.constructor = en, Object.assign(tn.prototype, {
        computeGroups: function(e) {
            for (var t, i = [], n = void 0, r = e.faces, a = 0; a < r.length; a++) {
                var o = r[a];
                o.materialIndex !== n && (n = o.materialIndex, void 0 !== t && (t.count = 3 * a - t.start, i.push(t)), t = {
                    start: 3 * a,
                    materialIndex: n
                })
            }
            void 0 !== t && (t.count = 3 * a - t.start, i.push(t)), this.groups = i
        },
        fromGeometry: function(e) {
            var t, i = e.faces,
                n = e.vertices,
                r = e.faceVertexUvs,
                a = r[0] && r[0].length > 0,
                o = r[1] && r[1].length > 0,
                s = e.morphTargets,
                c = s.length;
            if (c > 0) {
                t = [];
                for (var h = 0; h < c; h++) t[h] = {
                    name: s[h].name,
                    data: []
                };
                this.morphTargets.position = t
            }
            var l, u = e.morphNormals,
                p = u.length;
            if (p > 0) {
                l = [];
                for (h = 0; h < p; h++) l[h] = {
                    name: u[h].name,
                    data: []
                };
                this.morphTargets.normal = l
            }
            var d = e.skinIndices,
                f = e.skinWeights,
                m = d.length === n.length,
                g = f.length === n.length;
            n.length > 0 && 0 === i.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
            for (h = 0; h < i.length; h++) {
                var v = i[h];
                this.vertices.push(n[v.a], n[v.b], n[v.c]);
                var y = v.vertexNormals;
                if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
                else {
                    var x = v.normal;
                    this.normals.push(x, x, x)
                }
                var b, w = v.vertexColors;
                if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
                else {
                    var _ = v.color;
                    this.colors.push(_, _, _)
                }
                if (!0 === a) void 0 !== (b = r[0][h]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new $t, new $t, new $t));
                if (!0 === o) void 0 !== (b = r[1][h]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new $t, new $t, new $t));
                for (var M = 0; M < c; M++) {
                    var S = s[M].vertices;
                    t[M].data.push(S[v.a], S[v.b], S[v.c])
                }
                for (M = 0; M < p; M++) {
                    var E = u[M].vertexNormals[h];
                    l[M].data.push(E.a, E.b, E.c)
                }
                m && this.skinIndices.push(d[v.a], d[v.b], d[v.c]), g && this.skinWeights.push(f[v.a], f[v.b], f[v.c])
            }
            return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
        }
    });
    var rn = 1;

    function an() {
        Object.defineProperty(this, "id", {
            value: rn += 2
        }), this.uuid = Qt.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {}
    }

    function on(e, t, i, n, r, a) {
        Vi.call(this), this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        }, this.fromBufferGeometry(new sn(e, t, i, n, r, a)), this.mergeVertices()
    }

    function sn(e, t, i, n, r, a) {
        an.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: e,
            height: t,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        };
        var o = this;
        e = e || 1, t = t || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
        var s = [],
            c = [],
            h = [],
            l = [],
            u = 0,
            p = 0;

        function d(e, t, i, n, r, a, d, f, m, g, v) {
            var y, x, b = a / m,
                w = d / g,
                _ = a / 2,
                M = d / 2,
                S = f / 2,
                E = m + 1,
                T = g + 1,
                A = 0,
                L = 0,
                P = new ii;
            for (x = 0; x < T; x++) {
                var R = x * w - M;
                for (y = 0; y < E; y++) {
                    var C = y * b - _;
                    P[e] = C * n, P[t] = R * r, P[i] = S, c.push(P.x, P.y, P.z), P[e] = 0, P[t] = 0, P[i] = f > 0 ? 1 : -1, h.push(P.x, P.y, P.z), l.push(y / m), l.push(1 - x / g), A += 1
                }
            }
            for (x = 0; x < g; x++)
                for (y = 0; y < m; y++) {
                    var O = u + y + E * x,
                        I = u + y + E * (x + 1),
                        D = u + (y + 1) + E * (x + 1),
                        z = u + (y + 1) + E * x;
                    s.push(O, I, z), s.push(I, D, z), L += 6
                }
            o.addGroup(p, L, v), p += L, u += A
        }
        d("z", "y", "x", -1, -1, i, t, e, a, r, 0), d("z", "y", "x", 1, -1, i, t, -e, a, r, 1), d("x", "z", "y", 1, 1, e, i, t, n, a, 2), d("x", "z", "y", 1, -1, e, i, -t, n, a, 3), d("x", "y", "z", 1, -1, e, t, i, n, r, 4), d("x", "y", "z", -1, -1, e, t, -i, n, r, 5), this.setIndex(s), this.addAttribute("position", new $i(c, 3)), this.addAttribute("normal", new $i(h, 3)), this.addAttribute("uv", new $i(l, 2))
    }

    function cn(e, t, i, n) {
        Vi.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: i,
            heightSegments: n
        }, this.fromBufferGeometry(new hn(e, t, i, n)), this.mergeVertices()
    }

    function hn(e, t, i, n) {
        an.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: i,
            heightSegments: n
        };
        var r, a, o = (e = e || 1) / 2,
            s = (t = t || 1) / 2,
            c = Math.floor(i) || 1,
            h = Math.floor(n) || 1,
            l = c + 1,
            u = h + 1,
            p = e / c,
            d = t / h,
            f = [],
            m = [],
            g = [],
            v = [];
        for (a = 0; a < u; a++) {
            var y = a * d - s;
            for (r = 0; r < l; r++) {
                var x = r * p - o;
                m.push(x, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - a / h)
            }
        }
        for (a = 0; a < h; a++)
            for (r = 0; r < c; r++) {
                var b = r + l * a,
                    w = r + l * (a + 1),
                    _ = r + 1 + l * (a + 1),
                    M = r + 1 + l * a;
                f.push(b, w, M), f.push(w, _, M)
            }
        this.setIndex(f), this.addAttribute("position", new $i(m, 3)), this.addAttribute("normal", new $i(g, 3)), this.addAttribute("uv", new $i(v, 2))
    }
    an.prototype = Object.assign(Object.create(y.prototype), {
        constructor: an,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(e) {
            Array.isArray(e) ? this.index = new(nn(e) > 65535 ? Qi : Ji)(e, 1) : this.index = e
        },
        addAttribute: function(e, t) {
            return t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : (this.attributes[e] = t, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(e, new Wi(arguments[1], arguments[2])))
        },
        getAttribute: function(e) {
            return this.attributes[e]
        },
        removeAttribute: function(e) {
            return delete this.attributes[e], this
        },
        addGroup: function(e, t, i) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: void 0 !== i ? i : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(e, t) {
            this.drawRange.start = e, this.drawRange.count = t
        },
        applyMatrix: function(e) {
            var t = this.attributes.position;
            void 0 !== t && (e.applyToBufferAttribute(t), t.needsUpdate = !0);
            var i = this.attributes.normal;
            void 0 !== i && ((new ni).getNormalMatrix(e).applyToBufferAttribute(i), i.needsUpdate = !0);
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function() {
            var e = new ei;
            return function(t) {
                return e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(),
        rotateY: function() {
            var e = new ei;
            return function(t) {
                return e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(),
        rotateZ: function() {
            var e = new ei;
            return function(t) {
                return e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(),
        translate: function() {
            var e = new ei;
            return function(t, i, n) {
                return e.makeTranslation(t, i, n), this.applyMatrix(e), this
            }
        }(),
        scale: function() {
            var e = new ei;
            return function(t, i, n) {
                return e.makeScale(t, i, n), this.applyMatrix(e), this
            }
        }(),
        lookAt: function() {
            var e = new Gi;
            return function(t) {
                e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
            }
        }(),
        center: function() {
            var e = new ii;
            return function() {
                return this.computeBoundingBox(), this.boundingBox.getCenter(e).negate(), this.translate(e.x, e.y, e.z), this
            }
        }(),
        setFromObject: function(e) {
            var t = e.geometry;
            if (e.isPoints || e.isLine) {
                var i = new $i(3 * t.vertices.length, 3),
                    n = new $i(3 * t.colors.length, 3);
                if (this.addAttribute("position", i.copyVector3sArray(t.vertices)), this.addAttribute("color", n.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
                    var r = new $i(t.lineDistances.length, 1);
                    this.addAttribute("lineDistance", r.copyArray(t.lineDistances))
                }
                null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
            } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
            return this
        },
        setFromPoints: function(e) {
            for (var t = [], i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                t.push(r.x, r.y, r.z || 0)
            }
            return this.addAttribute("position", new $i(t, 3)), this
        },
        updateFromObject: function(e) {
            var t, i = e.geometry;
            if (e.isMesh) {
                var n = i.__directGeometry;
                if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
                n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
            }
            return !0 === i.verticesNeedUpdate && (void 0 !== (t = this.attributes.position) && (t.copyVector3sArray(i.vertices), t.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (t = this.attributes.normal) && (t.copyVector3sArray(i.normals), t.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (t = this.attributes.color) && (t.copyColorsArray(i.colors), t.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (t = this.attributes.uv) && (t.copyVector2sArray(i.uvs), t.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (t = this.attributes.lineDistance) && (t.copyArray(i.lineDistances), t.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(e.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this
        },
        fromGeometry: function(e) {
            return e.__directGeometry = (new tn).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
        },
        fromDirectGeometry: function(e) {
            var t = new Float32Array(3 * e.vertices.length);
            if (this.addAttribute("position", new Wi(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
                var i = new Float32Array(3 * e.normals.length);
                this.addAttribute("normal", new Wi(i, 3).copyVector3sArray(e.normals))
            }
            if (e.colors.length > 0) {
                var n = new Float32Array(3 * e.colors.length);
                this.addAttribute("color", new Wi(n, 3).copyColorsArray(e.colors))
            }
            if (e.uvs.length > 0) {
                var r = new Float32Array(2 * e.uvs.length);
                this.addAttribute("uv", new Wi(r, 2).copyVector2sArray(e.uvs))
            }
            if (e.uvs2.length > 0) {
                var a = new Float32Array(2 * e.uvs2.length);
                this.addAttribute("uv2", new Wi(a, 2).copyVector2sArray(e.uvs2))
            }
            for (var o in this.groups = e.groups, e.morphTargets) {
                for (var s = [], c = e.morphTargets[o], h = 0, l = c.length; h < l; h++) {
                    var u = c[h],
                        p = new $i(3 * u.data.length, 3);
                    p.name = u.name, s.push(p.copyVector3sArray(u.data))
                }
                this.morphAttributes[o] = s
            }
            if (e.skinIndices.length > 0) {
                var d = new $i(4 * e.skinIndices.length, 4);
                this.addAttribute("skinIndex", d.copyVector4sArray(e.skinIndices))
            }
            if (e.skinWeights.length > 0) {
                var f = new $i(4 * e.skinWeights.length, 4);
                this.addAttribute("skinWeight", f.copyVector4sArray(e.skinWeights))
            }
            return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new gi);
            var e = this.attributes.position;
            void 0 !== e ? this.boundingBox.setFromBufferAttribute(e) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var e = new gi,
                t = new ii;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new vi);
                var i = this.attributes.position;
                if (i) {
                    var n = this.boundingSphere.center;
                    e.setFromBufferAttribute(i), e.getCenter(n);
                    for (var r = 0, a = 0, o = i.count; a < o; a++) t.x = i.getX(a), t.y = i.getY(a), t.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(t));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var e = this.index,
                t = this.attributes;
            if (t.position) {
                var i = t.position.array;
                if (void 0 === t.normal) this.addAttribute("normal", new Wi(new Float32Array(i.length), 3));
                else
                    for (var n = t.normal.array, r = 0, a = n.length; r < a; r++) n[r] = 0;
                var o, s, c, h = t.normal.array,
                    l = new ii,
                    u = new ii,
                    p = new ii,
                    d = new ii,
                    f = new ii;
                if (e) {
                    var m = e.array;
                    for (r = 0, a = e.count; r < a; r += 3) o = 3 * m[r + 0], s = 3 * m[r + 1], c = 3 * m[r + 2], l.fromArray(i, o), u.fromArray(i, s), p.fromArray(i, c), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[o] += d.x, h[o + 1] += d.y, h[o + 2] += d.z, h[s] += d.x, h[s + 1] += d.y, h[s + 2] += d.z, h[c] += d.x, h[c + 1] += d.y, h[c + 2] += d.z
                } else
                    for (r = 0, a = i.length; r < a; r += 9) l.fromArray(i, r), u.fromArray(i, r + 3), p.fromArray(i, r + 6), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[r] = d.x, h[r + 1] = d.y, h[r + 2] = d.z, h[r + 3] = d.x, h[r + 4] = d.y, h[r + 5] = d.z, h[r + 6] = d.x, h[r + 7] = d.y, h[r + 8] = d.z;
                this.normalizeNormals(), t.normal.needsUpdate = !0
            }
        },
        merge: function(e, t) {
            if (e && e.isBufferGeometry) {
                void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var i = this.attributes;
                for (var n in i)
                    if (void 0 !== e.attributes[n])
                        for (var r = i[n].array, a = e.attributes[n], o = a.array, s = 0, c = a.itemSize * t; s < o.length; s++, c++) r[c] = o[s];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
        },
        normalizeNormals: function() {
            var e = new ii;
            return function() {
                for (var t = this.attributes.normal, i = 0, n = t.count; i < n; i++) e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.normalize(), t.setXYZ(i, e.x, e.y, e.z)
            }
        }(),
        toNonIndexed: function() {
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var e = new an,
                t = this.index.array,
                i = this.attributes;
            for (var n in i) {
                for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(t.length * o), c = 0, h = 0, l = 0, u = t.length; l < u; l++) {
                    c = t[l] * o;
                    for (var p = 0; p < o; p++) s[h++] = a[c++]
                }
                e.addAttribute(n, new Wi(s, o))
            }
            var d = this.groups;
            for (l = 0, u = d.length; l < u; l++) {
                var f = d[l];
                e.addGroup(f.start, f.count, f.materialIndex)
            }
            return e
        },
        toJSON: function() {
            var e = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
                var t = this.parameters;
                for (var i in t) void 0 !== t[i] && (e[i] = t[i]);
                return e
            }
            e.data = {
                attributes: {}
            };
            var n = this.index;
            if (null !== n) {
                var r = Array.prototype.slice.call(n.array);
                e.data.index = {
                    type: n.array.constructor.name,
                    array: r
                }
            }
            var a = this.attributes;
            for (var i in a) {
                var o = a[i];
                r = Array.prototype.slice.call(o.array);
                e.data.attributes[i] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: r,
                    normalized: o.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (e.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            }), e
        },
        clone: function() {
            return (new an).copy(this)
        },
        copy: function(e) {
            var t, i, n;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
            var r = e.index;
            null !== r && this.setIndex(r.clone());
            var a = e.attributes;
            for (t in a) {
                var o = a[t];
                this.addAttribute(t, o.clone())
            }
            var s = e.morphAttributes;
            for (t in s) {
                var c = [],
                    h = s[t];
                for (i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
                this.morphAttributes[t] = c
            }
            var l = e.groups;
            for (i = 0, n = l.length; i < n; i++) {
                var u = l[i];
                this.addGroup(u.start, u.count, u.materialIndex)
            }
            var p = e.boundingBox;
            null !== p && (this.boundingBox = p.clone());
            var d = e.boundingSphere;
            return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), on.prototype = Object.create(Vi.prototype), on.prototype.constructor = on, sn.prototype = Object.create(an.prototype), sn.prototype.constructor = sn, cn.prototype = Object.create(Vi.prototype), cn.prototype.constructor = cn, hn.prototype = Object.create(an.prototype), hn.prototype.constructor = hn;
    var ln, un, pn, dn, fn, mn, gn, vn, yn, xn, bn, wn, _n = 0;

    function Mn() {
        Object.defineProperty(this, "id", {
            value: _n++
        }), this.uuid = Qt.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = X, this.side = G, this.flatShading = !1, this.vertexColors = j, this.opacity = 1, this.transparent = !1, this.blendSrc = se, this.blendDst = ce, this.blendEquation = Q, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = ve, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    function Sn(e) {
        Mn.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
    }

    function En(e, t) {
        this.origin = void 0 !== e ? e : new ii, this.direction = void 0 !== t ? t : new ii
    }

    function Tn(e, t, i) {
        this.a = void 0 !== e ? e : new ii, this.b = void 0 !== t ? t : new ii, this.c = void 0 !== i ? i : new ii
    }

    function An(e) {
        Mn.call(this), this.type = "MeshBasicMaterial", this.color = new Li(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = _e, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(e)
    }

    function Ln(e, t) {
        Gi.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new an, this.material = void 0 !== t ? t : new An({
            color: 16777215 * Math.random()
        }), this.drawMode = Bt, this.updateMorphTargets()
    }

    function Pn(e, t, i, n) {
        var r, a, o = new Li(0),
            s = 0,
            c = null,
            h = 0;

        function l(e, i) {
            t.buffers.color.setClear(e.r, e.g, e.b, i, n)
        }
        return {
            getClearColor: function() {
                return o
            },
            setClearColor: function(e, t) {
                o.set(e), l(o, s = void 0 !== t ? t : 1)
            },
            getClearAlpha: function() {
                return s
            },
            setClearAlpha: function(e) {
                l(o, s = e)
            },
            render: function(t, n, u, p) {
                var d = n.background;
                if (null === d ? (l(o, s), c = null, h = 0) : d && d.isColor && (l(d, 1), p = !0, c = null, h = 0), (e.autoClear || p) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), d && (d.isCubeTexture || d.isWebGLRenderTargetCube)) {
                    void 0 === a && ((a = new Ln(new sn(1, 1, 1), new Sn({
                        type: "BackgroundCubeMaterial",
                        uniforms: wi(Ci.cube.uniforms),
                        vertexShader: Ci.cube.vertexShader,
                        fragmentShader: Ci.cube.fragmentShader,
                        side: k,
                        depthTest: !0,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.removeAttribute("normal"), a.geometry.removeAttribute("uv"), a.onBeforeRender = function(e, t, i) {
                        this.matrixWorld.copyPosition(i.matrixWorld)
                    }, Object.defineProperty(a.material, "map", {
                        get: function() {
                            return this.uniforms.tCube.value
                        }
                    }), i.update(a));
                    var f = d.isWebGLRenderTargetCube ? d.texture : d;
                    a.material.uniforms.tCube.value = f, a.material.uniforms.tFlip.value = d.isWebGLRenderTargetCube ? 1 : -1, c === d && h === f.version || (a.material.needsUpdate = !0, c = d, h = f.version), t.unshift(a, a.geometry, a.material, 0, null)
                } else d && d.isTexture && (void 0 === r && ((r = new Ln(new hn(2, 2), new Sn({
                    type: "BackgroundMaterial",
                    uniforms: wi(Ci.background.uniforms),
                    vertexShader: Ci.background.vertexShader,
                    fragmentShader: Ci.background.fragmentShader,
                    side: G,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))).geometry.removeAttribute("normal"), Object.defineProperty(r.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value
                    }
                }), i.update(r)), r.material.uniforms.t2D.value = d, !0 === d.matrixAutoUpdate && d.updateMatrix(), r.material.uniforms.uvTransform.value.copy(d.matrix), c === d && h === d.version || (r.material.needsUpdate = !0, c = d, h = d.version), t.unshift(r, r.geometry, r.material, 0, null))
            }
        }
    }

    function Rn(e, t, i, n) {
        var r;
        this.setMode = function(e) {
            r = e
        }, this.render = function(t, n) {
            e.drawArrays(r, t, n), i.update(n, r)
        }, this.renderInstances = function(a, o, s) {
            var c;
            if (n.isWebGL2) c = e;
            else if (null === (c = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            c[n.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, o, s, a.maxInstancedCount), i.update(s, r, a.maxInstancedCount)
        }
    }

    function Cn(e, t, i) {
        var n;

        function r(t) {
            if ("highp" === t) {
                if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                t = "mediump"
            }
            return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        var a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext,
            o = void 0 !== i.precision ? i.precision : "highp",
            s = r(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
        var c = !0 === i.logarithmicDepthBuffer,
            h = e.getParameter(34930),
            l = e.getParameter(35660),
            u = e.getParameter(3379),
            p = e.getParameter(34076),
            d = e.getParameter(34921),
            f = e.getParameter(36347),
            m = e.getParameter(36348),
            g = e.getParameter(36349),
            v = l > 0,
            y = a || !!t.get("OES_texture_float");
        return {
            isWebGL2: a,
            getMaxAnisotropy: function() {
                if (void 0 !== n) return n;
                var i = t.get("EXT_texture_filter_anisotropic");
                return n = null !== i ? e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: r,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: l,
            maxTextureSize: u,
            maxCubemapSize: p,
            maxAttributes: d,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: v && y
        }
    }

    function On() {
        var e = this,
            t = null,
            i = 0,
            n = !1,
            r = !1,
            a = new yi,
            o = new ni,
            s = {
                value: null,
                needsUpdate: !1
            };

        function c() {
            s.value !== t && (s.value = t, s.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0
        }

        function h(t, i, n, r) {
            var c = null !== t ? t.length : 0,
                h = null;
            if (0 !== c) {
                if (h = s.value, !0 !== r || null === h) {
                    var l = n + 4 * c,
                        u = i.matrixWorldInverse;
                    o.getNormalMatrix(u), (null === h || h.length < l) && (h = new Float32Array(l));
                    for (var p = 0, d = n; p !== c; ++p, d += 4) a.copy(t[p]).applyMatrix4(u, o), a.normal.toArray(h, d), h[d + 3] = a.constant
                }
                s.value = h, s.needsUpdate = !0
            }
            return e.numPlanes = c, h
        }
        this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, r, a) {
            var o = 0 !== e.length || r || 0 !== i || n;
            return n = r, t = h(e, a, 0), i = e.length, o
        }, this.beginShadows = function() {
            r = !0, h(null)
        }, this.endShadows = function() {
            r = !1, c()
        }, this.setState = function(e, a, o, l, u, p) {
            if (!n || null === e || 0 === e.length || r && !o) r ? h(null) : c();
            else {
                var d = r ? 0 : i,
                    f = 4 * d,
                    m = u.clippingState || null;
                s.value = m, m = h(e, l, f, p);
                for (var g = 0; g !== f; ++g) m[g] = t[g];
                u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
            }
        }
    }

    function In(e) {
        var t = {};
        return {
            get: function(i) {
                if (void 0 !== t[i]) return t[i];
                var n;
                switch (i) {
                    case "WEBGL_depth_texture":
                        n = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        n = e.getExtension(i)
                }
                return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), t[i] = n, n
            }
        }
    }

    function Dn(e, t, i) {
        var n = {},
            r = {};

        function a(e) {
            var o = e.target,
                s = n[o.id];
            for (var c in null !== s.index && t.remove(s.index), s.attributes) t.remove(s.attributes[c]);
            o.removeEventListener("dispose", a), delete n[o.id];
            var h = r[s.id];
            h && (t.remove(h), delete r[s.id]), i.memory.geometries--
        }
        return {
            get: function(e, t) {
                var r = n[t.id];
                return r || (t.addEventListener("dispose", a), t.isBufferGeometry ? r = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new an).setFromObject(e)), r = t._bufferGeometry), n[t.id] = r, i.memory.geometries++, r)
            },
            update: function(e) {
                var i = e.index,
                    n = e.attributes;
                for (var r in null !== i && t.update(i, 34963), n) t.update(n[r], 34962);
                var a = e.morphAttributes;
                for (var r in a)
                    for (var o = a[r], s = 0, c = o.length; s < c; s++) t.update(o[s], 34962)
            },
            getWireframeAttribute: function(e) {
                var i = r[e.id];
                if (i) return i;
                var n, a = [],
                    o = e.index,
                    s = e.attributes;
                if (null !== o)
                    for (var c = 0, h = (n = o.array).length; c < h; c += 3) {
                        var l = n[c + 0],
                            u = n[c + 1],
                            p = n[c + 2];
                        a.push(l, u, u, p, p, l)
                    } else
                        for (c = 0, h = (n = s.position.array).length / 3 - 1; c < h; c += 3) l = c + 0, u = c + 1, p = c + 2, a.push(l, u, u, p, p, l);
                return i = new(nn(a) > 65535 ? Qi : Ji)(a, 1), t.update(i, 34963), r[e.id] = i, i
            }
        }
    }

    function zn(e, t, i, n) {
        var r, a, o;
        this.setMode = function(e) {
            r = e
        }, this.setIndex = function(e) {
            a = e.type, o = e.bytesPerElement
        }, this.render = function(t, n) {
            e.drawElements(r, n, a, t * o), i.update(n, r)
        }, this.renderInstances = function(s, c, h) {
            var l;
            if (n.isWebGL2) l = e;
            else if (null === (l = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[n.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, h, a, c * o, s.maxInstancedCount), i.update(h, r, s.maxInstancedCount)
        }
    }

    function Nn(e) {
        var t = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: t,
            programs: null,
            autoReset: !0,
            reset: function() {
                t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
            },
            update: function(e, i, n) {
                switch (n = n || 1, t.calls++, i) {
                    case 4:
                        t.triangles += n * (e / 3);
                        break;
                    case 5:
                    case 6:
                        t.triangles += n * (e - 2);
                        break;
                    case 1:
                        t.lines += n * (e / 2);
                        break;
                    case 3:
                        t.lines += n * (e - 1);
                        break;
                    case 2:
                        t.lines += n * e;
                        break;
                    case 0:
                        t.points += n * e;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                }
            }
        }
    }

    function Un(e, t) {
        return Math.abs(t[1]) - Math.abs(e[1])
    }

    function Bn(e) {
        var t = {},
            i = new Float32Array(8);
        return {
            update: function(n, r, a, o) {
                var s = n.morphTargetInfluences,
                    c = s.length,
                    h = t[r.id];
                if (void 0 === h) {
                    h = [];
                    for (var l = 0; l < c; l++) h[l] = [l, 0];
                    t[r.id] = h
                }
                var u = a.morphTargets && r.morphAttributes.position,
                    p = a.morphNormals && r.morphAttributes.normal;
                for (l = 0; l < c; l++) 0 !== (d = h[l])[1] && (u && r.removeAttribute("morphTarget" + l), p && r.removeAttribute("morphNormal" + l));
                for (l = 0; l < c; l++)(d = h[l])[0] = l, d[1] = s[l];
                for (h.sort(Un), l = 0; l < 8; l++) {
                    var d;
                    if (d = h[l]) {
                        var f = d[0],
                            m = d[1];
                        if (m) {
                            u && r.addAttribute("morphTarget" + l, u[f]), p && r.addAttribute("morphNormal" + l, p[f]), i[l] = m;
                            continue
                        }
                    }
                    i[l] = 0
                }
                o.getUniforms().setValue(e, "morphTargetInfluences", i)
            }
        }
    }

    function Fn(e, t) {
        var i = {};
        return {
            update: function(n) {
                var r = t.render.frame,
                    a = n.geometry,
                    o = e.get(n, a);
                return i[o.id] !== r && (a.isGeometry && o.updateFromObject(n), e.update(o), i[o.id] = r), o
            },
            dispose: function() {
                i = {}
            }
        }
    }

    function Gn(e, t, i, n, r, a, o, s, c, h) {
        e = void 0 !== e ? e : [], t = void 0 !== t ? t : Ce, ui.call(this, e, t, i, n, r, a, o, s, c, h), this.flipY = !1
    }

    function kn(e, t, i, n) {
        ui.call(this, null), this.image = {
            data: e,
            width: t,
            height: i,
            depth: n
        }, this.magFilter = ke, this.minFilter = ke, this.generateMipmaps = !1, this.flipY = !1
    }
    Mn.prototype = Object.assign(Object.create(y.prototype), {
        constructor: Mn,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(e) {
            if (void 0 !== e)
                for (var t in e) {
                    var i = e[t];
                    if (void 0 !== i)
                        if ("shading" !== t) {
                            var n = this[t];
                            void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                        } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                    else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
                }
        },
        toJSON: function(e) {
            var t = void 0 === e || "string" == typeof e;
            t && (e = {
                textures: {},
                images: {}
            });
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };

            function n(e) {
                var t = [];
                for (var i in e) {
                    var n = e[i];
                    delete n.metadata, t.push(n)
                }
                return t
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, i.reflectivity = this.reflectivity, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== X && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), this.side !== G && (i.side = this.side), this.vertexColors !== j && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), t) {
                var r = n(e.textures),
                    a = n(e.images);
                r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a)
            }
            return i
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.name = e.name, this.fog = e.fog, this.lights = e.lights, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.userData = JSON.parse(JSON.stringify(e.userData)), this.clipShadows = e.clipShadows, this.clipIntersection = e.clipIntersection;
            var t = e.clippingPlanes,
                i = null;
            if (null !== t) {
                var n = t.length;
                i = new Array(n);
                for (var r = 0; r !== n; ++r) i[r] = t[r].clone()
            }
            return this.clippingPlanes = i, this.shadowSide = e.shadowSide, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Sn.prototype = Object.create(Mn.prototype), Sn.prototype.constructor = Sn, Sn.prototype.isShaderMaterial = !0, Sn.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = wi(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
    }, Sn.prototype.toJSON = function(e) {
        var t = Mn.prototype.toJSON.call(this, e);
        for (var i in t.uniforms = {}, this.uniforms) {
            var n = this.uniforms[i].value;
            n.isTexture ? t.uniforms[i] = {
                type: "t",
                value: n.toJSON(e).uuid
            } : n.isColor ? t.uniforms[i] = {
                type: "c",
                value: n.getHex()
            } : n.isVector2 ? t.uniforms[i] = {
                type: "v2",
                value: n.toArray()
            } : n.isVector3 ? t.uniforms[i] = {
                type: "v3",
                value: n.toArray()
            } : n.isVector4 ? t.uniforms[i] = {
                type: "v4",
                value: n.toArray()
            } : n.isMatrix4 ? t.uniforms[i] = {
                type: "m4",
                value: n.toArray()
            } : t.uniforms[i] = {
                value: n
            }
        }
        return Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
    }, Object.assign(En.prototype, {
        set: function(e, t) {
            return this.origin.copy(e), this.direction.copy(t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
        },
        at: function(e, t) {
            return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"), t = new ii), t.copy(this.direction).multiplyScalar(e).add(this.origin)
        },
        lookAt: function(e) {
            return this.direction.copy(e).sub(this.origin).normalize(), this
        },
        recast: function() {
            var e = new ii;
            return function(t) {
                return this.origin.copy(this.at(t, e)), this
            }
        }(),
        closestPointToPoint: function(e, t) {
            void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new ii), t.subVectors(e, this.origin);
            var i = t.dot(this.direction);
            return i < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(i).add(this.origin)
        },
        distanceToPoint: function(e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        },
        distanceSqToPoint: function() {
            var e = new ii;
            return function(t) {
                var i = e.subVectors(t, this.origin).dot(this.direction);
                return i < 0 ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(i).add(this.origin), e.distanceToSquared(t))
            }
        }(),
        distanceSqToSegment: (un = new ii, pn = new ii, dn = new ii, function(e, t, i, n) {
            un.copy(e).add(t).multiplyScalar(.5), pn.copy(t).sub(e).normalize(), dn.copy(this.origin).sub(un);
            var r, a, o, s, c = .5 * e.distanceTo(t),
                h = -this.direction.dot(pn),
                l = dn.dot(this.direction),
                u = -dn.dot(pn),
                p = dn.lengthSq(),
                d = Math.abs(1 - h * h);
            if (d > 0)
                if (a = h * l - u, s = c * d, (r = h * u - l) >= 0)
                    if (a >= -s)
                        if (a <= s) {
                            var f = 1 / d;
                            o = (r *= f) * (r + h * (a *= f) + 2 * l) + a * (h * r + a + 2 * u) + p
                        } else a = c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
            else a = -c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
            else a <= -s ? o = -(r = Math.max(0, -(-h * c + l))) * r + (a = r > 0 ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p : a <= s ? (r = 0, o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p) : o = -(r = Math.max(0, -(h * c + l))) * r + (a = r > 0 ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p;
            else a = h > 0 ? -c : c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
            return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(pn).multiplyScalar(a).add(un), o
        }),
        intersectSphere: function() {
            var e = new ii;
            return function(t, i) {
                e.subVectors(t.center, this.origin);
                var n = e.dot(this.direction),
                    r = e.dot(e) - n * n,
                    a = t.radius * t.radius;
                if (r > a) return null;
                var o = Math.sqrt(a - r),
                    s = n - o,
                    c = n + o;
                return s < 0 && c < 0 ? null : s < 0 ? this.at(c, i) : this.at(s, i)
            }
        }(),
        intersectsSphere: function(e) {
            return this.distanceSqToPoint(e.center) <= e.radius * e.radius
        },
        distanceToPlane: function(e) {
            var t = e.normal.dot(this.direction);
            if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
            var i = -(this.origin.dot(e.normal) + e.constant) / t;
            return i >= 0 ? i : null
        },
        intersectPlane: function(e, t) {
            var i = this.distanceToPlane(e);
            return null === i ? null : this.at(i, t)
        },
        intersectsPlane: function(e) {
            var t = e.distanceToPoint(this.origin);
            return 0 === t || e.normal.dot(this.direction) * t < 0
        },
        intersectBox: function(e, t) {
            var i, n, r, a, o, s, c = 1 / this.direction.x,
                h = 1 / this.direction.y,
                l = 1 / this.direction.z,
                u = this.origin;
            return c >= 0 ? (i = (e.min.x - u.x) * c, n = (e.max.x - u.x) * c) : (i = (e.max.x - u.x) * c, n = (e.min.x - u.x) * c), h >= 0 ? (r = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (r = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), i > a || r > n ? null : ((r > i || i != i) && (i = r), (a < n || n != n) && (n = a), l >= 0 ? (o = (e.min.z - u.z) * l, s = (e.max.z - u.z) * l) : (o = (e.max.z - u.z) * l, s = (e.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i != i) && (i = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, t)))
        },
        intersectsBox: (ln = new ii, function(e) {
            return null !== this.intersectBox(e, ln)
        }),
        intersectTriangle: function() {
            var e = new ii,
                t = new ii,
                i = new ii,
                n = new ii;
            return function(r, a, o, s, c) {
                t.subVectors(a, r), i.subVectors(o, r), n.crossVectors(t, i);
                var h, l = this.direction.dot(n);
                if (l > 0) {
                    if (s) return null;
                    h = 1
                } else {
                    if (!(l < 0)) return null;
                    h = -1, l = -l
                }
                e.subVectors(this.origin, r);
                var u = h * this.direction.dot(i.crossVectors(e, i));
                if (u < 0) return null;
                var p = h * this.direction.dot(t.cross(e));
                if (p < 0) return null;
                if (u + p > l) return null;
                var d = -h * e.dot(n);
                return d < 0 ? null : this.at(d / l, c)
            }
        }(),
        applyMatrix4: function(e) {
            return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
        },
        equals: function(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
    }), Object.assign(Tn, {
        getNormal: (mn = new ii, function(e, t, i, n) {
            void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"), n = new ii), n.subVectors(i, t), mn.subVectors(e, t), n.cross(mn);
            var r = n.lengthSq();
            return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
        }),
        getBarycoord: function() {
            var e = new ii,
                t = new ii,
                i = new ii;
            return function(n, r, a, o, s) {
                e.subVectors(o, r), t.subVectors(a, r), i.subVectors(n, r);
                var c = e.dot(e),
                    h = e.dot(t),
                    l = e.dot(i),
                    u = t.dot(t),
                    p = t.dot(i),
                    d = c * u - h * h;
                if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new ii), 0 === d) return s.set(-2, -1, -1);
                var f = 1 / d,
                    m = (u * l - h * p) * f,
                    g = (c * p - h * l) * f;
                return s.set(1 - m - g, g, m)
            }
        }(),
        containsPoint: function() {
            var e = new ii;
            return function(t, i, n, r) {
                return Tn.getBarycoord(t, i, n, r, e), e.x >= 0 && e.y >= 0 && e.x + e.y <= 1
            }
        }(),
        getUV: (fn = new ii, function(e, t, i, n, r, a, o, s) {
            return this.getBarycoord(e, t, i, n, fn), s.set(0, 0), s.addScaledVector(r, fn.x), s.addScaledVector(a, fn.y), s.addScaledVector(o, fn.z), s
        })
    }), Object.assign(Tn.prototype, {
        set: function(e, t, i) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
        },
        setFromPointsAndIndices: function(e, t, i, n) {
            return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
        },
        getArea: function() {
            var e = new ii,
                t = new ii;
            return function() {
                return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
            }
        }(),
        getMidpoint: function(e) {
            return void 0 === e && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new ii), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        getNormal: function(e) {
            return Tn.getNormal(this.a, this.b, this.c, e)
        },
        getPlane: function(e) {
            return void 0 === e && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new ii), e.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        getBarycoord: function(e, t) {
            return Tn.getBarycoord(e, this.a, this.b, this.c, t)
        },
        containsPoint: function(e) {
            return Tn.containsPoint(e, this.a, this.b, this.c)
        },
        getUV: function(e, t, i, n, r) {
            return Tn.getUV(e, this.a, this.b, this.c, t, i, n, r)
        },
        intersectsBox: function(e) {
            return e.intersectsTriangle(this)
        },
        closestPointToPoint: (gn = new ii, vn = new ii, yn = new ii, xn = new ii, bn = new ii, wn = new ii, function(e, t) {
            void 0 === t && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new ii);
            var i, n, r = this.a,
                a = this.b,
                o = this.c;
            gn.subVectors(a, r), vn.subVectors(o, r), xn.subVectors(e, r);
            var s = gn.dot(xn),
                c = vn.dot(xn);
            if (s <= 0 && c <= 0) return t.copy(r);
            bn.subVectors(e, a);
            var h = gn.dot(bn),
                l = vn.dot(bn);
            if (h >= 0 && l <= h) return t.copy(a);
            var u = s * l - h * c;
            if (u <= 0 && s >= 0 && h <= 0) return i = s / (s - h), t.copy(r).addScaledVector(gn, i);
            wn.subVectors(e, o);
            var p = gn.dot(wn),
                d = vn.dot(wn);
            if (d >= 0 && p <= d) return t.copy(o);
            var f = p * c - s * d;
            if (f <= 0 && c >= 0 && d <= 0) return n = c / (c - d), t.copy(r).addScaledVector(vn, n);
            var m = h * d - p * l;
            if (m <= 0 && l - h >= 0 && p - d >= 0) return yn.subVectors(o, a), n = (l - h) / (l - h + (p - d)), t.copy(a).addScaledVector(yn, n);
            var g = 1 / (m + f + u);
            return i = f * g, n = u * g, t.copy(r).addScaledVector(gn, i).addScaledVector(vn, n)
        }),
        equals: function(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }), An.prototype = Object.create(Mn.prototype), An.prototype.constructor = An, An.prototype.isMeshBasicMaterial = !0, An.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
    }, Ln.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Ln,
        isMesh: !0,
        setDrawMode: function(e) {
            this.drawMode = e
        },
        copy: function(e) {
            return Gi.prototype.copy.call(this, e), this.drawMode = e.drawMode, void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this
        },
        updateMorphTargets: function() {
            var e, t, i, n = this.geometry;
            if (n.isBufferGeometry) {
                var r = n.morphAttributes,
                    a = Object.keys(r);
                if (a.length > 0) {
                    var o = r[a[0]];
                    if (void 0 !== o)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = o.length; e < t; e++) i = o[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = e
                }
            } else {
                var s = n.morphTargets;
                if (void 0 !== s && s.length > 0)
                    for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = s.length; e < t; e++) i = s[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = e
            }
        },
        raycast: function() {
            var e = new ei,
                t = new En,
                i = new vi,
                n = new ii,
                r = new ii,
                a = new ii,
                o = new ii,
                s = new ii,
                c = new ii,
                h = new $t,
                l = new $t,
                u = new $t,
                p = new ii,
                d = new ii;

            function f(e, t, i, n, r, a, o, s) {
                if (null === (t.side === k ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, t.side !== H, s))) return null;
                d.copy(s), d.applyMatrix4(e.matrixWorld);
                var c = i.ray.origin.distanceTo(d);
                return c < i.near || c > i.far ? null : {
                    distance: c,
                    point: d.clone(),
                    object: e
                }
            }

            function m(e, t, i, o, s, c, d, m, g) {
                n.fromBufferAttribute(s, d), r.fromBufferAttribute(s, m), a.fromBufferAttribute(s, g);
                var v = f(e, t, i, o, n, r, a, p);
                if (v) {
                    c && (h.fromBufferAttribute(c, d), l.fromBufferAttribute(c, m), u.fromBufferAttribute(c, g), v.uv = Tn.getUV(p, n, r, a, h, l, u, new $t));
                    var y = new Di(d, m, g);
                    Tn.getNormal(n, r, a, y.normal), v.face = y
                }
                return v
            }
            return function(d, g) {
                var v, y = this.geometry,
                    x = this.material,
                    b = this.matrixWorld;
                if (void 0 !== x && (null === y.boundingSphere && y.computeBoundingSphere(), i.copy(y.boundingSphere), i.applyMatrix4(b), !1 !== d.ray.intersectsSphere(i) && (e.getInverse(b), t.copy(d.ray).applyMatrix4(e), null === y.boundingBox || !1 !== t.intersectsBox(y.boundingBox))))
                    if (y.isBufferGeometry) {
                        var w, _, M, S, E, T, A, L, P, R = y.index,
                            C = y.attributes.position,
                            O = y.attributes.uv,
                            I = y.groups,
                            D = y.drawRange;
                        if (null !== R)
                            if (Array.isArray(x))
                                for (S = 0, T = I.length; S < T; S++)
                                    for (P = x[(L = I[S]).materialIndex], E = Math.max(L.start, D.start), A = Math.min(L.start + L.count, D.start + D.count); E < A; E += 3) w = R.getX(E), _ = R.getX(E + 1), M = R.getX(E + 2), (v = m(this, P, d, t, C, O, w, _, M)) && (v.faceIndex = Math.floor(E / 3), g.push(v));
                            else
                                for (S = Math.max(0, D.start), T = Math.min(R.count, D.start + D.count); S < T; S += 3) w = R.getX(S), _ = R.getX(S + 1), M = R.getX(S + 2), (v = m(this, x, d, t, C, O, w, _, M)) && (v.faceIndex = Math.floor(S / 3), g.push(v));
                        else if (void 0 !== C)
                            if (Array.isArray(x))
                                for (S = 0, T = I.length; S < T; S++)
                                    for (P = x[(L = I[S]).materialIndex], E = Math.max(L.start, D.start), A = Math.min(L.start + L.count, D.start + D.count); E < A; E += 3)(v = m(this, P, d, t, C, O, w = E, _ = E + 1, M = E + 2)) && (v.faceIndex = Math.floor(E / 3), g.push(v));
                            else
                                for (S = Math.max(0, D.start), T = Math.min(C.count, D.start + D.count); S < T; S += 3)(v = m(this, x, d, t, C, O, w = S, _ = S + 1, M = S + 2)) && (v.faceIndex = Math.floor(S / 3), g.push(v))
                    } else if (y.isGeometry) {
                    var z, N, U, B, F = Array.isArray(x),
                        G = y.vertices,
                        k = y.faces,
                        H = y.faceVertexUvs[0];
                    H.length > 0 && (B = H);
                    for (var j = 0, V = k.length; j < V; j++) {
                        var W = k[j],
                            q = F ? x[W.materialIndex] : x;
                        if (void 0 !== q) {
                            if (z = G[W.a], N = G[W.b], U = G[W.c], !0 === q.morphTargets) {
                                var X = y.morphTargets,
                                    Y = this.morphTargetInfluences;
                                n.set(0, 0, 0), r.set(0, 0, 0), a.set(0, 0, 0);
                                for (var Z = 0, J = X.length; Z < J; Z++) {
                                    var K = Y[Z];
                                    if (0 !== K) {
                                        var Q = X[Z].vertices;
                                        n.addScaledVector(o.subVectors(Q[W.a], z), K), r.addScaledVector(s.subVectors(Q[W.b], N), K), a.addScaledVector(c.subVectors(Q[W.c], U), K)
                                    }
                                }
                                n.add(z), r.add(N), a.add(U), z = n, N = r, U = a
                            }
                            if (v = f(this, q, d, t, z, N, U, p)) {
                                if (B && B[j]) {
                                    var $ = B[j];
                                    h.copy($[0]), l.copy($[1]), u.copy($[2]), v.uv = Tn.getUV(p, z, N, U, h, l, u, new $t)
                                }
                                v.face = W, v.faceIndex = j, g.push(v)
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Gn.prototype = Object.create(ui.prototype), Gn.prototype.constructor = Gn, Gn.prototype.isCubeTexture = !0, Object.defineProperty(Gn.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(e) {
            this.image = e
        }
    }), kn.prototype = Object.create(ui.prototype), kn.prototype.constructor = kn, kn.prototype.isDataTexture3D = !0;
    var Hn = new ui,
        jn = new kn,
        Vn = new Gn;

    function Wn() {
        this.seq = [], this.map = {}
    }
    var qn = [],
        Xn = [],
        Yn = new Float32Array(16),
        Zn = new Float32Array(9),
        Jn = new Float32Array(4);

    function Kn(e, t, i) {
        var n = e[0];
        if (n <= 0 || n > 0) return e;
        var r = t * i,
            a = qn[r];
        if (void 0 === a && (a = new Float32Array(r), qn[r] = a), 0 !== t) {
            n.toArray(a, 0);
            for (var o = 1, s = 0; o !== t; ++o) s += i, e[o].toArray(a, s)
        }
        return a
    }

    function Qn(e, t) {
        if (e.length !== t.length) return !1;
        for (var i = 0, n = e.length; i < n; i++)
            if (e[i] !== t[i]) return !1;
        return !0
    }

    function $n(e, t) {
        for (var i = 0, n = t.length; i < n; i++) e[i] = t[i]
    }

    function er(e, t) {
        var i = Xn[t];
        void 0 === i && (i = new Int32Array(t), Xn[t] = i);
        for (var n = 0; n !== t; ++n) i[n] = e.allocTextureUnit();
        return i
    }

    function tr(e, t) {
        var i = this.cache;
        i[0] !== t && (e.uniform1f(this.addr, t), i[0] = t)
    }

    function ir(e, t) {
        var i = this.cache;
        i[0] !== t && (e.uniform1i(this.addr, t), i[0] = t)
    }

    function nr(e, t) {
        var i = this.cache;
        if (void 0 !== t.x) i[0] === t.x && i[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
        else {
            if (Qn(i, t)) return;
            e.uniform2fv(this.addr, t), $n(i, t)
        }
    }

    function rr(e, t) {
        var i = this.cache;
        if (void 0 !== t.x) i[0] === t.x && i[1] === t.y && i[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
        else if (void 0 !== t.r) i[0] === t.r && i[1] === t.g && i[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), i[0] = t.r, i[1] = t.g, i[2] = t.b);
        else {
            if (Qn(i, t)) return;
            e.uniform3fv(this.addr, t), $n(i, t)
        }
    }

    function ar(e, t) {
        var i = this.cache;
        if (void 0 !== t.x) i[0] === t.x && i[1] === t.y && i[2] === t.z && i[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
        else {
            if (Qn(i, t)) return;
            e.uniform4fv(this.addr, t), $n(i, t)
        }
    }

    function or(e, t) {
        var i = this.cache,
            n = t.elements;
        if (void 0 === n) {
            if (Qn(i, t)) return;
            e.uniformMatrix2fv(this.addr, !1, t), $n(i, t)
        } else {
            if (Qn(i, n)) return;
            Jn.set(n), e.uniformMatrix2fv(this.addr, !1, Jn), $n(i, n)
        }
    }

    function sr(e, t) {
        var i = this.cache,
            n = t.elements;
        if (void 0 === n) {
            if (Qn(i, t)) return;
            e.uniformMatrix3fv(this.addr, !1, t), $n(i, t)
        } else {
            if (Qn(i, n)) return;
            Zn.set(n), e.uniformMatrix3fv(this.addr, !1, Zn), $n(i, n)
        }
    }

    function cr(e, t) {
        var i = this.cache,
            n = t.elements;
        if (void 0 === n) {
            if (Qn(i, t)) return;
            e.uniformMatrix4fv(this.addr, !1, t), $n(i, t)
        } else {
            if (Qn(i, n)) return;
            Yn.set(n), e.uniformMatrix4fv(this.addr, !1, Yn), $n(i, n)
        }
    }

    function hr(e, t, i) {
        var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(t || Hn, r)
    }

    function lr(e, t, i) {
        var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(t || jn, r)
    }

    function ur(e, t, i) {
        var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(t || Vn, r)
    }

    function pr(e, t) {
        var i = this.cache;
        Qn(i, t) || (e.uniform2iv(this.addr, t), $n(i, t))
    }

    function dr(e, t) {
        var i = this.cache;
        Qn(i, t) || (e.uniform3iv(this.addr, t), $n(i, t))
    }

    function fr(e, t) {
        var i = this.cache;
        Qn(i, t) || (e.uniform4iv(this.addr, t), $n(i, t))
    }

    function mr(e, t) {
        var i = this.cache;
        Qn(i, t) || (e.uniform1fv(this.addr, t), $n(i, t))
    }

    function gr(e, t) {
        var i = this.cache;
        Qn(i, t) || (e.uniform1iv(this.addr, t), $n(i, t))
    }

    function vr(e, t) {
        var i = this.cache,
            n = Kn(t, this.size, 2);
        Qn(i, n) || (e.uniform2fv(this.addr, n), this.updateCache(n))
    }

    function yr(e, t) {
        var i = this.cache,
            n = Kn(t, this.size, 3);
        Qn(i, n) || (e.uniform3fv(this.addr, n), this.updateCache(n))
    }

    function xr(e, t) {
        var i = this.cache,
            n = Kn(t, this.size, 4);
        Qn(i, n) || (e.uniform4fv(this.addr, n), this.updateCache(n))
    }

    function br(e, t) {
        var i = this.cache,
            n = Kn(t, this.size, 4);
        Qn(i, n) || (e.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n))
    }

    function wr(e, t) {
        var i = this.cache,
            n = Kn(t, this.size, 9);
        Qn(i, n) || (e.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n))
    }

    function _r(e, t) {
        var i = this.cache,
            n = Kn(t, this.size, 16);
        Qn(i, n) || (e.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n))
    }

    function Mr(e, t, i) {
        var n = this.cache,
            r = t.length,
            a = er(i, r);
        !1 === Qn(n, a) && (e.uniform1iv(this.addr, a), $n(n, a));
        for (var o = 0; o !== r; ++o) i.setTexture2D(t[o] || Hn, a[o])
    }

    function Sr(e, t, i) {
        var n = this.cache,
            r = t.length,
            a = er(i, r);
        !1 === Qn(n, a) && (e.uniform1iv(this.addr, a), $n(n, a));
        for (var o = 0; o !== r; ++o) i.setTextureCube(t[o] || Vn, a[o])
    }

    function Er(e, t, i) {
        this.id = e, this.addr = i, this.cache = [], this.setValue = function(e) {
            switch (e) {
                case 5126:
                    return tr;
                case 35664:
                    return nr;
                case 35665:
                    return rr;
                case 35666:
                    return ar;
                case 35674:
                    return or;
                case 35675:
                    return sr;
                case 35676:
                    return cr;
                case 35678:
                case 36198:
                    return hr;
                case 35679:
                    return lr;
                case 35680:
                    return ur;
                case 5124:
                case 35670:
                    return ir;
                case 35667:
                case 35671:
                    return pr;
                case 35668:
                case 35672:
                    return dr;
                case 35669:
                case 35673:
                    return fr
            }
        }(t.type)
    }

    function Tr(e, t, i) {
        this.id = e, this.addr = i, this.cache = [], this.size = t.size, this.setValue = function(e) {
            switch (e) {
                case 5126:
                    return mr;
                case 35664:
                    return vr;
                case 35665:
                    return yr;
                case 35666:
                    return xr;
                case 35674:
                    return br;
                case 35675:
                    return wr;
                case 35676:
                    return _r;
                case 35678:
                    return Mr;
                case 35680:
                    return Sr;
                case 5124:
                case 35670:
                    return gr;
                case 35667:
                case 35671:
                    return pr;
                case 35668:
                case 35672:
                    return dr;
                case 35669:
                case 35673:
                    return fr
            }
        }(t.type)
    }

    function Ar(e) {
        this.id = e, Wn.call(this)
    }
    Tr.prototype.updateCache = function(e) {
        var t = this.cache;
        e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), $n(t, e)
    }, Ar.prototype.setValue = function(e, t, i) {
        for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
            var o = n[r];
            o.setValue(e, t[o.id], i)
        }
    };
    var Lr = /([\w\d_]+)(\])?(\[|\.)?/g;

    function Pr(e, t) {
        e.seq.push(t), e.map[t.id] = t
    }

    function Rr(e, t, i) {
        var n = e.name,
            r = n.length;
        for (Lr.lastIndex = 0;;) {
            var a = Lr.exec(n),
                o = Lr.lastIndex,
                s = a[1],
                c = "]" === a[2],
                h = a[3];
            if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === r) {
                Pr(i, void 0 === h ? new Er(s, e, t) : new Tr(s, e, t));
                break
            }
            var l = i.map[s];
            void 0 === l && Pr(i, l = new Ar(s)), i = l
        }
    }

    function Cr(e, t, i) {
        Wn.call(this), this.renderer = i;
        for (var n = e.getProgramParameter(t, 35718), r = 0; r < n; ++r) {
            var a = e.getActiveUniform(t, r);
            Rr(a, e.getUniformLocation(t, a.name), this)
        }
    }

    function Or(e, t, i) {
        var n = e.createShader(t);
        return e.shaderSource(n, i), e.compileShader(n), !1 === e.getShaderParameter(n, 35713) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", 35633 === t ? "vertex" : "fragment", e.getShaderInfoLog(n), function(e) {
            for (var t = e.split("\n"), i = 0; i < t.length; i++) t[i] = i + 1 + ": " + t[i];
            return t.join("\n")
        }(i)), n
    }
    Cr.prototype.setValue = function(e, t, i) {
        var n = this.map[t];
        void 0 !== n && n.setValue(e, i, this.renderer)
    }, Cr.prototype.setOptional = function(e, t, i) {
        var n = t[i];
        void 0 !== n && this.setValue(e, i, n)
    }, Cr.upload = function(e, t, i, n) {
        for (var r = 0, a = t.length; r !== a; ++r) {
            var o = t[r],
                s = i[o.id];
            !1 !== s.needsUpdate && o.setValue(e, s.value, n)
        }
    }, Cr.seqWithValue = function(e, t) {
        for (var i = [], n = 0, r = e.length; n !== r; ++n) {
            var a = e[n];
            a.id in t && i.push(a)
        }
        return i
    };
    var Ir = 0;

    function Dr(e) {
        switch (e) {
            case kt:
                return ["Linear", "( value )"];
            case Ht:
                return ["sRGB", "( value )"];
            case Vt:
                return ["RGBE", "( value )"];
            case Wt:
                return ["RGBM", "( value, 7.0 )"];
            case qt:
                return ["RGBM", "( value, 16.0 )"];
            case Xt:
                return ["RGBD", "( value, 256.0 )"];
            case jt:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + e)
        }
    }

    function zr(e, t) {
        var i = Dr(t);
        return "vec4 " + e + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
    }

    function Nr(e) {
        return "" !== e
    }

    function Ur(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }

    function Br(e, t) {
        return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
    }

    function Fr(e) {
        return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function(e, t) {
            var i = bi[t];
            if (void 0 === i) throw new Error("Can not resolve #include <" + t + ">");
            return Fr(i)
        })
    }

    function Gr(e) {
        return e.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(e, t, i, n) {
            for (var r = "", a = parseInt(t); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]");
            return r
        })
    }

    function kr(e, t, i, n, r, a, o) {
        var s = e.context,
            c = n.defines,
            h = r.vertexShader,
            l = r.fragmentShader,
            u = "SHADOWMAP_TYPE_BASIC";
        a.shadowMapType === B ? u = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === F && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var p = "ENVMAP_TYPE_CUBE",
            d = "ENVMAP_MODE_REFLECTION",
            f = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (n.envMap.mapping) {
                case Ce:
                case Oe:
                    p = "ENVMAP_TYPE_CUBE";
                    break;
                case Ne:
                case Ue:
                    p = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case Ie:
                case De:
                    p = "ENVMAP_TYPE_EQUIREC";
                    break;
                case ze:
                    p = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
                case Oe:
                case De:
                    d = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
                case _e:
                    f = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case Me:
                    f = "ENVMAP_BLENDING_MIX";
                    break;
                case Se:
                    f = "ENVMAP_BLENDING_ADD"
            }
        }
        var m, g, v, y, x, b = e.gammaFactor > 0 ? e.gammaFactor : 1,
            w = o.isWebGL2 ? "" : function(e, t, i) {
                return [(e = e || {}).derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap && !t.objectSpaceNormalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Nr).join("\n")
            }(n.extensions, a, t),
            _ = function(e) {
                var t = [];
                for (var i in e) {
                    var n = e[i];
                    !1 !== n && t.push("#define " + i + " " + n)
                }
                return t.join("\n")
            }(c),
            M = s.createProgram();
        if (n.isRawShaderMaterial ? ((m = [_].filter(Nr).join("\n")).length > 0 && (m += "\n"), (g = [w, _].filter(Nr).join("\n")).length > 0 && (g += "\n")) : (m = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, _, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + b, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Nr).join("\n"), g = [w, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, _, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + b, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || t.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== Ee ? "#define TONE_MAPPING" : "", a.toneMapping !== Ee ? bi.tonemapping_pars_fragment : "", a.toneMapping !== Ee ? function(e, t) {
                var i;
                switch (t) {
                    case Te:
                        i = "Linear";
                        break;
                    case Ae:
                        i = "Reinhard";
                        break;
                    case Le:
                        i = "Uncharted2";
                        break;
                    case Pe:
                        i = "OptimizedCineon";
                        break;
                    case Re:
                        i = "ACESFilmic";
                        break;
                    default:
                        throw new Error("unsupported toneMapping: " + t)
                }
                return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
            }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? bi.encodings_pars_fragment : "", a.mapEncoding ? zr("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? zr("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? zr("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? zr("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? (v = "linearToOutputTexel", y = a.outputEncoding, x = Dr(y), "vec4 " + v + "( vec4 value ) { return LinearTo" + x[0] + x[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Nr).join("\n")), h = Br(h = Ur(h = Fr(h), a), a), l = Br(l = Ur(l = Fr(l), a), a), h = Gr(h), l = Gr(l), o.isWebGL2 && !n.isRawShaderMaterial) {
            var S = !1,
                E = /^\s*#version\s+300\s+es\s*\n/;
            n.isShaderMaterial && null !== h.match(E) && null !== l.match(E) && (S = !0, h = h.replace(E, ""), l = l.replace(E, "")), m = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m, g = ["#version 300 es\n", "#define varying in", S ? "" : "out highp vec4 pc_fragColor;", S ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + g
        }
        var T = g + l,
            A = Or(s, 35633, m + h),
            L = Or(s, 35632, T);
        s.attachShader(M, A), s.attachShader(M, L), void 0 !== n.index0AttributeName ? s.bindAttribLocation(M, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(M, 0, "position"), s.linkProgram(M);
        var P, R, C = s.getProgramInfoLog(M).trim(),
            O = s.getShaderInfoLog(A).trim(),
            I = s.getShaderInfoLog(L).trim(),
            D = !0,
            z = !0;
        return !1 === s.getProgramParameter(M, 35714) ? (D = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "35715", s.getProgramParameter(M, 35715), "gl.getProgramInfoLog", C, O, I)) : "" !== C ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", C) : "" !== O && "" !== I || (z = !1), z && (this.diagnostics = {
            runnable: D,
            material: n,
            programLog: C,
            vertexShader: {
                log: O,
                prefix: m
            },
            fragmentShader: {
                log: I,
                prefix: g
            }
        }), s.deleteShader(A), s.deleteShader(L), this.getUniforms = function() {
            return void 0 === P && (P = new Cr(s, M, e)), P
        }, this.getAttributes = function() {
            return void 0 === R && (R = function(e, t) {
                for (var i = {}, n = e.getProgramParameter(t, 35721), r = 0; r < n; r++) {
                    var a = e.getActiveAttrib(t, r).name;
                    i[a] = e.getAttribLocation(t, a)
                }
                return i
            }(s, M)), R
        }, this.destroy = function() {
            s.deleteProgram(M), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.name = r.name, this.id = Ir++, this.code = i, this.usedTimes = 1, this.program = M, this.vertexShader = A, this.fragmentShader = L, this
    }

    function Hr(e, t, i) {
        var n = [],
            r = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                MeshMatcapMaterial: "matcap",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow",
                SpriteMaterial: "sprite"
            },
            a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

        function o(e, t) {
            var i;
            return e ? e.isTexture ? i = e.encoding : e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = e.texture.encoding) : i = kt, i === kt && t && (i = jt), i
        }
        this.getParameters = function(t, n, a, s, c, h, l) {
            var u = r[t.type],
                p = l.isSkinnedMesh ? function(e) {
                    var t = e.skeleton.bones;
                    if (i.floatVertexTextures) return 1024;
                    var n = i.maxVertexUniforms,
                        r = Math.floor((n - 20) / 4),
                        a = Math.min(r, t.length);
                    return a < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + a + "."), 0) : a
                }(l) : 0,
                d = i.precision;
            null !== t.precision && (d = i.getMaxPrecision(t.precision)) !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", d, "instead.");
            var f = e.getRenderTarget();
            return {
                shaderID: u,
                precision: d,
                supportsVertexTextures: i.vertexTextures,
                outputEncoding: o(f ? f.texture : null, e.gammaOutput),
                map: !!t.map,
                mapEncoding: o(t.map, e.gammaInput),
                matcap: !!t.matcap,
                matcapEncoding: o(t.matcap, e.gammaInput),
                envMap: !!t.envMap,
                envMapMode: t.envMap && t.envMap.mapping,
                envMapEncoding: o(t.envMap, e.gammaInput),
                envMapCubeUV: !!t.envMap && (t.envMap.mapping === Ne || t.envMap.mapping === Ue),
                lightMap: !!t.lightMap,
                aoMap: !!t.aoMap,
                emissiveMap: !!t.emissiveMap,
                emissiveMapEncoding: o(t.emissiveMap, e.gammaInput),
                bumpMap: !!t.bumpMap,
                normalMap: !!t.normalMap,
                objectSpaceNormalMap: t.normalMapType === Kt,
                displacementMap: !!t.displacementMap,
                roughnessMap: !!t.roughnessMap,
                metalnessMap: !!t.metalnessMap,
                specularMap: !!t.specularMap,
                alphaMap: !!t.alphaMap,
                gradientMap: !!t.gradientMap,
                combine: t.combine,
                vertexColors: t.vertexColors,
                fog: !!s,
                useFog: t.fog,
                fogExp: s && s.isFogExp2,
                flatShading: t.flatShading,
                sizeAttenuation: t.sizeAttenuation,
                logarithmicDepthBuffer: i.logarithmicDepthBuffer,
                skinning: t.skinning && p > 0,
                maxBones: p,
                useVertexTexture: i.floatVertexTextures,
                morphTargets: t.morphTargets,
                morphNormals: t.morphNormals,
                maxMorphTargets: e.maxMorphTargets,
                maxMorphNormals: e.maxMorphNormals,
                numDirLights: n.directional.length,
                numPointLights: n.point.length,
                numSpotLights: n.spot.length,
                numRectAreaLights: n.rectArea.length,
                numHemiLights: n.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: h,
                dithering: t.dithering,
                shadowMapEnabled: e.shadowMap.enabled && l.receiveShadow && a.length > 0,
                shadowMapType: e.shadowMap.type,
                toneMapping: e.toneMapping,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: t.premultipliedAlpha,
                alphaTest: t.alphaTest,
                doubleSided: t.side === H,
                flipSided: t.side === k,
                depthPacking: void 0 !== t.depthPacking && t.depthPacking
            }
        }, this.getProgramCode = function(t, i) {
            var n = [];
            if (i.shaderID ? n.push(i.shaderID) : (n.push(t.fragmentShader), n.push(t.vertexShader)), void 0 !== t.defines)
                for (var r in t.defines) n.push(r), n.push(t.defines[r]);
            for (var o = 0; o < a.length; o++) n.push(i[a[o]]);
            return n.push(t.onBeforeCompile.toString()), n.push(e.gammaOutput), n.push(e.gammaFactor), n.join()
        }, this.acquireProgram = function(r, a, o, s) {
            for (var c, h = 0, l = n.length; h < l; h++) {
                var u = n[h];
                if (u.code === s) {
                    ++(c = u).usedTimes;
                    break
                }
            }
            return void 0 === c && (c = new kr(e, t, s, r, a, o, i), n.push(c)), c
        }, this.releaseProgram = function(e) {
            if (0 == --e.usedTimes) {
                var t = n.indexOf(e);
                n[t] = n[n.length - 1], n.pop(), e.destroy()
            }
        }, this.programs = n
    }

    function jr() {
        var e = new WeakMap;
        return {
            get: function(t) {
                var i = e.get(t);
                return void 0 === i && (i = {}, e.set(t, i)), i
            },
            remove: function(t) {
                e.delete(t)
            },
            update: function(t, i, n) {
                e.get(t)[i] = n
            },
            dispose: function() {
                e = new WeakMap
            }
        }
    }

    function Vr(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program && t.program && e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }

    function Wr(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }

    function qr() {
        var e = [],
            t = 0,
            i = [],
            n = [];

        function r(i, n, r, a, o) {
            var s = e[t];
            return void 0 === s ? (s = {
                id: i.id,
                object: i,
                geometry: n,
                material: r,
                program: r.program,
                renderOrder: i.renderOrder,
                z: a,
                group: o
            }, e[t] = s) : (s.id = i.id, s.object = i, s.geometry = n, s.material = r, s.program = r.program, s.renderOrder = i.renderOrder, s.z = a, s.group = o), t++, s
        }
        return {
            opaque: i,
            transparent: n,
            init: function() {
                t = 0, i.length = 0, n.length = 0
            },
            push: function(e, t, a, o, s) {
                var c = r(e, t, a, o, s);
                (!0 === a.transparent ? n : i).push(c)
            },
            unshift: function(e, t, a, o, s) {
                var c = r(e, t, a, o, s);
                (!0 === a.transparent ? n : i).unshift(c)
            },
            sort: function() {
                i.length > 1 && i.sort(Vr), n.length > 1 && n.sort(Wr)
            }
        }
    }

    function Xr() {
        var e = {};
        return {
            get: function(t, i) {
                var n, r = e[t.id];
                return void 0 === r ? (n = new qr, e[t.id] = {}, e[t.id][i.id] = n) : void 0 === (n = r[i.id]) && (n = new qr, r[i.id] = n), n
            },
            dispose: function() {
                e = {}
            }
        }
    }

    function Yr() {
        var e = {};
        return {
            get: function(t) {
                if (void 0 !== e[t.id]) return e[t.id];
                var i;
                switch (t.type) {
                    case "DirectionalLight":
                        i = {
                            direction: new ii,
                            color: new Li,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new $t
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new ii,
                            direction: new ii,
                            color: new Li,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new $t
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new ii,
                            color: new Li,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new $t,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new ii,
                            skyColor: new Li,
                            groundColor: new Li
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new Li,
                            position: new ii,
                            halfWidth: new ii,
                            halfHeight: new ii
                        }
                }
                return e[t.id] = i, i
            }
        }
    }
    var Zr = 0;

    function Jr() {
        var e = new Yr,
            t = {
                id: Zr++,
                hash: {
                    stateID: -1,
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    shadowsLength: -1
                },
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            },
            i = new ii,
            n = new ei,
            r = new ei;
        return {
            setup: function(a, o, s) {
                for (var c = 0, h = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, g = s.matrixWorldInverse, v = 0, y = a.length; v < y; v++) {
                    var x = a[v],
                        b = x.color,
                        w = x.intensity,
                        _ = x.distance,
                        M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
                    if (x.isAmbientLight) c += b.r * w, h += b.g * w, l += b.b * w;
                    else if (x.isDirectionalLight) {
                        if ((E = e.get(x)).color.copy(x.color).multiplyScalar(x.intensity), E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(g), E.shadow = x.castShadow, x.castShadow) {
                            var S = x.shadow;
                            E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize
                        }
                        t.directionalShadowMap[u] = M, t.directionalShadowMatrix[u] = x.shadow.matrix, t.directional[u] = E, u++
                    } else if (x.isSpotLight)(E = e.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(b).multiplyScalar(w), E.distance = _, E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(g), E.coneCos = Math.cos(x.angle), E.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), E.decay = x.decay, E.shadow = x.castShadow, x.castShadow && (S = x.shadow, E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize), t.spotShadowMap[d] = M, t.spotShadowMatrix[d] = x.shadow.matrix, t.spot[d] = E, d++;
                    else if (x.isRectAreaLight)(E = e.get(x)).color.copy(b).multiplyScalar(w), E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), r.identity(), n.copy(x.matrixWorld), n.premultiply(g), r.extractRotation(n), E.halfWidth.set(.5 * x.width, 0, 0), E.halfHeight.set(0, .5 * x.height, 0), E.halfWidth.applyMatrix4(r), E.halfHeight.applyMatrix4(r), t.rectArea[f] = E, f++;
                    else if (x.isPointLight)(E = e.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(x.color).multiplyScalar(x.intensity), E.distance = x.distance, E.decay = x.decay, E.shadow = x.castShadow, x.castShadow && (S = x.shadow, E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize, E.shadowCameraNear = S.camera.near, E.shadowCameraFar = S.camera.far), t.pointShadowMap[p] = M, t.pointShadowMatrix[p] = x.shadow.matrix, t.point[p] = E, p++;
                    else if (x.isHemisphereLight) {
                        var E;
                        (E = e.get(x)).direction.setFromMatrixPosition(x.matrixWorld), E.direction.transformDirection(g), E.direction.normalize(), E.skyColor.copy(x.color).multiplyScalar(w), E.groundColor.copy(x.groundColor).multiplyScalar(w), t.hemi[m] = E, m++
                    }
                }
                t.ambient[0] = c, t.ambient[1] = h, t.ambient[2] = l, t.directional.length = u, t.spot.length = d, t.rectArea.length = f, t.point.length = p, t.hemi.length = m, t.hash.stateID = t.id, t.hash.directionalLength = u, t.hash.pointLength = p, t.hash.spotLength = d, t.hash.rectAreaLength = f, t.hash.hemiLength = m, t.hash.shadowsLength = o.length
            },
            state: t
        }
    }

    function Kr() {
        var e = new Jr,
            t = [],
            i = [];
        return {
            init: function() {
                t.length = 0, i.length = 0
            },
            state: {
                lightsArray: t,
                shadowsArray: i,
                lights: e
            },
            setupLights: function(n) {
                e.setup(t, i, n)
            },
            pushLight: function(e) {
                t.push(e)
            },
            pushShadow: function(e) {
                i.push(e)
            }
        }
    }

    function Qr() {
        var e = {};
        return {
            get: function(t, i) {
                var n;
                return void 0 === e[t.id] ? (n = new Kr, e[t.id] = {}, e[t.id][i.id] = n) : void 0 === e[t.id][i.id] ? (n = new Kr, e[t.id][i.id] = n) : n = e[t.id][i.id], n
            },
            dispose: function() {
                e = {}
            }
        }
    }

    function $r(e) {
        Mn.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Yt, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(e)
    }

    function ea(e) {
        Mn.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new ii, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(e)
    }

    function ta(e, t, i) {
        for (var n = new xi, r = new ei, a = new $t, o = new $t(i, i), s = new ii, c = new ii, h = 1, l = 2, u = 1 + (h | l), p = new Array(u), d = new Array(u), f = {}, m = {
                0: k,
                1: G,
                2: H
            }, g = [new ii(1, 0, 0), new ii(-1, 0, 0), new ii(0, 0, 1), new ii(0, 0, -1), new ii(0, 1, 0), new ii(0, -1, 0)], v = [new ii(0, 1, 0), new ii(0, 1, 0), new ii(0, 1, 0), new ii(0, 1, 0), new ii(0, 0, 1), new ii(0, 0, -1)], y = [new pi, new pi, new pi, new pi, new pi, new pi], x = 0; x !== u; ++x) {
            var b = 0 != (x & h),
                w = 0 != (x & l),
                _ = new $r({
                    depthPacking: Zt,
                    morphTargets: b,
                    skinning: w
                });
            p[x] = _;
            var M = new ea({
                morphTargets: b,
                skinning: w
            });
            d[x] = M
        }
        var S = this;

        function E(t, i, n, r, a, o) {
            var s = t.geometry,
                c = null,
                u = p,
                g = t.customDepthMaterial;
            if (n && (u = d, g = t.customDistanceMaterial), g) c = g;
            else {
                var v = !1;
                i.morphTargets && (s && s.isBufferGeometry ? v = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (v = s.morphTargets && s.morphTargets.length > 0)), t.isSkinnedMesh && !1 === i.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t);
                var y = t.isSkinnedMesh && i.skinning,
                    x = 0;
                v && (x |= h), y && (x |= l), c = u[x]
            }
            if (e.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                var b = c.uuid,
                    w = i.uuid,
                    _ = f[b];
                void 0 === _ && (_ = {}, f[b] = _);
                var M = _[w];
                void 0 === M && (M = c.clone(), _[w] = M), c = M
            }
            return c.visible = i.visible, c.wireframe = i.wireframe, c.side = null != i.shadowSide ? i.shadowSide : m[i.side], c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, n && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = a, c.farDistance = o), c
        }

        function T(i, r, a, o) {
            if (!1 !== i.visible) {
                if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || n.intersectsObject(i))) {
                    i.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, i.matrixWorld);
                    var s = t.update(i),
                        h = i.material;
                    if (Array.isArray(h))
                        for (var l = s.groups, u = 0, p = l.length; u < p; u++) {
                            var d = l[u],
                                f = h[d.materialIndex];
                            if (f && f.visible) {
                                var m = E(i, f, o, c, a.near, a.far);
                                e.renderBufferDirect(a, null, s, m, i, d)
                            }
                        } else if (h.visible) {
                            m = E(i, h, o, c, a.near, a.far);
                            e.renderBufferDirect(a, null, s, m, i, null)
                        }
                }
                for (var g = i.children, v = 0, y = g.length; v < y; v++) T(g[v], r, a, o)
            }
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = B, this.render = function(t, i, h) {
            if (!1 !== S.enabled && (!1 !== S.autoUpdate || !1 !== S.needsUpdate) && 0 !== t.length) {
                e.context;
                var l, u = e.state;
                u.disable(3042), u.buffers.color.setClear(1, 1, 1, 1), u.buffers.depth.setTest(!0), u.setScissorTest(!1);
                for (var p = 0, d = t.length; p < d; p++) {
                    var f = t[p],
                        m = f.shadow,
                        x = f && f.isPointLight;
                    if (void 0 !== m) {
                        var b = m.camera;
                        if (a.copy(m.mapSize), a.min(o), x) {
                            var w = a.x,
                                _ = a.y;
                            y[0].set(2 * w, _, w, _), y[1].set(0, _, w, _), y[2].set(3 * w, _, w, _), y[3].set(w, _, w, _), y[4].set(3 * w, 0, w, _), y[5].set(w, 0, w, _), a.x *= 4, a.y *= 2
                        }
                        if (null === m.map) {
                            var M = {
                                minFilter: ke,
                                magFilter: ke,
                                format: st
                            };
                            m.map = new di(a.x, a.y, M), m.map.texture.name = f.name + ".shadowMap", b.updateProjectionMatrix()
                        }
                        m.isSpotLightShadow && m.update(f);
                        var E = m.map,
                            A = m.matrix;
                        c.setFromMatrixPosition(f.matrixWorld), b.position.copy(c), x ? (l = 6, A.makeTranslation(-c.x, -c.y, -c.z)) : (l = 1, s.setFromMatrixPosition(f.target.matrixWorld), b.lookAt(s), b.updateMatrixWorld(), A.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), A.multiply(b.projectionMatrix), A.multiply(b.matrixWorldInverse)), e.setRenderTarget(E), e.clear();
                        for (var L = 0; L < l; L++) {
                            if (x) {
                                s.copy(b.position), s.add(g[L]), b.up.copy(v[L]), b.lookAt(s), b.updateMatrixWorld();
                                var P = y[L];
                                u.viewport(P)
                            }
                            r.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), n.setFromMatrix(r), T(i, h, b, x)
                        }
                    } else console.warn("THREE.WebGLShadowMap:", f, "has no shadow.")
                }
                S.needsUpdate = !1
            }
        }
    }

    function ia(e, t, i, n) {
        var r = new function() {
                var t = !1,
                    i = new pi,
                    n = null,
                    r = new pi(0, 0, 0, 0);
                return {
                    setMask: function(i) {
                        n === i || t || (e.colorMask(i, i, i, i), n = i)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t, n, a, o, s) {
                        !0 === s && (t *= o, n *= o, a *= o), i.set(t, n, a, o), !1 === r.equals(i) && (e.clearColor(t, n, a, o), r.copy(i))
                    },
                    reset: function() {
                        t = !1, n = null, r.set(-1, 0, 0, 0)
                    }
                }
            },
            a = new function() {
                var t = !1,
                    i = null,
                    n = null,
                    r = null;
                return {
                    setTest: function(e) {
                        e ? V(2929) : W(2929)
                    },
                    setMask: function(n) {
                        i === n || t || (e.depthMask(n), i = n)
                    },
                    setFunc: function(t) {
                        if (n !== t) {
                            if (t) switch (t) {
                                case fe:
                                    e.depthFunc(512);
                                    break;
                                case me:
                                    e.depthFunc(519);
                                    break;
                                case ge:
                                    e.depthFunc(513);
                                    break;
                                case ve:
                                    e.depthFunc(515);
                                    break;
                                case ye:
                                    e.depthFunc(514);
                                    break;
                                case xe:
                                    e.depthFunc(518);
                                    break;
                                case be:
                                    e.depthFunc(516);
                                    break;
                                case we:
                                    e.depthFunc(517);
                                    break;
                                default:
                                    e.depthFunc(515)
                            } else e.depthFunc(515);
                            n = t
                        }
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        r !== t && (e.clearDepth(t), r = t)
                    },
                    reset: function() {
                        t = !1, i = null, n = null, r = null
                    }
                }
            },
            o = new function() {
                var t = !1,
                    i = null,
                    n = null,
                    r = null,
                    a = null,
                    o = null,
                    s = null,
                    c = null,
                    h = null;
                return {
                    setTest: function(e) {
                        e ? V(2960) : W(2960)
                    },
                    setMask: function(n) {
                        i === n || t || (e.stencilMask(n), i = n)
                    },
                    setFunc: function(t, i, o) {
                        n === t && r === i && a === o || (e.stencilFunc(t, i, o), n = t, r = i, a = o)
                    },
                    setOp: function(t, i, n) {
                        o === t && s === i && c === n || (e.stencilOp(t, i, n), o = t, s = i, c = n)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        h !== t && (e.clearStencil(t), h = t)
                    },
                    reset: function() {
                        t = !1, i = null, n = null, r = null, a = null, o = null, s = null, c = null, h = null
                    }
                }
            },
            s = e.getParameter(34921),
            c = new Uint8Array(s),
            h = new Uint8Array(s),
            l = new Uint8Array(s),
            u = {},
            p = null,
            d = null,
            f = null,
            m = null,
            g = null,
            v = null,
            y = null,
            x = null,
            b = null,
            w = null,
            _ = !1,
            M = null,
            S = null,
            E = null,
            T = null,
            A = null,
            L = e.getParameter(35661),
            P = !1,
            R = 0,
            C = e.getParameter(7938); - 1 !== C.indexOf("WebGL") ? (R = parseFloat(/^WebGL\ ([0-9])/.exec(C)[1]), P = R >= 1) : -1 !== C.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(C)[1]), P = R >= 2);
        var O = null,
            I = {},
            D = new pi,
            B = new pi;

        function F(t, i, n) {
            var r = new Uint8Array(4),
                a = e.createTexture();
            e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
            for (var o = 0; o < n; o++) e.texImage2D(i + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return a
        }
        var G = {};

        function j(i, r) {
            (c[i] = 1, 0 === h[i] && (e.enableVertexAttribArray(i), h[i] = 1), l[i] !== r) && ((n.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), l[i] = r)
        }

        function V(t) {
            !0 !== u[t] && (e.enable(t), u[t] = !0)
        }

        function W(t) {
            !1 !== u[t] && (e.disable(t), u[t] = !1)
        }

        function $(t, n, r, a, o, s, c, h) {
            if (t !== q) {
                if (f || (V(3042), f = !0), t === K) o = o || n, s = s || r, c = c || a, n === g && o === x || (e.blendEquationSeparate(i.convert(n), i.convert(o)), g = n, x = o), r === v && a === y && s === b && c === w || (e.blendFuncSeparate(i.convert(r), i.convert(a), i.convert(s), i.convert(c)), v = r, y = a, b = s, w = c), m = t, _ = null;
                else if (t !== m || h !== _) {
                    if (g === Q && x === Q || (e.blendEquation(32774), g = Q, x = Q), h) switch (t) {
                        case X:
                            e.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case Y:
                            e.blendFunc(1, 1);
                            break;
                        case Z:
                            e.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case J:
                            e.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                    } else switch (t) {
                        case X:
                            e.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case Y:
                            e.blendFunc(770, 1);
                            break;
                        case Z:
                            e.blendFunc(0, 769);
                            break;
                        case J:
                            e.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                    }
                    v = null, y = null, b = null, w = null, m = t, _ = h
                }
            } else f && (W(3042), f = !1)
        }

        function ee(t) {
            M !== t && (t ? e.frontFace(2304) : e.frontFace(2305), M = t)
        }

        function te(t) {
            t !== z ? (V(2884), t !== S && (t === N ? e.cullFace(1029) : t === U ? e.cullFace(1028) : e.cullFace(1032))) : W(2884), S = t
        }

        function ie(t, i, n) {
            t ? (V(32823), T === i && A === n || (e.polygonOffset(i, n), T = i, A = n)) : W(32823)
        }

        function ne(t) {
            void 0 === t && (t = 33984 + L - 1), O !== t && (e.activeTexture(t), O = t)
        }
        return G[3553] = F(3553, 3553, 1), G[34067] = F(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), V(2929), a.setFunc(ve), ee(!1), te(N), V(2884), $(q), {
            buffers: {
                color: r,
                depth: a,
                stencil: o
            },
            initAttributes: function() {
                for (var e = 0, t = c.length; e < t; e++) c[e] = 0
            },
            enableAttribute: function(e) {
                j(e, 0)
            },
            enableAttributeAndDivisor: j,
            disableUnusedAttributes: function() {
                for (var t = 0, i = h.length; t !== i; ++t) h[t] !== c[t] && (e.disableVertexAttribArray(t), h[t] = 0)
            },
            enable: V,
            disable: W,
            getCompressedTextureFormats: function() {
                if (null === p && (p = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1") || t.get("WEBGL_compressed_texture_astc")))
                    for (var i = e.getParameter(34467), n = 0; n < i.length; n++) p.push(i[n]);
                return p
            },
            useProgram: function(t) {
                return d !== t && (e.useProgram(t), d = t, !0)
            },
            setBlending: $,
            setMaterial: function(e, t) {
                e.side === H ? W(2884) : V(2884);
                var i = e.side === k;
                t && (i = !i), ee(i), e.blending === X && !1 === e.transparent ? $(q) : $(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), a.setFunc(e.depthFunc), a.setTest(e.depthTest), a.setMask(e.depthWrite), r.setMask(e.colorWrite), ie(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
            },
            setFlipSided: ee,
            setCullFace: te,
            setLineWidth: function(t) {
                t !== E && (P && e.lineWidth(t), E = t)
            },
            setPolygonOffset: ie,
            setScissorTest: function(e) {
                e ? V(3089) : W(3089)
            },
            activeTexture: ne,
            bindTexture: function(t, i) {
                null === O && ne();
                var n = I[O];
                void 0 === n && (n = {
                    type: void 0,
                    texture: void 0
                }, I[O] = n), n.type === t && n.texture === i || (e.bindTexture(t, i || G[t]), n.type = t, n.texture = i)
            },
            compressedTexImage2D: function() {
                try {
                    e.compressedTexImage2D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texImage2D: function() {
                try {
                    e.texImage2D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texImage3D: function() {
                try {
                    e.texImage3D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            scissor: function(t) {
                !1 === D.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), D.copy(t))
            },
            viewport: function(t) {
                !1 === B.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), B.copy(t))
            },
            reset: function() {
                for (var t = 0; t < h.length; t++) 1 === h[t] && (e.disableVertexAttribArray(t), h[t] = 0);
                u = {}, p = null, O = null, I = {}, d = null, m = null, M = null, S = null, r.reset(), a.reset(), o.reset()
            }
        }
    }

    function na(e, t, i, n, r, a, o) {
        var s, c = {};

        function h(e, t) {
            if (e.width > t || e.height > t) {
                if ("data" in e) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + e.width + "x" + e.height + ").");
                var i = t / Math.max(e.width, e.height),
                    n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                return n.width = Math.floor(e.width * i), n.height = Math.floor(e.height * i), n.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + n.width + "x" + n.height), n
            }
            return e
        }

        function l(e) {
            return Qt.isPowerOfTwo(e.width) && Qt.isPowerOfTwo(e.height)
        }

        function u(e, t) {
            return e.generateMipmaps && t && e.minFilter !== ke && e.minFilter !== Ve
        }

        function p(t, i, r, a) {
            e.generateMipmap(t), n.get(i).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
        }

        function d(e, t) {
            if (!r.isWebGL2) return e;
            if (6403 === e) {
                if (5126 === t) return 33326;
                if (5131 === t) return 33325;
                if (5121 === t) return 33321
            }
            if (6407 === e) {
                if (5126 === t) return 34837;
                if (5131 === t) return 34843;
                if (5121 === t) return 32849
            }
            if (6408 === e) {
                if (5126 === t) return 34836;
                if (5131 === t) return 34842;
                if (5121 === t) return 32856
            }
            return e
        }

        function f(e) {
            return e === ke || e === He || e === je ? 9728 : 9729
        }

        function m(t) {
            var i = t.target;
            i.removeEventListener("dispose", m),
                function(t) {
                    var i = n.get(t);
                    if (t.image && i.__image__webglTextureCube) e.deleteTexture(i.__image__webglTextureCube);
                    else {
                        if (void 0 === i.__webglInit) return;
                        e.deleteTexture(i.__webglTexture)
                    }
                    n.remove(t)
                }(i), i.isVideoTexture && delete c[i.id], o.memory.textures--
        }

        function g(t) {
            var i = t.target;
            i.removeEventListener("dispose", g),
                function(t) {
                    var i = n.get(t),
                        r = n.get(t.texture);
                    if (!t) return;
                    void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture);
                    t.depthTexture && t.depthTexture.dispose();
                    if (t.isWebGLRenderTargetCube)
                        for (var a = 0; a < 6; a++) e.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[a]);
                    else e.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer);
                    n.remove(t.texture), n.remove(t)
                }(i), o.memory.textures--
        }

        function v(e, t) {
            var r = n.get(e);
            if (e.isVideoTexture && function(e) {
                    var t = e.id,
                        i = o.render.frame;
                    c[t] !== i && (c[t] = i, e.update())
                }(e), e.version > 0 && r.__version !== e.version) {
                var a = e.image;
                if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== a.complete) return void x(r, e, t);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            i.activeTexture(33984 + t), i.bindTexture(3553, r.__webglTexture)
        }

        function y(i, o, s) {
            var c;
            if (s ? (e.texParameteri(i, 10242, a.convert(o.wrapS)), e.texParameteri(i, 10243, a.convert(o.wrapT)), e.texParameteri(i, 10240, a.convert(o.magFilter)), e.texParameteri(i, 10241, a.convert(o.minFilter))) : (e.texParameteri(i, 10242, 33071), e.texParameteri(i, 10243, 33071), o.wrapS === Fe && o.wrapT === Fe || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(i, 10240, f(o.magFilter)), e.texParameteri(i, 10241, f(o.minFilter)), o.minFilter !== ke && o.minFilter !== Ve && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), c = t.get("EXT_texture_filter_anisotropic")) {
                if (o.type === $e && null === t.get("OES_texture_float_linear")) return;
                if (o.type === et && null === (r.isWebGL2 || t.get("OES_texture_half_float_linear"))) return;
                (o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (e.texParameterf(i, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), n.get(o).__currentAnisotropy = o.anisotropy)
            }
        }

        function x(t, n, c) {
            var f;
            f = n.isDataTexture3D ? 32879 : 3553, void 0 === t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", m), t.__webglTexture = e.createTexture(), o.memory.textures++), i.activeTexture(33984 + c), i.bindTexture(f, t.__webglTexture), e.pixelStorei(37440, n.flipY), e.pixelStorei(37441, n.premultiplyAlpha), e.pixelStorei(3317, n.unpackAlignment);
            var g = h(n.image, r.maxTextureSize);
            (function(e) {
                return !r.isWebGL2 && (e.wrapS !== Fe || e.wrapT !== Fe || e.minFilter !== ke && e.minFilter !== Ve)
            })(n) && !1 === l(g) && (g = function(e) {
                return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap ? (void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), s.width = Qt.floorPowerOfTwo(e.width), s.height = Qt.floorPowerOfTwo(e.height), s.getContext("2d").drawImage(e, 0, 0, s.width, s.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + s.width + "x" + s.height), s) : e
            }(g));
            var v = l(g),
                x = a.convert(n.format),
                b = a.convert(n.type),
                w = d(x, b);
            y(f, n, v);
            var _, M = n.mipmaps;
            if (n.isDepthTexture) {
                if (w = 6402, n.type === $e) {
                    if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                    w = 36012
                } else r.isWebGL2 && (w = 33189);
                n.format === lt && 6402 === w && n.type !== Je && n.type !== Qe && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = Je, b = a.convert(n.type)), n.format === ut && (w = 34041, n.type !== rt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = rt, b = a.convert(n.type))), i.texImage2D(3553, 0, w, g.width, g.height, 0, x, b, null)
            } else if (n.isDataTexture)
                if (M.length > 0 && v) {
                    for (var S = 0, E = M.length; S < E; S++) _ = M[S], i.texImage2D(3553, S, w, _.width, _.height, 0, x, b, _.data);
                    n.generateMipmaps = !1, t.__maxMipLevel = M.length - 1
                } else i.texImage2D(3553, 0, w, g.width, g.height, 0, x, b, g.data), t.__maxMipLevel = 0;
            else if (n.isCompressedTexture) {
                for (S = 0, E = M.length; S < E; S++) _ = M[S], n.format !== st && n.format !== ot ? i.getCompressedTextureFormats().indexOf(x) > -1 ? i.compressedTexImage2D(3553, S, w, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(3553, S, w, _.width, _.height, 0, x, b, _.data);
                t.__maxMipLevel = M.length - 1
            } else if (n.isDataTexture3D) i.texImage3D(32879, 0, w, g.width, g.height, g.depth, 0, x, b, g.data), t.__maxMipLevel = 0;
            else if (M.length > 0 && v) {
                for (S = 0, E = M.length; S < E; S++) _ = M[S], i.texImage2D(3553, S, w, x, b, _);
                n.generateMipmaps = !1, t.__maxMipLevel = M.length - 1
            } else i.texImage2D(3553, 0, w, x, b, g), t.__maxMipLevel = 0;
            u(n, v) && p(3553, n, g.width, g.height), t.__version = n.version, n.onUpdate && n.onUpdate(n)
        }

        function b(t, r, o, s) {
            var c = a.convert(r.texture.format),
                h = a.convert(r.texture.type),
                l = d(c, h);
            i.texImage2D(s, 0, l, r.width, r.height, 0, c, h, null), e.bindFramebuffer(36160, t), e.framebufferTexture2D(36160, o, s, n.get(r.texture).__webglTexture, 0), e.bindFramebuffer(36160, null)
        }

        function w(t, i) {
            e.bindRenderbuffer(36161, t), i.depthBuffer && !i.stencilBuffer ? (e.renderbufferStorage(36161, 33189, i.width, i.height), e.framebufferRenderbuffer(36160, 36096, 36161, t)) : i.depthBuffer && i.stencilBuffer ? (e.renderbufferStorage(36161, 34041, i.width, i.height), e.framebufferRenderbuffer(36160, 33306, 36161, t)) : e.renderbufferStorage(36161, 32854, i.width, i.height), e.bindRenderbuffer(36161, null)
        }

        function _(t) {
            var i = n.get(t),
                r = !0 === t.isWebGLRenderTargetCube;
            if (t.depthTexture) {
                if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                ! function(t, i) {
                    if (i && i.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
                    if (e.bindFramebuffer(36160, t), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), v(i.depthTexture, 0);
                    var r = n.get(i.depthTexture).__webglTexture;
                    if (i.depthTexture.format === lt) e.framebufferTexture2D(36160, 36096, 3553, r, 0);
                    else {
                        if (i.depthTexture.format !== ut) throw new Error("Unknown depthTexture format");
                        e.framebufferTexture2D(36160, 33306, 3553, r, 0)
                    }
                }(i.__webglFramebuffer, t)
            } else if (r) {
                i.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++) e.bindFramebuffer(36160, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = e.createRenderbuffer(), w(i.__webglDepthbuffer[a], t)
            } else e.bindFramebuffer(36160, i.__webglFramebuffer), i.__webglDepthbuffer = e.createRenderbuffer(), w(i.__webglDepthbuffer, t);
            e.bindFramebuffer(36160, null)
        }
        this.setTexture2D = v, this.setTexture3D = function(e, t) {
            var r = n.get(e);
            e.version > 0 && r.__version !== e.version ? x(r, e, t) : (i.activeTexture(33984 + t), i.bindTexture(32879, r.__webglTexture))
        }, this.setTextureCube = function(t, s) {
            var c = n.get(t);
            if (6 === t.image.length)
                if (t.version > 0 && c.__version !== t.version) {
                    c.__image__webglTextureCube || (t.addEventListener("dispose", m), c.__image__webglTextureCube = e.createTexture(), o.memory.textures++), i.activeTexture(33984 + s), i.bindTexture(34067, c.__image__webglTextureCube), e.pixelStorei(37440, t.flipY);
                    for (var f = t && t.isCompressedTexture, g = t.image[0] && t.image[0].isDataTexture, v = [], x = 0; x < 6; x++) v[x] = f || g ? g ? t.image[x].image : t.image[x] : h(t.image[x], r.maxCubemapSize);
                    var b = v[0],
                        w = l(b),
                        _ = a.convert(t.format),
                        M = a.convert(t.type),
                        S = d(_, M);
                    for (y(34067, t, w), x = 0; x < 6; x++)
                        if (f)
                            for (var E, T = v[x].mipmaps, A = 0, L = T.length; A < L; A++) E = T[A], t.format !== st && t.format !== ot ? i.getCompressedTextureFormats().indexOf(_) > -1 ? i.compressedTexImage2D(34069 + x, A, S, E.width, E.height, 0, E.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(34069 + x, A, S, E.width, E.height, 0, _, M, E.data);
                        else g ? i.texImage2D(34069 + x, 0, S, v[x].width, v[x].height, 0, _, M, v[x].data) : i.texImage2D(34069 + x, 0, S, _, M, v[x]);
                    c.__maxMipLevel = f ? T.length - 1 : 0, u(t, w) && p(34067, t, b.width, b.height), c.__version = t.version, t.onUpdate && t.onUpdate(t)
                } else i.activeTexture(33984 + s), i.bindTexture(34067, c.__image__webglTextureCube)
        }, this.setTextureCubeDynamic = function(e, t) {
            i.activeTexture(33984 + t), i.bindTexture(34067, n.get(e).__webglTexture)
        }, this.setupRenderTarget = function(t) {
            var r = n.get(t),
                a = n.get(t.texture);
            t.addEventListener("dispose", g), a.__webglTexture = e.createTexture(), o.memory.textures++;
            var s = !0 === t.isWebGLRenderTargetCube,
                c = l(t);
            if (s) {
                r.__webglFramebuffer = [];
                for (var h = 0; h < 6; h++) r.__webglFramebuffer[h] = e.createFramebuffer()
            } else r.__webglFramebuffer = e.createFramebuffer();
            if (s) {
                for (i.bindTexture(34067, a.__webglTexture), y(34067, t.texture, c), h = 0; h < 6; h++) b(r.__webglFramebuffer[h], t, 36064, 34069 + h);
                u(t.texture, c) && p(34067, t.texture, t.width, t.height), i.bindTexture(34067, null)
            } else i.bindTexture(3553, a.__webglTexture), y(3553, t.texture, c), b(r.__webglFramebuffer, t, 36064, 3553), u(t.texture, c) && p(3553, t.texture, t.width, t.height), i.bindTexture(3553, null);
            t.depthBuffer && _(t)
        }, this.updateRenderTargetMipmap = function(e) {
            var t = e.texture;
            if (u(t, l(e))) {
                var r = e.isWebGLRenderTargetCube ? 34067 : 3553,
                    a = n.get(t).__webglTexture;
                i.bindTexture(r, a), p(r, t, e.width, e.height), i.bindTexture(r, null)
            }
        }
    }

    function ra(e, t, i) {
        return {
            convert: function(e) {
                var n;
                if (e === Be) return 10497;
                if (e === Fe) return 33071;
                if (e === Ge) return 33648;
                if (e === ke) return 9728;
                if (e === He) return 9984;
                if (e === je) return 9986;
                if (e === Ve) return 9729;
                if (e === We) return 9985;
                if (e === qe) return 9987;
                if (e === Xe) return 5121;
                if (e === tt) return 32819;
                if (e === it) return 32820;
                if (e === nt) return 33635;
                if (e === Ye) return 5120;
                if (e === Ze) return 5122;
                if (e === Je) return 5123;
                if (e === Ke) return 5124;
                if (e === Qe) return 5125;
                if (e === $e) return 5126;
                if (e === et) {
                    if (i.isWebGL2) return 5131;
                    if (null !== (n = t.get("OES_texture_half_float"))) return n.HALF_FLOAT_OES
                }
                if (e === at) return 6406;
                if (e === ot) return 6407;
                if (e === st) return 6408;
                if (e === ct) return 6409;
                if (e === ht) return 6410;
                if (e === lt) return 6402;
                if (e === ut) return 34041;
                if (e === pt) return 6403;
                if (e === Q) return 32774;
                if (e === $) return 32778;
                if (e === ee) return 32779;
                if (e === ne) return 0;
                if (e === re) return 1;
                if (e === ae) return 768;
                if (e === oe) return 769;
                if (e === se) return 770;
                if (e === ce) return 771;
                if (e === he) return 772;
                if (e === le) return 773;
                if (e === ue) return 774;
                if (e === pe) return 775;
                if (e === de) return 776;
                if ((e === dt || e === ft || e === mt || e === gt) && null !== (n = t.get("WEBGL_compressed_texture_s3tc"))) {
                    if (e === dt) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (e === ft) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (e === mt) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (e === gt) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((e === vt || e === yt || e === xt || e === bt) && null !== (n = t.get("WEBGL_compressed_texture_pvrtc"))) {
                    if (e === vt) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (e === yt) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (e === xt) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (e === bt) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (e === wt && null !== (n = t.get("WEBGL_compressed_texture_etc1"))) return n.COMPRESSED_RGB_ETC1_WEBGL;
                if ((e === _t || e === Mt || e === St || e === Et || e === Tt || e === At || e === Lt || e === Pt || e === Rt || e === Ct || e === Ot || e === It || e === Dt || e === zt) && null !== (n = t.get("WEBGL_compressed_texture_astc"))) return e;
                if (e === te || e === ie) {
                    if (i.isWebGL2) {
                        if (e === te) return 32775;
                        if (e === ie) return 32776
                    }
                    if (null !== (n = t.get("EXT_blend_minmax"))) {
                        if (e === te) return n.MIN_EXT;
                        if (e === ie) return n.MAX_EXT
                    }
                }
                if (e === rt) {
                    if (i.isWebGL2) return 34042;
                    if (null !== (n = t.get("WEBGL_depth_texture"))) return n.UNSIGNED_INT_24_8_WEBGL
                }
                return 0
            }
        }
    }

    function aa() {
        Gi.call(this), this.type = "Group"
    }

    function oa() {
        Gi.call(this), this.type = "Camera", this.matrixWorldInverse = new ei, this.projectionMatrix = new ei, this.projectionMatrixInverse = new ei
    }

    function sa(e, t, i, n) {
        oa.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function ca(e) {
        sa.call(this), this.cameras = e || []
    }
    $r.prototype = Object.create(Mn.prototype), $r.prototype.constructor = $r, $r.prototype.isMeshDepthMaterial = !0, $r.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }, ea.prototype = Object.create(Mn.prototype), ea.prototype.constructor = ea, ea.prototype.isMeshDistanceMaterial = !0, ea.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
    }, aa.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: aa,
        isGroup: !0
    }), oa.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: oa,
        isCamera: !0,
        copy: function(e, t) {
            return Gi.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
        },
        getWorldDirection: function(e) {
            void 0 === e && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new ii), this.updateMatrixWorld(!0);
            var t = this.matrixWorld.elements;
            return e.set(-t[8], -t[9], -t[10]).normalize()
        },
        updateMatrixWorld: function(e) {
            Gi.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), sa.prototype = Object.assign(Object.create(oa.prototype), {
        constructor: sa,
        isPerspectiveCamera: !0,
        copy: function(e, t) {
            return oa.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
        },
        setFocalLength: function(e) {
            var t = .5 * this.getFilmHeight() / e;
            this.fov = 2 * Qt.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var e = Math.tan(.5 * Qt.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / e
        },
        getEffectiveFOV: function() {
            return 2 * Qt.RAD2DEG * Math.atan(Math.tan(.5 * Qt.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(e, t, i, n, r, a) {
            this.aspect = e / t, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = this.near,
                t = e * Math.tan(.5 * Qt.DEG2RAD * this.fov) / this.zoom,
                i = 2 * t,
                n = this.aspect * i,
                r = -.5 * n,
                a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth,
                    s = a.fullHeight;
                r += a.offsetX * n / o, t -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
            }
            var c = this.filmOffset;
            0 !== c && (r += e * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(e) {
            var t = Gi.prototype.toJSON.call(this, e);
            return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
        }
    }), ca.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: ca,
        isArrayCamera: !0
    });
    var ha, la, ua, pa, da, fa, ma = new ii,
        ga = new ii;

    function va(e, t, i) {
        ma.setFromMatrixPosition(t.matrixWorld), ga.setFromMatrixPosition(i.matrixWorld);
        var n = ma.distanceTo(ga),
            r = t.projectionMatrix.elements,
            a = i.projectionMatrix.elements,
            o = r[14] / (r[10] - 1),
            s = r[14] / (r[10] + 1),
            c = (r[9] + 1) / r[5],
            h = (r[9] - 1) / r[5],
            l = (r[8] - 1) / r[0],
            u = (a[8] + 1) / a[0],
            p = o * l,
            d = o * u,
            f = n / (-l + u),
            m = f * -l;
        t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(f), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.getInverse(e.matrixWorld);
        var g = o + f,
            v = s + f,
            y = p - m,
            x = d + (n - m),
            b = c * s / v * g,
            w = h * s / v * g;
        e.projectionMatrix.makePerspective(y, x, b, w, g, v)
    }

    function ya(e) {
        var t = this,
            i = null,
            n = null,
            r = null,
            a = [],
            o = new ei,
            s = new ei,
            c = 1,
            h = "stage";
        "undefined" != typeof window && "VRFrameData" in window && (n = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", x, !1));
        var l = new ei,
            u = new ti,
            p = new ii,
            d = new sa;
        d.bounds = new pi(0, 0, .5, 1), d.layers.enable(1);
        var f = new sa;
        f.bounds = new pi(.5, 0, .5, 1), f.layers.enable(2);
        var m, g, v = new ca([d, f]);

        function y() {
            return null !== i && !0 === i.isPresenting
        }

        function x() {
            if (y()) {
                var n = i.getEyeParameters("left"),
                    r = n.renderWidth * c,
                    a = n.renderHeight * c;
                g = e.getPixelRatio(), m = e.getSize(), e.setDrawingBufferSize(2 * r, a, 1), _.start()
            } else t.enabled && e.setDrawingBufferSize(m.width, m.height, g), _.stop()
        }
        v.layers.enable(1), v.layers.enable(2);
        var b = [];

        function w(e) {
            for (var t = navigator.getGamepads && navigator.getGamepads(), i = 0, n = 0, r = t.length; i < r; i++) {
                var a = t[i];
                if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("Spatial Controller"))) {
                    if (n === e) return a;
                    n++
                }
            }
        }
        this.enabled = !1, this.getController = function(e) {
            var t = a[e];
            return void 0 === t && ((t = new aa).matrixAutoUpdate = !1, t.visible = !1, a[e] = t), t
        }, this.getDevice = function() {
            return i
        }, this.setDevice = function(e) {
            void 0 !== e && (i = e), _.setContext(e)
        }, this.setFramebufferScaleFactor = function(e) {
            c = e
        }, this.setFrameOfReferenceType = function(e) {
            h = e
        }, this.setPoseTarget = function(e) {
            void 0 !== e && (r = e)
        }, this.getCamera = function(e) {
            var t = "stage" === h ? 1.6 : 0;
            if (null === i) return e.position.set(0, t, 0), e;
            if (i.depthNear = e.near, i.depthFar = e.far, i.getFrameData(n), "stage" === h) {
                var c = i.stageParameters;
                c ? o.fromArray(c.sittingToStandingTransform) : o.makeTranslation(0, t, 0)
            }
            var m = n.pose,
                g = null !== r ? r : e;
            if (g.matrix.copy(o), g.matrix.decompose(g.position, g.quaternion, g.scale), null !== m.orientation && (u.fromArray(m.orientation), g.quaternion.multiply(u)), null !== m.position && (u.setFromRotationMatrix(o), p.fromArray(m.position), p.applyQuaternion(u), g.position.add(p)), g.updateMatrixWorld(), !1 === i.isPresenting) return e;
            d.near = e.near, f.near = e.near, d.far = e.far, f.far = e.far, d.matrixWorldInverse.fromArray(n.leftViewMatrix), f.matrixWorldInverse.fromArray(n.rightViewMatrix), s.getInverse(o), "stage" === h && (d.matrixWorldInverse.multiply(s), f.matrixWorldInverse.multiply(s));
            var y = g.parent;
            null !== y && (l.getInverse(y.matrixWorld), d.matrixWorldInverse.multiply(l), f.matrixWorldInverse.multiply(l)), d.matrixWorld.getInverse(d.matrixWorldInverse), f.matrixWorld.getInverse(f.matrixWorldInverse), d.projectionMatrix.fromArray(n.leftProjectionMatrix), f.projectionMatrix.fromArray(n.rightProjectionMatrix), va(v, d, f);
            var x = i.getLayers();
            if (x.length) {
                var _ = x[0];
                null !== _.leftBounds && 4 === _.leftBounds.length && d.bounds.fromArray(_.leftBounds), null !== _.rightBounds && 4 === _.rightBounds.length && f.bounds.fromArray(_.rightBounds)
            }
            return function() {
                for (var e = 0; e < a.length; e++) {
                    var t = a[e],
                        i = w(e);
                    if (void 0 !== i && void 0 !== i.pose) {
                        if (null === i.pose) return;
                        var n = i.pose;
                        !1 === n.hasPosition && t.position.set(.2, -.6, -.05), null !== n.position && t.position.fromArray(n.position), null !== n.orientation && t.quaternion.fromArray(n.orientation), t.matrix.compose(t.position, t.quaternion, t.scale), t.matrix.premultiply(o), t.matrix.decompose(t.position, t.quaternion, t.scale), t.matrixWorldNeedsUpdate = !0, t.visible = !0;
                        var r = "Daydream Controller" === i.id ? 0 : 1;
                        b[e] !== i.buttons[r].pressed && (b[e] = i.buttons[r].pressed, !0 === b[e] ? t.dispatchEvent({
                            type: "selectstart"
                        }) : (t.dispatchEvent({
                            type: "selectend"
                        }), t.dispatchEvent({
                            type: "select"
                        })))
                    } else t.visible = !1
                }
            }(), v
        }, this.getStandingMatrix = function() {
            return o
        }, this.isPresenting = y;
        var _ = new Oi;
        this.setAnimationLoop = function(e) {
            _.setAnimationLoop(e)
        }, this.submitFrame = function() {
            y() && i.submitFrame()
        }, this.dispose = function() {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", x)
        }
    }

    function xa(e) {
        var t = e.context,
            i = null,
            n = null,
            r = 1,
            a = null,
            o = "stage",
            s = null,
            c = [],
            h = [];

        function l() {
            return null !== n && null !== a
        }
        var u = new sa;
        u.layers.enable(1), u.viewport = new pi;
        var p = new sa;
        p.layers.enable(2), p.viewport = new pi;
        var d = new ca([u, p]);

        function f(e) {
            var t = c[h.indexOf(e.inputSource)];
            t && t.dispatchEvent({
                type: e.type
            })
        }

        function m() {
            e.setFramebuffer(null), y.stop()
        }

        function g(e, t) {
            null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.getInverse(e.matrixWorld)
        }
        d.layers.enable(1), d.layers.enable(2), this.enabled = !1, this.getController = function(e) {
            var t = c[e];
            return void 0 === t && ((t = new aa).matrixAutoUpdate = !1, t.visible = !1, c[e] = t), t
        }, this.getDevice = function() {
            return i
        }, this.setDevice = function(e) {
            void 0 !== e && (i = e), e instanceof XRDevice && t.setCompatibleXRDevice(e)
        }, this.setFramebufferScaleFactor = function(e) {
            r = e
        }, this.setFrameOfReferenceType = function(e) {
            o = e
        }, this.setSession = function(i) {
            null !== (n = i) && (n.addEventListener("select", f), n.addEventListener("selectstart", f), n.addEventListener("selectend", f), n.addEventListener("end", m), n.baseLayer = new XRWebGLLayer(n, t, {
                framebufferScaleFactor: r
            }), n.requestFrameOfReference(o).then(function(t) {
                a = t, e.setFramebuffer(n.baseLayer.framebuffer), y.setContext(n), y.start()
            }), h = n.getInputSources(), n.addEventListener("inputsourceschange", function() {
                h = n.getInputSources(), console.log(h);
                for (var e = 0; e < c.length; e++) {
                    c[e].userData.inputSource = h[e]
                }
            }))
        }, this.getCamera = function(e) {
            if (l()) {
                var t = e.parent,
                    i = d.cameras;
                g(d, t);
                for (var n = 0; n < i.length; n++) g(i[n], t);
                e.matrixWorld.copy(d.matrixWorld);
                for (var r = e.children, a = (n = 0, r.length); n < a; n++) r[n].updateMatrixWorld(!0);
                return va(d, u, p), d
            }
            return e
        }, this.isPresenting = l;
        var v = null;
        var y = new Oi;
        y.setAnimationLoop(function(e, t) {
            if (null !== (s = t.getDevicePose(a)))
                for (var i = n.baseLayer, r = t.views, o = 0; o < r.length; o++) {
                    var l = r[o],
                        u = i.getViewport(l),
                        p = s.getViewMatrix(l),
                        f = d.cameras[o];
                    f.matrix.fromArray(p).getInverse(f.matrix), f.projectionMatrix.fromArray(l.projectionMatrix), f.viewport.set(u.x, u.y, u.width, u.height), 0 === o && d.matrix.copy(f.matrix)
                }
            for (o = 0; o < c.length; o++) {
                var m = c[o],
                    g = h[o];
                if (g) {
                    var y = t.getInputPose(g, a);
                    if (null !== y) {
                        "targetRay" in y ? m.matrix.elements = y.targetRay.transformMatrix : "pointerMatrix" in y && (m.matrix.elements = y.pointerMatrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.visible = !0;
                        continue
                    }
                }
                m.visible = !1
            }
            v && v(e)
        }), this.setAnimationLoop = function(e) {
            v = e
        }, this.dispose = function() {}, this.getStandingMatrix = function() {
            return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4
        }, this.submitFrame = function() {}
    }

    function ba(e) {
        console.log("AeroRender version:", C);
        var t = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            i = void 0 !== e.context ? e.context : null,
            n = void 0 !== e.alpha && e.alpha,
            r = void 0 === e.depth || e.depth,
            a = void 0 === e.stencil || e.stencil,
            o = void 0 !== e.antialias && e.antialias,
            s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
            c = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
            h = void 0 !== e.powerPreference ? e.powerPreference : "default",
            l = null,
            u = null;
        this.domElement = t, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Te, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var p, d, f, m, g, v, y, x, b, w, _, M, S, E, T, A, L, P, R = this,
            O = !1,
            I = null,
            D = null,
            z = null,
            N = -1,
            U = {
                geometry: null,
                program: null,
                wireframe: !1
            },
            B = null,
            F = null,
            G = new pi,
            H = new pi,
            j = null,
            V = 0,
            W = t.width,
            q = t.height,
            X = 1,
            Y = new pi(0, 0, W, q),
            Z = new pi(0, 0, W, q),
            J = !1,
            K = new xi,
            Q = new On,
            $ = !1,
            ee = !1,
            te = new ei,
            ie = new ii;

        function ne() {
            return null === D ? X : 1
        }
        try {
            var re = {
                alpha: n,
                depth: r,
                stencil: a,
                antialias: o,
                premultipliedAlpha: s,
                preserveDrawingBuffer: c,
                powerPreference: h
            };
            if (t.addEventListener("webglcontextlost", ce, !1), t.addEventListener("webglcontextrestored", he, !1), null === (p = i || t.getContext("webgl", re) || t.getContext("experimental-webgl", re))) throw null !== t.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === p.getShaderPrecisionFormat && (p.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            })
        } catch (e) {
            console.error("THREE.WebGLRenderer: " + e.message)
        }

        function ae() {
            d = new In(p), (f = new Cn(p, d, e)).isWebGL2 || (d.get("WEBGL_depth_texture"), d.get("OES_texture_float"), d.get("OES_texture_half_float"), d.get("OES_texture_half_float_linear"), d.get("OES_standard_derivatives"), d.get("OES_element_index_uint"), d.get("ANGLE_instanced_arrays")), d.get("OES_texture_float_linear"), P = new ra(p, d, f), (m = new ia(p, d, P, f)).scissor(H.copy(Z).multiplyScalar(X)), m.viewport(G.copy(Y).multiplyScalar(X)), g = new Nn(p), v = new jr, y = new na(p, d, m, v, f, P, g), x = new Ii(p), b = new Dn(p, x, g), w = new Fn(b, g), T = new Bn(p), _ = new Hr(R, d, f), M = new Xr, S = new Qr, E = new Pn(R, m, w, s), A = new Rn(p, d, g, f), L = new zn(p, d, g, f), g.programs = _.programs, R.context = p, R.capabilities = f, R.extensions = d, R.properties = v, R.renderLists = M, R.state = m, R.info = g
        }
        ae();
        var oe = null;
        "undefined" != typeof navigator && (oe = "xr" in navigator ? new xa(R) : new ya(R)), this.vr = oe;
        var se = new ta(R, w, f.maxTextureSize);

        function ce(e) {
            e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), O = !0
        }

        function he() {
            console.log("THREE.WebGLRenderer: Context Restored."), O = !1, ae()
        }

        function le(e) {
            var t = e.target;
            t.removeEventListener("dispose", le),
                function(e) {
                    ue(e), v.remove(e)
                }(t)
        }

        function ue(e) {
            var t = v.get(e).program;
            e.program = void 0, void 0 !== t && _.releaseProgram(t)
        }
        this.shadowMap = se, this.getContext = function() {
            return p
        }, this.getContextAttributes = function() {
            return p.getContextAttributes()
        }, this.forceContextLoss = function() {
            var e = d.get("WEBGL_lose_context");
            e && e.loseContext()
        }, this.forceContextRestore = function() {
            var e = d.get("WEBGL_lose_context");
            e && e.restoreContext()
        }, this.getPixelRatio = function() {
            return X
        }, this.setPixelRatio = function(e) {
            void 0 !== e && (X = e, this.setSize(W, q, !1))
        }, this.getSize = function() {
            return {
                width: W,
                height: q
            }
        }, this.setSize = function(e, i, n) {
            oe.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (W = e, q = i, t.width = e * X, t.height = i * X, !1 !== n && (t.style.width = e + "px", t.style.height = i + "px"), this.setViewport(0, 0, e, i))
        }, this.getDrawingBufferSize = function() {
            return {
                width: W * X,
                height: q * X
            }
        }, this.setDrawingBufferSize = function(e, i, n) {
            W = e, q = i, X = n, t.width = e * n, t.height = i * n, this.setViewport(0, 0, e, i)
        }, this.getCurrentViewport = function() {
            return G
        }, this.setViewport = function(e, t, i, n) {
            Y.set(e, q - t - n, i, n), m.viewport(G.copy(Y).multiplyScalar(X))
        }, this.setScissor = function(e, t, i, n) {
            Z.set(e, q - t - n, i, n), m.scissor(H.copy(Z).multiplyScalar(X))
        }, this.setScissorTest = function(e) {
            m.setScissorTest(J = e)
        }, this.getClearColor = function() {
            return E.getClearColor()
        }, this.setClearColor = function() {
            E.setClearColor.apply(E, arguments)
        }, this.getClearAlpha = function() {
            return E.getClearAlpha()
        }, this.setClearAlpha = function() {
            E.setClearAlpha.apply(E, arguments)
        }, this.clear = function(e, t, i) {
            var n = 0;
            (void 0 === e || e) && (n |= 16384), (void 0 === t || t) && (n |= 256), (void 0 === i || i) && (n |= 1024), p.clear(n)
        }, this.clearColor = function() {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }, this.dispose = function() {
            t.removeEventListener("webglcontextlost", ce, !1), t.removeEventListener("webglcontextrestored", he, !1), M.dispose(), S.dispose(), v.dispose(), w.dispose(), oe.dispose(), fe.stop()
        }, this.renderBufferImmediate = function(e, t) {
            m.initAttributes();
            var i = v.get(e);
            e.hasPositions && !i.position && (i.position = p.createBuffer()), e.hasNormals && !i.normal && (i.normal = p.createBuffer()), e.hasUvs && !i.uv && (i.uv = p.createBuffer()), e.hasColors && !i.color && (i.color = p.createBuffer());
            var n = t.getAttributes();
            e.hasPositions && (p.bindBuffer(34962, i.position), p.bufferData(34962, e.positionArray, 35048), m.enableAttribute(n.position), p.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), e.hasNormals && (p.bindBuffer(34962, i.normal), p.bufferData(34962, e.normalArray, 35048), m.enableAttribute(n.normal), p.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), e.hasUvs && (p.bindBuffer(34962, i.uv), p.bufferData(34962, e.uvArray, 35048), m.enableAttribute(n.uv), p.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), e.hasColors && (p.bindBuffer(34962, i.color), p.bufferData(34962, e.colorArray, 35048), m.enableAttribute(n.color), p.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), m.disableUnusedAttributes(), p.drawArrays(4, 0, e.count), e.count = 0
        }, this.renderBufferDirect = function(e, t, i, n, r, a) {
            var o = r.isMesh && r.normalMatrix.determinant() < 0;
            m.setMaterial(n, o);
            var s = ye(e, t, n, r),
                c = !1;
            U.geometry === i.id && U.program === s.id && U.wireframe === (!0 === n.wireframe) || (U.geometry = i.id, U.program = s.id, U.wireframe = !0 === n.wireframe, c = !0), r.morphTargetInfluences && (T.update(r, i, n, s), c = !0);
            var h, l = i.index,
                u = i.attributes.position,
                g = 1;
            !0 === n.wireframe && (l = b.getWireframeAttribute(i), g = 2);
            var v = A;
            null !== l && (h = x.get(l), (v = L).setIndex(h)), c && (! function(e, t, i) {
                if (i && i.isInstancedBufferGeometry & !f.isWebGL2 && null === d.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                m.initAttributes();
                var n = i.attributes,
                    r = t.getAttributes(),
                    a = e.defaultAttributeValues;
                for (var o in r) {
                    var s = r[o];
                    if (s >= 0) {
                        var c = n[o];
                        if (void 0 !== c) {
                            var h = c.normalized,
                                l = c.itemSize,
                                u = x.get(c);
                            if (void 0 === u) continue;
                            var g = u.buffer,
                                v = u.type,
                                y = u.bytesPerElement;
                            if (c.isInterleavedBufferAttribute) {
                                var b = c.data,
                                    w = b.stride,
                                    _ = c.offset;
                                b && b.isInstancedInterleavedBuffer ? (m.enableAttributeAndDivisor(s, b.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = b.meshPerAttribute * b.count)) : m.enableAttribute(s), p.bindBuffer(34962, g), p.vertexAttribPointer(s, l, v, h, w * y, _ * y)
                            } else c.isInstancedBufferAttribute ? (m.enableAttributeAndDivisor(s, c.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = c.meshPerAttribute * c.count)) : m.enableAttribute(s), p.bindBuffer(34962, g), p.vertexAttribPointer(s, l, v, h, 0, 0)
                        } else if (void 0 !== a) {
                            var M = a[o];
                            if (void 0 !== M) switch (M.length) {
                                case 2:
                                    p.vertexAttrib2fv(s, M);
                                    break;
                                case 3:
                                    p.vertexAttrib3fv(s, M);
                                    break;
                                case 4:
                                    p.vertexAttrib4fv(s, M);
                                    break;
                                default:
                                    p.vertexAttrib1fv(s, M)
                            }
                        }
                    }
                }
                m.disableUnusedAttributes()
            }(n, s, i), null !== l && p.bindBuffer(34963, h.buffer));
            var y = 1 / 0;
            null !== l ? y = l.count : void 0 !== u && (y = u.count);
            var w = i.drawRange.start * g,
                _ = i.drawRange.count * g,
                M = null !== a ? a.start * g : 0,
                S = null !== a ? a.count * g : 1 / 0,
                E = Math.max(w, M),
                P = Math.min(y, w + _, M + S) - 1,
                R = Math.max(0, P - E + 1);
            if (0 !== R) {
                if (r.isMesh)
                    if (!0 === n.wireframe) m.setLineWidth(n.wireframeLinewidth * ne()), v.setMode(1);
                    else switch (r.drawMode) {
                        case Bt:
                            v.setMode(4);
                            break;
                        case Ft:
                            v.setMode(5);
                            break;
                        case Gt:
                            v.setMode(6)
                    } else if (r.isLine) {
                        var C = n.linewidth;
                        void 0 === C && (C = 1), m.setLineWidth(C * ne()), r.isLineSegments ? v.setMode(1) : r.isLineLoop ? v.setMode(2) : v.setMode(3)
                    } else r.isPoints ? v.setMode(0) : r.isSprite && v.setMode(4);
                i && i.isInstancedBufferGeometry ? i.maxInstancedCount > 0 && v.renderInstances(i, E, R) : v.render(E, R)
            }
        }, this.compile = function(e, t) {
            (u = S.get(e, t)).init(), e.traverse(function(e) {
                e.isLight && (u.pushLight(e), e.castShadow && u.pushShadow(e))
            }), u.setupLights(t), e.traverse(function(t) {
                if (t.material)
                    if (Array.isArray(t.material))
                        for (var i = 0; i < t.material.length; i++) ve(t.material[i], e.fog, t);
                    else ve(t.material, e.fog, t)
            })
        };
        var pe = null;
        var de, fe = new Oi;

        function me(e, t, i, n) {
            for (var r = 0, a = e.length; r < a; r++) {
                var o = e[r],
                    s = o.object,
                    c = o.geometry,
                    h = void 0 === n ? o.material : n,
                    l = o.group;
                if (i.isArrayCamera) {
                    F = i;
                    for (var p = i.cameras, d = 0, f = p.length; d < f; d++) {
                        var g = p[d];
                        if (s.layers.test(g.layers)) {
                            if ("viewport" in g) m.viewport(G.copy(g.viewport));
                            else {
                                var v = g.bounds,
                                    y = v.x * W,
                                    x = v.y * q,
                                    b = v.z * W,
                                    w = v.w * q;
                                m.viewport(G.set(y, x, b, w).multiplyScalar(X))
                            }
                            u.setupLights(g), ge(s, t, g, c, h, l)
                        }
                    }
                } else F = null, ge(s, t, i, c, h, l)
            }
        }

        function ge(e, t, i, n, r, a) {
            if (e.onBeforeRender(R, t, i, n, r, a), u = S.get(t, F || i), e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
                m.setMaterial(r);
                var o = ye(i, t.fog, r, e);
                U.geometry = null, U.program = null, U.wireframe = !1,
                    function(e, t) {
                        e.render(function(e) {
                            R.renderBufferImmediate(e, t)
                        })
                    }(e, o)
            } else R.renderBufferDirect(i, t.fog, n, r, e, a);
            e.onAfterRender(R, t, i, n, r, a), u = S.get(t, F || i)
        }

        function ve(e, t, i) {
            var n = v.get(e),
                r = u.state.lights,
                a = u.state.shadowsArray,
                o = n.lightsHash,
                s = r.state.hash,
                c = _.getParameters(e, r.state, a, t, Q.numPlanes, Q.numIntersection, i),
                h = _.getProgramCode(e, c),
                l = n.program,
                p = !0;
            if (void 0 === l) e.addEventListener("dispose", le);
            else if (l.code !== h) ue(e);
            else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength) o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, p = !1;
            else {
                if (void 0 !== c.shaderID) return;
                p = !1
            }
            if (p) {
                if (c.shaderID) {
                    var d = Ci[c.shaderID];
                    n.shader = {
                        name: e.type,
                        uniforms: wi(d.uniforms),
                        vertexShader: d.vertexShader,
                        fragmentShader: d.fragmentShader
                    }
                } else n.shader = {
                    name: e.type,
                    uniforms: e.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader
                };
                e.onBeforeCompile(n.shader, R), h = _.getProgramCode(e, c), l = _.acquireProgram(e, n.shader, c, h), n.program = l, e.program = l
            }
            var f = l.getAttributes();
            if (e.morphTargets) {
                e.numSupportedMorphTargets = 0;
                for (var m = 0; m < R.maxMorphTargets; m++) f["morphTarget" + m] >= 0 && e.numSupportedMorphTargets++
            }
            if (e.morphNormals) {
                e.numSupportedMorphNormals = 0;
                for (m = 0; m < R.maxMorphNormals; m++) f["morphNormal" + m] >= 0 && e.numSupportedMorphNormals++
            }
            var g = n.shader.uniforms;
            (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (n.numClippingPlanes = Q.numPlanes, n.numIntersection = Q.numIntersection, g.clippingPlanes = Q.uniform), n.fog = t, void 0 === o && (n.lightsHash = o = {}), o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, e.lights && (g.ambientLightColor.value = r.state.ambient, g.directionalLights.value = r.state.directional, g.spotLights.value = r.state.spot, g.rectAreaLights.value = r.state.rectArea, g.pointLights.value = r.state.point, g.hemisphereLights.value = r.state.hemi, g.directionalShadowMap.value = r.state.directionalShadowMap, g.directionalShadowMatrix.value = r.state.directionalShadowMatrix, g.spotShadowMap.value = r.state.spotShadowMap, g.spotShadowMatrix.value = r.state.spotShadowMatrix, g.pointShadowMap.value = r.state.pointShadowMap, g.pointShadowMatrix.value = r.state.pointShadowMatrix);
            var y = n.program.getUniforms(),
                x = Cr.seqWithValue(y.seq, g);
            n.uniformsList = x
        }

        function ye(e, t, i, n) {
            V = 0;
            var r = v.get(i),
                a = u.state.lights,
                o = r.lightsHash,
                s = a.state.hash;
            if ($ && (ee || e !== B)) {
                var c = e === B && i.id === N;
                Q.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, e, r, c)
            }!1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== t ? i.needsUpdate = !0 : (!i.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === Q.numPlanes && r.numIntersection === Q.numIntersection) || (i.needsUpdate = !0)), i.needsUpdate && (ve(i, t, n), i.needsUpdate = !1);
            var h, l, d = !1,
                g = !1,
                y = !1,
                x = r.program,
                b = x.getUniforms(),
                w = r.shader.uniforms;
            if (m.useProgram(x.program) && (d = !0, g = !0, y = !0), i.id !== N && (N = i.id, g = !0), d || B !== e) {
                if (b.setValue(p, "projectionMatrix", e.projectionMatrix), f.logarithmicDepthBuffer && b.setValue(p, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), B !== e && (B = e, g = !0, y = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
                    var _ = b.map.cameraPosition;
                    void 0 !== _ && _.setValue(p, ie.setFromMatrixPosition(e.matrixWorld))
                }(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && b.setValue(p, "viewMatrix", e.matrixWorldInverse)
            }
            if (i.skinning) {
                b.setOptional(p, n, "bindMatrix"), b.setOptional(p, n, "bindMatrixInverse");
                var M = n.skeleton;
                if (M) {
                    var S = M.bones;
                    if (f.floatVertexTextures) {
                        if (void 0 === M.boneTexture) {
                            var E = Math.sqrt(4 * S.length);
                            E = Qt.ceilPowerOfTwo(E), E = Math.max(E, 4);
                            var T = new Float32Array(E * E * 4);
                            T.set(M.boneMatrices);
                            var A = new mi(T, E, E, st, $e);
                            A.needsUpdate = !0, M.boneMatrices = T, M.boneTexture = A, M.boneTextureSize = E
                        }
                        b.setValue(p, "boneTexture", M.boneTexture), b.setValue(p, "boneTextureSize", M.boneTextureSize)
                    } else b.setOptional(p, M, "boneMatrices")
                }
            }
            return g && (b.setValue(p, "toneMappingExposure", R.toneMappingExposure), b.setValue(p, "toneMappingWhitePoint", R.toneMappingWhitePoint), i.lights && (l = y, (h = w).ambientLightColor.needsUpdate = l, h.directionalLights.needsUpdate = l, h.pointLights.needsUpdate = l, h.spotLights.needsUpdate = l, h.rectAreaLights.needsUpdate = l, h.hemisphereLights.needsUpdate = l), t && i.fog && function(e, t) {
                e.fogColor.value = t.color, t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
            }(w, t), i.isMeshBasicMaterial ? xe(w, i) : i.isMeshLambertMaterial ? (xe(w, i), function(e, t) {
                t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
            }(w, i)) : i.isMeshPhongMaterial ? (xe(w, i), i.isMeshToonMaterial ? function(e, t) {
                be(e, t), t.gradientMap && (e.gradientMap.value = t.gradientMap)
            }(w, i) : be(w, i)) : i.isMeshStandardMaterial ? (xe(w, i), i.isMeshPhysicalMaterial ? function(e, t) {
                we(e, t), e.reflectivity.value = t.reflectivity, e.clearCoat.value = t.clearCoat, e.clearCoatRoughness.value = t.clearCoatRoughness
            }(w, i) : we(w, i)) : i.isMeshMatcapMaterial ? (xe(w, i), function(e, t) {
                t.matcap && (e.matcap.value = t.matcap);
                t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === k && (e.bumpScale.value *= -1));
                t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === k && e.normalScale.value.negate());
                t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
            }(w, i)) : i.isMeshDepthMaterial ? (xe(w, i), function(e, t) {
                t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
            }(w, i)) : i.isMeshDistanceMaterial ? (xe(w, i), function(e, t) {
                t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
                e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
            }(w, i)) : i.isMeshNormalMaterial ? (xe(w, i), function(e, t) {
                t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === k && (e.bumpScale.value *= -1));
                t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === k && e.normalScale.value.negate());
                t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
            }(w, i)) : i.isLineBasicMaterial ? (function(e, t) {
                e.diffuse.value = t.color, e.opacity.value = t.opacity
            }(w, i), i.isLineDashedMaterial && function(e, t) {
                e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
            }(w, i)) : i.isPointsMaterial ? function(e, t) {
                e.diffuse.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size * X, e.scale.value = .5 * q, e.map.value = t.map, null !== t.map && (!0 === t.map.matrixAutoUpdate && t.map.updateMatrix(), e.uvTransform.value.copy(t.map.matrix))
            }(w, i) : i.isSpriteMaterial ? function(e, t) {
                e.diffuse.value = t.color, e.opacity.value = t.opacity, e.rotation.value = t.rotation, e.map.value = t.map, null !== t.map && (!0 === t.map.matrixAutoUpdate && t.map.updateMatrix(), e.uvTransform.value.copy(t.map.matrix))
            }(w, i) : i.isShadowMaterial && (w.color.value = i.color, w.opacity.value = i.opacity), void 0 !== w.ltc_1 && (w.ltc_1.value = Ri.LTC_1), void 0 !== w.ltc_2 && (w.ltc_2.value = Ri.LTC_2), Cr.upload(p, r.uniformsList, w, R)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Cr.upload(p, r.uniformsList, w, R), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && b.setValue(p, "center", n.center), b.setValue(p, "modelViewMatrix", n.modelViewMatrix), b.setValue(p, "normalMatrix", n.normalMatrix), b.setValue(p, "modelMatrix", n.matrixWorld), x
        }

        function xe(e, t) {
            var i;
            e.opacity.value = t.opacity, t.color && (e.diffuse.value = t.color), t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity), t.map && (e.map.value = t.map), t.alphaMap && (e.alphaMap.value = t.alphaMap), t.specularMap && (e.specularMap.value = t.specularMap), t.envMap && (e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap.isCubeTexture ? -1 : 1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio, e.maxMipLevel.value = v.get(t.envMap).__maxMipLevel), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity), t.map ? i = t.map : t.specularMap ? i = t.specularMap : t.displacementMap ? i = t.displacementMap : t.normalMap ? i = t.normalMap : t.bumpMap ? i = t.bumpMap : t.roughnessMap ? i = t.roughnessMap : t.metalnessMap ? i = t.metalnessMap : t.alphaMap ? i = t.alphaMap : t.emissiveMap && (i = t.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), e.uvTransform.value.copy(i.matrix))
        }

        function be(e, t) {
            e.specular.value = t.specular, e.shininess.value = Math.max(t.shininess, 1e-4), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === k && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === k && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
        }

        function we(e, t) {
            e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === k && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === k && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
        }
        fe.setAnimationLoop(function(e) {
            oe.isPresenting() || pe && pe(e)
        }), "undefined" != typeof window && fe.setContext(window), this.setAnimationLoop = function(e) {
            pe = e, oe.setAnimationLoop(e), fe.start()
        }, this.render = function(e, t, i, n) {
            if (t && t.isCamera) {
                if (!O) {
                    U.geometry = null, U.program = null, U.wireframe = !1, N = -1, B = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), oe.enabled && (t = oe.getCamera(t)), (u = S.get(e, t)).init(), e.onBeforeRender(R, e, t, i), te.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), K.setFromMatrix(te), ee = this.localClippingEnabled, $ = Q.init(this.clippingPlanes, ee, t), (l = M.get(e, t)).init(),
                        function e(t, i, n) {
                            if (!1 === t.visible) return;
                            var r = t.layers.test(i.layers);
                            if (r)
                                if (t.isLight) u.pushLight(t), t.castShadow && u.pushShadow(t);
                                else if (t.isSprite) {
                                if (!t.frustumCulled || K.intersectsSprite(t)) {
                                    n && ie.setFromMatrixPosition(t.matrixWorld).applyMatrix4(te);
                                    var a = w.update(t),
                                        o = t.material;
                                    l.push(t, a, o, ie.z, null)
                                }
                            } else if (t.isImmediateRenderObject) n && ie.setFromMatrixPosition(t.matrixWorld).applyMatrix4(te), l.push(t, null, t.material, ie.z, null);
                            else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || K.intersectsObject(t))) {
                                n && ie.setFromMatrixPosition(t.matrixWorld).applyMatrix4(te);
                                var a = w.update(t),
                                    o = t.material;
                                if (Array.isArray(o))
                                    for (var s = a.groups, c = 0, h = s.length; c < h; c++) {
                                        var p = s[c],
                                            d = o[p.materialIndex];
                                        d && d.visible && l.push(t, a, d, ie.z, p)
                                    } else o.visible && l.push(t, a, o, ie.z, null)
                            }
                            var f = t.children;
                            for (var c = 0, h = f.length; c < h; c++) e(f[c], i, n)
                        }(e, t, R.sortObjects), !0 === R.sortObjects && l.sort(), $ && Q.beginShadows();
                    var r = u.state.shadowsArray;
                    se.render(r, e, t), u.setupLights(t), $ && Q.endShadows(), this.info.autoReset && this.info.reset(), void 0 === i && (i = null), this.setRenderTarget(i), E.render(l, e, t, n);
                    var a = l.opaque,
                        o = l.transparent;
                    if (e.overrideMaterial) {
                        var s = e.overrideMaterial;
                        a.length && me(a, e, t, s), o.length && me(o, e, t, s)
                    } else a.length && me(a, e, t), o.length && me(o, e, t);
                    i && y.updateRenderTargetMipmap(i), m.buffers.depth.setTest(!0), m.buffers.depth.setMask(!0), m.buffers.color.setMask(!0), m.setPolygonOffset(!1), e.onAfterRender(R, e, t), oe.enabled && oe.submitFrame(), l = null, u = null
                }
            } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }, this.allocTextureUnit = function() {
            var e = V;
            return e >= f.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + e + " texture units while this GPU supports only " + f.maxTextures), V += 1, e
        }, this.setTexture2D = (de = !1, function(e, t) {
            e && e.isWebGLRenderTarget && (de || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), de = !0), e = e.texture), y.setTexture2D(e, t)
        }), this.setTexture3D = function(e, t) {
            y.setTexture3D(e, t)
        }, this.setTexture = function() {
            var e = !1;
            return function(t, i) {
                e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), e = !0), y.setTexture2D(t, i)
            }
        }(), this.setTextureCube = function() {
            var e = !1;
            return function(t, i) {
                t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? y.setTextureCube(t, i) : y.setTextureCubeDynamic(t, i)
            }
        }(), this.setFramebuffer = function(e) {
            I = e
        }, this.getRenderTarget = function() {
            return D
        }, this.setRenderTarget = function(e) {
            D = e, e && void 0 === v.get(e).__webglFramebuffer && y.setupRenderTarget(e);
            var t = I,
                i = !1;
            if (e) {
                var n = v.get(e).__webglFramebuffer;
                e.isWebGLRenderTargetCube ? (t = n[e.activeCubeFace], i = !0) : t = n, G.copy(e.viewport), H.copy(e.scissor), j = e.scissorTest
            } else G.copy(Y).multiplyScalar(X), H.copy(Z).multiplyScalar(X), j = J;
            if (z !== t && (p.bindFramebuffer(36160, t), z = t), m.viewport(G), m.scissor(H), m.setScissorTest(j), i) {
                var r = v.get(e.texture);
                p.framebufferTexture2D(36160, 36064, 34069 + e.activeCubeFace, r.__webglTexture, e.activeMipMapLevel)
            }
        }, this.readRenderTargetPixels = function(e, t, i, n, r, a) {
            if (e && e.isWebGLRenderTarget) {
                var o = v.get(e).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== z && (p.bindFramebuffer(36160, o), s = !0);
                    try {
                        var c = e.texture,
                            h = c.format,
                            l = c.type;
                        if (h !== st && P.convert(h) !== p.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(l === Xe || P.convert(l) === p.getParameter(35738) || l === $e && (f.isWebGL2 || d.get("OES_texture_float") || d.get("WEBGL_color_buffer_float")) || l === et && (f.isWebGL2 ? d.get("EXT_color_buffer_float") : d.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === p.checkFramebufferStatus(36160) ? t >= 0 && t <= e.width - n && i >= 0 && i <= e.height - r && p.readPixels(t, i, n, r, P.convert(h), P.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        s && p.bindFramebuffer(36160, z)
                    }
                }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }, this.copyFramebufferToTexture = function(e, t, i) {
            var n = t.image.width,
                r = t.image.height,
                a = P.convert(t.format);
            this.setTexture2D(t, 0), p.copyTexImage2D(3553, i || 0, a, e.x, e.y, n, r, 0)
        }, this.copyTextureToTexture = function(e, t, i, n) {
            var r = t.image.width,
                a = t.image.height,
                o = P.convert(i.format),
                s = P.convert(i.type);
            this.setTexture2D(i, 0), t.isDataTexture ? p.texSubImage2D(3553, n || 0, e.x, e.y, r, a, o, s, t.image.data) : p.texSubImage2D(3553, n || 0, e.x, e.y, o, s, t.image)
        }
    }

    function wa(e, t) {
        this.name = "", this.color = new Li(e), this.density = void 0 !== t ? t : 25e-5
    }

    function _a(e, t, i) {
        this.name = "", this.color = new Li(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== i ? i : 1e3
    }

    function Ma() {
        Gi.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    function Sa(e, t) {
        this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    function Ea(e, t, i, n) {
        this.data = e, this.itemSize = t, this.offset = i, this.normalized = !0 === n
    }

    function Ta(e) {
        Mn.call(this), this.type = "SpriteMaterial", this.color = new Li(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(e)
    }

    function Aa(e) {
        if (Gi.call(this), this.type = "Sprite", void 0 === ha) {
            ha = new an;
            var t = new Sa(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
            ha.setIndex([0, 1, 2, 0, 2, 3]), ha.addAttribute("position", new Ea(t, 3, 0, !1)), ha.addAttribute("uv", new Ea(t, 2, 3, !1))
        }
        this.geometry = ha, this.material = void 0 !== e ? e : new Ta, this.center = new $t(.5, .5)
    }

    function La() {
        Gi.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }

    function Pa(e, t) {
        e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Ln.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ei, this.bindMatrixInverse = new ei
    }

    function Ra(e, t) {
        if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === t) this.calculateInverses();
        else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
            for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new ei)
        }
    }

    function Ca() {
        Gi.call(this), this.type = "Bone"
    }

    function Oa(e) {
        Mn.call(this), this.type = "LineBasicMaterial", this.color = new Li(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(e)
    }

    function Ia(e, t, i) {
        1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Gi.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new an, this.material = void 0 !== t ? t : new Oa({
            color: 16777215 * Math.random()
        })
    }

    function Da(e, t) {
        Ia.call(this, e, t), this.type = "LineSegments"
    }

    function za(e, t) {
        Ia.call(this, e, t), this.type = "LineLoop"
    }

    function Na(e) {
        Mn.call(this), this.type = "PointsMaterial", this.color = new Li(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(e)
    }

    function Ua(e, t) {
        Gi.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new an, this.material = void 0 !== t ? t : new Na({
            color: 16777215 * Math.random()
        })
    }

    function Ba(e, t, i, n, r, a, o, s, c) {
        ui.call(this, e, t, i, n, r, a, o, s, c), this.format = void 0 !== o ? o : ot, this.minFilter = void 0 !== a ? a : Ve, this.magFilter = void 0 !== r ? r : Ve, this.generateMipmaps = !1
    }

    function Fa(e, t, i, n, r, a, o, s, c, h, l, u) {
        ui.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
            width: t,
            height: i
        }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
    }

    function Ga(e, t, i, n, r, a, o, s, c) {
        ui.call(this, e, t, i, n, r, a, o, s, c), this.needsUpdate = !0
    }

    function ka(e, t, i, n, r, a, o, s, c, h) {
        if ((h = void 0 !== h ? h : lt) !== lt && h !== ut) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === i && h === lt && (i = Je), void 0 === i && h === ut && (i = rt), ui.call(this, null, n, r, a, o, s, h, i, c), this.image = {
            width: e,
            height: t
        }, this.magFilter = void 0 !== o ? o : ke, this.minFilter = void 0 !== s ? s : ke, this.flipY = !1, this.generateMipmaps = !1
    }

    function Ha(e) {
        an.call(this), this.type = "WireframeGeometry";
        var t, i, n, r, a, o, s, c, h, l, u = [],
            p = [0, 0],
            d = {},
            f = ["a", "b", "c"];
        if (e && e.isGeometry) {
            var m = e.faces;
            for (t = 0, n = m.length; t < n; t++) {
                var g = m[t];
                for (i = 0; i < 3; i++) s = g[f[i]], c = g[f[(i + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
                    index1: p[0],
                    index2: p[1]
                })
            }
            for (h in d) o = d[h], l = e.vertices[o.index1], u.push(l.x, l.y, l.z), l = e.vertices[o.index2], u.push(l.x, l.y, l.z)
        } else if (e && e.isBufferGeometry) {
            var v, y, x, b, w, _, M;
            if (l = new ii, null !== e.index) {
                for (v = e.attributes.position, y = e.index, 0 === (x = e.groups).length && (x = [{
                        start: 0,
                        count: y.count,
                        materialIndex: 0
                    }]), r = 0, a = x.length; r < a; ++r)
                    for (t = w = (b = x[r]).start, n = w + b.count; t < n; t += 3)
                        for (i = 0; i < 3; i++) s = y.getX(t + i), c = y.getX(t + (i + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
                            index1: p[0],
                            index2: p[1]
                        });
                for (h in d) o = d[h], l.fromBufferAttribute(v, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(v, o.index2), u.push(l.x, l.y, l.z)
            } else
                for (t = 0, n = (v = e.attributes.position).count / 3; t < n; t++)
                    for (i = 0; i < 3; i++) _ = 3 * t + i, l.fromBufferAttribute(v, _), u.push(l.x, l.y, l.z), M = 3 * t + (i + 1) % 3, l.fromBufferAttribute(v, M), u.push(l.x, l.y, l.z)
        }
        this.addAttribute("position", new $i(u, 3))
    }

    function ja(e, t, i) {
        Vi.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: e,
            slices: t,
            stacks: i
        }, this.fromBufferGeometry(new Va(e, t, i)), this.mergeVertices()
    }

    function Va(e, t, i) {
        an.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
            func: e,
            slices: t,
            stacks: i
        };
        var n, r, a = [],
            o = [],
            s = [],
            c = [],
            h = new ii,
            l = new ii,
            u = new ii,
            p = new ii,
            d = new ii;
        e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var f = t + 1;
        for (n = 0; n <= i; n++) {
            var m = n / i;
            for (r = 0; r <= t; r++) {
                var g = r / t;
                e(g, m, l), o.push(l.x, l.y, l.z), g - 1e-5 >= 0 ? (e(g - 1e-5, m, u), p.subVectors(l, u)) : (e(g + 1e-5, m, u), p.subVectors(u, l)), m - 1e-5 >= 0 ? (e(g, m - 1e-5, u), d.subVectors(l, u)) : (e(g, m + 1e-5, u), d.subVectors(u, l)), h.crossVectors(p, d).normalize(), s.push(h.x, h.y, h.z), c.push(g, m)
            }
        }
        for (n = 0; n < i; n++)
            for (r = 0; r < t; r++) {
                var v = n * f + r,
                    y = n * f + r + 1,
                    x = (n + 1) * f + r + 1,
                    b = (n + 1) * f + r;
                a.push(v, y, b), a.push(y, x, b)
            }
        this.setIndex(a), this.addAttribute("position", new $i(o, 3)), this.addAttribute("normal", new $i(s, 3)), this.addAttribute("uv", new $i(c, 2))
    }

    function Wa(e, t, i, n) {
        Vi.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: i,
            detail: n
        }, this.fromBufferGeometry(new qa(e, t, i, n)), this.mergeVertices()
    }

    function qa(e, t, i, n) {
        an.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: i,
            detail: n
        }, i = i || 1;
        var r = [],
            a = [];

        function o(e, t, i, n) {
            var r, a, o = Math.pow(2, n),
                c = [];
            for (r = 0; r <= o; r++) {
                c[r] = [];
                var h = e.clone().lerp(i, r / o),
                    l = t.clone().lerp(i, r / o),
                    u = o - r;
                for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? h : h.clone().lerp(l, a / u)
            }
            for (r = 0; r < o; r++)
                for (a = 0; a < 2 * (o - r) - 1; a++) {
                    var p = Math.floor(a / 2);
                    a % 2 == 0 ? (s(c[r][p + 1]), s(c[r + 1][p]), s(c[r][p])) : (s(c[r][p + 1]), s(c[r + 1][p + 1]), s(c[r + 1][p]))
                }
        }

        function s(e) {
            r.push(e.x, e.y, e.z)
        }

        function c(t, i) {
            var n = 3 * t;
            i.x = e[n + 0], i.y = e[n + 1], i.z = e[n + 2]
        }

        function h(e, t, i, n) {
            n < 0 && 1 === e.x && (a[t] = e.x - 1), 0 === i.x && 0 === i.z && (a[t] = n / 2 / Math.PI + .5)
        }

        function l(e) {
            return Math.atan2(e.z, -e.x)
        }! function(e) {
            for (var i = new ii, n = new ii, r = new ii, a = 0; a < t.length; a += 3) c(t[a + 0], i), c(t[a + 1], n), c(t[a + 2], r), o(i, n, r, e)
        }(n = n || 0),
        function(e) {
            for (var t = new ii, i = 0; i < r.length; i += 3) t.x = r[i + 0], t.y = r[i + 1], t.z = r[i + 2], t.normalize().multiplyScalar(e), r[i + 0] = t.x, r[i + 1] = t.y, r[i + 2] = t.z
        }(i),
        function() {
            for (var e = new ii, t = 0; t < r.length; t += 3) {
                e.x = r[t + 0], e.y = r[t + 1], e.z = r[t + 2];
                var i = l(e) / 2 / Math.PI + .5,
                    n = (o = e, Math.atan2(-o.y, Math.sqrt(o.x * o.x + o.z * o.z)) / Math.PI + .5);
                a.push(i, 1 - n)
            }
            var o;
            (function() {
                for (var e = new ii, t = new ii, i = new ii, n = new ii, o = new $t, s = new $t, c = new $t, u = 0, p = 0; u < r.length; u += 9, p += 6) {
                    e.set(r[u + 0], r[u + 1], r[u + 2]), t.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), c.set(a[p + 4], a[p + 5]), n.copy(e).add(t).add(i).divideScalar(3);
                    var d = l(n);
                    h(o, p + 0, e, d), h(s, p + 2, t, d), h(c, p + 4, i, d)
                }
            })(),
            function() {
                for (var e = 0; e < a.length; e += 6) {
                    var t = a[e + 0],
                        i = a[e + 2],
                        n = a[e + 4],
                        r = Math.max(t, i, n),
                        o = Math.min(t, i, n);
                    r > .9 && o < .1 && (t < .2 && (a[e + 0] += 1), i < .2 && (a[e + 2] += 1), n < .2 && (a[e + 4] += 1))
                }
            }()
        }(), this.addAttribute("position", new $i(r, 3)), this.addAttribute("normal", new $i(r.slice(), 3)), this.addAttribute("uv", new $i(a, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function Xa(e, t) {
        Vi.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new Ya(e, t)), this.mergeVertices()
    }

    function Ya(e, t) {
        qa.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function Za(e, t) {
        Vi.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new Ja(e, t)), this.mergeVertices()
    }

    function Ja(e, t) {
        qa.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function Ka(e, t) {
        Vi.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new Qa(e, t)), this.mergeVertices()
    }

    function Qa(e, t) {
        var i = (1 + Math.sqrt(5)) / 2,
            n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
        qa.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function $a(e, t) {
        Vi.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new eo(e, t)), this.mergeVertices()
    }

    function eo(e, t) {
        var i = (1 + Math.sqrt(5)) / 2,
            n = 1 / i,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
        qa.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function to(e, t, i, n, r, a) {
        Vi.call(this), this.type = "TubeGeometry", this.parameters = {
            path: e,
            tubularSegments: t,
            radius: i,
            radialSegments: n,
            closed: r
        }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
        var o = new io(e, t, i, n, r);
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
    }

    function io(e, t, i, n, r) {
        an.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: e,
            tubularSegments: t,
            radius: i,
            radialSegments: n,
            closed: r
        }, t = t || 64, i = i || 1, n = n || 8, r = r || !1;
        var a = e.computeFrenetFrames(t, r);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
        var o, s, c = new ii,
            h = new ii,
            l = new $t,
            u = new ii,
            p = [],
            d = [],
            f = [],
            m = [];

        function g(r) {
            u = e.getPointAt(r / t, u);
            var o = a.normals[r],
                l = a.binormals[r];
            for (s = 0; s <= n; s++) {
                var f = s / n * Math.PI * 2,
                    m = Math.sin(f),
                    g = -Math.cos(f);
                h.x = g * o.x + m * l.x, h.y = g * o.y + m * l.y, h.z = g * o.z + m * l.z, h.normalize(), d.push(h.x, h.y, h.z), c.x = u.x + i * h.x, c.y = u.y + i * h.y, c.z = u.z + i * h.z, p.push(c.x, c.y, c.z)
            }
        }! function() {
            for (o = 0; o < t; o++) g(o);
            g(!1 === r ? t : 0),
                function() {
                    for (o = 0; o <= t; o++)
                        for (s = 0; s <= n; s++) l.x = o / t, l.y = s / n, f.push(l.x, l.y)
                }(),
                function() {
                    for (s = 1; s <= t; s++)
                        for (o = 1; o <= n; o++) {
                            var e = (n + 1) * (s - 1) + (o - 1),
                                i = (n + 1) * s + (o - 1),
                                r = (n + 1) * s + o,
                                a = (n + 1) * (s - 1) + o;
                            m.push(e, i, a), m.push(i, r, a)
                        }
                }()
        }(), this.setIndex(m), this.addAttribute("position", new $i(p, 3)), this.addAttribute("normal", new $i(d, 3)), this.addAttribute("uv", new $i(f, 2))
    }

    function no(e, t, i, n, r, a, o) {
        Vi.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new ro(e, t, i, n, r, a)), this.mergeVertices()
    }

    function ro(e, t, i, n, r, a) {
        an.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, e = e || 1, t = t || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
        var o, s, c = [],
            h = [],
            l = [],
            u = [],
            p = new ii,
            d = new ii,
            f = new ii,
            m = new ii,
            g = new ii,
            v = new ii,
            y = new ii;
        for (o = 0; o <= i; ++o) {
            var x = o / i * r * Math.PI * 2;
            for (A(x, r, a, e, f), A(x + .01, r, a, e, m), v.subVectors(m, f), y.addVectors(m, f), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= n; ++s) {
                var b = s / n * Math.PI * 2,
                    w = -t * Math.cos(b),
                    _ = t * Math.sin(b);
                p.x = f.x + (w * y.x + _ * g.x), p.y = f.y + (w * y.y + _ * g.y), p.z = f.z + (w * y.z + _ * g.z), h.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), l.push(d.x, d.y, d.z), u.push(o / i), u.push(s / n)
            }
        }
        for (s = 1; s <= i; s++)
            for (o = 1; o <= n; o++) {
                var M = (n + 1) * (s - 1) + (o - 1),
                    S = (n + 1) * s + (o - 1),
                    E = (n + 1) * s + o,
                    T = (n + 1) * (s - 1) + o;
                c.push(M, S, T), c.push(S, E, T)
            }

        function A(e, t, i, n, r) {
            var a = Math.cos(e),
                o = Math.sin(e),
                s = i / t * e,
                c = Math.cos(s);
            r.x = n * (2 + c) * .5 * a, r.y = n * (2 + c) * o * .5, r.z = n * Math.sin(s) * .5
        }
        this.setIndex(c), this.addAttribute("position", new $i(h, 3)), this.addAttribute("normal", new $i(l, 3)), this.addAttribute("uv", new $i(u, 2))
    }

    function ao(e, t, i, n, r) {
        Vi.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, this.fromBufferGeometry(new oo(e, t, i, n, r)), this.mergeVertices()
    }

    function oo(e, t, i, n, r) {
        an.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, e = e || 1, t = t || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
        var a, o, s = [],
            c = [],
            h = [],
            l = [],
            u = new ii,
            p = new ii,
            d = new ii;
        for (a = 0; a <= i; a++)
            for (o = 0; o <= n; o++) {
                var f = o / n * r,
                    m = a / i * Math.PI * 2;
                p.x = (e + t * Math.cos(m)) * Math.cos(f), p.y = (e + t * Math.cos(m)) * Math.sin(f), p.z = t * Math.sin(m), c.push(p.x, p.y, p.z), u.x = e * Math.cos(f), u.y = e * Math.sin(f), d.subVectors(p, u).normalize(), h.push(d.x, d.y, d.z), l.push(o / n), l.push(a / i)
            }
        for (a = 1; a <= i; a++)
            for (o = 1; o <= n; o++) {
                var g = (n + 1) * a + o - 1,
                    v = (n + 1) * (a - 1) + o - 1,
                    y = (n + 1) * (a - 1) + o,
                    x = (n + 1) * a + o;
                s.push(g, v, x), s.push(v, y, x)
            }
        this.setIndex(s), this.addAttribute("position", new $i(c, 3)), this.addAttribute("normal", new $i(h, 3)), this.addAttribute("uv", new $i(l, 2))
    }
    wa.prototype.isFogExp2 = !0, wa.prototype.clone = function() {
        return new wa(this.color, this.density)
    }, wa.prototype.toJSON = function() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }, _a.prototype.isFog = !0, _a.prototype.clone = function() {
        return new _a(this.color, this.near, this.far)
    }, _a.prototype.toJSON = function() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }, Ma.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Ma,
        copy: function(e, t) {
            return Gi.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
        },
        toJSON: function(e) {
            var t = Gi.prototype.toJSON.call(this, e);
            return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t
        }
    }), Object.defineProperty(Sa.prototype, "needsUpdate", {
        set: function(e) {
            !0 === e && this.version++
        }
    }), Object.assign(Sa.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setArray: function(e) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== e ? e.length / this.stride : 0, this.array = e, this
        },
        setDynamic: function(e) {
            return this.dynamic = e, this
        },
        copy: function(e) {
            return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.dynamic = e.dynamic, this
        },
        copyAt: function(e, t, i) {
            e *= this.stride, i *= t.stride;
            for (var n = 0, r = this.stride; n < r; n++) this.array[e + n] = t.array[i + n];
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(e) {
            return this.onUploadCallback = e, this
        }
    }), Object.defineProperties(Ea.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    }), Object.assign(Ea.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset] = t, this
        },
        setY: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 1] = t, this
        },
        setZ: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 2] = t, this
        },
        setW: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 3] = t, this
        },
        getX: function(e) {
            return this.data.array[e * this.data.stride + this.offset]
        },
        getY: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 1]
        },
        getZ: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 2]
        },
        getW: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 3]
        },
        setXY: function(e, t, i) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this
        },
        setXYZ: function(e, t, i, n) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this
        },
        setXYZW: function(e, t, i, n, r) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this.data.array[e + 3] = r, this
        }
    }), Ta.prototype = Object.create(Mn.prototype), Ta.prototype.constructor = Ta, Ta.prototype.isSpriteMaterial = !0, Ta.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
    }, Aa.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Aa,
        isSprite: !0,
        raycast: function() {
            var e = new ii,
                t = new ii,
                i = new ii,
                n = new $t,
                r = new $t,
                a = new ei,
                o = new ii,
                s = new ii,
                c = new ii,
                h = new $t,
                l = new $t,
                u = new $t;

            function p(e, t, i, o, s, c) {
                n.subVectors(e, i).addScalar(.5).multiply(o), void 0 !== s ? (r.x = c * n.x - s * n.y, r.y = s * n.x + c * n.y) : r.copy(n), e.copy(t), e.x += r.x, e.y += r.y, e.applyMatrix4(a)
            }
            return function(n, r) {
                t.setFromMatrixScale(this.matrixWorld), a.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), i.setFromMatrixPosition(this.modelViewMatrix);
                var d, f, m = this.material.rotation;
                0 !== m && (f = Math.cos(m), d = Math.sin(m));
                var g = this.center;
                p(o.set(-.5, -.5, 0), i, g, t, d, f), p(s.set(.5, -.5, 0), i, g, t, d, f), p(c.set(.5, .5, 0), i, g, t, d, f), h.set(0, 0), l.set(1, 0), u.set(1, 1);
                var v = n.ray.intersectTriangle(o, s, c, !1, e);
                if (null !== v || (p(s.set(-.5, .5, 0), i, g, t, d, f), l.set(0, 1), null !== (v = n.ray.intersectTriangle(o, c, s, !1, e)))) {
                    var y = n.ray.origin.distanceTo(e);
                    y < n.near || y > n.far || r.push({
                        distance: y,
                        point: e.clone(),
                        uv: Tn.getUV(e, o, s, c, h, l, u, new $t),
                        face: null,
                        object: this
                    })
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        },
        copy: function(e) {
            return Gi.prototype.copy.call(this, e), void 0 !== e.center && this.center.copy(e.center), this
        }
    }), La.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: La,
        copy: function(e) {
            Gi.prototype.copy.call(this, e, !1);
            for (var t = e.levels, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function(e, t) {
            void 0 === t && (t = 0), t = Math.abs(t);
            for (var i = this.levels, n = 0; n < i.length && !(t < i[n].distance); n++);
            i.splice(n, 0, {
                distance: t,
                object: e
            }), this.add(e)
        },
        getObjectForDistance: function(e) {
            for (var t = this.levels, i = 1, n = t.length; i < n && !(e < t[i].distance); i++);
            return t[i - 1].object
        },
        raycast: (la = new ii, function(e, t) {
            la.setFromMatrixPosition(this.matrixWorld);
            var i = e.ray.origin.distanceTo(la);
            this.getObjectForDistance(i).raycast(e, t)
        }),
        update: function() {
            var e = new ii,
                t = new ii;
            return function(i) {
                var n = this.levels;
                if (n.length > 1) {
                    e.setFromMatrixPosition(i.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
                    var r = e.distanceTo(t);
                    n[0].object.visible = !0;
                    for (var a = 1, o = n.length; a < o && r >= n[a].distance; a++) n[a - 1].object.visible = !1, n[a].object.visible = !0;
                    for (; a < o; a++) n[a].object.visible = !1
                }
            }
        }(),
        toJSON: function(e) {
            var t = Gi.prototype.toJSON.call(this, e);
            t.object.levels = [];
            for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
                var a = i[n];
                t.object.levels.push({
                    object: a.object.uuid,
                    distance: a.distance
                })
            }
            return t
        }
    }), Pa.prototype = Object.assign(Object.create(Ln.prototype), {
        constructor: Pa,
        isSkinnedMesh: !0,
        bind: function(e, t) {
            this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            for (var e = new pi, t = this.geometry.attributes.skinWeight, i = 0, n = t.count; i < n; i++) {
                e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.w = t.getW(i);
                var r = 1 / e.manhattanLength();
                r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(i, e.x, e.y, e.z, e.w)
            }
        },
        updateMatrixWorld: function(e) {
            Ln.prototype.updateMatrixWorld.call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Object.assign(Ra.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var e = 0, t = this.bones.length; e < t; e++) {
                var i = new ei;
                this.bones[e] && i.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(i)
            }
        },
        pose: function() {
            var e, t, i;
            for (t = 0, i = this.bones.length; t < i; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
            for (t = 0, i = this.bones.length; t < i; t++)(e = this.bones[t]) && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
        },
        update: (ua = new ei, pa = new ei, function() {
            for (var e = this.bones, t = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = e.length; r < a; r++) {
                var o = e[r] ? e[r].matrixWorld : pa;
                ua.multiplyMatrices(o, t[r]), ua.toArray(i, 16 * r)
            }
            void 0 !== n && (n.needsUpdate = !0)
        }),
        clone: function() {
            return new Ra(this.bones, this.boneInverses)
        },
        getBoneByName: function(e) {
            for (var t = 0, i = this.bones.length; t < i; t++) {
                var n = this.bones[t];
                if (n.name === e) return n
            }
        }
    }), Ca.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Ca,
        isBone: !0
    }), Oa.prototype = Object.create(Mn.prototype), Oa.prototype.constructor = Oa, Oa.prototype.isLineBasicMaterial = !0, Oa.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
    }, Ia.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Ia,
        isLine: !0,
        computeLineDistances: (da = new ii, fa = new ii, function() {
            var e = this.geometry;
            if (e.isBufferGeometry)
                if (null === e.index) {
                    for (var t = e.attributes.position, i = [0], n = 1, r = t.count; n < r; n++) da.fromBufferAttribute(t, n - 1), fa.fromBufferAttribute(t, n), i[n] = i[n - 1], i[n] += da.distanceTo(fa);
                    e.addAttribute("lineDistance", new $i(i, 1))
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (e.isGeometry) {
                var a = e.vertices;
                for ((i = e.lineDistances)[0] = 0, n = 1, r = a.length; n < r; n++) i[n] = i[n - 1], i[n] += a[n - 1].distanceTo(a[n])
            }
            return this
        }),
        raycast: function() {
            var e = new ei,
                t = new En,
                i = new vi;
            return function(n, r) {
                var a = n.linePrecision,
                    o = this.geometry,
                    s = this.matrixWorld;
                if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(s), i.radius += a, !1 !== n.ray.intersectsSphere(i)) {
                    e.getInverse(s), t.copy(n.ray).applyMatrix4(e);
                    var c = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        h = c * c,
                        l = new ii,
                        u = new ii,
                        p = new ii,
                        d = new ii,
                        f = this && this.isLineSegments ? 2 : 1;
                    if (o.isBufferGeometry) {
                        var m = o.index,
                            g = o.attributes.position.array;
                        if (null !== m)
                            for (var v = m.array, y = 0, x = v.length - 1; y < x; y += f) {
                                var b = v[y],
                                    w = v[y + 1];
                                if (l.fromArray(g, 3 * b), u.fromArray(g, 3 * w), !(t.distanceSqToSegment(l, u, d, p) > h)) d.applyMatrix4(this.matrixWorld), (S = n.ray.origin.distanceTo(d)) < n.near || S > n.far || r.push({
                                    distance: S,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            } else
                                for (y = 0, x = g.length / 3 - 1; y < x; y += f) {
                                    if (l.fromArray(g, 3 * y), u.fromArray(g, 3 * y + 3), !(t.distanceSqToSegment(l, u, d, p) > h)) d.applyMatrix4(this.matrixWorld), (S = n.ray.origin.distanceTo(d)) < n.near || S > n.far || r.push({
                                        distance: S,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                    } else if (o.isGeometry) {
                        var _ = o.vertices,
                            M = _.length;
                        for (y = 0; y < M - 1; y += f) {
                            var S;
                            if (!(t.distanceSqToSegment(_[y], _[y + 1], d, p) > h)) d.applyMatrix4(this.matrixWorld), (S = n.ray.origin.distanceTo(d)) < n.near || S > n.far || r.push({
                                distance: S,
                                point: p.clone().applyMatrix4(this.matrixWorld),
                                index: y,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
                    }
                }
            }
        }(),
        copy: function(e) {
            return Gi.prototype.copy.call(this, e), this.geometry.copy(e.geometry), this.material.copy(e.material), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), Da.prototype = Object.assign(Object.create(Ia.prototype), {
        constructor: Da,
        isLineSegments: !0,
        computeLineDistances: function() {
            var e = new ii,
                t = new ii;
            return function() {
                var i = this.geometry;
                if (i.isBufferGeometry)
                    if (null === i.index) {
                        for (var n = i.attributes.position, r = [], a = 0, o = n.count; a < o; a += 2) e.fromBufferAttribute(n, a), t.fromBufferAttribute(n, a + 1), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + e.distanceTo(t);
                        i.addAttribute("lineDistance", new $i(r, 1))
                    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (i.isGeometry) {
                    var s = i.vertices;
                    for (r = i.lineDistances, a = 0, o = s.length; a < o; a += 2) e.copy(s[a]), t.copy(s[a + 1]), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + e.distanceTo(t)
                }
                return this
            }
        }()
    }), za.prototype = Object.assign(Object.create(Ia.prototype), {
        constructor: za,
        isLineLoop: !0
    }), Na.prototype = Object.create(Mn.prototype), Na.prototype.constructor = Na, Na.prototype.isPointsMaterial = !0, Na.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
    }, Ua.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Ua,
        isPoints: !0,
        raycast: function() {
            var e = new ei,
                t = new En,
                i = new vi;
            return function(n, r) {
                var a = this,
                    o = this.geometry,
                    s = this.matrixWorld,
                    c = n.params.Points.threshold;
                if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(s), i.radius += c, !1 !== n.ray.intersectsSphere(i)) {
                    e.getInverse(s), t.copy(n.ray).applyMatrix4(e);
                    var h = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        l = h * h,
                        u = new ii,
                        p = new ii;
                    if (o.isBufferGeometry) {
                        var d = o.index,
                            f = o.attributes.position.array;
                        if (null !== d)
                            for (var m = d.array, g = 0, v = m.length; g < v; g++) {
                                var y = m[g];
                                u.fromArray(f, 3 * y), w(u, y)
                            } else {
                                g = 0;
                                for (var x = f.length / 3; g < x; g++) u.fromArray(f, 3 * g), w(u, g)
                            }
                    } else {
                        var b = o.vertices;
                        for (g = 0, x = b.length; g < x; g++) w(b[g], g)
                    }
                }

                function w(e, i) {
                    var o = t.distanceSqToPoint(e);
                    if (o < l) {
                        t.closestPointToPoint(e, p), p.applyMatrix4(s);
                        var c = n.ray.origin.distanceTo(p);
                        if (c < n.near || c > n.far) return;
                        r.push({
                            distance: c,
                            distanceToRay: Math.sqrt(o),
                            point: p.clone(),
                            index: i,
                            face: null,
                            object: a
                        })
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Ba.prototype = Object.assign(Object.create(ui.prototype), {
        constructor: Ba,
        isVideoTexture: !0,
        update: function() {
            var e = this.image;
            e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }), Fa.prototype = Object.create(ui.prototype), Fa.prototype.constructor = Fa, Fa.prototype.isCompressedTexture = !0, Ga.prototype = Object.create(ui.prototype), Ga.prototype.constructor = Ga, Ga.prototype.isCanvasTexture = !0, ka.prototype = Object.create(ui.prototype), ka.prototype.constructor = ka, ka.prototype.isDepthTexture = !0, Ha.prototype = Object.create(an.prototype), Ha.prototype.constructor = Ha, ja.prototype = Object.create(Vi.prototype), ja.prototype.constructor = ja, Va.prototype = Object.create(an.prototype), Va.prototype.constructor = Va, Wa.prototype = Object.create(Vi.prototype), Wa.prototype.constructor = Wa, qa.prototype = Object.create(an.prototype), qa.prototype.constructor = qa, Xa.prototype = Object.create(Vi.prototype), Xa.prototype.constructor = Xa, Ya.prototype = Object.create(qa.prototype), Ya.prototype.constructor = Ya, Za.prototype = Object.create(Vi.prototype), Za.prototype.constructor = Za, Ja.prototype = Object.create(qa.prototype), Ja.prototype.constructor = Ja, Ka.prototype = Object.create(Vi.prototype), Ka.prototype.constructor = Ka, Qa.prototype = Object.create(qa.prototype), Qa.prototype.constructor = Qa, $a.prototype = Object.create(Vi.prototype), $a.prototype.constructor = $a, eo.prototype = Object.create(qa.prototype), eo.prototype.constructor = eo, to.prototype = Object.create(Vi.prototype), to.prototype.constructor = to, io.prototype = Object.create(an.prototype), io.prototype.constructor = io, no.prototype = Object.create(Vi.prototype), no.prototype.constructor = no, ro.prototype = Object.create(an.prototype), ro.prototype.constructor = ro, ao.prototype = Object.create(Vi.prototype), ao.prototype.constructor = ao, oo.prototype = Object.create(an.prototype), oo.prototype.constructor = oo;
    var so = function(e, t, i) {
        i = i || 2;
        var n, r, a, o, s, c, h, l = t && t.length,
            u = l ? t[0] * i : e.length,
            p = co(e, 0, u, i, !0),
            d = [];
        if (!p) return d;
        if (l && (p = function(e, t, i, n) {
                var r, a, o, s, c, h = [];
                for (r = 0, a = t.length; r < a; r++) o = t[r] * n, s = r < a - 1 ? t[r + 1] * n : e.length, (c = co(e, o, s, n, !1)) === c.next && (c.steiner = !0), h.push(xo(c));
                for (h.sort(go), r = 0; r < h.length; r++) vo(h[r], i), i = ho(i, i.next);
                return i
            }(e, t, p, i)), e.length > 80 * i) {
            n = a = e[0], r = o = e[1];
            for (var f = i; f < u; f += i)(s = e[f]) < n && (n = s), (c = e[f + 1]) < r && (r = c), s > a && (a = s), c > o && (o = c);
            h = 0 !== (h = Math.max(a - n, o - r)) ? 1 / h : 0
        }
        return lo(p, d, i, n, r, h), d
    };

    function co(e, t, i, n, r) {
        var a, o;
        if (r === function(e, t, i, n) {
                for (var r = 0, a = t, o = i - n; a < i; a += n) r += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
                return r
            }(e, t, i, n) > 0)
            for (a = t; a < i; a += n) o = Ao(a, e[a], e[a + 1], o);
        else
            for (a = i - n; a >= t; a -= n) o = Ao(a, e[a], e[a + 1], o);
        return o && Mo(o, o.next) && (Lo(o), o = o.next), o
    }

    function ho(e, t) {
        if (!e) return e;
        t || (t = e);
        var i, n = e;
        do {
            if (i = !1, n.steiner || !Mo(n, n.next) && 0 !== _o(n.prev, n, n.next)) n = n.next;
            else {
                if (Lo(n), (n = t = n.prev) === n.next) break;
                i = !0
            }
        } while (i || n !== t);
        return t
    }

    function lo(e, t, i, n, r, a, o) {
        if (e) {
            !o && a && function(e, t, i, n) {
                var r = e;
                do {
                    null === r.z && (r.z = yo(r.x, r.y, t, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
                } while (r !== e);
                r.prevZ.nextZ = null, r.prevZ = null,
                    function(e) {
                        var t, i, n, r, a, o, s, c, h = 1;
                        do {
                            for (i = e, e = null, a = null, o = 0; i;) {
                                for (o++, n = i, s = 0, t = 0; t < h && (s++, n = n.nextZ); t++);
                                for (c = h; s > 0 || c > 0 && n;) 0 !== s && (0 === c || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, c--), a ? a.nextZ = r : e = r, r.prevZ = a, a = r;
                                i = n
                            }
                            a.nextZ = null, h *= 2
                        } while (o > 1)
                    }(r)
            }(e, n, r, a);
            for (var s, c, h = e; e.prev !== e.next;)
                if (s = e.prev, c = e.next, a ? po(e, n, r, a) : uo(e)) t.push(s.i / i), t.push(e.i / i), t.push(c.i / i), Lo(e), e = c.next, h = c.next;
                else if ((e = c) === h) {
                o ? 1 === o ? lo(e = fo(e, t, i), t, i, n, r, a, 2) : 2 === o && mo(e, t, i, n, r, a) : lo(ho(e), t, i, n, r, a, 1);
                break
            }
        }
    }

    function uo(e) {
        var t = e.prev,
            i = e,
            n = e.next;
        if (_o(t, i, n) >= 0) return !1;
        for (var r = e.next.next; r !== e.prev;) {
            if (bo(t.x, t.y, i.x, i.y, n.x, n.y, r.x, r.y) && _o(r.prev, r, r.next) >= 0) return !1;
            r = r.next
        }
        return !0
    }

    function po(e, t, i, n) {
        var r = e.prev,
            a = e,
            o = e.next;
        if (_o(r, a, o) >= 0) return !1;
        for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, h = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = yo(s, c, t, i, n), p = yo(h, l, t, i, n), d = e.nextZ; d && d.z <= p;) {
            if (d !== e.prev && d !== e.next && bo(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && _o(d.prev, d, d.next) >= 0) return !1;
            d = d.nextZ
        }
        for (d = e.prevZ; d && d.z >= u;) {
            if (d !== e.prev && d !== e.next && bo(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && _o(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ
        }
        return !0
    }

    function fo(e, t, i) {
        var n = e;
        do {
            var r = n.prev,
                a = n.next.next;
            !Mo(r, a) && So(r, n, n.next, a) && Eo(r, a) && Eo(a, r) && (t.push(r.i / i), t.push(n.i / i), t.push(a.i / i), Lo(n), Lo(n.next), n = e = a), n = n.next
        } while (n !== e);
        return n
    }

    function mo(e, t, i, n, r, a) {
        var o = e;
        do {
            for (var s = o.next.next; s !== o.prev;) {
                if (o.i !== s.i && wo(o, s)) {
                    var c = To(o, s);
                    return o = ho(o, o.next), c = ho(c, c.next), lo(o, t, i, n, r, a), void lo(c, t, i, n, r, a)
                }
                s = s.next
            }
            o = o.next
        } while (o !== e)
    }

    function go(e, t) {
        return e.x - t.x
    }

    function vo(e, t) {
        if (t = function(e, t) {
                var i, n = t,
                    r = e.x,
                    a = e.y,
                    o = -1 / 0;
                do {
                    if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                        var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                        if (s <= r && s > o) {
                            if (o = s, s === r) {
                                if (a === n.y) return n;
                                if (a === n.next.y) return n.next
                            }
                            i = n.x < n.next.x ? n : n.next
                        }
                    }
                    n = n.next
                } while (n !== t);
                if (!i) return null;
                if (r === o) return i.prev;
                var c, h = i,
                    l = i.x,
                    u = i.y,
                    p = 1 / 0;
                n = i.next;
                for (; n !== h;) r >= n.x && n.x >= l && r !== n.x && bo(a < u ? r : o, a, l, u, a < u ? o : r, a, n.x, n.y) && ((c = Math.abs(a - n.y) / (r - n.x)) < p || c === p && n.x > i.x) && Eo(n, e) && (i = n, p = c), n = n.next;
                return i
            }(e, t)) {
            var i = To(t, e);
            ho(i, i.next)
        }
    }

    function yo(e, t, i, n, r) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
    }

    function xo(e) {
        var t = e,
            i = e;
        do {
            t.x < i.x && (i = t), t = t.next
        } while (t !== e);
        return i
    }

    function bo(e, t, i, n, r, a, o, s) {
        return (r - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (n - s) - (i - o) * (t - s) >= 0 && (i - o) * (a - s) - (r - o) * (n - s) >= 0
    }

    function wo(e, t) {
        return e.next.i !== t.i && e.prev.i !== t.i && ! function(e, t) {
            var i = e;
            do {
                if (i.i !== e.i && i.next.i !== e.i && i.i !== t.i && i.next.i !== t.i && So(i, i.next, e, t)) return !0;
                i = i.next
            } while (i !== e);
            return !1
        }(e, t) && Eo(e, t) && Eo(t, e) && function(e, t) {
            var i = e,
                n = !1,
                r = (e.x + t.x) / 2,
                a = (e.y + t.y) / 2;
            do {
                i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
            } while (i !== e);
            return n
        }(e, t)
    }

    function _o(e, t, i) {
        return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y)
    }

    function Mo(e, t) {
        return e.x === t.x && e.y === t.y
    }

    function So(e, t, i, n) {
        return !!(Mo(e, t) && Mo(i, n) || Mo(e, n) && Mo(i, t)) || _o(e, t, i) > 0 != _o(e, t, n) > 0 && _o(i, n, e) > 0 != _o(i, n, t) > 0
    }

    function Eo(e, t) {
        return _o(e.prev, e, e.next) < 0 ? _o(e, t, e.next) >= 0 && _o(e, e.prev, t) >= 0 : _o(e, t, e.prev) < 0 || _o(e, e.next, t) < 0
    }

    function To(e, t) {
        var i = new Po(e.i, e.x, e.y),
            n = new Po(t.i, t.x, t.y),
            r = e.next,
            a = t.prev;
        return e.next = t, t.prev = e, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
    }

    function Ao(e, t, i, n) {
        var r = new Po(e, t, i);
        return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
    }

    function Lo(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
    }

    function Po(e, t, i) {
        this.i = e, this.x = t, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }
    var Ro = {
        area: function(e) {
            for (var t = e.length, i = 0, n = t - 1, r = 0; r < t; n = r++) i += e[n].x * e[r].y - e[r].x * e[n].y;
            return .5 * i
        },
        isClockWise: function(e) {
            return Ro.area(e) < 0
        },
        triangulateShape: function(e, t) {
            var i = [],
                n = [],
                r = [];
            Co(e), Oo(i, e);
            var a = e.length;
            t.forEach(Co);
            for (var o = 0; o < t.length; o++) n.push(a), a += t[o].length, Oo(i, t[o]);
            var s = so(i, n);
            for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
            return r
        }
    };

    function Co(e) {
        var t = e.length;
        t > 2 && e[t - 1].equals(e[0]) && e.pop()
    }

    function Oo(e, t) {
        for (var i = 0; i < t.length; i++) e.push(t[i].x), e.push(t[i].y)
    }

    function Io(e, t) {
        Vi.call(this), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: e,
            options: t
        }, this.fromBufferGeometry(new Do(e, t)), this.mergeVertices()
    }

    function Do(e, t) {
        an.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
            shapes: e,
            options: t
        }, e = Array.isArray(e) ? e : [e];
        for (var i = this, n = [], r = [], a = 0, o = e.length; a < o; a++) {
            s(e[a])
        }

        function s(e) {
            var a = [],
                o = void 0 !== t.curveSegments ? t.curveSegments : 12,
                s = void 0 !== t.steps ? t.steps : 1,
                c = void 0 !== t.depth ? t.depth : 100,
                h = void 0 === t.bevelEnabled || t.bevelEnabled,
                l = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
                u = void 0 !== t.bevelSize ? t.bevelSize : l - 2,
                p = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
                d = t.extrudePath,
                f = void 0 !== t.UVGenerator ? t.UVGenerator : zo;
            void 0 !== t.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = t.amount);
            var m, g, v, y, x, b, w, _, M = !1;
            d && (m = d.getSpacedPoints(s), M = !0, h = !1, g = d.computeFrenetFrames(s, !1), v = new ii, y = new ii, x = new ii), h || (p = 0, l = 0, u = 0);
            var S = e.extractPoints(o),
                E = S.shape,
                T = S.holes;
            if (!Ro.isClockWise(E))
                for (E = E.reverse(), w = 0, _ = T.length; w < _; w++) b = T[w], Ro.isClockWise(b) && (T[w] = b.reverse());
            var A = Ro.triangulateShape(E, T),
                L = E;
            for (w = 0, _ = T.length; w < _; w++) b = T[w], E = E.concat(b);

            function P(e, t, i) {
                return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(i).add(e)
            }
            var R, C, O, I, D, z, N = E.length,
                U = A.length;

            function B(e, t, i) {
                var n, r, a, o = e.x - t.x,
                    s = e.y - t.y,
                    c = i.x - e.x,
                    h = i.y - e.y,
                    l = o * o + s * s,
                    u = o * h - s * c;
                if (Math.abs(u) > Number.EPSILON) {
                    var p = Math.sqrt(l),
                        d = Math.sqrt(c * c + h * h),
                        f = t.x - s / p,
                        m = t.y + o / p,
                        g = ((i.x - h / d - f) * h - (i.y + c / d - m) * c) / (o * h - s * c),
                        v = (n = f + o * g - e.x) * n + (r = m + s * g - e.y) * r;
                    if (v <= 2) return new $t(n, r);
                    a = Math.sqrt(v / 2)
                } else {
                    var y = !1;
                    o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0), y ? (n = -s, r = o, a = Math.sqrt(l)) : (n = o, r = s, a = Math.sqrt(l / 2))
                }
                return new $t(n / a, r / a)
            }
            for (var F = [], G = 0, k = L.length, H = k - 1, j = G + 1; G < k; G++, H++, j++) H === k && (H = 0), j === k && (j = 0), F[G] = B(L[G], L[H], L[j]);
            var V, W, q = [],
                X = F.concat();
            for (w = 0, _ = T.length; w < _; w++) {
                for (b = T[w], V = [], G = 0, H = (k = b.length) - 1, j = G + 1; G < k; G++, H++, j++) H === k && (H = 0), j === k && (j = 0), V[G] = B(b[G], b[H], b[j]);
                q.push(V), X = X.concat(V)
            }
            for (R = 0; R < p; R++) {
                for (O = R / p, I = l * Math.cos(O * Math.PI / 2), C = u * Math.sin(O * Math.PI / 2), G = 0, k = L.length; G < k; G++) Z((D = P(L[G], F[G], C)).x, D.y, -I);
                for (w = 0, _ = T.length; w < _; w++)
                    for (b = T[w], V = q[w], G = 0, k = b.length; G < k; G++) Z((D = P(b[G], V[G], C)).x, D.y, -I)
            }
            for (C = u, G = 0; G < N; G++) D = h ? P(E[G], X[G], C) : E[G], M ? (y.copy(g.normals[0]).multiplyScalar(D.x), v.copy(g.binormals[0]).multiplyScalar(D.y), x.copy(m[0]).add(y).add(v), Z(x.x, x.y, x.z)) : Z(D.x, D.y, 0);
            for (W = 1; W <= s; W++)
                for (G = 0; G < N; G++) D = h ? P(E[G], X[G], C) : E[G], M ? (y.copy(g.normals[W]).multiplyScalar(D.x), v.copy(g.binormals[W]).multiplyScalar(D.y), x.copy(m[W]).add(y).add(v), Z(x.x, x.y, x.z)) : Z(D.x, D.y, c / s * W);
            for (R = p - 1; R >= 0; R--) {
                for (O = R / p, I = l * Math.cos(O * Math.PI / 2), C = u * Math.sin(O * Math.PI / 2), G = 0, k = L.length; G < k; G++) Z((D = P(L[G], F[G], C)).x, D.y, c + I);
                for (w = 0, _ = T.length; w < _; w++)
                    for (b = T[w], V = q[w], G = 0, k = b.length; G < k; G++) D = P(b[G], V[G], C), M ? Z(D.x, D.y + m[s - 1].y, m[s - 1].x + I) : Z(D.x, D.y, c + I)
            }

            function Y(e, t) {
                var i, n;
                for (G = e.length; --G >= 0;) {
                    i = G, (n = G - 1) < 0 && (n = e.length - 1);
                    var r = 0,
                        a = s + 2 * p;
                    for (r = 0; r < a; r++) {
                        var o = N * r,
                            c = N * (r + 1);
                        K(t + i + o, t + n + o, t + n + c, t + i + c)
                    }
                }
            }

            function Z(e, t, i) {
                a.push(e), a.push(t), a.push(i)
            }

            function J(e, t, r) {
                Q(e), Q(t), Q(r);
                var a = n.length / 3,
                    o = f.generateTopUV(i, n, a - 3, a - 2, a - 1);
                $(o[0]), $(o[1]), $(o[2])
            }

            function K(e, t, r, a) {
                Q(e), Q(t), Q(a), Q(t), Q(r), Q(a);
                var o = n.length / 3,
                    s = f.generateSideWallUV(i, n, o - 6, o - 3, o - 2, o - 1);
                $(s[0]), $(s[1]), $(s[3]), $(s[1]), $(s[2]), $(s[3])
            }

            function Q(e) {
                n.push(a[3 * e + 0]), n.push(a[3 * e + 1]), n.push(a[3 * e + 2])
            }

            function $(e) {
                r.push(e.x), r.push(e.y)
            }! function() {
                var e = n.length / 3;
                if (h) {
                    var t = 0,
                        r = N * t;
                    for (G = 0; G < U; G++) J((z = A[G])[2] + r, z[1] + r, z[0] + r);
                    for (r = N * (t = s + 2 * p), G = 0; G < U; G++) J((z = A[G])[0] + r, z[1] + r, z[2] + r)
                } else {
                    for (G = 0; G < U; G++) J((z = A[G])[2], z[1], z[0]);
                    for (G = 0; G < U; G++) J((z = A[G])[0] + N * s, z[1] + N * s, z[2] + N * s)
                }
                i.addGroup(e, n.length / 3 - e, 0)
            }(),
            function() {
                var e = n.length / 3,
                    t = 0;
                for (Y(L, t), t += L.length, w = 0, _ = T.length; w < _; w++) Y(b = T[w], t), t += b.length;
                i.addGroup(e, n.length / 3 - e, 1)
            }()
        }
        this.addAttribute("position", new $i(n, 3)), this.addAttribute("uv", new $i(r, 2)), this.computeVertexNormals()
    }
    Io.prototype = Object.create(Vi.prototype), Io.prototype.constructor = Io, Io.prototype.toJSON = function() {
        var e = Vi.prototype.toJSON.call(this);
        return No(this.parameters.shapes, this.parameters.options, e)
    }, Do.prototype = Object.create(an.prototype), Do.prototype.constructor = Do, Do.prototype.toJSON = function() {
        var e = an.prototype.toJSON.call(this);
        return No(this.parameters.shapes, this.parameters.options, e)
    };
    var zo = {
        generateTopUV: function(e, t, i, n, r) {
            var a = t[3 * i],
                o = t[3 * i + 1],
                s = t[3 * n],
                c = t[3 * n + 1],
                h = t[3 * r],
                l = t[3 * r + 1];
            return [new $t(a, o), new $t(s, c), new $t(h, l)]
        },
        generateSideWallUV: function(e, t, i, n, r, a) {
            var o = t[3 * i],
                s = t[3 * i + 1],
                c = t[3 * i + 2],
                h = t[3 * n],
                l = t[3 * n + 1],
                u = t[3 * n + 2],
                p = t[3 * r],
                d = t[3 * r + 1],
                f = t[3 * r + 2],
                m = t[3 * a],
                g = t[3 * a + 1],
                v = t[3 * a + 2];
            return Math.abs(s - l) < .01 ? [new $t(o, 1 - c), new $t(h, 1 - u), new $t(p, 1 - f), new $t(m, 1 - v)] : [new $t(s, 1 - c), new $t(l, 1 - u), new $t(d, 1 - f), new $t(g, 1 - v)]
        }
    };

    function No(e, t, i) {
        if (i.shapes = [], Array.isArray(e))
            for (var n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                i.shapes.push(a.uuid)
            } else i.shapes.push(e.uuid);
        return void 0 !== t.extrudePath && (i.options.extrudePath = t.extrudePath.toJSON()), i
    }

    function Uo(e, t) {
        Vi.call(this), this.type = "TextGeometry", this.parameters = {
            text: e,
            parameters: t
        }, this.fromBufferGeometry(new Bo(e, t)), this.mergeVertices()
    }

    function Bo(e, t) {
        var i = (t = t || {}).font;
        if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Vi;
        var n = i.generateShapes(e, t.size);
        t.depth = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), Do.call(this, n, t), this.type = "TextBufferGeometry"
    }

    function Fo(e, t, i, n, r, a, o) {
        Vi.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, this.fromBufferGeometry(new Go(e, t, i, n, r, a, o)), this.mergeVertices()
    }

    function Go(e, t, i, n, r, a, o) {
        an.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var s, c, h = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
            l = 0,
            u = [],
            p = new ii,
            d = new ii,
            f = [],
            m = [],
            g = [],
            v = [];
        for (c = 0; c <= i; c++) {
            var y = [],
                x = c / i;
            for (s = 0; s <= t; s++) {
                var b = s / t;
                p.x = -e * Math.cos(n + b * r) * Math.sin(a + x * o), p.y = e * Math.cos(a + x * o), p.z = e * Math.sin(n + b * r) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.set(p.x, p.y, p.z).normalize(), g.push(d.x, d.y, d.z), v.push(b, 1 - x), y.push(l++)
            }
            u.push(y)
        }
        for (c = 0; c < i; c++)
            for (s = 0; s < t; s++) {
                var w = u[c][s + 1],
                    _ = u[c][s],
                    M = u[c + 1][s],
                    S = u[c + 1][s + 1];
                (0 !== c || a > 0) && f.push(w, _, S), (c !== i - 1 || h < Math.PI) && f.push(_, M, S)
            }
        this.setIndex(f), this.addAttribute("position", new $i(m, 3)), this.addAttribute("normal", new $i(g, 3)), this.addAttribute("uv", new $i(v, 2))
    }

    function ko(e, t, i, n, r, a) {
        Vi.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        }, this.fromBufferGeometry(new Ho(e, t, i, n, r, a)), this.mergeVertices()
    }

    function Ho(e, t, i, n, r, a) {
        an.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        }, e = e || .5, t = t || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8;
        var o, s, c, h = [],
            l = [],
            u = [],
            p = [],
            d = e,
            f = (t - e) / (n = void 0 !== n ? Math.max(1, n) : 1),
            m = new ii,
            g = new $t;
        for (s = 0; s <= n; s++) {
            for (c = 0; c <= i; c++) o = r + c / i * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), l.push(m.x, m.y, m.z), u.push(0, 0, 1), g.x = (m.x / t + 1) / 2, g.y = (m.y / t + 1) / 2, p.push(g.x, g.y);
            d += f
        }
        for (s = 0; s < n; s++) {
            var v = s * (i + 1);
            for (c = 0; c < i; c++) {
                var y = o = c + v,
                    x = o + i + 1,
                    b = o + i + 2,
                    w = o + 1;
                h.push(y, x, w), h.push(x, b, w)
            }
        }
        this.setIndex(h), this.addAttribute("position", new $i(l, 3)), this.addAttribute("normal", new $i(u, 3)), this.addAttribute("uv", new $i(p, 2))
    }

    function jo(e, t, i, n) {
        Vi.call(this), this.type = "LatheGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: i,
            phiLength: n
        }, this.fromBufferGeometry(new Vo(e, t, i, n)), this.mergeVertices()
    }

    function Vo(e, t, i, n) {
        an.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: i,
            phiLength: n
        }, t = Math.floor(t) || 12, i = i || 0, n = n || 2 * Math.PI, n = Qt.clamp(n, 0, 2 * Math.PI);
        var r, a, o, s = [],
            c = [],
            h = [],
            l = 1 / t,
            u = new ii,
            p = new $t;
        for (a = 0; a <= t; a++) {
            var d = i + a * l * n,
                f = Math.sin(d),
                m = Math.cos(d);
            for (o = 0; o <= e.length - 1; o++) u.x = e[o].x * f, u.y = e[o].y, u.z = e[o].x * m, c.push(u.x, u.y, u.z), p.x = a / t, p.y = o / (e.length - 1), h.push(p.x, p.y)
        }
        for (a = 0; a < t; a++)
            for (o = 0; o < e.length - 1; o++) {
                var g = r = o + a * e.length,
                    v = r + e.length,
                    y = r + e.length + 1,
                    x = r + 1;
                s.push(g, v, x), s.push(v, y, x)
            }
        if (this.setIndex(s), this.addAttribute("position", new $i(c, 3)), this.addAttribute("uv", new $i(h, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
            var b = this.attributes.normal.array,
                w = new ii,
                _ = new ii,
                M = new ii;
            for (r = t * e.length * 3, a = 0, o = 0; a < e.length; a++, o += 3) w.x = b[o + 0], w.y = b[o + 1], w.z = b[o + 2], _.x = b[r + o + 0], _.y = b[r + o + 1], _.z = b[r + o + 2], M.addVectors(w, _).normalize(), b[o + 0] = b[r + o + 0] = M.x, b[o + 1] = b[r + o + 1] = M.y, b[o + 2] = b[r + o + 2] = M.z
        }
    }

    function Wo(e, t) {
        Vi.call(this), this.type = "ShapeGeometry", "object" == typeof t && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
            shapes: e,
            curveSegments: t
        }, this.fromBufferGeometry(new qo(e, t)), this.mergeVertices()
    }

    function qo(e, t) {
        an.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
            shapes: e,
            curveSegments: t
        }, t = t || 12;
        var i = [],
            n = [],
            r = [],
            a = [],
            o = 0,
            s = 0;
        if (!1 === Array.isArray(e)) h(e);
        else
            for (var c = 0; c < e.length; c++) h(e[c]), this.addGroup(o, s, c), o += s, s = 0;

        function h(e) {
            var o, c, h, l = n.length / 3,
                u = e.extractPoints(t),
                p = u.shape,
                d = u.holes;
            if (!1 === Ro.isClockWise(p))
                for (p = p.reverse(), o = 0, c = d.length; o < c; o++) h = d[o], !0 === Ro.isClockWise(h) && (d[o] = h.reverse());
            var f = Ro.triangulateShape(p, d);
            for (o = 0, c = d.length; o < c; o++) h = d[o], p = p.concat(h);
            for (o = 0, c = p.length; o < c; o++) {
                var m = p[o];
                n.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
            }
            for (o = 0, c = f.length; o < c; o++) {
                var g = f[o],
                    v = g[0] + l,
                    y = g[1] + l,
                    x = g[2] + l;
                i.push(v, y, x), s += 3
            }
        }
        this.setIndex(i), this.addAttribute("position", new $i(n, 3)), this.addAttribute("normal", new $i(r, 3)), this.addAttribute("uv", new $i(a, 2))
    }

    function Xo(e, t) {
        if (t.shapes = [], Array.isArray(e))
            for (var i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                t.shapes.push(r.uuid)
            } else t.shapes.push(e.uuid);
        return t
    }

    function Yo(e, t) {
        an.call(this), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: t
        }, t = void 0 !== t ? t : 1;
        var i, n, r, a, o = [],
            s = Math.cos(Qt.DEG2RAD * t),
            c = [0, 0],
            h = {},
            l = ["a", "b", "c"];
        e.isBufferGeometry ? (a = new Vi).fromBufferGeometry(e) : a = e.clone(), a.mergeVertices(), a.computeFaceNormals();
        for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
            for (var m = p[d], g = 0; g < 3; g++) i = m[l[g]], n = m[l[(g + 1) % 3]], c[0] = Math.min(i, n), c[1] = Math.max(i, n), void 0 === h[r = c[0] + "," + c[1]] ? h[r] = {
                index1: c[0],
                index2: c[1],
                face1: d,
                face2: void 0
            } : h[r].face2 = d;
        for (r in h) {
            var v = h[r];
            if (void 0 === v.face2 || p[v.face1].normal.dot(p[v.face2].normal) <= s) {
                var y = u[v.index1];
                o.push(y.x, y.y, y.z), y = u[v.index2], o.push(y.x, y.y, y.z)
            }
        }
        this.addAttribute("position", new $i(o, 3))
    }

    function Zo(e, t, i, n, r, a, o, s) {
        Vi.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        }, this.fromBufferGeometry(new Jo(e, t, i, n, r, a, o, s)), this.mergeVertices()
    }

    function Jo(e, t, i, n, r, a, o, s) {
        an.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        var c = this;
        e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, i = i || 1, n = Math.floor(n) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
        var h = [],
            l = [],
            u = [],
            p = [],
            d = 0,
            f = [],
            m = i / 2,
            g = 0;

        function v(i) {
            var r, a, f, v = new $t,
                y = new ii,
                x = 0,
                b = !0 === i ? e : t,
                w = !0 === i ? 1 : -1;
            for (a = d, r = 1; r <= n; r++) l.push(0, m * w, 0), u.push(0, w, 0), p.push(.5, .5), d++;
            for (f = d, r = 0; r <= n; r++) {
                var _ = r / n * s + o,
                    M = Math.cos(_),
                    S = Math.sin(_);
                y.x = b * S, y.y = m * w, y.z = b * M, l.push(y.x, y.y, y.z), u.push(0, w, 0), v.x = .5 * M + .5, v.y = .5 * S * w + .5, p.push(v.x, v.y), d++
            }
            for (r = 0; r < n; r++) {
                var E = a + r,
                    T = f + r;
                !0 === i ? h.push(T, T + 1, E) : h.push(T + 1, T, E), x += 3
            }
            c.addGroup(g, x, !0 === i ? 1 : 2), g += x
        }! function() {
            var a, v, y = new ii,
                x = new ii,
                b = 0,
                w = (t - e) / i;
            for (v = 0; v <= r; v++) {
                var _ = [],
                    M = v / r,
                    S = M * (t - e) + e;
                for (a = 0; a <= n; a++) {
                    var E = a / n,
                        T = E * s + o,
                        A = Math.sin(T),
                        L = Math.cos(T);
                    x.x = S * A, x.y = -M * i + m, x.z = S * L, l.push(x.x, x.y, x.z), y.set(A, w, L).normalize(), u.push(y.x, y.y, y.z), p.push(E, 1 - M), _.push(d++)
                }
                f.push(_)
            }
            for (a = 0; a < n; a++)
                for (v = 0; v < r; v++) {
                    var P = f[v][a],
                        R = f[v + 1][a],
                        C = f[v + 1][a + 1],
                        O = f[v][a + 1];
                    h.push(P, R, O), h.push(R, C, O), b += 6
                }
            c.addGroup(g, b, 0), g += b
        }(), !1 === a && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(h), this.addAttribute("position", new $i(l, 3)), this.addAttribute("normal", new $i(u, 3)), this.addAttribute("uv", new $i(p, 2))
    }

    function Ko(e, t, i, n, r, a, o) {
        Zo.call(this, 0, e, t, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function Qo(e, t, i, n, r, a, o) {
        Jo.call(this, 0, e, t, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function $o(e, t, i, n) {
        Vi.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: i,
            thetaLength: n
        }, this.fromBufferGeometry(new es(e, t, i, n)), this.mergeVertices()
    }

    function es(e, t, i, n) {
        an.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: i,
            thetaLength: n
        }, e = e || 1, t = void 0 !== t ? Math.max(3, t) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
        var r, a, o = [],
            s = [],
            c = [],
            h = [],
            l = new ii,
            u = new $t;
        for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= t; a++, r += 3) {
            var p = i + a / t * n;
            l.x = e * Math.cos(p), l.y = e * Math.sin(p), s.push(l.x, l.y, l.z), c.push(0, 0, 1), u.x = (s[r] / e + 1) / 2, u.y = (s[r + 1] / e + 1) / 2, h.push(u.x, u.y)
        }
        for (r = 1; r <= t; r++) o.push(r, r + 1, 0);
        this.setIndex(o), this.addAttribute("position", new $i(s, 3)), this.addAttribute("normal", new $i(c, 3)), this.addAttribute("uv", new $i(h, 2))
    }
    Uo.prototype = Object.create(Vi.prototype), Uo.prototype.constructor = Uo, Bo.prototype = Object.create(Do.prototype), Bo.prototype.constructor = Bo, Fo.prototype = Object.create(Vi.prototype), Fo.prototype.constructor = Fo, Go.prototype = Object.create(an.prototype), Go.prototype.constructor = Go, ko.prototype = Object.create(Vi.prototype), ko.prototype.constructor = ko, Ho.prototype = Object.create(an.prototype), Ho.prototype.constructor = Ho, jo.prototype = Object.create(Vi.prototype), jo.prototype.constructor = jo, Vo.prototype = Object.create(an.prototype), Vo.prototype.constructor = Vo, Wo.prototype = Object.create(Vi.prototype), Wo.prototype.constructor = Wo, Wo.prototype.toJSON = function() {
        var e = Vi.prototype.toJSON.call(this);
        return Xo(this.parameters.shapes, e)
    }, qo.prototype = Object.create(an.prototype), qo.prototype.constructor = qo, qo.prototype.toJSON = function() {
        var e = an.prototype.toJSON.call(this);
        return Xo(this.parameters.shapes, e)
    }, Yo.prototype = Object.create(an.prototype), Yo.prototype.constructor = Yo, Zo.prototype = Object.create(Vi.prototype), Zo.prototype.constructor = Zo, Jo.prototype = Object.create(an.prototype), Jo.prototype.constructor = Jo, Ko.prototype = Object.create(Zo.prototype), Ko.prototype.constructor = Ko, Qo.prototype = Object.create(Jo.prototype), Qo.prototype.constructor = Qo, $o.prototype = Object.create(Vi.prototype), $o.prototype.constructor = $o, es.prototype = Object.create(an.prototype), es.prototype.constructor = es;
    var ts = Object.freeze({
        WireframeGeometry: Ha,
        ParametricGeometry: ja,
        ParametricBufferGeometry: Va,
        TetrahedronGeometry: Xa,
        TetrahedronBufferGeometry: Ya,
        OctahedronGeometry: Za,
        OctahedronBufferGeometry: Ja,
        IcosahedronGeometry: Ka,
        IcosahedronBufferGeometry: Qa,
        DodecahedronGeometry: $a,
        DodecahedronBufferGeometry: eo,
        PolyhedronGeometry: Wa,
        PolyhedronBufferGeometry: qa,
        TubeGeometry: to,
        TubeBufferGeometry: io,
        TorusKnotGeometry: no,
        TorusKnotBufferGeometry: ro,
        TorusGeometry: ao,
        TorusBufferGeometry: oo,
        TextGeometry: Uo,
        TextBufferGeometry: Bo,
        SphereGeometry: Fo,
        SphereBufferGeometry: Go,
        RingGeometry: ko,
        RingBufferGeometry: Ho,
        PlaneGeometry: cn,
        PlaneBufferGeometry: hn,
        LatheGeometry: jo,
        LatheBufferGeometry: Vo,
        ShapeGeometry: Wo,
        ShapeBufferGeometry: qo,
        ExtrudeGeometry: Io,
        ExtrudeBufferGeometry: Do,
        EdgesGeometry: Yo,
        ConeGeometry: Ko,
        ConeBufferGeometry: Qo,
        CylinderGeometry: Zo,
        CylinderBufferGeometry: Jo,
        CircleGeometry: $o,
        CircleBufferGeometry: es,
        BoxGeometry: on,
        BoxBufferGeometry: sn
    });

    function is(e) {
        Mn.call(this), this.type = "ShadowMaterial", this.color = new Li(0), this.transparent = !0, this.setValues(e)
    }

    function ns(e) {
        Sn.call(this, e), this.type = "RawShaderMaterial"
    }

    function rs(e) {
        Mn.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new Li(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Li(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Jt, this.normalScale = new $t(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function as(e) {
        rs.call(this), this.defines = {
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(e)
    }

    function os(e) {
        Mn.call(this), this.type = "MeshPhongMaterial", this.color = new Li(16777215), this.specular = new Li(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Li(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Jt, this.normalScale = new $t(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = _e, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function ss(e) {
        os.call(this), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(e)
    }

    function cs(e) {
        Mn.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Jt, this.normalScale = new $t(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function hs(e) {
        Mn.call(this), this.type = "MeshLambertMaterial", this.color = new Li(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Li(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = _e, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function ls(e) {
        Mn.call(this), this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new Li(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Jt, this.normalScale = new $t(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(e)
    }

    function us(e) {
        Oa.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
    }
    is.prototype = Object.create(Mn.prototype), is.prototype.constructor = is, is.prototype.isShadowMaterial = !0, is.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.color.copy(e.color), this
    }, ns.prototype = Object.create(Sn.prototype), ns.prototype.constructor = ns, ns.prototype.isRawShaderMaterial = !0, rs.prototype = Object.create(Mn.prototype), rs.prototype.constructor = rs, rs.prototype.isMeshStandardMaterial = !0, rs.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.defines = {
            STANDARD: ""
        }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, as.prototype = Object.create(rs.prototype), as.prototype.constructor = as, as.prototype.isMeshPhysicalMaterial = !0, as.prototype.copy = function(e) {
        return rs.prototype.copy.call(this, e), this.defines = {
            PHYSICAL: ""
        }, this.reflectivity = e.reflectivity, this.clearCoat = e.clearCoat, this.clearCoatRoughness = e.clearCoatRoughness, this
    }, os.prototype = Object.create(Mn.prototype), os.prototype.constructor = os, os.prototype.isMeshPhongMaterial = !0, os.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, ss.prototype = Object.create(os.prototype), ss.prototype.constructor = ss, ss.prototype.isMeshToonMaterial = !0, ss.prototype.copy = function(e) {
        return os.prototype.copy.call(this, e), this.gradientMap = e.gradientMap, this
    }, cs.prototype = Object.create(Mn.prototype), cs.prototype.constructor = cs, cs.prototype.isMeshNormalMaterial = !0, cs.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, hs.prototype = Object.create(Mn.prototype), hs.prototype.constructor = hs, hs.prototype.isMeshLambertMaterial = !0, hs.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, ls.prototype = Object.create(Mn.prototype), ls.prototype.constructor = ls, ls.prototype.isMeshMatcapMaterial = !0, ls.prototype.copy = function(e) {
        return Mn.prototype.copy.call(this, e), this.defines = {
            MATCAP: ""
        }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, us.prototype = Object.create(Oa.prototype), us.prototype.constructor = us, us.prototype.isLineDashedMaterial = !0, us.prototype.copy = function(e) {
        return Oa.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
    };
    var ps = Object.freeze({
            ShadowMaterial: is,
            SpriteMaterial: Ta,
            RawShaderMaterial: ns,
            ShaderMaterial: Sn,
            PointsMaterial: Na,
            MeshPhysicalMaterial: as,
            MeshStandardMaterial: rs,
            MeshPhongMaterial: os,
            MeshToonMaterial: ss,
            MeshNormalMaterial: cs,
            MeshLambertMaterial: hs,
            MeshDepthMaterial: $r,
            MeshDistanceMaterial: ea,
            MeshBasicMaterial: An,
            MeshMatcapMaterial: ls,
            LineDashedMaterial: us,
            LineBasicMaterial: Oa,
            Material: Mn
        }),
        ds = {
            arraySlice: function(e, t, i) {
                return ds.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== i ? i : e.length)) : e.slice(t, i)
            },
            convertArray: function(e, t, i) {
                return !e || !i && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
            },
            isTypedArray: function(e) {
                return ArrayBuffer.isView(e) && !(e instanceof DataView)
            },
            getKeyframeOrder: function(e) {
                for (var t = e.length, i = new Array(t), n = 0; n !== t; ++n) i[n] = n;
                return i.sort(function(t, i) {
                    return e[t] - e[i]
                }), i
            },
            sortedArray: function(e, t, i) {
                for (var n = e.length, r = new e.constructor(n), a = 0, o = 0; o !== n; ++a)
                    for (var s = i[a] * t, c = 0; c !== t; ++c) r[o++] = e[s + c];
                return r
            },
            flattenJSON: function(e, t, i, n) {
                for (var r = 1, a = e[0]; void 0 !== a && void 0 === a[n];) a = e[r++];
                if (void 0 !== a) {
                    var o = a[n];
                    if (void 0 !== o)
                        if (Array.isArray(o))
                            do {
                                void 0 !== (o = a[n]) && (t.push(a.time), i.push.apply(i, o)), a = e[r++]
                            } while (void 0 !== a);
                        else if (void 0 !== o.toArray)
                        do {
                            void 0 !== (o = a[n]) && (t.push(a.time), o.toArray(i, i.length)), a = e[r++]
                        } while (void 0 !== a);
                    else
                        do {
                            void 0 !== (o = a[n]) && (t.push(a.time), i.push(o)), a = e[r++]
                        } while (void 0 !== a)
                }
            }
        };

    function fs(e, t, i, n) {
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new t.constructor(i), this.sampleValues = t, this.valueSize = i
    }

    function ms(e, t, i, n) {
        fs.call(this, e, t, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function gs(e, t, i, n) {
        fs.call(this, e, t, i, n)
    }

    function vs(e, t, i, n) {
        fs.call(this, e, t, i, n)
    }

    function ys(e, t, i, n) {
        if (void 0 === e) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e, this.times = ds.convertArray(t, this.TimeBufferType), this.values = ds.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
    }

    function xs(e, t, i) {
        ys.call(this, e, t, i)
    }

    function bs(e, t, i, n) {
        ys.call(this, e, t, i, n)
    }

    function ws(e, t, i, n) {
        ys.call(this, e, t, i, n)
    }

    function _s(e, t, i, n) {
        fs.call(this, e, t, i, n)
    }

    function Ms(e, t, i, n) {
        ys.call(this, e, t, i, n)
    }

    function Ss(e, t, i, n) {
        ys.call(this, e, t, i, n)
    }

    function Es(e, t, i, n) {
        ys.call(this, e, t, i, n)
    }

    function Ts(e, t, i) {
        this.name = e, this.tracks = i, this.duration = void 0 !== t ? t : -1, this.uuid = Qt.generateUUID(), this.duration < 0 && this.resetDuration()
    }

    function As(e) {
        if (void 0 === e.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var t = function(e) {
            switch (e.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return ws;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Es;
                case "color":
                    return bs;
                case "quaternion":
                    return Ms;
                case "bool":
                case "boolean":
                    return xs;
                case "string":
                    return Ss
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
        }(e.type);
        if (void 0 === e.times) {
            var i = [],
                n = [];
            ds.flattenJSON(e.keys, i, n, "value"), e.times = i, e.values = n
        }
        return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
    }
    Object.assign(fs.prototype, {
        evaluate: function(e) {
            var t = this.parameterPositions,
                i = this._cachedIndex,
                n = t[i],
                r = t[i - 1];
            e: {
                t: {
                    var a;i: {
                        n: if (!(e < n)) {
                            for (var o = i + 2;;) {
                                if (void 0 === n) {
                                    if (e < r) break n;
                                    return i = t.length, this._cachedIndex = i, this.afterEnd_(i - 1, e, r)
                                }
                                if (i === o) break;
                                if (r = n, e < (n = t[++i])) break t
                            }
                            a = t.length;
                            break i
                        }if (e >= r) break e;
                        var s = t[1];e < s && (i = 2, r = s);
                        for (o = i - 2;;) {
                            if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, n);
                            if (i === o) break;
                            if (n = r, e >= (r = t[--i - 1])) break t
                        }
                        a = i,
                        i = 0
                    }
                    for (; i < a;) {
                        var c = i + a >>> 1;
                        e < t[c] ? a = c : i = c + 1
                    }
                    if (n = t[i], void 0 === (r = t[i - 1])) return this._cachedIndex = 0,
                    this.beforeStart_(0, e, n);
                    if (void 0 === n) return i = t.length,
                    this._cachedIndex = i,
                    this.afterEnd_(i - 1, r, e)
                }
                this._cachedIndex = i,
                this.intervalChanged_(i, r, n)
            }
            return this.interpolate_(i, r, e, n)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(e) {
            for (var t = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = e * n, a = 0; a !== n; ++a) t[a] = i[r + a];
            return t
        },
        interpolate_: function() {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function() {}
    }), Object.assign(fs.prototype, {
        beforeStart_: fs.prototype.copySampleValue_,
        afterEnd_: fs.prototype.copySampleValue_
    }), ms.prototype = Object.assign(Object.create(fs.prototype), {
        constructor: ms,
        DefaultSettings_: {
            endingStart: Ut,
            endingEnd: Ut
        },
        intervalChanged_: function(e, t, i) {
            var n = this.parameterPositions,
                r = e - 2,
                a = e + 1,
                o = n[r],
                s = n[a];
            if (void 0 === o) switch (this.getSettings_().endingStart) {
                case 2401:
                    r = e, o = 2 * t - i;
                    break;
                case 2402:
                    o = t + n[r = n.length - 2] - n[r + 1];
                    break;
                default:
                    r = e, o = i
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case 2401:
                    a = e, s = 2 * i - t;
                    break;
                case 2402:
                    a = 1, s = i + n[1] - n[0];
                    break;
                default:
                    a = e - 1, s = t
            }
            var c = .5 * (i - t),
                h = this.valueSize;
            this._weightPrev = c / (t - o), this._weightNext = c / (s - i), this._offsetPrev = r * h, this._offsetNext = a * h
        },
        interpolate_: function(e, t, i, n) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - t) / (n - t), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) r[b] = g * a[h + b] + v * a[c + b] + y * a[s + b] + x * a[l + b];
            return r
        }
    }), gs.prototype = Object.assign(Object.create(fs.prototype), {
        constructor: gs,
        interpolate_: function(e, t, i, n) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = (i - t) / (n - t), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l + a[s + u] * h;
            return r
        }
    }), vs.prototype = Object.assign(Object.create(fs.prototype), {
        constructor: vs,
        interpolate_: function(e) {
            return this.copySampleValue_(e - 1)
        }
    }), Object.assign(ys, {
        toJSON: function(e) {
            var t, i = e.constructor;
            if (void 0 !== i.toJSON) t = i.toJSON(e);
            else {
                t = {
                    name: e.name,
                    times: ds.convertArray(e.times, Array),
                    values: ds.convertArray(e.values, Array)
                };
                var n = e.getInterpolation();
                n !== e.DefaultInterpolation && (t.interpolation = n)
            }
            return t.type = e.ValueTypeName, t
        }
    }), Object.assign(ys.prototype, {
        constructor: ys,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(e) {
            return new vs(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodLinear: function(e) {
            return new gs(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: function(e) {
            return new ms(this.times, this.values, this.getValueSize(), e)
        },
        setInterpolation: function(e) {
            var t;
            switch (e) {
                case 2300:
                    t = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    t = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    t = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === t) {
                var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (e === this.DefaultInterpolation) throw new Error(i);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return console.warn("THREE.KeyframeTrack:", i), this
            }
            return this.createInterpolant = t, this
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(e) {
            if (0 !== e)
                for (var t = this.times, i = 0, n = t.length; i !== n; ++i) t[i] += e;
            return this
        },
        scale: function(e) {
            if (1 !== e)
                for (var t = this.times, i = 0, n = t.length; i !== n; ++i) t[i] *= e;
            return this
        },
        trim: function(e, t) {
            for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < e;) ++r;
            for (; - 1 !== a && i[a] > t;) --a;
            if (++a, 0 !== r || a !== n) {
                r >= a && (r = (a = Math.max(a, 1)) - 1);
                var o = this.getValueSize();
                this.times = ds.arraySlice(i, r, a), this.values = ds.arraySlice(this.values, r * o, a * o)
            }
            return this
        },
        validate: function() {
            var e = !0,
                t = this.getValueSize();
            t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
            var i = this.times,
                n = this.values,
                r = i.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
            for (var a = null, o = 0; o !== r; o++) {
                var s = i[o];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
                    break
                }
                if (null !== a && a > s) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
                    break
                }
                a = s
            }
            if (void 0 !== n && ds.isTypedArray(n)) {
                o = 0;
                for (var c = n.length; o !== c; ++o) {
                    var h = n[o];
                    if (isNaN(h)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, h), e = !1;
                        break
                    }
                }
            }
            return e
        },
        optimize: function() {
            for (var e = this.times, t = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = e.length - 1, o = 1; o < a; ++o) {
                var s = !1,
                    c = e[o];
                if (c !== e[o + 1] && (1 !== o || c !== c[0]))
                    if (n) s = !0;
                    else
                        for (var h = o * i, l = h - i, u = h + i, p = 0; p !== i; ++p) {
                            var d = t[h + p];
                            if (d !== t[l + p] || d !== t[u + p]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (o !== r) {
                        e[r] = e[o];
                        var f = o * i,
                            m = r * i;
                        for (p = 0; p !== i; ++p) t[m + p] = t[f + p]
                    }++r
                }
            }
            if (a > 0) {
                e[r] = e[a];
                for (f = a * i, m = r * i, p = 0; p !== i; ++p) t[m + p] = t[f + p];
                ++r
            }
            return r !== e.length && (this.times = ds.arraySlice(e, 0, r), this.values = ds.arraySlice(t, 0, r * i)), this
        }
    }), xs.prototype = Object.assign(Object.create(ys.prototype), {
        constructor: xs,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), bs.prototype = Object.assign(Object.create(ys.prototype), {
        constructor: bs,
        ValueTypeName: "color"
    }), ws.prototype = Object.assign(Object.create(ys.prototype), {
        constructor: ws,
        ValueTypeName: "number"
    }), _s.prototype = Object.assign(Object.create(fs.prototype), {
        constructor: _s,
        interpolate_: function(e, t, i, n) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = (i - t) / (n - t), h = s + o; s !== h; s += 4) ti.slerpFlat(r, 0, a, s - o, a, s, c);
            return r
        }
    }), Ms.prototype = Object.assign(Object.create(ys.prototype), {
        constructor: Ms,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(e) {
            return new _s(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: void 0
    }), Ss.prototype = Object.assign(Object.create(ys.prototype), {
        constructor: Ss,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Es.prototype = Object.assign(Object.create(ys.prototype), {
        constructor: Es,
        ValueTypeName: "vector"
    }), Object.assign(Ts, {
        parse: function(e) {
            for (var t = [], i = e.tracks, n = 1 / (e.fps || 1), r = 0, a = i.length; r !== a; ++r) t.push(As(i[r]).scale(n));
            return new Ts(e.name, e.duration, t)
        },
        toJSON: function(e) {
            for (var t = [], i = e.tracks, n = {
                    name: e.name,
                    duration: e.duration,
                    tracks: t,
                    uuid: e.uuid
                }, r = 0, a = i.length; r !== a; ++r) t.push(ys.toJSON(i[r]));
            return n
        },
        CreateFromMorphTargetSequence: function(e, t, i, n) {
            for (var r = t.length, a = [], o = 0; o < r; o++) {
                var s = [],
                    c = [];
                s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
                var h = ds.getKeyframeOrder(s);
                s = ds.sortedArray(s, 1, h), c = ds.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new ws(".morphTargetInfluences[" + t[o].name + "]", s, c).scale(1 / i))
            }
            return new Ts(e, -1, a)
        },
        findByName: function(e, t) {
            var i = e;
            if (!Array.isArray(e)) {
                var n = e;
                i = n.geometry && n.geometry.animations || n.animations
            }
            for (var r = 0; r < i.length; r++)
                if (i[r].name === t) return i[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(e, t, i) {
            for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
                var s = e[a],
                    c = s.name.match(r);
                if (c && c.length > 1) {
                    var h = n[u = c[1]];
                    h || (n[u] = h = []), h.push(s)
                }
            }
            var l = [];
            for (var u in n) l.push(Ts.CreateFromMorphTargetSequence(u, n[u], t, i));
            return l
        },
        parseAnimation: function(e, t) {
            if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            for (var i = function(e, t, i, n, r) {
                    if (0 !== i.length) {
                        var a = [],
                            o = [];
                        ds.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new e(t, a, o))
                    }
                }, n = [], r = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], c = 0; c < s.length; c++) {
                var h = s[c].keys;
                if (h && 0 !== h.length)
                    if (h[0].morphTargets) {
                        for (var l = {}, u = 0; u < h.length; u++)
                            if (h[u].morphTargets)
                                for (var p = 0; p < h[u].morphTargets.length; p++) l[h[u].morphTargets[p]] = -1;
                        for (var d in l) {
                            var f = [],
                                m = [];
                            for (p = 0; p !== h[u].morphTargets.length; ++p) {
                                var g = h[u];
                                f.push(g.time), m.push(g.morphTarget === d ? 1 : 0)
                            }
                            n.push(new ws(".morphTargetInfluence[" + d + "]", f, m))
                        }
                        a = l.length * (o || 1)
                    } else {
                        var v = ".bones[" + t[c].name + "]";
                        i(Es, v + ".position", h, "pos", n), i(Ms, v + ".quaternion", h, "rot", n), i(Es, v + ".scale", h, "scl", n)
                    }
            }
            return 0 === n.length ? null : new Ts(r, a, n)
        }
    }), Object.assign(Ts.prototype, {
        resetDuration: function() {
            for (var e = 0, t = 0, i = this.tracks.length; t !== i; ++t) {
                var n = this.tracks[t];
                e = Math.max(e, n.times[n.times.length - 1])
            }
            return this.duration = e, this
        },
        trim: function() {
            for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
            return this
        },
        validate: function() {
            for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
            return e
        },
        optimize: function() {
            for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
            return this
        }
    });
    var Ls = {
        enabled: !1,
        files: {},
        add: function(e, t) {
            !1 !== this.enabled && (this.files[e] = t)
        },
        get: function(e) {
            if (!1 !== this.enabled) return this.files[e]
        },
        remove: function(e) {
            delete this.files[e]
        },
        clear: function() {
            this.files = {}
        }
    };

    function Ps(e, t, i) {
        var n = this,
            r = !1,
            a = 0,
            o = 0,
            s = void 0;
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(e) {
            o++, !1 === r && void 0 !== n.onStart && n.onStart(e, a, o), r = !0
        }, this.itemEnd = function(e) {
            a++, void 0 !== n.onProgress && n.onProgress(e, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
        }, this.itemError = function(e) {
            void 0 !== n.onError && n.onError(e)
        }, this.resolveURL = function(e) {
            return s ? s(e) : e
        }, this.setURLModifier = function(e) {
            return s = e, this
        }
    }
    var Rs = new Ps,
        Cs = {};

    function Os(e) {
        this.manager = void 0 !== e ? e : Rs
    }

    function Is(e) {
        this.manager = void 0 !== e ? e : Rs
    }

    function Ds(e) {
        this.manager = void 0 !== e ? e : Rs
    }

    function zs(e) {
        this.manager = void 0 !== e ? e : Rs
    }

    function Ns() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }

    function Us(e, t, i, n, r, a, o, s) {
        Ns.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
    }

    function Bs(e, t, i, n, r, a) {
        Us.call(this, e, t, i, i, n, r, a), this.type = "ArcCurve"
    }

    function Fs() {
        var e = 0,
            t = 0,
            i = 0,
            n = 0;

        function r(r, a, o, s) {
            e = r, t = o, i = -3 * r + 3 * a - 2 * o - s, n = 2 * r - 2 * a + o + s
        }
        return {
            initCatmullRom: function(e, t, i, n, a) {
                r(t, i, a * (i - e), a * (n - t))
            },
            initNonuniformCatmullRom: function(e, t, i, n, a, o, s) {
                var c = (t - e) / a - (i - e) / (a + o) + (i - t) / o,
                    h = (i - t) / o - (n - t) / (o + s) + (n - i) / s;
                r(t, i, c *= o, h *= o)
            },
            calc: function(r) {
                var a = r * r;
                return e + t * r + i * a + n * (a * r)
            }
        }
    }
    Object.assign(Os.prototype, {
        load: function(e, t, i, n) {
            void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
            var r = this,
                a = Ls.get(e);
            if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() {
                t && t(a), r.manager.itemEnd(e)
            }, 0), a;
            if (void 0 === Cs[e]) {
                var o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (o) {
                    var s = o[1],
                        c = !!o[2],
                        h = o[3];
                    h = decodeURIComponent(h), c && (h = atob(h));
                    try {
                        var l, u = (this.responseType || "").toLowerCase();
                        switch (u) {
                            case "arraybuffer":
                            case "blob":
                                for (var p = new Uint8Array(h.length), d = 0; d < h.length; d++) p[d] = h.charCodeAt(d);
                                l = "blob" === u ? new Blob([p.buffer], {
                                    type: s
                                }) : p.buffer;
                                break;
                            case "document":
                                var f = new DOMParser;
                                l = f.parseFromString(h, s);
                                break;
                            case "json":
                                l = JSON.parse(h);
                                break;
                            default:
                                l = h
                        }
                        setTimeout(function() {
                            t && t(l), r.manager.itemEnd(e)
                        }, 0)
                    } catch (t) {
                        setTimeout(function() {
                            n && n(t), r.manager.itemError(e), r.manager.itemEnd(e)
                        }, 0)
                    }
                } else {
                    Cs[e] = [], Cs[e].push({
                        onLoad: t,
                        onProgress: i,
                        onError: n
                    });
                    var m = new XMLHttpRequest;
                    for (var g in m.open("GET", e, !0), m.addEventListener("load", function(t) {
                            var i = this.response;
                            Ls.add(e, i);
                            var n = Cs[e];
                            if (delete Cs[e], 200 === this.status || 0 === this.status) {
                                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                                for (var a = 0, o = n.length; a < o; a++) {
                                    (s = n[a]).onLoad && s.onLoad(i)
                                }
                                r.manager.itemEnd(e)
                            } else {
                                for (a = 0, o = n.length; a < o; a++) {
                                    var s;
                                    (s = n[a]).onError && s.onError(t)
                                }
                                r.manager.itemError(e), r.manager.itemEnd(e)
                            }
                        }, !1), m.addEventListener("progress", function(t) {
                            for (var i = Cs[e], n = 0, r = i.length; n < r; n++) {
                                var a = i[n];
                                a.onProgress && a.onProgress(t)
                            }
                        }, !1), m.addEventListener("error", function(t) {
                            var i = Cs[e];
                            delete Cs[e];
                            for (var n = 0, a = i.length; n < a; n++) {
                                var o = i[n];
                                o.onError && o.onError(t)
                            }
                            r.manager.itemError(e), r.manager.itemEnd(e)
                        }, !1), m.addEventListener("abort", function(t) {
                            var i = Cs[e];
                            delete Cs[e];
                            for (var n = 0, a = i.length; n < a; n++) {
                                var o = i[n];
                                o.onError && o.onError(t)
                            }
                            r.manager.itemError(e), r.manager.itemEnd(e)
                        }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
                    m.send(null)
                }
                return r.manager.itemStart(e), m
            }
            Cs[e].push({
                onLoad: t,
                onProgress: i,
                onError: n
            })
        },
        setPath: function(e) {
            return this.path = e, this
        },
        setResponseType: function(e) {
            return this.responseType = e, this
        },
        setWithCredentials: function(e) {
            return this.withCredentials = e, this
        },
        setMimeType: function(e) {
            return this.mimeType = e, this
        },
        setRequestHeader: function(e) {
            return this.requestHeader = e, this
        }
    }), Object.assign(function(e) {
        this.manager = void 0 !== e ? e : Rs
    }.prototype, {
        load: function(e, t, i, n) {
            var r = this,
                a = new Os(r.manager);
            a.setPath(r.path), a.load(e, function(e) {
                t(r.parse(JSON.parse(e)))
            }, i, n)
        },
        parse: function(e, t) {
            for (var i = [], n = 0; n < e.length; n++) {
                var r = Ts.parse(e[n]);
                i.push(r)
            }
            t(i)
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(function(e) {
        this.manager = void 0 !== e ? e : Rs, this._parser = null
    }.prototype, {
        load: function(e, t, i, n) {
            var r = this,
                a = [],
                o = new Fa;
            o.image = a;
            var s = new Os(this.manager);

            function c(c) {
                s.load(e[c], function(e) {
                    var i = r._parser(e, !0);
                    a[c] = {
                        width: i.width,
                        height: i.height,
                        format: i.format,
                        mipmaps: i.mipmaps
                    }, 6 === (h += 1) && (1 === i.mipmapCount && (o.minFilter = Ve), o.format = i.format, o.needsUpdate = !0, t && t(o))
                }, i, n)
            }
            if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(e))
                for (var h = 0, l = 0, u = e.length; l < u; ++l) c(l);
            else s.load(e, function(e) {
                var i = r._parser(e, !0);
                if (i.isCubemap)
                    for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
                        a[s] = {
                            mipmaps: []
                        };
                        for (var c = 0; c < i.mipmapCount; c++) a[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + c]), a[s].format = i.format, a[s].width = i.width, a[s].height = i.height
                    } else o.image.width = i.width, o.image.height = i.height, o.mipmaps = i.mipmaps;
                1 === i.mipmapCount && (o.minFilter = Ve), o.format = i.format, o.needsUpdate = !0, t && t(o)
            }, i, n);
            return o
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(function(e) {
        this.manager = void 0 !== e ? e : Rs, this._parser = null
    }.prototype, {
        load: function(e, t, i, n) {
            var r = this,
                a = new mi,
                o = new Os(this.manager);
            return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(e, function(e) {
                var i = r._parser(e);
                i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : Fe, a.wrapT = void 0 !== i.wrapT ? i.wrapT : Fe, a.magFilter = void 0 !== i.magFilter ? i.magFilter : Ve, a.minFilter = void 0 !== i.minFilter ? i.minFilter : qe, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps), 1 === i.mipmapCount && (a.minFilter = Ve), a.needsUpdate = !0, t && t(a, i))
            }, i, n), a
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(Is.prototype, {
        crossOrigin: "anonymous",
        load: function(e, t, i, n) {
            void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
            var r = this,
                a = Ls.get(e);
            if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() {
                t && t(a), r.manager.itemEnd(e)
            }, 0), a;
            var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

            function s() {
                o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), Ls.add(e, this), t && t(this), r.manager.itemEnd(e)
            }

            function c(t) {
                o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), n && n(t), r.manager.itemError(e), r.manager.itemEnd(e)
            }
            return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(Ds.prototype, {
        crossOrigin: "anonymous",
        load: function(e, t, i, n) {
            var r = new Gn,
                a = new Is(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            var o = 0;

            function s(i) {
                a.load(e[i], function(e) {
                    r.images[i] = e, 6 === ++o && (r.needsUpdate = !0, t && t(r))
                }, void 0, n)
            }
            for (var c = 0; c < e.length; ++c) s(c);
            return r
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(zs.prototype, {
        crossOrigin: "anonymous",
        load: function(e, t, i, n) {
            var r = new ui,
                a = new Is(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(i) {
                r.image = i;
                var n = e.search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
                r.format = n ? ot : st, r.needsUpdate = !0, void 0 !== t && t(r)
            }, i, n), r
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(Ns.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null
        },
        getPointAt: function(e, t) {
            var i = this.getUtoTmapping(e);
            return this.getPoint(i, t)
        },
        getPoints: function(e) {
            void 0 === e && (e = 5);
            for (var t = [], i = 0; i <= e; i++) t.push(this.getPoint(i / e));
            return t
        },
        getSpacedPoints: function(e) {
            void 0 === e && (e = 5);
            for (var t = [], i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
            return t
        },
        getLength: function() {
            var e = this.getLengths();
            return e[e.length - 1]
        },
        getLengths: function(e) {
            if (void 0 === e && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var t, i, n = [],
                r = this.getPoint(0),
                a = 0;
            for (n.push(0), i = 1; i <= e; i++) a += (t = this.getPoint(i / e)).distanceTo(r), n.push(a), r = t;
            return this.cacheArcLengths = n, n
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function(e, t) {
            var i, n = this.getLengths(),
                r = 0,
                a = n.length;
            i = t || e * n[a - 1];
            for (var o, s = 0, c = a - 1; s <= c;)
                if ((o = n[r = Math.floor(s + (c - s) / 2)] - i) < 0) s = r + 1;
                else {
                    if (!(o > 0)) {
                        c = r;
                        break
                    }
                    c = r - 1
                } if (n[r = c] === i) return r / (a - 1);
            var h = n[r];
            return (r + (i - h) / (n[r + 1] - h)) / (a - 1)
        },
        getTangent: function(e) {
            var t = e - 1e-4,
                i = e + 1e-4;
            t < 0 && (t = 0), i > 1 && (i = 1);
            var n = this.getPoint(t);
            return this.getPoint(i).clone().sub(n).normalize()
        },
        getTangentAt: function(e) {
            var t = this.getUtoTmapping(e);
            return this.getTangent(t)
        },
        computeFrenetFrames: function(e, t) {
            var i, n, r, a = new ii,
                o = [],
                s = [],
                c = [],
                h = new ii,
                l = new ei;
            for (i = 0; i <= e; i++) n = i / e, o[i] = this.getTangentAt(n), o[i].normalize();
            s[0] = new ii, c[0] = new ii;
            var u = Number.MAX_VALUE,
                p = Math.abs(o[0].x),
                d = Math.abs(o[0].y),
                f = Math.abs(o[0].z);
            for (p <= u && (u = p, a.set(1, 0, 0)), d <= u && (u = d, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), i = 1; i <= e; i++) s[i] = s[i - 1].clone(), c[i] = c[i - 1].clone(), h.crossVectors(o[i - 1], o[i]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(Qt.clamp(o[i - 1].dot(o[i]), -1, 1)), s[i].applyMatrix4(l.makeRotationAxis(h, r))), c[i].crossVectors(o[i], s[i]);
            if (!0 === t)
                for (r = Math.acos(Qt.clamp(s[0].dot(s[e]), -1, 1)), r /= e, o[0].dot(h.crossVectors(s[0], s[e])) > 0 && (r = -r), i = 1; i <= e; i++) s[i].applyMatrix4(l.makeRotationAxis(o[i], r * i)), c[i].crossVectors(o[i], s[i]);
            return {
                tangents: o,
                normals: s,
                binormals: c
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.arcLengthDivisions = e.arcLengthDivisions, this
        },
        toJSON: function() {
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
        },
        fromJSON: function(e) {
            return this.arcLengthDivisions = e.arcLengthDivisions, this
        }
    }), Us.prototype = Object.create(Ns.prototype), Us.prototype.constructor = Us, Us.prototype.isEllipseCurve = !0, Us.prototype.getPoint = function(e, t) {
        for (var i = t || new $t, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += n;
        for (; r > n;) r -= n;
        r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
        var o = this.aStartAngle + e * r,
            s = this.aX + this.xRadius * Math.cos(o),
            c = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            var h = Math.cos(this.aRotation),
                l = Math.sin(this.aRotation),
                u = s - this.aX,
                p = c - this.aY;
            s = u * h - p * l + this.aX, c = u * l + p * h + this.aY
        }
        return i.set(s, c)
    }, Us.prototype.copy = function(e) {
        return Ns.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }, Us.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
    }, Us.prototype.fromJSON = function(e) {
        return Ns.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }, Bs.prototype = Object.create(Us.prototype), Bs.prototype.constructor = Bs, Bs.prototype.isArcCurve = !0;
    var Gs = new ii,
        ks = new Fs,
        Hs = new Fs,
        js = new Fs;

    function Vs(e, t, i, n) {
        Ns.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = i || "centripetal", this.tension = n || .5
    }

    function Ws(e, t, i, n, r) {
        var a = .5 * (n - t),
            o = .5 * (r - i),
            s = e * e;
        return (2 * i - 2 * n + a + o) * (e * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * e + i
    }

    function qs(e, t, i, n) {
        return function(e, t) {
            var i = 1 - e;
            return i * i * t
        }(e, t) + function(e, t) {
            return 2 * (1 - e) * e * t
        }(e, i) + function(e, t) {
            return e * e * t
        }(e, n)
    }

    function Xs(e, t, i, n, r) {
        return function(e, t) {
            var i = 1 - e;
            return i * i * i * t
        }(e, t) + function(e, t) {
            var i = 1 - e;
            return 3 * i * i * e * t
        }(e, i) + function(e, t) {
            return 3 * (1 - e) * e * e * t
        }(e, n) + function(e, t) {
            return e * e * e * t
        }(e, r)
    }

    function Ys(e, t, i, n) {
        Ns.call(this), this.type = "CubicBezierCurve", this.v0 = e || new $t, this.v1 = t || new $t, this.v2 = i || new $t, this.v3 = n || new $t
    }

    function Zs(e, t, i, n) {
        Ns.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new ii, this.v1 = t || new ii, this.v2 = i || new ii, this.v3 = n || new ii
    }

    function Js(e, t) {
        Ns.call(this), this.type = "LineCurve", this.v1 = e || new $t, this.v2 = t || new $t
    }

    function Ks(e, t) {
        Ns.call(this), this.type = "LineCurve3", this.v1 = e || new ii, this.v2 = t || new ii
    }

    function Qs(e, t, i) {
        Ns.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new $t, this.v1 = t || new $t, this.v2 = i || new $t
    }

    function $s(e, t, i) {
        Ns.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new ii, this.v1 = t || new ii, this.v2 = i || new ii
    }

    function ec(e) {
        Ns.call(this), this.type = "SplineCurve", this.points = e || []
    }
    Vs.prototype = Object.create(Ns.prototype), Vs.prototype.constructor = Vs, Vs.prototype.isCatmullRomCurve3 = !0, Vs.prototype.getPoint = function(e, t) {
        var i, n, r, a, o = t || new ii,
            s = this.points,
            c = s.length,
            h = (c - (this.closed ? 0 : 1)) * e,
            l = Math.floor(h),
            u = h - l;
        if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c : 0 === u && l === c - 1 && (l = c - 2, u = 1), this.closed || l > 0 ? i = s[(l - 1) % c] : (Gs.subVectors(s[0], s[1]).add(s[0]), i = Gs), n = s[l % c], r = s[(l + 1) % c], this.closed || l + 2 < c ? a = s[(l + 2) % c] : (Gs.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = Gs), "centripetal" === this.curveType || "chordal" === this.curveType) {
            var p = "chordal" === this.curveType ? .5 : .25,
                d = Math.pow(i.distanceToSquared(n), p),
                f = Math.pow(n.distanceToSquared(r), p),
                m = Math.pow(r.distanceToSquared(a), p);
            f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), ks.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, d, f, m), Hs.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, d, f, m), js.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, d, f, m)
        } else "catmullrom" === this.curveType && (ks.initCatmullRom(i.x, n.x, r.x, a.x, this.tension), Hs.initCatmullRom(i.y, n.y, r.y, a.y, this.tension), js.initCatmullRom(i.z, n.z, r.z, a.z, this.tension));
        return o.set(ks.calc(u), Hs.calc(u), js.calc(u)), o
    }, Vs.prototype.copy = function(e) {
        Ns.prototype.copy.call(this, e), this.points = [];
        for (var t = 0, i = e.points.length; t < i; t++) {
            var n = e.points[t];
            this.points.push(n.clone())
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }, Vs.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        e.points = [];
        for (var t = 0, i = this.points.length; t < i; t++) {
            var n = this.points[t];
            e.points.push(n.toArray())
        }
        return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
    }, Vs.prototype.fromJSON = function(e) {
        Ns.prototype.fromJSON.call(this, e), this.points = [];
        for (var t = 0, i = e.points.length; t < i; t++) {
            var n = e.points[t];
            this.points.push((new ii).fromArray(n))
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }, Ys.prototype = Object.create(Ns.prototype), Ys.prototype.constructor = Ys, Ys.prototype.isCubicBezierCurve = !0, Ys.prototype.getPoint = function(e, t) {
        var i = t || new $t,
            n = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
        return i.set(Xs(e, n.x, r.x, a.x, o.x), Xs(e, n.y, r.y, a.y, o.y)), i
    }, Ys.prototype.copy = function(e) {
        return Ns.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }, Ys.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }, Ys.prototype.fromJSON = function(e) {
        return Ns.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }, Zs.prototype = Object.create(Ns.prototype), Zs.prototype.constructor = Zs, Zs.prototype.isCubicBezierCurve3 = !0, Zs.prototype.getPoint = function(e, t) {
        var i = t || new ii,
            n = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
        return i.set(Xs(e, n.x, r.x, a.x, o.x), Xs(e, n.y, r.y, a.y, o.y), Xs(e, n.z, r.z, a.z, o.z)), i
    }, Zs.prototype.copy = function(e) {
        return Ns.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }, Zs.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }, Zs.prototype.fromJSON = function(e) {
        return Ns.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }, Js.prototype = Object.create(Ns.prototype), Js.prototype.constructor = Js, Js.prototype.isLineCurve = !0, Js.prototype.getPoint = function(e, t) {
        var i = t || new $t;
        return 1 === e ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i
    }, Js.prototype.getPointAt = function(e, t) {
        return this.getPoint(e, t)
    }, Js.prototype.getTangent = function() {
        return this.v2.clone().sub(this.v1).normalize()
    }, Js.prototype.copy = function(e) {
        return Ns.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, Js.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, Js.prototype.fromJSON = function(e) {
        return Ns.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, Ks.prototype = Object.create(Ns.prototype), Ks.prototype.constructor = Ks, Ks.prototype.isLineCurve3 = !0, Ks.prototype.getPoint = function(e, t) {
        var i = t || new ii;
        return 1 === e ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i
    }, Ks.prototype.getPointAt = function(e, t) {
        return this.getPoint(e, t)
    }, Ks.prototype.copy = function(e) {
        return Ns.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, Ks.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, Ks.prototype.fromJSON = function(e) {
        return Ns.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, Qs.prototype = Object.create(Ns.prototype), Qs.prototype.constructor = Qs, Qs.prototype.isQuadraticBezierCurve = !0, Qs.prototype.getPoint = function(e, t) {
        var i = t || new $t,
            n = this.v0,
            r = this.v1,
            a = this.v2;
        return i.set(qs(e, n.x, r.x, a.x), qs(e, n.y, r.y, a.y)), i
    }, Qs.prototype.copy = function(e) {
        return Ns.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, Qs.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, Qs.prototype.fromJSON = function(e) {
        return Ns.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, $s.prototype = Object.create(Ns.prototype), $s.prototype.constructor = $s, $s.prototype.isQuadraticBezierCurve3 = !0, $s.prototype.getPoint = function(e, t) {
        var i = t || new ii,
            n = this.v0,
            r = this.v1,
            a = this.v2;
        return i.set(qs(e, n.x, r.x, a.x), qs(e, n.y, r.y, a.y), qs(e, n.z, r.z, a.z)), i
    }, $s.prototype.copy = function(e) {
        return Ns.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, $s.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, $s.prototype.fromJSON = function(e) {
        return Ns.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, ec.prototype = Object.create(Ns.prototype), ec.prototype.constructor = ec, ec.prototype.isSplineCurve = !0, ec.prototype.getPoint = function(e, t) {
        var i = t || new $t,
            n = this.points,
            r = (n.length - 1) * e,
            a = Math.floor(r),
            o = r - a,
            s = n[0 === a ? a : a - 1],
            c = n[a],
            h = n[a > n.length - 2 ? n.length - 1 : a + 1],
            l = n[a > n.length - 3 ? n.length - 1 : a + 2];
        return i.set(Ws(o, s.x, c.x, h.x, l.x), Ws(o, s.y, c.y, h.y, l.y)), i
    }, ec.prototype.copy = function(e) {
        Ns.prototype.copy.call(this, e), this.points = [];
        for (var t = 0, i = e.points.length; t < i; t++) {
            var n = e.points[t];
            this.points.push(n.clone())
        }
        return this
    }, ec.prototype.toJSON = function() {
        var e = Ns.prototype.toJSON.call(this);
        e.points = [];
        for (var t = 0, i = this.points.length; t < i; t++) {
            var n = this.points[t];
            e.points.push(n.toArray())
        }
        return e
    }, ec.prototype.fromJSON = function(e) {
        Ns.prototype.fromJSON.call(this, e), this.points = [];
        for (var t = 0, i = e.points.length; t < i; t++) {
            var n = e.points[t];
            this.points.push((new $t).fromArray(n))
        }
        return this
    };
    var tc = Object.freeze({
        ArcCurve: Bs,
        CatmullRomCurve3: Vs,
        CubicBezierCurve: Ys,
        CubicBezierCurve3: Zs,
        EllipseCurve: Us,
        LineCurve: Js,
        LineCurve3: Ks,
        QuadraticBezierCurve: Qs,
        QuadraticBezierCurve3: $s,
        SplineCurve: ec
    });

    function ic() {
        Ns.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    function nc(e) {
        ic.call(this), this.type = "Path", this.currentPoint = new $t, e && this.setFromPoints(e)
    }

    function rc(e) {
        nc.call(this, e), this.uuid = Qt.generateUUID(), this.type = "Shape", this.holes = []
    }

    function ac(e, t) {
        Gi.call(this), this.type = "Light", this.color = new Li(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
    }

    function oc(e, t, i) {
        ac.call(this, e, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Gi.DefaultUp), this.updateMatrix(), this.groundColor = new Li(t)
    }

    function sc(e) {
        this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new $t(512, 512), this.map = null, this.matrix = new ei
    }

    function cc() {
        sc.call(this, new sa(50, 1, .5, 500))
    }

    function hc(e, t, i, n, r, a) {
        ac.call(this, e, t), this.type = "SpotLight", this.position.copy(Gi.DefaultUp), this.updateMatrix(), this.target = new Gi, Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / Math.PI
            }
        }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new cc
    }

    function lc(e, t, i, n) {
        ac.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / (4 * Math.PI)
            }
        }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new sc(new sa(90, 1, .5, 500))
    }

    function uc(e, t, i, n, r, a) {
        oa.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== e ? e : -1, this.right = void 0 !== t ? t : 1, this.top = void 0 !== i ? i : 1, this.bottom = void 0 !== n ? n : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }

    function pc() {
        sc.call(this, new uc(-5, 5, 5, -5, .5, 500))
    }

    function dc(e, t) {
        ac.call(this, e, t), this.type = "DirectionalLight", this.position.copy(Gi.DefaultUp), this.updateMatrix(), this.target = new Gi, this.shadow = new pc
    }

    function fc(e, t) {
        ac.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
    }

    function mc(e, t, i, n) {
        ac.call(this, e, t), this.type = "RectAreaLight", this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
    }

    function gc(e) {
        this.manager = void 0 !== e ? e : Rs, this.textures = {}
    }
    ic.prototype = Object.assign(Object.create(Ns.prototype), {
        constructor: ic,
        add: function(e) {
            this.curves.push(e)
        },
        closePath: function() {
            var e = this.curves[0].getPoint(0),
                t = this.curves[this.curves.length - 1].getPoint(1);
            e.equals(t) || this.curves.push(new Js(t, e))
        },
        getPoint: function(e) {
            for (var t = e * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
                if (i[n] >= t) {
                    var r = i[n] - t,
                        a = this.curves[n],
                        o = a.getLength(),
                        s = 0 === o ? 0 : 1 - r / o;
                    return a.getPointAt(s)
                }
                n++
            }
            return null
        },
        getLength: function() {
            var e = this.getCurveLengths();
            return e[e.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var e = [], t = 0, i = 0, n = this.curves.length; i < n; i++) t += this.curves[i].getLength(), e.push(t);
            return this.cacheLengths = e, e
        },
        getSpacedPoints: function(e) {
            void 0 === e && (e = 40);
            for (var t = [], i = 0; i <= e; i++) t.push(this.getPoint(i / e));
            return this.autoClose && t.push(t[0]), t
        },
        getPoints: function(e) {
            e = e || 12;
            for (var t, i = [], n = 0, r = this.curves; n < r.length; n++)
                for (var a = r[n], o = a && a.isEllipseCurve ? 2 * e : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), c = 0; c < s.length; c++) {
                    var h = s[c];
                    t && t.equals(h) || (i.push(h), t = h)
                }
            return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
        },
        copy: function(e) {
            Ns.prototype.copy.call(this, e), this.curves = [];
            for (var t = 0, i = e.curves.length; t < i; t++) {
                var n = e.curves[t];
                this.curves.push(n.clone())
            }
            return this.autoClose = e.autoClose, this
        },
        toJSON: function() {
            var e = Ns.prototype.toJSON.call(this);
            e.autoClose = this.autoClose, e.curves = [];
            for (var t = 0, i = this.curves.length; t < i; t++) {
                var n = this.curves[t];
                e.curves.push(n.toJSON())
            }
            return e
        },
        fromJSON: function(e) {
            Ns.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
            for (var t = 0, i = e.curves.length; t < i; t++) {
                var n = e.curves[t];
                this.curves.push((new tc[n.type]).fromJSON(n))
            }
            return this
        }
    }), nc.prototype = Object.assign(Object.create(ic.prototype), {
        constructor: nc,
        setFromPoints: function(e) {
            this.moveTo(e[0].x, e[0].y);
            for (var t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y)
        },
        moveTo: function(e, t) {
            this.currentPoint.set(e, t)
        },
        lineTo: function(e, t) {
            var i = new Js(this.currentPoint.clone(), new $t(e, t));
            this.curves.push(i), this.currentPoint.set(e, t)
        },
        quadraticCurveTo: function(e, t, i, n) {
            var r = new Qs(this.currentPoint.clone(), new $t(e, t), new $t(i, n));
            this.curves.push(r), this.currentPoint.set(i, n)
        },
        bezierCurveTo: function(e, t, i, n, r, a) {
            var o = new Ys(this.currentPoint.clone(), new $t(e, t), new $t(i, n), new $t(r, a));
            this.curves.push(o), this.currentPoint.set(r, a)
        },
        splineThru: function(e) {
            var t = new ec([this.currentPoint.clone()].concat(e));
            this.curves.push(t), this.currentPoint.copy(e[e.length - 1])
        },
        arc: function(e, t, i, n, r, a) {
            var o = this.currentPoint.x,
                s = this.currentPoint.y;
            this.absarc(e + o, t + s, i, n, r, a)
        },
        absarc: function(e, t, i, n, r, a) {
            this.absellipse(e, t, i, i, n, r, a)
        },
        ellipse: function(e, t, i, n, r, a, o, s) {
            var c = this.currentPoint.x,
                h = this.currentPoint.y;
            this.absellipse(e + c, t + h, i, n, r, a, o, s)
        },
        absellipse: function(e, t, i, n, r, a, o, s) {
            var c = new Us(e, t, i, n, r, a, o, s);
            if (this.curves.length > 0) {
                var h = c.getPoint(0);
                h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
            }
            this.curves.push(c);
            var l = c.getPoint(1);
            this.currentPoint.copy(l)
        },
        copy: function(e) {
            return ic.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this
        },
        toJSON: function() {
            var e = ic.prototype.toJSON.call(this);
            return e.currentPoint = this.currentPoint.toArray(), e
        },
        fromJSON: function(e) {
            return ic.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this
        }
    }), rc.prototype = Object.assign(Object.create(nc.prototype), {
        constructor: rc,
        getPointsHoles: function(e) {
            for (var t = [], i = 0, n = this.holes.length; i < n; i++) t[i] = this.holes[i].getPoints(e);
            return t
        },
        extractPoints: function(e) {
            return {
                shape: this.getPoints(e),
                holes: this.getPointsHoles(e)
            }
        },
        copy: function(e) {
            nc.prototype.copy.call(this, e), this.holes = [];
            for (var t = 0, i = e.holes.length; t < i; t++) {
                var n = e.holes[t];
                this.holes.push(n.clone())
            }
            return this
        },
        toJSON: function() {
            var e = nc.prototype.toJSON.call(this);
            e.uuid = this.uuid, e.holes = [];
            for (var t = 0, i = this.holes.length; t < i; t++) {
                var n = this.holes[t];
                e.holes.push(n.toJSON())
            }
            return e
        },
        fromJSON: function(e) {
            nc.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
            for (var t = 0, i = e.holes.length; t < i; t++) {
                var n = e.holes[t];
                this.holes.push((new nc).fromJSON(n))
            }
            return this
        }
    }), ac.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: ac,
        isLight: !0,
        copy: function(e) {
            return Gi.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
        },
        toJSON: function(e) {
            var t = Gi.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
        }
    }), oc.prototype = Object.assign(Object.create(ac.prototype), {
        constructor: oc,
        isHemisphereLight: !0,
        copy: function(e) {
            return ac.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
        }
    }), Object.assign(sc.prototype, {
        copy: function(e) {
            return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var e = {};
            return 0 !== this.bias && (e.bias = this.bias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
        }
    }), cc.prototype = Object.assign(Object.create(sc.prototype), {
        constructor: cc,
        isSpotLightShadow: !0,
        update: function(e) {
            var t = this.camera,
                i = 2 * Qt.RAD2DEG * e.angle,
                n = this.mapSize.width / this.mapSize.height,
                r = e.distance || t.far;
            i === t.fov && n === t.aspect && r === t.far || (t.fov = i, t.aspect = n, t.far = r, t.updateProjectionMatrix())
        }
    }), hc.prototype = Object.assign(Object.create(ac.prototype), {
        constructor: hc,
        isSpotLight: !0,
        copy: function(e) {
            return ac.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        }
    }), lc.prototype = Object.assign(Object.create(ac.prototype), {
        constructor: lc,
        isPointLight: !0,
        copy: function(e) {
            return ac.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
        }
    }), uc.prototype = Object.assign(Object.create(oa.prototype), {
        constructor: uc,
        isOrthographicCamera: !0,
        copy: function(e, t) {
            return oa.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
        },
        setViewOffset: function(e, t, i, n, r, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = (this.right - this.left) / (2 * this.zoom),
                t = (this.top - this.bottom) / (2 * this.zoom),
                i = (this.right + this.left) / 2,
                n = (this.top + this.bottom) / 2,
                r = i - e,
                a = i + e,
                o = n + t,
                s = n - t;
            if (null !== this.view && this.view.enabled) {
                var c = this.zoom / (this.view.width / this.view.fullWidth),
                    h = this.zoom / (this.view.height / this.view.fullHeight),
                    l = (this.right - this.left) / this.view.width,
                    u = (this.top - this.bottom) / this.view.height;
                a = (r += l * (this.view.offsetX / c)) + l * (this.view.width / c), s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h)
            }
            this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(e) {
            var t = Gi.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
        }
    }), pc.prototype = Object.assign(Object.create(sc.prototype), {
        constructor: pc
    }), dc.prototype = Object.assign(Object.create(ac.prototype), {
        constructor: dc,
        isDirectionalLight: !0,
        copy: function(e) {
            return ac.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        }
    }), fc.prototype = Object.assign(Object.create(ac.prototype), {
        constructor: fc,
        isAmbientLight: !0
    }), mc.prototype = Object.assign(Object.create(ac.prototype), {
        constructor: mc,
        isRectAreaLight: !0,
        copy: function(e) {
            return ac.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this
        },
        toJSON: function(e) {
            var t = ac.prototype.toJSON.call(this, e);
            return t.object.width = this.width, t.object.height = this.height, t
        }
    }), Object.assign(gc.prototype, {
        load: function(e, t, i, n) {
            var r = this,
                a = new Os(r.manager);
            a.setPath(r.path), a.load(e, function(e) {
                t(r.parse(JSON.parse(e)))
            }, i, n)
        },
        parse: function(e) {
            var t = this.textures;

            function i(e) {
                return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
            }
            var n = new ps[e.type];
            if (void 0 !== e.uuid && (n.uuid = e.uuid), void 0 !== e.name && (n.name = e.name), void 0 !== e.color && n.color.setHex(e.color), void 0 !== e.roughness && (n.roughness = e.roughness), void 0 !== e.metalness && (n.metalness = e.metalness), void 0 !== e.emissive && n.emissive.setHex(e.emissive), void 0 !== e.specular && n.specular.setHex(e.specular), void 0 !== e.shininess && (n.shininess = e.shininess), void 0 !== e.clearCoat && (n.clearCoat = e.clearCoat), void 0 !== e.clearCoatRoughness && (n.clearCoatRoughness = e.clearCoatRoughness), void 0 !== e.vertexColors && (n.vertexColors = e.vertexColors), void 0 !== e.fog && (n.fog = e.fog), void 0 !== e.flatShading && (n.flatShading = e.flatShading), void 0 !== e.blending && (n.blending = e.blending), void 0 !== e.combine && (n.combine = e.combine), void 0 !== e.side && (n.side = e.side), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.transparent && (n.transparent = e.transparent), void 0 !== e.alphaTest && (n.alphaTest = e.alphaTest), void 0 !== e.depthTest && (n.depthTest = e.depthTest), void 0 !== e.depthWrite && (n.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (n.colorWrite = e.colorWrite), void 0 !== e.wireframe && (n.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (n.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.wireframeLinecap && (n.wireframeLinecap = e.wireframeLinecap), void 0 !== e.wireframeLinejoin && (n.wireframeLinejoin = e.wireframeLinejoin), void 0 !== e.rotation && (n.rotation = e.rotation), 1 !== e.linewidth && (n.linewidth = e.linewidth), void 0 !== e.dashSize && (n.dashSize = e.dashSize), void 0 !== e.gapSize && (n.gapSize = e.gapSize), void 0 !== e.scale && (n.scale = e.scale), void 0 !== e.polygonOffset && (n.polygonOffset = e.polygonOffset), void 0 !== e.polygonOffsetFactor && (n.polygonOffsetFactor = e.polygonOffsetFactor), void 0 !== e.polygonOffsetUnits && (n.polygonOffsetUnits = e.polygonOffsetUnits), void 0 !== e.skinning && (n.skinning = e.skinning), void 0 !== e.morphTargets && (n.morphTargets = e.morphTargets), void 0 !== e.dithering && (n.dithering = e.dithering), void 0 !== e.visible && (n.visible = e.visible), void 0 !== e.userData && (n.userData = e.userData), void 0 !== e.uniforms)
                for (var r in e.uniforms) {
                    var a = e.uniforms[r];
                    switch (n.uniforms[r] = {}, a.type) {
                        case "t":
                            n.uniforms[r].value = i(a.value);
                            break;
                        case "c":
                            n.uniforms[r].value = (new Li).setHex(a.value);
                            break;
                        case "v2":
                            n.uniforms[r].value = (new $t).fromArray(a.value);
                            break;
                        case "v3":
                            n.uniforms[r].value = (new ii).fromArray(a.value);
                            break;
                        case "v4":
                            n.uniforms[r].value = (new pi).fromArray(a.value);
                            break;
                        case "m4":
                            n.uniforms[r].value = (new ei).fromArray(a.value);
                            break;
                        default:
                            n.uniforms[r].value = a.value
                    }
                }
            if (void 0 !== e.defines && (n.defines = e.defines), void 0 !== e.vertexShader && (n.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (n.fragmentShader = e.fragmentShader), void 0 !== e.shading && (n.flatShading = 1 === e.shading), void 0 !== e.size && (n.size = e.size), void 0 !== e.sizeAttenuation && (n.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (n.map = i(e.map)), void 0 !== e.alphaMap && (n.alphaMap = i(e.alphaMap), n.transparent = !0), void 0 !== e.bumpMap && (n.bumpMap = i(e.bumpMap)), void 0 !== e.bumpScale && (n.bumpScale = e.bumpScale), void 0 !== e.normalMap && (n.normalMap = i(e.normalMap)), void 0 !== e.normalMapType && (n.normalMapType = e.normalMapType), void 0 !== e.normalScale) {
                var o = e.normalScale;
                !1 === Array.isArray(o) && (o = [o, o]), n.normalScale = (new $t).fromArray(o)
            }
            return void 0 !== e.displacementMap && (n.displacementMap = i(e.displacementMap)), void 0 !== e.displacementScale && (n.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (n.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (n.roughnessMap = i(e.roughnessMap)), void 0 !== e.metalnessMap && (n.metalnessMap = i(e.metalnessMap)), void 0 !== e.emissiveMap && (n.emissiveMap = i(e.emissiveMap)), void 0 !== e.emissiveIntensity && (n.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (n.specularMap = i(e.specularMap)), void 0 !== e.envMap && (n.envMap = i(e.envMap)), void 0 !== e.envMapIntensity && (n.envMapIntensity = e.envMapIntensity), void 0 !== e.reflectivity && (n.reflectivity = e.reflectivity), void 0 !== e.lightMap && (n.lightMap = i(e.lightMap)), void 0 !== e.lightMapIntensity && (n.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (n.aoMap = i(e.aoMap)), void 0 !== e.aoMapIntensity && (n.aoMapIntensity = e.aoMapIntensity), void 0 !== e.gradientMap && (n.gradientMap = i(e.gradientMap)), n
        },
        setPath: function(e) {
            return this.path = e, this
        },
        setTextures: function(e) {
            return this.textures = e, this
        }
    });
    var vc = {
        decodeText: function(e) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(e);
            for (var t = "", i = 0, n = e.length; i < n; i++) t += String.fromCharCode(e[i]);
            return decodeURIComponent(escape(t))
        },
        extractUrlBase: function(e) {
            var t = e.lastIndexOf("/");
            return -1 === t ? "./" : e.substr(0, t + 1)
        }
    };

    function yc(e) {
        this.manager = void 0 !== e ? e : Rs
    }
    Object.assign(yc.prototype, {
        load: function(e, t, i, n) {
            var r = this,
                a = new Os(r.manager);
            a.setPath(r.path), a.load(e, function(e) {
                t(r.parse(JSON.parse(e)))
            }, i, n)
        },
        parse: function(e) {
            var t = new an,
                i = e.data.index;
            if (void 0 !== i) {
                var n = new xc[i.type](i.array);
                t.setIndex(new Wi(n, 1))
            }
            var r = e.data.attributes;
            for (var a in r) {
                var o = r[a];
                n = new xc[o.type](o.array);
                t.addAttribute(a, new Wi(n, o.itemSize, o.normalized))
            }
            var s = e.data.groups || e.data.drawcalls || e.data.offsets;
            if (void 0 !== s)
                for (var c = 0, h = s.length; c !== h; ++c) {
                    var l = s[c];
                    t.addGroup(l.start, l.count, l.materialIndex)
                }
            var u = e.data.boundingSphere;
            if (void 0 !== u) {
                var p = new ii;
                void 0 !== u.center && p.fromArray(u.center), t.boundingSphere = new vi(p, u.radius)
            }
            return e.name && (t.name = e.name), e.userData && (t.userData = e.userData), t
        },
        setPath: function(e) {
            return this.path = e, this
        }
    });
    var xc = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };

    function bc(e) {
        this.manager = void 0 !== e ? e : Rs, this.resourcePath = ""
    }
    Object.assign(bc.prototype, {
        crossOrigin: "anonymous",
        load: function(e, t, i, n) {
            var r = this,
                a = void 0 === this.path ? vc.extractUrlBase(e) : this.path;
            this.resourcePath = this.resourcePath || a;
            var o = new Os(r.manager);
            o.setPath(this.path), o.load(e, function(i) {
                var a = null;
                try {
                    a = JSON.parse(i)
                } catch (t) {
                    return void 0 !== n && n(t), void console.error("THREE:ObjectLoader: Can't parse " + e + ".", t.message)
                }
                var o = a.metadata;
                void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, t) : console.error("THREE.ObjectLoader: Can't load " + e)
            }, i, n)
        },
        setPath: function(e) {
            return this.path = e, this
        },
        setResourcePath: function(e) {
            return this.resourcePath = e, this
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        parse: function(e, t) {
            var i = this.parseShape(e.shapes),
                n = this.parseGeometries(e.geometries, i),
                r = this.parseImages(e.images, function() {
                    void 0 !== t && t(s)
                }),
                a = this.parseTextures(e.textures, r),
                o = this.parseMaterials(e.materials, a),
                s = this.parseObject(e.object, n, o);
            return e.animations && (s.animations = this.parseAnimations(e.animations)), void 0 !== e.images && 0 !== e.images.length || void 0 !== t && t(s), s
        },
        parseShape: function(e) {
            var t = {};
            if (void 0 !== e)
                for (var i = 0, n = e.length; i < n; i++) {
                    var r = (new rc).fromJSON(e[i]);
                    t[r.uuid] = r
                }
            return t
        },
        parseGeometries: function(e, t) {
            var i = {};
            if (void 0 !== e)
                for (var n = new yc, r = 0, a = e.length; r < a; r++) {
                    var o, s = e[r];
                    switch (s.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            o = new ts[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            o = new ts[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            o = new ts[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            o = new ts[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            o = new ts[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            o = new ts[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "DodecahedronBufferGeometry":
                        case "IcosahedronGeometry":
                        case "IcosahedronBufferGeometry":
                        case "OctahedronGeometry":
                        case "OctahedronBufferGeometry":
                        case "TetrahedronGeometry":
                        case "TetrahedronBufferGeometry":
                            o = new ts[s.type](s.radius, s.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            o = new ts[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            o = new ts[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            o = new ts[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            o = new ts[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                            break;
                        case "PolyhedronGeometry":
                        case "PolyhedronBufferGeometry":
                            o = new ts[s.type](s.vertices, s.indices, s.radius, s.details);
                            break;
                        case "ShapeGeometry":
                        case "ShapeBufferGeometry":
                            for (var c = [], h = 0, l = s.shapes.length; h < l; h++) {
                                var u = t[s.shapes[h]];
                                c.push(u)
                            }
                            o = new ts[s.type](c, s.curveSegments);
                            break;
                        case "ExtrudeGeometry":
                        case "ExtrudeBufferGeometry":
                            for (c = [], h = 0, l = s.shapes.length; h < l; h++) {
                                u = t[s.shapes[h]];
                                c.push(u)
                            }
                            var p = s.options.extrudePath;
                            void 0 !== p && (s.options.extrudePath = (new tc[p.type]).fromJSON(p)), o = new ts[s.type](c, s.options);
                            break;
                        case "BufferGeometry":
                            o = n.parse(s);
                            break;
                        case "Geometry":
                            if ("THREE" in window && "LegacyJSONLoader" in THREE) o = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
                            else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                            continue
                    }
                    o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), i[s.uuid] = o
                }
            return i
        },
        parseMaterials: function(e, t) {
            var i = {},
                n = {};
            if (void 0 !== e) {
                var r = new gc;
                r.setTextures(t);
                for (var a = 0, o = e.length; a < o; a++) {
                    var s = e[a];
                    if ("MultiMaterial" === s.type) {
                        for (var c = [], h = 0; h < s.materials.length; h++) {
                            var l = s.materials[h];
                            void 0 === i[l.uuid] && (i[l.uuid] = r.parse(l)), c.push(i[l.uuid])
                        }
                        n[s.uuid] = c
                    } else n[s.uuid] = r.parse(s), i[s.uuid] = n[s.uuid]
                }
            }
            return n
        },
        parseAnimations: function(e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var n = e[i],
                    r = Ts.parse(n);
                void 0 !== n.uuid && (r.uuid = n.uuid), t.push(r)
            }
            return t
        },
        parseImages: function(e, t) {
            var i = this,
                n = {};

            function r(e) {
                return i.manager.itemStart(e), a.load(e, function() {
                    i.manager.itemEnd(e)
                }, void 0, function() {
                    i.manager.itemError(e), i.manager.itemEnd(e)
                })
            }
            if (void 0 !== e && e.length > 0) {
                var a = new Is(new Ps(t));
                a.setCrossOrigin(this.crossOrigin);
                for (var o = 0, s = e.length; o < s; o++) {
                    var c = e[o],
                        h = c.url;
                    if (Array.isArray(h)) {
                        n[c.uuid] = [];
                        for (var l = 0, u = h.length; l < u; l++) {
                            var p = h[l],
                                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : i.resourcePath + p;
                            n[c.uuid].push(r(d))
                        }
                    } else {
                        d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : i.resourcePath + c.url;
                        n[c.uuid] = r(d)
                    }
                }
            }
            return n
        },
        parseTextures: function(e, t) {
            function i(e, t) {
                return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e])
            }
            var n = {};
            if (void 0 !== e)
                for (var r = 0, a = e.length; r < a; r++) {
                    var o, s = e[r];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(t[s.image]) ? new Gn(t[s.image]) : new ui(t[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = i(s.mapping, Tc)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = i(s.wrap[0], Ac), o.wrapT = i(s.wrap[1], Ac)), void 0 !== s.format && (o.format = s.format), void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, Lc)), void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, Lc)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), n[s.uuid] = o
                }
            return n
        },
        parseObject: function(e, t, i) {
            var n;

            function r(e) {
                return void 0 === t[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), t[e]
            }

            function a(e) {
                if (void 0 !== e) {
                    if (Array.isArray(e)) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) {
                            var a = e[n];
                            void 0 === i[a] && console.warn("THREE.ObjectLoader: Undefined material", a), t.push(i[a])
                        }
                        return t
                    }
                    return void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined material", e), i[e]
                }
            }
            switch (e.type) {
                case "Scene":
                    n = new Ma, void 0 !== e.background && Number.isInteger(e.background) && (n.background = new Li(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? n.fog = new _a(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (n.fog = new wa(e.fog.color, e.fog.density)));
                    break;
                case "PerspectiveCamera":
                    n = new sa(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (n.focus = e.focus), void 0 !== e.zoom && (n.zoom = e.zoom), void 0 !== e.filmGauge && (n.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (n.filmOffset = e.filmOffset), void 0 !== e.view && (n.view = Object.assign({}, e.view));
                    break;
                case "OrthographicCamera":
                    n = new uc(e.left, e.right, e.top, e.bottom, e.near, e.far), void 0 !== e.zoom && (n.zoom = e.zoom), void 0 !== e.view && (n.view = Object.assign({}, e.view));
                    break;
                case "AmbientLight":
                    n = new fc(e.color, e.intensity);
                    break;
                case "DirectionalLight":
                    n = new dc(e.color, e.intensity);
                    break;
                case "PointLight":
                    n = new lc(e.color, e.intensity, e.distance, e.decay);
                    break;
                case "RectAreaLight":
                    n = new mc(e.color, e.intensity, e.width, e.height);
                    break;
                case "SpotLight":
                    n = new hc(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                    break;
                case "HemisphereLight":
                    n = new oc(e.color, e.groundColor, e.intensity);
                    break;
                case "SkinnedMesh":
                    console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                case "Mesh":
                    var o = r(e.geometry),
                        s = a(e.material);
                    n = o.bones && o.bones.length > 0 ? new Pa(o, s) : new Ln(o, s);
                    break;
                case "LOD":
                    n = new La;
                    break;
                case "Line":
                    n = new Ia(r(e.geometry), a(e.material), e.mode);
                    break;
                case "LineLoop":
                    n = new za(r(e.geometry), a(e.material));
                    break;
                case "LineSegments":
                    n = new Da(r(e.geometry), a(e.material));
                    break;
                case "PointCloud":
                case "Points":
                    n = new Ua(r(e.geometry), a(e.material));
                    break;
                case "Sprite":
                    n = new Aa(a(e.material));
                    break;
                case "Group":
                    n = new aa;
                    break;
                default:
                    n = new Gi
            }
            if (n.uuid = e.uuid, void 0 !== e.name && (n.name = e.name), void 0 !== e.matrix ? (n.matrix.fromArray(e.matrix), void 0 !== e.matrixAutoUpdate && (n.matrixAutoUpdate = e.matrixAutoUpdate), n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== e.position && n.position.fromArray(e.position), void 0 !== e.rotation && n.rotation.fromArray(e.rotation), void 0 !== e.quaternion && n.quaternion.fromArray(e.quaternion), void 0 !== e.scale && n.scale.fromArray(e.scale)), void 0 !== e.castShadow && (n.castShadow = e.castShadow), void 0 !== e.receiveShadow && (n.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (n.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (n.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && n.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (n.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (n.visible = e.visible), void 0 !== e.frustumCulled && (n.frustumCulled = e.frustumCulled), void 0 !== e.renderOrder && (n.renderOrder = e.renderOrder), void 0 !== e.userData && (n.userData = e.userData), void 0 !== e.layers && (n.layers.mask = e.layers), void 0 !== e.children)
                for (var c = e.children, h = 0; h < c.length; h++) n.add(this.parseObject(c[h], t, i));
            if ("LOD" === e.type)
                for (var l = e.levels, u = 0; u < l.length; u++) {
                    var p = l[u],
                        d = n.getObjectByProperty("uuid", p.object);
                    void 0 !== d && n.addLevel(d, p.distance)
                }
            return n
        }
    });
    var wc, _c, Mc, Sc, Ec, Tc = {
            UVMapping: 300,
            CubeReflectionMapping: Ce,
            CubeRefractionMapping: Oe,
            EquirectangularReflectionMapping: Ie,
            EquirectangularRefractionMapping: De,
            SphericalReflectionMapping: ze,
            CubeUVReflectionMapping: Ne,
            CubeUVRefractionMapping: Ue
        },
        Ac = {
            RepeatWrapping: Be,
            ClampToEdgeWrapping: Fe,
            MirroredRepeatWrapping: Ge
        },
        Lc = {
            NearestFilter: ke,
            NearestMipMapNearestFilter: He,
            NearestMipMapLinearFilter: je,
            LinearFilter: Ve,
            LinearMipMapNearestFilter: We,
            LinearMipMapLinearFilter: qe
        };

    function Pc() {
        this.type = "ShapePath", this.color = new Li, this.subPaths = [], this.currentPath = null
    }

    function Rc(e) {
        this.type = "Font", this.data = e
    }

    function Cc(e, t, i, n, r) {
        var a = r.glyphs[e] || r.glyphs["?"];
        if (a) {
            var o, s, c, h, l, u, p, d, f = new Pc;
            if (a.o)
                for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v;) {
                    switch (m[g++]) {
                        case "m":
                            o = m[g++] * t + i, s = m[g++] * t + n, f.moveTo(o, s);
                            break;
                        case "l":
                            o = m[g++] * t + i, s = m[g++] * t + n, f.lineTo(o, s);
                            break;
                        case "q":
                            c = m[g++] * t + i, h = m[g++] * t + n, l = m[g++] * t + i, u = m[g++] * t + n, f.quadraticCurveTo(l, u, c, h);
                            break;
                        case "b":
                            c = m[g++] * t + i, h = m[g++] * t + n, l = m[g++] * t + i, u = m[g++] * t + n, p = m[g++] * t + i, d = m[g++] * t + n, f.bezierCurveTo(l, u, p, d, c, h)
                    }
                }
            return {
                offsetX: a.ha * t,
                path: f
            }
        }
    }

    function Oc() {}
    Object.assign(Pc.prototype, {
        moveTo: function(e, t) {
            this.currentPath = new nc, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t)
        },
        lineTo: function(e, t) {
            this.currentPath.lineTo(e, t)
        },
        quadraticCurveTo: function(e, t, i, n) {
            this.currentPath.quadraticCurveTo(e, t, i, n)
        },
        bezierCurveTo: function(e, t, i, n, r, a) {
            this.currentPath.bezierCurveTo(e, t, i, n, r, a)
        },
        splineThru: function(e) {
            this.currentPath.splineThru(e)
        },
        toShapes: function(e, t) {
            function i(e) {
                for (var t = [], i = 0, n = e.length; i < n; i++) {
                    var r = e[i],
                        a = new rc;
                    a.curves = r.curves, t.push(a)
                }
                return t
            }

            function n(e, t) {
                for (var i = t.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                    var o = t[r],
                        s = t[a],
                        c = s.x - o.x,
                        h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (h < 0 && (o = t[a], c = -c, s = t[r], h = -h), e.y < o.y || e.y > s.y) continue;
                        if (e.y === o.y) {
                            if (e.x === o.x) return !0
                        } else {
                            var l = h * (e.x - o.x) - c * (e.y - o.y);
                            if (0 === l) return !0;
                            if (l < 0) continue;
                            n = !n
                        }
                    } else {
                        if (e.y !== o.y) continue;
                        if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x) return !0
                    }
                }
                return n
            }
            var r = Ro.isClockWise,
                a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === t) return i(a);
            var o, s, c, h = [];
            if (1 === a.length) return s = a[0], (c = new rc).curves = s.curves, h.push(c), h;
            var l = !r(a[0].getPoints());
            l = e ? !l : l;
            var u, p, d = [],
                f = [],
                m = [],
                g = 0;
            f[g] = void 0, m[g] = [];
            for (var v = 0, y = a.length; v < y; v++) o = r(u = (s = a[v]).getPoints()), (o = e ? !o : o) ? (!l && f[g] && g++, f[g] = {
                s: new rc,
                p: u
            }, f[g].s.curves = s.curves, l && g++, m[g] = []) : m[g].push({
                h: s,
                p: u[0]
            });
            if (!f[0]) return i(a);
            if (f.length > 1) {
                for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++) d[w] = [];
                for (w = 0, _ = f.length; w < _; w++)
                    for (var M = m[w], S = 0; S < M.length; S++) {
                        for (var E = M[S], T = !0, A = 0; A < f.length; A++) n(E.p, f[A].p) && (w !== A && b.push({
                            froms: w,
                            tos: A,
                            hole: S
                        }), T ? (T = !1, d[A].push(E)) : x = !0);
                        T && d[w].push(E)
                    }
                b.length > 0 && (x || (m = d))
            }
            v = 0;
            for (var L = f.length; v < L; v++) {
                c = f[v].s, h.push(c);
                for (var P = 0, R = (p = m[v]).length; P < R; P++) c.holes.push(p[P].h)
            }
            return h
        }
    }), Object.assign(Rc.prototype, {
        isFont: !0,
        generateShapes: function(e, t) {
            void 0 === t && (t = 100);
            for (var i = [], n = function(e, t, i) {
                    for (var n = Array.from ? Array.from(e) : String(e).split(""), r = t / i.resolution, a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, o = [], s = 0, c = 0, h = 0; h < n.length; h++) {
                        var l = n[h];
                        if ("\n" === l) s = 0, c -= a;
                        else {
                            var u = Cc(l, r, s, c, i);
                            s += u.offsetX, o.push(u.path)
                        }
                    }
                    return o
                }(e, t, this.data), r = 0, a = n.length; r < a; r++) Array.prototype.push.apply(i, n[r].toShapes());
            return i
        }
    }), Object.assign(function(e) {
        this.manager = void 0 !== e ? e : Rs
    }.prototype, {
        load: function(e, t, i, n) {
            var r = this,
                a = new Os(this.manager);
            a.setPath(this.path), a.load(e, function(e) {
                var i;
                try {
                    i = JSON.parse(e)
                } catch (t) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(e.substring(65, e.length - 2))
                }
                var n = r.parse(i);
                t && t(n)
            }, i, n)
        },
        parse: function(e) {
            return new Rc(e)
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Oc.Handlers = {
        handlers: [],
        add: function(e, t) {
            this.handlers.push(e, t)
        },
        get: function(e) {
            for (var t = this.handlers, i = 0, n = t.length; i < n; i += 2) {
                var r = t[i],
                    a = t[i + 1];
                if (r.test(e)) return a
            }
            return null
        }
    }, Object.assign(Oc.prototype, {
        crossOrigin: "anonymous",
        onLoadStart: function() {},
        onLoadProgress: function() {},
        onLoadComplete: function() {},
        initMaterials: function(e, t, i) {
            for (var n = [], r = 0; r < e.length; ++r) n[r] = this.createMaterial(e[r], t, i);
            return n
        },
        createMaterial: (wc = {
            NoBlending: q,
            NormalBlending: X,
            AdditiveBlending: Y,
            SubtractiveBlending: Z,
            MultiplyBlending: J,
            CustomBlending: K
        }, _c = new Li, Mc = new zs, Sc = new gc, function(e, t, i) {
            var n = {};

            function r(e, r, a, o, s) {
                var c, h = t + e,
                    l = Oc.Handlers.get(h);
                null !== l ? c = l.load(h) : (Mc.setCrossOrigin(i), c = Mc.load(h)), void 0 !== r && (c.repeat.fromArray(r), 1 !== r[0] && (c.wrapS = Be), 1 !== r[1] && (c.wrapT = Be)), void 0 !== a && c.offset.fromArray(a), void 0 !== o && ("repeat" === o[0] && (c.wrapS = Be), "mirror" === o[0] && (c.wrapS = Ge), "repeat" === o[1] && (c.wrapT = Be), "mirror" === o[1] && (c.wrapT = Ge)), void 0 !== s && (c.anisotropy = s);
                var u = Qt.generateUUID();
                return n[u] = c, u
            }
            var a = {
                uuid: Qt.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (var o in e) {
                var s = e[o];
                switch (o) {
                    case "DbgColor":
                    case "DbgIndex":
                    case "opticalDensity":
                    case "illumination":
                        break;
                    case "DbgName":
                        a.name = s;
                        break;
                    case "blending":
                        a.blending = wc[s];
                        break;
                    case "colorAmbient":
                    case "mapAmbient":
                        console.warn("THREE.Loader.createMaterial:", o, "is no longer supported.");
                        break;
                    case "colorDiffuse":
                        a.color = _c.fromArray(s).getHex();
                        break;
                    case "colorSpecular":
                        a.specular = _c.fromArray(s).getHex();
                        break;
                    case "colorEmissive":
                        a.emissive = _c.fromArray(s).getHex();
                        break;
                    case "specularCoef":
                        a.shininess = s;
                        break;
                    case "shading":
                        "basic" === s.toLowerCase() && (a.type = "MeshBasicMaterial"), "phong" === s.toLowerCase() && (a.type = "MeshPhongMaterial"), "standard" === s.toLowerCase() && (a.type = "MeshStandardMaterial");
                        break;
                    case "mapDiffuse":
                        a.map = r(s, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy);
                        break;
                    case "mapDiffuseRepeat":
                    case "mapDiffuseOffset":
                    case "mapDiffuseWrap":
                    case "mapDiffuseAnisotropy":
                        break;
                    case "mapEmissive":
                        a.emissiveMap = r(s, e.mapEmissiveRepeat, e.mapEmissiveOffset, e.mapEmissiveWrap, e.mapEmissiveAnisotropy);
                        break;
                    case "mapEmissiveRepeat":
                    case "mapEmissiveOffset":
                    case "mapEmissiveWrap":
                    case "mapEmissiveAnisotropy":
                        break;
                    case "mapLight":
                        a.lightMap = r(s, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy);
                        break;
                    case "mapLightRepeat":
                    case "mapLightOffset":
                    case "mapLightWrap":
                    case "mapLightAnisotropy":
                        break;
                    case "mapAO":
                        a.aoMap = r(s, e.mapAORepeat, e.mapAOOffset, e.mapAOWrap, e.mapAOAnisotropy);
                        break;
                    case "mapAORepeat":
                    case "mapAOOffset":
                    case "mapAOWrap":
                    case "mapAOAnisotropy":
                        break;
                    case "mapBump":
                        a.bumpMap = r(s, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy);
                        break;
                    case "mapBumpScale":
                        a.bumpScale = s;
                        break;
                    case "mapBumpRepeat":
                    case "mapBumpOffset":
                    case "mapBumpWrap":
                    case "mapBumpAnisotropy":
                        break;
                    case "mapNormal":
                        a.normalMap = r(s, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy);
                        break;
                    case "mapNormalFactor":
                        a.normalScale = s;
                        break;
                    case "mapNormalRepeat":
                    case "mapNormalOffset":
                    case "mapNormalWrap":
                    case "mapNormalAnisotropy":
                        break;
                    case "mapSpecular":
                        a.specularMap = r(s, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy);
                        break;
                    case "mapSpecularRepeat":
                    case "mapSpecularOffset":
                    case "mapSpecularWrap":
                    case "mapSpecularAnisotropy":
                        break;
                    case "mapMetalness":
                        a.metalnessMap = r(s, e.mapMetalnessRepeat, e.mapMetalnessOffset, e.mapMetalnessWrap, e.mapMetalnessAnisotropy);
                        break;
                    case "mapMetalnessRepeat":
                    case "mapMetalnessOffset":
                    case "mapMetalnessWrap":
                    case "mapMetalnessAnisotropy":
                        break;
                    case "mapRoughness":
                        a.roughnessMap = r(s, e.mapRoughnessRepeat, e.mapRoughnessOffset, e.mapRoughnessWrap, e.mapRoughnessAnisotropy);
                        break;
                    case "mapRoughnessRepeat":
                    case "mapRoughnessOffset":
                    case "mapRoughnessWrap":
                    case "mapRoughnessAnisotropy":
                        break;
                    case "mapAlpha":
                        a.alphaMap = r(s, e.mapAlphaRepeat, e.mapAlphaOffset, e.mapAlphaWrap, e.mapAlphaAnisotropy);
                        break;
                    case "mapAlphaRepeat":
                    case "mapAlphaOffset":
                    case "mapAlphaWrap":
                    case "mapAlphaAnisotropy":
                        break;
                    case "flipSided":
                        a.side = k;
                        break;
                    case "doubleSided":
                        a.side = H;
                        break;
                    case "transparency":
                        console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), a.opacity = s;
                        break;
                    case "depthTest":
                    case "depthWrite":
                    case "colorWrite":
                    case "opacity":
                    case "reflectivity":
                    case "transparent":
                    case "visible":
                    case "wireframe":
                        a[o] = s;
                        break;
                    case "vertexColors":
                        !0 === s && (a.vertexColors = W), "face" === s && (a.vertexColors = V);
                        break;
                    default:
                        console.error("THREE.Loader.createMaterial: Unsupported", o, s)
                }
            }
            return "MeshBasicMaterial" === a.type && delete a.emissive, "MeshPhongMaterial" !== a.type && delete a.specular, a.opacity < 1 && (a.transparent = !0), Sc.setTextures(n), Sc.parse(a)
        })
    });
    var Ic, Dc, zc, Nc, Uc, Bc, Fc, Gc, kc, Hc, jc = {
        getContext: function() {
            return void 0 === Ec && (Ec = new(window.AudioContext || window.webkitAudioContext)), Ec
        },
        setContext: function(e) {
            Ec = e
        }
    };

    function Vc(e) {
        this.manager = void 0 !== e ? e : Rs
    }

    function Wc(e, t, i, n) {
        Gi.call(this), this.type = "CubeCamera";
        var r = new sa(90, 1, e, t);
        r.up.set(0, -1, 0), r.lookAt(new ii(1, 0, 0)), this.add(r);
        var a = new sa(90, 1, e, t);
        a.up.set(0, -1, 0), a.lookAt(new ii(-1, 0, 0)), this.add(a);
        var o = new sa(90, 1, e, t);
        o.up.set(0, 0, 1), o.lookAt(new ii(0, 1, 0)), this.add(o);
        var s = new sa(90, 1, e, t);
        s.up.set(0, 0, -1), s.lookAt(new ii(0, -1, 0)), this.add(s);
        var c = new sa(90, 1, e, t);
        c.up.set(0, -1, 0), c.lookAt(new ii(0, 0, 1)), this.add(c);
        var h = new sa(90, 1, e, t);
        h.up.set(0, -1, 0), h.lookAt(new ii(0, 0, -1)), this.add(h), n = n || {
            format: ot,
            magFilter: Ve,
            minFilter: Ve
        }, this.renderTarget = new fi(i, i, n), this.renderTarget.texture.name = "CubeCamera", this.update = function(e, t) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget,
                n = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, i.activeCubeFace = 0, e.render(t, r, i), i.activeCubeFace = 1, e.render(t, a, i), i.activeCubeFace = 2, e.render(t, o, i), i.activeCubeFace = 3, e.render(t, s, i), i.activeCubeFace = 4, e.render(t, c, i), i.texture.generateMipmaps = n, i.activeCubeFace = 5, e.render(t, h, i), e.setRenderTarget(null)
        }, this.clear = function(e, t, i, n) {
            for (var r = this.renderTarget, a = 0; a < 6; a++) r.activeCubeFace = a, e.setRenderTarget(r), e.clear(t, i, n);
            e.setRenderTarget(null)
        }
    }

    function qc(e) {
        this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }

    function Xc() {
        Gi.call(this), this.type = "AudioListener", this.context = jc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0
    }

    function Yc(e) {
        Gi.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function Zc(e) {
        Yc.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function Jc(e, t) {
        this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
    }

    function Kc(e, t, i) {
        this.binding = e, this.valueSize = i;
        var n, r = Float64Array;
        switch (t) {
            case "quaternion":
                n = this._slerp;
                break;
            case "string":
            case "bool":
                r = Array, n = this._select;
                break;
            default:
                n = this._lerp
        }
        this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }
    Object.assign(Vc.prototype, {
        load: function(e, t, i, n) {
            var r = new Os(this.manager);
            r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(e, function(e) {
                var i = e.slice(0);
                jc.getContext().decodeAudioData(i, function(e) {
                    t(e)
                })
            }, i, n)
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(function() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new sa, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new sa, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }.prototype, {
        update: (kc = new ei, Hc = new ei, function(e) {
            if (Ic !== this || Dc !== e.focus || zc !== e.fov || Nc !== e.aspect * this.aspect || Uc !== e.near || Bc !== e.far || Fc !== e.zoom || Gc !== this.eyeSep) {
                Ic = this, Dc = e.focus, zc = e.fov, Nc = e.aspect * this.aspect, Uc = e.near, Bc = e.far, Fc = e.zoom;
                var t, i, n = e.projectionMatrix.clone(),
                    r = (Gc = this.eyeSep / 2) * Uc / Dc,
                    a = Uc * Math.tan(Qt.DEG2RAD * zc * .5) / Fc;
                Hc.elements[12] = -Gc, kc.elements[12] = Gc, t = -a * Nc + r, i = a * Nc + r, n.elements[0] = 2 * Uc / (i - t), n.elements[8] = (i + t) / (i - t), this.cameraL.projectionMatrix.copy(n), t = -a * Nc - r, i = a * Nc - r, n.elements[0] = 2 * Uc / (i - t), n.elements[8] = (i + t) / (i - t), this.cameraR.projectionMatrix.copy(n)
            }
            this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Hc), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(kc)
        })
    }), Wc.prototype = Object.create(Gi.prototype), Wc.prototype.constructor = Wc, Object.assign(qc.prototype, {
        start: function() {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        },
        stop: function() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        },
        getElapsedTime: function() {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function() {
            var e = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var t = ("undefined" == typeof performance ? Date : performance).now();
                e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
            }
            return e
        }
    }), Xc.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Xc,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(e) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(e) {
            return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
        },
        updateMatrixWorld: function() {
            var e = new ii,
                t = new ti,
                i = new ii,
                n = new ii,
                r = new qc;
            return function(a) {
                Gi.prototype.updateMatrixWorld.call(this, a);
                var o = this.context.listener,
                    s = this.up;
                if (this.timeDelta = r.getDelta(), this.matrixWorld.decompose(e, t, i), n.set(0, 0, -1).applyQuaternion(t), o.positionX) {
                    var c = this.context.currentTime + this.timeDelta;
                    o.positionX.linearRampToValueAtTime(e.x, c), o.positionY.linearRampToValueAtTime(e.y, c), o.positionZ.linearRampToValueAtTime(e.z, c), o.forwardX.linearRampToValueAtTime(n.x, c), o.forwardY.linearRampToValueAtTime(n.y, c), o.forwardZ.linearRampToValueAtTime(n.z, c), o.upX.linearRampToValueAtTime(s.x, c), o.upY.linearRampToValueAtTime(s.y, c), o.upZ.linearRampToValueAtTime(s.z, c)
                } else o.setPosition(e.x, e.y, e.z), o.setOrientation(n.x, n.y, n.z, s.x, s.y, s.z)
            }
        }()
    }), Yc.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: Yc,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(e) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
        },
        setMediaElementSource: function(e) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
        },
        setBuffer: function(e) {
            return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function() {
            if (!0 !== this.isPlaying) {
                if (!1 !== this.hasPlaybackControl) {
                    var e = this.context.createBufferSource();
                    return e.buffer = this.buffer, e.detune.value = this.detune, e.loop = this.loop, e.onended = this.onEnded.bind(this), e.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, e.start(this.startTime, this.offset), this.isPlaying = !0, this.source = e, this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            } else console.warn("THREE.Audio: Audio is already playing.")
        },
        pause: function() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(e) {
            return e || (e = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
        },
        setDetune: function(e) {
            return this.detune = e, !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
        },
        getDetune: function() {
            return this.detune
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(e) {
            return this.setFilters(e ? [e] : [])
        },
        setPlaybackRate: function(e) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function(e) {
            if (!1 !== this.hasPlaybackControl) return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(e) {
            return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
        }
    }), Zc.prototype = Object.assign(Object.create(Yc.prototype), {
        constructor: Zc,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(e) {
            return this.panner.refDistance = e, this
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(e) {
            return this.panner.rolloffFactor = e, this
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(e) {
            return this.panner.distanceModel = e, this
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(e) {
            return this.panner.maxDistance = e, this
        },
        setDirectionalCone: function(e, t, i) {
            return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = i, this
        },
        updateMatrixWorld: function() {
            var e = new ii,
                t = new ti,
                i = new ii,
                n = new ii;
            return function(r) {
                Gi.prototype.updateMatrixWorld.call(this, r);
                var a = this.panner;
                if (this.matrixWorld.decompose(e, t, i), n.set(0, 0, 1).applyQuaternion(t), a.positionX) {
                    var o = this.context.currentTime + this.listener.timeDelta;
                    a.positionX.linearRampToValueAtTime(e.x, o), a.positionY.linearRampToValueAtTime(e.y, o), a.positionZ.linearRampToValueAtTime(e.z, o), a.orientationX.linearRampToValueAtTime(n.x, o), a.orientationY.linearRampToValueAtTime(n.y, o), a.orientationZ.linearRampToValueAtTime(n.z, o)
                } else a.setPosition(e.x, e.y, e.z), a.setOrientation(n.x, n.y, n.z)
            }
        }()
    }), Object.assign(Jc.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function() {
            for (var e = 0, t = this.getFrequencyData(), i = 0; i < t.length; i++) e += t[i];
            return e / t.length
        }
    }), Object.assign(Kc.prototype, {
        accumulate: function(e, t) {
            var i = this.buffer,
                n = this.valueSize,
                r = e * n + n,
                a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== n; ++o) i[r + o] = i[o];
                a = t
            } else {
                var s = t / (a += t);
                this._mixBufferRegion(i, r, 0, s, n)
            }
            this.cumulativeWeight = a
        },
        apply: function(e) {
            var t = this.valueSize,
                i = this.buffer,
                n = e * t + t,
                r = this.cumulativeWeight,
                a = this.binding;
            if (this.cumulativeWeight = 0, r < 1) {
                var o = 3 * t;
                this._mixBufferRegion(i, n, o, 1 - r, t)
            }
            for (var s = t, c = t + t; s !== c; ++s)
                if (i[s] !== i[s + t]) {
                    a.setValue(i, n);
                    break
                }
        },
        saveOriginalState: function() {
            var e = this.binding,
                t = this.buffer,
                i = this.valueSize,
                n = 3 * i;
            e.getValue(t, n);
            for (var r = i, a = n; r !== a; ++r) t[r] = t[n + r % i];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var e = 3 * this.valueSize;
            this.binding.setValue(this.buffer, e)
        },
        _select: function(e, t, i, n, r) {
            if (n >= .5)
                for (var a = 0; a !== r; ++a) e[t + a] = e[i + a]
        },
        _slerp: function(e, t, i, n) {
            ti.slerpFlat(e, t, e, t, e, i, n)
        },
        _lerp: function(e, t, i, n, r) {
            for (var a = 1 - n, o = 0; o !== r; ++o) {
                var s = t + o;
                e[s] = e[s] * a + e[i + o] * n
            }
        }
    });
    var Qc, $c, eh, th, ih, nh, rh, ah, oh, sh, ch, hh, lh, uh, ph;

    function dh(e, t, i) {
        var n = i || fh.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, n)
    }

    function fh(e, t, i) {
        this.path = t, this.parsedPath = i || fh.parseTrackName(t), this.node = fh.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
    }

    function mh(e, t, i) {
        this._mixer = e, this._clip = t, this._localRoot = i || null;
        for (var n = t.tracks, r = n.length, a = new Array(r), o = {
                endingStart: Ut,
                endingEnd: Ut
            }, s = 0; s !== r; ++s) {
            var c = n[s].createInterpolant(null);
            a[s] = c, c.settings = o
        }
        this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Nt, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function gh(e) {
        this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    function vh(e) {
        "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
    }

    function yh() {
        an.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function xh(e, t, i) {
        Sa.call(this, e, t), this.meshPerAttribute = i || 1
    }

    function bh(e, t, i, n) {
        "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Wi.call(this, e, t, i), this.meshPerAttribute = n || 1
    }

    function wh(e, t, i, n) {
        this.ray = new En(e, t), this.near = i || 0, this.far = n || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }

    function _h(e, t) {
        return e.distance - t.distance
    }

    function Mh(e, t, i, n) {
        if (!1 !== e.visible && (e.raycast(t, i), !0 === n))
            for (var r = e.children, a = 0, o = r.length; a < o; a++) Mh(r[a], t, i, !0)
    }

    function Sh(e, t, i) {
        return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== i ? i : 0, this
    }

    function Eh(e, t) {
        this.min = void 0 !== e ? e : new $t(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new $t(-1 / 0, -1 / 0)
    }

    function Th(e, t) {
        this.start = void 0 !== e ? e : new ii, this.end = void 0 !== t ? t : new ii
    }

    function Ah(e) {
        Gi.call(this), this.material = e, this.render = function() {}
    }

    function Lh(e, t, i, n) {
        this.object = e, this.size = void 0 !== t ? t : 1;
        var r = void 0 !== i ? i : 16711680,
            a = void 0 !== n ? n : 1,
            o = 0,
            s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new an,
            h = new $i(2 * o * 3, 3);
        c.addAttribute("position", h), Da.call(this, c, new Oa({
            color: r,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function Ph(e, t) {
        Gi.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
        for (var i = new an, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
            var o = r / 32 * Math.PI * 2,
                s = a / 32 * Math.PI * 2;
            n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        i.addAttribute("position", new $i(n, 3));
        var c = new Oa({
            fog: !1
        });
        this.cone = new Da(i, c), this.add(this.cone), this.update()
    }

    function Rh(e) {
        for (var t = function e(t) {
                var i = [];
                t && t.isBone && i.push(t);
                for (var n = 0; n < t.children.length; n++) i.push.apply(i, e(t.children[n]));
                return i
            }(e), i = new an, n = [], r = [], a = new Li(0, 0, 1), o = new Li(0, 1, 0), s = 0; s < t.length; s++) {
            var c = t[s];
            c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
        }
        i.addAttribute("position", new $i(n, 3)), i.addAttribute("color", new $i(r, 3));
        var h = new Oa({
            vertexColors: W,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        Da.call(this, i, h), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Ch(e, t, i) {
        this.light = e, this.light.updateMatrixWorld(), this.color = i;
        var n = new Go(t, 4, 2),
            r = new An({
                wireframe: !0,
                fog: !1
            });
        Ln.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function Oh(e, t) {
        Gi.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
        var i = new Oa({
                fog: !1
            }),
            n = new an;
        n.addAttribute("position", new Wi(new Float32Array(15), 3)), this.line = new Ia(n, i), this.add(this.line), this.update()
    }

    function Ih(e, t, i) {
        Gi.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
        var n = new Ja(t);
        n.rotateY(.5 * Math.PI), this.material = new An({
            wireframe: !0,
            fog: !1
        }), void 0 === this.color && (this.material.vertexColors = W);
        var r = n.getAttribute("position"),
            a = new Float32Array(3 * r.count);
        n.addAttribute("color", new Wi(a, 3)), this.add(new Ln(n, this.material)), this.update()
    }

    function Dh(e, t, i, n) {
        e = e || 10, t = t || 10, i = new Li(void 0 !== i ? i : 4473924), n = new Li(void 0 !== n ? n : 8947848);
        for (var r = t / 2, a = e / t, o = e / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= t; h++, u += a) {
            s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
            var p = h === r ? i : n;
            p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3
        }
        var d = new an;
        d.addAttribute("position", new $i(s, 3)), d.addAttribute("color", new $i(c, 3));
        var f = new Oa({
            vertexColors: W
        });
        Da.call(this, d, f)
    }

    function zh(e, t, i, n, r, a) {
        e = e || 10, t = t || 16, i = i || 8, n = n || 64, r = new Li(void 0 !== r ? r : 4473924), a = new Li(void 0 !== a ? a : 8947848);
        var o, s, c, h, l, u, p, d = [],
            f = [];
        for (h = 0; h <= t; h++) c = h / t * (2 * Math.PI), o = Math.sin(c) * e, s = Math.cos(c) * e, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & h ? r : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
        for (h = 0; h <= i; h++)
            for (p = 1 & h ? r : a, u = e - e / i * h, l = 0; l < n; l++) c = l / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), c = (l + 1) / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b);
        var m = new an;
        m.addAttribute("position", new $i(d, 3)), m.addAttribute("color", new $i(f, 3));
        var g = new Oa({
            vertexColors: W
        });
        Da.call(this, m, g)
    }

    function Nh(e, t, i, n) {
        this.object = e, this.size = void 0 !== t ? t : 1;
        var r = void 0 !== i ? i : 16776960,
            a = void 0 !== n ? n : 1,
            o = 0,
            s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new an,
            h = new $i(2 * o * 3, 3);
        c.addAttribute("position", h), Da.call(this, c, new Oa({
            color: r,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function Uh(e, t, i) {
        Gi.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === t && (t = 1);
        var n = new an;
        n.addAttribute("position", new $i([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
        var r = new Oa({
            fog: !1
        });
        this.lightPlane = new Ia(n, r), this.add(this.lightPlane), (n = new an).addAttribute("position", new $i([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ia(n, r), this.add(this.targetLine), this.update()
    }

    function Bh(e) {
        var t = new an,
            i = new Oa({
                color: 16777215,
                vertexColors: V
            }),
            n = [],
            r = [],
            a = {},
            o = new Li(16755200),
            s = new Li(16711680),
            c = new Li(43775),
            h = new Li(16777215),
            l = new Li(3355443);

        function u(e, t, i) {
            p(e, i), p(t, i)
        }

        function p(e, t) {
            n.push(0, 0, 0), r.push(t.r, t.g, t.b), void 0 === a[e] && (a[e] = []), a[e].push(n.length / 3 - 1)
        }
        u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", h), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), t.addAttribute("position", new $i(n, 3)), t.addAttribute("color", new $i(r, 3)), Da.call(this, t, i), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }

    function Fh(e, t) {
        this.object = e, void 0 === t && (t = 16776960);
        var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            n = new Float32Array(24),
            r = new an;
        r.setIndex(new Wi(i, 1)), r.addAttribute("position", new Wi(n, 3)), Da.call(this, r, new Oa({
            color: t
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function Gh(e, t) {
        this.type = "Box3Helper", this.box = e;
        var i = void 0 !== t ? t : 16776960,
            n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            r = new an;
        r.setIndex(new Wi(n, 1)), r.addAttribute("position", new $i([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Da.call(this, r, new Oa({
            color: i
        })), this.geometry.computeBoundingSphere()
    }

    function kh(e, t, i) {
        this.type = "PlaneHelper", this.plane = e, this.size = void 0 === t ? 1 : t;
        var n = void 0 !== i ? i : 16776960,
            r = new an;
        r.addAttribute("position", new $i([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Ia.call(this, r, new Oa({
            color: n
        }));
        var a = new an;
        a.addAttribute("position", new $i([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new Ln(a, new An({
            color: n,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }

    function Hh(e, t, i, n, r, a) {
        Gi.call(this), void 0 === e && (e = new THREE.Vector3(0, 0, 1)), void 0 === t && (t = new THREE.Vector3(0, 0, 0)), void 0 === i && (i = 1), void 0 === n && (n = 16776960), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === hh && ((hh = new an).addAttribute("position", new $i([0, 0, 0, 0, 1, 0], 3)), (lh = new Jo(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(t), this.line = new Ia(hh, new Oa({
            color: n
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ln(lh, new An({
            color: n
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(i, r, a)
    }

    function jh(e) {
        var t = [0, 0, 0, e = e || 1, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
            i = new an;
        i.addAttribute("position", new $i(t, 3)), i.addAttribute("color", new $i([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
        var n = new Oa({
            vertexColors: W
        });
        Da.call(this, i, n)
    }

    function Vh(e) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Vs.call(this, e), this.type = "catmullrom"
    }
    Object.assign(dh.prototype, {
        getValue: function(e, t) {
            this.bind();
            var i = this._targetGroup.nCachedObjects_,
                n = this._bindings[i];
            void 0 !== n && n.getValue(e, t)
        },
        setValue: function(e, t) {
            for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(e, t)
        },
        bind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind()
        },
        unbind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind()
        }
    }), Object.assign(fh, {
        Composite: dh,
        create: function(e, t, i) {
            return e && e.isAnimationObjectGroup ? new fh.Composite(e, t, i) : new fh(e, t, i)
        },
        sanitizeNodeName: (oh = new RegExp("[\\[\\]\\.:\\/]", "g"), function(e) {
            return e.replace(/\s/g, "_").replace(oh, "")
        }),
        parseTrackName: (Qc = "[^\\[\\]\\.:\\/]", $c = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", eh = /((?:WC+[\/:])*)/.source.replace("WC", Qc), th = /(WCOD+)?/.source.replace("WCOD", $c), ih = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Qc), nh = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Qc), rh = new RegExp("^" + eh + th + ih + nh + "$"), ah = ["material", "materials", "bones"], function(e) {
            var t = rh.exec(e);
            if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
            var i = {
                    nodeName: t[2],
                    objectName: t[3],
                    objectIndex: t[4],
                    propertyName: t[5],
                    propertyIndex: t[6]
                },
                n = i.nodeName && i.nodeName.lastIndexOf(".");
            if (void 0 !== n && -1 !== n) {
                var r = i.nodeName.substring(n + 1); - 1 !== ah.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r)
            }
            if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
            return i
        }),
        findNode: function(e, t) {
            if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
            if (e.skeleton) {
                var i = e.skeleton.getBoneByName(t);
                if (void 0 !== i) return i
            }
            if (e.children) {
                var n = function(e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            if (r.name === t || r.uuid === t) return r;
                            var a = n(r.children);
                            if (a) return a
                        }
                        return null
                    },
                    r = n(e.children);
                if (r) return r
            }
            return null
        }
    }), Object.assign(fh.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(e, t) {
            e[t] = this.node[this.propertyName]
        }, function(e, t) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) e[t++] = i[n]
        }, function(e, t) {
            e[t] = this.resolvedProperty[this.propertyIndex]
        }, function(e, t) {
            this.resolvedProperty.toArray(e, t)
        }],
        SetterByBindingTypeAndVersioning: [
            [function(e, t) {
                this.targetObject[this.propertyName] = e[t]
            }, function(e, t) {
                this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = e[t++]
            }, function(e, t) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
                this.targetObject.needsUpdate = !0
            }, function(e, t) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t]
            }, function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                this.resolvedProperty.fromArray(e, t)
            }, function(e, t) {
                this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ],
        getValue: function(e, t) {
            this.bind(), this.getValue(e, t)
        },
        setValue: function(e, t) {
            this.bind(), this.setValue(e, t)
        },
        bind: function() {
            var e = this.node,
                t = this.parsedPath,
                i = t.objectName,
                n = t.propertyName,
                r = t.propertyIndex;
            if (e || (e = fh.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, e) {
                if (i) {
                    var a = t.objectIndex;
                    switch (i) {
                        case "materials":
                            if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            e = e.material.materials;
                            break;
                        case "bones":
                            if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            e = e.skeleton.bones;
                            for (var o = 0; o < e.length; o++)
                                if (e[o].name === a) {
                                    a = o;
                                    break
                                } break;
                        default:
                            if (void 0 === e[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            e = e[i]
                    }
                    if (void 0 !== a) {
                        if (void 0 === e[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                        e = e[a]
                    }
                }
                var s = e[n];
                if (void 0 !== s) {
                    var c = this.Versioning.None;
                    this.targetObject = e, void 0 !== e.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                    var h = this.BindingType.Direct;
                    if (void 0 !== r) {
                        if ("morphTargetInfluences" === n) {
                            if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (e.geometry.isBufferGeometry) {
                                if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                                    if (e.geometry.morphAttributes.position[o].name === r) {
                                        r = o;
                                        break
                                    }
                            } else {
                                if (!e.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                                    if (e.geometry.morphTargets[o].name === r) {
                                        r = o;
                                        break
                                    }
                            }
                        }
                        h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                    } else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
                    this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
                } else {
                    var l = t.nodeName;
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", e)
                }
            } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }), Object.assign(fh.prototype, {
        _getValue_unbound: fh.prototype.getValue,
        _setValue_unbound: fh.prototype.setValue
    }), Object.assign(function() {
        this.uuid = Qt.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var e = {};
        this._indicesByUUID = e;
        for (var t = 0, i = arguments.length; t !== i; ++t) e[arguments[t].uuid] = t;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var n = this;
        this.stats = {
            objects: {
                get total() {
                    return n._objects.length
                },
                get inUse() {
                    return this.total - n.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return n._bindings.length
            }
        }
    }.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var e = this._objects, t = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) {
                var u = arguments[h],
                    p = u.uuid,
                    d = n[p];
                if (void 0 === d) {
                    d = t++, n[p] = d, e.push(u);
                    for (var f = 0, m = s; f !== m; ++f) o[f].push(new fh(u, r[f], a[f]))
                } else if (d < i) {
                    c = e[d];
                    var g = --i,
                        v = e[g];
                    n[v.uuid] = d, e[d] = v, n[p] = g, e[g] = u;
                    for (f = 0, m = s; f !== m; ++f) {
                        var y = o[f],
                            x = y[g],
                            b = y[d];
                        y[d] = x, void 0 === b && (b = new fh(u, r[f], a[f])), y[g] = b
                    }
                } else e[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = i
        },
        remove: function() {
            for (var e = this._objects, t = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a],
                    c = s.uuid,
                    h = i[c];
                if (void 0 !== h && h >= t) {
                    var l = t++,
                        u = e[l];
                    i[u.uuid] = h, e[h] = u, i[c] = l, e[l] = s;
                    for (var p = 0, d = r; p !== d; ++p) {
                        var f = n[p],
                            m = f[l],
                            g = f[h];
                        f[h] = m, f[l] = g
                    }
                }
            }
            this.nCachedObjects_ = t
        },
        uncache: function() {
            for (var e = this._objects, t = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o].uuid,
                    h = n[c];
                if (void 0 !== h)
                    if (delete n[c], h < i) {
                        var l = --i,
                            u = e[l],
                            p = e[v = --t];
                        n[u.uuid] = h, e[h] = u, n[p.uuid] = l, e[l] = p, e.pop();
                        for (var d = 0, f = a; d !== f; ++d) {
                            var m = (y = r[d])[l],
                                g = y[v];
                            y[h] = m, y[l] = g, y.pop()
                        }
                    } else {
                        var v;
                        n[(p = e[v = --t]).uuid] = h, e[h] = p, e.pop();
                        for (d = 0, f = a; d !== f; ++d) {
                            var y;
                            (y = r[d])[h] = y[v], y.pop()
                        }
                    }
            }
            this.nCachedObjects_ = i
        },
        subscribe_: function(e, t) {
            var i = this._bindingsIndicesByPath,
                n = i[e],
                r = this._bindings;
            if (void 0 !== n) return r[n];
            var a = this._paths,
                o = this._parsedPaths,
                s = this._objects,
                c = s.length,
                h = this.nCachedObjects_,
                l = new Array(c);
            n = r.length, i[e] = n, a.push(e), o.push(t), r.push(l);
            for (var u = h, p = s.length; u !== p; ++u) {
                var d = s[u];
                l[u] = new fh(d, e, t)
            }
            return l
        },
        unsubscribe_: function(e) {
            var t = this._bindingsIndicesByPath,
                i = t[e];
            if (void 0 !== i) {
                var n = this._paths,
                    r = this._parsedPaths,
                    a = this._bindings,
                    o = a.length - 1,
                    s = a[o];
                t[e[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
            }
        }
    }), Object.assign(mh.prototype, {
        play: function() {
            return this._mixer._activateAction(this), this
        },
        stop: function() {
            return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(e) {
            return this._startTime = e, this
        },
        setLoop: function(e, t) {
            return this.loop = e, this.repetitions = t, this
        },
        setEffectiveWeight: function(e) {
            return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(e) {
            return this._scheduleFading(e, 0, 1)
        },
        fadeOut: function(e) {
            return this._scheduleFading(e, 1, 0)
        },
        crossFadeFrom: function(e, t, i) {
            if (e.fadeOut(t), this.fadeIn(t), i) {
                var n = this._clip.duration,
                    r = e._clip.duration,
                    a = r / n,
                    o = n / r;
                e.warp(1, a, t), this.warp(o, 1, t)
            }
            return this
        },
        crossFadeTo: function(e, t, i) {
            return e.crossFadeFrom(this, t, i)
        },
        stopFading: function() {
            var e = this._weightInterpolant;
            return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        setEffectiveTimeScale: function(e) {
            return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(e) {
            return this.timeScale = this._clip.duration / e, this.stopWarping()
        },
        syncWith: function(e) {
            return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
        },
        halt: function(e) {
            return this.warp(this._effectiveTimeScale, 0, e)
        },
        warp: function(e, t, i) {
            var n = this._mixer,
                r = n.time,
                a = this._timeScaleInterpolant,
                o = this.timeScale;
            null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
            var s = a.parameterPositions,
                c = a.sampleValues;
            return s[0] = r, s[1] = r + i, c[0] = e / o, c[1] = t / o, this
        },
        stopWarping: function() {
            var e = this._timeScaleInterpolant;
            return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(e, t, i, n) {
            if (this.enabled) {
                var r = this._startTime;
                if (null !== r) {
                    var a = (e - r) * i;
                    if (a < 0 || 0 === i) return;
                    this._startTime = null, t = i * a
                }
                t *= this._updateTimeScale(e);
                var o = this._updateTime(t),
                    s = this._updateWeight(e);
                if (s > 0)
                    for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulate(n, s)
            } else this._updateWeight(e)
        },
        _updateWeight: function(e) {
            var t = 0;
            if (this.enabled) {
                t = this.weight;
                var i = this._weightInterpolant;
                if (null !== i) {
                    var n = i.evaluate(e)[0];
                    t *= n, e > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = t, t
        },
        _updateTimeScale: function(e) {
            var t = 0;
            if (!this.paused) {
                t = this.timeScale;
                var i = this._timeScaleInterpolant;
                if (null !== i) t *= i.evaluate(e)[0], e > i.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
            }
            return this._effectiveTimeScale = t, t
        },
        _updateTime: function(e) {
            var t = this.time + e,
                i = this._clip.duration,
                n = this.loop,
                r = this._loopCount,
                a = 2202 === n;
            if (0 === e) return -1 === r ? t : a && 1 == (1 & r) ? i - t : t;
            if (2200 === n) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                e: {
                    if (t >= i) t = i;
                    else {
                        if (!(t < 0)) break e;
                        t = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: e < 0 ? -1 : 1
                    })
                }
            } else {
                if (-1 === r && (e >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), t >= i || t < 0) {
                    var o = Math.floor(t / i);
                    t -= i * o, r += Math.abs(o);
                    var s = this.repetitions - r;
                    if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? i : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: e > 0 ? 1 : -1
                    });
                    else {
                        if (1 === s) {
                            var c = e < 0;
                            this._setEndings(c, !c, a)
                        } else this._setEndings(!1, !1, a);
                        this._loopCount = r, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: o
                        })
                    }
                }
                if (a && 1 == (1 & r)) return this.time = t, i - t
            }
            return this.time = t, t
        },
        _setEndings: function(e, t, i) {
            var n = this._interpolantSettings;
            i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = e ? this.zeroSlopeAtStart ? 2401 : Ut : 2402, n.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : Ut : 2402)
        },
        _scheduleFading: function(e, t, i) {
            var n = this._mixer,
                r = n.time,
                a = this._weightInterpolant;
            null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
            var o = a.parameterPositions,
                s = a.sampleValues;
            return o[0] = r, s[0] = t, o[1] = r + e, s[1] = i, this
        }
    }), gh.prototype = Object.assign(Object.create(y.prototype), {
        constructor: gh,
        _bindAction: function(e, t) {
            var i = e._localRoot || this._root,
                n = e._clip.tracks,
                r = n.length,
                a = e._propertyBindings,
                o = e._interpolants,
                s = i.uuid,
                c = this._bindingsByRootAndName,
                h = c[s];
            void 0 === h && (h = {}, c[s] = h);
            for (var l = 0; l !== r; ++l) {
                var u = n[l],
                    p = u.name,
                    d = h[p];
                if (void 0 !== d) a[l] = d;
                else {
                    if (void 0 !== (d = a[l])) {
                        null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
                        continue
                    }
                    var f = t && t._propertyBindings[l].binding.parsedPath;
                    ++(d = new Kc(fh.create(i, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[l] = d
                }
                o[l].resultBuffer = d.buffer
            }
        },
        _activateAction: function(e) {
            if (!this._isActiveAction(e)) {
                if (null === e._cacheIndex) {
                    var t = (e._localRoot || this._root).uuid,
                        i = e._clip.uuid,
                        n = this._actionsByClip[i];
                    this._bindAction(e, n && n.knownActions[0]), this._addInactiveAction(e, i, t)
                }
                for (var r = e._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                    var s = r[a];
                    0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                }
                this._lendAction(e)
            }
        },
        _deactivateAction: function(e) {
            if (this._isActiveAction(e)) {
                for (var t = e._propertyBindings, i = 0, n = t.length; i !== n; ++i) {
                    var r = t[i];
                    0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                }
                this._takeBackAction(e)
            }
        },
        _initMemoryManager: function() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var e = this;
            this.stats = {
                actions: {
                    get total() {
                        return e._actions.length
                    },
                    get inUse() {
                        return e._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return e._bindings.length
                    },
                    get inUse() {
                        return e._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return e._controlInterpolants.length
                    },
                    get inUse() {
                        return e._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(e) {
            var t = e._cacheIndex;
            return null !== t && t < this._nActiveActions
        },
        _addInactiveAction: function(e, t, i) {
            var n = this._actions,
                r = this._actionsByClip,
                a = r[t];
            if (void 0 === a) a = {
                knownActions: [e],
                actionByRoot: {}
            }, e._byClipCacheIndex = 0, r[t] = a;
            else {
                var o = a.knownActions;
                e._byClipCacheIndex = o.length, o.push(e)
            }
            e._cacheIndex = n.length, n.push(e), a.actionByRoot[i] = e
        },
        _removeInactiveAction: function(e) {
            var t = this._actions,
                i = t[t.length - 1],
                n = e._cacheIndex;
            i._cacheIndex = n, t[n] = i, t.pop(), e._cacheIndex = null;
            var r = e._clip.uuid,
                a = this._actionsByClip,
                o = a[r],
                s = o.knownActions,
                c = s[s.length - 1],
                h = e._byClipCacheIndex;
            c._byClipCacheIndex = h, s[h] = c, s.pop(), e._byClipCacheIndex = null, delete o.actionByRoot[(e._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(e)
        },
        _removeInactiveBindingsForAction: function(e) {
            for (var t = e._propertyBindings, i = 0, n = t.length; i !== n; ++i) {
                var r = t[i];
                0 == --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function(e) {
            var t = this._actions,
                i = e._cacheIndex,
                n = this._nActiveActions++,
                r = t[n];
            e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
        },
        _takeBackAction: function(e) {
            var t = this._actions,
                i = e._cacheIndex,
                n = --this._nActiveActions,
                r = t[n];
            e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
        },
        _addInactiveBinding: function(e, t, i) {
            var n = this._bindingsByRootAndName,
                r = n[t],
                a = this._bindings;
            void 0 === r && (r = {}, n[t] = r), r[i] = e, e._cacheIndex = a.length, a.push(e)
        },
        _removeInactiveBinding: function(e) {
            var t = this._bindings,
                i = e.binding,
                n = i.rootNode.uuid,
                r = i.path,
                a = this._bindingsByRootAndName,
                o = a[n],
                s = t[t.length - 1],
                c = e._cacheIndex;
            s._cacheIndex = c, t[c] = s, t.pop(), delete o[r];
            e: {
                for (var h in o) break e;delete a[n]
            }
        },
        _lendBinding: function(e) {
            var t = this._bindings,
                i = e._cacheIndex,
                n = this._nActiveBindings++,
                r = t[n];
            e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
        },
        _takeBackBinding: function(e) {
            var t = this._bindings,
                i = e._cacheIndex,
                n = --this._nActiveBindings,
                r = t[n];
            e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
        },
        _lendControlInterpolant: function() {
            var e = this._controlInterpolants,
                t = this._nActiveControlInterpolants++,
                i = e[t];
            return void 0 === i && ((i = new gs(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t, e[t] = i), i
        },
        _takeBackControlInterpolant: function(e) {
            var t = this._controlInterpolants,
                i = e.__cacheIndex,
                n = --this._nActiveControlInterpolants,
                r = t[n];
            e.__cacheIndex = n, t[n] = e, r.__cacheIndex = i, t[i] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(e, t) {
            var i = t || this._root,
                n = i.uuid,
                r = "string" == typeof e ? Ts.findByName(i, e) : e,
                a = null !== r ? r.uuid : e,
                o = this._actionsByClip[a],
                s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[n];
                if (void 0 !== c) return c;
                s = o.knownActions[0], null === r && (r = s._clip)
            }
            if (null === r) return null;
            var h = new mh(this, r, t);
            return this._bindAction(h, s), this._addInactiveAction(h, a, n), h
        },
        existingAction: function(e, t) {
            var i = t || this._root,
                n = i.uuid,
                r = "string" == typeof e ? Ts.findByName(i, e) : e,
                a = r ? r.uuid : e,
                o = this._actionsByClip[a];
            return void 0 !== o && o.actionByRoot[n] || null
        },
        stopAllAction: function() {
            var e = this._actions,
                t = this._nActiveActions,
                i = this._bindings,
                n = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var r = 0; r !== t; ++r) e[r].reset();
            for (r = 0; r !== n; ++r) i[r].useCount = 0;
            return this
        },
        update: function(e) {
            e *= this.timeScale;
            for (var t = this._actions, i = this._nActiveActions, n = this.time += e, r = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
                t[o]._update(n, e, r, a)
            }
            var s = this._bindings,
                c = this._nActiveBindings;
            for (o = 0; o !== c; ++o) s[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(e) {
            var t = this._actions,
                i = e.uuid,
                n = this._actionsByClip,
                r = n[i];
            if (void 0 !== r) {
                for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var h = c._cacheIndex,
                        l = t[t.length - 1];
                    c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, t[h] = l, t.pop(), this._removeInactiveBindingsForAction(c)
                }
                delete n[i]
            }
        },
        uncacheRoot: function(e) {
            var t = e.uuid,
                i = this._actionsByClip;
            for (var n in i) {
                var r = i[n].actionByRoot[t];
                void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
            }
            var a = this._bindingsByRootAndName[t];
            if (void 0 !== a)
                for (var o in a) {
                    var s = a[o];
                    s.restoreOriginalState(), this._removeInactiveBinding(s)
                }
        },
        uncacheAction: function(e, t) {
            var i = this.existingAction(e, t);
            null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
        }
    }), vh.prototype.clone = function() {
        return new vh(void 0 === this.value.clone ? this.value : this.value.clone())
    }, yh.prototype = Object.assign(Object.create(an.prototype), {
        constructor: yh,
        isInstancedBufferGeometry: !0,
        copy: function(e) {
            return an.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), xh.prototype = Object.assign(Object.create(Sa.prototype), {
        constructor: xh,
        isInstancedInterleavedBuffer: !0,
        copy: function(e) {
            return Sa.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }
    }), bh.prototype = Object.assign(Object.create(Wi.prototype), {
        constructor: bh,
        isInstancedBufferAttribute: !0,
        copy: function(e) {
            return Wi.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }
    }), Object.assign(wh.prototype, {
        linePrecision: 1,
        set: function(e, t) {
            this.ray.set(e, t)
        },
        setFromCamera: function(e, t) {
            t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(e, t, i) {
            var n = i || [];
            return Mh(e, this, n, t), n.sort(_h), n
        },
        intersectObjects: function(e, t, i) {
            var n = i || [];
            if (!1 === Array.isArray(e)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
            for (var r = 0, a = e.length; r < a; r++) Mh(e[r], this, n, t);
            return n.sort(_h), n
        }
    }), Object.assign(Sh.prototype, {
        set: function(e, t, i) {
            return this.radius = e, this.phi = t, this.theta = i, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        },
        setFromVector3: function(e) {
            return this.setFromCartesianCoords(e.x, e.y, e.z)
        },
        setFromCartesianCoords: function(e, t, i) {
            return this.radius = Math.sqrt(e * e + t * t + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(Qt.clamp(t / this.radius, -1, 1))), this
        }
    }), Object.assign(function(e, t, i) {
        return this.radius = void 0 !== e ? e : 1, this.theta = void 0 !== t ? t : 0, this.y = void 0 !== i ? i : 0, this
    }.prototype, {
        set: function(e, t, i) {
            return this.radius = e, this.theta = t, this.y = i, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this
        },
        setFromVector3: function(e) {
            return this.setFromCartesianCoords(e.x, e.y, e.z)
        },
        setFromCartesianCoords: function(e, t, i) {
            return this.radius = Math.sqrt(e * e + i * i), this.theta = Math.atan2(e, i), this.y = t, this
        }
    }), Object.assign(Eh.prototype, {
        set: function(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new $t;
            return function(t, i) {
                var n = e.copy(i).multiplyScalar(.5);
                return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(e) {
            return void 0 === e && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new $t), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(e) {
            return void 0 === e && (console.warn("THREE.Box2: .getSize() target is now required"), e = new $t), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e), this.max.max(e), this
        },
        expandByVector: function(e) {
            return this.min.sub(e), this.max.add(e), this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        containsPoint: function(e) {
            return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
        },
        getParameter: function(e, t) {
            return void 0 === t && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new $t), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
        },
        clampPoint: function(e, t) {
            return void 0 === t && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new $t), t.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new $t;
            return function(t) {
                return e.copy(t).clamp(this.min, this.max).sub(t).length()
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min), this.max.min(e.max), this
        },
        union: function(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        },
        translate: function(e) {
            return this.min.add(e), this.max.add(e), this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }), Object.assign(Th.prototype, {
        set: function(e, t) {
            return this.start.copy(e), this.end.copy(t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.start.copy(e.start), this.end.copy(e.end), this
        },
        getCenter: function(e) {
            return void 0 === e && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new ii), e.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(e) {
            return void 0 === e && (console.warn("THREE.Line3: .delta() target is now required"), e = new ii), e.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(e, t) {
            return void 0 === t && (console.warn("THREE.Line3: .at() target is now required"), t = new ii), this.delta(t).multiplyScalar(e).add(this.start)
        },
        closestPointToPointParameter: (sh = new ii, ch = new ii, function(e, t) {
            sh.subVectors(e, this.start), ch.subVectors(this.end, this.start);
            var i = ch.dot(ch),
                n = ch.dot(sh) / i;
            return t && (n = Qt.clamp(n, 0, 1)), n
        }),
        closestPointToPoint: function(e, t, i) {
            var n = this.closestPointToPointParameter(e, t);
            return void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), i = new ii), this.delta(i).multiplyScalar(n).add(this.start)
        },
        applyMatrix4: function(e) {
            return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
        },
        equals: function(e) {
            return e.start.equals(this.start) && e.end.equals(this.end)
        }
    }), Ah.prototype = Object.create(Gi.prototype), Ah.prototype.constructor = Ah, Ah.prototype.isImmediateRenderObject = !0, Lh.prototype = Object.create(Da.prototype), Lh.prototype.constructor = Lh, Lh.prototype.update = function() {
        var e = new ii,
            t = new ii,
            i = new ni;
        return function() {
            var n = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            var r = this.object.matrixWorld,
                a = this.geometry.attributes.position,
                o = this.object.geometry;
            if (o && o.isGeometry)
                for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
                    for (var p = c[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
                        var m = s[p[n[d]]],
                            g = p.vertexNormals[d];
                        e.copy(m).applyMatrix4(r), t.copy(g).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), a.setXYZ(h, e.x, e.y, e.z), h += 1, a.setXYZ(h, t.x, t.y, t.z), h += 1
                    } else if (o && o.isBufferGeometry) {
                        var v = o.attributes.position,
                            y = o.attributes.normal;
                        for (h = 0, d = 0, f = v.count; d < f; d++) e.set(v.getX(d), v.getY(d), v.getZ(d)).applyMatrix4(r), t.set(y.getX(d), y.getY(d), y.getZ(d)), t.applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), a.setXYZ(h, e.x, e.y, e.z), h += 1, a.setXYZ(h, t.x, t.y, t.z), h += 1
                    } a.needsUpdate = !0
        }
    }(), Ph.prototype = Object.create(Gi.prototype), Ph.prototype.constructor = Ph, Ph.prototype.dispose = function() {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, Ph.prototype.update = function() {
        var e = new ii;
        return function() {
            this.light.updateMatrixWorld();
            var t = this.light.distance ? this.light.distance : 1e3,
                i = t * Math.tan(this.light.angle);
            this.cone.scale.set(i, i, t), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
    }(), Rh.prototype = Object.create(Da.prototype), Rh.prototype.constructor = Rh, Rh.prototype.updateMatrixWorld = function() {
        var e = new ii,
            t = new ei,
            i = new ei;
        return function(n) {
            var r = this.bones,
                a = this.geometry,
                o = a.getAttribute("position");
            i.getInverse(this.root.matrixWorld);
            for (var s = 0, c = 0; s < r.length; s++) {
                var h = r[s];
                h.parent && h.parent.isBone && (t.multiplyMatrices(i, h.matrixWorld), e.setFromMatrixPosition(t), o.setXYZ(c, e.x, e.y, e.z), t.multiplyMatrices(i, h.parent.matrixWorld), e.setFromMatrixPosition(t), o.setXYZ(c + 1, e.x, e.y, e.z), c += 2)
            }
            a.getAttribute("position").needsUpdate = !0, Gi.prototype.updateMatrixWorld.call(this, n)
        }
    }(), Ch.prototype = Object.create(Ln.prototype), Ch.prototype.constructor = Ch, Ch.prototype.dispose = function() {
        this.geometry.dispose(), this.material.dispose()
    }, Ch.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }, Oh.prototype = Object.create(Gi.prototype), Oh.prototype.constructor = Oh, Oh.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, Oh.prototype.update = function() {
        var e = .5 * this.light.width,
            t = .5 * this.light.height,
            i = this.line.geometry.attributes.position,
            n = i.array;
        n[0] = e, n[1] = -t, n[2] = 0, n[3] = e, n[4] = t, n[5] = 0, n[6] = -e, n[7] = t, n[8] = 0, n[9] = -e, n[10] = -t, n[11] = 0, n[12] = e, n[13] = -t, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
    }, Ih.prototype = Object.create(Gi.prototype), Ih.prototype.constructor = Ih, Ih.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, Ih.prototype.update = function() {
        var e = new ii,
            t = new Li,
            i = new Li;
        return function() {
            var n = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                var r = n.geometry.getAttribute("color");
                t.copy(this.light.color), i.copy(this.light.groundColor);
                for (var a = 0, o = r.count; a < o; a++) {
                    var s = a < o / 2 ? t : i;
                    r.setXYZ(a, s.r, s.g, s.b)
                }
                r.needsUpdate = !0
            }
            n.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
    }(), Dh.prototype = Object.create(Da.prototype), Dh.prototype.constructor = Dh, zh.prototype = Object.create(Da.prototype), zh.prototype.constructor = zh, Nh.prototype = Object.create(Da.prototype), Nh.prototype.constructor = Nh, Nh.prototype.update = function() {
        var e = new ii,
            t = new ii,
            i = new ni;
        return function() {
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
                var u = s[h],
                    p = u.normal;
                e.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n), t.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), r.setXYZ(c, e.x, e.y, e.z), c += 1, r.setXYZ(c, t.x, t.y, t.z), c += 1
            }
            r.needsUpdate = !0
        }
    }(), Uh.prototype = Object.create(Gi.prototype), Uh.prototype.constructor = Uh, Uh.prototype.dispose = function() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, Uh.prototype.update = function() {
        var e = new ii,
            t = new ii,
            i = new ii;
        return function() {
            e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(t, e), this.lightPlane.lookAt(t), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(t), this.targetLine.scale.z = i.length()
        }
    }(), Bh.prototype = Object.create(Da.prototype), Bh.prototype.constructor = Bh, Bh.prototype.update = function() {
        var e, t, i = new ii,
            n = new oa;

        function r(r, a, o, s) {
            i.set(a, o, s).unproject(n);
            var c = t[r];
            if (void 0 !== c)
                for (var h = e.getAttribute("position"), l = 0, u = c.length; l < u; l++) h.setXYZ(c[l], i.x, i.y, i.z)
        }
        return function() {
            e = this.geometry, t = this.pointMap;
            n.projectionMatrix.copy(this.camera.projectionMatrix), r("c", 0, 0, -1), r("t", 0, 0, 1), r("n1", -1, -1, -1), r("n2", 1, -1, -1), r("n3", -1, 1, -1), r("n4", 1, 1, -1), r("f1", -1, -1, 1), r("f2", 1, -1, 1), r("f3", -1, 1, 1), r("f4", 1, 1, 1), r("u1", .7, 1.1, -1), r("u2", -.7, 1.1, -1), r("u3", 0, 2, -1), r("cf1", -1, 0, 1), r("cf2", 1, 0, 1), r("cf3", 0, -1, 1), r("cf4", 0, 1, 1), r("cn1", -1, 0, -1), r("cn2", 1, 0, -1), r("cn3", 0, -1, -1), r("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
        }
    }(), Fh.prototype = Object.create(Da.prototype), Fh.prototype.constructor = Fh, Fh.prototype.update = function() {
        var e = new gi;
        return function(t) {
            if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && e.setFromObject(this.object), !e.isEmpty()) {
                var i = e.min,
                    n = e.max,
                    r = this.geometry.attributes.position,
                    a = r.array;
                a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = i.x, a[4] = n.y, a[5] = n.z, a[6] = i.x, a[7] = i.y, a[8] = n.z, a[9] = n.x, a[10] = i.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] = i.z, a[15] = i.x, a[16] = n.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = n.x, a[22] = i.y, a[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), Fh.prototype.setFromObject = function(e) {
        return this.object = e, this.update(), this
    }, Fh.prototype.copy = function(e) {
        return Da.prototype.copy.call(this, e), this.object = e.object, this
    }, Fh.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }, Gh.prototype = Object.create(Da.prototype), Gh.prototype.constructor = Gh, Gh.prototype.updateMatrixWorld = function(e) {
        var t = this.box;
        t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), Gi.prototype.updateMatrixWorld.call(this, e))
    }, kh.prototype = Object.create(Ia.prototype), kh.prototype.constructor = kh, kh.prototype.updateMatrixWorld = function(e) {
        var t = -this.plane.constant;
        Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.children[0].material.side = t < 0 ? k : G, this.lookAt(this.plane.normal), Gi.prototype.updateMatrixWorld.call(this, e)
    }, Hh.prototype = Object.create(Gi.prototype), Hh.prototype.constructor = Hh, Hh.prototype.setDirection = (ph = new ii, function(e) {
        e.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : e.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (ph.set(e.z, 0, -e.x).normalize(), uh = Math.acos(e.y), this.quaternion.setFromAxisAngle(ph, uh))
    }), Hh.prototype.setLength = function(e, t, i) {
        void 0 === t && (t = .2 * e), void 0 === i && (i = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(i, t, i), this.cone.position.y = e, this.cone.updateMatrix()
    }, Hh.prototype.setColor = function(e) {
        this.line.material.color.copy(e), this.cone.material.color.copy(e)
    }, Hh.prototype.copy = function(e) {
        return Gi.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this
    }, Hh.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }, jh.prototype = Object.create(Da.prototype), jh.prototype.constructor = jh, Ns.create = function(e, t) {
        return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(Ns.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
    }, Object.assign(ic.prototype, {
        createPointsGeometry: function(e) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var t = this.getPoints(e);
            return this.createGeometry(t)
        },
        createSpacedPointsGeometry: function(e) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var t = this.getSpacedPoints(e);
            return this.createGeometry(t)
        },
        createGeometry: function(e) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var t = new Vi, i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                t.vertices.push(new ii(r.x, r.y, r.z || 0))
            }
            return t
        }
    }), Object.assign(nc.prototype, {
        fromPoints: function(e) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
        }
    }), Vh.prototype = Object.create(Vs.prototype), Object.assign(Vh.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }), Dh.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, Rh.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }, Object.assign(Oc.prototype, {
        extractUrlBase: function(e) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), vc.extractUrlBase(e)
        }
    }), Object.assign(bc.prototype, {
        setTexturePath: function(e) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e)
        }
    }), Object.assign(Eh.prototype, {
        center: function(e) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        size: function(e) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
        }
    }), Object.assign(gi.prototype, {
        center: function(e) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        },
        size: function(e) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
        }
    }), Th.prototype.center = function(e) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
    }, Object.assign(Qt, {
        random16: function() {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
        },
        nearestPowerOfTwo: function(e) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Qt.floorPowerOfTwo(e)
        },
        nextPowerOfTwo: function(e) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Qt.ceilPowerOfTwo(e)
        }
    }), Object.assign(ni.prototype, {
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
        },
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function(e) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }), Object.assign(ei.prototype, {
        extractPosition: function(e) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
        },
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
        },
        getPosition: function() {
            var e;
            return function() {
                return void 0 === e && (e = new ii), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), e.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function(e) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        multiplyVector4: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(e) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
        },
        crossVector: function(e) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(e) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(e, t, i, n, r, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, n, i, r, a)
        }
    }), yi.prototype.isIntersectionLine = function(e) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
    }, ti.prototype.multiplyVector3 = function(e) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
    }, Object.assign(En.prototype, {
        isIntersectionBox: function(e) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        isIntersectionPlane: function(e) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        }
    }), Object.assign(Tn.prototype, {
        area: function() {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
        },
        barycoordFromPoint: function(e, t) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t)
        },
        midpoint: function(e) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e)
        },
        normal: function(e) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e)
        },
        plane: function(e) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e)
        }
    }), Object.assign(Tn, {
        barycoordFromPoint: function(e, t, i, n, r) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Tn.getBarycoord(e, t, i, n, r)
        },
        normal: function(e, t, i, n) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Tn.getNormal(e, t, i, n)
        }
    }), Object.assign(rc.prototype, {
        extractAllPoints: function(e) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
        },
        extrude: function(e) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Io(this, e)
        },
        makeGeometry: function(e) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Wo(this, e)
        }
    }), Object.assign($t.prototype, {
        fromAttribute: function(e, t, i) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, i)
        },
        distanceToManhattan: function(e) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(ii.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
        },
        getScaleFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
        },
        getColumnFromMatrix: function(e, t) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
        },
        applyProjection: function(e) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
        },
        fromAttribute: function(e, t, i) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, i)
        },
        distanceToManhattan: function(e) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(pi.prototype, {
        fromAttribute: function(e, t, i) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, i)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(Vi.prototype, {
        computeTangents: function() {
            console.error("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
        }
    }), Object.assign(Gi.prototype, {
        getChildByName: function(e) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(e, t) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
        },
        getWorldRotation: function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        }
    }), Object.defineProperties(Gi.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set: function(e) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(La.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), Object.defineProperty(Ra.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }), Pa.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.")
    }, Object.defineProperty(Ns.prototype, "__arcLengthDivisions", {
        get: function() {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
        },
        set: function(e) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e
        }
    }), sa.prototype.setLens = function(e, t) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
    }, Object.defineProperties(ac.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
            }
        },
        shadowCameraLeft: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
            }
        },
        shadowCameraRight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
            }
        },
        shadowCameraTop: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
            }
        },
        shadowCameraBottom: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
            }
        },
        shadowCameraNear: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
            }
        },
        shadowCameraFar: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(e) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
            }
        },
        shadowMapHeight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
            }
        }
    }), Object.defineProperties(Wi.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
            }
        },
        copyIndicesArray: function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        }
    }), Object.assign(an.prototype, {
        addIndex: function(e) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
        },
        addDrawCall: function(e, t, i) {
            void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(an.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.assign(Do.prototype, {
        getArrays: function() {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
        },
        addShapeList: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
        },
        addShape: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
        }
    }), Object.defineProperties(vh.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }
        }
    }), Object.defineProperties(Mn.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new Li
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(e) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e
            }
        }
    }), Object.defineProperties(os.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(Sn.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            },
            set: function(e) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
            }
        }
    }), Object.assign(ba.prototype, {
        clearTarget: function(e, t, i, n) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, i, n)
        },
        animate: function(e) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e)
        },
        getCurrentRenderTarget: function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
        },
        resetGLState: function() {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
        },
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(e) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        },
        setFaceCulling: function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        }
    }), Object.defineProperties(ba.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        }
    }), Object.defineProperties(ta.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    }), Object.defineProperties(di.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
            }
        }
    }), Object.defineProperties(ya.prototype, {
        standing: {
            set: function() {
                console.warn("THREE.WebVRManager: .standing has been removed.")
            }
        },
        userHeight: {
            set: function() {
                console.warn("THREE.WebVRManager: .userHeight has been removed.")
            }
        }
    }), Yc.prototype.load = function(e) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var t = this;
        return (new Vc).load(e, function(e) {
            t.setBuffer(e)
        }), this
    }, Jc.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    }, Wc.prototype.updateCubeMap = function(e, t) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
    }, hi.crossOrigin = void 0, hi.loadTexture = function(e, t, i, n) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var r = new zs;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(e, i, void 0, n);
        return t && (a.mapping = t), a
    }, hi.loadTextureCube = function(e, t, i, n) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var r = new Ds;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(e, i, void 0, n);
        return t && (a.mapping = t), a
    }, hi.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, hi.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    };
    const Wh = e => null != e && "null" !== e ? Xh(e) : null,
        qh = () => {
            if (r) return;
            const n = [];
            throw i || n.push("Fullscreen API"), e || n.push("WebXR Device API"), t || n.push("WebXR Hit Test API"), new Error(`The following APIs are required for AR, but are missing in this browser: ${n.join(", ")}`)
        },
        Xh = e => {
            return new URL(e, window.location.toString()).toString()
        },
        Yh = (e, t) => {
            let i = null;
            return (...n) => {
                null != i && self.clearTimeout(i), i = self.setTimeout(() => {
                    i = null, e(...n)
                }, t)
            }
        },
        Zh = (() => {
            const e = (() => {
                const e = null != document.head ? Array.from(document.head.querySelectorAll("meta")) : [];
                for (const t of e)
                    if ("viewport" === t.name) return !0;
                return !1
            })();
            return e || console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'), () => e ? window.devicePixelRatio : 1
        })();
    var Jh = function() {
        function e(e) {
            this.manager = void 0 !== e ? e : Rs, this.dracoLoader = null
        }

        function t() {
            var e = {};
            return {
                get: function(t) {
                    return e[t]
                },
                add: function(t, i) {
                    e[t] = i
                },
                remove: function(t) {
                    delete e[t]
                },
                removeAll: function() {
                    e = {}
                }
            }
        }
        e.prototype = {
            constructor: e,
            crossOrigin: "anonymous",
            load: function(e, t, i, n) {
                var r, a = this;
                r = void 0 !== this.resourcePath ? this.resourcePath : void 0 !== this.path ? this.path : vc.extractUrlBase(e), a.manager.itemStart(e);
                var o = function(t) {
                        n ? n(t) : console.error(t), a.manager.itemError(e), a.manager.itemEnd(e)
                    },
                    s = new Os(a.manager);
                s.setPath(this.path), s.setResponseType("arraybuffer"), s.load(e, function(i) {
                    try {
                        a.parse(i, r, function(i) {
                            t(i), a.manager.itemEnd(e)
                        }, o)
                    } catch (e) {
                        o(e)
                    }
                }, i, o)
            },
            setCrossOrigin: function(e) {
                return this.crossOrigin = e, this
            },
            setPath: function(e) {
                return this.path = e, this
            },
            setResourcePath: function(e) {
                return this.resourcePath = e, this
            },
            setDRACOLoader: function(e) {
                return this.dracoLoader = e, this
            },
            parse: function(e, t, s, c) {
                var d, f = {};
                if ("string" == typeof e) d = e;
                else if (vc.decodeText(new Uint8Array(e, 0, 4)) === o) {
                    try {
                        f[i.KHR_BINARY_GLTF] = new h(e)
                    } catch (e) {
                        return void(c && c(e))
                    }
                    d = f[i.KHR_BINARY_GLTF].content
                } else d = vc.decodeText(new Uint8Array(e));
                var m = JSON.parse(d);
                if (void 0 === m.asset || m.asset.version[0] < 2) c && c(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));
                else {
                    if (m.extensionsUsed)
                        for (var g = 0; g < m.extensionsUsed.length; ++g) {
                            var v = m.extensionsUsed[g],
                                y = m.extensionsRequired || [];
                            switch (v) {
                                case i.KHR_LIGHTS_PUNCTUAL:
                                    f[v] = new r(m);
                                    break;
                                case i.KHR_MATERIALS_UNLIT:
                                    f[v] = new a(m);
                                    break;
                                case i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                    f[v] = new p(m);
                                    break;
                                case i.KHR_DRACO_MESH_COMPRESSION:
                                    f[v] = new l(m, this.dracoLoader);
                                    break;
                                case i.MSFT_TEXTURE_DDS:
                                    f[i.MSFT_TEXTURE_DDS] = new n(m);
                                    break;
                                case i.KHR_TEXTURE_TRANSFORM:
                                    f[i.KHR_TEXTURE_TRANSFORM] = new u(m);
                                    break;
                                default:
                                    y.indexOf(v) >= 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + v + '".')
                            }
                        }
                    var x = new k(m, f, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        manager: this.manager
                    });
                    x.parse(function(e, t, i, n, r) {
                        var a = {
                            scene: e,
                            scenes: t,
                            cameras: i,
                            animations: n,
                            asset: r.asset,
                            parser: x,
                            userData: {}
                        };
                        I(f, a, r), s(a)
                    }, c)
                }
            }
        };
        var i = {
            KHR_BINARY_GLTF: "KHR_binary_glTF",
            KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
            KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
            KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
            KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
            KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
            MSFT_TEXTURE_DDS: "MSFT_texture_dds"
        };

        function n() {
            throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader")
        }

        function r(e) {
            this.name = i.KHR_LIGHTS_PUNCTUAL;
            var t = e.extensions && e.extensions[i.KHR_LIGHTS_PUNCTUAL] || {};
            this.lightDefs = t.lights || []
        }

        function a(e) {
            this.name = i.KHR_MATERIALS_UNLIT
        }
        r.prototype.loadLight = function(e) {
            var t, i = this.lightDefs[e],
                n = new Li(16777215);
            void 0 !== i.color && n.fromArray(i.color);
            var r = void 0 !== i.range ? i.range : 0;
            switch (i.type) {
                case "directional":
                    (t = new dc(n)).target.position.set(0, 0, -1), t.add(t.target);
                    break;
                case "point":
                    (t = new lc(n)).distance = r;
                    break;
                case "spot":
                    (t = new hc(n)).distance = r, i.spot = i.spot || {}, i.spot.innerConeAngle = void 0 !== i.spot.innerConeAngle ? i.spot.innerConeAngle : 0, i.spot.outerConeAngle = void 0 !== i.spot.outerConeAngle ? i.spot.outerConeAngle : Math.PI / 4, t.angle = i.spot.outerConeAngle, t.penumbra = 1 - i.spot.innerConeAngle / i.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                    break;
                default:
                    throw new Error('THREE.GLTFLoader: Unexpected light type, "' + i.type + '".')
            }
            return t.decay = 2, void 0 !== i.intensity && (t.intensity = i.intensity), t.name = i.name || "light_" + e, Promise.resolve(t)
        }, a.prototype.getMaterialType = function(e) {
            return An
        }, a.prototype.extendParams = function(e, t, i) {
            var n = [];
            e.color = new Li(1, 1, 1), e.opacity = 1;
            var r = t.pbrMetallicRoughness;
            if (r) {
                if (Array.isArray(r.baseColorFactor)) {
                    var a = r.baseColorFactor;
                    e.color.fromArray(a), e.opacity = a[3]
                }
                void 0 !== r.baseColorTexture && n.push(i.assignTexture(e, "map", r.baseColorTexture))
            }
            return Promise.all(n)
        };
        var o = "glTF",
            s = 12,
            c = {
                JSON: 1313821514,
                BIN: 5130562
            };

        function h(e) {
            this.name = i.KHR_BINARY_GLTF, this.content = null, this.body = null;
            var t = new DataView(e, 0, s);
            if (this.header = {
                    magic: vc.decodeText(new Uint8Array(e.slice(0, 4))),
                    version: t.getUint32(4, !0),
                    length: t.getUint32(8, !0)
                }, this.header.magic !== o) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");
            for (var n = new DataView(e, s), r = 0; r < n.byteLength;) {
                var a = n.getUint32(r, !0);
                r += 4;
                var h = n.getUint32(r, !0);
                if (r += 4, h === c.JSON) {
                    var l = new Uint8Array(e, s + r, a);
                    this.content = vc.decodeText(l)
                } else if (h === c.BIN) {
                    var u = s + r;
                    this.body = e.slice(u, u + a)
                }
                r += a
            }
            if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
        }

        function l(e, t) {
            if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = i.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, (void 0)()
        }

        function u(e) {
            this.name = i.KHR_TEXTURE_TRANSFORM
        }

        function p() {
            return {
                name: i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                getMaterialType: function() {
                    return Sn
                },
                extendParams: function(e, t, i) {
                    var n = t.extensions[this.name],
                        r = Ci.standard,
                        a = Ti.clone(r.uniforms),
                        o = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                        s = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                        c = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                        h = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                        l = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n"),
                        u = r.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", o).replace("#include <metalnessmap_pars_fragment>", s).replace("#include <roughnessmap_fragment>", c).replace("#include <metalnessmap_fragment>", h).replace("#include <lights_physical_fragment>", l);
                    delete a.roughness, delete a.metalness, delete a.roughnessMap, delete a.metalnessMap, a.specular = {
                        value: (new Li).setHex(1118481)
                    }, a.glossiness = {
                        value: .5
                    }, a.specularMap = {
                        value: null
                    }, a.glossinessMap = {
                        value: null
                    }, e.vertexShader = r.vertexShader, e.fragmentShader = u, e.uniforms = a, e.defines = {
                        STANDARD: ""
                    }, e.color = new Li(1, 1, 1), e.opacity = 1;
                    var p = [];
                    if (Array.isArray(n.diffuseFactor)) {
                        var d = n.diffuseFactor;
                        e.color.fromArray(d), e.opacity = d[3]
                    }
                    if (void 0 !== n.diffuseTexture && p.push(i.assignTexture(e, "map", n.diffuseTexture)), e.emissive = new Li(0, 0, 0), e.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1, e.specular = new Li(1, 1, 1), Array.isArray(n.specularFactor) && e.specular.fromArray(n.specularFactor), void 0 !== n.specularGlossinessTexture) {
                        var f = n.specularGlossinessTexture;
                        p.push(i.assignTexture(e, "glossinessMap", f)), p.push(i.assignTexture(e, "specularMap", f))
                    }
                    return Promise.all(p)
                },
                createMaterial: function(e) {
                    var t = new Sn({
                        defines: e.defines,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader,
                        uniforms: e.uniforms,
                        fog: !0,
                        lights: !0,
                        opacity: e.opacity,
                        transparent: e.transparent
                    });
                    return t.isGLTFSpecularGlossinessMaterial = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t.extensions.derivatives = !0, t
                },
                cloneMaterial: function(e) {
                    var t = e.clone();
                    t.isGLTFSpecularGlossinessMaterial = !0;
                    for (var i = this.specularGlossinessParams, n = 0, r = i.length; n < r; n++) t[i[n]] = e[i[n]];
                    return t
                },
                refreshUniforms: function(e, t, i, n, r, a) {
                    if (!0 === r.isGLTFSpecularGlossinessMaterial) {
                        var o, s = r.uniforms,
                            c = r.defines;
                        s.opacity.value = r.opacity, s.diffuse.value.copy(r.color), s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), s.map.value = r.map, s.specularMap.value = r.specularMap, s.alphaMap.value = r.alphaMap, s.lightMap.value = r.lightMap, s.lightMapIntensity.value = r.lightMapIntensity, s.aoMap.value = r.aoMap, s.aoMapIntensity.value = r.aoMapIntensity, r.map ? o = r.map : r.specularMap ? o = r.specularMap : r.displacementMap ? o = r.displacementMap : r.normalMap ? o = r.normalMap : r.bumpMap ? o = r.bumpMap : r.glossinessMap ? o = r.glossinessMap : r.alphaMap ? o = r.alphaMap : r.emissiveMap && (o = r.emissiveMap), void 0 !== o && (o.isWebGLRenderTarget && (o = o.texture), !0 === o.matrixAutoUpdate && o.updateMatrix(), s.uvTransform.value.copy(o.matrix)), r.envMap && (s.envMap.value = r.envMap, s.envMapIntensity.value = r.envMapIntensity, s.flipEnvMap.value = r.envMap.isCubeTexture ? -1 : 1, s.reflectivity.value = r.reflectivity, s.refractionRatio.value = r.refractionRatio, s.maxMipLevel.value = e.properties.get(r.envMap).__maxMipLevel), s.specular.value.copy(r.specular), s.glossiness.value = r.glossiness, s.glossinessMap.value = r.glossinessMap, s.emissiveMap.value = r.emissiveMap, s.bumpMap.value = r.bumpMap, s.normalMap.value = r.normalMap, s.displacementMap.value = r.displacementMap, s.displacementScale.value = r.displacementScale, s.displacementBias.value = r.displacementBias, null !== s.glossinessMap.value && void 0 === c.USE_GLOSSINESSMAP && (c.USE_GLOSSINESSMAP = "", c.USE_ROUGHNESSMAP = ""), null === s.glossinessMap.value && void 0 !== c.USE_GLOSSINESSMAP && (delete c.USE_GLOSSINESSMAP, delete c.USE_ROUGHNESSMAP)
                    }
                }
            }
        }

        function d(e, t, i, n) {
            fs.call(this, e, t, i, n)
        }
        l.prototype.decodePrimitive = function(e, t) {
            var i = this.json,
                n = this.dracoLoader,
                r = e.extensions[this.name].bufferView,
                a = e.extensions[this.name].attributes,
                o = {},
                s = {},
                c = {};
            for (var h in a) h in E && (o[E[h]] = a[h]);
            for (h in e.attributes)
                if (void 0 !== E[h] && void 0 !== a[h]) {
                    var l = i.accessors[e.attributes[h]],
                        u = w[l.componentType];
                    c[E[h]] = u, s[E[h]] = !0 === l.normalized
                } return t.getDependency("bufferView", r).then(function(e) {
                return new Promise(function(t) {
                    n.decodeDracoFile(e, function(e) {
                        for (var i in e.attributes) {
                            var n = e.attributes[i],
                                r = s[i];
                            void 0 !== r && (n.normalized = r)
                        }
                        t(e)
                    }, o, c)
                })
            })
        }, u.prototype.extendTexture = function(e, t) {
            return e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.needsUpdate = !0, e
        }, d.prototype = Object.create(fs.prototype), d.prototype.constructor = d, d.prototype.copySampleValue_ = function(e) {
            for (var t = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = e * n * 3 + n, a = 0; a !== n; a++) t[a] = i[r + a];
            return t
        }, d.prototype.beforeStart_ = d.prototype.copySampleValue_, d.prototype.afterEnd_ = d.prototype.copySampleValue_, d.prototype.interpolate_ = function(e, t, i, n) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = 2 * o, c = 3 * o, h = n - t, l = (i - t) / h, u = l * l, p = u * l, d = e * c, f = d - c, m = -2 * p + 3 * u, g = p - u, v = 1 - m, y = g - u + l, x = 0; x !== o; x++) {
                var b = a[f + x + o],
                    w = a[f + x + s] * h,
                    _ = a[d + x + o],
                    M = a[d + x] * h;
                r[x] = v * b + y * w + m * _ + g * M
            }
            return r
        };
        var f = 0,
            m = 1,
            g = 2,
            v = 3,
            y = 4,
            x = 5,
            b = 6,
            w = {
                5120: Int8Array,
                5121: Uint8Array,
                5122: Int16Array,
                5123: Uint16Array,
                5125: Uint32Array,
                5126: Float32Array
            },
            _ = {
                9728: ke,
                9729: Ve,
                9984: He,
                9985: We,
                9986: je,
                9987: qe
            },
            M = {
                33071: Fe,
                33648: Ge,
                10497: Be
            },
            S = {
                SCALAR: 1,
                VEC2: 2,
                VEC3: 3,
                VEC4: 4,
                MAT2: 4,
                MAT3: 9,
                MAT4: 16
            },
            E = {
                POSITION: "position",
                NORMAL: "normal",
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv2",
                COLOR_0: "color",
                WEIGHTS_0: "skinWeight",
                JOINTS_0: "skinIndex"
            },
            T = {
                scale: "scale",
                translation: "position",
                rotation: "quaternion",
                weights: "morphTargetInfluences"
            },
            A = {
                CUBICSPLINE: 2302,
                LINEAR: 2301,
                STEP: 2300
            },
            L = "OPAQUE",
            P = "MASK",
            R = "BLEND",
            C = {
                "image/png": st,
                "image/jpeg": ot
            };

        function O(e, t) {
            return "string" != typeof e || "" === e ? "" : /^(https?:)?\/\//i.test(e) ? e : /^data:.*,.*$/i.test(e) ? e : /^blob:.*$/i.test(e) ? e : t + e
        }

        function I(e, t, i) {
            for (var n in i.extensions) void 0 === e[n] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[n] = i.extensions[n])
        }

        function D(e, t) {
            void 0 !== t.extras && ("object" == typeof t.extras ? e.userData = t.extras : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
        }

        function z(e, t) {
            if (e.updateMorphTargets(), void 0 !== t.weights)
                for (var i = 0, n = t.weights.length; i < n; i++) e.morphTargetInfluences[i] = t.weights[i];
            if (t.extras && Array.isArray(t.extras.targetNames)) {
                var r = t.extras.targetNames;
                if (e.morphTargetInfluences.length === r.length) {
                    e.morphTargetDictionary = {};
                    for (i = 0, n = r.length; i < n; i++) e.morphTargetDictionary[r[i]] = i
                } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
            }
        }

        function N(e, t) {
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var i in e)
                if (e[i] !== t[i]) return !1;
            return !0
        }

        function U(e, t) {
            if (e.length !== t.length) return !1;
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] !== t[i]) return !1;
            return !0
        }

        function B(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (o = a.primitive, s = t, void 0, void 0, c = o.extensions ? o.extensions[i.KHR_DRACO_MESH_COMPRESSION] : void 0, h = s.extensions ? s.extensions[i.KHR_DRACO_MESH_COMPRESSION] : void 0, c && h ? c.bufferView === h.bufferView && N(c.attributes, h.attributes) : o.indices === s.indices && N(o.attributes, s.attributes)) return a.promise
            }
            var o, s, c, h;
            return null
        }

        function F(e) {
            if (e.isInterleavedBufferAttribute) {
                for (var t = e.count, i = e.itemSize, n = e.array.slice(0, t * i), r = 0; r < t; ++r) n[r] = e.getX(r), i >= 2 && (n[r + 1] = e.getY(r)), i >= 3 && (n[r + 2] = e.getZ(r)), i >= 4 && (n[r + 3] = e.getW(r));
                return new Wi(n, i, e.normalized)
            }
            return e.clone()
        }

        function k(e, i, n) {
            this.json = e || {}, this.extensions = i || {}, this.options = n || {}, this.cache = new t, this.primitiveCache = [], this.multiplePrimitivesCache = [], this.multiPassGeometryCache = [], this.textureLoader = new zs(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.fileLoader = new Os(this.options.manager), this.fileLoader.setResponseType("arraybuffer")
        }

        function j(e, t, i) {
            var n = t.attributes,
                r = [];

            function a(t, n) {
                return i.getDependency("accessor", t).then(function(t) {
                    e.addAttribute(n, t)
                })
            }
            for (var o in n) {
                var s = E[o];
                s && (s in e.attributes || r.push(a(n[o], s)))
            }
            if (void 0 !== t.indices && !e.index) {
                var c = i.getDependency("accessor", t.indices).then(function(t) {
                    e.setIndex(t)
                });
                r.push(c)
            }
            return D(e, t), Promise.all(r).then(function() {
                return void 0 !== t.targets ? function(e, t, i) {
                    for (var n = !1, r = !1, a = 0, o = t.length; a < o && (void 0 !== (h = t[a]).POSITION && (n = !0), void 0 !== h.NORMAL && (r = !0), !n || !r); a++);
                    if (!n && !r) return Promise.resolve(e);
                    var s = [],
                        c = [];
                    for (a = 0, o = t.length; a < o; a++) {
                        var h = t[a];
                        if (n) {
                            var l = void 0 !== h.POSITION ? i.getDependency("accessor", h.POSITION).then(function(e) {
                                return F(e)
                            }) : e.attributes.position;
                            s.push(l)
                        }
                        r && (l = void 0 !== h.NORMAL ? i.getDependency("accessor", h.NORMAL).then(function(e) {
                            return F(e)
                        }) : e.attributes.normal, c.push(l))
                    }
                    return Promise.all([Promise.all(s), Promise.all(c)]).then(function(i) {
                        for (var a = i[0], o = i[1], s = 0, c = t.length; s < c; s++) {
                            var h = t[s],
                                l = "morphTarget" + s;
                            if (n && void 0 !== h.POSITION) {
                                var u = a[s];
                                u.name = l;
                                for (var p = e.attributes.position, d = 0, f = u.count; d < f; d++) u.setXYZ(d, u.getX(d) + p.getX(d), u.getY(d) + p.getY(d), u.getZ(d) + p.getZ(d))
                            }
                            if (r && void 0 !== h.NORMAL) {
                                var m = o[s];
                                m.name = l;
                                var g = e.attributes.normal;
                                for (d = 0, f = m.count; d < f; d++) m.setXYZ(d, m.getX(d) + g.getX(d), m.getY(d) + g.getY(d), m.getZ(d) + g.getZ(d))
                            }
                        }
                        return n && (e.morphAttributes.position = a), r && (e.morphAttributes.normal = o), e
                    })
                }(e, t.targets, i) : e
            })
        }
        return k.prototype.parse = function(e, t) {
            var i = this.json;
            this.cache.removeAll(), this.markDefs(), this.getMultiDependencies(["scene", "animation", "camera"]).then(function(t) {
                var n = t.scenes || [],
                    r = n[i.scene || 0],
                    a = t.animations || [],
                    o = t.cameras || [];
                e(r, n, o, a, i)
            }).catch(t)
        }, k.prototype.markDefs = function() {
            for (var e = this.json.nodes || [], t = this.json.skins || [], i = this.json.meshes || [], n = {}, r = {}, a = 0, o = t.length; a < o; a++)
                for (var s = t[a].joints, c = 0, h = s.length; c < h; c++) e[s[c]].isBone = !0;
            for (var l = 0, u = e.length; l < u; l++) {
                var p = e[l];
                void 0 !== p.mesh && (void 0 === n[p.mesh] && (n[p.mesh] = r[p.mesh] = 0), n[p.mesh]++, void 0 !== p.skin && (i[p.mesh].isSkinnedMesh = !0))
            }
            this.json.meshReferences = n, this.json.meshUses = r
        }, k.prototype.getDependency = function(e, t) {
            var n = e + ":" + t,
                r = this.cache.get(n);
            if (!r) {
                switch (e) {
                    case "scene":
                        r = this.loadScene(t);
                        break;
                    case "node":
                        r = this.loadNode(t);
                        break;
                    case "mesh":
                        r = this.loadMesh(t);
                        break;
                    case "accessor":
                        r = this.loadAccessor(t);
                        break;
                    case "bufferView":
                        r = this.loadBufferView(t);
                        break;
                    case "buffer":
                        r = this.loadBuffer(t);
                        break;
                    case "material":
                        r = this.loadMaterial(t);
                        break;
                    case "texture":
                        r = this.loadTexture(t);
                        break;
                    case "skin":
                        r = this.loadSkin(t);
                        break;
                    case "animation":
                        r = this.loadAnimation(t);
                        break;
                    case "camera":
                        r = this.loadCamera(t);
                        break;
                    case "light":
                        r = this.extensions[i.KHR_LIGHTS_PUNCTUAL].loadLight(t);
                        break;
                    default:
                        throw new Error("Unknown type: " + e)
                }
                this.cache.add(n, r)
            }
            return r
        }, k.prototype.getDependencies = function(e) {
            var t = this.cache.get(e);
            if (!t) {
                var i = this,
                    n = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                t = Promise.all(n.map(function(t, n) {
                    return i.getDependency(e, n)
                })), this.cache.add(e, t)
            }
            return t
        }, k.prototype.getMultiDependencies = function(e) {
            for (var t = {}, i = [], n = 0, r = e.length; n < r; n++) {
                var a = e[n],
                    o = this.getDependencies(a);
                o = o.then(function(e, i) {
                    t[e] = i
                }.bind(this, a + ("mesh" === a ? "es" : "s"))), i.push(o)
            }
            return Promise.all(i).then(function() {
                return t
            })
        }, k.prototype.loadBuffer = function(e) {
            var t = this.json.buffers[e],
                n = this.fileLoader;
            if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
            if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[i.KHR_BINARY_GLTF].body);
            var r = this.options;
            return new Promise(function(e, i) {
                n.load(O(t.uri, r.path), e, void 0, function() {
                    i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                })
            })
        }, k.prototype.loadBufferView = function(e) {
            var t = this.json.bufferViews[e];
            return this.getDependency("buffer", t.buffer).then(function(e) {
                var i = t.byteLength || 0,
                    n = t.byteOffset || 0;
                return e.slice(n, n + i)
            })
        }, k.prototype.loadAccessor = function(e) {
            var t = this,
                i = this.json,
                n = this.json.accessors[e];
            if (void 0 === n.bufferView && void 0 === n.sparse) return Promise.resolve(null);
            var r = [];
            return void 0 !== n.bufferView ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), void 0 !== n.sparse && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then(function(e) {
                var r, a = e[0],
                    o = S[n.type],
                    s = w[n.componentType],
                    c = s.BYTES_PER_ELEMENT,
                    h = c * o,
                    l = n.byteOffset || 0,
                    u = void 0 !== n.bufferView ? i.bufferViews[n.bufferView].byteStride : void 0,
                    p = !0 === n.normalized;
                if (u && u !== h) {
                    var d = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType,
                        f = t.cache.get(d);
                    f || (f = new Sa(new s(a), u / c), t.cache.add(d, f)), r = new Ea(f, o, l / c, p)
                } else r = new Wi(null === a ? new s(n.count * o) : new s(a, l, n.count * o), o, p);
                if (void 0 !== n.sparse) {
                    var m = S.SCALAR,
                        g = w[n.sparse.indices.componentType],
                        v = n.sparse.indices.byteOffset || 0,
                        y = n.sparse.values.byteOffset || 0,
                        x = new g(e[1], v, n.sparse.count * m),
                        b = new s(e[2], y, n.sparse.count * o);
                    null !== a && r.setArray(r.array.slice());
                    for (var _ = 0, M = x.length; _ < M; _++) {
                        var E = x[_];
                        if (r.setX(E, b[_ * o]), o >= 2 && r.setY(E, b[_ * o + 1]), o >= 3 && r.setZ(E, b[_ * o + 2]), o >= 4 && r.setW(E, b[_ * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                    }
                }
                return r
            })
        }, k.prototype.loadTexture = function(e) {
            var t, n = this,
                r = this.json,
                a = this.options,
                o = this.textureLoader,
                s = window.URL || window.webkitURL,
                c = r.textures[e],
                h = c.extensions || {},
                l = (t = h[i.MSFT_TEXTURE_DDS] ? r.images[h[i.MSFT_TEXTURE_DDS].source] : r.images[c.source]).uri,
                u = !1;
            return void 0 !== t.bufferView && (l = n.getDependency("bufferView", t.bufferView).then(function(e) {
                u = !0;
                var i = new Blob([e], {
                    type: t.mimeType
                });
                return l = s.createObjectURL(i)
            })), Promise.resolve(l).then(function(e) {
                var t = Oc.Handlers.get(e);
                return t || (t = h[i.MSFT_TEXTURE_DDS] ? n.extensions[i.MSFT_TEXTURE_DDS].ddsLoader : o), new Promise(function(i, n) {
                    t.load(O(e, a.path), i, void 0, n)
                })
            }).then(function(e) {
                !0 === u && s.revokeObjectURL(l), e.flipY = !1, void 0 !== c.name && (e.name = c.name), t.mimeType in C && (e.format = C[t.mimeType]);
                var i = (r.samplers || {})[c.sampler] || {};
                return e.magFilter = _[i.magFilter] || Ve, e.minFilter = _[i.minFilter] || qe, e.wrapS = M[i.wrapS] || Be, e.wrapT = M[i.wrapT] || Be, e
            })
        }, k.prototype.assignTexture = function(e, t, n) {
            var r = this;
            return this.getDependency("texture", n.index).then(function(a) {
                if (r.extensions[i.KHR_TEXTURE_TRANSFORM]) {
                    var o = void 0 !== n.extensions ? n.extensions[i.KHR_TEXTURE_TRANSFORM] : void 0;
                    o && (a = r.extensions[i.KHR_TEXTURE_TRANSFORM].extendTexture(a, o))
                }
                e[t] = a
            })
        }, k.prototype.loadMaterial = function(e) {
            var t, n = this.json,
                r = this.extensions,
                a = n.materials[e],
                o = {},
                s = a.extensions || {},
                c = [];
            if (s[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                var h = r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                t = h.getMaterialType(a), c.push(h.extendParams(o, a, this))
            } else if (s[i.KHR_MATERIALS_UNLIT]) {
                var l = r[i.KHR_MATERIALS_UNLIT];
                t = l.getMaterialType(a), c.push(l.extendParams(o, a, this))
            } else {
                t = rs;
                var u = a.pbrMetallicRoughness || {};
                if (o.color = new Li(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
                    var p = u.baseColorFactor;
                    o.color.fromArray(p), o.opacity = p[3]
                }
                void 0 !== u.baseColorTexture && c.push(this.assignTexture(o, "map", u.baseColorTexture)), o.metalness = void 0 !== u.metallicFactor ? u.metallicFactor : 1, o.roughness = void 0 !== u.roughnessFactor ? u.roughnessFactor : 1, void 0 !== u.metallicRoughnessTexture && (c.push(this.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(this.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture)))
            }!0 === a.doubleSided && (o.side = H);
            var d = a.alphaMode || L;
            return d === R ? o.transparent = !0 : (o.transparent = !1, d === P && (o.alphaTest = void 0 !== a.alphaCutoff ? a.alphaCutoff : .5)), void 0 !== a.normalTexture && t !== An && (c.push(this.assignTexture(o, "normalMap", a.normalTexture)), o.normalScale = new $t(1, 1), void 0 !== a.normalTexture.scale && o.normalScale.set(a.normalTexture.scale, a.normalTexture.scale)), void 0 !== a.occlusionTexture && t !== An && (c.push(this.assignTexture(o, "aoMap", a.occlusionTexture)), void 0 !== a.occlusionTexture.strength && (o.aoMapIntensity = a.occlusionTexture.strength)), void 0 !== a.emissiveFactor && t !== An && (o.emissive = (new Li).fromArray(a.emissiveFactor)), void 0 !== a.emissiveTexture && t !== An && c.push(this.assignTexture(o, "emissiveMap", a.emissiveTexture)), Promise.all(c).then(function() {
                var e;
                return e = t === Sn ? r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : new t(o), void 0 !== a.name && (e.name = a.name), e.normalScale && (e.normalScale.y = -e.normalScale.y), e.map && (e.map.encoding = Ht), e.emissiveMap && (e.emissiveMap.encoding = Ht), e.specularMap && (e.specularMap.encoding = Ht), D(e, a), a.extensions && I(r, e, a), e
            })
        }, k.prototype.loadGeometries = function(e) {
            var t, n = this,
                r = this.extensions,
                a = this.primitiveCache,
                o = function(e) {
                    if (e.length < 2) return !1;
                    var t = e[0],
                        n = t.targets || [];
                    if (void 0 === t.indices) return !1;
                    for (var r = 1, a = e.length; r < a; r++) {
                        var o = e[r];
                        if (t.mode !== o.mode) return !1;
                        if (void 0 === o.indices) return !1;
                        if (o.extensions && o.extensions[i.KHR_DRACO_MESH_COMPRESSION]) return !1;
                        if (!N(t.attributes, o.attributes)) return !1;
                        var s = o.targets || [];
                        if (n.length !== s.length) return !1;
                        for (var c = 0, h = n.length; c < h; c++)
                            if (!N(n[c], s[c])) return !1
                    }
                    return !0
                }(e);

            function s(e) {
                return r[i.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, n).then(function(t) {
                    return j(t, e, n)
                })
            }
            o && (t = e, e = [e[0]]);
            for (var c = [], h = 0, l = e.length; h < l; h++) {
                var u, p = e[h],
                    d = B(a, p);
                if (d) c.push(d);
                else u = p.extensions && p.extensions[i.KHR_DRACO_MESH_COMPRESSION] ? s(p) : j(new an, p, n), a.push({
                    primitive: p,
                    promise: u
                }), c.push(u)
            }
            return Promise.all(c).then(function(e) {
                if (o) {
                    var i = e[0];
                    if (null !== (u = function(e, t, i) {
                            for (var n = 0, r = e.length; n < r; n++) {
                                var a = e[n];
                                if (t === a.baseGeometry && U(i, a.primitives)) return a.geometry
                            }
                            return null
                        }(l = n.multiPassGeometryCache, i, t))) return [u.geometry];
                    var r = new an;
                    for (var a in r.name = i.name, r.userData = i.userData, i.attributes) r.addAttribute(a, i.attributes[a]);
                    for (var a in i.morphAttributes) r.morphAttributes[a] = i.morphAttributes[a];
                    for (var s = [], c = 0, h = t.length; c < h; c++) s.push(n.getDependency("accessor", t[c].indices));
                    return Promise.all(s).then(function(e) {
                        for (var n = [], a = 0, o = 0, s = t.length; o < s; o++) {
                            for (var c = e[o], h = 0, u = c.count; h < u; h++) n.push(c.array[h]);
                            r.addGroup(a, c.count, o), a += c.count
                        }
                        return r.setIndex(n), l.push({
                            geometry: r,
                            baseGeometry: i,
                            primitives: t
                        }), [r]
                    })
                }
                var l, u;
                return e.length, e
            })
        }, k.prototype.loadMesh = function(e) {
            for (var t = this, n = this.json, r = this.extensions, a = n.meshes[e], o = a.primitives, s = [], c = 0, h = o.length; c < h; c++) {
                var l = void 0 === o[c].material ? new rs({
                    color: 16777215,
                    emissive: 0,
                    metalness: 1,
                    roughness: 1,
                    transparent: !1,
                    depthTest: !0,
                    side: G
                }) : this.getDependency("material", o[c].material);
                s.push(l)
            }
            return Promise.all(s).then(function(n) {
                return t.loadGeometries(o).then(function(s) {
                    for (var c = 1 === s.length && s[0].groups.length > 0, h = [], l = 0, u = s.length; l < u; l++) {
                        var p, d = s[l],
                            w = o[l],
                            _ = c ? n : n[l];
                        if (w.mode === y || w.mode === x || w.mode === b || void 0 === w.mode) !0 === (p = !0 === a.isSkinnedMesh ? new Pa(d, _) : new Ln(d, _)).isSkinnedMesh && p.normalizeSkinWeights(), w.mode === x ? p.drawMode = Ft : w.mode === b && (p.drawMode = Gt);
                        else if (w.mode === m) p = new Da(d, _);
                        else if (w.mode === v) p = new Ia(d, _);
                        else if (w.mode === g) p = new za(d, _);
                        else {
                            if (w.mode !== f) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + w.mode);
                            p = new Ua(d, _)
                        }
                        Object.keys(p.geometry.morphAttributes).length > 0 && z(p, a), p.name = a.name || "mesh_" + e, s.length > 1 && (p.name += "_" + l), D(p, a), h.push(p);
                        for (var M = c ? p.material : [p.material], S = void 0 !== d.attributes.color, E = void 0 === d.attributes.normal, T = !0 === p.isSkinnedMesh, A = Object.keys(d.morphAttributes).length > 0, L = A && void 0 !== d.morphAttributes.normal, P = 0, R = M.length; P < R; P++) {
                            _ = M[P];
                            if (p.isPoints) {
                                var C = "PointsMaterial:" + _.uuid,
                                    O = t.cache.get(C);
                                O || (O = new Na, Mn.prototype.copy.call(O, _), O.color.copy(_.color), O.map = _.map, O.lights = !1, t.cache.add(C, O)), _ = O
                            } else if (p.isLine) {
                                C = "LineBasicMaterial:" + _.uuid;
                                var I = t.cache.get(C);
                                I || (I = new Oa, Mn.prototype.copy.call(I, _), I.color.copy(_.color), I.lights = !1, t.cache.add(C, I)), _ = I
                            }
                            if (S || E || T || A) {
                                C = "ClonedMaterial:" + _.uuid + ":";
                                _.isGLTFSpecularGlossinessMaterial && (C += "specular-glossiness:"), T && (C += "skinning:"), S && (C += "vertex-colors:"), E && (C += "flat-shading:"), A && (C += "morph-targets:"), L && (C += "morph-normals:");
                                var N = t.cache.get(C);
                                N || (N = _.isGLTFSpecularGlossinessMaterial ? r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(_) : _.clone(), T && (N.skinning = !0), S && (N.vertexColors = W), E && (N.flatShading = !0), A && (N.morphTargets = !0), L && (N.morphNormals = !0), t.cache.add(C, N)), _ = N
                            }
                            M[P] = _, _.aoMap && void 0 === d.attributes.uv2 && void 0 !== d.attributes.uv && (console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."), d.addAttribute("uv2", new Wi(d.attributes.uv.array, 2))), _.isGLTFSpecularGlossinessMaterial && (p.onBeforeRender = r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms)
                        }
                        p.material = c ? M : M[0]
                    }
                    if (1 === h.length) return h[0];
                    var U = new aa;
                    for (l = 0, u = h.length; l < u; l++) U.add(h[l]);
                    return U
                })
            })
        }, k.prototype.loadCamera = function(e) {
            var t, i = this.json.cameras[e],
                n = i[i.type];
            if (n) return "perspective" === i.type ? t = new sa(Qt.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === i.type && (t = new uc(n.xmag / -2, n.xmag / 2, n.ymag / 2, n.ymag / -2, n.znear, n.zfar)), void 0 !== i.name && (t.name = i.name), D(t, i), Promise.resolve(t);
            console.warn("THREE.GLTFLoader: Missing camera parameters.")
        }, k.prototype.loadSkin = function(e) {
            var t = this.json.skins[e],
                i = {
                    joints: t.joints
                };
            return void 0 === t.inverseBindMatrices ? Promise.resolve(i) : this.getDependency("accessor", t.inverseBindMatrices).then(function(e) {
                return i.inverseBindMatrices = e, i
            })
        }, k.prototype.loadAnimation = function(e) {
            for (var t = this.json.animations[e], i = [], n = [], r = [], a = [], o = [], s = 0, c = t.channels.length; s < c; s++) {
                var h = t.channels[s],
                    l = t.samplers[h.sampler],
                    u = h.target,
                    p = void 0 !== u.node ? u.node : u.id,
                    f = void 0 !== t.parameters ? t.parameters[l.input] : l.input,
                    m = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
                i.push(this.getDependency("node", p)), n.push(this.getDependency("accessor", f)), r.push(this.getDependency("accessor", m)), a.push(l), o.push(u)
            }
            return Promise.all([Promise.all(i), Promise.all(n), Promise.all(r), Promise.all(a), Promise.all(o)]).then(function(i) {
                for (var n = i[0], r = i[1], a = i[2], o = i[3], s = i[4], c = [], h = 0, l = n.length; h < l; h++) {
                    var u = n[h],
                        p = r[h],
                        f = a[h],
                        m = o[h],
                        g = s[h];
                    if (void 0 !== u) {
                        var v;
                        switch (u.updateMatrix(), u.matrixAutoUpdate = !0, T[g.path]) {
                            case T.weights:
                                v = ws;
                                break;
                            case T.rotation:
                                v = Ms;
                                break;
                            case T.position:
                            case T.scale:
                            default:
                                v = Es
                        }
                        var y = u.name ? u.name : u.uuid,
                            x = void 0 !== m.interpolation ? A[m.interpolation] : 2301,
                            b = [];
                        T[g.path] === T.weights ? u.traverse(function(e) {
                            !0 === e.isMesh && e.morphTargetInfluences && b.push(e.name ? e.name : e.uuid)
                        }) : b.push(y);
                        for (var w = 0, _ = b.length; w < _; w++) {
                            var M = new v(b[w] + "." + T[g.path], ds.arraySlice(p.array, 0), ds.arraySlice(f.array, 0), x);
                            "CUBICSPLINE" === m.interpolation && (M.createInterpolant = function(e) {
                                return new d(this.times, this.values, this.getValueSize() / 3, e)
                            }, M.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), c.push(M)
                        }
                    }
                }
                return new Ts(void 0 !== t.name ? t.name : "animation_" + e, void 0, c)
            })
        }, k.prototype.loadNode = function(e) {
            var t = this.json,
                n = this.extensions,
                r = this,
                a = t.meshReferences,
                o = t.meshUses,
                s = t.nodes[e];
            return new Promise(function(e) {
                !0 === s.isBone ? e(new Ca) : void 0 !== s.mesh ? r.getDependency("mesh", s.mesh).then(function(t) {
                    var i;
                    if (a[s.mesh] > 1) {
                        var n = o[s.mesh]++;
                        (i = t.clone()).name += "_instance_" + n, i.onBeforeRender = t.onBeforeRender;
                        for (var r = 0, c = i.children.length; r < c; r++) i.children[r].name += "_instance_" + n, i.children[r].onBeforeRender = t.children[r].onBeforeRender
                    } else i = t;
                    e(i)
                }) : void 0 !== s.camera ? r.getDependency("camera", s.camera).then(e) : s.extensions && s.extensions[i.KHR_LIGHTS_PUNCTUAL] && void 0 !== s.extensions[i.KHR_LIGHTS_PUNCTUAL].light ? r.getDependency("light", s.extensions[i.KHR_LIGHTS_PUNCTUAL].light).then(e) : e(new Gi)
            }).then(function(e) {
                if (void 0 !== s.name && (e.name = fh.sanitizeNodeName(s.name)), D(e, s), s.extensions && I(n, e, s), void 0 !== s.matrix) {
                    var t = new ei;
                    t.fromArray(s.matrix), e.applyMatrix(t)
                } else void 0 !== s.translation && e.position.fromArray(s.translation), void 0 !== s.rotation && e.quaternion.fromArray(s.rotation), void 0 !== s.scale && e.scale.fromArray(s.scale);
                return e
            })
        }, k.prototype.loadScene = function() {
            function e(t, i, n, r) {
                var a = n.nodes[t];
                return r.getDependency("node", t).then(function(e) {
                    return void 0 === a.skin ? e : r.getDependency("skin", a.skin).then(function(e) {
                        for (var i = [], n = 0, a = (t = e).joints.length; n < a; n++) i.push(r.getDependency("node", t.joints[n]));
                        return Promise.all(i)
                    }).then(function(i) {
                        for (var n = !0 === e.isGroup ? e.children : [e], r = 0, a = n.length; r < a; r++) {
                            for (var o = n[r], s = [], c = [], h = 0, l = i.length; h < l; h++) {
                                var u = i[h];
                                if (u) {
                                    s.push(u);
                                    var p = new ei;
                                    void 0 !== t.inverseBindMatrices && p.fromArray(t.inverseBindMatrices.array, 16 * h), c.push(p)
                                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[h])
                            }
                            o.bind(new Ra(s, c), o.matrixWorld)
                        }
                        return e
                    });
                    var t
                }).then(function(t) {
                    i.add(t);
                    var o = [];
                    if (a.children)
                        for (var s = a.children, c = 0, h = s.length; c < h; c++) {
                            var l = s[c];
                            o.push(e(l, t, n, r))
                        }
                    return Promise.all(o)
                })
            }
            return function(t) {
                var i = this.json,
                    n = this.extensions,
                    r = this.json.scenes[t],
                    a = new Ma;
                void 0 !== r.name && (a.name = r.name), D(a, r), r.extensions && I(n, a, r);
                for (var o = r.nodes || [], s = [], c = 0, h = o.length; c < h; c++) s.push(e(o[c], a, i, this));
                return Promise.all(s).then(function() {
                    return a
                })
            }
        }(), e
    }();
    const Kh = (e, t) => new Promise((i, n) => {
            t.load(e, i, () => {}, n)
        }),
        Qh = new Map;
    class $h {
        static has(e) {
            return Qh.has(e)
        }
        constructor() {
            this.loader = new Jh
        }
        async load(e) {
            Qh.has(e) || Qh.set(e, Kh(e, this.loader));
            const t = await Qh.get(e),
                i = t.scene ? t.scene.clone(!0) : null;
            return i && i.traverse(e => {
                e.renderOrder = 1e3, e.material && (e.material = e.material.clone())
            }), i
        }
    }
    class el extends Gi {
        constructor() {
            super(), this.name = "Model", this.loader = new $h, this.modelContainer = new Gi, this.modelContainer.name = "ModelContainer", this.boundingBox = new gi, this.size = new ii, this.add(this.modelContainer)
        }
        hasModel() {
            return !!this.modelContainer.children.length
        }
        applyEnvironmentMap(e) {
            this.modelContainer.traverse(t => {
                t && t.isMesh && t.material && (t.material.envMap = e, t.material.needsUpdate = !0)
            }), this.dispatchEvent({
                type: "envmap-change",
                value: e
            })
        }
        setObject(e) {
            this.clear(), this.modelContainer.add(e), this.updateBoundingBox(), this.dispatchEvent({
                type: "model-load"
            })
        }
        async setSource(e) {
            if (!e || e === this.url) return;
            const t = await this.loader.load(e);
            for (this.clear(), this.url = e; t && t.children.length;) this.modelContainer.add(t.children.shift());
            this.modelContainer.traverse(e => {
                e && "Mesh" === e.type && (e.castShadow = !0)
            }), this.updateBoundingBox(), this.dispatchEvent({
                type: "model-load"
            })
        }
        clear() {
            for (this.url = null; this.modelContainer.children.length;) this.modelContainer.remove(this.modelContainer.children[0])
        }
        updateBoundingBox() {
            this.remove(this.modelContainer), this.boundingBox.setFromObject(this.modelContainer), this.boundingBox.getSize(this.size), this.add(this.modelContainer)
        }
    }
    const tl = Symbol("camera"),
        il = Symbol("renderTarget"),
        nl = new ii,
        rl = {
            near: .01,
            far: 100,
            textureWidth: 512,
            textureHeight: 512
        },
        al = new An({
            color: 0
        }),
        ol = new An({
            transparent: !0,
            opacity: .1
        });
    class sl extends Ln {
        constructor() {
            const e = new cn(1, 1);
            e.rotateX(-Math.PI / 2), super(e, ol.clone()), this.name = "StaticShadow", this[il] = new di(rl.textureWidth, rl.textureHeight, {
                format: st
            }), this.material.map = this[il].texture, this.material.needsUpdate = !0, this[tl] = new uc
        }
        render(e, t, i, n = {}) {
            const r = t.overrideMaterial,
                a = e.getClearAlpha(),
                o = e.getRenderTarget(),
                s = this.parent;
            n = Object.assign({}, n, rl), e.setClearAlpha(0), t.overrideMaterial = al, this[il].width === n.textureWidth && this[il].height === n.textureHeight || this[il].setSize(n.textureWidth, n.textureHeight), i.updateMatrixWorld(!0), i.target.updateMatrixWorld(!0), this[tl].position.setFromMatrixPosition(i.matrixWorld), this[tl].updateMatrixWorld(!0), this[tl].lookAt(i.target.position), this.updateMatrixWorld(!0), nl.setFromMatrixScale(this.matrixWorld), this[tl].top = nl.z / 2, this[tl].bottom = nl.z / -2, this[tl].left = nl.x / -2, this[tl].right = nl.x / 2, this[tl].near = n.near, this[tl].far = n.far, this[tl].updateProjectionMatrix(), s && s.remove(this), e.render(t, this[tl], this[il], !0), s && s.add(this), this.material.needsUpdate = !0, t.overrideMaterial = r, e.setClearAlpha(a), e.setRenderTarget(o)
        }
    }
    const cl = {
            Framed: "framed",
            Lifesize: "lifesize"
        },
        hl = (Object.keys(cl).map(e => cl[e]), 10),
        ll = 1.01,
        ul = 45,
        pl = Symbol("paused");
    class dl extends Ma {
        constructor({
            canvas: e,
            element: t,
            width: i,
            height: n,
            renderer: r
        }) {
            super(), this.name = "ModelScene", this.onModelLoad = this.onModelLoad.bind(this), this[pl] = !1, this.element = t, this.canvas = e, this.context = e.getContext("2d"), this.renderer = r, this.scaleType = cl.Framed, this.model = new el, this.shadow = new sl, this.light = new fc(16777215, 1), this.light.name = "AmbientLight", this.shadowLight = new dc(16777215, 0), this.shadowLight.position.set(0, 10, 0), this.shadowLight.name = "ShadowLight", this.camera = new sa(ul, this.aspect, .1, 1e3), this.camera.name = "MainCamera", this.camera.position.y = 5, this.activeCamera = this.camera, this.pivot = new Gi, this.pivot.name = "Pivot";
            const a = new Go(1, 32, 32),
                o = new An({
                    side: k,
                    color: 16777215,
                    depthTest: !1,
                    depthWrite: !1
                });
            this.skysphere = new Ln(a, o), this.skysphere.name = "Skysphere", this.skysphere.renderOrder = 1, this.add(this.pivot), this.add(this.light), this.add(this.skysphere), this.pivot.add(this.model), this.isVisible = !1, this.isDirty = !1, this.roomBox = new gi, this.roomSize = new ii, this.setSize(i, n), this.model.addEventListener("model-load", this.onModelLoad)
        }
        get paused() {
            return this[pl]
        }
        pause() {
            this[pl] = !0
        }
        resume() {
            this[pl] = !1
        }
        async setModelSource(e) {
            try {
                await this.model.setSource(e)
            } catch (t) {
                throw new Error(`Could not set model source to '${e}': ${t.message}`)
            }
        }
        setSize(e, t) {
            e === this.width && t === this.height || (this.width = Math.max(e, 1), this.height = Math.max(t, 1), this.aspect = this.width / this.height, this.applyRoomSize())
        }
        applyRoomSize() {
            const e = Zh();
            this.canvas.width = this.width * e, this.canvas.height = this.height * e, this.canvas.style.width = `${this.width}px`, this.canvas.style.height = `${this.height}px`;
            const t = this.aspect * hl / 2;
            this.roomBox.min.set(-t, 0, -t), this.roomBox.max.set(t, hl, t), this.roomBox.getSize(this.roomSize), this.scaleModelToFitRoom();
            const i = this.model.size;
            if (0 !== i.length() && i.y >= i.x && i.y >= i.z) {
                const e = Math.max(i.x, i.z) * this.model.scale.z * ll;
                this.roomBox.max.z = e / 2, this.roomBox.min.z = e / -2, this.roomSize.z = e
            }
            this.camera.near = hl / 2 / Math.tan(ul / 2 * Math.PI / 180), this.camera.position.z = this.roomBox.max.z + this.camera.near, this.camera.aspect = this.aspect, this.camera.updateProjectionMatrix();
            const n = 2 * Math.max(this.roomSize.x, this.roomSize.y, this.roomSize.z);
            this.skysphere.scale.setScalar(n), this.skysphere.scale.z *= -1, this.updateStaticShadow()
        }
        getSize() {
            return {
                width: this.width,
                height: this.height
            }
        }
        scaleModelToFitRoom() {
            if (!this.model.hasModel() || 0 === this.model.size.length()) return;
            this.resetModelPose();
            const e = this.roomSize,
                t = this.model.size,
                i = this.roomBox.getCenter(new ii),
                n = this.model.boundingBox.getCenter(new ii);
            let r = Math.min(e.x / t.x, e.y / t.y, e.z / t.z);
            r /= ll, n.multiplyScalar(r), this.model.scale.multiplyScalar(r), this.model.position.subVectors(i, n)
        }
        resetModelPose() {
            this.model.position.set(0, 0, 0), this.model.rotation.set(0, 0, 0), this.model.scale.set(1, 1, 1)
        }
        getCamera() {
            return this.activeCamera
        }
        setCamera(e) {
            this.activeCamera = e
        }
        onModelLoad() {
            this.applyRoomSize(), this.dispatchEvent({
                type: "model-load"
            })
        }
        updateStaticShadow() {
            if (!this.model.hasModel() || 0 === this.model.size.length()) return void this.pivot.remove(this.shadow);
            const e = this.pivot.rotation.y;
            this.pivot.rotation.y = 0, this.remove(this.skysphere), this.shadow.position.set(0, 0, 0), this.shadow.scale.x = this.roomSize.x, this.shadow.scale.z = this.roomSize.z, this.shadow.render(this.renderer.renderer, this, this.shadowLight), this.pivot.add(this.shadow), this.pivot.rotation.y = e;
            const t = this.model.size.y * this.model.scale.y;
            t < hl && (this.shadow.position.y = hl / 2 - t / 2), this.add(this.skysphere)
        }
    }
    new ei;
    const fl = new Float32Array(3),
        ml = new Float32Array(3);
    class gl extends Gi {
        constructor(e) {
            super(), this.name = "Reticle";
            let t = new ko(.1, .11, 24, 1),
                i = new An({
                    color: 16777215
                });
            t.applyMatrix((new ei).makeRotationX(Qt.degToRad(-90))), this.ring = new Ln(t, i), this.add(this.ring), this.visible = !1, this.camera = e
        }
        async update(e, t) {
            this.raycaster = this.raycaster || new wh, this.raycaster.setFromCamera({
                x: 0,
                y: 0
            }, this.camera);
            const i = this.raycaster.ray;
            let n;
            fl.set(i.origin.toArray()), ml.set(i.direction.toArray());
            try {
                n = await e.requestHitTest(fl, ml, t)
            } catch (e) {
                n = []
            }
            if (n.length) {
                const e = n[0],
                    t = (new ei).fromArray(e.hitMatrix);
                this.position.setFromMatrixPosition(t);
                const i = (new ii).setFromMatrixPosition(this.camera.matrixWorld),
                    r = Math.atan2(i.x - this.position.x, i.z - this.position.z);
                this.rotation.set(0, r, 0), this.visible = !0
            }
        }
    }
    const vl = Symbol("presentedScene"),
        yl = Symbol("device"),
        xl = Symbol("devicePromise"),
        bl = Symbol("rafId"),
        wl = Symbol("currentSession"),
        _l = Symbol("tick"),
        Ml = Symbol("frameOfReference"),
        Sl = Symbol("resolveCleanup"),
        El = Symbol("outputCanvas"),
        Tl = Symbol("outputContext"),
        Al = Symbol("onWebXRFrame"),
        Ll = Symbol("onOutputCanvasClick"),
        Pl = Symbol("postSessionCleanup"),
        Rl = new ei,
        Cl = new Float32Array(3),
        Ol = new Float32Array(3);
    class Il {
        static fromInlineRenderer(e) {
            return new Il(e.canvas, e.context)
        }
        
        initializeRenderer() {
            null == this.renderer && (this.renderer = new ba({
                canvas: this.inputCanvas,
                context: this.inputContext
            }), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setPixelRatio(1), this.renderer.autoClear = !1, this.renderer.gammaOutput = !0, this.renderer.gammaFactor = 2.2)
        }
        async resolveDevice() {
            return qh(), await navigator.xr.requestDevice()
        }
        async resolveARSession() {
            qh();
            const e = this[yl],
                t = await e.requestSession({
                    environmentIntegration: !0,
                    outputContext: this.outputContext
                }),
                i = this.renderer.getContext();
            return await i.setCompatibleXRDevice(e), t.baseLayer = new XRWebGLLayer(t, i, {
                alpha: !0
            }), this.renderer.setFramebuffer(t.baseLayer.framebuffer), t
        }
        get presentedScene() {
            return this[vl]
        }
        async supportsPresentation() {
            try {
                qh();
                const e = await this[xl];
                return await e.supportsSession({
                    environmentIntegration: !0,
                    outputContext: this.outputContext
                }), !0
            } catch (e) {
                return !1
            }
        }
        async present(e) {
            if (!this.isPresenting) return e.model.scale.set(1, 1, 1), this[vl] = e, this.initializeRenderer(), this[wl] = await this.resolveARSession(), this[wl].addEventListener("end", () => {
                this[Pl]()
            }, {
                once: !0
            }), this[Ml] = await this[wl].requestFrameOfReference("eye-level"), this[_l](), this.outputCanvas;
            console.warn("Cannot present while a model is already presenting")
        }
        async stopPresenting() {
            if (!this.isPresenting) return;
            const e = new Promise(e => {
                this[Sl] = e
            });
            try {
                const t = this[wl];
                this[wl] = null, t.cancelAnimationFrame(this[bl]), await t.end(), await e
            } catch (e) {
                console.warn("Error while trying to end AR session"), console.warn(e), this[Pl]()
            }
        } [Pl]() {
            null != this[vl] && (this.dolly.remove(this[vl]), this[vl].skysphere.visible = !0, this[vl].scaleModelToFitRoom()), this[Ml] = null, this[vl] = null, null != this.outputCanvas.parentNode && this.outputCanvas.parentNode.removeChild(this.outputCanvas), null != this[Sl] && this[Sl]()
        }
        get isPresenting() {
            return null != this[vl]
        }
        get outputCanvas() {
            return null == this[El] && (this[El] = document.createElement("canvas"), this[El].setAttribute("style", "\ndisplay: block;\nposition: absolute;\ntop: 0px;\nleft: 0px;\nwidth: 100%;\nheight: 100%;"), this[El].addEventListener("click", () => this[Ll]())), this[El]
        }
        get outputContext() {
            return null == this[Tl] && (this[Tl] = this.outputCanvas.getContext("xrpresent")), this[Tl]
        }
        async [Ll]() {
            if (null == this[wl]) return;
            null == this.raycaster && (this.raycaster = new wh);
            const e = this[vl];
            this.raycaster.setFromCamera({
                x: 0,
                y: 0
            }, this.camera);
            const t = this.raycaster.ray;
            Cl.set(t.origin.toArray()), Ol.set(t.direction.toArray());
            const i = await this[wl].requestHitTest(Cl, Ol, this[Ml]);
            if (i.length) {
                const t = i[0],
                    n = Rl.fromArray(t.hitMatrix);
                this.dolly.position.setFromMatrixPosition(n), this.dolly.rotation.set(0, -e.pivot.rotation.y, 0), e.skysphere.visible = !1, this.dolly.add(e)
            }
        } [_l]() {
            this[bl] = this[wl].requestAnimationFrame((e, t) => this[Al](e, t))
        } [Al](e, t) {
            const {
                session: i
            } = t, n = t.getDevicePose(this[Ml]);
            if (this.reticle.update(this[wl], this[Ml]), this[_l](), null != n)
                for (const e of t.views) {
                    const t = i.baseLayer.getViewport(e);
                    this.renderer.setViewport(0, 0, t.width, t.height), this.renderer.setSize(t.width, t.height, !1), this.camera.projectionMatrix.fromArray(e.projectionMatrix);
                    const r = Rl.fromArray(n.getViewMatrix(e));
                    this.camera.matrix.getInverse(r), this.camera.updateMatrixWorld(!0), this.renderer.render(this.scene, this.camera)
                }
        }
    }
    var Dl = function() {
        var e, t = new sa(90, 1, .1, 10),
            i = new Ma,
            n = new Ln(new sn(1, 1, 1), ((e = new Sn({
                uniforms: {
                    equirectangularMap: {
                        value: null
                    }
                },
                vertexShader: "varying vec3 localPosition;\n        \n        void main() {\n          localPosition = position;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }",
                fragmentShader: "#include <common>\n        varying vec3 localPosition;\n        uniform sampler2D equirectangularMap;\n        \n        vec2 EquirectangularSampleUV(vec3 v) {\n          vec2 uv = vec2(atan(v.z, v.x), asin(v.y));\n          uv *= vec2(0.1591, 0.3183); // inverse atan\n          uv += 0.5;\n          return uv;\n        }\n        \n        void main() {\n          vec2 uv = EquirectangularSampleUV(normalize(localPosition));\n          gl_FragColor = texture2D(equirectangularMap, uv);\n        }",
                blending: q
            })).type = "EquirectangularToCubeGenerator", e));
        n.material.side = k, i.add(n);
        var r = function(e, t) {
            this.sourceTexture = e, this.resolution = t.resolution || 512, this.views = [{
                t: [1, 0, 0],
                u: [0, -1, 0]
            }, {
                t: [-1, 0, 0],
                u: [0, -1, 0]
            }, {
                t: [0, 1, 0],
                u: [0, 0, 1]
            }, {
                t: [0, -1, 0],
                u: [0, 0, -1]
            }, {
                t: [0, 0, 1],
                u: [0, -1, 0]
            }, {
                t: [0, 0, -1],
                u: [0, -1, 0]
            }];
            var i = {
                format: t.format || this.sourceTexture.format,
                magFilter: this.sourceTexture.magFilter,
                minFilter: this.sourceTexture.minFilter,
                type: t.type || this.sourceTexture.type,
                generateMipmaps: this.sourceTexture.generateMipmaps,
                anisotropy: this.sourceTexture.anisotropy,
                encoding: this.sourceTexture.encoding
            };
            this.renderTarget = new fi(this.resolution, this.resolution, i)
        };
        return r.prototype = {
            constructor: r,
            update: function(e) {
                n.material.uniforms.equirectangularMap.value = this.sourceTexture;
                for (var r = 0; r < 6; r++) {
                    this.renderTarget.activeCubeFace = r;
                    var a = this.views[r];
                    t.position.set(0, 0, 0), t.up.set(a.u[0], a.u[1], a.u[2]), t.lookAt(a.t[0], a.t[1], a.t[2]), e.render(i, t, this.renderTarget, !0)
                }
                return this.renderTarget.texture
            },
            dispose: function() {
                this.renderTarget.dispose()
            }
        }, r
    }();
    const zl = function() {
        var e = zl.SkyShader,
            t = new Sn({
                fragmentShader: e.fragmentShader,
                vertexShader: e.vertexShader,
                uniforms: Ti.clone(e.uniforms),
                side: k
            });
        Ln.call(this, new sn(1, 1, 1), t)
    };
    zl.prototype = Object.create(Ln.prototype), zl.SkyShader = {
        uniforms: {
            luminance: {
                value: 1
            },
            turbidity: {
                value: 2
            },
            rayleigh: {
                value: 1
            },
            mieCoefficient: {
                value: .005
            },
            mieDirectionalG: {
                value: .8
            },
            sunPosition: {
                value: new ii
            }
        },
        vertexShader: ["uniform vec3 sunPosition;", "uniform float rayleigh;", "uniform float turbidity;", "uniform float mieCoefficient;", "varying vec3 vWorldPosition;", "varying vec3 vSunDirection;", "varying float vSunfade;", "varying vec3 vBetaR;", "varying vec3 vBetaM;", "varying float vSunE;", "const vec3 up = vec3( 0.0, 1.0, 0.0 );", "const float e = 2.71828182845904523536028747135266249775724709369995957;", "const float pi = 3.141592653589793238462643383279502884197169;", "const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );", "const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );", "const float v = 4.0;", "const vec3 K = vec3( 0.686, 0.678, 0.666 );", "const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );", "const float cutoffAngle = 1.6110731556870734;", "const float steepness = 1.5;", "const float EE = 1000.0;", "float sunIntensity( float zenithAngleCos ) {", "\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );", "\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );", "}", "vec3 totalMie( float T ) {", "\tfloat c = ( 0.2 * T ) * 10E-18;", "\treturn 0.434 * c * MieConst;", "}", "void main() {", "\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "\tvWorldPosition = worldPosition.xyz;", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "\tgl_Position.z = gl_Position.w;", "\tvSunDirection = normalize( sunPosition );", "\tvSunE = sunIntensity( dot( vSunDirection, up ) );", "\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );", "\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );", "\tvBetaR = totalRayleigh * rayleighCoefficient;", "\tvBetaM = totalMie( turbidity ) * mieCoefficient;", "}"].join("\n"),
        fragmentShader: ["varying vec3 vWorldPosition;", "varying vec3 vSunDirection;", "varying float vSunfade;", "varying vec3 vBetaR;", "varying vec3 vBetaM;", "varying float vSunE;", "uniform float luminance;", "uniform float mieDirectionalG;", "const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );", "const float pi = 3.141592653589793238462643383279502884197169;", "const float n = 1.0003;", "const float N = 2.545E25;", "const float rayleighZenithLength = 8.4E3;", "const float mieZenithLength = 1.25E3;", "const vec3 up = vec3( 0.0, 1.0, 0.0 );", "const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;", "const float THREE_OVER_SIXTEENPI = 0.05968310365946075;", "const float ONE_OVER_FOURPI = 0.07957747154594767;", "float rayleighPhase( float cosTheta ) {", "\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );", "}", "float hgPhase( float cosTheta, float g ) {", "\tfloat g2 = pow( g, 2.0 );", "\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );", "\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );", "}", "const float A = 0.15;", "const float B = 0.50;", "const float C = 0.10;", "const float D = 0.20;", "const float E = 0.02;", "const float F = 0.30;", "const float whiteScale = 1.0748724675633854;", "vec3 Uncharted2Tonemap( vec3 x ) {", "\treturn ( ( x * ( A * x + C * B ) + D * E ) / ( x * ( A * x + B ) + D * F ) ) - E / F;", "}", "void main() {", "\tfloat zenithAngle = acos( max( 0.0, dot( up, normalize( vWorldPosition - cameraPos ) ) ) );", "\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );", "\tfloat sR = rayleighZenithLength * inverse;", "\tfloat sM = mieZenithLength * inverse;", "\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );", "\tfloat cosTheta = dot( normalize( vWorldPosition - cameraPos ), vSunDirection );", "\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );", "\tvec3 betaRTheta = vBetaR * rPhase;", "\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );", "\tvec3 betaMTheta = vBetaM * mPhase;", "\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );", "\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );", "\tvec3 direction = normalize( vWorldPosition - cameraPos );", "\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]", "\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]", "\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );", "\tvec3 L0 = vec3( 0.1 ) * Fex;", "\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );", "\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;", "\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );", "\tvec3 curr = Uncharted2Tonemap( ( log2( 2.0 / pow( luminance, 4.0 ) ) ) * texColor );", "\tvec3 color = curr * whiteScale;", "\tvec3 retColor = pow( color, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );", "\tgl_FragColor = vec4( retColor, 1.0 );", "}"].join("\n")
    };
    const Nl = 1e4;
    class Ul extends y {
        constructor(e) {
            super(), this.renderer = e, this.scene = new Ma;
            const t = this.renderer.getContext();
            this.maxMapSize = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE);
            const i = Math.PI * (.45 - .5),
                n = 2 * Math.PI * -.495,
                r = (new ii).set(400 * Math.cos(n), 400 * Math.sin(n) * Math.sin(i), 400 * Math.sin(n) * Math.cos(i));
            this.sky = new zl, this.sky.scale.multiplyScalar(Nl), this.sky.material.uniforms.luminance.value = .1, this.sky.material.uniforms.turbidity.value = 1, this.sky.material.uniforms.rayleigh.value = .2, this.sky.material.uniforms.mieCoefficient.value = .056, this.sky.material.uniforms.mieDirectionalG.value = .8, this.sky.material.uniforms.sunPosition.value = r, this.scene.add(this.sky), this.camera = new Wc(1, 3 * Nl, this.maxMapSize)
        }
        generate(e) {
            return e = Math.min(e, this.maxMapSize), this.camera.renderTarget.setSize(e, e), this.camera.clear(this.renderer), this.camera.update(this.renderer, this.scene), this.camera.renderTarget.texture
        }
    }
    Ls.enabled = !0;
    const Bl = new zs,
        Fl = Symbol("cubeGenerator"),
        Gl = {
            cubemapSize: 1024,
            synthesizedEnvmapSize: 512
        },
        kl = {
            url: null,
            type: null
        };
    class Hl extends y {
        constructor(e, t = {}) {
            super(), this.config = Object.assign({}, Gl, t), this.renderer = e, this.envMapGenerator = new Ul(this.renderer), this[Fl] = null
        }
        equirectangularToCubemap(e) {
            const t = new Dl(e, {
                resolution: this.config.cubemapSize
            });
            t.update(this.renderer);
            const i = t.renderTarget.texture;
            return i.dispose = (() => {
                t.renderTarget.dispose()
            }), i.userData = Object.assign({}, kl, {
                url: e.userData ? e.userData.url : null,
                type: "EnvironmentMap"
            }), this[Fl] = t, i
        }
        async load(e) {
            const t = await new Promise((t, i) => Bl.load(e, t, void 0, i));
            return t.userData = Object.assign({}, kl, {
                url: e,
                type: "Equirectangular"
            }), t.encoding = jt, t
        }
        generateDefaultEnvMap(e) {
            const t = e || this.config.synthesizedEnvmapSize,
                i = this.envMapGenerator.generate(t);
            return i.userData = Object.assign({}, kl, {
                type: "EnvironmentMap"
            }), i
        }
        async toCubemapAndEquirect(e) {
            let t, i;
            try {
                return {
                    equirect: t = await this.load(e),
                    cubemap: i = await this.equirectangularToCubemap(t)
                }
            } catch (e) {
                return t && t.dispose(), i && i.dispose(), null
            }
        }
        dispose() {
            this.envMapGenerator.camera.renderTarget.dispose(), this.envMapGenerator = null, this[Fl] && (this[Fl].dispose(), this[Fl] = null)
        }
    }
    const jl = (e, t) => e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
        Vl = e => {
            const t = {
                EXT_shader_texture_lod: "\n      #extension GL_EXT_shader_texture_lod : enable\n      precision mediump float;\n      uniform sampler2D tex;\n      void main() {\n        gl_FragColor = texture2DLodEXT(tex, vec2(0.0, 0.0), 0.0);\n      }"
            };
            const i = e.getExtension;
            e.getExtension = (n => {
                let r;
                return t[n] ? (r = i.call(e, n)) && ! function(e, i) {
                    const n = e.createShader(e.FRAGMENT_SHADER);
                    e.shaderSource(n, t[i]), e.compileShader(n);
                    const r = e.getShaderParameter(n, e.COMPILE_STATUS);
                    return e.deleteShader(n), r
                }(e, n) && (r = null) : r = i.call(e, n), r
            })
        },
        Wl = 2.2,
        ql = Symbol("arRenderer");
    const Xl = new class extends y {
            constructor() {
                super();
                const e = {
                    antialias: !0
                };
                Object.assign(e, {
                    alpha: !0,
                    preserveDrawingBuffer: !0
                }), this.canvas = document.createElement("canvas"), this.context = jl(this.canvas, e), Vl(this.context), this.renderer = new ba({
                    canvas: this.canvas,
                    context: this.context
                }), this.renderer.autoClear = !0, this.renderer.gammaOutput = !0, this.renderer.gammaFactor = Wl, this.renderer.setPixelRatio(Zh()), this[ql] = Il.fromInlineRenderer(this), this.textureUtils = new Hl(this.renderer), this.scenes = new Set, this.scenesRendered = 0, this.setRendererSize(1, 1), this.lastTick = performance.now()
            }
            setRendererSize(e, t) {
                this.renderer.setSize(e, t, !1), this.width = e, this.height = t
            }
            registerScene(e) {
                this.scenes.add(e), this.scenes.size > 0 && this.renderer.setAnimationLoop(e => this.render(e))
            }
            unregisterScene(e) {
                this.scenes.delete(e), 0 === this.scenes.size && this.renderer.setAnimationLoop(null)
            }
            async supportsPresentation() {
                return this[ql].supportsPresentation()
            }
            get presentedScene() {
                return this[ql].presentedScene
            }
            async present(e) {
                try {
                    return await this[ql].present(e)
                } catch (e) {
                    throw this[ql].stopPresenting(), e
                } finally {
                    this.width = this.height = 0
                }
            }
            stopPresenting() {
                return this[ql].stopPresenting()
            }
            get isPresenting() {
                return null != this[ql] && this[ql].isPresenting
            }
            render(e) {
                if (this.isPresenting) return;
                this.scenesRendered = 0;
                const t = e - this.lastTick;
                for (let i of this.scenes) {
                    const {
                        element: n,
                        width: r,
                        height: a,
                        context: o
                    } = i;
                    if (n[ou](e, t), !i.isVisible || !i.isDirty || i.paused) continue;
                    const s = i.getCamera();
                    if (this.renderer.clearDepth(), r > this.width || a > this.height) {
                        const e = Math.max(r, this.width),
                            t = Math.max(a, this.height);
                        this.setRendererSize(e, t, !1)
                    }
                    this.renderer.setViewport(0, 0, r, a), this.renderer.render(i, s);
                    const c = Zh(),
                        h = r * c,
                        l = a * c;
                    o.clearRect(0, 0, h, l), o.drawImage(this.renderer.domElement, 0, 0, h, l, 0, 0, h, l), i.isDirty = !1, this.scenesRendered++
                }
                this.lastTick = e
            }
            dispose() {
                super.dispose(), this.textureUtils.dispose(), this.textureUtils = null
            }
        },
        Yl = 50,
        Zl = Symbol("updateSize"),
        Jl = Symbol("loaded"),
        Kl = Symbol("template"),
        Ql = Symbol("fallbackResizeHandler"),
        $l = Symbol("defaultAriaLabel"),
        eu = Symbol("updateSource"),
        tu = Symbol("markLoaded"),
        iu = Symbol("container"),
        nu = Symbol("canvas"),
        ru = Symbol("scene"),
        au = Symbol("needsRender"),
        ou = Symbol("tick"),
        su = Symbol("onModelLoad"),
        cu = Symbol("onResize"),
        hu = Symbol("renderer");
    const lu = Symbol("enterARElement"),
        uu = Symbol("enterARWithQuickLook"),
        pu = Symbol("enterARWithWebXR"),
        du = Math.PI / 32,
        fu = function(e, t) {
            var i, n, r, a, o;
            this.object = e, this.domElement = void 0 !== t ? t : document, this.enabled = !0, this.target = new ii, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                BOTTOM: 40
            }, this.mouseButtons = {
                LEFT: O,
                MIDDLE: I,
                RIGHT: D
            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
                return f.phi
            }, this.getAzimuthalAngle = function() {
                return f.theta
            }, this.saveState = function() {
                s.target0.copy(s.target), s.position0.copy(s.object.position), s.zoom0 = s.object.zoom
            }, this.reset = function() {
                s.target.copy(s.target0), s.object.position.copy(s.position0), s.object.zoom = s.zoom0, s.object.updateProjectionMatrix(), s.dispatchEvent(c), s.update(), p = u.NONE
            }, this.getSphericalDelta = function() {
                return m
            }, this.update = (i = new ii, n = (new ti).setFromUnitVectors(e.up, new ii(0, 1, 0)), r = n.clone().inverse(), a = new ii, o = new ti, function() {
                var e = s.object.position;
                return i.copy(e).sub(s.target), i.applyQuaternion(n), f.setFromVector3(i), s.autoRotate && p === u.NONE && P(2 * Math.PI / 60 / 60 * s.autoRotateSpeed), f.theta += m.theta, f.phi += m.phi, f.theta = Math.max(s.minAzimuthAngle, Math.min(s.maxAzimuthAngle, f.theta)), f.phi = Math.max(s.minPolarAngle, Math.min(s.maxPolarAngle, f.phi)), f.makeSafe(), f.radius *= g, f.radius = Math.max(s.minDistance, Math.min(s.maxDistance, f.radius)), s.target.add(v), i.setFromSpherical(f), i.applyQuaternion(r), e.copy(s.target).add(i), s.object.lookAt(s.target), !0 === s.enableDamping ? (m.theta *= 1 - s.dampingFactor, m.phi *= 1 - s.dampingFactor, v.multiplyScalar(1 - s.dampingFactor)) : (m.set(0, 0, 0), v.set(0, 0, 0)), g = 1, !!(y || a.distanceToSquared(s.object.position) > d || 8 * (1 - o.dot(s.object.quaternion)) > d) && (s.dispatchEvent(c), a.copy(s.object.position), o.copy(s.object.quaternion), y = !1, !0)
            }), this.dispose = function() {
                s.domElement.removeEventListener("contextmenu", Z, !1), s.domElement.removeEventListener("mousedown", k, !1), s.domElement.removeEventListener("wheel", V, !1), s.domElement.removeEventListener("touchstart", q, !1), s.domElement.removeEventListener("touchend", Y, !1), s.domElement.removeEventListener("touchmove", X, !1), document.removeEventListener("mousemove", H, !1), document.removeEventListener("mouseup", j, !1), window.removeEventListener("keydown", W, !1)
            };
            var s = this,
                c = {
                    type: "change"
                },
                h = {
                    type: "start"
                },
                l = {
                    type: "end"
                },
                u = {
                    NONE: -1,
                    ROTATE: 0,
                    DOLLY: 1,
                    PAN: 2,
                    TOUCH_ROTATE: 3,
                    TOUCH_DOLLY_PAN: 4
                },
                p = u.NONE,
                d = 1e-6,
                f = new Sh,
                m = new Sh,
                g = 1,
                v = new ii,
                y = !1,
                x = new $t,
                b = new $t,
                w = new $t,
                _ = new $t,
                M = new $t,
                S = new $t,
                E = new $t,
                T = new $t,
                A = new $t;

            function L() {
                return Math.pow(.95, s.zoomSpeed)
            }

            function P(e) {
                m.theta -= e
            }

            function R(e) {
                m.phi -= e
            }
            var C, z = (C = new ii, function(e, t) {
                    C.setFromMatrixColumn(t, 0), C.multiplyScalar(-e), v.add(C)
                }),
                N = function() {
                    var e = new ii;
                    return function(t, i) {
                        !0 === s.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e.setFromMatrixColumn(i, 0), e.crossVectors(s.object.up, e)), e.multiplyScalar(t), v.add(e)
                    }
                }(),
                U = function() {
                    var e = new ii;
                    return function(t, i) {
                        var n = s.domElement === document ? s.domElement.body : s.domElement;
                        if (s.object.isPerspectiveCamera) {
                            var r = s.object.position;
                            e.copy(r).sub(s.target);
                            var a = e.length();
                            a *= Math.tan(s.object.fov / 2 * Math.PI / 180), z(2 * t * a / n.clientHeight, s.object.matrix), N(2 * i * a / n.clientHeight, s.object.matrix)
                        } else s.object.isOrthographicCamera ? (z(t * (s.object.right - s.object.left) / s.object.zoom / n.clientWidth, s.object.matrix), N(i * (s.object.top - s.object.bottom) / s.object.zoom / n.clientHeight, s.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), s.enablePan = !1)
                    }
                }();

            function B(e) {
                s.object.isPerspectiveCamera ? g /= e : s.object.isOrthographicCamera ? (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom * e)), s.object.updateProjectionMatrix(), y = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = !1)
            }

            function F(e) {
                s.object.isPerspectiveCamera ? g *= e : s.object.isOrthographicCamera ? (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / e)), s.object.updateProjectionMatrix(), y = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = !1)
            }

            function G(e) {
                _.set(e.clientX, e.clientY)
            }

            function k(e) {
                if (!1 !== s.enabled) {
                    switch (e.preventDefault(), e.button) {
                        case s.mouseButtons.LEFT:
                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                if (!1 === s.enablePan) return;
                                G(e), p = u.PAN
                            } else {
                                if (!1 === s.enableRotate) return;
                                ! function(e) {
                                    x.set(e.clientX, e.clientY)
                                }(e), p = u.ROTATE
                            }
                            break;
                        case s.mouseButtons.MIDDLE:
                            if (!1 === s.enableZoom) return;
                            ! function(e) {
                                E.set(e.clientX, e.clientY)
                            }(e), p = u.DOLLY;
                            break;
                        case s.mouseButtons.RIGHT:
                            if (!1 === s.enablePan) return;
                            G(e), p = u.PAN
                    }
                    p !== u.NONE && (document.addEventListener("mousemove", H, !1), document.addEventListener("mouseup", j, !1), s.dispatchEvent(h))
                }
            }

            function H(e) {
                if (!1 !== s.enabled) switch (e.preventDefault(), p) {
                    case u.ROTATE:
                        if (!1 === s.enableRotate) return;
                        ! function(e) {
                            b.set(e.clientX, e.clientY), w.subVectors(b, x).multiplyScalar(s.rotateSpeed);
                            var t = s.domElement === document ? s.domElement.body : s.domElement;
                            P(2 * Math.PI * w.x / t.clientHeight), R(2 * Math.PI * w.y / t.clientHeight), x.copy(b), s.update()
                        }(e);
                        break;
                    case u.DOLLY:
                        if (!1 === s.enableZoom) return;
                        ! function(e) {
                            T.set(e.clientX, e.clientY), A.subVectors(T, E), A.y > 0 ? B(L()) : A.y < 0 && F(L()), E.copy(T), s.update()
                        }(e);
                        break;
                    case u.PAN:
                        if (!1 === s.enablePan) return;
                        ! function(e) {
                            M.set(e.clientX, e.clientY), S.subVectors(M, _).multiplyScalar(s.panSpeed), U(S.x, S.y), _.copy(M), s.update()
                        }(e)
                }
            }

            function j(e) {
                !1 !== s.enabled && (document.removeEventListener("mousemove", H, !1), document.removeEventListener("mouseup", j, !1), s.dispatchEvent(l), p = u.NONE)
            }

            function V(e) {
                !1 === s.enabled || !1 === s.enableZoom || p !== u.NONE && p !== u.ROTATE || (e.preventDefault(), e.stopPropagation(), s.dispatchEvent(h), function(e) {
                    e.deltaY < 0 ? F(L()) : e.deltaY > 0 && B(L()), s.update()
                }(e), s.dispatchEvent(l))
            }

            function W(e) {
                !1 !== s.enabled && !1 !== s.enableKeys && !1 !== s.enablePan && function(e) {
                    switch (e.keyCode) {
                        case s.keys.UP:
                            U(0, s.keyPanSpeed), s.update();
                            break;
                        case s.keys.BOTTOM:
                            U(0, -s.keyPanSpeed), s.update();
                            break;
                        case s.keys.LEFT:
                            U(s.keyPanSpeed, 0), s.update();
                            break;
                        case s.keys.RIGHT:
                            U(-s.keyPanSpeed, 0), s.update()
                    }
                }(e)
            }

            function q(e) {
                if (!1 !== s.enabled) {
                    switch (e.preventDefault(), e.touches.length) {
                        case 1:
                            if (!1 === s.enableRotate) return;
                            ! function(e) {
                                x.set(e.touches[0].pageX, e.touches[0].pageY)
                            }(e), p = u.TOUCH_ROTATE;
                            break;
                        case 2:
                            if (!1 === s.enableZoom && !1 === s.enablePan) return;
                            ! function(e) {
                                if (s.enableZoom) {
                                    var t = e.touches[0].pageX - e.touches[1].pageX,
                                        i = e.touches[0].pageY - e.touches[1].pageY,
                                        n = Math.sqrt(t * t + i * i);
                                    E.set(0, n)
                                }
                                if (s.enablePan) {
                                    var r = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                        a = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                    _.set(r, a)
                                }
                            }(e), p = u.TOUCH_DOLLY_PAN;
                            break;
                        default:
                            p = u.NONE
                    }
                    p !== u.NONE && s.dispatchEvent(h)
                }
            }

            function X(e) {
                if (!1 !== s.enabled) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
                    case 1:
                        if (!1 === s.enableRotate) return;
                        if (p !== u.TOUCH_ROTATE) return;
                        ! function(e) {
                            b.set(e.touches[0].pageX, e.touches[0].pageY), w.subVectors(b, x).multiplyScalar(s.rotateSpeed);
                            var t = s.domElement === document ? s.domElement.body : s.domElement;
                            P(2 * Math.PI * w.x / t.clientHeight), R(2 * Math.PI * w.y / t.clientHeight), x.copy(b), s.update()
                        }(e);
                        break;
                    case 2:
                        if (!1 === s.enableZoom && !1 === s.enablePan) return;
                        if (p !== u.TOUCH_DOLLY_PAN) return;
                        ! function(e) {
                            if (s.enableZoom) {
                                var t = e.touches[0].pageX - e.touches[1].pageX,
                                    i = e.touches[0].pageY - e.touches[1].pageY,
                                    n = Math.sqrt(t * t + i * i);
                                T.set(0, n), A.set(0, Math.pow(T.y / E.y, s.zoomSpeed)), B(A.y), E.copy(T)
                            }
                            if (s.enablePan) {
                                var r = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                    a = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                M.set(r, a), S.subVectors(M, _).multiplyScalar(s.panSpeed), U(S.x, S.y), _.copy(M)
                            }
                            s.update()
                        }(e);
                        break;
                    default:
                        p = u.NONE
                }
            }

            function Y(e) {
                !1 !== s.enabled && (s.dispatchEvent(l), p = u.NONE)
            }

            function Z(e) {
                !1 !== s.enabled && e.preventDefault()
            }
            s.domElement.addEventListener("contextmenu", Z, !1), s.domElement.addEventListener("mousedown", k, !1), s.domElement.addEventListener("wheel", V, !1), s.domElement.addEventListener("touchstart", q, !1), s.domElement.addEventListener("touchend", Y, !1), s.domElement.addEventListener("touchmove", X, !1), window.addEventListener("keydown", W, !1), this.update()
        };
    fu.prototype = Object.create(y.prototype), fu.prototype.constructor = fu, Object.defineProperties(fu.prototype, {
        center: {
            get: function() {
                return console.warn("THREE.OrbitControls: .center has been renamed to .target"), this.target
            }
        },
        noZoom: {
            get: function() {
                return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
            },
            set: function(e) {
                console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
            }
        },
        noRotate: {
            get: function() {
                return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
            },
            set: function(e) {
                console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
            }
        },
        noPan: {
            get: function() {
                return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
            },
            set: function(e) {
                console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
            }
        },
        noKeys: {
            get: function() {
                return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
            },
            set: function(e) {
                console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
            }
        },
        staticMoving: {
            get: function() {
                return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
            },
            set: function(e) {
                console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !e
            }
        },
        dynamicDampingFactor: {
            get: function() {
                return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
            },
            set: function(e) {
                console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = e
            }
        }
    });
    const mu = Symbol("onKeyDown"),
        gu = Math.PI / 10;
    class vu extends fu {
        constructor(...e) {
            super(...e), this[mu] = (e => this.onKeyDown(e)), this.domElement.addEventListener("keydown", this[mu]), Object.assign(this.keys, {
                PAGE_UP: 33,
                PAGE_DOWN: 34
            })
        }
        dispose() {
            super.dispose(), this.domElement.removeEventListener("keydown", this[mu])
        }
        onKeyDown(e) {
            let t = !1;
            switch (e.keyCode) {
                case this.keys.PAGE_UP:
                    this.zoomIn(), t = !0;
                    break;
                case this.keys.PAGE_DOWN:
                    this.zoomOut(), t = !0;
                    break;
                case this.keys.UP:
                    this.orbitUp(gu), t = !0;
                    break;
                case this.keys.BOTTOM:
                    this.orbitDown(gu), t = !0;
                    break;
                case this.keys.LEFT:
                    this.orbitLeft(gu), t = !0;
                    break;
                case this.keys.RIGHT:
                    this.orbitRight(gu), t = !0
            }
            t && (e.preventDefault(), this.update())
        }
        zoomIn() {
            const e = new CustomEvent("wheel");
            e.deltaY = -1, this.domElement.dispatchEvent(e)
        }
        zoomOut() {
            const e = new CustomEvent("wheel");
            e.deltaY = 1, this.domElement.dispatchEvent(e)
        }
        orbitUp(e) {
            this.getSphericalDelta().phi += e
        }
        orbitDown(e) {
            this.getSphericalDelta().phi -= e
        }
        orbitLeft(e) {
            this.getSphericalDelta().theta += e
        }
        orbitRight(e) {
            this.getSphericalDelta().theta -= e
        }
    }
    const yu = Symbol("controls"),
        xu = Symbol("updateOrbitCamera"),
        bu = Symbol("onControlsChange"),
        wu = Symbol("orbitCamera"),
        _u = Symbol("defaultCamera"),
        Mu = Symbol("currentCubemap"),
        Su = Symbol("setEnvironmentImage"),
        Eu = Symbol("setEnvironmentColor"),
        Tu = Symbol("hasBackgroundImage"),
        Au = Symbol("hasBackgroundColor"),
        Lu = Symbol("deallocateTextures"),
        Pu = Symbol("posterElement"),
        Ru = Symbol("applyPreloadStrategy"),
        Cu = Symbol("revealDeferred"),
        Ou = Symbol("dismissPoster"),
        Iu = Symbol("shouldHidePoster"),
        Du = Symbol("preloaded"),
        zu = Symbol("preloadPromise"),
        Nu = new $h,
        Uu = Symbol("showMlModel"),
        Bu = Symbol("hideMlModel"),
        Fu = Symbol("isHeliosBrowser"),
        Gu = Symbol("mlModel"),
        ku = [e => (class extends e {
            static get properties() {
                return Object.assign({}, super.properties, {
                    poster: {
                        type: Wh
                    },
                    preload: {
                        type: Boolean
                    },
                    revealWhenLoaded: {
                        type: Boolean,
                        attribute: "reveal-when-loaded"
                    }
                })
            }
            get loaded() {
                return super.loaded || this[Du]
            }
            constructor() {
                super(), this[Du] = !1, this[zu] = null, this[Ou] = !1, this[Pu] = this.shadowRoot.querySelector(".poster"), this.addEventListener("click", () => {
                    this.dismissPoster()
                })
            }
            dismissPoster() {
                this[Ou] = !0, this.requestUpdate()
            }
            showPoster() {
                this[Ou] = !1, this.requestUpdate()
            }
            get[Iu]() {
                return !this.poster || this.loaded && this[Ou]
            }
            get[Cu]() {
                return !!this.preload && !this[Iu]
            }
            update(e) {
                this.loaded && this.revealWhenLoaded && this.dismissPoster(), super.update(e), this[Iu] ? this[Pu].classList.remove("show") : ((this.preload || this[Ou]) && this.src && this[Ru](), this.poster && (this[Pu].style.backgroundImage = `url("${this.poster}")`, this[Pu].classList.add("show")))
            }
            async [Ru]() {
                if (null != this[zu]) return this[zu];
                this.src && (this[zu] = Nu.load(this.src), await this[zu], this[Du] = !0, this.dispatchEvent(new CustomEvent("preload")), this.requestUpdate())
            } [eu]() {
                this[Iu] && super[eu]()
            }
        }), e => (class extends e {
            static get properties() {
                return Object.assign({}, super.properties, {
                    unstableWebxr: {
                        type: Boolean,
                        attribute: "unstable-webxr"
                    },
                    iosSrc: {
                        type: Wh,
                        attribute: "ios-src"
                    }
                })
            }
            get canActivateAR() {
                return "none" !== window.getComputedStyle(this[lu]).display
            }
            constructor() {
                super(), this[lu] = this.shadowRoot.querySelector(".enter-ar"), this[lu].addEventListener("click", e => {
                    e.preventDefault(), this.enterAR()
                });
                const e = this[hu],
                    t = this[ru];
                document.addEventListener("fullscreenchange", () => {
                    if (document.fullscreenElement !== this && e.presentedScene === t) try {
                        e.stopPresenting()
                    } catch (e) {
                        console.warn("Unexpected error while stopping AR presentation"), console.error(e)
                    }
                })
            }
            enterAR() {
                a ? this[uu]() : r && this[pu]()
            }
            async [uu]() {
                (e => {
                    const t = document.createElement("a");
                    t.setAttribute("rel", "ar"), t.setAttribute("href", e), t.appendChild(document.createElement("img")), t.click()
                })(this.iosSrc)
            }
            async [pu]() {
                const e = this[hu];
                console.log("Attempting to enter fullscreen and present in AR...");
                try {
                    const t = this.requestFullscreen();
                    try {
                        const i = await e.present(this[ru]);
                        this.shadowRoot.appendChild(i), await t
                    } catch (e) {
                        console.warn("Error while trying to present to AR"), console.error(e), await t, document.fullscreenElement === this && (console.warn("Exiting fullscreen under dire circumstances"), document.exitFullscreen())
                    }
                } catch (e) {
                    console.error(e), console.warn("AR will not activate without fullscreen permission")
                }
            }
            async update(e) {
                if (super.update(e), !e.has("unstableWebxr") && !e.has("iosSrc")) return;
                const t = this.unstableWebxr && r,
                    i = a && o && null != this.iosSrc,
                    n = this[hu];
                i || t && await n.supportsPresentation() ? this[lu].style.display = "block" : this[lu].style.display = "none"
            }
        }), e => (class extends e {
            static get properties() {
                return Object.assign({}, super.properties, {
                    autoRotate: {
                        type: Boolean,
                        attribute: "auto-rotate"
                    }
                })
            }
            update(e) {
                super.update(e), e.has("autoRotate") && this.autoRotate && (this[ru].pivot.rotation.set(0, 0, 0), this[au]())
            } [ou](e, t) {
                super[ou](e, t), this.autoRotate && (this[ru].pivot.rotation.y += du * t * .001, this[au]())
            }
        }), e => (class extends e {
            static get properties() {
                return Object.assign({}, super.properties, {
                    backgroundImage: {
                        type: String,
                        attribute: "background-image"
                    },
                    backgroundColor: {
                        type: String,
                        attribute: "background-color"
                    }
                })
            }
            get[Tu]() {
                return this.backgroundImage && "null" !== this.backgroundImage
            }
            get[Au]() {
                return this.backgroundColor && "null" !== this.backgroundColor
            }
            connectedCallback() {
                super.connectedCallback()
            }
            async update(e) {
                super.update(e), this[Tu] || this[Au] ? (e.has("backgroundImage") || e.has("backgroundColor")) && (this[Tu] ? this[Su](this.backgroundImage) : this[Au] && this[Eu](this.backgroundColor)) : this[Eu]("#ffffff")
            } [ou](e, t) {
                super[ou](e, t);
                const i = this[ru].getCamera();
                this[ru].skysphere.position.copy(i.position)
            } [su](e) {
                super[su](e), this[Mu] && (this[ru].model.applyEnvironmentMap(this[Mu]), this[au]())
            }
            async [Su](e) {
                const t = this[hu].textureUtils,
                    i = await t.toCubemapAndEquirect(e);
                if (e !== this.backgroundImage) return;
                if (this[Lu](), !i) return void this[ru].model.applyEnvironmentMap(null);
                const {
                    cubemap: n,
                    equirect: r
                } = i;
                this[ru].skysphere.material.color = new Li(16777215), this[ru].skysphere.material.map = r, this[ru].skysphere.material.needsUpdate = !0, this[Mu] = n, this[ru].model.applyEnvironmentMap(n), this[au]()
            } [Eu](e) {
                const t = this[hu].textureUtils;
                this[Lu](), this[ru].skysphere.material.color = new Li(e), this[ru].skysphere.material.color.convertGammaToLinear(2.2), this[ru].skysphere.material.map = null, this[ru].skysphere.material.needsUpdate = !0;
                const i = t.generateDefaultEnvMap();
                this[Mu] = i, this[ru].model.applyEnvironmentMap(this[Mu]), "transparent" === e && (this[ru].skysphere.visible = !1), this[au]()
            } [Lu]() {
                this[ru].skysphere.material.map && (this[ru].skysphere.material.map.dispose(), this[ru].skysphere.material.map = null), this[Mu] && (this[Mu].dispose(), this[Mu] = null)
            }
        }), e => (class extends e {
            static get properties() {
                return Object.assign({}, super.properties, {
                    controls: {
                        type: Boolean
                    }
                })
            }
            constructor() {
                super(), this[bu] = this[bu].bind(this), this[_u] = this[ru].getCamera(), this[wu] = this[ru].camera.clone(), this[wu].near = .01, this[wu].far = 1e3, this[wu].updateProjectionMatrix(), this[yu] = null
            }
            update(e) {
                super.update(e), e.has("controls") && (this.controls ? (this[ru].setCamera(this[wu]), this[yu] = new vu(this[wu], this[ru].canvas), this[yu].target.set(0, hl / 2, 0), this[yu].enabled = !0, this[yu].enablePan = !1, this[yu].enableKeys = !1, this[yu].addEventListener("change", this[bu]), this[xu]()) : (this[ru].setCamera(this[_u]), this[yu] && (this[yu].dispose(), this[yu].removeEventListener("change", this[bu]), this[yu] = null)))
            } [xu]() {
                this[wu].position.copy(this[_u].position), this[wu].aspect = this[_u].aspect, this[wu].rotation.set(0, 0, 0), this[wu].updateProjectionMatrix(), this[yu] && (this[yu].maxDistance = this[wu].position.z)
            } [cu](e) {
                super[cu](e), this[xu]()
            } [su](e) {
                super[su](e), this[xu]()
            } [bu](e) {
                this[au]()
            }
        }), e => (class extends e {
            static get properties() {
                return Object.assign({}, super.properties, {
                    magicLeap: {
                        type: Boolean,
                        attribute: "magic-leap"
                    }
                })
            }
            constructor() {
                super(), this[Fu] = null != self.mlWorld, this[Gu] = null
            }
            update(e) {
                if (super.update(e), !this[Fu]) return;
                if (!e.has("magicLeap") && !e.has("src")) return;
                const t = this[ru];
                this.magicLeap ? (!!customElements.get("ml-model") || console.warn("<ml-model> is not registered. Is prismatic.js loaded?"), t.pause(), this[iu].setAttribute("style", "display: none;"), this[Uu](), e.has("src") && this.src && this.src !== this[Gu].getAttribute("src") && this[Gu].setAttribute("src", this.src)) : (this[Bu](), t.resume(), this[iu].removeAttribute("style"))
            } [Uu]() {
                null == this[Gu] && (this[Gu] = document.createElement("ml-model"), this[Gu].setAttribute("style", "display: block; top: 0; left: 0; width: 100%; height: 100%"), this[Gu].setAttribute("model-scale", "0.65 0.65 0.65"), this[Gu].setAttribute("scrollable", "true"), this[Gu].setAttribute("z-offset", "500px"), this[Gu].setAttribute("extractable", "true"), this[Gu].setAttribute("extracted-scale", "1"), this[Gu].setAttribute("environment-lighting", "color-intensity: 2;"), null != this.src && this[Gu].setAttribute("src", this.src)), this.shadowRoot.appendChild(this[Gu])
            } [Bu]() {
                null != this[Gu] && null != this[Gu].parentNode && this[Gu].parentNode.removeChild(this[Gu])
            }
        })].reduce((e, t) => t(e), class extends m {
            static get properties() {
                return {
                    alt: {
                        type: String
                    },
                    src: {
                        type: Wh
                    }
                }
            }
            static get is() {
                return "model-viewer"
            }
            static get template() {
                return this.hasOwnProperty(Kl) || (this[Kl] = v(this.is)), this[Kl]
            }
            get loaded() {
                return this[Jl]
            }
            get[hu]() {
                return Xl
            }
            constructor() {
                super(), window.ShadyCSS && window.ShadyCSS.styleElement(this);
                const {
                    shadowRoot: e
                } = this, t = this.constructor.template;
                e.appendChild(t.content.cloneNode(!0)), this[iu] = e.querySelector(".container"), this[nu] = e.querySelector("canvas"), this[$l] = this[nu].getAttribute("aria-label");
                const {
                    width: i,
                    height: r
                } = this.getBoundingClientRect();
                this[ru] = new dl({
                    canvas: this[nu],
                    element: this,
                    width: i,
                    height: r,
                    renderer: Xl
                }), this[Jl] = !1, this[ru].addEventListener("model-load", () => {
                    this[tu](), this[su](), this.dispatchEvent(new CustomEvent("load"))
                }), Promise.resolve().then(() => {
                    this[Zl](this.getBoundingClientRect(), !0)
                }), this[Ql] = Yh(() => {
                    const e = this.getBoundingClientRect();
                    this[Zl](e)
                }, Yl), this.resizeObserver = n ? new ResizeObserver(e => {
                    if (!Xl.isPresenting)
                        for (let t of e) t.target === this && this[Zl](t.contentRect)
                }) : null, this.intersectionObserver = new IntersectionObserver(e => {
                    for (let t of e) t.target === this && (this[ru].isVisible = t.isIntersecting)
                }, {
                    root: null,
                    rootMargin: "10px",
                    threshold: 0
                }), this.intersectionObserver.observe(this)
            }
            connectedCallback() {
                n ? this.resizeObserver.observe(this) : self.addEventListener("resize", this[Ql]), this[hu].registerScene(this[ru]), this[ru].isDirty = !0
            }
            disconnectedCallback() {
                n ? this.resizeObserver.unobserve(this) : self.removeEventListener("resize", this[Ql]), this[hu].unregisterScene(this[ru])
            }
            update(e) {
                if (this[eu](), e.has("alt")) {
                    const e = null == this.alt || "null" === this.alt ? this[$l] : this.alt;
                    this[nu].setAttribute("aria-label", e)
                }
            }
            createRenderRoot() {
                return this.attachShadow({
                    mode: "open",
                    delegatesFocus: !0
                })
            } [Zl]({
                width: e,
                height: t
            }, i) {
                const {
                    width: n,
                    height: r
                } = this[ru].getSize();
                e = parseInt(e, 10), t = parseInt(t, 10), (i || n !== e || r !== t) && (this[iu].style.width = `${e}px`, this[iu].style.height = `${t}px`, this[cu]({
                    width: e,
                    height: t
                }))
            } [ou](e, t) {} [tu]() {
                this[Jl] = !0, this.requestUpdate()
            } [au]() {
                this[ru].isDirty = !0
            } [su](e) {
                this[au]()
            } [cu](e) {
                this[ru].setSize(e.width, e.height), this[au]()
            }
            async [eu]() {
                const e = this.src;
                if (e) try {
                    this[nu].classList.add("show"), await this[ru].setModelSource(e)
                } catch (e) {
                    console.warn(e.message), this[nu].classList.remove("show"), this.dispatchEvent(new CustomEvent("error", {
                        detail: e
                    }))
                }
            }
        });
    customElements.define("model-viewer", ku)
})

var myVar = setInterval(function() { clock();}, 0);
function clock() { var d = new Date(); document.getElementById("clock").innerHTML = d.toLocaleTimeString();}