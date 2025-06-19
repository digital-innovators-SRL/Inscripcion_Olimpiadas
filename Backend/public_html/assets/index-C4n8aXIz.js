function jy(e, t) { for (var r = 0; r < t.length; r++) { const i = t[r]; if (typeof i != "string" && !Array.isArray(i)) { for (const l in i)
                if (l !== "default" && !(l in e)) { const o = Object.getOwnPropertyDescriptor(i, l);
                    o && Object.defineProperty(e, l, o.get ? o : { enumerable: !0, get: () => i[l] }) } } } return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })) }(function() { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
    new MutationObserver(l => { for (const o of l)
            if (o.type === "childList")
                for (const c of o.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c) }).observe(document, { childList: !0, subtree: !0 });

    function r(l) { const o = {}; return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o }

    function i(l) { if (l.ep) return;
        l.ep = !0; const o = r(l);
        fetch(l.href, o) } })();

function By(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }
var Bf = { exports: {} },
    Ms = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ax;

function ky() { if (Ax) return Ms;
    Ax = 1; var e = Symbol.for("react.transitional.element"),
        t = Symbol.for("react.fragment");

    function r(i, l, o) { var c = null; if (o !== void 0 && (c = "" + o), l.key !== void 0 && (c = "" + l.key), "key" in l) { o = {}; for (var f in l) f !== "key" && (o[f] = l[f]) } else o = l; return l = o.ref, { $$typeof: e, type: i, key: c, ref: l !== void 0 ? l : null, props: o } } return Ms.Fragment = t, Ms.jsx = r, Ms.jsxs = r, Ms }
var Ex;

function My() { return Ex || (Ex = 1, Bf.exports = ky()), Bf.exports }
var d = My(),
    kf = { exports: {} },
    Je = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wx;

function Ly() { if (wx) return Je;
    wx = 1; var e = Symbol.for("react.transitional.element"),
        t = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        o = Symbol.for("react.consumer"),
        c = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        x = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        g = Symbol.iterator;

    function v(j) { return j === null || typeof j != "object" ? null : (j = g && j[g] || j["@@iterator"], typeof j == "function" ? j : null) } var b = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
        A = Object.assign,
        E = {};

    function w(j, ce, k) { this.props = j, this.context = ce, this.refs = E, this.updater = k || b }
    w.prototype.isReactComponent = {}, w.prototype.setState = function(j, ce) { if (typeof j != "object" && typeof j != "function" && j != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, ce, "setState") }, w.prototype.forceUpdate = function(j) { this.updater.enqueueForceUpdate(this, j, "forceUpdate") };

    function S() {}
    S.prototype = w.prototype;

    function O(j, ce, k) { this.props = j, this.context = ce, this.refs = E, this.updater = k || b } var D = O.prototype = new S;
    D.constructor = O, A(D, w.prototype), D.isPureReactComponent = !0; var F = Array.isArray,
        K = { H: null, A: null, T: null, S: null },
        I = Object.prototype.hasOwnProperty;

    function V(j, ce, k, Q, L, M) { return k = M.ref, { $$typeof: e, type: j, key: ce, ref: k !== void 0 ? k : null, props: M } }

    function N(j, ce) { return V(j.type, ce, void 0, void 0, void 0, j.props) }

    function _(j) { return typeof j == "object" && j !== null && j.$$typeof === e }

    function U(j) { var ce = { "=": "=0", ":": "=2" }; return "$" + j.replace(/[=:]/g, function(k) { return ce[k] }) } var q = /\/+/g;

    function H(j, ce) { return typeof j == "object" && j !== null && j.key != null ? U("" + j.key) : ce.toString(36) }

    function W() {}

    function ee(j) { switch (j.status) {
            case "fulfilled":
                return j.value;
            case "rejected":
                throw j.reason;
            default:
                switch (typeof j.status == "string" ? j.then(W, W) : (j.status = "pending", j.then(function(ce) { j.status === "pending" && (j.status = "fulfilled", j.value = ce) }, function(ce) { j.status === "pending" && (j.status = "rejected", j.reason = ce) })), j.status) {
                    case "fulfilled":
                        return j.value;
                    case "rejected":
                        throw j.reason } } throw j }

    function re(j, ce, k, Q, L) { var M = typeof j;
        (M === "undefined" || M === "boolean") && (j = null); var ie = !1; if (j === null) ie = !0;
        else switch (M) {
            case "bigint":
            case "string":
            case "number":
                ie = !0; break;
            case "object":
                switch (j.$$typeof) {
                    case e:
                    case t:
                        ie = !0; break;
                    case m:
                        return ie = j._init, re(ie(j._payload), ce, k, Q, L) } }
        if (ie) return L = L(j), ie = Q === "" ? "." + H(j, 0) : Q, F(L) ? (k = "", ie != null && (k = ie.replace(q, "$&/") + "/"), re(L, ce, k, "", function(Te) { return Te })) : L != null && (_(L) && (L = N(L, k + (L.key == null || j && j.key === L.key ? "" : ("" + L.key).replace(q, "$&/") + "/") + ie)), ce.push(L)), 1;
        ie = 0; var _e = Q === "" ? "." : Q + ":"; if (F(j))
            for (var we = 0; we < j.length; we++) Q = j[we], M = _e + H(Q, we), ie += re(Q, ce, k, M, L);
        else if (we = v(j), typeof we == "function")
            for (j = we.call(j), we = 0; !(Q = j.next()).done;) Q = Q.value, M = _e + H(Q, we++), ie += re(Q, ce, k, M, L);
        else if (M === "object") { if (typeof j.then == "function") return re(ee(j), ce, k, Q, L); throw ce = String(j), Error("Objects are not valid as a React child (found: " + (ce === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : ce) + "). If you meant to render a collection of children, use an array instead.") } return ie }

    function B(j, ce, k) { if (j == null) return j; var Q = [],
            L = 0; return re(j, Q, "", "", function(M) { return ce.call(k, M, L++) }), Q }

    function C(j) { if (j._status === -1) { var ce = j._result;
            ce = ce(), ce.then(function(k) {
                (j._status === 0 || j._status === -1) && (j._status = 1, j._result = k) }, function(k) {
                (j._status === 0 || j._status === -1) && (j._status = 2, j._result = k) }), j._status === -1 && (j._status = 0, j._result = ce) } if (j._status === 1) return j._result.default; throw j._result } var se = typeof reportError == "function" ? reportError : function(j) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var ce = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j), error: j }); if (!window.dispatchEvent(ce)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", j); return }
        console.error(j) };

    function te() {} return Je.Children = { map: B, forEach: function(j, ce, k) { B(j, function() { ce.apply(this, arguments) }, k) }, count: function(j) { var ce = 0; return B(j, function() { ce++ }), ce }, toArray: function(j) { return B(j, function(ce) { return ce }) || [] }, only: function(j) { if (!_(j)) throw Error("React.Children.only expected to receive a single React element child."); return j } }, Je.Component = w, Je.Fragment = r, Je.Profiler = l, Je.PureComponent = O, Je.StrictMode = i, Je.Suspense = p, Je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, Je.act = function() { throw Error("act(...) is not supported in production builds of React.") }, Je.cache = function(j) { return function() { return j.apply(null, arguments) } }, Je.cloneElement = function(j, ce, k) { if (j == null) throw Error("The argument must be a React element, but you passed " + j + "."); var Q = A({}, j.props),
            L = j.key,
            M = void 0; if (ce != null)
            for (ie in ce.ref !== void 0 && (M = void 0), ce.key !== void 0 && (L = "" + ce.key), ce) !I.call(ce, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && ce.ref === void 0 || (Q[ie] = ce[ie]); var ie = arguments.length - 2; if (ie === 1) Q.children = k;
        else if (1 < ie) { for (var _e = Array(ie), we = 0; we < ie; we++) _e[we] = arguments[we + 2];
            Q.children = _e } return V(j.type, L, void 0, void 0, M, Q) }, Je.createContext = function(j) { return j = { $$typeof: c, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null }, j.Provider = j, j.Consumer = { $$typeof: o, _context: j }, j }, Je.createElement = function(j, ce, k) { var Q, L = {},
            M = null; if (ce != null)
            for (Q in ce.key !== void 0 && (M = "" + ce.key), ce) I.call(ce, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (L[Q] = ce[Q]); var ie = arguments.length - 2; if (ie === 1) L.children = k;
        else if (1 < ie) { for (var _e = Array(ie), we = 0; we < ie; we++) _e[we] = arguments[we + 2];
            L.children = _e } if (j && j.defaultProps)
            for (Q in ie = j.defaultProps, ie) L[Q] === void 0 && (L[Q] = ie[Q]); return V(j, M, void 0, void 0, null, L) }, Je.createRef = function() { return { current: null } }, Je.forwardRef = function(j) { return { $$typeof: f, render: j } }, Je.isValidElement = _, Je.lazy = function(j) { return { $$typeof: m, _payload: { _status: -1, _result: j }, _init: C } }, Je.memo = function(j, ce) { return { $$typeof: x, type: j, compare: ce === void 0 ? null : ce } }, Je.startTransition = function(j) { var ce = K.T,
            k = {};
        K.T = k; try { var Q = j(),
                L = K.S;
            L !== null && L(k, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(te, se) } catch (M) { se(M) } finally { K.T = ce } }, Je.unstable_useCacheRefresh = function() { return K.H.useCacheRefresh() }, Je.use = function(j) { return K.H.use(j) }, Je.useActionState = function(j, ce, k) { return K.H.useActionState(j, ce, k) }, Je.useCallback = function(j, ce) { return K.H.useCallback(j, ce) }, Je.useContext = function(j) { return K.H.useContext(j) }, Je.useDebugValue = function() {}, Je.useDeferredValue = function(j, ce) { return K.H.useDeferredValue(j, ce) }, Je.useEffect = function(j, ce) { return K.H.useEffect(j, ce) }, Je.useId = function() { return K.H.useId() }, Je.useImperativeHandle = function(j, ce, k) { return K.H.useImperativeHandle(j, ce, k) }, Je.useInsertionEffect = function(j, ce) { return K.H.useInsertionEffect(j, ce) }, Je.useLayoutEffect = function(j, ce) { return K.H.useLayoutEffect(j, ce) }, Je.useMemo = function(j, ce) { return K.H.useMemo(j, ce) }, Je.useOptimistic = function(j, ce) { return K.H.useOptimistic(j, ce) }, Je.useReducer = function(j, ce, k) { return K.H.useReducer(j, ce, k) }, Je.useRef = function(j) { return K.H.useRef(j) }, Je.useState = function(j) { return K.H.useState(j) }, Je.useSyncExternalStore = function(j, ce, k) { return K.H.useSyncExternalStore(j, ce, k) }, Je.useTransition = function() { return K.H.useTransition() }, Je.version = "19.0.0", Je }
var _x;

function yd() { return _x || (_x = 1, kf.exports = Ly()), kf.exports }
var ne = yd();
const Uy = By(ne),
    Py = jy({ __proto__: null, default: Uy }, [ne]);
var Mf = { exports: {} },
    Ls = {},
    Lf = { exports: {} },
    Uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tx;

function zy() { return Tx || (Tx = 1, function(e) {
        function t(B, C) { var se = B.length;
            B.push(C);
            e: for (; 0 < se;) { var te = se - 1 >>> 1,
                    j = B[te]; if (0 < l(j, C)) B[te] = C, B[se] = j, se = te;
                else break e } }

        function r(B) { return B.length === 0 ? null : B[0] }

        function i(B) { if (B.length === 0) return null; var C = B[0],
                se = B.pop(); if (se !== C) { B[0] = se;
                e: for (var te = 0, j = B.length, ce = j >>> 1; te < ce;) { var k = 2 * (te + 1) - 1,
                        Q = B[k],
                        L = k + 1,
                        M = B[L]; if (0 > l(Q, se)) L < j && 0 > l(M, Q) ? (B[te] = M, B[L] = se, te = L) : (B[te] = Q, B[k] = se, te = k);
                    else if (L < j && 0 > l(M, se)) B[te] = M, B[L] = se, te = L;
                    else break e } } return C }

        function l(B, C) { var se = B.sortIndex - C.sortIndex; return se !== 0 ? se : B.id - C.id } if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") { var o = performance;
            e.unstable_now = function() { return o.now() } } else { var c = Date,
                f = c.now();
            e.unstable_now = function() { return c.now() - f } } var p = [],
            x = [],
            m = 1,
            g = null,
            v = 3,
            b = !1,
            A = !1,
            E = !1,
            w = typeof setTimeout == "function" ? setTimeout : null,
            S = typeof clearTimeout == "function" ? clearTimeout : null,
            O = typeof setImmediate < "u" ? setImmediate : null;

        function D(B) { for (var C = r(x); C !== null;) { if (C.callback === null) i(x);
                else if (C.startTime <= B) i(x), C.sortIndex = C.expirationTime, t(p, C);
                else break;
                C = r(x) } }

        function F(B) { if (E = !1, D(B), !A)
                if (r(p) !== null) A = !0, ee();
                else { var C = r(x);
                    C !== null && re(F, C.startTime - B) } } var K = !1,
            I = -1,
            V = 5,
            N = -1;

        function _() { return !(e.unstable_now() - N < V) }

        function U() { if (K) { var B = e.unstable_now();
                N = B; var C = !0; try { e: { A = !1, E && (E = !1, S(I), I = -1), b = !0; var se = v; try { t: { for (D(B), g = r(p); g !== null && !(g.expirationTime > B && _());) { var te = g.callback; if (typeof te == "function") { g.callback = null, v = g.priorityLevel; var j = te(g.expirationTime <= B); if (B = e.unstable_now(), typeof j == "function") { g.callback = j, D(B), C = !0; break t }
                                        g === r(p) && i(p), D(B) } else i(p);
                                    g = r(p) } if (g !== null) C = !0;
                                else { var ce = r(x);
                                    ce !== null && re(F, ce.startTime - B), C = !1 } } break e }
                        finally { g = null, v = se, b = !1 }
                        C = void 0 } }
                finally { C ? q() : K = !1 } } } var q; if (typeof O == "function") q = function() { O(U) };
        else if (typeof MessageChannel < "u") { var H = new MessageChannel,
                W = H.port2;
            H.port1.onmessage = U, q = function() { W.postMessage(null) } } else q = function() { w(U, 0) };

        function ee() { K || (K = !0, q()) }

        function re(B, C) { I = w(function() { B(e.unstable_now()) }, C) }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(B) { B.callback = null }, e.unstable_continueExecution = function() { A || b || (A = !0, ee()) }, e.unstable_forceFrameRate = function(B) { 0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < B ? Math.floor(1e3 / B) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return v }, e.unstable_getFirstCallbackNode = function() { return r(p) }, e.unstable_next = function(B) { switch (v) {
                case 1:
                case 2:
                case 3:
                    var C = 3; break;
                default:
                    C = v } var se = v;
            v = C; try { return B() } finally { v = se } }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(B, C) { switch (B) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    B = 3 } var se = v;
            v = B; try { return C() } finally { v = se } }, e.unstable_scheduleCallback = function(B, C, se) { var te = e.unstable_now(); switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? te + se : te) : se = te, B) {
                case 1:
                    var j = -1; break;
                case 2:
                    j = 250; break;
                case 5:
                    j = 1073741823; break;
                case 4:
                    j = 1e4; break;
                default:
                    j = 5e3 } return j = se + j, B = { id: m++, callback: C, priorityLevel: B, startTime: se, expirationTime: j, sortIndex: -1 }, se > te ? (B.sortIndex = se, t(x, B), r(p) === null && B === r(x) && (E ? (S(I), I = -1) : E = !0, re(F, se - te))) : (B.sortIndex = j, t(p, B), A || b || (A = !0, ee())), B }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(B) { var C = v; return function() { var se = v;
                v = C; try { return B.apply(this, arguments) } finally { v = se } } } }(Uf)), Uf }
var Sx;

function Iy() { return Sx || (Sx = 1, Lf.exports = zy()), Lf.exports }
var Pf = { exports: {} },
    br = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nx;

function Hy() { if (Nx) return br;
    Nx = 1; var e = yd();

    function t(p) { var x = "https://react.dev/errors/" + p; if (1 < arguments.length) { x += "?args[]=" + encodeURIComponent(arguments[1]); for (var m = 2; m < arguments.length; m++) x += "&args[]=" + encodeURIComponent(arguments[m]) } return "Minified React error #" + p + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }

    function r() {} var i = { d: { f: r, r: function() { throw Error(t(522)) }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null },
        l = Symbol.for("react.portal");

    function o(p, x, m) { var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: l, key: g == null ? null : "" + g, children: p, containerInfo: x, implementation: m } } var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function f(p, x) { if (p === "font") return ""; if (typeof x == "string") return x === "use-credentials" ? x : "" } return br.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, br.createPortal = function(p, x) { var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11) throw Error(t(299)); return o(p, x, null, m) }, br.flushSync = function(p) { var x = c.T,
            m = i.p; try { if (c.T = null, i.p = 2, p) return p() } finally { c.T = x, i.p = m, i.d.f() } }, br.preconnect = function(p, x) { typeof p == "string" && (x ? (x = x.crossOrigin, x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null, i.d.C(p, x)) }, br.prefetchDNS = function(p) { typeof p == "string" && i.d.D(p) }, br.preinit = function(p, x) { if (typeof p == "string" && x && typeof x.as == "string") { var m = x.as,
                g = f(m, x.crossOrigin),
                v = typeof x.integrity == "string" ? x.integrity : void 0,
                b = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
            m === "style" ? i.d.S(p, typeof x.precedence == "string" ? x.precedence : void 0, { crossOrigin: g, integrity: v, fetchPriority: b }) : m === "script" && i.d.X(p, { crossOrigin: g, integrity: v, fetchPriority: b, nonce: typeof x.nonce == "string" ? x.nonce : void 0 }) } }, br.preinitModule = function(p, x) { if (typeof p == "string")
            if (typeof x == "object" && x !== null) { if (x.as == null || x.as === "script") { var m = f(x.as, x.crossOrigin);
                    i.d.M(p, { crossOrigin: m, integrity: typeof x.integrity == "string" ? x.integrity : void 0, nonce: typeof x.nonce == "string" ? x.nonce : void 0 }) } } else x == null && i.d.M(p) }, br.preload = function(p, x) { if (typeof p == "string" && typeof x == "object" && x !== null && typeof x.as == "string") { var m = x.as,
                g = f(m, x.crossOrigin);
            i.d.L(p, m, { crossOrigin: g, integrity: typeof x.integrity == "string" ? x.integrity : void 0, nonce: typeof x.nonce == "string" ? x.nonce : void 0, type: typeof x.type == "string" ? x.type : void 0, fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0, referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0, imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0, imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0, media: typeof x.media == "string" ? x.media : void 0 }) } }, br.preloadModule = function(p, x) { if (typeof p == "string")
            if (x) { var m = f(x.as, x.crossOrigin);
                i.d.m(p, { as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0, crossOrigin: m, integrity: typeof x.integrity == "string" ? x.integrity : void 0 }) } else i.d.m(p) }, br.requestFormReset = function(p) { i.d.r(p) }, br.unstable_batchedUpdates = function(p, x) { return p(x) }, br.useFormState = function(p, x, m) { return c.H.useFormState(p, x, m) }, br.useFormStatus = function() { return c.H.useHostTransitionStatus() }, br.version = "19.0.0", br }
var Cx;

function Vp() { if (Cx) return Pf.exports;
    Cx = 1;

    function e() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (t) { console.error(t) } } return e(), Pf.exports = Hy(), Pf.exports }
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dx;

function Gy() { if (Dx) return Ls;
    Dx = 1; var e = Iy(),
        t = yd(),
        r = Vp();

    function i(a) { var n = "https://react.dev/errors/" + a; if (1 < arguments.length) { n += "?args[]=" + encodeURIComponent(arguments[1]); for (var s = 2; s < arguments.length; s++) n += "&args[]=" + encodeURIComponent(arguments[s]) } return "Minified React error #" + a + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }

    function l(a) { return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11) } var o = Symbol.for("react.element"),
        c = Symbol.for("react.transitional.element"),
        f = Symbol.for("react.portal"),
        p = Symbol.for("react.fragment"),
        x = Symbol.for("react.strict_mode"),
        m = Symbol.for("react.profiler"),
        g = Symbol.for("react.provider"),
        v = Symbol.for("react.consumer"),
        b = Symbol.for("react.context"),
        A = Symbol.for("react.forward_ref"),
        E = Symbol.for("react.suspense"),
        w = Symbol.for("react.suspense_list"),
        S = Symbol.for("react.memo"),
        O = Symbol.for("react.lazy"),
        D = Symbol.for("react.offscreen"),
        F = Symbol.for("react.memo_cache_sentinel"),
        K = Symbol.iterator;

    function I(a) { return a === null || typeof a != "object" ? null : (a = K && a[K] || a["@@iterator"], typeof a == "function" ? a : null) } var V = Symbol.for("react.client.reference");

    function N(a) { if (a == null) return null; if (typeof a == "function") return a.$$typeof === V ? null : a.displayName || a.name || null; if (typeof a == "string") return a; switch (a) {
            case p:
                return "Fragment";
            case f:
                return "Portal";
            case m:
                return "Profiler";
            case x:
                return "StrictMode";
            case E:
                return "Suspense";
            case w:
                return "SuspenseList" } if (typeof a == "object") switch (a.$$typeof) {
            case b:
                return (a.displayName || "Context") + ".Provider";
            case v:
                return (a._context.displayName || "Context") + ".Consumer";
            case A:
                var n = a.render; return a = a.displayName, a || (a = n.displayName || n.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
            case S:
                return n = a.displayName || null, n !== null ? n : N(a.type) || "Memo";
            case O:
                n = a._payload, a = a._init; try { return N(a(n)) } catch {} }
        return null } var _ = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        U = Object.assign,
        q, H;

    function W(a) { if (q === void 0) try { throw Error() } catch (s) { var n = s.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "", H = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : "" }
        return `
` + q + a + H } var ee = !1;

    function re(a, n) { if (!a || ee) return "";
        ee = !0; var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0; try { var u = { DetermineComponentFrameRoot: function() { try { if (n) { var Ce = function() { throw Error() }; if (Object.defineProperty(Ce.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(Ce, []) } catch (be) { var pe = be }
                                Reflect.construct(a, [], Ce) } else { try { Ce.call() } catch (be) { pe = be }
                                a.call(Ce.prototype) } } else { try { throw Error() } catch (be) { pe = be }(Ce = a()) && typeof Ce.catch == "function" && Ce.catch(function() {}) } } catch (be) { if (be && pe && typeof be.stack == "string") return [be.stack, pe.stack] } return [null, null] } };
            u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot"; var h = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
            h && h.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" }); var y = u.DetermineComponentFrameRoot(),
                T = y[0],
                P = y[1]; if (T && P) { var J = T.split(`
`),
                    oe = P.split(`
`); for (h = u = 0; u < J.length && !J[u].includes("DetermineComponentFrameRoot");) u++; for (; h < oe.length && !oe[h].includes("DetermineComponentFrameRoot");) h++; if (u === J.length || h === oe.length)
                    for (u = J.length - 1, h = oe.length - 1; 1 <= u && 0 <= h && J[u] !== oe[h];) h--; for (; 1 <= u && 0 <= h; u--, h--)
                    if (J[u] !== oe[h]) { if (u !== 1 || h !== 1)
                            do
                                if (u--, h--, 0 > h || J[u] !== oe[h]) { var Ee = `
` + J[u].replace(" at new ", " at "); return a.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", a.displayName)), Ee }
                        while (1 <= u && 0 <= h); break } } } finally { ee = !1, Error.prepareStackTrace = s } return (s = a ? a.displayName || a.name : "") ? W(s) : "" }

    function B(a) { switch (a.tag) {
            case 26:
            case 27:
            case 5:
                return W(a.type);
            case 16:
                return W("Lazy");
            case 13:
                return W("Suspense");
            case 19:
                return W("SuspenseList");
            case 0:
            case 15:
                return a = re(a.type, !1), a;
            case 11:
                return a = re(a.type.render, !1), a;
            case 1:
                return a = re(a.type, !0), a;
            default:
                return "" } }

    function C(a) { try { var n = "";
            do n += B(a), a = a.return; while (a); return n } catch (s) { return `
Error generating stack: ` + s.message + `
` + s.stack } }

    function se(a) { var n = a,
            s = a; if (a.alternate)
            for (; n.return;) n = n.return;
        else { a = n;
            do n = a, (n.flags & 4098) !== 0 && (s = n.return), a = n.return; while (a) } return n.tag === 3 ? s : null }

    function te(a) { if (a.tag === 13) { var n = a.memoizedState; if (n === null && (a = a.alternate, a !== null && (n = a.memoizedState)), n !== null) return n.dehydrated } return null }

    function j(a) { if (se(a) !== a) throw Error(i(188)) }

    function ce(a) { var n = a.alternate; if (!n) { if (n = se(a), n === null) throw Error(i(188)); return n !== a ? null : a } for (var s = a, u = n;;) { var h = s.return; if (h === null) break; var y = h.alternate; if (y === null) { if (u = h.return, u !== null) { s = u; continue } break } if (h.child === y.child) { for (y = h.child; y;) { if (y === s) return j(h), a; if (y === u) return j(h), n;
                    y = y.sibling } throw Error(i(188)) } if (s.return !== u.return) s = h, u = y;
            else { for (var T = !1, P = h.child; P;) { if (P === s) { T = !0, s = h, u = y; break } if (P === u) { T = !0, u = h, s = y; break }
                    P = P.sibling } if (!T) { for (P = y.child; P;) { if (P === s) { T = !0, s = y, u = h; break } if (P === u) { T = !0, u = y, s = h; break }
                        P = P.sibling } if (!T) throw Error(i(189)) } } if (s.alternate !== u) throw Error(i(190)) } if (s.tag !== 3) throw Error(i(188)); return s.stateNode.current === s ? a : n }

    function k(a) { var n = a.tag; if (n === 5 || n === 26 || n === 27 || n === 6) return a; for (a = a.child; a !== null;) { if (n = k(a), n !== null) return n;
            a = a.sibling } return null } var Q = Array.isArray,
        L = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        M = { pending: !1, data: null, method: null, action: null },
        ie = [],
        _e = -1;

    function we(a) { return { current: a } }

    function Te(a) { 0 > _e || (a.current = ie[_e], ie[_e] = null, _e--) }

    function ye(a, n) { _e++, ie[_e] = a.current, a.current = n } var Pe = we(null),
        ze = we(null),
        st = we(null),
        Ye = we(null);

    function tt(a, n) { switch (ye(st, n), ye(ze, a), ye(Pe, null), a = n.nodeType, a) {
            case 9:
            case 11:
                n = (n = n.documentElement) && (n = n.namespaceURI) ? Qm(n) : 0; break;
            default:
                if (a = a === 8 ? n.parentNode : n, n = a.tagName, a = a.namespaceURI) a = Qm(a), n = Zm(a, n);
                else switch (n) {
                    case "svg":
                        n = 1; break;
                    case "math":
                        n = 2; break;
                    default:
                        n = 0 } }
        Te(Pe), ye(Pe, n) }

    function We() { Te(Pe), Te(ze), Te(st) }

    function Oe(a) { a.memoizedState !== null && ye(Ye, a); var n = Pe.current,
            s = Zm(n, a.type);
        n !== s && (ye(ze, a), ye(Pe, s)) }

    function Ke(a) { ze.current === a && (Te(Pe), Te(ze)), Ye.current === a && (Te(Ye), Rs._currentValue = M) } var ot = Object.prototype.hasOwnProperty,
        pt = e.unstable_scheduleCallback,
        ct = e.unstable_cancelCallback,
        It = e.unstable_shouldYield,
        gt = e.unstable_requestPaint,
        ae = e.unstable_now,
        Le = e.unstable_getCurrentPriorityLevel,
        Ie = e.unstable_ImmediatePriority,
        Ot = e.unstable_UserBlockingPriority,
        it = e.unstable_NormalPriority,
        Hr = e.unstable_LowPriority,
        Rt = e.unstable_IdlePriority,
        vr = e.log,
        sr = e.unstable_setDisableYieldValue,
        er = null,
        Tt = null;

    function na(a) { if (Tt && typeof Tt.onCommitFiberRoot == "function") try { Tt.onCommitFiberRoot(er, a, void 0, (a.current.flags & 128) === 128) } catch {} }

    function jr(a) { if (typeof vr == "function" && sr(a), Tt && typeof Tt.setStrictMode == "function") try { Tt.setStrictMode(er, a) } catch {} } var or = Math.clz32 ? Math.clz32 : ka,
        An = Math.log,
        ai = Math.LN2;

    function ka(a) { return a >>>= 0, a === 0 ? 32 : 31 - (An(a) / ai | 0) | 0 } var En = 128,
        Tr = 4194304;

    function Ht(a) { var n = a & 42; if (n !== 0) return n; switch (a & -a) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return a & 4194176;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return a & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return a } }

    function Gr(a, n) { var s = a.pendingLanes; if (s === 0) return 0; var u = 0,
            h = a.suspendedLanes,
            y = a.pingedLanes,
            T = a.warmLanes;
        a = a.finishedLanes !== 0; var P = s & 134217727; return P !== 0 ? (s = P & ~h, s !== 0 ? u = Ht(s) : (y &= P, y !== 0 ? u = Ht(y) : a || (T = P & ~T, T !== 0 && (u = Ht(T))))) : (P = s & ~h, P !== 0 ? u = Ht(P) : y !== 0 ? u = Ht(y) : a || (T = s & ~T, T !== 0 && (u = Ht(T)))), u === 0 ? 0 : n !== 0 && n !== u && (n & h) === 0 && (h = u & -u, T = n & -n, h >= T || h === 32 && (T & 4194176) !== 0) ? n : u }

    function Vr(a, n) { return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & n) === 0 }

    function qi(a, n) { switch (a) {
            case 1:
            case 2:
            case 4:
            case 8:
                return n + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1 } }

    function ia() { var a = En; return En <<= 1, (En & 4194176) === 0 && (En = 128), a }

    function la() { var a = Tr; return Tr <<= 1, (Tr & 62914560) === 0 && (Tr = 4194304), a }

    function Gl(a) { for (var n = [], s = 0; 31 > s; s++) n.push(a); return n }

    function ni(a, n) { a.pendingLanes |= n, n !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0) }

    function Ou(a, n, s, u, h, y) { var T = a.pendingLanes;
        a.pendingLanes = s, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= s, a.entangledLanes &= s, a.errorRecoveryDisabledLanes &= s, a.shellSuspendCounter = 0; var P = a.entanglements,
            J = a.expirationTimes,
            oe = a.hiddenUpdates; for (s = T & ~s; 0 < s;) { var Ee = 31 - or(s),
                Ce = 1 << Ee;
            P[Ee] = 0, J[Ee] = -1; var pe = oe[Ee]; if (pe !== null)
                for (oe[Ee] = null, Ee = 0; Ee < pe.length; Ee++) { var be = pe[Ee];
                    be !== null && (be.lane &= -536870913) }
            s &= ~Ce }
        u !== 0 && Xi(a, u, 0), y !== 0 && h === 0 && a.tag !== 0 && (a.suspendedLanes |= y & ~(T & ~n)) }

    function Xi(a, n, s) { a.pendingLanes |= n, a.suspendedLanes &= ~n; var u = 31 - or(n);
        a.entangledLanes |= n, a.entanglements[u] = a.entanglements[u] | 1073741824 | s & 4194218 }

    function vo(a, n) { var s = a.entangledLanes |= n; for (a = a.entanglements; s;) { var u = 31 - or(s),
                h = 1 << u;
            h & n | a[u] & n && (a[u] |= n), s &= ~h } }

    function yo(a) { return a &= -a, 2 < a ? 8 < a ? (a & 134217727) !== 0 ? 32 : 268435456 : 8 : 2 }

    function bo() { var a = L.p; return a !== 0 ? a : (a = window.event, a === void 0 ? 32 : xx(a.type)) }

    function R(a, n) { var s = L.p; try { return L.p = a, n() } finally { L.p = s } } var X = Math.random().toString(36).slice(2),
        z = "__reactFiber$" + X,
        G = "__reactProps$" + X,
        Y = "__reactContainer$" + X,
        Z = "__reactEvents$" + X,
        me = "__reactListeners$" + X,
        Ae = "__reactHandles$" + X,
        de = "__reactResources$" + X,
        he = "__reactMarker$" + X;

    function xe(a) { delete a[z], delete a[G], delete a[Z], delete a[me], delete a[Ae] }

    function De(a) { var n = a[z]; if (n) return n; for (var s = a.parentNode; s;) { if (n = s[Y] || s[z]) { if (s = n.alternate, n.child !== null || s !== null && s.child !== null)
                    for (a = ex(a); a !== null;) { if (s = a[z]) return s;
                        a = ex(a) }
                return n }
            a = s, s = a.parentNode } return null }

    function je(a) { if (a = a[z] || a[Y]) { var n = a.tag; if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return a } return null }

    function Me(a) { var n = a.tag; if (n === 5 || n === 26 || n === 27 || n === 6) return a.stateNode; throw Error(i(33)) }

    function Re(a) { var n = a[de]; return n || (n = a[de] = { hoistableStyles: new Map, hoistableScripts: new Map }), n }

    function Fe(a) { a[he] = !0 } var Qe = new Set,
        Nt = {};

    function mt(a, n) { jt(a, n), jt(a + "Capture", n) }

    function jt(a, n) { for (Nt[a] = n, a = 0; a < n.length; a++) Qe.add(n[a]) } var Sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        ii = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        wn = {},
        Ma = {};

    function Vl(a) { return ot.call(Ma, a) ? !0 : ot.call(wn, a) ? !1 : ii.test(a) ? Ma[a] = !0 : (wn[a] = !0, !1) }

    function Br(a, n, s) { if (Vl(n))
            if (s === null) a.removeAttribute(n);
            else { switch (typeof s) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        a.removeAttribute(n); return;
                    case "boolean":
                        var u = n.toLowerCase().slice(0, 5); if (u !== "data-" && u !== "aria-") { a.removeAttribute(n); return } }
                a.setAttribute(n, "" + s) } }

    function Ao(a, n, s) { if (s === null) a.removeAttribute(n);
        else { switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    a.removeAttribute(n); return }
            a.setAttribute(n, "" + s) } }

    function Ka(a, n, s, u) { if (u === null) a.removeAttribute(s);
        else { switch (typeof u) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    a.removeAttribute(s); return }
            a.setAttributeNS(n, s, "" + u) } }

    function sa(a) { switch (typeof a) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return a;
            case "object":
                return a;
            default:
                return "" } }

    function Jd(a) { var n = a.type; return (a = a.nodeName) && a.toLowerCase() === "input" && (n === "checkbox" || n === "radio") }

    function Cv(a) { var n = Jd(a) ? "checked" : "value",
            s = Object.getOwnPropertyDescriptor(a.constructor.prototype, n),
            u = "" + a[n]; if (!a.hasOwnProperty(n) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") { var h = s.get,
                y = s.set; return Object.defineProperty(a, n, { configurable: !0, get: function() { return h.call(this) }, set: function(T) { u = "" + T, y.call(this, T) } }), Object.defineProperty(a, n, { enumerable: s.enumerable }), { getValue: function() { return u }, setValue: function(T) { u = "" + T }, stopTracking: function() { a._valueTracker = null, delete a[n] } } } }

    function Eo(a) { a._valueTracker || (a._valueTracker = Cv(a)) }

    function eh(a) { if (!a) return !1; var n = a._valueTracker; if (!n) return !0; var s = n.getValue(),
            u = ""; return a && (u = Jd(a) ? a.checked ? "true" : "false" : a.value), a = u, a !== s ? (n.setValue(a), !0) : !1 }

    function wo(a) { if (a = a || (typeof document < "u" ? document : void 0), typeof a > "u") return null; try { return a.activeElement || a.body } catch { return a.body } } var Dv = /[\n"\\]/g;

    function oa(a) { return a.replace(Dv, function(n) { return "\\" + n.charCodeAt(0).toString(16) + " " }) }

    function Ru(a, n, s, u, h, y, T, P) { a.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? a.type = T : a.removeAttribute("type"), n != null ? T === "number" ? (n === 0 && a.value === "" || a.value != n) && (a.value = "" + sa(n)) : a.value !== "" + sa(n) && (a.value = "" + sa(n)) : T !== "submit" && T !== "reset" || a.removeAttribute("value"), n != null ? Fu(a, T, sa(n)) : s != null ? Fu(a, T, sa(s)) : u != null && a.removeAttribute("value"), h == null && y != null && (a.defaultChecked = !!y), h != null && (a.checked = h && typeof h != "function" && typeof h != "symbol"), P != null && typeof P != "function" && typeof P != "symbol" && typeof P != "boolean" ? a.name = "" + sa(P) : a.removeAttribute("name") }

    function th(a, n, s, u, h, y, T, P) { if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (a.type = y), n != null || s != null) { if (!(y !== "submit" && y !== "reset" || n != null)) return;
            s = s != null ? "" + sa(s) : "", n = n != null ? "" + sa(n) : s, P || n === a.value || (a.value = n), a.defaultValue = n }
        u = u ? ? h, u = typeof u != "function" && typeof u != "symbol" && !!u, a.checked = P ? a.checked : !!u, a.defaultChecked = !!u, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (a.name = T) }

    function Fu(a, n, s) { n === "number" && wo(a.ownerDocument) === a || a.defaultValue === "" + s || (a.defaultValue = "" + s) }

    function Yi(a, n, s, u) { if (a = a.options, n) { n = {}; for (var h = 0; h < s.length; h++) n["$" + s[h]] = !0; for (s = 0; s < a.length; s++) h = n.hasOwnProperty("$" + a[s].value), a[s].selected !== h && (a[s].selected = h), h && u && (a[s].defaultSelected = !0) } else { for (s = "" + sa(s), n = null, h = 0; h < a.length; h++) { if (a[h].value === s) { a[h].selected = !0, u && (a[h].defaultSelected = !0); return }
                n !== null || a[h].disabled || (n = a[h]) }
            n !== null && (n.selected = !0) } }

    function rh(a, n, s) { if (n != null && (n = "" + sa(n), n !== a.value && (a.value = n), s == null)) { a.defaultValue !== n && (a.defaultValue = n); return }
        a.defaultValue = s != null ? "" + sa(s) : "" }

    function ah(a, n, s, u) { if (n == null) { if (u != null) { if (s != null) throw Error(i(92)); if (Q(u)) { if (1 < u.length) throw Error(i(93));
                    u = u[0] }
                s = u }
            s == null && (s = ""), n = s }
        s = sa(n), a.defaultValue = s, u = a.textContent, u === s && u !== "" && u !== null && (a.value = u) }

    function Wi(a, n) { if (n) { var s = a.firstChild; if (s && s === a.lastChild && s.nodeType === 3) { s.nodeValue = n; return } }
        a.textContent = n } var Ov = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function nh(a, n, s) { var u = n.indexOf("--") === 0;
        s == null || typeof s == "boolean" || s === "" ? u ? a.setProperty(n, "") : n === "float" ? a.cssFloat = "" : a[n] = "" : u ? a.setProperty(n, s) : typeof s != "number" || s === 0 || Ov.has(n) ? n === "float" ? a.cssFloat = s : a[n] = ("" + s).trim() : a[n] = s + "px" }

    function ih(a, n, s) { if (n != null && typeof n != "object") throw Error(i(62)); if (a = a.style, s != null) { for (var u in s) !s.hasOwnProperty(u) || n != null && n.hasOwnProperty(u) || (u.indexOf("--") === 0 ? a.setProperty(u, "") : u === "float" ? a.cssFloat = "" : a[u] = ""); for (var h in n) u = n[h], n.hasOwnProperty(h) && s[h] !== u && nh(a, h, u) } else
            for (var y in n) n.hasOwnProperty(y) && nh(a, y, n[y]) }

    function ju(a) { if (a.indexOf("-") === -1) return !1; switch (a) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0 } } var Rv = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Fv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function _o(a) { return Fv.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a } var Bu = null;

    function ku(a) { return a = a.target || a.srcElement || window, a.correspondingUseElement && (a = a.correspondingUseElement), a.nodeType === 3 ? a.parentNode : a } var Ki = null,
        Qi = null;

    function lh(a) { var n = je(a); if (n && (a = n.stateNode)) { var s = a[G] || null;
            e: switch (a = n.stateNode, n.type) {
                case "input":
                    if (Ru(a, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name), n = s.name, s.type === "radio" && n != null) { for (s = a; s.parentNode;) s = s.parentNode; for (s = s.querySelectorAll('input[name="' + oa("" + n) + '"][type="radio"]'), n = 0; n < s.length; n++) { var u = s[n]; if (u !== a && u.form === a.form) { var h = u[G] || null; if (!h) throw Error(i(90));
                                Ru(u, h.value, h.defaultValue, h.defaultValue, h.checked, h.defaultChecked, h.type, h.name) } } for (n = 0; n < s.length; n++) u = s[n], u.form === a.form && eh(u) } break e;
                case "textarea":
                    rh(a, s.value, s.defaultValue); break e;
                case "select":
                    n = s.value, n != null && Yi(a, !!s.multiple, n, !1) } } } var Mu = !1;

    function sh(a, n, s) { if (Mu) return a(n, s);
        Mu = !0; try { var u = a(n); return u } finally { if (Mu = !1, (Ki !== null || Qi !== null) && (sc(), Ki && (n = Ki, a = Qi, Qi = Ki = null, lh(n), a)))
                for (n = 0; n < a.length; n++) lh(a[n]) } }

    function ql(a, n) { var s = a.stateNode; if (s === null) return null; var u = s[G] || null; if (u === null) return null;
        s = u[n];
        e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (u = !u.disabled) || (a = a.type, u = !(a === "button" || a === "input" || a === "select" || a === "textarea")), a = !u; break e;
            default:
                a = !1 }
        if (a) return null; if (s && typeof s != "function") throw Error(i(231, n, typeof s)); return s } var Lu = !1; if (Sr) try { var Xl = {};
        Object.defineProperty(Xl, "passive", { get: function() { Lu = !0 } }), window.addEventListener("test", Xl, Xl), window.removeEventListener("test", Xl, Xl) } catch { Lu = !1 }
    var _n = null,
        Uu = null,
        To = null;

    function oh() { if (To) return To; var a, n = Uu,
            s = n.length,
            u, h = "value" in _n ? _n.value : _n.textContent,
            y = h.length; for (a = 0; a < s && n[a] === h[a]; a++); var T = s - a; for (u = 1; u <= T && n[s - u] === h[y - u]; u++); return To = h.slice(a, 1 < u ? 1 - u : void 0) }

    function So(a) { var n = a.keyCode; return "charCode" in a ? (a = a.charCode, a === 0 && n === 13 && (a = 13)) : a = n, a === 10 && (a = 13), 32 <= a || a === 13 ? a : 0 }

    function No() { return !0 }

    function ch() { return !1 }

    function kr(a) {
        function n(s, u, h, y, T) { this._reactName = s, this._targetInst = h, this.type = u, this.nativeEvent = y, this.target = T, this.currentTarget = null; for (var P in a) a.hasOwnProperty(P) && (s = a[P], this[P] = s ? s(y) : y[P]); return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? No : ch, this.isPropagationStopped = ch, this } return U(n.prototype, { preventDefault: function() { this.defaultPrevented = !0; var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = No) }, stopPropagation: function() { var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = No) }, persist: function() {}, isPersistent: No }), n } var li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) { return a.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
        Co = kr(li),
        Yl = U({}, li, { view: 0, detail: 0 }),
        jv = kr(Yl),
        Pu, zu, Wl, Do = U({}, Yl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hu, button: 0, buttons: 0, relatedTarget: function(a) { return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget }, movementX: function(a) { return "movementX" in a ? a.movementX : (a !== Wl && (Wl && a.type === "mousemove" ? (Pu = a.screenX - Wl.screenX, zu = a.screenY - Wl.screenY) : zu = Pu = 0, Wl = a), Pu) }, movementY: function(a) { return "movementY" in a ? a.movementY : zu } }),
        uh = kr(Do),
        Bv = U({}, Do, { dataTransfer: 0 }),
        kv = kr(Bv),
        Mv = U({}, Yl, { relatedTarget: 0 }),
        Iu = kr(Mv),
        Lv = U({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Uv = kr(Lv),
        Pv = U({}, li, { clipboardData: function(a) { return "clipboardData" in a ? a.clipboardData : window.clipboardData } }),
        zv = kr(Pv),
        Iv = U({}, li, { data: 0 }),
        fh = kr(Iv),
        Hv = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
        Gv = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
        Vv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

    function qv(a) { var n = this.nativeEvent; return n.getModifierState ? n.getModifierState(a) : (a = Vv[a]) ? !!n[a] : !1 }

    function Hu() { return qv } var Xv = U({}, Yl, { key: function(a) { if (a.key) { var n = Hv[a.key] || a.key; if (n !== "Unidentified") return n } return a.type === "keypress" ? (a = So(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Gv[a.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hu, charCode: function(a) { return a.type === "keypress" ? So(a) : 0 }, keyCode: function(a) { return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0 }, which: function(a) { return a.type === "keypress" ? So(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0 } }),
        Yv = kr(Xv),
        Wv = U({}, Do, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
        dh = kr(Wv),
        Kv = U({}, Yl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hu }),
        Qv = kr(Kv),
        Zv = U({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        $v = kr(Zv),
        Jv = U({}, Do, { deltaX: function(a) { return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0 }, deltaY: function(a) { return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
        e4 = kr(Jv),
        t4 = U({}, li, { newState: 0, oldState: 0 }),
        r4 = kr(t4),
        a4 = [9, 13, 27, 32],
        Gu = Sr && "CompositionEvent" in window,
        Kl = null;
    Sr && "documentMode" in document && (Kl = document.documentMode); var n4 = Sr && "TextEvent" in window && !Kl,
        hh = Sr && (!Gu || Kl && 8 < Kl && 11 >= Kl),
        mh = " ",
        xh = !1;

    function ph(a, n) { switch (a) {
            case "keyup":
                return a4.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1 } }

    function gh(a) { return a = a.detail, typeof a == "object" && "data" in a ? a.data : null } var Zi = !1;

    function i4(a, n) { switch (a) {
            case "compositionend":
                return gh(n);
            case "keypress":
                return n.which !== 32 ? null : (xh = !0, mh);
            case "textInput":
                return a = n.data, a === mh && xh ? null : a;
            default:
                return null } }

    function l4(a, n) { if (Zi) return a === "compositionend" || !Gu && ph(a, n) ? (a = oh(), To = Uu = _n = null, Zi = !1, a) : null; switch (a) {
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) { if (n.char && 1 < n.char.length) return n.char; if (n.which) return String.fromCharCode(n.which) } return null;
            case "compositionend":
                return hh && n.locale !== "ko" ? null : n.data;
            default:
                return null } } var s4 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

    function vh(a) { var n = a && a.nodeName && a.nodeName.toLowerCase(); return n === "input" ? !!s4[a.type] : n === "textarea" }

    function yh(a, n, s, u) { Ki ? Qi ? Qi.push(u) : Qi = [u] : Ki = u, n = dc(n, "onChange"), 0 < n.length && (s = new Co("onChange", "change", null, s, u), a.push({ event: s, listeners: n })) } var Ql = null,
        Zl = null;

    function o4(a) { qm(a, 0) }

    function Oo(a) { var n = Me(a); if (eh(n)) return a }

    function bh(a, n) { if (a === "change") return n } var Ah = !1; if (Sr) { var Vu; if (Sr) { var qu = "oninput" in document; if (!qu) { var Eh = document.createElement("div");
                Eh.setAttribute("oninput", "return;"), qu = typeof Eh.oninput == "function" }
            Vu = qu } else Vu = !1;
        Ah = Vu && (!document.documentMode || 9 < document.documentMode) }

    function wh() { Ql && (Ql.detachEvent("onpropertychange", _h), Zl = Ql = null) }

    function _h(a) { if (a.propertyName === "value" && Oo(Zl)) { var n = [];
            yh(n, Zl, a, ku(a)), sh(o4, n) } }

    function c4(a, n, s) { a === "focusin" ? (wh(), Ql = n, Zl = s, Ql.attachEvent("onpropertychange", _h)) : a === "focusout" && wh() }

    function u4(a) { if (a === "selectionchange" || a === "keyup" || a === "keydown") return Oo(Zl) }

    function f4(a, n) { if (a === "click") return Oo(n) }

    function d4(a, n) { if (a === "input" || a === "change") return Oo(n) }

    function h4(a, n) { return a === n && (a !== 0 || 1 / a === 1 / n) || a !== a && n !== n } var qr = typeof Object.is == "function" ? Object.is : h4;

    function $l(a, n) { if (qr(a, n)) return !0; if (typeof a != "object" || a === null || typeof n != "object" || n === null) return !1; var s = Object.keys(a),
            u = Object.keys(n); if (s.length !== u.length) return !1; for (u = 0; u < s.length; u++) { var h = s[u]; if (!ot.call(n, h) || !qr(a[h], n[h])) return !1 } return !0 }

    function Th(a) { for (; a && a.firstChild;) a = a.firstChild; return a }

    function Sh(a, n) { var s = Th(a);
        a = 0; for (var u; s;) { if (s.nodeType === 3) { if (u = a + s.textContent.length, a <= n && u >= n) return { node: s, offset: n - a };
                a = u }
            e: { for (; s;) { if (s.nextSibling) { s = s.nextSibling; break e }
                    s = s.parentNode }
                s = void 0 }
            s = Th(s) } }

    function Nh(a, n) { return a && n ? a === n ? !0 : a && a.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Nh(a, n.parentNode) : "contains" in a ? a.contains(n) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(n) & 16) : !1 : !1 }

    function Ch(a) { a = a != null && a.ownerDocument != null && a.ownerDocument.defaultView != null ? a.ownerDocument.defaultView : window; for (var n = wo(a.document); n instanceof a.HTMLIFrameElement;) { try { var s = typeof n.contentWindow.location.href == "string" } catch { s = !1 } if (s) a = n.contentWindow;
            else break;
            n = wo(a.document) } return n }

    function Xu(a) { var n = a && a.nodeName && a.nodeName.toLowerCase(); return n && (n === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || n === "textarea" || a.contentEditable === "true") }

    function m4(a, n) { var s = Ch(n);
        n = a.focusedElem; var u = a.selectionRange; if (s !== n && n && n.ownerDocument && Nh(n.ownerDocument.documentElement, n)) { if (u !== null && Xu(n)) { if (a = u.start, s = u.end, s === void 0 && (s = a), "selectionStart" in n) n.selectionStart = a, n.selectionEnd = Math.min(s, n.value.length);
                else if (s = (a = n.ownerDocument || document) && a.defaultView || window, s.getSelection) { s = s.getSelection(); var h = n.textContent.length,
                        y = Math.min(u.start, h);
                    u = u.end === void 0 ? y : Math.min(u.end, h), !s.extend && y > u && (h = u, u = y, y = h), h = Sh(n, y); var T = Sh(n, u);
                    h && T && (s.rangeCount !== 1 || s.anchorNode !== h.node || s.anchorOffset !== h.offset || s.focusNode !== T.node || s.focusOffset !== T.offset) && (a = a.createRange(), a.setStart(h.node, h.offset), s.removeAllRanges(), y > u ? (s.addRange(a), s.extend(T.node, T.offset)) : (a.setEnd(T.node, T.offset), s.addRange(a))) } } for (a = [], s = n; s = s.parentNode;) s.nodeType === 1 && a.push({ element: s, left: s.scrollLeft, top: s.scrollTop }); for (typeof n.focus == "function" && n.focus(), n = 0; n < a.length; n++) s = a[n], s.element.scrollLeft = s.left, s.element.scrollTop = s.top } } var x4 = Sr && "documentMode" in document && 11 >= document.documentMode,
        $i = null,
        Yu = null,
        Jl = null,
        Wu = !1;

    function Dh(a, n, s) { var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        Wu || $i == null || $i !== wo(u) || (u = $i, "selectionStart" in u && Xu(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Jl && $l(Jl, u) || (Jl = u, u = dc(Yu, "onSelect"), 0 < u.length && (n = new Co("onSelect", "select", null, n, s), a.push({ event: n, listeners: u }), n.target = $i))) }

    function si(a, n) { var s = {}; return s[a.toLowerCase()] = n.toLowerCase(), s["Webkit" + a] = "webkit" + n, s["Moz" + a] = "moz" + n, s } var Ji = { animationend: si("Animation", "AnimationEnd"), animationiteration: si("Animation", "AnimationIteration"), animationstart: si("Animation", "AnimationStart"), transitionrun: si("Transition", "TransitionRun"), transitionstart: si("Transition", "TransitionStart"), transitioncancel: si("Transition", "TransitionCancel"), transitionend: si("Transition", "TransitionEnd") },
        Ku = {},
        Oh = {};
    Sr && (Oh = document.createElement("div").style, "AnimationEvent" in window || (delete Ji.animationend.animation, delete Ji.animationiteration.animation, delete Ji.animationstart.animation), "TransitionEvent" in window || delete Ji.transitionend.transition);

    function oi(a) { if (Ku[a]) return Ku[a]; if (!Ji[a]) return a; var n = Ji[a],
            s; for (s in n)
            if (n.hasOwnProperty(s) && s in Oh) return Ku[a] = n[s];
        return a } var Rh = oi("animationend"),
        Fh = oi("animationiteration"),
        jh = oi("animationstart"),
        p4 = oi("transitionrun"),
        g4 = oi("transitionstart"),
        v4 = oi("transitioncancel"),
        Bh = oi("transitionend"),
        kh = new Map,
        Mh = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");

    function _a(a, n) { kh.set(a, n), mt(n, [a]) } var ca = [],
        el = 0,
        Qu = 0;

    function Ro() { for (var a = el, n = Qu = el = 0; n < a;) { var s = ca[n];
            ca[n++] = null; var u = ca[n];
            ca[n++] = null; var h = ca[n];
            ca[n++] = null; var y = ca[n]; if (ca[n++] = null, u !== null && h !== null) { var T = u.pending;
                T === null ? h.next = h : (h.next = T.next, T.next = h), u.pending = h }
            y !== 0 && Lh(s, h, y) } }

    function Fo(a, n, s, u) { ca[el++] = a, ca[el++] = n, ca[el++] = s, ca[el++] = u, Qu |= u, a.lanes |= u, a = a.alternate, a !== null && (a.lanes |= u) }

    function Zu(a, n, s, u) { return Fo(a, n, s, u), jo(a) }

    function Tn(a, n) { return Fo(a, null, null, n), jo(a) }

    function Lh(a, n, s) { a.lanes |= s; var u = a.alternate;
        u !== null && (u.lanes |= s); for (var h = !1, y = a.return; y !== null;) y.childLanes |= s, u = y.alternate, u !== null && (u.childLanes |= s), y.tag === 22 && (a = y.stateNode, a === null || a._visibility & 1 || (h = !0)), a = y, y = y.return;
        h && n !== null && a.tag === 3 && (y = a.stateNode, h = 31 - or(s), y = y.hiddenUpdates, a = y[h], a === null ? y[h] = [n] : a.push(n), n.lane = s | 536870912) }

    function jo(a) { if (50 < _s) throw _s = 0, af = null, Error(i(185)); for (var n = a.return; n !== null;) a = n, n = a.return; return a.tag === 3 ? a.stateNode : null } var tl = {},
        Uh = new WeakMap;

    function ua(a, n) { if (typeof a == "object" && a !== null) { var s = Uh.get(a); return s !== void 0 ? s : (n = { value: a, source: n, stack: C(n) }, Uh.set(a, n), n) } return { value: a, source: n, stack: C(n) } } var rl = [],
        al = 0,
        Bo = null,
        ko = 0,
        fa = [],
        da = 0,
        ci = null,
        Qa = 1,
        Za = "";

    function ui(a, n) { rl[al++] = ko, rl[al++] = Bo, Bo = a, ko = n }

    function Ph(a, n, s) { fa[da++] = Qa, fa[da++] = Za, fa[da++] = ci, ci = a; var u = Qa;
        a = Za; var h = 32 - or(u) - 1;
        u &= ~(1 << h), s += 1; var y = 32 - or(n) + h; if (30 < y) { var T = h - h % 5;
            y = (u & (1 << T) - 1).toString(32), u >>= T, h -= T, Qa = 1 << 32 - or(n) + h | s << h | u, Za = y + a } else Qa = 1 << y | s << h | u, Za = a }

    function $u(a) { a.return !== null && (ui(a, 1), Ph(a, 1, 0)) }

    function Ju(a) { for (; a === Bo;) Bo = rl[--al], rl[al] = null, ko = rl[--al], rl[al] = null; for (; a === ci;) ci = fa[--da], fa[da] = null, Za = fa[--da], fa[da] = null, Qa = fa[--da], fa[da] = null } var Nr = null,
        cr = null,
        ft = !1,
        Ta = null,
        La = !1,
        e0 = Error(i(519));

    function fi(a) { var n = Error(i(418, "")); throw rs(ua(n, a)), e0 }

    function zh(a) { var n = a.stateNode,
            s = a.type,
            u = a.memoizedProps; switch (n[z] = a, n[G] = u, s) {
            case "dialog":
                lt("cancel", n), lt("close", n); break;
            case "iframe":
            case "object":
            case "embed":
                lt("load", n); break;
            case "video":
            case "audio":
                for (s = 0; s < Ss.length; s++) lt(Ss[s], n); break;
            case "source":
                lt("error", n); break;
            case "img":
            case "image":
            case "link":
                lt("error", n), lt("load", n); break;
            case "details":
                lt("toggle", n); break;
            case "input":
                lt("invalid", n), th(n, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0), Eo(n); break;
            case "select":
                lt("invalid", n); break;
            case "textarea":
                lt("invalid", n), ah(n, u.value, u.defaultValue, u.children), Eo(n) }
        s = u.children, typeof s != "string" && typeof s != "number" && typeof s != "bigint" || n.textContent === "" + s || u.suppressHydrationWarning === !0 || Km(n.textContent, s) ? (u.popover != null && (lt("beforetoggle", n), lt("toggle", n)), u.onScroll != null && lt("scroll", n), u.onScrollEnd != null && lt("scrollend", n), u.onClick != null && (n.onclick = hc), n = !0) : n = !1, n || fi(a) }

    function Ih(a) { for (Nr = a.return; Nr;) switch (Nr.tag) {
            case 3:
            case 27:
                La = !0; return;
            case 5:
            case 13:
                La = !1; return;
            default:
                Nr = Nr.return } }

    function es(a) { if (a !== Nr) return !1; if (!ft) return Ih(a), ft = !0, !1; var n = !1,
            s; if ((s = a.tag !== 3 && a.tag !== 27) && ((s = a.tag === 5) && (s = a.type, s = !(s !== "form" && s !== "button") || Af(a.type, a.memoizedProps)), s = !s), s && (n = !0), n && cr && fi(a), Ih(a), a.tag === 13) { if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(i(317));
            e: { for (a = a.nextSibling, n = 0; a;) { if (a.nodeType === 8)
                        if (s = a.data, s === "/$") { if (n === 0) { cr = Na(a.nextSibling); break e }
                            n-- } else s !== "$" && s !== "$!" && s !== "$?" || n++;
                    a = a.nextSibling }
                cr = null } } else cr = Nr ? Na(a.stateNode.nextSibling) : null; return !0 }

    function ts() { cr = Nr = null, ft = !1 }

    function rs(a) { Ta === null ? Ta = [a] : Ta.push(a) } var as = Error(i(460)),
        Hh = Error(i(474)),
        t0 = { then: function() {} };

    function Gh(a) { return a = a.status, a === "fulfilled" || a === "rejected" }

    function Mo() {}

    function Vh(a, n, s) { switch (s = a[s], s === void 0 ? a.push(n) : s !== n && (n.then(Mo, Mo), n = s), n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw a = n.reason, a === as ? Error(i(483)) : a;
            default:
                if (typeof n.status == "string") n.then(Mo, Mo);
                else { if (a = Ct, a !== null && 100 < a.shellSuspendCounter) throw Error(i(482));
                    a = n, a.status = "pending", a.then(function(u) { if (n.status === "pending") { var h = n;
                            h.status = "fulfilled", h.value = u } }, function(u) { if (n.status === "pending") { var h = n;
                            h.status = "rejected", h.reason = u } }) } switch (n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw a = n.reason, a === as ? Error(i(483)) : a } throw ns = n, as } } var ns = null;

    function qh() { if (ns === null) throw Error(i(459)); var a = ns; return ns = null, a } var nl = null,
        is = 0;

    function Lo(a) { var n = is; return is += 1, nl === null && (nl = []), Vh(nl, a, n) }

    function ls(a, n) { n = n.props.ref, a.ref = n !== void 0 ? n : null }

    function Uo(a, n) { throw n.$$typeof === o ? Error(i(525)) : (a = Object.prototype.toString.call(n), Error(i(31, a === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : a))) }

    function Xh(a) { var n = a._init; return n(a._payload) }

    function Yh(a) {
        function n(ue, le) { if (a) { var fe = ue.deletions;
                fe === null ? (ue.deletions = [le], ue.flags |= 16) : fe.push(le) } }

        function s(ue, le) { if (!a) return null; for (; le !== null;) n(ue, le), le = le.sibling; return null }

        function u(ue) { for (var le = new Map; ue !== null;) ue.key !== null ? le.set(ue.key, ue) : le.set(ue.index, ue), ue = ue.sibling; return le }

        function h(ue, le) { return ue = Ln(ue, le), ue.index = 0, ue.sibling = null, ue }

        function y(ue, le, fe) { return ue.index = fe, a ? (fe = ue.alternate, fe !== null ? (fe = fe.index, fe < le ? (ue.flags |= 33554434, le) : fe) : (ue.flags |= 33554434, le)) : (ue.flags |= 1048576, le) }

        function T(ue) { return a && ue.alternate === null && (ue.flags |= 33554434), ue }

        function P(ue, le, fe, Se) { return le === null || le.tag !== 6 ? (le = K0(fe, ue.mode, Se), le.return = ue, le) : (le = h(le, fe), le.return = ue, le) }

        function J(ue, le, fe, Se) { var Ue = fe.type; return Ue === p ? Ee(ue, le, fe.props.children, Se, fe.key) : le !== null && (le.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === O && Xh(Ue) === le.type) ? (le = h(le, fe.props), ls(le, fe), le.return = ue, le) : (le = rc(fe.type, fe.key, fe.props, null, ue.mode, Se), ls(le, fe), le.return = ue, le) }

        function oe(ue, le, fe, Se) { return le === null || le.tag !== 4 || le.stateNode.containerInfo !== fe.containerInfo || le.stateNode.implementation !== fe.implementation ? (le = Q0(fe, ue.mode, Se), le.return = ue, le) : (le = h(le, fe.children || []), le.return = ue, le) }

        function Ee(ue, le, fe, Se, Ue) { return le === null || le.tag !== 7 ? (le = Ai(fe, ue.mode, Se, Ue), le.return = ue, le) : (le = h(le, fe), le.return = ue, le) }

        function Ce(ue, le, fe) { if (typeof le == "string" && le !== "" || typeof le == "number" || typeof le == "bigint") return le = K0("" + le, ue.mode, fe), le.return = ue, le; if (typeof le == "object" && le !== null) { switch (le.$$typeof) {
                    case c:
                        return fe = rc(le.type, le.key, le.props, null, ue.mode, fe), ls(fe, le), fe.return = ue, fe;
                    case f:
                        return le = Q0(le, ue.mode, fe), le.return = ue, le;
                    case O:
                        var Se = le._init; return le = Se(le._payload), Ce(ue, le, fe) } if (Q(le) || I(le)) return le = Ai(le, ue.mode, fe, null), le.return = ue, le; if (typeof le.then == "function") return Ce(ue, Lo(le), fe); if (le.$$typeof === b) return Ce(ue, Jo(ue, le), fe);
                Uo(ue, le) } return null }

        function pe(ue, le, fe, Se) { var Ue = le !== null ? le.key : null; if (typeof fe == "string" && fe !== "" || typeof fe == "number" || typeof fe == "bigint") return Ue !== null ? null : P(ue, le, "" + fe, Se); if (typeof fe == "object" && fe !== null) { switch (fe.$$typeof) {
                    case c:
                        return fe.key === Ue ? J(ue, le, fe, Se) : null;
                    case f:
                        return fe.key === Ue ? oe(ue, le, fe, Se) : null;
                    case O:
                        return Ue = fe._init, fe = Ue(fe._payload), pe(ue, le, fe, Se) } if (Q(fe) || I(fe)) return Ue !== null ? null : Ee(ue, le, fe, Se, null); if (typeof fe.then == "function") return pe(ue, le, Lo(fe), Se); if (fe.$$typeof === b) return pe(ue, le, Jo(ue, fe), Se);
                Uo(ue, fe) } return null }

        function be(ue, le, fe, Se, Ue) { if (typeof Se == "string" && Se !== "" || typeof Se == "number" || typeof Se == "bigint") return ue = ue.get(fe) || null, P(le, ue, "" + Se, Ue); if (typeof Se == "object" && Se !== null) { switch (Se.$$typeof) {
                    case c:
                        return ue = ue.get(Se.key === null ? fe : Se.key) || null, J(le, ue, Se, Ue);
                    case f:
                        return ue = ue.get(Se.key === null ? fe : Se.key) || null, oe(le, ue, Se, Ue);
                    case O:
                        var at = Se._init; return Se = at(Se._payload), be(ue, le, fe, Se, Ue) } if (Q(Se) || I(Se)) return ue = ue.get(fe) || null, Ee(le, ue, Se, Ue, null); if (typeof Se.then == "function") return be(ue, le, fe, Lo(Se), Ue); if (Se.$$typeof === b) return be(ue, le, fe, Jo(le, Se), Ue);
                Uo(le, Se) } return null }

        function He(ue, le, fe, Se) { for (var Ue = null, at = null, Ge = le, Xe = le = 0, ar = null; Ge !== null && Xe < fe.length; Xe++) { Ge.index > Xe ? (ar = Ge, Ge = null) : ar = Ge.sibling; var dt = pe(ue, Ge, fe[Xe], Se); if (dt === null) { Ge === null && (Ge = ar); break }
                a && Ge && dt.alternate === null && n(ue, Ge), le = y(dt, le, Xe), at === null ? Ue = dt : at.sibling = dt, at = dt, Ge = ar } if (Xe === fe.length) return s(ue, Ge), ft && ui(ue, Xe), Ue; if (Ge === null) { for (; Xe < fe.length; Xe++) Ge = Ce(ue, fe[Xe], Se), Ge !== null && (le = y(Ge, le, Xe), at === null ? Ue = Ge : at.sibling = Ge, at = Ge); return ft && ui(ue, Xe), Ue } for (Ge = u(Ge); Xe < fe.length; Xe++) ar = be(Ge, ue, Xe, fe[Xe], Se), ar !== null && (a && ar.alternate !== null && Ge.delete(ar.key === null ? Xe : ar.key), le = y(ar, le, Xe), at === null ? Ue = ar : at.sibling = ar, at = ar); return a && Ge.forEach(function(Vn) { return n(ue, Vn) }), ft && ui(ue, Xe), Ue }

        function Ze(ue, le, fe, Se) { if (fe == null) throw Error(i(151)); for (var Ue = null, at = null, Ge = le, Xe = le = 0, ar = null, dt = fe.next(); Ge !== null && !dt.done; Xe++, dt = fe.next()) { Ge.index > Xe ? (ar = Ge, Ge = null) : ar = Ge.sibling; var Vn = pe(ue, Ge, dt.value, Se); if (Vn === null) { Ge === null && (Ge = ar); break }
                a && Ge && Vn.alternate === null && n(ue, Ge), le = y(Vn, le, Xe), at === null ? Ue = Vn : at.sibling = Vn, at = Vn, Ge = ar } if (dt.done) return s(ue, Ge), ft && ui(ue, Xe), Ue; if (Ge === null) { for (; !dt.done; Xe++, dt = fe.next()) dt = Ce(ue, dt.value, Se), dt !== null && (le = y(dt, le, Xe), at === null ? Ue = dt : at.sibling = dt, at = dt); return ft && ui(ue, Xe), Ue } for (Ge = u(Ge); !dt.done; Xe++, dt = fe.next()) dt = be(Ge, ue, Xe, dt.value, Se), dt !== null && (a && dt.alternate !== null && Ge.delete(dt.key === null ? Xe : dt.key), le = y(dt, le, Xe), at === null ? Ue = dt : at.sibling = dt, at = dt); return a && Ge.forEach(function(Fy) { return n(ue, Fy) }), ft && ui(ue, Xe), Ue }

        function Ut(ue, le, fe, Se) { if (typeof fe == "object" && fe !== null && fe.type === p && fe.key === null && (fe = fe.props.children), typeof fe == "object" && fe !== null) { switch (fe.$$typeof) {
                    case c:
                        e: { for (var Ue = fe.key; le !== null;) { if (le.key === Ue) { if (Ue = fe.type, Ue === p) { if (le.tag === 7) { s(ue, le.sibling), Se = h(le, fe.props.children), Se.return = ue, ue = Se; break e } } else if (le.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === O && Xh(Ue) === le.type) { s(ue, le.sibling), Se = h(le, fe.props), ls(Se, fe), Se.return = ue, ue = Se; break e }
                                    s(ue, le); break } else n(ue, le);
                                le = le.sibling }
                            fe.type === p ? (Se = Ai(fe.props.children, ue.mode, Se, fe.key), Se.return = ue, ue = Se) : (Se = rc(fe.type, fe.key, fe.props, null, ue.mode, Se), ls(Se, fe), Se.return = ue, ue = Se) }
                        return T(ue);
                    case f:
                        e: { for (Ue = fe.key; le !== null;) { if (le.key === Ue)
                                    if (le.tag === 4 && le.stateNode.containerInfo === fe.containerInfo && le.stateNode.implementation === fe.implementation) { s(ue, le.sibling), Se = h(le, fe.children || []), Se.return = ue, ue = Se; break e } else { s(ue, le); break }
                                else n(ue, le);
                                le = le.sibling }
                            Se = Q0(fe, ue.mode, Se), Se.return = ue, ue = Se }
                        return T(ue);
                    case O:
                        return Ue = fe._init, fe = Ue(fe._payload), Ut(ue, le, fe, Se) } if (Q(fe)) return He(ue, le, fe, Se); if (I(fe)) { if (Ue = I(fe), typeof Ue != "function") throw Error(i(150)); return fe = Ue.call(fe), Ze(ue, le, fe, Se) } if (typeof fe.then == "function") return Ut(ue, le, Lo(fe), Se); if (fe.$$typeof === b) return Ut(ue, le, Jo(ue, fe), Se);
                Uo(ue, fe) } return typeof fe == "string" && fe !== "" || typeof fe == "number" || typeof fe == "bigint" ? (fe = "" + fe, le !== null && le.tag === 6 ? (s(ue, le.sibling), Se = h(le, fe), Se.return = ue, ue = Se) : (s(ue, le), Se = K0(fe, ue.mode, Se), Se.return = ue, ue = Se), T(ue)) : s(ue, le) } return function(ue, le, fe, Se) { try { is = 0; var Ue = Ut(ue, le, fe, Se); return nl = null, Ue } catch (Ge) { if (Ge === as) throw Ge; var at = pa(29, Ge, null, ue.mode); return at.lanes = Se, at.return = ue, at } finally {} } } var di = Yh(!0),
        Wh = Yh(!1),
        il = we(null),
        Po = we(0);

    function Kh(a, n) { a = cn, ye(Po, a), ye(il, n), cn = a | n.baseLanes }

    function r0() { ye(Po, cn), ye(il, il.current) }

    function a0() { cn = Po.current, Te(il), Te(Po) } var ha = we(null),
        Ua = null;

    function Sn(a) { var n = a.alternate;
        ye(Zt, Zt.current & 1), ye(ha, a), Ua === null && (n === null || il.current !== null || n.memoizedState !== null) && (Ua = a) }

    function Qh(a) { if (a.tag === 22) { if (ye(Zt, Zt.current), ye(ha, a), Ua === null) { var n = a.alternate;
                n !== null && n.memoizedState !== null && (Ua = a) } } else Nn() }

    function Nn() { ye(Zt, Zt.current), ye(ha, ha.current) }

    function $a(a) { Te(ha), Ua === a && (Ua = null), Te(Zt) } var Zt = we(0);

    function zo(a) { for (var n = a; n !== null;) { if (n.tag === 13) { var s = n.memoizedState; if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return n } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) { if ((n.flags & 128) !== 0) return n } else if (n.child !== null) { n.child.return = n, n = n.child; continue } if (n === a) break; for (; n.sibling === null;) { if (n.return === null || n.return === a) return null;
                n = n.return }
            n.sibling.return = n.return, n = n.sibling } return null } var y4 = typeof AbortController < "u" ? AbortController : function() { var a = [],
                n = this.signal = { aborted: !1, addEventListener: function(s, u) { a.push(u) } };
            this.abort = function() { n.aborted = !0, a.forEach(function(s) { return s() }) } },
        b4 = e.unstable_scheduleCallback,
        A4 = e.unstable_NormalPriority,
        $t = { $$typeof: b, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };

    function n0() { return { controller: new y4, data: new Map, refCount: 0 } }

    function ss(a) { a.refCount--, a.refCount === 0 && b4(A4, function() { a.controller.abort() }) } var os = null,
        i0 = 0,
        ll = 0,
        sl = null;

    function E4(a, n) { if (os === null) { var s = os = [];
            i0 = 0, ll = df(), sl = { status: "pending", value: void 0, then: function(u) { s.push(u) } } } return i0++, n.then(Zh, Zh), n }

    function Zh() { if (--i0 === 0 && os !== null) { sl !== null && (sl.status = "fulfilled"); var a = os;
            os = null, ll = 0, sl = null; for (var n = 0; n < a.length; n++)(0, a[n])() } }

    function w4(a, n) { var s = [],
            u = { status: "pending", value: null, reason: null, then: function(h) { s.push(h) } }; return a.then(function() { u.status = "fulfilled", u.value = n; for (var h = 0; h < s.length; h++)(0, s[h])(n) }, function(h) { for (u.status = "rejected", u.reason = h, h = 0; h < s.length; h++)(0, s[h])(void 0) }), u } var $h = _.S;
    _.S = function(a, n) { typeof n == "object" && n !== null && typeof n.then == "function" && E4(a, n), $h !== null && $h(a, n) }; var hi = we(null);

    function l0() { var a = hi.current; return a !== null ? a : Ct.pooledCache }

    function Io(a, n) { n === null ? ye(hi, hi.current) : ye(hi, n.pool) }

    function Jh() { var a = l0(); return a === null ? null : { parent: $t._currentValue, pool: a } } var Cn = 0,
        rt = null,
        Et = null,
        qt = null,
        Ho = !1,
        ol = !1,
        mi = !1,
        Go = 0,
        cs = 0,
        cl = null,
        _4 = 0;

    function Gt() { throw Error(i(321)) }

    function s0(a, n) { if (n === null) return !1; for (var s = 0; s < n.length && s < a.length; s++)
            if (!qr(a[s], n[s])) return !1;
        return !0 }

    function o0(a, n, s, u, h, y) { return Cn = y, rt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _.H = a === null || a.memoizedState === null ? xi : Dn, mi = !1, y = s(u, h), mi = !1, ol && (y = t1(n, s, u, h)), e1(a), y }

    function e1(a) { _.H = Pa; var n = Et !== null && Et.next !== null; if (Cn = 0, qt = Et = rt = null, Ho = !1, cs = 0, cl = null, n) throw Error(i(300));
        a === null || tr || (a = a.dependencies, a !== null && $o(a) && (tr = !0)) }

    function t1(a, n, s, u) { rt = a; var h = 0;
        do { if (ol && (cl = null), cs = 0, ol = !1, 25 <= h) throw Error(i(301)); if (h += 1, qt = Et = null, a.updateQueue != null) { var y = a.updateQueue;
                y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0) }
            _.H = pi, y = n(s, u) } while (ol); return y }

    function T4() { var a = _.H,
            n = a.useState()[0]; return n = typeof n.then == "function" ? us(n) : n, a = a.useState()[0], (Et !== null ? Et.memoizedState : null) !== a && (rt.flags |= 1024), n }

    function c0() { var a = Go !== 0; return Go = 0, a }

    function u0(a, n, s) { n.updateQueue = a.updateQueue, n.flags &= -2053, a.lanes &= ~s }

    function f0(a) { if (Ho) { for (a = a.memoizedState; a !== null;) { var n = a.queue;
                n !== null && (n.pending = null), a = a.next }
            Ho = !1 }
        Cn = 0, qt = Et = rt = null, ol = !1, cs = Go = 0, cl = null }

    function Mr() { var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return qt === null ? rt.memoizedState = qt = a : qt = qt.next = a, qt }

    function Xt() { if (Et === null) { var a = rt.alternate;
            a = a !== null ? a.memoizedState : null } else a = Et.next; var n = qt === null ? rt.memoizedState : qt.next; if (n !== null) qt = n, Et = a;
        else { if (a === null) throw rt.alternate === null ? Error(i(467)) : Error(i(310));
            Et = a, a = { memoizedState: Et.memoizedState, baseState: Et.baseState, baseQueue: Et.baseQueue, queue: Et.queue, next: null }, qt === null ? rt.memoizedState = qt = a : qt = qt.next = a } return qt } var Vo;
    Vo = function() { return { lastEffect: null, events: null, stores: null, memoCache: null } };

    function us(a) { var n = cs; return cs += 1, cl === null && (cl = []), a = Vh(cl, a, n), n = rt, (qt === null ? n.memoizedState : qt.next) === null && (n = n.alternate, _.H = n === null || n.memoizedState === null ? xi : Dn), a }

    function qo(a) { if (a !== null && typeof a == "object") { if (typeof a.then == "function") return us(a); if (a.$$typeof === b) return yr(a) } throw Error(i(438, String(a))) }

    function d0(a) { var n = null,
            s = rt.updateQueue; if (s !== null && (n = s.memoCache), n == null) { var u = rt.alternate;
            u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (n = { data: u.data.map(function(h) { return h.slice() }), index: 0 }))) } if (n == null && (n = { data: [], index: 0 }), s === null && (s = Vo(), rt.updateQueue = s), s.memoCache = n, s = n.data[n.index], s === void 0)
            for (s = n.data[n.index] = Array(a), u = 0; u < a; u++) s[u] = F; return n.index++, s }

    function Ja(a, n) { return typeof n == "function" ? n(a) : n }

    function Xo(a) { var n = Xt(); return h0(n, Et, a) }

    function h0(a, n, s) { var u = a.queue; if (u === null) throw Error(i(311));
        u.lastRenderedReducer = s; var h = a.baseQueue,
            y = u.pending; if (y !== null) { if (h !== null) { var T = h.next;
                h.next = y.next, y.next = T }
            n.baseQueue = h = y, u.pending = null } if (y = a.baseState, h === null) a.memoizedState = y;
        else { n = h.next; var P = T = null,
                J = null,
                oe = n,
                Ee = !1;
            do { var Ce = oe.lane & -536870913; if (Ce !== oe.lane ? (ut & Ce) === Ce : (Cn & Ce) === Ce) { var pe = oe.revertLane; if (pe === 0) J !== null && (J = J.next = { lane: 0, revertLane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), Ce === ll && (Ee = !0);
                    else if ((Cn & pe) === pe) { oe = oe.next, pe === ll && (Ee = !0); continue } else Ce = { lane: 0, revertLane: oe.revertLane, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }, J === null ? (P = J = Ce, T = y) : J = J.next = Ce, rt.lanes |= pe, Un |= pe;
                    Ce = oe.action, mi && s(y, Ce), y = oe.hasEagerState ? oe.eagerState : s(y, Ce) } else pe = { lane: Ce, revertLane: oe.revertLane, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }, J === null ? (P = J = pe, T = y) : J = J.next = pe, rt.lanes |= Ce, Un |= Ce;
                oe = oe.next } while (oe !== null && oe !== n); if (J === null ? T = y : J.next = P, !qr(y, a.memoizedState) && (tr = !0, Ee && (s = sl, s !== null))) throw s;
            a.memoizedState = y, a.baseState = T, a.baseQueue = J, u.lastRenderedState = y } return h === null && (u.lanes = 0), [a.memoizedState, u.dispatch] }

    function m0(a) { var n = Xt(),
            s = n.queue; if (s === null) throw Error(i(311));
        s.lastRenderedReducer = a; var u = s.dispatch,
            h = s.pending,
            y = n.memoizedState; if (h !== null) { s.pending = null; var T = h = h.next;
            do y = a(y, T.action), T = T.next; while (T !== h);
            qr(y, n.memoizedState) || (tr = !0), n.memoizedState = y, n.baseQueue === null && (n.baseState = y), s.lastRenderedState = y } return [y, u] }

    function r1(a, n, s) { var u = rt,
            h = Xt(),
            y = ft; if (y) { if (s === void 0) throw Error(i(407));
            s = s() } else s = n(); var T = !qr((Et || h).memoizedState, s); if (T && (h.memoizedState = s, tr = !0), h = h.queue, g0(i1.bind(null, u, h, a), [a]), h.getSnapshot !== n || T || qt !== null && qt.memoizedState.tag & 1) { if (u.flags |= 2048, ul(9, n1.bind(null, u, h, s, n), { destroy: void 0 }, null), Ct === null) throw Error(i(349));
            y || (Cn & 60) !== 0 || a1(u, n, s) } return s }

    function a1(a, n, s) { a.flags |= 16384, a = { getSnapshot: n, value: s }, n = rt.updateQueue, n === null ? (n = Vo(), rt.updateQueue = n, n.stores = [a]) : (s = n.stores, s === null ? n.stores = [a] : s.push(a)) }

    function n1(a, n, s, u) { n.value = s, n.getSnapshot = u, l1(n) && s1(a) }

    function i1(a, n, s) { return s(function() { l1(n) && s1(a) }) }

    function l1(a) { var n = a.getSnapshot;
        a = a.value; try { var s = n(); return !qr(a, s) } catch { return !0 } }

    function s1(a) { var n = Tn(a, 2);
        n !== null && Cr(n, a, 2) }

    function x0(a) { var n = Mr(); if (typeof a == "function") { var s = a; if (a = s(), mi) { jr(!0); try { s() } finally { jr(!1) } } } return n.memoizedState = n.baseState = a, n.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ja, lastRenderedState: a }, n }

    function o1(a, n, s, u) { return a.baseState = s, h0(a, Et, typeof u == "function" ? u : Ja) }

    function S4(a, n, s, u, h) { if (Ko(a)) throw Error(i(485)); if (a = n.action, a !== null) { var y = { payload: h, action: a, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function(T) { y.listeners.push(T) } };
            _.T !== null ? s(!0) : y.isTransition = !1, u(y), s = n.pending, s === null ? (y.next = n.pending = y, c1(n, y)) : (y.next = s.next, n.pending = s.next = y) } }

    function c1(a, n) { var s = n.action,
            u = n.payload,
            h = a.state; if (n.isTransition) { var y = _.T,
                T = {};
            _.T = T; try { var P = s(h, u),
                    J = _.S;
                J !== null && J(T, P), u1(a, n, P) } catch (oe) { p0(a, n, oe) } finally { _.T = y } } else try { y = s(h, u), u1(a, n, y) } catch (oe) { p0(a, n, oe) } }

    function u1(a, n, s) { s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(function(u) { f1(a, n, u) }, function(u) { return p0(a, n, u) }) : f1(a, n, s) }

    function f1(a, n, s) { n.status = "fulfilled", n.value = s, d1(n), a.state = s, n = a.pending, n !== null && (s = n.next, s === n ? a.pending = null : (s = s.next, n.next = s, c1(a, s))) }

    function p0(a, n, s) { var u = a.pending; if (a.pending = null, u !== null) { u = u.next;
            do n.status = "rejected", n.reason = s, d1(n), n = n.next; while (n !== u) }
        a.action = null }

    function d1(a) { a = a.listeners; for (var n = 0; n < a.length; n++)(0, a[n])() }

    function h1(a, n) { return n }

    function m1(a, n) { if (ft) { var s = Ct.formState; if (s !== null) { e: { var u = rt; if (ft) { if (cr) { t: { for (var h = cr, y = La; h.nodeType !== 8;) { if (!y) { h = null; break t } if (h = Na(h.nextSibling), h === null) { h = null; break t } }
                                y = h.data, h = y === "F!" || y === "F" ? h : null } if (h) { cr = Na(h.nextSibling), u = h.data === "F!"; break e } }
                        fi(u) }
                    u = !1 }
                u && (n = s[0]) } } return s = Mr(), s.memoizedState = s.baseState = n, u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: h1, lastRenderedState: n }, s.queue = u, s = F1.bind(null, rt, u), u.dispatch = s, u = x0(!1), y = E0.bind(null, rt, !1, u.queue), u = Mr(), h = { state: n, dispatch: null, action: a, pending: null }, u.queue = h, s = S4.bind(null, rt, h, y, s), h.dispatch = s, u.memoizedState = a, [n, s, !1] }

    function x1(a) { var n = Xt(); return p1(n, Et, a) }

    function p1(a, n, s) { n = h0(a, n, h1)[0], a = Xo(Ja)[0], n = typeof n == "object" && n !== null && typeof n.then == "function" ? us(n) : n; var u = Xt(),
            h = u.queue,
            y = h.dispatch; return s !== u.memoizedState && (rt.flags |= 2048, ul(9, N4.bind(null, h, s), { destroy: void 0 }, null)), [n, y, a] }

    function N4(a, n) { a.action = n }

    function g1(a) { var n = Xt(),
            s = Et; if (s !== null) return p1(n, s, a);
        Xt(), n = n.memoizedState, s = Xt(); var u = s.queue.dispatch; return s.memoizedState = a, [n, u, !1] }

    function ul(a, n, s, u) { return a = { tag: a, create: n, inst: s, deps: u, next: null }, n = rt.updateQueue, n === null && (n = Vo(), rt.updateQueue = n), s = n.lastEffect, s === null ? n.lastEffect = a.next = a : (u = s.next, s.next = a, a.next = u, n.lastEffect = a), a }

    function v1() { return Xt().memoizedState }

    function Yo(a, n, s, u) { var h = Mr();
        rt.flags |= a, h.memoizedState = ul(1 | n, s, { destroy: void 0 }, u === void 0 ? null : u) }

    function Wo(a, n, s, u) { var h = Xt();
        u = u === void 0 ? null : u; var y = h.memoizedState.inst;
        Et !== null && u !== null && s0(u, Et.memoizedState.deps) ? h.memoizedState = ul(n, s, y, u) : (rt.flags |= a, h.memoizedState = ul(1 | n, s, y, u)) }

    function y1(a, n) { Yo(8390656, 8, a, n) }

    function g0(a, n) { Wo(2048, 8, a, n) }

    function b1(a, n) { return Wo(4, 2, a, n) }

    function A1(a, n) { return Wo(4, 4, a, n) }

    function E1(a, n) { if (typeof n == "function") { a = a(); var s = n(a); return function() { typeof s == "function" ? s() : n(null) } } if (n != null) return a = a(), n.current = a,
            function() { n.current = null } }

    function w1(a, n, s) { s = s != null ? s.concat([a]) : null, Wo(4, 4, E1.bind(null, n, a), s) }

    function v0() {}

    function _1(a, n) { var s = Xt();
        n = n === void 0 ? null : n; var u = s.memoizedState; return n !== null && s0(n, u[1]) ? u[0] : (s.memoizedState = [a, n], a) }

    function T1(a, n) { var s = Xt();
        n = n === void 0 ? null : n; var u = s.memoizedState; if (n !== null && s0(n, u[1])) return u[0]; if (u = a(), mi) { jr(!0); try { a() } finally { jr(!1) } } return s.memoizedState = [u, n], u }

    function y0(a, n, s) { return s === void 0 || (Cn & 1073741824) !== 0 ? a.memoizedState = n : (a.memoizedState = s, a = Nm(), rt.lanes |= a, Un |= a, s) }

    function S1(a, n, s, u) { return qr(s, n) ? s : il.current !== null ? (a = y0(a, s, u), qr(a, n) || (tr = !0), a) : (Cn & 42) === 0 ? (tr = !0, a.memoizedState = s) : (a = Nm(), rt.lanes |= a, Un |= a, n) }

    function N1(a, n, s, u, h) { var y = L.p;
        L.p = y !== 0 && 8 > y ? y : 8; var T = _.T,
            P = {};
        _.T = P, E0(a, !1, n, s); try { var J = h(),
                oe = _.S; if (oe !== null && oe(P, J), J !== null && typeof J == "object" && typeof J.then == "function") { var Ee = w4(J, u);
                fs(a, n, Ee, Kr(a)) } else fs(a, n, u, Kr(a)) } catch (Ce) { fs(a, n, { then: function() {}, status: "rejected", reason: Ce }, Kr()) } finally { L.p = y, _.T = T } }

    function C4() {}

    function b0(a, n, s, u) { if (a.tag !== 5) throw Error(i(476)); var h = C1(a).queue;
        N1(a, h, n, M, s === null ? C4 : function() { return D1(a), s(u) }) }

    function C1(a) { var n = a.memoizedState; if (n !== null) return n;
        n = { memoizedState: M, baseState: M, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ja, lastRenderedState: M }, next: null }; var s = {}; return n.next = { memoizedState: s, baseState: s, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ja, lastRenderedState: s }, next: null }, a.memoizedState = n, a = a.alternate, a !== null && (a.memoizedState = n), n }

    function D1(a) { var n = C1(a).next.queue;
        fs(a, n, {}, Kr()) }

    function A0() { return yr(Rs) }

    function O1() { return Xt().memoizedState }

    function R1() { return Xt().memoizedState }

    function D4(a) { for (var n = a.return; n !== null;) { switch (n.tag) {
                case 24:
                case 3:
                    var s = Kr();
                    a = Fn(s); var u = jn(n, a, s);
                    u !== null && (Cr(u, n, s), ms(u, n, s)), n = { cache: n0() }, a.payload = n; return }
            n = n.return } }

    function O4(a, n, s) { var u = Kr();
        s = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null }, Ko(a) ? j1(n, s) : (s = Zu(a, n, s, u), s !== null && (Cr(s, a, u), B1(s, n, u))) }

    function F1(a, n, s) { var u = Kr();
        fs(a, n, s, u) }

    function fs(a, n, s, u) { var h = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null }; if (Ko(a)) j1(n, h);
        else { var y = a.alternate; if (a.lanes === 0 && (y === null || y.lanes === 0) && (y = n.lastRenderedReducer, y !== null)) try { var T = n.lastRenderedState,
                    P = y(T, s); if (h.hasEagerState = !0, h.eagerState = P, qr(P, T)) return Fo(a, n, h, 0), Ct === null && Ro(), !1 } catch {} finally {}
            if (s = Zu(a, n, h, u), s !== null) return Cr(s, a, u), B1(s, n, u), !0 } return !1 }

    function E0(a, n, s, u) { if (u = { lane: 2, revertLane: df(), action: u, hasEagerState: !1, eagerState: null, next: null }, Ko(a)) { if (n) throw Error(i(479)) } else n = Zu(a, s, u, 2), n !== null && Cr(n, a, 2) }

    function Ko(a) { var n = a.alternate; return a === rt || n !== null && n === rt }

    function j1(a, n) { ol = Ho = !0; var s = a.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n }

    function B1(a, n, s) { if ((s & 4194176) !== 0) { var u = n.lanes;
            u &= a.pendingLanes, s |= u, n.lanes = s, vo(a, s) } } var Pa = { readContext: yr, use: qo, useCallback: Gt, useContext: Gt, useEffect: Gt, useImperativeHandle: Gt, useLayoutEffect: Gt, useInsertionEffect: Gt, useMemo: Gt, useReducer: Gt, useRef: Gt, useState: Gt, useDebugValue: Gt, useDeferredValue: Gt, useTransition: Gt, useSyncExternalStore: Gt, useId: Gt };
    Pa.useCacheRefresh = Gt, Pa.useMemoCache = Gt, Pa.useHostTransitionStatus = Gt, Pa.useFormState = Gt, Pa.useActionState = Gt, Pa.useOptimistic = Gt; var xi = { readContext: yr, use: qo, useCallback: function(a, n) { return Mr().memoizedState = [a, n === void 0 ? null : n], a }, useContext: yr, useEffect: y1, useImperativeHandle: function(a, n, s) { s = s != null ? s.concat([a]) : null, Yo(4194308, 4, E1.bind(null, n, a), s) }, useLayoutEffect: function(a, n) { return Yo(4194308, 4, a, n) }, useInsertionEffect: function(a, n) { Yo(4, 2, a, n) }, useMemo: function(a, n) { var s = Mr();
            n = n === void 0 ? null : n; var u = a(); if (mi) { jr(!0); try { a() } finally { jr(!1) } } return s.memoizedState = [u, n], u }, useReducer: function(a, n, s) { var u = Mr(); if (s !== void 0) { var h = s(n); if (mi) { jr(!0); try { s(n) } finally { jr(!1) } } } else h = n; return u.memoizedState = u.baseState = h, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: h }, u.queue = a, a = a.dispatch = O4.bind(null, rt, a), [u.memoizedState, a] }, useRef: function(a) { var n = Mr(); return a = { current: a }, n.memoizedState = a }, useState: function(a) { a = x0(a); var n = a.queue,
                s = F1.bind(null, rt, n); return n.dispatch = s, [a.memoizedState, s] }, useDebugValue: v0, useDeferredValue: function(a, n) { var s = Mr(); return y0(s, a, n) }, useTransition: function() { var a = x0(!1); return a = N1.bind(null, rt, a.queue, !0, !1), Mr().memoizedState = a, [!1, a] }, useSyncExternalStore: function(a, n, s) { var u = rt,
                h = Mr(); if (ft) { if (s === void 0) throw Error(i(407));
                s = s() } else { if (s = n(), Ct === null) throw Error(i(349));
                (ut & 60) !== 0 || a1(u, n, s) }
            h.memoizedState = s; var y = { value: s, getSnapshot: n }; return h.queue = y, y1(i1.bind(null, u, y, a), [a]), u.flags |= 2048, ul(9, n1.bind(null, u, y, s, n), { destroy: void 0 }, null), s }, useId: function() { var a = Mr(),
                n = Ct.identifierPrefix; if (ft) { var s = Za,
                    u = Qa;
                s = (u & ~(1 << 32 - or(u) - 1)).toString(32) + s, n = ":" + n + "R" + s, s = Go++, 0 < s && (n += "H" + s.toString(32)), n += ":" } else s = _4++, n = ":" + n + "r" + s.toString(32) + ":"; return a.memoizedState = n }, useCacheRefresh: function() { return Mr().memoizedState = D4.bind(null, rt) } };
    xi.useMemoCache = d0, xi.useHostTransitionStatus = A0, xi.useFormState = m1, xi.useActionState = m1, xi.useOptimistic = function(a) { var n = Mr();
        n.memoizedState = n.baseState = a; var s = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return n.queue = s, n = E0.bind(null, rt, !0, s), s.dispatch = n, [a, n] }; var Dn = { readContext: yr, use: qo, useCallback: _1, useContext: yr, useEffect: g0, useImperativeHandle: w1, useInsertionEffect: b1, useLayoutEffect: A1, useMemo: T1, useReducer: Xo, useRef: v1, useState: function() { return Xo(Ja) }, useDebugValue: v0, useDeferredValue: function(a, n) { var s = Xt(); return S1(s, Et.memoizedState, a, n) }, useTransition: function() { var a = Xo(Ja)[0],
                n = Xt().memoizedState; return [typeof a == "boolean" ? a : us(a), n] }, useSyncExternalStore: r1, useId: O1 };
    Dn.useCacheRefresh = R1, Dn.useMemoCache = d0, Dn.useHostTransitionStatus = A0, Dn.useFormState = x1, Dn.useActionState = x1, Dn.useOptimistic = function(a, n) { var s = Xt(); return o1(s, Et, a, n) }; var pi = { readContext: yr, use: qo, useCallback: _1, useContext: yr, useEffect: g0, useImperativeHandle: w1, useInsertionEffect: b1, useLayoutEffect: A1, useMemo: T1, useReducer: m0, useRef: v1, useState: function() { return m0(Ja) }, useDebugValue: v0, useDeferredValue: function(a, n) { var s = Xt(); return Et === null ? y0(s, a, n) : S1(s, Et.memoizedState, a, n) }, useTransition: function() { var a = m0(Ja)[0],
                n = Xt().memoizedState; return [typeof a == "boolean" ? a : us(a), n] }, useSyncExternalStore: r1, useId: O1 };
    pi.useCacheRefresh = R1, pi.useMemoCache = d0, pi.useHostTransitionStatus = A0, pi.useFormState = g1, pi.useActionState = g1, pi.useOptimistic = function(a, n) { var s = Xt(); return Et !== null ? o1(s, Et, a, n) : (s.baseState = a, [a, s.queue.dispatch]) };

    function w0(a, n, s, u) { n = a.memoizedState, s = s(u, n), s = s == null ? n : U({}, n, s), a.memoizedState = s, a.lanes === 0 && (a.updateQueue.baseState = s) } var _0 = { isMounted: function(a) { return (a = a._reactInternals) ? se(a) === a : !1 }, enqueueSetState: function(a, n, s) { a = a._reactInternals; var u = Kr(),
                h = Fn(u);
            h.payload = n, s != null && (h.callback = s), n = jn(a, h, u), n !== null && (Cr(n, a, u), ms(n, a, u)) }, enqueueReplaceState: function(a, n, s) { a = a._reactInternals; var u = Kr(),
                h = Fn(u);
            h.tag = 1, h.payload = n, s != null && (h.callback = s), n = jn(a, h, u), n !== null && (Cr(n, a, u), ms(n, a, u)) }, enqueueForceUpdate: function(a, n) { a = a._reactInternals; var s = Kr(),
                u = Fn(s);
            u.tag = 2, n != null && (u.callback = n), n = jn(a, u, s), n !== null && (Cr(n, a, s), ms(n, a, s)) } };

    function k1(a, n, s, u, h, y, T) { return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(u, y, T) : n.prototype && n.prototype.isPureReactComponent ? !$l(s, u) || !$l(h, y) : !0 }

    function M1(a, n, s, u) { a = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, u), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, u), n.state !== a && _0.enqueueReplaceState(n, n.state, null) }

    function gi(a, n) { var s = n; if ("ref" in n) { s = {}; for (var u in n) u !== "ref" && (s[u] = n[u]) } if (a = a.defaultProps) { s === n && (s = U({}, s)); for (var h in a) s[h] === void 0 && (s[h] = a[h]) } return s } var Qo = typeof reportError == "function" ? reportError : function(a) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var n = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof a == "object" && a !== null && typeof a.message == "string" ? String(a.message) : String(a), error: a }); if (!window.dispatchEvent(n)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", a); return }
        console.error(a) };

    function L1(a) { Qo(a) }

    function U1(a) { console.error(a) }

    function P1(a) { Qo(a) }

    function Zo(a, n) { try { var s = a.onUncaughtError;
            s(n.value, { componentStack: n.stack }) } catch (u) { setTimeout(function() { throw u }) } }

    function z1(a, n, s) { try { var u = a.onCaughtError;
            u(s.value, { componentStack: s.stack, errorBoundary: n.tag === 1 ? n.stateNode : null }) } catch (h) { setTimeout(function() { throw h }) } }

    function T0(a, n, s) { return s = Fn(s), s.tag = 3, s.payload = { element: null }, s.callback = function() { Zo(a, n) }, s }

    function I1(a) { return a = Fn(a), a.tag = 3, a }

    function H1(a, n, s, u) { var h = s.type.getDerivedStateFromError; if (typeof h == "function") { var y = u.value;
            a.payload = function() { return h(y) }, a.callback = function() { z1(n, s, u) } } var T = s.stateNode;
        T !== null && typeof T.componentDidCatch == "function" && (a.callback = function() { z1(n, s, u), typeof h != "function" && (Pn === null ? Pn = new Set([this]) : Pn.add(this)); var P = u.stack;
            this.componentDidCatch(u.value, { componentStack: P !== null ? P : "" }) }) }

    function R4(a, n, s, u, h) { if (s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") { if (n = s.alternate, n !== null && hs(n, s, h, !0), s = ha.current, s !== null) { switch (s.tag) {
                    case 13:
                        return Ua === null ? sf() : s.alternate === null && Lt === 0 && (Lt = 3), s.flags &= -257, s.flags |= 65536, s.lanes = h, u === t0 ? s.flags |= 16384 : (n = s.updateQueue, n === null ? s.updateQueue = new Set([u]) : n.add(u), cf(a, u, h)), !1;
                    case 22:
                        return s.flags |= 65536, u === t0 ? s.flags |= 16384 : (n = s.updateQueue, n === null ? (n = { transitions: null, markerInstances: null, retryQueue: new Set([u]) }, s.updateQueue = n) : (s = n.retryQueue, s === null ? n.retryQueue = new Set([u]) : s.add(u)), cf(a, u, h)), !1 } throw Error(i(435, s.tag)) } return cf(a, u, h), sf(), !1 } if (ft) return n = ha.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = h, u !== e0 && (a = Error(i(422), { cause: u }), rs(ua(a, s)))) : (u !== e0 && (n = Error(i(423), { cause: u }), rs(ua(n, s))), a = a.current.alternate, a.flags |= 65536, h &= -h, a.lanes |= h, u = ua(u, s), h = T0(a.stateNode, u, h), z0(a, h), Lt !== 4 && (Lt = 2)), !1; var y = Error(i(520), { cause: u }); if (y = ua(y, s), Es === null ? Es = [y] : Es.push(y), Lt !== 4 && (Lt = 2), n === null) return !0;
        u = ua(u, s), s = n;
        do { switch (s.tag) {
                case 3:
                    return s.flags |= 65536, a = h & -h, s.lanes |= a, a = T0(s.stateNode, u, a), z0(s, a), !1;
                case 1:
                    if (n = s.type, y = s.stateNode, (s.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Pn === null || !Pn.has(y)))) return s.flags |= 65536, h &= -h, s.lanes |= h, h = I1(h), H1(h, a, s, u), z0(s, h), !1 }
            s = s.return } while (s !== null); return !1 } var G1 = Error(i(461)),
        tr = !1;

    function ur(a, n, s, u) { n.child = a === null ? Wh(n, null, s, u) : di(n, a.child, s, u) }

    function V1(a, n, s, u, h) { s = s.render; var y = n.ref; if ("ref" in u) { var T = {}; for (var P in u) P !== "ref" && (T[P] = u[P]) } else T = u; return yi(n), u = o0(a, n, s, T, y, h), P = c0(), a !== null && !tr ? (u0(a, n, h), en(a, n, h)) : (ft && P && $u(n), n.flags |= 1, ur(a, n, u, h), n.child) }

    function q1(a, n, s, u, h) { if (a === null) { var y = s.type; return typeof y == "function" && !W0(y) && y.defaultProps === void 0 && s.compare === null ? (n.tag = 15, n.type = y, X1(a, n, y, u, h)) : (a = rc(s.type, null, u, n, n.mode, h), a.ref = n.ref, a.return = n, n.child = a) } if (y = a.child, !B0(a, h)) { var T = y.memoizedProps; if (s = s.compare, s = s !== null ? s : $l, s(T, u) && a.ref === n.ref) return en(a, n, h) } return n.flags |= 1, a = Ln(y, u), a.ref = n.ref, a.return = n, n.child = a }

    function X1(a, n, s, u, h) { if (a !== null) { var y = a.memoizedProps; if ($l(y, u) && a.ref === n.ref)
                if (tr = !1, n.pendingProps = u = y, B0(a, h))(a.flags & 131072) !== 0 && (tr = !0);
                else return n.lanes = a.lanes, en(a, n, h) } return S0(a, n, s, u, h) }

    function Y1(a, n, s) { var u = n.pendingProps,
            h = u.children,
            y = (n.stateNode._pendingVisibility & 2) !== 0,
            T = a !== null ? a.memoizedState : null; if (ds(a, n), u.mode === "hidden" || y) { if ((n.flags & 128) !== 0) { if (u = T !== null ? T.baseLanes | s : s, a !== null) { for (h = n.child = a.child, y = 0; h !== null;) y = y | h.lanes | h.childLanes, h = h.sibling;
                    n.childLanes = y & ~u } else n.childLanes = 0, n.child = null; return W1(a, n, u, s) } if ((s & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, a !== null && Io(n, T !== null ? T.cachePool : null), T !== null ? Kh(n, T) : r0(), Qh(n);
            else return n.lanes = n.childLanes = 536870912, W1(a, n, T !== null ? T.baseLanes | s : s, s) } else T !== null ? (Io(n, T.cachePool), Kh(n, T), Nn(), n.memoizedState = null) : (a !== null && Io(n, null), r0(), Nn()); return ur(a, n, h, s), n.child }

    function W1(a, n, s, u) { var h = l0(); return h = h === null ? null : { parent: $t._currentValue, pool: h }, n.memoizedState = { baseLanes: s, cachePool: h }, a !== null && Io(n, null), r0(), Qh(n), a !== null && hs(a, n, u, !0), null }

    function ds(a, n) { var s = n.ref; if (s === null) a !== null && a.ref !== null && (n.flags |= 2097664);
        else { if (typeof s != "function" && typeof s != "object") throw Error(i(284));
            (a === null || a.ref !== s) && (n.flags |= 2097664) } }

    function S0(a, n, s, u, h) { return yi(n), s = o0(a, n, s, u, void 0, h), u = c0(), a !== null && !tr ? (u0(a, n, h), en(a, n, h)) : (ft && u && $u(n), n.flags |= 1, ur(a, n, s, h), n.child) }

    function K1(a, n, s, u, h, y) { return yi(n), n.updateQueue = null, s = t1(n, u, s, h), e1(a), u = c0(), a !== null && !tr ? (u0(a, n, y), en(a, n, y)) : (ft && u && $u(n), n.flags |= 1, ur(a, n, s, y), n.child) }

    function Q1(a, n, s, u, h) { if (yi(n), n.stateNode === null) { var y = tl,
                T = s.contextType;
            typeof T == "object" && T !== null && (y = yr(T)), y = new s(u, y), n.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = _0, n.stateNode = y, y._reactInternals = n, y = n.stateNode, y.props = u, y.state = n.memoizedState, y.refs = {}, U0(n), T = s.contextType, y.context = typeof T == "object" && T !== null ? yr(T) : tl, y.state = n.memoizedState, T = s.getDerivedStateFromProps, typeof T == "function" && (w0(n, s, T, u), y.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (T = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), T !== y.state && _0.enqueueReplaceState(y, y.state, null), ps(n, u, y, h), xs(), y.state = n.memoizedState), typeof y.componentDidMount == "function" && (n.flags |= 4194308), u = !0 } else if (a === null) { y = n.stateNode; var P = n.memoizedProps,
                J = gi(s, P);
            y.props = J; var oe = y.context,
                Ee = s.contextType;
            T = tl, typeof Ee == "object" && Ee !== null && (T = yr(Ee)); var Ce = s.getDerivedStateFromProps;
            Ee = typeof Ce == "function" || typeof y.getSnapshotBeforeUpdate == "function", P = n.pendingProps !== P, Ee || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (P || oe !== T) && M1(n, y, u, T), Rn = !1; var pe = n.memoizedState;
            y.state = pe, ps(n, u, y, h), xs(), oe = n.memoizedState, P || pe !== oe || Rn ? (typeof Ce == "function" && (w0(n, s, Ce, u), oe = n.memoizedState), (J = Rn || k1(n, s, J, u, pe, oe, T)) ? (Ee || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = u, n.memoizedState = oe), y.props = u, y.state = oe, y.context = T, u = J) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), u = !1) } else { y = n.stateNode, P0(a, n), T = n.memoizedProps, Ee = gi(s, T), y.props = Ee, Ce = n.pendingProps, pe = y.context, oe = s.contextType, J = tl, typeof oe == "object" && oe !== null && (J = yr(oe)), P = s.getDerivedStateFromProps, (oe = typeof P == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (T !== Ce || pe !== J) && M1(n, y, u, J), Rn = !1, pe = n.memoizedState, y.state = pe, ps(n, u, y, h), xs(); var be = n.memoizedState;
            T !== Ce || pe !== be || Rn || a !== null && a.dependencies !== null && $o(a.dependencies) ? (typeof P == "function" && (w0(n, s, P, u), be = n.memoizedState), (Ee = Rn || k1(n, s, Ee, u, pe, be, J) || a !== null && a.dependencies !== null && $o(a.dependencies)) ? (oe || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(u, be, J), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(u, be, J)), typeof y.componentDidUpdate == "function" && (n.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || T === a.memoizedProps && pe === a.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || T === a.memoizedProps && pe === a.memoizedState || (n.flags |= 1024), n.memoizedProps = u, n.memoizedState = be), y.props = u, y.state = be, y.context = J, u = Ee) : (typeof y.componentDidUpdate != "function" || T === a.memoizedProps && pe === a.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || T === a.memoizedProps && pe === a.memoizedState || (n.flags |= 1024), u = !1) } return y = u, ds(a, n), u = (n.flags & 128) !== 0, y || u ? (y = n.stateNode, s = u && typeof s.getDerivedStateFromError != "function" ? null : y.render(), n.flags |= 1, a !== null && u ? (n.child = di(n, a.child, null, h), n.child = di(n, null, s, h)) : ur(a, n, s, h), n.memoizedState = y.state, a = n.child) : a = en(a, n, h), a }

    function Z1(a, n, s, u) { return ts(), n.flags |= 256, ur(a, n, s, u), n.child } var N0 = { dehydrated: null, treeContext: null, retryLane: 0 };

    function C0(a) { return { baseLanes: a, cachePool: Jh() } }

    function D0(a, n, s) { return a = a !== null ? a.childLanes & ~s : 0, n && (a |= ga), a }

    function $1(a, n, s) { var u = n.pendingProps,
            h = !1,
            y = (n.flags & 128) !== 0,
            T; if ((T = y) || (T = a !== null && a.memoizedState === null ? !1 : (Zt.current & 2) !== 0), T && (h = !0, n.flags &= -129), T = (n.flags & 32) !== 0, n.flags &= -33, a === null) { if (ft) { if (h ? Sn(n) : Nn(), ft) { var P = cr,
                        J; if (J = P) { e: { for (J = P, P = La; J.nodeType !== 8;) { if (!P) { P = null; break e } if (J = Na(J.nextSibling), J === null) { P = null; break e } }
                            P = J }
                        P !== null ? (n.memoizedState = { dehydrated: P, treeContext: ci !== null ? { id: Qa, overflow: Za } : null, retryLane: 536870912 }, J = pa(18, null, null, 0), J.stateNode = P, J.return = n, n.child = J, Nr = n, cr = null, J = !0) : J = !1 }
                    J || fi(n) } if (P = n.memoizedState, P !== null && (P = P.dehydrated, P !== null)) return P.data === "$!" ? n.lanes = 16 : n.lanes = 536870912, null;
                $a(n) } return P = u.children, u = u.fallback, h ? (Nn(), h = n.mode, P = R0({ mode: "hidden", children: P }, h), u = Ai(u, h, s, null), P.return = n, u.return = n, P.sibling = u, n.child = P, h = n.child, h.memoizedState = C0(s), h.childLanes = D0(a, T, s), n.memoizedState = N0, u) : (Sn(n), O0(n, P)) } if (J = a.memoizedState, J !== null && (P = J.dehydrated, P !== null)) { if (y) n.flags & 256 ? (Sn(n), n.flags &= -257, n = F0(a, n, s)) : n.memoizedState !== null ? (Nn(), n.child = a.child, n.flags |= 128, n = null) : (Nn(), h = u.fallback, P = n.mode, u = R0({ mode: "visible", children: u.children }, P), h = Ai(h, P, s, null), h.flags |= 2, u.return = n, h.return = n, u.sibling = h, n.child = u, di(n, a.child, null, s), u = n.child, u.memoizedState = C0(s), u.childLanes = D0(a, T, s), n.memoizedState = N0, n = h);
            else if (Sn(n), P.data === "$!") { if (T = P.nextSibling && P.nextSibling.dataset, T) var oe = T.dgst;
                T = oe, u = Error(i(419)), u.stack = "", u.digest = T, rs({ value: u, source: null, stack: null }), n = F0(a, n, s) } else if (tr || hs(a, n, s, !1), T = (s & a.childLanes) !== 0, tr || T) { if (T = Ct, T !== null) { if (u = s & -s, (u & 42) !== 0) u = 1;
                    else switch (u) {
                        case 2:
                            u = 1; break;
                        case 8:
                            u = 4; break;
                        case 32:
                            u = 16; break;
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            u = 64; break;
                        case 268435456:
                            u = 134217728; break;
                        default:
                            u = 0 }
                    if (u = (u & (T.suspendedLanes | s)) !== 0 ? 0 : u, u !== 0 && u !== J.retryLane) throw J.retryLane = u, Tn(a, u), Cr(T, a, u), G1 }
                P.data === "$?" || sf(), n = F0(a, n, s) } else P.data === "$?" ? (n.flags |= 128, n.child = a.child, n = X4.bind(null, a), P._reactRetry = n, n = null) : (a = J.treeContext, cr = Na(P.nextSibling), Nr = n, ft = !0, Ta = null, La = !1, a !== null && (fa[da++] = Qa, fa[da++] = Za, fa[da++] = ci, Qa = a.id, Za = a.overflow, ci = n), n = O0(n, u.children), n.flags |= 4096); return n } return h ? (Nn(), h = u.fallback, P = n.mode, J = a.child, oe = J.sibling, u = Ln(J, { mode: "hidden", children: u.children }), u.subtreeFlags = J.subtreeFlags & 31457280, oe !== null ? h = Ln(oe, h) : (h = Ai(h, P, s, null), h.flags |= 2), h.return = n, u.return = n, u.sibling = h, n.child = u, u = h, h = n.child, P = a.child.memoizedState, P === null ? P = C0(s) : (J = P.cachePool, J !== null ? (oe = $t._currentValue, J = J.parent !== oe ? { parent: oe, pool: oe } : J) : J = Jh(), P = { baseLanes: P.baseLanes | s, cachePool: J }), h.memoizedState = P, h.childLanes = D0(a, T, s), n.memoizedState = N0, u) : (Sn(n), s = a.child, a = s.sibling, s = Ln(s, { mode: "visible", children: u.children }), s.return = n, s.sibling = null, a !== null && (T = n.deletions, T === null ? (n.deletions = [a], n.flags |= 16) : T.push(a)), n.child = s, n.memoizedState = null, s) }

    function O0(a, n) { return n = R0({ mode: "visible", children: n }, a.mode), n.return = a, a.child = n }

    function R0(a, n) { return _m(a, n, 0, null) }

    function F0(a, n, s) { return di(n, a.child, null, s), a = O0(n, n.pendingProps.children), a.flags |= 2, n.memoizedState = null, a }

    function J1(a, n, s) { a.lanes |= n; var u = a.alternate;
        u !== null && (u.lanes |= n), M0(a.return, n, s) }

    function j0(a, n, s, u, h) { var y = a.memoizedState;
        y === null ? a.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: u, tail: s, tailMode: h } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = u, y.tail = s, y.tailMode = h) }

    function em(a, n, s) { var u = n.pendingProps,
            h = u.revealOrder,
            y = u.tail; if (ur(a, n, u.children, s), u = Zt.current, (u & 2) !== 0) u = u & 1 | 2, n.flags |= 128;
        else { if (a !== null && (a.flags & 128) !== 0) e: for (a = n.child; a !== null;) { if (a.tag === 13) a.memoizedState !== null && J1(a, s, n);
                else if (a.tag === 19) J1(a, s, n);
                else if (a.child !== null) { a.child.return = a, a = a.child; continue } if (a === n) break e; for (; a.sibling === null;) { if (a.return === null || a.return === n) break e;
                    a = a.return }
                a.sibling.return = a.return, a = a.sibling }
            u &= 1 } switch (ye(Zt, u), h) {
            case "forwards":
                for (s = n.child, h = null; s !== null;) a = s.alternate, a !== null && zo(a) === null && (h = s), s = s.sibling;
                s = h, s === null ? (h = n.child, n.child = null) : (h = s.sibling, s.sibling = null), j0(n, !1, h, s, y); break;
            case "backwards":
                for (s = null, h = n.child, n.child = null; h !== null;) { if (a = h.alternate, a !== null && zo(a) === null) { n.child = h; break }
                    a = h.sibling, h.sibling = s, s = h, h = a }
                j0(n, !0, s, null, y); break;
            case "together":
                j0(n, !1, null, null, void 0); break;
            default:
                n.memoizedState = null } return n.child }

    function en(a, n, s) { if (a !== null && (n.dependencies = a.dependencies), Un |= n.lanes, (s & n.childLanes) === 0)
            if (a !== null) { if (hs(a, n, s, !1), (s & n.childLanes) === 0) return null } else return null;
        if (a !== null && n.child !== a.child) throw Error(i(153)); if (n.child !== null) { for (a = n.child, s = Ln(a, a.pendingProps), n.child = s, s.return = n; a.sibling !== null;) a = a.sibling, s = s.sibling = Ln(a, a.pendingProps), s.return = n;
            s.sibling = null } return n.child }

    function B0(a, n) { return (a.lanes & n) !== 0 ? !0 : (a = a.dependencies, !!(a !== null && $o(a))) }

    function F4(a, n, s) { switch (n.tag) {
            case 3:
                tt(n, n.stateNode.containerInfo), On(n, $t, a.memoizedState.cache), ts(); break;
            case 27:
            case 5:
                Oe(n); break;
            case 4:
                tt(n, n.stateNode.containerInfo); break;
            case 10:
                On(n, n.type, n.memoizedProps.value); break;
            case 13:
                var u = n.memoizedState; if (u !== null) return u.dehydrated !== null ? (Sn(n), n.flags |= 128, null) : (s & n.child.childLanes) !== 0 ? $1(a, n, s) : (Sn(n), a = en(a, n, s), a !== null ? a.sibling : null);
                Sn(n); break;
            case 19:
                var h = (a.flags & 128) !== 0; if (u = (s & n.childLanes) !== 0, u || (hs(a, n, s, !1), u = (s & n.childLanes) !== 0), h) { if (u) return em(a, n, s);
                    n.flags |= 128 } if (h = n.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), ye(Zt, Zt.current), u) break; return null;
            case 22:
            case 23:
                return n.lanes = 0, Y1(a, n, s);
            case 24:
                On(n, $t, a.memoizedState.cache) } return en(a, n, s) }

    function tm(a, n, s) { if (a !== null)
            if (a.memoizedProps !== n.pendingProps) tr = !0;
            else { if (!B0(a, s) && (n.flags & 128) === 0) return tr = !1, F4(a, n, s);
                tr = (a.flags & 131072) !== 0 }
        else tr = !1, ft && (n.flags & 1048576) !== 0 && Ph(n, ko, n.index); switch (n.lanes = 0, n.tag) {
            case 16:
                e: { a = n.pendingProps; var u = n.elementType,
                        h = u._init; if (u = h(u._payload), n.type = u, typeof u == "function") W0(u) ? (a = gi(u, a), n.tag = 1, n = Q1(null, n, u, a, s)) : (n.tag = 0, n = S0(null, n, u, a, s));
                    else { if (u != null) { if (h = u.$$typeof, h === A) { n.tag = 11, n = V1(null, n, u, a, s); break e } else if (h === S) { n.tag = 14, n = q1(null, n, u, a, s); break e } } throw n = N(u) || u, Error(i(306, n, "")) } }
                return n;
            case 0:
                return S0(a, n, n.type, n.pendingProps, s);
            case 1:
                return u = n.type, h = gi(u, n.pendingProps), Q1(a, n, u, h, s);
            case 3:
                e: { if (tt(n, n.stateNode.containerInfo), a === null) throw Error(i(387)); var y = n.pendingProps;h = n.memoizedState, u = h.element, P0(a, n), ps(n, y, null, s); var T = n.memoizedState; if (y = T.cache, On(n, $t, y), y !== h.cache && L0(n, [$t], s, !0), xs(), y = T.element, h.isDehydrated)
                        if (h = { element: y, isDehydrated: !1, cache: T.cache }, n.updateQueue.baseState = h, n.memoizedState = h, n.flags & 256) { n = Z1(a, n, y, s); break e } else if (y !== u) { u = ua(Error(i(424)), n), rs(u), n = Z1(a, n, y, s); break e } else
                        for (cr = Na(n.stateNode.containerInfo.firstChild), Nr = n, ft = !0, Ta = null, La = !0, s = Wh(n, null, y, s), n.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
                    else { if (ts(), y === u) { n = en(a, n, s); break e }
                        ur(a, n, y, s) }
                    n = n.child }
                return n;
            case 26:
                return ds(a, n), a === null ? (s = nx(n.type, null, n.pendingProps, null)) ? n.memoizedState = s : ft || (s = n.type, a = n.pendingProps, u = mc(st.current).createElement(s), u[z] = n, u[G] = a, fr(u, s, a), Fe(u), n.stateNode = u) : n.memoizedState = nx(n.type, a.memoizedProps, n.pendingProps, a.memoizedState), null;
            case 27:
                return Oe(n), a === null && ft && (u = n.stateNode = tx(n.type, n.pendingProps, st.current), Nr = n, La = !0, cr = Na(u.firstChild)), u = n.pendingProps.children, a !== null || ft ? ur(a, n, u, s) : n.child = di(n, null, u, s), ds(a, n), n.child;
            case 5:
                return a === null && ft && ((h = u = cr) && (u = oy(u, n.type, n.pendingProps, La), u !== null ? (n.stateNode = u, Nr = n, cr = Na(u.firstChild), La = !1, h = !0) : h = !1), h || fi(n)), Oe(n), h = n.type, y = n.pendingProps, T = a !== null ? a.memoizedProps : null, u = y.children, Af(h, y) ? u = null : T !== null && Af(h, T) && (n.flags |= 32), n.memoizedState !== null && (h = o0(a, n, T4, null, null, s), Rs._currentValue = h), ds(a, n), ur(a, n, u, s), n.child;
            case 6:
                return a === null && ft && ((a = s = cr) && (s = cy(s, n.pendingProps, La), s !== null ? (n.stateNode = s, Nr = n, cr = null, a = !0) : a = !1), a || fi(n)), null;
            case 13:
                return $1(a, n, s);
            case 4:
                return tt(n, n.stateNode.containerInfo), u = n.pendingProps, a === null ? n.child = di(n, null, u, s) : ur(a, n, u, s), n.child;
            case 11:
                return V1(a, n, n.type, n.pendingProps, s);
            case 7:
                return ur(a, n, n.pendingProps, s), n.child;
            case 8:
                return ur(a, n, n.pendingProps.children, s), n.child;
            case 12:
                return ur(a, n, n.pendingProps.children, s), n.child;
            case 10:
                return u = n.pendingProps, On(n, n.type, u.value), ur(a, n, u.children, s), n.child;
            case 9:
                return h = n.type._context, u = n.pendingProps.children, yi(n), h = yr(h), u = u(h), n.flags |= 1, ur(a, n, u, s), n.child;
            case 14:
                return q1(a, n, n.type, n.pendingProps, s);
            case 15:
                return X1(a, n, n.type, n.pendingProps, s);
            case 19:
                return em(a, n, s);
            case 22:
                return Y1(a, n, s);
            case 24:
                return yi(n), u = yr($t), a === null ? (h = l0(), h === null && (h = Ct, y = n0(), h.pooledCache = y, y.refCount++, y !== null && (h.pooledCacheLanes |= s), h = y), n.memoizedState = { parent: u, cache: h }, U0(n), On(n, $t, h)) : ((a.lanes & s) !== 0 && (P0(a, n), ps(n, null, null, s), xs()), h = a.memoizedState, y = n.memoizedState, h.parent !== u ? (h = { parent: u, cache: u }, n.memoizedState = h, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = h), On(n, $t, u)) : (u = y.cache, On(n, $t, u), u !== h.cache && L0(n, [$t], s, !0))), ur(a, n, n.pendingProps.children, s), n.child;
            case 29:
                throw n.pendingProps } throw Error(i(156, n.tag)) } var k0 = we(null),
        vi = null,
        tn = null;

    function On(a, n, s) { ye(k0, n._currentValue), n._currentValue = s }

    function rn(a) { a._currentValue = k0.current, Te(k0) }

    function M0(a, n, s) { for (; a !== null;) { var u = a.alternate; if ((a.childLanes & n) !== n ? (a.childLanes |= n, u !== null && (u.childLanes |= n)) : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n), a === s) break;
            a = a.return } }

    function L0(a, n, s, u) { var h = a.child; for (h !== null && (h.return = a); h !== null;) { var y = h.dependencies; if (y !== null) { var T = h.child;
                y = y.firstContext;
                e: for (; y !== null;) { var P = y;
                    y = h; for (var J = 0; J < n.length; J++)
                        if (P.context === n[J]) { y.lanes |= s, P = y.alternate, P !== null && (P.lanes |= s), M0(y.return, s, a), u || (T = null); break e }
                    y = P.next } } else if (h.tag === 18) { if (T = h.return, T === null) throw Error(i(341));
                T.lanes |= s, y = T.alternate, y !== null && (y.lanes |= s), M0(T, s, a), T = null } else T = h.child; if (T !== null) T.return = h;
            else
                for (T = h; T !== null;) { if (T === a) { T = null; break } if (h = T.sibling, h !== null) { h.return = T.return, T = h; break }
                    T = T.return }
            h = T } }

    function hs(a, n, s, u) { a = null; for (var h = n, y = !1; h !== null;) { if (!y) { if ((h.flags & 524288) !== 0) y = !0;
                else if ((h.flags & 262144) !== 0) break } if (h.tag === 10) { var T = h.alternate; if (T === null) throw Error(i(387)); if (T = T.memoizedProps, T !== null) { var P = h.type;
                    qr(h.pendingProps.value, T.value) || (a !== null ? a.push(P) : a = [P]) } } else if (h === Ye.current) { if (T = h.alternate, T === null) throw Error(i(387));
                T.memoizedState.memoizedState !== h.memoizedState.memoizedState && (a !== null ? a.push(Rs) : a = [Rs]) }
            h = h.return }
        a !== null && L0(n, a, s, u), n.flags |= 262144 }

    function $o(a) { for (a = a.firstContext; a !== null;) { if (!qr(a.context._currentValue, a.memoizedValue)) return !0;
            a = a.next } return !1 }

    function yi(a) { vi = a, tn = null, a = a.dependencies, a !== null && (a.firstContext = null) }

    function yr(a) { return rm(vi, a) }

    function Jo(a, n) { return vi === null && yi(a), rm(a, n) }

    function rm(a, n) { var s = n._currentValue; if (n = { context: n, memoizedValue: s, next: null }, tn === null) { if (a === null) throw Error(i(308));
            tn = n, a.dependencies = { lanes: 0, firstContext: n }, a.flags |= 524288 } else tn = tn.next = n; return s } var Rn = !1;

    function U0(a) { a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null } }

    function P0(a, n) { a = a.updateQueue, n.updateQueue === a && (n.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, callbacks: null }) }

    function Fn(a) { return { lane: a, tag: 0, payload: null, callback: null, next: null } }

    function jn(a, n, s) { var u = a.updateQueue; if (u === null) return null; if (u = u.shared, (kt & 2) !== 0) { var h = u.pending; return h === null ? n.next = n : (n.next = h.next, h.next = n), u.pending = n, n = jo(a), Lh(a, null, s), n } return Fo(a, u, n, s), jo(a) }

    function ms(a, n, s) { if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194176) !== 0)) { var u = n.lanes;
            u &= a.pendingLanes, s |= u, n.lanes = s, vo(a, s) } }

    function z0(a, n) { var s = a.updateQueue,
            u = a.alternate; if (u !== null && (u = u.updateQueue, s === u)) { var h = null,
                y = null; if (s = s.firstBaseUpdate, s !== null) { do { var T = { lane: s.lane, tag: s.tag, payload: s.payload, callback: null, next: null };
                    y === null ? h = y = T : y = y.next = T, s = s.next } while (s !== null);
                y === null ? h = y = n : y = y.next = n } else h = y = n;
            s = { baseState: u.baseState, firstBaseUpdate: h, lastBaseUpdate: y, shared: u.shared, callbacks: u.callbacks }, a.updateQueue = s; return }
        a = s.lastBaseUpdate, a === null ? s.firstBaseUpdate = n : a.next = n, s.lastBaseUpdate = n } var I0 = !1;

    function xs() { if (I0) { var a = sl; if (a !== null) throw a } }

    function ps(a, n, s, u) { I0 = !1; var h = a.updateQueue;
        Rn = !1; var y = h.firstBaseUpdate,
            T = h.lastBaseUpdate,
            P = h.shared.pending; if (P !== null) { h.shared.pending = null; var J = P,
                oe = J.next;
            J.next = null, T === null ? y = oe : T.next = oe, T = J; var Ee = a.alternate;
            Ee !== null && (Ee = Ee.updateQueue, P = Ee.lastBaseUpdate, P !== T && (P === null ? Ee.firstBaseUpdate = oe : P.next = oe, Ee.lastBaseUpdate = J)) } if (y !== null) { var Ce = h.baseState;
            T = 0, Ee = oe = J = null, P = y;
            do { var pe = P.lane & -536870913,
                    be = pe !== P.lane; if (be ? (ut & pe) === pe : (u & pe) === pe) { pe !== 0 && pe === ll && (I0 = !0), Ee !== null && (Ee = Ee.next = { lane: 0, tag: P.tag, payload: P.payload, callback: null, next: null });
                    e: { var He = a,
                            Ze = P;pe = n; var Ut = s; switch (Ze.tag) {
                            case 1:
                                if (He = Ze.payload, typeof He == "function") { Ce = He.call(Ut, Ce, pe); break e }
                                Ce = He; break e;
                            case 3:
                                He.flags = He.flags & -65537 | 128;
                            case 0:
                                if (He = Ze.payload, pe = typeof He == "function" ? He.call(Ut, Ce, pe) : He, pe == null) break e;
                                Ce = U({}, Ce, pe); break e;
                            case 2:
                                Rn = !0 } }
                    pe = P.callback, pe !== null && (a.flags |= 64, be && (a.flags |= 8192), be = h.callbacks, be === null ? h.callbacks = [pe] : be.push(pe)) } else be = { lane: pe, tag: P.tag, payload: P.payload, callback: P.callback, next: null }, Ee === null ? (oe = Ee = be, J = Ce) : Ee = Ee.next = be, T |= pe; if (P = P.next, P === null) { if (P = h.shared.pending, P === null) break;
                    be = P, P = be.next, be.next = null, h.lastBaseUpdate = be, h.shared.pending = null } } while (!0);
            Ee === null && (J = Ce), h.baseState = J, h.firstBaseUpdate = oe, h.lastBaseUpdate = Ee, y === null && (h.shared.lanes = 0), Un |= T, a.lanes = T, a.memoizedState = Ce } }

    function am(a, n) { if (typeof a != "function") throw Error(i(191, a));
        a.call(n) }

    function nm(a, n) { var s = a.callbacks; if (s !== null)
            for (a.callbacks = null, a = 0; a < s.length; a++) am(s[a], n) }

    function gs(a, n) { try { var s = n.updateQueue,
                u = s !== null ? s.lastEffect : null; if (u !== null) { var h = u.next;
                s = h;
                do { if ((s.tag & a) === a) { u = void 0; var y = s.create,
                            T = s.inst;
                        u = y(), T.destroy = u }
                    s = s.next } while (s !== h) } } catch (P) { St(n, n.return, P) } }

    function Bn(a, n, s) { try { var u = n.updateQueue,
                h = u !== null ? u.lastEffect : null; if (h !== null) { var y = h.next;
                u = y;
                do { if ((u.tag & a) === a) { var T = u.inst,
                            P = T.destroy; if (P !== void 0) { T.destroy = void 0, h = n; var J = s; try { P() } catch (oe) { St(h, J, oe) } } }
                    u = u.next } while (u !== y) } } catch (oe) { St(n, n.return, oe) } }

    function im(a) { var n = a.updateQueue; if (n !== null) { var s = a.stateNode; try { nm(n, s) } catch (u) { St(a, a.return, u) } } }

    function lm(a, n, s) { s.props = gi(a.type, a.memoizedProps), s.state = a.memoizedState; try { s.componentWillUnmount() } catch (u) { St(a, n, u) } }

    function bi(a, n) { try { var s = a.ref; if (s !== null) { var u = a.stateNode; switch (a.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var h = u; break;
                    default:
                        h = u }
                typeof s == "function" ? a.refCleanup = s(h) : s.current = h } } catch (y) { St(a, n, y) } }

    function Xr(a, n) { var s = a.ref,
            u = a.refCleanup; if (s !== null)
            if (typeof u == "function") try { u() } catch (h) { St(a, n, h) } finally { a.refCleanup = null, a = a.alternate, a != null && (a.refCleanup = null) } else if (typeof s == "function") try { s(null) } catch (h) { St(a, n, h) } else s.current = null }

    function sm(a) { var n = a.type,
            s = a.memoizedProps,
            u = a.stateNode; try { e: switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    s.autoFocus && u.focus(); break e;
                case "img":
                    s.src ? u.src = s.src : s.srcSet && (u.srcset = s.srcSet) } }
        catch (h) { St(a, a.return, h) } }

    function om(a, n, s) { try { var u = a.stateNode;
            ay(u, a.type, s, n), u[G] = n } catch (h) { St(a, a.return, h) } }

    function cm(a) { return a.tag === 5 || a.tag === 3 || a.tag === 26 || a.tag === 27 || a.tag === 4 }

    function H0(a) { e: for (;;) { for (; a.sibling === null;) { if (a.return === null || cm(a.return)) return null;
                a = a.return } for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 27 && a.tag !== 18;) { if (a.flags & 2 || a.child === null || a.tag === 4) continue e;
                a.child.return = a, a = a.child } if (!(a.flags & 2)) return a.stateNode } }

    function G0(a, n, s) { var u = a.tag; if (u === 5 || u === 6) a = a.stateNode, n ? s.nodeType === 8 ? s.parentNode.insertBefore(a, n) : s.insertBefore(a, n) : (s.nodeType === 8 ? (n = s.parentNode, n.insertBefore(a, s)) : (n = s, n.appendChild(a)), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = hc));
        else if (u !== 4 && u !== 27 && (a = a.child, a !== null))
            for (G0(a, n, s), a = a.sibling; a !== null;) G0(a, n, s), a = a.sibling }

    function ec(a, n, s) { var u = a.tag; if (u === 5 || u === 6) a = a.stateNode, n ? s.insertBefore(a, n) : s.appendChild(a);
        else if (u !== 4 && u !== 27 && (a = a.child, a !== null))
            for (ec(a, n, s), a = a.sibling; a !== null;) ec(a, n, s), a = a.sibling } var an = !1,
        Mt = !1,
        V0 = !1,
        um = typeof WeakSet == "function" ? WeakSet : Set,
        rr = null,
        fm = !1;

    function j4(a, n) { if (a = a.containerInfo, yf = bc, a = Ch(a), Xu(a)) { if ("selectionStart" in a) var s = { start: a.selectionStart, end: a.selectionEnd };
            else e: { s = (s = a.ownerDocument) && s.defaultView || window; var u = s.getSelection && s.getSelection(); if (u && u.rangeCount !== 0) { s = u.anchorNode; var h = u.anchorOffset,
                        y = u.focusNode;
                    u = u.focusOffset; try { s.nodeType, y.nodeType } catch { s = null; break e } var T = 0,
                        P = -1,
                        J = -1,
                        oe = 0,
                        Ee = 0,
                        Ce = a,
                        pe = null;
                    t: for (;;) { for (var be; Ce !== s || h !== 0 && Ce.nodeType !== 3 || (P = T + h), Ce !== y || u !== 0 && Ce.nodeType !== 3 || (J = T + u), Ce.nodeType === 3 && (T += Ce.nodeValue.length), (be = Ce.firstChild) !== null;) pe = Ce, Ce = be; for (;;) { if (Ce === a) break t; if (pe === s && ++oe === h && (P = T), pe === y && ++Ee === u && (J = T), (be = Ce.nextSibling) !== null) break;
                            Ce = pe, pe = Ce.parentNode }
                        Ce = be }
                    s = P === -1 || J === -1 ? null : { start: P, end: J } } else s = null }
            s = s || { start: 0, end: 0 } } else s = null; for (bf = { focusedElem: a, selectionRange: s }, bc = !1, rr = n; rr !== null;)
            if (n = rr, a = n.child, (n.subtreeFlags & 1028) !== 0 && a !== null) a.return = n, rr = a;
            else
                for (; rr !== null;) { switch (n = rr, y = n.alternate, a = n.flags, n.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((a & 1024) !== 0 && y !== null) { a = void 0, s = n, h = y.memoizedProps, y = y.memoizedState, u = s.stateNode; try { var He = gi(s.type, h, s.elementType === s.type);
                                    a = u.getSnapshotBeforeUpdate(He, y), u.__reactInternalSnapshotBeforeUpdate = a } catch (Ze) { St(s, s.return, Ze) } } break;
                        case 3:
                            if ((a & 1024) !== 0) { if (a = n.stateNode.containerInfo, s = a.nodeType, s === 9) _f(a);
                                else if (s === 1) switch (a.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        _f(a); break;
                                    default:
                                        a.textContent = "" } } break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((a & 1024) !== 0) throw Error(i(163)) } if (a = n.sibling, a !== null) { a.return = n.return, rr = a; break }
                    rr = n.return }
            return He = fm, fm = !1, He }

    function dm(a, n, s) { var u = s.flags; switch (s.tag) {
            case 0:
            case 11:
            case 15:
                ln(a, s), u & 4 && gs(5, s); break;
            case 1:
                if (ln(a, s), u & 4)
                    if (a = s.stateNode, n === null) try { a.componentDidMount() } catch (P) { St(s, s.return, P) } else { var h = gi(s.type, n.memoizedProps);
                        n = n.memoizedState; try { a.componentDidUpdate(h, n, a.__reactInternalSnapshotBeforeUpdate) } catch (P) { St(s, s.return, P) } }
                    u & 64 && im(s), u & 512 && bi(s, s.return); break;
            case 3:
                if (ln(a, s), u & 64 && (u = s.updateQueue, u !== null)) { if (a = null, s.child !== null) switch (s.child.tag) {
                        case 27:
                        case 5:
                            a = s.child.stateNode; break;
                        case 1:
                            a = s.child.stateNode }
                    try { nm(u, a) } catch (P) { St(s, s.return, P) } } break;
            case 26:
                ln(a, s), u & 512 && bi(s, s.return); break;
            case 27:
            case 5:
                ln(a, s), n === null && u & 4 && sm(s), u & 512 && bi(s, s.return); break;
            case 12:
                ln(a, s); break;
            case 13:
                ln(a, s), u & 4 && xm(a, s); break;
            case 22:
                if (h = s.memoizedState !== null || an, !h) { n = n !== null && n.memoizedState !== null || Mt; var y = an,
                        T = Mt;
                    an = h, (Mt = n) && !T ? kn(a, s, (s.subtreeFlags & 8772) !== 0) : ln(a, s), an = y, Mt = T }
                u & 512 && (s.memoizedProps.mode === "manual" ? bi(s, s.return) : Xr(s, s.return)); break;
            default:
                ln(a, s) } }

    function hm(a) { var n = a.alternate;
        n !== null && (a.alternate = null, hm(n)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (n = a.stateNode, n !== null && xe(n)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null } var Yt = null,
        Yr = !1;

    function nn(a, n, s) { for (s = s.child; s !== null;) mm(a, n, s), s = s.sibling }

    function mm(a, n, s) { if (Tt && typeof Tt.onCommitFiberUnmount == "function") try { Tt.onCommitFiberUnmount(er, s) } catch {}
        switch (s.tag) {
            case 26:
                Mt || Xr(s, n), nn(a, n, s), s.memoizedState ? s.memoizedState.count-- : s.stateNode && (s = s.stateNode, s.parentNode.removeChild(s)); break;
            case 27:
                Mt || Xr(s, n); var u = Yt,
                    h = Yr; for (Yt = s.stateNode, nn(a, n, s), s = s.stateNode, n = s.attributes; n.length;) s.removeAttributeNode(n[0]);
                xe(s), Yt = u, Yr = h; break;
            case 5:
                Mt || Xr(s, n);
            case 6:
                h = Yt; var y = Yr; if (Yt = null, nn(a, n, s), Yt = h, Yr = y, Yt !== null)
                    if (Yr) try { a = Yt, u = s.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(u) : a.removeChild(u) } catch (T) { St(s, n, T) } else try { Yt.removeChild(s.stateNode) } catch (T) { St(s, n, T) }
                    break;
            case 18:
                Yt !== null && (Yr ? (n = Yt, s = s.stateNode, n.nodeType === 8 ? wf(n.parentNode, s) : n.nodeType === 1 && wf(n, s), ks(n)) : wf(Yt, s.stateNode)); break;
            case 4:
                u = Yt, h = Yr, Yt = s.stateNode.containerInfo, Yr = !0, nn(a, n, s), Yt = u, Yr = h; break;
            case 0:
            case 11:
            case 14:
            case 15:
                Mt || Bn(2, s, n), Mt || Bn(4, s, n), nn(a, n, s); break;
            case 1:
                Mt || (Xr(s, n), u = s.stateNode, typeof u.componentWillUnmount == "function" && lm(s, n, u)), nn(a, n, s); break;
            case 21:
                nn(a, n, s); break;
            case 22:
                Mt || Xr(s, n), Mt = (u = Mt) || s.memoizedState !== null, nn(a, n, s), Mt = u; break;
            default:
                nn(a, n, s) } }

    function xm(a, n) { if (n.memoizedState === null && (a = n.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null)))) try { ks(a) } catch (s) { St(n, n.return, s) } }

    function B4(a) { switch (a.tag) {
            case 13:
            case 19:
                var n = a.stateNode; return n === null && (n = a.stateNode = new um), n;
            case 22:
                return a = a.stateNode, n = a._retryCache, n === null && (n = a._retryCache = new um), n;
            default:
                throw Error(i(435, a.tag)) } }

    function q0(a, n) { var s = B4(a);
        n.forEach(function(u) { var h = Y4.bind(null, a, u);
            s.has(u) || (s.add(u), u.then(h, h)) }) }

    function ma(a, n) { var s = n.deletions; if (s !== null)
            for (var u = 0; u < s.length; u++) { var h = s[u],
                    y = a,
                    T = n,
                    P = T;
                e: for (; P !== null;) { switch (P.tag) {
                        case 27:
                        case 5:
                            Yt = P.stateNode, Yr = !1; break e;
                        case 3:
                            Yt = P.stateNode.containerInfo, Yr = !0; break e;
                        case 4:
                            Yt = P.stateNode.containerInfo, Yr = !0; break e }
                    P = P.return }
                if (Yt === null) throw Error(i(160));
                mm(y, T, h), Yt = null, Yr = !1, y = h.alternate, y !== null && (y.return = null), h.return = null }
        if (n.subtreeFlags & 13878)
            for (n = n.child; n !== null;) pm(n, a), n = n.sibling } var Sa = null;

    function pm(a, n) { var s = a.alternate,
            u = a.flags; switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ma(n, a), xa(a), u & 4 && (Bn(3, a, a.return), gs(3, a), Bn(5, a, a.return)); break;
            case 1:
                ma(n, a), xa(a), u & 512 && (Mt || s === null || Xr(s, s.return)), u & 64 && an && (a = a.updateQueue, a !== null && (u = a.callbacks, u !== null && (s = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = s === null ? u : s.concat(u)))); break;
            case 26:
                var h = Sa; if (ma(n, a), xa(a), u & 512 && (Mt || s === null || Xr(s, s.return)), u & 4) { var y = s !== null ? s.memoizedState : null; if (u = a.memoizedState, s === null)
                        if (u === null)
                            if (a.stateNode === null) { e: { u = a.type, s = a.memoizedProps, h = h.ownerDocument || h;t: switch (u) {
                                        case "title":
                                            y = h.getElementsByTagName("title")[0], (!y || y[he] || y[z] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = h.createElement(u), h.head.insertBefore(y, h.querySelector("head > title"))), fr(y, u, s), y[z] = a, Fe(y), u = y; break e;
                                        case "link":
                                            var T = sx("link", "href", h).get(u + (s.href || "")); if (T) { for (var P = 0; P < T.length; P++)
                                                    if (y = T[P], y.getAttribute("href") === (s.href == null ? null : s.href) && y.getAttribute("rel") === (s.rel == null ? null : s.rel) && y.getAttribute("title") === (s.title == null ? null : s.title) && y.getAttribute("crossorigin") === (s.crossOrigin == null ? null : s.crossOrigin)) { T.splice(P, 1); break t } }
                                            y = h.createElement(u), fr(y, u, s), h.head.appendChild(y); break;
                                        case "meta":
                                            if (T = sx("meta", "content", h).get(u + (s.content || ""))) { for (P = 0; P < T.length; P++)
                                                    if (y = T[P], y.getAttribute("content") === (s.content == null ? null : "" + s.content) && y.getAttribute("name") === (s.name == null ? null : s.name) && y.getAttribute("property") === (s.property == null ? null : s.property) && y.getAttribute("http-equiv") === (s.httpEquiv == null ? null : s.httpEquiv) && y.getAttribute("charset") === (s.charSet == null ? null : s.charSet)) { T.splice(P, 1); break t } }
                                            y = h.createElement(u), fr(y, u, s), h.head.appendChild(y); break;
                                        default:
                                            throw Error(i(468, u)) }
                                    y[z] = a, Fe(y), u = y }
                                a.stateNode = u }
                            else ox(h, a.type, a.stateNode);
                    else a.stateNode = lx(h, u, a.memoizedProps);
                    else y !== u ? (y === null ? s.stateNode !== null && (s = s.stateNode, s.parentNode.removeChild(s)) : y.count--, u === null ? ox(h, a.type, a.stateNode) : lx(h, u, a.memoizedProps)) : u === null && a.stateNode !== null && om(a, a.memoizedProps, s.memoizedProps) } break;
            case 27:
                if (u & 4 && a.alternate === null) { h = a.stateNode, y = a.memoizedProps; try { for (var J = h.firstChild; J;) { var oe = J.nextSibling,
                                Ee = J.nodeName;
                            J[he] || Ee === "HEAD" || Ee === "BODY" || Ee === "SCRIPT" || Ee === "STYLE" || Ee === "LINK" && J.rel.toLowerCase() === "stylesheet" || h.removeChild(J), J = oe } for (var Ce = a.type, pe = h.attributes; pe.length;) h.removeAttributeNode(pe[0]);
                        fr(h, Ce, y), h[z] = a, h[G] = y } catch (He) { St(a, a.return, He) } }
            case 5:
                if (ma(n, a), xa(a), u & 512 && (Mt || s === null || Xr(s, s.return)), a.flags & 32) { h = a.stateNode; try { Wi(h, "") } catch (He) { St(a, a.return, He) } }
                u & 4 && a.stateNode != null && (h = a.memoizedProps, om(a, h, s !== null ? s.memoizedProps : h)), u & 1024 && (V0 = !0); break;
            case 6:
                if (ma(n, a), xa(a), u & 4) { if (a.stateNode === null) throw Error(i(162));
                    u = a.memoizedProps, s = a.stateNode; try { s.nodeValue = u } catch (He) { St(a, a.return, He) } } break;
            case 3:
                if (gc = null, h = Sa, Sa = xc(n.containerInfo), ma(n, a), Sa = h, xa(a), u & 4 && s !== null && s.memoizedState.isDehydrated) try { ks(n.containerInfo) } catch (He) { St(a, a.return, He) }
                V0 && (V0 = !1, gm(a)); break;
            case 4:
                u = Sa, Sa = xc(a.stateNode.containerInfo), ma(n, a), xa(a), Sa = u; break;
            case 12:
                ma(n, a), xa(a); break;
            case 13:
                ma(n, a), xa(a), a.child.flags & 8192 && a.memoizedState !== null != (s !== null && s.memoizedState !== null) && (ef = ae()), u & 4 && (u = a.updateQueue, u !== null && (a.updateQueue = null, q0(a, u))); break;
            case 22:
                if (u & 512 && (Mt || s === null || Xr(s, s.return)), J = a.memoizedState !== null, oe = s !== null && s.memoizedState !== null, Ee = an, Ce = Mt, an = Ee || J, Mt = Ce || oe, ma(n, a), Mt = Ce, an = Ee, xa(a), n = a.stateNode, n._current = a, n._visibility &= -3, n._visibility |= n._pendingVisibility & 2, u & 8192 && (n._visibility = J ? n._visibility & -2 : n._visibility | 1, J && (n = an || Mt, s === null || oe || n || fl(a)), a.memoizedProps === null || a.memoizedProps.mode !== "manual")) e: for (s = null, n = a;;) { if (n.tag === 5 || n.tag === 26 || n.tag === 27) { if (s === null) { oe = s = n; try { if (h = oe.stateNode, J) y = h.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else { T = oe.stateNode, P = oe.memoizedProps.style; var be = P != null && P.hasOwnProperty("display") ? P.display : null;
                                    T.style.display = be == null || typeof be == "boolean" ? "" : ("" + be).trim() } } catch (He) { St(oe, oe.return, He) } } } else if (n.tag === 6) { if (s === null) { oe = n; try { oe.stateNode.nodeValue = J ? "" : oe.memoizedProps } catch (He) { St(oe, oe.return, He) } } } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === a) && n.child !== null) { n.child.return = n, n = n.child; continue } if (n === a) break e; for (; n.sibling === null;) { if (n.return === null || n.return === a) break e;
                        s === n && (s = null), n = n.return }
                    s === n && (s = null), n.sibling.return = n.return, n = n.sibling }
                u & 4 && (u = a.updateQueue, u !== null && (s = u.retryQueue, s !== null && (u.retryQueue = null, q0(a, s)))); break;
            case 19:
                ma(n, a), xa(a), u & 4 && (u = a.updateQueue, u !== null && (a.updateQueue = null, q0(a, u))); break;
            case 21:
                break;
            default:
                ma(n, a), xa(a) } }

    function xa(a) { var n = a.flags; if (n & 2) { try { if (a.tag !== 27) { e: { for (var s = a.return; s !== null;) { if (cm(s)) { var u = s; break e }
                            s = s.return } throw Error(i(160)) } switch (u.tag) {
                        case 27:
                            var h = u.stateNode,
                                y = H0(a);
                            ec(a, y, h); break;
                        case 5:
                            var T = u.stateNode;
                            u.flags & 32 && (Wi(T, ""), u.flags &= -33); var P = H0(a);
                            ec(a, P, T); break;
                        case 3:
                        case 4:
                            var J = u.stateNode.containerInfo,
                                oe = H0(a);
                            G0(a, oe, J); break;
                        default:
                            throw Error(i(161)) } } } catch (Ee) { St(a, a.return, Ee) }
            a.flags &= -3 }
        n & 4096 && (a.flags &= -4097) }

    function gm(a) { if (a.subtreeFlags & 1024)
            for (a = a.child; a !== null;) { var n = a;
                gm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), a = a.sibling } }

    function ln(a, n) { if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null;) dm(a, n.alternate, n), n = n.sibling }

    function fl(a) { for (a = a.child; a !== null;) { var n = a; switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Bn(4, n, n.return), fl(n); break;
                case 1:
                    Xr(n, n.return); var s = n.stateNode;
                    typeof s.componentWillUnmount == "function" && lm(n, n.return, s), fl(n); break;
                case 26:
                case 27:
                case 5:
                    Xr(n, n.return), fl(n); break;
                case 22:
                    Xr(n, n.return), n.memoizedState === null && fl(n); break;
                default:
                    fl(n) }
            a = a.sibling } }

    function kn(a, n, s) { for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) { var u = n.alternate,
                h = a,
                y = n,
                T = y.flags; switch (y.tag) {
                case 0:
                case 11:
                case 15:
                    kn(h, y, s), gs(4, y); break;
                case 1:
                    if (kn(h, y, s), u = y, h = u.stateNode, typeof h.componentDidMount == "function") try { h.componentDidMount() } catch (oe) { St(u, u.return, oe) }
                    if (u = y, h = u.updateQueue, h !== null) { var P = u.stateNode; try { var J = h.shared.hiddenCallbacks; if (J !== null)
                                for (h.shared.hiddenCallbacks = null, h = 0; h < J.length; h++) am(J[h], P) } catch (oe) { St(u, u.return, oe) } }
                    s && T & 64 && im(y), bi(y, y.return); break;
                case 26:
                case 27:
                case 5:
                    kn(h, y, s), s && u === null && T & 4 && sm(y), bi(y, y.return); break;
                case 12:
                    kn(h, y, s); break;
                case 13:
                    kn(h, y, s), s && T & 4 && xm(h, y); break;
                case 22:
                    y.memoizedState === null && kn(h, y, s), bi(y, y.return); break;
                default:
                    kn(h, y, s) }
            n = n.sibling } }

    function X0(a, n) { var s = null;
        a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), a = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), a !== s && (a != null && a.refCount++, s != null && ss(s)) }

    function Y0(a, n) { a = null, n.alternate !== null && (a = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== a && (n.refCount++, a != null && ss(a)) }

    function Mn(a, n, s, u) { if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) vm(a, n, s, u), n = n.sibling }

    function vm(a, n, s, u) { var h = n.flags; switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Mn(a, n, s, u), h & 2048 && gs(9, n); break;
            case 3:
                Mn(a, n, s, u), h & 2048 && (a = null, n.alternate !== null && (a = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== a && (n.refCount++, a != null && ss(a))); break;
            case 12:
                if (h & 2048) { Mn(a, n, s, u), a = n.stateNode; try { var y = n.memoizedProps,
                            T = y.id,
                            P = y.onPostCommit;
                        typeof P == "function" && P(T, n.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0) } catch (J) { St(n, n.return, J) } } else Mn(a, n, s, u); break;
            case 23:
                break;
            case 22:
                y = n.stateNode, n.memoizedState !== null ? y._visibility & 4 ? Mn(a, n, s, u) : vs(a, n) : y._visibility & 4 ? Mn(a, n, s, u) : (y._visibility |= 4, dl(a, n, s, u, (n.subtreeFlags & 10256) !== 0)), h & 2048 && X0(n.alternate, n); break;
            case 24:
                Mn(a, n, s, u), h & 2048 && Y0(n.alternate, n); break;
            default:
                Mn(a, n, s, u) } }

    function dl(a, n, s, u, h) { for (h = h && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) { var y = a,
                T = n,
                P = s,
                J = u,
                oe = T.flags; switch (T.tag) {
                case 0:
                case 11:
                case 15:
                    dl(y, T, P, J, h), gs(8, T); break;
                case 23:
                    break;
                case 22:
                    var Ee = T.stateNode;
                    T.memoizedState !== null ? Ee._visibility & 4 ? dl(y, T, P, J, h) : vs(y, T) : (Ee._visibility |= 4, dl(y, T, P, J, h)), h && oe & 2048 && X0(T.alternate, T); break;
                case 24:
                    dl(y, T, P, J, h), h && oe & 2048 && Y0(T.alternate, T); break;
                default:
                    dl(y, T, P, J, h) }
            n = n.sibling } }

    function vs(a, n) { if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) { var s = a,
                    u = n,
                    h = u.flags; switch (u.tag) {
                    case 22:
                        vs(s, u), h & 2048 && X0(u.alternate, u); break;
                    case 24:
                        vs(s, u), h & 2048 && Y0(u.alternate, u); break;
                    default:
                        vs(s, u) }
                n = n.sibling } } var ys = 8192;

    function hl(a) { if (a.subtreeFlags & ys)
            for (a = a.child; a !== null;) ym(a), a = a.sibling }

    function ym(a) { switch (a.tag) {
            case 26:
                hl(a), a.flags & ys && a.memoizedState !== null && Ey(Sa, a.memoizedState, a.memoizedProps); break;
            case 5:
                hl(a); break;
            case 3:
            case 4:
                var n = Sa;
                Sa = xc(a.stateNode.containerInfo), hl(a), Sa = n; break;
            case 22:
                a.memoizedState === null && (n = a.alternate, n !== null && n.memoizedState !== null ? (n = ys, ys = 16777216, hl(a), ys = n) : hl(a)); break;
            default:
                hl(a) } }

    function bm(a) { var n = a.alternate; if (n !== null && (a = n.child, a !== null)) { n.child = null;
            do n = a.sibling, a.sibling = null, a = n; while (a !== null) } }

    function bs(a) { var n = a.deletions; if ((a.flags & 16) !== 0) { if (n !== null)
                for (var s = 0; s < n.length; s++) { var u = n[s];
                    rr = u, Em(u, a) }
            bm(a) } if (a.subtreeFlags & 10256)
            for (a = a.child; a !== null;) Am(a), a = a.sibling }

    function Am(a) { switch (a.tag) {
            case 0:
            case 11:
            case 15:
                bs(a), a.flags & 2048 && Bn(9, a, a.return); break;
            case 3:
                bs(a); break;
            case 12:
                bs(a); break;
            case 22:
                var n = a.stateNode;
                a.memoizedState !== null && n._visibility & 4 && (a.return === null || a.return.tag !== 13) ? (n._visibility &= -5, tc(a)) : bs(a); break;
            default:
                bs(a) } }

    function tc(a) { var n = a.deletions; if ((a.flags & 16) !== 0) { if (n !== null)
                for (var s = 0; s < n.length; s++) { var u = n[s];
                    rr = u, Em(u, a) }
            bm(a) } for (a = a.child; a !== null;) { switch (n = a, n.tag) {
                case 0:
                case 11:
                case 15:
                    Bn(8, n, n.return), tc(n); break;
                case 22:
                    s = n.stateNode, s._visibility & 4 && (s._visibility &= -5, tc(n)); break;
                default:
                    tc(n) }
            a = a.sibling } }

    function Em(a, n) { for (; rr !== null;) { var s = rr; switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    Bn(8, s, n); break;
                case 23:
                case 22:
                    if (s.memoizedState !== null && s.memoizedState.cachePool !== null) { var u = s.memoizedState.cachePool.pool;
                        u != null && u.refCount++ } break;
                case 24:
                    ss(s.memoizedState.cache) } if (u = s.child, u !== null) u.return = s, rr = u;
            else e: for (s = a; rr !== null;) { u = rr; var h = u.sibling,
                    y = u.return; if (hm(u), u === s) { rr = null; break e } if (h !== null) { h.return = y, rr = h; break e }
                rr = y } } }

    function k4(a, n, s, u) { this.tag = a, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

    function pa(a, n, s, u) { return new k4(a, n, s, u) }

    function W0(a) { return a = a.prototype, !(!a || !a.isReactComponent) }

    function Ln(a, n) { var s = a.alternate; return s === null ? (s = pa(a.tag, n, a.key, a.mode), s.elementType = a.elementType, s.type = a.type, s.stateNode = a.stateNode, s.alternate = a, a.alternate = s) : (s.pendingProps = n, s.type = a.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = a.flags & 31457280, s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, n = a.dependencies, s.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, s.sibling = a.sibling, s.index = a.index, s.ref = a.ref, s.refCleanup = a.refCleanup, s }

    function wm(a, n) { a.flags &= 31457282; var s = a.alternate; return s === null ? (a.childLanes = 0, a.lanes = n, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = s.childLanes, a.lanes = s.lanes, a.child = s.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = s.memoizedProps, a.memoizedState = s.memoizedState, a.updateQueue = s.updateQueue, a.type = s.type, n = s.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), a }

    function rc(a, n, s, u, h, y) { var T = 0; if (u = a, typeof a == "function") W0(a) && (T = 1);
        else if (typeof a == "string") T = by(a, s, Pe.current) ? 26 : a === "html" || a === "head" || a === "body" ? 27 : 5;
        else e: switch (a) {
            case p:
                return Ai(s.children, h, y, n);
            case x:
                T = 8, h |= 24; break;
            case m:
                return a = pa(12, s, n, h | 2), a.elementType = m, a.lanes = y, a;
            case E:
                return a = pa(13, s, n, h), a.elementType = E, a.lanes = y, a;
            case w:
                return a = pa(19, s, n, h), a.elementType = w, a.lanes = y, a;
            case D:
                return _m(s, h, y, n);
            default:
                if (typeof a == "object" && a !== null) switch (a.$$typeof) {
                    case g:
                    case b:
                        T = 10; break e;
                    case v:
                        T = 9; break e;
                    case A:
                        T = 11; break e;
                    case S:
                        T = 14; break e;
                    case O:
                        T = 16, u = null; break e }
                T = 29, s = Error(i(130, a === null ? "null" : typeof a, "")), u = null }
        return n = pa(T, s, n, h), n.elementType = a, n.type = u, n.lanes = y, n }

    function Ai(a, n, s, u) { return a = pa(7, a, u, n), a.lanes = s, a }

    function _m(a, n, s, u) { a = pa(22, a, u, n), a.elementType = D, a.lanes = s; var h = { _visibility: 1, _pendingVisibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null, _current: null, detach: function() { var y = h._current; if (y === null) throw Error(i(456)); if ((h._pendingVisibility & 2) === 0) { var T = Tn(y, 2);
                    T !== null && (h._pendingVisibility |= 2, Cr(T, y, 2)) } }, attach: function() { var y = h._current; if (y === null) throw Error(i(456)); if ((h._pendingVisibility & 2) !== 0) { var T = Tn(y, 2);
                    T !== null && (h._pendingVisibility &= -3, Cr(T, y, 2)) } } }; return a.stateNode = h, a }

    function K0(a, n, s) { return a = pa(6, a, null, n), a.lanes = s, a }

    function Q0(a, n, s) { return n = pa(4, a.children !== null ? a.children : [], a.key, n), n.lanes = s, n.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation }, n }

    function sn(a) { a.flags |= 4 }

    function Tm(a, n) { if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) a.flags &= -16777217;
        else if (a.flags |= 16777216, !cx(n)) { if (n = ha.current, n !== null && ((ut & 4194176) === ut ? Ua !== null : (ut & 62914560) !== ut && (ut & 536870912) === 0 || n !== Ua)) throw ns = t0, Hh;
            a.flags |= 8192 } }

    function ac(a, n) { n !== null && (a.flags |= 4), a.flags & 16384 && (n = a.tag !== 22 ? la() : 536870912, a.lanes |= n, xl |= n) }

    function As(a, n) { if (!ft) switch (a.tailMode) {
            case "hidden":
                n = a.tail; for (var s = null; n !== null;) n.alternate !== null && (s = n), n = n.sibling;
                s === null ? a.tail = null : s.sibling = null; break;
            case "collapsed":
                s = a.tail; for (var u = null; s !== null;) s.alternate !== null && (u = s), s = s.sibling;
                u === null ? n || a.tail === null ? a.tail = null : a.tail.sibling = null : u.sibling = null } }

    function Bt(a) { var n = a.alternate !== null && a.alternate.child === a.child,
            s = 0,
            u = 0; if (n)
            for (var h = a.child; h !== null;) s |= h.lanes | h.childLanes, u |= h.subtreeFlags & 31457280, u |= h.flags & 31457280, h.return = a, h = h.sibling;
        else
            for (h = a.child; h !== null;) s |= h.lanes | h.childLanes, u |= h.subtreeFlags, u |= h.flags, h.return = a, h = h.sibling; return a.subtreeFlags |= u, a.childLanes = s, n }

    function M4(a, n, s) { var u = n.pendingProps; switch (Ju(n), n.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Bt(n), null;
            case 1:
                return Bt(n), null;
            case 3:
                return s = n.stateNode, u = null, a !== null && (u = a.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), rn($t), We(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (a === null || a.child === null) && (es(n) ? sn(n) : a === null || a.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Ta !== null && (nf(Ta), Ta = null))), Bt(n), null;
            case 26:
                return s = n.memoizedState, a === null ? (sn(n), s !== null ? (Bt(n), Tm(n, s)) : (Bt(n), n.flags &= -16777217)) : s ? s !== a.memoizedState ? (sn(n), Bt(n), Tm(n, s)) : (Bt(n), n.flags &= -16777217) : (a.memoizedProps !== u && sn(n), Bt(n), n.flags &= -16777217), null;
            case 27:
                Ke(n), s = st.current; var h = n.type; if (a !== null && n.stateNode != null) a.memoizedProps !== u && sn(n);
                else { if (!u) { if (n.stateNode === null) throw Error(i(166)); return Bt(n), null }
                    a = Pe.current, es(n) ? zh(n) : (a = tx(h, u, s), n.stateNode = a, sn(n)) } return Bt(n), null;
            case 5:
                if (Ke(n), s = n.type, a !== null && n.stateNode != null) a.memoizedProps !== u && sn(n);
                else { if (!u) { if (n.stateNode === null) throw Error(i(166)); return Bt(n), null } if (a = Pe.current, es(n)) zh(n);
                    else { switch (h = mc(st.current), a) {
                            case 1:
                                a = h.createElementNS("http://www.w3.org/2000/svg", s); break;
                            case 2:
                                a = h.createElementNS("http://www.w3.org/1998/Math/MathML", s); break;
                            default:
                                switch (s) {
                                    case "svg":
                                        a = h.createElementNS("http://www.w3.org/2000/svg", s); break;
                                    case "math":
                                        a = h.createElementNS("http://www.w3.org/1998/Math/MathML", s); break;
                                    case "script":
                                        a = h.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild); break;
                                    case "select":
                                        a = typeof u.is == "string" ? h.createElement("select", { is: u.is }) : h.createElement("select"), u.multiple ? a.multiple = !0 : u.size && (a.size = u.size); break;
                                    default:
                                        a = typeof u.is == "string" ? h.createElement(s, { is: u.is }) : h.createElement(s) } }
                        a[z] = n, a[G] = u;
                        e: for (h = n.child; h !== null;) { if (h.tag === 5 || h.tag === 6) a.appendChild(h.stateNode);
                            else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) { h.child.return = h, h = h.child; continue } if (h === n) break e; for (; h.sibling === null;) { if (h.return === null || h.return === n) break e;
                                h = h.return }
                            h.sibling.return = h.return, h = h.sibling }
                        n.stateNode = a;
                        e: switch (fr(a, s, u), s) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a = !!u.autoFocus; break e;
                            case "img":
                                a = !0; break e;
                            default:
                                a = !1 }
                        a && sn(n) } } return Bt(n), n.flags &= -16777217, null;
            case 6:
                if (a && n.stateNode != null) a.memoizedProps !== u && sn(n);
                else { if (typeof u != "string" && n.stateNode === null) throw Error(i(166)); if (a = st.current, es(n)) { if (a = n.stateNode, s = n.memoizedProps, u = null, h = Nr, h !== null) switch (h.tag) {
                            case 27:
                            case 5:
                                u = h.memoizedProps }
                        a[z] = n, a = !!(a.nodeValue === s || u !== null && u.suppressHydrationWarning === !0 || Km(a.nodeValue, s)), a || fi(n) } else a = mc(a).createTextNode(u), a[z] = n, n.stateNode = a } return Bt(n), null;
            case 13:
                if (u = n.memoizedState, a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) { if (h = es(n), u !== null && u.dehydrated !== null) { if (a === null) { if (!h) throw Error(i(318)); if (h = n.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(i(317));
                            h[z] = n } else ts(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        Bt(n), h = !1 } else Ta !== null && (nf(Ta), Ta = null), h = !0; if (!h) return n.flags & 256 ? ($a(n), n) : ($a(n), null) } if ($a(n), (n.flags & 128) !== 0) return n.lanes = s, n; if (s = u !== null, a = a !== null && a.memoizedState !== null, s) { u = n.child, h = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (h = u.alternate.memoizedState.cachePool.pool); var y = null;
                    u.memoizedState !== null && u.memoizedState.cachePool !== null && (y = u.memoizedState.cachePool.pool), y !== h && (u.flags |= 2048) } return s !== a && s && (n.child.flags |= 8192), ac(n, n.updateQueue), Bt(n), null;
            case 4:
                return We(), a === null && pf(n.stateNode.containerInfo), Bt(n), null;
            case 10:
                return rn(n.type), Bt(n), null;
            case 19:
                if (Te(Zt), h = n.memoizedState, h === null) return Bt(n), null; if (u = (n.flags & 128) !== 0, y = h.rendering, y === null)
                    if (u) As(h, !1);
                    else { if (Lt !== 0 || a !== null && (a.flags & 128) !== 0)
                            for (a = n.child; a !== null;) { if (y = zo(a), y !== null) { for (n.flags |= 128, As(h, !1), a = y.updateQueue, n.updateQueue = a, ac(n, a), n.subtreeFlags = 0, a = s, s = n.child; s !== null;) wm(s, a), s = s.sibling; return ye(Zt, Zt.current & 1 | 2), n.child }
                                a = a.sibling }
                        h.tail !== null && ae() > nc && (n.flags |= 128, u = !0, As(h, !1), n.lanes = 4194304) }
                else { if (!u)
                        if (a = zo(y), a !== null) { if (n.flags |= 128, u = !0, a = a.updateQueue, n.updateQueue = a, ac(n, a), As(h, !0), h.tail === null && h.tailMode === "hidden" && !y.alternate && !ft) return Bt(n), null } else 2 * ae() - h.renderingStartTime > nc && s !== 536870912 && (n.flags |= 128, u = !0, As(h, !1), n.lanes = 4194304);
                    h.isBackwards ? (y.sibling = n.child, n.child = y) : (a = h.last, a !== null ? a.sibling = y : n.child = y, h.last = y) } return h.tail !== null ? (n = h.tail, h.rendering = n, h.tail = n.sibling, h.renderingStartTime = ae(), n.sibling = null, a = Zt.current, ye(Zt, u ? a & 1 | 2 : a & 1), n) : (Bt(n), null);
            case 22:
            case 23:
                return $a(n), a0(), u = n.memoizedState !== null, a !== null ? a.memoizedState !== null !== u && (n.flags |= 8192) : u && (n.flags |= 8192), u ? (s & 536870912) !== 0 && (n.flags & 128) === 0 && (Bt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Bt(n), s = n.updateQueue, s !== null && ac(n, s.retryQueue), s = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== s && (n.flags |= 2048), a !== null && Te(hi), null;
            case 24:
                return s = null, a !== null && (s = a.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), rn($t), Bt(n), null;
            case 25:
                return null } throw Error(i(156, n.tag)) }

    function L4(a, n) { switch (Ju(n), n.tag) {
            case 1:
                return a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
            case 3:
                return rn($t), We(), a = n.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (n.flags = a & -65537 | 128, n) : null;
            case 26:
            case 27:
            case 5:
                return Ke(n), null;
            case 13:
                if ($a(n), a = n.memoizedState, a !== null && a.dehydrated !== null) { if (n.alternate === null) throw Error(i(340));
                    ts() } return a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
            case 19:
                return Te(Zt), null;
            case 4:
                return We(), null;
            case 10:
                return rn(n.type), null;
            case 22:
            case 23:
                return $a(n), a0(), a !== null && Te(hi), a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
            case 24:
                return rn($t), null;
            case 25:
                return null;
            default:
                return null } }

    function Sm(a, n) { switch (Ju(n), n.tag) {
            case 3:
                rn($t), We(); break;
            case 26:
            case 27:
            case 5:
                Ke(n); break;
            case 4:
                We(); break;
            case 13:
                $a(n); break;
            case 19:
                Te(Zt); break;
            case 10:
                rn(n.type); break;
            case 22:
            case 23:
                $a(n), a0(), a !== null && Te(hi); break;
            case 24:
                rn($t) } } var U4 = { getCacheForType: function(a) { var n = yr($t),
                    s = n.data.get(a); return s === void 0 && (s = a(), n.data.set(a, s)), s } },
        P4 = typeof WeakMap == "function" ? WeakMap : Map,
        kt = 0,
        Ct = null,
        nt = null,
        ut = 0,
        Dt = 0,
        Wr = null,
        on = !1,
        ml = !1,
        Z0 = !1,
        cn = 0,
        Lt = 0,
        Un = 0,
        Ei = 0,
        $0 = 0,
        ga = 0,
        xl = 0,
        Es = null,
        za = null,
        J0 = !1,
        ef = 0,
        nc = 1 / 0,
        ic = null,
        Pn = null,
        lc = !1,
        wi = null,
        ws = 0,
        tf = 0,
        rf = null,
        _s = 0,
        af = null;

    function Kr() { if ((kt & 2) !== 0 && ut !== 0) return ut & -ut; if (_.T !== null) { var a = ll; return a !== 0 ? a : df() } return bo() }

    function Nm() { ga === 0 && (ga = (ut & 536870912) === 0 || ft ? ia() : 536870912); var a = ha.current; return a !== null && (a.flags |= 32), ga }

    function Cr(a, n, s) {
        (a === Ct && Dt === 2 || a.cancelPendingCommit !== null) && (pl(a, 0), un(a, ut, ga, !1)), ni(a, s), ((kt & 2) === 0 || a !== Ct) && (a === Ct && ((kt & 2) === 0 && (Ei |= s), Lt === 4 && un(a, ut, ga, !1)), Ia(a)) }

    function Cm(a, n, s) { if ((kt & 6) !== 0) throw Error(i(327)); var u = !s && (n & 60) === 0 && (n & a.expiredLanes) === 0 || Vr(a, n),
            h = u ? H4(a, n) : of(a, n, !0),
            y = u;
        do { if (h === 0) { ml && !u && un(a, n, 0, !1); break } else if (h === 6) un(a, n, 0, !on);
            else { if (s = a.current.alternate, y && !z4(s)) { h = of(a, n, !1), y = !1; continue } if (h === 2) { if (y = n, a.errorRecoveryDisabledLanes & y) var T = 0;
                    else T = a.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0; if (T !== 0) { n = T;
                        e: { var P = a;h = Es; var J = P.current.memoizedState.isDehydrated; if (J && (pl(P, T).flags |= 256), T = of(P, T, !1), T !== 2) { if (Z0 && !J) { P.errorRecoveryDisabledLanes |= y, Ei |= y, h = 4; break e }
                                y = za, za = h, y !== null && nf(y) }
                            h = T }
                        if (y = !1, h !== 2) continue } } if (h === 1) { pl(a, 0), un(a, n, 0, !0); break }
                e: { switch (u = a, h) {
                        case 0:
                        case 1:
                            throw Error(i(345));
                        case 4:
                            if ((n & 4194176) === n) { un(u, n, ga, !on); break e } break;
                        case 2:
                            za = null; break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(i(329)) } if (u.finishedWork = s, u.finishedLanes = n, (n & 62914560) === n && (y = ef + 300 - ae(), 10 < y)) { if (un(u, n, ga, !on), Gr(u, 0) !== 0) break e;
                        u.timeoutHandle = $m(Dm.bind(null, u, s, za, ic, J0, n, ga, Ei, xl, on, 2, -0, 0), y); break e }
                    Dm(u, s, za, ic, J0, n, ga, Ei, xl, on, 0, -0, 0) } } break } while (!0);
        Ia(a) }

    function nf(a) { za === null ? za = a : za.push.apply(za, a) }

    function Dm(a, n, s, u, h, y, T, P, J, oe, Ee, Ce, pe) { var be = n.subtreeFlags; if ((be & 8192 || (be & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: Ay }, ym(n), n = wy(), n !== null)) { a.cancelPendingCommit = n(Mm.bind(null, a, s, u, h, T, P, J, 1, Ce, pe)), un(a, y, T, !oe); return }
        Mm(a, s, u, h, T, P, J, Ee, Ce, pe) }

    function z4(a) { for (var n = a;;) { var s = n.tag; if ((s === 0 || s === 11 || s === 15) && n.flags & 16384 && (s = n.updateQueue, s !== null && (s = s.stores, s !== null)))
                for (var u = 0; u < s.length; u++) { var h = s[u],
                        y = h.getSnapshot;
                    h = h.value; try { if (!qr(y(), h)) return !1 } catch { return !1 } }
            if (s = n.child, n.subtreeFlags & 16384 && s !== null) s.return = n, n = s;
            else { if (n === a) break; for (; n.sibling === null;) { if (n.return === null || n.return === a) return !0;
                    n = n.return }
                n.sibling.return = n.return, n = n.sibling } } return !0 }

    function un(a, n, s, u) { n &= ~$0, n &= ~Ei, a.suspendedLanes |= n, a.pingedLanes &= ~n, u && (a.warmLanes |= n), u = a.expirationTimes; for (var h = n; 0 < h;) { var y = 31 - or(h),
                T = 1 << y;
            u[y] = -1, h &= ~T }
        s !== 0 && Xi(a, s, n) }

    function sc() { return (kt & 6) === 0 ? (Ts(0), !1) : !0 }

    function lf() { if (nt !== null) { if (Dt === 0) var a = nt.return;
            else a = nt, tn = vi = null, f0(a), nl = null, is = 0, a = nt; for (; a !== null;) Sm(a.alternate, a), a = a.return;
            nt = null } }

    function pl(a, n) { a.finishedWork = null, a.finishedLanes = 0; var s = a.timeoutHandle;
        s !== -1 && (a.timeoutHandle = -1, iy(s)), s = a.cancelPendingCommit, s !== null && (a.cancelPendingCommit = null, s()), lf(), Ct = a, nt = s = Ln(a.current, null), ut = n, Dt = 0, Wr = null, on = !1, ml = Vr(a, n), Z0 = !1, xl = ga = $0 = Ei = Un = Lt = 0, za = Es = null, J0 = !1, (n & 8) !== 0 && (n |= n & 32); var u = a.entangledLanes; if (u !== 0)
            for (a = a.entanglements, u &= n; 0 < u;) { var h = 31 - or(u),
                    y = 1 << h;
                n |= a[h], u &= ~y }
        return cn = n, Ro(), s }

    function Om(a, n) { rt = null, _.H = Pa, n === as ? (n = qh(), Dt = 3) : n === Hh ? (n = qh(), Dt = 4) : Dt = n === G1 ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Wr = n, nt === null && (Lt = 1, Zo(a, ua(n, a.current))) }

    function Rm() { var a = _.H; return _.H = Pa, a === null ? Pa : a }

    function Fm() { var a = _.A; return _.A = U4, a }

    function sf() { Lt = 4, on || (ut & 4194176) !== ut && ha.current !== null || (ml = !0), (Un & 134217727) === 0 && (Ei & 134217727) === 0 || Ct === null || un(Ct, ut, ga, !1) }

    function of(a, n, s) { var u = kt;
        kt |= 2; var h = Rm(),
            y = Fm();
        (Ct !== a || ut !== n) && (ic = null, pl(a, n)), n = !1; var T = Lt;
        e: do try { if (Dt !== 0 && nt !== null) { var P = nt,
                        J = Wr; switch (Dt) {
                        case 8:
                            lf(), T = 6; break e;
                        case 3:
                        case 2:
                        case 6:
                            ha.current === null && (n = !0); var oe = Dt; if (Dt = 0, Wr = null, gl(a, P, J, oe), s && ml) { T = 0; break e } break;
                        default:
                            oe = Dt, Dt = 0, Wr = null, gl(a, P, J, oe) } }
                I4(), T = Lt; break } catch (Ee) { Om(a, Ee) }
            while (!0);
            return n && a.shellSuspendCounter++, tn = vi = null, kt = u, _.H = h, _.A = y, nt === null && (Ct = null, ut = 0, Ro()), T }

    function I4() { for (; nt !== null;) jm(nt) }

    function H4(a, n) { var s = kt;
        kt |= 2; var u = Rm(),
            h = Fm();
        Ct !== a || ut !== n ? (ic = null, nc = ae() + 500, pl(a, n)) : ml = Vr(a, n);
        e: do try { if (Dt !== 0 && nt !== null) { n = nt; var y = Wr;
                    t: switch (Dt) {
                        case 1:
                            Dt = 0, Wr = null, gl(a, n, y, 1); break;
                        case 2:
                            if (Gh(y)) { Dt = 0, Wr = null, Bm(n); break }
                            n = function() { Dt === 2 && Ct === a && (Dt = 7), Ia(a) }, y.then(n, n); break e;
                        case 3:
                            Dt = 7; break e;
                        case 4:
                            Dt = 5; break e;
                        case 7:
                            Gh(y) ? (Dt = 0, Wr = null, Bm(n)) : (Dt = 0, Wr = null, gl(a, n, y, 7)); break;
                        case 5:
                            var T = null; switch (nt.tag) {
                                case 26:
                                    T = nt.memoizedState;
                                case 5:
                                case 27:
                                    var P = nt; if (!T || cx(T)) { Dt = 0, Wr = null; var J = P.sibling; if (J !== null) nt = J;
                                        else { var oe = P.return;
                                            oe !== null ? (nt = oe, oc(oe)) : nt = null } break t } }
                            Dt = 0, Wr = null, gl(a, n, y, 5); break;
                        case 6:
                            Dt = 0, Wr = null, gl(a, n, y, 6); break;
                        case 8:
                            lf(), Lt = 6; break e;
                        default:
                            throw Error(i(462)) } }
                G4(); break } catch (Ee) { Om(a, Ee) }
            while (!0);
            return tn = vi = null, _.H = u, _.A = h, kt = s, nt !== null ? 0 : (Ct = null, ut = 0, Ro(), Lt) }

    function G4() { for (; nt !== null && !It();) jm(nt) }

    function jm(a) { var n = tm(a.alternate, a, cn);
        a.memoizedProps = a.pendingProps, n === null ? oc(a) : nt = n }

    function Bm(a) { var n = a,
            s = n.alternate; switch (n.tag) {
            case 15:
            case 0:
                n = K1(s, n, n.pendingProps, n.type, void 0, ut); break;
            case 11:
                n = K1(s, n, n.pendingProps, n.type.render, n.ref, ut); break;
            case 5:
                f0(n);
            default:
                Sm(s, n), n = nt = wm(n, cn), n = tm(s, n, cn) }
        a.memoizedProps = a.pendingProps, n === null ? oc(a) : nt = n }

    function gl(a, n, s, u) { tn = vi = null, f0(n), nl = null, is = 0; var h = n.return; try { if (R4(a, h, n, s, ut)) { Lt = 1, Zo(a, ua(s, a.current)), nt = null; return } } catch (y) { if (h !== null) throw nt = h, y;
            Lt = 1, Zo(a, ua(s, a.current)), nt = null; return }
        n.flags & 32768 ? (ft || u === 1 ? a = !0 : ml || (ut & 536870912) !== 0 ? a = !1 : (on = a = !0, (u === 2 || u === 3 || u === 6) && (u = ha.current, u !== null && u.tag === 13 && (u.flags |= 16384))), km(n, a)) : oc(n) }

    function oc(a) { var n = a;
        do { if ((n.flags & 32768) !== 0) { km(n, on); return }
            a = n.return; var s = M4(n.alternate, n, cn); if (s !== null) { nt = s; return } if (n = n.sibling, n !== null) { nt = n; return }
            nt = n = a } while (n !== null);
        Lt === 0 && (Lt = 5) }

    function km(a, n) { do { var s = L4(a.alternate, a); if (s !== null) { s.flags &= 32767, nt = s; return } if (s = a.return, s !== null && (s.flags |= 32768, s.subtreeFlags = 0, s.deletions = null), !n && (a = a.sibling, a !== null)) { nt = a; return }
            nt = a = s } while (a !== null);
        Lt = 6, nt = null }

    function Mm(a, n, s, u, h, y, T, P, J, oe) { var Ee = _.T,
            Ce = L.p; try { L.p = 2, _.T = null, V4(a, n, s, u, Ce, h, y, T, P, J, oe) } finally { _.T = Ee, L.p = Ce } }

    function V4(a, n, s, u, h, y, T, P) { do vl(); while (wi !== null); if ((kt & 6) !== 0) throw Error(i(327)); var J = a.finishedWork; if (u = a.finishedLanes, J === null) return null; if (a.finishedWork = null, a.finishedLanes = 0, J === a.current) throw Error(i(177));
        a.callbackNode = null, a.callbackPriority = 0, a.cancelPendingCommit = null; var oe = J.lanes | J.childLanes; if (oe |= Qu, Ou(a, u, oe, y, T, P), a === Ct && (nt = Ct = null, ut = 0), (J.subtreeFlags & 10256) === 0 && (J.flags & 10256) === 0 || lc || (lc = !0, tf = oe, rf = s, W4(it, function() { return vl(), null })), s = (J.flags & 15990) !== 0, (J.subtreeFlags & 15990) !== 0 || s ? (s = _.T, _.T = null, y = L.p, L.p = 2, T = kt, kt |= 4, j4(a, J), pm(J, a), m4(bf, a.containerInfo), bc = !!yf, bf = yf = null, a.current = J, dm(a, J.alternate, J), gt(), kt = T, L.p = y, _.T = s) : a.current = J, lc ? (lc = !1, wi = a, ws = u) : Lm(a, oe), oe = a.pendingLanes, oe === 0 && (Pn = null), na(J.stateNode), Ia(a), n !== null)
            for (h = a.onRecoverableError, J = 0; J < n.length; J++) oe = n[J], h(oe.value, { componentStack: oe.stack }); return (ws & 3) !== 0 && vl(), oe = a.pendingLanes, (u & 4194218) !== 0 && (oe & 42) !== 0 ? a === af ? _s++ : (_s = 0, af = a) : _s = 0, Ts(0), null }

    function Lm(a, n) {
        (a.pooledCacheLanes &= n) === 0 && (n = a.pooledCache, n != null && (a.pooledCache = null, ss(n))) }

    function vl() { if (wi !== null) { var a = wi,
                n = tf;
            tf = 0; var s = yo(ws),
                u = _.T,
                h = L.p; try { if (L.p = 32 > s ? 32 : s, _.T = null, wi === null) var y = !1;
                else { s = rf, rf = null; var T = wi,
                        P = ws; if (wi = null, ws = 0, (kt & 6) !== 0) throw Error(i(331)); var J = kt; if (kt |= 4, Am(T.current), vm(T, T.current, P, s), kt = J, Ts(0, !1), Tt && typeof Tt.onPostCommitFiberRoot == "function") try { Tt.onPostCommitFiberRoot(er, T) } catch {}
                    y = !0 } return y } finally { L.p = h, _.T = u, Lm(a, n) } } return !1 }

    function Um(a, n, s) { n = ua(s, n), n = T0(a.stateNode, n, 2), a = jn(a, n, 2), a !== null && (ni(a, 2), Ia(a)) }

    function St(a, n, s) { if (a.tag === 3) Um(a, a, s);
        else
            for (; n !== null;) { if (n.tag === 3) { Um(n, a, s); break } else if (n.tag === 1) { var u = n.stateNode; if (typeof n.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Pn === null || !Pn.has(u))) { a = ua(s, a), s = I1(2), u = jn(n, s, 2), u !== null && (H1(s, u, n, a), ni(u, 2), Ia(u)); break } }
                n = n.return } }

    function cf(a, n, s) { var u = a.pingCache; if (u === null) { u = a.pingCache = new P4; var h = new Set;
            u.set(n, h) } else h = u.get(n), h === void 0 && (h = new Set, u.set(n, h));
        h.has(s) || (Z0 = !0, h.add(s), a = q4.bind(null, a, n, s), n.then(a, a)) }

    function q4(a, n, s) { var u = a.pingCache;
        u !== null && u.delete(n), a.pingedLanes |= a.suspendedLanes & s, a.warmLanes &= ~s, Ct === a && (ut & s) === s && (Lt === 4 || Lt === 3 && (ut & 62914560) === ut && 300 > ae() - ef ? (kt & 2) === 0 && pl(a, 0) : $0 |= s, xl === ut && (xl = 0)), Ia(a) }

    function Pm(a, n) { n === 0 && (n = la()), a = Tn(a, n), a !== null && (ni(a, n), Ia(a)) }

    function X4(a) { var n = a.memoizedState,
            s = 0;
        n !== null && (s = n.retryLane), Pm(a, s) }

    function Y4(a, n) { var s = 0; switch (a.tag) {
            case 13:
                var u = a.stateNode,
                    h = a.memoizedState;
                h !== null && (s = h.retryLane); break;
            case 19:
                u = a.stateNode; break;
            case 22:
                u = a.stateNode._retryCache; break;
            default:
                throw Error(i(314)) }
        u !== null && u.delete(n), Pm(a, s) }

    function W4(a, n) { return pt(a, n) } var cc = null,
        yl = null,
        uf = !1,
        uc = !1,
        ff = !1,
        _i = 0;

    function Ia(a) { a !== yl && a.next === null && (yl === null ? cc = yl = a : yl = yl.next = a), uc = !0, uf || (uf = !0, Q4(K4)) }

    function Ts(a, n) { if (!ff && uc) { ff = !0;
            do
                for (var s = !1, u = cc; u !== null;) { if (a !== 0) { var h = u.pendingLanes; if (h === 0) var y = 0;
                        else { var T = u.suspendedLanes,
                                P = u.pingedLanes;
                            y = (1 << 31 - or(42 | a) + 1) - 1, y &= h & ~(T & ~P), y = y & 201326677 ? y & 201326677 | 1 : y ? y | 2 : 0 }
                        y !== 0 && (s = !0, Hm(u, y)) } else y = ut, y = Gr(u, u === Ct ? y : 0), (y & 3) === 0 || Vr(u, y) || (s = !0, Hm(u, y));
                    u = u.next }
            while (s);
            ff = !1 } }

    function K4() { uc = uf = !1; var a = 0;
        _i !== 0 && (ny() && (a = _i), _i = 0); for (var n = ae(), s = null, u = cc; u !== null;) { var h = u.next,
                y = zm(u, n);
            y === 0 ? (u.next = null, s === null ? cc = h : s.next = h, h === null && (yl = s)) : (s = u, (a !== 0 || (y & 3) !== 0) && (uc = !0)), u = h }
        Ts(a) }

    function zm(a, n) { for (var s = a.suspendedLanes, u = a.pingedLanes, h = a.expirationTimes, y = a.pendingLanes & -62914561; 0 < y;) { var T = 31 - or(y),
                P = 1 << T,
                J = h[T];
            J === -1 ? ((P & s) === 0 || (P & u) !== 0) && (h[T] = qi(P, n)) : J <= n && (a.expiredLanes |= P), y &= ~P } if (n = Ct, s = ut, s = Gr(a, a === n ? s : 0), u = a.callbackNode, s === 0 || a === n && Dt === 2 || a.cancelPendingCommit !== null) return u !== null && u !== null && ct(u), a.callbackNode = null, a.callbackPriority = 0; if ((s & 3) === 0 || Vr(a, s)) { if (n = s & -s, n === a.callbackPriority) return n; switch (u !== null && ct(u), yo(s)) {
                case 2:
                case 8:
                    s = Ot; break;
                case 32:
                    s = it; break;
                case 268435456:
                    s = Rt; break;
                default:
                    s = it } return u = Im.bind(null, a), s = pt(s, u), a.callbackPriority = n, a.callbackNode = s, n } return u !== null && u !== null && ct(u), a.callbackPriority = 2, a.callbackNode = null, 2 }

    function Im(a, n) { var s = a.callbackNode; if (vl() && a.callbackNode !== s) return null; var u = ut; return u = Gr(a, a === Ct ? u : 0), u === 0 ? null : (Cm(a, u, n), zm(a, ae()), a.callbackNode != null && a.callbackNode === s ? Im.bind(null, a) : null) }

    function Hm(a, n) { if (vl()) return null;
        Cm(a, n, !0) }

    function Q4(a) { ly(function() {
            (kt & 6) !== 0 ? pt(Ie, a) : a() }) }

    function df() { return _i === 0 && (_i = ia()), _i }

    function Gm(a) { return a == null || typeof a == "symbol" || typeof a == "boolean" ? null : typeof a == "function" ? a : _o("" + a) }

    function Vm(a, n) { var s = n.ownerDocument.createElement("input"); return s.name = n.name, s.value = n.value, a.id && s.setAttribute("form", a.id), n.parentNode.insertBefore(s, n), a = new FormData(a), s.parentNode.removeChild(s), a }

    function Z4(a, n, s, u, h) { if (n === "submit" && s && s.stateNode === h) { var y = Gm((h[G] || null).action),
                T = u.submitter;
            T && (n = (n = T[G] || null) ? Gm(n.formAction) : T.getAttribute("formAction"), n !== null && (y = n, T = null)); var P = new Co("action", "action", null, u, h);
            a.push({ event: P, listeners: [{ instance: null, listener: function() { if (u.defaultPrevented) { if (_i !== 0) { var J = T ? Vm(h, T) : new FormData(h);
                                b0(s, { pending: !0, data: J, method: h.method, action: y }, null, J) } } else typeof y == "function" && (P.preventDefault(), J = T ? Vm(h, T) : new FormData(h), b0(s, { pending: !0, data: J, method: h.method, action: y }, y, J)) }, currentTarget: h }] }) } } for (var hf = 0; hf < Mh.length; hf++) { var mf = Mh[hf],
            $4 = mf.toLowerCase(),
            J4 = mf[0].toUpperCase() + mf.slice(1);
        _a($4, "on" + J4) }
    _a(Rh, "onAnimationEnd"), _a(Fh, "onAnimationIteration"), _a(jh, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(p4, "onTransitionRun"), _a(g4, "onTransitionStart"), _a(v4, "onTransitionCancel"), _a(Bh, "onTransitionEnd"), jt("onMouseEnter", ["mouseout", "mouseover"]), jt("onMouseLeave", ["mouseout", "mouseover"]), jt("onPointerEnter", ["pointerout", "pointerover"]), jt("onPointerLeave", ["pointerout", "pointerover"]), mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        ey = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ss));

    function qm(a, n) { n = (n & 4) !== 0; for (var s = 0; s < a.length; s++) { var u = a[s],
                h = u.event;
            u = u.listeners;
            e: { var y = void 0; if (n)
                    for (var T = u.length - 1; 0 <= T; T--) { var P = u[T],
                            J = P.instance,
                            oe = P.currentTarget; if (P = P.listener, J !== y && h.isPropagationStopped()) break e;
                        y = P, h.currentTarget = oe; try { y(h) } catch (Ee) { Qo(Ee) }
                        h.currentTarget = null, y = J } else
                        for (T = 0; T < u.length; T++) { if (P = u[T], J = P.instance, oe = P.currentTarget, P = P.listener, J !== y && h.isPropagationStopped()) break e;
                            y = P, h.currentTarget = oe; try { y(h) } catch (Ee) { Qo(Ee) }
                            h.currentTarget = null, y = J } } } }

    function lt(a, n) { var s = n[Z];
        s === void 0 && (s = n[Z] = new Set); var u = a + "__bubble";
        s.has(u) || (Xm(n, a, 2, !1), s.add(u)) }

    function xf(a, n, s) { var u = 0;
        n && (u |= 4), Xm(s, a, u, n) } var fc = "_reactListening" + Math.random().toString(36).slice(2);

    function pf(a) { if (!a[fc]) { a[fc] = !0, Qe.forEach(function(s) { s !== "selectionchange" && (ey.has(s) || xf(s, !1, a), xf(s, !0, a)) }); var n = a.nodeType === 9 ? a : a.ownerDocument;
            n === null || n[fc] || (n[fc] = !0, xf("selectionchange", !1, n)) } }

    function Xm(a, n, s, u) { switch (xx(n)) {
            case 2:
                var h = Sy; break;
            case 8:
                h = Ny; break;
            default:
                h = Df }
        s = h.bind(null, n, s, a), h = void 0, !Lu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (h = !0), u ? h !== void 0 ? a.addEventListener(n, s, { capture: !0, passive: h }) : a.addEventListener(n, s, !0) : h !== void 0 ? a.addEventListener(n, s, { passive: h }) : a.addEventListener(n, s, !1) }

    function gf(a, n, s, u, h) { var y = u; if ((n & 1) === 0 && (n & 2) === 0 && u !== null) e: for (;;) { if (u === null) return; var T = u.tag; if (T === 3 || T === 4) { var P = u.stateNode.containerInfo; if (P === h || P.nodeType === 8 && P.parentNode === h) break; if (T === 4)
                    for (T = u.return; T !== null;) { var J = T.tag; if ((J === 3 || J === 4) && (J = T.stateNode.containerInfo, J === h || J.nodeType === 8 && J.parentNode === h)) return;
                        T = T.return }
                for (; P !== null;) { if (T = De(P), T === null) return; if (J = T.tag, J === 5 || J === 6 || J === 26 || J === 27) { u = y = T; continue e }
                    P = P.parentNode } }
            u = u.return }
        sh(function() { var oe = y,
                Ee = ku(s),
                Ce = [];
            e: { var pe = kh.get(a); if (pe !== void 0) { var be = Co,
                        He = a; switch (a) {
                        case "keypress":
                            if (So(s) === 0) break e;
                        case "keydown":
                        case "keyup":
                            be = Yv; break;
                        case "focusin":
                            He = "focus", be = Iu; break;
                        case "focusout":
                            He = "blur", be = Iu; break;
                        case "beforeblur":
                        case "afterblur":
                            be = Iu; break;
                        case "click":
                            if (s.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            be = uh; break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            be = kv; break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            be = Qv; break;
                        case Rh:
                        case Fh:
                        case jh:
                            be = Uv; break;
                        case Bh:
                            be = $v; break;
                        case "scroll":
                        case "scrollend":
                            be = jv; break;
                        case "wheel":
                            be = e4; break;
                        case "copy":
                        case "cut":
                        case "paste":
                            be = zv; break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            be = dh; break;
                        case "toggle":
                        case "beforetoggle":
                            be = r4 } var Ze = (n & 4) !== 0,
                        Ut = !Ze && (a === "scroll" || a === "scrollend"),
                        ue = Ze ? pe !== null ? pe + "Capture" : null : pe;
                    Ze = []; for (var le = oe, fe; le !== null;) { var Se = le; if (fe = Se.stateNode, Se = Se.tag, Se !== 5 && Se !== 26 && Se !== 27 || fe === null || ue === null || (Se = ql(le, ue), Se != null && Ze.push(Ns(le, Se, fe))), Ut) break;
                        le = le.return }
                    0 < Ze.length && (pe = new be(pe, He, null, s, Ee), Ce.push({ event: pe, listeners: Ze })) } }
            if ((n & 7) === 0) { e: { if (pe = a === "mouseover" || a === "pointerover", be = a === "mouseout" || a === "pointerout", pe && s !== Bu && (He = s.relatedTarget || s.fromElement) && (De(He) || He[Y])) break e; if ((be || pe) && (pe = Ee.window === Ee ? Ee : (pe = Ee.ownerDocument) ? pe.defaultView || pe.parentWindow : window, be ? (He = s.relatedTarget || s.toElement, be = oe, He = He ? De(He) : null, He !== null && (Ut = se(He), Ze = He.tag, He !== Ut || Ze !== 5 && Ze !== 27 && Ze !== 6) && (He = null)) : (be = null, He = oe), be !== He)) { if (Ze = uh, Se = "onMouseLeave", ue = "onMouseEnter", le = "mouse", (a === "pointerout" || a === "pointerover") && (Ze = dh, Se = "onPointerLeave", ue = "onPointerEnter", le = "pointer"), Ut = be == null ? pe : Me(be), fe = He == null ? pe : Me(He), pe = new Ze(Se, le + "leave", be, s, Ee), pe.target = Ut, pe.relatedTarget = fe, Se = null, De(Ee) === oe && (Ze = new Ze(ue, le + "enter", He, s, Ee), Ze.target = fe, Ze.relatedTarget = Ut, Se = Ze), Ut = Se, be && He) t: { for (Ze = be, ue = He, le = 0, fe = Ze; fe; fe = bl(fe)) le++; for (fe = 0, Se = ue; Se; Se = bl(Se)) fe++; for (; 0 < le - fe;) Ze = bl(Ze), le--; for (; 0 < fe - le;) ue = bl(ue), fe--; for (; le--;) { if (Ze === ue || ue !== null && Ze === ue.alternate) break t;
                                Ze = bl(Ze), ue = bl(ue) }
                            Ze = null }
                        else Ze = null;
                        be !== null && Ym(Ce, pe, be, Ze, !1), He !== null && Ut !== null && Ym(Ce, Ut, He, Ze, !0) } }
                e: { if (pe = oe ? Me(oe) : window, be = pe.nodeName && pe.nodeName.toLowerCase(), be === "select" || be === "input" && pe.type === "file") var Ue = bh;
                    else if (vh(pe))
                        if (Ah) Ue = d4;
                        else { Ue = u4; var at = c4 }
                    else be = pe.nodeName, !be || be.toLowerCase() !== "input" || pe.type !== "checkbox" && pe.type !== "radio" ? oe && ju(oe.elementType) && (Ue = bh) : Ue = f4; if (Ue && (Ue = Ue(a, oe))) { yh(Ce, Ue, s, Ee); break e }
                    at && at(a, pe, oe), a === "focusout" && oe && pe.type === "number" && oe.memoizedProps.value != null && Fu(pe, "number", pe.value) } switch (at = oe ? Me(oe) : window, a) {
                    case "focusin":
                        (vh(at) || at.contentEditable === "true") && ($i = at, Yu = oe, Jl = null); break;
                    case "focusout":
                        Jl = Yu = $i = null; break;
                    case "mousedown":
                        Wu = !0; break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Wu = !1, Dh(Ce, s, Ee); break;
                    case "selectionchange":
                        if (x4) break;
                    case "keydown":
                    case "keyup":
                        Dh(Ce, s, Ee) } var Ge; if (Gu) e: { switch (a) {
                        case "compositionstart":
                            var Xe = "onCompositionStart"; break e;
                        case "compositionend":
                            Xe = "onCompositionEnd"; break e;
                        case "compositionupdate":
                            Xe = "onCompositionUpdate"; break e }
                    Xe = void 0 }
                else Zi ? ph(a, s) && (Xe = "onCompositionEnd") : a === "keydown" && s.keyCode === 229 && (Xe = "onCompositionStart");Xe && (hh && s.locale !== "ko" && (Zi || Xe !== "onCompositionStart" ? Xe === "onCompositionEnd" && Zi && (Ge = oh()) : (_n = Ee, Uu = "value" in _n ? _n.value : _n.textContent, Zi = !0)), at = dc(oe, Xe), 0 < at.length && (Xe = new fh(Xe, a, null, s, Ee), Ce.push({ event: Xe, listeners: at }), Ge ? Xe.data = Ge : (Ge = gh(s), Ge !== null && (Xe.data = Ge)))), (Ge = n4 ? i4(a, s) : l4(a, s)) && (Xe = dc(oe, "onBeforeInput"), 0 < Xe.length && (at = new fh("onBeforeInput", "beforeinput", null, s, Ee), Ce.push({ event: at, listeners: Xe }), at.data = Ge)), Z4(Ce, a, oe, s, Ee) }
            qm(Ce, n) }) }

    function Ns(a, n, s) { return { instance: a, listener: n, currentTarget: s } }

    function dc(a, n) { for (var s = n + "Capture", u = []; a !== null;) { var h = a,
                y = h.stateNode;
            h = h.tag, h !== 5 && h !== 26 && h !== 27 || y === null || (h = ql(a, s), h != null && u.unshift(Ns(a, h, y)), h = ql(a, n), h != null && u.push(Ns(a, h, y))), a = a.return } return u }

    function bl(a) { if (a === null) return null;
        do a = a.return; while (a && a.tag !== 5 && a.tag !== 27); return a || null }

    function Ym(a, n, s, u, h) { for (var y = n._reactName, T = []; s !== null && s !== u;) { var P = s,
                J = P.alternate,
                oe = P.stateNode; if (P = P.tag, J !== null && J === u) break;
            P !== 5 && P !== 26 && P !== 27 || oe === null || (J = oe, h ? (oe = ql(s, y), oe != null && T.unshift(Ns(s, oe, J))) : h || (oe = ql(s, y), oe != null && T.push(Ns(s, oe, J)))), s = s.return }
        T.length !== 0 && a.push({ event: n, listeners: T }) } var ty = /\r\n?/g,
        ry = /\u0000|\uFFFD/g;

    function Wm(a) { return (typeof a == "string" ? a : "" + a).replace(ty, `
`).replace(ry, "") }

    function Km(a, n) { return n = Wm(n), Wm(a) === n }

    function hc() {}

    function wt(a, n, s, u, h, y) { switch (s) {
            case "children":
                typeof u == "string" ? n === "body" || n === "textarea" && u === "" || Wi(a, u) : (typeof u == "number" || typeof u == "bigint") && n !== "body" && Wi(a, "" + u); break;
            case "className":
                Ao(a, "class", u); break;
            case "tabIndex":
                Ao(a, "tabindex", u); break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ao(a, s, u); break;
            case "style":
                ih(a, u, y); break;
            case "data":
                if (n !== "object") { Ao(a, "data", u); break }
            case "src":
            case "href":
                if (u === "" && (n !== "a" || s !== "href")) { a.removeAttribute(s); break } if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") { a.removeAttribute(s); break }
                u = _o("" + u), a.setAttribute(s, u); break;
            case "action":
            case "formAction":
                if (typeof u == "function") { a.setAttribute(s, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"); break } else typeof y == "function" && (s === "formAction" ? (n !== "input" && wt(a, n, "name", h.name, h, null), wt(a, n, "formEncType", h.formEncType, h, null), wt(a, n, "formMethod", h.formMethod, h, null), wt(a, n, "formTarget", h.formTarget, h, null)) : (wt(a, n, "encType", h.encType, h, null), wt(a, n, "method", h.method, h, null), wt(a, n, "target", h.target, h, null))); if (u == null || typeof u == "symbol" || typeof u == "boolean") { a.removeAttribute(s); break }
                u = _o("" + u), a.setAttribute(s, u); break;
            case "onClick":
                u != null && (a.onclick = hc); break;
            case "onScroll":
                u != null && lt("scroll", a); break;
            case "onScrollEnd":
                u != null && lt("scrollend", a); break;
            case "dangerouslySetInnerHTML":
                if (u != null) { if (typeof u != "object" || !("__html" in u)) throw Error(i(61)); if (s = u.__html, s != null) { if (h.children != null) throw Error(i(60));
                        a.innerHTML = s } } break;
            case "multiple":
                a.multiple = u && typeof u != "function" && typeof u != "symbol"; break;
            case "muted":
                a.muted = u && typeof u != "function" && typeof u != "symbol"; break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") { a.removeAttribute("xlink:href"); break }
                s = _o("" + u), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s); break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                u != null && typeof u != "function" && typeof u != "symbol" ? a.setAttribute(s, "" + u) : a.removeAttribute(s); break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                u && typeof u != "function" && typeof u != "symbol" ? a.setAttribute(s, "") : a.removeAttribute(s); break;
            case "capture":
            case "download":
                u === !0 ? a.setAttribute(s, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? a.setAttribute(s, u) : a.removeAttribute(s); break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? a.setAttribute(s, u) : a.removeAttribute(s); break;
            case "rowSpan":
            case "start":
                u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? a.removeAttribute(s) : a.setAttribute(s, u); break;
            case "popover":
                lt("beforetoggle", a), lt("toggle", a), Br(a, "popover", u); break;
            case "xlinkActuate":
                Ka(a, "http://www.w3.org/1999/xlink", "xlink:actuate", u); break;
            case "xlinkArcrole":
                Ka(a, "http://www.w3.org/1999/xlink", "xlink:arcrole", u); break;
            case "xlinkRole":
                Ka(a, "http://www.w3.org/1999/xlink", "xlink:role", u); break;
            case "xlinkShow":
                Ka(a, "http://www.w3.org/1999/xlink", "xlink:show", u); break;
            case "xlinkTitle":
                Ka(a, "http://www.w3.org/1999/xlink", "xlink:title", u); break;
            case "xlinkType":
                Ka(a, "http://www.w3.org/1999/xlink", "xlink:type", u); break;
            case "xmlBase":
                Ka(a, "http://www.w3.org/XML/1998/namespace", "xml:base", u); break;
            case "xmlLang":
                Ka(a, "http://www.w3.org/XML/1998/namespace", "xml:lang", u); break;
            case "xmlSpace":
                Ka(a, "http://www.w3.org/XML/1998/namespace", "xml:space", u); break;
            case "is":
                Br(a, "is", u); break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = Rv.get(s) || s, Br(a, s, u)) } }

    function vf(a, n, s, u, h, y) { switch (s) {
            case "style":
                ih(a, u, y); break;
            case "dangerouslySetInnerHTML":
                if (u != null) { if (typeof u != "object" || !("__html" in u)) throw Error(i(61)); if (s = u.__html, s != null) { if (h.children != null) throw Error(i(60));
                        a.innerHTML = s } } break;
            case "children":
                typeof u == "string" ? Wi(a, u) : (typeof u == "number" || typeof u == "bigint") && Wi(a, "" + u); break;
            case "onScroll":
                u != null && lt("scroll", a); break;
            case "onScrollEnd":
                u != null && lt("scrollend", a); break;
            case "onClick":
                u != null && (a.onclick = hc); break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Nt.hasOwnProperty(s)) e: { if (s[0] === "o" && s[1] === "n" && (h = s.endsWith("Capture"), n = s.slice(2, h ? s.length - 7 : void 0), y = a[G] || null, y = y != null ? y[s] : null, typeof y == "function" && a.removeEventListener(n, y, h), typeof u == "function")) { typeof y != "function" && y !== null && (s in a ? a[s] = null : a.hasAttribute(s) && a.removeAttribute(s)), a.addEventListener(n, u, h); break e }
                    s in a ? a[s] = u : u === !0 ? a.setAttribute(s, "") : Br(a, s, u) } } }

    function fr(a, n, s) { switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                lt("error", a), lt("load", a); var u = !1,
                    h = !1,
                    y; for (y in s)
                    if (s.hasOwnProperty(y)) { var T = s[y]; if (T != null) switch (y) {
                            case "src":
                                u = !0; break;
                            case "srcSet":
                                h = !0; break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(i(137, n));
                            default:
                                wt(a, n, y, T, s, null) } }
                h && wt(a, n, "srcSet", s.srcSet, s, null), u && wt(a, n, "src", s.src, s, null); return;
            case "input":
                lt("invalid", a); var P = y = T = h = null,
                    J = null,
                    oe = null; for (u in s)
                    if (s.hasOwnProperty(u)) { var Ee = s[u]; if (Ee != null) switch (u) {
                            case "name":
                                h = Ee; break;
                            case "type":
                                T = Ee; break;
                            case "checked":
                                J = Ee; break;
                            case "defaultChecked":
                                oe = Ee; break;
                            case "value":
                                y = Ee; break;
                            case "defaultValue":
                                P = Ee; break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (Ee != null) throw Error(i(137, n)); break;
                            default:
                                wt(a, n, u, Ee, s, null) } }
                th(a, y, P, J, oe, T, h, !1), Eo(a); return;
            case "select":
                lt("invalid", a), u = T = y = null; for (h in s)
                    if (s.hasOwnProperty(h) && (P = s[h], P != null)) switch (h) {
                        case "value":
                            y = P; break;
                        case "defaultValue":
                            T = P; break;
                        case "multiple":
                            u = P;
                        default:
                            wt(a, n, h, P, s, null) }
                    n = y, s = T, a.multiple = !!u, n != null ? Yi(a, !!u, n, !1) : s != null && Yi(a, !!u, s, !0); return;
            case "textarea":
                lt("invalid", a), y = h = u = null; for (T in s)
                    if (s.hasOwnProperty(T) && (P = s[T], P != null)) switch (T) {
                        case "value":
                            u = P; break;
                        case "defaultValue":
                            h = P; break;
                        case "children":
                            y = P; break;
                        case "dangerouslySetInnerHTML":
                            if (P != null) throw Error(i(91)); break;
                        default:
                            wt(a, n, T, P, s, null) }
                    ah(a, u, h, y), Eo(a); return;
            case "option":
                for (J in s)
                    if (s.hasOwnProperty(J) && (u = s[J], u != null)) switch (J) {
                        case "selected":
                            a.selected = u && typeof u != "function" && typeof u != "symbol"; break;
                        default:
                            wt(a, n, J, u, s, null) }
                    return;
            case "dialog":
                lt("cancel", a), lt("close", a); break;
            case "iframe":
            case "object":
                lt("load", a); break;
            case "video":
            case "audio":
                for (u = 0; u < Ss.length; u++) lt(Ss[u], a); break;
            case "image":
                lt("error", a), lt("load", a); break;
            case "details":
                lt("toggle", a); break;
            case "embed":
            case "source":
            case "link":
                lt("error", a), lt("load", a);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (oe in s)
                    if (s.hasOwnProperty(oe) && (u = s[oe], u != null)) switch (oe) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(i(137, n));
                        default:
                            wt(a, n, oe, u, s, null) }
                    return;
            default:
                if (ju(n)) { for (Ee in s) s.hasOwnProperty(Ee) && (u = s[Ee], u !== void 0 && vf(a, n, Ee, u, s, void 0)); return } } for (P in s) s.hasOwnProperty(P) && (u = s[P], u != null && wt(a, n, P, u, s, null)) }

    function ay(a, n, s, u) { switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var h = null,
                    y = null,
                    T = null,
                    P = null,
                    J = null,
                    oe = null,
                    Ee = null; for (be in s) { var Ce = s[be]; if (s.hasOwnProperty(be) && Ce != null) switch (be) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            J = Ce;
                        default:
                            u.hasOwnProperty(be) || wt(a, n, be, null, u, Ce) } } for (var pe in u) { var be = u[pe]; if (Ce = s[pe], u.hasOwnProperty(pe) && (be != null || Ce != null)) switch (pe) {
                        case "type":
                            y = be; break;
                        case "name":
                            h = be; break;
                        case "checked":
                            oe = be; break;
                        case "defaultChecked":
                            Ee = be; break;
                        case "value":
                            T = be; break;
                        case "defaultValue":
                            P = be; break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (be != null) throw Error(i(137, n)); break;
                        default:
                            be !== Ce && wt(a, n, pe, be, u, Ce) } }
                Ru(a, T, P, J, oe, Ee, y, h); return;
            case "select":
                be = T = P = pe = null; for (y in s)
                    if (J = s[y], s.hasOwnProperty(y) && J != null) switch (y) {
                        case "value":
                            break;
                        case "multiple":
                            be = J;
                        default:
                            u.hasOwnProperty(y) || wt(a, n, y, null, u, J) }
                    for (h in u)
                        if (y = u[h], J = s[h], u.hasOwnProperty(h) && (y != null || J != null)) switch (h) {
                            case "value":
                                pe = y; break;
                            case "defaultValue":
                                P = y; break;
                            case "multiple":
                                T = y;
                            default:
                                y !== J && wt(a, n, h, y, u, J) }
                        n = P, s = T, u = be, pe != null ? Yi(a, !!s, pe, !1) : !!u != !!s && (n != null ? Yi(a, !!s, n, !0) : Yi(a, !!s, s ? [] : "", !1)); return;
            case "textarea":
                be = pe = null; for (P in s)
                    if (h = s[P], s.hasOwnProperty(P) && h != null && !u.hasOwnProperty(P)) switch (P) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            wt(a, n, P, null, u, h) }
                    for (T in u)
                        if (h = u[T], y = s[T], u.hasOwnProperty(T) && (h != null || y != null)) switch (T) {
                            case "value":
                                pe = h; break;
                            case "defaultValue":
                                be = h; break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (h != null) throw Error(i(91)); break;
                            default:
                                h !== y && wt(a, n, T, h, u, y) }
                        rh(a, pe, be);
                return;
            case "option":
                for (var He in s)
                    if (pe = s[He], s.hasOwnProperty(He) && pe != null && !u.hasOwnProperty(He)) switch (He) {
                        case "selected":
                            a.selected = !1; break;
                        default:
                            wt(a, n, He, null, u, pe) }
                    for (J in u)
                        if (pe = u[J], be = s[J], u.hasOwnProperty(J) && pe !== be && (pe != null || be != null)) switch (J) {
                            case "selected":
                                a.selected = pe && typeof pe != "function" && typeof pe != "symbol"; break;
                            default:
                                wt(a, n, J, pe, u, be) }
                        return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var Ze in s) pe = s[Ze], s.hasOwnProperty(Ze) && pe != null && !u.hasOwnProperty(Ze) && wt(a, n, Ze, null, u, pe); for (oe in u)
                    if (pe = u[oe], be = s[oe], u.hasOwnProperty(oe) && pe !== be && (pe != null || be != null)) switch (oe) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (pe != null) throw Error(i(137, n)); break;
                        default:
                            wt(a, n, oe, pe, u, be) }
                    return;
            default:
                if (ju(n)) { for (var Ut in s) pe = s[Ut], s.hasOwnProperty(Ut) && pe !== void 0 && !u.hasOwnProperty(Ut) && vf(a, n, Ut, void 0, u, pe); for (Ee in u) pe = u[Ee], be = s[Ee], !u.hasOwnProperty(Ee) || pe === be || pe === void 0 && be === void 0 || vf(a, n, Ee, pe, u, be); return } } for (var ue in s) pe = s[ue], s.hasOwnProperty(ue) && pe != null && !u.hasOwnProperty(ue) && wt(a, n, ue, null, u, pe); for (Ce in u) pe = u[Ce], be = s[Ce], !u.hasOwnProperty(Ce) || pe === be || pe == null && be == null || wt(a, n, Ce, pe, u, be) } var yf = null,
        bf = null;

    function mc(a) { return a.nodeType === 9 ? a : a.ownerDocument }

    function Qm(a) { switch (a) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0 } }

    function Zm(a, n) { if (a === 0) switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0 }
        return a === 1 && n === "foreignObject" ? 0 : a }

    function Af(a, n) { return a === "textarea" || a === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null } var Ef = null;

    function ny() { var a = window.event; return a && a.type === "popstate" ? a === Ef ? !1 : (Ef = a, !0) : (Ef = null, !1) } var $m = typeof setTimeout == "function" ? setTimeout : void 0,
        iy = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Jm = typeof Promise == "function" ? Promise : void 0,
        ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jm < "u" ? function(a) { return Jm.resolve(null).then(a).catch(sy) } : $m;

    function sy(a) { setTimeout(function() { throw a }) }

    function wf(a, n) { var s = n,
            u = 0;
        do { var h = s.nextSibling; if (a.removeChild(s), h && h.nodeType === 8)
                if (s = h.data, s === "/$") { if (u === 0) { a.removeChild(h), ks(n); return }
                    u-- } else s !== "$" && s !== "$?" && s !== "$!" || u++;
            s = h } while (s);
        ks(n) }

    function _f(a) { var n = a.firstChild; for (n && n.nodeType === 10 && (n = n.nextSibling); n;) { var s = n; switch (n = n.nextSibling, s.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    _f(s), xe(s); continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (s.rel.toLowerCase() === "stylesheet") continue }
            a.removeChild(s) } }

    function oy(a, n, s, u) { for (; a.nodeType === 1;) { var h = s; if (a.nodeName.toLowerCase() !== n.toLowerCase()) { if (!u && (a.nodeName !== "INPUT" || a.type !== "hidden")) break } else if (u) { if (!a[he]) switch (n) {
                    case "meta":
                        if (!a.hasAttribute("itemprop")) break; return a;
                    case "link":
                        if (y = a.getAttribute("rel"), y === "stylesheet" && a.hasAttribute("data-precedence")) break; if (y !== h.rel || a.getAttribute("href") !== (h.href == null ? null : h.href) || a.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) || a.getAttribute("title") !== (h.title == null ? null : h.title)) break; return a;
                    case "style":
                        if (a.hasAttribute("data-precedence")) break; return a;
                    case "script":
                        if (y = a.getAttribute("src"), (y !== (h.src == null ? null : h.src) || a.getAttribute("type") !== (h.type == null ? null : h.type) || a.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin)) && y && a.hasAttribute("async") && !a.hasAttribute("itemprop")) break; return a;
                    default:
                        return a } } else if (n === "input" && a.type === "hidden") { var y = h.name == null ? null : "" + h.name; if (h.type === "hidden" && a.getAttribute("name") === y) return a } else return a; if (a = Na(a.nextSibling), a === null) break } return null }

    function cy(a, n, s) { if (n === "") return null; for (; a.nodeType !== 3;)
            if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !s || (a = Na(a.nextSibling), a === null)) return null;
        return a }

    function Na(a) { for (; a != null; a = a.nextSibling) { var n = a.nodeType; if (n === 1 || n === 3) break; if (n === 8) { if (n = a.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F") break; if (n === "/$") return null } } return a }

    function ex(a) { a = a.previousSibling; for (var n = 0; a;) { if (a.nodeType === 8) { var s = a.data; if (s === "$" || s === "$!" || s === "$?") { if (n === 0) return a;
                    n-- } else s === "/$" && n++ }
            a = a.previousSibling } return null }

    function tx(a, n, s) { switch (n = mc(s), a) {
            case "html":
                if (a = n.documentElement, !a) throw Error(i(452)); return a;
            case "head":
                if (a = n.head, !a) throw Error(i(453)); return a;
            case "body":
                if (a = n.body, !a) throw Error(i(454)); return a;
            default:
                throw Error(i(451)) } } var va = new Map,
        rx = new Set;

    function xc(a) { return typeof a.getRootNode == "function" ? a.getRootNode() : a.ownerDocument } var fn = L.d;
    L.d = { f: uy, r: fy, D: dy, C: hy, L: my, m: xy, X: gy, S: py, M: vy };

    function uy() { var a = fn.f(),
            n = sc(); return a || n }

    function fy(a) { var n = je(a);
        n !== null && n.tag === 5 && n.type === "form" ? D1(n) : fn.r(a) } var Al = typeof document > "u" ? null : document;

    function ax(a, n, s) { var u = Al; if (u && typeof n == "string" && n) { var h = oa(n);
            h = 'link[rel="' + a + '"][href="' + h + '"]', typeof s == "string" && (h += '[crossorigin="' + s + '"]'), rx.has(h) || (rx.add(h), a = { rel: a, crossOrigin: s, href: n }, u.querySelector(h) === null && (n = u.createElement("link"), fr(n, "link", a), Fe(n), u.head.appendChild(n))) } }

    function dy(a) { fn.D(a), ax("dns-prefetch", a, null) }

    function hy(a, n) { fn.C(a, n), ax("preconnect", a, n) }

    function my(a, n, s) { fn.L(a, n, s); var u = Al; if (u && a && n) { var h = 'link[rel="preload"][as="' + oa(n) + '"]';
            n === "image" && s && s.imageSrcSet ? (h += '[imagesrcset="' + oa(s.imageSrcSet) + '"]', typeof s.imageSizes == "string" && (h += '[imagesizes="' + oa(s.imageSizes) + '"]')) : h += '[href="' + oa(a) + '"]'; var y = h; switch (n) {
                case "style":
                    y = El(a); break;
                case "script":
                    y = wl(a) }
            va.has(y) || (a = U({ rel: "preload", href: n === "image" && s && s.imageSrcSet ? void 0 : a, as: n }, s), va.set(y, a), u.querySelector(h) !== null || n === "style" && u.querySelector(Cs(y)) || n === "script" && u.querySelector(Ds(y)) || (n = u.createElement("link"), fr(n, "link", a), Fe(n), u.head.appendChild(n))) } }

    function xy(a, n) { fn.m(a, n); var s = Al; if (s && a) { var u = n && typeof n.as == "string" ? n.as : "script",
                h = 'link[rel="modulepreload"][as="' + oa(u) + '"][href="' + oa(a) + '"]',
                y = h; switch (u) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    y = wl(a) } if (!va.has(y) && (a = U({ rel: "modulepreload", href: a }, n), va.set(y, a), s.querySelector(h) === null)) { switch (u) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (s.querySelector(Ds(y))) return }
                u = s.createElement("link"), fr(u, "link", a), Fe(u), s.head.appendChild(u) } } }

    function py(a, n, s) { fn.S(a, n, s); var u = Al; if (u && a) { var h = Re(u).hoistableStyles,
                y = El(a);
            n = n || "default"; var T = h.get(y); if (!T) { var P = { loading: 0, preload: null }; if (T = u.querySelector(Cs(y))) P.loading = 5;
                else { a = U({ rel: "stylesheet", href: a, "data-precedence": n }, s), (s = va.get(y)) && Tf(a, s); var J = T = u.createElement("link");
                    Fe(J), fr(J, "link", a), J._p = new Promise(function(oe, Ee) { J.onload = oe, J.onerror = Ee }), J.addEventListener("load", function() { P.loading |= 1 }), J.addEventListener("error", function() { P.loading |= 2 }), P.loading |= 4, pc(T, n, u) }
                T = { type: "stylesheet", instance: T, count: 1, state: P }, h.set(y, T) } } }

    function gy(a, n) { fn.X(a, n); var s = Al; if (s && a) { var u = Re(s).hoistableScripts,
                h = wl(a),
                y = u.get(h);
            y || (y = s.querySelector(Ds(h)), y || (a = U({ src: a, async: !0 }, n), (n = va.get(h)) && Sf(a, n), y = s.createElement("script"), Fe(y), fr(y, "link", a), s.head.appendChild(y)), y = { type: "script", instance: y, count: 1, state: null }, u.set(h, y)) } }

    function vy(a, n) { fn.M(a, n); var s = Al; if (s && a) { var u = Re(s).hoistableScripts,
                h = wl(a),
                y = u.get(h);
            y || (y = s.querySelector(Ds(h)), y || (a = U({ src: a, async: !0, type: "module" }, n), (n = va.get(h)) && Sf(a, n), y = s.createElement("script"), Fe(y), fr(y, "link", a), s.head.appendChild(y)), y = { type: "script", instance: y, count: 1, state: null }, u.set(h, y)) } }

    function nx(a, n, s, u) { var h = (h = st.current) ? xc(h) : null; if (!h) throw Error(i(446)); switch (a) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof s.precedence == "string" && typeof s.href == "string" ? (n = El(s.href), s = Re(h).hoistableStyles, u = s.get(n), u || (u = { type: "style", instance: null, count: 0, state: null }, s.set(n, u)), u) : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if (s.rel === "stylesheet" && typeof s.href == "string" && typeof s.precedence == "string") { a = El(s.href); var y = Re(h).hoistableStyles,
                        T = y.get(a); if (T || (h = h.ownerDocument || h, T = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, y.set(a, T), (y = h.querySelector(Cs(a))) && !y._p && (T.instance = y, T.state.loading = 5), va.has(a) || (s = { rel: "preload", as: "style", href: s.href, crossOrigin: s.crossOrigin, integrity: s.integrity, media: s.media, hrefLang: s.hrefLang, referrerPolicy: s.referrerPolicy }, va.set(a, s), y || yy(h, a, s, T.state))), n && u === null) throw Error(i(528, "")); return T } if (n && u !== null) throw Error(i(529, "")); return null;
            case "script":
                return n = s.async, s = s.src, typeof s == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wl(s), s = Re(h).hoistableScripts, u = s.get(n), u || (u = { type: "script", instance: null, count: 0, state: null }, s.set(n, u)), u) : { type: "void", instance: null, count: 0, state: null };
            default:
                throw Error(i(444, a)) } }

    function El(a) { return 'href="' + oa(a) + '"' }

    function Cs(a) { return 'link[rel="stylesheet"][' + a + "]" }

    function ix(a) { return U({}, a, { "data-precedence": a.precedence, precedence: null }) }

    function yy(a, n, s, u) { a.querySelector('link[rel="preload"][as="style"][' + n + "]") ? u.loading = 1 : (n = a.createElement("link"), u.preload = n, n.addEventListener("load", function() { return u.loading |= 1 }), n.addEventListener("error", function() { return u.loading |= 2 }), fr(n, "link", s), Fe(n), a.head.appendChild(n)) }

    function wl(a) { return '[src="' + oa(a) + '"]' }

    function Ds(a) { return "script[async]" + a }

    function lx(a, n, s) { if (n.count++, n.instance === null) switch (n.type) {
            case "style":
                var u = a.querySelector('style[data-href~="' + oa(s.href) + '"]'); if (u) return n.instance = u, Fe(u), u; var h = U({}, s, { "data-href": s.href, "data-precedence": s.precedence, href: null, precedence: null }); return u = (a.ownerDocument || a).createElement("style"), Fe(u), fr(u, "style", h), pc(u, s.precedence, a), n.instance = u;
            case "stylesheet":
                h = El(s.href); var y = a.querySelector(Cs(h)); if (y) return n.state.loading |= 4, n.instance = y, Fe(y), y;
                u = ix(s), (h = va.get(h)) && Tf(u, h), y = (a.ownerDocument || a).createElement("link"), Fe(y); var T = y; return T._p = new Promise(function(P, J) { T.onload = P, T.onerror = J }), fr(y, "link", u), n.state.loading |= 4, pc(y, s.precedence, a), n.instance = y;
            case "script":
                return y = wl(s.src), (h = a.querySelector(Ds(y))) ? (n.instance = h, Fe(h), h) : (u = s, (h = va.get(y)) && (u = U({}, s), Sf(u, h)), a = a.ownerDocument || a, h = a.createElement("script"), Fe(h), fr(h, "link", u), a.head.appendChild(h), n.instance = h);
            case "void":
                return null;
            default:
                throw Error(i(443, n.type)) } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (u = n.instance, n.state.loading |= 4, pc(u, s.precedence, a)); return n.instance }

    function pc(a, n, s) { for (var u = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), h = u.length ? u[u.length - 1] : null, y = h, T = 0; T < u.length; T++) { var P = u[T]; if (P.dataset.precedence === n) y = P;
            else if (y !== h) break }
        y ? y.parentNode.insertBefore(a, y.nextSibling) : (n = s.nodeType === 9 ? s.head : s, n.insertBefore(a, n.firstChild)) }

    function Tf(a, n) { a.crossOrigin == null && (a.crossOrigin = n.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = n.referrerPolicy), a.title == null && (a.title = n.title) }

    function Sf(a, n) { a.crossOrigin == null && (a.crossOrigin = n.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = n.referrerPolicy), a.integrity == null && (a.integrity = n.integrity) } var gc = null;

    function sx(a, n, s) { if (gc === null) { var u = new Map,
                h = gc = new Map;
            h.set(s, u) } else h = gc, u = h.get(s), u || (u = new Map, h.set(s, u)); if (u.has(a)) return u; for (u.set(a, null), s = s.getElementsByTagName(a), h = 0; h < s.length; h++) { var y = s[h]; if (!(y[he] || y[z] || a === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") { var T = y.getAttribute(n) || "";
                T = a + T; var P = u.get(T);
                P ? P.push(y) : u.set(T, [y]) } } return u }

    function ox(a, n, s) { a = a.ownerDocument || a, a.head.insertBefore(s, n === "title" ? a.querySelector("head > title") : null) }

    function by(a, n, s) { if (s === 1 || n.itemProp != null) return !1; switch (a) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break; return !0;
            case "link":
                if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break; switch (n.rel) {
                    case "stylesheet":
                        return a = n.disabled, typeof n.precedence == "string" && a == null;
                    default:
                        return !0 }
            case "script":
                if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0 } return !1 }

    function cx(a) { return !(a.type === "stylesheet" && (a.state.loading & 3) === 0) } var Os = null;

    function Ay() {}

    function Ey(a, n, s) { if (Os === null) throw Error(i(475)); var u = Os; if (n.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (n.state.loading & 4) === 0) { if (n.instance === null) { var h = El(s.href),
                    y = a.querySelector(Cs(h)); if (y) { a = y._p, a !== null && typeof a == "object" && typeof a.then == "function" && (u.count++, u = vc.bind(u), a.then(u, u)), n.state.loading |= 4, n.instance = y, Fe(y); return }
                y = a.ownerDocument || a, s = ix(s), (h = va.get(h)) && Tf(s, h), y = y.createElement("link"), Fe(y); var T = y;
                T._p = new Promise(function(P, J) { T.onload = P, T.onerror = J }), fr(y, "link", s), n.instance = y }
            u.stylesheets === null && (u.stylesheets = new Map), u.stylesheets.set(n, a), (a = n.state.preload) && (n.state.loading & 3) === 0 && (u.count++, n = vc.bind(u), a.addEventListener("load", n), a.addEventListener("error", n)) } }

    function wy() { if (Os === null) throw Error(i(475)); var a = Os; return a.stylesheets && a.count === 0 && Nf(a, a.stylesheets), 0 < a.count ? function(n) { var s = setTimeout(function() { if (a.stylesheets && Nf(a, a.stylesheets), a.unsuspend) { var u = a.unsuspend;
                    a.unsuspend = null, u() } }, 6e4); return a.unsuspend = n,
                function() { a.unsuspend = null, clearTimeout(s) } } : null }

    function vc() { if (this.count--, this.count === 0) { if (this.stylesheets) Nf(this, this.stylesheets);
            else if (this.unsuspend) { var a = this.unsuspend;
                this.unsuspend = null, a() } } } var yc = null;

    function Nf(a, n) { a.stylesheets = null, a.unsuspend !== null && (a.count++, yc = new Map, n.forEach(_y, a), yc = null, vc.call(a)) }

    function _y(a, n) { if (!(n.state.loading & 4)) { var s = yc.get(a); if (s) var u = s.get(null);
            else { s = new Map, yc.set(a, s); for (var h = a.querySelectorAll("link[data-precedence],style[data-precedence]"), y = 0; y < h.length; y++) { var T = h[y];
                    (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (s.set(T.dataset.precedence, T), u = T) }
                u && s.set(null, u) }
            h = n.instance, T = h.getAttribute("data-precedence"), y = s.get(T) || u, y === u && s.set(null, h), s.set(T, h), this.count++, u = vc.bind(this), h.addEventListener("load", u), h.addEventListener("error", u), y ? y.parentNode.insertBefore(h, y.nextSibling) : (a = a.nodeType === 9 ? a.head : a, a.insertBefore(h, a.firstChild)), n.state.loading |= 4 } } var Rs = { $$typeof: b, Provider: null, Consumer: null, _currentValue: M, _currentValue2: M, _threadCount: 0 };

    function Ty(a, n, s, u, h, y, T, P) { this.tag = 1, this.containerInfo = a, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.hiddenUpdates = Gl(null), this.identifierPrefix = u, this.onUncaughtError = h, this.onCaughtError = y, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = P, this.incompleteTransitions = new Map }

    function ux(a, n, s, u, h, y, T, P, J, oe, Ee, Ce) { return a = new Ty(a, n, s, T, P, J, oe, Ce), n = 1, y === !0 && (n |= 24), y = pa(3, null, null, n), a.current = y, y.stateNode = a, n = n0(), n.refCount++, a.pooledCache = n, n.refCount++, y.memoizedState = { element: u, isDehydrated: s, cache: n }, U0(y), a }

    function fx(a) { return a ? (a = tl, a) : tl }

    function dx(a, n, s, u, h, y) { h = fx(h), u.context === null ? u.context = h : u.pendingContext = h, u = Fn(n), u.payload = { element: s }, y = y === void 0 ? null : y, y !== null && (u.callback = y), s = jn(a, u, n), s !== null && (Cr(s, a, n), ms(s, a, n)) }

    function hx(a, n) { if (a = a.memoizedState, a !== null && a.dehydrated !== null) { var s = a.retryLane;
            a.retryLane = s !== 0 && s < n ? s : n } }

    function Cf(a, n) { hx(a, n), (a = a.alternate) && hx(a, n) }

    function mx(a) { if (a.tag === 13) { var n = Tn(a, 67108864);
            n !== null && Cr(n, a, 67108864), Cf(a, 67108864) } } var bc = !0;

    function Sy(a, n, s, u) { var h = _.T;
        _.T = null; var y = L.p; try { L.p = 2, Df(a, n, s, u) } finally { L.p = y, _.T = h } }

    function Ny(a, n, s, u) { var h = _.T;
        _.T = null; var y = L.p; try { L.p = 8, Df(a, n, s, u) } finally { L.p = y, _.T = h } }

    function Df(a, n, s, u) { if (bc) { var h = Of(u); if (h === null) gf(a, n, u, Ac, s), px(a, u);
            else if (Dy(h, a, n, s, u)) u.stopPropagation();
            else if (px(a, u), n & 4 && -1 < Cy.indexOf(a)) { for (; h !== null;) { var y = je(h); if (y !== null) switch (y.tag) {
                        case 3:
                            if (y = y.stateNode, y.current.memoizedState.isDehydrated) { var T = Ht(y.pendingLanes); if (T !== 0) { var P = y; for (P.pendingLanes |= 2, P.entangledLanes |= 2; T;) { var J = 1 << 31 - or(T);
                                        P.entanglements[1] |= J, T &= ~J }
                                    Ia(y), (kt & 6) === 0 && (nc = ae() + 500, Ts(0)) } } break;
                        case 13:
                            P = Tn(y, 2), P !== null && Cr(P, y, 2), sc(), Cf(y, 2) }
                    if (y = Of(u), y === null && gf(a, n, u, Ac, s), y === h) break;
                    h = y }
                h !== null && u.stopPropagation() } else gf(a, n, u, null, s) } }

    function Of(a) { return a = ku(a), Rf(a) } var Ac = null;

    function Rf(a) { if (Ac = null, a = De(a), a !== null) { var n = se(a); if (n === null) a = null;
            else { var s = n.tag; if (s === 13) { if (a = te(n), a !== null) return a;
                    a = null } else if (s === 3) { if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
                    a = null } else n !== a && (a = null) } } return Ac = a, null }

    function xx(a) { switch (a) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Le()) {
                    case Ie:
                        return 2;
                    case Ot:
                        return 8;
                    case it:
                    case Hr:
                        return 32;
                    case Rt:
                        return 268435456;
                    default:
                        return 32 }
            default:
                return 32 } } var Ff = !1,
        zn = null,
        In = null,
        Hn = null,
        Fs = new Map,
        js = new Map,
        Gn = [],
        Cy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function px(a, n) { switch (a) {
            case "focusin":
            case "focusout":
                zn = null; break;
            case "dragenter":
            case "dragleave":
                In = null; break;
            case "mouseover":
            case "mouseout":
                Hn = null; break;
            case "pointerover":
            case "pointerout":
                Fs.delete(n.pointerId); break;
            case "gotpointercapture":
            case "lostpointercapture":
                js.delete(n.pointerId) } }

    function Bs(a, n, s, u, h, y) { return a === null || a.nativeEvent !== y ? (a = { blockedOn: n, domEventName: s, eventSystemFlags: u, nativeEvent: y, targetContainers: [h] }, n !== null && (n = je(n), n !== null && mx(n)), a) : (a.eventSystemFlags |= u, n = a.targetContainers, h !== null && n.indexOf(h) === -1 && n.push(h), a) }

    function Dy(a, n, s, u, h) { switch (n) {
            case "focusin":
                return zn = Bs(zn, a, n, s, u, h), !0;
            case "dragenter":
                return In = Bs(In, a, n, s, u, h), !0;
            case "mouseover":
                return Hn = Bs(Hn, a, n, s, u, h), !0;
            case "pointerover":
                var y = h.pointerId; return Fs.set(y, Bs(Fs.get(y) || null, a, n, s, u, h)), !0;
            case "gotpointercapture":
                return y = h.pointerId, js.set(y, Bs(js.get(y) || null, a, n, s, u, h)), !0 } return !1 }

    function gx(a) { var n = De(a.target); if (n !== null) { var s = se(n); if (s !== null) { if (n = s.tag, n === 13) { if (n = te(s), n !== null) { a.blockedOn = n, R(a.priority, function() { if (s.tag === 13) { var u = Kr(),
                                    h = Tn(s, u);
                                h !== null && Cr(h, s, u), Cf(s, u) } }); return } } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) { a.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null; return } } }
        a.blockedOn = null }

    function Ec(a) { if (a.blockedOn !== null) return !1; for (var n = a.targetContainers; 0 < n.length;) { var s = Of(a.nativeEvent); if (s === null) { s = a.nativeEvent; var u = new s.constructor(s.type, s);
                Bu = u, s.target.dispatchEvent(u), Bu = null } else return n = je(s), n !== null && mx(n), a.blockedOn = s, !1;
            n.shift() } return !0 }

    function vx(a, n, s) { Ec(a) && s.delete(n) }

    function Oy() { Ff = !1, zn !== null && Ec(zn) && (zn = null), In !== null && Ec(In) && (In = null), Hn !== null && Ec(Hn) && (Hn = null), Fs.forEach(vx), js.forEach(vx) }

    function wc(a, n) { a.blockedOn === n && (a.blockedOn = null, Ff || (Ff = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, Oy))) } var _c = null;

    function yx(a) { _c !== a && (_c = a, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() { _c === a && (_c = null); for (var n = 0; n < a.length; n += 3) { var s = a[n],
                    u = a[n + 1],
                    h = a[n + 2]; if (typeof u != "function") { if (Rf(u || s) === null) continue; break } var y = je(s);
                y !== null && (a.splice(n, 3), n -= 3, b0(y, { pending: !0, data: h, method: s.method, action: u }, u, h)) } })) }

    function ks(a) {
        function n(J) { return wc(J, a) }
        zn !== null && wc(zn, a), In !== null && wc(In, a), Hn !== null && wc(Hn, a), Fs.forEach(n), js.forEach(n); for (var s = 0; s < Gn.length; s++) { var u = Gn[s];
            u.blockedOn === a && (u.blockedOn = null) } for (; 0 < Gn.length && (s = Gn[0], s.blockedOn === null);) gx(s), s.blockedOn === null && Gn.shift(); if (s = (a.ownerDocument || a).$$reactFormReplay, s != null)
            for (u = 0; u < s.length; u += 3) { var h = s[u],
                    y = s[u + 1],
                    T = h[G] || null; if (typeof y == "function") T || yx(s);
                else if (T) { var P = null; if (y && y.hasAttribute("formAction")) { if (h = y, T = y[G] || null) P = T.formAction;
                        else if (Rf(h) !== null) continue } else P = T.action;
                    typeof P == "function" ? s[u + 1] = P : (s.splice(u, 3), u -= 3), yx(s) } } }

    function jf(a) { this._internalRoot = a }
    Tc.prototype.render = jf.prototype.render = function(a) { var n = this._internalRoot; if (n === null) throw Error(i(409)); var s = n.current,
            u = Kr();
        dx(s, u, a, n, null, null) }, Tc.prototype.unmount = jf.prototype.unmount = function() { var a = this._internalRoot; if (a !== null) { this._internalRoot = null; var n = a.containerInfo;
            a.tag === 0 && vl(), dx(a.current, 2, null, a, null, null), sc(), n[Y] = null } };

    function Tc(a) { this._internalRoot = a }
    Tc.prototype.unstable_scheduleHydration = function(a) { if (a) { var n = bo();
            a = { blockedOn: null, target: a, priority: n }; for (var s = 0; s < Gn.length && n !== 0 && n < Gn[s].priority; s++);
            Gn.splice(s, 0, a), s === 0 && gx(a) } }; var bx = t.version; if (bx !== "19.0.0") throw Error(i(527, bx, "19.0.0"));
    L.findDOMNode = function(a) { var n = a._reactInternals; if (n === void 0) throw typeof a.render == "function" ? Error(i(188)) : (a = Object.keys(a).join(","), Error(i(268, a))); return a = ce(n), a = a !== null ? k(a) : null, a = a === null ? null : a.stateNode, a }; var Ry = { bundleType: 0, version: "19.0.0", rendererPackageName: "react-dom", currentDispatcherRef: _, findFiberByHostInstance: De, reconcilerVersion: "19.0.0" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var Sc = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Sc.isDisabled && Sc.supportsFiber) try { er = Sc.inject(Ry), Tt = Sc } catch {} } return Ls.createRoot = function(a, n) { if (!l(a)) throw Error(i(299)); var s = !1,
            u = "",
            h = L1,
            y = U1,
            T = P1,
            P = null; return n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (h = n.onUncaughtError), n.onCaughtError !== void 0 && (y = n.onCaughtError), n.onRecoverableError !== void 0 && (T = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (P = n.unstable_transitionCallbacks)), n = ux(a, 1, !1, null, null, s, u, h, y, T, P, null), a[Y] = n.current, pf(a.nodeType === 8 ? a.parentNode : a), new jf(n) }, Ls.hydrateRoot = function(a, n, s) { if (!l(a)) throw Error(i(299)); var u = !1,
            h = "",
            y = L1,
            T = U1,
            P = P1,
            J = null,
            oe = null; return s != null && (s.unstable_strictMode === !0 && (u = !0), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onUncaughtError !== void 0 && (y = s.onUncaughtError), s.onCaughtError !== void 0 && (T = s.onCaughtError), s.onRecoverableError !== void 0 && (P = s.onRecoverableError), s.unstable_transitionCallbacks !== void 0 && (J = s.unstable_transitionCallbacks), s.formState !== void 0 && (oe = s.formState)), n = ux(a, 1, !0, n, s ? ? null, u, h, y, T, P, J, oe), n.context = fx(null), s = n.current, u = Kr(), h = Fn(u), h.callback = null, jn(s, h, u), n.current.lanes = u, ni(n, u), Ia(n), a[Y] = n.current, pf(a), new Tc(n) }, Ls.version = "19.0.0", Ls }
var Ox;

function Vy() { if (Ox) return Mf.exports;
    Ox = 1;

    function e() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (t) { console.error(t) } } return e(), Mf.exports = Gy(), Mf.exports }
var qy = Vy();
Vp();
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qs() { return Qs = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e }, Qs.apply(this, arguments) }
var Yn;
(function(e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE" })(Yn || (Yn = {}));
const Rx = "popstate";

function Xy(e) { e === void 0 && (e = {});

    function t(i, l) { let { pathname: o, search: c, hash: f } = i.location; return ed("", { pathname: o, search: c, hash: f }, l.state && l.state.usr || null, l.state && l.state.key || "default") }

    function r(i, l) { return typeof l == "string" ? l : Gc(l) } return Wy(t, r, null, e) }

function Vt(e, t) { if (e === !1 || e === null || typeof e > "u") throw new Error(t) }

function qp(e, t) { if (!e) { typeof console < "u" && console.warn(t); try { throw new Error(t) } catch {} } }

function Yy() { return Math.random().toString(36).substr(2, 8) }

function Fx(e, t) { return { usr: e.state, key: e.key, idx: t } }

function ed(e, t, r, i) { return r === void 0 && (r = null), Qs({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? kl(t) : t, { state: r, key: t && t.key || i || Yy() }) }

function Gc(e) { let { pathname: t = "/", search: r = "", hash: i = "" } = e; return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i), t }

function kl(e) { let t = {}; if (e) { let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r)); let i = e.indexOf("?");
        i >= 0 && (t.search = e.substr(i), e = e.substr(0, i)), e && (t.pathname = e) } return t }

function Wy(e, t, r, i) { i === void 0 && (i = {}); let { window: l = document.defaultView, v5Compat: o = !1 } = i, c = l.history, f = Yn.Pop, p = null, x = m();
    x == null && (x = 0, c.replaceState(Qs({}, c.state, { idx: x }), ""));

    function m() { return (c.state || { idx: null }).idx }

    function g() { f = Yn.Pop; let w = m(),
            S = w == null ? null : w - x;
        x = w, p && p({ action: f, location: E.location, delta: S }) }

    function v(w, S) { f = Yn.Push; let O = ed(E.location, w, S);
        x = m() + 1; let D = Fx(O, x),
            F = E.createHref(O); try { c.pushState(D, "", F) } catch (K) { if (K instanceof DOMException && K.name === "DataCloneError") throw K;
            l.location.assign(F) }
        o && p && p({ action: f, location: E.location, delta: 1 }) }

    function b(w, S) { f = Yn.Replace; let O = ed(E.location, w, S);
        x = m(); let D = Fx(O, x),
            F = E.createHref(O);
        c.replaceState(D, "", F), o && p && p({ action: f, location: E.location, delta: 0 }) }

    function A(w) { let S = l.location.origin !== "null" ? l.location.origin : l.location.href,
            O = typeof w == "string" ? w : Gc(w); return O = O.replace(/ $/, "%20"), Vt(S, "No window.location.(origin|href) available to create URL for href: " + O), new URL(O, S) } let E = {get action() { return f }, get location() { return e(l, c) }, listen(w) { if (p) throw new Error("A history only accepts one active listener"); return l.addEventListener(Rx, g), p = w, () => { l.removeEventListener(Rx, g), p = null } }, createHref(w) { return t(l, w) }, createURL: A, encodeLocation(w) { let S = A(w); return { pathname: S.pathname, search: S.search, hash: S.hash } }, push: v, replace: b, go(w) { return c.go(w) } }; return E }
var jx;
(function(e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error" })(jx || (jx = {}));

function Ky(e, t, r) { return r === void 0 && (r = "/"), Qy(e, t, r) }

function Qy(e, t, r, i) { let l = typeof t == "string" ? kl(t) : t,
        o = bd(l.pathname || "/", r); if (o == null) return null; let c = Xp(e);
    Zy(c); let f = null; for (let p = 0; f == null && p < c.length; ++p) { let x = c3(o);
        f = l3(c[p], x) } return f }

function Xp(e, t, r, i) { t === void 0 && (t = []), r === void 0 && (r = []), i === void 0 && (i = ""); let l = (o, c, f) => { let p = { relativePath: f === void 0 ? o.path || "" : f, caseSensitive: o.caseSensitive === !0, childrenIndex: c, route: o };
        p.relativePath.startsWith("/") && (Vt(p.relativePath.startsWith(i), 'Absolute route path "' + p.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), p.relativePath = p.relativePath.slice(i.length)); let x = Qn([i, p.relativePath]),
            m = r.concat(p);
        o.children && o.children.length > 0 && (Vt(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + x + '".')), Xp(o.children, t, m, x)), !(o.path == null && !o.index) && t.push({ path: x, score: n3(x, o.index), routesMeta: m }) }; return e.forEach((o, c) => { var f; if (o.path === "" || !((f = o.path) != null && f.includes("?"))) l(o, c);
        else
            for (let p of Yp(o.path)) l(o, c, p) }), t }

function Yp(e) { let t = e.split("/"); if (t.length === 0) return []; let [r, ...i] = t, l = r.endsWith("?"), o = r.replace(/\?$/, ""); if (i.length === 0) return l ? [o, ""] : [o]; let c = Yp(i.join("/")),
        f = []; return f.push(...c.map(p => p === "" ? o : [o, p].join("/"))), l && f.push(...c), f.map(p => e.startsWith("/") && p === "" ? "/" : p) }

function Zy(e) { e.sort((t, r) => t.score !== r.score ? r.score - t.score : i3(t.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex))) }
const $y = /^:[\w-]+$/,
    Jy = 3,
    e3 = 2,
    t3 = 1,
    r3 = 10,
    a3 = -2,
    Bx = e => e === "*";

function n3(e, t) { let r = e.split("/"),
        i = r.length; return r.some(Bx) && (i += a3), t && (i += e3), r.filter(l => !Bx(l)).reduce((l, o) => l + ($y.test(o) ? Jy : o === "" ? t3 : r3), i) }

function i3(e, t) { return e.length === t.length && e.slice(0, -1).every((i, l) => i === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0 }

function l3(e, t, r) { let { routesMeta: i } = e, l = {}, o = "/", c = []; for (let f = 0; f < i.length; ++f) { let p = i[f],
            x = f === i.length - 1,
            m = o === "/" ? t : t.slice(o.length) || "/",
            g = s3({ path: p.relativePath, caseSensitive: p.caseSensitive, end: x }, m),
            v = p.route; if (!g) return null;
        Object.assign(l, g.params), c.push({ params: l, pathname: Qn([o, g.pathname]), pathnameBase: h3(Qn([o, g.pathnameBase])), route: v }), g.pathnameBase !== "/" && (o = Qn([o, g.pathnameBase])) } return c }

function s3(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [r, i] = o3(e.path, e.caseSensitive, e.end), l = t.match(r); if (!l) return null; let o = l[0],
        c = o.replace(/(.)\/+$/, "$1"),
        f = l.slice(1); return { params: i.reduce((x, m, g) => { let { paramName: v, isOptional: b } = m; if (v === "*") { let E = f[g] || "";
                c = o.slice(0, o.length - E.length).replace(/(.)\/+$/, "$1") } const A = f[g]; return b && !A ? x[v] = void 0 : x[v] = (A || "").replace(/%2F/g, "/"), x }, {}), pathname: o, pathnameBase: c, pattern: e } }

function o3(e, t, r) { t === void 0 && (t = !1), r === void 0 && (r = !0), qp(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let i = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, p) => (i.push({ paramName: f, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")); return e.endsWith("*") ? (i.push({ paramName: "*" }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), i] }

function c3(e) { try { return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/") } catch (t) { return qp(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e } }

function bd(e, t) { if (t === "/") return e; if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; let r = t.endsWith("/") ? t.length - 1 : t.length,
        i = e.charAt(r); return i && i !== "/" ? null : e.slice(r) || "/" }

function u3(e, t) { t === void 0 && (t = "/"); let { pathname: r, search: i = "", hash: l = "" } = typeof e == "string" ? kl(e) : e; return { pathname: r ? r.startsWith("/") ? r : f3(r, t) : t, search: m3(i), hash: x3(l) } }

function f3(e, t) { let r = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(l => { l === ".." ? r.length > 1 && r.pop() : l !== "." && r.push(l) }), r.length > 1 ? r.join("/") : "/" }

function zf(e, t, r, i) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.' }

function d3(e) { return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0) }

function Ad(e, t) { let r = d3(e); return t ? r.map((i, l) => l === r.length - 1 ? i.pathname : i.pathnameBase) : r.map(i => i.pathnameBase) }

function Ed(e, t, r, i) { i === void 0 && (i = !1); let l;
    typeof e == "string" ? l = kl(e) : (l = Qs({}, e), Vt(!l.pathname || !l.pathname.includes("?"), zf("?", "pathname", "search", l)), Vt(!l.pathname || !l.pathname.includes("#"), zf("#", "pathname", "hash", l)), Vt(!l.search || !l.search.includes("#"), zf("#", "search", "hash", l))); let o = e === "" || l.pathname === "",
        c = o ? "/" : l.pathname,
        f; if (c == null) f = r;
    else { let g = t.length - 1; if (!i && c.startsWith("..")) { let v = c.split("/"); for (; v[0] === "..";) v.shift(), g -= 1;
            l.pathname = v.join("/") }
        f = g >= 0 ? t[g] : "/" } let p = u3(l, f),
        x = c && c !== "/" && c.endsWith("/"),
        m = (o || c === ".") && r.endsWith("/"); return !p.pathname.endsWith("/") && (x || m) && (p.pathname += "/"), p }
const Qn = e => e.join("/").replace(/\/\/+/g, "/"),
    h3 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    m3 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    x3 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function p3(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e }
const Wp = ["post", "put", "patch", "delete"];
new Set(Wp);
const g3 = ["get", ...Wp];
new Set(g3);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zs() { return Zs = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e }, Zs.apply(this, arguments) }
const wd = ne.createContext(null),
    v3 = ne.createContext(null),
    ei = ne.createContext(null),
    hu = ne.createContext(null),
    yn = ne.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Kp = ne.createContext(null);

function y3(e, t) { let { relative: r } = t === void 0 ? {} : t;
    Ml() || Vt(!1); let { basename: i, navigator: l } = ne.useContext(ei), { hash: o, pathname: c, search: f } = Zp(e, { relative: r }), p = c; return i !== "/" && (p = c === "/" ? i : Qn([i, c])), l.createHref({ pathname: p, search: f, hash: o }) }

function Ml() { return ne.useContext(hu) != null }

function ra() { return Ml() || Vt(!1), ne.useContext(hu).location }

function Qp(e) { ne.useContext(ei).static || ne.useLayoutEffect(e) }

function aa() { let { isDataRoute: e } = ne.useContext(yn); return e ? j3() : b3() }

function b3() { Ml() || Vt(!1); let e = ne.useContext(wd),
        { basename: t, future: r, navigator: i } = ne.useContext(ei),
        { matches: l } = ne.useContext(yn),
        { pathname: o } = ra(),
        c = JSON.stringify(Ad(l, r.v7_relativeSplatPath)),
        f = ne.useRef(!1); return Qp(() => { f.current = !0 }), ne.useCallback(function(x, m) { if (m === void 0 && (m = {}), !f.current) return; if (typeof x == "number") { i.go(x); return } let g = Ed(x, JSON.parse(c), o, m.relative === "path");
        e == null && t !== "/" && (g.pathname = g.pathname === "/" ? t : Qn([t, g.pathname])), (m.replace ? i.replace : i.push)(g, m.state, m) }, [t, i, c, o, e]) }

function A3() { let { matches: e } = ne.useContext(yn), t = e[e.length - 1]; return t ? t.params : {} }

function Zp(e, t) { let { relative: r } = t === void 0 ? {} : t, { future: i } = ne.useContext(ei), { matches: l } = ne.useContext(yn), { pathname: o } = ra(), c = JSON.stringify(Ad(l, i.v7_relativeSplatPath)); return ne.useMemo(() => Ed(e, JSON.parse(c), o, r === "path"), [e, c, o, r]) }

function E3(e, t) { return w3(e, t) }

function w3(e, t, r, i) { Ml() || Vt(!1); let { navigator: l } = ne.useContext(ei), { matches: o } = ne.useContext(yn), c = o[o.length - 1], f = c ? c.params : {};
    c && c.pathname; let p = c ? c.pathnameBase : "/";
    c && c.route; let x = ra(),
        m; if (t) { var g; let w = typeof t == "string" ? kl(t) : t;
        p === "/" || (g = w.pathname) != null && g.startsWith(p) || Vt(!1), m = w } else m = x; let v = m.pathname || "/",
        b = v; if (p !== "/") { let w = p.replace(/^\//, "").split("/");
        b = "/" + v.replace(/^\//, "").split("/").slice(w.length).join("/") } let A = Ky(e, { pathname: b }),
        E = C3(A && A.map(w => Object.assign({}, w, { params: Object.assign({}, f, w.params), pathname: Qn([p, l.encodeLocation ? l.encodeLocation(w.pathname).pathname : w.pathname]), pathnameBase: w.pathnameBase === "/" ? p : Qn([p, l.encodeLocation ? l.encodeLocation(w.pathnameBase).pathname : w.pathnameBase]) })), o, r, i); return t && E ? ne.createElement(hu.Provider, { value: { location: Zs({ pathname: "/", search: "", hash: "", state: null, key: "default" }, m), navigationType: Yn.Pop } }, E) : E }

function _3() { let e = F3(),
        t = p3(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        r = e instanceof Error ? e.stack : null,
        l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return ne.createElement(ne.Fragment, null, ne.createElement("h2", null, "Unexpected Application Error!"), ne.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? ne.createElement("pre", { style: l }, r) : null, null) }
const T3 = ne.createElement(_3, null);
class S3 extends ne.Component { constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error } }
    static getDerivedStateFromError(t) { return { error: t } }
    static getDerivedStateFromProps(t, r) { return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : r.error, location: r.location, revalidation: t.revalidation || r.revalidation } }
    componentDidCatch(t, r) { console.error("React Router caught the following error during render", t, r) }
    render() { return this.state.error !== void 0 ? ne.createElement(yn.Provider, { value: this.props.routeContext }, ne.createElement(Kp.Provider, { value: this.state.error, children: this.props.component })) : this.props.children } }

function N3(e) { let { routeContext: t, match: r, children: i } = e, l = ne.useContext(wd); return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), ne.createElement(yn.Provider, { value: t }, i) }

function C3(e, t, r, i) { var l; if (t === void 0 && (t = []), r === void 0 && (r = null), i === void 0 && (i = null), e == null) { var o; if (!r) return null; if (r.errors) e = r.matches;
        else if ((o = i) != null && o.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
        else return null } let c = e,
        f = (l = r) == null ? void 0 : l.errors; if (f != null) { let m = c.findIndex(g => g.route.id && (f == null ? void 0 : f[g.route.id]) !== void 0);
        m >= 0 || Vt(!1), c = c.slice(0, Math.min(c.length, m + 1)) } let p = !1,
        x = -1; if (r && i && i.v7_partialHydration)
        for (let m = 0; m < c.length; m++) { let g = c[m]; if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (x = m), g.route.id) { let { loaderData: v, errors: b } = r, A = g.route.loader && v[g.route.id] === void 0 && (!b || b[g.route.id] === void 0); if (g.route.lazy || A) { p = !0, x >= 0 ? c = c.slice(0, x + 1) : c = [c[0]]; break } } }
    return c.reduceRight((m, g, v) => { let b, A = !1,
            E = null,
            w = null;
        r && (b = f && g.route.id ? f[g.route.id] : void 0, E = g.route.errorElement || T3, p && (x < 0 && v === 0 ? (B3("route-fallback"), A = !0, w = null) : x === v && (A = !0, w = g.route.hydrateFallbackElement || null))); let S = t.concat(c.slice(0, v + 1)),
            O = () => { let D; return b ? D = E : A ? D = w : g.route.Component ? D = ne.createElement(g.route.Component, null) : g.route.element ? D = g.route.element : D = m, ne.createElement(N3, { match: g, routeContext: { outlet: m, matches: S, isDataRoute: r != null }, children: D }) }; return r && (g.route.ErrorBoundary || g.route.errorElement || v === 0) ? ne.createElement(S3, { location: r.location, revalidation: r.revalidation, component: E, error: b, children: O(), routeContext: { outlet: null, matches: S, isDataRoute: !0 } }) : O() }, null) }
var $p = function(e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e }($p || {}),
    Jp = function(e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e }(Jp || {});

function D3(e) { let t = ne.useContext(wd); return t || Vt(!1), t }

function O3(e) { let t = ne.useContext(v3); return t || Vt(!1), t }

function R3(e) { let t = ne.useContext(yn); return t || Vt(!1), t }

function e2(e) { let t = R3(),
        r = t.matches[t.matches.length - 1]; return r.route.id || Vt(!1), r.route.id }

function F3() { var e; let t = ne.useContext(Kp),
        r = O3(),
        i = e2(); return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[i] }

function j3() { let { router: e } = D3($p.UseNavigateStable), t = e2(Jp.UseNavigateStable), r = ne.useRef(!1); return Qp(() => { r.current = !0 }), ne.useCallback(function(l, o) { o === void 0 && (o = {}), r.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, Zs({ fromRouteId: t }, o))) }, [e, t]) }
const kx = {};

function B3(e, t, r) { kx[e] || (kx[e] = !0) }

function td(e) { let { to: t, replace: r, state: i, relative: l } = e;
    Ml() || Vt(!1); let { future: o, static: c } = ne.useContext(ei), { matches: f } = ne.useContext(yn), { pathname: p } = ra(), x = aa(), m = Ed(t, Ad(f, o.v7_relativeSplatPath), p, l === "path"), g = JSON.stringify(m); return ne.useEffect(() => x(JSON.parse(g), { replace: r, state: i, relative: l }), [x, g, l, r, i]), null }

function Si(e) { Vt(!1) }

function k3(e) { let { basename: t = "/", children: r = null, location: i, navigationType: l = Yn.Pop, navigator: o, static: c = !1, future: f } = e;
    Ml() && Vt(!1); let p = t.replace(/^\/*/, "/"),
        x = ne.useMemo(() => ({ basename: p, navigator: o, static: c, future: Zs({ v7_relativeSplatPath: !1 }, f) }), [p, f, o, c]);
    typeof i == "string" && (i = kl(i)); let { pathname: m = "/", search: g = "", hash: v = "", state: b = null, key: A = "default" } = i, E = ne.useMemo(() => { let w = bd(m, p); return w == null ? null : { location: { pathname: w, search: g, hash: v, state: b, key: A }, navigationType: l } }, [p, m, g, v, b, A, l]); return E == null ? null : ne.createElement(ei.Provider, { value: x }, ne.createElement(hu.Provider, { children: r, value: E })) }

function M3(e) { let { children: t, location: r } = e; return E3(rd(t), r) }
new Promise(() => {});

function rd(e, t) { t === void 0 && (t = []); let r = []; return ne.Children.forEach(e, (i, l) => { if (!ne.isValidElement(i)) return; let o = [...t, l]; if (i.type === ne.Fragment) { r.push.apply(r, rd(i.props.children, o)); return }
        i.type !== Si && Vt(!1), !i.props.index || !i.props.children || Vt(!1); let c = { id: i.props.id || o.join("-"), caseSensitive: i.props.caseSensitive, element: i.props.element, Component: i.props.Component, index: i.props.index, path: i.props.path, loader: i.props.loader, action: i.props.action, errorElement: i.props.errorElement, ErrorBoundary: i.props.ErrorBoundary, hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null, shouldRevalidate: i.props.shouldRevalidate, handle: i.props.handle, lazy: i.props.lazy };
        i.props.children && (c.children = rd(i.props.children, o)), r.push(c) }), r }
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ad() { return ad = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e }, ad.apply(this, arguments) }

function L3(e, t) { if (e == null) return {}; var r = {},
        i = Object.keys(e),
        l, o; for (o = 0; o < i.length; o++) l = i[o], !(t.indexOf(l) >= 0) && (r[l] = e[l]); return r }

function U3(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) }

function P3(e, t) { return e.button === 0 && (!t || t === "_self") && !U3(e) }
const z3 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    I3 = "6";
try { window.__reactRouterVersion = I3 } catch {}
const H3 = "startTransition",
    Mx = Py[H3];

function G3(e) { let { basename: t, children: r, future: i, window: l } = e, o = ne.useRef();
    o.current == null && (o.current = Xy({ window: l, v5Compat: !0 })); let c = o.current,
        [f, p] = ne.useState({ action: c.action, location: c.location }),
        { v7_startTransition: x } = i || {},
        m = ne.useCallback(g => { x && Mx ? Mx(() => p(g)) : p(g) }, [p, x]); return ne.useLayoutEffect(() => c.listen(m), [c, m]), ne.createElement(k3, { basename: t, children: r, location: f.location, navigationType: f.action, navigator: c, future: i }) }
const V3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    q3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    X3 = ne.forwardRef(function(t, r) { let { onClick: i, relative: l, reloadDocument: o, replace: c, state: f, target: p, to: x, preventScrollReset: m, unstable_viewTransition: g } = t, v = L3(t, z3), { basename: b } = ne.useContext(ei), A, E = !1; if (typeof x == "string" && q3.test(x) && (A = x, V3)) try { let D = new URL(window.location.href),
                F = x.startsWith("//") ? new URL(D.protocol + x) : new URL(x),
                K = bd(F.pathname, b);
            F.origin === D.origin && K != null ? x = K + F.search + F.hash : E = !0 } catch {}
        let w = y3(x, { relative: l }),
            S = Y3(x, { replace: c, state: f, target: p, preventScrollReset: m, relative: l, unstable_viewTransition: g });

        function O(D) { i && i(D), D.defaultPrevented || S(D) } return ne.createElement("a", ad({}, v, { href: A || w, onClick: E || o ? i : O, ref: r, target: p })) });
var Lx;
(function(e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState" })(Lx || (Lx = {}));
var Ux;
(function(e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration" })(Ux || (Ux = {}));

function Y3(e, t) { let { target: r, replace: i, state: l, preventScrollReset: o, relative: c, unstable_viewTransition: f } = t === void 0 ? {} : t, p = aa(), x = ra(), m = Zp(e, { relative: c }); return ne.useCallback(g => { if (P3(g, r)) { g.preventDefault(); let v = i !== void 0 ? i : Gc(x) === Gc(m);
            p(e, { replace: v, state: l, preventScrollReset: o, relative: c, unstable_viewTransition: f }) } }, [x, p, m, i, l, r, e, o, c, f]) }

function t2(e, t) { return function() { return e.apply(t, arguments) } }
const { toString: W3 } = Object.prototype, { getPrototypeOf: _d } = Object, mu = (e => t => { const r = W3.call(t); return e[r] || (e[r] = r.slice(8, -1).toLowerCase()) })(Object.create(null)), Ba = e => (e = e.toLowerCase(), t => mu(t) === e), xu = e => t => typeof t === e, { isArray: Ll } = Array, $s = xu("undefined");

function K3(e) { return e !== null && !$s(e) && e.constructor !== null && !$s(e.constructor) && ea(e.constructor.isBuffer) && e.constructor.isBuffer(e) }
const r2 = Ba("ArrayBuffer");

function Q3(e) { let t; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && r2(e.buffer), t }
const Z3 = xu("string"),
    ea = xu("function"),
    a2 = xu("number"),
    pu = e => e !== null && typeof e == "object",
    $3 = e => e === !0 || e === !1,
    Mc = e => { if (mu(e) !== "object") return !1; const t = _d(e); return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e) },
    J3 = Ba("Date"),
    eb = Ba("File"),
    tb = Ba("Blob"),
    rb = Ba("FileList"),
    ab = e => pu(e) && ea(e.pipe),
    nb = e => { let t; return e && (typeof FormData == "function" && e instanceof FormData || ea(e.append) && ((t = mu(e)) === "formdata" || t === "object" && ea(e.toString) && e.toString() === "[object FormData]")) },
    ib = Ba("URLSearchParams"),
    [lb, sb, ob, cb] = ["ReadableStream", "Request", "Response", "Headers"].map(Ba),
    ub = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function so(e, t, { allOwnKeys: r = !1 } = {}) { if (e === null || typeof e > "u") return; let i, l; if (typeof e != "object" && (e = [e]), Ll(e))
        for (i = 0, l = e.length; i < l; i++) t.call(null, e[i], i, e);
    else { const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
            c = o.length; let f; for (i = 0; i < c; i++) f = o[i], t.call(null, e[f], f, e) } }

function n2(e, t) { t = t.toLowerCase(); const r = Object.keys(e); let i = r.length,
        l; for (; i-- > 0;)
        if (l = r[i], t === l.toLowerCase()) return l;
    return null }
const Ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    i2 = e => !$s(e) && e !== Ci;

function nd() { const { caseless: e } = i2(this) && this || {}, t = {}, r = (i, l) => { const o = e && n2(t, l) || l;
        Mc(t[o]) && Mc(i) ? t[o] = nd(t[o], i) : Mc(i) ? t[o] = nd({}, i) : Ll(i) ? t[o] = i.slice() : t[o] = i }; for (let i = 0, l = arguments.length; i < l; i++) arguments[i] && so(arguments[i], r); return t }
const fb = (e, t, r, { allOwnKeys: i } = {}) => (so(t, (l, o) => { r && ea(l) ? e[o] = t2(l, r) : e[o] = l }, { allOwnKeys: i }), e),
    db = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    hb = (e, t, r, i) => { e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), r && Object.assign(e.prototype, r) },
    mb = (e, t, r, i) => { let l, o, c; const f = {}; if (t = t || {}, e == null) return t;
        do { for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0;) c = l[o], (!i || i(c, e, t)) && !f[c] && (t[c] = e[c], f[c] = !0);
            e = r !== !1 && _d(e) } while (e && (!r || r(e, t)) && e !== Object.prototype); return t },
    xb = (e, t, r) => { e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length; const i = e.indexOf(t, r); return i !== -1 && i === r },
    pb = e => { if (!e) return null; if (Ll(e)) return e; let t = e.length; if (!a2(t)) return null; const r = new Array(t); for (; t-- > 0;) r[t] = e[t]; return r },
    gb = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && _d(Uint8Array)),
    vb = (e, t) => { const i = (e && e[Symbol.iterator]).call(e); let l; for (;
            (l = i.next()) && !l.done;) { const o = l.value;
            t.call(e, o[0], o[1]) } },
    yb = (e, t) => { let r; const i = []; for (;
            (r = e.exec(t)) !== null;) i.push(r); return i },
    bb = Ba("HTMLFormElement"),
    Ab = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, l) { return i.toUpperCase() + l }),
    Px = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype),
    Eb = Ba("RegExp"),
    l2 = (e, t) => { const r = Object.getOwnPropertyDescriptors(e),
            i = {};
        so(r, (l, o) => { let c;
            (c = t(l, o, e)) !== !1 && (i[o] = c || l) }), Object.defineProperties(e, i) },
    wb = e => { l2(e, (t, r) => { if (ea(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1; const i = e[r]; if (ea(i)) { if (t.enumerable = !1, "writable" in t) { t.writable = !1; return }
                t.set || (t.set = () => { throw Error("Can not rewrite read-only method '" + r + "'") }) } }) },
    _b = (e, t) => { const r = {},
            i = l => { l.forEach(o => { r[o] = !0 }) }; return Ll(e) ? i(e) : i(String(e).split(t)), r },
    Tb = () => {},
    Sb = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

function Nb(e) { return !!(e && ea(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]) }
const Cb = e => { const t = new Array(10),
            r = (i, l) => { if (pu(i)) { if (t.indexOf(i) >= 0) return; if (!("toJSON" in i)) { t[l] = i; const o = Ll(i) ? [] : {}; return so(i, (c, f) => { const p = r(c, l + 1);!$s(p) && (o[f] = p) }), t[l] = void 0, o } } return i }; return r(e, 0) },
    Db = Ba("AsyncFunction"),
    Ob = e => e && (pu(e) || ea(e)) && ea(e.then) && ea(e.catch),
    s2 = ((e, t) => e ? setImmediate : t ? ((r, i) => (Ci.addEventListener("message", ({ source: l, data: o }) => { l === Ci && o === r && i.length && i.shift()() }, !1), l => { i.push(l), Ci.postMessage(r, "*") }))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", ea(Ci.postMessage)),
    Rb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ci) : typeof process < "u" && process.nextTick || s2,
    ge = { isArray: Ll, isArrayBuffer: r2, isBuffer: K3, isFormData: nb, isArrayBufferView: Q3, isString: Z3, isNumber: a2, isBoolean: $3, isObject: pu, isPlainObject: Mc, isReadableStream: lb, isRequest: sb, isResponse: ob, isHeaders: cb, isUndefined: $s, isDate: J3, isFile: eb, isBlob: tb, isRegExp: Eb, isFunction: ea, isStream: ab, isURLSearchParams: ib, isTypedArray: gb, isFileList: rb, forEach: so, merge: nd, extend: fb, trim: ub, stripBOM: db, inherits: hb, toFlatObject: mb, kindOf: mu, kindOfTest: Ba, endsWith: xb, toArray: pb, forEachEntry: vb, matchAll: yb, isHTMLForm: bb, hasOwnProperty: Px, hasOwnProp: Px, reduceDescriptors: l2, freezeMethods: wb, toObjectSet: _b, toCamelCase: Ab, noop: Tb, toFiniteNumber: Sb, findKey: n2, global: Ci, isContextDefined: i2, isSpecCompliantForm: Nb, toJSONObject: Cb, isAsyncFn: Db, isThenable: Ob, setImmediate: s2, asap: Rb };

function $e(e, t, r, i, l) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), i && (this.request = i), l && (this.response = l, this.status = l.status ? l.status : null) }
ge.inherits($e, Error, { toJSON: function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: ge.toJSONObject(this.config), code: this.code, status: this.status } } });
const o2 = $e.prototype,
    c2 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => { c2[e] = { value: e } });
Object.defineProperties($e, c2);
Object.defineProperty(o2, "isAxiosError", { value: !0 });
$e.from = (e, t, r, i, l, o) => { const c = Object.create(o2); return ge.toFlatObject(e, c, function(p) { return p !== Error.prototype }, f => f !== "isAxiosError"), $e.call(c, e.message, t, r, i, l), c.cause = e, c.name = e.name, o && Object.assign(c, o), c };
const Fb = null;

function id(e) { return ge.isPlainObject(e) || ge.isArray(e) }

function u2(e) { return ge.endsWith(e, "[]") ? e.slice(0, -2) : e }

function zx(e, t, r) { return e ? e.concat(t).map(function(l, o) { return l = u2(l), !r && o ? "[" + l + "]" : l }).join(r ? "." : "") : t }

function jb(e) { return ge.isArray(e) && !e.some(id) }
const Bb = ge.toFlatObject(ge, {}, null, function(t) { return /^is[A-Z]/.test(t) });

function gu(e, t, r) { if (!ge.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, r = ge.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(E, w) { return !ge.isUndefined(w[E]) }); const i = r.metaTokens,
        l = r.visitor || m,
        o = r.dots,
        c = r.indexes,
        p = (r.Blob || typeof Blob < "u" && Blob) && ge.isSpecCompliantForm(t); if (!ge.isFunction(l)) throw new TypeError("visitor must be a function");

    function x(A) { if (A === null) return ""; if (ge.isDate(A)) return A.toISOString(); if (!p && ge.isBlob(A)) throw new $e("Blob is not supported. Use a Buffer instead."); return ge.isArrayBuffer(A) || ge.isTypedArray(A) ? p && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A }

    function m(A, E, w) { let S = A; if (A && !w && typeof A == "object") { if (ge.endsWith(E, "{}")) E = i ? E : E.slice(0, -2), A = JSON.stringify(A);
            else if (ge.isArray(A) && jb(A) || (ge.isFileList(A) || ge.endsWith(E, "[]")) && (S = ge.toArray(A))) return E = u2(E), S.forEach(function(D, F) {!(ge.isUndefined(D) || D === null) && t.append(c === !0 ? zx([E], F, o) : c === null ? E : E + "[]", x(D)) }), !1 } return id(A) ? !0 : (t.append(zx(w, E, o), x(A)), !1) } const g = [],
        v = Object.assign(Bb, { defaultVisitor: m, convertValue: x, isVisitable: id });

    function b(A, E) { if (!ge.isUndefined(A)) { if (g.indexOf(A) !== -1) throw Error("Circular reference detected in " + E.join("."));
            g.push(A), ge.forEach(A, function(S, O) {
                (!(ge.isUndefined(S) || S === null) && l.call(t, S, ge.isString(O) ? O.trim() : O, E, v)) === !0 && b(S, E ? E.concat(O) : [O]) }), g.pop() } } if (!ge.isObject(e)) throw new TypeError("data must be an object"); return b(e), t }

function Ix(e) { const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) { return t[i] }) }

function Td(e, t) { this._pairs = [], e && gu(e, this, t) }
const f2 = Td.prototype;
f2.append = function(t, r) { this._pairs.push([t, r]) };
f2.toString = function(t) { const r = t ? function(i) { return t.call(this, i, Ix) } : Ix; return this._pairs.map(function(l) { return r(l[0]) + "=" + r(l[1]) }, "").join("&") };

function kb(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }

function d2(e, t, r) { if (!t) return e; const i = r && r.encode || kb;
    ge.isFunction(r) && (r = { serialize: r }); const l = r && r.serialize; let o; if (l ? o = l(t, r) : o = ge.isURLSearchParams(t) ? t.toString() : new Td(t, r).toString(i), o) { const c = e.indexOf("#");
        c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + o } return e }
class Hx { constructor() { this.handlers = [] }
    use(t, r, i) { return this.handlers.push({ fulfilled: t, rejected: r, synchronous: i ? i.synchronous : !1, runWhen: i ? i.runWhen : null }), this.handlers.length - 1 }
    eject(t) { this.handlers[t] && (this.handlers[t] = null) }
    clear() { this.handlers && (this.handlers = []) }
    forEach(t) { ge.forEach(this.handlers, function(i) { i !== null && t(i) }) } }
const h2 = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    Mb = typeof URLSearchParams < "u" ? URLSearchParams : Td,
    Lb = typeof FormData < "u" ? FormData : null,
    Ub = typeof Blob < "u" ? Blob : null,
    Pb = { isBrowser: !0, classes: { URLSearchParams: Mb, FormData: Lb, Blob: Ub }, protocols: ["http", "https", "file", "blob", "url", "data"] },
    Sd = typeof window < "u" && typeof document < "u",
    ld = typeof navigator == "object" && navigator || void 0,
    zb = Sd && (!ld || ["ReactNative", "NativeScript", "NS"].indexOf(ld.product) < 0),
    Ib = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    Hb = Sd && window.location.href || "http://localhost",
    Gb = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: Sd, hasStandardBrowserEnv: zb, hasStandardBrowserWebWorkerEnv: Ib, navigator: ld, origin: Hb }, Symbol.toStringTag, { value: "Module" })),
    Er = {...Gb, ...Pb };

function Vb(e, t) { return gu(e, new Er.classes.URLSearchParams, Object.assign({ visitor: function(r, i, l, o) { return Er.isNode && ge.isBuffer(r) ? (this.append(i, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments) } }, t)) }

function qb(e) { return ge.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]) }

function Xb(e) { const t = {},
        r = Object.keys(e); let i; const l = r.length; let o; for (i = 0; i < l; i++) o = r[i], t[o] = e[o]; return t }

function m2(e) {
    function t(r, i, l, o) { let c = r[o++]; if (c === "__proto__") return !0; const f = Number.isFinite(+c),
            p = o >= r.length; return c = !c && ge.isArray(l) ? l.length : c, p ? (ge.hasOwnProp(l, c) ? l[c] = [l[c], i] : l[c] = i, !f) : ((!l[c] || !ge.isObject(l[c])) && (l[c] = []), t(r, i, l[c], o) && ge.isArray(l[c]) && (l[c] = Xb(l[c])), !f) } if (ge.isFormData(e) && ge.isFunction(e.entries)) { const r = {}; return ge.forEachEntry(e, (i, l) => { t(qb(i), l, r, 0) }), r } return null }

function Yb(e, t, r) { if (ge.isString(e)) try { return (t || JSON.parse)(e), ge.trim(e) } catch (i) { if (i.name !== "SyntaxError") throw i }
    return (r || JSON.stringify)(e) }
const oo = { transitional: h2, adapter: ["xhr", "http", "fetch"], transformRequest: [function(t, r) { const i = r.getContentType() || "",
            l = i.indexOf("application/json") > -1,
            o = ge.isObject(t); if (o && ge.isHTMLForm(t) && (t = new FormData(t)), ge.isFormData(t)) return l ? JSON.stringify(m2(t)) : t; if (ge.isArrayBuffer(t) || ge.isBuffer(t) || ge.isStream(t) || ge.isFile(t) || ge.isBlob(t) || ge.isReadableStream(t)) return t; if (ge.isArrayBufferView(t)) return t.buffer; if (ge.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString(); let f; if (o) { if (i.indexOf("application/x-www-form-urlencoded") > -1) return Vb(t, this.formSerializer).toString(); if ((f = ge.isFileList(t)) || i.indexOf("multipart/form-data") > -1) { const p = this.env && this.env.FormData; return gu(f ? { "files[]": t } : t, p && new p, this.formSerializer) } } return o || l ? (r.setContentType("application/json", !1), Yb(t)) : t }], transformResponse: [function(t) { const r = this.transitional || oo.transitional,
            i = r && r.forcedJSONParsing,
            l = this.responseType === "json"; if (ge.isResponse(t) || ge.isReadableStream(t)) return t; if (t && ge.isString(t) && (i && !this.responseType || l)) { const c = !(r && r.silentJSONParsing) && l; try { return JSON.parse(t) } catch (f) { if (c) throw f.name === "SyntaxError" ? $e.from(f, $e.ERR_BAD_RESPONSE, this, null, this.response) : f } } return t }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: Er.classes.FormData, Blob: Er.classes.Blob }, validateStatus: function(t) { return t >= 200 && t < 300 }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
ge.forEach(["delete", "get", "head", "post", "put", "patch"], e => { oo.headers[e] = {} });
const Wb = ge.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Kb = e => { const t = {}; let r, i, l; return e && e.split(`
`).forEach(function(c) { l = c.indexOf(":"), r = c.substring(0, l).trim().toLowerCase(), i = c.substring(l + 1).trim(), !(!r || t[r] && Wb[r]) && (r === "set-cookie" ? t[r] ? t[r].push(i) : t[r] = [i] : t[r] = t[r] ? t[r] + ", " + i : i) }), t },
    Gx = Symbol("internals");

function Us(e) { return e && String(e).trim().toLowerCase() }

function Lc(e) { return e === !1 || e == null ? e : ge.isArray(e) ? e.map(Lc) : String(e) }

function Qb(e) { const t = Object.create(null),
        r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let i; for (; i = r.exec(e);) t[i[1]] = i[2]; return t }
const Zb = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function If(e, t, r, i, l) { if (ge.isFunction(i)) return i.call(this, t, r); if (l && (t = r), !!ge.isString(t)) { if (ge.isString(i)) return t.indexOf(i) !== -1; if (ge.isRegExp(i)) return i.test(t) } }

function $b(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, i) => r.toUpperCase() + i) }

function Jb(e, t) { const r = ge.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(i => { Object.defineProperty(e, i + r, { value: function(l, o, c) { return this[i].call(this, t, l, o, c) }, configurable: !0 }) }) }
let Ur = class { constructor(t) { t && this.set(t) }
    set(t, r, i) { const l = this;

        function o(f, p, x) { const m = Us(p); if (!m) throw new Error("header name must be a non-empty string"); const g = ge.findKey(l, m);
            (!g || l[g] === void 0 || x === !0 || x === void 0 && l[g] !== !1) && (l[g || p] = Lc(f)) } const c = (f, p) => ge.forEach(f, (x, m) => o(x, m, p)); if (ge.isPlainObject(t) || t instanceof this.constructor) c(t, r);
        else if (ge.isString(t) && (t = t.trim()) && !Zb(t)) c(Kb(t), r);
        else if (ge.isHeaders(t))
            for (const [f, p] of t.entries()) o(p, f, i);
        else t != null && o(r, t, i); return this }
    get(t, r) { if (t = Us(t), t) { const i = ge.findKey(this, t); if (i) { const l = this[i]; if (!r) return l; if (r === !0) return Qb(l); if (ge.isFunction(r)) return r.call(this, l, i); if (ge.isRegExp(r)) return r.exec(l); throw new TypeError("parser must be boolean|regexp|function") } } }
    has(t, r) { if (t = Us(t), t) { const i = ge.findKey(this, t); return !!(i && this[i] !== void 0 && (!r || If(this, this[i], i, r))) } return !1 }
    delete(t, r) { const i = this; let l = !1;

        function o(c) { if (c = Us(c), c) { const f = ge.findKey(i, c);
                f && (!r || If(i, i[f], f, r)) && (delete i[f], l = !0) } } return ge.isArray(t) ? t.forEach(o) : o(t), l }
    clear(t) { const r = Object.keys(this); let i = r.length,
            l = !1; for (; i--;) { const o = r[i];
            (!t || If(this, this[o], o, t, !0)) && (delete this[o], l = !0) } return l }
    normalize(t) { const r = this,
            i = {}; return ge.forEach(this, (l, o) => { const c = ge.findKey(i, o); if (c) { r[c] = Lc(l), delete r[o]; return } const f = t ? $b(o) : String(o).trim();
            f !== o && delete r[o], r[f] = Lc(l), i[f] = !0 }), this }
    concat(...t) { return this.constructor.concat(this, ...t) }
    toJSON(t) { const r = Object.create(null); return ge.forEach(this, (i, l) => { i != null && i !== !1 && (r[l] = t && ge.isArray(i) ? i.join(", ") : i) }), r }[Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator]() }
    toString() { return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`) }
    get[Symbol.toStringTag]() { return "AxiosHeaders" }
    static from(t) { return t instanceof this ? t : new this(t) }
    static concat(t, ...r) { const i = new this(t); return r.forEach(l => i.set(l)), i }
    static accessor(t) { const i = (this[Gx] = this[Gx] = { accessors: {} }).accessors,
            l = this.prototype;

        function o(c) { const f = Us(c);
            i[f] || (Jb(l, c), i[f] = !0) } return ge.isArray(t) ? t.forEach(o) : o(t), this } };
Ur.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ge.reduceDescriptors(Ur.prototype, ({ value: e }, t) => { let r = t[0].toUpperCase() + t.slice(1); return { get: () => e, set(i) { this[r] = i } } });
ge.freezeMethods(Ur);

function Hf(e, t) { const r = this || oo,
        i = t || r,
        l = Ur.from(i.headers); let o = i.data; return ge.forEach(e, function(f) { o = f.call(r, o, l.normalize(), t ? t.status : void 0) }), l.normalize(), o }

function x2(e) { return !!(e && e.__CANCEL__) }

function Ul(e, t, r) { $e.call(this, e ? ? "canceled", $e.ERR_CANCELED, t, r), this.name = "CanceledError" }
ge.inherits(Ul, $e, { __CANCEL__: !0 });

function p2(e, t, r) { const i = r.config.validateStatus;!r.status || !i || i(r.status) ? e(r) : t(new $e("Request failed with status code " + r.status, [$e.ERR_BAD_REQUEST, $e.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r)) }

function eA(e) { const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return t && t[1] || "" }

function tA(e, t) { e = e || 10; const r = new Array(e),
        i = new Array(e); let l = 0,
        o = 0,
        c; return t = t !== void 0 ? t : 1e3,
        function(p) { const x = Date.now(),
                m = i[o];
            c || (c = x), r[l] = p, i[l] = x; let g = o,
                v = 0; for (; g !== l;) v += r[g++], g = g % e; if (l = (l + 1) % e, l === o && (o = (o + 1) % e), x - c < t) return; const b = m && x - m; return b ? Math.round(v * 1e3 / b) : void 0 } }

function rA(e, t) { let r = 0,
        i = 1e3 / t,
        l, o; const c = (x, m = Date.now()) => { r = m, l = null, o && (clearTimeout(o), o = null), e.apply(null, x) }; return [(...x) => { const m = Date.now(),
            g = m - r;
        g >= i ? c(x, m) : (l = x, o || (o = setTimeout(() => { o = null, c(l) }, i - g))) }, () => l && c(l)] }
const Vc = (e, t, r = 3) => { let i = 0; const l = tA(50, 250); return rA(o => { const c = o.loaded,
                f = o.lengthComputable ? o.total : void 0,
                p = c - i,
                x = l(p),
                m = c <= f;
            i = c; const g = { loaded: c, total: f, progress: f ? c / f : void 0, bytes: p, rate: x || void 0, estimated: x && f && m ? (f - c) / x : void 0, event: o, lengthComputable: f != null, [t ? "download" : "upload"]: !0 };
            e(g) }, r) },
    Vx = (e, t) => { const r = e != null; return [i => t[0]({ lengthComputable: r, total: e, loaded: i }), t[1]] },
    qx = e => (...t) => ge.asap(() => e(...t)),
    aA = Er.hasStandardBrowserEnv ? ((e, t) => r => (r = new URL(r, Er.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(new URL(Er.origin), Er.navigator && /(msie|trident)/i.test(Er.navigator.userAgent)) : () => !0,
    nA = Er.hasStandardBrowserEnv ? { write(e, t, r, i, l, o) { const c = [e + "=" + encodeURIComponent(t)];
            ge.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), ge.isString(i) && c.push("path=" + i), ge.isString(l) && c.push("domain=" + l), o === !0 && c.push("secure"), document.cookie = c.join("; ") }, read(e) { const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null }, remove(e) { this.write(e, "", Date.now() - 864e5) } } : { write() {}, read() { return null }, remove() {} };

function iA(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) }

function lA(e, t) { return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e }

function g2(e, t, r) { let i = !iA(t); return e && (i || r == !1) ? lA(e, t) : t }
const Xx = e => e instanceof Ur ? {...e } : e;

function ki(e, t) { t = t || {}; const r = {};

    function i(x, m, g, v) { return ge.isPlainObject(x) && ge.isPlainObject(m) ? ge.merge.call({ caseless: v }, x, m) : ge.isPlainObject(m) ? ge.merge({}, m) : ge.isArray(m) ? m.slice() : m }

    function l(x, m, g, v) { if (ge.isUndefined(m)) { if (!ge.isUndefined(x)) return i(void 0, x, g, v) } else return i(x, m, g, v) }

    function o(x, m) { if (!ge.isUndefined(m)) return i(void 0, m) }

    function c(x, m) { if (ge.isUndefined(m)) { if (!ge.isUndefined(x)) return i(void 0, x) } else return i(void 0, m) }

    function f(x, m, g) { if (g in t) return i(x, m); if (g in e) return i(void 0, x) } const p = { url: o, method: o, data: o, baseURL: c, transformRequest: c, transformResponse: c, paramsSerializer: c, timeout: c, timeoutMessage: c, withCredentials: c, withXSRFToken: c, adapter: c, responseType: c, xsrfCookieName: c, xsrfHeaderName: c, onUploadProgress: c, onDownloadProgress: c, decompress: c, maxContentLength: c, maxBodyLength: c, beforeRedirect: c, transport: c, httpAgent: c, httpsAgent: c, cancelToken: c, socketPath: c, responseEncoding: c, validateStatus: f, headers: (x, m, g) => l(Xx(x), Xx(m), g, !0) }; return ge.forEach(Object.keys(Object.assign({}, e, t)), function(m) { const g = p[m] || l,
            v = g(e[m], t[m], m);
        ge.isUndefined(v) && g !== f || (r[m] = v) }), r }
const v2 = e => { const t = ki({}, e); let { data: r, withXSRFToken: i, xsrfHeaderName: l, xsrfCookieName: o, headers: c, auth: f } = t;
        t.headers = c = Ur.from(c), t.url = d2(g2(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), f && c.set("Authorization", "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))); let p; if (ge.isFormData(r)) { if (Er.hasStandardBrowserEnv || Er.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
            else if ((p = c.getContentType()) !== !1) { const [x, ...m] = p ? p.split(";").map(g => g.trim()).filter(Boolean) : [];
                c.setContentType([x || "multipart/form-data", ...m].join("; ")) } } if (Er.hasStandardBrowserEnv && (i && ge.isFunction(i) && (i = i(t)), i || i !== !1 && aA(t.url))) { const x = l && o && nA.read(o);
            x && c.set(l, x) } return t },
    sA = typeof XMLHttpRequest < "u",
    oA = sA && function(e) { return new Promise(function(r, i) { const l = v2(e); let o = l.data; const c = Ur.from(l.headers).normalize(); let { responseType: f, onUploadProgress: p, onDownloadProgress: x } = l, m, g, v, b, A;

            function E() { b && b(), A && A(), l.cancelToken && l.cancelToken.unsubscribe(m), l.signal && l.signal.removeEventListener("abort", m) } let w = new XMLHttpRequest;
            w.open(l.method.toUpperCase(), l.url, !0), w.timeout = l.timeout;

            function S() { if (!w) return; const D = Ur.from("getAllResponseHeaders" in w && w.getAllResponseHeaders()),
                    K = { data: !f || f === "text" || f === "json" ? w.responseText : w.response, status: w.status, statusText: w.statusText, headers: D, config: e, request: w };
                p2(function(V) { r(V), E() }, function(V) { i(V), E() }, K), w = null } "onloadend" in w ? w.onloadend = S : w.onreadystatechange = function() {!w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(S) }, w.onabort = function() { w && (i(new $e("Request aborted", $e.ECONNABORTED, e, w)), w = null) }, w.onerror = function() { i(new $e("Network Error", $e.ERR_NETWORK, e, w)), w = null }, w.ontimeout = function() { let F = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded"; const K = l.transitional || h2;
                l.timeoutErrorMessage && (F = l.timeoutErrorMessage), i(new $e(F, K.clarifyTimeoutError ? $e.ETIMEDOUT : $e.ECONNABORTED, e, w)), w = null }, o === void 0 && c.setContentType(null), "setRequestHeader" in w && ge.forEach(c.toJSON(), function(F, K) { w.setRequestHeader(K, F) }), ge.isUndefined(l.withCredentials) || (w.withCredentials = !!l.withCredentials), f && f !== "json" && (w.responseType = l.responseType), x && ([v, A] = Vc(x, !0), w.addEventListener("progress", v)), p && w.upload && ([g, b] = Vc(p), w.upload.addEventListener("progress", g), w.upload.addEventListener("loadend", b)), (l.cancelToken || l.signal) && (m = D => { w && (i(!D || D.type ? new Ul(null, e, w) : D), w.abort(), w = null) }, l.cancelToken && l.cancelToken.subscribe(m), l.signal && (l.signal.aborted ? m() : l.signal.addEventListener("abort", m))); const O = eA(l.url); if (O && Er.protocols.indexOf(O) === -1) { i(new $e("Unsupported protocol " + O + ":", $e.ERR_BAD_REQUEST, e)); return }
            w.send(o || null) }) },
    cA = (e, t) => { const { length: r } = e = e ? e.filter(Boolean) : []; if (t || r) { let i = new AbortController,
                l; const o = function(x) { if (!l) { l = !0, f(); const m = x instanceof Error ? x : this.reason;
                    i.abort(m instanceof $e ? m : new Ul(m instanceof Error ? m.message : m)) } }; let c = t && setTimeout(() => { c = null, o(new $e(`timeout ${t} of ms exceeded`, $e.ETIMEDOUT)) }, t); const f = () => { e && (c && clearTimeout(c), c = null, e.forEach(x => { x.unsubscribe ? x.unsubscribe(o) : x.removeEventListener("abort", o) }), e = null) };
            e.forEach(x => x.addEventListener("abort", o)); const { signal: p } = i; return p.unsubscribe = () => ge.asap(f), p } },
    uA = function*(e, t) { let r = e.byteLength; if (r < t) { yield e; return } let i = 0,
            l; for (; i < r;) l = i + t, yield e.slice(i, l), i = l },
    fA = async function*(e, t) { for await (const r of dA(e)) yield* uA(r, t) },
    dA = async function*(e) { if (e[Symbol.asyncIterator]) { yield* e; return } const t = e.getReader(); try { for (;;) { const { done: r, value: i } = await t.read(); if (r) break;
                yield i } } finally { await t.cancel() } },
    Yx = (e, t, r, i) => { const l = fA(e, t); let o = 0,
            c, f = p => { c || (c = !0, i && i(p)) }; return new ReadableStream({ async pull(p) { try { const { done: x, value: m } = await l.next(); if (x) { f(), p.close(); return } let g = m.byteLength; if (r) { let v = o += g;
                        r(v) }
                    p.enqueue(new Uint8Array(m)) } catch (x) { throw f(x), x } }, cancel(p) { return f(p), l.return() } }, { highWaterMark: 2 }) },
    vu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
    y2 = vu && typeof ReadableStream == "function",
    hA = vu && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
    b2 = (e, ...t) => { try { return !!e(...t) } catch { return !1 } },
    mA = y2 && b2(() => { let e = !1; const t = new Request(Er.origin, { body: new ReadableStream, method: "POST", get duplex() { return e = !0, "half" } }).headers.has("Content-Type"); return e && !t }),
    Wx = 64 * 1024,
    sd = y2 && b2(() => ge.isReadableStream(new Response("").body)),
    qc = { stream: sd && (e => e.body) };
vu && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {!qc[t] && (qc[t] = ge.isFunction(e[t]) ? r => r[t]() : (r, i) => { throw new $e(`Response type '${t}' is not supported`, $e.ERR_NOT_SUPPORT, i) }) }) })(new Response);
const xA = async e => { if (e == null) return 0; if (ge.isBlob(e)) return e.size; if (ge.isSpecCompliantForm(e)) return (await new Request(Er.origin, { method: "POST", body: e }).arrayBuffer()).byteLength; if (ge.isArrayBufferView(e) || ge.isArrayBuffer(e)) return e.byteLength; if (ge.isURLSearchParams(e) && (e = e + ""), ge.isString(e)) return (await hA(e)).byteLength },
    pA = async(e, t) => { const r = ge.toFiniteNumber(e.getContentLength()); return r ? ? xA(t) },
    gA = vu && (async e => { let { url: t, method: r, data: i, signal: l, cancelToken: o, timeout: c, onDownloadProgress: f, onUploadProgress: p, responseType: x, headers: m, withCredentials: g = "same-origin", fetchOptions: v } = v2(e);
        x = x ? (x + "").toLowerCase() : "text"; let b = cA([l, o && o.toAbortSignal()], c),
            A; const E = b && b.unsubscribe && (() => { b.unsubscribe() }); let w; try { if (p && mA && r !== "get" && r !== "head" && (w = await pA(m, i)) !== 0) { let K = new Request(t, { method: "POST", body: i, duplex: "half" }),
                    I; if (ge.isFormData(i) && (I = K.headers.get("content-type")) && m.setContentType(I), K.body) { const [V, N] = Vx(w, Vc(qx(p)));
                    i = Yx(K.body, Wx, V, N) } }
            ge.isString(g) || (g = g ? "include" : "omit"); const S = "credentials" in Request.prototype;
            A = new Request(t, {...v, signal: b, method: r.toUpperCase(), headers: m.normalize().toJSON(), body: i, duplex: "half", credentials: S ? g : void 0 }); let O = await fetch(A); const D = sd && (x === "stream" || x === "response"); if (sd && (f || D && E)) { const K = {};
                ["status", "statusText", "headers"].forEach(_ => { K[_] = O[_] }); const I = ge.toFiniteNumber(O.headers.get("content-length")),
                    [V, N] = f && Vx(I, Vc(qx(f), !0)) || [];
                O = new Response(Yx(O.body, Wx, V, () => { N && N(), E && E() }), K) }
            x = x || "text"; let F = await qc[ge.findKey(qc, x) || "text"](O, e); return !D && E && E(), await new Promise((K, I) => { p2(K, I, { data: F, headers: Ur.from(O.headers), status: O.status, statusText: O.statusText, config: e, request: A }) }) } catch (S) { throw E && E(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(new $e("Network Error", $e.ERR_NETWORK, e, A), { cause: S.cause || S }) : $e.from(S, S && S.code, e, A) } }),
    od = { http: Fb, xhr: oA, fetch: gA };
ge.forEach(od, (e, t) => { if (e) { try { Object.defineProperty(e, "name", { value: t }) } catch {}
        Object.defineProperty(e, "adapterName", { value: t }) } });
const Kx = e => `- ${e}`,
    vA = e => ge.isFunction(e) || e === null || e === !1,
    A2 = { getAdapter: e => { e = ge.isArray(e) ? e : [e]; const { length: t } = e; let r, i; const l = {}; for (let o = 0; o < t; o++) { r = e[o]; let c; if (i = r, !vA(r) && (i = od[(c = String(r)).toLowerCase()], i === void 0)) throw new $e(`Unknown adapter '${c}'`); if (i) break;
                l[c || "#" + o] = i } if (!i) { const o = Object.entries(l).map(([f, p]) => `adapter ${f} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")); let c = t ? o.length > 1 ? `since :
` + o.map(Kx).join(`
`) : " " + Kx(o[0]) : "as no adapter specified"; throw new $e("There is no suitable adapter to dispatch the request " + c, "ERR_NOT_SUPPORT") } return i }, adapters: od };

function Gf(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ul(null, e) }

function Qx(e) { return Gf(e), e.headers = Ur.from(e.headers), e.data = Hf.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), A2.getAdapter(e.adapter || oo.adapter)(e).then(function(i) { return Gf(e), i.data = Hf.call(e, e.transformResponse, i), i.headers = Ur.from(i.headers), i }, function(i) { return x2(i) || (Gf(e), i && i.response && (i.response.data = Hf.call(e, e.transformResponse, i.response), i.response.headers = Ur.from(i.response.headers))), Promise.reject(i) }) }
const E2 = "1.8.4",
    yu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => { yu[e] = function(i) { return typeof i === e || "a" + (t < 1 ? "n " : " ") + e } });
const Zx = {};
yu.transitional = function(t, r, i) {
    function l(o, c) { return "[Axios v" + E2 + "] Transitional option '" + o + "'" + c + (i ? ". " + i : "") } return (o, c, f) => { if (t === !1) throw new $e(l(c, " has been removed" + (r ? " in " + r : "")), $e.ERR_DEPRECATED); return r && !Zx[c] && (Zx[c] = !0, console.warn(l(c, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(o, c, f) : !0 } };
yu.spelling = function(t) { return (r, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0) };

function yA(e, t, r) { if (typeof e != "object") throw new $e("options must be an object", $e.ERR_BAD_OPTION_VALUE); const i = Object.keys(e); let l = i.length; for (; l-- > 0;) { const o = i[l],
            c = t[o]; if (c) { const f = e[o],
                p = f === void 0 || c(f, o, e); if (p !== !0) throw new $e("option " + o + " must be " + p, $e.ERR_BAD_OPTION_VALUE); continue } if (r !== !0) throw new $e("Unknown option " + o, $e.ERR_BAD_OPTION) } }
const Uc = { assertOptions: yA, validators: yu },
    Ha = Uc.validators;
let ji = class { constructor(t) { this.defaults = t, this.interceptors = { request: new Hx, response: new Hx } }
    async request(t, r) { try { return await this._request(t, r) } catch (i) { if (i instanceof Error) { let l = {};
                Error.captureStackTrace ? Error.captureStackTrace(l) : l = new Error; const o = l.stack ? l.stack.replace(/^.+\n/, "") : ""; try { i.stack ? o && !String(i.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + o) : i.stack = o } catch {} } throw i } }
    _request(t, r) { typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ki(this.defaults, r); const { transitional: i, paramsSerializer: l, headers: o } = r;
        i !== void 0 && Uc.assertOptions(i, { silentJSONParsing: Ha.transitional(Ha.boolean), forcedJSONParsing: Ha.transitional(Ha.boolean), clarifyTimeoutError: Ha.transitional(Ha.boolean) }, !1), l != null && (ge.isFunction(l) ? r.paramsSerializer = { serialize: l } : Uc.assertOptions(l, { encode: Ha.function, serialize: Ha.function }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Uc.assertOptions(r, { baseUrl: Ha.spelling("baseURL"), withXsrfToken: Ha.spelling("withXSRFToken") }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase(); let c = o && ge.merge(o.common, o[r.method]);
        o && ge.forEach(["delete", "get", "head", "post", "put", "patch", "common"], A => { delete o[A] }), r.headers = Ur.concat(c, o); const f = []; let p = !0;
        this.interceptors.request.forEach(function(E) { typeof E.runWhen == "function" && E.runWhen(r) === !1 || (p = p && E.synchronous, f.unshift(E.fulfilled, E.rejected)) }); const x = [];
        this.interceptors.response.forEach(function(E) { x.push(E.fulfilled, E.rejected) }); let m, g = 0,
            v; if (!p) { const A = [Qx.bind(this), void 0]; for (A.unshift.apply(A, f), A.push.apply(A, x), v = A.length, m = Promise.resolve(r); g < v;) m = m.then(A[g++], A[g++]); return m }
        v = f.length; let b = r; for (g = 0; g < v;) { const A = f[g++],
                E = f[g++]; try { b = A(b) } catch (w) { E.call(this, w); break } } try { m = Qx.call(this, b) } catch (A) { return Promise.reject(A) } for (g = 0, v = x.length; g < v;) m = m.then(x[g++], x[g++]); return m }
    getUri(t) { t = ki(this.defaults, t); const r = g2(t.baseURL, t.url, t.allowAbsoluteUrls); return d2(r, t.params, t.paramsSerializer) } };
ge.forEach(["delete", "get", "head", "options"], function(t) { ji.prototype[t] = function(r, i) { return this.request(ki(i || {}, { method: t, url: r, data: (i || {}).data })) } });
ge.forEach(["post", "put", "patch"], function(t) {
    function r(i) { return function(o, c, f) { return this.request(ki(f || {}, { method: t, headers: i ? { "Content-Type": "multipart/form-data" } : {}, url: o, data: c })) } }
    ji.prototype[t] = r(), ji.prototype[t + "Form"] = r(!0) });
let bA = class w2 { constructor(t) { if (typeof t != "function") throw new TypeError("executor must be a function."); let r;
        this.promise = new Promise(function(o) { r = o }); const i = this;
        this.promise.then(l => { if (!i._listeners) return; let o = i._listeners.length; for (; o-- > 0;) i._listeners[o](l);
            i._listeners = null }), this.promise.then = l => { let o; const c = new Promise(f => { i.subscribe(f), o = f }).then(l); return c.cancel = function() { i.unsubscribe(o) }, c }, t(function(o, c, f) { i.reason || (i.reason = new Ul(o, c, f), r(i.reason)) }) }
    throwIfRequested() { if (this.reason) throw this.reason }
    subscribe(t) { if (this.reason) { t(this.reason); return }
        this._listeners ? this._listeners.push(t) : this._listeners = [t] }
    unsubscribe(t) { if (!this._listeners) return; const r = this._listeners.indexOf(t);
        r !== -1 && this._listeners.splice(r, 1) }
    toAbortSignal() { const t = new AbortController,
            r = i => { t.abort(i) }; return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal }
    static source() { let t; return { token: new w2(function(l) { t = l }), cancel: t } } };

function AA(e) { return function(r) { return e.apply(null, r) } }

function EA(e) { return ge.isObject(e) && e.isAxiosError === !0 }
const cd = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(cd).forEach(([e, t]) => { cd[t] = e });

function _2(e) { const t = new ji(e),
        r = t2(ji.prototype.request, t); return ge.extend(r, ji.prototype, t, { allOwnKeys: !0 }), ge.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(l) { return _2(ki(e, l)) }, r }
const Ve = _2(oo);
Ve.Axios = ji;
Ve.CanceledError = Ul;
Ve.CancelToken = bA;
Ve.isCancel = x2;
Ve.VERSION = E2;
Ve.toFormData = gu;
Ve.AxiosError = $e;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) { return Promise.all(t) };
Ve.spread = AA;
Ve.isAxiosError = EA;
Ve.mergeConfig = ki;
Ve.AxiosHeaders = Ur;
Ve.formToJSON = e => m2(ge.isHTMLForm(e) ? new FormData(e) : e);
Ve.getAdapter = A2.getAdapter;
Ve.HttpStatusCode = cd;
Ve.default = Ve;
const { Axios: uC, AxiosError: fC, CanceledError: dC, isCancel: hC, CancelToken: mC, VERSION: xC, all: pC, Cancel: gC, isAxiosError: vC, spread: yC, toFormData: bC, AxiosHeaders: AC, HttpStatusCode: EC, formToJSON: wC, getAdapter: _C, mergeConfig: TC } = Ve, T2 = ne.createContext(null), Aa = () => { const e = ne.useContext(T2); if (!e) throw new Error("useAuth must be used within AuthProvider"); return e }, wA = ({ children: e }) => { const [t, r] = ne.useState(null), [i, l] = ne.useState(localStorage.getItem("token") || ""), [o, c] = ne.useState(!0), [f, p] = ne.useState(null);
    ne.useEffect(() => { i ? Ve.get("http://dis.tis.cs.umss.edu.bo/api/me", { headers: { Authorization: `Bearer ${i}` } }).then(g => r(g.data)).catch(() => m()).finally(() => c(!1)) : c(!1) }, [i]); const x = async(g, v) => { try { const b = await Ve.post("http://dis.tis.cs.umss.edu.bo/api/login", { email: g, password: v }),
                    { access_token: A, user: E } = b.data;
                localStorage.setItem("token", A), l(A), r(E), p(null) } catch (b) { throw p("Credenciales inválidas"), b } },
        m = async() => { try { await Ve.post("http://dis.tis.cs.umss.edu.bo/api/logout", null, { headers: { Authorization: `Bearer ${i}` } }) } catch (g) { console.warn("Error al cerrar sesión en el backend:", g) } finally { localStorage.removeItem("token"), l(""), r(null) } }; return d.jsx(T2.Provider, { value: { user: t, token: i, login: x, logout: m, isLoading: o, loginError: f }, children: e }) };
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _A = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    S2 = (...e) => e.filter((t, r, i) => !!t && i.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TA = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SA = ne.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: r = 2, absoluteStrokeWidth: i, className: l = "", children: o, iconNode: c, ...f }, p) => ne.createElement("svg", { ref: p, ...TA, width: t, height: t, stroke: e, strokeWidth: i ? Number(r) * 24 / Number(t) : r, className: S2("lucide", l), ...f }, [...c.map(([x, m]) => ne.createElement(x, m)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = (e, t) => { const r = ne.forwardRef(({ className: i, ...l }, o) => ne.createElement(SA, { ref: o, iconNode: t, className: S2(`lucide-${_A(e)}`, i), ...l })); return r.displayName = `${e}`, r };
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = qe("ArrowLeft", [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NA = qe("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = qe("ArrowUpDown", [
    ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
    ["path", { d: "M17 20V4", key: "1ejh1v" }],
    ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
    ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CA = qe("Award", [
    ["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", key: "1yiouv" }],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DA = qe("Bell", [
    ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = qe("BookOpen", [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = qe("Calendar", [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OA = qe("Camera", [
    ["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z", key: "1tc9qg" }],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RA = qe("ChartNoAxesColumnIncreasing", [
    ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
    ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
    ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = qe("ChevronDown", [
    ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FA = qe("ChevronLeft", [
    ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jA = qe("ChevronRight", [
    ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = qe("CircleAlert", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BA = qe("CircleCheckBig", [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kA = qe("CircleCheck", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = qe("CircleX", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MA = qe("ClipboardCheck", [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }],
    ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LA = qe("Clipboard", [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UA = qe("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PA = qe("CreditCard", [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zA = qe("DollarSign", [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = qe("Download", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = qe("EyeOff", [
    ["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = qe("Eye", [
    ["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Di = qe("FileText", [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = qe("FileUp", [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M12 12v6", key: "3ahymv" }],
    ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = qe("Filter", [
    ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IA = qe("House", [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
    ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "1d0kgt" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jx = qe("Key", [
    ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
    ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
    ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HA = qe("Loader", [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zc = qe("Lock", [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GA = qe("LogOut", [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = qe("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = qe("MapPin", [
    ["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VA = qe("Pencil", [
    ["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = qe("Phone", [
    ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", key: "foiqr5" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = qe("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qA = qe("Save", [
    ["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }],
    ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XA = qe("Scan", [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YA = qe("School", [
    ["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4", key: "hhkicm" }],
    ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw" }],
    ["path", { d: "M18 5v17", key: "1sw6gf" }],
    ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
    ["path", { d: "M6 5v17", key: "1xfsm0" }],
    ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = qe("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = qe("Settings", [
    ["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WA = qe("ShieldAlert", [
    ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KA = qe("Shield", [
    ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QA = qe("Tag", [
    ["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZA = qe("Trash", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oi = qe("Trophy", [
    ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
    ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
    ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
    ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $A = qe("Upload", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JA = qe("UserCheck", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = qe("UserPlus", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = qe("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = qe("Users", [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
    ]),
    tE = () => { const e = aa(),
            { login: t, loginError: r } = Aa(),
            [i, l] = ne.useState({ email: "", password: "" }),
            [o, c] = ne.useState(!1),
            [f, p] = ne.useState(!1),
            [x, m] = ne.useState(!1),
            [g, v] = ne.useState(!1),
            b = async E => { E.preventDefault(), c(!1), m(!0), setTimeout(() => { i.email.trim() !== "" && i.password.trim() !== "" ? m(!1) : c(!0) }, 1500); try { await t(i.email, i.password), e("/dashboard") } catch { c(!0) } },
            A = E => { E.key === "Enter" && b(E) }; return d.jsxs("div", { className: "min-h-screen flex items-center justify-center p-4 sm:p-6 relative", style: { background: "linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)" }, children: [d.jsx("div", { className: "w-full max-w-6xl", children: d.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full", children: [d.jsxs("div", { className: "hidden lg:flex flex-col items-center justify-center", children: [d.jsx("div", { className: "w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-4 sm:mb-6 border", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(Xc, { className: "w-10 h-10 sm:w-16 sm:h-16 text-white" }) }), d.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4", style: { background: "linear-gradient(135deg, #5A4A3A, #8B7355)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Oh Sansi!" }), d.jsx("p", { className: "text-sm sm:text-base md:text-lg", style: { color: "#8B7355" }, children: "Sistema Integral de Gestión Académica" })] }), d.jsx("div", { className: "flex items-center justify-center", children: d.jsxs("form", { onSubmit: b, className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border overflow-hidden w-full max-w-md", style: { borderColor: "#E8DDD4" }, children: [d.jsxs("div", { className: "p-6 sm:p-8 pb-4 sm:pb-6 text-center border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: [d.jsx("h2", { className: "text-xl sm:text-2xl font-bold mb-1 sm:mb-2", style: { color: "#5A4A3A" }, children: "Sistema de inscripciones" }), d.jsx("p", { className: "text-xs sm:text-sm font-medium", style: { color: "#5A4A3A" }, children: "Ingresa tus credenciales para continuar" })] }), d.jsxs("div", { className: "p-4 sm:p-6 md:p-8 pt-4 sm:pt-6", children: [o && d.jsxs("div", { className: "mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg sm:rounded-xl flex items-center text-red-700 text-xs sm:text-sm", children: [d.jsx(C2, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" }), d.jsx("span", { children: "Por favor ingresa tanto el email como la contraseña" })] }), d.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [d.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [d.jsx("label", { htmlFor: "email", className: "block text-xs sm:text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Correo Electrónico" }), d.jsxs("div", { className: "relative", children: [d.jsx(Js, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsx("input", { type: "email", id: "email", value: i.email, onChange: E => l({...i, email: E.target.value }), onKeyPress: A, className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A", focusRingColor: "#C8B7A6" }, placeholder: "tu-email@ejemplo.com", required: !0 })] })] }), d.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [d.jsx("label", { htmlFor: "password", className: "block text-xs sm:text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Contraseña" }), d.jsxs("div", { className: "relative", children: [d.jsx(zc, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsx("input", { type: f ? "text" : "password", id: "password", value: i.password, onChange: E => l({...i, password: E.target.value }), onKeyPress: A, className: "w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A", focusRingColor: "#C8B7A6" }, placeholder: "••••••••••", required: !0 }), d.jsx("button", { type: "button", onClick: () => p(!f), className: "absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200", style: { color: "#8B7355" }, children: f ? d.jsx(Pc, { className: "w-4 h-4 sm:w-5 sm:h-5" }) : d.jsx(Hs, { className: "w-4 h-4 sm:w-5 sm:h-5" }) })] })] }), d.jsx("div", { className: "text-right", children: d.jsx("button", { type: "button", className: "text-xs sm:text-sm hover:underline transition-all duration-200 font-medium", style: { color: "#8B7355" }, children: "¿Recuperar contraseña?" }) }), d.jsx("button", { type: "submit", disabled: x, className: "w-full text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", focusRingColor: "#C8B7A6" }, children: x ? d.jsxs("div", { className: "flex items-center justify-center space-x-2 sm:space-x-3", children: [d.jsx("div", { className: "w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" }), d.jsx("span", { children: "Verificando credenciales..." })] }) : "Iniciar Sesión" })] })] })] }) })] }) }), d.jsx("div", { className: "absolute bottom-0 left-0 right-0 text-center p-2 sm:p-4", children: d.jsx("p", { className: "text-xs", style: { color: "#8B7355" }, children: "© 2025 Oh Sansi! Plataforma educativa de nueva generación." }) }), g && d.jsx("div", { className: "fixed inset-0 bg-black/10 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300", onClick: () => v(!1) })] }) },
    rE = () => { const e = aa(),
            [t, r] = ne.useState({ name: "", email: "", password: "", confirmPassword: "", role: "student" }),
            i = l => { l.preventDefault(), e("/login") }; return d.jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#F2EEE3] p-4", children: d.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md", children: [d.jsxs("div", { className: "flex items-center mb-6", children: [d.jsx("button", { onClick: () => e("/login"), className: "text-[#4F4F4F] hover:text-opacity-80", children: d.jsx(N2, { size: 20 }) }), d.jsx("h1", { className: "text-2xl font-bold text-[#4F4F4F] ml-4", children: "Crear Cuenta" })] }), d.jsxs("form", { onSubmit: i, className: "space-y-4", children: [d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium mb-1", children: "Nombre Completo" }), d.jsx("input", { type: "text", value: t.name, onChange: l => r({...t, name: l.target.value }), className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", required: !0 })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium mb-1", children: "Correo Electrónico" }), d.jsx("input", { type: "email", value: t.email, onChange: l => r({...t, email: l.target.value }), className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", required: !0 })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium mb-1", children: "Contraseña" }), d.jsx("input", { type: "password", value: t.password, onChange: l => r({...t, password: l.target.value }), className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", required: !0 })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium mb-1", children: "Confirmar Contraseña" }), d.jsx("input", { type: "password", value: t.confirmPassword, onChange: l => r({...t, confirmPassword: l.target.value }), className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", required: !0 })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium mb-1", children: "Tipo de Usuario" }), d.jsxs("select", { value: t.role, onChange: l => r({...t, role: l.target.value }), className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", children: [d.jsx("option", { value: "student", children: "Estudiante" }), d.jsx("option", { value: "tutor", children: "Tutor" })] })] }), d.jsx("button", { type: "submit", className: "w-full bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors", children: "Registrarse" })] })] }) }) },
    aE = () => { const e = aa(); return d.jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#F2EEE3]", children: d.jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center", children: [d.jsx(WA, { className: "w-16 h-16 text-red-500 mx-auto mb-4" }), d.jsx("h1", { className: "text-2xl font-bold text-gray-800 mb-2", children: "Acceso Denegado" }), d.jsx("p", { className: "text-gray-600 mb-6", children: "No tienes permisos suficientes para acceder a esta página." }), d.jsx("button", { onClick: () => e(-1), className: "bg-[#C8B7A6] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors", children: "Volver" })] }) }) },
    nE = () => { const e = aa(),
            [t, r] = ne.useState([]),
            [i, l] = ne.useState(!0),
            [o, c] = ne.useState(null),
            [f, p] = ne.useState([]),
            [x, m] = ne.useState(!0),
            [g, v] = ne.useState(null);
        ne.useEffect(() => { Ve.get("http://dis.tis.cs.umss.edu.bo/api/tutores").then(A => { A.data.success ? r(A.data.data) : c("Error al cargar tutores") }).catch(() => { c("No se pudo conectar con el servidor.") }).finally(() => { l(!1) }) }, []), ne.useEffect(() => { Ve.get("http://dis.tis.cs.umss.edu.bo/api/competencias").then(A => { p(A.data) }).catch(() => { v("No se pudo cargar las competencias.") }).finally(() => { m(!1) }) }, []); const b = () => { e("/login") }; return d.jsxs("div", { className: "min-h-screen", style: { background: "linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)" }, children: [d.jsx("header", { className: "bg-white/80 backdrop-blur-md border-b sticky top-0 z-50", style: { borderColor: "#E8DDD4" }, children: d.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: d.jsxs("div", { className: "flex items-center justify-between h-20", children: [d.jsxs("div", { className: "flex items-center space-x-4", children: [d.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center shadow-md border", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(Xc, { className: "w-6 h-6 text-white" }) }), d.jsxs("div", { children: [d.jsx("h1", { className: "text-xl font-bold tracking-wide", style: { color: "#5A4A3A" }, children: "Oh Sansi!" }), d.jsx("p", { className: "text-xs font-medium", style: { color: "#8B7355" }, children: "Sistema Integral de Gestión Académica" })] })] }), d.jsxs("div", { className: "flex items-center space-x-10", children: [d.jsxs("nav", { className: "hidden md:flex items-center space-x-10", children: [d.jsx("a", { href: "#inicio", className: "text-sm font-medium hover:opacity-80 transition-colors", style: { color: "#8B7355" }, children: "Inicio" }), d.jsx("a", { href: "#noticias", className: "text-sm font-medium hover:opacity-80 transition-colors", style: { color: "#8B7355" }, children: "Novedades" }), d.jsx("a", { href: "#tutores", className: "text-sm font-medium hover:opacity-80 transition-colors", style: { color: "#8B7355" }, children: "Tutores" })] }), d.jsx("button", { onClick: b, className: "text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: "Iniciar Sesión" })] })] }) }) }), d.jsx("section", { id: "inicio", className: "py-24 px-4 sm:px-6 lg:px-8", children: d.jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [d.jsxs("div", { className: "inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-md border rounded-full mb-10 shadow-md", style: { borderColor: "#E8DDD4" }, children: [d.jsx(DA, { className: "w-4 h-4 mr-3", style: { color: "#8B7355" } }), d.jsx("span", { className: "text-sm font-medium", style: { color: "#5A4A3A" }, children: "Inscripciones abiertas - Semestre 2025-2" })] }), d.jsxs("h1", { className: "text-5xl sm:text-6xl font-bold mb-8 tracking-wide leading-tight", style: { color: "#5A4A3A" }, children: ["Portal de Inscripciones", d.jsx("span", { className: "block mt-2", style: { color: "#8B7355" }, children: "Académicas" })] }), d.jsx("p", { className: "text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-medium", style: { color: "#8B7355" }, children: "Sistema integral para la gestión de inscripciones y seguimiento académico institucional. Una plataforma diseñada para facilitar su experiencia educativa con excelencia y simplicidad." }), d.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6", children: [d.jsxs("button", { onClick: b, className: "text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: [d.jsx("span", { children: "Acceder al Sistema" }), d.jsx(NA, { className: "w-5 h-5" })] }), d.jsx("button", { className: "border bg-white/70 backdrop-blur-md px-10 py-4 rounded-xl font-semibold hover:bg-white/90 hover:shadow-md transform hover:scale-105 transition-all duration-300", style: { borderColor: "#E8DDD4", color: "#5A4A3A" }, children: "Información General" })] })] }) }), d.jsx("section", { id: "competencias", className: "py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm", children: d.jsxs("div", { className: "max-w-7xl mx-auto", children: [d.jsxs("div", { className: "text-center mb-16", children: [d.jsxs("h2", { className: "text-4xl font-bold mb-4 tracking-wide flex items-center justify-center space-x-4", style: { color: "#5A4A3A" }, children: [d.jsx(CA, { className: "w-8 h-8", style: { color: "#C8B7A6" } }), d.jsx("span", { children: "Competencias" })] }), d.jsx("p", { className: "font-medium max-w-2xl mx-auto", style: { color: "#8B7355" }, children: "Consulta las competencias académicas disponibles organizadas por área, categoría y fecha." })] }), x ? d.jsx("p", { className: "text-center text-[#8B7355]", children: "Cargando competencias..." }) : g ? d.jsx("p", { className: "text-center text-red-600", children: g }) : d.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: f.map(A => d.jsxs("div", { className: "bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border hover:shadow-lg transition duration-300", style: { borderColor: "#E8DDD4" }, children: [d.jsx("h3", { className: "text-xl font-bold mb-2 text-[#5A4A3A]", children: A.nombre }), d.jsxs("p", { className: "text-sm font-medium mb-1 text-[#8B7355]", children: [d.jsx("strong", { children: "Área:" }), " ", A.area_categoria.area.nombre] }), d.jsxs("p", { className: "text-sm font-medium mb-1 text-[#8B7355]", children: [d.jsx("strong", { children: "Categoría:" }), " ", A.area_categoria.categoria.nombre, " (", A.area_categoria.grado, ")"] }), d.jsxs("p", { className: "text-sm font-medium mb-1 text-[#8B7355]", children: [d.jsx("strong", { children: "Fecha:" }), " ", A.fecha_competencia] }), d.jsxs("p", { className: "text-sm font-medium mb-1 text-[#8B7355]", children: [d.jsx("strong", { children: "Inscripción hasta:" }), " ", A.fecha_fin_inscripcion] }), d.jsxs("p", { className: "text-sm font-medium mb-1 text-[#8B7355]", children: [d.jsx("strong", { children: "Monto:" }), " Bs. ", parseFloat(A.monto).toFixed(2)] }), d.jsxs("p", { className: "text-sm font-medium text-[#8B7355]", children: [d.jsx("strong", { children: "Máx. competidores:" }), " ", A.max_competidores] })] }, A.id)) })] }) }), d.jsx("section", { id: "tutores", className: "py-20 px-4 sm:px-6 lg:px-8", style: { background: "linear-gradient(135deg, #F2EEE3 0%, #FAF7F2 100%)" }, children: d.jsxs("div", { className: "max-w-7xl mx-auto", children: [d.jsxs("div", { className: "text-center mb-16", children: [d.jsxs("h2", { className: "text-4xl font-bold mb-4 tracking-wide flex items-center justify-center space-x-4", style: { color: "#5A4A3A" }, children: [d.jsx(JA, { className: "w-8 h-8", style: { color: "#C8B7A6" } }), d.jsx("span", { children: "Equipo de Tutores" })] }), d.jsx("p", { className: "font-medium max-w-2xl mx-auto", style: { color: "#8B7355" }, children: "Nuestro equipo de profesionales está aquí para guiarle en cada paso de su proceso académico" })] }), i ? d.jsx("div", { className: "text-center text-[#8B7355] text-sm", children: "Cargando tutores..." }) : o ? d.jsx("div", { className: "text-center text-red-600 font-medium", children: o }) : d.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: t.map((A, E) => d.jsxs("div", { className: "bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border hover:scale-105 transform", style: { borderColor: "#E8DDD4" }, children: [d.jsx("div", { className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg shadow-lg border", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: A.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase() }), d.jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#5A4A3A" }, children: A.name }), d.jsx("p", { className: "text-sm font-semibold mb-2", style: { color: "#C8B7A6" }, children: "Tutor Académico" }), d.jsx("p", { className: "text-xs font-medium mb-4", style: { color: "#8B7355" }, children: "Departamento General" }), d.jsxs("div", { className: "space-y-2", children: [d.jsxs("div", { className: "flex items-center justify-center text-xs font-medium", style: { color: "#8B7355" }, children: [d.jsx(Js, { className: "w-3 h-3 mr-2" }), d.jsx("span", { children: A.email })] }), d.jsxs("div", { className: "flex items-center justify-center text-xs font-medium", style: { color: "#8B7355" }, children: [d.jsx(dd, { className: "w-3 h-3 mr-2" }), d.jsx("span", { children: A.celular })] })] })] }, A.id)) })] }) }), d.jsx("footer", { className: "bg-white/80 backdrop-blur-md border-t py-16 px-4 sm:px-6 lg:px-8", style: { borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "max-w-6xl mx-auto", children: [d.jsxs("div", { className: "grid md:grid-cols-3 gap-12 mb-12", children: [d.jsxs("div", { children: [d.jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [d.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center shadow-md border", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(Xc, { className: "w-6 h-6 text-white" }) }), d.jsxs("div", { children: [d.jsx("h3", { className: "font-bold text-lg", style: { color: "#5A4A3A" }, children: "Oh Sansi!" }), d.jsx("p", { className: "text-sm font-medium", style: { color: "#8B7355" }, children: "Sistema Integral de Gestión Académica" })] })] }), d.jsx("p", { className: "text-sm font-medium leading-relaxed", style: { color: "#8B7355" }, children: "Portal oficial para la gestión de inscripciones y seguimiento académico institucional con los más altos estándares de calidad." })] }), d.jsxs("div", { children: [d.jsx("h4", { className: "font-bold mb-6 text-lg", style: { color: "#5A4A3A" }, children: "Enlaces Rápidos" }), d.jsxs("ul", { className: "space-y-3 text-sm font-medium", style: { color: "#8B7355" }, children: [d.jsx("li", { children: d.jsx("a", { href: "#inicio", className: "hover:opacity-80 transition-colors", children: "Inicio" }) }), d.jsx("li", { children: d.jsx("a", { href: "#noticias", className: "hover:opacity-80 transition-colors", children: "Novedades" }) }), d.jsx("li", { children: d.jsx("a", { href: "#tutores", className: "hover:opacity-80 transition-colors", children: "Equipo de Tutores" }) }), d.jsx("li", { children: d.jsx("button", { onClick: b, className: "hover:opacity-80 transition-colors", children: "Acceso al Sistema" }) })] })] }), d.jsxs("div", { children: [d.jsx("h4", { className: "font-bold mb-6 text-lg", style: { color: "#5A4A3A" }, children: "Contacto" }), d.jsxs("div", { className: "space-y-4 text-sm font-medium", style: { color: "#8B7355" }, children: [d.jsxs("div", { className: "flex items-start space-x-3", children: [d.jsx(Js, { className: "w-4 h-4 mt-0.5", style: { color: "#C8B7A6" } }), d.jsx("span", { children: "inscripciones@universidad.edu" })] }), d.jsxs("div", { className: "flex items-start space-x-3", children: [d.jsx(dd, { className: "w-4 h-4 mt-0.5", style: { color: "#C8B7A6" } }), d.jsx("span", { children: "+1 (555) 123-4567" })] }), d.jsxs("div", { className: "flex items-start space-x-3", children: [d.jsx(fd, { className: "w-4 h-4 mt-0.5", style: { color: "#C8B7A6" } }), d.jsxs("span", { children: ["Campus Principal", d.jsx("br", {}), "Edificio Administrativo, Piso 3"] })] })] })] })] }), d.jsx("div", { className: "border-t pt-8 text-center", style: { borderColor: "#E8DDD4" }, children: d.jsx("p", { className: "text-sm font-medium", style: { color: "#8B7355" }, children: "© 2025 Oh Sansi! - Sistema Integral de Gestión Académica" }) })] }) })] }) },
    iE = ({ children: e, allowedRoles: t = [] }) => { const { user: r, isLoading: i } = Aa(), l = ra(); return i ? d.jsx("div", { className: "flex items-center justify-center min-h-screen bg-[#F2EEE3]", children: d.jsx("div", { className: "animate-spin h-10 w-10 border-4 border-[#A9B2AC] border-t-transparent rounded-full" }) }) : r ? t.length > 0 && !t.includes(r.role) ? d.jsx(td, { to: "/unauthorized", replace: !0 }) : d.jsx(d.Fragment, { children: e }) : d.jsx(td, { to: "/login", state: { from: l }, replace: !0 }) },
    Ea = ({ isOpen: e, onToggle: t }) => { const r = ra(),
            i = aa(),
            { user: l, logout: o } = Aa(),
            c = [{ path: "/dashboard", icon: d.jsx(IA, { size: 20 }), label: "Inicio" }],
            f = [{ path: "/configuration", icon: d.jsx(R2, { size: 20 }), label: "Configuración" }, { path: "/users", icon: d.jsx(F2, { size: 20 }), label: "Usuarios" }],
            p = [{ path: "/registro", icon: d.jsx(LA, { size: 20 }), label: "Inscripción" }, { path: "/registration2", icon: d.jsx(ud, { size: 20 }), label: "Comprobante" }, { path: "/payment-slip", icon: d.jsx(PA, { size: 20 }), label: "Pagos" }],
            x = [{ path: "/reports", icon: d.jsx(RA, { size: 20 }), label: "Reportes" }],
            m = { path: "/profile", icon: d.jsx(Ya, { size: 20 }), label: "Perfil" }; let g = [];
        (l == null ? void 0 : l.role) === "Administrador" ? g = f: (l == null ? void 0 : l.role) === "Tutor" ? g = p : (l == null ? void 0 : l.role) === "Organizador" && (g = x); const v = [...c, ...g, m],
            b = () => { o(), i("/login") }; return d.jsxs("div", { className: `h-full bg-white shadow-lg fixed left-0 top-0 p-4 flex flex-col justify-between transition-all duration-300 z-40
        ${e?"w-64":"w-20"}`, style: { borderRight: "1px solid #E8DDD4" }, children: [d.jsxs("div", { children: [d.jsxs("div", { className: "flex justify-between items-center mb-8 mt-4", children: [e && d.jsx("h2", { className: "text-2xl font-bold text-[#4F4F4F]", children: "Sistema de Inscripciones" }), d.jsx("button", { onClick: t, className: "p-2 rounded-md hover:bg-[#F2EEE3] transition-colors", children: e ? d.jsx(FA, { size: 20, className: "text-[#4F4F4F]" }) : d.jsx(jA, { size: 20, className: "text-[#4F4F4F]" }) })] }), d.jsx("nav", { children: d.jsx("ul", { children: v.map(A => d.jsx("li", { className: "mb-2", children: d.jsxs(X3, { to: A.path, className: `flex items-center p-3 rounded-md transition-colors ${r.pathname===A.path?"bg-[#C8B7A6] text-white":"hover:bg-[#F2EEE3]"} ${e?"justify-start":"justify-center"}`, title: e ? "" : A.label, children: [d.jsx("span", { className: e ? "mr-3" : "", children: A.icon }), e && A.label] }) }, A.path)) }) })] }), d.jsxs("button", { onClick: b, className: `flex items-center mt-6 p-3 rounded-md text-red-600 hover:bg-red-100 transition-colors ${e?"justify-start":"justify-center"}`, title: e ? "" : "Salir", children: [d.jsx(GA, { size: 20, className: e ? "mr-2" : "" }), e && "Salir"] })] }) },
    lE = () => { const [e, t] = ne.useState(!0), [r, i] = ne.useState([]), o = ra().pathname === "/login";
        ne.useEffect(() => { fetch("http://dis.tis.cs.umss.edu.bo/api/competencias").then(f => f.json()).then(f => i(f.filter(p => p.inscripciones && p.inscripciones.length > 0))).catch(() => i([])) }, []); const c = f => { window.open(`http://dis.tis.cs.umss.edu.bo/api/exportar-inscritos/${f}`, "_blank") }; return d.jsxs("div", { className: "flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]", children: [!o && d.jsx(Ea, { isOpen: e, onToggle: () => t(!e) }), d.jsxs("div", { className: `flex-grow p-8 transition-all duration-300 ${o?"":e?"ml-64":"ml-20"}`, children: [d.jsxs("div", { className: "w-full bg-white/90 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg border border-[#E8DDD4] transition-all duration-300 hover:scale-[1.02] mb-8", children: [d.jsx("h1", { className: "text-3xl font-bold bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent", children: "Dashboard del Administrador" }), d.jsx("p", { className: "text-[#8B7355] mt-1 text-sm font-medium", children: "Panel de control y gestión" })] }), d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-[#E8DDD4] mb-8 transition-all duration-300 hover:scale-[1.02]", children: d.jsxs("div", { className: "text-center", children: [d.jsx("div", { className: "w-24 h-24 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-full flex items-center justify-center mx-auto mb-6", children: d.jsx("span", { className: "text-4xl", children: "👋" }) }), d.jsx("h2", { className: "text-2xl font-bold text-[#5A4A3A] mb-4", children: "¡Bienvenido de vuelta!" }), d.jsx("p", { className: "text-[#8B7355] text-lg mb-6", children: "Nos alegra verte hoy. Esperamos que tengas un excelente día administrando el sistema." })] }) }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-[#E8DDD4] transition-all duration-300", children: [d.jsxs("h3", { className: "text-xl font-bold text-[#5A4A3A] mb-4 flex items-center", children: [d.jsx("span", { className: "mr-3", children: "💡" }), "Tip del día"] }), d.jsxs("div", { className: "bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] rounded-xl p-4 border border-[#E8DDD4]", children: [d.jsx("p", { className: "text-[#5A4A3A] font-medium mb-2", children: "Mantén tu espacio de trabajo organizado" }), d.jsx("p", { className: "text-[#8B7355]", children: "Recuerda revisar regularmente las diferentes secciones del sistema para mantener todo actualizado y funcionando sin problemas. ¡Tu trabajo es muy importante!" })] })] }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-[#E8DDD4] mt-8", children: [d.jsxs("h3", { className: "text-xl font-bold text-[#5A4A3A] mb-4 flex items-center", children: [d.jsx("span", { className: "mr-3", children: "📋" }), "Exportar inscritos por competencia"] }), d.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [r.length === 0 && d.jsx("span", { className: "text-[#8B7355]", children: "No hay competencias con inscritos." }), r.map(f => d.jsxs("button", { onClick: () => c(f.id), className: "flex items-center bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-semibold", children: [d.jsx(co, { className: "mr-2", size: 18 }), "Exportar ", f.nombre] }, f.id))] })] })] })] }) };
let sE = { data: "" },
    oE = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || sE,
    cE = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    uE = /\/\*[^]*?\*\/|  +/g,
    ep = /\n+/g,
    Xn = (e, t) => { let r = "",
            i = "",
            l = ""; for (let o in e) { let c = e[o];
            o[0] == "@" ? o[1] == "i" ? r = o + " " + c + ";" : i += o[1] == "f" ? Xn(c, o) : o + "{" + Xn(c, o[1] == "k" ? "" : t) + "}" : typeof c == "object" ? i += Xn(c, t ? t.replace(/([^,])+/g, f => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, p => /&/.test(p) ? p.replace(/&/g, f) : f ? f + " " + p : p)) : o) : c != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), l += Xn.p ? Xn.p(o, c) : o + ":" + c + ";") } return r + (t && l ? t + "{" + l + "}" : l) + i },
    dn = {},
    j2 = e => { if (typeof e == "object") { let t = ""; for (let r in e) t += r + j2(e[r]); return t } return e },
    fE = (e, t, r, i, l) => { let o = j2(e),
            c = dn[o] || (dn[o] = (p => { let x = 0,
                    m = 11; for (; x < p.length;) m = 101 * m + p.charCodeAt(x++) >>> 0; return "go" + m })(o)); if (!dn[c]) { let p = o !== e ? e : (x => { let m, g, v = [{}]; for (; m = cE.exec(x.replace(uE, ""));) m[4] ? v.shift() : m[3] ? (g = m[3].replace(ep, " ").trim(), v.unshift(v[0][g] = v[0][g] || {})) : v[0][m[1]] = m[2].replace(ep, " ").trim(); return v[0] })(e);
            dn[c] = Xn(l ? {
                ["@keyframes " + c]: p } : p, r ? "" : "." + c) } let f = r && dn.g ? dn.g : null; return r && (dn.g = dn[c]), ((p, x, m, g) => { g ? x.data = x.data.replace(g, p) : x.data.indexOf(p) === -1 && (x.data = m ? p + x.data : x.data + p) })(dn[c], t, i, f), c },
    dE = (e, t, r) => e.reduce((i, l, o) => { let c = t[o]; if (c && c.call) { let f = c(r),
                p = f && f.props && f.props.className || /^go/.test(f) && f;
            c = p ? "." + p : f && typeof f == "object" ? f.props ? "" : Xn(f, "") : f === !1 ? "" : f } return i + l + (c ? ? "") }, "");

function bu(e) { let t = this || {},
        r = e.call ? e(t.p) : e; return fE(r.unshift ? r.raw ? dE(r, [].slice.call(arguments, 1), t.p) : r.reduce((i, l) => Object.assign(i, l && l.call ? l(t.p) : l), {}) : r, oE(t.target), t.g, t.o, t.k) }
let B2, hd, md;
bu.bind({ g: 1 });
let pn = bu.bind({ k: 1 });

function hE(e, t, r, i) { Xn.p = t, B2 = e, hd = r, md = i }

function ti(e, t) { let r = this || {}; return function() { let i = arguments;

        function l(o, c) { let f = Object.assign({}, o),
                p = f.className || l.className;
            r.p = Object.assign({ theme: hd && hd() }, f), r.o = / *go\d+/.test(p), f.className = bu.apply(r, i) + (p ? " " + p : ""); let x = e; return e[0] && (x = f.as || e, delete f.as), md && x[0] && md(f), B2(x, f) } return l } }
var mE = e => typeof e == "function",
    Wc = (e, t) => mE(e) ? e(t) : e,
    xE = (() => { let e = 0; return () => (++e).toString() })(),
    k2 = (() => { let e; return () => { if (e === void 0 && typeof window < "u") { let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches } return e } })(),
    pE = 20,
    M2 = (e, t) => { switch (t.type) {
            case 0:
                return {...e, toasts: [t.toast, ...e.toasts].slice(0, pE) };
            case 1:
                return {...e, toasts: e.toasts.map(o => o.id === t.toast.id ? {...o, ...t.toast } : o) };
            case 2:
                let { toast: r } = t; return M2(e, { type: e.toasts.find(o => o.id === r.id) ? 1 : 0, toast: r });
            case 3:
                let { toastId: i } = t; return {...e, toasts: e.toasts.map(o => o.id === i || i === void 0 ? {...o, dismissed: !0, visible: !1 } : o) };
            case 4:
                return t.toastId === void 0 ? {...e, toasts: [] } : {...e, toasts: e.toasts.filter(o => o.id !== t.toastId) };
            case 5:
                return {...e, pausedAt: t.time };
            case 6:
                let l = t.time - (e.pausedAt || 0); return {...e, pausedAt: void 0, toasts: e.toasts.map(o => ({...o, pauseDuration: o.pauseDuration + l })) } } },
    Ic = [],
    Ri = { toasts: [], pausedAt: void 0 },
    Pi = e => { Ri = M2(Ri, e), Ic.forEach(t => { t(Ri) }) },
    gE = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
    vE = (e = {}) => { let [t, r] = ne.useState(Ri), i = ne.useRef(Ri);
        ne.useEffect(() => (i.current !== Ri && r(Ri), Ic.push(r), () => { let o = Ic.indexOf(r);
            o > -1 && Ic.splice(o, 1) }), []); let l = t.toasts.map(o => { var c, f, p; return {...e, ...e[o.type], ...o, removeDelay: o.removeDelay || ((c = e[o.type]) == null ? void 0 : c.removeDelay) || (e == null ? void 0 : e.removeDelay), duration: o.duration || ((f = e[o.type]) == null ? void 0 : f.duration) || (e == null ? void 0 : e.duration) || gE[o.type], style: {...e.style, ...(p = e[o.type]) == null ? void 0 : p.style, ...o.style } } }); return {...t, toasts: l } },
    yE = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, dismissed: !1, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || xE() }),
    uo = e => (t, r) => { let i = yE(t, e, r); return Pi({ type: 2, toast: i }), i.id },
    Rr = (e, t) => uo("blank")(e, t);
Rr.error = uo("error");
Rr.success = uo("success");
Rr.loading = uo("loading");
Rr.custom = uo("custom");
Rr.dismiss = e => { Pi({ type: 3, toastId: e }) };
Rr.remove = e => Pi({ type: 4, toastId: e });
Rr.promise = (e, t, r) => { let i = Rr.loading(t.loading, {...r, ...r == null ? void 0 : r.loading }); return typeof e == "function" && (e = e()), e.then(l => { let o = t.success ? Wc(t.success, l) : void 0; return o ? Rr.success(o, { id: i, ...r, ...r == null ? void 0 : r.success }) : Rr.dismiss(i), l }).catch(l => { let o = t.error ? Wc(t.error, l) : void 0;
        o ? Rr.error(o, { id: i, ...r, ...r == null ? void 0 : r.error }) : Rr.dismiss(i) }), e };
var bE = (e, t) => { Pi({ type: 1, toast: { id: e, height: t } }) },
    AE = () => { Pi({ type: 5, time: Date.now() }) },
    Gs = new Map,
    EE = 1e3,
    wE = (e, t = EE) => { if (Gs.has(e)) return; let r = setTimeout(() => { Gs.delete(e), Pi({ type: 4, toastId: e }) }, t);
        Gs.set(e, r) },
    _E = e => { let { toasts: t, pausedAt: r } = vE(e);
        ne.useEffect(() => { if (r) return; let o = Date.now(),
                c = t.map(f => { if (f.duration === 1 / 0) return; let p = (f.duration || 0) + f.pauseDuration - (o - f.createdAt); if (p < 0) { f.visible && Rr.dismiss(f.id); return } return setTimeout(() => Rr.dismiss(f.id), p) }); return () => { c.forEach(f => f && clearTimeout(f)) } }, [t, r]); let i = ne.useCallback(() => { r && Pi({ type: 6, time: Date.now() }) }, [r]),
            l = ne.useCallback((o, c) => { let { reverseOrder: f = !1, gutter: p = 8, defaultPosition: x } = c || {}, m = t.filter(b => (b.position || x) === (o.position || x) && b.height), g = m.findIndex(b => b.id === o.id), v = m.filter((b, A) => A < g && b.visible).length; return m.filter(b => b.visible).slice(...f ? [v + 1] : [0, v]).reduce((b, A) => b + (A.height || 0) + p, 0) }, [t]); return ne.useEffect(() => { t.forEach(o => { if (o.dismissed) wE(o.id, o.removeDelay);
                else { let c = Gs.get(o.id);
                    c && (clearTimeout(c), Gs.delete(o.id)) } }) }, [t]), { toasts: t, handlers: { updateHeight: bE, startPause: AE, endPause: i, calculateOffset: l } } },
    TE = pn `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    SE = pn `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    NE = pn `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    CE = ti("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${TE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${SE} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${NE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, DE = pn `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, OE = ti("div")
`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${DE} 1s linear infinite;
`, RE = pn `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, FE = pn `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, jE = ti("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${RE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${FE} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, BE = ti("div")
`
  position: absolute;
`, kE = ti("div")
`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, ME = pn `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, LE = ti("div")
`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ME} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, UE = ({ toast: e }) => { let { icon: t, type: r, iconTheme: i } = e; return t !== void 0 ? typeof t == "string" ? ne.createElement(LE, null, t) : t : r === "blank" ? null : ne.createElement(kE, null, ne.createElement(OE, {...i }), r !== "loading" && ne.createElement(BE, null, r === "error" ? ne.createElement(CE, {...i }) : ne.createElement(jE, {...i }))) }, PE = e => `
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, zE = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`, IE = "0%{opacity:0;} 100%{opacity:1;}", HE = "0%{opacity:1;} 100%{opacity:0;}", GE = ti("div")
`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, VE = ti("div")
`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, qE = (e, t) => { let r = e.includes("top") ? 1 : -1,
        [i, l] = k2() ? [IE, HE] : [PE(r), zE(r)]; return { animation: t ? `${pn(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${pn(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` } }, XE = ne.memo(({ toast: e, position: t, style: r, children: i }) => { let l = e.height ? qE(e.position || t || "top-center", e.visible) : { opacity: 0 },
        o = ne.createElement(UE, { toast: e }),
        c = ne.createElement(VE, {...e.ariaProps }, Wc(e.message, e)); return ne.createElement(GE, { className: e.className, style: {...l, ...r, ...e.style } }, typeof i == "function" ? i({ icon: o, message: c }) : ne.createElement(ne.Fragment, null, o, c)) });
hE(ne.createElement);
var YE = ({ id: e, className: t, style: r, onHeightUpdate: i, children: l }) => { let o = ne.useCallback(c => { if (c) { let f = () => { let p = c.getBoundingClientRect().height;
                    i(e, p) };
                f(), new MutationObserver(f).observe(c, { subtree: !0, childList: !0, characterData: !0 }) } }, [e, i]); return ne.createElement("div", { ref: o, className: t, style: r }, l) },
    WE = (e, t) => { let r = e.includes("top"),
            i = r ? { top: 0 } : { bottom: 0 },
            l = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {}; return { left: 0, right: 0, display: "flex", position: "absolute", transition: k2() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t*(r?1:-1)}px)`, ...i, ...l } },
    KE = bu `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    Nc = 16,
    QE = ({ reverseOrder: e, position: t = "top-center", toastOptions: r, gutter: i, children: l, containerStyle: o, containerClassName: c }) => { let { toasts: f, handlers: p } = _E(r); return ne.createElement("div", { id: "_rht_toaster", style: { position: "fixed", zIndex: 9999, top: Nc, left: Nc, right: Nc, bottom: Nc, pointerEvents: "none", ...o }, className: c, onMouseEnter: p.startPause, onMouseLeave: p.endPause }, f.map(x => { let m = x.position || t,
                g = p.calculateOffset(x, { reverseOrder: e, gutter: i, defaultPosition: t }),
                v = WE(m, g); return ne.createElement(YE, { id: x.id, key: x.id, onHeightUpdate: p.updateHeight, className: x.visible ? KE : "", style: v }, x.type === "custom" ? Wc(x.message, x) : l ? l(x) : ne.createElement(XE, { toast: x, position: m })) })) },
    Ga = Rr;
const Ti = (e, t) => `w-full px-3 py-2 border ${t.some(r=>r.field===e)?"border-red-300":"border-[#D9D9D9]"} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`,
    tp = { name: "", cost: "", category: "", customCategory: "", gradeLevel: "", customGrade: "", maxStudents: "", description: "", competitionDate: "", endRegistration: "", customArea: "" },
    ZE = () => { var ot, pt, ct, It, gt; const [e, t] = ne.useState(!0), i = ra().pathname === "/login", [l, o] = ne.useState([]), [c, f] = ne.useState(tp), [p, x] = ne.useState(null), [m, g] = ne.useState([]), [v, b] = ne.useState([]), [A, E] = ne.useState([]), [w, S] = ne.useState([]), [O, D] = ne.useState(""), [F, K] = ne.useState(""), [I, V] = ne.useState(""), [N, _] = ne.useState([]), [U, q] = ne.useState(!1), [H, W] = ne.useState(null), [ee, re] = ne.useState(!1), [B, C] = ne.useState(!1), [se, te] = ne.useState(null), [j, ce] = ne.useState(!1), [k, Q] = ne.useState("");
        ne.useEffect(() => { fetch("http://dis.tis.cs.umss.edu.bo/api/getCategorias").then(ae => ae.json()).then(ae => E(ae)).catch(ae => console.error("Error al obtener categorías:", ae)) }, []), ne.useEffect(() => { Ve.get("http://dis.tis.cs.umss.edu.bo/api/areas").then(ae => b(ae.data)).catch(() => b([])), Ve.get("http://dis.tis.cs.umss.edu.bo/api/categorias").then(ae => E(ae.data)).catch(() => E([])), Ve.get("http://dis.tis.cs.umss.edu.bo/api/grados").then(ae => S(ae.data)).catch(() => S([])), re(!0), Ve.get("http://dis.tis.cs.umss.edu.bo/api/competencias").then(ae => _(ae.data)).catch(() => _([])).finally(() => re(!1)) }, []); const L = () => { const ae = [];
                (!c.name || c.name === "Otro" && !c.customArea) && ae.push({ field: "name", message: "El área es requerida" }), (!c.cost || isNaN(c.cost)) && ae.push({ field: "cost", message: "El costo debe ser un número" }), c.maxStudents && isNaN(c.maxStudents) && ae.push({ field: "maxStudents", message: "Debe ser un número" }), (!c.category || c.category === "Otro" && !c.customCategory) && ae.push({ field: "category", message: "La categoría es requerida" }), (!c.gradeLevel || c.gradeLevel === "Otro" && !c.customGrade) && ae.push({ field: "gradeLevel", message: "El grado es requerido" }); const Le = new Date,
                    Ie = c.competitionDate ? new Date(c.competitionDate) : null,
                    Ot = c.endRegistration ? new Date(c.endRegistration) : null; return (!Ie || isNaN(Ie.getTime()) || Ie < Le) && ae.push({ field: "competitionDate", message: "La fecha de competencia debe ser válida y posterior a hoy" }), (!Ot || isNaN(Ot.getTime()) || Ot < Le) && ae.push({ field: "endRegistration", message: "La fecha de fin de inscripción debe ser válida y posterior a hoy" }), Ie && Ot && Ot > Ie && ae.push({ field: "endRegistration", message: "La fecha de fin de inscripción no puede ser después de la competencia" }), g(ae), ae.length === 0 },
            M = async() => { var ae; try { const Le = { areas: l.map(Ie => ({ name: Ie.name, cost: Ie.cost, category: Ie.category, grade_level: Ie.gradeLevel, max_students: Ie.maxStudents, competition_date: Ie.competition_date, end_registration: Ie.end_registration })) };
                    await Ve.post("http://dis.tis.cs.umss.edu.bo/api/crearCompetencia", Le), Ga.success("Competencia creada correctamente") } catch (Le) { console.error("Error al enviar las áreas:", ((ae = Le.response) == null ? void 0 : ae.data) || Le.message), Ga.error("Error al enviar las áreas") } },
            ie = () => { if (!L()) return; const ae = { id: p ? p.id : Date.now().toString(), name: c.name === "Otro" ? c.customArea : c.name, cost: Number(c.cost), category: c.category === "Otro" ? c.customCategory : c.category, gradeLevel: c.gradeLevel === "Otro" ? c.customGrade : c.gradeLevel, maxStudents: c.maxStudents ? Number(c.maxStudents) : void 0, description: c.description, competition_date: c.competitionDate, end_registration: c.endRegistration };
                p ? (o(Le => Le.map(Ie => Ie.id === p.id ? ae : Ie)), x(null)) : o([...l, ae]), f(tp), g([]), Ga.success(p ? "Área editada correctamente" : "Área agregada correctamente") },
            _e = (ae, Le) => { if (ae === "cost" || ae === "maxStudents") { let Ie = Le;
                    (/[^0-9]/.test(Ie) || Ie === "" || isNaN(Number(Ie)) || Number(Ie) <= 0) && (Ie = "1"), f(Ot => ({...Ot, [ae]: Ie })); return } if (["customArea", "customCategory", "customGrade"].includes(ae)) { f(Ie => ({...Ie, [ae]: Le.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, "") })); return }
                f(Ie => ({...Ie, [ae]: Le })) },
            we = async() => { O && (await Ve.delete(`http://dis.tis.cs.umss.edu.bo/api/areasDelete/${O}`), b(v.filter(ae => ae.id !== O)), D(""), Ga.success("Área eliminada")) },
            Te = async() => { F && (await Ve.delete(`http://dis.tis.cs.umss.edu.bo/api/categoriasDelete/${F}`), E(A.filter(ae => ae.id !== F)), K(""), Ga.success("Categoría eliminada")) },
            ye = async() => { I && (await Ve.delete(`http://dis.tis.cs.umss.edu.bo/api/gradosDelete/${I}`), S(w.filter(ae => ae.id !== I)), V(""), Ga.success("Grado eliminado")) },
            Pe = async() => { if (se) { try { await Ve.delete(`http://dis.tis.cs.umss.edu.bo/api/competencias/${se.id}`), _(ae => ae.filter(Le => Le.id !== se.id)), Ga.success("Competencia eliminada") } catch { Ga.error("Error al eliminar competencia") }
                    C(!1), te(null) } },
            ze = ae => { W({...ae }), q(!0) },
            st = ae => { te(ae), C(!0) },
            Ye = () => { O && (Q("área"), ce(!0)) },
            tt = () => { F && (Q("categoría"), ce(!0)) },
            We = () => { I && (Q("grado"), ce(!0)) },
            Oe = () => { ce(!1), k === "área" && we(), k === "categoría" && Te(), k === "grado" && ye() },
            Ke = (ae, Le) => { var Ot, it; const Ie = ae.areaCategoria || ae.area_categoria || {}; return Le === "area" ? ((Ot = Ie.area) == null ? void 0 : Ot.nombre) || Ie.area_nombre || Ie.area || "-" : Le === "categoria" ? ((it = Ie.categoria) == null ? void 0 : it.nombre) || Ie.categoria_nombre || Ie.categoria || "-" : Le === "grado" && (Ie.grado || Ie.grado_nombre) || "-" }; return d.jsxs("div", { className: "flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]", children: [!i && d.jsx(Ea, { isOpen: e, onToggle: () => t(!e) }), d.jsxs("div", { className: `flex-grow p-4 sm:p-8 transition-all duration-300 ${i?"":e?"ml-64":"ml-20"}`, children: [d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-6 mb-6 sm:mb-8", children: d.jsxs("div", { className: "flex items-center justify-between", children: [d.jsxs("div", { className: "flex items-center space-x-3 sm:space-x-4", children: [d.jsxs("div", { className: "p-2 sm:p-3 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl sm:rounded-2xl shadow-lg", children: [d.jsx(Oi, { size: 20, className: "sm:hidden text-white" }), d.jsx(Oi, { size: 28, className: "hidden sm:block text-white" })] }), d.jsxs("div", { children: [d.jsx("h1", { className: "text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent", children: "Crear Competencia" }), d.jsx("p", { className: "text-sm sm:text-base text-[#8B7355] mt-1", children: "Gestiona las áreas de competencia y configuración" })] })] }), d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsxs("div", { className: "text-right hidden sm:block", children: [d.jsx("p", { className: "text-sm font-medium text-[#5A4A3A]", children: "Administrador General" }), d.jsx("p", { className: "text-xs text-[#8B7355]", children: "Administrador" })] }), d.jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl flex items-center justify-center shadow-md", children: d.jsx("span", { className: "text-white font-semibold", children: "A" }) })] })] }) }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8 mb-6 sm:mb-8", children: [d.jsx("div", { className: "mb-6", children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "p-2 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl shadow-md", children: d.jsx(Oi, { size: 16, className: "text-white" }) }), d.jsxs("div", { children: [d.jsx("h2", { className: "text-lg sm:text-xl font-semibold text-[#5A4A3A]", children: "Información del Área" }), d.jsx("p", { className: "text-sm text-[#8B7355]", children: "Actualiza los datos del área de competencia" })] })] }) }), d.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6", children: [d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-2", children: "Área" }), d.jsxs("select", { value: c.name, onChange: ae => { const Le = ae.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
                                    _e("name", Le) }, className: Ti("name", m), children: [d.jsx("option", { value: "", children: "Seleccione un área" }), v.map(ae => d.jsx("option", { value: ae.nombre, children: ae.nombre }, ae.id)), d.jsx("option", { value: "Otro", children: "OTRO" })] }), c.name === "Otro" && d.jsx("input", { type: "text", placeholder: "Nueva área (solo letras y espacios)", value: c.customArea || "", onChange: ae => _e("customArea", ae.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")), className: "mt-2 w-full px-3 py-2 border border-[#D9D9D9] rounded-md" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-2", children: "Costo" }), d.jsx("input", { type: "number", placeholder: "Costo (1-200)", min: "1", max: "200", value: c.cost, onChange: ae => _e("cost", ae.target.value), className: `${Ti("cost",m)} w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#E8DDD4] rounded-lg sm:rounded-xl bg-[#FAF7F2] focus:border-[#C8B7A6] hover:border-[#B8A494] transition-all duration-300 text-[#5A4A3A] placeholder-[#8B7355] text-sm sm:text-base` })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-2", children: "Máx. Estudiantes (opcional)" }), d.jsx("input", { type: "number", placeholder: "Máx. Estudiantes (1-200)", min: "1", max: "200", value: c.maxStudents, onChange: ae => _e("maxStudents", ae.target.value), className: `${Ti("maxStudents",m)} w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#E8DDD4] rounded-lg sm:rounded-xl bg-[#FAF7F2] focus:border-[#C8B7A6] hover:border-[#B8A494] transition-all duration-300 text-[#5A4A3A] placeholder-[#8B7355] text-sm sm:text-base` })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-2", children: "Categoría" }), d.jsxs("select", { value: c.category, onChange: ae => _e("category", ae.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")), className: Ti("category", m), children: [d.jsx("option", { value: "", children: "Seleccione una categoría" }), A.map(ae => d.jsx("option", { value: ae.nombre, children: ae.nombre }, ae.id)), d.jsx("option", { value: "Otro", children: "OTRO" })] }), c.category === "Otro" && d.jsx("input", { type: "text", placeholder: "Nueva categoría (solo letras y espacios)", value: c.customCategory || "", onChange: ae => _e("customCategory", ae.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")), className: "mt-2 w-full px-3 py-2 border border-[#D9D9D9] rounded-md" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-2", children: "Nivel de Grado" }), d.jsxs("select", { value: c.gradeLevel, onChange: ae => _e("gradeLevel", ae.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")), className: Ti("gradeLevel", m), children: [d.jsx("option", { value: "", children: "Seleccione un grado" }), w.map(ae => d.jsx("option", { value: ae.grado, children: ae.grado }, ae.id)), d.jsx("option", { value: "Otro", children: "OTRO" })] }), c.gradeLevel === "Otro" && d.jsx("input", { type: "text", placeholder: "Nuevo grado (solo letras y espacios)", value: c.customGrade || "", onChange: ae => _e("customGrade", ae.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")), className: "mt-2 w-full px-3 py-2 border border-[#D9D9D9] rounded-md" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-2", children: "Fecha de Competencia" }), d.jsx("input", { type: "date", value: c.competitionDate, onChange: ae => _e("competitionDate", ae.target.value), className: Ti("competitionDate", m) })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-2", children: "Fin de Inscripción" }), d.jsx("input", { type: "date", value: c.endRegistration, onChange: ae => _e("endRegistration", ae.target.value), className: Ti("endRegistration", m) })] })] }), d.jsx("div", { className: "mt-6", children: d.jsxs("button", { onClick: ie, className: "bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white py-3 px-6 rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center shadow-lg font-medium", children: [d.jsx(Cd, { size: 18, className: "mr-2" }), p ? "Guardar Cambios" : "Agregar Área"] }) })] }), l.length > 0 && d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8 mb-6 sm:mb-8", children: [d.jsx("div", { className: "mb-6", children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "p-2 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl shadow-md", children: d.jsx(Oi, { size: 16, className: "text-white" }) }), d.jsxs("div", { children: [d.jsx("h2", { className: "text-lg sm:text-xl font-semibold text-[#5A4A3A]", children: "Áreas Configuradas" }), d.jsx("p", { className: "text-sm text-[#8B7355]", children: "Gestiona las áreas de competencia creadas" })] })] }) }), d.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: l.map(ae => d.jsxs("div", { className: "bg-white/90 backdrop-blur-md border-2 border-[#E8DDD4] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300 space-y-2", children: [d.jsxs("div", { className: "flex items-start justify-between mb-3", children: [d.jsx("h3", { className: "text-lg font-semibold text-[#5A4A3A]", children: ae.name }), d.jsx("button", { onClick: () => { x(ae), f({...ae }) }, className: "text-[#C8B7A6] hover:text-[#5A4A3A] hover:bg-[#FAF7F2] text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300", children: "Editar" })] }), d.jsxs("p", { className: "text-sm text-[#8B7355]", children: ["Costo: ", d.jsxs("span", { className: "font-medium text-[#5A4A3A]", children: ["$", ae.cost] })] }), d.jsxs("p", { className: "text-sm text-[#8B7355]", children: ["Categoría: ", d.jsx("span", { className: "font-medium text-[#5A4A3A]", children: ae.category })] }), d.jsxs("p", { className: "text-sm text-[#8B7355]", children: ["Grado: ", d.jsx("span", { className: "font-medium text-[#5A4A3A]", children: ae.gradeLevel })] }), ae.maxStudents && d.jsxs("p", { className: "text-sm text-[#8B7355]", children: ["Máx. Estudiantes: ", d.jsx("span", { className: "font-medium text-[#5A4A3A]", children: ae.maxStudents })] }), ae.description && d.jsxs("p", { className: "text-sm text-[#8B7355]", children: ["📌 ", ae.description] })] }, ae.id)) })] }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8", children: [d.jsx("div", { className: "mb-6", children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "p-2 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl shadow-md", children: d.jsx("span", { className: "text-white text-sm", children: "⚡" }) }), d.jsxs("div", { children: [d.jsx("h2", { className: "text-lg sm:text-xl font-semibold text-[#5A4A3A]", children: "Acciones Rápidas" }), d.jsx("p", { className: "text-sm text-[#8B7355]", children: "Opciones adicionales de gestión" })] })] }) }), d.jsx("button", { onClick: M, className: "bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white py-3 px-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg font-medium", children: "Enviar Áreas al Backend" })] }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8 mt-8", children: [d.jsx("h2", { className: "text-lg font-semibold mb-4 text-[#5A4A3A]", children: "Eliminar registros existentes" }), d.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { children: "Área" }), d.jsxs("select", { onChange: ae => D(ae.target.value), value: O || "", children: [d.jsx("option", { value: "", children: "Seleccione área" }), v.map(ae => d.jsx("option", { value: ae.id, children: ae.nombre }, ae.id))] }), d.jsx("button", { onClick: Ye, className: "ml-2 text-red-600", children: "Eliminar" })] }), d.jsxs("div", { children: [d.jsx("label", { children: "Categoría" }), d.jsxs("select", { onChange: ae => K(ae.target.value), value: F || "", children: [d.jsx("option", { value: "", children: "Seleccione categoría" }), A.map(ae => d.jsx("option", { value: ae.id, children: ae.nombre }, ae.id))] }), d.jsx("button", { onClick: tt, className: "ml-2 text-red-600", children: "Eliminar" })] }), d.jsxs("div", { children: [d.jsx("label", { children: "Grado" }), d.jsxs("select", { onChange: ae => V(ae.target.value), value: I || "", children: [d.jsx("option", { value: "", children: "Seleccione grado" }), w.map(ae => d.jsx("option", { value: ae.id, children: ae.grado }, ae.id))] }), d.jsx("button", { onClick: We, className: "ml-2 text-red-600", children: "Eliminar" })] })] })] }), ee ? d.jsxs("div", { className: "flex justify-center items-center py-10", children: [d.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#8B7355]" }), d.jsx("span", { className: "ml-4 text-[#8B7355] font-semibold", children: "Cargando competencias..." })] }) : d.jsxs("div", { className: "mt-8", children: [d.jsx("h2", { className: "text-lg font-bold mb-2", children: "Competencias existentes" }), d.jsx("ul", { className: "divide-y divide-gray-200", children: N.map(ae => d.jsxs("li", { className: "py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-lg shadow mb-3 px-4 border border-[#E8DDD4] hover:shadow-md transition-all", children: [d.jsxs("div", { className: "mb-2 sm:mb-0 w-full", children: [d.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [d.jsx("span", { className: "font-semibold text-[#5A4A3A]", children: ae.nombre }), d.jsxs("span", { className: "text-xs bg-[#F2EEE3] px-2 py-1 rounded", children: ["ID: ", ae.id] })] }), d.jsxs("div", { className: "flex flex-wrap gap-2 mt-1 text-sm text-[#8B7355]", children: [d.jsxs("span", { children: ["Área: ", Ke(ae, "area")] }), d.jsxs("span", { children: ["Categoría: ", Ke(ae, "categoria")] }), d.jsxs("span", { children: ["Grado: ", Ke(ae, "grado")] }), d.jsxs("span", { children: ["Fecha: ", ae.fecha_competencia] }), d.jsxs("span", { children: ["Fin inscripción: ", ae.fecha_fin_inscripcion] }), d.jsxs("span", { children: ["Máx. Estudiantes: ", ae.max_competidores] }), d.jsxs("span", { children: ["Costo: ", ae.monto] }), d.jsxs("span", { children: ["Tutor ID: ", ae.tutor_id] }), d.jsxs("span", { children: ["Creado: ", ae.created_at] }), d.jsxs("span", { children: ["Actualizado: ", ae.updated_at] })] }), ae.inscripciones && ae.inscripciones.length > 0 && d.jsxs("div", { className: "mt-2 text-xs text-[#5A4A3A]", children: [d.jsx("span", { className: "font-semibold", children: "Inscripciones:" }), d.jsx("ul", { className: "list-disc ml-6", children: ae.inscripciones.map(Le => d.jsxs("li", { children: ["Estudiante ID: ", Le.estudiante_id, " | Tutor ID: ", Le.tutor_id] }, Le.id)) })] })] }), d.jsxs("div", { className: "flex space-x-2 mt-2 sm:mt-0", children: [d.jsx("button", { onClick: () => ze(ae), className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition-all", children: "Editar" }), d.jsx("button", { onClick: () => st(ae), className: "px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded shadow transition-all", children: "Eliminar" })] })] }, ae.id)) })] }), U && H && d.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40", children: d.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 w-full max-w-lg relative", children: [d.jsx("button", { onClick: () => q(!1), className: "absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl", children: "×" }), d.jsx("h2", { className: "text-xl font-bold mb-4 text-[#5A4A3A]", children: "Editar Competencia" }), d.jsxs("div", { className: "space-y-3", children: [d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Nombre" }), d.jsx("input", { type: "text", value: H.nombre, onChange: ae => W(Le => ({...Le, nombre: ae.target.value })), className: "w-full px-3 py-2 border rounded" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Área" }), d.jsxs("select", { value: ((pt = (ot = H.areaCategoria) == null ? void 0 : ot.area) == null ? void 0 : pt.nombre) || "", onChange: ae => W(Le => { var Ie; return {...Le, areaCategoria: {...Le.areaCategoria, area: {...(Ie = Le.areaCategoria) == null ? void 0 : Ie.area, nombre: ae.target.value } } } }), className: "w-full px-3 py-2 border rounded", children: [d.jsx("option", { value: "", children: "Seleccione un área" }), v.map(ae => d.jsx("option", { value: ae.nombre, children: ae.nombre }, ae.id))] })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Categoría" }), d.jsxs("select", { value: ((It = (ct = H.areaCategoria) == null ? void 0 : ct.categoria) == null ? void 0 : It.nombre) || "", onChange: ae => W(Le => { var Ie; return {...Le, areaCategoria: {...Le.areaCategoria, categoria: {...(Ie = Le.areaCategoria) == null ? void 0 : Ie.categoria, nombre: ae.target.value } } } }), className: "w-full px-3 py-2 border rounded", children: [d.jsx("option", { value: "", children: "Seleccione una categoría" }), A.map(ae => d.jsx("option", { value: ae.nombre, children: ae.nombre }, ae.id))] })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Grado" }), d.jsxs("select", { value: ((gt = H.areaCategoria) == null ? void 0 : gt.grado) || "", onChange: ae => W(Le => ({...Le, areaCategoria: {...Le.areaCategoria, grado: ae.target.value } })), className: "w-full px-3 py-2 border rounded", children: [d.jsx("option", { value: "", children: "Seleccione un grado" }), w.map(ae => d.jsx("option", { value: ae.grado, children: ae.grado }, ae.id))] })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Fecha competencia" }), d.jsx("input", { type: "date", value: H.fecha_competencia, onChange: ae => W(Le => ({...Le, fecha_competencia: ae.target.value })), className: "w-full px-3 py-2 border rounded" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Fin inscripción" }), d.jsx("input", { type: "date", value: H.fecha_fin_inscripcion, onChange: ae => W(Le => ({...Le, fecha_fin_inscripcion: ae.target.value })), className: "w-full px-3 py-2 border rounded" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Máx. Estudiantes" }), d.jsx("input", { type: "number", min: "1", value: H.max_competidores, onChange: ae => W(Le => ({...Le, max_competidores: ae.target.value.replace(/[^0-9]/g, "") || "1" })), className: "w-full px-3 py-2 border rounded" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-medium text-[#5A4A3A] mb-1", children: "Costo" }), d.jsx("input", { type: "number", min: "1", value: H.monto, onChange: ae => W(Le => ({...Le, monto: ae.target.value.replace(/[^0-9]/g, "") || "1" })), className: "w-full px-3 py-2 border rounded" })] })] }), d.jsxs("div", { className: "flex justify-end mt-6 space-x-2", children: [d.jsx("button", { onClick: () => q(!1), className: "px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded", children: "Cancelar" }), d.jsx("button", { onClick: async() => { var ae, Le, Ie, Ot, it; try { await Ve.put(`http://dis.tis.cs.umss.edu.bo/api/competenciasUpdate/${H.id}`, { nombre: H.nombre, fecha_competencia: H.fecha_competencia, fecha_fin_inscripcion: H.fecha_fin_inscripcion, max_competidores: Number(H.max_competidores), monto: Number(H.monto), area: (Le = (ae = H.areaCategoria) == null ? void 0 : ae.area) == null ? void 0 : Le.nombre, categoria: (Ot = (Ie = H.areaCategoria) == null ? void 0 : Ie.categoria) == null ? void 0 : Ot.nombre, grado: (it = H.areaCategoria) == null ? void 0 : it.grado }), _(Hr => Hr.map(Rt => Rt.id === H.id ? {...Rt, ...H } : Rt)), q(!1), Ga.success("Competencia actualizada") } catch { Ga.error("Error al actualizar competencia") } }, className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded", children: "Guardar" })] })] }) }), B && se && d.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40", children: d.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative", children: [d.jsx("button", { onClick: () => C(!1), className: "absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl", children: "×" }), d.jsx("h2", { className: "text-xl font-bold mb-4 text-red-700", children: "¿Eliminar competencia?" }), d.jsxs("p", { className: "mb-4 text-[#5A4A3A]", children: ["Se eliminará la competencia ", d.jsx("span", { className: "font-semibold", children: se.nombre }), " y todos los registros asociados. ¿Deseas continuar?"] }), d.jsxs("div", { className: "flex justify-end space-x-2", children: [d.jsx("button", { onClick: () => C(!1), className: "px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded", children: "Cancelar" }), d.jsx("button", { onClick: Pe, className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded", children: "Eliminar" })] })] }) }), j && d.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40", children: d.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative", children: [d.jsx("button", { onClick: () => ce(!1), className: "absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl", children: "×" }), d.jsx("h2", { className: "text-xl font-bold mb-4 text-red-700", children: "Advertencia" }), d.jsxs("p", { className: "mb-4 text-[#5A4A3A]", children: ["Si eliminas esta ", k, ", es posible que también se eliminen competencias asociadas. ¿Deseas continuar?"] }), d.jsxs("div", { className: "flex justify-end space-x-2", children: [d.jsx("button", { onClick: () => ce(!1), className: "px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded", children: "Cancelar" }), d.jsx("button", { onClick: Oe, className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded", children: "Aceptar" })] })] }) })] })] }) },
    $E = () => { const [e, t] = ne.useState(!0), i = ra().pathname === "/login", [l, o] = ne.useState([]), [c, f] = ne.useState({ name: "", email: "", password: "", celular: "", role: "Administrador" }), [p, x] = ne.useState(!1), [m, g] = ne.useState(null), [v, b] = ne.useState(!1), [A, E] = ne.useState(null);
        ne.useEffect(() => { w() }, []); const w = async() => { x(!0); try { const F = await Ve.get("http://dis.tis.cs.umss.edu.bo/api/users");
                    o(F.data.data || []) } catch { g("Error al cargar usuarios") }
                x(!1) },
            S = F => { E(F), f({ name: F.name, email: F.email, password: "", celular: F.celular || "", role: F.role }), b(!0) },
            O = async F => { window.confirm("¿Seguro que deseas eliminar este usuario?") && (await Ve.delete(`http://dis.tis.cs.umss.edu.bo/api/users/${F.id}`), w()) },
            D = async F => { F.preventDefault(), x(!0); try { A ? await Ve.put(`http://dis.tis.cs.umss.edu.bo/api/users/${A.id}`, c) : await Ve.post("http://dis.tis.cs.umss.edu.bo/api/users", c), b(!1), w() } catch { g("Error al guardar usuario") }
                x(!1) }; return d.jsxs("div", { className: "flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]", children: [!i && d.jsx(Ea, { isOpen: e, onToggle: () => t(!e) }), d.jsxs("div", { className: `flex-grow p-8 transition-all duration-300 ${i?"":e?"ml-64":"ml-20"}`, children: [d.jsxs("div", { className: "flex justify-between items-center mb-8", children: [d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg border border-[#E8DDD4] transition-all duration-300 hover:scale-[1.02]", children: [d.jsx("h1", { className: "text-3xl font-bold bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent", children: "Gestión de Usuarios" }), d.jsx("p", { className: "text-[#8B7355] mt-1 text-sm font-medium", children: "Administra usuarios del sistema" })] }), d.jsxs("button", { onClick: () => { E(null), b(!0) }, className: "bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-[#5A4A3A] px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 border border-[#E8DDD4] flex items-center gap-3", children: [d.jsx(Cd, { size: 20 }), "Nuevo Usuario"] })] }), d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-[#E8DDD4] p-8 transition-all duration-300", children: d.jsx("div", { className: "overflow-x-auto", children: d.jsxs("table", { className: "w-full", children: [d.jsx("thead", { children: d.jsxs("tr", { className: "bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] border-b-2 border-[#E8DDD4] rounded-xl", children: [d.jsx("th", { className: "text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider", children: "Usuario" }), d.jsx("th", { className: "text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider", children: "Email" }), d.jsx("th", { className: "text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider", children: "Rol" }), d.jsx("th", { className: "text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider", children: "Acciones" })] }) }), d.jsx("tbody", { children: l.map(F => d.jsxs("tr", { className: "border-b border-[#E8DDD4] hover:bg-[#FAF7F2]/50 transition-all duration-300", children: [d.jsx("td", { className: "py-4 px-6", children: d.jsxs("div", { className: "flex items-center", children: [d.jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-full flex items-center justify-center mr-4 shadow-md", children: d.jsx(Ya, { size: 18, className: "text-[#5A4A3A]" }) }), d.jsx("span", { className: "text-[#5A4A3A] font-medium", children: F.name })] }) }), d.jsx("td", { className: "py-4 px-6 text-[#8B7355]", children: F.email }), d.jsx("td", { className: "py-4 px-6", children: d.jsx("span", { className: `px-3 py-1 rounded-xl text-xs font-semibold border transition-all duration-300 ${F.role==="admin"?"bg-gradient-to-r from-[#E8DDD4] to-[#C8B7A6] text-[#5A4A3A] border-[#B8A494]":F.role==="tutor"?"bg-gradient-to-r from-[#F2EEE3] to-[#E8DDD4] text-[#8B7355] border-[#C8B7A6]":"bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] text-[#5A4A3A] border-[#E8DDD4]"}`, children: F.role.charAt(0).toUpperCase() + F.role.slice(1) }) }), d.jsx("td", { className: "py-4 px-6", children: d.jsxs("div", { className: "flex space-x-3", children: [d.jsx("button", { onClick: () => S(F), className: "text-[#8B7355] hover:text-[#5A4A3A] hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-[#FAF7F2]", children: d.jsx(VA, { size: 18 }) }), d.jsx("button", { onClick: () => O(F), className: "text-[#B8A494] hover:text-[#8B7355] hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-[#F2EEE3]", children: d.jsx(ZA, { size: 18 }) })] }) })] }, F.id)) })] }) }) }), v && d.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300", children: d.jsxs("div", { className: "bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full p-8 border border-[#E8DDD4] transition-all duration-300 hover:scale-[1.02]", children: [d.jsx("h2", { className: "text-2xl font-bold mb-6 bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent", children: A ? "Editar Usuario" : "Nuevo Usuario" }), d.jsxs("form", { className: "space-y-6", onSubmit: D, children: [d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-semibold mb-2 text-[#5A4A3A]", children: "Nombre" }), d.jsx("input", { type: "text", className: "w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A] placeholder-[#8B7355]", value: c.name, onChange: F => f({...c, name: F.target.value }), placeholder: "Ingresa el nombre completo", required: !0 })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-semibold mb-2 text-[#5A4A3A]", children: "Email" }), d.jsx("input", { type: "email", className: "w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A] placeholder-[#8B7355]", value: c.email, onChange: F => f({...c, email: F.target.value }), placeholder: "ejemplo@correo.com", required: !0 })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-semibold mb-2 text-[#5A4A3A]", children: "Celular" }), d.jsx("input", { type: "text", className: "w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A] placeholder-[#8B7355]", value: c.celular, onChange: F => f({...c, celular: F.target.value }), placeholder: "Celular" })] }), d.jsxs("div", { children: [d.jsx("label", { className: "block text-sm font-semibold mb-2 text-[#5A4A3A]", children: "Rol" }), d.jsxs("select", { className: "w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A]", value: c.role, onChange: F => f({...c, role: F.target.value }), required: !0, children: [d.jsx("option", { value: "Administrador", children: "Administrador" }), d.jsx("option", { value: "Organizador", children: "Organizador" }), d.jsx("option", { value: "Tutor", children: "Tutor" })] })] }), d.jsxs("div", { children: [d.jsxs("label", { className: "block text-sm font-semibold mb-2 text-[#5A4A3A]", children: ["Contraseña ", A ? "(dejar vacío para no cambiar)" : ""] }), d.jsx("input", { type: "password", className: "w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A] placeholder-[#8B7355]", value: c.password, onChange: F => f({...c, password: F.target.value }), placeholder: "Contraseña", ...A ? {} : { required: !0 } })] }), d.jsxs("div", { className: "flex justify-end space-x-4 pt-4", children: [d.jsx("button", { type: "button", onClick: () => b(!1), className: "px-6 py-3 border border-[#E8DDD4] rounded-xl text-[#8B7355] font-semibold hover:bg-[#FAF7F2] transition-all duration-300 hover:scale-[1.02]", children: "Cancelar" }), d.jsx("button", { type: "submit", className: "px-6 py-3 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-[#5A4A3A] rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300", disabled: p, children: A ? "Guardar Cambios" : "Crear Usuario" })] })] })] }) })] })] }) },
    Dd = () => { var _, U, q, H; const { user: e, token: t } = Aa(), [r, i] = ne.useState(!1), [l, o] = ne.useState(!1), [c, f] = ne.useState(!1), [p, x] = ne.useState(!1), [m, g] = ne.useState(!1), [v, b] = ne.useState(!1), [A, E] = ne.useState(!0), [w, S] = ne.useState(!0), [O, D] = ne.useState({ name: "", email: "", phone: "" }), [F, K] = ne.useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
        ne.useEffect(() => { t && (async() => { S(!0); try { const re = (await Ve.get("http://dis.tis.cs.umss.edu.bo/api/profile", { headers: { Authorization: `Bearer ${t}` } })).data;
                    D({ name: re.name || "", email: re.email || "", phone: re.celular || "" }) } catch {} finally { S(!1) } })() }, [t]); const I = () => { E(!A) },
            V = async W => { W.preventDefault(), b(!0); try { const ee = await Ve.put("http://dis.tis.cs.umss.edu.bo/api/profile", { name: O.name, email: O.email, celular: O.phone, ...O.password ? { password: O.password } : {} }, { headers: { Authorization: `Bearer ${t}` } });
                    g(!1), alert("Perfil actualizado correctamente") } catch { alert("Error al actualizar el perfil") } finally { b(!1) } },
            N = async W => { if (W.preventDefault(), F.newPassword !== F.confirmPassword) { alert("Las contraseñas no coinciden"); return } try { await Ve.put("http://dis.tis.cs.umss.edu.bo/api/profile", { password: F.newPassword }, { headers: { Authorization: `Bearer ${t}` } }), alert("Contraseña actualizada correctamente"), i(!1), K({ currentPassword: "", newPassword: "", confirmPassword: "" }) } catch { alert("Error al actualizar la contraseña") } }; return d.jsxs("div", { className: "min-h-screen", style: { background: "linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)" }, children: [d.jsx(Ea, { isOpen: A, onToggle: I }), d.jsxs("div", { className: `transition-all duration-300 ${A?"ml-64":"ml-20"} p-6 sm:p-8`, children: [d.jsx("div", { className: "mb-8", children: d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-6 sm:p-8", style: { borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0", children: [d.jsxs("div", { children: [d.jsx("h1", { className: "text-2xl sm:text-3xl font-bold mb-2", style: { background: "linear-gradient(135deg, #5A4A3A, #8B7355)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Mi Perfil" }), d.jsx("p", { className: "text-sm sm:text-base", style: { color: "#8B7355" }, children: "Gestiona tu información personal y configuración" })] }), d.jsx("div", { className: "flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end", children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsxs("div", { className: "text-right", children: [d.jsx("p", { className: "font-semibold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: e == null ? void 0 : e.name }), d.jsx("p", { className: "text-xs sm:text-sm", style: { color: "#8B7355" }, children: ((_ = e == null ? void 0 : e.role) == null ? void 0 : _.charAt(0).toUpperCase()) + ((U = e == null ? void 0 : e.role) == null ? void 0 : U.slice(1)) })] }), d.jsxs("div", { className: "relative group", children: [d.jsx("div", { className: "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg border-2 cursor-pointer transition-all duration-300 group-hover:shadow-xl", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(Ya, { className: "w-6 h-6 sm:w-7 sm:h-7 text-white" }) }), d.jsx("div", { className: "absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors", style: { borderColor: "#E8DDD4" }, children: d.jsx(OA, { className: "w-3 h-3", style: { color: "#8B7355" } }) })] })] }) })] }) }) }), d.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8", children: [d.jsx("div", { className: "xl:col-span-2", children: d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border", style: { borderColor: "#E8DDD4" }, children: [d.jsx("div", { className: "p-6 sm:p-8 pb-4 sm:pb-6 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: d.jsxs("div", { className: "flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0", children: [d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(R2, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white" }) }), d.jsxs("div", { children: [d.jsx("h2", { className: "text-lg sm:text-xl font-bold", style: { color: "#5A4A3A" }, children: "Información Personal" }), d.jsx("p", { className: "text-xs sm:text-sm", style: { color: "#8B7355" }, children: "Actualiza tus datos personales" })] })] }), d.jsx("button", { onClick: () => g(!m), className: "px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium hover:shadow-md w-full sm:w-auto", style: { backgroundColor: m ? "#FAF7F2" : "white", borderColor: "#E8DDD4", color: "#5A4A3A" }, children: m ? "Cancelar" : "Editar" })] }) }), d.jsxs("form", { onSubmit: V, className: "p-6 sm:p-8", children: [d.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [d.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [d.jsx("label", { className: "block text-xs sm:text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Nombre Completo" }), d.jsxs("div", { className: "relative", children: [d.jsx(Ya, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsx("input", { type: "text", value: O.name, onChange: W => D({...O, name: W.target.value }), disabled: !m, className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60", style: { backgroundColor: m ? "#FAF7F2" : "#F8F8F8", borderColor: "#E8DDD4", color: "#5A4A3A" } })] })] }), d.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [d.jsx("label", { className: "block text-xs sm:text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Correo Electrónico" }), d.jsxs("div", { className: "relative", children: [d.jsx(Js, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsx("input", { type: "email", value: O.email, onChange: W => D({...O, email: W.target.value }), disabled: !m, className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60", style: { backgroundColor: m ? "#FAF7F2" : "#F8F8F8", borderColor: "#E8DDD4", color: "#5A4A3A" } })] })] }), d.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [d.jsx("label", { className: "block text-xs sm:text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Teléfono" }), d.jsxs("div", { className: "relative", children: [d.jsx(dd, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsx("input", { type: "tel", value: O.phone, onChange: W => D({...O, phone: W.target.value }), disabled: !m, className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60", style: { backgroundColor: m ? "#FAF7F2" : "#F8F8F8", borderColor: "#E8DDD4", color: "#5A4A3A" }, placeholder: "+591 xxx xxxx" })] })] })] }), m && d.jsxs("div", { className: "flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-8", children: [d.jsxs("button", { type: "button", onClick: () => i(!0), className: "flex items-center justify-center px-6 py-3 border rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-300 text-sm font-medium", style: { backgroundColor: "white", borderColor: "#E8DDD4", color: "#5A4A3A" }, children: [d.jsx(Jx, { size: 18, className: "mr-2" }), "Cambiar Contraseña"] }), d.jsx("button", { type: "submit", disabled: v, className: "flex items-center justify-center px-6 py-3 text-white rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: v ? d.jsxs(d.Fragment, { children: [d.jsx("div", { className: "w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin mr-2" }), "Guardando..."] }) : d.jsxs(d.Fragment, { children: [d.jsx(qA, { size: 18, className: "mr-2" }), "Guardar Cambios"] }) })] })] })] }) }), d.jsx("div", { className: "space-y-6", children: d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border", style: { borderColor: "#E8DDD4" }, children: [d.jsx("div", { className: "p-6 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(KA, { className: "w-4 h-4 text-white" }) }), d.jsx("h3", { className: "text-lg font-bold", style: { color: "#5A4A3A" }, children: "Resumen de Cuenta" })] }) }), d.jsxs("div", { className: "p-6 space-y-4", children: [d.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg", style: { backgroundColor: "#FAF7F2" }, children: [d.jsxs("div", { children: [d.jsx("p", { className: "text-xs font-medium", style: { color: "#8B7355" }, children: "Tipo de Usuario" }), d.jsx("p", { className: "font-semibold text-sm", style: { color: "#5A4A3A" }, children: ((q = e == null ? void 0 : e.role) == null ? void 0 : q.charAt(0).toUpperCase()) + ((H = e == null ? void 0 : e.role) == null ? void 0 : H.slice(1)) })] }), d.jsx(Ya, { className: "w-5 h-5", style: { color: "#C8B7A6" } })] }), d.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg", style: { backgroundColor: "#FAF7F2" }, children: [d.jsxs("div", { children: [d.jsx("p", { className: "text-xs font-medium", style: { color: "#8B7355" }, children: "Fecha de Registro" }), d.jsx("p", { className: "font-semibold text-sm", style: { color: "#5A4A3A" }, children: e != null && e.created_at ? new Date(e.created_at).toLocaleDateString() : "" })] }), d.jsx(Nd, { className: "w-5 h-5", style: { color: "#C8B7A6" } })] })] })] }) })] })] }), r && d.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50", children: d.jsxs("div", { className: "bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full border", style: { borderColor: "#E8DDD4" }, children: [d.jsx("div", { className: "p-6 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(Jx, { className: "w-4 h-4 text-white" }) }), d.jsx("h3", { className: "text-xl font-bold", style: { color: "#5A4A3A" }, children: "Cambiar Contraseña" })] }) }), d.jsxs("form", { onSubmit: N, className: "p-6 space-y-4", children: [d.jsxs("div", { className: "space-y-2", children: [d.jsx("label", { className: "block text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Contraseña Actual" }), d.jsxs("div", { className: "relative", children: [d.jsx(zc, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4", style: { color: "#8B7355" } }), d.jsx("input", { type: l ? "text" : "password", value: F.currentPassword, onChange: W => K({...F, currentPassword: W.target.value }), className: "w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A" }, placeholder: "••••••••••", required: !0 }), d.jsx("button", { type: "button", onClick: () => o(!l), className: "absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200", style: { color: "#8B7355" }, children: l ? d.jsx(Pc, { className: "w-4 h-4" }) : d.jsx(Hs, { className: "w-4 h-4" }) })] })] }), d.jsxs("div", { className: "space-y-2", children: [d.jsx("label", { className: "block text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Nueva Contraseña" }), d.jsxs("div", { className: "relative", children: [d.jsx(zc, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4", style: { color: "#8B7355" } }), d.jsx("input", { type: c ? "text" : "password", value: F.newPassword, onChange: W => K({...F, newPassword: W.target.value }), className: "w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A" }, placeholder: "••••••••••", required: !0 }), d.jsx("button", { type: "button", onClick: () => f(!c), className: "absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200", style: { color: "#8B7355" }, children: c ? d.jsx(Pc, { className: "w-4 h-4" }) : d.jsx(Hs, { className: "w-4 h-4" }) })] })] }), d.jsxs("div", { className: "space-y-2", children: [d.jsx("label", { className: "block text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Confirmar Nueva Contraseña" }), d.jsxs("div", { className: "relative", children: [d.jsx(zc, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4", style: { color: "#8B7355" } }), d.jsx("input", { type: p ? "text" : "password", value: F.confirmPassword, onChange: W => K({...F, confirmPassword: W.target.value }), className: "w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A" }, placeholder: "••••••••••", required: !0 }), d.jsx("button", { type: "button", onClick: () => x(!p), className: "absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200", style: { color: "#8B7355" }, children: p ? d.jsx(Pc, { className: "w-4 h-4" }) : d.jsx(Hs, { className: "w-4 h-4" }) })] })] }), d.jsxs("div", { className: "flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4", children: [d.jsx("button", { type: "button", onClick: () => { i(!1), K({ currentPassword: "", newPassword: "", confirmPassword: "" }) }, className: "px-6 py-3 border rounded-lg font-medium transition-all duration-300 hover:shadow-md", style: { backgroundColor: "white", borderColor: "#E8DDD4", color: "#5A4A3A" }, children: "Cancelar" }), d.jsx("button", { type: "submit", className: "px-6 py-3 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: "Cambiar Contraseña" })] })] })] }) })] }) },
    JE = [{ path: "/dashboard", element: d.jsx(lE, {}), allowedRoles: ["Administrador"] }, { path: "/configuration", element: d.jsx(ZE, {}), allowedRoles: ["Administrador"] }, { path: "/users", element: d.jsx($E, {}), allowedRoles: ["Administrador"] }, { path: "/profile", element: d.jsx(Dd, {}), allowedRoles: ["Administrador"] }]; /*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var Kc = {};
Kc.version = "0.18.5";
var L2 = 1252,
    ew = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4],
    U2 = function(e) { ew.indexOf(e) != -1 && (L2 = e) };

function tw() { U2(1252) }
var eo = function(e) { U2(e) };

function rw() { eo(1200), tw() }
var Cc = function(t) { return String.fromCharCode(t) },
    rp = function(t) { return String.fromCharCode(t) },
    ap, Wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function to(e) { for (var t = "", r = 0, i = 0, l = 0, o = 0, c = 0, f = 0, p = 0, x = 0; x < e.length;) r = e.charCodeAt(x++), o = r >> 2, i = e.charCodeAt(x++), c = (r & 3) << 4 | i >> 4, l = e.charCodeAt(x++), f = (i & 15) << 2 | l >> 6, p = l & 63, isNaN(i) ? f = p = 64 : isNaN(l) && (p = 64), t += Wn.charAt(o) + Wn.charAt(c) + Wn.charAt(f) + Wn.charAt(p); return t }

function gn(e) { var t = "",
        r = 0,
        i = 0,
        l = 0,
        o = 0,
        c = 0,
        f = 0,
        p = 0;
    e = e.replace(/[^\w\+\/\=]/g, ""); for (var x = 0; x < e.length;) o = Wn.indexOf(e.charAt(x++)), c = Wn.indexOf(e.charAt(x++)), r = o << 2 | c >> 4, t += String.fromCharCode(r), f = Wn.indexOf(e.charAt(x++)), i = (c & 15) << 4 | f >> 2, f !== 64 && (t += String.fromCharCode(i)), p = Wn.indexOf(e.charAt(x++)), l = (f & 3) << 6 | p, p !== 64 && (t += String.fromCharCode(l)); return t }
var xt = function() { return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node }(),
    bn = function() { if (typeof Buffer < "u") { var e = !Buffer.from; if (!e) try { Buffer.from("foo", "utf8") } catch { e = !0 }
            return e ? function(t, r) { return r ? new Buffer(t, r) : new Buffer(t) } : Buffer.from.bind(Buffer) } return function() {} }();

function Mi(e) { return xt ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e) }

function np(e) { return xt ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e) }
var Ra = function(t) { return xt ? bn(t, "binary") : t.split("").map(function(r) { return r.charCodeAt(0) & 255 }) };

function Au(e) { if (typeof ArrayBuffer > "u") return Ra(e); for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), i = 0; i != e.length; ++i) r[i] = e.charCodeAt(i) & 255; return t }

function fo(e) { if (Array.isArray(e)) return e.map(function(i) { return String.fromCharCode(i) }).join(""); for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]); return t.join("") }

function aw(e) { if (typeof Uint8Array > "u") throw new Error("Unsupported"); return new Uint8Array(e) }
var mr = xt ? function(e) { return Buffer.concat(e.map(function(t) { return Buffer.isBuffer(t) ? t : bn(t) })) } : function(e) { if (typeof Uint8Array < "u") { var t = 0,
            r = 0; for (t = 0; t < e.length; ++t) r += e[t].length; var i = new Uint8Array(r),
            l = 0; for (t = 0, r = 0; t < e.length; r += l, ++t)
            if (l = e[t].length, e[t] instanceof Uint8Array) i.set(e[t], r);
            else { if (typeof e[t] == "string") throw "wtf";
                i.set(new Uint8Array(e[t]), r) }
        return i } return [].concat.apply([], e.map(function(o) { return Array.isArray(o) ? o : [].slice.call(o) })) };

function nw(e) { for (var t = [], r = 0, i = e.length + 250, l = Mi(e.length + 255), o = 0; o < e.length; ++o) { var c = e.charCodeAt(o); if (c < 128) l[r++] = c;
        else if (c < 2048) l[r++] = 192 | c >> 6 & 31, l[r++] = 128 | c & 63;
        else if (c >= 55296 && c < 57344) { c = (c & 1023) + 64; var f = e.charCodeAt(++o) & 1023;
            l[r++] = 240 | c >> 8 & 7, l[r++] = 128 | c >> 2 & 63, l[r++] = 128 | f >> 6 & 15 | (c & 3) << 4, l[r++] = 128 | f & 63 } else l[r++] = 224 | c >> 12 & 15, l[r++] = 128 | c >> 6 & 63, l[r++] = 128 | c & 63;
        r > i && (t.push(l.slice(0, r)), r = 0, l = Mi(65535), i = 65530) } return t.push(l.slice(0, r)), mr(t) }
var Vs = /\u0000/g,
    Dc = /[\u0001-\u0006]/g;

function Ol(e) { for (var t = "", r = e.length - 1; r >= 0;) t += e.charAt(r--); return t }

function Fa(e, t) { var r = "" + e; return r.length >= t ? r : Pt("0", t - r.length) + r }

function Od(e, t) { var r = "" + e; return r.length >= t ? r : Pt(" ", t - r.length) + r }

function Qc(e, t) { var r = "" + e; return r.length >= t ? r : r + Pt(" ", t - r.length) }

function iw(e, t) { var r = "" + Math.round(e); return r.length >= t ? r : Pt("0", t - r.length) + r }

function lw(e, t) { var r = "" + e; return r.length >= t ? r : Pt("0", t - r.length) + r }
var ip = Math.pow(2, 32);

function _l(e, t) { if (e > ip || e < -ip) return iw(e, t); var r = Math.round(e); return lw(r, t) }

function Zc(e, t) { return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108 }
var lp = [
        ["Sun", "Sunday"],
        ["Mon", "Monday"],
        ["Tue", "Tuesday"],
        ["Wed", "Wednesday"],
        ["Thu", "Thursday"],
        ["Fri", "Friday"],
        ["Sat", "Saturday"]
    ],
    Vf = [
        ["J", "Jan", "January"],
        ["F", "Feb", "February"],
        ["M", "Mar", "March"],
        ["A", "Apr", "April"],
        ["M", "May", "May"],
        ["J", "Jun", "June"],
        ["J", "Jul", "July"],
        ["A", "Aug", "August"],
        ["S", "Sep", "September"],
        ["O", "Oct", "October"],
        ["N", "Nov", "November"],
        ["D", "Dec", "December"]
    ];

function sw(e) { return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e }
var zt = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"上午/下午 "hh"時"mm"分"ss"秒 "' },
    sp = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 },
    ow = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };

function $c(e, t, r) { for (var i = e < 0 ? -1 : 1, l = e * i, o = 0, c = 1, f = 0, p = 1, x = 0, m = 0, g = Math.floor(l); x < t && (g = Math.floor(l), f = g * c + o, m = g * x + p, !(l - g < 5e-8));) l = 1 / (l - g), o = c, c = f, p = x, x = m; if (m > t && (x > t ? (m = p, f = o) : (m = x, f = c)), !r) return [0, i * f, m]; var v = Math.floor(i * f / m); return [v, i * f - v * m, m] }

function Oc(e, t, r) { if (e > 2958465 || e < 0) return null; var i = e | 0,
        l = Math.floor(86400 * (e - i)),
        o = 0,
        c = [],
        f = { D: i, T: l, u: 86400 * (e - i) - l, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 }; if (Math.abs(f.u) < 1e-6 && (f.u = 0), t && t.date1904 && (i += 1462), f.u > .9999 && (f.u = 0, ++l == 86400 && (f.T = l = 0, ++i, ++f.D)), i === 60) c = r ? [1317, 10, 29] : [1900, 2, 29], o = 3;
    else if (i === 0) c = r ? [1317, 8, 29] : [1900, 1, 0], o = 6;
    else { i > 60 && --i; var p = new Date(1900, 0, 1);
        p.setDate(p.getDate() + i - 1), c = [p.getFullYear(), p.getMonth() + 1, p.getDate()], o = p.getDay(), i < 60 && (o = (o + 6) % 7), r && (o = xw(p, c)) } return f.y = c[0], f.m = c[1], f.d = c[2], f.S = l % 60, l = Math.floor(l / 60), f.M = l % 60, l = Math.floor(l / 60), f.H = l, f.q = o, f }
var P2 = new Date(1899, 11, 31, 0, 0, 0),
    cw = P2.getTime(),
    uw = new Date(1900, 2, 1, 0, 0, 0);

function z2(e, t) { var r = e.getTime(); return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= uw && (r += 24 * 60 * 60 * 1e3), (r - (cw + (e.getTimezoneOffset() - P2.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3) }

function Rd(e) { return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1") }

function fw(e) { return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2") }

function dw(e) { var t = e < 0 ? 12 : 11,
        r = Rd(e.toFixed(12)); return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5) }

function hw(e) { var t = Rd(e.toFixed(11)); return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t }

function mw(e) { var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
        r; return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = dw(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = hw(e), Rd(fw(r.toUpperCase())) }

function xd(e, t) { switch (typeof e) {
        case "string":
            return e;
        case "boolean":
            return e ? "TRUE" : "FALSE";
        case "number":
            return (e | 0) === e ? e.toString(10) : mw(e);
        case "undefined":
            return "";
        case "object":
            if (e == null) return ""; if (e instanceof Date) return Zn(14, z2(e, t && t.date1904), t) } throw new Error("unsupported value in General format: " + e) }

function xw(e, t) { t[0] -= 581; var r = e.getDay(); return e < 60 && (r = (r + 6) % 7), r }

function pw(e, t, r, i) { var l = "",
        o = 0,
        c = 0,
        f = r.y,
        p, x = 0; switch (e) {
        case 98:
            f = r.y + 543;
        case 121:
            switch (t.length) {
                case 1:
                case 2:
                    p = f % 100, x = 2; break;
                default:
                    p = f % 1e4, x = 4; break } break;
        case 109:
            switch (t.length) {
                case 1:
                case 2:
                    p = r.m, x = t.length; break;
                case 3:
                    return Vf[r.m - 1][1];
                case 5:
                    return Vf[r.m - 1][0];
                default:
                    return Vf[r.m - 1][2] } break;
        case 100:
            switch (t.length) {
                case 1:
                case 2:
                    p = r.d, x = t.length; break;
                case 3:
                    return lp[r.q][0];
                default:
                    return lp[r.q][1] } break;
        case 104:
            switch (t.length) {
                case 1:
                case 2:
                    p = 1 + (r.H + 11) % 12, x = t.length; break;
                default:
                    throw "bad hour format: " + t } break;
        case 72:
            switch (t.length) {
                case 1:
                case 2:
                    p = r.H, x = t.length; break;
                default:
                    throw "bad hour format: " + t } break;
        case 77:
            switch (t.length) {
                case 1:
                case 2:
                    p = r.M, x = t.length; break;
                default:
                    throw "bad minute format: " + t } break;
        case 115:
            if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000") throw "bad second format: " + t; return r.u === 0 && (t == "s" || t == "ss") ? Fa(r.S, t.length) : (i >= 2 ? c = i === 3 ? 1e3 : 100 : c = i === 1 ? 10 : 1, o = Math.round(c * (r.S + r.u)), o >= 60 * c && (o = 0), t === "s" ? o === 0 ? "0" : "" + o / c : (l = Fa(o, 2 + i), t === "ss" ? l.substr(0, 2) : "." + l.substr(2, t.length - 1)));
        case 90:
            switch (t) {
                case "[h]":
                case "[hh]":
                    p = r.D * 24 + r.H; break;
                case "[m]":
                case "[mm]":
                    p = (r.D * 24 + r.H) * 60 + r.M; break;
                case "[s]":
                case "[ss]":
                    p = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u); break;
                default:
                    throw "bad abstime format: " + t }
            x = t.length === 3 ? 1 : 2; break;
        case 101:
            p = f, x = 1; break } var m = x > 0 ? Fa(p, x) : ""; return m }

function Kn(e) { var t = 3; if (e.length <= t) return e; for (var r = e.length % t, i = e.substr(0, r); r != e.length; r += t) i += (i.length > 0 ? "," : "") + e.substr(r, t); return i }
var I2 = /%/g;

function gw(e, t, r) { var i = t.replace(I2, ""),
        l = t.length - i.length; return hn(e, i, r * Math.pow(10, 2 * l)) + Pt("%", l) }

function vw(e, t, r) { for (var i = t.length - 1; t.charCodeAt(i - 1) === 44;) --i; return hn(e, t.substr(0, i), r / Math.pow(10, 3 * (t.length - i))) }

function H2(e, t) { var r, i = e.indexOf("E") - e.indexOf(".") - 1; if (e.match(/^#+0.0E\+0$/)) { if (t == 0) return "0.0E+0"; if (t < 0) return "-" + H2(e, -t); var l = e.indexOf(".");
        l === -1 && (l = e.indexOf("E")); var o = Math.floor(Math.log(t) * Math.LOG10E) % l; if (o < 0 && (o += l), r = (t / Math.pow(10, o)).toPrecision(i + 1 + (l + o) % l), r.indexOf("e") === -1) { var c = Math.floor(Math.log(t) * Math.LOG10E); for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (c - r.length + o) : r += "E+" + (c - o); r.substr(0, 2) === "0.";) r = r.charAt(0) + r.substr(2, l) + "." + r.substr(2 + l), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
            r = r.replace(/\+-/, "-") }
        r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, p, x, m) { return p + x + m.substr(0, (l + o) % l) + "." + m.substr(o) + "E" }) } else r = t.toExponential(i); return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E") }
var G2 = /# (\?+)( ?)\/( ?)(\d+)/;

function yw(e, t, r) { var i = parseInt(e[4], 10),
        l = Math.round(t * i),
        o = Math.floor(l / i),
        c = l - o * i,
        f = i; return r + (o === 0 ? "" : "" + o) + " " + (c === 0 ? Pt(" ", e[1].length + 1 + e[4].length) : Od(c, e[1].length) + e[2] + "/" + e[3] + Fa(f, e[4].length)) }

function bw(e, t, r) { return r + (t === 0 ? "" : "" + t) + Pt(" ", e[1].length + 2 + e[4].length) }
var V2 = /^#*0*\.([0#]+)/,
    q2 = /\).*[0#]/,
    X2 = /\(###\) ###\\?-####/;

function Dr(e) { for (var t = "", r, i = 0; i != e.length; ++i) switch (r = e.charCodeAt(i)) {
        case 35:
            break;
        case 63:
            t += " "; break;
        case 48:
            t += "0"; break;
        default:
            t += String.fromCharCode(r) }
    return t }

function op(e, t) { var r = Math.pow(10, t); return "" + Math.round(e * r) / r }

function cp(e, t) { var r = e - Math.floor(e),
        i = Math.pow(10, t); return t < ("" + Math.round(r * i)).length ? 0 : Math.round(r * i) }

function Aw(e, t) { return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0 }

function Ew(e) { return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e) }

function ya(e, t, r) { if (e.charCodeAt(0) === 40 && !t.match(q2)) { var i = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, ""); return r >= 0 ? ya("n", i, r) : "(" + ya("n", i, -r) + ")" } if (t.charCodeAt(t.length - 1) === 44) return vw(e, t, r); if (t.indexOf("%") !== -1) return gw(e, t, r); if (t.indexOf("E") !== -1) return H2(t, r); if (t.charCodeAt(0) === 36) return "$" + ya(e, t.substr(t.charAt(1) == " " ? 2 : 1), r); var l, o, c, f, p = Math.abs(r),
        x = r < 0 ? "-" : ""; if (t.match(/^00+$/)) return x + _l(p, t.length); if (t.match(/^[#?]+$/)) return l = _l(r, 0), l === "0" && (l = ""), l.length > t.length ? l : Dr(t.substr(0, t.length - l.length)) + l; if (o = t.match(G2)) return yw(o, p, x); if (t.match(/^#+0+$/)) return x + _l(p, t.length - t.indexOf("0")); if (o = t.match(V2)) return l = op(r, o[1].length).replace(/^([^\.]+)$/, "$1." + Dr(o[1])).replace(/\.$/, "." + Dr(o[1])).replace(/\.(\d*)$/, function(A, E) { return "." + E + Pt("0", Dr(o[1]).length - E.length) }), t.indexOf("0.") !== -1 ? l : l.replace(/^0\./, "."); if (t = t.replace(/^#+([0.])/, "$1"), o = t.match(/^(0*)\.(#*)$/)) return x + op(p, o[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, o[1].length ? "0." : "."); if (o = t.match(/^#{1,3},##0(\.?)$/)) return x + Kn(_l(p, 0)); if (o = t.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + ya(e, t, -r) : Kn("" + (Math.floor(r) + Aw(r, o[1].length))) + "." + Fa(cp(r, o[1].length), o[1].length); if (o = t.match(/^#,#*,#0/)) return ya(e, t.replace(/^#,#*,/, ""), r); if (o = t.match(/^([0#]+)(\\?-([0#]+))+$/)) return l = Ol(ya(e, t.replace(/[\\-]/g, ""), r)), c = 0, Ol(Ol(t.replace(/\\/g, "")).replace(/[0#]/g, function(A) { return c < l.length ? l.charAt(c++) : A === "0" ? "0" : "" })); if (t.match(X2)) return l = ya(e, "##########", r), "(" + l.substr(0, 3) + ") " + l.substr(3, 3) + "-" + l.substr(6); var m = ""; if (o = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return c = Math.min(o[4].length, 7), f = $c(p, Math.pow(10, c) - 1, !1), l = "" + x, m = hn("n", o[1], f[1]), m.charAt(m.length - 1) == " " && (m = m.substr(0, m.length - 1) + "0"), l += m + o[2] + "/" + o[3], m = Qc(f[2], c), m.length < o[4].length && (m = Dr(o[4].substr(o[4].length - m.length)) + m), l += m, l; if (o = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return c = Math.min(Math.max(o[1].length, o[4].length), 7), f = $c(p, Math.pow(10, c) - 1, !0), x + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Od(f[1], c) + o[2] + "/" + o[3] + Qc(f[2], c) : Pt(" ", 2 * c + 1 + o[2].length + o[3].length)); if (o = t.match(/^[#0?]+$/)) return l = _l(r, 0), t.length <= l.length ? l : Dr(t.substr(0, t.length - l.length)) + l; if (o = t.match(/^([#0?]+)\.([#0]+)$/)) { l = "" + r.toFixed(Math.min(o[2].length, 10)).replace(/([^0])0+$/, "$1"), c = l.indexOf("."); var g = t.indexOf(".") - c,
            v = t.length - l.length - g; return Dr(t.substr(0, g) + l + t.substr(t.length - v)) } if (o = t.match(/^00,000\.([#0]*0)$/)) return c = cp(r, o[1].length), r < 0 ? "-" + ya(e, t, -r) : Kn(Ew(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(A) { return "00," + (A.length < 3 ? Fa(0, 3 - A.length) : "") + A }) + "." + Fa(c, o[1].length); switch (t) {
        case "###,##0.00":
            return ya(e, "#,##0.00", r);
        case "###,###":
        case "##,###":
        case "#,###":
            var b = Kn(_l(p, 0)); return b !== "0" ? x + b : "";
        case "###,###.00":
            return ya(e, "###,##0.00", r).replace(/^0\./, ".");
        case "#,###.00":
            return ya(e, "#,##0.00", r).replace(/^0\./, ".") } throw new Error("unsupported format |" + t + "|") }

function ww(e, t, r) { for (var i = t.length - 1; t.charCodeAt(i - 1) === 44;) --i; return hn(e, t.substr(0, i), r / Math.pow(10, 3 * (t.length - i))) }

function _w(e, t, r) { var i = t.replace(I2, ""),
        l = t.length - i.length; return hn(e, i, r * Math.pow(10, 2 * l)) + Pt("%", l) }

function Y2(e, t) { var r, i = e.indexOf("E") - e.indexOf(".") - 1; if (e.match(/^#+0.0E\+0$/)) { if (t == 0) return "0.0E+0"; if (t < 0) return "-" + Y2(e, -t); var l = e.indexOf(".");
        l === -1 && (l = e.indexOf("E")); var o = Math.floor(Math.log(t) * Math.LOG10E) % l; if (o < 0 && (o += l), r = (t / Math.pow(10, o)).toPrecision(i + 1 + (l + o) % l), !r.match(/[Ee]/)) { var c = Math.floor(Math.log(t) * Math.LOG10E);
            r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (c - r.length + o) : r += "E+" + (c - o), r = r.replace(/\+-/, "-") }
        r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, p, x, m) { return p + x + m.substr(0, (l + o) % l) + "." + m.substr(o) + "E" }) } else r = t.toExponential(i); return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E") }

function Va(e, t, r) { if (e.charCodeAt(0) === 40 && !t.match(q2)) { var i = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, ""); return r >= 0 ? Va("n", i, r) : "(" + Va("n", i, -r) + ")" } if (t.charCodeAt(t.length - 1) === 44) return ww(e, t, r); if (t.indexOf("%") !== -1) return _w(e, t, r); if (t.indexOf("E") !== -1) return Y2(t, r); if (t.charCodeAt(0) === 36) return "$" + Va(e, t.substr(t.charAt(1) == " " ? 2 : 1), r); var l, o, c, f, p = Math.abs(r),
        x = r < 0 ? "-" : ""; if (t.match(/^00+$/)) return x + Fa(p, t.length); if (t.match(/^[#?]+$/)) return l = "" + r, r === 0 && (l = ""), l.length > t.length ? l : Dr(t.substr(0, t.length - l.length)) + l; if (o = t.match(G2)) return bw(o, p, x); if (t.match(/^#+0+$/)) return x + Fa(p, t.length - t.indexOf("0")); if (o = t.match(V2)) return l = ("" + r).replace(/^([^\.]+)$/, "$1." + Dr(o[1])).replace(/\.$/, "." + Dr(o[1])), l = l.replace(/\.(\d*)$/, function(A, E) { return "." + E + Pt("0", Dr(o[1]).length - E.length) }), t.indexOf("0.") !== -1 ? l : l.replace(/^0\./, "."); if (t = t.replace(/^#+([0.])/, "$1"), o = t.match(/^(0*)\.(#*)$/)) return x + ("" + p).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, o[1].length ? "0." : "."); if (o = t.match(/^#{1,3},##0(\.?)$/)) return x + Kn("" + p); if (o = t.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + Va(e, t, -r) : Kn("" + r) + "." + Pt("0", o[1].length); if (o = t.match(/^#,#*,#0/)) return Va(e, t.replace(/^#,#*,/, ""), r); if (o = t.match(/^([0#]+)(\\?-([0#]+))+$/)) return l = Ol(Va(e, t.replace(/[\\-]/g, ""), r)), c = 0, Ol(Ol(t.replace(/\\/g, "")).replace(/[0#]/g, function(A) { return c < l.length ? l.charAt(c++) : A === "0" ? "0" : "" })); if (t.match(X2)) return l = Va(e, "##########", r), "(" + l.substr(0, 3) + ") " + l.substr(3, 3) + "-" + l.substr(6); var m = ""; if (o = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return c = Math.min(o[4].length, 7), f = $c(p, Math.pow(10, c) - 1, !1), l = "" + x, m = hn("n", o[1], f[1]), m.charAt(m.length - 1) == " " && (m = m.substr(0, m.length - 1) + "0"), l += m + o[2] + "/" + o[3], m = Qc(f[2], c), m.length < o[4].length && (m = Dr(o[4].substr(o[4].length - m.length)) + m), l += m, l; if (o = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return c = Math.min(Math.max(o[1].length, o[4].length), 7), f = $c(p, Math.pow(10, c) - 1, !0), x + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Od(f[1], c) + o[2] + "/" + o[3] + Qc(f[2], c) : Pt(" ", 2 * c + 1 + o[2].length + o[3].length)); if (o = t.match(/^[#0?]+$/)) return l = "" + r, t.length <= l.length ? l : Dr(t.substr(0, t.length - l.length)) + l; if (o = t.match(/^([#0]+)\.([#0]+)$/)) { l = "" + r.toFixed(Math.min(o[2].length, 10)).replace(/([^0])0+$/, "$1"), c = l.indexOf("."); var g = t.indexOf(".") - c,
            v = t.length - l.length - g; return Dr(t.substr(0, g) + l + t.substr(t.length - v)) } if (o = t.match(/^00,000\.([#0]*0)$/)) return r < 0 ? "-" + Va(e, t, -r) : Kn("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(A) { return "00," + (A.length < 3 ? Fa(0, 3 - A.length) : "") + A }) + "." + Fa(0, o[1].length); switch (t) {
        case "###,###":
        case "##,###":
        case "#,###":
            var b = Kn("" + p); return b !== "0" ? x + b : "";
        default:
            if (t.match(/\.[0#?]*$/)) return Va(e, t.slice(0, t.lastIndexOf(".")), r) + Dr(t.slice(t.lastIndexOf("."))) } throw new Error("unsupported format |" + t + "|") }

function hn(e, t, r) { return (r | 0) === r ? Va(e, t, r) : ya(e, t, r) }

function Tw(e) { for (var t = [], r = !1, i = 0, l = 0; i < e.length; ++i) switch (e.charCodeAt(i)) {
        case 34:
            r = !r; break;
        case 95:
        case 42:
        case 92:
            ++i; break;
        case 59:
            t[t.length] = e.substr(l, i - l), l = i + 1 }
    if (t[t.length] = e.substr(l), r === !0) throw new Error("Format |" + e + "| unterminated string "); return t }
var W2 = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;

function K2(e) { for (var t = 0, r = "", i = ""; t < e.length;) switch (r = e.charAt(t)) {
        case "G":
            Zc(e, t) && (t += 6), t++; break;
        case '"':
            for (; e.charCodeAt(++t) !== 34 && t < e.length;);++t; break;
        case "\\":
            t += 2; break;
        case "_":
            t += 2; break;
        case "@":
            ++t; break;
        case "B":
        case "b":
            if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2") return !0;
        case "M":
        case "D":
        case "Y":
        case "H":
        case "S":
        case "E":
        case "m":
        case "d":
        case "y":
        case "h":
        case "s":
        case "e":
        case "g":
            return !0;
        case "A":
        case "a":
        case "上":
            if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午") return !0;++t; break;
        case "[":
            for (i = r; e.charAt(t++) !== "]" && t < e.length;) i += e.charAt(t); if (i.match(W2)) return !0; break;
        case ".":
        case "0":
        case "#":
            for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1);); break;
        case "?":
            for (; e.charAt(++t) === r;); break;
        case "*":
            ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t; break;
        case "(":
        case ")":
            ++t; break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1;); break;
        case " ":
            ++t; break;
        default:
            ++t; break }
    return !1 }

function Sw(e, t, r, i) { for (var l = [], o = "", c = 0, f = "", p = "t", x, m, g, v = "H"; c < e.length;) switch (f = e.charAt(c)) {
        case "G":
            if (!Zc(e, c)) throw new Error("unrecognized character " + f + " in " + e);
            l[l.length] = { t: "G", v: "General" }, c += 7; break;
        case '"':
            for (o = "";
                (g = e.charCodeAt(++c)) !== 34 && c < e.length;) o += String.fromCharCode(g);
            l[l.length] = { t: "t", v: o }, ++c; break;
        case "\\":
            var b = e.charAt(++c),
                A = b === "(" || b === ")" ? b : "t";
            l[l.length] = { t: A, v: b }, ++c; break;
        case "_":
            l[l.length] = { t: "t", v: " " }, c += 2; break;
        case "@":
            l[l.length] = { t: "T", v: t }, ++c; break;
        case "B":
        case "b":
            if (e.charAt(c + 1) === "1" || e.charAt(c + 1) === "2") { if (x == null && (x = Oc(t, r, e.charAt(c + 1) === "2"), x == null)) return "";
                l[l.length] = { t: "X", v: e.substr(c, 2) }, p = f, c += 2; break }
        case "M":
        case "D":
        case "Y":
        case "H":
        case "S":
        case "E":
            f = f.toLowerCase();
        case "m":
        case "d":
        case "y":
        case "h":
        case "s":
        case "e":
        case "g":
            if (t < 0 || x == null && (x = Oc(t, r), x == null)) return ""; for (o = f; ++c < e.length && e.charAt(c).toLowerCase() === f;) o += f;
            f === "m" && p.toLowerCase() === "h" && (f = "M"), f === "h" && (f = v), l[l.length] = { t: f, v: o }, p = f; break;
        case "A":
        case "a":
        case "上":
            var E = { t: f, v: f }; if (x == null && (x = Oc(t, r)), e.substr(c, 3).toUpperCase() === "A/P" ? (x != null && (E.v = x.H >= 12 ? "P" : "A"), E.t = "T", v = "h", c += 3) : e.substr(c, 5).toUpperCase() === "AM/PM" ? (x != null && (E.v = x.H >= 12 ? "PM" : "AM"), E.t = "T", c += 5, v = "h") : e.substr(c, 5).toUpperCase() === "上午/下午" ? (x != null && (E.v = x.H >= 12 ? "下午" : "上午"), E.t = "T", c += 5, v = "h") : (E.t = "t", ++c), x == null && E.t === "T") return "";
            l[l.length] = E, p = f; break;
        case "[":
            for (o = f; e.charAt(c++) !== "]" && c < e.length;) o += e.charAt(c); if (o.slice(-1) !== "]") throw 'unterminated "[" block: |' + o + "|"; if (o.match(W2)) { if (x == null && (x = Oc(t, r), x == null)) return "";
                l[l.length] = { t: "Z", v: o.toLowerCase() }, p = o.charAt(1) } else o.indexOf("$") > -1 && (o = (o.match(/\$([^-\[\]]*)/) || [])[1] || "$", K2(e) || (l[l.length] = { t: "t", v: o })); break;
        case ".":
            if (x != null) { for (o = f; ++c < e.length && (f = e.charAt(c)) === "0";) o += f;
                l[l.length] = { t: "s", v: o }; break }
        case "0":
        case "#":
            for (o = f; ++c < e.length && "0#?.,E+-%".indexOf(f = e.charAt(c)) > -1;) o += f;
            l[l.length] = { t: "n", v: o }; break;
        case "?":
            for (o = f; e.charAt(++c) === f;) o += f;
            l[l.length] = { t: f, v: o }, p = f; break;
        case "*":
            ++c, (e.charAt(c) == " " || e.charAt(c) == "*") && ++c; break;
        case "(":
        case ")":
            l[l.length] = { t: i === 1 ? "t" : f, v: f }, ++c; break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            for (o = f; c < e.length && "0123456789".indexOf(e.charAt(++c)) > -1;) o += e.charAt(c);
            l[l.length] = { t: "D", v: o }; break;
        case " ":
            l[l.length] = { t: f, v: f }, ++c; break;
        case "$":
            l[l.length] = { t: "t", v: "$" }, ++c; break;
        default:
            if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1) throw new Error("unrecognized character " + f + " in " + e);
            l[l.length] = { t: "t", v: f }, ++c; break }
    var w = 0,
        S = 0,
        O; for (c = l.length - 1, p = "t"; c >= 0; --c) switch (l[c].t) {
        case "h":
        case "H":
            l[c].t = v, p = "h", w < 1 && (w = 1); break;
        case "s":
            (O = l[c].v.match(/\.0+$/)) && (S = Math.max(S, O[0].length - 1)), w < 3 && (w = 3);
        case "d":
        case "y":
        case "M":
        case "e":
            p = l[c].t; break;
        case "m":
            p === "s" && (l[c].t = "M", w < 2 && (w = 2)); break;
        case "X":
            break;
        case "Z":
            w < 1 && l[c].v.match(/[Hh]/) && (w = 1), w < 2 && l[c].v.match(/[Mm]/) && (w = 2), w < 3 && l[c].v.match(/[Ss]/) && (w = 3) }
    switch (w) {
        case 0:
            break;
        case 1:
            x.u >= .5 && (x.u = 0, ++x.S), x.S >= 60 && (x.S = 0, ++x.M), x.M >= 60 && (x.M = 0, ++x.H); break;
        case 2:
            x.u >= .5 && (x.u = 0, ++x.S), x.S >= 60 && (x.S = 0, ++x.M); break } var D = "",
        F; for (c = 0; c < l.length; ++c) switch (l[c].t) {
        case "t":
        case "T":
        case " ":
        case "D":
            break;
        case "X":
            l[c].v = "", l[c].t = ";"; break;
        case "d":
        case "m":
        case "y":
        case "h":
        case "H":
        case "M":
        case "s":
        case "e":
        case "b":
        case "Z":
            l[c].v = pw(l[c].t.charCodeAt(0), l[c].v, x, S), l[c].t = "t"; break;
        case "n":
        case "?":
            for (F = c + 1; l[F] != null && ((f = l[F].t) === "?" || f === "D" || (f === " " || f === "t") && l[F + 1] != null && (l[F + 1].t === "?" || l[F + 1].t === "t" && l[F + 1].v === "/") || l[c].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (l[F].v === "/" || l[F].v === " " && l[F + 1] != null && l[F + 1].t == "?"));) l[c].v += l[F].v, l[F] = { v: "", t: ";" }, ++F;
            D += l[c].v, c = F - 1; break;
        case "G":
            l[c].t = "t", l[c].v = xd(t, r); break }
    var K = "",
        I, V; if (D.length > 0) { D.charCodeAt(0) == 40 ? (I = t < 0 && D.charCodeAt(0) === 45 ? -t : t, V = hn("n", D, I)) : (I = t < 0 && i > 1 ? -t : t, V = hn("n", D, I), I < 0 && l[0] && l[0].t == "t" && (V = V.substr(1), l[0].v = "-" + l[0].v)), F = V.length - 1; var N = l.length; for (c = 0; c < l.length; ++c)
            if (l[c] != null && l[c].t != "t" && l[c].v.indexOf(".") > -1) { N = c; break }
        var _ = l.length; if (N === l.length && V.indexOf("E") === -1) { for (c = l.length - 1; c >= 0; --c) l[c] == null || "n?".indexOf(l[c].t) === -1 || (F >= l[c].v.length - 1 ? (F -= l[c].v.length, l[c].v = V.substr(F + 1, l[c].v.length)) : F < 0 ? l[c].v = "" : (l[c].v = V.substr(0, F + 1), F = -1), l[c].t = "t", _ = c);
            F >= 0 && _ < l.length && (l[_].v = V.substr(0, F + 1) + l[_].v) } else if (N !== l.length && V.indexOf("E") === -1) { for (F = V.indexOf(".") - 1, c = N; c >= 0; --c)
                if (!(l[c] == null || "n?".indexOf(l[c].t) === -1)) { for (m = l[c].v.indexOf(".") > -1 && c === N ? l[c].v.indexOf(".") - 1 : l[c].v.length - 1, K = l[c].v.substr(m + 1); m >= 0; --m) F >= 0 && (l[c].v.charAt(m) === "0" || l[c].v.charAt(m) === "#") && (K = V.charAt(F--) + K);
                    l[c].v = K, l[c].t = "t", _ = c }
            for (F >= 0 && _ < l.length && (l[_].v = V.substr(0, F + 1) + l[_].v), F = V.indexOf(".") + 1, c = N; c < l.length; ++c)
                if (!(l[c] == null || "n?(".indexOf(l[c].t) === -1 && c !== N)) { for (m = l[c].v.indexOf(".") > -1 && c === N ? l[c].v.indexOf(".") + 1 : 0, K = l[c].v.substr(0, m); m < l[c].v.length; ++m) F < V.length && (K += V.charAt(F++));
                    l[c].v = K, l[c].t = "t", _ = c } } } for (c = 0; c < l.length; ++c) l[c] != null && "n?".indexOf(l[c].t) > -1 && (I = i > 1 && t < 0 && c > 0 && l[c - 1].v === "-" ? -t : t, l[c].v = hn(l[c].t, l[c].v, I), l[c].t = "t"); var U = ""; for (c = 0; c !== l.length; ++c) l[c] != null && (U += l[c].v); return U }
var up = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;

function fp(e, t) { if (t == null) return !1; var r = parseFloat(t[2]); switch (t[1]) {
        case "=":
            if (e == r) return !0; break;
        case ">":
            if (e > r) return !0; break;
        case "<":
            if (e < r) return !0; break;
        case "<>":
            if (e != r) return !0; break;
        case ">=":
            if (e >= r) return !0; break;
        case "<=":
            if (e <= r) return !0; break } return !1 }

function Nw(e, t) { var r = Tw(e),
        i = r.length,
        l = r[i - 1].indexOf("@"); if (i < 4 && l > -1 && --i, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|"); if (typeof t != "number") return [4, r.length === 4 || l > -1 ? r[r.length - 1] : "@"]; switch (r.length) {
        case 1:
            r = l > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"]; break;
        case 2:
            r = l > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"]; break;
        case 3:
            r = l > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"]; break } var o = t > 0 ? r[0] : t < 0 ? r[1] : r[2]; if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [i, o]; if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) { var c = r[0].match(up),
            f = r[1].match(up); return fp(t, c) ? [i, r[0]] : fp(t, f) ? [i, r[1]] : [i, r[c != null && f != null ? 2 : 1]] } return [i, o] }

function Zn(e, t, r) { r == null && (r = {}); var i = ""; switch (typeof e) {
        case "string":
            e == "m/d/yy" && r.dateNF ? i = r.dateNF : i = e; break;
        case "number":
            e == 14 && r.dateNF ? i = r.dateNF : i = (r.table != null ? r.table : zt)[e], i == null && (i = r.table && r.table[sp[e]] || zt[sp[e]]), i == null && (i = ow[e] || "General"); break } if (Zc(i, 0)) return xd(t, r);
    t instanceof Date && (t = z2(t, r.date1904)); var l = Nw(i, t); if (Zc(l[1])) return xd(t, r); if (t === !0) t = "TRUE";
    else if (t === !1) t = "FALSE";
    else if (t === "" || t == null) return ""; return Sw(l[1], t, r, l[0]) }

function Q2(e, t) { if (typeof t != "number") { t = +t || -1; for (var r = 0; r < 392; ++r) { if (zt[r] == null) { t < 0 && (t = r); continue } if (zt[r] == e) { t = r; break } }
        t < 0 && (t = 391) } return zt[t] = e, t }

function Eu(e) { for (var t = 0; t != 392; ++t) e[t] !== void 0 && Q2(e[t], t) }

function wu() { zt = sw() }
var Z2 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;

function Cw(e) { var t = typeof e == "number" ? zt[e] : e; return t = t.replace(Z2, "(\\d+)"), new RegExp("^" + t + "$") }

function Dw(e, t, r) { var i = -1,
        l = -1,
        o = -1,
        c = -1,
        f = -1,
        p = -1;
    (t.match(Z2) || []).forEach(function(g, v) { var b = parseInt(r[v + 1], 10); switch (g.toLowerCase().charAt(0)) {
            case "y":
                i = b; break;
            case "d":
                o = b; break;
            case "h":
                c = b; break;
            case "s":
                p = b; break;
            case "m":
                c >= 0 ? f = b : l = b; break } }), p >= 0 && f == -1 && l >= 0 && (f = l, l = -1); var x = ("" + (i >= 0 ? i : new Date().getFullYear())).slice(-4) + "-" + ("00" + (l >= 1 ? l : 1)).slice(-2) + "-" + ("00" + (o >= 1 ? o : 1)).slice(-2);
    x.length == 7 && (x = "0" + x), x.length == 8 && (x = "20" + x); var m = ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (p >= 0 ? p : 0)).slice(-2); return c == -1 && f == -1 && p == -1 ? x : i == -1 && l == -1 && o == -1 ? m : x + "T" + m }
var Ow = function() { var e = {};
        e.version = "1.2.0";

        function t() { for (var V = 0, N = new Array(256), _ = 0; _ != 256; ++_) V = _, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, V = V & 1 ? -306674912 ^ V >>> 1 : V >>> 1, N[_] = V; return typeof Int32Array < "u" ? new Int32Array(N) : N } var r = t();

        function i(V) { var N = 0,
                _ = 0,
                U = 0,
                q = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096); for (U = 0; U != 256; ++U) q[U] = V[U]; for (U = 0; U != 256; ++U)
                for (_ = V[U], N = 256 + U; N < 4096; N += 256) _ = q[N] = _ >>> 8 ^ V[_ & 255]; var H = []; for (U = 1; U != 16; ++U) H[U - 1] = typeof Int32Array < "u" ? q.subarray(U * 256, U * 256 + 256) : q.slice(U * 256, U * 256 + 256); return H } var l = i(r),
            o = l[0],
            c = l[1],
            f = l[2],
            p = l[3],
            x = l[4],
            m = l[5],
            g = l[6],
            v = l[7],
            b = l[8],
            A = l[9],
            E = l[10],
            w = l[11],
            S = l[12],
            O = l[13],
            D = l[14];

        function F(V, N) { for (var _ = N ^ -1, U = 0, q = V.length; U < q;) _ = _ >>> 8 ^ r[(_ ^ V.charCodeAt(U++)) & 255]; return ~_ }

        function K(V, N) { for (var _ = N ^ -1, U = V.length - 15, q = 0; q < U;) _ = D[V[q++] ^ _ & 255] ^ O[V[q++] ^ _ >> 8 & 255] ^ S[V[q++] ^ _ >> 16 & 255] ^ w[V[q++] ^ _ >>> 24] ^ E[V[q++]] ^ A[V[q++]] ^ b[V[q++]] ^ v[V[q++]] ^ g[V[q++]] ^ m[V[q++]] ^ x[V[q++]] ^ p[V[q++]] ^ f[V[q++]] ^ c[V[q++]] ^ o[V[q++]] ^ r[V[q++]]; for (U += 15; q < U;) _ = _ >>> 8 ^ r[(_ ^ V[q++]) & 255]; return ~_ }

        function I(V, N) { for (var _ = N ^ -1, U = 0, q = V.length, H = 0, W = 0; U < q;) H = V.charCodeAt(U++), H < 128 ? _ = _ >>> 8 ^ r[(_ ^ H) & 255] : H < 2048 ? (_ = _ >>> 8 ^ r[(_ ^ (192 | H >> 6 & 31)) & 255], _ = _ >>> 8 ^ r[(_ ^ (128 | H & 63)) & 255]) : H >= 55296 && H < 57344 ? (H = (H & 1023) + 64, W = V.charCodeAt(U++) & 1023, _ = _ >>> 8 ^ r[(_ ^ (240 | H >> 8 & 7)) & 255], _ = _ >>> 8 ^ r[(_ ^ (128 | H >> 2 & 63)) & 255], _ = _ >>> 8 ^ r[(_ ^ (128 | W >> 6 & 15 | (H & 3) << 4)) & 255], _ = _ >>> 8 ^ r[(_ ^ (128 | W & 63)) & 255]) : (_ = _ >>> 8 ^ r[(_ ^ (224 | H >> 12 & 15)) & 255], _ = _ >>> 8 ^ r[(_ ^ (128 | H >> 6 & 63)) & 255], _ = _ >>> 8 ^ r[(_ ^ (128 | H & 63)) & 255]); return ~_ } return e.table = r, e.bstr = F, e.buf = K, e.str = I, e }(),
    _t = function() { var t = {};
        t.version = "1.2.1";

        function r(R, X) { for (var z = R.split("/"), G = X.split("/"), Y = 0, Z = 0, me = Math.min(z.length, G.length); Y < me; ++Y) { if (Z = z[Y].length - G[Y].length) return Z; if (z[Y] != G[Y]) return z[Y] < G[Y] ? -1 : 1 } return z.length - G.length }

        function i(R) { if (R.charAt(R.length - 1) == "/") return R.slice(0, -1).indexOf("/") === -1 ? R : i(R.slice(0, -1)); var X = R.lastIndexOf("/"); return X === -1 ? R : R.slice(0, X + 1) }

        function l(R) { if (R.charAt(R.length - 1) == "/") return l(R.slice(0, -1)); var X = R.lastIndexOf("/"); return X === -1 ? R : R.slice(X + 1) }

        function o(R, X) { typeof X == "string" && (X = new Date(X)); var z = X.getHours();
            z = z << 6 | X.getMinutes(), z = z << 5 | X.getSeconds() >>> 1, R.write_shift(2, z); var G = X.getFullYear() - 1980;
            G = G << 4 | X.getMonth() + 1, G = G << 5 | X.getDate(), R.write_shift(2, G) }

        function c(R) { var X = R.read_shift(2) & 65535,
                z = R.read_shift(2) & 65535,
                G = new Date,
                Y = z & 31;
            z >>>= 5; var Z = z & 15;
            z >>>= 4, G.setMilliseconds(0), G.setFullYear(z + 1980), G.setMonth(Z - 1), G.setDate(Y); var me = X & 31;
            X >>>= 5; var Ae = X & 63; return X >>>= 6, G.setHours(X), G.setMinutes(Ae), G.setSeconds(me << 1), G }

        function f(R) { Zr(R, 0); for (var X = {}, z = 0; R.l <= R.length - 4;) { var G = R.read_shift(2),
                    Y = R.read_shift(2),
                    Z = R.l + Y,
                    me = {}; switch (G) {
                    case 21589:
                        z = R.read_shift(1), z & 1 && (me.mtime = R.read_shift(4)), Y > 5 && (z & 2 && (me.atime = R.read_shift(4)), z & 4 && (me.ctime = R.read_shift(4))), me.mtime && (me.mt = new Date(me.mtime * 1e3)); break }
                R.l = Z, X[G] = me } return X } var p;

        function x() { return p || (p = {}) }

        function m(R, X) { if (R[0] == 80 && R[1] == 75) return ka(R, X); if ((R[0] | 32) == 109 && (R[1] | 32) == 105) return Gl(R, X); if (R.length < 512) throw new Error("CFB file size " + R.length + " < 512"); var z = 3,
                G = 512,
                Y = 0,
                Z = 0,
                me = 0,
                Ae = 0,
                de = 0,
                he = [],
                xe = R.slice(0, 512);
            Zr(xe, 0); var De = g(xe); switch (z = De[0], z) {
                case 3:
                    G = 512; break;
                case 4:
                    G = 4096; break;
                case 0:
                    if (De[1] == 0) return ka(R, X);
                default:
                    throw new Error("Major Version: Expected 3 or 4 saw " + z) }
            G !== 512 && (xe = R.slice(0, G), Zr(xe, 28)); var je = R.slice(0, G);
            v(xe, z); var Me = xe.read_shift(4, "i"); if (z === 3 && Me !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + Me);
            xe.l += 4, me = xe.read_shift(4, "i"), xe.l += 4, xe.chk("00100000", "Mini Stream Cutoff Size: "), Ae = xe.read_shift(4, "i"), Y = xe.read_shift(4, "i"), de = xe.read_shift(4, "i"), Z = xe.read_shift(4, "i"); for (var Re = -1, Fe = 0; Fe < 109 && (Re = xe.read_shift(4, "i"), !(Re < 0)); ++Fe) he[Fe] = Re; var Qe = b(R, G);
            w(de, Z, Qe, G, he); var Nt = O(Qe, me, he, G);
            Nt[me].name = "!Directory", Y > 0 && Ae !== W && (Nt[Ae].name = "!MiniFAT"), Nt[he[0]].name = "!FAT", Nt.fat_addrs = he, Nt.ssz = G; var mt = {},
                jt = [],
                Sr = [],
                ii = [];
            D(me, Nt, Qe, jt, Y, mt, Sr, Ae), A(Sr, ii, jt), jt.shift(); var wn = { FileIndex: Sr, FullPaths: ii }; return X && X.raw && (wn.raw = { header: je, sectors: Qe }), wn }

        function g(R) { if (R[R.l] == 80 && R[R.l + 1] == 75) return [0, 0];
            R.chk(ee, "Header Signature: "), R.l += 16; var X = R.read_shift(2, "u"); return [R.read_shift(2, "u"), X] }

        function v(R, X) { var z = 9; switch (R.l += 2, z = R.read_shift(2)) {
                case 9:
                    if (X != 3) throw new Error("Sector Shift: Expected 9 saw " + z); break;
                case 12:
                    if (X != 4) throw new Error("Sector Shift: Expected 12 saw " + z); break;
                default:
                    throw new Error("Sector Shift: Expected 9 or 12 saw " + z) }
            R.chk("0600", "Mini Sector Shift: "), R.chk("000000000000", "Reserved: ") }

        function b(R, X) { for (var z = Math.ceil(R.length / X) - 1, G = [], Y = 1; Y < z; ++Y) G[Y - 1] = R.slice(Y * X, (Y + 1) * X); return G[z - 1] = R.slice(z * X), G }

        function A(R, X, z) { for (var G = 0, Y = 0, Z = 0, me = 0, Ae = 0, de = z.length, he = [], xe = []; G < de; ++G) he[G] = xe[G] = G, X[G] = z[G]; for (; Ae < xe.length; ++Ae) G = xe[Ae], Y = R[G].L, Z = R[G].R, me = R[G].C, he[G] === G && (Y !== -1 && he[Y] !== Y && (he[G] = he[Y]), Z !== -1 && he[Z] !== Z && (he[G] = he[Z])), me !== -1 && (he[me] = G), Y !== -1 && G != he[G] && (he[Y] = he[G], xe.lastIndexOf(Y) < Ae && xe.push(Y)), Z !== -1 && G != he[G] && (he[Z] = he[G], xe.lastIndexOf(Z) < Ae && xe.push(Z)); for (G = 1; G < de; ++G) he[G] === G && (Z !== -1 && he[Z] !== Z ? he[G] = he[Z] : Y !== -1 && he[Y] !== Y && (he[G] = he[Y])); for (G = 1; G < de; ++G)
                if (R[G].type !== 0) { if (Ae = G, Ae != he[Ae])
                        do Ae = he[Ae], X[G] = X[Ae] + "/" + X[G]; while (Ae !== 0 && he[Ae] !== -1 && Ae != he[Ae]);
                    he[G] = -1 }
            for (X[0] += "/", G = 1; G < de; ++G) R[G].type !== 2 && (X[G] += "/") }

        function E(R, X, z) { for (var G = R.start, Y = R.size, Z = [], me = G; z && Y > 0 && me >= 0;) Z.push(X.slice(me * H, me * H + H)), Y -= H, me = Ni(z, me * 4); return Z.length === 0 ? ve(0) : mr(Z).slice(0, R.size) }

        function w(R, X, z, G, Y) { var Z = W; if (R === W) { if (X !== 0) throw new Error("DIFAT chain shorter than expected") } else if (R !== -1) { var me = z[R],
                    Ae = (G >>> 2) - 1; if (!me) return; for (var de = 0; de < Ae && (Z = Ni(me, de * 4)) !== W; ++de) Y.push(Z);
                w(Ni(me, G - 4), X - 1, z, G, Y) } }

        function S(R, X, z, G, Y) { var Z = [],
                me = [];
            Y || (Y = []); var Ae = G - 1,
                de = 0,
                he = 0; for (de = X; de >= 0;) { Y[de] = !0, Z[Z.length] = de, me.push(R[de]); var xe = z[Math.floor(de * 4 / G)]; if (he = de * 4 & Ae, G < 4 + he) throw new Error("FAT boundary crossed: " + de + " 4 " + G); if (!R[xe]) break;
                de = Ni(R[xe], he) } return { nodes: Z, data: yp([me]) } }

        function O(R, X, z, G) { var Y = R.length,
                Z = [],
                me = [],
                Ae = [],
                de = [],
                he = G - 1,
                xe = 0,
                De = 0,
                je = 0,
                Me = 0; for (xe = 0; xe < Y; ++xe)
                if (Ae = [], je = xe + X, je >= Y && (je -= Y), !me[je]) { de = []; var Re = []; for (De = je; De >= 0;) { Re[De] = !0, me[De] = !0, Ae[Ae.length] = De, de.push(R[De]); var Fe = z[Math.floor(De * 4 / G)]; if (Me = De * 4 & he, G < 4 + Me) throw new Error("FAT boundary crossed: " + De + " 4 " + G); if (!R[Fe] || (De = Ni(R[Fe], Me), Re[De])) break }
                    Z[je] = { nodes: Ae, data: yp([de]) } }
            return Z }

        function D(R, X, z, G, Y, Z, me, Ae) { for (var de = 0, he = G.length ? 2 : 0, xe = X[R].data, De = 0, je = 0, Me; De < xe.length; De += 128) { var Re = xe.slice(De, De + 128);
                Zr(Re, 64), je = Re.read_shift(2), Me = Md(Re, 0, je - he), G.push(Me); var Fe = { name: Me, type: Re.read_shift(1), color: Re.read_shift(1), L: Re.read_shift(4, "i"), R: Re.read_shift(4, "i"), C: Re.read_shift(4, "i"), clsid: Re.read_shift(16), state: Re.read_shift(4, "i"), start: 0, size: 0 },
                    Qe = Re.read_shift(2) + Re.read_shift(2) + Re.read_shift(2) + Re.read_shift(2);
                Qe !== 0 && (Fe.ct = F(Re, Re.l - 8)); var Nt = Re.read_shift(2) + Re.read_shift(2) + Re.read_shift(2) + Re.read_shift(2);
                Nt !== 0 && (Fe.mt = F(Re, Re.l - 8)), Fe.start = Re.read_shift(4, "i"), Fe.size = Re.read_shift(4, "i"), Fe.size < 0 && Fe.start < 0 && (Fe.size = Fe.type = 0, Fe.start = W, Fe.name = ""), Fe.type === 5 ? (de = Fe.start, Y > 0 && de !== W && (X[de].name = "!StreamData")) : Fe.size >= 4096 ? (Fe.storage = "fat", X[Fe.start] === void 0 && (X[Fe.start] = S(z, Fe.start, X.fat_addrs, X.ssz)), X[Fe.start].name = Fe.name, Fe.content = X[Fe.start].data.slice(0, Fe.size)) : (Fe.storage = "minifat", Fe.size < 0 ? Fe.size = 0 : de !== W && Fe.start !== W && X[de] && (Fe.content = E(Fe, X[de].data, (X[Ae] || {}).data))), Fe.content && Zr(Fe.content, 0), Z[Me] = Fe, me.push(Fe) } }

        function F(R, X) { return new Date((Jr(R, X + 4) / 1e7 * Math.pow(2, 32) + Jr(R, X) / 1e7 - 11644473600) * 1e3) }

        function K(R, X) { return x(), m(p.readFileSync(R), X) }

        function I(R, X) { var z = X && X.type; switch (z || xt && Buffer.isBuffer(R) && (z = "buffer"), z || "base64") {
                case "file":
                    return K(R, X);
                case "base64":
                    return m(Ra(gn(R)), X);
                case "binary":
                    return m(Ra(R), X) } return m(R, X) }

        function V(R, X) { var z = X || {},
                G = z.root || "Root Entry"; if (R.FullPaths || (R.FullPaths = []), R.FileIndex || (R.FileIndex = []), R.FullPaths.length !== R.FileIndex.length) throw new Error("inconsistent CFB structure");
            R.FullPaths.length === 0 && (R.FullPaths[0] = G + "/", R.FileIndex[0] = { name: G, type: 5 }), z.CLSID && (R.FileIndex[0].clsid = z.CLSID), N(R) }

        function N(R) { var X = "Sh33tJ5"; if (!_t.find(R, "/" + X)) { var z = ve(4);
                z[0] = 55, z[1] = z[3] = 50, z[2] = 54, R.FileIndex.push({ name: X, type: 2, content: z, size: 4, L: 69, R: 69, C: 69 }), R.FullPaths.push(R.FullPaths[0] + X), _(R) } }

        function _(R, X) { V(R); for (var z = !1, G = !1, Y = R.FullPaths.length - 1; Y >= 0; --Y) { var Z = R.FileIndex[Y]; switch (Z.type) {
                    case 0:
                        G ? z = !0 : (R.FileIndex.pop(), R.FullPaths.pop()); break;
                    case 1:
                    case 2:
                    case 5:
                        G = !0, isNaN(Z.R * Z.L * Z.C) && (z = !0), Z.R > -1 && Z.L > -1 && Z.R == Z.L && (z = !0); break;
                    default:
                        z = !0; break } } if (!(!z && !X)) { var me = new Date(1987, 1, 19),
                    Ae = 0,
                    de = Object.create ? Object.create(null) : {},
                    he = []; for (Y = 0; Y < R.FullPaths.length; ++Y) de[R.FullPaths[Y]] = !0, R.FileIndex[Y].type !== 0 && he.push([R.FullPaths[Y], R.FileIndex[Y]]); for (Y = 0; Y < he.length; ++Y) { var xe = i(he[Y][0]);
                    G = de[xe], G || (he.push([xe, { name: l(xe).replace("/", ""), type: 1, clsid: B, ct: me, mt: me, content: null }]), de[xe] = !0) } for (he.sort(function(Me, Re) { return r(Me[0], Re[0]) }), R.FullPaths = [], R.FileIndex = [], Y = 0; Y < he.length; ++Y) R.FullPaths[Y] = he[Y][0], R.FileIndex[Y] = he[Y][1]; for (Y = 0; Y < he.length; ++Y) { var De = R.FileIndex[Y],
                        je = R.FullPaths[Y]; if (De.name = l(je).replace("/", ""), De.L = De.R = De.C = -(De.color = 1), De.size = De.content ? De.content.length : 0, De.start = 0, De.clsid = De.clsid || B, Y === 0) De.C = he.length > 1 ? 1 : -1, De.size = 0, De.type = 5;
                    else if (je.slice(-1) == "/") { for (Ae = Y + 1; Ae < he.length && i(R.FullPaths[Ae]) != je; ++Ae); for (De.C = Ae >= he.length ? -1 : Ae, Ae = Y + 1; Ae < he.length && i(R.FullPaths[Ae]) != i(je); ++Ae);
                        De.R = Ae >= he.length ? -1 : Ae, De.type = 1 } else i(R.FullPaths[Y + 1] || "") == i(je) && (De.R = Y + 1), De.type = 2 } } }

        function U(R, X) { var z = X || {}; if (z.fileType == "mad") return ni(R, z); switch (_(R), z.fileType) {
                case "zip":
                    return Tr(R, z) } var G = function(Me) { for (var Re = 0, Fe = 0, Qe = 0; Qe < Me.FileIndex.length; ++Qe) { var Nt = Me.FileIndex[Qe]; if (Nt.content) { var mt = Nt.content.length;
                            mt > 0 && (mt < 4096 ? Re += mt + 63 >> 6 : Fe += mt + 511 >> 9) } } for (var jt = Me.FullPaths.length + 3 >> 2, Sr = Re + 7 >> 3, ii = Re + 127 >> 7, wn = Sr + Fe + jt + ii, Ma = wn + 127 >> 7, Vl = Ma <= 109 ? 0 : Math.ceil((Ma - 109) / 127); wn + Ma + Vl + 127 >> 7 > Ma;) Vl = ++Ma <= 109 ? 0 : Math.ceil((Ma - 109) / 127); var Br = [1, Vl, Ma, ii, jt, Fe, Re, 0]; return Me.FileIndex[0].size = Re << 6, Br[7] = (Me.FileIndex[0].start = Br[0] + Br[1] + Br[2] + Br[3] + Br[4] + Br[5]) + (Br[6] + 7 >> 3), Br }(R),
                Y = ve(G[7] << 9),
                Z = 0,
                me = 0; { for (Z = 0; Z < 8; ++Z) Y.write_shift(1, re[Z]); for (Z = 0; Z < 8; ++Z) Y.write_shift(2, 0); for (Y.write_shift(2, 62), Y.write_shift(2, 3), Y.write_shift(2, 65534), Y.write_shift(2, 9), Y.write_shift(2, 6), Z = 0; Z < 3; ++Z) Y.write_shift(2, 0); for (Y.write_shift(4, 0), Y.write_shift(4, G[2]), Y.write_shift(4, G[0] + G[1] + G[2] + G[3] - 1), Y.write_shift(4, 0), Y.write_shift(4, 4096), Y.write_shift(4, G[3] ? G[0] + G[1] + G[2] - 1 : W), Y.write_shift(4, G[3]), Y.write_shift(-4, G[1] ? G[0] - 1 : W), Y.write_shift(4, G[1]), Z = 0; Z < 109; ++Z) Y.write_shift(-4, Z < G[2] ? G[1] + Z : -1) } if (G[1])
                for (me = 0; me < G[1]; ++me) { for (; Z < 236 + me * 127; ++Z) Y.write_shift(-4, Z < G[2] ? G[1] + Z : -1);
                    Y.write_shift(-4, me === G[1] - 1 ? W : me + 1) }
            var Ae = function(Me) { for (me += Me; Z < me - 1; ++Z) Y.write_shift(-4, Z + 1);
                Me && (++Z, Y.write_shift(-4, W)) }; for (me = Z = 0, me += G[1]; Z < me; ++Z) Y.write_shift(-4, C.DIFSECT); for (me += G[2]; Z < me; ++Z) Y.write_shift(-4, C.FATSECT);
            Ae(G[3]), Ae(G[4]); for (var de = 0, he = 0, xe = R.FileIndex[0]; de < R.FileIndex.length; ++de) xe = R.FileIndex[de], xe.content && (he = xe.content.length, !(he < 4096) && (xe.start = me, Ae(he + 511 >> 9))); for (Ae(G[6] + 7 >> 3); Y.l & 511;) Y.write_shift(-4, C.ENDOFCHAIN); for (me = Z = 0, de = 0; de < R.FileIndex.length; ++de) xe = R.FileIndex[de], xe.content && (he = xe.content.length, !(!he || he >= 4096) && (xe.start = me, Ae(he + 63 >> 6))); for (; Y.l & 511;) Y.write_shift(-4, C.ENDOFCHAIN); for (Z = 0; Z < G[4] << 2; ++Z) { var De = R.FullPaths[Z]; if (!De || De.length === 0) { for (de = 0; de < 17; ++de) Y.write_shift(4, 0); for (de = 0; de < 3; ++de) Y.write_shift(4, -1); for (de = 0; de < 12; ++de) Y.write_shift(4, 0); continue }
                xe = R.FileIndex[Z], Z === 0 && (xe.start = xe.size ? xe.start - 1 : W); var je = Z === 0 && z.root || xe.name; if (he = 2 * (je.length + 1), Y.write_shift(64, je, "utf16le"), Y.write_shift(2, he), Y.write_shift(1, xe.type), Y.write_shift(1, xe.color), Y.write_shift(-4, xe.L), Y.write_shift(-4, xe.R), Y.write_shift(-4, xe.C), xe.clsid) Y.write_shift(16, xe.clsid, "hex");
                else
                    for (de = 0; de < 4; ++de) Y.write_shift(4, 0);
                Y.write_shift(4, xe.state || 0), Y.write_shift(4, 0), Y.write_shift(4, 0), Y.write_shift(4, 0), Y.write_shift(4, 0), Y.write_shift(4, xe.start), Y.write_shift(4, xe.size), Y.write_shift(4, 0) } for (Z = 1; Z < R.FileIndex.length; ++Z)
                if (xe = R.FileIndex[Z], xe.size >= 4096)
                    if (Y.l = xe.start + 1 << 9, xt && Buffer.isBuffer(xe.content)) xe.content.copy(Y, Y.l, 0, xe.size), Y.l += xe.size + 511 & -512;
                    else { for (de = 0; de < xe.size; ++de) Y.write_shift(1, xe.content[de]); for (; de & 511; ++de) Y.write_shift(1, 0) }
            for (Z = 1; Z < R.FileIndex.length; ++Z)
                if (xe = R.FileIndex[Z], xe.size > 0 && xe.size < 4096)
                    if (xt && Buffer.isBuffer(xe.content)) xe.content.copy(Y, Y.l, 0, xe.size), Y.l += xe.size + 63 & -64;
                    else { for (de = 0; de < xe.size; ++de) Y.write_shift(1, xe.content[de]); for (; de & 63; ++de) Y.write_shift(1, 0) }
            if (xt) Y.l = Y.length;
            else
                for (; Y.l < Y.length;) Y.write_shift(1, 0); return Y }

        function q(R, X) { var z = R.FullPaths.map(function(de) { return de.toUpperCase() }),
                G = z.map(function(de) { var he = de.split("/"); return he[he.length - (de.slice(-1) == "/" ? 2 : 1)] }),
                Y = !1;
            X.charCodeAt(0) === 47 ? (Y = !0, X = z[0].slice(0, -1) + X) : Y = X.indexOf("/") !== -1; var Z = X.toUpperCase(),
                me = Y === !0 ? z.indexOf(Z) : G.indexOf(Z); if (me !== -1) return R.FileIndex[me]; var Ae = !Z.match(Dc); for (Z = Z.replace(Vs, ""), Ae && (Z = Z.replace(Dc, "!")), me = 0; me < z.length; ++me)
                if ((Ae ? z[me].replace(Dc, "!") : z[me]).replace(Vs, "") == Z || (Ae ? G[me].replace(Dc, "!") : G[me]).replace(Vs, "") == Z) return R.FileIndex[me];
            return null } var H = 64,
            W = -2,
            ee = "d0cf11e0a1b11ae1",
            re = [208, 207, 17, 224, 161, 177, 26, 225],
            B = "00000000000000000000000000000000",
            C = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: W, FREESECT: -1, HEADER_SIGNATURE: ee, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: B, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };

        function se(R, X, z) { x(); var G = U(R, z);
            p.writeFileSync(X, G) }

        function te(R) { for (var X = new Array(R.length), z = 0; z < R.length; ++z) X[z] = String.fromCharCode(R[z]); return X.join("") }

        function j(R, X) { var z = U(R, X); switch (X && X.type || "buffer") {
                case "file":
                    return x(), p.writeFileSync(X.filename, z), z;
                case "binary":
                    return typeof z == "string" ? z : te(z);
                case "base64":
                    return to(typeof z == "string" ? z : te(z));
                case "buffer":
                    if (xt) return Buffer.isBuffer(z) ? z : bn(z);
                case "array":
                    return typeof z == "string" ? Ra(z) : z } return z } var ce;

        function k(R) { try { var X = R.InflateRaw,
                    z = new X; if (z._processChunk(new Uint8Array([3, 0]), z._finishFlushFlag), z.bytesRead) ce = R;
                else throw new Error("zlib does not expose bytesRead") } catch (G) { console.error("cannot use native zlib: " + (G.message || G)) } }

        function Q(R, X) { if (!ce) return An(R, X); var z = ce.InflateRaw,
                G = new z,
                Y = G._processChunk(R.slice(R.l), G._finishFlushFlag); return R.l += G.bytesRead, Y }

        function L(R) { return ce ? ce.deflateRawSync(R) : Rt(R) } var M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            ie = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258],
            _e = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];

        function we(R) { var X = (R << 1 | R << 11) & 139536 | (R << 5 | R << 15) & 558144; return (X >> 16 | X >> 8 | X) & 255 } for (var Te = typeof Uint8Array < "u", ye = Te ? new Uint8Array(256) : [], Pe = 0; Pe < 256; ++Pe) ye[Pe] = we(Pe);

        function ze(R, X) { var z = ye[R & 255]; return X <= 8 ? z >>> 8 - X : (z = z << 8 | ye[R >> 8 & 255], X <= 16 ? z >>> 16 - X : (z = z << 8 | ye[R >> 16 & 255], z >>> 24 - X)) }

        function st(R, X) { var z = X & 7,
                G = X >>> 3; return (R[G] | (z <= 6 ? 0 : R[G + 1] << 8)) >>> z & 3 }

        function Ye(R, X) { var z = X & 7,
                G = X >>> 3; return (R[G] | (z <= 5 ? 0 : R[G + 1] << 8)) >>> z & 7 }

        function tt(R, X) { var z = X & 7,
                G = X >>> 3; return (R[G] | (z <= 4 ? 0 : R[G + 1] << 8)) >>> z & 15 }

        function We(R, X) { var z = X & 7,
                G = X >>> 3; return (R[G] | (z <= 3 ? 0 : R[G + 1] << 8)) >>> z & 31 }

        function Oe(R, X) { var z = X & 7,
                G = X >>> 3; return (R[G] | (z <= 1 ? 0 : R[G + 1] << 8)) >>> z & 127 }

        function Ke(R, X, z) { var G = X & 7,
                Y = X >>> 3,
                Z = (1 << z) - 1,
                me = R[Y] >>> G; return z < 8 - G || (me |= R[Y + 1] << 8 - G, z < 16 - G) || (me |= R[Y + 2] << 16 - G, z < 24 - G) || (me |= R[Y + 3] << 24 - G), me & Z }

        function ot(R, X, z) { var G = X & 7,
                Y = X >>> 3; return G <= 5 ? R[Y] |= (z & 7) << G : (R[Y] |= z << G & 255, R[Y + 1] = (z & 7) >> 8 - G), X + 3 }

        function pt(R, X, z) { var G = X & 7,
                Y = X >>> 3; return z = (z & 1) << G, R[Y] |= z, X + 1 }

        function ct(R, X, z) { var G = X & 7,
                Y = X >>> 3; return z <<= G, R[Y] |= z & 255, z >>>= 8, R[Y + 1] = z, X + 8 }

        function It(R, X, z) { var G = X & 7,
                Y = X >>> 3; return z <<= G, R[Y] |= z & 255, z >>>= 8, R[Y + 1] = z & 255, R[Y + 2] = z >>> 8, X + 16 }

        function gt(R, X) { var z = R.length,
                G = 2 * z > X ? 2 * z : X + 5,
                Y = 0; if (z >= X) return R; if (xt) { var Z = np(G); if (R.copy) R.copy(Z);
                else
                    for (; Y < R.length; ++Y) Z[Y] = R[Y]; return Z } else if (Te) { var me = new Uint8Array(G); if (me.set) me.set(R);
                else
                    for (; Y < z; ++Y) me[Y] = R[Y]; return me } return R.length = G, R }

        function ae(R) { for (var X = new Array(R), z = 0; z < R; ++z) X[z] = 0; return X }

        function Le(R, X, z) { var G = 1,
                Y = 0,
                Z = 0,
                me = 0,
                Ae = 0,
                de = R.length,
                he = Te ? new Uint16Array(32) : ae(32); for (Z = 0; Z < 32; ++Z) he[Z] = 0; for (Z = de; Z < z; ++Z) R[Z] = 0;
            de = R.length; var xe = Te ? new Uint16Array(de) : ae(de); for (Z = 0; Z < de; ++Z) he[Y = R[Z]]++, G < Y && (G = Y), xe[Z] = 0; for (he[0] = 0, Z = 1; Z <= G; ++Z) he[Z + 16] = Ae = Ae + he[Z - 1] << 1; for (Z = 0; Z < de; ++Z) Ae = R[Z], Ae != 0 && (xe[Z] = he[Ae + 16]++); var De = 0; for (Z = 0; Z < de; ++Z)
                if (De = R[Z], De != 0)
                    for (Ae = ze(xe[Z], G) >> G - De, me = (1 << G + 4 - De) - 1; me >= 0; --me) X[Ae | me << De] = De & 15 | Z << 4;
            return G } var Ie = Te ? new Uint16Array(512) : ae(512),
            Ot = Te ? new Uint16Array(32) : ae(32); if (!Te) { for (var it = 0; it < 512; ++it) Ie[it] = 0; for (it = 0; it < 32; ++it) Ot[it] = 0 }(function() { for (var R = [], X = 0; X < 32; X++) R.push(5);
            Le(R, Ot, 32); var z = []; for (X = 0; X <= 143; X++) z.push(8); for (; X <= 255; X++) z.push(9); for (; X <= 279; X++) z.push(7); for (; X <= 287; X++) z.push(8);
            Le(z, Ie, 288) })(); var Hr = function() { for (var X = Te ? new Uint8Array(32768) : [], z = 0, G = 0; z < _e.length - 1; ++z)
                for (; G < _e[z + 1]; ++G) X[G] = z; for (; G < 32768; ++G) X[G] = 29; var Y = Te ? new Uint8Array(259) : []; for (z = 0, G = 0; z < ie.length - 1; ++z)
                for (; G < ie[z + 1]; ++G) Y[G] = z;

            function Z(Ae, de) { for (var he = 0; he < Ae.length;) { var xe = Math.min(65535, Ae.length - he),
                        De = he + xe == Ae.length; for (de.write_shift(1, +De), de.write_shift(2, xe), de.write_shift(2, ~xe & 65535); xe-- > 0;) de[de.l++] = Ae[he++] } return de.l }

            function me(Ae, de) { for (var he = 0, xe = 0, De = Te ? new Uint16Array(32768) : []; xe < Ae.length;) { var je = Math.min(65535, Ae.length - xe); if (je < 10) { for (he = ot(de, he, +(xe + je == Ae.length)), he & 7 && (he += 8 - (he & 7)), de.l = he / 8 | 0, de.write_shift(2, je), de.write_shift(2, ~je & 65535); je-- > 0;) de[de.l++] = Ae[xe++];
                        he = de.l * 8; continue }
                    he = ot(de, he, +(xe + je == Ae.length) + 2); for (var Me = 0; je-- > 0;) { var Re = Ae[xe];
                        Me = (Me << 5 ^ Re) & 32767; var Fe = -1,
                            Qe = 0; if ((Fe = De[Me]) && (Fe |= xe & -32768, Fe > xe && (Fe -= 32768), Fe < xe))
                            for (; Ae[Fe + Qe] == Ae[xe + Qe] && Qe < 250;) ++Qe; if (Qe > 2) { Re = Y[Qe], Re <= 22 ? he = ct(de, he, ye[Re + 1] >> 1) - 1 : (ct(de, he, 3), he += 5, ct(de, he, ye[Re - 23] >> 5), he += 3); var Nt = Re < 8 ? 0 : Re - 4 >> 2;
                            Nt > 0 && (It(de, he, Qe - ie[Re]), he += Nt), Re = X[xe - Fe], he = ct(de, he, ye[Re] >> 3), he -= 3; var mt = Re < 4 ? 0 : Re - 2 >> 1;
                            mt > 0 && (It(de, he, xe - Fe - _e[Re]), he += mt); for (var jt = 0; jt < Qe; ++jt) De[Me] = xe & 32767, Me = (Me << 5 ^ Ae[xe]) & 32767, ++xe;
                            je -= Qe - 1 } else Re <= 143 ? Re = Re + 48 : he = pt(de, he, 1), he = ct(de, he, ye[Re]), De[Me] = xe & 32767, ++xe }
                    he = ct(de, he, 0) - 1 } return de.l = (he + 7) / 8 | 0, de.l } return function(de, he) { return de.length < 8 ? Z(de, he) : me(de, he) } }();

        function Rt(R) { var X = ve(50 + Math.floor(R.length * 1.1)),
                z = Hr(R, X); return X.slice(0, z) } var vr = Te ? new Uint16Array(32768) : ae(32768),
            sr = Te ? new Uint16Array(32768) : ae(32768),
            er = Te ? new Uint16Array(128) : ae(128),
            Tt = 1,
            na = 1;

        function jr(R, X) { var z = We(R, X) + 257;
            X += 5; var G = We(R, X) + 1;
            X += 5; var Y = tt(R, X) + 4;
            X += 4; for (var Z = 0, me = Te ? new Uint8Array(19) : ae(19), Ae = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], de = 1, he = Te ? new Uint8Array(8) : ae(8), xe = Te ? new Uint8Array(8) : ae(8), De = me.length, je = 0; je < Y; ++je) me[M[je]] = Z = Ye(R, X), de < Z && (de = Z), he[Z]++, X += 3; var Me = 0; for (he[0] = 0, je = 1; je <= de; ++je) xe[je] = Me = Me + he[je - 1] << 1; for (je = 0; je < De; ++je)(Me = me[je]) != 0 && (Ae[je] = xe[Me]++); var Re = 0; for (je = 0; je < De; ++je)
                if (Re = me[je], Re != 0) { Me = ye[Ae[je]] >> 8 - Re; for (var Fe = (1 << 7 - Re) - 1; Fe >= 0; --Fe) er[Me | Fe << Re] = Re & 7 | je << 3 }
            var Qe = []; for (de = 1; Qe.length < z + G;) switch (Me = er[Oe(R, X)], X += Me & 7, Me >>>= 3) {
                case 16:
                    for (Z = 3 + st(R, X), X += 2, Me = Qe[Qe.length - 1]; Z-- > 0;) Qe.push(Me); break;
                case 17:
                    for (Z = 3 + Ye(R, X), X += 3; Z-- > 0;) Qe.push(0); break;
                case 18:
                    for (Z = 11 + Oe(R, X), X += 7; Z-- > 0;) Qe.push(0); break;
                default:
                    Qe.push(Me), de < Me && (de = Me); break }
            var Nt = Qe.slice(0, z),
                mt = Qe.slice(z); for (je = z; je < 286; ++je) Nt[je] = 0; for (je = G; je < 30; ++je) mt[je] = 0; return Tt = Le(Nt, vr, 286), na = Le(mt, sr, 30), X }

        function or(R, X) { if (R[0] == 3 && !(R[1] & 3)) return [Mi(X), 2]; for (var z = 0, G = 0, Y = np(X || 1 << 18), Z = 0, me = Y.length >>> 0, Ae = 0, de = 0;
                (G & 1) == 0;) { if (G = Ye(R, z), z += 3, G >>> 1) G >> 1 == 1 ? (Ae = 9, de = 5) : (z = jr(R, z), Ae = Tt, de = na);
                else { z & 7 && (z += 8 - (z & 7)); var he = R[z >>> 3] | R[(z >>> 3) + 1] << 8; if (z += 32, he > 0)
                        for (!X && me < Z + he && (Y = gt(Y, Z + he), me = Y.length); he-- > 0;) Y[Z++] = R[z >>> 3], z += 8; continue } for (;;) {!X && me < Z + 32767 && (Y = gt(Y, Z + 32767), me = Y.length); var xe = Ke(R, z, Ae),
                        De = G >>> 1 == 1 ? Ie[xe] : vr[xe]; if (z += De & 15, De >>>= 4, (De >>> 8 & 255) === 0) Y[Z++] = De;
                    else { if (De == 256) break;
                        De -= 257; var je = De < 8 ? 0 : De - 4 >> 2;
                        je > 5 && (je = 0); var Me = Z + ie[De];
                        je > 0 && (Me += Ke(R, z, je), z += je), xe = Ke(R, z, de), De = G >>> 1 == 1 ? Ot[xe] : sr[xe], z += De & 15, De >>>= 4; var Re = De < 4 ? 0 : De - 2 >> 1,
                            Fe = _e[De]; for (Re > 0 && (Fe += Ke(R, z, Re), z += Re), !X && me < Me && (Y = gt(Y, Me + 100), me = Y.length); Z < Me;) Y[Z] = Y[Z - Fe], ++Z } } } return X ? [Y, z + 7 >>> 3] : [Y.slice(0, Z), z + 7 >>> 3] }

        function An(R, X) { var z = R.slice(R.l || 0),
                G = or(z, X); return R.l += G[1], G[0] }

        function ai(R, X) { if (R) typeof console < "u" && console.error(X);
            else throw new Error(X) }

        function ka(R, X) { var z = R;
            Zr(z, 0); var G = [],
                Y = [],
                Z = { FileIndex: G, FullPaths: Y };
            V(Z, { root: X.root }); for (var me = z.length - 4;
                (z[me] != 80 || z[me + 1] != 75 || z[me + 2] != 5 || z[me + 3] != 6) && me >= 0;) --me;
            z.l = me + 4, z.l += 4; var Ae = z.read_shift(2);
            z.l += 6; var de = z.read_shift(4); for (z.l = de, me = 0; me < Ae; ++me) { z.l += 20; var he = z.read_shift(4),
                    xe = z.read_shift(4),
                    De = z.read_shift(2),
                    je = z.read_shift(2),
                    Me = z.read_shift(2);
                z.l += 8; var Re = z.read_shift(4),
                    Fe = f(z.slice(z.l + De, z.l + De + je));
                z.l += De + je + Me; var Qe = z.l;
                z.l = Re + 4, En(z, he, xe, Z, Fe), z.l = Qe } return Z }

        function En(R, X, z, G, Y) { R.l += 2; var Z = R.read_shift(2),
                me = R.read_shift(2),
                Ae = c(R); if (Z & 8257) throw new Error("Unsupported ZIP encryption"); for (var de = R.read_shift(4), he = R.read_shift(4), xe = R.read_shift(4), De = R.read_shift(2), je = R.read_shift(2), Me = "", Re = 0; Re < De; ++Re) Me += String.fromCharCode(R[R.l++]); if (je) { var Fe = f(R.slice(R.l, R.l + je));
                (Fe[21589] || {}).mt && (Ae = Fe[21589].mt), ((Y || {})[21589] || {}).mt && (Ae = Y[21589].mt) }
            R.l += je; var Qe = R.slice(R.l, R.l + he); switch (me) {
                case 8:
                    Qe = Q(R, xe); break;
                case 0:
                    break;
                default:
                    throw new Error("Unsupported ZIP Compression method " + me) } var Nt = !1;
            Z & 8 && (de = R.read_shift(4), de == 134695760 && (de = R.read_shift(4), Nt = !0), he = R.read_shift(4), xe = R.read_shift(4)), he != X && ai(Nt, "Bad compressed size: " + X + " != " + he), xe != z && ai(Nt, "Bad uncompressed size: " + z + " != " + xe), Xi(G, Me, Qe, { unsafe: !0, mt: Ae }) }

        function Tr(R, X) { var z = X || {},
                G = [],
                Y = [],
                Z = ve(1),
                me = z.compression ? 8 : 0,
                Ae = 0,
                de = 0,
                he = 0,
                xe = 0,
                De = 0,
                je = R.FullPaths[0],
                Me = je,
                Re = R.FileIndex[0],
                Fe = [],
                Qe = 0; for (de = 1; de < R.FullPaths.length; ++de)
                if (Me = R.FullPaths[de].slice(je.length), Re = R.FileIndex[de], !(!Re.size || !Re.content || Me == "Sh33tJ5")) { var Nt = xe,
                        mt = ve(Me.length); for (he = 0; he < Me.length; ++he) mt.write_shift(1, Me.charCodeAt(he) & 127);
                    mt = mt.slice(0, mt.l), Fe[De] = Ow.buf(Re.content, 0); var jt = Re.content;
                    me == 8 && (jt = L(jt)), Z = ve(30), Z.write_shift(4, 67324752), Z.write_shift(2, 20), Z.write_shift(2, Ae), Z.write_shift(2, me), Re.mt ? o(Z, Re.mt) : Z.write_shift(4, 0), Z.write_shift(-4, Fe[De]), Z.write_shift(4, jt.length), Z.write_shift(4, Re.content.length), Z.write_shift(2, mt.length), Z.write_shift(2, 0), xe += Z.length, G.push(Z), xe += mt.length, G.push(mt), xe += jt.length, G.push(jt), Z = ve(46), Z.write_shift(4, 33639248), Z.write_shift(2, 0), Z.write_shift(2, 20), Z.write_shift(2, Ae), Z.write_shift(2, me), Z.write_shift(4, 0), Z.write_shift(-4, Fe[De]), Z.write_shift(4, jt.length), Z.write_shift(4, Re.content.length), Z.write_shift(2, mt.length), Z.write_shift(2, 0), Z.write_shift(2, 0), Z.write_shift(2, 0), Z.write_shift(2, 0), Z.write_shift(4, 0), Z.write_shift(4, Nt), Qe += Z.l, Y.push(Z), Qe += mt.length, Y.push(mt), ++De }
            return Z = ve(22), Z.write_shift(4, 101010256), Z.write_shift(2, 0), Z.write_shift(2, 0), Z.write_shift(2, De), Z.write_shift(2, De), Z.write_shift(4, Qe), Z.write_shift(4, xe), Z.write_shift(2, 0), mr([mr(G), mr(Y), Z]) } var Ht = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };

        function Gr(R, X) { if (R.ctype) return R.ctype; var z = R.name || "",
                G = z.match(/\.([^\.]+)$/); return G && Ht[G[1]] || X && (G = (z = X).match(/[\.\\]([^\.\\])+$/), G && Ht[G[1]]) ? Ht[G[1]] : "application/octet-stream" }

        function Vr(R) { for (var X = to(R), z = [], G = 0; G < X.length; G += 76) z.push(X.slice(G, G + 76)); return z.join(`\r
`) + `\r
` }

        function qi(R) { var X = R.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(he) { var xe = he.charCodeAt(0).toString(16).toUpperCase(); return "=" + (xe.length == 1 ? "0" + xe : xe) });
            X = X.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), X.charAt(0) == `
` && (X = "=0D" + X.slice(1)), X = X.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A"); for (var z = [], G = X.split(`\r
`), Y = 0; Y < G.length; ++Y) { var Z = G[Y]; if (Z.length == 0) { z.push(""); continue } for (var me = 0; me < Z.length;) { var Ae = 76,
                        de = Z.slice(me, me + Ae);
                    de.charAt(Ae - 1) == "=" ? Ae-- : de.charAt(Ae - 2) == "=" ? Ae -= 2 : de.charAt(Ae - 3) == "=" && (Ae -= 3), de = Z.slice(me, me + Ae), me += Ae, me < Z.length && (de += "="), z.push(de) } } return z.join(`\r
`) }

        function ia(R) { for (var X = [], z = 0; z < R.length; ++z) { for (var G = R[z]; z <= R.length && G.charAt(G.length - 1) == "=";) G = G.slice(0, G.length - 1) + R[++z];
                X.push(G) } for (var Y = 0; Y < X.length; ++Y) X[Y] = X[Y].replace(/[=][0-9A-Fa-f]{2}/g, function(Z) { return String.fromCharCode(parseInt(Z.slice(1), 16)) }); return Ra(X.join(`\r
`)) }

        function la(R, X, z) { for (var G = "", Y = "", Z = "", me, Ae = 0; Ae < 10; ++Ae) { var de = X[Ae]; if (!de || de.match(/^\s*$/)) break; var he = de.match(/^(.*?):\s*([^\s].*)$/); if (he) switch (he[1].toLowerCase()) {
                    case "content-location":
                        G = he[2].trim(); break;
                    case "content-type":
                        Z = he[2].trim(); break;
                    case "content-transfer-encoding":
                        Y = he[2].trim(); break } } switch (++Ae, Y.toLowerCase()) {
                case "base64":
                    me = Ra(gn(X.slice(Ae).join(""))); break;
                case "quoted-printable":
                    me = ia(X.slice(Ae)); break;
                default:
                    throw new Error("Unsupported Content-Transfer-Encoding " + Y) } var xe = Xi(R, G.slice(z.length), me, { unsafe: !0 });
            Z && (xe.ctype = Z) }

        function Gl(R, X) { if (te(R.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header"); var z = X && X.root || "",
                G = (xt && Buffer.isBuffer(R) ? R.toString("binary") : te(R)).split(`\r
`),
                Y = 0,
                Z = ""; for (Y = 0; Y < G.length; ++Y)
                if (Z = G[Y], !!/^Content-Location:/i.test(Z) && (Z = Z.slice(Z.indexOf("file")), z || (z = Z.slice(0, Z.lastIndexOf("/") + 1)), Z.slice(0, z.length) != z))
                    for (; z.length > 0 && (z = z.slice(0, z.length - 1), z = z.slice(0, z.lastIndexOf("/") + 1), Z.slice(0, z.length) != z););
            var me = (G[1] || "").match(/boundary="(.*?)"/); if (!me) throw new Error("MAD cannot find boundary"); var Ae = "--" + (me[1] || ""),
                de = [],
                he = [],
                xe = { FileIndex: de, FullPaths: he };
            V(xe); var De, je = 0; for (Y = 0; Y < G.length; ++Y) { var Me = G[Y];
                Me !== Ae && Me !== Ae + "--" || (je++ && la(xe, G.slice(De, Y), z), De = Y) } return xe }

        function ni(R, X) { var z = X || {},
                G = z.boundary || "SheetJS";
            G = "------=" + G; for (var Y = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + G.slice(2) + '"', "", "", ""], Z = R.FullPaths[0], me = Z, Ae = R.FileIndex[0], de = 1; de < R.FullPaths.length; ++de)
                if (me = R.FullPaths[de].slice(Z.length), Ae = R.FileIndex[de], !(!Ae.size || !Ae.content || me == "Sh33tJ5")) { me = me.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(Qe) { return "_x" + Qe.charCodeAt(0).toString(16) + "_" }).replace(/[\u0080-\uFFFF]/g, function(Qe) { return "_u" + Qe.charCodeAt(0).toString(16) + "_" }); for (var he = Ae.content, xe = xt && Buffer.isBuffer(he) ? he.toString("binary") : te(he), De = 0, je = Math.min(1024, xe.length), Me = 0, Re = 0; Re <= je; ++Re)(Me = xe.charCodeAt(Re)) >= 32 && Me < 128 && ++De; var Fe = De >= je * 4 / 5;
                    Y.push(G), Y.push("Content-Location: " + (z.root || "file:///C:/SheetJS/") + me), Y.push("Content-Transfer-Encoding: " + (Fe ? "quoted-printable" : "base64")), Y.push("Content-Type: " + Gr(Ae, me)), Y.push(""), Y.push(Fe ? qi(xe) : Vr(xe)) }
            return Y.push(G + `--\r
`), Y.join(`\r
`) }

        function Ou(R) { var X = {}; return V(X, R), X }

        function Xi(R, X, z, G) { var Y = G && G.unsafe;
            Y || V(R); var Z = !Y && _t.find(R, X); if (!Z) { var me = R.FullPaths[0];
                X.slice(0, me.length) == me ? me = X : (me.slice(-1) != "/" && (me += "/"), me = (me + X).replace("//", "/")), Z = { name: l(X), type: 2 }, R.FileIndex.push(Z), R.FullPaths.push(me), Y || _t.utils.cfb_gc(R) } return Z.content = z, Z.size = z ? z.length : 0, G && (G.CLSID && (Z.clsid = G.CLSID), G.mt && (Z.mt = G.mt), G.ct && (Z.ct = G.ct)), Z }

        function vo(R, X) { V(R); var z = _t.find(R, X); if (z) { for (var G = 0; G < R.FileIndex.length; ++G)
                    if (R.FileIndex[G] == z) return R.FileIndex.splice(G, 1), R.FullPaths.splice(G, 1), !0 } return !1 }

        function yo(R, X, z) { V(R); var G = _t.find(R, X); if (G) { for (var Y = 0; Y < R.FileIndex.length; ++Y)
                    if (R.FileIndex[Y] == G) return R.FileIndex[Y].name = l(z), R.FullPaths[Y] = z, !0 } return !1 }

        function bo(R) { _(R, !0) } return t.find = q, t.read = I, t.parse = m, t.write = j, t.writeFile = se, t.utils = { cfb_new: Ou, cfb_add: Xi, cfb_del: vo, cfb_mov: yo, cfb_gc: bo, ReadShift: Xs, CheckField: xg, prep_blob: Zr, bconcat: mr, use_zlib: k, _deflateRaw: Rt, _inflateRaw: An, consts: C }, t }();

function Rw(e) { return typeof e == "string" ? Au(e) : Array.isArray(e) ? aw(e) : e }

function ho(e, t, r) { if (typeof Deno < "u") { if (r && typeof t == "string") switch (r) {
            case "utf8":
                t = new TextEncoder(r).encode(t); break;
            case "binary":
                t = Au(t); break;
            default:
                throw new Error("Unsupported encoding " + r) }
        return Deno.writeFileSync(e, t) } var i = r == "utf8" ? ao(t) : t; if (typeof IE_SaveFile < "u") return IE_SaveFile(i, e); if (typeof Blob < "u") { var l = new Blob([Rw(i)], { type: "application/octet-stream" }); if (typeof navigator < "u" && navigator.msSaveBlob) return navigator.msSaveBlob(l, e); if (typeof saveAs < "u") return saveAs(l, e); if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) { var o = URL.createObjectURL(l); if (typeof chrome == "object" && typeof(chrome.downloads || {}).download == "function") return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() { URL.revokeObjectURL(o) }, 6e4), chrome.downloads.download({ url: o, filename: e, saveAs: !0 }); var c = document.createElement("a"); if (c.download != null) return c.download = e, c.href = o, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() { URL.revokeObjectURL(o) }, 6e4), o } } if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try { var f = File(e); return f.open("w"), f.encoding = "binary", Array.isArray(t) && (t = fo(t)), f.write(t), f.close(), t } catch (p) { if (!p.message || !p.message.match(/onstruct/)) throw p }
    throw new Error("cannot save file " + e) }

function gr(e) { for (var t = Object.keys(e), r = [], i = 0; i < t.length; ++i) Object.prototype.hasOwnProperty.call(e, t[i]) && r.push(t[i]); return r }

function dp(e, t) { for (var r = [], i = gr(e), l = 0; l !== i.length; ++l) r[e[i[l]][t]] == null && (r[e[i[l]][t]] = i[l]); return r }

function Fd(e) { for (var t = [], r = gr(e), i = 0; i !== r.length; ++i) t[e[r[i]]] = r[i]; return t }

function _u(e) { for (var t = [], r = gr(e), i = 0; i !== r.length; ++i) t[e[r[i]]] = parseInt(r[i], 10); return t }

function Fw(e) { for (var t = [], r = gr(e), i = 0; i !== r.length; ++i) t[e[r[i]]] == null && (t[e[r[i]]] = []), t[e[r[i]]].push(r[i]); return t }
var Jc = new Date(1899, 11, 30, 0, 0, 0);

function zr(e, t) { var r = e.getTime(),
        i = Jc.getTime() + (e.getTimezoneOffset() - Jc.getTimezoneOffset()) * 6e4; return (r - i) / (24 * 60 * 60 * 1e3) }
var $2 = new Date,
    jw = Jc.getTime() + ($2.getTimezoneOffset() - Jc.getTimezoneOffset()) * 6e4,
    hp = $2.getTimezoneOffset();

function J2(e) { var t = new Date; return t.setTime(e * 24 * 60 * 60 * 1e3 + jw), t.getTimezoneOffset() !== hp && t.setTime(t.getTime() + (t.getTimezoneOffset() - hp) * 6e4), t }
var mp = new Date("2017-02-19T19:06:09.000Z"),
    eg = isNaN(mp.getFullYear()) ? new Date("2/19/17") : mp,
    Bw = eg.getFullYear() == 2017;

function Fr(e, t) { var r = new Date(e); if (Bw) return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r; if (e instanceof Date) return e; if (eg.getFullYear() == 1917 && !isNaN(r.getFullYear())) { var i = r.getFullYear(); return e.indexOf("" + i) > -1 || r.setFullYear(r.getFullYear() + 100), r } var l = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
        o = new Date(+l[0], +l[1] - 1, +l[2], +l[3] || 0, +l[4] || 0, +l[5] || 0); return e.indexOf("Z") > -1 && (o = new Date(o.getTime() - o.getTimezoneOffset() * 60 * 1e3)), o }

function Tu(e, t) { if (xt && Buffer.isBuffer(e)) return e.toString("binary"); if (typeof TextDecoder < "u") try { var r = { "€": "", "‚": "", ƒ: "", "„": "", "…": "", "†": "", "‡": "", "ˆ": "", "‰": "", Š: "", "‹": "", Œ: "", Ž: "", "‘": "", "’": "", "“": "", "”": "", "•": "", "–": "", "—": "", "˜": "", "™": "", š: "", "›": "", œ: "", ž: "", Ÿ: "" }; return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(o) { return r[o] || o }) } catch {}
    for (var i = [], l = 0; l != e.length; ++l) i.push(String.fromCharCode(e[l])); return i.join("") }

function Ir(e) { if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e)); if (typeof e != "object" || e == null) return e; if (e instanceof Date) return new Date(e.getTime()); var t = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Ir(e[r])); return t }

function Pt(e, t) { for (var r = ""; r.length < t;) r += e; return r }

function mn(e) { var t = Number(e); if (!isNaN(t)) return isFinite(t) ? t : NaN; if (!/\d/.test(e)) return t; var r = 1,
        i = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() { return r *= 100, "" }); return !isNaN(t = Number(i)) || (i = i.replace(/[(](.*)[)]/, function(l, o) { return r = -r, o }), !isNaN(t = Number(i))) ? t / r : t }
var kw = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function ro(e) { var t = new Date(e),
        r = new Date(NaN),
        i = t.getYear(),
        l = t.getMonth(),
        o = t.getDate(); if (isNaN(o)) return r; var c = e.toLowerCase(); if (c.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) { if (c = c.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), c.length > 3 && kw.indexOf(c) == -1) return r } else if (c.match(/[a-z]/)) return r; return i < 0 || i > 8099 ? r : (l > 0 || o > 1) && i != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t }

function et(e, t, r) { if (e.FullPaths) { if (typeof r == "string") { var i; return xt ? i = bn(r) : i = nw(r), _t.utils.cfb_add(e, t, i) }
        _t.utils.cfb_add(e, t, r) } else e.file(t, r) }

function jd() { return _t.utils.cfb_new() }
var Qt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
    Mw = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" },
    Bd = Fd(Mw),
    kd = /[&<>'"]/g,
    Lw = /[\u0000-\u0008\u000b-\u001f]/g;

function bt(e) { var t = e + ""; return t.replace(kd, function(r) { return Bd[r] }).replace(Lw, function(r) { return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_" }) }

function xp(e) { return bt(e).replace(/ /g, "_x0020_") }
var tg = /[\u0000-\u001f]/g;

function Uw(e) { var t = e + ""; return t.replace(kd, function(r) { return Bd[r] }).replace(/\n/g, "<br/>").replace(tg, function(r) { return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";" }) }

function Pw(e) { var t = e + ""; return t.replace(kd, function(r) { return Bd[r] }).replace(tg, function(r) { return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";" }) }

function zw(e) { return e.replace(/(\r\n|[\r\n])/g, "&#10;") }

function Iw(e) { switch (e) {
        case 1:
        case !0:
        case "1":
        case "true":
        case "TRUE":
            return !0;
        default:
            return !1 } }

function qf(e) { for (var t = "", r = 0, i = 0, l = 0, o = 0, c = 0, f = 0; r < e.length;) { if (i = e.charCodeAt(r++), i < 128) { t += String.fromCharCode(i); continue } if (l = e.charCodeAt(r++), i > 191 && i < 224) { c = (i & 31) << 6, c |= l & 63, t += String.fromCharCode(c); continue } if (o = e.charCodeAt(r++), i < 240) { t += String.fromCharCode((i & 15) << 12 | (l & 63) << 6 | o & 63); continue }
        c = e.charCodeAt(r++), f = ((i & 7) << 18 | (l & 63) << 12 | (o & 63) << 6 | c & 63) - 65536, t += String.fromCharCode(55296 + (f >>> 10 & 1023)), t += String.fromCharCode(56320 + (f & 1023)) } return t }

function pp(e) { var t = Mi(2 * e.length),
        r, i, l = 1,
        o = 0,
        c = 0,
        f; for (i = 0; i < e.length; i += l) l = 1, (f = e.charCodeAt(i)) < 128 ? r = f : f < 224 ? (r = (f & 31) * 64 + (e.charCodeAt(i + 1) & 63), l = 2) : f < 240 ? (r = (f & 15) * 4096 + (e.charCodeAt(i + 1) & 63) * 64 + (e.charCodeAt(i + 2) & 63), l = 3) : (l = 4, r = (f & 7) * 262144 + (e.charCodeAt(i + 1) & 63) * 4096 + (e.charCodeAt(i + 2) & 63) * 64 + (e.charCodeAt(i + 3) & 63), r -= 65536, c = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), c !== 0 && (t[o++] = c & 255, t[o++] = c >>> 8, c = 0), t[o++] = r % 256, t[o++] = r >>> 8; return t.slice(0, o).toString("ucs2") }

function gp(e) { return bn(e, "binary").toString("utf8") }
var Rc = "foo bar bazâð£",
    qs = xt && (gp(Rc) == qf(Rc) && gp || pp(Rc) == qf(Rc) && pp) || qf,
    ao = xt ? function(e) { return bn(e, "utf8").toString("binary") } : function(e) { for (var t = [], r = 0, i = 0, l = 0; r < e.length;) switch (i = e.charCodeAt(r++), !0) {
            case i < 128:
                t.push(String.fromCharCode(i)); break;
            case i < 2048:
                t.push(String.fromCharCode(192 + (i >> 6))), t.push(String.fromCharCode(128 + (i & 63))); break;
            case (i >= 55296 && i < 57344):
                i -= 55296, l = e.charCodeAt(r++) - 56320 + (i << 10), t.push(String.fromCharCode(240 + (l >> 18 & 7))), t.push(String.fromCharCode(144 + (l >> 12 & 63))), t.push(String.fromCharCode(128 + (l >> 6 & 63))), t.push(String.fromCharCode(128 + (l & 63))); break;
            default:
                t.push(String.fromCharCode(224 + (i >> 12))), t.push(String.fromCharCode(128 + (i >> 6 & 63))), t.push(String.fromCharCode(128 + (i & 63))) }
        return t.join("") },
    Hw = function() { var e = [
            ["nbsp", " "],
            ["middot", "·"],
            ["quot", '"'],
            ["apos", "'"],
            ["gt", ">"],
            ["lt", "<"],
            ["amp", "&"]
        ].map(function(t) { return [new RegExp("&" + t[0] + ";", "ig"), t[1]] }); return function(r) { for (var i = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), l = 0; l < e.length; ++l) i = i.replace(e[l][0], e[l][1]); return i } }(),
    rg = /(^\s|\s$|\n)/;

function xr(e, t) { return "<" + e + (t.match(rg) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">" }

function no(e) { return gr(e).map(function(t) { return " " + t + '="' + e[t] + '"' }).join("") }

function Be(e, t, r) { return "<" + e + (r != null ? no(r) : "") + (t != null ? (t.match(rg) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">" }

function pd(e, t) { try { return e.toISOString().replace(/\.\d*/, "") } catch (r) { if (t) throw r } return "" }

function Gw(e, t) { switch (typeof e) {
        case "string":
            var r = Be("vt:lpwstr", bt(e)); return r = r.replace(/&quot;/g, "_x0022_"), r;
        case "number":
            return Be((e | 0) == e ? "vt:i4" : "vt:r8", bt(String(e)));
        case "boolean":
            return Be("vt:bool", e ? "true" : "false") } if (e instanceof Date) return Be("vt:filetime", pd(e)); throw new Error("Unable to serialize " + e) }
var nr = { CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", CT: "http://schemas.openxmlformats.org/package/2006/content-types", RELS: "http://schemas.openxmlformats.org/package/2006/relationships", TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes", xsi: "http://www.w3.org/2001/XMLSchema-instance", xsd: "http://www.w3.org/2001/XMLSchema" },
    Pl = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"],
    $r = { o: "urn:schemas-microsoft-com:office:office", x: "urn:schemas-microsoft-com:office:excel", ss: "urn:schemas-microsoft-com:office:spreadsheet", dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", mv: "http://macVmlSchemaUri", v: "urn:schemas-microsoft-com:vml", html: "http://www.w3.org/TR/REC-html40" };

function Vw(e, t) { for (var r = 1 - 2 * (e[t + 7] >>> 7), i = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), l = e[t + 6] & 15, o = 5; o >= 0; --o) l = l * 256 + e[t + o]; return i == 2047 ? l == 0 ? r * (1 / 0) : NaN : (i == 0 ? i = -1022 : (i -= 1023, l += Math.pow(2, 52)), r * Math.pow(2, i - 52) * l) }

function qw(e, t, r) { var i = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
        l = 0,
        o = 0,
        c = i ? -t : t;
    isFinite(c) ? c == 0 ? l = o = 0 : (l = Math.floor(Math.log(c) / Math.LN2), o = c * Math.pow(2, 52 - l), l <= -1023 && (!isFinite(o) || o < Math.pow(2, 52)) ? l = -1022 : (o -= Math.pow(2, 52), l += 1023)) : (l = 2047, o = isNaN(t) ? 26985 : 0); for (var f = 0; f <= 5; ++f, o /= 256) e[r + f] = o & 255;
    e[r + 6] = (l & 15) << 4 | o & 15, e[r + 7] = l >> 4 | i }
var vp = function(e) { for (var t = [], r = 10240, i = 0; i < e[0].length; ++i)
            if (e[0][i])
                for (var l = 0, o = e[0][i].length; l < o; l += r) t.push.apply(t, e[0][i].slice(l, l + r));
        return t },
    yp = xt ? function(e) { return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) { return Buffer.isBuffer(t) ? t : bn(t) })) : vp(e) } : vp,
    bp = function(e, t, r) { for (var i = [], l = t; l < r; l += 2) i.push(String.fromCharCode(Is(e, l))); return i.join("").replace(Vs, "") },
    Md = xt ? function(e, t, r) { return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(Vs, "") : bp(e, t, r) } : bp,
    Ap = function(e, t, r) { for (var i = [], l = t; l < t + r; ++l) i.push(("0" + e[l].toString(16)).slice(-2)); return i.join("") },
    ag = xt ? function(e, t, r) { return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Ap(e, t, r) } : Ap,
    Ep = function(e, t, r) { for (var i = [], l = t; l < r; l++) i.push(String.fromCharCode(Nl(e, l))); return i.join("") },
    mo = xt ? function(t, r, i) { return Buffer.isBuffer(t) ? t.toString("utf8", r, i) : Ep(t, r, i) } : Ep,
    ng = function(e, t) { var r = Jr(e, t); return r > 0 ? mo(e, t + 4, t + 4 + r - 1) : "" },
    ig = ng,
    lg = function(e, t) { var r = Jr(e, t); return r > 0 ? mo(e, t + 4, t + 4 + r - 1) : "" },
    sg = lg,
    og = function(e, t) { var r = 2 * Jr(e, t); return r > 0 ? mo(e, t + 4, t + 4 + r - 1) : "" },
    cg = og,
    ug = function(t, r) { var i = Jr(t, r); return i > 0 ? Md(t, r + 4, r + 4 + i) : "" },
    fg = ug,
    dg = function(e, t) { var r = Jr(e, t); return r > 0 ? mo(e, t + 4, t + 4 + r) : "" },
    hg = dg,
    mg = function(e, t) { return Vw(e, t) },
    eu = mg,
    Ld = function(t) { return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array };
xt && (ig = function(t, r) { if (!Buffer.isBuffer(t)) return ng(t, r); var i = t.readUInt32LE(r); return i > 0 ? t.toString("utf8", r + 4, r + 4 + i - 1) : "" }, sg = function(t, r) { if (!Buffer.isBuffer(t)) return lg(t, r); var i = t.readUInt32LE(r); return i > 0 ? t.toString("utf8", r + 4, r + 4 + i - 1) : "" }, cg = function(t, r) { if (!Buffer.isBuffer(t)) return og(t, r); var i = 2 * t.readUInt32LE(r); return t.toString("utf16le", r + 4, r + 4 + i - 1) }, fg = function(t, r) { if (!Buffer.isBuffer(t)) return ug(t, r); var i = t.readUInt32LE(r); return t.toString("utf16le", r + 4, r + 4 + i) }, hg = function(t, r) { if (!Buffer.isBuffer(t)) return dg(t, r); var i = t.readUInt32LE(r); return t.toString("utf8", r + 4, r + 4 + i) }, eu = function(t, r) { return Buffer.isBuffer(t) ? t.readDoubleLE(r) : mg(t, r) }, Ld = function(t) { return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array });
var Nl = function(e, t) { return e[t] },
    Is = function(e, t) { return e[t + 1] * 256 + e[t] },
    Xw = function(e, t) { var r = e[t + 1] * 256 + e[t]; return r < 32768 ? r : (65535 - r + 1) * -1 },
    Jr = function(e, t) { return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t] },
    Ni = function(e, t) { return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t] },
    Yw = function(e, t) { return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3] };

function Xs(e, t) { var r = "",
        i, l, o = [],
        c, f, p, x; switch (t) {
        case "dbcs":
            if (x = this.l, xt && Buffer.isBuffer(this)) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
            else
                for (p = 0; p < e; ++p) r += String.fromCharCode(Is(this, x)), x += 2;
            e *= 2; break;
        case "utf8":
            r = mo(this, this.l, this.l + e); break;
        case "utf16le":
            e *= 2, r = Md(this, this.l, this.l + e); break;
        case "wstr":
            return Xs.call(this, e, "dbcs");
        case "lpstr-ansi":
            r = ig(this, this.l), e = 4 + Jr(this, this.l); break;
        case "lpstr-cp":
            r = sg(this, this.l), e = 4 + Jr(this, this.l); break;
        case "lpwstr":
            r = cg(this, this.l), e = 4 + 2 * Jr(this, this.l); break;
        case "lpp4":
            e = 4 + Jr(this, this.l), r = fg(this, this.l), e & 2 && (e += 2); break;
        case "8lpp4":
            e = 4 + Jr(this, this.l), r = hg(this, this.l), e & 3 && (e += 4 - (e & 3)); break;
        case "cstr":
            for (e = 0, r = "";
                (c = Nl(this, this.l + e++)) !== 0;) o.push(Cc(c));
            r = o.join(""); break;
        case "_wstr":
            for (e = 0, r = "";
                (c = Is(this, this.l + e)) !== 0;) o.push(Cc(c)), e += 2;
            e += 2, r = o.join(""); break;
        case "dbcs-cont":
            for (r = "", x = this.l, p = 0; p < e; ++p) { if (this.lens && this.lens.indexOf(x) !== -1) return c = Nl(this, x), this.l = x + 1, f = Xs.call(this, e - p, c ? "dbcs-cont" : "sbcs-cont"), o.join("") + f;
                o.push(Cc(Is(this, x))), x += 2 }
            r = o.join(""), e *= 2; break;
        case "cpstr":
        case "sbcs-cont":
            for (r = "", x = this.l, p = 0; p != e; ++p) { if (this.lens && this.lens.indexOf(x) !== -1) return c = Nl(this, x), this.l = x + 1, f = Xs.call(this, e - p, c ? "dbcs-cont" : "sbcs-cont"), o.join("") + f;
                o.push(Cc(Nl(this, x))), x += 1 }
            r = o.join(""); break;
        default:
            switch (e) {
                case 1:
                    return i = Nl(this, this.l), this.l++, i;
                case 2:
                    return i = (t === "i" ? Xw : Is)(this, this.l), this.l += 2, i;
                case 4:
                case -4:
                    return t === "i" || (this[this.l + 3] & 128) === 0 ? (i = (e > 0 ? Ni : Yw)(this, this.l), this.l += 4, i) : (l = Jr(this, this.l), this.l += 4, l);
                case 8:
                case -8:
                    if (t === "f") return e == 8 ? l = eu(this, this.l) : l = eu([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, l;
                    e = 8;
                case 16:
                    r = ag(this, this.l, e); break } } return this.l += e, r }
var Ww = function(e, t, r) { e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255 },
    Kw = function(e, t, r) { e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255 },
    Qw = function(e, t, r) { e[r] = t & 255, e[r + 1] = t >>> 8 & 255 };

function Zw(e, t, r) { var i = 0,
        l = 0; if (r === "dbcs") { for (l = 0; l != t.length; ++l) Qw(this, t.charCodeAt(l), this.l + 2 * l);
        i = 2 * t.length } else if (r === "sbcs") { for (t = t.replace(/[^\x00-\x7F]/g, "_"), l = 0; l != t.length; ++l) this[this.l + l] = t.charCodeAt(l) & 255;
        i = t.length } else if (r === "hex") { for (; l < e; ++l) this[this.l++] = parseInt(t.slice(2 * l, 2 * l + 2), 16) || 0; return this } else if (r === "utf16le") { var o = Math.min(this.l + e, this.length); for (l = 0; l < Math.min(t.length, e); ++l) { var c = t.charCodeAt(l);
            this[this.l++] = c & 255, this[this.l++] = c >> 8 } for (; this.l < o;) this[this.l++] = 0; return this } else switch (e) {
        case 1:
            i = 1, this[this.l] = t & 255; break;
        case 2:
            i = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255; break;
        case 3:
            i = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255; break;
        case 4:
            i = 4, Ww(this, t, this.l); break;
        case 8:
            if (i = 8, r === "f") { qw(this, t, this.l); break }
        case 16:
            break;
        case -4:
            i = 4, Kw(this, t, this.l); break }
    return this.l += i, this }

function xg(e, t) { var r = ag(this, this.l, e.length >> 1); if (r !== e) throw new Error(t + "Expected " + e + " saw " + r);
    this.l += e.length >> 1 }

function Zr(e, t) { e.l = t, e.read_shift = Xs, e.chk = xg, e.write_shift = Zw }

function Wa(e, t) { e.l += t }

function ve(e) { var t = Mi(e); return Zr(t, 0), t }

function Pr() { var e = [],
        t = xt ? 256 : 2048,
        r = function(x) { var m = ve(x); return Zr(m, 0), m },
        i = r(t),
        l = function() { i && (i.length > i.l && (i = i.slice(0, i.l), i.l = i.length), i.length > 0 && e.push(i), i = null) },
        o = function(x) { return i && x < i.length - i.l ? i : (l(), i = r(Math.max(x + 1, t))) },
        c = function() { return l(), mr(e) },
        f = function(x) { l(), i = x, i.l == null && (i.l = i.length), o(t) }; return { next: o, push: f, end: c, _bufs: e } }

function Ne(e, t, r, i) { var l = +t,
        o; if (!isNaN(l)) { i || (i = V6[l].p || (r || []).length || 0), o = 1 + (l >= 128 ? 1 : 0) + 1, i >= 128 && ++o, i >= 16384 && ++o, i >= 2097152 && ++o; var c = e.next(o);
        l <= 127 ? c.write_shift(1, l) : (c.write_shift(1, (l & 127) + 128), c.write_shift(1, l >> 7)); for (var f = 0; f != 4; ++f)
            if (i >= 128) c.write_shift(1, (i & 127) + 128), i >>= 7;
            else { c.write_shift(1, i); break }
        i > 0 && Ld(r) && e.push(r) } }

function Ys(e, t, r) { var i = Ir(e); if (t.s ? (i.cRel && (i.c += t.s.c), i.rRel && (i.r += t.s.r)) : (i.cRel && (i.c += t.c), i.rRel && (i.r += t.r)), !r || r.biff < 12) { for (; i.c >= 256;) i.c -= 256; for (; i.r >= 65536;) i.r -= 65536 } return i }

function wp(e, t, r) { var i = Ir(e); return i.s = Ys(i.s, t.s, r), i.e = Ys(i.e, t.s, r), i }

function Ws(e, t) { if (e.cRel && e.c < 0)
        for (e = Ir(e); e.c < 0;) e.c += t > 8 ? 16384 : 256; if (e.rRel && e.r < 0)
        for (e = Ir(e); e.r < 0;) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384; var r = At(e); return !e.cRel && e.cRel != null && (r = e_(r)), !e.rRel && e.rRel != null && (r = $w(r)), r }

function Xf(e, t) { return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + wr(e.s.c) + ":" + (e.e.cRel ? "" : "$") + wr(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + pr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + pr(e.e.r) : Ws(e.s, t.biff) + ":" + Ws(e.e, t.biff) }

function Ud(e) { return parseInt(Jw(e), 10) - 1 }

function pr(e) { return "" + (e + 1) }

function $w(e) { return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2") }

function Jw(e) { return e.replace(/\$(\d+)$/, "$1") }

function Pd(e) { for (var t = t_(e), r = 0, i = 0; i !== t.length; ++i) r = 26 * r + t.charCodeAt(i) - 64; return r - 1 }

function wr(e) { if (e < 0) throw new Error("invalid column " + e); var t = ""; for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode((e - 1) % 26 + 65) + t; return t }

function e_(e) { return e.replace(/^([A-Z])/, "$$$1") }

function t_(e) { return e.replace(/^\$([A-Z])/, "$1") }

function r_(e) { return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",") }

function ir(e) { for (var t = 0, r = 0, i = 0; i < e.length; ++i) { var l = e.charCodeAt(i);
        l >= 48 && l <= 57 ? t = 10 * t + (l - 48) : l >= 65 && l <= 90 && (r = 26 * r + (l - 64)) } return { c: r - 1, r: t - 1 } }

function At(e) { for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0) r = String.fromCharCode((t - 1) % 26 + 65) + r; return r + (e.r + 1) }

function ta(e) { var t = e.indexOf(":"); return t == -1 ? { s: ir(e), e: ir(e) } : { s: ir(e.slice(0, t)), e: ir(e.slice(t + 1)) } }

function Kt(e, t) { return typeof t > "u" || typeof t == "number" ? Kt(e.s, e.e) : (typeof e != "string" && (e = At(e)), typeof t != "string" && (t = At(t)), e == t ? e : e + ":" + t) }

function Ft(e) { var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
        r = 0,
        i = 0,
        l = 0,
        o = e.length; for (r = 0; i < o && !((l = e.charCodeAt(i) - 64) < 1 || l > 26); ++i) r = 26 * r + l; for (t.s.c = --r, r = 0; i < o && !((l = e.charCodeAt(i) - 48) < 0 || l > 9); ++i) r = 10 * r + l; if (t.s.r = --r, i === o || l != 10) return t.e.c = t.s.c, t.e.r = t.s.r, t; for (++i, r = 0; i != o && !((l = e.charCodeAt(i) - 64) < 1 || l > 26); ++i) r = 26 * r + l; for (t.e.c = --r, r = 0; i != o && !((l = e.charCodeAt(i) - 48) < 0 || l > 9); ++i) r = 10 * r + l; return t.e.r = --r, t }

function _p(e, t) { var r = e.t == "d" && t instanceof Date; if (e.z != null) try { return e.w = Zn(e.z, r ? zr(t) : t) } catch {}
    try { return e.w = Zn((e.XF || {}).numFmtId || (r ? 14 : 0), r ? zr(t) : t) } catch { return "" + t } }

function vn(e, t, r) { return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? xo[e.v] || e.v : t == null ? _p(e, e.v) : _p(e, t)) }

function zi(e, t) { var r = t && t.sheet ? t.sheet : "Sheet1",
        i = {}; return i[r] = e, { SheetNames: [r], Sheets: i } }

function pg(e, t, r) { var i = r || {},
        l = e ? Array.isArray(e) : i.dense,
        o = e || (l ? [] : {}),
        c = 0,
        f = 0; if (o && i.origin != null) { if (typeof i.origin == "number") c = i.origin;
        else { var p = typeof i.origin == "string" ? ir(i.origin) : i.origin;
            c = p.r, f = p.c }
        o["!ref"] || (o["!ref"] = "A1:A1") } var x = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } }; if (o["!ref"]) { var m = Ft(o["!ref"]);
        x.s.c = m.s.c, x.s.r = m.s.r, x.e.c = Math.max(x.e.c, m.e.c), x.e.r = Math.max(x.e.r, m.e.r), c == -1 && (x.e.r = c = m.e.r + 1) } for (var g = 0; g != t.length; ++g)
        if (t[g]) { if (!Array.isArray(t[g])) throw new Error("aoa_to_sheet expects an array of arrays"); for (var v = 0; v != t[g].length; ++v)
                if (!(typeof t[g][v] > "u")) { var b = { v: t[g][v] },
                        A = c + g,
                        E = f + v; if (x.s.r > A && (x.s.r = A), x.s.c > E && (x.s.c = E), x.e.r < A && (x.e.r = A), x.e.c < E && (x.e.c = E), t[g][v] && typeof t[g][v] == "object" && !Array.isArray(t[g][v]) && !(t[g][v] instanceof Date)) b = t[g][v];
                    else if (Array.isArray(b.v) && (b.f = t[g][v][1], b.v = b.v[0]), b.v === null)
                        if (b.f) b.t = "n";
                        else if (i.nullError) b.t = "e", b.v = 0;
                    else if (i.sheetStubs) b.t = "z";
                    else continue;
                    else typeof b.v == "number" ? b.t = "n" : typeof b.v == "boolean" ? b.t = "b" : b.v instanceof Date ? (b.z = i.dateNF || zt[14], i.cellDates ? (b.t = "d", b.w = Zn(b.z, zr(b.v))) : (b.t = "n", b.v = zr(b.v), b.w = Zn(b.z, b.v))) : b.t = "s"; if (l) o[A] || (o[A] = []), o[A][E] && o[A][E].z && (b.z = o[A][E].z), o[A][E] = b;
                    else { var w = At({ c: E, r: A });
                        o[w] && o[w].z && (b.z = o[w].z), o[w] = b } } }
    return x.s.c < 1e7 && (o["!ref"] = Kt(x)), o }

function zl(e, t) { return pg(null, e, t) }

function a_(e) { return e.read_shift(4, "i") }

function ja(e, t) { return t || (t = ve(4)), t.write_shift(4, e), t }

function _r(e) { var t = e.read_shift(4); return t === 0 ? "" : e.read_shift(t, "dbcs") }

function lr(e, t) { var r = !1; return t == null && (r = !0, t = ve(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t }

function n_(e) { return { ich: e.read_shift(2), ifnt: e.read_shift(2) } }

function i_(e, t) { return t || (t = ve(4)), t.write_shift(2, 0), t.write_shift(2, 0), t }

function zd(e, t) { var r = e.l,
        i = e.read_shift(1),
        l = _r(e),
        o = [],
        c = { t: l, h: l }; if ((i & 1) !== 0) { for (var f = e.read_shift(4), p = 0; p != f; ++p) o.push(n_(e));
        c.r = o } else c.r = [{ ich: 0, ifnt: 0 }]; return e.l = r + t, c }

function l_(e, t) { var r = !1; return t == null && (r = !0, t = ve(15 + 4 * e.t.length)), t.write_shift(1, 0), lr(e.t, t), r ? t.slice(0, t.l) : t }
var s_ = zd;

function o_(e, t) { var r = !1; return t == null && (r = !0, t = ve(23 + 4 * e.t.length)), t.write_shift(1, 1), lr(e.t, t), t.write_shift(4, 1), i_({}, t), r ? t.slice(0, t.l) : t }

function wa(e) { var t = e.read_shift(4),
        r = e.read_shift(2); return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r } }

function Ii(e, t) { return t == null && (t = ve(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t }

function Hi(e) { var t = e.read_shift(2); return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t } }

function Gi(e, t) { return t == null && (t = ve(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t }
var c_ = _r,
    gg = lr;

function Id(e) { var t = e.read_shift(4); return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs") }

function tu(e, t) { var r = !1; return t == null && (r = !0, t = ve(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t }
var u_ = _r,
    gd = Id,
    Hd = tu;

function vg(e) { var t = e.slice(e.l, e.l + 4),
        r = t[0] & 1,
        i = t[0] & 2;
    e.l += 4; var l = i === 0 ? eu([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Ni(t, 0) >> 2; return r ? l / 100 : l }

function yg(e, t) { t == null && (t = ve(4)); var r = 0,
        i = 0,
        l = e * 100; if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? i = 1 : l == (l | 0) && l >= -536870912 && l < 1 << 29 && (i = 1, r = 1), i) t.write_shift(-4, ((r ? l : e) << 2) + (r + 2));
    else throw new Error("unsupported RkNumber " + e) }

function bg(e) { var t = { s: {}, e: {} }; return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t }

function f_(e, t) { return t || (t = ve(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t }
var Vi = bg,
    Il = f_;

function Hl(e) { if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow"; return e.read_shift(8, "f") }

function Li(e, t) { return (t || ve(8)).write_shift(8, e, "f") }

function d_(e) { var t = {},
        r = e.read_shift(1),
        i = r >>> 1,
        l = e.read_shift(1),
        o = e.read_shift(2, "i"),
        c = e.read_shift(1),
        f = e.read_shift(1),
        p = e.read_shift(1); switch (e.l++, i) {
        case 0:
            t.auto = 1; break;
        case 1:
            t.index = l; var x = A_[l];
            x && (t.rgb = kp(x)); break;
        case 2:
            t.rgb = kp([c, f, p]); break;
        case 3:
            t.theme = l; break } return o != 0 && (t.tint = o > 0 ? o / 32767 : o / 32768), t }

function ru(e, t) { if (t || (t = ve(8)), !e || e.auto) return t.write_shift(4, 0), t.write_shift(4, 0), t;
    e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0)); var r = e.tint || 0; if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null) t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
    else { var i = e.rgb || "FFFFFF";
        typeof i == "number" && (i = ("000000" + i.toString(16)).slice(-6)), t.write_shift(1, parseInt(i.slice(0, 2), 16)), t.write_shift(1, parseInt(i.slice(2, 4), 16)), t.write_shift(1, parseInt(i.slice(4, 6), 16)), t.write_shift(1, 255) } return t }

function h_(e) { var t = e.read_shift(1);
    e.l++; var r = { fBold: t & 1, fItalic: t & 2, fUnderline: t & 4, fStrikeout: t & 8, fOutline: t & 16, fShadow: t & 32, fCondense: t & 64, fExtend: t & 128 }; return r }

function m_(e, t) { t || (t = ve(2)); var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0); return t.write_shift(1, r), t.write_shift(1, 0), t }
var Ag = 2,
    Qr = 3,
    Fc = 11,
    au = 19,
    jc = 64,
    x_ = 65,
    p_ = 71,
    g_ = 4108,
    v_ = 4126,
    hr = 80,
    Tp = { 1: { n: "CodePage", t: Ag }, 2: { n: "Category", t: hr }, 3: { n: "PresentationFormat", t: hr }, 4: { n: "ByteCount", t: Qr }, 5: { n: "LineCount", t: Qr }, 6: { n: "ParagraphCount", t: Qr }, 7: { n: "SlideCount", t: Qr }, 8: { n: "NoteCount", t: Qr }, 9: { n: "HiddenCount", t: Qr }, 10: { n: "MultimediaClipCount", t: Qr }, 11: { n: "ScaleCrop", t: Fc }, 12: { n: "HeadingPairs", t: g_ }, 13: { n: "TitlesOfParts", t: v_ }, 14: { n: "Manager", t: hr }, 15: { n: "Company", t: hr }, 16: { n: "LinksUpToDate", t: Fc }, 17: { n: "CharacterCount", t: Qr }, 19: { n: "SharedDoc", t: Fc }, 22: { n: "HyperlinksChanged", t: Fc }, 23: { n: "AppVersion", t: Qr, p: "version" }, 24: { n: "DigSig", t: x_ }, 26: { n: "ContentType", t: hr }, 27: { n: "ContentStatus", t: hr }, 28: { n: "Language", t: hr }, 29: { n: "Version", t: hr }, 255: {}, 2147483648: { n: "Locale", t: au }, 2147483651: { n: "Behavior", t: au }, 1919054434: {} },
    Sp = { 1: { n: "CodePage", t: Ag }, 2: { n: "Title", t: hr }, 3: { n: "Subject", t: hr }, 4: { n: "Author", t: hr }, 5: { n: "Keywords", t: hr }, 6: { n: "Comments", t: hr }, 7: { n: "Template", t: hr }, 8: { n: "LastAuthor", t: hr }, 9: { n: "RevNumber", t: hr }, 10: { n: "EditTime", t: jc }, 11: { n: "LastPrinted", t: jc }, 12: { n: "CreatedDate", t: jc }, 13: { n: "ModifiedDate", t: jc }, 14: { n: "PageCount", t: Qr }, 15: { n: "WordCount", t: Qr }, 16: { n: "CharCount", t: Qr }, 17: { n: "Thumbnail", t: p_ }, 18: { n: "Application", t: hr }, 19: { n: "DocSecurity", t: Qr }, 255: {}, 2147483648: { n: "Locale", t: au }, 2147483651: { n: "Behavior", t: au }, 1919054434: {} };

function y_(e) { return e.map(function(t) { return [t >> 16 & 255, t >> 8 & 255, t & 255] }) }
var b_ = y_([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    A_ = Ir(b_),
    xo = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" },
    E_ = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" },
    Bc = { workbooks: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main", xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml" }, strs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", xlsb: "application/vnd.ms-excel.sharedStrings" }, comments: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", xlsb: "application/vnd.ms-excel.comments" }, sheets: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", xlsb: "application/vnd.ms-excel.worksheet" }, charts: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", xlsb: "application/vnd.ms-excel.chartsheet" }, dialogs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", xlsb: "application/vnd.ms-excel.dialogsheet" }, macros: { xlsx: "application/vnd.ms-excel.macrosheet+xml", xlsb: "application/vnd.ms-excel.macrosheet" }, metadata: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", xlsb: "application/vnd.ms-excel.sheetMetadata" }, styles: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", xlsb: "application/vnd.ms-excel.styles" } };

function Eg() { return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" } }

function wg(e, t) { var r = Fw(E_),
        i = [],
        l;
    i[i.length] = Qt, i[i.length] = Be("Types", null, { xmlns: nr.CT, "xmlns:xsd": nr.xsd, "xmlns:xsi": nr.xsi }), i = i.concat([
        ["xml", "application/xml"],
        ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
        ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
        ["data", "application/vnd.openxmlformats-officedocument.model+data"],
        ["bmp", "image/bmp"],
        ["png", "image/png"],
        ["gif", "image/gif"],
        ["emf", "image/x-emf"],
        ["wmf", "image/x-wmf"],
        ["jpg", "image/jpeg"],
        ["jpeg", "image/jpeg"],
        ["tif", "image/tiff"],
        ["tiff", "image/tiff"],
        ["pdf", "application/pdf"],
        ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
    ].map(function(p) { return Be("Default", null, { Extension: p[0], ContentType: p[1] }) })); var o = function(p) { e[p] && e[p].length > 0 && (l = e[p][0], i[i.length] = Be("Override", null, { PartName: (l[0] == "/" ? "" : "/") + l, ContentType: Bc[p][t.bookType] || Bc[p].xlsx })) },
        c = function(p) {
            (e[p] || []).forEach(function(x) { i[i.length] = Be("Override", null, { PartName: (x[0] == "/" ? "" : "/") + x, ContentType: Bc[p][t.bookType] || Bc[p].xlsx }) }) },
        f = function(p) {
            (e[p] || []).forEach(function(x) { i[i.length] = Be("Override", null, { PartName: (x[0] == "/" ? "" : "/") + x, ContentType: r[p][0] }) }) }; return o("workbooks"), c("sheets"), c("charts"), f("themes"), ["strs", "styles"].forEach(o), ["coreprops", "extprops", "custprops"].forEach(f), f("vba"), f("comments"), f("threadedcomments"), f("drawings"), c("metadata"), f("people"), i.length > 2 && (i[i.length] = "</Types>", i[1] = i[1].replace("/>", ">")), i.join("") }
var ht = { WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing", XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath", XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing", CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings", STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"], DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing", XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata", TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment", PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person", VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject" };

function _g(e) { var t = e.lastIndexOf("/"); return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels" }

function Rl(e) { var t = [Qt, Be("Relationships", null, { xmlns: nr.RELS })]; return gr(e["!id"]).forEach(function(r) { t[t.length] = Be("Relationship", null, e["!id"][r]) }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("") }

function yt(e, t, r, i, l, o) { if (l || (l = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
        for (t = e["!idx"]; e["!id"]["rId" + t]; ++t); if (e["!idx"] = t + 1, l.Id = "rId" + t, l.Type = i, l.Target = r, [ht.HLINK, ht.XPATH, ht.XMISS].indexOf(l.Type) > -1 && (l.TargetMode = "External"), e["!id"][l.Id]) throw new Error("Cannot rewrite rId " + t); return e["!id"][l.Id] = l, e[("/" + l.Target).replace("//", "/")] = l, t }

function w_(e) { var t = [Qt];
    t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`); for (var r = 0; r < e.length; ++r) t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`); return t.push("</manifest:manifest>"), t.join("") }

function Np(e, t, r) { return ['  <rdf:Description rdf:about="' + e + `">
`, '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`, `  </rdf:Description>
`].join("") }

function __(e, t) { return ['  <rdf:Description rdf:about="' + e + `">
`, '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`, `  </rdf:Description>
`].join("") }

function T_(e) { var t = [Qt];
    t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`); for (var r = 0; r != e.length; ++r) t.push(Np(e[r][0], e[r][1])), t.push(__("", e[r][0])); return t.push(Np("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("") }

function Tg() { return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Kc.version + "</meta:generator></office:meta></office:document-meta>" }
var Bi = [
    ["cp:category", "Category"],
    ["cp:contentStatus", "ContentStatus"],
    ["cp:keywords", "Keywords"],
    ["cp:lastModifiedBy", "LastAuthor"],
    ["cp:lastPrinted", "LastPrinted"],
    ["cp:revision", "RevNumber"],
    ["cp:version", "Version"],
    ["dc:creator", "Author"],
    ["dc:description", "Comments"],
    ["dc:identifier", "Identifier"],
    ["dc:language", "Language"],
    ["dc:subject", "Subject"],
    ["dc:title", "Title"],
    ["dcterms:created", "CreatedDate", "date"],
    ["dcterms:modified", "ModifiedDate", "date"]
];

function Yf(e, t, r, i, l) { l[e] != null || t == null || t === "" || (l[e] = t, t = bt(t), i[i.length] = r ? Be(e, t, r) : xr(e, t)) }

function Sg(e, t) { var r = t || {},
        i = [Qt, Be("cp:coreProperties", null, { "xmlns:cp": nr.CORE_PROPS, "xmlns:dc": nr.dc, "xmlns:dcterms": nr.dcterms, "xmlns:dcmitype": nr.dcmitype, "xmlns:xsi": nr.xsi })],
        l = {}; if (!e && !r.Props) return i.join("");
    e && (e.CreatedDate != null && Yf("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : pd(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, i, l), e.ModifiedDate != null && Yf("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : pd(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, i, l)); for (var o = 0; o != Bi.length; ++o) { var c = Bi[o],
            f = r.Props && r.Props[c[1]] != null ? r.Props[c[1]] : e ? e[c[1]] : null;
        f === !0 ? f = "1" : f === !1 ? f = "0" : typeof f == "number" && (f = String(f)), f != null && Yf(c[0], f, null, i, l) } return i.length > 2 && (i[i.length] = "</cp:coreProperties>", i[1] = i[1].replace("/>", ">")), i.join("") }
var Fl = [
        ["Application", "Application", "string"],
        ["AppVersion", "AppVersion", "string"],
        ["Company", "Company", "string"],
        ["DocSecurity", "DocSecurity", "string"],
        ["Manager", "Manager", "string"],
        ["HyperlinksChanged", "HyperlinksChanged", "bool"],
        ["SharedDoc", "SharedDoc", "bool"],
        ["LinksUpToDate", "LinksUpToDate", "bool"],
        ["ScaleCrop", "ScaleCrop", "bool"],
        ["HeadingPairs", "HeadingPairs", "raw"],
        ["TitlesOfParts", "TitlesOfParts", "raw"]
    ],
    Ng = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];

function Cg(e) { var t = [],
        r = Be; return e || (e = {}), e.Application = "SheetJS", t[t.length] = Qt, t[t.length] = Be("Properties", null, { xmlns: nr.EXT_PROPS, "xmlns:vt": nr.vt }), Fl.forEach(function(i) { if (e[i[1]] !== void 0) { var l; switch (i[2]) {
                case "string":
                    l = bt(String(e[i[1]])); break;
                case "bool":
                    l = e[i[1]] ? "true" : "false"; break }
            l !== void 0 && (t[t.length] = r(i[0], l)) } }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(i) { return "<vt:lpstr>" + bt(i) + "</vt:lpstr>" }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("") }

function Dg(e) { var t = [Qt, Be("Properties", null, { xmlns: nr.CUST_PROPS, "xmlns:vt": nr.vt })]; if (!e) return t.join(""); var r = 1; return gr(e).forEach(function(l) {++r, t[t.length] = Be("property", Gw(e[l]), { fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: r, name: bt(l) }) }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("") }
var Cp = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" };

function S_(e, t) { var r = []; return gr(Cp).map(function(i) { for (var l = 0; l < Bi.length; ++l)
            if (Bi[l][1] == i) return Bi[l];
        for (l = 0; l < Fl.length; ++l)
            if (Fl[l][1] == i) return Fl[l];
        throw i }).forEach(function(i) { if (e[i[1]] != null) { var l = t && t.Props && t.Props[i[1]] != null ? t.Props[i[1]] : e[i[1]]; switch (i[2]) {
                case "date":
                    l = new Date(l).toISOString().replace(/\.\d*Z/, "Z"); break }
            typeof l == "number" ? l = String(l) : l === !0 || l === !1 ? l = l ? "1" : "0" : l instanceof Date && (l = new Date(l).toISOString().replace(/\.\d*Z/, "")), r.push(xr(Cp[i[1]] || i[1], l)) } }), Be("DocumentProperties", r.join(""), { xmlns: $r.o }) }

function N_(e, t) { var r = ["Worksheets", "SheetNames"],
        i = "CustomDocumentProperties",
        l = []; return e && gr(e).forEach(function(o) { if (Object.prototype.hasOwnProperty.call(e, o)) { for (var c = 0; c < Bi.length; ++c)
                if (o == Bi[c][1]) return;
            for (c = 0; c < Fl.length; ++c)
                if (o == Fl[c][1]) return;
            for (c = 0; c < r.length; ++c)
                if (o == r[c]) return;
            var f = e[o],
                p = "string";
            typeof f == "number" ? (p = "float", f = String(f)) : f === !0 || f === !1 ? (p = "boolean", f = f ? "1" : "0") : f = String(f), l.push(Be(xp(o), f, { "dt:dt": p })) } }), t && gr(t).forEach(function(o) { if (Object.prototype.hasOwnProperty.call(t, o) && !(e && Object.prototype.hasOwnProperty.call(e, o))) { var c = t[o],
                f = "string";
            typeof c == "number" ? (f = "float", c = String(c)) : c === !0 || c === !1 ? (f = "boolean", c = c ? "1" : "0") : c instanceof Date ? (f = "dateTime.tz", c = c.toISOString()) : c = String(c), l.push(Be(xp(o), c, { "dt:dt": f })) } }), "<" + i + ' xmlns="' + $r.o + '">' + l.join("") + "</" + i + ">" }

function C_(e) { var t = typeof e == "string" ? new Date(Date.parse(e)) : e,
        r = t.getTime() / 1e3 + 11644473600,
        i = r % Math.pow(2, 32),
        l = (r - i) / Math.pow(2, 32);
    i *= 1e7, l *= 1e7; var o = i / Math.pow(2, 32) | 0;
    o > 0 && (i = i % Math.pow(2, 32), l += o); var c = ve(8); return c.write_shift(4, i), c.write_shift(4, l), c }

function Dp(e, t) { var r = ve(4),
        i = ve(4); switch (r.write_shift(4, e == 80 ? 31 : e), e) {
        case 3:
            i.write_shift(-4, t); break;
        case 5:
            i = ve(8), i.write_shift(8, t, "f"); break;
        case 11:
            i.write_shift(4, t ? 1 : 0); break;
        case 64:
            i = C_(t); break;
        case 31:
        case 80:
            for (i = ve(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), i.write_shift(4, t.length + 1), i.write_shift(0, t, "dbcs"); i.l != i.length;) i.write_shift(1, 0); break;
        default:
            throw new Error("TypedPropertyValue unrecognized type " + e + " " + t) } return mr([r, i]) }
var Og = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];

function D_(e) { switch (typeof e) {
        case "boolean":
            return 11;
        case "number":
            return (e | 0) == e ? 3 : 5;
        case "string":
            return 31;
        case "object":
            if (e instanceof Date) return 64; break } return -1 }

function Op(e, t, r) { var i = ve(8),
        l = [],
        o = [],
        c = 8,
        f = 0,
        p = ve(8),
        x = ve(8); if (p.write_shift(4, 2), p.write_shift(4, 1200), x.write_shift(4, 1), o.push(p), l.push(x), c += 8 + p.length, !t) { x = ve(8), x.write_shift(4, 0), l.unshift(x); var m = [ve(4)]; for (m[0].write_shift(4, e.length), f = 0; f < e.length; ++f) { var g = e[f][0]; for (p = ve(8 + 2 * (g.length + 1) + (g.length % 2 ? 0 : 2)), p.write_shift(4, f + 2), p.write_shift(4, g.length + 1), p.write_shift(0, g, "dbcs"); p.l != p.length;) p.write_shift(1, 0);
            m.push(p) }
        p = mr(m), o.unshift(p), c += 8 + p.length } for (f = 0; f < e.length; ++f)
        if (!(t && !t[e[f][0]]) && !(Og.indexOf(e[f][0]) > -1 || Ng.indexOf(e[f][0]) > -1) && e[f][1] != null) { var v = e[f][1],
                b = 0; if (t) { b = +t[e[f][0]]; var A = r[b]; if (A.p == "version" && typeof v == "string") { var E = v.split(".");
                    v = (+E[0] << 16) + (+E[1] || 0) }
                p = Dp(A.t, v) } else { var w = D_(v);
                w == -1 && (w = 31, v = String(v)), p = Dp(w, v) }
            o.push(p), x = ve(8), x.write_shift(4, t ? b : 2 + f), l.push(x), c += 8 + p.length }
    var S = 8 * (o.length + 1); for (f = 0; f < o.length; ++f) l[f].write_shift(4, S), S += o[f].length; return i.write_shift(4, c), i.write_shift(4, o.length), mr([i].concat(l).concat(o)) }

function Rp(e, t, r, i, l, o) { var c = ve(l ? 68 : 48),
        f = [c];
    c.write_shift(2, 65534), c.write_shift(2, 0), c.write_shift(4, 842412599), c.write_shift(16, _t.utils.consts.HEADER_CLSID, "hex"), c.write_shift(4, l ? 2 : 1), c.write_shift(16, t, "hex"), c.write_shift(4, l ? 68 : 48); var p = Op(e, r, i); if (f.push(p), l) { var x = Op(l, null, null);
        c.write_shift(16, o, "hex"), c.write_shift(4, 68 + p.length), f.push(x) } return mr(f) }

function O_(e, t) { t || (t = ve(e)); for (var r = 0; r < e; ++r) t.write_shift(1, 0); return t }

function R_(e, t) { return e.read_shift(t) === 1 }

function Or(e, t) { return t || (t = ve(2)), t.write_shift(2, +!!e), t }

function Rg(e) { return e.read_shift(2, "u") }

function ba(e, t) { return t || (t = ve(2)), t.write_shift(2, e), t }

function Fg(e, t, r) { return r || (r = ve(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r }

function jg(e, t, r) { var i = e.read_shift(r && r.biff >= 12 ? 2 : 1),
        l = "sbcs-cont"; if (r && r.biff >= 8, !r || r.biff == 8) { var o = e.read_shift(1);
        o && (l = "dbcs-cont") } else r.biff == 12 && (l = "wstr");
    r.biff >= 2 && r.biff <= 5 && (l = "cpstr"); var c = i ? e.read_shift(i, l) : ""; return c }

function F_(e) { var t = e.t || "",
        r = ve(3);
    r.write_shift(2, t.length), r.write_shift(1, 1); var i = ve(2 * t.length);
    i.write_shift(2 * t.length, t, "utf16le"); var l = [r, i]; return mr(l) }

function j_(e, t, r) { var i; if (r) { if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "cpstr"); if (r.biff >= 12) return e.read_shift(t, "dbcs-cont") } var l = e.read_shift(1); return l === 0 ? i = e.read_shift(t, "sbcs-cont") : i = e.read_shift(t, "dbcs-cont"), i }

function B_(e, t, r) { var i = e.read_shift(r && r.biff == 2 ? 1 : 2); return i === 0 ? (e.l++, "") : j_(e, i, r) }

function k_(e, t, r) { if (r.biff > 5) return B_(e, t, r); var i = e.read_shift(1); return i === 0 ? (e.l++, "") : e.read_shift(i, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont") }

function Bg(e, t, r) { return r || (r = ve(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r }

function Fp(e, t) { t || (t = ve(6 + e.length * 2)), t.write_shift(4, 1 + e.length); for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r)); return t.write_shift(2, 0), t }

function M_(e) { var t = ve(512),
        r = 0,
        i = e.Target;
    i.slice(0, 7) == "file://" && (i = i.slice(7)); var l = i.indexOf("#"),
        o = l > -1 ? 31 : 23; switch (i.charAt(0)) {
        case "#":
            o = 28; break;
        case ".":
            o &= -3; break }
    t.write_shift(4, 2), t.write_shift(4, o); var c = [8, 6815827, 6619237, 4849780, 83]; for (r = 0; r < c.length; ++r) t.write_shift(4, c[r]); if (o == 28) i = i.slice(1), Fp(i, t);
    else if (o & 2) { for (c = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < c.length; ++r) t.write_shift(1, parseInt(c[r], 16)); var f = l > -1 ? i.slice(0, l) : i; for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r) t.write_shift(2, f.charCodeAt(r));
        t.write_shift(2, 0), o & 8 && Fp(l > -1 ? i.slice(l + 1) : "", t) } else { for (c = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < c.length; ++r) t.write_shift(1, parseInt(c[r], 16)); for (var p = 0; i.slice(p * 3, p * 3 + 3) == "../" || i.slice(p * 3, p * 3 + 3) == "..\\";) ++p; for (t.write_shift(2, p), t.write_shift(4, i.length - 3 * p + 1), r = 0; r < i.length - 3 * p; ++r) t.write_shift(1, i.charCodeAt(r + 3 * p) & 255); for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r) t.write_shift(4, 0) } return t.slice(0, t.l) }

function Ui(e, t, r, i) { return i || (i = ve(6)), i.write_shift(2, e), i.write_shift(2, t), i.write_shift(2, r || 0), i }

function L_(e, t, r) { var i = r.biff > 8 ? 4 : 2,
        l = e.read_shift(i),
        o = e.read_shift(i, "i"),
        c = e.read_shift(i, "i"); return [l, o, c] }

function U_(e) { var t = e.read_shift(2),
        r = e.read_shift(2),
        i = e.read_shift(2),
        l = e.read_shift(2); return { s: { c: i, r: t }, e: { c: l, r } } }

function kg(e, t) { return t || (t = ve(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t }

function Gd(e, t, r) { var i = 1536,
        l = 16; switch (r.bookType) {
        case "biff8":
            break;
        case "biff5":
            i = 1280, l = 8; break;
        case "biff4":
            i = 4, l = 6; break;
        case "biff3":
            i = 3, l = 6; break;
        case "biff2":
            i = 2, l = 4; break;
        case "xla":
            break;
        default:
            throw new Error("unsupported BIFF version") } var o = ve(l); return o.write_shift(2, i), o.write_shift(2, t), l > 4 && o.write_shift(2, 29282), l > 6 && o.write_shift(2, 1997), l > 8 && (o.write_shift(2, 49161), o.write_shift(2, 1), o.write_shift(2, 1798), o.write_shift(2, 0)), o }

function P_(e, t) { var r = !t || t.biff == 8,
        i = ve(r ? 112 : 54); for (i.write_shift(t.biff == 8 ? 2 : 1, 7), r && i.write_shift(1, 0), i.write_shift(4, 859007059), i.write_shift(4, 5458548 | (r ? 0 : 536870912)); i.l < i.length;) i.write_shift(1, r ? 0 : 32); return i }

function z_(e, t) { var r = !t || t.biff >= 8 ? 2 : 1,
        i = ve(8 + r * e.name.length);
    i.write_shift(4, e.pos), i.write_shift(1, e.hs || 0), i.write_shift(1, e.dt), i.write_shift(1, e.name.length), t.biff >= 8 && i.write_shift(1, 1), i.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le"); var l = i.slice(0, i.l); return l.l = i.l, l }

function I_(e, t) { var r = ve(8);
    r.write_shift(4, e.Count), r.write_shift(4, e.Unique); for (var i = [], l = 0; l < e.length; ++l) i[l] = F_(e[l]); var o = mr([r].concat(i)); return o.parts = [r.length].concat(i.map(function(c) { return c.length })), o }

function H_() { var e = ve(18); return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e }

function G_(e) { var t = ve(18),
        r = 1718; return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t }

function V_(e, t) { var r = e.name || "Arial",
        i = t && t.biff == 5,
        l = i ? 15 + r.length : 16 + 2 * r.length,
        o = ve(l); return o.write_shift(2, e.sz * 20), o.write_shift(4, 0), o.write_shift(2, 400), o.write_shift(4, 0), o.write_shift(2, 0), o.write_shift(1, r.length), i || o.write_shift(1, 1), o.write_shift((i ? 1 : 2) * r.length, r, i ? "sbcs" : "utf16le"), o }

function q_(e, t, r, i) { var l = ve(10); return Ui(e, t, i, l), l.write_shift(4, r), l }

function X_(e, t, r, i, l) { var o = !l || l.biff == 8,
        c = ve(8 + +o + (1 + o) * r.length); return Ui(e, t, i, c), c.write_shift(2, r.length), o && c.write_shift(1, 1), c.write_shift((1 + o) * r.length, r, o ? "utf16le" : "sbcs"), c }

function Y_(e, t, r, i) { var l = r && r.biff == 5;
    i || (i = ve(l ? 3 + t.length : 5 + 2 * t.length)), i.write_shift(2, e), i.write_shift(l ? 1 : 2, t.length), l || i.write_shift(1, 1), i.write_shift((l ? 1 : 2) * t.length, t, l ? "sbcs" : "utf16le"); var o = i.length > i.l ? i.slice(0, i.l) : i; return o.l == null && (o.l = o.length), o }

function W_(e, t) { var r = t.biff == 8 || !t.biff ? 4 : 2,
        i = ve(2 * r + 6); return i.write_shift(r, e.s.r), i.write_shift(r, e.e.r + 1), i.write_shift(2, e.s.c), i.write_shift(2, e.e.c + 1), i.write_shift(2, 0), i }

function jp(e, t, r, i) { var l = r && r.biff == 5;
    i || (i = ve(l ? 16 : 20)), i.write_shift(2, 0), e.style ? (i.write_shift(2, e.numFmtId || 0), i.write_shift(2, 65524)) : (i.write_shift(2, e.numFmtId || 0), i.write_shift(2, t << 4)); var o = 0; return e.numFmtId > 0 && l && (o |= 1024), i.write_shift(4, o), i.write_shift(4, 0), l || i.write_shift(4, 0), i.write_shift(2, 0), i }

function K_(e) { var t = ve(8); return t.write_shift(4, 0), t.write_shift(2, 0), t.write_shift(2, 0), t }

function Q_(e, t, r, i, l, o) { var c = ve(8); return Ui(e, t, i, c), Fg(r, o, c), c }

function Z_(e, t, r, i) { var l = ve(14); return Ui(e, t, i, l), Li(r, l), l }

function $_(e, t, r) { if (r.biff < 8) return J_(e, t, r); for (var i = [], l = e.l + t, o = e.read_shift(r.biff > 8 ? 4 : 2); o-- !== 0;) i.push(L_(e, r.biff > 8 ? 12 : 6, r)); if (e.l != l) throw new Error("Bad ExternSheet: " + e.l + " != " + l); return i }

function J_(e, t, r) { e[e.l + 1] == 3 && e[e.l]++; var i = jg(e, t, r); return i.charCodeAt(0) == 3 ? i.slice(1) : i }

function e5(e) { var t = ve(2 + e.length * 8);
    t.write_shift(2, e.length); for (var r = 0; r < e.length; ++r) kg(e[r], t); return t }

function t5(e) { var t = ve(24),
        r = ir(e[0]);
    t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c); for (var i = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), l = 0; l < 16; ++l) t.write_shift(1, parseInt(i[l], 16)); return mr([t, M_(e[1])]) }

function r5(e) { var t = e[1].Tooltip,
        r = ve(10 + 2 * (t.length + 1));
    r.write_shift(2, 2048); var i = ir(e[0]);
    r.write_shift(2, i.r), r.write_shift(2, i.r), r.write_shift(2, i.c), r.write_shift(2, i.c); for (var l = 0; l < t.length; ++l) r.write_shift(2, t.charCodeAt(l)); return r.write_shift(2, 0), r }

function a5(e) { return e || (e = ve(4)), e.write_shift(2, 1), e.write_shift(2, 1), e }

function n5(e, t, r) { if (!r.cellStyles) return Wa(e, t); var i = r && r.biff >= 12 ? 4 : 2,
        l = e.read_shift(i),
        o = e.read_shift(i),
        c = e.read_shift(i),
        f = e.read_shift(i),
        p = e.read_shift(2);
    i == 2 && (e.l += 2); var x = { s: l, e: o, w: c, ixfe: f, flags: p }; return (r.biff >= 5 || !r.biff) && (x.level = p >> 8 & 7), x }

function i5(e, t) { var r = ve(12);
    r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0); var i = 0; return e.hidden && (i |= 1), r.write_shift(1, i), i = e.level || 0, r.write_shift(1, i), r.write_shift(2, 0), r }

function l5(e) { for (var t = ve(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1); return t }

function s5(e, t, r) { var i = ve(15); return go(i, e, t), i.write_shift(8, r, "f"), i }

function o5(e, t, r) { var i = ve(9); return go(i, e, t), i.write_shift(2, r), i }
var c5 = function() { var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 },
            t = Fd({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });

        function r(f, p) { var x = [],
                m = Mi(1); switch (p.type) {
                case "base64":
                    m = Ra(gn(f)); break;
                case "binary":
                    m = Ra(f); break;
                case "buffer":
                case "array":
                    m = f; break }
            Zr(m, 0); var g = m.read_shift(1),
                v = !!(g & 136),
                b = !1,
                A = !1; switch (g) {
                case 2:
                    break;
                case 3:
                    break;
                case 48:
                    b = !0, v = !0; break;
                case 49:
                    b = !0, v = !0; break;
                case 131:
                    break;
                case 139:
                    break;
                case 140:
                    A = !0; break;
                case 245:
                    break;
                default:
                    throw new Error("DBF Unsupported Version: " + g.toString(16)) } var E = 0,
                w = 521;
            g == 2 && (E = m.read_shift(2)), m.l += 3, g != 2 && (E = m.read_shift(4)), E > 1048576 && (E = 1e6), g != 2 && (w = m.read_shift(2)); var S = m.read_shift(2),
                O = p.codepage || 1252;
            g != 2 && (m.l += 16, m.read_shift(1), m[m.l] !== 0 && (O = e[m[m.l]]), m.l += 1, m.l += 2), A && (m.l += 36); for (var D = [], F = {}, K = Math.min(m.length, g == 2 ? 521 : w - 10 - (b ? 264 : 0)), I = A ? 32 : 11; m.l < K && m[m.l] != 13;) switch (F = {}, F.name = ap.utils.decode(O, m.slice(m.l, m.l + I)).replace(/[\u0000\r\n].*$/g, ""), m.l += I, F.type = String.fromCharCode(m.read_shift(1)), g != 2 && !A && (F.offset = m.read_shift(4)), F.len = m.read_shift(1), g == 2 && (F.offset = m.read_shift(2)), F.dec = m.read_shift(1), F.name.length && D.push(F), g != 2 && (m.l += A ? 13 : 14), F.type) {
                case "B":
                    (!b || F.len != 8) && p.WTF && console.log("Skipping " + F.name + ":" + F.type); break;
                case "G":
                case "P":
                    p.WTF && console.log("Skipping " + F.name + ":" + F.type); break;
                case "+":
                case "0":
                case "@":
                case "C":
                case "D":
                case "F":
                case "I":
                case "L":
                case "M":
                case "N":
                case "O":
                case "T":
                case "Y":
                    break;
                default:
                    throw new Error("Unknown Field Type: " + F.type) }
            if (m[m.l] !== 13 && (m.l = w - 1), m.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + m.l + " " + m[m.l]);
            m.l = w; var V = 0,
                N = 0; for (x[0] = [], N = 0; N != D.length; ++N) x[0][N] = D[N].name; for (; E-- > 0;) { if (m[m.l] === 42) { m.l += S; continue } for (++m.l, x[++V] = [], N = 0, N = 0; N != D.length; ++N) { var _ = m.slice(m.l, m.l + D[N].len);
                    m.l += D[N].len, Zr(_, 0); var U = ap.utils.decode(O, _); switch (D[N].type) {
                        case "C":
                            U.trim().length && (x[V][N] = U.replace(/\s+$/, "")); break;
                        case "D":
                            U.length === 8 ? x[V][N] = new Date(+U.slice(0, 4), +U.slice(4, 6) - 1, +U.slice(6, 8)) : x[V][N] = U; break;
                        case "F":
                            x[V][N] = parseFloat(U.trim()); break;
                        case "+":
                        case "I":
                            x[V][N] = A ? _.read_shift(-4, "i") ^ 2147483648 : _.read_shift(4, "i"); break;
                        case "L":
                            switch (U.trim().toUpperCase()) {
                                case "Y":
                                case "T":
                                    x[V][N] = !0; break;
                                case "N":
                                case "F":
                                    x[V][N] = !1; break;
                                case "":
                                case "?":
                                    break;
                                default:
                                    throw new Error("DBF Unrecognized L:|" + U + "|") } break;
                        case "M":
                            if (!v) throw new Error("DBF Unexpected MEMO for type " + g.toString(16));
                            x[V][N] = "##MEMO##" + (A ? parseInt(U.trim(), 10) : _.read_shift(4)); break;
                        case "N":
                            U = U.replace(/\u0000/g, "").trim(), U && U != "." && (x[V][N] = +U || 0); break;
                        case "@":
                            x[V][N] = new Date(_.read_shift(-8, "f") - 621356832e5); break;
                        case "T":
                            x[V][N] = new Date((_.read_shift(4) - 2440588) * 864e5 + _.read_shift(4)); break;
                        case "Y":
                            x[V][N] = _.read_shift(4, "i") / 1e4 + _.read_shift(4, "i") / 1e4 * Math.pow(2, 32); break;
                        case "O":
                            x[V][N] = -_.read_shift(-8, "f"); break;
                        case "B":
                            if (b && D[N].len == 8) { x[V][N] = _.read_shift(8, "f"); break }
                        case "G":
                        case "P":
                            _.l += D[N].len; break;
                        case "0":
                            if (D[N].name === "_NullFlags") break;
                        default:
                            throw new Error("DBF Unsupported data type " + D[N].type) } } } if (g != 2 && m.l < m.length && m[m.l++] != 26) throw new Error("DBF EOF Marker missing " + (m.l - 1) + " of " + m.length + " " + m[m.l - 1].toString(16)); return p && p.sheetRows && (x = x.slice(0, p.sheetRows)), p.DBF = D, x }

        function i(f, p) { var x = p || {};
            x.dateNF || (x.dateNF = "yyyymmdd"); var m = zl(r(f, x), x); return m["!cols"] = x.DBF.map(function(g) { return { wch: g.len, DBF: g } }), delete x.DBF, m }

        function l(f, p) { try { return zi(i(f, p), p) } catch (x) { if (p && p.WTF) throw x } return { SheetNames: [], Sheets: {} } } var o = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };

        function c(f, p) { var x = p || {}; if (+x.codepage >= 0 && eo(+x.codepage), x.type == "string") throw new Error("Cannot write DBF to JS string"); var m = Pr(),
                g = ou(f, { header: 1, raw: !0, cellDates: !0 }),
                v = g[0],
                b = g.slice(1),
                A = f["!cols"] || [],
                E = 0,
                w = 0,
                S = 0,
                O = 1; for (E = 0; E < v.length; ++E) { if (((A[E] || {}).DBF || {}).name) { v[E] = A[E].DBF.name, ++S; continue } if (v[E] != null) { if (++S, typeof v[E] == "number" && (v[E] = v[E].toString(10)), typeof v[E] != "string") throw new Error("DBF Invalid column name " + v[E] + " |" + typeof v[E] + "|"); if (v.indexOf(v[E]) !== E) { for (w = 0; w < 1024; ++w)
                            if (v.indexOf(v[E] + "_" + w) == -1) { v[E] += "_" + w; break } } } } var D = Ft(f["!ref"]),
                F = [],
                K = [],
                I = []; for (E = 0; E <= D.e.c - D.s.c; ++E) { var V = "",
                    N = "",
                    _ = 0,
                    U = []; for (w = 0; w < b.length; ++w) b[w][E] != null && U.push(b[w][E]); if (U.length == 0 || v[E] == null) { F[E] = "?"; continue } for (w = 0; w < U.length; ++w) { switch (typeof U[w]) {
                        case "number":
                            N = "B"; break;
                        case "string":
                            N = "C"; break;
                        case "boolean":
                            N = "L"; break;
                        case "object":
                            N = U[w] instanceof Date ? "D" : "C"; break;
                        default:
                            N = "C" }
                    _ = Math.max(_, String(U[w]).length), V = V && V != N ? "C" : N }
                _ > 250 && (_ = 250), N = ((A[E] || {}).DBF || {}).type, N == "C" && A[E].DBF.len > _ && (_ = A[E].DBF.len), V == "B" && N == "N" && (V = "N", I[E] = A[E].DBF.dec, _ = A[E].DBF.len), K[E] = V == "C" || N == "N" ? _ : o[V] || 0, O += K[E], F[E] = V } var q = m.next(32); for (q.write_shift(4, 318902576), q.write_shift(4, b.length), q.write_shift(2, 296 + 32 * S), q.write_shift(2, O), E = 0; E < 4; ++E) q.write_shift(4, 0); for (q.write_shift(4, 0 | (+t[L2] || 3) << 8), E = 0, w = 0; E < v.length; ++E)
                if (v[E] != null) { var H = m.next(32),
                        W = (v[E].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
                    H.write_shift(1, W, "sbcs"), H.write_shift(1, F[E] == "?" ? "C" : F[E], "sbcs"), H.write_shift(4, w), H.write_shift(1, K[E] || o[F[E]] || 0), H.write_shift(1, I[E] || 0), H.write_shift(1, 2), H.write_shift(4, 0), H.write_shift(1, 0), H.write_shift(4, 0), H.write_shift(4, 0), w += K[E] || o[F[E]] || 0 }
            var ee = m.next(264); for (ee.write_shift(4, 13), E = 0; E < 65; ++E) ee.write_shift(4, 0); for (E = 0; E < b.length; ++E) { var re = m.next(O); for (re.write_shift(1, 0), w = 0; w < v.length; ++w)
                    if (v[w] != null) switch (F[w]) {
                        case "L":
                            re.write_shift(1, b[E][w] == null ? 63 : b[E][w] ? 84 : 70); break;
                        case "B":
                            re.write_shift(8, b[E][w] || 0, "f"); break;
                        case "N":
                            var B = "0"; for (typeof b[E][w] == "number" && (B = b[E][w].toFixed(I[w] || 0)), S = 0; S < K[w] - B.length; ++S) re.write_shift(1, 32);
                            re.write_shift(1, B, "sbcs"); break;
                        case "D":
                            b[E][w] ? (re.write_shift(4, ("0000" + b[E][w].getFullYear()).slice(-4), "sbcs"), re.write_shift(2, ("00" + (b[E][w].getMonth() + 1)).slice(-2), "sbcs"), re.write_shift(2, ("00" + b[E][w].getDate()).slice(-2), "sbcs")) : re.write_shift(8, "00000000", "sbcs"); break;
                        case "C":
                            var C = String(b[E][w] != null ? b[E][w] : "").slice(0, K[w]); for (re.write_shift(1, C, "sbcs"), S = 0; S < K[w] - C.length; ++S) re.write_shift(1, 32); break } } return m.next(1).write_shift(1, 26), m.end() } return { to_workbook: l, to_sheet: i, from_sheet: c } }(),
    u5 = function() { var e = { AA: "À", BA: "Á", CA: "Â", DA: 195, HA: "Ä", JA: 197, AE: "È", BE: "É", CE: "Ê", HE: "Ë", AI: "Ì", BI: "Í", CI: "Î", HI: "Ï", AO: "Ò", BO: "Ó", CO: "Ô", DO: 213, HO: "Ö", AU: "Ù", BU: "Ú", CU: "Û", HU: "Ü", Aa: "à", Ba: "á", Ca: "â", Da: 227, Ha: "ä", Ja: 229, Ae: "è", Be: "é", Ce: "ê", He: "ë", Ai: "ì", Bi: "í", Ci: "î", Hi: "ï", Ao: "ò", Bo: "ó", Co: "ô", Do: 245, Ho: "ö", Au: "ù", Bu: "ú", Cu: "û", Hu: "ü", KC: "Ç", Kc: "ç", q: "æ", z: "œ", a: "Æ", j: "Œ", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 },
            t = new RegExp("\x1BN(" + gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"),
            r = function(v, b) { var A = e[b]; return typeof A == "number" ? rp(A) : A },
            i = function(v, b, A) { var E = b.charCodeAt(0) - 32 << 4 | A.charCodeAt(0) - 48; return E == 59 ? v : rp(E) };
        e["|"] = 254;

        function l(v, b) { switch (b.type) {
                case "base64":
                    return o(gn(v), b);
                case "binary":
                    return o(v, b);
                case "buffer":
                    return o(xt && Buffer.isBuffer(v) ? v.toString("binary") : fo(v), b);
                case "array":
                    return o(Tu(v), b) } throw new Error("Unrecognized type " + b.type) }

        function o(v, b) { var A = v.split(/[\n\r]+/),
                E = -1,
                w = -1,
                S = 0,
                O = 0,
                D = [],
                F = [],
                K = null,
                I = {},
                V = [],
                N = [],
                _ = [],
                U = 0,
                q; for (+b.codepage >= 0 && eo(+b.codepage); S !== A.length; ++S) { U = 0; var H = A[S].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, i).replace(t, r),
                    W = H.replace(/;;/g, "\0").split(";").map(function(M) { return M.replace(/\u0000/g, ";") }),
                    ee = W[0],
                    re; if (H.length > 0) switch (ee) {
                    case "ID":
                        break;
                    case "E":
                        break;
                    case "B":
                        break;
                    case "O":
                        break;
                    case "W":
                        break;
                    case "P":
                        W[1].charAt(0) == "P" && F.push(H.slice(3).replace(/;;/g, ";")); break;
                    case "C":
                        var B = !1,
                            C = !1,
                            se = !1,
                            te = !1,
                            j = -1,
                            ce = -1; for (O = 1; O < W.length; ++O) switch (W[O].charAt(0)) {
                            case "A":
                                break;
                            case "X":
                                w = parseInt(W[O].slice(1)) - 1, C = !0; break;
                            case "Y":
                                for (E = parseInt(W[O].slice(1)) - 1, C || (w = 0), q = D.length; q <= E; ++q) D[q] = []; break;
                            case "K":
                                re = W[O].slice(1), re.charAt(0) === '"' ? re = re.slice(1, re.length - 1) : re === "TRUE" ? re = !0 : re === "FALSE" ? re = !1 : isNaN(mn(re)) ? isNaN(ro(re).getDate()) || (re = Fr(re)) : (re = mn(re), K !== null && K2(K) && (re = J2(re))), B = !0; break;
                            case "E":
                                te = !0; var k = o8(W[O].slice(1), { r: E, c: w });
                                D[E][w] = [D[E][w], k]; break;
                            case "S":
                                se = !0, D[E][w] = [D[E][w], "S5S"]; break;
                            case "G":
                                break;
                            case "R":
                                j = parseInt(W[O].slice(1)) - 1; break;
                            case "C":
                                ce = parseInt(W[O].slice(1)) - 1; break;
                            default:
                                if (b && b.WTF) throw new Error("SYLK bad record " + H) }
                        if (B && (D[E][w] && D[E][w].length == 2 ? D[E][w][0] = re : D[E][w] = re, K = null), se) { if (te) throw new Error("SYLK shared formula cannot have own formula"); var Q = j > -1 && D[j][ce]; if (!Q || !Q[1]) throw new Error("SYLK shared formula cannot find base");
                            D[E][w][1] = c8(Q[1], { r: E - j, c: w - ce }) } break;
                    case "F":
                        var L = 0; for (O = 1; O < W.length; ++O) switch (W[O].charAt(0)) {
                            case "X":
                                w = parseInt(W[O].slice(1)) - 1, ++L; break;
                            case "Y":
                                for (E = parseInt(W[O].slice(1)) - 1, q = D.length; q <= E; ++q) D[q] = []; break;
                            case "M":
                                U = parseInt(W[O].slice(1)) / 20; break;
                            case "F":
                                break;
                            case "G":
                                break;
                            case "P":
                                K = F[parseInt(W[O].slice(1))]; break;
                            case "S":
                                break;
                            case "D":
                                break;
                            case "N":
                                break;
                            case "W":
                                for (_ = W[O].slice(1).split(" "), q = parseInt(_[0], 10); q <= parseInt(_[1], 10); ++q) U = parseInt(_[2], 10), N[q - 1] = U === 0 ? { hidden: !0 } : { wch: U }, Vd(N[q - 1]); break;
                            case "C":
                                w = parseInt(W[O].slice(1)) - 1, N[w] || (N[w] = {}); break;
                            case "R":
                                E = parseInt(W[O].slice(1)) - 1, V[E] || (V[E] = {}), U > 0 ? (V[E].hpt = U, V[E].hpx = zg(U)) : U === 0 && (V[E].hidden = !0); break;
                            default:
                                if (b && b.WTF) throw new Error("SYLK bad record " + H) }
                        L < 1 && (K = null); break;
                    default:
                        if (b && b.WTF) throw new Error("SYLK bad record " + H) } } return V.length > 0 && (I["!rows"] = V), N.length > 0 && (I["!cols"] = N), b && b.sheetRows && (D = D.slice(0, b.sheetRows)), [D, I] }

        function c(v, b) { var A = l(v, b),
                E = A[0],
                w = A[1],
                S = zl(E, b); return gr(w).forEach(function(O) { S[O] = w[O] }), S }

        function f(v, b) { return zi(c(v, b), b) }

        function p(v, b, A, E) { var w = "C;Y" + (A + 1) + ";X" + (E + 1) + ";K"; switch (v.t) {
                case "n":
                    w += v.v || 0, v.f && !v.F && (w += ";E" + Xd(v.f, { r: A, c: E })); break;
                case "b":
                    w += v.v ? "TRUE" : "FALSE"; break;
                case "e":
                    w += v.w || v.v; break;
                case "d":
                    w += '"' + (v.w || v.v) + '"'; break;
                case "s":
                    w += '"' + v.v.replace(/"/g, "").replace(/;/g, ";;") + '"'; break } return w }

        function x(v, b) { b.forEach(function(A, E) { var w = "F;W" + (E + 1) + " " + (E + 1) + " ";
                A.hidden ? w += "0" : (typeof A.width == "number" && !A.wpx && (A.wpx = nu(A.width)), typeof A.wpx == "number" && !A.wch && (A.wch = iu(A.wpx)), typeof A.wch == "number" && (w += Math.round(A.wch))), w.charAt(w.length - 1) != " " && v.push(w) }) }

        function m(v, b) { b.forEach(function(A, E) { var w = "F;";
                A.hidden ? w += "M0;" : A.hpt ? w += "M" + 20 * A.hpt + ";" : A.hpx && (w += "M" + 20 * lu(A.hpx) + ";"), w.length > 2 && v.push(w + "R" + (E + 1)) }) }

        function g(v, b) { var A = ["ID;PWXL;N;E"],
                E = [],
                w = Ft(v["!ref"]),
                S, O = Array.isArray(v),
                D = `\r
`;
            A.push("P;PGeneral"), A.push("F;P0;DG0G8;M255"), v["!cols"] && x(A, v["!cols"]), v["!rows"] && m(A, v["!rows"]), A.push("B;Y" + (w.e.r - w.s.r + 1) + ";X" + (w.e.c - w.s.c + 1) + ";D" + [w.s.c, w.s.r, w.e.c, w.e.r].join(" ")); for (var F = w.s.r; F <= w.e.r; ++F)
                for (var K = w.s.c; K <= w.e.c; ++K) { var I = At({ r: F, c: K });
                    S = O ? (v[F] || [])[K] : v[I], !(!S || S.v == null && (!S.f || S.F)) && E.push(p(S, v, F, K)) }
            return A.join(D) + D + E.join(D) + D + "E" + D } return { to_workbook: f, to_sheet: c, from_sheet: g } }(),
    f5 = function() {
        function e(o, c) { switch (c.type) {
                case "base64":
                    return t(gn(o), c);
                case "binary":
                    return t(o, c);
                case "buffer":
                    return t(xt && Buffer.isBuffer(o) ? o.toString("binary") : fo(o), c);
                case "array":
                    return t(Tu(o), c) } throw new Error("Unrecognized type " + c.type) }

        function t(o, c) { for (var f = o.split(`
`), p = -1, x = -1, m = 0, g = []; m !== f.length; ++m) { if (f[m].trim() === "BOT") { g[++p] = [], x = 0; continue } if (!(p < 0)) { var v = f[m].trim().split(","),
                        b = v[0],
                        A = v[1];++m; for (var E = f[m] || "";
                        (E.match(/["]/g) || []).length & 1 && m < f.length - 1;) E += `
` + f[++m]; switch (E = E.trim(), +b) {
                        case -1:
                            if (E === "BOT") { g[++p] = [], x = 0; continue } else if (E !== "EOD") throw new Error("Unrecognized DIF special command " + E); break;
                        case 0:
                            E === "TRUE" ? g[p][x] = !0 : E === "FALSE" ? g[p][x] = !1 : isNaN(mn(A)) ? isNaN(ro(A).getDate()) ? g[p][x] = A : g[p][x] = Fr(A) : g[p][x] = mn(A), ++x; break;
                        case 1:
                            E = E.slice(1, E.length - 1), E = E.replace(/""/g, '"'), E && E.match(/^=".*"$/) && (E = E.slice(2, -1)), g[p][x++] = E !== "" ? E : null; break } if (E === "EOD") break } } return c && c.sheetRows && (g = g.slice(0, c.sheetRows)), g }

        function r(o, c) { return zl(e(o, c), c) }

        function i(o, c) { return zi(r(o, c), c) } var l = function() { var o = function(p, x, m, g, v) { p.push(x), p.push(m + "," + g), p.push('"' + v.replace(/"/g, '""') + '"') },
                c = function(p, x, m, g) { p.push(x + "," + m), p.push(x == 1 ? '"' + g.replace(/"/g, '""') + '"' : g) }; return function(p) { var x = [],
                    m = Ft(p["!ref"]),
                    g, v = Array.isArray(p);
                o(x, "TABLE", 0, 1, "sheetjs"), o(x, "VECTORS", 0, m.e.r - m.s.r + 1, ""), o(x, "TUPLES", 0, m.e.c - m.s.c + 1, ""), o(x, "DATA", 0, 0, ""); for (var b = m.s.r; b <= m.e.r; ++b) { c(x, -1, 0, "BOT"); for (var A = m.s.c; A <= m.e.c; ++A) { var E = At({ r: b, c: A }); if (g = v ? (p[b] || [])[A] : p[E], !g) { c(x, 1, 0, ""); continue } switch (g.t) {
                            case "n":
                                var w = g.w;!w && g.v != null && (w = g.v), w == null ? g.f && !g.F ? c(x, 1, 0, "=" + g.f) : c(x, 1, 0, "") : c(x, 0, w, "V"); break;
                            case "b":
                                c(x, 0, g.v ? 1 : 0, g.v ? "TRUE" : "FALSE"); break;
                            case "s":
                                c(x, 1, 0, isNaN(g.v) ? g.v : '="' + g.v + '"'); break;
                            case "d":
                                g.w || (g.w = Zn(g.z || zt[14], zr(Fr(g.v)))), c(x, 0, g.w, "V"); break;
                            default:
                                c(x, 1, 0, "") } } }
                c(x, -1, 0, "EOD"); var S = `\r
`,
                    O = x.join(S); return O } }(); return { to_workbook: i, to_sheet: r, from_sheet: l } }(),
    Mg = function() {
        function e(g) { return g.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`) }

        function t(g) { return g.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n") }

        function r(g, v) { for (var b = g.split(`
`), A = -1, E = -1, w = 0, S = []; w !== b.length; ++w) { var O = b[w].trim().split(":"); if (O[0] === "cell") { var D = ir(O[1]); if (S.length <= D.r)
                        for (A = S.length; A <= D.r; ++A) S[A] || (S[A] = []); switch (A = D.r, E = D.c, O[2]) {
                        case "t":
                            S[A][E] = e(O[3]); break;
                        case "v":
                            S[A][E] = +O[3]; break;
                        case "vtf":
                            var F = O[O.length - 1];
                        case "vtc":
                            switch (O[3]) {
                                case "nl":
                                    S[A][E] = !!+O[4]; break;
                                default:
                                    S[A][E] = +O[4]; break }
                            O[2] == "vtf" && (S[A][E] = [S[A][E], F]) } } } return v && v.sheetRows && (S = S.slice(0, v.sheetRows)), S }

        function i(g, v) { return zl(r(g, v), v) }

        function l(g, v) { return zi(i(g, v), v) } var o = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),
            c = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) + `
`,
            f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`),
            p = "--SocialCalcSpreadsheetControlSave--";

        function x(g) { if (!g || !g["!ref"]) return ""; for (var v = [], b = [], A, E = "", w = ta(g["!ref"]), S = Array.isArray(g), O = w.s.r; O <= w.e.r; ++O)
                for (var D = w.s.c; D <= w.e.c; ++D)
                    if (E = At({ r: O, c: D }), A = S ? (g[O] || [])[D] : g[E], !(!A || A.v == null || A.t === "z")) { switch (b = ["cell", E, "t"], A.t) {
                            case "s":
                            case "str":
                                b.push(t(A.v)); break;
                            case "n":
                                A.f ? (b[2] = "vtf", b[3] = "n", b[4] = A.v, b[5] = t(A.f)) : (b[2] = "v", b[3] = A.v); break;
                            case "b":
                                b[2] = "vt" + (A.f ? "f" : "c"), b[3] = "nl", b[4] = A.v ? "1" : "0", b[5] = t(A.f || (A.v ? "TRUE" : "FALSE")); break;
                            case "d":
                                var F = zr(Fr(A.v));
                                b[2] = "vtc", b[3] = "nd", b[4] = "" + F, b[5] = A.w || Zn(A.z || zt[14], F); break;
                            case "e":
                                continue }
                        v.push(b.join(":")) }
            return v.push("sheet:c:" + (w.e.c - w.s.c + 1) + ":r:" + (w.e.r - w.s.r + 1) + ":tvf:1"), v.push("valueformat:1:text-wiki"), v.join(`
`) }

        function m(g) { return [o, c, f, c, x(g), p].join(`
`) } return { to_workbook: l, to_sheet: i, from_sheet: m } }(),
    d5 = function() {
        function e(m, g, v, b, A) { A.raw ? g[v][b] = m : m === "" || (m === "TRUE" ? g[v][b] = !0 : m === "FALSE" ? g[v][b] = !1 : isNaN(mn(m)) ? isNaN(ro(m).getDate()) ? g[v][b] = m : g[v][b] = Fr(m) : g[v][b] = mn(m)) }

        function t(m, g) { var v = g || {},
                b = []; if (!m || m.length === 0) return b; for (var A = m.split(/[\r\n]/), E = A.length - 1; E >= 0 && A[E].length === 0;) --E; for (var w = 10, S = 0, O = 0; O <= E; ++O) S = A[O].indexOf(" "), S == -1 ? S = A[O].length : S++, w = Math.max(w, S); for (O = 0; O <= E; ++O) { b[O] = []; var D = 0; for (e(A[O].slice(0, w).trim(), b, O, D, v), D = 1; D <= (A[O].length - w) / 10 + 1; ++D) e(A[O].slice(w + (D - 1) * 10, w + D * 10).trim(), b, O, D, v) } return v.sheetRows && (b = b.slice(0, v.sheetRows)), b } var r = { 44: ",", 9: "	", 59: ";", 124: "|" },
            i = { 44: 3, 9: 2, 59: 1, 124: 0 };

        function l(m) { for (var g = {}, v = !1, b = 0, A = 0; b < m.length; ++b)(A = m.charCodeAt(b)) == 34 ? v = !v : !v && A in r && (g[A] = (g[A] || 0) + 1);
            A = []; for (b in g) Object.prototype.hasOwnProperty.call(g, b) && A.push([g[b], b]); if (!A.length) { g = i; for (b in g) Object.prototype.hasOwnProperty.call(g, b) && A.push([g[b], b]) } return A.sort(function(E, w) { return E[0] - w[0] || i[E[1]] - i[w[1]] }), r[A.pop()[1]] || 44 }

        function o(m, g) { var v = g || {},
                b = "",
                A = v.dense ? [] : {},
                E = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
            m.slice(0, 4) == "sep=" ? m.charCodeAt(5) == 13 && m.charCodeAt(6) == 10 ? (b = m.charAt(4), m = m.slice(7)) : m.charCodeAt(5) == 13 || m.charCodeAt(5) == 10 ? (b = m.charAt(4), m = m.slice(6)) : b = l(m.slice(0, 1024)) : v && v.FS ? b = v.FS : b = l(m.slice(0, 1024)); var w = 0,
                S = 0,
                O = 0,
                D = 0,
                F = 0,
                K = b.charCodeAt(0),
                I = !1,
                V = 0,
                N = m.charCodeAt(0);
            m = m.replace(/\r\n/mg, `
`); var _ = v.dateNF != null ? Cw(v.dateNF) : null;

            function U() { var q = m.slice(D, F),
                    H = {}; if (q.charAt(0) == '"' && q.charAt(q.length - 1) == '"' && (q = q.slice(1, -1).replace(/""/g, '"')), q.length === 0) H.t = "z";
                else if (v.raw) H.t = "s", H.v = q;
                else if (q.trim().length === 0) H.t = "s", H.v = q;
                else if (q.charCodeAt(0) == 61) q.charCodeAt(1) == 34 && q.charCodeAt(q.length - 1) == 34 ? (H.t = "s", H.v = q.slice(2, -1).replace(/""/g, '"')) : u8(q) ? (H.t = "n", H.f = q.slice(1)) : (H.t = "s", H.v = q);
                else if (q == "TRUE") H.t = "b", H.v = !0;
                else if (q == "FALSE") H.t = "b", H.v = !1;
                else if (!isNaN(O = mn(q))) H.t = "n", v.cellText !== !1 && (H.w = q), H.v = O;
                else if (!isNaN(ro(q).getDate()) || _ && q.match(_)) { H.z = v.dateNF || zt[14]; var W = 0;
                    _ && q.match(_) && (q = Dw(q, v.dateNF, q.match(_) || []), W = 1), v.cellDates ? (H.t = "d", H.v = Fr(q, W)) : (H.t = "n", H.v = zr(Fr(q, W))), v.cellText !== !1 && (H.w = Zn(H.z, H.v instanceof Date ? zr(H.v) : H.v)), v.cellNF || delete H.z } else H.t = "s", H.v = q; if (H.t == "z" || (v.dense ? (A[w] || (A[w] = []), A[w][S] = H) : A[At({ c: S, r: w })] = H), D = F + 1, N = m.charCodeAt(D), E.e.c < S && (E.e.c = S), E.e.r < w && (E.e.r = w), V == K) ++S;
                else if (S = 0, ++w, v.sheetRows && v.sheetRows <= w) return !0 }
            e: for (; F < m.length; ++F) switch (V = m.charCodeAt(F)) {
                case 34:
                    N === 34 && (I = !I); break;
                case K:
                case 10:
                case 13:
                    if (!I && U()) break e; break }
            return F - D > 0 && U(), A["!ref"] = Kt(E), A }

        function c(m, g) { return !(g && g.PRN) || g.FS || m.slice(0, 4) == "sep=" || m.indexOf("	") >= 0 || m.indexOf(",") >= 0 || m.indexOf(";") >= 0 ? o(m, g) : zl(t(m, g), g) }

        function f(m, g) { var v = "",
                b = g.type == "string" ? [0, 0, 0, 0] : _N(m, g); switch (g.type) {
                case "base64":
                    v = gn(m); break;
                case "binary":
                    v = m; break;
                case "buffer":
                    g.codepage == 65001 ? v = m.toString("utf8") : (g.codepage, v = xt && Buffer.isBuffer(m) ? m.toString("binary") : fo(m)); break;
                case "array":
                    v = Tu(m); break;
                case "string":
                    v = m; break;
                default:
                    throw new Error("Unrecognized type " + g.type) } return b[0] == 239 && b[1] == 187 && b[2] == 191 ? v = qs(v.slice(3)) : g.type != "string" && g.type != "buffer" && g.codepage == 65001 ? v = qs(v) : g.type == "binary", v.slice(0, 19) == "socialcalc:version:" ? Mg.to_sheet(g.type == "string" ? v : qs(v), g) : c(v, g) }

        function p(m, g) { return zi(f(m, g), g) }

        function x(m) { for (var g = [], v = Ft(m["!ref"]), b, A = Array.isArray(m), E = v.s.r; E <= v.e.r; ++E) { for (var w = [], S = v.s.c; S <= v.e.c; ++S) { var O = At({ r: E, c: S }); if (b = A ? (m[E] || [])[S] : m[O], !b || b.v == null) { w.push("          "); continue } for (var D = (b.w || (vn(b), b.w) || "").slice(0, 10); D.length < 10;) D += " ";
                    w.push(D + (S === 0 ? " " : "")) }
                g.push(w.join("")) } return g.join(`
`) } return { to_workbook: p, to_sheet: f, from_sheet: x } }(),
    Bp = function() {
        function e(k, Q, L) { if (k) { Zr(k, k.l || 0); for (var M = L.Enum || j; k.l < k.length;) { var ie = k.read_shift(2),
                        _e = M[ie] || M[65535],
                        we = k.read_shift(2),
                        Te = k.l + we,
                        ye = _e.f && _e.f(k, we, L); if (k.l = Te, Q(ye, _e, ie)) return } } }

        function t(k, Q) { switch (Q.type) {
                case "base64":
                    return r(Ra(gn(k)), Q);
                case "binary":
                    return r(Ra(k), Q);
                case "buffer":
                case "array":
                    return r(k, Q) } throw "Unsupported type " + Q.type }

        function r(k, Q) { if (!k) return k; var L = Q || {},
                M = L.dense ? [] : {},
                ie = "Sheet1",
                _e = "",
                we = 0,
                Te = {},
                ye = [],
                Pe = [],
                ze = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
                st = L.sheetRows || 0; if (k[2] == 0 && (k[3] == 8 || k[3] == 9) && k.length >= 16 && k[14] == 5 && k[15] === 108) throw new Error("Unsupported Works 3 for Mac file"); if (k[2] == 2) L.Enum = j, e(k, function(Oe, Ke, ot) { switch (ot) {
                    case 0:
                        L.vers = Oe, Oe >= 4096 && (L.qpro = !0); break;
                    case 6:
                        ze = Oe; break;
                    case 204:
                        Oe && (_e = Oe); break;
                    case 222:
                        _e = Oe; break;
                    case 15:
                    case 51:
                        L.qpro || (Oe[1].v = Oe[1].v.slice(1));
                    case 13:
                    case 14:
                    case 16:
                        ot == 14 && (Oe[2] & 112) == 112 && (Oe[2] & 15) > 1 && (Oe[2] & 15) < 15 && (Oe[1].z = L.dateNF || zt[14], L.cellDates && (Oe[1].t = "d", Oe[1].v = J2(Oe[1].v))), L.qpro && Oe[3] > we && (M["!ref"] = Kt(ze), Te[ie] = M, ye.push(ie), M = L.dense ? [] : {}, ze = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, we = Oe[3], ie = _e || "Sheet" + (we + 1), _e = ""); var pt = L.dense ? (M[Oe[0].r] || [])[Oe[0].c] : M[At(Oe[0])]; if (pt) { pt.t = Oe[1].t, pt.v = Oe[1].v, Oe[1].z != null && (pt.z = Oe[1].z), Oe[1].f != null && (pt.f = Oe[1].f); break }
                        L.dense ? (M[Oe[0].r] || (M[Oe[0].r] = []), M[Oe[0].r][Oe[0].c] = Oe[1]) : M[At(Oe[0])] = Oe[1]; break } }, L);
            else if (k[2] == 26 || k[2] == 14) L.Enum = ce, k[2] == 14 && (L.qpro = !0, k.l = 0), e(k, function(Oe, Ke, ot) { switch (ot) {
                    case 204:
                        ie = Oe; break;
                    case 22:
                        Oe[1].v = Oe[1].v.slice(1);
                    case 23:
                    case 24:
                    case 25:
                    case 37:
                    case 39:
                    case 40:
                        if (Oe[3] > we && (M["!ref"] = Kt(ze), Te[ie] = M, ye.push(ie), M = L.dense ? [] : {}, ze = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, we = Oe[3], ie = "Sheet" + (we + 1)), st > 0 && Oe[0].r >= st) break;
                        L.dense ? (M[Oe[0].r] || (M[Oe[0].r] = []), M[Oe[0].r][Oe[0].c] = Oe[1]) : M[At(Oe[0])] = Oe[1], ze.e.c < Oe[0].c && (ze.e.c = Oe[0].c), ze.e.r < Oe[0].r && (ze.e.r = Oe[0].r); break;
                    case 27:
                        Oe[14e3] && (Pe[Oe[14e3][0]] = Oe[14e3][1]); break;
                    case 1537:
                        Pe[Oe[0]] = Oe[1], Oe[0] == we && (ie = Oe[1]); break } }, L);
            else throw new Error("Unrecognized LOTUS BOF " + k[2]); if (M["!ref"] = Kt(ze), Te[_e || ie] = M, ye.push(_e || ie), !Pe.length) return { SheetNames: ye, Sheets: Te }; for (var Ye = {}, tt = [], We = 0; We < Pe.length; ++We) Te[ye[We]] ? (tt.push(Pe[We] || ye[We]), Ye[Pe[We]] = Te[Pe[We]] || Te[ye[We]]) : (tt.push(Pe[We]), Ye[Pe[We]] = { "!ref": "A1" }); return { SheetNames: tt, Sheets: Ye } }

        function i(k, Q) { var L = Q || {}; if (+L.codepage >= 0 && eo(+L.codepage), L.type == "string") throw new Error("Cannot write WK1 to JS string"); var M = Pr(),
                ie = Ft(k["!ref"]),
                _e = Array.isArray(k),
                we = [];
            ke(M, 0, o(1030)), ke(M, 6, p(ie)); for (var Te = Math.min(ie.e.r, 8191), ye = ie.s.r; ye <= Te; ++ye)
                for (var Pe = pr(ye), ze = ie.s.c; ze <= ie.e.c; ++ze) { ye === ie.s.r && (we[ze] = wr(ze)); var st = we[ze] + Pe,
                        Ye = _e ? (k[ye] || [])[ze] : k[st]; if (!(!Ye || Ye.t == "z"))
                        if (Ye.t == "n")(Ye.v | 0) == Ye.v && Ye.v >= -32768 && Ye.v <= 32767 ? ke(M, 13, b(ye, ze, Ye.v)) : ke(M, 14, E(ye, ze, Ye.v));
                        else { var tt = vn(Ye);
                            ke(M, 15, g(ye, ze, tt.slice(0, 239))) } }
            return ke(M, 1), M.end() }

        function l(k, Q) { var L = Q || {}; if (+L.codepage >= 0 && eo(+L.codepage), L.type == "string") throw new Error("Cannot write WK3 to JS string"); var M = Pr();
            ke(M, 0, c(k)); for (var ie = 0, _e = 0; ie < k.SheetNames.length; ++ie)(k.Sheets[k.SheetNames[ie]] || {})["!ref"] && ke(M, 27, te(k.SheetNames[ie], _e++)); var we = 0; for (ie = 0; ie < k.SheetNames.length; ++ie) { var Te = k.Sheets[k.SheetNames[ie]]; if (!(!Te || !Te["!ref"])) { for (var ye = Ft(Te["!ref"]), Pe = Array.isArray(Te), ze = [], st = Math.min(ye.e.r, 8191), Ye = ye.s.r; Ye <= st; ++Ye)
                        for (var tt = pr(Ye), We = ye.s.c; We <= ye.e.c; ++We) { Ye === ye.s.r && (ze[We] = wr(We)); var Oe = ze[We] + tt,
                                Ke = Pe ? (Te[Ye] || [])[We] : Te[Oe]; if (!(!Ke || Ke.t == "z"))
                                if (Ke.t == "n") ke(M, 23, U(Ye, We, we, Ke.v));
                                else { var ot = vn(Ke);
                                    ke(M, 22, V(Ye, We, we, ot.slice(0, 239))) } }++we } } return ke(M, 1), M.end() }

        function o(k) { var Q = ve(2); return Q.write_shift(2, k), Q }

        function c(k) { var Q = ve(26);
            Q.write_shift(2, 4096), Q.write_shift(2, 4), Q.write_shift(4, 0); for (var L = 0, M = 0, ie = 0, _e = 0; _e < k.SheetNames.length; ++_e) { var we = k.SheetNames[_e],
                    Te = k.Sheets[we]; if (!(!Te || !Te["!ref"])) {++ie; var ye = ta(Te["!ref"]);
                    L < ye.e.r && (L = ye.e.r), M < ye.e.c && (M = ye.e.c) } } return L > 8191 && (L = 8191), Q.write_shift(2, L), Q.write_shift(1, ie), Q.write_shift(1, M), Q.write_shift(2, 0), Q.write_shift(2, 0), Q.write_shift(1, 1), Q.write_shift(1, 2), Q.write_shift(4, 0), Q.write_shift(4, 0), Q }

        function f(k, Q, L) { var M = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }; return Q == 8 && L.qpro ? (M.s.c = k.read_shift(1), k.l++, M.s.r = k.read_shift(2), M.e.c = k.read_shift(1), k.l++, M.e.r = k.read_shift(2), M) : (M.s.c = k.read_shift(2), M.s.r = k.read_shift(2), Q == 12 && L.qpro && (k.l += 2), M.e.c = k.read_shift(2), M.e.r = k.read_shift(2), Q == 12 && L.qpro && (k.l += 2), M.s.c == 65535 && (M.s.c = M.e.c = M.s.r = M.e.r = 0), M) }

        function p(k) { var Q = ve(8); return Q.write_shift(2, k.s.c), Q.write_shift(2, k.s.r), Q.write_shift(2, k.e.c), Q.write_shift(2, k.e.r), Q }

        function x(k, Q, L) { var M = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0]; return L.qpro && L.vers != 20768 ? (M[0].c = k.read_shift(1), M[3] = k.read_shift(1), M[0].r = k.read_shift(2), k.l += 2) : (M[2] = k.read_shift(1), M[0].c = k.read_shift(2), M[0].r = k.read_shift(2)), M }

        function m(k, Q, L) { var M = k.l + Q,
                ie = x(k, Q, L); if (ie[1].t = "s", L.vers == 20768) { k.l++; var _e = k.read_shift(1); return ie[1].v = k.read_shift(_e, "utf8"), ie } return L.qpro && k.l++, ie[1].v = k.read_shift(M - k.l, "cstr"), ie }

        function g(k, Q, L) { var M = ve(7 + L.length);
            M.write_shift(1, 255), M.write_shift(2, Q), M.write_shift(2, k), M.write_shift(1, 39); for (var ie = 0; ie < M.length; ++ie) { var _e = L.charCodeAt(ie);
                M.write_shift(1, _e >= 128 ? 95 : _e) } return M.write_shift(1, 0), M }

        function v(k, Q, L) { var M = x(k, Q, L); return M[1].v = k.read_shift(2, "i"), M }

        function b(k, Q, L) { var M = ve(7); return M.write_shift(1, 255), M.write_shift(2, Q), M.write_shift(2, k), M.write_shift(2, L, "i"), M }

        function A(k, Q, L) { var M = x(k, Q, L); return M[1].v = k.read_shift(8, "f"), M }

        function E(k, Q, L) { var M = ve(13); return M.write_shift(1, 255), M.write_shift(2, Q), M.write_shift(2, k), M.write_shift(8, L, "f"), M }

        function w(k, Q, L) { var M = k.l + Q,
                ie = x(k, Q, L); if (ie[1].v = k.read_shift(8, "f"), L.qpro) k.l = M;
            else { var _e = k.read_shift(2);
                F(k.slice(k.l, k.l + _e), ie), k.l += _e } return ie }

        function S(k, Q, L) { var M = Q & 32768; return Q &= -32769, Q = (M ? k : 0) + (Q >= 8192 ? Q - 16384 : Q), (M ? "" : "$") + (L ? wr(Q) : pr(Q)) } var O = { 51: ["FALSE", 0], 52: ["TRUE", 0], 70: ["LEN", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 111: ["T", 1] },
            D = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];

        function F(k, Q) { Zr(k, 0); for (var L = [], M = 0, ie = "", _e = "", we = "", Te = ""; k.l < k.length;) { var ye = k[k.l++]; switch (ye) {
                    case 0:
                        L.push(k.read_shift(8, "f")); break;
                    case 1:
                        _e = S(Q[0].c, k.read_shift(2), !0), ie = S(Q[0].r, k.read_shift(2), !1), L.push(_e + ie); break;
                    case 2:
                        { var Pe = S(Q[0].c, k.read_shift(2), !0),
                                ze = S(Q[0].r, k.read_shift(2), !1);_e = S(Q[0].c, k.read_shift(2), !0), ie = S(Q[0].r, k.read_shift(2), !1), L.push(Pe + ze + ":" + _e + ie) } break;
                    case 3:
                        if (k.l < k.length) { console.error("WK1 premature formula end"); return } break;
                    case 4:
                        L.push("(" + L.pop() + ")"); break;
                    case 5:
                        L.push(k.read_shift(2)); break;
                    case 6:
                        { for (var st = ""; ye = k[k.l++];) st += String.fromCharCode(ye);L.push('"' + st.replace(/"/g, '""') + '"') } break;
                    case 8:
                        L.push("-" + L.pop()); break;
                    case 23:
                        L.push("+" + L.pop()); break;
                    case 22:
                        L.push("NOT(" + L.pop() + ")"); break;
                    case 20:
                    case 21:
                        Te = L.pop(), we = L.pop(), L.push(["AND", "OR"][ye - 20] + "(" + we + "," + Te + ")"); break;
                    default:
                        if (ye < 32 && D[ye]) Te = L.pop(), we = L.pop(), L.push(we + D[ye] + Te);
                        else if (O[ye]) { if (M = O[ye][1], M == 69 && (M = k[k.l++]), M > L.length) { console.error("WK1 bad formula parse 0x" + ye.toString(16) + ":|" + L.join("|") + "|"); return } var Ye = L.slice(-M);
                            L.length -= M, L.push(O[ye][0] + "(" + Ye.join(",") + ")") } else return ye <= 7 ? console.error("WK1 invalid opcode " + ye.toString(16)) : ye <= 24 ? console.error("WK1 unsupported op " + ye.toString(16)) : ye <= 30 ? console.error("WK1 invalid opcode " + ye.toString(16)) : ye <= 115 ? console.error("WK1 unsupported function opcode " + ye.toString(16)) : console.error("WK1 unrecognized opcode " + ye.toString(16)) } }
            L.length == 1 ? Q[1].f = "" + L[0] : console.error("WK1 bad formula parse |" + L.join("|") + "|") }

        function K(k) { var Q = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0]; return Q[0].r = k.read_shift(2), Q[3] = k[k.l++], Q[0].c = k[k.l++], Q }

        function I(k, Q) { var L = K(k); return L[1].t = "s", L[1].v = k.read_shift(Q - 4, "cstr"), L }

        function V(k, Q, L, M) { var ie = ve(6 + M.length);
            ie.write_shift(2, k), ie.write_shift(1, L), ie.write_shift(1, Q), ie.write_shift(1, 39); for (var _e = 0; _e < M.length; ++_e) { var we = M.charCodeAt(_e);
                ie.write_shift(1, we >= 128 ? 95 : we) } return ie.write_shift(1, 0), ie }

        function N(k, Q) { var L = K(k);
            L[1].v = k.read_shift(2); var M = L[1].v >> 1; if (L[1].v & 1) switch (M & 7) {
                case 0:
                    M = (M >> 3) * 5e3; break;
                case 1:
                    M = (M >> 3) * 500; break;
                case 2:
                    M = (M >> 3) / 20; break;
                case 3:
                    M = (M >> 3) / 200; break;
                case 4:
                    M = (M >> 3) / 2e3; break;
                case 5:
                    M = (M >> 3) / 2e4; break;
                case 6:
                    M = (M >> 3) / 16; break;
                case 7:
                    M = (M >> 3) / 64; break }
            return L[1].v = M, L }

        function _(k, Q) { var L = K(k),
                M = k.read_shift(4),
                ie = k.read_shift(4),
                _e = k.read_shift(2); if (_e == 65535) return M === 0 && ie === 3221225472 ? (L[1].t = "e", L[1].v = 15) : M === 0 && ie === 3489660928 ? (L[1].t = "e", L[1].v = 42) : L[1].v = 0, L; var we = _e & 32768; return _e = (_e & 32767) - 16446, L[1].v = (1 - we * 2) * (ie * Math.pow(2, _e + 32) + M * Math.pow(2, _e)), L }

        function U(k, Q, L, M) { var ie = ve(14); if (ie.write_shift(2, k), ie.write_shift(1, L), ie.write_shift(1, Q), M == 0) return ie.write_shift(4, 0), ie.write_shift(4, 0), ie.write_shift(2, 65535), ie; var _e = 0,
                we = 0,
                Te = 0,
                ye = 0; return M < 0 && (_e = 1, M = -M), we = Math.log2(M) | 0, M /= Math.pow(2, we - 31), ye = M >>> 0, (ye & 2147483648) == 0 && (M /= 2, ++we, ye = M >>> 0), M -= ye, ye |= 2147483648, ye >>>= 0, M *= Math.pow(2, 32), Te = M >>> 0, ie.write_shift(4, Te), ie.write_shift(4, ye), we += 16383 + (_e ? 32768 : 0), ie.write_shift(2, we), ie }

        function q(k, Q) { var L = _(k); return k.l += Q - 14, L }

        function H(k, Q) { var L = K(k),
                M = k.read_shift(4); return L[1].v = M >> 6, L }

        function W(k, Q) { var L = K(k),
                M = k.read_shift(8, "f"); return L[1].v = M, L }

        function ee(k, Q) { var L = W(k); return k.l += Q - 10, L }

        function re(k, Q) { return k[k.l + Q - 1] == 0 ? k.read_shift(Q, "cstr") : "" }

        function B(k, Q) { var L = k[k.l++];
            L > Q - 1 && (L = Q - 1); for (var M = ""; M.length < L;) M += String.fromCharCode(k[k.l++]); return M }

        function C(k, Q, L) { if (!(!L.qpro || Q < 21)) { var M = k.read_shift(1);
                k.l += 17, k.l += 1, k.l += 2; var ie = k.read_shift(Q - 21, "cstr"); return [M, ie] } }

        function se(k, Q) { for (var L = {}, M = k.l + Q; k.l < M;) { var ie = k.read_shift(2); if (ie == 14e3) { for (L[ie] = [0, ""], L[ie][0] = k.read_shift(2); k[k.l];) L[ie][1] += String.fromCharCode(k[k.l]), k.l++;
                    k.l++ } } return L }

        function te(k, Q) { var L = ve(5 + k.length);
            L.write_shift(2, 14e3), L.write_shift(2, Q); for (var M = 0; M < k.length; ++M) { var ie = k.charCodeAt(M);
                L[L.l++] = ie > 127 ? 95 : ie } return L[L.l++] = 0, L } var j = { 0: { n: "BOF", f: Rg }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: v }, 14: { n: "NUMBER", f: A }, 15: { n: "LABEL", f: m }, 16: { n: "FORMULA", f: w }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: m }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: re }, 222: { n: "SHEETNAMELP", f: B }, 65535: { n: "" } },
            ce = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: I }, 23: { n: "NUMBER17", f: _ }, 24: { n: "NUMBER18", f: N }, 25: { n: "FORMULA19", f: q }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: se }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: H }, 38: { n: "??" }, 39: { n: "NUMBER27", f: W }, 40: { n: "FORMULA28", f: ee }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: re }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: C }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } }; return { sheet_to_wk1: i, book_to_wk3: l, to_workbook: t } }(),
    h5 = /^\s|\s$|[\t\n\r]/;

function Lg(e, t) { if (!t.bookSST) return ""; var r = [Qt];
    r[r.length] = Be("sst", null, { xmlns: Pl[0], count: e.Count, uniqueCount: e.Unique }); for (var i = 0; i != e.length; ++i)
        if (e[i] != null) { var l = e[i],
                o = "<si>";
            l.r ? o += l.r : (o += "<t", l.t || (l.t = ""), l.t.match(h5) && (o += ' xml:space="preserve"'), o += ">" + bt(l.t) + "</t>"), o += "</si>", r[r.length] = o }
    return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("") }

function m5(e) { return [e.read_shift(4), e.read_shift(4)] }

function x5(e, t) { return t || (t = ve(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t }
var p5 = l_;

function g5(e) { var t = Pr();
    Ne(t, 159, x5(e)); for (var r = 0; r < e.length; ++r) Ne(t, 19, p5(e[r])); return Ne(t, 160), t.end() }

function v5(e) { for (var t = [], r = e.split(""), i = 0; i < r.length; ++i) t[i] = r[i].charCodeAt(0); return t }

function Ug(e) { var t = 0,
        r, i = v5(e),
        l = i.length + 1,
        o, c, f, p, x; for (r = Mi(l), r[0] = i.length, o = 1; o != l; ++o) r[o] = i[o - 1]; for (o = l - 1; o >= 0; --o) c = r[o], f = (t & 16384) === 0 ? 0 : 1, p = t << 1 & 32767, x = f | p, t = x ^ c; return t ^ 52811 }
var y5 = function() {
    function e(l, o) { switch (o.type) {
            case "base64":
                return t(gn(l), o);
            case "binary":
                return t(l, o);
            case "buffer":
                return t(xt && Buffer.isBuffer(l) ? l.toString("binary") : fo(l), o);
            case "array":
                return t(Tu(l), o) } throw new Error("Unrecognized type " + o.type) }

    function t(l, o) { var c = o || {},
            f = c.dense ? [] : {},
            p = l.match(/\\trowd.*?\\row\b/g); if (!p.length) throw new Error("RTF missing table"); var x = { s: { c: 0, r: 0 }, e: { c: 0, r: p.length - 1 } }; return p.forEach(function(m, g) { Array.isArray(f) && (f[g] = []); for (var v = /\\\w+\b/g, b = 0, A, E = -1; A = v.exec(m);) { switch (A[0]) {
                    case "\\cell":
                        var w = m.slice(b, v.lastIndex - A[0].length); if (w[0] == " " && (w = w.slice(1)), ++E, w.length) { var S = { v: w, t: "s" };
                            Array.isArray(f) ? f[g][E] = S : f[At({ r: g, c: E })] = S } break }
                b = v.lastIndex }
            E > x.e.c && (x.e.c = E) }), f["!ref"] = Kt(x), f }

    function r(l, o) { return zi(e(l, o), o) }

    function i(l) { for (var o = ["{\\rtf1\\ansi"], c = Ft(l["!ref"]), f, p = Array.isArray(l), x = c.s.r; x <= c.e.r; ++x) { o.push("\\trowd\\trautofit1"); for (var m = c.s.c; m <= c.e.c; ++m) o.push("\\cellx" + (m + 1)); for (o.push("\\pard\\intbl"), m = c.s.c; m <= c.e.c; ++m) { var g = At({ r: x, c: m });
                f = p ? (l[x] || [])[m] : l[g], !(!f || f.v == null && (!f.f || f.F)) && (o.push(" " + (f.w || (vn(f), f.w))), o.push("\\cell")) }
            o.push("\\pard\\intbl\\row") } return o.join("") + "}" } return { to_workbook: r, to_sheet: e, from_sheet: i } }();

function kp(e) { for (var t = 0, r = 1; t != 3; ++t) r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]); return r.toString(16).toUpperCase().slice(1) }
var b5 = 6,
    xn = b5;

function nu(e) { return Math.floor((e + Math.round(128 / xn) / 256) * xn) }

function iu(e) { return Math.floor((e - 5) / xn * 100 + .5) / 100 }

function vd(e) { return Math.round((e * xn + 5) / xn * 256) / 256 }

function Vd(e) { e.width ? (e.wpx = nu(e.width), e.wch = iu(e.wpx), e.MDW = xn) : e.wpx ? (e.wch = iu(e.wpx), e.width = vd(e.wch), e.MDW = xn) : typeof e.wch == "number" && (e.width = vd(e.wch), e.wpx = nu(e.width), e.MDW = xn), e.customWidth && delete e.customWidth }
var A5 = 96,
    Pg = A5;

function lu(e) { return e * 96 / Pg }

function zg(e) { return e * Pg / 96 }

function E5(e) { var t = ["<numFmts>"]; return [
        [5, 8],
        [23, 26],
        [41, 44],
        [50, 392]
    ].forEach(function(r) { for (var i = r[0]; i <= r[1]; ++i) e[i] != null && (t[t.length] = Be("numFmt", null, { numFmtId: i, formatCode: bt(e[i]) })) }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = Be("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join("")) }

function w5(e) { var t = []; return t[t.length] = Be("cellXfs", null), e.forEach(function(r) { t[t.length] = Be("xf", null, r) }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = Be("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join("")) }

function Ig(e, t) { var r = [Qt, Be("styleSheet", null, { xmlns: Pl[0], "xmlns:vt": nr.vt })],
        i; return e.SSF && (i = E5(e.SSF)) != null && (r[r.length] = i), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (i = w5(t.cellXfs)) && (r[r.length] = i), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("") }

function _5(e, t) { var r = e.read_shift(2),
        i = _r(e); return [r, i] }

function T5(e, t, r) { r || (r = ve(6 + 4 * t.length)), r.write_shift(2, e), lr(t, r); var i = r.length > r.l ? r.slice(0, r.l) : r; return r.l == null && (r.l = r.length), i }

function S5(e, t, r) { var i = {};
    i.sz = e.read_shift(2) / 20; var l = h_(e);
    l.fItalic && (i.italic = 1), l.fCondense && (i.condense = 1), l.fExtend && (i.extend = 1), l.fShadow && (i.shadow = 1), l.fOutline && (i.outline = 1), l.fStrikeout && (i.strike = 1); var o = e.read_shift(2); switch (o === 700 && (i.bold = 1), e.read_shift(2)) {
        case 1:
            i.vertAlign = "superscript"; break;
        case 2:
            i.vertAlign = "subscript"; break } var c = e.read_shift(1);
    c != 0 && (i.underline = c); var f = e.read_shift(1);
    f > 0 && (i.family = f); var p = e.read_shift(1); switch (p > 0 && (i.charset = p), e.l++, i.color = d_(e), e.read_shift(1)) {
        case 1:
            i.scheme = "major"; break;
        case 2:
            i.scheme = "minor"; break } return i.name = _r(e), i }

function N5(e, t) { t || (t = ve(25 + 4 * 32)), t.write_shift(2, e.sz * 20), m_(e, t), t.write_shift(2, e.bold ? 700 : 400); var r = 0;
    e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), ru(e.color, t); var i = 0; return i = 2, t.write_shift(1, i), lr(e.name, t), t.length > t.l ? t.slice(0, t.l) : t }
var C5 = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"],
    Wf, D5 = Wa;

function Mp(e, t) { t || (t = ve(4 * 3 + 8 * 7 + 16 * 1)), Wf || (Wf = Fd(C5)); var r = Wf[e.patternType];
    r == null && (r = 40), t.write_shift(4, r); var i = 0; if (r != 40)
        for (ru({ auto: 1 }, t), ru({ auto: 1 }, t); i < 12; ++i) t.write_shift(4, 0);
    else { for (; i < 4; ++i) t.write_shift(4, 0); for (; i < 12; ++i) t.write_shift(4, 0) } return t.length > t.l ? t.slice(0, t.l) : t }

function O5(e, t) { var r = e.l + t,
        i = e.read_shift(2),
        l = e.read_shift(2); return e.l = r, { ixfe: i, numFmtId: l } }

function Hg(e, t, r) { r || (r = ve(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0); var i = 0; return r.write_shift(1, i), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r }

function zs(e, t) { return t || (t = ve(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t }
var R5 = Wa;

function F5(e, t) { return t || (t = ve(51)), t.write_shift(1, 0), zs(null, t), zs(null, t), zs(null, t), zs(null, t), zs(null, t), t.length > t.l ? t.slice(0, t.l) : t }

function j5(e, t) { return t || (t = ve(12 + 4 * 10)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, 0), t.write_shift(1, 0), tu(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t }

function B5(e, t, r) { var i = ve(2052); return i.write_shift(4, e), tu(t, i), tu(r, i), i.length > i.l ? i.slice(0, i.l) : i }

function k5(e, t) { if (t) { var r = 0;
        [
            [5, 8],
            [23, 26],
            [41, 44],
            [50, 392]
        ].forEach(function(i) { for (var l = i[0]; l <= i[1]; ++l) t[l] != null && ++r }), r != 0 && (Ne(e, 615, ja(r)), [
            [5, 8],
            [23, 26],
            [41, 44],
            [50, 392]
        ].forEach(function(i) { for (var l = i[0]; l <= i[1]; ++l) t[l] != null && Ne(e, 44, T5(l, t[l])) }), Ne(e, 616)) } }

function M5(e) { var t = 1;
    Ne(e, 611, ja(t)), Ne(e, 43, N5({ sz: 12, color: { theme: 1 }, name: "Calibri", family: 2 })), Ne(e, 612) }

function L5(e) { var t = 2;
    Ne(e, 603, ja(t)), Ne(e, 45, Mp({ patternType: "none" })), Ne(e, 45, Mp({ patternType: "gray125" })), Ne(e, 604) }

function U5(e) { var t = 1;
    Ne(e, 613, ja(t)), Ne(e, 46, F5()), Ne(e, 614) }

function P5(e) { var t = 1;
    Ne(e, 626, ja(t)), Ne(e, 47, Hg({ numFmtId: 0 }, 65535)), Ne(e, 627) }

function z5(e, t) { Ne(e, 617, ja(t.length)), t.forEach(function(r) { Ne(e, 47, Hg(r, 0)) }), Ne(e, 618) }

function I5(e) { var t = 1;
    Ne(e, 619, ja(t)), Ne(e, 48, j5({ xfId: 0, name: "Normal" })), Ne(e, 620) }

function H5(e) { var t = 0;
    Ne(e, 505, ja(t)), Ne(e, 506) }

function G5(e) { var t = 0;
    Ne(e, 508, B5(t, "TableStyleMedium9", "PivotStyleMedium4")), Ne(e, 509) }

function V5(e, t) { var r = Pr(); return Ne(r, 278), k5(r, e.SSF), M5(r), L5(r), U5(r), P5(r), z5(r, t.cellXfs), I5(r), H5(r), G5(r), Ne(r, 279), r.end() }

function Gg(e, t) { if (t && t.themeXLSX) return t.themeXLSX; if (e && typeof e.raw == "string") return e.raw; var r = [Qt]; return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("") }

function q5(e, t) { return { flags: e.read_shift(4), version: e.read_shift(4), name: _r(e) } }

function X5(e) { var t = ve(12 + 2 * e.name.length); return t.write_shift(4, e.flags), t.write_shift(4, e.version), lr(e.name, t), t.slice(0, t.l) }

function Y5(e) { for (var t = [], r = e.read_shift(4); r-- > 0;) t.push([e.read_shift(4), e.read_shift(4)]); return t }

function W5(e) { var t = ve(4 + 8 * e.length);
    t.write_shift(4, e.length); for (var r = 0; r < e.length; ++r) t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]); return t }

function K5(e, t) { var r = ve(8 + 2 * t.length); return r.write_shift(4, e), lr(t, r), r.slice(0, r.l) }

function Q5(e) { return e.l += 4, e.read_shift(4) != 0 }

function Z5(e, t) { var r = ve(8); return r.write_shift(4, e), r.write_shift(4, 1), r }

function $5() { var e = Pr(); return Ne(e, 332), Ne(e, 334, ja(1)), Ne(e, 335, X5({ name: "XLDAPR", version: 12e4, flags: 3496657072 })), Ne(e, 336), Ne(e, 339, K5(1, "XLDAPR")), Ne(e, 52), Ne(e, 35, ja(514)), Ne(e, 4096, ja(0)), Ne(e, 4097, ba(1)), Ne(e, 36), Ne(e, 53), Ne(e, 340), Ne(e, 337, Z5(1)), Ne(e, 51, W5([
        [1, 0]
    ])), Ne(e, 338), Ne(e, 333), e.end() }

function Vg() { var e = [Qt]; return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("") }

function J5(e) { var t = {};
    t.i = e.read_shift(4); var r = {};
    r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = At(r); var i = e.read_shift(1); return i & 2 && (t.l = "1"), i & 8 && (t.a = "1"), t }
var Cl = 1024;

function qg(e, t) { for (var r = [21600, 21600], i = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), l = [Be("xml", null, { "xmlns:v": $r.v, "xmlns:o": $r.o, "xmlns:x": $r.x, "xmlns:mv": $r.mv }).replace(/\/>/, ">"), Be("o:shapelayout", Be("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }), Be("v:shapetype", [Be("v:stroke", null, { joinstyle: "miter" }), Be("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: i })]; Cl < e * 1e3;) Cl += 1e3; return t.forEach(function(o) { var c = ir(o[0]),
            f = { color2: "#BEFF82", type: "gradient" };
        f.type == "gradient" && (f.angle = "-180"); var p = f.type == "gradient" ? Be("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null,
            x = Be("v:fill", p, f),
            m = { on: "t", obscured: "t" };++Cl, l = l.concat(["<v:shape" + no({ id: "_x0000_s" + Cl, type: "#_x0000_t202", style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (o[1].hidden ? ";visibility:hidden" : ""), fillcolor: "#ECFAD4", strokecolor: "#edeaa1" }) + ">", x, Be("v:shadow", null, m), Be("v:path", null, { "o:connecttype": "none" }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", xr("x:Anchor", [c.c + 1, 0, c.r + 1, 0, c.c + 3, 20, c.r + 5, 20].join(",")), xr("x:AutoFill", "False"), xr("x:Row", String(c.r)), xr("x:Column", String(c.c)), o[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"]) }), l.push("</xml>"), l.join("") }

function Xg(e) { var t = [Qt, Be("comments", null, { xmlns: Pl[0] })],
        r = []; return t.push("<authors>"), e.forEach(function(i) { i[1].forEach(function(l) { var o = bt(l.a);
            r.indexOf(o) == -1 && (r.push(o), t.push("<author>" + o + "</author>")), l.T && l.ID && r.indexOf("tc=" + l.ID) == -1 && (r.push("tc=" + l.ID), t.push("<author>tc=" + l.ID + "</author>")) }) }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(i) { var l = 0,
            o = []; if (i[1][0] && i[1][0].T && i[1][0].ID ? l = r.indexOf("tc=" + i[1][0].ID) : i[1].forEach(function(p) { p.a && (l = r.indexOf(bt(p.a))), o.push(p.t || "") }), t.push('<comment ref="' + i[0] + '" authorId="' + l + '"><text>'), o.length <= 1) t.push(xr("t", bt(o[0] || "")));
        else { for (var c = `Comment:
    ` + o[0] + `
`, f = 1; f < o.length; ++f) c += `Reply:
    ` + o[f] + `
`;
            t.push(xr("t", bt(c))) }
        t.push("</text></comment>") }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("") }

function e8(e, t, r) { var i = [Qt, Be("ThreadedComments", null, { xmlns: nr.TCMNT }).replace(/[\/]>/, ">")]; return e.forEach(function(l) { var o = "";
        (l[1] || []).forEach(function(c, f) { if (!c.T) { delete c.ID; return }
            c.a && t.indexOf(c.a) == -1 && t.push(c.a); var p = { ref: l[0], id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}" };
            f == 0 ? o = p.id : p.parentId = o, c.ID = p.id, c.a && (p.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(c.a)).slice(-12) + "}"), i.push(Be("threadedComment", xr("text", c.t || ""), p)) }) }), i.push("</ThreadedComments>"), i.join("") }

function t8(e) { var t = [Qt, Be("personList", null, { xmlns: nr.TCMNT, "xmlns:x": Pl[0] }).replace(/[\/]>/, ">")]; return e.forEach(function(r, i) { t.push(Be("person", null, { displayName: r, id: "{54EE7950-7262-4200-6969-" + ("000000000000" + i).slice(-12) + "}", userId: r, providerId: "None" })) }), t.push("</personList>"), t.join("") }

function r8(e) { var t = {};
    t.iauthor = e.read_shift(4); var r = Vi(e); return t.rfx = r.s, t.ref = At(r.s), e.l += 16, t }

function a8(e, t) { return t == null && (t = ve(36)), t.write_shift(4, e[1].iauthor), Il(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t }
var n8 = _r;

function i8(e) { return lr(e.slice(0, 54)) }

function l8(e) { var t = Pr(),
        r = []; return Ne(t, 628), Ne(t, 630), e.forEach(function(i) { i[1].forEach(function(l) { r.indexOf(l.a) > -1 || (r.push(l.a.slice(0, 54)), Ne(t, 632, i8(l.a))) }) }), Ne(t, 631), Ne(t, 633), e.forEach(function(i) { i[1].forEach(function(l) { l.iauthor = r.indexOf(l.a); var o = { s: ir(i[0]), e: ir(i[0]) };
            Ne(t, 635, a8([o, l])), l.t && l.t.length > 0 && Ne(t, 637, o_(l)), Ne(t, 636), delete l.iauthor }) }), Ne(t, 634), Ne(t, 629), t.end() }

function s8(e, t) { t.FullPaths.forEach(function(r, i) { if (i != 0) { var l = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
            l.slice(-1) !== "/" && _t.utils.cfb_add(e, l, t.FileIndex[i].content) } }) }
var Yg = ["xlsb", "xlsm", "xlam", "biff8", "xla"],
    o8 = function() { var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
            t = { r: 0, c: 0 };

        function r(i, l, o, c) { var f = !1,
                p = !1;
            o.length == 0 ? p = !0 : o.charAt(0) == "[" && (p = !0, o = o.slice(1, -1)), c.length == 0 ? f = !0 : c.charAt(0) == "[" && (f = !0, c = c.slice(1, -1)); var x = o.length > 0 ? parseInt(o, 10) | 0 : 0,
                m = c.length > 0 ? parseInt(c, 10) | 0 : 0; return f ? m += t.c : --m, p ? x += t.r : --x, l + (f ? "" : "$") + wr(m) + (p ? "" : "$") + pr(x) } return function(l, o) { return t = o, l.replace(e, r) } }(),
    qd = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
    Xd = function() { return function(t, r) { return t.replace(qd, function(i, l, o, c, f, p) { var x = Pd(c) - (o ? 0 : r.c),
                    m = Ud(p) - (f ? 0 : r.r),
                    g = m == 0 ? "" : f ? m + 1 : "[" + m + "]",
                    v = x == 0 ? "" : o ? x + 1 : "[" + x + "]"; return l + "R" + g + "C" + v }) } }();

function c8(e, t) { return e.replace(qd, function(r, i, l, o, c, f) { return i + (l == "$" ? l + o : wr(Pd(o) + t.c)) + (c == "$" ? c + f : pr(Ud(f) + t.r)) }) }

function u8(e) { return e.length != 1 }

function Wt(e) { e.l += 1 }

function $n(e, t) { var r = e.read_shift(2); return [r & 16383, r >> 14 & 1, r >> 15 & 1] }

function Wg(e, t, r) { var i = 2; if (r) { if (r.biff >= 2 && r.biff <= 5) return Kg(e);
        r.biff == 12 && (i = 4) } var l = e.read_shift(i),
        o = e.read_shift(i),
        c = $n(e),
        f = $n(e); return { s: { r: l, c: c[0], cRel: c[1], rRel: c[2] }, e: { r: o, c: f[0], cRel: f[1], rRel: f[2] } } }

function Kg(e) { var t = $n(e),
        r = $n(e),
        i = e.read_shift(1),
        l = e.read_shift(1); return { s: { r: t[0], c: i, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: l, cRel: r[1], rRel: r[2] } } }

function f8(e, t, r) { if (r.biff < 8) return Kg(e); var i = e.read_shift(r.biff == 12 ? 4 : 2),
        l = e.read_shift(r.biff == 12 ? 4 : 2),
        o = $n(e),
        c = $n(e); return { s: { r: i, c: o[0], cRel: o[1], rRel: o[2] }, e: { r: l, c: c[0], cRel: c[1], rRel: c[2] } } }

function Qg(e, t, r) { if (r && r.biff >= 2 && r.biff <= 5) return d8(e); var i = e.read_shift(r && r.biff == 12 ? 4 : 2),
        l = $n(e); return { r: i, c: l[0], cRel: l[1], rRel: l[2] } }

function d8(e) { var t = $n(e),
        r = e.read_shift(1); return { r: t[0], c: r, cRel: t[1], rRel: t[2] } }

function h8(e) { var t = e.read_shift(2),
        r = e.read_shift(2); return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 } }

function m8(e, t, r) { var i = r && r.biff ? r.biff : 8; if (i >= 2 && i <= 5) return x8(e); var l = e.read_shift(i >= 12 ? 4 : 2),
        o = e.read_shift(2),
        c = (o & 16384) >> 14,
        f = (o & 32768) >> 15; if (o &= 16383, f == 1)
        for (; l > 524287;) l -= 1048576; if (c == 1)
        for (; o > 8191;) o = o - 16384; return { r: l, c: o, cRel: c, rRel: f } }

function x8(e) { var t = e.read_shift(2),
        r = e.read_shift(1),
        i = (t & 32768) >> 15,
        l = (t & 16384) >> 14; return t &= 16383, i == 1 && t >= 8192 && (t = t - 16384), l == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: l, rRel: i } }

function p8(e, t, r) { var i = (e[e.l++] & 96) >> 5,
        l = Wg(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r); return [i, l] }

function g8(e, t, r) { var i = (e[e.l++] & 96) >> 5,
        l = e.read_shift(2, "i"),
        o = 8; if (r) switch (r.biff) {
        case 5:
            e.l += 12, o = 6; break;
        case 12:
            o = 12; break }
    var c = Wg(e, o, r); return [i, l, c] }

function v8(e, t, r) { var i = (e[e.l++] & 96) >> 5; return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [i] }

function y8(e, t, r) { var i = (e[e.l++] & 96) >> 5,
        l = e.read_shift(2),
        o = 8; if (r) switch (r.biff) {
        case 5:
            e.l += 12, o = 6; break;
        case 12:
            o = 12; break }
    return e.l += o, [i, l] }

function b8(e, t, r) { var i = (e[e.l++] & 96) >> 5,
        l = f8(e, t - 1, r); return [i, l] }

function A8(e, t, r) { var i = (e[e.l++] & 96) >> 5; return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [i] }

function Lp(e) { var t = e[e.l + 1] & 1,
        r = 1; return e.l += 4, [t, r] }

function E8(e, t, r) { e.l += 2; for (var i = e.read_shift(r && r.biff == 2 ? 1 : 2), l = [], o = 0; o <= i; ++o) l.push(e.read_shift(r && r.biff == 2 ? 1 : 2)); return l }

function w8(e, t, r) { var i = e[e.l + 1] & 255 ? 1 : 0; return e.l += 2, [i, e.read_shift(r && r.biff == 2 ? 1 : 2)] }

function _8(e, t, r) { var i = e[e.l + 1] & 255 ? 1 : 0; return e.l += 2, [i, e.read_shift(r && r.biff == 2 ? 1 : 2)] }

function T8(e) { var t = e[e.l + 1] & 255 ? 1 : 0; return e.l += 2, [t, e.read_shift(2)] }

function S8(e, t, r) { var i = e[e.l + 1] & 255 ? 1 : 0; return e.l += r && r.biff == 2 ? 3 : 4, [i] }

function Zg(e) { var t = e.read_shift(1),
        r = e.read_shift(1); return [t, r] }

function N8(e) { return e.read_shift(2), Zg(e) }

function C8(e) { return e.read_shift(2), Zg(e) }

function D8(e, t, r) { var i = (e[e.l] & 96) >> 5;
    e.l += 1; var l = Qg(e, 0, r); return [i, l] }

function O8(e, t, r) { var i = (e[e.l] & 96) >> 5;
    e.l += 1; var l = m8(e, 0, r); return [i, l] }

function R8(e, t, r) { var i = (e[e.l] & 96) >> 5;
    e.l += 1; var l = e.read_shift(2);
    r && r.biff == 5 && (e.l += 12); var o = Qg(e, 0, r); return [i, l, o] }

function F8(e, t, r) { var i = (e[e.l] & 96) >> 5;
    e.l += 1; var l = e.read_shift(r && r.biff <= 3 ? 1 : 2); return [FT[l], ev[l], i] }

function j8(e, t, r) { var i = e[e.l++],
        l = e.read_shift(1),
        o = r && r.biff <= 3 ? [i == 88 ? -1 : 0, e.read_shift(1)] : B8(e); return [l, (o[0] === 0 ? ev : RT)[o[1]]] }

function B8(e) { return [e[e.l + 1] >> 7, e.read_shift(2) & 32767] }

function k8(e, t, r) { e.l += r && r.biff == 2 ? 3 : 4 }

function M8(e, t, r) { if (e.l++, r && r.biff == 12) return [e.read_shift(4, "i"), 0]; var i = e.read_shift(2),
        l = e.read_shift(r && r.biff == 2 ? 1 : 2); return [i, l] }

function L8(e) { return e.l++, xo[e.read_shift(1)] }

function U8(e) { return e.l++, e.read_shift(2) }

function P8(e) { return e.l++, e.read_shift(1) !== 0 }

function z8(e) { return e.l++, Hl(e) }

function I8(e, t, r) { return e.l++, jg(e, t - 1, r) }

function H8(e, t) { var r = [e.read_shift(1)]; if (t == 12) switch (r[0]) {
        case 2:
            r[0] = 4; break;
        case 4:
            r[0] = 16; break;
        case 0:
            r[0] = 1; break;
        case 1:
            r[0] = 2; break }
    switch (r[0]) {
        case 4:
            r[1] = R_(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7); break;
        case 37:
        case 16:
            r[1] = xo[e[e.l]], e.l += t == 12 ? 4 : 8; break;
        case 0:
            e.l += 8; break;
        case 1:
            r[1] = Hl(e); break;
        case 2:
            r[1] = k_(e, 0, { biff: t > 0 && t < 8 ? 2 : t }); break;
        default:
            throw new Error("Bad SerAr: " + r[0]) } return r }

function G8(e, t, r) { for (var i = e.read_shift(r.biff == 12 ? 4 : 2), l = [], o = 0; o != i; ++o) l.push((r.biff == 12 ? Vi : U_)(e)); return l }

function V8(e, t, r) { var i = 0,
        l = 0;
    r.biff == 12 ? (i = e.read_shift(4), l = e.read_shift(4)) : (l = 1 + e.read_shift(1), i = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--i, --l == 0 && (l = 256)); for (var o = 0, c = []; o != i && (c[o] = []); ++o)
        for (var f = 0; f != l; ++f) c[o][f] = H8(e, r.biff); return c }

function q8(e, t, r) { var i = e.read_shift(1) >>> 5 & 3,
        l = !r || r.biff >= 8 ? 4 : 2,
        o = e.read_shift(l); switch (r.biff) {
        case 2:
            e.l += 5; break;
        case 3:
        case 4:
            e.l += 8; break;
        case 5:
            e.l += 12; break } return [i, 0, o] }

function X8(e, t, r) { if (r.biff == 5) return Y8(e); var i = e.read_shift(1) >>> 5 & 3,
        l = e.read_shift(2),
        o = e.read_shift(4); return [i, l, o] }

function Y8(e) { var t = e.read_shift(1) >>> 5 & 3,
        r = e.read_shift(2, "i");
    e.l += 8; var i = e.read_shift(2); return e.l += 12, [t, r, i] }

function W8(e, t, r) { var i = e.read_shift(1) >>> 5 & 3;
    e.l += r && r.biff == 2 ? 3 : 4; var l = e.read_shift(r && r.biff == 2 ? 1 : 2); return [i, l] }

function K8(e, t, r) { var i = e.read_shift(1) >>> 5 & 3,
        l = e.read_shift(r && r.biff == 2 ? 1 : 2); return [i, l] }

function Q8(e, t, r) { var i = e.read_shift(1) >>> 5 & 3; return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [i] }

function Z8(e, t, r) { var i = (e[e.l++] & 96) >> 5,
        l = e.read_shift(2),
        o = 4; if (r) switch (r.biff) {
        case 5:
            o = 15; break;
        case 12:
            o = 6; break }
    return e.l += o, [i, l] }
var $8 = Wa,
    J8 = Wa,
    eT = Wa;

function po(e, t, r) { return e.l += 2, [h8(e)] }

function Yd(e) { return e.l += 6, [] }
var tT = po,
    rT = Yd,
    aT = Yd,
    nT = po;

function $g(e) { return e.l += 2, [Rg(e), e.read_shift(2) & 1] }
var iT = po,
    lT = $g,
    sT = Yd,
    oT = po,
    cT = po,
    uT = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];

function fT(e) { e.l += 2; var t = e.read_shift(2),
        r = e.read_shift(2),
        i = e.read_shift(4),
        l = e.read_shift(2),
        o = e.read_shift(2),
        c = uT[r >> 2 & 31]; return { ixti: t, coltype: r & 3, rt: c, idx: i, c: l, C: o } }

function dT(e) { return e.l += 2, [e.read_shift(4)] }

function hT(e, t, r) { return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"] }

function mT(e, t, r) { return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"] }

function xT(e) { var t = e.read_shift(1) >>> 5 & 3,
        r = e.read_shift(2); return [t, r] }

function pT(e) { var t = e.read_shift(1) >>> 5 & 3,
        r = e.read_shift(2); return [t, r] }

function gT(e) { return e.l += 4, [0, 0] }
var Up = { 1: { n: "PtgExp", f: M8 }, 2: { n: "PtgTbl", f: eT }, 3: { n: "PtgAdd", f: Wt }, 4: { n: "PtgSub", f: Wt }, 5: { n: "PtgMul", f: Wt }, 6: { n: "PtgDiv", f: Wt }, 7: { n: "PtgPower", f: Wt }, 8: { n: "PtgConcat", f: Wt }, 9: { n: "PtgLt", f: Wt }, 10: { n: "PtgLe", f: Wt }, 11: { n: "PtgEq", f: Wt }, 12: { n: "PtgGe", f: Wt }, 13: { n: "PtgGt", f: Wt }, 14: { n: "PtgNe", f: Wt }, 15: { n: "PtgIsect", f: Wt }, 16: { n: "PtgUnion", f: Wt }, 17: { n: "PtgRange", f: Wt }, 18: { n: "PtgUplus", f: Wt }, 19: { n: "PtgUminus", f: Wt }, 20: { n: "PtgPercent", f: Wt }, 21: { n: "PtgParen", f: Wt }, 22: { n: "PtgMissArg", f: Wt }, 23: { n: "PtgStr", f: I8 }, 26: { n: "PtgSheet", f: hT }, 27: { n: "PtgEndSheet", f: mT }, 28: { n: "PtgErr", f: L8 }, 29: { n: "PtgBool", f: P8 }, 30: { n: "PtgInt", f: U8 }, 31: { n: "PtgNum", f: z8 }, 32: { n: "PtgArray", f: A8 }, 33: { n: "PtgFunc", f: F8 }, 34: { n: "PtgFuncVar", f: j8 }, 35: { n: "PtgName", f: q8 }, 36: { n: "PtgRef", f: D8 }, 37: { n: "PtgArea", f: p8 }, 38: { n: "PtgMemArea", f: W8 }, 39: { n: "PtgMemErr", f: $8 }, 40: { n: "PtgMemNoMem", f: J8 }, 41: { n: "PtgMemFunc", f: K8 }, 42: { n: "PtgRefErr", f: Q8 }, 43: { n: "PtgAreaErr", f: v8 }, 44: { n: "PtgRefN", f: O8 }, 45: { n: "PtgAreaN", f: b8 }, 46: { n: "PtgMemAreaN", f: xT }, 47: { n: "PtgMemNoMemN", f: pT }, 57: { n: "PtgNameX", f: X8 }, 58: { n: "PtgRef3d", f: R8 }, 59: { n: "PtgArea3d", f: g8 }, 60: { n: "PtgRefErr3d", f: Z8 }, 61: { n: "PtgAreaErr3d", f: y8 }, 255: {} },
    vT = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 },
    yT = { 1: { n: "PtgElfLel", f: $g }, 2: { n: "PtgElfRw", f: oT }, 3: { n: "PtgElfCol", f: tT }, 6: { n: "PtgElfRwV", f: cT }, 7: { n: "PtgElfColV", f: nT }, 10: { n: "PtgElfRadical", f: iT }, 11: { n: "PtgElfRadicalS", f: sT }, 13: { n: "PtgElfColS", f: rT }, 15: { n: "PtgElfColSV", f: aT }, 16: { n: "PtgElfRadicalLel", f: lT }, 25: { n: "PtgList", f: fT }, 29: { n: "PtgSxName", f: dT }, 255: {} },
    bT = { 0: { n: "PtgAttrNoop", f: gT }, 1: { n: "PtgAttrSemi", f: S8 }, 2: { n: "PtgAttrIf", f: _8 }, 4: { n: "PtgAttrChoose", f: E8 }, 8: { n: "PtgAttrGoto", f: w8 }, 16: { n: "PtgAttrSum", f: k8 }, 32: { n: "PtgAttrBaxcel", f: Lp }, 33: { n: "PtgAttrBaxcel", f: Lp }, 64: { n: "PtgAttrSpace", f: N8 }, 65: { n: "PtgAttrSpaceSemi", f: C8 }, 128: { n: "PtgAttrIfError", f: T8 }, 255: {} };

function AT(e, t, r, i) { if (i.biff < 8) return Wa(e, t); for (var l = e.l + t, o = [], c = 0; c !== r.length; ++c) switch (r[c][0]) {
        case "PtgArray":
            r[c][1] = V8(e, 0, i), o.push(r[c][1]); break;
        case "PtgMemArea":
            r[c][2] = G8(e, r[c][1], i), o.push(r[c][2]); break;
        case "PtgExp":
            i && i.biff == 12 && (r[c][1][1] = e.read_shift(4), o.push(r[c][1])); break;
        case "PtgList":
        case "PtgElfRadicalS":
        case "PtgElfColS":
        case "PtgElfColSV":
            throw "Unsupported " + r[c][0] }
    return t = l - e.l, t !== 0 && o.push(Wa(e, t)), o }

function ET(e, t, r) { for (var i = e.l + t, l, o, c = []; i != e.l;) t = i - e.l, o = e[e.l], l = Up[o] || Up[vT[o]], (o === 24 || o === 25) && (l = (o === 24 ? yT : bT)[e[e.l + 1]]), !l || !l.f ? Wa(e, t) : c.push([l.n, l.f(e, t, r)]); return c }

function wT(e) { for (var t = [], r = 0; r < e.length; ++r) { for (var i = e[r], l = [], o = 0; o < i.length; ++o) { var c = i[o]; if (c) switch (c[0]) {
                case 2:
                    l.push('"' + c[1].replace(/"/g, '""') + '"'); break;
                default:
                    l.push(c[1]) } else l.push("") }
        t.push(l.join(",")) } return t.join(";") }
var _T = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };

function TT(e, t) { if (!e && !(t && t.biff <= 5 && t.biff >= 2)) throw new Error("empty sheet name"); return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e }

function Jg(e, t, r) { if (!e) return "SH33TJSERR0"; if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t]; if (!e.XTI) return "SH33TJSERR6"; var i = e.XTI[t]; if (r.biff < 8) return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1]; if (!i) return "SH33TJSERR1"; var l = ""; if (r.biff > 8) switch (e[i[0]][0]) {
        case 357:
            return l = i[1] == -1 ? "#REF" : e.SheetNames[i[1]], i[1] == i[2] ? l : l + ":" + e.SheetNames[i[2]];
        case 358:
            return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[i[0]][0];
        case 355:
        default:
            return "SH33TJSSRC" + e[i[0]][0] }
    switch (e[i[0]][0][0]) {
        case 1025:
            return l = i[1] == -1 ? "#REF" : e.SheetNames[i[1]] || "SH33TJSERR3", i[1] == i[2] ? l : l + ":" + e.SheetNames[i[2]];
        case 14849:
            return e[i[0]].slice(1).map(function(o) { return o.Name }).join(";;");
        default:
            return e[i[0]][0][3] ? (l = i[1] == -1 ? "#REF" : e[i[0]][0][3][i[1]] || "SH33TJSERR4", i[1] == i[2] ? l : l + ":" + e[i[0]][0][3][i[2]]) : "SH33TJSERR2" } }

function Pp(e, t, r) { var i = Jg(e, t, r); return i == "#REF" ? i : TT(i, r) }

function Bl(e, t, r, i, l) { var o = l && l.biff || 8,
        c = { s: { c: 0, r: 0 } },
        f = [],
        p, x, m, g = 0,
        v = 0,
        b, A = ""; if (!e[0] || !e[0][0]) return ""; for (var E = -1, w = "", S = 0, O = e[0].length; S < O; ++S) { var D = e[0][S]; switch (D[0]) {
            case "PtgUminus":
                f.push("-" + f.pop()); break;
            case "PtgUplus":
                f.push("+" + f.pop()); break;
            case "PtgPercent":
                f.push(f.pop() + "%"); break;
            case "PtgAdd":
            case "PtgConcat":
            case "PtgDiv":
            case "PtgEq":
            case "PtgGe":
            case "PtgGt":
            case "PtgLe":
            case "PtgLt":
            case "PtgMul":
            case "PtgNe":
            case "PtgPower":
            case "PtgSub":
                if (p = f.pop(), x = f.pop(), E >= 0) { switch (e[0][E][1][0]) {
                        case 0:
                            w = Pt(" ", e[0][E][1][1]); break;
                        case 1:
                            w = Pt("\r", e[0][E][1][1]); break;
                        default:
                            if (w = "", l.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][E][1][0]) }
                    x = x + w, E = -1 }
                f.push(x + _T[D[0]] + p); break;
            case "PtgIsect":
                p = f.pop(), x = f.pop(), f.push(x + " " + p); break;
            case "PtgUnion":
                p = f.pop(), x = f.pop(), f.push(x + "," + p); break;
            case "PtgRange":
                p = f.pop(), x = f.pop(), f.push(x + ":" + p); break;
            case "PtgAttrChoose":
                break;
            case "PtgAttrGoto":
                break;
            case "PtgAttrIf":
                break;
            case "PtgAttrIfError":
                break;
            case "PtgRef":
                m = Ys(D[1][1], c, l), f.push(Ws(m, o)); break;
            case "PtgRefN":
                m = r ? Ys(D[1][1], r, l) : D[1][1], f.push(Ws(m, o)); break;
            case "PtgRef3d":
                g = D[1][1], m = Ys(D[1][2], c, l), A = Pp(i, g, l), f.push(A + "!" + Ws(m, o)); break;
            case "PtgFunc":
            case "PtgFuncVar":
                var F = D[1][0],
                    K = D[1][1];
                F || (F = 0), F &= 127; var I = F == 0 ? [] : f.slice(-F);
                f.length -= F, K === "User" && (K = I.shift()), f.push(K + "(" + I.join(",") + ")"); break;
            case "PtgBool":
                f.push(D[1] ? "TRUE" : "FALSE"); break;
            case "PtgInt":
                f.push(D[1]); break;
            case "PtgNum":
                f.push(String(D[1])); break;
            case "PtgStr":
                f.push('"' + D[1].replace(/"/g, '""') + '"'); break;
            case "PtgErr":
                f.push(D[1]); break;
            case "PtgAreaN":
                b = wp(D[1][1], r ? { s: r } : c, l), f.push(Xf(b, l)); break;
            case "PtgArea":
                b = wp(D[1][1], c, l), f.push(Xf(b, l)); break;
            case "PtgArea3d":
                g = D[1][1], b = D[1][2], A = Pp(i, g, l), f.push(A + "!" + Xf(b, l)); break;
            case "PtgAttrSum":
                f.push("SUM(" + f.pop() + ")"); break;
            case "PtgAttrBaxcel":
            case "PtgAttrSemi":
                break;
            case "PtgName":
                v = D[1][2]; var V = (i.names || [])[v - 1] || (i[0] || [])[v],
                    N = V ? V.Name : "SH33TJSNAME" + String(v);
                N && N.slice(0, 6) == "_xlfn." && !l.xlfn && (N = N.slice(6)), f.push(N); break;
            case "PtgNameX":
                var _ = D[1][1];
                v = D[1][2]; var U; if (l.biff <= 5) _ < 0 && (_ = -_), i[_] && (U = i[_][v]);
                else { var q = ""; if (((i[_] || [])[0] || [])[0] == 14849 || (((i[_] || [])[0] || [])[0] == 1025 ? i[_][v] && i[_][v].itab > 0 && (q = i.SheetNames[i[_][v].itab - 1] + "!") : q = i.SheetNames[v - 1] + "!"), i[_] && i[_][v]) q += i[_][v].Name;
                    else if (i[0] && i[0][v]) q += i[0][v].Name;
                    else { var H = (Jg(i, _, l) || "").split(";;");
                        H[v - 1] ? q = H[v - 1] : q += "SH33TJSERRX" }
                    f.push(q); break }
                U || (U = { Name: "SH33TJSERRY" }), f.push(U.Name); break;
            case "PtgParen":
                var W = "(",
                    ee = ")"; if (E >= 0) { switch (w = "", e[0][E][1][0]) {
                        case 2:
                            W = Pt(" ", e[0][E][1][1]) + W; break;
                        case 3:
                            W = Pt("\r", e[0][E][1][1]) + W; break;
                        case 4:
                            ee = Pt(" ", e[0][E][1][1]) + ee; break;
                        case 5:
                            ee = Pt("\r", e[0][E][1][1]) + ee; break;
                        default:
                            if (l.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][E][1][0]) }
                    E = -1 }
                f.push(W + f.pop() + ee); break;
            case "PtgRefErr":
                f.push("#REF!"); break;
            case "PtgRefErr3d":
                f.push("#REF!"); break;
            case "PtgExp":
                m = { c: D[1][1], r: D[1][0] }; var re = { c: r.c, r: r.r }; if (i.sharedf[At(m)]) { var B = i.sharedf[At(m)];
                    f.push(Bl(B, c, re, i, l)) } else { var C = !1; for (p = 0; p != i.arrayf.length; ++p)
                        if (x = i.arrayf[p], !(m.c < x[0].s.c || m.c > x[0].e.c) && !(m.r < x[0].s.r || m.r > x[0].e.r)) { f.push(Bl(x[1], c, re, i, l)), C = !0; break }
                    C || f.push(D[1]) } break;
            case "PtgArray":
                f.push("{" + wT(D[1]) + "}"); break;
            case "PtgMemArea":
                break;
            case "PtgAttrSpace":
            case "PtgAttrSpaceSemi":
                E = S; break;
            case "PtgTbl":
                break;
            case "PtgMemErr":
                break;
            case "PtgMissArg":
                f.push(""); break;
            case "PtgAreaErr":
                f.push("#REF!"); break;
            case "PtgAreaErr3d":
                f.push("#REF!"); break;
            case "PtgList":
                f.push("Table" + D[1].idx + "[#" + D[1].rt + "]"); break;
            case "PtgMemAreaN":
            case "PtgMemNoMemN":
            case "PtgAttrNoop":
            case "PtgSheet":
            case "PtgEndSheet":
                break;
            case "PtgMemFunc":
                break;
            case "PtgMemNoMem":
                break;
            case "PtgElfCol":
            case "PtgElfColS":
            case "PtgElfColSV":
            case "PtgElfColV":
            case "PtgElfLel":
            case "PtgElfRadical":
            case "PtgElfRadicalLel":
            case "PtgElfRadicalS":
            case "PtgElfRw":
            case "PtgElfRwV":
                throw new Error("Unsupported ELFs");
            case "PtgSxName":
                throw new Error("Unrecognized Formula Token: " + String(D));
            default:
                throw new Error("Unrecognized Formula Token: " + String(D)) } var se = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"]; if (l.biff != 3 && E >= 0 && se.indexOf(e[0][S][0]) == -1) { D = e[0][E]; var te = !0; switch (D[1][0]) {
                case 4:
                    te = !1;
                case 0:
                    w = Pt(" ", D[1][1]); break;
                case 5:
                    te = !1;
                case 1:
                    w = Pt("\r", D[1][1]); break;
                default:
                    if (w = "", l.WTF) throw new Error("Unexpected PtgAttrSpaceType " + D[1][0]) }
            f.push((te ? w : "") + f.pop() + (te ? "" : w)), E = -1 } } if (f.length > 1 && l.WTF) throw new Error("bad formula stack"); return f[0] }

function ST(e) { if (e == null) { var t = ve(8); return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t } else if (typeof e == "number") return Li(e); return Li(0) }

function NT(e, t, r, i, l) { var o = Ui(t, r, l),
        c = ST(e.v),
        f = ve(6),
        p = 33;
    f.write_shift(2, p), f.write_shift(4, 0); for (var x = ve(e.bf.length), m = 0; m < e.bf.length; ++m) x[m] = e.bf[m]; var g = mr([o, c, f, x]); return g }

function Su(e, t, r) { var i = e.read_shift(4),
        l = ET(e, i, r),
        o = e.read_shift(4),
        c = o > 0 ? AT(e, o, l, r) : null; return [l, c] }
var CT = Su,
    Nu = Su,
    DT = Su,
    OT = Su,
    RT = { 0: "BEEP", 1: "OPEN", 2: "OPEN.LINKS", 3: "CLOSE.ALL", 4: "SAVE", 5: "SAVE.AS", 6: "FILE.DELETE", 7: "PAGE.SETUP", 8: "PRINT", 9: "PRINTER.SETUP", 10: "QUIT", 11: "NEW.WINDOW", 12: "ARRANGE.ALL", 13: "WINDOW.SIZE", 14: "WINDOW.MOVE", 15: "FULL", 16: "CLOSE", 17: "RUN", 22: "SET.PRINT.AREA", 23: "SET.PRINT.TITLES", 24: "SET.PAGE.BREAK", 25: "REMOVE.PAGE.BREAK", 26: "FONT", 27: "DISPLAY", 28: "PROTECT.DOCUMENT", 29: "PRECISION", 30: "A1.R1C1", 31: "CALCULATE.NOW", 32: "CALCULATION", 34: "DATA.FIND", 35: "EXTRACT", 36: "DATA.DELETE", 37: "SET.DATABASE", 38: "SET.CRITERIA", 39: "SORT", 40: "DATA.SERIES", 41: "TABLE", 42: "FORMAT.NUMBER", 43: "ALIGNMENT", 44: "STYLE", 45: "BORDER", 46: "CELL.PROTECTION", 47: "COLUMN.WIDTH", 48: "UNDO", 49: "CUT", 50: "COPY", 51: "PASTE", 52: "CLEAR", 53: "PASTE.SPECIAL", 54: "EDIT.DELETE", 55: "INSERT", 56: "FILL.RIGHT", 57: "FILL.DOWN", 61: "DEFINE.NAME", 62: "CREATE.NAMES", 63: "FORMULA.GOTO", 64: "FORMULA.FIND", 65: "SELECT.LAST.CELL", 66: "SHOW.ACTIVE.CELL", 67: "GALLERY.AREA", 68: "GALLERY.BAR", 69: "GALLERY.COLUMN", 70: "GALLERY.LINE", 71: "GALLERY.PIE", 72: "GALLERY.SCATTER", 73: "COMBINATION", 74: "PREFERRED", 75: "ADD.OVERLAY", 76: "GRIDLINES", 77: "SET.PREFERRED", 78: "AXES", 79: "LEGEND", 80: "ATTACH.TEXT", 81: "ADD.ARROW", 82: "SELECT.CHART", 83: "SELECT.PLOT.AREA", 84: "PATTERNS", 85: "MAIN.CHART", 86: "OVERLAY", 87: "SCALE", 88: "FORMAT.LEGEND", 89: "FORMAT.TEXT", 90: "EDIT.REPEAT", 91: "PARSE", 92: "JUSTIFY", 93: "HIDE", 94: "UNHIDE", 95: "WORKSPACE", 96: "FORMULA", 97: "FORMULA.FILL", 98: "FORMULA.ARRAY", 99: "DATA.FIND.NEXT", 100: "DATA.FIND.PREV", 101: "FORMULA.FIND.NEXT", 102: "FORMULA.FIND.PREV", 103: "ACTIVATE", 104: "ACTIVATE.NEXT", 105: "ACTIVATE.PREV", 106: "UNLOCKED.NEXT", 107: "UNLOCKED.PREV", 108: "COPY.PICTURE", 109: "SELECT", 110: "DELETE.NAME", 111: "DELETE.FORMAT", 112: "VLINE", 113: "HLINE", 114: "VPAGE", 115: "HPAGE", 116: "VSCROLL", 117: "HSCROLL", 118: "ALERT", 119: "NEW", 120: "CANCEL.COPY", 121: "SHOW.CLIPBOARD", 122: "MESSAGE", 124: "PASTE.LINK", 125: "APP.ACTIVATE", 126: "DELETE.ARROW", 127: "ROW.HEIGHT", 128: "FORMAT.MOVE", 129: "FORMAT.SIZE", 130: "FORMULA.REPLACE", 131: "SEND.KEYS", 132: "SELECT.SPECIAL", 133: "APPLY.NAMES", 134: "REPLACE.FONT", 135: "FREEZE.PANES", 136: "SHOW.INFO", 137: "SPLIT", 138: "ON.WINDOW", 139: "ON.DATA", 140: "DISABLE.INPUT", 142: "OUTLINE", 143: "LIST.NAMES", 144: "FILE.CLOSE", 145: "SAVE.WORKBOOK", 146: "DATA.FORM", 147: "COPY.CHART", 148: "ON.TIME", 149: "WAIT", 150: "FORMAT.FONT", 151: "FILL.UP", 152: "FILL.LEFT", 153: "DELETE.OVERLAY", 155: "SHORT.MENUS", 159: "SET.UPDATE.STATUS", 161: "COLOR.PALETTE", 162: "DELETE.STYLE", 163: "WINDOW.RESTORE", 164: "WINDOW.MAXIMIZE", 166: "CHANGE.LINK", 167: "CALCULATE.DOCUMENT", 168: "ON.KEY", 169: "APP.RESTORE", 170: "APP.MOVE", 171: "APP.SIZE", 172: "APP.MINIMIZE", 173: "APP.MAXIMIZE", 174: "BRING.TO.FRONT", 175: "SEND.TO.BACK", 185: "MAIN.CHART.TYPE", 186: "OVERLAY.CHART.TYPE", 187: "SELECT.END", 188: "OPEN.MAIL", 189: "SEND.MAIL", 190: "STANDARD.FONT", 191: "CONSOLIDATE", 192: "SORT.SPECIAL", 193: "GALLERY.3D.AREA", 194: "GALLERY.3D.COLUMN", 195: "GALLERY.3D.LINE", 196: "GALLERY.3D.PIE", 197: "VIEW.3D", 198: "GOAL.SEEK", 199: "WORKGROUP", 200: "FILL.GROUP", 201: "UPDATE.LINK", 202: "PROMOTE", 203: "DEMOTE", 204: "SHOW.DETAIL", 206: "UNGROUP", 207: "OBJECT.PROPERTIES", 208: "SAVE.NEW.OBJECT", 209: "SHARE", 210: "SHARE.NAME", 211: "DUPLICATE", 212: "APPLY.STYLE", 213: "ASSIGN.TO.OBJECT", 214: "OBJECT.PROTECTION", 215: "HIDE.OBJECT", 216: "SET.EXTRACT", 217: "CREATE.PUBLISHER", 218: "SUBSCRIBE.TO", 219: "ATTRIBUTES", 220: "SHOW.TOOLBAR", 222: "PRINT.PREVIEW", 223: "EDIT.COLOR", 224: "SHOW.LEVELS", 225: "FORMAT.MAIN", 226: "FORMAT.OVERLAY", 227: "ON.RECALC", 228: "EDIT.SERIES", 229: "DEFINE.STYLE", 240: "LINE.PRINT", 243: "ENTER.DATA", 249: "GALLERY.RADAR", 250: "MERGE.STYLES", 251: "EDITION.OPTIONS", 252: "PASTE.PICTURE", 253: "PASTE.PICTURE.LINK", 254: "SPELLING", 256: "ZOOM", 259: "INSERT.OBJECT", 260: "WINDOW.MINIMIZE", 265: "SOUND.NOTE", 266: "SOUND.PLAY", 267: "FORMAT.SHAPE", 268: "EXTEND.POLYGON", 269: "FORMAT.AUTO", 272: "GALLERY.3D.BAR", 273: "GALLERY.3D.SURFACE", 274: "FILL.AUTO", 276: "CUSTOMIZE.TOOLBAR", 277: "ADD.TOOL", 278: "EDIT.OBJECT", 279: "ON.DOUBLECLICK", 280: "ON.ENTRY", 281: "WORKBOOK.ADD", 282: "WORKBOOK.MOVE", 283: "WORKBOOK.COPY", 284: "WORKBOOK.OPTIONS", 285: "SAVE.WORKSPACE", 288: "CHART.WIZARD", 289: "DELETE.TOOL", 290: "MOVE.TOOL", 291: "WORKBOOK.SELECT", 292: "WORKBOOK.ACTIVATE", 293: "ASSIGN.TO.TOOL", 295: "COPY.TOOL", 296: "RESET.TOOL", 297: "CONSTRAIN.NUMERIC", 298: "PASTE.TOOL", 302: "WORKBOOK.NEW", 305: "SCENARIO.CELLS", 306: "SCENARIO.DELETE", 307: "SCENARIO.ADD", 308: "SCENARIO.EDIT", 309: "SCENARIO.SHOW", 310: "SCENARIO.SHOW.NEXT", 311: "SCENARIO.SUMMARY", 312: "PIVOT.TABLE.WIZARD", 313: "PIVOT.FIELD.PROPERTIES", 314: "PIVOT.FIELD", 315: "PIVOT.ITEM", 316: "PIVOT.ADD.FIELDS", 318: "OPTIONS.CALCULATION", 319: "OPTIONS.EDIT", 320: "OPTIONS.VIEW", 321: "ADDIN.MANAGER", 322: "MENU.EDITOR", 323: "ATTACH.TOOLBARS", 324: "VBAActivate", 325: "OPTIONS.CHART", 328: "VBA.INSERT.FILE", 330: "VBA.PROCEDURE.DEFINITION", 336: "ROUTING.SLIP", 338: "ROUTE.DOCUMENT", 339: "MAIL.LOGON", 342: "INSERT.PICTURE", 343: "EDIT.TOOL", 344: "GALLERY.DOUGHNUT", 350: "CHART.TREND", 352: "PIVOT.ITEM.PROPERTIES", 354: "WORKBOOK.INSERT", 355: "OPTIONS.TRANSITION", 356: "OPTIONS.GENERAL", 370: "FILTER.ADVANCED", 373: "MAIL.ADD.MAILER", 374: "MAIL.DELETE.MAILER", 375: "MAIL.REPLY", 376: "MAIL.REPLY.ALL", 377: "MAIL.FORWARD", 378: "MAIL.NEXT.LETTER", 379: "DATA.LABEL", 380: "INSERT.TITLE", 381: "FONT.PROPERTIES", 382: "MACRO.OPTIONS", 383: "WORKBOOK.HIDE", 384: "WORKBOOK.UNHIDE", 385: "WORKBOOK.DELETE", 386: "WORKBOOK.NAME", 388: "GALLERY.CUSTOM", 390: "ADD.CHART.AUTOFORMAT", 391: "DELETE.CHART.AUTOFORMAT", 392: "CHART.ADD.DATA", 393: "AUTO.OUTLINE", 394: "TAB.ORDER", 395: "SHOW.DIALOG", 396: "SELECT.ALL", 397: "UNGROUP.SHEETS", 398: "SUBTOTAL.CREATE", 399: "SUBTOTAL.REMOVE", 400: "RENAME.OBJECT", 412: "WORKBOOK.SCROLL", 413: "WORKBOOK.NEXT", 414: "WORKBOOK.PREV", 415: "WORKBOOK.TAB.SPLIT", 416: "FULL.SCREEN", 417: "WORKBOOK.PROTECT", 420: "SCROLLBAR.PROPERTIES", 421: "PIVOT.SHOW.PAGES", 422: "TEXT.TO.COLUMNS", 423: "FORMAT.CHARTTYPE", 424: "LINK.FORMAT", 425: "TRACER.DISPLAY", 430: "TRACER.NAVIGATE", 431: "TRACER.CLEAR", 432: "TRACER.ERROR", 433: "PIVOT.FIELD.GROUP", 434: "PIVOT.FIELD.UNGROUP", 435: "CHECKBOX.PROPERTIES", 436: "LABEL.PROPERTIES", 437: "LISTBOX.PROPERTIES", 438: "EDITBOX.PROPERTIES", 439: "PIVOT.REFRESH", 440: "LINK.COMBO", 441: "OPEN.TEXT", 442: "HIDE.DIALOG", 443: "SET.DIALOG.FOCUS", 444: "ENABLE.OBJECT", 445: "PUSHBUTTON.PROPERTIES", 446: "SET.DIALOG.DEFAULT", 447: "FILTER", 448: "FILTER.SHOW.ALL", 449: "CLEAR.OUTLINE", 450: "FUNCTION.WIZARD", 451: "ADD.LIST.ITEM", 452: "SET.LIST.ITEM", 453: "REMOVE.LIST.ITEM", 454: "SELECT.LIST.ITEM", 455: "SET.CONTROL.VALUE", 456: "SAVE.COPY.AS", 458: "OPTIONS.LISTS.ADD", 459: "OPTIONS.LISTS.DELETE", 460: "SERIES.AXES", 461: "SERIES.X", 462: "SERIES.Y", 463: "ERRORBAR.X", 464: "ERRORBAR.Y", 465: "FORMAT.CHART", 466: "SERIES.ORDER", 467: "MAIL.LOGOFF", 468: "CLEAR.ROUTING.SLIP", 469: "APP.ACTIVATE.MICROSOFT", 470: "MAIL.EDIT.MAILER", 471: "ON.SHEET", 472: "STANDARD.WIDTH", 473: "SCENARIO.MERGE", 474: "SUMMARY.INFO", 475: "FIND.FILE", 476: "ACTIVE.CELL.FONT", 477: "ENABLE.TIPWIZARD", 478: "VBA.MAKE.ADDIN", 480: "INSERTDATATABLE", 481: "WORKGROUP.OPTIONS", 482: "MAIL.SEND.MAILER", 485: "AUTOCORRECT", 489: "POST.DOCUMENT", 491: "PICKLIST", 493: "VIEW.SHOW", 494: "VIEW.DEFINE", 495: "VIEW.DELETE", 509: "SHEET.BACKGROUND", 510: "INSERT.MAP.OBJECT", 511: "OPTIONS.MENONO", 517: "MSOCHECKS", 518: "NORMAL", 519: "LAYOUT", 520: "RM.PRINT.AREA", 521: "CLEAR.PRINT.AREA", 522: "ADD.PRINT.AREA", 523: "MOVE.BRK", 545: "HIDECURR.NOTE", 546: "HIDEALL.NOTES", 547: "DELETE.NOTE", 548: "TRAVERSE.NOTES", 549: "ACTIVATE.NOTES", 620: "PROTECT.REVISIONS", 621: "UNPROTECT.REVISIONS", 647: "OPTIONS.ME", 653: "WEB.PUBLISH", 667: "NEWWEBQUERY", 673: "PIVOT.TABLE.CHART", 753: "OPTIONS.SAVE", 755: "OPTIONS.SPELL", 808: "HIDEALL.INKANNOTS" },
    ev = { 0: "COUNT", 1: "IF", 2: "ISNA", 3: "ISERROR", 4: "SUM", 5: "AVERAGE", 6: "MIN", 7: "MAX", 8: "ROW", 9: "COLUMN", 10: "NA", 11: "NPV", 12: "STDEV", 13: "DOLLAR", 14: "FIXED", 15: "SIN", 16: "COS", 17: "TAN", 18: "ATAN", 19: "PI", 20: "SQRT", 21: "EXP", 22: "LN", 23: "LOG10", 24: "ABS", 25: "INT", 26: "SIGN", 27: "ROUND", 28: "LOOKUP", 29: "INDEX", 30: "REPT", 31: "MID", 32: "LEN", 33: "VALUE", 34: "TRUE", 35: "FALSE", 36: "AND", 37: "OR", 38: "NOT", 39: "MOD", 40: "DCOUNT", 41: "DSUM", 42: "DAVERAGE", 43: "DMIN", 44: "DMAX", 45: "DSTDEV", 46: "VAR", 47: "DVAR", 48: "TEXT", 49: "LINEST", 50: "TREND", 51: "LOGEST", 52: "GROWTH", 53: "GOTO", 54: "HALT", 55: "RETURN", 56: "PV", 57: "FV", 58: "NPER", 59: "PMT", 60: "RATE", 61: "MIRR", 62: "IRR", 63: "RAND", 64: "MATCH", 65: "DATE", 66: "TIME", 67: "DAY", 68: "MONTH", 69: "YEAR", 70: "WEEKDAY", 71: "HOUR", 72: "MINUTE", 73: "SECOND", 74: "NOW", 75: "AREAS", 76: "ROWS", 77: "COLUMNS", 78: "OFFSET", 79: "ABSREF", 80: "RELREF", 81: "ARGUMENT", 82: "SEARCH", 83: "TRANSPOSE", 84: "ERROR", 85: "STEP", 86: "TYPE", 87: "ECHO", 88: "SET.NAME", 89: "CALLER", 90: "DEREF", 91: "WINDOWS", 92: "SERIES", 93: "DOCUMENTS", 94: "ACTIVE.CELL", 95: "SELECTION", 96: "RESULT", 97: "ATAN2", 98: "ASIN", 99: "ACOS", 100: "CHOOSE", 101: "HLOOKUP", 102: "VLOOKUP", 103: "LINKS", 104: "INPUT", 105: "ISREF", 106: "GET.FORMULA", 107: "GET.NAME", 108: "SET.VALUE", 109: "LOG", 110: "EXEC", 111: "CHAR", 112: "LOWER", 113: "UPPER", 114: "PROPER", 115: "LEFT", 116: "RIGHT", 117: "EXACT", 118: "TRIM", 119: "REPLACE", 120: "SUBSTITUTE", 121: "CODE", 122: "NAMES", 123: "DIRECTORY", 124: "FIND", 125: "CELL", 126: "ISERR", 127: "ISTEXT", 128: "ISNUMBER", 129: "ISBLANK", 130: "T", 131: "N", 132: "FOPEN", 133: "FCLOSE", 134: "FSIZE", 135: "FREADLN", 136: "FREAD", 137: "FWRITELN", 138: "FWRITE", 139: "FPOS", 140: "DATEVALUE", 141: "TIMEVALUE", 142: "SLN", 143: "SYD", 144: "DDB", 145: "GET.DEF", 146: "REFTEXT", 147: "TEXTREF", 148: "INDIRECT", 149: "REGISTER", 150: "CALL", 151: "ADD.BAR", 152: "ADD.MENU", 153: "ADD.COMMAND", 154: "ENABLE.COMMAND", 155: "CHECK.COMMAND", 156: "RENAME.COMMAND", 157: "SHOW.BAR", 158: "DELETE.MENU", 159: "DELETE.COMMAND", 160: "GET.CHART.ITEM", 161: "DIALOG.BOX", 162: "CLEAN", 163: "MDETERM", 164: "MINVERSE", 165: "MMULT", 166: "FILES", 167: "IPMT", 168: "PPMT", 169: "COUNTA", 170: "CANCEL.KEY", 171: "FOR", 172: "WHILE", 173: "BREAK", 174: "NEXT", 175: "INITIATE", 176: "REQUEST", 177: "POKE", 178: "EXECUTE", 179: "TERMINATE", 180: "RESTART", 181: "HELP", 182: "GET.BAR", 183: "PRODUCT", 184: "FACT", 185: "GET.CELL", 186: "GET.WORKSPACE", 187: "GET.WINDOW", 188: "GET.DOCUMENT", 189: "DPRODUCT", 190: "ISNONTEXT", 191: "GET.NOTE", 192: "NOTE", 193: "STDEVP", 194: "VARP", 195: "DSTDEVP", 196: "DVARP", 197: "TRUNC", 198: "ISLOGICAL", 199: "DCOUNTA", 200: "DELETE.BAR", 201: "UNREGISTER", 204: "USDOLLAR", 205: "FINDB", 206: "SEARCHB", 207: "REPLACEB", 208: "LEFTB", 209: "RIGHTB", 210: "MIDB", 211: "LENB", 212: "ROUNDUP", 213: "ROUNDDOWN", 214: "ASC", 215: "DBCS", 216: "RANK", 219: "ADDRESS", 220: "DAYS360", 221: "TODAY", 222: "VDB", 223: "ELSE", 224: "ELSE.IF", 225: "END.IF", 226: "FOR.CELL", 227: "MEDIAN", 228: "SUMPRODUCT", 229: "SINH", 230: "COSH", 231: "TANH", 232: "ASINH", 233: "ACOSH", 234: "ATANH", 235: "DGET", 236: "CREATE.OBJECT", 237: "VOLATILE", 238: "LAST.ERROR", 239: "CUSTOM.UNDO", 240: "CUSTOM.REPEAT", 241: "FORMULA.CONVERT", 242: "GET.LINK.INFO", 243: "TEXT.BOX", 244: "INFO", 245: "GROUP", 246: "GET.OBJECT", 247: "DB", 248: "PAUSE", 251: "RESUME", 252: "FREQUENCY", 253: "ADD.TOOLBAR", 254: "DELETE.TOOLBAR", 255: "User", 256: "RESET.TOOLBAR", 257: "EVALUATE", 258: "GET.TOOLBAR", 259: "GET.TOOL", 260: "SPELLING.CHECK", 261: "ERROR.TYPE", 262: "APP.TITLE", 263: "WINDOW.TITLE", 264: "SAVE.TOOLBAR", 265: "ENABLE.TOOL", 266: "PRESS.TOOL", 267: "REGISTER.ID", 268: "GET.WORKBOOK", 269: "AVEDEV", 270: "BETADIST", 271: "GAMMALN", 272: "BETAINV", 273: "BINOMDIST", 274: "CHIDIST", 275: "CHIINV", 276: "COMBIN", 277: "CONFIDENCE", 278: "CRITBINOM", 279: "EVEN", 280: "EXPONDIST", 281: "FDIST", 282: "FINV", 283: "FISHER", 284: "FISHERINV", 285: "FLOOR", 286: "GAMMADIST", 287: "GAMMAINV", 288: "CEILING", 289: "HYPGEOMDIST", 290: "LOGNORMDIST", 291: "LOGINV", 292: "NEGBINOMDIST", 293: "NORMDIST", 294: "NORMSDIST", 295: "NORMINV", 296: "NORMSINV", 297: "STANDARDIZE", 298: "ODD", 299: "PERMUT", 300: "POISSON", 301: "TDIST", 302: "WEIBULL", 303: "SUMXMY2", 304: "SUMX2MY2", 305: "SUMX2PY2", 306: "CHITEST", 307: "CORREL", 308: "COVAR", 309: "FORECAST", 310: "FTEST", 311: "INTERCEPT", 312: "PEARSON", 313: "RSQ", 314: "STEYX", 315: "SLOPE", 316: "TTEST", 317: "PROB", 318: "DEVSQ", 319: "GEOMEAN", 320: "HARMEAN", 321: "SUMSQ", 322: "KURT", 323: "SKEW", 324: "ZTEST", 325: "LARGE", 326: "SMALL", 327: "QUARTILE", 328: "PERCENTILE", 329: "PERCENTRANK", 330: "MODE", 331: "TRIMMEAN", 332: "TINV", 334: "MOVIE.COMMAND", 335: "GET.MOVIE", 336: "CONCATENATE", 337: "POWER", 338: "PIVOT.ADD.DATA", 339: "GET.PIVOT.TABLE", 340: "GET.PIVOT.FIELD", 341: "GET.PIVOT.ITEM", 342: "RADIANS", 343: "DEGREES", 344: "SUBTOTAL", 345: "SUMIF", 346: "COUNTIF", 347: "COUNTBLANK", 348: "SCENARIO.GET", 349: "OPTIONS.LISTS.GET", 350: "ISPMT", 351: "DATEDIF", 352: "DATESTRING", 353: "NUMBERSTRING", 354: "ROMAN", 355: "OPEN.DIALOG", 356: "SAVE.DIALOG", 357: "VIEW.GET", 358: "GETPIVOTDATA", 359: "HYPERLINK", 360: "PHONETIC", 361: "AVERAGEA", 362: "MAXA", 363: "MINA", 364: "STDEVPA", 365: "VARPA", 366: "STDEVA", 367: "VARA", 368: "BAHTTEXT", 369: "THAIDAYOFWEEK", 370: "THAIDIGIT", 371: "THAIMONTHOFYEAR", 372: "THAINUMSOUND", 373: "THAINUMSTRING", 374: "THAISTRINGLENGTH", 375: "ISTHAIDIGIT", 376: "ROUNDBAHTDOWN", 377: "ROUNDBAHTUP", 378: "THAIYEAR", 379: "RTD", 380: "CUBEVALUE", 381: "CUBEMEMBER", 382: "CUBEMEMBERPROPERTY", 383: "CUBERANKEDMEMBER", 384: "HEX2BIN", 385: "HEX2DEC", 386: "HEX2OCT", 387: "DEC2BIN", 388: "DEC2HEX", 389: "DEC2OCT", 390: "OCT2BIN", 391: "OCT2HEX", 392: "OCT2DEC", 393: "BIN2DEC", 394: "BIN2OCT", 395: "BIN2HEX", 396: "IMSUB", 397: "IMDIV", 398: "IMPOWER", 399: "IMABS", 400: "IMSQRT", 401: "IMLN", 402: "IMLOG2", 403: "IMLOG10", 404: "IMSIN", 405: "IMCOS", 406: "IMEXP", 407: "IMARGUMENT", 408: "IMCONJUGATE", 409: "IMAGINARY", 410: "IMREAL", 411: "COMPLEX", 412: "IMSUM", 413: "IMPRODUCT", 414: "SERIESSUM", 415: "FACTDOUBLE", 416: "SQRTPI", 417: "QUOTIENT", 418: "DELTA", 419: "GESTEP", 420: "ISEVEN", 421: "ISODD", 422: "MROUND", 423: "ERF", 424: "ERFC", 425: "BESSELJ", 426: "BESSELK", 427: "BESSELY", 428: "BESSELI", 429: "XIRR", 430: "XNPV", 431: "PRICEMAT", 432: "YIELDMAT", 433: "INTRATE", 434: "RECEIVED", 435: "DISC", 436: "PRICEDISC", 437: "YIELDDISC", 438: "TBILLEQ", 439: "TBILLPRICE", 440: "TBILLYIELD", 441: "PRICE", 442: "YIELD", 443: "DOLLARDE", 444: "DOLLARFR", 445: "NOMINAL", 446: "EFFECT", 447: "CUMPRINC", 448: "CUMIPMT", 449: "EDATE", 450: "EOMONTH", 451: "YEARFRAC", 452: "COUPDAYBS", 453: "COUPDAYS", 454: "COUPDAYSNC", 455: "COUPNCD", 456: "COUPNUM", 457: "COUPPCD", 458: "DURATION", 459: "MDURATION", 460: "ODDLPRICE", 461: "ODDLYIELD", 462: "ODDFPRICE", 463: "ODDFYIELD", 464: "RANDBETWEEN", 465: "WEEKNUM", 466: "AMORDEGRC", 467: "AMORLINC", 468: "CONVERT", 724: "SHEETJS", 469: "ACCRINT", 470: "ACCRINTM", 471: "WORKDAY", 472: "NETWORKDAYS", 473: "GCD", 474: "MULTINOMIAL", 475: "LCM", 476: "FVSCHEDULE", 477: "CUBEKPIMEMBER", 478: "CUBESET", 479: "CUBESETCOUNT", 480: "IFERROR", 481: "COUNTIFS", 482: "SUMIFS", 483: "AVERAGEIF", 484: "AVERAGEIFS" },
    FT = { 2: 1, 3: 1, 10: 0, 15: 1, 16: 1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 2, 30: 2, 31: 3, 32: 1, 33: 1, 34: 0, 35: 0, 38: 1, 39: 2, 40: 3, 41: 3, 42: 3, 43: 3, 44: 3, 45: 3, 47: 3, 48: 2, 53: 1, 61: 3, 63: 0, 65: 3, 66: 3, 67: 1, 68: 1, 69: 1, 70: 1, 71: 1, 72: 1, 73: 1, 74: 0, 75: 1, 76: 1, 77: 1, 79: 2, 80: 2, 83: 1, 85: 0, 86: 1, 89: 0, 90: 1, 94: 0, 95: 0, 97: 2, 98: 1, 99: 1, 101: 3, 102: 3, 105: 1, 106: 1, 108: 2, 111: 1, 112: 1, 113: 1, 114: 1, 117: 2, 118: 1, 119: 4, 121: 1, 126: 1, 127: 1, 128: 1, 129: 1, 130: 1, 131: 1, 133: 1, 134: 1, 135: 1, 136: 2, 137: 2, 138: 2, 140: 1, 141: 1, 142: 3, 143: 4, 144: 4, 161: 1, 162: 1, 163: 1, 164: 1, 165: 2, 172: 1, 175: 2, 176: 2, 177: 3, 178: 2, 179: 1, 184: 1, 186: 1, 189: 3, 190: 1, 195: 3, 196: 3, 197: 1, 198: 1, 199: 3, 201: 1, 207: 4, 210: 3, 211: 1, 212: 2, 213: 2, 214: 1, 215: 1, 225: 0, 229: 1, 230: 1, 231: 1, 232: 1, 233: 1, 234: 1, 235: 3, 244: 1, 247: 4, 252: 2, 257: 1, 261: 1, 271: 1, 273: 4, 274: 2, 275: 2, 276: 2, 277: 3, 278: 3, 279: 1, 280: 3, 281: 3, 282: 3, 283: 1, 284: 1, 285: 2, 286: 4, 287: 3, 288: 2, 289: 4, 290: 3, 291: 3, 292: 3, 293: 4, 294: 1, 295: 3, 296: 1, 297: 3, 298: 1, 299: 2, 300: 3, 301: 3, 302: 4, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2, 308: 2, 309: 3, 310: 2, 311: 2, 312: 2, 313: 2, 314: 2, 315: 2, 316: 4, 325: 2, 326: 2, 327: 2, 328: 2, 331: 2, 332: 2, 337: 2, 342: 1, 343: 1, 346: 2, 347: 1, 350: 4, 351: 3, 352: 1, 353: 2, 360: 1, 368: 1, 369: 1, 370: 1, 371: 1, 372: 1, 373: 1, 374: 1, 375: 1, 376: 1, 377: 1, 378: 1, 382: 3, 385: 1, 392: 1, 393: 1, 396: 2, 397: 2, 398: 2, 399: 1, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1, 405: 1, 406: 1, 407: 1, 408: 1, 409: 1, 410: 1, 414: 4, 415: 1, 416: 1, 417: 2, 420: 1, 421: 1, 422: 2, 424: 1, 425: 2, 426: 2, 427: 2, 428: 2, 430: 3, 438: 3, 439: 3, 440: 3, 443: 2, 444: 2, 445: 2, 446: 2, 447: 6, 448: 6, 449: 2, 450: 2, 464: 2, 468: 3, 476: 2, 479: 1, 480: 2, 65535: 0 };

function jT(e) { var t = "of:=" + e.replace(qd, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":"); return t.replace(/;/g, "|").replace(/,/g, ";") }

function BT(e) { return e.replace(/\./, "!") }
var Ks = typeof Map < "u";

function Wd(e, t, r) { var i = 0,
        l = e.length; if (r) { if (Ks ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) { for (var o = Ks ? r.get(t) : r[t]; i < o.length; ++i)
                if (e[o[i]].t === t) return e.Count++, o[i] } } else
        for (; i < l; ++i)
            if (e[i].t === t) return e.Count++, i; return e[l] = { t }, e.Count++, e.Unique++, r && (Ks ? (r.has(t) || r.set(t, []), r.get(t).push(l)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(l))), l }

function Cu(e, t) { var r = { min: e + 1, max: e + 1 },
        i = -1; return t.MDW && (xn = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? i = iu(t.wpx) : t.wch != null && (i = t.wch), i > -1 ? (r.width = vd(i), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r }

function tv(e, t) { if (e) { var r = [.7, .7, .75, .75, .3, .3];
        e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]) } }

function ri(e, t, r) { var i = r.revssf[t.z != null ? t.z : "General"],
        l = 60,
        o = e.length; if (i == null && r.ssf) { for (; l < 392; ++l)
            if (r.ssf[l] == null) { Q2(t.z, l), r.ssf[l] = t.z, r.revssf[t.z] = i = l; break } } for (l = 0; l != o; ++l)
        if (e[l].numFmtId === i) return l;
    return e[o] = { numFmtId: i, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }, o }

function kT(e, t, r) { if (e && e["!ref"]) { var i = Ft(e["!ref"]); if (i.e.c < i.s.c || i.e.r < i.s.r) throw new Error("Bad range (" + r + "): " + e["!ref"]) } }

function MT(e) { if (e.length === 0) return ""; for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r) t += '<mergeCell ref="' + Kt(e[r]) + '"/>'; return t + "</mergeCells>" }

function LT(e, t, r, i, l) { var o = !1,
        c = {},
        f = null; if (i.bookType !== "xlsx" && t.vbaraw) { var p = t.SheetNames[r]; try { t.Workbook && (p = t.Workbook.Sheets[r].CodeName || p) } catch {}
        o = !0, c.codeName = ao(bt(p)) } if (e && e["!outline"]) { var x = { summaryBelow: 1, summaryRight: 1 };
        e["!outline"].above && (x.summaryBelow = 0), e["!outline"].left && (x.summaryRight = 0), f = (f || "") + Be("outlinePr", null, x) }!o && !f || (l[l.length] = Be("sheetPr", f, c)) }
var UT = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"],
    PT = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];

function zT(e) { var t = { sheet: 1 }; return UT.forEach(function(r) { e[r] != null && e[r] && (t[r] = "1") }), PT.forEach(function(r) { e[r] != null && !e[r] && (t[r] = "0") }), e.password && (t.password = Ug(e.password).toString(16).toUpperCase()), Be("sheetProtection", null, t) }

function IT(e) { return tv(e), Be("pageMargins", null, e) }

function HT(e, t) { for (var r = ["<cols>"], i, l = 0; l != t.length; ++l)(i = t[l]) && (r[r.length] = Be("col", null, Cu(l, i))); return r[r.length] = "</cols>", r.join("") }

function GT(e, t, r, i) { var l = typeof e.ref == "string" ? e.ref : Kt(e.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []); var o = r.Workbook.Names,
        c = ta(l);
    c.s.r == c.e.r && (c.e.r = ta(t["!ref"]).e.r, l = Kt(c)); for (var f = 0; f < o.length; ++f) { var p = o[f]; if (p.Name == "_xlnm._FilterDatabase" && p.Sheet == i) { p.Ref = "'" + r.SheetNames[i] + "'!" + l; break } } return f == o.length && o.push({ Name: "_xlnm._FilterDatabase", Sheet: i, Ref: "'" + r.SheetNames[i] + "'!" + l }), Be("autoFilter", null, { ref: l }) }

function VT(e, t, r, i) { var l = { workbookViewId: "0" }; return (((i || {}).Workbook || {}).Views || [])[0] && (l.rightToLeft = i.Workbook.Views[0].RTL ? "1" : "0"), Be("sheetViews", Be("sheetView", null, l), {}) }

function qT(e, t, r, i) { if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f) return ""; var l = "",
        o = e.t,
        c = e.v; if (e.t !== "z") switch (e.t) {
        case "b":
            l = e.v ? "1" : "0"; break;
        case "n":
            l = "" + e.v; break;
        case "e":
            l = xo[e.v]; break;
        case "d":
            i && i.cellDates ? l = Fr(e.v, -1).toISOString() : (e = Ir(e), e.t = "n", l = "" + (e.v = zr(Fr(e.v)))), typeof e.z > "u" && (e.z = zt[14]); break;
        default:
            l = e.v; break }
    var f = xr("v", bt(l)),
        p = { r: t },
        x = ri(i.cellXfs, e, i); switch (x !== 0 && (p.s = x), e.t) {
        case "n":
            break;
        case "d":
            p.t = "d"; break;
        case "b":
            p.t = "b"; break;
        case "e":
            p.t = "e"; break;
        case "z":
            break;
        default:
            if (e.v == null) { delete e.t; break } if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters"); if (i && i.bookSST) { f = xr("v", "" + Wd(i.Strings, e.v, i.revStrings)), p.t = "s"; break }
            p.t = "str"; break } if (e.t != o && (e.t = o, e.v = c), typeof e.f == "string" && e.f) { var m = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
        f = Be("f", bt(e.f), m) + (e.v != null ? f : "") } return e.l && r["!links"].push([t, e.l]), e.D && (p.cm = 1), Be("c", f, p) }

function XT(e, t, r, i) { var l = [],
        o = [],
        c = Ft(e["!ref"]),
        f = "",
        p, x = "",
        m = [],
        g = 0,
        v = 0,
        b = e["!rows"],
        A = Array.isArray(e),
        E = { r: x },
        w, S = -1; for (v = c.s.c; v <= c.e.c; ++v) m[v] = wr(v); for (g = c.s.r; g <= c.e.r; ++g) { for (o = [], x = pr(g), v = c.s.c; v <= c.e.c; ++v) { p = m[v] + x; var O = A ? (e[g] || [])[v] : e[p];
            O !== void 0 && (f = qT(O, p, e, t)) != null && o.push(f) }(o.length > 0 || b && b[g]) && (E = { r: x }, b && b[g] && (w = b[g], w.hidden && (E.hidden = 1), S = -1, w.hpx ? S = lu(w.hpx) : w.hpt && (S = w.hpt), S > -1 && (E.ht = S, E.customHeight = 1), w.level && (E.outlineLevel = w.level)), l[l.length] = Be("row", o.join(""), E)) } if (b)
        for (; g < b.length; ++g) b && b[g] && (E = { r: g + 1 }, w = b[g], w.hidden && (E.hidden = 1), S = -1, w.hpx ? S = lu(w.hpx) : w.hpt && (S = w.hpt), S > -1 && (E.ht = S, E.customHeight = 1), w.level && (E.outlineLevel = w.level), l[l.length] = Be("row", "", E)); return l.join("") }

function rv(e, t, r, i) { var l = [Qt, Be("worksheet", null, { xmlns: Pl[0], "xmlns:r": nr.r })],
        o = r.SheetNames[e],
        c = 0,
        f = "",
        p = r.Sheets[o];
    p == null && (p = {}); var x = p["!ref"] || "A1",
        m = Ft(x); if (m.e.c > 16383 || m.e.r > 1048575) { if (t.WTF) throw new Error("Range " + x + " exceeds format limit A1:XFD1048576");
        m.e.c = Math.min(m.e.c, 16383), m.e.r = Math.min(m.e.c, 1048575), x = Kt(m) }
    i || (i = {}), p["!comments"] = []; var g = [];
    LT(p, r, e, t, l), l[l.length] = Be("dimension", null, { ref: x }), l[l.length] = VT(p, t, e, r), t.sheetFormat && (l[l.length] = Be("sheetFormatPr", null, { defaultRowHeight: t.sheetFormat.defaultRowHeight || "16", baseColWidth: t.sheetFormat.baseColWidth || "10", outlineLevelRow: t.sheetFormat.outlineLevelRow || "7" })), p["!cols"] != null && p["!cols"].length > 0 && (l[l.length] = HT(p, p["!cols"])), l[c = l.length] = "<sheetData/>", p["!links"] = [], p["!ref"] != null && (f = XT(p, t), f.length > 0 && (l[l.length] = f)), l.length > c + 1 && (l[l.length] = "</sheetData>", l[c] = l[c].replace("/>", ">")), p["!protect"] && (l[l.length] = zT(p["!protect"])), p["!autofilter"] != null && (l[l.length] = GT(p["!autofilter"], p, r, e)), p["!merges"] != null && p["!merges"].length > 0 && (l[l.length] = MT(p["!merges"])); var v = -1,
        b, A = -1; return p["!links"].length > 0 && (l[l.length] = "<hyperlinks>", p["!links"].forEach(function(E) { E[1].Target && (b = { ref: E[0] }, E[1].Target.charAt(0) != "#" && (A = yt(i, -1, bt(E[1].Target).replace(/#.*$/, ""), ht.HLINK), b["r:id"] = "rId" + A), (v = E[1].Target.indexOf("#")) > -1 && (b.location = bt(E[1].Target.slice(v + 1))), E[1].Tooltip && (b.tooltip = bt(E[1].Tooltip)), l[l.length] = Be("hyperlink", null, b)) }), l[l.length] = "</hyperlinks>"), delete p["!links"], p["!margins"] != null && (l[l.length] = IT(p["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (l[l.length] = xr("ignoredErrors", Be("ignoredError", null, { numberStoredAsText: 1, sqref: x }))), g.length > 0 && (A = yt(i, -1, "../drawings/drawing" + (e + 1) + ".xml", ht.DRAW), l[l.length] = Be("drawing", null, { "r:id": "rId" + A }), p["!drawing"] = g), p["!comments"].length > 0 && (A = yt(i, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", ht.VML), l[l.length] = Be("legacyDrawing", null, { "r:id": "rId" + A }), p["!legacy"] = A), l.length > 1 && (l[l.length] = "</worksheet>", l[1] = l[1].replace("/>", ">")), l.join("") }

function YT(e, t) { var r = {},
        i = e.l + t;
    r.r = e.read_shift(4), e.l += 4; var l = e.read_shift(2);
    e.l += 1; var o = e.read_shift(1); return e.l = i, o & 7 && (r.level = o & 7), o & 16 && (r.hidden = !0), o & 32 && (r.hpt = l / 20), r }

function WT(e, t, r) { var i = ve(145),
        l = (r["!rows"] || [])[e] || {};
    i.write_shift(4, e), i.write_shift(4, 0); var o = 320;
    l.hpx ? o = lu(l.hpx) * 20 : l.hpt && (o = l.hpt * 20), i.write_shift(2, o), i.write_shift(1, 0); var c = 0;
    l.level && (c |= l.level), l.hidden && (c |= 16), (l.hpx || l.hpt) && (c |= 32), i.write_shift(1, c), i.write_shift(1, 0); var f = 0,
        p = i.l;
    i.l += 4; for (var x = { r: e, c: 0 }, m = 0; m < 16; ++m)
        if (!(t.s.c > m + 1 << 10 || t.e.c < m << 10)) { for (var g = -1, v = -1, b = m << 10; b < m + 1 << 10; ++b) { x.c = b; var A = Array.isArray(r) ? (r[x.r] || [])[x.c] : r[At(x)];
                A && (g < 0 && (g = b), v = b) }
            g < 0 || (++f, i.write_shift(4, g), i.write_shift(4, v)) }
    var E = i.l; return i.l = p, i.write_shift(4, f), i.l = E, i.length > i.l ? i.slice(0, i.l) : i }

function KT(e, t, r, i) { var l = WT(i, r, t);
    (l.length > 17 || (t["!rows"] || [])[i]) && Ne(e, 0, l) }
var QT = Vi,
    ZT = Il;

function $T() {}

function JT(e, t) { var r = {},
        i = e[e.l]; return ++e.l, r.above = !(i & 64), r.left = !(i & 128), e.l += 18, r.name = c_(e), r }

function eS(e, t, r) { r == null && (r = ve(84 + 4 * e.length)); var i = 192;
    t && (t.above && (i &= -65), t.left && (i &= -129)), r.write_shift(1, i); for (var l = 1; l < 3; ++l) r.write_shift(1, 0); return ru({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), gg(e, r), r.slice(0, r.l) }

function tS(e) { var t = wa(e); return [t] }

function rS(e, t, r) { return r == null && (r = ve(8)), Ii(t, r) }

function aS(e) { var t = Hi(e); return [t] }

function nS(e, t, r) { return r == null && (r = ve(4)), Gi(t, r) }

function iS(e) { var t = wa(e),
        r = e.read_shift(1); return [t, r, "b"] }

function lS(e, t, r) { return r == null && (r = ve(9)), Ii(t, r), r.write_shift(1, e.v ? 1 : 0), r }

function sS(e) { var t = Hi(e),
        r = e.read_shift(1); return [t, r, "b"] }

function oS(e, t, r) { return r == null && (r = ve(5)), Gi(t, r), r.write_shift(1, e.v ? 1 : 0), r }

function cS(e) { var t = wa(e),
        r = e.read_shift(1); return [t, r, "e"] }

function uS(e, t, r) { return r == null && (r = ve(9)), Ii(t, r), r.write_shift(1, e.v), r }

function fS(e) { var t = Hi(e),
        r = e.read_shift(1); return [t, r, "e"] }

function dS(e, t, r) { return r == null && (r = ve(8)), Gi(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r }

function hS(e) { var t = wa(e),
        r = e.read_shift(4); return [t, r, "s"] }

function mS(e, t, r) { return r == null && (r = ve(12)), Ii(t, r), r.write_shift(4, t.v), r }

function xS(e) { var t = Hi(e),
        r = e.read_shift(4); return [t, r, "s"] }

function pS(e, t, r) { return r == null && (r = ve(8)), Gi(t, r), r.write_shift(4, t.v), r }

function gS(e) { var t = wa(e),
        r = Hl(e); return [t, r, "n"] }

function vS(e, t, r) { return r == null && (r = ve(16)), Ii(t, r), Li(e.v, r), r }

function yS(e) { var t = Hi(e),
        r = Hl(e); return [t, r, "n"] }

function bS(e, t, r) { return r == null && (r = ve(12)), Gi(t, r), Li(e.v, r), r }

function AS(e) { var t = wa(e),
        r = vg(e); return [t, r, "n"] }

function ES(e, t, r) { return r == null && (r = ve(12)), Ii(t, r), yg(e.v, r), r }

function wS(e) { var t = Hi(e),
        r = vg(e); return [t, r, "n"] }

function _S(e, t, r) { return r == null && (r = ve(8)), Gi(t, r), yg(e.v, r), r }

function TS(e) { var t = wa(e),
        r = zd(e); return [t, r, "is"] }

function SS(e) { var t = wa(e),
        r = _r(e); return [t, r, "str"] }

function NS(e, t, r) { return r == null && (r = ve(12 + 4 * e.v.length)), Ii(t, r), lr(e.v, r), r.length > r.l ? r.slice(0, r.l) : r }

function CS(e) { var t = Hi(e),
        r = _r(e); return [t, r, "str"] }

function DS(e, t, r) { return r == null && (r = ve(8 + 4 * e.v.length)), Gi(t, r), lr(e.v, r), r.length > r.l ? r.slice(0, r.l) : r }

function OS(e, t, r) { var i = e.l + t,
        l = wa(e);
    l.r = r["!row"]; var o = e.read_shift(1),
        c = [l, o, "b"]; if (r.cellFormula) { e.l += 2; var f = Nu(e, i - e.l, r);
        c[3] = Bl(f, null, l, r.supbooks, r) } else e.l = i; return c }

function RS(e, t, r) { var i = e.l + t,
        l = wa(e);
    l.r = r["!row"]; var o = e.read_shift(1),
        c = [l, o, "e"]; if (r.cellFormula) { e.l += 2; var f = Nu(e, i - e.l, r);
        c[3] = Bl(f, null, l, r.supbooks, r) } else e.l = i; return c }

function FS(e, t, r) { var i = e.l + t,
        l = wa(e);
    l.r = r["!row"]; var o = Hl(e),
        c = [l, o, "n"]; if (r.cellFormula) { e.l += 2; var f = Nu(e, i - e.l, r);
        c[3] = Bl(f, null, l, r.supbooks, r) } else e.l = i; return c }

function jS(e, t, r) { var i = e.l + t,
        l = wa(e);
    l.r = r["!row"]; var o = _r(e),
        c = [l, o, "str"]; if (r.cellFormula) { e.l += 2; var f = Nu(e, i - e.l, r);
        c[3] = Bl(f, null, l, r.supbooks, r) } else e.l = i; return c }
var BS = Vi,
    kS = Il;

function MS(e, t) { return t == null && (t = ve(4)), t.write_shift(4, e), t }

function LS(e, t) { var r = e.l + t,
        i = Vi(e),
        l = Id(e),
        o = _r(e),
        c = _r(e),
        f = _r(e);
    e.l = r; var p = { rfx: i, relId: l, loc: o, display: f }; return c && (p.Tooltip = c), p }

function US(e, t) { var r = ve(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
    Il({ s: ir(e[0]), e: ir(e[0]) }, r), Hd("rId" + t, r); var i = e[1].Target.indexOf("#"),
        l = i == -1 ? "" : e[1].Target.slice(i + 1); return lr(l || "", r), lr(e[1].Tooltip || "", r), lr("", r), r.slice(0, r.l) }

function PS() {}

function zS(e, t, r) { var i = e.l + t,
        l = bg(e),
        o = e.read_shift(1),
        c = [l]; if (c[2] = o, r.cellFormula) { var f = CT(e, i - e.l, r);
        c[1] = f } else e.l = i; return c }

function IS(e, t, r) { var i = e.l + t,
        l = Vi(e),
        o = [l]; if (r.cellFormula) { var c = OT(e, i - e.l, r);
        o[1] = c, e.l = i } else e.l = i; return o }

function HS(e, t, r) { r == null && (r = ve(18)); var i = Cu(e, t);
    r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (i.width || 10) * 256), r.write_shift(4, 0); var l = 0; return t.hidden && (l |= 1), typeof i.width == "number" && (l |= 2), t.level && (l |= t.level << 8), r.write_shift(2, l), r }
var av = ["left", "right", "top", "bottom", "header", "footer"];

function GS(e) { var t = {}; return av.forEach(function(r) { t[r] = Hl(e) }), t }

function VS(e, t) { return t == null && (t = ve(6 * 8)), tv(e), av.forEach(function(r) { Li(e[r], t) }), t }

function qS(e) { var t = e.read_shift(2); return e.l += 28, { RTL: t & 32 } }

function XS(e, t, r) { r == null && (r = ve(30)); var i = 924; return (((t || {}).Views || [])[0] || {}).RTL && (i |= 32), r.write_shift(2, i), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r }

function YS(e) { var t = ve(24); return t.write_shift(4, 4), t.write_shift(4, 1), Il(e, t), t }

function WS(e, t) { return t == null && (t = ve(16 * 4 + 2)), t.write_shift(2, e.password ? Ug(e.password) : 0), t.write_shift(4, 1), [
        ["objects", !1],
        ["scenarios", !1],
        ["formatCells", !0],
        ["formatColumns", !0],
        ["formatRows", !0],
        ["insertColumns", !0],
        ["insertRows", !0],
        ["insertHyperlinks", !0],
        ["deleteColumns", !0],
        ["deleteRows", !0],
        ["selectLockedCells", !1],
        ["sort", !0],
        ["autoFilter", !0],
        ["pivotTables", !0],
        ["selectUnlockedCells", !1]
    ].forEach(function(r) { r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1) }), t }

function KS() {}

function QS() {}

function ZS(e, t, r, i, l, o, c) { if (t.v === void 0) return !1; var f = ""; switch (t.t) {
        case "b":
            f = t.v ? "1" : "0"; break;
        case "d":
            t = Ir(t), t.z = t.z || zt[14], t.v = zr(Fr(t.v)), t.t = "n"; break;
        case "n":
        case "e":
            f = "" + t.v; break;
        default:
            f = t.v; break } var p = { r, c: i }; switch (p.s = ri(l.cellXfs, t, l), t.l && o["!links"].push([At(p), t.l]), t.c && o["!comments"].push([At(p), t.c]), t.t) {
        case "s":
        case "str":
            return l.bookSST ? (f = Wd(l.Strings, t.v, l.revStrings), p.t = "s", p.v = f, c ? Ne(e, 18, pS(t, p)) : Ne(e, 7, mS(t, p))) : (p.t = "str", c ? Ne(e, 17, DS(t, p)) : Ne(e, 6, NS(t, p))), !0;
        case "n":
            return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? c ? Ne(e, 13, _S(t, p)) : Ne(e, 2, ES(t, p)) : c ? Ne(e, 16, bS(t, p)) : Ne(e, 5, vS(t, p)), !0;
        case "b":
            return p.t = "b", c ? Ne(e, 15, oS(t, p)) : Ne(e, 4, lS(t, p)), !0;
        case "e":
            return p.t = "e", c ? Ne(e, 14, dS(t, p)) : Ne(e, 3, uS(t, p)), !0 } return c ? Ne(e, 12, nS(t, p)) : Ne(e, 1, rS(t, p)), !0 }

function $S(e, t, r, i) { var l = Ft(t["!ref"] || "A1"),
        o, c = "",
        f = [];
    Ne(e, 145); var p = Array.isArray(t),
        x = l.e.r;
    t["!rows"] && (x = Math.max(l.e.r, t["!rows"].length - 1)); for (var m = l.s.r; m <= x; ++m) { c = pr(m), KT(e, t, l, m); var g = !1; if (m <= l.e.r)
            for (var v = l.s.c; v <= l.e.c; ++v) { m === l.s.r && (f[v] = wr(v)), o = f[v] + c; var b = p ? (t[m] || [])[v] : t[o]; if (!b) { g = !1; continue }
                g = ZS(e, b, m, v, i, t, g) } }
    Ne(e, 146) }

function JS(e, t) {!t || !t["!merges"] || (Ne(e, 177, MS(t["!merges"].length)), t["!merges"].forEach(function(r) { Ne(e, 176, kS(r)) }), Ne(e, 178)) }

function e6(e, t) {!t || !t["!cols"] || (Ne(e, 390), t["!cols"].forEach(function(r, i) { r && Ne(e, 60, HS(i, r)) }), Ne(e, 391)) }

function t6(e, t) {!t || !t["!ref"] || (Ne(e, 648), Ne(e, 649, YS(Ft(t["!ref"]))), Ne(e, 650)) }

function r6(e, t, r) { t["!links"].forEach(function(i) { if (i[1].Target) { var l = yt(r, -1, i[1].Target.replace(/#.*$/, ""), ht.HLINK);
            Ne(e, 494, US(i, l)) } }), delete t["!links"] }

function a6(e, t, r, i) { if (t["!comments"].length > 0) { var l = yt(i, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", ht.VML);
        Ne(e, 551, Hd("rId" + l)), t["!legacy"] = l } }

function n6(e, t, r, i) { if (t["!autofilter"]) { var l = t["!autofilter"],
            o = typeof l.ref == "string" ? l.ref : Kt(l.ref);
        r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []); var c = r.Workbook.Names,
            f = ta(o);
        f.s.r == f.e.r && (f.e.r = ta(t["!ref"]).e.r, o = Kt(f)); for (var p = 0; p < c.length; ++p) { var x = c[p]; if (x.Name == "_xlnm._FilterDatabase" && x.Sheet == i) { x.Ref = "'" + r.SheetNames[i] + "'!" + o; break } }
        p == c.length && c.push({ Name: "_xlnm._FilterDatabase", Sheet: i, Ref: "'" + r.SheetNames[i] + "'!" + o }), Ne(e, 161, Il(Ft(o))), Ne(e, 162) } }

function i6(e, t, r) { Ne(e, 133), Ne(e, 137, XS(t, r)), Ne(e, 138), Ne(e, 134) }

function l6(e, t) { t["!protect"] && Ne(e, 535, WS(t["!protect"])) }

function s6(e, t, r, i) { var l = Pr(),
        o = r.SheetNames[e],
        c = r.Sheets[o] || {},
        f = o; try { r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f) } catch {} var p = Ft(c["!ref"] || "A1"); if (p.e.c > 16383 || p.e.r > 1048575) { if (t.WTF) throw new Error("Range " + (c["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
        p.e.c = Math.min(p.e.c, 16383), p.e.r = Math.min(p.e.c, 1048575) } return c["!links"] = [], c["!comments"] = [], Ne(l, 129), (r.vbaraw || c["!outline"]) && Ne(l, 147, eS(f, c["!outline"])), Ne(l, 148, ZT(p)), i6(l, c, r.Workbook), e6(l, c), $S(l, c, e, t), l6(l, c), n6(l, c, r, e), JS(l, c), r6(l, c, i), c["!margins"] && Ne(l, 476, VS(c["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && t6(l, c), a6(l, c, e, i), Ne(l, 130), l.end() }

function o6(e, t) { e.l += 10; var r = _r(e); return { name: r } }
var c6 = [
    ["allowRefreshQuery", !1, "bool"],
    ["autoCompressPictures", !0, "bool"],
    ["backupFile", !1, "bool"],
    ["checkCompatibility", !1, "bool"],
    ["CodeName", ""],
    ["date1904", !1, "bool"],
    ["defaultThemeVersion", 0, "int"],
    ["filterPrivacy", !1, "bool"],
    ["hidePivotFieldList", !1, "bool"],
    ["promptedSolutions", !1, "bool"],
    ["publishItems", !1, "bool"],
    ["refreshAllConnections", !1, "bool"],
    ["saveExternalLinkValues", !0, "bool"],
    ["showBorderUnselectedTables", !0, "bool"],
    ["showInkAnnotation", !0, "bool"],
    ["showObjects", "all"],
    ["showPivotChartFilter", !1, "bool"],
    ["updateLinks", "userSet"]
];

function u6(e) { return !e.Workbook || !e.Workbook.WBProps ? "false" : Iw(e.Workbook.WBProps.date1904) ? "true" : "false" }
var f6 = "][*?/\\".split("");

function nv(e, t) { if (e.length > 31) throw new Error("Sheet names cannot exceed 31 chars"); var r = !0; return f6.forEach(function(i) { if (e.indexOf(i) != -1) throw new Error("Sheet name cannot contain : \\ / ? * [ ]") }), r }

function d6(e, t, r) { e.forEach(function(i, l) { nv(i); for (var o = 0; o < l; ++o)
            if (i == e[o]) throw new Error("Duplicate Sheet Name: " + i);
        if (r) { var c = t && t[l] && t[l].CodeName || i; if (c.charCodeAt(0) == 95 && c.length > 22) throw new Error("Bad Code Name: Worksheet" + c) } }) }

function h6(e) { if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook"); if (!e.SheetNames.length) throw new Error("Workbook is empty"); var t = e.Workbook && e.Workbook.Sheets || [];
    d6(e.SheetNames, t, !!e.vbaraw); for (var r = 0; r < e.SheetNames.length; ++r) kT(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r) }

function iv(e) { var t = [Qt];
    t[t.length] = Be("workbook", null, { xmlns: Pl[0], "xmlns:r": nr.r }); var r = e.Workbook && (e.Workbook.Names || []).length > 0,
        i = { codeName: "ThisWorkbook" };
    e.Workbook && e.Workbook.WBProps && (c6.forEach(function(f) { e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (i[f[0]] = e.Workbook.WBProps[f[0]]) }), e.Workbook.WBProps.CodeName && (i.codeName = e.Workbook.WBProps.CodeName, delete i.CodeName)), t[t.length] = Be("workbookPr", null, i); var l = e.Workbook && e.Workbook.Sheets || [],
        o = 0; if (l && l[0] && l[0].Hidden) { for (t[t.length] = "<bookViews>", o = 0; o != e.SheetNames.length && !(!l[o] || !l[o].Hidden); ++o);
        o == e.SheetNames.length && (o = 0), t[t.length] = '<workbookView firstSheet="' + o + '" activeTab="' + o + '"/>', t[t.length] = "</bookViews>" } for (t[t.length] = "<sheets>", o = 0; o != e.SheetNames.length; ++o) { var c = { name: bt(e.SheetNames[o].slice(0, 31)) }; if (c.sheetId = "" + (o + 1), c["r:id"] = "rId" + (o + 1), l[o]) switch (l[o].Hidden) {
            case 1:
                c.state = "hidden"; break;
            case 2:
                c.state = "veryHidden"; break }
        t[t.length] = Be("sheet", null, c) } return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) { var p = { name: f.Name };
        f.Comment && (p.comment = f.Comment), f.Sheet != null && (p.localSheetId = "" + f.Sheet), f.Hidden && (p.hidden = "1"), f.Ref && (t[t.length] = Be("definedName", bt(f.Ref), p)) }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("") }

function m6(e, t) { var r = {}; return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = gd(e), r.name = _r(e), r }

function x6(e, t) { return t || (t = ve(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), Hd(e.strRelID, t), lr(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t }

function p6(e, t) { var r = {},
        i = e.read_shift(4);
    r.defaultThemeVersion = e.read_shift(4); var l = t > 8 ? _r(e) : ""; return l.length > 0 && (r.CodeName = l), r.autoCompressPictures = !!(i & 65536), r.backupFile = !!(i & 64), r.checkCompatibility = !!(i & 4096), r.date1904 = !!(i & 1), r.filterPrivacy = !!(i & 8), r.hidePivotFieldList = !!(i & 1024), r.promptedSolutions = !!(i & 16), r.publishItems = !!(i & 2048), r.refreshAllConnections = !!(i & 262144), r.saveExternalLinkValues = !!(i & 128), r.showBorderUnselectedTables = !!(i & 4), r.showInkAnnotation = !!(i & 32), r.showObjects = ["all", "placeholders", "none"][i >> 13 & 3], r.showPivotChartFilter = !!(i & 32768), r.updateLinks = ["userSet", "never", "always"][i >> 8 & 3], r }

function g6(e, t) { t || (t = ve(72)); var r = 0; return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), gg(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l) }

function v6(e, t, r) { var i = e.l + t;
    e.l += 4, e.l += 1; var l = e.read_shift(4),
        o = u_(e),
        c = DT(e, 0, r),
        f = Id(e);
    e.l = i; var p = { Name: o, Ptg: c }; return l < 268435455 && (p.Sheet = l), f && (p.Comment = f), p }

function y6(e, t) { Ne(e, 143); for (var r = 0; r != t.SheetNames.length; ++r) { var i = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0,
            l = { Hidden: i, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
        Ne(e, 156, x6(l)) }
    Ne(e, 144) }

function b6(e, t) { t || (t = ve(127)); for (var r = 0; r != 4; ++r) t.write_shift(4, 0); return lr("SheetJS", t), lr(Kc.version, t), lr(Kc.version, t), lr("7262", t), t.length > t.l ? t.slice(0, t.l) : t }

function A6(e, t) { t || (t = ve(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e); var r = 120; return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t }

function E6(e, t) { if (!(!t.Workbook || !t.Workbook.Sheets)) { for (var r = t.Workbook.Sheets, i = 0, l = -1, o = -1; i < r.length; ++i) !r[i] || !r[i].Hidden && l == -1 ? l = i : r[i].Hidden == 1 && o == -1 && (o = i);
        o > l || (Ne(e, 135), Ne(e, 158, A6(l)), Ne(e, 136)) } }

function w6(e, t) { var r = Pr(); return Ne(r, 131), Ne(r, 128, b6()), Ne(r, 153, g6(e.Workbook && e.Workbook.WBProps || null)), E6(r, e), y6(r, e), Ne(r, 132), r.end() }

function _6(e, t, r) { return (t.slice(-4) === ".bin" ? w6 : iv)(e) }

function T6(e, t, r, i, l) { return (t.slice(-4) === ".bin" ? s6 : rv)(e, r, i, l) }

function S6(e, t, r) { return (t.slice(-4) === ".bin" ? V5 : Ig)(e, r) }

function N6(e, t, r) { return (t.slice(-4) === ".bin" ? g5 : Lg)(e, r) }

function C6(e, t, r) { return (t.slice(-4) === ".bin" ? l8 : Xg)(e) }

function D6(e) { return (e.slice(-4) === ".bin" ? $5 : Vg)() }

function O6(e, t) { var r = []; return e.Props && r.push(S_(e.Props, t)), e.Custprops && r.push(N_(e.Props, e.Custprops)), r.join("") }

function R6() { return "" }

function F6(e, t) { var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>']; return t.cellXfs.forEach(function(i, l) { var o = [];
        o.push(Be("NumberFormat", null, { "ss:Format": bt(zt[i.numFmtId]) })); var c = { "ss:ID": "s" + (21 + l) };
        r.push(Be("Style", o.join(""), c)) }), Be("Styles", r.join("")) }

function lv(e) { return Be("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + Xd(e.Ref, { r: 0, c: 0 }) }) }

function j6(e) { if (!((e || {}).Workbook || {}).Names) return ""; for (var t = e.Workbook.Names, r = [], i = 0; i < t.length; ++i) { var l = t[i];
        l.Sheet == null && (l.Name.match(/^_xlfn\./) || r.push(lv(l))) } return Be("Names", r.join("")) }

function B6(e, t, r, i) { if (!e || !((i || {}).Workbook || {}).Names) return ""; for (var l = i.Workbook.Names, o = [], c = 0; c < l.length; ++c) { var f = l[c];
        f.Sheet == r && (f.Name.match(/^_xlfn\./) || o.push(lv(f))) } return o.join("") }

function k6(e, t, r, i) { if (!e) return ""; var l = []; if (e["!margins"] && (l.push("<PageSetup>"), e["!margins"].header && l.push(Be("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && l.push(Be("Footer", null, { "x:Margin": e["!margins"].footer })), l.push(Be("PageMargins", null, { "x:Bottom": e["!margins"].bottom || "0.75", "x:Left": e["!margins"].left || "0.7", "x:Right": e["!margins"].right || "0.7", "x:Top": e["!margins"].top || "0.75" })), l.push("</PageSetup>")), i && i.Workbook && i.Workbook.Sheets && i.Workbook.Sheets[r])
        if (i.Workbook.Sheets[r].Hidden) l.push(Be("Visible", i.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
        else { for (var o = 0; o < r && !(i.Workbook.Sheets[o] && !i.Workbook.Sheets[o].Hidden); ++o);
            o == r && l.push("<Selected/>") }
    return ((((i || {}).Workbook || {}).Views || [])[0] || {}).RTL && l.push("<DisplayRightToLeft/>"), e["!protect"] && (l.push(xr("ProtectContents", "True")), e["!protect"].objects && l.push(xr("ProtectObjects", "True")), e["!protect"].scenarios && l.push(xr("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? l.push(xr("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && l.push(xr("EnableSelection", "UnlockedCells")), [
        ["formatCells", "AllowFormatCells"],
        ["formatColumns", "AllowSizeCols"],
        ["formatRows", "AllowSizeRows"],
        ["insertColumns", "AllowInsertCols"],
        ["insertRows", "AllowInsertRows"],
        ["insertHyperlinks", "AllowInsertHyperlinks"],
        ["deleteColumns", "AllowDeleteCols"],
        ["deleteRows", "AllowDeleteRows"],
        ["sort", "AllowSort"],
        ["autoFilter", "AllowFilter"],
        ["pivotTables", "AllowUsePivotTables"]
    ].forEach(function(c) { e["!protect"][c[0]] && l.push("<" + c[1] + "/>") })), l.length == 0 ? "" : Be("WorksheetOptions", l.join(""), { xmlns: $r.x }) }

function M6(e) { return e.map(function(t) { var r = zw(t.t || ""),
            i = Be("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" }); return Be("Comment", i, { "ss:Author": t.a }) }).join("") }

function L6(e, t, r, i, l, o, c) { if (!e || e.v == null && e.f == null) return ""; var f = {}; if (e.f && (f["ss:Formula"] = "=" + bt(Xd(e.f, c))), e.F && e.F.slice(0, t.length) == t) { var p = ir(e.F.slice(t.length + 1));
        f["ss:ArrayRange"] = "RC:R" + (p.r == c.r ? "" : "[" + (p.r - c.r) + "]") + "C" + (p.c == c.c ? "" : "[" + (p.c - c.c) + "]") } if (e.l && e.l.Target && (f["ss:HRef"] = bt(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = bt(e.l.Tooltip))), r["!merges"])
        for (var x = r["!merges"], m = 0; m != x.length; ++m) x[m].s.c != c.c || x[m].s.r != c.r || (x[m].e.c > x[m].s.c && (f["ss:MergeAcross"] = x[m].e.c - x[m].s.c), x[m].e.r > x[m].s.r && (f["ss:MergeDown"] = x[m].e.r - x[m].s.r)); var g = "",
        v = ""; switch (e.t) {
        case "z":
            if (!i.sheetStubs) return ""; break;
        case "n":
            g = "Number", v = String(e.v); break;
        case "b":
            g = "Boolean", v = e.v ? "1" : "0"; break;
        case "e":
            g = "Error", v = xo[e.v]; break;
        case "d":
            g = "DateTime", v = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || zt[14]); break;
        case "s":
            g = "String", v = Pw(e.v || ""); break } var b = ri(i.cellXfs, e, i);
    f["ss:StyleID"] = "s" + (21 + b), f["ss:Index"] = c.c + 1; var A = e.v != null ? v : "",
        E = e.t == "z" ? "" : '<Data ss:Type="' + g + '">' + A + "</Data>"; return (e.c || []).length > 0 && (E += M6(e.c)), Be("Cell", E, f) }

function U6(e, t) { var r = '<Row ss:Index="' + (e + 1) + '"'; return t && (t.hpt && !t.hpx && (t.hpx = zg(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">" }

function P6(e, t, r, i) { if (!e["!ref"]) return ""; var l = Ft(e["!ref"]),
        o = e["!merges"] || [],
        c = 0,
        f = [];
    e["!cols"] && e["!cols"].forEach(function(w, S) { Vd(w); var O = !!w.width,
            D = Cu(S, w),
            F = { "ss:Index": S + 1 };
        O && (F["ss:Width"] = nu(D.width)), w.hidden && (F["ss:Hidden"] = "1"), f.push(Be("Column", null, F)) }); for (var p = Array.isArray(e), x = l.s.r; x <= l.e.r; ++x) { for (var m = [U6(x, (e["!rows"] || [])[x])], g = l.s.c; g <= l.e.c; ++g) { var v = !1; for (c = 0; c != o.length; ++c)
                if (!(o[c].s.c > g) && !(o[c].s.r > x) && !(o[c].e.c < g) && !(o[c].e.r < x)) {
                    (o[c].s.c != g || o[c].s.r != x) && (v = !0); break }
            if (!v) { var b = { r: x, c: g },
                    A = At(b),
                    E = p ? (e[x] || [])[g] : e[A];
                m.push(L6(E, A, e, t, r, i, b)) } }
        m.push("</Row>"), m.length > 2 && f.push(m.join("")) } return f.join("") }

function z6(e, t, r) { var i = [],
        l = r.SheetNames[e],
        o = r.Sheets[l],
        c = o ? B6(o, t, e, r) : ""; return c.length > 0 && i.push("<Names>" + c + "</Names>"), c = o ? P6(o, t, e, r) : "", c.length > 0 && i.push("<Table>" + c + "</Table>"), i.push(k6(o, t, e, r)), i.join("") }

function I6(e, t) { t || (t = {}), e.SSF || (e.SSF = Ir(zt)), e.SSF && (wu(), Eu(e.SSF), t.revssf = _u(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], ri(t.cellXfs, {}, { revssf: { General: 0 } })); var r = [];
    r.push(O6(e, t)), r.push(R6()), r.push(""), r.push(""); for (var i = 0; i < e.SheetNames.length; ++i) r.push(Be("Worksheet", z6(i, t, e), { "ss:Name": bt(e.SheetNames[i]) })); return r[2] = F6(e, t), r[3] = j6(e), Qt + Be("Workbook", r.join(""), { xmlns: $r.ss, "xmlns:o": $r.o, "xmlns:x": $r.x, "xmlns:ss": $r.ss, "xmlns:dt": $r.dt, "xmlns:html": $r.html }) }
var Kf = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };

function H6(e, t) { var r = [],
        i = [],
        l = [],
        o = 0,
        c, f = dp(Tp, "n"),
        p = dp(Sp, "n"); if (e.Props)
        for (c = gr(e.Props), o = 0; o < c.length; ++o)(Object.prototype.hasOwnProperty.call(f, c[o]) ? r : Object.prototype.hasOwnProperty.call(p, c[o]) ? i : l).push([c[o], e.Props[c[o]]]); if (e.Custprops)
        for (c = gr(e.Custprops), o = 0; o < c.length; ++o) Object.prototype.hasOwnProperty.call(e.Props || {}, c[o]) || (Object.prototype.hasOwnProperty.call(f, c[o]) ? r : Object.prototype.hasOwnProperty.call(p, c[o]) ? i : l).push([c[o], e.Custprops[c[o]]]); var x = []; for (o = 0; o < l.length; ++o) Og.indexOf(l[o][0]) > -1 || Ng.indexOf(l[o][0]) > -1 || l[o][1] != null && x.push(l[o]);
    i.length && _t.utils.cfb_add(t, "/SummaryInformation", Rp(i, Kf.SI, p, Sp)), (r.length || x.length) && _t.utils.cfb_add(t, "/DocumentSummaryInformation", Rp(r, Kf.DSI, f, Tp, x.length ? x : null, Kf.UDI)) }

function G6(e, t) { var r = t || {},
        i = _t.utils.cfb_new({ root: "R" }),
        l = "/Workbook"; switch (r.bookType || "xls") {
        case "xls":
            r.bookType = "biff8";
        case "xla":
            r.bookType || (r.bookType = "xla");
        case "biff8":
            l = "/Workbook", r.biff = 8; break;
        case "biff5":
            l = "/Book", r.biff = 5; break;
        default:
            throw new Error("invalid type " + r.bookType + " for XLS CFB") } return _t.utils.cfb_add(i, l, sv(e, r)), r.biff == 8 && (e.Props || e.Custprops) && H6(e, i), r.biff == 8 && e.vbaraw && s8(i, _t.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), i }
var V6 = { 0: { f: YT }, 1: { f: tS }, 2: { f: AS }, 3: { f: cS }, 4: { f: iS }, 5: { f: gS }, 6: { f: SS }, 7: { f: hS }, 8: { f: jS }, 9: { f: FS }, 10: { f: OS }, 11: { f: RS }, 12: { f: aS }, 13: { f: wS }, 14: { f: fS }, 15: { f: sS }, 16: { f: yS }, 17: { f: CS }, 18: { f: xS }, 19: { f: zd }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: v6 }, 40: {}, 42: {}, 43: { f: S5 }, 44: { f: _5 }, 45: { f: D5 }, 46: { f: R5 }, 47: { f: O5 }, 48: {}, 49: { f: a_ }, 50: {}, 51: { f: Y5 }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: n5 }, 62: { f: TS }, 63: { f: J5 }, 64: { f: KS }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Wa, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: qS }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: JT }, 148: { f: QT, p: 16 }, 151: { f: PS }, 152: {}, 153: { f: p6 }, 154: {}, 155: {}, 156: { f: m6 }, 157: {}, 158: {}, 159: { T: 1, f: m5 }, 160: { T: -1 }, 161: { T: 1, f: Vi }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: BS }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: q5 }, 336: { T: -1 }, 337: { f: Q5, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: gd }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: $_ }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: zS }, 427: { f: IS }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: GS }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: $T }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: LS }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: gd }, 551: {}, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: n8 }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: r8 }, 636: { T: -1 }, 637: { f: s_ }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: o6 }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: QS }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } };

function ke(e, t, r, i) { var l = t; if (!isNaN(l)) { var o = i || (r || []).length || 0,
            c = e.next(4);
        c.write_shift(2, l), c.write_shift(2, o), o > 0 && Ld(r) && e.push(r) } }

function q6(e, t, r, i) { var l = (r || []).length || 0; if (l <= 8224) return ke(e, t, r, l); var o = t; if (!isNaN(o)) { for (var c = r.parts || [], f = 0, p = 0, x = 0; x + (c[f] || 8224) <= 8224;) x += c[f] || 8224, f++; var m = e.next(4); for (m.write_shift(2, o), m.write_shift(2, x), e.push(r.slice(p, p + x)), p += x; p < l;) { for (m = e.next(4), m.write_shift(2, 60), x = 0; x + (c[f] || 8224) <= 8224;) x += c[f] || 8224, f++;
            m.write_shift(2, x), e.push(r.slice(p, p + x)), p += x } } }

function go(e, t, r) { return e || (e = ve(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e }

function X6(e, t, r, i) { var l = ve(9); return go(l, e, t), Fg(r, i || "b", l), l }

function Y6(e, t, r) { var i = ve(8 + 2 * r.length); return go(i, e, t), i.write_shift(1, r.length), i.write_shift(r.length, r, "sbcs"), i.l < i.length ? i.slice(0, i.l) : i }

function W6(e, t, r, i) { if (t.v != null) switch (t.t) {
        case "d":
        case "n":
            var l = t.t == "d" ? zr(Fr(t.v)) : t.v;
            l == (l | 0) && l >= 0 && l < 65536 ? ke(e, 2, o5(r, i, l)) : ke(e, 3, s5(r, i, l)); return;
        case "b":
        case "e":
            ke(e, 5, X6(r, i, t.v, t.t)); return;
        case "s":
        case "str":
            ke(e, 4, Y6(r, i, (t.v || "").slice(0, 255))); return }
    ke(e, 1, go(null, r, i)) }

function K6(e, t, r, i) { var l = Array.isArray(t),
        o = Ft(t["!ref"] || "A1"),
        c, f = "",
        p = []; if (o.e.c > 255 || o.e.r > 16383) { if (i.WTF) throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
        o.e.c = Math.min(o.e.c, 255), o.e.r = Math.min(o.e.c, 16383), c = Kt(o) } for (var x = o.s.r; x <= o.e.r; ++x) { f = pr(x); for (var m = o.s.c; m <= o.e.c; ++m) { x === o.s.r && (p[m] = wr(m)), c = p[m] + f; var g = l ? (t[x] || [])[m] : t[c];
            g && W6(e, g, x, m) } } }

function Q6(e, t) { for (var r = t || {}, i = Pr(), l = 0, o = 0; o < e.SheetNames.length; ++o) e.SheetNames[o] == r.sheet && (l = o); if (l == 0 && r.sheet && e.SheetNames[0] != r.sheet) throw new Error("Sheet not found: " + r.sheet); return ke(i, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, Gd(e, 16, r)), K6(i, e.Sheets[e.SheetNames[l]], l, r), ke(i, 10), i.end() }

function Z6(e, t, r) { ke(e, 49, V_({ sz: 12, name: "Arial" }, r)) }

function $6(e, t, r) { t && [
        [5, 8],
        [23, 26],
        [41, 44],
        [50, 392]
    ].forEach(function(i) { for (var l = i[0]; l <= i[1]; ++l) t[l] != null && ke(e, 1054, Y_(l, t[l], r)) }) }

function J6(e, t) { var r = ve(19);
    r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), ke(e, 2151, r), r = ve(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), kg(Ft(t["!ref"] || "A1"), r), r.write_shift(4, 4), ke(e, 2152, r) }

function eN(e, t) { for (var r = 0; r < 16; ++r) ke(e, 224, jp({ numFmtId: 0, style: !0 }, 0, t));
    t.cellXfs.forEach(function(i) { ke(e, 224, jp(i, 0, t)) }) }

function tN(e, t) { for (var r = 0; r < t["!links"].length; ++r) { var i = t["!links"][r];
        ke(e, 440, t5(i)), i[1].Tooltip && ke(e, 2048, r5(i)) }
    delete t["!links"] }

function rN(e, t) { if (t) { var r = 0;
        t.forEach(function(i, l) {++r <= 256 && i && ke(e, 125, i5(Cu(l, i), l)) }) } }

function aN(e, t, r, i, l) { var o = 16 + ri(l.cellXfs, t, l); if (t.v == null && !t.bf) { ke(e, 513, Ui(r, i, o)); return } if (t.bf) ke(e, 6, NT(t, r, i, l, o));
    else switch (t.t) {
        case "d":
        case "n":
            var c = t.t == "d" ? zr(Fr(t.v)) : t.v;
            ke(e, 515, Z_(r, i, c, o)); break;
        case "b":
        case "e":
            ke(e, 517, Q_(r, i, t.v, o, l, t.t)); break;
        case "s":
        case "str":
            if (l.bookSST) { var f = Wd(l.Strings, t.v, l.revStrings);
                ke(e, 253, q_(r, i, f, o)) } else ke(e, 516, X_(r, i, (t.v || "").slice(0, 255), o, l)); break;
        default:
            ke(e, 513, Ui(r, i, o)) } }

function nN(e, t, r) { var i = Pr(),
        l = r.SheetNames[e],
        o = r.Sheets[l] || {},
        c = (r || {}).Workbook || {},
        f = (c.Sheets || [])[e] || {},
        p = Array.isArray(o),
        x = t.biff == 8,
        m, g = "",
        v = [],
        b = Ft(o["!ref"] || "A1"),
        A = x ? 65536 : 16384; if (b.e.c > 255 || b.e.r >= A) { if (t.WTF) throw new Error("Range " + (o["!ref"] || "A1") + " exceeds format limit A1:IV16384");
        b.e.c = Math.min(b.e.c, 255), b.e.r = Math.min(b.e.c, A - 1) }
    ke(i, 2057, Gd(r, 16, t)), ke(i, 13, ba(1)), ke(i, 12, ba(100)), ke(i, 15, Or(!0)), ke(i, 17, Or(!1)), ke(i, 16, Li(.001)), ke(i, 95, Or(!0)), ke(i, 42, Or(!1)), ke(i, 43, Or(!1)), ke(i, 130, ba(1)), ke(i, 128, K_()), ke(i, 131, Or(!1)), ke(i, 132, Or(!1)), x && rN(i, o["!cols"]), ke(i, 512, W_(b, t)), x && (o["!links"] = []); for (var E = b.s.r; E <= b.e.r; ++E) { g = pr(E); for (var w = b.s.c; w <= b.e.c; ++w) { E === b.s.r && (v[w] = wr(w)), m = v[w] + g; var S = p ? (o[E] || [])[w] : o[m];
            S && (aN(i, S, E, w, t), x && S.l && o["!links"].push([m, S.l])) } } var O = f.CodeName || f.name || l; return x && ke(i, 574, G_((c.Views || [])[0])), x && (o["!merges"] || []).length && ke(i, 229, e5(o["!merges"])), x && tN(i, o), ke(i, 442, Bg(O)), x && J6(i, o), ke(i, 10), i.end() }

function iN(e, t, r) { var i = Pr(),
        l = (e || {}).Workbook || {},
        o = l.Sheets || [],
        c = l.WBProps || {},
        f = r.biff == 8,
        p = r.biff == 5; if (ke(i, 2057, Gd(e, 5, r)), r.bookType == "xla" && ke(i, 135), ke(i, 225, f ? ba(1200) : null), ke(i, 193, O_(2)), p && ke(i, 191), p && ke(i, 192), ke(i, 226), ke(i, 92, P_("SheetJS", r)), ke(i, 66, ba(f ? 1200 : 1252)), f && ke(i, 353, ba(0)), f && ke(i, 448), ke(i, 317, l5(e.SheetNames.length)), f && e.vbaraw && ke(i, 211), f && e.vbaraw) { var x = c.CodeName || "ThisWorkbook";
        ke(i, 442, Bg(x)) }
    ke(i, 156, ba(17)), ke(i, 25, Or(!1)), ke(i, 18, Or(!1)), ke(i, 19, ba(0)), f && ke(i, 431, Or(!1)), f && ke(i, 444, ba(0)), ke(i, 61, H_()), ke(i, 64, Or(!1)), ke(i, 141, ba(0)), ke(i, 34, Or(u6(e) == "true")), ke(i, 14, Or(!0)), f && ke(i, 439, Or(!1)), ke(i, 218, ba(0)), Z6(i, e, r), $6(i, e.SSF, r), eN(i, r), f && ke(i, 352, Or(!1)); var m = i.end(),
        g = Pr();
    f && ke(g, 140, a5()), f && r.Strings && q6(g, 252, I_(r.Strings)), ke(g, 10); var v = g.end(),
        b = Pr(),
        A = 0,
        E = 0; for (E = 0; E < e.SheetNames.length; ++E) A += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[E].length; var w = m.length + A + v.length; for (E = 0; E < e.SheetNames.length; ++E) { var S = o[E] || {};
        ke(b, 133, z_({ pos: w, hs: S.Hidden || 0, dt: 0, name: e.SheetNames[E] }, r)), w += t[E].length } var O = b.end(); if (A != O.length) throw new Error("BS8 " + A + " != " + O.length); var D = []; return m.length && D.push(m), O.length && D.push(O), v.length && D.push(v), mr(D) }

function lN(e, t) { var r = t || {},
        i = [];
    e && !e.SSF && (e.SSF = Ir(zt)), e && e.SSF && (wu(), Eu(e.SSF), r.revssf = _u(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Kd(r), r.cellXfs = [], ri(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}); for (var l = 0; l < e.SheetNames.length; ++l) i[i.length] = nN(l, r, e); return i.unshift(iN(e, i, r)), mr(i) }

function sv(e, t) { for (var r = 0; r <= e.SheetNames.length; ++r) { var i = e.Sheets[e.SheetNames[r]]; if (!(!i || !i["!ref"])) { var l = ta(i["!ref"]);
            l.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.") } } var o = t || {}; switch (o.biff || 2) {
        case 8:
        case 5:
            return lN(e, t);
        case 4:
        case 3:
        case 2:
            return Q6(e, t) } throw new Error("invalid type " + o.bookType + " for BIFF") }

function sN(e, t, r, i) { for (var l = e["!merges"] || [], o = [], c = t.s.c; c <= t.e.c; ++c) { for (var f = 0, p = 0, x = 0; x < l.length; ++x)
            if (!(l[x].s.r > r || l[x].s.c > c) && !(l[x].e.r < r || l[x].e.c < c)) { if (l[x].s.r < r || l[x].s.c < c) { f = -1; break }
                f = l[x].e.r - l[x].s.r + 1, p = l[x].e.c - l[x].s.c + 1; break }
        if (!(f < 0)) { var m = At({ r, c }),
                g = i.dense ? (e[r] || [])[c] : e[m],
                v = g && g.v != null && (g.h || Uw(g.w || (vn(g), g.w) || "")) || "",
                b = {};
            f > 1 && (b.rowspan = f), p > 1 && (b.colspan = p), i.editable ? v = '<span contenteditable="true">' + v + "</span>" : g && (b["data-t"] = g && g.t || "z", g.v != null && (b["data-v"] = g.v), g.z != null && (b["data-z"] = g.z), g.l && (g.l.Target || "#").charAt(0) != "#" && (v = '<a href="' + g.l.Target + '">' + v + "</a>")), b.id = (i.id || "sjs") + "-" + m, o.push(Be("td", v, b)) } } var A = "<tr>"; return A + o.join("") + "</tr>" }
var oN = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
    cN = "</body></html>";

function uN(e, t, r) { var i = []; return i.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">" }

function ov(e, t) { var r = t || {},
        i = r.header != null ? r.header : oN,
        l = r.footer != null ? r.footer : cN,
        o = [i],
        c = ta(e["!ref"]);
    r.dense = Array.isArray(e), o.push(uN(e, c, r)); for (var f = c.s.r; f <= c.e.r; ++f) o.push(sN(e, c, f, r)); return o.push("</table>" + l), o.join("") }

function cv(e, t, r) { var i = r || {},
        l = 0,
        o = 0; if (i.origin != null)
        if (typeof i.origin == "number") l = i.origin;
        else { var c = typeof i.origin == "string" ? ir(i.origin) : i.origin;
            l = c.r, o = c.c }
    var f = t.getElementsByTagName("tr"),
        p = Math.min(i.sheetRows || 1e7, f.length),
        x = { s: { r: 0, c: 0 }, e: { r: l, c: o } }; if (e["!ref"]) { var m = ta(e["!ref"]);
        x.s.r = Math.min(x.s.r, m.s.r), x.s.c = Math.min(x.s.c, m.s.c), x.e.r = Math.max(x.e.r, m.e.r), x.e.c = Math.max(x.e.c, m.e.c), l == -1 && (x.e.r = l = m.e.r + 1) } var g = [],
        v = 0,
        b = e["!rows"] || (e["!rows"] = []),
        A = 0,
        E = 0,
        w = 0,
        S = 0,
        O = 0,
        D = 0; for (e["!cols"] || (e["!cols"] = []); A < f.length && E < p; ++A) { var F = f[A]; if (zp(F)) { if (i.display) continue;
            b[E] = { hidden: !0 } } var K = F.children; for (w = S = 0; w < K.length; ++w) { var I = K[w]; if (!(i.display && zp(I))) { var V = I.hasAttribute("data-v") ? I.getAttribute("data-v") : I.hasAttribute("v") ? I.getAttribute("v") : Hw(I.innerHTML),
                    N = I.getAttribute("data-z") || I.getAttribute("z"); for (v = 0; v < g.length; ++v) { var _ = g[v];
                    _.s.c == S + o && _.s.r < E + l && E + l <= _.e.r && (S = _.e.c + 1 - o, v = -1) }
                D = +I.getAttribute("colspan") || 1, ((O = +I.getAttribute("rowspan") || 1) > 1 || D > 1) && g.push({ s: { r: E + l, c: S + o }, e: { r: E + l + (O || 1) - 1, c: S + o + (D || 1) - 1 } }); var U = { t: "s", v: V },
                    q = I.getAttribute("data-t") || I.getAttribute("t") || "";
                V != null && (V.length == 0 ? U.t = q || "z" : i.raw || V.trim().length == 0 || q == "s" || (V === "TRUE" ? U = { t: "b", v: !0 } : V === "FALSE" ? U = { t: "b", v: !1 } : isNaN(mn(V)) ? isNaN(ro(V).getDate()) || (U = { t: "d", v: Fr(V) }, i.cellDates || (U = { t: "n", v: zr(U.v) }), U.z = i.dateNF || zt[14]) : U = { t: "n", v: mn(V) })), U.z === void 0 && N != null && (U.z = N); var H = "",
                    W = I.getElementsByTagName("A"); if (W && W.length)
                    for (var ee = 0; ee < W.length && !(W[ee].hasAttribute("href") && (H = W[ee].getAttribute("href"), H.charAt(0) != "#")); ++ee);
                H && H.charAt(0) != "#" && (U.l = { Target: H }), i.dense ? (e[E + l] || (e[E + l] = []), e[E + l][S + o] = U) : e[At({ c: S + o, r: E + l })] = U, x.e.c < S + o && (x.e.c = S + o), S += D } }++E } return g.length && (e["!merges"] = (e["!merges"] || []).concat(g)), x.e.r = Math.max(x.e.r, E - 1 + l), e["!ref"] = Kt(x), E >= p && (e["!fullref"] = Kt((x.e.r = f.length - A + E - 1 + l, x))), e }

function uv(e, t) { var r = t || {},
        i = r.dense ? [] : {}; return cv(i, e, t) }

function fN(e, t) { return zi(uv(e, t), t) }

function zp(e) { var t = "",
        r = dN(e); return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none" }

function dN(e) { return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null }
var hN = function() { var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""),
            t = "<office:document-styles " + no({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "office:version": "1.2" }) + ">" + e + "</office:document-styles>"; return function() { return Qt + t } }(),
    Ip = function() { var e = function(o) { return bt(o).replace(/  +/g, function(c) { return '<text:s text:c="' + c.length + '"/>' }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>") },
            t = `          <table:table-cell />
`,
            r = `          <table:covered-table-cell/>
`,
            i = function(o, c, f) { var p = [];
                p.push('      <table:table table:name="' + bt(c.SheetNames[f]) + `" table:style-name="ta1">
`); var x = 0,
                    m = 0,
                    g = ta(o["!ref"] || "A1"),
                    v = o["!merges"] || [],
                    b = 0,
                    A = Array.isArray(o); if (o["!cols"])
                    for (m = 0; m <= g.e.c; ++m) p.push("        <table:table-column" + (o["!cols"][m] ? ' table:style-name="co' + o["!cols"][m].ods + '"' : "") + `></table:table-column>
`); var E = "",
                    w = o["!rows"] || []; for (x = 0; x < g.s.r; ++x) E = w[x] ? ' table:style-name="ro' + w[x].ods + '"' : "", p.push("        <table:table-row" + E + `></table:table-row>
`); for (; x <= g.e.r; ++x) { for (E = w[x] ? ' table:style-name="ro' + w[x].ods + '"' : "", p.push("        <table:table-row" + E + `>
`), m = 0; m < g.s.c; ++m) p.push(t); for (; m <= g.e.c; ++m) { var S = !1,
                            O = {},
                            D = ""; for (b = 0; b != v.length; ++b)
                            if (!(v[b].s.c > m) && !(v[b].s.r > x) && !(v[b].e.c < m) && !(v[b].e.r < x)) {
                                (v[b].s.c != m || v[b].s.r != x) && (S = !0), O["table:number-columns-spanned"] = v[b].e.c - v[b].s.c + 1, O["table:number-rows-spanned"] = v[b].e.r - v[b].s.r + 1; break }
                        if (S) { p.push(r); continue } var F = At({ r: x, c: m }),
                            K = A ? (o[x] || [])[m] : o[F]; if (K && K.f && (O["table:formula"] = bt(jT(K.f)), K.F && K.F.slice(0, F.length) == F)) { var I = ta(K.F);
                            O["table:number-matrix-columns-spanned"] = I.e.c - I.s.c + 1, O["table:number-matrix-rows-spanned"] = I.e.r - I.s.r + 1 } if (!K) { p.push(t); continue } switch (K.t) {
                            case "b":
                                D = K.v ? "TRUE" : "FALSE", O["office:value-type"] = "boolean", O["office:boolean-value"] = K.v ? "true" : "false"; break;
                            case "n":
                                D = K.w || String(K.v || 0), O["office:value-type"] = "float", O["office:value"] = K.v || 0; break;
                            case "s":
                            case "str":
                                D = K.v == null ? "" : K.v, O["office:value-type"] = "string"; break;
                            case "d":
                                D = K.w || Fr(K.v).toISOString(), O["office:value-type"] = "date", O["office:date-value"] = Fr(K.v).toISOString(), O["table:style-name"] = "ce1"; break;
                            default:
                                p.push(t); continue } var V = e(D); if (K.l && K.l.Target) { var N = K.l.Target;
                            N = N.charAt(0) == "#" ? "#" + BT(N.slice(1)) : N, N.charAt(0) != "#" && !N.match(/^\w+:/) && (N = "../" + N), V = Be("text:a", V, { "xlink:href": N.replace(/&/g, "&amp;") }) }
                        p.push("          " + Be("table:table-cell", Be("text:p", V, {}), O) + `
`) }
                    p.push(`        </table:table-row>
`) } return p.push(`      </table:table>
`), p.join("") },
            l = function(o, c) { o.push(` <office:automatic-styles>
`), o.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), o.push(`   <number:month number:style="long"/>
`), o.push(`   <number:text>/</number:text>
`), o.push(`   <number:day number:style="long"/>
`), o.push(`   <number:text>/</number:text>
`), o.push(`   <number:year/>
`), o.push(`  </number:date-style>
`); var f = 0;
                c.SheetNames.map(function(x) { return c.Sheets[x] }).forEach(function(x) { if (x && x["!cols"]) { for (var m = 0; m < x["!cols"].length; ++m)
                            if (x["!cols"][m]) { var g = x["!cols"][m]; if (g.width == null && g.wpx == null && g.wch == null) continue;
                                Vd(g), g.ods = f; var v = x["!cols"][m].wpx + "px";
                                o.push('  <style:style style:name="co' + f + `" style:family="table-column">
`), o.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + v + `"/>
`), o.push(`  </style:style>
`), ++f } } }); var p = 0;
                c.SheetNames.map(function(x) { return c.Sheets[x] }).forEach(function(x) { if (x && x["!rows"]) { for (var m = 0; m < x["!rows"].length; ++m)
                            if (x["!rows"][m]) { x["!rows"][m].ods = p; var g = x["!rows"][m].hpx + "px";
                                o.push('  <style:style style:name="ro' + p + `" style:family="table-row">
`), o.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + g + `"/>
`), o.push(`  </style:style>
`), ++p } } }), o.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), o.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), o.push(`  </style:style>
`), o.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), o.push(` </office:automatic-styles>
`) }; return function(c, f) { var p = [Qt],
                x = no({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", "xmlns:math": "http://www.w3.org/1998/Math/MathML", "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0", "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0", "xmlns:ooo": "http://openoffice.org/2004/office", "xmlns:ooow": "http://openoffice.org/2004/writer", "xmlns:oooc": "http://openoffice.org/2004/calc", "xmlns:dom": "http://www.w3.org/2001/xml-events", "xmlns:xforms": "http://www.w3.org/2002/xforms", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0", "xmlns:rpt": "http://openoffice.org/2005/report", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "xmlns:xhtml": "http://www.w3.org/1999/xhtml", "xmlns:grddl": "http://www.w3.org/2003/g/data-view#", "xmlns:tableooo": "http://openoffice.org/2009/table", "xmlns:drawooo": "http://openoffice.org/2010/draw", "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0", "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0", "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0", "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0", "xmlns:css3t": "http://www.w3.org/TR/css3-text/", "office:version": "1.2" }),
                m = no({ "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0", "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet" });
            f.bookType == "fods" ? (p.push("<office:document" + x + m + `>
`), p.push(Tg().replace(/office:document-meta/g, "office:meta"))) : p.push("<office:document-content" + x + `>
`), l(p, c), p.push(`  <office:body>
`), p.push(`    <office:spreadsheet>
`); for (var g = 0; g != c.SheetNames.length; ++g) p.push(i(c.Sheets[c.SheetNames[g]], c, g)); return p.push(`    </office:spreadsheet>
`), p.push(`  </office:body>
`), f.bookType == "fods" ? p.push("</office:document>") : p.push("</office:document-content>"), p.join("") } }();

function fv(e, t) { if (t.bookType == "fods") return Ip(e, t); var r = jd(),
        i = "",
        l = [],
        o = []; return i = "mimetype", et(r, i, "application/vnd.oasis.opendocument.spreadsheet"), i = "content.xml", et(r, i, Ip(e, t)), l.push([i, "text/xml"]), o.push([i, "ContentFile"]), i = "styles.xml", et(r, i, hN(e, t)), l.push([i, "text/xml"]), o.push([i, "StylesFile"]), i = "meta.xml", et(r, i, Qt + Tg()), l.push([i, "text/xml"]), o.push([i, "MetadataFile"]), i = "manifest.rdf", et(r, i, T_(o)), l.push([i, "application/rdf+xml"]), i = "META-INF/manifest.xml", et(r, i, w_(l)), r } /*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function su(e) { return new DataView(e.buffer, e.byteOffset, e.byteLength) }

function mN(e) { return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Ra(ao(e)) }

function xN(e, t) { e: for (var r = 0; r <= e.length - t.length; ++r) { for (var i = 0; i < t.length; ++i)
            if (e[r + i] != t[i]) continue e;
        return !0 }
    return !1 }

function Jn(e) { var t = e.reduce(function(l, o) { return l + o.length }, 0),
        r = new Uint8Array(t),
        i = 0; return e.forEach(function(l) { r.set(l, i), i += l.length }), r }

function pN(e, t, r) { var i = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
        l = r / Math.pow(10, i - 6176);
    e[t + 15] |= i >> 7, e[t + 14] |= (i & 127) << 1; for (var o = 0; l >= 1; ++o, l /= 256) e[t + o] = l & 255;
    e[t + 15] |= r >= 0 ? 0 : 128 }

function io(e, t) { var r = t ? t[0] : 0,
        i = e[r] & 127;
    e: if (e[r++] >= 128 && (i |= (e[r] & 127) << 7, e[r++] < 128 || (i |= (e[r] & 127) << 14, e[r++] < 128) || (i |= (e[r] & 127) << 21, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128))) break e; return t && (t[0] = r), i }

function vt(e) { var t = new Uint8Array(7);
    t[0] = e & 127; var r = 1;
    e: if (e > 127) { if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103)) break e;
        t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r } return t.slice(0, r) }

function jl(e) { var t = 0,
        r = e[t] & 127;
    e: if (e[t++] >= 128) { if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128)) break e;
        r |= (e[t] & 127) << 28 } return r }

function Jt(e) { for (var t = [], r = [0]; r[0] < e.length;) { var i = r[0],
            l = io(e, r),
            o = l & 7;
        l = Math.floor(l / 8); var c = 0,
            f; if (l == 0) break; switch (o) {
            case 0:
                { for (var p = r[0]; e[r[0]++] >= 128;);f = e.slice(p, r[0]) } break;
            case 5:
                c = 4, f = e.slice(r[0], r[0] + c), r[0] += c; break;
            case 1:
                c = 8, f = e.slice(r[0], r[0] + c), r[0] += c; break;
            case 2:
                c = io(e, r), f = e.slice(r[0], r[0] + c), r[0] += c; break;
            case 3:
            case 4:
            default:
                throw new Error("PB Type ".concat(o, " for Field ").concat(l, " at offset ").concat(i)) } var x = { data: f, type: o };
        t[l] == null ? t[l] = [x] : t[l].push(x) } return t }

function dr(e) { var t = []; return e.forEach(function(r, i) { r.forEach(function(l) { l.data && (t.push(vt(i * 8 + l.type)), l.type == 2 && t.push(vt(l.data.length)), t.push(l.data)) }) }), Jn(t) }

function Ca(e) { for (var t, r = [], i = [0]; i[0] < e.length;) { var l = io(e, i),
            o = Jt(e.slice(i[0], i[0] + l));
        i[0] += l; var c = { id: jl(o[1][0].data), messages: [] };
        o[2].forEach(function(f) { var p = Jt(f.data),
                x = jl(p[3][0].data);
            c.messages.push({ meta: p, data: e.slice(i[0], i[0] + x) }), i[0] += x }), (t = o[3]) != null && t[0] && (c.merge = jl(o[3][0].data) >>> 0 > 0), r.push(c) } return r }

function Tl(e) { var t = []; return e.forEach(function(r) { var i = [];
        i[1] = [{ data: vt(r.id), type: 0 }], i[2] = [], r.merge != null && (i[3] = [{ data: vt(+!!r.merge), type: 0 }]); var l = [];
        r.messages.forEach(function(c) { l.push(c.data), c.meta[3] = [{ type: 0, data: vt(c.data.length) }], i[2].push({ data: dr(c.meta), type: 2 }) }); var o = dr(i);
        t.push(vt(o.length)), t.push(o), l.forEach(function(c) { return t.push(c) }) }), Jn(t) }

function gN(e, t) { if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e)); for (var r = [0], i = io(t, r), l = []; r[0] < t.length;) { var o = t[r[0]] & 3; if (o == 0) { var c = t[r[0]++] >> 2; if (c < 60) ++c;
            else { var f = c - 59;
                c = t[r[0]], f > 1 && (c |= t[r[0] + 1] << 8), f > 2 && (c |= t[r[0] + 2] << 16), f > 3 && (c |= t[r[0] + 3] << 24), c >>>= 0, c++, r[0] += f }
            l.push(t.slice(r[0], r[0] + c)), r[0] += c; continue } else { var p = 0,
                x = 0; if (o == 1 ? (x = (t[r[0]] >> 2 & 7) + 4, p = (t[r[0]++] & 224) << 3, p |= t[r[0]++]) : (x = (t[r[0]++] >> 2) + 1, o == 2 ? (p = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (p = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), l = [Jn(l)], p == 0) throw new Error("Invalid offset 0"); if (p > l[0].length) throw new Error("Invalid offset beyond length"); if (x >= p)
                for (l.push(l[0].slice(-p)), x -= p; x >= l[l.length - 1].length;) l.push(l[l.length - 1]), x -= l[l.length - 1].length;
            l.push(l[0].slice(-p, -p + x)) } } var m = Jn(l); if (m.length != i) throw new Error("Unexpected length: ".concat(m.length, " != ").concat(i)); return m }

function Da(e) { for (var t = [], r = 0; r < e.length;) { var i = e[r++],
            l = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
        r += 3, t.push(gN(i, e.slice(r, r + l))), r += l } if (r !== e.length) throw new Error("data is not a valid framed stream!"); return Jn(t) }

function Sl(e) { for (var t = [], r = 0; r < e.length;) { var i = Math.min(e.length - r, 268435455),
            l = new Uint8Array(4);
        t.push(l); var o = vt(i),
            c = o.length;
        t.push(o), i <= 60 ? (c++, t.push(new Uint8Array([i - 1 << 2]))) : i <= 256 ? (c += 2, t.push(new Uint8Array([240, i - 1 & 255]))) : i <= 65536 ? (c += 3, t.push(new Uint8Array([244, i - 1 & 255, i - 1 >> 8 & 255]))) : i <= 16777216 ? (c += 4, t.push(new Uint8Array([248, i - 1 & 255, i - 1 >> 8 & 255, i - 1 >> 16 & 255]))) : i <= 4294967296 && (c += 5, t.push(new Uint8Array([252, i - 1 & 255, i - 1 >> 8 & 255, i - 1 >> 16 & 255, i - 1 >>> 24 & 255]))), t.push(e.slice(r, r + i)), c += i, l[0] = 0, l[1] = c & 255, l[2] = c >> 8 & 255, l[3] = c >> 16 & 255, r += i } return Jn(t) }

function Qf(e, t) { var r = new Uint8Array(32),
        i = su(r),
        l = 12,
        o = 0; switch (r[0] = 5, e.t) {
        case "n":
            r[1] = 2, pN(r, l, e.v), o |= 1, l += 16; break;
        case "b":
            r[1] = 6, i.setFloat64(l, e.v ? 1 : 0, !0), o |= 2, l += 8; break;
        case "s":
            if (t.indexOf(e.v) == -1) throw new Error("Value ".concat(e.v, " missing from SST!"));
            r[1] = 3, i.setUint32(l, t.indexOf(e.v), !0), o |= 8, l += 4; break;
        default:
            throw "unsupported cell type " + e.t } return i.setUint32(8, o, !0), r.slice(0, l) }

function Zf(e, t) { var r = new Uint8Array(32),
        i = su(r),
        l = 12,
        o = 0; switch (r[0] = 3, e.t) {
        case "n":
            r[2] = 2, i.setFloat64(l, e.v, !0), o |= 32, l += 8; break;
        case "b":
            r[2] = 6, i.setFloat64(l, e.v ? 1 : 0, !0), o |= 32, l += 8; break;
        case "s":
            if (t.indexOf(e.v) == -1) throw new Error("Value ".concat(e.v, " missing from SST!"));
            r[2] = 3, i.setUint32(l, t.indexOf(e.v), !0), o |= 16, l += 4; break;
        default:
            throw "unsupported cell type " + e.t } return i.setUint32(4, o, !0), r.slice(0, l) }

function qn(e) { var t = Jt(e); return io(t[1][0].data) }

function vN(e, t, r) { var i, l, o, c; if (!((i = e[6]) != null && i[0]) || !((l = e[7]) != null && l[0])) throw "Mutation only works on post-BNC storages!"; var f = ((c = (o = e[8]) == null ? void 0 : o[0]) == null ? void 0 : c.data) && jl(e[8][0].data) > 0 || !1; if (f) throw "Math only works with normal offsets"; for (var p = 0, x = su(e[7][0].data), m = 0, g = [], v = su(e[4][0].data), b = 0, A = [], E = 0; E < t.length; ++E) { if (t[E] == null) { x.setUint16(E * 2, 65535, !0), v.setUint16(E * 2, 65535); continue }
        x.setUint16(E * 2, m, !0), v.setUint16(E * 2, b, !0); var w, S; switch (typeof t[E]) {
            case "string":
                w = Qf({ t: "s", v: t[E] }, r), S = Zf({ t: "s", v: t[E] }, r); break;
            case "number":
                w = Qf({ t: "n", v: t[E] }, r), S = Zf({ t: "n", v: t[E] }, r); break;
            case "boolean":
                w = Qf({ t: "b", v: t[E] }, r), S = Zf({ t: "b", v: t[E] }, r); break;
            default:
                throw new Error("Unsupported value " + t[E]) }
        g.push(w), m += w.length, A.push(S), b += S.length, ++p } for (e[2][0].data = vt(p); E < e[7][0].data.length / 2; ++E) x.setUint16(E * 2, 65535, !0), v.setUint16(E * 2, 65535, !0); return e[6][0].data = Jn(g), e[3][0].data = Jn(A), p }

function yN(e, t) { if (!t || !t.numbers) throw new Error("Must pass a `numbers` option -- check the README"); var r = e.Sheets[e.SheetNames[0]];
    e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table"); var i = ta(r["!ref"]);
    i.s.r = i.s.c = 0; var l = !1;
    i.e.c > 9 && (l = !0, i.e.c = 9), i.e.r > 49 && (l = !0, i.e.r = 49), l && console.error("The Numbers writer is currently limited to ".concat(Kt(i))); var o = ou(r, { range: i, header: 1 }),
        c = ["~Sh33tJ5~"];
    o.forEach(function(Q) { return Q.forEach(function(L) { typeof L == "string" && c.push(L) }) }); var f = {},
        p = [],
        x = _t.read(t.numbers, { type: "base64" });
    x.FileIndex.map(function(Q, L) { return [Q, x.FullPaths[L]] }).forEach(function(Q) { var L = Q[0],
            M = Q[1]; if (L.type == 2 && L.name.match(/\.iwa/)) { var ie = L.content,
                _e = Da(ie),
                we = Ca(_e);
            we.forEach(function(Te) { p.push(Te.id), f[Te.id] = { deps: [], location: M, type: jl(Te.messages[0].meta[1][0].data) } }) } }), p.sort(function(Q, L) { return Q - L }); var m = p.filter(function(Q) { return Q > 1 }).map(function(Q) { return [Q, vt(Q)] });
    x.FileIndex.map(function(Q, L) { return [Q, x.FullPaths[L]] }).forEach(function(Q) { var L = Q[0]; if (Q[1], !!L.name.match(/\.iwa/)) { var M = Ca(Da(L.content));
            M.forEach(function(ie) { ie.messages.forEach(function(_e) { m.forEach(function(we) { ie.messages.some(function(Te) { return jl(Te.meta[1][0].data) != 11006 && xN(Te.data, we[1]) }) && f[we[0]].deps.push(ie.id) }) }) }) } }); for (var g = _t.find(x, f[1].location), v = Ca(Da(g.content)), b, A = 0; A < v.length; ++A) { var E = v[A];
        E.id == 1 && (b = E) } var w = qn(Jt(b.messages[0].data)[1][0].data); for (g = _t.find(x, f[w].location), v = Ca(Da(g.content)), A = 0; A < v.length; ++A) E = v[A], E.id == w && (b = E); for (w = qn(Jt(b.messages[0].data)[2][0].data), g = _t.find(x, f[w].location), v = Ca(Da(g.content)), A = 0; A < v.length; ++A) E = v[A], E.id == w && (b = E); for (w = qn(Jt(b.messages[0].data)[2][0].data), g = _t.find(x, f[w].location), v = Ca(Da(g.content)), A = 0; A < v.length; ++A) E = v[A], E.id == w && (b = E); var S = Jt(b.messages[0].data); { S[6][0].data = vt(i.e.r + 1), S[7][0].data = vt(i.e.c + 1); var O = qn(S[46][0].data),
            D = _t.find(x, f[O].location),
            F = Ca(Da(D.content)); { for (var K = 0; K < F.length && F[K].id != O; ++K); if (F[K].id != O) throw "Bad ColumnRowUIDMapArchive"; var I = Jt(F[K].messages[0].data);
            I[1] = [], I[2] = [], I[3] = []; for (var V = 0; V <= i.e.c; ++V) { var N = [];
                N[1] = N[2] = [{ type: 0, data: vt(V + 420690) }], I[1].push({ type: 2, data: dr(N) }), I[2].push({ type: 0, data: vt(V) }), I[3].push({ type: 0, data: vt(V) }) }
            I[4] = [], I[5] = [], I[6] = []; for (var _ = 0; _ <= i.e.r; ++_) N = [], N[1] = N[2] = [{ type: 0, data: vt(_ + 726270) }], I[4].push({ type: 2, data: dr(N) }), I[5].push({ type: 0, data: vt(_) }), I[6].push({ type: 0, data: vt(_) });
            F[K].messages[0].data = dr(I) }
        D.content = Sl(Tl(F)), D.size = D.content.length, delete S[46]; var U = Jt(S[4][0].data); { U[7][0].data = vt(i.e.r + 1); var q = Jt(U[1][0].data),
                H = qn(q[2][0].data);
            D = _t.find(x, f[H].location), F = Ca(Da(D.content)); { if (F[0].id != H) throw "Bad HeaderStorageBucket"; var W = Jt(F[0].messages[0].data); for (_ = 0; _ < o.length; ++_) { var ee = Jt(W[2][0].data);
                    ee[1][0].data = vt(_), ee[4][0].data = vt(o[_].length), W[2][_] = { type: W[2][0].type, data: dr(ee) } }
                F[0].messages[0].data = dr(W) }
            D.content = Sl(Tl(F)), D.size = D.content.length; var re = qn(U[2][0].data);
            D = _t.find(x, f[re].location), F = Ca(Da(D.content)); { if (F[0].id != re) throw "Bad HeaderStorageBucket"; for (W = Jt(F[0].messages[0].data), V = 0; V <= i.e.c; ++V) ee = Jt(W[2][0].data), ee[1][0].data = vt(V), ee[4][0].data = vt(i.e.r + 1), W[2][V] = { type: W[2][0].type, data: dr(ee) };
                F[0].messages[0].data = dr(W) }
            D.content = Sl(Tl(F)), D.size = D.content.length; var B = qn(U[4][0].data);
            (function() { for (var Q = _t.find(x, f[B].location), L = Ca(Da(Q.content)), M, ie = 0; ie < L.length; ++ie) { var _e = L[ie];
                    _e.id == B && (M = _e) } var we = Jt(M.messages[0].data); { we[3] = []; var Te = [];
                    c.forEach(function(ze, st) { Te[1] = [{ type: 0, data: vt(st) }], Te[2] = [{ type: 0, data: vt(1) }], Te[3] = [{ type: 2, data: mN(ze) }], we[3].push({ type: 2, data: dr(Te) }) }) }
                M.messages[0].data = dr(we); var ye = Tl(L),
                    Pe = Sl(ye);
                Q.content = Pe, Q.size = Q.content.length })(); var C = Jt(U[3][0].data); { var se = C[1][0];
                delete C[2]; var te = Jt(se.data); { var j = qn(te[2][0].data);
                    (function() { for (var Q = _t.find(x, f[j].location), L = Ca(Da(Q.content)), M, ie = 0; ie < L.length; ++ie) { var _e = L[ie];
                            _e.id == j && (M = _e) } var we = Jt(M.messages[0].data); { delete we[6], delete C[7]; var Te = new Uint8Array(we[5][0].data);
                            we[5] = []; for (var ye = 0, Pe = 0; Pe <= i.e.r; ++Pe) { var ze = Jt(Te);
                                ye += vN(ze, o[Pe], c), ze[1][0].data = vt(Pe), we[5].push({ data: dr(ze), type: 2 }) }
                            we[1] = [{ type: 0, data: vt(i.e.c + 1) }], we[2] = [{ type: 0, data: vt(i.e.r + 1) }], we[3] = [{ type: 0, data: vt(ye) }], we[4] = [{ type: 0, data: vt(i.e.r + 1) }] }
                        M.messages[0].data = dr(we); var st = Tl(L),
                            Ye = Sl(st);
                        Q.content = Ye, Q.size = Q.content.length })() }
                se.data = dr(te) }
            U[3][0].data = dr(C) }
        S[4][0].data = dr(U) }
    b.messages[0].data = dr(S); var ce = Tl(v),
        k = Sl(ce); return g.content = k, g.size = g.content.length, x }

function bN(e) { return function(r) { for (var i = 0; i != e.length; ++i) { var l = e[i];
            r[l[0]] === void 0 && (r[l[0]] = l[1]), l[2] === "n" && (r[l[0]] = Number(r[l[0]])) } } }

function Kd(e) { bN([
        ["cellDates", !1],
        ["bookSST", !1],
        ["bookType", "xlsx"],
        ["compression", !1],
        ["WTF", !1]
    ])(e) }

function AN(e, t) { return t.bookType == "ods" ? fv(e, t) : t.bookType == "numbers" ? yN(e, t) : t.bookType == "xlsb" ? EN(e, t) : wN(e, t) }

function EN(e, t) { Cl = 1024, e && !e.SSF && (e.SSF = Ir(zt)), e && e.SSF && (wu(), Eu(e.SSF), t.revssf = _u(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Ks ? t.revStrings = new Map : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo); var r = t.bookType == "xlsb" ? "bin" : "xml",
        i = Yg.indexOf(t.bookType) > -1,
        l = Eg();
    Kd(t = t || {}); var o = jd(),
        c = "",
        f = 0; if (t.cellXfs = [], ri(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), c = "docProps/core.xml", et(o, c, Sg(e.Props, t)), l.coreprops.push(c), yt(t.rels, 2, c, ht.CORE_PROPS), c = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
        if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
        else { for (var p = [], x = 0; x < e.SheetNames.length; ++x)(e.Workbook.Sheets[x] || {}).Hidden != 2 && p.push(e.SheetNames[x]);
            e.Props.SheetNames = p }
    for (e.Props.Worksheets = e.Props.SheetNames.length, et(o, c, Cg(e.Props)), l.extprops.push(c), yt(t.rels, 3, c, ht.EXT_PROPS), e.Custprops !== e.Props && gr(e.Custprops || {}).length > 0 && (c = "docProps/custom.xml", et(o, c, Dg(e.Custprops)), l.custprops.push(c), yt(t.rels, 4, c, ht.CUST_PROPS)), f = 1; f <= e.SheetNames.length; ++f) { var m = { "!id": {} },
            g = e.Sheets[e.SheetNames[f - 1]],
            v = (g || {})["!type"] || "sheet"; switch (v) {
            case "chart":
            default:
                c = "xl/worksheets/sheet" + f + "." + r, et(o, c, T6(f - 1, c, t, e, m)), l.sheets.push(c), yt(t.wbrels, -1, "worksheets/sheet" + f + "." + r, ht.WS[0]) } if (g) { var b = g["!comments"],
                A = !1,
                E = "";
            b && b.length > 0 && (E = "xl/comments" + f + "." + r, et(o, E, C6(b, E)), l.comments.push(E), yt(m, -1, "../comments" + f + "." + r, ht.CMNT), A = !0), g["!legacy"] && A && et(o, "xl/drawings/vmlDrawing" + f + ".vml", qg(f, g["!comments"])), delete g["!comments"], delete g["!legacy"] }
        m["!id"].rId1 && et(o, _g(c), Rl(m)) } return t.Strings != null && t.Strings.length > 0 && (c = "xl/sharedStrings." + r, et(o, c, N6(t.Strings, c, t)), l.strs.push(c), yt(t.wbrels, -1, "sharedStrings." + r, ht.SST)), c = "xl/workbook." + r, et(o, c, _6(e, c)), l.workbooks.push(c), yt(t.rels, 1, c, ht.WB), c = "xl/theme/theme1.xml", et(o, c, Gg(e.Themes, t)), l.themes.push(c), yt(t.wbrels, -1, "theme/theme1.xml", ht.THEME), c = "xl/styles." + r, et(o, c, S6(e, c, t)), l.styles.push(c), yt(t.wbrels, -1, "styles." + r, ht.STY), e.vbaraw && i && (c = "xl/vbaProject.bin", et(o, c, e.vbaraw), l.vba.push(c), yt(t.wbrels, -1, "vbaProject.bin", ht.VBA)), c = "xl/metadata." + r, et(o, c, D6(c)), l.metadata.push(c), yt(t.wbrels, -1, "metadata." + r, ht.XLMETA), et(o, "[Content_Types].xml", wg(l, t)), et(o, "_rels/.rels", Rl(t.rels)), et(o, "xl/_rels/workbook." + r + ".rels", Rl(t.wbrels)), delete t.revssf, delete t.ssf, o }

function wN(e, t) { Cl = 1024, e && !e.SSF && (e.SSF = Ir(zt)), e && e.SSF && (wu(), Eu(e.SSF), t.revssf = _u(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Ks ? t.revStrings = new Map : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo); var r = "xml",
        i = Yg.indexOf(t.bookType) > -1,
        l = Eg();
    Kd(t = t || {}); var o = jd(),
        c = "",
        f = 0; if (t.cellXfs = [], ri(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), c = "docProps/core.xml", et(o, c, Sg(e.Props, t)), l.coreprops.push(c), yt(t.rels, 2, c, ht.CORE_PROPS), c = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
        if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
        else { for (var p = [], x = 0; x < e.SheetNames.length; ++x)(e.Workbook.Sheets[x] || {}).Hidden != 2 && p.push(e.SheetNames[x]);
            e.Props.SheetNames = p }
    e.Props.Worksheets = e.Props.SheetNames.length, et(o, c, Cg(e.Props)), l.extprops.push(c), yt(t.rels, 3, c, ht.EXT_PROPS), e.Custprops !== e.Props && gr(e.Custprops || {}).length > 0 && (c = "docProps/custom.xml", et(o, c, Dg(e.Custprops)), l.custprops.push(c), yt(t.rels, 4, c, ht.CUST_PROPS)); var m = ["SheetJ5"]; for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) { var g = { "!id": {} },
            v = e.Sheets[e.SheetNames[f - 1]],
            b = (v || {})["!type"] || "sheet"; switch (b) {
            case "chart":
            default:
                c = "xl/worksheets/sheet" + f + "." + r, et(o, c, rv(f - 1, t, e, g)), l.sheets.push(c), yt(t.wbrels, -1, "worksheets/sheet" + f + "." + r, ht.WS[0]) } if (v) { var A = v["!comments"],
                E = !1,
                w = ""; if (A && A.length > 0) { var S = !1;
                A.forEach(function(O) { O[1].forEach(function(D) { D.T == !0 && (S = !0) }) }), S && (w = "xl/threadedComments/threadedComment" + f + "." + r, et(o, w, e8(A, m, t)), l.threadedcomments.push(w), yt(g, -1, "../threadedComments/threadedComment" + f + "." + r, ht.TCMNT)), w = "xl/comments" + f + "." + r, et(o, w, Xg(A)), l.comments.push(w), yt(g, -1, "../comments" + f + "." + r, ht.CMNT), E = !0 }
            v["!legacy"] && E && et(o, "xl/drawings/vmlDrawing" + f + ".vml", qg(f, v["!comments"])), delete v["!comments"], delete v["!legacy"] }
        g["!id"].rId1 && et(o, _g(c), Rl(g)) } return t.Strings != null && t.Strings.length > 0 && (c = "xl/sharedStrings." + r, et(o, c, Lg(t.Strings, t)), l.strs.push(c), yt(t.wbrels, -1, "sharedStrings." + r, ht.SST)), c = "xl/workbook." + r, et(o, c, iv(e)), l.workbooks.push(c), yt(t.rels, 1, c, ht.WB), c = "xl/theme/theme1.xml", et(o, c, Gg(e.Themes, t)), l.themes.push(c), yt(t.wbrels, -1, "theme/theme1.xml", ht.THEME), c = "xl/styles." + r, et(o, c, Ig(e, t)), l.styles.push(c), yt(t.wbrels, -1, "styles." + r, ht.STY), e.vbaraw && i && (c = "xl/vbaProject.bin", et(o, c, e.vbaraw), l.vba.push(c), yt(t.wbrels, -1, "vbaProject.bin", ht.VBA)), c = "xl/metadata." + r, et(o, c, Vg()), l.metadata.push(c), yt(t.wbrels, -1, "metadata." + r, ht.XLMETA), m.length > 1 && (c = "xl/persons/person.xml", et(o, c, t8(m)), l.people.push(c), yt(t.wbrels, -1, "persons/person.xml", ht.PEOPLE)), et(o, "[Content_Types].xml", wg(l, t)), et(o, "_rels/.rels", Rl(t.rels)), et(o, "xl/_rels/workbook." + r + ".rels", Rl(t.wbrels)), delete t.revssf, delete t.ssf, o }

function _N(e, t) { var r = ""; switch ((t || {}).type || "base64") {
        case "buffer":
            return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
        case "base64":
            r = gn(e.slice(0, 12)); break;
        case "binary":
            r = e; break;
        case "array":
            return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
        default:
            throw new Error("Unrecognized type " + (t && t.type || "undefined")) } return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)] }

function dv(e, t) { switch (t.type) {
        case "base64":
        case "binary":
            break;
        case "buffer":
        case "array":
            t.type = ""; break;
        case "file":
            return ho(t.file, _t.write(e, { type: xt ? "buffer" : "" }));
        case "string":
            throw new Error("'string' output type invalid for '" + t.bookType + "' files");
        default:
            throw new Error("Unrecognized type " + t.type) } return _t.write(e, t) }

function TN(e, t) { var r = Ir(t || {}),
        i = AN(e, r); return SN(i, r) }

function SN(e, t) { var r = {},
        i = xt ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string"; if (t.compression && (r.compression = "DEFLATE"), t.password) r.type = i;
    else switch (t.type) {
        case "base64":
            r.type = "base64"; break;
        case "binary":
            r.type = "string"; break;
        case "string":
            throw new Error("'string' output type invalid for '" + t.bookType + "' files");
        case "buffer":
        case "file":
            r.type = i; break;
        default:
            throw new Error("Unrecognized type " + t.type) }
    var l = e.FullPaths ? _t.write(e, { fileType: "zip", type: { nodebuffer: "buffer", string: "binary" }[r.type] || r.type, compression: !!t.compression }) : e.generate(r); if (typeof Deno < "u" && typeof l == "string") { if (t.type == "binary" || t.type == "base64") return l;
        l = new Uint8Array(Au(l)) } return t.password && typeof encrypt_agile < "u" ? dv(encrypt_agile(l, t.password), t) : t.type === "file" ? ho(t.file, l) : t.type == "string" ? qs(l) : l }

function NN(e, t) { var r = t || {},
        i = G6(e, r); return dv(i, r) }

function qa(e, t, r) { r || (r = ""); var i = r + e; switch (t.type) {
        case "base64":
            return to(ao(i));
        case "binary":
            return ao(i);
        case "string":
            return e;
        case "file":
            return ho(t.file, i, "utf8");
        case "buffer":
            return xt ? bn(i, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(i) : qa(i, { type: "binary" }).split("").map(function(l) { return l.charCodeAt(0) }) } throw new Error("Unrecognized type " + t.type) }

function CN(e, t) { switch (t.type) {
        case "base64":
            return to(e);
        case "binary":
            return e;
        case "string":
            return e;
        case "file":
            return ho(t.file, e, "binary");
        case "buffer":
            return xt ? bn(e, "binary") : e.split("").map(function(r) { return r.charCodeAt(0) }) } throw new Error("Unrecognized type " + t.type) }

function kc(e, t) { switch (t.type) {
        case "string":
        case "base64":
        case "binary":
            for (var r = "", i = 0; i < e.length; ++i) r += String.fromCharCode(e[i]); return t.type == "base64" ? to(r) : t.type == "string" ? qs(r) : r;
        case "file":
            return ho(t.file, e);
        case "buffer":
            return e;
        default:
            throw new Error("Unrecognized type " + t.type) } }

function hv(e, t) { rw(), h6(e); var r = Ir(t || {}); if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") { r.type = "binary"; var i = hv(e, r); return r.type = "array", Au(i) } var l = 0; if (r.sheet && (typeof r.sheet == "number" ? l = r.sheet : l = e.SheetNames.indexOf(r.sheet), !e.SheetNames[l])) throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet); switch (r.bookType || "xlsb") {
        case "xml":
        case "xlml":
            return qa(I6(e, r), r);
        case "slk":
        case "sylk":
            return qa(u5.from_sheet(e.Sheets[e.SheetNames[l]], r), r);
        case "htm":
        case "html":
            return qa(ov(e.Sheets[e.SheetNames[l]], r), r);
        case "txt":
            return CN(mv(e.Sheets[e.SheetNames[l]], r), r);
        case "csv":
            return qa(Qd(e.Sheets[e.SheetNames[l]], r), r, "\uFEFF");
        case "dif":
            return qa(f5.from_sheet(e.Sheets[e.SheetNames[l]], r), r);
        case "dbf":
            return kc(c5.from_sheet(e.Sheets[e.SheetNames[l]], r), r);
        case "prn":
            return qa(d5.from_sheet(e.Sheets[e.SheetNames[l]], r), r);
        case "rtf":
            return qa(y5.from_sheet(e.Sheets[e.SheetNames[l]], r), r);
        case "eth":
            return qa(Mg.from_sheet(e.Sheets[e.SheetNames[l]], r), r);
        case "fods":
            return qa(fv(e, r), r);
        case "wk1":
            return kc(Bp.sheet_to_wk1(e.Sheets[e.SheetNames[l]], r), r);
        case "wk3":
            return kc(Bp.book_to_wk3(e, r), r);
        case "biff2":
            r.biff || (r.biff = 2);
        case "biff3":
            r.biff || (r.biff = 3);
        case "biff4":
            return r.biff || (r.biff = 4), kc(sv(e, r), r);
        case "biff5":
            r.biff || (r.biff = 5);
        case "biff8":
        case "xla":
        case "xls":
            return r.biff || (r.biff = 8), NN(e, r);
        case "xlsx":
        case "xlsm":
        case "xlam":
        case "xlsb":
        case "numbers":
        case "ods":
            return TN(e, r);
        default:
            throw new Error("Unrecognized bookType |" + r.bookType + "|") } }

function DN(e) { if (!e.bookType) { var t = { xls: "biff8", htm: "html", slk: "sylk", socialcalc: "eth", Sh33tJS: "WTF" },
            r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
        r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), e.bookType = t[e.bookType] || e.bookType } }

function ON(e, t, r) { var i = {}; return i.type = "file", i.file = t, DN(i), hv(e, i) }

function RN(e, t, r, i, l, o, c, f) { var p = pr(r),
        x = f.defval,
        m = f.raw || !Object.prototype.hasOwnProperty.call(f, "raw"),
        g = !0,
        v = l === 1 ? [] : {}; if (l !== 1)
        if (Object.defineProperty) try { Object.defineProperty(v, "__rowNum__", { value: r, enumerable: !1 }) } catch { v.__rowNum__ = r } else v.__rowNum__ = r;
    if (!c || e[r])
        for (var b = t.s.c; b <= t.e.c; ++b) { var A = c ? e[r][b] : e[i[b] + p]; if (A === void 0 || A.t === void 0) { if (x === void 0) continue;
                o[b] != null && (v[o[b]] = x); continue } var E = A.v; switch (A.t) {
                case "z":
                    if (E == null) break; continue;
                case "e":
                    E = E == 0 ? null : void 0; break;
                case "s":
                case "d":
                case "b":
                case "n":
                    break;
                default:
                    throw new Error("unrecognized type " + A.t) } if (o[b] != null) { if (E == null)
                    if (A.t == "e" && E === null) v[o[b]] = null;
                    else if (x !== void 0) v[o[b]] = x;
                else if (m && E === null) v[o[b]] = null;
                else continue;
                else v[o[b]] = m && (A.t !== "n" || A.t === "n" && f.rawNumbers !== !1) ? E : vn(A, E, f);
                E != null && (g = !1) } }
    return { row: v, isempty: g } }

function ou(e, t) { if (e == null || e["!ref"] == null) return []; var r = { t: "n", v: 0 },
        i = 0,
        l = 1,
        o = [],
        c = 0,
        f = "",
        p = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        x = t || {},
        m = x.range != null ? x.range : e["!ref"]; switch (x.header === 1 ? i = 1 : x.header === "A" ? i = 2 : Array.isArray(x.header) ? i = 3 : x.header == null && (i = 0), typeof m) {
        case "string":
            p = Ft(m); break;
        case "number":
            p = Ft(e["!ref"]), p.s.r = m; break;
        default:
            p = m }
    i > 0 && (l = 0); var g = pr(p.s.r),
        v = [],
        b = [],
        A = 0,
        E = 0,
        w = Array.isArray(e),
        S = p.s.r,
        O = 0,
        D = {};
    w && !e[S] && (e[S] = []); var F = x.skipHidden && e["!cols"] || [],
        K = x.skipHidden && e["!rows"] || []; for (O = p.s.c; O <= p.e.c; ++O)
        if (!(F[O] || {}).hidden) switch (v[O] = wr(O), r = w ? e[S][O] : e[v[O] + g], i) {
            case 1:
                o[O] = O - p.s.c; break;
            case 2:
                o[O] = v[O]; break;
            case 3:
                o[O] = x.header[O - p.s.c]; break;
            default:
                if (r == null && (r = { w: "__EMPTY", t: "s" }), f = c = vn(r, null, x), E = D[c] || 0, !E) D[c] = 1;
                else { do f = c + "_" + E++; while (D[f]);
                    D[c] = E, D[f] = 1 }
                o[O] = f }
        for (S = p.s.r + l; S <= p.e.r; ++S)
            if (!(K[S] || {}).hidden) { var I = RN(e, p, S, v, i, o, w, x);
                (I.isempty === !1 || (i === 1 ? x.blankrows !== !1 : x.blankrows)) && (b[A++] = I.row) }
    return b.length = A, b }
var Hp = /"/g;

function FN(e, t, r, i, l, o, c, f) { for (var p = !0, x = [], m = "", g = pr(r), v = t.s.c; v <= t.e.c; ++v)
        if (i[v]) { var b = f.dense ? (e[r] || [])[v] : e[i[v] + g]; if (b == null) m = "";
            else if (b.v != null) { p = !1, m = "" + (f.rawNumbers && b.t == "n" ? b.v : vn(b, null, f)); for (var A = 0, E = 0; A !== m.length; ++A)
                    if ((E = m.charCodeAt(A)) === l || E === o || E === 34 || f.forceQuotes) { m = '"' + m.replace(Hp, '""') + '"'; break }
                m == "ID" && (m = '"ID"') } else b.f != null && !b.F ? (p = !1, m = "=" + b.f, m.indexOf(",") >= 0 && (m = '"' + m.replace(Hp, '""') + '"')) : m = "";
            x.push(m) }
    return f.blankrows === !1 && p ? null : x.join(c) }

function Qd(e, t) { var r = [],
        i = t ? ? {}; if (e == null || e["!ref"] == null) return ""; var l = Ft(e["!ref"]),
        o = i.FS !== void 0 ? i.FS : ",",
        c = o.charCodeAt(0),
        f = i.RS !== void 0 ? i.RS : `
`,
        p = f.charCodeAt(0),
        x = new RegExp((o == "|" ? "\\|" : o) + "+$"),
        m = "",
        g = [];
    i.dense = Array.isArray(e); for (var v = i.skipHidden && e["!cols"] || [], b = i.skipHidden && e["!rows"] || [], A = l.s.c; A <= l.e.c; ++A)(v[A] || {}).hidden || (g[A] = wr(A)); for (var E = 0, w = l.s.r; w <= l.e.r; ++w)(b[w] || {}).hidden || (m = FN(e, l, w, g, c, p, o, i), m != null && (i.strip && (m = m.replace(x, "")), (m || i.blankrows !== !1) && r.push((E++ ? f : "") + m))); return delete i.dense, r.join("") }

function mv(e, t) { t || (t = {}), t.FS = "	", t.RS = `
`; var r = Qd(e, t); return r }

function jN(e) { var t = "",
        r, i = ""; if (e == null || e["!ref"] == null) return []; var l = Ft(e["!ref"]),
        o = "",
        c = [],
        f, p = [],
        x = Array.isArray(e); for (f = l.s.c; f <= l.e.c; ++f) c[f] = wr(f); for (var m = l.s.r; m <= l.e.r; ++m)
        for (o = pr(m), f = l.s.c; f <= l.e.c; ++f)
            if (t = c[f] + o, r = x ? (e[m] || [])[f] : e[t], i = "", r !== void 0) { if (r.F != null) { if (t = r.F, !r.f) continue;
                    i = r.f, t.indexOf(":") == -1 && (t = t + ":" + t) } if (r.f != null) i = r.f;
                else { if (r.t == "z") continue; if (r.t == "n" && r.v != null) i = "" + r.v;
                    else if (r.t == "b") i = r.v ? "TRUE" : "FALSE";
                    else if (r.w !== void 0) i = "'" + r.w;
                    else { if (r.v === void 0) continue;
                        r.t == "s" ? i = "'" + r.v : i = "" + r.v } }
                p[p.length] = t + "=" + i }
    return p }

function xv(e, t, r) { var i = r || {},
        l = +!i.skipHeader,
        o = e || {},
        c = 0,
        f = 0; if (o && i.origin != null)
        if (typeof i.origin == "number") c = i.origin;
        else { var p = typeof i.origin == "string" ? ir(i.origin) : i.origin;
            c = p.r, f = p.c }
    var x, m = { s: { c: 0, r: 0 }, e: { c: f, r: c + t.length - 1 + l } }; if (o["!ref"]) { var g = Ft(o["!ref"]);
        m.e.c = Math.max(m.e.c, g.e.c), m.e.r = Math.max(m.e.r, g.e.r), c == -1 && (c = g.e.r + 1, m.e.r = c + t.length - 1 + l) } else c == -1 && (c = 0, m.e.r = t.length - 1 + l); var v = i.header || [],
        b = 0;
    t.forEach(function(E, w) { gr(E).forEach(function(S) {
            (b = v.indexOf(S)) == -1 && (v[b = v.length] = S); var O = E[S],
                D = "z",
                F = "",
                K = At({ c: f + b, r: c + w + l });
            x = lo(o, K), O && typeof O == "object" && !(O instanceof Date) ? o[K] = O : (typeof O == "number" ? D = "n" : typeof O == "boolean" ? D = "b" : typeof O == "string" ? D = "s" : O instanceof Date ? (D = "d", i.cellDates || (D = "n", O = zr(O)), F = i.dateNF || zt[14]) : O === null && i.nullError && (D = "e", O = 0), x ? (x.t = D, x.v = O, delete x.w, delete x.R, F && (x.z = F)) : o[K] = x = { t: D, v: O }, F && (x.z = F)) }) }), m.e.c = Math.max(m.e.c, f + v.length - 1); var A = pr(c); if (l)
        for (b = 0; b < v.length; ++b) o[wr(b + f) + A] = { t: "s", v: v[b] }; return o["!ref"] = Kt(m), o }

function BN(e, t) { return xv(null, e, t) }

function lo(e, t, r) { if (typeof t == "string") { if (Array.isArray(e)) { var i = ir(t); return e[i.r] || (e[i.r] = []), e[i.r][i.c] || (e[i.r][i.c] = { t: "z" }) } return e[t] || (e[t] = { t: "z" }) } return typeof t != "number" ? lo(e, At(t)) : lo(e, At({ r: t, c: r || 0 })) }

function kN(e, t) { if (typeof t == "number") { if (t >= 0 && e.SheetNames.length > t) return t; throw new Error("Cannot find sheet # " + t) } else if (typeof t == "string") { var r = e.SheetNames.indexOf(t); if (r > -1) return r; throw new Error("Cannot find sheet name |" + t + "|") } else throw new Error("Cannot find sheet |" + t + "|") }

function MN() { return { SheetNames: [], Sheets: {} } }

function LN(e, t, r, i) { var l = 1; if (!r)
        for (; l <= 65535 && e.SheetNames.indexOf(r = "Sheet" + l) != -1; ++l, r = void 0); if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets"); if (i && e.SheetNames.indexOf(r) >= 0) { var o = r.match(/(^.*?)(\d+)$/);
        l = o && +o[2] || 0; var c = o && o[1] || r; for (++l; l <= 65535 && e.SheetNames.indexOf(r = c + l) != -1; ++l); } if (nv(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!"); return e.SheetNames.push(r), e.Sheets[r] = t, r }

function UN(e, t, r) { e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []); var i = kN(e, t); switch (e.Workbook.Sheets[i] || (e.Workbook.Sheets[i] = {}), r) {
        case 0:
        case 1:
        case 2:
            break;
        default:
            throw new Error("Bad sheet visibility setting " + r) }
    e.Workbook.Sheets[i].Hidden = r }

function PN(e, t) { return e.z = t, e }

function pv(e, t, r) { return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e }

function zN(e, t, r) { return pv(e, "#" + t, r) }

function IN(e, t, r) { e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" }) }

function HN(e, t, r, i) { for (var l = typeof t != "string" ? t : Ft(t), o = typeof t == "string" ? t : Kt(t), c = l.s.r; c <= l.e.r; ++c)
        for (var f = l.s.c; f <= l.e.c; ++f) { var p = lo(e, c, f);
            p.t = "n", p.F = o, delete p.v, c == l.s.r && f == l.s.c && (p.f = r, i && (p.D = !0)) }
    return e }
var $f = { encode_col: wr, encode_row: pr, encode_cell: At, encode_range: Kt, decode_col: Pd, decode_row: Ud, split_cell: r_, decode_cell: ir, decode_range: ta, format_cell: vn, sheet_add_aoa: pg, sheet_add_json: xv, sheet_add_dom: cv, aoa_to_sheet: zl, json_to_sheet: BN, table_to_sheet: uv, table_to_book: fN, sheet_to_csv: Qd, sheet_to_txt: mv, sheet_to_json: ou, sheet_to_html: ov, sheet_to_formulae: jN, sheet_to_row_object_array: ou, sheet_get_cell: lo, book_new: MN, book_append_sheet: LN, book_set_sheet_visibility: UN, cell_set_number_format: PN, cell_set_hyperlink: pv, cell_set_internal_link: zN, cell_add_comment: IN, sheet_set_array_formula: HN, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
const GN = () => { const [e, t] = ne.useState([]), [r, i] = ne.useState(""), [l, o] = ne.useState({ key: null, direction: "asc" }), [c, f] = ne.useState([]), [p, x] = ne.useState([]), [m, g] = ne.useState([]), [v, b] = ne.useState([]), [A, E] = ne.useState(!0), S = ra().pathname === "/login", [O, D] = ne.useState(""), [F, K] = ne.useState(""), [I, V] = ne.useState(""), [N, _] = ne.useState(""), [U, q] = ne.useState("Confirmado"), [H, W] = ne.useState("");
    ne.useEffect(() => { const C = async() => { try { const te = localStorage.getItem("token"),
                        [j, ce, k, Q] = await Promise.all([fetch("/api/filtros/categorias", { headers: { Authorization: `Bearer ${te}` } }), fetch("/api/filtros/areas", { headers: { Authorization: `Bearer ${te}` } }), fetch("/api/filtros/grados", { headers: { Authorization: `Bearer ${te}` } }), fetch("/api/filtros/niveles", { headers: { Authorization: `Bearer ${te}` } })]),
                        [L, M, ie, _e] = await Promise.all([j.json(), ce.json(), k.json(), Q.json()]);
                    f(L), x(M), g(ie), b(_e), L.length && D(L[0].categoria_id), M.length && K(M[0].area_id), ie.length && V(ie[0].grado), _e.length && _(_e[0].nivel) } catch (te) { console.error("Error cargando filtros:", te) } },
            se = async() => { try { const te = localStorage.getItem("token"),
                        j = await fetch("http://dis.tis.cs.umss.edu.bo/api/tutor/getDashboardData", { method: "GET", headers: { "Content-Type": "application/json", Authorization: `Bearer ${te}` } }); if (!j.ok) throw new Error("Error al obtener los datos del dashboard"); const ce = await j.json();
                    t(ce.inscripciones) } catch (te) { console.error("Error en el fetch del dashboard:", te) } };
        C(), se() }, []); const ee = C => { let se = "asc";
            l.key === C && l.direction === "asc" && (se = "desc"), o({ key: C, direction: se }) },
        re = ne.useMemo(() => { let C = [...e]; return r && (C = C.filter(se => Object.values(se).some(te => String(te).toLowerCase().includes(r.toLowerCase())))), l.key !== null && C.sort((se, te) => se[l.key] < te[l.key] ? l.direction === "asc" ? -1 : 1 : se[l.key] > te[l.key] ? l.direction === "asc" ? 1 : -1 : 0), C.slice(0, 20) }, [e, r, l]),
        B = () => { const C = re.map(j => ({ ID: j.id, Estudiante: `${j.estudiante_nombre} ${j.estudiante_apellido}`, Área: j.area_nombre, Nivel: j.categoria_nombre, Estado: j.habilitado ? "Habilitado" : "Deshabilitado" })),
                se = $f.json_to_sheet(C),
                te = $f.book_new();
            $f.book_append_sheet(te, se, "Inscripciones"), ON(te, "Reporte_Inscripciones.xlsx") }; return d.jsxs("div", { className: "min-h-screen", style: { background: "linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)" }, children: [!S && d.jsx(Ea, { isOpen: A, onToggle: () => E(!A) }), d.jsxs("div", { className: `transition-all duration-300 ${S?"":A?"ml-64":"ml-20"} p-6 sm:p-8`, children: [d.jsx("div", { className: "mb-8", children: d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-6 sm:p-8", style: { borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0", children: [d.jsxs("div", { children: [d.jsx("h1", { className: "text-2xl sm:text-3xl font-bold mb-2", style: { background: "linear-gradient(135deg, #5A4A3A, #8B7355)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Reportes" }), d.jsx("p", { className: "text-sm sm:text-base", style: { color: "#8B7355" }, children: "Gestión y exportación de inscripciones" })] }), d.jsx("div", { className: "flex items-center space-x-4", children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsxs("div", { className: "text-right", children: [d.jsx("p", { className: "font-semibold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: "Tutor User" }), d.jsx("p", { className: "text-xs sm:text-sm", style: { color: "#8B7355" }, children: "Sistema de Reportes" })] }), d.jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg border-2", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(Ya, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" }) })] }) })] }) }) }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border", style: { borderColor: "#E8DDD4" }, children: [d.jsx("div", { className: "p-6 sm:p-8 pb-4 sm:pb-6 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: d.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0", children: [d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(Di, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white" }) }), d.jsxs("div", { children: [d.jsx("h2", { className: "text-lg sm:text-xl font-bold", style: { color: "#5A4A3A" }, children: "Inscripciones Registradas" }), d.jsx("p", { className: "text-xs sm:text-sm", style: { color: "#8B7355" }, children: "Visualización y exportación de datos" })] })] }), d.jsxs("button", { onClick: B, className: "flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: [d.jsx(co, { size: 16, className: "mr-2" }), "Exportar a Excel"] })] }) }), d.jsxs("div", { className: "p-6 sm:p-8", children: [d.jsx("div", { className: "mb-6", children: d.jsxs("div", { className: "relative", children: [d.jsx(Yc, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsx("input", { type: "text", placeholder: "Buscar inscripciones...", value: r, onChange: C => i(C.target.value), className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A" } })] }) }), d.jsx("div", { className: "overflow-x-auto rounded-lg sm:rounded-xl border", style: { borderColor: "#E8DDD4" }, children: d.jsxs("table", { className: "w-full", children: [d.jsx("thead", { children: d.jsxs("tr", { className: "border-b", style: { background: "linear-gradient(135deg, #FAF7F2, #F2EEE3)", borderColor: "#E8DDD4" }, children: [d.jsx("th", { onClick: () => ee("id"), className: "py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsxs("div", { className: "flex items-center space-x-2", children: [d.jsx("span", { children: "ID" }), d.jsx(Ps, { className: "w-3 h-3 sm:w-4 sm:h-4", style: { color: "#8B7355" } })] }) }), d.jsx("th", { onClick: () => ee("estudiante_nombre"), className: "py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsxs("div", { className: "flex items-center space-x-2", children: [d.jsx("span", { children: "Estudiante" }), d.jsx(Ps, { className: "w-3 h-3 sm:w-4 sm:h-4", style: { color: "#8B7355" } })] }) }), d.jsx("th", { onClick: () => ee("area_nombre"), className: "py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsxs("div", { className: "flex items-center space-x-2", children: [d.jsx("span", { children: "Área" }), d.jsx(Ps, { className: "w-3 h-3 sm:w-4 sm:h-4", style: { color: "#8B7355" } })] }) }), d.jsx("th", { onClick: () => ee("categoria_nombre"), className: "py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsxs("div", { className: "flex items-center space-x-2", children: [d.jsx("span", { children: "Nivel" }), d.jsx(Ps, { className: "w-3 h-3 sm:w-4 sm:h-4", style: { color: "#8B7355" } })] }) }), d.jsx("th", { onClick: () => ee("habilitado"), className: "py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsxs("div", { className: "flex items-center space-x-2", children: [d.jsx("span", { children: "Estado" }), d.jsx(Ps, { className: "w-3 h-3 sm:w-4 sm:h-4", style: { color: "#8B7355" } })] }) })] }) }), d.jsx("tbody", { children: re.length === 0 ? d.jsx("tr", { children: d.jsx("td", { colSpan: "5", className: "text-center py-12", children: d.jsxs("div", { className: "flex flex-col items-center space-y-3", children: [d.jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center", style: { backgroundColor: "#FAF7F2" }, children: d.jsx(Yc, { className: "w-8 h-8", style: { color: "#C8B7A6" } }) }), d.jsxs("div", { children: [d.jsx("p", { className: "font-medium text-base", style: { color: "#5A4A3A" }, children: "No se encontraron resultados" }), d.jsx("p", { className: "text-sm", style: { color: "#8B7355" }, children: "Intenta con otros términos de búsqueda" })] })] }) }) }) : re.map((C, se) => d.jsxs("tr", { className: `border-b hover:bg-black/5 transition-colors duration-200 ${se%2===0?"bg-white/50":"bg-white/20"}`, style: { borderColor: "#E8DDD4" }, children: [d.jsxs("td", { className: "py-4 px-4 sm:px-6 font-medium text-sm sm:text-base", style: { color: "#5A4A3A" }, children: ["#", C.id] }), d.jsx("td", { className: "py-4 px-4 sm:px-6 text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center", style: { backgroundColor: "#FAF7F2" }, children: d.jsx(Ya, { className: "w-4 h-4", style: { color: "#C8B7A6" } }) }), d.jsxs("span", { className: "font-medium", children: [C.estudiante_nombre, " ", C.estudiante_apellido] })] }) }), d.jsx("td", { className: "py-4 px-4 sm:px-6 text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium", style: { backgroundColor: "#FAF7F2", color: "#8B7355" }, children: C.area_nombre }) }), d.jsx("td", { className: "py-4 px-4 sm:px-6 text-sm sm:text-base", style: { color: "#5A4A3A" }, children: d.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium", style: { backgroundColor: "#FAF7F2", color: "#8B7355" }, children: C.categoria_nombre }) }), d.jsx("td", { className: "py-4 px-4 sm:px-6", children: C.habilitado ? d.jsxs("span", { className: "flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium", children: [d.jsx(BA, { className: "w-3 h-3" }), d.jsx("span", { children: "Habilitado" })] }) : d.jsxs("span", { className: "flex items-center space-x-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium", children: [d.jsx(D2, { className: "w-3 h-3" }), d.jsx("span", { children: "Deshabilitado" })] }) })] }, C.id)) })] }) })] })] })] })] }) };

function VN(e, t) { return t.forEach(function(r) { r && typeof r != "string" && !Array.isArray(r) && Object.keys(r).forEach(function(i) { if (i !== "default" && !(i in e)) { var l = Object.getOwnPropertyDescriptor(r, i);
                Object.defineProperty(e, i, l.get ? l : { enumerable: !0, get: function() { return r[i] } }) } }) }), Object.freeze(e) }

function gv(e, t) { return new Promise(function(r, i) { let l; return qN(e).then(function(o) { try { return l = o, r(new Blob([t.slice(0, 2), l, t.slice(2)], { type: "image/jpeg" })) } catch (c) { return i(c) } }, i) }) }
const qN = e => new Promise((t, r) => { const i = new FileReader;
    i.addEventListener("load", ({ target: { result: l } }) => { const o = new DataView(l); let c = 0; if (o.getUint16(c) !== 65496) return r("not a valid JPEG"); for (c += 2;;) { const f = o.getUint16(c); if (f === 65498) break; const p = o.getUint16(c + 2); if (f === 65505 && o.getUint32(c + 4) === 1165519206) { const x = c + 10; let m; switch (o.getUint16(x)) {
                    case 18761:
                        m = !0; break;
                    case 19789:
                        m = !1; break;
                    default:
                        return r("TIFF header contains invalid endian") } if (o.getUint16(x + 2, m) !== 42) return r("TIFF header contains invalid version"); const g = o.getUint32(x + 4, m),
                    v = x + g + 2 + 12 * o.getUint16(x + g, m); for (let b = x + g + 2; b < v; b += 12)
                    if (o.getUint16(b, m) == 274) { if (o.getUint16(b + 2, m) !== 3) return r("Orientation data type is invalid"); if (o.getUint32(b + 4, m) !== 1) return r("Orientation data count is invalid");
                        o.setUint16(b + 8, 1, m); break }
                return t(l.slice(c, c + 2 + p)) }
            c += 2 + p } return t(new Blob) }), i.readAsArrayBuffer(e) });
var cu = {},
    XN = {get exports() { return cu }, set exports(e) { cu = e } };
(function(e) { var t, r, i = {};
    XN.exports = i, i.parse = function(l, o) { for (var c = i.bin.readUshort, f = i.bin.readUint, p = 0, x = {}, m = new Uint8Array(l), g = m.length - 4; f(m, g) != 101010256;) g--;
            p = g, p += 4; var v = c(m, p += 4);
            c(m, p += 2); var b = f(m, p += 2),
                A = f(m, p += 4);
            p += 4, p = A; for (var E = 0; E < v; E++) { f(m, p), p += 4, p += 4, p += 4, f(m, p += 4), b = f(m, p += 4); var w = f(m, p += 4),
                    S = c(m, p += 4),
                    O = c(m, p + 2),
                    D = c(m, p + 4);
                p += 6; var F = f(m, p += 8);
                p += 4, p += S + O + D, i._readLocal(m, F, x, b, w, o) } return x }, i._readLocal = function(l, o, c, f, p, x) { var m = i.bin.readUshort,
                g = i.bin.readUint;
            g(l, o), m(l, o += 4), m(l, o += 2); var v = m(l, o += 2);
            g(l, o += 2), g(l, o += 4), o += 4; var b = m(l, o += 8),
                A = m(l, o += 2);
            o += 2; var E = i.bin.readUTF8(l, o, b); if (o += b, o += A, x) c[E] = { size: p, csize: f };
            else { var w = new Uint8Array(l.buffer, o); if (v == 0) c[E] = new Uint8Array(w.buffer.slice(o, o + f));
                else { if (v != 8) throw "unknown compression method: " + v; var S = new Uint8Array(p);
                    i.inflateRaw(w, S), c[E] = S } } }, i.inflateRaw = function(l, o) { return i.F.inflate(l, o) }, i.inflate = function(l, o) { return l[0], l[1], i.inflateRaw(new Uint8Array(l.buffer, l.byteOffset + 2, l.length - 6), o) }, i.deflate = function(l, o) { o == null && (o = { level: 6 }); var c = 0,
                f = new Uint8Array(50 + Math.floor(1.1 * l.length));
            f[c] = 120, f[c + 1] = 156, c += 2, c = i.F.deflateRaw(l, f, c, o.level); var p = i.adler(l, 0, l.length); return f[c + 0] = p >>> 24 & 255, f[c + 1] = p >>> 16 & 255, f[c + 2] = p >>> 8 & 255, f[c + 3] = p >>> 0 & 255, new Uint8Array(f.buffer, 0, c + 4) }, i.deflateRaw = function(l, o) { o == null && (o = { level: 6 }); var c = new Uint8Array(50 + Math.floor(1.1 * l.length)),
                f = i.F.deflateRaw(l, c, f, o.level); return new Uint8Array(c.buffer, 0, f) }, i.encode = function(l, o) { o == null && (o = !1); var c = 0,
                f = i.bin.writeUint,
                p = i.bin.writeUshort,
                x = {}; for (var m in l) { var g = !i._noNeed(m) && !o,
                    v = l[m],
                    b = i.crc.crc(v, 0, v.length);
                x[m] = { cpr: g, usize: v.length, crc: b, file: g ? i.deflateRaw(v) : v } } for (var m in x) c += x[m].file.length + 30 + 46 + 2 * i.bin.sizeUTF8(m);
            c += 22; var A = new Uint8Array(c),
                E = 0,
                w = []; for (var m in x) { var S = x[m];
                w.push(E), E = i._writeHeader(A, E, m, S, 0) } var O = 0,
                D = E; for (var m in x) S = x[m], w.push(E), E = i._writeHeader(A, E, m, S, 1, w[O++]); var F = E - D; return f(A, E, 101010256), E += 4, p(A, E += 4, O), p(A, E += 2, O), f(A, E += 2, F), f(A, E += 4, D), E += 4, E += 2, A.buffer }, i._noNeed = function(l) { var o = l.split(".").pop().toLowerCase(); return "png,jpg,jpeg,zip".indexOf(o) != -1 }, i._writeHeader = function(l, o, c, f, p, x) { var m = i.bin.writeUint,
                g = i.bin.writeUshort,
                v = f.file; return m(l, o, p == 0 ? 67324752 : 33639248), o += 4, p == 1 && (o += 2), g(l, o, 20), g(l, o += 2, 0), g(l, o += 2, f.cpr ? 8 : 0), m(l, o += 2, 0), m(l, o += 4, f.crc), m(l, o += 4, v.length), m(l, o += 4, f.usize), g(l, o += 4, i.bin.sizeUTF8(c)), g(l, o += 2, 0), o += 2, p == 1 && (o += 2, o += 2, m(l, o += 6, x), o += 4), o += i.bin.writeUTF8(l, o, c), p == 0 && (l.set(v, o), o += v.length), o }, i.crc = { table: function() { for (var l = new Uint32Array(256), o = 0; o < 256; o++) { for (var c = o, f = 0; f < 8; f++) 1 & c ? c = 3988292384 ^ c >>> 1 : c >>>= 1;
                    l[o] = c } return l }(), update: function(l, o, c, f) { for (var p = 0; p < f; p++) l = i.crc.table[255 & (l ^ o[c + p])] ^ l >>> 8; return l }, crc: function(l, o, c) { return 4294967295 ^ i.crc.update(4294967295, l, o, c) } }, i.adler = function(l, o, c) { for (var f = 1, p = 0, x = o, m = o + c; x < m;) { for (var g = Math.min(x + 5552, m); x < g;) p += f += l[x++];
                f %= 65521, p %= 65521 } return p << 16 | f }, i.bin = { readUshort: function(l, o) { return l[o] | l[o + 1] << 8 }, writeUshort: function(l, o, c) { l[o] = 255 & c, l[o + 1] = c >> 8 & 255 }, readUint: function(l, o) { return 16777216 * l[o + 3] + (l[o + 2] << 16 | l[o + 1] << 8 | l[o]) }, writeUint: function(l, o, c) { l[o] = 255 & c, l[o + 1] = c >> 8 & 255, l[o + 2] = c >> 16 & 255, l[o + 3] = c >> 24 & 255 }, readASCII: function(l, o, c) { for (var f = "", p = 0; p < c; p++) f += String.fromCharCode(l[o + p]); return f }, writeASCII: function(l, o, c) { for (var f = 0; f < c.length; f++) l[o + f] = c.charCodeAt(f) }, pad: function(l) { return l.length < 2 ? "0" + l : l }, readUTF8: function(l, o, c) { for (var f, p = "", x = 0; x < c; x++) p += "%" + i.bin.pad(l[o + x].toString(16)); try { f = decodeURIComponent(p) } catch { return i.bin.readASCII(l, o, c) } return f }, writeUTF8: function(l, o, c) { for (var f = c.length, p = 0, x = 0; x < f; x++) { var m = c.charCodeAt(x); if ((4294967168 & m) == 0) l[o + p] = m, p++;
                    else if ((4294965248 & m) == 0) l[o + p] = 192 | m >> 6, l[o + p + 1] = 128 | m >> 0 & 63, p += 2;
                    else if ((4294901760 & m) == 0) l[o + p] = 224 | m >> 12, l[o + p + 1] = 128 | m >> 6 & 63, l[o + p + 2] = 128 | m >> 0 & 63, p += 3;
                    else { if ((4292870144 & m) != 0) throw "e";
                        l[o + p] = 240 | m >> 18, l[o + p + 1] = 128 | m >> 12 & 63, l[o + p + 2] = 128 | m >> 6 & 63, l[o + p + 3] = 128 | m >> 0 & 63, p += 4 } } return p }, sizeUTF8: function(l) { for (var o = l.length, c = 0, f = 0; f < o; f++) { var p = l.charCodeAt(f); if ((4294967168 & p) == 0) c++;
                    else if ((4294965248 & p) == 0) c += 2;
                    else if ((4294901760 & p) == 0) c += 3;
                    else { if ((4292870144 & p) != 0) throw "e";
                        c += 4 } } return c } }, i.F = {}, i.F.deflateRaw = function(l, o, c, f) { var p = [
                    [0, 0, 0, 0, 0],
                    [4, 4, 8, 4, 0],
                    [4, 5, 16, 8, 0],
                    [4, 6, 16, 16, 0],
                    [4, 10, 16, 32, 0],
                    [8, 16, 32, 32, 0],
                    [8, 16, 128, 128, 0],
                    [8, 32, 128, 256, 0],
                    [32, 128, 258, 1024, 1],
                    [32, 258, 258, 4096, 1]
                ][f],
                x = i.F.U,
                m = i.F._goodIndex;
            i.F._hash; var g = i.F._putsE,
                v = 0,
                b = c << 3,
                A = 0,
                E = l.length; if (f == 0) { for (; v < E;) g(o, b, v + (q = Math.min(65535, E - v)) == E ? 1 : 0), b = i.F._copyExact(l, v, q, o, b + 8), v += q; return b >>> 3 } var w = x.lits,
                S = x.strt,
                O = x.prev,
                D = 0,
                F = 0,
                K = 0,
                I = 0,
                V = 0,
                N = 0; for (E > 2 && (S[N = i.F._hash(l, 0)] = 0), v = 0; v < E; v++) { if (V = N, v + 1 < E - 2) { N = i.F._hash(l, v + 1); var _ = v + 1 & 32767;
                    O[_] = S[N], S[N] = _ } if (A <= v) {
                    (D > 14e3 || F > 26697) && E - v > 100 && (A < v && (w[D] = v - A, D += 2, A = v), b = i.F._writeBlock(v == E - 1 || A == E ? 1 : 0, w, D, I, l, K, v - K, o, b), D = F = I = 0, K = v); var U = 0;
                    v < E - 2 && (U = i.F._bestMatch(l, v, O, V, Math.min(p[2], E - v), p[3])); var q = U >>> 16,
                        H = 65535 & U; if (U != 0) { H = 65535 & U; var W = m(q = U >>> 16, x.of0);
                        x.lhst[257 + W]++; var ee = m(H, x.df0);
                        x.dhst[ee]++, I += x.exb[W] + x.dxb[ee], w[D] = q << 23 | v - A, w[D + 1] = H << 16 | W << 8 | ee, D += 2, A = v + q } else x.lhst[l[v]]++;
                    F++ } } for (K == v && l.length != 0 || (A < v && (w[D] = v - A, D += 2, A = v), b = i.F._writeBlock(1, w, D, I, l, K, v - K, o, b), D = 0, F = 0, D = F = I = 0, K = v);
                (7 & b) != 0;) b++; return b >>> 3 }, i.F._bestMatch = function(l, o, c, f, p, x) { var m = 32767 & o,
                g = c[m],
                v = m - g + 32768 & 32767; if (g == m || f != i.F._hash(l, o - v)) return 0; for (var b = 0, A = 0, E = Math.min(32767, o); v <= E && --x != 0 && g != m;) { if (b == 0 || l[o + b] == l[o + b - v]) { var w = i.F._howLong(l, o, v); if (w > b) { if (A = v, (b = w) >= p) break;
                        v + 2 < w && (w = v + 2); for (var S = 0, O = 0; O < w - 2; O++) { var D = o - v + O + 32768 & 32767,
                                F = D - c[D] + 32768 & 32767;
                            F > S && (S = F, g = D) } } }
                v += (m = g) - (g = c[m]) + 32768 & 32767 } return b << 16 | A }, i.F._howLong = function(l, o, c) { if (l[o] != l[o - c] || l[o + 1] != l[o + 1 - c] || l[o + 2] != l[o + 2 - c]) return 0; var f = o,
                p = Math.min(l.length, o + 258); for (o += 3; o < p && l[o] == l[o - c];) o++; return o - f }, i.F._hash = function(l, o) { return (l[o] << 8 | l[o + 1]) + (l[o + 2] << 4) & 65535 }, i.saved = 0, i.F._writeBlock = function(l, o, c, f, p, x, m, g, v) { var b, A, E, w, S, O, D, F, K, I = i.F.U,
                V = i.F._putsF,
                N = i.F._putsE;
            I.lhst[256]++, A = (b = i.F.getTrees())[0], E = b[1], w = b[2], S = b[3], O = b[4], D = b[5], F = b[6], K = b[7]; var _ = 32 + ((v + 3 & 7) == 0 ? 0 : 8 - (v + 3 & 7)) + (m << 3),
                U = f + i.F.contSize(I.fltree, I.lhst) + i.F.contSize(I.fdtree, I.dhst),
                q = f + i.F.contSize(I.ltree, I.lhst) + i.F.contSize(I.dtree, I.dhst);
            q += 14 + 3 * D + i.F.contSize(I.itree, I.ihst) + (2 * I.ihst[16] + 3 * I.ihst[17] + 7 * I.ihst[18]); for (var H = 0; H < 286; H++) I.lhst[H] = 0; for (H = 0; H < 30; H++) I.dhst[H] = 0; for (H = 0; H < 19; H++) I.ihst[H] = 0; var W = _ < U && _ < q ? 0 : U < q ? 1 : 2; if (V(g, v, l), V(g, v + 1, W), v += 3, W == 0) { for (;
                    (7 & v) != 0;) v++;
                v = i.F._copyExact(p, x, m, g, v) } else { var ee, re; if (W == 1 && (ee = I.fltree, re = I.fdtree), W == 2) { i.F.makeCodes(I.ltree, A), i.F.revCodes(I.ltree, A), i.F.makeCodes(I.dtree, E), i.F.revCodes(I.dtree, E), i.F.makeCodes(I.itree, w), i.F.revCodes(I.itree, w), ee = I.ltree, re = I.dtree, N(g, v, S - 257), N(g, v += 5, O - 1), N(g, v += 5, D - 4), v += 4; for (var B = 0; B < D; B++) N(g, v + 3 * B, I.itree[1 + (I.ordr[B] << 1)]);
                    v += 3 * D, v = i.F._codeTiny(F, I.itree, g, v), v = i.F._codeTiny(K, I.itree, g, v) } for (var C = x, se = 0; se < c; se += 2) { for (var te = o[se], j = te >>> 23, ce = C + (8388607 & te); C < ce;) v = i.F._writeLit(p[C++], ee, g, v); if (j != 0) { var k = o[se + 1],
                            Q = k >> 16,
                            L = k >> 8 & 255,
                            M = 255 & k;
                        N(g, v = i.F._writeLit(257 + L, ee, g, v), j - I.of0[L]), v += I.exb[L], V(g, v = i.F._writeLit(M, re, g, v), Q - I.df0[M]), v += I.dxb[M], C += j } }
                v = i.F._writeLit(256, ee, g, v) } return v }, i.F._copyExact = function(l, o, c, f, p) { var x = p >>> 3; return f[x] = c, f[x + 1] = c >>> 8, f[x + 2] = 255 - f[x], f[x + 3] = 255 - f[x + 1], x += 4, f.set(new Uint8Array(l.buffer, o, c), x), p + (c + 4 << 3) }, i.F.getTrees = function() { for (var l = i.F.U, o = i.F._hufTree(l.lhst, l.ltree, 15), c = i.F._hufTree(l.dhst, l.dtree, 15), f = [], p = i.F._lenCodes(l.ltree, f), x = [], m = i.F._lenCodes(l.dtree, x), g = 0; g < f.length; g += 2) l.ihst[f[g]]++; for (g = 0; g < x.length; g += 2) l.ihst[x[g]]++; for (var v = i.F._hufTree(l.ihst, l.itree, 7), b = 19; b > 4 && l.itree[1 + (l.ordr[b - 1] << 1)] == 0;) b--; return [o, c, v, p, m, b, f, x] }, i.F.getSecond = function(l) { for (var o = [], c = 0; c < l.length; c += 2) o.push(l[c + 1]); return o }, i.F.nonZero = function(l) { for (var o = "", c = 0; c < l.length; c += 2) l[c + 1] != 0 && (o += (c >> 1) + ","); return o }, i.F.contSize = function(l, o) { for (var c = 0, f = 0; f < o.length; f++) c += o[f] * l[1 + (f << 1)]; return c }, i.F._codeTiny = function(l, o, c, f) { for (var p = 0; p < l.length; p += 2) { var x = l[p],
                    m = l[p + 1];
                f = i.F._writeLit(x, o, c, f); var g = x == 16 ? 2 : x == 17 ? 3 : 7;
                x > 15 && (i.F._putsE(c, f, m, g), f += g) } return f }, i.F._lenCodes = function(l, o) { for (var c = l.length; c != 2 && l[c - 1] == 0;) c -= 2; for (var f = 0; f < c; f += 2) { var p = l[f + 1],
                    x = f + 3 < c ? l[f + 3] : -1,
                    m = f + 5 < c ? l[f + 5] : -1,
                    g = f == 0 ? -1 : l[f - 1]; if (p == 0 && x == p && m == p) { for (var v = f + 5; v + 2 < c && l[v + 2] == p;) v += 2;
                    (b = Math.min(v + 1 - f >>> 1, 138)) < 11 ? o.push(17, b - 3) : o.push(18, b - 11), f += 2 * b - 2 } else if (p == g && x == p && m == p) { for (v = f + 5; v + 2 < c && l[v + 2] == p;) v += 2; var b = Math.min(v + 1 - f >>> 1, 6);
                    o.push(16, b - 3), f += 2 * b - 2 } else o.push(p, 0) } return c >>> 1 }, i.F._hufTree = function(l, o, c) { var f = [],
                p = l.length,
                x = o.length,
                m = 0; for (m = 0; m < x; m += 2) o[m] = 0, o[m + 1] = 0; for (m = 0; m < p; m++) l[m] != 0 && f.push({ lit: m, f: l[m] }); var g = f.length,
                v = f.slice(0); if (g == 0) return 0; if (g == 1) { var b = f[0].lit; return v = b == 0 ? 1 : 0, o[1 + (b << 1)] = 1, o[1 + (v << 1)] = 1, 1 }
            f.sort(function(F, K) { return F.f - K.f }); var A = f[0],
                E = f[1],
                w = 0,
                S = 1,
                O = 2; for (f[0] = { lit: -1, f: A.f + E.f, l: A, r: E, d: 0 }; S != g - 1;) A = w != S && (O == g || f[w].f < f[O].f) ? f[w++] : f[O++], E = w != S && (O == g || f[w].f < f[O].f) ? f[w++] : f[O++], f[S++] = { lit: -1, f: A.f + E.f, l: A, r: E }; var D = i.F.setDepth(f[S - 1], 0); for (D > c && (i.F.restrictDepth(v, c, D), D = c), m = 0; m < g; m++) o[1 + (v[m].lit << 1)] = v[m].d; return D }, i.F.setDepth = function(l, o) { return l.lit != -1 ? (l.d = o, o) : Math.max(i.F.setDepth(l.l, o + 1), i.F.setDepth(l.r, o + 1)) }, i.F.restrictDepth = function(l, o, c) { var f = 0,
                p = 1 << c - o,
                x = 0; for (l.sort(function(g, v) { return v.d == g.d ? g.f - v.f : v.d - g.d }), f = 0; f < l.length && l[f].d > o; f++) { var m = l[f].d;
                l[f].d = o, x += p - (1 << c - m) } for (x >>>= c - o; x > 0;)(m = l[f].d) < o ? (l[f].d++, x -= 1 << o - m - 1) : f++; for (; f >= 0; f--) l[f].d == o && x < 0 && (l[f].d--, x++);
            x != 0 && console.log("debt left") }, i.F._goodIndex = function(l, o) { var c = 0; return o[16 | c] <= l && (c |= 16), o[8 | c] <= l && (c |= 8), o[4 | c] <= l && (c |= 4), o[2 | c] <= l && (c |= 2), o[1 | c] <= l && (c |= 1), c }, i.F._writeLit = function(l, o, c, f) { return i.F._putsF(c, f, o[l << 1]), f + o[1 + (l << 1)] }, i.F.inflate = function(l, o) { var c = Uint8Array; if (l[0] == 3 && l[1] == 0) return o || new c(0); var f = i.F,
                p = f._bitsF,
                x = f._bitsE,
                m = f._decodeTiny,
                g = f.makeCodes,
                v = f.codes2map,
                b = f._get17,
                A = f.U,
                E = o == null;
            E && (o = new c(l.length >>> 2 << 3)); for (var w, S, O = 0, D = 0, F = 0, K = 0, I = 0, V = 0, N = 0, _ = 0, U = 0; O == 0;)
                if (O = p(l, U, 1), D = p(l, U + 1, 2), U += 3, D != 0) { if (E && (o = i.F._check(o, _ + (1 << 17))), D == 1 && (w = A.flmap, S = A.fdmap, V = 511, N = 31), D == 2) { F = x(l, U, 5) + 257, K = x(l, U + 5, 5) + 1, I = x(l, U + 10, 4) + 4, U += 14; for (var q = 0; q < 38; q += 2) A.itree[q] = 0, A.itree[q + 1] = 0; var H = 1; for (q = 0; q < I; q++) { var W = x(l, U + 3 * q, 3);
                            A.itree[1 + (A.ordr[q] << 1)] = W, W > H && (H = W) }
                        U += 3 * I, g(A.itree, H), v(A.itree, H, A.imap), w = A.lmap, S = A.dmap, U = m(A.imap, (1 << H) - 1, F + K, l, U, A.ttree); var ee = f._copyOut(A.ttree, 0, F, A.ltree);
                        V = (1 << ee) - 1; var re = f._copyOut(A.ttree, F, K, A.dtree);
                        N = (1 << re) - 1, g(A.ltree, ee), v(A.ltree, ee, w), g(A.dtree, re), v(A.dtree, re, S) } for (;;) { var B = w[b(l, U) & V];
                        U += 15 & B; var C = B >>> 4; if (!(C >>> 8)) o[_++] = C;
                        else { if (C == 256) break; var se = _ + C - 254; if (C > 264) { var te = A.ldef[C - 257];
                                se = _ + (te >>> 3) + x(l, U, 7 & te), U += 7 & te } var j = S[b(l, U) & N];
                            U += 15 & j; var ce = j >>> 4,
                                k = A.ddef[ce],
                                Q = (k >>> 4) + p(l, U, 15 & k); for (U += 15 & k, E && (o = i.F._check(o, _ + (1 << 17))); _ < se;) o[_] = o[_++ - Q], o[_] = o[_++ - Q], o[_] = o[_++ - Q], o[_] = o[_++ - Q];
                            _ = se } } } else {
                    (7 & U) != 0 && (U += 8 - (7 & U)); var L = 4 + (U >>> 3),
                        M = l[L - 4] | l[L - 3] << 8;
                    E && (o = i.F._check(o, _ + M)), o.set(new c(l.buffer, l.byteOffset + L, M), _), U = L + M << 3, _ += M }
            return o.length == _ ? o : o.slice(0, _) }, i.F._check = function(l, o) { var c = l.length; if (o <= c) return l; var f = new Uint8Array(Math.max(c << 1, o)); return f.set(l, 0), f }, i.F._decodeTiny = function(l, o, c, f, p, x) { for (var m = i.F._bitsE, g = i.F._get17, v = 0; v < c;) { var b = l[g(f, p) & o];
                p += 15 & b; var A = b >>> 4; if (A <= 15) x[v] = A, v++;
                else { var E = 0,
                        w = 0;
                    A == 16 ? (w = 3 + m(f, p, 2), p += 2, E = x[v - 1]) : A == 17 ? (w = 3 + m(f, p, 3), p += 3) : A == 18 && (w = 11 + m(f, p, 7), p += 7); for (var S = v + w; v < S;) x[v] = E, v++ } } return p }, i.F._copyOut = function(l, o, c, f) { for (var p = 0, x = 0, m = f.length >>> 1; x < c;) { var g = l[x + o];
                f[x << 1] = 0, f[1 + (x << 1)] = g, g > p && (p = g), x++ } for (; x < m;) f[x << 1] = 0, f[1 + (x << 1)] = 0, x++; return p }, i.F.makeCodes = function(l, o) { for (var c, f, p, x, m = i.F.U, g = l.length, v = m.bl_count, b = 0; b <= o; b++) v[b] = 0; for (b = 1; b < g; b += 2) v[l[b]]++; var A = m.next_code; for (c = 0, v[0] = 0, f = 1; f <= o; f++) c = c + v[f - 1] << 1, A[f] = c; for (p = 0; p < g; p += 2)(x = l[p + 1]) != 0 && (l[p] = A[x], A[x]++) }, i.F.codes2map = function(l, o, c) { for (var f = l.length, p = i.F.U.rev15, x = 0; x < f; x += 2)
                if (l[x + 1] != 0)
                    for (var m = x >> 1, g = l[x + 1], v = m << 4 | g, b = o - g, A = l[x] << b, E = A + (1 << b); A != E;) c[p[A] >>> 15 - o] = v, A++ }, i.F.revCodes = function(l, o) { for (var c = i.F.U.rev15, f = 15 - o, p = 0; p < l.length; p += 2) { var x = l[p] << o - l[p + 1];
                l[p] = c[x] >>> f } }, i.F._putsE = function(l, o, c) { c <<= 7 & o; var f = o >>> 3;
            l[f] |= c, l[f + 1] |= c >>> 8 }, i.F._putsF = function(l, o, c) { c <<= 7 & o; var f = o >>> 3;
            l[f] |= c, l[f + 1] |= c >>> 8, l[f + 2] |= c >>> 16 }, i.F._bitsE = function(l, o, c) { return (l[o >>> 3] | l[1 + (o >>> 3)] << 8) >>> (7 & o) & (1 << c) - 1 }, i.F._bitsF = function(l, o, c) { return (l[o >>> 3] | l[1 + (o >>> 3)] << 8 | l[2 + (o >>> 3)] << 16) >>> (7 & o) & (1 << c) - 1 }, i.F._get17 = function(l, o) { return (l[o >>> 3] | l[1 + (o >>> 3)] << 8 | l[2 + (o >>> 3)] << 16) >>> (7 & o) }, i.F._get25 = function(l, o) { return (l[o >>> 3] | l[1 + (o >>> 3)] << 8 | l[2 + (o >>> 3)] << 16 | l[3 + (o >>> 3)] << 24) >>> (7 & o) }, i.F.U = (t = Uint16Array, r = Uint32Array, { next_code: new t(16), bl_count: new t(16), ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], ldef: new t(32), df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], ddef: new r(32), flmap: new t(512), fltree: [], fdmap: new t(32), fdtree: [], lmap: new t(32768), ltree: [], ttree: [], dmap: new t(32768), dtree: [], imap: new t(512), itree: [], rev15: new t(32768), lhst: new r(286), dhst: new r(30), ihst: new r(19), lits: new r(15e3), strt: new t(65536), prev: new t(32768) }),
        function() { for (var l = i.F.U, o = 0; o < 32768; o++) { var c = o;
                c = (4278255360 & (c = (4042322160 & (c = (3435973836 & (c = (2863311530 & c) >>> 1 | (1431655765 & c) << 1)) >>> 2 | (858993459 & c) << 2)) >>> 4 | (252645135 & c) << 4)) >>> 8 | (16711935 & c) << 8, l.rev15[o] = (c >>> 16 | c << 16) >>> 17 }

            function f(p, x, m) { for (; x-- != 0;) p.push(0, m) } for (o = 0; o < 32; o++) l.ldef[o] = l.of0[o] << 3 | l.exb[o], l.ddef[o] = l.df0[o] << 4 | l.dxb[o];
            f(l.fltree, 144, 8), f(l.fltree, 112, 9), f(l.fltree, 24, 7), f(l.fltree, 8, 8), i.F.makeCodes(l.fltree, 9), i.F.codes2map(l.fltree, 9, l.flmap), i.F.revCodes(l.fltree, 9), f(l.fdtree, 32, 5), i.F.makeCodes(l.fdtree, 5), i.F.codes2map(l.fdtree, 5, l.fdmap), i.F.revCodes(l.fdtree, 5), f(l.itree, 19, 0), f(l.ltree, 286, 0), f(l.dtree, 30, 0), f(l.ttree, 320, 0) }() })();
var YN = VN({ __proto__: null, default: cu }, [cu]);
const Oa = function() { var e = { nextZero(m, g) { for (; m[g] != 0;) g++; return g }, readUshort: (m, g) => m[g] << 8 | m[g + 1], writeUshort(m, g, v) { m[g] = v >> 8 & 255, m[g + 1] = 255 & v }, readUint: (m, g) => 16777216 * m[g] + (m[g + 1] << 16 | m[g + 2] << 8 | m[g + 3]), writeUint(m, g, v) { m[g] = v >> 24 & 255, m[g + 1] = v >> 16 & 255, m[g + 2] = v >> 8 & 255, m[g + 3] = 255 & v }, readASCII(m, g, v) { let b = ""; for (let A = 0; A < v; A++) b += String.fromCharCode(m[g + A]); return b }, writeASCII(m, g, v) { for (let b = 0; b < v.length; b++) m[g + b] = v.charCodeAt(b) }, readBytes(m, g, v) { const b = []; for (let A = 0; A < v; A++) b.push(m[g + A]); return b }, pad: m => m.length < 2 ? `0${m}` : m, readUTF8(m, g, v) { let b, A = ""; for (let E = 0; E < v; E++) A += `%${e.pad(m[g+E].toString(16))}`; try { b = decodeURIComponent(A) } catch { return e.readASCII(m, g, v) } return b } };

    function t(m, g, v, b) { const A = g * v,
            E = o(b),
            w = Math.ceil(g * E / 8),
            S = new Uint8Array(4 * A),
            O = new Uint32Array(S.buffer),
            { ctype: D } = b,
            { depth: F } = b,
            K = e.readUshort; if (D == 6) { const te = A << 2; if (F == 8)
                for (var I = 0; I < te; I += 4) S[I] = m[I], S[I + 1] = m[I + 1], S[I + 2] = m[I + 2], S[I + 3] = m[I + 3]; if (F == 16)
                for (I = 0; I < te; I++) S[I] = m[I << 1] } else if (D == 2) { const te = b.tabs.tRNS; if (te == null) { if (F == 8)
                    for (I = 0; I < A; I++) { var V = 3 * I;
                        O[I] = 255 << 24 | m[V + 2] << 16 | m[V + 1] << 8 | m[V] }
                if (F == 16)
                    for (I = 0; I < A; I++) V = 6 * I, O[I] = 255 << 24 | m[V + 4] << 16 | m[V + 2] << 8 | m[V] } else { var N = te[0]; const j = te[1],
                    ce = te[2]; if (F == 8)
                    for (I = 0; I < A; I++) { var _ = I << 2;
                        V = 3 * I, O[I] = 255 << 24 | m[V + 2] << 16 | m[V + 1] << 8 | m[V], m[V] == N && m[V + 1] == j && m[V + 2] == ce && (S[_ + 3] = 0) }
                if (F == 16)
                    for (I = 0; I < A; I++) _ = I << 2, V = 6 * I, O[I] = 255 << 24 | m[V + 4] << 16 | m[V + 2] << 8 | m[V], K(m, V) == N && K(m, V + 2) == j && K(m, V + 4) == ce && (S[_ + 3] = 0) } } else if (D == 3) { const te = b.tabs.PLTE,
                j = b.tabs.tRNS,
                ce = j ? j.length : 0; if (F == 1)
                for (var U = 0; U < v; U++) { var q = U * w,
                        H = U * g; for (I = 0; I < g; I++) { _ = H + I << 2; var W = 3 * (ee = m[q + (I >> 3)] >> 7 - ((7 & I) << 0) & 1);
                        S[_] = te[W], S[_ + 1] = te[W + 1], S[_ + 2] = te[W + 2], S[_ + 3] = ee < ce ? j[ee] : 255 } }
            if (F == 2)
                for (U = 0; U < v; U++)
                    for (q = U * w, H = U * g, I = 0; I < g; I++) _ = H + I << 2, W = 3 * (ee = m[q + (I >> 2)] >> 6 - ((3 & I) << 1) & 3), S[_] = te[W], S[_ + 1] = te[W + 1], S[_ + 2] = te[W + 2], S[_ + 3] = ee < ce ? j[ee] : 255; if (F == 4)
                for (U = 0; U < v; U++)
                    for (q = U * w, H = U * g, I = 0; I < g; I++) _ = H + I << 2, W = 3 * (ee = m[q + (I >> 1)] >> 4 - ((1 & I) << 2) & 15), S[_] = te[W], S[_ + 1] = te[W + 1], S[_ + 2] = te[W + 2], S[_ + 3] = ee < ce ? j[ee] : 255; if (F == 8)
                for (I = 0; I < A; I++) { var ee;
                    _ = I << 2, W = 3 * (ee = m[I]), S[_] = te[W], S[_ + 1] = te[W + 1], S[_ + 2] = te[W + 2], S[_ + 3] = ee < ce ? j[ee] : 255 } } else if (D == 4) { if (F == 8)
                for (I = 0; I < A; I++) { _ = I << 2; var re = m[B = I << 1];
                    S[_] = re, S[_ + 1] = re, S[_ + 2] = re, S[_ + 3] = m[B + 1] }
            if (F == 16)
                for (I = 0; I < A; I++) { var B;
                    _ = I << 2, re = m[B = I << 2], S[_] = re, S[_ + 1] = re, S[_ + 2] = re, S[_ + 3] = m[B + 2] } } else if (D == 0)
            for (N = b.tabs.tRNS ? b.tabs.tRNS : -1, U = 0; U < v; U++) { const te = U * w,
                    j = U * g; if (F == 1)
                    for (var C = 0; C < g; C++) { var se = (re = 255 * (m[te + (C >>> 3)] >>> 7 - (7 & C) & 1)) == 255 * N ? 0 : 255;
                        O[j + C] = se << 24 | re << 16 | re << 8 | re } else if (F == 2)
                        for (C = 0; C < g; C++) se = (re = 85 * (m[te + (C >>> 2)] >>> 6 - ((3 & C) << 1) & 3)) == 85 * N ? 0 : 255, O[j + C] = se << 24 | re << 16 | re << 8 | re;
                    else if (F == 4)
                    for (C = 0; C < g; C++) se = (re = 17 * (m[te + (C >>> 1)] >>> 4 - ((1 & C) << 2) & 15)) == 17 * N ? 0 : 255, O[j + C] = se << 24 | re << 16 | re << 8 | re;
                else if (F == 8)
                    for (C = 0; C < g; C++) se = (re = m[te + C]) == N ? 0 : 255, O[j + C] = se << 24 | re << 16 | re << 8 | re;
                else if (F == 16)
                    for (C = 0; C < g; C++) re = m[te + (C << 1)], se = K(m, te + (C << 1)) == N ? 0 : 255, O[j + C] = se << 24 | re << 16 | re << 8 | re }
        return S }

    function r(m, g, v, b) { const A = o(m),
            E = Math.ceil(v * A / 8),
            w = new Uint8Array((E + 1 + m.interlace) * b); return g = m.tabs.CgBI ? l(g, w) : i(g, w), m.interlace == 0 ? g = c(g, m, 0, v, b) : m.interlace == 1 && (g = function(O, D) { const F = D.width,
                K = D.height,
                I = o(D),
                V = I >> 3,
                N = Math.ceil(F * I / 8),
                _ = new Uint8Array(K * N); let U = 0; const q = [0, 0, 4, 0, 2, 0, 1],
                H = [0, 4, 0, 2, 0, 1, 0],
                W = [8, 8, 8, 4, 4, 2, 2],
                ee = [8, 8, 4, 4, 2, 2, 1]; let re = 0; for (; re < 7;) { const C = W[re],
                    se = ee[re]; let te = 0,
                    j = 0,
                    ce = q[re]; for (; ce < K;) ce += C, j++; let k = H[re]; for (; k < F;) k += se, te++; const Q = Math.ceil(te * I / 8);
                c(O, D, U, te, j); let L = 0,
                    M = q[re]; for (; M < K;) { let ie = H[re],
                        _e = U + L * Q << 3; for (; ie < F;) { var B; if (I == 1 && (B = (B = O[_e >> 3]) >> 7 - (7 & _e) & 1, _[M * N + (ie >> 3)] |= B << 7 - ((7 & ie) << 0)), I == 2 && (B = (B = O[_e >> 3]) >> 6 - (7 & _e) & 3, _[M * N + (ie >> 2)] |= B << 6 - ((3 & ie) << 1)), I == 4 && (B = (B = O[_e >> 3]) >> 4 - (7 & _e) & 15, _[M * N + (ie >> 1)] |= B << 4 - ((1 & ie) << 2)), I >= 8) { const we = M * N + ie * V; for (let Te = 0; Te < V; Te++) _[we + Te] = O[(_e >> 3) + Te] }
                        _e += I, ie += se }
                    L++, M += C }
                te * j != 0 && (U += j * (1 + Q)), re += 1 } return _ }(g, m)), g }

    function i(m, g) { return l(new Uint8Array(m.buffer, 2, m.length - 6), g) } var l = function() { const m = { H: {} }; return m.H.N = function(g, v) { const b = Uint8Array; let A, E, w = 0,
                    S = 0,
                    O = 0,
                    D = 0,
                    F = 0,
                    K = 0,
                    I = 0,
                    V = 0,
                    N = 0; if (g[0] == 3 && g[1] == 0) return v || new b(0); const _ = m.H,
                    U = _.b,
                    q = _.e,
                    H = _.R,
                    W = _.n,
                    ee = _.A,
                    re = _.Z,
                    B = _.m,
                    C = v == null; for (C && (v = new b(g.length >>> 2 << 5)); w == 0;)
                    if (w = U(g, N, 1), S = U(g, N + 1, 2), N += 3, S != 0) { if (C && (v = m.H.W(v, V + (1 << 17))), S == 1 && (A = B.J, E = B.h, K = 511, I = 31), S == 2) { O = q(g, N, 5) + 257, D = q(g, N + 5, 5) + 1, F = q(g, N + 10, 4) + 4, N += 14; let te = 1; for (var se = 0; se < 38; se += 2) B.Q[se] = 0, B.Q[se + 1] = 0; for (se = 0; se < F; se++) { const k = q(g, N + 3 * se, 3);
                                B.Q[1 + (B.X[se] << 1)] = k, k > te && (te = k) }
                            N += 3 * F, W(B.Q, te), ee(B.Q, te, B.u), A = B.w, E = B.d, N = H(B.u, (1 << te) - 1, O + D, g, N, B.v); const j = _.V(B.v, 0, O, B.C);
                            K = (1 << j) - 1; const ce = _.V(B.v, O, D, B.D);
                            I = (1 << ce) - 1, W(B.C, j), ee(B.C, j, A), W(B.D, ce), ee(B.D, ce, E) } for (;;) { const te = A[re(g, N) & K];
                            N += 15 & te; const j = te >>> 4; if (!(j >>> 8)) v[V++] = j;
                            else { if (j == 256) break; { let ce = V + j - 254; if (j > 264) { const ie = B.q[j - 257];
                                        ce = V + (ie >>> 3) + q(g, N, 7 & ie), N += 7 & ie } const k = E[re(g, N) & I];
                                    N += 15 & k; const Q = k >>> 4,
                                        L = B.c[Q],
                                        M = (L >>> 4) + U(g, N, 15 & L); for (N += 15 & L; V < ce;) v[V] = v[V++ - M], v[V] = v[V++ - M], v[V] = v[V++ - M], v[V] = v[V++ - M];
                                    V = ce } } } } else {
                        (7 & N) != 0 && (N += 8 - (7 & N)); const te = 4 + (N >>> 3),
                            j = g[te - 4] | g[te - 3] << 8;
                        C && (v = m.H.W(v, V + j)), v.set(new b(g.buffer, g.byteOffset + te, j), V), N = te + j << 3, V += j }
                return v.length == V ? v : v.slice(0, V) }, m.H.W = function(g, v) { const b = g.length; if (v <= b) return g; const A = new Uint8Array(b << 1); return A.set(g, 0), A }, m.H.R = function(g, v, b, A, E, w) { const S = m.H.e,
                    O = m.H.Z; let D = 0; for (; D < b;) { const F = g[O(A, E) & v];
                    E += 15 & F; const K = F >>> 4; if (K <= 15) w[D] = K, D++;
                    else { let I = 0,
                            V = 0;
                        K == 16 ? (V = 3 + S(A, E, 2), E += 2, I = w[D - 1]) : K == 17 ? (V = 3 + S(A, E, 3), E += 3) : K == 18 && (V = 11 + S(A, E, 7), E += 7); const N = D + V; for (; D < N;) w[D] = I, D++ } } return E }, m.H.V = function(g, v, b, A) { let E = 0,
                    w = 0; const S = A.length >>> 1; for (; w < b;) { const O = g[w + v];
                    A[w << 1] = 0, A[1 + (w << 1)] = O, O > E && (E = O), w++ } for (; w < S;) A[w << 1] = 0, A[1 + (w << 1)] = 0, w++; return E }, m.H.n = function(g, v) { const b = m.H.m,
                    A = g.length; let E, w, S, O; const D = b.j; for (var F = 0; F <= v; F++) D[F] = 0; for (F = 1; F < A; F += 2) D[g[F]]++; const K = b.K; for (E = 0, D[0] = 0, w = 1; w <= v; w++) E = E + D[w - 1] << 1, K[w] = E; for (S = 0; S < A; S += 2) O = g[S + 1], O != 0 && (g[S] = K[O], K[O]++) }, m.H.A = function(g, v, b) { const A = g.length,
                    E = m.H.m.r; for (let w = 0; w < A; w += 2)
                    if (g[w + 1] != 0) { const S = w >> 1,
                            O = g[w + 1],
                            D = S << 4 | O,
                            F = v - O; let K = g[w] << F; const I = K + (1 << F); for (; K != I;) b[E[K] >>> 15 - v] = D, K++ } }, m.H.l = function(g, v) { const b = m.H.m.r,
                    A = 15 - v; for (let E = 0; E < g.length; E += 2) { const w = g[E] << v - g[E + 1];
                    g[E] = b[w] >>> A } }, m.H.M = function(g, v, b) { b <<= 7 & v; const A = v >>> 3;
                g[A] |= b, g[A + 1] |= b >>> 8 }, m.H.I = function(g, v, b) { b <<= 7 & v; const A = v >>> 3;
                g[A] |= b, g[A + 1] |= b >>> 8, g[A + 2] |= b >>> 16 }, m.H.e = function(g, v, b) { return (g[v >>> 3] | g[1 + (v >>> 3)] << 8) >>> (7 & v) & (1 << b) - 1 }, m.H.b = function(g, v, b) { return (g[v >>> 3] | g[1 + (v >>> 3)] << 8 | g[2 + (v >>> 3)] << 16) >>> (7 & v) & (1 << b) - 1 }, m.H.Z = function(g, v) { return (g[v >>> 3] | g[1 + (v >>> 3)] << 8 | g[2 + (v >>> 3)] << 16) >>> (7 & v) }, m.H.i = function(g, v) { return (g[v >>> 3] | g[1 + (v >>> 3)] << 8 | g[2 + (v >>> 3)] << 16 | g[3 + (v >>> 3)] << 24) >>> (7 & v) }, m.H.m = function() { const g = Uint16Array,
                    v = Uint32Array; return { K: new g(16), j: new g(16), X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], q: new g(32), p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], c: new v(32), J: new g(512), _: [], h: new g(32), $: [], w: new g(32768), C: [], v: [], d: new g(32768), D: [], u: new g(512), Q: [], r: new g(32768), s: new v(286), Y: new v(30), a: new v(19), t: new v(15e3), k: new g(65536), g: new g(32768) } }(),
            function() { const g = m.H.m; for (var v = 0; v < 32768; v++) { let A = v;
                    A = (2863311530 & A) >>> 1 | (1431655765 & A) << 1, A = (3435973836 & A) >>> 2 | (858993459 & A) << 2, A = (4042322160 & A) >>> 4 | (252645135 & A) << 4, A = (4278255360 & A) >>> 8 | (16711935 & A) << 8, g.r[v] = (A >>> 16 | A << 16) >>> 17 }

                function b(A, E, w) { for (; E-- != 0;) A.push(0, w) } for (v = 0; v < 32; v++) g.q[v] = g.S[v] << 3 | g.T[v], g.c[v] = g.p[v] << 4 | g.z[v];
                b(g._, 144, 8), b(g._, 112, 9), b(g._, 24, 7), b(g._, 8, 8), m.H.n(g._, 9), m.H.A(g._, 9, g.J), m.H.l(g._, 9), b(g.$, 32, 5), m.H.n(g.$, 5), m.H.A(g.$, 5, g.h), m.H.l(g.$, 5), b(g.Q, 19, 0), b(g.C, 286, 0), b(g.D, 30, 0), b(g.v, 320, 0) }(), m.H.N }();

    function o(m) { return [1, null, 3, 1, 2, null, 4][m.ctype] * m.depth }

    function c(m, g, v, b, A) { let E = o(g); const w = Math.ceil(b * E / 8); let S, O;
        E = Math.ceil(E / 8); let D = m[v],
            F = 0; if (D > 1 && (m[v] = [0, 0, 1][D - 2]), D == 3)
            for (F = E; F < w; F++) m[F + 1] = m[F + 1] + (m[F + 1 - E] >>> 1) & 255; for (let K = 0; K < A; K++)
            if (S = v + K * w, O = S + K + 1, D = m[O - 1], F = 0, D == 0)
                for (; F < w; F++) m[S + F] = m[O + F];
            else if (D == 1) { for (; F < E; F++) m[S + F] = m[O + F]; for (; F < w; F++) m[S + F] = m[O + F] + m[S + F - E] } else if (D == 2)
            for (; F < w; F++) m[S + F] = m[O + F] + m[S + F - w];
        else if (D == 3) { for (; F < E; F++) m[S + F] = m[O + F] + (m[S + F - w] >>> 1); for (; F < w; F++) m[S + F] = m[O + F] + (m[S + F - w] + m[S + F - E] >>> 1) } else { for (; F < E; F++) m[S + F] = m[O + F] + f(0, m[S + F - w], 0); for (; F < w; F++) m[S + F] = m[O + F] + f(m[S + F - E], m[S + F - w], m[S + F - E - w]) } return m }

    function f(m, g, v) { const b = m + g - v,
            A = b - m,
            E = b - g,
            w = b - v; return A * A <= E * E && A * A <= w * w ? m : E * E <= w * w ? g : v }

    function p(m, g, v) { v.width = e.readUint(m, g), g += 4, v.height = e.readUint(m, g), g += 4, v.depth = m[g], g++, v.ctype = m[g], g++, v.compress = m[g], g++, v.filter = m[g], g++, v.interlace = m[g], g++ }

    function x(m, g, v, b, A, E, w, S, O) { const D = Math.min(g, A),
            F = Math.min(v, E); let K = 0,
            I = 0; for (let re = 0; re < F; re++)
            for (let B = 0; B < D; B++)
                if (w >= 0 && S >= 0 ? (K = re * g + B << 2, I = (S + re) * A + w + B << 2) : (K = (-S + re) * g - w + B << 2, I = re * A + B << 2), O == 0) b[I] = m[K], b[I + 1] = m[K + 1], b[I + 2] = m[K + 2], b[I + 3] = m[K + 3];
                else if (O == 1) { var V = m[K + 3] * .00392156862745098,
                N = m[K] * V,
                _ = m[K + 1] * V,
                U = m[K + 2] * V,
                q = b[I + 3] * (1 / 255),
                H = b[I] * q,
                W = b[I + 1] * q,
                ee = b[I + 2] * q; const C = 1 - V,
                se = V + q * C,
                te = se == 0 ? 0 : 1 / se;
            b[I + 3] = 255 * se, b[I + 0] = (N + H * C) * te, b[I + 1] = (_ + W * C) * te, b[I + 2] = (U + ee * C) * te } else if (O == 2) V = m[K + 3], N = m[K], _ = m[K + 1], U = m[K + 2], q = b[I + 3], H = b[I], W = b[I + 1], ee = b[I + 2], V == q && N == H && _ == W && U == ee ? (b[I] = 0, b[I + 1] = 0, b[I + 2] = 0, b[I + 3] = 0) : (b[I] = N, b[I + 1] = _, b[I + 2] = U, b[I + 3] = V);
        else if (O == 3) { if (V = m[K + 3], N = m[K], _ = m[K + 1], U = m[K + 2], q = b[I + 3], H = b[I], W = b[I + 1], ee = b[I + 2], V == q && N == H && _ == W && U == ee) continue; if (V < 220 && q > 20) return !1 } return !0 } return { decode: function(g) { const v = new Uint8Array(g); let b = 8; const A = e,
                E = A.readUshort,
                w = A.readUint,
                S = { tabs: {}, frames: [] },
                O = new Uint8Array(v.length); let D, F = 0,
                K = 0; const I = [137, 80, 78, 71, 13, 10, 26, 10]; for (var V = 0; V < 8; V++)
                if (v[V] != I[V]) throw "The input is not a PNG file!";
            for (; b < v.length;) { const re = A.readUint(v, b);
                b += 4; const B = A.readASCII(v, b, 4); if (b += 4, B == "IHDR") p(v, b, S);
                else if (B == "iCCP") { for (var N = b; v[N] != 0;) N++;
                    A.readASCII(v, b, N - b), v[N + 1]; const C = v.slice(N + 2, b + re); let se = null; try { se = i(C) } catch { se = l(C) }
                    S.tabs[B] = se } else if (B == "CgBI") S.tabs[B] = v.slice(b, b + 4);
                else if (B == "IDAT") { for (V = 0; V < re; V++) O[F + V] = v[b + V];
                    F += re } else if (B == "acTL") S.tabs[B] = { num_frames: w(v, b), num_plays: w(v, b + 4) }, D = new Uint8Array(v.length);
                else if (B == "fcTL") { K != 0 && ((ee = S.frames[S.frames.length - 1]).data = r(S, D.slice(0, K), ee.rect.width, ee.rect.height), K = 0); const C = { x: w(v, b + 12), y: w(v, b + 16), width: w(v, b + 4), height: w(v, b + 8) }; let se = E(v, b + 22);
                    se = E(v, b + 20) / (se == 0 ? 100 : se); const te = { rect: C, delay: Math.round(1e3 * se), dispose: v[b + 24], blend: v[b + 25] };
                    S.frames.push(te) } else if (B == "fdAT") { for (V = 0; V < re - 4; V++) D[K + V] = v[b + V + 4];
                    K += re - 4 } else if (B == "pHYs") S.tabs[B] = [A.readUint(v, b), A.readUint(v, b + 4), v[b + 8]];
                else if (B == "cHRM")
                    for (S.tabs[B] = [], V = 0; V < 8; V++) S.tabs[B].push(A.readUint(v, b + 4 * V));
                else if (B == "tEXt" || B == "zTXt") { S.tabs[B] == null && (S.tabs[B] = {}); var _ = A.nextZero(v, b),
                        U = A.readASCII(v, b, _ - b),
                        q = b + re - _ - 1; if (B == "tEXt") W = A.readASCII(v, _ + 1, q);
                    else { var H = i(v.slice(_ + 2, _ + 2 + q));
                        W = A.readUTF8(H, 0, H.length) }
                    S.tabs[B][U] = W } else if (B == "iTXt") { S.tabs[B] == null && (S.tabs[B] = {}), _ = 0, N = b, _ = A.nextZero(v, N), U = A.readASCII(v, N, _ - N); const C = v[N = _ + 1]; var W;
                    v[N + 1], N += 2, _ = A.nextZero(v, N), A.readASCII(v, N, _ - N), N = _ + 1, _ = A.nextZero(v, N), A.readUTF8(v, N, _ - N), q = re - ((N = _ + 1) - b), C == 0 ? W = A.readUTF8(v, N, q) : (H = i(v.slice(N, N + q)), W = A.readUTF8(H, 0, H.length)), S.tabs[B][U] = W } else if (B == "PLTE") S.tabs[B] = A.readBytes(v, b, re);
                else if (B == "hIST") { const C = S.tabs.PLTE.length / 3; for (S.tabs[B] = [], V = 0; V < C; V++) S.tabs[B].push(E(v, b + 2 * V)) } else if (B == "tRNS") S.ctype == 3 ? S.tabs[B] = A.readBytes(v, b, re) : S.ctype == 0 ? S.tabs[B] = E(v, b) : S.ctype == 2 && (S.tabs[B] = [E(v, b), E(v, b + 2), E(v, b + 4)]);
                else if (B == "gAMA") S.tabs[B] = A.readUint(v, b) / 1e5;
                else if (B == "sRGB") S.tabs[B] = v[b];
                else if (B == "bKGD") S.ctype == 0 || S.ctype == 4 ? S.tabs[B] = [E(v, b)] : S.ctype == 2 || S.ctype == 6 ? S.tabs[B] = [E(v, b), E(v, b + 2), E(v, b + 4)] : S.ctype == 3 && (S.tabs[B] = v[b]);
                else if (B == "IEND") break;
                b += re, A.readUint(v, b), b += 4 } var ee; return K != 0 && ((ee = S.frames[S.frames.length - 1]).data = r(S, D.slice(0, K), ee.rect.width, ee.rect.height)), S.data = r(S, O, S.width, S.height), delete S.compress, delete S.interlace, delete S.filter, S }, toRGBA8: function(g) { const v = g.width,
                b = g.height; if (g.tabs.acTL == null) return [t(g.data, v, b, g).buffer]; const A = [];
            g.frames[0].data == null && (g.frames[0].data = g.data); const E = v * b * 4,
                w = new Uint8Array(E),
                S = new Uint8Array(E),
                O = new Uint8Array(E); for (let F = 0; F < g.frames.length; F++) { const K = g.frames[F],
                    I = K.rect.x,
                    V = K.rect.y,
                    N = K.rect.width,
                    _ = K.rect.height,
                    U = t(K.data, N, _, g); if (F != 0)
                    for (var D = 0; D < E; D++) O[D] = w[D]; if (K.blend == 0 ? x(U, N, _, w, v, b, I, V, 0) : K.blend == 1 && x(U, N, _, w, v, b, I, V, 1), A.push(w.buffer.slice(0)), K.dispose != 0) { if (K.dispose == 1) x(S, N, _, w, v, b, I, V, 0);
                    else if (K.dispose == 2)
                        for (D = 0; D < E; D++) w[D] = O[D] } } return A }, _paeth: f, _copyTile: x, _bin: e } }();
(function() { const { _copyTile: e } = Oa, { _bin: t } = Oa, r = Oa._paeth; var i = { table: function() { const N = new Uint32Array(256); for (let _ = 0; _ < 256; _++) { let U = _; for (let q = 0; q < 8; q++) 1 & U ? U = 3988292384 ^ U >>> 1 : U >>>= 1;
                N[_] = U } return N }(), update(N, _, U, q) { for (let H = 0; H < q; H++) N = i.table[255 & (N ^ _[U + H])] ^ N >>> 8; return N }, crc: (N, _, U) => 4294967295 ^ i.update(4294967295, N, _, U) };

    function l(N, _, U, q) { _[U] += N[0] * q >> 4, _[U + 1] += N[1] * q >> 4, _[U + 2] += N[2] * q >> 4, _[U + 3] += N[3] * q >> 4 }

    function o(N) { return Math.max(0, Math.min(255, N)) }

    function c(N, _) { const U = N[0] - _[0],
            q = N[1] - _[1],
            H = N[2] - _[2],
            W = N[3] - _[3]; return U * U + q * q + H * H + W * W }

    function f(N, _, U, q, H, W, ee) { ee == null && (ee = 1); const re = q.length,
            B = []; for (var C = 0; C < re; C++) { const M = q[C];
            B.push([M >>> 0 & 255, M >>> 8 & 255, M >>> 16 & 255, M >>> 24 & 255]) } for (C = 0; C < re; C++) { let M = 4294967295; for (var se = 0, te = 0; te < re; te++) { var j = c(B[C], B[te]);
                te != C && j < M && (M = j, se = te) } } const ce = new Uint32Array(H.buffer),
            k = new Int16Array(_ * U * 4),
            Q = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]; for (C = 0; C < Q.length; C++) Q[C] = 255 * ((Q[C] + .5) / 16 - .5); for (let M = 0; M < U; M++)
            for (let ie = 0; ie < _; ie++) { var L;
                C = 4 * (M * _ + ie), ee != 2 ? L = [o(N[C] + k[C]), o(N[C + 1] + k[C + 1]), o(N[C + 2] + k[C + 2]), o(N[C + 3] + k[C + 3])] : (j = Q[4 * (3 & M) + (3 & ie)], L = [o(N[C] + j), o(N[C + 1] + j), o(N[C + 2] + j), o(N[C + 3] + j)]), se = 0; let _e = 16777215; for (te = 0; te < re; te++) { const ye = c(L, B[te]);
                    ye < _e && (_e = ye, se = te) } const we = B[se],
                    Te = [L[0] - we[0], L[1] - we[1], L[2] - we[2], L[3] - we[3]];
                ee == 1 && (ie != _ - 1 && l(Te, k, C + 4, 7), M != U - 1 && (ie != 0 && l(Te, k, C + 4 * _ - 4, 3), l(Te, k, C + 4 * _, 5), ie != _ - 1 && l(Te, k, C + 4 * _ + 4, 1))), W[C >> 2] = se, ce[C >> 2] = q[se] } }

    function p(N, _, U, q, H) { H == null && (H = {}); const { crc: W } = i, ee = t.writeUint, re = t.writeUshort, B = t.writeASCII; let C = 8; const se = N.frames.length > 1; let te, j = !1,
            ce = 33 + (se ? 20 : 0); if (H.sRGB != null && (ce += 13), H.pHYs != null && (ce += 21), H.iCCP != null && (te = pako.deflate(H.iCCP), ce += 21 + te.length + 4), N.ctype == 3) { for (var k = N.plte.length, Q = 0; Q < k; Q++) N.plte[Q] >>> 24 != 255 && (j = !0);
            ce += 8 + 3 * k + 4 + (j ? 8 + 1 * k + 4 : 0) } for (var L = 0; L < N.frames.length; L++) se && (ce += 38), ce += (we = N.frames[L]).cimg.length + 12, L != 0 && (ce += 4);
        ce += 12; const M = new Uint8Array(ce),
            ie = [137, 80, 78, 71, 13, 10, 26, 10]; for (Q = 0; Q < 8; Q++) M[Q] = ie[Q]; if (ee(M, C, 13), C += 4, B(M, C, "IHDR"), C += 4, ee(M, C, _), C += 4, ee(M, C, U), C += 4, M[C] = N.depth, C++, M[C] = N.ctype, C++, M[C] = 0, C++, M[C] = 0, C++, M[C] = 0, C++, ee(M, C, W(M, C - 17, 17)), C += 4, H.sRGB != null && (ee(M, C, 1), C += 4, B(M, C, "sRGB"), C += 4, M[C] = H.sRGB, C++, ee(M, C, W(M, C - 5, 5)), C += 4), H.iCCP != null) { const Te = 13 + te.length;
            ee(M, C, Te), C += 4, B(M, C, "iCCP"), C += 4, B(M, C, "ICC profile"), C += 11, C += 2, M.set(te, C), C += te.length, ee(M, C, W(M, C - (Te + 4), Te + 4)), C += 4 } if (H.pHYs != null && (ee(M, C, 9), C += 4, B(M, C, "pHYs"), C += 4, ee(M, C, H.pHYs[0]), C += 4, ee(M, C, H.pHYs[1]), C += 4, M[C] = H.pHYs[2], C++, ee(M, C, W(M, C - 13, 13)), C += 4), se && (ee(M, C, 8), C += 4, B(M, C, "acTL"), C += 4, ee(M, C, N.frames.length), C += 4, ee(M, C, H.loop != null ? H.loop : 0), C += 4, ee(M, C, W(M, C - 12, 12)), C += 4), N.ctype == 3) { for (ee(M, C, 3 * (k = N.plte.length)), C += 4, B(M, C, "PLTE"), C += 4, Q = 0; Q < k; Q++) { const Te = 3 * Q,
                    ye = N.plte[Q],
                    Pe = 255 & ye,
                    ze = ye >>> 8 & 255,
                    st = ye >>> 16 & 255;
                M[C + Te + 0] = Pe, M[C + Te + 1] = ze, M[C + Te + 2] = st } if (C += 3 * k, ee(M, C, W(M, C - 3 * k - 4, 3 * k + 4)), C += 4, j) { for (ee(M, C, k), C += 4, B(M, C, "tRNS"), C += 4, Q = 0; Q < k; Q++) M[C + Q] = N.plte[Q] >>> 24 & 255;
                C += k, ee(M, C, W(M, C - k - 4, k + 4)), C += 4 } } let _e = 0; for (L = 0; L < N.frames.length; L++) { var we = N.frames[L];
            se && (ee(M, C, 26), C += 4, B(M, C, "fcTL"), C += 4, ee(M, C, _e++), C += 4, ee(M, C, we.rect.width), C += 4, ee(M, C, we.rect.height), C += 4, ee(M, C, we.rect.x), C += 4, ee(M, C, we.rect.y), C += 4, re(M, C, q[L]), C += 2, re(M, C, 1e3), C += 2, M[C] = we.dispose, C++, M[C] = we.blend, C++, ee(M, C, W(M, C - 30, 30)), C += 4); const Te = we.cimg;
            ee(M, C, (k = Te.length) + (L == 0 ? 0 : 4)), C += 4; const ye = C;
            B(M, C, L == 0 ? "IDAT" : "fdAT"), C += 4, L != 0 && (ee(M, C, _e++), C += 4), M.set(Te, C), C += k, ee(M, C, W(M, ye, C - ye)), C += 4 } return ee(M, C, 0), C += 4, B(M, C, "IEND"), C += 4, ee(M, C, W(M, C - 4, 4)), C += 4, M.buffer }

    function x(N, _, U) { for (let q = 0; q < N.frames.length; q++) { const H = N.frames[q];
            H.rect.width; const W = H.rect.height,
                ee = new Uint8Array(W * H.bpl + W);
            H.cimg = b(H.img, W, H.bpp, H.bpl, ee, _, U) } }

    function m(N, _, U, q, H) { const W = H[0],
            ee = H[1],
            re = H[2],
            B = H[3],
            C = H[4],
            se = H[5]; let te = 6,
            j = 8,
            ce = 255; for (var k = 0; k < N.length; k++) { const We = new Uint8Array(N[k]); for (var Q = We.length, L = 0; L < Q; L += 4) ce &= We[L + 3] } const M = ce != 255,
            ie = function(Oe, Ke, ot, pt, ct, It) { const gt = []; for (var ae = 0; ae < Oe.length; ae++) { const Rt = new Uint8Array(Oe[ae]),
                        vr = new Uint32Array(Rt.buffer); var Le; let sr = 0,
                        er = 0,
                        Tt = Ke,
                        na = ot,
                        jr = pt ? 1 : 0; if (ae != 0) { const or = It || pt || ae == 1 || gt[ae - 2].dispose != 0 ? 1 : 2; let An = 0,
                            ai = 1e9; for (let ka = 0; ka < or; ka++) { var Ie = new Uint8Array(Oe[ae - 1 - ka]); const En = new Uint32Array(Oe[ae - 1 - ka]); let Tr = Ke,
                                Ht = ot,
                                Gr = -1,
                                Vr = -1; for (let ia = 0; ia < ot; ia++)
                                for (let la = 0; la < Ke; la++) vr[it = ia * Ke + la] != En[it] && (la < Tr && (Tr = la), la > Gr && (Gr = la), ia < Ht && (Ht = ia), ia > Vr && (Vr = ia));
                            Gr == -1 && (Tr = Ht = Gr = Vr = 0), ct && ((1 & Tr) == 1 && Tr--, (1 & Ht) == 1 && Ht--); const qi = (Gr - Tr + 1) * (Vr - Ht + 1);
                            qi < ai && (ai = qi, An = ka, sr = Tr, er = Ht, Tt = Gr - Tr + 1, na = Vr - Ht + 1) }
                        Ie = new Uint8Array(Oe[ae - 1 - An]), An == 1 && (gt[ae - 1].dispose = 2), Le = new Uint8Array(Tt * na * 4), e(Ie, Ke, ot, Le, Tt, na, -sr, -er, 0), jr = e(Rt, Ke, ot, Le, Tt, na, -sr, -er, 3) ? 1 : 0, jr == 1 ? v(Rt, Ke, ot, Le, { x: sr, y: er, width: Tt, height: na }) : e(Rt, Ke, ot, Le, Tt, na, -sr, -er, 0) } else Le = Rt.slice(0);
                    gt.push({ rect: { x: sr, y: er, width: Tt, height: na }, img: Le, blend: jr, dispose: 0 }) } if (pt)
                    for (ae = 0; ae < gt.length; ae++) { if ((Hr = gt[ae]).blend == 1) continue; const Rt = Hr.rect,
                            vr = gt[ae - 1].rect,
                            sr = Math.min(Rt.x, vr.x),
                            er = Math.min(Rt.y, vr.y),
                            Tt = { x: sr, y: er, width: Math.max(Rt.x + Rt.width, vr.x + vr.width) - sr, height: Math.max(Rt.y + Rt.height, vr.y + vr.height) - er };
                        gt[ae - 1].dispose = 1, ae - 1 != 0 && g(Oe, Ke, ot, gt, ae - 1, Tt, ct), g(Oe, Ke, ot, gt, ae, Tt, ct) }
                let Ot = 0; if (Oe.length != 1)
                    for (var it = 0; it < gt.length; it++) { var Hr;
                        Ot += (Hr = gt[it]).rect.width * Hr.rect.height }
                return gt }(N, _, U, W, ee, re),
            _e = {},
            we = [],
            Te = []; if (q != 0) { const We = []; for (L = 0; L < ie.length; L++) We.push(ie[L].img.buffer); const Oe = function(ct) { let It = 0; for (var gt = 0; gt < ct.length; gt++) It += ct[gt].byteLength; const ae = new Uint8Array(It); let Le = 0; for (gt = 0; gt < ct.length; gt++) { const Ie = new Uint8Array(ct[gt]),
                            Ot = Ie.length; for (let it = 0; it < Ot; it += 4) { let Hr = Ie[it],
                                Rt = Ie[it + 1],
                                vr = Ie[it + 2]; const sr = Ie[it + 3];
                            sr == 0 && (Hr = Rt = vr = 0), ae[Le + it] = Hr, ae[Le + it + 1] = Rt, ae[Le + it + 2] = vr, ae[Le + it + 3] = sr }
                        Le += Ot } return ae.buffer }(We),
                Ke = E(Oe, q); for (L = 0; L < Ke.plte.length; L++) we.push(Ke.plte[L].est.rgba); let ot = 0; for (L = 0; L < ie.length; L++) { const pt = (Pe = ie[L]).img.length; var ye = new Uint8Array(Ke.inds.buffer, ot >> 2, pt >> 2);
                Te.push(ye); const ct = new Uint8Array(Ke.abuf, ot, pt);
                se && f(Pe.img, Pe.rect.width, Pe.rect.height, we, ct, ye), Pe.img.set(ct), ot += pt } } else
            for (k = 0; k < ie.length; k++) { var Pe = ie[k]; const We = new Uint32Array(Pe.img.buffer); var ze = Pe.rect.width; for (Q = We.length, ye = new Uint8Array(Q), Te.push(ye), L = 0; L < Q; L++) { const Oe = We[L]; if (L != 0 && Oe == We[L - 1]) ye[L] = ye[L - 1];
                    else if (L > ze && Oe == We[L - ze]) ye[L] = ye[L - ze];
                    else { let Ke = _e[Oe]; if (Ke == null && (_e[Oe] = Ke = we.length, we.push(Oe), we.length >= 300)) break;
                        ye[L] = Ke } } }
        const st = we.length; for (st <= 256 && C == 0 && (j = st <= 2 ? 1 : st <= 4 ? 2 : st <= 16 ? 4 : 8, j = Math.max(j, B)), k = 0; k < ie.length; k++) {
            (Pe = ie[k]).rect.x, Pe.rect.y, ze = Pe.rect.width; const We = Pe.rect.height; let Oe = Pe.img;
            new Uint32Array(Oe.buffer); let Ke = 4 * ze,
                ot = 4; if (st <= 256 && C == 0) { Ke = Math.ceil(j * ze / 8); var Ye = new Uint8Array(Ke * We); const pt = Te[k]; for (let ct = 0; ct < We; ct++) { L = ct * Ke; const It = ct * ze; if (j == 8)
                        for (var tt = 0; tt < ze; tt++) Ye[L + tt] = pt[It + tt];
                    else if (j == 4)
                        for (tt = 0; tt < ze; tt++) Ye[L + (tt >> 1)] |= pt[It + tt] << 4 - 4 * (1 & tt);
                    else if (j == 2)
                        for (tt = 0; tt < ze; tt++) Ye[L + (tt >> 2)] |= pt[It + tt] << 6 - 2 * (3 & tt);
                    else if (j == 1)
                        for (tt = 0; tt < ze; tt++) Ye[L + (tt >> 3)] |= pt[It + tt] << 7 - 1 * (7 & tt) }
                Oe = Ye, te = 3, ot = 1 } else if (M == 0 && ie.length == 1) { Ye = new Uint8Array(ze * We * 3); const pt = ze * We; for (L = 0; L < pt; L++) { const ct = 3 * L,
                        It = 4 * L;
                    Ye[ct] = Oe[It], Ye[ct + 1] = Oe[It + 1], Ye[ct + 2] = Oe[It + 2] }
                Oe = Ye, te = 2, ot = 3, Ke = 3 * ze }
            Pe.img = Oe, Pe.bpl = Ke, Pe.bpp = ot } return { ctype: te, depth: j, plte: we, frames: ie } }

    function g(N, _, U, q, H, W, ee) { const re = Uint8Array,
            B = Uint32Array,
            C = new re(N[H - 1]),
            se = new B(N[H - 1]),
            te = H + 1 < N.length ? new re(N[H + 1]) : null,
            j = new re(N[H]),
            ce = new B(j.buffer); let k = _,
            Q = U,
            L = -1,
            M = -1; for (let _e = 0; _e < W.height; _e++)
            for (let we = 0; we < W.width; we++) { const Te = W.x + we,
                    ye = W.y + _e,
                    Pe = ye * _ + Te,
                    ze = ce[Pe];
                ze == 0 || q[H - 1].dispose == 0 && se[Pe] == ze && (te == null || te[4 * Pe + 3] != 0) || (Te < k && (k = Te), Te > L && (L = Te), ye < Q && (Q = ye), ye > M && (M = ye)) }
        L == -1 && (k = Q = L = M = 0), ee && ((1 & k) == 1 && k--, (1 & Q) == 1 && Q--), W = { x: k, y: Q, width: L - k + 1, height: M - Q + 1 }; const ie = q[H];
        ie.rect = W, ie.blend = 1, ie.img = new Uint8Array(W.width * W.height * 4), q[H - 1].dispose == 0 ? (e(C, _, U, ie.img, W.width, W.height, -W.x, -W.y, 0), v(j, _, U, ie.img, W)) : e(j, _, U, ie.img, W.width, W.height, -W.x, -W.y, 0) }

    function v(N, _, U, q, H) { e(N, _, U, q, H.width, H.height, -H.x, -H.y, 2) }

    function b(N, _, U, q, H, W, ee) { const re = []; let B, C = [0, 1, 2, 3, 4];
        W != -1 ? C = [W] : (_ * q > 5e5 || U == 1) && (C = [0]), ee && (B = { level: 0 }); const se = YN; for (var te = 0; te < C.length; te++) { for (let k = 0; k < _; k++) A(H, N, k, q, U, C[te]);
            re.push(se.deflate(H, B)) } let j, ce = 1e9; for (te = 0; te < re.length; te++) re[te].length < ce && (j = te, ce = re[te].length); return re[j] }

    function A(N, _, U, q, H, W) { const ee = U * q; let re = ee + U; if (N[re] = W, re++, W == 0)
            if (q < 500)
                for (var B = 0; B < q; B++) N[re + B] = _[ee + B];
            else N.set(new Uint8Array(_.buffer, ee, q), re);
        else if (W == 1) { for (B = 0; B < H; B++) N[re + B] = _[ee + B]; for (B = H; B < q; B++) N[re + B] = _[ee + B] - _[ee + B - H] + 256 & 255 } else if (U == 0) { for (B = 0; B < H; B++) N[re + B] = _[ee + B]; if (W == 2)
                for (B = H; B < q; B++) N[re + B] = _[ee + B]; if (W == 3)
                for (B = H; B < q; B++) N[re + B] = _[ee + B] - (_[ee + B - H] >> 1) + 256 & 255; if (W == 4)
                for (B = H; B < q; B++) N[re + B] = _[ee + B] - r(_[ee + B - H], 0, 0) + 256 & 255 } else { if (W == 2)
                for (B = 0; B < q; B++) N[re + B] = _[ee + B] + 256 - _[ee + B - q] & 255; if (W == 3) { for (B = 0; B < H; B++) N[re + B] = _[ee + B] + 256 - (_[ee + B - q] >> 1) & 255; for (B = H; B < q; B++) N[re + B] = _[ee + B] + 256 - (_[ee + B - q] + _[ee + B - H] >> 1) & 255 } if (W == 4) { for (B = 0; B < H; B++) N[re + B] = _[ee + B] + 256 - r(0, _[ee + B - q], 0) & 255; for (B = H; B < q; B++) N[re + B] = _[ee + B] + 256 - r(_[ee + B - H], _[ee + B - q], _[ee + B - H - q]) & 255 } } }

    function E(N, _) { const U = new Uint8Array(N),
            q = U.slice(0),
            H = new Uint32Array(q.buffer),
            W = w(q, _),
            ee = W[0],
            re = W[1],
            B = U.length,
            C = new Uint8Array(B >> 2); let se; if (U.length < 2e7)
            for (var te = 0; te < B; te += 4) se = S(ee, j = U[te] * (1 / 255), ce = U[te + 1] * (1 / 255), k = U[te + 2] * (1 / 255), Q = U[te + 3] * (1 / 255)), C[te >> 2] = se.ind, H[te >> 2] = se.est.rgba;
        else
            for (te = 0; te < B; te += 4) { var j = U[te] * .00392156862745098,
                    ce = U[te + 1] * (1 / 255),
                    k = U[te + 2] * (1 / 255),
                    Q = U[te + 3] * (1 / 255); for (se = ee; se.left;) se = O(se.est, j, ce, k, Q) <= 0 ? se.left : se.right;
                C[te >> 2] = se.ind, H[te >> 2] = se.est.rgba }
        return { abuf: q.buffer, inds: C, plte: re } }

    function w(N, _, U) { U == null && (U = 1e-4); const q = new Uint32Array(N.buffer),
            H = { i0: 0, i1: N.length, bst: null, est: null, tdst: 0, left: null, right: null };
        H.bst = K(N, H.i0, H.i1), H.est = I(H.bst); const W = [H]; for (; W.length < _;) { let re = 0,
                B = 0; for (var ee = 0; ee < W.length; ee++) W[ee].est.L > re && (re = W[ee].est.L, B = ee); if (re < U) break; const C = W[B],
                se = D(N, q, C.i0, C.i1, C.est.e, C.est.eMq255); if (C.i0 >= se || C.i1 <= se) { C.est.L = 0; continue } const te = { i0: C.i0, i1: se, bst: null, est: null, tdst: 0, left: null, right: null };
            te.bst = K(N, te.i0, te.i1), te.est = I(te.bst); const j = { i0: se, i1: C.i1, bst: null, est: null, tdst: 0, left: null, right: null }; for (j.bst = { R: [], m: [], N: C.bst.N - te.bst.N }, ee = 0; ee < 16; ee++) j.bst.R[ee] = C.bst.R[ee] - te.bst.R[ee]; for (ee = 0; ee < 4; ee++) j.bst.m[ee] = C.bst.m[ee] - te.bst.m[ee];
            j.est = I(j.bst), C.left = te, C.right = j, W[B] = te, W.push(j) } for (W.sort((re, B) => B.bst.N - re.bst.N), ee = 0; ee < W.length; ee++) W[ee].ind = ee; return [H, W] }

    function S(N, _, U, q, H) { if (N.left == null) return N.tdst = function(te, j, ce, k, Q) { const L = j - te[0],
                M = ce - te[1],
                ie = k - te[2],
                _e = Q - te[3]; return L * L + M * M + ie * ie + _e * _e }(N.est.q, _, U, q, H), N; const W = O(N.est, _, U, q, H); let ee = N.left,
            re = N.right;
        W > 0 && (ee = N.right, re = N.left); const B = S(ee, _, U, q, H); if (B.tdst <= W * W) return B; const C = S(re, _, U, q, H); return C.tdst < B.tdst ? C : B }

    function O(N, _, U, q, H) { const { e: W } = N; return W[0] * _ + W[1] * U + W[2] * q + W[3] * H - N.eMq }

    function D(N, _, U, q, H, W) { for (q -= 4; U < q;) { for (; F(N, U, H) <= W;) U += 4; for (; F(N, q, H) > W;) q -= 4; if (U >= q) break; const ee = _[U >> 2];
            _[U >> 2] = _[q >> 2], _[q >> 2] = ee, U += 4, q -= 4 } for (; F(N, U, H) > W;) U -= 4; return U + 4 }

    function F(N, _, U) { return N[_] * U[0] + N[_ + 1] * U[1] + N[_ + 2] * U[2] + N[_ + 3] * U[3] }

    function K(N, _, U) { const q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            H = [0, 0, 0, 0],
            W = U - _ >> 2; for (let ee = _; ee < U; ee += 4) { const re = N[ee] * .00392156862745098,
                B = N[ee + 1] * (1 / 255),
                C = N[ee + 2] * (1 / 255),
                se = N[ee + 3] * (1 / 255);
            H[0] += re, H[1] += B, H[2] += C, H[3] += se, q[0] += re * re, q[1] += re * B, q[2] += re * C, q[3] += re * se, q[5] += B * B, q[6] += B * C, q[7] += B * se, q[10] += C * C, q[11] += C * se, q[15] += se * se } return q[4] = q[1], q[8] = q[2], q[9] = q[6], q[12] = q[3], q[13] = q[7], q[14] = q[11], { R: q, m: H, N: W } }

    function I(N) { const { R: _ } = N, { m: U } = N, { N: q } = N, H = U[0], W = U[1], ee = U[2], re = U[3], B = q == 0 ? 0 : 1 / q, C = [_[0] - H * H * B, _[1] - H * W * B, _[2] - H * ee * B, _[3] - H * re * B, _[4] - W * H * B, _[5] - W * W * B, _[6] - W * ee * B, _[7] - W * re * B, _[8] - ee * H * B, _[9] - ee * W * B, _[10] - ee * ee * B, _[11] - ee * re * B, _[12] - re * H * B, _[13] - re * W * B, _[14] - re * ee * B, _[15] - re * re * B], se = C, te = V; let j = [Math.random(), Math.random(), Math.random(), Math.random()],
            ce = 0,
            k = 0; if (q != 0)
            for (let L = 0; L < 16 && (j = te.multVec(se, j), k = Math.sqrt(te.dot(j, j)), j = te.sml(1 / k, j), !(L != 0 && Math.abs(k - ce) < 1e-9)); L++) ce = k; const Q = [H * B, W * B, ee * B, re * B]; return { Cov: C, q: Q, e: j, L: ce, eMq255: te.dot(te.sml(255, Q), j), eMq: te.dot(j, Q), rgba: (Math.round(255 * Q[3]) << 24 | Math.round(255 * Q[2]) << 16 | Math.round(255 * Q[1]) << 8 | Math.round(255 * Q[0]) << 0) >>> 0 } } var V = { multVec: (N, _) => [N[0] * _[0] + N[1] * _[1] + N[2] * _[2] + N[3] * _[3], N[4] * _[0] + N[5] * _[1] + N[6] * _[2] + N[7] * _[3], N[8] * _[0] + N[9] * _[1] + N[10] * _[2] + N[11] * _[3], N[12] * _[0] + N[13] * _[1] + N[14] * _[2] + N[15] * _[3]], dot: (N, _) => N[0] * _[0] + N[1] * _[1] + N[2] * _[2] + N[3] * _[3], sml: (N, _) => [N * _[0], N * _[1], N * _[2], N * _[3]] };
    Oa.encode = function(_, U, q, H, W, ee, re) { H == null && (H = 0), re == null && (re = !1); const B = m(_, U, q, H, [!1, !1, !1, 0, re, !1]); return x(B, -1), p(B, U, q, W, ee) }, Oa.encodeLL = function(_, U, q, H, W, ee, re, B) { const C = { ctype: 0 + (H == 1 ? 0 : 2) + (W == 0 ? 0 : 4), depth: ee, frames: [] },
            se = (H + W) * ee,
            te = se * U; for (let j = 0; j < _.length; j++) C.frames.push({ rect: { x: 0, y: 0, width: U, height: q }, img: new Uint8Array(_[j]), blend: 0, dispose: 1, bpp: Math.ceil(se / 8), bpl: Math.ceil(te / 8) }); return x(C, 0, !0), p(C, U, q, re, B) }, Oa.encode.compress = m, Oa.encode.dither = f, Oa.quantize = E, Oa.quantize.getKDtree = w, Oa.quantize.getNearest = S })();
const vv = { toArrayBuffer(e, t) { const r = e.width,
            i = e.height,
            l = r << 2,
            o = e.getContext("2d").getImageData(0, 0, r, i),
            c = new Uint32Array(o.data.buffer),
            f = (32 * r + 31) / 32 << 2,
            p = f * i,
            x = 122 + p,
            m = new ArrayBuffer(x),
            g = new DataView(m),
            v = 1 << 20; let b, A, E, w, S = v,
            O = 0,
            D = 0,
            F = 0;

        function K(N) { g.setUint16(D, N, !0), D += 2 }

        function I(N) { g.setUint32(D, N, !0), D += 4 }

        function V(N) { D += N }
        K(19778), I(x), V(4), I(122), I(108), I(r), I(-i >>> 0), K(1), K(32), I(3), I(p), I(2835), I(2835), V(8), I(16711680), I(65280), I(255), I(4278190080), I(1466527264),
            function N() { for (; O < i && S > 0;) { for (w = 122 + O * f, b = 0; b < l;) S--, A = c[F++], E = A >>> 24, g.setUint32(w + b, A << 8 | E), b += 4;
                    O++ }
                F < c.length ? (S = v, setTimeout(N, vv._dly)) : t(m) }() }, toBlob(e, t) { this.toArrayBuffer(e, r => { t(new Blob([r], { type: "image/bmp" })) }) }, _dly: 9 };
var Lr = { CHROME: "CHROME", FIREFOX: "FIREFOX", DESKTOP_SAFARI: "DESKTOP_SAFARI", IE: "IE", IOS: "IOS", ETC: "ETC" },
    WN = {
        [Lr.CHROME]: 16384, [Lr.FIREFOX]: 11180, [Lr.DESKTOP_SAFARI]: 16384, [Lr.IE]: 8192, [Lr.IOS]: 4096, [Lr.ETC]: 8192 };
const Zd = typeof window < "u",
    yv = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
    uu = Zd && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"),
    KN = (Zd || yv) && (uu && uu.getOriginalSymbol(window, "File") || typeof File < "u" && File),
    bv = (Zd || yv) && (uu && uu.getOriginalSymbol(window, "FileReader") || typeof FileReader < "u" && FileReader);

function $d(e, t, r = Date.now()) { return new Promise(i => { const l = e.split(","),
            o = l[0].match(/:(.*?);/)[1],
            c = globalThis.atob(l[1]); let f = c.length; const p = new Uint8Array(f); for (; f--;) p[f] = c.charCodeAt(f); const x = new Blob([p], { type: o });
        x.name = t, x.lastModified = r, i(x) }) }

function Av(e) { return new Promise((t, r) => { const i = new bv;
        i.onload = () => t(i.result), i.onerror = l => r(l), i.readAsDataURL(e) }) }

function Ev(e) { return new Promise((t, r) => { const i = new Image;
        i.onload = () => t(i), i.onerror = l => r(l), i.src = e }) }

function Fi() { if (Fi.cachedResult !== void 0) return Fi.cachedResult; let e = Lr.ETC; const { userAgent: t } = navigator; return /Chrom(e|ium)/i.test(t) ? e = Lr.CHROME : /iP(ad|od|hone)/i.test(t) && /WebKit/i.test(t) ? e = Lr.IOS : /Safari/i.test(t) ? e = Lr.DESKTOP_SAFARI : /Firefox/i.test(t) ? e = Lr.FIREFOX : (/MSIE/i.test(t) || document.documentMode) && (e = Lr.IE), Fi.cachedResult = e, Fi.cachedResult }

function wv(e, t) { const r = Fi(),
        i = WN[r]; let l = e,
        o = t,
        c = l * o; const f = l > o ? o / l : l / o; for (; c > i * i;) { const p = (i + l) / 2,
            x = (i + o) / 2;
        p < x ? (o = x, l = x * f) : (o = p * f, l = p), c = l * o } return { width: l, height: o } }

function Du(e, t) { let r, i; try { if (r = new OffscreenCanvas(e, t), i = r.getContext("2d"), i === null) throw new Error("getContext of OffscreenCanvas returns null") } catch { r = document.createElement("canvas"), i = r.getContext("2d") } return r.width = e, r.height = t, [r, i] }

function _v(e, t) { const { width: r, height: i } = wv(e.width, e.height), [l, o] = Du(r, i); return t && /jpe?g/.test(t) && (o.fillStyle = "white", o.fillRect(0, 0, l.width, l.height)), o.drawImage(e, 0, 0, l.width, l.height), l }

function Hc() { return Hc.cachedResult !== void 0 || (Hc.cachedResult = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && typeof document < "u" && "ontouchend" in document), Hc.cachedResult }

function fu(e, t = {}) { return new Promise(function(r, i) { let l, o; var c = function() { try { return o = _v(l, t.fileType || e.type), r([l, o]) } catch (p) { return i(p) } },
            f = function(p) { try { var x = function(m) { try { throw m } catch (g) { return i(g) } }; try { let m; return Av(e).then(function(g) { try { return m = g, Ev(m).then(function(v) { try { return l = v,
                                            function() { try { return c() } catch (b) { return i(b) } }() } catch (b) { return x(b) } }, x) } catch (v) { return x(v) } }, x) } catch (m) { x(m) } } catch (m) { return i(m) } }; try { if (Hc() || [Lr.DESKTOP_SAFARI, Lr.MOBILE_SAFARI].includes(Fi())) throw new Error("Skip createImageBitmap on IOS and Safari"); return createImageBitmap(e).then(function(p) { try { return l = p, c() } catch { return f() } }, f) } catch { f() } }) }

function du(e, t, r, i, l = 1) { return new Promise(function(o, c) { let f; if (t === "image/png") { let g, v, b; return g = e.getContext("2d"), { data: v } = g.getImageData(0, 0, e.width, e.height), b = Oa.encode([v.buffer], e.width, e.height, 4096 * l), f = new Blob([b], { type: t }), f.name = r, f.lastModified = i, p.call(this) } { let g = function() { return p.call(this) }; var x = g; if (t === "image/bmp") return new Promise(v => vv.toBlob(e, v)).then((function(v) { try { return f = v, f.name = r, f.lastModified = i, g.call(this) } catch (b) { return c(b) } }).bind(this), c); { let v = function() { return g.call(this) }; var m = v; if (typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas) return e.convertToBlob({ type: t, quality: l }).then((function(b) { try { return f = b, f.name = r, f.lastModified = i, v.call(this) } catch (A) { return c(A) } }).bind(this), c); { let b; return b = e.toDataURL(t, l), $d(b, r, i).then((function(A) { try { return f = A, v.call(this) } catch (E) { return c(E) } }).bind(this), c) } } }

        function p() { return o(f) } }) }

function Xa(e) { e.width = 0, e.height = 0 }

function Dl() { return new Promise(function(e, t) { let r, i, l, o; return Dl.cachedResult !== void 0 ? e(Dl.cachedResult) : $d("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then(function(c) { try { return r = c, fu(r).then(function(f) { try { return i = f[1], du(i, r.type, r.name, r.lastModified).then(function(p) { try { return l = p, Xa(i), fu(l).then(function(x) { try { return o = x[0], Dl.cachedResult = o.width === 1 && o.height === 2, e(Dl.cachedResult) } catch (m) { return t(m) } }, t) } catch (x) { return t(x) } }, t) } catch (p) { return t(p) } }, t) } catch (f) { return t(f) } }, t) }) }

function Tv(e) { return new Promise((t, r) => { const i = new bv;
        i.onload = l => { const o = new DataView(l.target.result); if (o.getUint16(0, !1) != 65496) return t(-2); const c = o.byteLength; let f = 2; for (; f < c;) { if (o.getUint16(f + 2, !1) <= 8) return t(-1); const p = o.getUint16(f, !1); if (f += 2, p == 65505) { if (o.getUint32(f += 2, !1) != 1165519206) return t(-1); const x = o.getUint16(f += 6, !1) == 18761;
                    f += o.getUint32(f + 4, x); const m = o.getUint16(f, x);
                    f += 2; for (let g = 0; g < m; g++)
                        if (o.getUint16(f + 12 * g, x) == 274) return t(o.getUint16(f + 12 * g + 8, x)) } else { if ((65280 & p) != 65280) break;
                    f += o.getUint16(f, !1) } } return t(-1) }, i.onerror = l => r(l), i.readAsArrayBuffer(e) }) }

function Sv(e, t) { const { width: r } = e, { height: i } = e, { maxWidthOrHeight: l } = t; let o, c = e; return isFinite(l) && (r > l || i > l) && ([c, o] = Du(r, i), r > i ? (c.width = l, c.height = i / r * l) : (c.width = r / i * l, c.height = l), o.drawImage(e, 0, 0, c.width, c.height), Xa(e)), c }

function Nv(e, t) { const { width: r } = e, { height: i } = e, [l, o] = Du(r, i); switch (t > 4 && t < 9 ? (l.width = i, l.height = r) : (l.width = r, l.height = i), t) {
        case 2:
            o.transform(-1, 0, 0, 1, r, 0); break;
        case 3:
            o.transform(-1, 0, 0, -1, r, i); break;
        case 4:
            o.transform(1, 0, 0, -1, 0, i); break;
        case 5:
            o.transform(0, 1, 1, 0, 0, 0); break;
        case 6:
            o.transform(0, 1, -1, 0, i, 0); break;
        case 7:
            o.transform(0, -1, -1, 0, i, r); break;
        case 8:
            o.transform(0, -1, 1, 0, 0, r) } return o.drawImage(e, 0, 0, r, i), Xa(e), l }

function Gp(e, t, r = 0) { return new Promise(function(i, l) { let o, c, f, p, x, m, g, v, b, A, E, w, S, O, D, F, K, I, V, N;

        function _(q = 5) { if (t.signal && t.signal.aborted) throw t.signal.reason;
            o += q, t.onProgress(Math.min(o, 100)) }

        function U(q) { if (t.signal && t.signal.aborted) throw t.signal.reason;
            o = Math.min(Math.max(q, o), 100), t.onProgress(o) } return o = r, c = t.maxIteration || 10, f = 1024 * t.maxSizeMB * 1024, _(), fu(e, t).then((function(q) { try { return [, p] = q, _(), x = Sv(p, t), _(), new Promise(function(H, W) { var ee; if (!(ee = t.exifOrientation)) return Tv(e).then((function(B) { try { return ee = B, re.call(this) } catch (C) { return W(C) } }).bind(this), W);

                    function re() { return H(ee) } return re.call(this) }).then((function(H) { try { return m = H, _(), Dl().then((function(W) { try { return g = W ? x : Nv(x, m), _(), v = t.initialQuality || 1, b = t.fileType || e.type, du(g, b, e.name, e.lastModified, v).then((function(ee) { try {
                                        { let se = function() { if (c-- && (D > f || D > S)) { let j, ce; return j = N ? .95 * V.width : V.width, ce = N ? .95 * V.height : V.height, [K, I] = Du(j, ce), I.drawImage(V, 0, 0, j, ce), v *= b === "image/png" ? .85 : .95, du(K, b, e.name, e.lastModified, v).then(function(k) { try { return F = k, Xa(V), V = K, D = F.size, U(Math.min(99, Math.floor((O - D) / (O - f) * 100))), se } catch (Q) { return l(Q) } }, l) } return [1] },
                                                te = function() { return Xa(V), Xa(K), Xa(x), Xa(g), Xa(p), U(100), i(F) }; var B = se,
                                                C = te; if (A = ee, _(), E = A.size > f, w = A.size > e.size, !E && !w) return U(100), i(A); var re; return S = e.size, O = A.size, D = O, V = g, N = !t.alwaysKeepResolution && E, (re = (function(j) { for (; j;) { if (j.then) return void j.then(re, l); try { if (j.pop) { if (j.length) return j.pop() ? te.call(this) : j;
                                                            j = se } else j = j.call(this) } catch (ce) { return l(ce) } } }).bind(this))(se) } } catch (se) { return l(se) } }).bind(this), l) } catch (ee) { return l(ee) } }).bind(this), l) } catch (W) { return l(W) } }).bind(this), l) } catch (H) { return l(H) } }).bind(this), l) }) }
const QN = `
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;
let Jf;

function ZN(e, t) { return new Promise((r, i) => { Jf || (Jf = function(c) { const f = []; return f.push(c), URL.createObjectURL(new Blob(f)) }(QN)); const l = new Worker(Jf);
        l.addEventListener("message", function(c) { if (t.signal && t.signal.aborted) l.terminate();
            else if (c.data.progress === void 0) { if (c.data.error) return i(new Error(c.data.error)), void l.terminate();
                r(c.data.file), l.terminate() } else t.onProgress(c.data.progress) }), l.addEventListener("error", i), t.signal && t.signal.addEventListener("abort", () => { i(t.signal.reason), l.terminate() }), l.postMessage({ file: e, imageCompressionLibUrl: t.libURL, options: {...t, onProgress: void 0, signal: void 0 } }) }) }

function Ar(e, t) { return new Promise(function(r, i) { let l, o, c, f, p, x; if (l = {...t }, c = 0, { onProgress: f } = l, l.maxSizeMB = l.maxSizeMB || Number.POSITIVE_INFINITY, p = typeof l.useWebWorker != "boolean" || l.useWebWorker, delete l.useWebWorker, l.onProgress = b => { c = b, typeof f == "function" && f(c) }, !(e instanceof Blob || e instanceof KN)) return i(new Error("The file given is not an instance of Blob or File")); if (!/^image/.test(e.type)) return i(new Error("The file given is not an image")); if (x = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope, !p || typeof Worker != "function" || x) return Gp(e, l).then((function(b) { try { return o = b, v.call(this) } catch (A) { return i(A) } }).bind(this), i); var m = (function() { try { return v.call(this) } catch (b) { return i(b) } }).bind(this),
            g = function(b) { try { return Gp(e, l).then(function(A) { try { return o = A, m() } catch (E) { return i(E) } }, i) } catch (A) { return i(A) } }; try { return l.libURL = l.libURL || "https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js", ZN(e, l).then(function(b) { try { return o = b, m() } catch { return g() } }, g) } catch { g() }

        function v() { try { o.name = e.name, o.lastModified = e.lastModified } catch {} try { l.preserveExif && e.type === "image/jpeg" && (!l.fileType || l.fileType && l.fileType === e.type) && (o = gv(e, o)) } catch {} return r(o) } }) }
Ar.getDataUrlFromFile = Av, Ar.getFilefromDataUrl = $d, Ar.loadImage = Ev, Ar.drawImageInCanvas = _v, Ar.drawFileInCanvas = fu, Ar.canvasToFile = du, Ar.getExifOrientation = Tv, Ar.handleMaxWidthOrHeight = Sv, Ar.followExifOrientation = Nv, Ar.cleanupCanvasMemory = Xa, Ar.isAutoOrientationInBrowser = Dl, Ar.approximateBelowMaximumCanvasSizeOfBrowser = wv, Ar.copyExifWithoutOrientation = gv, Ar.getBrowserName = Fi, Ar.version = "2.0.2";
const $N = () => { const { token: e } = Aa();
        aa(); const t = ra(),
            [r, i] = ne.useState(!0),
            l = t.pathname === "/login",
            [o, c] = ne.useState(null),
            [f, p] = ne.useState(!1),
            [x, m] = ne.useState(!1),
            [g, v] = ne.useState(""),
            [b, A] = ne.useState(!1),
            [E, w] = ne.useState(!1),
            S = N => { const _ = N.target.files[0];
                _ && (c(_), v(""), w(!1)) },
            O = N => { N.preventDefault(), N.stopPropagation(), A(N.type === "dragenter" || N.type === "dragover") },
            D = N => { N.preventDefault(), N.stopPropagation(), A(!1), N.dataTransfer.files && N.dataTransfer.files[0] && (c(N.dataTransfer.files[0]), v(""), w(!1)) },
            F = N => { var ee, re, B, C; const _ = N.split(`
`).map(se => se.trim()).filter(Boolean); let U = null,
                    q = null,
                    H = null,
                    W = null; for (let se = 0; se < _.length; se++) { const te = _[se]; if (!U && /N[uú]mero de transacci[oó]n/i.test(te)) { const j = te.match(/transacci[oó]n[:\s]*([0-9]+)/i),
                            ce = (ee = _[se + 1]) == null ? void 0 : ee.match(/^\d+$/);
                        U = (j == null ? void 0 : j[1]) || (ce == null ? void 0 : ce[0]) || null } if (!q && /ID\s+DE\s+INSCRIPC[IÍ][OÓ]N/i.test(te)) { const j = te.match(/ID\s+DE\s+INSCRIPC[IÍ]ON[\s:]*([\d]+)/i),
                            ce = (re = _[se + 1]) == null ? void 0 : re.match(/^\d+$/);
                        q = (j == null ? void 0 : j[1]) || (ce == null ? void 0 : ce[0]) || null } if (!H && /^TUTOR$/i.test(te)) { const j = (B = _[se + 1]) == null ? void 0 : B.trim();
                        j && (H = j) } if (!W)
                        if (/MONTO\s+PAGADO/i.test(te)) { const j = (C = _[se + 1]) == null ? void 0 : C.trim();
                            j != null && j.match(/^[\d.,]+$/) && (W = j.replace(",", ".").trim()) } else { const j = te.match(/Bs\.?\s*([\d,.]+)/i);
                            j && (W = j[1].replace(",", ".").trim()) } } return { numero: U, inscripcion_id: q, tutor: H, monto: W } },
            K = async() => { if (!o) return;
                p(!0), m(!1); const N = new FormData; let _ = ""; try { if (o.type === "application/pdf") N.append("file", o, "comprobante.pdf"), _ = "pdf";
                    else if (o.type.startsWith("image/")) { const ee = await Ar(o, { maxSizeMB: 1, maxWidthOrHeight: 1e3, useWebWorker: !0 });
                        N.append("file", ee, "comprobante.png"), _ = "png" } else throw new Error("Tipo de archivo no soportado.");
                    N.append("language", "spa"), N.append("isOverlayRequired", "false"), N.append("filetype", _); const q = await (await fetch("https://api.ocr.space/parse/image", { method: "POST", headers: { apikey: "K83603773288957" }, body: N })).json(); if (q.IsErroredOnProcessing || !q.ParsedResults) throw new Error(q.ErrorMessage || "Error en el OCR."); const H = q.ParsedResults[0].ParsedText;
                    v(H); const W = F(H);
                    await I(W) } catch (U) { console.error("Error en OCR:", U) } finally { p(!1) } },
            I = async N => { console.log(N), m(!0); try { await Ve.post("http://dis.tis.cs.umss.edu.bo/api/tutor/confirmar-comprobante", N, { headers: { Authorization: `Bearer ${e}` } }) } catch (_) { console.error("Error al enviar al backend:", _) } finally { m(!1) } },
            V = N => { const U = Math.floor(Math.log(N) / Math.log(1024)); return `${(N/Math.pow(1024,U)).toFixed(2)} ${["Bytes","KB","MB"][U]}` }; return d.jsxs("div", { className: "min-h-screen", style: { background: "linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)" }, children: [!l && d.jsx(Ea, { isOpen: r, onToggle: () => i(!r) }), d.jsxs("div", { className: "ml-64 p-6 lg:p-8 max-w-5xl mx-auto space-y-8 transition-all duration-300", children: [d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border overflow-hidden", style: { borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex items-center space-x-4 mb-2", children: [d.jsx("div", { className: "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(ud, { className: "w-7 h-7 text-white" }) }), d.jsxs("div", { children: [d.jsx("h1", { className: "text-3xl lg:text-4xl font-bold mb-1", style: { background: "linear-gradient(135deg, #5A4A3A, #8B7355)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Comprobante de Pago" }), d.jsx("p", { className: "text-base", style: { color: "#8B7355" }, children: "Sube tu comprobante para validación automática con IA" })] })] }) }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all duration-300", style: { borderColor: "#E8DDD4" }, children: [d.jsxs("div", { className: "p-6 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: [d.jsxs("h2", { className: "text-xl font-bold flex items-center space-x-3", style: { color: "#5A4A3A" }, children: [d.jsx("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx($A, { className: "w-4 h-4 text-white" }) }), d.jsx("span", { children: "Subir Comprobante" })] }), d.jsxs("div", { className: "mt-3 flex items-center space-x-2", children: [d.jsx("span", { className: "px-3 py-1 rounded-full text-sm border", style: { backgroundColor: "rgba(200, 183, 166, 0.2)", color: "#5A4A3A", borderColor: "rgba(200, 183, 166, 0.3)" }, children: "JPG" }), d.jsx("span", { className: "px-3 py-1 rounded-full text-sm border", style: { backgroundColor: "rgba(184, 164, 148, 0.2)", color: "#5A4A3A", borderColor: "rgba(184, 164, 148, 0.3)" }, children: "PNG" }), d.jsx("span", { className: "px-3 py-1 rounded-full text-sm border", style: { backgroundColor: "rgba(139, 115, 85, 0.2)", color: "#5A4A3A", borderColor: "rgba(139, 115, 85, 0.3)" }, children: "PDF" }), d.jsx("span", { className: "text-sm ml-2", style: { color: "#8B7355" }, children: "máx. 5MB" })] })] }), d.jsxs("div", { className: "p-8", children: [d.jsx("div", { className: `border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 hover:scale-[1.01] ${b?"shadow-inner":""}`, style: { borderColor: b ? "#C8B7A6" : "#E8DDD4", backgroundColor: b ? "rgba(250, 247, 242, 0.5)" : "transparent" }, onDragEnter: O, onDragLeave: O, onDragOver: O, onDrop: D, children: o ? d.jsxs("div", { className: "space-y-6", children: [d.jsx("div", { className: "w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white shadow-lg", style: { background: "linear-gradient(135deg, #10b981, #059669)" }, children: d.jsx("svg", { className: "w-10 h-10", fill: "currentColor", viewBox: "0 0 24 24", children: d.jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) }) }), d.jsxs("div", { children: [d.jsx("h3", { className: "font-bold text-xl mb-2", style: { color: "#5A4A3A" }, children: o.name }), d.jsx("p", { className: "mb-4", style: { color: "#8B7355" }, children: V(o.size) }), d.jsx("button", { onClick: () => c(null), className: "font-medium hover:underline transition-colors duration-300", style: { color: "#dc2626" }, children: "Eliminar archivo" })] })] }) : d.jsxs("div", { className: "space-y-6", children: [d.jsx("div", { className: "w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-lg", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(ud, { className: "w-10 h-10 text-white" }) }), d.jsxs("div", { children: [d.jsx("h3", { className: "font-bold text-xl mb-2", style: { color: "#5A4A3A" }, children: "Arrastra tu archivo aquí" }), d.jsx("p", { className: "mb-6", style: { color: "#8B7355" }, children: "o haz clic para seleccionar desde tu dispositivo" })] }), d.jsxs("label", { className: "inline-flex items-center px-8 py-4 text-white rounded-xl cursor-pointer font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: [d.jsx(Di, { className: "w-5 h-5 mr-3" }), "Seleccionar archivo", d.jsx("input", { type: "file", accept: "image/*,.pdf", onChange: S, className: "hidden" })] })] }) }), o && d.jsx("button", { onClick: K, disabled: f || x, className: "w-full mt-8 text-white py-4 px-8 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: f ? d.jsxs("div", { className: "flex items-center justify-center space-x-3", children: [d.jsx(HA, { className: "w-6 h-6 animate-spin" }), d.jsx("span", { children: "Analizando comprobante..." })] }) : d.jsxs("div", { className: "flex items-center justify-center space-x-3", children: [d.jsx(XA, { className: "w-6 h-6" }), d.jsx("span", { children: "Procesar Comprobante con IA" })] }) })] })] }), g && d.jsxs("div", { className: "bg-white/90 backdrop-blur-md border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300", style: { borderColor: "#E8DDD4" }, children: [d.jsxs("div", { className: "p-6 border-b flex justify-between items-center", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: [d.jsxs("h3", { className: "font-bold text-xl flex items-center space-x-3", style: { color: "#5A4A3A" }, children: [d.jsx("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(Hs, { className: "w-4 h-4 text-white" }) }), d.jsx("span", { children: "Texto Detectado por IA" })] }), d.jsx("button", { onClick: () => w(!E), className: "px-6 py-2 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-white", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: E ? d.jsxs("span", { className: "flex items-center space-x-2", children: [d.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: d.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464" }) }), d.jsx("span", { children: "Ocultar" })] }) : d.jsxs("span", { className: "flex items-center space-x-2", children: [d.jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [d.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }), d.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })] }), d.jsx("span", { children: "Mostrar" })] }) })] }), E && d.jsx("div", { className: "p-8", children: d.jsx("div", { className: "rounded-xl p-6 shadow-inner border", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4" }, children: d.jsx("pre", { className: "text-sm whitespace-pre-wrap font-mono leading-relaxed", style: { color: "#5A4A3A" }, children: g }) }) })] })] })] }) },
    JN = () => { const { token: e } = Aa(), [t, r] = ne.useState([]), [i, l] = ne.useState(!0), o = aa(), [c, f] = ne.useState(!0), p = location.pathname === "/login"; return ne.useEffect(() => { Ve.get("http://dis.tis.cs.umss.edu.bo/api/tutor/inscripciones", { headers: { Authorization: `Bearer ${e}` } }).then(x => { const m = x.data.data.filter(g => g.habilitado === 1);
                r(m) }).catch(x => console.error(x)).finally(() => l(!1)) }, [e]), d.jsxs("div", { className: "flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]", children: [!p && d.jsx(Ea, { isOpen: c, onToggle: () => f(!c) }), d.jsxs("div", { className: "ml-64 p-8 w-full transition-all duration-300", children: [d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-[#E8DDD4]/50", children: [d.jsx("h1", { className: "text-3xl font-bold text-[#5A4A3A] mb-2", children: "Pagos de Estudiantes" }), d.jsx("p", { className: "text-[#8B7355]", children: "Gestiona y visualiza los pagos registrados" })] }), i ? d.jsxs("div", { className: "flex flex-col items-center justify-center mt-20", children: [d.jsx("div", { className: "relative", children: d.jsx("div", { className: "w-16 h-16 border-4 border-[#E8DDD4] border-t-[#C8B7A6] rounded-full animate-spin" }) }), d.jsx("p", { className: "text-[#8B7355] mt-4 text-lg", children: "Cargando pagos..." })] }) : d.jsx("div", { className: "grid gap-6", children: t.map(x => d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-[#E8DDD4]/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group", children: d.jsxs("div", { className: "flex justify-between items-start", children: [d.jsxs("div", { className: "flex-1", children: [d.jsxs("div", { className: "mb-4", children: [d.jsxs("h3", { className: "text-xl font-bold text-[#5A4A3A] mb-1", children: [x.estudiante.nombres, " ", x.estudiante.apellidos] }), d.jsx("div", { className: "flex items-center gap-2 text-[#8B7355]", children: d.jsxs("span", { className: "bg-[#FAF7F2] px-3 py-1 rounded-lg text-sm font-medium border border-[#E8DDD4]", children: ["CI: ", x.estudiante.ci] }) })] }), d.jsxs("div", { className: "space-y-2", children: [d.jsxs("div", { className: "bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] rounded-lg p-4 border border-[#E8DDD4]/30", children: [d.jsx("p", { className: "font-semibold text-[#5A4A3A] mb-2", children: x.competencia.nombre }), d.jsxs("div", { className: "flex flex-wrap gap-2 text-sm", children: [d.jsx("span", { className: "bg-[#C8B7A6]/20 text-[#5A4A3A] px-3 py-1 rounded-full border border-[#C8B7A6]/30", children: x.competencia.area_categoria.area.nombre }), d.jsx("span", { className: "bg-[#B8A494]/20 text-[#5A4A3A] px-3 py-1 rounded-full border border-[#B8A494]/30", children: x.competencia.area_categoria.categoria.nombre }), d.jsxs("span", { className: "bg-[#8B7355]/20 text-[#5A4A3A] px-3 py-1 rounded-full border border-[#8B7355]/30", children: ["Grado: ", x.competencia.area_categoria.grado] })] })] }), d.jsx("div", { className: "flex items-center justify-between", children: d.jsx("div", { className: "bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white px-6 py-3 rounded-xl shadow-md", children: d.jsxs("span", { className: "text-lg font-bold", children: ["Bs. ", x.competencia.monto] }) }) })] })] }), d.jsx("div", { className: "ml-6 flex flex-col items-end", children: d.jsx("button", { onClick: () => o(`/boleta/${x.id}`, { state: { pago: x } }), className: "bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:from-[#B8A494] group-hover:to-[#C8B7A6] border border-[#B8A494]/20", children: d.jsxs("span", { className: "flex items-center gap-2", children: ["Ver Boleta", d.jsx("svg", { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: d.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] }) }) })] }) }, x.id)) })] })] }) },
    eC = () => { const e = aa(),
            { state: t } = ra(),
            { token: r } = Aa(),
            i = t == null ? void 0 : t.pago; if (!i) return d.jsx("div", { className: "p-10", children: "No hay datos" }); const l = i.estudiante,
            o = i.competencia,
            c = o.area_categoria.area.nombre,
            f = o.area_categoria.categoria.nombre,
            p = o.area_categoria.grado,
            x = new Date(i.created_at).toLocaleDateString(),
            m = `ORD-${i.id.toString().padStart(4,"0")}`,
            g = async(v, b) => { try { const A = await Ve.get(`http://dis.tis.cs.umss.edu.bo/api/tutor/boleta/${v}/pdf`, { responseType: "blob", headers: { Authorization: `Bearer ${r}` } }),
                        E = window.URL.createObjectURL(new Blob([A.data])),
                        w = document.createElement("a");
                    w.href = E, w.setAttribute("download", `boleta_de_pago_${b}.pdf`), document.body.appendChild(w), w.click(), w.remove() } catch (A) { console.error("Error al descargar PDF:", A) } }; return d.jsxs("div", { className: "flex min-h-screen bg-[#F2EEE3]", children: [d.jsx(Ea, {}), d.jsxs("div", { className: "ml-64 flex-grow p-8", children: [d.jsx("div", { className: "flex justify-between items-center mb-8", children: d.jsx("h1", { className: "text-2xl font-bold", children: "Boleta de Pago" }) }), d.jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 max-w-2xl mx-auto", children: [d.jsxs("div", { className: "text-center mb-6", children: [d.jsx(Di, { size: 48, className: "mx-auto mb-2 text-[#A9B2AC]" }), d.jsx("h2", { className: "text-xl font-semibold", children: "Boleta de Pago Generada" })] }), d.jsx("div", { className: "border border-[#D9D9D9] rounded-md p-6 mb-6", children: d.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [d.jsxs("div", { children: [d.jsx("p", { className: "text-sm text-gray-500", children: "Nombre del estudiante:" }), d.jsxs("p", { className: "font-medium", children: [l.nombres, " ", l.apellidos] })] }), d.jsxs("div", { children: [d.jsx("p", { className: "text-sm text-gray-500", children: "Cédula de Identidad:" }), d.jsx("p", { className: "font-medium", children: l.ci })] }), d.jsxs("div", { className: "col-span-2", children: [d.jsx("p", { className: "text-sm text-gray-500", children: "Área inscrita:" }), d.jsxs("p", { className: "font-medium", children: [c, " - ", f, " (", p, ")"] })] }), d.jsxs("div", { children: [d.jsx("p", { className: "text-sm text-gray-500", children: "Monto total a pagar:" }), d.jsxs("p", { className: "font-medium text-lg", children: ["Bs. ", o.monto] })] }), d.jsxs("div", { children: [d.jsx("p", { className: "text-sm text-gray-500", children: "Código de orden de pago:" }), d.jsx("p", { className: "font-medium text-lg", children: m })] }), d.jsxs("div", { className: "col-span-2", children: [d.jsx("p", { className: "text-sm text-gray-500", children: "Fecha límite de pago:" }), d.jsx("p", { className: "font-medium", children: x })] })] }) }), d.jsxs("div", { className: "flex justify-between", children: [d.jsx("button", { onClick: () => e("/payment-slip"), className: "border border-[#D9D9D9] text-[#4F4F4F] py-2 px-6 rounded-md hover:bg-[#F2EEE3] transition-colors", children: "Volver" }), d.jsx("div", { className: "space-x-4", children: d.jsxs("button", { onClick: () => g(i.id, m), className: "bg-[#C8B7A6] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center", children: [d.jsx(co, { size: 18, className: "mr-2" }), "Descargar PDF"] }) })] })] })] })] }) },
    tC = () => { const [e, t] = ne.useState(!0), [r, i] = ne.useState([]), [l, o] = ne.useState([]), [c, f] = ne.useState([]), [p, x] = ne.useState(""), [m, g] = ne.useState(""), [v, b] = ne.useState(!0), { token: A } = Aa(), E = aa();
        ne.useEffect(() => {
            (async() => { try { const D = { Authorization: `Bearer ${A}` },
                        [F, K, I] = await Promise.all([Ve.get("http://dis.tis.cs.umss.edu.bo/api/tutor/competencias", { headers: D }), Ve.get("http://dis.tis.cs.umss.edu.bo/api/tutor/areas", { headers: D }), Ve.get("http://dis.tis.cs.umss.edu.bo/api/categorias", { headers: D })]);
                    i(F.data), o(K.data), f(I.data) } catch (D) { console.error("Error al cargar datos:", D) } finally { b(!1) } })() }, [A]); const w = () => r.filter(O => { const D = O.area_categoria.area.nombre.toLowerCase(),
                    F = O.area_categoria.categoria.nombre.toLowerCase(); return (!p || D === p.toLowerCase()) && (!m || F === m.toLowerCase()) }),
            S = O => { E(`/registration/${O}`) }; return d.jsxs("div", { className: "min-h-screen", style: { background: "linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)" }, children: [d.jsx(Ea, { isOpen: e, onToggle: () => t(!e) }), d.jsxs("div", { className: `transition-all duration-300 ${e?"ml-64":"ml-20"} p-6 sm:p-8`, children: [d.jsx("div", { className: "mb-8", children: d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-6 sm:p-8", style: { borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0", children: [d.jsxs("div", { children: [d.jsx("h1", { className: "text-2xl sm:text-3xl font-bold mb-2", style: { background: "linear-gradient(135deg, #5A4A3A, #8B7355)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Competencias Disponibles" }), d.jsx("p", { className: "text-sm sm:text-base", style: { color: "#8B7355" }, children: "Explora y regístrate en las competencias académicas" })] }), d.jsx("div", { className: "flex items-center space-x-3", children: d.jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg border-2", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(Oi, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" }) }) })] }) }) }), d.jsx("div", { className: "mb-8", children: d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border", style: { borderColor: "#E8DDD4" }, children: [d.jsx("div", { className: "p-6 sm:p-8 pb-4 sm:pb-6 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(O2, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white" }) }), d.jsxs("div", { children: [d.jsx("h2", { className: "text-lg sm:text-xl font-bold", style: { color: "#5A4A3A" }, children: "Filtros de Búsqueda" }), d.jsx("p", { className: "text-xs sm:text-sm", style: { color: "#8B7355" }, children: "Encuentra las competencias que te interesan" })] })] }) }), d.jsx("div", { className: "p-6 sm:p-8", children: d.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6", children: [d.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [d.jsx("label", { className: "block text-xs sm:text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Área de Competencia" }), d.jsxs("div", { className: "relative", children: [d.jsx(Xc, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsxs("select", { onChange: O => x(O.target.value), value: p, className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base appearance-none", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A" }, children: [d.jsx("option", { value: "", children: "Todas las Áreas" }), l.map(O => d.jsx("option", { value: O.nombre, children: O.nombre }, O.id))] }), d.jsx($x, { className: "absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none", style: { color: "#8B7355" } })] })] }), d.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [d.jsx("label", { className: "block text-xs sm:text-sm font-semibold", style: { color: "#5A4A3A" }, children: "Categoría" }), d.jsxs("div", { className: "relative", children: [d.jsx(QA, { className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5", style: { color: "#8B7355" } }), d.jsxs("select", { onChange: O => g(O.target.value), value: m, className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base appearance-none", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A" }, children: [d.jsx("option", { value: "", children: "Todas las Categorías" }), c.map(O => d.jsx("option", { value: O.nombre, children: O.nombre }, O.id))] }), d.jsx($x, { className: "absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none", style: { color: "#8B7355" } })] })] }), d.jsx("div", { className: "flex items-end", children: d.jsx("div", { className: "w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex items-center space-x-2", children: [d.jsx(Yc, { className: "w-4 h-4 sm:w-5 sm:h-5", style: { color: "#C8B7A6" } }), d.jsxs("div", { children: [d.jsx("p", { className: "text-xs font-medium", style: { color: "#8B7355" }, children: "Resultados" }), d.jsxs("p", { className: "font-bold text-sm sm:text-base", style: { color: "#5A4A3A" }, children: [w().length, " competencia", w().length !== 1 ? "s" : ""] })] })] }) }) })] }) })] }) }), v ? d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-12 text-center", style: { borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [d.jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx("div", { className: "w-8 h-8 border-4 border-white/40 border-t-white rounded-full animate-spin" }) }), d.jsxs("div", { children: [d.jsx("p", { className: "font-semibold text-lg", style: { color: "#5A4A3A" }, children: "Cargando competencias..." }), d.jsx("p", { className: "text-sm", style: { color: "#8B7355" }, children: "Un momento por favor" })] })] }) }) : w().length === 0 ? d.jsx("div", { className: "bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-12 text-center", style: { borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [d.jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center", style: { backgroundColor: "#FAF7F2" }, children: d.jsx(Oi, { className: "w-8 h-8", style: { color: "#C8B7A6" } }) }), d.jsxs("div", { children: [d.jsx("p", { className: "font-semibold text-lg", style: { color: "#5A4A3A" }, children: "No se encontraron competencias" }), d.jsx("p", { className: "text-sm", style: { color: "#8B7355" }, children: "Intenta ajustar los filtros de búsqueda" })] })] }) }) : d.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: w().map(O => d.jsxs("div", { className: "bg-white/90 backdrop-blur-md border rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02]", style: { borderColor: "#E8DDD4" }, children: [d.jsx("div", { className: "p-6 border-b", style: { background: "linear-gradient(135deg, #FAF7F2, #F2EEE3)", borderColor: "#E8DDD4" }, children: d.jsxs("div", { className: "flex items-start justify-between", children: [d.jsxs("div", { className: "flex-1", children: [d.jsx("h2", { className: "text-lg sm:text-xl font-bold mb-2", style: { color: "#5A4A3A" }, children: O.nombre }), d.jsxs("div", { className: "flex flex-wrap gap-2", children: [d.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium", style: { backgroundColor: "#E8DDD4", color: "#5A4A3A" }, children: O.area_categoria.area.nombre }), d.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium", style: { backgroundColor: "#D4C4B4", color: "#5A4A3A" }, children: O.area_categoria.categoria.nombre })] })] }), d.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center ml-4", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: d.jsx(Oi, { className: "w-6 h-6 text-white" }) })] }) }), d.jsxs("div", { className: "p-6 space-y-4", children: [d.jsxs("div", { className: "space-y-3", children: [d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx(Nd, { className: "w-4 h-4 flex-shrink-0", style: { color: "#8B7355" } }), d.jsxs("div", { children: [d.jsx("p", { className: "text-xs font-medium", style: { color: "#8B7355" }, children: "Fecha de competencia" }), d.jsx("p", { className: "font-semibold text-sm", style: { color: "#5A4A3A" }, children: O.fecha_competencia })] })] }), d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx(UA, { className: "w-4 h-4 flex-shrink-0", style: { color: "#8B7355" } }), d.jsxs("div", { children: [d.jsx("p", { className: "text-xs font-medium", style: { color: "#8B7355" }, children: "Inscripción hasta" }), d.jsx("p", { className: "font-semibold text-sm", style: { color: "#5A4A3A" }, children: O.fecha_fin_inscripcion })] })] }), d.jsxs("div", { className: "flex items-center space-x-3", children: [d.jsx(zA, { className: "w-4 h-4 flex-shrink-0", style: { color: "#8B7355" } }), d.jsxs("div", { children: [d.jsx("p", { className: "text-xs font-medium", style: { color: "#8B7355" }, children: "Monto de inscripción" }), d.jsxs("p", { className: "font-bold text-lg", style: { color: "#5A4A3A" }, children: ["Bs. ", O.monto] })] })] })] }), d.jsx("div", { className: "pt-4 border-t", style: { borderColor: "#E8DDD4" }, children: d.jsxs("button", { onClick: () => S(O.id), className: "w-full flex items-center justify-center px-6 py-3 text-white rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)" }, children: [d.jsx(eE, { className: "w-4 h-4 mr-2" }), "Inscribirse Ahora"] }) })] })] }, O.id)) })] })] }) },
    rC = () => { const { id: e } = A3(), { token: t, user: r } = Aa(), i = aa(), [l, o] = ne.useState(!0), [c, f] = ne.useState({ estudiante: { nombres: "", apellidos: "", ci: "", fecha_nacimiento: "", email: "", colegio: "", curso: "", departamento: "", provincia: "" }, contacto_email: (r == null ? void 0 : r.email) || "", contacto_celular: (r == null ? void 0 : r.celular) || "", nombre_tutor: (r == null ? void 0 : r.name) || "" }), [p, x] = ne.useState(null), [m, g] = ne.useState(!1), [v, b] = ne.useState({ tipo: "", mensaje: "" });
        ne.useEffect(() => {
            (async() => { try { const O = (await Ve.get("http://dis.tis.cs.umss.edu.bo/api/tutor/competencias", { headers: { Authorization: `Bearer ${t}` } })).data.find(D => D.id === parseInt(e));
                    x(O || null) } catch (S) { console.error("Error al cargar competencia:", S) } })() }, [e, t]); const A = (w, S, O = !1) => { const { name: D, value: F } = w.target;
                f(O ? K => ({...K, [S]: {...K[S], [D]: F } }) : K => ({...K, [D]: F })) },
            E = async w => { var S, O;
                w.preventDefault(), g(!0), b({ tipo: "", mensaje: "" }), console.log({...c, competencia_id: e, token: t }); try { const D = await Ve.post("http://dis.tis.cs.umss.edu.bo/api/tutor/ordenPago", {...c, competencia_id: e }, { headers: { Authorization: `Bearer ${t}` }, responseType: "blob" }),
                        F = new Blob([D.data], { type: "application/zip" }),
                        K = window.URL.createObjectURL(F),
                        I = document.createElement("a");
                    I.href = K, I.setAttribute("download", "documentos_inscripcion.zip"), document.body.appendChild(I), I.click(), I.remove(), window.URL.revokeObjectURL(K), b({ tipo: "success", mensaje: "Orden de pago generada exitosamente." }), setTimeout(() => i("/payment-slip"), 1800) } catch (D) { console.error("Error al generar orden:", D); const F = ((O = (S = D == null ? void 0 : D.response) == null ? void 0 : S.data) == null ? void 0 : O.message) || "No se pudo generar la orden de pago.";
                    b({ tipo: "error", mensaje: F }) } finally { g(!1) } }; return d.jsxs("div", { className: "min-h-screen", style: { background: "linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)" }, children: [d.jsx(Ea, { isOpen: l, onToggle: () => o(!l) }), d.jsxs("div", { className: `transition-all duration-300 ${l?"ml-64":"ml-20"} p-6 lg:p-8`, children: [d.jsxs("div", { className: "mb-6", children: [d.jsxs("button", { onClick: () => i(-1), className: "flex items-center text-sm mb-4 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md border bg-white/80 backdrop-blur-md hover:bg-white/90", style: { borderColor: "#E8DDD4", color: "#5A4A3A" }, children: [d.jsx(N2, { className: "mr-2", size: 18 }), "Volver"] }), d.jsxs("div", { className: "flex items-center space-x-3 mb-2", children: [d.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border", style: { background: "linear-gradient(135deg, #C8B7A6, #B8A494)", borderColor: "#E8DDD4" }, children: d.jsx(Di, { className: "w-5 h-5 text-white" }) }), d.jsx("h1", { className: "text-2xl lg:text-3xl font-bold", style: { background: "linear-gradient(135deg, #5A4A3A, #8B7355)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Generar Orden de Pago" })] }), d.jsx("p", { className: "text-sm", style: { color: "#8B7355" }, children: "Complete los datos para generar la orden de pago de la competencia" })] }), p && d.jsxs("div", { className: "bg-white border border-[#D9D9D9] rounded-md p-4 mb-6 shadow-sm", children: [d.jsx("h2", { className: "text-lg font-semibold mb-1", children: p.nombre }), d.jsxs("p", { className: "text-sm text-gray-700", children: [d.jsx("strong", { children: "Área:" }), " ", p.area_categoria.area.nombre, "  | ", d.jsx("strong", { children: "Categoría:" }), " ", p.area_categoria.categoria.nombre, "  | ", d.jsx("strong", { children: "Grado:" }), " ", p.area_categoria.grado] })] }), v.mensaje && d.jsxs("div", { className: `flex items-center mb-6 p-4 rounded-xl text-white shadow-lg backdrop-blur-md animate-in slide-in-from-top-2 duration-300
            ${v.tipo==="success"?"bg-green-500/90":"bg-red-500/90"}`, children: [v.tipo === "success" ? d.jsx(kA, { size: 20, className: "mr-3 flex-shrink-0" }) : d.jsx(D2, { size: 20, className: "mr-3 flex-shrink-0" }), d.jsx("span", { className: "font-medium", children: v.mensaje })] }), d.jsx("div", { className: "mt-4 mb-4", children: d.jsxs("button", { type: "button", onClick: () => { const w = document.createElement("a");
                            w.href = "http://dis.tis.cs.umss.edu.bo/assets/planilla.xlsx", w.setAttribute("download", "planilla_ejemplo.xlsx"), document.body.appendChild(w), w.click(), w.remove() }, className: "flex items-center bg-[#8B7355] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow", children: [d.jsx(co, { className: "w-4 h-4 mr-2" }), "Descargar planilla de ejemplo"] }) }), d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden mb-8", style: { borderColor: "#E8DDD4" }, children: [d.jsxs("div", { className: "p-4 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: [d.jsxs("h2", { className: "text-lg font-bold flex items-center space-x-2", style: { color: "#5A4A3A" }, children: [d.jsx(Di, { className: "w-5 h-5", style: { color: "#8B7355" } }), d.jsx("span", { children: "Importar estudiantes desde Excel" })] }), d.jsx("p", { className: "text-sm mt-1", style: { color: "#8B7355" }, children: "Cargue un archivo Excel (.xlsx, .xls, .csv) con varios estudiantes." })] }), d.jsxs("div", { className: "p-6", children: [d.jsx("label", { className: "block text-sm font-semibold mb-2", style: { color: "#5A4A3A" }, children: "Seleccionar archivo" }), d.jsxs("div", { className: "flex items-center space-x-4", children: [d.jsx("label", { htmlFor: "archivoExcel", className: "cursor-pointer bg-[#C8B7A6] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow", children: "Elegir archivo" }), d.jsx("span", { className: "text-sm text-gray-700", id: "archivoSeleccionado", children: "Ningún archivo seleccionado" })] }), d.jsx("input", { id: "archivoExcel", type: "file", accept: ".xlsx,.xls,.csv", style: { display: "none" }, onChange: async w => { var F, K; const S = document.getElementById("archivoSeleccionado"); if (!w.target.files[0]) { S.textContent = "Ningún archivo seleccionado"; return } const O = w.target.files[0];
                                S.textContent = O.name; const D = new FormData;
                                D.append("archivo", O), D.append("competencia_id", e); try { g(!0); const I = await Ve.post("http://dis.tis.cs.umss.edu.bo/api/tutor/importar-inscripciones", D, { headers: { Authorization: `Bearer ${t}`, "Content-Type": "multipart/form-data" } });
                                    b({ tipo: "success", mensaje: I.data.message }); const V = await Ve.get(`http://dis.tis.cs.umss.edu.bo/api/tutor/ordenes-masivas/${e}`, { headers: { Authorization: `Bearer ${t}` }, responseType: "blob" }),
                                        N = new Blob([V.data], { type: "application/zip" }),
                                        _ = window.URL.createObjectURL(N),
                                        U = document.createElement("a");
                                    U.href = _, U.setAttribute("download", `ordenes_pago_${e}.zip`), document.body.appendChild(U), U.click(), U.remove() } catch (I) { console.error(I), b({ tipo: "error", mensaje: ((K = (F = I.response) == null ? void 0 : F.data) == null ? void 0 : K.error) || "Error al importar archivo o generar ZIP" }) } finally { g(!1) } } })] })] }), d.jsxs("form", { onSubmit: E, className: "space-y-6", children: [d.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden", style: { borderColor: "#E8DDD4" }, children: [d.jsxs("div", { className: "p-4 border-b", style: { background: "linear-gradient(135deg, #E8DDD4, #D4C4B4)", borderColor: "rgba(91, 74, 58, 0.3)" }, children: [d.jsxs("h2", { className: "text-lg font-bold flex items-center space-x-2", style: { color: "#5A4A3A" }, children: [d.jsx(Ya, { className: "w-5 h-5", style: { color: "#8B7355" } }), d.jsx("span", { children: "Datos del Estudiante" })] }), d.jsx("p", { className: "text-sm mt-1", style: { color: "#8B7355" }, children: "Información personal del participante" })] }), d.jsx("div", { className: "p-6", children: d.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [{ field: "nombres", label: "Nombres", icon: Ya, type: "text" }, { field: "apellidos", label: "Apellidos", icon: Ya, type: "text" }, { field: "ci", label: "Cédula de Identidad", icon: Di, type: "text" }, { field: "fecha_nacimiento", label: "Fecha de Nacimiento", icon: Nd, type: "date" }, { field: "email", label: "Correo Electrónico", icon: Js, type: "email" }, { field: "colegio", label: "Colegio", icon: YA, type: "text" }, { field: "curso", label: "Curso", icon: Di, type: "text" }, { field: "departamento", label: "Departamento", icon: fd, type: "text" }, { field: "provincia", label: "Provincia", icon: fd, type: "text" }].map(({ field: w, label: S, icon: O, type: D }, F) => d.jsxs("div", { className: "space-y-2", children: [d.jsx("label", { className: "block text-sm font-semibold", style: { color: "#5A4A3A" }, children: S }), d.jsxs("div", { className: "relative", children: [d.jsx(O, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4", style: { color: "#8B7355" } }), d.jsx("input", { name: w, type: D, value: c.estudiante[w], onChange: K => A(K, "estudiante", !0), className: "w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300", style: { backgroundColor: "#FAF7F2", borderColor: "#E8DDD4", color: "#5A4A3A", focusRingColor: "#C8B7A6" }, placeholder: `Ingrese ${S.toLowerCase()}`, required: !0 })] })] }, F)) }) })] }), d.jsx("h2", { className: "text-lg font-semibold mt-6 mb-4", children: "Datos de Contacto" }), d.jsx("input", { name: "contacto_email", value: c.contacto_email, onChange: A, placeholder: "Email de contacto", className: "p-2 border border-[#D9D9D9] rounded-md w-full mb-3" }), d.jsx("input", { name: "contacto_celular", value: c.contacto_celular, onChange: A, placeholder: "Celular de contacto", className: "p-2 border border-[#D9D9D9] rounded-md w-full mb-3" }), d.jsx("h2", { className: "text-lg font-semibold mt-6 mb-4", children: "Nombre del Tutor" }), d.jsx("input", { name: "nombre_tutor", value: c.nombre_tutor, onChange: A, placeholder: "Nombre del tutor", className: "p-2 border border-[#D9D9D9] rounded-md w-full mb-6" }), d.jsx("button", { type: "submit", disabled: m, className: "bg-[#C8B7A6] text-white px-6 py-2 rounded-md hover:bg-opacity-90", children: m ? "Generando PDF..." : "Obtener orden de pago" })] })] })] }) },
    aC = [{ path: "/dashboard", element: d.jsx(GN, {}), allowedRoles: ["Tutor"] }, { path: "/registro", element: d.jsx(tC, {}), allowedRoles: ["Tutor"] }, { path: "/payment-slip", element: d.jsx(JN, {}), allowedRoles: ["Tutor"] }, { path: "/registration2", element: d.jsx($N, {}), allowedRoles: ["Tutor"] }, { path: "/profile", element: d.jsx(Dd, {}), allowedRoles: ["Tutor"] }, { path: "/boleta/:id", element: d.jsx(eC, {}), allowedRoles: ["Tutor"] }, { path: "/registration/:id", element: d.jsx(rC, {}), allowedRoles: ["Tutor"] }],
    nC = () => { const { user: e } = Aa(), t = aa(), r = [{ title: "Inscripciones Totales", value: "254", icon: d.jsx(F2, { size: 24, className: "text-[#A9B2AC]" }), color: "bg-blue-50" }, { title: "Pagos Confirmados", value: "187", icon: d.jsx(MA, { size: 24, className: "text-green-600" }), color: "bg-green-50" }, { title: "Pagos Pendientes", value: "67", icon: d.jsx(C2, { size: 24, className: "text-yellow-600" }), color: "bg-yellow-50" }]; return d.jsxs("div", { className: "flex min-h-screen bg-[#F2EEE3]", children: [d.jsx(Ea, {}), d.jsxs("div", { className: "ml-64 flex-grow p-8", children: [d.jsxs("div", { className: "flex justify-between items-center mb-8", children: [d.jsx("h1", { className: "text-2xl font-bold", children: "Dashboard" }), d.jsxs("div", { className: "flex items-center", children: [d.jsx("span", { className: "mr-4", children: (e == null ? void 0 : e.role) || "Usuario" }), d.jsx("div", { className: "w-10 h-10 bg-[#A9B2AC] rounded-full" })] })] }), d.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: r.map((i, l) => d.jsx("div", { className: `${i.color} p-6 rounded-lg shadow-sm border border-[#D9D9D9]`, children: d.jsxs("div", { className: "flex justify-between items-center", children: [d.jsxs("div", { children: [d.jsx("h3", { className: "text-sm font-medium text-gray-500", children: i.title }), d.jsx("p", { className: "text-3xl font-bold mt-1", children: i.value })] }), i.icon] }) }, l)) }), d.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-[#D9D9D9] mb-8", children: [d.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Inscripciones Recientes" }), d.jsxs("table", { className: "w-full", children: [d.jsx("thead", { children: d.jsxs("tr", { className: "border-b border-[#D9D9D9]", children: [d.jsx("th", { className: "text-left py-3", children: "Estudiante" }), d.jsx("th", { className: "text-left py-3", children: "Área" }), d.jsx("th", { className: "text-left py-3", children: "Fecha" }), d.jsx("th", { className: "text-left py-3", children: "Estado" })] }) }), d.jsx("tbody", { children: [1, 2, 3, 4, 5].map(i => d.jsxs("tr", { className: "border-b border-[#D9D9D9]", children: [d.jsxs("td", { className: "py-3", children: ["Estudiante ", i] }), d.jsx("td", { className: "py-3", children: "Matemáticas" }), d.jsx("td", { className: "py-3", children: new Date().toLocaleDateString() }), d.jsx("td", { className: "py-3", children: d.jsx("span", { className: `px-2 py-1 rounded-full text-xs ${i%2===0?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`, children: i % 2 === 0 ? "Confirmado" : "Pendiente" }) })] }, i)) })] })] }), d.jsx("button", { onClick: () => t("/registration"), className: "fixed bottom-8 right-8 bg-[#C8B7A6] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-colors", children: d.jsx(Cd, { size: 24 }) })] })] }) },
    iC = () => { const { user: e } = Aa(), [t, r] = ne.useState(""), [i, l] = ne.useState(""), [o, c] = ne.useState(""), f = [{ id: 1, student: "Juan Pérez", area: "Matemáticas", level: "Avanzado", date: "15/11/2023", status: "Confirmado" }, { id: 2, student: "María García", area: "Física", level: "Intermedio", date: "14/11/2023", status: "Pendiente" }, { id: 3, student: "Carlos López", area: "Química", level: "Básico", date: "13/11/2023", status: "Confirmado" }, { id: 4, student: "Ana Martínez", area: "Biología", level: "Avanzado", date: "12/11/2023", status: "Confirmado" }, { id: 5, student: "Pedro Ramírez", area: "Matemáticas", level: "Intermedio", date: "11/11/2023", status: "Pendiente" }, { id: 6, student: "Laura Sánchez", area: "Física", level: "Básico", date: "10/11/2023", status: "Confirmado" }, { id: 7, student: "Miguel Torres", area: "Química", level: "Avanzado", date: "09/11/2023", status: "Pendiente" }, { id: 8, student: "Sofía Flores", area: "Biología", level: "Intermedio", date: "08/11/2023", status: "Confirmado" }]; return d.jsxs("div", { className: "flex min-h-screen bg-[#F2EEE3]", children: [d.jsx(Ea, {}), d.jsxs("div", { className: "ml-64 flex-grow p-8", children: [d.jsxs("div", { className: "flex justify-between items-center mb-8", children: [d.jsx("h1", { className: "text-2xl font-bold", children: "Reportes" }), d.jsxs("div", { className: "flex items-center", children: [d.jsx("span", { className: "mr-4", children: (e == null ? void 0 : e.role) || "Usuario" }), d.jsx("div", { className: "w-10 h-10 bg-[#A9B2AC] rounded-full" })] })] }), d.jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 mb-8", children: [d.jsxs("div", { className: "flex items-center mb-4", children: [d.jsx(O2, { size: 20, className: "mr-2 text-[#4F4F4F]" }), d.jsx("h2", { className: "text-lg font-semibold", children: "Filtros" })] }), d.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [d.jsxs("div", { children: [d.jsx("label", { htmlFor: "date", className: "block text-sm font-medium mb-1", children: "Fecha" }), d.jsx("input", { type: "date", id: "date", className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", value: t, onChange: p => r(p.target.value) })] }), d.jsxs("div", { children: [d.jsx("label", { htmlFor: "area", className: "block text-sm font-medium mb-1", children: "Área" }), d.jsxs("select", { id: "area", className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", value: i, onChange: p => l(p.target.value), children: [d.jsx("option", { value: "", children: "Todas" }), d.jsx("option", { value: "matematicas", children: "Matemáticas" }), d.jsx("option", { value: "fisica", children: "Física" }), d.jsx("option", { value: "quimica", children: "Química" }), d.jsx("option", { value: "biologia", children: "Biología" })] })] }), d.jsxs("div", { children: [d.jsx("label", { htmlFor: "status", className: "block text-sm font-medium mb-1", children: "Estado de Pago" }), d.jsxs("select", { id: "status", className: "w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]", value: o, onChange: p => c(p.target.value), children: [d.jsx("option", { value: "", children: "Todos" }), d.jsx("option", { value: "confirmado", children: "Confirmado" }), d.jsx("option", { value: "pendiente", children: "Pendiente" })] })] }), d.jsx("div", { className: "flex items-end", children: d.jsxs("button", { className: "bg-[#A9B2AC] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center", children: [d.jsx(Yc, { size: 18, className: "mr-2" }), "Buscar"] }) })] })] }), d.jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6", children: [d.jsxs("div", { className: "flex justify-between items-center mb-6", children: [d.jsx("h2", { className: "text-lg font-semibold", children: "Inscripciones Registradas" }), d.jsxs("button", { className: "bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center", children: [d.jsx(co, { size: 18, className: "mr-2" }), "Exportar a Excel"] })] }), d.jsx("div", { className: "overflow-x-auto", children: d.jsxs("table", { className: "w-full", children: [d.jsx("thead", { children: d.jsxs("tr", { className: "bg-gray-50 border-b border-[#D9D9D9]", children: [d.jsx("th", { className: "text-left py-3 px-4", children: "ID" }), d.jsx("th", { className: "text-left py-3 px-4", children: "Estudiante" }), d.jsx("th", { className: "text-left py-3 px-4", children: "Área" }), d.jsx("th", { className: "text-left py-3 px-4", children: "Nivel" }), d.jsx("th", { className: "text-left py-3 px-4", children: "Fecha" }), d.jsx("th", { className: "text-left py-3 px-4", children: "Estado" })] }) }), d.jsx("tbody", { children: f.map(p => d.jsxs("tr", { className: "border-b border-[#D9D9D9]", children: [d.jsx("td", { className: "py-3 px-4", children: p.id }), d.jsx("td", { className: "py-3 px-4", children: p.student }), d.jsx("td", { className: "py-3 px-4", children: p.area }), d.jsx("td", { className: "py-3 px-4", children: p.level }), d.jsx("td", { className: "py-3 px-4", children: p.date }), d.jsx("td", { className: "py-3 px-4", children: d.jsx("span", { className: `px-2 py-1 rounded-full text-xs ${p.status==="Confirmado"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`, children: p.status }) })] }, p.id)) })] }) }), d.jsxs("div", { className: "flex justify-between items-center mt-6", children: [d.jsx("p", { className: "text-sm text-gray-500", children: "Mostrando 1-8 de 24 resultados" }), d.jsxs("div", { className: "flex space-x-2", children: [d.jsx("button", { className: "px-3 py-1 border border-[#D9D9D9] rounded-md bg-gray-50", children: "1" }), d.jsx("button", { className: "px-3 py-1 border border-[#D9D9D9] rounded-md hover:bg-gray-50", children: "2" }), d.jsx("button", { className: "px-3 py-1 border border-[#D9D9D9] rounded-md hover:bg-gray-50", children: "3" })] })] })] })] })] }) },
    lC = [{ path: "/dashboard", element: d.jsx(nC, {}), allowedRoles: ["Organizador"] }, { path: "/reports", element: d.jsx(iC, {}), allowedRoles: ["Organizador"] }, { path: "/profile", element: d.jsx(Dd, {}), allowedRoles: ["Organizador"] }],
    sC = () => { const { user: e, isLoading: t } = Aa(), i = (() => { switch (e == null ? void 0 : e.role) {
                case "Administrador":
                    return JE;
                case "Tutor":
                    return aC;
                case "Organizador":
                    return lC;
                default:
                    return [] } })(); return t ? d.jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#F2EEE3]", children: d.jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-b-2 border-[#A9B2AC]" }) }) : d.jsxs(G3, { children: [d.jsx(QE, { position: "top-right", toastOptions: { duration: 3e3 } }), d.jsxs(M3, { children: [d.jsx(Si, { path: "/", element: d.jsx(nE, {}) }), " ", d.jsx(Si, { path: "/login", element: d.jsx(tE, {}) }), d.jsx(Si, { path: "/register", element: d.jsx(rE, {}) }), d.jsx(Si, { path: "/unauthorized", element: d.jsx(aE, {}) }), e && i.map(({ path: l, element: o, allowedRoles: c }, f) => d.jsx(Si, { path: l, element: d.jsx(iE, { allowedRoles: c, children: o }) }, f)), d.jsx(Si, { path: "*", element: d.jsx(td, { to: "/", replace: !0 }) })] })] }) };
qy.createRoot(document.getElementById("root")).render(d.jsx(ne.StrictMode, { children: d.jsx(wA, { children: d.jsx(sC, {}) }) }));