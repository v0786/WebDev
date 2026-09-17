(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Gm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Su={exports:{}},Na={},Mu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function g0(){if(Pp)return pt;Pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(U,ie,De){this.props=U,this.context=ie,this.refs=C,this.updater=De||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(U,ie,De){this.props=U,this.context=ie,this.refs=C,this.updater=De||M}var D=L.prototype=new x;D.constructor=L,T(D,S.prototype),D.isPureReactComponent=!0;var R=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function V(U,ie,De){var Q,de={},we=null,xe=null;if(ie!=null)for(Q in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(we=""+ie.key),ie)G.call(ie,Q)&&!k.hasOwnProperty(Q)&&(de[Q]=ie[Q]);var ye=arguments.length-2;if(ye===1)de.children=De;else if(1<ye){for(var ze=Array(ye),je=0;je<ye;je++)ze[je]=arguments[je+2];de.children=ze}if(U&&U.defaultProps)for(Q in ye=U.defaultProps,ye)de[Q]===void 0&&(de[Q]=ye[Q]);return{$$typeof:s,type:U,key:we,ref:xe,props:de,_owner:F.current}}function N(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(De){return ie[De]})}var ae=/\/+/g;function te(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ie.toString(36)}function ue(U,ie,De,Q,de){var we=typeof U;(we==="undefined"||we==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(we){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case s:case e:xe=!0}}if(xe)return xe=U,de=de(xe),U=Q===""?"."+te(xe,0):Q,R(de)?(De="",U!=null&&(De=U.replace(ae,"$&/")+"/"),ue(de,ie,De,"",function(je){return je})):de!=null&&(A(de)&&(de=N(de,De+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ae,"$&/")+"/")+U)),ie.push(de)),1;if(xe=0,Q=Q===""?".":Q+":",R(U))for(var ye=0;ye<U.length;ye++){we=U[ye];var ze=Q+te(we,ye);xe+=ue(we,ie,De,ze,de)}else if(ze=y(U),typeof ze=="function")for(U=ze.call(U),ye=0;!(we=U.next()).done;)we=we.value,ze=Q+te(we,ye++),xe+=ue(we,ie,De,ze,de);else if(we==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function he(U,ie,De){if(U==null)return U;var Q=[],de=0;return ue(U,Q,"","",function(we){return ie.call(De,we,de++)}),Q}function oe(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(De){(U._status===0||U._status===-1)&&(U._status=1,U._result=De)},function(De){(U._status===0||U._status===-1)&&(U._status=2,U._result=De)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},H={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:he,forEach:function(U,ie,De){he(U,function(){ie.apply(this,arguments)},De)},count:function(U){var ie=0;return he(U,function(){ie++}),ie},toArray:function(U){return he(U,function(ie){return ie})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=S,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=L,pt.StrictMode=r,pt.Suspense=m,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,pt.act=re,pt.cloneElement=function(U,ie,De){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=T({},U.props),de=U.key,we=U.ref,xe=U._owner;if(ie!=null){if(ie.ref!==void 0&&(we=ie.ref,xe=F.current),ie.key!==void 0&&(de=""+ie.key),U.type&&U.type.defaultProps)var ye=U.type.defaultProps;for(ze in ie)G.call(ie,ze)&&!k.hasOwnProperty(ze)&&(Q[ze]=ie[ze]===void 0&&ye!==void 0?ye[ze]:ie[ze])}var ze=arguments.length-2;if(ze===1)Q.children=De;else if(1<ze){ye=Array(ze);for(var je=0;je<ze;je++)ye[je]=arguments[je+2];Q.children=ye}return{$$typeof:s,type:U.type,key:de,ref:we,props:Q,_owner:xe}},pt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},pt.createElement=V,pt.createFactory=function(U){var ie=V.bind(null,U);return ie.type=U,ie},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:f,render:U}},pt.isValidElement=A,pt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:oe}},pt.memo=function(U,ie){return{$$typeof:g,type:U,compare:ie===void 0?null:ie}},pt.startTransition=function(U){var ie=H.transition;H.transition={};try{U()}finally{H.transition=ie}},pt.unstable_act=re,pt.useCallback=function(U,ie){return le.current.useCallback(U,ie)},pt.useContext=function(U){return le.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},pt.useEffect=function(U,ie){return le.current.useEffect(U,ie)},pt.useId=function(){return le.current.useId()},pt.useImperativeHandle=function(U,ie,De){return le.current.useImperativeHandle(U,ie,De)},pt.useInsertionEffect=function(U,ie){return le.current.useInsertionEffect(U,ie)},pt.useLayoutEffect=function(U,ie){return le.current.useLayoutEffect(U,ie)},pt.useMemo=function(U,ie){return le.current.useMemo(U,ie)},pt.useReducer=function(U,ie,De){return le.current.useReducer(U,ie,De)},pt.useRef=function(U){return le.current.useRef(U)},pt.useState=function(U){return le.current.useState(U)},pt.useSyncExternalStore=function(U,ie,De){return le.current.useSyncExternalStore(U,ie,De)},pt.useTransition=function(){return le.current.useTransition()},pt.version="18.3.1",pt}var Dp;function Xd(){return Dp||(Dp=1,Mu.exports=g0()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function x0(){if(Lp)return Na;Lp=1;var s=Xd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var _,v={},y=null,M=null;g!==void 0&&(y=""+g),m.key!==void 0&&(y=""+m.key),m.ref!==void 0&&(M=m.ref);for(_ in m)r.call(m,_)&&!c.hasOwnProperty(_)&&(v[_]=m[_]);if(f&&f.defaultProps)for(_ in m=f.defaultProps,m)v[_]===void 0&&(v[_]=m[_]);return{$$typeof:e,type:f,key:y,ref:M,props:v,_owner:o.current}}return Na.Fragment=n,Na.jsx=d,Na.jsxs=d,Na}var Ip;function v0(){return Ip||(Ip=1,Su.exports=x0()),Su.exports}var h=v0(),Ut=Xd();const _0=Gm(Ut);var tl={},wu={exports:{}},Dn={},Eu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function y0(){return Up||(Up=1,(function(s){function e(H,ce){var re=H.length;H.push(ce);e:for(;0<re;){var U=re-1>>>1,ie=H[U];if(0<o(ie,ce))H[U]=ce,H[re]=ie,re=U;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ce=H[0],re=H.pop();if(re!==ce){H[0]=re;e:for(var U=0,ie=H.length,De=ie>>>1;U<De;){var Q=2*(U+1)-1,de=H[Q],we=Q+1,xe=H[we];if(0>o(de,re))we<ie&&0>o(xe,de)?(H[U]=xe,H[we]=re,U=we):(H[U]=de,H[Q]=re,U=Q);else if(we<ie&&0>o(xe,re))H[U]=xe,H[we]=re,U=we;else break e}}return ce}function o(H,ce){var re=H.sortIndex-ce.sortIndex;return re!==0?re:H.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var m=[],g=[],_=1,v=null,y=3,M=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(H){for(var ce=n(g);ce!==null;){if(ce.callback===null)r(g);else if(ce.startTime<=H)r(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=n(g)}}function R(H){if(C=!1,D(H),!T)if(n(m)!==null)T=!0,oe(G);else{var ce=n(g);ce!==null&&le(R,ce.startTime-H)}}function G(H,ce){T=!1,C&&(C=!1,x(V),V=-1),M=!0;var re=y;try{for(D(ce),v=n(m);v!==null&&(!(v.expirationTime>ce)||H&&!z());){var U=v.callback;if(typeof U=="function"){v.callback=null,y=v.priorityLevel;var ie=U(v.expirationTime<=ce);ce=s.unstable_now(),typeof ie=="function"?v.callback=ie:v===n(m)&&r(m),D(ce)}else r(m);v=n(m)}if(v!==null)var De=!0;else{var Q=n(g);Q!==null&&le(R,Q.startTime-ce),De=!1}return De}finally{v=null,y=re,M=!1}}var F=!1,k=null,V=-1,N=5,A=-1;function z(){return!(s.unstable_now()-A<N)}function ae(){if(k!==null){var H=s.unstable_now();A=H;var ce=!0;try{ce=k(!0,H)}finally{ce?te():(F=!1,k=null)}}else F=!1}var te;if(typeof L=="function")te=function(){L(ae)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=ae,te=function(){he.postMessage(null)}}else te=function(){S(ae,0)};function oe(H){k=H,F||(F=!0,te())}function le(H,ce){V=S(function(){H(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,oe(G))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(H){switch(y){case 1:case 2:case 3:var ce=3;break;default:ce=y}var re=y;y=ce;try{return H()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ce){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=y;y=H;try{return ce()}finally{y=re}},s.unstable_scheduleCallback=function(H,ce,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,H={id:_++,callback:ce,priorityLevel:H,startTime:re,expirationTime:ie,sortIndex:-1},re>U?(H.sortIndex=re,e(g,H),n(m)===null&&H===n(g)&&(C?(x(V),V=-1):C=!0,le(R,re-U))):(H.sortIndex=ie,e(m,H),T||M||(T=!0,oe(G))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var ce=y;return function(){var re=y;y=ce;try{return H.apply(this,arguments)}finally{y=re}}}})(Tu)),Tu}var kp;function S0(){return kp||(kp=1,Eu.exports=y0()),Eu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function M0(){if(Fp)return Dn;Fp=1;var s=Xd(),e=S0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function y(t){return m.call(v,t)?!0:m.call(_,t)?!1:g.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,u,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,L);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,L);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,L);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,a,l){var u=S.hasOwnProperty(i)?S[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,u,l)&&(a=null),l||u===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),H=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function ie(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var De=!1;function Q(t,i){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var u=ne.stack.split(`
`),p=l.stack.split(`
`),w=u.length-1,I=p.length-1;1<=w&&0<=I&&u[w]!==p[I];)I--;for(;1<=w&&0<=I;w--,I--)if(u[w]!==p[I]){if(w!==1||I!==1)do if(w--,I--,0>I||u[w]!==p[I]){var O=`
`+u[w].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=w&&0<=I);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function de(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function we(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case N:return"Profiler";case V:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:we(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return we(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=ze(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=je(t))}function Lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ze(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function _n(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ft(t,i){mt(t,i);var a=ye(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ct(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ct(t,i,a){(i!=="number"||ct(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var We=Array.isArray;function P(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(We(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ye(a)}}function me(t,i){var a=ye(i.value),l=ye(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ut(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function Qe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=Qe(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var Oe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,se=null,pe=null;function Pe(t){if(t=ma(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),Ae(t.stateNode,t.type,i))}}function Ne(t){se?pe?pe.push(t):pe=[t]:se=t}function rt(){if(se){var t=se,i=pe;if(pe=se=null,Pe(t),i)for(t=0;t<i.length;t++)Pe(i[t])}}function kt(t,i){return t(i)}function Kt(){}var Mt=!1;function bn(t,i,a){if(Mt)return t(i,a);Mt=!0;try{return kt(t,i,a)}finally{Mt=!1,(se!==null||pe!==null)&&(Kt(),rt())}}function yn(t,i){var a=t.stateNode;if(a===null)return null;var l=go(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var es=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{es=!1}function wi(t,i,a,l,u,p,w,I,O){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(_e){this.onError(_e)}}var Ei=!1,Tr=null,br=!1,qi=null,qa={onError:function(t){Ei=!0,Tr=t}};function ts(t,i,a,l,u,p,w,I,O){Ei=!1,Tr=null,wi.apply(qa,arguments)}function $a(t,i,a,l,u,p,w,I,O){if(ts.apply(this,arguments),Ei){if(Ei){var ne=Tr;Ei=!1,Tr=null}else throw Error(n(198));br||(br=!0,qi=ne)}}function pi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ya(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ka(t){if(pi(t)!==t)throw Error(n(188))}function Gl(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return Ka(u),t;if(p===l)return Ka(u),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=p;else{for(var w=!1,I=u.child;I;){if(I===a){w=!0,a=u,l=p;break}if(I===l){w=!0,l=u,a=p;break}I=I.sibling}if(!w){for(I=p.child;I;){if(I===a){w=!0,a=p,l=u;break}if(I===l){w=!0,l=p,a=u;break}I=I.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Za(t){return t=Gl(t),t!==null?Qa(t):null}function Qa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qa(t);if(i!==null)return i;t=t.sibling}return null}var Ja=e.unstable_scheduleCallback,b=e.unstable_cancelCallback,X=e.unstable_shouldYield,ee=e.unstable_requestPaint,K=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,Ve=null;function vt(t){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:St,Gt=Math.log,Bt=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(Gt(t)/Bt|0)|0}var Ye=64,Wt=4194304;function gt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,w=a&268435455;if(w!==0){var I=w&~u;I!==0?l=gt(I):(p&=w,p!==0&&(l=gt(p)))}else w=a&~u,w!==0?l=gt(w):p!==0&&(l=gt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-at(i),u=1<<a,l|=t[a],i&=~u;return l}function $i(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-at(p),I=1<<w,O=u[w];O===-1?((I&a)===0||(I&l)!==0)&&(u[w]=$i(I,i)):O<=i&&(t.expiredLanes|=I),p&=~I}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dt(){var t=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),t}function fn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=a}function ln(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-at(a),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~p}}function nn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-at(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var wt=0;function mi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uf,Wl,df,ff,hf,Xl=!1,eo=[],Yi=null,Ki=null,Zi=null,Js=new Map,ea=new Map,Qi=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(i.pointerId)}}function ta(t,i,a,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=ma(i),i!==null&&Wl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Bg(t,i,a,l,u){switch(i){case"focusin":return Yi=ta(Yi,t,i,a,l,u),!0;case"dragenter":return Ki=ta(Ki,t,i,a,l,u),!0;case"mouseover":return Zi=ta(Zi,t,i,a,l,u),!0;case"pointerover":var p=u.pointerId;return Js.set(p,ta(Js.get(p)||null,t,i,a,l,u)),!0;case"gotpointercapture":return p=u.pointerId,ea.set(p,ta(ea.get(p)||null,t,i,a,l,u)),!0}return!1}function mf(t){var i=Ar(t.target);if(i!==null){var a=pi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ya(a),i!==null){t.blockedOn=i,hf(t.priority,function(){df(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=$l(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);At=l,a.target.dispatchEvent(l),At=null}else return i=ma(a),i!==null&&Wl(i),t.blockedOn=a,!1;i.shift()}return!0}function gf(t,i,a){to(t)&&a.delete(i)}function zg(){Xl=!1,Yi!==null&&to(Yi)&&(Yi=null),Ki!==null&&to(Ki)&&(Ki=null),Zi!==null&&to(Zi)&&(Zi=null),Js.forEach(gf),ea.forEach(gf)}function na(t,i){t.blockedOn===i&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zg)))}function ia(t){function i(u){return na(u,t)}if(0<eo.length){na(eo[0],t);for(var a=1;a<eo.length;a++){var l=eo[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Yi!==null&&na(Yi,t),Ki!==null&&na(Ki,t),Zi!==null&&na(Zi,t),Js.forEach(i),ea.forEach(i),a=0;a<Qi.length;a++)l=Qi[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)mf(a),a.blockedOn===null&&Qi.shift()}var ns=R.ReactCurrentBatchConfig,no=!0;function Hg(t,i,a,l){var u=wt,p=ns.transition;ns.transition=null;try{wt=1,ql(t,i,a,l)}finally{wt=u,ns.transition=p}}function Vg(t,i,a,l){var u=wt,p=ns.transition;ns.transition=null;try{wt=4,ql(t,i,a,l)}finally{wt=u,ns.transition=p}}function ql(t,i,a,l){if(no){var u=$l(t,i,a,l);if(u===null)dc(t,i,l,io,a),pf(t,l);else if(Bg(u,t,i,a,l))l.stopPropagation();else if(pf(t,l),i&4&&-1<Og.indexOf(t)){for(;u!==null;){var p=ma(u);if(p!==null&&uf(p),p=$l(t,i,a,l),p===null&&dc(t,i,l,io,a),p===u)break;u=p}u!==null&&l.stopPropagation()}else dc(t,i,l,null,a)}}var io=null;function $l(t,i,a,l){if(io=null,t=W(l),t=Ar(t),t!==null)if(i=pi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ya(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return io=t,null}function xf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Me:return 1;case Ce:return 4;case Le:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Ji=null,Yl=null,ro=null;function vf(){if(ro)return ro;var t,i=Yl,a=i.length,l,u="value"in Ji?Ji.value:Ji.textContent,p=u.length;for(t=0;t<a&&i[t]===u[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===u[p-l];l++);return ro=u.slice(t,1<l?1-l:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function _f(){return!1}function Fn(t){function i(a,l,u,p,w){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ao:_f,this.isPropagationStopped=_f,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Fn(is),ra=re({},is,{view:0,detail:0}),jg=Fn(ra),Zl,Ql,sa,oo=re({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(Zl=t.screenX-sa.screenX,Ql=t.screenY-sa.screenY):Ql=Zl=0,sa=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),yf=Fn(oo),Gg=re({},oo,{dataTransfer:0}),Wg=Fn(Gg),Xg=re({},ra,{relatedTarget:0}),Jl=Fn(Xg),qg=re({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=Fn(qg),Yg=re({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kg=Fn(Yg),Zg=re({},is,{data:0}),Sf=Fn(Zg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ex[t])?!!i[t]:!1}function ec(){return tx}var nx=re({},ra,{key:function(t){if(t.key){var i=Qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Fn(nx),rx=re({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=Fn(rx),sx=re({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),ax=Fn(sx),ox=re({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Fn(ox),cx=re({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Fn(cx),dx=[9,13,27,32],tc=f&&"CompositionEvent"in window,aa=null;f&&"documentMode"in document&&(aa=document.documentMode);var fx=f&&"TextEvent"in window&&!aa,wf=f&&(!tc||aa&&8<aa&&11>=aa),Ef=" ",Tf=!1;function bf(t,i){switch(t){case"keyup":return dx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function hx(t,i){switch(t){case"compositionend":return Af(i);case"keypress":return i.which!==32?null:(Tf=!0,Ef);case"textInput":return t=i.data,t===Ef&&Tf?null:t;default:return null}}function px(t,i){if(rs)return t==="compositionend"||!tc&&bf(t,i)?(t=vf(),ro=Yl=Ji=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wf&&i.locale!=="ko"?null:i.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!mx[t.type]:i==="textarea"}function Rf(t,i,a,l){Ne(l),i=ho(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var oa=null,la=null;function gx(t){qf(t,0)}function lo(t){var i=cs(t);if(Lt(i))return t}function xx(t,i){if(t==="change")return i}var Nf=!1;if(f){var nc;if(f){var ic="oninput"in document;if(!ic){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),ic=typeof Pf.oninput=="function"}nc=ic}else nc=!1;Nf=nc&&(!document.documentMode||9<document.documentMode)}function Df(){oa&&(oa.detachEvent("onpropertychange",Lf),la=oa=null)}function Lf(t){if(t.propertyName==="value"&&lo(la)){var i=[];Rf(i,la,t,W(t)),bn(gx,i)}}function vx(t,i,a){t==="focusin"?(Df(),oa=i,la=a,oa.attachEvent("onpropertychange",Lf)):t==="focusout"&&Df()}function _x(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lo(la)}function yx(t,i){if(t==="click")return lo(i)}function Sx(t,i){if(t==="input"||t==="change")return lo(i)}function Mx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:Mx;function ca(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!m.call(i,u)||!ei(t[u],i[u]))return!1}return!0}function If(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uf(t,i){var a=If(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=If(a)}}function kf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?kf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ff(){for(var t=window,i=ct();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ct(t.document)}return i}function rc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function wx(t){var i=Ff(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&kf(a.ownerDocument.documentElement,a)){if(l!==null&&rc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=Uf(a,p);var w=Uf(a,l);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ex=f&&"documentMode"in document&&11>=document.documentMode,ss=null,sc=null,ua=null,ac=!1;function Of(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||ss==null||ss!==ct(l)||(l=ss,"selectionStart"in l&&rc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ua&&ca(ua,l)||(ua=l,l=ho(sc,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ss)))}function co(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var as={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},oc={},Bf={};f&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function uo(t){if(oc[t])return oc[t];if(!as[t])return t;var i=as[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bf)return oc[t]=i[a];return t}var zf=uo("animationend"),Hf=uo("animationiteration"),Vf=uo("animationstart"),jf=uo("transitionend"),Gf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,i){Gf.set(t,i),c(i,[t])}for(var lc=0;lc<Wf.length;lc++){var cc=Wf[lc],Tx=cc.toLowerCase(),bx=cc[0].toUpperCase()+cc.slice(1);er(Tx,"on"+bx)}er(zf,"onAnimationEnd"),er(Hf,"onAnimationIteration"),er(Vf,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(jf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Xf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,$a(l,i,void 0,t),t.currentTarget=null}function qf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var I=l[w],O=I.instance,ne=I.currentTarget;if(I=I.listener,O!==p&&u.isPropagationStopped())break e;Xf(u,I,ne),p=O}else for(w=0;w<l.length;w++){if(I=l[w],O=I.instance,ne=I.currentTarget,I=I.listener,O!==p&&u.isPropagationStopped())break e;Xf(u,I,ne),p=O}}}if(br)throw t=qi,br=!1,qi=null,t}function Ft(t,i){var a=i[xc];a===void 0&&(a=i[xc]=new Set);var l=t+"__bubble";a.has(l)||($f(i,t,2,!1),a.add(l))}function uc(t,i,a){var l=0;i&&(l|=4),$f(a,t,l,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[fo]){t[fo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Ax.has(a)||uc(a,!1,t),uc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fo]||(i[fo]=!0,uc("selectionchange",!1,i))}}function $f(t,i,a,l){switch(xf(i)){case 1:var u=Hg;break;case 4:u=Vg;break;default:u=ql}a=u.bind(null,i,a,t),u=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function dc(t,i,a,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var I=l.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var O=w.tag;if((O===3||O===4)&&(O=w.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;w=w.return}for(;I!==null;){if(w=Ar(I),w===null)return;if(O=w.tag,O===5||O===6){l=p=w;continue e}I=I.parentNode}}l=l.return}bn(function(){var ne=p,_e=W(a),Se=[];e:{var ge=Gf.get(t);if(ge!==void 0){var Ie=Kl,He=t;switch(t){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":Ie=ix;break;case"focusin":He="focus",Ie=Jl;break;case"focusout":He="blur",Ie=Jl;break;case"beforeblur":case"afterblur":Ie=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=ax;break;case zf:case Hf:case Vf:Ie=$g;break;case jf:Ie=lx;break;case"scroll":Ie=jg;break;case"wheel":Ie=ux;break;case"copy":case"cut":case"paste":Ie=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Mf}var Ge=(i&4)!==0,qt=!Ge&&t==="scroll",Y=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var j=ne,Z;j!==null;){Z=j;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,Y!==null&&(Te=yn(j,Y),Te!=null&&Ge.push(ha(j,Te,Z)))),qt)break;j=j.return}0<Ge.length&&(ge=new Ie(ge,He,null,a,_e),Se.push({event:ge,listeners:Ge}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&a!==At&&(He=a.relatedTarget||a.fromElement)&&(Ar(He)||He[bi]))break e;if((Ie||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(He=a.relatedTarget||a.toElement,Ie=ne,He=He?Ar(He):null,He!==null&&(qt=pi(He),He!==qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=ne),Ie!==He)){if(Ge=yf,Te="onMouseLeave",Y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=Mf,Te="onPointerLeave",Y="onPointerEnter",j="pointer"),qt=Ie==null?ge:cs(Ie),Z=He==null?ge:cs(He),ge=new Ge(Te,j+"leave",Ie,a,_e),ge.target=qt,ge.relatedTarget=Z,Te=null,Ar(_e)===ne&&(Ge=new Ge(Y,j+"enter",He,a,_e),Ge.target=Z,Ge.relatedTarget=qt,Te=Ge),qt=Te,Ie&&He)t:{for(Ge=Ie,Y=He,j=0,Z=Ge;Z;Z=os(Z))j++;for(Z=0,Te=Y;Te;Te=os(Te))Z++;for(;0<j-Z;)Ge=os(Ge),j--;for(;0<Z-j;)Y=os(Y),Z--;for(;j--;){if(Ge===Y||Y!==null&&Ge===Y.alternate)break t;Ge=os(Ge),Y=os(Y)}Ge=null}else Ge=null;Ie!==null&&Yf(Se,ge,Ie,Ge,!1),He!==null&&qt!==null&&Yf(Se,qt,He,Ge,!0)}}e:{if(ge=ne?cs(ne):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var qe=xx;else if(Cf(ge))if(Nf)qe=Sx;else{qe=_x;var Ke=vx}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(qe=yx);if(qe&&(qe=qe(t,ne))){Rf(Se,qe,a,_e);break e}Ke&&Ke(t,ge,ne),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch(Ke=ne?cs(ne):window,t){case"focusin":(Cf(Ke)||Ke.contentEditable==="true")&&(ss=Ke,sc=ne,ua=null);break;case"focusout":ua=sc=ss=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Of(Se,a,_e);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Of(Se,a,_e)}var Ze;if(tc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else rs?bf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(wf&&a.locale!=="ko"&&(rs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&rs&&(Ze=vf()):(Ji=_e,Yl="value"in Ji?Ji.value:Ji.textContent,rs=!0)),Ke=ho(ne,nt),0<Ke.length&&(nt=new Sf(nt,t,null,a,_e),Se.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Af(a),Ze!==null&&(nt.data=Ze)))),(Ze=fx?hx(t,a):px(t,a))&&(ne=ho(ne,"onBeforeInput"),0<ne.length&&(_e=new Sf("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:ne}),_e.data=Ze))}qf(Se,i)})}function ha(t,i,a){return{instance:t,listener:i,currentTarget:a}}function ho(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=yn(t,a),p!=null&&l.unshift(ha(t,p,u)),p=yn(t,i),p!=null&&l.push(ha(t,p,u))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yf(t,i,a,l,u){for(var p=i._reactName,w=[];a!==null&&a!==l;){var I=a,O=I.alternate,ne=I.stateNode;if(O!==null&&O===l)break;I.tag===5&&ne!==null&&(I=ne,u?(O=yn(a,p),O!=null&&w.unshift(ha(a,O,I))):u||(O=yn(a,p),O!=null&&w.push(ha(a,O,I)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var Cx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Kf(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(Rx,"")}function po(t,i,a){if(i=Kf(i),Kf(t)!==i&&a)throw Error(n(425))}function mo(){}var fc=null,hc=null;function pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(t){return Zf.resolve(null).then(t).catch(Dx)}:mc;function Dx(t){setTimeout(function(){throw t})}function gc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),ia(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);ia(i)}function tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Qf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),gi="__reactFiber$"+ls,pa="__reactProps$"+ls,bi="__reactContainer$"+ls,xc="__reactEvents$"+ls,Lx="__reactListeners$"+ls,Ix="__reactHandles$"+ls;function Ar(t){var i=t[gi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[bi]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Qf(t);t!==null;){if(a=t[gi])return a;t=Qf(t)}return i}t=a,a=t.parentNode}return null}function ma(t){return t=t[gi]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[pa]||null}var vc=[],us=-1;function nr(t){return{current:t}}function Ot(t){0>us||(t.current=vc[us],vc[us]=null,us--)}function It(t,i){us++,vc[us]=t.current,t.current=i}var ir={},hn=nr(ir),An=nr(!1),Cr=ir;function ds(t,i){var a=t.type.contextTypes;if(!a)return ir;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Cn(t){return t=t.childContextTypes,t!=null}function xo(){Ot(An),Ot(hn)}function Jf(t,i,a){if(hn.current!==ir)throw Error(n(168));It(hn,i),It(An,a)}function eh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return re({},a,l)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Cr=hn.current,It(hn,t),It(An,An.current),!0}function th(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=eh(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,Ot(An),Ot(hn),It(hn,t)):Ot(An),It(An,a)}var Ai=null,_o=!1,_c=!1;function nh(t){Ai===null?Ai=[t]:Ai.push(t)}function Ux(t){_o=!0,nh(t)}function rr(){if(!_c&&Ai!==null){_c=!0;var t=0,i=wt;try{var a=Ai;for(wt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ai=null,_o=!1}catch(u){throw Ai!==null&&(Ai=Ai.slice(t+1)),Ja(Me,rr),u}finally{wt=i,_c=!1}}return null}var fs=[],hs=0,yo=null,So=0,Wn=[],Xn=0,Rr=null,Ci=1,Ri="";function Nr(t,i){fs[hs++]=So,fs[hs++]=yo,yo=t,So=i}function ih(t,i,a){Wn[Xn++]=Ci,Wn[Xn++]=Ri,Wn[Xn++]=Rr,Rr=t;var l=Ci;t=Ri;var u=32-at(l)-1;l&=~(1<<u),a+=1;var p=32-at(i)+u;if(30<p){var w=u-u%5;p=(l&(1<<w)-1).toString(32),l>>=w,u-=w,Ci=1<<32-at(i)+u|a<<u|l,Ri=p+t}else Ci=1<<p|a<<u|l,Ri=t}function yc(t){t.return!==null&&(Nr(t,1),ih(t,1,0))}function Sc(t){for(;t===yo;)yo=fs[--hs],fs[hs]=null,So=fs[--hs],fs[hs]=null;for(;t===Rr;)Rr=Wn[--Xn],Wn[Xn]=null,Ri=Wn[--Xn],Wn[Xn]=null,Ci=Wn[--Xn],Wn[Xn]=null}var On=null,Bn=null,zt=!1,ti=null;function rh(t,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function sh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,Bn=tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Rr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,On=t,Bn=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(zt){var i=Bn;if(i){var a=i;if(!sh(t,i)){if(Mc(t))throw Error(n(418));i=tr(a.nextSibling);var l=On;i&&sh(t,i)?rh(l,a):(t.flags=t.flags&-4097|2,zt=!1,On=t)}}else{if(Mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,On=t}}}function ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Mo(t){if(t!==On)return!1;if(!zt)return ah(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pc(t.type,t.memoizedProps)),i&&(i=Bn)){if(Mc(t))throw oh(),Error(n(418));for(;i;)rh(t,i),i=tr(i.nextSibling)}if(ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Bn=tr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=On?tr(t.stateNode.nextSibling):null;return!0}function oh(){for(var t=Bn;t;)t=tr(t.nextSibling)}function ps(){Bn=On=null,zt=!1}function Ec(t){ti===null?ti=[t]:ti.push(t)}var kx=R.ReactCurrentBatchConfig;function ga(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var I=u.refs;w===null?delete I[p]:I[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function lh(t){var i=t._init;return i(t._payload)}function ch(t){function i(Y,j){if(t){var Z=Y.deletions;Z===null?(Y.deletions=[j],Y.flags|=16):Z.push(j)}}function a(Y,j){if(!t)return null;for(;j!==null;)i(Y,j),j=j.sibling;return null}function l(Y,j){for(Y=new Map;j!==null;)j.key!==null?Y.set(j.key,j):Y.set(j.index,j),j=j.sibling;return Y}function u(Y,j){return Y=fr(Y,j),Y.index=0,Y.sibling=null,Y}function p(Y,j,Z){return Y.index=Z,t?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<j?(Y.flags|=2,j):Z):(Y.flags|=2,j)):(Y.flags|=1048576,j)}function w(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,j,Z,Te){return j===null||j.tag!==6?(j=mu(Z,Y.mode,Te),j.return=Y,j):(j=u(j,Z),j.return=Y,j)}function O(Y,j,Z,Te){var qe=Z.type;return qe===k?_e(Y,j,Z.props.children,Te,Z.key):j!==null&&(j.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===oe&&lh(qe)===j.type)?(Te=u(j,Z.props),Te.ref=ga(Y,j,Z),Te.return=Y,Te):(Te=qo(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=ga(Y,j,Z),Te.return=Y,Te)}function ne(Y,j,Z,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==Z.containerInfo||j.stateNode.implementation!==Z.implementation?(j=gu(Z,Y.mode,Te),j.return=Y,j):(j=u(j,Z.children||[]),j.return=Y,j)}function _e(Y,j,Z,Te,qe){return j===null||j.tag!==7?(j=Or(Z,Y.mode,Te,qe),j.return=Y,j):(j=u(j,Z),j.return=Y,j)}function Se(Y,j,Z){if(typeof j=="string"&&j!==""||typeof j=="number")return j=mu(""+j,Y.mode,Z),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return Z=qo(j.type,j.key,j.props,null,Y.mode,Z),Z.ref=ga(Y,null,j),Z.return=Y,Z;case F:return j=gu(j,Y.mode,Z),j.return=Y,j;case oe:var Te=j._init;return Se(Y,Te(j._payload),Z)}if(We(j)||ce(j))return j=Or(j,Y.mode,Z,null),j.return=Y,j;wo(Y,j)}return null}function ge(Y,j,Z,Te){var qe=j!==null?j.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return qe!==null?null:I(Y,j,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case G:return Z.key===qe?O(Y,j,Z,Te):null;case F:return Z.key===qe?ne(Y,j,Z,Te):null;case oe:return qe=Z._init,ge(Y,j,qe(Z._payload),Te)}if(We(Z)||ce(Z))return qe!==null?null:_e(Y,j,Z,Te,null);wo(Y,Z)}return null}function Ie(Y,j,Z,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(Z)||null,I(j,Y,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return Y=Y.get(Te.key===null?Z:Te.key)||null,O(j,Y,Te,qe);case F:return Y=Y.get(Te.key===null?Z:Te.key)||null,ne(j,Y,Te,qe);case oe:var Ke=Te._init;return Ie(Y,j,Z,Ke(Te._payload),qe)}if(We(Te)||ce(Te))return Y=Y.get(Z)||null,_e(j,Y,Te,qe,null);wo(j,Te)}return null}function He(Y,j,Z,Te){for(var qe=null,Ke=null,Ze=j,nt=j=0,an=null;Ze!==null&&nt<Z.length;nt++){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var Tt=ge(Y,Ze,Z[nt],Te);if(Tt===null){Ze===null&&(Ze=an);break}t&&Ze&&Tt.alternate===null&&i(Y,Ze),j=p(Tt,j,nt),Ke===null?qe=Tt:Ke.sibling=Tt,Ke=Tt,Ze=an}if(nt===Z.length)return a(Y,Ze),zt&&Nr(Y,nt),qe;if(Ze===null){for(;nt<Z.length;nt++)Ze=Se(Y,Z[nt],Te),Ze!==null&&(j=p(Ze,j,nt),Ke===null?qe=Ze:Ke.sibling=Ze,Ke=Ze);return zt&&Nr(Y,nt),qe}for(Ze=l(Y,Ze);nt<Z.length;nt++)an=Ie(Ze,Y,nt,Z[nt],Te),an!==null&&(t&&an.alternate!==null&&Ze.delete(an.key===null?nt:an.key),j=p(an,j,nt),Ke===null?qe=an:Ke.sibling=an,Ke=an);return t&&Ze.forEach(function(hr){return i(Y,hr)}),zt&&Nr(Y,nt),qe}function Ge(Y,j,Z,Te){var qe=ce(Z);if(typeof qe!="function")throw Error(n(150));if(Z=qe.call(Z),Z==null)throw Error(n(151));for(var Ke=qe=null,Ze=j,nt=j=0,an=null,Tt=Z.next();Ze!==null&&!Tt.done;nt++,Tt=Z.next()){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var hr=ge(Y,Ze,Tt.value,Te);if(hr===null){Ze===null&&(Ze=an);break}t&&Ze&&hr.alternate===null&&i(Y,Ze),j=p(hr,j,nt),Ke===null?qe=hr:Ke.sibling=hr,Ke=hr,Ze=an}if(Tt.done)return a(Y,Ze),zt&&Nr(Y,nt),qe;if(Ze===null){for(;!Tt.done;nt++,Tt=Z.next())Tt=Se(Y,Tt.value,Te),Tt!==null&&(j=p(Tt,j,nt),Ke===null?qe=Tt:Ke.sibling=Tt,Ke=Tt);return zt&&Nr(Y,nt),qe}for(Ze=l(Y,Ze);!Tt.done;nt++,Tt=Z.next())Tt=Ie(Ze,Y,nt,Tt.value,Te),Tt!==null&&(t&&Tt.alternate!==null&&Ze.delete(Tt.key===null?nt:Tt.key),j=p(Tt,j,nt),Ke===null?qe=Tt:Ke.sibling=Tt,Ke=Tt);return t&&Ze.forEach(function(m0){return i(Y,m0)}),zt&&Nr(Y,nt),qe}function qt(Y,j,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===k&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case G:e:{for(var qe=Z.key,Ke=j;Ke!==null;){if(Ke.key===qe){if(qe=Z.type,qe===k){if(Ke.tag===7){a(Y,Ke.sibling),j=u(Ke,Z.props.children),j.return=Y,Y=j;break e}}else if(Ke.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===oe&&lh(qe)===Ke.type){a(Y,Ke.sibling),j=u(Ke,Z.props),j.ref=ga(Y,Ke,Z),j.return=Y,Y=j;break e}a(Y,Ke);break}else i(Y,Ke);Ke=Ke.sibling}Z.type===k?(j=Or(Z.props.children,Y.mode,Te,Z.key),j.return=Y,Y=j):(Te=qo(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=ga(Y,j,Z),Te.return=Y,Y=Te)}return w(Y);case F:e:{for(Ke=Z.key;j!==null;){if(j.key===Ke)if(j.tag===4&&j.stateNode.containerInfo===Z.containerInfo&&j.stateNode.implementation===Z.implementation){a(Y,j.sibling),j=u(j,Z.children||[]),j.return=Y,Y=j;break e}else{a(Y,j);break}else i(Y,j);j=j.sibling}j=gu(Z,Y.mode,Te),j.return=Y,Y=j}return w(Y);case oe:return Ke=Z._init,qt(Y,j,Ke(Z._payload),Te)}if(We(Z))return He(Y,j,Z,Te);if(ce(Z))return Ge(Y,j,Z,Te);wo(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,j!==null&&j.tag===6?(a(Y,j.sibling),j=u(j,Z),j.return=Y,Y=j):(a(Y,j),j=mu(Z,Y.mode,Te),j.return=Y,Y=j),w(Y)):a(Y,j)}return qt}var ms=ch(!0),uh=ch(!1),Eo=nr(null),To=null,gs=null,Tc=null;function bc(){Tc=gs=To=null}function Ac(t){var i=Eo.current;Ot(Eo),t._currentValue=i}function Cc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function xs(t,i){To=t,Tc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(Tc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(To===null)throw Error(n(308));gs=t,To.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Pr=null;function Rc(t){Pr===null?Pr=[t]:Pr.push(t)}function dh(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,Rc(i)):(a.next=u.next,u.next=a),i.interleaved=a,Ni(t,l)}function Ni(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var sr=!1;function Nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Et&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ni(t,a)}return u=l.interleaved,u===null?(i.next=i,Rc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ni(t,a)}function bo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,nn(t,a)}}function hh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?u=p=i:p=p.next=i}else u=p=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ao(t,i,a,l){var u=t.updateQueue;sr=!1;var p=u.firstBaseUpdate,w=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var O=I,ne=O.next;O.next=null,w===null?p=ne:w.next=ne,w=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==w&&(I===null?_e.firstBaseUpdate=ne:I.next=ne,_e.lastBaseUpdate=O))}if(p!==null){var Se=u.baseState;w=0,_e=ne=O=null,I=p;do{var ge=I.lane,Ie=I.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=t,Ge=I;switch(ge=i,Ie=a,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Se=He.call(Ie,Se,ge);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ge=typeof He=="function"?He.call(Ie,Se,ge):He,ge==null)break e;Se=re({},Se,ge);break e;case 2:sr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ne=_e=Ie,O=Se):_e=_e.next=Ie,w|=ge;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(_e===null&&(O=Se),u.baseState=O,u.firstBaseUpdate=ne,u.lastBaseUpdate=_e,i=u.shared.interleaved,i!==null){u=i;do w|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Ir|=w,t.lanes=w,t.memoizedState=Se}}function ph(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var xa={},xi=nr(xa),va=nr(xa),_a=nr(xa);function Dr(t){if(t===xa)throw Error(n(174));return t}function Pc(t,i){switch(It(_a,i),It(va,t),It(xi,xa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Xe(i,t)}Ot(xi),It(xi,i)}function vs(){Ot(xi),Ot(va),Ot(_a)}function mh(t){Dr(_a.current);var i=Dr(xi.current),a=Xe(i,t.type);i!==a&&(It(va,t),It(xi,a))}function Dc(t){va.current===t&&(Ot(xi),Ot(va))}var Vt=nr(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lc=[];function Ic(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Ro=R.ReactCurrentDispatcher,Uc=R.ReactCurrentBatchConfig,Lr=0,jt=null,Zt=null,rn=null,No=!1,ya=!1,Sa=0,Fx=0;function pn(){throw Error(n(321))}function kc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ei(t[a],i[a]))return!1;return!0}function Fc(t,i,a,l,u,p){if(Lr=p,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?Hx:Vx,t=a(l,u),ya){p=0;do{if(ya=!1,Sa=0,25<=p)throw Error(n(301));p+=1,rn=Zt=null,i.updateQueue=null,Ro.current=jx,t=a(l,u)}while(ya)}if(Ro.current=Lo,i=Zt!==null&&Zt.next!==null,Lr=0,rn=Zt=jt=null,No=!1,i)throw Error(n(300));return t}function Oc(){var t=Sa!==0;return Sa=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?jt.memoizedState=rn=t:rn=rn.next=t,rn}function $n(){if(Zt===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=rn===null?jt.memoizedState:rn.next;if(i!==null)rn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?jt.memoizedState=rn=t:rn=rn.next=t}return rn}function Ma(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Zt,u=l.baseQueue,p=a.pending;if(p!==null){if(u!==null){var w=u.next;u.next=p.next,p.next=w}l.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,l=l.baseState;var I=w=null,O=null,ne=p;do{var _e=ne.lane;if((Lr&_e)===_e)O!==null&&(O=O.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var Se={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};O===null?(I=O=Se,w=l):O=O.next=Se,jt.lanes|=_e,Ir|=_e}ne=ne.next}while(ne!==null&&ne!==p);O===null?w=l:O.next=I,ei(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=O,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do p=u.lane,jt.lanes|=p,Ir|=p,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,p=i.memoizedState;if(u!==null){a.pending=null;var w=u=u.next;do p=t(p,w.action),w=w.next;while(w!==u);ei(p,i.memoizedState)||(Rn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function gh(){}function xh(t,i){var a=jt,l=$n(),u=i(),p=!ei(l.memoizedState,u);if(p&&(l.memoizedState=u,Rn=!0),l=l.queue,Hc(yh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,wa(9,_h.bind(null,a,l,u,i),void 0,null),sn===null)throw Error(n(349));(Lr&30)!==0||vh(a,i,u)}return u}function vh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function _h(t,i,a,l){i.value=a,i.getSnapshot=l,Sh(i)&&Mh(t)}function yh(t,i,a){return a(function(){Sh(i)&&Mh(t)})}function Sh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ei(t,a)}catch{return!0}}function Mh(t){var i=Ni(t,1);i!==null&&si(i,t,1,-1)}function wh(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},i.queue=t,t=t.dispatch=zx.bind(null,jt,t),[i.memoizedState,t]}function wa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Eh(){return $n().memoizedState}function Po(t,i,a,l){var u=vi();jt.flags|=t,u.memoizedState=wa(1|i,a,void 0,l===void 0?null:l)}function Do(t,i,a,l){var u=$n();l=l===void 0?null:l;var p=void 0;if(Zt!==null){var w=Zt.memoizedState;if(p=w.destroy,l!==null&&kc(l,w.deps)){u.memoizedState=wa(i,a,p,l);return}}jt.flags|=t,u.memoizedState=wa(1|i,a,p,l)}function Th(t,i){return Po(8390656,8,t,i)}function Hc(t,i){return Do(2048,8,t,i)}function bh(t,i){return Do(4,2,t,i)}function Ah(t,i){return Do(4,4,t,i)}function Ch(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Rh(t,i,a){return a=a!=null?a.concat([t]):null,Do(4,4,Ch.bind(null,i,t),a)}function Vc(){}function Nh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Ph(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Dh(t,i,a){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=a):(ei(a,i)||(a=Dt(),jt.lanes|=a,Ir|=a,t.baseState=!0),i)}function Ox(t,i){var a=wt;wt=a!==0&&4>a?a:4,t(!0);var l=Uc.transition;Uc.transition={};try{t(!1),i()}finally{wt=a,Uc.transition=l}}function Lh(){return $n().memoizedState}function Bx(t,i,a){var l=ur(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Ih(t))Uh(i,a);else if(a=dh(t,i,a,l),a!==null){var u=wn();si(a,t,l,u),kh(a,i,l)}}function zx(t,i,a){var l=ur(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ih(t))Uh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,I=p(w,a);if(u.hasEagerState=!0,u.eagerState=I,ei(I,w)){var O=i.interleaved;O===null?(u.next=u,Rc(i)):(u.next=O.next,O.next=u),i.interleaved=u;return}}catch{}finally{}a=dh(t,i,u,l),a!==null&&(u=wn(),si(a,t,l,u),kh(a,i,l))}}function Ih(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Uh(t,i){ya=No=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function kh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,nn(t,a)}}var Lo={readContext:qn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Hx={readContext:qn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Th,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Po(4194308,4,Ch.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Po(4194308,4,t,i)},useInsertionEffect:function(t,i){return Po(4,2,t,i)},useMemo:function(t,i){var a=vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=vi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Bx.bind(null,jt,t),[l.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:wh,useDebugValue:Vc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=wh(!1),i=t[0];return t=Ox.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=jt,u=vi();if(zt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),sn===null)throw Error(n(349));(Lr&30)!==0||vh(l,i,a)}u.memoizedState=a;var p={value:a,getSnapshot:i};return u.queue=p,Th(yh.bind(null,l,p,t),[t]),l.flags|=2048,wa(9,_h.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=vi(),i=sn.identifierPrefix;if(zt){var a=Ri,l=Ci;a=(l&~(1<<32-at(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Sa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Fx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Vx={readContext:qn,useCallback:Nh,useContext:qn,useEffect:Hc,useImperativeHandle:Rh,useInsertionEffect:bh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Bc,useRef:Eh,useState:function(){return Bc(Ma)},useDebugValue:Vc,useDeferredValue:function(t){var i=$n();return Dh(i,Zt.memoizedState,t)},useTransition:function(){var t=Bc(Ma)[0],i=$n().memoizedState;return[t,i]},useMutableSource:gh,useSyncExternalStore:xh,useId:Lh,unstable_isNewReconciler:!1},jx={readContext:qn,useCallback:Nh,useContext:qn,useEffect:Hc,useImperativeHandle:Rh,useInsertionEffect:bh,useLayoutEffect:Ah,useMemo:Ph,useReducer:zc,useRef:Eh,useState:function(){return zc(Ma)},useDebugValue:Vc,useDeferredValue:function(t){var i=$n();return Zt===null?i.memoizedState=t:Dh(i,Zt.memoizedState,t)},useTransition:function(){var t=zc(Ma)[0],i=$n().memoizedState;return[t,i]},useMutableSource:gh,useSyncExternalStore:xh,useId:Lh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function jc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:re({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Io={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=wn(),u=ur(t),p=Pi(l,u);p.payload=i,a!=null&&(p.callback=a),i=ar(t,p,u),i!==null&&(si(i,t,u,l),bo(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=wn(),u=ur(t),p=Pi(l,u);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ar(t,p,u),i!==null&&(si(i,t,u,l),bo(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=wn(),l=ur(t),u=Pi(a,l);u.tag=2,i!=null&&(u.callback=i),i=ar(t,u,l),i!==null&&(si(i,t,l,a),bo(i,t,l))}};function Fh(t,i,a,l,u,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!ca(a,l)||!ca(u,p):!0}function Oh(t,i,a){var l=!1,u=ir,p=i.contextType;return typeof p=="object"&&p!==null?p=qn(p):(u=Cn(i)?Cr:hn.current,l=i.contextTypes,p=(l=l!=null)?ds(t,u):ir),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Io,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Bh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Io.enqueueReplaceState(i,i.state,null)}function Gc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Nc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=qn(p):(p=Cn(i)?Cr:hn.current,u.context=ds(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(jc(t,i,p,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Io.enqueueReplaceState(u,u.state,null),Ao(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var a="",l=i;do a+=de(l),l=l.return;while(l);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Wc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Xc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Gx=typeof WeakMap=="function"?WeakMap:Map;function zh(t,i,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Ho||(Ho=!0,ou=l),Xc(t,i)},a}function Hh(t,i,a){a=Pi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){Xc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Xc(t,i),typeof l!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Vh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Gx;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=r0.bind(null,t,i,a),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gh(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pi(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Wx=R.ReactCurrentOwner,Rn=!1;function Mn(t,i,a,l){i.child=t===null?uh(i,null,a,l):ms(i,t.child,a,l)}function Wh(t,i,a,l,u){a=a.render;var p=i.ref;return xs(i,u),l=Fc(t,i,a,l,p,u),a=Oc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Di(t,i,u)):(zt&&a&&yc(i),i.flags|=1,Mn(t,i,l,u),i.child)}function Xh(t,i,a,l,u){if(t===null){var p=a.type;return typeof p=="function"&&!pu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,qh(t,i,p,l,u)):(t=qo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:ca,a(w,l)&&t.ref===i.ref)return Di(t,i,u)}return i.flags|=1,t=fr(p,l),t.ref=i.ref,t.return=i,i.child=t}function qh(t,i,a,l,u){if(t!==null){var p=t.memoizedProps;if(ca(p,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,Di(t,i,u)}return qc(t,i,a,l,u)}function $h(t,i,a){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ss,zn),zn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(Ss,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,It(Ss,zn),zn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,It(Ss,zn),zn|=l;return Mn(t,i,u,a),i.child}function Yh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function qc(t,i,a,l,u){var p=Cn(a)?Cr:hn.current;return p=ds(i,p),xs(i,u),a=Fc(t,i,a,l,p,u),l=Oc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Di(t,i,u)):(zt&&l&&yc(i),i.flags|=1,Mn(t,i,a,u),i.child)}function Kh(t,i,a,l,u){if(Cn(a)){var p=!0;vo(i)}else p=!1;if(xs(i,u),i.stateNode===null)ko(t,i),Oh(i,a,l),Gc(i,a,l,u),l=!0;else if(t===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var O=w.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=qn(ne):(ne=Cn(a)?Cr:hn.current,ne=ds(i,ne));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==l||O!==ne)&&Bh(i,w,l,ne),sr=!1;var ge=i.memoizedState;w.state=ge,Ao(i,l,w,u),O=i.memoizedState,I!==l||ge!==O||An.current||sr?(typeof _e=="function"&&(jc(i,a,_e,l),O=i.memoizedState),(I=sr||Fh(i,a,I,l,ge,O,ne))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),w.props=l,w.state=O,w.context=ne,l=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,fh(t,i),I=i.memoizedProps,ne=i.type===i.elementType?I:ni(i.type,I),w.props=ne,Se=i.pendingProps,ge=w.context,O=a.contextType,typeof O=="object"&&O!==null?O=qn(O):(O=Cn(a)?Cr:hn.current,O=ds(i,O));var Ie=a.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Se||ge!==O)&&Bh(i,w,l,O),sr=!1,ge=i.memoizedState,w.state=ge,Ao(i,l,w,u);var He=i.memoizedState;I!==Se||ge!==He||An.current||sr?(typeof Ie=="function"&&(jc(i,a,Ie,l),He=i.memoizedState),(ne=sr||Fh(i,a,ne,l,ge,He,O)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,He,O),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,He,O)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),w.props=l,w.state=He,w.context=O,l=ne):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return $c(t,i,a,l,p,u)}function $c(t,i,a,l,u,p){Yh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return u&&th(i,a,!1),Di(t,i,p);l=i.stateNode,Wx.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,I,p)):Mn(t,i,I,p),i.memoizedState=l.state,u&&th(i,a,!0),i.child}function Zh(t){var i=t.stateNode;i.pendingContext?Jf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Jf(t,i.context,!1),Pc(t,i.containerInfo)}function Qh(t,i,a,l,u){return ps(),Ec(u),i.flags|=256,Mn(t,i,a,l),i.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jh(t,i,a){var l=i.pendingProps,u=Vt.current,p=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),It(Vt,u&1),t===null)return wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=$o(w,l,0,null),t=Or(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Kc(a),i.memoizedState=Yc,t):Zc(i,w));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return Xx(t,i,w,l,I,u,a);if(p){p=l.fallback,w=i.mode,u=t.child,I=u.sibling;var O={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=fr(u,O),l.subtreeFlags=u.subtreeFlags&14680064),I!==null?p=fr(I,p):(p=Or(p,w,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?Kc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~a,i.memoizedState=Yc,l}return p=t.child,t=p.sibling,l=fr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Zc(t,i){return i=$o({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Uo(t,i,a,l){return l!==null&&Ec(l),ms(i,t.child,null,a),t=Zc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Xx(t,i,a,l,u,p,w){if(a)return i.flags&256?(i.flags&=-257,l=Wc(Error(n(422))),Uo(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=$o({mode:"visible",children:l.children},u,0,null),p=Or(p,u,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,w),i.child.memoizedState=Kc(w),i.memoizedState=Yc,p);if((i.mode&1)===0)return Uo(t,i,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=Wc(p,l,void 0),Uo(t,i,w,l)}if(I=(w&t.childLanes)!==0,Rn||I){if(l=sn,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ni(t,u),si(l,t,u,-1))}return hu(),l=Wc(Error(n(421))),Uo(t,i,w,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=s0.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,Bn=tr(u.nextSibling),On=i,zt=!0,ti=null,t!==null&&(Wn[Xn++]=Ci,Wn[Xn++]=Ri,Wn[Xn++]=Rr,Ci=t.id,Ri=t.overflow,Rr=i),i=Zc(i,l.children),i.flags|=4096,i)}function ep(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cc(t.return,i,a)}function Qc(t,i,a,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=u)}function tp(t,i,a){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(Mn(t,i,l.children,a),l=Vt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,a,i);else if(t.tag===19)ep(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(It(Vt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Qc(i,!1,u,a,p);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Co(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Qc(i,!0,a,null,p);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ko(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=fr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=fr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function qx(t,i,a){switch(i.tag){case 3:Zh(i),ps();break;case 5:mh(i);break;case 1:Cn(i.type)&&vo(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;It(Eo,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(It(Vt,Vt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Jh(t,i,a):(It(Vt,Vt.current&1),t=Di(t,i,a),t!==null?t.sibling:null);It(Vt,Vt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return tp(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),It(Vt,Vt.current),l)break;return null;case 22:case 23:return i.lanes=0,$h(t,i,a)}return Di(t,i,a)}var np,Jc,ip,rp;np=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jc=function(){},ip=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Dr(xi.current);var p=null;switch(a){case"input":u=B(t,u),l=B(t,l),p=[];break;case"select":u=re({},u,{value:void 0}),l=re({},l,{value:void 0}),p=[];break;case"textarea":u=E(t,u),l=E(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=mo)}ht(a,l);var w;a=null;for(ne in u)if(!l.hasOwnProperty(ne)&&u.hasOwnProperty(ne)&&u[ne]!=null)if(ne==="style"){var I=u[ne];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in l){var O=l[ne];if(I=u!=null?u[ne]:void 0,l.hasOwnProperty(ne)&&O!==I&&(O!=null||I!=null))if(ne==="style")if(I){for(w in I)!I.hasOwnProperty(w)||O&&O.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in O)O.hasOwnProperty(w)&&I[w]!==O[w]&&(a||(a={}),a[w]=O[w])}else a||(p||(p=[]),p.push(ne,a)),a=O;else ne==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(p=p||[]).push(ne,O)):ne==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(ne,""+O):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(O!=null&&ne==="onScroll"&&Ft("scroll",t),p||I===O||(p=[])):(p=p||[]).push(ne,O))}a&&(p=p||[]).push("style",a);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},rp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ea(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function $x(t,i,a){var l=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Cn(i.type)&&xo(),mn(i),null;case 3:return l=i.stateNode,vs(),Ot(An),Ot(hn),Ic(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Mo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(uu(ti),ti=null))),Jc(t,i),mn(i),null;case 5:Dc(i);var u=Dr(_a.current);if(a=i.type,t!==null&&i.stateNode!=null)ip(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=Dr(xi.current),Mo(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[gi]=i,l[pa]=p,t=(i.mode&1)!==0,a){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(u=0;u<da.length;u++)Ft(da[u],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":_n(l,p),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",l);break;case"textarea":J(l,p),Ft("invalid",l)}ht(a,p),u=null;for(var w in p)if(p.hasOwnProperty(w)){var I=p[w];w==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&po(l.textContent,I,t),u=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&po(l.textContent,I,t),u=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Ft("scroll",l)}switch(a){case"input":Rt(l),$e(l,p,!0);break;case"textarea":Rt(l),ve(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=mo)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[gi]=i,t[pa]=l,np(t,i,!1,!1),i.stateNode=t;e:{switch(w=it(a,l),a){case"dialog":Ft("cancel",t),Ft("close",t),u=l;break;case"iframe":case"object":case"embed":Ft("load",t),u=l;break;case"video":case"audio":for(u=0;u<da.length;u++)Ft(da[u],t);u=l;break;case"source":Ft("error",t),u=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),u=l;break;case"details":Ft("toggle",t),u=l;break;case"input":_n(t,l),u=B(t,l),Ft("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=re({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":J(t,l),u=E(t,l),Ft("invalid",t);break;default:u=l}ht(a,u),I=u;for(p in I)if(I.hasOwnProperty(p)){var O=I[p];p==="style"?et(t,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(t,O)):p==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&ut(t,O):typeof O=="number"&&ut(t,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?O!=null&&p==="onScroll"&&Ft("scroll",t):O!=null&&D(t,p,O,w))}switch(a){case"input":Rt(t),$e(t,l,!1);break;case"textarea":Rt(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ye(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?P(t,!!l.multiple,p,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=mo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)rp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Dr(_a.current),Dr(xi.current),Mo(i)){if(l=i.stateNode,a=i.memoizedProps,l[gi]=i,(p=l.nodeValue!==a)&&(t=On,t!==null))switch(t.tag){case 3:po(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[gi]=i,i.stateNode=l}return mn(i),null;case 13:if(Ot(Vt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)oh(),ps(),i.flags|=98560,p=!1;else if(p=Mo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[gi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),p=!1}else ti!==null&&(uu(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Vt.current&1)!==0?Qt===0&&(Qt=3):hu())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return vs(),Jc(t,i),t===null&&fa(i.stateNode.containerInfo),mn(i),null;case 10:return Ac(i.type._context),mn(i),null;case 17:return Cn(i.type)&&xo(),mn(i),null;case 19:if(Ot(Vt),p=i.memoizedState,p===null)return mn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)Ea(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Co(t),w!==null){for(i.flags|=128,Ea(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return It(Vt,Vt.current&1|2),i.child}t=t.sibling}p.tail!==null&&K()>Ms&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304)}else{if(!l)if(t=Co(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!zt)return mn(i),null}else 2*K()-p.renderingStartTime>Ms&&a!==1073741824&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(a=p.last,a!==null?a.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=K(),i.sibling=null,a=Vt.current,It(Vt,l?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return fu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(zn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Yx(t,i){switch(Sc(i),i.tag){case 1:return Cn(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Ot(An),Ot(hn),Ic(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Ot(Vt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Vt),null;case 4:return vs(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Fo=!1,gn=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ys(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Xt(t,i,l)}else a.current=null}function eu(t,i,a){try{a()}catch(l){Xt(t,i,l)}}var sp=!1;function Zx(t,i){if(fc=no,t=Ff(),rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,I=-1,O=-1,ne=0,_e=0,Se=t,ge=null;t:for(;;){for(var Ie;Se!==a||u!==0&&Se.nodeType!==3||(I=w+u),Se!==p||l!==0&&Se.nodeType!==3||(O=w+l),Se.nodeType===3&&(w+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ge=Se,Se=Ie;for(;;){if(Se===t)break t;if(ge===a&&++ne===u&&(I=w),ge===p&&++_e===l&&(O=w),(Ie=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ie}a=I===-1||O===-1?null:{start:I,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(hc={focusedElem:t,selectionRange:a},no=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,qt=He.memoizedState,Y=i.stateNode,j=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ni(i.type,Ge),qt);Y.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Xt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return He=sp,sp=!1,He}function Ta(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&eu(i,a,p)}u=u.next}while(u!==l)}}function Oo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function tu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function ap(t){var i=t.alternate;i!==null&&(t.alternate=null,ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[pa],delete i[xc],delete i[Lx],delete i[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function op(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=mo));else if(l!==4&&(t=t.child,t!==null))for(nu(t,i,a),t=t.sibling;t!==null;)nu(t,i,a),t=t.sibling}function iu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,a),t=t.sibling;t!==null;)iu(t,i,a),t=t.sibling}var cn=null,ii=!1;function or(t,i,a){for(a=a.child;a!==null;)cp(t,i,a),a=a.sibling}function cp(t,i,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:gn||ys(a,i);case 6:var l=cn,u=ii;cn=null,or(t,i,a),cn=l,ii=u,cn!==null&&(ii?(t=cn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ii?(t=cn,a=a.stateNode,t.nodeType===8?gc(t.parentNode,a):t.nodeType===1&&gc(t,a),ia(t)):gc(cn,a.stateNode));break;case 4:l=cn,u=ii,cn=a.stateNode.containerInfo,ii=!0,or(t,i,a),cn=l,ii=u;break;case 0:case 11:case 14:case 15:if(!gn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&eu(a,i,w),u=u.next}while(u!==l)}or(t,i,a);break;case 1:if(!gn&&(ys(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Xt(a,i,I)}or(t,i,a);break;case 21:or(t,i,a);break;case 22:a.mode&1?(gn=(l=gn)||a.memoizedState!==null,or(t,i,a),gn=l):or(t,i,a);break;default:or(t,i,a)}}function up(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Kx),i.forEach(function(l){var u=a0.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function ri(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var p=t,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,ii=!1;break e;case 3:cn=I.stateNode.containerInfo,ii=!0;break e;case 4:cn=I.stateNode.containerInfo,ii=!0;break e}I=I.return}if(cn===null)throw Error(n(160));cp(p,w,u),cn=null,ii=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(ne){Xt(u,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,t),i=i.sibling}function dp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),_i(t),l&4){try{Ta(3,t,t.return),Oo(3,t)}catch(Ge){Xt(t,t.return,Ge)}try{Ta(5,t,t.return)}catch(Ge){Xt(t,t.return,Ge)}}break;case 1:ri(i,t),_i(t),l&512&&a!==null&&ys(a,a.return);break;case 5:if(ri(i,t),_i(t),l&512&&a!==null&&ys(a,a.return),t.flags&32){var u=t.stateNode;try{ut(u,"")}catch(Ge){Xt(t,t.return,Ge)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,w=a!==null?a.memoizedProps:p,I=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&mt(u,p),it(I,w);var ne=it(I,p);for(w=0;w<O.length;w+=2){var _e=O[w],Se=O[w+1];_e==="style"?et(u,Se):_e==="dangerouslySetInnerHTML"?Ue(u,Se):_e==="children"?ut(u,Se):D(u,_e,Se,ne)}switch(I){case"input":ft(u,p);break;case"textarea":me(u,p);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?P(u,!!p.multiple,Ie,!1):ge!==!!p.multiple&&(p.defaultValue!=null?P(u,!!p.multiple,p.defaultValue,!0):P(u,!!p.multiple,p.multiple?[]:"",!1))}u[pa]=p}catch(Ge){Xt(t,t.return,Ge)}}break;case 6:if(ri(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(Ge){Xt(t,t.return,Ge)}}break;case 3:if(ri(i,t),_i(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ia(i.containerInfo)}catch(Ge){Xt(t,t.return,Ge)}break;case 4:ri(i,t),_i(t);break;case 13:ri(i,t),_i(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(au=K())),l&4&&up(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(gn=(ne=gn)||_e,ri(i,t),gn=ne):ri(i,t),_i(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!_e&&(t.mode&1)!==0)for(ke=t,_e=t.child;_e!==null;){for(Se=ke=_e;ke!==null;){switch(ge=ke,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ta(4,ge,ge.return);break;case 1:ys(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Xt(l,a,Ge)}}break;case 5:ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){pp(Se);continue}}Ie!==null?(Ie.return=ge,ke=Ie):pp(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{u=Se.stateNode,ne?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Se.stateNode,O=Se.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Qe("display",w))}catch(Ge){Xt(t,t.return,Ge)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(Ge){Xt(t,t.return,Ge)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ri(i,t),_i(t),l&4&&up(t);break;case 21:break;default:ri(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(op(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ut(u,""),l.flags&=-33);var p=lp(t);iu(t,p,u);break;case 3:case 4:var w=l.stateNode.containerInfo,I=lp(t);nu(t,I,w);break;default:throw Error(n(161))}}catch(O){Xt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Qx(t,i,a){ke=t,fp(t)}function fp(t,i,a){for(var l=(t.mode&1)!==0;ke!==null;){var u=ke,p=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||Fo;if(!w){var I=u.alternate,O=I!==null&&I.memoizedState!==null||gn;I=Fo;var ne=gn;if(Fo=w,(gn=O)&&!ne)for(ke=u;ke!==null;)w=ke,O=w.child,w.tag===22&&w.memoizedState!==null?mp(u):O!==null?(O.return=w,ke=O):mp(u);for(;p!==null;)ke=p,fp(p),p=p.sibling;ke=u,Fo=I,gn=ne}hp(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,ke=p):hp(t)}}function hp(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Oo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!gn)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:ni(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ph(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ph(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ia(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&tu(i)}catch(ge){Xt(i,i.return,ge)}}if(i===t){ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,ke=a;break}ke=i.return}}function pp(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ke=a;break}ke=i.return}}function mp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Oo(4,i)}catch(O){Xt(i,a,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(O){Xt(i,u,O)}}var p=i.return;try{tu(i)}catch(O){Xt(i,p,O)}break;case 5:var w=i.return;try{tu(i)}catch(O){Xt(i,w,O)}}}catch(O){Xt(i,i.return,O)}if(i===t){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var Jx=Math.ceil,Bo=R.ReactCurrentDispatcher,ru=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,Et=0,sn=null,$t=null,un=0,zn=0,Ss=nr(0),Qt=0,ba=null,Ir=0,zo=0,su=0,Aa=null,Nn=null,au=0,Ms=1/0,Li=null,Ho=!1,ou=null,lr=null,Vo=!1,cr=null,jo=0,Ca=0,lu=null,Go=-1,Wo=0;function wn(){return(Et&6)!==0?K():Go!==-1?Go:Go=K()}function ur(t){return(t.mode&1)===0?1:(Et&2)!==0&&un!==0?un&-un:kx.transition!==null?(Wo===0&&(Wo=Dt()),Wo):(t=wt,t!==0||(t=window.event,t=t===void 0?16:xf(t.type)),t)}function si(t,i,a,l){if(50<Ca)throw Ca=0,lu=null,Error(n(185));tn(t,a,l),((Et&2)===0||t!==sn)&&(t===sn&&((Et&2)===0&&(zo|=a),Qt===4&&dr(t,un)),Pn(t,l),a===1&&Et===0&&(i.mode&1)===0&&(Ms=K()+500,_o&&rr()))}function Pn(t,i){var a=t.callbackNode;Sn(t,i);var l=dn(t,t===sn?un:0);if(l===0)a!==null&&b(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&b(a),i===1)t.tag===0?Ux(xp.bind(null,t)):nh(xp.bind(null,t)),Px(function(){(Et&6)===0&&rr()}),a=null;else{switch(mi(l)){case 1:a=Me;break;case 4:a=Ce;break;case 16:a=Le;break;case 536870912:a=tt;break;default:a=Le}a=Tp(a,gp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function gp(t,i){if(Go=-1,Wo=0,(Et&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ws()&&t.callbackNode!==a)return null;var l=dn(t,t===sn?un:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Xo(t,l);else{i=l;var u=Et;Et|=2;var p=_p();(sn!==t||un!==i)&&(Li=null,Ms=K()+500,kr(t,i));do try{n0();break}catch(I){vp(t,I)}while(!0);bc(),Bo.current=p,Et=u,$t!==null?i=0:(sn=null,un=0,i=Qt)}if(i!==0){if(i===2&&(u=Ti(t),u!==0&&(l=u,i=cu(t,u))),i===1)throw a=ba,kr(t,0),dr(t,l),Pn(t,K()),a;if(i===6)dr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!e0(u)&&(i=Xo(t,l),i===2&&(p=Ti(t),p!==0&&(l=p,i=cu(t,p))),i===1))throw a=ba,kr(t,0),dr(t,l),Pn(t,K()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Nn,Li);break;case 3:if(dr(t,l),(l&130023424)===l&&(i=au+500-K(),10<i)){if(dn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=mc(Fr.bind(null,t,Nn,Li),i);break}Fr(t,Nn,Li);break;case 4:if(dr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var w=31-at(l);p=1<<w,w=i[w],w>u&&(u=w),l&=~p}if(l=u,l=K()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Jx(l/1960))-l,10<l){t.timeoutHandle=mc(Fr.bind(null,t,Nn,Li),l);break}Fr(t,Nn,Li);break;case 5:Fr(t,Nn,Li);break;default:throw Error(n(329))}}}return Pn(t,K()),t.callbackNode===a?gp.bind(null,t):null}function cu(t,i){var a=Aa;return t.current.memoizedState.isDehydrated&&(kr(t,i).flags|=256),t=Xo(t,i),t!==2&&(i=Nn,Nn=a,i!==null&&uu(i)),t}function uu(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function e0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],p=u.getSnapshot;u=u.value;try{if(!ei(p(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i){for(i&=~su,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-at(i),l=1<<a;t[a]=-1,i&=~l}}function xp(t){if((Et&6)!==0)throw Error(n(327));ws();var i=dn(t,0);if((i&1)===0)return Pn(t,K()),null;var a=Xo(t,i);if(t.tag!==0&&a===2){var l=Ti(t);l!==0&&(i=l,a=cu(t,l))}if(a===1)throw a=ba,kr(t,0),dr(t,i),Pn(t,K()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Nn,Li),Pn(t,K()),null}function du(t,i){var a=Et;Et|=1;try{return t(i)}finally{Et=a,Et===0&&(Ms=K()+500,_o&&rr())}}function Ur(t){cr!==null&&cr.tag===0&&(Et&6)===0&&ws();var i=Et;Et|=1;var a=Yn.transition,l=wt;try{if(Yn.transition=null,wt=1,t)return t()}finally{wt=l,Yn.transition=a,Et=i,(Et&6)===0&&rr()}}function fu(){zn=Ss.current,Ot(Ss)}function kr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Nx(a)),$t!==null)for(a=$t.return;a!==null;){var l=a;switch(Sc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xo();break;case 3:vs(),Ot(An),Ot(hn),Ic();break;case 5:Dc(l);break;case 4:vs();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Ac(l.type._context);break;case 22:case 23:fu()}a=a.return}if(sn=t,$t=t=fr(t.current,null),un=zn=i,Qt=0,ba=null,su=zo=Ir=0,Nn=Aa=null,Pr!==null){for(i=0;i<Pr.length;i++)if(a=Pr[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,p=a.pending;if(p!==null){var w=p.next;p.next=u,l.next=w}a.pending=l}Pr=null}return t}function vp(t,i){do{var a=$t;try{if(bc(),Ro.current=Lo,No){for(var l=jt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}No=!1}if(Lr=0,rn=Zt=jt=null,ya=!1,Sa=0,ru.current=null,a===null||a.return===null){Qt=1,ba=i,$t=null;break}e:{var p=t,w=a.return,I=a,O=i;if(i=un,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=O,_e=I,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=jh(w);if(Ie!==null){Ie.flags&=-257,Gh(Ie,w,I,p,i),Ie.mode&1&&Vh(p,ne,i),i=Ie,O=ne;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(O),i.updateQueue=Ge}else He.add(O);break e}else{if((i&1)===0){Vh(p,ne,i),hu();break e}O=Error(n(426))}}else if(zt&&I.mode&1){var qt=jh(w);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),Gh(qt,w,I,p,i),Ec(_s(O,I));break e}}p=O=_s(O,I),Qt!==4&&(Qt=2),Aa===null?Aa=[p]:Aa.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=zh(p,O,i);hh(p,Y);break e;case 1:I=O;var j=p.type,Z=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(lr===null||!lr.has(Z)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Hh(p,I,i);hh(p,Te);break e}}p=p.return}while(p!==null)}Sp(a)}catch(qe){i=qe,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function _p(){var t=Bo.current;return Bo.current=Lo,t===null?Lo:t}function hu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Ir&268435455)===0&&(zo&268435455)===0||dr(sn,un)}function Xo(t,i){var a=Et;Et|=2;var l=_p();(sn!==t||un!==i)&&(Li=null,kr(t,i));do try{t0();break}catch(u){vp(t,u)}while(!0);if(bc(),Et=a,Bo.current=l,$t!==null)throw Error(n(261));return sn=null,un=0,Qt}function t0(){for(;$t!==null;)yp($t)}function n0(){for(;$t!==null&&!X();)yp($t)}function yp(t){var i=Ep(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?Sp(t):$t=i,ru.current=null}function Sp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=$x(a,i,zn),a!==null){$t=a;return}}else{if(a=Yx(a,i),a!==null){a.flags&=32767,$t=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Qt===0&&(Qt=5)}function Fr(t,i,a){var l=wt,u=Yn.transition;try{Yn.transition=null,wt=1,i0(t,i,a,l)}finally{Yn.transition=u,wt=l}return null}function i0(t,i,a,l){do ws();while(cr!==null);if((Et&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(ln(t,p),t===sn&&($t=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vo||(Vo=!0,Tp(Le,function(){return ws(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var w=wt;wt=1;var I=Et;Et|=4,ru.current=null,Zx(t,a),dp(a,t),wx(hc),no=!!fc,hc=fc=null,t.current=a,Qx(a),ee(),Et=I,wt=w,Yn.transition=p}else t.current=a;if(Vo&&(Vo=!1,cr=t,jo=u),p=t.pendingLanes,p===0&&(lr=null),vt(a.stateNode),Pn(t,K()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ho)throw Ho=!1,t=ou,ou=null,t;return(jo&1)!==0&&t.tag!==0&&ws(),p=t.pendingLanes,(p&1)!==0?t===lu?Ca++:(Ca=0,lu=t):Ca=0,rr(),null}function ws(){if(cr!==null){var t=mi(jo),i=Yn.transition,a=wt;try{if(Yn.transition=null,wt=16>t?16:t,cr===null)var l=!1;else{if(t=cr,cr=null,jo=0,(Et&6)!==0)throw Error(n(331));var u=Et;for(Et|=4,ke=t.current;ke!==null;){var p=ke,w=p.child;if((ke.flags&16)!==0){var I=p.deletions;if(I!==null){for(var O=0;O<I.length;O++){var ne=I[O];for(ke=ne;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:Ta(8,_e,p)}var Se=_e.child;if(Se!==null)Se.return=_e,ke=Se;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ie=_e.return;if(ap(_e),_e===ne){ke=null;break}if(ge!==null){ge.return=Ie,ke=ge;break}ke=Ie}}}var He=p.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var qt=Ge.sibling;Ge.sibling=null,Ge=qt}while(Ge!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ke=w;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ta(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,ke=Y;break e}ke=p.return}}var j=t.current;for(ke=j;ke!==null;){w=ke;var Z=w.child;if((w.subtreeFlags&2064)!==0&&Z!==null)Z.return=w,ke=Z;else e:for(w=j;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Oo(9,I)}}catch(qe){Xt(I,I.return,qe)}if(I===w){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(Et=u,rr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,t)}catch{}l=!0}return l}finally{wt=a,Yn.transition=i}}return!1}function Mp(t,i,a){i=_s(a,i),i=zh(t,i,1),t=ar(t,i,1),i=wn(),t!==null&&(tn(t,1,i),Pn(t,i))}function Xt(t,i,a){if(t.tag===3)Mp(t,t,a);else for(;i!==null;){if(i.tag===3){Mp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(lr===null||!lr.has(l))){t=_s(a,t),t=Hh(i,t,1),i=ar(i,t,1),t=wn(),i!==null&&(tn(i,1,t),Pn(i,t));break}}i=i.return}}function r0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&a,sn===t&&(un&a)===a&&(Qt===4||Qt===3&&(un&130023424)===un&&500>K()-au?kr(t,0):su|=a),Pn(t,i)}function wp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var a=wn();t=Ni(t,i),t!==null&&(tn(t,i,a),Pn(t,a))}function s0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),wp(t,a)}function a0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),wp(t,a)}var Ep;Ep=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,qx(t,i,a);Rn=(t.flags&131072)!==0}else Rn=!1,zt&&(i.flags&1048576)!==0&&ih(i,So,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ko(t,i),t=i.pendingProps;var u=ds(i,hn.current);xs(i,a),u=Fc(null,i,l,t,u,a);var p=Oc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,vo(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Nc(i),u.updater=Io,i.stateNode=u,u._reactInternals=i,Gc(i,l,t,a),i=$c(null,i,l,!0,p,a)):(i.tag=0,zt&&p&&yc(i),Mn(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(ko(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=l0(l),t=ni(l,t),u){case 0:i=qc(null,i,l,t,a);break e;case 1:i=Kh(null,i,l,t,a);break e;case 11:i=Wh(null,i,l,t,a);break e;case 14:i=Xh(null,i,l,ni(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),qc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Kh(t,i,l,u,a);case 3:e:{if(Zh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,fh(t,i),Ao(i,l,null,a);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=_s(Error(n(423)),i),i=Qh(t,i,l,a,u);break e}else if(l!==u){u=_s(Error(n(424)),i),i=Qh(t,i,l,a,u);break e}else for(Bn=tr(i.stateNode.containerInfo.firstChild),On=i,zt=!0,ti=null,a=uh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),l===u){i=Di(t,i,a);break e}Mn(t,i,l,a)}i=i.child}return i;case 5:return mh(i),t===null&&wc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,w=u.children,pc(l,u)?w=null:p!==null&&pc(l,p)&&(i.flags|=32),Yh(t,i),Mn(t,i,w,a),i.child;case 6:return t===null&&wc(i),null;case 13:return Jh(t,i,a);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,a):Mn(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Wh(t,i,l,u,a);case 7:return Mn(t,i,i.pendingProps,a),i.child;case 8:return Mn(t,i,i.pendingProps.children,a),i.child;case 12:return Mn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,w=u.value,It(Eo,l._currentValue),l._currentValue=w,p!==null)if(ei(p.value,w)){if(p.children===u.children&&!An.current){i=Di(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){w=p.child;for(var O=I.firstContext;O!==null;){if(O.context===l){if(p.tag===1){O=Pi(-1,a&-a),O.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),ne.pending=O}}p.lanes|=a,O=p.alternate,O!==null&&(O.lanes|=a),Cc(p.return,a,i),I.lanes|=a;break}O=O.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Cc(w,a,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Mn(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,xs(i,a),u=qn(u),l=l(u),i.flags|=1,Mn(t,i,l,a),i.child;case 14:return l=i.type,u=ni(l,i.pendingProps),u=ni(l.type,u),Xh(t,i,l,u,a);case 15:return qh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),ko(t,i),i.tag=1,Cn(l)?(t=!0,vo(i)):t=!1,xs(i,a),Oh(i,l,u),Gc(i,l,u,a),$c(null,i,l,!0,t,a);case 19:return tp(t,i,a);case 22:return $h(t,i,a)}throw Error(n(156,i.tag))};function Tp(t,i){return Ja(t,i)}function o0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,a,l){return new o0(t,i,a,l)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function l0(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===he)return 14}return 2}function fr(t,i){var a=t.alternate;return a===null?(a=Kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function qo(t,i,a,l,u,p){var w=2;if(l=t,typeof t=="function")pu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case k:return Or(a.children,u,p,i);case V:w=8,u|=8;break;case N:return t=Kn(12,a,i,u|2),t.elementType=N,t.lanes=p,t;case te:return t=Kn(13,a,i,u),t.elementType=te,t.lanes=p,t;case ue:return t=Kn(19,a,i,u),t.elementType=ue,t.lanes=p,t;case le:return $o(a,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:w=10;break e;case z:w=9;break e;case ae:w=11;break e;case he:w=14;break e;case oe:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(w,a,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Or(t,i,a,l){return t=Kn(7,t,l,i),t.lanes=a,t}function $o(t,i,a,l){return t=Kn(22,t,l,i),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function mu(t,i,a){return t=Kn(6,t,null,i),t.lanes=a,t}function gu(t,i,a){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function c0(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function xu(t,i,a,l,u,p,w,I,O){return t=new c0(t,i,a,I,O),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(p),t}function u0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function bp(t){if(!t)return ir;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Cn(a))return eh(t,a,i)}return i}function Ap(t,i,a,l,u,p,w,I,O){return t=xu(a,l,!0,t,u,p,w,I,O),t.context=bp(null),a=t.current,l=wn(),u=ur(a),p=Pi(l,u),p.callback=i??null,ar(a,p,u),t.current.lanes=u,tn(t,u,l),Pn(t,l),t}function Yo(t,i,a,l){var u=i.current,p=wn(),w=ur(u);return a=bp(a),i.context===null?i.context=a:i.pendingContext=a,i=Pi(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ar(u,i,w),t!==null&&(si(t,u,w,p),bo(t,u,w)),w}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function vu(t,i){Cp(t,i),(t=t.alternate)&&Cp(t,i)}function d0(){return null}var Rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _u(t){this._internalRoot=t}Zo.prototype.render=_u.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Yo(t,i,null,null)},Zo.prototype.unmount=_u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){Yo(null,t,null,null)}),i[bi]=null}};function Zo(t){this._internalRoot=t}Zo.prototype.unstable_scheduleHydration=function(t){if(t){var i=ff();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,t),a===0&&mf(t)}};function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function f0(t,i,a,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var ne=Ko(w);p.call(ne)}}var w=Ap(i,l,t,0,null,!1,!1,"",Np);return t._reactRootContainer=w,t[bi]=w.current,fa(t.nodeType===8?t.parentNode:t),Ur(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var I=l;l=function(){var ne=Ko(O);I.call(ne)}}var O=xu(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=O,t[bi]=O.current,fa(t.nodeType===8?t.parentNode:t),Ur(function(){Yo(i,O,a,l)}),O}function Jo(t,i,a,l,u){var p=a._reactRootContainer;if(p){var w=p;if(typeof u=="function"){var I=u;u=function(){var O=Ko(w);I.call(O)}}Yo(i,w,t,u)}else w=f0(a,i,t,u,l);return Ko(w)}uf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(nn(i,a|1),Pn(i,K()),(Et&6)===0&&(Ms=K()+500,rr()))}break;case 13:Ur(function(){var l=Ni(t,1);if(l!==null){var u=wn();si(l,t,1,u)}}),vu(t,1)}},Wl=function(t){if(t.tag===13){var i=Ni(t,134217728);if(i!==null){var a=wn();si(i,t,134217728,a)}vu(t,134217728)}},df=function(t){if(t.tag===13){var i=ur(t),a=Ni(t,i);if(a!==null){var l=wn();si(a,t,i,l)}vu(t,i)}},ff=function(){return wt},hf=function(t,i){var a=wt;try{return wt=t,i()}finally{wt=a}},Ae=function(t,i,a){switch(i){case"input":if(ft(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=go(l);if(!u)throw Error(n(90));Lt(l),ft(l,u)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&P(t,!!a.multiple,i,!1)}},kt=du,Kt=Ur;var h0={usingClientEntryPoint:!1,Events:[ma,cs,go,Ne,rt,du]},Ra={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p0={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Za(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Je=el.inject(p0),Ve=el}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0,Dn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(i))throw Error(n(200));return u0(t,i,null,a)},Dn.createRoot=function(t,i){if(!yu(t))throw Error(n(299));var a=!1,l="",u=Rp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=xu(t,1,!1,null,null,a,!1,l,u),t[bi]=i.current,fa(t.nodeType===8?t.parentNode:t),new _u(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Za(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Ur(t)},Dn.hydrate=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!0,a)},Dn.hydrateRoot=function(t,i,a){if(!yu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,p="",w=Rp;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Ap(i,null,t,1,a??null,u,!1,p,w),t[bi]=i.current,fa(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Zo(i)},Dn.render=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!1,a)},Dn.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1},Dn.unstable_batchedUpdates=du,Dn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,i,a,!1,l)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Op;function w0(){if(Op)return wu.exports;Op=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wu.exports=M0(),wu.exports}var Bp;function E0(){if(Bp)return tl;Bp=1;var s=w0();return tl.createRoot=s.createRoot,tl.hydrateRoot=s.hydrateRoot,tl}var T0=E0();const b0=Gm(T0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=Ut.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:d,...f},m)=>Ut.createElement("svg",{ref:m,...C0,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Wm("lucide",o),...f},[...d.map(([g,_])=>Ut.createElement(g,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(s,e)=>{const n=Ut.forwardRef(({className:r,...o},c)=>Ut.createElement(R0,{ref:c,iconNode:e,className:Wm(`lucide-${A0(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],kl=dt("ArrowRight",N0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Vs=dt("ArrowUpRight",P0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],L0=dt("ArrowUp",D0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],U0=dt("Building2",I0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Xm=dt("Check",k0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qd=dt("CircleAlert",F0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],B0=dt("CircleCheckBig",O0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],za=dt("CircleCheck",z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],qm=dt("CircleHelp",H0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],j0=dt("Clock",V0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],$d=dt("CodeXml",G0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Yd=dt("Compass",W0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],zp=dt("Copy",X0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Fl=dt("Cpu",q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$m=dt("Eye",$0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],K0=dt("FileCheck2",Y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Q0=dt("FileCheck",Z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ym=dt("Globe",J0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Km=dt("Instagram",ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Kd=dt("Layers",tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Zm=dt("Mail",nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],rv=dt("Menu",iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Qm=dt("MessageCircle",sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ov=dt("RefreshCw",av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Jm=dt("Rocket",lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],uv=dt("RotateCcw",cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],fv=dt("Send",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],pv=dt("ShieldAlert",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zd=dt("ShieldCheck",mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],xv=dt("Shield",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],_v=dt("ShoppingBag",vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],eg=dt("Smartphone",yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Wi=dt("Sparkles",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],tg=dt("Target",Mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],Ev=dt("UserCheck",wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],bv=dt("User",Tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],ng=dt("Wrench",Av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ol=dt("X",Cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Nv=dt("Zap",Rv),st={brandName:"Vaibhav Sonkusare — Creative Web Studio",fullName:"Vaibhav Sonkusare",heroHeadline:"Ideas Into Digital Experiences.",heroSupportingHeadline:"Modern websites, built with creativity and AI.",heroSupportingParagraph:"I create modern, responsive websites using AI-powered workflows, no-code tools, and custom development.",email:"sonkusare.doc@gmail.com",instagramHandle:"sonkusare_vaibhav",instagramUrl:"https://www.instagram.com/sonkusare_vaibhav/",isWhatsAppConfigured:!1,logoPlaceholder:"/WebDev/images/sonkusare-vaibhav-logo.png",heroBackgroundImage:"/WebDev/images/vaibhav-bg.jpg",profilePhotoPlaceholder:"/WebDev/images/vaibhav-sonkusare.jpg",aboutHeading:"A Little About Me",aboutBio:["I'm Vaibhav Sonkusare, an independent website creator exploring the possibilities of AI-powered design and development.","I combine creative thinking, modern website tools, and a practical approach to help businesses establish a professional online presence.","I'm building my portfolio around real-world business needs, thoughtful design, and websites that are easy to use."],contactHeadline:"Let's Build Something Great.",contactSupportingText:"Have a business idea, a website to redesign, or a project you want to bring to life? Tell me what you're planning, and let's discuss how I can help.",availabilityStatus:"Open for New International Enquiries"},Jn=({children:s,variant:e="primary",size:n="md",href:r,icon:o,iconPosition:c="right",className:d="",...f})=>{const m="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group",g={sm:"text-xs sm:text-xs px-4 py-2.5 min-h-[44px] gap-1.5",md:"text-sm sm:text-sm px-5 py-3 min-h-[44px] gap-2",lg:"text-base px-7 py-3.5 min-h-[48px] gap-2.5 font-semibold"},_={primary:"bg-gradient-to-r from-neon-cyan via-neon-electric to-neon-violet text-dark-950 font-bold shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/35 hover:scale-[1.02] active:scale-[0.98]",secondary:"bg-dark-800/90 text-white border border-white/10 hover:border-neon-cyan/40 hover:bg-dark-700/90 backdrop-blur-md shadow-md hover:scale-[1.02] active:scale-[0.98]",outline:"border border-slate-700 text-slate-200 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 active:scale-[0.98]",ghost:"text-slate-300 hover:text-white hover:bg-white/5"},v=`${m} ${g[n]} ${_[e]} ${d}`;return r?h.jsxs("a",{href:r,className:v,children:[o&&c==="left"&&h.jsx("span",{className:"transition-transform group-hover:-translate-x-0.5",children:o}),h.jsx("span",{children:s}),o&&c==="right"&&h.jsx("span",{className:"transition-transform group-hover:translate-x-0.5",children:o})]}):h.jsxs("button",{className:v,...f,children:[o&&c==="left"&&h.jsx("span",{className:"transition-transform group-hover:-translate-x-0.5",children:o}),h.jsx("span",{children:s}),o&&c==="right"&&h.jsx("span",{className:"transition-transform group-hover:translate-x-0.5",children:o})]})},Pv=()=>{const[s,e]=Ut.useState(!1),[n,r]=Ut.useState(!1);Ut.useEffect(()=>{const c=()=>{e(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const o=[{name:"Home",href:"#"},{name:"Services",href:"#services"},{name:"Work",href:"#work"},{name:"Process",href:"#process"},{name:"About",href:"#about"},{name:"Contact",href:"#contact"}];return h.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${s?"bg-dark-950/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl":"bg-transparent py-4 sm:py-5"}`,children:[h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("a",{href:"#",className:"flex items-center gap-3 group",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl overflow-hidden bg-dark-900 border border-white/15 group-hover:border-neon-cyan/60 transition-all shadow-md shrink-0",children:h.jsx("img",{src:st.logoPlaceholder,alt:"Vaibhav Sonkusare Logo",className:"w-full h-full object-cover group-hover:scale-105 transition-transform"})}),h.jsxs("div",{className:"text-left",children:[h.jsx("div",{className:"font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5 group-hover:text-neon-cyan transition-colors",children:h.jsx("span",{children:"VAIBHAV SONKUSARE"})}),h.jsx("div",{className:"text-[10px] sm:text-[11px] text-neon-cyan font-mono tracking-wider",children:"CREATIVE WEB STUDIO"})]})]}),h.jsx("nav",{className:"hidden md:flex items-center gap-6 lg:gap-8",children:o.map(c=>h.jsx("a",{href:c.href,className:"text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-neon-cyan after:absolute after:bottom-0 after:left-0 after:transition-all",children:c.name},c.name))}),h.jsxs("div",{className:"hidden lg:flex items-center gap-4",children:[h.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-slate-300",children:[h.jsx(Ym,{className:"w-3.5 h-3.5 text-neon-cyan"}),h.jsx("span",{children:"International / USD"})]}),h.jsx(Jn,{href:"#enquire",variant:"primary",size:"sm",icon:h.jsx(Vs,{className:"w-4 h-4"}),children:"Start a Project"})]}),h.jsxs("div",{className:"flex md:hidden items-center gap-2",children:[h.jsx(Jn,{href:"#enquire",variant:"primary",size:"sm",className:"text-xs px-3.5 py-2.5 min-h-[44px]",children:"Enquire"}),h.jsx("button",{onClick:()=>r(!n),className:"min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-dark-850 border border-white/10 text-slate-300 hover:text-white hover:border-neon-cyan/40 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-colors","aria-label":n?"Close navigation menu":"Open navigation menu","aria-expanded":n,"aria-controls":"mobile-nav-menu",children:n?h.jsx(Ol,{className:"w-5 h-5"}):h.jsx(rv,{className:"w-5 h-5"})})]})]})}),n&&h.jsxs("div",{id:"mobile-nav-menu",className:"md:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200",children:[h.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[h.jsxs("div",{className:"text-xs text-slate-400 font-mono flex items-center gap-1.5",children:[h.jsx(Wi,{className:"w-3.5 h-3.5 text-neon-cyan"}),h.jsx("span",{children:"Creative Web Studio"})]}),h.jsx("div",{className:"px-2.5 py-1 rounded bg-neon-cyan/10 text-neon-cyan text-[10px] font-mono border border-neon-cyan/20",children:"USD / Global"})]}),h.jsx("nav",{className:"flex flex-col space-y-1.5","aria-label":"Mobile Navigation",children:o.map(c=>h.jsx("a",{href:c.href,onClick:()=>r(!1),className:"min-h-[48px] flex items-center px-3.5 rounded-xl hover:bg-white/5 active:bg-white/10 text-base font-medium text-slate-200 hover:text-neon-cyan transition-colors",children:c.name},c.name))}),h.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-col gap-3",children:[h.jsx(Jn,{href:"#enquire",variant:"primary",size:"lg",className:"w-full justify-center min-h-[48px]",onClick:()=>r(!1),children:"Start a Project"}),h.jsxs("div",{className:"text-center text-xs text-slate-400 py-1",children:["Direct email: ",h.jsx("a",{href:`mailto:${st.email}`,className:"text-neon-cyan hover:underline p-1 inline-block",children:st.email})]})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="174",Dv=0,Hp=1,Lv=2,ig=1,Iv=2,Bi=3,wr=0,Un=1,zi=2,Sr=0,Bs=1,Vp=2,jp=3,Gp=4,Uv=5,$r=100,kv=101,Fv=102,Ov=103,Bv=104,zv=200,Hv=201,Vv=202,jv=203,rd=204,sd=205,Gv=206,Wv=207,Xv=208,qv=209,$v=210,Yv=211,Kv=212,Zv=213,Qv=214,ad=0,od=1,ld=2,js=3,cd=4,ud=5,dd=6,fd=7,rg=0,Jv=1,e_=2,Mr=0,t_=1,n_=2,i_=3,r_=4,s_=5,a_=6,o_=7,sg=300,Gs=301,Ws=302,hd=303,pd=304,Bl=306,md=1e3,Kr=1001,gd=1002,di=1003,l_=1004,nl=1005,Si=1006,bu=1007,Zr=1008,Gi=1009,ag=1010,og=1011,Ha=1012,Jd=1013,Qr=1014,Hi=1015,Va=1016,ef=1017,tf=1018,Xs=1020,lg=35902,cg=1021,ug=1022,ui=1023,dg=1024,fg=1025,zs=1026,qs=1027,hg=1028,nf=1029,pg=1030,rf=1031,sf=1033,Tl=33776,bl=33777,Al=33778,Cl=33779,xd=35840,vd=35841,_d=35842,yd=35843,Sd=36196,Md=37492,wd=37496,Ed=37808,Td=37809,bd=37810,Ad=37811,Cd=37812,Rd=37813,Nd=37814,Pd=37815,Dd=37816,Ld=37817,Id=37818,Ud=37819,kd=37820,Fd=37821,Rl=36492,Od=36494,Bd=36495,mg=36283,zd=36284,Hd=36285,Vd=36286,c_=3200,u_=3201,gg=0,d_=1,yr="",Qn="srgb",$s="srgb-linear",Pl="linear",Nt="srgb",Es=7680,Wp=519,f_=512,h_=513,p_=514,xg=515,m_=516,g_=517,x_=518,v_=519,Xp=35044,qp="300 es",Vi=2e3,Dl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,jd=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function __(s,e){return(s%e+e)%e}function Cu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,o,c,d,f,m,g){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,g)}set(e,n,r,o,c,d,f,m,g){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=d,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],m=r[6],g=r[1],_=r[4],v=r[7],y=r[2],M=r[5],T=r[8],C=o[0],S=o[3],x=o[6],L=o[1],D=o[4],R=o[7],G=o[2],F=o[5],k=o[8];return c[0]=d*C+f*L+m*G,c[3]=d*S+f*D+m*F,c[6]=d*x+f*R+m*k,c[1]=g*C+_*L+v*G,c[4]=g*S+_*D+v*F,c[7]=g*x+_*R+v*k,c[2]=y*C+M*L+T*G,c[5]=y*S+M*D+T*F,c[8]=y*x+M*R+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],g=e[7],_=e[8];return n*d*_-n*f*g-r*c*_+r*f*m+o*c*g-o*d*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],g=e[7],_=e[8],v=_*d-f*g,y=f*m-_*c,M=g*c-d*m,T=n*v+r*y+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(o*g-_*r)*C,e[2]=(f*r-o*d)*C,e[3]=y*C,e[4]=(_*n-o*m)*C,e[5]=(o*c-f*n)*C,e[6]=M*C,e[7]=(r*m-g*n)*C,e[8]=(d*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const m=Math.cos(c),g=Math.sin(c);return this.set(r*m,r*g,-r*(m*d+g*f)+d+e,-o*g,o*m,-o*(-g*d+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new ot;function vg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ll(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function y_(){const s=Ll("canvas");return s.style.display="block",s}const $p={};function Wr(s){s in $p||($p[s]=!0,console.warn(s))}function S_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function M_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function w_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Yp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Nt&&(o.r=ji(o.r),o.g=ji(o.g),o.b=ji(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Nt&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===yr?Pl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$s]:{primaries:e,whitePoint:r,transfer:Pl,toXYZ:Yp,fromXYZ:Kp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Yp,fromXYZ:Kp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const bt=E_();function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class T_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Ll("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=ji(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ji(n[r]/255)*255):n[r]=ji(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b_=0;class af{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(Nu(o[d].image)):c.push(Nu(o[d]))}else c=Nu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?T_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A_=0;class kn extends Ks{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,r=Kr,o=Kr,c=Si,d=Zr,f=ui,m=Gi,g=kn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ja(),this.name="",this.source=new af(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=m,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=sg;kn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,r=0,o=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,g=m[0],_=m[4],v=m[8],y=m[1],M=m[5],T=m[9],C=m[2],S=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(v-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+C)<.1&&Math.abs(T+S)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(g+1)/2,R=(M+1)/2,G=(x+1)/2,F=(_+y)/4,k=(v+C)/4,V=(T+S)/4;return D>R&&D>G?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=F/r,c=k/r):R>G?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=F/o,c=V/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=k/c,o=V/c),this.set(r,o,c,n),this}let L=Math.sqrt((S-T)*(S-T)+(v-C)*(v-C)+(y-_)*(y-_));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(v-C)/L,this.z=(y-_)/L,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends Ks{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new kn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new af(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends C_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class _g extends kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R_ extends kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let m=r[o+0],g=r[o+1],_=r[o+2],v=r[o+3];const y=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(f===0){e[n+0]=m,e[n+1]=g,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=y,e[n+1]=M,e[n+2]=T,e[n+3]=C;return}if(v!==C||m!==y||g!==M||_!==T){let S=1-f;const x=m*y+g*M+_*T+v*C,L=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const G=Math.sqrt(D),F=Math.atan2(G,x*L);S=Math.sin(S*F)/G,f=Math.sin(f*F)/G}const R=f*L;if(m=m*S+y*R,g=g*S+M*R,_=_*S+T*R,v=v*S+C*R,S===1-f){const G=1/Math.sqrt(m*m+g*g+_*_+v*v);m*=G,g*=G,_*=G,v*=G}}e[n]=m,e[n+1]=g,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],m=r[o+1],g=r[o+2],_=r[o+3],v=c[d],y=c[d+1],M=c[d+2],T=c[d+3];return e[n]=f*T+_*v+m*M-g*y,e[n+1]=m*T+_*y+g*v-f*M,e[n+2]=g*T+_*M+f*y-m*v,e[n+3]=_*T-f*v-m*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,m=Math.sin,g=f(r/2),_=f(o/2),v=f(c/2),y=m(r/2),M=m(o/2),T=m(c/2);switch(d){case"XYZ":this._x=y*_*v+g*M*T,this._y=g*M*v-y*_*T,this._z=g*_*T+y*M*v,this._w=g*_*v-y*M*T;break;case"YXZ":this._x=y*_*v+g*M*T,this._y=g*M*v-y*_*T,this._z=g*_*T-y*M*v,this._w=g*_*v+y*M*T;break;case"ZXY":this._x=y*_*v-g*M*T,this._y=g*M*v+y*_*T,this._z=g*_*T+y*M*v,this._w=g*_*v-y*M*T;break;case"ZYX":this._x=y*_*v-g*M*T,this._y=g*M*v+y*_*T,this._z=g*_*T-y*M*v,this._w=g*_*v+y*M*T;break;case"YZX":this._x=y*_*v+g*M*T,this._y=g*M*v+y*_*T,this._z=g*_*T-y*M*v,this._w=g*_*v-y*M*T;break;case"XZY":this._x=y*_*v-g*M*T,this._y=g*M*v-y*_*T,this._z=g*_*T+y*M*v,this._w=g*_*v+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],m=n[9],g=n[2],_=n[6],v=n[10],y=r+f+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-g)*M,this._z=(d-o)*M}else if(r>f&&r>v){const M=2*Math.sqrt(1+r-f-v);this._w=(_-m)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+g)/M}else if(f>v){const M=2*Math.sqrt(1+f-r-v);this._w=(c-g)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-f);this._w=(d-o)/M,this._x=(c+g)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,m=n._y,g=n._z,_=n._w;return this._x=r*_+d*f+o*g-c*m,this._y=o*_+d*m+c*f-r*g,this._z=c*_+d*g+r*m-o*f,this._w=d*_-r*f-o*m-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const m=1-f*f;if(m<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(m),_=Math.atan2(g,f),v=Math.sin((1-n)*_)/g,y=Math.sin(n*_)/g;return this._w=d*v+this._w*y,this._x=r*v+this._x*y,this._y=o*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,m=e.w,g=2*(d*o-f*r),_=2*(f*n-c*o),v=2*(c*r-d*n);return this.x=n+m*g+d*v-f*_,this.y=r+m*_+f*g-c*v,this.z=o+m*v+c*_-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,m=n.z;return this.x=o*m-c*f,this.y=c*d-r*m,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new $,Zp=new Ga;class Wa{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ai):ai.fromBufferAttribute(c,d),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),il.copy(r.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),rl.subVectors(this.max,Da),bs.subVectors(e.a,Da),As.subVectors(e.b,Da),Cs.subVectors(e.c,Da),pr.subVectors(As,bs),mr.subVectors(Cs,As),Br.subVectors(bs,Cs);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Br.z,Br.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Br.z,0,-Br.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Br.y,Br.x,0];return!Du(n,bs,As,Cs,rl)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,bs,As,Cs,rl))?!1:(sl.crossVectors(pr,mr),n=[sl.x,sl.y,sl.z],Du(n,bs,As,Cs,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new $,new $,new $,new $,new $,new $,new $,new $],ai=new $,il=new Wa,bs=new $,As=new $,Cs=new $,pr=new $,mr=new $,Br=new $,Da=new $,rl=new $,sl=new $,zr=new $;function Du(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),m=e.dot(zr),g=n.dot(zr),_=r.dot(zr);if(Math.max(-Math.max(m,g,_),Math.min(m,g,_))>f)return!1}return!0}const N_=new Wa,La=new $,Lu=new $;class zl{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):N_.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const n=La.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(La,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(Lu)),this.expandByPoint(La.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new $,Iu=new $,al=new $,gr=new $,Uu=new $,ol=new $,ku=new $;class yg{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Iu.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Iu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(al),f=gr.dot(this.direction),m=-gr.dot(al),g=gr.lengthSq(),_=Math.abs(1-d*d);let v,y,M,T;if(_>0)if(v=d*m-f,y=d*f-m,T=c*_,v>=0)if(y>=-T)if(y<=T){const C=1/_;v*=C,y*=C,M=v*(v+d*y+2*f)+y*(d*v+y+2*m)+g}else y=c,v=Math.max(0,-(d*y+f)),M=-v*v+y*(y+2*m)+g;else y=-c,v=Math.max(0,-(d*y+f)),M=-v*v+y*(y+2*m)+g;else y<=-T?(v=Math.max(0,-(-d*c+f)),y=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+g):y<=T?(v=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+g):(v=Math.max(0,-(d*c+f)),y=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+g);else y=d>0?-c:c,v=Math.max(0,-(d*y+f)),M=-v*v+y*(y+2*m)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Iu).addScaledVector(al,y),M}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),o=Ui.dot(Ui)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,m=r+d;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,m;const g=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,o=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,o=(e.min.x-y.x)*g),_>=0?(c=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),v>=0?(f=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,o,c){Uu.subVectors(n,e),ol.subVectors(r,e),ku.crossVectors(Uu,ol);let d=this.direction.dot(ku),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;gr.subVectors(this.origin,e);const m=f*this.direction.dot(ol.crossVectors(gr,ol));if(m<0)return null;const g=f*this.direction.dot(Uu.cross(gr));if(g<0||m+g>d)return null;const _=-f*gr.dot(ku);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,o,c,d,f,m,g,_,v,y,M,T,C,S){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,g,_,v,y,M,T,C,S)}set(e,n,r,o,c,d,f,m,g,_,v,y,M,T,C,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=d,x[9]=f,x[13]=m,x[2]=g,x[6]=_,x[10]=v,x[14]=y,x[3]=M,x[7]=T,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),d=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),m=Math.cos(o),g=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=d*_,M=d*v,T=f*_,C=f*v;n[0]=m*_,n[4]=-m*v,n[8]=g,n[1]=M+T*g,n[5]=y-C*g,n[9]=-f*m,n[2]=C-y*g,n[6]=T+M*g,n[10]=d*m}else if(e.order==="YXZ"){const y=m*_,M=m*v,T=g*_,C=g*v;n[0]=y+C*f,n[4]=T*f-M,n[8]=d*g,n[1]=d*v,n[5]=d*_,n[9]=-f,n[2]=M*f-T,n[6]=C+y*f,n[10]=d*m}else if(e.order==="ZXY"){const y=m*_,M=m*v,T=g*_,C=g*v;n[0]=y-C*f,n[4]=-d*v,n[8]=T+M*f,n[1]=M+T*f,n[5]=d*_,n[9]=C-y*f,n[2]=-d*g,n[6]=f,n[10]=d*m}else if(e.order==="ZYX"){const y=d*_,M=d*v,T=f*_,C=f*v;n[0]=m*_,n[4]=T*g-M,n[8]=y*g+C,n[1]=m*v,n[5]=C*g+y,n[9]=M*g-T,n[2]=-g,n[6]=f*m,n[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*g,T=f*m,C=f*g;n[0]=m*_,n[4]=C-y*v,n[8]=T*v+M,n[1]=v,n[5]=d*_,n[9]=-f*_,n[2]=-g*_,n[6]=M*v+T,n[10]=y-C*v}else if(e.order==="XZY"){const y=d*m,M=d*g,T=f*m,C=f*g;n[0]=m*_,n[4]=-v,n[8]=g*_,n[1]=y*v+C,n[5]=d*_,n[9]=M*v-T,n[2]=T*v-M,n[6]=f*_,n[10]=C*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P_,e,D_)}lookAt(e,n,r){const o=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),xr.crossVectors(r,Hn),xr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),xr.crossVectors(r,Hn)),xr.normalize(),ll.crossVectors(Hn,xr),o[0]=xr.x,o[4]=ll.x,o[8]=Hn.x,o[1]=xr.y,o[5]=ll.y,o[9]=Hn.y,o[2]=xr.z,o[6]=ll.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],m=r[8],g=r[12],_=r[1],v=r[5],y=r[9],M=r[13],T=r[2],C=r[6],S=r[10],x=r[14],L=r[3],D=r[7],R=r[11],G=r[15],F=o[0],k=o[4],V=o[8],N=o[12],A=o[1],z=o[5],ae=o[9],te=o[13],ue=o[2],he=o[6],oe=o[10],le=o[14],H=o[3],ce=o[7],re=o[11],U=o[15];return c[0]=d*F+f*A+m*ue+g*H,c[4]=d*k+f*z+m*he+g*ce,c[8]=d*V+f*ae+m*oe+g*re,c[12]=d*N+f*te+m*le+g*U,c[1]=_*F+v*A+y*ue+M*H,c[5]=_*k+v*z+y*he+M*ce,c[9]=_*V+v*ae+y*oe+M*re,c[13]=_*N+v*te+y*le+M*U,c[2]=T*F+C*A+S*ue+x*H,c[6]=T*k+C*z+S*he+x*ce,c[10]=T*V+C*ae+S*oe+x*re,c[14]=T*N+C*te+S*le+x*U,c[3]=L*F+D*A+R*ue+G*H,c[7]=L*k+D*z+R*he+G*ce,c[11]=L*V+D*ae+R*oe+G*re,c[15]=L*N+D*te+R*le+G*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],m=e[9],g=e[13],_=e[2],v=e[6],y=e[10],M=e[14],T=e[3],C=e[7],S=e[11],x=e[15];return T*(+c*m*v-o*g*v-c*f*y+r*g*y+o*f*M-r*m*M)+C*(+n*m*M-n*g*y+c*d*y-o*d*M+o*g*_-c*m*_)+S*(+n*g*v-n*f*M-c*d*v+r*d*M+c*f*_-r*g*_)+x*(-o*f*_-n*m*v+n*f*y+o*d*v-r*d*y+r*m*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],g=e[7],_=e[8],v=e[9],y=e[10],M=e[11],T=e[12],C=e[13],S=e[14],x=e[15],L=v*S*g-C*y*g+C*m*M-f*S*M-v*m*x+f*y*x,D=T*y*g-_*S*g-T*m*M+d*S*M+_*m*x-d*y*x,R=_*C*g-T*v*g+T*f*M-d*C*M-_*f*x+d*v*x,G=T*v*m-_*C*m-T*f*y+d*C*y+_*f*S-d*v*S,F=n*L+r*D+o*R+c*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=L*k,e[1]=(C*y*c-v*S*c-C*o*M+r*S*M+v*o*x-r*y*x)*k,e[2]=(f*S*c-C*m*c+C*o*g-r*S*g-f*o*x+r*m*x)*k,e[3]=(v*m*c-f*y*c-v*o*g+r*y*g+f*o*M-r*m*M)*k,e[4]=D*k,e[5]=(_*S*c-T*y*c+T*o*M-n*S*M-_*o*x+n*y*x)*k,e[6]=(T*m*c-d*S*c-T*o*g+n*S*g+d*o*x-n*m*x)*k,e[7]=(d*y*c-_*m*c+_*o*g-n*y*g-d*o*M+n*m*M)*k,e[8]=R*k,e[9]=(T*v*c-_*C*c-T*r*M+n*C*M+_*r*x-n*v*x)*k,e[10]=(d*C*c-T*f*c+T*r*g-n*C*g-d*r*x+n*f*x)*k,e[11]=(_*f*c-d*v*c-_*r*g+n*v*g+d*r*M-n*f*M)*k,e[12]=G*k,e[13]=(_*C*o-T*v*o+T*r*y-n*C*y-_*r*S+n*v*S)*k,e[14]=(T*f*o-d*C*o-T*r*m+n*C*m+d*r*S-n*f*S)*k,e[15]=(d*v*o-_*f*o+_*r*m-n*v*m-d*r*y+n*f*y)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,m=e.z,g=c*d,_=c*f;return this.set(g*d+r,g*f-o*m,g*m+o*f,0,g*f+o*m,_*f+r,_*m-o*d,0,g*m-o*f,_*m+o*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,m=n._w,g=c+c,_=d+d,v=f+f,y=c*g,M=c*_,T=c*v,C=d*_,S=d*v,x=f*v,L=m*g,D=m*_,R=m*v,G=r.x,F=r.y,k=r.z;return o[0]=(1-(C+x))*G,o[1]=(M+R)*G,o[2]=(T-D)*G,o[3]=0,o[4]=(M-R)*F,o[5]=(1-(y+x))*F,o[6]=(S+L)*F,o[7]=0,o[8]=(T+D)*k,o[9]=(S-L)*k,o[10]=(1-(y+C))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Rs.set(o[0],o[1],o[2]).length();const d=Rs.set(o[4],o[5],o[6]).length(),f=Rs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const g=1/c,_=1/d,v=1/f;return oi.elements[0]*=g,oi.elements[1]*=g,oi.elements[2]*=g,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=v,oi.elements[9]*=v,oi.elements[10]*=v,n.setFromRotationMatrix(oi),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Vi){const m=this.elements,g=2*c/(n-e),_=2*c/(r-o),v=(n+e)/(n-e),y=(r+o)/(r-o);let M,T;if(f===Vi)M=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(f===Dl)M=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Vi){const m=this.elements,g=1/(n-e),_=1/(r-o),v=1/(d-c),y=(n+e)*g,M=(r+o)*_;let T,C;if(f===Vi)T=(d+c)*v,C=-2*v;else if(f===Dl)T=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*g,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new $,oi=new Ht,P_=new $(0,0,0),D_=new $(1,1,1),xr=new $,ll=new $,Hn=new $,Qp=new Ht,Jp=new Ga;class Mi{constructor(e=0,n=0,r=0,o=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],m=o[1],g=o[5],_=o[9],v=o[2],y=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L_=0;const em=new $,Ns=new Ga,ki=new Ht,cl=new $,Ia=new $,I_=new $,U_=new Ga,tm=new $(1,0,0),nm=new $(0,1,0),im=new $(0,0,1),rm={type:"added"},k_={type:"removed"},Ps={type:"childadded",child:null},Fu={type:"childremoved",child:null};class Tn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new $,n=new Mi,r=new Ga,o=new $(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ot}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Ia,cl,this.up):ki.lookAt(cl,Ia,this.up),this.quaternion.setFromRotationMatrix(ki),o&&(ki.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(ki),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(k_),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,I_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,U_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let g=0,_=m.length;g<_;g++){const v=m[g];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,g=this.material.length;m<g;m++)f.push(c(e.materials,this.material[m]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(c(e.animations,m))}}if(n){const f=d(e.geometries),m=d(e.materials),g=d(e.textures),_=d(e.images),v=d(e.shapes),y=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),g.length>0&&(r.textures=g),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const m=[];for(const g in f){const _=f[g];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new $(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new $,Fi=new $,Ou=new $,Oi=new $,Ds=new $,Ls=new $,sm=new $,Bu=new $,zu=new $,Hu=new $,Vu=new Pt,ju=new Pt,Gu=new Pt;class ci{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),li.subVectors(e,n),o.cross(li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){li.subVectors(o,n),Fi.subVectors(r,n),Ou.subVectors(e,n);const d=li.dot(li),f=li.dot(Fi),m=li.dot(Ou),g=Fi.dot(Fi),_=Fi.dot(Ou),v=d*g-f*f;if(v===0)return c.set(0,0,0),null;const y=1/v,M=(g*m-f*_)*y,T=(d*_-f*m)*y;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,o,c,d,f,m){return this.getBarycoord(e,n,r,o,Oi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Oi.x),m.addScaledVector(d,Oi.y),m.addScaledVector(f,Oi.z),m)}static getInterpolatedAttribute(e,n,r,o,c,d){return Vu.setScalar(0),ju.setScalar(0),Gu.setScalar(0),Vu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,r),Gu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Vu,c.x),d.addScaledVector(ju,c.y),d.addScaledVector(Gu,c.z),d}static isFrontFacing(e,n,r,o){return li.subVectors(r,n),Fi.subVectors(e,n),li.cross(Fi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Ds.subVectors(o,r),Ls.subVectors(c,r),Bu.subVectors(e,r);const m=Ds.dot(Bu),g=Ls.dot(Bu);if(m<=0&&g<=0)return n.copy(r);zu.subVectors(e,o);const _=Ds.dot(zu),v=Ls.dot(zu);if(_>=0&&v<=_)return n.copy(o);const y=m*v-_*g;if(y<=0&&m>=0&&_<=0)return d=m/(m-_),n.copy(r).addScaledVector(Ds,d);Hu.subVectors(e,c);const M=Ds.dot(Hu),T=Ls.dot(Hu);if(T>=0&&M<=T)return n.copy(c);const C=M*g-m*T;if(C<=0&&g>=0&&T<=0)return f=g/(g-T),n.copy(r).addScaledVector(Ls,f);const S=_*T-M*v;if(S<=0&&v-_>=0&&M-T>=0)return sm.subVectors(c,o),f=(v-_)/(v-_+(M-T)),n.copy(o).addScaledVector(sm,f);const x=1/(S+C+y);return d=C*x,f=y*x,n.copy(r).addScaledVector(Ds,d).addScaledVector(Ls,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Wu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class _t{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=bt.workingColorSpace){return this.r=e,this.g=n,this.b=r,bt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=bt.workingColorSpace){if(e=__(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Wu(d,c,e+1/3),this.g=Wu(d,c,e),this.b=Wu(d,c,e-1/3)}return bt.toWorkingColorSpace(this,o),this}setStyle(e,n=Qn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=Mg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return bt.fromWorkingColorSpace(vn.copy(this),e),Math.round(xt(vn.r*255,0,255))*65536+Math.round(xt(vn.g*255,0,255))*256+Math.round(xt(vn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.fromWorkingColorSpace(vn.copy(this),n);const r=vn.r,o=vn.g,c=vn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let m,g;const _=(f+d)/2;if(f===d)m=0,g=0;else{const v=d-f;switch(g=_<=.5?v/(d+f):v/(2-d-f),d){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=g,e.l=_,e}getRGB(e,n=bt.workingColorSpace){return bt.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Qn){bt.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,o=vn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(ul);const r=Cu(vr.h,ul.h,n),o=Cu(vr.s,ul.s,n),c=Cu(vr.l,ul.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new _t;_t.NAMES=Mg;let F_=0;class Zs extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Bs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ba extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new $,dl=new yt;let O_=0;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),o=Ln(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),o=Ln(o,this.array),c=Ln(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class wg extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Eg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Gn extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let B_=0;const Zn=new Ht,Xu=new Tn,Is=new $,Vn=new Wa,Ua=new Wa,on=new $;class hi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vg(e)?Eg:wg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Vn.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Ua.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Vn.min,Ua.min),Vn.expandByPoint(on),on.addVectors(Vn.max,Ua.max),Vn.expandByPoint(on)):(Vn.expandByPoint(Ua.min),Vn.expandByPoint(Ua.max))}Vn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)on.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(on));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],m=this.morphTargetsRelative;for(let g=0,_=f.count;g<_;g++)on.fromBufferAttribute(f,g),m&&(Is.fromBufferAttribute(e,g),on.add(Is)),o=Math.max(o,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],m=[];for(let V=0;V<r.count;V++)f[V]=new $,m[V]=new $;const g=new $,_=new $,v=new $,y=new yt,M=new yt,T=new yt,C=new $,S=new $;function x(V,N,A){g.fromBufferAttribute(r,V),_.fromBufferAttribute(r,N),v.fromBufferAttribute(r,A),y.fromBufferAttribute(c,V),M.fromBufferAttribute(c,N),T.fromBufferAttribute(c,A),_.sub(g),v.sub(g),M.sub(y),T.sub(y);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(z),S.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(z),f[V].add(C),f[N].add(C),f[A].add(C),m[V].add(S),m[N].add(S),m[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,N=L.length;V<N;++V){const A=L[V],z=A.start,ae=A.count;for(let te=z,ue=z+ae;te<ue;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new $,R=new $,G=new $,F=new $;function k(V){G.fromBufferAttribute(o,V),F.copy(G);const N=f[V];D.copy(N),D.sub(G.multiplyScalar(G.dot(N))).normalize(),R.crossVectors(F,N);const z=R.dot(m[V])<0?-1:1;d.setXYZW(V,D.x,D.y,D.z,z)}for(let V=0,N=L.length;V<N;++V){const A=L[V],z=A.start,ae=A.count;for(let te=z,ue=z+ae;te<ue;te+=3)k(e.getX(te+0)),k(e.getX(te+1)),k(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new $,c=new $,d=new $,f=new $,m=new $,g=new $,_=new $,v=new $;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),_.subVectors(d,c),v.subVectors(o,c),_.cross(v),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,S),f.add(_),m.add(_),g.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,g.x,g.y,g.z)}else for(let y=0,M=n.count;y<M;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),_.subVectors(d,c),v.subVectors(o,c),_.cross(v),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(f,m){const g=f.array,_=f.itemSize,v=f.normalized,y=new g.constructor(m.length*_);let M=0,T=0;for(let C=0,S=m.length;C<S;C++){f.isInterleavedBufferAttribute?M=m[C]*f.data.stride+f.offset:M=m[C]*_;for(let x=0;x<_;x++)y[T++]=g[M++]}return new fi(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],g=e(m,r);n.setAttribute(f,g)}const c=this.morphAttributes;for(const f in c){const m=[],g=c[f];for(let _=0,v=g.length;_<v;_++){const y=g[_],M=e(y,r);m.push(M)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,m=d.length;f<m;f++){const g=d[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(e[g]=m[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const g=r[m];e.data.attributes[m]=g.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],_=[];for(let v=0,y=g.length;v<y;v++){const M=g[v];_.push(M.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const _=o[g];this.setAttribute(g,_.clone(n))}const c=e.morphAttributes;for(const g in c){const _=[],v=c[g];for(let y=0,M=v.length;y<M;y++)_.push(v[y].clone(n));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,_=d.length;g<_;g++){const v=d[g];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const am=new Ht,Hr=new yg,fl=new zl,om=new $,hl=new $,pl=new $,ml=new $,qu=new $,gl=new $,lm=new $,xl=new $;class In extends Tn{constructor(e=new hi,n=new Ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){gl.set(0,0,0);for(let m=0,g=c.length;m<g;m++){const _=f[m],v=c[m];_!==0&&(qu.fromBufferAttribute(v,e),d?gl.addScaledVector(qu,_):gl.addScaledVector(qu.sub(n),_))}n.add(gl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(c),Hr.copy(e.ray).recast(e.near),!(fl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(fl,om)===null||Hr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(am.copy(c).invert(),Hr.copy(e.ray).applyMatrix4(am),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,m=c.attributes.position,g=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,y=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const S=y[T],x=d[S.materialIndex],L=Math.max(S.start,M.start),D=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let R=L,G=D;R<G;R+=3){const F=f.getX(R),k=f.getX(R+1),V=f.getX(R+2);o=vl(this,x,e,r,g,_,v,F,k,V),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let S=T,x=C;S<x;S+=3){const L=f.getX(S),D=f.getX(S+1),R=f.getX(S+2);o=vl(this,d,e,r,g,_,v,L,D,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const S=y[T],x=d[S.materialIndex],L=Math.max(S.start,M.start),D=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let R=L,G=D;R<G;R+=3){const F=R,k=R+1,V=R+2;o=vl(this,x,e,r,g,_,v,F,k,V),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=T,x=C;S<x;S+=3){const L=S,D=S+1,R=S+2;o=vl(this,d,e,r,g,_,v,L,D,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function z_(s,e,n,r,o,c,d,f){let m;if(e.side===Un?m=r.intersectTriangle(d,c,o,!0,f):m=r.intersectTriangle(o,c,d,e.side===wr,f),m===null)return null;xl.copy(f),xl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(xl);return g<n.near||g>n.far?null:{distance:g,point:xl.clone(),object:s}}function vl(s,e,n,r,o,c,d,f,m,g){s.getVertexPosition(f,hl),s.getVertexPosition(m,pl),s.getVertexPosition(g,ml);const _=z_(s,e,n,r,hl,pl,ml,lm);if(_){const v=new $;ci.getBarycoord(lm,hl,pl,ml,v),o&&(_.uv=ci.getInterpolatedAttribute(o,f,m,g,v,new yt)),c&&(_.uv1=ci.getInterpolatedAttribute(c,f,m,g,v,new yt)),d&&(_.normal=ci.getInterpolatedAttribute(d,f,m,g,v,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:f,b:m,c:g,normal:new $,materialIndex:0};ci.getNormal(hl,pl,ml,y.normal),_.face=y,_.barycoord=v}return _}class Xa extends hi{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const m=[],g=[],_=[],v=[];let y=0,M=0;T("z","y","x",-1,-1,r,n,e,d,c,0),T("z","y","x",1,-1,r,n,-e,d,c,1),T("x","z","y",1,1,e,r,n,o,d,2),T("x","z","y",1,-1,e,r,-n,o,d,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(_,3)),this.setAttribute("uv",new Gn(v,2));function T(C,S,x,L,D,R,G,F,k,V,N){const A=R/k,z=G/V,ae=R/2,te=G/2,ue=F/2,he=k+1,oe=V+1;let le=0,H=0;const ce=new $;for(let re=0;re<oe;re++){const U=re*z-te;for(let ie=0;ie<he;ie++){const De=ie*A-ae;ce[C]=De*L,ce[S]=U*D,ce[x]=ue,g.push(ce.x,ce.y,ce.z),ce[C]=0,ce[S]=0,ce[x]=F>0?1:-1,_.push(ce.x,ce.y,ce.z),v.push(ie/k),v.push(1-re/V),le+=1}}for(let re=0;re<V;re++)for(let U=0;U<k;U++){const ie=y+U+he*re,De=y+U+he*(re+1),Q=y+(U+1)+he*(re+1),de=y+(U+1)+he*re;m.push(ie,De,de),m.push(De,Q,de),H+=6}f.addGroup(M,H,N),M+=H,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function En(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const o in r)e[o]=r[o]}return e}function H_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Tg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const V_={clone:Ys,merge:En};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=G_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=H_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class bg extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new $,cm=new yt,um=new yt;class jn extends bg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,cm,um),n.subVectors(um,cm)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,g=d.fullHeight;c+=d.offsetX*o/m,n-=d.offsetY*r/g,o*=d.width/m,r*=d.height/g}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,ks=1;class W_ extends Tn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new jn(Us,ks,e,n);o.layers=this.layers,this.add(o);const c=new jn(Us,ks,e,n);c.layers=this.layers,this.add(c);const d=new jn(Us,ks,e,n);d.layers=this.layers,this.add(d);const f=new jn(Us,ks,e,n);f.layers=this.layers,this.add(f);const m=new jn(Us,ks,e,n);m.layers=this.layers,this.add(m);const g=new jn(Us,ks,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,m]=n;for(const g of n)this.remove(g);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,m,g,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,_),e.setRenderTarget(v,y,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Ag extends kn{constructor(e,n,r,o,c,d,f,m,g,_){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,o,c,d,f,m,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X_ extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ag(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Xa(5,5,5),c=new Er({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Sr});c.uniforms.tEquirect.value=n;const d=new In(o,c),f=n.minFilter;return n.minFilter===Zr&&(n.minFilter=Si),new W_(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}class Fa extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,m=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),x=this._getHandJoint(g,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=g.joints["index-finger-tip"],v=g.joints["thumb-tip"],y=_.position.distanceTo(v.position),M=.02,T=.005;g.inputState.pinching&&y>M+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class $_ extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yu=new $,Y_=new $,K_=new ot;class Xr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Yu.subVectors(r,n).cross(Y_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Yu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||K_.getNormalMatrix(e),o=this.coplanarPoint(Yu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new zl,_l=new $;class of{constructor(e=new Xr,n=new Xr,r=new Xr,o=new Xr,c=new Xr,d=new Xr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],m=o[3],g=o[4],_=o[5],v=o[6],y=o[7],M=o[8],T=o[9],C=o[10],S=o[11],x=o[12],L=o[13],D=o[14],R=o[15];if(r[0].setComponents(m-c,y-g,S-M,R-x).normalize(),r[1].setComponents(m+c,y+g,S+M,R+x).normalize(),r[2].setComponents(m+d,y+_,S+T,R+L).normalize(),r[3].setComponents(m-d,y-_,S-T,R-L).normalize(),r[4].setComponents(m-f,y-v,S-C,R-D).normalize(),n===Vi)r[5].setComponents(m+f,y+v,S+C,R+D).normalize();else if(n===Dl)r[5].setComponents(f,v,C,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(_l.x=o.normal.x>0?e.max.x:e.min.x,_l.y=o.normal.y>0?e.max.y:e.min.y,_l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cg extends Zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new Ht,Gd=new yg,yl=new zl,Sl=new $;class Z_ extends Tn{constructor(e=new hi,n=new Cg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(o),yl.radius+=c,e.ray.intersectsSphere(yl)===!1)return;dm.copy(o).invert(),Gd.copy(e.ray).applyMatrix4(dm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,g=r.index,v=r.attributes.position;if(g!==null){const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let T=y,C=M;T<C;T++){const S=g.getX(T);Sl.fromBufferAttribute(v,S),fm(Sl,S,m,o,e,n,this)}}else{const y=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let T=y,C=M;T<C;T++)Sl.fromBufferAttribute(v,T),fm(Sl,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function fm(s,e,n,r,o,c,d){const f=Gd.distanceSqToPoint(s);if(f<n){const m=new $;Gd.closestPointToPoint(s,m),m.applyMatrix4(r);const g=o.ray.origin.distanceTo(m);if(g<o.near||g>o.far)return;c.push({distance:g,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Rg extends kn{constructor(e,n,r,o,c,d,f,m,g,_=zs){if(_!==zs&&_!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===zs&&(r=Qr),r===void 0&&_===qs&&(r=Xs),super(null,o,c,d,f,m,_,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:di,this.minFilter=m!==void 0?m:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new af(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Hl extends hi{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],d=[];f(o),g(r),_(),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(c.slice(),3)),this.setAttribute("uv",new Gn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const D=new $,R=new $,G=new $;for(let F=0;F<n.length;F+=3)M(n[F+0],D),M(n[F+1],R),M(n[F+2],G),m(D,R,G,L)}function m(L,D,R,G){const F=G+1,k=[];for(let V=0;V<=F;V++){k[V]=[];const N=L.clone().lerp(R,V/F),A=D.clone().lerp(R,V/F),z=F-V;for(let ae=0;ae<=z;ae++)ae===0&&V===F?k[V][ae]=N:k[V][ae]=N.clone().lerp(A,ae/z)}for(let V=0;V<F;V++)for(let N=0;N<2*(F-V)-1;N++){const A=Math.floor(N/2);N%2===0?(y(k[V][A+1]),y(k[V+1][A]),y(k[V][A])):(y(k[V][A+1]),y(k[V+1][A+1]),y(k[V+1][A]))}}function g(L){const D=new $;for(let R=0;R<c.length;R+=3)D.x=c[R+0],D.y=c[R+1],D.z=c[R+2],D.normalize().multiplyScalar(L),c[R+0]=D.x,c[R+1]=D.y,c[R+2]=D.z}function _(){const L=new $;for(let D=0;D<c.length;D+=3){L.x=c[D+0],L.y=c[D+1],L.z=c[D+2];const R=S(L)/2/Math.PI+.5,G=x(L)/Math.PI+.5;d.push(R,1-G)}T(),v()}function v(){for(let L=0;L<d.length;L+=6){const D=d[L+0],R=d[L+2],G=d[L+4],F=Math.max(D,R,G),k=Math.min(D,R,G);F>.9&&k<.1&&(D<.2&&(d[L+0]+=1),R<.2&&(d[L+2]+=1),G<.2&&(d[L+4]+=1))}}function y(L){c.push(L.x,L.y,L.z)}function M(L,D){const R=L*3;D.x=e[R+0],D.y=e[R+1],D.z=e[R+2]}function T(){const L=new $,D=new $,R=new $,G=new $,F=new yt,k=new yt,V=new yt;for(let N=0,A=0;N<c.length;N+=9,A+=6){L.set(c[N+0],c[N+1],c[N+2]),D.set(c[N+3],c[N+4],c[N+5]),R.set(c[N+6],c[N+7],c[N+8]),F.set(d[A+0],d[A+1]),k.set(d[A+2],d[A+3]),V.set(d[A+4],d[A+5]),G.copy(L).add(D).add(R).divideScalar(3);const z=S(G);C(F,A+0,L,z),C(k,A+2,D,z),C(V,A+4,R,z)}}function C(L,D,R,G){G<0&&L.x===1&&(d[D]=L.x-1),R.x===0&&R.z===0&&(d[D]=G/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.vertices,e.indices,e.radius,e.details)}}class Il extends Hl{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Il(e.radius,e.detail)}}class lf extends Hl{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new lf(e.radius,e.detail)}}class Vl extends hi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),m=Math.floor(o),g=f+1,_=m+1,v=e/f,y=n/m,M=[],T=[],C=[],S=[];for(let x=0;x<_;x++){const L=x*y-d;for(let D=0;D<g;D++){const R=D*v-c;T.push(R,-L,0),C.push(0,0,1),S.push(D/f),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let L=0;L<f;L++){const D=L+g*x,R=L+g*(x+1),G=L+1+g*(x+1),F=L+1+g*x;M.push(D,R,F),M.push(R,G,F)}this.setIndex(M),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ul extends hi{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c},r=Math.floor(r),o=Math.floor(o);const d=[],f=[],m=[],g=[],_=new $,v=new $,y=new $;for(let M=0;M<=r;M++)for(let T=0;T<=o;T++){const C=T/o*c,S=M/r*Math.PI*2;v.x=(e+n*Math.cos(S))*Math.cos(C),v.y=(e+n*Math.cos(S))*Math.sin(C),v.z=n*Math.sin(S),f.push(v.x,v.y,v.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),y.subVectors(v,_).normalize(),m.push(y.x,y.y,y.z),g.push(T/o),g.push(M/r)}for(let M=1;M<=r;M++)for(let T=1;T<=o;T++){const C=(o+1)*M+T-1,S=(o+1)*(M-1)+T-1,x=(o+1)*(M-1)+T,L=(o+1)*M+T;d.push(C,S,L),d.push(S,x,L)}this.setIndex(d),this.setAttribute("position",new Gn(f,3)),this.setAttribute("normal",new Gn(m,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ng extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gg,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Q_ extends Ng{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class J_ extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ey extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pg extends Tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ku=new Ht,hm=new $,pm=new $;class ty{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new of,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mm=new Ht,ka=new $,Zu=new $;class ny extends ty{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),ka.setFromMatrixPosition(e.matrixWorld),r.position.copy(ka),Zu.copy(r.position),Zu.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Zu),r.updateMatrixWorld(),o.makeTranslation(-ka.x,-ka.y,-ka.z),mm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mm)}}class gm extends Pg{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new ny}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iy extends bg{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,f-=_*this.view.offsetY,m=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ry extends Pg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class sy extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class ay{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=xm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function xm(){return performance.now()}function vm(s,e,n,r){const o=oy(r);switch(n){case cg:return s*e;case dg:return s*e;case fg:return s*e*2;case hg:return s*e/o.components*o.byteLength;case nf:return s*e/o.components*o.byteLength;case pg:return s*e*2/o.components*o.byteLength;case rf:return s*e*2/o.components*o.byteLength;case ug:return s*e*3/o.components*o.byteLength;case ui:return s*e*4/o.components*o.byteLength;case sf:return s*e*4/o.components*o.byteLength;case Tl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vd:case yd:return Math.max(s,16)*Math.max(e,8)/4;case xd:case _d:return Math.max(s,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Od:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mg:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oy(s){switch(s){case Gi:case ag:return{byteLength:1,components:1};case Ha:case og:case Va:return{byteLength:2,components:1};case ef:case tf:return{byteLength:2,components:4};case Qr:case Jd:case Hi:return{byteLength:4,components:1};case lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dg(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function ly(s){const e=new WeakMap;function n(f,m){const g=f.array,_=f.usage,v=g.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,g,_),f.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,m,g){const _=m.array,v=m.updateRanges;if(s.bindBuffer(g,f),v.length===0)s.bufferSubData(g,0,_);else{v.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<v.length;M++){const T=v[y],C=v[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++y,v[y]=C)}v.length=y+1;for(let M=0,T=v.length;M<T;M++){const C=v[M];s.bufferSubData(g,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function d(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,m));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,m),g.version=f.version}}return{get:o,remove:c,update:d}}var cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,my=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,My=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ES=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,US=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:cy,alphahash_pars_fragment:uy,alphamap_fragment:dy,alphamap_pars_fragment:fy,alphatest_fragment:hy,alphatest_pars_fragment:py,aomap_fragment:my,aomap_pars_fragment:gy,batching_pars_vertex:xy,batching_vertex:vy,begin_vertex:_y,beginnormal_vertex:yy,bsdfs:Sy,iridescence_fragment:My,bumpmap_pars_fragment:wy,clipping_planes_fragment:Ey,clipping_planes_pars_fragment:Ty,clipping_planes_pars_vertex:by,clipping_planes_vertex:Ay,color_fragment:Cy,color_pars_fragment:Ry,color_pars_vertex:Ny,color_vertex:Py,common:Dy,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Uy,displacementmap_vertex:ky,emissivemap_fragment:Fy,emissivemap_pars_fragment:Oy,colorspace_fragment:By,colorspace_pars_fragment:zy,envmap_fragment:Hy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:jy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:tS,envmap_vertex:Wy,fog_vertex:Xy,fog_pars_vertex:qy,fog_fragment:$y,fog_pars_fragment:Yy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:Zy,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:Jy,lights_pars_begin:eS,lights_toon_fragment:nS,lights_toon_pars_fragment:iS,lights_phong_fragment:rS,lights_phong_pars_fragment:sS,lights_physical_fragment:aS,lights_physical_pars_fragment:oS,lights_fragment_begin:lS,lights_fragment_maps:cS,lights_fragment_end:uS,logdepthbuf_fragment:dS,logdepthbuf_pars_fragment:fS,logdepthbuf_pars_vertex:hS,logdepthbuf_vertex:pS,map_fragment:mS,map_pars_fragment:gS,map_particle_fragment:xS,map_particle_pars_fragment:vS,metalnessmap_fragment:_S,metalnessmap_pars_fragment:yS,morphinstance_vertex:SS,morphcolor_vertex:MS,morphnormal_vertex:wS,morphtarget_pars_vertex:ES,morphtarget_vertex:TS,normal_fragment_begin:bS,normal_fragment_maps:AS,normal_pars_fragment:CS,normal_pars_vertex:RS,normal_vertex:NS,normalmap_pars_fragment:PS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:LS,clearcoat_pars_fragment:IS,iridescence_pars_fragment:US,opaque_fragment:kS,packing:FS,premultiplied_alpha_fragment:OS,project_vertex:BS,dithering_fragment:zS,dithering_pars_fragment:HS,roughnessmap_fragment:VS,roughnessmap_pars_fragment:jS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:WS,shadowmap_vertex:XS,shadowmask_pars_fragment:qS,skinbase_vertex:$S,skinning_pars_vertex:YS,skinning_vertex:KS,skinnormal_vertex:ZS,specularmap_fragment:QS,specularmap_pars_fragment:JS,tonemapping_fragment:eM,tonemapping_pars_fragment:tM,transmission_fragment:nM,transmission_pars_fragment:iM,uv_pars_fragment:rM,uv_pars_vertex:sM,uv_vertex:aM,worldpos_vertex:oM,background_vert:lM,background_frag:cM,backgroundCube_vert:uM,backgroundCube_frag:dM,cube_vert:fM,cube_frag:hM,depth_vert:pM,depth_frag:mM,distanceRGBA_vert:gM,distanceRGBA_frag:xM,equirect_vert:vM,equirect_frag:_M,linedashed_vert:yM,linedashed_frag:SM,meshbasic_vert:MM,meshbasic_frag:wM,meshlambert_vert:EM,meshlambert_frag:TM,meshmatcap_vert:bM,meshmatcap_frag:AM,meshnormal_vert:CM,meshnormal_frag:RM,meshphong_vert:NM,meshphong_frag:PM,meshphysical_vert:DM,meshphysical_frag:LM,meshtoon_vert:IM,meshtoon_frag:UM,points_vert:kM,points_frag:FM,shadow_vert:OM,shadow_frag:BM,sprite_vert:zM,sprite_frag:HM},Re={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new _t(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:En([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:En([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new _t(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:En([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:En([Re.points,Re.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:En([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:En([Re.common,Re.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:En([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:En([Re.sprite,Re.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:En([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:En([Re.lights,Re.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};yi.physical={uniforms:En([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ml={r:0,b:0,g:0},jr=new Mi,VM=new Ht;function jM(s,e,n,r,o,c,d){const f=new _t(0);let m=c===!0?0:1,g,_,v=null,y=0,M=null;function T(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?n:e).get(R)),R}function C(D){let R=!1;const G=T(D);G===null?x(f,m):G&&G.isColor&&(x(G,1),R=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,R){const G=T(R);G&&(G.isCubeTexture||G.mapping===Bl)?(_===void 0&&(_=new In(new Xa(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Ys(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,k,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),jr.copy(R.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(VM.makeRotationFromEuler(jr)),_.material.toneMapped=bt.getTransfer(G.colorSpace)!==Nt,(v!==G||y!==G.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=G,y=G.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(g===void 0&&(g=new In(new Vl(2,2),new Er({name:"BackgroundMaterial",uniforms:Ys(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=G,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.toneMapped=bt.getTransfer(G.colorSpace)!==Nt,G.matrixAutoUpdate===!0&&G.updateMatrix(),g.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||y!==G.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=G,y=G.version,M=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function x(D,R){D.getRGB(Ml,Tg(s)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,R,d)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,R=1){f.set(D),m=R,x(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,x(f,m)},render:C,addToRenderList:S,dispose:L}}function GM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,d=!1;function f(A,z,ae,te,ue){let he=!1;const oe=v(te,ae,z);c!==oe&&(c=oe,g(c.object)),he=M(A,te,ae,ue),he&&T(A,te,ae,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,R(A,z,ae,te),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function m(){return s.createVertexArray()}function g(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,z,ae){const te=ae.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let he=ue[z.id];he===void 0&&(he={},ue[z.id]=he);let oe=he[te];return oe===void 0&&(oe=y(m()),he[te]=oe),oe}function y(A){const z=[],ae=[],te=[];for(let ue=0;ue<n;ue++)z[ue]=0,ae[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ae,attributeDivisors:te,object:A,attributes:{},index:null}}function M(A,z,ae,te){const ue=c.attributes,he=z.attributes;let oe=0;const le=ae.getAttributes();for(const H in le)if(le[H].location>=0){const re=ue[H];let U=he[H];if(U===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;oe++}return c.attributesNum!==oe||c.index!==te}function T(A,z,ae,te){const ue={},he=z.attributes;let oe=0;const le=ae.getAttributes();for(const H in le)if(le[H].location>=0){let re=he[H];re===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),ue[H]=U,oe++}c.attributes=ue,c.attributesNum=oe,c.index=te}function C(){const A=c.newAttributes;for(let z=0,ae=A.length;z<ae;z++)A[z]=0}function S(A){x(A,0)}function x(A,z){const ae=c.newAttributes,te=c.enabledAttributes,ue=c.attributeDivisors;ae[A]=1,te[A]===0&&(s.enableVertexAttribArray(A),te[A]=1),ue[A]!==z&&(s.vertexAttribDivisor(A,z),ue[A]=z)}function L(){const A=c.newAttributes,z=c.enabledAttributes;for(let ae=0,te=z.length;ae<te;ae++)z[ae]!==A[ae]&&(s.disableVertexAttribArray(ae),z[ae]=0)}function D(A,z,ae,te,ue,he,oe){oe===!0?s.vertexAttribIPointer(A,z,ae,ue,he):s.vertexAttribPointer(A,z,ae,te,ue,he)}function R(A,z,ae,te){C();const ue=te.attributes,he=ae.getAttributes(),oe=z.defaultAttributeValues;for(const le in he){const H=he[le];if(H.location>=0){let ce=ue[le];if(ce===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const re=ce.normalized,U=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const De=ie.buffer,Q=ie.type,de=ie.bytesPerElement,we=Q===s.INT||Q===s.UNSIGNED_INT||ce.gpuType===Jd;if(ce.isInterleavedBufferAttribute){const xe=ce.data,ye=xe.stride,ze=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let je=0;je<H.locationSize;je++)x(H.location+je,xe.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let je=0;je<H.locationSize;je++)S(H.location+je);s.bindBuffer(s.ARRAY_BUFFER,De);for(let je=0;je<H.locationSize;je++)D(H.location+je,U/H.locationSize,Q,re,ye*de,(ze+U/H.locationSize*je)*de,we)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)x(H.location+xe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<H.locationSize;xe++)S(H.location+xe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let xe=0;xe<H.locationSize;xe++)D(H.location+xe,U/H.locationSize,Q,re,U*de,U/H.locationSize*xe*de,we)}}else if(oe!==void 0){const re=oe[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(H.location,re);break;case 3:s.vertexAttrib3fv(H.location,re);break;case 4:s.vertexAttrib4fv(H.location,re);break;default:s.vertexAttrib1fv(H.location,re)}}}}L()}function G(){V();for(const A in r){const z=r[A];for(const ae in z){const te=z[ae];for(const ue in te)_(te[ue].object),delete te[ue];delete z[ae]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const ae in z){const te=z[ae];for(const ue in te)_(te[ue].object),delete te[ue];delete z[ae]}delete r[A.id]}function k(A){for(const z in r){const ae=r[z];if(ae[A.id]===void 0)continue;const te=ae[A.id];for(const ue in te)_(te[ue].object),delete te[ue];delete ae[A.id]}}function V(){N(),d=!0,c!==o&&(c=o,g(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:N,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:S,disableUnusedAttributes:L}}function WM(s,e,n){let r;function o(g){r=g}function c(g,_){s.drawArrays(r,g,_),n.update(_,r,1)}function d(g,_,v){v!==0&&(s.drawArraysInstanced(r,g,_,v),n.update(_,r,v))}function f(g,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];n.update(M,r,1)}function m(g,_,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<g.length;T++)d(g[T],_[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,_,0,y,0,v);let T=0;for(let C=0;C<v;C++)T+=_[C]*y[C];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function XM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(k){return!(k!==ui&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const V=k===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Gi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Hi&&!V)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const _=m(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const v=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:G,maxSamples:F}}function qM(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Xr,f=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||o;return o=y,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){n=_(v,y,0)},this.setState=function(v,y,M){const T=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,x=s.get(v);if(!o||T===null||T.length===0||c&&!S)c?_(null):g();else{const L=c?0:r,D=L*4;let R=x.clippingState||null;m.value=R,R=_(T,y,D,M);for(let G=0;G!==D;++G)R[G]=n[G];x.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function g(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,y,M,T){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const x=M+C*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,R=M;D!==C;++D,R+=4)d.copy(v[D]).applyMatrix4(L,f),d.normal.toArray(S,R),S[R+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function $M(s){let e=new WeakMap;function n(d,f){return f===hd?d.mapping=Gs:f===pd&&(d.mapping=Ws),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===hd||f===pd)if(e.has(d)){const m=e.get(d).texture;return n(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const g=new X_(m.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",o),n(g.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Os=4,_m=[.125,.215,.35,.446,.526,.582],Yr=20,Qu=new iy,ym=new _t;let Ju=null,ed=0,td=0,nd=!1;const qr=(1+Math.sqrt(5))/2,Fs=1/qr,Sm=[new $(-qr,Fs,0),new $(qr,Fs,0),new $(-Fs,0,qr),new $(Fs,0,qr),new $(0,qr,-Fs),new $(0,qr,Fs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],YM=new $;class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100,c={}){const{size:d=256,position:f=YM}=c;Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Va,format:ui,colorSpace:$s,depthBuffer:!1},o=wm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KM(c)),this._blurMaterial=ZM(c,e,n)}return o}_compileMaterial(e){const n=new In(this._lodPlanes[0],e);this._renderer.compile(n,Qu)}_sceneToCubeUV(e,n,r,o,c){const m=new jn(90,1,n,r),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,M=v.toneMapping;v.getClearColor(ym),v.toneMapping=Mr,v.autoClear=!1;const T=new Ba({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),C=new In(new Xa,T);let S=!1;const x=e.background;x?x.isColor&&(T.color.copy(x),e.background=null,S=!0):(T.color.copy(ym),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,g[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):D===1?(m.up.set(0,0,g[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,g[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const R=this._cubeSize;wl(o,D*R,L>2?R:0,R,R),v.setRenderTarget(o),S&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=y,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Gs||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new In(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const m=this._cubeSize;wl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(d,Qu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Sm[(o-c-1)%Sm.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const m=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new In(this._lodPlanes[o],g),y=g.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Yr-1),C=c/T,S=isFinite(c)?1+Math.floor(_*C):Yr;S>Yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Yr}`);const x=[];let L=0;for(let k=0;k<Yr;++k){const V=k/C,N=Math.exp(-V*V/2);x.push(N),k===0?L+=N:k<S&&(L+=2*N)}for(let k=0;k<x.length;k++)x[k]=x[k]/L;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-r;const R=this._sizeLods[o],G=3*R*(o>D-Os?o-D+Os:0),F=4*(this._cubeSize-R);wl(n,G,F,3*R,2*R),m.setRenderTarget(n),m.render(v,Qu)}}function KM(s){const e=[],n=[],r=[];let o=s;const c=s-Os+1+_m.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);n.push(f);let m=1/f;d>s-Os?m=_m[d-s+Os-1]:d===0&&(m=0),r.push(m);const g=1/(f-2),_=-g,v=1+g,y=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,C=3,S=2,x=1,L=new Float32Array(C*T*M),D=new Float32Array(S*T*M),R=new Float32Array(x*T*M);for(let F=0;F<M;F++){const k=F%3*2/3-1,V=F>2?0:-1,N=[k,V,0,k+2/3,V,0,k+2/3,V+1,0,k,V,0,k+2/3,V+1,0,k,V+1,0];L.set(N,C*T*F),D.set(y,S*T*F);const A=[F,F,F,F,F,F];R.set(A,x*T*F)}const G=new hi;G.setAttribute("position",new fi(L,C)),G.setAttribute("uv",new fi(D,S)),G.setAttribute("faceIndex",new fi(R,x)),e.push(G),o>Os&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function wm(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function ZM(s,e,n){const r=new Float32Array(Yr),o=new $(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Em(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Tm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,g=m===hd||m===pd,_=m===Gs||m===Ws;if(g||_){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new Mm(s)),v=g?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const M=f.image;return g&&M&&M.height>0||_&&M&&o(M)?(n===null&&(n=new Mm(s)),v=g?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f){let m=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&m++;return m===g}function c(f){const m=f.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function JM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Wr("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function e1(s,e,n,r){const o={},c=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete o[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(v,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,n.memory.geometries++),y}function m(v){const y=v.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function g(v){const y=[],M=v.index,T=v.attributes.position;let C=0;if(M!==null){const L=M.array;C=M.version;for(let D=0,R=L.length;D<R;D+=3){const G=L[D+0],F=L[D+1],k=L[D+2];y.push(G,F,F,k,k,G)}}else if(T!==void 0){const L=T.array;C=T.version;for(let D=0,R=L.length/3-1;D<R;D+=3){const G=D+0,F=D+1,k=D+2;y.push(G,F,F,k,k,G)}}else return;const S=new(vg(y)?Eg:wg)(y,1);S.version=C;const x=c.get(v);x&&e.remove(x),c.set(v,S)}function _(v){const y=c.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&g(v)}else g(v);return c.get(v)}return{get:f,update:m,getWireframeAttribute:_}}function t1(s,e,n){let r;function o(y){r=y}let c,d;function f(y){c=y.type,d=y.bytesPerElement}function m(y,M){s.drawElements(r,M,c,y*d),n.update(M,r,1)}function g(y,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,y*d,T),n.update(M,r,T))}function _(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,T);let S=0;for(let x=0;x<T;x++)S+=M[x];n.update(S,r,1)}function v(y,M,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)g(y[x]/d,M[x],C[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,C,0,T);let x=0;for(let L=0;L<T;L++)x+=M[L]*C[L];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function n1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function i1(s,e,n){const r=new WeakMap,o=new Pt;function c(d,f,m){const g=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let y=r.get(f);if(y===void 0||y.count!==v){let A=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var M=A;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),C===!0&&(R=2),S===!0&&(R=3);let G=f.attributes.position.count*R,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const k=new Float32Array(G*F*4*v),V=new _g(k,G,F,v);V.type=Hi,V.needsUpdate=!0;const N=R*4;for(let z=0;z<v;z++){const ae=x[z],te=L[z],ue=D[z],he=G*F*4*z;for(let oe=0;oe<ae.count;oe++){const le=oe*N;T===!0&&(o.fromBufferAttribute(ae,oe),k[he+le+0]=o.x,k[he+le+1]=o.y,k[he+le+2]=o.z,k[he+le+3]=0),C===!0&&(o.fromBufferAttribute(te,oe),k[he+le+4]=o.x,k[he+le+5]=o.y,k[he+le+6]=o.z,k[he+le+7]=0),S===!0&&(o.fromBufferAttribute(ue,oe),k[he+le+8]=o.x,k[he+le+9]=o.y,k[he+le+10]=o.z,k[he+le+11]=ue.itemSize===4?o.w:1)}}y={count:v,texture:V,size:new yt(G,F)},r.set(f,y),f.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let S=0;S<g.length;S++)T+=g[S];const C=f.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",g)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function r1(s,e,n,r){let o=new WeakMap;function c(m){const g=r.render.frame,_=m.geometry,v=e.get(m,_);if(o.get(v)!==g&&(e.update(v),o.set(v,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==g&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,g))),m.isSkinnedMesh){const y=m.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return v}function d(){o=new WeakMap}function f(m){const g=m.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:d}}const Lg=new kn,bm=new Rg(1,1),Ig=new _g,Ug=new R_,kg=new Ag,Am=[],Cm=[],Rm=new Float32Array(16),Nm=new Float32Array(9),Pm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Am[o];if(c===void 0&&(c=new Float32Array(o),Am[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function jl(s,e){let n=Cm[e];n===void 0&&(n=new Int32Array(e),Cm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function s1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function a1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function o1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function l1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function c1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Pm.set(r),s.uniformMatrix2fv(this.addr,!1,Pm),en(n,r)}}function u1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Nm.set(r),s.uniformMatrix3fv(this.addr,!1,Nm),en(n,r)}}function d1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Rm.set(r),s.uniformMatrix4fv(this.addr,!1,Rm),en(n,r)}}function f1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function h1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function p1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function m1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function g1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function x1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function v1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function _1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function y1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=xg,c=bm):c=Lg,n.setTexture2D(e||c,o)}function S1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ug,o)}function M1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||kg,o)}function w1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Ig,o)}function E1(s){switch(s){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return x1;case 36295:return v1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return w1}}function T1(s,e){s.uniform1fv(this.addr,e)}function b1(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function A1(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function C1(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function R1(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function N1(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function P1(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function D1(s,e){s.uniform1iv(this.addr,e)}function L1(s,e){s.uniform2iv(this.addr,e)}function I1(s,e){s.uniform3iv(this.addr,e)}function U1(s,e){s.uniform4iv(this.addr,e)}function k1(s,e){s.uniform1uiv(this.addr,e)}function F1(s,e){s.uniform2uiv(this.addr,e)}function O1(s,e){s.uniform3uiv(this.addr,e)}function B1(s,e){s.uniform4uiv(this.addr,e)}function z1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||Lg,c[d])}function H1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||Ug,c[d])}function V1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||kg,c[d])}function j1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Ig,c[d])}function G1(s){switch(s){case 5126:return T1;case 35664:return b1;case 35665:return A1;case 35666:return C1;case 35674:return R1;case 35675:return N1;case 35676:return P1;case 5124:case 35670:return D1;case 35667:case 35671:return L1;case 35668:case 35672:return I1;case 35669:case 35673:return U1;case 5125:return k1;case 36294:return F1;case 36295:return O1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return j1}}class W1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=E1(n.type)}}class X1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=G1(n.type)}}class q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const id=/(\w+)(\])?(\[|\.)?/g;function Dm(s,e){s.seq.push(e),s.map[e.id]=e}function $1(s,e,n){const r=s.name,o=r.length;for(id.lastIndex=0;;){const c=id.exec(r),d=id.lastIndex;let f=c[1];const m=c[2]==="]",g=c[3];if(m&&(f=f|0),g===void 0||g==="["&&d+2===o){Dm(n,g===void 0?new W1(f,s,e):new X1(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new q1(f),Dm(n,v)),n=v}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);$1(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function Lm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const Y1=37297;let K1=0;function Z1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const Im=new ot;function Q1(s){bt._getMatrix(Im,bt.workingColorSpace,s);const e=`mat3( ${Im.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(s)){case Pl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Um(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+Z1(s.getShaderSource(e),d)}else return o}function J1(s,e){const n=Q1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ew(s,e){let n;switch(e){case t_:n="Linear";break;case n_:n="Reinhard";break;case i_:n="Cineon";break;case r_:n="ACESFilmic";break;case a_:n="AgX";break;case o_:n="Neutral";break;case s_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new $;function tw(){bt.getLuminanceCoefficients(El);const s=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function iw(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function rw(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Oa(s){return s!==""}function km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(sw,ow)}const aw=new Map;function ow(s,e){let n=lt[e];if(n===void 0){const r=aw.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wd(n)}const lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(s){return s.replace(lw,cw)}function cw(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function hw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rg:e="ENVMAP_BLENDING_MULTIPLY";break;case Jv:e="ENVMAP_BLENDING_MIX";break;case e_:e="ENVMAP_BLENDING_ADD";break}return e}function pw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function mw(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const m=uw(n),g=dw(n),_=fw(n),v=hw(n),y=pw(n),M=nw(n),T=iw(c),C=o.createProgram();let S,x,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oa).join(`
`),x.length>0&&(x+=`
`)):(S=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),x=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?lt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?ew("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,J1("linearToOutputTexel",n.outputColorSpace),tw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),d=Wd(d),d=km(d,n),d=Fm(d,n),f=Wd(f),f=km(f,n),f=Fm(f,n),d=Om(d),f=Om(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=L+S+d,R=L+x+f,G=Lm(o,o.VERTEX_SHADER,D),F=Lm(o,o.FRAGMENT_SHADER,R);o.attachShader(C,G),o.attachShader(C,F),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function k(z){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(C).trim(),te=o.getShaderInfoLog(G).trim(),ue=o.getShaderInfoLog(F).trim();let he=!0,oe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,G,F);else{const le=Um(o,G,"vertex"),H=Um(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ae+`
`+le+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(te===""||ue==="")&&(oe=!1);oe&&(z.diagnostics={runnable:he,programLog:ae,vertexShader:{log:te,prefix:S},fragmentShader:{log:ue,prefix:x}})}o.deleteShader(G),o.deleteShader(F),V=new Nl(o,C),N=rw(o,C)}let V;this.getUniforms=function(){return V===void 0&&k(this),V};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(C,Y1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=F,this}let gw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new vw(e),n.set(e,r)),r}}class vw{constructor(e){this.id=gw++,this.code=e,this.usedTimes=0}}function _w(s,e,n,r,o,c,d){const f=new Sg,m=new xw,g=new Set,_=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(N){return g.add(N),N===0?"uv":`uv${N}`}function S(N,A,z,ae,te){const ue=ae.fog,he=te.geometry,oe=N.isMeshStandardMaterial?ae.environment:null,le=(N.isMeshStandardMaterial?n:e).get(N.envMap||oe),H=le&&le.mapping===Bl?le.image.height:null,ce=T[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=re!==void 0?re.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let De,Q,de,we;if(ce){const Mt=yi[ce];De=Mt.vertexShader,Q=Mt.fragmentShader}else De=N.vertexShader,Q=N.fragmentShader,m.update(N),de=m.getVertexShaderID(N),we=m.getFragmentShaderID(N);const xe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ze=te.isInstancedMesh===!0,je=te.isBatchedMesh===!0,Rt=!!N.map,Lt=!!N.matcap,ct=!!le,B=!!N.aoMap,_n=!!N.lightMap,mt=!!N.bumpMap,ft=!!N.normalMap,$e=!!N.displacementMap,Ct=!!N.emissiveMap,We=!!N.metalnessMap,P=!!N.roughnessMap,E=N.anisotropy>0,J=N.clearcoat>0,me=N.dispersion>0,ve=N.iridescence>0,fe=N.sheen>0,Xe=N.transmission>0,be=E&&!!N.anisotropyMap,Ue=J&&!!N.clearcoatMap,ut=J&&!!N.clearcoatNormalMap,Ee=J&&!!N.clearcoatRoughnessMap,Fe=ve&&!!N.iridescenceMap,Qe=ve&&!!N.iridescenceThicknessMap,et=fe&&!!N.sheenColorMap,Oe=fe&&!!N.sheenRoughnessMap,ht=!!N.specularMap,it=!!N.specularColorMap,At=!!N.specularIntensityMap,W=Xe&&!!N.transmissionMap,Ae=Xe&&!!N.thicknessMap,se=!!N.gradientMap,pe=!!N.alphaMap,Pe=N.alphaTest>0,Ne=!!N.alphaHash,rt=!!N.extensions;let kt=Mr;N.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Kt={shaderID:ce,shaderType:N.type,shaderName:N.name,vertexShader:De,fragmentShader:Q,defines:N.defines,customVertexShaderID:de,customFragmentShaderID:we,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:je,batchingColor:je&&te._colorsTexture!==null,instancing:ze,instancingColor:ze&&te.instanceColor!==null,instancingMorph:ze&&te.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:$s,alphaToCoverage:!!N.alphaToCoverage,map:Rt,matcap:Lt,envMap:ct,envMapMode:ct&&le.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:_n,bumpMap:mt,normalMap:ft,displacementMap:y&&$e,emissiveMap:Ct,normalMapObjectSpace:ft&&N.normalMapType===d_,normalMapTangentSpace:ft&&N.normalMapType===gg,metalnessMap:We,roughnessMap:P,anisotropy:E,anisotropyMap:be,clearcoat:J,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ve,iridescenceMap:Fe,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:ht,specularColorMap:it,specularIntensityMap:At,transmission:Xe,transmissionMap:W,thicknessMap:Ae,gradientMap:se,opaque:N.transparent===!1&&N.blending===Bs&&N.alphaToCoverage===!1,alphaMap:pe,alphaTest:Pe,alphaHash:Ne,combine:N.combine,mapUv:Rt&&C(N.map.channel),aoMapUv:B&&C(N.aoMap.channel),lightMapUv:_n&&C(N.lightMap.channel),bumpMapUv:mt&&C(N.bumpMap.channel),normalMapUv:ft&&C(N.normalMap.channel),displacementMapUv:$e&&C(N.displacementMap.channel),emissiveMapUv:Ct&&C(N.emissiveMap.channel),metalnessMapUv:We&&C(N.metalnessMap.channel),roughnessMapUv:P&&C(N.roughnessMap.channel),anisotropyMapUv:be&&C(N.anisotropyMap.channel),clearcoatMapUv:Ue&&C(N.clearcoatMap.channel),clearcoatNormalMapUv:ut&&C(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&C(N.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(N.iridescenceThicknessMap.channel),sheenColorMapUv:et&&C(N.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&C(N.sheenRoughnessMap.channel),specularMapUv:ht&&C(N.specularMap.channel),specularColorMapUv:it&&C(N.specularColorMap.channel),specularIntensityMapUv:At&&C(N.specularIntensityMap.channel),transmissionMapUv:W&&C(N.transmissionMap.channel),thicknessMapUv:Ae&&C(N.thicknessMap.channel),alphaMapUv:pe&&C(N.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ft||E),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Rt||pe),fog:!!ue,useFog:N.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ye,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:Rt&&N.map.isVideoTexture===!0&&bt.getTransfer(N.map.colorSpace)===Nt,decodeVideoTextureEmissive:Ct&&N.emissiveMap.isVideoTexture===!0&&bt.getTransfer(N.emissiveMap.colorSpace)===Nt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===zi,flipSided:N.side===Un,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:rt&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&N.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Kt.vertexUv1s=g.has(1),Kt.vertexUv2s=g.has(2),Kt.vertexUv3s=g.has(3),g.clear(),Kt}function x(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const z in N.defines)A.push(z),A.push(N.defines[z]);return N.isRawShaderMaterial===!1&&(L(A,N),D(A,N),A.push(s.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function L(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function D(N,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),N.push(f.mask)}function R(N){const A=T[N.type];let z;if(A){const ae=yi[A];z=V_.clone(ae.uniforms)}else z=N.uniforms;return z}function G(N,A){let z;for(let ae=0,te=_.length;ae<te;ae++){const ue=_[ae];if(ue.cacheKey===A){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new mw(s,A,N,c),_.push(z)),z}function F(N){if(--N.usedTimes===0){const A=_.indexOf(N);_[A]=_[_.length-1],_.pop(),N.destroy()}}function k(N){m.remove(N)}function V(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:G,releaseProgram:F,releaseShaderCache:k,programs:_,dispose:V}}function yw(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,m){s.get(d)[f]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function Sw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(v,y,M,T,C,S){let x=s[e];return x===void 0?(x={id:v.id,object:v,geometry:y,material:M,groupOrder:T,renderOrder:v.renderOrder,z:C,group:S},s[e]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=M,x.groupOrder=T,x.renderOrder=v.renderOrder,x.z=C,x.group=S),e++,x}function f(v,y,M,T,C,S){const x=d(v,y,M,T,C,S);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):n.push(x)}function m(v,y,M,T,C,S){const x=d(v,y,M,T,C,S);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):n.unshift(x)}function g(v,y){n.length>1&&n.sort(v||Sw),r.length>1&&r.sort(y||zm),o.length>1&&o.sort(y||zm)}function _(){for(let v=e,y=s.length;v<y;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:m,finish:_,sort:g}}function Mw(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Hm,s.set(r,[d])):o>=c.length?(d=new Hm,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function ww(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new _t};break;case"SpotLight":n={position:new $,direction:new $,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function Ew(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let Tw=0;function bw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Aw(s){const e=new ww,n=Ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new $);const o=new $,c=new Ht,d=new Ht;function f(g){let _=0,v=0,y=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,T=0,C=0,S=0,x=0,L=0,D=0,R=0,G=0,F=0,k=0;g.sort(bw);for(let N=0,A=g.length;N<A;N++){const z=g[N],ae=z.color,te=z.intensity,ue=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=ae.r*te,v+=ae.g*te,y+=ae.b*te;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],te);k++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=z.shadow.matrix,L++}r.directional[M]=oe,M++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(ae).multiplyScalar(te),oe.distance=ue,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[C]=oe;const le=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,le.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[C]=le.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.spotShadow[C]=H,r.spotShadowMap[C]=he,R++}C++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(ae).multiplyScalar(te),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=oe,S++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const le=z.shadow,H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,H.shadowCameraNear=le.camera.near,H.shadowCameraFar=le.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=z.shadow.matrix,D++}r.point[T]=oe,T++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(te),oe.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[x]=oe,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==M||V.pointLength!==T||V.spotLength!==C||V.rectAreaLength!==S||V.hemiLength!==x||V.numDirectionalShadows!==L||V.numPointShadows!==D||V.numSpotShadows!==R||V.numSpotMaps!==G||V.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,V.directionalLength=M,V.pointLength=T,V.spotLength=C,V.rectAreaLength=S,V.hemiLength=x,V.numDirectionalShadows=L,V.numPointShadows=D,V.numSpotShadows=R,V.numSpotMaps=G,V.numLightProbes=k,r.version=Tw++)}function m(g,_){let v=0,y=0,M=0,T=0,C=0;const S=_.matrixWorldInverse;for(let x=0,L=g.length;x<L;x++){const D=g[x];if(D.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),v++}else if(D.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),T++}else if(D.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),C++}}}return{setup:f,setupView:m,state:r}}function Vm(s){const e=new Aw(s),n=[],r=[];function o(_){g.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function d(_){r.push(_)}function f(){e.setup(n)}function m(_){e.setupView(n,_)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:d}}function Cw(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new Vm(s),e.set(o,[f])):c>=d.length?(f=new Vm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const Rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pw(s,e,n){let r=new of;const o=new yt,c=new yt,d=new Pt,f=new J_({depthPacking:u_}),m=new ey,g={},_=n.maxTextureSize,v={[wr]:Un,[Un]:wr,[zi]:zi},y=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Rw,fragmentShader:Nw}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new hi;T.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new In(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ig;let x=this.type;this.render=function(F,k,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const N=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Sr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const te=x!==Bi&&this.type===Bi,ue=x===Bi&&this.type!==Bi;for(let he=0,oe=F.length;he<oe;he++){const le=F[he],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ce=H.getFrameExtents();if(o.multiply(ce),c.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/ce.x),o.x=c.x*ce.x,H.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/ce.y),o.y=c.y*ce.y,H.mapSize.y=c.y)),H.map===null||te===!0||ue===!0){const U=this.type!==Bi?{minFilter:di,magFilter:di}:{};H.map!==null&&H.map.dispose(),H.map=new Jr(o.x,o.y,U),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const re=H.getViewportCount();for(let U=0;U<re;U++){const ie=H.getViewport(U);d.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ae.viewport(d),H.updateMatrices(le,U),r=H.getFrustum(),R(k,V,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===Bi&&L(H,V),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(N,A,z)};function L(F,k){const V=e.update(C);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Jr(o.x,o.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,V,y,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,V,M,C,null)}function D(F,k,V,N){let A=null;const z=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)A=z;else if(A=V.isPointLight===!0?m:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ae=A.uuid,te=k.uuid;let ue=g[ae];ue===void 0&&(ue={},g[ae]=ue);let he=ue[te];he===void 0&&(he=A.clone(),ue[te]=he,k.addEventListener("dispose",G)),A=he}if(A.visible=k.visible,A.wireframe=k.wireframe,N===Bi?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:v[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ae=s.properties.get(A);ae.light=V}return A}function R(F,k,V,N,A){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Bi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const te=e.update(F),ue=F.material;if(Array.isArray(ue)){const he=te.groups;for(let oe=0,le=he.length;oe<le;oe++){const H=he[oe],ce=ue[H.materialIndex];if(ce&&ce.visible){const re=D(F,ce,N,A);F.onBeforeShadow(s,F,k,V,te,re,H),s.renderBufferDirect(V,null,te,re,F,H),F.onAfterShadow(s,F,k,V,te,re,H)}}}else if(ue.visible){const he=D(F,ue,N,A);F.onBeforeShadow(s,F,k,V,te,he,null),s.renderBufferDirect(V,null,te,he,F,null),F.onAfterShadow(s,F,k,V,te,he,null)}}const ae=F.children;for(let te=0,ue=ae.length;te<ue;te++)R(ae[te],k,V,N,A)}function G(F){F.target.removeEventListener("dispose",G);for(const V in g){const N=g[V],A=F.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}const Dw={[ad]:od,[ld]:dd,[cd]:fd,[js]:ud,[od]:ad,[dd]:ld,[fd]:cd,[ud]:js};function Lw(s,e){function n(){let W=!1;const Ae=new Pt;let se=null;const pe=new Pt(0,0,0,0);return{setMask:function(Pe){se!==Pe&&!W&&(s.colorMask(Pe,Pe,Pe,Pe),se=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,Ne,rt,kt,Kt){Kt===!0&&(Pe*=kt,Ne*=kt,rt*=kt),Ae.set(Pe,Ne,rt,kt),pe.equals(Ae)===!1&&(s.clearColor(Pe,Ne,rt,kt),pe.copy(Ae))},reset:function(){W=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,se=null,pe=null,Pe=null;return{setReversed:function(Ne){if(Ae!==Ne){const rt=e.get("EXT_clip_control");Ae?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const kt=Pe;Pe=null,this.setClear(kt)}Ae=Ne},getReversed:function(){return Ae},setTest:function(Ne){Ne?xe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ne){se!==Ne&&!W&&(s.depthMask(Ne),se=Ne)},setFunc:function(Ne){if(Ae&&(Ne=Dw[Ne]),pe!==Ne){switch(Ne){case ad:s.depthFunc(s.NEVER);break;case od:s.depthFunc(s.ALWAYS);break;case ld:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case cd:s.depthFunc(s.EQUAL);break;case ud:s.depthFunc(s.GEQUAL);break;case dd:s.depthFunc(s.GREATER);break;case fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ne}},setLocked:function(Ne){W=Ne},setClear:function(Ne){Pe!==Ne&&(Ae&&(Ne=1-Ne),s.clearDepth(Ne),Pe=Ne)},reset:function(){W=!1,se=null,pe=null,Pe=null,Ae=!1}}}function o(){let W=!1,Ae=null,se=null,pe=null,Pe=null,Ne=null,rt=null,kt=null,Kt=null;return{setTest:function(Mt){W||(Mt?xe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Mt){Ae!==Mt&&!W&&(s.stencilMask(Mt),Ae=Mt)},setFunc:function(Mt,bn,yn){(se!==Mt||pe!==bn||Pe!==yn)&&(s.stencilFunc(Mt,bn,yn),se=Mt,pe=bn,Pe=yn)},setOp:function(Mt,bn,yn){(Ne!==Mt||rt!==bn||kt!==yn)&&(s.stencilOp(Mt,bn,yn),Ne=Mt,rt=bn,kt=yn)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Kt!==Mt&&(s.clearStencil(Mt),Kt=Mt)},reset:function(){W=!1,Ae=null,se=null,pe=null,Pe=null,Ne=null,rt=null,kt=null,Kt=null}}}const c=new n,d=new r,f=new o,m=new WeakMap,g=new WeakMap;let _={},v={},y=new WeakMap,M=[],T=null,C=!1,S=null,x=null,L=null,D=null,R=null,G=null,F=null,k=new _t(0,0,0),V=0,N=!1,A=null,z=null,ae=null,te=null,ue=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(H)[1]),oe=le>=1):H.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),oe=le>=2);let ce=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),De=new Pt().fromArray(U),Q=new Pt().fromArray(ie);function de(W,Ae,se,pe){const Pe=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(W,Ne),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Ae+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ne}const we={};we[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),d.setFunc(js),mt(!1),ft(Hp),xe(s.CULL_FACE),B(Sr);function xe(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function ye(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function ze(W,Ae){return v[W]!==Ae?(s.bindFramebuffer(W,Ae),v[W]=Ae,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function je(W,Ae){let se=M,pe=!1;if(W){se=y.get(Ae),se===void 0&&(se=[],y.set(Ae,se));const Pe=W.textures;if(se.length!==Pe.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,rt=Pe.length;Ne<rt;Ne++)se[Ne]=s.COLOR_ATTACHMENT0+Ne;se.length=Pe.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function Rt(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Lt={[$r]:s.FUNC_ADD,[kv]:s.FUNC_SUBTRACT,[Fv]:s.FUNC_REVERSE_SUBTRACT};Lt[Ov]=s.MIN,Lt[Bv]=s.MAX;const ct={[zv]:s.ZERO,[Hv]:s.ONE,[Vv]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[$v]:s.SRC_ALPHA_SATURATE,[Xv]:s.DST_COLOR,[Gv]:s.DST_ALPHA,[jv]:s.ONE_MINUS_SRC_COLOR,[sd]:s.ONE_MINUS_SRC_ALPHA,[qv]:s.ONE_MINUS_DST_COLOR,[Wv]:s.ONE_MINUS_DST_ALPHA,[Yv]:s.CONSTANT_COLOR,[Kv]:s.ONE_MINUS_CONSTANT_COLOR,[Zv]:s.CONSTANT_ALPHA,[Qv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(W,Ae,se,pe,Pe,Ne,rt,kt,Kt,Mt){if(W===Sr){C===!0&&(ye(s.BLEND),C=!1);return}if(C===!1&&(xe(s.BLEND),C=!0),W!==Uv){if(W!==S||Mt!==N){if((x!==$r||R!==$r)&&(s.blendEquation(s.FUNC_ADD),x=$r,R=$r),Mt)switch(W){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vp:s.blendFunc(s.ONE,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,D=null,G=null,F=null,k.set(0,0,0),V=0,S=W,N=Mt}return}Pe=Pe||Ae,Ne=Ne||se,rt=rt||pe,(Ae!==x||Pe!==R)&&(s.blendEquationSeparate(Lt[Ae],Lt[Pe]),x=Ae,R=Pe),(se!==L||pe!==D||Ne!==G||rt!==F)&&(s.blendFuncSeparate(ct[se],ct[pe],ct[Ne],ct[rt]),L=se,D=pe,G=Ne,F=rt),(kt.equals(k)===!1||Kt!==V)&&(s.blendColor(kt.r,kt.g,kt.b,Kt),k.copy(kt),V=Kt),S=W,N=!1}function _n(W,Ae){W.side===zi?ye(s.CULL_FACE):xe(s.CULL_FACE);let se=W.side===Un;Ae&&(se=!se),mt(se),W.blending===Bs&&W.transparent===!1?B(Sr):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const pe=W.stencilWrite;f.setTest(pe),pe&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ct(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function ft(W){W!==Dv?(xe(s.CULL_FACE),W!==z&&(W===Hp?s.cullFace(s.BACK):W===Lv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),z=W}function $e(W){W!==ae&&(oe&&s.lineWidth(W),ae=W)}function Ct(W,Ae,se){W?(xe(s.POLYGON_OFFSET_FILL),(te!==Ae||ue!==se)&&(s.polygonOffset(Ae,se),te=Ae,ue=se)):ye(s.POLYGON_OFFSET_FILL)}function We(W){W?xe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function P(W){W===void 0&&(W=s.TEXTURE0+he-1),ce!==W&&(s.activeTexture(W),ce=W)}function E(W,Ae,se){se===void 0&&(ce===null?se=s.TEXTURE0+he-1:se=ce);let pe=re[se];pe===void 0&&(pe={type:void 0,texture:void 0},re[se]=pe),(pe.type!==W||pe.texture!==Ae)&&(ce!==se&&(s.activeTexture(se),ce=se),s.bindTexture(W,Ae||we[W]),pe.type=W,pe.texture=Ae)}function J(){const W=re[ce];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){De.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),De.copy(W))}function Oe(W){Q.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function ht(W,Ae){let se=g.get(Ae);se===void 0&&(se=new WeakMap,g.set(Ae,se));let pe=se.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(Ae,W.name),se.set(W,pe))}function it(W,Ae){const pe=g.get(Ae).get(W);m.get(Ae)!==pe&&(s.uniformBlockBinding(Ae,pe,W.__bindingPointIndex),m.set(Ae,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ce=null,re={},v={},y=new WeakMap,M=[],T=null,C=!1,S=null,x=null,L=null,D=null,R=null,G=null,F=null,k=new _t(0,0,0),V=0,N=!1,A=null,z=null,ae=null,te=null,ue=null,De.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:xe,disable:ye,bindFramebuffer:ze,drawBuffers:je,useProgram:Rt,setBlending:B,setMaterial:_n,setFlipSided:mt,setCullFace:ft,setLineWidth:$e,setPolygonOffset:Ct,setScissorTest:We,activeTexture:P,bindTexture:E,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Fe,texImage3D:Qe,updateUBOMapping:ht,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Ee,texSubImage2D:fe,texSubImage3D:Xe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ue,scissor:et,viewport:Oe,reset:At}}function Iw(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new yt,_=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return M?new OffscreenCanvas(P,E):Ll("canvas")}function C(P,E,J){let me=1;const ve=We(P);if((ve.width>J||ve.height>J)&&(me=J/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*ve.width),Xe=Math.floor(me*ve.height);v===void 0&&(v=T(fe,Xe));const be=E?T(fe,Xe):v;return be.width=fe,be.height=Xe,be.getContext("2d").drawImage(P,0,0,fe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Xe+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,E,J,me,ve=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=E;if(E===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),E===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),E===s.RGBA){const Xe=ve?Pl:bt.getTransfer(me);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=Xe===Nt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(P,E){let J;return P?E===null||E===Qr||E===Xs?J=s.DEPTH24_STENCIL8:E===Hi?J=s.DEPTH32F_STENCIL8:E===Ha&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qr||E===Xs?J=s.DEPTH_COMPONENT24:E===Hi?J=s.DEPTH_COMPONENT32F:E===Ha&&(J=s.DEPTH_COMPONENT16),J}function G(P,E){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==di&&P.minFilter!==Si?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),V(E),E.isVideoTexture&&_.delete(E)}function k(P){const E=P.target;E.removeEventListener("dispose",k),A(E)}function V(P){const E=r.get(P);if(E.__webglInit===void 0)return;const J=P.source,me=y.get(J);if(me){const ve=me[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&N(P),Object.keys(me).length===0&&y.delete(J)}r.remove(P)}function N(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const J=P.source,me=y.get(J);delete me[E.__cacheKey],d.memory.textures--}function A(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let ve=0;ve<E.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=P.textures;for(let me=0,ve=J.length;me<ve;me++){const fe=r.get(J[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(J[me])}r.remove(P)}let z=0;function ae(){z=0}function te(){const P=z;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),z+=1,P}function ue(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function he(P,E){const J=r.get(P);if(P.isVideoTexture&&$e(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,P,E);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function oe(P,E){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function le(P,E){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,E);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function H(P,E){const J=r.get(P);if(P.version>0&&J.__version!==P.version){de(J,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const ce={[md]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[gd]:s.MIRRORED_REPEAT},re={[di]:s.NEAREST,[l_]:s.NEAREST_MIPMAP_NEAREST,[nl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[bu]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},U={[f_]:s.NEVER,[v_]:s.ALWAYS,[h_]:s.LESS,[xg]:s.LEQUAL,[p_]:s.EQUAL,[x_]:s.GEQUAL,[m_]:s.GREATER,[g_]:s.NOTEQUAL};function ie(P,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Si||E.magFilter===bu||E.magFilter===nl||E.magFilter===Zr||E.minFilter===Si||E.minFilter===bu||E.minFilter===nl||E.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ce[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ce[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ce[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,re[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===di||E.minFilter!==nl&&E.minFilter!==Zr||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function De(P,E){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const me=E.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const fe=ue(E);if(fe!==P.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,J=!0),ve[fe].usedTimes++;const Xe=ve[P.__cacheKey];Xe!==void 0&&(ve[P.__cacheKey].usedTimes--,Xe.usedTimes===0&&N(E)),P.__cacheKey=fe,P.__webglTexture=ve[fe].texture}return J}function Q(P,E,J){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const ve=De(P,E),fe=E.source;n.bindTexture(me,P.__webglTexture,s.TEXTURE0+J);const Xe=r.get(fe);if(fe.version!==Xe.__version||ve===!0){n.activeTexture(s.TEXTURE0+J);const be=bt.getPrimaries(bt.workingColorSpace),Ue=E.colorSpace===yr?null:bt.getPrimaries(E.colorSpace),ut=E.colorSpace===yr||be===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ee=C(E.image,!1,o.maxTextureSize);Ee=Ct(E,Ee);const Fe=c.convert(E.format,E.colorSpace),Qe=c.convert(E.type);let et=D(E.internalFormat,Fe,Qe,E.colorSpace,E.isVideoTexture);ie(me,E);let Oe;const ht=E.mipmaps,it=E.isVideoTexture!==!0,At=Xe.__version===void 0||ve===!0,W=fe.dataReady,Ae=G(E,Ee);if(E.isDepthTexture)et=R(E.format===qs,E.type),At&&(it?n.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Fe,Qe,null));else if(E.isDataTexture)if(ht.length>0){it&&At&&n.texStorage2D(s.TEXTURE_2D,Ae,et,ht[0].width,ht[0].height);for(let se=0,pe=ht.length;se<pe;se++)Oe=ht[se],it?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Qe,Oe.data):n.texImage2D(s.TEXTURE_2D,se,et,Oe.width,Oe.height,0,Fe,Qe,Oe.data);E.generateMipmaps=!1}else it?(At&&n.texStorage2D(s.TEXTURE_2D,Ae,et,Ee.width,Ee.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Fe,Qe,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Fe,Qe,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,ht[0].width,ht[0].height,Ee.depth);for(let se=0,pe=ht.length;se<pe;se++)if(Oe=ht[se],E.format!==ui)if(Fe!==null)if(it){if(W)if(E.layerUpdates.size>0){const Pe=vm(Oe.width,Oe.height,E.format,E.type);for(const Ne of E.layerUpdates){const rt=Oe.data.subarray(Ne*Pe/Oe.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Ne,Oe.width,Oe.height,1,Fe,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Ee.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,et,Oe.width,Oe.height,Ee.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Ee.depth,Fe,Qe,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,et,Oe.width,Oe.height,Ee.depth,0,Fe,Qe,Oe.data)}else{it&&At&&n.texStorage2D(s.TEXTURE_2D,Ae,et,ht[0].width,ht[0].height);for(let se=0,pe=ht.length;se<pe;se++)Oe=ht[se],E.format!==ui?Fe!==null?it?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,se,et,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Qe,Oe.data):n.texImage2D(s.TEXTURE_2D,se,et,Oe.width,Oe.height,0,Fe,Qe,Oe.data)}else if(E.isDataArrayTexture)if(it){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,Ee.width,Ee.height,Ee.depth),W)if(E.layerUpdates.size>0){const se=vm(Ee.width,Ee.height,E.format,E.type);for(const pe of E.layerUpdates){const Pe=Ee.data.subarray(pe*se/Ee.data.BYTES_PER_ELEMENT,(pe+1)*se/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Fe,Qe,Pe)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,Qe,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,Fe,Qe,Ee.data);else if(E.isData3DTexture)it?(At&&n.texStorage3D(s.TEXTURE_3D,Ae,et,Ee.width,Ee.height,Ee.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,Qe,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,Fe,Qe,Ee.data);else if(E.isFramebufferTexture){if(At)if(it)n.texStorage2D(s.TEXTURE_2D,Ae,et,Ee.width,Ee.height);else{let se=Ee.width,pe=Ee.height;for(let Pe=0;Pe<Ae;Pe++)n.texImage2D(s.TEXTURE_2D,Pe,et,se,pe,0,Fe,Qe,null),se>>=1,pe>>=1}}else if(ht.length>0){if(it&&At){const se=We(ht[0]);n.texStorage2D(s.TEXTURE_2D,Ae,et,se.width,se.height)}for(let se=0,pe=ht.length;se<pe;se++)Oe=ht[se],it?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,Qe,Oe):n.texImage2D(s.TEXTURE_2D,se,et,Fe,Qe,Oe);E.generateMipmaps=!1}else if(it){if(At){const se=We(Ee);n.texStorage2D(s.TEXTURE_2D,Ae,et,se.width,se.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Qe,Ee)}else n.texImage2D(s.TEXTURE_2D,0,et,Fe,Qe,Ee);S(E)&&x(me),Xe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,J){if(E.image.length!==6)return;const me=De(P,E),ve=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const fe=r.get(ve);if(ve.version!==fe.__version||me===!0){n.activeTexture(s.TEXTURE0+J);const Xe=bt.getPrimaries(bt.workingColorSpace),be=E.colorSpace===yr?null:bt.getPrimaries(E.colorSpace),Ue=E.colorSpace===yr||Xe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!ut&&!Ee?Fe[pe]=C(E.image[pe],!0,o.maxCubemapSize):Fe[pe]=Ee?E.image[pe].image:E.image[pe],Fe[pe]=Ct(E,Fe[pe]);const Qe=Fe[0],et=c.convert(E.format,E.colorSpace),Oe=c.convert(E.type),ht=D(E.internalFormat,et,Oe,E.colorSpace),it=E.isVideoTexture!==!0,At=fe.__version===void 0||me===!0,W=ve.dataReady;let Ae=G(E,Qe);ie(s.TEXTURE_CUBE_MAP,E);let se;if(ut){it&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ht,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){se=Fe[pe].mipmaps;for(let Pe=0;Pe<se.length;Pe++){const Ne=se[Pe];E.format!==ui?et!==null?it?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Ne.width,Ne.height,et,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,ht,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Ne.width,Ne.height,et,Oe,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,ht,Ne.width,Ne.height,0,et,Oe,Ne.data)}}}else{if(se=E.mipmaps,it&&At){se.length>0&&Ae++;const pe=We(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,et,Oe,Fe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,Fe[pe].width,Fe[pe].height,0,et,Oe,Fe[pe].data);for(let Pe=0;Pe<se.length;Pe++){const rt=se[Pe].image[pe].image;it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,rt.width,rt.height,et,Oe,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,ht,rt.width,rt.height,0,et,Oe,rt.data)}}else{it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Oe,Fe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,et,Oe,Fe[pe]);for(let Pe=0;Pe<se.length;Pe++){const Ne=se[Pe];it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,et,Oe,Ne.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,ht,et,Oe,Ne.image[pe])}}}S(E)&&x(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function we(P,E,J,me,ve,fe){const Xe=c.convert(J.format,J.colorSpace),be=c.convert(J.type),Ue=D(J.internalFormat,Xe,be,J.colorSpace),ut=r.get(E),Ee=r.get(J);if(Ee.__renderTarget=E,!ut.__hasExternalTextures){const Fe=Math.max(1,E.width>>fe),Qe=Math.max(1,E.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,fe,Ue,Fe,Qe,E.depth,0,Xe,be,null):n.texImage2D(ve,fe,Ue,Fe,Qe,0,Xe,be,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ft(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,mt(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const me=E.depthTexture,ve=me&&me.isDepthTexture?me.type:null,fe=R(E.stencilBuffer,ve),Xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=mt(E);ft(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,fe,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,P)}else{const me=E.textures;for(let ve=0;ve<me.length;ve++){const fe=me[ve],Xe=c.convert(fe.format,fe.colorSpace),be=c.convert(fe.type),Ue=D(fe.internalFormat,Xe,be,fe.colorSpace),ut=mt(E);J&&ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Ue,E.width,E.height):ft(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ve=me.__webglTexture,fe=mt(E);if(E.depthTexture.format===zs)ft(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(E.depthTexture.format===qs)ft(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ze(P){const E=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=me}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ye(E.__webglFramebuffer,P)}else if(J){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(E.__webglDepthbuffer[me],P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xe(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function je(P,E,J){const me=r.get(P);E!==void 0&&we(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&ze(P)}function Rt(P){const E=P.texture,J=r.get(P),me=r.get(E);P.addEventListener("dispose",k);const ve=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Xe=ve.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,d.memory.textures++),fe){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)J.__webglFramebuffer[be][Ue]=s.createFramebuffer()}else J.__webglFramebuffer[be]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)J.__webglFramebuffer[be]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let be=0,Ue=ve.length;be<Ue;be++){const ut=r.get(ve[be]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&ft(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Ue=ve[be];J.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const ut=c.convert(Ue.format,Ue.colorSpace),Ee=c.convert(Ue.type),Fe=D(Ue.internalFormat,ut,Ee,Ue.colorSpace,P.isXRRenderTarget===!0),Qe=mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Fe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,J.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)we(J.__webglFramebuffer[be][Ue],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue);else we(J.__webglFramebuffer[be],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(E)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let be=0,Ue=ve.length;be<Ue;be++){const ut=ve[be],Ee=r.get(ut);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),ie(s.TEXTURE_2D,ut),we(J.__webglFramebuffer,P,ut,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),S(ut)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let be=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,me.__webglTexture),ie(be,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)we(J.__webglFramebuffer[Ue],P,E,s.COLOR_ATTACHMENT0,be,Ue);else we(J.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,be,0);S(E)&&x(be),n.unbindTexture()}P.depthBuffer&&ze(P)}function Lt(P){const E=P.textures;for(let J=0,me=E.length;J<me;J++){const ve=E[J];if(S(ve)){const fe=L(P),Xe=r.get(ve).__webglTexture;n.bindTexture(fe,Xe),x(fe),n.unbindTexture()}}}const ct=[],B=[];function _n(P){if(P.samples>0){if(ft(P)===!1){const E=P.textures,J=P.width,me=P.height;let ve=s.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(P),be=E.length>1;if(be)for(let Ue=0;Ue<E.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ut=r.get(E[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,ve,s.NEAREST),m===!0&&(ct.length=0,B.length=0,ct.push(s.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(fe),B.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<E.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ut=r.get(E[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ut,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function mt(P){return Math.min(o.maxSamples,P.samples)}function ft(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $e(P){const E=d.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Ct(P,E){const J=P.colorSpace,me=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==$s&&J!==yr&&(bt.getTransfer(J)===Nt?(me!==ui||ve!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=H,this.rebindTextures=je,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ft}function Uw(s,e){function n(r,o=yr){let c;const d=bt.getTransfer(o);if(r===Gi)return s.UNSIGNED_BYTE;if(r===ef)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ag)return s.BYTE;if(r===og)return s.SHORT;if(r===Ha)return s.UNSIGNED_SHORT;if(r===Jd)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Va)return s.HALF_FLOAT;if(r===cg)return s.ALPHA;if(r===ug)return s.RGB;if(r===ui)return s.RGBA;if(r===dg)return s.LUMINANCE;if(r===fg)return s.LUMINANCE_ALPHA;if(r===zs)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===hg)return s.RED;if(r===nf)return s.RED_INTEGER;if(r===pg)return s.RG;if(r===rf)return s.RG_INTEGER;if(r===sf)return s.RGBA_INTEGER;if(r===Tl||r===bl||r===Al||r===Cl)if(d===Nt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Tl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Tl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xd||r===vd||r===_d||r===yd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===Md||r===wd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Sd||r===Md)return d===Nt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ed||r===Td||r===bd||r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Dd||r===Ld||r===Id||r===Ud||r===kd||r===Fd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ed)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Td)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ad)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ld)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Id)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ud)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fd)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Od||r===Bd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rl)return d===Nt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mg||r===zd||r===Hd||r===Vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new kn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Er({vertexShader:kw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new In(new Vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bw extends Ks{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",m=1,g=null,_=null,v=null,y=null,M=null,T=null;const C=new Ow,S=n.getContextAttributes();let x=null,L=null;const D=[],R=[],G=new yt;let F=null;const k=new jn;k.viewport=new Pt;const V=new jn;V.viewport=new Pt;const N=[k,V],A=new sy;let z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=D[Q];return de===void 0&&(de=new $u,D[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=D[Q];return de===void 0&&(de=new $u,D[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=D[Q];return de===void 0&&(de=new $u,D[Q]=de),de.getHandSpace()};function te(Q){const de=R.indexOf(Q.inputSource);if(de===-1)return;const we=D[de];we!==void 0&&(we.update(Q.inputSource,Q.frame,g||d),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",he);for(let Q=0;Q<D.length;Q++){const de=R[Q];de!==null&&(R[Q]=null,D[Q].disconnect(de))}z=null,ae=null,C.reset(),e.setRenderTarget(x),M=null,y=null,v=null,o=null,L=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,xe=null,ye=null;S.depth&&(ye=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=S.stencil?qs:zs,xe=S.stencil?Xs:Qr);const ze={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:c};v=new XRWebGLBinding(o,n),y=v.createProjectionLayer(ze),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Jr(y.textureWidth,y.textureHeight,{format:ui,type:Gi,depthTexture:new Rg(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const we={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,we),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Jr(M.framebufferWidth,M.framebufferHeight,{format:ui,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),g=null,d=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function he(Q){for(let de=0;de<Q.removed.length;de++){const we=Q.removed[de],xe=R.indexOf(we);xe>=0&&(R[xe]=null,D[xe].disconnect(we))}for(let de=0;de<Q.added.length;de++){const we=Q.added[de];let xe=R.indexOf(we);if(xe===-1){for(let ze=0;ze<D.length;ze++)if(ze>=R.length){R.push(we),xe=ze;break}else if(R[ze]===null){R[ze]=we,xe=ze;break}if(xe===-1)break}const ye=D[xe];ye&&ye.connect(we)}}const oe=new $,le=new $;function H(Q,de,we){oe.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(we.matrixWorld);const xe=oe.distanceTo(le),ye=de.projectionMatrix.elements,ze=we.projectionMatrix.elements,je=ye[14]/(ye[10]-1),Rt=ye[14]/(ye[10]+1),Lt=(ye[9]+1)/ye[5],ct=(ye[9]-1)/ye[5],B=(ye[8]-1)/ye[0],_n=(ze[8]+1)/ze[0],mt=je*B,ft=je*_n,$e=xe/(-B+_n),Ct=$e*-B;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ct),Q.translateZ($e),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ye[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=je+$e,P=Rt+$e,E=mt-Ct,J=ft+(xe-Ct),me=Lt*Rt/P*We,ve=ct*Rt/P*We;Q.projectionMatrix.makePerspective(E,J,me,ve,We,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let de=Q.near,we=Q.far;C.texture!==null&&(C.depthNear>0&&(de=C.depthNear),C.depthFar>0&&(we=C.depthFar)),A.near=V.near=k.near=de,A.far=V.far=k.far=we,(z!==A.near||ae!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,ae=A.far),k.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,A.layers.mask=k.layers.mask|V.layers.mask;const xe=Q.parent,ye=A.cameras;ce(A,xe);for(let ze=0;ze<ye.length;ze++)ce(ye[ze],xe);ye.length===2?H(A,k,V):A.projectionMatrix.copy(k.projectionMatrix),re(Q,A,xe)};function re(Q,de,we){we===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=jd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(Q){m=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let U=null;function ie(Q,de){if(_=de.getViewerPose(g||d),T=de,_!==null){const we=_.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let xe=!1;we.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let je=0;je<we.length;je++){const Rt=we[je];let Lt=null;if(M!==null)Lt=M.getViewport(Rt);else{const B=v.getViewSubImage(y,Rt);Lt=B.viewport,je===0&&(e.setRenderTargetTextures(L,B.colorTexture,y.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(L))}let ct=N[je];ct===void 0&&(ct=new jn,ct.layers.enable(je),ct.viewport=new Pt,N[je]=ct),ct.matrix.fromArray(Rt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Rt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),je===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(ct)}const ye=o.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const je=v.getDepthInformation(we[0]);je&&je.isValid&&je.texture&&C.init(e,je,o.renderState)}}for(let we=0;we<D.length;we++){const xe=R[we],ye=D[we];xe!==null&&ye!==void 0&&ye.update(xe,de,g||d)}U&&U(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const De=new Dg;De.setAnimationLoop(ie),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Gr=new Mi,zw=new Ht;function Hw(s,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Tg(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,L,D,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),_(S,x)):x.isMeshStandardMaterial?(c(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,R)):x.isMeshMatcapMaterial?(c(S,x),T(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),C(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?m(S,x,L,D):x.isSpriteMaterial?g(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Un&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Un&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),D=L.envMap,R=L.envMapRotation;D&&(S.envMap.value=D,Gr.copy(R),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),S.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(Gr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,L,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=D*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Vw(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const R=D.program;r.uniformBlockBinding(L,R)}function g(L,D){let R=o[L.id];R===void 0&&(T(L),R=_(L),o[L.id]=R,L.addEventListener("dispose",S));const G=D.program;r.updateUBOMapping(L,G);const F=e.render.frame;c[L.id]!==F&&(y(L),c[L.id]=F)}function _(L){const D=v();L.__bindingPointIndex=D;const R=s.createBuffer(),G=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function v(){for(let L=0;L<f;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const D=o[L.id],R=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,k=R.length;F<k;F++){const V=Array.isArray(R[F])?R[F]:[R[F]];for(let N=0,A=V.length;N<A;N++){const z=V[N];if(M(z,F,N,G)===!0){const ae=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let he=0;he<te.length;he++){const oe=te[he],le=C(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+ue,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,D,R,G){const F=L.value,k=D+"_"+R;if(G[k]===void 0)return typeof F=="number"||typeof F=="boolean"?G[k]=F:G[k]=F.clone(),!0;{const V=G[k];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return G[k]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function T(L){const D=L.uniforms;let R=0;const G=16;for(let k=0,V=D.length;k<V;k++){const N=Array.isArray(D[k])?D[k]:[D[k]];for(let A=0,z=N.length;A<z;A++){const ae=N[A],te=Array.isArray(ae.value)?ae.value:[ae.value];for(let ue=0,he=te.length;ue<he;ue++){const oe=te[ue],le=C(oe),H=R%G,ce=H%le.boundary,re=H+ce;R+=ce,re!==0&&G-re<le.storage&&(R+=G-re),ae.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=le.storage}}}const F=R%G;return F>0&&(R+=G-F),L.__size=R,L.__cache={},this}function C(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function S(L){const D=L.target;D.removeEventListener("dispose",S);const R=d.indexOf(D.__bindingPointIndex);d.splice(R,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function x(){for(const L in o)s.deleteBuffer(o[L]);d=[],o={},c={}}return{bind:m,update:g,dispose:x}}class jw{constructor(e={}){const{canvas:n=y_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),C=new Int32Array(4);let S=null,x=null;const L=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let G=!1,F=0,k=0,V=null,N=-1,A=null;const z=new Pt,ae=new Pt;let te=null;const ue=new _t(0);let he=0,oe=n.width,le=n.height,H=1,ce=null,re=null;const U=new Pt(0,0,oe,le),ie=new Pt(0,0,oe,le);let De=!1;const Q=new of;let de=!1,we=!1;this.transmissionResolutionScale=1;const xe=new Ht,ye=new Ht,ze=new $,je=new Pt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ct(){return V===null?H:1}let B=r;function _n(b,X){return n.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),B===null){const X="webgl2";if(B=_n(X,b),B===null)throw _n(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let mt,ft,$e,Ct,We,P,E,J,me,ve,fe,Xe,be,Ue,ut,Ee,Fe,Qe,et,Oe,ht,it,At,W;function Ae(){mt=new JM(B),mt.init(),it=new Uw(B,mt),ft=new XM(B,mt,e,it),$e=new Lw(B,mt),ft.reverseDepthBuffer&&y&&$e.buffers.depth.setReversed(!0),Ct=new n1(B),We=new yw,P=new Iw(B,mt,$e,We,ft,it,Ct),E=new $M(R),J=new QM(R),me=new ly(B),At=new GM(B,me),ve=new e1(B,me,Ct,At),fe=new r1(B,ve,me,Ct),et=new i1(B,ft,P),Ee=new qM(We),Xe=new _w(R,E,J,mt,ft,At,Ee),be=new Hw(R,We),Ue=new Mw,ut=new Cw(mt),Qe=new jM(R,E,J,$e,fe,M,m),Fe=new Pw(R,fe,ft),W=new Vw(B,Ct,ft,$e),Oe=new WM(B,mt,Ct),ht=new t1(B,mt,Ct),Ct.programs=Xe.programs,R.capabilities=ft,R.extensions=mt,R.properties=We,R.renderLists=Ue,R.shadowMap=Fe,R.state=$e,R.info=Ct}Ae();const se=new Bw(R,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(oe,le,!1))},this.getSize=function(b){return b.set(oe,le)},this.setSize=function(b,X,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=b,le=X,n.width=Math.floor(b*H),n.height=Math.floor(X*H),ee===!0&&(n.style.width=b+"px",n.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(oe*H,le*H).floor()},this.setDrawingBufferSize=function(b,X,ee){oe=b,le=X,H=ee,n.width=Math.floor(b*ee),n.height=Math.floor(X*ee),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,X,ee,K){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,X,ee,K),$e.viewport(z.copy(U).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,X,ee,K){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,X,ee,K),$e.scissor(ae.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){$e.setScissorTest(De=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,ee=!0){let K=0;if(b){let q=!1;if(V!==null){const Me=V.texture.format;q=Me===sf||Me===rf||Me===nf}if(q){const Me=V.texture.type,Ce=Me===Gi||Me===Qr||Me===Ha||Me===Xs||Me===ef||Me===tf,Le=Qe.getClearColor(),Be=Qe.getClearAlpha(),tt=Le.r,Je=Le.g,Ve=Le.b;Ce?(T[0]=tt,T[1]=Je,T[2]=Ve,T[3]=Be,B.clearBufferuiv(B.COLOR,0,T)):(C[0]=tt,C[1]=Je,C[2]=Ve,C[3]=Be,B.clearBufferiv(B.COLOR,0,C))}else K|=B.COLOR_BUFFER_BIT}X&&(K|=B.DEPTH_BUFFER_BIT),ee&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Qe.dispose(),Ue.dispose(),ut.dispose(),We.dispose(),E.dispose(),J.dispose(),fe.dispose(),At.dispose(),W.dispose(),Xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",es),se.removeEventListener("sessionend",Xi),wi.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const b=Ct.autoReset,X=Fe.enabled,ee=Fe.autoUpdate,K=Fe.needsUpdate,q=Fe.type;Ae(),Ct.autoReset=b,Fe.enabled=X,Fe.autoUpdate=ee,Fe.needsUpdate=K,Fe.type=q}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const X=b.target;X.removeEventListener("dispose",rt),kt(X)}function kt(b){Kt(b),We.remove(b)}function Kt(b){const X=We.get(b).programs;X!==void 0&&(X.forEach(function(ee){Xe.releaseProgram(ee)}),b.isShaderMaterial&&Xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ee,K,q,Me){X===null&&(X=Rt);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Le=Ya(b,X,ee,K,q);$e.setMaterial(K,Ce);let Be=ee.index,tt=1;if(K.wireframe===!0){if(Be=ve.getWireframeAttribute(ee),Be===void 0)return;tt=2}const Je=ee.drawRange,Ve=ee.attributes.position;let vt=Je.start*tt,at=(Je.start+Je.count)*tt;Me!==null&&(vt=Math.max(vt,Me.start*tt),at=Math.min(at,(Me.start+Me.count)*tt)),Be!==null?(vt=Math.max(vt,0),at=Math.min(at,Be.count)):Ve!=null&&(vt=Math.max(vt,0),at=Math.min(at,Ve.count));const Gt=at-vt;if(Gt<0||Gt===1/0)return;At.setup(q,K,Le,ee,Be);let Bt,St=Oe;if(Be!==null&&(Bt=me.get(Be),St=ht,St.setIndex(Bt)),q.isMesh)K.wireframe===!0?($e.setLineWidth(K.wireframeLinewidth*ct()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(q.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),$e.setLineWidth(Ye*ct()),q.isLineSegments?St.setMode(B.LINES):q.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else q.isPoints?St.setMode(B.POINTS):q.isSprite&&St.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,Wt=q._multiDrawCounts,gt=q._multiDrawCount,dn=Be?me.get(Be).bytesPerElement:1,$i=We.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<gt;Sn++)$i.setValue(B,"_gl_DrawID",Sn),St.render(Ye[Sn]/dn,Wt[Sn])}else if(q.isInstancedMesh)St.renderInstances(vt,Gt,q.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Wt=Math.min(ee.instanceCount,Ye);St.renderInstances(vt,Gt,Wt)}else St.render(vt,Gt)};function Mt(b,X,ee){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=Un,b.needsUpdate=!0,ts(b,X,ee),b.side=wr,b.needsUpdate=!0,ts(b,X,ee),b.side=zi):ts(b,X,ee)}this.compile=function(b,X,ee=null){ee===null&&(ee=b),x=ut.get(ee),x.init(X),D.push(x),ee.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),b!==ee&&b.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const K=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Le=Me[Ce];Mt(Le,ee,q),K.add(Le)}else Mt(Me,ee,q),K.add(Me)}),x=D.pop(),K},this.compileAsync=function(b,X,ee=null){const K=this.compile(b,X,ee);return new Promise(q=>{function Me(){if(K.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){q(b);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let bn=null;function yn(b){bn&&bn(b)}function es(){wi.stop()}function Xi(){wi.start()}const wi=new Dg;wi.setAnimationLoop(yn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(b){bn=b,se.setAnimationLoop(b),b===null?wi.stop():wi.start()},se.addEventListener("sessionstart",es),se.addEventListener("sessionend",Xi),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,X,V),x=ut.get(b,D.length),x.init(X),D.push(x),ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(ye),we=this.localClippingEnabled,de=Ee.init(this.clippingPlanes,we),S=Ue.get(b,L.length),S.init(),L.push(S),se.enabled===!0&&se.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&Ei(Me,X,-1/0,R.sortObjects)}Ei(b,X,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ce,re),Lt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Lt&&Qe.addToRenderList(S,b),this.info.render.frame++,de===!0&&Ee.beginShadows();const ee=x.state.shadowsArray;Fe.render(ee,b,X),de===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,q=S.transmissive;if(x.setupLights(),X.isArrayCamera){const Me=X.cameras;if(q.length>0)for(let Ce=0,Le=Me.length;Ce<Le;Ce++){const Be=Me[Ce];br(K,q,b,Be)}Lt&&Qe.render(b);for(let Ce=0,Le=Me.length;Ce<Le;Ce++){const Be=Me[Ce];Tr(S,b,Be,Be.viewport)}}else q.length>0&&br(K,q,b,X),Lt&&Qe.render(b),Tr(S,b,X);V!==null&&k===0&&(P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V)),b.isScene===!0&&b.onAfterRender(R,b,X),At.resetDefaultState(),N=-1,A=null,D.pop(),D.length>0?(x=D[D.length-1],de===!0&&Ee.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ei(b,X,ee,K){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ee=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){K&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ye);const Ce=fe.update(b),Le=b.material;Le.visible&&S.push(b,Ce,Le,ee,je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Ce=fe.update(b),Le=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),je.copy(Ce.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(ye)),Array.isArray(Le)){const Be=Ce.groups;for(let tt=0,Je=Be.length;tt<Je;tt++){const Ve=Be[tt],vt=Le[Ve.materialIndex];vt&&vt.visible&&S.push(b,Ce,vt,ee,je.z,Ve)}}else Le.visible&&S.push(b,Ce,Le,ee,je.z,null)}}const Me=b.children;for(let Ce=0,Le=Me.length;Ce<Le;Ce++)Ei(Me[Ce],X,ee,K)}function Tr(b,X,ee,K){const q=b.opaque,Me=b.transmissive,Ce=b.transparent;x.setupLightsView(ee),de===!0&&Ee.setGlobalState(R.clippingPlanes,ee),K&&$e.viewport(z.copy(K)),q.length>0&&qi(q,X,ee),Me.length>0&&qi(Me,X,ee),Ce.length>0&&qi(Ce,X,ee),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function br(b,X,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new Jr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Va:Gi,minFilter:Zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Me=x.state.transmissionRenderTarget[K.id],Ce=K.viewport||z;Me.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const Le=R.getRenderTarget();R.setRenderTarget(Me),R.getClearColor(ue),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Lt&&Qe.render(ee);const Be=R.toneMapping;R.toneMapping=Mr;const tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),de===!0&&Ee.setGlobalState(R.clippingPlanes,K),qi(b,ee,K),P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ve=0,vt=X.length;Ve<vt;Ve++){const at=X[Ve],Gt=at.object,Bt=at.geometry,St=at.material,Ye=at.group;if(St.side===zi&&Gt.layers.test(K.layers)){const Wt=St.side;St.side=Un,St.needsUpdate=!0,qa(Gt,ee,K,Bt,St,Ye),St.side=Wt,St.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me))}R.setRenderTarget(Le),R.setClearColor(ue,he),tt!==void 0&&(K.viewport=tt),R.toneMapping=Be}function qi(b,X,ee){const K=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Me=b.length;q<Me;q++){const Ce=b[q],Le=Ce.object,Be=Ce.geometry,tt=K===null?Ce.material:K,Je=Ce.group;Le.layers.test(ee.layers)&&qa(Le,X,ee,Be,tt,Je)}}function qa(b,X,ee,K,q,Me){b.onBeforeRender(R,X,ee,K,q,Me),b.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,X,ee,K,b,Me),q.transparent===!0&&q.side===zi&&q.forceSinglePass===!1?(q.side=Un,q.needsUpdate=!0,R.renderBufferDirect(ee,X,K,q,b,Me),q.side=wr,q.needsUpdate=!0,R.renderBufferDirect(ee,X,K,q,b,Me),q.side=zi):R.renderBufferDirect(ee,X,K,q,b,Me),b.onAfterRender(R,X,ee,K,q,Me)}function ts(b,X,ee){X.isScene!==!0&&(X=Rt);const K=We.get(b),q=x.state.lights,Me=x.state.shadowsArray,Ce=q.state.version,Le=Xe.getParameters(b,q.state,Me,X,ee),Be=Xe.getProgramCacheKey(Le);let tt=K.programs;K.environment=b.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(b.isMeshStandardMaterial?J:E).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",rt),tt=new Map,K.programs=tt);let Je=tt.get(Be);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===Ce)return pi(b,Le),Je}else Le.uniforms=Xe.getUniforms(b),b.onBeforeCompile(Le,R),Je=Xe.acquireProgram(Le,Be),tt.set(Be,Je),K.uniforms=Le.uniforms;const Ve=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),pi(b,Le),K.needsLights=Gl(b),K.lightsStateVersion=Ce,K.needsLights&&(Ve.ambientLightColor.value=q.state.ambient,Ve.lightProbe.value=q.state.probe,Ve.directionalLights.value=q.state.directional,Ve.directionalLightShadows.value=q.state.directionalShadow,Ve.spotLights.value=q.state.spot,Ve.spotLightShadows.value=q.state.spotShadow,Ve.rectAreaLights.value=q.state.rectArea,Ve.ltc_1.value=q.state.rectAreaLTC1,Ve.ltc_2.value=q.state.rectAreaLTC2,Ve.pointLights.value=q.state.point,Ve.pointLightShadows.value=q.state.pointShadow,Ve.hemisphereLights.value=q.state.hemi,Ve.directionalShadowMap.value=q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ve.spotShadowMap.value=q.state.spotShadowMap,Ve.spotLightMatrix.value=q.state.spotLightMatrix,Ve.spotLightMap.value=q.state.spotLightMap,Ve.pointShadowMap.value=q.state.pointShadowMap,Ve.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Je,K.uniformsList=null,Je}function $a(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Nl.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function pi(b,X){const ee=We.get(b);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Ya(b,X,ee,K,q){X.isScene!==!0&&(X=Rt),P.resetTextureUnits();const Me=X.fog,Ce=K.isMeshStandardMaterial?X.environment:null,Le=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:$s,Be=(K.isMeshStandardMaterial?J:E).get(K.envMap||Ce),tt=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,at=!!ee.morphAttributes.color;let Gt=Mr;K.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const Bt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,St=Bt!==void 0?Bt.length:0,Ye=We.get(K),Wt=x.state.lights;if(de===!0&&(we===!0||b!==A)){const ln=b===A&&K.id===N;Ee.setState(K,b,ln)}let gt=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Wt.state.version||Ye.outputColorSpace!==Le||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==Be||K.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==Je||Ye.morphTargets!==Ve||Ye.morphNormals!==vt||Ye.morphColors!==at||Ye.toneMapping!==Gt||Ye.morphTargetsCount!==St)&&(gt=!0):(gt=!0,Ye.__version=K.version);let dn=Ye.currentProgram;gt===!0&&(dn=ts(K,X,q));let $i=!1,Sn=!1,Ti=!1;const Dt=dn.getUniforms(),fn=Ye.uniforms;if($e.useProgram(dn.program)&&($i=!0,Sn=!0,Ti=!0),K.id!==N&&(N=K.id,Sn=!0),$i||A!==b){$e.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),M_(xe),w_(xe),Dt.setValue(B,"projectionMatrix",xe)):Dt.setValue(B,"projectionMatrix",b.projectionMatrix),Dt.setValue(B,"viewMatrix",b.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(B,ze.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Sn=!0,Ti=!0)}if(q.isSkinnedMesh){Dt.setOptional(B,q,"bindMatrix"),Dt.setOptional(B,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(B,"boneTexture",ln.boneTexture,P))}q.isBatchedMesh&&(Dt.setOptional(B,q,"batchingTexture"),Dt.setValue(B,"batchingTexture",q._matricesTexture,P),Dt.setOptional(B,q,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",q._indirectTexture,P),Dt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",q._colorsTexture,P));const tn=ee.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&et.update(q,ee,dn),(Sn||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Dt.setValue(B,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fn.envMap.value=Be,fn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(fn.envMapIntensity.value=X.environmentIntensity),Sn&&(Dt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&Ka(fn,Ti),Me&&K.fog===!0&&be.refreshFogUniforms(fn,Me),be.refreshMaterialUniforms(fn,K,H,le,x.state.transmissionRenderTarget[b.id]),Nl.upload(B,$a(Ye),fn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Nl.upload(B,$a(Ye),fn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(B,"center",q.center),Dt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(B,"normalMatrix",q.normalMatrix),Dt.setValue(B,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let nn=0,wt=ln.length;nn<wt;nn++){const mi=ln[nn];W.update(mi,dn),W.bind(mi,dn)}}return dn}function Ka(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Gl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(b,X,ee){We.get(b.texture).__webglTexture=X,We.get(b.depthTexture).__webglTexture=ee;const K=We.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=ee===void 0,K.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const ee=We.get(b);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const Za=B.createFramebuffer();this.setRenderTarget=function(b,X=0,ee=0){V=b,F=X,k=ee;let K=!0,q=null,Me=!1,Ce=!1;if(b){const Be=We.get(b);if(Be.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(Be.__hasExternalTextures)P.rebindTextures(b,We.get(b.texture).__webglTexture,We.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ve=b.depthTexture;if(Be.__boundDepthTexture!==Ve){if(Ve!==null&&We.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Je=We.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?q=Je[X][ee]:q=Je[X],Me=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?q=We.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?q=Je[ee]:q=Je,z.copy(b.viewport),ae.copy(b.scissor),te=b.scissorTest}else z.copy(U).multiplyScalar(H).floor(),ae.copy(ie).multiplyScalar(H).floor(),te=De;if(ee!==0&&(q=Za),$e.bindFramebuffer(B.FRAMEBUFFER,q)&&K&&$e.drawBuffers(b,q),$e.viewport(z),$e.scissor(ae),$e.setScissorTest(te),Me){const Be=We.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ee)}else if(Ce){const Be=We.get(b.texture),tt=X;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,ee,tt)}else if(b!==null&&ee!==0){const Be=We.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,ee)}N=-1},this.readRenderTargetPixels=function(b,X,ee,K,q,Me,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){$e.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Be=b.texture,tt=Be.format,Je=Be.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-K&&ee>=0&&ee<=b.height-q&&B.readPixels(X,ee,K,q,it.convert(tt),it.convert(Je),Me)}finally{const Be=V!==null?We.get(V).__webglFramebuffer:null;$e.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,X,ee,K,q,Me,Ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){const Be=b.texture,tt=Be.format,Je=Be.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-K&&ee>=0&&ee<=b.height-q){$e.bindFramebuffer(B.FRAMEBUFFER,Le);const Ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),B.readPixels(X,ee,K,q,it.convert(tt),it.convert(Je),0);const vt=V!==null?We.get(V).__webglFramebuffer:null;$e.bindFramebuffer(B.FRAMEBUFFER,vt);const at=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await S_(B,at,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(Ve),B.deleteSync(at),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,ee=0){b.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-ee),q=Math.floor(b.image.width*K),Me=Math.floor(b.image.height*K),Ce=X!==null?X.x:0,Le=X!==null?X.y:0;P.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Ce,Le,q,Me),$e.unbindTexture()};const Qa=B.createFramebuffer(),Ja=B.createFramebuffer();this.copyTextureToTexture=function(b,X,ee=null,K=null,q=0,Me=null){b.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],X=arguments[2],Me=arguments[3]||0,ee=null),Me===null&&(q!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=q,q=0):Me=0);let Ce,Le,Be,tt,Je,Ve,vt,at,Gt;const Bt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(ee!==null)Ce=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Je=ee.min.y,Ve=ee.isBox3?ee.min.z:0;else{const tn=Math.pow(2,-q);Ce=Math.floor(Bt.width*tn),Le=Math.floor(Bt.height*tn),b.isDataArrayTexture?Be=Bt.depth:b.isData3DTexture?Be=Math.floor(Bt.depth*tn):Be=1,tt=0,Je=0,Ve=0}K!==null?(vt=K.x,at=K.y,Gt=K.z):(vt=0,at=0,Gt=0);const St=it.convert(X.format),Ye=it.convert(X.type);let Wt;X.isData3DTexture?(P.setTexture3D(X,0),Wt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Wt=B.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Wt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$i=B.getParameter(B.UNPACK_SKIP_PIXELS),Sn=B.getParameter(B.UNPACK_SKIP_ROWS),Ti=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve);const Dt=b.isDataArrayTexture||b.isData3DTexture,fn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const tn=We.get(b),ln=We.get(X),nn=We.get(tn.__renderTarget),wt=We.get(ln.__renderTarget);$e.bindFramebuffer(B.READ_FRAMEBUFFER,nn.__webglFramebuffer),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mi=0;mi<Be;mi++)Dt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(b).__webglTexture,q,Ve+mi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Me,Gt+mi)),B.blitFramebuffer(tt,Je,Ce,Le,vt,at,Ce,Le,B.DEPTH_BUFFER_BIT,B.NEAREST);$e.bindFramebuffer(B.READ_FRAMEBUFFER,null),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||We.has(b)){const tn=We.get(b),ln=We.get(X);$e.bindFramebuffer(B.READ_FRAMEBUFFER,Qa),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ja);for(let nn=0;nn<Be;nn++)Dt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tn.__webglTexture,q,Ve+nn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tn.__webglTexture,q),fn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,Me,Gt+nn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,Me),q!==0?B.blitFramebuffer(tt,Je,Ce,Le,vt,at,Ce,Le,B.COLOR_BUFFER_BIT,B.NEAREST):fn?B.copyTexSubImage3D(Wt,Me,vt,at,Gt+nn,tt,Je,Ce,Le):B.copyTexSubImage2D(Wt,Me,vt,at,tt,Je,Ce,Le);$e.bindFramebuffer(B.READ_FRAMEBUFFER,null),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fn?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Wt,Me,vt,at,Gt,Ce,Le,Be,St,Ye,Bt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Wt,Me,vt,at,Gt,Ce,Le,Be,St,Bt.data):B.texSubImage3D(Wt,Me,vt,at,Gt,Ce,Le,Be,St,Ye,Bt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Me,vt,at,Ce,Le,St,Ye,Bt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Me,vt,at,Bt.width,Bt.height,St,Bt.data):B.texSubImage2D(B.TEXTURE_2D,Me,vt,at,Ce,Le,St,Ye,Bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$i),B.pixelStorei(B.UNPACK_SKIP_ROWS,Sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ti),Me===0&&X.generateMipmaps&&B.generateMipmap(Wt),$e.unbindTexture()},this.copyTextureToTexture3D=function(b,X,ee=null,K=null,q=0){return b.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,K=arguments[1]||null,b=arguments[2],X=arguments[3],q=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,ee,K,q)},this.initRenderTarget=function(b){We.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),$e.unbindTexture()},this.resetState=function(){F=0,k=0,V=null,$e.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}function Gw(){if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||window.innerWidth<640)return!1;try{const e=document.createElement("canvas");return!!(e.getContext("webgl2")||e.getContext("webgl"))}catch{return!1}}const Ww=()=>h.jsxs("div",{className:"relative w-full max-w-md mx-auto py-6 px-4",children:[h.jsx("div",{className:"absolute -top-10 -left-10 w-48 h-48 bg-neon-cyan/20 rounded-full blur-3xl pointer-events-none"}),h.jsx("div",{className:"absolute -bottom-10 -right-10 w-48 h-48 bg-neon-violet/25 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"relative rounded-2xl bg-dark-900/80 backdrop-blur-xl border border-white/10 p-5 shadow-2xl shadow-neon-cyan/5 transition-all duration-500 hover:border-neon-cyan/40 group",children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-white/10",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500/80 inline-block"}),h.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500/80 inline-block"}),h.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500/80 inline-block"})]}),h.jsxs("div",{className:"px-3 py-1 rounded-md bg-dark-850 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"}),"vaibhavsonkusare.dev"]}),h.jsx("div",{className:"text-slate-500 group-hover:text-neon-cyan transition-colors",children:h.jsx(Vs,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"h-32 rounded-xl bg-gradient-to-tr from-dark-800 via-dark-850 to-dark-700/80 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden",children:[h.jsx("div",{className:"absolute right-3 -bottom-4 opacity-20 text-neon-cyan",children:h.jsx(Kd,{className:"w-24 h-24"})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20",children:"AI + MODERN STACK"}),h.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"Clean Architecture"})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-slate-300 font-medium",children:"Bespoke Design & Performance Engineering"}),h.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"International standard websites tailored for high conversion"})]})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[h.jsxs("div",{className:"p-2.5 rounded-xl bg-dark-850/90 border border-white/5",children:[h.jsxs("div",{className:"text-neon-cyan font-bold text-sm sm:text-base flex items-center justify-center gap-1",children:[h.jsx(Fl,{className:"w-3.5 h-3.5"})," AI"]}),h.jsx("div",{className:"text-[10px] text-slate-400 font-mono mt-0.5",children:"Assisted Speed"})]}),h.jsxs("div",{className:"p-2.5 rounded-xl bg-dark-850/90 border border-white/5",children:[h.jsxs("div",{className:"text-neon-electric font-bold text-sm sm:text-base flex items-center justify-center gap-1",children:[h.jsx($d,{className:"w-3.5 h-3.5"})," 100%"]}),h.jsx("div",{className:"text-[10px] text-slate-400 font-mono mt-0.5",children:"Responsive"})]}),h.jsxs("div",{className:"p-2.5 rounded-xl bg-dark-850/90 border border-white/5",children:[h.jsxs("div",{className:"text-neon-violet font-bold text-sm sm:text-base flex items-center justify-center gap-1",children:[h.jsx(Wi,{className:"w-3.5 h-3.5"})," Direct"]}),h.jsx("div",{className:"text-[10px] text-slate-400 font-mono mt-0.5",children:"1-on-1 Contact"})]})]})]}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),h.jsx("span",{className:"text-[11px]",children:"Accepting Enquiries"})]}),h.jsx("span",{className:"text-[11px] font-mono text-neon-cyan",children:"USD & International"})]})]})]}),Xw=()=>{const s=Ut.useRef(null),[e,n]=Ut.useState(!1),[r,o]=Ut.useState(!1);return Ut.useEffect(()=>{if(!Gw()||!s.current){n(!0);return}const c=s.current;let d,f;try{const m=new $_,g=c.clientWidth||500,_=c.clientHeight||500,v=new jn(45,g/_,.1,100);v.position.z=7,f=new jw({alpha:!0,antialias:!0,powerPreference:"high-performance"}),f.setSize(g,_),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(f.domElement);const y=new ry(988194,2.5);m.add(y);const M=new gm(62206,3.5,20);M.position.set(4,3,5),m.add(M);const T=new gm(9055202,3,20);T.position.set(-4,-3,3),m.add(T);const C=new Fa;m.add(C);const S=new Il(1.6,0),x=new Q_({color:659488,metalness:.1,roughness:.15,transmission:.9,thickness:1.2,reflectivity:.9,clearcoat:1,clearcoatRoughness:.1,wireframe:!1}),L=new In(S,x);C.add(L);const D=new Il(1.62,0),R=new Ba({color:62206,wireframe:!0,transparent:!0,opacity:.35}),G=new In(D,R);C.add(G);const F=new lf(.7,0),k=new Ng({color:9055202,emissive:7153881,emissiveIntensity:1.8,roughness:.2,metalness:.8}),V=new In(F,k);C.add(V);const N=new Ul(2.4,.02,16,100),A=new Ba({color:3718648,transparent:!0,opacity:.4}),z=new In(N,A);z.rotation.x=Math.PI/3,C.add(z);const ae=new Ul(2.7,.015,16,100),te=new Ba({color:11032055,transparent:!0,opacity:.3}),ue=new In(ae,te);ue.rotation.y=Math.PI/4,C.add(ue);const he=45,oe=new hi,le=new Float32Array(he*3);for(let ye=0;ye<he*3;ye+=3)le[ye]=(Math.random()-.5)*8,le[ye+1]=(Math.random()-.5)*8,le[ye+2]=(Math.random()-.5)*6;oe.setAttribute("position",new fi(le,3));const H=new Cg({color:62206,size:.04,transparent:!0,opacity:.6}),ce=new Z_(oe,H);m.add(ce),o(!0);let re=0,U=0,ie=0,De=0;const Q=ye=>{const ze=c.getBoundingClientRect(),je=(ye.clientX-ze.left)/ze.width-.5,Rt=(ye.clientY-ze.top)/ze.height-.5;U=je*.8,re=Rt*.8};window.addEventListener("mousemove",Q);const de=()=>{if(!c)return;const ye=c.clientWidth,ze=c.clientHeight;v.aspect=ye/ze,v.updateProjectionMatrix(),f.setSize(ye,ze)};window.addEventListener("resize",de);let we=new ay;const xe=()=>{d=requestAnimationFrame(xe);const ye=we.getElapsedTime();ie+=(re-ie)*.05,De+=(U-De)*.05,C.rotation.x=ie+Math.sin(ye*.5)*.15,C.rotation.y=De+ye*.35,V.rotation.y=-ye*.7,V.rotation.z=ye*.5,z.rotation.z=ye*.2,ue.rotation.x=ye*.15,ce.rotation.y=ye*.05,C.position.y=Math.sin(ye*1.2)*.15,f.render(m,v)};return xe(),()=>{window.removeEventListener("mousemove",Q),window.removeEventListener("resize",de),cancelAnimationFrame(d),f&&f.domElement&&c.contains(f.domElement)&&(c.removeChild(f.domElement),f.dispose()),S.dispose(),x.dispose(),D.dispose(),R.dispose(),F.dispose(),k.dispose(),N.dispose(),A.dispose(),ae.dispose(),te.dispose(),oe.dispose(),H.dispose()}}catch(m){console.warn("WebGL initialization note: Switching gracefully to high-performance CSS centerpiece fallback.",m),n(!0)}},[]),e?h.jsx(Ww,{}):h.jsxs("div",{className:"relative w-full h-[380px] sm:h-[450px] lg:h-[520px] flex items-center justify-center",children:[!r&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:h.jsx("div",{className:"w-12 h-12 rounded-full border-2 border-neon-cyan/20 border-t-neon-cyan animate-spin"})}),h.jsx("div",{ref:s,className:"w-full h-full cursor-grab active:cursor-grabbing",style:{touchAction:"pan-y"},"aria-label":"Interactive 3D Geometric Centerpiece"}),h.jsxs("div",{className:"absolute -bottom-2 sm:bottom-4 left-4 right-4 sm:left-auto sm:right-6 pointer-events-none flex items-center justify-between sm:justify-end gap-3",children:[h.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2 shadow-lg",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-neon-cyan animate-ping"}),h.jsx("span",{children:"Three.js Engine"})]}),h.jsx("div",{className:"px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-400",children:"Interactive Parallax"})]})]})},qw=()=>h.jsxs("section",{className:"relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden bg-dark-950",children:[h.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden pointer-events-none",children:[h.jsx("img",{src:st.heroBackgroundImage,alt:"Vaibhav Sonkusare Creative Web Studio Workstation",className:"w-full h-full object-cover object-top sm:object-center lg:object-right opacity-35 sm:opacity-40 filter contrast-105 brightness-95"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/90"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 lg:via-dark-950/60 to-transparent"})]}),h.jsx("div",{className:"absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[120px] pointer-events-none z-0"}),h.jsx("div",{className:"absolute bottom-10 -right-32 w-96 h-96 bg-neon-violet/15 rounded-full blur-[140px] pointer-events-none z-0"}),h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 text-center lg:text-left space-y-6",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850/90 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md shadow-inner",children:[h.jsx(Wi,{className:"w-3.5 h-3.5 text-neon-cyan animate-pulse"}),h.jsx("span",{className:"font-semibold text-white tracking-wider",children:st.brandName.toUpperCase()})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("h1",{className:"text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] break-words",children:st.heroHeadline}),h.jsx("h2",{className:"text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-slate-200 to-slate-400 leading-snug",children:st.heroSupportingHeadline})]}),h.jsx("p",{className:"text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed",children:st.heroSupportingParagraph}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2",children:[h.jsx(Jn,{href:"#enquire",variant:"primary",size:"lg",icon:h.jsx(kl,{className:"w-5 h-5"}),className:"w-full sm:w-auto min-h-[48px] justify-center",children:"Start a Project"}),h.jsx(Jn,{href:"#work",variant:"secondary",size:"lg",className:"w-full sm:w-auto min-h-[48px] justify-center",children:"Explore My Work"})]}),h.jsxs("div",{className:"pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 text-left",children:[h.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-300",children:[h.jsx(za,{className:"w-4 h-4 text-emerald-400 shrink-0"}),h.jsx("span",{children:"AI-Assisted & No-Code"})]}),h.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-300",children:[h.jsx(Nv,{className:"w-4 h-4 text-neon-cyan shrink-0"}),h.jsx("span",{children:"Custom Coded Polish"})]}),h.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-300",children:[h.jsx(Zd,{className:"w-4 h-4 text-neon-electric shrink-0"}),h.jsx("span",{children:"International Delivery"})]})]})]}),h.jsx("div",{className:"lg:col-span-5 w-full flex justify-center items-center",children:h.jsx(Xw,{})})]})})]}),$w=[{id:"business-websites",title:"Business Websites",shortDesc:"Structured, multi-page business websites designed to build immediate credibility with international clients and present your offerings clearly.",businessBenefit:"Transforms passive visitors into qualified leads through thoughtful visual hierarchy and clear conversion pathways.",keyDeliverables:["Custom multi-page architecture","Lead capture & consultation forms","Clean SEO & mobile responsiveness"],icon:"Building2",status:"Available Now",ctaText:"Discuss Business Website"},{id:"landing-pages",title:"Landing Pages",shortDesc:"High-impact, single-goal landing pages built for product launches, ad campaigns, and founder waitlists.",businessBenefit:"Maximizes conversion rates by focusing visitor attention strictly on your primary business proposition without distraction.",keyDeliverables:["Conversion-focused layout","A/B test ready structure","Lightning-fast initial page load"],icon:"Rocket",status:"Available Now",ctaText:"Discuss Landing Page"},{id:"personal-portfolios",title:"Personal Portfolio Websites",shortDesc:"Editorial, high-authority websites for consultants, creators, executives, and freelancers looking to elevate their personal brand.",businessBenefit:"Positions you as a serious industry professional, opening doors for speaking engagements, client contracts, and collaborations.",keyDeliverables:["Curated case study showcases","Interactive biography & media kit","Direct inquiry integration"],icon:"Sparkles",status:"Available Now",ctaText:"Discuss Portfolio Website"},{id:"ecommerce-websites",title:"E-commerce Websites",shortDesc:"Modern, streamlined digital storefronts designed for boutique brands and digital product sellers.",businessBenefit:"Delivers an enjoyable, frictionless purchasing journey with responsive product showcases and clear checkout guidance.",keyDeliverables:["Curated product catalog layout","Cart & checkout UI flow","Multi-currency display support"],icon:"ShoppingBag",status:"Available Now",ctaText:"Discuss E-commerce Store"},{id:"website-redesigns",title:"Website Redesigns",shortDesc:"Modernization of outdated, cluttered, or underperforming websites into sleek, responsive digital assets.",businessBenefit:"Restores brand reputation, lowers bounce rates, and aligns your digital presence with contemporary global design standards.",keyDeliverables:["Aesthetic design overhaul","Content re-alignment","Mobile experience optimization"],icon:"RefreshCw",status:"Available Now",ctaText:"Discuss Website Redesign"},{id:"responsive-development",title:"Responsive Website Development",shortDesc:"Precision frontend development guaranteeing pixel-perfect typography and fluid interactions across smartphones, tablets, and 4K displays.",businessBenefit:"Ensures zero lost opportunities by serving flawless mobile experiences to visitors in any timezone or device.",keyDeliverables:["Mobile-first fluid layouts","Cross-browser tested styles","Zero horizontal overflow"],icon:"Smartphone",status:"Available Now",ctaText:"Discuss Responsive Build"},{id:"ai-assisted-creation",title:"AI-Assisted Website Creation",shortDesc:"Harnessing modern AI design and code-assist tools to accelerate prototyping, explore layouts rapidly, and eliminate agency overhead.",businessBenefit:"Allows faster delivery and iterative refinement while maintaining strict manual polish and code cleanliness.",keyDeliverables:["Rapid prototype generation","AI-optimized copy structure","Clean, maintainable code"],icon:"Cpu",status:"Available Now",ctaText:"Discuss AI-Assisted Project"},{id:"maintenance-improvements",title:"Website Maintenance & Improvements",shortDesc:"Ongoing technical support, speed optimizations, periodic content updates, and incremental design enhancements.",businessBenefit:"Keeps your web property dependable, secure, and fresh without needing a full-time in-house developer.",keyDeliverables:["Performance checkups","Content updates & additions","Direct technical support"],icon:"Wrench",status:"In Active Development",ctaText:"Inquire About Maintenance"}],Yw={Building2:h.jsx(U0,{className:"w-6 h-6 text-neon-cyan"}),Rocket:h.jsx(Jm,{className:"w-6 h-6 text-neon-electric"}),Sparkles:h.jsx(Wi,{className:"w-6 h-6 text-neon-violet"}),ShoppingBag:h.jsx(_v,{className:"w-6 h-6 text-amber-400"}),RefreshCw:h.jsx(ov,{className:"w-6 h-6 text-emerald-400"}),Smartphone:h.jsx(eg,{className:"w-6 h-6 text-sky-400"}),Cpu:h.jsx(Fl,{className:"w-6 h-6 text-purple-400"}),Wrench:h.jsx(ng,{className:"w-6 h-6 text-orange-400"})},Kw=()=>h.jsx("section",{id:"services",className:"py-24 relative bg-dark-950/70 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[h.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan",children:h.jsx("span",{children:"TAILORED WEB SOLUTIONS"})}),h.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Services & Capabilities"}),h.jsx("p",{className:"text-slate-400 text-sm sm:text-base",children:"Modern, business-oriented website development combining AI-powered workflows, flexible no-code builders, and handcrafted frontend code."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:$w.map(s=>h.jsxs("div",{className:"rounded-3xl bg-dark-900/80 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-neon-cyan/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-neon-cyan/5 group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-5",children:[h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform",children:Yw[s.icon]||h.jsx(Wi,{className:"w-6 h-6 text-neon-cyan"})}),h.jsx("span",{className:`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${s.status==="Available Now"?"bg-emerald-500/10 text-emerald-300 border-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/25"}`,children:s.status})]}),h.jsx("h3",{className:"text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors",children:s.title}),h.jsx("p",{className:"text-xs text-slate-300 mb-4 leading-relaxed",children:s.shortDesc}),h.jsxs("div",{className:"p-3 rounded-xl bg-dark-850/90 border border-white/5 mb-4",children:[h.jsx("span",{className:"text-[10px] font-mono text-neon-electric uppercase tracking-wider block mb-1",children:"Business Value:"}),h.jsx("p",{className:"text-xs text-slate-300 leading-snug",children:s.businessBenefit})]}),h.jsx("div",{className:"space-y-1.5 mb-6",children:s.keyDeliverables.map((e,n)=>h.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] text-slate-400",children:[h.jsx(Xm,{className:"w-3 h-3 text-neon-cyan shrink-0"}),h.jsx("span",{children:e})]},n))})]}),h.jsx("div",{className:"pt-4 border-t border-white/5",children:h.jsxs("a",{href:"#enquire",className:"w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-dark-800 hover:bg-dark-750 text-xs font-semibold text-neon-cyan hover:text-white flex items-center justify-center gap-1.5 transition-all border border-white/5 hover:border-neon-cyan/30",children:[h.jsx("span",{children:s.ctaText}),h.jsx(kl,{className:"w-3.5 h-3.5"})]})})]},s.id))}),h.jsxs("div",{className:"mt-12 p-5 rounded-2xl bg-dark-850/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(Zd,{className:"w-4 h-4 text-neon-cyan shrink-0"}),h.jsx("span",{children:"Honest capability boundary: I tailor tools specifically to each project rather than forcing unnecessary complexity."})]}),h.jsx("span",{className:"font-mono text-slate-300",children:"No-Code + AI + Custom Code"})]})]})}),Zw=[{id:"project-a-business",projectCode:"Project A",title:"Modern Business Website",brandName:"Vanguard Strategy Group",category:"Business Website",headline:"International Management Consultancy & Advisory Platform",shortDescription:"A sophisticated multi-section business website designed to establish authority, present complex advisory practices clearly, and drive corporate consultation inquiries.",isConcept:!0,statusBadge:"Concept Project — Demonstration Only",accentGradient:"from-blue-600 to-cyan-500",previewCardStyle:"from-[#0A1128] via-[#101F42] to-[#1C3166]",highlights:["Complete structured homepage layout","Dedicated advisory services directory","Executive team and methodology section","Corporate consultation booking interface"],caseStudy:{designGoals:"Create a commanding, trustworthy digital presence suitable for an international corporate consulting firm, emphasizing clarity, intellectual rigour, and transparent service offerings.",designDecisions:["Adopted deep navy and charcoal hues with crisp white typography for high institutional authority.","Structured modular practice area cards to prevent visual fatigue on dense technical content.","Engineered an intuitive consultation inquiry flow to reduce friction for prospective corporate clients."],toolsAndMethods:["AI-assisted structure prototyping for rapid content modeling","React & Tailwind CSS for modern responsive performance","Semantic HTML5 architecture for structured search indexing"],demonstrationOverview:"Demonstrates end-to-end multi-page layout architecture, corporate typography hierarchy, and business consultation lead capture workflows.",clientNotice:"This is an original concept project created for visual and architectural demonstration. It was not commissioned by an active client."}},{id:"project-b-saas",projectCode:"Project B",title:"SaaS Landing Page",brandName:"PulseFlow AI",category:"Landing Page",headline:"Conversion-Focused Landing Page for a Next-Gen Team Telemetry Tool",shortDescription:"A high-conversion landing page for a fictional software product, engineered with an impactful hero section, dynamic feature highlights, pricing matrices, FAQ, and conversion CTAs.",isConcept:!0,statusBadge:"Concept Project — Demonstration Only",accentGradient:"from-violet-600 to-indigo-500",previewCardStyle:"from-[#130924] via-[#21113E] to-[#361D66]",highlights:["Hero section with dynamic visual software preview","Interactive 3-pillar feature breakdown","Interactive monthly/annual pricing matrix layout","Comprehensive FAQ accordion and final conversion callout"],caseStudy:{designGoals:"Demonstrate conversion rate optimization (CRO) principles by guiding the visitor through a deliberate storytelling journey from problem identification to product trial.",designDecisions:["Positioned primary CTA above the fold with subtle glow reinforcement.","Utilized modern glassmorphic preview cards to showcase software dashboards cleanly.","Structured a responsive FAQ accordion to address client pre-sale objections proactively."],toolsAndMethods:["AI-accelerated layout iteration and copywriting frameworks","CSS micro-animations and smooth scroll triggers","Accessible interactive UI components"],demonstrationOverview:"Demonstrates high-converting SaaS landing page design, conversion copywriting structure, and interactive components.",clientNotice:"This is an original concept project created for visual and architectural demonstration. No real sales, traffic, or client figures are claimed."}},{id:"project-c-ecommerce",projectCode:"Project C",title:"E-commerce Concept",brandName:"Solis Horology",category:"E-commerce Storefront",headline:"Minimalist Online Storefront for Bespoke Mechanical Timepieces",shortDescription:"A premium e-commerce storefront concept showcasing high-end product cards, detailed specification modals, dynamic cart drawer preview, and multi-currency navigation.",isConcept:!0,statusBadge:"Concept Project — Demonstration Only",accentGradient:"from-amber-500 to-orange-600",previewCardStyle:"from-[#1F1404] via-[#332207] to-[#54380C]",highlights:["Editorial product grid with tactile hover states","Product detail preview layout with specifications","Interactive slide-over cart drawer mockup","Dynamic currency display indicator (USD / EUR / GBP)"],caseStudy:{designGoals:"Showcase the ability to design high-end luxury e-commerce experiences that evoke craftsmanship through generous whitespace, restrained palettes, and smooth shopping interactions.",designDecisions:["Kept product photography front-and-center with minimal distracting chrome.","Designed a seamless cart summary drawer to preview the complete purchase journey without page jumps.","Included international currency indicators for global shoppers."],toolsAndMethods:["React state management for real-time cart interaction simulation","Tailwind CSS responsive grid system for fluid product sizing","Optimized vector iconography for crisp display across Retina screens"],demonstrationOverview:"Demonstrates luxury e-commerce aesthetics, product catalog layouts, interactive cart drawer UX, and international shopping patterns.",clientNotice:"This is an original concept project created for visual and architectural demonstration. Not an active transactional retail store."}}],Qw=({project:s,onClose:e})=>(Ut.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return s&&(document.body.style.overflow="hidden",window.addEventListener("keydown",n)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",n)}},[s,e]),s?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-in fade-in duration-200",children:h.jsxs("div",{className:"relative w-full max-w-3xl rounded-3xl bg-dark-900 border border-white/15 p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:[h.jsx("button",{onClick:e,className:"absolute top-4 right-4 sm:top-5 sm:right-5 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-neon-cyan/50","aria-label":"Close case study preview",children:h.jsx(Ol,{className:"w-5 h-5"})}),h.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-amber-300 text-xs leading-relaxed",children:[h.jsx(qd,{className:"w-4 h-4 shrink-0 mt-0.5 text-amber-400"}),h.jsxs("div",{children:[h.jsx("strong",{className:"font-semibold block",children:s.statusBadge}),h.jsx("span",{children:s.caseStudy.clientNotice})]})]}),h.jsxs("div",{className:"space-y-2 mb-6",children:[h.jsx("div",{className:"flex items-center gap-2",children:h.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/25",children:[s.projectCode," • ",s.category]})}),h.jsx("h3",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:s.brandName}),h.jsx("p",{className:"text-sm sm:text-base text-slate-300",children:s.headline})]}),h.jsxs("div",{className:`h-48 sm:h-56 rounded-2xl bg-gradient-to-r ${s.previewCardStyle} border border-white/10 p-6 flex flex-col justify-end relative overflow-hidden mb-8`,children:[h.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-25"}),h.jsxs("div",{className:"relative z-10 space-y-1",children:[h.jsx("span",{className:"text-[10px] font-mono text-white/70 uppercase tracking-widest",children:"Interactive Architectural Concept"}),h.jsx("h4",{className:"text-lg font-bold text-white flex items-center gap-2",children:h.jsxs("span",{children:[s.title," Demonstration System"]})})]})]}),h.jsxs("div",{className:"space-y-6 mb-8",children:[h.jsxs("div",{className:"p-5 rounded-2xl bg-dark-850/90 border border-white/5 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-wider",children:[h.jsx(tg,{className:"w-4 h-4"}),h.jsx("span",{children:"Design Goals"})]}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:s.caseStudy.designGoals})]}),h.jsxs("div",{className:"p-5 rounded-2xl bg-dark-850/90 border border-white/5 space-y-2.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-neon-electric uppercase tracking-wider",children:[h.jsx(Yd,{className:"w-4 h-4"}),h.jsx("span",{children:"Key Design & UX Decisions"})]}),h.jsx("div",{className:"space-y-2",children:s.caseStudy.designDecisions.map((n,r)=>h.jsxs("div",{className:"flex items-start gap-2 text-xs sm:text-sm text-slate-200",children:[h.jsx(za,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),h.jsx("span",{children:n})]},r))})]}),h.jsxs("div",{className:"p-5 rounded-2xl bg-dark-850/90 border border-white/5 space-y-2.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-neon-violet uppercase tracking-wider",children:[h.jsx(ng,{className:"w-4 h-4"}),h.jsx("span",{children:"Tools & Methodology"})]}),h.jsx("div",{className:"space-y-2",children:s.caseStudy.toolsAndMethods.map((n,r)=>h.jsxs("div",{className:"flex items-start gap-2 text-xs sm:text-sm text-slate-300",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-neon-violet shrink-0 mt-2"}),h.jsx("span",{children:n})]},r))})]})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-800/60 border border-white/5 text-xs text-slate-400 mb-8 font-mono",children:[h.jsx("strong",{className:"text-slate-300 block mb-1",children:"Architecture Demonstration:"}),s.caseStudy.demonstrationOverview]}),h.jsxs("div",{className:"pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsx("p",{className:"text-xs text-slate-400",children:"Ready to build a website tailored to your specific business?"}),h.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[h.jsx(Jn,{href:"#enquire",variant:"primary",size:"sm",icon:h.jsx(Vs,{className:"w-4 h-4"}),onClick:e,className:"w-full sm:w-auto",children:"Start a Project"}),h.jsx(Jn,{variant:"outline",size:"sm",onClick:e,className:"w-full sm:w-auto",children:"Close"})]})]})]})}):null),Jw=()=>{const[s,e]=Ut.useState(null);return h.jsxs("section",{id:"work",className:"py-24 relative bg-dark-900/50 border-t border-white/5",children:[h.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-cyan/5 rounded-full blur-[160px] pointer-events-none"}),h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14 space-y-4",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-electric",children:[h.jsx(Kd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"DEMONSTRATION PORTFOLIO"})]}),h.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Curated Showcase Projects"}),h.jsx("p",{className:"text-slate-400 text-sm sm:text-base leading-relaxed",children:"I am actively building my professional portfolio. Below are three fully realized concept projects engineered to demonstrate my design quality, frontend capabilities, and strategic approach."}),h.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-dark-850/90 border border-white/10 text-xs text-slate-300 max-w-xl mx-auto text-left sm:text-center",children:[h.jsx(qd,{className:"w-4 h-4 text-amber-400 shrink-0"}),h.jsx("span",{children:"All projects are fictional concept brands built for visual and architectural demonstration. Client case studies will be published upon completion."})]})]}),h.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:Zw.map(n=>h.jsxs("div",{className:"rounded-3xl bg-dark-900/85 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-2xl hover:shadow-neon-cyan/10 hover:-translate-y-1.5 group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:`h-52 rounded-t-3xl bg-gradient-to-br ${n.previewCardStyle} p-6 flex flex-col justify-between relative overflow-hidden`,children:[h.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-25 group-hover:opacity-40 transition-opacity"}),h.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[h.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-mono font-bold bg-dark-950/80 text-neon-cyan border border-white/10 backdrop-blur-md",children:n.projectCode}),h.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:"Concept Demo"})]}),h.jsxs("div",{className:"relative z-10 space-y-1",children:[h.jsx("span",{className:"text-[11px] font-mono text-slate-300 uppercase tracking-wider",children:n.category}),h.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2",children:[h.jsx("span",{children:n.brandName}),h.jsx(Wi,{className:"w-4 h-4 text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]}),h.jsxs("div",{className:"p-6 space-y-4",children:[h.jsxs("div",{children:[h.jsx("h4",{className:"text-base font-bold text-white group-hover:text-neon-cyan transition-colors",children:n.title}),h.jsx("p",{className:"text-xs font-mono text-neon-electric mt-0.5",children:n.headline})]}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:n.shortDescription}),h.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-white/5",children:[h.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1",children:"Included Architecture:"}),n.highlights.map((r,o)=>h.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-300",children:[h.jsx(Xm,{className:"w-3.5 h-3.5 text-neon-cyan shrink-0"}),h.jsx("span",{children:r})]},o))]})]})]}),h.jsx("div",{className:"p-6 pt-0 mt-4",children:h.jsxs("button",{onClick:()=>e(n),className:"w-full min-h-[44px] py-3 px-4 rounded-xl bg-dark-800 hover:bg-dark-750 border border-white/10 hover:border-neon-cyan/40 text-xs font-semibold text-slate-200 hover:text-neon-cyan flex items-center justify-center gap-2 transition-all cursor-pointer",children:[h.jsx($m,{className:"w-4 h-4"}),h.jsx("span",{children:"View Case Study & Spec"}),h.jsx(Vs,{className:"w-3.5 h-3.5"})]})})]},n.id))}),h.jsxs("div",{className:"mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6",children:[h.jsxs("div",{className:"space-y-2 text-center lg:text-left",children:[h.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Have a unique business or product to launch?"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 max-w-xl",children:"I can help you build a clean, conversion-engineered website using a pragmatic mix of no-code speed and custom-coded polish."})]}),h.jsx(Jn,{href:"#enquire",variant:"primary",size:"md",icon:h.jsx(Vs,{className:"w-4 h-4"}),className:"w-full sm:w-auto min-h-[44px] justify-center",children:"Start a Project Enquiry"})]})]}),h.jsx(Qw,{project:s,onClose:()=>e(null)})]})},eE=()=>{const s=[{title:"Direct Collaboration & Clear Communication",description:"You communicate directly with the person architecting, designing, and coding your site. No account handlers, no misinterpreted briefs, and zero agency bureaucratic delay.",icon:h.jsx(Ev,{className:"w-6 h-6 text-neon-cyan"}),tag:"1-on-1 Focus"},{title:"AI-Assisted Efficiency & Agility",description:"I integrate state-of-the-art AI tooling into design ideation and code generation workflows, accelerating turnaround while dedicating time to handcrafted polish and performance.",icon:h.jsx(Fl,{className:"w-6 h-6 text-neon-violet"}),tag:"Modern Workflows"},{title:"Flawless Multi-Device Responsiveness",description:"Every layout is tested across mobile screens, tablets, laptops, and wide monitors. Your visitors receive a seamless, intuitive experience no matter what device they use.",icon:h.jsx(eg,{className:"w-6 h-6 text-neon-electric"}),tag:"Responsive First"},{title:"Clear Scope & Transparent Pricing",description:"All milestones, deliverables, and payment structures are explicitly agreed upon before development kicks off. No surprise charges or vague contractual ambiguities.",icon:h.jsx(K0,{className:"w-6 h-6 text-emerald-400"}),tag:"Upfront Integrity"},{title:"Engineered for Real Business Objectives",description:"A website must be more than eye candy—it must communicate your value proposition, build institutional trust, and make it effortless for prospects to get in touch.",icon:h.jsx(tg,{className:"w-6 h-6 text-amber-400"}),tag:"Outcome Driven"},{title:"Honest, Realistic Commitments",description:"I provide realistic technical timelines and genuine capability commitments without making unsupported guarantees about search rankings, instantaneous traffic, or inflated claims.",icon:h.jsx(pv,{className:"w-6 h-6 text-sky-400"}),tag:"No Gimmicks"}];return h.jsx("section",{id:"why-me",className:"py-24 relative bg-dark-950/70 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[h.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan",children:h.jsx("span",{children:"THE FREELANCE ADVANTAGE"})}),h.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Why Work Directly With Me"}),h.jsx("p",{className:"text-slate-400 text-base sm:text-lg",children:"A focused partnership delivering international-standard digital solutions with speed, clarity, and personal accountability."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map((e,n)=>h.jsx("div",{className:"p-7 rounded-3xl bg-dark-900/70 backdrop-blur-md border border-white/10 flex flex-col justify-between hover:border-white/25 hover:shadow-xl hover:shadow-neon-cyan/5 transition-all duration-300 group",children:h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-5",children:[h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform",children:e.icon}),h.jsx("span",{className:"text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5",children:e.tag})]}),h.jsx("h3",{className:"text-lg font-bold text-white mb-2.5 group-hover:text-neon-cyan transition-colors",children:e.title}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:e.description})]})},n))})]})})},tE=[{stepNumber:"01",stepName:"Discovery",headline:"Understanding Your Vision",description:"You share your business background, primary goals, website requirements, and desired budget through direct communication.",icon:"Compass"},{stepNumber:"02",stepName:"Planning",headline:"Scope, Proposal & Timeline",description:"I review your specifications in detail and prepare an actionable project scope, transparent proposal, and estimated timeline.",icon:"FileCheck"},{stepNumber:"03",stepName:"Design and Development",headline:"Building the Experience",description:"I craft the website using an intentional combination of no-code tools and AI-assisted custom development for optimal polish and speed.",icon:"Code2"},{stepNumber:"04",stepName:"Review",headline:"Collaborative Feedback",description:"You review the functional website previews and provide targeted feedback to ensure alignment with the agreed project scope.",icon:"Eye"},{stepNumber:"05",stepName:"Delivery",headline:"Launch & Handover",description:"I deliver the completed website to your hosting environment and provide clear instructions for ongoing content maintenance.",icon:"Rocket"}],nE=[{id:"starter-website",packageName:"Starter Website",tagline:"Ideal for product launches, single offers, or simple personal presence.",priceDisplay:"Request a Quote",numberOfPages:"Single Page / Landing Page",estimatedDeliveryTime:"1 to 2 Weeks (Estimated)",revisionPolicy:"2 rounds of included revisions within scope",includedFeatures:["Custom responsive single-page design","AI-accelerated prototyping and styling","Mobile and tablet responsive layout","Direct email inquiry integration","Essential SEO meta tags and social preview setup"],additionalServices:"Optional domain configuration & copy assistance"},{id:"business-website",packageName:"Business Website",tagline:"Perfect for growing companies, creative studios, and service providers.",priceDisplay:"Request a Quote",numberOfPages:"3 to 6 Custom Pages",estimatedDeliveryTime:"2 to 4 Weeks (Estimated)",revisionPolicy:"2 rounds of included revisions within scope",includedFeatures:["Multi-page architecture (Home, About, Services, Contact)","Interactive showcase or portfolio gallery","Tailored typography and high-contrast dark aesthetic","Full mobile responsiveness across all devices","Structured SEO metadata & OpenGraph tags","14 days post-handover support"],additionalServices:"Optional CMS setup & performance optimization",isPopular:!0},{id:"premium-website",packageName:"Premium Website",tagline:"Designed for unique brands seeking custom interactions or 3D elements.",priceDisplay:"Request a Quote",numberOfPages:"Custom Scope (5+ Pages or Bespoke App)",estimatedDeliveryTime:"3 to 6 Weeks (Estimated)",revisionPolicy:"Collaborative milestone-based review rounds",includedFeatures:["Custom coded interactive elements or 3D visual centerpiece","Complete brand visual identity implementation","Advanced responsive interactions and micro-animations","International multi-currency display capabilities","Priority direct communication throughout project lifecycle"],additionalServices:"Custom integrations & tailored deployment setups"}],iE={Compass:h.jsx(Yd,{className:"w-5 h-5 text-neon-cyan"}),FileCheck:h.jsx(Q0,{className:"w-5 h-5 text-emerald-400"}),Code2:h.jsx($d,{className:"w-5 h-5 text-neon-electric"}),Eye:h.jsx($m,{className:"w-5 h-5 text-neon-violet"}),Rocket:h.jsx(Jm,{className:"w-5 h-5 text-amber-400"})},rE=()=>h.jsx("section",{id:"process",className:"py-24 relative bg-dark-950/60 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan",children:[h.jsx(Yd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"HOW I WORK"})]}),h.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"A Transparent 5-Step Process"}),h.jsx("p",{className:"text-slate-400 text-sm sm:text-base leading-relaxed",children:"Collaborating with an independent website creator should be simple, clear, and reassuring. Here is how we turn your vision into a published reality."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24",children:tE.map(s=>h.jsxs("div",{className:"p-6 rounded-3xl bg-dark-900/85 backdrop-blur-md border border-white/10 flex flex-col justify-between hover:border-neon-cyan/40 transition-all duration-300 group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-electric",children:s.stepNumber}),h.jsx("div",{className:"w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform",children:iE[s.icon]})]}),h.jsx("div",{className:"text-xs font-mono text-neon-cyan font-bold uppercase tracking-wider mb-1",children:s.stepName}),h.jsx("h3",{className:"text-base font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors",children:s.headline}),h.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:s.description})]}),h.jsxs("div",{className:"pt-4 mt-4 border-t border-white/5 text-[11px] text-slate-400 font-mono",children:["Step ",s.stepNumber," Milestone"]})]},s.stepNumber))}),h.jsxs("div",{className:"max-w-3xl mx-auto p-4 rounded-2xl bg-dark-850/70 border border-white/5 flex items-center justify-between gap-4 text-xs text-slate-300 mb-24",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(za,{className:"w-4 h-4 text-emerald-400 shrink-0"}),h.jsx("span",{children:"Exact scope, deliverables, realistic timeline, and payment milestones are formally confirmed before development begins."})]}),h.jsx("span",{className:"font-mono text-neon-cyan shrink-0 hidden sm:inline",children:"No Hidden Terms"})]}),h.jsxs("div",{className:"space-y-8",children:[h.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-electric",children:[h.jsx(Ym,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"FLEXIBLE SERVICE PACKAGES"})]}),h.jsx("h3",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:"Tailored Engagement Packages"}),h.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:["Every business has distinct requirements. Displayed with ",h.jsx("strong",{className:"text-slate-200",children:'"Request a Quote"'})," until your custom project scope is assessed. Quotes are standard in USD with international invoicing available."]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",children:nE.map(s=>h.jsxs("div",{className:`p-7 rounded-3xl bg-dark-900/85 backdrop-blur-md border flex flex-col justify-between transition-all duration-300 relative ${s.isPopular?"border-neon-cyan/50 shadow-xl shadow-neon-cyan/10 bg-gradient-to-b from-dark-850 to-dark-900":"border-white/10 hover:border-white/20"}`,children:[s.isPopular&&h.jsx("div",{className:"absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-neon-cyan text-dark-950 text-[11px] font-bold tracking-wide uppercase font-mono",children:"Recommended for Most Businesses"}),h.jsxs("div",{children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("h4",{className:"text-lg font-bold text-white",children:s.packageName}),h.jsx("p",{className:"text-xs text-slate-400 mt-1",children:s.tagline})]}),h.jsxs("div",{className:"p-3.5 rounded-2xl bg-dark-850 border border-white/5 font-mono text-sm text-neon-cyan font-bold mb-6 flex items-center justify-between",children:[h.jsx("span",{children:s.priceDisplay}),h.jsx("span",{className:"text-[11px] text-slate-400 font-normal",children:"USD Standard"})]}),h.jsxs("div",{className:"space-y-2 mb-6 pb-4 border-b border-white/5 text-xs text-slate-300",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Kd,{className:"w-3.5 h-3.5 text-neon-cyan shrink-0"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Pages:"})," ",s.numberOfPages]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(j0,{className:"w-3.5 h-3.5 text-neon-electric shrink-0"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Timeline:"})," ",s.estimatedDeliveryTime]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(uv,{className:"w-3.5 h-3.5 text-neon-violet shrink-0"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Revisions:"})," ",s.revisionPolicy]})]})]}),h.jsxs("div",{className:"space-y-2 mb-6",children:[h.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider block",children:"Core Inclusions:"}),s.includedFeatures.map((e,n)=>h.jsxs("div",{className:"flex items-start gap-2 text-xs text-slate-300",children:[h.jsx(za,{className:"w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5"}),h.jsx("span",{children:e})]},n))]}),h.jsxs("div",{className:"p-3 rounded-xl bg-dark-850/60 border border-white/5 text-[11px] text-slate-400 mb-6",children:[h.jsx("strong",{className:"text-slate-300 block mb-0.5",children:"Add-on Potential:"}),s.additionalServices]})]}),h.jsx("div",{className:"pt-4 border-t border-white/5",children:h.jsx(Jn,{href:"#enquire",variant:s.isPopular?"primary":"secondary",size:"sm",className:"w-full justify-center",icon:h.jsx(kl,{className:"w-3.5 h-3.5"}),children:"Request a Quote"})})]},s.id))}),h.jsxs("div",{className:"max-w-2xl mx-auto text-center text-xs text-slate-400 flex items-center justify-center gap-2",children:[h.jsx(qm,{className:"w-3.5 h-3.5 text-neon-cyan"}),h.jsx("span",{children:"Final quotation is based strictly on your required functionality, page count, and timeline."})]})]})]})}),sE=()=>{const[s,e]=Ut.useState(st.profilePhotoPlaceholder);return h.jsx("section",{id:"about",className:"py-24 relative bg-dark-950 border-t border-white/5",children:h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-5 flex flex-col items-center",children:[h.jsxs("div",{className:"relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-neon-cyan/40 via-neon-violet/30 to-transparent shadow-2xl shadow-neon-cyan/5 group",children:[h.jsxs("div",{className:"rounded-[22px] bg-dark-900 overflow-hidden border border-white/10 p-4",children:[h.jsx("img",{src:s,onError:()=>e("/WebDev/images/profile-placeholder.svg"),alt:"Vaibhav Sonkusare",className:"w-full aspect-square rounded-2xl object-cover bg-dark-850 transition-transform duration-500 group-hover:scale-102"}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 space-y-2 text-center",children:[h.jsx("div",{className:"font-extrabold text-white text-lg",children:st.fullName}),h.jsx("div",{className:"text-xs font-mono text-neon-cyan",children:st.brandName}),h.jsx("div",{className:"text-[11px] text-slate-400 font-mono",children:"Independent Freelancer • Global Delivery"})]})]}),h.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-dark-850 border border-neon-cyan/30 text-xs font-mono text-neon-cyan shadow-lg whitespace-nowrap flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),h.jsx("span",{children:st.availabilityStatus})]})]}),h.jsxs("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-3 w-full",children:[h.jsxs("a",{href:st.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 sm:flex-initial min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 hover:border-neon-cyan/40 text-xs text-slate-300 hover:text-white transition-colors",children:[h.jsx(Km,{className:"w-4 h-4 text-pink-400"}),h.jsxs("span",{children:["@",st.instagramHandle]})]}),h.jsxs("a",{href:`mailto:${st.email}`,className:"flex-1 sm:flex-initial min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 hover:border-neon-cyan/40 text-xs text-slate-300 hover:text-white transition-colors",children:[h.jsx(Zm,{className:"w-4 h-4 text-neon-cyan"}),h.jsx("span",{children:"Email Me"})]})]})]}),h.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan",children:[h.jsx(bv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"THE CREATOR"})]}),h.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:st.aboutHeading}),h.jsx("div",{className:"space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed",children:st.aboutBio.map((n,r)=>h.jsx("p",{children:n},r))}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4",children:[h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-900/80 border border-white/5 space-y-1",children:[h.jsxs("div",{className:"text-neon-cyan font-bold text-sm flex items-center gap-1.5",children:[h.jsx(Fl,{className:"w-4 h-4"})," AI & No-Code Tools"]}),h.jsx("p",{className:"text-xs text-slate-400",children:"Leveraging modern automation and visual builders for speed, efficiency, and flexibility."})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-900/80 border border-white/5 space-y-1",children:[h.jsxs("div",{className:"text-neon-electric font-bold text-sm flex items-center gap-1.5",children:[h.jsx($d,{className:"w-4 h-4"})," Custom-Coded Polish"]}),h.jsx("p",{className:"text-xs text-slate-400",children:"Writing clean, responsive code when bespoke interactivity, 3D elements, or unique UI is required."})]})]}),h.jsxs("div",{className:"pt-4 flex flex-col sm:flex-row items-center gap-4",children:[h.jsx(Jn,{href:"#enquire",variant:"primary",size:"md",icon:h.jsx(kl,{className:"w-4 h-4"}),className:"w-full sm:w-auto",children:"Start a Conversation"}),h.jsx("div",{className:"text-xs text-slate-400 font-mono",children:"Founder & Lead Creator • Vaibhav Sonkusare"})]})]})]})})})};function jm(s){const e="sonkusare.doc@gmail.com",n=encodeURIComponent(`[Website Project Enquiry] ${s.websiteType} - ${s.fullName} (${s.businessName||s.country})`),r=["Hi Vaibhav,","","I would like to discuss a new website project with you. Here are my project details:","","----------------------------------------------------","PROJECT BRIEF","----------------------------------------------------",`• Full Name: ${s.fullName}`,`• Business / Project: ${s.businessName||"N/A"}`,`• Email: ${s.email}`,`• Country / Location: ${s.country}`,`• Website Type: ${s.websiteType}`,`• Approximate Budget: ${s.budget}`,`• Desired Timeline: ${s.timeline}`,`• Preferred Communication: ${s.preferredCommunication}`,`• Existing Website: ${s.existingWebsiteUrl||"None provided"}`,`• Reference Websites: ${s.referenceWebsites||"None provided"}`,"","----------------------------------------------------","PROJECT GOALS & DESCRIPTION","----------------------------------------------------",s.description,"","----------------------------------------------------","Best regards,",s.fullName].join(`\r
`);return`mailto:${e}?subject=${n}&body=${encodeURIComponent(r)}`}function aE(s){return["=== WEBSITE ENQUIRY BRIEF ===",`Client: ${s.fullName}`,`Business: ${s.businessName||"N/A"}`,`Email: ${s.email}`,`Country: ${s.country}`,`Type: ${s.websiteType}`,`Budget: ${s.budget}`,`Timeline: ${s.timeline}`,`Preferred Method: ${s.preferredCommunication}`,`Existing Site: ${s.existingWebsiteUrl||"None"}`,`References: ${s.referenceWebsites||"None"}`,"","Description:",s.description,"============================="].join(`
`)}const Fg=({message:s,isOpen:e,onClose:n,duration:r=3500})=>(Ut.useEffect(()=>{if(e){const o=setTimeout(()=>{n()},r);return()=>clearTimeout(o)}},[e,r,n]),e?h.jsxs("div",{className:"fixed bottom-6 right-6 z-50 max-w-sm flex items-center gap-3 p-4 rounded-xl bg-dark-900/95 backdrop-blur-lg border border-neon-cyan/40 shadow-2xl shadow-neon-cyan/20 text-white animate-bounce-short",children:[h.jsx(B0,{className:"w-5 h-5 text-neon-cyan shrink-0"}),h.jsx("p",{className:"text-sm font-medium text-slate-200",children:s}),h.jsx("button",{onClick:n,className:"text-slate-400 hover:text-white ml-auto shrink-0 p-1","aria-label":"Close notification",children:h.jsx(Ol,{className:"w-4 h-4"})})]}):null),oE=()=>{const[s,e]=Ut.useState({fullName:"",businessName:"",email:"",country:"",websiteType:"Business Website",budget:"$1,000 - $2,500 USD",timeline:"2 - 4 Weeks",description:"",existingWebsiteUrl:"",referenceWebsites:"",preferredCommunication:"Email"}),[n,r]=Ut.useState({}),[o,c]=Ut.useState(!1),[d,f]=Ut.useState(""),[m,g]=Ut.useState(!1),_=["Business Website","Landing Page","Portfolio Website","E-commerce Website","Website Redesign","Other"],v=["Under $1,000 USD","$1,000 - $2,500 USD","$2,500 - $5,000 USD","$5,000+ USD","Flexible / Request Custom Quote"],y=["Urgent (Under 2 weeks)","2 - 4 Weeks","1 - 2 Months","Flexible"],M=()=>{const x={};return s.fullName.trim()||(x.fullName="Please provide your full name"),s.businessName.trim()||(x.businessName="Please provide your business or project name"),(!s.email.trim()||!/^\S+@\S+\.\S+$/.test(s.email))&&(x.email="Please provide a valid email address"),s.country.trim()||(x.country="Please specify your country or timezone"),(!s.description.trim()||s.description.length<15)&&(x.description="Please describe your project (minimum 15 characters)"),r(x),Object.keys(x).length===0},T=x=>{if(x.preventDefault(),!M())return;const L=jm(s);c(!0),window.location.href=L},C=()=>{if(M()){f("WhatsApp number hasn't been configured yet. Opening email brief instead!"),g(!0);const x=jm(s);c(!0),window.location.href=x;return}},S=()=>{if(!M())return;const x=aE(s);navigator.clipboard.writeText(x).then(()=>{f("Project brief copied to clipboard! You can paste and send it directly."),g(!0)})};return h.jsxs("section",{id:"enquire",className:"py-24 relative bg-dark-950 border-t border-white/5",children:[h.jsx("div",{className:"absolute top-1/3 -right-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[140px] pointer-events-none"}),h.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[h.jsxs("div",{className:"text-center space-y-4 mb-14",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan",children:[h.jsx(Wi,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"START A PROJECT"})]}),h.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Project Enquiry & Scope Brief"}),h.jsxs("p",{className:"text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed",children:["Tell me what you are planning. This form organizes your requirements into a structured brief addressed directly to ",h.jsx("strong",{className:"text-slate-200",children:st.email}),"."]})]}),o&&h.jsxs("div",{className:"mb-8 p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 text-slate-200 space-y-4 animate-in fade-in duration-300",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(za,{className:"w-6 h-6 text-emerald-400 shrink-0"}),h.jsx("h3",{className:"text-lg font-bold text-white",children:"Project Brief Formatted!"})]}),h.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Your default email application has opened with the project specifications addressed to ",h.jsx("strong",{className:"text-neon-cyan",children:st.email}),". Please press ",h.jsx("strong",{children:"Send"})," in your mail client to deliver it."]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[h.jsxs("button",{onClick:S,className:"px-4 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/15 text-xs font-medium text-white flex items-center gap-2 transition-colors cursor-pointer",children:[h.jsx(zp,{className:"w-3.5 h-3.5 text-neon-cyan"}),h.jsx("span",{children:"Copy Raw Brief to Clipboard"})]}),h.jsx("button",{onClick:()=>c(!1),className:"px-4 py-2 rounded-xl bg-transparent hover:bg-white/5 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",children:"Edit Details"})]})]}),h.jsxs("form",{onSubmit:T,className:"p-6 sm:p-10 rounded-3xl bg-dark-900/90 backdrop-blur-xl border border-white/10 shadow-2xl space-y-7",children:[h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-850/80 border border-white/5 flex items-start gap-3 text-xs text-slate-300",children:[h.jsx(qm,{className:"w-4 h-4 text-neon-cyan shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-semibold text-white",children:"Direct & Honest Handshake: "}),"Your submission directly formats an email to ",h.jsx("code",{className:"text-neon-cyan font-mono",children:st.email}),". No silent database drops or spam lists."]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"fullName",className:"block text-xs font-mono text-slate-300",children:["Full Name ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("input",{id:"fullName",type:"text",autoComplete:"name",autoCapitalize:"words",enterKeyHint:"next",placeholder:"e.g. Sarah Jenkins",value:s.fullName,onChange:x=>e({...s,fullName:x.target.value}),className:`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${n.fullName?"border-rose-500":"border-white/10"}`}),n.fullName&&h.jsx("p",{className:"text-xs text-rose-400",children:n.fullName})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"businessName",className:"block text-xs font-mono text-slate-300",children:["Business / Brand Name ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("input",{id:"businessName",type:"text",autoComplete:"organization",autoCapitalize:"words",enterKeyHint:"next",placeholder:"e.g. NorthStar Advisory",value:s.businessName,onChange:x=>e({...s,businessName:x.target.value}),className:`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${n.businessName?"border-rose-500":"border-white/10"}`}),n.businessName&&h.jsx("p",{className:"text-xs text-rose-400",children:n.businessName})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"email",className:"block text-xs font-mono text-slate-300",children:["Email Address ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",autoCapitalize:"none",spellCheck:!1,enterKeyHint:"next",placeholder:"sarah@northstar.com",value:s.email,onChange:x=>e({...s,email:x.target.value}),className:`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${n.email?"border-rose-500":"border-white/10"}`}),n.email&&h.jsx("p",{className:"text-xs text-rose-400",children:n.email})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"country",className:"block text-xs font-mono text-slate-300",children:["Country / Location ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("input",{id:"country",type:"text",autoComplete:"country-name",enterKeyHint:"next",placeholder:"e.g. United States, UK, Canada...",value:s.country,onChange:x=>e({...s,country:x.target.value}),className:`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${n.country?"border-rose-500":"border-white/10"}`}),n.country&&h.jsx("p",{className:"text-xs text-rose-400",children:n.country})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"websiteType",className:"block text-xs font-mono text-slate-300",children:["Website Type ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("select",{id:"websiteType",value:s.websiteType,onChange:x=>e({...s,websiteType:x.target.value}),className:"w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all",children:_.map(x=>h.jsx("option",{value:x,className:"bg-dark-900 text-white",children:x},x))})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"budget",className:"block text-xs font-mono text-slate-300",children:["Approximate Budget (USD) ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("select",{id:"budget",value:s.budget,onChange:x=>e({...s,budget:x.target.value}),className:"w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all",children:v.map(x=>h.jsx("option",{value:x,className:"bg-dark-900 text-white",children:x},x))})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"timeline",className:"block text-xs font-mono text-slate-300",children:["Desired Timeline ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("select",{id:"timeline",value:s.timeline,onChange:x=>e({...s,timeline:x.target.value}),className:"w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all",children:y.map(x=>h.jsx("option",{value:x,className:"bg-dark-900 text-white",children:x},x))})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{htmlFor:"preferredCommunication",className:"block text-xs font-mono text-slate-300",children:"Preferred Communication Method"}),h.jsxs("select",{id:"preferredCommunication",value:s.preferredCommunication,onChange:x=>e({...s,preferredCommunication:x.target.value}),className:"w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all",children:[h.jsx("option",{value:"Email",className:"bg-dark-900 text-white",children:"Email (Default)"}),h.jsx("option",{value:"WhatsApp",className:"bg-dark-900 text-white",children:"WhatsApp"}),h.jsx("option",{value:"Instagram",className:"bg-dark-900 text-white",children:"Instagram Direct Message"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"existingWebsiteUrl",className:"block text-xs font-mono text-slate-300",children:["Existing Website URL ",h.jsx("span",{className:"text-slate-500",children:"(Optional)"})]}),h.jsx("input",{id:"existingWebsiteUrl",type:"url",inputMode:"url",autoComplete:"url",autoCapitalize:"none",spellCheck:!1,enterKeyHint:"next",placeholder:"https://yourcurrentsite.com",value:s.existingWebsiteUrl,onChange:x=>e({...s,existingWebsiteUrl:x.target.value}),className:"w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"referenceWebsites",className:"block text-xs font-mono text-slate-300",children:["Reference / Inspiration Links ",h.jsx("span",{className:"text-slate-500",children:"(Optional)"})]}),h.jsx("input",{id:"referenceWebsites",type:"text",autoCapitalize:"none",spellCheck:!1,enterKeyHint:"next",placeholder:"e.g. stripe.com, linear.app",value:s.referenceWebsites,onChange:x=>e({...s,referenceWebsites:x.target.value}),className:"w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{htmlFor:"description",className:"block text-xs font-mono text-slate-300",children:["Project Description & Goals ",h.jsx("span",{className:"text-rose-400",children:"*"})]}),h.jsx("textarea",{id:"description",rows:4,spellCheck:!0,enterKeyHint:"done",placeholder:"Tell me about your business, the key pages or features you need, and the primary action you want visitors to take...",value:s.description,onChange:x=>e({...s,description:x.target.value}),className:`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all resize-y ${n.description?"border-rose-500":"border-white/10"}`}),n.description&&h.jsx("p",{className:"text-xs text-rose-400",children:n.description})]}),h.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400 text-center sm:text-left",children:[h.jsx(qd,{className:"w-4 h-4 text-neon-cyan shrink-0"}),h.jsx("span",{children:"Response guaranteed within 24 hours. No sales spam."})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto",children:[h.jsxs("button",{type:"button",onClick:S,className:"w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/10 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer",children:[h.jsx(zp,{className:"w-3.5 h-3.5 text-neon-cyan"}),h.jsx("span",{children:"Copy Brief"})]}),h.jsxs("button",{type:"button",onClick:C,className:"w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer",title:"Send inquiry via WhatsApp",children:[h.jsx(Qm,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"WhatsApp Brief"})]}),h.jsxs("button",{type:"submit",className:"w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-electric to-neon-violet text-dark-950 font-bold text-sm shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/35 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 transition-all cursor-pointer",children:[h.jsx(fv,{className:"w-4 h-4"}),h.jsx("span",{children:"Send Project Email"})]})]})]})]})]}),h.jsx(Fg,{message:d,isOpen:m,onClose:()=>g(!1)})]})},lE=()=>{const[s,e]=Ut.useState(""),[n,r]=Ut.useState(!1),o=()=>{e("WhatsApp number hasn't been set yet! You can reach Vaibhav instantly via Email or Instagram below."),r(!0)};return h.jsxs("section",{id:"contact",className:"py-24 relative bg-dark-900/70 border-t border-white/5 overflow-hidden",children:[h.jsx("div",{className:"absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-neon-cyan/15 via-neon-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none"}),h.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),h.jsx("span",{children:st.availabilityStatus})]}),h.jsxs("div",{className:"space-y-4 max-w-3xl mx-auto",children:[h.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:st.contactHeadline}),h.jsx("p",{className:"text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal",children:st.contactSupportingText})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-stretch justify-center gap-3.5 pt-4 max-w-2xl mx-auto",children:[h.jsx(Jn,{href:"#enquire",variant:"primary",size:"lg",icon:h.jsx(Wi,{className:"w-4 h-4"}),className:"w-full sm:w-auto min-h-[48px] justify-center",children:"Start a Project"}),h.jsx(Jn,{href:`mailto:${st.email}`,variant:"secondary",size:"lg",icon:h.jsx(Zm,{className:"w-4 h-4 text-neon-cyan"}),className:"w-full sm:w-auto min-h-[48px] justify-center",children:"Email Me"}),h.jsxs("button",{onClick:o,className:"w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 text-base px-6 py-3 rounded-xl bg-dark-800/90 text-white border border-white/10 hover:border-emerald-500/40 hover:bg-dark-750 transition-all font-semibold cursor-pointer shadow-md group",children:[h.jsx(Qm,{className:"w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"WhatsApp"})]}),h.jsxs("a",{href:st.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 text-base px-6 py-3 rounded-xl bg-dark-800/90 text-white border border-white/10 hover:border-pink-500/40 hover:bg-dark-750 transition-all font-semibold shadow-md group",children:[h.jsx(Km,{className:"w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"Instagram"}),h.jsx(Vs,{className:"w-3.5 h-3.5 text-slate-400 group-hover:text-white"})]})]}),h.jsxs("div",{className:"pt-12 mt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400 text-center sm:text-left",children:[h.jsxs("div",{className:"p-3 rounded-xl bg-dark-850/60 border border-white/5",children:[h.jsx("span",{className:"text-slate-500 block text-[10px] uppercase tracking-wider mb-0.5",children:"Verified Email:"}),h.jsx("a",{href:`mailto:${st.email}`,className:"text-slate-200 hover:text-neon-cyan transition-colors",children:st.email})]}),h.jsxs("div",{className:"p-3 rounded-xl bg-dark-850/60 border border-white/5",children:[h.jsx("span",{className:"text-emerald-400/90 block text-[10px] uppercase tracking-wider mb-0.5 font-bold",children:"Direct WhatsApp:"}),h.jsx("span",{className:"text-slate-300",children:"Available upon request"})]}),h.jsxs("div",{className:"p-3 rounded-xl bg-dark-850/60 border border-white/5",children:[h.jsx("span",{className:"text-slate-500 block text-[10px] uppercase tracking-wider mb-0.5",children:"Instagram Profile:"}),h.jsxs("a",{href:st.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"text-slate-200 hover:text-pink-400 transition-colors",children:["@",st.instagramHandle]})]})]})]}),h.jsx(Fg,{message:s,isOpen:n,onClose:()=>r(!1)})]})},cE=({isOpen:s,onClose:e})=>(Ut.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return s&&(document.body.style.overflow="hidden",window.addEventListener("keydown",n)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",n)}},[s,e]),s?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-in fade-in duration-200",children:h.jsxs("div",{className:"relative w-full max-w-2xl rounded-3xl bg-dark-900 border border-white/15 p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:[h.jsx("button",{onClick:e,className:"absolute top-4 right-4 sm:top-5 sm:right-5 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 cursor-pointer","aria-label":"Close privacy policy",children:h.jsx(Ol,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-neon-cyan",children:h.jsx(Zd,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-xl font-bold text-white",children:"Privacy Policy"}),h.jsx("p",{className:"text-xs text-slate-400 font-mono",children:st.brandName})]})]}),h.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed",children:[h.jsxs("section",{className:"space-y-1.5",children:[h.jsx("h4",{className:"font-semibold text-white",children:"1. Direct Communication & Data Collection"}),h.jsx("p",{children:"This website operates strictly as a direct portfolio and client acquisition platform. We do not run automated marketing tracking pixels or sell user data. Any information provided through the enquiry brief (name, email, project details) is used solely to reply directly to your inquiry and evaluate project requirements."})]}),h.jsxs("section",{className:"space-y-1.5",children:[h.jsx("h4",{className:"font-semibold text-white",children:"2. No Third-Party Database Storage"}),h.jsxs("p",{children:["The project enquiry form operates via direct email dispatch (",h.jsx("code",{className:"text-neon-cyan",children:st.email}),") and direct WhatsApp messaging. Your data is not silently retained on unsecured external databases."]})]}),h.jsxs("section",{className:"space-y-1.5",children:[h.jsx("h4",{className:"font-semibold text-white",children:"3. Third-Party Links"}),h.jsxs("p",{children:["This website includes links to verified personal profiles (such as Instagram at ",h.jsxs("a",{href:st.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"text-neon-cyan hover:underline",children:["@",st.instagramHandle]}),"). We are not responsible for the privacy practices of external platforms."]})]}),h.jsxs("section",{className:"space-y-1.5",children:[h.jsx("h4",{className:"font-semibold text-white",children:"4. Contact & Inquiries"}),h.jsxs("p",{children:["For any questions regarding privacy or to request the deletion of any email correspondence, please contact ",h.jsx("a",{href:`mailto:${st.email}`,className:"text-neon-cyan hover:underline",children:st.email}),"."]})]})]}),h.jsx("div",{className:"mt-8 pt-4 border-t border-white/10 flex justify-end",children:h.jsx("button",{onClick:e,className:"w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-xs font-semibold text-white border border-white/10 transition-colors flex items-center justify-center cursor-pointer",children:"Close Privacy Policy"})})]})}):null),uE=()=>{const[s,e]=Ut.useState(!1),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs("footer",{className:"bg-dark-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[h.jsxs("div",{className:"md:col-span-2 space-y-4",children:[h.jsxs("div",{className:"flex items-center gap-3 font-bold text-white text-base",children:[h.jsx("img",{src:st.logoPlaceholder,alt:"Vaibhav Sonkusare Logo",className:"w-9 h-9 rounded-xl object-cover border border-white/15 shadow-sm"}),h.jsx("span",{children:st.brandName.toUpperCase()})]}),h.jsx("p",{className:"text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed",children:"AI-powered, no-code, and custom-coded website design and development for international businesses, entrepreneurs, and startups."}),h.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-mono text-neon-cyan",children:[h.jsx(Wi,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Independent Freelancer • Global Delivery"})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("h4",{className:"text-white font-mono text-xs uppercase tracking-wider font-semibold",children:"Navigation"}),h.jsxs("ul",{className:"space-y-1 text-xs",children:[h.jsx("li",{children:h.jsx("a",{href:"#",className:"py-1.5 inline-block text-slate-300 hover:text-neon-cyan transition-colors",children:"Home"})}),h.jsx("li",{children:h.jsx("a",{href:"#services",className:"py-1.5 inline-block text-slate-300 hover:text-neon-cyan transition-colors",children:"Services"})}),h.jsx("li",{children:h.jsx("a",{href:"#work",className:"py-1.5 inline-block text-slate-300 hover:text-neon-cyan transition-colors",children:"Demonstration Portfolio"})}),h.jsx("li",{children:h.jsx("a",{href:"#process",className:"py-1.5 inline-block text-slate-300 hover:text-neon-cyan transition-colors",children:"How I Work & Pricing"})}),h.jsx("li",{children:h.jsx("a",{href:"#about",className:"py-1.5 inline-block text-slate-300 hover:text-neon-cyan transition-colors",children:"A Little About Me"})}),h.jsx("li",{children:h.jsx("a",{href:"#enquire",className:"py-1.5 inline-block text-slate-300 hover:text-neon-cyan transition-colors",children:"Start a Project"})})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("h4",{className:"text-white font-mono text-xs uppercase tracking-wider font-semibold",children:"Direct Inquiries"}),h.jsxs("ul",{className:"space-y-1 text-xs font-mono",children:[h.jsx("li",{children:h.jsx("a",{href:`mailto:${st.email}`,className:"py-1.5 inline-block text-slate-300 hover:text-neon-cyan transition-colors break-all",children:st.email})}),st.isWhatsAppConfigured,h.jsx("li",{children:h.jsxs("a",{href:st.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"py-1.5 inline-block text-slate-300 hover:text-pink-400 transition-colors",children:["@",st.instagramHandle]})}),h.jsx("li",{className:"pt-2 text-slate-500 text-[11px]",children:"USD Invoicing / Global Wire & Wise"}),h.jsx("li",{className:"pt-1",children:h.jsxs("button",{onClick:()=>e(!0),className:"min-h-[44px] inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer py-2 focus:outline-none focus:ring-1 focus:ring-neon-cyan/50",children:[h.jsx(xv,{className:"w-3.5 h-3.5 text-neon-cyan"}),h.jsx("span",{children:"Privacy Policy"})]})})]})]})]}),h.jsxs("div",{className:"pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsxs("div",{className:"text-[11px] text-slate-500 text-center sm:text-left",children:["© ",new Date().getFullYear()," ",st.fullName,". All rights reserved.",h.jsx("div",{className:"text-[10px] text-slate-600 mt-1",children:"* Featured projects represent concept demonstrations created to illustrate technical and design capabilities."})]}),h.jsxs("button",{onClick:n,className:"min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-neon-cyan/50","aria-label":"Scroll back to top",children:[h.jsx("span",{children:"Back to top"}),h.jsx(L0,{className:"w-3.5 h-3.5"})]})]})]}),h.jsx(cE,{isOpen:s,onClose:()=>e(!1)})]})},dE=()=>h.jsxs("div",{className:"relative min-h-screen bg-dark-950 text-slate-100 selection:bg-neon-cyan/20 selection:text-neon-cyan flex flex-col justify-between",children:[h.jsx(Pv,{}),h.jsxs("main",{className:"flex-grow",children:[h.jsx(qw,{}),h.jsx(Kw,{}),h.jsx(Jw,{}),h.jsx(eE,{}),h.jsx(rE,{}),h.jsx(sE,{}),h.jsx(oE,{}),h.jsx(lE,{})]}),h.jsx(uE,{})]});b0.createRoot(document.getElementById("root")).render(h.jsx(_0.StrictMode,{children:h.jsx(dE,{})}));
//# sourceMappingURL=index-BG5UUNoc.js.map
